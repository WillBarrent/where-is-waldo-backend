const { Router } = require("express");
const {
  guessPuzzleCharacterById,
  getPuzzleById,
} = require("../controllers/puzzle");
const puzzle = Router();

puzzle.get("/:puzzleId", getPuzzleById);

puzzle.post("/:puzzleId/:characterId", guessPuzzleCharacterById);

module.exports = puzzle;
