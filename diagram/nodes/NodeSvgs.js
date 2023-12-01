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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnknownNodeSvg = exports.GroupNodeSvg = exports.TextAnnotationNodeSvg = exports.DecisionServiceNodeSvg = exports.containerNodeInteractionRectCssClassName = exports.KnowledgeSourceNodeSvg = exports.BkmNodeSvg = exports.DecisionNodeSvg = exports.InputDataNodeSvg = exports.normalize = exports.___NASTY_HACK_FOR_SAFARI_to_force_redrawing_svgs_and_avoid_repaint_glitches = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var DmnMaths_1 = require("../maths/DmnMaths");
var NodeStyle_1 = require("./NodeStyle");
exports.___NASTY_HACK_FOR_SAFARI_to_force_redrawing_svgs_and_avoid_repaint_glitches = { flag: false };
function normalize(_props) {
    var _strokeWidth = _props.strokeWidth, _x = _props.x, _y = _props.y, _width = _props.width, _height = _props.height, _fillColor = _props.fillColor, _strokeColor = _props.strokeColor, props = __rest(_props, ["strokeWidth", "x", "y", "width", "height", "fillColor", "strokeColor"]);
    var strokeWidth = _strokeWidth !== null && _strokeWidth !== void 0 ? _strokeWidth : NodeStyle_1.DEFAULT_NODE_STROKE_WIDTH;
    var halfStrokeWidth = strokeWidth / 2;
    var x = _x + halfStrokeWidth;
    var y = _y + halfStrokeWidth;
    var width = _width - strokeWidth;
    var height = _height - strokeWidth;
    return {
        strokeWidth: strokeWidth,
        x: x,
        y: y,
        width: width + (exports.___NASTY_HACK_FOR_SAFARI_to_force_redrawing_svgs_and_avoid_repaint_glitches.flag ? 0.1 : 0),
        height: height + (exports.___NASTY_HACK_FOR_SAFARI_to_force_redrawing_svgs_and_avoid_repaint_glitches.flag ? 0 : 0.1),
        fillColor: _fillColor,
        strokeColor: _strokeColor,
        props: props,
    };
}
exports.normalize = normalize;
function InputDataNodeSvg(__props) {
    var _a = normalize(__props), strokeWidth = _a.strokeWidth, x = _a.x, y = _a.y, width = _a.width, height = _a.height, fillColor = _a.fillColor, strokeColor = _a.strokeColor, props = _a.props;
    var rx = typeof height === "number"
        ? height / 2
        : (function () {
            throw new Error("Can't calculate rx based on a string height.");
        })();
    var ry = typeof width === "number"
        ? width / 2
        : (function () {
            throw new Error("Can't calculate ry based on a string width.");
        })();
    return ((0, jsx_runtime_1.jsx)("g", { children: (0, jsx_runtime_1.jsx)("rect", __assign({}, props, { x: x, y: y, width: width, height: height, fill: fillColor !== null && fillColor !== void 0 ? fillColor : NodeStyle_1.DEFAULT_NODE_FILL, stroke: strokeColor !== null && strokeColor !== void 0 ? strokeColor : NodeStyle_1.DEFAULT_NODE_STROKE_COLOR, strokeLinejoin: "round", strokeWidth: strokeWidth, rx: rx, ry: ry })) }));
}
exports.InputDataNodeSvg = InputDataNodeSvg;
function DecisionNodeSvg(__props) {
    var _a = normalize(__props), strokeWidth = _a.strokeWidth, x = _a.x, y = _a.y, width = _a.width, height = _a.height, fillColor = _a.fillColor, strokeColor = _a.strokeColor, props = _a.props;
    return ((0, jsx_runtime_1.jsx)("g", { children: (0, jsx_runtime_1.jsx)("rect", __assign({ x: x, y: y, strokeWidth: strokeWidth, width: width, height: height, fill: fillColor !== null && fillColor !== void 0 ? fillColor : NodeStyle_1.DEFAULT_NODE_FILL, stroke: strokeColor !== null && strokeColor !== void 0 ? strokeColor : NodeStyle_1.DEFAULT_NODE_STROKE_COLOR, strokeLinejoin: "round" }, props)) }));
}
exports.DecisionNodeSvg = DecisionNodeSvg;
function BkmNodeSvg(__props) {
    var _a = normalize(__props), strokeWidth = _a.strokeWidth, x = _a.x, y = _a.y, width = _a.width, height = _a.height, fillColor = _a.fillColor, strokeColor = _a.strokeColor, props = _a.props;
    var bevel = 25;
    return ((0, jsx_runtime_1.jsx)("g", { children: (0, jsx_runtime_1.jsx)("polygon", __assign({}, props, { points: "".concat(bevel, ",0 0,").concat(bevel, " 0,").concat(height, " ").concat(width - bevel, ",").concat(height, " ").concat(width, ",").concat(height - bevel, ", ").concat(width, ",0"), fill: fillColor !== null && fillColor !== void 0 ? fillColor : NodeStyle_1.DEFAULT_NODE_FILL, stroke: strokeColor !== null && strokeColor !== void 0 ? strokeColor : NodeStyle_1.DEFAULT_NODE_STROKE_COLOR, strokeWidth: strokeWidth, strokeLinejoin: "round", transform: "translate(".concat(x, ",").concat(y, ")") })) }));
}
exports.BkmNodeSvg = BkmNodeSvg;
function KnowledgeSourceNodeSvg(__props) {
    var _a = normalize(__props), strokeWidth = _a.strokeWidth, x = _a.x, y = _a.y, width = _a.width, totalHeight = _a.height, fillColor = _a.fillColor, strokeColor = _a.strokeColor, props = _a.props;
    var amplitude = 20;
    var height = totalHeight - amplitude / 2;
    var straightLines = "M".concat(width, ",").concat(height, " L").concat(width, ",0 L0,0 L0,").concat(height);
    var bottomWave = "Q".concat(width / 4, ",").concat(height + amplitude, " ").concat(width / 2, ",").concat(height, " T").concat(width, ",").concat(height);
    return ((0, jsx_runtime_1.jsx)("g", { children: (0, jsx_runtime_1.jsx)("path", __assign({}, props, { d: "".concat(straightLines, " ").concat(bottomWave, " Z"), fill: fillColor !== null && fillColor !== void 0 ? fillColor : NodeStyle_1.DEFAULT_NODE_FILL, stroke: strokeColor !== null && strokeColor !== void 0 ? strokeColor : NodeStyle_1.DEFAULT_NODE_STROKE_COLOR, strokeWidth: strokeWidth, strokeLinejoin: "round", transform: "translate(".concat(x, ",").concat(y, ")") })) }));
}
exports.KnowledgeSourceNodeSvg = KnowledgeSourceNodeSvg;
exports.containerNodeInteractionRectCssClassName = "kie-dmn-editor--node-containerNodeInteractionRect";
exports.DecisionServiceNodeSvg = React.forwardRef(function (__props, ref) {
    var _a = normalize(__props), strokeWidth = _a.strokeWidth, x = _a.x, y = _a.y, width = _a.width, height = _a.height, fillColor = _a.fillColor, strokeColor = _a.strokeColor, _props = _a.props;
    var _b = normalize(__assign(__assign({}, __props), { strokeWidth: DmnMaths_1.DEFAULT_INTRACTION_WIDTH / 2 })), interactionRectStrokeWidth = _b.strokeWidth, interactionRectX = _b.x, interactionRectY = _b.y, interactionRectWidth = _b.width, interactionRectHeight = _b.height, _interactionRectProps = _b.props;
    var dividerLineLocalY = _props.dividerLineLocalY, showSectionLabels = _props.showSectionLabels, dividerLineRef = _props.dividerLineRef, isCollapsed = _props.isCollapsed, isReadonly = _props.isReadonly, props = __rest(_props, ["dividerLineLocalY", "showSectionLabels", "dividerLineRef", "isCollapsed", "isReadonly"]);
    var dividerLineCoords = {
        x: x + strokeWidth / 2,
        y: y + (dividerLineLocalY ? dividerLineLocalY : height / 2),
    };
    var interactionRectDividerLineLocalY = _interactionRectProps.dividerLineLocalY, interactionRectShowSectionLabels = _interactionRectProps.showSectionLabels, interactionRectDividerLineRef = _interactionRectProps.dividerLineRef, interactionRectIsCollapsed = _interactionRectProps.isCollapsed, interactionRectIsReadonly = _interactionRectProps.isReadonly, interactionRectProps = __rest(_interactionRectProps, ["dividerLineLocalY", "showSectionLabels", "dividerLineRef", "isCollapsed", "isReadonly"]);
    return ((0, jsx_runtime_1.jsxs)("g", { children: [!isCollapsed && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("path", { ref: dividerLineRef, className: "kie-dmn-editor--node-decisionService-interactionDividerLine ".concat(isReadonly ? "readonly" : ""), d: "M0,0 L".concat(width, ",0"), strokeWidth: DmnMaths_1.DEFAULT_INTRACTION_WIDTH / 2, style: { stroke: "transparent !important" }, transform: "translate(".concat(dividerLineCoords.x, ",").concat(dividerLineCoords.y, ")") }), (0, jsx_runtime_1.jsx)("path", { d: "M0,0 L".concat(width, ",0"), strokeLinejoin: "round", strokeWidth: strokeWidth, stroke: strokeColor !== null && strokeColor !== void 0 ? strokeColor : NodeStyle_1.DEFAULT_NODE_STROKE_COLOR, transform: "translate(".concat(dividerLineCoords.x, ",").concat(dividerLineCoords.y, ")") })] })), (0, jsx_runtime_1.jsx)("rect", __assign({}, props, { x: x, y: y, width: width, height: height, strokeWidth: strokeWidth, fill: isCollapsed ? NodeStyle_1.DEFAULT_NODE_FILL : fillColor !== null && fillColor !== void 0 ? fillColor : "transparent", stroke: strokeColor !== null && strokeColor !== void 0 ? strokeColor : NodeStyle_1.DEFAULT_NODE_STROKE_COLOR, strokeLinejoin: "round", rx: "40", ry: "40", className: "kie-dmn-editor--node-decisionService-visibleRect" })), (0, jsx_runtime_1.jsx)("rect", __assign({}, interactionRectProps, { ref: ref, x: interactionRectX, y: interactionRectY, width: interactionRectWidth, height: interactionRectHeight, strokeWidth: interactionRectStrokeWidth, fill: "transparent", stroke: "transparent", strokeLinejoin: "round", rx: "30", ry: "30", className: exports.containerNodeInteractionRectCssClassName })), showSectionLabels && !isCollapsed && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("text", __assign({ className: "kie-dmn-editor--decision-service-label", textAnchor: "middle", dominantBaseline: "auto", transform: "translate(".concat(dividerLineCoords.x + width / 2, ",").concat(dividerLineCoords.y - 6, ")") }, { children: "OUTPUT" })), (0, jsx_runtime_1.jsx)("text", __assign({ className: "kie-dmn-editor--decision-service-label", textAnchor: "middle", dominantBaseline: "hanging", transform: "translate(".concat(dividerLineCoords.x + width / 2, ",").concat(dividerLineCoords.y + 6, ")") }, { children: "ENCAPSULATED" }))] }))] }));
});
function TextAnnotationNodeSvg(__props) {
    var _a = normalize(__props), strokeWidth = _a.strokeWidth, x = _a.x, y = _a.y, width = _a.width, height = _a.height, fillColor = _a.fillColor, strokeColor = _a.strokeColor, _props = _a.props;
    var showPlaceholder = _props.showPlaceholder, props = __rest(_props, ["showPlaceholder"]);
    return ((0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("rect", { x: x, y: y, width: width, height: height, fill: fillColor !== null && fillColor !== void 0 ? fillColor : "transparent", stroke: "transparent", strokeLinejoin: "round", transform: "translate(".concat(x, ",").concat(y, ")") }), (0, jsx_runtime_1.jsx)("path", __assign({}, props, { x: x, y: y, fill: fillColor !== null && fillColor !== void 0 ? fillColor : "transparent", d: "M20,0 L0,0 M0,0 L0,".concat(height, " M0,").concat(height, " L20,").concat(height), stroke: strokeColor !== null && strokeColor !== void 0 ? strokeColor : NodeStyle_1.DEFAULT_NODE_STROKE_COLOR, strokeWidth: strokeWidth, strokeLinejoin: "round", transform: "translate(".concat(x, ",").concat(y, ")") })), showPlaceholder && ((0, jsx_runtime_1.jsx)("text", __assign({ x: "20%", y: "62.5%", style: { fontSize: "5em", fontWeight: "bold" } }, { children: "Text" })))] }));
}
exports.TextAnnotationNodeSvg = TextAnnotationNodeSvg;
exports.GroupNodeSvg = React.forwardRef(function (__props, ref) {
    var _a;
    var _b = normalize(__props), strokeWidth = _b.strokeWidth, x = _b.x, y = _b.y, width = _b.width, height = _b.height, fillColor = _b.fillColor, strokeColor = _b.strokeColor, props = _b.props;
    var _c = normalize(__assign(__assign({}, __props), { strokeWidth: DmnMaths_1.DEFAULT_INTRACTION_WIDTH / 2 })), interactionRectStrokeWidth = _c.strokeWidth, interactionRectX = _c.x, interactionRectY = _c.y, interactionRectWidth = _c.width, interactionRectHeight = _c.height, _interactionRectProps = _c.props;
    var interactionRectStrokeDasharray = _interactionRectProps.strokeDasharray, interactionRectProps = __rest(_interactionRectProps, ["strokeDasharray"]);
    var strokeDasharray = (_a = props.strokeDasharray) !== null && _a !== void 0 ? _a : "14,10,3,10";
    return ((0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("rect", __assign({}, props, { x: x, y: y, width: width, height: height, fill: fillColor !== null && fillColor !== void 0 ? fillColor : "transparent", stroke: strokeColor !== null && strokeColor !== void 0 ? strokeColor : NodeStyle_1.DEFAULT_NODE_STROKE_COLOR, strokeLinejoin: "round", strokeWidth: strokeWidth, strokeDasharray: strokeDasharray, rx: 40, ry: 40 })), (0, jsx_runtime_1.jsx)("rect", __assign({}, interactionRectProps, { ref: ref, x: interactionRectX, y: interactionRectY, width: interactionRectWidth, height: interactionRectHeight, strokeWidth: interactionRectStrokeWidth, fill: "transparent", stroke: "transparent", rx: "30", ry: "30", className: exports.containerNodeInteractionRectCssClassName }))] }));
});
var UnknownNodeSvg = function (_props) {
    var _a;
    var _b = normalize(_props), strokeWidth = _b.strokeWidth, x = _b.x, y = _b.y, width = _b.width, height = _b.height, props = _b.props;
    var strokeDasharray = (_a = props.strokeDasharray) !== null && _a !== void 0 ? _a : "2,4";
    return ((0, jsx_runtime_1.jsx)("g", { children: (0, jsx_runtime_1.jsx)("rect", __assign({}, props, { x: x, y: y, width: width, height: height, fill: "transparent", stroke: "red", strokeLinejoin: "round", strokeWidth: strokeWidth, strokeDasharray: strokeDasharray })) }));
};
exports.UnknownNodeSvg = UnknownNodeSvg;
//# sourceMappingURL=NodeSvgs.js.map