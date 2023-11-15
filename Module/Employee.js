const { DataTypes } = require('sequelize');
const dbConnect = require('../db');

const Employee = dbConnect.define('Employee', {
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    mobileNumber: {
        type: DataTypes.INTEGER
    },
    address: {
        type: DataTypes.STRING
    },
    dateOfBirth: {
        type: DataTypes.STRING
    },
    dateOfJoining: {
        type: DataTypes.STRING
    },
    bloodGroup: {
        type: DataTypes.STRING
    },
    emergencyContactNumber: {
        type: DataTypes.INTEGER
    },
    numberofYearExperience: {
        type: DataTypes.INTEGER
    },
    qualification: {
        type: DataTypes.STRING
    }
});

module.exports = Employee;
