import { DmnBuiltInDataType } from "@kie-tools/boxed-expression-component/dist/api";
import { DMN15__tBusinessKnowledgeModel, DMN15__tDecision, DMN15__tDefinitions, DMN15__tItemDefinition } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { DataTypeIndex } from "./DataTypes";
import { KIE__tConstraintType } from "@kie-tools/dmn-marshaller/dist/schemas/kie-1_0/ts-gen/types";
export declare function findDataTypeById({ definitions, itemDefinitionId, allDataTypesById, }: {
    allDataTypesById: DataTypeIndex;
    itemDefinitionId: string;
    definitions: DMN15__tDefinitions;
}): {
    items: DMN15__tItemDefinition[];
    itemDefinition: DMN15__tItemDefinition;
    index: number;
};
export declare function getNewItemDefinition(partial?: Partial<DMN15__tItemDefinition>): {
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
export declare function isStruct(itemDefinition: DMN15__tItemDefinition): boolean;
export declare const constrainableBuiltInFeelTypes: Map<DmnBuiltInDataType, KIE__tConstraintType[]>;
export declare function canHaveConstraints(itemDefinition: DMN15__tItemDefinition): boolean;
export declare function traverseItemDefinitions(items: DMN15__tItemDefinition[], consumer: (itemDefinition: DMN15__tItemDefinition) => void): void;
export declare type AllExpressions = NonNullable<DMN15__tDecision["expression"]>;
export declare type AllExpressionsWithoutTypes = Omit<AllExpressions, "__$$element">;
export declare type AllExpressionTypes = AllExpressions["__$$element"];
export declare function traverseTypeRefedInExpressionHolders(expressionHolder: (DMN15__tDecision & {
    __$$element: "decision";
}) | (DMN15__tBusinessKnowledgeModel & {
    __$$element: "businessKnowledgeModel";
}), consumer: (typed: {
    "@_typeRef"?: string;
}) => void): void;
export declare function traverseTypeRefedInExpressions(expression: AllExpressionsWithoutTypes | undefined, __$$element: AllExpressionTypes | undefined, consumer: (typed: {
    "@_typeRef"?: string;
}) => void): void;
export declare function traverseExpressionsInExpressionHolders(expressionHolder: (DMN15__tDecision & {
    __$$element: "decision";
}) | (DMN15__tBusinessKnowledgeModel & {
    __$$element: "businessKnowledgeModel";
}), consumer: (expression: AllExpressionsWithoutTypes | undefined, __$$element: AllExpressionTypes | undefined) => void): void;
export declare function traverseExpressions(expression: AllExpressionsWithoutTypes | undefined, __$$element: AllExpressionTypes | undefined, consumer: (expression: AllExpressionsWithoutTypes | undefined, __$$element: AllExpressionTypes | undefined) => void): void;
//# sourceMappingURL=DataTypeSpec.d.ts.map