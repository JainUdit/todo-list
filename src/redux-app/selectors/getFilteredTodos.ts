import { Filter } from "../enums";
import { ITodo, ITodoListGlobalState } from "../interfaces";

export const getFilteredTodos = (state: ITodoListGlobalState): Array<ITodo> => {
    switch (state.domain.filterType) {
        case Filter.ALL:
            return state.domain.todoList;
        case Filter.ACTIVE:
            return state.domain.todoList.filter(todo => !todo.completed);
        case Filter.COMPLETED:
            return state.domain.todoList.filter(todo => todo.completed);

        default:
            return state.domain.todoList;
    }
}