const { createPlayer, updatePlayerById } = require("../models/leadeboard");

const playerCreate = async (req, res) => {
  const { completionTime, puzzleId } = req.body;

  const randomNames = ["Waldo", "Odlaw", "Wizard"];
  const randomIndex = Math.round((Math.random() * 100) % 2);

  const player = await createPlayer(
    randomNames[randomIndex],
    completionTime,
    puzzleId,
  );

  res.json({
    msg: "User has been created successfully",
    data: {
      playerId: player.id,
    },
  });
};

const playerUpdateById = async (req, res) => {
  const { username, playerId, puzzleId } = req.body;
  if (username.length === 0) {
    return res.json({
      msg: "Username hasn't been changed",
    });
  }

  await updatePlayerById(playerId, puzzleId, username);

  res.json({
    msg: "Username has been changed successfully",
  });
};

module.exports = {
  playerCreate,
  playerUpdateById,
};
