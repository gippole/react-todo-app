import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types';

interface TodoListProps {
  todos: Todo[];
  onRemove: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} id={todo.id} text={todo.content} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default TodoList;