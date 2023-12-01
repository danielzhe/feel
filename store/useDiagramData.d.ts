import { DMNDI15__DMNEdge, DMNDI15__DMNShape } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import * as RF from "reactflow";
import { NodeType } from "../diagram/connections/graphStructure";
import { DmnDiagramEdgeData } from "../diagram/edges/Edges";
import { DmnDiagramNodeData, NodeDmnObjects } from "../diagram/nodes/Nodes";
import { XmlQName } from "@kie-tools/xml-parser-ts/dist/qNames";
import { ExternalDmnsIndex } from "../DmnEditor";
export declare const diagramColors: {
    hierarchyUp: string;
    hierarchyDown: string;
    selected: string;
};
export declare function useDiagramData(externalDmnsByNamespace: ExternalDmnsIndex): {
    drgElementsWithoutVisualRepresentationOnCurrentDrd: string[];
    dmnShapesByHref: Map<string, DMNDI15__DMNShape & {
        index: number;
        dmnElementRefQName: XmlQName;
    }>;
    dmnEdgesByDmnElementRef: Map<string, DMNDI15__DMNEdge & {
        index: number;
    }>;
    nodesById: Map<string, RF.Node<DmnDiagramNodeData<NodeDmnObjects>, string | undefined>>;
    edgesById: Map<string, RF.Edge<DmnDiagramEdgeData>>;
    nodes: RF.Node<DmnDiagramNodeData<NodeDmnObjects>, string | undefined>[];
    edges: RF.Edge<DmnDiagramEdgeData>[];
    selectedNodeTypes: Set<NodeType>;
    selectedNodesById: Map<string, RF.Node<DmnDiagramNodeData<NodeDmnObjects>, string | undefined>>;
    selectedEdgesById: Map<string, RF.Edge<DmnDiagramEdgeData>>;
};
export declare function assignClassesToHighlightedHierarchyNodes(selected: string[], nodes: Map<string, RF.Node>, edges: RF.Edge[]): void;
//# sourceMappingURL=useDiagramData.d.ts.map