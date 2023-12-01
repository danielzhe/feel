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
exports.OverlaysPanel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Switch_1 = require("@patternfly/react-core/dist/js/components/Switch");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var Divider_1 = require("@patternfly/react-core/dist/js/components/Divider");
var Slider_1 = require("@patternfly/react-core/dist/js/components/Slider");
var Store_1 = require("../store/Store");
var MIN_SNAP = 5;
var MAX_SNAP = 50;
var SNAP_STEP = 5;
function OverlaysPanel() {
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Form_1.Form, __assign({ onKeyDown: function (e) { return e.stopPropagation(); } }, { children: [(0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Snapping" }, { children: (0, jsx_runtime_1.jsx)(Switch_1.Switch, { "aria-label": "Snapping", isChecked: diagram.snapGrid.isEnabled, onChange: function (newValue) {
                                return dmnEditorStoreApi.setState(function (state) {
                                    state.diagram.snapGrid.isEnabled = newValue;
                                });
                            } }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Horizontal" }, { children: (0, jsx_runtime_1.jsx)(Slider_1.Slider, { className: "kie-dmn-editor--snap-slider", isDisabled: !diagram.snapGrid.isEnabled, value: diagram.snapGrid.x, min: MIN_SNAP, max: MAX_SNAP, isInputVisible: true, inputValue: diagram.snapGrid.x, step: SNAP_STEP, showTicks: true, hasTooltipOverThumb: true, onChange: function (newSliderValue, newInputValue) {
                                return dmnEditorStoreApi.setState(function (state) {
                                    state.diagram.snapGrid.x = Math.min(MAX_SNAP, Math.max(MIN_SNAP, newInputValue !== null && newInputValue !== void 0 ? newInputValue : newSliderValue));
                                });
                            } }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Vertical" }, { children: (0, jsx_runtime_1.jsx)(Slider_1.Slider, { className: "kie-dmn-editor--snap-slider", isDisabled: !diagram.snapGrid.isEnabled, value: diagram.snapGrid.y, min: MIN_SNAP, max: MAX_SNAP, isInputVisible: true, inputValue: diagram.snapGrid.y, step: SNAP_STEP, showTicks: true, hasTooltipOverThumb: true, onChange: function (newSliderValue, newInputValue) {
                                return dmnEditorStoreApi.setState(function (state) {
                                    state.diagram.snapGrid.y = Math.min(MAX_SNAP, Math.max(MIN_SNAP, newInputValue !== null && newInputValue !== void 0 ? newInputValue : newSliderValue));
                                });
                            } }) }))] })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(Divider_1.Divider, { inset: { default: "insetMd" } }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsxs)(Form_1.Form, __assign({ onKeyDown: function (e) { return e.stopPropagation(); } }, { children: [(0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Highlight selected node(s) hierarchy" }, { children: (0, jsx_runtime_1.jsx)(Switch_1.Switch, { "aria-label": "Highlight selected node(s) hierarchy", isChecked: diagram.overlays.enableNodeHierarchyHighlight, onChange: function (newValue) {
                                return dmnEditorStoreApi.setState(function (state) {
                                    state.diagram.overlays.enableNodeHierarchyHighlight = newValue;
                                });
                            } }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Show data type toolbar on nodes" }, { children: (0, jsx_runtime_1.jsx)(Switch_1.Switch, { "aria-label": "Show data type toolbar on nodes", isChecked: diagram.overlays.enableDataTypesToolbarOnNodes, onChange: function (newValue) {
                                return dmnEditorStoreApi.setState(function (state) {
                                    state.diagram.overlays.enableDataTypesToolbarOnNodes = newValue;
                                });
                            } }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Enable styles" }, { children: (0, jsx_runtime_1.jsx)(Switch_1.Switch, { "aria-label": "Show data type toolbar on nodes", isChecked: diagram.overlays.enableStyles, onChange: function (newValue) {
                                return dmnEditorStoreApi.setState(function (state) {
                                    state.diagram.overlays.enableStyles = newValue;
                                });
                            } }) }))] }))] }));
}
exports.OverlaysPanel = OverlaysPanel;
//# sourceMappingURL=OverlaysPanel.js.map