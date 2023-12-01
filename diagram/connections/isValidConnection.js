"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._checkIsValidConnection = exports.checkIsValidConnection = void 0;
var graphStructure_1 = require("./graphStructure");
function checkIsValidConnection(nodesById, edgeOrConnection, ongoingConnectionEdgeType) {
    if (!edgeOrConnection.source || !edgeOrConnection.target) {
        return false;
    }
    var sourceNode = nodesById.get(edgeOrConnection.source);
    var targetNode = nodesById.get(edgeOrConnection.target);
    return _checkIsValidConnection(sourceNode, targetNode, ongoingConnectionEdgeType !== null && ongoingConnectionEdgeType !== void 0 ? ongoingConnectionEdgeType : edgeOrConnection.sourceHandle);
}
exports.checkIsValidConnection = checkIsValidConnection;
function _checkIsValidConnection(sourceNode, targetNode, edgeType) {
    var _a, _b, _c;
    if (!(sourceNode === null || sourceNode === void 0 ? void 0 : sourceNode.type) || !(targetNode === null || targetNode === void 0 ? void 0 : targetNode.type) || !edgeType) {
        return false;
    }
    if (targetNode.data.dmnObjectQName.prefix) {
        return false;
    }
    var ret = (_c = (_b = (_a = graphStructure_1.graphStructure
        .get(sourceNode.type)) === null || _a === void 0 ? void 0 : _a.get(edgeType)) === null || _b === void 0 ? void 0 : _b.has(targetNode.type)) !== null && _c !== void 0 ? _c : false;
    return ret;
}
exports._checkIsValidConnection = _checkIsValidConnection;
//# sourceMappingURL=isValidConnection.js.map