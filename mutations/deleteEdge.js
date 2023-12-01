"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEdge = void 0;
var switch_expression_ts_1 = require("@kie-tools-core/switch-expression-ts");
var addOrGetDrd_1 = require("./addOrGetDrd");
var repopulateInputDataAndDecisionsOnDecisionService_1 = require("./repopulateInputDataAndDecisionsOnDecisionService");
function deleteEdge(_a) {
    var _b, _c;
    var definitions = _a.definitions, drdIndex = _a.drdIndex, edge = _a.edge;
    var diagramElements = (0, addOrGetDrd_1.addOrGetDrd)({ definitions: definitions, drdIndex: drdIndex }).diagramElements;
    var dmnObjects = (_b = (0, switch_expression_ts_1.switchExpression)(edge === null || edge === void 0 ? void 0 : edge.dmnObject.type, {
        association: definitions.artifact,
        default: definitions.drgElement,
    })) !== null && _b !== void 0 ? _b : [];
    var dmnObjectIndex = dmnObjects.findIndex(function (d) { return d["@_id"] === edge.dmnObject.id; });
    if (dmnObjectIndex < 0) {
        throw new Error("Can't find DMN element with ID ".concat(edge.dmnObject.id));
    }
    var requirements = (_c = (0, switch_expression_ts_1.switchExpression)(edge === null || edge === void 0 ? void 0 : edge.dmnObject.requirementType, {
        informationRequirement: dmnObjects[dmnObjectIndex].informationRequirement,
        knowledgeRequirement: dmnObjects[dmnObjectIndex].knowledgeRequirement,
        authorityRequirement: dmnObjects[dmnObjectIndex].authorityRequirement,
        association: dmnObjects,
    })) !== null && _c !== void 0 ? _c : [];
    var requirementIndex = (requirements !== null && requirements !== void 0 ? requirements : []).findIndex(function (d) { return d["@_id"] === edge.id; });
    if (requirementIndex >= 0) {
        requirements === null || requirements === void 0 ? void 0 : requirements.splice(requirementIndex, 1);
    }
    var dmnEdge;
    var dmnEdgeIndex = (diagramElements !== null && diagramElements !== void 0 ? diagramElements : []).findIndex(function (d) { return d["@_dmnElementRef"] === edge.id; });
    if (dmnEdgeIndex >= 0) {
        dmnEdge = diagramElements[dmnEdgeIndex];
        diagramElements === null || diagramElements === void 0 ? void 0 : diagramElements.splice(dmnEdgeIndex, 1);
    }
    (0, repopulateInputDataAndDecisionsOnDecisionService_1.repopulateInputDataAndDecisionsOnAllDecisionServices)({ definitions: definitions });
    return { dmnEdge: dmnEdge };
}
exports.deleteEdge = deleteEdge;
//# sourceMappingURL=deleteEdge.js.map