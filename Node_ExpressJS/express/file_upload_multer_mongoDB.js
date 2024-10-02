const express = require('express')
const connectDB = require('./db/db_connection')
const File = require('./models/fileModel')
const multer = require('multer')

const app = express()

connectDB()

const fileUpload = multer({
    storage : multer.diskStorage({
    destination : function(req,file,callback){
        callback(null,'uploads')
    },
    filename : function(req,file,callback)
    {
        const uniqueName = file.fieldname + "-" + Date.now() + ".png"
        callback(null,uniqueName)
    }
})
}).single("my_file")


app.post('/fileUpload',fileUpload,(req,res)=>{
    if(!req.file)
        return res.send("No file  Uploaded")

    const newFile = new File({
        filePath : req.file.path
    })
    
    newFile.save().then(()=> res.send("file uploaded successfully ")).catch((errr)=>{
        res.send("Error uploading file")
    })



})

app.listen(2000,()=>{
    console.log("sever is running on port no 2000")
})























