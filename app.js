require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const puzzle = require("./routes/puzzle");
const leaderboard = require("./routes/leaderboard");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.use("/puzzles", puzzle);
app.use("/leaderboard", leaderboard);

app.listen(PORT, () => {
  console.log("App is listening on PORT", PORT);
});
