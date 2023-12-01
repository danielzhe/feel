/// <reference types="react" />
import { DC__Point } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
export declare function usePotentialWaypointControls(waypoints: DC__Point[], isEdgeSelected: boolean | undefined, edgeId: string, edgeIndex: number | undefined, interactionPathRef: React.RefObject<SVGPathElement>): {
    isDraggingWaypoint: boolean;
    onMouseMove: (e: React.MouseEvent) => void;
    onDoubleClick: () => void;
    potentialWaypoint: {
        point: DOMPoint;
        lengthInPath: number;
    } | undefined;
};
//# sourceMappingURL=usePotentialWaypointControls.d.ts.map