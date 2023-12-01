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
exports.TypeRefSelector = exports.typeRefSelectorLimitedSpaceStyle = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var Select_1 = require("@patternfly/react-core/dist/js/components/Select");
var react_1 = require("react");
var TypeRefLabel_1 = require("./TypeRefLabel");
var arrow_up_icon_1 = require("@patternfly/react-icons/dist/js/icons/arrow-up-icon");
var Store_1 = require("../store/Store");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var DerivedStore_1 = require("../store/DerivedStore");
var BuiltInFeelTypes_1 = require("./BuiltInFeelTypes");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var useInViewSelect_1 = require("../responsiveness/useInViewSelect");
exports.typeRefSelectorLimitedSpaceStyle = { maxHeight: "600px", boxShadow: "none", overflowY: "scroll" };
function TypeRefSelector(props) {
    var _a, _b, _c;
    var _d = __read((0, react_1.useState)(false), 2), isOpen = _d[0], setOpen = _d[1];
    var allTopLevelDataTypesByFeelName = (0, DerivedStore_1.useDmnEditorDerivedStore)().allTopLevelDataTypesByFeelName;
    var selectedDataType = (0, react_1.useMemo)(function () {
        return props.typeRef ? allTopLevelDataTypesByFeelName.get(props.typeRef) : undefined;
    }, [allTopLevelDataTypesByFeelName, props.typeRef]);
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var thisDmnsNamespace = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn.model.definitions["@_namespace"]; });
    var _e = (0, react_1.useMemo)(function () {
        var customDataTypes = [];
        var externalDataTypes = [];
        __spreadArray([], __read(allTopLevelDataTypesByFeelName.values()), false).forEach(function (s) {
            if (s.parentId) {
                return;
            }
            if (s.namespace === thisDmnsNamespace) {
                customDataTypes.push(s);
            }
            else {
                externalDataTypes.push(s);
            }
        });
        return { customDataTypes: customDataTypes, externalDataTypes: externalDataTypes };
    }, [allTopLevelDataTypesByFeelName, thisDmnsNamespace]), customDataTypes = _e.customDataTypes, externalDataTypes = _e.externalDataTypes;
    var exists = selectedDataType || (props.typeRef && BuiltInFeelTypes_1.builtInFeelTypeNames.has(props.typeRef));
    var id = (0, api_1.generateUuid)();
    var toggleRef = (0, react_1.useRef)(null);
    var _f = (0, useInViewSelect_1.useInViewSelect)((_a = props.heightRef) !== null && _a !== void 0 ? _a : { current: document.body }, toggleRef, (_b = props.zoom) !== null && _b !== void 0 ? _b : 1), maxHeight = _f.maxHeight, direction = _f.direction;
    return ((0, jsx_runtime_1.jsxs)(Flex_1.Flex, __assign({ id: id, justifyContent: { default: "justifyContentFlexStart" }, flexWrap: { default: "nowrap" }, spaceItems: { default: "spaceItemsNone" } }, { children: [(selectedDataType === null || selectedDataType === void 0 ? void 0 : selectedDataType.itemDefinition) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, __assign({ content: "Jump to definition", appendTo: function () { return document.getElementById(id); } }, { children: (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ className: "kie-dmn-editor--data-type-jump-to-definition", variant: Button_1.ButtonVariant.control, onClick: function (e) {
                        return dmnEditorStoreApi.setState(function (state) {
                            var _a;
                            state.navigation.tab = Store_1.DmnEditorTab.DATA_TYPES;
                            state.dataTypesEditor.activeItemDefinitionId = (_a = selectedDataType === null || selectedDataType === void 0 ? void 0 : selectedDataType.itemDefinition) === null || _a === void 0 ? void 0 : _a["@_id"];
                        });
                    } }, { children: (0, jsx_runtime_1.jsx)(arrow_up_icon_1.ArrowUpIcon, {}) })) }))), (0, jsx_runtime_1.jsxs)(Select_1.Select, __assign({ toggleRef: toggleRef, className: !exists ? "kie-dmn-editor--type-ref-selector-invalid-value" : undefined, isDisabled: props.isDisabled, variant: Select_1.SelectVariant.typeahead, typeAheadAriaLabel: api_1.DmnBuiltInDataType.Undefined, onToggle: setOpen, onSelect: function (e, v) {
                    setOpen(false);
                    props.onChange(v);
                }, selections: props.typeRef, isOpen: isOpen, "aria-labelledby": "Data types selector", placeholderText: "Select a data type...", isCreatable: !!props.onCreate, isCreateOptionOnTop: false, onCreateOption: props.onCreate, isGrouped: true, menuAppendTo: (_c = props.menuAppendTo) !== null && _c !== void 0 ? _c : document.body, maxHeight: maxHeight, direction: direction, onWheelCapture: function (e) { return e.stopPropagation(); } }, { children: [(0, jsx_runtime_1.jsx)(Select_1.SelectGroup, __assign({ label: "Built-in", style: { minWidth: "300px" } }, { children: BuiltInFeelTypes_1.builtInFeelTypes.map(function (dt) { return ((0, jsx_runtime_1.jsx)(Select_1.SelectOption, __assign({ value: dt.name }, { children: dt.name }), dt.name)); }) }), "builtin"), (0, jsx_runtime_1.jsx)(Select_1.SelectGroup, __assign({ label: "Custom", style: { minWidth: "300px" } }, { children: (customDataTypes.length > 0 &&
                            customDataTypes.map(function (dt) {
                                var _a, _b;
                                return ((0, jsx_runtime_1.jsxs)(Select_1.SelectOption, __assign({ value: dt.feelName }, { children: [dt.feelName, "\u00A0", (0, jsx_runtime_1.jsx)(TypeRefLabel_1.TypeRefLabel, { typeRef: (_a = dt.itemDefinition.typeRef) === null || _a === void 0 ? void 0 : _a.__$$text, relativeToNamespace: dt.namespace, isCollection: (_b = dt.itemDefinition) === null || _b === void 0 ? void 0 : _b["@_isCollection"] })] }), dt.feelName));
                            })) || (0, jsx_runtime_1.jsx)(Select_1.SelectOption, { value: "None", isDisabled: true }, "None") }), "custom"), (0, jsx_runtime_1.jsx)(Select_1.SelectGroup, __assign({ label: "External", style: { minWidth: "300px" } }, { children: (externalDataTypes.length > 0 &&
                            externalDataTypes.map(function (dt) {
                                var _a, _b;
                                return ((0, jsx_runtime_1.jsxs)(Select_1.SelectOption, __assign({ value: dt.feelName }, { children: [dt.feelName, "\u00A0", (0, jsx_runtime_1.jsx)(TypeRefLabel_1.TypeRefLabel, { typeRef: (_a = dt.itemDefinition.typeRef) === null || _a === void 0 ? void 0 : _a.__$$text, relativeToNamespace: dt.namespace, isCollection: (_b = dt.itemDefinition) === null || _b === void 0 ? void 0 : _b["@_isCollection"] })] }), dt.feelName));
                            })) || (0, jsx_runtime_1.jsx)(Select_1.SelectOption, { value: "None", isDisabled: true }, "None") }), "external")] }))] })));
}
exports.TypeRefSelector = TypeRefSelector;
//# sourceMappingURL=TypeRefSelector.js.map