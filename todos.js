function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}
function displayTodos(todos){
    // get the container
    const todoContainer = document.getElementById('todo-container')
    for(const todo of todos){
        // create the child element
        const todoDiv = document.createElement('div');
        // set inertext or innerHTML
        todoDiv.innerHTML = `
        <h3>title: ${todo.title}</h3>
        <h2>User: ${todo.userId}</h2>
        `;
        // appenchild
        todoContainer.appendChild(todoDiv);
    }
}

loadTodos();

