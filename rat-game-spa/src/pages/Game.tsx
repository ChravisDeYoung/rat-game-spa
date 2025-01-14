import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RatDisplay from "../components/RatDisplay";
import Timer from "../components/Timer";
import { DIFFICULTY_MAP } from "../data/constants";
import jsonData from "../data/tests.json";
import { TestDifficulty } from "../types/TestDifficulty";
import { GameDifficulty } from "../types/GameDifficulty";
import { Test } from "../types/Test";
import { fetchTests } from "../api/tests";

function GamePage() {
  const { state } = useLocation();
  const { difficulty }: { difficulty: GameDifficulty } = state;
  const navigate = useNavigate();

  const [testIndex, setTestIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [time, setTime] = useState<number>(15);
  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    fetchTests(difficulty).then((data) => {
      setTests(data);
      setTestIndex(Math.floor(Math.random() * tests.length));
    });
  }, []);

  const updateDisplay = (): void => {
    setScore(
      (prev) =>
        prev + DIFFICULTY_MAP[tests[testIndex].difficulty].score,
    );

    setTime(time + 5);

    changeTest(true);
  };

  const changeTest = (removeTest: boolean): void => {
    if (removeTest) {
      tests.splice(testIndex, 1);

      setTestIndex(Math.floor(Math.random() * tests.length));
    } else {
      let randomIndex: number = Math.floor(
        Math.random() * tests.length,
      );

      while (randomIndex === testIndex && tests.length > 1) {
        randomIndex = Math.floor(Math.random() * tests.length);
      }

      setTestIndex(randomIndex);
    }
  };

  return tests.length > 0 ? (
    <div>
      <h3 className="font-bold text-medium mt-5">{score}</h3>

      <Timer
        timeInSeconds={time}
        onTimerFinish={() =>
          navigate("/game-over", {
            state: { score: score, difficulty: difficulty },
          })
        }
      />

      <RatDisplay
        test={tests[testIndex]}
        onCorrectAnswer={updateDisplay}
        onSkipTest={() => tests.length > 1 && changeTest(false)}
      />
    </div>
  ) : (
    <div>you win I guess</div>
  );
}

export default GamePage;
