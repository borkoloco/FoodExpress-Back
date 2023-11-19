const { Tipo } = require("./../db.js");

const getTipo = async (req, res) => {
  try {
    const tipos = await Tipo.findAll();
    res.status(200).json(tipos);
  } catch (error) {
    res.status(400).json("Tipo no encontrado");
  }
};

module.exports = getTipo;
