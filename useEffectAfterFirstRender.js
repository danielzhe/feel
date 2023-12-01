"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEffectAfterFirstRender = void 0;
var react_1 = require("react");
function useEffectAfterFirstRender(effect, b) {
    var didMountRef = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(function () {
        if (didMountRef.current) {
            return effect();
        }
        didMountRef.current = true;
    }, b);
}
exports.useEffectAfterFirstRender = useEffectAfterFirstRender;
//# sourceMappingURL=useEffectAfterFirstRender.js.map