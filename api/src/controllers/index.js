const getMenu = require("./menuController");
const getEspecialidad = require("./especialidadController");
const getTipo = require("./tipoController");
const postEspecialidad = require("./postEspecialidad");
const postTipo = require("./postTipo");
const findMenuById = require("./findMenuByIdController");
const createMenu = require("./createMenuController");
module.exports = {
  getMenu,
  findMenuById,
  createMenu,
  getEspecialidad,
  getTipo,
  postEspecialidad,
  postTipo,
};
