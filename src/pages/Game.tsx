import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import jsonData from "../data/tests-sample.json";
import logo from "../assets/rat-logo.png";
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

  const inputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      checkAnswer();
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

  return gameClock > 0 && tests.current.length > 0 ? (
    <>
      <div>
        <h3 className="font-semibold text-3xl mt-5">{score}</h3>

        <div
          className="bg-yellow-600 rounded-full h-20 w-20 mx-auto my-10"
          style={{
            backgroundImage:
              "conic-gradient(rgb(253 224 71)" +
              (100 - Math.round((gameClock / 30) * 100)) +
              "%, rgb(202 138 4) " +
              (100 - Math.round((gameClock / 30) * 100)) +
              "%)",
          }}
        >
          <h1 className="font-bold text-[3rem]">{gameClock}</h1>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <div className="bg-gray rounded-full h-20 w-20 inline-block relative top-[1.6rem] right-[30%]"></div>
            <div className="bg-gray rounded-full h-20 w-20 inline-block relative top-[1.6rem] left-[30%]"></div>
          </div>
          {tests.current[testIndex].items.map((x, i) => (
            <p
              key={i}
              // style={{
              //   color: difficultyMapping[tests.current[testIndex].difficulty],
              // }}
              className="bg-gray font-medium py-2 w-1/2 my-[0.1rem] text-xl"
            >
              {x}
            </p>
          ))}
        </div>

        <input
          className="bg-gray font-medium py-2 w-1/2 my-5 text-center focus:outline-black text-xl"
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={inputKeyDown}
        ></input>
      </div>
      <div>
        <button disabled={tests.current.length < 1} onClick={skipTest}>
          Skip
        </button>
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
