import { DC__Bounds, DMN15__tDefinitions, DMNDI15__DMNEdge } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { PositionalNodeHandleId } from "../diagram/connections/PositionalNodeHandles";
import { EdgeType, NodeType } from "../diagram/connections/graphStructure";
import { DmnDiagramNodeData } from "../diagram/nodes/Nodes";
export declare function addEdge({ definitions, drdIndex, sourceNode, targetNode, edge, keepWaypoints, }: {
    definitions: DMN15__tDefinitions;
    drdIndex: number;
    sourceNode: {
        type: NodeType;
        data: DmnDiagramNodeData;
        href: string;
        bounds: DC__Bounds;
        shapeId: string | undefined;
    };
    targetNode: {
        type: NodeType;
        data: DmnDiagramNodeData;
        href: string;
        bounds: DC__Bounds;
        shapeId: string | undefined;
        index: number;
    };
    edge: {
        type: EdgeType;
        targetHandle: PositionalNodeHandleId;
        sourceHandle: PositionalNodeHandleId;
    };
    keepWaypoints: boolean;
}): {
    newDmnEdge: {
        __$$element: "dmndi:DMNEdge";
    } & DMNDI15__DMNEdge;
};
//# sourceMappingURL=addEdge.d.ts.map