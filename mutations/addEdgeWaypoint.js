"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEdgeWaypoint = void 0;
var addOrGetDrd_1 = require("./addOrGetDrd");
function addEdgeWaypoint(_a) {
    var _b, _c;
    var definitions = _a.definitions, drdIndex = _a.drdIndex, edgeIndex = _a.edgeIndex, beforeIndex = _a.beforeIndex, waypoint = _a.waypoint;
    var diagramElements = (0, addOrGetDrd_1.addOrGetDrd)({ definitions: definitions, drdIndex: drdIndex }).diagramElements;
    var diagramElement = diagramElements[edgeIndex];
    if (diagramElement.__$$element !== "dmndi:DMNEdge") {
        throw new Error("Can't remove a waypoint from an element that is not a DMNEdge.");
    }
    if (beforeIndex > ((_c = (_b = diagramElement["di:waypoint"]) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0) - 1) {
        throw new Error("Can't add waypoint before index '".concat(beforeIndex, "' to DMNEdge '").concat(diagramElement["@_id"], "' because the waypoint array is smaller than 'beforeIndex' requires."));
    }
    diagramElement["di:waypoint"].splice(beforeIndex, 0, waypoint);
}
exports.addEdgeWaypoint = addEdgeWaypoint;
//# sourceMappingURL=addEdgeWaypoint.js.map