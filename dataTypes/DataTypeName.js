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
exports.DataTypeName = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var EditableNodeLabel_1 = require("../diagram/nodes/EditableNodeLabel");
var TypeRefLabel_1 = require("./TypeRefLabel");
var Store_1 = require("../store/Store");
var renameItemDefinition_1 = require("../mutations/renameItemDefinition");
var DerivedStore_1 = require("../store/DerivedStore");
var buildFeelQName_1 = require("../feel/buildFeelQName");
var InlineFeelNameInput_1 = require("../feel/InlineFeelNameInput");
function DataTypeName(_a) {
    var _b;
    var isReadonly = _a.isReadonly, itemDefinition = _a.itemDefinition, isActive = _a.isActive, editMode = _a.editMode, relativeToNamespace = _a.relativeToNamespace, shouldCommitOnBlur = _a.shouldCommitOnBlur, allUniqueNames = _a.allUniqueNames, enableAutoFocusing = _a.enableAutoFocusing;
    var _c = (0, EditableNodeLabel_1.useEditableNodeLabel)((enableAutoFocusing !== null && enableAutoFocusing !== void 0 ? enableAutoFocusing : true) ? itemDefinition["@_id"] : undefined), isEditingLabel = _c.isEditingLabel, setEditingLabel = _c.setEditingLabel, triggerEditing = _c.triggerEditing, triggerEditingIfEnter = _c.triggerEditingIfEnter;
    var dmnEditorStoreApi = (0, Store_1.useDmnEditorStoreApi)();
    var _d = (0, DerivedStore_1.useDmnEditorDerivedStore)(), allDataTypesById = _d.allDataTypesById, importsByNamespace = _d.importsByNamespace;
    var dataType = allDataTypesById.get(itemDefinition["@_id"]);
    var feelQNameToDisplay = (0, buildFeelQName_1.buildFeelQNameFromNamespace)({
        namedElement: itemDefinition,
        importsByNamespace: importsByNamespace,
        namespace: dataType.namespace,
        relativeToNamespace: relativeToNamespace,
    });
    var onRenamed = (0, react_1.useCallback)(function (newName) {
        if (isReadonly) {
            return;
        }
        dmnEditorStoreApi.setState(function (state) {
            (0, renameItemDefinition_1.renameItemDefinition)({
                definitions: state.dmn.model.definitions,
                newName: newName,
                itemDefinitionId: itemDefinition["@_id"],
                allDataTypesById: allDataTypesById,
            });
        });
    }, [allDataTypesById, dmnEditorStoreApi, isReadonly, itemDefinition]);
    var _shouldCommitOnBlur = shouldCommitOnBlur !== null && shouldCommitOnBlur !== void 0 ? shouldCommitOnBlur : true;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [editMode === "hover" && ((0, jsx_runtime_1.jsx)(InlineFeelNameInput_1.InlineFeelNameInput, { isPlain: true, isReadonly: isReadonly, id: itemDefinition["@_id"], shouldCommitOnBlur: _shouldCommitOnBlur, name: feelQNameToDisplay.full, onRenamed: onRenamed, allUniqueNames: allUniqueNames })), editMode === "double-click" && ((0, jsx_runtime_1.jsxs)(Flex_1.Flex, __assign({ tabIndex: -1, style: isEditingLabel ? { flexGrow: 1 } : {}, flexWrap: { default: "nowrap" }, spaceItems: { default: "spaceItemsNone" }, justifyContent: { default: "justifyContentFlexStart" }, alignItems: { default: "alignItemsCenter" }, onDoubleClick: triggerEditing, onKeyDown: triggerEditingIfEnter }, { children: [(0, jsx_runtime_1.jsx)(EditableNodeLabel_1.EditableNodeLabel, { truncate: true, grow: true, isEditing: isEditingLabel, setEditing: setEditingLabel, onChange: onRenamed, shouldCommitOnBlur: shouldCommitOnBlur, value: itemDefinition["@_name"], position: "top-left", namedElement: itemDefinition, namedElementQName: {
                            type: "xml-qname",
                            localPart: itemDefinition["@_name"],
                            prefix: feelQNameToDisplay.prefix,
                        }, allUniqueNames: allUniqueNames }, itemDefinition["@_id"]), !isEditingLabel && ((0, jsx_runtime_1.jsx)(TypeRefLabel_1.TypeRefLabel, { typeRef: (_b = itemDefinition.typeRef) === null || _b === void 0 ? void 0 : _b.__$$text, isCollection: itemDefinition["@_isCollection"], relativeToNamespace: relativeToNamespace }))] })))] }));
}
exports.DataTypeName = DataTypeName;
//# sourceMappingURL=DataTypeName.js.map