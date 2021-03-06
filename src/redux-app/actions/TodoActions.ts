import {
    ADD_TODO,
    DELETE_TODO,
    FILTER_TODO,
    MARK_TODO_COMPLETE,
    RESTRICTED_WORD_CLOSE_ALERT,
    RESTRICTED_WORD_OPEN_ALERT
} from "../constants";
import { Filter } from "../enums";
import { ITodo } from "../interfaces";
import { BaseAction } from "./BaseAction";

/**
 * These interfaces defines type for actions.
 */
export interface IAddTodo extends BaseAction<ITodo> { }
export interface IDeleteTodo extends BaseAction<{ id: number }> { }
export interface IMarkTodoComplete extends BaseAction<{ id: number }> { }
export interface IFilterTodo extends BaseAction<{ filter: Filter }> { }
export interface IRestrictedWord extends BaseAction<{}> { }

let todoId: number = 1;
export const addTodo: (text: string) => IAddTodo = (text) => ({
    type: ADD_TODO,
    payload: { id: todoId++, text, completed: false }
});

export const deleteTodo: (id: number) => IDeleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: { id }
})

export const markTodoComplete: (id: number) => IMarkTodoComplete = (id) => ({
    type: MARK_TODO_COMPLETE,
    payload: { id }
})

export const setFilter: (filter: Filter) => IFilterTodo = (filter) => ({
    type: FILTER_TODO,
    payload: { filter }
})

export const restrictedWordOpenAlert: () => IRestrictedWord = () => ({
    type: RESTRICTED_WORD_OPEN_ALERT,
    payload: {}
})

export const restrictedWordCloseAlert: () => IRestrictedWord = () => ({
    type: RESTRICTED_WORD_CLOSE_ALERT,
    payload: {}
})