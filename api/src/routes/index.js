const { Router } = require("express");
const tipoRouter = require("./tipoRouter");
const menuRouter = require("./menuRouter");
const especialidadRouter = require("./especialidadRouter");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/menus", menuRouter);
router.use("/tipo", tipoRouter);
router.use("/especialidad", especialidadRouter);

module.exports = router;
