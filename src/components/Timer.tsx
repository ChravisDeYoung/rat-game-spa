import { useEffect, useRef, useState } from "react";

function Timer(props: { timeInSeconds: number; onTimerFinish: Function }) {
  const startTime = useRef<number>(Date.now());

  const [timeLeft, setTimeLeft] = useState<number>(props.timeInSeconds * 1000);

  useEffect(() => {
    if (startTime.current + props.timeInSeconds * 1000 - Date.now() > 0) {
      setTimeout(
        () =>
          setTimeLeft(
            startTime.current + props.timeInSeconds * 1000 - Date.now()
          ),
        1000
      );
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
          (100 - Math.round((timeLeft / (props.timeInSeconds * 1000)) * 100)) +
          "%, rgb(202 172 66) " + // yellow-dark
          (100 - Math.round((timeLeft / (props.timeInSeconds * 1000)) * 100)) +
          "%)",
      }}
    >
      <span className="font-bold text-[3rem]">
        {Math.round(timeLeft / 1000)}
      </span>
    </div>
  );
}

export default Timer;
