const express = require('express')
const connectDB = require('./db/db_connection')
const Employee = require('./models/EmployeeModel')

const app = express()

connectDB()

//middleware 
// convert json data into javascript object so we can insert data into mongodb

app.use(express.json()) // this line is must

//patch api -> it is used when we want to update some fields not all the fields
app.patch('/employees/:id', async(req,res)=>{

    try{

        const empId = req.params.id;
        const updateData = req.body;


        const updateEmp = await Employee.findByIdAndUpdate(
            empId,
            updateData,
            // be default it does not show updated data so we include new :true
            {new:true}
        )

        if(!updateEmp)
            return res.status(404).json({msg: "Employee not found"})

        res.json(updateEmp);



    }
    catch(err){
        console.log("Error updating data ",err)
        res.status(500).send("Sever Error ")
    }
})

app.listen(2000,()=>{
    console.log("Server is running on port Number 2000")
})

