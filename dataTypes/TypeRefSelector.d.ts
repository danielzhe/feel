import { DmnBuiltInDataType } from "@kie-tools/boxed-expression-component/dist/api";
import * as React from "react";
export declare type OnTypeRefChange = (newDataType: DmnBuiltInDataType) => void;
export declare type OnCreateDataType = (newDataTypeName: string) => void;
export declare const typeRefSelectorLimitedSpaceStyle: {
    maxHeight: string;
    boxShadow: string;
    overflowY: string;
};
export declare function TypeRefSelector(props: {
    zoom?: number;
    heightRef: React.RefObject<HTMLElement>;
    isDisabled?: boolean;
    typeRef: string | undefined;
    onChange: OnTypeRefChange;
    onCreate?: OnCreateDataType;
    menuAppendTo?: "parent";
}): JSX.Element;
//# sourceMappingURL=TypeRefSelector.d.ts.map