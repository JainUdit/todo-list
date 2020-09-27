/**
 * This interface defines props for AddTodo component.
 */
export interface IAddTodoProps {
    restrictedWordAlertOpen: boolean;
    onAdd: (taskName: string) => void;
    onAlertClose: () => void;
}