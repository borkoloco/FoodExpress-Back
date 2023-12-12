const { User } = require("../../db");

const getUsersBanned = async (req, res) => {
  try {
    const users = await User.findAll({
      order: [["email", "ASC"]],
      attributes: ["nameUser", "isBanned", "email"],
    });

    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Hubo un problema al obtener los usuarios." });
  }
};

module.exports = getUsersBanned;
