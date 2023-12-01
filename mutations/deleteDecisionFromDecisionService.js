"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDecisionFromDecisionService = void 0;
var repopulateInputDataAndDecisionsOnDecisionService_1 = require("./repopulateInputDataAndDecisionsOnDecisionService");
function deleteDecisionFromDecisionService(_a) {
    var _b, _c, _d, _e;
    var definitions = _a.definitions, decisionId = _a.decisionId, decisionServiceId = _a.decisionServiceId;
    console.debug("DMN MUTATION: Deleting Decision '".concat(decisionId, "' from Decision Service '").concat(decisionServiceId, "'"));
    var decision = (_b = definitions.drgElement) === null || _b === void 0 ? void 0 : _b.find(function (s) { return s["@_id"] === decisionId; });
    if ((decision === null || decision === void 0 ? void 0 : decision.__$$element) !== "decision") {
        throw new Error("DRG Element with id '".concat(decisionId, "' is either not a Decision or doesn't exist."));
    }
    var decisionService = (_c = definitions.drgElement) === null || _c === void 0 ? void 0 : _c.find(function (s) { return s["@_id"] === decisionServiceId; });
    if ((decisionService === null || decisionService === void 0 ? void 0 : decisionService.__$$element) !== "decisionService") {
        throw new Error("DRG Element with id '".concat(decisionServiceId, "' is either not a Decision Service or doesn't exist."));
    }
    decisionService.outputDecision = ((_d = decisionService.outputDecision) !== null && _d !== void 0 ? _d : []).filter(function (s) { return s["@_href"] !== "#".concat(decisionId); });
    decisionService.encapsulatedDecision = ((_e = decisionService.encapsulatedDecision) !== null && _e !== void 0 ? _e : []).filter(function (s) { return s["@_href"] !== "#".concat(decisionId); });
    (0, repopulateInputDataAndDecisionsOnDecisionService_1.repopulateInputDataAndDecisionsOnDecisionService)({ definitions: definitions, decisionService: decisionService });
}
exports.deleteDecisionFromDecisionService = deleteDecisionFromDecisionService;
//# sourceMappingURL=deleteDecisionFromDecisionService.js.map