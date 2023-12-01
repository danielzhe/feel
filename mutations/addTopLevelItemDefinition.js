"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTopLevelItemDefinition = void 0;
var DataTypeSpec_1 = require("../dataTypes/DataTypeSpec");
function addTopLevelItemDefinition(_a) {
    var _b;
    var definitions = _a.definitions, partial = _a.partial;
    var newItemDefinition = (0, DataTypeSpec_1.getNewItemDefinition)(partial);
    (_b = definitions.itemDefinition) !== null && _b !== void 0 ? _b : (definitions.itemDefinition = []);
    definitions.itemDefinition.unshift(newItemDefinition);
    return newItemDefinition;
}
exports.addTopLevelItemDefinition = addTopLevelItemDefinition;
//# sourceMappingURL=addTopLevelItemDefinition.js.map