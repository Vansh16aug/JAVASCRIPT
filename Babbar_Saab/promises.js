


let meraPromise= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("hihihihihi");
    },5000)
    // resolve(2005);         // status changes to fulfilled
    reject(new Error("Bc Error kitho aya"));        // status changes to rejected (catch it)
});

meraPromise.then((value)=>{console.log(value),(error)=>{console.log("Error aagiiiiiiiiiii penchoooooo")};})