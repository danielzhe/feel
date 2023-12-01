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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanWhenAltPressed = exports.KeyboardShortcuts = exports.SelectionStatus = exports.TopRightCornerPanels = exports.SetConnectionToReactFlowStore = exports.Diagram = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var RF = __importStar(require("reactflow"));
var react_1 = require("react");
var qNames_1 = require("@kie-tools/xml-parser-ts/dist/qNames");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var Label_1 = require("@patternfly/react-core/dist/js/components/Label");
var Popover_1 = require("@patternfly/react-core/dist/js/components/Popover");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var Bullseye_1 = require("@patternfly/react-core/dist/js/layouts/Bullseye");
var table_icon_1 = require("@patternfly/react-icons/dist/js/icons/table-icon");
var info_icon_1 = require("@patternfly/react-icons/dist/js/icons/info-icon");
var times_icon_1 = require("@patternfly/react-icons/dist/js/icons/times-icon");
var virtual_machine_icon_1 = require("@patternfly/react-icons/dist/js/icons/virtual-machine-icon");
var DmnEditorContext_1 = require("../DmnEditorContext");
var Clipboard_1 = require("../clipboard/Clipboard");
var ExternalNodesPanel_1 = require("../externalNodes/ExternalNodesPanel");
var dmnIdRandomizer_1 = require("../idRandomizer/dmnIdRandomizer");
var NodeNature_1 = require("../mutations/NodeNature");
var addConnectedNode_1 = require("../mutations/addConnectedNode");
var addDecisionToDecisionService_1 = require("../mutations/addDecisionToDecisionService");
var addEdge_1 = require("../mutations/addEdge");
var addOrGetDrd_1 = require("../mutations/addOrGetDrd");
var addShape_1 = require("../mutations/addShape");
var addStandaloneNode_1 = require("../mutations/addStandaloneNode");
var deleteDecisionFromDecisionService_1 = require("../mutations/deleteDecisionFromDecisionService");
var deleteEdge_1 = require("../mutations/deleteEdge");
var deleteNode_1 = require("../mutations/deleteNode");
var repopulateInputDataAndDecisionsOnDecisionService_1 = require("../mutations/repopulateInputDataAndDecisionsOnDecisionService");
var repositionNode_1 = require("../mutations/repositionNode");
var resizeNode_1 = require("../mutations/resizeNode");
var OverlaysPanel_1 = require("../overlaysPanel/OverlaysPanel");
var DerivedStore_1 = require("../store/DerivedStore");
var Store_1 = require("../store/Store");
var xmlHrefs_1 = require("../xml/xmlHrefs");
var xmlNamespaceDeclarations_1 = require("../xml/xmlNamespaceDeclarations");
var DiagramContainerContext_1 = require("./DiagramContainerContext");
var Palette_1 = require("./Palette");
var SnapGrid_1 = require("./SnapGrid");
var ConnectionLine_1 = require("./connections/ConnectionLine");
var PositionalNodeHandles_1 = require("./connections/PositionalNodeHandles");
var graphStructure_1 = require("./connections/graphStructure");
var isValidConnection_1 = require("./connections/isValidConnection");
var EdgeMarkers_1 = require("./edges/EdgeMarkers");
var EdgeTypes_1 = require("./edges/EdgeTypes");
var Edges_1 = require("./edges/Edges");
var DmnMaths_1 = require("./maths/DmnMaths");
var DefaultSizes_1 = require("./nodes/DefaultSizes");
var NodeTypes_1 = require("./nodes/NodeTypes");
var Nodes_1 = require("./nodes/Nodes");
var blueprint_icon_1 = require("@patternfly/react-icons/dist/js/icons/blueprint-icon");
var mouse_pointer_icon_1 = require("@patternfly/react-icons/dist/js/icons/mouse-pointer-icon");
var updateExpression_1 = require("../mutations/updateExpression");
var getDefaultExpressionDefinitionByLogicType_1 = require("../boxedExpressions/getDefaultExpressionDefinitionByLogicType");
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var getDefaultColumnWidth_1 = require("../boxedExpressions/getDefaultColumnWidth");
var graph_1 = require("./graph/graph");
var DrgNodesPanel_1 = require("./DrgNodesPanel");
var isFirefox = typeof window.InstallTrigger !== "undefined";
var PAN_ON_DRAG = [1, 2];
var FIT_VIEW_OPTIONS = { maxZoom: 1, minZoom: 0.1, duration: 400 };
var DEFAULT_VIEWPORT = { x: 100, y: 0, zoom: 1 };
var nodeTypes = (_a = {},
    _a[NodeTypes_1.NODE_TYPES.decisionService] = Nodes_1.DecisionServiceNode,
    _a[NodeTypes_1.NODE_TYPES.group] = Nodes_1.GroupNode,
    _a[NodeTypes_1.NODE_TYPES.inputData] = Nodes_1.InputDataNode,
    _a[NodeTypes_1.NODE_TYPES.decision] = Nodes_1.DecisionNode,
    _a[NodeTypes_1.NODE_TYPES.bkm] = Nodes_1.BkmNode,
    _a[NodeTypes_1.NODE_TYPES.knowledgeSource] = Nodes_1.KnowledgeSourceNode,
    _a[NodeTypes_1.NODE_TYPES.textAnnotation] = Nodes_1.TextAnnotationNode,
    _a[NodeTypes_1.NODE_TYPES.unknown] = Nodes_1.UnknownNode,
    _a);
var edgeTypes = (_b = {},
    _b[EdgeTypes_1.EDGE_TYPES.informationRequirement] = Edges_1.InformationRequirementEdge,
    _b[EdgeTypes_1.EDGE_TYPES.authorityRequirement] = Edges_1.AuthorityRequirementEdge,
    _b[EdgeTypes_1.EDGE_TYPES.knowledgeRequirement] = Edges_1.KnowledgeRequirementEdge,
    _b[EdgeTypes_1.EDGE_TYPES.association] = Edges_1.AssociationEdge,
    _b);
