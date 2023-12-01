import { DC__Point, DMNDI15__DMNEdge, DMNDI15__DMNShape } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import * as RF from "reactflow";
import { SnapGrid } from "../../store/Store";
export declare function getSnappedMultiPointAnchoredEdgePath({ snapGrid, dmnEdge, sourceNode, targetNode, dmnShapeSource, dmnShapeTarget, }: {
    snapGrid: SnapGrid;
    dmnEdge: DMNDI15__DMNEdge | undefined;
    sourceNode: RF.Node<any, string | undefined> | undefined;
    targetNode: RF.Node<any, string | undefined> | undefined;
    dmnShapeSource: DMNDI15__DMNShape | undefined;
    dmnShapeTarget: DMNDI15__DMNShape | undefined;
}): {
    path: undefined;
    points: never[];
} | {
    path: string;
    points: DC__Point[];
};
export declare function getSnappedHandlePosition(shape: DMNDI15__DMNShape, snappedNode: RF.Node, originalHandleWaypoint: DC__Point, snappedSecondWaypoint: DC__Point): DC__Point;
//# sourceMappingURL=getSnappedMultiPointAnchoredEdgePath.d.ts.map