import { saveToDo } from "../store/data/saveTodo";
import { todoItem } from "../store/todoArray";
import { setTodoItem } from "../store/todoArray";

export function deleteTodo(event:any, toDoList:Element) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);

  const newtodoItem = todoItem.filter((todo) => {
    return todo.id !== li.id;
  });

  setTodoItem(newtodoItem);

  saveToDo();
}
