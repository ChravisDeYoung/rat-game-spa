import { GameDifficulty } from "./GameDifficulty";

export interface HighScoreRename {
  score: number;
  difficulty: GameDifficulty;
  userId: number;
}
