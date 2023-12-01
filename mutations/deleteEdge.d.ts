import { DMN15__tDefinitions, DMNDI15__DMNEdge } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { DmnDiagramEdgeData } from "../diagram/edges/Edges";
export declare function deleteEdge({ definitions, drdIndex, edge, }: {
    definitions: DMN15__tDefinitions;
    drdIndex: number;
    edge: {
        id: string;
        dmnObject: DmnDiagramEdgeData["dmnObject"];
    };
}): {
    dmnEdge: DMNDI15__DMNEdge | undefined;
};
//# sourceMappingURL=deleteEdge.d.ts.map