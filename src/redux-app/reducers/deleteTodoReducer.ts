import { IDeleteTodo } from "../actions";
import { ITodo, ITodoListState } from "../interfaces";

export const deleteTodoReducer = (
    state: ITodoListState,
    action: IDeleteTodo
): ITodoListState => {
    const list: Array<ITodo> = state.todoList.filter(todo =>
        todo.id !== action.payload.id
    );
    return {
        ...state,
        todoList: list
    }
};