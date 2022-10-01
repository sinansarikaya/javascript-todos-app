import { createListElement, alert } from "./functions.js";

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

  if (!todoInput.value) {
    alert(false, "danger", "Please fill the input.");
    return;
  } else if (!todoInput.value || prioritySelectBox.value == "Priority") {
    alert(false, "danger", "Please select a priority.");
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
    alert(false, "success", "Item added successfully.");
    todoInput.value = "";
  }
});

window.addEventListener("click", (e) => {
  let id = e.target.getAttribute("id");
  if (e.target.className === "todoItem") {
    todoArray.map((todo, i) => {
      if (todo.id == id) {
        todoArray[i].completed = !todoArray[i].completed;
        todoArray[i].completed
          ? alert(
              todoArray[i].completed,
              "success",
              "Well done, you have done."
            )
          : alert(todoArray[i].completed, "warning", "Do it again.");
      }
    });
  } else if (e.target.className === "fa-solid fa-xmark") {
    id = e.target.previousSibling.getAttribute("for");
    let todoCheck = todoArray.filter((todo) => todo.id === Number(id));
    console.log(todoCheck[0].completed);
    alert(todoCheck[0].completed, "warning", "Item deleted.");
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
