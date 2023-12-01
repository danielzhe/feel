import { DMN15__tDefinitions, DMNDI15__DMNEdge, DMNDI15__DMNShape } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import * as React from "react";
import * as RF from "reactflow";
import { Unpacked } from "../../tsExt/tsExt";
export declare type DmnDiagramEdgeData = {
    dmnEdge: (DMNDI15__DMNEdge & {
        index: number;
    }) | undefined;
    dmnObject: {
        id: string;
        type: Unpacked<DMN15__tDefinitions["artifact"]>["__$$element"] | Unpacked<DMN15__tDefinitions["drgElement"]>["__$$element"];
        requirementType: "informationRequirement" | "knowledgeRequirement" | "authorityRequirement" | "association";
        index: number;
    };
    dmnShapeSource: DMNDI15__DMNShape | undefined;
    dmnShapeTarget: DMNDI15__DMNShape | undefined;
};
export declare const InformationRequirementPath: React.MemoExoticComponent<(_props: React.SVGProps<SVGPathElement> & {
    svgRef?: React.RefObject<SVGPathElement> | undefined;
}) => JSX.Element>;
export declare const KnowledgeRequirementPath: React.MemoExoticComponent<(__props: React.SVGProps<SVGPathElement> & {
    svgRef?: React.RefObject<SVGPathElement> | undefined;
}) => JSX.Element>;
export declare const AuthorityRequirementPath: React.MemoExoticComponent<(__props: React.SVGProps<SVGPathElement> & {
    centerToConnectionPoint: boolean | undefined;
} & {
    svgRef?: React.RefObject<SVGPathElement> | undefined;
}) => JSX.Element>;
export declare const AssociationPath: React.MemoExoticComponent<(__props: React.SVGProps<SVGPathElement> & {
    svgRef?: React.RefObject<SVGPathElement> | undefined;
}) => JSX.Element>;
export declare function useEdgeClassName(isConnecting: boolean, isDraggingWaypoint: boolean): "normal" | "dimmed" | "dragging-waypoint";
export declare const InformationRequirementEdge: React.MemoExoticComponent<(props: RF.EdgeProps<DmnDiagramEdgeData>) => JSX.Element>;
export declare const KnowledgeRequirementEdge: React.MemoExoticComponent<(props: RF.EdgeProps<DmnDiagramEdgeData>) => JSX.Element>;
export declare const AuthorityRequirementEdge: React.MemoExoticComponent<(props: RF.EdgeProps<DmnDiagramEdgeData>) => JSX.Element>;
export declare const AssociationEdge: React.MemoExoticComponent<(props: RF.EdgeProps<DmnDiagramEdgeData>) => JSX.Element>;
//# sourceMappingURL=Edges.d.ts.map