let todo = [
  { first: "this is the example of a todo" },
  { second: "second example" },
];

const todoForm = document.getElementById("todo-form");
const myTodo = document.getElementById("todo-text").innerText;

function addTodo() {
  newTodo = todo.push({ "to1": myTodo });
  console.log(todo.length)
    console.log(myTodo);
}

todoForm.onsubmit(
    addTodo());
