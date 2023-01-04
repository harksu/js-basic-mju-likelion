import { gettodoItem } from "./store/data/getTodo";
import { addTodo } from "./todos/addTodo";

const toDoForm  = document.querySelector(".toDoListForm") as Element;
const todoInput = toDoForm.querySelector("input") as HTMLInputElement;
const toDoList = document.querySelector(".toDoListItem") as Element;

const handleSubmit = (event:any) => {
  event.preventDefault();
  addTodo(todoInput.value, toDoList);
  todoInput.value = "";
};

const init = () => {
  gettodoItem(toDoList);
  toDoForm.addEventListener("submit", handleSubmit);
};

init();
