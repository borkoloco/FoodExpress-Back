const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define(
      "carrito",
      {
        idCarrito: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          idMenu: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          precio: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
          },
          subtotal: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
          },
      },
      { timestamps: false }
    );
  };