const { Router } = require("express");
const puzzle = Router();
const { puzzleReadAll, puzzleReadById } = require("../controllers/puzzle");

puzzle.get("/", puzzleReadAll);

puzzle.get("/:puzzleId", puzzleReadById);

module.exports = puzzle;
