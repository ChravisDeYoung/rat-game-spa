using Microsoft.EntityFrameworkCore;

public class RatGameContext : DbContext
{
    public RatGameContext(DbContextOptions<RatGameContext> options) : base(options) { }

    public DbSet<Highscore> Highscores { get; set; }
}