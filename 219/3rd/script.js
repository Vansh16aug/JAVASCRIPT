const n = document.querySelector("#name").value;
const email = document.querySelector("#email").value;
const pass = document.querySelector("#password").value;

if (n === "") {
    alert("Please enter your name");
} else if (email === "") {
    alert("Please enter your email");
} else if (pass === "") {
    alert("Please enter your password");
} else {
    // Form is valid, you can proceed with further actions
}
