const { User } = require("../../db");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No se encontraron usuarios." });
    }

    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener usuarios.", error: error.message });
  }
};

module.exports = getAllUsers;
