const { Carrito, Envio, Orden, Menu } = require("../../db");

const postOrdenCarrito = async (req, res) => {
  try {
    const { idUser, idEnvio, metodoDeCompra } = req.body;

    const carritoItems = await Carrito.findAll({
      where: {
        idUser,
      },
    });

    const subtotal = carritoItems.reduce((acc, item) => {
      const subtotalNumber = parseFloat(item.subtotal);
      return acc + subtotalNumber;
    }, 0);

    let costoEnvio = 0;

    if (idEnvio) {
      const envio = await Envio.findByPk(idEnvio);
      if (envio) {
        costoEnvio = parseFloat(envio.costoEnvio);
      }
    }

    const total = subtotal + costoEnvio;

    const orden = await Orden.create({
      idUser,
      idEnvio,
      total,
      metodoDeCompra,
    });

    const carritoItemsOrden = await Carrito.findAll({
      where: {
        idUser,
      },
      include: [{ model: Menu, as: "menu" }],
    });

    const carritoItemsJSON = carritoItemsOrden.map((item) => ({
      idMenu: item.idMenu,
      cantidad: item.cantidad,
    }));

    await orden.update({ items: carritoItemsJSON });

    // await Carrito.destroy({ where: { idUser } });

    const ordenConCarrito = await Orden.findByPk(orden.idOrden);

    res.status(201).json({ orden: ordenConCarrito });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al realizar la compra", error: error.message });
  }
};

module.exports = postOrdenCarrito;
