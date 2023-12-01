"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePotentialWaypointControls = void 0;
var RF = __importStar(require("reactflow"));
var react_1 = require("react");
var addEdgeWaypoint_1 = require("../../mutations/addEdgeWaypoint");
var Store_1 = require("../../store/Store");
var DiagramContainerContext_1 = require("../DiagramContainerContext");
var SnapGrid_1 = require("../SnapGrid");
function usePotentialWaypointControls(waypoints, isEdgeSelected, edgeId, edgeIndex, interactionPathRef) {
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var reactFlowInstance = RF.useReactFlow();
    var _a = __read((0, react_1.useState)(undefined), 2), potentialWaypoint = _a[0], setPotentialWaypoint = _a[1];
    var container = (0, DiagramContainerContext_1.useDmnEditorDiagramContainer)().container;
    var isConnecting = !!RF.useStore(function (s) { return s.connectionNodeId; });
    var isExistingWaypoint = (0, react_1.useCallback)(function (point) { return waypoints.find(function (w) { return w["@_x"] === point["@_x"] && w["@_y"] === point["@_y"]; }); }, [waypoints]);
    var onMouseMove = (0, react_1.useCallback)(function (e) {
        var containerBounds = container.current.getBoundingClientRect();
        var projectedPoint = reactFlowInstance.project({
            x: e.clientX - containerBounds.left,
            y: e.clientY - containerBounds.top,
        });
        setPotentialWaypoint(approximateClosestPoint(interactionPathRef.current, [projectedPoint.x, projectedPoint.y]));
    }, [container, interactionPathRef, reactFlowInstance]);
    var snappedPotentialWaypoint = (0, react_1.useMemo)(function () {
        if (!potentialWaypoint) {
            return undefined;
        }
        return (0, SnapGrid_1.snapPoint)(diagram.snapGrid, {
            "@_x": potentialWaypoint.point.x,
            "@_y": potentialWaypoint.point.y,
        });
    }, [diagram.snapGrid, potentialWaypoint]);
    var onDoubleClick = (0, react_1.useCallback)(function () {
        if (!potentialWaypoint || !snappedPotentialWaypoint || edgeIndex === undefined) {
            return;
        }
        if (isExistingWaypoint(snappedPotentialWaypoint)) {
            console.debug("Preventing overlapping waypoint creation.");
            return;
        }
        var i = 1;
        for (var currentLength = 0; currentLength < potentialWaypoint.lengthInPath; i++) {
            currentLength += Math.sqrt(distanceComponentsSquared([waypoints[i]["@_x"], waypoints[i]["@_y"]], {
                x: waypoints[i - 1]["@_x"],
                y: waypoints[i - 1]["@_y"],
            }));
        }
        dmnEditorStoreApi.setState(function (state) {
            (0, addEdgeWaypoint_1.addEdgeWaypoint)({
                definitions: state.dmn.model.definitions,
                drdIndex: diagram.drdIndex,
                beforeIndex: i - 1,
                edgeIndex: edgeIndex,
                waypoint: snappedPotentialWaypoint,
            });
        });
    }, [
        diagram.drdIndex,
        dmnEditorStoreApi,
        edgeIndex,
        isExistingWaypoint,
        potentialWaypoint,
        snappedPotentialWaypoint,
        waypoints,
    ]);
    var isDraggingWaypoint = !!diagram.draggingWaypoints.find(function (e) { return e === edgeId; });
    var shouldReturnPotentialWaypoint = isEdgeSelected &&
        !isDraggingWaypoint &&
        snappedPotentialWaypoint &&
        !isExistingWaypoint(snappedPotentialWaypoint) &&
        !isConnecting;
    return {
        isDraggingWaypoint: isDraggingWaypoint,
        onMouseMove: onMouseMove,
        onDoubleClick: onDoubleClick,
        potentialWaypoint: !shouldReturnPotentialWaypoint ? undefined : potentialWaypoint,
    };
}
exports.usePotentialWaypointControls = usePotentialWaypointControls;
function approximateClosestPoint(pathNode, point) {
    var pathLength = pathNode.getTotalLength();
    var precision = Math.floor(pathLength / 10);
    var best;
    var bestLength = 0;
    var bestDistance = Infinity;
    var scan;
    var scanDistance;
    for (var scanLength = 0; scanLength <= pathLength; scanLength += precision) {
        scan = pathNode.getPointAtLength(scanLength);
        scanDistance = distanceComponentsSquared(point, scan);
        if (scanDistance < bestDistance) {
            best = scan;
            bestLength = scanLength;
            bestDistance = scanDistance;
        }
    }
    precision /= 2;
    while (precision > 1) {
        var bLength = bestLength - precision;
        var b = pathNode.getPointAtLength(bLength);
        var bDistance = distanceComponentsSquared(point, b);
        if (bLength >= 0 && bDistance < bestDistance) {
            best = b;
            bestLength = bLength;
            bestDistance = bDistance;
            continue;
        }
        var aLength = bestLength + precision;
        var a = pathNode.getPointAtLength(aLength);
        var aDistance = distanceComponentsSquared(point, a);
        if (aLength <= pathLength && aDistance < bestDistance) {
            best = a;
            bestLength = aLength;
            bestDistance = aDistance;
            continue;
        }
        precision /= 2;
    }
    return { point: best, lengthInPath: bestLength };
}
function distanceComponentsSquared(a, b) {
    var dx = b.x - a[0];
    var dy = b.y - a[1];
    return dx * dx + dy * dy;
}
//# sourceMappingURL=usePotentialWaypointControls.js.map