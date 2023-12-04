const { Status } = require("../../db");

const getStatusById = async (req, res) => {
  try {
    const { id } = req.params;

    const status = await Status.findByPk(id);

    if (!status) {
      return res.status(404).json({ message: "Estado no encontrado" });
    }

    return res.status(200).json(status);
  } catch (error) {
    return res.status(500).json({
      message: "Hubo un error al obtener el estado por ID",
      error: error.message,
    });
  }
};

module.exports = getStatusById;
