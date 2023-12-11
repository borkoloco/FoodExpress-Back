require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

const sequelize = new Sequelize(
  // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/menu`,
  `${DB_DEPLOY}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //   },
    // },
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const {
  Menu,
  Tipo,
  Especialidad,
  User,
  Role,
  Review,
  Status,
  Carrito,
  Orden,
  Direccion,
  Envio,
} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Menu.belongsTo(Tipo, { foreignKey: "idTipoMenu", as: "typeMenu" });

Menu.belongsTo(Especialidad, {
  foreignKey: "idEspecialidad",
  as: "specialtyMenu",
});

User.belongsTo(Role, {
  foreignKey: "idRole",
  as: "roleUser",
});

User.belongsToMany(Menu, {
  through: "orden",
  as: "userOrdenMenu",
  foreignKey: "idUser", // Especifica el nombre de la clave foránea en la tabla intermedia
  otherKey: "idMenu", // Especifica el nombre de la otra clave foránea en la tabla intermedia
});

Menu.belongsToMany(User, {
  through: "orden",
  as: "menuOrdenUser",
  foreignKey: "idMenu", // Especifica el nombre de la clave foránea en la tabla intermedia
  otherKey: "idUser", // Especifica el nombre de la otra clave foránea en la tabla intermedia
});

// User.belongsToMany(Menu, { through: "orden" });
// Menu.belongsToMany(User, { through: "orden" });

Review.belongsTo(Menu, {
  foreignKey: "idMenu",
  as: "reviewMenu",
});

Review.belongsTo(User, {
  foreignKey: "idUser",
  as: "reviewUser",
});
Review.belongsTo(Status, {
  foreignKey: "idStatus",
  as: "reviewStatus",
});

//invertir ...has many reviews

Carrito.belongsTo(User, { foreignKey: "idUser", as: "user" });
Carrito.belongsTo(Menu, { foreignKey: "idMenu", as: "menu" });

// Carrito.belongsTo(User, { foreignKey: 'idUser' });
// Carrito.belongsTo(Menu, { foreignKey: 'idMenu' });

// Orden.belongsTo(User, { foreignKey: "idUser", as: "user" });
// Orden.belongsTo(Menu, { foreignKey: "idMenu", as: "menu" });

// Orden.belongsToMany(Menu, { through: OrdenMenu, foreignKey: 'idOrden' });
// Menu.belongsToMany(Orden, { through: OrdenMenu, foreignKey: 'idMenu' });

// Orden.belongsTo(Direccion, { foreignKey: "idDireccion", as: "direccion" });

// Envio.belongsTo(Orden, { foreignKey: "idEnvio", as: "envio" });

// User.belongsTo(Direccion, { foreignKey: "idDireccion", as: "direccion" });

// Definir la relación de uno a uno con la tabla Direccion
Direccion.hasOne(User, { foreignKey: "idDireccion" });

// Orden.belongsTo(User, { foreignKey: 'idUser' });
// Orden.belongsToMany(Menu, { through: 'OrdenMenu', foreignKey: 'idOrden' });

// User.hasMany(Carrito, { foreignKey: 'idUser' });
// User.hasMany(Orden, { foreignKey: 'idUser' });

//los de orden estan al reves?

//envio debe tener id orden?

// Envio.belongsTo(Direccion, { foreignKey: "idDireccion", as: "direccion" });
//este no va

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
