import { DC__Bounds, DMN15__tDecision, DMN15__tDefinitions } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { EdgeType, NodeType } from "../diagram/connections/graphStructure";
export declare function addConnectedNode({ definitions, drdIndex, sourceNode, newNode, edge, }: {
    definitions: DMN15__tDefinitions;
    drdIndex: number;
    sourceNode: {
        type: NodeType;
        href: string;
        bounds: DC__Bounds;
        shapeId: string | undefined;
    };
    newNode: {
        type: NodeType;
        bounds: DC__Bounds;
    };
    edge: EdgeType;
}): {
    id: string;
    href: string;
};
export declare function getRequirementsFromEdge(sourceNode: {
    type: NodeType;
    href: string;
}, newEdgeId: string, edge: EdgeType): (Pick<DMN15__tDecision, "informationRequirement"> & Pick<DMN15__tDecision, "knowledgeRequirement"> & Pick<DMN15__tDecision, "authorityRequirement">) | undefined;
//# sourceMappingURL=addConnectedNode.d.ts.map