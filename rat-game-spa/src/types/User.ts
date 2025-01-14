import { HighScoreRename } from "./HighScoreRename";

export interface User {
  id: number;
  username: string;
  highScores?: HighScoreRename[];
}
