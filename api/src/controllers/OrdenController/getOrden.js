const { Orden } = require("../../db");

const getOrden = async (req, res) => {
  try {
    const ordenes = await Orden.findAll();

    res.status(200).json(ordenes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las órdenes" });
  }
};

module.exports = getOrden;
