import { useState } from "react";
import { DIFFICULTY_MAP } from "../data/constants";
import { Test } from "../types/Test";
import { Button } from "./Button";
import { RatEars } from "./RatEars";
import { RatBody } from "./RatBody";
import { checkTestSolution } from "../api/tests";

function RatDisplay(props: {
  test: Test;
  disabled?: boolean;
  onCorrectAnswer: () => void;
  onSkipTest: () => void;
}) {
  const [answer, setAnswer] = useState("");
  const [incorrect, setIncorrect] = useState(false);

  const checkAnswer = () => {
    checkTestSolution(props.test.id, answer).then((isCorrect) => {
      if (isCorrect) {
        props.onCorrectAnswer();
        setAnswer("");
      } else {
        setIncorrect(true);
      }
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (incorrect) {
      setIncorrect(false);
      setAnswer("");
    }

    if (e.key === "Enter") {
      checkAnswer();
    } else if (e.key === "ArrowRight") {
      props.onSkipTest();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <RatEars color={DIFFICULTY_MAP[props.test.difficulty].color} />

      <RatBody words={[props.test.item1, props.test.item2, props.test.item3]} />

      {/* Answer */}
      <div className="w-2/3 mt-5 max-w-xs">
        <input
          autoFocus
          className={`w-full py-2 text-center focus:outline-none border-2 border-gray text-medium  bg-gray rounded-b-2xl focus:border-gray-dark ${
            incorrect && "text-difficulty-hard animate-incorrect"
          }`}
          disabled={props.disabled}
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        ></input>
      </div>

      {/* Skip */}
      <Button
        className="bg-pink active:bg-pink-dark lg:hover:bg-pink-dark border-pink-dark text-small"
        onClick={props.onSkipTest}
      >
        skip
      </Button>
    </div>
  );
}

export default RatDisplay;
