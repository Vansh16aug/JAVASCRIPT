                /*        😱  DATA TYPE   😱             */



// console.log(5+20);



                        // 🤯Assignment operator(=)

// var x=5;
// var y=5;

// console.log("Is both the x and y are equal :"+ x==y);

// console.log(`Is both the x and y are equal : ${x==y}`);


                        //🤯Arithmetic operator(+-/*)

// console.log(3+3);
// console.log(3*3);
// console.log(3/3);
// console.log(3-3);
// console.log(3%3);

                        //🤯Postfix increement operator:
                        //it increases the number in last
// var num=15;
// var newNum=num++;
// console.log(num);
// console.log(newNum);

/*
var num=15;
num++;
console.log(num);
*/
                        //🤯Prefix increment operator:
                        //it increses the number first
// var num=15;
// var newNum = ++num;
// console.log(num);
// console.log(newNum);

                        //🤯same in case of decrement x-- and --x


                        //🤯Comparison
//equal(=)
// var x=30;
// var y=10;
// console.log(x==y);

//not equal(!=)
// var x=30;
// var y=10;
// console.log(x!=y);

//Greater than(>)
// var x=30;
// var y=10;
// console.log(x>y);

//Less than(<)
// var x=30;
// var y=10;
// console.log(x<y);
             
//greater than or equal to(>=)
// var x=30;
// var y=10;
// console.log(x>=y);

//Less than or equal to(<=)
// var x=30;
// var y=10;
// console.log(x<=y);

                        //🤯 Logical Operator


// And (&&) : all the conditions should be true
// var a=30;
// var b=-20;
// console.log(a>b && b>0);

// Or (||) : if any of the condition is true then it shows true
// var a=30;
// var b=-20;
// console.log(a>b || b<0);

// Not (!) : It changes the truth value 
// var a=30;
// var b=-20;
// console.log(!(a>b && b>0));


                        //🤯 String/concatination Operator

// console.log("HELLO "+"WORLD")


                    /*         🤯 CHALLENGE 🤯              */
// sol1
// console.log(3**3);

// sol2
// console.log(5+"kumar");

// sol3 : program to swap numbers
// var x=3;
// var y=5;
// var a=x;
// var x=y;
// var y=a;
// console.log(x);
// console.log(y);

//sol4 :  program to swap numbers without third variables
// var a=5;
// var b=10;
// a=a+b;
// b=a-b; 
// a=a-b; 
// console.log(a);
// console.log(b);


                    /*       🤯  Interview ques 🤯           */

// What is the difference btw == vs ===?

// == only checks the value not datatype.
// whereas === checks values as well as datatype.

var x=5;
var y="5";
console.log(typeof(x));
console.log(typeof(y));
console.log(x==y);
console.log(x===y);