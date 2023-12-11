const { Direccion } = require("../../db");

const deleteDireById = async (req, res) => {
  const { idUser, idDireccion } = req.params;

  try {
    const direccion = await Direccion.findOne({
      where: {
        idDireccion: idDireccion,
        idUser: idUser,
      },
    });

    if (!direccion) {
      return res
        .status(404)
        .json({ mensaje: "La dirección no fue encontrada para este usuario." });
    }

    // Eliminar la dirección
    await Direccion.destroy({
      where: {
        idDireccion: idDireccion,
        idUser: idUser,
      },
    });

    return res
      .status(200)
      .json({ mensaje: "Dirección eliminada correctamente." });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Hubo un error al intentar eliminar la dirección.",
      error: error.message,
    });
  }
};

module.exports = deleteDireById;
