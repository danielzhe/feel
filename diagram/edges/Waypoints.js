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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Waypoint = exports.Waypoints = exports.PotentialWaypoint = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var deleteEdgeWaypoint_1 = require("../../mutations/deleteEdgeWaypoint");
var Store_1 = require("../../store/Store");
var d3_drag_1 = require("d3-drag");
var d3_selection_1 = require("d3-selection");
var react_1 = require("react");
var repositionEdgeWaypoint_1 = require("../../mutations/repositionEdgeWaypoint");
var SnapGrid_1 = require("../SnapGrid");
function PotentialWaypoint(props) {
    return (0, jsx_runtime_1.jsx)("circle", { className: "kie-dmn-editor--edge-waypoint-potential", r: 5, cx: props.point.x, cy: props.point.y });
}
exports.PotentialWaypoint = PotentialWaypoint;
function Waypoints(props) {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: props.waypoints.slice(1, -1).map(function (p, i) { return ((0, jsx_runtime_1.jsx)(Waypoint, { onDragStop: props.onDragStop, edgeIndex: props.edgeIndex, edgeId: props.edgeId, point: p, index: i + 1 }, i)); }) }));
}
exports.Waypoints = Waypoints;
function Waypoint(_a) {
    var edgeId = _a.edgeId, edgeIndex = _a.edgeIndex, index = _a.index, point = _a.point, onDragStop = _a.onDragStop;
    var circleRef = React.useRef(null);
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var dispatch = (0, Store_1.useDmnEditorStore)(function (s) { return s.dispatch; });
    var setState = (0, Store_1.useDmnEditorStoreApi)().setState;
    (0, react_1.useEffect)(function () {
        if (!circleRef.current) {
            return;
        }
        var selection = (0, d3_selection_1.select)(circleRef.current);
        var dragHandler = (0, d3_drag_1.drag)()
            .on("start", function () {
            setState(function (state) { return dispatch.diagram.setEdgeStatus(state, edgeId, { draggingWaypoint: true }); });
        })
            .on("drag", function (e) {
            setState(function (state) {
                (0, repositionEdgeWaypoint_1.repositionEdgeWaypoint)({
                    definitions: state.dmn.model.definitions,
                    drdIndex: diagram.drdIndex,
                    edgeIndex: edgeIndex,
                    waypointIndex: index,
                    waypoint: (0, SnapGrid_1.snapPoint)(diagram.snapGrid, { "@_x": e.x, "@_y": e.y }),
                });
            });
        })
            .on("end", function (e) {
            onDragStop(e.sourceEvent);
            setState(function (state) { return dispatch.diagram.setEdgeStatus(state, edgeId, { draggingWaypoint: false }); });
        });
        selection.call(dragHandler);
        return function () {
            selection.on(".drag", null);
        };
    }, [diagram.drdIndex, diagram.snapGrid, dispatch.diagram, edgeId, edgeIndex, index, onDragStop, setState]);
    return ((0, jsx_runtime_1.jsx)("circle", { ref: circleRef, className: "kie-dmn-editor--diagram-edge-waypoint", cx: point["@_x"], cy: point["@_y"], r: 1, onDoubleClick: function (e) {
            e.preventDefault();
            e.stopPropagation();
            setState(function (state) {
                (0, deleteEdgeWaypoint_1.deleteEdgeWaypoint)({
                    definitions: state.dmn.model.definitions,
                    drdIndex: diagram.drdIndex,
                    edgeIndex: edgeIndex,
                    waypointIndex: index,
                });
            });
        } }));
}
exports.Waypoint = Waypoint;
//# sourceMappingURL=Waypoints.js.map