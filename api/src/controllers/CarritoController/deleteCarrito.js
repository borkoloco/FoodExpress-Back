const { Carrito } = require('../../db');

async function deleteCarrito(req, res) {
  try {
    const { idUser } = req.params;

    // Eliminar todos los elementos del carrito para el usuario
    await Carrito.destroy({
      where: {
        idUser,
      },
    });

    res.status(200).json({ message: 'Carrito eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el carrito' });
  }
}

module.exports = deleteCarrito;