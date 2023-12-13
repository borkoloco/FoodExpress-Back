const { Status } = require("../../db");

const addStatus = async (req, res) => {
  try {
    const { statusDescription } = req.body;

    const existingStatus = await Status.findOne({
      where: {
        statusDescription: statusDescription,
      },
    });

    if (existingStatus) {
      return res.status(400).json({ message: "El estado ya existe" });
    }

    const newStatus = await Status.create({
      statusDescription: statusDescription,
    });

    return res.status(201).json(newStatus);
  } catch (error) {
    return res.status(500).json({
      message: "Hubo un error al crear el estado",
      error: error.message,
    });
  }
};

module.exports = addStatus;
