const { Status } = require("../../db");

const getAllStatus = async (req, res) => {
  try {
    const allStatus = await Status.findAll();

    return res.status(200).json(allStatus);
  } catch (error) {
    return res.status(500).json({
      message: "Hubo un error al obtener los estados",
      error: error.message,
    });
  }
};

module.exports = getAllStatus;
