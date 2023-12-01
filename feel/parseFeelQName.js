"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFeelQName = exports.parseFeelQName = void 0;
function parseFeelQName(qName) {
    var split = qName.split(".");
    if (split.length <= 1) {
        return { type: "feel-qname", localPart: qName };
    }
    if (split.length > 2) {
        throw new Error("XML QNames can't have dots (.) on neither the importName or the localPart. Alledged QName: '".concat(qName, "'"));
    }
    return { type: "feel-qname", importName: split[0], localPart: split[1] };
}
exports.parseFeelQName = parseFeelQName;
function buildFeelQName(_a) {
    var importName = _a.importName, localPart = _a.localPart;
    return importName ? "".concat(importName, ".").concat(localPart) : localPart;
}
exports.buildFeelQName = buildFeelQName;
//# sourceMappingURL=parseFeelQName.js.map