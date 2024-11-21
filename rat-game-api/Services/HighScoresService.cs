namespace RatGameApi.Services;

using Microsoft.EntityFrameworkCore;
using RatGameApi.Domain;

public class HighScoresService(RatGameContext context)
{
    private readonly RatGameContext _context = context;

    public async Task<List<HighScore>> GetHighScores()
    {
        var highScores = await this._context.HighScores.ToListAsync();

        return highScores;
    }

    public async Task<List<HighScore>> GetHighScores(GameDifficulty gameDifficulty)
    {
        var highScores = await this._context.HighScores.Where(hs => hs.Difficulty == gameDifficulty).ToListAsync();

        return highScores;
    }

    public async Task<bool> AddUpdateHighScore(HighScore highScore)
    {
        var existingHighscore = await this._context.HighScores.FirstOrDefaultAsync(hs => hs.Difficulty == highScore.Difficulty);

        if (existingHighscore is null)
        {
            await this._context.AddAsync(highScore);
        }
        else
        {
            existingHighscore.Score = highScore.Score;
            this._context.Update(existingHighscore);
        }

        return await this._context.SaveChangesAsync() > 0;
    }
}
