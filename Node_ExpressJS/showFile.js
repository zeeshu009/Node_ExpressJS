const fs = require('fs')
const path = require('path')


const myFolder = path.join(__dirname,'myfolder')


for(let i=0;i<2;i++){

    fs.writeFileSync(`${myFolder}/show${i}`,"This is file" + i)

}

fs.readdir(myFolder,(err,items)=>{

    items.forEach((file)=>{
        console.log(file)
    })
})