import { ExpressionDefinition } from "@kie-tools/boxed-expression-component/dist/api";
import { AllExpressions } from "../dataTypes/DataTypeSpec";
export declare function dmnToBee(widthsById: Map<string, number[]>, expressionHolder: {
    expression?: AllExpressions;
} | undefined, typeRef?: string): ExpressionDefinition;
export declare function getUndefinedExpressionDefinition(): ExpressionDefinition;
//# sourceMappingURL=dmnToBee.d.ts.map