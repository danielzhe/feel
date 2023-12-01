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
exports.isRange = exports.hasRangeStructure = exports.hasRangeEndStructure = exports.hasRangeStartStructure = exports.ConstraintsRange = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ConstraintsExpression_1 = require("./ConstraintsExpression");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var HelperText_1 = require("@patternfly/react-core/dist/js/components/HelperText");
var Label_1 = require("@patternfly/react-core/dist/js/components/Label");
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var RANGE_CONSTRAINT_SEPARATOR = "..";
var CONSTRAINT_START_ID = "start";
var CONSTRAINT_END_ID = "end";
function ConstraintsRange(_a) {
    var isReadonly = _a.isReadonly, value = _a.value, expressionValue = _a.expressionValue, type = _a.type, typeHelper = _a.typeHelper, onSave = _a.onSave, isDisabled = _a.isDisabled;
    var start = (0, react_1.useMemo)(function () { var _a, _b; return (_b = typeHelper.recover((_a = isRange(value !== null && value !== void 0 ? value : "", typeHelper.check)) === null || _a === void 0 ? void 0 : _a[0])) !== null && _b !== void 0 ? _b : ""; }, [typeHelper, value]);
    var end = (0, react_1.useMemo)(function () { var _a, _b; return (_b = typeHelper.recover((_a = isRange(value !== null && value !== void 0 ? value : "", typeHelper.check)) === null || _a === void 0 ? void 0 : _a[1])) !== null && _b !== void 0 ? _b : ""; }, [typeHelper, value]);
    var includeStart = (0, react_1.useMemo)(function () {
        if (value === undefined) {
            return true;
        }
        if (hasRangeStartStructure(value)) {
            if (value.charAt(0) === "[") {
                return true;
            }
            return false;
        }
        return true;
    }, [value]);
    var includeEnd = (0, react_1.useMemo)(function () {
        if (value === undefined) {
            return false;
        }
        if (hasRangeEndStructure(value)) {
            if (value.charAt(value.length - 1) === "]") {
                return true;
            }
            return false;
        }
        return false;
    }, [value]);
    var isStartValid = (0, react_1.useCallback)(function (args) {
        if (type === api_1.DmnBuiltInDataType.String) {
            return true;
        }
        var parsedEnd = typeHelper.parse(args.end);
        var parsedStart = typeHelper.parse(args.start);
        return args.end !== "" ? (args.includeEnd ? parsedEnd >= parsedStart : parsedEnd > parsedStart) : true;
    }, [type, typeHelper]);
    var isEndValid = (0, react_1.useCallback)(function (args) {
        if (type === api_1.DmnBuiltInDataType.String) {
            return true;
        }
        var parsedEnd = typeHelper.parse(args.end);
        var parsedStart = typeHelper.parse(args.start);
        return args.start !== "" ? (args.includeEnd ? parsedEnd >= parsedStart : parsedEnd > parsedStart) : true;
    }, [type, typeHelper]);
    var onInternalChange = (0, react_1.useCallback)(function (args) {
        var _a, _b, _c, _d;
        if (args === undefined) {
            return;
        }
        var internalStart = (_a = args === null || args === void 0 ? void 0 : args.start) !== null && _a !== void 0 ? _a : start;
        var internalEnd = (_b = args === null || args === void 0 ? void 0 : args.end) !== null && _b !== void 0 ? _b : end;
        if (internalStart === "" && internalEnd === "") {
            onSave("");
            return;
        }
        onSave("".concat(((_c = args === null || args === void 0 ? void 0 : args.includeStart) !== null && _c !== void 0 ? _c : includeStart) ? "[" : "(").concat(typeHelper.transform(internalStart), "..").concat(typeHelper.transform(internalEnd)).concat(((_d = args === null || args === void 0 ? void 0 : args.includeEnd) !== null && _d !== void 0 ? _d : includeEnd) ? "]" : ")"));
    }, [end, includeEnd, includeStart, onSave, start, typeHelper]);
    var onStartChange = (0, react_1.useCallback)(function (newStartValue) {
        onInternalChange({ start: newStartValue });
    }, [onInternalChange]);
    var onEndChange = (0, react_1.useCallback)(function (newEndValue) {
        onInternalChange({ end: newEndValue });
    }, [onInternalChange]);
    var onIncludeStartToogle = (0, react_1.useCallback)(function () {
        onInternalChange({ includeStart: !includeStart });
    }, [includeStart, onInternalChange]);
    var onIncludeEndToogle = (0, react_1.useCallback)(function () {
        onInternalChange({ includeEnd: !includeEnd });
    }, [includeEnd, onInternalChange]);
    var messages = (0, react_1.useCallback)(function (value, operator) {
        if (type === api_1.DmnBuiltInDataType.Date && value !== "") {
            return "The next valid number is: (".concat(value, " ").concat(operator, " 1 Day).");
        }
        if (type === api_1.DmnBuiltInDataType.DateTime && value !== "") {
            return "The next valid number is: (".concat(value, " ").concat(operator, " 1 Second).");
        }
        if (type === api_1.DmnBuiltInDataType.DateTimeDuration && value !== "") {
            return "The next valid number is: (".concat(value, " ").concat(operator, " 1 Second).");
        }
        if (type === api_1.DmnBuiltInDataType.Number && value !== "") {
            return "The next valid number is: (".concat(value, " ").concat(operator, " 2e-52).");
        }
        if (type === api_1.DmnBuiltInDataType.Time && value !== "") {
            return "The next valid number is: (".concat(value, " ").concat(operator, " 1 Second).");
        }
        if (type === api_1.DmnBuiltInDataType.YearsMonthsDuration && value !== "") {
            return "The next valid number is: (".concat(value, " ").concat(operator, " 1 Month).");
        }
        return "";
    }, [type]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                    display: "grid",
                    gridTemplateColumns: "auto auto 1fr",
                    gridTemplateRows: "1fr 50px 70px 1fr 50px",
                    gridTemplateAreas: "\n          'start includeStartButton startField'\n          'empty1 arrow startDescription'\n          'empty2 arrow empty3'\n          'end includeEndButton endField'\n          'empty4 empty5 endDescription'\n          ",
                    columnGap: "10px",
                    alignItems: "center",
                } }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ style: { gridArea: "start" } }, { children: (0, jsx_runtime_1.jsx)(Label_1.Label, { children: "Start" }) })), (0, jsx_runtime_1.jsx)("div", __assign({ style: { gridArea: "includeStartButton" } }, { children: (0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, __assign({ content: includeStart ? "Click to remove value from the range" : "Click to include value in the range" }, { children: (0, jsx_runtime_1.jsx)("button", { id: CONSTRAINT_START_ID, disabled: isReadonly || isDisabled, onClick: function () { return onIncludeStartToogle(); }, style: {
                                    borderRadius: "100%",
                                    borderColor: "rgb(90 90 90)",
                                    borderStyle: "solid",
                                    borderWidth: "2px",
                                    width: "20px",
                                    height: "20px",
                                    backgroundColor: includeStart ? "rgb(90 90 90)" : "transparent",
                                } }) })) })), (0, jsx_runtime_1.jsx)("div", __assign({ style: { gridArea: "startField" } }, { children: typeHelper.component({
                            autoFocus: start === "",
                            onBlur: function () { return onInternalChange(); },
                            onChange: onStartChange,
                            id: "start-value",
                            isDisabled: isReadonly || isDisabled,
                            placeholder: "Starts with",
                            style: {
                                outline: "none",
                            },
                            value: start,
                            isValid: isStartValid({ includeEnd: includeEnd, start: start, end: end }),
                        }) })), (0, jsx_runtime_1.jsx)("div", __assign({ style: { gridArea: "startDescription" } }, { children: (0, jsx_runtime_1.jsx)(HelperText_1.HelperText, { children: (0, jsx_runtime_1.jsx)(HelperText_1.HelperTextItem, __assign({ variant: "indeterminate" }, { children: includeStart
                                    ? "The starting value will be included in the range."
                                    : "The starting value will not be included in the range. ".concat(messages(start, "+")) })) }) })), (0, jsx_runtime_1.jsx)("div", __assign({ style: { gridArea: "arrow", justifySelf: "center", alignSelf: "center", height: "100%" } }, { children: (0, jsx_runtime_1.jsx)("div", { style: {
                                borderLeftStyle: "solid",
                                borderLeftColor: "rgb(90 90 90)",
                                borderLeftWidth: "2px",
                                height: "calc(100% + 18px)",
                                marginTop: "-10px",
                                marginBottom: "-8px",
                            } }) })), (0, jsx_runtime_1.jsx)("div", __assign({ style: { gridArea: "end" } }, { children: (0, jsx_runtime_1.jsx)(Label_1.Label, { children: "End" }) })), (0, jsx_runtime_1.jsx)("div", __assign({ style: { gridArea: "includeEndButton" } }, { children: (0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, __assign({ content: includeEnd ? "Click to remove value from the range" : "Click to include value in the range" }, { children: (0, jsx_runtime_1.jsx)("button", { id: CONSTRAINT_END_ID, disabled: isReadonly || isDisabled, onClick: function () { return onIncludeEndToogle(); }, style: {
                                    borderRadius: "100%",
                                    borderColor: "rgb(90 90 90)",
                                    borderStyle: "solid",
                                    borderWidth: "2px",
                                    width: "20px",
                                    height: "20px",
                                    backgroundColor: includeEnd ? "rgb(90 90 90)" : "transparent",
                                } }) })) })), (0, jsx_runtime_1.jsx)("div", __assign({ style: { gridArea: "endField" } }, { children: typeHelper.component({
                            autoFocus: start !== "",
                            onBlur: function () { return onInternalChange(); },
                            onChange: onEndChange,
                            id: "end-value",
                            isDisabled: isReadonly || isDisabled,
                            placeholder: "Ends with",
                            style: { outline: "none" },
                            value: end,
                            isValid: isEndValid({ includeEnd: includeEnd, start: start, end: end }),
                        }) })), (0, jsx_runtime_1.jsx)("div", __assign({ style: { gridArea: "endDescription" } }, { children: (0, jsx_runtime_1.jsx)(HelperText_1.HelperText, { children: (0, jsx_runtime_1.jsx)(HelperText_1.HelperTextItem, __assign({ variant: "indeterminate" }, { children: includeEnd
                                    ? "The ending value will be included in the range."
                                    : "The ending value will not be included in the range. ".concat(messages(end, "-")) })) }) }))] })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(ConstraintsExpression_1.ConstraintsExpression, { isReadonly: true, value: expressionValue !== null && expressionValue !== void 0 ? expressionValue : "", type: type })] }));
}
exports.ConstraintsRange = ConstraintsRange;
function hasRangeStartStructure(value) {
    return value.startsWith("(") || value.startsWith("[") || value.startsWith("]");
}
exports.hasRangeStartStructure = hasRangeStartStructure;
function hasRangeEndStructure(value) {
    return value.endsWith(")") || value.endsWith("]") || value.startsWith("[");
}
exports.hasRangeEndStructure = hasRangeEndStructure;
function hasRangeStructure(value) {
    return (hasRangeStartStructure(value) && hasRangeEndStructure(value) && value.split(RANGE_CONSTRAINT_SEPARATOR).length === 2);
}
exports.hasRangeStructure = hasRangeStructure;
function isRange(value, typeCheck) {
    if (value === undefined) {
        return undefined;
    }
    if (!hasRangeStructure(value)) {
        return undefined;
    }
    var rangeValues = value.split(RANGE_CONSTRAINT_SEPARATOR);
    if (rangeValues.length === 2 && (typeCheck === null || typeCheck === void 0 ? void 0 : typeCheck(rangeValues[0].slice(1))) && (typeCheck === null || typeCheck === void 0 ? void 0 : typeCheck(rangeValues[1].slice(0, -1)))) {
        return [rangeValues[0].slice(1), rangeValues[1].slice(0, -1)];
    }
    return undefined;
}
exports.isRange = isRange;
//# sourceMappingURL=ConstraintsRange.js.map