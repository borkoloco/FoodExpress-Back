const { Menu, Tipo, Especialidad } = require("../../db");

async function getMenu(req, res) {
  try {
    // Busca todas las especialidades en la base de datos
    const menu = await Menu.findAll({
      include: [
        {
          model: Tipo,
          attributes: ["nameTipo"],
          as: "typeMenu", // Asegúrate de usar el alias correcto definido en tu modelo Menu
        },
        {
          model: Especialidad,
          attributes: ["NameEspecialidad"],
          as: "specialtyMenu", // Asegúrate de usar el alias correcto definido en tu modelo Menu
        },
      ],
    });

    // Envía la respuesta con todas las especialidades
    res.status(200).json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los Menús");
  }
}

module.exports = getMenu;
