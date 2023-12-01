import { NODE_TYPES } from "../nodes/NodeTypes";
import { EDGE_TYPES } from "../edges/EdgeTypes";
declare type Values<T> = T[keyof T];
export declare type NodeType = Values<typeof NODE_TYPES>;
export declare type EdgeType = Values<typeof EDGE_TYPES>;
export declare const graphStructure: Map<NodeType, Map<EdgeType, Set<NodeType>>>;
export declare const outgoingStructure: {
    node_inputData: {
        nodes: NodeType[];
        edges: EdgeType[];
    };
    node_decision: {
        nodes: NodeType[];
        edges: EdgeType[];
    };
    node_bkm: {
        nodes: NodeType[];
        edges: EdgeType[];
    };
    node_decisionService: {
        nodes: NodeType[];
        edges: EdgeType[];
    };
    node_knowledgeSource: {
        nodes: NodeType[];
        edges: EdgeType[];
    };
    node_group: {
        nodes: NodeType[];
        edges: EdgeType[];
    };
    node_textAnnotation: {
        nodes: never[];
        edges: EdgeType[];
    };
};
export declare const containment: Map<NodeType, Set<NodeType>>;
export declare function getDefaultEdgeTypeBetween(source: NodeType, target: NodeType): EdgeType | undefined;
export declare function getEdgeTypesBetween(source: NodeType, target: NodeType): EdgeType[];
export {};
//# sourceMappingURL=graphStructure.d.ts.map