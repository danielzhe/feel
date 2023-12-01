"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTextAnnotation = exports.renameGroupNode = exports.renameDrgElement = void 0;
var dmn_feel_antlr4_parser_1 = require("@kie-tools/dmn-feel-antlr4-parser");
function renameDrgElement(_a) {
    var _b, _c;
    var definitions = _a.definitions, newName = _a.newName, index = _a.index;
    var trimmedNewName = newName.trim();
    var feelVariables = new dmn_feel_antlr4_parser_1.FeelVariables(definitions);
    var drgElement = definitions.drgElement[index];
    drgElement["@_name"] = trimmedNewName;
    if (drgElement.__$$element !== "knowledgeSource") {
        (_b = drgElement.variable) !== null && _b !== void 0 ? _b : (drgElement.variable = { "@_name": trimmedNewName });
        drgElement.variable["@_name"] = trimmedNewName;
    }
    feelVariables.renameVariable((_c = drgElement["@_id"]) !== null && _c !== void 0 ? _c : "", trimmedNewName);
    feelVariables.applyChangesToDefinition();
}
exports.renameDrgElement = renameDrgElement;
function renameGroupNode(_a) {
    var definitions = _a.definitions, newName = _a.newName, index = _a.index;
    definitions.artifact[index]["@_name"] = newName;
}
exports.renameGroupNode = renameGroupNode;
function updateTextAnnotation(_a) {
    var definitions = _a.definitions, newText = _a.newText, index = _a.index;
    definitions.artifact[index].text = { __$$text: newText };
}
exports.updateTextAnnotation = updateTextAnnotation;
//# sourceMappingURL=renameNode.js.map