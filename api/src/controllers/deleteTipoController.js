const { Tipo } = require("../db");

const deleteTipo = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send("Se requiere tipo");
  }
  try {
    const tipo = await Tipo.findByPk(id);

    if (!tipo) {
      return res.status(404).send("Tipo no encontrado");
    }
    await tipo.destroy();
    res.status(200).send("Tipo eliminado exitosamente");
  } catch (error) {
    res.status(500).json("Error al eliminar tipo");
  }
};

module.exports = deleteTipo;
