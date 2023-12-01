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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addShape = void 0;
var addOrGetDrd_1 = require("./addOrGetDrd");
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var NodeTypes_1 = require("../diagram/nodes/NodeTypes");
var updateDecisionServiceDividerLine_1 = require("./updateDecisionServiceDividerLine");
function addShape(_a) {
    var definitions = _a.definitions, drdIndex = _a.drdIndex, nodeType = _a.nodeType, shape = _a.shape;
    var diagramElements = (0, addOrGetDrd_1.addOrGetDrd)({ definitions: definitions, drdIndex: drdIndex }).diagramElements;
    diagramElements.push(__assign(__assign({ __$$element: "dmndi:DMNShape", "@_id": (0, api_1.generateUuid)() }, (nodeType === NodeTypes_1.NODE_TYPES.decisionService
        ? { "dmndi:DMNDecisionServiceDividerLine": (0, updateDecisionServiceDividerLine_1.getCentralizedDecisionServiceDividerLine)(shape["dc:Bounds"]) }
        : {})), shape));
}
exports.addShape = addShape;
//# sourceMappingURL=addShape.js.map