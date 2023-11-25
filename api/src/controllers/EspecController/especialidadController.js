const { Especialidad } = require("../../db");

async function getEspecialidad(req, res) {
  try {
    // Busca todas las especialidades en la base de datos
    const especialidades = await Especialidad.findAll();

    // Envía la respuesta con todas las especialidades
    res.status(200).json(especialidades);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener las especialidades");
  }
}

module.exports = getEspecialidad;
