function x(){
    var a=7;
    // function y(){
    //     console.log(a);
    // }
    // return y;
    return function y() {
      console.log(a);
    }

}
//here comes the closures into picture , z stores the full function x along with its lexical enviroment .
var z=x();
console.log(z);
z();


// function end(){
//     let e="hello";
//     function bharwala(){
//         var d=100;
//         function outest(){   
//             var c=20;
//             function outer(b){
                
//                 function inner(){
//                     console.log(a,b,c,d,e);
//                 }
//                 let a=10;
//                 return inner;
//             }
//             return outer;
//         }
//         return outest;
//     }
//     return bharwala;
// }
// var close=end()()()("hello");
// close() ;

// function counter(){
//     var count =0;
//     return function incrementCounter(){
//         count++;
//         console.log(count);
//     }
// }
// var counter1=counter();
// counter1();
// counter1();
// counter1();

// var counter2=counter()
// counter2();
// counter2();

// counter1();