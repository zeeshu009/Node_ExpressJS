const express = require('express')
const connectDB = require('./db/db_connection')
const Employee = require('./models/EmployeeModel')

const app = express()

connectDB()

//get api -> fetch all data from mongoDB
app.get('/employees', async(req,res)=>{

    try{
        const employees = await Employee.find()
        res.json(employees)

    }
    catch(err){
        console.log("Error fatching data ",err)
        res.status(500).send("Sever Error ")
    }
})

//get api -> fetch Data by iD
app.get('/employees/:id', async(req,res)=>{

    try{
        const employee = await Employee.findById(req.params.id)
        if(!employee)
            return res.status(404).json({msg : "Employee not found"})
        res.json(employee)

    }
    catch(err){
        console.log("Error fatching data ",err)
        res.status(500).send("Sever Error ")
    }
})

app.listen(2000,()=>{
    console.log("Server is running on port Number 2000")
})

