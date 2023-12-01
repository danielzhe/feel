import { DMN15__tDefinitions, DMN15__tItemDefinition } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
export declare function addTopLevelItemDefinition({ definitions, partial, }: {
    definitions: DMN15__tDefinitions;
    partial?: Partial<DMN15__tItemDefinition>;
}): {
    __?: undefined;
    "@_typeLanguage": string;
    "@_isCollection": boolean;
    itemComponent?: DMN15__tItemDefinition[] | undefined;
    functionItem?: import("@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types").DMN15__tFunctionItem | undefined;
    typeRef?: {
        __$$text: string;
    } | undefined;
    allowedValues?: import("@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types").DMN15__tUnaryTests | undefined;
    typeConstraint?: import("@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types").DMN15__tUnaryTests | undefined;
    "@_name": string;
    "@_id": string;
    "@_label"?: string | undefined;
    description?: {
        __$$text: string;
    } | undefined;
    extensionElements?: import("@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types").DMN15__tItemDefinition__extensionElements | undefined;
};
//# sourceMappingURL=addTopLevelItemDefinition.d.ts.map