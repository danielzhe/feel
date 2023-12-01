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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidContainment = void 0;
var graphStructure_1 = require("./graphStructure");
function isValidContainment(_a) {
    var nodeTypes = _a.nodeTypes, inside = _a.inside, dmnObjectQName = _a.dmnObjectQName;
    if (dmnObjectQName.prefix) {
        return false;
    }
    var allowedNodesInside = graphStructure_1.containment.get(inside);
    return __spreadArray([], __read(nodeTypes), false).every(function (nodeType) { return allowedNodesInside === null || allowedNodesInside === void 0 ? void 0 : allowedNodesInside.has(nodeType); });
}
exports.isValidContainment = isValidContainment;
//# sourceMappingURL=isValidContainment.js.map