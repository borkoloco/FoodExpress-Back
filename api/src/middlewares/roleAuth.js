// const { verifyToken } = require("../helpers/generateToken");
// const { User } = require("../models");

// const checkRoleAuth = (roles) => async (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ").pop();
//     const tokenData = await verifyToken(token);
//     const userData = await User.findById(tokenData._id);

//     if ([].concat(roles).includes(userData.nameRole)) {
//       next();
//     } else {
//       res.status(409);
//       res.send({ error: "No tiene permisos" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(409);
//     res.send({ error: "No autorizado" });
//   }
// };

// module.exports = checkRoleAuth;
