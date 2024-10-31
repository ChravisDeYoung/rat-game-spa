export enum TestDifficulty {
  "Very Easy",
  Easy,
  Medium,
  Hard,
  "Very Hard",
}

export type DifficultyMap = Record<TestDifficulty, { color: string; score: number }>;
