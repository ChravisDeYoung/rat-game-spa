using System.ComponentModel.DataAnnotations;

public class Highscore 
{
    [Key]
    public int Id { get; set; }

    [Required]
    public int Score { get; set;}

    [Required]
    public Difficulty Difficulty{ get; set; }
}

public enum Difficulty
{
    Easy,
    Medium,
    Hard
}