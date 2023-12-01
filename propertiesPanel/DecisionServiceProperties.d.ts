/// <reference types="react" />
import { DMN15__tDecision, DMN15__tDecisionService, DMN15__tInputData } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
export declare type AllKnownDrgElementsByHref = Map<string, ({
    __$$element: "decision";
} & DMN15__tDecision) | ({
    __$$element: "inputData";
} & DMN15__tInputData)>;
export declare function DecisionServiceProperties({ decisionService, namespace, index, }: {
    decisionService: DMN15__tDecisionService;
    namespace: string | undefined;
    index: number;
}): JSX.Element;
export declare function DecisionServiceElementList({ decisionServiceNamespace, elements, allDrgElementsByHref, }: {
    decisionServiceNamespace: string | undefined;
    elements: DMN15__tDecisionService["outputDecision"];
    allDrgElementsByHref: AllKnownDrgElementsByHref;
}): JSX.Element;
//# sourceMappingURL=DecisionServiceProperties.d.ts.map