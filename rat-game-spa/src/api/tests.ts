import { GameDifficulty } from "../types/GameDifficulty";
import { HighScore } from "../types/HighScore";
import { Test } from "../types/Test";

interface TestsResponse {
  tests: Test[];
}

export const fetchTests = async (gameDifficulty: GameDifficulty): Promise<Test[]> => {
  const response = await fetch(
    `http://localhost:5104/api/tests/${gameDifficulty}`,
  );

  const data: TestsResponse = await response.json();

  return data.tests;
};

export const checkTestSolution = async (testId: number, solution: string): Promise<boolean> => {
  const response = await fetch(
    `http://localhost:5104/api/tests/${testId}/check-solution`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ solution })
    }
  );

  const data: boolean = await response.json();

  return data;
};
