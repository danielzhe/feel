import { DMN15__tImport } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
export declare const KIE_PMML_NAMESPACE = "https://kie.org/pmml";
export declare const allPmmlImportNamespaces: Set<string>;
export declare function getPmmlNamespace({ fileRelativePath }: {
    fileRelativePath: string;
}): string;
export declare function getPmmlNamespaceFromDmnImport({ dmnImport }: {
    dmnImport: DMN15__tImport;
}): string;
//# sourceMappingURL=pmml.d.ts.map