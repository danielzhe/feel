import * as RF from "reactflow";
import { EdgeType } from "./graphStructure";
import { DmnDiagramNodeData } from "../nodes/Nodes";
export declare function checkIsValidConnection(nodesById: Map<string, RF.Node<DmnDiagramNodeData>>, edgeOrConnection: RF.Edge | RF.Connection, ongoingConnectionEdgeType: EdgeType | undefined): boolean;
export declare function _checkIsValidConnection(sourceNode: {
    type?: string;
    data: DmnDiagramNodeData;
} | undefined, targetNode: {
    type?: string;
    data: DmnDiagramNodeData;
} | undefined, edgeType: string | null | undefined): boolean;
//# sourceMappingURL=isValidConnection.d.ts.map