import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Filter, ITodo, TaskBox } from "../../src/redux-app";
import { mount, ReactWrapper } from "../setup/test-setup";

let store;

class Sut extends React.PureComponent {
    render(): React.ReactNode {

        const initialState = {
            domain: {
                todoList: [] as Array<ITodo>,
                filterType: Filter.ALL,
                restrictedWordAlertOpen: false
            }
        }

        const mockStore = configureStore();
        const preloadedState = Object.assign({}, initialState);
        store = mockStore(preloadedState);

        return (
            <Provider store={store}>
                <TaskBox />
            </Provider>
        )
    }
}

describe('TaskBox', () => {
    let wrapper: ReactWrapper;

    afterEach(() => {
        jest.resetAllMocks();
        wrapper.unmount();
    });

    it('should render TaskBox component', () => {
        const sut = <Sut />
        wrapper = mount(sut);

        expect(wrapper.find(TaskBox).exists()).toBeTruthy();
    });
});