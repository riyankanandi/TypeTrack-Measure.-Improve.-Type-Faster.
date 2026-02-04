const { Pool } = require("pg");

const pool = new Pool({
  // host: "localhost",
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME,
  // port: 5432,
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false },
});
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("❌ DB connection failed", err.message);
  } else {
    console.log("✅ DB connected at", res.rows[0].now);
  }
});
module.exports = pool;
