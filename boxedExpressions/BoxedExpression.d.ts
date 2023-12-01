import * as React from "react";
import { PMMLDocumentData } from "@kie-tools/pmml-editor-marshaller/dist/api";
import { PMMLModelData } from "@kie-tools/pmml-editor-marshaller/dist/api/PMMLModelData";
import { Model, PMML } from "@kie-tools/pmml-editor-marshaller/dist/marshaller/model/pmml4_4";
export declare function BoxedExpression({ container }: {
    container: React.RefObject<HTMLElement>;
}): JSX.Element;
export declare function getPmmlDocumentData(pmml: PMML): PMMLDocumentData;
export declare function retrieveModelData(model: Model): PMMLModelData | undefined;
//# sourceMappingURL=BoxedExpression.d.ts.map