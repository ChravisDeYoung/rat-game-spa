import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Timer from "../components/Timer";
import RatDisplay from "../components/RatDisplay";
import jsonData from "../data/tests.json";
import { RAT } from "../types/Rat";
import soundEffect from "../assets/rat-squeak.mp3";
import { useMusic } from "../components/Layout";
import { Difficulty } from "../types/Difficulty";
import { DIFFICULTY_MAP } from "../data/constants";

function GamePage() {
  const navigate = useNavigate();

  const { soundEffectsEnabled } = useMusic();
  const tests = useRef<Array<RAT>>(
    jsonData
      .filter((obj) => Difficulty.hasOwnProperty(obj.difficulty))
      .map((obj) => {
        return {
          items: obj.items,
          solution: obj.solution,
          difficulty: Difficulty[obj.difficulty as keyof typeof Difficulty],
        };
      })
  );
  const soundEffects = useRef<HTMLAudioElement>(new Audio(soundEffect));

  const [testIndex, setTestIndex] = useState(
    Math.floor(Math.random() * tests.current.length)
  );
  const [score, setScore] = useState<number>(0);
  const [time, setTime] = useState<number>(15);

  const updateDisplay = () => {
    if (soundEffectsEnabled) {
      soundEffects.current.play();
    }

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

  return (
    tests.current.length > 0 && (
      <div>
        <h3 className="font-bold text-medium mt-5">{score}</h3>

        <Timer
          timeInSeconds={time}
          onTimerFinish={() =>
            navigate("/game-over", {
              state: { score: score },
            })
          }
        />

        <RatDisplay
          rat={tests.current[testIndex]}
          onCorrectAnswer={updateDisplay}
          onSkipTest={() => tests.current.length > 1 && changeTest()}
        />
      </div>
    )
  );
}

export default GamePage;
