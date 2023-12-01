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
exports.UnknownIcon = exports.TextAnnotationIcon = exports.GroupIcon = exports.DecisionServiceIcon = exports.KnowledgeSourceIcon = exports.BkmIcon = exports.DecisionIcon = exports.InputDataIcon = exports.NodeIcon = exports.RoundSvg = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var NodeSvgs_1 = require("../diagram/nodes/NodeSvgs");
var switch_expression_ts_1 = require("@kie-tools-core/switch-expression-ts");
var NodeTypes_1 = require("../diagram/nodes/NodeTypes");
var question_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/question-circle-icon");
var radius = 34;
var svgViewboxPadding = Math.sqrt(Math.pow(radius, 2) / 2) - radius / 2;
var nodeSvgProps = { width: 200, height: 120, x: 16, y: 48, strokeWidth: 16 };
var nodeSvgViewboxSize = nodeSvgProps.width + 2 * nodeSvgProps.strokeWidth;
function RoundSvg(_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)("svg", __assign({ className: "kie-dmn-editor--round-svg-container", viewBox: "0 0 ".concat(nodeSvgViewboxSize, " ").concat(nodeSvgViewboxSize), style: { padding: "".concat(svgViewboxPadding, "px") } }, { children: children })));
}
exports.RoundSvg = RoundSvg;
function NodeIcon(nodeType) {
    var _a;
    return (0, switch_expression_ts_1.switchExpression)(nodeType, (_a = {},
        _a[NodeTypes_1.NODE_TYPES.inputData] = InputDataIcon,
        _a[NodeTypes_1.NODE_TYPES.decision] = DecisionIcon,
        _a[NodeTypes_1.NODE_TYPES.bkm] = BkmIcon,
        _a[NodeTypes_1.NODE_TYPES.knowledgeSource] = KnowledgeSourceIcon,
        _a[NodeTypes_1.NODE_TYPES.decisionService] = DecisionServiceIcon,
        _a[NodeTypes_1.NODE_TYPES.group] = GroupIcon,
        _a[NodeTypes_1.NODE_TYPES.textAnnotation] = TextAnnotationIcon,
        _a[NodeTypes_1.NODE_TYPES.unknown] = UnknownIcon,
        _a.default = function () { return (0, jsx_runtime_1.jsx)("div", { children: "?" }); },
        _a));
}
exports.NodeIcon = NodeIcon;
function InputDataIcon() {
    return ((0, jsx_runtime_1.jsx)(RoundSvg, { children: (0, jsx_runtime_1.jsx)(NodeSvgs_1.InputDataNodeSvg, __assign({}, nodeSvgProps)) }));
}
exports.InputDataIcon = InputDataIcon;
function DecisionIcon() {
    return ((0, jsx_runtime_1.jsx)(RoundSvg, { children: (0, jsx_runtime_1.jsx)(NodeSvgs_1.DecisionNodeSvg, __assign({}, nodeSvgProps)) }));
}
exports.DecisionIcon = DecisionIcon;
function BkmIcon() {
    return ((0, jsx_runtime_1.jsx)(RoundSvg, { children: (0, jsx_runtime_1.jsx)(NodeSvgs_1.BkmNodeSvg, __assign({}, nodeSvgProps)) }));
}
exports.BkmIcon = BkmIcon;
function KnowledgeSourceIcon() {
    return ((0, jsx_runtime_1.jsx)(RoundSvg, { children: (0, jsx_runtime_1.jsx)(NodeSvgs_1.KnowledgeSourceNodeSvg, __assign({}, nodeSvgProps)) }));
}
exports.KnowledgeSourceIcon = KnowledgeSourceIcon;
function DecisionServiceIcon() {
    return ((0, jsx_runtime_1.jsx)(RoundSvg, { children: (0, jsx_runtime_1.jsx)(NodeSvgs_1.DecisionServiceNodeSvg, __assign({}, nodeSvgProps, { y: 12, height: nodeSvgProps.width, showSectionLabels: false, isReadonly: true })) }));
}
exports.DecisionServiceIcon = DecisionServiceIcon;
function GroupIcon() {
    return ((0, jsx_runtime_1.jsx)(RoundSvg, { children: (0, jsx_runtime_1.jsx)(NodeSvgs_1.GroupNodeSvg, __assign({}, nodeSvgProps, { y: 12, height: nodeSvgProps.width, strokeDasharray: "28,28" })) }));
}
exports.GroupIcon = GroupIcon;
function TextAnnotationIcon() {
    return ((0, jsx_runtime_1.jsx)(RoundSvg, { children: (0, jsx_runtime_1.jsx)(NodeSvgs_1.TextAnnotationNodeSvg, __assign({}, nodeSvgProps, { showPlaceholder: true })) }));
}
exports.TextAnnotationIcon = TextAnnotationIcon;
function UnknownIcon() {
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } }, { children: (0, jsx_runtime_1.jsx)(question_circle_icon_1.QuestionCircleIcon, {}) })));
}
exports.UnknownIcon = UnknownIcon;
//# sourceMappingURL=Icons.js.map