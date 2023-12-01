"use strict";
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
exports.beeToDmn = void 0;
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var Dmn15Spec_1 = require("../Dmn15Spec");
var WidthConstants_1 = require("@kie-tools/boxed-expression-component/dist/resizing/WidthConstants");
function beeToDmn(expression, __widths) {
    var _a, _b, _c, _d, _e, _f;
    switch (expression.logicType) {
        case api_1.ExpressionDefinitionLogicType.Undefined:
            return undefined;
        case api_1.ExpressionDefinitionLogicType.Context:
            return {
                __$$element: "context",
                "@_id": expression.id,
                "@_label": expression.name,
                "@_typeRef": expression.dataType,
                contextEntry: __spreadArray(__spreadArray([], __read(expression.contextEntries.map(function (e) {
                    __widths.set(expression.id, expression.entryInfoWidth ? [expression.entryInfoWidth] : []);
                    return {
                        "@_id": e.entryInfo.id,
                        expression: beeToDmn(e.entryExpression, __widths),
                        variable: {
                            "@_name": e.entryInfo.name,
                            "@_typeRef": e.entryInfo.dataType,
                        },
                    };
                })), false), __read((expression.result
                    ? [
                        {
                            "@_id": expression.result.id,
                            expression: beeToDmn(expression.result, __widths),
                        },
                    ]
                    : [])), false),
            };
        case api_1.ExpressionDefinitionLogicType.DecisionTable:
            __widths.set(expression.id, [WidthConstants_1.BEE_TABLE_ROW_INDEX_COLUMN_WIDTH]);
            return {
                __$$element: "decisionTable",
                "@_id": expression.id,
                "@_label": expression.name,
                "@_typeRef": expression.dataType,
                "@_hitPolicy": expression.hitPolicy,
                "@_aggregation": (function () {
                    switch (expression.aggregation) {
                        case api_1.DecisionTableExpressionDefinitionBuiltInAggregation["<None>"]:
                            return undefined;
                        case api_1.DecisionTableExpressionDefinitionBuiltInAggregation.SUM:
                            return "SUM";
                        case api_1.DecisionTableExpressionDefinitionBuiltInAggregation.COUNT:
                            return "COUNT";
                        case api_1.DecisionTableExpressionDefinitionBuiltInAggregation.MIN:
                            return "MIN";
                        case api_1.DecisionTableExpressionDefinitionBuiltInAggregation.MAX:
                            return "MAX";
                    }
                })(),
                input: ((_a = expression.input) !== null && _a !== void 0 ? _a : []).map(function (s) {
                    var _a, _b;
                    __widths.set(expression.id, __spreadArray(__spreadArray([], __read(((_a = __widths.get(expression.id)) !== null && _a !== void 0 ? _a : [])), false), [
                        (_b = s.width) !== null && _b !== void 0 ? _b : WidthConstants_1.DECISION_TABLE_INPUT_MIN_WIDTH,
                    ], false));
                    return {
                        "@_id": s.id,
                        inputExpression: {
                            "@_id": s.idLiteralExpression,
                            "@_typeRef": s.dataType,
                            text: { __$$text: s.name },
                        },
                    };
                }),
                output: ((_b = expression.output) !== null && _b !== void 0 ? _b : []).map(function (o) {
                    var _a, _b;
                    __widths.set(expression.id, __spreadArray(__spreadArray([], __read(((_a = __widths.get(expression.id)) !== null && _a !== void 0 ? _a : [])), false), [
                        (_b = o.width) !== null && _b !== void 0 ? _b : WidthConstants_1.DECISION_TABLE_OUTPUT_MIN_WIDTH,
                    ], false));
                    return {
                        "@_id": o.id,
                        "@_name": o.name,
                        "@_typeRef": o.dataType,
                    };
                }),
                annotation: ((_c = expression.annotations) !== null && _c !== void 0 ? _c : []).map(function (a) {
                    var _a, _b;
                    __widths.set(expression.id, __spreadArray(__spreadArray([], __read(((_a = __widths.get(expression.id)) !== null && _a !== void 0 ? _a : [])), false), [
                        (_b = a.width) !== null && _b !== void 0 ? _b : WidthConstants_1.DECISION_TABLE_ANNOTATION_MIN_WIDTH,
                    ], false));
                    return {
                        "@_name": a.name,
                    };
                }),
                rule: ((_d = expression.rules) !== null && _d !== void 0 ? _d : []).map(function (r) {
                    return {
                        "@_id": r.id,
                        inputEntry: r.inputEntries.map(function (i) { return ({ "@_id": i.id, text: { __$$text: i.content } }); }),
                        outputEntry: r.outputEntries.map(function (s) { return ({ "@_id": s.id, text: { __$$text: s.content } }); }),
                        annotationEntry: r.annotationEntries.map(function (a) { return ({ text: { __$$text: a } }); }),
                    };
                }),
            };
        case api_1.ExpressionDefinitionLogicType.Function:
            return {
                __$$element: "functionDefinition",
                "@_id": expression.id,
                "@_label": expression.name,
                "@_kind": expression.functionKind,
                "@_typeRef": expression.dataType,
                formalParameter: expression.formalParameters.map(function (p) { return ({
                    "@_id": p.id,
                    "@_name": p.name,
                    "@_typeRef": p.dataType,
                }); }),
                expression: expression.functionKind === "FEEL"
                    ? beeToDmn(expression.expression, __widths)
                    : expression.functionKind === "Java"
                        ? (function () {
                            var _a;
                            __widths.set(expression.id, [
                                WidthConstants_1.BEE_TABLE_ROW_INDEX_COLUMN_WIDTH,
                                (_a = expression.classAndMethodNamesWidth) !== null && _a !== void 0 ? _a : WidthConstants_1.JAVA_FUNCTION_EXPRESSION_VALUES_MIN_WIDTH,
                            ]);
                            return {
                                __$$element: "context",
                                contextEntry: [
                                    {
                                        "@_id": expression.classFieldId,
                                        expression: { __$$element: "literalExpression", text: { __$$text: expression.className } },
                                        variable: { "@_name": Dmn15Spec_1.DMN15_SPEC.BOXED.FUNCTION.JAVA.classFieldName },
                                    },
                                    {
                                        "@_id": expression.methodFieldId,
                                        expression: { __$$element: "literalExpression", text: { __$$text: expression.methodName } },
                                        variable: { "@_name": Dmn15Spec_1.DMN15_SPEC.BOXED.FUNCTION.JAVA.methodSignatureFieldName },
                                    },
                                ],
                            };
                        })()
                        : expression.functionKind === "PMML"
                            ? (function () {
                                return {
                                    __$$element: "context",
                                    contextEntry: [
                                        {
                                            "@_id": expression.documentFieldId,
                                            expression: { __$$element: "literalExpression", text: { __$$text: expression.document } },
                                            variable: { "@_name": Dmn15Spec_1.DMN15_SPEC.BOXED.FUNCTION.PMML.documentFieldName },
                                        },
                                        {
                                            "@_id": expression.modelFieldId,
                                            expression: { __$$element: "literalExpression", text: { __$$text: expression.model } },
                                            variable: { "@_name": Dmn15Spec_1.DMN15_SPEC.BOXED.FUNCTION.PMML.modelFieldName },
                                        },
                                    ],
                                };
                            })()
                            : (function () {
                                throw new Error("Unknown Function kind '".concat(expression.functionKind, "'."));
                            })(),
            };
        case api_1.ExpressionDefinitionLogicType.Invocation:
            return {
                __$$element: "invocation",
                "@_id": expression.id,
                "@_label": expression.name,
                "@_typeRef": expression.dataType,
                expression: {
                    __$$element: "literalExpression",
                    "@_id": expression.invokedFunction.id,
                    text: { __$$text: expression.invokedFunction.name },
                },
                binding: expression.bindingEntries.map(function (e) {
                    __widths.set(expression.id, expression.entryInfoWidth ? [expression.entryInfoWidth] : []);
                    return {
                        "@_id": e.entryInfo.id,
                        expression: beeToDmn(e.entryExpression, __widths),
                        parameter: {
                            "@_name": e.entryInfo.name,
                            "@_typeRef": e.entryInfo.dataType,
                        },
                    };
                }),
            };
        case api_1.ExpressionDefinitionLogicType.List:
            __widths.set(expression.id, [WidthConstants_1.BEE_TABLE_ROW_INDEX_COLUMN_WIDTH]);
            return {
                __$$element: "list",
                "@_id": expression.id,
                "@_label": expression.name,
                "@_typeRef": expression.dataType,
                expression: expression.items.map(function (i) { return beeToDmn(i, __widths); }),
            };
        case api_1.ExpressionDefinitionLogicType.Literal:
            __widths.set(expression.id, expression.width ? [expression.width] : []);
            return {
                __$$element: "literalExpression",
                "@_id": expression.id,
                "@_label": expression.name,
                "@_typeRef": expression.dataType,
                text: { __$$text: expression.content },
            };
        case api_1.ExpressionDefinitionLogicType.Relation:
            __widths.set(expression.id, [WidthConstants_1.BEE_TABLE_ROW_INDEX_COLUMN_WIDTH]);
            return {
                __$$element: "relation",
                "@_id": expression.id,
                "@_label": expression.name,
                "@_typeRef": expression.dataType,
                row: ((_e = expression.rows) !== null && _e !== void 0 ? _e : []).map(function (r) {
                    return {
                        "@_id": r.id,
                        expression: r.cells.map(function (cell) { return ({
                            __$$element: "literalExpression",
                            text: { __$$text: cell.content },
                            id: cell.id,
                        }); }),
                    };
                }),
                column: ((_f = expression.columns) !== null && _f !== void 0 ? _f : []).map(function (c) {
                    var _a;
                    __widths.set(expression.id, __spreadArray(__spreadArray([], __read(((_a = __widths.get(expression.id)) !== null && _a !== void 0 ? _a : [])), false), __read((c.width ? [c.width] : [])), false));
                    return {
                        "@_id": c.id,
                        "@_name": c.name,
                        "@_typeRef": c.dataType,
                    };
                }),
            };
        default:
            throw new Error("Unknown logicType for expression: '".concat(expression.logicType, "'"));
    }
}
exports.beeToDmn = beeToDmn;
//# sourceMappingURL=beeToDmn.js.map