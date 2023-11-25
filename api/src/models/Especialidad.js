const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "especialidad",
    {
      idEspecialidad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      NameEspecialidad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
