const http = require('http')

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type': 'text/html'})
//     res.write("<h2>Hello From server JS</h2>")
//     res.end()
// }).listen(3000)




//pass function as paramters

http.createServer(sayHello).listen(3000)

//Arrow Function
const sayHello = (req,res) =>{

    res.write("Hello")
    res.end()
}