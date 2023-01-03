import { todoItem } from "../store/todoArray.js";
import { createElement } from "./createTodo.js";
import { saveToDo } from "../store/data/saveTodo.js";

export const addTodo = (text, toDoList) => {
  const newId = new Date() + todoItem.length;
  const todoListItem = createElement(text, newId, toDoList);
  toDoList.appendChild(todoListItem);
  todoListItem.id = newId;
  const toDoContent = {
    text,
    id: newId,
  };
  todoItem.push(toDoContent);
  saveToDo();
};
