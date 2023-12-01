import React from "react";
import { DMNDI15__DMNStyle } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { NodeType } from "../connections/graphStructure";
export interface NodeStyle {
    fontStyle: React.CSSProperties;
    shapeStyle: ShapeStyle;
}
export interface ShapeStyle {
    fillColor: string;
    strokeColor: string;
    strokeWidth: number;
}
export interface DmnFontStyle {
    bold: boolean;
    italic: boolean;
    underline: boolean;
    strikeThrough: boolean;
    family?: string;
    size?: number;
    color: string;
}
export interface Color {
    blue: number;
    green: number;
    red: number;
    opacity: number;
}
export declare const DEFAULT_NODE_RED_FILL = 255;
export declare const DEFAULT_NODE_GREEN_FILL = 255;
export declare const DEFAULT_NODE_BLUE_FILL = 255;
export declare const DEFAULT_NODE_OPACITY = 0.9;
export declare const DEFAULT_NODE_FILL: string;
export declare const DEFAULT_NODE_STROKE_WIDTH = 1.5;
export declare const DEFAULT_NODE_STROKE_COLOR = "rgba(0, 0, 0, 1)";
export declare const DEFAULT_FONT_COLOR = "rgba(0, 0, 0, 1)";
export declare function useNodeStyle(args: {
    dmnStyle?: DMNDI15__DMNStyle;
    nodeType?: NodeType;
    isEnabled?: boolean;
}): NodeStyle;
export declare function getFonteStyle(fontProperties?: DmnFontStyle): React.CSSProperties;
//# sourceMappingURL=NodeStyle.d.ts.map