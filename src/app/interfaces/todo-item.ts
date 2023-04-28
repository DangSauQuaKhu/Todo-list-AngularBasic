export interface TodoItem {
    title: string;
    completed?: boolean;
    removed?: boolean;
    timeRemove?: Date;
    timeBegin?: Date;
    days?: number;
}

