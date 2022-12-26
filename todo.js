const toDoForm = document.querySelector(".toDoListForm");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".toDoListItem");

const key = "todoProject";

let toDoEvents = [];

const saveTodo = () => {
  localStorage.setItem(key, JSON.stringify(toDoEvents)); //일단 저장
};

const showToDo = (text) => {
  const li = document.createElement("li"); //리스트에
  const deleteBtn = document.createElement("button"); //버튼만들고
  const span = document.createElement("span"); //내용 보여주고
  const newid = toDoList.length + 1; //식별자

  deleteBtn.innerText = "❌";

  span.innerHTML = text;

  li.appendChild(span); // 자식 노드 추가
  li.appendChild(deleteBtn); // 자식 노드 추가
  toDoList.appendChild(li); // 자식 노드 추가(내용물 안에)
  li.id = newid; //삭제를 위한 식별자 추가

  const toDoContent = {
    text,
    id: newid,
  };
  toDoEvents.push(toDoContent);
  saveTodo();
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
