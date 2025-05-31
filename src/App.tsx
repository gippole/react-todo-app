import React, { useState } from 'react';
import TodoList from './components/TodoList';
import { Todo } from './types'; // <-- Import the shared Todo type

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const addTodo = () => {
        if (inputValue.trim()) {
            const newTodo: Todo = {
                id: Date.now(),
                content: inputValue, // <-- Use 'content' instead of 'text'
                completed: false     // <-- Add 'completed' if required by your type
            };
            setTodos([...todos, newTodo]);
            setInputValue('');
        }
    };

    const removeTodo = (id: number) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>Todo Application</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={addTodo}>Add Todo</button>
            <TodoList todos={todos} onRemove={removeTodo} />
        </div>
    );
};

export default App;