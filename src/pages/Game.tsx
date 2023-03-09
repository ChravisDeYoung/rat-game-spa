import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import jsonData from "../data/tests.json";
import logo from "../assets/rat-logo.png";
import { useLocalStorage } from "../hooks/useLocalStorage";

import Timer from "../components/Timer";
import RatDisplay from "../components/RatDisplay";
import { RAT } from "../types/Rat";

const SCORE_MAPPING: { [difficulty: string]: number } = {
  "Very Easy": 1,
  Easy: 2,
  Medium: 3,
  Hard: 4,
  "Very Hard": 5,
};

function GamePage() {
  const tests = useRef<Array<RAT>>(jsonData);
  const [testIndex, setTestIndex] = useState(
    Math.floor(Math.random() * tests.current.length)
  );
  const [score, setScore] = useState<number>(0);
  const [highscore, setHighscore] = useLocalStorage("highscore", 0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [time, setTime] = useState<number>(30);

  const updateDisplay = () => {
    setScore(
      (prev) => prev + SCORE_MAPPING[tests.current[testIndex].difficulty]
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

  const finishGame = () => {
    if (score > highscore) {
      setHighscore(score);
    }
    setGameOver(true);
  };

  return !gameOver && tests.current.length > 0 ? (
    <div>
      <h3 className="font-semibold text-3xl mt-5">{score}</h3>

      <Timer timeInSeconds={time} onTimerFinish={finishGame} />

      <RatDisplay
        rat={tests.current[testIndex]}
        onCorrectAnswer={updateDisplay}
        onSkipTest={() => tests.current.length > 1 && changeTest()}
      />
    </div>
  ) : (
    <div>
      <div>
        <img className="my-5 mx-auto w-3/4" src={logo} />
        <h1 className="font-bold text-5xl tracking-widest">Game Over</h1>
      </div>

      <div className="my-10">
        <h2 className="font-semibold mb-1 text-xl">score</h2>
        <span className="font-bold text-5xl">{score}</span>
      </div>

      <div className="flex flex-col items-center">
        <Link
          className="bg-gray font-medium py-2 w-1/2 my-2 text-xl"
          to="/game"
        >
          play again
        </Link>
        <Link className="bg-gray font-medium py-2 w-1/2 my-2 text-xl" to="/">
          home
        </Link>
      </div>
    </div>
  );
}

export default GamePage;
