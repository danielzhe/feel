import { DMN15__tDefinitions, DMNDI15__DMNShape } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { SnapGrid } from "../store/Store";
export declare function addDecisionToDecisionService({ definitions, decisionId, decisionServiceId, drdIndex, snapGrid, }: {
    definitions: DMN15__tDefinitions;
    decisionId: string;
    decisionServiceId: string;
    drdIndex: number;
    snapGrid: SnapGrid;
}): void;
export declare function getSectionForDecisionInsideDecisionService({ decisionShape, decisionServiceShape, snapGrid, }: {
    decisionShape: DMNDI15__DMNShape;
    decisionServiceShape: DMNDI15__DMNShape;
    snapGrid: SnapGrid;
}): "output" | "encapsulated";
//# sourceMappingURL=addDecisionToDecisionService.d.ts.map