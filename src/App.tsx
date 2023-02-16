import { useState } from "react";
import "./App.css";

import jsonData from "./data/tests.json";

type RAT = {
  items: Array<string>;
  solution: string;
  difficulty: string;
};

function App() {
  const [test, setTest] = useState<RAT>(
    jsonData[Math.floor(Math.random() * jsonData.length)]
  );
  const [answer, setAnswer] = useState<string>("");

  const checkAnswer = () => {
    if (answer.trim() === test.solution) {
      alert("winner!");
      setTest(jsonData[Math.floor(Math.random() * jsonData.length)]);
    } else {
      alert("oops, try again...");
    }

    setAnswer("");
  };

  return (
    <div className="App">
      <h1>Remote Association Test</h1>
      <div className="card">
        {test.items.map((x, i) => (
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
    </div>
  );
}

export default App;
