"use strict";
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEdgeTypesBetween = exports.getDefaultEdgeTypeBetween = exports.containment = exports.outgoingStructure = exports.graphStructure = void 0;
var NodeTypes_1 = require("../nodes/NodeTypes");
var EdgeTypes_1 = require("../edges/EdgeTypes");
exports.graphStructure = new Map([
    [
        NodeTypes_1.NODE_TYPES.inputData,
        new Map([
            [EdgeTypes_1.EDGE_TYPES.informationRequirement, new Set([NodeTypes_1.NODE_TYPES.decision])],
            [EdgeTypes_1.EDGE_TYPES.authorityRequirement, new Set([NodeTypes_1.NODE_TYPES.knowledgeSource])],
            [EdgeTypes_1.EDGE_TYPES.association, new Set([NodeTypes_1.NODE_TYPES.textAnnotation])],
        ]),
    ],
    [
        NodeTypes_1.NODE_TYPES.decision,
        new Map([
            [EdgeTypes_1.EDGE_TYPES.informationRequirement, new Set([NodeTypes_1.NODE_TYPES.decision])],
            [EdgeTypes_1.EDGE_TYPES.authorityRequirement, new Set([NodeTypes_1.NODE_TYPES.knowledgeSource])],
            [EdgeTypes_1.EDGE_TYPES.association, new Set([NodeTypes_1.NODE_TYPES.textAnnotation])],
        ]),
    ],
    [
        NodeTypes_1.NODE_TYPES.bkm,
        new Map([
            [EdgeTypes_1.EDGE_TYPES.knowledgeRequirement, new Set([NodeTypes_1.NODE_TYPES.decision, NodeTypes_1.NODE_TYPES.bkm])],
            [EdgeTypes_1.EDGE_TYPES.association, new Set([NodeTypes_1.NODE_TYPES.textAnnotation])],
        ]),
    ],
    [
        NodeTypes_1.NODE_TYPES.decisionService,
        new Map([
            [EdgeTypes_1.EDGE_TYPES.knowledgeRequirement, new Set([NodeTypes_1.NODE_TYPES.decision, NodeTypes_1.NODE_TYPES.bkm])],
            [EdgeTypes_1.EDGE_TYPES.association, new Set([NodeTypes_1.NODE_TYPES.textAnnotation])],
        ]),
    ],
    [
        NodeTypes_1.NODE_TYPES.knowledgeSource,
        new Map([
            [EdgeTypes_1.EDGE_TYPES.authorityRequirement, new Set([NodeTypes_1.NODE_TYPES.decision, NodeTypes_1.NODE_TYPES.bkm, NodeTypes_1.NODE_TYPES.knowledgeSource])],
        ]),
    ],
    [
        NodeTypes_1.NODE_TYPES.textAnnotation,
        new Map([
            [
                EdgeTypes_1.EDGE_TYPES.association,
                new Set([
                    NodeTypes_1.NODE_TYPES.inputData,
                    NodeTypes_1.NODE_TYPES.decision,
                    NodeTypes_1.NODE_TYPES.bkm,
                    NodeTypes_1.NODE_TYPES.decisionService,
                    NodeTypes_1.NODE_TYPES.knowledgeSource,
                ]),
            ],
        ]),
    ],
    [
        NodeTypes_1.NODE_TYPES.group,
        new Map([
            [EdgeTypes_1.EDGE_TYPES.association, new Set([NodeTypes_1.NODE_TYPES.textAnnotation])],
        ]),
    ],
]);
exports.outgoingStructure = (_a = {},
    _a[NodeTypes_1.NODE_TYPES.inputData] = {
        nodes: outgoingNodes(NodeTypes_1.NODE_TYPES.inputData),
        edges: outgoingEdges(NodeTypes_1.NODE_TYPES.inputData),
    },
    _a[NodeTypes_1.NODE_TYPES.decision] = {
        nodes: outgoingNodes(NodeTypes_1.NODE_TYPES.decision),
        edges: outgoingEdges(NodeTypes_1.NODE_TYPES.decision),
    },
    _a[NodeTypes_1.NODE_TYPES.bkm] = {
        nodes: outgoingNodes(NodeTypes_1.NODE_TYPES.bkm),
        edges: outgoingEdges(NodeTypes_1.NODE_TYPES.bkm),
    },
    _a[NodeTypes_1.NODE_TYPES.decisionService] = {
        nodes: outgoingNodes(NodeTypes_1.NODE_TYPES.decisionService),
        edges: outgoingEdges(NodeTypes_1.NODE_TYPES.decisionService),
    },
    _a[NodeTypes_1.NODE_TYPES.knowledgeSource] = {
        nodes: outgoingNodes(NodeTypes_1.NODE_TYPES.knowledgeSource),
        edges: outgoingEdges(NodeTypes_1.NODE_TYPES.knowledgeSource),
    },
    _a[NodeTypes_1.NODE_TYPES.group] = {
        nodes: outgoingNodes(NodeTypes_1.NODE_TYPES.group),
        edges: outgoingEdges(NodeTypes_1.NODE_TYPES.group),
    },
    _a[NodeTypes_1.NODE_TYPES.textAnnotation] = {
        nodes: [],
        edges: outgoingEdges(NodeTypes_1.NODE_TYPES.textAnnotation),
    },
    _a);
exports.containment = new Map([
    [NodeTypes_1.NODE_TYPES.decisionService, new Set([NodeTypes_1.NODE_TYPES.decision])],
]);
function outgoingNodes(srcNodeType) {
    var _a;
    return Array.from(((_a = exports.graphStructure.get(srcNodeType)) !== null && _a !== void 0 ? _a : new Map()).values()).flatMap(function (tgt) { return __spreadArray([], __read(tgt), false); });
}
function outgoingEdges(srcNodeType) {
    var _a;
    return Array.from(((_a = exports.graphStructure.get(srcNodeType)) !== null && _a !== void 0 ? _a : new Map()).keys());
}
function getDefaultEdgeTypeBetween(source, target) {
    var edges = getEdgeTypesBetween(source, target);
    if (edges.length > 1) {
        console.debug("Multiple edges possible for ".concat(source, " --> ").concat(target, ". Choosing first one in structure definition: ").concat(edges[0], "."));
    }
    return edges[0];
}
exports.getDefaultEdgeTypeBetween = getDefaultEdgeTypeBetween;
function getEdgeTypesBetween(source, target) {
    var e_1, _a;
    var sourceStructure = exports.graphStructure.get(source);
    if (!sourceStructure) {
        return [];
    }
    var possibleEdges = [];
    try {
        for (var _b = __values(__spreadArray([], __read(sourceStructure.entries()), false)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), e = _d[0], t = _d[1];
            if (t.has(target)) {
                possibleEdges.push(e);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return possibleEdges;
}
exports.getEdgeTypesBetween = getEdgeTypesBetween;
//# sourceMappingURL=graphStructure.js.map