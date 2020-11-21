var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];


function renderTodos() {
    // clear existing todos
    todoList.innerHTML = ""

// rerender todos
    for (var i = 0; i<  todos.length; i++){
        // Create il element
        var li = document.createElement("li");
        // add todo text to li
        li.innerText = todos[i];
        // Append li to ul
        todoList.appendChild(li);}

}

function addTodo (event) {
    event.preventDefault()
    var newTodo = todoInput.value
    console.log(newTodo)
    if (newTodo === ""){
      return      
    }
    todos.push(newTodo)
    renderTodos()
    // 
}
todoForm.addEventListener("submit", addTodo)


renderTodos();