const { Sequelize } = require('sequelize');

const dbConnect = new Sequelize('SMS', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = dbConnect;