const { prisma } = require("./db");

const createPlayer = async (username, completionTime, puzzleId) => {
  const player = await prisma.player.create({
    data: {
      username: username,
      completionTime: Number(completionTime),
      puzzleId: Number(puzzleId),
    },
  });

  return player;
};

const updatePlayerById = async (playerId, puzzleId, username) => {
  await prisma.player.update({
    where: {
      id: Number(playerId),
      puzzleId: puzzleId,
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
