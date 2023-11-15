
const { DataTypes } = require('sequelize');
const Employee = require('../Module/Employee');
var dbConnect = require('../db');

var express = require('express');
const { json } = require('body-parser');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 8080;


app.post('/ems/create', async (req, res) => {

    try {
        const employeeData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            mobileNumer: req.body.mobileNumer,
            address: req.body.address,
            dateOfBirth: req.body.dataOfBirth,
            dateOfJoining: req.body.dateOfJoining,
            bloodGroup: req.body.bloodGroup,
            emergencyContactNumber: req.body.emergencyContactNumber,
            numberofYearExperience: req.body.numberofYearExperience,
            qualification: req.body.qualification,
        }

        const employee = await Employee.create(employeeData);
        console.log('Employee Details  inserted successfully');
        res.status(200).json({ message: 'Data inserted successfully' });
        res.json(employee);

    } catch (error) {
        console.error('Error inserting data', error);
        res.status(500).json({ error: 'An error occurred while inserting data' });
    }
});

app.get('/ems/employee', async(req, res) => {
    try {
        const employees = await Employee.findAll();
        res.status(200).json(employees);
      } catch (error) {
        console.error('Error retrieving employee details', error);
        res.status(500).json({ error: 'An error occurred while retrieving employee details' });
      }
});

app.post('/ems/employee/delete/:id', async (req, res) => {
    try {
        const employeeId = req.params.id;
        const employee = await Employee.findByPk(employeeId);

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        const deletedEmployee = await employee.destroy();
        res.status(200), json({ message: 'Employee deleted sucessfully...'.charAt(employeeId)})
    } catch (error) {
        console.error('Error deleting employee', error);
        return res.status(500).json({ error: 'An error occurred while deleting employee' });
    }
});

app.get('/ems/employee/:id', async(req, res) => {
    try{
        const employeeId = req.params.id;
        const employee = await Employee.findByPk(employeeId);
        
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error){
        console.log('Error retrieving employee details', error);
        return res.status(404).json({ error: 'Employee not found'});
    }
})

app.listen(port, () => {
    console.log("server started....")
});