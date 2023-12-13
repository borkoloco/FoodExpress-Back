const { Orden, Carrito } = require("../../db");

const postOrden = async (req, res) => {
  try {
    const { idUser, idDireccion, idEnvio, total, metodoDeCompra } = req.body;

    const orden = await Orden.create({
      idUser,
      idDireccion,
      idEnvio,
      total,
      metodoDeCompra,
    });

    await Carrito.destroy({ where: { idUser } });

    res.status(201).json(orden);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al realizar la compra", error: error.message });
  }
};

module.exports = postOrden;
