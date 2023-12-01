"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFeelQNameFromNamespace = exports.buildFeelQNameFromXmlQName = void 0;
function buildFeelQNameFromXmlQName(_a) {
    var namedElement = _a.namedElement, namedElementQName = _a.namedElementQName, importsByNamespace = _a.importsByNamespace, relativeToNamespace = _a.relativeToNamespace, model = _a.model;
    if (!namedElementQName.prefix) {
        return { full: namedElement["@_name"], prefix: undefined, name: namedElement["@_name"], isExternal: false };
    }
    var namespace = model["@_xmlns:".concat(namedElementQName.prefix)];
    if (!namespace) {
        throw new Error("Can't find namespace declaration for namespace with name '".concat(namedElementQName.prefix, "'."));
    }
    return buildFeelQNameFromNamespace({
        namedElement: namedElement,
        namespace: namespace,
        importsByNamespace: importsByNamespace,
        relativeToNamespace: relativeToNamespace,
    });
}
exports.buildFeelQNameFromXmlQName = buildFeelQNameFromXmlQName;
function buildFeelQNameFromNamespace(_a) {
    var namedElement = _a.namedElement, namespace = _a.namespace, importsByNamespace = _a.importsByNamespace, relativeToNamespace = _a.relativeToNamespace;
    if (relativeToNamespace === namespace) {
        return {
            full: namedElement["@_name"],
            prefix: undefined,
            name: namedElement["@_name"],
            isExternal: false,
        };
    }
    var _import = importsByNamespace.get(namespace);
    if (!_import) {
        throw new Error("Can't find included model with namespace '".concat(namespace, "'."));
    }
    if (_import["@_name"] === "") {
        return { full: namedElement["@_name"], prefix: undefined, name: namedElement["@_name"], isExternal: true };
    }
    return {
        full: "".concat(_import["@_name"], ".").concat(namedElement["@_name"]),
        prefix: _import["@_name"],
        name: namedElement["@_name"],
        isExternal: true,
    };
}
exports.buildFeelQNameFromNamespace = buildFeelQNameFromNamespace;
//# sourceMappingURL=buildFeelQName.js.map