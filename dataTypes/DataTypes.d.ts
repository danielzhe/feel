/// <reference types="react" />
import { DMN15__tItemDefinition } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { State } from "../store/Store";
export declare type DataType = {
    itemDefinition: DMN15__tItemDefinition;
    parentId: string | undefined;
    parents: Set<string>;
    index: number;
    namespace: string;
    feelName: string;
    children?: DataType[];
};
export declare type DataTypeTreeViewDataItem = {};
export declare type DataTypeIndex = Map<string, DataType>;
export declare type AddItemComponent = (id: string, how: "unshift" | "push", partial?: Partial<DMN15__tItemDefinition>) => void;
export declare type AddTopLevelItemDefinition = (partial: Partial<DMN15__tItemDefinition>) => void;
export declare type EditItemDefinition = (id: string, consumer: (itemDefinition: DMN15__tItemDefinition, items: DMN15__tItemDefinition[], index: number, all: DMN15__tItemDefinition[], state: State) => void) => void;
export declare function DataTypes(): JSX.Element;
//# sourceMappingURL=DataTypes.d.ts.map