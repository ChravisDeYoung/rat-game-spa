namespace RatGameApi.Services;

using RatGameApi.Domain;
using RatGameApi.Repositories;

public class HighScoresService(HighScoresRepository highScoresRepository)
{
    private readonly HighScoresRepository _highScoresRepository = highScoresRepository;

    public async Task<List<HighScore>> GetHighScoresAsync(int? userId) => await this._highScoresRepository.GetAllAsync(userId);

    public async Task AddUpdateHighScoreAsync(HighScore highScore)
    {
        var existingHighscore = await this._highScoresRepository.GetAsync(highScore.UserId, highScore.Difficulty);

        if (existingHighscore is null)
        {
            await this._highScoresRepository.AddAsync(highScore);
        }
        else
        {
            existingHighscore.Score = highScore.Score;
            await this._highScoresRepository.UpdateAsync(existingHighscore);
        }
    }

    public async Task DeleteHighScoresAsync(int userId)
    {
        var highScores = await this._highScoresRepository.GetAllAsync(userId);

        await this._highScoresRepository.DeleteAsync(highScores);
    }
}
