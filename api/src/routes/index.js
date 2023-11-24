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
  getMenusByQuery,
  deleteTipo,
  deleteEspecialidad,
  updateEspecialidad,
  loginCtrl,
  registerCtrl,

} = require("../controllers/index");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/menus", getMenu);
router.get("/menu/", getMenusByQuery)
router.get("/menus/:id", findMenuById);
router.post("/addmenu", createMenu);
router.get("/tipos", getTipo);
router.post("/addtipo", postTipo);
router.get("/especialidades", getEspecialidad);
router.post("/addespecialidad", postEspecialidad);
router.patch("/updatetipo/:id", updateTipo);
router.delete("/deletetipo/:id", deleteTipo);
router.delete("/deleteespecialidad/:id", deleteEspecialidad);
router.patch("/updateespecialidad/:id", updateEspecialidad);
router.post("/login", loginCtrl);
router.post("/register", registerCtrl);
router.post("/addrole", postRole);

module.exports = router;
