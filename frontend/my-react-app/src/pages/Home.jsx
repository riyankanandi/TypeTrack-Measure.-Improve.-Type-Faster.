import { useState } from "react";
import TypingBox from "../components/TypingBox";
import Timer from "../components/Timer";
import { Link } from "react-router-dom";

import Result from "../components/Result";
function Home() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 style={{ color: "#B983FF" }}>Typing Speed Test</h1>
     <Link
        to="/History"
        style={{
          display: "inline-block",
          marginBottom: "15px",
          color: "#B983FF",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        View History
      </Link>
      <Timer time={time} setTime={setTime} isRunning={isRunning} />

      <TypingBox
        time={time}
        setTime={setTime}
        setIsRunning={setIsRunning}
      />
    </div>
  );
}

export default Home;
