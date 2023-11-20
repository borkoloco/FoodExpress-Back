const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const {
  getMenu,
  getTipo,
  getEspecialidad,
  postEspecialidad,
  postTipo,
} = require("../controllers/index");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/menus", getMenu);
router.get("/tipos", getTipo);
router.post("/addtipo", postTipo);
router.get("/especialidades", getEspecialidad);
router.post("/addespecialidad", postEspecialidad);

module.exports = router;
