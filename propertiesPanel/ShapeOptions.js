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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeOptions = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("react");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
var cube_icon_1 = require("@patternfly/react-icons/dist/js/icons/cube-icon");
var PropertiesPanelHeader_1 = require("./PropertiesPanelHeader");
var DerivedStore_1 = require("../store/DerivedStore");
var Store_1 = require("../store/Store");
var addOrGetDrd_1 = require("../mutations/addOrGetDrd");
var arrows_alt_v_icon_1 = require("@patternfly/react-icons/dist/js/icons/arrows-alt-v-icon");
var arrows_alt_h_icon_1 = require("@patternfly/react-icons/dist/js/icons/arrows-alt-h-icon");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var undo_alt_icon_1 = __importDefault(require("@patternfly/react-icons/dist/js/icons/undo-alt-icon"));
var ColorPicker_1 = require("./ColorPicker");
var ToggleGroup_1 = require("@patternfly/react-core/dist/js/components/ToggleGroup");
require("./ShapeOptions.css");
function ShapeOptions(_a) {
    var startExpanded = _a.startExpanded, nodeIds = _a.nodeIds, isDimensioningEnabled = _a.isDimensioningEnabled, isPositioningEnabled = _a.isPositioningEnabled;
    var _b = __read((0, react_1.useState)(startExpanded), 2), isShapeSectionExpanded = _b[0], setShapeSectionExpanded = _b[1];
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var dmnShapesByHref = (0, DerivedStore_1.useDmnEditorDerivedStore)().dmnShapesByHref;
    var shapes = (0, react_1.useMemo)(function () { return nodeIds.map(function (nodeId) { return dmnShapesByHref.get(nodeId); }); }, [dmnShapesByHref, nodeIds]);
    var shapesBound = (0, react_1.useMemo)(function () { var _a; return (_a = shapes[0]) === null || _a === void 0 ? void 0 : _a["dc:Bounds"]; }, [shapes]);
    var shapesStyle = (0, react_1.useMemo)(function () { return shapes.map(function (shape) { return shape === null || shape === void 0 ? void 0 : shape["di:Style"]; }); }, [shapes]);
    var boundWidth = (0, react_1.useMemo)(function () { var _a, _b; return +((_b = (_a = shapesBound === null || shapesBound === void 0 ? void 0 : shapesBound["@_width"]) === null || _a === void 0 ? void 0 : _a.toFixed(2)) !== null && _b !== void 0 ? _b : ""); }, [shapesBound]);
    var boundHeight = (0, react_1.useMemo)(function () { var _a, _b; return +((_b = (_a = shapesBound === null || shapesBound === void 0 ? void 0 : shapesBound["@_height"]) === null || _a === void 0 ? void 0 : _a.toFixed(2)) !== null && _b !== void 0 ? _b : ""); }, [shapesBound]);
    var boundPositionX = (0, react_1.useMemo)(function () { var _a, _b; return +((_b = (_a = shapesBound === null || shapesBound === void 0 ? void 0 : shapesBound["@_x"]) === null || _a === void 0 ? void 0 : _a.toFixed(2)) !== null && _b !== void 0 ? _b : ""); }, [shapesBound]);
    var boundPositionY = (0, react_1.useMemo)(function () { var _a, _b; return +((_b = (_a = shapesBound === null || shapesBound === void 0 ? void 0 : shapesBound["@_y"]) === null || _a === void 0 ? void 0 : _a.toFixed(2)) !== null && _b !== void 0 ? _b : ""); }, [shapesBound]);
    var fillColor = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var b = ((_c = (_b = (_a = shapesStyle[0]) === null || _a === void 0 ? void 0 : _a["dmndi:FillColor"]) === null || _b === void 0 ? void 0 : _b["@_blue"]) !== null && _c !== void 0 ? _c : 255).toString(16);
        var g = ((_f = (_e = (_d = shapesStyle[0]) === null || _d === void 0 ? void 0 : _d["dmndi:FillColor"]) === null || _e === void 0 ? void 0 : _e["@_green"]) !== null && _f !== void 0 ? _f : 255).toString(16);
        var r = ((_j = (_h = (_g = shapesStyle[0]) === null || _g === void 0 ? void 0 : _g["dmndi:FillColor"]) === null || _h === void 0 ? void 0 : _h["@_red"]) !== null && _j !== void 0 ? _j : 255).toString(16);
        return "#".concat(r.length === 1 ? "0" + r : r).concat(g.length === 1 ? "0" + g : g).concat(b.length === 1 ? "0" + b : b);
    }, [shapesStyle]);
    var strokeColor = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var b = ((_c = (_b = (_a = shapesStyle[0]) === null || _a === void 0 ? void 0 : _a["dmndi:StrokeColor"]) === null || _b === void 0 ? void 0 : _b["@_blue"]) !== null && _c !== void 0 ? _c : 0).toString(16);
        var g = ((_f = (_e = (_d = shapesStyle[0]) === null || _d === void 0 ? void 0 : _d["dmndi:StrokeColor"]) === null || _e === void 0 ? void 0 : _e["@_green"]) !== null && _f !== void 0 ? _f : 0).toString(16);
        var r = ((_j = (_h = (_g = shapesStyle[0]) === null || _g === void 0 ? void 0 : _g["dmndi:StrokeColor"]) === null || _h === void 0 ? void 0 : _h["@_red"]) !== null && _j !== void 0 ? _j : 0).toString(16);
        return "#".concat(r.length === 1 ? "0" + r : r).concat(g.length === 1 ? "0" + g : g).concat(b.length === 1 ? "0" + b : b);
    }, [shapesStyle]);
    var editNodeBound = (0, react_1.useCallback)(function (callback) {
        dmnEditorStoreApi.setState(function (state) {
            var _a, _b;
            var diagramElements = (0, addOrGetDrd_1.addOrGetDrd)({
                definitions: state.dmn.model.definitions,
                drdIndex: state.diagram.drdIndex,
            }).diagramElements;
            var shape = diagramElements === null || diagramElements === void 0 ? void 0 : diagramElements[(_b = (_a = shapes[0]) === null || _a === void 0 ? void 0 : _a.index) !== null && _b !== void 0 ? _b : 0];
            callback(shape === null || shape === void 0 ? void 0 : shape["dc:Bounds"], state);
        });
    }, [dmnEditorStoreApi, shapes]);
    var onChangeWidth = (0, react_1.useCallback)(function (newWidth) {
        editNodeBound(function (bound) {
            bound["@_width"] = +parseFloat(newWidth).toFixed(2);
        });
    }, [editNodeBound]);
    var onChangeHeight = (0, react_1.useCallback)(function (newHeight) {
        editNodeBound(function (bound) {
            bound["@_height"] = +parseFloat(newHeight).toFixed(2);
        });
    }, [editNodeBound]);
    var onChangePositionX = (0, react_1.useCallback)(function (newX) {
        editNodeBound(function (bound) {
            bound["@_x"] = +parseFloat(newX).toFixed(2);
        });
    }, [editNodeBound]);
    var onChangePositionY = (0, react_1.useCallback)(function (newY) {
        editNodeBound(function (bound) {
            bound["@_y"] = +parseFloat(newY).toFixed(2);
        });
    }, [editNodeBound]);
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
    var _c = __read((0, react_1.useState)("000000"), 2), temporaryStrokeColor = _c[0], setTemporaryStrokeColor = _c[1];
    var onChangeStrokeColor = (0, react_1.useCallback)(function (newColor) {
        setTemporaryStrokeColor(newColor.replace("#", ""));
        editShapeStyle(function (shapes, state) {
            state.diagram.editingStyle = true;
        });
    }, [editShapeStyle]);
    (0, react_1.useEffect)(function () {
        var timeout = setTimeout(function () {
            var red = parseInt(temporaryStrokeColor.slice(0, 2), 16);
            var green = parseInt(temporaryStrokeColor.slice(2, 4), 16);
            var blue = parseInt(temporaryStrokeColor.slice(4, 6), 16);
            editShapeStyle(function (shapes, state) {
                shapes.forEach(function (shape) {
                    var _a, _b, _c, _d, _e, _f, _g;
                    var _h;
                    if (red !== ((_b = (_a = shape === null || shape === void 0 ? void 0 : shape["di:Style"]) === null || _a === void 0 ? void 0 : _a["dmndi:StrokeColor"]) === null || _b === void 0 ? void 0 : _b["@_red"]) &&
                        green !== ((_d = (_c = shape === null || shape === void 0 ? void 0 : shape["di:Style"]) === null || _c === void 0 ? void 0 : _c["dmndi:StrokeColor"]) === null || _d === void 0 ? void 0 : _d["@_green"]) &&
                        blue !== ((_f = (_e = shape === null || shape === void 0 ? void 0 : shape["di:Style"]) === null || _e === void 0 ? void 0 : _e["dmndi:StrokeColor"]) === null || _f === void 0 ? void 0 : _f["@_blue"])) {
                        state.diagram.editingStyle = false;
                        (_g = (_h = shape["di:Style"])["dmndi:StrokeColor"]) !== null && _g !== void 0 ? _g : (_h["dmndi:StrokeColor"] = { "@_blue": 0, "@_green": 0, "@_red": 0 });
                        shape["di:Style"]["dmndi:StrokeColor"]["@_red"] = red;
                        shape["di:Style"]["dmndi:StrokeColor"]["@_green"] = green;
                        shape["di:Style"]["dmndi:StrokeColor"]["@_blue"] = blue;
                    }
                });
            });
        }, 0);
        return function () {
            clearTimeout(timeout);
        };
    }, [editShapeStyle, temporaryStrokeColor]);
    var _d = __read((0, react_1.useState)("ffffff"), 2), temporaryFillColor = _d[0], setTemporaryFillColor = _d[1];
    var onChangeFillColor = (0, react_1.useCallback)(function (newColor) {
        setTemporaryFillColor(newColor.replace("#", ""));
        editShapeStyle(function (shapes, state) {
            state.diagram.editingStyle = true;
        });
    }, [editShapeStyle]);
    (0, react_1.useEffect)(function () {
        var timeout = setTimeout(function () {
            var red = parseInt(temporaryFillColor.slice(0, 2), 16);
            var green = parseInt(temporaryFillColor.slice(2, 4), 16);
            var blue = parseInt(temporaryFillColor.slice(4, 6), 16);
            editShapeStyle(function (shapes, state) {
                shapes.forEach(function (shape) {
                    var _a, _b, _c, _d, _e, _f, _g;
                    var _h;
                    if (red !== ((_b = (_a = shape === null || shape === void 0 ? void 0 : shape["di:Style"]) === null || _a === void 0 ? void 0 : _a["dmndi:FillColor"]) === null || _b === void 0 ? void 0 : _b["@_red"]) &&
                        green !== ((_d = (_c = shape === null || shape === void 0 ? void 0 : shape["di:Style"]) === null || _c === void 0 ? void 0 : _c["dmndi:FillColor"]) === null || _d === void 0 ? void 0 : _d["@_green"]) &&
                        blue !== ((_f = (_e = shape === null || shape === void 0 ? void 0 : shape["di:Style"]) === null || _e === void 0 ? void 0 : _e["dmndi:FillColor"]) === null || _f === void 0 ? void 0 : _f["@_blue"])) {
                        state.diagram.editingStyle = false;
                        (_g = (_h = shape["di:Style"])["dmndi:FillColor"]) !== null && _g !== void 0 ? _g : (_h["dmndi:FillColor"] = { "@_blue": 255, "@_green": 255, "@_red": 255 });
                        shape["di:Style"]["dmndi:FillColor"]["@_red"] = red;
                        shape["di:Style"]["dmndi:FillColor"]["@_green"] = green;
                        shape["di:Style"]["dmndi:FillColor"]["@_blue"] = blue;
                    }
                });
            });
        }, 0);
        return function () {
            clearTimeout(timeout);
        };
    }, [editShapeStyle, temporaryFillColor]);
    var onReset = (0, react_1.useCallback)(function () {
        setTemporaryStrokeColor("000000");
        setTemporaryFillColor("ffffff");
    }, []);
    var strokeColorPickerRef = React.useRef(null);
    var fillColorPickerRef = React.useRef(null);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(PropertiesPanelHeader_1.PropertiesPanelHeader, { icon: (0, jsx_runtime_1.jsx)(cube_icon_1.CubeIcon, { width: 16, height: 36, style: { marginLeft: "12px" } }), expands: true, fixed: false, isSectionExpanded: isShapeSectionExpanded, toogleSectionExpanded: function () { return setShapeSectionExpanded(function (prev) { return !prev; }); }, title: "Shape" }), isShapeSectionExpanded && ((0, jsx_runtime_1.jsxs)(Form_1.FormSection, __assign({ style: { paddingLeft: "20px", marginTop: "0px" } }, { children: [(0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Style" }, { children: (0, jsx_runtime_1.jsxs)(ToggleGroup_1.ToggleGroup, { children: [(0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, __assign({ content: "Fill color" }, { children: (0, jsx_runtime_1.jsx)(ToggleGroup_1.ToggleGroupItem, { className: "kie-dmn-editor--shape-options-toggle-button", text: (0, jsx_runtime_1.jsx)(ColorPicker_1.ColorPicker, { icon: (0, jsx_runtime_1.jsx)("div", { style: {
                                                    backgroundColor: fillColor,
                                                    width: "20px",
                                                    height: "20px",
                                                    border: "dashed 1px black",
                                                    marginBottom: "-6px",
                                                } }), color: fillColor, onChange: function (newColor) { return onChangeFillColor(newColor); }, colorPickerRef: fillColorPickerRef }), buttonId: "shape-style-toggle-group-fill-color", onClick: function () {
                                            var _a;
                                            (_a = fillColorPickerRef.current) === null || _a === void 0 ? void 0 : _a.click();
                                        } }, "fill-color") })), (0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, __assign({ content: "Stroke color" }, { children: (0, jsx_runtime_1.jsx)(ToggleGroup_1.ToggleGroupItem, { className: "kie-dmn-editor--shape-options-toggle-button", text: (0, jsx_runtime_1.jsx)(ColorPicker_1.ColorPicker, { colorDisplay: (0, jsx_runtime_1.jsx)("div", { style: {
                                                    backgroundColor: "transparent",
                                                    width: "20px",
                                                    height: "20px",
                                                    border: "solid 4px",
                                                    borderColor: strokeColor,
                                                    marginBottom: "-6px",
                                                } }), color: strokeColor, onChange: function (newColor) { return onChangeStrokeColor(newColor); }, colorPickerRef: strokeColorPickerRef }), buttonId: "shape-style-toggle-group-stroke-color", onClick: function () {
                                            var _a;
                                            (_a = strokeColorPickerRef.current) === null || _a === void 0 ? void 0 : _a.click();
                                        } }, "stroke-color") })), (0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, __assign({ content: "Width" }, { children: (0, jsx_runtime_1.jsx)(ToggleGroup_1.ToggleGroupItem, { text: (0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                columnGap: "5px",
                                            } }, { children: [(0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { "aria-label": "Width", type: "number", isDisabled: isDimensioningEnabled ? false : true, value: isDimensioningEnabled ? boundWidth : undefined, placeholder: isDimensioningEnabled ? "Enter a value..." : undefined, onChange: onChangeWidth, style: { maxWidth: "80px", minWidth: "60px", border: "none", backgroundColor: "transparent" } }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(arrows_alt_h_icon_1.ArrowsAltHIcon, { "aria-label": "Width" }) })] })), buttonId: "shape-style-toggle-group-bound-width" }, "bound-width") })), (0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, __assign({ content: "Height" }, { children: (0, jsx_runtime_1.jsx)(ToggleGroup_1.ToggleGroupItem, { text: (0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" } }, { children: [(0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { "aria-label": "Height", type: "number", isDisabled: isDimensioningEnabled ? false : true, value: isDimensioningEnabled ? boundHeight : undefined, placeholder: isDimensioningEnabled ? "Enter a value..." : undefined, onChange: onChangeHeight, style: { maxWidth: "80px", minWidth: "60px", border: "none", backgroundColor: "transparent" } }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(arrows_alt_v_icon_1.ArrowsAltVIcon, { "aria-label": "Height" }) })] })), buttonId: "shape-style-toggle-group-bound-height" }, "bound-height") })), (0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, __assign({ content: "Reset" }, { children: (0, jsx_runtime_1.jsx)(ToggleGroup_1.ToggleGroupItem, { onClick: onReset, className: "kie-dmn-editor--shape-options-toggle-button", text: (0, jsx_runtime_1.jsx)(undo_alt_icon_1.default, {}), buttonId: "shape-style-toggle-group-reset" }, "reset") }))] }) })), isPositioningEnabled && ((0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Position" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                                display: "grid",
                                gridTemplateColumns: "auto auto auto auto",
                                gridTemplateRows: "auto",
                                gridTemplateAreas: "\n                'position-x-label position-x-value position-y-label position-y-value'\n            ",
                                columnGap: "5px",
                                alignItems: "center",
                            } }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ style: { gridArea: "position-x-value" } }, { children: (0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { "aria-label": "X", type: "number", isDisabled: false, value: boundPositionX, onChange: onChangePositionX, placeholder: "Enter a value..." }) })), (0, jsx_runtime_1.jsx)("div", __assign({ style: { gridArea: "position-x-label" } }, { children: (0, jsx_runtime_1.jsx)("p", { children: "X" }) })), (0, jsx_runtime_1.jsx)("div", __assign({ style: { gridArea: "position-y-value" } }, { children: (0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { "aria-label": "Y", type: "number", isDisabled: false, value: boundPositionY, onChange: onChangePositionY, placeholder: "Enter a value..." }) })), (0, jsx_runtime_1.jsx)("div", __assign({ style: { gridArea: "position-y-label" } }, { children: (0, jsx_runtime_1.jsx)("p", { children: "Y" }) }))] })) })))] })))] }));
}
exports.ShapeOptions = ShapeOptions;
//# sourceMappingURL=ShapeOptions.js.map