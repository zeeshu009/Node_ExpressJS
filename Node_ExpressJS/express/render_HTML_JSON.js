const express = require('express')


const app = express()

app.get('',(req,res)=>{

    res.send(`
        <input type="text" placeholder="Enter your name"/>

        <a href="/contact">Go to Contact Page ></a>

        <a href="/about">Go to about Page ></a>
        
        `)

    
})

app.get('/contact',(req,res)=>{

    res.send(`
       
        <h1>Hello from epxress JS </h2>
        
        `)  
})

app.get('/about',(req,res)=>{

    res.send([
        {name:"zeeshu",adress:"ABC"},
        {name:"zee",adress:"ABC"}
    ])
        
})






app.listen(2000)