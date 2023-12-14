const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "envio",
    {
      idEnvio: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      costoEnvio: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      statusEnvio: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      idDireccion: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
