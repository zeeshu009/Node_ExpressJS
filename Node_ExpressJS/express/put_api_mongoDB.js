const express = require('express')
const connectDB = require('./db/db_connection')
const Employee = require('./models/EmployeeModel')

const app = express()

connectDB()

//middleware 
// convert json data into javascript object so we can insert data into mongodb

app.use(express.json()) // this line is must

//post api -> insert  data into mongoDB
app.put('/employee/:id', async(req,res)=>{

    try{

        const empId = req.params.id;
        
        // this method know as object destructuring
        const {name,email,position,department} = req.body

        const updateEmp = await Employee.findByIdAndUpdate(
            empId,
            {name,email,position,department},
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

