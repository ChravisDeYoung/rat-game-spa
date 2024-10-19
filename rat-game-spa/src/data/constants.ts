import { TestDifficulty, DifficultyMap } from "../types/TestDifficulty";

export const DIFFICULTY_MAP: DifficultyMap = {
  [TestDifficulty["Very Easy"]]: { color: "#8FD437", score: 1 },
  [TestDifficulty.Easy]: { color: "#529200", score: 2 },
  [TestDifficulty.Medium]: { color: "#D4A446", score: 3 },
  [TestDifficulty.Hard]: { color: "#C7654F", score: 4 },
  [TestDifficulty["Very Hard"]]: { color: "#833E2F", score: 5 },
};
