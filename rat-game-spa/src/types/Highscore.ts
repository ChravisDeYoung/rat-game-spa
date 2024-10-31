import { GameDifficulty } from "./GameDifficulty";
import { User } from "./User";

export interface Highscore {
  id: number;
  score: number;
  difficulty: GameDifficulty;
  userId: number;
  user?: User;
}
