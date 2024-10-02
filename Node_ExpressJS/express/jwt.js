
const express = require('express')

const jwt = require('jsonwebtoken')

const app = express()

const secretKey = "jskdlfj123"

app.post('/login',(req,res)=>{
    const user = {
        username : "zeeshu",
        email : "zeeshu9@gamil.com"
    }
    const token = jwt.sign({user},secretKey,{expiresIn : '5000s'})
    res.json({token})
})

const verifyToken = (req,res,next) =>{
    const bearerHeader = req.headers['authorization']
    if(bearerHeader){
        const token = bearerHeader.split(" ")[1]
        req.token = token
        next()
    }
    else{
        res.status(403).json({msg : "Token is not valid "})
    }
}

app.post('/protected',verifyToken,(req,res)=>{

    jwt.verify(req.token,secretKey,(err,authData)=>{
        if(err){
            res.status(403).json({msg : "Unathuroized user"})
        }
        else{
            res.json({
                message : "you are an authorized user",
                authData
            })

        }
    })


   
})


app.listen(2000,()=>{
    console.log("Server is running on port number 2000")
})