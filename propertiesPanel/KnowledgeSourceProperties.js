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
exports.KnowledgeSourceProperties = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ClipboardCopy_1 = require("@patternfly/react-core/dist/js/components/ClipboardCopy");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var TextArea_1 = require("@patternfly/react-core/dist/js/components/TextArea");
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
var DocumentationLinksFormGroup_1 = require("./DocumentationLinksFormGroup");
var Store_1 = require("../store/Store");
var renameNode_1 = require("../mutations/renameNode");
var InlineFeelNameInput_1 = require("../feel/InlineFeelNameInput");
var DerivedStore_1 = require("../store/DerivedStore");
function KnowledgeSourceProperties(_a) {
    var _b, _c, _d;
    var knowledgeSource = _a.knowledgeSource, namespace = _a.namespace, index = _a.index;
    var setState = (0, Store_1.useDmnEditorStoreApi)().setState;
    var thisDmnsNamespace = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn.model.definitions["@_namespace"]; });
    var isReadonly = !!namespace && namespace !== thisDmnsNamespace;
    var allFeelVariableUniqueNames = (0, DerivedStore_1.useDmnEditorDerivedStore)().allFeelVariableUniqueNames;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Name" }, { children: (0, jsx_runtime_1.jsx)(InlineFeelNameInput_1.InlineFeelNameInput, { enableAutoFocusing: false, isPlain: false, id: knowledgeSource["@_id"], name: knowledgeSource["@_name"], isReadonly: isReadonly, shouldCommitOnBlur: true, className: "pf-c-form-control", onRenamed: function (newName) {
                        setState(function (state) {
                            (0, renameNode_1.renameDrgElement)({
                                definitions: state.dmn.model.definitions,
                                index: index,
                                newName: newName,
                            });
                        });
                    }, allUniqueNames: allFeelVariableUniqueNames }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Description" }, { children: (0, jsx_runtime_1.jsx)(TextArea_1.TextArea, { "aria-label": "Description", type: "text", isDisabled: isReadonly, value: (_b = knowledgeSource.description) === null || _b === void 0 ? void 0 : _b.__$$text, onChange: function (newDescription) {
                        setState(function (state) {
                            state.dmn.model.definitions.drgElement[index].description = {
                                __$$text: newDescription,
                            };
                        });
                    }, placeholder: "Enter a description...", style: { resize: "vertical", minHeight: "40px" }, rows: 6 }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "ID" }, { children: (0, jsx_runtime_1.jsx)(ClipboardCopy_1.ClipboardCopy, __assign({ isReadOnly: true, hoverTip: "Copy", clickTip: "Copied" }, { children: knowledgeSource["@_id"] })) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Source type" }, { children: (0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { "aria-label": "Source type", type: "text", isDisabled: isReadonly, value: (_c = knowledgeSource.type) === null || _c === void 0 ? void 0 : _c.__$$text, onChange: function (newType) {
                        setState(function (state) {
                            state.dmn.model.definitions.drgElement[index].type = { __$$text: newType };
                        });
                    }, placeholder: "Enter source type..." }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Location URI" }, { children: (0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { "aria-label": "Location URI", type: "text", isDisabled: isReadonly, value: knowledgeSource["@_locationURI"], onChange: function (newLocationUri) {
                        setState(function (state) {
                            state.dmn.model.definitions.drgElement[index]["@_locationURI"] =
                                newLocationUri;
                        });
                    }, placeholder: "Enter location URI..." }) })), (0, jsx_runtime_1.jsx)(DocumentationLinksFormGroup_1.DocumentationLinksFormGroup, { isReadonly: isReadonly, values: (_d = knowledgeSource.extensionElements) === null || _d === void 0 ? void 0 : _d["kie:attachment"], onChange: function (newExtensionElements) {
                    setState(function (state) {
                        state.dmn.model.definitions.drgElement[index].extensionElements = {
                            "kie:attachment": newExtensionElements,
                        };
                    });
                } })] }));
}
exports.KnowledgeSourceProperties = KnowledgeSourceProperties;
//# sourceMappingURL=KnowledgeSourceProperties.js.map