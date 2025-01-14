import { GameDifficulty } from "../types/GameDifficulty";
import { HighScore } from "../types/HighScore";

interface HighScoresResponse {
  highScores: HighScore[];
}

export const fetchHighScores = async (userId: number): Promise<HighScore[]> => {
  const response = await fetch(
    `http://localhost:5104/api/high-scores/${userId}`,
  );

  const data: HighScoresResponse = await response.json();

  return data.highScores;
};

export const updateHighScore = async (score: number, difficulty: GameDifficulty, userId: number): Promise<HighScore> => {
  const response = await fetch(
    'http://localhost:5104/api/high-scores', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, score, difficulty })
    }
  );

  const data: HighScore = await response.json();

  return data;
};

export const removeHighScores = async (userId: number): Promise<void> => {
  await fetch(`http://localhost:5104/api/high-scores/${userId}`, {
    method: "DELETE",
  });
};
