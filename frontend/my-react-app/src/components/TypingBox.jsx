import { useState } from "react";
import { saveTest } from "../services/api";
import { useEffect} from "react";
function TypingBox({ time, setTime, isRunning, setIsRunning }) {
  const [typedText, setTypedText] = useState("");
   const [sampleText, setSampleText] = useState("");
  const [correctChars, setCorrectChars] = useState(0);
  const [loading, setLoading] = useState(false);
  // const [time, setTime] = useState(0);
// const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState(null);
  // Fetch text on first load
  useEffect(() => {
    fetchText();
  }, []);
    const fetchText = async () => {
    try {
      const res = await fetch(
        // "https://api.quotable.io/random?minLength=400&maxLength=800"
        "https://dummyjson.com/quotes/random"
      );
      const data = await res.json();
      setSampleText(data.quote);
    } catch (err) {
      console.error("Failed to fetch text", err);
    }
  };


const handleChange = (e) => {
  
  const value = e.target.value;

  // Start timer only once
  if (!isRunning) setIsRunning(true);

  setTypedText(value);

  let correct = 0;
  for (let i = 0; i < value.length && i < sampleText.length; i++) {
    if (value[i] === sampleText[i]) correct++;
  }

  setCorrectChars(correct);
};




   const handleSubmit = async () => {
 if (typedText.length === 0) {
    alert("Start the test and type first!");
    return;
  }
  setIsRunning(false); 

    const data = {
      totalChars: typedText.length,
      correctChars,
      timeTaken: time,
    };
    try {
      setLoading(true);
     const response = await saveTest(data);
    console.log("DB returned:", response);
    // show backend-calculated result
    setResult({
      wpm: response.wpm,
      accuracy: response.accuracy,
      time: response.time_taken,
// setResult({
//         wpm,
//         accuracy,
//         time,
      });

      setIsRunning(false);
    } catch (err) {
      console.error(err);
      alert("Failed to save test");
    } finally {
      setLoading(false);
    }
  };
const handleReset = () => {
  setTypedText("");
  setCorrectChars(0);
  setResult(null);
  setTime(0);
  setIsRunning(false);
  fetchText();
};


  return (
    <div style={{ textAlign: "center" }}>
      <p 
  onCopy={(e) => e.preventDefault()}
  onCut={(e) => e.preventDefault()}
  onContextMenu={(e) => e.preventDefault()}
  style={{
    color: "#E6E1F0",
    marginBottom: "10px",
    userSelect: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
  }}
>
        {sampleText}
      </p>

      <textarea
        value={typedText}
        onChange={handleChange}
       onPaste={(e) => {
  e.preventDefault();
  alert("Paste is disabled during typing test");
}}
  onCopy={(e) => e.preventDefault()}
  onCut={(e) => e.preventDefault()}
  onContextMenu={(e) => e.preventDefault()}
        placeholder="Start typing..."
        style={{
          width: "80%",
          height: "120px",
          background: "#0F0A1F",
          color: "#E6E1F0",
          border: "1px solid #5B2EFF",
          caretColor: "#B983FF",
          outline: "none",
          resize: "none",
          padding: "10px",
          fontSize: "16px",
        }}
      />

      <br />
   

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          marginTop: "20px",
          padding: "10px 25px",
          background: "#5B2EFF",
          color: "#E6E1F0",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {loading ? "Saving..." : "Submit"}
      </button>
      {result && (
        <div style={{ marginTop: "30px", color: "#E6E1F0" }}>
          <h3 style={{ color: "#B983FF" }}>Result</h3>
          <p>WPM: {result.wpm}</p>
          <p>Accuracy: {result.accuracy}%</p>
          <p>Time Taken: {result.time} sec</p>
          <button
      onClick={handleReset}
      style={{
        marginTop: "15px",
        padding: "8px 20px",
        background: "#1A1333",
        color: "#B983FF",
        border: "1px solid #5B2EFF",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Reset
    </button>
        </div>
      )}
    </div>
  );
}

export default TypingBox;





// function TypingBox({ time }) {
//   const [typedText, setTypedText] = useState("");
//   const [correctChars, setCorrectChars] = useState(0);
//   const [loading, setLoading] = useState(false);

//   // TEMP sample text (later dynamic)
//   const sampleText =
//     "practice makes progress focus on accuracy then speed";

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setTypedText(value);

//     let correct = 0;
//     for (let i = 0; i < value.length; i++) {
//       if (value[i] === sampleText[i]) correct++;
//     }
//     setCorrectChars(correct);
//   };

//   const handleSubmit = async () => {
//     if (typedText.length === 0) return alert("Type something first");

//     const data = {
//       totalChars: typedText.length,
//       correctChars: correctChars,
//       timeTaken: time, // seconds
//     };

//     try {
//       setLoading(true);
//       await saveTest(data);
//       alert("Test saved successfully!");
//       setTypedText("");
//       setCorrectChars(0);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to save test");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2 style={{ color: "#B983FF" }}>Typing Speed Test</h2>

//       <p style={{ color: "#E6E1F0", marginBottom: "10px" }}>
//         {sampleText}
//       </p>

//       <textarea
//         value={typedText}
//         onChange={handleChange}
//         placeholder="Start typing..."
//         style={{
//           width: "80%",
//           height: "120px",
//           background: "#0F0A1F",
//           color: "#E6E1F0",
//           border: "1px solid #5B2EFF",
//           caretColor: "#B983FF",
//           outline: "none",
//           resize: "none",
//           padding: "10px",
//           fontSize: "16px",
//         }}
//       />

//       <br />

//       <button
//         onClick={handleSubmit}
//         disabled={loading}
//         style={{
//           marginTop: "20px",
//           padding: "10px 25px",
//           background: "#5B2EFF",
//           color: "#E6E1F0",
//           border: "none",
//           borderRadius: "6px",
//           cursor: "pointer",
//         }}
//       >
//         {loading ? "Saving..." : "Submit"}
//       </button>
//     </div>
//   );
// }

// export default TypingBox;

