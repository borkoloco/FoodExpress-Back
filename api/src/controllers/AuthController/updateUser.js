const { User } = require("../../db");

const updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    nameUser,
    email,
    imageUrl,
    password,
    idRole,
    authProvider,
    idAuthProvider,
  } = req.body;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    if (nameUser) {
      user.nameUser = nameUser;
    }
    if (email) {
      user.email = email;
    }
    if (imageUrl) {
      user.imageUrl = imageUrl;
    }
    if (password) {
      user.password = password;
    }
    if (idRole) {
      user.idRole = idRole;
    }
    if (authProvider) {
      user.authProvider = authProvider;
    }
    if (idAuthProvider) {
      user.idAuthProvider = idAuthProvider;
    }

    await user.save();

    return res
      .status(200)
      .json({ message: "Usuario actualizado correctamente", user });
  } catch (error) {
    return res.status(500).json({
      message: "Hubo un error al actualizar el usuario",
      error: error.message,
    });
  }
};

module.exports = updateUser;
