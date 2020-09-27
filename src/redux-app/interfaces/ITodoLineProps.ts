/**
 * This interface defines props for TodoLine component.
 */
export interface ITodoLineProps {
    text: string;
    completed: boolean;
    onCompleteClick: () => void;
    onDelete: () => void;
}