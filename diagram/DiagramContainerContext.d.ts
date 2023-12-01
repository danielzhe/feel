import * as React from "react";
export interface DiagramContainerContextType {
    container: React.RefObject<HTMLElement>;
}
export declare function useDmnEditorDiagramContainer(): DiagramContainerContextType;
export declare function DiagramContainerContextProvider({ container, children, }: React.PropsWithChildren<{
    container: React.RefObject<HTMLElement>;
}>): JSX.Element;
//# sourceMappingURL=DiagramContainerContext.d.ts.map