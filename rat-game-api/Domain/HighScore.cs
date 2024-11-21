namespace RatGameApi.Domain;

using System.ComponentModel.DataAnnotations;

public class HighScore
{
    [Key]
    public int Id { get; set; }

    [Required]
    public int Score { get; set; }

    [Required]
    public GameDifficulty Difficulty { get; set; }
}
