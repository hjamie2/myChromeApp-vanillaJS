const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const onTodoFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);
}

const onDeleteBtnClick = (event) => {
    const li = event.target.parentElement;
    li.remove();
}

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

todoForm.addEventListener("submit", onTodoFormSubmit);