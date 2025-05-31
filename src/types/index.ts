export interface Todo {
    id: number;
    content: string;
    completed: boolean;
}

export interface TodoProps {
    todo: Todo;
    onRemove: (id: number) => void;
}