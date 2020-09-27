import { IAddTodo } from "../actions";
import { ITodo, ITodoListState } from "../interfaces";

export const addTodoReducer = (
    state: ITodoListState,
    action: IAddTodo
): ITodoListState => {
    const list: Array<ITodo> = state.todoList.concat(action.payload);
    return {
        ...state,
        todoList: list
    }
};