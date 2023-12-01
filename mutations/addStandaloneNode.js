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
exports.addStandaloneNode = void 0;
var switch_expression_ts_1 = require("@kie-tools-core/switch-expression-ts");
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var NodeTypes_1 = require("../diagram/nodes/NodeTypes");
var NodeNature_1 = require("./NodeNature");
var addOrGetDrd_1 = require("./addOrGetDrd");
var updateDecisionServiceDividerLine_1 = require("./updateDecisionServiceDividerLine");
var repopulateInputDataAndDecisionsOnDecisionService_1 = require("./repopulateInputDataAndDecisionsOnDecisionService");
var xmlHrefs_1 = require("../xml/xmlHrefs");
function addStandaloneNode(_a) {
    var _b, _c;
    var _d, _e, _f, _g;
    var definitions = _a.definitions, drdIndex = _a.drdIndex, newNode = _a.newNode;
    var newNodeId = (0, api_1.generateUuid)();
    var nature = NodeNature_1.nodeNatures[newNode.type];
    if (nature === NodeNature_1.NodeNature.DRG_ELEMENT) {
        (_d = definitions.drgElement) !== null && _d !== void 0 ? _d : (definitions.drgElement = []);
        var variableBase = {
            "@_id": (0, api_1.generateUuid)(),
            "@_typeRef": api_1.DmnBuiltInDataType.Undefined,
        };
        (_e = definitions.drgElement) === null || _e === void 0 ? void 0 : _e.push((0, switch_expression_ts_1.switchExpression)(newNode.type, (_b = {},
            _b[NodeTypes_1.NODE_TYPES.bkm] = {
                __$$element: "businessKnowledgeModel",
                "@_name": "New BKM",
                "@_id": newNodeId,
                variable: __assign({ "@_name": "New BKM" }, variableBase),
            },
            _b[NodeTypes_1.NODE_TYPES.decision] = {
                __$$element: "decision",
                "@_name": "New Decision",
                "@_id": newNodeId,
                variable: __assign({ "@_name": "New Decision" }, variableBase),
            },
            _b[NodeTypes_1.NODE_TYPES.decisionService] = {
                __$$element: "decisionService",
                "@_name": "New Decision Service",
                "@_id": newNodeId,
                variable: __assign({ "@_name": "New Decision Service" }, variableBase),
            },
            _b[NodeTypes_1.NODE_TYPES.inputData] = {
                __$$element: "inputData",
                "@_name": "New Input Data",
                "@_id": newNodeId,
                variable: __assign({ "@_name": "New Input Data" }, variableBase),
            },
            _b[NodeTypes_1.NODE_TYPES.knowledgeSource] = {
                __$$element: "knowledgeSource",
                "@_name": "New Knowledge Source",
                "@_id": newNodeId,
                variable: __assign({ "@_name": "New Knowledge Source" }, variableBase),
            },
            _b)));
    }
    else if (nature === NodeNature_1.NodeNature.ARTIFACT) {
        (_f = definitions.artifact) !== null && _f !== void 0 ? _f : (definitions.artifact = []);
        (_g = definitions.artifact) === null || _g === void 0 ? void 0 : _g.push.apply(_g, __spreadArray([], __read((0, switch_expression_ts_1.switchExpression)(newNode.type, (_c = {},
            _c[NodeTypes_1.NODE_TYPES.textAnnotation] = [
                {
                    "@_id": newNodeId,
                    __$$element: "textAnnotation",
                    text: { __$$text: "New text annotation" },
                },
            ],
            _c[NodeTypes_1.NODE_TYPES.group] = [
                {
                    "@_id": newNodeId,
                    __$$element: "group",
                    "@_name": "New group",
                },
            ],
            _c))), false));
    }
    else {
        throw new Error("Unknown node usage '".concat(nature, "'."));
    }
    var diagramElements = (0, addOrGetDrd_1.addOrGetDrd)({ definitions: definitions, drdIndex: drdIndex }).diagramElements;
    var shapeId = (0, api_1.generateUuid)();
    diagramElements === null || diagramElements === void 0 ? void 0 : diagramElements.push(__assign({ __$$element: "dmndi:DMNShape", "@_id": shapeId, "@_dmnElementRef": newNodeId, "@_isCollapsed": false, "@_isListedInputData": false, "dc:Bounds": newNode.bounds }, (newNode.type === NodeTypes_1.NODE_TYPES.decisionService
        ? { "dmndi:DMNDecisionServiceDividerLine": (0, updateDecisionServiceDividerLine_1.getCentralizedDecisionServiceDividerLine)(newNode.bounds) }
        : {})));
    (0, repopulateInputDataAndDecisionsOnDecisionService_1.repopulateInputDataAndDecisionsOnAllDecisionServices)({ definitions: definitions });
    return { id: newNodeId, href: (0, xmlHrefs_1.buildXmlHref)({ id: newNodeId }), shapeId: shapeId };
}
exports.addStandaloneNode = addStandaloneNode;
//# sourceMappingURL=addStandaloneNode.js.map