const { Direccion } = require("../../db");

const deleteDiresByUser = async (req, res) => {
  try {
    const { idUser } = req.params;

    const eliminadas = await Direccion.destroy({
      where: {
        idUser,
      },
    });

    if (eliminadas) {
      res.status(200).json({
        message: `Se eliminaron las direcciones del usuario ${idUser}.`,
      });
    } else {
      res.status(404).json({
        message: `No se encontraron direcciones para el usuario ${idUser}.`,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar las direcciones del usuario",
      message: error.message,
    });
  }
};

module.exports = deleteDiresByUser;
