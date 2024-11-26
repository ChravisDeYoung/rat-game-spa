namespace RatGameApi.Controllers;

using Microsoft.AspNetCore.Mvc;
using RatGameApi.Domain;
using RatGameApi.Services;

[ApiController]
[Route("api/[controller]")]
public class TestsController(TestsService testsService) : ControllerBase
{
    private readonly TestsService _testsService = testsService;

    [HttpGet("{gameDifficulty}")]
    public async Task<IActionResult> Get(GameDifficulty gameDifficulty)
    {
        var tests = await this._testsService.GetTestsByDifficulty(gameDifficulty);

        return tests is null || tests.Count == 0
            ? this.NotFound("No tests not found")
            : this.Ok(TestsResponse.FromDomain(tests));
    }

    [HttpPost("{testId}/check-solution")]
    public async Task<IActionResult> CheckSolution(int testId, CheckSolutionRequest request)
    {
        var isCorrect = await this._testsService.CheckTestSolution(testId, request.Solution);

        return this.Ok(isCorrect);
    }
}

public record TestResponse(
    int Id,
    string Item1,
    string Item2,
    string Item3,
    TestDifficulty Difficulty
)
{
    public static TestResponse FromDomain(Test test) => new(test.Id, test.Item1, test.Item2, test.Item3, test.Difficulty);
}

public record TestsResponse(List<TestResponse> Tests)
{
    public static TestsResponse FromDomain(List<Test> tests) => new(tests.Select(TestResponse.FromDomain).ToList());
}

public record CheckSolutionRequest(string Solution);
