const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    database: 'moodle',
    username: 'root',
    password: ''
  });

  module.exports = sequelize;
  