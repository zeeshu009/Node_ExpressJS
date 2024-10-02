const express = require('express')

const app = express()

app.get('',(req,res)=>{

    res.send("Hello From Express JS")

})

app.listen(2000)