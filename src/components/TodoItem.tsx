import React from 'react';

interface TodoItemProps {
    id: number;
    text: string;
    onRemove: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, onRemove }) => {
    return (
        <div>
            <span>{text}</span>
            <button onClick={() => onRemove(id)}>Remove</button>
        </div>
    );
};

export default TodoItem;