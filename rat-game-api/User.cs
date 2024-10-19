using System.ComponentModel.DataAnnotations;

namespace RatGameApi.Models;

public class User
{
    [Key]
    public int Id { get; set; }

    [Required]
    public required string Username { get; set; }

    public List<Highscore>? Highscores { get; set; }
}