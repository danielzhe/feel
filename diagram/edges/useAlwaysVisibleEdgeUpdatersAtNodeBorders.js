"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAlwaysVisibleEdgeUpdatersAtNodeBorders = void 0;
var react_1 = require("react");
var DmnMaths_1 = require("../maths/DmnMaths");
var Maths_1 = require("../maths/Maths");
var RADIUS = 5;
var HOVERED_RADIUS = 10;
function useAlwaysVisibleEdgeUpdatersAtNodeBorders(interactionPathRef, sourceNode, targetNode, snappedWaypoints) {
    (0, react_1.useLayoutEffect)(function () {
        var edgeSvgGroup = interactionPathRef.current.parentElement;
        var edgeUpdaterSource = edgeSvgGroup.querySelector(".react-flow__edgeupdater-source");
        var edgeUpdaterTarget = edgeSvgGroup.querySelector(".react-flow__edgeupdater-target");
        function onEnter(e) {
            var _a;
            (_a = e.target) === null || _a === void 0 ? void 0 : _a.setAttribute("r", "".concat(HOVERED_RADIUS));
        }
        function onLeave(e) {
            var _a;
            (_a = e.target) === null || _a === void 0 ? void 0 : _a.setAttribute("r", "".concat(RADIUS));
        }
        edgeUpdaterSource === null || edgeUpdaterSource === void 0 ? void 0 : edgeUpdaterSource.addEventListener("mouseenter", onEnter);
        edgeUpdaterSource === null || edgeUpdaterSource === void 0 ? void 0 : edgeUpdaterSource.addEventListener("mouseleave", onLeave);
        edgeUpdaterTarget === null || edgeUpdaterTarget === void 0 ? void 0 : edgeUpdaterTarget.addEventListener("mouseenter", onEnter);
        edgeUpdaterTarget === null || edgeUpdaterTarget === void 0 ? void 0 : edgeUpdaterTarget.addEventListener("mouseleave", onLeave);
        return function () {
            edgeUpdaterSource === null || edgeUpdaterSource === void 0 ? void 0 : edgeUpdaterSource.removeEventListener("mouseleave", onLeave);
            edgeUpdaterSource === null || edgeUpdaterSource === void 0 ? void 0 : edgeUpdaterSource.removeEventListener("mouseenter", onEnter);
            edgeUpdaterTarget === null || edgeUpdaterTarget === void 0 ? void 0 : edgeUpdaterTarget.removeEventListener("mouseleave", onLeave);
            edgeUpdaterTarget === null || edgeUpdaterTarget === void 0 ? void 0 : edgeUpdaterTarget.removeEventListener("mouseenter", onEnter);
        };
    }, [interactionPathRef, sourceNode, targetNode, snappedWaypoints]);
    (0, react_1.useLayoutEffect)(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var edgeSvgGroup = interactionPathRef.current.parentElement;
        var scaledSourceNode = (0, Maths_1.scaleFromCenter)(HOVERED_RADIUS, {
            position: sourceNode.positionAbsolute,
            dimensions: sourceNode,
        });
        var scaledTargetNode = (0, Maths_1.scaleFromCenter)(HOVERED_RADIUS, {
            position: targetNode.positionAbsolute,
            dimensions: targetNode,
        });
        var firstWaypointOutsideSourceNodeBounds = snappedWaypoints[1];
        var sourcePoint = (0, DmnMaths_1.getLineRectangleIntersectionPoint)(firstWaypointOutsideSourceNodeBounds, snappedWaypoints[0], {
            x: (_a = scaledSourceNode.position.x) !== null && _a !== void 0 ? _a : 0,
            y: (_b = scaledSourceNode.position.y) !== null && _b !== void 0 ? _b : 0,
            width: (_c = scaledSourceNode.dimensions.width) !== null && _c !== void 0 ? _c : 0,
            height: (_d = scaledSourceNode.dimensions.height) !== null && _d !== void 0 ? _d : 0,
        });
        var firstWaypointOutsideTargetNodeBounds = snappedWaypoints[snappedWaypoints.length - 2];
        var targetPoint = (0, DmnMaths_1.getLineRectangleIntersectionPoint)(firstWaypointOutsideTargetNodeBounds, snappedWaypoints[snappedWaypoints.length - 1], {
            x: (_e = scaledTargetNode.position.x) !== null && _e !== void 0 ? _e : 0,
            y: (_f = scaledTargetNode.position.y) !== null && _f !== void 0 ? _f : 0,
            width: (_g = scaledTargetNode.dimensions.width) !== null && _g !== void 0 ? _g : 0,
            height: (_h = scaledTargetNode.dimensions.height) !== null && _h !== void 0 ? _h : 0,
        });
        var edgeUpdaterSource = edgeSvgGroup.querySelector(".react-flow__edgeupdater-source");
        edgeUpdaterSource.setAttribute("cx", "" + sourcePoint["@_x"]);
        edgeUpdaterSource.setAttribute("cy", "" + sourcePoint["@_y"]);
        edgeUpdaterSource.setAttribute("r", "".concat(RADIUS));
        var edgeUpdaterTarget = edgeSvgGroup.querySelector(".react-flow__edgeupdater-target");
        edgeUpdaterTarget.setAttribute("cx", "" + targetPoint["@_x"]);
        edgeUpdaterTarget.setAttribute("cy", "" + targetPoint["@_y"]);
        edgeUpdaterTarget.setAttribute("r", "".concat(RADIUS));
    }, [interactionPathRef, sourceNode, targetNode, snappedWaypoints]);
}
exports.useAlwaysVisibleEdgeUpdatersAtNodeBorders = useAlwaysVisibleEdgeUpdatersAtNodeBorders;
//# sourceMappingURL=useAlwaysVisibleEdgeUpdatersAtNodeBorders.js.map