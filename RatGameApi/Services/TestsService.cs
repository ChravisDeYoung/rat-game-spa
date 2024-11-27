namespace RatGameApi.Services;

using RatGameApi.Domain;
using RatGameApi.Repositories;

public class TestsService(TestsRepository testsRepository)
{
    private readonly TestsRepository _testsRepository = testsRepository;

    public async Task<List<Test>> GetTestsByDifficultyAsync(GameDifficulty difficulty)
    {
        var testDifficulties = new List<TestDifficulty>();

        switch (difficulty)
        {
            case GameDifficulty.Easy:
                testDifficulties.Add(TestDifficulty.VeryEasy);
                testDifficulties.Add(TestDifficulty.Easy);
                break;
            case GameDifficulty.Medium:
                testDifficulties.Add(TestDifficulty.Medium);
                testDifficulties.Add(TestDifficulty.Hard);
                break;
            case GameDifficulty.Hard:
                testDifficulties.Add(TestDifficulty.VeryHard);
                break;
            default:
                testDifficulties.Add(TestDifficulty.VeryEasy);
                testDifficulties.Add(TestDifficulty.Easy);
                testDifficulties.Add(TestDifficulty.Medium);
                testDifficulties.Add(TestDifficulty.Hard);
                testDifficulties.Add(TestDifficulty.VeryHard);
                break;
        };

        return await this._testsRepository.GetTestsByDifficultyAsync(testDifficulties);
    }

    public async Task<bool> CheckTestSolution(int testId, string guessedSolution)
    {
        var test = await this._testsRepository.GetAsync(testId);

        if (test is null)
        {
            return false;
        }

        return test.Solution.Trim().Equals(guessedSolution.Trim(), StringComparison.OrdinalIgnoreCase);
    }
}
