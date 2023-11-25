const getMenu = require("./menuController");
const getEspecialidad = require("./especialidadController");
const getTipo = require("./tipoController");
const postEspecialidad = require("./postEspecialidad");
const postTipo = require("./postTipo");
const findMenuById = require("./findMenuByIdController");
const createMenu = require("./createMenuController");
const getMenusByQuery = require("./getMenusByQuery");
const updateTipo = require("./updateTipoController");
const deleteTipo = require("./deleteTipoController");
const updateEspecialidad = require("./updateEspecialidad");
const deleteEspecialidad = require("./deleteEspecialidad");
const registerCtrl = require("./registerController");
const loginCtrl = require("./loginController");
const postRole = require("./postRoleController");
const getUserByEmail = require("./getUserByEmail");
module.exports = {
  getMenu,
  findMenuById,
  createMenu,
  loginCtrl,
  registerCtrl,
  getEspecialidad,
  getUserByEmail,
  getTipo,
  updateTipo,
  postRole,
  deleteTipo,
  postEspecialidad,
  postTipo,
  getMenusByQuery,
  updateEspecialidad,
  deleteEspecialidad,
};
