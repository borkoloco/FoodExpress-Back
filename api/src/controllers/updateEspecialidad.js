const { Especialidad } = require("../db");

async function updateEspecialidad(req, res) {
  const { idEspecialidad } = req.params; // Extract idEspecialidad from params
  const { nuevoNombre } = req.body; // Extract nuevoNombre from body

  if (!idEspecialidad || !nuevoNombre) {
    return res.status(400).send("Se requiere idEspecialidad y nuevoNombre");
  }

  try {
    // Busca la especialidad por ID en lugar de por nombre
    const especialidad = await Especialidad.findByPk(idEspecialidad);

    // Si la especialidad no existe, devuelve un error
    if (!especialidad) {
      return res.status(404).send("Especialidad no encontrada");
    }

    // Actualiza el nombre de la especialidad con el nuevo nombre
    especialidad.NameEspecialidad = nuevoNombre;

    // Guarda los cambios en la base de datos
    await especialidad.save();

    // Envía la respuesta con la especialidad actualizada
    res.status(200).json(especialidad);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al actualizar la especialidad");
  }
}

module.exports = updateEspecialidad;
