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
exports.UnknownProperties = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Alert_1 = require("@patternfly/react-core/dist/js/components/Alert/Alert");
var Store_1 = require("../store/Store");
var react_1 = require("react");
var DerivedStore_1 = require("../store/DerivedStore");
var qNames_1 = require("@kie-tools/xml-parser-ts/dist/qNames");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var DmnEditorContext_1 = require("../DmnEditorContext");
var Divider_1 = require("@patternfly/react-core/dist/js/components/Divider");
function UnknownProperties(props) {
    var thisDmn = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn; });
    var externalDmnsByNamespace = (0, DerivedStore_1.useDmnEditorDerivedStore)().externalDmnsByNamespace;
    var onRequestToJumpToPath = (0, DmnEditorContext_1.useDmnEditor)().onRequestToJumpToPath;
    var content = (0, react_1.useMemo)(function () {
        var _a;
        var namespace = thisDmn.model.definitions["@_xmlns:".concat(props.dmnElementRefQName.prefix)];
        if (!namespace) {
            return (0, jsx_runtime_1.jsx)("p", { children: "This node references an external node with a namespace that is not declared at this DMN." });
        }
        var externalDmn = externalDmnsByNamespace.get(namespace);
        if (!externalDmn) {
            return ((0, jsx_runtime_1.jsx)("p", { children: "This node references an external node from a namespace that is not provided on this DMN's external DMNs mapping. " }));
        }
        var externalDrgElementsById = ((_a = externalDmn.model.definitions.drgElement) !== null && _a !== void 0 ? _a : []).reduce(function (acc, e, index) { return acc.set(e["@_id"], { element: e, index: index }); }, new Map());
        var externalDrgElement = externalDrgElementsById.get(props.dmnElementRefQName.localPart);
        if (!externalDrgElement) {
            return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { children: "This node references a DRG element from '".concat(externalDmn.model.definitions["@_name"], "' that doesn't exist.") }), onRequestToJumpToPath && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ style: { paddingLeft: 0 }, variant: Button_1.ButtonVariant.link, onClick: function () { return onRequestToJumpToPath === null || onRequestToJumpToPath === void 0 ? void 0 : onRequestToJumpToPath(externalDmn.relativePath); } }, { children: "Go to '".concat(externalDmn.model.definitions["@_name"], "'") }))] }))] }));
        }
    }, [
        externalDmnsByNamespace,
        onRequestToJumpToPath,
        props.dmnElementRefQName.localPart,
        props.dmnElementRefQName.prefix,
        thisDmn.model.definitions,
    ]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(Alert_1.Alert, __assign({ title: "This is a placeholder for an unknown node", isInline: true, variant: Alert_1.AlertVariant.danger }, { children: [(0, jsx_runtime_1.jsx)("br", {}), content, (0, jsx_runtime_1.jsx)(Divider_1.Divider, { style: { marginTop: "16px" } }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("b", { children: "Reference:" }), "\u00A0", "".concat((0, qNames_1.buildXmlQName)(props.dmnElementRefQName))] })] })) }));
}
exports.UnknownProperties = UnknownProperties;
//# sourceMappingURL=UnknownProperties.js.map