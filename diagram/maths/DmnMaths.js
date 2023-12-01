"use strict";
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
exports.getNodeTypeFromDmnObject = exports.getBounds = exports.getDiscreteAutoPositioningEdgeIdMarker = exports.DISCRETE_AUTO_POSITIONING_DMN_EDGE_ID_MARKER = exports.getDecisionServiceDividerLineLocalY = exports.pointsToPath = exports.getContainmentRelationship = exports.getLineRectangleIntersectionPoint = exports.getHandlePosition = exports.getPointForHandle = exports.getBoundsCenterPoint = exports.getNodeCenterPoint = exports.getDistance = exports.CONTAINER_NODES_DESIRABLE_PADDING = exports.DEFAULT_INTRACTION_WIDTH = void 0;
var switch_expression_ts_1 = require("@kie-tools-core/switch-expression-ts");
var PositionalNodeHandles_1 = require("../connections/PositionalNodeHandles");
var AutoPositionedEdgeMarker_1 = require("../edges/AutoPositionedEdgeMarker");
var NodeTypes_1 = require("../nodes/NodeTypes");
var Maths_1 = require("./Maths");
var SnapGrid_1 = require("../SnapGrid");
exports.DEFAULT_INTRACTION_WIDTH = 40;
exports.CONTAINER_NODES_DESIRABLE_PADDING = 60;
function getDistance(a, b) {
    return Math.sqrt(Math.pow(a["@_x"] - b["@_x"], 2) + Math.pow(a["@_y"] - b["@_y"], 2));
}
exports.getDistance = getDistance;
function getNodeCenterPoint(node) {
    var _a, _b;
    var _c = (0, Maths_1.getCenter)((_a = node === null || node === void 0 ? void 0 : node.positionAbsolute) === null || _a === void 0 ? void 0 : _a.x, (_b = node === null || node === void 0 ? void 0 : node.positionAbsolute) === null || _b === void 0 ? void 0 : _b.y, node === null || node === void 0 ? void 0 : node.width, node === null || node === void 0 ? void 0 : node.height), x = _c.x, y = _c.y;
    return { "@_x": x, "@_y": y };
}
exports.getNodeCenterPoint = getNodeCenterPoint;
function getBoundsCenterPoint(bounds) {
    var _a = (0, Maths_1.getCenter)(bounds["@_x"], bounds["@_y"], bounds["@_width"], bounds["@_height"]), x = _a.x, y = _a.y;
    return { "@_x": x, "@_y": y };
}
exports.getBoundsCenterPoint = getBoundsCenterPoint;
function getPointForHandle(_a) {
    var handle = _a.handle, bounds = _a.bounds;
    if (handle === PositionalNodeHandles_1.PositionalNodeHandleId.Center) {
        return getBoundsCenterPoint(bounds);
    }
    else if (handle === PositionalNodeHandles_1.PositionalNodeHandleId.Top) {
        return { "@_x": bounds["@_x"] + bounds["@_width"] / 2, "@_y": bounds["@_y"] };
    }
    else if (handle === PositionalNodeHandles_1.PositionalNodeHandleId.Right) {
        return { "@_x": bounds["@_x"] + bounds["@_width"], "@_y": bounds["@_y"] + bounds["@_height"] / 2 };
    }
    else if (handle === PositionalNodeHandles_1.PositionalNodeHandleId.Bottom) {
        return { "@_x": bounds["@_x"] + bounds["@_width"] / 2, "@_y": bounds["@_y"] + bounds["@_height"] };
    }
    else if (handle === PositionalNodeHandles_1.PositionalNodeHandleId.Left) {
        return { "@_x": bounds["@_x"], "@_y": bounds["@_y"] + bounds["@_height"] / 2 };
    }
    else {
        throw new Error("Invalid target handle id '".concat(handle, "'."));
    }
}
exports.getPointForHandle = getPointForHandle;
function getHandlePosition(_a) {
    var _b, _c, _d, _e;
    var shapeBounds = _a.shapeBounds, waypoint = _a.waypoint;
    var x = (_b = shapeBounds === null || shapeBounds === void 0 ? void 0 : shapeBounds["@_x"]) !== null && _b !== void 0 ? _b : 0;
    var y = (_c = shapeBounds === null || shapeBounds === void 0 ? void 0 : shapeBounds["@_y"]) !== null && _c !== void 0 ? _c : 0;
    var w = (_d = shapeBounds === null || shapeBounds === void 0 ? void 0 : shapeBounds["@_width"]) !== null && _d !== void 0 ? _d : 0;
    var h = (_e = shapeBounds === null || shapeBounds === void 0 ? void 0 : shapeBounds["@_height"]) !== null && _e !== void 0 ? _e : 0;
    var center = { "@_x": x + w / 2, "@_y": y + h / 2 };
    var left = { "@_x": x, "@_y": y + h / 2 };
    var right = { "@_x": x + w, "@_y": y + h / 2 };
    var top = { "@_x": x + w / 2, "@_y": y };
    var bottom = { "@_x": x + w / 2, "@_y": y + h };
    if (getDistance(center, waypoint) <= 1) {
        return { handlePosition: PositionalNodeHandles_1.PositionalNodeHandleId.Center, point: center };
    }
    else if (getDistance(top, waypoint) <= 1) {
        return { handlePosition: PositionalNodeHandles_1.PositionalNodeHandleId.Top, point: top };
    }
    else if (getDistance(right, waypoint) <= 1) {
        return { handlePosition: PositionalNodeHandles_1.PositionalNodeHandleId.Right, point: right };
    }
    else if (getDistance(bottom, waypoint) <= 1) {
        return { handlePosition: PositionalNodeHandles_1.PositionalNodeHandleId.Bottom, point: bottom };
    }
    else if (getDistance(left, waypoint) <= 1) {
        return { handlePosition: PositionalNodeHandles_1.PositionalNodeHandleId.Left, point: left };
    }
    else {
        console.warn("DMN DIAGRAM: Can't find a match of NSWE/Center handles. Using Center as default.");
        return { handlePosition: PositionalNodeHandles_1.PositionalNodeHandleId.Center, point: center };
    }
}
exports.getHandlePosition = getHandlePosition;
function getLineRectangleIntersectionPoint(point1, point2, rectangle) {
    var e_1, _a;
    var _b = __read([point1["@_x"], point1["@_y"]], 2), x1 = _b[0], y1 = _b[1];
    var _c = __read([point2["@_x"], point2["@_y"]], 2), x2 = _c[0], y2 = _c[1];
    var _d = __read([rectangle.x, rectangle.y], 2), rx = _d[0], ry = _d[1];
    var _e = __read([rectangle.width, rectangle.height], 2), rw = _e[0], rh = _e[1];
    var m = (y2 - y1) / (x2 - x1);
    var b = y1 - m * x1;
    if (m === Infinity || m === -Infinity) {
        var x = point1["@_x"];
        var minY = Math.min(point1["@_y"], point2["@_y"]);
        var maxY = Math.max(point1["@_y"], point2["@_y"]);
        if (x >= rectangle.x && x <= rectangle.x + rectangle.width) {
            if (minY <= rectangle.y) {
                return { "@_x": x, "@_y": rectangle.y };
            }
            else if (maxY >= rectangle.y + rectangle.height) {
                return { "@_x": x, "@_y": rectangle.y + rectangle.height };
            }
        }
    }
    var intersections = [];
    var topX = Math.round((ry - b) / m);
    if (topX >= rx && topX <= rx + rw) {
        intersections.push({ x: topX, y: ry });
    }
    var bottomX = Math.round((ry + rh - b) / m);
    if (bottomX >= rx && bottomX <= rx + rw) {
        intersections.push({ x: bottomX, y: ry + rh });
    }
    var leftY = Math.round(m * rx + b);
    if (leftY >= ry && leftY <= ry + rh) {
        intersections.push({ x: rx, y: leftY });
    }
    var rightY = Math.round(m * (rx + rw) + b);
    if (rightY >= ry && rightY <= ry + rh) {
        intersections.push({ x: rx + rw, y: rightY });
    }
    var closestIntersection = null;
    try {
        for (var intersections_1 = __values(intersections), intersections_1_1 = intersections_1.next(); !intersections_1_1.done; intersections_1_1 = intersections_1.next()) {
            var intersection = intersections_1_1.value;
            if (!closestIntersection || minDistance(intersection, x1, y1) < minDistance(closestIntersection, x1, y1)) {
                closestIntersection = intersection;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (intersections_1_1 && !intersections_1_1.done && (_a = intersections_1.return)) _a.call(intersections_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return ((closestIntersection && {
        "@_x": closestIntersection.x,
        "@_y": closestIntersection.y,
    }) ||
        point2);
}
exports.getLineRectangleIntersectionPoint = getLineRectangleIntersectionPoint;
var minDistance = function (point, x1, y1) {
    return Math.pow(point.x - x1, 2) + Math.pow(point.y - y1, 2);
};
function getContainmentRelationship(_a) {
    var bounds = _a.bounds, container = _a.container, divingLineLocalY = _a.divingLineLocalY, snapGrid = _a.snapGrid, containerMinSizes = _a.containerMinSizes, boundsMinSizes = _a.boundsMinSizes;
    var _b = (0, SnapGrid_1.snapBoundsPosition)(snapGrid, container), cx = _b.x, cy = _b.y;
    var _c = (0, SnapGrid_1.snapBoundsDimensions)(snapGrid, container, containerMinSizes(snapGrid)), cw = _c.width, ch = _c.height;
    var _d = (0, SnapGrid_1.snapBoundsPosition)(snapGrid, bounds), bx = _d.x, by = _d.y;
    var _e = (0, SnapGrid_1.snapBoundsDimensions)(snapGrid, bounds, boundsMinSizes(snapGrid)), bw = _e.width, bh = _e.height;
    var center = getBoundsCenterPoint({
        "@_height": bh,
        "@_width": bw,
        "@_x": bx,
        "@_y": by,
    });
    var isInside = bx >= cx &&
        by >= cy &&
        bx + bw <= cx + cw &&
        by + bh <= cy + ch;
    if (isInside) {
        return { isInside: true, section: center["@_y"] > cy + (divingLineLocalY !== null && divingLineLocalY !== void 0 ? divingLineLocalY : 0) ? "lower" : "upper" };
    }
    else {
        return { isInside: false };
    }
}
exports.getContainmentRelationship = getContainmentRelationship;
function pointsToPath(points) {
    var start = points[0];
    var path = "M ".concat(start["@_x"], ",").concat(start["@_y"]);
    for (var i = 1; i < points.length - 1; i++) {
        var p = points[i];
        path += " L ".concat(p["@_x"], ",").concat(p["@_y"], " M ").concat(p["@_x"], ",").concat(p["@_y"]);
    }
    var end = points[points.length - 1];
    path += " L ".concat(end["@_x"], ",").concat(end["@_y"]);
    return path;
}
exports.pointsToPath = pointsToPath;
function getDecisionServiceDividerLineLocalY(shape) {
    var _a, _b, _c, _d, _e;
    return (((_c = (_b = (_a = shape["dmndi:DMNDecisionServiceDividerLine"]) === null || _a === void 0 ? void 0 : _a["di:waypoint"]) === null || _b === void 0 ? void 0 : _b[0]["@_y"]) !== null && _c !== void 0 ? _c : 0) -
        ((_e = (_d = shape["dc:Bounds"]) === null || _d === void 0 ? void 0 : _d["@_y"]) !== null && _e !== void 0 ? _e : 0));
}
exports.getDecisionServiceDividerLineLocalY = getDecisionServiceDividerLineLocalY;
exports.DISCRETE_AUTO_POSITIONING_DMN_EDGE_ID_MARKER = [
    AutoPositionedEdgeMarker_1.AutoPositionedEdgeMarker.BOTH,
    AutoPositionedEdgeMarker_1.AutoPositionedEdgeMarker.SOURCE,
    AutoPositionedEdgeMarker_1.AutoPositionedEdgeMarker.TARGET,
];
function getDiscreteAutoPositioningEdgeIdMarker(edgeId) {
    var e_2, _a;
    try {
        for (var DISCRETE_AUTO_POSITIONING_DMN_EDGE_ID_MARKER_1 = __values(exports.DISCRETE_AUTO_POSITIONING_DMN_EDGE_ID_MARKER), DISCRETE_AUTO_POSITIONING_DMN_EDGE_ID_MARKER_1_1 = DISCRETE_AUTO_POSITIONING_DMN_EDGE_ID_MARKER_1.next(); !DISCRETE_AUTO_POSITIONING_DMN_EDGE_ID_MARKER_1_1.done; DISCRETE_AUTO_POSITIONING_DMN_EDGE_ID_MARKER_1_1 = DISCRETE_AUTO_POSITIONING_DMN_EDGE_ID_MARKER_1.next()) {
            var marker = DISCRETE_AUTO_POSITIONING_DMN_EDGE_ID_MARKER_1_1.value;
            if (edgeId.endsWith(marker)) {
                return marker;
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (DISCRETE_AUTO_POSITIONING_DMN_EDGE_ID_MARKER_1_1 && !DISCRETE_AUTO_POSITIONING_DMN_EDGE_ID_MARKER_1_1.done && (_a = DISCRETE_AUTO_POSITIONING_DMN_EDGE_ID_MARKER_1.return)) _a.call(DISCRETE_AUTO_POSITIONING_DMN_EDGE_ID_MARKER_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return undefined;
}
exports.getDiscreteAutoPositioningEdgeIdMarker = getDiscreteAutoPositioningEdgeIdMarker;
function getBounds(_a) {
    var _b, _c;
    var nodes = _a.nodes, padding = _a.padding;
    var maxX = 0, maxY = 0, minX = Infinity, minY = Infinity;
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        maxX = Math.max(maxX, node.position.x + ((_b = node.width) !== null && _b !== void 0 ? _b : 0));
        minX = Math.min(minX, node.position.x);
        maxY = Math.max(maxY, node.position.y + ((_c = node.height) !== null && _c !== void 0 ? _c : 0));
        minY = Math.min(minY, node.position.y);
    }
    return {
        "@_x": minX - padding,
        "@_y": minY - padding,
        "@_width": maxX - minX + 2 * padding,
        "@_height": maxY - minY + 2 * padding,
    };
}
exports.getBounds = getBounds;
function getNodeTypeFromDmnObject(dmnObject) {
    if (!dmnObject) {
        return NodeTypes_1.NODE_TYPES.unknown;
    }
    var type = (0, switch_expression_ts_1.switchExpression)(dmnObject.__$$element, {
        inputData: NodeTypes_1.NODE_TYPES.inputData,
        decision: NodeTypes_1.NODE_TYPES.decision,
        businessKnowledgeModel: NodeTypes_1.NODE_TYPES.bkm,
        knowledgeSource: NodeTypes_1.NODE_TYPES.knowledgeSource,
        decisionService: NodeTypes_1.NODE_TYPES.decisionService,
        group: NodeTypes_1.NODE_TYPES.group,
        textAnnotation: NodeTypes_1.NODE_TYPES.textAnnotation,
        association: undefined,
        default: undefined,
    });
    return type;
}
exports.getNodeTypeFromDmnObject = getNodeTypeFromDmnObject;
//# sourceMappingURL=DmnMaths.js.map