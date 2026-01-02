const { prisma } = require("./db");

const readAllPuzzles = async () => {
  const puzzles = await prisma.puzzle.findMany({
    include: {
      characters: {
        include: {
          coordinates: true,
        },
      },
    },
  });

  return puzzles;
};

const readPuzzleById = async (puzzleId) => {
  const puzzleById = await prisma.puzzle.findFirst({
    where: {
      id: puzzleId,
    },
    include: {
      characters: {
        include: {
          coordinates: true,
        },
      },
    },
  });

  return puzzleById;
};

module.exports = { readAllPuzzles, readPuzzleById };
