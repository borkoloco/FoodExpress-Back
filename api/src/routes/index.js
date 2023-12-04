const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const {
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
} = require("../controllers/index");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/menus", getMenu);
router.get("/menu/", getMenusByQuery);
router.get("/menus/:id", findMenuById);
router.patch("/menu/:id", deleteMenu);
router.post("/addmenu", createMenu);
router.get("/tipos", getTipo);
router.post("/addtipo", postTipo);
router.get("/especialidades", getEspecialidad);
router.post("/addespecialidad", postEspecialidad);
router.patch("/updatetipo/:id", updateTipo);
router.delete("/deletetipo/:id", deleteTipo);
router.delete("/deleteespecialidad/:id", deleteEspecialidad);
router.patch("/updateespecialidad/:idEspecialidad", updateEspecialidad);
router.post("/login", loginCtrl);
router.post("/register", registerCtrl);
router.post("/addrole", postRole);
router.get("/users/:email", getUserByEmail);
router.patch("/updatemenu/:id", updateMenu);
router.patch("/updateuser/:id", updateUser);
router.delete("/deletetipo2/:id", deleteTipo2);
router.delete("/deleteespec2/:id", deleteEspec2);
router.post("/findorcreatebyemail", findOrCreateByEmail);
router.patch("/updatedispmenu/:id", updateDispMenu);
router.post("/sendEmail", sendEmail);
router.post("/sendBill", sendBill);
router.get("/getallreviews", getAllReviews);
router.get("/getreview/:id", getReviewById);
router.get("/getreviewsmenu/:idMenu", getReviewsByMenu);
router.get("/getreviewsuser/:idUser", getReviewsByUser);
router.delete("/deletereview/:id", deleteReviewById);
router.patch("/updatereview/:id", updateReviewById);
router.post("/addreview", addReview);
router.get("/getavgreview/:id", getAvgReview);
router.get('/getcarrito/:idUser', getCarrito);
router.post("/carrito/add", postCarrito);
router.get("/getstatusbyid/:id", getStatusById);
router.get("/getallstatus", getAllStatus);
router.post("/addstatus", addStatus);
router.patch("/updatestatus", updateStatus);
router.get("/getreviewbystatus/:idStatus", getReviewsByStatus);
router.patch("/updatereviewstatus/:id", updateReviewStatus);
router.get("/getallavg", getAllAvg);

module.exports = router;
