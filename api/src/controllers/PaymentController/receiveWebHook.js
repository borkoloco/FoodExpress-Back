const mercadopago = require("mercadopago");

const receiveWebHook = async (req, res) => {
    // console.log(req.query);
    const payment = req.query;
    try {
      if (payment.type === "payment") {
        const data = await mercadopago.payment.findById(payment["data.id"]);
        console.log(data);
        //Aqui podemos guardar en la Bd - mapear la data necesaria
      }
      res.status(204).send("webhook hizo su trabajo");
    } catch (error) {
      console.log(error);
      res.status(500).json({error:error.message});
    }
  };
  
  module.exports = receiveWebHook;
  