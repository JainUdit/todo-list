import { ITodo } from "./ITodo";

export interface ITodoWrapperProps {
    todos: Array<ITodo>;
    onCompleteClick: (id: number) => void;
    onDelete: (id: number) => void;
}