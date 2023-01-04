import { saveToDo } from "../store/data/saveTodo";
import { todoItem } from "../store/todoArray";

export function updateToDo(event:any) {
  const btn = event.target;
  const li = btn.parentNode;
  const span = document.getElementById(`todoContent${li.id}`);
  if (span === null)return;
  
  const newTodoContent = String(window.prompt("type update todo content"));

  todoItem?.forEach((todo) => {
    if (todo.id === li.id) {
      todo.text = newTodoContent;
    }
  });
  span.innerHTML = newTodoContent;
  saveToDo();
}
