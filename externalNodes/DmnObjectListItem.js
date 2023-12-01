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
exports.DmnObjectListItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var TypeRefLabel_1 = require("../dataTypes/TypeRefLabel");
var Icons_1 = require("../icons/Icons");
var DmnMaths_1 = require("../diagram/maths/DmnMaths");
var buildFeelQName_1 = require("../feel/buildFeelQName");
var DerivedStore_1 = require("../store/DerivedStore");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
function DmnObjectListItem(_a) {
    var _b, _c, _d, _e;
    var dmnObject = _a.dmnObject, dmnObjectHref = _a.dmnObjectHref, namespace = _a.namespace, relativeToNamespace = _a.relativeToNamespace;
    var _f = (0, DerivedStore_1.useDmnEditorDerivedStore)(), importsByNamespace = _f.importsByNamespace, allTopLevelDataTypesByFeelName = _f.allTopLevelDataTypesByFeelName;
    if (!dmnObject) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: dmnObjectHref });
    }
    var Icon = (0, Icons_1.NodeIcon)((0, DmnMaths_1.getNodeTypeFromDmnObject)(dmnObject));
    return ((0, jsx_runtime_1.jsxs)(Flex_1.Flex, __assign({ alignItems: { default: "alignItemsCenter" }, justifyContent: { default: "justifyContentFlexStart" }, spaceItems: { default: "spaceItemsNone" } }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ style: { width: "40px", height: "40px", marginRight: 0 } }, { children: (0, jsx_runtime_1.jsx)(Icon, {}) })), (0, jsx_runtime_1.jsx)("div", { children: "".concat((0, buildFeelQName_1.buildFeelQNameFromNamespace)({
                    namedElement: dmnObject,
                    importsByNamespace: importsByNamespace,
                    namespace: namespace,
                    relativeToNamespace: relativeToNamespace,
                }).full) }), (0, jsx_runtime_1.jsx)("div", { children: dmnObject.__$$element !== "knowledgeSource" ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["\u00A0", (0, jsx_runtime_1.jsx)(TypeRefLabel_1.TypeRefLabel, { typeRef: (_b = dmnObject.variable) === null || _b === void 0 ? void 0 : _b["@_typeRef"], relativeToNamespace: namespace, isCollection: (_e = allTopLevelDataTypesByFeelName.get((_d = (_c = dmnObject.variable) === null || _c === void 0 ? void 0 : _c["@_typeRef"]) !== null && _d !== void 0 ? _d : api_1.DmnBuiltInDataType.Undefined)) === null || _e === void 0 ? void 0 : _e.itemDefinition["@_isCollection"] })] })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})) })] })));
}
exports.DmnObjectListItem = DmnObjectListItem;
//# sourceMappingURL=DmnObjectListItem.js.map