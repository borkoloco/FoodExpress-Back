const { Tipo, User } = require("../../db");

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

    const usersAsociados = await User.findAll({
      include: {
        model: Tipo,
        where: { id: tipo.id },
      },
    });

    if (usersAsociados.length > 0) {
      return res
        .status(403)
        .send("No puede eliminar este Tipo porque está asociado a un Usuario");
    }

    await tipo.destroy();
    res.status(200).send("Tipo eliminado exitosamente");
  } catch (error) {
    res.status(500).json("Error al eliminar tipo");
  }
};

module.exports = deleteTipo2;
