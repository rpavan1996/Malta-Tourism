const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("tourism_malta","root","",{dialect:"mysql", host:"localhost"});

module.exports = sequelize;