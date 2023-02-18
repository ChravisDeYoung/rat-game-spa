import { useEffect, useRef, useState } from "react";

import jsonData from "../data/tests.json";

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
  const [winCount, setWinCount] = useState<number>(0);
  const [gameClock, setGameClock] = useState<number>(30);

  const checkAnswer = () => {
    if (answer.trim() === tests.current[testIndex].solution) {
      alert("winner!");
      tests.current.splice(testIndex, 1);
      setTestIndex(Math.floor(Math.random() * tests.current.length));
      setWinCount((prev) => prev + 1);
    } else {
      alert("oops, try again...");
    }

    setAnswer("");
  };

  useEffect(() => {
    if (gameClock > 0) {
      setTimeout(() => {
        setGameClock((prev) => prev - 1);
      }, 1000);
    }
  }, [gameClock]);

  return (
    <div className="card">
      <h2>Time Left: {gameClock}</h2>
      <div className="card">
        <h3>{winCount}</h3>
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
        <button
          onClick={() =>
            setTestIndex(Math.floor(Math.random() * tests.current.length))
          }
        >
          Skip
        </button>
      </div>
    </div>
  );
}

export default GamePage;
