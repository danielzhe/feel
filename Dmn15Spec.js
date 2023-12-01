"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIE_DMN_UNKNOWN_NAMESPACE = exports.allDmnImportNamespaces = exports.DMN15_SPEC = void 0;
var meta_1 = require("@kie-tools/dmn-marshaller/dist/schemas/dmn-1_0/ts-gen/meta");
var meta_2 = require("@kie-tools/dmn-marshaller/dist/schemas/dmn-1_1/ts-gen/meta");
var meta_3 = require("@kie-tools/dmn-marshaller/dist/schemas/dmn-1_2/ts-gen/meta");
var meta_4 = require("@kie-tools/dmn-marshaller/dist/schemas/dmn-1_3/ts-gen/meta");
var meta_5 = require("@kie-tools/dmn-marshaller/dist/schemas/dmn-1_4/ts-gen/meta");
var meta_6 = require("@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/meta");
var feelNameStart = /^[?A-Z_a-z\uC0-\uD6\uD8-\uF6\uF8-\u2FF\u370-\u37D\u37F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u10000-\uEFFFF].*$/;
var feelNamePart = /^.[?A-Z_a-z\uC0-\uD6\uD8-\uF6\uF8-\u2FF\u370-\u37D\u37F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u10000-\uEFFFF\uB7\d\u0300-\u036F\u203F-\u2040.+-/*’\s^]*$/;
var forbiddenEndingChars = /^.*[.:+-/*\s^]$/;
exports.DMN15_SPEC = {
    namedElement: {
        isValidName: function (id, name, allUniqueNames) {
            return (!!(name === null || name === void 0 ? void 0 : name.trim()) &&
                !!name.match(feelNameStart) &&
                !!name.match(feelNamePart) &&
                !(name === null || name === void 0 ? void 0 : name.trim().match(forbiddenEndingChars)) &&
                (!allUniqueNames.get(name === null || name === void 0 ? void 0 : name.trim()) || allUniqueNames.get(name === null || name === void 0 ? void 0 : name.trim()) === id));
        },
    },
    expressionLanguage: { default: "https://www.omg.org/spec/DMN/20230324/FEEL/" },
    typeLanguage: { default: "https://www.omg.org/spec/DMN/20230324/FEEL/" },
    IMPORT: {
        name: {
            isValid: function (id, name, allUniqueNames) {
                return name === "" || exports.DMN15_SPEC.namedElement.isValidName(id, name, allUniqueNames);
            },
        },
    },
    BOXED: {
        DECISION_TABLE: {
            PreferredOrientation: { default: "Rule-as-Row" },
            HitPolicy: { default: "UNIQUE" },
        },
        FUNCTION: {
            kind: { default: "FEEL" },
            JAVA: {
                classFieldName: "class",
                methodSignatureFieldName: "method signature",
            },
            PMML: {
                documentFieldName: "document",
                modelFieldName: "model",
            },
        },
    },
    ITEM_DEFINITIONS: {
        isCollection: { default: "false" },
    },
    ANNOTATIONS: {
        format: { default: "text/plain" },
    },
    ASSOCIATIONS: {
        direction: { default: "None" },
    },
    SHAPE: {
        isCollapsed: {
            default: "false",
        },
    },
};
exports.allDmnImportNamespaces = new Set([
    meta_1.ns.get(""),
    meta_2.ns.get(""),
    meta_3.ns.get(""),
    meta_4.ns.get(""),
    meta_5.ns.get(""),
    meta_6.ns.get(""),
]);
exports.KIE_DMN_UNKNOWN_NAMESPACE = "https://kie.org/dmn/unknown";
//# sourceMappingURL=Dmn15Spec.js.map