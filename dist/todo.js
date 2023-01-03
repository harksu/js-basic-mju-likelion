import { gettodoItem } from "./store/data/getTodo.js";
import { addTodo } from "./todos/addTodo.js";
const toDoForm = document.querySelector(".toDoListForm");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".toDoListItem");
const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todoInput.value, toDoList);
    todoInput.value = "";
};
const init = () => {
    gettodoItem(toDoList);
    toDoForm.addEventListener("submit", handleSubmit);
};
init();
