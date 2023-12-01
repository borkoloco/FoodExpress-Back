//Gets
const getMenu = require("./MenuController/menuController");
const getEspecialidad = require("./EspecController/especialidadController");
const getTipo = require("./TipoController/tipoController");
const getMenusByQuery = require("./MenuController/getMenusByQuery");
const getUserByEmail = require("./UserController/getUserByEmail");
const findMenuById = require("./MenuController/findMenuByIdController");
const getAllReviews = require("./EmailController/getAllReviews");
const getReviewById = require("./EmailController/getReviewById");
const getReviewsByMenu = require("./EmailController/getReviewsByMenu");
const getReviewsByUser = require("./EmailController/getReviewsByUser");

//fin gets

//Deletes
const deleteMenu = require("./MenuController/deleteMenuController");
const deleteEspecialidad = require("./EspecController/deleteEspecialidad");
const deleteEspec2 = require("./EspecController/deleteEspecNoAsoc");
const deleteTipo = require("./TipoController/deleteTipoController");
const deleteTipo2 = require("./TipoController/deleteTipoNoAsociado");
const deleteReviewById = require("./EmailController/deleteReview");
//fin deletes

//posts
const postEspecialidad = require("./EspecController/postEspecialidad");
const postTipo = require("./TipoController/postTipo");
const createMenu = require("./MenuController/createMenuController");
const postRole = require("./UserController/postRoleController");
const loginCtrl = require("./AuthController/loginController");
const registerCtrl = require("./AuthController/registerController");
const findOrCreateByEmail = require("./UserController/findOrCreateByEmail");
const sendEmail = require("./EmailController/sendEmail");
const addReview = require("./EmailController/postReview");
//fin posts

//updates
const updateTipo = require("./TipoController/updateTipoController");
const updateEspecialidad = require("./EspecController/updateEspecialidad");
const updateMenu = require("./MenuController/updateMenu");
const updateUser = require("./UserController/updateUser");
const updateDispMenu = require("./MenuController/updateDispMenu");
//fin updates

module.exports = {
  getMenu,
  deleteMenu,
  updateMenu,
  findMenuById,
  createMenu,
  updateUser,
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
  deleteEspec2,
  deleteTipo2,
  findOrCreateByEmail,
  updateDispMenu,
  sendEmail,
  getAllReviews,
  getReviewById,
  getReviewsByMenu,
  getReviewsByUser,
  deleteReviewById,
  addReview,
};
