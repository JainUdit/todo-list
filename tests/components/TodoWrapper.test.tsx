import React from "react";
import { mount, ReactWrapper } from "../setup/test-setup";
import { ITodoWrapperProps, TodoWrapper } from '../../src/redux-app';

const mockOnCompleteClick = jest.fn();
const mockOnDelete = jest.fn();

const props: ITodoWrapperProps = {
    todos: [{
        id: 0,
        text: 'Bhopal',
        completed: false
    }],
    onCompleteClick: mockOnCompleteClick,
    onDelete: mockOnDelete
}

describe('TodoWrapper', () => {
    let wrapper: ReactWrapper;

    afterEach(() => {
        jest.resetAllMocks();
        wrapper.unmount();
    });

    it('should render TodoWrapper component', () => {
        wrapper = mount(
            <TodoWrapper {...props} />
        );

        expect(wrapper.find(TodoWrapper).exists()).toBeTruthy();
    });

    it('onCompleteClick event handler should be called after clicking on complete icon', () => {
        wrapper = mount(
            <TodoWrapper {...props} />
        );
        expect(wrapper.find(TodoWrapper).exists()).toBeTruthy();

        wrapper
            .find('#tickIcon_Bhopal')
            .children()
            .at(0)
            .simulate('click');

        expect(mockOnCompleteClick).toHaveBeenCalled();
    });

    it('onClick event handler should be called after clicking on Active filter', () => {
        wrapper = mount(
            <TodoWrapper {...props} />
        );
        expect(wrapper.find(TodoWrapper).exists()).toBeTruthy();

        wrapper
            .find('#deleteIcon_Bhopal')
            .children()
            .at(0)
            .simulate('click');

        expect(mockOnDelete).toHaveBeenCalled();
    });
})