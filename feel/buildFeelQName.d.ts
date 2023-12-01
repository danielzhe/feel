import { DMN15__tImport, DMN15__tNamedElement } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { XmlQName } from "@kie-tools/xml-parser-ts/dist/qNames";
import { XmlParserTsRootElementBaseType } from "@kie-tools/xml-parser-ts";
export declare type FeelQNameBuild = {
    full: string;
    name: string;
    prefix: string | undefined;
    isExternal: boolean;
};
export declare function buildFeelQNameFromXmlQName({ namedElement, namedElementQName, importsByNamespace, relativeToNamespace, model, }: {
    namedElement: DMN15__tNamedElement;
    namedElementQName: XmlQName;
    importsByNamespace: Map<string, DMN15__tImport>;
    model: XmlParserTsRootElementBaseType;
    relativeToNamespace: string;
}): FeelQNameBuild;
export declare function buildFeelQNameFromNamespace({ namedElement, namespace, importsByNamespace, relativeToNamespace, }: {
    namedElement: DMN15__tNamedElement;
    namespace: string;
    importsByNamespace: Map<string, DMN15__tImport>;
    relativeToNamespace: string;
}): FeelQNameBuild;
//# sourceMappingURL=buildFeelQName.d.ts.map