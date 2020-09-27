import React from "react";
import { act } from "react-dom/test-utils";
import { mount, ReactWrapper } from "../setup/test-setup";
import { IAddTodoProps, AddTodo } from '../../src/redux-app';

const mockOnAdd = jest.fn();
const mockOnAlertClose = jest.fn();

const props: IAddTodoProps = {
    restrictedWordAlertOpen: false,
    onAdd: mockOnAdd,
    onAlertClose: mockOnAlertClose
}

describe('AddTodo', () => {
    let wrapper: ReactWrapper;

    afterEach(() => {
        jest.resetAllMocks();
        wrapper.unmount();
    });

    it('should render AddTodo component', () => {
        wrapper = mount(
            <AddTodo {...props} />
        );

        expect(wrapper.find(AddTodo).exists()).toBeTruthy();
    });

    it('onAdd event handler should be called after clicking on complete icon', () => {
        const event = { target: { id: 'newTask', value: 'Bhopal' } }

        wrapper = mount(
            <AddTodo {...props} />
        );
        expect(wrapper.find(AddTodo).exists()).toBeTruthy();

        act(() => {
            wrapper
                .find('input')
                .props()
                .onChange({ target: { value: 'Bhopal' } });
        });

        wrapper
            .find('#sendIcon')
            .children()
            .at(0)
            .simulate('click');

        expect(mockOnAdd).toHaveBeenCalled();
    });

    it('onAlertClose event handler should be called when pressed Enter button in text field', () => {
        wrapper = mount(
            <AddTodo {...props} restrictedWordAlertOpen={true} />
        );
        expect(wrapper.find(AddTodo).exists()).toBeTruthy();

        act(() => {
            wrapper
                .find('input')
                .props()
                .onChange({ target: { value: 'Bhopal' } });
        });

        wrapper
            .find('#newTask')
            .children()
            .at(0)
            .simulate('keypress', { key: 'B' });

        wrapper
            .find('#newTask')
            .children()
            .at(0)
            .simulate('keypress', { key: 'Enter' });

        expect(mockOnAlertClose).toHaveBeenCalled();
    });
})