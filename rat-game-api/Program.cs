using Microsoft.EntityFrameworkCore;
using RatGameApi.Models;

var builder = WebApplication.CreateBuilder(args);

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

app.Run();

internal sealed record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(this.TemperatureC / 0.5556);
}
