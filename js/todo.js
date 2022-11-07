const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const onTodoFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);
}

const paintTodo = (todoItem) => {
    const liElement = document.createElement("li");
    const spanElement = document.createElement("span");
    liElement.append(spanElement);
    spanElement.innerText = todoItem;
    todoList.appendChild(liElement);
}

todoForm.addEventListener("submit", onTodoFormSubmit);