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
exports.InputDataProperties = void 0;
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
function InputDataProperties(_a) {
    var _b, _c, _d;
    var inputData = _a.inputData, namespace = _a.namespace, index = _a.index;
    var setState = (0, Store_1.useDmnEditorStoreApi)().setState;
    var thisDmnsNamespace = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn.model.definitions["@_namespace"]; });
    var isReadonly = !!namespace && namespace !== thisDmnsNamespace;
    var allFeelVariableUniqueNames = (0, DerivedStore_1.useDmnEditorDerivedStore)().allFeelVariableUniqueNames;
    var dmnEditorRootElementRef = (0, DmnEditorContext_1.useDmnEditor)().dmnEditorRootElementRef;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Name" }, { children: (0, jsx_runtime_1.jsx)(InlineFeelNameInput_1.InlineFeelNameInput, { enableAutoFocusing: false, isPlain: false, id: inputData["@_id"], name: inputData["@_name"], isReadonly: isReadonly, shouldCommitOnBlur: true, className: "pf-c-form-control", onRenamed: function (newName) {
                        setState(function (state) {
                            (0, renameNode_1.renameDrgElement)({
                                definitions: state.dmn.model.definitions,
                                index: index,
                                newName: newName,
                            });
                        });
                    }, allUniqueNames: allFeelVariableUniqueNames }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Data type" }, { children: (0, jsx_runtime_1.jsx)(TypeRefSelector_1.TypeRefSelector, { heightRef: dmnEditorRootElementRef, typeRef: (_b = inputData.variable) === null || _b === void 0 ? void 0 : _b["@_typeRef"], onChange: function (newTypeRef) {
                        setState(function (state) {
                            var _a;
                            var drgElement = state.dmn.model.definitions.drgElement[index];
                            (_a = drgElement.variable) !== null && _a !== void 0 ? _a : (drgElement.variable = { "@_name": inputData["@_name"] });
                            drgElement.variable["@_typeRef"] = newTypeRef;
                        });
                    } }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Description" }, { children: (0, jsx_runtime_1.jsx)(TextArea_1.TextArea, { "aria-label": "Description", type: "text", isDisabled: isReadonly, value: (_c = inputData.description) === null || _c === void 0 ? void 0 : _c.__$$text, onChange: function (newDescription) {
                        setState(function (state) {
                            state.dmn.model.definitions.drgElement[index].description = {
                                __$$text: newDescription,
                            };
                        });
                    }, placeholder: "Enter a description...", style: { resize: "vertical", minHeight: "40px" }, rows: 6 }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "ID" }, { children: (0, jsx_runtime_1.jsx)(ClipboardCopy_1.ClipboardCopy, __assign({ isReadOnly: true, hoverTip: "Copy", clickTip: "Copied" }, { children: inputData["@_id"] })) })), (0, jsx_runtime_1.jsx)(DocumentationLinksFormGroup_1.DocumentationLinksFormGroup, { isReadonly: isReadonly, values: (_d = inputData.extensionElements) === null || _d === void 0 ? void 0 : _d["kie:attachment"], onChange: function (newExtensionElements) {
                    setState(function (state) {
                        state.dmn.model.definitions.drgElement[index].extensionElements = {
                            "kie:attachment": newExtensionElements,
                        };
                    });
                } })] }));
}
exports.InputDataProperties = InputDataProperties;
//# sourceMappingURL=InputDataProperties.js.map