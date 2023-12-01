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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEdge = void 0;
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var isValidConnection_1 = require("../diagram/connections/isValidConnection");
var EdgeTypes_1 = require("../diagram/edges/EdgeTypes");
var DmnMaths_1 = require("../diagram/maths/DmnMaths");
var addConnectedNode_1 = require("./addConnectedNode");
var addOrGetDrd_1 = require("./addOrGetDrd");
var repopulateInputDataAndDecisionsOnDecisionService_1 = require("./repopulateInputDataAndDecisionsOnDecisionService");
function addEdge(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var definitions = _a.definitions, drdIndex = _a.drdIndex, sourceNode = _a.sourceNode, targetNode = _a.targetNode, edge = _a.edge, keepWaypoints = _a.keepWaypoints;
    if (!(0, isValidConnection_1._checkIsValidConnection)(sourceNode, targetNode, edge.type)) {
        throw new Error("DMN MUTATION: Invalid structure: (".concat(sourceNode.type, ") --").concat(edge.type, "--> (").concat(targetNode.type, ") "));
    }
    var newEdgeId = (0, api_1.generateUuid)();
    var existingEdgeId = undefined;
    if (edge.type === EdgeTypes_1.EDGE_TYPES.association) {
        (_b = definitions.artifact) !== null && _b !== void 0 ? _b : (definitions.artifact = []);
        var newAssociation_1 = {
            "@_id": newEdgeId,
            "@_associationDirection": "Both",
            sourceRef: { "@_href": "".concat(sourceNode.href) },
            targetRef: { "@_href": "".concat(targetNode.href) },
        };
        var removed = removeFirstMatchIfPresent(definitions.artifact, function (a) { return a.__$$element === "association" && areAssociationsEquivalent(a, newAssociation_1); });
        existingEdgeId = removed === null || removed === void 0 ? void 0 : removed["@_id"];
        (_c = definitions.artifact) === null || _c === void 0 ? void 0 : _c.push(__assign(__assign({ __$$element: "association" }, newAssociation_1), { "@_id": tryKeepingEdgeId(existingEdgeId, newEdgeId) }));
    }
    else {
        var requirements = (0, addConnectedNode_1.getRequirementsFromEdge)(sourceNode, newEdgeId, edge.type);
        var drgElement = definitions.drgElement[targetNode.index];
        if (requirements === null || requirements === void 0 ? void 0 : requirements.informationRequirement) {
            (_d = drgElement.informationRequirement) !== null && _d !== void 0 ? _d : (drgElement.informationRequirement = []);
            var removed = removeFirstMatchIfPresent(drgElement.informationRequirement, function (ir) {
                return doesInformationRequirementsPointTo(ir, sourceNode.href);
            });
            existingEdgeId = removed === null || removed === void 0 ? void 0 : removed["@_id"];
            (_e = drgElement.informationRequirement) === null || _e === void 0 ? void 0 : _e.push.apply(_e, __spreadArray([], __read(requirements.informationRequirement.map(function (s) { return (__assign(__assign({}, s), { "@_id": tryKeepingEdgeId(existingEdgeId, newEdgeId) })); })), false));
        }
        else if (requirements === null || requirements === void 0 ? void 0 : requirements.knowledgeRequirement) {
            (_f = drgElement.knowledgeRequirement) !== null && _f !== void 0 ? _f : (drgElement.knowledgeRequirement = []);
            var removed = removeFirstMatchIfPresent(drgElement.knowledgeRequirement, function (kr) {
                return doesKnowledgeRequirementsPointTo(kr, sourceNode.href);
            });
            existingEdgeId = removed === null || removed === void 0 ? void 0 : removed["@_id"];
            (_g = drgElement.knowledgeRequirement) === null || _g === void 0 ? void 0 : _g.push.apply(_g, __spreadArray([], __read(requirements.knowledgeRequirement.map(function (s) { return (__assign(__assign({}, s), { "@_id": tryKeepingEdgeId(existingEdgeId, newEdgeId) })); })), false));
        }
        else if (requirements === null || requirements === void 0 ? void 0 : requirements.authorityRequirement) {
            (_h = drgElement.authorityRequirement) !== null && _h !== void 0 ? _h : (drgElement.authorityRequirement = []);
            var removed = removeFirstMatchIfPresent(drgElement.authorityRequirement, function (ar) {
                return doesAuthorityRequirementsPointTo(ar, sourceNode.href);
            });
            existingEdgeId = removed === null || removed === void 0 ? void 0 : removed["@_id"];
            (_j = drgElement.authorityRequirement) === null || _j === void 0 ? void 0 : _j.push.apply(_j, __spreadArray([], __read(requirements.authorityRequirement.map(function (s) { return (__assign(__assign({}, s), { "@_id": tryKeepingEdgeId(existingEdgeId, newEdgeId) })); })), false));
        }
    }
    var diagramElements = (0, addOrGetDrd_1.addOrGetDrd)({ definitions: definitions, drdIndex: drdIndex }).diagramElements;
    var removedDmnEdge = removeFirstMatchIfPresent(diagramElements, function (e) { return e.__$$element === "dmndi:DMNEdge" && e["@_dmnElementRef"] === existingEdgeId; });
    var newWaypoints = keepWaypoints
        ? __spreadArray(__spreadArray([
            (0, DmnMaths_1.getPointForHandle)({ bounds: sourceNode.bounds, handle: edge.sourceHandle })
        ], __read(((_k = removedDmnEdge === null || removedDmnEdge === void 0 ? void 0 : removedDmnEdge["di:waypoint"]) !== null && _k !== void 0 ? _k : []).slice(1, -1)), false), [
            (0, DmnMaths_1.getPointForHandle)({ bounds: targetNode.bounds, handle: edge.targetHandle }),
        ], false) : [
        (0, DmnMaths_1.getPointForHandle)({ bounds: sourceNode.bounds, handle: edge.sourceHandle }),
        (0, DmnMaths_1.getPointForHandle)({ bounds: targetNode.bounds, handle: edge.targetHandle }),
    ];
    var newDmnEdge = {
        __$$element: "dmndi:DMNEdge",
        "@_id": withoutDiscreteAutoPosinitioningMarker((_l = removedDmnEdge === null || removedDmnEdge === void 0 ? void 0 : removedDmnEdge["@_id"]) !== null && _l !== void 0 ? _l : (0, api_1.generateUuid)()),
        "@_dmnElementRef": existingEdgeId !== null && existingEdgeId !== void 0 ? existingEdgeId : newEdgeId,
        "@_sourceElement": sourceNode.shapeId,
        "@_targetElement": targetNode.shapeId,
        "di:waypoint": newWaypoints,
    };
    diagramElements.push(newDmnEdge);
    (0, repopulateInputDataAndDecisionsOnDecisionService_1.repopulateInputDataAndDecisionsOnAllDecisionServices)({ definitions: definitions });
    return { newDmnEdge: newDmnEdge };
}
exports.addEdge = addEdge;
function doesInformationRequirementsPointTo(a, nodeId) {
    var _a, _b;
    return (((_a = a.requiredInput) === null || _a === void 0 ? void 0 : _a["@_href"]) === "".concat(nodeId) ||
        ((_b = a.requiredDecision) === null || _b === void 0 ? void 0 : _b["@_href"]) === "".concat(nodeId));
}
function doesKnowledgeRequirementsPointTo(a, nodeId) {
    var _a;
    return ((_a = a.requiredKnowledge) === null || _a === void 0 ? void 0 : _a["@_href"]) === "".concat(nodeId);
}
function doesAuthorityRequirementsPointTo(a, nodeId) {
    var _a, _b, _c;
    return (((_a = a.requiredInput) === null || _a === void 0 ? void 0 : _a["@_href"]) === "".concat(nodeId) ||
        ((_b = a.requiredDecision) === null || _b === void 0 ? void 0 : _b["@_href"]) === "".concat(nodeId) ||
        ((_c = a.requiredAuthority) === null || _c === void 0 ? void 0 : _c["@_href"]) === "".concat(nodeId));
}
function areAssociationsEquivalent(a, b) {
    return ((a.sourceRef["@_href"] === b.sourceRef["@_href"] && a.targetRef["@_href"] === b.targetRef["@_href"]) ||
        (a.sourceRef["@_href"] === b.targetRef["@_href"] && a.targetRef["@_href"] === b.sourceRef["@_href"]));
}
function removeFirstMatchIfPresent(arr, predicate) {
    var _a;
    var index = arr.findIndex(predicate);
    var removed = (_a = arr[index]) !== null && _a !== void 0 ? _a : undefined;
    arr.splice(index, index >= 0 ? 1 : 0);
    return removed;
}
function tryKeepingEdgeId(existingEdgeId, newEdgeId) {
    return existingEdgeId !== null && existingEdgeId !== void 0 ? existingEdgeId : newEdgeId;
}
function withoutDiscreteAutoPosinitioningMarker(edgeId) {
    var marker = (0, DmnMaths_1.getDiscreteAutoPositioningEdgeIdMarker)(edgeId);
    return marker ? edgeId.replace("".concat(marker), "") : edgeId;
}
//# sourceMappingURL=addEdge.js.map