import * as React from "react";
import { OnRequestExternalModelsAvailableToInclude, OnRequestExternalModelByPath, ExternalModelsIndex } from "../DmnEditor";
export interface DmnEditorExternalModelsContextType {
    onRequestExternalModelByPath?: OnRequestExternalModelByPath;
    onRequestExternalModelsAvailableToInclude?: OnRequestExternalModelsAvailableToInclude;
    externalModelsByNamespace?: ExternalModelsIndex;
}
export declare function useExternalModels(): DmnEditorExternalModelsContextType;
export declare function DmnEditorExternalModelsContextProvider(_props: React.PropsWithChildren<DmnEditorExternalModelsContextType>): JSX.Element;
//# sourceMappingURL=DmnEditorDependenciesContext.d.ts.map