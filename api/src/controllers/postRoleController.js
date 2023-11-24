const { Role } = require("../db");

const postRole = async (req, res) => {
  try {
    const { nameRole } = req.body;
    const nuevoRol = await Role.create({
      nameRole,
    });

    res.status(200).json(nuevoRol);
  } catch (error) {
    res.status(500).send("Error al crear rol");
  }
};

module.exports = postRole;
