const toDoForm = document.querySelector(".toDoListForm");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".toDoListItem");

const key = "todoProject";

let toDoEvents = [];

const saveToDo = () => {
  localStorage.setItem(key, JSON.stringify(toDoEvents));
};

function deleteTodo(event) {
  const btn = event.target;
  const li = btn.parentNode; //밑에서 자식 노드 추가한거의 역순으로 접근
  toDoList.removeChild(li);

  const newToDoEvents = toDoEvents.filter((todo) => {
    return todo.id !== parseInt(li.id);
  });

  toDoEvents = newToDoEvents;

  saveToDo();
}

function updateToDo(event) {
  const btn = event.target;
  const span = btn.previousSibling;
  const li = btn.parentNode;
  const newTodoContent = window.prompt("type update todo content");
  span.text = newTodoContent;

  toDoEvents?.forEach((todo) => {
    if (todo.id === parseInt(li.id)) {
      todo.text = newTodoContent;
    }
  });
  span.innerHTML = newTodoContent;
  saveToDo();
}

const showToDo = (text) => {
  const li = document.createElement("li"); //리스트에
  const deleteBtn = document.createElement("button"); //버튼만들고
  const updateBtn = document.createElement("button");
  const span = document.createElement("span"); //내용 보여주고
  const newid = toDoEvents.length + 1; //식별자

  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", deleteTodo);

  //this 바인딩 문제로 여기 콜백함수로는 화살표 함수를 사용하면 안된다고 한다.

  updateBtn.innerText = "🖍️";
  updateBtn.addEventListener("click", updateToDo);

  span.innerHTML = text;

  li.appendChild(span); // 자식 노드 추가
  li.appendChild(updateBtn);
  li.appendChild(deleteBtn); // 자식 노드 추가
  toDoList.appendChild(li); // 자식 노드 추가(내용물 안에)
  li.id = newid; //삭제를 위한 식별자 추가

  const toDoContent = {
    text,
    id: newid,
  };
  toDoEvents.push(toDoContent);
  saveToDo();
};

const handleSubmit = (event) => {
  event.preventDefault();
  showToDo(todoInput.value);
  todoInput.value = "";
};

const getToDoEvents = () => {
  const StoredToDoEvents = localStorage.getItem(key);
  if (!StoredToDoEvents) return;
  const storedToDoContent = JSON.parse(StoredToDoEvents);
  storedToDoContent?.forEach((todo) => {
    showToDo(todo.text);
  });
};

const init = () => {
  getToDoEvents();
  toDoForm.addEventListener("submit", handleSubmit);
};

init();
