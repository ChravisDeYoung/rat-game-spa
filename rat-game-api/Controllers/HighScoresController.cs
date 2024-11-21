namespace RatGameApi.Controllers;

using Microsoft.AspNetCore.Mvc;
using RatGameApi.Domain;
using RatGameApi.Services;

[ApiController]
[Route("api/[controller]")]
public class HighScoresController(HighScoresService highScoresService) : ControllerBase
{
    private readonly HighScoresService _highScoresService = highScoresService;

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var highScores = await this._highScoresService.GetHighScores();

        return highScores is null || highScores.Count == 0
            ? this.NotFound("No high scores found")
            : this.Ok(HighScoresResponse.FromDomain(highScores));
    }

    [HttpGet("{gameDifficulty}")]
    public async Task<IActionResult> Get(GameDifficulty gameDifficulty)
    {
        var highScores = await this._highScoresService.GetHighScores(gameDifficulty);

        return highScores is null || highScores.Count == 0
            ? this.NotFound("No high scores found")
            : this.Ok(HighScoresResponse.FromDomain(highScores));
    }

    [HttpPost]
    public async Task<IActionResult> Upsert(CreateRequest request)
    {
        // TODO: fix return type -> new high score? could also split into two methods

        var highScore = request.ToDomain();

        var isSaved = this._highScoresService.AddUpdateHighScore(highScore);

        return this.Ok(isSaved);
    }
}

public record HighScoreResponse(int Score, GameDifficulty Difficulty)
{
    public static HighScoreResponse FromDomain(HighScore highScore) => new(highScore.Score, highScore.Difficulty);
}

public record HighScoresResponse(List<HighScoreResponse> HighScores)
{
    public static HighScoresResponse FromDomain(List<HighScore> highScores) => new(highScores.Select(HighScoreResponse.FromDomain).ToList());
}

public record CreateRequest(int Score, GameDifficulty Difficulty)
{
    public HighScore ToDomain() => new()
    {
        Score = this.Score,
        Difficulty = this.Difficulty,
    };
}
