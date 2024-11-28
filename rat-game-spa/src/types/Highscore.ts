import { GameDifficulty } from "./GameDifficulty";

export interface HighScore {
  score: number;
  difficulty: GameDifficulty;
  userId: number;
}
