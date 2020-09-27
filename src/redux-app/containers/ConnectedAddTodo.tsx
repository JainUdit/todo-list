import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addTodo, restrictedWordCloseAlert } from '../actions';
import { AddTodo } from '../components';
import { ITodoListGlobalState } from '../interfaces';

interface IStateProps {
    restrictedWordAlertOpen: boolean;
}

interface IDispatchProps {
    onAdd: (taskName: string) => void;
    onAlertClose: () => void;
}

const mapStateToProps = (state: ITodoListGlobalState): IStateProps => ({
    restrictedWordAlertOpen: state.domain.restrictedWordAlertOpen
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
    onAdd: (taskName: string) => dispatch(addTodo(taskName)),
    onAlertClose: () => dispatch(restrictedWordCloseAlert())
});

export const ConnectedAddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

