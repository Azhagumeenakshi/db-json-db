const Sequelize = require('sequelize')
var DataTypes = require("sequelize").DataTypes;

const sequelize = require('../database')
 
var initModels = require("./init-models");

var models = initModels(sequelize);


module.exports = models