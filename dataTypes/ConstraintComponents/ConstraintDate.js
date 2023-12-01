"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstraintDate = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var DatePicker_1 = require("@patternfly/react-core/dist/js/components/DatePicker");
require("./Constraint.css");
require("./ConstraintDate.css");
function ConstraintDate(_a) {
    var value = _a.value, onChange = _a.onChange, isValid = _a.isValid;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(DatePicker_1.DatePicker, { className: "kie-dmn-editor--constraint-date kie-dmn-editor--constraint-input ".concat(isValid ? "" : "kie-dmn-editor--constraint-date-invalid"), inputProps: { className: "kie-dmn-editor--constraint-input" }, value: value, onChange: function (e, value) { return onChange(value); } }) }));
}
exports.ConstraintDate = ConstraintDate;
//# sourceMappingURL=ConstraintDate.js.map