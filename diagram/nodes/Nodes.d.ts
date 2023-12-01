import { DMN15__tBusinessKnowledgeModel, DMN15__tDecision, DMN15__tDecisionService, DMN15__tDefinitions, DMN15__tGroup, DMN15__tInputData, DMN15__tKnowledgeSource, DMN15__tTextAnnotation, DMNDI15__DMNShape } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import * as React from "react";
import * as RF from "reactflow";
import { DropTargetNode, SnapGrid } from "../../store/Store";
import { NodeType } from "../connections/graphStructure";
import { XmlQName } from "@kie-tools/xml-parser-ts/dist/qNames";
import { Unpacked } from "../../tsExt/tsExt";
import { OnCreateDataType } from "../../dataTypes/TypeRefSelector";
export declare type NodeDmnObjects = Unpacked<DMN15__tDefinitions["drgElement"] | DMN15__tDefinitions["artifact"]> | null;
export declare type DmnDiagramNodeData<T extends NodeDmnObjects = NodeDmnObjects> = {
    dmnObjectNamespace: string | undefined;
    dmnObjectQName: XmlQName;
    dmnObject: T;
    shape: DMNDI15__DMNShape & {
        index: number;
    };
    index: number;
    parentRfNode: RF.Node<DmnDiagramNodeData> | undefined;
};
export declare const InputDataNode: React.MemoExoticComponent<({ data: { dmnObject: inputData, shape, index, dmnObjectQName }, selected, dragging, zIndex, type, id, }: RF.NodeProps<DmnDiagramNodeData<DMN15__tInputData & {
    __$$element: "inputData";
}>>) => JSX.Element>;
export declare const DecisionNode: React.MemoExoticComponent<({ data: { parentRfNode, dmnObject: decision, shape, index, dmnObjectQName }, selected, dragging, zIndex, type, id, }: RF.NodeProps<DmnDiagramNodeData<DMN15__tDecision & {
    __$$element: "decision";
}>>) => JSX.Element>;
export declare const BkmNode: React.MemoExoticComponent<({ data: { dmnObject: bkm, shape, index, dmnObjectQName }, selected, dragging, zIndex, type, id, }: RF.NodeProps<DmnDiagramNodeData<DMN15__tBusinessKnowledgeModel & {
    __$$element: "businessKnowledgeModel";
}>>) => JSX.Element>;
export declare const KnowledgeSourceNode: React.MemoExoticComponent<({ data: { dmnObject: knowledgeSource, shape, index, dmnObjectQName }, selected, dragging, zIndex, type, id, }: RF.NodeProps<DmnDiagramNodeData<DMN15__tKnowledgeSource & {
    __$$element: "knowledgeSource";
}>>) => JSX.Element>;
export declare const TextAnnotationNode: React.MemoExoticComponent<({ data: { dmnObject: textAnnotation, shape, index, dmnObjectQName }, selected, dragging, zIndex, type, id, }: RF.NodeProps<DmnDiagramNodeData<DMN15__tTextAnnotation & {
    __$$element: "textAnnotation";
}>>) => JSX.Element>;
export declare const DecisionServiceNode: React.MemoExoticComponent<({ data: { dmnObject: decisionService, shape, index, dmnObjectQName }, selected, dragging, zIndex, type, id, }: RF.NodeProps<DmnDiagramNodeData<DMN15__tDecisionService & {
    __$$element: "decisionService";
}>>) => JSX.Element>;
export declare const GroupNode: React.MemoExoticComponent<({ data: { dmnObject: group, shape, index, dmnObjectQName }, selected, dragging, zIndex, type, id, }: RF.NodeProps<DmnDiagramNodeData<DMN15__tGroup & {
    __$$element: "group";
}>>) => JSX.Element>;
export declare const UnknownNode: React.MemoExoticComponent<({ data: { shape, dmnObjectQName }, selected, dragging, zIndex, type, id, }: RF.NodeProps<DmnDiagramNodeData<null>>) => JSX.Element>;
export declare function EmptyLabel(): JSX.Element;
export declare function NodeResizerHandle(props: {
    snapGrid: SnapGrid;
    nodeId: string;
    nodeType: NodeType;
    nodeShapeIndex: number;
}): JSX.Element;
export declare function useConnection(nodeId: string): {
    source: string | null;
    target: string | null;
    sourceHandle: string | null;
    targetHandle: null;
};
export declare function useConnectionTargetStatus(nodeId: string, isHovered: boolean): {
    isTargeted: boolean;
    isValidConnectionTarget: boolean;
    isConnecting: boolean;
};
export declare function useNodeClassName(dropTargetNode: DropTargetNode, isConnecting: boolean, isValidConnectionTarget: boolean, nodeId: string): "normal" | "dimmed" | "drop-target" | "drop-target-invalid";
export declare function useDataTypeCreationCallbackForNodes(index: number, drgElementName: string): OnCreateDataType;
//# sourceMappingURL=Nodes.d.ts.map