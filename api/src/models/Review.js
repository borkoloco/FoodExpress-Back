const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "review",
    {
      idReview: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idMenu: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rate: {
        type: DataTypes.INTEGER,
      },
      comment: {
        type: DataTypes.TEXT,
      },
      date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
      // status: {
      //   type: DataTypes.ENUM("Aprobado", "Rechazado", "Pendiente"),
      //   defaultValue: "Pendiente",
      // },
    },
    {
      timestamps: false,
    }
  );
};
