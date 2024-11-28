// src/api/highscores.ts
import { Highscore } from "../types/Highscore";

interface HighScoresResponse {
    highScores: Highscore[]
}

export const fetchHighscores = async (userId: number): Promise<Highscore[]> => {
  const response = await fetch(`http://localhost:5104/api/highscores/${userId}`);
  
  const data: HighScoresResponse = await response.json();
  
  return data.highScores;
}

export const removeHighscores = async (userId: number): Promise<void> => {
  await fetch(`http://localhost:5104/api/highscores/${userId}`, { method: "DELETE" });
}