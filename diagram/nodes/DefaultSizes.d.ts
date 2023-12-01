import { DC__Dimension } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { SnapGrid } from "../../store/Store";
import { NodeType } from "../connections/graphStructure";
export declare const MIN_NODE_SIZES: Record<NodeType, (snapGrid: SnapGrid) => DC__Dimension>;
export declare const DEFAULT_NODE_SIZES: Record<NodeType, (snapGrid: SnapGrid) => DC__Dimension>;
export declare const DECISION_SERVICE_COLLAPSED_DIMENSIONS: {
    width: number;
    height: number;
};
export declare const NODE_MIN_WIDTH = 160;
export declare const NODE_MIN_HEIGHT = 80;
//# sourceMappingURL=DefaultSizes.d.ts.map