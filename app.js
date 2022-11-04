const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingHeader = document.querySelector("#greeting");
// const logoutButton = document.querySelector("#logoutBtn");
const logoutForm = document.querySelector("#logout-form");
const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

/****************************
 * Log in
 ****************************/ 
const paintGreetings = (username) => {
    greetingHeader.innerText = `Hello ${username}~!!`;
    greetingHeader.classList.remove(HIDDEN_CLASSNAME);
}

const onLoginSubmit = (event) => {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
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
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
}

/****************************
 * Log out
 ****************************/ 
const onLogoutSubmit = () => {
    localStorage.removeItem(USERNAME_KEY);
}

logoutForm.addEventListener("submit", onLogoutSubmit);
