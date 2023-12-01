import * as React from "react";
import { XmlQName } from "@kie-tools/xml-parser-ts/dist/qNames";
import { UniqueNameIndex } from "../../Dmn15Spec";
import { DMN15__tNamedElement } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import "./EditableNodeLabel.css";
export declare type OnEditableNodeLabelChange = (value: string | undefined) => void;
export declare function EditableNodeLabel({ id, namedElement, namedElementQName, isEditing: _isEditing, setEditing: _setEditing, value, onChange, position, truncate, grow, shouldCommitOnBlur, skipValidation, allUniqueNames, fontStyle, }: {
    id?: string;
    shouldCommitOnBlur?: boolean;
    grow?: boolean;
    truncate?: boolean;
    namedElement?: DMN15__tNamedElement;
    namedElementQName?: XmlQName;
    position?: "center-center" | "top-center" | "center-left" | "top-left";
    isEditing: boolean;
    value: string | undefined;
    setEditing: React.Dispatch<React.SetStateAction<boolean>>;
    onChange: OnEditableNodeLabelChange;
    skipValidation?: boolean;
    allUniqueNames: UniqueNameIndex;
    fontStyle?: React.CSSProperties;
}): JSX.Element;
export declare function useEditableNodeLabel(id: string | undefined): {
    isEditingLabel: boolean;
    setEditingLabel: React.Dispatch<React.SetStateAction<boolean>>;
    triggerEditing: (event: React.SyntheticEvent<Element, Event>) => void;
    triggerEditingIfEnter: React.KeyboardEventHandler<Element>;
};
//# sourceMappingURL=EditableNodeLabel.d.ts.map