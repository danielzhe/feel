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
exports.getSnappedHandlePosition = exports.getSnappedMultiPointAnchoredEdgePath = void 0;
var switch_expression_ts_1 = require("@kie-tools-core/switch-expression-ts");
var SnapGrid_1 = require("../SnapGrid");
var PositionalNodeHandles_1 = require("../connections/PositionalNodeHandles");
var DmnMaths_1 = require("../maths/DmnMaths");
var Maths_1 = require("../maths/Maths");
var AutoPositionedEdgeMarker_1 = require("./AutoPositionedEdgeMarker");
function getSnappedMultiPointAnchoredEdgePath(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var _m;
    var snapGrid = _a.snapGrid, dmnEdge = _a.dmnEdge, sourceNode = _a.sourceNode, targetNode = _a.targetNode, dmnShapeSource = _a.dmnShapeSource, dmnShapeTarget = _a.dmnShapeTarget;
    if (!sourceNode || !targetNode) {
        return { path: undefined, points: [] };
    }
    var points = new Array(Math.max(2, (_c = (_b = dmnEdge === null || dmnEdge === void 0 ? void 0 : dmnEdge["di:waypoint"]) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0));
    var discreteAuto = (0, Maths_1.getDiscretelyAutoPositionedEdgeParamsForRfNodes)(sourceNode, targetNode);
    if ((_d = dmnEdge === null || dmnEdge === void 0 ? void 0 : dmnEdge["@_id"]) === null || _d === void 0 ? void 0 : _d.endsWith(AutoPositionedEdgeMarker_1.AutoPositionedEdgeMarker.BOTH)) {
        points[0] = { "@_x": discreteAuto.sx, "@_y": discreteAuto.sy };
        points[points.length - 1] = { "@_x": discreteAuto.tx, "@_y": discreteAuto.ty };
    }
    else if ((_e = dmnEdge === null || dmnEdge === void 0 ? void 0 : dmnEdge["@_id"]) === null || _e === void 0 ? void 0 : _e.endsWith(AutoPositionedEdgeMarker_1.AutoPositionedEdgeMarker.SOURCE)) {
        points[0] = { "@_x": discreteAuto.sx, "@_y": discreteAuto.sy };
    }
    else if ((_f = dmnEdge === null || dmnEdge === void 0 ? void 0 : dmnEdge["@_id"]) === null || _f === void 0 ? void 0 : _f.endsWith(AutoPositionedEdgeMarker_1.AutoPositionedEdgeMarker.TARGET)) {
        points[points.length - 1] = { "@_x": discreteAuto.tx, "@_y": discreteAuto.ty };
    }
    if (!(dmnEdge === null || dmnEdge === void 0 ? void 0 : dmnEdge["di:waypoint"])) {
        console.warn("DMN DIAGRAM: No waypoints found. Creating a default straight line.");
        points[0] = { "@_x": discreteAuto.sx, "@_y": discreteAuto.sy };
        points[points.length - 1] = { "@_x": discreteAuto.tx, "@_y": discreteAuto.ty };
    }
    else if ((dmnEdge === null || dmnEdge === void 0 ? void 0 : dmnEdge["di:waypoint"].length) < 2) {
        console.warn("DMN DIAGRAM: Invalid waypoints for edge. Creating a default straight line.");
        points[0] = { "@_x": discreteAuto.sx, "@_y": discreteAuto.sy };
        points[points.length - 1] = { "@_x": discreteAuto.tx, "@_y": discreteAuto.ty };
    }
    else {
        var firstWaypoint = dmnEdge["di:waypoint"][0];
        var secondWaypoint = (_g = points[1]) !== null && _g !== void 0 ? _g : dmnEdge["di:waypoint"][1];
        var sourceHandlePoint = getSnappedHandlePosition(dmnShapeSource, sourceNode, firstWaypoint, points.length === 2 ? (0, DmnMaths_1.getNodeCenterPoint)(targetNode) : (0, SnapGrid_1.snapPoint)(snapGrid, secondWaypoint));
        (_h = points[0]) !== null && _h !== void 0 ? _h : (points[0] = sourceHandlePoint);
        var lastWaypoint = dmnEdge["di:waypoint"][dmnEdge["di:waypoint"].length - 1];
        var secondToLastWaypoint = (_j = points[points.length - 2]) !== null && _j !== void 0 ? _j : dmnEdge["di:waypoint"][dmnEdge["di:waypoint"].length - 2];
        var targetHandlePoint = getSnappedHandlePosition(dmnShapeTarget, targetNode, lastWaypoint, points.length === 2 ? (0, DmnMaths_1.getNodeCenterPoint)(sourceNode) : (0, SnapGrid_1.snapPoint)(snapGrid, secondToLastWaypoint));
        (_k = points[_m = points.length - 1]) !== null && _k !== void 0 ? _k : (points[_m] = targetHandlePoint);
    }
    for (var i = 1; i < points.length - 1; i++) {
        points[i] = (0, SnapGrid_1.snapPoint)(snapGrid, __assign({}, ((_l = dmnEdge === null || dmnEdge === void 0 ? void 0 : dmnEdge["di:waypoint"]) !== null && _l !== void 0 ? _l : [])[i]));
    }
    return { path: (0, DmnMaths_1.pointsToPath)(points), points: points };
}
exports.getSnappedMultiPointAnchoredEdgePath = getSnappedMultiPointAnchoredEdgePath;
function getSnappedHandlePosition(shape, snappedNode, originalHandleWaypoint, snappedSecondWaypoint) {
    var _a;
    var _b, _c, _d, _e, _f, _g;
    var handlePosition = (0, DmnMaths_1.getHandlePosition)({ shapeBounds: shape["dc:Bounds"], waypoint: originalHandleWaypoint }).handlePosition;
    var centerHandleWaypoint = (0, DmnMaths_1.getNodeCenterPoint)(snappedNode);
    var nodeRectangle = {
        x: (_c = (_b = snappedNode.positionAbsolute) === null || _b === void 0 ? void 0 : _b.x) !== null && _c !== void 0 ? _c : 0,
        y: (_e = (_d = snappedNode.positionAbsolute) === null || _d === void 0 ? void 0 : _d.y) !== null && _e !== void 0 ? _e : 0,
        width: (_f = snappedNode.width) !== null && _f !== void 0 ? _f : 0,
        height: (_g = snappedNode.height) !== null && _g !== void 0 ? _g : 0,
    };
    return (0, switch_expression_ts_1.switchExpression)(handlePosition, (_a = {},
        _a[PositionalNodeHandles_1.PositionalNodeHandleId.Top] = { "@_x": nodeRectangle.x + nodeRectangle.width / 2, "@_y": nodeRectangle.y },
        _a[PositionalNodeHandles_1.PositionalNodeHandleId.Right] = {
            "@_x": nodeRectangle.x + nodeRectangle.width,
            "@_y": nodeRectangle.y + nodeRectangle.height / 2,
        },
        _a[PositionalNodeHandles_1.PositionalNodeHandleId.Bottom] = {
            "@_x": nodeRectangle.x + nodeRectangle.width / 2,
            "@_y": nodeRectangle.y + nodeRectangle.height,
        },
        _a[PositionalNodeHandles_1.PositionalNodeHandleId.Left] = { "@_x": nodeRectangle.x, "@_y": nodeRectangle.y + nodeRectangle.height / 2 },
        _a[PositionalNodeHandles_1.PositionalNodeHandleId.Center] = (0, DmnMaths_1.getLineRectangleIntersectionPoint)(snappedSecondWaypoint, centerHandleWaypoint, nodeRectangle),
        _a));
}
exports.getSnappedHandlePosition = getSnappedHandlePosition;
//# sourceMappingURL=getSnappedMultiPointAnchoredEdgePath.js.map