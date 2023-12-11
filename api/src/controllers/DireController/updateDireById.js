const { Direccion } = require("../../db");

const updateDireById = async (req, res) => {
  const { idUser, idDireccion } = req.params;
  const { calle } = req.body;

  try {
    let direccion = await Direccion.findOne({
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

    direccion = await Direccion.update(
      { calle },
      {
        where: {
          idDireccion: idDireccion,
          idUser: idUser,
        },
      }
    );

    return res
      .status(200)
      .json({ mensaje: "Dirección actualizada correctamente." });
  } catch (error) {
    return res
      .status(500)
      .json({
        mensaje: "Hubo un error al intentar actualizar la dirección.",
        error: error.message,
      });
  }
};

module.exports = updateDireById;
