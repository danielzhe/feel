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
exports.DataTypesEmptyState = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var cubes_icon_1 = require("@patternfly/react-icons/dist/js/icons/cubes-icon");
var paste_icon_1 = require("@patternfly/react-icons/dist/js/icons/paste-icon");
function DataTypesEmptyState(_a) {
    var onAdd = _a.onAdd, onPaste = _a.onPaste;
    return ((0, jsx_runtime_1.jsx)(Flex_1.Flex, __assign({ justifyContent: { default: "justifyContentCenter" }, style: { marginTop: "100px" } }, { children: (0, jsx_runtime_1.jsxs)(EmptyState_1.EmptyState, __assign({ style: { maxWidth: "1280px" } }, { children: [(0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateIcon, { icon: cubes_icon_1.CubesIcon }), (0, jsx_runtime_1.jsx)(Title_1.Title, __assign({ size: "lg", headingLevel: "h4" }, { children: "No custom data types have been defined." })), (0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateBody, { children: "Data types are referenced in the input and output values for decision tables. Custom data types allow you to reference more complex data types, beyond the simple \"default\" types." }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStatePrimary, { children: (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.primary, onClick: onAdd }, { children: "Create a custom data type" })) }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "or", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateSecondaryActions, { children: (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.link, onClick: onPaste, icon: (0, jsx_runtime_1.jsx)(paste_icon_1.PasteIcon, {}) }, { children: "Paste data type" })) })] })) })));
}
exports.DataTypesEmptyState = DataTypesEmptyState;
//# sourceMappingURL=DataTypesEmptyState.js.map