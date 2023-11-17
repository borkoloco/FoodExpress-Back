const { Tipo } = require("./../db.js");

const getTipos = async () => {
  const tipos = await Tipo.findAll();
  return tipos;
};

module.exports = { getTipos };
