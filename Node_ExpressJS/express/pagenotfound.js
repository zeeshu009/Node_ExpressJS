const express = require('express')
const path = require('path')


const app = express()


const public = path.join(__dirname,'public')



app.get('/',(req,res) =>{
    res.sendFile(`${public}/index.html`)
})

app.get('/home',(req,res) =>{
    res.sendFile(`${public}/home.html`)
})

app.get('*',(req,res) =>{
    res.sendFile(`${public}/pagenotfound.html`)
})



app.listen(3000)