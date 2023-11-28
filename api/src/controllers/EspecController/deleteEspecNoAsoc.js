const { Especialidad, User } = require("../../db");

const deleteEspec2 = async (req, res) => {
  const { idEspecialidad } = req.params;

  if (!idEspecialidad) {
    return res.status(400).send("Se requiere idEspecialidad en los parámetros");
  }

  try {
    const especialidad = await Especialidad.findByPk(idEspecialidad);

    if (!especialidad) {
      return res.status(404).send("Especialidad no encontrada");
    }

    const usersAsociados = await User.findAll({
      include: {
        model: Especialidad,
        where: { id: especialidad.id },
      },
    });

    if (usersAsociados.length > 0) {
      return res
        .status(403)
        .send(
          "No puedes eliminar esta Especialidad porque está asociada a un Usuario"
        );
    }

    await especialidad.destroy();

    res.status(200).send("Especialidad eliminada correctamente");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar la especialidad");
  }
};

module.exports = deleteEspec2;
