import { XmlQName } from "@kie-tools/xml-parser-ts/dist/qNames";
import { NodeType } from "./graphStructure";
export declare function isValidContainment({ nodeTypes, inside, dmnObjectQName, }: {
    nodeTypes: Set<NodeType>;
    inside: NodeType;
    dmnObjectQName: XmlQName;
}): boolean;
//# sourceMappingURL=isValidContainment.d.ts.map