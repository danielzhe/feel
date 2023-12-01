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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTypes = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Drawer_1 = require("@patternfly/react-core/dist/js/components/Drawer");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var infrastructure_icon_1 = require("@patternfly/react-icons/dist/js/icons/infrastructure-icon");
var plus_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/plus-circle-icon");
var Store_1 = require("../store/Store");
var DataTypesEmptyState_1 = require("./DataTypesEmptyState");
var DataTypePanel_1 = require("./DataTypePanel");
var DataTypeSpec_1 = require("./DataTypeSpec");
var DataTypeName_1 = require("./DataTypeName");
var DerivedStore_1 = require("../store/DerivedStore");
var Label_1 = require("@patternfly/react-core/dist/js/components/Label");
var Dmn15Spec_1 = require("../Dmn15Spec");
var InlineFeelNameInput_1 = require("../feel/InlineFeelNameInput");
var Dropdown_1 = require("@patternfly/react-core/dist/js/components/Dropdown");
var paste_icon_1 = require("@patternfly/react-icons/dist/js/icons/paste-icon");
var InputGroup_1 = require("@patternfly/react-core/dist/js/components/InputGroup");
var SearchInput_1 = require("@patternfly/react-core/dist/js/components/SearchInput");
var Clipboard_1 = require("../clipboard/Clipboard");
var dmnIdRandomizer_1 = require("../idRandomizer/dmnIdRandomizer");
var addTopLevelItemDefinition_1 = require("../mutations/addTopLevelItemDefinition");
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
function DataTypes() {
    var thisDmnsNamespace = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn.model.definitions["@_namespace"]; });
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var activeItemDefinitionId = (0, Store_1.useDmnEditorStore)(function (s) { return s.dataTypesEditor; }).activeItemDefinitionId;
    var _a = __read((0, react_1.useState)(""), 2), filter = _a[0], setFilter = _a[1];
    var _b = (0, DerivedStore_1.useDmnEditorDerivedStore)(), allDataTypesById = _b.allDataTypesById, dataTypesTree = _b.dataTypesTree, allTopLevelItemDefinitionUniqueNames = _b.allTopLevelItemDefinitionUniqueNames;
    var activeDataType = (0, react_1.useMemo)(function () {
        return activeItemDefinitionId ? allDataTypesById.get(activeItemDefinitionId) : undefined;
    }, [activeItemDefinitionId, allDataTypesById]);
    var filteredTree = (0, react_1.useMemo)(function () {
        return dataTypesTree.filter(function (_a) {
            var dataType = _a.itemDefinition;
            return dataType["@_name"].toLowerCase().includes(filter.toLowerCase());
        });
    }, [filter, dataTypesTree]);
    var editItemDefinition = (0, react_1.useCallback)(function (id, consumer) {
        dmnEditorStoreApi.setState(function (state) {
            var _a;
            var _b;
            var _c = (0, DataTypeSpec_1.findDataTypeById)({
                definitions: state.dmn.model.definitions,
                itemDefinitionId: id,
                allDataTypesById: allDataTypesById,
            }), itemDefinition = _c.itemDefinition, items = _c.items, index = _c.index;
            (_a = (_b = state.dmn.model.definitions).itemDefinition) !== null && _a !== void 0 ? _a : (_b.itemDefinition = []);
            consumer(itemDefinition, items, index, state.dmn.model.definitions.itemDefinition, state);
        });
    }, [allDataTypesById, dmnEditorStoreApi]);
    var addTopLevelItemDefinition = (0, react_1.useCallback)(function (partial) {
        dmnEditorStoreApi.setState(function (state) {
            var newItemDefinition = (0, addTopLevelItemDefinition_1.addTopLevelItemDefinition)({
                definitions: state.dmn.model.definitions,
                partial: partial,
            });
            state.dataTypesEditor.activeItemDefinitionId = newItemDefinition["@_id"];
            state.focus.consumableId = newItemDefinition["@_id"];
        });
    }, [dmnEditorStoreApi]);
    var pasteTopLevelItemDefinition = (0, react_1.useCallback)(function () {
        navigator.clipboard.readText().then(function (text) {
            var e_1, _a;
            var clipboard = (0, Clipboard_1.getClipboard)(text, Clipboard_1.DMN_EDITOR_DATA_TYPES_CLIPBOARD_MIME_TYPE);
            if (!clipboard) {
                return;
            }
            (0, dmnIdRandomizer_1.getNewDmnIdRandomizer)()
                .ack({
                json: clipboard.itemDefinitions,
                type: "DMN15__tDefinitions",
                attr: "itemDefinition",
            })
                .randomize();
            try {
                for (var _b = __values(clipboard.itemDefinitions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var itemDefinition = _c.value;
                    addTopLevelItemDefinition(itemDefinition);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }, [addTopLevelItemDefinition]);
    var _c = __read((0, react_1.useState)(false), 2), isAddDataTypeDropdownOpen = _c[0], setAddDataTypeDropdownOpen = _c[1];
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (dataTypesTree.length <= 0 && ((0, jsx_runtime_1.jsx)(DataTypesEmptyState_1.DataTypesEmptyState, { onAdd: function () { return addTopLevelItemDefinition({ typeRef: { __$$text: api_1.DmnBuiltInDataType.Undefined } }); }, onPaste: pasteTopLevelItemDefinition }))) || ((0, jsx_runtime_1.jsx)(Drawer_1.Drawer, __assign({ isExpanded: true, isInline: true, position: "left", className: "kie-dmn-editor--data-types-container" }, { children: (0, jsx_runtime_1.jsx)(Drawer_1.DrawerContent, __assign({ panelContent: (0, jsx_runtime_1.jsxs)(Drawer_1.DrawerPanelContent, __assign({ isResizable: true, minSize: "300px", defaultSize: "400px" }, { children: [(0, jsx_runtime_1.jsx)(Flex_1.Flex, __assign({ justifyContent: { default: "justifyContentSpaceBetween" }, alignItems: { default: "alignItemsCenter" }, className: "kie-dmn-editor--data-types-filter kie-dmn-editor--sticky-top-glass-header" }, { children: (0, jsx_runtime_1.jsxs)(InputGroup_1.InputGroup, { children: [(0, jsx_runtime_1.jsx)(SearchInput_1.SearchInput, { placeholder: "Filter...", value: filter, onChange: function (_event, value) { return setFilter(value); }, onClear: function () { return setFilter(""); } }), (0, jsx_runtime_1.jsx)(Dropdown_1.Dropdown, { onSelect: function () { return setAddDataTypeDropdownOpen(false); }, menuAppendTo: document.body, toggle: (0, jsx_runtime_1.jsx)(Dropdown_1.DropdownToggle, { id: "add-data-type-toggle", splitButtonItems: [
                                                (0, jsx_runtime_1.jsx)(Dropdown_1.DropdownToggleAction, __assign({ "aria-label": "Add Data Type", onClick: function () {
                                                        return addTopLevelItemDefinition({ typeRef: { __$$text: api_1.DmnBuiltInDataType.Undefined } });
                                                    } }, { children: (0, jsx_runtime_1.jsx)(plus_circle_icon_1.PlusCircleIcon, {}) }), "add-data-type-action"),
                                            ], splitButtonVariant: "action", onToggle: setAddDataTypeDropdownOpen }), position: Dropdown_1.DropdownPosition.right, isOpen: isAddDataTypeDropdownOpen, dropdownItems: [
                                            (0, jsx_runtime_1.jsx)(Dropdown_1.DropdownItem, __assign({ onClick: function () { return pasteTopLevelItemDefinition(); }, style: { minWidth: "240px" }, icon: (0, jsx_runtime_1.jsx)(paste_icon_1.PasteIcon, {}) }, { children: "Paste" }), "paste"),
                                        ] })] }) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--data-types-nav" }, { children: filteredTree.map(function (_a) {
                                var _b;
                                var namespace = _a.namespace, itemDefinition = _a.itemDefinition, feelName = _a.feelName;
                                var isActive = itemDefinition["@_id"] === (activeDataType === null || activeDataType === void 0 ? void 0 : activeDataType.itemDefinition["@_id"]) ||
                                    ((_b = activeDataType === null || activeDataType === void 0 ? void 0 : activeDataType.parents.has(itemDefinition["@_id"])) !== null && _b !== void 0 ? _b : false);
                                return ((0, jsx_runtime_1.jsxs)(Flex_1.Flex, __assign({ flexWrap: { default: "nowrap" }, spaceItems: { default: "spaceItemsNone" }, onClick: function () {
                                        return dmnEditorStoreApi.setState(function (state) {
                                            state.dataTypesEditor.activeItemDefinitionId = itemDefinition["@_id"];
                                        });
                                    }, justifyContent: { default: "justifyContentFlexStart" }, alignItems: { default: "alignItemsCenter" }, className: "kie-dmn-editor--data-types-nav-item ".concat(isActive ? "active" : "") }, { children: [(0, jsx_runtime_1.jsx)(infrastructure_icon_1.InfrastructureIcon, { style: { display: "inline", opacity: (0, DataTypeSpec_1.isStruct)(itemDefinition) ? 1 : 0, minWidth: "1em" } }), (namespace === thisDmnsNamespace && ((0, jsx_runtime_1.jsx)(DataTypeName_1.DataTypeName, { relativeToNamespace: thisDmnsNamespace, isReadonly: namespace !== thisDmnsNamespace, itemDefinition: itemDefinition, isActive: isActive, editMode: "double-click", enableAutoFocusing: false, allUniqueNames: allTopLevelItemDefinitionUniqueNames }))) || ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Label_1.Label, __assign({ style: { marginLeft: "8px" } }, { children: "External" })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--editable-node-name-input top-left grow", style: Dmn15Spec_1.DMN15_SPEC.namedElement.isValidName(itemDefinition["@_id"], feelName, allTopLevelItemDefinitionUniqueNames)
                                                        ? {}
                                                        : InlineFeelNameInput_1.invalidInlineFeelNameStyle }, { children: "".concat(feelName) }))] }))] }), itemDefinition["@_id"]));
                            }) }))] })) }, { children: (0, jsx_runtime_1.jsx)(Drawer_1.DrawerContentBody, { children: activeDataType && ((0, jsx_runtime_1.jsx)(DataTypePanel_1.DataTypePanel, { isReadonly: activeDataType.namespace !== thisDmnsNamespace, dataType: activeDataType, allDataTypesById: allDataTypesById, editItemDefinition: editItemDefinition })) }) })) }))) }));
}
exports.DataTypes = DataTypes;
//# sourceMappingURL=DataTypes.js.map