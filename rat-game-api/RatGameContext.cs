using Microsoft.EntityFrameworkCore;
using RatGameApi.Models;

public class RatGameContext : DbContext
{
    public RatGameContext(DbContextOptions<RatGameContext> options) : base(options) { }

    public DbSet<Highscore> Highscores { get; set; }

    public DbSet<User> Users { get; set; }
}