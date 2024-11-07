namespace RatGameApi.Models;
using System.ComponentModel.DataAnnotations;

public class User
{
    [Key]
    public int Id { get; set; }

    [Required]
    public required string Username { get; set; }

    public List<Highscore>? Highscores { get; set; }
}
