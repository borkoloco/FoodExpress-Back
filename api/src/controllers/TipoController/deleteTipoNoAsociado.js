const { Tipo, Menu } = require("../../db");

const deleteTipo2 = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send("Se requiere tipo");
  }
  try {
    const tipo = await Tipo.findByPk(id);

    if (!tipo) {
      return res.status(404).send("Tipo no encontrado");
    }

    const menuAsociado = await Menu.findOne({
      where: { idTipoMenu: id },
    });

    if (menuAsociado) {
      return res
        .status(403)
        .send("No puede eliminar este Tipo porque está asociado a un Menu");
    }

    await tipo.destroy();
    res.status(200).send("Tipo eliminado exitosamente");
  } catch (error) {
    res.status(500).send("Error al eliminar tipo");
  }
};

module.exports = deleteTipo2;
