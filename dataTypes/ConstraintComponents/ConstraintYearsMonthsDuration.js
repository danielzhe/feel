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
exports.ConstraintYearsMonthsDuration = exports.REGEX_YEARS_MONTH_DURATION = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
require("./Constraint.css");
exports.REGEX_YEARS_MONTH_DURATION = /^P(?!$)((-)?\d+Y)?((-)?\d+M)?$/;
function ConstraintYearsMonthsDuration(_a) {
    var id = _a.id, value = _a.value, onChange = _a.onChange, focusOwner = _a.focusOwner, setFocusOwner = _a.setFocusOwner, isValid = _a.isValid, isDisabled = _a.isDisabled;
    var years = (0, react_1.useMemo)(function () { return getYearsDuration(value); }, [value]);
    var months = (0, react_1.useMemo)(function () { return getMonthsDuration(value); }, [value]);
    (0, react_1.useEffect)(function () {
        var _a;
        if (focusOwner) {
            (_a = document.getElementById(focusOwner)) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [focusOwner]);
    var onInternalChange = (0, react_1.useCallback)(function (args) {
        var _a, _b, _c, _d;
        var y = ((_a = args.years) !== null && _a !== void 0 ? _a : years) ? ((_b = args.years) !== null && _b !== void 0 ? _b : years) + "Y" : "";
        var m = ((_c = args.months) !== null && _c !== void 0 ? _c : months) ? ((_d = args.months) !== null && _d !== void 0 ? _d : months) + "M" : "";
        var p = y || m ? "P" : "";
        onChange("".concat(p).concat(y).concat(m));
    }, [months, onChange, years]);
    var onYearsChange = (0, react_1.useCallback)(function (newValue, e) {
        onInternalChange({ years: newValue });
        setFocusOwner === null || setFocusOwner === void 0 ? void 0 : setFocusOwner(e.currentTarget.id);
    }, [onInternalChange, setFocusOwner]);
    var onMonthsChange = (0, react_1.useCallback)(function (newValue, e) {
        onInternalChange({ months: newValue });
        setFocusOwner === null || setFocusOwner === void 0 ? void 0 : setFocusOwner(e.currentTarget.id);
    }, [onInternalChange, setFocusOwner]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex", flexDirection: "row" } }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" } }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "Y:" }), (0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { id: "".concat(id, "-constraint-years"), type: "number", placeholder: "Years", style: { flex: "1 1 0px" }, className: "kie-dmn-editor--constraint-input ".concat(isValid ? "" : "kie-dmn-editor--constraint-invalid"), value: years, onChange: onYearsChange, autoFocus: true, isDisabled: isDisabled })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" } }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "M:" }), (0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { id: "".concat(id, "-constraint-months"), type: "number", placeholder: "Months", style: { flex: "1 1 0px" }, className: "kie-dmn-editor--constraint-input ".concat(isValid ? "" : "kie-dmn-editor--constraint-invalid"), value: months, onChange: onMonthsChange, isDisabled: isDisabled })] }))] })) }));
}
exports.ConstraintYearsMonthsDuration = ConstraintYearsMonthsDuration;
function getYearsDuration(value) {
    if (!value.includes("Y")) {
        return "";
    }
    var years = value.replace("P", "").split("Y")[0];
    if (years.length >= 1) {
        return !isNaN(parseInt(years)) ? years : "";
    }
    return "";
}
function getMonthsDuration(value) {
    if (!value.includes("M")) {
        return "";
    }
    var months = value.replace("P", "").split("M")[0];
    if (value.includes("Y")) {
        months = months.split("Y")[1];
    }
    if (months.length >= 1) {
        return !isNaN(parseInt(months)) ? months : "";
    }
    return "";
}
//# sourceMappingURL=ConstraintYearsMonthsDuration.js.map