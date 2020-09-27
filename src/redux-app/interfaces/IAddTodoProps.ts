export interface IAddTodoProps {
    restrictedWordPopUpOpen: boolean;
    onAdd: (taskName: string) => void;
    onAlertClose: () => void;
}