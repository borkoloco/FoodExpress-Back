const { Orden } = require("../../db");

const getOrdenByUserByDate = async (req, res) => {
  try {
    const { idUser } = req.params;

    const ordenes = await Orden.findAll({
      where: { idUser: idUser },
      order: [["fecha_de_compra", "DESC"]],
    });

    if (!ordenes || ordenes.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron órdenes para este usuario" });
    }

    const groupedOrders = [];
    const groupedByDate = new Map();

    ordenes.forEach((orden) => {
      if (orden.fecha_de_compra) {
        const fechaFormatted = orden.fecha_de_compra.toISOString(); // Fecha y hora exactas

        if (!groupedByDate.has(fechaFormatted)) {
          groupedByDate.set(fechaFormatted, []);
        }
        groupedByDate.get(fechaFormatted).push(orden);
      } else {
        if (!groupedByDate.has("Indeterminado")) {
          groupedByDate.set("Indeterminado", []);
        }
        groupedByDate.get("Indeterminado").push(orden);
      }
    });

    groupedByDate.forEach((value, key) => {
      groupedOrders.push({
        numero_de_envio: key,
        ordenes: value,
      });
    });

    res.status(200).json(groupedOrders);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las órdenes del usuario" });
  }
};

module.exports = getOrdenByUserByDate;

// const { Orden } = require("../../db");

// const getOrdenByUserByDate = async (req, res) => {
//   try {
//     const { idUser } = req.params;

//     const ordenes = await Orden.findAll({
//       where: { idUser: idUser },
//       order: [["fecha_de_compra", "DESC"]],
//     });

//     if (!ordenes || ordenes.length === 0) {
//       return res
//         .status(404)
//         .json({ message: "No se encontraron órdenes para este usuario" });
//     }

//     const groupedOrders = [];
//     const seenDates = new Set();

//     ordenes.forEach((orden) => {
//       if (!orden.fecha_de_compra) {
//         return; // Si la fecha es nula, se omite esta orden
//       }

//       const fechaFormatted = orden.fecha_de_compra.toISOString().split("T")[0]; // Formatea la fecha como YYYY-MM-DD

//       if (!seenDates.has(fechaFormatted)) {
//         groupedOrders.push({
//           numero_de_envio: fechaFormatted,
//           ordenes: [],
//         });
//         seenDates.add(fechaFormatted);
//       }

//       const index = groupedOrders.findIndex(
//         (group) => group.numero_de_envio === fechaFormatted
//       );
//       groupedOrders[index].ordenes.push(orden);
//     });

//     res.status(200).json(groupedOrders);
//   } catch (error) {
//     res.status(500).json({ error: "Error al obtener las órdenes del usuario" });
//   }
// };

// module.exports = getOrdenByUserByDate;

// const { Orden } = require("../../db");
// const { Sequelize } = require("sequelize");

// const getOrdenByUserByDate = async (req, res) => {
//   try {
//     const { idUser } = req.params;

//     const ordenes = await Orden.findAll({
//       where: { idUser: idUser },
//       attributes: [
//         [
//           Sequelize.fn(
//             "to_char",
//             Sequelize.col("fecha_de_compra"),
//             "YYYY-MM-DD HH24:MI:SS"
//           ),
//           "fecha_con_segundos",
//         ],
//         [Sequelize.literal("ARRAY_AGG(orden.*)"), "ordenes"],
//       ],
//       group: [
//         Sequelize.fn(
//           "to_char",
//           Sequelize.col("fecha_de_compra"),
//           "YYYY-MM-DD HH24:MI:SS"
//         ),
//       ],
//       raw: true,
//       include: [],
//     });

//     if (!ordenes || ordenes.length === 0) {
//       return res
//         .status(404)
//         .json({ message: "No se encontraron órdenes para este usuario" });
//     }

//     res.status(200).json(ordenes);
//   } catch (error) {
//     res.status(500).json({ error: "Error al obtener las órdenes del usuario" });
//   }
// };

// module.exports = getOrdenByUserByDate;

// const getOrdenByUserGroupedByDate = async (req, res) => {
//   try {
//     const { idUser } = req.params;

//     const ordenes = await Orden.findAll({
//       where: { idUser: idUser },
//       attributes: [
//         [
//           Sequelize.fn("date_trunc", "day", Sequelize.col("fecha_de_compra")),
//           "fecha_de_compra",
//         ],
//         [Sequelize.fn("sum", Sequelize.col("cantidad")), "total_cantidad"],
//         [Sequelize.fn("sum", Sequelize.col("subtotal")), "total_subtotal"],
//       ],
//       group: [
//         Sequelize.fn("date_trunc", "day", Sequelize.col("fecha_de_compra")),
//       ],
//     });

//     if (!ordenes || ordenes.length === 0) {
//       return res
//         .status(404)
//         .json({ message: "No se encontraron órdenes para este usuario" });
//     }

//     res.status(200).json(ordenes);
//   } catch (error) {
//     res.status(500).json({
//       error: "Error al obtener las órdenes del usuario",
//       error: error.message,
//     });
//   }
// };

// module.exports = getOrdenByUserGroupedByDate;
