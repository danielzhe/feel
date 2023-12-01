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
exports.getUndefinedExpressionDefinition = exports.dmnToBee = void 0;
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var Dmn15Spec_1 = require("../Dmn15Spec");
function dmnToBee(widthsById, expressionHolder, typeRef) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18;
    if (!(expressionHolder === null || expressionHolder === void 0 ? void 0 : expressionHolder.expression)) {
        return __assign(__assign({}, getUndefinedExpressionDefinition()), (typeRef ? { dataType: typeRef } : {}));
    }
    var expr = expressionHolder.expression;
    if (expr.__$$element === "literalExpression") {
        return {
            id: expr["@_id"],
            name: expr["@_label"],
            logicType: api_1.ExpressionDefinitionLogicType.Literal,
            dataType: ((_a = expr["@_typeRef"]) !== null && _a !== void 0 ? _a : api_1.DmnBuiltInDataType.Undefined),
            content: (_b = expr.text) === null || _b === void 0 ? void 0 : _b.__$$text,
            width: (_c = widthsById.get(expr["@_id"])) === null || _c === void 0 ? void 0 : _c[0],
        };
    }
    else if (expr.__$$element === "decisionTable") {
        return {
            id: expr["@_id"],
            name: expr["@_label"],
            logicType: api_1.ExpressionDefinitionLogicType.DecisionTable,
            dataType: ((_d = expr["@_typeRef"]) !== null && _d !== void 0 ? _d : api_1.DmnBuiltInDataType.Undefined),
            aggregation: expr["@_aggregation"]
                ? api_1.DecisionTableExpressionDefinitionBuiltInAggregation[expr["@_aggregation"]]
                : api_1.DecisionTableExpressionDefinitionBuiltInAggregation["<None>"],
            hitPolicy: (_e = expr["@_hitPolicy"]) !== null && _e !== void 0 ? _e : Dmn15Spec_1.DMN15_SPEC.BOXED.DECISION_TABLE.HitPolicy.default,
            input: ((_f = expr.input) !== null && _f !== void 0 ? _f : []).map(function (input, i) {
                var _a, _b, _c, _d, _e, _f;
                return ({
                    idLiteralExpression: input.inputExpression["@_id"],
                    id: input["@_id"],
                    name: (_d = (_b = (_a = input["@_label"]) !== null && _a !== void 0 ? _a : input.inputExpression["@_label"]) !== null && _b !== void 0 ? _b : (_c = input.inputExpression.text) === null || _c === void 0 ? void 0 : _c.__$$text) !== null && _d !== void 0 ? _d : "",
                    dataType: ((_e = input.inputExpression["@_typeRef"]) !== null && _e !== void 0 ? _e : api_1.DmnBuiltInDataType.Undefined),
                    width: (_f = widthsById.get(expr["@_id"])) === null || _f === void 0 ? void 0 : _f[1 + i],
                });
            }),
            output: ((_g = expr.output) !== null && _g !== void 0 ? _g : []).map(function (output, i) {
                var _a, _b, _c, _d, _e;
                return ({
                    id: output["@_id"],
                    name: (_b = (_a = output["@_label"]) !== null && _a !== void 0 ? _a : output["@_name"]) !== null && _b !== void 0 ? _b : "",
                    dataType: ((_c = output["@_typeRef"]) !== null && _c !== void 0 ? _c : api_1.DmnBuiltInDataType.Undefined),
                    width: (_d = widthsById.get(expr["@_id"])) === null || _d === void 0 ? void 0 : _d[1 + ((_e = expr.input) !== null && _e !== void 0 ? _e : []).length + i],
                });
            }),
            annotations: ((_h = expr.annotation) !== null && _h !== void 0 ? _h : []).map(function (a, i) {
                var _a, _b, _c, _d;
                return ({
                    name: (_a = a["@_name"]) !== null && _a !== void 0 ? _a : "",
                    width: (_b = widthsById.get(expr["@_id"])) === null || _b === void 0 ? void 0 : _b[1 + ((_c = expr.input) !== null && _c !== void 0 ? _c : []).length + ((_d = expr.output) !== null && _d !== void 0 ? _d : []).length + i],
                });
            }),
            rules: ((_j = expr.rule) !== null && _j !== void 0 ? _j : []).map(function (r) {
                var _a, _b, _c;
                return ({
                    id: r["@_id"],
                    inputEntries: ((_a = r.inputEntry) !== null && _a !== void 0 ? _a : []).map(function (i) { var _a, _b; return ({ id: i["@_id"], content: (_b = (_a = i.text) === null || _a === void 0 ? void 0 : _a.__$$text) !== null && _b !== void 0 ? _b : "" }); }),
                    outputEntries: ((_b = r.outputEntry) !== null && _b !== void 0 ? _b : []).map(function (o) { var _a, _b; return ({ id: o["@_id"], content: (_b = (_a = o.text) === null || _a === void 0 ? void 0 : _a.__$$text) !== null && _b !== void 0 ? _b : "" }); }),
                    annotationEntries: ((_c = r.annotationEntry) !== null && _c !== void 0 ? _c : []).map(function (a) { var _a, _b; return (_b = (_a = a.text) === null || _a === void 0 ? void 0 : _a.__$$text) !== null && _b !== void 0 ? _b : ""; }),
                });
            }),
        };
    }
    else if (expr.__$$element === "relation") {
        return {
            id: expr["@_id"],
            name: expr["@_label"],
            logicType: api_1.ExpressionDefinitionLogicType.Relation,
            dataType: ((_k = expr["@_typeRef"]) !== null && _k !== void 0 ? _k : api_1.DmnBuiltInDataType.Undefined),
            rows: ((_l = expr.row) !== null && _l !== void 0 ? _l : []).map(function (row) {
                var _a;
                return ({
                    id: row["@_id"],
                    cells: ((_a = row.expression) !== null && _a !== void 0 ? _a : []).map(function (s) {
                        var _a, _b;
                        return ({
                            id: s["@_id"],
                            content: (_b = (_a = s.text) === null || _a === void 0 ? void 0 : _a.__$$text) !== null && _b !== void 0 ? _b : "",
                        });
                    }),
                });
            }),
            columns: ((_m = expr.column) !== null && _m !== void 0 ? _m : []).map(function (c, i) {
                var _a, _b, _c, _d;
                return ({
                    id: c["@_id"],
                    name: (_b = (_a = c["@_label"]) !== null && _a !== void 0 ? _a : c["@_name"]) !== null && _b !== void 0 ? _b : "",
                    dataType: ((_c = c["@_typeRef"]) !== null && _c !== void 0 ? _c : api_1.DmnBuiltInDataType.Undefined),
                    width: (_d = widthsById.get(expr["@_id"])) === null || _d === void 0 ? void 0 : _d[1 + i],
                });
            }),
        };
    }
    else if (expr.__$$element === "context") {
        var _19 = ((_o = expr.contextEntry) !== null && _o !== void 0 ? _o : []).reduce(function (acc, e) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            if (!e.variable) {
                acc.result = dmnToBee(widthsById, e, expr["@_typeRef"]);
            }
            else {
                acc.contextEntries.push({
                    entryInfo: {
                        id: (_b = (_a = e.variable) === null || _a === void 0 ? void 0 : _a["@_id"]) !== null && _b !== void 0 ? _b : e["@_id"],
                        name: (_f = (_d = (_c = e.variable) === null || _c === void 0 ? void 0 : _c["@_label"]) !== null && _d !== void 0 ? _d : (_e = e.variable) === null || _e === void 0 ? void 0 : _e["@_name"]) !== null && _f !== void 0 ? _f : e["@_label"],
                        dataType: ((_h = (_g = e.variable) === null || _g === void 0 ? void 0 : _g["@_typeRef"]) !== null && _h !== void 0 ? _h : api_1.DmnBuiltInDataType.Undefined),
                    },
                    entryExpression: dmnToBee(widthsById, e, ((_k = (_j = e.variable) === null || _j === void 0 ? void 0 : _j["@_typeRef"]) !== null && _k !== void 0 ? _k : api_1.DmnBuiltInDataType.Undefined)),
                });
            }
            return acc;
        }, { contextEntries: [], result: getUndefinedExpressionDefinition() }), contextEntries = _19.contextEntries, result = _19.result;
        return {
            id: expr["@_id"],
            dataType: expr["@_typeRef"],
            logicType: api_1.ExpressionDefinitionLogicType.Context,
            name: expr["@_label"],
            entryInfoWidth: (_q = widthsById.get((_p = expr["@_id"]) !== null && _p !== void 0 ? _p : "")) === null || _q === void 0 ? void 0 : _q[0],
            result: result,
            contextEntries: contextEntries,
        };
    }
    else if (expr.__$$element === "invocation") {
        var calledFunction = expr.expression;
        return {
            id: expr["@_id"],
            dataType: ((_r = expr["@_typeRef"]) !== null && _r !== void 0 ? _r : api_1.DmnBuiltInDataType.Undefined),
            logicType: api_1.ExpressionDefinitionLogicType.Invocation,
            name: expr["@_label"],
            entryInfoWidth: (_t = widthsById.get((_s = expr["@_id"]) !== null && _s !== void 0 ? _s : "")) === null || _t === void 0 ? void 0 : _t[0],
            invokedFunction: {
                id: calledFunction["@_id"],
                name: (_v = (_u = calledFunction.text) === null || _u === void 0 ? void 0 : _u.__$$text) !== null && _v !== void 0 ? _v : "",
            },
            bindingEntries: ((_w = expr.binding) !== null && _w !== void 0 ? _w : []).map(function (b) {
                var _a, _b;
                return ({
                    entryInfo: {
                        id: b.parameter["@_id"],
                        name: b.parameter["@_name"],
                        dataType: ((_a = b.parameter["@_typeRef"]) !== null && _a !== void 0 ? _a : api_1.DmnBuiltInDataType.Undefined),
                    },
                    entryExpression: dmnToBee(widthsById, b, ((_b = b.parameter["@_typeRef"]) !== null && _b !== void 0 ? _b : api_1.DmnBuiltInDataType.Undefined)),
                });
            }),
        };
    }
    else if (expr.__$$element === "functionDefinition") {
        var basic = {
            id: expr["@_id"],
            name: expr["@_label"],
            dataType: expr["@_typeRef"],
            logicType: api_1.ExpressionDefinitionLogicType.Function,
            formalParameters: ((_x = expr.formalParameter) !== null && _x !== void 0 ? _x : []).map(function (p) {
                var _a;
                return ({
                    id: p["@_id"],
                    name: p["@_name"],
                    dataType: ((_a = p["@_typeRef"]) !== null && _a !== void 0 ? _a : api_1.DmnBuiltInDataType.Undefined),
                });
            }),
        };
        var kind = (_y = expr["@_kind"]) !== null && _y !== void 0 ? _y : Dmn15Spec_1.DMN15_SPEC.BOXED.FUNCTION.kind.default;
        switch (kind) {
            case "FEEL": {
                return __assign(__assign({}, basic), { functionKind: api_1.FunctionExpressionDefinitionKind.Feel, expression: dmnToBee(widthsById, expr) });
            }
            case "Java": {
                var c = expr.expression;
                var clazz = (_z = c.contextEntry) === null || _z === void 0 ? void 0 : _z.find(function (_a) {
                    var variable = _a.variable;
                    return (variable === null || variable === void 0 ? void 0 : variable["@_name"]) === Dmn15Spec_1.DMN15_SPEC.BOXED.FUNCTION.JAVA.classFieldName;
                });
                var method = (_0 = c.contextEntry) === null || _0 === void 0 ? void 0 : _0.find(function (_a) {
                    var variable = _a.variable;
                    return (variable === null || variable === void 0 ? void 0 : variable["@_name"]) === Dmn15Spec_1.DMN15_SPEC.BOXED.FUNCTION.JAVA.methodSignatureFieldName;
                });
                return __assign(__assign({}, basic), { functionKind: api_1.FunctionExpressionDefinitionKind.Java, className: (_2 = (_1 = clazz === null || clazz === void 0 ? void 0 : clazz.expression) === null || _1 === void 0 ? void 0 : _1.text) === null || _2 === void 0 ? void 0 : _2.__$$text, classFieldId: (_3 = clazz === null || clazz === void 0 ? void 0 : clazz.expression) === null || _3 === void 0 ? void 0 : _3["@_id"], methodName: (_5 = (_4 = method === null || method === void 0 ? void 0 : method.expression) === null || _4 === void 0 ? void 0 : _4.text) === null || _5 === void 0 ? void 0 : _5.__$$text, methodFieldId: (_6 = method === null || method === void 0 ? void 0 : method.expression) === null || _6 === void 0 ? void 0 : _6["@_id"], classAndMethodNamesWidth: (_8 = widthsById.get((_7 = expr["@_id"]) !== null && _7 !== void 0 ? _7 : "")) === null || _8 === void 0 ? void 0 : _8[1] });
            }
            case "PMML": {
                var c = expr.expression;
                var document_1 = (_9 = c.contextEntry) === null || _9 === void 0 ? void 0 : _9.find(function (_a) {
                    var variable = _a.variable;
                    return (variable === null || variable === void 0 ? void 0 : variable["@_name"]) === Dmn15Spec_1.DMN15_SPEC.BOXED.FUNCTION.PMML.documentFieldName;
                });
                var model = (_10 = c.contextEntry) === null || _10 === void 0 ? void 0 : _10.find(function (_a) {
                    var variable = _a.variable;
                    return (variable === null || variable === void 0 ? void 0 : variable["@_name"]) === Dmn15Spec_1.DMN15_SPEC.BOXED.FUNCTION.PMML.modelFieldName;
                });
                return __assign(__assign({}, basic), { functionKind: api_1.FunctionExpressionDefinitionKind.Pmml, document: (_12 = (_11 = document_1 === null || document_1 === void 0 ? void 0 : document_1.expression) === null || _11 === void 0 ? void 0 : _11.text) === null || _12 === void 0 ? void 0 : _12.__$$text.replaceAll("\"", ""), documentFieldId: (_13 = document_1 === null || document_1 === void 0 ? void 0 : document_1.expression) === null || _13 === void 0 ? void 0 : _13["@_id"], model: (_15 = (_14 = model === null || model === void 0 ? void 0 : model.expression) === null || _14 === void 0 ? void 0 : _14.text) === null || _15 === void 0 ? void 0 : _15.__$$text.replaceAll("\"", ""), modelFieldId: (_16 = model === null || model === void 0 ? void 0 : model.expression) === null || _16 === void 0 ? void 0 : _16["@_id"] });
            }
            default:
                throw new Error("Unknown function expression kind '".concat(expr["@_kind"], "'"));
        }
    }
    else if (expr.__$$element === "list") {
        return {
            id: expr["@_id"],
            name: expr["@_label"],
            dataType: ((_17 = expr["@_typeRef"]) !== null && _17 !== void 0 ? _17 : api_1.DmnBuiltInDataType.Undefined),
            logicType: api_1.ExpressionDefinitionLogicType.List,
            items: ((_18 = expr.expression) !== null && _18 !== void 0 ? _18 : []).map(function (e) { return dmnToBee(widthsById, { expression: e }, expr["@_typeRef"]); }),
        };
    }
    else {
        return getUndefinedExpressionDefinition();
    }
}
exports.dmnToBee = dmnToBee;
function getUndefinedExpressionDefinition() {
    return {
        id: (0, api_1.generateUuid)(),
        logicType: api_1.ExpressionDefinitionLogicType.Undefined,
        dataType: api_1.DmnBuiltInDataType.Undefined,
    };
}
exports.getUndefinedExpressionDefinition = getUndefinedExpressionDefinition;
//# sourceMappingURL=dmnToBee.js.map