/// <reference types="react" />
import { ConstraintComponentProps } from "./Constraints";
export declare function ConstraintsRange({ isReadonly, value, expressionValue, type, typeHelper, onSave, isDisabled, }: ConstraintComponentProps): JSX.Element;
export declare function hasRangeStartStructure(value: string): boolean;
export declare function hasRangeEndStructure(value: string): boolean;
export declare function hasRangeStructure(value: string): boolean;
export declare function isRange(value?: string, typeCheck?: (value: string) => boolean): [string, string] | undefined;
//# sourceMappingURL=ConstraintsRange.d.ts.map