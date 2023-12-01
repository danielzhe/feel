/// <reference types="react" />
import { ConstraintComponentProps } from "./Constraints";
export declare const ENUM_SEPARATOR = ",";
export declare function ConstraintsEnum({ isReadonly, value, expressionValue, type, typeHelper, onSave, isDisabled, }: ConstraintComponentProps): JSX.Element;
export declare function isEnum(value?: string, typeCheck?: (value: string) => boolean): string[] | undefined;
//# sourceMappingURL=ConstraintsEnum.d.ts.map