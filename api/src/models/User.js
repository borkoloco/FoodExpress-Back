const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nameUser: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      idRole: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      isLogged: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isBanned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      authProvider: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      idAuthProvider: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
