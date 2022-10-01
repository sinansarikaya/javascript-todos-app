import { createListElement, alert } from "./functions.js";

const rightSide = document.querySelector("#rightSide");
const list = document.querySelector(".list");
const inputContainer = document.querySelector(".input-container");
const todoInput = document.querySelector(".todo-input");
const prioritySelectBox = document.querySelector(".priority");

let todoArray = JSON.parse(localStorage.getItem("TODOS")) || [];

const renderSavedTodos = () => {
  todoArray.forEach((todo) => {
    createListElement(todo);
  });
};

renderSavedTodos();

inputContainer.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!todoInput.value || prioritySelectBox.value == "Priority") {
    alert(true);
    return;
  }
  if (todoInput.value.trim() === "") {
    alert("PLease enter new todo");
  } else {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
      priority: prioritySelectBox.value,
    };

    createListElement(newTodo);
    todoArray.push(newTodo);
    localStorage.setItem("TODOS", JSON.stringify(todoArray));

    todoInput.value = "";
  }
});

window.addEventListener("click", (e) => {
  let id = e.target.getAttribute("id");
  if (e.target.className === "todoItem") {
    todoArray.map((todo, i) => {
      if (todo.id == id) {
        todoArray[i].completed = !todoArray[i].completed;
      }
    });
  } else if (e.target.className === "fa-solid fa-xmark") {
    id = e.target.previousSibling.getAttribute("for");
    todoArray = todoArray.filter((todo) => todo.id !== Number(id));
  }

  localStorage.setItem("TODOS", JSON.stringify(todoArray));
  const todoList = document.querySelectorAll(".todo-list");
  todoList.forEach((element) => {
    element.remove();
  });
  renderSavedTodos();
});

window.onload = function () {
  todoInput.focus();
};
