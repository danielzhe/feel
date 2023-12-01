"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tDmnElementReferenceIdRandomizerMatcher = exports.getNewDmnIdRandomizer = void 0;
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var meta_1 = require("@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/meta");
var idRandomizer_1 = require("@kie-tools/xml-parser-ts/dist/idRandomizer");
var xmlHrefs_1 = require("../xml/xmlHrefs");
function getNewDmnIdRandomizer() {
    return new idRandomizer_1.XmlParserTsIdRandomizer({
        meta: meta_1.meta,
        elements: meta_1.elements,
        newIdGenerator: api_1.generateUuid,
        matchers: [exports.tDmnElementReferenceIdRandomizerMatcher],
    });
}
exports.getNewDmnIdRandomizer = getNewDmnIdRandomizer;
var tDmnElementReferenceIdRandomizerMatcher = function (_a) {
    var parentJson = _a.parentJson, metaTypeName = _a.metaTypeName, attr = _a.attr;
    if (metaTypeName === "DMN15__tDMNElementReference" && attr === "@_href") {
        var href_1 = (0, xmlHrefs_1.parseXmlHref)(parentJson[attr]);
        return [
            href_1.id,
            function (_a) {
                var newId = _a.newId;
                console.debug("ID RANDOMIZER: [anyURI] Updating id from ".concat(href_1.id, " to ").concat(newId, " @ (").concat(String(metaTypeName), ".").concat(String(attr), ": ").concat(parentJson[attr], ")"));
                parentJson[attr] = (0, xmlHrefs_1.buildXmlHref)(__assign(__assign({}, href_1), { id: newId }));
            },
        ];
    }
};
exports.tDmnElementReferenceIdRandomizerMatcher = tDmnElementReferenceIdRandomizerMatcher;
//# sourceMappingURL=dmnIdRandomizer.js.map