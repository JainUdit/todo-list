import React from "react";
import { mount, ReactWrapper } from "../setup/test-setup";
import { ITodoLineProps, TodoLine } from '../../src/redux-app';

const mockOnCompleteClick = jest.fn();
const mockOnDelete = jest.fn();

const props: ITodoLineProps = {
    text: 'Bhopal',
    completed: false,
    onCompleteClick: mockOnCompleteClick,
    onDelete: mockOnDelete
}

describe('TodoLine', () => {
    let wrapper: ReactWrapper;

    afterEach(() => {
        jest.resetAllMocks();
        wrapper.unmount();
    });

    it('should render TodoLine component', () => {
        wrapper = mount(
            <TodoLine {...props} />
        );

        expect(wrapper.find(TodoLine).exists()).toBeTruthy();
    });

    it('onCompleteClick event handler should be called after clicking on complete icon', () => {
        wrapper = mount(
            <TodoLine {...props} />
        );
        expect(wrapper.find(TodoLine).exists()).toBeTruthy();

        wrapper
            .find('#tickIcon_Bhopal')
            .children()
            .at(0)
            .simulate('click');

        expect(mockOnCompleteClick).toHaveBeenCalled();
    });

    it('onClick event handler should be called after clicking on Active filter', () => {
        wrapper = mount(
            <TodoLine {...props} />
        );
        expect(wrapper.find(TodoLine).exists()).toBeTruthy();

        wrapper
            .find('#deleteIcon_Bhopal')
            .children()
            .at(0)
            .simulate('click');

        expect(mockOnDelete).toHaveBeenCalled();
    });
})