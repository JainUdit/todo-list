import * as React from 'react';
import { Grid } from '@material-ui/core';
import { Filter } from '../enums';
import { IFilterButtonProps } from "../interfaces";
import { StyledButton } from './Style';

export const FilterButton = (props: IFilterButtonProps): React.ReactElement => {
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid container item xs={2} direction="row" justify="center" alignItems="center">
                <span>{`ALL(${props.todoList.length})`}</span>
            </Grid>
            <Grid container item xs={10} direction="row" justify="center" alignItems="center">
                {Object.keys(Filter).map(filter => {
                    return <StyledButton id={`${filter}_filter`} key={filter} isactive={(props.filterType === filter).toString()} onClick={() => props.onClick(Filter[filter])}>{filter}</StyledButton>
                })}
            </Grid>
        </Grid>
    )
}