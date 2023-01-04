import { todoItem } from "../store/todoArray";
import { createElement } from "./createTodo";
import { saveToDo } from "../store/data/saveTodo";

export const addTodo = (text:string, toDoList:Element) => {
  const newId = new Date() + String(todoItem?.length);
  const todoListItem = createElement(text, newId, toDoList);
  toDoList.appendChild(todoListItem);
  todoListItem.id = newId;
  const toDoContent = {
    text,
    id: newId,
  };
  todoItem?.push(toDoContent);
  saveToDo();
};
