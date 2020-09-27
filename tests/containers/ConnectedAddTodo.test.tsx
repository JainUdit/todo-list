import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AddTodo, ConnectedAddTodo, Filter, ITodo } from '../../src/redux-app';
import { mount, ReactWrapper } from '../setup/test-setup';

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
                <ConnectedAddTodo />
            </Provider>
        )
    }
}

describe('<ConnectedAddTodo />', () => {
    let wrapper: ReactWrapper;

    afterEach(() => {
        jest.clearAllMocks();
        wrapper.unmount();
    });

    it('should render connected todo page', () => {
        const sut = <Sut />
        wrapper = mount(sut);
        expect(wrapper.find(AddTodo).exists()).toBeTruthy();
    });

    it('should check onAdd event handler clicked event', () => {
        const sut = <Sut />
        wrapper = mount(sut);
        expect(wrapper.find(AddTodo).exists()).toBeTruthy();
        const onAdd = wrapper.find(AddTodo).prop('onAdd');
        onAdd('Bhopal');
        expect(wrapper.find(AddTodo).props().onAdd).toBeDefined();
    });

    it('should check onAlertClose event handler clicked event', () => {
        const sut = <Sut />
        wrapper = mount(sut);
        expect(wrapper.find(AddTodo).exists()).toBeTruthy();
        const onAlertClose = wrapper.find(AddTodo).prop('onAlertClose');
        onAlertClose();
        expect(wrapper.find(AddTodo).props().onAlertClose).toBeDefined();
    });
})