const { Menu } = require("../../db");

const updateDispMenu = async (req, res) => {
  const { id } = req.params;

  try {
    const menu = await Menu.findByPk(id);

    if (!menu) {
      return res.status(404).json({ error: "Menú no encontrado." });
    }

    const updatedAvailable = !menu.available;

    await Menu.update(
      { available: updatedAvailable },
      { where: { idMenu: id } }
    );

    res
      .status(200)
      .json({ message: "Propiedad 'available' actualizada exitosamente." });
  } catch (error) {
    console.error(
      "Error al actualizar la propiedad 'available' del menú:",
      error
    );
    res.status(500).json({
      error: "No se pudo actualizar la propiedad 'available' del menú.",
    });
  }
};

module.exports = updateDispMenu;
