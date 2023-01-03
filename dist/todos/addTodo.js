import { todoItem } from "../store/todoArray.js";
import { createElement } from "./createTodo.js";
import { saveToDo } from "../store/data/saveTodo.js";
export const addTodo = (text, toDoList) => {
    const newId = new Date() + String(todoItem === null || todoItem === void 0 ? void 0 : todoItem.length);
    const todoListItem = createElement(text, newId, toDoList);
    toDoList.appendChild(todoListItem);
    todoListItem.id = newId;
    const toDoContent = {
        text,
        id: newId,
    };
    todoItem === null || todoItem === void 0 ? void 0 : todoItem.push(toDoContent);
    saveToDo();
};
