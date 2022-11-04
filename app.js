const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingHeader = document.querySelector("#greeting");
const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

const paintGreetings = (username) => {
    greetingHeader.innerText = `Hello ${username}~!!`;
    greetingHeader.classList.remove(HIDDEN_CLASSNAME);
}

const onLoginSubmit = (event) => {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

/****************************
 * Remember username after initial submission
 ****************************/ 
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show login form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // loginForm.addEventListener("submit", onLoginSubmit); // is this necessary tho?
} else {
    // show greetings
    paintGreetings(savedUsername);
}