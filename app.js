require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const puzzle = require("./routes/puzzle");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.use("/puzzles", puzzle);

app.listen(PORT, () => {
  console.log("App is listening on PORT", PORT);
});
