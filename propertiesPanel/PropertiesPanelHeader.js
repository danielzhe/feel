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
exports.PropertiesPanelHeader = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Truncate_1 = require("@patternfly/react-core/dist/js/components/Truncate");
var angle_down_icon_1 = require("@patternfly/react-icons/dist/js/icons/angle-down-icon");
var angle_right_icon_1 = require("@patternfly/react-icons/dist/js/icons/angle-right-icon");
require("./PropertiesPanelHeader.css");
function PropertiesPanelHeader(props) {
    var propertiesPanelHeaderClass = (0, react_1.useMemo)(function () {
        var className = "kie-dmn-editor--properties-panel-header";
        if (props.fixed) {
            className += " kie-dmn-editor--properties-panel-header-fixed";
        }
        else {
            className += " kie-dmn-editor--properties-panel-header-not-fixed";
        }
        if (props.fixed || !props.expands || !props.isSectionExpanded) {
            className += " kie-dmn-editor--properties-panel-header-border";
        }
        return className;
    }, [props.expands, props.fixed, props.isSectionExpanded]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: propertiesPanelHeaderClass }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "kie-dmn-editor--properties-panel-header-items" }, { children: [props.expands && ((0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--properties-panel-header-toogle-expanded" }, { children: (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.plain, className: "kie-dmn-editor--documentation-link--row-expand-toogle", onClick: function () { var _a; return (_a = props.toogleSectionExpanded) === null || _a === void 0 ? void 0 : _a.call(props); } }, { children: (props.isSectionExpanded && (0, jsx_runtime_1.jsx)(angle_down_icon_1.AngleDownIcon, {})) || (0, jsx_runtime_1.jsx)(angle_right_icon_1.AngleRightIcon, {}) })) }))), props.icon && (0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--properties-panel-header-icon" }, { children: props.icon })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--properties-panel-header-title" }, { children: typeof props.title === "string" ? (0, jsx_runtime_1.jsx)(Truncate_1.Truncate, { content: props.title }) : props.title })), props.action && (0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--properties-panel-header-action" }, { children: props.action }))] })) })));
}
exports.PropertiesPanelHeader = PropertiesPanelHeader;
//# sourceMappingURL=PropertiesPanelHeader.js.map