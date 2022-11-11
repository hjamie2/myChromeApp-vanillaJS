const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";

let todosArray = [];

const paintTodo = (todoObj) => {
    const liElement = document.createElement("li");
    liElement.id = todoObj.id;
    const spanElement = document.createElement("span");
    spanElement.innerText = todoObj.text;
    const buttonElement = document.createElement("button");
    buttonElement.innerText = "❌";
    buttonElement.addEventListener("click", onDeleteBtnClick);
    liElement.append(spanElement, buttonElement);
    todoList.append(liElement);
}

const onDeleteBtnClick = (event) => {
    const li = event.target.parentElement;
    li.remove();
    todosArray = todosArray.filter((obj) => {
        return obj.id !== parseInt(li.id);
    });
    saveTodos();
}

const saveTodos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todosArray));
}

const onTodoFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    todosArray.push(newTodoObj);
    paintTodo(newTodoObj);
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