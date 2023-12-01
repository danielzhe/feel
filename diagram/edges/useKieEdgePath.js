"use strict";
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
exports.useKieEdgePath = void 0;
var RF = __importStar(require("reactflow"));
var react_1 = require("react");
var getSnappedMultiPointAnchoredEdgePath_1 = require("./getSnappedMultiPointAnchoredEdgePath");
var Store_1 = require("../../store/Store");
function useKieEdgePath(source, target, data) {
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var sourceNode = RF.useStore((0, react_1.useCallback)(function (store) { return (source ? store.nodeInternals.get(source) : undefined); }, [source]));
    var targetNode = RF.useStore((0, react_1.useCallback)(function (store) { return (target ? store.nodeInternals.get(target) : undefined); }, [target]));
    var dmnEdge = data === null || data === void 0 ? void 0 : data.dmnEdge;
    var dmnShapeSource = data === null || data === void 0 ? void 0 : data.dmnShapeSource;
    var dmnShapeTarget = data === null || data === void 0 ? void 0 : data.dmnShapeTarget;
    return (0, react_1.useMemo)(function () {
        return (0, getSnappedMultiPointAnchoredEdgePath_1.getSnappedMultiPointAnchoredEdgePath)({
            snapGrid: diagram.snapGrid,
            dmnEdge: dmnEdge,
            sourceNode: sourceNode,
            targetNode: targetNode,
            dmnShapeSource: dmnShapeSource,
            dmnShapeTarget: dmnShapeTarget,
        });
    }, [diagram.snapGrid, dmnEdge, dmnShapeSource, dmnShapeTarget, sourceNode, targetNode]);
}
exports.useKieEdgePath = useKieEdgePath;
//# sourceMappingURL=useKieEdgePath.js.map