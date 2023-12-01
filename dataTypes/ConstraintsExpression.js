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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstraintsExpression = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var dist_1 = require("@kie-tools/feel-input-component/dist");
require("./ConstraintsExpression.css");
var HelperText_1 = require("@patternfly/react-core/dist/js/components/HelperText");
var info_icon_1 = __importDefault(require("@patternfly/react-icons/dist/js/icons/info-icon"));
function ConstraintsExpression(_a) {
    var isReadonly = _a.isReadonly, value = _a.value, onSave = _a.onSave;
    var _b = __read((0, react_1.useState)(value !== null && value !== void 0 ? value : ""), 2), preview = _b[0], setPreview = _b[1];
    var _c = __read((0, react_1.useState)(value), 2), editingValue = _c[0], setEditingValue = _c[1];
    var onFeelChange = (0, react_1.useCallback)(function (_, content, preview) {
        onSave === null || onSave === void 0 ? void 0 : onSave(content.trim());
        setPreview(preview);
    }, [onSave]);
    var monacoOptions = (0, react_1.useMemo)(function () { return ({
        fixedOverflowWidgets: true,
        lineNumbers: "off",
        fontSize: 16,
        renderLineHighlight: "none",
        lineDecorationsWidth: 1,
        automaticLayout: true,
        "semanticHighlighting.enabled": true,
    }); }, []);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex", flexDirection: "column", width: "100%" } }, { children: [isReadonly && ((0, jsx_runtime_1.jsx)(Title_1.Title, __assign({ size: "md", headingLevel: "h5", style: { paddingBottom: "10px" } }, { children: "Equivalent FEEL expression:" }))), (0, jsx_runtime_1.jsxs)("div", __assign({ style: !isReadonly
                    ? { flexGrow: 1, flexShrink: 0, border: "solid 1px lightgray", borderRadius: "4px" }
                    : { flexGrow: 1, flexShrink: 0, height: "22px" } }, { children: [isReadonly &&
                        (value ? ((0, jsx_runtime_1.jsx)("span", { className: "editable-cell-value pf-u-text-break-word", dangerouslySetInnerHTML: { __html: preview } })) : ((0, jsx_runtime_1.jsx)("p", __assign({ style: { fontStyle: "italic" } }, { children: "<None>" })))), (0, jsx_runtime_1.jsx)(dist_1.FeelInput, { value: isReadonly ? value : editingValue, onChange: onFeelChange, onPreviewChanged: setPreview, enabled: !isReadonly, options: monacoOptions })] })), (0, jsx_runtime_1.jsx)(HelperText_1.HelperText, { children: !isReadonly && ((0, jsx_runtime_1.jsxs)(HelperText_1.HelperTextItem, __assign({ variant: "indeterminate", icon: (0, jsx_runtime_1.jsx)(info_icon_1.default, {}) }, { children: ["Check the", " ", (0, jsx_runtime_1.jsx)("a", __assign({ target: "_blank", href: "https://kiegroup.github.io/dmn-feel-handbook/#feel-values" }, { children: "FEEL handbook" })), " ", "to help you on creating your expressions."] }))) })] })));
}
exports.ConstraintsExpression = ConstraintsExpression;
//# sourceMappingURL=ConstraintsExpression.js.map