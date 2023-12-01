"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrGetDrd = exports.getDefaultDrdName = void 0;
function getDefaultDrdName(_a) {
    var drdIndex = _a.drdIndex;
    return drdIndex === 0 ? "Default DRD" : "Unnamed DRD";
}
exports.getDefaultDrdName = getDefaultDrdName;
function addOrGetDrd(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var _l, _m, _o, _p;
    var definitions = _a.definitions, drdIndex = _a.drdIndex;
    var defaultName = getDefaultDrdName({ drdIndex: drdIndex });
    (_b = definitions["dmndi:DMNDI"]) !== null && _b !== void 0 ? _b : (definitions["dmndi:DMNDI"] = {});
    (_c = (_l = definitions["dmndi:DMNDI"])["dmndi:DMNDiagram"]) !== null && _c !== void 0 ? _c : (_l["dmndi:DMNDiagram"] = []);
    (_d = (_m = definitions["dmndi:DMNDI"]["dmndi:DMNDiagram"])[drdIndex]) !== null && _d !== void 0 ? _d : (_m[drdIndex] = {});
    var defaultDiagram = definitions["dmndi:DMNDI"]["dmndi:DMNDiagram"][drdIndex];
    (_e = defaultDiagram["@_name"]) !== null && _e !== void 0 ? _e : (defaultDiagram["@_name"] = defaultName);
    (_f = defaultDiagram["@_useAlternativeInputDataShape"]) !== null && _f !== void 0 ? _f : (defaultDiagram["@_useAlternativeInputDataShape"] = false);
    (_g = defaultDiagram["dmndi:DMNDiagramElement"]) !== null && _g !== void 0 ? _g : (defaultDiagram["dmndi:DMNDiagramElement"] = []);
    (_h = defaultDiagram["di:extension"]) !== null && _h !== void 0 ? _h : (defaultDiagram["di:extension"] = {});
    (_j = (_o = defaultDiagram["di:extension"])["kie:ComponentsWidthsExtension"]) !== null && _j !== void 0 ? _j : (_o["kie:ComponentsWidthsExtension"] = {});
    (_k = (_p = defaultDiagram["di:extension"]["kie:ComponentsWidthsExtension"])["kie:ComponentWidths"]) !== null && _k !== void 0 ? _k : (_p["kie:ComponentWidths"] = [{}]);
    return {
        widthsExtension: defaultDiagram["di:extension"]["kie:ComponentsWidthsExtension"],
        widths: defaultDiagram["di:extension"]["kie:ComponentsWidthsExtension"]["kie:ComponentWidths"],
        diagram: defaultDiagram,
        diagramElements: defaultDiagram["dmndi:DMNDiagramElement"],
    };
}
exports.addOrGetDrd = addOrGetDrd;
//# sourceMappingURL=addOrGetDrd.js.map