let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title1 = document.getElementById("title1");
let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');

function validateName() {
    var name = document.getElementById('name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if ((name.length > 0) && (name.length < 5)) {
        nameError.innerHTML = 'Name must be at least 5 characters long';
        return false;
    }
    nameError.innerHTML = '';
    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '';
    return true;
}

function validatePassword() {
    var password = document.getElementById('password').value;
    if (password.length == 0) {
        passwordError.innerHTML = 'Password is required';
        return false;
    }
    if ((password.length > 0) && (password.length < 8)) {
        passwordError.innerHTML = 'Password must be at least 8 characters long';
        return false;
    }
    passwordError.innerHTML = '';
    return true;
}

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

function notification1() {
    alert("You have signed up!");
}

function notification2() {
    alert("You have signed in!");
}