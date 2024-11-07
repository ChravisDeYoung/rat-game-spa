namespace RatGameApi.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Highscore
{
    [Key]
    public int Id { get; set; }

    [Required]
    public int Score { get; set; }

    [Required]
    public GameDifficulty Difficulty { get; set; }

    [Required, ForeignKey(nameof(User))]
    public int UserId { get; set; }

    public User? User { get; set; }
}

public record HighscoreRequest(
    int Score,
    GameDifficulty Difficulty
);
