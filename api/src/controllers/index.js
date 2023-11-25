const getMenu = require("./MenuController/menuController");
const getEspecialidad = require("./EspecController/especialidadController");
const getTipo = require("./TipoController/tipoController");
const postEspecialidad = require("./EspecController/postEspecialidad");
const postTipo = require("./TipoController/postTipo");
const findMenuById = require("./MenuController/findMenuByIdController");
const createMenu = require("./MenuController/createMenuController");
const getMenusByQuery = require("./MenuController/getMenusByQuery");
const updateTipo = require("./TipoController/updateTipoController");
const deleteTipo = require("./TipoController/deleteTipoController");
const updateEspecialidad = require("./EspecController/updateEspecialidad");
const deleteEspecialidad = require("./EspecController/deleteEspecialidad");
const registerCtrl = require("./AuthController/registerController");
const loginCtrl = require("./AuthController/loginController");
const postRole = require("./AuthController/postRoleController");
const getUserByEmail = require("./AuthController/getUserByEmail");
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
