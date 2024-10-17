import { Difficulty, DifficultyMap } from "../types/Difficulty";

export const DIFFICULTY_MAP: DifficultyMap = {
  [Difficulty["Very Easy"]]: { color: "#8FD437", score: 1 },
  [Difficulty.Easy]: { color: "#529200", score: 2 },
  [Difficulty.Medium]: { color: "#D4A446", score: 3 },
  [Difficulty.Hard]: { color: "#C7654F", score: 4 },
  [Difficulty["Very Hard"]]: { color: "#833E2F", score: 5 },
};
