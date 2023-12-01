"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNamespaceOfDmnImport = void 0;
var Dmn15Spec_1 = require("../Dmn15Spec");
var pmml_1 = require("../pmml/pmml");
function getNamespaceOfDmnImport(_a) {
    var dmnImport = _a.dmnImport;
    if (Dmn15Spec_1.allDmnImportNamespaces.has(dmnImport["@_importType"])) {
        return dmnImport["@_namespace"];
    }
    else if (pmml_1.allPmmlImportNamespaces.has(dmnImport["@_importType"])) {
        return (0, pmml_1.getPmmlNamespaceFromDmnImport)({ dmnImport: dmnImport });
    }
    else {
        return dmnImport["@_namespace"];
    }
}
exports.getNamespaceOfDmnImport = getNamespaceOfDmnImport;
//# sourceMappingURL=importNamespaces.js.map