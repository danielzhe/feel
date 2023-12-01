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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstraintDateTime = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./ConstraintDateTime.css");
var ConstraintTime_1 = require("./ConstraintTime");
var ConstraintDate_1 = require("./ConstraintDate");
function ConstraintDateTime(_a) {
    var value = _a.value, onChange = _a.onChange, isValid = _a.isValid, props = __rest(_a, ["value", "onChange", "isValid"]);
    var date = (0, react_1.useMemo)(function () { var _a, _b; return (_b = (_a = value.split("T")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : ""; }, [value]);
    var time = (0, react_1.useMemo)(function () { var _a, _b; return (_b = (_a = value.split("T")) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : ""; }, [value]);
    var onInternalChange = (0, react_1.useCallback)(function (args) {
        var _a, _b;
        var newDate = (_a = args.date) !== null && _a !== void 0 ? _a : date;
        var newTime = (_b = args.time) !== null && _b !== void 0 ? _b : time;
        if (newDate !== "" && newTime === "") {
            onChange("".concat(newDate));
        }
        if (newDate !== "" && newTime !== "") {
            onChange("".concat(newDate, "T").concat(newTime));
        }
    }, [date, onChange, time]);
    var onChangeDate = (0, react_1.useCallback)(function (value) {
        onInternalChange({ date: value });
    }, [onInternalChange]);
    var onChangeTime = (0, react_1.useCallback)(function (value) {
        onInternalChange({ time: value });
    }, [onInternalChange]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "kie-dmn-editor--constraint-date-time" }, { children: [(0, jsx_runtime_1.jsx)(ConstraintDate_1.ConstraintDate, __assign({}, props, { value: date, onChange: onChangeDate, isValid: isValid })), (0, jsx_runtime_1.jsx)(ConstraintTime_1.ConstraintTime, __assign({}, props, { value: time, onChange: onChangeTime, isValid: isValid }))] })) }));
}
exports.ConstraintDateTime = ConstraintDateTime;
//# sourceMappingURL=ConstraintDateTime.js.map