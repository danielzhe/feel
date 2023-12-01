"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaleFromCenter = exports.getCenter = exports.getPositionalHandlePosition = exports.getDiscretelyAutoPositionedEdgeParams = exports.getDiscretelyAutoPositionedEdgeParamsForRfNodes = void 0;
var RF = __importStar(require("reactflow"));
function getDiscretelyAutoPositionedEdgeParamsForRfNodes(source, target) {
    var _a, _b, _c, _d;
    var src = {
        x: (_a = source.positionAbsolute) === null || _a === void 0 ? void 0 : _a.x,
        y: (_b = source.positionAbsolute) === null || _b === void 0 ? void 0 : _b.y,
        width: source.width,
        height: source.height,
    };
    var tgt = {
        x: (_c = target.positionAbsolute) === null || _c === void 0 ? void 0 : _c.x,
        y: (_d = target.positionAbsolute) === null || _d === void 0 ? void 0 : _d.y,
        width: target.width,
        height: target.height,
    };
    return getDiscretelyAutoPositionedEdgeParams(src, tgt);
}
exports.getDiscretelyAutoPositionedEdgeParamsForRfNodes = getDiscretelyAutoPositionedEdgeParamsForRfNodes;
function getDiscretelyAutoPositionedEdgeParams(src, tgt) {
    var _a = __read(getPositionalHandlePosition(src, tgt), 3), sx = _a[0], sy = _a[1], sourcePos = _a[2];
    var _b = __read(getPositionalHandlePosition(tgt, src), 3), tx = _b[0], ty = _b[1], targetPos = _b[2];
    return { sx: sx, sy: sy, tx: tx, ty: ty, sourcePos: sourcePos, targetPos: targetPos };
}
exports.getDiscretelyAutoPositionedEdgeParams = getDiscretelyAutoPositionedEdgeParams;
function getPositionalHandlePosition(a, b) {
    var centerA = getCenter(a.x, a.y, a.width, a.height);
    var centerB = getCenter(b.x, b.y, b.width, b.height);
    var horizontalDiff = Math.abs(centerA.x - centerB.x);
    var verticalDiff = Math.abs(centerA.y - centerB.y);
    var position;
    if (horizontalDiff > verticalDiff) {
        position = centerA.x > centerB.x ? RF.Position.Left : RF.Position.Right;
    }
    else {
        position = centerA.y > centerB.y ? RF.Position.Top : RF.Position.Bottom;
    }
    var _a = __read(getHandleCoordsByPosition(a, position), 2), x = _a[0], y = _a[1];
    return [x, y, position];
}
exports.getPositionalHandlePosition = getPositionalHandlePosition;
function getCenter(x, y, width, height) {
    return {
        x: (x !== null && x !== void 0 ? x : 0) + (width !== null && width !== void 0 ? width : 0) / 2,
        y: (y !== null && y !== void 0 ? y : 0) + (height !== null && height !== void 0 ? height : 0) / 2,
    };
}
exports.getCenter = getCenter;
function scaleFromCenter(amount, node) {
    var _a, _b, _c, _d, _e, _f;
    return {
        position: {
            x: ((_b = (_a = node.position) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : 0) - amount,
            y: ((_d = (_c = node.position) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0) - amount,
        },
        dimensions: {
            width: ((_e = node.dimensions.width) !== null && _e !== void 0 ? _e : 0) + amount * 2,
            height: ((_f = node.dimensions.height) !== null && _f !== void 0 ? _f : 0) + amount * 2,
        },
    };
}
exports.scaleFromCenter = scaleFromCenter;
function getHandleCoordsByPosition(node, handlePosition) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var handleX = 0;
    var handleY = 0;
    switch (handlePosition) {
        case RF.Position.Left:
            handleX = 0;
            handleY = ((_a = node.height) !== null && _a !== void 0 ? _a : 0) / 2;
            break;
        case RF.Position.Right:
            handleX = (_b = node.width) !== null && _b !== void 0 ? _b : 0;
            handleY = ((_c = node.height) !== null && _c !== void 0 ? _c : 0) / 2;
            break;
        case RF.Position.Top:
            handleX = ((_d = node.width) !== null && _d !== void 0 ? _d : 0) / 2;
            handleY = 0;
            break;
        case RF.Position.Bottom:
            handleX = ((_e = node.width) !== null && _e !== void 0 ? _e : 0) / 2;
            handleY = (_f = node.height) !== null && _f !== void 0 ? _f : 0;
            break;
    }
    return [((_g = node === null || node === void 0 ? void 0 : node.x) !== null && _g !== void 0 ? _g : 0) + handleX, ((_h = node === null || node === void 0 ? void 0 : node.y) !== null && _h !== void 0 ? _h : 0) + handleY];
}
//# sourceMappingURL=Maths.js.map