import * as React from "react";
export declare const IN_VIEW_SELECT_PADDING = 12;
export declare const TABS_HEIGHT = 40;
export declare function useInViewSelect(ref: React.RefObject<HTMLElement>, self: React.RefObject<HTMLElement>, factor?: number): {
    maxHeight: undefined;
    direction: undefined;
} | {
    maxHeight: number;
    direction: "up";
} | {
    maxHeight: number;
    direction: "down";
};
//# sourceMappingURL=useInViewSelect.d.ts.map