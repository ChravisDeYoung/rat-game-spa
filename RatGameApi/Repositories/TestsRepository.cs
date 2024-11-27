namespace RatGameApi.Repositories;

using Microsoft.EntityFrameworkCore;
using RatGameApi.Domain;

public class TestsRepository(RatGameContext context)
{
    private readonly RatGameContext _context = context;

    public async Task<List<Test>> GetTestsByDifficultyAsync(List<TestDifficulty> difficulties)
    {
        var tests = await this._context.Tests.Where(t => difficulties.Contains(t.Difficulty)).ToListAsync();

        return tests;
    }

    public async Task<Test?> GetAsync(int testId) => await this._context.Tests.FindAsync(testId);
}
