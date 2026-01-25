const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const scoreRoutes = require("./routes/scoreRoutes");
require("./config/db");

// const testRoutes = require("./routes/testRoutes");
// const authRoutes = require("./routes/authRoutes");
// const scoreRoutes = require("./routes/scoreRoutes");
const app = express();

app.use(cors());
app.use(express.json());
// app.use("/api/quotes", quoteRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/scores", scoreRoutes);
// app.use("/api/tests", testRoutes);

// app.get("/", (req, res) => {
//   res.send("Backend running 🚀");
// });
// app.get("/test-db", async (req, res) => {
//   try {
//     const pool = require("./config/db");
//     const result = await pool.query("SELECT * FROM typing_tests");
//     res.json(result.rows);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

app.get("/", (req, res) => {
  res.send("Backend running");
});

module.exports = app;
