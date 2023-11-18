const { Tipo } = require("../db");

async function postTipo(req, res) {
  try {
    const { nameTipo } = req.body;
    const nuevoTipo = await Tipo.create({
      nameTipo,
    });

    res.status(200).json(nuevoTipo);
  } catch (error) {
    res.status(500).send("Error al crear tipo");
  }
}

module.exports = postTipo;
