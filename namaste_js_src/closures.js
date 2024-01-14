// function x(){
//     var a=7;
//     // function y(){
//     //     console.log(a);
//     // }
//     // return y;
//     return function y() {
//       console.log(a);
//     }

// }

// //here comes the closures into picture , z stores the full function x along with its lexical enviroment .

// var z=x();
// console.log(z);
// z();


// function a(){
//     var i=1;
//     for(var i=1;i<=5;i++){
//         setTimeout(function (){
//             console.log(i);
//         },i*1000);
//     }
//     console.log("Namaste Javascript");
// }
// a();

// if we'll use var , javascript will not wait for anyone and will execute remaining code and due to it all the iteration of the for loop will be done and i value becomes 6 .

// whereas if we use let , it has its own block scope , so after every iteration it stores it differently

// but if we have to do it using var only , so what we need to do -> we can form a closure , by enclosing the settimeout func inside a function and we have to supply/pass the value of i with every iteration as a new copy of i .

function a() {
    var i = 1;
    for (var i = 1; i <= 5; i++) {
        function close(i){
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
  console.log("Namaste Javascript");
}
a();
