const { Envio } = require("../../db");

const getEnvioByDire = async (req, res) => {
  const { idDireccion } = req.params;

  try {
    const envios = await Envio.findAll({ where: { idDireccion } });

    if (!envios) {
      return res
        .status(404)
        .json({ mensaje: "No se encontraron envíos para esta dirección" });
    }

    res.status(200).json({ envios });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener los envíos para la dirección" });
  }
};

module.exports = getEnvioByDire;
