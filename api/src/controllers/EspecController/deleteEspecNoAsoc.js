const { Especialidad, Menu } = require("../../db");

const deleteEspec2 = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send("Se requiere id para la Especialidad");
  }

  try {
    const especialidad = await Especialidad.findByPk(id);

    if (!especialidad) {
      return res.status(404).send("Especialidad no encontrada");
    }

    const menuAsociado = await Menu.findOne({
      where: { idEspecialidad: id },
    });

    if (menuAsociado) {
      return res
        .status(403)
        .send(
          "No puedes eliminar esta Especialidad porque está asociada a un Menu"
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
