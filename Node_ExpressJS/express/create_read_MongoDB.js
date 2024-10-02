const express = require('express')
const connectDB = require('./db/db_connection')
const Employee = require('./models/EmployeeModel')

const app = express()

connectDB()

 const addEmployee = async () =>{
    await Employee.create({
        name : "zeeshan",
        email : "zeeshu009@gmail.com",
        position : "Software Engineer",
        department : "SE"
    })
}

addEmployee()

const getEmployee = async () => {
    const emp = await Employee.find()
    console.log(emp)
}

getEmployee()

app.listen(3000,() =>{
    console.log("Server is running on port no 2000")
})