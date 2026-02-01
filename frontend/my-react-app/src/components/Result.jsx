function Result({ result }) {
  if (!result) return null;

  return (
    <div className="result">
      <p >Result</p>
      <p>WPM: {result.wpm}</p>
      <p>Accuracy: {result.accuracy}%</p>
      <p>Time: {result.time} sec</p>
    </div>
  );
}

export default Result;
