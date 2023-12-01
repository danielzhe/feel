"use strict";
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
exports.repopulateInputDataAndDecisionsOnDecisionService = exports.repopulateInputDataAndDecisionsOnAllDecisionServices = void 0;
function repopulateInputDataAndDecisionsOnAllDecisionServices(_a) {
    var _b;
    var definitions = _a.definitions;
    for (var i = 0; i < ((_b = definitions.drgElement) !== null && _b !== void 0 ? _b : []).length; i++) {
        var drgElement = definitions.drgElement[i];
        if (drgElement.__$$element === "decisionService") {
            repopulateInputDataAndDecisionsOnDecisionService({
                definitions: definitions,
                decisionService: drgElement,
            });
        }
    }
}
exports.repopulateInputDataAndDecisionsOnAllDecisionServices = repopulateInputDataAndDecisionsOnAllDecisionServices;
function repopulateInputDataAndDecisionsOnDecisionService(_a) {
    var _b, _c, _d;
    var definitions = _a.definitions, decisionService = _a.decisionService;
    decisionService.inputData = [];
    decisionService.inputDecision = [];
    var hrefsToDecisionsInsideDecisionService = new Set(__spreadArray(__spreadArray([], __read(((_b = decisionService.outputDecision) !== null && _b !== void 0 ? _b : []).map(function (s) { return s["@_href"]; })), false), __read(((_c = decisionService.encapsulatedDecision) !== null && _c !== void 0 ? _c : []).map(function (s) { return s["@_href"]; })), false));
    var requirements = new Array();
    for (var i = 0; i < definitions.drgElement.length; i++) {
        var drgElement = definitions.drgElement[i];
        if (!hrefsToDecisionsInsideDecisionService.has("#".concat(drgElement["@_id"])) || drgElement.__$$element !== "decision") {
            continue;
        }
        ((_d = drgElement.informationRequirement) !== null && _d !== void 0 ? _d : []).flatMap(function (ir) {
            if (ir.requiredDecision) {
                requirements.push({ href: ir.requiredDecision["@_href"], type: "decisionIr" });
            }
            else if (ir.requiredInput) {
                requirements.push({ href: ir.requiredInput["@_href"], type: "inputDataIr" });
            }
        });
    }
    var inputDatas = new Set();
    var inputDecisions = new Set();
    var requirementsArray = __spreadArray([], __read(requirements), false);
    for (var i = 0; i < requirementsArray.length; i++) {
        var r = requirementsArray[i];
        if (r.type === "inputDataIr") {
            inputDatas.add(r.href);
        }
        else if (r.type === "decisionIr") {
            inputDecisions.add(r.href);
        }
        else {
            throw new Error("Invalid type of element to be referenced by DecisionService: '".concat(r.type, "'"));
        }
    }
    decisionService.inputData = __spreadArray([], __read(inputDatas), false).map(function (iHref) { return ({ "@_href": iHref }); });
    decisionService.inputDecision = __spreadArray([], __read(inputDecisions), false).flatMap(function (dHref) { return (hrefsToDecisionsInsideDecisionService.has(dHref) ? [] : { "@_href": dHref }); });
}
exports.repopulateInputDataAndDecisionsOnDecisionService = repopulateInputDataAndDecisionsOnDecisionService;
//# sourceMappingURL=repopulateInputDataAndDecisionsOnDecisionService.js.map