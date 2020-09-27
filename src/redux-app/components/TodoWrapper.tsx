import * as React from 'react';
import { Grid } from '@material-ui/core';
import { ITodoWrapperProps } from "../interfaces";
import { StyledTodoWrapper } from './Style';
import { TodoLine } from "./TodoLine";

export const TodoWrapper = (props: ITodoWrapperProps): React.ReactElement => {
    return (
        <StyledTodoWrapper container>
            {props.todos.length === 0
                ? <Grid container justify="center" alignItems="center">No data found.</Grid>
                : props.todos.map(todo => (
                    <TodoLine
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onCompleteClick={() => props.onCompleteClick(todo.id)}
                        onDelete={() => props.onDelete(todo.id)}
                    />
                ))}
        </StyledTodoWrapper>
    )
}