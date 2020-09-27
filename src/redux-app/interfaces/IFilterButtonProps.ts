import { Filter } from "../enums";
import { ITodoListState } from "./ITodoListState";
/**
 * This interface defines props for FilterButton component.
 */
export interface IFilterButtonProps extends ITodoListState {
    onClick: (filterType: Filter) => void;
}