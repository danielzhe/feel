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
exports.DecisionServiceElementList = exports.DecisionServiceProperties = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ClipboardCopy_1 = require("@patternfly/react-core/dist/js/components/ClipboardCopy");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var TextArea_1 = require("@patternfly/react-core/dist/js/components/TextArea");
var DocumentationLinksFormGroup_1 = require("./DocumentationLinksFormGroup");
var TypeRefSelector_1 = require("../dataTypes/TypeRefSelector");
var Store_1 = require("../store/Store");
var react_1 = require("react");
var xmlHrefs_1 = require("../xml/xmlHrefs");
var DmnObjectListItem_1 = require("../externalNodes/DmnObjectListItem");
var renameNode_1 = require("../mutations/renameNode");
var InlineFeelNameInput_1 = require("../feel/InlineFeelNameInput");
var DerivedStore_1 = require("../store/DerivedStore");
var Divider_1 = require("@patternfly/react-core/dist/js/components/Divider");
var DmnEditorContext_1 = require("../DmnEditorContext");
function DecisionServiceProperties(_a) {
    var _b, _c, _d;
    var decisionService = _a.decisionService, namespace = _a.namespace, index = _a.index;
    var setState = (0, Store_1.useDmnEditorStoreApi)().setState;
    var thisDmn = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn; });
    var _e = (0, DerivedStore_1.useDmnEditorDerivedStore)(), externalDmnsByNamespace = _e.externalDmnsByNamespace, allFeelVariableUniqueNames = _e.allFeelVariableUniqueNames;
    var allDrgElementsByHref = (0, react_1.useMemo)(function () {
        var _a;
        var ret = new Map();
        var allDmns = __spreadArray([{ model: thisDmn.model }], __read(externalDmnsByNamespace.values()), false);
        for (var i = 0; i < allDmns.length; i++) {
            var anyDmn = allDmns[i];
            var namespace_1 = anyDmn.model.definitions["@_namespace"];
            var drgElements = (_a = anyDmn.model.definitions.drgElement) !== null && _a !== void 0 ? _a : [];
            for (var i_1 = 0; i_1 < drgElements.length; i_1++) {
                var element = drgElements[i_1];
                if (element.__$$element === "decision" || element.__$$element === "inputData") {
                    ret.set((0, xmlHrefs_1.buildXmlHref)({ namespace: namespace_1, id: element["@_id"] }), element);
                }
            }
        }
        return ret;
    }, [externalDmnsByNamespace, thisDmn]);
    var thisDmnsNamespace = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn.model.definitions["@_namespace"]; });
    var isReadonly = !!namespace && namespace !== thisDmnsNamespace;
    var dmnEditorRootElementRef = (0, DmnEditorContext_1.useDmnEditor)().dmnEditorRootElementRef;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Name" }, { children: (0, jsx_runtime_1.jsx)(InlineFeelNameInput_1.InlineFeelNameInput, { enableAutoFocusing: false, isPlain: false, id: decisionService["@_id"], name: decisionService["@_name"], isReadonly: isReadonly, shouldCommitOnBlur: true, className: "pf-c-form-control", onRenamed: function (newName) {
                        setState(function (state) {
                            (0, renameNode_1.renameDrgElement)({
                                definitions: state.dmn.model.definitions,
                                index: index,
                                newName: newName,
                            });
                        });
                    }, allUniqueNames: allFeelVariableUniqueNames }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Data type" }, { children: (0, jsx_runtime_1.jsx)(TypeRefSelector_1.TypeRefSelector, { heightRef: dmnEditorRootElementRef, typeRef: (_b = decisionService.variable) === null || _b === void 0 ? void 0 : _b["@_typeRef"], onChange: function (newTypeRef) {
                        setState(function (state) {
                            var _a;
                            var drgElement = state.dmn.model.definitions.drgElement[index];
                            (_a = drgElement.variable) !== null && _a !== void 0 ? _a : (drgElement.variable = { "@_name": decisionService["@_name"] });
                            drgElement.variable["@_typeRef"] = newTypeRef;
                        });
                    } }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Description" }, { children: (0, jsx_runtime_1.jsx)(TextArea_1.TextArea, { "aria-label": "Description", type: "text", isDisabled: isReadonly, value: (_c = decisionService.description) === null || _c === void 0 ? void 0 : _c.__$$text, onChange: function (newDescription) {
                        setState(function (state) {
                            state.dmn.model.definitions.drgElement[index].description = {
                                __$$text: newDescription,
                            };
                        });
                    }, placeholder: "Enter a description...", style: { resize: "vertical", minHeight: "40px" }, rows: 6 }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "ID" }, { children: (0, jsx_runtime_1.jsx)(ClipboardCopy_1.ClipboardCopy, __assign({ isReadOnly: true, hoverTip: "Copy", clickTip: "Copied" }, { children: decisionService["@_id"] })) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Output decisions" }, { children: (0, jsx_runtime_1.jsx)(DecisionServiceElementList, { decisionServiceNamespace: namespace, elements: decisionService.outputDecision, allDrgElementsByHref: allDrgElementsByHref }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Encapsulated decisions" }, { children: (0, jsx_runtime_1.jsx)(DecisionServiceElementList, { decisionServiceNamespace: namespace, elements: decisionService.encapsulatedDecision, allDrgElementsByHref: allDrgElementsByHref }) })), (0, jsx_runtime_1.jsx)(Divider_1.Divider, {}), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Input data" }, { children: (0, jsx_runtime_1.jsx)(DecisionServiceElementList, { decisionServiceNamespace: namespace, elements: decisionService.inputData, allDrgElementsByHref: allDrgElementsByHref }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Input decisions" }, { children: (0, jsx_runtime_1.jsx)(DecisionServiceElementList, { decisionServiceNamespace: namespace, elements: decisionService.inputDecision, allDrgElementsByHref: allDrgElementsByHref }) })), (0, jsx_runtime_1.jsx)(DocumentationLinksFormGroup_1.DocumentationLinksFormGroup, { isReadonly: isReadonly, values: (_d = decisionService.extensionElements) === null || _d === void 0 ? void 0 : _d["kie:attachment"], onChange: function (newExtensionElements) {
                    setState(function (state) {
                        state.dmn.model.definitions.drgElement[index].extensionElements = {
                            "kie:attachment": newExtensionElements,
                        };
                    });
                } })] }));
}
exports.DecisionServiceProperties = DecisionServiceProperties;
function DecisionServiceElementList(_a) {
    var decisionServiceNamespace = _a.decisionServiceNamespace, elements = _a.elements, allDrgElementsByHref = _a.allDrgElementsByHref;
    var thisDmnsNamespace = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn.model.definitions["@_namespace"]; });
    return ((0, jsx_runtime_1.jsxs)("ul", { children: [(elements !== null && elements !== void 0 ? elements : []).length <= 0 && ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("small", { children: (0, jsx_runtime_1.jsx)("i", { children: "(Empty)" }) }) })), (elements !== null && elements !== void 0 ? elements : []).map(function (e) {
                var _a, _b;
                var localHref = (0, xmlHrefs_1.parseXmlHref)(e["@_href"]);
                var resolvedNamespace = (_b = (_a = localHref.namespace) !== null && _a !== void 0 ? _a : decisionServiceNamespace) !== null && _b !== void 0 ? _b : thisDmnsNamespace;
                var potentialExternalHref = (0, xmlHrefs_1.buildXmlHref)({
                    namespace: resolvedNamespace,
                    id: localHref.id,
                });
                return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(DmnObjectListItem_1.DmnObjectListItem, { dmnObjectHref: potentialExternalHref, dmnObject: allDrgElementsByHref.get(potentialExternalHref), relativeToNamespace: thisDmnsNamespace, namespace: resolvedNamespace }) }, potentialExternalHref));
            })] }));
}
exports.DecisionServiceElementList = DecisionServiceElementList;
//# sourceMappingURL=DecisionServiceProperties.js.map