"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFonteStyle = exports.useNodeStyle = exports.DEFAULT_FONT_COLOR = exports.DEFAULT_NODE_STROKE_COLOR = exports.DEFAULT_NODE_STROKE_WIDTH = exports.DEFAULT_NODE_FILL = exports.DEFAULT_NODE_OPACITY = exports.DEFAULT_NODE_BLUE_FILL = exports.DEFAULT_NODE_GREEN_FILL = exports.DEFAULT_NODE_RED_FILL = void 0;
var react_1 = require("react");
exports.DEFAULT_NODE_RED_FILL = 255;
exports.DEFAULT_NODE_GREEN_FILL = 255;
exports.DEFAULT_NODE_BLUE_FILL = 255;
exports.DEFAULT_NODE_OPACITY = 0.9;
exports.DEFAULT_NODE_FILL = "rgba(".concat(exports.DEFAULT_NODE_RED_FILL, ", ").concat(exports.DEFAULT_NODE_GREEN_FILL, ", ").concat(exports.DEFAULT_NODE_BLUE_FILL, ", ").concat(exports.DEFAULT_NODE_OPACITY, ")");
exports.DEFAULT_NODE_STROKE_WIDTH = 1.5;
exports.DEFAULT_NODE_STROKE_COLOR = "rgba(0, 0, 0, 1)";
exports.DEFAULT_FONT_COLOR = "rgba(0, 0, 0, 1)";
function useNodeStyle(args) {
    var fillColor = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d, _e, _f;
        var blue = (_b = (_a = args.dmnStyle) === null || _a === void 0 ? void 0 : _a["dmndi:FillColor"]) === null || _b === void 0 ? void 0 : _b["@_blue"];
        var green = (_d = (_c = args.dmnStyle) === null || _c === void 0 ? void 0 : _c["dmndi:FillColor"]) === null || _d === void 0 ? void 0 : _d["@_green"];
        var red = (_f = (_e = args.dmnStyle) === null || _e === void 0 ? void 0 : _e["dmndi:FillColor"]) === null || _f === void 0 ? void 0 : _f["@_red"];
        var opacity = args.nodeType === "node_decisionService" ||
            args.nodeType === "node_group" ||
            args.nodeType === "node_textAnnotation"
            ? 0.1
            : exports.DEFAULT_NODE_OPACITY;
        if (!args.isEnabled || blue === undefined || green === undefined || red === undefined) {
            return "rgba(".concat(exports.DEFAULT_NODE_RED_FILL, ", ").concat(exports.DEFAULT_NODE_GREEN_FILL, ", ").concat(exports.DEFAULT_NODE_BLUE_FILL, ", ").concat(opacity, ")");
        }
        return "rgba(".concat(red, ", ").concat(green, ", ").concat(blue, ", ").concat(opacity, ")");
    }, [args.dmnStyle, args.nodeType, args.isEnabled]);
    var strokeColor = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d, _e, _f;
        var blue = (_b = (_a = args.dmnStyle) === null || _a === void 0 ? void 0 : _a["dmndi:StrokeColor"]) === null || _b === void 0 ? void 0 : _b["@_blue"];
        var green = (_d = (_c = args.dmnStyle) === null || _c === void 0 ? void 0 : _c["dmndi:StrokeColor"]) === null || _d === void 0 ? void 0 : _d["@_green"];
        var red = (_f = (_e = args.dmnStyle) === null || _e === void 0 ? void 0 : _e["dmndi:StrokeColor"]) === null || _f === void 0 ? void 0 : _f["@_red"];
        if (!args.isEnabled || blue === undefined || green === undefined || red === undefined) {
            return exports.DEFAULT_NODE_STROKE_COLOR;
        }
        return "rgba(".concat(red, ", ").concat(green, ", ").concat(blue, ", 1)");
    }, [args.dmnStyle, args.isEnabled]);
    var fontProperties = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        var blue = (_b = (_a = args.dmnStyle) === null || _a === void 0 ? void 0 : _a["dmndi:FontColor"]) === null || _b === void 0 ? void 0 : _b["@_blue"];
        var green = (_d = (_c = args.dmnStyle) === null || _c === void 0 ? void 0 : _c["dmndi:FontColor"]) === null || _d === void 0 ? void 0 : _d["@_green"];
        var red = (_f = (_e = args.dmnStyle) === null || _e === void 0 ? void 0 : _e["dmndi:FontColor"]) === null || _f === void 0 ? void 0 : _f["@_red"];
        var fontColor = !args.isEnabled || blue === undefined || green === undefined || red === undefined
            ? exports.DEFAULT_FONT_COLOR
            : "rgba(".concat(red, ", ").concat(green, ", ").concat(blue, ", 1)");
        return {
            bold: args.isEnabled ? (_h = (_g = args.dmnStyle) === null || _g === void 0 ? void 0 : _g["@_fontBold"]) !== null && _h !== void 0 ? _h : false : false,
            italic: args.isEnabled ? (_k = (_j = args.dmnStyle) === null || _j === void 0 ? void 0 : _j["@_fontItalic"]) !== null && _k !== void 0 ? _k : false : false,
            underline: args.isEnabled ? (_m = (_l = args.dmnStyle) === null || _l === void 0 ? void 0 : _l["@_fontUnderline"]) !== null && _m !== void 0 ? _m : false : false,
            strikeThrough: args.isEnabled ? (_p = (_o = args.dmnStyle) === null || _o === void 0 ? void 0 : _o["@_fontStrikeThrough"]) !== null && _p !== void 0 ? _p : false : false,
            family: args.isEnabled ? (_q = args.dmnStyle) === null || _q === void 0 ? void 0 : _q["@_fontFamily"] : undefined,
            size: args.isEnabled ? (_r = args.dmnStyle) === null || _r === void 0 ? void 0 : _r["@_fontSize"] : undefined,
            color: fontColor,
        };
    }, [args.dmnStyle, args.isEnabled]);
    return {
        fontStyle: getFonteStyle(fontProperties),
        shapeStyle: {
            fillColor: fillColor,
            strokeColor: strokeColor,
            strokeWidth: exports.DEFAULT_NODE_STROKE_WIDTH,
        },
    };
}
exports.useNodeStyle = useNodeStyle;
function getFonteStyle(fontProperties) {
    var textDecoration = "";
    if (fontProperties === null || fontProperties === void 0 ? void 0 : fontProperties.underline) {
        textDecoration += "underline ";
    }
    if (fontProperties === null || fontProperties === void 0 ? void 0 : fontProperties.strikeThrough) {
        textDecoration += "line-through";
    }
    return {
        fontWeight: (fontProperties === null || fontProperties === void 0 ? void 0 : fontProperties.bold) ? "bold" : "",
        fontStyle: (fontProperties === null || fontProperties === void 0 ? void 0 : fontProperties.italic) ? "italic" : "",
        fontFamily: fontProperties === null || fontProperties === void 0 ? void 0 : fontProperties.family,
        textDecoration: textDecoration,
        fontSize: fontProperties === null || fontProperties === void 0 ? void 0 : fontProperties.size,
        color: fontProperties === null || fontProperties === void 0 ? void 0 : fontProperties.color,
    };
}
exports.getFonteStyle = getFonteStyle;
//# sourceMappingURL=NodeStyle.js.map