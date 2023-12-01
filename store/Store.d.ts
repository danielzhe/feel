/// <reference types="react" />
import * as RF from "reactflow";
import { StoreApi, UseBoundStore } from "zustand";
import { WithImmer } from "zustand/middleware/immer";
import { DmnLatestModel } from "@kie-tools/dmn-marshaller";
import { DmnDiagramNodeData } from "../diagram/nodes/Nodes";
export interface DmnEditorDiagramNodeStatus {
    selected: boolean;
    dragging: boolean;
    resizing: boolean;
}
export interface DmnEditorDiagramEdgeStatus {
    selected: boolean;
    draggingWaypoint: boolean;
}
export interface DmnEditorDiagramDividerLineStatus {
    moving: boolean;
}
export interface SnapGrid {
    isEnabled: boolean;
    x: number;
    y: number;
}
export declare enum DiagramNodesPanel {
    NONE = "NONE",
    DRG_NODES = "DRG_NODES",
    EXTERNAL_NODES = "EXTERNAL_NODES"
}
export declare type DropTargetNode = undefined | RF.Node<DmnDiagramNodeData>;
export interface State {
    dispatch: Dispatch;
    dmn: {
        model: DmnLatestModel;
    };
    focus: {
        consumableId: string | undefined;
    };
    boxedExpressionEditor: {
        activeDrgElementId: string | undefined;
        selectedObjectId: string | undefined;
        propertiesPanel: {
            isOpen: boolean;
        };
    };
    dataTypesEditor: {
        activeItemDefinitionId: string | undefined;
        expandedItemComponentIds: string[];
    };
    navigation: {
        tab: DmnEditorTab;
    };
    diagram: {
        drdIndex: number;
        edgeIdBeingUpdated: string | undefined;
        dropTargetNode: DropTargetNode;
        ongoingConnection: RF.OnConnectStartParams | undefined;
        propertiesPanel: {
            isOpen: boolean;
            elementId: string | undefined;
        };
        overlaysPanel: {
            isOpen: boolean;
        };
        openNodesPanel: DiagramNodesPanel;
        drdSelector: {
            isOpen: boolean;
        };
        overlays: {
            enableNodeHierarchyHighlight: boolean;
            enableExecutionHitsHighlights: boolean;
            enableCustomNodeStyles: boolean;
            enableDataTypesToolbarOnNodes: boolean;
            enableStyles: boolean;
        };
        snapGrid: SnapGrid;
        _selectedNodes: Array<string>;
        _selectedEdges: Array<string>;
        draggingNodes: Array<string>;
        resizingNodes: Array<string>;
        draggingWaypoints: Array<string>;
        movingDividerLines: Array<string>;
        editingStyle: boolean;
    };
}
export declare type Dispatch = {
    dmn: {
        reset: (model: State["dmn"]["model"]) => void;
    };
    boxedExpressionEditor: {
        open: (state: State, id: string) => void;
        close: (state: State) => void;
    };
    diagram: {
        setNodeStatus: (state: State, nodeId: string, status: Partial<DmnEditorDiagramNodeStatus>) => void;
        setEdgeStatus: (state: State, edgeId: string, status: Partial<DmnEditorDiagramEdgeStatus>) => void;
        setDividerLineStatus: (state: State, decisionServiceId: string, status: Partial<DmnEditorDiagramDividerLineStatus>) => void;
    };
};
export declare enum DmnEditorTab {
    EDITOR = 0,
    DATA_TYPES = 1,
    INCLUDED_MODELS = 2
}
export declare const NODE_LAYERS: {
    GROUP_NODE: number;
    NODES: number;
    DECISION_SERVICE_NODE: number;
    NESTED_NODES: number;
};
declare type ExtractState = StoreApi<State> extends {
    getState: () => infer T;
} ? T : never;
export declare function useDmnEditorStore<StateSlice = ExtractState>(selector: (state: State) => StateSlice, equalityFn?: (a: StateSlice, b: StateSlice) => boolean): StateSlice;
export declare function useDmnEditorStoreApi(): StoreApiType;
export declare const DmnEditorStoreApiContext: import("react").Context<StoreApiType>;
export declare type StoreApiType = UseBoundStore<WithImmer<StoreApi<State>>>;
export declare const defaultStaticState: () => {
    boxedExpressionEditor: {
        activeDrgElementId: undefined;
        selectedObjectId: undefined;
        propertiesPanel: {
            isOpen: boolean;
        };
    };
    navigation: {
        tab: DmnEditorTab;
    };
    diagram: {
        drdIndex: number;
        edgeIdBeingUpdated: undefined;
        dropTargetNode: undefined;
        ongoingConnection: undefined;
        propertiesPanel: {
            isOpen: boolean;
            elementId: undefined;
        };
        overlaysPanel: {
            isOpen: boolean;
        };
        openNodesPanel: DiagramNodesPanel;
        drdSelector: {
            isOpen: boolean;
        };
        overlays: {
            enableNodeHierarchyHighlight: boolean;
            enableExecutionHitsHighlights: boolean;
            enableCustomNodeStyles: boolean;
            enableDataTypesToolbarOnNodes: boolean;
            enableStyles: boolean;
        };
        snapGrid: {
            isEnabled: boolean;
            x: number;
            y: number;
        };
        _selectedNodes: never[];
        _selectedEdges: never[];
        draggingNodes: never[];
        resizingNodes: never[];
        draggingWaypoints: never[];
        movingDividerLines: never[];
        editingStyle: boolean;
    };
};
export declare function createDmnEditorStore(model: State["dmn"]["model"]): UseBoundStore<WithImmer<StoreApi<State>>>;
export {};
//# sourceMappingURL=Store.d.ts.map