namespace RatGameApi.Domain;

public class HighScore
{
    public int Id { get; set; }

    public required int Score { get; set; }

    public required GameDifficulty Difficulty { get; set; }

    public required int UserId { get; set; }
}
