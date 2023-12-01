/// <reference types="react" />
import "./ConstraintsExpression.css";
import { DmnBuiltInDataType } from "@kie-tools/boxed-expression-component/dist/api";
import { TypeHelper } from "./Constraints";
export declare function ConstraintsExpression({ isReadonly, value, onSave, }: {
    isReadonly: boolean;
    value?: string;
    savedValue?: string;
    type: DmnBuiltInDataType;
    typeHelper?: TypeHelper;
    onSave?: (value?: string) => void;
    isDisabled?: boolean;
}): JSX.Element;
//# sourceMappingURL=ConstraintsExpression.d.ts.map