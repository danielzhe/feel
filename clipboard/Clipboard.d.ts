import { DMN15__tDefinitions, DMN15__tItemDefinition, DMNDI15__DMNEdge, DMNDI15__DMNShape } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { Unpacked } from "../tsExt/tsExt";
import * as RF from "reactflow";
import { State } from "../store/Store";
import { DmnDiagramNodeData } from "../diagram/nodes/Nodes";
import { DmnDiagramEdgeData } from "../diagram/edges/Edges";
import { KIE, Namespaced } from "@kie-tools/dmn-marshaller/dist/kie-extensions";
import { KIE__tComponentWidths } from "@kie-tools/dmn-marshaller/dist/schemas/kie-1_0/ts-gen/types";
import { DataType } from "../dataTypes/DataTypes";
export declare const DMN_EDITOR_DIAGRAM_CLIPBOARD_MIME_TYPE: "application/json+kie-dmn-editor--diagram";
export declare const DMN_EDITOR_BOXED_EXPRESSION_CLIPBOARD_MIME_TYPE: "application/json+kie-dmn-editor--boxed-expression";
export declare const DMN_EDITOR_DATA_TYPES_CLIPBOARD_MIME_TYPE: "application/json+kie-dmn-editor--data-types";
export declare type DmnEditorDataTypesClipboard = {
    mimeType: typeof DMN_EDITOR_DATA_TYPES_CLIPBOARD_MIME_TYPE;
    namespaceWhereClipboardWasCreatedFrom: string;
    namespace: string;
    itemDefinitions: DMN15__tItemDefinition[];
};
export declare type DmnEditorDiagramClipboard = {
    mimeType: typeof DMN_EDITOR_DIAGRAM_CLIPBOARD_MIME_TYPE;
    namespaceWhereClipboardWasCreatedFrom: string;
    drgElements: NonNullable<Unpacked<DMN15__tDefinitions["drgElement"]>>[];
    artifacts: NonNullable<Unpacked<DMN15__tDefinitions["artifact"]>>[];
    widths: Namespaced<KIE, KIE__tComponentWidths>[];
    shapes: DMNDI15__DMNShape[];
    edges: DMNDI15__DMNEdge[];
};
export declare function buildClipboardFromDiagram(rfState: RF.ReactFlowState, dmnEditorState: State): {
    clipboard: DmnEditorDiagramClipboard;
    copiedEdgesById: Map<string, RF.Edge<DmnDiagramEdgeData>>;
    copiedNodesById: Map<string, RF.Node<DmnDiagramNodeData<import("../diagram/nodes/Nodes").NodeDmnObjects>, string | undefined>>;
    danglingEdgesById: Map<string, RF.Edge<DmnDiagramEdgeData>>;
};
export declare function buildClipboardFromDataType(dataType: DataType, thisDmnsNamespace: string): DmnEditorDataTypesClipboard;
export declare function getClipboard<T extends {
    mimeType: string;
}>(text: string, mimeType: string): T | undefined;
//# sourceMappingURL=Clipboard.d.ts.map