const { User } = require("../../db");

const findOrCreateByEmail = async (req, res) => {
  const { email } = req.params;

  if (!email) {
    return res.status(400).send("Se requiere el email");
  }

  try {
    const nameUser = email.split("@")[0];

    let [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        nameUser,
      },
    });

    if (created) {
      return res.status(201).send("Usuario creado correctamente");
    }

    return res.status(200).send("Usuario encontrado");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al buscar o crear el usuario");
  }
};

module.exports = findOrCreateByEmail;
