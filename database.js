
const { Sequelize, DataTypes } = require('sequelize');

// Conexión a la base de datos
const sequelize = new Sequelize('forodb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
  });


  module.exports = {
        sequelize,
        Sequelize,
        DataTypes
  }