"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDmnEditorStore = exports.defaultStaticState = exports.DmnEditorStoreApiContext = exports.useDmnEditorStoreApi = exports.useDmnEditorStore = exports.NODE_LAYERS = exports.DmnEditorTab = exports.DiagramNodesPanel = void 0;
var react_1 = require("react");
var zustand_1 = require("zustand");
var immer_1 = require("zustand/middleware/immer");
var traditional_1 = require("zustand/traditional");
var DiagramNodesPanel;
(function (DiagramNodesPanel) {
    DiagramNodesPanel["NONE"] = "NONE";
    DiagramNodesPanel["DRG_NODES"] = "DRG_NODES";
    DiagramNodesPanel["EXTERNAL_NODES"] = "EXTERNAL_NODES";
})(DiagramNodesPanel = exports.DiagramNodesPanel || (exports.DiagramNodesPanel = {}));
var DmnEditorTab;
(function (DmnEditorTab) {
    DmnEditorTab[DmnEditorTab["EDITOR"] = 0] = "EDITOR";
    DmnEditorTab[DmnEditorTab["DATA_TYPES"] = 1] = "DATA_TYPES";
    DmnEditorTab[DmnEditorTab["INCLUDED_MODELS"] = 2] = "INCLUDED_MODELS";
})(DmnEditorTab = exports.DmnEditorTab || (exports.DmnEditorTab = {}));
exports.NODE_LAYERS = {
    GROUP_NODE: 0,
    NODES: 1000,
    DECISION_SERVICE_NODE: 2000,
    NESTED_NODES: 4000,
};
function useDmnEditorStore(selector, equalityFn) {
    var store = (0, react_1.useContext)(exports.DmnEditorStoreApiContext);
    if (store === null) {
        throw new Error("Can't use DMN Editor Store outside of the DmnEditor component.");
    }
    return (0, traditional_1.useStoreWithEqualityFn)(store, selector, equalityFn);
}
exports.useDmnEditorStore = useDmnEditorStore;
function useDmnEditorStoreApi() {
    return (0, react_1.useContext)(exports.DmnEditorStoreApiContext);
}
exports.useDmnEditorStoreApi = useDmnEditorStoreApi;
exports.DmnEditorStoreApiContext = (0, react_1.createContext)({});
var defaultStaticState = function () { return ({
    boxedExpressionEditor: {
        activeDrgElementId: undefined,
        selectedObjectId: undefined,
        propertiesPanel: {
            isOpen: false,
        },
    },
    navigation: {
        tab: DmnEditorTab.EDITOR,
    },
    diagram: {
        drdIndex: 0,
        edgeIdBeingUpdated: undefined,
        dropTargetNode: undefined,
        ongoingConnection: undefined,
        propertiesPanel: {
            isOpen: false,
            elementId: undefined,
        },
        overlaysPanel: {
            isOpen: false,
        },
        openNodesPanel: DiagramNodesPanel.NONE,
        drdSelector: {
            isOpen: false,
        },
        overlays: {
            enableNodeHierarchyHighlight: false,
            enableExecutionHitsHighlights: false,
            enableCustomNodeStyles: false,
            enableDataTypesToolbarOnNodes: true,
            enableStyles: true,
        },
        snapGrid: { isEnabled: true, x: 20, y: 20 },
        _selectedNodes: [],
        _selectedEdges: [],
        draggingNodes: [],
        resizingNodes: [],
        draggingWaypoints: [],
        movingDividerLines: [],
        editingStyle: false,
    },
}); };
exports.defaultStaticState = defaultStaticState;
function createDmnEditorStore(model) {
    return (0, zustand_1.create)((0, immer_1.immer)(function (set, get) { return (__assign(__assign({ dmn: {
            model: model,
        }, focus: {
            consumableId: undefined,
        }, dataTypesEditor: {
            activeItemDefinitionId: undefined,
            expandedItemComponentIds: [],
        } }, (0, exports.defaultStaticState)()), { dispatch: {
            dmn: {
                reset: function (model) {
                    set(function (state) {
                        state.diagram._selectedNodes = [];
                        state.diagram.draggingNodes = [];
                        state.diagram.resizingNodes = [];
                        state.navigation.tab = DmnEditorTab.EDITOR;
                        state.boxedExpressionEditor.activeDrgElementId = undefined;
                        state.boxedExpressionEditor.selectedObjectId = undefined;
                    });
                },
            },
            boxedExpressionEditor: {
                open: function (state, id) {
                    state.boxedExpressionEditor.activeDrgElementId = id;
                    state.boxedExpressionEditor.selectedObjectId = undefined;
                    state.boxedExpressionEditor.propertiesPanel.isOpen = state.diagram.propertiesPanel.isOpen;
                },
                close: function (state) {
                    state.diagram.propertiesPanel.isOpen = state.boxedExpressionEditor.propertiesPanel.isOpen;
                    state.boxedExpressionEditor.activeDrgElementId = undefined;
                    state.boxedExpressionEditor.selectedObjectId = undefined;
                },
            },
            diagram: {
                setNodeStatus: function (prev, nodeId, newStatus) {
                    if (newStatus.selected !== undefined) {
                        if (newStatus.selected) {
                            prev.diagram._selectedNodes.push(nodeId);
                        }
                        else {
                            prev.diagram._selectedNodes = prev.diagram._selectedNodes.filter(function (s) { return s !== nodeId; });
                        }
                    }
                    if (newStatus.dragging !== undefined) {
                        if (newStatus.dragging) {
                            prev.diagram.draggingNodes.push(nodeId);
                        }
                        else {
                            prev.diagram.draggingNodes = prev.diagram.draggingNodes.filter(function (s) { return s !== nodeId; });
                        }
                    }
                    if (newStatus.resizing !== undefined) {
                        if (newStatus.resizing) {
                            prev.diagram.resizingNodes.push(nodeId);
                        }
                        else {
                            prev.diagram.resizingNodes = prev.diagram.resizingNodes.filter(function (s) { return s !== nodeId; });
                        }
                    }
                },
                setEdgeStatus: function (prev, edgeId, newStatus) {
                    if (newStatus.selected !== undefined) {
                        if (newStatus.selected) {
                            prev.diagram._selectedEdges.push(edgeId);
                        }
                        else {
                            prev.diagram._selectedEdges = prev.diagram._selectedEdges.filter(function (s) { return s !== edgeId; });
                        }
                    }
                    if (newStatus.draggingWaypoint !== undefined) {
                        if (newStatus.draggingWaypoint) {
                            prev.diagram.draggingWaypoints.push(edgeId);
                        }
                        else {
                            prev.diagram.draggingWaypoints = prev.diagram.draggingWaypoints.filter(function (s) { return s !== edgeId; });
                        }
                    }
                },
                setDividerLineStatus: function (prev, decisionServiceId, newStatus) {
                    if (newStatus.moving !== undefined) {
                        if (newStatus.moving) {
                            prev.diagram.movingDividerLines.push(decisionServiceId);
                        }
                        else {
                            prev.diagram.movingDividerLines = prev.diagram.movingDividerLines.filter(function (s) { return s !== decisionServiceId; });
                        }
                    }
                },
            },
        } })); }));
}
exports.createDmnEditorStore = createDmnEditorStore;
//# sourceMappingURL=Store.js.map