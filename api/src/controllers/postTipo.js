const { Tipo } = require("../db");

const postTipo = async (req, res) => {
  try {
    const { nameTipo } = req.body;
    const nuevoTipo = await Tipo.create({
      nameTipo,
    });

    res.status(200).json(nuevoTipo);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error al crear tipo");
  }
};

module.exports = postTipo;
