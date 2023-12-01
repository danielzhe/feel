import { DC__Bounds, DC__Dimension, DC__Point, DMNDI15__DMNShape } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import * as RF from "reactflow";
import { PositionalNodeHandleId } from "../connections/PositionalNodeHandles";
import { AutoPositionedEdgeMarker } from "../edges/AutoPositionedEdgeMarker";
import { NodeDmnObjects } from "../nodes/Nodes";
import { SnapGrid } from "../../store/Store";
export declare const DEFAULT_INTRACTION_WIDTH = 40;
export declare const CONTAINER_NODES_DESIRABLE_PADDING = 60;
export declare function getDistance(a: DC__Point, b: DC__Point): number;
export declare function getNodeCenterPoint(node: RF.Node | undefined): DC__Point;
export declare function getBoundsCenterPoint(bounds: DC__Bounds): DC__Point;
export declare function getPointForHandle({ handle, bounds, }: {
    bounds: DC__Bounds;
    handle: PositionalNodeHandleId;
}): DC__Point;
export declare function getHandlePosition({ shapeBounds, waypoint, }: {
    shapeBounds: DC__Bounds | undefined;
    waypoint: DC__Point;
}): {
    handlePosition: PositionalNodeHandleId;
    point: DC__Point;
};
export declare function getLineRectangleIntersectionPoint(point1: DC__Point, point2: DC__Point, rectangle: {
    x: number;
    y: number;
    width: number;
    height: number;
}): DC__Point;
export declare function getContainmentRelationship({ bounds, container, divingLineLocalY, snapGrid, containerMinSizes, boundsMinSizes, }: {
    bounds: DC__Bounds;
    container: DC__Bounds;
    divingLineLocalY?: number;
    snapGrid: SnapGrid;
    containerMinSizes: (snapGrid: SnapGrid) => DC__Dimension;
    boundsMinSizes: (snapGrid: SnapGrid) => DC__Dimension;
}): {
    isInside: true;
    section: "upper" | "lower";
} | {
    isInside: false;
};
export declare function pointsToPath(points: DC__Point[]): string;
export declare function getDecisionServiceDividerLineLocalY(shape: DMNDI15__DMNShape): number;
export declare const DISCRETE_AUTO_POSITIONING_DMN_EDGE_ID_MARKER: AutoPositionedEdgeMarker[];
export declare function getDiscreteAutoPositioningEdgeIdMarker(edgeId: string): AutoPositionedEdgeMarker | undefined;
export declare function getBounds({ nodes, padding, }: {
    nodes: Array<{
        width?: number | null;
        height?: number | null;
        position: {
            x: number;
            y: number;
        };
    }>;
    padding: number;
}): DC__Bounds;
export declare function getNodeTypeFromDmnObject(dmnObject: NodeDmnObjects): "node_inputData" | "node_decision" | "node_bkm" | "node_decisionService" | "node_knowledgeSource" | "node_textAnnotation" | "node_group" | "node_unknown" | undefined;
//# sourceMappingURL=DmnMaths.d.ts.map