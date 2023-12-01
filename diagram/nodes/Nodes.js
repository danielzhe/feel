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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDataTypeCreationCallbackForNodes = exports.useNodeClassName = exports.useConnectionTargetStatus = exports.useConnection = exports.NodeResizerHandle = exports.EmptyLabel = exports.UnknownNode = exports.GroupNode = exports.DecisionServiceNode = exports.TextAnnotationNode = exports.KnowledgeSourceNode = exports.BkmNode = exports.DecisionNode = exports.InputDataNode = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("react");
var RF = __importStar(require("reactflow"));
var renameNode_1 = require("../../mutations/renameNode");
var Store_1 = require("../../store/Store");
var SnapGrid_1 = require("../SnapGrid");
var DefaultSizes_1 = require("./DefaultSizes");
var PositionalNodeHandles_1 = require("../connections/PositionalNodeHandles");
var graphStructure_1 = require("../connections/graphStructure");
var EdgeTypes_1 = require("../edges/EdgeTypes");
var DataTypeNodePanel_1 = require("./DataTypeNodePanel");
var EditExpressionNodePanel_1 = require("./EditExpressionNodePanel");
var EditableNodeLabel_1 = require("./EditableNodeLabel");
var InfoNodePanel_1 = require("./InfoNodePanel");
var NodeSvgs_1 = require("./NodeSvgs");
var NodeTypes_1 = require("./NodeTypes");
var OutgoingStuffNodePanel_1 = require("./OutgoingStuffNodePanel");
var useIsHovered_1 = require("../useIsHovered");
var DmnMaths_1 = require("../maths/DmnMaths");
var DerivedStore_1 = require("../../store/DerivedStore");
var DefaultSizes_2 = require("./DefaultSizes");
var d3_selection_1 = require("d3-selection");
var d3_drag_1 = require("d3-drag");
var updateDecisionServiceDividerLine_1 = require("../../mutations/updateDecisionServiceDividerLine");
var addTopLevelItemDefinition_1 = require("../../mutations/addTopLevelItemDefinition");
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var NodeStyle_1 = require("./NodeStyle");
exports.InputDataNode = React.memo(function (_a) {
    var _b;
    var _c = _a.data, inputData = _c.dmnObject, shape = _c.shape, index = _c.index, dmnObjectQName = _c.dmnObjectQName, selected = _a.selected, dragging = _a.dragging, zIndex = _a.zIndex, type = _a.type, id = _a.id;
    var ref = (0, react_1.useRef)(null);
    var isExternal = !!dmnObjectQName.prefix;
    var isResizing = useNodeResizing(id);
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var isHovered = ((0, useIsHovered_1.useIsHovered)(ref) || isResizing) && diagram.draggingNodes.length === 0;
    var _d = (0, EditableNodeLabel_1.useEditableNodeLabel)(inputData["@_id"]), isEditingLabel = _d.isEditingLabel, setEditingLabel = _d.setEditingLabel, triggerEditing = _d.triggerEditing, triggerEditingIfEnter = _d.triggerEditingIfEnter;
    useHoveredNodeAlwaysOnTop(ref, zIndex, isHovered, dragging, selected, isEditingLabel);
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var _e = useConnectionTargetStatus(id, isHovered), isTargeted = _e.isTargeted, isValidConnectionTarget = _e.isValidConnectionTarget, isConnecting = _e.isConnecting;
    var className = useNodeClassName(diagram.dropTargetNode, isConnecting, isValidConnectionTarget, id);
    var nodeDimensions = useNodeDimensions(type, diagram.snapGrid, id, shape, isExternal);
    var setName = (0, react_1.useCallback)(function (newName) {
        dmnEditorStoreApi.setState(function (state) {
            (0, renameNode_1.renameDrgElement)({ definitions: state.dmn.model.definitions, newName: newName, index: index });
        });
    }, [dmnEditorStoreApi, index]);
    var onTypeRefChange = (0, react_1.useCallback)(function (newTypeRef) {
        dmnEditorStoreApi.setState(function (state) {
            var _a;
            var drgElement = state.dmn.model.definitions.drgElement[index];
            (_a = drgElement.variable) !== null && _a !== void 0 ? _a : (drgElement.variable = { "@_name": inputData["@_name"] });
            drgElement.variable["@_typeRef"] = newTypeRef;
        });
    }, [dmnEditorStoreApi, index, inputData]);
    var allFeelVariableUniqueNames = (0, DerivedStore_1.useDmnEditorDerivedStore)().allFeelVariableUniqueNames;
    var onCreateDataType = useDataTypeCreationCallbackForNodes(index, inputData["@_name"]);
    var _f = (0, NodeStyle_1.useNodeStyle)({
        dmnStyle: shape["di:Style"],
        nodeType: type,
        isEnabled: diagram.overlays.enableStyles,
    }), fontStyle = _f.fontStyle, shapeStyle = _f.shapeStyle;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("svg", __assign({ className: "kie-dmn-editor--node-shape ".concat(className, " ").concat(dmnObjectQName.prefix ? "external" : "") }, { children: (0, jsx_runtime_1.jsx)(NodeSvgs_1.InputDataNodeSvg, __assign({}, nodeDimensions, { x: 0, y: 0, strokeWidth: shapeStyle.strokeWidth, fillColor: shapeStyle.fillColor, strokeColor: shapeStyle.strokeColor })) })), (0, jsx_runtime_1.jsx)(PositionalNodeHandles_1.PositionalNodeHandles, { isTargeted: isTargeted && isValidConnectionTarget, nodeId: id }), (0, jsx_runtime_1.jsxs)("div", __assign({ ref: ref, className: "kie-dmn-editor--node kie-dmn-editor--input-data-node ".concat(className, " ").concat(dmnObjectQName.prefix ? "external" : ""), tabIndex: -1, onDoubleClick: triggerEditing, onKeyDown: triggerEditingIfEnter }, { children: [(0, jsx_runtime_1.jsx)(InfoNodePanel_1.InfoNodePanel, { isVisible: !isTargeted && isHovered }), (0, jsx_runtime_1.jsx)(OutgoingStuffNodePanel_1.OutgoingStuffNodePanel, { isVisible: !isConnecting && !isTargeted && isHovered, nodeTypes: graphStructure_1.outgoingStructure[NodeTypes_1.NODE_TYPES.inputData].nodes, edgeTypes: graphStructure_1.outgoingStructure[NodeTypes_1.NODE_TYPES.inputData].edges }), (0, jsx_runtime_1.jsx)(EditableNodeLabel_1.EditableNodeLabel, { namedElement: inputData, namedElementQName: dmnObjectQName, isEditing: isEditingLabel, setEditing: setEditingLabel, value: (_b = inputData["@_label"]) !== null && _b !== void 0 ? _b : inputData["@_name"], onChange: setName, allUniqueNames: allFeelVariableUniqueNames, shouldCommitOnBlur: true, fontStyle: fontStyle }), isHovered && ((0, jsx_runtime_1.jsx)(NodeResizerHandle, { nodeType: type, snapGrid: diagram.snapGrid, nodeId: id, nodeShapeIndex: shape.index })), (0, jsx_runtime_1.jsx)(DataTypeNodePanel_1.DataTypeNodePanel, { isVisible: !isTargeted && isHovered, variable: inputData.variable, shape: shape, onCreate: onCreateDataType, onChange: onTypeRefChange })] }))] }));
});
exports.DecisionNode = React.memo(function (_a) {
    var _b;
    var _c = _a.data, parentRfNode = _c.parentRfNode, decision = _c.dmnObject, shape = _c.shape, index = _c.index, dmnObjectQName = _c.dmnObjectQName, selected = _a.selected, dragging = _a.dragging, zIndex = _a.zIndex, type = _a.type, id = _a.id;
    var ref = (0, react_1.useRef)(null);
    var isExternal = !!dmnObjectQName.prefix;
    var isResizing = useNodeResizing(id);
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var isHovered = ((0, useIsHovered_1.useIsHovered)(ref) || isResizing) && diagram.draggingNodes.length === 0;
    var _d = (0, EditableNodeLabel_1.useEditableNodeLabel)(decision["@_id"]), isEditingLabel = _d.isEditingLabel, setEditingLabel = _d.setEditingLabel, triggerEditing = _d.triggerEditing, triggerEditingIfEnter = _d.triggerEditingIfEnter;
    useHoveredNodeAlwaysOnTop(ref, zIndex, isHovered, dragging, selected, isEditingLabel);
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var _e = useConnectionTargetStatus(id, isHovered), isTargeted = _e.isTargeted, isValidConnectionTarget = _e.isValidConnectionTarget, isConnecting = _e.isConnecting;
    var className = useNodeClassName(diagram.dropTargetNode, isConnecting, isValidConnectionTarget, id);
    var nodeDimensions = useNodeDimensions(type, diagram.snapGrid, id, shape, isExternal);
    var setName = (0, react_1.useCallback)(function (newName) {
        dmnEditorStoreApi.setState(function (state) {
            (0, renameNode_1.renameDrgElement)({ definitions: state.dmn.model.definitions, newName: newName, index: index });
        });
    }, [dmnEditorStoreApi, index]);
    var onTypeRefChange = (0, react_1.useCallback)(function (newTypeRef) {
        dmnEditorStoreApi.setState(function (state) {
            var _a;
            var drgElement = state.dmn.model.definitions.drgElement[index];
            (_a = drgElement.variable) !== null && _a !== void 0 ? _a : (drgElement.variable = { "@_name": decision["@_name"] });
            drgElement.variable["@_typeRef"] = newTypeRef;
        });
    }, [decision, dmnEditorStoreApi, index]);
    var allFeelVariableUniqueNames = (0, DerivedStore_1.useDmnEditorDerivedStore)().allFeelVariableUniqueNames;
    var onCreateDataType = useDataTypeCreationCallbackForNodes(index, decision["@_name"]);
    var _f = (0, NodeStyle_1.useNodeStyle)({
        dmnStyle: shape["di:Style"],
        nodeType: type,
        isEnabled: diagram.overlays.enableStyles,
    }), fontStyle = _f.fontStyle, shapeStyle = _f.shapeStyle;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("svg", __assign({ className: "kie-dmn-editor--node-shape ".concat(className, " ").concat(dmnObjectQName.prefix ? "external" : "") }, { children: (0, jsx_runtime_1.jsx)(NodeSvgs_1.DecisionNodeSvg, __assign({}, nodeDimensions, { x: 0, y: 0, strokeWidth: parentRfNode ? 3 : shapeStyle.strokeWidth, fillColor: shapeStyle.fillColor, strokeColor: shapeStyle.strokeColor })) })), (0, jsx_runtime_1.jsx)(PositionalNodeHandles_1.PositionalNodeHandles, { isTargeted: isTargeted && isValidConnectionTarget, nodeId: id }), (0, jsx_runtime_1.jsxs)("div", __assign({ ref: ref, className: "kie-dmn-editor--node kie-dmn-editor--decision-node ".concat(className, " ").concat(dmnObjectQName.prefix ? "external" : ""), tabIndex: -1, onDoubleClick: triggerEditing, onKeyDown: triggerEditingIfEnter }, { children: [(0, jsx_runtime_1.jsx)(InfoNodePanel_1.InfoNodePanel, { isVisible: !isTargeted && isHovered }), !isExternal && (0, jsx_runtime_1.jsx)(EditExpressionNodePanel_1.EditExpressionNodePanel, { isVisible: !isTargeted && isHovered, id: decision["@_id"] }), (0, jsx_runtime_1.jsx)(OutgoingStuffNodePanel_1.OutgoingStuffNodePanel, { isVisible: !isConnecting && !isTargeted && isHovered, nodeTypes: graphStructure_1.outgoingStructure[NodeTypes_1.NODE_TYPES.decision].nodes, edgeTypes: graphStructure_1.outgoingStructure[NodeTypes_1.NODE_TYPES.decision].edges }), (0, jsx_runtime_1.jsx)(EditableNodeLabel_1.EditableNodeLabel, { namedElement: decision, namedElementQName: dmnObjectQName, isEditing: isEditingLabel, setEditing: setEditingLabel, value: (_b = decision["@_label"]) !== null && _b !== void 0 ? _b : decision["@_name"], onChange: setName, allUniqueNames: allFeelVariableUniqueNames, shouldCommitOnBlur: true, fontStyle: fontStyle }), isHovered && ((0, jsx_runtime_1.jsx)(NodeResizerHandle, { nodeType: type, snapGrid: diagram.snapGrid, nodeId: id, nodeShapeIndex: shape.index })), (0, jsx_runtime_1.jsx)(DataTypeNodePanel_1.DataTypeNodePanel, { isVisible: !isTargeted && isHovered, variable: decision.variable, shape: shape, onChange: onTypeRefChange, onCreate: onCreateDataType })] }))] }));
});
exports.BkmNode = React.memo(function (_a) {
    var _b;
    var _c = _a.data, bkm = _c.dmnObject, shape = _c.shape, index = _c.index, dmnObjectQName = _c.dmnObjectQName, selected = _a.selected, dragging = _a.dragging, zIndex = _a.zIndex, type = _a.type, id = _a.id;
    var ref = (0, react_1.useRef)(null);
    var isExternal = !!dmnObjectQName.prefix;
    var isResizing = useNodeResizing(id);
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var isHovered = ((0, useIsHovered_1.useIsHovered)(ref) || isResizing) && diagram.draggingNodes.length === 0;
    var _d = (0, EditableNodeLabel_1.useEditableNodeLabel)(bkm["@_id"]), isEditingLabel = _d.isEditingLabel, setEditingLabel = _d.setEditingLabel, triggerEditing = _d.triggerEditing, triggerEditingIfEnter = _d.triggerEditingIfEnter;
    useHoveredNodeAlwaysOnTop(ref, zIndex, isHovered, dragging, selected, isEditingLabel);
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var _e = useConnectionTargetStatus(id, isHovered), isTargeted = _e.isTargeted, isValidConnectionTarget = _e.isValidConnectionTarget, isConnecting = _e.isConnecting;
    var className = useNodeClassName(diagram.dropTargetNode, isConnecting, isValidConnectionTarget, id);
    var nodeDimensions = useNodeDimensions(type, diagram.snapGrid, id, shape, isExternal);
    var setName = (0, react_1.useCallback)(function (newName) {
        dmnEditorStoreApi.setState(function (state) {
            (0, renameNode_1.renameDrgElement)({ definitions: state.dmn.model.definitions, newName: newName, index: index });
        });
    }, [dmnEditorStoreApi, index]);
    var onTypeRefChange = (0, react_1.useCallback)(function (newTypeRef) {
        dmnEditorStoreApi.setState(function (state) {
            var _a;
            var drgElement = state.dmn.model.definitions.drgElement[index];
            (_a = drgElement.variable) !== null && _a !== void 0 ? _a : (drgElement.variable = { "@_name": bkm["@_name"] });
            drgElement.variable["@_typeRef"] = newTypeRef;
        });
    }, [bkm, dmnEditorStoreApi, index]);
    var allFeelVariableUniqueNames = (0, DerivedStore_1.useDmnEditorDerivedStore)().allFeelVariableUniqueNames;
    var onCreateDataType = useDataTypeCreationCallbackForNodes(index, bkm["@_name"]);
    var _f = (0, NodeStyle_1.useNodeStyle)({
        dmnStyle: shape["di:Style"],
        nodeType: type,
        isEnabled: diagram.overlays.enableStyles,
    }), fontStyle = _f.fontStyle, shapeStyle = _f.shapeStyle;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("svg", __assign({ className: "kie-dmn-editor--node-shape ".concat(className, " ").concat(dmnObjectQName.prefix ? "external" : "") }, { children: (0, jsx_runtime_1.jsx)(NodeSvgs_1.BkmNodeSvg, __assign({}, nodeDimensions, { x: 0, y: 0, strokeWidth: shapeStyle.strokeWidth, fillColor: shapeStyle.fillColor, strokeColor: shapeStyle.strokeColor })) })), (0, jsx_runtime_1.jsx)(PositionalNodeHandles_1.PositionalNodeHandles, { isTargeted: isTargeted && isValidConnectionTarget, nodeId: id }), (0, jsx_runtime_1.jsxs)("div", __assign({ ref: ref, className: "kie-dmn-editor--node kie-dmn-editor--bkm-node ".concat(className, " ").concat(dmnObjectQName.prefix ? "external" : ""), tabIndex: -1, onDoubleClick: triggerEditing, onKeyDown: triggerEditingIfEnter }, { children: [(0, jsx_runtime_1.jsx)(InfoNodePanel_1.InfoNodePanel, { isVisible: !isTargeted && isHovered }), !isExternal && (0, jsx_runtime_1.jsx)(EditExpressionNodePanel_1.EditExpressionNodePanel, { isVisible: !isTargeted && isHovered, id: bkm["@_id"] }), (0, jsx_runtime_1.jsx)(OutgoingStuffNodePanel_1.OutgoingStuffNodePanel, { isVisible: !isConnecting && !isTargeted && isHovered, nodeTypes: graphStructure_1.outgoingStructure[NodeTypes_1.NODE_TYPES.bkm].nodes, edgeTypes: graphStructure_1.outgoingStructure[NodeTypes_1.NODE_TYPES.bkm].edges }), (0, jsx_runtime_1.jsx)(EditableNodeLabel_1.EditableNodeLabel, { namedElement: bkm, namedElementQName: dmnObjectQName, isEditing: isEditingLabel, setEditing: setEditingLabel, value: (_b = bkm["@_label"]) !== null && _b !== void 0 ? _b : bkm["@_name"], onChange: setName, allUniqueNames: allFeelVariableUniqueNames, shouldCommitOnBlur: true, fontStyle: fontStyle }), isHovered && ((0, jsx_runtime_1.jsx)(NodeResizerHandle, { nodeType: type, snapGrid: diagram.snapGrid, nodeId: id, nodeShapeIndex: shape.index })), (0, jsx_runtime_1.jsx)(DataTypeNodePanel_1.DataTypeNodePanel, { isVisible: !isTargeted && isHovered, variable: bkm.variable, shape: shape, onChange: onTypeRefChange, onCreate: onCreateDataType })] }))] }));
});
exports.KnowledgeSourceNode = React.memo(function (_a) {
    var _b;
    var _c = _a.data, knowledgeSource = _c.dmnObject, shape = _c.shape, index = _c.index, dmnObjectQName = _c.dmnObjectQName, selected = _a.selected, dragging = _a.dragging, zIndex = _a.zIndex, type = _a.type, id = _a.id;
    var ref = (0, react_1.useRef)(null);
    var isExternal = !!dmnObjectQName.prefix;
    var isResizing = useNodeResizing(id);
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var isHovered = ((0, useIsHovered_1.useIsHovered)(ref) || isResizing) && diagram.draggingNodes.length === 0;
    var _d = (0, EditableNodeLabel_1.useEditableNodeLabel)(knowledgeSource["@_id"]), isEditingLabel = _d.isEditingLabel, setEditingLabel = _d.setEditingLabel, triggerEditing = _d.triggerEditing, triggerEditingIfEnter = _d.triggerEditingIfEnter;
    useHoveredNodeAlwaysOnTop(ref, zIndex, isHovered, dragging, selected, isEditingLabel);
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var _e = useConnectionTargetStatus(id, isHovered), isTargeted = _e.isTargeted, isValidConnectionTarget = _e.isValidConnectionTarget, isConnecting = _e.isConnecting;
    var className = useNodeClassName(diagram.dropTargetNode, isConnecting, isValidConnectionTarget, id);
    var nodeDimensions = useNodeDimensions(type, diagram.snapGrid, id, shape, isExternal);
    var setName = (0, react_1.useCallback)(function (newName) {
        dmnEditorStoreApi.setState(function (state) {
            (0, renameNode_1.renameDrgElement)({ definitions: state.dmn.model.definitions, newName: newName, index: index });
        });
    }, [dmnEditorStoreApi, index]);
    var allFeelVariableUniqueNames = (0, DerivedStore_1.useDmnEditorDerivedStore)().allFeelVariableUniqueNames;
    var _f = (0, NodeStyle_1.useNodeStyle)({
        dmnStyle: shape["di:Style"],
        nodeType: type,
        isEnabled: diagram.overlays.enableStyles,
    }), fontStyle = _f.fontStyle, shapeStyle = _f.shapeStyle;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("svg", __assign({ className: "kie-dmn-editor--node-shape ".concat(className, " ").concat(dmnObjectQName.prefix ? "external" : "") }, { children: (0, jsx_runtime_1.jsx)(NodeSvgs_1.KnowledgeSourceNodeSvg, __assign({}, nodeDimensions, { x: 0, y: 0, strokeWidth: shapeStyle.strokeWidth, fillColor: shapeStyle.fillColor, strokeColor: shapeStyle.strokeColor })) })), (0, jsx_runtime_1.jsx)(PositionalNodeHandles_1.PositionalNodeHandles, { isTargeted: isTargeted && isValidConnectionTarget, nodeId: id }), (0, jsx_runtime_1.jsxs)("div", __assign({ ref: ref, className: "kie-dmn-editor--node kie-dmn-editor--knowledge-source-node ".concat(className, " ").concat(dmnObjectQName.prefix ? "external" : ""), tabIndex: -1, onDoubleClick: triggerEditing, onKeyDown: triggerEditingIfEnter }, { children: [(0, jsx_runtime_1.jsx)(InfoNodePanel_1.InfoNodePanel, { isVisible: !isTargeted && isHovered }), (0, jsx_runtime_1.jsx)(OutgoingStuffNodePanel_1.OutgoingStuffNodePanel, { isVisible: !isConnecting && !isTargeted && isHovered, nodeTypes: graphStructure_1.outgoingStructure[NodeTypes_1.NODE_TYPES.knowledgeSource].nodes, edgeTypes: graphStructure_1.outgoingStructure[NodeTypes_1.NODE_TYPES.knowledgeSource].edges }), (0, jsx_runtime_1.jsx)(EditableNodeLabel_1.EditableNodeLabel, { namedElement: knowledgeSource, namedElementQName: dmnObjectQName, position: "center-left", isEditing: isEditingLabel, setEditing: setEditingLabel, value: (_b = knowledgeSource["@_label"]) !== null && _b !== void 0 ? _b : knowledgeSource["@_name"], onChange: setName, skipValidation: true, allUniqueNames: allFeelVariableUniqueNames, shouldCommitOnBlur: true, fontStyle: fontStyle }), isHovered && ((0, jsx_runtime_1.jsx)(NodeResizerHandle, { nodeType: type, snapGrid: diagram.snapGrid, nodeId: id, nodeShapeIndex: shape.index }))] }))] }));
});
exports.TextAnnotationNode = React.memo(function (_a) {
    var _b, _c;
    var _d = _a.data, textAnnotation = _d.dmnObject, shape = _d.shape, index = _d.index, dmnObjectQName = _d.dmnObjectQName, selected = _a.selected, dragging = _a.dragging, zIndex = _a.zIndex, type = _a.type, id = _a.id;
    var ref = (0, react_1.useRef)(null);
    var isExternal = !!dmnObjectQName.prefix;
    var isResizing = useNodeResizing(id);
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var isHovered = ((0, useIsHovered_1.useIsHovered)(ref) || isResizing) && diagram.draggingNodes.length === 0;
    var _e = (0, EditableNodeLabel_1.useEditableNodeLabel)(textAnnotation["@_id"]), isEditingLabel = _e.isEditingLabel, setEditingLabel = _e.setEditingLabel, triggerEditing = _e.triggerEditing, triggerEditingIfEnter = _e.triggerEditingIfEnter;
    useHoveredNodeAlwaysOnTop(ref, zIndex, isHovered, dragging, selected, isEditingLabel);
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var _f = useConnectionTargetStatus(id, isHovered), isTargeted = _f.isTargeted, isValidConnectionTarget = _f.isValidConnectionTarget, isConnecting = _f.isConnecting;
    var className = useNodeClassName(diagram.dropTargetNode, isConnecting, isValidConnectionTarget, id);
    var nodeDimensions = useNodeDimensions(type, diagram.snapGrid, id, shape, isExternal);
    var setText = (0, react_1.useCallback)(function (newText) {
        dmnEditorStoreApi.setState(function (state) {
            (0, renameNode_1.updateTextAnnotation)({ definitions: state.dmn.model.definitions, newText: newText, index: index });
        });
    }, [dmnEditorStoreApi, index]);
    var allFeelVariableUniqueNames = (0, DerivedStore_1.useDmnEditorDerivedStore)().allFeelVariableUniqueNames;
    var _g = (0, NodeStyle_1.useNodeStyle)({
        dmnStyle: shape["di:Style"],
        nodeType: type,
        isEnabled: diagram.overlays.enableStyles,
    }), fontStyle = _g.fontStyle, shapeStyle = _g.shapeStyle;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("svg", __assign({ className: "kie-dmn-editor--node-shape ".concat(className, " ").concat(dmnObjectQName.prefix ? "external" : "") }, { children: (0, jsx_runtime_1.jsx)(NodeSvgs_1.TextAnnotationNodeSvg, __assign({}, nodeDimensions, { x: 0, y: 0, strokeColor: shapeStyle.strokeColor, strokeWidth: shapeStyle.strokeWidth, fillColor: shapeStyle.fillColor })) })), (0, jsx_runtime_1.jsx)(PositionalNodeHandles_1.PositionalNodeHandles, { isTargeted: isTargeted && isValidConnectionTarget, nodeId: id }), (0, jsx_runtime_1.jsxs)("div", __assign({ ref: ref, className: "kie-dmn-editor--node kie-dmn-editor--text-annotation-node ".concat(className, " ").concat(dmnObjectQName.prefix ? "external" : ""), tabIndex: -1, onDoubleClick: triggerEditing, onKeyDown: triggerEditingIfEnter }, { children: [(0, jsx_runtime_1.jsx)(InfoNodePanel_1.InfoNodePanel, { isVisible: !isTargeted && isHovered }), (0, jsx_runtime_1.jsx)(OutgoingStuffNodePanel_1.OutgoingStuffNodePanel, { isVisible: !isConnecting && !isTargeted && isHovered, nodeTypes: graphStructure_1.outgoingStructure[NodeTypes_1.NODE_TYPES.textAnnotation].nodes, edgeTypes: graphStructure_1.outgoingStructure[NodeTypes_1.NODE_TYPES.textAnnotation].edges }), (0, jsx_runtime_1.jsx)(EditableNodeLabel_1.EditableNodeLabel, { id: textAnnotation["@_id"], namedElement: undefined, namedElementQName: undefined, position: "top-left", isEditing: isEditingLabel, setEditing: setEditingLabel, value: (_b = textAnnotation["@_label"]) !== null && _b !== void 0 ? _b : (_c = textAnnotation.text) === null || _c === void 0 ? void 0 : _c.__$$text, onChange: setText, skipValidation: true, allUniqueNames: allFeelVariableUniqueNames, shouldCommitOnBlur: true, fontStyle: fontStyle }), isHovered && ((0, jsx_runtime_1.jsx)(NodeResizerHandle, { nodeType: type, snapGrid: diagram.snapGrid, nodeId: id, nodeShapeIndex: shape.index }))] }))] }));
});
exports.DecisionServiceNode = React.memo(function (_a) {
    var _b, _c;
    var _d = _a.data, decisionService = _d.dmnObject, shape = _d.shape, index = _d.index, dmnObjectQName = _d.dmnObjectQName, selected = _a.selected, dragging = _a.dragging, zIndex = _a.zIndex, type = _a.type, id = _a.id;
    var ref = (0, react_1.useRef)(null);
    var isExternal = !!dmnObjectQName.prefix;
    var isResizing = useNodeResizing(id);
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var isHovered = ((0, useIsHovered_1.useIsHovered)(ref) || isResizing) && diagram.draggingNodes.length === 0;
    var _e = (0, EditableNodeLabel_1.useEditableNodeLabel)(decisionService["@_id"]), isEditingLabel = _e.isEditingLabel, setEditingLabel = _e.setEditingLabel, triggerEditing = _e.triggerEditing, triggerEditingIfEnter = _e.triggerEditingIfEnter;
    useHoveredNodeAlwaysOnTop(ref, zIndex, isHovered, dragging, selected, isEditingLabel);
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var _f = useConnectionTargetStatus(id, isHovered), isTargeted = _f.isTargeted, isValidConnectionTarget = _f.isValidConnectionTarget, isConnecting = _f.isConnecting;
    var className = useNodeClassName(diagram.dropTargetNode, isConnecting, isValidConnectionTarget, id);
    var nodeDimensions = useNodeDimensions(type, diagram.snapGrid, id, shape, isExternal);
    var setName = (0, react_1.useCallback)(function (newName) {
        dmnEditorStoreApi.setState(function (state) {
            (0, renameNode_1.renameDrgElement)({ definitions: state.dmn.model.definitions, newName: newName, index: index });
        });
    }, [dmnEditorStoreApi, index]);
    (0, react_1.useEffect)(function () {
        var onDoubleClick = function () {
            dmnEditorStoreApi.setState(function (state) {
                var _a, _b;
                state.diagram._selectedNodes = __spreadArray(__spreadArray([
                    id
                ], __read(((_a = decisionService.outputDecision) !== null && _a !== void 0 ? _a : []).map(function (od) { return od["@_href"]; })), false), __read(((_b = decisionService.encapsulatedDecision) !== null && _b !== void 0 ? _b : []).map(function (ed) { return ed["@_href"]; })), false);
            });
        };
        var r = ref.current;
        r === null || r === void 0 ? void 0 : r.addEventListener("dblclick", onDoubleClick);
        return function () {
            r === null || r === void 0 ? void 0 : r.removeEventListener("dblclick", onDoubleClick);
        };
    }, [decisionService.encapsulatedDecision, decisionService.outputDecision, dmnEditorStoreApi, id]);
    var onTypeRefChange = (0, react_1.useCallback)(function (newTypeRef) {
        dmnEditorStoreApi.setState(function (state) {
            var _a;
            var drgElement = state.dmn.model.definitions.drgElement[index];
            (_a = drgElement.variable) !== null && _a !== void 0 ? _a : (drgElement.variable = { "@_name": decisionService["@_name"] });
            drgElement.variable["@_typeRef"] = newTypeRef;
        });
    }, [decisionService, dmnEditorStoreApi, index]);
    var _g = (0, DerivedStore_1.useDmnEditorDerivedStore)(), allFeelVariableUniqueNames = _g.allFeelVariableUniqueNames, dmnShapesByHref = _g.dmnShapesByHref;
    var dividerLineRef = (0, react_1.useRef)(null);
    var isCollapsed = isExternal || shape["@_isCollapsed"];
    var onCreateDataType = useDataTypeCreationCallbackForNodes(index, decisionService["@_name"]);
    (0, react_1.useEffect)(function () {
        if (!dividerLineRef.current) {
            return;
        }
        var selection = (0, d3_selection_1.select)(dividerLineRef.current);
        var dragHandler = (0, d3_drag_1.drag)()
            .on("start", function () {
            dmnEditorStoreApi.setState(function (state) {
                return state.dispatch.diagram.setDividerLineStatus(state, id, { moving: true });
            });
        })
            .on("drag", function (e) {
            dmnEditorStoreApi.setState(function (state) {
                (0, updateDecisionServiceDividerLine_1.updateDecisionServiceDividerLine)({
                    definitions: state.dmn.model.definitions,
                    drdIndex: diagram.drdIndex,
                    dmnShapesByHref: dmnShapesByHref,
                    drgElementIndex: index,
                    shapeIndex: shape.index,
                    localYPosition: e.y,
                    snapGrid: diagram.snapGrid,
                });
            });
        })
            .on("end", function (e) {
            dmnEditorStoreApi.setState(function (state) {
                return state.dispatch.diagram.setDividerLineStatus(state, id, { moving: false });
            });
        });
        selection.call(dragHandler);
        return function () {
            selection.on(".drag", null);
        };
    }, [
        decisionService,
        diagram.drdIndex,
        diagram.snapGrid,
        dmnEditorStoreApi,
        dmnShapesByHref,
        id,
        index,
        shape.index,
    ]);
    var _h = (0, NodeStyle_1.useNodeStyle)({
        dmnStyle: shape["di:Style"],
        nodeType: type,
        isEnabled: diagram.overlays.enableStyles,
    }), fontStyle = _h.fontStyle, shapeStyle = _h.shapeStyle;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("svg", __assign({ className: "kie-dmn-editor--node-shape ".concat(className, " ").concat(dmnObjectQName.prefix ? "external" : "") }, { children: (0, jsx_runtime_1.jsx)(NodeSvgs_1.DecisionServiceNodeSvg, __assign({ dividerLineRef: dividerLineRef, ref: ref }, nodeDimensions, { x: 0, y: 0, strokeWidth: 3, fillColor: shapeStyle.fillColor, strokeColor: shapeStyle.strokeColor, isReadonly: false, isCollapsed: isCollapsed, showSectionLabels: ((_b = diagram.dropTargetNode) === null || _b === void 0 ? void 0 : _b.id) === id, dividerLineLocalY: (0, DmnMaths_1.getDecisionServiceDividerLineLocalY)(shape) })) })), (0, jsx_runtime_1.jsx)(PositionalNodeHandles_1.PositionalNodeHandles, { isTargeted: isTargeted && isValidConnectionTarget, nodeId: id }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "kie-dmn-editor--node kie-dmn-editor--decision-service-node ".concat(className, " ").concat(dmnObjectQName.prefix ? "external" : ""), tabIndex: -1, onDoubleClick: triggerEditing, onKeyDown: triggerEditingIfEnter }, { children: [(0, jsx_runtime_1.jsx)(InfoNodePanel_1.InfoNodePanel, { isVisible: !isTargeted && selected && !dragging }), (0, jsx_runtime_1.jsx)(OutgoingStuffNodePanel_1.OutgoingStuffNodePanel, { isVisible: !isConnecting && !isTargeted && selected && !dragging, nodeTypes: graphStructure_1.outgoingStructure[NodeTypes_1.NODE_TYPES.decisionService].nodes, edgeTypes: graphStructure_1.outgoingStructure[NodeTypes_1.NODE_TYPES.decisionService].edges }), (0, jsx_runtime_1.jsx)(EditableNodeLabel_1.EditableNodeLabel, { namedElement: decisionService, namedElementQName: dmnObjectQName, position: "top-center", isEditing: isEditingLabel, setEditing: setEditingLabel, value: (_c = decisionService["@_label"]) !== null && _c !== void 0 ? _c : decisionService["@_name"], onChange: setName, allUniqueNames: allFeelVariableUniqueNames, shouldCommitOnBlur: true, fontStyle: fontStyle }), selected && !dragging && !isCollapsed && ((0, jsx_runtime_1.jsx)(NodeResizerHandle, { nodeType: type, snapGrid: diagram.snapGrid, nodeId: id, nodeShapeIndex: shape.index })), isCollapsed && (0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--decision-service-collapsed-button" }, { children: "+" })), (0, jsx_runtime_1.jsx)(DataTypeNodePanel_1.DataTypeNodePanel, { isVisible: !isTargeted && selected && !dragging, variable: decisionService.variable, shape: shape, onCreate: onCreateDataType, onChange: onTypeRefChange })] }))] }));
});
exports.GroupNode = React.memo(function (_a) {
    var _b;
    var _c = _a.data, group = _c.dmnObject, shape = _c.shape, index = _c.index, dmnObjectQName = _c.dmnObjectQName, selected = _a.selected, dragging = _a.dragging, zIndex = _a.zIndex, type = _a.type, id = _a.id;
    var ref = (0, react_1.useRef)(null);
    var isExternal = !!dmnObjectQName.prefix;
    var isResizing = useNodeResizing(id);
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var isHovered = ((0, useIsHovered_1.useIsHovered)(ref) || isResizing) && diagram.draggingNodes.length === 0;
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var reactFlow = RF.useReactFlow();
    var _d = (0, EditableNodeLabel_1.useEditableNodeLabel)(group["@_id"]), isEditingLabel = _d.isEditingLabel, setEditingLabel = _d.setEditingLabel, triggerEditing = _d.triggerEditing, triggerEditingIfEnter = _d.triggerEditingIfEnter;
    var _e = useConnectionTargetStatus(id, isHovered), isTargeted = _e.isTargeted, isValidConnectionTarget = _e.isValidConnectionTarget, isConnecting = _e.isConnecting;
    var className = useNodeClassName(diagram.dropTargetNode, isConnecting, isValidConnectionTarget, id);
    var nodeDimensions = useNodeDimensions(type, diagram.snapGrid, id, shape, isExternal);
    var setName = (0, react_1.useCallback)(function (newName) {
        dmnEditorStoreApi.setState(function (state) {
            (0, renameNode_1.renameGroupNode)({ definitions: state.dmn.model.definitions, newName: newName, index: index });
        });
    }, [dmnEditorStoreApi, index]);
    (0, react_1.useEffect)(function () {
        var onDoubleClick = function () {
            dmnEditorStoreApi.setState(function (state) {
                state.diagram._selectedNodes = reactFlow.getNodes().flatMap(function (n) {
                    return (0, DmnMaths_1.getContainmentRelationship)({
                        bounds: n.data.shape["dc:Bounds"],
                        container: shape["dc:Bounds"],
                        snapGrid: state.diagram.snapGrid,
                        containerMinSizes: DefaultSizes_2.MIN_NODE_SIZES[NodeTypes_1.NODE_TYPES.group],
                        boundsMinSizes: DefaultSizes_2.MIN_NODE_SIZES[n.type],
                    }).isInside
                        ? [n.id]
                        : [];
                });
            });
        };
        var r = ref.current;
        r === null || r === void 0 ? void 0 : r.addEventListener("dblclick", onDoubleClick);
        return function () {
            r === null || r === void 0 ? void 0 : r.removeEventListener("dblclick", onDoubleClick);
        };
    }, [dmnEditorStoreApi, reactFlow, shape]);
    var allFeelVariableUniqueNames = (0, DerivedStore_1.useDmnEditorDerivedStore)().allFeelVariableUniqueNames;
    var _f = (0, NodeStyle_1.useNodeStyle)({
        dmnStyle: shape["di:Style"],
        nodeType: type,
        isEnabled: diagram.overlays.enableStyles,
    }), fontStyle = _f.fontStyle, shapeStyle = _f.shapeStyle;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("svg", __assign({ className: "kie-dmn-editor--node-shape ".concat(className, " ").concat(dmnObjectQName.prefix ? "external" : "") }, { children: (0, jsx_runtime_1.jsx)(NodeSvgs_1.GroupNodeSvg, __assign({ ref: ref }, nodeDimensions, { x: 0, y: 0, strokeWidth: 3, fillColor: shapeStyle.fillColor, strokeColor: shapeStyle.strokeColor })) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "kie-dmn-editor--node kie-dmn-editor--group-node ".concat(className, " ").concat(dmnObjectQName.prefix ? "external" : ""), tabIndex: -1, onDoubleClick: triggerEditing, onKeyDown: triggerEditingIfEnter }, { children: [(0, jsx_runtime_1.jsx)(OutgoingStuffNodePanel_1.OutgoingStuffNodePanel, { isVisible: !isConnecting && !isTargeted && selected && !dragging, nodeTypes: graphStructure_1.outgoingStructure[NodeTypes_1.NODE_TYPES.group].nodes, edgeTypes: graphStructure_1.outgoingStructure[NodeTypes_1.NODE_TYPES.group].edges }), (0, jsx_runtime_1.jsx)(EditableNodeLabel_1.EditableNodeLabel, { id: group["@_id"], namedElement: undefined, namedElementQName: undefined, position: "top-left", isEditing: isEditingLabel, setEditing: setEditingLabel, value: (_b = group["@_label"]) !== null && _b !== void 0 ? _b : group["@_name"], onChange: setName, skipValidation: true, allUniqueNames: allFeelVariableUniqueNames, shouldCommitOnBlur: true, fontStyle: fontStyle }), selected && !dragging && ((0, jsx_runtime_1.jsx)(NodeResizerHandle, { nodeType: type, snapGrid: diagram.snapGrid, nodeId: id, nodeShapeIndex: shape.index }))] }))] }));
});
exports.UnknownNode = React.memo(function (_a) {
    var _b = _a.data, shape = _b.shape, dmnObjectQName = _b.dmnObjectQName, selected = _a.selected, dragging = _a.dragging, zIndex = _a.zIndex, type = _a.type, id = _a.id;
    var ref = (0, react_1.useRef)(null);
    var isExternal = !!dmnObjectQName.prefix;
    var isResizing = useNodeResizing(id);
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var isHovered = ((0, useIsHovered_1.useIsHovered)(ref) || isResizing) && diagram.draggingNodes.length === 0;
    var _c = useConnectionTargetStatus(id, isHovered), isTargeted = _c.isTargeted, isValidConnectionTarget = _c.isValidConnectionTarget, isConnecting = _c.isConnecting;
    var className = useNodeClassName(diagram.dropTargetNode, isConnecting, isValidConnectionTarget, id);
    var nodeDimensions = useNodeDimensions(type, diagram.snapGrid, id, shape, isExternal);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("svg", __assign({ className: "kie-dmn-editor--node-shape ".concat(className) }, { children: (0, jsx_runtime_1.jsx)(NodeSvgs_1.UnknownNodeSvg, __assign({}, nodeDimensions, { x: 0, y: 0 })) })), (0, jsx_runtime_1.jsx)(RF.Handle, { id: "unknown", type: "source", style: { opacity: 0 }, position: RF.Position.Top }, "unknown"), (0, jsx_runtime_1.jsxs)("div", __assign({ ref: ref, className: "kie-dmn-editor--node kie-dmn-editor--unknown-node ".concat(className), tabIndex: -1 }, { children: [(0, jsx_runtime_1.jsx)(InfoNodePanel_1.InfoNodePanel, { isVisible: !isTargeted && isHovered }), (0, jsx_runtime_1.jsx)(EditableNodeLabel_1.EditableNodeLabel, { namedElement: undefined, namedElementQName: undefined, position: "center-center", isEditing: false, setEditing: function () { }, value: "? ", onChange: function () { }, skipValidation: false, allUniqueNames: new Map(), shouldCommitOnBlur: true }), selected && !dragging && ((0, jsx_runtime_1.jsx)(NodeResizerHandle, { nodeType: type, snapGrid: diagram.snapGrid, nodeId: id, nodeShapeIndex: shape.index }))] }))] }));
});
function EmptyLabel() {
    return ((0, jsx_runtime_1.jsxs)("span", __assign({ style: { fontFamily: "serif" } }, { children: [(0, jsx_runtime_1.jsx)("i", __assign({ style: { opacity: 0.8 } }, { children: "<Empty>" })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("i", __assign({ style: { opacity: 0.5, fontSize: "0.8em", lineHeight: "0.8em" } }, { children: "Double-click to name" }))] })));
}
exports.EmptyLabel = EmptyLabel;
var resizerControlStyle = {
    background: "transparent",
    border: "none",
};
function NodeResizerHandle(props) {
    var minSize = DefaultSizes_2.MIN_NODE_SIZES[props.nodeType](props.snapGrid);
    return ((0, jsx_runtime_1.jsx)(RF.NodeResizeControl, __assign({ style: resizerControlStyle, minWidth: minSize["@_width"], minHeight: minSize["@_height"] }, { children: (0, jsx_runtime_1.jsx)("div", { style: {
                position: "absolute",
                top: "-10px",
                left: "-10px",
                width: "12px",
                height: "12px",
                backgroundColor: "black",
                clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
            } }) })));
}
exports.NodeResizerHandle = NodeResizerHandle;
function useNodeResizing(id) {
    var _a;
    var node = RF.useStore(function (s) { return s.nodeInternals.get(id); });
    if (!node) {
        throw new Error("Can't use nodeInternals of non-existent node " + id);
    }
    return (_a = node.resizing) !== null && _a !== void 0 ? _a : false;
}
function useNodeDimensions(type, snapGrid, id, shape, isExternal) {
    var _a, _b;
    var node = RF.useStore(function (s) { return s.nodeInternals.get(id); });
    if (!node) {
        throw new Error("Can't use nodeInternals of non-existent node " + id);
    }
    if (type === NodeTypes_1.NODE_TYPES.decisionService && (isExternal || shape["@_isCollapsed"])) {
        return DefaultSizes_1.DECISION_SERVICE_COLLAPSED_DIMENSIONS;
    }
    var minSizes = DefaultSizes_2.MIN_NODE_SIZES[node.type](snapGrid);
    return {
        width: (_a = node.width) !== null && _a !== void 0 ? _a : (0, SnapGrid_1.snapShapeDimensions)(snapGrid, shape, minSizes).width,
        height: (_b = node.height) !== null && _b !== void 0 ? _b : (0, SnapGrid_1.snapShapeDimensions)(snapGrid, shape, minSizes).height,
    };
}
function useHoveredNodeAlwaysOnTop(ref, layer, isHovered, dragging, selected, isEditing) {
    (0, react_1.useEffect)(function () {
        setTimeout(function () {
            var _a;
            if (selected && !isEditing) {
                (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
            if (ref.current) {
                ref.current.parentElement.style.zIndex = "".concat(isHovered || dragging ? layer + 1000 + 1 : layer);
            }
        }, 0);
    }, [dragging, isHovered, ref, selected, layer, isEditing]);
}
function useConnection(nodeId) {
    var _a;
    var connectionNodeId = RF.useStore(function (s) { return s.connectionNodeId; });
    var connectionHandleId = RF.useStore(function (s) { return s.connectionHandleId; });
    var connectionHandleType = RF.useStore(function (s) { return s.connectionHandleType; });
    var edgeIdBeingUpdated = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram.edgeIdBeingUpdated; });
    var edgesById = (0, DerivedStore_1.useDmnEditorDerivedStore)().edgesById;
    var edge = edgeIdBeingUpdated ? edgesById.get(edgeIdBeingUpdated) : null;
    var source = connectionNodeId;
    var target = nodeId;
    var sourceHandle = (_a = connectionHandleId !== null && connectionHandleId !== void 0 ? connectionHandleId : edge === null || edge === void 0 ? void 0 : edge.type) !== null && _a !== void 0 ? _a : null;
    var connection = {
        source: connectionHandleType === "source" ? source : target,
        target: connectionHandleType === "source" ? target : source,
        sourceHandle: sourceHandle,
        targetHandle: null,
    };
    return connection;
}
exports.useConnection = useConnection;
function useConnectionTargetStatus(nodeId, isHovered) {
    var _a;
    var connectionNodeId = RF.useStore(function (s) { return s.connectionNodeId; });
    var isValidConnection = RF.useStore(function (s) { return s.isValidConnection; });
    var connection = useConnection(nodeId);
    return {
        isTargeted: !!connectionNodeId && connectionNodeId !== nodeId && isHovered,
        isValidConnectionTarget: (_a = isValidConnection === null || isValidConnection === void 0 ? void 0 : isValidConnection(connection)) !== null && _a !== void 0 ? _a : false,
        isConnecting: !!connectionNodeId,
    };
}
exports.useConnectionTargetStatus = useConnectionTargetStatus;
function useNodeClassName(dropTargetNode, isConnecting, isValidConnectionTarget, nodeId) {
    var isDropTargetNodeValidForSelection = (0, DerivedStore_1.useDmnEditorDerivedStore)().isDropTargetNodeValidForSelection;
    var connectionNodeId = RF.useStore(function (s) { return s.connectionNodeId; });
    var connection = useConnection(nodeId);
    var isEdgeConnection = !!Object.values(EdgeTypes_1.EDGE_TYPES).find(function (s) { return s === connection.sourceHandle; });
    var isNodeConnection = !!Object.values(NodeTypes_1.NODE_TYPES).find(function (s) { return s === connection.sourceHandle; });
    if (isNodeConnection && isConnecting && connectionNodeId !== nodeId) {
        return "dimmed";
    }
    if (isEdgeConnection && isConnecting && (!isValidConnectionTarget || connectionNodeId === nodeId)) {
        return "dimmed";
    }
    if ((dropTargetNode === null || dropTargetNode === void 0 ? void 0 : dropTargetNode.id) === nodeId && graphStructure_1.containment.get(dropTargetNode.type)) {
        return isDropTargetNodeValidForSelection ? "drop-target" : "drop-target-invalid";
    }
    return "normal";
}
exports.useNodeClassName = useNodeClassName;
function useDataTypeCreationCallbackForNodes(index, drgElementName) {
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    return (0, react_1.useCallback)(function (newDataTypeName) {
        dmnEditorStoreApi.setState(function (state) {
            var _a;
            var drgElement = state.dmn.model.definitions.drgElement[index];
            (_a = drgElement.variable) !== null && _a !== void 0 ? _a : (drgElement.variable = { "@_name": drgElementName });
            drgElement.variable["@_typeRef"] = newDataTypeName;
            var newItemDefinition = (0, addTopLevelItemDefinition_1.addTopLevelItemDefinition)({
                definitions: state.dmn.model.definitions,
                partial: { "@_name": newDataTypeName, typeRef: { __$$text: api_1.DmnBuiltInDataType.Undefined } },
            });
            state.dataTypesEditor.activeItemDefinitionId = newItemDefinition["@_id"];
            state.navigation.tab = Store_1.DmnEditorTab.DATA_TYPES;
            state.focus.consumableId = newItemDefinition["@_id"];
        });
    }, [dmnEditorStoreApi, drgElementName, index]);
}
exports.useDataTypeCreationCallbackForNodes = useDataTypeCreationCallbackForNodes;
//# sourceMappingURL=Nodes.js.map