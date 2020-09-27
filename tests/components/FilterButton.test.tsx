import React from "react";
import { mount, ReactWrapper, shallow } from "../setup/test-setup";
import { Filter, FilterButton, IFilterButtonProps, ITodoListState } from '../../src/redux-app';

const todoListState: ITodoListState = {
    todoList: [{
        id: 0,
        text: 'Bhopal',
        completed: false
    }],
    filterType: Filter.ALL,
    restrictedWordPopUpOpen: false
}

const mockOnCLick = jest.fn();

const props: IFilterButtonProps = {
    ...todoListState,
    onClick: mockOnCLick
}

describe('FilterButton', () => {
    let wrapper: ReactWrapper;

    afterEach(() => {
        jest.resetAllMocks();
        wrapper.unmount();
    });

    it('should render FilterButton component', () => {
        wrapper = mount(
            <FilterButton {...props} />
        );

        expect(wrapper.find(FilterButton).exists()).toBeTruthy();
    });

    it('onClick event handler should be called after clicking on Active filter', () => {
        wrapper = mount(
            <FilterButton {...props} />
        );
        expect(wrapper.find(FilterButton).exists()).toBeTruthy();

        wrapper
            .find('#ACTIVE_filter')
            .children()
            .at(0)
            .simulate('click');

        expect(mockOnCLick).toHaveBeenCalled();
    });
});