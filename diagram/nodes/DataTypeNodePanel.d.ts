/// <reference types="react" />
import { DMN15__tInformationItem, DMNDI15__DMNShape } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/types";
import { OnCreateDataType, OnTypeRefChange } from "../../dataTypes/TypeRefSelector";
export declare function DataTypeNodePanel(props: {
    isVisible: boolean;
    variable: DMN15__tInformationItem | undefined;
    shape: DMNDI15__DMNShape | undefined;
    onChange: OnTypeRefChange;
    onCreate?: OnCreateDataType;
}): JSX.Element;
//# sourceMappingURL=DataTypeNodePanel.d.ts.map