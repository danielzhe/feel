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
exports.DmnEditorErrorFallback = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var DmnEditorContext_1 = require("./DmnEditorContext");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var ClipboardCopy_1 = require("@patternfly/react-core/dist/js/components/ClipboardCopy");
var external_link_alt_icon_1 = require("@patternfly/react-icons/dist/js/icons/external-link-alt-icon");
var react_1 = require("react");
function DmnEditorErrorFallback(_a) {
    var error = _a.error, resetErrorBoundary = _a.resetErrorBoundary;
    var _b = (0, DmnEditorContext_1.useDmnEditor)(), dmnModelBeforeEditingRef = _b.dmnModelBeforeEditingRef, issueTrackerHref = _b.issueTrackerHref;
    var resetToLastWorkingState = (0, react_1.useCallback)(function () {
        resetErrorBoundary(dmnModelBeforeEditingRef.current);
    }, [dmnModelBeforeEditingRef, resetErrorBoundary]);
    (0, react_1.useEffect)(function () {
        console.error(error);
    }, [error]);
    return ((0, jsx_runtime_1.jsx)(Flex_1.Flex, __assign({ justifyContent: { default: "justifyContentCenter" }, style: { marginTop: "100px" } }, { children: (0, jsx_runtime_1.jsxs)(EmptyState_1.EmptyState, __assign({ style: { maxWidth: "1280px" } }, { children: [(0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateIcon, { icon: function () { return (0, jsx_runtime_1.jsx)("div", __assign({ style: { fontSize: "3em" } }, { children: "\uD83D\uDE15" })); } }), (0, jsx_runtime_1.jsx)(Title_1.Title, __assign({ size: "lg", headingLevel: "h4" }, { children: "An unexpected error happened" })), (0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateBody, { children: "This is a bug. Please consider reporting it so the DMN Editor can continue improving. See the details below." }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(ClipboardCopy_1.ClipboardCopy, __assign({ isReadOnly: true, isExpanded: false, hoverTip: "Copy", clickTip: "Copied", variant: ClipboardCopy_1.ClipboardCopyVariant.expansion, style: { textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "monospace" } }, { children: JSON.stringify({
                        name: error.name,
                        message: error.message,
                        cause: error.cause,
                        stack: error.stack,
                    }, null, 2).replaceAll("\\n", "\n") })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsxs)(EmptyState_1.EmptyStatePrimary, { children: [(0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.link, onClick: resetToLastWorkingState }, { children: "Try undoing last action" })), issueTrackerHref && ((0, jsx_runtime_1.jsx)("a", __assign({ href: issueTrackerHref, target: "_blank" }, { children: (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.link, icon: (0, jsx_runtime_1.jsx)(external_link_alt_icon_1.ExternalLinkAltIcon, {}) }, { children: "File an issue..." })) })))] })] })) })));
}
exports.DmnEditorErrorFallback = DmnEditorErrorFallback;
//# sourceMappingURL=DmnEditorErrorFallback.js.map