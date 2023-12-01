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
exports.OutgoingStuffNodePanel = exports.handleStyle = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var RF = __importStar(require("reactflow"));
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var Edges_1 = require("../edges/Edges");
var NodeSvgs_1 = require("./NodeSvgs");
var NodeTypes_1 = require("./NodeTypes");
var EdgeTypes_1 = require("../edges/EdgeTypes");
var handleButtonSize = 34;
var svgViewboxPadding = Math.sqrt(Math.pow(handleButtonSize, 2) / 2) - handleButtonSize / 2;
var edgeSvgViewboxSize = 25;
var nodeSvgProps = { width: 100, height: 70, x: 0, y: 15, strokeWidth: 8 };
var nodeSvgViewboxSize = nodeSvgProps.width;
exports.handleStyle = {
    display: "flex",
    position: "unset",
    transform: "unset",
};
function OutgoingStuffNodePanel(props) {
    var style = React.useMemo(function () { return ({
        visibility: props.isVisible ? undefined : "hidden",
    }); }, [props.isVisible]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(Flex_1.Flex, __assign({ className: "kie-dmn-editor--outgoing-stuff-node-panel", style: style }, { children: [props.edgeTypes.length > 0 && ((0, jsx_runtime_1.jsx)(Flex_1.FlexItem, { children: props.edgeTypes.map(function (edgeType) { return ((0, jsx_runtime_1.jsx)(RF.Handle, __assign({ id: edgeType, isConnectableEnd: false, type: "source", style: exports.handleStyle, position: RF.Position.Top }, { children: (0, jsx_runtime_1.jsxs)("svg", __assign({ className: "kie-dmn-editor--round-svg-container", viewBox: "0 0 ".concat(edgeSvgViewboxSize, " ").concat(edgeSvgViewboxSize), style: { padding: "".concat(svgViewboxPadding, "px") } }, { children: [edgeType === EdgeTypes_1.EDGE_TYPES.informationRequirement && ((0, jsx_runtime_1.jsx)(Edges_1.InformationRequirementPath, { d: "M2,".concat(edgeSvgViewboxSize - 2, " L").concat(edgeSvgViewboxSize - 2, ",0") })), edgeType === EdgeTypes_1.EDGE_TYPES.knowledgeRequirement && ((0, jsx_runtime_1.jsx)(Edges_1.KnowledgeRequirementPath, { d: "M2,".concat(edgeSvgViewboxSize - 2, " L").concat(edgeSvgViewboxSize - 2, ",0") })), edgeType === EdgeTypes_1.EDGE_TYPES.authorityRequirement && ((0, jsx_runtime_1.jsx)(Edges_1.AuthorityRequirementPath, { d: "M2,".concat(edgeSvgViewboxSize - 2, " L").concat(edgeSvgViewboxSize - 2, ",2"), centerToConnectionPoint: false })), edgeType === EdgeTypes_1.EDGE_TYPES.association && ((0, jsx_runtime_1.jsx)(Edges_1.AssociationPath, { d: "M2,".concat(edgeSvgViewboxSize - 2, " L").concat(edgeSvgViewboxSize, ",0"), strokeWidth: 2 }))] })) }), edgeType)); }) })), props.nodeTypes.length > 0 && ((0, jsx_runtime_1.jsx)(Flex_1.FlexItem, { children: props.nodeTypes.map(function (nodeType) { return ((0, jsx_runtime_1.jsx)(RF.Handle, __assign({ id: nodeType, isConnectableEnd: false, type: "source", style: exports.handleStyle, position: RF.Position.Top }, { children: (0, jsx_runtime_1.jsxs)("svg", __assign({ className: "kie-dmn-editor--round-svg-container", viewBox: "0 0 ".concat(nodeSvgViewboxSize, " ").concat(nodeSvgViewboxSize), style: { padding: "".concat(svgViewboxPadding, "px") } }, { children: [nodeType === NodeTypes_1.NODE_TYPES.inputData && (0, jsx_runtime_1.jsx)(NodeSvgs_1.InputDataNodeSvg, __assign({}, nodeSvgProps)), nodeType === NodeTypes_1.NODE_TYPES.decision && (0, jsx_runtime_1.jsx)(NodeSvgs_1.DecisionNodeSvg, __assign({}, nodeSvgProps)), nodeType === NodeTypes_1.NODE_TYPES.bkm && (0, jsx_runtime_1.jsx)(NodeSvgs_1.BkmNodeSvg, __assign({}, nodeSvgProps)), nodeType === NodeTypes_1.NODE_TYPES.decisionService && ((0, jsx_runtime_1.jsx)(NodeSvgs_1.DecisionServiceNodeSvg, __assign({}, nodeSvgProps, { y: 0, height: nodeSvgProps.width, showSectionLabels: true, isReadonly: true }))), nodeType === NodeTypes_1.NODE_TYPES.knowledgeSource && (0, jsx_runtime_1.jsx)(NodeSvgs_1.KnowledgeSourceNodeSvg, __assign({}, nodeSvgProps)), nodeType === NodeTypes_1.NODE_TYPES.textAnnotation && (0, jsx_runtime_1.jsx)(NodeSvgs_1.TextAnnotationNodeSvg, __assign({}, nodeSvgProps)), nodeType === NodeTypes_1.NODE_TYPES.group && (0, jsx_runtime_1.jsx)(NodeSvgs_1.GroupNodeSvg, __assign({}, nodeSvgProps))] })) }), nodeType)); }) }))] })) }));
}
exports.OutgoingStuffNodePanel = OutgoingStuffNodePanel;
//# sourceMappingURL=OutgoingStuffNodePanel.js.map