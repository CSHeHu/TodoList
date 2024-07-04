
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.filters button').forEach(button => {
        button.addEventListener('click', toggleFilter);
    });
    document.getElementById('submit').addEventListener('click', addToList);
    document.getElementById('todo-list').addEventListener('click', toggleTask);
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
   
}

function toggleTask(event) {
    const target = event.target;

    // Toggle completed/pending status
    if (target.tagName === 'LI') {
        target.classList.toggle('completed');
    }
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
