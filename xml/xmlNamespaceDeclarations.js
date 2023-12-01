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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getXmlNamespaceDeclarationName = void 0;
var qNames_1 = require("@kie-tools/xml-parser-ts/dist/qNames");
function getXmlNamespaceDeclarationName(_a) {
    var model = _a.model, namespace = _a.namespace;
    var xmlnsEntry = Object.entries(model !== null && model !== void 0 ? model : {}).find(function (_a) {
        var _b = __read(_a, 2), k = _b[0], v = _b[1];
        return v === namespace && (k === "@_xmlns" || k.startsWith("@_xmlns:"));
    });
    if (!xmlnsEntry) {
        return undefined;
    }
    if (xmlnsEntry[0] === "@_xmlns") {
        return undefined;
    }
    return (0, qNames_1.parseXmlQName)(xmlnsEntry[0]).localPart;
}
exports.getXmlNamespaceDeclarationName = getXmlNamespaceDeclarationName;
//# sourceMappingURL=xmlNamespaceDeclarations.js.map