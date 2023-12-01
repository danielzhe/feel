import * as React from "react";
import * as RF from "reactflow";
import { NodeType } from "../diagram/connections/graphStructure";
import { DMN15__tImport, DMNDI15__DMNEdge, DMNDI15__DMNShape } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { DmnDiagramNodeData } from "../diagram/nodes/Nodes";
import { DmnDiagramEdgeData } from "../diagram/edges/Edges";
import { DataTypeIndex, DataType } from "../dataTypes/DataTypes";
import { UniqueNameIndex } from "../Dmn15Spec";
import { ExternalPmmlsIndex, ExternalDmnsIndex } from "../DmnEditor";
export declare type DerivedStore = {
    selectedNodeTypes: Set<NodeType>;
    isDropTargetNodeValidForSelection: boolean;
    isDiagramEditingInProgress: boolean;
    nodes: RF.Node[];
    edges: RF.Edge[];
    nodesById: Map<string, RF.Node<DmnDiagramNodeData>>;
    edgesById: Map<string, RF.Edge<DmnDiagramEdgeData>>;
    selectedNodesById: Map<string, RF.Node<DmnDiagramNodeData>>;
    selectedEdgesById: Map<string, RF.Edge<DmnDiagramEdgeData>>;
    importsByNamespace: Map<string, DMN15__tImport>;
    dataTypesTree: DataType[];
    allDataTypesById: DataTypeIndex;
    allTopLevelDataTypesByFeelName: DataTypeIndex;
    dmnEdgesByDmnElementRef: Map<string, DMNDI15__DMNEdge & {
        index: number;
    }>;
    dmnShapesByHref: Map<string, DMNDI15__DMNShape & {
        index: number;
    }>;
    drgElementsWithoutVisualRepresentationOnCurrentDrd: string[];
    allFeelVariableUniqueNames: UniqueNameIndex;
    allTopLevelItemDefinitionUniqueNames: UniqueNameIndex;
    externalDmnsByNamespace: ExternalDmnsIndex;
    externalPmmlsByNamespace: ExternalPmmlsIndex;
};
export declare function useDmnEditorDerivedStore(): DerivedStore;
export declare function DmnEditorDerivedStoreContextProvider(props: React.PropsWithChildren<{}>): JSX.Element;
//# sourceMappingURL=DerivedStore.d.ts.map