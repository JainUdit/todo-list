import * as React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import { ITodoLineProps } from "../interfaces";
import { StyledTodoLine } from './Style';

export const TodoLine = (props: ITodoLineProps): React.ReactElement => {
    return (
        <StyledTodoLine container direction='row'>
            <Grid container item xs={8} justify="flex-start" alignItems="center">{props.text}</Grid>
            <Grid container direction="row" item xs={4} justify="flex-end" alignItems="center">
                {!props.completed &&
                    <IconButton id={`tickIcon_${props.text}`} color="primary" onClick={props.onCompleteClick}>
                        <DoneIcon />
                    </IconButton>
                }
                <IconButton id={`deleteIcon_${props.text}`} color="secondary" onClick={props.onDelete} >
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </StyledTodoLine>
    )
} 