const { Carrito } = require('../../db');

async function updateCantidadCarrito(req, res) {
  try {
    const { idCarrito } = req.params;
    const { nuevaCantidad } = req.body;


    // Actualizar la cantidad en el carrito
    const carritoItem = await Carrito.findByPk(idCarrito);

    if (!carritoItem) {
      return res.status(404).json({ error: 'Elemento del carrito no encontrado' });
    }

    carritoItem.cantidad = nuevaCantidad;
    carritoItem.subtotal = carritoItem.precio * nuevaCantidad;

    await carritoItem.save();

    res.status(200).json({ message: 'Cantidad actualizada exitosamente', carritoItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la cantidad en el carrito' });
  }
}

module.exports = updateCantidadCarrito ;