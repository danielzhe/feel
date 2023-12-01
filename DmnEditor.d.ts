import "@patternfly/react-core/dist/styles/base.css";
import "reactflow/dist/style.css";
import * as React from "react";
import { DmnLatestModel, AllDmnMarshallers } from "@kie-tools/dmn-marshaller";
import { PMML } from "@kie-tools/pmml-editor-marshaller";
import "@kie-tools/dmn-marshaller/dist/kie-extensions";
import "./DmnEditor.css";
export declare type DmnEditorRef = {
    reset: (mode: DmnLatestModel) => void;
};
export declare type EvaluationResults = Record<string, any>;
export declare type ValidationMessages = Record<string, any>;
export declare type OnDmnModelChange = (model: DmnLatestModel) => void;
export declare type OnRequestToJumpToPath = (relativePath: string) => void;
export declare type OnRequestToResolvePath = (relativePath: string) => string;
export declare type OnRequestExternalModelsAvailableToInclude = () => Promise<string[]>;
export declare type OnRequestExternalModelByPath = (relativePath: string) => Promise<ExternalModel | null>;
export declare type ExternalModelsIndex = Record<string, ExternalModel | undefined>;
export declare type ExternalModel = ({
    type: "dmn";
} & ExternalDmn) | ({
    type: "pmml";
} & ExternalPmml);
export declare type ExternalDmnsIndex = Map<string, ExternalDmn>;
export declare type ExternalDmn = {
    model: DmnLatestModel;
    relativePath: string;
    svg: string;
};
export declare type ExternalPmmlsIndex = Map<string, ExternalPmml>;
export declare type ExternalPmml = {
    model: PMML;
    relativePath: string;
};
export declare type DmnEditorProps = {
    model: DmnLatestModel;
    originalVersion?: AllDmnMarshallers["version"];
    onModelChange?: OnDmnModelChange;
    onRequestExternalModelByPath?: OnRequestExternalModelByPath;
    onRequestExternalModelsAvailableToInclude?: OnRequestExternalModelsAvailableToInclude;
    externalModelsByNamespace?: ExternalModelsIndex;
    evaluationResults?: EvaluationResults;
    validationMessages?: ValidationMessages;
    externalContextName?: string;
    externalContextDescription?: string;
    issueTrackerHref?: string;
    onRequestToJumpToPath?: OnRequestToJumpToPath;
    onRequestToResolvePath?: OnRequestToResolvePath;
};
export declare const DmnEditorInternal: ({ model, originalVersion, onModelChange, forwardRef, }: DmnEditorProps & {
    forwardRef?: React.Ref<DmnEditorRef> | undefined;
}) => JSX.Element;
export declare const DmnEditor: React.ForwardRefExoticComponent<DmnEditorProps & React.RefAttributes<DmnEditorRef>>;
export declare function usePrevious<T>(value: T): T;
export declare function useStateAsItWasBeforeConditionBecameTrue<T>(state: T, condition: boolean, set: (prev: T) => void): void;
//# sourceMappingURL=DmnEditor.d.ts.map