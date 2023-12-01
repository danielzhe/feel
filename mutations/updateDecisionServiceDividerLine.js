"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCentralizedDecisionServiceDividerLine = exports.updateDecisionServiceDividerLine = exports.DECISION_SERVICE_DIVIDER_LINE_PADDING = void 0;
var addOrGetDrd_1 = require("./addOrGetDrd");
var SnapGrid_1 = require("../diagram/SnapGrid");
var DefaultSizes_1 = require("../diagram/nodes/DefaultSizes");
var NodeTypes_1 = require("../diagram/nodes/NodeTypes");
exports.DECISION_SERVICE_DIVIDER_LINE_PADDING = 100;
function updateDecisionServiceDividerLine(_a) {
    var _b, _c, _d;
    var definitions = _a.definitions, drdIndex = _a.drdIndex, dmnShapesByHref = _a.dmnShapesByHref, shapeIndex = _a.shapeIndex, localYPosition = _a.localYPosition, drgElementIndex = _a.drgElementIndex, snapGrid = _a.snapGrid;
    var diagramElements = (0, addOrGetDrd_1.addOrGetDrd)({ definitions: definitions, drdIndex: drdIndex }).diagramElements;
    var shape = diagramElements === null || diagramElements === void 0 ? void 0 : diagramElements[shapeIndex];
    var shapeBounds = shape === null || shape === void 0 ? void 0 : shape["dc:Bounds"];
    if (!shapeBounds) {
        throw new Error("Cannot reposition divider line of non-existent shape bounds");
    }
    var ds = definitions.drgElement[drgElementIndex];
    if (!ds) {
        throw new Error("Cannot reposition divider line of non-existent Decision Service");
    }
    var decisionMinSizes = DefaultSizes_1.MIN_NODE_SIZES[NodeTypes_1.NODE_TYPES.decision](snapGrid);
    var decisionServiceMinSizes = DefaultSizes_1.MIN_NODE_SIZES[NodeTypes_1.NODE_TYPES.decisionService](snapGrid);
    var snappedPosition = (0, SnapGrid_1.snapShapePosition)(snapGrid, shape);
    var snappedDimensions = (0, SnapGrid_1.snapShapeDimensions)(snapGrid, shape, decisionServiceMinSizes);
    var upperLimit = ((_b = ds.outputDecision) !== null && _b !== void 0 ? _b : []).reduce(function (acc, od) {
        var v = (0, SnapGrid_1.snapShapePosition)(snapGrid, dmnShapesByHref.get(od["@_href"])).y +
            (0, SnapGrid_1.snapShapeDimensions)(snapGrid, dmnShapesByHref.get(od["@_href"]), decisionMinSizes).height;
        return v > acc ? v : acc;
    }, snappedPosition.y + exports.DECISION_SERVICE_DIVIDER_LINE_PADDING);
    var lowerLimit = ((_c = ds.encapsulatedDecision) !== null && _c !== void 0 ? _c : []).reduce(function (acc, ed) {
        var v = (0, SnapGrid_1.snapShapePosition)(snapGrid, dmnShapesByHref.get(ed["@_href"])).y;
        return v < acc ? v : acc;
    }, snappedPosition.y + snappedDimensions.height - exports.DECISION_SERVICE_DIVIDER_LINE_PADDING);
    var newDividerLineYPosition = Math.max(upperLimit, Math.min(snappedPosition.y + localYPosition, lowerLimit));
    (_d = shape["dmndi:DMNDecisionServiceDividerLine"]) !== null && _d !== void 0 ? _d : (shape["dmndi:DMNDecisionServiceDividerLine"] = getCentralizedDecisionServiceDividerLine(shapeBounds));
    shape["dmndi:DMNDecisionServiceDividerLine"]["di:waypoint"][0]["@_y"] = newDividerLineYPosition;
    shape["dmndi:DMNDecisionServiceDividerLine"]["di:waypoint"][1]["@_y"] = newDividerLineYPosition;
}
exports.updateDecisionServiceDividerLine = updateDecisionServiceDividerLine;
function getCentralizedDecisionServiceDividerLine(bounds) {
    return {
        "di:waypoint": [
            { "@_x": bounds["@_x"], "@_y": bounds["@_y"] + bounds["@_height"] / 2 },
            {
                "@_x": bounds["@_x"] + bounds["@_height"],
                "@_y": bounds["@_y"] + bounds["@_height"] / 2,
            },
        ],
    };
}
exports.getCentralizedDecisionServiceDividerLine = getCentralizedDecisionServiceDividerLine;
//# sourceMappingURL=updateDecisionServiceDividerLine.js.map