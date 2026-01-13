const { createPlayer, updatePlayerById } = require("../models/leadeboard");

const playerCreate = async (req, res) => {
  const { completionTime, puzzleId } = req.body;

  const randomNames = ["Waldo", "Odlaw", "Wizard"];
  const randomIndex = Math.round((Math.random() * 100) % 2);

  await createPlayer(randomNames[randomIndex], completionTime, puzzleId);

  res.json({
    msg: "User has been created successfully",
  });
};

const playerUpdateById = async (req, res) => {
  const { playerId, username } = req.body;

  if (username.length !== 0) {
    return res.json({
      msg: "Username hasn't been changed",
    });
  }

  await updatePlayerById(playerId, username);

  res.json({
    msg: "Username has been changed successfully",
  });
};

module.exports = {
  playerCreate,
  playerUpdateById,
};
