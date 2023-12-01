"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSectionForDecisionInsideDecisionService = exports.addDecisionToDecisionService = void 0;
var DmnMaths_1 = require("../diagram/maths/DmnMaths");
var addOrGetDrd_1 = require("./addOrGetDrd");
var repopulateInputDataAndDecisionsOnDecisionService_1 = require("./repopulateInputDataAndDecisionsOnDecisionService");
var DefaultSizes_1 = require("../diagram/nodes/DefaultSizes");
var NodeTypes_1 = require("../diagram/nodes/NodeTypes");
function addDecisionToDecisionService(_a) {
    var _b, _c, _d, _e;
    var definitions = _a.definitions, decisionId = _a.decisionId, decisionServiceId = _a.decisionServiceId, drdIndex = _a.drdIndex, snapGrid = _a.snapGrid;
    console.debug("DMN MUTATION: Adding Decision '".concat(decisionId, "' to Decision Service '").concat(decisionServiceId, "'"));
    var decision = (_b = definitions.drgElement) === null || _b === void 0 ? void 0 : _b.find(function (s) { return s["@_id"] === decisionId; });
    if ((decision === null || decision === void 0 ? void 0 : decision.__$$element) !== "decision") {
        throw new Error("DRG Element with id '".concat(decisionId, "' is either not a Decision or doesn't exist."));
    }
    var decisionService = (_c = definitions.drgElement) === null || _c === void 0 ? void 0 : _c.find(function (s) { return s["@_id"] === decisionServiceId; });
    if ((decisionService === null || decisionService === void 0 ? void 0 : decisionService.__$$element) !== "decisionService") {
        throw new Error("DRG Element with id '".concat(decisionServiceId, "' is either not a Decision Service or doesn't exist."));
    }
    var diagram = (0, addOrGetDrd_1.addOrGetDrd)({ definitions: definitions, drdIndex: drdIndex });
    var decisionShape = diagram.diagramElements.find(function (s) { return s["@_dmnElementRef"] === decisionId && s.__$$element === "dmndi:DMNShape"; });
    var decisionServiceShape = diagram.diagramElements.find(function (s) { return s["@_dmnElementRef"] === decisionServiceId && s.__$$element === "dmndi:DMNShape"; });
    var section = getSectionForDecisionInsideDecisionService({ decisionShape: decisionShape, decisionServiceShape: decisionServiceShape, snapGrid: snapGrid });
    if (section === "encapsulated") {
        (_d = decisionService.encapsulatedDecision) !== null && _d !== void 0 ? _d : (decisionService.encapsulatedDecision = []);
        decisionService.encapsulatedDecision.push({ "@_href": "#".concat(decisionId) });
    }
    else if (section === "output") {
        (_e = decisionService.outputDecision) !== null && _e !== void 0 ? _e : (decisionService.outputDecision = []);
        decisionService.outputDecision.push({ "@_href": "#".concat(decisionId) });
    }
    else {
        throw new Error("Invalid section to add decision to: '".concat(section, "' "));
    }
    (0, repopulateInputDataAndDecisionsOnDecisionService_1.repopulateInputDataAndDecisionsOnDecisionService)({ definitions: definitions, decisionService: decisionService });
}
exports.addDecisionToDecisionService = addDecisionToDecisionService;
function getSectionForDecisionInsideDecisionService(_a) {
    var decisionShape = _a.decisionShape, decisionServiceShape = _a.decisionServiceShape, snapGrid = _a.snapGrid;
    if (!(decisionShape === null || decisionShape === void 0 ? void 0 : decisionShape["dc:Bounds"]) || !(decisionServiceShape === null || decisionServiceShape === void 0 ? void 0 : decisionServiceShape["dc:Bounds"])) {
        throw new Error("Can't determine Decision Service section for Decision '".concat(decisionShape["@_dmnElementRef"], "' because it doens't have a DMNShape."));
    }
    var contaimentRelationship = (0, DmnMaths_1.getContainmentRelationship)({
        bounds: decisionShape["dc:Bounds"],
        container: decisionServiceShape["dc:Bounds"],
        divingLineLocalY: (0, DmnMaths_1.getDecisionServiceDividerLineLocalY)(decisionServiceShape),
        snapGrid: snapGrid,
        containerMinSizes: DefaultSizes_1.MIN_NODE_SIZES[NodeTypes_1.NODE_TYPES.decisionService],
        boundsMinSizes: DefaultSizes_1.MIN_NODE_SIZES[NodeTypes_1.NODE_TYPES.decision],
    });
    if (!contaimentRelationship.isInside) {
        throw new Error("Decision '".concat(decisionShape["@_dmnElementRef"], "' can't be added to Decision Service '").concat(decisionServiceShape["@_dmnElementRef"], "' because its shape is not visually contained by the Decision Service's shape."));
    }
    return contaimentRelationship.section === "upper" ? "output" : "encapsulated";
}
exports.getSectionForDecisionInsideDecisionService = getSectionForDecisionInsideDecisionService;
//# sourceMappingURL=addDecisionToDecisionService.js.map