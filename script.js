let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title1 = document.getElementById("title1");
let form = document.getElementById("form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");


signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title1.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}
signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title1.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}