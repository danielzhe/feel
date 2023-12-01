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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Draggable = exports.DragAndDrop = exports.useDraggableItemContext = exports.useDraggableDispatchContext = exports.useDraggableStateContext = exports.DraggableItemContext = exports.DraggableDispatchContext = exports.DraggableStateContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Draggable.css");
var React = __importStar(require("react"));
var react_1 = require("react");
var Icon_1 = require("@patternfly/react-core/dist/js/components/Icon");
var grip_vertical_icon_1 = __importDefault(require("@patternfly/react-icons/dist/js/icons/grip-vertical-icon"));
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
exports.DraggableStateContext = React.createContext({});
exports.DraggableDispatchContext = React.createContext({});
exports.DraggableItemContext = React.createContext({});
function useDraggableStateContext() {
    return (0, react_1.useContext)(exports.DraggableStateContext);
}
exports.useDraggableStateContext = useDraggableStateContext;
function useDraggableDispatchContext() {
    return (0, react_1.useContext)(exports.DraggableDispatchContext);
}
exports.useDraggableDispatchContext = useDraggableDispatchContext;
function useDraggableItemContext() {
    return (0, react_1.useContext)(exports.DraggableItemContext);
}
exports.useDraggableItemContext = useDraggableItemContext;
function DragAndDrop(_a) {
    var _b;
    var reorder = _a.reorder, onDragEnd = _a.onDragEnd, values = _a.values, draggableItem = _a.draggableItem, isDisabled = _a.isDisabled;
    var _c = __read((0, react_1.useState)(-1), 2), source = _c[0], setSource = _c[1];
    var _d = __read((0, react_1.useState)(-1), 2), dest = _d[0], setDest = _d[1];
    var _e = __read((0, react_1.useState)(false), 2), dragging = _e[0], setDragging = _e[1];
    var _f = __read((0, react_1.useState)(-1), 2), origin = _f[0], setOrigin = _f[1];
    var _g = __read((0, react_1.useState)(false), 2), leftOrigin = _g[0], setLeftOrigin = _g[1];
    var _h = __read((0, react_1.useState)(values !== null && values !== void 0 ? values : []), 2), valuesCopy = _h[0], setValuesCopy = _h[1];
    var _j = __read((0, react_1.useState)((_b = (values !== null && values !== void 0 ? values : [])) === null || _b === void 0 ? void 0 : _b.map(function (_) { return (0, api_1.generateUuid)(); })), 2), valuesKeys = _j[0], setValuesKeys = _j[1];
    (0, react_1.useLayoutEffect)(function () {
        if (isDisabled) {
            return;
        }
        setValuesCopy(function (prev) {
            var _a;
            if ((values === null || values === void 0 ? void 0 : values.length) !== prev.length) {
                setValuesKeys((_a = (values !== null && values !== void 0 ? values : [])) === null || _a === void 0 ? void 0 : _a.map(function (_) { return (0, api_1.generateUuid)(); }));
            }
            return values !== null && values !== void 0 ? values : [];
        });
    }, [values, isDisabled]);
    var onInternalDragStart = (0, react_1.useCallback)(function (index) {
        if (isDisabled) {
            return;
        }
        setDragging(true);
        setSource(index);
        setOrigin(index);
        setLeftOrigin(false);
    }, [isDisabled]);
    var onInternalDragOver = (0, react_1.useCallback)(function (e, index) {
        if (isDisabled) {
            return;
        }
        e.preventDefault();
        setDest(index);
    }, [isDisabled]);
    var onInternalDragEnd = (0, react_1.useCallback)(function (index) {
        if (isDisabled) {
            return;
        }
        onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(origin, dest);
        setDragging(false);
        setSource(-1);
        setDest(-1);
        setOrigin(-1);
        setLeftOrigin(false);
    }, [dest, onDragEnd, origin, isDisabled]);
    var onInternalReorder = (0, react_1.useCallback)(function (source, dest) {
        if (isDisabled) {
            return;
        }
        setValuesCopy(function (prev) {
            var reordenedValues = __spreadArray([], __read(prev), false);
            var _a = __read(reordenedValues.splice(source, 1), 1), removedValue = _a[0];
            reordenedValues.splice(dest, 0, removedValue);
            return reordenedValues;
        });
        setValuesKeys(function (prev) {
            var reordenedKeys = __spreadArray([], __read(prev), false);
            var _a = __read(reordenedKeys.splice(source, 1), 1), removedKeys = _a[0];
            reordenedKeys.splice(dest, 0, removedKeys);
            return reordenedKeys;
        });
    }, [isDisabled]);
    var onInternalDragEnter = (0, react_1.useCallback)(function (index) {
        if (isDisabled) {
            return;
        }
        if (index === dest && index !== source) {
            reorder(source, dest);
            onInternalReorder(source, dest);
            setSource(dest);
            setDest(source);
        }
    }, [dest, reorder, source, onInternalReorder, isDisabled]);
    var onInternalDragLeave = (0, react_1.useCallback)(function (index) {
        if (isDisabled) {
            return;
        }
        if (!leftOrigin && index !== source) {
            setLeftOrigin(true);
        }
    }, [leftOrigin, source, isDisabled]);
    return ((0, jsx_runtime_1.jsx)(exports.DraggableStateContext.Provider, __assign({ value: {
            source: source,
            dest: dest,
            dragging: dragging,
            origin: origin,
            leftOrigin: leftOrigin,
        } }, { children: (0, jsx_runtime_1.jsx)(exports.DraggableDispatchContext.Provider, __assign({ value: {
                onDragStart: onInternalDragStart,
                onDragOver: onInternalDragOver,
                onDragEnd: onInternalDragEnd,
                onDragEnter: onInternalDragEnter,
                onDragLeave: onInternalDragLeave,
            } }, { children: valuesCopy === null || valuesCopy === void 0 ? void 0 : valuesCopy.map(function (value, index) { return ((0, jsx_runtime_1.jsx)("div", { children: draggableItem === null || draggableItem === void 0 ? void 0 : draggableItem(value, index) }, valuesKeys[index])); }) })) })));
}
exports.DragAndDrop = DragAndDrop;
function Draggable(props) {
    var _a = useDraggableStateContext(), source = _a.source, dragging = _a.dragging, leftOrigin = _a.leftOrigin;
    var _b = useDraggableDispatchContext(), onDragStart = _b.onDragStart, onDragOver = _b.onDragOver, onDragEnd = _b.onDragEnd, onDragEnter = _b.onDragEnter, onDragLeave = _b.onDragLeave;
    var _c = __read((0, react_1.useState)(-1), 2), hoveredItem = _c[0], setHoveredItem = _c[1];
    var _d = __read((0, react_1.useState)(false), 2), draggable = _d[0], setDraggable = _d[1];
    var hovered = (0, react_1.useMemo)(function () { return hoveredItem === props.index; }, [hoveredItem, props.index]);
    var isDragging = (0, react_1.useMemo)(function () { return props.index === source && leftOrigin; }, [leftOrigin, props.index, source]);
    var rowClassName = (0, react_1.useMemo)(function () {
        var className = "kie-dmn-editor--draggable-row";
        if (hovered) {
            className += " kie-dmn-editor--draggable-row-hovered";
        }
        if (isDragging) {
            className += " kie-dmn-editor--draggable-row-is-dragging";
        }
        return className;
    }, [hovered, isDragging]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ style: props.style, className: "".concat(rowClassName, " ").concat(props.rowClassName ? props.rowClassName : ""), draggable: dragging || draggable, onDragStart: function () { return onDragStart(props.index); }, onDragOver: function (e) { return onDragOver(e, props.index); }, onDragEnd: function () {
            onDragEnd(props.index);
            setHoveredItem(-1);
        }, onDragLeave: function () { return onDragLeave(props.index); }, onDragEnter: function () { return onDragEnter(props.index); }, onPointerEnter: function () { return setHoveredItem(props.index); }, onPointerLeave: function () { return setHoveredItem(-1); }, onPointerOver: function () { return setHoveredItem(props.index); } }, { children: [(0, jsx_runtime_1.jsx)(Icon_1.Icon, __assign({ className: "kie-dmn-editor--draggable-icon", onPointerEnter: function () { return setDraggable(true); }, onPointerLeave: function () { return setDraggable(false); }, style: props.handlerStyle }, { children: (0, jsx_runtime_1.jsx)(grip_vertical_icon_1.default, { className: hovered ? "kie-dmn-editor--draggable-icon-handler-hovered" : "kie-dmn-editor--draggable-icon-handler" }) })), (0, jsx_runtime_1.jsx)("div", __assign({ style: props.childrenStyle, className: "kie-dmn-editor--draggable-children ".concat(props.childrenClassName ? props.childrenClassName : "") }, { children: (0, jsx_runtime_1.jsx)(exports.DraggableItemContext.Provider, __assign({ value: { hovered: hovered } }, { children: props.children })) }))] })));
}
exports.Draggable = Draggable;
//# sourceMappingURL=Draggable.js.map