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
exports.GlobalDiagramProperties = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ClipboardCopy_1 = require("@patternfly/react-core/dist/js/components/ClipboardCopy");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var TextArea_1 = require("@patternfly/react-core/dist/js/components/TextArea");
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
var data_source_icon_1 = require("@patternfly/react-icons/dist/js/icons/data-source-icon");
var Store_1 = require("../store/Store");
var InlineFeelNameInput_1 = require("../feel/InlineFeelNameInput");
var react_1 = require("react");
var Modal_1 = require("@patternfly/react-core/dist/js/components/Modal");
var sync_alt_icon_1 = require("@patternfly/react-icons/dist/js/icons/sync-alt-icon");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var times_icon_1 = require("@patternfly/react-icons/dist/js/icons/times-icon");
var PropertiesPanelHeader_1 = require("./PropertiesPanelHeader");
function GlobalDiagramProperties() {
    var _a;
    var thisDmn = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn; });
    var _b = __read((0, react_1.useState)(true), 2), isGlobalSectionExpanded = _b[0], setGlobalSectionExpanded = _b[1];
    var _c = __read((0, react_1.useState)(true), 2), isIdNamespaceSectionExpanded = _c[0], setIdNamespaceSectionExpanded = _c[1];
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var _d = __read((0, react_1.useState)(false), 2), regenerateIdConfirmationModal = _d[0], setRegenerateIdConfirmationModal = _d[1];
    return ((0, jsx_runtime_1.jsxs)(Form_1.Form, { children: [(0, jsx_runtime_1.jsx)(Form_1.FormSection, __assign({ title: (0, jsx_runtime_1.jsx)(PropertiesPanelHeader_1.PropertiesPanelHeader, { expands: true, fixed: true, isSectionExpanded: isGlobalSectionExpanded, toogleSectionExpanded: function () { return setGlobalSectionExpanded(function (prev) { return !prev; }); }, icon: (0, jsx_runtime_1.jsx)(data_source_icon_1.DataSourceIcon, { width: 16, height: 36, style: { marginLeft: "12px" } }), title: "Global properties", action: (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.plain, onClick: function () {
                            dmnEditorStoreApi.setState(function (state) {
                                state.diagram.propertiesPanel.isOpen = false;
                            });
                        } }, { children: (0, jsx_runtime_1.jsx)(times_icon_1.TimesIcon, {}) })) }) }, { children: isGlobalSectionExpanded && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(Form_1.FormSection, __assign({ style: { paddingLeft: "20px" } }, { children: [(0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Name" }, { children: (0, jsx_runtime_1.jsx)(InlineFeelNameInput_1.InlineFeelNameInput, { enableAutoFocusing: false, isPlain: false, id: thisDmn.model.definitions["@_id"], name: thisDmn.model.definitions["@_name"], isReadonly: false, shouldCommitOnBlur: true, className: "pf-c-form-control", onRenamed: function (newName) {
                                        dmnEditorStoreApi.setState(function (state) {
                                            state.dmn.model.definitions["@_name"] = newName;
                                        });
                                    }, allUniqueNames: new Map() }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Description" }, { children: (0, jsx_runtime_1.jsx)(TextArea_1.TextArea, { "aria-label": "Description", type: "text", isDisabled: false, style: { resize: "vertical", minHeight: "40px" }, rows: 6, placeholder: "Enter a description...", value: (_a = thisDmn.model.definitions.description) === null || _a === void 0 ? void 0 : _a.__$$text, onChange: function (newDescription) {
                                        return dmnEditorStoreApi.setState(function (state) {
                                            state.dmn.model.definitions.description = { __$$text: newDescription };
                                        });
                                    } }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Expression language" }, { children: (0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { "aria-label": "Expression language", type: "text", isDisabled: false, placeholder: "Enter an expression language...", value: thisDmn.model.definitions["@_expressionLanguage"], onChange: function (newExprLang) {
                                        return dmnEditorStoreApi.setState(function (state) {
                                            state.dmn.model.definitions["@_expressionLanguage"] = newExprLang;
                                        });
                                    } }) }))] })) })) })), (0, jsx_runtime_1.jsx)(Form_1.FormSection, __assign({ style: { paddingTop: "20px" }, title: (0, jsx_runtime_1.jsx)(PropertiesPanelHeader_1.PropertiesPanelHeader, { expands: true, isSectionExpanded: isIdNamespaceSectionExpanded, toogleSectionExpanded: function () { return setIdNamespaceSectionExpanded(function (prev) { return !prev; }); }, title: "ID & Namespace", action: (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.plain, onClick: function () { return setRegenerateIdConfirmationModal(true); }, style: { paddingBottom: 0, paddingTop: 0 } }, { children: (0, jsx_runtime_1.jsx)(sync_alt_icon_1.SyncAltIcon, {}) })) }) }, { children: isIdNamespaceSectionExpanded && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(Form_1.FormSection, __assign({ style: { paddingLeft: "20px", marginTop: 0 } }, { children: [(0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "ID" }, { children: (0, jsx_runtime_1.jsx)(ClipboardCopy_1.ClipboardCopy, __assign({ isReadOnly: false, hoverTip: "Copy", clickTip: "Copied", onChange: function (newId) {
                                        dmnEditorStoreApi.setState(function (state) {
                                            state.dmn.model.definitions["@_id"] = "".concat(newId);
                                        });
                                    } }, { children: thisDmn.model.definitions["@_id"] })) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Namespace" }, { children: (0, jsx_runtime_1.jsx)(ClipboardCopy_1.ClipboardCopy, __assign({ isReadOnly: false, hoverTip: "Copy", clickTip: "Copied", onChange: function (newNamespace) {
                                        dmnEditorStoreApi.setState(function (state) {
                                            state.dmn.model.definitions["@_namespace"] = "".concat(newNamespace);
                                        });
                                    } }, { children: thisDmn.model.definitions["@_namespace"] })) }))] })) })) })), (0, jsx_runtime_1.jsxs)(Modal_1.Modal, __assign({ "aria-labelledby": "Regenerate ID & Namespace", variant: Modal_1.ModalVariant.small, isOpen: regenerateIdConfirmationModal, onClose: function () { return setRegenerateIdConfirmationModal(false); }, actions: [
                    (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.primary, onClick: function () {
                            setRegenerateIdConfirmationModal(false);
                            dmnEditorStoreApi.setState(function (state) {
                                state.dmn.model.definitions["@_id"] = (0, api_1.generateUuid)();
                                state.dmn.model.definitions["@_namespace"] = "https://kie.org/dmn/".concat((0, api_1.generateUuid)());
                            });
                        } }, { children: "Yes, re-generate ID and Namespace" }), "confirm"),
                    (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: "link", onClick: function () { return setRegenerateIdConfirmationModal(false); } }, { children: "Cancel" }), "cancel"),
                ] }, { children: ["Re-generating the ID and Namespace of a DMN file will potentially break other DMN files that depend on it.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "Are you sure you want to continue?"] }))] }));
}
exports.GlobalDiagramProperties = GlobalDiagramProperties;
//# sourceMappingURL=GlobalDiagramProperties.js.map