// console.log(a);
let a;

// let a=30;    syntaxError
var b = 100;

a=10;
console.log(a);


const c=20;
console.log(c);


// const d;    //SyntaxError -> Missing intializer in const declaration

// console.log(d);

const e=22;

e=56;          // TypeError -> assignment to constant variable
console.log(e);

                                    //LET

// In the case of let data type hoisting is done but in differrent way, before the code is executed the memory is allocated but not in global space in script space 

// but it throws RefrenceError -> can access the value before initialising 

// And the time between the hoisting and initialization of value is known as TemporalDeadZone .  All lines of code before the initialising of variable is TemporalDeadZone .

// means -> window.b =100 , window.a= undefined and this.b=100 , this.a= undefined 

// window = this = global space and let and const reserves whole diff space .


                                    //CONST

// const cant be declared first and initialized later 
