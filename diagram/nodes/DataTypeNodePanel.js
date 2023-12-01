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
exports.DataTypeNodePanel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var Store_1 = require("../../store/Store");
var TypeRefSelector_1 = require("../../dataTypes/TypeRefSelector");
var DmnEditorContext_1 = require("../../DmnEditorContext");
function stopPropagation(e) {
    e.stopPropagation();
}
function DataTypeNodePanel(props) {
    var _a, _b;
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var dmnEditorRootElementRef = (0, DmnEditorContext_1.useDmnEditor)().dmnEditorRootElementRef;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: props.isVisible && diagram.overlays.enableDataTypesToolbarOnNodes && ((0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--data-type-node-panel", onMouseDownCapture: stopPropagation, onKeyDownCapture: stopPropagation, onClick: stopPropagation, onDoubleClick: stopPropagation, onMouseLeave: stopPropagation }, { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(TypeRefSelector_1.TypeRefSelector, { zoom: 0.8, heightRef: dmnEditorRootElementRef, typeRef: (_b = (_a = props.variable) === null || _a === void 0 ? void 0 : _a["@_typeRef"]) !== null && _b !== void 0 ? _b : api_1.DmnBuiltInDataType.Undefined, onChange: props.onChange, onCreate: props.onCreate, menuAppendTo: "parent" }) }) }))) }));
}
exports.DataTypeNodePanel = DataTypeNodePanel;
//# sourceMappingURL=DataTypeNodePanel.js.map