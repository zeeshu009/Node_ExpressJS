const fs = require('fs')
const path = require('path')
//get the folder path
const myCRUD = path.join(__dirname,'CRUD')

const myPath = `${myCRUD}/crud.txt`

//create

fs.writeFileSync(myPath,'CRUD')

//Read

fs.readFile(myPath,'utf-8',(err,file)=>{
    console.log(file)
})

//update

fs.appendFile(myPath," In Node Js",(err)=>{
   if(!err){
    console.log("File is Updated Successfully")
   }
})


//delete

fs.unlinkSync(myPath)


//rename

fs.rename(myPath,`${myCRUD}/rename.txt`,(err)=>{
    if(!err){
        console.log("File is rename Successfully")
    }
})

