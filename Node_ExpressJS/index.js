// global core module -> we can directly access it i.e without import any thing like console

console.log("Hello I am core global module")

//non-global core module -> we must import module in order to used it like for file sysem we import fs 


const myFile = require('fs')

myFile.writeFileSync("new.txt","This is non global core module ") // create new file and write txt


//external core module 
// first we have to install package like express js to used its modules 
