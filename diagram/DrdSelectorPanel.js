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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrdSelectorPanel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var Store_1 = require("../store/Store");
var addOrGetDrd_1 = require("../mutations/addOrGetDrd");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var plus_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/plus-circle-icon");
var Divider_1 = require("@patternfly/react-core/dist/js/components/Divider");
function DrdSelectorPanel() {
    var _a, _b;
    var thisDmn = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn; });
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Flex_1.Flex, __assign({ justifyContent: { default: "justifyContentSpaceBetween" } }, { children: [(0, jsx_runtime_1.jsx)(Text_1.TextContent, { children: (0, jsx_runtime_1.jsx)(Text_1.Text, __assign({ component: "h3" }, { children: "DRDs" })) }), (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.link, onClick: function () {
                            dmnEditorStoreApi.setState(function (state) {
                                var _a, _b;
                                var allDrds = (_b = (_a = state.dmn.model.definitions["dmndi:DMNDI"]) === null || _a === void 0 ? void 0 : _a["dmndi:DMNDiagram"]) !== null && _b !== void 0 ? _b : [];
                                var newIndex = allDrds.length;
                                (0, addOrGetDrd_1.addOrGetDrd)({
                                    definitions: state.dmn.model.definitions,
                                    drdIndex: newIndex,
                                });
                                state.diagram.drdIndex = newIndex;
                            });
                        } }, { children: (0, jsx_runtime_1.jsx)(plus_circle_icon_1.PlusCircleIcon, {}) }))] })), (0, jsx_runtime_1.jsx)(Divider_1.Divider, { style: { marginBottom: "8px" } }), (0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--drd-list" }, { children: (_b = (_a = thisDmn.model.definitions["dmndi:DMNDI"]) === null || _a === void 0 ? void 0 : _a["dmndi:DMNDiagram"]) === null || _b === void 0 ? void 0 : _b.map(function (drd, i) {
                    var _a;
                    return ((0, jsx_runtime_1.jsxs)(React.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ className: i === diagram.drdIndex ? "active" : undefined, onClick: function () {
                                    dmnEditorStoreApi.setState(function (state) {
                                        state.diagram.drdIndex = i;
                                        state.diagram.drdSelector.isOpen = false;
                                    });
                                } }, { children: drd["@_name"] || (0, addOrGetDrd_1.getDefaultDrdName)({ drdIndex: i }) })), (0, jsx_runtime_1.jsx)("br", {})] }, (_a = drd["@_id"]) !== null && _a !== void 0 ? _a : i));
                }) }))] }));
}
exports.DrdSelectorPanel = DrdSelectorPanel;
//# sourceMappingURL=DrdSelectorPanel.js.map