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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleNodeProperties = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var FontOptions_1 = require("./FontOptions");
var Store_1 = require("../store/Store");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var times_icon_1 = require("@patternfly/react-icons/dist/js/icons/times-icon");
var Truncate_1 = require("@patternfly/react-core/dist/js/components/Truncate");
var PropertiesPanelHeader_1 = require("./PropertiesPanelHeader");
var ShapeOptions_1 = require("./ShapeOptions");
function MultipleNodeProperties(_a) {
    var nodeIds = _a.nodeIds;
    var _b = __read((0, react_1.useState)(true), 2), isSectionExpanded = _b[0], setSectionExpanded = _b[1];
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var size = (0, react_1.useMemo)(function () { return nodeIds.length; }, [nodeIds.length]);
    return ((0, jsx_runtime_1.jsxs)(Form_1.Form, { children: [(0, jsx_runtime_1.jsx)(Form_1.FormSection, { children: (0, jsx_runtime_1.jsx)(PropertiesPanelHeader_1.PropertiesPanelHeader, { fixed: true, isSectionExpanded: isSectionExpanded, toogleSectionExpanded: function () { return setSectionExpanded(function (prev) { return !prev; }); }, title: (0, jsx_runtime_1.jsx)(Flex_1.Flex, __assign({ justifyContent: { default: "justifyContentCenter" } }, { children: (0, jsx_runtime_1.jsx)(Text_1.TextContent, { children: (0, jsx_runtime_1.jsx)(Text_1.Text, __assign({ component: Text_1.TextVariants.h4 }, { children: (0, jsx_runtime_1.jsx)(Truncate_1.Truncate, { content: "Multiple nodes selected (".concat(size, ")"), position: "middle", trailingNumChars: size.toString().length + 2 }) })) }) })), action: (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.plain, onClick: function () {
                            dmnEditorStoreApi.setState(function (state) {
                                state.diagram.propertiesPanel.isOpen = false;
                            });
                        } }, { children: (0, jsx_runtime_1.jsx)(times_icon_1.TimesIcon, {}) })) }) }), (0, jsx_runtime_1.jsxs)(Form_1.FormSection, { children: [(0, jsx_runtime_1.jsx)(FontOptions_1.FontOptions, { startExpanded: true, nodeIds: nodeIds }), (0, jsx_runtime_1.jsx)(ShapeOptions_1.ShapeOptions, { startExpanded: true, nodeIds: nodeIds, isDimensioningEnabled: false, isPositioningEnabled: false })] })] }));
}
exports.MultipleNodeProperties = MultipleNodeProperties;
//# sourceMappingURL=MultipleNodeProperties.js.map