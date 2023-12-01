import { DC__Bounds, DMN15__tDefinitions, DMNDI15__DMNDecisionServiceDividerLine, DMNDI15__DMNShape } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { SnapGrid } from "../store/Store";
export declare const DECISION_SERVICE_DIVIDER_LINE_PADDING = 100;
export declare function updateDecisionServiceDividerLine({ definitions, drdIndex, dmnShapesByHref, shapeIndex, localYPosition, drgElementIndex, snapGrid, }: {
    definitions: DMN15__tDefinitions;
    drdIndex: number;
    dmnShapesByHref: Map<string, DMNDI15__DMNShape & {
        index: number;
    }>;
    shapeIndex: number;
    localYPosition: number;
    drgElementIndex: number;
    snapGrid: SnapGrid;
}): void;
export declare function getCentralizedDecisionServiceDividerLine(bounds: DC__Bounds): DMNDI15__DMNDecisionServiceDividerLine;
//# sourceMappingURL=updateDecisionServiceDividerLine.d.ts.map