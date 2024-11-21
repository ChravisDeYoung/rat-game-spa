
namespace RatGameApi.Domain;

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
