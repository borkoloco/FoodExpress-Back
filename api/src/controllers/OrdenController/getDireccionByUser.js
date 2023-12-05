const { Direccion } = require("../../db");

const getDireccionByUser = async (req, res) => {
  const { idUser } = req.params;

  try {
    const direcciones = await Direccion.findAll({ where: { idUser } });

    if (!direcciones) {
      return res
        .status(404)
        .json({ mensaje: "No se encontraron direcciones para este usuario" });
    }

    res.status(200).json({ direcciones });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener las direcciones del usuario" });
  }
};

module.exports = getDireccionByUser;
