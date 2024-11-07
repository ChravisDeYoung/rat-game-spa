using Microsoft.EntityFrameworkCore;
using RatGameApi.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddAuthentication();

var connectionString = builder.Configuration.GetConnectionString("RatGameDb");
builder.Services.AddDbContext<RatGameContext>(options => options.UseSqlServer(connectionString));

builder.Services.AddCors(options => options.AddDefaultPolicy(builder => builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader()));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast")
.WithOpenApi();

app.MapGet("/{userId}/highscore", (int userId, RatGameContext context) =>
    context.Highscores.FirstOrDefault(h => h.UserId == userId))
.WithName("GetHighscore")
.WithOpenApi();

app.MapGet("/{userId}/highscores", (int userId, RatGameContext context) =>
    context.Highscores.Where(h => h.UserId == userId))
.WithName("GetHighscores")
.WithOpenApi();

app.MapPut("/{userId}/highscore", (int userId, HighscoreRequest request, RatGameContext context) =>
{
    var existingHighscore = context.Highscores
        .FirstOrDefault(h => h.UserId == userId && h.Difficulty == request.Difficulty);

    // update 
    if (existingHighscore != null)
    {
        existingHighscore.Score = request.Score;
        context.Highscores.Update(existingHighscore);
    }
    // insert 
    else
    {
        var newHighscore = new Highscore
        {
            UserId = userId,
            Score = request.Score,
            Difficulty = request.Difficulty,
        };

        context.Highscores.Add(newHighscore);
    }

    context.SaveChanges();

    return Results.Ok();
})
.WithName("UpsertHighscore")
.WithOpenApi();

app.MapDelete("/{userId}/highscores", (int userId, RatGameContext context) =>
{
    var allHighscores = context.Highscores.Where(h => h.UserId == userId);
    context.Highscores.RemoveRange(allHighscores);
    context.SaveChanges();

    return Results.Ok();
})
.WithName("DeleteHighscores")
.WithOpenApi();

app.MapGet("/tests/{difficulty}", (GameDifficulty difficulty, RatGameContext context) =>
{
    var tests = difficulty switch
    {
        GameDifficulty.Easy => context.Tests.Where(t => t.Difficulty == TestDifficulty.VeryEasy || t.Difficulty == TestDifficulty.Easy),
        GameDifficulty.Medium => context.Tests.Where(t => t.Difficulty == TestDifficulty.Medium || t.Difficulty == TestDifficulty.Hard),
        GameDifficulty.Hard => context.Tests,
        _ => context.Tests
    };

    return Results.Ok(tests.Select(t => new TestResponse(t.Id, t.Item1, t.Item2, t.Item3, t.Difficulty)));
})
.WithName("GetTests")
.WithOpenApi();

app.MapPost("/{testId}/solution", (int testId, TestRequest request, RatGameContext context) =>
{
    var test = context.Tests.FirstOrDefault(t => t.Id == testId);

    if (test != null
        && !string.IsNullOrEmpty(request.Solution)
        && test.Solution.Trim().Equals(request.Solution.Trim(), StringComparison.OrdinalIgnoreCase))
    {
        return Results.Ok(true);
    }
    else
    {
        return Results.Ok(false);
    }
})
.WithName("CheckSolution")
.WithOpenApi();

app.Run();

internal sealed record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(this.TemperatureC / 0.5556);
}
