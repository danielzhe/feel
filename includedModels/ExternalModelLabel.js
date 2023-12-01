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
exports.ExternalModelLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Label_1 = require("@patternfly/react-core/dist/js/components/Label");
var dmnLabel = { color: "blue", label: "DMN" };
var pmmlLabel = { color: "purple", label: "PMML" };
var labelColors = new Map([
    ["dmn", dmnLabel],
    ["pmml", pmmlLabel],
]);
function ExternalModelLabel(props) {
    var _a, _b;
    var label = labelColors.get(props.extension.toLowerCase());
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (label && ((0, jsx_runtime_1.jsx)(Label_1.Label, __assign({ style: (_a = props.style) !== null && _a !== void 0 ? _a : {}, color: (_b = label.color) !== null && _b !== void 0 ? _b : "grey" }, { children: label.label })))) || ((0, jsx_runtime_1.jsx)(Label_1.Label, __assign({ style: { visibility: "hidden" } }, { children: props.extension || "-" }))) }));
}
exports.ExternalModelLabel = ExternalModelLabel;
//# sourceMappingURL=ExternalModelLabel.js.map