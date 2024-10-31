import { Highscore } from "./Highscore";

export interface User {
  id: number;
  username: string;
  highscores?: Highscore[];
}
