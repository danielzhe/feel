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
exports.DataTypePanel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Divider_1 = require("@patternfly/react-core/dist/js/components/Divider");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var Switch_1 = require("@patternfly/react-core/dist/js/components/Switch");
var TextArea_1 = require("@patternfly/react-core/dist/js/components/TextArea");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var React = __importStar(require("react"));
var react_1 = require("react");
var Store_1 = require("../store/Store");
var TypeRefSelector_1 = require("./TypeRefSelector");
var Dropdown_1 = require("@patternfly/react-core/dist/js/components/Dropdown");
var DataTypeName_1 = require("./DataTypeName");
var ItemComponentsTable_1 = require("./ItemComponentsTable");
var DataTypeSpec_1 = require("./DataTypeSpec");
var trash_icon_1 = require("@patternfly/react-icons/dist/js/icons/trash-icon");
var Label_1 = require("@patternfly/react-core/dist/js/components/Label");
var copy_icon_1 = require("@patternfly/react-icons/dist/js/icons/copy-icon");
var DerivedStore_1 = require("../store/DerivedStore");
var buildFeelQName_1 = require("../feel/buildFeelQName");
var Clipboard_1 = require("../clipboard/Clipboard");
var Constraints_1 = require("./Constraints");
var immer_1 = require("immer");
var BuiltInFeelTypes_1 = require("./BuiltInFeelTypes");
var DmnEditorContext_1 = require("../DmnEditorContext");
var parseFeelQName_1 = require("../feel/parseFeelQName");
var DmnEditorDependenciesContext_1 = require("../includedModels/DmnEditorDependenciesContext");
function DataTypePanel(_a) {
    var _b, _c;
    var isReadonly = _a.isReadonly, dataType = _a.dataType, allDataTypesById = _a.allDataTypesById, editItemDefinition = _a.editItemDefinition;
    var thisDmn = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn; });
    var thisDmnsNamespace = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn.model.definitions["@_namespace"]; });
    var toggleStruct = (0, react_1.useCallback)(function (isChecked) {
        if (isReadonly) {
            return;
        }
        editItemDefinition(dataType.itemDefinition["@_id"], function (itemDefinition) {
            if (isChecked) {
                itemDefinition.typeRef = undefined;
                itemDefinition.itemComponent = [];
                itemDefinition.allowedValues = undefined;
            }
            else {
                itemDefinition.typeRef = { __$$text: api_1.DmnBuiltInDataType.Any };
                itemDefinition.itemComponent = undefined;
            }
        });
    }, [dataType.itemDefinition, editItemDefinition, isReadonly]);
    var toggleCollection = (0, react_1.useCallback)(function (isChecked) {
        if (isReadonly) {
            return;
        }
        editItemDefinition(dataType.itemDefinition["@_id"], function (itemDefinition) {
            itemDefinition["@_isCollection"] = isChecked;
            itemDefinition.allowedValues = undefined;
        });
    }, [dataType.itemDefinition, editItemDefinition, isReadonly]);
    var changeTypeRef = (0, react_1.useCallback)(function (typeRef) {
        if (isReadonly) {
            return;
        }
        editItemDefinition(dataType.itemDefinition["@_id"], function (itemDefinition) {
            var _a;
            itemDefinition.typeRef = { __$$text: typeRef };
            var originalItemDefinition = (0, immer_1.original)(itemDefinition);
            if (((_a = originalItemDefinition === null || originalItemDefinition === void 0 ? void 0 : originalItemDefinition.typeRef) === null || _a === void 0 ? void 0 : _a.__$$text) !== typeRef) {
                itemDefinition.allowedValues = undefined;
            }
        });
    }, [dataType.itemDefinition, editItemDefinition, isReadonly]);
    var changeDescription = (0, react_1.useCallback)(function (newDescription) {
        if (isReadonly) {
            return;
        }
        editItemDefinition(dataType.itemDefinition["@_id"], function (itemDefinition) {
            itemDefinition.description = { __$$text: newDescription };
        });
    }, [dataType.itemDefinition, editItemDefinition, isReadonly]);
    var parents = (0, react_1.useMemo)(function () {
        var parents = [];
        var cur = dataType;
        while (cur.parentId) {
            var p = allDataTypesById.get(cur.parentId);
            parents.unshift(p);
            cur = p;
        }
        return parents;
    }, [dataType, allDataTypesById]);
    var addItemComponent = (0, react_1.useCallback)(function (id, how, partial) {
        if (isReadonly) {
            return;
        }
        editItemDefinition(id, function (itemDefinition, items, index, all, state) {
            var _a;
            var newItemDefinition = (0, DataTypeSpec_1.getNewItemDefinition)(partial);
            (_a = itemDefinition.itemComponent) !== null && _a !== void 0 ? _a : (itemDefinition.itemComponent = []);
            itemDefinition.itemComponent[how](newItemDefinition);
            state.focus.consumableId = newItemDefinition["@_id"];
        });
    }, [editItemDefinition, isReadonly]);
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var _d = __read((0, react_1.useState)(undefined), 2), dropdownOpenFor = _d[0], setDropdownOpenFor = _d[1];
    var _e = __read((0, react_1.useState)(false), 2), topLevelDropdownOpen = _e[0], setTopLevelDropdownOpen = _e[1];
    var _f = (0, DerivedStore_1.useDmnEditorDerivedStore)(), importsByNamespace = _f.importsByNamespace, allTopLevelItemDefinitionUniqueNames = _f.allTopLevelItemDefinitionUniqueNames, allTopLevelDataTypesByFeelName = _f.allTopLevelDataTypesByFeelName;
    var allUniqueNames = (0, react_1.useMemo)(function () {
        var _a;
        return !dataType.parentId
            ? allTopLevelItemDefinitionUniqueNames
            : ((_a = allDataTypesById.get(dataType.parentId).itemDefinition.itemComponent) !== null && _a !== void 0 ? _a : []).reduce(function (acc, s) { return acc.set(s["@_name"], s["@_id"]); }, new Map(__spreadArray([], __read(BuiltInFeelTypes_1.builtInFeelTypeNames), false).map(function (s) { return [s, s]; })));
    }, [allDataTypesById, allTopLevelItemDefinitionUniqueNames, dataType.parentId]);
    var dmnEditorRootElementRef = (0, DmnEditorContext_1.useDmnEditor)().dmnEditorRootElementRef;
    var externalModelsByNamespace = (0, DmnEditorDependenciesContext_1.useExternalModels)().externalModelsByNamespace;
    var resolveTypeRef = (0, react_1.useCallback)(function (typeRef) {
        var _a;
        if (!typeRef) {
            return typeRef;
        }
        if (BuiltInFeelTypes_1.builtInFeelTypeNames.has(typeRef)) {
            return typeRef;
        }
        if (dataType.namespace === thisDmnsNamespace) {
            return typeRef;
        }
        var externalModel = externalModelsByNamespace === null || externalModelsByNamespace === void 0 ? void 0 : externalModelsByNamespace[dataType.namespace];
        if ((externalModel === null || externalModel === void 0 ? void 0 : externalModel.type) !== "dmn") {
            throw new Error("DMN EDITOR: Can't find external DMN model for known external Data Type.");
        }
        var parsedTypeRefFeelQName = (0, parseFeelQName_1.parseFeelQName)(typeRef);
        var possibleNamespaces = __spreadArray(__spreadArray([], __read(((_a = externalModel.model.definitions.import) !== null && _a !== void 0 ? _a : []).flatMap(function (i) { var _a; return i["@_name"] === ((_a = parsedTypeRefFeelQName.importName) !== null && _a !== void 0 ? _a : "") ? i["@_namespace"] : []; })), false), [
            dataType.namespace,
        ], false);
        return possibleNamespaces.reduce(function (acc, namespace) {
            var _a, _b;
            var thisDmnsImport = importsByNamespace.get(namespace);
            if (!thisDmnsImport) {
                return acc;
            }
            var typeRefQName = (0, parseFeelQName_1.buildFeelQName)({
                type: "feel-qname",
                importName: thisDmnsImport["@_name"],
                localPart: parsedTypeRefFeelQName.localPart,
            });
            return (_b = (_a = allTopLevelDataTypesByFeelName.get(typeRefQName)) === null || _a === void 0 ? void 0 : _a.feelName) !== null && _b !== void 0 ? _b : acc;
        }, (0, parseFeelQName_1.buildFeelQName)({
            type: "feel-qname",
            importName: "?",
            localPart: parsedTypeRefFeelQName.localPart,
        }));
    }, [
        allTopLevelDataTypesByFeelName,
        dataType.namespace,
        externalModelsByNamespace,
        importsByNamespace,
        thisDmnsNamespace,
    ]);
    var resolvedTypeRef = resolveTypeRef((_b = dataType.itemDefinition.typeRef) === null || _b === void 0 ? void 0 : _b.__$$text);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Flex_1.Flex, __assign({ className: "kie-dmn-editor--sticky-top-glass-header kie-dmn-editor--data-type-panel-header ".concat(parents.length > 0 || dataType.namespace !== thisDmnsNamespace
                    ? "kie-dmn-editor--data-type-panel-header-nested-or-external"
                    : ""), justifyContent: { default: "justifyContentSpaceBetween" }, direction: { default: "row" } }, { children: [(0, jsx_runtime_1.jsx)(Flex_1.FlexItem, { children: (0, jsx_runtime_1.jsxs)(Flex_1.Flex, __assign({ direction: { default: "column" } }, { children: [(0, jsx_runtime_1.jsx)(Flex_1.FlexItem, { children: (0, jsx_runtime_1.jsxs)(Flex_1.Flex, __assign({ direction: { default: "row" } }, { children: [dataType.namespace !== thisDmnsNamespace && ((0, jsx_runtime_1.jsx)(Flex_1.FlexItem, { children: (0, jsx_runtime_1.jsx)(Label_1.Label, { children: "External" }) })), parents.length > 0 && ((0, jsx_runtime_1.jsx)(Flex_1.FlexItem, __assign({ className: "kie-dmn-editor--data-type-parents" }, { children: parents.map(function (p) { return ((0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.link, onClick: function () {
                                                        dmnEditorStoreApi.setState(function (state) {
                                                            state.dataTypesEditor.activeItemDefinitionId = p.itemDefinition["@_id"];
                                                        });
                                                    } }, { children: (0, buildFeelQName_1.buildFeelQNameFromNamespace)({
                                                        namedElement: p.itemDefinition,
                                                        importsByNamespace: importsByNamespace,
                                                        namespace: p.namespace,
                                                        relativeToNamespace: !p.parentId ? thisDmnsNamespace : p.namespace,
                                                    }).full }), p.itemDefinition["@_id"])); }) })))] })) }), (0, jsx_runtime_1.jsx)(Flex_1.FlexItem, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--data-types-title" }, { children: (0, jsx_runtime_1.jsx)(DataTypeName_1.DataTypeName, { relativeToNamespace: !dataType.parentId ? thisDmnsNamespace : dataType.namespace, itemDefinition: dataType.itemDefinition, isActive: false, editMode: "hover", isReadonly: dataType.namespace !== thisDmnsNamespace, allUniqueNames: allUniqueNames }) })) })] })) }), (0, jsx_runtime_1.jsx)(Flex_1.FlexItem, { children: (0, jsx_runtime_1.jsx)(Dropdown_1.Dropdown, { toggle: (0, jsx_runtime_1.jsx)(Dropdown_1.KebabToggle, { id: "toggle-kebab-top-level", onToggle: setTopLevelDropdownOpen }), onSelect: function () { return setTopLevelDropdownOpen(false); }, isOpen: topLevelDropdownOpen, menuAppendTo: document.body, isPlain: true, position: "right", dropdownItems: [
                                (0, jsx_runtime_1.jsx)(Dropdown_1.DropdownItem, __assign({ isDisabled: true, icon: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) }, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("b", { children: "ID: " }), dataType.itemDefinition["@_id"]] }) }), "id"),
                                (0, jsx_runtime_1.jsx)(Dropdown_1.DropdownSeparator, { style: { marginBottom: "8px" } }, "separator-1"),
                                (0, jsx_runtime_1.jsx)(Dropdown_1.DropdownItem, __assign({ icon: (0, jsx_runtime_1.jsx)(copy_icon_1.CopyIcon, {}), onClick: function () {
                                        var clipboard = (0, Clipboard_1.buildClipboardFromDataType)(dataType, thisDmnsNamespace);
                                        navigator.clipboard.writeText(JSON.stringify(clipboard));
                                    } }, { children: "Copy" }), "copy"),
                                (0, jsx_runtime_1.jsx)(Dropdown_1.DropdownSeparator, {}, "separator-2"),
                                (0, jsx_runtime_1.jsx)(React.Fragment, { children: !isReadonly && ((0, jsx_runtime_1.jsx)(Dropdown_1.DropdownItem, __assign({ style: { minWidth: "240px" }, icon: (0, jsx_runtime_1.jsx)(trash_icon_1.TrashIcon, {}), onClick: function () {
                                            if (isReadonly) {
                                                return;
                                            }
                                            editItemDefinition(dataType.itemDefinition["@_id"], function (_, items) {
                                                items === null || items === void 0 ? void 0 : items.splice(dataType.index, 1);
                                            });
                                            dmnEditorStoreApi.setState(function (state) {
                                                var _a, _b, _c;
                                                state.dataTypesEditor.activeItemDefinitionId =
                                                    (_a = dataType.parentId) !== null && _a !== void 0 ? _a : (_c = (_b = state.dmn.model.definitions.itemDefinition) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c["@_id"];
                                            });
                                        } }, { children: "Remove" }))) }, "remove-fragment"),
                            ] }) })] })), (0, jsx_runtime_1.jsxs)(Page_1.PageSection, __assign({ style: { padding: "24px" } }, { children: [(0, jsx_runtime_1.jsx)(TextArea_1.TextArea, { isDisabled: isReadonly, value: (_c = dataType.itemDefinition.description) === null || _c === void 0 ? void 0 : _c.__$$text, onChange: changeDescription, placeholder: "Enter a description...", resizeOrientation: "vertical", "aria-label": "Data type description" }, dataType.itemDefinition["@_id"]), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(Divider_1.Divider, { inset: { default: "insetMd" } }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(Switch_1.Switch, { label: "Is collection?", isChecked: !!dataType.itemDefinition["@_isCollection"], onChange: toggleCollection }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(Switch_1.Switch, { label: "Is struct?", isChecked: (0, DataTypeSpec_1.isStruct)(dataType.itemDefinition), onChange: toggleStruct }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(Divider_1.Divider, { inset: { default: "insetMd" } }), (0, jsx_runtime_1.jsx)("br", {}), !(0, DataTypeSpec_1.isStruct)(dataType.itemDefinition) && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Title_1.Title, __assign({ size: "md", headingLevel: "h4" }, { children: "Type" })), (0, jsx_runtime_1.jsx)(TypeRefSelector_1.TypeRefSelector, { heightRef: dmnEditorRootElementRef, isDisabled: isReadonly, typeRef: resolvedTypeRef, onChange: changeTypeRef }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(Title_1.Title, __assign({ size: "md", headingLevel: "h4" }, { children: "Constraints" })), (0, jsx_runtime_1.jsx)(Constraints_1.Constraints, { isReadonly: isReadonly, itemDefinition: dataType.itemDefinition, editItemDefinition: editItemDefinition })] })), (0, DataTypeSpec_1.isStruct)(dataType.itemDefinition) && ((0, jsx_runtime_1.jsx)(ItemComponentsTable_1.ItemComponentsTable, { isReadonly: isReadonly, addItemComponent: addItemComponent, allDataTypesById: allDataTypesById, parent: dataType, editItemDefinition: editItemDefinition, dropdownOpenFor: dropdownOpenFor, setDropdownOpenFor: setDropdownOpenFor, resolveTypeRef: resolveTypeRef }))] }))] }));
}
exports.DataTypePanel = DataTypePanel;
//# sourceMappingURL=DataTypePanel.js.map