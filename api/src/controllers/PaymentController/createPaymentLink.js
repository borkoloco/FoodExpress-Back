const mercadopago = require("mercadopago");
const dotenv = require("dotenv");
dotenv.config();

mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN || "",
});

const createPaymentLink = async (req, res) => {
  const sesion = req.body;
  console.log(sesion);

  const newArray = sesion.propertiesReadyToSend.map((i) => {
    return {
      id: i.idMenu,
      title: i.name,
      unit_price: i.price,
      quantity: i.quantity,
      description: i.description,
      currency_id: "ARS",
    };
  });

  try {
    const preference = {
      items: newArray,

      metadata: {
        user_id: sesion.idUser,
      },

      back_urls: {
        success: "http://localhost:3000/successPayment",
        failure: "http://localhost:3000/failurePayment",
        pending: "http://localhost:3000/pendingPayment",
      },

      // notification_url:"https://foodexpress-back-production.up.railway.app/webhook",

      //aca debe ir la direccion que se recibe en el ngrok y reemplazarla

      notification_url: "https://16e7-181-110-92-145.ngrok.io/webhook",
      // auto_return: "approved",
    };

    const response = await mercadopago.preferences.create(preference);
    console.log(response);
    res.status(200).json(response.response.init_point);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = createPaymentLink;

// const mercadopago = require("mercadopago");
// const dotenv = require("dotenv");
// dotenv.config();

// mercadopago.configure({
//   access_token: process.env.ACCESS_TOKEN || "",
// });

// const createPaymentLink = async (req, res) => {
//   const arrayProductos = req.body;

//   const newArray = arrayProductos.map((i) => {
//     return {
//       title: i.name,
//       unit_price: i.price,
//       quantity: i.quantity,
//       currency_id: "ARS",
//     };
//   });

//   try {
//     const preference = {
//       items: newArray,

//       back_urls: {
//         success: "http://localhost:3000/successPayment",
//         failure: "http://localhost:3000/failurePayment",
//         pending: "http://localhost:3000/pendingPayment",
//       },

//       notification_url:"https://foodexpress-back-production.up.railway.app/webhook",

//       // notification_url:"https://1560-2001-1388-35a3-fed0-a7dd-773-887f-a99d.ngrok.io/webhook",
//       // auto_return: "approved",
//     };

//     const response = await mercadopago.preferences.create(preference);
//     console.log(response);
//     res.status(200).json(response.response.init_point);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = createPaymentLink;
