const { Carrito } = require('../../db');

async function deleteItemCarrito(req, res) {
  try {
    const { idCarrito } = req.params;

    const carritoItem = await Carrito.findByPk(idCarrito);

    if (!carritoItem) {
      return res.status(404).json({ error: 'Elemento del carrito no encontrado' });
    }

    await carritoItem.destroy();

    res.status(200).json({ message: 'Elemento del carrito eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el elemento del carrito' });
  }
}

module.exports = deleteItemCarrito;