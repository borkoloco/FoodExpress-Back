const { Menu } = require("../../db");

const updateMenuAvailability = async (req, res) => {
  console.log("Inicio del controlador de actualización");
  const { id } = req.params;
  const { available } = req.body;

  try {
    // Verificar si 'available' es un valor booleano
    if (typeof available !== 'boolean') {
      return res.status(400).json({ error: "El valor de disponibilidad debe ser booleano." });
    }

    // Actualizar el menú con la disponibilidad proporcionada por el usuario
    const updatedMenu = await Menu.update(
      { available },
      { where: { idMenu: id } }
    );

    if (updatedMenu[0] === 0) {
      // Si no se actualiza ningún menú (el menú con ese ID no existe)
      return res.status(404).json({ error: "Menú no encontrado." });
    }

    res.status(200).json({ message: "Disponibilidad del menú actualizada exitosamente." });
  } catch (error) {
    console.error("Error al actualizar la disponibilidad del menú:", error);
    res.status(500).json({ error: "No se pudo actualizar la disponibilidad del menú." });
  }
};

module.exports = updateMenuAvailability;