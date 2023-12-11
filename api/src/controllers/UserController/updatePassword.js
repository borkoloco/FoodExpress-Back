const { User } = require("../../db");
const { compare, encrypt } = require("../AuthController/bcryptController");

const updatePassword = async (req, res) => {
  try {
    const { idUser } = req.params;
    const { oldPassword, newPassword } = req.body;

    if (newPassword.length < 5) {
      return res
        .status(400)
        .json({ error: "El nuevo password debe tener al menos 5 caracteres" });
    }

    const user = await User.findByPk(idUser);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const isPasswordValid = await compare(oldPassword, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ error: "El antiguo password es incorrecto" });
    }

    const newPasswordHash = await encrypt(newPassword);

    await User.update(
      { password: newPasswordHash },
      { where: { idUser: idUser } }
    );

    res.status(200).json({ message: "Contraseña actualizada exitosamente" });
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar la contraseña",
      error: error.message,
    });
  }
};

module.exports = updatePassword;
