const express = require('express')


const app = express()


app.set('view engine','ejs')

app.get('/Welcome',(req,res)=>{
    const empInfo = {
        name : 'zeeshan',
        id : '12'

    }
    res.render('welcome',{empInfo})
})

app.listen(3000)


