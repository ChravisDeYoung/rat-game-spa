export enum Difficulty {
  "Very Easy",
  Easy,
  Medium,
  Hard,
  "Very Hard",
}

export type DifficultyMap = {
  [key in Difficulty]: { color: string; score: number };
};
