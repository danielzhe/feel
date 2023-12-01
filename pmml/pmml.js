"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPmmlNamespaceFromDmnImport = exports.getPmmlNamespace = exports.allPmmlImportNamespaces = exports.KIE_PMML_NAMESPACE = void 0;
var xmlHrefs_1 = require("../xml/xmlHrefs");
exports.KIE_PMML_NAMESPACE = "https://kie.org/pmml";
exports.allPmmlImportNamespaces = new Set([
    "https://www.dmg.org/PMML-4_4",
    "http://www.dmg.org/PMML-4_4",
    "https://www.dmg.org/PMML-4_3",
    "http://www.dmg.org/PMML-4_3",
    "https://www.dmg.org/PMML-4_2",
    "http://www.dmg.org/PMML-4_2",
    "https://www.dmg.org/PMML-4_1",
    "http://www.dmg.org/PMML-4_1",
    "https://www.dmg.org/PMML-4_0",
    "http://www.dmg.org/PMML-4_0",
    "https://www.dmg.org/PMML-3_2",
    "http://www.dmg.org/PMML-3_2",
    "https://www.dmg.org/PMML-3_1",
    "http://www.dmg.org/PMML-3_1",
    "https://www.dmg.org/PMML-3_0",
    "http://www.dmg.org/PMML-3_0",
    "https://www.dmg.org/PMML-2_1",
    "http://www.dmg.org/PMML-2_1",
    "https://www.dmg.org/PMML-2_0",
    "http://www.dmg.org/PMML-2_0",
    "https://www.dmg.org/PMML-1_1",
    "http://www.dmg.org/PMML-1_1",
]);
function getPmmlNamespace(_a) {
    var fileRelativePath = _a.fileRelativePath;
    return (0, xmlHrefs_1.buildXmlHref)({ namespace: exports.KIE_PMML_NAMESPACE, id: fileRelativePath });
}
exports.getPmmlNamespace = getPmmlNamespace;
function getPmmlNamespaceFromDmnImport(_a) {
    var dmnImport = _a.dmnImport;
    return dmnImport["@_locationURI"]
        ? getPmmlNamespace({ fileRelativePath: dmnImport["@_locationURI"] })
        : dmnImport["@_namespace"];
}
exports.getPmmlNamespaceFromDmnImport = getPmmlNamespaceFromDmnImport;
//# sourceMappingURL=pmml.js.map