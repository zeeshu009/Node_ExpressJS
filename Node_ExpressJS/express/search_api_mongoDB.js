const express = require('express')
const connectDB = require('./db/db_connection')
const Employee = require('./models/EmployeeModel')

const app = express()

connectDB()

app.get('/employees/:value', async(req,res)=>{

    try{

        const searchValue = req.params.value;

        let result = await Employee.find({
            "$or" : [
                //for multiple value searching
                //$option for not use case sensivitive A and a are same in this case
                {"name": {$regex : searchValue,$options : "i"}},
                {"department": {$regex : searchValue,$options : "i"}}
            ]
    })

    res.send(result)
    }
    catch(err){
        console.log("Error updating data ",err)
        res.status(500).send("Sever Error ")
    }
})

app.listen(2000,()=>{
    console.log("Server is running on port Number 2000")
})

