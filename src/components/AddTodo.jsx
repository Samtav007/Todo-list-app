import React, { useState } from 'react';

function AddTodo({ onAdd }) {
    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim() === "") return;
        onAdd(newTodo);
        setNewTodo("");
    };

    return (
        <form onSubmit={handleSubmit} className="add-todo-form">
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">➕</button>
        </form>
    );
}

export default AddTodo;