const { Tipo } = require("../../db");

const updateTipo = async (req, res) => {
  try {
    const { id } = req.params;
    const { nameTipo } = req.body;

    const updateTipo = await Tipo.findByPk(id);

    if (!updateTipo) {
      return res.status(404).send("Tipo no encontrado");
    }

    await updateTipo.update({
      nameTipo,
    });

    res.status(200).json(updateTipo);
  } catch (error) {
    res.status(500).json("Error al actualizar tipo");
  }
};

module.exports = updateTipo;

// const { Tipo } = require("../../db");

// const updateTipo = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { nameTipo } = req.body;

//     const tipoToUpdate = await Tipo.findByPk(id);

//     if (!tipoToUpdate) {
//       return res.status(404).send("Tipo no encontrado");
//     }

//     const existingTipo = await Tipo.findOne({ where: { nameTipo } });

//     if (existingTipo && existingTipo.id !== parseInt(id, 10)) {
//       return res.status(400).send("Ya existe un tipo con este nombre");
//     }

//     await tipoToUpdate.update({ nameTipo });

//     res.status(200).json(tipoToUpdate);
//   } catch (error) {
//     res.status(500).json("Error al actualizar tipo");
//   }
// };

// module.exports = updateTipo;
