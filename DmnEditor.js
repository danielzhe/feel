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
exports.useStateAsItWasBeforeConditionBecameTrue = exports.usePrevious = exports.DmnEditor = exports.DmnEditorInternal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("@patternfly/react-core/dist/styles/base.css");
require("reactflow/dist/style.css");
var React = __importStar(require("react"));
var react_1 = require("react");
var Drawer_1 = require("@patternfly/react-core/dist/js/components/Drawer");
var Tabs_1 = require("@patternfly/react-core/dist/js/components/Tabs");
var file_icon_1 = require("@patternfly/react-icons/dist/js/icons/file-icon");
var infrastructure_icon_1 = require("@patternfly/react-icons/dist/js/icons/infrastructure-icon");
var pficon_template_icon_1 = require("@patternfly/react-icons/dist/js/icons/pficon-template-icon");
var BoxedExpression_1 = require("./boxedExpressions/BoxedExpression");
var DataTypes_1 = require("./dataTypes/DataTypes");
var Diagram_1 = require("./diagram/Diagram");
var DmnVersionLabel_1 = require("./diagram/DmnVersionLabel");
var IncludedModels_1 = require("./includedModels/IncludedModels");
var DiagramPropertiesPanel_1 = require("./propertiesPanel/DiagramPropertiesPanel");
var Store_1 = require("./store/Store");
var useEffectAfterFirstRender_1 = require("./useEffectAfterFirstRender");
var Label_1 = require("@patternfly/react-core/dist/js/components/Label");
var BeePropertiesPanel_1 = require("./propertiesPanel/BeePropertiesPanel");
var DerivedStore_1 = require("./store/DerivedStore");
var DmnEditorContext_1 = require("./DmnEditorContext");
var DmnEditorDependenciesContext_1 = require("./includedModels/DmnEditorDependenciesContext");
var react_error_boundary_1 = require("react-error-boundary");
var DmnEditorErrorFallback_1 = require("./DmnEditorErrorFallback");
var immer_1 = require("immer");
require("@kie-tools/dmn-marshaller/dist/kie-extensions");
require("./DmnEditor.css");
var ON_MODEL_CHANGE_DEBOUNCE_TIME_IN_MS = 500;
var DmnEditorInternal = function (_a) {
    var _b, _c;
    var model = _a.model, originalVersion = _a.originalVersion, onModelChange = _a.onModelChange, forwardRef = _a.forwardRef;
    var _d = (0, Store_1.useDmnEditorStore)(function (s) { return s; }), boxedExpressionEditor = _d.boxedExpressionEditor, dmn = _d.dmn, navigation = _d.navigation, dispatch = _d.dispatch, diagram = _d.diagram;
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var isDiagramEditingInProgress = (0, DerivedStore_1.useDmnEditorDerivedStore)().isDiagramEditingInProgress;
    var _e = (0, DmnEditorContext_1.useDmnEditor)(), dmnModelBeforeEditingRef = _e.dmnModelBeforeEditingRef, dmnEditorRootElementRef = _e.dmnEditorRootElementRef;
    (0, react_1.useImperativeHandle)(forwardRef, function () { return ({
        reset: function (model) { return dispatch.dmn.reset(model); },
    }); }, [dispatch.dmn]);
    (0, useEffectAfterFirstRender_1.useEffectAfterFirstRender)(function () {
        dmnEditorStoreApi.setState(function (state) {
            if (model === (0, immer_1.original)(state.dmn.model)) {
                return;
            }
            state.dmn.model = model;
            dmnModelBeforeEditingRef.current = model;
        });
    }, [dmnEditorStoreApi, dispatch.dmn, model]);
    useStateAsItWasBeforeConditionBecameTrue(dmn.model, isDiagramEditingInProgress, (0, react_1.useCallback)(function (prev) { return (dmnModelBeforeEditingRef.current = prev); }, [dmnModelBeforeEditingRef]));
    (0, useEffectAfterFirstRender_1.useEffectAfterFirstRender)(function () {
        if (isDiagramEditingInProgress) {
            return;
        }
        var timeout = setTimeout(function () {
            if (model === dmn.model) {
                return;
            }
            console.debug("DMN EDITOR: Model changed!");
            onModelChange === null || onModelChange === void 0 ? void 0 : onModelChange(dmn.model);
        }, ON_MODEL_CHANGE_DEBOUNCE_TIME_IN_MS);
        return function () {
            clearTimeout(timeout);
        };
    }, [isDiagramEditingInProgress, onModelChange, dmn.model]);
    var onTabChanged = (0, react_1.useCallback)(function (e, tab) {
        dmnEditorStoreApi.setState(function (state) {
            var _a, _b, _c;
            state.navigation.tab = tab;
            if (tab === Store_1.DmnEditorTab.DATA_TYPES) {
                state.dataTypesEditor.activeItemDefinitionId =
                    (_a = state.dataTypesEditor.activeItemDefinitionId) !== null && _a !== void 0 ? _a : (_c = (_b = state.dmn.model.definitions.itemDefinition) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c["@_id"];
            }
        });
    }, [dmnEditorStoreApi]);
    var diagramContainerRef = (0, react_1.useRef)(null);
    var beeContainerRef = (0, react_1.useRef)(null);
    var tabTitle = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d;
        return {
            editor: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Tabs_1.TabTitleIcon, { children: (0, jsx_runtime_1.jsx)(pficon_template_icon_1.PficonTemplateIcon, {}) }), (0, jsx_runtime_1.jsx)(Tabs_1.TabTitleText, { children: "Editor" })] })),
            dataTypes: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Tabs_1.TabTitleIcon, { children: (0, jsx_runtime_1.jsx)(infrastructure_icon_1.InfrastructureIcon, {}) }), (0, jsx_runtime_1.jsxs)(Tabs_1.TabTitleText, { children: ["Data types\u00A0\u00A0", (0, jsx_runtime_1.jsx)(Label_1.Label, __assign({ style: { padding: "0 12px" } }, { children: (_b = (_a = dmn.model.definitions.itemDefinition) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0 }))] })] })),
            includedModels: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Tabs_1.TabTitleIcon, { children: (0, jsx_runtime_1.jsx)(file_icon_1.FileIcon, {}) }), (0, jsx_runtime_1.jsxs)(Tabs_1.TabTitleText, { children: ["Included models\u00A0\u00A0", (0, jsx_runtime_1.jsx)(Label_1.Label, __assign({ style: { padding: "0 12px" } }, { children: (_d = (_c = dmn.model.definitions.import) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0 }))] })] })),
        };
    }, [(_b = dmn.model.definitions.import) === null || _b === void 0 ? void 0 : _b.length, (_c = dmn.model.definitions.itemDefinition) === null || _c === void 0 ? void 0 : _c.length]);
    var diagramPropertiesPanel = (0, react_1.useMemo)(function () { return (0, jsx_runtime_1.jsx)(DiagramPropertiesPanel_1.DiagramPropertiesPanel, {}); }, []);
    var beePropertiesPanel = (0, react_1.useMemo)(function () { return (0, jsx_runtime_1.jsx)(BeePropertiesPanel_1.BeePropertiesPanel, {}); }, []);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: dmnEditorRootElementRef, className: "kie-dmn-editor--root" }, { children: (0, jsx_runtime_1.jsxs)(Tabs_1.Tabs, __assign({ isFilled: true, activeKey: navigation.tab, onSelect: onTabChanged, role: "region", className: "kie-dmn-editor--tabs" }, { children: [(0, jsx_runtime_1.jsx)(Tabs_1.Tab, __assign({ eventKey: Store_1.DmnEditorTab.EDITOR, title: tabTitle.editor }, { children: navigation.tab === Store_1.DmnEditorTab.EDITOR && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [!boxedExpressionEditor.activeDrgElementId && ((0, jsx_runtime_1.jsx)(Drawer_1.Drawer, __assign({ isExpanded: diagram.propertiesPanel.isOpen, isInline: true, position: "right" }, { children: (0, jsx_runtime_1.jsx)(Drawer_1.DrawerContent, __assign({ panelContent: diagramPropertiesPanel }, { children: (0, jsx_runtime_1.jsx)(Drawer_1.DrawerContentBody, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "kie-dmn-editor--diagram-container", ref: diagramContainerRef }, { children: [originalVersion && (0, jsx_runtime_1.jsx)(DmnVersionLabel_1.DmnVersionLabel, { version: originalVersion }), (0, jsx_runtime_1.jsx)(Diagram_1.Diagram, { container: diagramContainerRef })] })) }) })) }))), boxedExpressionEditor.activeDrgElementId && ((0, jsx_runtime_1.jsx)(Drawer_1.Drawer, __assign({ isExpanded: boxedExpressionEditor.propertiesPanel.isOpen, isInline: true, position: "right" }, { children: (0, jsx_runtime_1.jsx)(Drawer_1.DrawerContent, __assign({ panelContent: beePropertiesPanel }, { children: (0, jsx_runtime_1.jsx)(Drawer_1.DrawerContentBody, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--bee-container", ref: beeContainerRef }, { children: (0, jsx_runtime_1.jsx)(BoxedExpression_1.BoxedExpression, { container: beeContainerRef }) })) }) })) })))] })) })), (0, jsx_runtime_1.jsx)(Tabs_1.Tab, __assign({ eventKey: Store_1.DmnEditorTab.DATA_TYPES, title: tabTitle.dataTypes }, { children: navigation.tab === Store_1.DmnEditorTab.DATA_TYPES && (0, jsx_runtime_1.jsx)(DataTypes_1.DataTypes, {}) })), (0, jsx_runtime_1.jsx)(Tabs_1.Tab, __assign({ eventKey: Store_1.DmnEditorTab.INCLUDED_MODELS, title: tabTitle.includedModels }, { children: navigation.tab === Store_1.DmnEditorTab.INCLUDED_MODELS && (0, jsx_runtime_1.jsx)(IncludedModels_1.IncludedModels, {}) }))] })) })));
};
exports.DmnEditorInternal = DmnEditorInternal;
exports.DmnEditor = React.forwardRef(function (props, ref) {
    var storeRef = React.useRef((0, Store_1.createDmnEditorStore)(props.model));
    var resetState = (0, react_1.useCallback)(function (_a) {
        var _b;
        var args = _a.args;
        (_b = storeRef.current) === null || _b === void 0 ? void 0 : _b.setState(function (state) {
            state.diagram = (0, Store_1.defaultStaticState)().diagram;
            state.dmn.model = args[0];
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)(DmnEditorContext_1.DmnEditorContextProvider, __assign({}, props, { children: (0, jsx_runtime_1.jsx)(react_error_boundary_1.ErrorBoundary, __assign({ FallbackComponent: DmnEditorErrorFallback_1.DmnEditorErrorFallback, onReset: resetState }, { children: (0, jsx_runtime_1.jsx)(DmnEditorDependenciesContext_1.DmnEditorExternalModelsContextProvider, __assign({}, props, { children: (0, jsx_runtime_1.jsx)(Store_1.DmnEditorStoreApiContext.Provider, __assign({ value: storeRef.current }, { children: (0, jsx_runtime_1.jsx)(DerivedStore_1.DmnEditorDerivedStoreContextProvider, { children: (0, jsx_runtime_1.jsx)(exports.DmnEditorInternal, __assign({ forwardRef: ref }, props)) }) })) })) })) })));
});
function usePrevious(value) {
    var _a = __read((0, react_1.useState)(value), 2), current = _a[0], setCurrent = _a[1];
    var _b = __read((0, react_1.useState)(value), 2), previous = _b[0], setPrevious = _b[1];
    if (value !== current) {
        setPrevious(current);
        setCurrent(value);
    }
    return previous;
}
exports.usePrevious = usePrevious;
function useStateAsItWasBeforeConditionBecameTrue(state, condition, set) {
    var previous = usePrevious(state);
    (0, react_1.useEffect)(function () {
        if (condition) {
            console.debug("HOOK: `useStateBeforeCondition` --> ASSIGN");
            set(previous);
        }
    }, [condition, set]);
}
exports.useStateAsItWasBeforeConditionBecameTrue = useStateAsItWasBeforeConditionBecameTrue;
//# sourceMappingURL=DmnEditor.js.map