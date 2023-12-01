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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentationLinksFormGroup = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("react");
require("./DocumentationLinksFormGroup.css");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var plus_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/plus-circle-icon");
var times_icon_1 = require("@patternfly/react-icons/dist/js/icons/times-icon");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var angle_down_icon_1 = require("@patternfly/react-icons/dist/js/icons/angle-down-icon");
var angle_right_icon_1 = require("@patternfly/react-icons/dist/js/icons/angle-right-icon");
var InlineFeelNameInput_1 = require("../feel/InlineFeelNameInput");
var api_1 = require("@kie-tools/boxed-expression-component/dist/api");
var Draggable_1 = require("../draggable/Draggable");
var PLACEHOLDER_URL_TITLE = "Enter a title...";
var PLACEHOLDER_URL = "http://";
function DocumentationLinksFormGroup(_a) {
    var _b;
    var isReadonly = _a.isReadonly, values = _a.values, onChange = _a.onChange;
    var _c = __read((0, react_1.useState)(true), 2), autoFocusFirst = _c[0], setAutoFocusFirst = _c[1];
    var _d = __read((0, react_1.useState)((_b = (values !== null && values !== void 0 ? values : [])) === null || _b === void 0 ? void 0 : _b.map(function (_) { return (0, api_1.generateUuid)(); })), 2), valuesUuid = _d[0], setValuesUuid = _d[1];
    var valuesCache = (0, react_1.useRef)(values !== null && values !== void 0 ? values : []);
    (0, react_1.useEffect)(function () {
        var _a;
        if (JSON.stringify(values) !== JSON.stringify(valuesCache.current)) {
            setValuesUuid((_a = (values !== null && values !== void 0 ? values : [])) === null || _a === void 0 ? void 0 : _a.map(function () { return (0, api_1.generateUuid)(); }));
            valuesCache.current = __spreadArray([], __read((values !== null && values !== void 0 ? values : [])), false);
        }
    }, [values]);
    var _e = __read((0, react_1.useState)([]), 2), expandedUrls = _e[0], setExpandedUrls = _e[1];
    var onInternalChange = (0, react_1.useCallback)(function (newValues) {
        valuesCache.current = __spreadArray([], __read(newValues), false);
        onChange === null || onChange === void 0 ? void 0 : onChange(newValues);
    }, [onChange]);
    var onAdd = (0, react_1.useCallback)(function () {
        setAutoFocusFirst(true);
        var newValues = __spreadArray([], __read((values !== null && values !== void 0 ? values : [])), false);
        newValues.unshift({ "@_name": "", "@_url": "" });
        setExpandedUrls(function (prev) {
            var newUrlExpanded = __spreadArray([], __read(prev), false);
            newUrlExpanded.unshift(true);
            return newUrlExpanded;
        });
        setValuesUuid(function (prev) { return __spreadArray([(0, api_1.generateUuid)()], __read(prev), false); });
        onInternalChange(newValues);
    }, [onInternalChange, values]);
    var onChangeKieAttachment = (0, react_1.useCallback)(function (args) {
        var _a, _b, _c;
        setAutoFocusFirst(false);
        if (isReadonly) {
            return;
        }
        var newValues = __spreadArray([], __read((values !== null && values !== void 0 ? values : [])), false);
        var newKieAttachment = (_a = newValues[args.index]) !== null && _a !== void 0 ? _a : { "@_name": "", "@_url": "" };
        newValues[args.index] = {
            "@_name": (_b = args.newUrlTitle) !== null && _b !== void 0 ? _b : newKieAttachment["@_name"],
            "@_url": (_c = args.newUrl) !== null && _c !== void 0 ? _c : newKieAttachment["@_url"],
        };
        onInternalChange(newValues);
    }, [isReadonly, onInternalChange, values]);
    var onRemove = (0, react_1.useCallback)(function (index) {
        setAutoFocusFirst(false);
        var newValues = __spreadArray([], __read((values !== null && values !== void 0 ? values : [])), false);
        newValues.splice(index, 1);
        setValuesUuid(function (prev) {
            var newUuids = __spreadArray([], __read(prev), false);
            newUuids.splice(index, 1);
            return newUuids;
        });
        setExpandedUrls(function (prev) {
            var newUrlExpanded = __spreadArray([], __read(prev), false);
            newUrlExpanded.splice(index, 1);
            return newUrlExpanded;
        });
        onInternalChange(newValues);
    }, [onInternalChange, values]);
    var setUrlExpanded = (0, react_1.useCallback)(function (isExpanded, index) {
        setExpandedUrls(function (prev) {
            var newUrlExpanded = __spreadArray([], __read(prev), false);
            newUrlExpanded[index] = isExpanded;
            return newUrlExpanded;
        });
    }, []);
    var onDragEnd = (0, react_1.useCallback)(function (source, dest) {
        var reordened = __spreadArray([], __read((values !== null && values !== void 0 ? values : [])), false);
        var _a = __read(reordened.splice(source, 1), 1), removed = _a[0];
        reordened.splice(dest, 0, removed);
        onInternalChange(reordened);
    }, [onInternalChange, values]);
    var reorder = (0, react_1.useCallback)(function (source, dest) {
        setExpandedUrls(function (prev) {
            var newUrlExpanded = __spreadArray([], __read(prev), false);
            var _a = __read(newUrlExpanded.splice(source, 1), 1), removed = _a[0];
            newUrlExpanded.splice(dest, 0, removed);
            return newUrlExpanded;
        });
        setValuesUuid(function (prev) {
            var reordenedUuid = __spreadArray([], __read(prev), false);
            var _a = __read(reordenedUuid.splice(source, 1), 1), removedUuid = _a[0];
            reordenedUuid.splice(dest, 0, removedUuid);
            return reordenedUuid;
        });
    }, []);
    var draggableItem = (0, react_1.useCallback)(function (kieAttachment, index) {
        var _a, _b, _c;
        return ((0, jsx_runtime_1.jsx)(Draggable_1.Draggable, __assign({ index: index, rowClassName: index !== 0 ? "kie-dmn-editor--documentation-link--not-first-element" : "", handlerStyle: expandedUrls[index]
                ? { alignSelf: "flex-start", paddingTop: "8px", paddingLeft: "24px", paddingRight: "8px" }
                : { paddingLeft: "24px", paddingRight: "8px" } }, { children: (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(DocumentationLinksInput, { title: (_a = kieAttachment["@_name"]) !== null && _a !== void 0 ? _a : "", url: (_b = kieAttachment["@_url"]) !== null && _b !== void 0 ? _b : "", isReadonly: isReadonly, onChange: function (newUrlTitle, newUrl) { return onChangeKieAttachment({ newUrlTitle: newUrlTitle, newUrl: newUrl, index: index }); }, onRemove: function () { return onRemove(index); }, isUrlExpanded: expandedUrls[index], setUrlExpanded: function (isExpanded) { return setUrlExpanded(isExpanded, index); }, autoFocus: autoFocusFirst ? index === 0 : false }) }) }), (_c = valuesUuid === null || valuesUuid === void 0 ? void 0 : valuesUuid[index]) !== null && _c !== void 0 ? _c : (0, api_1.generateUuid)()));
    }, [autoFocusFirst, expandedUrls, isReadonly, onChangeKieAttachment, onRemove, setUrlExpanded, valuesUuid]);
    return ((0, jsx_runtime_1.jsx)(Form_1.FormGroup, __assign({ label: (0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex", flexDirection: "row" } }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ className: "pf-c-form__label", style: { flexGrow: 1, cursor: "auto" } }, { children: (0, jsx_runtime_1.jsx)("span", __assign({ className: "pf-c-form__label-text" }, { children: "Documentation links" })) })), !isReadonly && (0, jsx_runtime_1.jsx)(Button_1.Button, { variant: "plain", icon: (0, jsx_runtime_1.jsx)(plus_circle_icon_1.PlusCircleIcon, {}), onClick: onAdd })] })) }, { children: (0, jsx_runtime_1.jsxs)("ul", { children: [(values !== null && values !== void 0 ? values : []).length === 0 && ((0, jsx_runtime_1.jsx)("li", __assign({ className: "kie-dmn-editor--documentation-link--empty-state" }, { children: isReadonly ? "None" : "None yet" }))), (0, jsx_runtime_1.jsx)(Draggable_1.DragAndDrop, { reorder: reorder, onDragEnd: onDragEnd, values: values, draggableItem: draggableItem, isDisabled: isReadonly })] }) })));
}
exports.DocumentationLinksFormGroup = DocumentationLinksFormGroup;
function DocumentationLinksInput(_a) {
    var title = _a.title, url = _a.url, isReadonly = _a.isReadonly, isUrlExpanded = _a.isUrlExpanded, onChange = _a.onChange, onRemove = _a.onRemove, setUrlExpanded = _a.setUrlExpanded, parentAutoFocus = _a.autoFocus;
    var urlTitleRef = (0, react_1.useRef)(null);
    var uuid = (0, react_1.useMemo)(function () { return (0, api_1.generateUuid)(); }, []);
    var _b = __read((0, react_1.useState)(false), 2), titleIsUrl = _b[0], setTitleIsUrl = _b[1];
    var updatedOnToogle = (0, react_1.useRef)(false);
    var hovered = (0, Draggable_1.useDraggableItemContext)().hovered;
    var _c = __read((0, react_1.useState)(false), 2), autoFocus = _c[0], setAutoFocus = _c[1];
    var parseUrl = (0, react_1.useCallback)(function (newUrl) {
        try {
            var url_1 = new URL(newUrl);
            return url_1.toString();
        }
        catch (error) {
            try {
                if (!newUrl.includes("http://") && !newUrl.includes("https://")) {
                    var urlWithProtocol = "http://" + newUrl + "/";
                    var url_2 = new URL(urlWithProtocol);
                    return url_2.toString() === urlWithProtocol ? url_2.toString() : undefined;
                }
            }
            catch (error) {
                return undefined;
            }
            return undefined;
        }
    }, []);
    var toogleExpanded = (0, react_1.useCallback)(function (title, url) {
        var parsedUrl = parseUrl(url);
        if (parsedUrl !== undefined && isUrlExpanded === true && (title === "" || titleIsUrl)) {
            setTitleIsUrl(true);
            updatedOnToogle.current = true;
            onChange(parsedUrl, parsedUrl);
            setUrlExpanded(false);
            setAutoFocus(false);
        }
        else if (parsedUrl !== undefined && parsedUrl !== url && isUrlExpanded === true) {
            updatedOnToogle.current = true;
            onChange(title, parsedUrl);
            setUrlExpanded(false);
            setAutoFocus(false);
        }
        else if (url !== "" && parsedUrl === undefined && title === "") {
            updatedOnToogle.current = true;
            onChange("", url);
        }
        else if (url !== "" && parsedUrl === undefined) {
        }
        else {
            setUrlExpanded(!isUrlExpanded);
            setAutoFocus(!isUrlExpanded);
        }
    }, [isUrlExpanded, titleIsUrl, parseUrl, setUrlExpanded, onChange]);
    var isUrl = (0, react_1.useMemo)(function () {
        try {
            return new URL(url) && !isUrlExpanded;
        }
        catch (error) {
            return false;
        }
    }, [url, isUrlExpanded]);
    var allUniqueNames = (0, react_1.useMemo)(function () { return new Map(); }, []);
    var validateTitle = (0, react_1.useCallback)(function (id, name, allUniqueNames) { return true; }, []);
    var validateUrl = (0, react_1.useCallback)(function (id, url, allUniqueNames) {
        if (url !== undefined && url !== "") {
            return parseUrl(url) !== undefined;
        }
        return true;
    }, [parseUrl]);
    var urlDescriptionTooltip = (0, react_1.useMemo)(function () {
        return url !== "" ? ((0, jsx_runtime_1.jsx)(Text_1.Text, __assign({ component: Text_1.TextVariants.p }, { children: url }))) : ((0, jsx_runtime_1.jsx)(Text_1.Text, __assign({ component: Text_1.TextVariants.p }, { children: "Empty URL" })));
    }, [url]);
    var removeTooltip = (0, react_1.useMemo)(function () { return (0, jsx_runtime_1.jsx)(Text_1.Text, __assign({ component: Text_1.TextVariants.p }, { children: "Remove" })); }, []);
    return ((0, jsx_runtime_1.jsx)(React.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "kie-dmn-editor--documentation-link--row" }, { children: [(0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ variant: Button_1.ButtonVariant.plain, className: "kie-dmn-editor--documentation-link--row-expand-toogle", onClick: function () { return toogleExpanded(title, url); } }, { children: (isUrlExpanded && (0, jsx_runtime_1.jsx)(angle_down_icon_1.AngleDownIcon, {})) || (0, jsx_runtime_1.jsx)(angle_right_icon_1.AngleRightIcon, {}) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "kie-dmn-editor--documentation-link--row-item" }, { children: !isUrlExpanded ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ ref: urlTitleRef, className: "kie-dmn-editor--documentation-link--row-title" }, { children: isUrl ? ((0, jsx_runtime_1.jsx)("a", __assign({ href: url, target: "_blank" }, { children: title }))) : ((0, jsx_runtime_1.jsx)("p", __assign({ style: title === "" ? {} : InlineFeelNameInput_1.invalidInlineFeelNameStyle, onClick: function () { return setUrlExpanded(true); } }, { children: title !== "" ? title : PLACEHOLDER_URL_TITLE }))) })), !isUrlExpanded && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, { content: urlDescriptionTooltip, position: Tooltip_1.TooltipPosition.topStart, reference: urlTitleRef }))] })) : ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "kie-dmn-editor--documentation-link--row-inputs" }, { children: [(0, jsx_runtime_1.jsx)(InlineFeelNameInput_1.InlineFeelNameInput, { isPlain: true, isReadonly: isReadonly, id: "".concat(uuid, "-name"), shouldCommitOnBlur: true, placeholder: PLACEHOLDER_URL_TITLE, name: title !== null && title !== void 0 ? title : "", onRenamed: function (newUrlTitle) {
                                    if (!updatedOnToogle.current && newUrlTitle !== title) {
                                        onChange(newUrlTitle, url);
                                        setTitleIsUrl(false);
                                    }
                                    updatedOnToogle.current = false;
                                }, allUniqueNames: allUniqueNames, validate: validateTitle, autoFocus: parentAutoFocus || autoFocus, onKeyDown: function (e) {
                                    if (e.code === "Enter") {
                                        toogleExpanded(e.currentTarget.value, url);
                                    }
                                } }), (0, jsx_runtime_1.jsx)(InlineFeelNameInput_1.InlineFeelNameInput, { className: "kie-dmn-editor--documentation-link--row-inputs-url", isPlain: true, isReadonly: isReadonly, id: "".concat(uuid, "-url"), shouldCommitOnBlur: true, placeholder: PLACEHOLDER_URL, name: url !== null && url !== void 0 ? url : "", onRenamed: function (newUrl) {
                                    if (!updatedOnToogle.current && newUrl !== url) {
                                        onChange(title, newUrl);
                                    }
                                    updatedOnToogle.current = false;
                                }, allUniqueNames: allUniqueNames, validate: validateUrl, saveInvalidValue: true, onKeyDown: function (e) {
                                    if (e.code === "Enter") {
                                        toogleExpanded(title, e.currentTarget.value);
                                    }
                                } })] }))) })), hovered && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, __assign({ content: removeTooltip }, { children: (0, jsx_runtime_1.jsx)(Button_1.Button, { className: "kie-dmn-editor--documentation-link--row-remove", variant: "plain", icon: (0, jsx_runtime_1.jsx)(times_icon_1.TimesIcon, {}), onClick: function () { return onRemove(); } }) })))] })) }));
}
//# sourceMappingURL=DocumentationLinksFormGroup.js.map