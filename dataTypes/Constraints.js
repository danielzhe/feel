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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constraints = exports.constraintTypeHelper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ConstraintsExpression_1 = require("./ConstraintsExpression");
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var ConstraintsEnum_1 = require("./ConstraintsEnum");
var ConstraintsRange_1 = require("./ConstraintsRange");
var ToggleGroup_1 = require("@patternfly/react-core/dist/js/components/ToggleGroup");
var DataTypeSpec_1 = require("./DataTypeSpec");
var moment_1 = __importDefault(require("moment"));
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
var ConstraintDate_1 = require("./ConstraintComponents/ConstraintDate");
var ConstraintDateTime_1 = require("./ConstraintComponents/ConstraintDateTime");
var ConstraintDateTimeDuration_1 = require("./ConstraintComponents/ConstraintDateTimeDuration");
var ConstraintTime_1 = require("./ConstraintComponents/ConstraintTime");
var ConstraintYearsMonthsDuration_1 = require("./ConstraintComponents/ConstraintYearsMonthsDuration");
var InlineFeelNameInput_1 = require("../feel/InlineFeelNameInput");
var ConstraintsType;
(function (ConstraintsType) {
    ConstraintsType["ENUMERATION"] = "Enumeration";
    ConstraintsType["EXPRESSION"] = "Expression";
    ConstraintsType["RANGE"] = "Range";
    ConstraintsType["NONE"] = "None";
})(ConstraintsType || (ConstraintsType = {}));
var constraintTypeHelper = function (typeRef) {
    return {
        check: function (value) {
            var recoveredValue = (0, exports.constraintTypeHelper)(typeRef).recover(value);
            switch (typeRef) {
                case api_1.DmnBuiltInDataType.Any:
                    return true;
                case api_1.DmnBuiltInDataType.String:
                    if (recoveredValue === "") {
                        return true;
                    }
                    if ((0, exports.constraintTypeHelper)(api_1.DmnBuiltInDataType.Date).check(value)) {
                        return false;
                    }
                    if ((0, exports.constraintTypeHelper)(api_1.DmnBuiltInDataType.DateTime).check(value)) {
                        return false;
                    }
                    if ((0, exports.constraintTypeHelper)(api_1.DmnBuiltInDataType.DateTimeDuration).check(value)) {
                        return false;
                    }
                    if ((0, exports.constraintTypeHelper)(api_1.DmnBuiltInDataType.Time).check(value)) {
                        return false;
                    }
                    if ((0, exports.constraintTypeHelper)(api_1.DmnBuiltInDataType.YearsMonthsDuration).check(value)) {
                        return false;
                    }
                    return typeof recoveredValue === "string";
                case api_1.DmnBuiltInDataType.Date:
                    return (0, moment_1.default)(recoveredValue, "YYYY-MM-DD", true).isValid() || value === "" || recoveredValue === "";
                case api_1.DmnBuiltInDataType.DateTime:
                    return ((0, moment_1.default)(recoveredValue, "YYYY-MM-DDTHH:mm:ssZZ", true).isValid() ||
                        (0, moment_1.default)(recoveredValue, "YYYY-MM-DD", true).isValid() ||
                        value === "" ||
                        recoveredValue === "");
                case api_1.DmnBuiltInDataType.DateTimeDuration:
                    return ConstraintDateTimeDuration_1.REGEX_DATE_TIME_DURATION.test(recoveredValue !== null && recoveredValue !== void 0 ? recoveredValue : "") || value === "" || recoveredValue === "";
                case api_1.DmnBuiltInDataType.Number:
                    return !isNaN(parseFloat(recoveredValue !== null && recoveredValue !== void 0 ? recoveredValue : "")) || value === "" || recoveredValue === "";
                case api_1.DmnBuiltInDataType.Time:
                    return (0, moment_1.default)(recoveredValue, "HH:mm:ssZZ", true).isValid() || value === "" || recoveredValue === "";
                case api_1.DmnBuiltInDataType.YearsMonthsDuration:
                    return ConstraintYearsMonthsDuration_1.REGEX_YEARS_MONTH_DURATION.test(recoveredValue !== null && recoveredValue !== void 0 ? recoveredValue : "") || value === "" || recoveredValue === "";
                default:
                    return false;
            }
        },
        parse: function (value) {
            var recoveredValue = (0, exports.constraintTypeHelper)(typeRef).recover(value);
            switch (typeRef) {
                case api_1.DmnBuiltInDataType.Number:
                    return parseFloat(recoveredValue !== null && recoveredValue !== void 0 ? recoveredValue : "");
                case api_1.DmnBuiltInDataType.DateTimeDuration:
                case api_1.DmnBuiltInDataType.YearsMonthsDuration:
                    return moment_1.default.duration(recoveredValue);
                case api_1.DmnBuiltInDataType.DateTime:
                    return (0, moment_1.default)(recoveredValue).toDate();
                case api_1.DmnBuiltInDataType.Date:
                case api_1.DmnBuiltInDataType.String:
                case api_1.DmnBuiltInDataType.Time:
                default:
                    return recoveredValue;
            }
        },
        transform: function (value) {
            switch (typeRef) {
                case api_1.DmnBuiltInDataType.Any:
                case api_1.DmnBuiltInDataType.String:
                    return JSON.stringify(value);
                case api_1.DmnBuiltInDataType.Date:
                    return "date(\"".concat(value, "\")");
                case api_1.DmnBuiltInDataType.DateTime:
                    return "date and time(\"".concat(value, "\")");
                case api_1.DmnBuiltInDataType.DateTimeDuration:
                case api_1.DmnBuiltInDataType.YearsMonthsDuration:
                    return "duration(\"".concat(value, "\")");
                case api_1.DmnBuiltInDataType.Number:
                    return "".concat(value);
                case api_1.DmnBuiltInDataType.Time:
                    return "time(\"".concat(value, "\")");
                default:
                    return value;
            }
        },
        recover: function (value) {
            if (value === undefined) {
                return undefined;
            }
            switch (typeRef) {
                case api_1.DmnBuiltInDataType.Any:
                    if (value === "") {
                        return "";
                    }
                    try {
                        return "".concat(JSON.parse(value));
                    }
                    catch (error) {
                        return undefined;
                    }
                case api_1.DmnBuiltInDataType.String:
                    if (value === "") {
                        return "";
                    }
                    try {
                        if (typeof JSON.parse(value) !== "string") {
                            return undefined;
                        }
                        return "".concat(JSON.parse(value));
                    }
                    catch (error) {
                        return undefined;
                    }
                case api_1.DmnBuiltInDataType.Date:
                    return value.replace('date("', "").replace('")', "");
                case api_1.DmnBuiltInDataType.DateTime:
                    return value.replace('date and time("', "").replace('")', "");
                case api_1.DmnBuiltInDataType.DateTimeDuration:
                    return value.replace('duration("', "").replace('")', "");
                case api_1.DmnBuiltInDataType.Number:
                    return "".concat(value);
                case api_1.DmnBuiltInDataType.Time:
                    return value.replace('time("', "").replace('")', "");
                case api_1.DmnBuiltInDataType.YearsMonthsDuration:
                    return value.replace('duration("', "").replace('")', "");
                default:
                    return "".concat(value);
            }
        },
        component: function (props) {
            switch (typeRef) {
                case api_1.DmnBuiltInDataType.Date:
                    return (0, jsx_runtime_1.jsx)(ConstraintDate_1.ConstraintDate, __assign({}, props));
                case api_1.DmnBuiltInDataType.DateTime:
                    return (0, jsx_runtime_1.jsx)(ConstraintDateTime_1.ConstraintDateTime, __assign({}, props));
                case api_1.DmnBuiltInDataType.DateTimeDuration:
                    return (0, jsx_runtime_1.jsx)(ConstraintDateTimeDuration_1.ConstraintDateTimeDuration, __assign({}, props));
                case api_1.DmnBuiltInDataType.Time:
                    return (0, jsx_runtime_1.jsx)(ConstraintTime_1.ConstraintTime, __assign({}, props));
                case api_1.DmnBuiltInDataType.YearsMonthsDuration:
                    return (0, jsx_runtime_1.jsx)(ConstraintYearsMonthsDuration_1.ConstraintYearsMonthsDuration, __assign({}, props));
                case api_1.DmnBuiltInDataType.Number:
                    return ((0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { autoFocus: props.autoFocus, onChange: props.onChange, id: props.id, isDisabled: props.isDisabled, value: props.value, onKeyDown: props.onKeyDown, style: __assign(__assign({}, props.style), (props.isValid ? {} : InlineFeelNameInput_1.invalidInlineFeelNameStyle)), type: "number" }));
                case api_1.DmnBuiltInDataType.Any:
                case api_1.DmnBuiltInDataType.String:
                default:
                    return ((0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { autoFocus: props.autoFocus, onChange: props.onChange, id: props.id, isDisabled: props.isDisabled, value: props.value, onKeyDown: props.onKeyDown, style: __assign(__assign({}, props.style), (props.isValid ? {} : InlineFeelNameInput_1.invalidInlineFeelNameStyle)), type: "text" }));
            }
        },
    };
};
exports.constraintTypeHelper = constraintTypeHelper;
function Constraints(_a) {
    var _b;
    var isReadonly = _a.isReadonly, itemDefinition = _a.itemDefinition, editItemDefinition = _a.editItemDefinition;
    var allowedValues = (0, react_1.useMemo)(function () { return itemDefinition === null || itemDefinition === void 0 ? void 0 : itemDefinition.allowedValues; }, [itemDefinition === null || itemDefinition === void 0 ? void 0 : itemDefinition.allowedValues]);
    var constraintValue = (0, react_1.useMemo)(function () { var _a; return (_a = allowedValues === null || allowedValues === void 0 ? void 0 : allowedValues.text.__$$text) !== null && _a !== void 0 ? _a : allowedValues === null || allowedValues === void 0 ? void 0 : allowedValues.text.__$$text; }, [allowedValues === null || allowedValues === void 0 ? void 0 : allowedValues.text.__$$text]);
    var kieConstraintType = (0, react_1.useMemo)(function () { return allowedValues === null || allowedValues === void 0 ? void 0 : allowedValues["@_kie:constraintType"]; }, [allowedValues]);
    var typeRef = (0, react_1.useMemo)(function () { var _a, _b; return (_b = (_a = itemDefinition === null || itemDefinition === void 0 ? void 0 : itemDefinition.typeRef) === null || _a === void 0 ? void 0 : _a.__$$text) !== null && _b !== void 0 ? _b : api_1.DmnBuiltInDataType.Undefined; }, [(_b = itemDefinition === null || itemDefinition === void 0 ? void 0 : itemDefinition.typeRef) === null || _b === void 0 ? void 0 : _b.__$$text]);
    var isConstraintEnum = (0, react_1.useMemo)(function () { return (0, ConstraintsEnum_1.isEnum)(constraintValue, (0, exports.constraintTypeHelper)(typeRef).check); }, [constraintValue, typeRef]);
    var isConstraintRange = (0, react_1.useMemo)(function () { return (0, ConstraintsRange_1.isRange)(constraintValue, (0, exports.constraintTypeHelper)(typeRef).check); }, [constraintValue, typeRef]);
    var itemDefinitionId = (0, react_1.useMemo)(function () { return itemDefinition["@_id"]; }, [itemDefinition]);
    var enumToKieConstraintType = (0, react_1.useCallback)(function (selection) {
        switch (selection) {
            case ConstraintsType.ENUMERATION:
                return "enumeration";
            case ConstraintsType.EXPRESSION:
                return "expression";
            case ConstraintsType.RANGE:
                return "range";
            case ConstraintsType.NONE:
            default:
                return undefined;
        }
    }, []);
    var isConstraintEnabled = (0, react_1.useMemo)(function () {
        var enabledConstraints = DataTypeSpec_1.constrainableBuiltInFeelTypes.get(typeRef);
        return {
            enumeration: (enabledConstraints !== null && enabledConstraints !== void 0 ? enabledConstraints : []).includes(enumToKieConstraintType(ConstraintsType.ENUMERATION)),
            range: (enabledConstraints !== null && enabledConstraints !== void 0 ? enabledConstraints : []).includes(enumToKieConstraintType(ConstraintsType.RANGE)),
            expression: (enabledConstraints !== null && enabledConstraints !== void 0 ? enabledConstraints : []).includes(enumToKieConstraintType(ConstraintsType.EXPRESSION)),
        };
    }, [enumToKieConstraintType, typeRef]);
    var selectedConstraint = (0, react_1.useMemo)(function () {
        if (isConstraintEnabled.enumeration && kieConstraintType === "enumeration") {
            return ConstraintsType.ENUMERATION;
        }
        if (isConstraintEnabled.range && kieConstraintType === "range") {
            return ConstraintsType.RANGE;
        }
        if (isConstraintEnabled.expression && kieConstraintType === "expression") {
            return ConstraintsType.EXPRESSION;
        }
        if (kieConstraintType === undefined && constraintValue && isConstraintEnabled.enumeration && isConstraintEnum) {
            return ConstraintsType.ENUMERATION;
        }
        if (kieConstraintType === undefined && constraintValue && isConstraintEnabled.range && isConstraintRange) {
            return ConstraintsType.RANGE;
        }
        if (kieConstraintType === undefined && constraintValue) {
            return ConstraintsType.EXPRESSION;
        }
        return ConstraintsType.NONE;
    }, [
        constraintValue,
        isConstraintEnabled.enumeration,
        isConstraintEnabled.expression,
        isConstraintEnabled.range,
        isConstraintEnum,
        isConstraintRange,
        kieConstraintType,
    ]);
    var onEnumChange = (0, react_1.useCallback)(function (value) {
        editItemDefinition(itemDefinitionId, function (itemDefinition) {
            var _a, _b, _c;
            (_a = itemDefinition.allowedValues) !== null && _a !== void 0 ? _a : (itemDefinition.allowedValues = { text: { __$$text: "" } });
            itemDefinition.allowedValues.text.__$$text = value !== null && value !== void 0 ? value : "";
            itemDefinition.allowedValues["@_id"] = (_c = (_b = itemDefinition.allowedValues) === null || _b === void 0 ? void 0 : _b["@_id"]) !== null && _c !== void 0 ? _c : (0, api_1.generateUuid)();
        });
    }, [editItemDefinition, itemDefinitionId]);
    var onExpressionChange = (0, react_1.useCallback)(function (value) {
        editItemDefinition(itemDefinitionId, function (itemDefinition) {
            var _a, _b, _c;
            (_a = itemDefinition.allowedValues) !== null && _a !== void 0 ? _a : (itemDefinition.allowedValues = { text: { __$$text: "" } });
            itemDefinition.allowedValues.text.__$$text = value !== null && value !== void 0 ? value : "";
            itemDefinition.allowedValues["@_id"] = (_c = (_b = itemDefinition.allowedValues) === null || _b === void 0 ? void 0 : _b["@_id"]) !== null && _c !== void 0 ? _c : (0, api_1.generateUuid)();
        });
    }, [editItemDefinition, itemDefinitionId]);
    var onRangeChange = (0, react_1.useCallback)(function (value) {
        editItemDefinition(itemDefinitionId, function (itemDefinition) {
            var _a, _b, _c;
            (_a = itemDefinition.allowedValues) !== null && _a !== void 0 ? _a : (itemDefinition.allowedValues = { text: { __$$text: "" } });
            itemDefinition.allowedValues.text.__$$text = value !== null && value !== void 0 ? value : "";
            itemDefinition.allowedValues["@_id"] = (_c = (_b = itemDefinition.allowedValues) === null || _b === void 0 ? void 0 : _b["@_id"]) !== null && _c !== void 0 ? _c : (0, api_1.generateUuid)();
        });
    }, [editItemDefinition, itemDefinitionId]);
    var onToggleGroupChange = (0, react_1.useCallback)(function (newSelection, event) {
        if (!newSelection) {
            return;
        }
        var selection = event.currentTarget.id;
        if (selection === ConstraintsType.NONE) {
            editItemDefinition(itemDefinitionId, function (itemDefinition) {
                itemDefinition.allowedValues = undefined;
            });
            return;
        }
        editItemDefinition(itemDefinitionId, function (itemDefinition) {
            var _a, _b, _c, _d, _e;
            (_a = itemDefinition.allowedValues) !== null && _a !== void 0 ? _a : (itemDefinition.allowedValues = { text: { __$$text: "" } });
            var previousKieContraintType = itemDefinition.allowedValues["@_kie:constraintType"];
            itemDefinition.allowedValues["@_kie:constraintType"] = enumToKieConstraintType(selection);
            if (selection === ConstraintsType.EXPRESSION) {
                return;
            }
            if (previousKieContraintType === "expression" &&
                selection === ConstraintsType.ENUMERATION &&
                (0, ConstraintsEnum_1.isEnum)(itemDefinition.allowedValues.text.__$$text, (0, exports.constraintTypeHelper)((_c = (_b = itemDefinition === null || itemDefinition === void 0 ? void 0 : itemDefinition.typeRef) === null || _b === void 0 ? void 0 : _b.__$$text) !== null && _c !== void 0 ? _c : api_1.DmnBuiltInDataType.Undefined).check)) {
                return;
            }
            if (previousKieContraintType === "expression" &&
                selection === ConstraintsType.RANGE &&
                (0, ConstraintsRange_1.isRange)(itemDefinition.allowedValues.text.__$$text, (0, exports.constraintTypeHelper)((_e = (_d = itemDefinition === null || itemDefinition === void 0 ? void 0 : itemDefinition.typeRef) === null || _d === void 0 ? void 0 : _d.__$$text) !== null && _e !== void 0 ? _e : api_1.DmnBuiltInDataType.Undefined).check)) {
                return;
            }
            itemDefinition.allowedValues.text.__$$text = "";
        });
    }, [editItemDefinition, enumToKieConstraintType, itemDefinitionId]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: !(0, DataTypeSpec_1.canHaveConstraints)(itemDefinition) ? ((0, jsx_runtime_1.jsx)("p", __assign({ style: {
                padding: "10px",
                background: "#eee",
                borderRadius: "10px",
                textAlign: "center",
            } }, { children: "This data type doesn't support constraints" }))) : ((0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex", flexDirection: "column" } }, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(ToggleGroup_1.ToggleGroup, __assign({ "aria-label": "Constraint toggle group" }, { children: [(0, jsx_runtime_1.jsx)(ToggleGroup_1.ToggleGroupItem, { text: ConstraintsType.NONE, buttonId: ConstraintsType.NONE, isSelected: selectedConstraint === ConstraintsType.NONE, onChange: onToggleGroupChange, isDisabled: isReadonly }), (0, jsx_runtime_1.jsx)(ToggleGroup_1.ToggleGroupItem, { text: ConstraintsType.EXPRESSION, buttonId: ConstraintsType.EXPRESSION, isSelected: selectedConstraint === ConstraintsType.EXPRESSION, onChange: onToggleGroupChange, isDisabled: isReadonly }), (0, jsx_runtime_1.jsx)(ToggleGroup_1.ToggleGroupItem, { text: ConstraintsType.ENUMERATION, buttonId: ConstraintsType.ENUMERATION, isSelected: selectedConstraint === ConstraintsType.ENUMERATION, onChange: onToggleGroupChange, isDisabled: isReadonly || !isConstraintEnabled.enumeration }), (0, jsx_runtime_1.jsx)(ToggleGroup_1.ToggleGroupItem, { text: ConstraintsType.RANGE, buttonId: ConstraintsType.RANGE, isSelected: selectedConstraint === ConstraintsType.RANGE, onChange: onToggleGroupChange, isDisabled: isReadonly || !isConstraintEnabled.range })] })) }), (0, jsx_runtime_1.jsxs)("div", __assign({ style: { paddingTop: "20px" } }, { children: [selectedConstraint === ConstraintsType.ENUMERATION && ((0, jsx_runtime_1.jsx)(ConstraintsEnum_1.ConstraintsEnum, { isReadonly: isReadonly, type: typeRef, typeHelper: (0, exports.constraintTypeHelper)(typeRef), value: isConstraintEnum ? constraintValue : undefined, expressionValue: constraintValue, onSave: onEnumChange, isDisabled: !isConstraintEnabled.enumeration })), selectedConstraint === ConstraintsType.RANGE && ((0, jsx_runtime_1.jsx)(ConstraintsRange_1.ConstraintsRange, { isReadonly: isReadonly, expressionValue: constraintValue, type: typeRef, typeHelper: (0, exports.constraintTypeHelper)(typeRef), value: isConstraintRange ? constraintValue : undefined, onSave: onRangeChange, isDisabled: !isConstraintEnabled.range })), selectedConstraint === ConstraintsType.EXPRESSION && ((0, jsx_runtime_1.jsx)(ConstraintsExpression_1.ConstraintsExpression, { isReadonly: isReadonly, type: typeRef, value: constraintValue, savedValue: constraintValue, onSave: onExpressionChange, isDisabled: false })), selectedConstraint === ConstraintsType.NONE && ((0, jsx_runtime_1.jsx)("p", __assign({ style: {
                                padding: "24px",
                                background: "#eee",
                                borderRadius: "10px",
                                textAlign: "center",
                            } }, { children: "All values are allowed" })))] }))] }))) }));
}
exports.Constraints = Constraints;
//# sourceMappingURL=Constraints.js.map