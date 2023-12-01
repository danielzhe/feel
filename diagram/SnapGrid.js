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
Object.defineProperty(exports, "__esModule", { value: true });
exports.snap = exports.snapPoint = exports.snapBoundsDimensions = exports.snapShapeDimensions = exports.offsetShapePosition = exports.snapBoundsPosition = exports.snapShapePosition = void 0;
function snapShapePosition(snapGrid, shape) {
    return snapBoundsPosition(snapGrid, shape["dc:Bounds"]);
}
exports.snapShapePosition = snapShapePosition;
function snapBoundsPosition(snapGrid, bounds) {
    return {
        x: snap(snapGrid, "x", bounds === null || bounds === void 0 ? void 0 : bounds["@_x"]),
        y: snap(snapGrid, "y", bounds === null || bounds === void 0 ? void 0 : bounds["@_y"]),
    };
}
exports.snapBoundsPosition = snapBoundsPosition;
function offsetShapePosition(shape, offset) {
    if (!shape["dc:Bounds"]) {
        return shape;
    }
    return __assign(__assign({}, shape), { "dc:Bounds": __assign(__assign({}, shape["dc:Bounds"]), { "@_x": offset.x + shape["dc:Bounds"]["@_x"], "@_y": offset.y + shape["dc:Bounds"]["@_y"] }) });
}
exports.offsetShapePosition = offsetShapePosition;
function snapShapeDimensions(grid, shape, minSizes) {
    return snapBoundsDimensions(grid, shape["dc:Bounds"], minSizes);
}
exports.snapShapeDimensions = snapShapeDimensions;
function snapBoundsDimensions(grid, bounds, minSizes) {
    return {
        width: Math.max(snap(grid, "x", bounds === null || bounds === void 0 ? void 0 : bounds["@_width"]), minSizes["@_width"]),
        height: Math.max(snap(grid, "y", bounds === null || bounds === void 0 ? void 0 : bounds["@_height"]), minSizes["@_height"]),
    };
}
exports.snapBoundsDimensions = snapBoundsDimensions;
function snapPoint(grid, point, method) {
    if (method === void 0) { method = "round"; }
    return {
        "@_x": snap(grid, "x", point === null || point === void 0 ? void 0 : point["@_x"], method),
        "@_y": snap(grid, "y", point === null || point === void 0 ? void 0 : point["@_y"], method),
    };
}
exports.snapPoint = snapPoint;
function snap(grid, coord, value, method) {
    if (method === void 0) { method = "round"; }
    return grid.isEnabled
        ? Math[method]((value !== null && value !== void 0 ? value : 0) / grid[coord]) * grid[coord]
        : value !== null && value !== void 0 ? value : 0;
}
exports.snap = snap;
//# sourceMappingURL=SnapGrid.js.map