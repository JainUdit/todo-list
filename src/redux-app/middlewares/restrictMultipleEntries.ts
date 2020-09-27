import { restrictedWordOpenAlert } from "../actions";
import { ITodoListGlobalState } from "../interfaces"

export const restrictMultipleEntries = store => next => action => {
    const state: ITodoListGlobalState = store.getState();

    if (state.domain.todoList.find(todo => todo.text === action.payload.text)) {
        next(restrictedWordOpenAlert());
    }
    else {
        return next(action);
    }
}