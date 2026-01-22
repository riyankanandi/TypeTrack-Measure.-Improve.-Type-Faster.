require("dotenv").config();
const app = require("./app");
const historyRoutes = require("./routes/History");


const PORT = process.env.PORT || 5000;


app.use("/api/history", historyRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
