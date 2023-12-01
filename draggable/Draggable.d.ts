import "./Draggable.css";
import * as React from "react";
export interface DraggableStateContext {
    source: number;
    dest: number;
    dragging: boolean;
    origin: number;
    leftOrigin: boolean;
}
export interface DraggableDispatchContext {
    onDragStart: (index: number) => void;
    onDragOver: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
    onDragEnd: (index: number) => void;
    onDragEnter: (index: number) => void;
    onDragLeave: (index: number) => void;
}
export declare const DraggableStateContext: React.Context<DraggableStateContext>;
export declare const DraggableDispatchContext: React.Context<DraggableDispatchContext>;
export declare const DraggableItemContext: React.Context<{
    hovered: boolean;
}>;
export declare function useDraggableStateContext(): DraggableStateContext;
export declare function useDraggableDispatchContext(): DraggableDispatchContext;
export declare function useDraggableItemContext(): {
    hovered: boolean;
};
export declare type DraggableReorderFunction = (source: number, dest: number) => void;
export declare function DragAndDrop({ reorder, onDragEnd, values, draggableItem, isDisabled, }: {
    reorder: DraggableReorderFunction;
    onDragEnd?: (source: number, dest: number) => void;
    values?: any[];
    draggableItem?: (value: any, index: number) => React.ReactNode;
    isDisabled: boolean;
}): JSX.Element;
export declare function Draggable(props: {
    index: number;
    children: React.ReactNode;
    style?: React.CSSProperties;
    handlerStyle?: React.CSSProperties;
    rowStyle?: React.CSSProperties;
    rowClassName?: string;
    childrenStyle?: React.CSSProperties;
    childrenClassName?: string;
    itemStyle?: React.CSSProperties;
    itemClassName?: string;
}): JSX.Element;
//# sourceMappingURL=Draggable.d.ts.map