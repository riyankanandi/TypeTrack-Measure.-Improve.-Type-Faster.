const pool = require("../config/db");

exports.addScore = async (req, res) => {
  try {
    const { wpm, accuracy } = req.body;

    if (wpm == null || accuracy == null) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const result = await pool.query(
      "INSERT INTO scores (user_id, wpm, accuracy) VALUES ($1, $2, $3) RETURNING *",
      [req.userId, wpm, accuracy]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getMyScores = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM scores WHERE user_id = $1 ORDER BY created_at DESC",
      [req.userId]
    );

    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
