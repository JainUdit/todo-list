import {
    addTodo,
    BaseAction,
    deleteTodo,
    Filter,
    IAddTodo,
    IDeleteTodo,
    IFilterTodo,
    IMarkTodoComplete,
    IRestrictedWord,
    ITodoListState,
    markTodoComplete,
    restrictedWordCloseAlert,
    restrictedWordOpenAlert,
    setFilter,
    todoListRootReducer
} from "../../src/redux-app"

const defaultAction: BaseAction<any> = {
    type: 'XYZ',
    payload: {}
};

const todoListState: ITodoListState = {
    todoList: [{
        id: 0,
        text: 'Bhopal',
        completed: false
    }],
    filterType: Filter.ALL,
    restrictedWordAlertOpen: false
}

describe('todoListRootReducer', () => {

    it('should return exisiting state if the state is not handled', () => {
        const result: ITodoListState = todoListRootReducer(todoListState, defaultAction);
        expect(result).toStrictEqual(todoListState);
    });

    it('should return state with new todo added if the action is addTodo', () => {
        const expectedState: ITodoListState = {
            ...todoListState,
            todoList: todoListState.todoList.concat({
                id: 1,
                text: 'Pune',
                completed: false
            })
        };

        const addTodoAction: IAddTodo = addTodo('Pune');
        const result: ITodoListState = todoListRootReducer(todoListState, addTodoAction);
        expect(result).toStrictEqual(expectedState);
    });

    it('should return state with deleted todo if the action is deleteTodo', () => {
        const expectedState: ITodoListState = {
            ...todoListState,
            todoList: []
        };

        const deleteTodoAction: IDeleteTodo = deleteTodo(0);
        const result: ITodoListState = todoListRootReducer(todoListState, deleteTodoAction);
        expect(result).toStrictEqual(expectedState);
    });

    it('should return state with todo marked as complete if the action is markTodoComplete', () => {
        const expectedState: ITodoListState = {
            ...todoListState,
            todoList: [{
                id: 0,
                text: 'Bhopal',
                completed: true
            }]
        };

        const markTodoCompleteAction: IMarkTodoComplete = markTodoComplete(0);
        const result: ITodoListState = todoListRootReducer(todoListState, markTodoCompleteAction);
        expect(result).toStrictEqual(expectedState);
    });

    it('should return state with todo not marked as complete as id does not match if the action is markTodoComplete', () => {
        const expectedState: ITodoListState = {
            ...todoListState,
            todoList: [{
                id: 0,
                text: 'Bhopal',
                completed: false
            }]
        };

        const markTodoCompleteAction: IMarkTodoComplete = markTodoComplete(1);
        const result: ITodoListState = todoListRootReducer(todoListState, markTodoCompleteAction);
        expect(result).toStrictEqual(expectedState);
    });

    it('should return state with filtered data if the action is setFilter', () => {
        const expectedState: ITodoListState = {
            ...todoListState,
            filterType: Filter.COMPLETED
        };

        const setFilterAction: IFilterTodo = setFilter(Filter.COMPLETED);
        const result: ITodoListState = todoListRootReducer(todoListState, setFilterAction);
        expect(result).toStrictEqual(expectedState);
    });

    it('should return state with Alert open if the action is restrictedWordOpenAlert', () => {
        const expectedState: ITodoListState = {
            ...todoListState,
            restrictedWordAlertOpen: true
        };

        const restrictedWordOpenAlertAction: IRestrictedWord = restrictedWordOpenAlert();
        const result: ITodoListState = todoListRootReducer(todoListState, restrictedWordOpenAlertAction);
        expect(result).toStrictEqual(expectedState);
    });

    it('should return state with Alert close if the action is restrictedWordCloseAlert', () => {
        const expectedState: ITodoListState = {
            ...todoListState,
            restrictedWordAlertOpen: false
        };

        const restrictedWordCloseAlertAction: IRestrictedWord = restrictedWordCloseAlert();
        const result: ITodoListState = todoListRootReducer(todoListState, restrictedWordCloseAlertAction);
        expect(result).toStrictEqual(expectedState);
    });

});