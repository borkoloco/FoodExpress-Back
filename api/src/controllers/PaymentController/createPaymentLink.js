const { Menu } = require("../../db");
const { MercadoPagoConfig, Preference } = require("mercadopago");

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_KEY,
  options: { timeout: 5000 },
});

const preference = new Preference(client);

async function createPaymentLink(id, title, amount, quantity) {
  try {
    const paymentReq = await preference.create({
      body: {
        items: [
          {
            id,
            title,
            quantity,
            unit_price: amount,
          },
        ],
      },
      back_urls: {
        success: "http://localhost:3001/successPayment",
        failure: "http://localhost:3001/failurePayment",
        pending: "http://localhost:3001/pendingPayment",
      },
      // notification_url: "http://localhost:3001/webhook",
    });
    return paymentReq;
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  const paymentLink = await createPaymentLink(1234, "menu", 100, 3);
  console.log(paymentLink);
})();

module.exports = createPaymentLink;
