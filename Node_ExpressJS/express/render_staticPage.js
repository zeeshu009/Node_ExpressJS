const express = require('express')
const path = require('path')


const app = express()


const public = path.join(__dirname,'public')



app.use(express.static(public))



app.listen(2000)