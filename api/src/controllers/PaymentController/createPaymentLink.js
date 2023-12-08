const mercadopago = require("mercadopago");
const dotenv = require("dotenv");
dotenv.config();

mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN || "",
});

const createPaymentLink = async (req, res) => {
  const arrayProductos = req.body;

  const newArray = arrayProductos.map((i) => {
    return {
      title: i.name,
      unit_price: i.price,
      quantity: i.quantity,
      currency_id: "ARS",
    };
  });

  try {
    const preference = {
      items: newArray,

      back_urls: {
        success: "http://localhost:3000/successPayment",
        failure: "http://localhost:3000/failurePayment",
        pending: "http://localhost:3000/pendingPayment",
      },

      notification_url:"https://foodexpress-back-production.up.railway.app/webhook",
      
      // notification_url:"https://1560-2001-1388-35a3-fed0-a7dd-773-887f-a99d.ngrok.io/webhook",
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




