const { compare } = require("bcryptjs");
const { User } = require("../db");
// const { tokenSign } = require("../helpers/generateToken");

const loginCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(404).send("No se encontro el usuario");
      return;
    }
    const checkPassword = await compare(password, user.password);
    // const tokenSession = await tokenSign(user);

    if (checkPassword) {
      res.send({
        data: user,
        // tokenSession,
        message: "Login exitoso",
      });
      return;
    }
    if (!checkPassword) {
      res.status(404).send("Contraseña incorrecta");
      return;
    }
  } catch (error) {
    res.status(500).send("Error al iniciar sesion");
  }
};

module.exports = loginCtrl;
