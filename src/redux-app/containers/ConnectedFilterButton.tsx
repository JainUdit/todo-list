import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setFilter } from '../actions';
import { FilterButton } from '../components';
import { ITodo, ITodoListGlobalState } from '../interfaces';
import { Filter } from '../enums';

interface IStateProps {
    todoList: Array<ITodo>;
    filterType: Filter;
}

interface IDispatchProps {
    onClick: (filterType: Filter) => void;
}

const mapStateToProps = (state: ITodoListGlobalState): IStateProps => ({
    todoList: state.domain.todoList,
    filterType: state.domain.filterType
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
    onClick: (filterType: Filter) => dispatch(setFilter(filterType))
});

export const ConnectedFilterButton = connect(mapStateToProps, mapDispatchToProps)(FilterButton)