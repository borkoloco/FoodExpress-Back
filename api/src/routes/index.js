const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const {
  createPaymentLink,
  failurePayment,
  pendingPayment,
  successPayment,
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

router.get("/failurePayment", failurePayment);
router.get("/pendingPayment", pendingPayment);
router.get("/successPayment", successPayment);
// router.get("/webhook", receiveWebhook);

//------------------ POSTS ---------------------
router.post("/create-payment", createPaymentLink);

router.post("/addmenu", createMenu);
router.post("/addtipo", postTipo);
router.post("/addespecialidad", postEspecialidad);
router.post("/login", loginCtrl);
router.post("/register", registerCtrl);
router.post("/addrole", postRole);
router.post("/findorcreatebyemail", findOrCreateByEmail);
router.post("/sendEmail", sendEmail);
router.post("/addreview", addReview);
router.post("/sendBill", sendBill);

//------------------ PATCH ---------------------
router.patch("/menu/:id", deleteMenu);
router.patch("/updatetipo/:id", updateTipo);
router.patch("/updateespecialidad/:idEspecialidad", updateEspecialidad);
router.patch("/updatemenu/:id", updateMenu);
router.patch("/updateuser/:id", updateUser);
router.patch("/updatedispmenu/:id", updateDispMenu);
router.patch("/updatereview/:id", updateReviewById);

//---------------- DELETE --------------------
router.delete("/deletetipo/:id", deleteTipo);
router.delete("/deleteespecialidad/:id", deleteEspecialidad);
router.delete("/deletetipo2/:id", deleteTipo2);
router.delete("/deleteespec2/:id", deleteEspec2);
router.delete("/deletereview/:id", deleteReviewById);

module.exports = router;
