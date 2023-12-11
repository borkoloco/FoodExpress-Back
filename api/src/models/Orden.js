const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "orden",
    {
      idOrden: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING, // O el tipo de dato adecuado
        allowNull: true,
      },
      fecha_de_compra: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      metodo_de_compra: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nota: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};

// const { DataTypes } = require("sequelize");
// module.exports = (sequelize) => {
//   sequelize.define(
//     "orden",
//     {
//       idOrden: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       idUser: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       // idDireccion: {
//       //   type: DataTypes.INTEGER,
//       //   allowNull: true,
//       // },
//       idEnvio: {
//         type: DataTypes.INTEGER,
//         allowNull: true,
//       },
//       items: {
//         type: DataTypes.JSONB,
//         allowNull: true,
//       },
//       total: {
//         type: DataTypes.DECIMAL(10, 2),
//         allowNull: true,
//       },
//       metodoDeCompra: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       // status: {
//       //   type: DataTypes.ENUM(
//       //     "Pending",
//       //     "Aprobada",
//       //     "Rechazada",
//       //   ),
//       //   defaultValue: "Pending",
//       // },
//       fechaCompra: {
//         type: DataTypes.DATE,
//         defaultValue: DataTypes.NOW,
//       },
//     },
//     { timestamps: false }
//   );
// };
