const leftSide = document.querySelector("#leftSide");

export const createListElement = (newTodo) => {
  const { id, completed, text, priority } = newTodo;

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
  checkbox.setAttribute("value", text);
  checkbox.id = id;
  todos.appendChild(checkbox);

  const todoLabel = document.createElement("label");
  todoLabel.setAttribute("for", id);
  todoLabel.innerText = text;
  todos.appendChild(todoLabel);

  const faXmark = document.createElement("i");
  faXmark.className = "fa-solid fa-xmark";
  todos.appendChild(faXmark);

  const circle = document.createElement("div");
  circle.className = `circle ${priority}`;
  row.appendChild(circle);
};
