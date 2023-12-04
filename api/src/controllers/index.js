//Gets
const getMenu = require("./MenuController/menuController");
const getEspecialidad = require("./EspecController/especialidadController");
const getTipo = require("./TipoController/tipoController");
const getMenusByQuery = require("./MenuController/getMenusByQuery");
const getUserByEmail = require("./UserController/getUserByEmail");
const findMenuById = require("./MenuController/findMenuByIdController");
const getAllReviews = require("./ReviewsController/getAllReviews");
const getReviewById = require("./ReviewsController/getReviewById");
const getReviewsByMenu = require("./ReviewsController/getReviewsByMenu");
const getReviewsByUser = require("./ReviewsController/getReviewsByUser");
const getAvgReview = require("./ReviewsController/getAvgReview");
const getAllStatus = require("./StatusController/getStatus");
const getStatusById = require("./StatusController/getStatusById");
const getReviewsByStatus = require("./ReviewsController/getReviewsByStatus");
//fin gets

//Deletes
const deleteMenu = require("./MenuController/deleteMenuController");
const deleteEspecialidad = require("./EspecController/deleteEspecialidad");
const deleteEspec2 = require("./EspecController/deleteEspecNoAsoc");
const deleteTipo = require("./TipoController/deleteTipoController");
const deleteTipo2 = require("./TipoController/deleteTipoNoAsociado");
const deleteReviewById = require("./ReviewsController/deleteReview");
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
const addReview = require("./ReviewsController/postReview");
const sendBill = require("./EmailController/sendBill");
const addStatus = require("./StatusController/addStatus");
//fin posts

//updates
const updateTipo = require("./TipoController/updateTipoController");
const updateEspecialidad = require("./EspecController/updateEspecialidad");
const updateMenu = require("./MenuController/updateMenu");
const updateUser = require("./UserController/updateUser");
const updateDispMenu = require("./MenuController/updateDispMenu");
const updateReviewById = require("./ReviewsController/updateReview");
const updateStatus = require("./StatusController/updateStatus");
const updateReviewStatus = require("./ReviewsController/updateReviewStatus");
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
  sendBill,
  getAllReviews,
  getReviewById,
  getReviewsByMenu,
  getReviewsByUser,
  deleteReviewById,
  addReview,
  updateReviewById,
  getAvgReview,
  getAllStatus,
  getStatusById,
  addStatus,
  updateStatus,
  getReviewsByStatus,
  updateReviewStatus,
};
