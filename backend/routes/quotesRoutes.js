// // routes/quoteRoutes.js
// const express = require("express");
// const router = express.Router();

// router.get("/random", async (req, res) => {
//   try {
//     const response = await fetch("https://dummyjson.com/quotes/random");
//     const data = await response.json();
//     res.json({ text: data.quote });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch quote" });
//   }
// });

// module.exports = router;
