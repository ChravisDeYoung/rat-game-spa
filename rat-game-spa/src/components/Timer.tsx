import { useEffect, useRef, useState } from "react";

function Timer(props: { timeInSeconds: number; onTimerFinish: () => void }) {
  const startTime = useRef<number>(convertToSeconds(Date.now()));

  const [timeLeft, setTimeLeft] = useState<number>(props.timeInSeconds);

  useEffect(() => {
    if (
      startTime.current + props.timeInSeconds - convertToSeconds(Date.now()) >
      0
    ) {
      setTimeout(
        () =>
          setTimeLeft(
            startTime.current +
              props.timeInSeconds -
              convertToSeconds(Date.now()),
          ),
        1000,
      );
    } else {
      props.onTimerFinish();
    }
  }, [timeLeft]);

  function convertToSeconds(milliseconds: number): number {
    return Math.round(milliseconds / 1000);
  }

  return (
    <div
      className="flex rounded-full h-20 w-20 mx-auto my-5 items-center justify-center"
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
