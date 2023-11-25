const { Menu, Tipo, Especialidad } = require("../db");

const findIdByEspecialidadNombre = async (nombre) => {
  const especialidad = await Especialidad.findOne({
    where: { NameEspecialidad: nombre },
  });

  return especialidad ? especialidad.idEspecialidad : null;
};

const findIdByTipoNombre = async (nombre) => {
  const tipo = await Tipo.findOne({ where: { nameTipo: nombre } });

  return tipo ? tipo.idTipoMenu : null;
};

const updateMenu = async (req, res) => {
    console.log("Datos recibidos en el cuerpo de la solicitud:", req.body);
  const { id } = req.params; // Obtener el ID del menú a actualizar desde los parámetros de la solicitud
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

    // Actualizar el menú
    const updatedMenu = await Menu.update(
      {
        nameMenu,
        imageUrl,
        price,
        idTipoMenu,
        idEspecialidad,
        description,
      },
      {
        where: { idMenu: id },
      }
    );
   

    if (updatedMenu[0] === 0) {
      // Si no se actualiza ningún menú (el menú con ese ID no existe)
      return res.status(404).json({ error: "Menú no encontrado." });
    }

    res.status(200).json({ message: "Menú actualizado exitosamente." });
  } catch (error) {
    console.error("Error al actualizar el menú:", error);
    res.status(500).json({ error: "No se pudo actualizar el menú." });
  }
};

module.exports = updateMenu;