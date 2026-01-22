// module.exports = (correctChars, timeTaken) => {
//   const minutes = timeTaken / 60;
//   return Math.round((correctChars / 5) / minutes);
// };
module.exports = (correctChars, timeTakenSeconds) => {
  if (
    timeTakenSeconds <= 0 ||
    correctChars <= 0
  ) {
    return 0;
  }

  const minutes = timeTakenSeconds / 60;
  const wordsTyped = correctChars / 5;
  const wpm = wordsTyped / minutes;

  if (wpm > 200) {
    return 0;
  }

  return Math.round(wpm);
};