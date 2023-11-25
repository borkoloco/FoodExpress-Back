const { Especialidad } = require("../../db");

async function postEspecialidad(req, res) {
  try {
    const { NameEspecialidad } = req.body;

    // Crea una nueva especialidad en la base de datos
    const nuevaEspecialidad = await Especialidad.create({
      NameEspecialidad,
    });

    res.status(201).json(nuevaEspecialidad);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear la especialidad");
  }
}

module.exports = postEspecialidad;
