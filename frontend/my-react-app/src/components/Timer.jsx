import { useEffect } from "react";

function Timer({ time, setTime, isRunning }) {
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, setTime]);

  return <p>Time: {time} sec</p>;
}

export default Timer;
