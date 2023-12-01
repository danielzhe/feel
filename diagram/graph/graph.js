"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildHierarchy = exports.traverse = exports.getAdjMatrix = void 0;
function getAdjMatrix(edges) {
    var e_1, _a;
    var _b, _c;
    var _d, _e;
    var __adjMatrix = {};
    try {
        for (var edges_1 = __values(edges), edges_1_1 = edges_1.next(); !edges_1_1.done; edges_1_1 = edges_1.next()) {
            var e = edges_1_1.value;
            (_b = __adjMatrix[_d = e.source]) !== null && _b !== void 0 ? _b : (__adjMatrix[_d] = {});
            (_c = __adjMatrix[_e = e.target]) !== null && _c !== void 0 ? _c : (__adjMatrix[_e] = {});
            __adjMatrix[e.source][e.target] = { direction: "up", edge: e };
            __adjMatrix[e.target][e.source] = { direction: "down", edge: e };
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (edges_1_1 && !edges_1_1.done && (_a = edges_1.return)) _a.call(edges_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return __adjMatrix;
}
exports.getAdjMatrix = getAdjMatrix;
function traverse(__adjMatrix, originalStartingNodeIds, curNodeIds, traversalDirection, nodeVisitor, edgeVisitor, visited) {
    if (visited === void 0) { visited = new Set(); }
    if (curNodeIds.length <= 0) {
        return;
    }
    var nextNodeIds = curNodeIds.flatMap(function (curNodeId) {
        var _a;
        if (visited.has(curNodeId)) {
            return [];
        }
        if (!originalStartingNodeIds.has(curNodeId)) {
            nodeVisitor === null || nodeVisitor === void 0 ? void 0 : nodeVisitor(curNodeId, traversalDirection);
        }
        var curNodeAdjs = (_a = __adjMatrix[curNodeId]) !== null && _a !== void 0 ? _a : {};
        return Object.keys(curNodeAdjs).flatMap(function (adjNodeId) {
            var _a = curNodeAdjs[adjNodeId], edge = _a.edge, edgeDirection = _a.direction;
            if (traversalDirection !== edgeDirection) {
                return [];
            }
            visited.add(curNodeId);
            if (!(originalStartingNodeIds.has(edge.source) && originalStartingNodeIds.has(edge.target))) {
                edgeVisitor === null || edgeVisitor === void 0 ? void 0 : edgeVisitor(edge, traversalDirection);
            }
            return [adjNodeId];
        });
    });
    traverse(__adjMatrix, originalStartingNodeIds, nextNodeIds, traversalDirection, nodeVisitor, edgeVisitor, visited);
}
exports.traverse = traverse;
function buildHierarchy(_a) {
    var nodeId = _a.nodeId, edges = _a.edges;
    if (!nodeId) {
        return { dependencies: new Set(), dependents: new Set() };
    }
    var selected = [nodeId];
    var __selectedSet = new Set(selected);
    var __adjMatrix = getAdjMatrix(edges);
    var down = new Set();
    traverse(__adjMatrix, __selectedSet, selected, "down", function (nodeId) {
        down.add(nodeId);
    });
    var up = new Set();
    traverse(__adjMatrix, __selectedSet, selected, "up", function (nodeId) {
        up.add(nodeId);
    });
    return { dependencies: down, dependents: up };
}
exports.buildHierarchy = buildHierarchy;
//# sourceMappingURL=graph.js.map