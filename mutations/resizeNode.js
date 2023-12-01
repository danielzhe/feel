"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeNode = void 0;
var switch_expression_ts_1 = require("@kie-tools-core/switch-expression-ts");
var SnapGrid_1 = require("../diagram/SnapGrid");
var PositionalNodeHandles_1 = require("../diagram/connections/PositionalNodeHandles");
var DmnMaths_1 = require("../diagram/maths/DmnMaths");
var DefaultSizes_1 = require("../diagram/nodes/DefaultSizes");
var NodeTypes_1 = require("../diagram/nodes/NodeTypes");
var addOrGetDrd_1 = require("./addOrGetDrd");
function resizeNode(_a) {
    var _b, _c;
    var definitions = _a.definitions, drdIndex = _a.drdIndex, dmnShapesByHref = _a.dmnShapesByHref, snapGrid = _a.snapGrid, change = _a.change;
    var edgeIndexesAlreadyUpdated = new Set();
    var diagramElements = (0, addOrGetDrd_1.addOrGetDrd)({ definitions: definitions, drdIndex: drdIndex }).diagramElements;
    var shape = diagramElements === null || diagramElements === void 0 ? void 0 : diagramElements[change.shapeIndex];
    var shapeBounds = shape === null || shape === void 0 ? void 0 : shape["dc:Bounds"];
    if (!shapeBounds) {
        throw new Error("Cannot resize non-existent shape bounds");
    }
    var limit = { x: 0, y: 0 };
    if (change.nodeType === NodeTypes_1.NODE_TYPES.decisionService) {
        var ds = definitions.drgElement[change.index];
        if (!change.isExternal) {
            (_b = ds.encapsulatedDecision) === null || _b === void 0 ? void 0 : _b.forEach(function (ed) {
                var edShape = dmnShapesByHref.get(ed["@_href"]);
                var dim = (0, SnapGrid_1.snapShapeDimensions)(snapGrid, edShape, DefaultSizes_1.MIN_NODE_SIZES[NodeTypes_1.NODE_TYPES.decision](snapGrid));
                var pos = (0, SnapGrid_1.snapShapePosition)(snapGrid, edShape);
                if (pos.x + dim.width > limit.x) {
                    limit.x = pos.x + dim.width;
                }
                if (pos.y + dim.height > limit.y) {
                    limit.y = pos.y + dim.height;
                }
            });
            (_c = ds.outputDecision) === null || _c === void 0 ? void 0 : _c.forEach(function (ed) {
                var edShape = dmnShapesByHref.get(ed["@_href"]);
                var dim = (0, SnapGrid_1.snapShapeDimensions)(snapGrid, edShape, DefaultSizes_1.MIN_NODE_SIZES[NodeTypes_1.NODE_TYPES.decision](snapGrid));
                var pos = (0, SnapGrid_1.snapShapePosition)(snapGrid, edShape);
                if (pos.x + dim.width > limit.x) {
                    limit.x = pos.x + dim.width;
                }
            });
        }
    }
    var snappedPosition = (0, SnapGrid_1.snapShapePosition)(snapGrid, shape);
    var newDimensions = {
        width: Math.max(change.dimension["@_width"], limit.x - snappedPosition.x),
        height: Math.max(change.dimension["@_height"], limit.y - snappedPosition.y),
    };
    var deltaWidth = newDimensions.width - shapeBounds["@_width"];
    var deltaHeight = newDimensions.height - shapeBounds["@_height"];
    var offsetByPosition = function (position) {
        var _a;
        return (0, switch_expression_ts_1.switchExpression)(position, (_a = {},
            _a[PositionalNodeHandles_1.PositionalNodeHandleId.Center] = { x: deltaWidth / 2, y: deltaHeight / 2 },
            _a[PositionalNodeHandles_1.PositionalNodeHandleId.Top] = { x: deltaWidth / 2, y: 0 },
            _a[PositionalNodeHandles_1.PositionalNodeHandleId.Right] = { x: deltaWidth, y: deltaHeight / 2 },
            _a[PositionalNodeHandles_1.PositionalNodeHandleId.Bottom] = { x: deltaWidth / 2, y: deltaHeight },
            _a[PositionalNodeHandles_1.PositionalNodeHandleId.Left] = { x: 0, y: deltaHeight / 2 },
            _a));
    };
    var offsetEdges = function (args) {
        var e_1, _a;
        try {
            for (var _b = __values(args.edgeIndexes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var edgeIndex = _c.value;
                if (edgeIndexesAlreadyUpdated.has(edgeIndex)) {
                    continue;
                }
                edgeIndexesAlreadyUpdated.add(edgeIndex);
                var edge = diagramElements[edgeIndex];
                if (!edge || !edge["di:waypoint"]) {
                    throw new Error("Cannot reposition non-existent edge");
                }
                var waypoint = (0, switch_expression_ts_1.switchExpression)(args.waypointSelector, {
                    first: edge["di:waypoint"][0],
                    last: edge["di:waypoint"][edge["di:waypoint"].length - 1],
                });
                var offset = offsetByPosition((0, DmnMaths_1.getHandlePosition)({ shapeBounds: shapeBounds, waypoint: waypoint }).handlePosition);
                waypoint["@_x"] += offset.x;
                waypoint["@_y"] += offset.y;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    offsetEdges({ edgeIndexes: change.sourceEdgeIndexes, waypointSelector: "first" });
    offsetEdges({ edgeIndexes: change.targetEdgeIndexes, waypointSelector: "last" });
    shapeBounds["@_width"] = newDimensions.width;
    shapeBounds["@_height"] = newDimensions.height;
}
exports.resizeNode = resizeNode;
//# sourceMappingURL=resizeNode.js.map