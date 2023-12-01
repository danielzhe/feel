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
exports.retrieveModelData = exports.getPmmlDocumentData = exports.BoxedExpression = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var expressions_1 = require("@kie-tools/boxed-expression-component/dist/expressions");
var Label_1 = require("@patternfly/react-core/dist/js/components/Label");
var react_1 = require("react");
var updateExpression_1 = require("../mutations/updateExpression");
var Store_1 = require("../store/Store");
var dmnToBee_1 = require("./dmnToBee");
var getDefaultExpressionDefinitionByLogicType_1 = require("./getDefaultExpressionDefinitionByLogicType");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var error_circle_o_icon_1 = require("@patternfly/react-icons/dist/js/icons/error-circle-o-icon");
var info_icon_1 = require("@patternfly/react-icons/dist/js/icons/info-icon");
var BuiltInFeelTypes_1 = require("../dataTypes/BuiltInFeelTypes");
var DerivedStore_1 = require("../store/DerivedStore");
var DataTypeSpec_1 = require("../dataTypes/DataTypeSpec");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var DmnMaths_1 = require("../diagram/maths/DmnMaths");
var Icons_1 = require("../icons/Icons");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var api_2 = require("@kie-tools/pmml-editor-marshaller/dist/api");
var PMMLModelData_1 = require("@kie-tools/pmml-editor-marshaller/dist/api/PMMLModelData");
var pmml4_4_1 = require("@kie-tools/pmml-editor-marshaller/dist/marshaller/model/pmml4_4");
var PMMLFieldData_1 = require("@kie-tools/pmml-editor-marshaller/dist/api/PMMLFieldData");
var getDefaultColumnWidth_1 = require("./getDefaultColumnWidth");
var dmn_feel_antlr4_parser_1 = require("@kie-tools/dmn-feel-antlr4-parser");
var arrow_right_icon_1 = require("@patternfly/react-icons/dist/js/icons/arrow-right-icon");
function BoxedExpression(_a) {
    var container = _a.container;
    var thisDmn = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn; });
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var dispatch = (0, Store_1.useDmnEditorStore)(function (s) { return s.dispatch; });
    var boxedExpressionEditor = (0, Store_1.useDmnEditorStore)(function (s) { return s.boxedExpressionEditor; });
    var externalDmnsByNamespace = (0, DerivedStore_1.useDmnEditorDerivedStore)().externalDmnsByNamespace;
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var feelVariables = (0, react_1.useMemo)(function () {
        var e_1, _a;
        var externalModels = new Map();
        try {
            for (var externalDmnsByNamespace_1 = __values(externalDmnsByNamespace), externalDmnsByNamespace_1_1 = externalDmnsByNamespace_1.next(); !externalDmnsByNamespace_1_1.done; externalDmnsByNamespace_1_1 = externalDmnsByNamespace_1.next()) {
                var _b = __read(externalDmnsByNamespace_1_1.value, 2), key = _b[0], externalDmn = _b[1];
                externalModels.set(key, externalDmn.model);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (externalDmnsByNamespace_1_1 && !externalDmnsByNamespace_1_1.done && (_a = externalDmnsByNamespace_1.return)) _a.call(externalDmnsByNamespace_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return new dmn_feel_antlr4_parser_1.FeelVariables(thisDmn.model.definitions, externalModels);
    }, [thisDmn.model.definitions, externalDmnsByNamespace]);
    var widthsById = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d, _e;
        return ((_e = (_d = (_c = (_b = (_a = thisDmn.model.definitions["dmndi:DMNDI"]) === null || _a === void 0 ? void 0 : _a["dmndi:DMNDiagram"]) === null || _b === void 0 ? void 0 : _b[diagram.drdIndex]["di:extension"]) === null || _c === void 0 ? void 0 : _c["kie:ComponentsWidthsExtension"]) === null || _d === void 0 ? void 0 : _d["kie:ComponentWidths"]) !== null && _e !== void 0 ? _e : []).reduce(function (acc, c) {
            var _a;
            if (c["@_dmnElementRef"] === undefined) {
                return acc;
            }
            else {
                return acc.set(c["@_dmnElementRef"], ((_a = c["kie:width"]) !== null && _a !== void 0 ? _a : []).map(function (vv) { return vv.__$$text; }));
            }
        }, new Map());
    }, [diagram.drdIndex, thisDmn.model.definitions]);
    var expression = (0, react_1.useMemo)(function () {
        var _a;
        if (!boxedExpressionEditor.activeDrgElementId) {
            return undefined;
        }
        var drgElementIndex = ((_a = thisDmn.model.definitions.drgElement) !== null && _a !== void 0 ? _a : []).findIndex(function (e) { return e["@_id"] === boxedExpressionEditor.activeDrgElementId; });
        if (drgElementIndex < 0) {
            return undefined;
        }
        var drgElement = thisDmn.model.definitions.drgElement[drgElementIndex];
        if (!(drgElement.__$$element === "decision" || drgElement.__$$element === "businessKnowledgeModel")) {
            return undefined;
        }
        return {
            beeExpression: drgElementToBoxedExpression(widthsById, drgElement),
            drgElementIndex: drgElementIndex,
            drgElement: drgElement,
            drgElementType: drgElement.__$$element,
        };
    }, [boxedExpressionEditor.activeDrgElementId, thisDmn.model.definitions.drgElement, widthsById]);
    var _b = __read((0, react_1.useState)(undefined), 2), lastValidExpression = _b[0], setLastValidExpression = _b[1];
    (0, react_1.useEffect)(function () {
        if (expression) {
            setLastValidExpression(expression);
        }
    }, [expression, setLastValidExpression]);
    var setExpression = (0, react_1.useCallback)(function (expressionAction) {
        dmnEditorStoreApi.setState(function (state) {
            var _a, _b;
            var newExpression = typeof expressionAction === "function"
                ? expressionAction((_a = expression === null || expression === void 0 ? void 0 : expression.beeExpression) !== null && _a !== void 0 ? _a : (0, dmnToBee_1.getUndefinedExpressionDefinition)())
                : expressionAction;
            (0, updateExpression_1.updateExpression)({
                definitions: state.dmn.model.definitions,
                drdIndex: diagram.drdIndex,
                expression: newExpression,
                drgElementIndex: (_b = expression === null || expression === void 0 ? void 0 : expression.drgElementIndex) !== null && _b !== void 0 ? _b : 0,
            });
        });
    }, [diagram.drdIndex, dmnEditorStoreApi, expression === null || expression === void 0 ? void 0 : expression.beeExpression, expression === null || expression === void 0 ? void 0 : expression.drgElementIndex]);
    var isResetSupportedOnRootExpression = (0, react_1.useMemo)(function () {
        return (expression === null || expression === void 0 ? void 0 : expression.drgElementType) === "decision";
    }, [expression === null || expression === void 0 ? void 0 : expression.drgElementType]);
    var _c = (0, DerivedStore_1.useDmnEditorDerivedStore)(), dataTypesTree = _c.dataTypesTree, allTopLevelDataTypesByFeelName = _c.allTopLevelDataTypesByFeelName, nodesById = _c.nodesById, importsByNamespace = _c.importsByNamespace, externalPmmlsByNamespace = _c.externalPmmlsByNamespace;
    var dataTypes = (0, react_1.useMemo)(function () {
        var customDataTypes = dataTypesTree.map(function (d) {
            var _a, _b;
            return ({
                isCustom: true,
                typeRef: (_b = (_a = d.itemDefinition.typeRef) === null || _a === void 0 ? void 0 : _a.__$$text) !== null && _b !== void 0 ? _b : "",
                name: d.feelName,
            });
        });
        return __spreadArray(__spreadArray([], __read(BuiltInFeelTypes_1.builtInFeelTypes), false), __read(customDataTypes), false);
    }, [dataTypesTree]);
    var pmmlParams = (0, react_1.useMemo)(function () {
        return __spreadArray([], __read(externalPmmlsByNamespace.entries()), false).flatMap(function (_a) {
            var _b = __read(_a, 2), namespace = _b[0], pmml = _b[1];
            var documentData = getPmmlDocumentData(pmml.model);
            var _import = importsByNamespace.get(namespace);
            if (!_import) {
                return [];
            }
            return {
                document: _import["@_name"],
                modelsFromDocument: documentData.models.map(function (m) { return ({
                    model: m.modelName,
                    parametersFromModel: m.fields.map(function (f) { return ({
                        id: (0, api_1.generateUuid)(),
                        name: f.fieldName,
                        dataType: undefined,
                    }); }),
                }); }),
            };
        });
    }, [importsByNamespace, externalPmmlsByNamespace]);
    var beeGwtService = (0, react_1.useMemo)(function () {
        return {
            getDefaultExpressionDefinition: function (logicType, typeRef, isRoot) {
                var _a;
                return (0, getDefaultExpressionDefinitionByLogicType_1.getDefaultExpressionDefinitionByLogicType)({
                    logicType: logicType,
                    typeRef: typeRef !== null && typeRef !== void 0 ? typeRef : api_1.DmnBuiltInDataType.Undefined,
                    expressionHolderName: (_a = expression === null || expression === void 0 ? void 0 : expression.drgElement) === null || _a === void 0 ? void 0 : _a["@_name"],
                    allTopLevelDataTypesByFeelName: allTopLevelDataTypesByFeelName,
                    getDefaultColumnWidth: getDefaultColumnWidth_1.getDefaultColumnWidth,
                    getInputs: function () {
                        if (!isRoot || (expression === null || expression === void 0 ? void 0 : expression.drgElement.__$$element) !== "decision") {
                            return undefined;
                        }
                        else {
                            return determineInputsForDecision(expression === null || expression === void 0 ? void 0 : expression.drgElement, allTopLevelDataTypesByFeelName, nodesById);
                        }
                    },
                });
            },
            selectObject: function (uuid) {
                dmnEditorStoreApi.setState(function (state) {
                    state.boxedExpressionEditor.selectedObjectId = uuid;
                });
            },
            openDataTypePage: function () {
                dmnEditorStoreApi.setState(function (state) {
                    state.navigation.tab = Store_1.DmnEditorTab.DATA_TYPES;
                });
            },
        };
    }, [allTopLevelDataTypesByFeelName, dmnEditorStoreApi, expression === null || expression === void 0 ? void 0 : expression.drgElement, nodesById]);
    var Icon = expression ? (0, Icons_1.NodeIcon)((0, DmnMaths_1.getNodeTypeFromDmnObject)(expression.drgElement)) : function () { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}); };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Flex_1.Flex, __assign({ className: "kie-dmn-editor--sticky-top-glass-header kie-dmn-editor--boxed-expression-header", justifyContent: { default: "justifyContentSpaceBetween" }, alignItems: { default: "alignItemsCenter" }, direction: { default: "row" } }, { children: [(0, jsx_runtime_1.jsx)(Flex_1.FlexItem, { children: (0, jsx_runtime_1.jsxs)(Label_1.Label, __assign({ className: "kie-dmn-editor--boxed-expression-back", onClick: function () {
                                    dmnEditorStoreApi.setState(function (state) {
                                        dispatch.boxedExpressionEditor.close(state);
                                    });
                                } }, { children: [(0, jsx_runtime_1.jsx)(arrow_right_icon_1.ArrowRightIcon, { style: { transform: "scale(-1, -1)", marginRight: "12px" } }), (0, jsx_runtime_1.jsx)("p", { children: "Back to Diagram" })] })) }), (0, jsx_runtime_1.jsx)(Flex_1.FlexItem, { children: (0, jsx_runtime_1.jsxs)(Flex_1.Flex, __assign({ flexWrap: { default: "nowrap" }, justifyContent: { default: "justifyContentSpaceBetween" }, alignItems: { default: "alignItemsCenter" } }, { children: [(0, jsx_runtime_1.jsx)(Flex_1.FlexItem, { children: (0, jsx_runtime_1.jsx)("div", __assign({ style: { height: "40px", width: "40px" } }, { children: (0, jsx_runtime_1.jsx)(Icon, {}) })) }), (0, jsx_runtime_1.jsx)(Flex_1.FlexItem, { children: (0, jsx_runtime_1.jsx)(Text_1.TextContent, { children: (0, jsx_runtime_1.jsx)(Text_1.Text, __assign({ component: Text_1.TextVariants.h2 }, { children: expression === null || expression === void 0 ? void 0 : expression.drgElement["@_name"] })) }) }), (0, jsx_runtime_1.jsx)(Flex_1.FlexItem, { style: { width: "105px" } })] })) }), (0, jsx_runtime_1.jsx)("aside", __assign({ className: "kie-dmn-editor--properties-panel-toggle", style: { visibility: boxedExpressionEditor.propertiesPanel.isOpen ? "hidden" : undefined } }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "kie-dmn-editor--properties-panel-toggle-button", onClick: function () {
                                    dmnEditorStoreApi.setState(function (state) {
                                        state.boxedExpressionEditor.propertiesPanel.isOpen =
                                            !state.boxedExpressionEditor.propertiesPanel.isOpen;
                                    });
                                } }, { children: (0, jsx_runtime_1.jsx)(info_icon_1.InfoIcon, { size: "sm" }) })) }))] })), !expression && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(EmptyState_1.EmptyState, { children: [(0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateIcon, { icon: error_circle_o_icon_1.ErrorCircleOIcon }), (0, jsx_runtime_1.jsx)(Title_1.Title, __assign({ size: "lg", headingLevel: "h4" }, { children: "Expression with ID '".concat(boxedExpressionEditor.activeDrgElementId, "' doesn't exist.") })), (0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateBody, { children: "This happens when the DMN file is modified externally while the expression was open here." }), (0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStatePrimary, { children: (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: "link", onClick: function () {
                                        dmnEditorStoreApi.setState(function (state) {
                                            dispatch.boxedExpressionEditor.close(state);
                                        });
                                    } }, { children: "Go back to the Diagram" })) })] }) })), expression && ((0, jsx_runtime_1.jsx)("div", __assign({ style: { flexGrow: 1 } }, { children: (0, jsx_runtime_1.jsx)(expressions_1.BoxedExpressionEditor, { beeGwtService: beeGwtService, pmmlParams: pmmlParams, isResetSupportedOnRootExpression: isResetSupportedOnRootExpression, decisionNodeId: boxedExpressionEditor.activeDrgElementId, expressionDefinition: expression.beeExpression, setExpressionDefinition: setExpression, dataTypes: dataTypes, scrollableParentRef: container, variables: feelVariables }) })))] }) }));
}
exports.BoxedExpression = BoxedExpression;
function drgElementToBoxedExpression(widthsById, expressionHolder) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (expressionHolder.__$$element === "businessKnowledgeModel") {
        return __assign(__assign({}, (0, dmnToBee_1.dmnToBee)(widthsById, {
            expression: __assign({ __$$element: "functionDefinition" }, expressionHolder.encapsulatedLogic),
        })), { dataType: ((_d = (_b = (_a = expressionHolder.variable) === null || _a === void 0 ? void 0 : _a["@_typeRef"]) !== null && _b !== void 0 ? _b : (_c = expressionHolder.encapsulatedLogic) === null || _c === void 0 ? void 0 : _c["@_typeRef"]) !== null && _d !== void 0 ? _d : api_1.DmnBuiltInDataType.Undefined), name: expressionHolder["@_name"] });
    }
    else if (expressionHolder.__$$element === "decision") {
        return __assign(__assign({}, (0, dmnToBee_1.dmnToBee)(widthsById, expressionHolder)), { dataType: ((_h = (_f = (_e = expressionHolder.variable) === null || _e === void 0 ? void 0 : _e["@_typeRef"]) !== null && _f !== void 0 ? _f : (_g = expressionHolder.expression) === null || _g === void 0 ? void 0 : _g["@_typeRef"]) !== null && _h !== void 0 ? _h : api_1.DmnBuiltInDataType.Undefined), name: expressionHolder["@_name"] });
    }
    else {
        throw new Error("Unknown __$$element of expressionHolder that has an expression '".concat(expressionHolder.__$$element, "'."));
    }
}
function determineInputsForDecision(decision, allTopLevelDataTypesByFeelName, nodesById) {
    var _a;
    try {
        var ret = ((_a = decision.informationRequirement) !== null && _a !== void 0 ? _a : []).flatMap(function (s) {
            var _a, _b, _c, _d, _e;
            var dmnObject = nodesById.get(((_b = (_a = s.requiredDecision) === null || _a === void 0 ? void 0 : _a["@_href"]) !== null && _b !== void 0 ? _b : (_c = s.requiredInput) === null || _c === void 0 ? void 0 : _c["@_href"])).data.dmnObject;
            if (!((dmnObject === null || dmnObject === void 0 ? void 0 : dmnObject.__$$element) === "inputData" || (dmnObject === null || dmnObject === void 0 ? void 0 : dmnObject.__$$element) === "decision")) {
                throw new Error("DMN EDITOR: Information requirement can't ever point to anything other than an InputData or a Decision");
            }
            var dataType = allTopLevelDataTypesByFeelName.get(dmnObject.variable["@_typeRef"]);
            return dataType && (0, DataTypeSpec_1.isStruct)(dataType.itemDefinition)
                ? ((_d = dataType.itemDefinition.itemComponent) !== null && _d !== void 0 ? _d : []).flatMap(function (ic) {
                    return flattenComponents(ic, dmnObject.variable["@_name"]);
                })
                : [
                    {
                        name: dmnObject.variable["@_name"],
                        typeRef: (_e = dmnObject.variable) === null || _e === void 0 ? void 0 : _e["@_typeRef"],
                    },
                ];
        });
        if (ret.length === 0) {
            return undefined;
        }
        return ret;
    }
    catch (e) {
        console.error("DMN EDITOR: Error suggesting imports for root expression on '".concat(decision["@_name"], "'."), e);
        return undefined;
    }
}
function flattenComponents(itemDefinition, acc) {
    var _a, _b;
    if (!(0, DataTypeSpec_1.isStruct)(itemDefinition)) {
        return [
            {
                name: "".concat(acc, ".").concat(itemDefinition["@_name"]),
                typeRef: (_a = itemDefinition.typeRef) === null || _a === void 0 ? void 0 : _a.__$$text,
            },
        ];
    }
    return ((_b = itemDefinition.itemComponent) !== null && _b !== void 0 ? _b : []).flatMap(function (ic) {
        return flattenComponents(ic, "".concat(acc, ".").concat(itemDefinition["@_name"]));
    });
}
function getPmmlDocumentData(pmml) {
    var models = [];
    var document = new api_2.PMMLDocumentData(models);
    if (pmml.models) {
        pmml.models.forEach(function (model) {
            var modelData = retrieveModelData(model);
            if (modelData) {
                models.push(modelData);
            }
        });
    }
    return document;
}
exports.getPmmlDocumentData = getPmmlDocumentData;
function retrieveModelData(model) {
    var e_2, _a;
    var modelsTypes = [
        pmml4_4_1.AnomalyDetectionModel,
        pmml4_4_1.AssociationModel,
        pmml4_4_1.BayesianNetworkModel,
        pmml4_4_1.BaselineModel,
        pmml4_4_1.ClusteringModel,
        pmml4_4_1.GaussianProcessModel,
        pmml4_4_1.GeneralRegressionModel,
        pmml4_4_1.MiningModel,
        pmml4_4_1.NaiveBayesModel,
        pmml4_4_1.NearestNeighborModel,
        pmml4_4_1.NeuralNetwork,
        pmml4_4_1.RegressionModel,
        pmml4_4_1.RuleSetModel,
        pmml4_4_1.SequenceModel,
        pmml4_4_1.Scorecard,
        pmml4_4_1.SupportVectorMachineModel,
        pmml4_4_1.TextModel,
        pmml4_4_1.TimeSeriesModel,
        pmml4_4_1.TreeModel,
    ];
    var modelData;
    try {
        for (var modelsTypes_1 = __values(modelsTypes), modelsTypes_1_1 = modelsTypes_1.next(); !modelsTypes_1_1.done; modelsTypes_1_1 = modelsTypes_1.next()) {
            var type = modelsTypes_1_1.value;
            if (model instanceof type) {
                var modelFields = model.MiningSchema.MiningField.map(function (field) { return new PMMLFieldData_1.PMMLFieldData(field.name.toString(), field.usageType); });
                modelData = new PMMLModelData_1.PMMLModelData(model.modelName == null ? "" : model.modelName, modelFields);
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (modelsTypes_1_1 && !modelsTypes_1_1.done && (_a = modelsTypes_1.return)) _a.call(modelsTypes_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return modelData;
}
exports.retrieveModelData = retrieveModelData;
//# sourceMappingURL=BoxedExpression.js.map