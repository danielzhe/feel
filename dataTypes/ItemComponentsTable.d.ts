import * as React from "react";
import { DataType, EditItemDefinition, AddItemComponent, DataTypeIndex } from "./DataTypes";
export declare const BRIGHTNESS_DECREASE_STEP_IN_PERCENTAGE_PER_NESTING_LEVEL = 5;
export declare const STARTING_BRIGHTNESS_LEVEL_IN_PERCENTAGE = 95;
export declare function ItemComponentsTable({ isReadonly, parent, editItemDefinition, addItemComponent, dropdownOpenFor, allDataTypesById, setDropdownOpenFor, resolveTypeRef, }: {
    isReadonly: boolean;
    parent: DataType;
    editItemDefinition: EditItemDefinition;
    addItemComponent: AddItemComponent;
    allDataTypesById: DataTypeIndex;
    dropdownOpenFor: string | undefined;
    setDropdownOpenFor: React.Dispatch<React.SetStateAction<string | undefined>>;
    resolveTypeRef: (typeRef: string | undefined) => string | undefined;
}): JSX.Element;
//# sourceMappingURL=ItemComponentsTable.d.ts.map