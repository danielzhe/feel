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
exports.ConnectionLine = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var SnapGrid_1 = require("../SnapGrid");
var EdgeTypes_1 = require("../edges/EdgeTypes");
var Edges_1 = require("../edges/Edges");
var NodeTypes_1 = require("../nodes/NodeTypes");
var Maths_1 = require("../maths/Maths");
var NodeSvgs_1 = require("../nodes/NodeSvgs");
var DmnMaths_1 = require("../maths/DmnMaths");
var graphStructure_1 = require("./graphStructure");
var switch_expression_ts_1 = require("@kie-tools-core/switch-expression-ts");
var DefaultSizes_1 = require("../nodes/DefaultSizes");
var Store_1 = require("../../store/Store");
var useKieEdgePath_1 = require("../edges/useKieEdgePath");
var PositionalNodeHandles_1 = require("./PositionalNodeHandles");
var DerivedStore_1 = require("../../store/DerivedStore");
function ConnectionLine(_a) {
    var _b;
    var toX = _a.toX, toY = _a.toY, fromNode = _a.fromNode, fromHandle = _a.fromHandle;
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var edgeId = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram.edgeIdBeingUpdated; });
    var edgesById = (0, DerivedStore_1.useDmnEditorDerivedStore)().edgesById;
    var edge = edgeId ? edgesById.get(edgeId) : undefined;
    var kieEdgePath = (0, useKieEdgePath_1.useKieEdgePath)(edge === null || edge === void 0 ? void 0 : edge.source, edge === null || edge === void 0 ? void 0 : edge.target, edge === null || edge === void 0 ? void 0 : edge.data);
    var isUpdatingFromSourceHandle = Object.keys(PositionalNodeHandles_1.PositionalNodeHandleId).some(function (k) { return PositionalNodeHandles_1.PositionalNodeHandleId[k] === (fromHandle === null || fromHandle === void 0 ? void 0 : fromHandle.id); });
    var _c = (0, DmnMaths_1.getNodeCenterPoint)(fromNode), fromX = _c["@_x"], fromY = _c["@_y"];
    var connectionLinePath = edge && kieEdgePath.points
        ? isUpdatingFromSourceHandle
            ? (0, DmnMaths_1.pointsToPath)(__spreadArray([{ "@_x": toX, "@_y": toY }], __read(kieEdgePath.points.slice(1)), false))
            : (0, DmnMaths_1.pointsToPath)(__spreadArray(__spreadArray([], __read(kieEdgePath.points.slice(0, -1)), false), [{ "@_x": toX, "@_y": toY }], false))
        : "M".concat(fromX, ",").concat(fromY, " L").concat(toX, ",").concat(toY);
    var handleId = isUpdatingFromSourceHandle ? edge === null || edge === void 0 ? void 0 : edge.type : fromHandle === null || fromHandle === void 0 ? void 0 : fromHandle.id;
    if (handleId === EdgeTypes_1.EDGE_TYPES.informationRequirement) {
        return (0, jsx_runtime_1.jsx)(Edges_1.InformationRequirementPath, { d: connectionLinePath });
    }
    else if (handleId === EdgeTypes_1.EDGE_TYPES.knowledgeRequirement) {
        return (0, jsx_runtime_1.jsx)(Edges_1.KnowledgeRequirementPath, { d: connectionLinePath });
    }
    else if (handleId === EdgeTypes_1.EDGE_TYPES.authorityRequirement) {
        return (0, jsx_runtime_1.jsx)(Edges_1.AuthorityRequirementPath, { d: connectionLinePath, centerToConnectionPoint: true });
    }
    else if (handleId === EdgeTypes_1.EDGE_TYPES.association) {
        return (0, jsx_runtime_1.jsx)(Edges_1.AssociationPath, { d: connectionLinePath });
    }
    else {
        var nodeType = handleId;
        var _d = (0, SnapGrid_1.snapPoint)(diagram.snapGrid, { "@_x": toX, "@_y": toY }), toXsnapped = _d["@_x"], toYsnapped = _d["@_y"];
        var defaultSize = DefaultSizes_1.DEFAULT_NODE_SIZES[nodeType](diagram.snapGrid);
        var _e = __read((0, Maths_1.getPositionalHandlePosition)({ x: toXsnapped, y: toYsnapped, width: defaultSize["@_width"], height: defaultSize["@_height"] }, { x: fromX, y: fromY, width: 1, height: 1 }), 2), toXauto = _e[0], toYauto = _e[1];
        var edge_1 = (0, graphStructure_1.getDefaultEdgeTypeBetween)(fromNode === null || fromNode === void 0 ? void 0 : fromNode.type, handleId);
        if (!edge_1) {
            throw new Error("Invalid structure: ".concat(fromNode === null || fromNode === void 0 ? void 0 : fromNode.type, " --(any)--> ").concat(handleId));
        }
        var path = "M".concat(fromX, ",").concat(fromY, " L").concat(toXauto, ",").concat(toYauto);
        var edgeSvg = (0, switch_expression_ts_1.switchExpression)(edge_1, (_b = {},
            _b[EdgeTypes_1.EDGE_TYPES.informationRequirement] = (0, jsx_runtime_1.jsx)(Edges_1.InformationRequirementPath, { d: path }),
            _b[EdgeTypes_1.EDGE_TYPES.knowledgeRequirement] = (0, jsx_runtime_1.jsx)(Edges_1.KnowledgeRequirementPath, { d: path }),
            _b[EdgeTypes_1.EDGE_TYPES.authorityRequirement] = (0, jsx_runtime_1.jsx)(Edges_1.AuthorityRequirementPath, { d: path, centerToConnectionPoint: false }),
            _b[EdgeTypes_1.EDGE_TYPES.association] = (0, jsx_runtime_1.jsx)(Edges_1.AssociationPath, { d: path }),
            _b));
        if (nodeType === NodeTypes_1.NODE_TYPES.decision) {
            return ((0, jsx_runtime_1.jsxs)("g", { children: [edgeSvg, (0, jsx_runtime_1.jsx)(NodeSvgs_1.DecisionNodeSvg, { x: toXsnapped, y: toYsnapped, width: defaultSize["@_width"], height: defaultSize["@_height"] })] }));
        }
        else if (nodeType === NodeTypes_1.NODE_TYPES.bkm) {
            return ((0, jsx_runtime_1.jsxs)("g", __assign({ className: "pulse" }, { children: [edgeSvg, (0, jsx_runtime_1.jsx)(NodeSvgs_1.BkmNodeSvg, { x: toXsnapped, y: toYsnapped, width: defaultSize["@_width"], height: defaultSize["@_height"] })] })));
        }
        else if (nodeType === NodeTypes_1.NODE_TYPES.knowledgeSource) {
            return ((0, jsx_runtime_1.jsxs)("g", { children: [edgeSvg, (0, jsx_runtime_1.jsx)(NodeSvgs_1.KnowledgeSourceNodeSvg, { x: toXsnapped, y: toYsnapped, width: defaultSize["@_width"], height: defaultSize["@_height"] })] }));
        }
        else if (nodeType === NodeTypes_1.NODE_TYPES.textAnnotation) {
            return ((0, jsx_runtime_1.jsxs)("g", { children: [edgeSvg, (0, jsx_runtime_1.jsx)(NodeSvgs_1.TextAnnotationNodeSvg, { x: toXsnapped, y: toYsnapped, width: defaultSize["@_width"], height: defaultSize["@_height"] })] }));
        }
    }
    throw new Error("Unknown source of ConnectionLine '".concat(handleId, "'."));
}
exports.ConnectionLine = ConnectionLine;
//# sourceMappingURL=ConnectionLine.js.map