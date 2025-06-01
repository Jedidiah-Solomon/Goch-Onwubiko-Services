const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Welcome...........Server Running!");
});

app.get("/life-stats", (req, res) => {
  const lifeStats = {
    name: "Creative Coder Jed.",
    coffeeCupsToday: 3,
    linesOfCode: 1427,
    gitCommits: 6,
    debuggingHours: 1.5,
    mood: " Focused & Shipping videos for developers",
    inspiration:
      "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
  };
  res.json(lifeStats);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
