import { ExpressionDefinition, ExpressionDefinitionLogicType } from "@kie-tools/boxed-expression-component/dist/api";
import { DataTypeIndex } from "../dataTypes/DataTypes";
export declare function getDefaultExpressionDefinitionByLogicType({ logicType, typeRef, allTopLevelDataTypesByFeelName, expressionHolderName, getInputs, getDefaultColumnWidth, }: {
    logicType: ExpressionDefinitionLogicType;
    typeRef: string;
    expressionHolderName?: string;
    allTopLevelDataTypesByFeelName: DataTypeIndex;
    getInputs?: () => {
        name: string;
        typeRef: string | undefined;
    }[] | undefined;
    getDefaultColumnWidth?: (args: {
        name: string;
        typeRef: string | undefined;
    }) => number | undefined;
}): ExpressionDefinition;
//# sourceMappingURL=getDefaultExpressionDefinitionByLogicType.d.ts.map