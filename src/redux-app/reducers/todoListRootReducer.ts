import { BaseAction } from "../actions";
import { ITodoListState } from "../interfaces";
import { deleteTodoReducer } from "./deleteTodoReducer";
import { markTodoCompleteReducer } from "./markTodoCompleteReducer";
import { addTodoReducer } from "./addTodoReducer";
import { ADD_TODO, DELETE_TODO, FILTER_TODO, MARK_TODO_COMPLETE, RESTRICTED_WORD_CLOSE_POPUP, RESTRICTED_WORD_OPEN_POPUP } from "../constants";
import { Reducer } from "redux";

export const todoListRootReducer: Reducer<ITodoListState, BaseAction<any>> = (
    state: ITodoListState = {} as ITodoListState,
    action: BaseAction<any>
): ITodoListState => {
    switch (action.type) {
        case ADD_TODO: {
            return addTodoReducer(state, action);
        }
        case DELETE_TODO: {
            return deleteTodoReducer(state, action);
        }
        case MARK_TODO_COMPLETE: {
            return markTodoCompleteReducer(state, action);
        }
        case FILTER_TODO:
            return { ...state, filterType: action.payload.filter };
        case RESTRICTED_WORD_OPEN_POPUP:
            return { ...state, restrictedWordPopUpOpen: true };
        case RESTRICTED_WORD_CLOSE_POPUP:
            return { ...state, restrictedWordPopUpOpen: false };

        default:
            return state;
    };
};