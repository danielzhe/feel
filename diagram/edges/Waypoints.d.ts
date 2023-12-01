import * as React from "react";
import { DC__Point } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
export declare function PotentialWaypoint(props: {
    point: {
        x: number;
        y: number;
    };
}): JSX.Element;
export declare function Waypoints(props: {
    edgeId: string;
    edgeIndex: number;
    waypoints: DC__Point[];
    onDragStop: (e: React.MouseEvent) => void;
}): JSX.Element;
export declare function Waypoint({ edgeId, edgeIndex, index, point, onDragStop, }: {
    edgeId: string;
    edgeIndex: number;
    index: number;
    point: DC__Point;
    onDragStop: (e: React.MouseEvent) => void;
}): JSX.Element;
//# sourceMappingURL=Waypoints.d.ts.map