const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "envio",
    {
      idEnvio: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      costoEnvio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      statusEnvio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idDireccion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
