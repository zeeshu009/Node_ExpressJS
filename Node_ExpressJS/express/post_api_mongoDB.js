const express = require('express')
const connectDB = require('./db/db_connection')
const Employee = require('./models/EmployeeModel')

const app = express()

connectDB()

//middleware 
// convert json data into javascript object so we can insert data into mongodb

app.use(express.json()) // this line is must

//post api -> insert  data into mongoDB
app.post('/employees', async(req,res)=>{

    try{
        
        // this method know as object destructuring
        const {name,email,position,department} = req.body

        const newEmploye = new Employee({
            name,
            email,
            position,
            department
        })
        const employee = await newEmploye.save()

        res.json(employee);



    }
    catch(err){
        console.log("Error fatching data ",err)
        res.status(500).send("Sever Error ")
    }
})


app.listen(2000,()=>{
    console.log("Server is running on port Number 2000")
})

