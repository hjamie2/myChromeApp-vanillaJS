const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";

let todosArray = [];

const paintTodo = (todoItem) => {
    const liElement = document.createElement("li");
    const spanElement = document.createElement("span");
    spanElement.innerText = todoItem;
    const buttonElement = document.createElement("button");
    buttonElement.innerText = "❌";
    buttonElement.addEventListener("click", onDeleteBtnClick);
    liElement.append(spanElement, buttonElement);
    todoList.append(liElement);
}

const onDeleteBtnClick = (event) => {
    const li = event.target.parentElement;
    li.remove();
}

const saveTodos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todosArray));
}

const onTodoFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = todoInput.value;
    todosArray.push(newTodo);
    todoInput.value = "";
    paintTodo(newTodo);
    saveTodos();
}

todoForm.addEventListener("submit", onTodoFormSubmit);

/*********************************
 * Load saved todos on page as list
 *********************************/
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
    const parsedSavedTodos = JSON.parse(savedTodos);
    todosArray = parsedSavedTodos;
    parsedSavedTodos.forEach(paintTodo);
}