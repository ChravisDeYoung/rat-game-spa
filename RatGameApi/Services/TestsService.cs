namespace RatGameApi.Services;

using Microsoft.EntityFrameworkCore;
using RatGameApi.Domain;

public class TestsService(RatGameContext context)
{
    private readonly RatGameContext _context = context;

    public async Task<List<Test>> GetTestsByDifficulty(GameDifficulty difficulty)
    {
        var tests = difficulty switch
        {
            GameDifficulty.Easy => await this._context.Tests.Where(t => t.Difficulty == TestDifficulty.VeryEasy || t.Difficulty == TestDifficulty.Easy).ToListAsync(),
            GameDifficulty.Medium => await this._context.Tests.Where(t => t.Difficulty == TestDifficulty.Medium || t.Difficulty == TestDifficulty.Hard).ToListAsync(),
            GameDifficulty.Hard => await this._context.Tests.ToListAsync(),
            _ => await context.Tests.ToListAsync()
        };

        return tests;
    }

    public async Task<bool> CheckTestSolution(int testId, string guessedSolution)
    {
        var test = await this._context.Tests.FindAsync(testId);

        if (test is null)
        {
            return false;
        }

        return test.Solution.Trim().Equals(guessedSolution.Trim(), StringComparison.OrdinalIgnoreCase);
    }
}
