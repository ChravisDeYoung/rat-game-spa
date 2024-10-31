export enum TestDifficulty {
  "Very Easy",
  Easy,
  Medium,
  Hard,
  "Very Hard",
}

export type DifficultyMap = {
  [key in TestDifficulty]: { color: string; score: number };
};
