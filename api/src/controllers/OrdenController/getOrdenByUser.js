const { Orden } = require("../../db");

const getOrdenByUser = async (req, res) => {
  try {
    const { idUser } = req.params;

    const ordenes = await Orden.findAll({ where: { idUser: idUser } });

    if (!ordenes) {
      return res
        .status(404)
        .json({ message: "No se encontraron órdenes para este usuario" });
    }

    res.status(200).json(ordenes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las órdenes del usuario" });
  }
};

module.exports = getOrdenByUser;
