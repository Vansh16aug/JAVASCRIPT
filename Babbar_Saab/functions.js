function sum(a,b){
    // console.log(arguments);
    return a+b;
}

// console.log(sum(1,2));   3
// console.log(sum(1));     NaN
// console.log(sum());      NaN
// console.log(sum(1,2,3,4,5));    3


// now when we pass more parameters then object is created named arguements in which all the callee parameters are stored , if we want a dynamic type of function we can do smthng like this

function sum() {
    let total=0;
    for(let value of arguments)
        total=total+value;
    return total;
}

let ans = sum(1,2);
console.log(ans);