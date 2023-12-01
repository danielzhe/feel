"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addImport = void 0;
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
function addImport(_a) {
    var _b;
    var definitions = _a.definitions, includedModel = _a.includedModel;
    var newImport = {
        "@_id": (0, api_1.generateUuid)(),
        "@_name": includedModel.name.trim(),
        "@_importType": includedModel.xmlns,
        "@_namespace": includedModel.namespace,
        "@_locationURI": includedModel.locationURI,
    };
    (_b = definitions.import) !== null && _b !== void 0 ? _b : (definitions.import = []);
    definitions.import.push(newImport);
    var index = 0;
    while (definitions["@_xmlns:included".concat(index)]) {
        index++;
    }
    definitions["@_xmlns:included".concat(index)] = includedModel.namespace;
    return newImport;
}
exports.addImport = addImport;
//# sourceMappingURL=addImport.js.map