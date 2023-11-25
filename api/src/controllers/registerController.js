const { User } = require("../db");
const { encrypt, compare } = require("./bcryptController");

const registerCtrl = async (req, res) => {
  try {
    const { nameUser, email, password, idRole } = req.body;

    const passwordHash = await encrypt(password);
    console.log(passwordHash);
    const registerUser = await User.create({
      nameUser: nameUser,
      email: email,
      password: passwordHash,
      idRole: idRole,
    });

    res.status(200).json(registerUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
};

module.exports = registerCtrl;
