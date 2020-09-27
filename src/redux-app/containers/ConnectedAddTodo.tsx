import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addTodo, restrictedWordClosePopup } from '../actions';
import { AddTodo } from '../components';
import { ITodoListGlobalState } from '../interfaces';

interface IStateProps {
    restrictedWordPopUpOpen: boolean;
}

interface IDispatchProps {
    onAdd: (taskName: string) => void;
    onAlertClose: () => void;
}

const mapStateToProps = (state: ITodoListGlobalState): IStateProps => ({
    restrictedWordPopUpOpen: state.domain.restrictedWordPopUpOpen
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
    onAdd: (taskName: string) => dispatch(addTodo(taskName)),
    onAlertClose: () => dispatch(restrictedWordClosePopup())
});

export const ConnectedAddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

