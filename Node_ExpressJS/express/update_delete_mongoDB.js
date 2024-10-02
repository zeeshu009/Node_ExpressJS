const express = require('express')
const connectDB = require('./db/db_connection')
const Employee = require('./models/EmployeeModel')

const app = express()

connectDB()

 const updateEmployee = async (id,updatedData) =>{

    const result = await Employee.updateOne({_id:id},{$set:updatedData})

    console.log(

        result.nModified === 0 ? `No Updates for employee ${id}` : `Update Employee Data : ${result}`
    )
  
}

const deleteEmpolye = async (id) =>{
    await Employee.findByIdAndDelete(id)

    console.log(`Employee with id ${id} successfully deleted `)
}

const IdToBeUpdated = '66f8f6ecac8dd03879008828'
const dataToBeUpdated = {
    position : "Web Developer",
    department : "ID"
}

const IdTobeDeleted = "66f8f7aa240b4814bb0da943"

updateEmployee(
    IdToBeUpdated,
    dataToBeUpdated

)

deleteEmpolye(
    IdTobeDeleted
)


app.listen(3000,() =>{
    console.log("Server is running on port no 2000")
})