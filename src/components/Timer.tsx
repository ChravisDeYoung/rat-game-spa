import { useEffect, useState } from "react";

function Timer(props: { timeInSeconds: number; onTimerFinish: Function }) {
  const [timeLeft, setTimeLeft] = useState<number>(props.timeInSeconds);

  useEffect(() => {
    if (timeLeft > 0) {
      setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else {
      props.onTimerFinish();
    }
  }, [timeLeft]);

  return (
    <div
      className="rounded-full h-20 w-20 mx-auto my-10"
      style={{
        backgroundImage:
          "conic-gradient(rgb(255 222 104)" + // yellow
          (100 - Math.round((timeLeft / props.timeInSeconds) * 100)) +
          "%, rgb(202 172 66) " + // yellow-dark
          (100 - Math.round((timeLeft / props.timeInSeconds) * 100)) +
          "%)",
      }}
    >
      <span className="font-bold text-[3rem]">{timeLeft}</span>
    </div>
  );
}

export default Timer;
