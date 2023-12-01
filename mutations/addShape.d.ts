import { DMN15__tDefinitions, DMNDI15__DMNShape } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { NodeType } from "../diagram/connections/graphStructure";
export declare function addShape({ definitions, drdIndex, nodeType, shape, }: {
    definitions: DMN15__tDefinitions;
    drdIndex: number;
    nodeType: NodeType;
    shape: WithoutIdXmlAttributes<DMNDI15__DMNShape>;
}): void;
export declare type WithoutIdXmlAttributes<T> = {
    [K in keyof T]: K extends "@_id" ? never : WithoutIdXmlAttributes<T[K]>;
};
//# sourceMappingURL=addShape.d.ts.map