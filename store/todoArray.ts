import { todo } from "../type";

export let todoItem : todo[] = [];

export const setTodoItem = (array : todo[]) => {
  todoItem = array;
};
