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
exports.ConstraintTime = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var TimePicker_1 = require("@patternfly/react-core/dist/js/components/TimePicker");
require("./Constraint.css");
require("./ConstraintTime.css");
var Select_1 = require("@patternfly/react-core/dist/js/components/Select");
var DmnEditorContext_1 = require("../../DmnEditorContext");
var useInViewSelect_1 = require("../../responsiveness/useInViewSelect");
var UTC_POSITEVE_TIMEZONES = [
    "+00:00",
    "+01:00",
    "+02:00",
    "+03:00",
    "+03:30",
    "+04:00",
    "+04:30",
    "+05:00",
    "+05:30",
    "+05:45",
    "+06:00",
    "+06:30",
    "+07:00",
    "+08:00",
    "+08:30",
    "+08:45",
    "+09:00",
    "+09:30",
    "+10:00",
    "+10:30",
    "+11:00",
    "+12:00",
    "+12:45",
    "+13:00",
    "+13:45",
    "+14:00",
];
var UTC_NEGATIVE_TIMEZONES = [
    "-12:00",
    "-11:00",
    "-10:00",
    "-09:30",
    "-09:00",
    "-08:00",
    "-07:00",
    "-06:00",
    "-05:00",
    "-04:00",
    "-03:30",
    "-03:00",
    "-02:30",
    "-02:00",
    "-01:00",
];
function ConstraintTime(_a) {
    var value = _a.value, onChange = _a.onChange, isValid = _a.isValid;
    var time = (0, react_1.useMemo)(function () {
        return value.includes("+") ? value.split("+")[0] : value.split("-")[0];
    }, [value]);
    var timezone = (0, react_1.useMemo)(function () {
        return value.includes("+")
            ? "+".concat(value.split("+")[1])
            : value.includes("-")
                ? "-".concat(value.split("-")[1])
                : UTC_POSITEVE_TIMEZONES[0];
    }, [value]);
    var _b = __read((0, react_1.useState)(false), 2), isSelectTimezoneOpen = _b[0], setSelectTimezoneOpen = _b[1];
    var dmnEditorRootElementRef = (0, DmnEditorContext_1.useDmnEditor)().dmnEditorRootElementRef;
    var toggleRef = (0, react_1.useRef)(null);
    var inViewTimezoneSelect = (0, useInViewSelect_1.useInViewSelect)(dmnEditorRootElementRef, toggleRef);
    var onInternalChange = (0, react_1.useCallback)(function (args) {
        var _a, _b;
        var newTime = (_a = args.time) !== null && _a !== void 0 ? _a : time;
        var newTimezone = (_b = args.timezone) !== null && _b !== void 0 ? _b : timezone;
        if (newTime !== "" && newTimezone !== "") {
            onChange("".concat(newTime).concat(newTimezone));
        }
    }, [onChange, time, timezone]);
    var onChangeTime = (0, react_1.useCallback)(function (value) {
        onInternalChange({ time: value });
    }, [onInternalChange]);
    var onSelectTimezone = (0, react_1.useCallback)(function (e, value) {
        onInternalChange({ timezone: value.toString() });
    }, [onInternalChange]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(TimePicker_1.TimePicker, { is24Hour: true, className: "kie-dmn-editor--constraint-time kie-dmn-editor--constraint-input ".concat(isValid ? "" : "kie-dmn-editor--constraint-invalid"), inputProps: { className: "kie-dmn-editor--constraint-input" }, time: time, onChange: function (e, value, hour, minute, seconds, isValid) {
                    if (isValid) {
                        onChangeTime(value);
                    }
                }, includeSeconds: true }), (0, jsx_runtime_1.jsx)(Select_1.Select, __assign({ toggleRef: toggleRef, className: "kie-dmn-editor--constraint-time-timezone ".concat(isValid ? "" : "kie-dmn-editor--constraint-time-timezone-invalid"), variant: Select_1.SelectVariant.single, placeholderText: "Select timezone", "aria-label": "Select timezone", onToggle: function (isExpanded) { return setSelectTimezoneOpen(isExpanded); }, onSelect: onSelectTimezone, selections: timezone, isOpen: isSelectTimezoneOpen, isDisabled: false, isPlain: true, maxHeight: inViewTimezoneSelect.maxHeight, direction: inViewTimezoneSelect.direction }, { children: __spreadArray(__spreadArray([], __read(UTC_NEGATIVE_TIMEZONES), false), __read(UTC_POSITEVE_TIMEZONES), false).map(function (timezone) { return ((0, jsx_runtime_1.jsx)(Select_1.SelectOption, { value: timezone }, timezone)); }) }))] }));
}
exports.ConstraintTime = ConstraintTime;
//# sourceMappingURL=ConstraintTime.js.map