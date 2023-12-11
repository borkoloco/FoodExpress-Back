const mercadopago = require("mercadopago");
const { Carrito, Orden, Menu, User } = require("../../db");

const receiveWebHook = async (req, res) => {
  console.log(req.query);
  const payment = req.query;

  try {
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      console.log(data.response);
      console.log("console.log de data.status", data.response.status);
      console.log("ID user:", data.response.metadata);
      console.log("ID'MENU:", data.response.additional_info.items);

      // Verificar el estado y realizar acciones correspondientes
      if (data.response.status === "approved") {
        // Iterar sobre los elementos del carrito
        for (const item of data.response.additional_info.items) {
          const idMenu = item.id;

          // Obtener datos del carrito antes de eliminarlos
          const carritoItem = await Carrito.findOne({
            where: {
              idUser: data.response.metadata.user_id,
              idMenu: idMenu,
            },
            include: [{ model: Menu, as: "menu" }],
          });

          // Crear un nuevo registro en la tabla Orden con los datos del carrito
          await Orden.create({
            idUser: carritoItem.idUser,
            idMenu: carritoItem.menu.idMenu,
            cantidad: carritoItem.cantidad,
            precio: carritoItem.precio,
            subtotal: carritoItem.subtotal,
            fecha_de_compra: data.response.date_created,
            metodo_de_compra: data.response.payment_type_id,
            estado: "Approved",
          });

          // Eliminar registros del carrito
          await Carrito.destroy({
            where: {
              idUser: data.response.metadata.user_id,
              idMenu: idMenu,
            },
          });
        }

        res.status(204).send("Webhook hizo su trabajo");
      } else if (data.response.status === "rejected") {
        // Iterar sobre los elementos del carrito
        for (const item of data.response.additional_info.items) {
          const idMenu = item.id;

          // Obtener datos del carrito sin eliminarlos
          const carritoItem = await Carrito.findOne({
            where: {
              idUser: data.response.metadata.user_id,
              idMenu: idMenu,
            },
            include: [{ model: Menu, as: "menu" }],
          });

          // Crear un nuevo registro en la tabla Orden con los datos del carrito
          await Orden.create({
            idUser: carritoItem.idUser,
            idMenu: carritoItem.menu.idMenu,
            cantidad: carritoItem.cantidad,
            precio: carritoItem.precio,
            subtotal: carritoItem.subtotal,
            fecha_de_compra: data.response.date_created,
            metodo_de_compra: data.response.payment_type_id,
            estado: "Rejected",
          });
        }

        res.status(204).send("Webhook hizo su trabajo");
      } else {
        res.status(400).send("Tipo de pago no válido");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = receiveWebHook;

// const mercadopago = require("mercadopago");
// const { Carrito, Orden, Menu, User } = require("../../db");

// const receiveWebHook = async (req, res) => {
//   console.log(req.query);
//   const payment = req.query;

//   try {
//     if (payment.type === "payment") {
//       const data = await mercadopago.payment.findById(payment["data.id"]);
//       console.log("console.log de data.status", data.response.status);
//       console.log("ID user:", data.response.metadata);
//       console.log("ID'MENU:", data.response.additional_info.items);

//       // Verificar el estado y realizar acciones correspondientes
//       if (data.response.status === "approved") {
//         // Iterar sobre los elementos del carrito
//         for (const item of data.response.additional_info.items) {
//           const idMenu = item.id;

//           // Obtener datos del carrito antes de eliminarlos
//           const carritoItem = await Carrito.findOne({
//             where: {
//               idUser: data.response.metadata.user_id,
//               idMenu: idMenu,
//             },
//             include: [{ model: Menu, as: 'menu' }],
//           });

//           // Crear un nuevo registro en la tabla Orden con los datos del carrito
//           await Orden.create({
//             userIdUser: carritoItem.idUser,
//             menuIdMenu: carritoItem.menu.idMenu,
//             cantidad: carritoItem.cantidad,
//             precio: carritoItem.precio,
//             subtotal: carritoItem.subtotal,
//             fecha_de_compra: data.response.date_created,
//             estado: "Approved",
//           });

//           // Eliminar registros del carrito
//           await Carrito.destroy({
//             where: {
//               idUser: data.response.metadata.user_id,
//               idMenu: idMenu,
//             },
//           });
//         }

//         res.status(204).send("Webhook hizo su trabajo");
//       } else if (data.response.status === "rejected") {
//         // Iterar sobre los elementos del carrito
//         for (const item of data.response.additional_info.items) {
//           const idMenu = item.id;

//           // Obtener datos del carrito sin eliminarlos
//           const carritoItem = await Carrito.findOne({
//             where: {
//               idUser: data.response.metadata.user_id,
//               idMenu: idMenu,
//             },
//             include: [{ model: Menu, as: 'menu' }],
//           });

//           // Crear un nuevo registro en la tabla Orden con los datos del carrito
//           await Orden.create({
//             userIdUser: carritoItem.idUser,
//             menuIdMenu: carritoItem.menu.idMenu,
//             cantidad: carritoItem.cantidad,
//             precio: carritoItem.precio,
//             subtotal: carritoItem.subtotal,
//             fecha_de_compra: data.response.date_created,
//             estado: "Rejected",
//           });
//         }

//         res.status(204).send("Webhook hizo su trabajo");
//       } else {
//         res.status(400).send("Tipo de pago no válido");
//       }
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// const mercadopago = require("mercadopago");

// const receiveWebHook = async (req, res) => {
//     console.log(req.query);
//     const payment = req.query;
//     try {
//       if (payment.type === "payment") {
//         const data = await mercadopago.payment.findById(payment["data.id"]);
//         console.log(data);

//         /*
//           Aqui podemos guardar en la Bd - mapear la data necesaria para mandar
//           para mandar a la tabla orden
//         */

//       }
//       res.status(204).send("webhook hizo su trabajo");
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({error:error.message});
//     }
//   };

//   module.exports = receiveWebHook;
