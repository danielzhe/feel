import * as RF from "reactflow";
import { DmnDiagramEdgeData } from "../edges/Edges";
export declare type AdjMatrix = Record<string, undefined | Record<string, undefined | {
    direction: HierarchyDirection;
    edge: RF.Edge;
}>>;
export declare type HierarchyDirection = "up" | "down";
export declare function getAdjMatrix(edges: RF.Edge<any>[]): AdjMatrix;
export declare type NodeVisitor = (nodeId: string, traversalDirection: HierarchyDirection) => void;
export declare type EdgeVisitor = (edge: RF.Edge<DmnDiagramEdgeData>, traversalDirection: HierarchyDirection) => void;
export declare function traverse(__adjMatrix: AdjMatrix, originalStartingNodeIds: Set<string>, curNodeIds: string[], traversalDirection: HierarchyDirection, nodeVisitor?: NodeVisitor, edgeVisitor?: EdgeVisitor, visited?: Set<string>): void;
export declare function buildHierarchy({ nodeId, edges, }: {
    nodeId: string | undefined | null;
    edges: RF.Edge<DmnDiagramEdgeData>[];
}): {
    dependencies: Set<string>;
    dependents: Set<string>;
};
//# sourceMappingURL=graph.d.ts.map