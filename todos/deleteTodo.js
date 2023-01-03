import { saveToDo } from "../store/data/saveTodo.js";
import { todoItem } from "../store/todoArray.js";
import { setTodoItem } from "../store/todoArray.js";

export function deleteTodo(event, toDoList) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);

  const newtodoItem = todoItem.filter((todo) => {
    return todo.id !== li.id;
  });

  setTodoItem(newtodoItem);

  saveToDo();
}
