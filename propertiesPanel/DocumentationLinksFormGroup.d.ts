/// <reference types="react" />
import "./DocumentationLinksFormGroup.css";
import { KIE__tAttachment } from "@kie-tools/dmn-marshaller/dist/schemas/kie-1_0/ts-gen/types";
import { Namespaced } from "@kie-tools/xml-parser-ts";
export declare function DocumentationLinksFormGroup({ isReadonly, values, onChange, }: {
    isReadonly: boolean;
    values?: Namespaced<"kie", KIE__tAttachment>[];
    onChange?: (newExtensionElements: Namespaced<"kie", KIE__tAttachment>[]) => void;
}): JSX.Element;
//# sourceMappingURL=DocumentationLinksFormGroup.d.ts.map