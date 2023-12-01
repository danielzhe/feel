"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameItemDefinition = void 0;
var DataTypeSpec_1 = require("../dataTypes/DataTypeSpec");
var dmn_feel_antlr4_parser_1 = require("@kie-tools/dmn-feel-antlr4-parser");
function renameItemDefinition(_a) {
    var _b, _c, _d;
    var definitions = _a.definitions, newName = _a.newName, allDataTypesById = _a.allDataTypesById, itemDefinitionId = _a.itemDefinitionId;
    var dataType = allDataTypesById.get(itemDefinitionId);
    if (!dataType) {
        throw new Error("Can't rename unnexistent item definition. ID ".concat(itemDefinitionId));
    }
    if (dataType.namespace !== definitions["@_namespace"]) {
        throw new Error("Can't rename an external item definition. ID ".concat(itemDefinitionId, ", Namespace: ").concat(dataType.namespace));
    }
    var trimmedNewName = newName.trim();
    var itemDefinition = (0, DataTypeSpec_1.findDataTypeById)({ definitions: definitions, itemDefinitionId: itemDefinitionId, allDataTypesById: allDataTypesById }).itemDefinition;
    var feelVariables = new dmn_feel_antlr4_parser_1.FeelVariables(definitions);
    if (!(dataType === null || dataType === void 0 ? void 0 : dataType.parentId)) {
        (0, DataTypeSpec_1.traverseItemDefinitions)((_b = definitions.itemDefinition) !== null && _b !== void 0 ? _b : [], function (item) {
            var _a;
            if (((_a = item.typeRef) === null || _a === void 0 ? void 0 : _a.__$$text) === itemDefinition["@_name"]) {
                item.typeRef = { __$$text: trimmedNewName };
            }
        });
        (_c = definitions.drgElement) !== null && _c !== void 0 ? _c : (definitions.drgElement = []);
        for (var i = 0; i < definitions.drgElement.length; i++) {
            var element = definitions.drgElement[i];
            if (element.__$$element === "inputData" ||
                element.__$$element === "decision" ||
                element.__$$element === "businessKnowledgeModel" ||
                element.__$$element === "decisionService") {
                if (((_d = element.variable) === null || _d === void 0 ? void 0 : _d["@_typeRef"]) === itemDefinition["@_name"]) {
                    element.variable["@_typeRef"] = trimmedNewName;
                }
                if (element.__$$element === "decision" || element.__$$element === "businessKnowledgeModel") {
                    (0, DataTypeSpec_1.traverseTypeRefedInExpressionHolders)(element, function (typeRefed) {
                        if (typeRefed["@_typeRef"] === itemDefinition["@_name"]) {
                            typeRefed["@_typeRef"] = trimmedNewName;
                        }
                    });
                }
            }
        }
    }
    else {
        feelVariables.renameVariable(itemDefinitionId, trimmedNewName);
        feelVariables.applyChangesToDefinition();
    }
    itemDefinition["@_name"] = trimmedNewName;
}
exports.renameItemDefinition = renameItemDefinition;
//# sourceMappingURL=renameItemDefinition.js.map