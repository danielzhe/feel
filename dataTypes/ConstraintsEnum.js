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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEnum = exports.ConstraintsEnum = exports.ENUM_SEPARATOR = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ConstraintsExpression_1 = require("./ConstraintsExpression");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var plus_circle_icon_1 = __importDefault(require("@patternfly/react-icons/dist/js/icons/plus-circle-icon"));
var Draggable_1 = require("../draggable/Draggable");
var times_icon_1 = __importDefault(require("@patternfly/react-icons/dist/js/icons/times-icon"));
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
exports.ENUM_SEPARATOR = ",";
function ConstraintsEnum(_a) {
    var _b;
    var isReadonly = _a.isReadonly, value = _a.value, expressionValue = _a.expressionValue, type = _a.type, typeHelper = _a.typeHelper, onSave = _a.onSave, isDisabled = _a.isDisabled;
    var enumValues = (0, react_1.useMemo)(function () { var _a; return (_a = isEnum(value, typeHelper.check)) !== null && _a !== void 0 ? _a : [""]; }, [typeHelper.check, value]);
    var _c = __read((0, react_1.useState)((_b = (enumValues !== null && enumValues !== void 0 ? enumValues : [""])) === null || _b === void 0 ? void 0 : _b.map(function (_) { return (0, api_1.generateUuid)(); })), 2), valuesUuid = _c[0], setValuesUuid = _c[1];
    var isItemValid = (0, react_1.useMemo)(function () { return enumValues.map(function (value, i, array) { return array.filter(function (e) { return e === value; }).length <= 1; }); }, [enumValues]);
    var _d = __read((0, react_1.useState)(""), 2), focusOwner = _d[0], setFocusOwner = _d[1];
    var onAdd = (0, react_1.useCallback)(function () {
        setValuesUuid(function (prev) {
            if (prev[enumValues.length] === undefined) {
                var newValuesUuid = __spreadArray([], __read(prev), false);
                newValuesUuid[enumValues.length] = (0, api_1.generateUuid)();
                return newValuesUuid;
            }
            return prev;
        });
        onSave(enumValues.join("".concat(exports.ENUM_SEPARATOR, " ")) + exports.ENUM_SEPARATOR);
        setFocusOwner("");
    }, [onSave, enumValues]);
    var onRemove = (0, react_1.useCallback)(function (index) {
        var newValues = __spreadArray([], __read(enumValues), false);
        newValues.splice(index, 1);
        setValuesUuid(function (prev) {
            var newUuids = __spreadArray([], __read(prev), false);
            newUuids.splice(index, 1);
            return newUuids;
        });
        onSave(newValues.join("".concat(exports.ENUM_SEPARATOR, " ")));
    }, [enumValues, onSave]);
    var onDragEnd = (0, react_1.useCallback)(function (source, dest) {
        var reordened = __spreadArray([], __read(enumValues), false);
        var _a = __read(reordened.splice(source, 1), 1), removed = _a[0];
        reordened.splice(dest, 0, removed);
        onSave(reordened.join("".concat(exports.ENUM_SEPARATOR, " ")));
    }, [enumValues, onSave]);
    var reorder = (0, react_1.useCallback)(function (source, dest) {
        setValuesUuid(function (prev) {
            var reordenedUuid = __spreadArray([], __read(prev), false);
            var _a = __read(reordenedUuid.splice(source, 1), 1), removedUuid = _a[0];
            reordenedUuid.splice(dest, 0, removedUuid);
            return reordenedUuid;
        });
    }, []);
    var onChangeItem = (0, react_1.useCallback)(function (newValue, index) {
        var newValues = __spreadArray([], __read(enumValues), false);
        newValues[index] = typeHelper.transform(newValue);
        onSave(newValues.join("".concat(exports.ENUM_SEPARATOR, " ")));
    }, [enumValues, onSave, typeHelper]);
    var draggableItem = (0, react_1.useCallback)(function (value, index) {
        var _a;
        return ((0, jsx_runtime_1.jsx)(Draggable_1.Draggable, __assign({ index: index, style: { alignItems: "center" }, handlerStyle: { margin: "0px 10px" } }, { children: (0, jsx_runtime_1.jsx)("li", __assign({ style: { marginLeft: "20px", listStyleType: "initial" } }, { children: (0, jsx_runtime_1.jsx)(EnumElement, { id: "enum-element-".concat(index), isDisabled: isReadonly || isDisabled, initialValue: (_a = typeHelper.recover(value)) !== null && _a !== void 0 ? _a : "", onChange: function (newValue) { return onChangeItem(newValue, index); }, onRemove: function () { return onRemove(index); }, isValid: isItemValid[index], focusOwner: focusOwner, setFocusOwner: setFocusOwner, typeHelper: typeHelper, onKeyDown: function (e) {
                        if (e.key === "Enter") {
                            onAdd();
                        }
                        if (e.key === exports.ENUM_SEPARATOR) {
                            e.preventDefault();
                        }
                    } }) })) }), valuesUuid[index]));
    }, [focusOwner, isDisabled, isItemValid, isReadonly, onAdd, onChangeItem, onRemove, typeHelper, valuesUuid]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        border: "solid 1px lightgray",
                        borderRadius: "4px",
                    } }, { children: (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)(Draggable_1.DragAndDrop, { reorder: reorder, onDragEnd: onDragEnd, values: enumValues, draggableItem: draggableItem, isDisabled: isDisabled || isReadonly }) }) })) }), (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ onClick: function () { return onAdd(); }, variant: Button_1.ButtonVariant.link, icon: (0, jsx_runtime_1.jsx)(plus_circle_icon_1.default, {}), style: { paddingTop: "10px", paddingBottom: 0, paddingLeft: 0, paddingRight: 0 } }, { children: "Add value" })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(ConstraintsExpression_1.ConstraintsExpression, { isReadonly: true, value: expressionValue !== null && expressionValue !== void 0 ? expressionValue : "", type: type })] }));
}
exports.ConstraintsEnum = ConstraintsEnum;
function EnumElement(_a) {
    var id = _a.id, isDisabled = _a.isDisabled, initialValue = _a.initialValue, isValid = _a.isValid, typeHelper = _a.typeHelper, focusOwner = _a.focusOwner, setFocusOwner = _a.setFocusOwner, onChange = _a.onChange, onRemove = _a.onRemove, onKeyDown = _a.onKeyDown;
    var value = (0, react_1.useMemo)(function () { return initialValue; }, [initialValue]);
    var removeButtonRef = (0, react_1.useRef)(null);
    var hovered = (0, Draggable_1.useDraggableItemContext)().hovered;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex", flexDirection: "row", justifyContent: "space-between" } }, { children: [typeHelper.component({
                autoFocus: true,
                onChange: function (newValue) { return onChange(newValue); },
                id: id,
                isDisabled: isDisabled,
                style: {
                    borderColor: "transparent",
                    backgroundColor: "transparent",
                    outline: "none",
                },
                value: value,
                focusOwner: focusOwner,
                setFocusOwner: setFocusOwner,
                isValid: isValid,
                onKeyDown: onKeyDown,
            }), (0, jsx_runtime_1.jsx)(Button_1.Button, { ref: removeButtonRef, style: { opacity: hovered ? "100%" : "0" }, className: "kie-dmn-editor--documentation-link--row-remove", variant: "plain", icon: (0, jsx_runtime_1.jsx)(times_icon_1.default, {}), onClick: function () { return onRemove(); } }), hovered && (0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, { content: "Remove", reference: removeButtonRef })] })));
}
function isEnum(value, typeCheck) {
    if (value === undefined) {
        return undefined;
    }
    if (value === "") {
        return undefined;
    }
    var enumValues = value.split(exports.ENUM_SEPARATOR).map(function (e) { return e.trim(); });
    if (enumValues.reduce(function (isEnum, value) { return isEnum && (typeCheck === null || typeCheck === void 0 ? void 0 : typeCheck(value)); }, true)) {
        return enumValues;
    }
    return undefined;
}
exports.isEnum = isEnum;
//# sourceMappingURL=ConstraintsEnum.js.map