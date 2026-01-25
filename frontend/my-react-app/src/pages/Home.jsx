import { useState } from "react";
import TypingBox from "../components/TypingBox";
import Timer from "../components/Timer";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// const isAuth = !!localStorage.getItem("token");
import Result from "../components/Result";
function Home({ isAuth }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  return (
  <div className="container" style={{ textAlign: "center" }}>
    <h1 style={{ color: "#B983FF" }}>Typing Speed Test</h1>

    {/* 🔹 LOGIN / SIGNUP (only if NOT logged in) */}
    {!isAuth && (
      <div style={{ marginBottom: "15px" }}>
        <Link
          to="/login"
          style={{ marginRight: "15px", color: "#B983FF" }}
        >
          Login
        </Link>
        <Link
          to="/signup"
          style={{ color: "#B983FF" }}
        >
          Signup
        </Link>
      </div>
    )}

    {/* 🔹 HISTORY (only if logged in – optional but recommended) */}
    {isAuth && (
      <Link
        to="/history"
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
    )}

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

//   return (
//     <div className="container" style={{ textAlign: "center" }}>
//       <h1 style={{ color: "#B983FF" }}>Typing Speed Test</h1>
//      <Link
//         to="/History"
//         style={{
//           display: "inline-block",
//           marginBottom: "15px",
//           color: "#B983FF",
//           textDecoration: "underline",
//           cursor: "pointer",
//         }}
//       >
//         View History
//       </Link>
//       <Timer time={time} setTime={setTime} isRunning={isRunning} />

//       <TypingBox
//         time={time}
//         setTime={setTime}
//         setIsRunning={setIsRunning}
//       />
//     </div>
//   );
// }

// export default Home;
