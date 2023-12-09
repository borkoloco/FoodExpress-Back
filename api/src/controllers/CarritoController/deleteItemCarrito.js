// En tu archivo de controladores (controllers/index.js)
const { Carrito } = require('../../db');

async function deleteItemCarrito(req, res) {
  try {
    const { idUser, idMenu } = req.params;

    // Verificar si el usuario tiene el ítem en el carrito
    const carritoItem = await Carrito.findOne({
      where: {
        idUser,
        idMenu,
      },
    });

    if (!carritoItem) {
      return res.status(404).json({ error: 'Elemento del carrito no encontrado para el usuario' });
    }

    await carritoItem.destroy();

    res.status(200).json({ message: 'Elemento del carrito eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el elemento del carrito' });
  }
}

module.exports = deleteItemCarrito ;