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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.DmnEditorDerivedStoreContextProvider = exports.useDmnEditorDerivedStore = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("react");
var isValidContainment_1 = require("../diagram/connections/isValidContainment");
var Store_1 = require("./Store");
var useDiagramData_1 = require("./useDiagramData");
var buildFeelQName_1 = require("../feel/buildFeelQName");
var DmnEditorDependenciesContext_1 = require("../includedModels/DmnEditorDependenciesContext");
var BuiltInFeelTypes_1 = require("../dataTypes/BuiltInFeelTypes");
var importNamespaces_1 = require("../includedModels/importNamespaces");
var DmnEditorDerivedStoreContext = React.createContext({});
function useDmnEditorDerivedStore() {
    return React.useContext(DmnEditorDerivedStoreContext);
}
exports.useDmnEditorDerivedStore = useDmnEditorDerivedStore;
function DmnEditorDerivedStoreContextProvider(props) {
    var diagram = (0, Store_1.useDmnEditorStore)(function (s) { return s.diagram; });
    var thisDmn = (0, Store_1.useDmnEditorStore)(function (s) { return s.dmn; });
    var thisDmnsImports = (0, react_1.useMemo)(function () { var _a; return (_a = thisDmn.model.definitions.import) !== null && _a !== void 0 ? _a : []; }, [thisDmn.model.definitions.import]);
    var thisDmnsImportsByNamespace = (0, react_1.useMemo)(function () {
        var ret = new Map();
        for (var i = 0; i < thisDmnsImports.length; i++) {
            ret.set(thisDmnsImports[i]["@_namespace"], thisDmnsImports[i]);
        }
        return ret;
    }, [thisDmnsImports]);
    var externalModelsByNamespace = (0, DmnEditorDependenciesContext_1.useExternalModels)().externalModelsByNamespace;
    var _a = (0, react_1.useMemo)(function () {
        return thisDmnsImports.reduce(function (acc, _import) {
            var externalModel = externalModelsByNamespace === null || externalModelsByNamespace === void 0 ? void 0 : externalModelsByNamespace[(0, importNamespaces_1.getNamespaceOfDmnImport)({ dmnImport: _import })];
            if (!externalModel) {
                console.warn("DMN DIAGRAM: Can't index external model with namespace '".concat(_import["@_namespace"], "' because it doesn't exist on the external models list."));
                return acc;
            }
            if (externalModel.type === "dmn") {
                acc.dmns.set(_import["@_namespace"], externalModel);
            }
            else if (externalModel.type === "pmml") {
                acc.pmmls.set(_import["@_namespace"], externalModel);
            }
            else {
                console.warn("DMN EDITOR: Unknown external model type", externalModel);
            }
            return acc;
        }, { dmns: new Map(), pmmls: new Map() });
    }, [externalModelsByNamespace, thisDmnsImports]), externalDmnsByNamespace = _a.dmns, externalPmmlsByNamespace = _a.pmmls;
    var _b = (0, useDiagramData_1.useDiagramData)(externalDmnsByNamespace), nodes = _b.nodes, edges = _b.edges, nodesById = _b.nodesById, edgesById = _b.edgesById, dmnEdgesByDmnElementRef = _b.dmnEdgesByDmnElementRef, dmnShapesByHref = _b.dmnShapesByHref, selectedNodesById = _b.selectedNodesById, selectedEdgesById = _b.selectedEdgesById, selectedNodeTypes = _b.selectedNodeTypes, drgElementsWithoutVisualRepresentationOnCurrentDrd = _b.drgElementsWithoutVisualRepresentationOnCurrentDrd;
    var _c = (0, react_1.useMemo)(function () {
        var _a;
        var allDataTypesById = new Map();
        var allTopLevelDataTypesByFeelName = new Map();
        var externalDmnsDataTypeTree = __spreadArray([], __read(externalDmnsByNamespace.values()), false).flatMap(function (externalDmn) {
            var _a;
            return buildDataTypesTree((_a = externalDmn.model.definitions.itemDefinition) !== null && _a !== void 0 ? _a : [], thisDmnsImportsByNamespace, allDataTypesById, allTopLevelDataTypesByFeelName, undefined, new Set(), externalDmn.model.definitions["@_namespace"], thisDmn.model.definitions["@_namespace"]);
        });
        var thisDmnsDataTypeTree = buildDataTypesTree((_a = thisDmn.model.definitions.itemDefinition) !== null && _a !== void 0 ? _a : [], thisDmnsImportsByNamespace, allDataTypesById, allTopLevelDataTypesByFeelName, undefined, new Set(), thisDmn.model.definitions["@_namespace"], thisDmn.model.definitions["@_namespace"]);
        return {
            dataTypesTree: __spreadArray(__spreadArray([], __read(thisDmnsDataTypeTree), false), __read(externalDmnsDataTypeTree), false),
            allDataTypesById: allDataTypesById,
            allTopLevelDataTypesByFeelName: allTopLevelDataTypesByFeelName,
        };
    }, [externalDmnsByNamespace, thisDmn.model.definitions, thisDmnsImportsByNamespace]), dataTypesTree = _c.dataTypesTree, allDataTypesById = _c.allDataTypesById, allTopLevelDataTypesByFeelName = _c.allTopLevelDataTypesByFeelName;
    var allTopLevelItemDefinitionUniqueNames = (0, react_1.useMemo)(function () {
        var e_1, _a, e_2, _b;
        var ret = new Map();
        try {
            for (var _c = __values(allTopLevelDataTypesByFeelName.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), k = _e[0], v = _e[1];
                ret.set(k, v.itemDefinition["@_id"]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var builtInFeelTypeNames_1 = __values(BuiltInFeelTypes_1.builtInFeelTypeNames), builtInFeelTypeNames_1_1 = builtInFeelTypeNames_1.next(); !builtInFeelTypeNames_1_1.done; builtInFeelTypeNames_1_1 = builtInFeelTypeNames_1.next()) {
                var type = builtInFeelTypeNames_1_1.value;
                ret.set(type, type);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (builtInFeelTypeNames_1_1 && !builtInFeelTypeNames_1_1.done && (_b = builtInFeelTypeNames_1.return)) _b.call(builtInFeelTypeNames_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return ret;
    }, [allTopLevelDataTypesByFeelName]);
    var allFeelVariableUniqueNames = (0, react_1.useMemo)(function () {
        var _a;
        var ret = new Map();
        var drgElements = (_a = thisDmn.model.definitions.drgElement) !== null && _a !== void 0 ? _a : [];
        for (var i = 0; i < drgElements.length; i++) {
            var drgElement = drgElements[i];
            ret.set(drgElement["@_name"], drgElement["@_id"]);
        }
        for (var i = 0; i < thisDmnsImports.length; i++) {
            var _import = thisDmnsImports[i];
            ret.set(_import["@_name"], _import["@_id"]);
        }
        return ret;
    }, [thisDmn.model.definitions.drgElement, thisDmnsImports]);
    var isDropTargetNodeValidForSelection = !!diagram.dropTargetNode &&
        (0, isValidContainment_1.isValidContainment)({
            nodeTypes: selectedNodeTypes,
            inside: diagram.dropTargetNode.type,
            dmnObjectQName: diagram.dropTargetNode.data.dmnObjectQName,
        });
    var isDiagramEditingInProgress = diagram.draggingNodes.length > 0 ||
        diagram.resizingNodes.length > 0 ||
        diagram.draggingWaypoints.length > 0 ||
        diagram.movingDividerLines.length > 0 ||
        diagram.editingStyle;
    var value = (0, react_1.useMemo)(function () { return ({
        selectedNodeTypes: selectedNodeTypes,
        isDropTargetNodeValidForSelection: isDropTargetNodeValidForSelection,
        isDiagramEditingInProgress: isDiagramEditingInProgress,
        nodes: nodes,
        edges: edges,
        nodesById: nodesById,
        edgesById: edgesById,
        selectedNodesById: selectedNodesById,
        selectedEdgesById: selectedEdgesById,
        importsByNamespace: thisDmnsImportsByNamespace,
        dmnEdgesByDmnElementRef: dmnEdgesByDmnElementRef,
        dmnShapesByHref: dmnShapesByHref,
        dataTypesTree: dataTypesTree,
        allDataTypesById: allDataTypesById,
        allTopLevelDataTypesByFeelName: allTopLevelDataTypesByFeelName,
        allFeelVariableUniqueNames: allFeelVariableUniqueNames,
        allTopLevelItemDefinitionUniqueNames: allTopLevelItemDefinitionUniqueNames,
        externalDmnsByNamespace: externalDmnsByNamespace,
        externalPmmlsByNamespace: externalPmmlsByNamespace,
        drgElementsWithoutVisualRepresentationOnCurrentDrd: drgElementsWithoutVisualRepresentationOnCurrentDrd,
    }); }, [
        selectedNodeTypes,
        isDropTargetNodeValidForSelection,
        isDiagramEditingInProgress,
        nodes,
        edges,
        nodesById,
        edgesById,
        selectedNodesById,
        selectedEdgesById,
        thisDmnsImportsByNamespace,
        dmnEdgesByDmnElementRef,
        dmnShapesByHref,
        dataTypesTree,
        allDataTypesById,
        allTopLevelDataTypesByFeelName,
        allFeelVariableUniqueNames,
        allTopLevelItemDefinitionUniqueNames,
        externalDmnsByNamespace,
        externalPmmlsByNamespace,
        drgElementsWithoutVisualRepresentationOnCurrentDrd,
    ]);
    return (0, jsx_runtime_1.jsx)(DmnEditorDerivedStoreContext.Provider, __assign({ value: value }, { children: props.children }));
}
exports.DmnEditorDerivedStoreContextProvider = DmnEditorDerivedStoreContextProvider;
function buildDataTypesTree(items, importsByNamespace, allDataTypesById, allTopLevelDataTypesByFeelName, parentId, parents, namespace, relativeToNamespace) {
    var _a;
    var dataTypesTree = [];
    for (var i = 0; i < items.length; i++) {
        var itemDefinition = items[i];
        var feelName = (0, buildFeelQName_1.buildFeelQNameFromNamespace)({
            importsByNamespace: importsByNamespace,
            namedElement: itemDefinition,
            namespace: namespace,
            relativeToNamespace: relativeToNamespace,
        }).full;
        var dataType = {
            itemDefinition: itemDefinition,
            index: i,
            parentId: parentId,
            parents: parents,
            feelName: feelName,
            namespace: namespace,
            children: buildDataTypesTree((_a = itemDefinition.itemComponent) !== null && _a !== void 0 ? _a : [], importsByNamespace, allDataTypesById, allTopLevelDataTypesByFeelName, itemDefinition["@_id"], new Set(__spreadArray(__spreadArray([], __read(parents), false), [itemDefinition["@_id"]], false)), namespace, relativeToNamespace),
        };
        dataTypesTree.push(dataType);
        allDataTypesById.set(itemDefinition["@_id"], dataType);
        if (parentId === undefined) {
            allTopLevelDataTypesByFeelName.set(feelName, dataType);
        }
    }
    return dataTypesTree;
}
//# sourceMappingURL=DerivedStore.js.map