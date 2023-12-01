import * as React from "react";
import { DMN15_SPEC } from "../Dmn15Spec";
import { UniqueNameIndex } from "../Dmn15Spec";
export declare type OnInlineFeelNameRenamed = (newName: string) => void;
export declare const invalidInlineFeelNameStyle: {
    color: string;
    textDecoration: string;
    textUnderlinePosition: string;
};
export declare function InlineFeelNameInput({ id, onRenamed, isReadonly, name, shouldCommitOnBlur, isPlain, allUniqueNames, validate, placeholder, onKeyDown, saveInvalidValue, enableAutoFocusing, ...inputProps }: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    id: string;
    onRenamed: OnInlineFeelNameRenamed;
    name: string;
    isReadonly: boolean;
    isPlain: boolean;
    shouldCommitOnBlur: boolean;
    allUniqueNames: UniqueNameIndex;
    placeholder?: string;
    saveInvalidValue?: boolean;
    validate?: typeof DMN15_SPEC.namedElement.isValidName;
    enableAutoFocusing?: boolean;
}): JSX.Element;
//# sourceMappingURL=InlineFeelNameInput.d.ts.map