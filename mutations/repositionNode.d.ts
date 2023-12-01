import { DMN15__tDefinitions } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { NodeType } from "../diagram/connections/graphStructure";
export declare function repositionNode({ definitions, drdIndex, controlWaypointsByEdge, change, }: {
    controlWaypointsByEdge: Map<number, Set<number>>;
    definitions: DMN15__tDefinitions;
    drdIndex: number;
    change: {
        nodeType: NodeType;
        shapeIndex: number;
        sourceEdgeIndexes: number[];
        targetEdgeIndexes: number[];
        selectedEdges: string[];
    } & ({
        type: "absolute";
        position: {
            x: number;
            y: number;
        };
    } | {
        type: "offset";
        offset: {
            deltaX: number;
            deltaY: number;
        };
    });
}): {
    delta: {
        x: number;
        y: number;
    };
    newPosition: {
        x: number;
        y: number;
    };
};
//# sourceMappingURL=repositionNode.d.ts.map