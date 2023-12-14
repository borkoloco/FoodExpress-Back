const nodemailer = require("nodemailer")


async function sendBill(newArray,req, res) {
  console.log("hola", newArray)
    const config = {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'food.expresshenry@gmail.com',
            pass: 'tnnb gpjo tqzh tmpl'
        }
    };

    const total = newArray.reduce((acc, item) => acc + item.unit_price, 0);
    const htmlBody = `
    <html>
    <head>
    <style>
    .plan-card {
      background: #fff;
      width: 15rem;
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 10px;
      padding-bottom: 20px;
      border-radius: 10px;
      border-bottom: 4px solid #000446;
      box-shadow: 0 6px 30px rgba(207, 212, 222, 0.3);
      font-family: "Poppins", sans-serif;
    }
    
    .plan-card h2 {
      margin-bottom: 15px;
      font-size: 27px;
      font-weight: 600;
    }
    
    .plan-card h2 span {
      display: block;
      margin-top: -4px;
      color: #000000;
      font-size: 12px;
      font-weight: 400;
    }
    
    .etiquet-price {
      position: relative;
      background: #fdbd4a;
      width: 14.46rem;
      margin-left: -0.65rem;
      padding: .2rem 1.2rem;
      border-radius: 5px 0 0 5px;
      color: #000000
    }
    
    .etiquet-price p {
      margin: 0;
      padding-top: .4rem;
      display: flex;
      font-size: 1.9rem;
      font-weight: 500;
      color: #000000
    }
    
    .etiquet-price p:before {
      content: "$";
      margin-right: 5px;
      font-size: 15px;
      font-weight: 300;
      color: #000000
    }
    
    .etiquet-price p:after {
      content: "/ Total";
      margin-left: 5px;
      font-size: 15px;
      font-weight: 300;
      color: #000000
    }
    
    
    .benefits-list {
      margin-top: 16px;
    }
    
    .benefits-list ul {
      padding: 0;
      font-size: 14px;
    }
    
    .benefits-list ul li {
      color: #4d4d4d;
      list-style: none;
      margin-bottom: .2rem;
      display: flex;
      align-items: center;
      gap: .5rem;
    }
    
    .benefits-list ul li svg {
      width: .9rem;
      fill: currentColor;
    }
    
    .benefits-list ul li span {
      font-weight: 300;
    }
    </style>
</head>
<div class="plan-card">
    <h2>Tu recibo de compra<span>Food Express</span></h2>
    <div class="etiquet-price">
        <p>$${total} /Total</p>
        <div></div>
    </div>
    <div class="benefits-list">
        <ul>
          ${generateItemsListHtml(newArray)}
        </ul>
    </div>
    <span>Gracias acá va el nombre por elegir nuestro servicio.</span>
    </div>
  </html>
`;


function generateItemsListHtml(items) {
  return items.map(item => `
    <li>
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
      </svg>
      Descripcion:${item.description}<br>
      Cantidad:${item.quantity}<br>
      Precio P/U:${item.unit_price}
    </li>
  `).join('');
};

    const mensaje = {
        from: 'food.expresshenry@gmail.com', 
        to: 'axelgo.sosa@gmail.com',
        subject: `Hola Axel, tu recibo de compra desde la pagina de Food Express`,
        text: 'Gracias por tu compra',
        html: htmlBody
    };

    try {
        const transport = nodemailer.createTransport(config);
        const info = await transport.sendMail(mensaje);
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
    }
};


module.exports = sendBill;