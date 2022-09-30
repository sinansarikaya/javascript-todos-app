const leftSide = document.querySelector("#leftSide");
const inputContainer = document.querySelector(".input-container");
const todoInput = document.querySelector(".todo-input");
const prioritySelectBox = document.querySelector(".priority");
const addBtn = document.querySelector(".submitBtn");

inputContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(todoInput.value, prioritySelectBox.value);
  const todoList = document.createElement("div");
  todoList.className = "todo-list";
  leftSide.appendChild(todoList);

  const getDate = new Date().toLocaleDateString();
  const date = document.createElement("div");
  date.className = "date";
  date.innerText = getDate;
  todoList.appendChild(date);

  const row = document.createElement("div");
  row.className = "row";
  todoList.appendChild(row);

  const todos = document.createElement("div");
  todos.className = "todos";
  row.appendChild(todos);

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("value", todoInput.value);
  checkbox.id = 2;
  todos.appendChild(checkbox);

  const todoLabel = document.createElement("label");
  todoLabel.setAttribute("for", "2");
  todoLabel.innerText = todoInput.value;
  todos.appendChild(todoLabel);

  //
  //   const faXmark = document.createElement("i");
  //   const circle = document.createElement("div");

  todoInput.value = "";
});
