import * as React from "react";
import { DMN15__tItemDefinition } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { DmnBuiltInDataType } from "@kie-tools/boxed-expression-component/dist/api";
import { EditItemDefinition } from "./DataTypes";
export declare type TypeHelper = {
    check: (value: string) => boolean;
    parse: (value: string) => any;
    transform: (value: string) => string;
    recover: (value?: string) => string | undefined;
    component: (props: any) => React.ReactNode | undefined;
};
export interface ConstraintComponentProps {
    isReadonly: boolean;
    value?: string;
    expressionValue?: string;
    type: DmnBuiltInDataType;
    typeHelper: TypeHelper;
    onSave: (value?: string) => void;
    isDisabled: boolean;
}
export declare const constraintTypeHelper: (typeRef: DmnBuiltInDataType) => TypeHelper;
export declare function Constraints({ isReadonly, itemDefinition, editItemDefinition, }: {
    isReadonly: boolean;
    itemDefinition: DMN15__tItemDefinition;
    editItemDefinition: EditItemDefinition;
}): JSX.Element;
//# sourceMappingURL=Constraints.d.ts.map