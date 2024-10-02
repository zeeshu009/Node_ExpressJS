const express = require('express')

const app = express()

app.get('',(req,res)=>{

    const name = req.query.name;

    if(name)
        res.send(`welcome ${name}`)
    else
       res.send(`welcome to express js`)

})

app.listen(2000,()=>{
    console.log("Server is running on port 2000")
})