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
exports.useEditableNodeLabel = exports.EditableNodeLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Nodes_1 = require("./Nodes");
var Store_1 = require("../../store/Store");
var DerivedStore_1 = require("../../store/DerivedStore");
var buildFeelQName_1 = require("../../feel/buildFeelQName");
var Truncate_1 = require("@patternfly/react-core/dist/js/components/Truncate");
var Dmn15Spec_1 = require("../../Dmn15Spec");
var InlineFeelNameInput_1 = require("../../feel/InlineFeelNameInput");
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
require("./EditableNodeLabel.css");
var useFocusableElement_1 = require("../../focus/useFocusableElement");
var react_dom_1 = require("react-dom");
function EditableNodeLabel(_a) {
    var id = _a.id, namedElement = _a.namedElement, namedElementQName = _a.namedElementQName, _isEditing = _a.isEditing, _setEditing = _a.setEditing, value = _a.value, onChange = _a.onChange, position = _a.position, truncate = _a.truncate, grow = _a.grow, shouldCommitOnBlur = _a.shouldCommitOnBlur, skipValidation = _a.skipValidation, allUniqueNames = _a.allUniqueNames, fontStyle = _a.fontStyle;
    var thisDmn = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn; });
    var importsByNamespace = (0, DerivedStore_1.useDmnEditorDerivedStore)().importsByNamespace;
    var isEditing = (0, react_1.useMemo)(function () {
        return !(namedElementQName === null || namedElementQName === void 0 ? void 0 : namedElementQName.prefix) && _isEditing;
    }, [_isEditing, namedElementQName === null || namedElementQName === void 0 ? void 0 : namedElementQName.prefix]);
    var setEditing = (0, react_1.useCallback)(function (args) {
        if (namedElementQName === null || namedElementQName === void 0 ? void 0 : namedElementQName.prefix) {
            return;
        }
        _setEditing(args);
    }, [_setEditing, namedElementQName === null || namedElementQName === void 0 ? void 0 : namedElementQName.prefix]);
    var displayValue = (0, react_1.useMemo)(function () {
        if (!value) {
            return undefined;
        }
        if (!namedElement || !namedElementQName) {
            return value;
        }
        var feelName = (0, buildFeelQName_1.buildFeelQNameFromXmlQName)({
            namedElement: namedElement,
            importsByNamespace: importsByNamespace,
            model: thisDmn.model.definitions,
            namedElementQName: namedElementQName,
            relativeToNamespace: thisDmn.model.definitions["@_namespace"],
        });
        return feelName.full;
    }, [value, namedElement, namedElementQName, importsByNamespace, thisDmn.model.definitions]);
    var _b = __read((0, react_1.useState)(displayValue), 2), internalValue = _b[0], setInternalValue = _b[1];
    (0, react_1.useEffect)(function () {
        setInternalValue(displayValue);
    }, [displayValue]);
    var _shouldCommitOnBlur = shouldCommitOnBlur !== null && shouldCommitOnBlur !== void 0 ? shouldCommitOnBlur : false;
    var _c = __read((0, react_1.useState)(_shouldCommitOnBlur), 2), shouldCommit = _c[0], setShouldCommit = _c[1];
    (0, react_1.useEffect)(function () {
        setShouldCommit(_shouldCommitOnBlur);
    }, [_shouldCommitOnBlur]);
    var restoreFocus = (0, react_1.useCallback)(function () {
        setTimeout(function () {
            var _a, _b;
            if (document.activeElement === ref.current) {
                (_b = (_a = previouslyFocusedElement.current) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
        }, 0);
    }, []);
    var isValid = (0, react_1.useMemo)(function () {
        var _a;
        if (skipValidation) {
            return true;
        }
        return Dmn15Spec_1.DMN15_SPEC.namedElement.isValidName((_a = namedElement === null || namedElement === void 0 ? void 0 : namedElement["@_id"]) !== null && _a !== void 0 ? _a : (0, api_1.generateUuid)(), internalValue, allUniqueNames);
    }, [skipValidation, namedElement, internalValue, allUniqueNames]);
    var onBlur = (0, react_1.useCallback)(function () {
        setEditing(false);
        setShouldCommit(_shouldCommitOnBlur);
        restoreFocus();
        if (isValid && internalValue !== value && shouldCommit) {
            onChange(internalValue);
        }
        else {
            console.debug("Label change cancelled for node with label ".concat(value));
            setInternalValue(value);
        }
    }, [internalValue, onChange, restoreFocus, _shouldCommitOnBlur, setEditing, shouldCommit, isValid, value]);
    var onKeyDown = (0, react_1.useCallback)(function (e) {
        e.stopPropagation();
        if (e.key === "Enter") {
            if (!isValid) {
                return;
            }
            else {
                setShouldCommit(true);
                restoreFocus();
            }
        }
        else if (e.key === "Escape") {
            setShouldCommit(false);
            restoreFocus();
        }
    }, [restoreFocus, isValid]);
    var previouslyFocusedElement = (0, react_1.useRef)();
    (0, react_1.useLayoutEffect)(function () {
        var _a, _b;
        if (isEditing) {
            previouslyFocusedElement.current = (_a = document.activeElement) !== null && _a !== void 0 ? _a : undefined;
            (_b = ref.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
    }, [isEditing]);
    (0, react_1.useLayoutEffect)(function () {
        var _a;
        if (isEditing) {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.setSelectionRange(0, 0);
        }
    }, [isEditing]);
    (0, react_1.useEffect)(function () {
        var _a, _b;
        if (isEditing) {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.setSelectionRange(0, (_b = ref.current) === null || _b === void 0 ? void 0 : _b.value.length, "forward");
        }
    }, [isEditing]);
    var ref = (0, react_1.useRef)(null);
    (0, useFocusableElement_1.useFocusableElement)(ref, id !== null && id !== void 0 ? id : namedElement === null || namedElement === void 0 ? void 0 : namedElement["@_id"], (0, react_1.useCallback)(function (cb) {
        setTimeout(function () {
            (0, react_dom_1.flushSync)(function () {
                setEditing(true);
            });
            cb();
        });
    }, [setEditing]));
    var positionClass = position !== null && position !== void 0 ? position : "center-center";
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--editable-node-name-input ".concat(positionClass, " ").concat(grow ? "grow" : "") }, { children: (isEditing && ((0, jsx_runtime_1.jsx)("input", { spellCheck: "false", style: __assign(__assign({}, fontStyle), (isValid ? {} : InlineFeelNameInput_1.invalidInlineFeelNameStyle)), onMouseDownCapture: function (e) { return e.stopPropagation(); }, onKeyDown: onKeyDown, tabIndex: -1, ref: ref, onBlur: onBlur, onChange: function (e) { return setInternalValue(e.target.value); }, value: internalValue }))) || ((0, jsx_runtime_1.jsx)("span", __assign({ style: __assign(__assign({ whiteSpace: "pre-wrap" }, fontStyle), (isValid ? {} : InlineFeelNameInput_1.invalidInlineFeelNameStyle)) }, { children: !displayValue ? ((0, jsx_runtime_1.jsx)(Nodes_1.EmptyLabel, {})) : !truncate ? (displayValue) : ((0, jsx_runtime_1.jsx)(Truncate_1.Truncate, { content: displayValue, tooltipPosition: "right-end" })) }))) })));
}
exports.EditableNodeLabel = EditableNodeLabel;
function useEditableNodeLabel(id) {
    var focus = (0, Store_1.useDmnEditorStore)(function (s) { return s.focus; });
    var _a = __read((0, react_1.useState)(!!id && !!focus.consumableId && focus.consumableId === id), 2), isEditingLabel = _a[0], setEditingLabel = _a[1];
    var triggerEditing = (0, react_1.useCallback)(function (e) {
        e.stopPropagation();
        e.preventDefault();
        setEditingLabel(true);
    }, []);
    var triggerEditingIfEnter = (0, react_1.useCallback)(function (e) {
        if (e.key === "Enter") {
            triggerEditing(e);
        }
    }, [triggerEditing]);
    return { isEditingLabel: isEditingLabel, setEditingLabel: setEditingLabel, triggerEditing: triggerEditing, triggerEditingIfEnter: triggerEditingIfEnter };
}
exports.useEditableNodeLabel = useEditableNodeLabel;
//# sourceMappingURL=EditableNodeLabel.js.map