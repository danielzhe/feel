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
exports.repositionNode = void 0;
var switch_expression_ts_1 = require("@kie-tools-core/switch-expression-ts");
var NodeTypes_1 = require("../diagram/nodes/NodeTypes");
var addOrGetDrd_1 = require("./addOrGetDrd");
var updateDecisionServiceDividerLine_1 = require("./updateDecisionServiceDividerLine");
function repositionNode(_a) {
    var _b, _c, _d;
    var definitions = _a.definitions, drdIndex = _a.drdIndex, controlWaypointsByEdge = _a.controlWaypointsByEdge, change = _a.change;
    var diagramElements = (0, addOrGetDrd_1.addOrGetDrd)({ definitions: definitions, drdIndex: drdIndex }).diagramElements;
    var shape = diagramElements === null || diagramElements === void 0 ? void 0 : diagramElements[change.shapeIndex];
    var shapeBounds = shape === null || shape === void 0 ? void 0 : shape["dc:Bounds"];
    if (!shapeBounds) {
        throw new Error("Cannot reposition non-existent shape bounds");
    }
    var deltaX;
    var deltaY;
    if (change.type === "absolute") {
        deltaX = change.position.x - ((_b = shapeBounds === null || shapeBounds === void 0 ? void 0 : shapeBounds["@_x"]) !== null && _b !== void 0 ? _b : 0);
        deltaY = change.position.y - ((_c = shapeBounds === null || shapeBounds === void 0 ? void 0 : shapeBounds["@_y"]) !== null && _c !== void 0 ? _c : 0);
        shapeBounds["@_x"] = change.position.x;
        shapeBounds["@_y"] = change.position.y;
    }
    else if (change.type === "offset") {
        deltaX = change.offset.deltaX;
        deltaY = change.offset.deltaY;
        shapeBounds["@_x"] += change.offset.deltaX;
        shapeBounds["@_y"] += change.offset.deltaY;
    }
    else {
        throw new Error("Unknown type of node position change '".concat(change.type, "'."));
    }
    var offsetEdges = function (args) {
        var e_1, _a, e_2, _b;
        var _c;
        try {
            for (var _d = __values(args.edgeIndexes), _e = _d.next(); !_e.done; _e = _d.next()) {
                var edgeIndex = _e.value;
                var edge = diagramElements[edgeIndex];
                if (!edge || !edge["di:waypoint"]) {
                    throw new Error("Cannot reposition non-existent edge");
                }
                var isEdgeSelected = change.selectedEdges.indexOf(edge["@_dmnElementRef"]) >= 0;
                var waypointIndexes = (0, switch_expression_ts_1.switchExpression)(args.waypoint, {
                    first: isEdgeSelected
                        ? arrayRange(0, edge["di:waypoint"].length - 2)
                        : [0],
                    last: isEdgeSelected
                        ? arrayRange(1, edge["di:waypoint"].length - 1)
                        : [edge["di:waypoint"].length - 1],
                });
                controlWaypointsByEdge.set(edgeIndex, (_c = controlWaypointsByEdge.get(edgeIndex)) !== null && _c !== void 0 ? _c : new Set());
                try {
                    for (var waypointIndexes_1 = (e_2 = void 0, __values(waypointIndexes)), waypointIndexes_1_1 = waypointIndexes_1.next(); !waypointIndexes_1_1.done; waypointIndexes_1_1 = waypointIndexes_1.next()) {
                        var wi = waypointIndexes_1_1.value;
                        var waypointsControl = controlWaypointsByEdge.get(edgeIndex);
                        if (waypointsControl.has(wi)) {
                            continue;
                        }
                        else {
                            waypointsControl.add(wi);
                        }
                        var w = edge["di:waypoint"][wi];
                        w["@_x"] += deltaX;
                        w["@_y"] += deltaY;
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (waypointIndexes_1_1 && !waypointIndexes_1_1.done && (_b = waypointIndexes_1.return)) _b.call(waypointIndexes_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    offsetEdges({ edgeIndexes: change.sourceEdgeIndexes, waypoint: "first" });
    offsetEdges({ edgeIndexes: change.targetEdgeIndexes, waypoint: "last" });
    if (change.nodeType === NodeTypes_1.NODE_TYPES.decisionService) {
        (_d = shape["dmndi:DMNDecisionServiceDividerLine"]) !== null && _d !== void 0 ? _d : (shape["dmndi:DMNDecisionServiceDividerLine"] = (0, updateDecisionServiceDividerLine_1.getCentralizedDecisionServiceDividerLine)(shapeBounds));
        var w = shape["dmndi:DMNDecisionServiceDividerLine"]["di:waypoint"];
        w[0]["@_x"] += deltaX;
        w[0]["@_y"] += deltaY;
        w[1]["@_x"] += deltaX;
        w[1]["@_y"] += deltaY;
    }
    return {
        delta: {
            x: deltaX,
            y: deltaY,
        },
        newPosition: {
            x: shapeBounds["@_x"],
            y: shapeBounds["@_y"],
        },
    };
}
exports.repositionNode = repositionNode;
function arrayRange(start, stop, step) {
    if (step === void 0) { step = 1; }
    return Array.from({ length: (stop - start) / step + 1 }, function (_, index) { return start + index * step; });
}
//# sourceMappingURL=repositionNode.js.map