"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultExpressionDefinitionByLogicType = void 0;
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var WidthConstants_1 = require("@kie-tools/boxed-expression-component/dist/resizing/WidthConstants");
var DecisionTableExpression_1 = require("@kie-tools/boxed-expression-component/dist/expressions/DecisionTableExpression");
var InvocationExpression_1 = require("@kie-tools/boxed-expression-component/dist/expressions/InvocationExpression");
var RelationExpression_1 = require("@kie-tools/boxed-expression-component/dist/expressions/RelationExpression");
var DataTypeSpec_1 = require("../dataTypes/DataTypeSpec");
function getDefaultExpressionDefinitionByLogicType(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var logicType = _a.logicType, typeRef = _a.typeRef, allTopLevelDataTypesByFeelName = _a.allTopLevelDataTypesByFeelName, expressionHolderName = _a.expressionHolderName, getInputs = _a.getInputs, getDefaultColumnWidth = _a.getDefaultColumnWidth;
    var dataType = allTopLevelDataTypesByFeelName.get(typeRef);
    if (logicType === api_1.ExpressionDefinitionLogicType.Literal) {
        var literalExpression = {
            id: (0, api_1.generateUuid)(),
            dataType: typeRef,
            logicType: logicType,
            width: WidthConstants_1.LITERAL_EXPRESSION_MIN_WIDTH,
        };
        return literalExpression;
    }
    else if (logicType === api_1.ExpressionDefinitionLogicType.Function) {
        var functionExpression = {
            id: (0, api_1.generateUuid)(),
            dataType: typeRef,
            logicType: logicType,
            functionKind: api_1.FunctionExpressionDefinitionKind.Feel,
            formalParameters: [],
            expression: {
                id: (0, api_1.generateUuid)(),
                logicType: api_1.ExpressionDefinitionLogicType.Undefined,
                dataType: api_1.DmnBuiltInDataType.Undefined,
            },
        };
        return functionExpression;
    }
    else if (logicType === api_1.ExpressionDefinitionLogicType.Context) {
        var maxWidthBasedOnEntryNames_1 = WidthConstants_1.CONTEXT_ENTRY_INFO_MIN_WIDTH;
        var contextEntries = !dataType || !(0, DataTypeSpec_1.isStruct)(dataType.itemDefinition)
            ? [
                {
                    entryInfo: {
                        id: (0, api_1.generateUuid)(),
                        name: "ContextEntry-1",
                        dataType: api_1.DmnBuiltInDataType.Undefined,
                    },
                    entryExpression: {
                        id: (0, api_1.generateUuid)(),
                        name: "ContextEntry-1",
                        dataType: api_1.DmnBuiltInDataType.Undefined,
                        logicType: api_1.ExpressionDefinitionLogicType.Undefined,
                    },
                },
            ]
            : ((_b = dataType.itemDefinition.itemComponent) !== null && _b !== void 0 ? _b : []).map(function (ic) {
                var _a, _b, _c;
                var name = ic["@_name"];
                var typeRef = (0, DataTypeSpec_1.isStruct)(ic)
                    ? api_1.DmnBuiltInDataType.Any
                    : (_b = (_a = ic.typeRef) === null || _a === void 0 ? void 0 : _a.__$$text) !== null && _b !== void 0 ? _b : api_1.DmnBuiltInDataType.Undefined;
                maxWidthBasedOnEntryNames_1 = Math.max(maxWidthBasedOnEntryNames_1, (_c = getDefaultColumnWidth === null || getDefaultColumnWidth === void 0 ? void 0 : getDefaultColumnWidth({ name: name, typeRef: typeRef })) !== null && _c !== void 0 ? _c : WidthConstants_1.CONTEXT_ENTRY_INFO_MIN_WIDTH);
                return {
                    entryInfo: {
                        id: (0, api_1.generateUuid)(),
                        name: name,
                        dataType: typeRef,
                    },
                    entryExpression: {
                        id: (0, api_1.generateUuid)(),
                        name: name,
                        dataType: typeRef,
                        logicType: api_1.ExpressionDefinitionLogicType.Undefined,
                    },
                };
            });
        var contextExpression = {
            id: (0, api_1.generateUuid)(),
            dataType: typeRef,
            logicType: logicType,
            entryInfoWidth: maxWidthBasedOnEntryNames_1,
            result: {
                logicType: api_1.ExpressionDefinitionLogicType.Undefined,
                dataType: api_1.DmnBuiltInDataType.Undefined,
                id: (0, api_1.generateUuid)(),
            },
            contextEntries: contextEntries,
        };
        return contextExpression;
    }
    else if (logicType === api_1.ExpressionDefinitionLogicType.List) {
        var listExpression = {
            id: (0, api_1.generateUuid)(),
            dataType: typeRef,
            logicType: logicType,
            items: [
                {
                    id: (0, api_1.generateUuid)(),
                    logicType: api_1.ExpressionDefinitionLogicType.Undefined,
                    dataType: api_1.DmnBuiltInDataType.Undefined,
                },
            ],
        };
        return listExpression;
    }
    else if (logicType === api_1.ExpressionDefinitionLogicType.Invocation) {
        var invocationExpression = {
            id: (0, api_1.generateUuid)(),
            dataType: typeRef,
            logicType: logicType,
            entryInfoWidth: WidthConstants_1.CONTEXT_ENTRY_INFO_MIN_WIDTH,
            bindingEntries: [
                {
                    entryInfo: {
                        id: (0, api_1.generateUuid)(),
                        name: InvocationExpression_1.INVOCATION_EXPRESSION_DEFAULT_PARAMETER_NAME,
                        dataType: InvocationExpression_1.INVOCATION_EXPRESSION_DEFAULT_PARAMETER_DATA_TYPE,
                    },
                    entryExpression: {
                        id: (0, api_1.generateUuid)(),
                        name: InvocationExpression_1.INVOCATION_EXPRESSION_DEFAULT_PARAMETER_NAME,
                        dataType: InvocationExpression_1.INVOCATION_EXPRESSION_DEFAULT_PARAMETER_DATA_TYPE,
                        logicType: InvocationExpression_1.INVOCATION_EXPRESSION_DEFAULT_PARAMETER_LOGIC_TYPE,
                    },
                },
            ],
            invokedFunction: {
                id: (0, api_1.generateUuid)(),
                name: "FUNCTION NAME",
            },
        };
        return invocationExpression;
    }
    else if (logicType === api_1.ExpressionDefinitionLogicType.Relation) {
        var relationExpression = {
            id: (0, api_1.generateUuid)(),
            dataType: typeRef,
            logicType: logicType,
            rows: [
                {
                    id: (0, api_1.generateUuid)(),
                    cells: [{ id: (0, api_1.generateUuid)(), content: RelationExpression_1.RELATION_EXPRESSION_DEFAULT_VALUE }],
                },
            ],
            columns: !dataType || !(0, DataTypeSpec_1.isStruct)(dataType.itemDefinition)
                ? [
                    {
                        id: (0, api_1.generateUuid)(),
                        name: (_c = dataType === null || dataType === void 0 ? void 0 : dataType.itemDefinition["@_name"]) !== null && _c !== void 0 ? _c : "column-1",
                        dataType: (_d = dataType === null || dataType === void 0 ? void 0 : dataType.feelName) !== null && _d !== void 0 ? _d : api_1.DmnBuiltInDataType.Undefined,
                        width: WidthConstants_1.RELATION_EXPRESSION_COLUMN_DEFAULT_WIDTH,
                    },
                ]
                : ((_e = dataType.itemDefinition.itemComponent) !== null && _e !== void 0 ? _e : []).map(function (ic) {
                    var _a, _b, _c;
                    var name = ic["@_name"];
                    var typeRef = (0, DataTypeSpec_1.isStruct)(ic)
                        ? api_1.DmnBuiltInDataType.Any
                        : (_b = (_a = ic.typeRef) === null || _a === void 0 ? void 0 : _a.__$$text) !== null && _b !== void 0 ? _b : api_1.DmnBuiltInDataType.Undefined;
                    return {
                        id: (0, api_1.generateUuid)(),
                        name: name,
                        dataType: typeRef,
                        width: (_c = getDefaultColumnWidth === null || getDefaultColumnWidth === void 0 ? void 0 : getDefaultColumnWidth({ name: name, typeRef: typeRef })) !== null && _c !== void 0 ? _c : WidthConstants_1.RELATION_EXPRESSION_COLUMN_DEFAULT_WIDTH,
                    };
                }),
        };
        return relationExpression;
    }
    else if (logicType === api_1.ExpressionDefinitionLogicType.DecisionTable) {
        var singleOutputColumn = {
            name: expressionHolderName || "Output 1",
            typeRef: (_f = dataType === null || dataType === void 0 ? void 0 : dataType.feelName) !== null && _f !== void 0 ? _f : api_1.DmnBuiltInDataType.Undefined,
        };
        var singleInputColumn = {
            name: "Input 1",
            typeRef: api_1.DmnBuiltInDataType.Undefined,
        };
        var input = (_h = (_g = getInputs === null || getInputs === void 0 ? void 0 : getInputs()) === null || _g === void 0 ? void 0 : _g.map(function (input) {
            var _a, _b;
            return {
                id: (0, api_1.generateUuid)(),
                idLiteralExpression: (0, api_1.generateUuid)(),
                name: input.name,
                dataType: (_a = input.typeRef) !== null && _a !== void 0 ? _a : api_1.DmnBuiltInDataType.Undefined,
                width: (_b = getDefaultColumnWidth === null || getDefaultColumnWidth === void 0 ? void 0 : getDefaultColumnWidth(input)) !== null && _b !== void 0 ? _b : WidthConstants_1.DECISION_TABLE_INPUT_DEFAULT_WIDTH,
            };
        })) !== null && _h !== void 0 ? _h : [
            {
                id: (0, api_1.generateUuid)(),
                idLiteralExpression: (0, api_1.generateUuid)(),
                name: singleInputColumn.name,
                dataType: singleInputColumn.typeRef,
                width: (_j = getDefaultColumnWidth === null || getDefaultColumnWidth === void 0 ? void 0 : getDefaultColumnWidth(singleInputColumn)) !== null && _j !== void 0 ? _j : WidthConstants_1.DECISION_TABLE_INPUT_DEFAULT_WIDTH,
            },
        ];
        var output = !dataType || !(0, DataTypeSpec_1.isStruct)(dataType.itemDefinition)
            ? [
                {
                    id: (0, api_1.generateUuid)(),
                    name: singleOutputColumn.name,
                    dataType: singleOutputColumn.typeRef,
                    width: (_k = getDefaultColumnWidth === null || getDefaultColumnWidth === void 0 ? void 0 : getDefaultColumnWidth(singleOutputColumn)) !== null && _k !== void 0 ? _k : WidthConstants_1.DECISION_TABLE_OUTPUT_DEFAULT_WIDTH,
                },
            ]
            : ((_l = dataType.itemDefinition.itemComponent) !== null && _l !== void 0 ? _l : []).map(function (ic) {
                var _a, _b, _c;
                var name = ic["@_name"];
                var typeRef = (0, DataTypeSpec_1.isStruct)(ic)
                    ? api_1.DmnBuiltInDataType.Any
                    : (_b = (_a = ic.typeRef) === null || _a === void 0 ? void 0 : _a.__$$text) !== null && _b !== void 0 ? _b : api_1.DmnBuiltInDataType.Undefined;
                return {
                    id: (0, api_1.generateUuid)(),
                    name: name,
                    dataType: typeRef,
                    width: (_c = getDefaultColumnWidth === null || getDefaultColumnWidth === void 0 ? void 0 : getDefaultColumnWidth({ name: name, typeRef: typeRef })) !== null && _c !== void 0 ? _c : WidthConstants_1.DECISION_TABLE_OUTPUT_DEFAULT_WIDTH,
                };
            });
        var decisionTableExpression = {
            id: (0, api_1.generateUuid)(),
            dataType: typeRef,
            logicType: logicType,
            hitPolicy: api_1.DecisionTableExpressionDefinitionHitPolicy.Unique,
            aggregation: api_1.DecisionTableExpressionDefinitionBuiltInAggregation["<None>"],
            input: input,
            output: output,
            annotations: [
                {
                    name: "Annotations",
                    width: WidthConstants_1.DECISION_TABLE_ANNOTATION_DEFAULT_WIDTH,
                },
            ],
            rules: [
                {
                    id: (0, api_1.generateUuid)(),
                    inputEntries: input.map(function () { return ({ id: (0, api_1.generateUuid)(), content: DecisionTableExpression_1.DECISION_TABLE_INPUT_DEFAULT_VALUE }); }),
                    outputEntries: output.map(function () { return ({ id: (0, api_1.generateUuid)(), content: DecisionTableExpression_1.DECISION_TABLE_OUTPUT_DEFAULT_VALUE }); }),
                    annotationEntries: ["// Your annotations here"],
                },
            ],
        };
        return decisionTableExpression;
    }
    else {
        throw new Error("No default expression available for ".concat(logicType));
    }
}
exports.getDefaultExpressionDefinitionByLogicType = getDefaultExpressionDefinitionByLogicType;
//# sourceMappingURL=getDefaultExpressionDefinitionByLogicType.js.map