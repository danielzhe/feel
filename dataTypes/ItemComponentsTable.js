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
exports.ItemComponentsTable = exports.STARTING_BRIGHTNESS_LEVEL_IN_PERCENTAGE = exports.BRIGHTNESS_DECREASE_STEP_IN_PERCENTAGE_PER_NESTING_LEVEL = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Switch_1 = require("@patternfly/react-core/dist/js/components/Switch");
var copy_icon_1 = require("@patternfly/react-icons/dist/js/icons/copy-icon");
var cut_icon_1 = require("@patternfly/react-icons/dist/js/icons/cut-icon");
var paste_icon_1 = require("@patternfly/react-icons/dist/js/icons/paste-icon");
var plus_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/plus-circle-icon");
var React = __importStar(require("react"));
var react_1 = require("react");
var Store_1 = require("../store/Store");
var TypeRefSelector_1 = require("./TypeRefSelector");
var Dropdown_1 = require("@patternfly/react-core/dist/js/components/Dropdown");
var import_icon_1 = require("@patternfly/react-icons/dist/js/icons/import-icon");
var angle_down_icon_1 = require("@patternfly/react-icons/dist/js/icons/angle-down-icon");
var angle_right_icon_1 = require("@patternfly/react-icons/dist/js/icons/angle-right-icon");
var eye_icon_1 = require("@patternfly/react-icons/dist/js/icons/eye-icon");
var trash_icon_1 = require("@patternfly/react-icons/dist/js/icons/trash-icon");
var DataTypeName_1 = require("./DataTypeName");
var DataTypeSpec_1 = require("./DataTypeSpec");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var Clipboard_1 = require("../clipboard/Clipboard");
var dmnIdRandomizer_1 = require("../idRandomizer/dmnIdRandomizer");
var ConstraintsEnum_1 = require("./ConstraintsEnum");
var ConstraintsRange_1 = require("./ConstraintsRange");
var Constraints_1 = require("./Constraints");
var BuiltInFeelTypes_1 = require("./BuiltInFeelTypes");
var DmnEditorContext_1 = require("../DmnEditorContext");
exports.BRIGHTNESS_DECREASE_STEP_IN_PERCENTAGE_PER_NESTING_LEVEL = 5;
exports.STARTING_BRIGHTNESS_LEVEL_IN_PERCENTAGE = 95;
var addItemComponentButtonWidthInPxs = 24;
var expandButtonWidthInPxs = 24;
var expandButtonoHorizontalMarginInPxs = 12;
var leftGutterForStructsInPxs = addItemComponentButtonWidthInPxs + expandButtonWidthInPxs + expandButtonoHorizontalMarginInPxs * 2;
var rowPaddingRight = 16;
function ItemComponentsTable(_a) {
    var isReadonly = _a.isReadonly, parent = _a.parent, editItemDefinition = _a.editItemDefinition, addItemComponent = _a.addItemComponent, dropdownOpenFor = _a.dropdownOpenFor, allDataTypesById = _a.allDataTypesById, setDropdownOpenFor = _a.setDropdownOpenFor, resolveTypeRef = _a.resolveTypeRef;
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var expandedItemComponentIds = (0, Store_1.useDmnEditorStore)(function (s) { return s.dataTypesEditor; }).expandedItemComponentIds;
    var thisDmnsNamespace = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn.model.definitions["@_namespace"]; });
    var expandedItemComponentIdsSet = (0, react_1.useMemo)(function () {
        return new Set(expandedItemComponentIds);
    }, [expandedItemComponentIds]);
    var dataTypes = parent.children;
    var flatTree = (0, react_1.useMemo)(function () {
        var _a;
        var ret = [];
        function traverse(dataType, allUniqueNamesAtLevel) {
            var _a, _b, _c;
            for (var i = 0; i < ((_a = dataType === null || dataType === void 0 ? void 0 : dataType.length) !== null && _a !== void 0 ? _a : 0); i++) {
                ret.push({ dataType: dataType[i], allUniqueNamesAtLevel: allUniqueNamesAtLevel });
                traverse((_b = dataType[i].children) !== null && _b !== void 0 ? _b : [], ((_c = dataType[i].itemDefinition.itemComponent) !== null && _c !== void 0 ? _c : []).reduce(function (acc, s) { return acc.set(s["@_name"], s["@_id"]); }, new Map(__spreadArray([], __read(BuiltInFeelTypes_1.builtInFeelTypeNames), false).map(function (s) { return [s, s]; }))));
            }
        }
        traverse(dataTypes !== null && dataTypes !== void 0 ? dataTypes : [], ((_a = parent.itemDefinition.itemComponent) !== null && _a !== void 0 ? _a : []).reduce(function (acc, s) { return acc.set(s["@_name"], s["@_id"]); }, new Map(__spreadArray([], __read(BuiltInFeelTypes_1.builtInFeelTypeNames), false).map(function (s) { return [s, s]; }))));
        return ret;
    }, [dataTypes, parent.itemDefinition.itemComponent]);
    var expandAll = (0, react_1.useCallback)(function () {
        dmnEditorStoreApi.setState(function (state) {
            state.dataTypesEditor.expandedItemComponentIds = flatTree.flatMap(function (s) {
                return (0, DataTypeSpec_1.isStruct)(s.dataType.itemDefinition) ? s.dataType.itemDefinition["@_id"] : [];
            });
        });
    }, [dmnEditorStoreApi, flatTree]);
    var collapseAll = (0, react_1.useCallback)(function () {
        dmnEditorStoreApi.setState(function (state) {
            state.dataTypesEditor.expandedItemComponentIds = [];
        });
    }, [dmnEditorStoreApi]);
    var dmnEditorRootElementRef = (0, DmnEditorContext_1.useDmnEditor)().dmnEditorRootElementRef;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Flex_1.Flex, __assign({ justifyContent: { default: "justifyContentSpaceBetween" } }, { children: [(0, jsx_runtime_1.jsx)(Flex_1.FlexItem, { children: (0, jsx_runtime_1.jsxs)(Title_1.Title, __assign({ size: "md", headingLevel: "h4" }, { children: ["Properties in '".concat(parent.itemDefinition["@_name"], "'"), !isReadonly && ((0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.link, onClick: function () {
                                        return addItemComponent(parent.itemDefinition["@_id"], "unshift", {
                                            "@_name": "New property",
                                            typeRef: { __$$text: api_1.DmnBuiltInDataType.Undefined },
                                        });
                                    } }, { children: (0, jsx_runtime_1.jsx)(plus_circle_icon_1.PlusCircleIcon, {}) })))] })) }), (0, jsx_runtime_1.jsxs)(Flex_1.FlexItem, { children: [(0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.link, onClick: expandAll }, { children: "Expand all" })), (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.link, onClick: collapseAll }, { children: "Collapse all" })), !isReadonly && ((0, jsx_runtime_1.jsx)(Dropdown_1.Dropdown, { toggle: (0, jsx_runtime_1.jsx)(Dropdown_1.KebabToggle, { id: "toggle-kebab-properties-table", onToggle: function (isOpen) { return setDropdownOpenFor(isOpen ? parent.itemDefinition["@_id"] : undefined); } }), onSelect: function () { return setDropdownOpenFor(undefined); }, isOpen: dropdownOpenFor === parent.itemDefinition["@_id"], menuAppendTo: document.body, isPlain: true, position: "right", dropdownItems: [
                                    (0, jsx_runtime_1.jsx)(Dropdown_1.DropdownItem, __assign({ style: { minWidth: "240px" }, icon: (0, jsx_runtime_1.jsx)(paste_icon_1.PasteIcon, {}), onClick: function () {
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
                                                        addItemComponent(parent.itemDefinition["@_id"], "unshift", itemDefinition);
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
                                        } }, { children: "Paste property" }), "paste-property"),
                                ] }))] })] })), flatTree.length <= 0 && ((0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--data-type-properties-table--empty-state" }, { children: isReadonly ? "None" : "None yet" }))), flatTree.length > 0 && ((0, jsx_runtime_1.jsxs)("table", __assign({ className: "kie-dmn-editor--data-type-properties-table" }, { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", __assign({ style: { minWidth: "200px", width: "67%" } }, { children: "Name" })), (0, jsx_runtime_1.jsx)("th", __assign({ style: { minWidth: "140px", maxWidth: "140px" } }, { children: "Is struct?" })), (0, jsx_runtime_1.jsx)("th", __assign({ style: { minWidth: "280px", width: "33%" } }, { children: "Type" })), (0, jsx_runtime_1.jsx)("th", __assign({ style: { minWidth: "140px", maxWidth: "140px" } }, { children: "Is collection?" })), (0, jsx_runtime_1.jsx)("th", __assign({ style: { minWidth: "200px", maxWidth: "200px" } }, { children: "Constraints" })), (0, jsx_runtime_1.jsx)("th", {})] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: flatTree.map(function (_a, i) {
                            var e_2, _b;
                            var _c, _d;
                            var dt = _a.dataType, allUniqueNamesAtLevel = _a.allUniqueNamesAtLevel;
                            var nextDt = flatTree[Math.min(i + 1, flatTree.length - 1)].dataType;
                            var lastDt = flatTree[Math.max(i - 1, 0)].dataType;
                            var nextIsUpper = nextDt.parents.size < dt.parents.size;
                            var lastIsUpper = lastDt.parents.size < dt.parents.size;
                            var areAllParentsExpanded = true;
                            try {
                                for (var _e = __values(__spreadArray([], __read(dt.parents), false).reverse()), _f = _e.next(); !_f.done; _f = _e.next()) {
                                    var p = _f.value;
                                    if (p === parent.itemDefinition["@_id"]) {
                                        break;
                                    }
                                    else if (!expandedItemComponentIdsSet.has(p)) {
                                        areAllParentsExpanded = false;
                                    }
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                            var shouldShowRow = dt.parentId === parent.itemDefinition["@_id"] ||
                                ((0, DataTypeSpec_1.isStruct)(allDataTypesById.get(dt.parentId).itemDefinition) && areAllParentsExpanded);
                            var level = dt.parents.size - parent.parents.size - 1;
                            var brigthnessPercentage = exports.STARTING_BRIGHTNESS_LEVEL_IN_PERCENTAGE -
                                level * exports.BRIGHTNESS_DECREASE_STEP_IN_PERCENTAGE_PER_NESTING_LEVEL;
                            var constraintLabel = function () {
                                var _a, _b, _c, _d, _e, _f;
                                if (((_a = dt.itemDefinition.allowedValues) === null || _a === void 0 ? void 0 : _a["@_kie:constraintType"]) === "enumeration") {
                                    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Enumeration" });
                                }
                                if (((_b = dt.itemDefinition.allowedValues) === null || _b === void 0 ? void 0 : _b["@_kie:constraintType"]) === "expression") {
                                    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Expression" });
                                }
                                if (((_c = dt.itemDefinition.allowedValues) === null || _c === void 0 ? void 0 : _c["@_kie:constraintType"]) === "range") {
                                    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Range" });
                                }
                                var constraintValue = (_d = dt.itemDefinition.allowedValues) === null || _d === void 0 ? void 0 : _d.text.__$$text;
                                var typeRef = (_f = (_e = dt.itemDefinition.typeRef) === null || _e === void 0 ? void 0 : _e.__$$text) !== null && _f !== void 0 ? _f : api_1.DmnBuiltInDataType.Undefined;
                                if (constraintValue === undefined) {
                                    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "None" });
                                }
                                if ((0, ConstraintsEnum_1.isEnum)(constraintValue, (0, Constraints_1.constraintTypeHelper)(typeRef).check)) {
                                    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Enumeration" });
                                }
                                if ((0, ConstraintsRange_1.isRange)(constraintValue, (0, Constraints_1.constraintTypeHelper)(typeRef).check)) {
                                    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Range" });
                                }
                                return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Expression" });
                            };
                            return ((0, jsx_runtime_1.jsx)(React.Fragment, { children: shouldShowRow && ((0, jsx_runtime_1.jsxs)("tr", __assign({ style: { backdropFilter: "brightness(".concat(brigthnessPercentage, "%)") }, className: "".concat(nextIsUpper ? "last-nested-at-level" : "", " ").concat(lastIsUpper ? "first-nested-at-level" : "") }, { children: [(0, jsx_runtime_1.jsx)("td", __assign({ style: {
                                                paddingLeft: "".concat(rowPaddingRight + level * leftGutterForStructsInPxs, "px"),
                                            } }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex" } }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                                            width: "".concat(expandButtonWidthInPxs, "px"),
                                                            margin: "0 ".concat(expandButtonoHorizontalMarginInPxs, "px"),
                                                        } }, { children: (0, DataTypeSpec_1.isStruct)(dt.itemDefinition) && ((0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.link, style: { padding: "0 8px 0 0" }, onClick: function (e) {
                                                                return dmnEditorStoreApi.setState(function (state) {
                                                                    if (expandedItemComponentIdsSet.has(dt.itemDefinition["@_id"])) {
                                                                        state.dataTypesEditor.expandedItemComponentIds =
                                                                            state.dataTypesEditor.expandedItemComponentIds.filter(function (s) { return s !== dt.itemDefinition["@_id"]; });
                                                                    }
                                                                    else {
                                                                        state.dataTypesEditor.expandedItemComponentIds.push(dt.itemDefinition["@_id"]);
                                                                    }
                                                                });
                                                            } }, { children: (expandedItemComponentIdsSet.has(dt.itemDefinition["@_id"]) && (0, jsx_runtime_1.jsx)(angle_down_icon_1.AngleDownIcon, {})) || ((0, jsx_runtime_1.jsx)(angle_right_icon_1.AngleRightIcon, {})) }))) })), (0, jsx_runtime_1.jsx)("div", __assign({ style: { width: "".concat(addItemComponentButtonWidthInPxs, "px") } }, { children: !isReadonly && (0, DataTypeSpec_1.isStruct)(dt.itemDefinition) && ((0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.link, style: { padding: "0 8px 0 0" }, onClick: function () {
                                                                addItemComponent(dt.itemDefinition["@_id"], "unshift", {
                                                                    "@_name": "New property",
                                                                    typeRef: { __$$text: api_1.DmnBuiltInDataType.Undefined },
                                                                });
                                                                dmnEditorStoreApi.setState(function (state) {
                                                                    state.dataTypesEditor.expandedItemComponentIds.push(dt.itemDefinition["@_id"]);
                                                                });
                                                            } }, { children: (0, jsx_runtime_1.jsx)(plus_circle_icon_1.PlusCircleIcon, {}) }))) })), (0, jsx_runtime_1.jsx)("div", __assign({ style: { flexGrow: 1 } }, { children: (0, jsx_runtime_1.jsx)(DataTypeName_1.DataTypeName, { relativeToNamespace: dt.namespace, editMode: "hover", isActive: false, itemDefinition: dt.itemDefinition, isReadonly: dt.namespace !== thisDmnsNamespace, allUniqueNames: allUniqueNamesAtLevel }) }))] })) })), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(Switch_1.Switch, { "aria-label": "Is struct?", isChecked: (0, DataTypeSpec_1.isStruct)(dt.itemDefinition), onChange: function (isChecked) {
                                                    editItemDefinition(dt.itemDefinition["@_id"], function (itemDefinition, items) {
                                                        if (isChecked) {
                                                            itemDefinition.typeRef = undefined;
                                                            itemDefinition.itemComponent = [];
                                                            itemDefinition.allowedValues = undefined;
                                                        }
                                                        else {
                                                            itemDefinition.typeRef = { __$$text: api_1.DmnBuiltInDataType.Any };
                                                            itemDefinition.allowedValues = undefined;
                                                        }
                                                    });
                                                } }) }), (0, jsx_runtime_1.jsx)("td", { children: !(0, DataTypeSpec_1.isStruct)(dt.itemDefinition) && ((0, jsx_runtime_1.jsx)(TypeRefSelector_1.TypeRefSelector, { heightRef: dmnEditorRootElementRef, isDisabled: isReadonly, typeRef: resolveTypeRef((_c = dt.itemDefinition.typeRef) === null || _c === void 0 ? void 0 : _c.__$$text), onChange: function (newDataType) {
                                                    editItemDefinition(dt.itemDefinition["@_id"], function (itemDefinition, items) {
                                                        var _a;
                                                        itemDefinition.typeRef = { __$$text: newDataType };
                                                        if (((_a = itemDefinition.typeRef) === null || _a === void 0 ? void 0 : _a.__$$text) !== newDataType) {
                                                            itemDefinition.allowedValues = undefined;
                                                        }
                                                    });
                                                } })) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(Switch_1.Switch, { "aria-label": "Is collection?", isChecked: (_d = dt.itemDefinition["@_isCollection"]) !== null && _d !== void 0 ? _d : false, onChange: function (isChecked) {
                                                    editItemDefinition(dt.itemDefinition["@_id"], function (itemDefinition, items) {
                                                        itemDefinition["@_isCollection"] = isChecked;
                                                        itemDefinition.allowedValues = undefined;
                                                    });
                                                } }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, DataTypeSpec_1.canHaveConstraints)(dt.itemDefinition) ? ((0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.link, onClick: function () {
                                                    dmnEditorStoreApi.setState(function (state) {
                                                        state.dataTypesEditor.activeItemDefinitionId = dt.itemDefinition["@_id"];
                                                    });
                                                } }, { children: constraintLabel() }))) : ((0, jsx_runtime_1.jsx)("p", __assign({ style: { paddingLeft: "16px", paddingRight: "16px" } }, { children: "-" }))) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(Dropdown_1.Dropdown, { toggle: (0, jsx_runtime_1.jsx)(Dropdown_1.KebabToggle, { id: "toggle-kebab-" + dt.itemDefinition["@_id"], onToggle: function (isOpen) { return setDropdownOpenFor(isOpen ? dt.itemDefinition["@_id"] : undefined); } }), onSelect: function () { return setDropdownOpenFor(undefined); }, isOpen: dropdownOpenFor === dt.itemDefinition["@_id"], menuAppendTo: document.body, isPlain: true, position: "right", dropdownItems: [
                                                    (0, jsx_runtime_1.jsx)(Dropdown_1.DropdownItem, __assign({ icon: (0, jsx_runtime_1.jsx)(eye_icon_1.EyeIcon, {}), onClick: function () {
                                                            dmnEditorStoreApi.setState(function (state) {
                                                                state.dataTypesEditor.activeItemDefinitionId = dt.itemDefinition["@_id"];
                                                            });
                                                        } }, { children: "View" }), "view-type"),
                                                    (0, jsx_runtime_1.jsx)(Dropdown_1.DropdownSeparator, {}, "view-separator"),
                                                    (0, jsx_runtime_1.jsx)(Dropdown_1.DropdownItem, __assign({ icon: (0, jsx_runtime_1.jsx)(import_icon_1.ImportIcon, { style: { transform: "scale(-1, -1)" } }), style: { minWidth: "240px" }, onClick: function () {
                                                            editItemDefinition(dt.itemDefinition["@_id"], function (itemDefinition, _, __, itemDefinitions) {
                                                                var newItemDefinition = (0, DataTypeSpec_1.getNewItemDefinition)(__assign(__assign({}, dt.itemDefinition), { typeRef: dt.itemDefinition.typeRef, "@_name": "t".concat(dt.itemDefinition["@_name"]), "@_isCollection": false }));
                                                                var newItemDefinitionCopy = JSON.parse(JSON.stringify(newItemDefinition));
                                                                (0, dmnIdRandomizer_1.getNewDmnIdRandomizer)()
                                                                    .ack({
                                                                    json: [newItemDefinitionCopy],
                                                                    type: "DMN15__tDefinitions",
                                                                    attr: "itemDefinition",
                                                                })
                                                                    .randomize();
                                                                itemDefinitions.unshift(newItemDefinitionCopy);
                                                                if (!isReadonly) {
                                                                    itemDefinition["@_id"] = (0, api_1.generateUuid)();
                                                                    itemDefinition.typeRef = { __$$text: newItemDefinitionCopy["@_name"] };
                                                                    itemDefinition.itemComponent = undefined;
                                                                }
                                                            });
                                                        } }, { children: "Extract data type" }), "extract-to-top-level"),
                                                    (0, jsx_runtime_1.jsx)(Dropdown_1.DropdownSeparator, {}, "extract-data-type-separator"),
                                                    (0, jsx_runtime_1.jsx)(Dropdown_1.DropdownItem, __assign({ icon: (0, jsx_runtime_1.jsx)(copy_icon_1.CopyIcon, {}), onClick: function () {
                                                            var clipboard = (0, Clipboard_1.buildClipboardFromDataType)(dt, thisDmnsNamespace);
                                                            navigator.clipboard.writeText(JSON.stringify(clipboard));
                                                        } }, { children: "Copy" }), "copy-item"),
                                                    (0, jsx_runtime_1.jsx)(React.Fragment, { children: !isReadonly && ((0, jsx_runtime_1.jsx)(Dropdown_1.DropdownItem, __assign({ icon: (0, jsx_runtime_1.jsx)(cut_icon_1.CutIcon, {}), onClick: function () {
                                                                var clipboard = (0, Clipboard_1.buildClipboardFromDataType)(dt, thisDmnsNamespace);
                                                                navigator.clipboard.writeText(JSON.stringify(clipboard)).then(function () {
                                                                    editItemDefinition(dt.parentId, function (itemDefinition) {
                                                                        var _a;
                                                                        (_a = itemDefinition.itemComponent) === null || _a === void 0 ? void 0 : _a.splice(dt.index, 1);
                                                                    });
                                                                });
                                                            } }, { children: "Cut" }), "cut-item")) }, "cut-fragment"),
                                                    (0, jsx_runtime_1.jsx)(React.Fragment, { children: !isReadonly && ((0, jsx_runtime_1.jsx)(Dropdown_1.DropdownItem, __assign({ icon: (0, jsx_runtime_1.jsx)(trash_icon_1.TrashIcon, {}), onClick: function () {
                                                                editItemDefinition(dt.parentId, function (itemDefinition) {
                                                                    var _a;
                                                                    (_a = itemDefinition.itemComponent) === null || _a === void 0 ? void 0 : _a.splice(dt.index, 1);
                                                                });
                                                            } }, { children: "Remove" }), "remove-item")) }, "remove-fragment"),
                                                    !isReadonly && (0, DataTypeSpec_1.isStruct)(dt.itemDefinition) ? ((0, jsx_runtime_1.jsxs)(React.Fragment, { children: [(0, jsx_runtime_1.jsx)(Dropdown_1.DropdownSeparator, {}), (0, jsx_runtime_1.jsx)(React.Fragment, { children: (0, jsx_runtime_1.jsx)(Dropdown_1.DropdownItem, __assign({ icon: (0, jsx_runtime_1.jsx)(paste_icon_1.PasteIcon, {}), onClick: function () {
                                                                        navigator.clipboard.readText().then(function (text) {
                                                                            var e_3, _a;
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
                                                                                    addItemComponent(dt.itemDefinition["@_id"], "unshift", itemDefinition);
                                                                                }
                                                                            }
                                                                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                                                            finally {
                                                                                try {
                                                                                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                                                                }
                                                                                finally { if (e_3) throw e_3.error; }
                                                                            }
                                                                        });
                                                                    } }, { children: "Paste property" })) })] }, "paste-property-fragment")) : ((0, jsx_runtime_1.jsx)(React.Fragment, {}, "paste-property-empty-fragment")),
                                                ] }) })] }))) }, dt.itemDefinition["@_id"]));
                        }) }), !isReadonly && ((0, jsx_runtime_1.jsx)("tfoot", { children: (0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", __assign({ colSpan: 5 }, { children: (0, jsx_runtime_1.jsxs)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.link, onClick: function () {
                                        return addItemComponent(parent.itemDefinition["@_id"], "push", {
                                            "@_name": "New property",
                                            typeRef: { __$$text: api_1.DmnBuiltInDataType.Undefined },
                                        });
                                    }, style: { paddingLeft: 0 } }, { children: [(0, jsx_runtime_1.jsx)(plus_circle_icon_1.PlusCircleIcon, {}), "\u00A0\u00A0", "Add property to '".concat(parent.itemDefinition["@_name"], "'")] })) })) }) }))] })))] }));
}
exports.ItemComponentsTable = ItemComponentsTable;
//# sourceMappingURL=ItemComponentsTable.js.map