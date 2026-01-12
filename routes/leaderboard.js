const { Router } = require("express");
const {
  leaderboardReadByPuzzleId,
  playerCreate,
  playerUpdateById,
} = require("../controllers/leaderboard");
const leaderboard = Router();

leaderboard.get("/:puzzleId", leaderboardReadByPuzzleId);

leaderboard.post("/", leaderboardCreate);

leaderboard.put("/:playerId", leaderboardUpdateByPlayerId);
