import { DMN15__tDefinitions } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { NodeNature } from "./NodeNature";
import { XmlQName } from "@kie-tools/xml-parser-ts/dist/qNames";
export declare function deleteNode({ definitions, drdIndex, nodeNature, dmnObjectId, dmnObjectQName, }: {
    definitions: DMN15__tDefinitions;
    drdIndex: number;
    nodeNature: NodeNature;
    dmnObjectId: string | undefined;
    dmnObjectQName: XmlQName;
}): void;
//# sourceMappingURL=deleteNode.d.ts.map