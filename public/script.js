const todoForm = document.getElementById('todoForm');
const todoList = document.getElementById('todoList');
const showPreviousDataButton = document.getElementById('showPreviousData');

// Fetch todos from the server
async function fetchTodos() {
    const response = await fetch('/api/todos');
    const todos = await response.json();
    renderTodos(todos);
}

// Render todos on the page
function renderTodos(todos) {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${todo.status ? 'completed' : ''}">
                ${todo.title} - ${todo.description || ''}
            </span>
            <button class="delete" onclick="deleteTodo(${todo.id})">Delete</button>
        `;
        li.addEventListener('click', () => toggleComplete(todo.id, !todo.status));
        todoList.appendChild(li);
    });
}

// Add a new todo
todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
    });

    todoForm.reset();
    fetchTodos();
});

// Toggle completion
async function toggleComplete(id, status) {
    await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
    });
    fetchTodos();
}

// Delete a todo
async function deleteTodo(id) {
    await fetch(`/api/todos/${id}`, { method: 'DELETE' });
    fetchTodos();
}

// Fetch previous data
showPreviousDataButton.addEventListener('click', async () => {
    const response = await fetch('/api/todos');
    const todos = await response.json();
    alert(JSON.stringify(todos, null, 2)); // Display data in an alert (or customize as needed)
});

// Initialize
fetchTodos();
