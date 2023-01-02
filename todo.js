const toDoForm = document.querySelector(".toDoListForm");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".toDoListItem");

const LOCAL_STORAGE_KEY = "todoProject";

let todoItem = [];

const saveToDo = () => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoItem));
};

function deleteTodo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);

  const newtodoItem = todoItem.filter((todo) => {
    return todo.id !== li.id;
  });

  todoItem = newtodoItem;

  saveToDo();
}

function updateToDo(event) {
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

const createElement = (text, id) => {
  const todoListItem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  const updateBtn = document.createElement("button");
  const todoListContent = document.createElement("span");
  todoListContent.setAttribute("id", `todoContent${id}`);

  todoListItem.appendChild(todoListContent);
  todoListItem.appendChild(updateBtn);
  todoListItem.appendChild(deleteBtn);

  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", deleteTodo);

  updateBtn.innerText = "🖍️";
  updateBtn.addEventListener("click", updateToDo);

  todoListContent.innerHTML = text;

  return todoListItem;
};

const addTodo = (text) => {
  const newId = new Date() + todoItem.length;
  const todoListItem = createElement(text, newId);
  toDoList.appendChild(todoListItem);
  todoListItem.id = newId;
  const toDoContent = {
    text,
    id: newId,
  };
  todoItem.push(toDoContent);
  saveToDo();
};

const handleSubmit = (event) => {
  event.preventDefault();
  addTodo(todoInput.value);
  todoInput.value = "";
};

const gettodoItem = () => {
  const StoredtodoItem = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!StoredtodoItem) return;
  const storedToDoContent = JSON.parse(StoredtodoItem);
  storedToDoContent?.forEach((todo) => {
    addTodo(todo.text);
  });
};

const init = () => {
  gettodoItem();
  toDoForm.addEventListener("submit", handleSubmit);
};

init();
