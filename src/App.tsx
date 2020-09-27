import * as React from 'react';
import './App.css';
import { ConnectedAddTodo, TaskBox } from './redux-app';
import { Grid } from '@material-ui/core';

const App = (): React.ReactElement => (
  <Grid container direction="column" justify="center" alignItems="center">
    <Grid container justify="center" alignItems="center"><h1>Todos</h1></Grid>
    <Grid container><ConnectedAddTodo /></Grid>
    <Grid container><TaskBox /></Grid>
  </Grid>
)

export default App;
