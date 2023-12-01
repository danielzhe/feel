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
exports.DecisionProperties = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ClipboardCopy_1 = require("@patternfly/react-core/dist/js/components/ClipboardCopy");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var TextArea_1 = require("@patternfly/react-core/dist/js/components/TextArea");
var DocumentationLinksFormGroup_1 = require("./DocumentationLinksFormGroup");
var TypeRefSelector_1 = require("../dataTypes/TypeRefSelector");
var Store_1 = require("../store/Store");
var renameNode_1 = require("../mutations/renameNode");
var InlineFeelNameInput_1 = require("../feel/InlineFeelNameInput");
var DerivedStore_1 = require("../store/DerivedStore");
var DmnEditorContext_1 = require("../DmnEditorContext");
function DecisionProperties(_a) {
    var _b, _c, _d, _e, _f;
    var decision = _a.decision, namespace = _a.namespace, index = _a.index;
    var setState = (0, Store_1.useDmnEditorStoreApi)().setState;
    var thisDmnsNamespace = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn.model.definitions["@_namespace"]; });
    var isReadonly = !!namespace && namespace !== thisDmnsNamespace;
    var allFeelVariableUniqueNames = (0, DerivedStore_1.useDmnEditorDerivedStore)().allFeelVariableUniqueNames;
    var dmnEditorRootElementRef = (0, DmnEditorContext_1.useDmnEditor)().dmnEditorRootElementRef;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Name" }, { children: (0, jsx_runtime_1.jsx)(InlineFeelNameInput_1.InlineFeelNameInput, { enableAutoFocusing: false, isPlain: false, id: decision["@_id"], name: decision["@_name"], isReadonly: isReadonly, shouldCommitOnBlur: true, className: "pf-c-form-control", onRenamed: function (newName) {
                        setState(function (state) {
                            (0, renameNode_1.renameDrgElement)({
                                definitions: state.dmn.model.definitions,
                                index: index,
                                newName: newName,
                            });
                        });
                    }, allUniqueNames: allFeelVariableUniqueNames }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Data type" }, { children: (0, jsx_runtime_1.jsx)(TypeRefSelector_1.TypeRefSelector, { heightRef: dmnEditorRootElementRef, typeRef: (_b = decision.variable) === null || _b === void 0 ? void 0 : _b["@_typeRef"], onChange: function (newTypeRef) {
                        setState(function (state) {
                            var _a;
                            var drgElement = state.dmn.model.definitions.drgElement[index];
                            (_a = drgElement.variable) !== null && _a !== void 0 ? _a : (drgElement.variable = { "@_name": decision["@_name"] });
                            drgElement.variable["@_typeRef"] = newTypeRef;
                        });
                    } }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Description" }, { children: (0, jsx_runtime_1.jsx)(TextArea_1.TextArea, { "aria-label": "Description", type: "text", isDisabled: isReadonly, value: (_c = decision.description) === null || _c === void 0 ? void 0 : _c.__$$text, onChange: function (newDescription) {
                        setState(function (state) {
                            state.dmn.model.definitions.drgElement[index].description = {
                                __$$text: newDescription,
                            };
                        });
                    }, placeholder: "Enter a description...", style: { resize: "vertical", minHeight: "40px" }, rows: 6 }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "ID" }, { children: (0, jsx_runtime_1.jsx)(ClipboardCopy_1.ClipboardCopy, __assign({ isReadOnly: true, hoverTip: "Copy", clickTip: "Copied" }, { children: decision["@_id"] })) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Question" }, { children: (0, jsx_runtime_1.jsx)(TextArea_1.TextArea, { "aria-label": "Question", type: "text", isDisabled: isReadonly, value: (_d = decision.question) === null || _d === void 0 ? void 0 : _d.__$$text, onChange: function (newQuestion) {
                        setState(function (state) {
                            state.dmn.model.definitions.drgElement[index].question = { __$$text: newQuestion };
                        });
                    }, placeholder: "Enter a question...", style: { resize: "vertical", minHeight: "40px" }, rows: 6 }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Allowed answers" }, { children: (0, jsx_runtime_1.jsx)(TextArea_1.TextArea, { "aria-label": "Allowed answers", type: "text", isDisabled: isReadonly, value: (_e = decision.allowedAnswers) === null || _e === void 0 ? void 0 : _e.__$$text, onChange: function (newAllowedAnswers) {
                        setState(function (state) {
                            state.dmn.model.definitions.drgElement[index].allowedAnswers = {
                                __$$text: newAllowedAnswers,
                            };
                        });
                    }, placeholder: "Enter allowed answers...", style: { resize: "vertical", minHeight: "40px" }, rows: 3 }) })), (0, jsx_runtime_1.jsx)(DocumentationLinksFormGroup_1.DocumentationLinksFormGroup, { isReadonly: isReadonly, values: (_f = decision.extensionElements) === null || _f === void 0 ? void 0 : _f["kie:attachment"], onChange: function (newExtensionElements) {
                    setState(function (state) {
                        state.dmn.model.definitions.drgElement[index].extensionElements = {
                            "kie:attachment": newExtensionElements,
                        };
                    });
                } })] }));
}
exports.DecisionProperties = DecisionProperties;
//# sourceMappingURL=DecisionProperties.js.map