const { Especialidad } = require("../../db");

async function deleteEspecialidad(req, res) {
  const { idEspecialidad } = req.params;

  if (!idEspecialidad) {
    return res.status(400).send("Se requiere idEspecialidad en los parámetros");
  }

  try {
    // Busca la especialidad por ID en lugar de por nombre
    const especialidad = await Especialidad.findByPk(idEspecialidad);

    // Si la especialidad no existe, devuelve un error
    if (!especialidad) {
      return res.status(404).send("Especialidad no encontrada");
    }

    // Elimina la especialidad de la base de datos
    await especialidad.destroy();

    // Envía la respuesta indicando que la especialidad fue eliminada con éxito
    res.status(200).send("Especialidad eliminada correctamente");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar la especialidad");
  }
}

module.exports = deleteEspecialidad;
