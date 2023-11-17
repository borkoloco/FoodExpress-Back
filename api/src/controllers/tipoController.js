const { Tipo } = require("./../db.js");

const getTipos = async (req, res) => {
  const tipos = await Tipo.findAll();
  res.send("respondi bien tipos")
};

module.exports = getTipos;
