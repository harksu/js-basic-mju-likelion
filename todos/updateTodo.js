import { saveToDo } from "../store/data/saveTodo.js";
import { todoItem } from "../store/todoArray.js";

export function updateToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const span = document.getElementById(`todoContent${li.id}`);
  const newTodoContent = window.prompt("type update todo content");

  todoItem?.forEach((todo) => {
    if (todo.id === li.id) {
      todo.text = newTodoContent;
    }
  });
  span.innerHTML = newTodoContent;
  saveToDo();
}
