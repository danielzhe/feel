"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseXmlHref = exports.buildXmlHref = void 0;
function buildXmlHref(_a) {
    var namespace = _a.namespace, id = _a.id;
    return "".concat(namespace !== null && namespace !== void 0 ? namespace : "", "#").concat(id);
}
exports.buildXmlHref = buildXmlHref;
function parseXmlHref(href) {
    var split = href.split("#");
    if (split.length <= 1) {
        return { namespace: undefined, id: split[0] };
    }
    if (split.length > 2) {
        throw new Error("XML URI can't have hashes (#) on neither the namespace or the id. Alledged URI: '".concat(href, "'"));
    }
    return { namespace: split[0] ? split[0] : undefined, id: split[1] };
}
exports.parseXmlHref = parseXmlHref;
//# sourceMappingURL=xmlHrefs.js.map