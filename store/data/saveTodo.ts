import { LOCAL_STORAGE_KEY } from "../key.js";
import { todoItem } from "../todoArray.js";

export const saveToDo = () => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoItem));
};
