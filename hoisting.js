getName();

// with the start of this program but before the execution of first line all the variables are declared as undefined
var x = 7;

// this func can be accesed all over the program and only in this whole code is assigned 
function getName() {
  console.log("Namaste Javascript");
}

// if there is any arrow function then it is considered as a variable and before exceution of the first line undefined is assigned to it
var getName2=() =>{
    console.log("Namaste javascript");
}

// another way to declare a function but in this way also this function will act as a variable and undefined will be assigned
var getName3 = function(){
    console.log("Namaste javascript");
}
console.log(x);



var x=7;
function getName(){
    console.log("Namaste javascript");
}
getName();
console.log(x) ;
console.log(getName) ;


//CallStack of the upper program 


// line30
// line29
// line26 (getName) -> gets deleted after execution
// GlobalExecutionContext