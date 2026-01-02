const { readAllPuzzles, readPuzzleById } = require("../models/puzzle");

const puzzleReadAll = async (req, res) => {
  const puzzles = await readAllPuzzles();

  res.json(puzzles);
};

const puzzleReadById = async (req, res) => {
  const { puzzleId } = req.params;

  const puzzleById = await readPuzzleById(Number(puzzleId));

  res.json(puzzleById);
};

module.exports = {
  puzzleReadById,
  puzzleReadAll,
};
