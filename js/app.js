import { createListElement } from "./functions.js";

const leftSide = document.querySelector("#leftSide");
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
    console.log("Bos");
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

leftSide.addEventListener("click", (e) => {
  console.log(e.target.className === "fa-solid fa-xmark");

  const id = e.target.parentElement.querySelector("label").getAttribute("for");
  if (e.target.className === "fa-solid fa-xmark") {
    e.target.parentElement.parentElement.parentElement.remove();

    todoArray = todoArray.filter((todo) => todo.id !== Number(id));
    localStorage.setItem("TODOS", JSON.stringify(todoArray));
  }
});

window.onload = function () {
  todoInput.focus();
};
