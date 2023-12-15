// En tu archivo de controladores (controllers/index.js)
const { Carrito } = require("../../db");

async function updateItemCarrito(req, res) {
  try {
    const { idUser, idMenu } = req.params;
    const { cantidad } = req.body;

    // Verificar si el usuario tiene el ítem en el carrito
    const carritoItem = await Carrito.findOne({
      where: {
        idUser,
        idMenu,
      },
    });

    if (!carritoItem) {
      return res
        .status(404)
        .json({ error: "Elemento del carrito no encontrado para el usuario" });
    }

    // Actualizar la cantidad del ítem en el carrito
    if (cantidad > 0) {
      await carritoItem.update({
        cantidad,
        subtotal: cantidad * carritoItem.precio, // Actualizar subtotal si es necesario
      });
    }

    if (cantidad === 0) {
      await carritoItem.destroy({
        where: {
          idUser,
          idMenu,
        },
      });
    }

    res
      .status(200)
      .json({ message: "Elemento del carrito actualizado exitosamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al actualizar el elemento del carrito" });
  }
}

module.exports = updateItemCarrito;
