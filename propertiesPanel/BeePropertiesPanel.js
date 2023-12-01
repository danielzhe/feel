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
exports.BeePropertiesPanel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Drawer_1 = require("@patternfly/react-core/dist/js/components/Drawer");
var Store_1 = require("../store/Store");
var react_1 = require("react");
var DerivedStore_1 = require("../store/DerivedStore");
var xmlHrefs_1 = require("../xml/xmlHrefs");
var SingleNodeProperties_1 = require("./SingleNodeProperties");
function BeePropertiesPanel() {
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var _a = (0, Store_1.useDmnEditorStore)(function (s) { return s.boxedExpressionEditor; }), selectedObjectId = _a.selectedObjectId, activeDrgElementId = _a.activeDrgElementId;
    var nodesById = (0, DerivedStore_1.useDmnEditorDerivedStore)().nodesById;
    var shouldDisplayDecisionOrBkmProps = (0, react_1.useMemo)(function () { return selectedObjectId === undefined || (selectedObjectId && selectedObjectId === activeDrgElementId); }, [activeDrgElementId, selectedObjectId]);
    var node = (0, react_1.useMemo)(function () {
        return activeDrgElementId ? nodesById.get((0, xmlHrefs_1.buildXmlHref)({ id: activeDrgElementId })) : undefined;
    }, [activeDrgElementId, nodesById]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: node && ((0, jsx_runtime_1.jsx)(Drawer_1.DrawerPanelContent, __assign({ isResizable: true, minSize: "300px", defaultSize: "500px", onKeyDown: function (e) { return e.stopPropagation(); } }, { children: (0, jsx_runtime_1.jsxs)(Drawer_1.DrawerHead, { children: [shouldDisplayDecisionOrBkmProps && (0, jsx_runtime_1.jsx)(SingleNodeProperties_1.SingleNodeProperties, { nodeId: node.id }), !shouldDisplayDecisionOrBkmProps && selectedObjectId === "" && (0, jsx_runtime_1.jsx)("div", { children: "Nothing to show" }), !shouldDisplayDecisionOrBkmProps && selectedObjectId !== "" && (0, jsx_runtime_1.jsx)("div", { children: selectedObjectId }), (0, jsx_runtime_1.jsx)(Drawer_1.DrawerActions, { children: (0, jsx_runtime_1.jsx)(Drawer_1.DrawerCloseButton, { onClick: function () {
                                dmnEditorStoreApi.setState(function (state) {
                                    state.boxedExpressionEditor.propertiesPanel.isOpen = false;
                                });
                            } }) })] }) }))) }));
}
exports.BeePropertiesPanel = BeePropertiesPanel;
//# sourceMappingURL=BeePropertiesPanel.js.map