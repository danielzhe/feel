import { DMN15__tDefinitions, DMNDI15__DMNShape } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { NodeType } from "../diagram/connections/graphStructure";
import { SnapGrid } from "../store/Store";
export declare function resizeNode({ definitions, drdIndex, dmnShapesByHref, snapGrid, change, }: {
    definitions: DMN15__tDefinitions;
    drdIndex: number;
    dmnShapesByHref: Map<string, DMNDI15__DMNShape & {
        index: number;
    }>;
    snapGrid: SnapGrid;
    change: {
        nodeType: NodeType;
        isExternal: boolean;
        index: number;
        shapeIndex: number;
        dimension: {
            "@_width": number;
            "@_height": number;
        };
        sourceEdgeIndexes: number[];
        targetEdgeIndexes: number[];
    };
}): void;
//# sourceMappingURL=resizeNode.d.ts.map