const { Menu, Especialidad, Tipo } = require("../db");

const findMenuById = async (id) => {
  try {
    const menu = await Menu.findByPk(id, {
      include: [
        {
          model: Especialidad,
          as: "specialtyMenu",
          attributes: ["NameEspecialidad"],
        },
        {
          model: Tipo,
          as: "typeMenu",
          attributes: ["nameTipo"],
        },
      ],
    });
    if (!menu) {
      throw new Error("No se pudo encontrar el menú");
    }
    return menu;
  } catch (error) {
    console.error("Error al buscar menú por ID:", error);
    throw new Error("No se pudo encontrar el menú");
  }
};

const findMenuByIdHandler = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const menu = await findMenuById(id);
    res.status(200).json(menu);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = findMenuByIdHandler;
