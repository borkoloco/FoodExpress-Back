const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const {
  getMenu,
  findMenuById,
  createMenu,
  getTipo,
  getEspecialidad,
  postEspecialidad,
  postTipo,
  getMenusByQuery
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

module.exports = router;
