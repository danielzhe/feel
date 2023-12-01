"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
exports.getClipboard = exports.buildClipboardFromDataType = exports.buildClipboardFromDiagram = exports.DMN_EDITOR_DATA_TYPES_CLIPBOARD_MIME_TYPE = exports.DMN_EDITOR_BOXED_EXPRESSION_CLIPBOARD_MIME_TYPE = exports.DMN_EDITOR_DIAGRAM_CLIPBOARD_MIME_TYPE = void 0;
var NodeNature_1 = require("../mutations/NodeNature");
var xmlHrefs_1 = require("../xml/xmlHrefs");
var dmnIdRandomizer_1 = require("../idRandomizer/dmnIdRandomizer");
exports.DMN_EDITOR_DIAGRAM_CLIPBOARD_MIME_TYPE = "application/json+kie-dmn-editor--diagram";
exports.DMN_EDITOR_BOXED_EXPRESSION_CLIPBOARD_MIME_TYPE = "application/json+kie-dmn-editor--boxed-expression";
exports.DMN_EDITOR_DATA_TYPES_CLIPBOARD_MIME_TYPE = "application/json+kie-dmn-editor--data-types";
function buildClipboardFromDiagram(rfState, dmnEditorState) {
    var _a, _b, _c, _d, _e, _f;
    var copiedEdgesById = new Map();
    var copiedNodesById = new Map();
    var danglingEdgesById = new Map();
    var nodesById = rfState
        .getNodes()
        .reduce(function (acc, n) { return acc.set(n.id, n); }, new Map());
    var selectedNodesById = rfState
        .getNodes()
        .reduce(function (acc, n) { return (n.selected ? acc.set(n.id, n) : acc); }, new Map());
    var clipboard = __spreadArray([], __read(selectedNodesById.values()), false).reduce(function (acc, _node) {
        var e_1, _a;
        var _b, _c, _d;
        function accNode(node) {
            var _a;
            var nodeNature = NodeNature_1.nodeNatures[node.type];
            if (nodeNature === NodeNature_1.NodeNature.ARTIFACT) {
                acc.artifacts.unshift(node.data.dmnObject);
            }
            else if (nodeNature === NodeNature_1.NodeNature.DRG_ELEMENT) {
                if (_node.data.dmnObjectQName.prefix) {
                    return;
                }
                var dmnObject = JSON.parse(JSON.stringify(node.data.dmnObject));
                if (((_a = node.data.dmnObject) === null || _a === void 0 ? void 0 : _a.__$$element) === "decisionService") {
                    dmnObject.inputData = [];
                    dmnObject.inputDecision = [];
                }
                if (dmnObject.authorityRequirement) {
                    dmnObject.authorityRequirement = dmnObject.authorityRequirement.filter(function (s) {
                        var _a, _b, _c, _d, _e, _f;
                        return (s.requiredInput &&
                            selectedNodesById.has(s.requiredInput["@_href"]) &&
                            !((_b = (_a = selectedNodesById.get(s.requiredInput["@_href"])) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.dmnObjectQName.prefix)) ||
                            (s.requiredDecision &&
                                selectedNodesById.has(s.requiredDecision["@_href"]) &&
                                !((_d = (_c = selectedNodesById.get(s.requiredDecision["@_href"])) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.dmnObjectQName.prefix)) ||
                            (s.requiredAuthority &&
                                selectedNodesById.has(s.requiredAuthority["@_href"]) &&
                                !((_f = (_e = selectedNodesById.get(s.requiredAuthority["@_href"])) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.dmnObjectQName.prefix));
                    });
                }
                if (dmnObject.knowledgeRequirement) {
                    dmnObject.knowledgeRequirement = dmnObject.knowledgeRequirement.filter(function (s) {
                        var _a, _b;
                        return selectedNodesById.has(s.requiredKnowledge["@_href"]) &&
                            !((_b = (_a = selectedNodesById.get(s.requiredKnowledge["@_href"])) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.dmnObjectQName.prefix);
                    });
                }
                if (dmnObject.informationRequirement) {
                    dmnObject.informationRequirement = dmnObject.informationRequirement.filter(function (s) {
                        var _a, _b, _c, _d;
                        return (s.requiredInput &&
                            selectedNodesById.has(s.requiredInput["@_href"]) &&
                            !((_b = (_a = selectedNodesById.get(s.requiredInput["@_href"])) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.dmnObjectQName.prefix)) ||
                            (s.requiredDecision &&
                                selectedNodesById.has(s.requiredDecision["@_href"]) &&
                                !((_d = (_c = selectedNodesById.get(s.requiredDecision["@_href"])) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.dmnObjectQName.prefix));
                    });
                }
                acc.drgElements.unshift(dmnObject);
            }
            else if (nodeNature === NodeNature_1.NodeNature.UNKNOWN) {
            }
            else {
                throw new Error("Unknwon node nature '".concat(nodeNature, "'"));
            }
            copiedNodesById.set(node.id, node);
            var _b = node.data.shape, index = _b.index, dmnShape = __rest(_b, ["index"]);
            acc.shapes.push(dmnShape);
        }
        if (!_node.selected) {
            return acc;
        }
        if (((_b = _node.data.dmnObject) === null || _b === void 0 ? void 0 : _b.__$$element) === "decisionService") {
            try {
                for (var _e = __values(__spreadArray(__spreadArray([], __read(((_c = _node.data.dmnObject.outputDecision) !== null && _c !== void 0 ? _c : [])), false), __read(((_d = _node.data.dmnObject.encapsulatedDecision) !== null && _d !== void 0 ? _d : [])), false)), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var decision = _f.value;
                    if ((0, xmlHrefs_1.parseXmlHref)(decision["@_href"]).namespace) {
                        continue;
                    }
                    var decisionNode = nodesById.get(decision["@_href"]);
                    if (!decisionNode) {
                        continue;
                    }
                    accNode(decisionNode);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        accNode(_node);
        return acc;
    }, {
        mimeType: exports.DMN_EDITOR_DIAGRAM_CLIPBOARD_MIME_TYPE,
        namespaceWhereClipboardWasCreatedFrom: dmnEditorState.dmn.model.definitions["@_namespace"],
        widths: [],
        drgElements: [],
        artifacts: [],
        shapes: [],
        edges: [],
    });
    var idsOnDrgElementTrees = (0, dmnIdRandomizer_1.getNewDmnIdRandomizer)()
        .ack({ json: clipboard.drgElements, type: "DMN15__tDefinitions", attr: "drgElement" })
        .getOriginalIds();
    clipboard.widths = ((_e = (_d = (_c = (_b = (_a = dmnEditorState.dmn.model.definitions["dmndi:DMNDI"]) === null || _a === void 0 ? void 0 : _a["dmndi:DMNDiagram"]) === null || _b === void 0 ? void 0 : _b[dmnEditorState.diagram.drdIndex]["di:extension"]) === null || _c === void 0 ? void 0 : _c["kie:ComponentsWidthsExtension"]) === null || _d === void 0 ? void 0 : _d["kie:ComponentWidths"]) !== null && _e !== void 0 ? _e : []).filter(function (w) { return idsOnDrgElementTrees.has(w["@_dmnElementRef"]); });
    var artifacts = (_f = dmnEditorState.dmn.model.definitions.artifact) !== null && _f !== void 0 ? _f : [];
    clipboard.edges = rfState.edges.flatMap(function (edge) {
        var _a, _b;
        if (copiedNodesById.has(edge.source) && !copiedNodesById.has(edge.target)) {
            danglingEdgesById.set(edge.id, edge);
        }
        if (copiedNodesById.has(edge.source) && copiedNodesById.has(edge.target)) {
            if (!((_a = edge.data) === null || _a === void 0 ? void 0 : _a.dmnEdge)) {
                return [];
            }
            copiedEdgesById.set(edge.id, edge);
            var _c = edge.data.dmnEdge, index = _c.index, dmnEdge = __rest(_c, ["index"]);
            if (((_b = edge.data) === null || _b === void 0 ? void 0 : _b.dmnObject.requirementType) === "association") {
                clipboard.artifacts.push(artifacts[edge.data.dmnObject.index]);
            }
            return dmnEdge !== null && dmnEdge !== void 0 ? dmnEdge : [];
        }
        else {
            return [];
        }
    });
    return { clipboard: clipboard, copiedEdgesById: copiedEdgesById, copiedNodesById: copiedNodesById, danglingEdgesById: danglingEdgesById };
}
exports.buildClipboardFromDiagram = buildClipboardFromDiagram;
function buildClipboardFromDataType(dataType, thisDmnsNamespace) {
    return {
        namespaceWhereClipboardWasCreatedFrom: thisDmnsNamespace,
        namespace: dataType.namespace,
        mimeType: exports.DMN_EDITOR_DATA_TYPES_CLIPBOARD_MIME_TYPE,
        itemDefinitions: [dataType.itemDefinition],
    };
}
exports.buildClipboardFromDataType = buildClipboardFromDataType;
function getClipboard(text, mimeType) {
    var potentialClipboard;
    try {
        potentialClipboard = JSON.parse(text);
    }
    catch (e) {
        console.debug("DMN DIAGRAM: Ignoring pasted content. Not a valid JSON.");
        return undefined;
    }
    if (!potentialClipboard || potentialClipboard.mimeType !== mimeType) {
        console.debug("DMN DIAGRAM: Ignoring pasted content. MIME type doesn't match.");
        return undefined;
    }
    return potentialClipboard;
}
exports.getClipboard = getClipboard;
//# sourceMappingURL=Clipboard.js.map