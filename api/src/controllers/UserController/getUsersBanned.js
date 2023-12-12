const { User, Role } = require("../../db");

const getUsersBanned = async (req, res) => {
  try {
    const usersWithoutAdminRole = await User.findAll({
      include: [
        {
          model: Role,
          where: {
            nameRole: {
              [Sequelize.Op.notILike]: "%admin%",
            },
          },
          required: false,
        },
      ],
      order: [["email", "ASC"]],
      attributes: ["idUser", "nameUser", "isBanned", "email"],
    });

    res.status(200).json(usersWithoutAdminRole);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Hubo un problema al obtener los usuarios." });
  }
};

module.exports = getUsersBanned;

// const { User } = require("../../db");

// const getUsersBanned = async (req, res) => {
//   try {
//     const users = await User.findAll({
//       order: [["email", "ASC"]],
//       attributes: ["nameUser", "isBanned", "email"],
//     });

//     res.status(200).json(users);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "Hubo un problema al obtener los usuarios." });
//   }
// };

// module.exports = getUsersBanned;
