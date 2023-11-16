const { Router } = require("express");
const tipoRouter = Router();
const { getTipos } = require("./../controllers/tipoController");

tipoRouter.get("/", async (req, res) => {
  try {
    const tipos = await getTipos();
    res.status(200).json(tipos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = tipoRouter;
