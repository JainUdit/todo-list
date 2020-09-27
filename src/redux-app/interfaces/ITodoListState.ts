import { Filter } from "../enums";
import { ITodo } from "./ITodo";
/**
 * This interface defines type for list of todos, type of filter and alert to open on restrictedWords.
 */
export interface ITodoListState {
    todoList: Array<ITodo>;
    filterType: Filter;
    restrictedWordAlertOpen: boolean;
}