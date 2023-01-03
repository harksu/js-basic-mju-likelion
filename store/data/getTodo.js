import { LOCAL_STORAGE_KEY } from "../key.js";
import { addTodo } from "../../todos/addTodo.js";

export const gettodoItem = (toDoList) => {
  const StoredtodoItem = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!StoredtodoItem) return;
  const storedToDoContent = JSON.parse(StoredtodoItem);
  storedToDoContent?.forEach((todo) => {
    addTodo(todo.text, toDoList);
  });
};