function Diagram(_a) {
    var container = _a.container;
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var thisDmn = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn; });
    var dmnModelBeforeEditingRef = (0, DmnEditorContext_1.useDmnEditor)().dmnModelBeforeEditingRef;
    var _b = (0, DerivedStore_1.useDmnEditorDerivedStore)(), dmnShapesByHref = _b.dmnShapesByHref, nodesById = _b.nodesById, selectedNodesById = _b.selectedNodesById, selectedEdgesById = _b.selectedEdgesById, edgesById = _b.edgesById, nodes = _b.nodes, edges = _b.edges, isDropTargetNodeValidForSelection = _b.isDropTargetNodeValidForSelection, isDiagramEditingInProgress = _b.isDiagramEditingInProgress, selectedNodeTypes = _b.selectedNodeTypes, externalDmnsByNamespace = _b.externalDmnsByNamespace, drgElementsWithoutVisualRepresentationOnCurrentDrd = _b.drgElementsWithoutVisualRepresentationOnCurrentDrd;
    var _c = __read((0, react_1.useState)(undefined), 2), reactFlowInstance = _c[0], setReactFlowInstance = _c[1];
    var nodeIdBeingDraggedRef = (0, react_1.useRef)(null);
    var rfSnapGrid = (0, react_1.useMemo)(function () { return (diagram.snapGrid.isEnabled ? [diagram.snapGrid.x, diagram.snapGrid.y] : [1, 1]); }, [diagram.snapGrid.isEnabled, diagram.snapGrid.x, diagram.snapGrid.y]);
    var onConnect = (0, react_1.useCallback)(function (connection) {
        console.debug("DMN DIAGRAM: `onConnect`: ", connection);
        var sourceNode = nodesById.get(connection.source);
        var targetNode = nodesById.get(connection.target);
        if (!sourceNode || !targetNode) {
            throw new Error("Cannot create connection without target and source nodes!");
        }
        var sourceBounds = sourceNode.data.shape["dc:Bounds"];
        var targetBounds = targetNode.data.shape["dc:Bounds"];
        if (!sourceBounds || !targetBounds) {
            throw new Error("Cannot create connection without target bounds!");
        }
        dmnEditorStoreApi.setState(function (state) {
            (0, addEdge_1.addEdge)({
                definitions: state.dmn.model.definitions,
                drdIndex: state.diagram.drdIndex,
                edge: {
                    type: connection.sourceHandle,
                    targetHandle: connection.targetHandle,
                    sourceHandle: PositionalNodeHandles_1.PositionalNodeHandleId.Center,
                },
                sourceNode: {
                    type: sourceNode.type,
                    data: sourceNode.data,
                    href: sourceNode.id,
                    bounds: sourceBounds,
                    shapeId: sourceNode.data.shape["@_id"],
                },
                targetNode: {
                    type: targetNode.type,
                    href: targetNode.id,
                    data: targetNode.data,
                    bounds: targetBounds,
                    index: targetNode.data.index,
                    shapeId: targetNode.data.shape["@_id"],
                },
                keepWaypoints: false,
            });
        });
    }, [dmnEditorStoreApi, nodesById]);
    var getFirstNodeFittingBounds = (0, react_1.useCallback)(function (nodeIdToIgnore, bounds, minSizes, snapGrid) {
        return reactFlowInstance === null || reactFlowInstance === void 0 ? void 0 : reactFlowInstance.getNodes().reverse().find(function (node) {
            return node.id !== nodeIdToIgnore &&
                (0, DmnMaths_1.getContainmentRelationship)({
                    bounds: bounds,
                    container: node.data.shape["dc:Bounds"],
                    snapGrid: snapGrid,
                    containerMinSizes: DefaultSizes_1.MIN_NODE_SIZES[node.type],
                    boundsMinSizes: minSizes,
                }).isInside;
        });
    }, [reactFlowInstance]);
    var onDragOver = (0, react_1.useCallback)(function (e) {
        if (!e.dataTransfer.types.find(function (t) {
            return t === Palette_1.MIME_TYPE_FOR_DMN_EDITOR_NEW_NODE_FROM_PALETTE ||
                t === ExternalNodesPanel_1.MIME_TYPE_FOR_DMN_EDITOR_EXTERNAL_NODES_FROM_INCLUDED_MODELS ||
                t === DrgNodesPanel_1.MIME_TYPE_FOR_DMN_EDITOR_DRG_NODE;
        })) {
            return;
        }
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    }, []);
    var onDrop = (0, react_1.useCallback)(function (e) {
        var _a, _b;
        e.preventDefault();
        if (!container.current || !reactFlowInstance) {
            return;
        }
        var containerBounds = container.current.getBoundingClientRect();
        var dropPoint = reactFlowInstance.project({
            x: e.clientX - containerBounds.left,
            y: e.clientY - containerBounds.top,
        });
        if (e.dataTransfer.getData(Palette_1.MIME_TYPE_FOR_DMN_EDITOR_NEW_NODE_FROM_PALETTE)) {
            var typeOfNewNodeFromPalette_1 = e.dataTransfer.getData(Palette_1.MIME_TYPE_FOR_DMN_EDITOR_NEW_NODE_FROM_PALETTE);
            e.stopPropagation();
            dmnEditorStoreApi.setState(function (state) {
                var _a = (0, addStandaloneNode_1.addStandaloneNode)({
                    definitions: state.dmn.model.definitions,
                    drdIndex: state.diagram.drdIndex,
                    newNode: {
                        type: typeOfNewNodeFromPalette_1,
                        bounds: {
                            "@_x": dropPoint.x,
                            "@_y": dropPoint.y,
                            "@_width": DefaultSizes_1.DEFAULT_NODE_SIZES[typeOfNewNodeFromPalette_1](state.diagram.snapGrid)["@_width"],
                            "@_height": DefaultSizes_1.DEFAULT_NODE_SIZES[typeOfNewNodeFromPalette_1](state.diagram.snapGrid)["@_height"],
                        },
                    },
                }), id = _a.id, newNodeId = _a.href;
                state.diagram._selectedNodes = [newNodeId];
                state.focus.consumableId = id;
            });
        }
        else if (e.dataTransfer.getData(ExternalNodesPanel_1.MIME_TYPE_FOR_DMN_EDITOR_EXTERNAL_NODES_FROM_INCLUDED_MODELS)) {
            e.stopPropagation();
            var externalNode_1 = JSON.parse(e.dataTransfer.getData(ExternalNodesPanel_1.MIME_TYPE_FOR_DMN_EDITOR_EXTERNAL_NODES_FROM_INCLUDED_MODELS));
            var externalDrgElement_1 = ((_b = (_a = externalDmnsByNamespace.get(externalNode_1.externalDrgElementNamespace)) === null || _a === void 0 ? void 0 : _a.model.definitions.drgElement) !== null && _b !== void 0 ? _b : []).find(function (s) { return s["@_id"] === externalNode_1.externalDrgElementId; });
            if (!externalDrgElement_1) {
                throw new Error("Can't find DRG element with id '".concat(externalNode_1.externalDrgElementId, "'."));
            }
            var externalNodeType_1 = (0, DmnMaths_1.getNodeTypeFromDmnObject)(externalDrgElement_1);
            dmnEditorStoreApi.setState(function (state) {
                var defaultExternalNodeDimensions = DefaultSizes_1.DEFAULT_NODE_SIZES[externalNodeType_1](state.diagram.snapGrid);
                var namespaceName = (0, xmlNamespaceDeclarations_1.getXmlNamespaceDeclarationName)({
                    model: state.dmn.model.definitions,
                    namespace: externalNode_1.externalDrgElementNamespace,
                });
                if (!namespaceName) {
                    throw new Error("Can't find namespace name for '".concat(externalNode_1.externalDrgElementNamespace, "'."));
                }
                (0, addShape_1.addShape)({
                    definitions: state.dmn.model.definitions,
                    drdIndex: state.diagram.drdIndex,
                    nodeType: externalNodeType_1,
                    shape: {
                        "@_dmnElementRef": (0, qNames_1.buildXmlQName)({
                            type: "xml-qname",
                            prefix: namespaceName,
                            localPart: externalDrgElement_1["@_id"],
                        }),
                        "@_isCollapsed": true,
                        "dc:Bounds": {
                            "@_x": dropPoint.x,
                            "@_y": dropPoint.y,
                            "@_width": defaultExternalNodeDimensions["@_width"],
                            "@_height": defaultExternalNodeDimensions["@_height"],
                        },
                    },
                });
                state.diagram._selectedNodes = [
                    (0, xmlHrefs_1.buildXmlHref)({
                        namespace: externalNode_1.externalDrgElementNamespace,
                        id: externalNode_1.externalDrgElementId,
                    }),
                ];
            });
            console.debug("DMN DIAGRAM: Adding external node", JSON.stringify(externalNode_1));
        }
        else if (e.dataTransfer.getData(DrgNodesPanel_1.MIME_TYPE_FOR_DMN_EDITOR_DRG_NODE)) {
            var drgElement_1 = JSON.parse(e.dataTransfer.getData(DrgNodesPanel_1.MIME_TYPE_FOR_DMN_EDITOR_DRG_NODE));
            var nodeType_1 = (0, DmnMaths_1.getNodeTypeFromDmnObject)(drgElement_1);
            dmnEditorStoreApi.setState(function (state) {
                var defaultNodeDimensions = DefaultSizes_1.DEFAULT_NODE_SIZES[nodeType_1](state.diagram.snapGrid);
                (0, addShape_1.addShape)({
                    definitions: state.dmn.model.definitions,
                    drdIndex: state.diagram.drdIndex,
                    nodeType: nodeType_1,
                    shape: {
                        "@_dmnElementRef": (0, qNames_1.buildXmlQName)({ type: "xml-qname", localPart: drgElement_1["@_id"] }),
                        "@_isCollapsed": false,
                        "dc:Bounds": {
                            "@_x": dropPoint.x,
                            "@_y": dropPoint.y,
                            "@_width": defaultNodeDimensions["@_width"],
                            "@_height": defaultNodeDimensions["@_height"],
                        },
                    },
                });
            });
            console.debug("DMN DIAGRAM: Adding DRG node", JSON.stringify(drgElement_1));
        }
    }, [container, reactFlowInstance, dmnEditorStoreApi, externalDmnsByNamespace]);
    (0, react_1.useEffect)(function () {
        var edgeUpdaterSource = document.querySelectorAll(".react-flow__edgeupdater-source, .react-flow__edgeupdater-target");
        if (diagram.ongoingConnection) {
            edgeUpdaterSource.forEach(function (e) { return e.classList.add("hidden"); });
        }
        else {
            edgeUpdaterSource.forEach(function (e) { return e.classList.remove("hidden"); });
        }
    }, [diagram.ongoingConnection]);
    var onConnectStart = (0, react_1.useCallback)(function (e, newConnection) {
        console.debug("DMN DIAGRAM: `onConnectStart`");
        dmnEditorStoreApi.setState(function (state) {
            state.diagram.ongoingConnection = newConnection;
        });
    }, [dmnEditorStoreApi]);
    var onConnectEnd = (0, react_1.useCallback)(function (e) {
        var _a, _b, _c;
        console.debug("DMN DIAGRAM: `onConnectEnd`");
        dmnEditorStoreApi.setState(function (state) {
            state.diagram.ongoingConnection = undefined;
        });
        var targetIsPane = (_b = (_a = e.target) === null || _a === void 0 ? void 0 : _a.classList) === null || _b === void 0 ? void 0 : _b.contains("react-flow__pane");
        if (!targetIsPane || !container.current || !diagram.ongoingConnection || !reactFlowInstance) {
            return;
        }
        var containerBounds = container.current.getBoundingClientRect();
        var dropPoint = reactFlowInstance.project({
            x: e.clientX - containerBounds.left,
            y: e.clientY - containerBounds.top,
        });
        if (!Object.values(NodeTypes_1.NODE_TYPES).find(function (n) { return n === diagram.ongoingConnection.handleId; })) {
            return;
        }
        if (!diagram.ongoingConnection.nodeId) {
            return;
        }
        var sourceNode = nodesById.get(diagram.ongoingConnection.nodeId);
        if (!sourceNode) {
            return;
        }
        var sourceNodeBounds = (_c = dmnShapesByHref.get(sourceNode.id)) === null || _c === void 0 ? void 0 : _c["dc:Bounds"];
        if (!sourceNodeBounds) {
            return;
        }
        var newNodeType = diagram.ongoingConnection.handleId;
        var sourceNodeType = sourceNode.type;
        var edge = (0, graphStructure_1.getDefaultEdgeTypeBetween)(sourceNodeType, newNodeType);
        if (!edge) {
            throw new Error("DMN DIAGRAM: Invalid structure: ".concat(sourceNodeType, " --(any)--> ").concat(newNodeType));
        }
        dmnEditorStoreApi.setState(function (state) {
            var _a = (0, addConnectedNode_1.addConnectedNode)({
                definitions: state.dmn.model.definitions,
                drdIndex: state.diagram.drdIndex,
                edge: edge,
                sourceNode: {
                    href: sourceNode.id,
                    type: sourceNodeType,
                    bounds: sourceNodeBounds,
                    shapeId: sourceNode.data.shape["@_id"],
                },
                newNode: {
                    type: newNodeType,
                    bounds: {
                        "@_x": dropPoint.x,
                        "@_y": dropPoint.y,
                        "@_width": DefaultSizes_1.DEFAULT_NODE_SIZES[newNodeType](state.diagram.snapGrid)["@_width"],
                        "@_height": DefaultSizes_1.DEFAULT_NODE_SIZES[newNodeType](state.diagram.snapGrid)["@_height"],
                    },
                },
            }), id = _a.id, newDmnObejctHref = _a.href;
            state.diagram._selectedNodes = [newDmnObejctHref];
            state.focus.consumableId = id;
        });
    }, [dmnEditorStoreApi, container, diagram.ongoingConnection, reactFlowInstance, nodesById, dmnShapesByHref]);
    var isValidConnection = (0, react_1.useCallback)(function (edgeOrConnection) {
        var _a, _b, _c;
        var state = dmnEditorStoreApi.getState();
        var edgeId = state.diagram.edgeIdBeingUpdated;
        var edgeType = edgeId ? (_a = reactFlowInstance === null || reactFlowInstance === void 0 ? void 0 : reactFlowInstance.getEdge(edgeId)) === null || _a === void 0 ? void 0 : _a.type : undefined;
        var ongoingConnectionHierarchy = (0, graph_1.buildHierarchy)({
            nodeId: (_b = state.diagram.ongoingConnection) === null || _b === void 0 ? void 0 : _b.nodeId,
            edges: (_c = reactFlowInstance === null || reactFlowInstance === void 0 ? void 0 : reactFlowInstance.getEdges()) !== null && _c !== void 0 ? _c : [],
        });
        return (edgeOrConnection.source !== edgeOrConnection.target &&
            (0, isValidConnection_1.checkIsValidConnection)(nodesById, edgeOrConnection, edgeType) &&
            !!edgeOrConnection.target &&
            !ongoingConnectionHierarchy.dependencies.has(edgeOrConnection.target) &&
            !!edgeOrConnection.source &&
            !ongoingConnectionHierarchy.dependents.has(edgeOrConnection.source));
    }, [dmnEditorStoreApi, reactFlowInstance, nodesById]);
    var onNodesChange = (0, react_1.useCallback)(function (changes) {
        if (!reactFlowInstance) {
            return;
        }
        dmnEditorStoreApi.setState(function (state) {
            var e_1, _a;
            var _b, _c, _d, _e, _f, _g, _h;
            var controlWaypointsByEdge = new Map();
            var _loop_1 = function (change) {
                switch (change.type) {
                    case "add":
                        console.debug("DMN DIAGRAM: 'onNodesChange' --> add '".concat(change.item.id, "'"));
                        state.dispatch.diagram.setNodeStatus(state, change.item.id, { selected: true });
                        break;
                    case "dimensions":
                        console.debug("DMN DIAGRAM: 'onNodesChange' --> dimensions '".concat(change.id, "'"));
                        state.dispatch.diagram.setNodeStatus(state, change.id, { resizing: change.resizing });
                        if (change.dimensions) {
                            var node_1 = nodesById.get(change.id);
                            var snappedShape = (0, SnapGrid_1.snapShapeDimensions)(state.diagram.snapGrid, node_1.data.shape, DefaultSizes_1.MIN_NODE_SIZES[node_1.type](state.diagram.snapGrid));
                            if (snappedShape.width !== change.dimensions.width ||
                                snappedShape.height !== change.dimensions.height) {
                                (0, resizeNode_1.resizeNode)({
                                    definitions: state.dmn.model.definitions,
                                    drdIndex: state.diagram.drdIndex,
                                    dmnShapesByHref: dmnShapesByHref,
                                    snapGrid: state.diagram.snapGrid,
                                    change: {
                                        isExternal: !!node_1.data.dmnObjectQName.prefix,
                                        nodeType: node_1.type,
                                        index: node_1.data.index,
                                        shapeIndex: node_1.data.shape.index,
                                        sourceEdgeIndexes: edges.flatMap(function (e) { var _a; return e.source === change.id && ((_a = e.data) === null || _a === void 0 ? void 0 : _a.dmnEdge) ? [e.data.dmnEdge.index] : []; }),
                                        targetEdgeIndexes: edges.flatMap(function (e) { var _a; return e.target === change.id && ((_a = e.data) === null || _a === void 0 ? void 0 : _a.dmnEdge) ? [e.data.dmnEdge.index] : []; }),
                                        dimension: {
                                            "@_width": (_c = (_b = change.dimensions) === null || _b === void 0 ? void 0 : _b.width) !== null && _c !== void 0 ? _c : 0,
                                            "@_height": (_e = (_d = change.dimensions) === null || _d === void 0 ? void 0 : _d.height) !== null && _e !== void 0 ? _e : 0,
                                        },
                                    },
                                });
                            }
                        }
                        break;
                    case "position":
                        console.debug("DMN DIAGRAM: 'onNodesChange' --> position '".concat(change.id, "'"));
                        state.dispatch.diagram.setNodeStatus(state, change.id, { dragging: change.dragging });
                        if (change.positionAbsolute) {
                            var node_2 = nodesById.get(change.id);
                            var delta = (0, repositionNode_1.repositionNode)({
                                definitions: state.dmn.model.definitions,
                                drdIndex: state.diagram.drdIndex,
                                controlWaypointsByEdge: controlWaypointsByEdge,
                                change: {
                                    type: "absolute",
                                    nodeType: node_2.type,
                                    selectedEdges: __spreadArray([], __read(selectedEdgesById.keys()), false),
                                    shapeIndex: node_2.data.shape.index,
                                    sourceEdgeIndexes: edges.flatMap(function (e) { var _a; return e.source === change.id && ((_a = e.data) === null || _a === void 0 ? void 0 : _a.dmnEdge) ? [e.data.dmnEdge.index] : []; }),
                                    targetEdgeIndexes: edges.flatMap(function (e) { var _a; return e.target === change.id && ((_a = e.data) === null || _a === void 0 ? void 0 : _a.dmnEdge) ? [e.data.dmnEdge.index] : []; }),
                                    position: change.positionAbsolute,
                                },
                            }).delta;
                            if (node_2.type === NodeTypes_1.NODE_TYPES.decisionService && !node_2.data.dmnObjectQName.prefix) {
                                var decisionService = node_2.data.dmnObject;
                                var nested = __spreadArray(__spreadArray([], __read(((_f = decisionService.outputDecision) !== null && _f !== void 0 ? _f : [])), false), __read(((_g = decisionService.encapsulatedDecision) !== null && _g !== void 0 ? _g : [])), false);
                                var _loop_2 = function (i) {
                                    var nestedNode = nodesById.get(nested[i]["@_href"]);
                                    var snappedNestedNodeShapeWithAppliedDelta = (0, SnapGrid_1.snapShapePosition)(state.diagram.snapGrid, (0, SnapGrid_1.offsetShapePosition)(nestedNode.data.shape, delta));
                                    (0, repositionNode_1.repositionNode)({
                                        definitions: state.dmn.model.definitions,
                                        drdIndex: state.diagram.drdIndex,
                                        controlWaypointsByEdge: controlWaypointsByEdge,
                                        change: {
                                            type: "absolute",
                                            nodeType: nestedNode.type,
                                            selectedEdges: edges.map(function (e) { return e.id; }),
                                            shapeIndex: nestedNode.data.shape.index,
                                            sourceEdgeIndexes: edges.flatMap(function (e) { var _a; return e.source === nestedNode.id && ((_a = e.data) === null || _a === void 0 ? void 0 : _a.dmnEdge) ? [e.data.dmnEdge.index] : []; }),
                                            targetEdgeIndexes: edges.flatMap(function (e) { var _a; return e.target === nestedNode.id && ((_a = e.data) === null || _a === void 0 ? void 0 : _a.dmnEdge) ? [e.data.dmnEdge.index] : []; }),
                                            position: snappedNestedNodeShapeWithAppliedDelta,
                                        },
                                    });
                                };
                                for (var i = 0; i < nested.length; i++) {
                                    _loop_2(i);
                                }
                            }
                        }
                        break;
                    case "remove":
                        console.debug("DMN DIAGRAM: 'onNodesChange' --> remove '".concat(change.id, "'"));
                        var node = nodesById.get(change.id);
                        (0, deleteNode_1.deleteNode)({
                            definitions: state.dmn.model.definitions,
                            drdIndex: state.diagram.drdIndex,
                            dmnObjectQName: node.data.dmnObjectQName,
                            dmnObjectId: (_h = node.data.dmnObject) === null || _h === void 0 ? void 0 : _h["@_id"],
                            nodeNature: NodeNature_1.nodeNatures[node.type],
                        });
                        state.dispatch.diagram.setNodeStatus(state, node.id, {
                            selected: false,
                            dragging: false,
                            resizing: false,
                        });
                        break;
                    case "reset":
                        state.dispatch.diagram.setNodeStatus(state, change.item.id, {
                            selected: false,
                            dragging: false,
                            resizing: false,
                        });
                        break;
                    case "select":
                        state.dispatch.diagram.setNodeStatus(state, change.id, { selected: change.selected });
                        break;
                }
            };
            try {
                for (var changes_1 = __values(changes), changes_1_1 = changes_1.next(); !changes_1_1.done; changes_1_1 = changes_1.next()) {
                    var change = changes_1_1.value;
                    _loop_1(change);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (changes_1_1 && !changes_1_1.done && (_a = changes_1.return)) _a.call(changes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }, [reactFlowInstance, dmnEditorStoreApi, nodesById, dmnShapesByHref, edges, selectedEdgesById]);
    var resetToBeforeEditingBegan = (0, react_1.useCallback)(function () {
        dmnEditorStoreApi.setState(function (state) {
            state.dmn.model = dmnModelBeforeEditingRef.current;
            state.diagram.draggingNodes = [];
            state.diagram.draggingWaypoints = [];
            state.diagram.resizingNodes = [];
            state.diagram.dropTargetNode = undefined;
            state.diagram.edgeIdBeingUpdated = undefined;
        });
    }, [dmnEditorStoreApi, dmnModelBeforeEditingRef]);
    var onNodeDrag = (0, react_1.useCallback)(function (e, node) {
        nodeIdBeingDraggedRef.current = node.id;
        dmnEditorStoreApi.setState(function (state) {
            var _a, _b, _c, _d, _e, _f;
            state.diagram.dropTargetNode = getFirstNodeFittingBounds(node.id, {
                "@_x": (_b = (_a = node.positionAbsolute) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : 0,
                "@_y": (_d = (_c = node.positionAbsolute) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0,
                "@_width": (_e = node.width) !== null && _e !== void 0 ? _e : 0,
                "@_height": (_f = node.height) !== null && _f !== void 0 ? _f : 0,
            }, DefaultSizes_1.MIN_NODE_SIZES[node.type], state.diagram.snapGrid);
        });
    }, [dmnEditorStoreApi, getFirstNodeFittingBounds]);
    var onNodeDragStart = (0, react_1.useCallback)(function (e, node, nodes) {
        dmnModelBeforeEditingRef.current = thisDmn.model;
        onNodeDrag(e, node, nodes);
    }, [thisDmn.model, dmnModelBeforeEditingRef, onNodeDrag]);
    var onNodeDragStop = (0, react_1.useCallback)(function (e, node) {
        console.debug("DMN DIAGRAM: `onNodeDragStop`");
        var nodeBeingDragged = nodesById.get(nodeIdBeingDraggedRef.current);
        nodeIdBeingDraggedRef.current = null;
        if (!nodeBeingDragged) {
            return;
        }
        var dropTargetNode = dmnEditorStoreApi.getState().diagram.dropTargetNode;
        if (dropTargetNode && graphStructure_1.containment.has(dropTargetNode.type) && !isDropTargetNodeValidForSelection) {
            console.debug("DMN DIAGRAM: Invalid containment: '".concat(__spreadArray([], __read(selectedNodeTypes), false).join("', '"), "' inside '").concat(dropTargetNode.type, "'. Ignoring nodes dropped."));
            resetToBeforeEditingBegan();
            return;
        }
        var selectedNodes = __spreadArray([], __read(selectedNodesById.values()), false);
        try {
            dmnEditorStoreApi.setState(function (state) {
                state.diagram.dropTargetNode = undefined;
                if (!node.dragging) {
                    return;
                }
                if (nodeBeingDragged.data.parentRfNode) {
                    var p = nodesById.get(nodeBeingDragged.data.parentRfNode.id);
                    if ((p === null || p === void 0 ? void 0 : p.type) === NodeTypes_1.NODE_TYPES.decisionService && nodeBeingDragged.type === NodeTypes_1.NODE_TYPES.decision) {
                        for (var i = 0; i < selectedNodes.length; i++) {
                            (0, deleteDecisionFromDecisionService_1.deleteDecisionFromDecisionService)({
                                definitions: state.dmn.model.definitions,
                                decisionId: selectedNodes[i].data.dmnObject["@_id"],
                                decisionServiceId: p.data.dmnObject["@_id"],
                            });
                        }
                    }
                    else {
                        console.debug("DMN DIAGRAM: Ignoring '".concat(nodeBeingDragged.type, "' with parent '").concat(dropTargetNode === null || dropTargetNode === void 0 ? void 0 : dropTargetNode.type, "' dropping somewhere.."));
                    }
                }
                if ((dropTargetNode === null || dropTargetNode === void 0 ? void 0 : dropTargetNode.type) === NodeTypes_1.NODE_TYPES.decisionService) {
                    for (var i = 0; i < selectedNodes.length; i++) {
                        (0, addDecisionToDecisionService_1.addDecisionToDecisionService)({
                            definitions: state.dmn.model.definitions,
                            drdIndex: state.diagram.drdIndex,
                            decisionId: selectedNodes[i].data.dmnObject["@_id"],
                            decisionServiceId: nodesById.get(dropTargetNode.id).data.dmnObject["@_id"],
                            snapGrid: state.diagram.snapGrid,
                        });
                    }
                }
                else {
                    console.debug("DMN DIAGRAM: Ignoring '".concat(nodeBeingDragged.type, "' dropped on top of '").concat(dropTargetNode === null || dropTargetNode === void 0 ? void 0 : dropTargetNode.type, "'"));
                }
            });
        }
        catch (e) {
            console.error(e);
            resetToBeforeEditingBegan();
        }
    }, [
        dmnEditorStoreApi,
        isDropTargetNodeValidForSelection,
        nodesById,
        resetToBeforeEditingBegan,
        selectedNodeTypes,
        selectedNodesById,
    ]);
    var onEdgesChange = (0, react_1.useCallback)(function (changes) {
        dmnEditorStoreApi.setState(function (state) {
            var e_2, _a;
            try {
                for (var changes_2 = __values(changes), changes_2_1 = changes_2.next(); !changes_2_1.done; changes_2_1 = changes_2.next()) {
                    var change = changes_2_1.value;
                    switch (change.type) {
                        case "select":
                            console.debug("DMN DIAGRAM: 'onEdgesChange' --> select '".concat(change.id, "'"));
                            state.dispatch.diagram.setEdgeStatus(state, change.id, { selected: change.selected });
                            break;
                        case "remove":
                            console.debug("DMN DIAGRAM: 'onEdgesChange' --> remove '".concat(change.id, "'"));
                            var edge = edgesById.get(change.id);
                            if (edge === null || edge === void 0 ? void 0 : edge.data) {
                                (0, deleteEdge_1.deleteEdge)({
                                    definitions: state.dmn.model.definitions,
                                    drdIndex: state.diagram.drdIndex,
                                    edge: { id: change.id, dmnObject: edge.data.dmnObject },
                                });
                                state.dispatch.diagram.setEdgeStatus(state, change.id, { selected: false, draggingWaypoint: false });
                            }
                            break;
                        case "add":
                        case "reset":
                            console.debug("DMN DIAGRAM: 'onEdgesChange' --> add/reset '".concat(change.item.id, "'. Ignoring"));
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (changes_2_1 && !changes_2_1.done && (_a = changes_2.return)) _a.call(changes_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        });
    }, [dmnEditorStoreApi, edgesById]);
    var onEdgeUpdate = (0, react_1.useCallback)(function (oldEdge, newConnection) {
        var _a, _b;
        console.debug("DMN DIAGRAM: `onEdgeUpdate`", oldEdge, newConnection);
        var sourceNode = nodesById.get(newConnection.source);
        var targetNode = nodesById.get(newConnection.target);
        if (!sourceNode || !targetNode) {
            throw new Error("Cannot create connection without target and source nodes!");
        }
        var sourceBounds = sourceNode.data.shape["dc:Bounds"];
        var targetBounds = targetNode.data.shape["dc:Bounds"];
        if (!sourceBounds || !targetBounds) {
            throw new Error("Cannot create connection without target bounds!");
        }
        var lastWaypoint = ((_a = oldEdge.data) === null || _a === void 0 ? void 0 : _a.dmnEdge)
            ? oldEdge.data.dmnEdge["di:waypoint"][oldEdge.data.dmnEdge["di:waypoint"].length - 1]
            : (0, DmnMaths_1.getBoundsCenterPoint)(targetBounds);
        var firstWaypoint = ((_b = oldEdge.data) === null || _b === void 0 ? void 0 : _b.dmnEdge)
            ? oldEdge.data.dmnEdge["di:waypoint"][0]
            : (0, DmnMaths_1.getBoundsCenterPoint)(sourceBounds);
        dmnEditorStoreApi.setState(function (state) {
            var _a, _b;
            var newDmnEdge = (0, addEdge_1.addEdge)({
                definitions: state.dmn.model.definitions,
                drdIndex: state.diagram.drdIndex,
                edge: {
                    type: oldEdge.type,
                    targetHandle: ((_a = newConnection.targetHandle) !== null && _a !== void 0 ? _a : (0, DmnMaths_1.getHandlePosition)({ shapeBounds: targetBounds, waypoint: lastWaypoint })
                        .handlePosition),
                    sourceHandle: ((_b = newConnection.sourceHandle) !== null && _b !== void 0 ? _b : (0, DmnMaths_1.getHandlePosition)({ shapeBounds: sourceBounds, waypoint: firstWaypoint })
                        .handlePosition),
                },
                sourceNode: {
                    type: sourceNode.type,
                    href: sourceNode.id,
                    data: sourceNode.data,
                    bounds: sourceBounds,
                    shapeId: sourceNode.data.shape["@_id"],
                },
                targetNode: {
                    type: targetNode.type,
                    href: targetNode.id,
                    data: targetNode.data,
                    bounds: targetBounds,
                    index: targetNode.data.index,
                    shapeId: targetNode.data.shape["@_id"],
                },
                keepWaypoints: true,
            }).newDmnEdge;
            if (newDmnEdge["@_dmnElementRef"] !== oldEdge.id) {
                var deletedDmnEdge = (0, deleteEdge_1.deleteEdge)({
                    definitions: state.dmn.model.definitions,
                    drdIndex: state.diagram.drdIndex,
                    edge: { id: oldEdge.id, dmnObject: oldEdge.data.dmnObject },
                }).dmnEdge;
                var deletedWaypoints = deletedDmnEdge === null || deletedDmnEdge === void 0 ? void 0 : deletedDmnEdge["di:waypoint"];
                if (oldEdge.source !== newConnection.source && deletedWaypoints) {
                    newDmnEdge["di:waypoint"] = __spreadArray([newDmnEdge["di:waypoint"][0]], __read(deletedWaypoints.slice(1)), false);
                }
                if (oldEdge.target !== newConnection.target && deletedWaypoints) {
                    newDmnEdge["di:waypoint"] = __spreadArray(__spreadArray([], __read(deletedWaypoints.slice(0, deletedWaypoints.length - 1)), false), [
                        newDmnEdge["di:waypoint"][newDmnEdge["di:waypoint"].length - 1],
                    ], false);
                }
            }
            state.diagram._selectedEdges = [newDmnEdge["@_dmnElementRef"]];
            state.diagram.ongoingConnection = undefined;
            state.diagram.edgeIdBeingUpdated = undefined;
        });
    }, [dmnEditorStoreApi, nodesById]);
    var onEdgeUpdateStart = (0, react_1.useCallback)(function (e, edge, handleType) {
        console.debug("DMN DIAGRAM: `onEdgeUpdateStart`");
        dmnEditorStoreApi.setState(function (state) {
            state.diagram.edgeIdBeingUpdated = edge.id;
        });
    }, [dmnEditorStoreApi]);
    var onEdgeUpdateEnd = (0, react_1.useCallback)(function (e, edge, handleType) {
        console.debug("DMN DIAGRAM: `onEdgeUpdateEnd`");
        dmnEditorStoreApi.setState(function (state) {
            state.diagram.ongoingConnection = undefined;
            state.diagram.edgeIdBeingUpdated = undefined;
        });
    }, [dmnEditorStoreApi]);
    var handleRfKeyDownCapture = (0, react_1.useCallback)(function (e) {
        if (e.key === "Escape") {
            if (isDiagramEditingInProgress && dmnModelBeforeEditingRef.current) {
                console.debug("DMN DIAGRAM: Intercepting Escape pressed and preventing propagation. Reverting DMN model to what it was before editing began.");
                e.stopPropagation();
                e.preventDefault();
                resetToBeforeEditingBegan();
            }
            else if (!diagram.ongoingConnection) {
                dmnEditorStoreApi.setState(function (state) {
                    if (selectedNodesById.size > 0 || selectedEdgesById.size > 0) {
                        console.debug("DMN DIAGRAM: Esc pressed. Desselecting everything.");
                        state.diagram._selectedNodes = [];
                        state.diagram._selectedEdges = [];
                        e.preventDefault();
                    }
                    else if (selectedNodesById.size <= 0 && selectedEdgesById.size <= 0) {
                        console.debug("DMN DIAGRAM: Esc pressed. Closing all open panels.");
                        state.diagram.propertiesPanel.isOpen = false;
                        state.diagram.overlaysPanel.isOpen = false;
                        state.diagram.openNodesPanel = Store_1.DiagramNodesPanel.NONE;
                        e.preventDefault();
                    }
                    else {
                    }
                });
            }
            else {
            }
        }
    }, [
        diagram.ongoingConnection,
        dmnEditorStoreApi,
        dmnModelBeforeEditingRef,
        isDiagramEditingInProgress,
        resetToBeforeEditingBegan,
        selectedEdgesById.size,
        selectedNodesById.size,
    ]);
    var _d = __read((0, react_1.useState)(true), 2), showEmptyState = _d[0], setShowEmptyState = _d[1];
    var isEmptyStateShowing = showEmptyState && nodes.length === 0 && drgElementsWithoutVisualRepresentationOnCurrentDrd.length === 0;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [isEmptyStateShowing && (0, jsx_runtime_1.jsx)(DmnDiagramEmptyState, { setShowEmptyState: setShowEmptyState }), (0, jsx_runtime_1.jsxs)(DiagramContainerContext_1.DiagramContainerContextProvider, __assign({ container: container }, { children: [(0, jsx_runtime_1.jsx)(EdgeMarkers_1.EdgeMarkers, {}), (0, jsx_runtime_1.jsxs)(RF.ReactFlow, __assign({ connectionMode: RF.ConnectionMode.Loose, onKeyDownCapture: handleRfKeyDownCapture, nodes: nodes, edges: edges, onNodesChange: onNodesChange, onEdgesChange: onEdgesChange, onEdgeUpdateStart: onEdgeUpdateStart, onEdgeUpdateEnd: onEdgeUpdateEnd, onEdgeUpdate: onEdgeUpdate, onlyRenderVisibleElements: true, zoomOnDoubleClick: false, elementsSelectable: true, panOnScroll: true, zoomOnScroll: false, preventScrolling: true, selectionOnDrag: true, panOnDrag: PAN_ON_DRAG, panActivationKeyCode: "Alt", selectionMode: RF.SelectionMode.Full, isValidConnection: isValidConnection, connectionLineComponent: ConnectionLine_1.ConnectionLine, onConnect: onConnect, onConnectStart: onConnectStart, onConnectEnd: onConnectEnd, onNodeDragStart: onNodeDragStart, onNodeDrag: onNodeDrag, onNodeDragStop: onNodeDragStop, nodeTypes: nodeTypes, edgeTypes: edgeTypes, snapToGrid: true, snapGrid: rfSnapGrid, defaultViewport: DEFAULT_VIEWPORT, fitView: false, fitViewOptions: FIT_VIEW_OPTIONS, attributionPosition: "bottom-right", onInit: setReactFlowInstance, onDrop: onDrop, onDragOver: onDragOver }, { children: [(0, jsx_runtime_1.jsx)(SelectionStatus, {}), (0, jsx_runtime_1.jsx)(Palette_1.Palette, { pulse: isEmptyStateShowing }), (0, jsx_runtime_1.jsx)(TopRightCornerPanels, {}), (0, jsx_runtime_1.jsx)(PanWhenAltPressed, {}), (0, jsx_runtime_1.jsx)(KeyboardShortcuts, {}), !isFirefox && (0, jsx_runtime_1.jsx)(RF.Background, {}), (0, jsx_runtime_1.jsx)(RF.Controls, { fitViewOptions: FIT_VIEW_OPTIONS, position: "bottom-right" }), (0, jsx_runtime_1.jsx)(SetConnectionToReactFlowStore, {})] }))] }))] }));
}
exports.Diagram = Diagram;
function DmnDiagramEmptyState(_a) {
    var setShowEmptyState = _a.setShowEmptyState;
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    return ((0, jsx_runtime_1.jsx)(Bullseye_1.Bullseye, __assign({ style: {
            position: "absolute",
            width: "100%",
            pointerEvents: "none",
            zIndex: 1,
            height: "auto",
            marginTop: "120px",
        } }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "kie-dmn-editor--diagram-empty-state" }, { children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { style: {
                        position: "absolute",
                        top: "8px",
                        right: 0,
                    }, variant: Button_1.ButtonVariant.plain, icon: (0, jsx_runtime_1.jsx)(times_icon_1.TimesIcon, {}), onClick: function () { return setShowEmptyState(false); } }), (0, jsx_runtime_1.jsxs)(EmptyState_1.EmptyState, { children: [(0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateIcon, { icon: mouse_pointer_icon_1.MousePointerIcon }), (0, jsx_runtime_1.jsx)(Title_1.Title, __assign({ size: "md", headingLevel: "h4" }, { children: "This DMN's Diagram is empty" })), (0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateBody, { children: "Start by dragging nodes from the Palette" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateBody, { children: "or" }), (0, jsx_runtime_1.jsxs)(EmptyState_1.EmptyStatePrimary, { children: [(0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.link, icon: (0, jsx_runtime_1.jsx)(table_icon_1.TableIcon, {}), onClick: function () {
                                        dmnEditorStoreApi.setState(function (state) {
                                            var _a, _b;
                                            var decisionNodeHref = (0, addStandaloneNode_1.addStandaloneNode)({
                                                definitions: state.dmn.model.definitions,
                                                drdIndex: state.diagram.drdIndex,
                                                newNode: {
                                                    type: NodeTypes_1.NODE_TYPES.decision,
                                                    bounds: {
                                                        "@_x": 100,
                                                        "@_y": 100,
                                                        "@_width": DefaultSizes_1.DEFAULT_NODE_SIZES[NodeTypes_1.NODE_TYPES.decision](state.diagram.snapGrid)["@_width"],
                                                        "@_height": DefaultSizes_1.DEFAULT_NODE_SIZES[NodeTypes_1.NODE_TYPES.decision](state.diagram.snapGrid)["@_height"],
                                                    },
                                                },
                                            }).href;
                                            var drgElementIndex = ((_a = state.dmn.model.definitions.drgElement) !== null && _a !== void 0 ? _a : []).length - 1;
                                            var drgElement = (_b = state.dmn.model.definitions.drgElement) === null || _b === void 0 ? void 0 : _b[drgElementIndex];
                                            (0, updateExpression_1.updateExpression)({
                                                definitions: state.dmn.model.definitions,
                                                drdIndex: state.diagram.drdIndex,
                                                drgElementIndex: drgElementIndex,
                                                expression: (0, getDefaultExpressionDefinitionByLogicType_1.getDefaultExpressionDefinitionByLogicType)({
                                                    expressionHolderName: drgElement === null || drgElement === void 0 ? void 0 : drgElement["@_name"],
                                                    logicType: api_1.ExpressionDefinitionLogicType.DecisionTable,
                                                    allTopLevelDataTypesByFeelName: new Map(),
                                                    typeRef: api_1.DmnBuiltInDataType.Undefined,
                                                    getDefaultColumnWidth: getDefaultColumnWidth_1.getDefaultColumnWidth,
                                                }),
                                            });
                                            state.dispatch.boxedExpressionEditor.open(state, (0, xmlHrefs_1.parseXmlHref)(decisionNodeHref).id);
                                        });
                                    } }, { children: "New Decision Table..." })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.link, icon: (0, jsx_runtime_1.jsx)(blueprint_icon_1.BlueprintIcon, {}), onClick: function () {
                                        dmnEditorStoreApi.setState(function (state) {
                                            var inputDataNodeBounds = {
                                                "@_x": 100,
                                                "@_y": 300,
                                                "@_width": DefaultSizes_1.DEFAULT_NODE_SIZES[NodeTypes_1.NODE_TYPES.inputData](state.diagram.snapGrid)["@_width"],
                                                "@_height": DefaultSizes_1.DEFAULT_NODE_SIZES[NodeTypes_1.NODE_TYPES.inputData](state.diagram.snapGrid)["@_height"],
                                            };
                                            var _a = (0, addStandaloneNode_1.addStandaloneNode)({
                                                definitions: state.dmn.model.definitions,
                                                drdIndex: state.diagram.drdIndex,
                                                newNode: {
                                                    type: NodeTypes_1.NODE_TYPES.inputData,
                                                    bounds: inputDataNodeBounds,
                                                },
                                            }), inputDataNodeHref = _a.href, inputDataShapeId = _a.shapeId;
                                            var decisionNodeHref = (0, addConnectedNode_1.addConnectedNode)({
                                                definitions: state.dmn.model.definitions,
                                                drdIndex: state.diagram.drdIndex,
                                                edge: EdgeTypes_1.EDGE_TYPES.informationRequirement,
                                                sourceNode: {
                                                    href: inputDataNodeHref,
                                                    type: NodeTypes_1.NODE_TYPES.inputData,
                                                    bounds: inputDataNodeBounds,
                                                    shapeId: inputDataShapeId,
                                                },
                                                newNode: {
                                                    type: NodeTypes_1.NODE_TYPES.decision,
                                                    bounds: {
                                                        "@_x": 100,
                                                        "@_y": 100,
                                                        "@_width": DefaultSizes_1.DEFAULT_NODE_SIZES[NodeTypes_1.NODE_TYPES.decision](state.diagram.snapGrid)["@_width"],
                                                        "@_height": DefaultSizes_1.DEFAULT_NODE_SIZES[NodeTypes_1.NODE_TYPES.decision](state.diagram.snapGrid)["@_height"],
                                                    },
                                                },
                                            }).href;
                                            state.diagram._selectedNodes = [decisionNodeHref];
                                            state.diagram.propertiesPanel.isOpen = true;
                                        });
                                    } }, { children: "New Decision with Input Data..." }))] })] })] })) })));
}
function SetConnectionToReactFlowStore(props) {
    var _a, _b, _c;
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var rfStoreApi = RF.useStoreApi();
    (0, react_1.useEffect)(function () {
        var _a, _b, _c;
        rfStoreApi.setState({
            connectionHandleId: (_a = diagram.ongoingConnection) === null || _a === void 0 ? void 0 : _a.handleId,
            connectionHandleType: (_b = diagram.ongoingConnection) === null || _b === void 0 ? void 0 : _b.handleType,
            connectionNodeId: (_c = diagram.ongoingConnection) === null || _c === void 0 ? void 0 : _c.nodeId,
        });
    }, [
        (_a = diagram.ongoingConnection) === null || _a === void 0 ? void 0 : _a.handleId,
        (_b = diagram.ongoingConnection) === null || _b === void 0 ? void 0 : _b.handleType,
        (_c = diagram.ongoingConnection) === null || _c === void 0 ? void 0 : _c.nodeId,
        rfStoreApi,
    ]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
}
exports.SetConnectionToReactFlowStore = SetConnectionToReactFlowStore;
function TopRightCornerPanels() {
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var togglePropertiesPanel = (0, react_1.useCallback)(function () {
        dmnEditorStoreApi.setState(function (state) {
            state.diagram.propertiesPanel.isOpen = !state.diagram.propertiesPanel.isOpen;
        });
    }, [dmnEditorStoreApi]);
    var toggleOverlaysPanel = (0, react_1.useCallback)(function () {
        dmnEditorStoreApi.setState(function (state) {
            state.diagram.overlaysPanel.isOpen = !state.diagram.overlaysPanel.isOpen;
        });
    }, [dmnEditorStoreApi]);
    (0, react_1.useLayoutEffect)(function () {
        dmnEditorStoreApi.setState(function (state) {
            if (state.diagram.overlaysPanel.isOpen) {
                setTimeout(function () {
                    dmnEditorStoreApi.setState(function (state) {
                        state.diagram.overlaysPanel.isOpen = true;
                    });
                }, 300);
            }
            state.diagram.overlaysPanel.isOpen = false;
        });
    }, [dmnEditorStoreApi, diagram.propertiesPanel.isOpen]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(RF.Panel, __assign({ position: "top-right", style: { display: "flex" } }, { children: [(0, jsx_runtime_1.jsx)("aside", __assign({ className: "kie-dmn-editor--overlays-panel-toggle" }, { children: (0, jsx_runtime_1.jsx)(Popover_1.Popover, __assign({ className: "kie-dmn-editor--overlay-panel-popover", "aria-label": "Overlays Panel", position: "bottom-end", hideOnOutsideClick: false, isVisible: diagram.overlaysPanel.isOpen, enableFlip: true, bodyContent: (0, jsx_runtime_1.jsx)(OverlaysPanel_1.OverlaysPanel, {}) }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "kie-dmn-editor--overlays-panel-toggle-button", onClick: toggleOverlaysPanel }, { children: (0, jsx_runtime_1.jsx)(virtual_machine_icon_1.VirtualMachineIcon, { size: "sm" }) })) }), "".concat(diagram.overlaysPanel.isOpen)) })), !diagram.propertiesPanel.isOpen && ((0, jsx_runtime_1.jsx)("aside", __assign({ className: "kie-dmn-editor--properties-panel-toggle" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "kie-dmn-editor--properties-panel-toggle-button", onClick: togglePropertiesPanel }, { children: (0, jsx_runtime_1.jsx)(info_icon_1.InfoIcon, { size: "sm" }) })) })))] })) }));
}
exports.TopRightCornerPanels = TopRightCornerPanels;
function SelectionStatus() {
    var rfStoreApi = RF.useStoreApi();
    var _a = (0, DerivedStore_1.useDmnEditorDerivedStore)(), selectedNodesById = _a.selectedNodesById, selectedEdgesById = _a.selectedEdgesById;
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    (0, react_1.useEffect)(function () {
        if (selectedNodesById.size >= 2) {
            rfStoreApi.setState({ nodesSelectionActive: true });
        }
    }, [rfStoreApi, selectedNodesById.size]);
    var onClose = (0, react_1.useCallback)(function (e) {
        e.stopPropagation();
        dmnEditorStoreApi.setState(function (state) {
            state.diagram._selectedNodes = [];
            state.diagram._selectedEdges = [];
        });
    }, [dmnEditorStoreApi]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (selectedNodesById.size + selectedEdgesById.size >= 2 && ((0, jsx_runtime_1.jsx)(RF.Panel, __assign({ position: "top-center" }, { children: (0, jsx_runtime_1.jsx)(Label_1.Label, __assign({ style: { paddingLeft: "24px" }, onClose: onClose }, { children: (selectedEdgesById.size === 0 && "".concat(selectedNodesById.size, " nodes selected")) ||
                    (selectedNodesById.size === 0 && "".concat(selectedEdgesById.size, " edges selected")) ||
                    "".concat(selectedNodesById.size, " node").concat(selectedNodesById.size === 1 ? "" : "s", ", ").concat(selectedEdgesById.size, " edge").concat(selectedEdgesById.size === 1 ? "" : "s", " selected") })) })))) || (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) }));
}
exports.SelectionStatus = SelectionStatus;
function KeyboardShortcuts(props) {
    var rfStoreApi = RF.useStoreApi();
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var rf = RF.useReactFlow();
    var space = RF.useKeyPress(["Space"]);
    (0, react_1.useEffect)(function () {
        if (!space) {
            return;
        }
        rf.setViewport(DEFAULT_VIEWPORT, { duration: 200 });
    }, [rf, space]);
    var b = RF.useKeyPress(["b"]);
    (0, react_1.useEffect)(function () {
        if (!b) {
            return;
        }
        var selectedNodes = rf.getNodes().filter(function (s) { return s.selected; });
        if (selectedNodes.length <= 0) {
            return;
        }
        var bounds = (0, DmnMaths_1.getBounds)({
            nodes: selectedNodes,
            padding: 100,
        });
        rf.fitBounds({
            x: bounds["@_x"],
            y: bounds["@_y"],
            width: bounds["@_width"],
            height: bounds["@_height"],
        }, { duration: 200 });
    }, [b, rf]);
    var esc = RF.useKeyPress(["Escape"]);
    (0, react_1.useEffect)(function () {
        if (!esc) {
            return;
        }
        rfStoreApi.setState(function (rfState) {
            var _a, _b;
            if (rfState.connectionNodeId) {
                console.debug("DMN DIAGRAM: Esc pressed. Cancelling connection.");
                rfState.cancelConnection();
                dmnEditorStoreApi.setState(function (state) {
                    state.diagram.ongoingConnection = undefined;
                });
            }
            else {
                (_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.blur) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
            return rfState;
        });
    }, [dmnEditorStoreApi, esc, rfStoreApi]);
    var cut = RF.useKeyPress(["Meta+x"]);
    (0, react_1.useEffect)(function () {
        if (!cut) {
            return;
        }
        console.debug("DMN DIAGRAM: Cutting selected nodes...");
        var _a = (0, Clipboard_1.buildClipboardFromDiagram)(rfStoreApi.getState(), dmnEditorStoreApi.getState()), clipboard = _a.clipboard, copiedEdgesById = _a.copiedEdgesById, danglingEdgesById = _a.danglingEdgesById, copiedNodesById = _a.copiedNodesById;
        navigator.clipboard.writeText(JSON.stringify(clipboard)).then(function () {
            dmnEditorStoreApi.setState(function (state) {
                __spreadArray(__spreadArray([], __read(copiedEdgesById.values()), false), __read(danglingEdgesById.values()), false).forEach(function (edge) {
                    (0, deleteEdge_1.deleteEdge)({
                        definitions: state.dmn.model.definitions,
                        drdIndex: state.diagram.drdIndex,
                        edge: { id: edge.id, dmnObject: edge.data.dmnObject },
                    });
                    state.dispatch.diagram.setEdgeStatus(state, edge.id, {
                        selected: false,
                        draggingWaypoint: false,
                    });
                });
                rfStoreApi
                    .getState()
                    .getNodes()
                    .forEach(function (node) {
                    var _a;
                    if (copiedNodesById.has(node.id)) {
                        (0, deleteNode_1.deleteNode)({
                            definitions: state.dmn.model.definitions,
                            drdIndex: state.diagram.drdIndex,
                            dmnObjectQName: node.data.dmnObjectQName,
                            dmnObjectId: (_a = node.data.dmnObject) === null || _a === void 0 ? void 0 : _a["@_id"],
                            nodeNature: NodeNature_1.nodeNatures[node.type],
                        });
                        state.dispatch.diagram.setNodeStatus(state, node.id, {
                            selected: false,
                            dragging: false,
                            resizing: false,
                        });
                    }
                });
            });
        });
    }, [cut, dmnEditorStoreApi, rfStoreApi]);
    var copy = RF.useKeyPress(["Meta+c"]);
    (0, react_1.useEffect)(function () {
        if (!copy) {
            return;
        }
        console.debug("DMN DIAGRAM: Copying selected nodes...");
        var clipboard = (0, Clipboard_1.buildClipboardFromDiagram)(rfStoreApi.getState(), dmnEditorStoreApi.getState()).clipboard;
        navigator.clipboard.writeText(JSON.stringify(clipboard));
    }, [copy, dmnEditorStoreApi, rfStoreApi]);
    var paste = RF.useKeyPress(["Meta+v"]);
    (0, react_1.useEffect)(function () {
        if (!paste) {
            return;
        }
        console.debug("DMN DIAGRAM: Pasting nodes...");
        navigator.clipboard.readText().then(function (text) {
            var clipboard = (0, Clipboard_1.getClipboard)(text, Clipboard_1.DMN_EDITOR_DIAGRAM_CLIPBOARD_MIME_TYPE);
            if (!clipboard) {
                return;
            }
            (0, dmnIdRandomizer_1.getNewDmnIdRandomizer)()
                .ack({
                json: clipboard.drgElements,
                type: "DMN15__tDefinitions",
                attr: "drgElement",
            })
                .ack({
                json: clipboard.artifacts,
                type: "DMN15__tDefinitions",
                attr: "artifact",
            })
                .ack({
                json: clipboard.shapes,
                type: "DMNDI15__DMNDiagram",
                attr: "dmndi:DMNDiagramElement",
                __$$element: "dmndi:DMNShape",
            })
                .ack({
                json: clipboard.edges,
                type: "DMNDI15__DMNDiagram",
                attr: "dmndi:DMNDiagramElement",
                __$$element: "dmndi:DMNEdge",
            })
                .ack({
                json: clipboard.widths,
                type: "KIE__tComponentsWidthsExtension",
                attr: "kie:ComponentWidths",
            })
                .randomize();
            dmnEditorStoreApi.setState(function (state) {
                var _a, _b;
                var _c, _d;
                var _e, _f;
                (_c = (_e = state.dmn.model.definitions).drgElement) !== null && _c !== void 0 ? _c : (_e.drgElement = []);
                (_a = state.dmn.model.definitions.drgElement).push.apply(_a, __spreadArray([], __read(clipboard.drgElements), false));
                (_d = (_f = state.dmn.model.definitions).artifact) !== null && _d !== void 0 ? _d : (_f.artifact = []);
                (_b = state.dmn.model.definitions.artifact).push.apply(_b, __spreadArray([], __read(clipboard.artifacts), false));
                var _g = (0, addOrGetDrd_1.addOrGetDrd)({
                    definitions: state.dmn.model.definitions,
                    drdIndex: state.diagram.drdIndex,
                }), diagramElements = _g.diagramElements, widths = _g.widths;
                diagramElements.push.apply(diagramElements, __spreadArray([], __read(clipboard.shapes.map(function (s) { return (__assign(__assign({}, s), { __$$element: "dmndi:DMNShape" })); })), false));
                diagramElements.push.apply(diagramElements, __spreadArray([], __read(clipboard.edges.map(function (s) { return (__assign(__assign({}, s), { __$$element: "dmndi:DMNEdge" })); })), false));
                widths.push.apply(widths, __spreadArray([], __read(clipboard.widths), false));
                (0, repopulateInputDataAndDecisionsOnDecisionService_1.repopulateInputDataAndDecisionsOnAllDecisionServices)({ definitions: state.dmn.model.definitions });
                state.diagram._selectedNodes = __spreadArray(__spreadArray([], __read(clipboard.drgElements), false), __read(clipboard.artifacts), false).map(function (s) {
                    return (0, xmlHrefs_1.buildXmlHref)({ id: s["@_id"] });
                });
                if (state.diagram._selectedNodes.length === 1) {
                    state.focus.consumableId = (0, xmlHrefs_1.parseXmlHref)(state.diagram._selectedNodes[0]).id;
                }
            });
        });
    }, [dmnEditorStoreApi, paste]);
    var selectAll = RF.useKeyPress(["a", "Meta+a"]);
    (0, react_1.useEffect)(function () {
        if (!selectAll) {
            return;
        }
        var allNodeIds = rfStoreApi
            .getState()
            .getNodes()
            .map(function (s) { return s.id; });
        var allEdgeIds = rfStoreApi.getState().edges.map(function (s) { return s.id; });
        dmnEditorStoreApi.setState(function (state) {
            var allSelectedNodesSet = new Set(state.diagram._selectedNodes);
            var allSelectedEdgesSet = new Set(state.diagram._selectedEdges);
            if (allNodeIds.every(function (id) { return allSelectedNodesSet.has(id) && allEdgeIds.every(function (id) { return allSelectedEdgesSet.has(id); }); })) {
                state.diagram._selectedNodes = [];
                state.diagram._selectedEdges = [];
            }
            else {
                state.diagram._selectedNodes = allNodeIds;
                state.diagram._selectedEdges = allEdgeIds;
            }
        });
    }, [dmnEditorStoreApi, rfStoreApi, selectAll]);
    var g = RF.useKeyPress(["g"]);
    (0, react_1.useEffect)(function () {
        if (!g) {
            return;
        }
        var selectedNodes = rf.getNodes().filter(function (s) { return s.selected; });
        if (selectedNodes.length <= 0) {
            return;
        }
        dmnEditorStoreApi.setState(function (state) {
            if (state.diagram._selectedNodes.length <= 0) {
                return;
            }
            var newNodeId = (0, addStandaloneNode_1.addStandaloneNode)({
                definitions: state.dmn.model.definitions,
                drdIndex: state.diagram.drdIndex,
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
    }, [dmnEditorStoreApi, g, rf]);
    var h = RF.useKeyPress(["h"]);
    (0, react_1.useEffect)(function () {
        if (!h) {
            return;
        }
        dmnEditorStoreApi.setState(function (state) {
            state.diagram.overlays.enableNodeHierarchyHighlight = !state.diagram.overlays.enableNodeHierarchyHighlight;
        });
    }, [dmnEditorStoreApi, h]);
    var i = RF.useKeyPress(["i"]);
    (0, react_1.useEffect)(function () {
        if (!i) {
            return;
        }
        dmnEditorStoreApi.setState(function (state) {
            state.diagram.propertiesPanel.isOpen = !state.diagram.propertiesPanel.isOpen;
        });
    }, [dmnEditorStoreApi, i]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
}
exports.KeyboardShortcuts = KeyboardShortcuts;
function PanWhenAltPressed() {
    var altPressed = RF.useKeyPress("Alt");
    var rfStoreApi = RF.useStoreApi();
    (0, react_1.useEffect)(function () {
        rfStoreApi.setState({
            nodesDraggable: !altPressed,
            nodesConnectable: !altPressed,
            elementsSelectable: !altPressed,
        });
    }, [altPressed, rfStoreApi]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
}
exports.PanWhenAltPressed = PanWhenAltPressed;
//# sourceMappingURL=Diagram.js.map