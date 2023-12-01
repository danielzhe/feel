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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociationEdge = exports.AuthorityRequirementEdge = exports.KnowledgeRequirementEdge = exports.InformationRequirementEdge = exports.useEdgeClassName = exports.AssociationPath = exports.AuthorityRequirementPath = exports.KnowledgeRequirementPath = exports.InformationRequirementPath = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var RF = __importStar(require("reactflow"));
var Waypoints_1 = require("./Waypoints");
var useKieEdgePath_1 = require("./useKieEdgePath");
var useIsHovered_1 = require("../useIsHovered");
var usePotentialWaypointControls_1 = require("./usePotentialWaypointControls");
var useAlwaysVisibleEdgeUpdatersAtNodeBorders_1 = require("./useAlwaysVisibleEdgeUpdatersAtNodeBorders");
var DmnMaths_1 = require("../maths/DmnMaths");
exports.InformationRequirementPath = React.memo(function (_props) {
    var svgRef = _props.svgRef, props = __rest(_props, ["svgRef"]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("path", __assign({ ref: svgRef, style: { strokeWidth: 1, stroke: "black" }, markerEnd: "url(#closed-arrow)" }, props)) }));
});
exports.KnowledgeRequirementPath = React.memo(function (__props) {
    var svgRef = __props.svgRef, props = __rest(__props, ["svgRef"]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("path", __assign({ ref: svgRef, style: { strokeWidth: 1, stroke: "black", strokeDasharray: "5,5" }, markerEnd: "url(#open-arrow)" }, props)) }));
});
exports.AuthorityRequirementPath = React.memo(function (__props) {
    var center = __props.centerToConnectionPoint, svgRef = __props.svgRef, props = __rest(__props, ["centerToConnectionPoint", "svgRef"]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("path", __assign({ ref: svgRef, style: { strokeWidth: 1, stroke: "black", strokeDasharray: "5,5" }, markerEnd: center ? "url(#closed-circle-at-center)" : "url(#closed-circle-at-border)" }, props)) }));
});
exports.AssociationPath = React.memo(function (__props) {
    var _a;
    var strokeWidth = (_a = __props.strokeWidth) !== null && _a !== void 0 ? _a : 1.5;
    var svgRef = __props.svgRef, props = __rest(__props, ["svgRef"]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("path", __assign({ ref: svgRef, strokeWidth: strokeWidth, strokeLinecap: "butt", strokeLinejoin: "round", style: { stroke: "black", strokeDasharray: "".concat(strokeWidth, ",10") } }, props)) }));
});
function useEdgeClassName(isConnecting, isDraggingWaypoint) {
    if (isConnecting) {
        return "dimmed";
    }
    if (isDraggingWaypoint) {
        return "dragging-waypoint";
    }
    return "normal";
}
exports.useEdgeClassName = useEdgeClassName;
var interactionStrokeProps = {
    strokeOpacity: 1,
    markerEnd: undefined,
    style: undefined,
    className: "react-flow__edge-interaction",
    stroke: "transparent",
    strokeLinecap: "round",
};
exports.InformationRequirementEdge = React.memo(function (props) {
    var _a, _b, _c, _d;
    var _e = (0, useKieEdgePath_1.useKieEdgePath)(props.source, props.target, props.data), path = _e.path, waypoints = _e.points;
    var interactionPathRef = React.useRef(null);
    var isHovered = (0, useIsHovered_1.useIsHovered)(interactionPathRef);
    var _f = (0, usePotentialWaypointControls_1.usePotentialWaypointControls)(waypoints, props.selected, props.id, (_b = (_a = props.data) === null || _a === void 0 ? void 0 : _a.dmnEdge) === null || _b === void 0 ? void 0 : _b.index, interactionPathRef), onMouseMove = _f.onMouseMove, onDoubleClick = _f.onDoubleClick, potentialWaypoint = _f.potentialWaypoint, isDraggingWaypoint = _f.isDraggingWaypoint;
    var isConnecting = !!RF.useStore(function (s) { return s.connectionNodeId; });
    var className = useEdgeClassName(isConnecting, isDraggingWaypoint);
    var sourceNode = RF.useStore(function (s) { return s.nodeInternals.get(props.source); });
    var targetNode = RF.useStore(function (s) { return s.nodeInternals.get(props.target); });
    (0, useAlwaysVisibleEdgeUpdatersAtNodeBorders_1.useAlwaysVisibleEdgeUpdatersAtNodeBorders)(interactionPathRef, sourceNode, targetNode, waypoints);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(exports.InformationRequirementPath, __assign({ svgRef: interactionPathRef, d: path }, interactionStrokeProps, { className: "".concat(interactionStrokeProps.className, " ").concat(className), strokeWidth: (_c = props.interactionWidth) !== null && _c !== void 0 ? _c : DmnMaths_1.DEFAULT_INTRACTION_WIDTH, onMouseMove: onMouseMove, onDoubleClick: onDoubleClick })), (0, jsx_runtime_1.jsx)(exports.InformationRequirementPath, { d: path, className: "kie-dmn-editor--edge ".concat(className) }), props.selected && !isConnecting && ((_d = props.data) === null || _d === void 0 ? void 0 : _d.dmnEdge) && ((0, jsx_runtime_1.jsx)(Waypoints_1.Waypoints, { edgeId: props.id, edgeIndex: props.data.dmnEdge.index, waypoints: waypoints, onDragStop: onMouseMove })), isHovered && potentialWaypoint && (0, jsx_runtime_1.jsx)(Waypoints_1.PotentialWaypoint, { point: potentialWaypoint.point })] }));
});
exports.KnowledgeRequirementEdge = React.memo(function (props) {
    var _a, _b, _c, _d;
    var _e = (0, useKieEdgePath_1.useKieEdgePath)(props.source, props.target, props.data), path = _e.path, waypoints = _e.points;
    var interactionPathRef = React.useRef(null);
    var isHovered = (0, useIsHovered_1.useIsHovered)(interactionPathRef);
    var _f = (0, usePotentialWaypointControls_1.usePotentialWaypointControls)(waypoints, props.selected, props.id, (_b = (_a = props.data) === null || _a === void 0 ? void 0 : _a.dmnEdge) === null || _b === void 0 ? void 0 : _b.index, interactionPathRef), onMouseMove = _f.onMouseMove, onDoubleClick = _f.onDoubleClick, potentialWaypoint = _f.potentialWaypoint, isDraggingWaypoint = _f.isDraggingWaypoint;
    var isConnecting = !!RF.useStore(function (s) { return s.connectionNodeId; });
    var className = useEdgeClassName(isConnecting, isDraggingWaypoint);
    var sourceNode = RF.useStore(function (s) { return s.nodeInternals.get(props.source); });
    var targetNode = RF.useStore(function (s) { return s.nodeInternals.get(props.target); });
    (0, useAlwaysVisibleEdgeUpdatersAtNodeBorders_1.useAlwaysVisibleEdgeUpdatersAtNodeBorders)(interactionPathRef, sourceNode, targetNode, waypoints);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(exports.KnowledgeRequirementPath, __assign({ svgRef: interactionPathRef, d: path }, interactionStrokeProps, { className: "".concat(interactionStrokeProps.className, " ").concat(className), strokeWidth: (_c = props.interactionWidth) !== null && _c !== void 0 ? _c : DmnMaths_1.DEFAULT_INTRACTION_WIDTH, onMouseMove: onMouseMove, onDoubleClick: onDoubleClick })), (0, jsx_runtime_1.jsx)(exports.KnowledgeRequirementPath, { d: path, className: "kie-dmn-editor--edge ".concat(className) }), props.selected && !isConnecting && ((_d = props.data) === null || _d === void 0 ? void 0 : _d.dmnEdge) && ((0, jsx_runtime_1.jsx)(Waypoints_1.Waypoints, { edgeId: props.id, edgeIndex: props.data.dmnEdge.index, waypoints: waypoints, onDragStop: onMouseMove })), isHovered && potentialWaypoint && (0, jsx_runtime_1.jsx)(Waypoints_1.PotentialWaypoint, { point: potentialWaypoint.point })] }));
});
exports.AuthorityRequirementEdge = React.memo(function (props) {
    var _a, _b, _c, _d;
    var _e = (0, useKieEdgePath_1.useKieEdgePath)(props.source, props.target, props.data), path = _e.path, waypoints = _e.points;
    var interactionPathRef = React.useRef(null);
    var isHovered = (0, useIsHovered_1.useIsHovered)(interactionPathRef);
    var _f = (0, usePotentialWaypointControls_1.usePotentialWaypointControls)(waypoints, props.selected, props.id, (_b = (_a = props.data) === null || _a === void 0 ? void 0 : _a.dmnEdge) === null || _b === void 0 ? void 0 : _b.index, interactionPathRef), onMouseMove = _f.onMouseMove, onDoubleClick = _f.onDoubleClick, potentialWaypoint = _f.potentialWaypoint, isDraggingWaypoint = _f.isDraggingWaypoint;
    var isConnecting = !!RF.useStore(function (s) { return s.connectionNodeId; });
    var className = useEdgeClassName(isConnecting, isDraggingWaypoint);
    var sourceNode = RF.useStore(function (s) { return s.nodeInternals.get(props.source); });
    var targetNode = RF.useStore(function (s) { return s.nodeInternals.get(props.target); });
    (0, useAlwaysVisibleEdgeUpdatersAtNodeBorders_1.useAlwaysVisibleEdgeUpdatersAtNodeBorders)(interactionPathRef, sourceNode, targetNode, waypoints);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(exports.AuthorityRequirementPath, __assign({ svgRef: interactionPathRef, d: path, centerToConnectionPoint: false }, interactionStrokeProps, { className: "".concat(interactionStrokeProps.className, " ").concat(className), strokeWidth: (_c = props.interactionWidth) !== null && _c !== void 0 ? _c : DmnMaths_1.DEFAULT_INTRACTION_WIDTH, onMouseMove: onMouseMove, onDoubleClick: onDoubleClick })), (0, jsx_runtime_1.jsx)(exports.AuthorityRequirementPath, { d: path, className: "kie-dmn-editor--edge ".concat(className), centerToConnectionPoint: false }), props.selected && !isConnecting && ((_d = props.data) === null || _d === void 0 ? void 0 : _d.dmnEdge) && ((0, jsx_runtime_1.jsx)(Waypoints_1.Waypoints, { edgeId: props.id, edgeIndex: props.data.dmnEdge.index, waypoints: waypoints, onDragStop: onMouseMove })), isHovered && potentialWaypoint && (0, jsx_runtime_1.jsx)(Waypoints_1.PotentialWaypoint, { point: potentialWaypoint.point })] }));
});
exports.AssociationEdge = React.memo(function (props) {
    var _a, _b, _c, _d;
    var _e = (0, useKieEdgePath_1.useKieEdgePath)(props.source, props.target, props.data), path = _e.path, waypoints = _e.points;
    var interactionPathRef = React.useRef(null);
    var isHovered = (0, useIsHovered_1.useIsHovered)(interactionPathRef);
    var _f = (0, usePotentialWaypointControls_1.usePotentialWaypointControls)(waypoints, props.selected, props.id, (_b = (_a = props.data) === null || _a === void 0 ? void 0 : _a.dmnEdge) === null || _b === void 0 ? void 0 : _b.index, interactionPathRef), onMouseMove = _f.onMouseMove, onDoubleClick = _f.onDoubleClick, potentialWaypoint = _f.potentialWaypoint, isDraggingWaypoint = _f.isDraggingWaypoint;
    var isConnecting = !!RF.useStore(function (s) { return s.connectionNodeId; });
    var className = useEdgeClassName(isConnecting, isDraggingWaypoint);
    var sourceNode = RF.useStore(function (s) { return s.nodeInternals.get(props.source); });
    var targetNode = RF.useStore(function (s) { return s.nodeInternals.get(props.target); });
    (0, useAlwaysVisibleEdgeUpdatersAtNodeBorders_1.useAlwaysVisibleEdgeUpdatersAtNodeBorders)(interactionPathRef, sourceNode, targetNode, waypoints);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(exports.AssociationPath, __assign({ svgRef: interactionPathRef, d: path }, interactionStrokeProps, { className: "".concat(interactionStrokeProps.className, " ").concat(className), strokeWidth: (_c = props.interactionWidth) !== null && _c !== void 0 ? _c : DmnMaths_1.DEFAULT_INTRACTION_WIDTH, onMouseMove: onMouseMove, onDoubleClick: onDoubleClick })), (0, jsx_runtime_1.jsx)(exports.AssociationPath, { d: path, className: "kie-dmn-editor--edge ".concat(className) }), props.selected && !isConnecting && ((_d = props.data) === null || _d === void 0 ? void 0 : _d.dmnEdge) && ((0, jsx_runtime_1.jsx)(Waypoints_1.Waypoints, { edgeId: props.id, edgeIndex: props.data.dmnEdge.index, waypoints: waypoints, onDragStop: onMouseMove })), isHovered && potentialWaypoint && (0, jsx_runtime_1.jsx)(Waypoints_1.PotentialWaypoint, { point: potentialWaypoint.point })] }));
});
//# sourceMappingURL=Edges.js.map