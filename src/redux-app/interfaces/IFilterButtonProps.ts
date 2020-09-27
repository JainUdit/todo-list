import { Filter } from "../enums";
import { ITodoListState } from "./ITodoListState";

export interface IFilterButtonProps extends ITodoListState {
    onClick: (filterType: Filter) => void;
}