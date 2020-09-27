import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { FilterButton, ConnectedFilterButton, Filter, ITodo } from '../../src/redux-app';
import { mount, ReactWrapper } from '../setup/test-setup';

let store;

class Sut extends React.PureComponent {
    render(): React.ReactNode {

        const initialState = {
            domain: {
                todoList: [] as Array<ITodo>,
                filterType: Filter.ALL,
                restrictedWordPopUpOpen: false
            }
        }

        const mockStore = configureStore();
        const preloadedState = Object.assign({}, initialState);
        store = mockStore(preloadedState);

        return (
            <Provider store={store}>
                <ConnectedFilterButton />
            </Provider>
        )
    }
}

describe('<ConnectedFilterButton />', () => {
    let wrapper: ReactWrapper;

    afterEach(() => {
        jest.clearAllMocks();
        wrapper.unmount();
    });

    it('should render connectedFilterButton page', () => {
        const sut = <Sut />
        wrapper = mount(sut);
        expect(wrapper.find(FilterButton).exists()).toBeTruthy();
    });

    it('should check onClick event handler clicked event', () => {
        const sut = <Sut />
        wrapper = mount(sut);
        expect(wrapper.find(FilterButton).exists()).toBeTruthy();
        const onClick = wrapper.find(FilterButton).prop('onClick');
        onClick(Filter.ALL);
        expect(wrapper.find(FilterButton).props().onClick).toBeDefined();
    });
})