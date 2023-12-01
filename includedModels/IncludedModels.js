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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.IncludedModels = exports.EMPTY_IMPORT_NAME_NAMESPACE_IDENTIFIER = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var meta_1 = require("@kie-tools/dmn-marshaller/dist/schemas/dmn-1_2/ts-gen/meta");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Card_1 = require("@patternfly/react-core/dist/js/components/Card");
var Divider_1 = require("@patternfly/react-core/dist/js/components/Divider");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var Modal_1 = require("@patternfly/react-core/dist/js/components/Modal");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var Select_1 = require("@patternfly/react-core/dist/js/components/Select");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var Gallery_1 = require("@patternfly/react-core/dist/js/layouts/Gallery");
var cubes_icon_1 = require("@patternfly/react-icons/dist/js/icons/cubes-icon");
var path_1 = require("path");
var react_1 = require("react");
var DmnEditorContext_1 = require("../DmnEditorContext");
var Dmn15Spec_1 = require("../Dmn15Spec");
var InlineFeelNameInput_1 = require("../feel/InlineFeelNameInput");
var addImport_1 = require("../mutations/addImport");
var deleteImport_1 = require("../mutations/deleteImport");
var renameImport_1 = require("../mutations/renameImport");
var DerivedStore_1 = require("../store/DerivedStore");
var Store_1 = require("../store/Store");
var kie_1 = require("../kie/kie");
var ExternalModelLabel_1 = require("./ExternalModelLabel");
var DmnEditorDependenciesContext_1 = require("./DmnEditorDependenciesContext");
var pmml_1 = require("../pmml/pmml");
var Dmn15Spec_2 = require("../Dmn15Spec");
var importNamespaces_1 = require("./importNamespaces");
var Alert_1 = require("@patternfly/react-core/dist/js/components/Alert/Alert");
var Dropdown_1 = require("@patternfly/react-core/dist/js/components/Dropdown");
var trash_icon_1 = require("@patternfly/react-icons/dist/js/icons/trash-icon");
var useInViewSelect_1 = require("../responsiveness/useInViewSelect");
exports.EMPTY_IMPORT_NAME_NAMESPACE_IDENTIFIER = "<Default>";
var namespaceForNewImportsByFileExtension = {
    ".dmn": meta_1.ns.get(""),
    ".pmml": "https://www.dmg.org/PMML-4_4",
};
function IncludedModels() {
    var _a, _b, _c, _d;
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var thisDmn = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn; });
    var thisDmnsImports = (0, react_1.useMemo)(function () { var _a; return (_a = thisDmn.model.definitions.import) !== null && _a !== void 0 ? _a : []; }, [thisDmn.model.definitions.import]);
    var _e = (0, DmnEditorContext_1.useDmnEditor)(), externalContextDescription = _e.externalContextDescription, externalContextName = _e.externalContextName, dmnEditorRootElementRef = _e.dmnEditorRootElementRef;
    var _f = (0, DerivedStore_1.useDmnEditorDerivedStore)(), importsByNamespace = _f.importsByNamespace, allFeelVariableUniqueNames = _f.allFeelVariableUniqueNames;
    var _g = (0, DmnEditorDependenciesContext_1.useExternalModels)(), externalModelsByNamespace = _g.externalModelsByNamespace, onRequestExternalModelsAvailableToInclude = _g.onRequestExternalModelsAvailableToInclude, onRequestExternalModelByPath = _g.onRequestExternalModelByPath;
    var _h = __read((0, react_1.useState)(false), 2), isModalOpen = _h[0], setModalOpen = _h[1];
    var _j = __read((0, react_1.useState)(false), 2), isModelSelectOpen = _j[0], setModelSelectOpen = _j[1];
    var _k = __read((0, react_1.useState)(undefined), 2), selectedPath = _k[0], setSelectedPath = _k[1];
    var _l = __read((0, react_1.useState)(""), 2), importName = _l[0], setImportName = _l[1];
    var _m = __read((0, react_1.useState)(undefined), 2), selectedModel = _m[0], setSelectedModel = _m[1];
    (0, react_1.useEffect)(function () {
        if (!selectedPath) {
            return;
        }
        onRequestExternalModelByPath === null || onRequestExternalModelByPath === void 0 ? void 0 : onRequestExternalModelByPath(selectedPath).then(function (m) {
            if (m) {
                setSelectedModel(m);
            }
            else {
            }
        });
    }, [onRequestExternalModelByPath, selectedPath]);
    var openModal = (0, react_1.useCallback)(function () {
        setModalOpen(true);
    }, []);
    var cancel = (0, react_1.useCallback)(function () {
        setModalOpen(false);
        setModelSelectOpen(false);
        setSelectedPath(undefined);
        setImportName("");
    }, []);
    var add = (0, react_1.useCallback)(function () {
        if (!selectedPath ||
            !selectedModel ||
            !Dmn15Spec_1.DMN15_SPEC.IMPORT.name.isValid((0, api_1.generateUuid)(), importName, allFeelVariableUniqueNames)) {
            return;
        }
        var xmlns = namespaceForNewImportsByFileExtension[(0, path_1.extname)(selectedPath)];
        if (!xmlns) {
            throw new Error("Can't import model with an unsupported file extension: '".concat(selectedPath, "'."));
        }
        var namespace = selectedModel.type === "dmn"
            ? selectedModel.model.definitions["@_namespace"]
            : selectedModel.type === "pmml"
                ? (0, pmml_1.getPmmlNamespace)({ fileRelativePath: selectedModel.relativePath })
                : kie_1.KIE_UNKNOWN_NAMESPACE;
        setModalOpen(false);
        dmnEditorStoreApi.setState(function (state) {
            (0, addImport_1.addImport)({
                definitions: state.dmn.model.definitions,
                includedModel: {
                    xmlns: xmlns,
                    namespace: namespace,
                    name: importName,
                    locationURI: selectedModel.relativePath,
                },
            });
        });
        setTimeout(function () {
            setSelectedModel(undefined);
        }, 5000);
        cancel();
    }, [selectedPath, selectedModel, importName, allFeelVariableUniqueNames, dmnEditorStoreApi, cancel]);
    var _o = __read((0, react_1.useState)(undefined), 2), modelPaths = _o[0], setModelPaths = _o[1];
    (0, react_1.useEffect)(function () {
        onRequestExternalModelsAvailableToInclude === null || onRequestExternalModelsAvailableToInclude === void 0 ? void 0 : onRequestExternalModelsAvailableToInclude().then(function (m) {
            setModelPaths(m);
        });
    }, [isModelSelectOpen, onRequestExternalModelsAvailableToInclude]);
    var externalModelsByPath = (0, react_1.useMemo)(function () {
        return Object.entries(externalModelsByNamespace !== null && externalModelsByNamespace !== void 0 ? externalModelsByNamespace : {}).reduce(function (acc, _a) {
            var _b = __read(_a, 2), namespace = _b[0], externalModel = _b[1];
            if (!externalModel) {
                console.warn("DMN EDITOR: Could not find model with namespace '".concat(namespace, "'. Ignoring."));
                return acc;
            }
            else {
                return acc.set(externalModel.relativePath, externalModel);
            }
        }, new Map());
    }, [externalModelsByNamespace]);
    var modelPathsNotYetIncluded = (0, react_1.useMemo)(function () {
        return modelPaths &&
            modelPaths.filter(function (path) {
                var externalModel = externalModelsByPath.get(path);
                return (!externalModel ||
                    (externalModel.type === "dmn" && !importsByNamespace.get(externalModel.model.definitions["@_namespace"])) ||
                    (externalModel.type === "pmml" &&
                        !importsByNamespace.get((0, pmml_1.getPmmlNamespace)({ fileRelativePath: externalModel.relativePath }))));
            });
    }, [externalModelsByPath, importsByNamespace, modelPaths]);
    var pmmlPathsNotYetIncluded = modelPathsNotYetIncluded === null || modelPathsNotYetIncluded === void 0 ? void 0 : modelPathsNotYetIncluded.filter(function (s) { return s.endsWith(".pmml"); });
    var dmnPathsNotYetIncluded = modelPathsNotYetIncluded === null || modelPathsNotYetIncluded === void 0 ? void 0 : modelPathsNotYetIncluded.filter(function (s) { return s.endsWith(".dmn"); });
    var selectToggleRef = (0, react_1.useRef)(null);
    var inViewSelect = (0, useInViewSelect_1.useInViewSelect)(dmnEditorRootElementRef, selectToggleRef);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Modal_1.Modal, __assign({ isOpen: isModalOpen, onClose: function () { return setModalOpen(false); }, title: "Include model", variant: Modal_1.ModalVariant.large, actions: ((_a = modelPathsNotYetIncluded === null || modelPathsNotYetIncluded === void 0 ? void 0 : modelPathsNotYetIncluded.length) !== null && _a !== void 0 ? _a : 0) > 0
                    ? [
                        (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: "primary", onClick: add }, { children: "Include model" }), "confirm"),
                        (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: "link", onClick: cancel }, { children: "Cancel" }), "cancel"),
                    ]
                    : [
                        (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: "link", onClick: cancel, style: { paddingLeft: 0 } }, { children: "Cancel" }), "cancel"),
                    ] }, { children: (modelPathsNotYetIncluded && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (modelPathsNotYetIncluded.length > 0 && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("br", {}), externalContextDescription, (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsxs)(Form_1.Form, { children: [(0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Model", isRequired: true }, { children: (0, jsx_runtime_1.jsxs)(Select_1.Select, __assign({ toggleRef: selectToggleRef, maxHeight: inViewSelect.maxHeight, direction: inViewSelect.direction, menuAppendTo: document.body, variant: Select_1.SelectVariant.typeahead, typeAheadAriaLabel: "Select a model to include...", placeholderText: "Select a model to include...", onToggle: setModelSelectOpen, onClear: function () { return setSelectedPath(undefined); }, onSelect: function (e, v) {
                                                if (typeof v !== "string") {
                                                    throw new Error("Invalid path for an included model ".concat(JSON.stringify(v)));
                                                }
                                                setSelectedPath(v);
                                                setModelSelectOpen(false);
                                            }, selections: selectedPath, isOpen: isModelSelectOpen, "aria-labelledby": "Included model selector", isGrouped: true }, { children: [(0, jsx_runtime_1.jsx)(Select_1.SelectGroup, __assign({ label: "DMN" }, { children: (((_b = dmnPathsNotYetIncluded === null || dmnPathsNotYetIncluded === void 0 ? void 0 : dmnPathsNotYetIncluded.length) !== null && _b !== void 0 ? _b : 0) > 0 &&
                                                        (dmnPathsNotYetIncluded === null || dmnPathsNotYetIncluded === void 0 ? void 0 : dmnPathsNotYetIncluded.map(function (path) { return ((0, jsx_runtime_1.jsx)(Select_1.SelectOption, __assign({ description: (0, path_1.dirname)(path), value: path }, { children: (0, path_1.basename)(path) }), path)); }))) || ((0, jsx_runtime_1.jsx)(Select_1.SelectOption, __assign({ isDisabled: true, description: "", value: "" }, { children: (0, jsx_runtime_1.jsx)("i", { children: "None" }) }), "none-dmn")) }), "DMN"), (0, jsx_runtime_1.jsx)(Divider_1.Divider, {}, "divider"), (0, jsx_runtime_1.jsx)(Select_1.SelectGroup, __assign({ label: "PMML" }, { children: (((_c = pmmlPathsNotYetIncluded === null || pmmlPathsNotYetIncluded === void 0 ? void 0 : pmmlPathsNotYetIncluded.length) !== null && _c !== void 0 ? _c : 0) > 0 &&
                                                        (pmmlPathsNotYetIncluded === null || pmmlPathsNotYetIncluded === void 0 ? void 0 : pmmlPathsNotYetIncluded.map(function (path) { return ((0, jsx_runtime_1.jsx)(Select_1.SelectOption, __assign({ description: (0, path_1.dirname)(path), value: path }, { children: (0, path_1.basename)(path) }), path)); }))) || ((0, jsx_runtime_1.jsx)(Select_1.SelectOption, __assign({ isDisabled: true, description: "", value: "" }, { children: (0, jsx_runtime_1.jsx)("i", { children: "None" }) }), "none-pmml")) }), "PMML")] })) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Name" }, { children: (0, jsx_runtime_1.jsx)(InlineFeelNameInput_1.InlineFeelNameInput, { validate: Dmn15Spec_1.DMN15_SPEC.IMPORT.name.isValid, placeholder: exports.EMPTY_IMPORT_NAME_NAMESPACE_IDENTIFIER, isPlain: false, id: (0, api_1.generateUuid)(), name: importName, isReadonly: false, shouldCommitOnBlur: true, className: "pf-c-form-control", onRenamed: setImportName, allUniqueNames: allFeelVariableUniqueNames }) })), (0, jsx_runtime_1.jsx)("br", {})] })] }))) || ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (((_d = modelPaths === null || modelPaths === void 0 ? void 0 : modelPaths.length) !== null && _d !== void 0 ? _d : 0) > 0 &&
                            "All models available".concat(externalContextName ? " in '".concat(externalContextName, "' ") : " ", "are already included.")) ||
                            "There's no available models".concat(externalContextName ? " in '".concat(externalContextName, "' ") : " ", "to be included.") })) }))) || (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Loading..." }) })), thisDmnsImports.length > 0 && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(Page_1.PageSection, __assign({ style: { padding: "24px" } }, { children: [(0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ onClick: openModal, variant: Button_1.ButtonVariant.primary }, { children: "Include model" })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(Divider_1.Divider, { inset: { default: "insetMd" } }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(Gallery_1.Gallery, __assign({ hasGutter: true, minWidths: { xl: "calc(25% - 1rem)", md: "calc(33% - 1rem)", sm: "100%" } }, { children: thisDmnsImports.flatMap(function (i, index) {
                                var _a;
                                var externalModel = (_a = externalModelsByNamespace === null || externalModelsByNamespace === void 0 ? void 0 : externalModelsByNamespace[(0, importNamespaces_1.getNamespaceOfDmnImport)({ dmnImport: i })]) !== null && _a !== void 0 ? _a : (!isModalOpen && index === thisDmnsImports.length - 1 ? selectedModel : undefined);
                                return !externalModel ? ((0, jsx_runtime_1.jsx)(UnknownIncludedModelCard, { _import: i, index: index, isReadonly: false }, i["@_id"])) : ((0, jsx_runtime_1.jsx)(IncludedModelCard, { _import: i, index: index, externalModel: externalModel, isReadonly: false }, i["@_id"]));
                            }) }))] })) })), thisDmnsImports.length <= 0 && ((0, jsx_runtime_1.jsx)(Flex_1.Flex, __assign({ justifyContent: { default: "justifyContentCenter" }, style: { marginTop: "100px" } }, { children: (0, jsx_runtime_1.jsxs)(EmptyState_1.EmptyState, __assign({ style: { maxWidth: "1280px" } }, { children: [(0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateIcon, { icon: cubes_icon_1.CubesIcon }), (0, jsx_runtime_1.jsx)(Title_1.Title, __assign({ size: "lg", headingLevel: "h4" }, { children: "No external models have been included." })), (0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateBody, { children: "Included models are externally defined models that have been added to this DMN file. Included DMN models have their decision requirements diagram (DRD) or decision requirements graph (DRG) components available in this DMN file. Included PMML models can be invoked through DMN Boxed Functions, usually inside Business Knowledge Model nodes (BKMs)" }), (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ onClick: openModal, variant: Button_1.ButtonVariant.primary }, { children: "Include model" }))] })) })))] }));
}
exports.IncludedModels = IncludedModels;
function IncludedModelCard(_a) {
    var _b;
    var _import = _a._import, index = _a.index, externalModel = _a.externalModel, isReadonly = _a.isReadonly;
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var _c = (0, DmnEditorContext_1.useDmnEditor)(), onRequestToJumpToPath = _c.onRequestToJumpToPath, onRequestToResolvePath = _c.onRequestToResolvePath;
    var remove = (0, react_1.useCallback)(function (index) {
        dmnEditorStoreApi.setState(function (state) {
            (0, deleteImport_1.deleteImport)({ definitions: state.dmn.model.definitions, index: index });
        });
    }, [dmnEditorStoreApi]);
    var _d = (0, DerivedStore_1.useDmnEditorDerivedStore)(), allFeelVariableUniqueNames = _d.allFeelVariableUniqueNames, allTopLevelDataTypesByFeelName = _d.allTopLevelDataTypesByFeelName;
    var externalModelsByNamespace = (0, DmnEditorDependenciesContext_1.useExternalModels)().externalModelsByNamespace;
    var externalDmnModels = (0, react_1.useMemo)(function () {
        return Object.entries(externalModelsByNamespace !== null && externalModelsByNamespace !== void 0 ? externalModelsByNamespace : {}).reduce(function (acc, _a) {
            var _b = __read(_a, 2), namespace = _b[0], externalModel = _b[1];
            if (!externalModel) {
                console.warn("DMN EDITOR: Could not find model with namespace '".concat(namespace, "'. Ignoring."));
                return acc;
            }
            else if (externalModel.type === "dmn") {
                return acc.set(namespace, externalModel.model);
            }
            else {
                return acc;
            }
        }, new Map());
    }, [externalModelsByNamespace]);
    var rename = (0, react_1.useCallback)(function (newName) {
        dmnEditorStoreApi.setState(function (state) {
            (0, renameImport_1.renameImport)({
                definitions: state.dmn.model.definitions,
                index: index,
                newName: newName,
                allTopLevelDataTypesByFeelName: allTopLevelDataTypesByFeelName,
                externalDmnModels: externalDmnModels,
            });
        });
    }, [allTopLevelDataTypesByFeelName, dmnEditorStoreApi, index]);
    var extension = (0, react_1.useMemo)(function () {
        if (Dmn15Spec_2.allDmnImportNamespaces.has(_import["@_importType"])) {
            return "dmn";
        }
        else if (pmml_1.allPmmlImportNamespaces.has(_import["@_importType"])) {
            return "pmml";
        }
        else {
            return "Unknwon";
        }
    }, [_import]);
    var title = (0, react_1.useMemo)(function () {
        if (externalModel.type === "dmn") {
            return externalModel.model.definitions["@_name"];
        }
        else if (externalModel.type === "pmml") {
            return "";
        }
    }, [externalModel.model, externalModel.type]);
    var pathDisplayed = (_b = onRequestToResolvePath === null || onRequestToResolvePath === void 0 ? void 0 : onRequestToResolvePath(externalModel.relativePath)) !== null && _b !== void 0 ? _b : externalModel.relativePath;
    var _e = __read((0, react_1.useState)(false), 2), isCardActionsOpen = _e[0], setCardActionsOpen = _e[1];
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, __assign({ isHoverable: true, isCompact: false }, { children: [(0, jsx_runtime_1.jsxs)(Card_1.CardHeader, { children: [(0, jsx_runtime_1.jsx)(Card_1.CardActions, { children: (0, jsx_runtime_1.jsx)(Dropdown_1.Dropdown, { toggle: (0, jsx_runtime_1.jsx)(Dropdown_1.KebabToggle, { id: "toggle-kebab-top-level", onToggle: setCardActionsOpen }), onSelect: function () { return setCardActionsOpen(false); }, isOpen: isCardActionsOpen, menuAppendTo: document.body, isPlain: true, position: "right", dropdownItems: [
                                (0, jsx_runtime_1.jsx)(React.Fragment, { children: !isReadonly && ((0, jsx_runtime_1.jsx)(Dropdown_1.DropdownItem, __assign({ style: { minWidth: "240px" }, icon: (0, jsx_runtime_1.jsx)(trash_icon_1.TrashIcon, {}), onClick: function () {
                                            if (isReadonly) {
                                                return;
                                            }
                                            remove(index);
                                        } }, { children: "Remove" }))) }, "remove-fragment"),
                            ] }) }), (0, jsx_runtime_1.jsxs)(Card_1.CardTitle, { children: [(0, jsx_runtime_1.jsx)(InlineFeelNameInput_1.InlineFeelNameInput, { placeholder: exports.EMPTY_IMPORT_NAME_NAMESPACE_IDENTIFIER, isPlain: true, allUniqueNames: allFeelVariableUniqueNames, id: _import["@_id"], name: _import["@_name"], isReadonly: false, shouldCommitOnBlur: true, onRenamed: rename, validate: Dmn15Spec_1.DMN15_SPEC.IMPORT.name.isValid }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(ExternalModelLabel_1.ExternalModelLabel, { extension: extension }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {})] })] }), (0, jsx_runtime_1.jsxs)(Card_1.CardBody, { children: ["".concat(title), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("small", { children: (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.link, style: { paddingLeft: 0, whiteSpace: "break-spaces", textAlign: "left" }, onClick: function () {
                                onRequestToJumpToPath === null || onRequestToJumpToPath === void 0 ? void 0 : onRequestToJumpToPath(externalModel.relativePath);
                            } }, { children: (0, jsx_runtime_1.jsx)("i", { children: pathDisplayed }) })) })] })] })));
}
function UnknownIncludedModelCard(_a) {
    var _b;
    var _import = _a._import, index = _a.index, isReadonly = _a.isReadonly;
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var remove = (0, react_1.useCallback)(function (index) {
        dmnEditorStoreApi.setState(function (state) {
            (0, deleteImport_1.deleteImport)({ definitions: state.dmn.model.definitions, index: index });
        });
    }, [dmnEditorStoreApi]);
    var _c = (0, DerivedStore_1.useDmnEditorDerivedStore)(), allFeelVariableUniqueNames = _c.allFeelVariableUniqueNames, allTopLevelDataTypesByFeelName = _c.allTopLevelDataTypesByFeelName;
    var externalModelsByNamespace = (0, DmnEditorDependenciesContext_1.useExternalModels)().externalModelsByNamespace;
    var externalDmnModels = (0, react_1.useMemo)(function () {
        return Object.entries(externalModelsByNamespace !== null && externalModelsByNamespace !== void 0 ? externalModelsByNamespace : {}).reduce(function (acc, _a) {
            var _b = __read(_a, 2), namespace = _b[0], externalModel = _b[1];
            if (!externalModel) {
                console.warn("DMN EDITOR: Could not find model with namespace '".concat(namespace, "'. Ignoring."));
                return acc;
            }
            else if (externalModel.type === "dmn") {
                return acc.set(namespace, externalModel.model);
            }
            else {
                return acc;
            }
        }, new Map());
    }, [externalModelsByNamespace]);
    var rename = (0, react_1.useCallback)(function (newName) {
        dmnEditorStoreApi.setState(function (state) {
            (0, renameImport_1.renameImport)({
                definitions: state.dmn.model.definitions,
                index: index,
                newName: newName,
                allTopLevelDataTypesByFeelName: allTopLevelDataTypesByFeelName,
                externalDmnModels: externalDmnModels,
            });
        });
    }, [allTopLevelDataTypesByFeelName, dmnEditorStoreApi, index]);
    var extension = (0, react_1.useMemo)(function () {
        if (Dmn15Spec_2.allDmnImportNamespaces.has(_import["@_importType"])) {
            return "dmn";
        }
        else if (pmml_1.allPmmlImportNamespaces.has(_import["@_importType"])) {
            return "pmml";
        }
        else {
            return "Unknwon";
        }
    }, [_import]);
    var _d = __read((0, react_1.useState)(false), 2), isCardActionsOpen = _d[0], setCardActionsOpen = _d[1];
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, __assign({ isHoverable: true, isCompact: false }, { children: [(0, jsx_runtime_1.jsxs)(Card_1.CardHeader, { children: [(0, jsx_runtime_1.jsx)(Card_1.CardActions, { children: (0, jsx_runtime_1.jsx)(Dropdown_1.Dropdown, { toggle: (0, jsx_runtime_1.jsx)(Dropdown_1.KebabToggle, { id: "toggle-kebab-top-level", onToggle: setCardActionsOpen }), onSelect: function () { return setCardActionsOpen(false); }, isOpen: isCardActionsOpen, menuAppendTo: document.body, isPlain: true, position: "right", dropdownItems: [
                                (0, jsx_runtime_1.jsx)(React.Fragment, { children: !isReadonly && ((0, jsx_runtime_1.jsx)(Dropdown_1.DropdownItem, __assign({ style: { minWidth: "240px" }, icon: (0, jsx_runtime_1.jsx)(trash_icon_1.TrashIcon, {}), onClick: function () {
                                            if (isReadonly) {
                                                return;
                                            }
                                            remove(index);
                                        } }, { children: "Remove" }))) }, "remove-fragment"),
                            ] }) }), (0, jsx_runtime_1.jsxs)(Card_1.CardTitle, { children: [(0, jsx_runtime_1.jsx)(InlineFeelNameInput_1.InlineFeelNameInput, { placeholder: exports.EMPTY_IMPORT_NAME_NAMESPACE_IDENTIFIER, isPlain: true, allUniqueNames: allFeelVariableUniqueNames, id: _import["@_id"], name: _import["@_name"], isReadonly: false, shouldCommitOnBlur: true, onRenamed: rename, validate: Dmn15Spec_1.DMN15_SPEC.IMPORT.name.isValid }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(ExternalModelLabel_1.ExternalModelLabel, { extension: extension }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {})] })] }), (0, jsx_runtime_1.jsx)(Card_1.CardBody, { children: (0, jsx_runtime_1.jsxs)(Alert_1.Alert, __assign({ title: "External model not found.", isInline: true, variant: Alert_1.AlertVariant.danger }, { children: [(0, jsx_runtime_1.jsx)(Divider_1.Divider, { style: { marginTop: "16px" } }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("b", { children: "Namespace:" }), "\u00A0", _import["@_namespace"]] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("b", { children: "URI:" }), "\u00A0", (_b = _import["@_locationURI"]) !== null && _b !== void 0 ? _b : (0, jsx_runtime_1.jsx)("i", { children: "None" })] })] })) })] })));
}
//# sourceMappingURL=IncludedModels.js.map