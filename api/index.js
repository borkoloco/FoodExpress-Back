const server = require("./src/app.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.
conn.sync({ force: false, alter: true }).then(() => {
  server.listen(process.env.PORT || 3001, () => {
    console.log("Server listening..."); // eslint-disable-line no-console
  });
});

// "type": "module" en el json, para importar como en client, se agrega js a los archivos
//comentario de prueba