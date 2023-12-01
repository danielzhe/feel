"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositionEdgeWaypoint = void 0;
var addOrGetDrd_1 = require("./addOrGetDrd");
function repositionEdgeWaypoint(_a) {
    var _b, _c;
    var definitions = _a.definitions, drdIndex = _a.drdIndex, edgeIndex = _a.edgeIndex, waypointIndex = _a.waypointIndex, waypoint = _a.waypoint;
    var diagramElements = (0, addOrGetDrd_1.addOrGetDrd)({ definitions: definitions, drdIndex: drdIndex }).diagramElements;
    var diagramElement = diagramElements[edgeIndex];
    if (diagramElement.__$$element !== "dmndi:DMNEdge") {
        throw new Error("Can't remove a waypoint from an element that is not a DMNEdge.");
    }
    if (waypointIndex > ((_c = (_b = diagramElement["di:waypoint"]) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0) - 1) {
        throw new Error("Can't reposition waypoint with index '".concat(waypointIndex, "' from DMNEdge '").concat(diagramElement["@_id"], "' because it doesn't exist."));
    }
    diagramElement["di:waypoint"][waypointIndex] = waypoint;
}
exports.repositionEdgeWaypoint = repositionEdgeWaypoint;
//# sourceMappingURL=repositionEdgeWaypoint.js.map