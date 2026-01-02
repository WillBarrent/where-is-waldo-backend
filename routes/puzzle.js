const { Router } = require("express");
const { puzzleReadAll, puzzleReadById } = require("../controllers/puzzle");
const puzzle = Router();

puzzle.get("/", puzzleReadAll);

puzzle.get("/:puzzleId", puzzleReadById);

module.exports = puzzle;
