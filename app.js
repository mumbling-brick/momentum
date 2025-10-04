const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreeting();
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

function paintGreeting() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show greeting
    paintGreeting();
}