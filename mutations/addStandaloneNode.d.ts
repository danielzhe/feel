import { DC__Bounds, DMN15__tDefinitions } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { NodeType } from "../diagram/connections/graphStructure";
export declare function addStandaloneNode({ definitions, drdIndex, newNode, }: {
    definitions: DMN15__tDefinitions;
    drdIndex: number;
    newNode: {
        type: NodeType;
        bounds: DC__Bounds;
    };
}): {
    id: string;
    href: string;
    shapeId: string;
};
//# sourceMappingURL=addStandaloneNode.d.ts.map