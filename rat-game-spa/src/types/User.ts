import { HighScore } from "./HighScore";

export interface User {
  id: number;
  username: string;
  highScores?: HighScore[];
}
