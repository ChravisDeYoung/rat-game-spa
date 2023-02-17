import { useRef, useState } from "react";
import "./App.css";

import jsonData from "./data/tests.json";

type RAT = {
  items: Array<string>;
  solution: string;
  difficulty: string;
};

function App() {
  const tests = useRef<Array<RAT>>(jsonData);
  const [testIndex, setTestIndex] = useState(
    Math.floor(Math.random() * tests.current.length)
  );
  const [answer, setAnswer] = useState<string>("");

  const checkAnswer = () => {
    if (answer.trim() === tests.current[testIndex].solution) {
      alert("winner!");
      tests.current.splice(testIndex, 1);
      setTestIndex(Math.floor(Math.random() * tests.current.length));
    } else {
      alert("oops, try again...");
    }

    setAnswer("");
  };

  return (
    <div className="App">
      <h1>Remote Association Test</h1>
      <div
        className="card"
      >
        {tests.current[testIndex].items.map((x, i) => (
          <p key={i}>{x}</p>
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

export default App;
