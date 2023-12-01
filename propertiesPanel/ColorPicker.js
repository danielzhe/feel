"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorPicker = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
function ColorPicker(props) {
    var inputRef = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
            }, onClick: function () { var _a, _b; return (_b = (_a = props.colorPickerRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.click(); } }, { children: [props.icon, props.colorDisplay ? (props.colorDisplay) : ((0, jsx_runtime_1.jsx)("div", { style: { height: "4px", width: "18px", backgroundColor: props.color } })), (0, jsx_runtime_1.jsx)("input", { ref: function (ref) {
                        if (ref !== null) {
                            inputRef.current = ref;
                            if (props.colorPickerRef) {
                                props.colorPickerRef.current = ref;
                            }
                        }
                    }, "aria-label": "Font color", type: "color", disabled: false, value: props.color, style: { opacity: 0, width: 0, height: 0 }, onChange: function (e) { return props.onChange(e.currentTarget.value); } })] })) }));
}
exports.ColorPicker = ColorPicker;
//# sourceMappingURL=ColorPicker.js.map