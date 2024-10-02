const express = require('express')
const route = express.Router()

const app = express()

//middleware
// req and response ko handle krta hy middleware i.e en k beach ek function hota ju handle krta req and response
// why we use next parameter because agr hum use nhi krege to page wohi stuck ho jaega or reload continue hota rahe ga

const reqFilter = (req,res,next)=>{

    const salary = req.query.salary

    if(!salary)
        res.send("No salary provided so you can not access this page")
    else if(salary<40000)
        res.send("salary is below 40000 so you can not access this page")
    else
    next()
}




route.get('',(req,res)=>{
    res.send("Your salary is equal to or greater than 40000 so you can access this Home Page")
})

app.get('/about',(req,res)=>{
    res.send("this is about page")
})
app.use('/',route)
app.listen(2000)
