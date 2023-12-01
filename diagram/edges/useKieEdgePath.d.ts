import { DmnDiagramEdgeData } from "./Edges";
export declare function useKieEdgePath(source: string | undefined, target: string | undefined, data: DmnDiagramEdgeData | undefined): {
    path: undefined;
    points: never[];
} | {
    path: string;
    points: import("@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types").DC__Point[];
};
//# sourceMappingURL=useKieEdgePath.d.ts.map