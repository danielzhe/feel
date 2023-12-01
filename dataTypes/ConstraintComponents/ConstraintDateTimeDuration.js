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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstraintDateTimeDuration = exports.REGEX_DATE_TIME_DURATION = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
require("./Constraint.css");
exports.REGEX_DATE_TIME_DURATION = /^P(?!$)((-)?\d+D)?(T(?=(-)?\d)((-)?\d+H)?((-)?\d+M)?((-)?\d+S)?)?$/;
function ConstraintDateTimeDuration(_a) {
    var id = _a.id, value = _a.value, onChange = _a.onChange, focusOwner = _a.focusOwner, setFocusOwner = _a.setFocusOwner, isValid = _a.isValid, isDisabled = _a.isDisabled;
    var days = (0, react_1.useMemo)(function () { return getDaysDuration(value); }, [value]);
    var hours = (0, react_1.useMemo)(function () { return getHoursDuration(value); }, [value]);
    var minutes = (0, react_1.useMemo)(function () { return getMinutesDuration(value); }, [value]);
    var seconds = (0, react_1.useMemo)(function () { return getSecondsDuration(value); }, [value]);
    (0, react_1.useEffect)(function () {
        var _a;
        if (focusOwner) {
            (_a = document.getElementById(focusOwner)) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [focusOwner]);
    var onInternalChange = (0, react_1.useCallback)(function (args) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var d = ((_a = args.days) !== null && _a !== void 0 ? _a : days) ? ((_b = args.days) !== null && _b !== void 0 ? _b : days) + "D" : "";
        var h = ((_c = args.hours) !== null && _c !== void 0 ? _c : hours) ? ((_d = args.hours) !== null && _d !== void 0 ? _d : hours) + "H" : "";
        var m = ((_e = args.minutes) !== null && _e !== void 0 ? _e : minutes) ? ((_f = args.minutes) !== null && _f !== void 0 ? _f : minutes) + "M" : "";
        var s = ((_g = args.seconds) !== null && _g !== void 0 ? _g : seconds) ? ((_h = args.seconds) !== null && _h !== void 0 ? _h : seconds) + "S" : "";
        var t = h || m || s ? "T" : "";
        var p = d || h || m || s ? "P" : "";
        onChange("".concat(p).concat(d).concat(t).concat(h).concat(m).concat(s));
    }, [days, hours, minutes, onChange, seconds]);
    var onDaysChange = (0, react_1.useCallback)(function (newValue, e) {
        onInternalChange({ days: newValue });
        setFocusOwner === null || setFocusOwner === void 0 ? void 0 : setFocusOwner(e.currentTarget.id);
    }, [onInternalChange, setFocusOwner]);
    var onHoursChange = (0, react_1.useCallback)(function (newValue, e) {
        onInternalChange({ hours: newValue });
        setFocusOwner === null || setFocusOwner === void 0 ? void 0 : setFocusOwner(e.currentTarget.id);
    }, [onInternalChange, setFocusOwner]);
    var onMinutesChange = (0, react_1.useCallback)(function (newValue, e) {
        onInternalChange({ minutes: newValue });
        setFocusOwner === null || setFocusOwner === void 0 ? void 0 : setFocusOwner(e.currentTarget.id);
    }, [onInternalChange, setFocusOwner]);
    var onSecondsChange = (0, react_1.useCallback)(function (newValue, e) {
        onInternalChange({ seconds: newValue });
        setFocusOwner === null || setFocusOwner === void 0 ? void 0 : setFocusOwner(e.currentTarget.id);
    }, [onInternalChange, setFocusOwner]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex", flexDirection: "row" } }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" } }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "D:" }), (0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { id: "".concat(id, "-constraint-days"), type: "number", placeholder: "Days", className: "kie-dmn-editor--constraint-input ".concat(isValid ? "" : "kie-dmn-editor--constraint-invalid"), value: days, onChange: onDaysChange, isDisabled: isDisabled, autoFocus: true })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" } }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "H:" }), (0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { id: "".concat(id, "-constraint-hours"), type: "number", placeholder: "Hours", className: "kie-dmn-editor--constraint-input ".concat(isValid ? "" : "kie-dmn-editor--constraint-invalid"), value: hours, onChange: onHoursChange, isDisabled: isDisabled })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" } }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "M:" }), (0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { id: "".concat(id, "-constraint-minutes"), type: "number", placeholder: "Minutes", className: "kie-dmn-editor--constraint-input ".concat(isValid ? "" : "kie-dmn-editor--constraint-invalid"), value: minutes, onChange: onMinutesChange, isDisabled: isDisabled })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" } }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "S:" }), (0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { id: "".concat(id, "-constraint-seconds"), type: "number", placeholder: "Seconds", className: "kie-dmn-editor--constraint-input ".concat(isValid ? "" : "kie-dmn-editor--constraint-invalid"), value: seconds, onChange: onSecondsChange, isDisabled: isDisabled })] }))] })) }));
}
exports.ConstraintDateTimeDuration = ConstraintDateTimeDuration;
function getDaysDuration(value) {
    if (!value.includes("D")) {
        return "";
    }
    var days = value.replace("P", "").split("D")[0];
    if (days.length >= 1) {
        return !isNaN(parseInt(days)) ? days : "";
    }
    return "";
}
function getHoursDuration(value) {
    if (!value.includes("T") || !value.includes("H")) {
        return "";
    }
    var hours = value.replace("P", "").replace("T", "").split("H")[0];
    if (hours.includes("D")) {
        hours = hours.split("D")[1];
    }
    if (hours.length >= 1) {
        return !isNaN(parseInt(hours)) ? hours : "";
    }
    return "";
}
function getMinutesDuration(value) {
    if (!value.includes("T") || !value.includes("M")) {
        return "";
    }
    var hours = value.replace("P", "").replace("T", "").split("M")[0];
    if (hours.includes("D")) {
        hours = hours.split("D")[1];
    }
    if (hours.includes("H")) {
        hours = hours.split("H")[1];
    }
    if (hours.length >= 1) {
        return !isNaN(parseInt(hours)) ? hours : "";
    }
    return "";
}
function getSecondsDuration(value) {
    if (!value.includes("T") || !value.includes("S")) {
        return "";
    }
    var hours = value.replace("P", "").replace("T", "").split("S")[0];
    if (hours.includes("D")) {
        hours = hours.split("D")[1];
    }
    if (hours.includes("H")) {
        hours = hours.split("H")[1];
    }
    if (hours.includes("M")) {
        hours = hours.split("M")[1];
    }
    if (hours.length >= 1) {
        return !isNaN(parseInt(hours)) ? hours : "";
    }
    return "";
}
//# sourceMappingURL=ConstraintDateTimeDuration.js.map