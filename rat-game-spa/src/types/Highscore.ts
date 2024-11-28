import { GameDifficulty } from "./GameDifficulty";

export interface Highscore {
  score: number;
  difficulty: GameDifficulty;
  userId: number;
}
