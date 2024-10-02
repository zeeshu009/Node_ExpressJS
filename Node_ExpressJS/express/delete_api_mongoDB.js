const express = require('express')
const connectDB = require('./db/db_connection')
const Employee = require('./models/EmployeeModel')

const app = express()

connectDB()

//middleware 
// convert json data into javascript object so we can insert data into mongodb

app.use(express.json()) // this line is must

//delete api -> delete employee from mongoDB
app.delete('/employees/:id', async(req,res)=>{

    try{

        const empId = req.params.id;
        const employetobedeleted = await Employee.findByIdAndDelete(empId)
        if(!employetobedeleted)
            return res.status(404).json({msg: "Employee not found"})

        res.json({msg:"Employee Successfully deleted"});


    }
    catch(err){
        console.log("Error updating data ",err)
        res.status(500).send("Sever Error ")
    }
})

app.listen(2000,()=>{
    console.log("Server is running on port Number 2000")
})

