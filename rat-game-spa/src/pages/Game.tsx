import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RatDisplay from "../components/RatDisplay";
import Timer from "../components/Timer";
import { DIFFICULTY_MAP } from "../data/constants";
import jsonData from "../data/tests.json";
import { TestDifficulty } from "../types/TestDifficulty";
import { RAT } from "../types/Rat";
import { GameDifficulty } from "../types/GameDifficulty";

function GamePage() {
  const { state } = useLocation();
  const { difficulty } = state;
  const navigate = useNavigate();

  const tests = useRef<Array<RAT>>(
    jsonData
      .filter((obj) => TestDifficulty.hasOwnProperty(obj.difficulty))
      .map((obj) => {
        return {
          items: obj.items,
          solution: obj.solution,
          difficulty: TestDifficulty[obj.difficulty as keyof typeof TestDifficulty],
        };
      })
      .filter((test) => (difficulty == GameDifficulty.Easy 
          && (test.difficulty == TestDifficulty["Very Easy"] || test.difficulty == TestDifficulty.Easy))
        || (difficulty == GameDifficulty.Medium 
          && (test.difficulty == TestDifficulty.Medium || test.difficulty == TestDifficulty.Hard))
        || (difficulty == GameDifficulty.Hard))
  );

  const [testIndex, setTestIndex] = useState(
    Math.floor(Math.random() * tests.current.length)
  );
  const [score, setScore] = useState<number>(0);
  const [time, setTime] = useState<number>(15);

  const updateDisplay = () => {
    setScore(
      (prev) => prev + DIFFICULTY_MAP[tests.current[testIndex].difficulty].score
    );
    setTime(time + 5);
    changeTest(true);
  };

  const changeTest = (remove: boolean = false) => {
    if (remove) {
      tests.current.splice(testIndex, 1);
      setTestIndex(Math.floor(Math.random() * tests.current.length));
    } else {
      let randomIndex: number = Math.floor(
        Math.random() * tests.current.length
      );
      while (randomIndex === testIndex && tests.current.length > 1) {
        randomIndex = Math.floor(Math.random() * tests.current.length);
      }
      setTestIndex(randomIndex);
    }
  };

  return tests.current.length > 0 ? (
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
        rat={tests.current[testIndex]}
        onCorrectAnswer={updateDisplay}
        onSkipTest={() => tests.current.length > 1 && changeTest()}
      />
    </div>
  ) : (
    <div>you win I guess</div>
  );
}

export default GamePage;
