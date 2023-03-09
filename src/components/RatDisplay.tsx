import { useState } from "react";
import { RAT } from "../types/Rat";

const DIFFICULTY_MAPPING: { [difficulty: string]: string } = {
  "Very Easy": "#8FD437",
  Easy: "#529200",
  Medium: "#D4A446",
  Hard: "#C7654F",
  "Very Hard": "#833E2F",
};

function RatDisplay(props: {
  rat: RAT;
  onCorrectAnswer: () => void;
  onSkipTest: () => void;
}) {
  const [answer, setAnswer] = useState("");

  const checkAnswer = () => {
    if (answer.toLowerCase().trim() === props.rat.solution) {
      props.onCorrectAnswer();
    } else {
      // TODO: something when you're wrong
    }

    setAnswer("");
  };

  return (
    <div className="flex flex-col items-center">
      {/* Ears */}
      <div>
        <div className="bg-gray rounded-full h-20 w-20 inline-block relative top-[1.6rem] right-[40%]">
          <div
            style={{
              backgroundColor: DIFFICULTY_MAPPING[props.rat.difficulty],
            }}
            className="h-10 w-10 relative top-[30%] left-1/4 rounded-tl-full rounded-tr-full rounded-bl-full"
          ></div>
        </div>
        <div className="bg-gray rounded-full h-20 w-20 inline-block relative top-[1.6rem] left-[40%]">
          <div
            style={{
              backgroundColor: DIFFICULTY_MAPPING[props.rat.difficulty],
            }}
            className="bg-very-easy h-10 w-10 relative top-[30%] left-1/4 rounded-tl-full rounded-tr-full rounded-br-full"
          ></div>
        </div>
      </div>

      {/* Body */}
      {props.rat.items.map((word, index) => (
        <p
          key={index}
          className="bg-gray font-medium py-2 w-1/2 my-[0.1rem] text-xl"
        >
          {word}
        </p>
      ))}

      {/* Answer */}
      <input
        autoFocus
        className="bg-gray font-medium py-2 w-1/2 mt-5 text-center focus:outline-black text-xl"
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyDown={(e) =>
          (e.key === "Enter" && checkAnswer()) ||
          (e.key === "ArrowRight" && props.onSkipTest())
        }
      ></input>

      {/* Skip */}
      <button
        onClick={props.onSkipTest}
        className="bg-pink font-medium py-1 mt-2 w-1/2 text-center text-sm"
      >
        skip
      </button>
    </div>
  );
}

export default RatDisplay;
