import { DMN15__tDefinitions } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { DataTypeIndex } from "../dataTypes/DataTypes";
import { DmnLatestModel } from "@kie-tools/dmn-marshaller";
export declare function renameImport({ definitions, newName, allTopLevelDataTypesByFeelName, index, externalDmnModels, }: {
    definitions: DMN15__tDefinitions;
    allTopLevelDataTypesByFeelName: DataTypeIndex;
    newName: string;
    index: number;
    externalDmnModels: Map<string, DmnLatestModel>;
}): void;
//# sourceMappingURL=renameImport.d.ts.map