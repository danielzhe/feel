import { DC__Bounds, DC__Dimension, DC__Point, DMNDI15__DMNShape } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { SnapGrid } from "../store/Store";
export declare function snapShapePosition(snapGrid: SnapGrid, shape: DMNDI15__DMNShape): {
    x: number;
    y: number;
};
export declare function snapBoundsPosition(snapGrid: SnapGrid, bounds: DC__Bounds | undefined): {
    x: number;
    y: number;
};
export declare function offsetShapePosition(shape: DMNDI15__DMNShape, offset: {
    x: number;
    y: number;
}): DMNDI15__DMNShape;
export declare function snapShapeDimensions(grid: SnapGrid, shape: DMNDI15__DMNShape, minSizes: DC__Dimension): {
    width: number;
    height: number;
};
export declare function snapBoundsDimensions(grid: SnapGrid, bounds: DC__Bounds | undefined, minSizes: DC__Dimension): {
    width: number;
    height: number;
};
export declare function snapPoint(grid: SnapGrid, point: DC__Point, method?: "floor" | "ceil" | "round"): DC__Point;
export declare function snap(grid: SnapGrid, coord: "x" | "y", value: number | undefined, method?: "floor" | "ceil" | "round"): number;
//# sourceMappingURL=SnapGrid.d.ts.map