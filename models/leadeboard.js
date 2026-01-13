const { prisma } = require("./db");

const createPlayer = async (username, completionTime, puzzleId) => {
  await prisma.player.create({
    data: {
      username: username,
      completionTime: Number(completionTime),
      puzzleId: Number(puzzleId),
    },
  });
};

const updatePlayerById = async (playerId, username) => {
  await prisma.player.update({
    where: {
      id: Number(playerId),
    },
    data: {
      username: username,
    },
  });
};

module.exports = {
  createPlayer,
  updatePlayerById,
};
