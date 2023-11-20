const { Menu, Tipo, Especialidad } = require("../db");

// funcion para buscar en la tabla de Especialidad mi rey
const findIdByEspecialidadNombre = async (nombre) => {
  const especialidad = await Especialidad.findOne({
    where: { NameEspecialidad: nombre },
  });

  return especialidad ? especialidad.idEspecialidad : null;
};

// funcion para buscar en la tabla de Tipo my king

const findIdByTipoNombre = async (nombre) => {
  const tipo = await Tipo.findOne({ where: { nameTipo: nombre } });

  return tipo ? tipo.idTipoMenu : null;
};

const createMenu = async (req, res) => {
  const { nameMenu, imageUrl, price, tipo, especialidad, description } =
    req.body;

  if (!nameMenu || !imageUrl || !price || !tipo || !especialidad) {
    return res.status(400).json({ error: "Faltan parámetros requeridos." });
  }

  try {
    // Para traer los IDs correspondientes
    const idTipoMenu = await findIdByTipoNombre(tipo);
    const idEspecialidad = await findIdByEspecialidadNombre(especialidad);

    if (!idTipoMenu || !idEspecialidad) {
      return res
        .status(404)
        .json({ error: "Tipo o especialidad no encontrados." });
    }
    const newMenu = await Menu.create({
      nameMenu,
      imageUrl,
      price,
      idTipoMenu,
      idEspecialidad,
      description,
    });

    res.status(201).json(newMenu);
  } catch (error) {
    console.error("Error al crear el menú:", error);
    res.status(500).json({ error: "No se pudo crear el menú." });
  }
};

module.exports = createMenu;
