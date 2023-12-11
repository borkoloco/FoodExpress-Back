const { Envio } = require("../../db");

const postEnvio = async (req, res) => {
  try {
    const { costoEnvio, statusEnvio, idDireccion } = req.body;

    const nuevoEnvio = await Envio.create({
      costoEnvio,
      statusEnvio,
      idDireccion,
    });

    res.status(201).json({ nuevoEnvio });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al crear el envío", error: error.message });
  }
};

module.exports = postEnvio;
