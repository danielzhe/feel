"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInViewSelect = exports.TABS_HEIGHT = exports.IN_VIEW_SELECT_PADDING = void 0;
exports.IN_VIEW_SELECT_PADDING = 12;
exports.TABS_HEIGHT = 40;
function useInViewSelect(ref, self, factor) {
    var _a, _b;
    if (factor === void 0) { factor = 1; }
    var reference = ((_a = ref.current) !== null && _a !== void 0 ? _a : document.body).getBoundingClientRect();
    var s = (_b = self.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
    if (!s) {
        return { maxHeight: undefined, direction: undefined };
    }
    var below = reference.height - (s.y - reference.y + s.height + exports.IN_VIEW_SELECT_PADDING);
    var above = s.y - reference.y - exports.IN_VIEW_SELECT_PADDING - exports.TABS_HEIGHT;
    if (above > below) {
        return { maxHeight: above, direction: "up" };
    }
    else {
        return { maxHeight: below, direction: "down" };
    }
}
exports.useInViewSelect = useInViewSelect;
//# sourceMappingURL=useInViewSelect.js.map