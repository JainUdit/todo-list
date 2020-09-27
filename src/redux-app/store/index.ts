import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Filter } from "../enums";
import { ITodo } from "../interfaces";
import { restrictMultipleEntries } from "../middlewares";
import { todoListRootReducer } from '../reducers';

const preloadedState = {
    domain: {
        todoList: [{
            id: 0,
            text: "Bhopal",
            completed: false
        }] as Array<ITodo>,
        filterType: Filter.ALL,
        restrictedWordAlertOpen: false
    }
}

export const store = configureStore({
    reducer: combineReducers({
        domain: todoListRootReducer
    }),
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(restrictMultipleEntries)
});
