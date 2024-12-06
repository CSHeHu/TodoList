
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.filters button').forEach(button => {
        button.addEventListener('click', toggleFilter);
    });
    document.getElementById('submit').addEventListener('click', addToList);
    document.getElementById('todo-list').addEventListener('click', toggleTask);
    document.getElementById('clear').addEventListener('click', clearTodos);
    loadTodos();
});

function addToList(event) {
    event.preventDefault();
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');

    if (todoInput.value.trim() === '') {
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = todoInput.value.trim();
    todoList.appendChild(listItem);

    todoInput.value = '';
    saveTodos();
}

function toggleTask(event) {
    const target = event.target;

    if (target.tagName === 'LI') {
        target.classList.toggle('completed');
    }
    saveTodos();
}

function toggleFilter(event) {
    const target = event.target;

    const filter = target.getAttribute('data-filter');
    const todoList = document.getElementById('todo-list');

    todoList.childNodes.forEach(todo => {
        if (filter === 'completed' && todo.classList.contains('completed')) {
            todo.style.display = 'block';
        } else if (filter === 'pending' && !todo.classList.contains('completed')) {
            todo.style.display = 'block';
        } else if (filter === 'all') {
            todo.style.display = 'block';
        } else {
            todo.style.display = 'none';
        }
    });

    // Toggle active class for filter buttons
    document.querySelectorAll('.filters button').forEach(btn => {
        btn.classList.remove('active');
    });
    target.classList.add('active');
}

function saveTodos() {
    const todos = [];
    document.querySelectorAll('#todo-list li').forEach(item => {
        todos.push({
            description: item.textContent,
            completed: item.classList.contains('completed')
        });
    });
    const todosJSON = JSON.stringify(todos); 
    localStorage.setItem("todolist", todosJSON);
}


function loadTodos() {
    const dataJSON = localStorage.getItem("todolist");
    const todoList = document.getElementById('todo-list');
    if (dataJSON !== null){
        const data = JSON.parse(dataJSON);
        data.forEach(item => {
           const listItem = document.createElement('li');
           listItem.textContent = item.description;
           if (item.completed) {
               listItem.classList.add('completed');
           }
           todoList.appendChild(listItem);

       });
    }
    else {
        while (todoList.firstChild){
            todoList.removeChild(todoList.lastChild);
        }
    }
}

function clearTodos() {
    localStorage.clear();
    loadTodos();
}