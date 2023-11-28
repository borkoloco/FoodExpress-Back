const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const {
  getMenu,
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
} = require("../controllers/index");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/menus", getMenu);
router.get("/menu/", getMenusByQuery);
router.get("/menus/:id", findMenuById);
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
router.delete("deletetipo2/:id", deleteTipo2);
router.delete("/deleteespec2/:id", deleteEspec2);
router.post("/findorcreatebyemail", findOrCreateByEmail);

module.exports = router;
