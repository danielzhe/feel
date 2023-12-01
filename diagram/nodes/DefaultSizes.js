"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_MIN_HEIGHT = exports.NODE_MIN_WIDTH = exports.DECISION_SERVICE_COLLAPSED_DIMENSIONS = exports.DEFAULT_NODE_SIZES = exports.MIN_NODE_SIZES = void 0;
var SnapGrid_1 = require("../SnapGrid");
var NodeTypes_1 = require("./NodeTypes");
var DmnMaths_1 = require("../maths/DmnMaths");
exports.MIN_NODE_SIZES = (_a = {},
    _a[NodeTypes_1.NODE_TYPES.inputData] = function (snapGrid) {
        var snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    _a[NodeTypes_1.NODE_TYPES.decision] = function (snapGrid) {
        var snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    _a[NodeTypes_1.NODE_TYPES.bkm] = function (snapGrid) {
        var snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    _a[NodeTypes_1.NODE_TYPES.knowledgeSource] = function (snapGrid) {
        var snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    _a[NodeTypes_1.NODE_TYPES.decisionService] = function (snapGrid) {
        var snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, exports.NODE_MIN_WIDTH + DmnMaths_1.CONTAINER_NODES_DESIRABLE_PADDING * 2, exports.NODE_MIN_HEIGHT * 2 + DmnMaths_1.CONTAINER_NODES_DESIRABLE_PADDING * 2);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    _a[NodeTypes_1.NODE_TYPES.textAnnotation] = function (snapGrid) {
        var snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, 200, 200);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    _a[NodeTypes_1.NODE_TYPES.group] = function (snapGrid) {
        var snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, exports.NODE_MIN_WIDTH + DmnMaths_1.CONTAINER_NODES_DESIRABLE_PADDING * 2, exports.NODE_MIN_HEIGHT + DmnMaths_1.CONTAINER_NODES_DESIRABLE_PADDING * 2);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    _a[NodeTypes_1.NODE_TYPES.unknown] = function (snapGrid) {
        var snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    _a);
exports.DEFAULT_NODE_SIZES = (_b = {},
    _b[NodeTypes_1.NODE_TYPES.inputData] = function (snapGrid) {
        var snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    _b[NodeTypes_1.NODE_TYPES.decision] = function (snapGrid) {
        var snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    _b[NodeTypes_1.NODE_TYPES.bkm] = function (snapGrid) {
        var snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    _b[NodeTypes_1.NODE_TYPES.knowledgeSource] = function (snapGrid) {
        var snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    _b[NodeTypes_1.NODE_TYPES.decisionService] = function (snapGrid) {
        var snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, exports.NODE_MIN_WIDTH * 2, exports.NODE_MIN_WIDTH * 2);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    _b[NodeTypes_1.NODE_TYPES.textAnnotation] = function (snapGrid) {
        var snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, 200, 200);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    _b[NodeTypes_1.NODE_TYPES.group] = function (snapGrid) {
        var snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, exports.NODE_MIN_WIDTH * 2, exports.NODE_MIN_WIDTH * 2);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    _b[NodeTypes_1.NODE_TYPES.unknown] = function (snapGrid) {
        var snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    _b);
exports.DECISION_SERVICE_COLLAPSED_DIMENSIONS = {
    width: 300,
    height: 100,
};
exports.NODE_MIN_WIDTH = 160;
exports.NODE_MIN_HEIGHT = 80;
var MIN_SIZE_FOR_NODES = function (grid, width, height) {
    if (width === void 0) { width = exports.NODE_MIN_WIDTH; }
    if (height === void 0) { height = exports.NODE_MIN_HEIGHT; }
    var snapped = (0, SnapGrid_1.snapPoint)(grid, { "@_x": width, "@_y": height }, "ceil");
    return { width: snapped["@_x"], height: snapped["@_y"] };
};
//# sourceMappingURL=DefaultSizes.js.map