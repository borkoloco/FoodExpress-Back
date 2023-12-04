const { Carrito, Menu, User } = require('../../db');

async function getCarrito(req, res) {
  try {
    const { idUser } = req.params;

    // Verificar si el usuario existe
    const user = await User.findByPk(idUser);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Obtener elementos del carrito para el usuario
    const carritoItems = await Carrito.findAll({
      where: {
        idUser,
      },
      include: [
        // Puedes incluir relaciones adicionales aquí según tus necesidades
        { model: Menu, as: 'menu' },
      ],
    });

    // Formatear la respuesta
    const carritoItemsFormateado = carritoItems.map((item) => {
      const { idCarrito, cantidad, precio, subtotal, menu } = item;
      const { idMenu, nameMenu, description, price, available, imageUrl } = menu;

      return {
        idCarrito,
        cantidad,
        precio,
        subtotal,
        menu: {
          idMenu,
          nameMenu,
          description,
          price,
          available,
          imageUrl
        },
      };
    });

    res.status(200).json({
      message: 'Contenido del carrito obtenido exitosamente',
      carritoItems: carritoItemsFormateado,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el contenido del carrito' });
  }
}

module.exports = getCarrito;