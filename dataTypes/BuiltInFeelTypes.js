"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builtInFeelTypeNames = exports.builtInFeelTypes = void 0;
var DmnBuiltInDataType_1 = require("@kie-tools/boxed-expression-component/dist/api/DmnBuiltInDataType");
exports.builtInFeelTypes = Object.values(DmnBuiltInDataType_1.DmnBuiltInDataType).map(function (feelType) { return ({
    isCustom: false,
    typeRef: feelType,
    name: feelType,
}); });
exports.builtInFeelTypeNames = new Set(Object.values(DmnBuiltInDataType_1.DmnBuiltInDataType));
//# sourceMappingURL=BuiltInFeelTypes.js.map