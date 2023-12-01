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
exports.EdgeMarkers = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
function EdgeMarkers() {
    return ((0, jsx_runtime_1.jsx)("svg", __assign({ style: { position: "absolute", top: 0, left: 0 } }, { children: (0, jsx_runtime_1.jsxs)("defs", { children: [(0, jsx_runtime_1.jsx)("marker", __assign({ id: "closed-circle-at-center", viewBox: "0 0 10 10", refX: 5, refY: 5, markerUnits: "userSpaceOnUse", markerWidth: "8", markerHeight: "8", orient: "auto-start-reverse" }, { children: (0, jsx_runtime_1.jsx)("circle", { cx: "5", cy: "5", r: "5", fill: "context-fill", stroke: "context-stroke" }) })), (0, jsx_runtime_1.jsx)("marker", __assign({ id: "closed-circle-at-border", viewBox: "0 0 10 10", refX: 10, refY: 5, markerUnits: "userSpaceOnUse", markerWidth: "8", markerHeight: "8", orient: "auto-start-reverse" }, { children: (0, jsx_runtime_1.jsx)("circle", { cx: "5", cy: "5", r: "5", fill: "context-fill", stroke: "context-stroke" }) })), (0, jsx_runtime_1.jsx)("marker", __assign({ id: "closed-arrow", viewBox: "0 0 10 10", refX: 10, refY: 5, markerUnits: "userSpaceOnUse", markerWidth: "8", markerHeight: "8", orient: "auto-start-reverse" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: "context-fill", stroke: "context-stroke" }) })), (0, jsx_runtime_1.jsx)("marker", __assign({ id: "open-arrow", viewBox: "0 0 10 10", refX: 10, refY: 5, markerUnits: "userSpaceOnUse", markerWidth: "8", markerHeight: "8", orient: "auto-start-reverse" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M 0,0 L 10,5 M 10,5 L 0,10", stroke: "black" }) }))] }) })));
}
exports.EdgeMarkers = EdgeMarkers;
//# sourceMappingURL=EdgeMarkers.js.map