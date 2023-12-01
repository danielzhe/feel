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
exports.InfoNodePanel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Label_1 = require("@patternfly/react-core/dist/js/components/Label");
var info_icon_1 = require("@patternfly/react-icons/dist/js/icons/info-icon");
var Store_1 = require("../../store/Store");
function InfoNodePanel(props) {
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: props.isVisible && ((0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--info-node-panel" }, { children: (0, jsx_runtime_1.jsx)(Label_1.Label, __assign({ onClick: function () {
                    return dmnEditorStoreApi.setState(function (state) {
                        state.diagram.propertiesPanel.isOpen = true;
                    });
                }, className: "kie-dmn-editor--info-label" }, { children: (0, jsx_runtime_1.jsx)(info_icon_1.InfoIcon, { style: { width: "0.7em", height: "0.7em" } }) })) }))) }));
}
exports.InfoNodePanel = InfoNodePanel;
//# sourceMappingURL=InfoNodePanel.js.map