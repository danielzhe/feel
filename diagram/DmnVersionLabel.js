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
exports.DmnVersionLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Label_1 = require("@patternfly/react-core/dist/js/components/Label");
var Popover_1 = require("@patternfly/react-core/dist/js/components/Popover");
var react_1 = require("react");
var dmn_marshaller_1 = require("@kie-tools/dmn-marshaller");
var latestChangelogHref = "https://www.omg.org/spec/DMN/1.5/Beta1/PDF/changebar";
function DmnVersionLabel(props) {
    var label = (0, react_1.useMemo)(function () { return ((0, jsx_runtime_1.jsx)(Label_1.Label, __assign({ style: { cursor: "pointer", position: "absolute", bottom: "8px", left: "calc(50% - 34px)", zIndex: 100 } }, { children: "DMN ".concat(dmn_marshaller_1.DMN_LATEST_VERSION) }))); }, []);
    if (props.version === dmn_marshaller_1.DMN_LATEST_VERSION) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: label });
    }
    return ((0, jsx_runtime_1.jsx)(Popover_1.Popover, __assign({ className: "kie-dmn-editor--version-popover", "aria-label": "DMN version popover", position: Popover_1.PopoverPosition.top, headerContent: (0, jsx_runtime_1.jsx)("div", { children: "Version upgraded!" }), bodyContent: (0, jsx_runtime_1.jsxs)("div", { children: ["This DMN was originally imported as DMN ", props.version, ", but was converted to DMN ", dmn_marshaller_1.DMN_LATEST_VERSION, " to enable new features.", (0, jsx_runtime_1.jsxs)("a", __assign({ href: latestChangelogHref, target: "_blank" }, { children: ["\u00A0", "See what's new on DMN ".concat(dmn_marshaller_1.DMN_LATEST_VERSION), "."] }))] }) }, { children: label })));
}
exports.DmnVersionLabel = DmnVersionLabel;
//# sourceMappingURL=DmnVersionLabel.js.map