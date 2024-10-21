using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RatGameApi.Models;

public class Highscore 
{
    [Key]
    public int Id { get; set; }

    [Required]
    public int Score { get; set;}

    [Required]
    public Difficulty Difficulty { get; set; }

    [Required, ForeignKey(nameof(User))]
    public int UserId { get; set; }

    public User? User { get; set; }
}

public enum Difficulty
{
    Easy = 1,
    Medium,
    Hard
}

public record HighscoreRequest(
    int Score,
    Difficulty Difficulty
);