/// <reference types="react" />
import { DMN15__tItemDefinition } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { UniqueNameIndex } from "../Dmn15Spec";
export declare function DataTypeName({ isReadonly, itemDefinition, isActive, editMode, relativeToNamespace, shouldCommitOnBlur, allUniqueNames, enableAutoFocusing, }: {
    isReadonly: boolean;
    editMode: "hover" | "double-click";
    itemDefinition: DMN15__tItemDefinition;
    isActive: boolean;
    relativeToNamespace: string;
    shouldCommitOnBlur?: boolean;
    allUniqueNames: UniqueNameIndex;
    enableAutoFocusing?: boolean;
}): JSX.Element;
//# sourceMappingURL=DataTypeName.d.ts.map