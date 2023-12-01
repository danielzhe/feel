"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameImport = void 0;
var DataTypeSpec_1 = require("../dataTypes/DataTypeSpec");
var parseFeelQName_1 = require("../feel/parseFeelQName");
var Dmn15Spec_1 = require("../Dmn15Spec");
var dmn_feel_antlr4_parser_1 = require("@kie-tools/dmn-feel-antlr4-parser");
function renameImport(_a) {
    var _b, _c, _d, _e, _f;
    var definitions = _a.definitions, newName = _a.newName, allTopLevelDataTypesByFeelName = _a.allTopLevelDataTypesByFeelName, index = _a.index, externalDmnModels = _a.externalDmnModels;
    var trimmedNewName = newName.trim();
    var _import = definitions.import[index];
    (0, DataTypeSpec_1.traverseItemDefinitions)((_b = definitions.itemDefinition) !== null && _b !== void 0 ? _b : [], function (item) {
        var _a;
        if (item.typeRef) {
            var feelQName = (0, parseFeelQName_1.parseFeelQName)(item.typeRef.__$$text);
            if (((_a = allTopLevelDataTypesByFeelName.get(item.typeRef.__$$text)) === null || _a === void 0 ? void 0 : _a.namespace) === _import["@_namespace"]) {
                item.typeRef = {
                    __$$text: (0, parseFeelQName_1.buildFeelQName)({
                        type: "feel-qname",
                        importName: trimmedNewName,
                        localPart: feelQName.localPart,
                    }),
                };
            }
        }
    });
    (_c = definitions.drgElement) !== null && _c !== void 0 ? _c : (definitions.drgElement = []);
    for (var i = 0; i < definitions.drgElement.length; i++) {
        var element = definitions.drgElement[i];
        if (element.__$$element === "inputData" ||
            element.__$$element === "decision" ||
            element.__$$element === "businessKnowledgeModel" ||
            element.__$$element === "decisionService") {
            if ((_d = element.variable) === null || _d === void 0 ? void 0 : _d["@_typeRef"]) {
                if (((_f = allTopLevelDataTypesByFeelName.get((_e = element.variable) === null || _e === void 0 ? void 0 : _e["@_typeRef"])) === null || _f === void 0 ? void 0 : _f.namespace) === _import["@_namespace"]) {
                    var feelQName = (0, parseFeelQName_1.parseFeelQName)(element.variable["@_typeRef"]);
                    element.variable["@_typeRef"] = (0, parseFeelQName_1.buildFeelQName)({
                        type: "feel-qname",
                        importName: trimmedNewName,
                        localPart: feelQName.localPart,
                    });
                }
            }
            if (element.__$$element === "decision" || element.__$$element === "businessKnowledgeModel") {
                (0, DataTypeSpec_1.traverseExpressionsInExpressionHolders)(element, function (expression, __$$element) {
                    var _a, _b;
                    if (__$$element === "functionDefinition") {
                        var e = expression;
                        if (e["@_kind"] === "PMML") {
                            var pmmlDocument = (_a = e.expression.contextEntry) === null || _a === void 0 ? void 0 : _a.find(function (_a) {
                                var variable = _a.variable;
                                return (variable === null || variable === void 0 ? void 0 : variable["@_name"]) === Dmn15Spec_1.DMN15_SPEC.BOXED.FUNCTION.PMML.documentFieldName;
                            });
                            var pmmlDocumentLiteralExpression = pmmlDocument === null || pmmlDocument === void 0 ? void 0 : pmmlDocument.expression;
                            if (((_b = pmmlDocumentLiteralExpression === null || pmmlDocumentLiteralExpression === void 0 ? void 0 : pmmlDocumentLiteralExpression.text) === null || _b === void 0 ? void 0 : _b.__$$text) === _import["@_name"]) {
                                pmmlDocumentLiteralExpression.text = { __$$text: trimmedNewName };
                            }
                        }
                    }
                });
                (0, DataTypeSpec_1.traverseTypeRefedInExpressionHolders)(element, function (typeRefed) {
                    var _a;
                    if (typeRefed["@_typeRef"]) {
                        if (((_a = allTopLevelDataTypesByFeelName.get(typeRefed["@_typeRef"])) === null || _a === void 0 ? void 0 : _a.namespace) === _import["@_namespace"]) {
                            var feelQName = (0, parseFeelQName_1.parseFeelQName)(typeRefed["@_typeRef"]);
                            typeRefed["@_typeRef"] = (0, parseFeelQName_1.buildFeelQName)({
                                type: "feel-qname",
                                importName: trimmedNewName,
                                localPart: feelQName.localPart,
                            });
                        }
                    }
                });
            }
        }
    }
    var feelVariables = new dmn_feel_antlr4_parser_1.FeelVariables(definitions, externalDmnModels);
    feelVariables.renameImport(_import["@_name"], trimmedNewName);
    feelVariables.applyChangesToDefinition();
    _import["@_name"] = trimmedNewName;
}
exports.renameImport = renameImport;
//# sourceMappingURL=renameImport.js.map