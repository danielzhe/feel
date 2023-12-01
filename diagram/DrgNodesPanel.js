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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrgNodesPanel = exports.MIME_TYPE_FOR_DMN_EDITOR_DRG_NODE = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var SearchInput_1 = require("@patternfly/react-core/dist/js/components/SearchInput");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var react_1 = require("react");
var Store_1 = require("../store/Store");
var xmlHrefs_1 = require("../xml/xmlHrefs");
var DmnObjectListItem_1 = require("../externalNodes/DmnObjectListItem");
var DerivedStore_1 = require("../store/DerivedStore");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button/Button");
var times_icon_1 = require("@patternfly/react-icons/dist/js/icons/times-icon");
exports.MIME_TYPE_FOR_DMN_EDITOR_DRG_NODE = "kie-dmn-editor--drg-node";
function DrgNodesPanel() {
    var _a;
    var thisDmn = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn; });
    var dmnShapesByHref = (0, DerivedStore_1.useDmnEditorDerivedStore)().dmnShapesByHref;
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var _b = __read((0, react_1.useState)(""), 2), filter = _b[0], setFilter = _b[1];
    var namespace = "";
    var onDragStart = (0, react_1.useCallback)(function (event, drgElement) {
        event.dataTransfer.setData(exports.MIME_TYPE_FOR_DMN_EDITOR_DRG_NODE, JSON.stringify(drgElement));
        event.dataTransfer.effectAllowed = "move";
    }, []);
    var nodes = (_a = thisDmn.model.definitions.drgElement) === null || _a === void 0 ? void 0 : _a.filter(function (drgElement) { return drgElement["@_name"].toLowerCase().includes(filter.toLowerCase()); }).map(function (drgElement) {
        var dmnObjectHref = (0, xmlHrefs_1.buildXmlHref)({ namespace: namespace, id: drgElement["@_id"] });
        var isAlreadyIncluded = dmnShapesByHref.has(dmnObjectHref);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--external-nodes-list-item", draggable: !isAlreadyIncluded, style: { opacity: isAlreadyIncluded ? "0.4" : undefined }, onDragStart: function (event) { return onDragStart(event, drgElement); } }, { children: (0, jsx_runtime_1.jsx)(Flex_1.Flex, __assign({ alignItems: { default: "alignItemsCenter" }, justifyContent: { default: "justifyContentFlexStart" }, spaceItems: { default: "spaceItemsNone" } }, { children: (0, jsx_runtime_1.jsx)(DmnObjectListItem_1.DmnObjectListItem, { dmnObjectHref: dmnObjectHref, dmnObject: drgElement, namespace: namespace, relativeToNamespace: namespace }) })) }), drgElement["@_id"]));
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "kie-dmn-editor--sticky-top-glass-header", style: { padding: "12px" } }, { children: [(0, jsx_runtime_1.jsxs)(Flex_1.Flex, __assign({ justifyContent: { default: "justifyContentSpaceBetween" } }, { children: [(0, jsx_runtime_1.jsx)(Text_1.TextContent, { children: (0, jsx_runtime_1.jsx)(Text_1.Text, __assign({ component: "h3" }, { children: "DRG Nodes" })) }), (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.plain, onClick: function () {
                                    return dmnEditorStoreApi.setState(function (state) {
                                        state.diagram.openNodesPanel = Store_1.DiagramNodesPanel.NONE;
                                    });
                                } }, { children: (0, jsx_runtime_1.jsx)(times_icon_1.TimesIcon, {}) }))] })), (0, jsx_runtime_1.jsx)(SearchInput_1.SearchInput, { style: { marginBottom: "12px", height: "36px" }, onKeyDown: function (e) { return e.stopPropagation(); }, autoFocus: true, placeholder: "Filter...", value: filter, onChange: function (_event, value) { return setFilter(value); }, onClear: function () { return setFilter(""); } })] })), (0, jsx_runtime_1.jsx)("div", __assign({ style: { padding: "12px" } }, { children: nodes }))] }));
}
exports.DrgNodesPanel = DrgNodesPanel;
//# sourceMappingURL=DrgNodesPanel.js.map