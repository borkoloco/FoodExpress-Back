const { Status } = require("../../db");

const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { statusDescription } = req.body;

    const status = await Status.findByPk(id);

    if (!status) {
      return res.status(404).json({ message: "Estado no encontrado" });
    }

    status.statusDescription = statusDescription;
    await status.save();

    return res.status(200).json(status);
  } catch (error) {
    return res.status(500).json({
      message: "Hubo un error al actualizar el estado",
      error: error.message,
    });
  }
};

module.exports = updateStatus;
