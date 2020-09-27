import { ITodo } from "./ITodo";
/**
 * This interface defines props for TodoWrapper component.
 */
export interface ITodoWrapperProps {
    todos: Array<ITodo>;
    onCompleteClick: (id: number) => void;
    onDelete: (id: number) => void;
}