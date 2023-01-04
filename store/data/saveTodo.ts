import { LOCAL_STORAGE_KEY } from "../key";
import { todoItem } from "../todoArray";

export const saveToDo = () => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoItem));
};
