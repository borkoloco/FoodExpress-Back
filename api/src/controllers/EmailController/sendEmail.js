const nodemailer = require("nodemailer")


async function sendEmail(req, res) {
    const { name, email, comment } = req.body;
    const config = {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'food.expresshenry@gmail.com',
            pass: 'tnnb gpjo tqzh tmpl'
        }
    };

    const mensaje = {
        from: email, 
        to: 'food.expresshenry@gmail.com',
        subject: 'Comentario desde la pagina de: ' + name +" " + email,
        text: comment
    };

    try {
        const transport = nodemailer.createTransport(config);
        const info = await transport.sendMail(mensaje);
        console.log('Correo electrónico enviado:', info);
        res.status(200).json({ message: 'Correo electrónico enviado exitosamente.' });
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        res.status(500).json({ error: 'Error al enviar el correo electrónico.' });
    }
};


module.exports = sendEmail;