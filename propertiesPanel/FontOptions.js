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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.FontOptions = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("react");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var pencil_alt_icon_1 = require("@patternfly/react-icons/dist/js/icons/pencil-alt-icon");
var PropertiesPanelHeader_1 = require("./PropertiesPanelHeader");
var Store_1 = require("../store/Store");
var NumberInput_1 = require("@patternfly/react-core/dist/js/components/NumberInput");
var addOrGetDrd_1 = require("../mutations/addOrGetDrd");
var ToggleGroup_1 = require("@patternfly/react-core/dist/js/components/ToggleGroup");
var Select_1 = require("@patternfly/react-core/dist/js/components/Select");
var useInViewSelect_1 = require("../responsiveness/useInViewSelect");
var DmnEditorContext_1 = require("../DmnEditorContext");
var DerivedStore_1 = require("../store/DerivedStore");
require("./FontOptions.css");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var undo_alt_icon_1 = require("@patternfly/react-icons/dist/js/icons/undo-alt-icon");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var ColorPicker_1 = require("./ColorPicker");
var WEBSAFE_FONTS_LIST = [
    "Arial",
    "Verdana",
    "Tahoma",
    "Trebuchet MS",
    "Times New Roman",
    "Georgia",
    "Garamond",
    "Courier New",
    "Brush Script MT",
];
var DEFAULT_FONT_SIZE = 16;
var MAX_FONT_SIZE = 72;
var MIN_FONT_SIZE = 0;
var FontStyleToggleOptions;
(function (FontStyleToggleOptions) {
    FontStyleToggleOptions["BOLD"] = "bold";
    FontStyleToggleOptions["ITALIC"] = "italic";
    FontStyleToggleOptions["UNDERLINE"] = "underline";
    FontStyleToggleOptions["STRIKE_THROUGH"] = "strike-through";
    FontStyleToggleOptions["FONT_COLOR"] = "font-color";
})(FontStyleToggleOptions || (FontStyleToggleOptions = {}));
function FontOptions(_a) {
    var startExpanded = _a.startExpanded, nodeIds = _a.nodeIds;
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var _b = __read((0, react_1.useState)(startExpanded), 2), isStyleSectionExpanded = _b[0], setStyleSectionExpanded = _b[1];
    var dmnShapesByHref = (0, DerivedStore_1.useDmnEditorDerivedStore)().dmnShapesByHref;
    var shapes = (0, react_1.useMemo)(function () { return nodeIds.map(function (nodeId) { return dmnShapesByHref.get(nodeId); }); }, [dmnShapesByHref, nodeIds]);
    var shapesStyle = (0, react_1.useMemo)(function () { return shapes.map(function (shape) { return shape === null || shape === void 0 ? void 0 : shape["di:Style"]; }); }, [shapes]);
    var fontFamily = (0, react_1.useMemo)(function () { var _a; return (_a = shapesStyle[0]) === null || _a === void 0 ? void 0 : _a["@_fontFamily"]; }, [shapesStyle]);
    var isFontBold = (0, react_1.useMemo)(function () { var _a, _b; return (_b = (_a = shapesStyle[0]) === null || _a === void 0 ? void 0 : _a["@_fontBold"]) !== null && _b !== void 0 ? _b : false; }, [shapesStyle]);
    var isFontItalic = (0, react_1.useMemo)(function () { var _a, _b; return (_b = (_a = shapesStyle[0]) === null || _a === void 0 ? void 0 : _a["@_fontItalic"]) !== null && _b !== void 0 ? _b : false; }, [shapesStyle]);
    var isFontUnderline = (0, react_1.useMemo)(function () { var _a; return (_a = shapesStyle[0]) === null || _a === void 0 ? void 0 : _a["@_fontUnderline"]; }, [shapesStyle]);
    var isFontStrikeThrough = (0, react_1.useMemo)(function () { var _a, _b; return (_b = (_a = shapesStyle[0]) === null || _a === void 0 ? void 0 : _a["@_fontStrikeThrough"]) !== null && _b !== void 0 ? _b : false; }, [shapesStyle]);
    var fontSize = (0, react_1.useMemo)(function () { var _a, _b; return (_b = (_a = shapesStyle[0]) === null || _a === void 0 ? void 0 : _a["@_fontSize"]) !== null && _b !== void 0 ? _b : DEFAULT_FONT_SIZE; }, [shapesStyle]);
    var fontColor = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var b = ((_c = (_b = (_a = shapesStyle[0]) === null || _a === void 0 ? void 0 : _a["dmndi:FontColor"]) === null || _b === void 0 ? void 0 : _b["@_blue"]) !== null && _c !== void 0 ? _c : 0).toString(16);
        var g = ((_f = (_e = (_d = shapesStyle[0]) === null || _d === void 0 ? void 0 : _d["dmndi:FontColor"]) === null || _e === void 0 ? void 0 : _e["@_green"]) !== null && _f !== void 0 ? _f : 0).toString(16);
        var r = ((_j = (_h = (_g = shapesStyle[0]) === null || _g === void 0 ? void 0 : _g["dmndi:FontColor"]) === null || _h === void 0 ? void 0 : _h["@_red"]) !== null && _j !== void 0 ? _j : 0).toString(16);
        return "#".concat(r.length === 1 ? "0" + r : r).concat(g.length === 1 ? "0" + g : g).concat(b.length === 1 ? "0" + b : b);
    }, [shapesStyle]);
    var editShapeStyle = (0, react_1.useCallback)(function (callback) {
        dmnEditorStoreApi.setState(function (state) {
            var diagramElements = (0, addOrGetDrd_1.addOrGetDrd)({
                definitions: state.dmn.model.definitions,
                drdIndex: state.diagram.drdIndex,
            }).diagramElements;
            var _shapes = shapes.map(function (shape) { var _a; return diagramElements[(_a = shape === null || shape === void 0 ? void 0 : shape.index) !== null && _a !== void 0 ? _a : 0]; });
            _shapes.forEach(function (_shape, i, _shapes) {
                var _a;
                var _b;
                (_a = (_b = _shapes[i])["di:Style"]) !== null && _a !== void 0 ? _a : (_b["di:Style"] = { __$$element: "dmndi:DMNStyle" });
            });
            callback(_shapes, state);
        });
    }, [dmnEditorStoreApi, shapes]);
    var dmnEditorRootElementRef = (0, DmnEditorContext_1.useDmnEditor)().dmnEditorRootElementRef;
    var toggleRef = React.useRef(null);
    var inViewTimezoneSelect = (0, useInViewSelect_1.useInViewSelect)(dmnEditorRootElementRef, toggleRef);
    var _c = __read((0, react_1.useState)(false), 2), isFontFamilySelectOpen = _c[0], setFontFamilySelectOpen = _c[1];
    var onSelectFont = (0, react_1.useCallback)(function (e, value, isPlaceholder) {
        if (isPlaceholder) {
            editShapeStyle(function (shapes) {
                shapes.forEach(function (shape, i, shapes) {
                    var _a;
                    var _b;
                    (_a = (_b = shape["di:Style"])["@_fontFamily"]) !== null && _a !== void 0 ? _a : (_b["@_fontFamily"] = undefined);
                });
            });
            return;
        }
        editShapeStyle(function (shapes) {
            shapes.forEach(function (shape, i, shapes) {
                shape["di:Style"]["@_fontFamily"] = value;
            });
        });
    }, [editShapeStyle]);
    var validateFontSize = (0, react_1.useCallback)(function (value) {
        if (value === undefined) {
            return DEFAULT_FONT_SIZE;
        }
        if (value >= MAX_FONT_SIZE) {
            return MAX_FONT_SIZE;
        }
        if (value <= MIN_FONT_SIZE) {
            return MIN_FONT_SIZE;
        }
        return value;
    }, []);
    var onMinus = (0, react_1.useCallback)(function () {
        editShapeStyle(function (shapes) {
            shapes.forEach(function (shape) {
                var _a, _b;
                shape["di:Style"]["@_fontSize"] = validateFontSize(((_b = (_a = shape["di:Style"]) === null || _a === void 0 ? void 0 : _a["@_fontSize"]) !== null && _b !== void 0 ? _b : DEFAULT_FONT_SIZE) - 1);
            });
        });
    }, [editShapeStyle, validateFontSize]);
    var onChange = (0, react_1.useCallback)(function (event) {
        editShapeStyle(function (shapes) {
            shapes.forEach(function (shape) {
                shape["di:Style"]["@_fontSize"] = +event.target.value;
            });
        });
    }, [editShapeStyle]);
    var onPlus = (0, react_1.useCallback)(function () {
        editShapeStyle(function (shapes) {
            shapes.forEach(function (shape) {
                var _a, _b;
                shape["di:Style"]["@_fontSize"] = validateFontSize(((_b = (_a = shape["di:Style"]) === null || _a === void 0 ? void 0 : _a["@_fontSize"]) !== null && _b !== void 0 ? _b : DEFAULT_FONT_SIZE) + 1);
            });
        });
    }, [editShapeStyle, validateFontSize]);
    var onChangeBold = (0, react_1.useCallback)(function () {
        editShapeStyle(function (shapes) {
            shapes.forEach(function (shape) {
                var _a, _b;
                shape["di:Style"]["@_fontBold"] = (_b = !((_a = shape === null || shape === void 0 ? void 0 : shape["di:Style"]) === null || _a === void 0 ? void 0 : _a["@_fontBold"])) !== null && _b !== void 0 ? _b : true;
            });
        });
    }, [editShapeStyle]);
    var onChangeItalic = (0, react_1.useCallback)(function () {
        editShapeStyle(function (shapes) {
            shapes.forEach(function (shape) {
                var _a, _b;
                shape["di:Style"]["@_fontItalic"] = (_b = !((_a = shape === null || shape === void 0 ? void 0 : shape["di:Style"]) === null || _a === void 0 ? void 0 : _a["@_fontItalic"])) !== null && _b !== void 0 ? _b : true;
            });
        });
    }, [editShapeStyle]);
    var onChangeUnderline = (0, react_1.useCallback)(function () {
        editShapeStyle(function (shapes) {
            shapes.forEach(function (shape) {
                var _a, _b;
                shape["di:Style"]["@_fontUnderline"] = (_b = !((_a = shape === null || shape === void 0 ? void 0 : shape["di:Style"]) === null || _a === void 0 ? void 0 : _a["@_fontUnderline"])) !== null && _b !== void 0 ? _b : true;
            });
        });
    }, [editShapeStyle]);
    var onChangeStrikeThrough = (0, react_1.useCallback)(function () {
        editShapeStyle(function (shapes) {
            shapes.forEach(function (shape) {
                var _a, _b;
                shape["di:Style"]["@_fontStrikeThrough"] = (_b = !((_a = shape === null || shape === void 0 ? void 0 : shape["di:Style"]) === null || _a === void 0 ? void 0 : _a["@_fontStrikeThrough"])) !== null && _b !== void 0 ? _b : true;
            });
        });
    }, [editShapeStyle]);
    var colorPickerRef = React.useRef(null);
    var _d = __read((0, react_1.useState)("000000"), 2), temporaryFontColor = _d[0], setTemporaryFontColor = _d[1];
    var onChangeColor = (0, react_1.useCallback)(function (newColor) {
        setTemporaryFontColor(newColor.replace("#", ""));
        editShapeStyle(function (shapes, state) {
            state.diagram.editingStyle = true;
        });
    }, [editShapeStyle]);
    (0, react_1.useEffect)(function () {
        var timeout = setTimeout(function () {
            var red = parseInt(temporaryFontColor.slice(0, 2), 16);
            var green = parseInt(temporaryFontColor.slice(2, 4), 16);
            var blue = parseInt(temporaryFontColor.slice(4, 6), 16);
            editShapeStyle(function (shapes, state) {
                shapes.forEach(function (shape) {
                    var _a, _b, _c, _d, _e, _f, _g;
                    var _h;
                    if (red !== ((_b = (_a = shape === null || shape === void 0 ? void 0 : shape["di:Style"]) === null || _a === void 0 ? void 0 : _a["dmndi:FontColor"]) === null || _b === void 0 ? void 0 : _b["@_red"]) &&
                        green !== ((_d = (_c = shape === null || shape === void 0 ? void 0 : shape["di:Style"]) === null || _c === void 0 ? void 0 : _c["dmndi:FontColor"]) === null || _d === void 0 ? void 0 : _d["@_green"]) &&
                        blue !== ((_f = (_e = shape === null || shape === void 0 ? void 0 : shape["di:Style"]) === null || _e === void 0 ? void 0 : _e["dmndi:FontColor"]) === null || _f === void 0 ? void 0 : _f["@_blue"])) {
                        state.diagram.editingStyle = false;
                        (_g = (_h = shape["di:Style"])["dmndi:FontColor"]) !== null && _g !== void 0 ? _g : (_h["dmndi:FontColor"] = { "@_blue": 0, "@_green": 0, "@_red": 0 });
                        shape["di:Style"]["dmndi:FontColor"]["@_red"] = red;
                        shape["di:Style"]["dmndi:FontColor"]["@_green"] = green;
                        shape["di:Style"]["dmndi:FontColor"]["@_blue"] = blue;
                    }
                });
            });
        }, 0);
        return function () {
            clearTimeout(timeout);
        };
    }, [editShapeStyle, temporaryFontColor]);
    var onReset = (0, react_1.useCallback)(function () {
        setTemporaryFontColor("000000");
        editShapeStyle(function (shapes, state) {
            state.diagram.editingStyle = false;
            shapes.forEach(function (shape) {
                shape["di:Style"]["@_fontBold"] = undefined;
                shape["di:Style"]["@_fontItalic"] = undefined;
                shape["di:Style"]["@_fontUnderline"] = undefined;
                shape["di:Style"]["@_fontStrikeThrough"] = undefined;
                shape["di:Style"]["@_fontSize"] = undefined;
                shape["di:Style"]["@_fontFamily"] = undefined;
            });
        });
    }, [editShapeStyle]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(PropertiesPanelHeader_1.PropertiesPanelHeader, { icon: (0, jsx_runtime_1.jsx)(pencil_alt_icon_1.PencilAltIcon, { width: 16, height: 36, style: { marginLeft: "12px" } }), expands: true, fixed: false, isSectionExpanded: isStyleSectionExpanded, toogleSectionExpanded: function () { return setStyleSectionExpanded(function (prev) { return !prev; }); }, title: "Font", action: (0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, __assign({ content: "Reset" }, { children: (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.plain, onClick: function () { return onReset(); }, style: { paddingBottom: 0, paddingTop: 0 } }, { children: (0, jsx_runtime_1.jsx)(undo_alt_icon_1.UndoAltIcon, {}) })) })) }), isStyleSectionExpanded && ((0, jsx_runtime_1.jsx)(Form_1.FormSection, __assign({ style: { paddingLeft: "20px", marginTop: "0px" } }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex", flexDirection: "column" } }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "kie-dmn-editor--font-options-toggle-group" }, { children: [(0, jsx_runtime_1.jsx)(NumberInput_1.NumberInput, { "aria-label": "Font size", className: "kie-dmn-editor--font-options-toggle-group-item-number-input", value: fontSize, isDisabled: false, widthChars: 2, onMinus: onMinus, onChange: onChange, onPlus: onPlus, inputName: "Font size", inputAriaLabel: "Font size", minusBtnAriaLabel: "minus", plusBtnAriaLabel: "plus" }), (0, jsx_runtime_1.jsxs)(ToggleGroup_1.ToggleGroup, __assign({ areAllGroupsDisabled: false, "aria-label": "Default with multiple selectable" }, { children: [(0, jsx_runtime_1.jsx)(ToggleGroup_1.ToggleGroupItem, { "aria-label": "Toggle font bold", className: "kie-dmn-editor--font-options-toggle-group-item", text: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("b", { children: "B" }) }), buttonId: FontStyleToggleOptions.BOLD, isSelected: isFontBold, onChange: onChangeBold }, FontStyleToggleOptions.BOLD), (0, jsx_runtime_1.jsx)(ToggleGroup_1.ToggleGroupItem, { "aria-label": "Toggle font italic", className: "kie-dmn-editor--font-options-toggle-group-item-italic", text: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("i", __assign({ style: { fontFamily: "serif" } }, { children: "I" })) }), buttonId: FontStyleToggleOptions.ITALIC, isSelected: isFontItalic, onChange: onChangeItalic }, FontStyleToggleOptions.ITALIC), (0, jsx_runtime_1.jsx)(ToggleGroup_1.ToggleGroupItem, { className: "kie-dmn-editor--font-options-toggle-group-item", text: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("u", { children: "U" }) }), "aria-label": "Toggle font underline", buttonId: FontStyleToggleOptions.UNDERLINE, isSelected: isFontUnderline, onChange: onChangeUnderline }, FontStyleToggleOptions.UNDERLINE), (0, jsx_runtime_1.jsx)(ToggleGroup_1.ToggleGroupItem, { className: "kie-dmn-editor--font-options-toggle-group-item", text: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", __assign({ style: { textDecoration: "line-through" } }, { children: "S" })) }), "aria-label": "Toggle font strike through", buttonId: FontStyleToggleOptions.STRIKE_THROUGH, isSelected: isFontStrikeThrough, onChange: onChangeStrikeThrough }, FontStyleToggleOptions.STRIKE_THROUGH), (0, jsx_runtime_1.jsx)(ToggleGroup_1.ToggleGroupItem, { className: "kie-dmn-editor--font-options-toggle-group-item-color-picker", "aria-label": "Toggle font strike through", buttonId: FontStyleToggleOptions.FONT_COLOR, onClick: function () { var _a; return (_a = colorPickerRef.current) === null || _a === void 0 ? void 0 : _a.click(); }, text: (0, jsx_runtime_1.jsx)(ColorPicker_1.ColorPicker, { icon: (0, jsx_runtime_1.jsx)("p", { children: "A" }), colorPickerRef: colorPickerRef, color: fontColor, onChange: onChangeColor }) }, FontStyleToggleOptions.FONT_COLOR)] }))] })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(Select_1.Select, __assign({ toggleRef: toggleRef, variant: Select_1.SelectVariant.single, "aria-label": "Select font style", isOpen: isFontFamilySelectOpen, onSelect: onSelectFont, onToggle: function () { return setFontFamilySelectOpen(function (prev) { return !prev; }); }, selections: fontFamily !== null && fontFamily !== void 0 ? fontFamily : "", isDisabled: false, maxHeight: inViewTimezoneSelect.maxHeight, direction: inViewTimezoneSelect.direction }, { children: WEBSAFE_FONTS_LIST.map(function (fontName, index) { return ((0, jsx_runtime_1.jsx)(Select_1.SelectOption, { value: fontName, style: { fontFamily: fontName } }, index)); }) }))] })) })))] }));
}
exports.FontOptions = FontOptions;
//# sourceMappingURL=FontOptions.js.map