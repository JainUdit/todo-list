import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { TodoWrapper, Filter, ITodo, ConnectedTodoWrapper } from '../../src/redux-app';
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
                <ConnectedTodoWrapper />
            </Provider>
        )
    }
}

describe('<ConnectedTodoWrapper />', () => {
    let wrapper: ReactWrapper;

    afterEach(() => {
        jest.clearAllMocks();
        wrapper.unmount();
    });

    it('should render connectedTodoWrapper page', () => {
        const sut = <Sut />
        wrapper = mount(sut);
        expect(wrapper.find(TodoWrapper).exists()).toBeTruthy();
    });

    it('should render connectedTodoWrapper page with filer as ACTIVE', () => {

        class LocalSut extends React.PureComponent {
            render(): React.ReactNode {
        
                const initialState = {
                    domain: {
                        todoList: [{
                            id: 0,
                            text: 'Bhopal',
                            completed: false
                        }] as Array<ITodo>,
                        filterType: Filter.ACTIVE,
                        restrictedWordAlertOpen: false
                    }
                }
        
                const mockStore = configureStore();
                const preloadedState = Object.assign({}, initialState);
                store = mockStore(preloadedState);
        
                return (
                    <Provider store={store}>
                        <ConnectedTodoWrapper />
                    </Provider>
                )
            }
        }

        const sut = <LocalSut />
        wrapper = mount(sut);
        expect(wrapper.find(TodoWrapper).exists()).toBeTruthy();
    });

    it('should render connectedTodoWrapper page with filer as COMPLETED', () => {

        class LocalSut extends React.PureComponent {
            render(): React.ReactNode {
        
                const initialState = {
                    domain: {
                        todoList: [{
                            id: 0,
                            text: 'Bhopal',
                            completed: true
                        }] as Array<ITodo>,
                        filterType: Filter.COMPLETED,
                        restrictedWordAlertOpen: false
                    }
                }
        
                const mockStore = configureStore();
                const preloadedState = Object.assign({}, initialState);
                store = mockStore(preloadedState);
        
                return (
                    <Provider store={store}>
                        <ConnectedTodoWrapper />
                    </Provider>
                )
            }
        }

        const sut = <LocalSut />
        wrapper = mount(sut);
        expect(wrapper.find(TodoWrapper).exists()).toBeTruthy();
    });

    it('should render connectedTodoWrapper page with filer as null', () => {

        class LocalSut extends React.PureComponent {
            render(): React.ReactNode {
        
                const initialState = {
                    domain: {
                        todoList: [] as Array<ITodo>,
                        filterType: null,
                        restrictedWordAlertOpen: false
                    }
                }
        
                const mockStore = configureStore();
                const preloadedState = Object.assign({}, initialState);
                store = mockStore(preloadedState);
        
                return (
                    <Provider store={store}>
                        <ConnectedTodoWrapper />
                    </Provider>
                )
            }
        }

        const sut = <LocalSut />
        wrapper = mount(sut);
        expect(wrapper.find(TodoWrapper).exists()).toBeTruthy();
    });

    it('should check onCompleteClick event handler clicked event', () => {
        const sut = <Sut />
        wrapper = mount(sut);
        expect(wrapper.find(TodoWrapper).exists()).toBeTruthy();
        const onCompleteClick = wrapper.find(TodoWrapper).prop('onCompleteClick');
        onCompleteClick(0);
        expect(wrapper.find(TodoWrapper).props().onCompleteClick).toBeDefined();
    });

    it('should check onDelete event handler clicked event', () => {
        const sut = <Sut />
        wrapper = mount(sut);
        expect(wrapper.find(TodoWrapper).exists()).toBeTruthy();
        const onDelete = wrapper.find(TodoWrapper).prop('onDelete');
        onDelete(0);
        expect(wrapper.find(TodoWrapper).props().onDelete).toBeDefined();
    });
})