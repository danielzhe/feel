import * as RF from "reactflow";
export declare type Shape = {
    width: number | undefined | null;
    height: number | undefined | null;
    x: number | undefined | null;
    y: number | undefined | null;
};
export declare function getDiscretelyAutoPositionedEdgeParamsForRfNodes(source: RF.Node, target: RF.Node): {
    sx: number;
    sy: number;
    tx: number;
    ty: number;
    sourcePos: RF.Position;
    targetPos: RF.Position;
};
export declare function getDiscretelyAutoPositionedEdgeParams(src: Shape, tgt: Shape): {
    sx: number;
    sy: number;
    tx: number;
    ty: number;
    sourcePos: RF.Position;
    targetPos: RF.Position;
};
export declare function getPositionalHandlePosition(a: Shape, b: Shape): readonly [number, number, RF.Position];
export declare function getCenter(x: number | null | undefined, y: number | null | undefined, width: number | null | undefined, height: number | null | undefined): {
    x: number;
    y: number;
};
export declare function scaleFromCenter(amount: number, node: {
    position: RF.XYPosition | undefined;
    dimensions: Pick<RF.Node, "width" | "height">;
}): {
    position: {
        x: number;
        y: number;
    };
    dimensions: {
        width: number;
        height: number;
    };
};
//# sourceMappingURL=Maths.d.ts.map