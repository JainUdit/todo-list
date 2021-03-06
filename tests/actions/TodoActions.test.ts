import {
    ADD_TODO,
    DELETE_TODO,
    FILTER_TODO,
    MARK_TODO_COMPLETE,
    RESTRICTED_WORD_CLOSE_ALERT,
    RESTRICTED_WORD_OPEN_ALERT,
    IAddTodo,
    IDeleteTodo,
    IFilterTodo,
    IMarkTodoComplete,
    IRestrictedWord,
    addTodo,
    deleteTodo,
    markTodoComplete,
    restrictedWordCloseAlert,
    restrictedWordOpenAlert,
    Filter,
    setFilter
} from '../../src/redux-app';

describe('TodoActions', () => {
    afterEach(() => expect.hasAssertions());

    it('should return ADD_TODO as type for the action', () => {
        const result: IAddTodo = addTodo('Bhopal');
        expect(result.type).toBe(ADD_TODO);
    });


    it('should return DELETE_TODO as type for the action', () => {
        const result: IDeleteTodo = deleteTodo(0);
        expect(result.type).toBe(DELETE_TODO);
    });

    it('should return MARK_TODO_COMPLETE as type for the action', () => {
        const result: IMarkTodoComplete = markTodoComplete(0);
        expect(result.type).toBe(MARK_TODO_COMPLETE);
    });

    it('should return FILTER_TODO as type for the action', () => {
        const result: IFilterTodo = setFilter(Filter.ALL);
        expect(result.type).toBe(FILTER_TODO);
    });

    it('should return RESTRICTED_WORD_OPEN_ALERT as type for the action', () => {
        const result: IRestrictedWord = restrictedWordOpenAlert();
        expect(result.type).toBe(RESTRICTED_WORD_OPEN_ALERT);
    });

    it('should return RESTRICTED_WORD_CLOSE_ALERT as type for the action', () => {
        const result: IRestrictedWord = restrictedWordCloseAlert();
        expect(result.type).toBe(RESTRICTED_WORD_CLOSE_ALERT);
    });
})