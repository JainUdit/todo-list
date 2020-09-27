import * as React from "react";
import { ConnectedFilterButton, ConnectedTodoWrapper } from "../containers";
import { StyledTaskBox } from "./Style";

export const TaskBox = (): React.ReactElement => (
    <StyledTaskBox container direction="column" justify="center" alignItems="center">
        <ConnectedTodoWrapper />
        <ConnectedFilterButton />
    </StyledTaskBox>
)