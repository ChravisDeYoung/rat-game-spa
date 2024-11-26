namespace RatGameApi.Services;

using Microsoft.EntityFrameworkCore;
using RatGameApi.Domain;

public class HighScoresService(RatGameContext context)
{
    private readonly RatGameContext _context = context;

    public async Task<List<HighScore>> GetHighScores(int? userId)
    {
        List<HighScore> highScores;

        if (userId is null)
        {
            highScores = await this._context.HighScores.ToListAsync();
        }
        else
        {
            highScores = await this._context.HighScores.Where(hs => hs.UserId == userId).ToListAsync();
        }

        return highScores;
    }

    /// <summary>
    /// Adds or updates a high score depending on if it already exists
    /// </summary>
    /// <param name="highScore"></param>
    /// <returns></returns>
    public async Task<bool> AddUpdateHighScore(HighScore highScore)
    {
        var existingHighscore = await this._context.HighScores.FirstOrDefaultAsync(hs => hs.Difficulty == highScore.Difficulty && hs.UserId == highScore.UserId);

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
