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

export const removeHighScores = async (userId: number): Promise<void> => {
  await fetch(`http://localhost:5104/api/high-scores/${userId}`, {
    method: "DELETE",
  });
};
