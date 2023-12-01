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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalNodesPanel = exports.MIME_TYPE_FOR_DMN_EDITOR_EXTERNAL_NODES_FROM_INCLUDED_MODELS = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Store_1 = require("../store/Store");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var DerivedStore_1 = require("../store/DerivedStore");
var xmlHrefs_1 = require("../xml/xmlHrefs");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var cubes_icon_1 = require("@patternfly/react-icons/dist/js/icons/cubes-icon");
var DmnObjectListItem_1 = require("./DmnObjectListItem");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var Divider_1 = require("@patternfly/react-core/dist/js/components/Divider");
var IncludedModels_1 = require("../includedModels/IncludedModels");
var DmnEditorContext_1 = require("../DmnEditorContext");
var SearchInput_1 = require("@patternfly/react-core/dist/js/components/SearchInput");
var times_icon_1 = require("@patternfly/react-icons/dist/js/icons/times-icon");
exports.MIME_TYPE_FOR_DMN_EDITOR_EXTERNAL_NODES_FROM_INCLUDED_MODELS = "kie-dmn-editor--external-node-from-included-models";
function ExternalNodesPanel() {
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var _a = (0, DerivedStore_1.useDmnEditorDerivedStore)(), dmnShapesByHref = _a.dmnShapesByHref, externalDmnsByNamespace = _a.externalDmnsByNamespace, importsByNamespace = _a.importsByNamespace;
    var onRequestToResolvePath = (0, DmnEditorContext_1.useDmnEditor)().onRequestToResolvePath;
    var onDragStart = (0, react_1.useCallback)(function (event, externalNode) {
        event.dataTransfer.setData(exports.MIME_TYPE_FOR_DMN_EDITOR_EXTERNAL_NODES_FROM_INCLUDED_MODELS, JSON.stringify(externalNode));
        event.dataTransfer.effectAllowed = "move";
    }, []);
    var _b = __read((0, react_1.useState)(""), 2), filter = _b[0], setFilter = _b[1];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [externalDmnsByNamespace.size === 0 && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(EmptyState_1.EmptyState, { children: [(0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateIcon, { icon: cubes_icon_1.CubesIcon }), (0, jsx_runtime_1.jsx)(Title_1.Title, __assign({ size: "md", headingLevel: "h4" }, { children: "No external nodes available" })), (0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateBody, { children: "Maybe the included models have no exported nodes, or there are no included models." }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStatePrimary, { children: (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.link, onClick: function () {
                                    return dmnEditorStoreApi.setState(function (state) {
                                        state.navigation.tab = Store_1.DmnEditorTab.INCLUDED_MODELS;
                                    });
                                } }, { children: "Included model..." })) })] }) })), externalDmnsByNamespace.size > 0 && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "kie-dmn-editor--sticky-top-glass-header", style: { padding: "12px" } }, { children: [(0, jsx_runtime_1.jsxs)(Flex_1.Flex, __assign({ justifyContent: { default: "justifyContentSpaceBetween" } }, { children: [(0, jsx_runtime_1.jsx)(Text_1.TextContent, { children: (0, jsx_runtime_1.jsx)(Text_1.Text, __assign({ component: "h3" }, { children: "External nodes" })) }), (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.plain, onClick: function () {
                                            return dmnEditorStoreApi.setState(function (state) {
                                                state.diagram.openNodesPanel = Store_1.DiagramNodesPanel.NONE;
                                            });
                                        } }, { children: (0, jsx_runtime_1.jsx)(times_icon_1.TimesIcon, {}) }))] })), (0, jsx_runtime_1.jsx)(Divider_1.Divider, { style: { marginBottom: "12px" } }), (0, jsx_runtime_1.jsx)(SearchInput_1.SearchInput, { style: { marginBottom: "12px", height: "36px" }, onKeyDown: function (e) { return e.stopPropagation(); }, autoFocus: true, placeholder: "Filter...", value: filter, onChange: function (_event, value) { return setFilter(value); }, onClear: function () { return setFilter(""); } })] })), (0, jsx_runtime_1.jsx)("div", __assign({ style: { padding: "12px" } }, { children: __spreadArray([], __read(externalDmnsByNamespace.entries()), false).flatMap(function (_a) {
                            var _b, _c, _d, _e;
                            var _f = __read(_a, 2), namespace = _f[0], externalDmn = _f[1];
                            var externalDmnDefinitions = externalDmn.model.definitions;
                            var _import = importsByNamespace.get(namespace);
                            if (!_import) {
                                console.debug("DMN EDITOR: Couldn't find import for namespace '".concat(namespace, "', although there's an external DMN referncing it."));
                                return [];
                            }
                            var nodes = (_b = externalDmnDefinitions.drgElement) === null || _b === void 0 ? void 0 : _b.filter(function (drgElement) { return drgElement["@_name"].toLowerCase().includes(filter.toLowerCase()); }).map(function (drgElement) {
                                var dmnObjectHref = (0, xmlHrefs_1.buildXmlHref)({ namespace: namespace, id: drgElement["@_id"] });
                                var isAlreadyIncluded = dmnShapesByHref.has(dmnObjectHref);
                                return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--external-nodes-list-item", draggable: !isAlreadyIncluded, style: { opacity: isAlreadyIncluded ? "0.4" : undefined }, onDragStart: function (event) {
                                        return onDragStart(event, {
                                            externalDrgElementNamespace: namespace,
                                            externalDrgElementId: drgElement["@_id"],
                                        });
                                    } }, { children: (0, jsx_runtime_1.jsx)(Flex_1.Flex, __assign({ alignItems: { default: "alignItemsCenter" }, justifyContent: { default: "justifyContentFlexStart" }, spaceItems: { default: "spaceItemsNone" } }, { children: (0, jsx_runtime_1.jsx)(DmnObjectListItem_1.DmnObjectListItem, { dmnObjectHref: dmnObjectHref, dmnObject: drgElement, namespace: namespace, relativeToNamespace: namespace }) })) }), drgElement["@_id"]));
                            });
                            if (((_c = nodes === null || nodes === void 0 ? void 0 : nodes.length) !== null && _c !== void 0 ? _c : 0) <= 0) {
                                return [];
                            }
                            return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "kie-dmn-editor--external-nodes-section" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "kie-dmn-editor--external-nodes-section-title" }, { children: [(0, jsx_runtime_1.jsx)("b", { children: "".concat(externalDmnDefinitions["@_name"]) }), " ", "(", _import["@_name"] || (0, jsx_runtime_1.jsx)("i", __assign({ style: { color: "gray" } }, { children: IncludedModels_1.EMPTY_IMPORT_NAME_NAMESPACE_IDENTIFIER })), ")", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("small", { children: (0, jsx_runtime_1.jsx)("i", { children: (_e = (_d = onRequestToResolvePath === null || onRequestToResolvePath === void 0 ? void 0 : onRequestToResolvePath(externalDmn.relativePath)) !== null && _d !== void 0 ? _d : externalDmn.relativePath) !== null && _e !== void 0 ? _e : "" }) })] })), nodes] }), externalDmnDefinitions["@_id"]));
                        }) }))] }))] }));
}
exports.ExternalNodesPanel = ExternalNodesPanel;
//# sourceMappingURL=ExternalNodesPanel.js.map