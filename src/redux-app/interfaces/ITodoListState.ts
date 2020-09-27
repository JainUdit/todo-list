import { Filter } from "../enums";
import { ITodo } from "./ITodo";
/**
 * This interface defines type for list of todos and filter.
 */
export interface ITodoListState {
    todoList: Array<ITodo>;
    filterType: Filter;
    restrictedWordPopUpOpen: boolean;
}