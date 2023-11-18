const { Router } = require("express");


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const { getMenu, getTipos, getEspecialidad, postEspecialidad } = require("../controllers/index");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/menus", getMenu);
router.get("/tipos", getTipos);
router.get("/especialidades", getEspecialidad);
router.post("/addespecialidad", postEspecialidad);

module.exports = router;
