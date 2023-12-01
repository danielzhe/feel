"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNode = void 0;
var NodeNature_1 = require("./NodeNature");
var addOrGetDrd_1 = require("./addOrGetDrd");
var repopulateInputDataAndDecisionsOnDecisionService_1 = require("./repopulateInputDataAndDecisionsOnDecisionService");
var qNames_1 = require("@kie-tools/xml-parser-ts/dist/qNames");
var dmnIdRandomizer_1 = require("../idRandomizer/dmnIdRandomizer");
function deleteNode(_a) {
    var _b, _c, _d, _e, _f;
    var definitions = _a.definitions, drdIndex = _a.drdIndex, nodeNature = _a.nodeNature, dmnObjectId = _a.dmnObjectId, dmnObjectQName = _a.dmnObjectQName;
    var _g = (0, addOrGetDrd_1.addOrGetDrd)({ definitions: definitions, drdIndex: drdIndex }), diagramElements = _g.diagramElements, widthsExtension = _g.widthsExtension;
    var shapeDmnElementRef = (0, qNames_1.buildXmlQName)(dmnObjectQName);
    diagramElements === null || diagramElements === void 0 ? void 0 : diagramElements.splice((diagramElements !== null && diagramElements !== void 0 ? diagramElements : []).findIndex(function (d) { return d["@_dmnElementRef"] === shapeDmnElementRef; }), 1);
    if (!dmnObjectQName.prefix) {
        if (nodeNature === NodeNature_1.NodeNature.ARTIFACT) {
            (_b = definitions.artifact) === null || _b === void 0 ? void 0 : _b.splice(((_c = definitions.artifact) !== null && _c !== void 0 ? _c : []).findIndex(function (a) { return a["@_id"] === dmnObjectId; }), 1);
        }
        else if (nodeNature === NodeNature_1.NodeNature.DRG_ELEMENT) {
            var deleted = (_d = definitions.drgElement) === null || _d === void 0 ? void 0 : _d.splice(((_e = definitions.drgElement) !== null && _e !== void 0 ? _e : []).findIndex(function (d) { return d["@_id"] === dmnObjectId; }), 1);
            var deletedIdsOnDrgElementTree_1 = (0, dmnIdRandomizer_1.getNewDmnIdRandomizer)()
                .ack({ json: deleted, type: "DMN15__tDefinitions", attr: "drgElement" })
                .getOriginalIds();
            widthsExtension["kie:ComponentWidths"] = (_f = widthsExtension["kie:ComponentWidths"]) === null || _f === void 0 ? void 0 : _f.filter(function (w) { return !deletedIdsOnDrgElementTree_1.has(w["@_dmnElementRef"]); });
        }
        else if (nodeNature === NodeNature_1.NodeNature.UNKNOWN) {
        }
        else {
            throw new Error("Unknown node nature '".concat(nodeNature, "'."));
        }
    }
    (0, repopulateInputDataAndDecisionsOnDecisionService_1.repopulateInputDataAndDecisionsOnAllDecisionServices)({ definitions: definitions });
}
exports.deleteNode = deleteNode;
//# sourceMappingURL=deleteNode.js.map