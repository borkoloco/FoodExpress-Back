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
  getEspecialidad,
  postEspecialidad,
  postTipo,
  deleteEspecialidad,
  updateEspecialidad,
} = require("../controllers/index");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/menus", getMenu);
router.get("/menus/:id", findMenuById);
router.post("/addmenu", createMenu);
router.get("/tipos", getTipo);
router.post("/addtipo", postTipo);
router.get("/especialidades", getEspecialidad);
router.post("/addespecialidad", postEspecialidad);
router.patch("/updatetipo", updateTipo);
router.delete("/deleteespecialidad/:id", deleteEspecialidad);
router.patch("/updateespecialidad/:id", updateEspecialidad);

module.exports = router;
