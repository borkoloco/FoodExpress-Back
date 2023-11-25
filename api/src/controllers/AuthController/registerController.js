const { User } = require("../../db");
const { encrypt, compare } = require("../../helpers/bcryptController");

const registerCtrl = async (req, res) => {
  try {
    const { nameUser, email, password, idRole, authProvider, idAuthProvider } =
      req.body;

    let registerUser;

    if (authProvider && idAuthProvider) {
      registerUser = await User.findOne({ authProvider, idAuthProvider });

      if (!registerUser) {
        registerUser = await User.create({
          nameUser: nameUser,
          email: email,
          password: null,
          idRole: idRole,
          authProvider: authProvider,
          idAuthProvider: idAuthProvider,
        });
      }
    } else {
      const passwordHash = await encrypt(password);
      registerUser = await User.create({
        nameUser: nameUser,
        email: email,
        password: passwordHash,
        idRole: idRole,
      });
    }

    res.status(200).json(registerUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
};

module.exports = registerCtrl;

// const { User } = require("../db");
// const { encrypt, compare } = require("./bcryptController");

// const registerCtrl = async (req, res) => {
//   try {
//     const { nameUser, email, password, idRole } = req.body;

//     const passwordHash = await encrypt(password);
//     console.log(passwordHash);
//     const registerUser = await User.create({
//       nameUser: nameUser,
//       email: email,
//       password: passwordHash,
//       idRole: idRole,
//     });

//     res.status(200).json(registerUser);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Error al registrar el usuario" });
//   }
// };

// module.exports = registerCtrl;