const { User } = require("../../db");
const { compare } = require("./bcryptController");
// const { tokenSign } = require("../helpers/generateToken");

const loginCtrl = async (req, res) => {
  try {
    const { email, password, authProvider, idAuthProvider } = req.body;

    let user;

    if (authProvider && idAuthProvider) {
      user = await User.findOne({ where: { authProvider, idAuthProvider } });
    } else {
      user = await User.findOne({ where: { email } });
    }

    if (!user) {
      res.status(404).json({ error: "No se encontró el usuario" });
      return;
    }

    if (authProvider && idAuthProvider) {
      res.status(200).json({ data: user, message: "Login exitoso" });
      return;
    }

    if (password) {
      const checkPassword = await compare(password, user.password);

      if (!checkPassword) {
        res.status(401).json({ error: "Credenciales inválidas" });
        return;
      }
    }

    // const tokenSession = await tokenSign(user);

    res.status(200).json({
      data: user,
      // tokenSession,
      message: "Login exitoso",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
};

module.exports = loginCtrl;

// const { compare } = require("bcryptjs");
// const { User } = require("../../db");
// // const { tokenSign } = require("../helpers/generateToken");

// const loginCtrl = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ where: { email } });
//     if (!user) {
//       res.status(404).send("No se encontro el usuario");
//       return;
//     }
//     const checkPassword = await compare(password, user.password);
//     // const tokenSession = await tokenSign(user);

//     if (checkPassword) {
//       res.send({
//         data: user,
//         // tokenSession,
//         message: "Login exitoso",
//       });
//       return;
//     }
//     if (!checkPassword) {
//       res.status(404).send("Contraseña incorrecta");
//       return;
//     }
//   } catch (error) {
//     res.status(500).send("Error al iniciar sesion");
//   }
// };

// module.exports = loginCtrl;
