import { LOCAL_STORAGE_KEY } from "../key";
import { addTodo } from "../../todos/addTodo";
import { todo } from "../../type";

export const gettodoItem = (toDoList:Element) => {
  const StoredtodoItem = localStorage.getItem(LOCAL_STORAGE_KEY);
  if(!StoredtodoItem){return}
  const storedToDoContent:[] = JSON.parse(StoredtodoItem || "{}");
  storedToDoContent?.forEach((todo:todo) => {
    addTodo(todo.text, toDoList);
  });
};
