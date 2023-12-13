const { Carrito, Menu, User } = require("../../db");

async function postCarrito(req, res) {
  try {
    const carritoItems = req.body;

    // Verificar si el usuario existe
    const { idUser } = carritoItems[0]; // Tomamos el idUser del primer elemento
    const user = await User.findByPk(idUser);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Obtener el carrito actual del usuario
    const carritoActual = await Carrito.findAll({
      where: {
        idUser,
      },
    });

    // Convertir el carrito actual a un objeto donde las claves son los idMenu
    const carritoObj = carritoActual.reduce((obj, item) => {
      obj[item.idMenu] = item;
      return obj;
    }, {});

    // Actualizar o agregar elementos al carrito
    for (const item of carritoItems) {
      const { idMenu, cantidad } = item;

      // Buscar el menú correspondiente
      const menu = await Menu.findByPk(idMenu);

      if (!menu) {
        return res.status(404).json({ error: "Menú no encontrado" });
      }

      if (carritoObj[idMenu]) {
        // Si el ítem ya existe, actualizar la cantidad
        carritoObj[idMenu].cantidad += cantidad;
        carritoObj[idMenu].subtotal = carritoObj[idMenu].cantidad * menu.price;
        await carritoObj[idMenu].save();
      } else {
        // Si el ítem no existe, crear un nuevo registro en la tabla Carrito
        await Carrito.create({
          idUser,
          idMenu,
          cantidad,
          precio: menu.price,
          subtotal: cantidad * menu.price,
        });
      }
    }

    // Obtener el carrito actualizado del usuario
    const carritoActualizado = await Carrito.findAll({
      where: {
        idUser,
      },
      include: [{ model: Menu, as: "menu" }],
    });

    res.status(201).json({
      message: "Menús agregados al carrito exitosamente",
      carritoItems: carritoActualizado,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al agregar al carrito", error: error.message });
  }
}

module.exports = postCarrito;
