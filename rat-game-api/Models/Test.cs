namespace RatGameApi.Models;
using System.ComponentModel.DataAnnotations;

public class Test
{
    [Key]
    public int Id { get; set; }

    [Required]
    public required string Item1 { get; set; }

    [Required]
    public required string Item2 { get; set; }

    [Required]
    public required string Item3 { get; set; }

    [Required]
    public required string Solution { get; set; }

    [Required]
    public TestDifficulty Difficulty { get; set; }
}

public record TestRequest(
    string Solution
);

public record TestResponse(
    int Id,
    string Item1,
    string Item2,
    string Item3,
    TestDifficulty Difficulty
);
