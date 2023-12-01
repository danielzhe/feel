import * as React from "react";
import * as RF from "reactflow";
export declare type NodeSvgProps = RF.Dimensions & RF.XYPosition & {
    fillColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
};
export declare const ___NASTY_HACK_FOR_SAFARI_to_force_redrawing_svgs_and_avoid_repaint_glitches: {
    flag: boolean;
};
export declare function normalize<T extends NodeSvgProps>(_props: T): {
    strokeWidth: number;
    x: number;
    y: number;
    width: number;
    height: number;
    fillColor: string | undefined;
    strokeColor: string | undefined;
    props: Omit<T, "width" | "x" | "y" | "height" | "strokeWidth" | "fillColor" | "strokeColor">;
};
export declare function InputDataNodeSvg(__props: NodeSvgProps): JSX.Element;
export declare function DecisionNodeSvg(__props: NodeSvgProps): JSX.Element;
export declare function BkmNodeSvg(__props: NodeSvgProps): JSX.Element;
export declare function KnowledgeSourceNodeSvg(__props: NodeSvgProps): JSX.Element;
export declare const containerNodeInteractionRectCssClassName = "kie-dmn-editor--node-containerNodeInteractionRect";
export declare const DecisionServiceNodeSvg: React.ForwardRefExoticComponent<RF.Dimensions & RF.XYPosition & {
    fillColor?: string | undefined;
    strokeColor?: string | undefined;
    strokeWidth?: number | undefined;
} & {
    dividerLineRef?: React.RefObject<SVGPathElement> | undefined;
    dividerLineLocalY?: number | undefined;
    showSectionLabels: boolean;
    isCollapsed?: boolean | undefined;
    isReadonly: boolean;
} & React.RefAttributes<SVGRectElement>>;
export declare function TextAnnotationNodeSvg(__props: NodeSvgProps & {
    showPlaceholder?: boolean;
}): JSX.Element;
export declare const GroupNodeSvg: React.ForwardRefExoticComponent<RF.Dimensions & RF.XYPosition & {
    fillColor?: string | undefined;
    strokeColor?: string | undefined;
    strokeWidth?: number | undefined;
} & {
    strokeDasharray?: string | undefined;
} & React.RefAttributes<SVGRectElement>>;
export declare const UnknownNodeSvg: (_props: RF.Dimensions & RF.XYPosition & {
    fillColor?: string | undefined;
    strokeColor?: string | undefined;
    strokeWidth?: number | undefined;
} & {
    strokeDasharray?: string | undefined;
}) => JSX.Element;
//# sourceMappingURL=NodeSvgs.d.ts.map