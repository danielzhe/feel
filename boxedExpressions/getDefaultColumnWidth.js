"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultColumnWidth = void 0;
var WidthsToFitData_1 = require("@kie-tools/boxed-expression-component/dist/resizing/WidthsToFitData");
var WidthConstants_1 = require("@kie-tools/boxed-expression-component/dist/resizing/WidthConstants");
function getDefaultColumnWidth(_a) {
    var name = _a.name, typeRef = _a.typeRef;
    return (8 * 2 +
        2 +
        Math.max(WidthConstants_1.DEFAULT_MIN_WIDTH, (0, WidthsToFitData_1.getTextWidth)(name, "700 11.2px Menlo, monospace"), (0, WidthsToFitData_1.getTextWidth)("(".concat(typeRef !== null && typeRef !== void 0 ? typeRef : "", ")"), "700 11.6667px RedHatText, Overpass, overpass, helvetica, arial, sans-serif")));
}
exports.getDefaultColumnWidth = getDefaultColumnWidth;
//# sourceMappingURL=getDefaultColumnWidth.js.map