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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleNodeProperties = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var FontOptions_1 = require("./FontOptions");
var ShapeOptions_1 = require("./ShapeOptions");
var InputDataProperties_1 = require("./InputDataProperties");
var DecisionProperties_1 = require("./DecisionProperties");
var BkmProperties_1 = require("./BkmProperties");
var DecisionServiceProperties_1 = require("./DecisionServiceProperties");
var KnowledgeSourceProperties_1 = require("./KnowledgeSourceProperties");
var TextAnnotationProperties_1 = require("./TextAnnotationProperties");
var react_2 = require("react");
var Store_1 = require("../store/Store");
var DerivedStore_1 = require("../store/DerivedStore");
var NodeTypes_1 = require("../diagram/nodes/NodeTypes");
var DmnMaths_1 = require("../diagram/maths/DmnMaths");
var Icons_1 = require("../icons/Icons");
var GroupProperties_1 = require("./GroupProperties");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var times_icon_1 = require("@patternfly/react-icons/dist/js/icons/times-icon");
var PropertiesPanelHeader_1 = require("./PropertiesPanelHeader");
var UnknownProperties_1 = require("./UnknownProperties");
require("./SingleNodeProperties.css");
function SingleNodeProperties(_a) {
    var nodeId = _a.nodeId;
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var nodesById = (0, DerivedStore_1.useDmnEditorDerivedStore)().nodesById;
    var _b = __read((0, react_1.useState)(true), 2), isSectionExpanded = _b[0], setSectionExpanded = _b[1];
    var node = (0, react_2.useMemo)(function () {
        return nodesById.get(nodeId);
    }, [nodeId, nodesById]);
    if (!node) {
        return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Node not found: ", nodeId] });
    }
    var Icon = (0, Icons_1.NodeIcon)((0, DmnMaths_1.getNodeTypeFromDmnObject)(node.data.dmnObject));
    return ((0, jsx_runtime_1.jsx)(Form_1.Form, { children: (0, jsx_runtime_1.jsxs)(Form_1.FormSection, __assign({ className: !isSectionExpanded ? "kie-dmn-editor--single-node-properties-title-colapsed" : "", title: (0, jsx_runtime_1.jsx)(PropertiesPanelHeader_1.PropertiesPanelHeader, { expands: true, fixed: true, isSectionExpanded: isSectionExpanded, toogleSectionExpanded: function () { return setSectionExpanded(function (prev) { return !prev; }); }, icon: (0, jsx_runtime_1.jsx)(Icon, {}), title: (function () {
                    switch (node.type) {
                        case NodeTypes_1.NODE_TYPES.inputData:
                            return "Input";
                        case NodeTypes_1.NODE_TYPES.decision:
                            return "Decision";
                        case NodeTypes_1.NODE_TYPES.bkm:
                            return "Business Knowledge Model";
                        case NodeTypes_1.NODE_TYPES.decisionService:
                            return "Decision Service";
                        case NodeTypes_1.NODE_TYPES.knowledgeSource:
                            return "Knowledge Source";
                        case NodeTypes_1.NODE_TYPES.textAnnotation:
                            return "Text Annotation";
                        case NodeTypes_1.NODE_TYPES.group:
                            return "Group";
                        case NodeTypes_1.NODE_TYPES.unknown:
                            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Unknown" });
                        default:
                            throw new Error("Unknown type of node ".concat(node.type));
                    }
                })(), action: (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.plain, onClick: function () {
                        dmnEditorStoreApi.setState(function (state) {
                            state.boxedExpressionEditor.propertiesPanel.isOpen = false;
                            state.diagram.propertiesPanel.isOpen = false;
                        });
                    } }, { children: (0, jsx_runtime_1.jsx)(times_icon_1.TimesIcon, {}) })) }) }, { children: [isSectionExpanded && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(Form_1.FormSection, __assign({ style: { paddingLeft: "20px" } }, { children: (function () {
                            switch (node.type) {
                                case NodeTypes_1.NODE_TYPES.inputData:
                                    return ((0, jsx_runtime_1.jsx)(InputDataProperties_1.InputDataProperties, { inputData: node.data.dmnObject, namespace: node.data.dmnObjectNamespace, index: node.data.index }));
                                case NodeTypes_1.NODE_TYPES.decision:
                                    return ((0, jsx_runtime_1.jsx)(DecisionProperties_1.DecisionProperties, { decision: node.data.dmnObject, namespace: node.data.dmnObjectNamespace, index: node.data.index }));
                                case NodeTypes_1.NODE_TYPES.bkm:
                                    return ((0, jsx_runtime_1.jsx)(BkmProperties_1.BkmProperties, { bkm: node.data.dmnObject, namespace: node.data.dmnObjectNamespace, index: node.data.index }));
                                case NodeTypes_1.NODE_TYPES.decisionService:
                                    return ((0, jsx_runtime_1.jsx)(DecisionServiceProperties_1.DecisionServiceProperties, { decisionService: node.data.dmnObject, namespace: node.data.dmnObjectNamespace, index: node.data.index }));
                                case NodeTypes_1.NODE_TYPES.knowledgeSource:
                                    return ((0, jsx_runtime_1.jsx)(KnowledgeSourceProperties_1.KnowledgeSourceProperties, { knowledgeSource: node.data.dmnObject, namespace: node.data.dmnObjectNamespace, index: node.data.index }));
                                case NodeTypes_1.NODE_TYPES.textAnnotation:
                                    return ((0, jsx_runtime_1.jsx)(TextAnnotationProperties_1.TextAnnotationProperties, { textAnnotation: node.data.dmnObject, index: node.data.index }));
                                case NodeTypes_1.NODE_TYPES.group:
                                    return (0, jsx_runtime_1.jsx)(GroupProperties_1.GroupProperties, { group: node.data.dmnObject, index: node.data.index });
                                case NodeTypes_1.NODE_TYPES.unknown:
                                    return (0, jsx_runtime_1.jsx)(UnknownProperties_1.UnknownProperties, { shape: node.data.shape, dmnElementRefQName: node.data.dmnObjectQName });
                                default:
                                    throw new Error("Unknown type of node ".concat(node === null || node === void 0 ? void 0 : node.__$$element));
                            }
                        })() })) })), (0, jsx_runtime_1.jsx)(FontOptions_1.FontOptions, { startExpanded: false, nodeIds: [node.id] }), (0, jsx_runtime_1.jsx)(ShapeOptions_1.ShapeOptions, { startExpanded: false, nodeIds: [node.id], isDimensioningEnabled: true, isPositioningEnabled: true })] })) }));
}
exports.SingleNodeProperties = SingleNodeProperties;
//# sourceMappingURL=SingleNodeProperties.js.map