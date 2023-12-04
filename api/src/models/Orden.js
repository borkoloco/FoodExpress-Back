const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define(
      "orden",
      {
        idOrden: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          idDireccion: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          idEnvio: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
          },
          metodoDeCompra: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          fechaCompra: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
          },
      },
      { timestamps: false }
    );
  };