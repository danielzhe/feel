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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
exports.InlineFeelNameInput = exports.invalidInlineFeelNameStyle = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Dmn15Spec_1 = require("../Dmn15Spec");
var useFocusableElement_1 = require("../focus/useFocusableElement");
exports.invalidInlineFeelNameStyle = {
    color: "red",
    textDecoration: "red dotted underline",
    textUnderlinePosition: "under",
};
function InlineFeelNameInput(_a) {
    var _b;
    var id = _a.id, onRenamed = _a.onRenamed, isReadonly = _a.isReadonly, name = _a.name, shouldCommitOnBlur = _a.shouldCommitOnBlur, isPlain = _a.isPlain, allUniqueNames = _a.allUniqueNames, validate = _a.validate, placeholder = _a.placeholder, onKeyDown = _a.onKeyDown, saveInvalidValue = _a.saveInvalidValue, enableAutoFocusing = _a.enableAutoFocusing, inputProps = __rest(_a, ["id", "onRenamed", "isReadonly", "name", "shouldCommitOnBlur", "isPlain", "allUniqueNames", "validate", "placeholder", "onKeyDown", "saveInvalidValue", "enableAutoFocusing"]);
    var _validate = (validate !== null && validate !== void 0 ? validate : (validate = Dmn15Spec_1.DMN15_SPEC.namedElement.isValidName));
    var inputRef = (0, react_1.useRef)(null);
    var previouslyFocusedElement = (0, react_1.useRef)();
    (0, useFocusableElement_1.useFocusableElement)(inputRef, (enableAutoFocusing !== null && enableAutoFocusing !== void 0 ? enableAutoFocusing : true) ? id : undefined);
    var restoreFocus = (0, react_1.useCallback)(function () {
        setTimeout(function () {
            var _a, _b;
            if (document.activeElement === inputRef.current) {
                (_b = (_a = previouslyFocusedElement.current) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
        }, 0);
    }, []);
    var _c = __read((0, react_1.useState)(_validate(id, name, allUniqueNames)), 2), isValid = _c[0], setValid = _c[1];
    var updateIsValidFlag = (0, react_1.useCallback)(function (name) {
        var isValid = _validate(id, name, allUniqueNames);
        setValid(isValid);
        return isValid;
    }, [_validate, allUniqueNames, id]);
    (0, react_1.useEffect)(function () {
        updateIsValidFlag(name);
    }, [name, updateIsValidFlag]);
    (0, react_1.useEffect)(function () {
        inputRef.current.value = name;
    }, [name]);
    var _style = inputProps.style, disabled = inputProps.disabled, defaultValue = inputProps.defaultValue, _inputProps = __rest(inputProps, ["style", "disabled", "defaultValue"]);
    var _placeholder = placeholder !== null && placeholder !== void 0 ? placeholder : "Enter a name...";
    return ((0, jsx_runtime_1.jsx)("input", __assign({ spellCheck: "false", ref: inputRef, style: __assign(__assign(__assign(__assign({}, (isPlain ? { border: 0, outline: "none", background: "transparent" } : {})), { flexGrow: 1, display: "inline", width: "100%" }), (isValid ? {} : exports.invalidInlineFeelNameStyle)), _style), size: 2 + Math.max(0, (_b = _placeholder === null || _placeholder === void 0 ? void 0 : _placeholder.length) !== null && _b !== void 0 ? _b : 0, name.length), onInput: function (e) {
            var _a, _b;
            e.target.size = 2 + Math.max(0, (_a = _placeholder === null || _placeholder === void 0 ? void 0 : _placeholder.length) !== null && _a !== void 0 ? _a : 0, (_b = e.target.value.length) !== null && _b !== void 0 ? _b : 0);
        }, disabled: isReadonly, placeholder: _placeholder, onChange: function (e) { return updateIsValidFlag(e.currentTarget.value); }, defaultValue: name, onFocus: function (e) {
            var _a;
            previouslyFocusedElement.current = (_a = document.activeElement) !== null && _a !== void 0 ? _a : undefined;
        }, onKeyDown: function (e) {
            onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
            e.stopPropagation();
            if (e.key === "Enter") {
                e.preventDefault();
                var isValid_1 = updateIsValidFlag(e.currentTarget.value);
                if (isValid_1 || saveInvalidValue) {
                    onRenamed(e.currentTarget.value);
                }
            }
            else if (e.key === "Escape") {
                e.preventDefault();
                e.currentTarget.value = name;
                updateIsValidFlag(e.currentTarget.value);
                e.currentTarget.blur();
            }
        }, onBlur: function (e) {
            if ((isValid || saveInvalidValue) && shouldCommitOnBlur) {
                onRenamed(e.currentTarget.value);
            }
            else {
                e.currentTarget.value = name;
                updateIsValidFlag(e.currentTarget.value);
            }
            restoreFocus();
        } }, _inputProps), id));
}
exports.InlineFeelNameInput = InlineFeelNameInput;
//# sourceMappingURL=InlineFeelNameInput.js.map