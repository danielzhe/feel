import { DMN15__tDefinitions } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
export declare function getDefaultDrdName({ drdIndex }: {
    drdIndex: number;
}): "Default DRD" | "Unnamed DRD";
export declare function addOrGetDrd({ definitions, drdIndex }: {
    definitions: DMN15__tDefinitions;
    drdIndex: number;
}): {
    widthsExtension: import("@kie-tools/xml-parser-ts").Namespaced<"kie", import("@kie-tools/dmn-marshaller/dist/schemas/kie-1_0/ts-gen/types").KIE__tComponentsWidthsExtension>;
    widths: import("@kie-tools/xml-parser-ts").Namespaced<"kie", import("@kie-tools/dmn-marshaller/dist/schemas/kie-1_0/ts-gen/types").KIE__tComponentWidths>[];
    diagram: import("@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types").DMNDI15__DMNDiagram;
    diagramElements: (({
        __$$element: "dmndi:DMNShape";
    } & import("@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types").DMNDI15__DMNShape) | ({
        __$$element: "dmndi:DMNEdge";
    } & import("@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types").DMNDI15__DMNEdge))[];
};
//# sourceMappingURL=addOrGetDrd.d.ts.map