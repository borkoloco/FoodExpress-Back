const { Direccion } = require("../../db");

const postDireccion = async (req, res) => {
  try {
    const { calle, idUser } = req.body;

    const nuevaDireccion = await Direccion.create({
      calle,
      idUser,
    });

    res.status(201).json({ nuevaDireccion });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al crear la dirección", error: error.message });
  }
};

module.exports = postDireccion;
