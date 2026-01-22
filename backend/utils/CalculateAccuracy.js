// module.exports = (correctChars, totalChars) => {
//   return Number(((correctChars / totalChars) * 100).toFixed(2));
// };
// utils/CalculateAccuracy.js

module.exports = (correctChars, totalChars) => {
  if (
    totalChars <= 0 ||
    correctChars < 0 ||
    correctChars > totalChars
  ) {
    return 0;
  }

  const accuracy = (correctChars / totalChars) * 100;
  return Number(accuracy.toFixed(2));
};
