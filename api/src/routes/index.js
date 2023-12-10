const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const {
  createPaymentLink,
  getMenu,
  deleteMenu,
  findMenuById,
  createMenu,
  getTipo,
  updateTipo,
  postRole,
  getEspecialidad,
  postEspecialidad,
  postTipo,
  updateMenu,
  getMenusByQuery,
  deleteTipo,
  deleteEspecialidad,
  updateEspecialidad,
  loginCtrl,
  registerCtrl,
  getUserByEmail,
  updateUser,
  deleteTipo2,
  deleteEspec2,
  findOrCreateByEmail,
  updateDispMenu,
  sendEmail,
  getAllReviews,
  getReviewById,
  getReviewsByMenu,
  getReviewsByUser,
  deleteReviewById,
  addReview,
  updateReviewById,
  getAvgReview,
  sendBill,
  postCarrito,
  getCarrito,
  getStatusById,
  getAllStatus,
  addStatus,
  updateStatus,
  getReviewsByStatus,
  updateReviewStatus,
  getAllAvg,
  postOrden,
  getOrden,
  getOrdenByUser,
  getEnvioByDire,
  getDireccionByUser,
  postDireccion,
  postEnvio,
  updateCantidadCarrito,
  deleteItemCarrito,
  deleteCarrito,
  receiveWebHook,
  postOrdenCarrito,
  getOrdenCarrito,
  deleteDiresByUser,
} = require("../controllers/index");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//----------------- GETS --------------------
router.get("/menus", getMenu);
router.get("/menu/", getMenusByQuery);
router.get("/menus/:id", findMenuById);
router.get("/tipos", getTipo);
router.get("/especialidades", getEspecialidad);
router.get("/users/:email", getUserByEmail);
router.get("/getallreviews", getAllReviews);
router.get("/getreview/:id", getReviewById);
router.get("/getavgreview/:id", getAvgReview);
router.get("/getreviewsuser/:idUser", getReviewsByUser);
router.get("/getreviewsmenu/:idMenu", getReviewsByMenu);
router.get("/getcarrito/:idUser", getCarrito);
router.get("/getstatusbyid/:id", getStatusById);
router.get("/getallstatus", getAllStatus);
router.get("/getorden", getOrden);
router.get("/getordencarrito/:idUser", getOrdenCarrito);
router.get("/getordenbyuser/:idUser", getOrdenByUser);
router.get("/getenviobydire/:idDireccion", getEnvioByDire);
router.get("/getdireccionbyuser/:idUser", getDireccionByUser);
router.get("/getreviewbystatus/:idStatus", getReviewsByStatus);
router.get("/getallavg", getAllAvg);
// router.get("/webhook", receiveWebhook);

//------------------ POSTS ---------------------
router.post("/create-payment", createPaymentLink);
router.post("/webhook", receiveWebHook);
router.post("/addmenu", createMenu);
router.post("/addtipo", postTipo);
router.post("/addespecialidad", postEspecialidad);
router.post("/login", loginCtrl);
router.post("/register", registerCtrl);
router.post("/addrole", postRole);
router.post("/findorcreatebyemail", findOrCreateByEmail);
router.post("/sendEmail", sendEmail);
router.post("/sendBill", sendBill);
router.post("/postordencarrito", postOrdenCarrito);
router.post("/addreview", addReview);
router.post("/carrito/add", postCarrito);
router.post("/addstatus", addStatus);
router.post("/postdireccion", postDireccion);
router.post("/postenvio", postEnvio);
router.post("/postorden", postOrden);
//------------------ PATCH ---------------------
router.patch("/menu/:id", deleteMenu);
router.patch("/updatetipo/:id", updateTipo);
router.patch("/updateespecialidad/:idEspecialidad", updateEspecialidad);
router.patch("/updatemenu/:id", updateMenu);
router.patch("/updateuser/:id", updateUser);
router.patch("/updatedispmenu/:id", updateDispMenu);
router.patch("/updatereview/:id", updateReviewById);
router.patch("/carrito/update/:idUser/:idMenu", updateCantidadCarrito);
router.patch("/updatestatus", updateStatus);
router.patch("/updatereviewstatus/:id", updateReviewStatus);
//---------------- DELETE --------------------
router.delete("/deletetipo/:id", deleteTipo);
router.delete("/deleteespecialidad/:id", deleteEspecialidad);
router.delete("/deletetipo2/:id", deleteTipo2);
router.delete("/deleteespec2/:id", deleteEspec2);
router.delete("/deletereview/:id", deleteReviewById);
router.delete("/carrito/delete/:idUser/:idMenu", deleteItemCarrito);
router.delete("/carrito/deleteall/:idUser", deleteCarrito);
router.delete("/deletedires/:idUser", deleteDiresByUser);

module.exports = router;
