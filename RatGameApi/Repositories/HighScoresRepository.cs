namespace RatGameApi.Repositories;

using Microsoft.EntityFrameworkCore;
using RatGameApi.Domain;

public class HighScoresRepository(RatGameContext context)
{
    private readonly RatGameContext _context = context;

    public async Task<HighScore?> GetAsync(int userId, GameDifficulty difficulty)
    {
        var highScore = await this._context.HighScores.FirstOrDefaultAsync(hs => hs.UserId == userId && hs.Difficulty == difficulty);

        return highScore;
    }

    public async Task<List<HighScore>> GetAllAsync(int? userId)
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

    public async Task AddAsync(HighScore highScore) 
    {
        await this._context.AddAsync(highScore);
        
        await this._context.SaveChangesAsync();
    }

    public async Task UpdateAsync(HighScore highScore)
    {
        this._context.Update(highScore);

        await this._context.SaveChangesAsync();
    }

    public async Task DeleteAsync(List<HighScore> highScores)
    {
        this._context.RemoveRange(highScores);

        await this._context.SaveChangesAsync();
    }
}
