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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagramPropertiesPanel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Drawer_1 = require("@patternfly/react-core/dist/js/components/Drawer");
var GlobalDiagramProperties_1 = require("./GlobalDiagramProperties");
require("./DiagramPropertiesPanel.css");
var DerivedStore_1 = require("../store/DerivedStore");
var SingleNodeProperties_1 = require("./SingleNodeProperties");
var MultipleNodeProperties_1 = require("./MultipleNodeProperties");
function DiagramPropertiesPanel() {
    var selectedNodesById = (0, DerivedStore_1.useDmnEditorDerivedStore)().selectedNodesById;
    return ((0, jsx_runtime_1.jsx)(Drawer_1.DrawerPanelContent, __assign({ isResizable: true, minSize: "300px", defaultSize: "500px", onKeyDown: function (e) { return e.stopPropagation(); } }, { children: (0, jsx_runtime_1.jsxs)(Drawer_1.DrawerHead, { children: [selectedNodesById.size <= 0 && (0, jsx_runtime_1.jsx)(GlobalDiagramProperties_1.GlobalDiagramProperties, {}), selectedNodesById.size === 1 && (0, jsx_runtime_1.jsx)(SingleNodeProperties_1.SingleNodeProperties, { nodeId: __spreadArray([], __read(selectedNodesById.keys()), false)[0] }), selectedNodesById.size > 1 && (0, jsx_runtime_1.jsx)(MultipleNodeProperties_1.MultipleNodeProperties, { nodeIds: __spreadArray([], __read(selectedNodesById.keys()), false) })] }) })));
}
exports.DiagramPropertiesPanel = DiagramPropertiesPanel;
//# sourceMappingURL=DiagramPropertiesPanel.js.map