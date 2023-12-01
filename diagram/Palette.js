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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Palette = exports.MIME_TYPE_FOR_DMN_EDITOR_NEW_NODE_FROM_PALETTE = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var RF = __importStar(require("reactflow"));
var React = __importStar(require("react"));
var react_1 = require("react");
var NodeTypes_1 = require("./nodes/NodeTypes");
var Store_1 = require("../store/Store");
var addStandaloneNode_1 = require("../mutations/addStandaloneNode");
var DmnMaths_1 = require("./maths/DmnMaths");
var Popover_1 = require("@patternfly/react-core/dist/js/components/Popover");
var ExternalNodesPanel_1 = require("../externalNodes/ExternalNodesPanel");
var migration_icon_1 = require("@patternfly/react-icons/dist/js/icons/migration-icon");
var Icons_1 = require("../icons/Icons");
var DrdSelectorPanel_1 = require("./DrdSelectorPanel");
var addOrGetDrd_1 = require("../mutations/addOrGetDrd");
var InlineFeelNameInput_1 = require("../feel/InlineFeelNameInput");
var bars_icon_1 = require("@patternfly/react-icons/dist/js/icons/bars-icon");
var DrgNodesPanel_1 = require("./DrgNodesPanel");
var caret_down_icon_1 = require("@patternfly/react-icons/dist/js/icons/caret-down-icon");
var useInViewSelect_1 = require("../responsiveness/useInViewSelect");
var DmnEditorContext_1 = require("../DmnEditorContext");
exports.MIME_TYPE_FOR_DMN_EDITOR_NEW_NODE_FROM_PALETTE = "application/kie-dmn-editor--new-node-from-palette";
function Palette(_a) {
    var _b, _c, _d;
    var pulse = _a.pulse;
    var onDragStart = (0, react_1.useCallback)(function (event, nodeType) {
        event.dataTransfer.setData(exports.MIME_TYPE_FOR_DMN_EDITOR_NEW_NODE_FROM_PALETTE, nodeType);
        event.dataTransfer.effectAllowed = "move";
    }, []);
    var dmnEditorRootElementRef = (0, DmnEditorContext_1.useDmnEditor)().dmnEditorRootElementRef;
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var thisDmn = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn.model; });
    var rfStoreApi = RF.useStoreApi();
    var groupNodes = (0, react_1.useCallback)(function () {
        dmnEditorStoreApi.setState(function (state) {
            var selectedNodes = rfStoreApi
                .getState()
                .getNodes()
                .filter(function (s) { return s.selected; });
            if (selectedNodes.length <= 0) {
                return;
            }
            var newNodeId = (0, addStandaloneNode_1.addStandaloneNode)({
                definitions: state.dmn.model.definitions,
                drdIndex: diagram.drdIndex,
                newNode: {
                    type: NodeTypes_1.NODE_TYPES.group,
                    bounds: (0, DmnMaths_1.getBounds)({
                        nodes: selectedNodes,
                        padding: DmnMaths_1.CONTAINER_NODES_DESIRABLE_PADDING,
                    }),
                },
            }).href;
            state.dispatch.diagram.setNodeStatus(state, newNodeId, { selected: true });
        });
    }, [diagram.drdIndex, dmnEditorStoreApi, rfStoreApi]);
    var drd = (_c = (_b = thisDmn.definitions["dmndi:DMNDI"]) === null || _b === void 0 ? void 0 : _b["dmndi:DMNDiagram"]) === null || _c === void 0 ? void 0 : _c[diagram.drdIndex];
    var drdSelectorPopoverRef = React.useRef(null);
    var nodesPalletePopoverRef = React.useRef(null);
    var maxHeight = (0, useInViewSelect_1.useInViewSelect)(dmnEditorRootElementRef, nodesPalletePopoverRef).maxHeight;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(RF.Panel, __assign({ position: "top-left" }, { children: (0, jsx_runtime_1.jsxs)("aside", __assign({ className: "kie-dmn-editor--drd-selector", style: { position: "relative" } }, { children: [(0, jsx_runtime_1.jsx)("div", { ref: drdSelectorPopoverRef, style: { position: "absolute", left: "56px", height: "100%", zIndex: -1 } }), (0, jsx_runtime_1.jsx)(InlineFeelNameInput_1.InlineFeelNameInput, { validate: function () { return true; }, allUniqueNames: new Map(), name: (_d = drd === null || drd === void 0 ? void 0 : drd["@_name"]) !== null && _d !== void 0 ? _d : "", id: diagram.drdIndex + "", onRenamed: function (newName) {
                                dmnEditorStoreApi.setState(function (state) {
                                    var drd = (0, addOrGetDrd_1.addOrGetDrd)({ definitions: state.dmn.model.definitions, drdIndex: diagram.drdIndex });
                                    drd.diagram["@_name"] = newName;
                                });
                            }, placeholder: (0, addOrGetDrd_1.getDefaultDrdName)({ drdIndex: diagram.drdIndex }), isReadonly: false, isPlain: true, shouldCommitOnBlur: true }), (0, jsx_runtime_1.jsx)(Popover_1.Popover, { className: "kie-dmn-editor--drd-selector-popover", "aria-label": "DRD Selector Popover", isVisible: diagram.drdSelector.isOpen, reference: function () { return drdSelectorPopoverRef.current; }, shouldClose: function () {
                                dmnEditorStoreApi.setState(function (state) {
                                    state.diagram.drdSelector.isOpen = false;
                                });
                            }, position: "bottom-start", hideOnOutsideClick: false, bodyContent: (0, jsx_runtime_1.jsx)(DrdSelectorPanel_1.DrdSelectorPanel, {}) }, "".concat(diagram.drdSelector.isOpen)), (0, jsx_runtime_1.jsx)("button", __assign({ title: "DRD selector", onClick: function () {
                                dmnEditorStoreApi.setState(function (state) {
                                    state.diagram.drdSelector.isOpen = !state.diagram.drdSelector.isOpen;
                                });
                            } }, { children: (0, jsx_runtime_1.jsx)(caret_down_icon_1.CaretDownIcon, {}) }))] })) })), (0, jsx_runtime_1.jsxs)(RF.Panel, __assign({ position: "top-left", style: { marginTop: "78px" } }, { children: [(0, jsx_runtime_1.jsx)("div", { ref: nodesPalletePopoverRef, style: { position: "absolute", left: 0, height: 0, zIndex: -1 } }), (0, jsx_runtime_1.jsxs)("aside", __assign({ className: "kie-dmn-editor--palette ".concat(pulse ? "pulse" : "") }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ title: "Input Data", className: "kie-dmn-editor--palette-button dndnode input-data", onDragStart: function (event) { return onDragStart(event, NodeTypes_1.NODE_TYPES.inputData); }, draggable: true }, { children: (0, jsx_runtime_1.jsx)(Icons_1.InputDataIcon, {}) })), (0, jsx_runtime_1.jsx)("div", __assign({ title: "Decision", className: "kie-dmn-editor--palette-button dndnode decision", onDragStart: function (event) { return onDragStart(event, NodeTypes_1.NODE_TYPES.decision); }, draggable: true }, { children: (0, jsx_runtime_1.jsx)(Icons_1.DecisionIcon, {}) })), (0, jsx_runtime_1.jsx)("div", __assign({ title: "Business Knowledge Model", className: "kie-dmn-editor--palette-button dndnode bkm", onDragStart: function (event) { return onDragStart(event, NodeTypes_1.NODE_TYPES.bkm); }, draggable: true }, { children: (0, jsx_runtime_1.jsx)(Icons_1.BkmIcon, {}) })), (0, jsx_runtime_1.jsx)("div", __assign({ title: "Knowledge Source", className: "kie-dmn-editor--palette-button dndnode knowledge-source", onDragStart: function (event) { return onDragStart(event, NodeTypes_1.NODE_TYPES.knowledgeSource); }, draggable: true }, { children: (0, jsx_runtime_1.jsx)(Icons_1.KnowledgeSourceIcon, {}) })), (0, jsx_runtime_1.jsx)("div", __assign({ title: "Decision Service", className: "kie-dmn-editor--palette-button dndnode decision-service", onDragStart: function (event) { return onDragStart(event, NodeTypes_1.NODE_TYPES.decisionService); }, draggable: true }, { children: (0, jsx_runtime_1.jsx)(Icons_1.DecisionServiceIcon, {}) }))] })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsxs)("aside", __assign({ className: "kie-dmn-editor--palette ".concat(pulse ? "pulse" : "") }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ title: "Group", className: "kie-dmn-editor--palette-button dndnode group", onDragStart: function (event) { return onDragStart(event, NodeTypes_1.NODE_TYPES.group); }, draggable: true, onClick: groupNodes }, { children: (0, jsx_runtime_1.jsx)(Icons_1.GroupIcon, {}) })), (0, jsx_runtime_1.jsx)("div", __assign({ title: "Text Annotation", className: "kie-dmn-editor--palette-button dndnode text-annotation", onDragStart: function (event) { return onDragStart(event, NodeTypes_1.NODE_TYPES.textAnnotation); }, draggable: true }, { children: (0, jsx_runtime_1.jsx)(Icons_1.TextAnnotationIcon, {}) }))] })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsxs)("aside", __assign({ className: "kie-dmn-editor--drg-panel-toggle" }, { children: [diagram.openNodesPanel === Store_1.DiagramNodesPanel.DRG_NODES && ((0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--palette-nodes-popover", style: { maxHeight: maxHeight } }, { children: (0, jsx_runtime_1.jsx)(DrgNodesPanel_1.DrgNodesPanel, {}) }))), (0, jsx_runtime_1.jsx)("button", __assign({ title: "DRG nodes", className: "kie-dmn-editor--drg-panel-toggle-button ".concat(diagram.openNodesPanel === Store_1.DiagramNodesPanel.DRG_NODES ? "active" : ""), onClick: function () {
                                    dmnEditorStoreApi.setState(function (state) {
                                        state.diagram.openNodesPanel =
                                            state.diagram.openNodesPanel === Store_1.DiagramNodesPanel.DRG_NODES
                                                ? Store_1.DiagramNodesPanel.NONE
                                                : Store_1.DiagramNodesPanel.DRG_NODES;
                                    });
                                } }, { children: (0, jsx_runtime_1.jsx)(bars_icon_1.BarsIcon, { size: "sm" }) }))] })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsxs)("aside", __assign({ className: "kie-dmn-editor--external-nodes-panel-toggle" }, { children: [diagram.openNodesPanel === Store_1.DiagramNodesPanel.EXTERNAL_NODES && ((0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--palette-nodes-popover", style: { maxHeight: maxHeight } }, { children: (0, jsx_runtime_1.jsx)(ExternalNodesPanel_1.ExternalNodesPanel, {}) }))), (0, jsx_runtime_1.jsx)("button", __assign({ title: "External nodes", className: "kie-dmn-editor--external-nodes-panel-toggle-button ".concat(diagram.openNodesPanel === Store_1.DiagramNodesPanel.EXTERNAL_NODES ? "active" : ""), onClick: function () {
                                    dmnEditorStoreApi.setState(function (state) {
                                        state.diagram.openNodesPanel =
                                            state.diagram.openNodesPanel === Store_1.DiagramNodesPanel.EXTERNAL_NODES
                                                ? Store_1.DiagramNodesPanel.NONE
                                                : Store_1.DiagramNodesPanel.EXTERNAL_NODES;
                                    });
                                } }, { children: (0, jsx_runtime_1.jsx)(migration_icon_1.MigrationIcon, { size: "sm" }) }))] }))] }))] }));
}
exports.Palette = Palette;
//# sourceMappingURL=Palette.js.map