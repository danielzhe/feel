"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsHovered = void 0;
var react_1 = require("react");
function useIsHovered(ref) {
    var _a = __read((0, react_1.useState)(false), 2), isHovered = _a[0], setHovered = _a[1];
    (0, react_1.useEffect)(function () {
        function onEnter() {
            setHovered(true);
        }
        function onLeave() {
            setHovered(false);
        }
        var r = ref.current;
        r === null || r === void 0 ? void 0 : r.addEventListener("mouseenter", onEnter);
        r === null || r === void 0 ? void 0 : r.addEventListener("mouseleave", onLeave);
        return function () {
            r === null || r === void 0 ? void 0 : r.removeEventListener("mouseleave", onLeave);
            r === null || r === void 0 ? void 0 : r.removeEventListener("mouseenter", onEnter);
        };
    }, [ref]);
    return isHovered;
}
exports.useIsHovered = useIsHovered;
//# sourceMappingURL=useIsHovered.js.map