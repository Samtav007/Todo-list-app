import React from 'react';

function TodoItem({ todo, onDelete }) {
    return (
        <li className="todo-item">
            <span>{todo.title}</span>
            <button onClick={() => onDelete(todo.id)}>🗑️</button>
        </li>
    );
}

export default TodoItem;
