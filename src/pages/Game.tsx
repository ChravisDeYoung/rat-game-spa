import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import jsonData from "../data/tests.json";
import logo from "../assets/rat-logo.png";
import { useLocalStorage } from "../hooks/useLocalStorage";

type RAT = {
  items: Array<string>;
  solution: string;
  difficulty: string;
};
import Timer from "../components/Timer";

const difficultyMapping: { [difficulty: string]: string } = {
  "Very Easy": "#8FD437",
  Easy: "#529200",
  Medium: "#D4A446",
  Hard: "#C7654F",
  "Very Hard": "#833E2F",
};

function GamePage() {
  const tests = useRef<Array<RAT>>(jsonData);
  const [testIndex, setTestIndex] = useState(
    Math.floor(Math.random() * tests.current.length)
  );
  const [answer, setAnswer] = useState<string>("");
  const [score, setScore] = useState<number>(0);
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

  const inputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      checkAnswer();
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

        <div className="flex flex-col items-center">
          <div>
            <div className="bg-gray rounded-full h-20 w-20 inline-block relative top-[1.6rem] right-[40%]">
              <div
                style={{
                  backgroundColor:
                    difficultyMapping[tests.current[testIndex].difficulty],
                }}
                className="h-10 w-10 relative top-[30%] left-1/4 rounded-tl-full rounded-tr-full rounded-bl-full"
              ></div>
            </div>
            <div className="bg-gray rounded-full h-20 w-20 inline-block relative top-[1.6rem] left-[40%]">
              <div
                style={{
                  backgroundColor:
                    difficultyMapping[tests.current[testIndex].difficulty],
                }}
                className="bg-very-easy h-10 w-10 relative top-[30%] left-1/4 rounded-tl-full rounded-tr-full rounded-br-full"
              ></div>
            </div>
          </div>
          {tests.current[testIndex].items.map((x, i) => (
            <p
              key={i}
              className="bg-gray font-medium py-2 w-1/2 my-[0.1rem] text-xl"
            >
              {x}
            </p>
          ))}
        </div>
      <Timer timeInSeconds={time} onTimerFinish={finishGame} />

        <div className="flex flex-col items-center">
          <input
            autoFocus
            className="bg-gray font-medium py-2 w-1/2 mt-5 text-center focus:outline-black text-xl"
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={inputKeyDown}
          ></input>
          <div className="mt-3 w-full">
            <button
              disabled={tests.current.length < 1}
              onClick={skipTest}
              className="bg-pink font-medium py-1 w-1/2 text-center text-sm"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </>
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
