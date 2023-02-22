import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import jsonData from "../data/tests.json";
import { useLocalStorage } from "../hooks/useLocalStorage";

type RAT = {
  items: Array<string>;
  solution: string;
  difficulty: string;
};

const difficultyMapping: { [difficulty: string]: string } = {
  "Very Easy": "#97ff82",
  Easy: "#1ba300",
  Medium: "#ffd52b",
  Hard: "#ff4d4d",
  "Very Hard": "#690000",
};

function GamePage() {
  const tests = useRef<Array<RAT>>(jsonData);
  const [testIndex, setTestIndex] = useState(
    Math.floor(Math.random() * tests.current.length)
  );
  const [answer, setAnswer] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [gameClock, setGameClock] = useState<number>(30);
  const [highscore, setHighscore] = useLocalStorage("highscore", 0);

  const checkAnswer = () => {
    if (answer.toLowerCase().trim() === tests.current[testIndex].solution) {
      tests.current.splice(testIndex, 1);
      setTestIndex(Math.floor(Math.random() * tests.current.length));
      setScore((prev) => prev + 1);
    } else {
      // TODO: something when you're wrong
    }

    setAnswer("");
  };

  const skipTest = () => {
    if (tests.current.length > 1) {
      let randomIndex = Math.floor(Math.random() * tests.current.length);
      while (randomIndex === testIndex) {
        randomIndex = Math.floor(Math.random() * tests.current.length);
      }

      setTestIndex(randomIndex);
    }
  };

  useEffect(() => {
    if (gameClock > 0) {
      setTimeout(() => {
        setGameClock((prev) => prev - 1);
      }, 1000);
    } else if (score > highscore) {
      setHighscore(score);
    }
  }, [gameClock]);

  return gameClock > 0 ? (
    <div className="card">
      <h2>Time Left: {gameClock}</h2>
      <div className="card">
        <h3>{score}</h3>
        {tests.current[testIndex].items.map((x, i) => (
          <p
            key={i}
            style={{
              color: difficultyMapping[tests.current[testIndex].difficulty],
            }}
          >
            {x}
          </p>
        ))}
      </div>

      <div className="card">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></input>
        <button onClick={checkAnswer}>Check</button>
      </div>

      <div className="card">
        <button disabled={tests.current.length < 1} onClick={skipTest}>
          Skip
        </button>
      </div>
    </div>
  ) : (
    <div className="card">
      <h2>Game Over</h2>
      <h3>Score: {score}</h3>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default GamePage;
