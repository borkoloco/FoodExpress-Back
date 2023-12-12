const { User } = require("../../db");

const updateBanned = async (req, res) => {
  const { idUser } = req.params;

  try {
    const user = await User.findByPk(idUser);

    if (user) {
      const updatedIsBanned = user.isBanned === null ? false : !user.isBanned;

      await user.update({ isBanned: updatedIsBanned });

      res
        .status(200)
        .json({
          message: "Propiedad isBanned actualizada correctamente.",
          user,
        });
    } else {
      res.status(404).json({ error: "Usuario no encontrado." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Hubo un problema al actualizar la propiedad isBanned." });
  }
};

module.exports = updateBanned;
