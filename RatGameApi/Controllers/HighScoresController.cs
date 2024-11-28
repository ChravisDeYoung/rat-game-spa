namespace RatGameApi.Controllers;

using Microsoft.AspNetCore.Mvc;
using RatGameApi.Domain;
using RatGameApi.Services;

[ApiController]
[Route("api/high-scores")]
public class HighScoresController(HighScoresService highScoresService) : ControllerBase
{
    private readonly HighScoresService _highScoresService = highScoresService;


    [HttpGet("{userId?}")]
    public async Task<IActionResult> Get(int? userId)
    {
        var highScores = await this._highScoresService.GetHighScoresAsync(userId);

        return highScores is null || highScores.Count == 0
            ? this.NotFound("No high scores found")
            : this.Ok(HighScoresResponse.FromDomain(highScores));
    }

    [HttpPost]
    public async Task<IActionResult> Upsert(CreateRequest request)
    {
        var highScore = request.ToDomain();

        await this._highScoresService.AddUpdateHighScoreAsync(highScore);

        return this.Ok(highScore);
    }

    [HttpDelete("{userId}")]
    public async Task<IActionResult> Delete(int userId)
    {
        await this._highScoresService.DeleteHighScoresAsync(userId);

        return this.NoContent();
    }
}

public record HighScoreResponse(int Score, GameDifficulty Difficulty, int UserId)
{
    public static HighScoreResponse FromDomain(HighScore highScore) => new(highScore.Score, highScore.Difficulty, highScore.UserId);
}

public record HighScoresResponse(List<HighScoreResponse> HighScores)
{
    public static HighScoresResponse FromDomain(List<HighScore> highScores) => new(highScores.Select(HighScoreResponse.FromDomain).ToList());
}

public record CreateRequest(int Score, GameDifficulty Difficulty, int UserId)
{
    public HighScore ToDomain() => new()
    {
        Score = this.Score,
        Difficulty = this.Difficulty,
        UserId = this.UserId
    };
}
