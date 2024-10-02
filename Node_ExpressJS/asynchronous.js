let firstName = "zeeshan"
let lastName = ""

//handle async problem using promise
const setLastName = new Promise((resolve,reject)=>{

    setTimeout(()=>{

      //  lastName = "Haider"
        resolve("Ali") // this will return Ali
    
    },2000)

})

// call setlastName either then or async await
// here i receive data which is string i.e Ali
setLastName.then((data)=>{

    lastName = data;

    console.log(firstName + " " + lastName)

})

const displayFullName = async () =>{
    lastName = await setLastName;
    console.log(firstName + " " + lastName)
}
displayFullName();



