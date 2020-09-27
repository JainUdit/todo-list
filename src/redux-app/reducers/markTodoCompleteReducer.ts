import { IMarkTodoComplete } from "../actions";
import { ITodo, ITodoListState } from "../interfaces";

export const markTodoCompleteReducer = (
    state: ITodoListState,
    action: IMarkTodoComplete
): ITodoListState => {
    const list: Array<ITodo> = state.todoList.map(todo =>
        todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
    )
    return {
        ...state,
        todoList: list
    }
};