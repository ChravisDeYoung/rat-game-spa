using System.ComponentModel.DataAnnotations;

namespace RatGameApi.Models;

public class Test 
{
    [Key]
    public int Id { get; set; }

    [Required]
    public required string Item1 { get; set;}

    [Required]
    public required string Item2 { get; set;}

    [Required]
    public required string Item3 { get; set;}

    [Required]
    public required string Solution { get; set;}

    [Required]
    public TestDifficulty Difficulty { get; set;}
}

public enum TestDifficulty
{
    VeryEasy = 1,
    Easy,
    Medium,
    Hard,
    VeryHard
}
