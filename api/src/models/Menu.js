const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("menu", {
    idMenu: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  });


};
