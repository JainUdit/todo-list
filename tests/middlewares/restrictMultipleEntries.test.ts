import { restrictMultipleEntries } from '../../src/redux-app';

const create = () => {
    const store = {
        getState: jest.fn(() => ({
            domain: {
                todoList: [{
                    text: 'Bhopal',
                }]
            }
        })),
        dispatch: jest.fn()
    }
    const next = jest.fn()

    const invoke = action => restrictMultipleEntries(store)(next)(action)

    return { store, next, invoke }
}


it('passes same text in payload', () => {
    const { next, invoke } = create();
    const receivedAction = { type: "RESTRICTED_WORD_OPEN_ALERT", payload: {} };
    const passedAction = {
        type: 'ADD_TODO',
        payload: {
            text: 'Bhopal'
        }
    };
    invoke(passedAction);
    expect(next).toHaveBeenCalledWith(receivedAction);
})

it('passes different text in payload', () => {
    const {next, invoke } = create();
    const action = {
        type: 'ADD_TODO',
        payload: {
            text: 'Pune'
        }
    };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
})
