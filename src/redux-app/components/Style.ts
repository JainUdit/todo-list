import styled from '@emotion/styled'
import { Button, Grid } from '@material-ui/core'


export const StyledButton = styled(Button)<{ isactive: string }>(
    (props) => `
    color: ${props.isactive === 'true' ? 'blue' : 'black'};
    margin: 4px;
`);

export const StyledTaskBox = styled(Grid)`
    border: 1px solid #ccc;
    margin: 16px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    border-radius: 16px;
    background-color: #e2e2e2;
`;

export const StyledTodoLine = styled(Grid)`
    border: 1px solid #ccc;
    padding: 8px 16px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    border-radius: 40px;
    margin-bottom: 8px;
    background-color: #fff;
`

export const StyledTodoWrapper = styled(Grid)`
    padding: 8px;
`

export const StyledAddTodo = styled(Grid)`
    margin: 10px;

    .addTasksField{
        width: 50%;
    }

    .alertBar{
        margin: 5px;
    }
`