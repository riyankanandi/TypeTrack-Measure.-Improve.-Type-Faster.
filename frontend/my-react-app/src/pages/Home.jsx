import { useState } from "react";
import TypingBox from "../components/TypingBox";
import Timer from "../components/Timer";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../services/api";

// import { Link } from "react-router-dom";
// const isAuth = !!localStorage.getItem("token");
import Result from "../components/Result";
function Home({ isAuth, setIsAuth }) {

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

const handleLogout = async () => {
  // localStorage.removeItem("token"); // remove JWT
  // setIsAuth(false);                 // update auth state
  // navigate("/");               // redirect
  await apiRequest("/auth/logout", {
    method: "POST",
})
setIsAuth(false);
setSubmitted(false);
  setTime(0);
  setIsRunning(false);
  navigate("/");
};
  return (
    <div className="home-wrapper">

  <img src="/typing.png" alt="Logo" className="top-left-logo" />
  <div className="container home " style={{ textAlign: "center" }}>
    <h1 style={{ color: "#B983FF" }}>Typing Speed Test</h1>
<p className="subtitle" >
  Each visit starts a new test..!
</p>

    {/* 🔹 LOGIN / SIGNUP (only if NOT logged in) */}
    {!isAuth && (
      <div className="auth-buttons">
        <Link
          to="/login"
          className="button_cust no-underline"
           
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="button_cust no-underline"
        >
          Signup
        </Link>
      </div>
    )}
{isAuth && (
  <button
    onClick={handleLogout}
    className="button_cust"
    
    // style={{
    //   marginBottom: "15px",
    //   marginLeft: "10px",
    //   padding: "6px 14px",
    //   background: "#5B2EFF",
    //   color: "#fff",
    //   border: "none",
    //   borderRadius: "6px",
    //   cursor: "pointer",
    // }}
  >
    Logout
  </button>
)}
    {/* 🔹 HISTORY (only if logged in – optional but recommended) */}
    {isAuth && (
      <Link
        to="/history"
        className="history-link"
      >
        View History
      </Link>
    )}


    <Timer time={time} setTime={setTime} isRunning={isRunning}  />

    <TypingBox
      time={time}
      setTime={setTime}
      setIsRunning={setIsRunning}
       isAuth={isAuth}
        submitted={submitted}
  setSubmitted={setSubmitted}
    />
  </div>
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
