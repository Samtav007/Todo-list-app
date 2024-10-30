import React, { useState, useEffect } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then((response) => response.json())
            .then((data) => {
                setTodos(data);
            })
            .catch((err) => {
                setError('Failed to fetch to-dos.');
            });
    }, []);

    const addTodo = (newTodoText) => {
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: newTodoText, completed: false }),
        })
            .then((response) => response.json())
            .then((newTodo) => {
                setTodos([...todos, newTodo]);
            })
            .catch(() => {
                setError('Failed to add to-do.');
            });
    };

    const deleteTodo = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setTodos(todos.filter((todo) => todo.id !== id));
            })
            .catch(() => {
                setError('Failed to delete to-do.');
            });
    };

    const clearAllTodos = () => setTodos([]);

    return (
        <div className="app">
            <h1>Todo App</h1>
            {error && <div className="error-message">{error}</div>}
            <AddTodo onAdd={addTodo} />
            <TodoList todos={todos} onDelete={deleteTodo} />
            {todos.length > 0 && (
                <button className="clear-all-btn" onClick={clearAllTodos}>
                    🧹 Clear All
                </button>
            )}
        </div>
    );
}

export default App;
