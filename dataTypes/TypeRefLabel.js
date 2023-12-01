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
exports.TypeRefLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var buildFeelQName_1 = require("../feel/buildFeelQName");
var react_1 = require("react");
var DerivedStore_1 = require("../store/DerivedStore");
var qNames_1 = require("@kie-tools/xml-parser-ts/dist/qNames");
var Store_1 = require("../store/Store");
var xmlNamespaceDeclarations_1 = require("../xml/xmlNamespaceDeclarations");
var parseFeelQName_1 = require("../feel/parseFeelQName");
var BuiltInFeelTypes_1 = require("./BuiltInFeelTypes");
function TypeRefLabel(_a) {
    var typeRef = _a.typeRef, relativeToNamespace = _a.relativeToNamespace, isCollection = _a.isCollection;
    var importsByNamespace = (0, DerivedStore_1.useDmnEditorDerivedStore)().importsByNamespace;
    var thisDmn = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn; });
    var feelName = (0, react_1.useMemo)(function () {
        if (!typeRef) {
            return undefined;
        }
        if (BuiltInFeelTypes_1.builtInFeelTypeNames.has(typeRef)) {
            return typeRef;
        }
        var parsedFeelQName = (0, parseFeelQName_1.parseFeelQName)(typeRef);
        var xmlNamespaceName = (0, xmlNamespaceDeclarations_1.getXmlNamespaceDeclarationName)({
            model: thisDmn.model.definitions,
            namespace: relativeToNamespace !== null && relativeToNamespace !== void 0 ? relativeToNamespace : "",
        });
        var xmlQName = (0, qNames_1.parseXmlQName)((0, qNames_1.buildXmlQName)({
            type: "xml-qname",
            prefix: xmlNamespaceName,
            localPart: parsedFeelQName.importName ? parsedFeelQName.localPart : typeRef,
        }));
        if (xmlQName.prefix) {
            return typeRef;
        }
        var fullFeelQName = (0, buildFeelQName_1.buildFeelQNameFromXmlQName)({
            importsByNamespace: importsByNamespace,
            relativeToNamespace: thisDmn.model.definitions["@_namespace"],
            model: thisDmn.model.definitions,
            namedElement: { "@_name": parsedFeelQName.importName ? parsedFeelQName.localPart : typeRef },
            namedElementQName: xmlQName,
        }).full;
        if (parsedFeelQName.importName) {
            if (typeRef !== fullFeelQName) {
                console.warn("DMN EDITOR: Data Type label was rendered with discrepancy between provided namespace and the FEEL QName. Going with the provided typeRef. (typeRef: '".concat(typeRef, "', feelQName: '").concat(fullFeelQName, "')."));
            }
            return typeRef;
        }
        return fullFeelQName;
    }, [thisDmn.model.definitions, importsByNamespace, relativeToNamespace, typeRef]);
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: "kie-dmn-editor--data-type-label" }, { children: (0, jsx_runtime_1.jsx)("i", { children: (typeRef && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["".concat(feelName !== null && feelName !== void 0 ? feelName : api_1.DmnBuiltInDataType.Undefined), isCollection && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["\u00A0", "[]"] }))] }))) || (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isCollection && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "[]" }) }) }) })));
}
exports.TypeRefLabel = TypeRefLabel;
//# sourceMappingURL=TypeRefLabel.js.map