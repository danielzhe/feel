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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverseExpressions = exports.traverseExpressionsInExpressionHolders = exports.traverseTypeRefedInExpressions = exports.traverseTypeRefedInExpressionHolders = exports.traverseItemDefinitions = exports.canHaveConstraints = exports.constrainableBuiltInFeelTypes = exports.isStruct = exports.getNewItemDefinition = exports.findDataTypeById = void 0;
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var Dmn15Spec_1 = require("../Dmn15Spec");
function findDataTypeById(_a) {
    var e_1, _b;
    var _c;
    var definitions = _a.definitions, itemDefinitionId = _a.itemDefinitionId, allDataTypesById = _a.allDataTypesById;
    var indexesPath = [];
    var current = allDataTypesById.get(itemDefinitionId);
    do {
        indexesPath.unshift(current.index);
        current = current.parentId ? allDataTypesById.get(current.parentId) : undefined;
    } while (current);
    var last = indexesPath.pop();
    (_c = definitions.itemDefinition) !== null && _c !== void 0 ? _c : (definitions.itemDefinition = []);
    var items = definitions.itemDefinition;
    try {
        for (var indexesPath_1 = __values(indexesPath), indexesPath_1_1 = indexesPath_1.next(); !indexesPath_1_1.done; indexesPath_1_1 = indexesPath_1.next()) {
            var i = indexesPath_1_1.value;
            items = items[i].itemComponent;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (indexesPath_1_1 && !indexesPath_1_1.done && (_b = indexesPath_1.return)) _b.call(indexesPath_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var itemDefinition = items[last];
    return { items: items, itemDefinition: itemDefinition, index: last };
}
exports.findDataTypeById = findDataTypeById;
function getNewItemDefinition(partial) {
    return __assign({ "@_id": (0, api_1.generateUuid)(), "@_name": "New data type", "@_isCollection": false, "@_typeLanguage": Dmn15Spec_1.DMN15_SPEC.typeLanguage.default }, (partial !== null && partial !== void 0 ? partial : {}));
}
exports.getNewItemDefinition = getNewItemDefinition;
function isStruct(itemDefinition) {
    return !itemDefinition.typeRef && !!itemDefinition.itemComponent;
}
exports.isStruct = isStruct;
exports.constrainableBuiltInFeelTypes = new Map([
    [api_1.DmnBuiltInDataType.Any, ["expression"]],
    [api_1.DmnBuiltInDataType.Boolean, []],
    [api_1.DmnBuiltInDataType.Context, []],
    [api_1.DmnBuiltInDataType.Number, ["expression", "enumeration", "range"]],
    [api_1.DmnBuiltInDataType.String, ["expression", "enumeration", "range"]],
    [api_1.DmnBuiltInDataType.DateTimeDuration, ["expression", "enumeration", "range"]],
    [api_1.DmnBuiltInDataType.YearsMonthsDuration, ["expression", "enumeration", "range"]],
    [api_1.DmnBuiltInDataType.Date, ["expression", "enumeration", "range"]],
    [api_1.DmnBuiltInDataType.Time, ["expression", "enumeration", "range"]],
    [api_1.DmnBuiltInDataType.DateTime, ["expression", "enumeration", "range"]],
]);
function canHaveConstraints(itemDefinition) {
    var _a, _b, _c;
    return (!isStruct(itemDefinition) &&
        ((_c = (_b = exports.constrainableBuiltInFeelTypes.get((_a = itemDefinition.typeRef) === null || _a === void 0 ? void 0 : _a.__$$text)) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0) > 0);
}
exports.canHaveConstraints = canHaveConstraints;
function traverseItemDefinitions(items, consumer) {
    var _a, _b;
    for (var i = 0; i < ((_a = items.length) !== null && _a !== void 0 ? _a : 0); i++) {
        consumer(items[i]);
        traverseItemDefinitions((_b = items[i].itemComponent) !== null && _b !== void 0 ? _b : [], consumer);
    }
}
exports.traverseItemDefinitions = traverseItemDefinitions;
function traverseTypeRefedInExpressionHolders(expressionHolder, consumer) {
    var _a;
    if (expressionHolder.__$$element === "decision") {
        if (expressionHolder.expression) {
            traverseTypeRefedInExpressions(expressionHolder.expression, (_a = expressionHolder.expression) === null || _a === void 0 ? void 0 : _a.__$$element, consumer);
        }
    }
    else if (expressionHolder.__$$element === "businessKnowledgeModel") {
        if (expressionHolder.encapsulatedLogic) {
            traverseTypeRefedInExpressions(expressionHolder.encapsulatedLogic, "functionDefinition", consumer);
        }
    }
    else {
        throw new Error("Unknown type of expression holder '".concat(expressionHolder.__$$element, "'"));
    }
}
exports.traverseTypeRefedInExpressionHolders = traverseTypeRefedInExpressionHolders;
function traverseTypeRefedInExpressions(expression, __$$element, consumer) {
    var e_2, _a, e_3, _b, e_4, _c, e_5, _d, e_6, _e, e_7, _f;
    var _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
    if (!expression || !__$$element) {
        return;
    }
    consumer(expression);
    if (__$$element === "literalExpression") {
    }
    else if (__$$element === "decisionTable") {
        try {
            for (var _2 = __values((_g = expression.input) !== null && _g !== void 0 ? _g : []), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                var e = _3.value;
                traverseTypeRefedInExpressions(e.inputExpression, "literalExpression", consumer);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_3 && !_3.done && (_a = _2.return)) _a.call(_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var _4 = __values((_h = expression.output) !== null && _h !== void 0 ? _h : []), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                var e = _5.value;
                consumer(e);
                if (e.defaultOutputEntry) {
                    consumer(e.defaultOutputEntry);
                }
                if (e.outputValues) {
                    consumer(e.outputValues);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_5 && !_5.done && (_b = _4.return)) _b.call(_4);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
    else if (__$$element === "relation") {
        try {
            for (var _6 = __values((_j = expression.column) !== null && _j !== void 0 ? _j : []), _7 = _6.next(); !_7.done; _7 = _6.next()) {
                var e = _7.value;
                consumer(e);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_7 && !_7.done && (_c = _6.return)) _c.call(_6);
            }
            finally { if (e_4) throw e_4.error; }
        }
    }
    else if (__$$element === "list") {
        try {
            for (var _8 = __values((_k = expression.expression) !== null && _k !== void 0 ? _k : []), _9 = _8.next(); !_9.done; _9 = _8.next()) {
                var e = _9.value;
                traverseTypeRefedInExpressions(e, e.__$$element, consumer);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_9 && !_9.done && (_d = _8.return)) _d.call(_8);
            }
            finally { if (e_5) throw e_5.error; }
        }
    }
    else if (__$$element === "context") {
        try {
            for (var _10 = __values((_l = expression.contextEntry) !== null && _l !== void 0 ? _l : []), _11 = _10.next(); !_11.done; _11 = _10.next()) {
                var e = _11.value;
                if (e.variable) {
                    consumer(e.variable);
                }
                traverseTypeRefedInExpressions(e.expression, (_m = e.expression) === null || _m === void 0 ? void 0 : _m.__$$element, consumer);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_11 && !_11.done && (_e = _10.return)) _e.call(_10);
            }
            finally { if (e_6) throw e_6.error; }
        }
    }
    else if (__$$element === "invocation") {
        try {
            for (var _12 = __values((_o = expression.binding) !== null && _o !== void 0 ? _o : []), _13 = _12.next(); !_13.done; _13 = _12.next()) {
                var e = _13.value;
                if (e.parameter) {
                    consumer(e.parameter);
                }
                traverseTypeRefedInExpressions(e.expression, (_p = e.expression) === null || _p === void 0 ? void 0 : _p.__$$element, consumer);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_13 && !_13.done && (_f = _12.return)) _f.call(_12);
            }
            finally { if (e_7) throw e_7.error; }
        }
    }
    else if (__$$element === "functionDefinition") {
        var e = expression;
        traverseTypeRefedInExpressions(e.expression, (_q = e.expression) === null || _q === void 0 ? void 0 : _q.__$$element, consumer);
    }
    else if (__$$element === "conditional") {
        var e = expression;
        traverseTypeRefedInExpressions(e.if.expression, (_r = e.if.expression) === null || _r === void 0 ? void 0 : _r.__$$element, consumer);
        traverseTypeRefedInExpressions(e.then.expression, (_s = e.then.expression) === null || _s === void 0 ? void 0 : _s.__$$element, consumer);
        traverseTypeRefedInExpressions(e.else.expression, (_t = e.else.expression) === null || _t === void 0 ? void 0 : _t.__$$element, consumer);
    }
    else if (__$$element === "every") {
        var e = expression;
        consumer(e.in);
        traverseTypeRefedInExpressions(e.in.expression, (_u = e.in.expression) === null || _u === void 0 ? void 0 : _u.__$$element, consumer);
        traverseTypeRefedInExpressions(e.satisfies.expression, (_v = e.satisfies.expression) === null || _v === void 0 ? void 0 : _v.__$$element, consumer);
    }
    else if (__$$element === "some") {
        var e = expression;
        consumer(e.in);
        traverseTypeRefedInExpressions(e.in.expression, (_w = e.in.expression) === null || _w === void 0 ? void 0 : _w.__$$element, consumer);
        traverseTypeRefedInExpressions(e.satisfies.expression, (_x = e.satisfies.expression) === null || _x === void 0 ? void 0 : _x.__$$element, consumer);
    }
    else if (__$$element === "filter") {
        var e = expression;
        traverseTypeRefedInExpressions(e.in.expression, (_y = e.in.expression) === null || _y === void 0 ? void 0 : _y.__$$element, consumer);
        traverseTypeRefedInExpressions(e.match.expression, (_z = e.match.expression) === null || _z === void 0 ? void 0 : _z.__$$element, consumer);
    }
    else if (__$$element === "for") {
        var e = expression;
        consumer(e.in);
        traverseTypeRefedInExpressions(e.in.expression, (_0 = e.in.expression) === null || _0 === void 0 ? void 0 : _0.__$$element, consumer);
        traverseTypeRefedInExpressions(e.return.expression, (_1 = e.return.expression) === null || _1 === void 0 ? void 0 : _1.__$$element, consumer);
    }
    else {
        throw new Error("Unknown type of expression '".concat(__$$element, "'."));
    }
}
exports.traverseTypeRefedInExpressions = traverseTypeRefedInExpressions;
function traverseExpressionsInExpressionHolders(expressionHolder, consumer) {
    var _a;
    if (expressionHolder.__$$element === "decision") {
        if (expressionHolder.expression) {
            traverseExpressions(expressionHolder.expression, (_a = expressionHolder.expression) === null || _a === void 0 ? void 0 : _a.__$$element, consumer);
        }
    }
    else if (expressionHolder.__$$element === "businessKnowledgeModel") {
        if (expressionHolder.encapsulatedLogic) {
            traverseExpressions(expressionHolder.encapsulatedLogic, "functionDefinition", consumer);
        }
    }
    else {
        throw new Error("Unknown type of expression holder '".concat(expressionHolder.__$$element, "'"));
    }
}
exports.traverseExpressionsInExpressionHolders = traverseExpressionsInExpressionHolders;
function traverseExpressions(expression, __$$element, consumer) {
    var e_8, _a, e_9, _b, e_10, _c, e_11, _d;
    var _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    if (!expression || !__$$element) {
        return;
    }
    consumer(expression, __$$element);
    if (__$$element === "literalExpression") {
    }
    else if (__$$element === "decisionTable") {
        try {
            for (var _y = __values((_e = expression.input) !== null && _e !== void 0 ? _e : []), _z = _y.next(); !_z.done; _z = _y.next()) {
                var e = _z.value;
                traverseExpressions(e.inputExpression, "literalExpression", consumer);
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_z && !_z.done && (_a = _y.return)) _a.call(_y);
            }
            finally { if (e_8) throw e_8.error; }
        }
    }
    else if (__$$element === "relation") {
    }
    else if (__$$element === "list") {
        try {
            for (var _0 = __values((_f = expression.expression) !== null && _f !== void 0 ? _f : []), _1 = _0.next(); !_1.done; _1 = _0.next()) {
                var e = _1.value;
                traverseExpressions(e, e.__$$element, consumer);
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (_1 && !_1.done && (_b = _0.return)) _b.call(_0);
            }
            finally { if (e_9) throw e_9.error; }
        }
    }
    else if (__$$element === "context") {
        try {
            for (var _2 = __values((_g = expression.contextEntry) !== null && _g !== void 0 ? _g : []), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                var e = _3.value;
                traverseExpressions(e.expression, (_h = e.expression) === null || _h === void 0 ? void 0 : _h.__$$element, consumer);
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_3 && !_3.done && (_c = _2.return)) _c.call(_2);
            }
            finally { if (e_10) throw e_10.error; }
        }
    }
    else if (__$$element === "invocation") {
        try {
            for (var _4 = __values((_j = expression.binding) !== null && _j !== void 0 ? _j : []), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                var e = _5.value;
                traverseExpressions(e.expression, (_k = e.expression) === null || _k === void 0 ? void 0 : _k.__$$element, consumer);
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (_5 && !_5.done && (_d = _4.return)) _d.call(_4);
            }
            finally { if (e_11) throw e_11.error; }
        }
    }
    else if (__$$element === "functionDefinition") {
        var e = expression;
        traverseExpressions(e.expression, (_l = e.expression) === null || _l === void 0 ? void 0 : _l.__$$element, consumer);
    }
    else if (__$$element === "conditional") {
        var e = expression;
        traverseExpressions(e.if.expression, (_m = e.if.expression) === null || _m === void 0 ? void 0 : _m.__$$element, consumer);
        traverseExpressions(e.then.expression, (_o = e.then.expression) === null || _o === void 0 ? void 0 : _o.__$$element, consumer);
        traverseExpressions(e.else.expression, (_p = e.else.expression) === null || _p === void 0 ? void 0 : _p.__$$element, consumer);
    }
    else if (__$$element === "every") {
        var e = expression;
        traverseExpressions(e.in.expression, (_q = e.in.expression) === null || _q === void 0 ? void 0 : _q.__$$element, consumer);
        traverseExpressions(e.satisfies.expression, (_r = e.satisfies.expression) === null || _r === void 0 ? void 0 : _r.__$$element, consumer);
    }
    else if (__$$element === "some") {
        var e = expression;
        traverseExpressions(e.in.expression, (_s = e.in.expression) === null || _s === void 0 ? void 0 : _s.__$$element, consumer);
        traverseExpressions(e.satisfies.expression, (_t = e.satisfies.expression) === null || _t === void 0 ? void 0 : _t.__$$element, consumer);
    }
    else if (__$$element === "filter") {
        var e = expression;
        traverseExpressions(e.in.expression, (_u = e.in.expression) === null || _u === void 0 ? void 0 : _u.__$$element, consumer);
        traverseExpressions(e.match.expression, (_v = e.match.expression) === null || _v === void 0 ? void 0 : _v.__$$element, consumer);
    }
    else if (__$$element === "for") {
        var e = expression;
        traverseExpressions(e.in.expression, (_w = e.in.expression) === null || _w === void 0 ? void 0 : _w.__$$element, consumer);
        traverseExpressions(e.return.expression, (_x = e.return.expression) === null || _x === void 0 ? void 0 : _x.__$$element, consumer);
    }
    else {
        throw new Error("Unknown type of expression '".concat(__$$element, "'."));
    }
}
exports.traverseExpressions = traverseExpressions;
//# sourceMappingURL=DataTypeSpec.js.map