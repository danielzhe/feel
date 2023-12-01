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
exports.GroupProperties = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ClipboardCopy_1 = require("@patternfly/react-core/dist/js/components/ClipboardCopy");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var TextArea_1 = require("@patternfly/react-core/dist/js/components/TextArea");
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
var Store_1 = require("../store/Store");
var renameNode_1 = require("../mutations/renameNode");
function GroupProperties(_a) {
    var _b;
    var group = _a.group, index = _a.index;
    var setState = (0, Store_1.useDmnEditorStoreApi)().setState;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Name" }, { children: (0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { "aria-label": "Name", type: "text", isDisabled: false, onChange: function (newName) {
                        setState(function (state) {
                            (0, renameNode_1.renameGroupNode)({
                                definitions: state.dmn.model.definitions,
                                index: index,
                                newName: newName,
                            });
                        });
                    }, value: group["@_name"], placeholder: "Enter a name..." }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "Description" }, { children: (0, jsx_runtime_1.jsx)(TextArea_1.TextArea, { "aria-label": "Description", type: "text", isDisabled: false, value: (_b = group.description) === null || _b === void 0 ? void 0 : _b.__$$text, onChange: function (newDescription) {
                        setState(function (state) {
                            state.dmn.model.definitions.artifact[index].description = {
                                __$$text: newDescription,
                            };
                        });
                    }, placeholder: "Enter a description...", style: { resize: "vertical", minHeight: "40px" }, rows: 6 }) })), (0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: "ID" }, { children: (0, jsx_runtime_1.jsx)(ClipboardCopy_1.ClipboardCopy, __assign({ isReadOnly: true, hoverTip: "Copy", clickTip: "Copied" }, { children: group["@_id"] })) }))] }));
}
exports.GroupProperties = GroupProperties;
//# sourceMappingURL=GroupProperties.js.map