"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
exports.updateExpression = void 0;
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var beeToDmn_1 = require("../boxedExpressions/beeToDmn");
var addOrGetDrd_1 = require("./addOrGetDrd");
var renameNode_1 = require("./renameNode");
function updateExpression(_a) {
    var _b, _c, _d, _e;
    var definitions = _a.definitions, drdIndex = _a.drdIndex, expression = _a.expression, drgElementIndex = _a.drgElementIndex;
    var updatedWidthsMap = new Map();
    var updatedExpression = (0, beeToDmn_1.beeToDmn)(expression, updatedWidthsMap);
    var drgElement = (_b = definitions.drgElement) === null || _b === void 0 ? void 0 : _b[drgElementIndex];
    if (!drgElement) {
        throw new Error("Can't update expression for drgElement that doesn't exist.");
    }
    (0, renameNode_1.renameDrgElement)({
        definitions: definitions,
        newName: (_c = updatedExpression === null || updatedExpression === void 0 ? void 0 : updatedExpression["@_label"]) !== null && _c !== void 0 ? _c : drgElement["@_name"],
        index: drgElementIndex,
    });
    if ((drgElement === null || drgElement === void 0 ? void 0 : drgElement.__$$element) === "decision") {
        drgElement.expression = updatedExpression;
        drgElement.variable["@_typeRef"] = (_d = updatedExpression === null || updatedExpression === void 0 ? void 0 : updatedExpression["@_typeRef"]) !== null && _d !== void 0 ? _d : drgElement.variable["@_typeRef"];
    }
    else if ((drgElement === null || drgElement === void 0 ? void 0 : drgElement.__$$element) === "businessKnowledgeModel") {
        if (expression.logicType !== api_1.ExpressionDefinitionLogicType.Function) {
            throw new Error("Can't have an expression on a BKM that is not a Function.");
        }
        if (!(updatedExpression === null || updatedExpression === void 0 ? void 0 : updatedExpression.__$$element)) {
            throw new Error("Can't determine expression type without its __$$element property.");
        }
        var __$$element = updatedExpression.__$$element, _updateExpression = __rest(updatedExpression, ["__$$element"]);
        drgElement.encapsulatedLogic = _updateExpression;
        drgElement.variable["@_typeRef"] = (_e = _updateExpression === null || _updateExpression === void 0 ? void 0 : _updateExpression["@_typeRef"]) !== null && _e !== void 0 ? _e : drgElement.variable["@_typeRef"];
    }
    else {
        throw new Error("Can't update expression for drgElement that is not a Decision or a BKM.");
    }
    var _f = (0, addOrGetDrd_1.addOrGetDrd)({ definitions: definitions, drdIndex: drdIndex }), widthsExtension = _f.widthsExtension, widths = _f.widths;
    var componentWidthsMap = widths.reduce(function (acc, e) {
        var _a;
        return e["@_dmnElementRef"]
            ? acc.set(e["@_dmnElementRef"], ((_a = e["kie:width"]) !== null && _a !== void 0 ? _a : []).map(function (vv) { return vv.__$$text; }))
            : acc;
    }, new Map());
    updatedWidthsMap.forEach(function (v, k) { return componentWidthsMap.set(k, v); });
    widthsExtension["kie:ComponentWidths"] = __spreadArray([], __read(componentWidthsMap.entries()), false).map(function (_a) {
        var _b = __read(_a, 2), k = _b[0], v = _b[1];
        return ({
            "@_dmnElementRef": k,
            "kie:width": v.map(function (vv) { return ({ __$$text: vv }); }),
        });
    });
}
exports.updateExpression = updateExpression;
//# sourceMappingURL=updateExpression.js.map