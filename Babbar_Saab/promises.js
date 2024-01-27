


// let meraPromise= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("hihihihihi");
//     },5000)
//     // resolve(2005);         // status changes to fulfilled
//     reject(new Error("Bc Error kitho aya"));        // status changes to rejected (catch it)
// });

// meraPromise.then((value)=>{console.log(value),(error)=>{console.log("Error aagiiiiiiiiiii penchoooooo")};})


// let waada1= new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("setTimeout1 started");
//     }, 2000);
//     resolve(true); 
// })

// let output=waada1.then(()=>{
//     let waada2=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("setTimeout2 started");
//         },3000);
//         resolve("waada2 resolved");
//     })
//     return waada2;
// })

// output.then((value)=>console.log(value));


// async function abc(){

//     let delhiMausam=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("DElhi is hot");
//         },2000)
//     });

//     let hydMausam = new Promise((resolve, reject)=> {
//       setTimeout(() => {
//         resolve("Hyderabad is hot");
//       }, 3000);
//     });

//     let dM=await delhiMausam;
//     let hM = await hydMausam;

//     return[dM,hM];
// }


