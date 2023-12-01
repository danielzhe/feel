import * as React from "react";
import { DmnEditorProps } from "./DmnEditor";
import { DmnLatestModel } from "@kie-tools/dmn-marshaller";
export declare type DmnEditorContextProviderProps = Pick<DmnEditorProps, "externalContextDescription" | "externalContextName" | "issueTrackerHref" | "model" | "onRequestToJumpToPath" | "onRequestToResolvePath">;
export declare type DmnModelBeforeEditing = DmnLatestModel;
export declare type DmnEditorContextType = Pick<DmnEditorContextProviderProps, "externalContextDescription" | "externalContextName" | "issueTrackerHref" | "onRequestToJumpToPath" | "onRequestToResolvePath"> & {
    dmnModelBeforeEditingRef: React.MutableRefObject<DmnModelBeforeEditing>;
    dmnEditorRootElementRef: React.RefObject<HTMLDivElement>;
};
export declare function useDmnEditor(): DmnEditorContextType;
export declare function DmnEditorContextProvider(props: React.PropsWithChildren<DmnEditorContextProviderProps>): JSX.Element;
//# sourceMappingURL=DmnEditorContext.d.ts.map