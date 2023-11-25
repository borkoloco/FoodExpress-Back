const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: false, alter: true }).then(() => {
  server.listen(port, () => {
    console.log("Server listening..."); // eslint-disable-line no-console
  });
});
