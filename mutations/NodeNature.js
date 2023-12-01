"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeNatures = exports.NodeNature = void 0;
var NodeTypes_1 = require("../diagram/nodes/NodeTypes");
var NodeNature;
(function (NodeNature) {
    NodeNature["DRG_ELEMENT"] = "DRG_ELEMENT";
    NodeNature["ARTIFACT"] = "ARTIFACT";
    NodeNature["UNKNOWN"] = "UNKNOWN";
})(NodeNature = exports.NodeNature || (exports.NodeNature = {}));
exports.nodeNatures = (_a = {},
    _a[NodeTypes_1.NODE_TYPES.inputData] = NodeNature.DRG_ELEMENT,
    _a[NodeTypes_1.NODE_TYPES.decision] = NodeNature.DRG_ELEMENT,
    _a[NodeTypes_1.NODE_TYPES.bkm] = NodeNature.DRG_ELEMENT,
    _a[NodeTypes_1.NODE_TYPES.knowledgeSource] = NodeNature.DRG_ELEMENT,
    _a[NodeTypes_1.NODE_TYPES.decisionService] = NodeNature.DRG_ELEMENT,
    _a[NodeTypes_1.NODE_TYPES.textAnnotation] = NodeNature.ARTIFACT,
    _a[NodeTypes_1.NODE_TYPES.group] = NodeNature.ARTIFACT,
    _a[NodeTypes_1.NODE_TYPES.unknown] = NodeNature.UNKNOWN,
    _a);
//# sourceMappingURL=NodeNature.js.map