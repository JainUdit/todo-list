export interface ITodoLineProps {
    text: string;
    completed: boolean;
    onCompleteClick: () => void;
    onDelete: () => void;
}