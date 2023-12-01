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
exports.getRequirementsFromEdge = exports.addConnectedNode = void 0;
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var AutoPositionedEdgeMarker_1 = require("../diagram/edges/AutoPositionedEdgeMarker");
var EdgeTypes_1 = require("../diagram/edges/EdgeTypes");
var DmnMaths_1 = require("../diagram/maths/DmnMaths");
var NodeTypes_1 = require("../diagram/nodes/NodeTypes");
var switch_expression_ts_1 = require("@kie-tools-core/switch-expression-ts");
var NodeNature_1 = require("./NodeNature");
var addOrGetDrd_1 = require("./addOrGetDrd");
var updateDecisionServiceDividerLine_1 = require("./updateDecisionServiceDividerLine");
var repopulateInputDataAndDecisionsOnDecisionService_1 = require("./repopulateInputDataAndDecisionsOnDecisionService");
var xmlHrefs_1 = require("../xml/xmlHrefs");
function addConnectedNode(_a) {
    var _b, _c;
    var _d, _e, _f, _g;
    var definitions = _a.definitions, drdIndex = _a.drdIndex, sourceNode = _a.sourceNode, newNode = _a.newNode, edge = _a.edge;
    var newDmnObjectId = (0, api_1.generateUuid)();
    var newDmnObjectHref = (0, xmlHrefs_1.buildXmlHref)({ id: newDmnObjectId });
    var newEdgeId = (0, api_1.generateUuid)();
    var nature = NodeNature_1.nodeNatures[newNode.type];
    if (nature === NodeNature_1.NodeNature.DRG_ELEMENT) {
        var requirements = getRequirementsFromEdge(sourceNode, newEdgeId, edge);
        (_d = definitions.drgElement) !== null && _d !== void 0 ? _d : (definitions.drgElement = []);
        var variableBase = {
            "@_id": (0, api_1.generateUuid)(),
            "@_typeRef": api_1.DmnBuiltInDataType.Undefined,
        };
        (_e = definitions.drgElement) === null || _e === void 0 ? void 0 : _e.push((0, switch_expression_ts_1.switchExpression)(newNode.type, (_b = {},
            _b[NodeTypes_1.NODE_TYPES.bkm] = __assign(__assign({ __$$element: "businessKnowledgeModel", "@_name": "New BKM", "@_id": newDmnObjectId }, requirements), { variable: __assign(__assign({}, variableBase), { "@_name": "New BKM" }) }),
            _b[NodeTypes_1.NODE_TYPES.decision] = __assign(__assign({ __$$element: "decision", "@_name": "New Decision", "@_id": newDmnObjectId }, requirements), { variable: __assign(__assign({}, variableBase), { "@_name": "New Decision" }) }),
            _b[NodeTypes_1.NODE_TYPES.decisionService] = __assign(__assign({ __$$element: "decisionService", "@_name": "New Decision Service", "@_id": newDmnObjectId }, requirements), { variable: __assign(__assign({}, variableBase), { "@_name": "New Decision Service" }) }),
            _b[NodeTypes_1.NODE_TYPES.inputData] = __assign(__assign({ __$$element: "inputData", "@_name": "New Input Data", "@_id": newDmnObjectId }, requirements), { variable: __assign(__assign({}, variableBase), { "@_name": "New Input Data" }) }),
            _b[NodeTypes_1.NODE_TYPES.knowledgeSource] = __assign(__assign({ __$$element: "knowledgeSource", "@_name": "New Knowledge Source", "@_id": newDmnObjectId }, requirements), { variable: __assign(__assign({}, variableBase), { "@_name": "New Knowledge Source" }) }),
            _b)));
    }
    else if (nature === NodeNature_1.NodeNature.ARTIFACT) {
        (_f = definitions.artifact) !== null && _f !== void 0 ? _f : (definitions.artifact = []);
        (_g = definitions.artifact) === null || _g === void 0 ? void 0 : _g.push.apply(_g, __spreadArray([], __read((0, switch_expression_ts_1.switchExpression)(newNode.type, (_c = {},
            _c[NodeTypes_1.NODE_TYPES.textAnnotation] = [
                {
                    "@_id": newDmnObjectId,
                    __$$element: "textAnnotation",
                    text: { __$$text: "New text annotation" },
                },
                {
                    "@_id": newEdgeId,
                    __$$element: "association",
                    "@_associationDirection": "Both",
                    sourceRef: { "@_href": "".concat(sourceNode.href) },
                    targetRef: { "@_href": "".concat(newDmnObjectHref) },
                },
            ],
            _c[NodeTypes_1.NODE_TYPES.group] = [
                {
                    "@_id": newDmnObjectId,
                    __$$element: "group",
                    "@_name": "New group",
                },
            ],
            _c))), false));
    }
    else {
        throw new Error("Unknown node usage '".concat(nature, "'."));
    }
    var newShapeId = (0, api_1.generateUuid)();
    var diagramElements = (0, addOrGetDrd_1.addOrGetDrd)({ definitions: definitions, drdIndex: drdIndex }).diagramElements;
    diagramElements === null || diagramElements === void 0 ? void 0 : diagramElements.push(__assign({ __$$element: "dmndi:DMNShape", "@_id": newShapeId, "@_dmnElementRef": newDmnObjectId, "@_isCollapsed": false, "@_isListedInputData": false, "dc:Bounds": newNode.bounds }, (newNode.type === NodeTypes_1.NODE_TYPES.decisionService
        ? { "dmndi:DMNDecisionServiceDividerLine": (0, updateDecisionServiceDividerLine_1.getCentralizedDecisionServiceDividerLine)(newNode.bounds) }
        : {})));
    diagramElements === null || diagramElements === void 0 ? void 0 : diagramElements.push({
        __$$element: "dmndi:DMNEdge",
        "@_id": (0, api_1.generateUuid)() + AutoPositionedEdgeMarker_1.AutoPositionedEdgeMarker.TARGET,
        "@_dmnElementRef": newEdgeId,
        "@_sourceElement": sourceNode.shapeId,
        "@_targetElement": newShapeId,
        "di:waypoint": [(0, DmnMaths_1.getBoundsCenterPoint)(sourceNode.bounds), (0, DmnMaths_1.getBoundsCenterPoint)(newNode.bounds)],
    });
    (0, repopulateInputDataAndDecisionsOnDecisionService_1.repopulateInputDataAndDecisionsOnAllDecisionServices)({ definitions: definitions });
    return { id: newDmnObjectId, href: newDmnObjectHref };
}
exports.addConnectedNode = addConnectedNode;
function getRequirementsFromEdge(sourceNode, newEdgeId, edge) {
    var _a, _b, _c, _d;
    var ir = (0, switch_expression_ts_1.switchExpression)(sourceNode.type, (_a = {},
        _a[NodeTypes_1.NODE_TYPES.inputData] = { "@_id": newEdgeId, requiredInput: { "@_href": "".concat(sourceNode.href) } },
        _a[NodeTypes_1.NODE_TYPES.decision] = { "@_id": newEdgeId, requiredDecision: { "@_href": "".concat(sourceNode.href) } },
        _a.default = undefined,
        _a));
    var kr = (0, switch_expression_ts_1.switchExpression)(sourceNode.type, (_b = {},
        _b[NodeTypes_1.NODE_TYPES.bkm] = { "@_id": newEdgeId, requiredKnowledge: { "@_href": "".concat(sourceNode.href) } },
        _b[NodeTypes_1.NODE_TYPES.decisionService] = { "@_id": newEdgeId, requiredKnowledge: { "@_href": "".concat(sourceNode.href) } },
        _b.default = undefined,
        _b));
    var ar = (0, switch_expression_ts_1.switchExpression)(sourceNode.type, (_c = {},
        _c[NodeTypes_1.NODE_TYPES.inputData] = { "@_id": newEdgeId, requiredInput: { "@_href": "".concat(sourceNode.href) } },
        _c[NodeTypes_1.NODE_TYPES.decision] = { "@_id": newEdgeId, requiredDecision: { "@_href": "".concat(sourceNode.href) } },
        _c[NodeTypes_1.NODE_TYPES.knowledgeSource] = { "@_id": newEdgeId, requiredAuthority: { "@_href": "".concat(sourceNode.href) } },
        _c.default = undefined,
        _c));
    var requirements = (0, switch_expression_ts_1.switchExpression)(edge, (_d = {},
        _d[EdgeTypes_1.EDGE_TYPES.informationRequirement] = ir ? { informationRequirement: [ir] } : undefined,
        _d[EdgeTypes_1.EDGE_TYPES.knowledgeRequirement] = kr ? { knowledgeRequirement: [kr] } : undefined,
        _d[EdgeTypes_1.EDGE_TYPES.authorityRequirement] = ar ? { authorityRequirement: [ar] } : undefined,
        _d.default = undefined,
        _d));
    return requirements;
}
exports.getRequirementsFromEdge = getRequirementsFromEdge;
//# sourceMappingURL=addConnectedNode.js.map