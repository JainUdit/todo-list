import { Dispatch } from "redux";
import { connect } from 'react-redux';
import { deleteTodo, markTodoComplete } from "../actions";
import { TodoWrapper } from "../components";
import { ITodo, ITodoListGlobalState } from "../interfaces";
import { getFilteredTodos } from "../selectors";

interface IStateProps {
    todos: Array<ITodo>
}

interface IDispatchProps {
    onCompleteClick: (id: number) => void;
    onDelete: (id: number) => void;
}

const mapStateToProps = (state: ITodoListGlobalState): IStateProps => ({
    todos: getFilteredTodos(state)
});

const mapDispatchToPrpos = (dispatch: Dispatch): IDispatchProps => ({
    onCompleteClick: (id: number) => dispatch(markTodoComplete(id)),
    onDelete: (id: number) => dispatch(deleteTodo(id))
});

export const ConnectedTodoWrapper = connect(mapStateToProps, mapDispatchToPrpos)(TodoWrapper);