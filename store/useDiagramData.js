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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
exports.assignClassesToHighlightedHierarchyNodes = exports.useDiagramData = exports.diagramColors = void 0;
var react_1 = require("react");
var Store_1 = require("./Store");
var SnapGrid_1 = require("../diagram/SnapGrid");
var DefaultSizes_1 = require("../diagram/nodes/DefaultSizes");
var EdgeTypes_1 = require("../diagram/edges/EdgeTypes");
var NodeTypes_1 = require("../diagram/nodes/NodeTypes");
var DmnMaths_1 = require("../diagram/maths/DmnMaths");
var qNames_1 = require("@kie-tools/xml-parser-ts/dist/qNames");
var xmlHrefs_1 = require("../xml/xmlHrefs");
var NodeSvgs_1 = require("../diagram/nodes/NodeSvgs");
var DefaultSizes_2 = require("../diagram/nodes/DefaultSizes");
var graph_1 = require("../diagram/graph/graph");
var Dmn15Spec_1 = require("../Dmn15Spec");
exports.diagramColors = {
    hierarchyUp: "#0083a4",
    hierarchyDown: "#003fa4",
    selected: "#006ba4",
};
function useDiagramData(externalDmnsByNamespace) {
    NodeSvgs_1.___NASTY_HACK_FOR_SAFARI_to_force_redrawing_svgs_and_avoid_repaint_glitches.flag =
        !NodeSvgs_1.___NASTY_HACK_FOR_SAFARI_to_force_redrawing_svgs_and_avoid_repaint_glitches.flag;
    var thisDmn = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn; });
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var _a = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d;
        var dmnEdgesByDmnElementRef = new Map();
        var dmnShapesByHref = new Map();
        var hrefsOfDmnElementRefsOfShapesPointingToExternalDmnObjects = new Set();
        var diagramElements = (_c = (_b = (_a = thisDmn.model.definitions["dmndi:DMNDI"]) === null || _a === void 0 ? void 0 : _a["dmndi:DMNDiagram"]) === null || _b === void 0 ? void 0 : _b[diagram.drdIndex]["dmndi:DMNDiagramElement"]) !== null && _c !== void 0 ? _c : [];
        for (var i = 0; i < diagramElements.length; i++) {
            var e = diagramElements[i];
            if (e.__$$element === "dmndi:DMNEdge") {
                dmnEdgesByDmnElementRef.set(e["@_dmnElementRef"], __assign(__assign({}, e), { index: i }));
            }
            else if (e.__$$element === "dmndi:DMNShape") {
                var href = void 0;
                var dmnElementRefQName = (0, qNames_1.parseXmlQName)(e["@_dmnElementRef"]);
                if (dmnElementRefQName.prefix) {
                    var namespace = (_d = thisDmn.model.definitions["@_xmlns:".concat(dmnElementRefQName.prefix)]) !== null && _d !== void 0 ? _d : Dmn15Spec_1.KIE_DMN_UNKNOWN_NAMESPACE;
                    href = (0, xmlHrefs_1.buildXmlHref)({ namespace: namespace, id: dmnElementRefQName.localPart });
                    hrefsOfDmnElementRefsOfShapesPointingToExternalDmnObjects.add(href);
                }
                else {
                    href = (0, xmlHrefs_1.buildXmlHref)({ id: dmnElementRefQName.localPart });
                }
                dmnShapesByHref.set(href, __assign(__assign({}, e), { index: i, dmnElementRefQName: dmnElementRefQName }));
            }
            else {
            }
        }
        return {
            dmnEdgesByDmnElementRef: dmnEdgesByDmnElementRef,
            dmnShapesByHref: dmnShapesByHref,
            hrefsOfDmnElementRefsOfShapesPointingToExternalDmnObjects: hrefsOfDmnElementRefsOfShapesPointingToExternalDmnObjects,
        };
    }, [diagram.drdIndex, thisDmn.model.definitions]), dmnEdgesByDmnElementRef = _a.dmnEdgesByDmnElementRef, dmnShapesByHref = _a.dmnShapesByHref, hrefsOfDmnElementRefsOfShapesPointingToExternalDmnObjects = _a.hrefsOfDmnElementRefsOfShapesPointingToExternalDmnObjects;
    var _b = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d;
        var drgElementsWithoutVisualRepresentationOnCurrentDrd = [];
        var selectedNodesById = new Map();
        var selectedEdgesById = new Map();
        var selectedNodeTypes = new Set();
        var nodesById = new Map();
        var edgesById = new Map();
        var parentIdsById = new Map();
        var _e = {
            selectedNodes: new Set(diagram._selectedNodes),
            draggingNodes: new Set(diagram.draggingNodes),
            resizingNodes: new Set(diagram.resizingNodes),
            selectedEdges: new Set(diagram._selectedEdges),
        }, selectedNodes = _e.selectedNodes, draggingNodes = _e.draggingNodes, resizingNodes = _e.resizingNodes, selectedEdges = _e.selectedEdges;
        function ackEdge(_a) {
            var id = _a.id, type = _a.type, dmnObject = _a.dmnObject, source = _a.source, target = _a.target;
            var data = {
                dmnObject: dmnObject,
                dmnEdge: id ? dmnEdgesByDmnElementRef.get(id) : undefined,
                dmnShapeSource: dmnShapesByHref.get(source),
                dmnShapeTarget: dmnShapesByHref.get(target),
            };
            var edge = {
                data: data,
                id: id,
                type: type,
                source: source,
                target: target,
                selected: selectedEdges.has(id),
            };
            edgesById.set(edge.id, edge);
            if (edge.selected) {
                selectedEdgesById.set(edge.id, edge);
            }
            return edge;
        }
        var edges = __spreadArray(__spreadArray([], __read(((_a = thisDmn.model.definitions.drgElement) !== null && _a !== void 0 ? _a : []).reduce(function (acc, dmnObject) {
            var _a, _b, _c;
            if (dmnObject.__$$element === "decision") {
                acc.push.apply(acc, __spreadArray([], __read(((_a = dmnObject.informationRequirement) !== null && _a !== void 0 ? _a : []).map(function (ir, index) {
                    var _a, _b, _c;
                    return ackEdge({
                        id: (_a = ir["@_id"]) !== null && _a !== void 0 ? _a : "",
                        dmnObject: {
                            type: dmnObject.__$$element,
                            id: (_b = dmnObject["@_id"]) !== null && _b !== void 0 ? _b : "",
                            requirementType: "informationRequirement",
                            index: index,
                        },
                        type: EdgeTypes_1.EDGE_TYPES.informationRequirement,
                        source: ((_c = ir.requiredDecision) !== null && _c !== void 0 ? _c : ir.requiredInput)["@_href"],
                        target: (0, xmlHrefs_1.buildXmlHref)({ id: dmnObject["@_id"] }),
                    });
                })), false));
            }
            if (dmnObject.__$$element === "decision" || dmnObject.__$$element === "businessKnowledgeModel") {
                acc.push.apply(acc, __spreadArray([], __read(((_b = dmnObject.knowledgeRequirement) !== null && _b !== void 0 ? _b : []).map(function (kr, index) {
                    var _a, _b;
                    return ackEdge({
                        id: (_a = kr["@_id"]) !== null && _a !== void 0 ? _a : "",
                        dmnObject: {
                            type: dmnObject.__$$element,
                            id: (_b = dmnObject["@_id"]) !== null && _b !== void 0 ? _b : "",
                            requirementType: "knowledgeRequirement",
                            index: index,
                        },
                        type: EdgeTypes_1.EDGE_TYPES.knowledgeRequirement,
                        source: kr.requiredKnowledge["@_href"],
                        target: (0, xmlHrefs_1.buildXmlHref)({ id: dmnObject["@_id"] }),
                    });
                })), false));
            }
            if (dmnObject.__$$element === "decision" ||
                dmnObject.__$$element === "businessKnowledgeModel" ||
                dmnObject.__$$element === "knowledgeSource") {
                acc.push.apply(acc, __spreadArray([], __read(((_c = dmnObject.authorityRequirement) !== null && _c !== void 0 ? _c : []).map(function (ar, index) {
                    var _a, _b, _c, _d;
                    return ackEdge({
                        id: (_a = ar["@_id"]) !== null && _a !== void 0 ? _a : "",
                        dmnObject: {
                            type: dmnObject.__$$element,
                            id: (_b = dmnObject["@_id"]) !== null && _b !== void 0 ? _b : "",
                            requirementType: "authorityRequirement",
                            index: index,
                        },
                        type: EdgeTypes_1.EDGE_TYPES.authorityRequirement,
                        source: ((_d = (_c = ar.requiredInput) !== null && _c !== void 0 ? _c : ar.requiredDecision) !== null && _d !== void 0 ? _d : ar.requiredAuthority)["@_href"],
                        target: (0, xmlHrefs_1.buildXmlHref)({ id: dmnObject["@_id"] }),
                    });
                })), false));
            }
            return acc;
        }, [])), false), __read(((_b = thisDmn.model.definitions.artifact) !== null && _b !== void 0 ? _b : []).flatMap(function (dmnObject, index) {
            var _a, _b, _c, _d;
            return dmnObject.__$$element === "association"
                ? [
                    ackEdge({
                        id: (_a = dmnObject["@_id"]) !== null && _a !== void 0 ? _a : "",
                        dmnObject: {
                            type: dmnObject.__$$element,
                            id: (_b = dmnObject["@_id"]) !== null && _b !== void 0 ? _b : "",
                            requirementType: "association",
                            index: index,
                        },
                        type: EdgeTypes_1.EDGE_TYPES.association,
                        source: (_c = dmnObject.sourceRef) === null || _c === void 0 ? void 0 : _c["@_href"],
                        target: (_d = dmnObject.targetRef) === null || _d === void 0 ? void 0 : _d["@_href"],
                    }),
                ]
                : [];
        })), false);
        var sortedEdges = edges.sort(function (a, b) { return Number(selectedEdges.has(a.id)) - Number(selectedEdges.has(b.id)); });
        function ackNode(dmnObjectQName, dmnObject, index) {
            var _a, _b, _c;
            var type = (0, DmnMaths_1.getNodeTypeFromDmnObject)(dmnObject);
            if (!type) {
                return undefined;
            }
            var dmnObjectNamespace = dmnObjectQName.prefix
                ? (_a = thisDmn.model.definitions["@_xmlns:".concat(dmnObjectQName.prefix)]) !== null && _a !== void 0 ? _a : Dmn15Spec_1.KIE_DMN_UNKNOWN_NAMESPACE
                : undefined;
            var id = (0, xmlHrefs_1.buildXmlHref)({ namespace: dmnObjectNamespace, id: dmnObjectQName.localPart });
            var _shape = dmnShapesByHref.get(id);
            if (!_shape) {
                drgElementsWithoutVisualRepresentationOnCurrentDrd.push(id);
                return undefined;
            }
            var dmnElementRefQName = _shape.dmnElementRefQName, shape = __rest(_shape, ["dmnElementRefQName"]);
            var data = {
                dmnObjectNamespace: dmnObjectNamespace,
                dmnObjectQName: dmnObjectQName,
                dmnObject: dmnObject,
                shape: shape,
                index: index,
                parentRfNode: undefined,
            };
            var newNode = {
                id: id,
                type: type,
                selected: selectedNodes.has(id),
                dragging: draggingNodes.has(id),
                resizing: resizingNodes.has(id),
                position: (0, SnapGrid_1.snapShapePosition)(diagram.snapGrid, shape),
                data: data,
                zIndex: Store_1.NODE_LAYERS.NODES,
                style: __assign({}, (0, SnapGrid_1.snapShapeDimensions)(diagram.snapGrid, shape, DefaultSizes_2.MIN_NODE_SIZES[type](diagram.snapGrid))),
            };
            if ((dmnObject === null || dmnObject === void 0 ? void 0 : dmnObject.__$$element) === "decisionService") {
                var containedDecisions = __spreadArray(__spreadArray([], __read(((_b = dmnObject.outputDecision) !== null && _b !== void 0 ? _b : [])), false), __read(((_c = dmnObject.encapsulatedDecision) !== null && _c !== void 0 ? _c : [])), false);
                for (var i = 0; i < containedDecisions.length; i++) {
                    parentIdsById.set(containedDecisions[i]["@_href"], data);
                }
                if (shape["@_isCollapsed"] || !!dmnObjectNamespace) {
                    newNode.style = __assign(__assign({}, newNode.style), DefaultSizes_1.DECISION_SERVICE_COLLAPSED_DIMENSIONS);
                }
            }
            nodesById.set(newNode.id, newNode);
            if (newNode.selected) {
                selectedNodesById.set(newNode.id, newNode);
                selectedNodeTypes.add(newNode.type);
            }
            return newNode;
        }
        var localNodes = __spreadArray(__spreadArray([], __read(((_c = thisDmn.model.definitions.drgElement) !== null && _c !== void 0 ? _c : []).flatMap(function (dmnObject, index) {
            var newNode = ackNode({ type: "xml-qname", localPart: dmnObject["@_id"] }, dmnObject, index);
            return newNode ? [newNode] : [];
        })), false), __read(((_d = thisDmn.model.definitions.artifact) !== null && _d !== void 0 ? _d : []).flatMap(function (dmnObject, index) {
            var newNode = ackNode({ type: "xml-qname", localPart: dmnObject["@_id"] }, dmnObject, index);
            return newNode ? [newNode] : [];
        })), false);
        for (var i = 0; i < localNodes.length; i++) {
            var parent_1 = parentIdsById.get(localNodes[i].id);
            if (parent_1) {
                localNodes[i].data.parentRfNode = nodesById.get((0, xmlHrefs_1.buildXmlHref)({ namespace: parent_1.dmnObjectNamespace, id: parent_1.dmnObjectQName.localPart }));
                localNodes[i].extent = undefined;
                localNodes[i].zIndex = Store_1.NODE_LAYERS.NESTED_NODES;
            }
            if (localNodes[i].type === NodeTypes_1.NODE_TYPES.group) {
                localNodes[i].zIndex = Store_1.NODE_LAYERS.GROUP_NODE;
            }
            else if (localNodes[i].type === NodeTypes_1.NODE_TYPES.decisionService) {
                localNodes[i].zIndex = Store_1.NODE_LAYERS.DECISION_SERVICE_NODE;
            }
        }
        var externalNodes = __spreadArray([], __read(dmnShapesByHref.entries()), false).flatMap(function (_a) {
            var _b;
            var _c = __read(_a, 2), href = _c[0], shape = _c[1];
            if (nodesById.get(href)) {
                return [];
            }
            if (!nodesById.get(href) && !hrefsOfDmnElementRefsOfShapesPointingToExternalDmnObjects.has(href)) {
                console.warn("DMN DIAGRAM: Found a shape that references a local DRG element that doesn't exist.", shape);
                var newNode_1 = ackNode(shape.dmnElementRefQName, null, -1);
                return newNode_1 ? [newNode_1] : [];
            }
            var namespace = thisDmn.model.definitions["@_xmlns:".concat(shape.dmnElementRefQName.prefix)];
            if (!namespace) {
                console.warn("DMN DIAGRAM: Found a shape that references an external node with a namespace that is not declared at this DMN.", shape);
                var newNode_2 = ackNode(shape.dmnElementRefQName, null, -1);
                return newNode_2 ? [newNode_2] : [];
            }
            var externalDmn = externalDmnsByNamespace.get(namespace);
            if (!externalDmn) {
                console.warn("DMN DIAGRAM: Found a shape that references an external node from a namespace that is not provided on this DMN's external DMNs mapping.", shape);
                var newNode_3 = ackNode(shape.dmnElementRefQName, null, -1);
                return newNode_3 ? [newNode_3] : [];
            }
            var externalDrgElementsById = ((_b = externalDmn.model.definitions.drgElement) !== null && _b !== void 0 ? _b : []).reduce(function (acc, e, index) { return acc.set(e["@_id"], { element: e, index: index }); }, new Map());
            var externalDrgElement = externalDrgElementsById.get(shape.dmnElementRefQName.localPart);
            if (!externalDrgElement) {
                console.warn("DMN DIAGRAM: Found a shape that references a non-existent node from an external DMN.", shape);
                var newNode_4 = ackNode(shape.dmnElementRefQName, null, -1);
                return newNode_4 ? [newNode_4] : [];
            }
            var newNode = ackNode(shape.dmnElementRefQName, externalDrgElement.element, externalDrgElement.index);
            return newNode ? [newNode] : [];
        });
        var sortedNodes = __spreadArray(__spreadArray([], __read(localNodes), false), __read(externalNodes), false).sort(function (a, b) { return Number(b.type === NodeTypes_1.NODE_TYPES.decisionService) - Number(a.type === NodeTypes_1.NODE_TYPES.decisionService); })
            .sort(function (a, b) { return Number(b.type === NodeTypes_1.NODE_TYPES.group) - Number(a.type === NodeTypes_1.NODE_TYPES.group); });
        if (diagram.overlays.enableNodeHierarchyHighlight) {
            assignClassesToHighlightedHierarchyNodes(__spreadArray([], __read(selectedNodesById.keys()), false), nodesById, edges);
        }
        return {
            nodes: sortedNodes,
            edges: sortedEdges,
            edgesById: edgesById,
            nodesById: nodesById,
            selectedNodeTypes: selectedNodeTypes,
            selectedNodesById: selectedNodesById,
            selectedEdgesById: selectedEdgesById,
            drgElementsWithoutVisualRepresentationOnCurrentDrd: drgElementsWithoutVisualRepresentationOnCurrentDrd,
        };
    }, [
        diagram._selectedNodes,
        diagram.draggingNodes,
        diagram.resizingNodes,
        diagram._selectedEdges,
        diagram.overlays.enableNodeHierarchyHighlight,
        diagram.snapGrid,
        thisDmn.model.definitions,
        hrefsOfDmnElementRefsOfShapesPointingToExternalDmnObjects,
        dmnEdgesByDmnElementRef,
        dmnShapesByHref,
        externalDmnsByNamespace,
    ]), nodes = _b.nodes, edges = _b.edges, nodesById = _b.nodesById, edgesById = _b.edgesById, selectedNodeTypes = _b.selectedNodeTypes, selectedNodesById = _b.selectedNodesById, selectedEdgesById = _b.selectedEdgesById, drgElementsWithoutVisualRepresentationOnCurrentDrd = _b.drgElementsWithoutVisualRepresentationOnCurrentDrd;
    return {
        drgElementsWithoutVisualRepresentationOnCurrentDrd: drgElementsWithoutVisualRepresentationOnCurrentDrd,
        dmnShapesByHref: dmnShapesByHref,
        dmnEdgesByDmnElementRef: dmnEdgesByDmnElementRef,
        nodesById: nodesById,
        edgesById: edgesById,
        nodes: nodes,
        edges: edges,
        selectedNodeTypes: selectedNodeTypes,
        selectedNodesById: selectedNodesById,
        selectedEdgesById: selectedEdgesById,
    };
}
exports.useDiagramData = useDiagramData;
function assignClassesToHighlightedHierarchyNodes(selected, nodes, edges) {
    var nodeVisitor = function (nodeId, traversalDirection) {
        var node = nodes.get(nodeId);
        if (node) {
            node.className = "hierarchy ".concat(traversalDirection);
        }
    };
    var edgeVisitor = function (edge, traversalDirection) {
        edge.className = "hierarchy ".concat(traversalDirection);
    };
    var __selectedSet = new Set(selected);
    var __adjMatrix = (0, graph_1.getAdjMatrix)(edges);
    (0, graph_1.traverse)(__adjMatrix, __selectedSet, selected, "up", nodeVisitor, edgeVisitor);
    (0, graph_1.traverse)(__adjMatrix, __selectedSet, selected, "down", nodeVisitor, edgeVisitor);
}
exports.assignClassesToHighlightedHierarchyNodes = assignClassesToHighlightedHierarchyNodes;
//# sourceMappingURL=useDiagramData.js.map