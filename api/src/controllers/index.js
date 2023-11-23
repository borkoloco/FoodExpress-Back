const getMenu = require("./menuController");
const getEspecialidad = require("./especialidadController");
const getTipo = require("./tipoController");
const postEspecialidad = require("./postEspecialidad");
const postTipo = require("./postTipo");
const findMenuById = require("./findMenuByIdController");
const createMenu = require("./createMenuController");
const updateTipo = require("./updateTipoController");
const deleteTipo = require("./deleteTipoController");
const updateEspecialidad = require("./updateEspecialidad");
const deleteEspecialidad = require("./deleteEspecialidad");
module.exports = {
  getMenu,
  findMenuById,
  createMenu,
  getEspecialidad,
  getTipo,
  updateTipo,
  deleteTipo,
  postEspecialidad,
  postTipo,
  updateEspecialidad,
  deleteEspecialidad,
};
