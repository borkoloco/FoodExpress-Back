const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "tipo",
    {
      idTipoMenu: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nameTipoMenu: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    { timestamps: false }
  );
};
