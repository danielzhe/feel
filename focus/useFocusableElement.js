"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFocusableElement = void 0;
var react_1 = require("react");
var Store_1 = require("../store/Store");
function useFocusableElement(ref, id, before) {
    var focus = (0, Store_1.useDmnEditorStore)(function (s) { return s.focus; });
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    (0, react_1.useEffect)(function () {
        var _a;
        if (!id) {
            return;
        }
        var cb = function () {
            var _a;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.select();
            dmnEditorStoreApi.setState(function (state) {
                state.focus.consumableId = undefined;
            });
        };
        if (focus.consumableId === id && ref.current) {
            (_a = before === null || before === void 0 ? void 0 : before(cb)) !== null && _a !== void 0 ? _a : cb();
        }
    }, [before, dmnEditorStoreApi, focus.consumableId, id, ref]);
}
exports.useFocusableElement = useFocusableElement;
//# sourceMappingURL=useFocusableElement.js.map