// const jwt = require("jsonwebtoken");

// const tokenSign = async (user) => {
//   return jwt.sign(
//     {
//       _id: user._id,
//       nameRole: user.role,
//     },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: "2h",
//     }
//   );
// };

// const verifyToken = async (token) => {
//   try {
//     return jwt.verify(token, process.env.JWT_SECRET);
//   } catch (error) {
//     return null;
//   }
// };

// const decodeSign = (token) => {
//   return jwt.decode(token, null);
// };

// module.exports = { tokenSign, decodeSign, verifyToken };
