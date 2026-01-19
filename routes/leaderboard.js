const { Router } = require("express");
const {
  playerCreate,
  playerUpdateById,
} = require("../controllers/leaderboard");
const leaderboard = Router();

leaderboard.post("/", playerCreate);

leaderboard.put("/", playerUpdateById);

module.exports = leaderboard;
