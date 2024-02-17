let a = 10;
var b = 20;
const c = 30;

const add = a + b;
const sub = a - b;
const div = a / b;
const mul = a * b;

let newAdd = document.createElement("h3");
newAdd.textContent = add;
document.body.appendChild(newAdd);

let newSub = document.createElement("h3");
newSub.textContent = sub;
document.body.appendChild(newSub);

let newDiv = document.createElement("h3");
newDiv.textContent = div;
document.body.appendChild(newDiv);

let newMul = document.createElement("h3");
newMul.textContent = mul;
document.body.appendChild(newMul);
