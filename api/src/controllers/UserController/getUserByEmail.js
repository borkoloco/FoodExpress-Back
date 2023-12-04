const { User } = require("../../db");

const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const user = await User.findOne({
      where: { email: email },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener el usuario por correo electrónico" });
  }
};

module.exports = getUserByEmail;
