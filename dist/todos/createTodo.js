import { deleteTodo } from "./deleteTodo.js";
import { updateToDo } from "./updateTodo.js";
export const createElement = (text, id, toDoList) => {
    const todoListItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const updateBtn = document.createElement("button");
    const todoListContent = document.createElement("span");
    todoListContent.setAttribute("id", `todoContent${id}`);
    todoListItem.appendChild(todoListContent);
    todoListItem.appendChild(updateBtn);
    todoListItem.appendChild(deleteBtn);
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click", (e) => {
        console.log(toDoList);
        deleteTodo(e, toDoList);
    });
    updateBtn.innerText = "🖍️";
    updateBtn.addEventListener("click", updateToDo);
    todoListContent.innerHTML = text;
    return todoListItem;
};
