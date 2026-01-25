const pool = require("../config/db");
const calculateWPM = require("../utils/CalculateWPM");
const calculateAccuracy = require("../utils/CalculateAccuracy");
//post
exports.saveTest = async (req, res) => {
  try {
    const { totalChars, correctChars, timeTaken } = req.body;

    if (  totalChars == null ||
      correctChars == null ||
      timeTaken == null) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const userId = req.userId; //jwt
    const wpm = calculateWPM(correctChars, timeTaken);
    const accuracy = calculateAccuracy(correctChars, totalChars);

const query = `
      INSERT INTO typing_tests
      (user_id, wpm, accuracy, total_chars, correct_chars, time_taken)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;

    const values = [userId,wpm, accuracy, totalChars, correctChars, timeTaken];

    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//get
exports.getAllTests = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM typing_tests ORDER BY created_at DESC", [userId]
    );

    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};