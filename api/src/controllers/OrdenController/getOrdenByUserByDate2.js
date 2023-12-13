const { Orden, Menu } = require("../../db");

const getOrdenByUserByDate2 = async (req, res) => {
  try {
    const { idUser } = req.params;

    const ordenes = await Orden.findAll({
      where: { idUser: idUser },
      order: [["fecha_de_compra", "DESC"]],
    });

    if (!ordenes || ordenes.length === 0) {
      return res.status(200).json([]);
    }

    const groupedOrders = [];
    const groupedByDate = new Map();

    for (const orden of ordenes) {
      const menu = await Menu.findOne({
        where: { idMenu: orden.idMenu },
        attributes: ["nameMenu"],
      });

      const menuName = menu ? menu.nameMenu : "Indeterminado";

      if (orden.fecha_de_compra) {
        const fechaFormatted = orden.fecha_de_compra.toISOString();

        if (!groupedByDate.has(fechaFormatted)) {
          groupedByDate.set(fechaFormatted, []);
        }
        groupedByDate
          .get(fechaFormatted)
          .push({ ...orden.dataValues, nameMenu: menuName });
      } else {
        if (!groupedByDate.has("Indeterminado")) {
          groupedByDate.set("Indeterminado", []);
        }
        groupedByDate
          .get("Indeterminado")
          .push({ ...orden.dataValues, nameMenu: menuName });
      }
    }

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

module.exports = getOrdenByUserByDate2;

// const { Orden, Menu } = require("../../db");

// const getOrdenByUserByDate2 = async (req, res) => {
//   try {
//     const { idUser } = req.params;

//     const ordenes = await Orden.findAll({
//       where: { idUser: idUser },
//       order: [["fecha_de_compra", "DESC"]],
//       include: [{ model: Menu, attributes: ["nameMenu"], required: true }],
//     });

//     if (!ordenes || ordenes.length === 0) {
//       return res.status(200).json([]);
//     }

//     const groupedOrders = [];
//     const groupedByDate = new Map();

//     ordenes.forEach((orden) => {
//       if (orden.fecha_de_compra) {
//         const fechaFormatted = orden.fecha_de_compra.toISOString(); // Fecha y hora exactas

//         if (!groupedByDate.has(fechaFormatted)) {
//           groupedByDate.set(fechaFormatted, []);
//         }
//         groupedByDate.get(fechaFormatted).push(orden);
//       } else {
//         if (!groupedByDate.has("Indeterminado")) {
//           groupedByDate.set("Indeterminado", []);
//         }
//         groupedByDate.get("Indeterminado").push(orden);
//       }
//     });

//     groupedByDate.forEach((value, key) => {
//       groupedOrders.push({
//         numero_de_envio: key,
//         ordenes: value,
//       });
//     });

//     res.status(200).json(groupedOrders);
//   } catch (error) {
//     res
//       .status(500)
//       .json({
//         error: "Error al obtener las órdenes del usuario",
//         error: error.message,
//       });
//   }
// };

// module.exports = getOrdenByUserByDate2;
