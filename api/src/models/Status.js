const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "status",
    {
      idStatus: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      statusDescription: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    { timestamps: false }
  );
};
