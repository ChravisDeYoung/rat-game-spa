
namespace RatGameApi.Domain;

public class Test
{
    public int Id { get; set; }

    public required string Item1 { get; set; }

    public required string Item2 { get; set; }

    public required string Item3 { get; set; }

    public required string Solution { get; set; }

    public required TestDifficulty Difficulty { get; set; }
}
