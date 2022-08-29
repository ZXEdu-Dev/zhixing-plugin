var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.AlgorithmAnimation = factory());
})(this, function() {
  "use strict";
  const ALGORITHM_BINARY_SEARCH = "Binary Search";
  const ALGORITHM_QUICK_SORT = "Quick Sort";
  const ALGORITHM_MERGE_SORT = "Merge Sort";
  const NAME = {
    [ALGORITHM_BINARY_SEARCH]: "\u4E8C\u5206\u67E5\u627E",
    [ALGORITHM_QUICK_SORT]: "\u5FEB\u901F\u6392\u5E8F",
    [ALGORITHM_MERGE_SORT]: "\u5F52\u5E76\u6392\u5E8F"
  };
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
  
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
  
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
  var extendStatics = function(d, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b3) {
      d2.__proto__ = b3;
    } || function(d2, b3) {
      for (var p in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p))
          d2[p] = b3[p];
    };
    return extendStatics(d, b2);
  };
  function __extends(d, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d, b2);
    function __() {
      this.constructor = d;
    }
    d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  }
  var __assign = function() {
    __assign = Object.assign || function __assign2(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  function __rest(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || from);
  }
  var createDefinition = function(propNames) {
    return {
      isEnabled: function(props) {
        return propNames.some(function(name) {
          return !!props[name];
        });
      }
    };
  };
  var featureDefinitions = {
    measureLayout: createDefinition([
      "layout",
      "layoutId",
      "drag",
      "_layoutResetTransform"
    ]),
    animation: createDefinition([
      "animate",
      "exit",
      "variants",
      "whileHover",
      "whileTap",
      "whileFocus",
      "whileDrag"
    ]),
    exit: createDefinition(["exit"]),
    drag: createDefinition(["drag", "dragControls"]),
    focus: createDefinition(["whileFocus"]),
    hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
    tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
    pan: createDefinition([
      "onPan",
      "onPanStart",
      "onPanSessionStart",
      "onPanEnd"
    ]),
    layoutAnimation: createDefinition(["layout", "layoutId"])
  };
  function loadFeatures(features) {
    for (var key in features) {
      var Component = features[key];
      if (Component !== null)
        featureDefinitions[key].Component = Component;
    }
  }
  var invariant = function() {
  };
  var LazyContext = React.createContext({ strict: false });
  var featureNames = Object.keys(featureDefinitions);
  var numFeatures = featureNames.length;
  function useFeatures(props, visualElement2, preloadedFeatures) {
    var features = [];
    React.useContext(LazyContext);
    if (!visualElement2)
      return null;
    for (var i = 0; i < numFeatures; i++) {
      var name_1 = featureNames[i];
      var _a = featureDefinitions[name_1], isEnabled = _a.isEnabled, Component = _a.Component;
      if (isEnabled(props) && Component) {
        features.push(React.createElement(Component, __assign({ key: name_1 }, props, { visualElement: visualElement2 })));
      }
    }
    return features;
  }
  var MotionConfigContext = React.createContext({
    transformPagePoint: function(p) {
      return p;
    },
    isStatic: false
  });
  var MotionContext = React.createContext({});
  function useVisualElementContext() {
    return React.useContext(MotionContext).visualElement;
  }
  var PresenceContext = React.createContext(null);
  function useConstant(init) {
    var ref = React.useRef(null);
    if (ref.current === null) {
      ref.current = init();
    }
    return ref.current;
  }
  function usePresence() {
    var context = React.useContext(PresenceContext);
    if (context === null)
      return [true, null];
    var isPresent2 = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
    var id = useUniqueId();
    React.useEffect(function() {
      return register(id);
    }, []);
    var safeToRemove = function() {
      return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id);
    };
    return !isPresent2 && onExitComplete ? [false, safeToRemove] : [true];
  }
  function isPresent(context) {
    return context === null ? true : context.isPresent;
  }
  var counter = 0;
  var incrementId = function() {
    return counter++;
  };
  var useUniqueId = function() {
    return useConstant(incrementId);
  };
  var LayoutGroupContext = React.createContext(null);
  var isBrowser = typeof window !== "undefined";
  var useIsomorphicLayoutEffect = isBrowser ? React.useLayoutEffect : React.useEffect;
  function useLayoutId(_a) {
    var layoutId = _a.layoutId;
    var layoutGroupId = React.useContext(LayoutGroupContext);
    return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
  }
  function useVisualElement(Component, visualState, props, createVisualElement) {
    var config = React.useContext(MotionConfigContext);
    var lazyContext = React.useContext(LazyContext);
    var parent = useVisualElementContext();
    var presenceContext = React.useContext(PresenceContext);
    var layoutId = useLayoutId(props);
    var visualElementRef = React.useRef(void 0);
    if (!createVisualElement)
      createVisualElement = lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
      visualElementRef.current = createVisualElement(Component, {
        visualState,
        parent,
        props: __assign(__assign({}, props), { layoutId }),
        presenceId: presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id,
        blockInitialAnimation: (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false
      });
    }
    var visualElement2 = visualElementRef.current;
    useIsomorphicLayoutEffect(function() {
      if (!visualElement2)
        return;
      visualElement2.setProps(__assign(__assign(__assign({}, config), props), { layoutId }));
      visualElement2.isPresent = isPresent(presenceContext);
      visualElement2.isPresenceRoot = !parent || parent.presenceId !== (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id);
      visualElement2.syncRender();
    });
    React.useEffect(function() {
      var _a;
      if (!visualElement2)
        return;
      (_a = visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.animateChanges();
    });
    useIsomorphicLayoutEffect(function() {
      return function() {
        return visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.notifyUnmount();
      };
    }, []);
    return visualElement2;
  }
  function isRefObject(ref) {
    return typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
  }
  function useMotionRef(visualState, visualElement2, externalRef) {
    return React.useCallback(function(instance) {
      var _a;
      instance && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance));
      if (visualElement2) {
        instance ? visualElement2.mount(instance) : visualElement2.unmount();
      }
      if (externalRef) {
        if (typeof externalRef === "function") {
          externalRef(instance);
        } else if (isRefObject(externalRef)) {
          externalRef.current = instance;
        }
      }
    }, [visualElement2]);
  }
  function isVariantLabels(v) {
    return Array.isArray(v);
  }
  function isVariantLabel(v) {
    return typeof v === "string" || isVariantLabels(v);
  }
  function getCurrent(visualElement2) {
    var current = {};
    visualElement2.forEachValue(function(value, key) {
      return current[key] = value.get();
    });
    return current;
  }
  function getVelocity$1(visualElement2) {
    var velocity = {};
    visualElement2.forEachValue(function(value, key) {
      return velocity[key] = value.getVelocity();
    });
    return velocity;
  }
  function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
    var _a;
    if (currentValues === void 0) {
      currentValues = {};
    }
    if (currentVelocity === void 0) {
      currentVelocity = {};
    }
    if (typeof definition === "string") {
      definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
    }
    return typeof definition === "function" ? definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity) : definition;
  }
  function resolveVariant(visualElement2, definition, custom) {
    var props = visualElement2.getProps();
    return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement2), getVelocity$1(visualElement2));
  }
  function checkIfControllingVariants(props) {
    var _a;
    return typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" || isVariantLabel(props.initial) || isVariantLabel(props.animate) || isVariantLabel(props.whileHover) || isVariantLabel(props.whileDrag) || isVariantLabel(props.whileTap) || isVariantLabel(props.whileFocus) || isVariantLabel(props.exit);
  }
  function checkIfVariantNode(props) {
    return Boolean(checkIfControllingVariants(props) || props.variants);
  }
  function getCurrentTreeVariants(props, context) {
    if (checkIfControllingVariants(props)) {
      var initial = props.initial, animate2 = props.animate;
      return {
        initial: initial === false || isVariantLabel(initial) ? initial : void 0,
        animate: isVariantLabel(animate2) ? animate2 : void 0
      };
    }
    return props.inherit !== false ? context : {};
  }
  function useCreateMotionContext(props, isStatic) {
    var _a = getCurrentTreeVariants(props, React.useContext(MotionContext)), initial = _a.initial, animate2 = _a.animate;
    return React.useMemo(function() {
      return { initial, animate: animate2 };
    }, isStatic ? [
      variantLabelsAsDependency(initial),
      variantLabelsAsDependency(animate2)
    ] : []);
  }
  function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
  }
  function createMotionComponent(_a) {
    var preloadedFeatures = _a.preloadedFeatures, createVisualElement = _a.createVisualElement, useRender = _a.useRender, useVisualState = _a.useVisualState, Component = _a.Component;
    preloadedFeatures && loadFeatures(preloadedFeatures);
    function MotionComponent(props, externalRef) {
      var isStatic = React.useContext(MotionConfigContext).isStatic;
      var features = null;
      var context = useCreateMotionContext(props, isStatic);
      var visualState = useVisualState(props, isStatic);
      if (!isStatic && isBrowser) {
        context.visualElement = useVisualElement(Component, visualState, props, createVisualElement);
        features = useFeatures(props, context.visualElement);
      }
      return React.createElement(React.Fragment, null, React.createElement(MotionContext.Provider, { value: context }, useRender(Component, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic)), features);
    }
    return React.forwardRef(MotionComponent);
  }
  function createMotionProxy(createConfig) {
    function custom(Component, customMotionComponentConfig) {
      if (customMotionComponentConfig === void 0) {
        customMotionComponentConfig = {};
      }
      return createMotionComponent(createConfig(Component, customMotionComponentConfig));
    }
    var componentCache = new Map();
    return new Proxy(custom, {
      get: function(_target, key) {
        if (!componentCache.has(key)) {
          componentCache.set(key, custom(key));
        }
        return componentCache.get(key);
      }
    });
  }
  var lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "tspan",
    "use",
    "view"
  ];
  function isSVGComponent(Component) {
    if (typeof Component !== "string" || Component.includes("-")) {
      return false;
    } else if (lowercaseSVGElements.indexOf(Component) > -1 || /[A-Z]/.test(Component)) {
      return true;
    }
    return false;
  }
  var valueScaleCorrection = {};
  function addScaleCorrection(correctors) {
    for (var key in correctors) {
      valueScaleCorrection[key] = correctors[key];
    }
  }
  var transformAxes = ["", "X", "Y", "Z"];
  var order = ["translate", "scale", "rotate", "skew"];
  var transformProps = ["transformPerspective", "x", "y", "z"];
  order.forEach(function(operationKey) {
    return transformAxes.forEach(function(axesKey) {
      return transformProps.push(operationKey + axesKey);
    });
  });
  function sortTransformProps(a2, b2) {
    return transformProps.indexOf(a2) - transformProps.indexOf(b2);
  }
  var transformPropSet = new Set(transformProps);
  function isTransformProp(key) {
    return transformPropSet.has(key);
  }
  var transformOriginProps = new Set(["originX", "originY", "originZ"]);
  function isTransformOriginProp(key) {
    return transformOriginProps.has(key);
  }
  function isForcedMotionValue(key, _a) {
    var layout = _a.layout, layoutId = _a.layoutId;
    return isTransformProp(key) || isTransformOriginProp(key) || (layout || layoutId !== void 0) && (!!valueScaleCorrection[key] || key === "opacity");
  }
  var isMotionValue = function(value) {
    return value !== null && typeof value === "object" && value.getVelocity;
  };
  var translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  };
  function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
    var transform = _a.transform, transformKeys2 = _a.transformKeys;
    var _c = _b.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b.allowTransformNone, allowTransformNone = _d === void 0 ? true : _d;
    var transformString = "";
    transformKeys2.sort(sortTransformProps);
    var transformHasZ = false;
    var numTransformKeys = transformKeys2.length;
    for (var i = 0; i < numTransformKeys; i++) {
      var key = transformKeys2[i];
      transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
      if (key === "z")
        transformHasZ = true;
    }
    if (!transformHasZ && enableHardwareAcceleration) {
      transformString += "translateZ(0)";
    } else {
      transformString = transformString.trim();
    }
    if (transformTemplate) {
      transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    } else if (allowTransformNone && transformIsDefault) {
      transformString = "none";
    }
    return transformString;
  }
  function buildTransformOrigin(_a) {
    var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
    return originX + " " + originY + " " + originZ;
  }
  function isCSSVariable$1(key) {
    return key.startsWith("--");
  }
  var getValueAsType = function(value, type) {
    return type && typeof value === "number" ? type.transform(value) : value;
  };
  var clamp$1 = function(min, max) {
    return function(v) {
      return Math.max(Math.min(v, max), min);
    };
  };
  var sanitize = function(v) {
    return v % 1 ? Number(v.toFixed(5)) : v;
  };
  var floatRegex = /(-)?([\d]*\.?[\d])+/g;
  var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
  var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
  function isString(v) {
    return typeof v === "string";
  }
  var number = {
    test: function(v) {
      return typeof v === "number";
    },
    parse: parseFloat,
    transform: function(v) {
      return v;
    }
  };
  var alpha = __assign(__assign({}, number), { transform: clamp$1(0, 1) });
  var scale = __assign(__assign({}, number), { default: 1 });
  var createUnitType = function(unit) {
    return {
      test: function(v) {
        return isString(v) && v.endsWith(unit) && v.split(" ").length === 1;
      },
      parse: parseFloat,
      transform: function(v) {
        return "" + v + unit;
      }
    };
  };
  var degrees = createUnitType("deg");
  var percent = createUnitType("%");
  var px = createUnitType("px");
  var vh = createUnitType("vh");
  var vw = createUnitType("vw");
  var progressPercentage = __assign(__assign({}, percent), { parse: function(v) {
    return percent.parse(v) / 100;
  }, transform: function(v) {
    return percent.transform(v * 100);
  } });
  var isColorString = function(type, testProp) {
    return function(v) {
      return Boolean(isString(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
    };
  };
  var splitColor = function(aName, bName, cName) {
    return function(v) {
      var _a;
      if (!isString(v))
        return v;
      var _b = v.match(floatRegex), a2 = _b[0], b2 = _b[1], c2 = _b[2], alpha2 = _b[3];
      return _a = {}, _a[aName] = parseFloat(a2), _a[bName] = parseFloat(b2), _a[cName] = parseFloat(c2), _a.alpha = alpha2 !== void 0 ? parseFloat(alpha2) : 1, _a;
    };
  };
  var hsla = {
    test: isColorString("hsl", "hue"),
    parse: splitColor("hue", "saturation", "lightness"),
    transform: function(_a) {
      var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
      return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
    }
  };
  var clampRgbUnit = clamp$1(0, 255);
  var rgbUnit = __assign(__assign({}, number), { transform: function(v) {
    return Math.round(clampRgbUnit(v));
  } });
  var rgba = {
    test: isColorString("rgb", "red"),
    parse: splitColor("red", "green", "blue"),
    transform: function(_a) {
      var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
      return "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
    }
  };
  function parseHex(v) {
    var r = "";
    var g = "";
    var b2 = "";
    var a2 = "";
    if (v.length > 5) {
      r = v.substr(1, 2);
      g = v.substr(3, 2);
      b2 = v.substr(5, 2);
      a2 = v.substr(7, 2);
    } else {
      r = v.substr(1, 1);
      g = v.substr(2, 1);
      b2 = v.substr(3, 1);
      a2 = v.substr(4, 1);
      r += r;
      g += g;
      b2 += b2;
      a2 += a2;
    }
    return {
      red: parseInt(r, 16),
      green: parseInt(g, 16),
      blue: parseInt(b2, 16),
      alpha: a2 ? parseInt(a2, 16) / 255 : 1
    };
  }
  var hex = {
    test: isColorString("#"),
    parse: parseHex,
    transform: rgba.transform
  };
  var color = {
    test: function(v) {
      return rgba.test(v) || hex.test(v) || hsla.test(v);
    },
    parse: function(v) {
      if (rgba.test(v)) {
        return rgba.parse(v);
      } else if (hsla.test(v)) {
        return hsla.parse(v);
      } else {
        return hex.parse(v);
      }
    },
    transform: function(v) {
      return isString(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
    }
  };
  var colorToken = "${c}";
  var numberToken = "${n}";
  function test(v) {
    var _a, _b, _c, _d;
    return isNaN(v) && isString(v) && ((_b = (_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
  }
  function analyse$1(v) {
    var values = [];
    var numColors = 0;
    var colors = v.match(colorRegex);
    if (colors) {
      numColors = colors.length;
      v = v.replace(colorRegex, colorToken);
      values.push.apply(values, colors.map(color.parse));
    }
    var numbers = v.match(floatRegex);
    if (numbers) {
      v = v.replace(floatRegex, numberToken);
      values.push.apply(values, numbers.map(number.parse));
    }
    return { values, numColors, tokenised: v };
  }
  function parse(v) {
    return analyse$1(v).values;
  }
  function createTransformer(v) {
    var _a = analyse$1(v), values = _a.values, numColors = _a.numColors, tokenised = _a.tokenised;
    var numValues = values.length;
    return function(v2) {
      var output = tokenised;
      for (var i = 0; i < numValues; i++) {
        output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? color.transform(v2[i]) : sanitize(v2[i]));
      }
      return output;
    };
  }
  var convertNumbersToZero = function(v) {
    return typeof v === "number" ? 0 : v;
  };
  function getAnimatableNone$1(v) {
    var parsed = parse(v);
    var transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
  }
  var complex = { test, parse, createTransformer, getAnimatableNone: getAnimatableNone$1 };
  var maxDefaults = new Set(["brightness", "contrast", "saturate", "opacity"]);
  function applyDefaultFilter(v) {
    var _a = v.slice(0, -1).split("("), name = _a[0], value = _a[1];
    if (name === "drop-shadow")
      return v;
    var number2 = (value.match(floatRegex) || [])[0];
    if (!number2)
      return v;
    var unit = value.replace(number2, "");
    var defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number2 !== value)
      defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
  }
  var functionRegex = /([a-z-]*)\(.*?\)/g;
  var filter = __assign(__assign({}, complex), { getAnimatableNone: function(v) {
    var functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  } });
  var int = __assign(__assign({}, number), { transform: Math.round });
  var numberValueTypes = {
    borderWidth: px,
    borderTopWidth: px,
    borderRightWidth: px,
    borderBottomWidth: px,
    borderLeftWidth: px,
    borderRadius: px,
    radius: px,
    borderTopLeftRadius: px,
    borderTopRightRadius: px,
    borderBottomRightRadius: px,
    borderBottomLeftRadius: px,
    width: px,
    maxWidth: px,
    height: px,
    maxHeight: px,
    size: px,
    top: px,
    right: px,
    bottom: px,
    left: px,
    padding: px,
    paddingTop: px,
    paddingRight: px,
    paddingBottom: px,
    paddingLeft: px,
    margin: px,
    marginTop: px,
    marginRight: px,
    marginBottom: px,
    marginLeft: px,
    rotate: degrees,
    rotateX: degrees,
    rotateY: degrees,
    rotateZ: degrees,
    scale,
    scaleX: scale,
    scaleY: scale,
    scaleZ: scale,
    skew: degrees,
    skewX: degrees,
    skewY: degrees,
    distance: px,
    translateX: px,
    translateY: px,
    translateZ: px,
    x: px,
    y: px,
    z: px,
    perspective: px,
    transformPerspective: px,
    opacity: alpha,
    originX: progressPercentage,
    originY: progressPercentage,
    originZ: px,
    zIndex: int,
    fillOpacity: alpha,
    strokeOpacity: alpha,
    numOctaves: int
  };
  function buildHTMLStyles(state, latestValues, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
    var _a;
    var style = state.style, vars = state.vars, transform = state.transform, transformKeys2 = state.transformKeys, transformOrigin = state.transformOrigin;
    transformKeys2.length = 0;
    var hasTransform = false;
    var hasTransformOrigin = false;
    var transformIsNone = true;
    for (var key in latestValues) {
      var value = latestValues[key];
      if (isCSSVariable$1(key)) {
        vars[key] = value;
        continue;
      }
      var valueType = numberValueTypes[key];
      var valueAsType = getValueAsType(value, valueType);
      if (isTransformProp(key)) {
        hasTransform = true;
        transform[key] = valueAsType;
        transformKeys2.push(key);
        if (!transformIsNone)
          continue;
        if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0))
          transformIsNone = false;
      } else if (isTransformOriginProp(key)) {
        transformOrigin[key] = valueAsType;
        hasTransformOrigin = true;
      } else {
        if ((projection === null || projection === void 0 ? void 0 : projection.isHydrated) && (layoutState === null || layoutState === void 0 ? void 0 : layoutState.isHydrated) && valueScaleCorrection[key]) {
          var correctedValue = valueScaleCorrection[key].process(value, layoutState, projection);
          var applyTo = valueScaleCorrection[key].applyTo;
          if (applyTo) {
            var num = applyTo.length;
            for (var i = 0; i < num; i++) {
              style[applyTo[i]] = correctedValue;
            }
          } else {
            style[key] = correctedValue;
          }
        } else {
          style[key] = valueAsType;
        }
      }
    }
    if (layoutState && projection && buildProjectionTransform && buildProjectionTransformOrigin) {
      style.transform = buildProjectionTransform(layoutState.deltaFinal, layoutState.treeScale, hasTransform ? transform : void 0);
      if (transformTemplate) {
        style.transform = transformTemplate(transform, style.transform);
      }
      style.transformOrigin = buildProjectionTransformOrigin(layoutState);
    } else {
      if (hasTransform) {
        style.transform = buildTransform(state, options, transformIsNone, transformTemplate);
      }
      if (hasTransformOrigin) {
        style.transformOrigin = buildTransformOrigin(transformOrigin);
      }
    }
  }
  var createHtmlRenderState = function() {
    return {
      style: {},
      transform: {},
      transformKeys: [],
      transformOrigin: {},
      vars: {}
    };
  };
  function copyRawValuesOnly(target, source, props) {
    for (var key in source) {
      if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
        target[key] = source[key];
      }
    }
  }
  function useInitialMotionValues(_a, visualState, isStatic) {
    var transformTemplate = _a.transformTemplate;
    return React.useMemo(function() {
      var state = createHtmlRenderState();
      buildHTMLStyles(state, visualState, void 0, void 0, { enableHardwareAcceleration: !isStatic }, transformTemplate);
      var vars = state.vars, style = state.style;
      return __assign(__assign({}, vars), style);
    }, [visualState]);
  }
  function useStyle(props, visualState, isStatic) {
    var styleProp = props.style || {};
    var style = {};
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
    if (props.transformValues) {
      style = props.transformValues(style);
    }
    return style;
  }
  function useHTMLProps(props, visualState, isStatic) {
    var htmlProps = {};
    var style = useStyle(props, visualState, isStatic);
    if (Boolean(props.drag)) {
      htmlProps.draggable = false;
      style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
      style.touchAction = props.drag === true ? "none" : "pan-" + (props.drag === "x" ? "y" : "x");
    }
    htmlProps.style = style;
    return htmlProps;
  }
  var validMotionProps = new Set([
    "initial",
    "animate",
    "exit",
    "style",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "layout",
    "layoutId",
    "_layoutResetTransform",
    "onLayoutAnimationComplete",
    "onViewportBoxUpdate",
    "onLayoutMeasure",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "drag",
    "dragControls",
    "dragListener",
    "dragConstraints",
    "dragDirectionLock",
    "_dragX",
    "_dragY",
    "dragElastic",
    "dragMomentum",
    "dragPropagation",
    "dragTransition",
    "whileDrag",
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "onHoverStart",
    "onHoverEnd",
    "whileFocus",
    "whileTap",
    "whileHover"
  ]);
  function isValidMotionProp(key) {
    return validMotionProps.has(key);
  }
  var shouldForward = function(key) {
    return !isValidMotionProp(key);
  };
  try {
    var emotionIsPropValid_1 = require("@emotion/is-prop-valid").default;
    shouldForward = function(key) {
      if (key.startsWith("on")) {
        return !isValidMotionProp(key);
      } else {
        return emotionIsPropValid_1(key);
      }
    };
  } catch (_a) {
  }
  function filterProps(props, isDom, forwardMotionProps) {
    var filteredProps = {};
    for (var key in props) {
      if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key)) {
        filteredProps[key] = props[key];
      }
    }
    return filteredProps;
  }
  function calcOrigin$1(origin, offset, size) {
    return typeof origin === "string" ? origin : px.transform(offset + size * origin);
  }
  function calcSVGTransformOrigin(dimensions, originX, originY) {
    var pxOriginX = calcOrigin$1(originX, dimensions.x, dimensions.width);
    var pxOriginY = calcOrigin$1(originY, dimensions.y, dimensions.height);
    return pxOriginX + " " + pxOriginY;
  }
  var progressToPixels = function(progress2, length) {
    return px.transform(progress2 * length);
  };
  var dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  };
  var camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function buildSVGPath(attrs, totalLength, length, spacing, offset, useDashCase) {
    if (spacing === void 0) {
      spacing = 1;
    }
    if (offset === void 0) {
      offset = 0;
    }
    if (useDashCase === void 0) {
      useDashCase = true;
    }
    var keys = useDashCase ? dashKeys : camelKeys;
    attrs[keys.offset] = progressToPixels(-offset, totalLength);
    var pathLength = progressToPixels(length, totalLength);
    var pathSpacing = progressToPixels(spacing, totalLength);
    attrs[keys.array] = pathLength + " " + pathSpacing;
  }
  function buildSVGAttrs(state, _a, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
    var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, latest = __rest(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
    buildHTMLStyles(state, latest, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin);
    state.attrs = state.style;
    state.style = {};
    var attrs = state.attrs, style = state.style, dimensions = state.dimensions, totalPathLength = state.totalPathLength;
    if (attrs.transform) {
      if (dimensions)
        style.transform = attrs.transform;
      delete attrs.transform;
    }
    if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
      style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
    }
    if (attrX !== void 0)
      attrs.x = attrX;
    if (attrY !== void 0)
      attrs.y = attrY;
    if (totalPathLength !== void 0 && pathLength !== void 0) {
      buildSVGPath(attrs, totalPathLength, pathLength, pathSpacing, pathOffset, false);
    }
  }
  var createSvgRenderState = function() {
    return __assign(__assign({}, createHtmlRenderState()), { attrs: {} });
  };
  function useSVGProps(props, visualState) {
    var visualProps = React.useMemo(function() {
      var state = createSvgRenderState();
      buildSVGAttrs(state, visualState, void 0, void 0, { enableHardwareAcceleration: false }, props.transformTemplate);
      return __assign(__assign({}, state.attrs), { style: __assign({}, state.style) });
    }, [visualState]);
    if (props.style) {
      var rawStyles = {};
      copyRawValuesOnly(rawStyles, props.style, props);
      visualProps.style = __assign(__assign({}, rawStyles), visualProps.style);
    }
    return visualProps;
  }
  function createUseRender(forwardMotionProps) {
    if (forwardMotionProps === void 0) {
      forwardMotionProps = false;
    }
    var useRender = function(Component, props, ref, _a, isStatic) {
      var latestValues = _a.latestValues;
      var useVisualProps = isSVGComponent(Component) ? useSVGProps : useHTMLProps;
      var visualProps = useVisualProps(props, latestValues, isStatic);
      var filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
      var elementProps = __assign(__assign(__assign({}, filteredProps), visualProps), { ref });
      return React.createElement(Component, elementProps);
    };
    return useRender;
  }
  var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
  var REPLACE_TEMPLATE = "$1-$2";
  var camelToDash = function(str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
  };
  function renderHTML(element, _a) {
    var style = _a.style, vars = _a.vars;
    Object.assign(element.style, style);
    for (var key in vars) {
      element.style.setProperty(key, vars[key]);
    }
  }
  var camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform"
  ]);
  function renderSVG(element, renderState) {
    renderHTML(element, renderState);
    for (var key in renderState.attrs) {
      element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
    }
  }
  function scrapeMotionValuesFromProps$1(props) {
    var style = props.style;
    var newValues = {};
    for (var key in style) {
      if (isMotionValue(style[key]) || isForcedMotionValue(key, props)) {
        newValues[key] = style[key];
      }
    }
    return newValues;
  }
  function scrapeMotionValuesFromProps(props) {
    var newValues = scrapeMotionValuesFromProps$1(props);
    for (var key in props) {
      if (isMotionValue(props[key])) {
        var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
        newValues[targetKey] = props[key];
      }
    }
    return newValues;
  }
  function isAnimationControls(v) {
    return typeof v === "object" && typeof v.start === "function";
  }
  var isKeyframesTarget = function(v) {
    return Array.isArray(v);
  };
  var isCustomValue = function(v) {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
  };
  var resolveFinalValueInKeyframes = function(v) {
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
  };
  function resolveMotionValue(value) {
    var unwrappedValue = isMotionValue(value) ? value.get() : value;
    return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
  }
  function makeState(_a, props, context, presenceContext) {
    var scrapeMotionValuesFromProps2 = _a.scrapeMotionValuesFromProps, createRenderState = _a.createRenderState, onMount = _a.onMount;
    var state = {
      latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps2),
      renderState: createRenderState()
    };
    if (onMount) {
      state.mount = function(instance) {
        return onMount(props, instance, state);
      };
    }
    return state;
  }
  var makeUseVisualState = function(config) {
    return function(props, isStatic) {
      var context = React.useContext(MotionContext);
      var presenceContext = React.useContext(PresenceContext);
      return isStatic ? makeState(config, props, context, presenceContext) : useConstant(function() {
        return makeState(config, props, context, presenceContext);
      });
    };
  };
  function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    var values = {};
    var blockInitialAnimation = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false;
    var motionValues = scrapeMotionValues(props);
    for (var key in motionValues) {
      values[key] = resolveMotionValue(motionValues[key]);
    }
    var initial = props.initial, animate2 = props.animate;
    var isControllingVariants = checkIfControllingVariants(props);
    var isVariantNode = checkIfVariantNode(props);
    if (context && isVariantNode && !isControllingVariants && props.inherit !== false) {
      initial !== null && initial !== void 0 ? initial : initial = context.initial;
      animate2 !== null && animate2 !== void 0 ? animate2 : animate2 = context.animate;
    }
    var variantToSet = blockInitialAnimation || initial === false ? animate2 : initial;
    if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
      var list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
      list.forEach(function(definition) {
        var resolved = resolveVariantFromProps(props, definition);
        if (!resolved)
          return;
        var transitionEnd = resolved.transitionEnd;
        resolved.transition;
        var target = __rest(resolved, ["transitionEnd", "transition"]);
        for (var key2 in target)
          values[key2] = target[key2];
        for (var key2 in transitionEnd)
          values[key2] = transitionEnd[key2];
      });
    }
    return values;
  }
  var svgMotionConfig = {
    useVisualState: makeUseVisualState({
      scrapeMotionValuesFromProps,
      createRenderState: createSvgRenderState,
      onMount: function(props, instance, _a) {
        var renderState = _a.renderState, latestValues = _a.latestValues;
        try {
          renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
        } catch (e) {
          renderState.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
        if (isPath(instance)) {
          renderState.totalPathLength = instance.getTotalLength();
        }
        buildSVGAttrs(renderState, latestValues, void 0, void 0, { enableHardwareAcceleration: false }, props.transformTemplate);
        renderSVG(instance, renderState);
      }
    })
  };
  function isPath(element) {
    return element.tagName === "path";
  }
  var htmlMotionConfig = {
    useVisualState: makeUseVisualState({
      scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
      createRenderState: createHtmlRenderState
    })
  };
  function createDomMotionConfig(Component, _a, preloadedFeatures, createVisualElement) {
    var _b = _a.forwardMotionProps, forwardMotionProps = _b === void 0 ? false : _b;
    var baseConfig = isSVGComponent(Component) ? svgMotionConfig : htmlMotionConfig;
    return __assign(__assign({}, baseConfig), {
      preloadedFeatures,
      useRender: createUseRender(forwardMotionProps),
      createVisualElement,
      Component
    });
  }
  var AnimationType;
  (function(AnimationType2) {
    AnimationType2["Animate"] = "animate";
    AnimationType2["Hover"] = "whileHover";
    AnimationType2["Tap"] = "whileTap";
    AnimationType2["Drag"] = "whileDrag";
    AnimationType2["Focus"] = "whileFocus";
    AnimationType2["Exit"] = "exit";
  })(AnimationType || (AnimationType = {}));
  function addDomEvent(target, eventName, handler, options) {
    target.addEventListener(eventName, handler, options);
    return function() {
      return target.removeEventListener(eventName, handler, options);
    };
  }
  function useDomEvent(ref, eventName, handler, options) {
    React.useEffect(function() {
      var element = ref.current;
      if (handler && element) {
        return addDomEvent(element, eventName, handler, options);
      }
    }, [ref, eventName, handler, options]);
  }
  function useFocusGesture(_a) {
    var whileFocus = _a.whileFocus, visualElement2 = _a.visualElement;
    var onFocus = function() {
      var _a2;
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Focus, true);
    };
    var onBlur = function() {
      var _a2;
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Focus, false);
    };
    useDomEvent(visualElement2, "focus", whileFocus ? onFocus : void 0);
    useDomEvent(visualElement2, "blur", whileFocus ? onBlur : void 0);
  }
  function isMouseEvent(event) {
    if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
      return !!(event.pointerType === "mouse");
    }
    return event instanceof MouseEvent;
  }
  function isTouchEvent(event) {
    var hasTouches = !!event.touches;
    return hasTouches;
  }
  function filterPrimaryPointer(eventHandler) {
    return function(event) {
      var isMouseEvent2 = event instanceof MouseEvent;
      var isPrimaryPointer = !isMouseEvent2 || isMouseEvent2 && event.button === 0;
      if (isPrimaryPointer) {
        eventHandler(event);
      }
    };
  }
  var defaultPagePoint = { pageX: 0, pageY: 0 };
  function pointFromTouch(e, pointType) {
    if (pointType === void 0) {
      pointType = "page";
    }
    var primaryTouch = e.touches[0] || e.changedTouches[0];
    var point = primaryTouch || defaultPagePoint;
    return {
      x: point[pointType + "X"],
      y: point[pointType + "Y"]
    };
  }
  function pointFromMouse(point, pointType) {
    if (pointType === void 0) {
      pointType = "page";
    }
    return {
      x: point[pointType + "X"],
      y: point[pointType + "Y"]
    };
  }
  function extractEventInfo(event, pointType) {
    if (pointType === void 0) {
      pointType = "page";
    }
    return {
      point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType)
    };
  }
  function getViewportPointFromEvent(event) {
    return extractEventInfo(event, "client");
  }
  var wrapHandler = function(handler, shouldFilterPrimaryPointer) {
    if (shouldFilterPrimaryPointer === void 0) {
      shouldFilterPrimaryPointer = false;
    }
    var listener = function(event) {
      return handler(event, extractEventInfo(event));
    };
    return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
  };
  var supportsPointerEvents = function() {
    return isBrowser && window.onpointerdown === null;
  };
  var supportsTouchEvents = function() {
    return isBrowser && window.ontouchstart === null;
  };
  var supportsMouseEvents = function() {
    return isBrowser && window.onmousedown === null;
  };
  var mouseEventNames = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave"
  };
  var touchEventNames = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel"
  };
  function getPointerEventName(name) {
    if (supportsPointerEvents()) {
      return name;
    } else if (supportsTouchEvents()) {
      return touchEventNames[name];
    } else if (supportsMouseEvents()) {
      return mouseEventNames[name];
    }
    return name;
  }
  function addPointerEvent(target, eventName, handler, options) {
    return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
  }
  function usePointerEvent(ref, eventName, handler, options) {
    return useDomEvent(ref, getPointerEventName(eventName), handler && wrapHandler(handler, eventName === "pointerdown"), options);
  }
  function createLock(name) {
    var lock = null;
    return function() {
      var openLock = function() {
        lock = null;
      };
      if (lock === null) {
        lock = name;
        return openLock;
      }
      return false;
    };
  }
  var globalHorizontalLock = createLock("dragHorizontal");
  var globalVerticalLock = createLock("dragVertical");
  function getGlobalLock(drag2) {
    var lock = false;
    if (drag2 === "y") {
      lock = globalVerticalLock();
    } else if (drag2 === "x") {
      lock = globalHorizontalLock();
    } else {
      var openHorizontal_1 = globalHorizontalLock();
      var openVertical_1 = globalVerticalLock();
      if (openHorizontal_1 && openVertical_1) {
        lock = function() {
          openHorizontal_1();
          openVertical_1();
        };
      } else {
        if (openHorizontal_1)
          openHorizontal_1();
        if (openVertical_1)
          openVertical_1();
      }
    }
    return lock;
  }
  function isDragActive() {
    var openGestureLock = getGlobalLock(true);
    if (!openGestureLock)
      return true;
    openGestureLock();
    return false;
  }
  function createHoverEvent(visualElement2, isActive, callback) {
    return function(event, info) {
      var _a;
      if (!isMouseEvent(event) || isDragActive())
        return;
      callback === null || callback === void 0 ? void 0 : callback(event, info);
      (_a = visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Hover, isActive);
    };
  }
  function useHoverGesture(_a) {
    var onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd, whileHover = _a.whileHover, visualElement2 = _a.visualElement;
    usePointerEvent(visualElement2, "pointerenter", onHoverStart || whileHover ? createHoverEvent(visualElement2, true, onHoverStart) : void 0);
    usePointerEvent(visualElement2, "pointerleave", onHoverEnd || whileHover ? createHoverEvent(visualElement2, false, onHoverEnd) : void 0);
  }
  var isNodeOrChild = function(parent, child) {
    if (!child) {
      return false;
    } else if (parent === child) {
      return true;
    } else {
      return isNodeOrChild(parent, child.parentElement);
    }
  };
  function useUnmountEffect(callback) {
    return React.useEffect(function() {
      return function() {
        return callback();
      };
    }, []);
  }
  var clamp = function(min, max, v) {
    return Math.min(Math.max(v, min), max);
  };
  var safeMin = 1e-3;
  var minDuration = 0.01;
  var maxDuration = 10;
  var minDamping = 0.05;
  var maxDamping = 1;
  function findSpring(_a) {
    var _b = _a.duration, duration = _b === void 0 ? 800 : _b, _c = _a.bounce, bounce = _c === void 0 ? 0.25 : _c, _d = _a.velocity, velocity = _d === void 0 ? 0 : _d, _e = _a.mass, mass = _e === void 0 ? 1 : _e;
    var envelope;
    var derivative;
    var dampingRatio = 1 - bounce;
    dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
    duration = clamp(minDuration, maxDuration, duration / 1e3);
    if (dampingRatio < 1) {
      envelope = function(undampedFreq2) {
        var exponentialDecay = undampedFreq2 * dampingRatio;
        var delta2 = exponentialDecay * duration;
        var a2 = exponentialDecay - velocity;
        var b2 = calcAngularFreq(undampedFreq2, dampingRatio);
        var c2 = Math.exp(-delta2);
        return safeMin - a2 / b2 * c2;
      };
      derivative = function(undampedFreq2) {
        var exponentialDecay = undampedFreq2 * dampingRatio;
        var delta2 = exponentialDecay * duration;
        var d = delta2 * velocity + velocity;
        var e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
        var f = Math.exp(-delta2);
        var g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
        var factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
        return factor * ((d - e) * f) / g;
      };
    } else {
      envelope = function(undampedFreq2) {
        var a2 = Math.exp(-undampedFreq2 * duration);
        var b2 = (undampedFreq2 - velocity) * duration + 1;
        return -safeMin + a2 * b2;
      };
      derivative = function(undampedFreq2) {
        var a2 = Math.exp(-undampedFreq2 * duration);
        var b2 = (velocity - undampedFreq2) * (duration * duration);
        return a2 * b2;
      };
    }
    var initialGuess = 5 / duration;
    var undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = duration * 1e3;
    if (isNaN(undampedFreq)) {
      return {
        stiffness: 100,
        damping: 10,
        duration
      };
    } else {
      var stiffness = Math.pow(undampedFreq, 2) * mass;
      return {
        stiffness,
        damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
        duration
      };
    }
  }
  var rootIterations = 12;
  function approximateRoot(envelope, derivative, initialGuess) {
    var result = initialGuess;
    for (var i = 1; i < rootIterations; i++) {
      result = result - envelope(result) / derivative(result);
    }
    return result;
  }
  function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
  }
  var durationKeys = ["duration", "bounce"];
  var physicsKeys = ["stiffness", "damping", "mass"];
  function isSpringType(options, keys) {
    return keys.some(function(key) {
      return options[key] !== void 0;
    });
  }
  function getSpringOptions(options) {
    var springOptions = __assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, options);
    if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
      var derived = findSpring(options);
      springOptions = __assign(__assign(__assign({}, springOptions), derived), { velocity: 0, mass: 1 });
      springOptions.isResolvedFromDuration = true;
    }
    return springOptions;
  }
  function spring$3(_a) {
    var _b = _a.from, from = _b === void 0 ? 0 : _b, _c = _a.to, to = _c === void 0 ? 1 : _c, _d = _a.restSpeed, restSpeed = _d === void 0 ? 2 : _d, restDelta = _a.restDelta, options = __rest(_a, ["from", "to", "restSpeed", "restDelta"]);
    var state = { done: false, value: from };
    var _e = getSpringOptions(options), stiffness = _e.stiffness, damping = _e.damping, mass = _e.mass, velocity = _e.velocity, duration = _e.duration, isResolvedFromDuration = _e.isResolvedFromDuration;
    var resolveSpring = zero;
    var resolveVelocity = zero;
    function createSpring() {
      var initialVelocity = velocity ? -(velocity / 1e3) : 0;
      var initialDelta = to - from;
      var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
      var undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
      restDelta !== null && restDelta !== void 0 ? restDelta : restDelta = Math.abs(to - from) <= 1 ? 0.01 : 0.4;
      if (dampingRatio < 1) {
        var angularFreq_1 = calcAngularFreq(undampedAngularFreq, dampingRatio);
        resolveSpring = function(t) {
          var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
          return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq_1 * Math.sin(angularFreq_1 * t) + initialDelta * Math.cos(angularFreq_1 * t));
        };
        resolveVelocity = function(t) {
          var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
          return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq_1 * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq_1 + initialDelta * Math.cos(angularFreq_1 * t)) - envelope * (Math.cos(angularFreq_1 * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq_1 * initialDelta * Math.sin(angularFreq_1 * t));
        };
      } else if (dampingRatio === 1) {
        resolveSpring = function(t) {
          return to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
        };
      } else {
        var dampedAngularFreq_1 = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
        resolveSpring = function(t) {
          var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
          var freqForT = Math.min(dampedAngularFreq_1 * t, 300);
          return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq_1 * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq_1;
        };
      }
    }
    createSpring();
    return {
      next: function(t) {
        var current = resolveSpring(t);
        if (!isResolvedFromDuration) {
          var currentVelocity = resolveVelocity(t) * 1e3;
          var isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
          var isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
          state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
        } else {
          state.done = t >= duration;
        }
        state.value = state.done ? to : current;
        return state;
      },
      flipTarget: function() {
        var _a2;
        velocity = -velocity;
        _a2 = [to, from], from = _a2[0], to = _a2[1];
        createSpring();
      }
    };
  }
  spring$3.needsInterpolation = function(a2, b2) {
    return typeof a2 === "string" || typeof b2 === "string";
  };
  var zero = function(_t) {
    return 0;
  };
  var progress = function(from, to, value) {
    var toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
  };
  var mix = function(from, to, progress2) {
    return -progress2 * from + progress2 * to + from;
  };
  var mixLinearColor = function(from, to, v) {
    var fromExpo = from * from;
    var toExpo = to * to;
    return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
  };
  var colorTypes = [hex, rgba, hsla];
  var getColorType = function(v) {
    return colorTypes.find(function(type) {
      return type.test(v);
    });
  };
  var mixColor = function(from, to) {
    var fromColorType = getColorType(from);
    var toColorType = getColorType(to);
    invariant(fromColorType.transform === toColorType.transform);
    var fromColor = fromColorType.parse(from);
    var toColor = toColorType.parse(to);
    var blended = __assign({}, fromColor);
    var mixFunc = fromColorType === hsla ? mix : mixLinearColor;
    return function(v) {
      for (var key in blended) {
        if (key !== "alpha") {
          blended[key] = mixFunc(fromColor[key], toColor[key], v);
        }
      }
      blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
      return fromColorType.transform(blended);
    };
  };
  var isNum = function(v) {
    return typeof v === "number";
  };
  var combineFunctions = function(a2, b2) {
    return function(v) {
      return b2(a2(v));
    };
  };
  var pipe = function() {
    var transformers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      transformers[_i] = arguments[_i];
    }
    return transformers.reduce(combineFunctions);
  };
  function getMixer(origin, target) {
    if (isNum(origin)) {
      return function(v) {
        return mix(origin, target, v);
      };
    } else if (color.test(origin)) {
      return mixColor(origin, target);
    } else {
      return mixComplex(origin, target);
    }
  }
  var mixArray = function(from, to) {
    var output = __spreadArray([], from);
    var numValues = output.length;
    var blendValue = from.map(function(fromThis, i) {
      return getMixer(fromThis, to[i]);
    });
    return function(v) {
      for (var i = 0; i < numValues; i++) {
        output[i] = blendValue[i](v);
      }
      return output;
    };
  };
  var mixObject = function(origin, target) {
    var output = __assign(__assign({}, origin), target);
    var blendValue = {};
    for (var key in output) {
      if (origin[key] !== void 0 && target[key] !== void 0) {
        blendValue[key] = getMixer(origin[key], target[key]);
      }
    }
    return function(v) {
      for (var key2 in blendValue) {
        output[key2] = blendValue[key2](v);
      }
      return output;
    };
  };
  function analyse(value) {
    var parsed = complex.parse(value);
    var numValues = parsed.length;
    var numNumbers = 0;
    var numRGB = 0;
    var numHSL = 0;
    for (var i = 0; i < numValues; i++) {
      if (numNumbers || typeof parsed[i] === "number") {
        numNumbers++;
      } else {
        if (parsed[i].hue !== void 0) {
          numHSL++;
        } else {
          numRGB++;
        }
      }
    }
    return { parsed, numNumbers, numRGB, numHSL };
  }
  var mixComplex = function(origin, target) {
    var template = complex.createTransformer(target);
    var originStats = analyse(origin);
    var targetStats = analyse(target);
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
  };
  var mixNumber = function(from, to) {
    return function(p) {
      return mix(from, to, p);
    };
  };
  function detectMixerFactory(v) {
    if (typeof v === "number") {
      return mixNumber;
    } else if (typeof v === "string") {
      if (color.test(v)) {
        return mixColor;
      } else {
        return mixComplex;
      }
    } else if (Array.isArray(v)) {
      return mixArray;
    } else if (typeof v === "object") {
      return mixObject;
    }
  }
  function createMixers(output, ease, customMixer) {
    var mixers = [];
    var mixerFactory = customMixer || detectMixerFactory(output[0]);
    var numMixers = output.length - 1;
    for (var i = 0; i < numMixers; i++) {
      var mixer = mixerFactory(output[i], output[i + 1]);
      if (ease) {
        var easingFunction = Array.isArray(ease) ? ease[i] : ease;
        mixer = pipe(easingFunction, mixer);
      }
      mixers.push(mixer);
    }
    return mixers;
  }
  function fastInterpolate(_a, _b) {
    var from = _a[0], to = _a[1];
    var mixer = _b[0];
    return function(v) {
      return mixer(progress(from, to, v));
    };
  }
  function slowInterpolate(input, mixers) {
    var inputLength = input.length;
    var lastInputIndex = inputLength - 1;
    return function(v) {
      var mixerIndex = 0;
      var foundMixerIndex = false;
      if (v <= input[0]) {
        foundMixerIndex = true;
      } else if (v >= input[lastInputIndex]) {
        mixerIndex = lastInputIndex - 1;
        foundMixerIndex = true;
      }
      if (!foundMixerIndex) {
        var i = 1;
        for (; i < inputLength; i++) {
          if (input[i] > v || i === lastInputIndex) {
            break;
          }
        }
        mixerIndex = i - 1;
      }
      var progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
      return mixers[mixerIndex](progressInRange);
    };
  }
  function interpolate(input, output, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.clamp, isClamp = _c === void 0 ? true : _c, ease = _b.ease, mixer = _b.mixer;
    var inputLength = input.length;
    invariant(inputLength === output.length);
    invariant(!ease || !Array.isArray(ease) || ease.length === inputLength - 1);
    if (input[0] > input[inputLength - 1]) {
      input = [].concat(input);
      output = [].concat(output);
      input.reverse();
      output.reverse();
    }
    var mixers = createMixers(output, ease, mixer);
    var interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
    return isClamp ? function(v) {
      return interpolator(clamp(input[0], input[inputLength - 1], v));
    } : interpolator;
  }
  var reverseEasing = function(easing) {
    return function(p) {
      return 1 - easing(1 - p);
    };
  };
  var mirrorEasing = function(easing) {
    return function(p) {
      return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
    };
  };
  var createExpoIn = function(power) {
    return function(p) {
      return Math.pow(p, power);
    };
  };
  var createBackIn = function(power) {
    return function(p) {
      return p * p * ((power + 1) * p - power);
    };
  };
  var createAnticipate = function(power) {
    var backEasing = createBackIn(power);
    return function(p) {
      return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    };
  };
  var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
  var BOUNCE_FIRST_THRESHOLD = 4 / 11;
  var BOUNCE_SECOND_THRESHOLD = 8 / 11;
  var BOUNCE_THIRD_THRESHOLD = 9 / 10;
  var linear = function(p) {
    return p;
  };
  var easeIn = createExpoIn(2);
  var easeOut = reverseEasing(easeIn);
  var easeInOut = mirrorEasing(easeIn);
  var circIn = function(p) {
    return 1 - Math.sin(Math.acos(p));
  };
  var circOut = reverseEasing(circIn);
  var circInOut = mirrorEasing(circOut);
  var backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
  var backOut = reverseEasing(backIn);
  var backInOut = mirrorEasing(backIn);
  var anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
  var ca = 4356 / 361;
  var cb = 35442 / 1805;
  var cc = 16061 / 1805;
  var bounceOut = function(p) {
    if (p === 1 || p === 0)
      return p;
    var p2 = p * p;
    return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
  };
  var bounceIn = reverseEasing(bounceOut);
  var bounceInOut = function(p) {
    return p < 0.5 ? 0.5 * (1 - bounceOut(1 - p * 2)) : 0.5 * bounceOut(p * 2 - 1) + 0.5;
  };
  function defaultEasing(values, easing) {
    return values.map(function() {
      return easing || easeInOut;
    }).splice(0, values.length - 1);
  }
  function defaultOffset(values) {
    var numValues = values.length;
    return values.map(function(_value, i) {
      return i !== 0 ? i / (numValues - 1) : 0;
    });
  }
  function convertOffsetToTimes(offset, duration) {
    return offset.map(function(o) {
      return o * duration;
    });
  }
  function keyframes$1(_a) {
    var _b = _a.from, from = _b === void 0 ? 0 : _b, _c = _a.to, to = _c === void 0 ? 1 : _c, ease = _a.ease, offset = _a.offset, _d = _a.duration, duration = _d === void 0 ? 300 : _d;
    var state = { done: false, value: from };
    var values = Array.isArray(to) ? to : [from, to];
    var times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);
    function createInterpolator() {
      return interpolate(times, values, {
        ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
      });
    }
    var interpolator = createInterpolator();
    return {
      next: function(t) {
        state.value = interpolator(t);
        state.done = t >= duration;
        return state;
      },
      flipTarget: function() {
        values.reverse();
        interpolator = createInterpolator();
      }
    };
  }
  function decay(_a) {
    var _b = _a.velocity, velocity = _b === void 0 ? 0 : _b, _c = _a.from, from = _c === void 0 ? 0 : _c, _d = _a.power, power = _d === void 0 ? 0.8 : _d, _e = _a.timeConstant, timeConstant = _e === void 0 ? 350 : _e, _f = _a.restDelta, restDelta = _f === void 0 ? 0.5 : _f, modifyTarget = _a.modifyTarget;
    var state = { done: false, value: from };
    var amplitude = power * velocity;
    var ideal = from + amplitude;
    var target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
    if (target !== ideal)
      amplitude = target - from;
    return {
      next: function(t) {
        var delta2 = -amplitude * Math.exp(-t / timeConstant);
        state.done = !(delta2 > restDelta || delta2 < -restDelta);
        state.value = state.done ? target : target + delta2;
        return state;
      },
      flipTarget: function() {
      }
    };
  }
  var types = { keyframes: keyframes$1, spring: spring$3, decay };
  function detectAnimationFromOptions(config) {
    if (Array.isArray(config.to)) {
      return keyframes$1;
    } else if (types[config.type]) {
      return types[config.type];
    }
    var keys = new Set(Object.keys(config));
    if (keys.has("ease") || keys.has("duration") && !keys.has("dampingRatio")) {
      return keyframes$1;
    } else if (keys.has("dampingRatio") || keys.has("stiffness") || keys.has("mass") || keys.has("damping") || keys.has("restSpeed") || keys.has("restDelta")) {
      return spring$3;
    }
    return keyframes$1;
  }
  var defaultTimestep = 1 / 60 * 1e3;
  var getCurrentTime = typeof performance !== "undefined" ? function() {
    return performance.now();
  } : function() {
    return Date.now();
  };
  var onNextFrame = typeof window !== "undefined" ? function(callback) {
    return window.requestAnimationFrame(callback);
  } : function(callback) {
    return setTimeout(function() {
      return callback(getCurrentTime());
    }, defaultTimestep);
  };
  function createRenderStep(runNextFrame2) {
    var toRun = [];
    var toRunNextFrame = [];
    var numToRun = 0;
    var isProcessing2 = false;
    var toKeepAlive = new WeakSet();
    var step = {
      schedule: function(callback, keepAlive, immediate) {
        if (keepAlive === void 0) {
          keepAlive = false;
        }
        if (immediate === void 0) {
          immediate = false;
        }
        var addToCurrentFrame = immediate && isProcessing2;
        var buffer = addToCurrentFrame ? toRun : toRunNextFrame;
        if (keepAlive)
          toKeepAlive.add(callback);
        if (buffer.indexOf(callback) === -1) {
          buffer.push(callback);
          if (addToCurrentFrame && isProcessing2)
            numToRun = toRun.length;
        }
        return callback;
      },
      cancel: function(callback) {
        var index = toRunNextFrame.indexOf(callback);
        if (index !== -1)
          toRunNextFrame.splice(index, 1);
        toKeepAlive.delete(callback);
      },
      process: function(frameData) {
        var _a;
        isProcessing2 = true;
        _a = [toRunNextFrame, toRun], toRun = _a[0], toRunNextFrame = _a[1];
        toRunNextFrame.length = 0;
        numToRun = toRun.length;
        if (numToRun) {
          for (var i = 0; i < numToRun; i++) {
            var callback = toRun[i];
            callback(frameData);
            if (toKeepAlive.has(callback)) {
              step.schedule(callback);
              runNextFrame2();
            }
          }
        }
        isProcessing2 = false;
      }
    };
    return step;
  }
  var maxElapsed = 40;
  var useDefaultElapsed = true;
  var runNextFrame = false;
  var isProcessing = false;
  var frame = {
    delta: 0,
    timestamp: 0
  };
  var stepsOrder = ["read", "update", "preRender", "render", "postRender"];
  var steps = /* @__PURE__ */ stepsOrder.reduce(function(acc, key) {
    acc[key] = createRenderStep(function() {
      return runNextFrame = true;
    });
    return acc;
  }, {});
  var sync = /* @__PURE__ */ stepsOrder.reduce(function(acc, key) {
    var step = steps[key];
    acc[key] = function(process, keepAlive, immediate) {
      if (keepAlive === void 0) {
        keepAlive = false;
      }
      if (immediate === void 0) {
        immediate = false;
      }
      if (!runNextFrame)
        startLoop();
      return step.schedule(process, keepAlive, immediate);
    };
    return acc;
  }, {});
  var cancelSync = /* @__PURE__ */ stepsOrder.reduce(function(acc, key) {
    acc[key] = steps[key].cancel;
    return acc;
  }, {});
  var flushSync = /* @__PURE__ */ stepsOrder.reduce(function(acc, key) {
    acc[key] = function() {
      return steps[key].process(frame);
    };
    return acc;
  }, {});
  var processStep = function(stepId) {
    return steps[stepId].process(frame);
  };
  var processFrame = function(timestamp) {
    runNextFrame = false;
    frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
    frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (runNextFrame) {
      useDefaultElapsed = false;
      onNextFrame(processFrame);
    }
  };
  var startLoop = function() {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing)
      onNextFrame(processFrame);
  };
  var getFrameData = function() {
    return frame;
  };
  function loopElapsed(elapsed, duration, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return elapsed - duration - delay;
  }
  function reverseElapsed(elapsed, duration, delay, isForwardPlayback) {
    if (delay === void 0) {
      delay = 0;
    }
    if (isForwardPlayback === void 0) {
      isForwardPlayback = true;
    }
    return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
  }
  function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
    return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
  }
  var framesync = function(update) {
    var passTimestamp = function(_a) {
      var delta2 = _a.delta;
      return update(delta2);
    };
    return {
      start: function() {
        return sync.update(passTimestamp, true);
      },
      stop: function() {
        return cancelSync.update(passTimestamp);
      }
    };
  };
  function animate$1(_a) {
    var _b, _c;
    var from = _a.from, _d = _a.autoplay, autoplay = _d === void 0 ? true : _d, _e = _a.driver, driver = _e === void 0 ? framesync : _e, _f = _a.elapsed, elapsed = _f === void 0 ? 0 : _f, _g = _a.repeat, repeatMax = _g === void 0 ? 0 : _g, _h = _a.repeatType, repeatType = _h === void 0 ? "loop" : _h, _j = _a.repeatDelay, repeatDelay = _j === void 0 ? 0 : _j, onPlay = _a.onPlay, onStop = _a.onStop, onComplete = _a.onComplete, onRepeat = _a.onRepeat, onUpdate = _a.onUpdate, options = __rest(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    var to = options.to;
    var driverControls;
    var repeatCount = 0;
    var computedDuration = options.duration;
    var latest;
    var isComplete = false;
    var isForwardPlayback = true;
    var interpolateFromNumber;
    var animator = detectAnimationFromOptions(options);
    if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
      interpolateFromNumber = interpolate([0, 100], [from, to], {
        clamp: false
      });
      from = 0;
      to = 100;
    }
    var animation = animator(__assign(__assign({}, options), { from, to }));
    function repeat() {
      repeatCount++;
      if (repeatType === "reverse") {
        isForwardPlayback = repeatCount % 2 === 0;
        elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
      } else {
        elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
        if (repeatType === "mirror")
          animation.flipTarget();
      }
      isComplete = false;
      onRepeat && onRepeat();
    }
    function complete() {
      driverControls.stop();
      onComplete && onComplete();
    }
    function update(delta2) {
      if (!isForwardPlayback)
        delta2 = -delta2;
      elapsed += delta2;
      if (!isComplete) {
        var state = animation.next(Math.max(0, elapsed));
        latest = state.value;
        if (interpolateFromNumber)
          latest = interpolateFromNumber(latest);
        isComplete = isForwardPlayback ? state.done : elapsed <= 0;
      }
      onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
      if (isComplete) {
        if (repeatCount === 0)
          computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;
        if (repeatCount < repeatMax) {
          hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
        } else {
          complete();
        }
      }
    }
    function play() {
      onPlay === null || onPlay === void 0 ? void 0 : onPlay();
      driverControls = driver(update);
      driverControls.start();
    }
    autoplay && play();
    return {
      stop: function() {
        onStop === null || onStop === void 0 ? void 0 : onStop();
        driverControls.stop();
      }
    };
  }
  function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1e3 / frameDuration) : 0;
  }
  function inertia(_a) {
    var _b = _a.from, from = _b === void 0 ? 0 : _b, _c = _a.velocity, velocity = _c === void 0 ? 0 : _c, min = _a.min, max = _a.max, _d = _a.power, power = _d === void 0 ? 0.8 : _d, _e = _a.timeConstant, timeConstant = _e === void 0 ? 750 : _e, _f = _a.bounceStiffness, bounceStiffness = _f === void 0 ? 500 : _f, _g = _a.bounceDamping, bounceDamping = _g === void 0 ? 10 : _g, _h = _a.restDelta, restDelta = _h === void 0 ? 1 : _h, modifyTarget = _a.modifyTarget, driver = _a.driver, onUpdate = _a.onUpdate, onComplete = _a.onComplete;
    var currentAnimation;
    function isOutOfBounds(v) {
      return min !== void 0 && v < min || max !== void 0 && v > max;
    }
    function boundaryNearest(v) {
      if (min === void 0)
        return max;
      if (max === void 0)
        return min;
      return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    }
    function startAnimation2(options) {
      currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
      currentAnimation = animate$1(__assign(__assign({}, options), { driver, onUpdate: function(v) {
        var _a2;
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
        (_a2 = options.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(options, v);
      }, onComplete }));
    }
    function startSpring(options) {
      startAnimation2(__assign({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta }, options));
    }
    if (isOutOfBounds(from)) {
      startSpring({ from, velocity, to: boundaryNearest(from) });
    } else {
      var target = power * velocity + from;
      if (typeof modifyTarget !== "undefined")
        target = modifyTarget(target);
      var boundary_1 = boundaryNearest(target);
      var heading_1 = boundary_1 === min ? -1 : 1;
      var prev_1;
      var current_1;
      var checkBoundary = function(v) {
        prev_1 = current_1;
        current_1 = v;
        velocity = velocityPerSecond(v - prev_1, getFrameData().delta);
        if (heading_1 === 1 && v > boundary_1 || heading_1 === -1 && v < boundary_1) {
          startSpring({ from: v, to: boundary_1, velocity });
        }
      };
      startAnimation2({
        type: "decay",
        from,
        velocity,
        timeConstant,
        power,
        restDelta,
        modifyTarget,
        onUpdate: isOutOfBounds(target) ? checkBoundary : void 0
      });
    }
    return {
      stop: function() {
        return currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
      }
    };
  }
  var isPoint = function(point) {
    return point.hasOwnProperty("x") && point.hasOwnProperty("y");
  };
  var isPoint3D = function(point) {
    return isPoint(point) && point.hasOwnProperty("z");
  };
  var distance1D = function(a2, b2) {
    return Math.abs(a2 - b2);
  };
  function distance(a2, b2) {
    if (isNum(a2) && isNum(b2)) {
      return distance1D(a2, b2);
    } else if (isPoint(a2) && isPoint(b2)) {
      var xDelta = distance1D(a2.x, b2.x);
      var yDelta = distance1D(a2.y, b2.y);
      var zDelta = isPoint3D(a2) && isPoint3D(b2) ? distance1D(a2.z, b2.z) : 0;
      return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
  }
  var a = function(a1, a2) {
    return 1 - 3 * a2 + 3 * a1;
  };
  var b = function(a1, a2) {
    return 3 * a2 - 6 * a1;
  };
  var c = function(a1) {
    return 3 * a1;
  };
  var calcBezier = function(t, a1, a2) {
    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
  };
  var getSlope = function(t, a1, a2) {
    return 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
  };
  var subdivisionPrecision = 1e-7;
  var subdivisionMaxIterations = 10;
  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX;
    var currentT;
    var i = 0;
    do {
      currentT = aA + (aB - aA) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
    return currentT;
  }
  var newtonIterations = 8;
  var newtonMinSlope = 1e-3;
  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < newtonIterations; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0) {
        return aGuessT;
      }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }
  var kSplineTableSize = 11;
  var kSampleStepSize = 1 / (kSplineTableSize - 1);
  function cubicBezier(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2)
      return linear;
    var sampleValues = new Float32Array(kSplineTableSize);
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;
      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= newtonMinSlope) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }
    return function(t) {
      return t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
    };
  }
  function useTapGesture(_a) {
    var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap, visualElement2 = _a.visualElement;
    var hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
    var isPressing = React.useRef(false);
    var cancelPointerEndListeners = React.useRef(null);
    function removePointerEndListener() {
      var _a2;
      (_a2 = cancelPointerEndListeners.current) === null || _a2 === void 0 ? void 0 : _a2.call(cancelPointerEndListeners);
      cancelPointerEndListeners.current = null;
    }
    function checkPointerEnd() {
      var _a2;
      removePointerEndListener();
      isPressing.current = false;
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Tap, false);
      return !isDragActive();
    }
    function onPointerUp(event, info) {
      if (!checkPointerEnd())
        return;
      !isNodeOrChild(visualElement2.getInstance(), event.target) ? onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info) : onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
    }
    function onPointerCancel(event, info) {
      if (!checkPointerEnd())
        return;
      onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
    }
    function onPointerDown(event, info) {
      var _a2;
      removePointerEndListener();
      if (isPressing.current)
        return;
      isPressing.current = true;
      cancelPointerEndListeners.current = pipe(addPointerEvent(window, "pointerup", onPointerUp), addPointerEvent(window, "pointercancel", onPointerCancel));
      onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Tap, true);
    }
    usePointerEvent(visualElement2, "pointerdown", hasPressListeners ? onPointerDown : void 0);
    useUnmountEffect(removePointerEndListener);
  }
  var makeRenderlessComponent = function(hook) {
    return function(props) {
      hook(props);
      return null;
    };
  };
  var gestureAnimations = {
    tap: makeRenderlessComponent(useTapGesture),
    focus: makeRenderlessComponent(useFocusGesture),
    hover: makeRenderlessComponent(useHoverGesture)
  };
  function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
      return false;
    var prevLength = prev.length;
    if (prevLength !== next.length)
      return false;
    for (var i = 0; i < prevLength; i++) {
      if (prev[i] !== next[i])
        return false;
    }
    return true;
  }
  var secondsToMilliseconds = function(seconds) {
    return seconds * 1e3;
  };
  var easingLookup = {
    linear,
    easeIn,
    easeInOut,
    easeOut,
    circIn,
    circInOut,
    circOut,
    backIn,
    backInOut,
    backOut,
    anticipate,
    bounceIn,
    bounceInOut,
    bounceOut
  };
  var easingDefinitionToFunction = function(definition) {
    if (Array.isArray(definition)) {
      invariant(definition.length === 4);
      var _a = __read(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
      return cubicBezier(x1, y1, x2, y2);
    } else if (typeof definition === "string") {
      return easingLookup[definition];
    }
    return definition;
  };
  var isEasingArray = function(ease) {
    return Array.isArray(ease) && typeof ease[0] !== "number";
  };
  var isAnimatable = function(key, value) {
    if (key === "zIndex")
      return false;
    if (typeof value === "number" || Array.isArray(value))
      return true;
    if (typeof value === "string" && complex.test(value) && !value.startsWith("url(")) {
      return true;
    }
    return false;
  };
  var underDampedSpring = function() {
    return {
      type: "spring",
      stiffness: 500,
      damping: 25,
      restDelta: 0.5,
      restSpeed: 10
    };
  };
  var criticallyDampedSpring = function(to) {
    return {
      type: "spring",
      stiffness: 550,
      damping: to === 0 ? 2 * Math.sqrt(550) : 30,
      restDelta: 0.01,
      restSpeed: 10
    };
  };
  var linearTween = function() {
    return {
      type: "keyframes",
      ease: "linear",
      duration: 0.3
    };
  };
  var keyframes = function(values) {
    return {
      type: "keyframes",
      duration: 0.8,
      values
    };
  };
  var defaultTransitions = {
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    rotate: underDampedSpring,
    rotateX: underDampedSpring,
    rotateY: underDampedSpring,
    rotateZ: underDampedSpring,
    scaleX: criticallyDampedSpring,
    scaleY: criticallyDampedSpring,
    scale: criticallyDampedSpring,
    opacity: linearTween,
    backgroundColor: linearTween,
    color: linearTween,
    default: criticallyDampedSpring
  };
  var getDefaultTransition = function(valueKey, to) {
    var transitionFactory;
    if (isKeyframesTarget(to)) {
      transitionFactory = keyframes;
    } else {
      transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
    }
    return __assign({ to }, transitionFactory(to));
  };
  var defaultValueTypes = __assign(__assign({}, numberValueTypes), {
    color,
    backgroundColor: color,
    outlineColor: color,
    fill: color,
    stroke: color,
    borderColor: color,
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: color,
    borderLeftColor: color,
    filter,
    WebkitFilter: filter
  });
  var getDefaultValueType = function(key) {
    return defaultValueTypes[key];
  };
  function getAnimatableNone(key, value) {
    var _a;
    var defaultValueType = getDefaultValueType(key);
    if (defaultValueType !== filter)
      defaultValueType = complex;
    return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
  }
  function isTransitionDefined(_a) {
    _a.when;
    _a.delay;
    _a.delayChildren;
    _a.staggerChildren;
    _a.staggerDirection;
    _a.repeat;
    _a.repeatType;
    _a.repeatDelay;
    _a.from;
    var transition = __rest(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
    return !!Object.keys(transition).length;
  }
  function convertTransitionToAnimationOptions(_a) {
    var ease = _a.ease, times = _a.times, yoyo = _a.yoyo, flip = _a.flip, loop = _a.loop, transition = __rest(_a, ["ease", "times", "yoyo", "flip", "loop"]);
    var options = __assign({}, transition);
    if (times)
      options["offset"] = times;
    if (transition.duration)
      options["duration"] = secondsToMilliseconds(transition.duration);
    if (transition.repeatDelay)
      options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
    if (ease) {
      options["ease"] = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
    }
    if (transition.type === "tween")
      options.type = "keyframes";
    if (yoyo || loop || flip) {
      if (yoyo) {
        options.repeatType = "reverse";
      } else if (loop) {
        options.repeatType = "loop";
      } else if (flip) {
        options.repeatType = "mirror";
      }
      options.repeat = loop || yoyo || flip || transition.repeat;
    }
    if (transition.type !== "spring")
      options.type = "keyframes";
    return options;
  }
  function getDelayFromTransition(transition, key) {
    var _a;
    var valueTransition = getValueTransition(transition, key) || {};
    return (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : 0;
  }
  function hydrateKeyframes(options) {
    if (Array.isArray(options.to) && options.to[0] === null) {
      options.to = __spreadArray([], __read(options.to));
      options.to[0] = options.from;
    }
    return options;
  }
  function getPopmotionAnimationOptions(transition, options, key) {
    var _a;
    if (Array.isArray(options.to)) {
      (_a = transition.duration) !== null && _a !== void 0 ? _a : transition.duration = 0.8;
    }
    hydrateKeyframes(options);
    if (!isTransitionDefined(transition)) {
      transition = __assign(__assign({}, transition), getDefaultTransition(key, options.to));
    }
    return __assign(__assign({}, options), convertTransitionToAnimationOptions(transition));
  }
  function getAnimation(key, value, target, transition, onComplete) {
    var _a;
    var valueTransition = getValueTransition(transition, key);
    var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
    var isTargetAnimatable = isAnimatable(key, target);
    if (origin === "none" && isTargetAnimatable && typeof target === "string") {
      origin = getAnimatableNone(key, target);
    } else if (isZero(origin) && typeof target === "string") {
      origin = getZeroUnit(target);
    } else if (!Array.isArray(target) && isZero(target) && typeof origin === "string") {
      target = getZeroUnit(origin);
    }
    var isOriginAnimatable = isAnimatable(key, origin);
    function start() {
      var options = {
        from: origin,
        to: target,
        velocity: value.getVelocity(),
        onComplete,
        onUpdate: function(v) {
          return value.set(v);
        }
      };
      return valueTransition.type === "inertia" || valueTransition.type === "decay" ? inertia(__assign(__assign({}, options), valueTransition)) : animate$1(__assign(__assign({}, getPopmotionAnimationOptions(valueTransition, options, key)), { onUpdate: function(v) {
        var _a2;
        options.onUpdate(v);
        (_a2 = valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, v);
      }, onComplete: function() {
        var _a2;
        options.onComplete();
        (_a2 = valueTransition.onComplete) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition);
      } }));
    }
    function set() {
      var _a2;
      value.set(target);
      onComplete();
      (_a2 = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition);
      return { stop: function() {
      } };
    }
    return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start;
  }
  function isZero(value) {
    return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
  }
  function getZeroUnit(potentialUnitType) {
    return typeof potentialUnitType === "number" ? 0 : getAnimatableNone("", potentialUnitType);
  }
  function getValueTransition(transition, key) {
    return transition[key] || transition["default"] || transition;
  }
  function startAnimation(key, value, target, transition) {
    if (transition === void 0) {
      transition = {};
    }
    return value.start(function(onComplete) {
      var delayTimer;
      var controls;
      var animation = getAnimation(key, value, target, transition, onComplete);
      var delay = getDelayFromTransition(transition, key);
      var start = function() {
        return controls = animation();
      };
      if (delay) {
        delayTimer = setTimeout(start, secondsToMilliseconds(delay));
      } else {
        start();
      }
      return function() {
        clearTimeout(delayTimer);
        controls === null || controls === void 0 ? void 0 : controls.stop();
      };
    });
  }
  var isNumericalString = function(v) {
    return /^\-?\d*\.?\d+$/.test(v);
  };
  function addUniqueItem(arr, item) {
    arr.indexOf(item) === -1 && arr.push(item);
  }
  function removeItem(arr, item) {
    var index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
  }
  var SubscriptionManager = function() {
    function SubscriptionManager2() {
      this.subscriptions = [];
    }
    SubscriptionManager2.prototype.add = function(handler) {
      var _this = this;
      addUniqueItem(this.subscriptions, handler);
      return function() {
        return removeItem(_this.subscriptions, handler);
      };
    };
    SubscriptionManager2.prototype.notify = function(a2, b2, c2) {
      var numSubscriptions = this.subscriptions.length;
      if (!numSubscriptions)
        return;
      if (numSubscriptions === 1) {
        this.subscriptions[0](a2, b2, c2);
      } else {
        for (var i = 0; i < numSubscriptions; i++) {
          var handler = this.subscriptions[i];
          handler && handler(a2, b2, c2);
        }
      }
    };
    SubscriptionManager2.prototype.getSize = function() {
      return this.subscriptions.length;
    };
    SubscriptionManager2.prototype.clear = function() {
      this.subscriptions.length = 0;
    };
    return SubscriptionManager2;
  }();
  var isFloat = function(value) {
    return !isNaN(parseFloat(value));
  };
  var MotionValue = function() {
    function MotionValue2(init) {
      var _this = this;
      this.timeDelta = 0;
      this.lastUpdated = 0;
      this.updateSubscribers = new SubscriptionManager();
      this.velocityUpdateSubscribers = new SubscriptionManager();
      this.renderSubscribers = new SubscriptionManager();
      this.canTrackVelocity = false;
      this.updateAndNotify = function(v, render) {
        if (render === void 0) {
          render = true;
        }
        _this.prev = _this.current;
        _this.current = v;
        var _a = getFrameData(), delta2 = _a.delta, timestamp = _a.timestamp;
        if (_this.lastUpdated !== timestamp) {
          _this.timeDelta = delta2;
          _this.lastUpdated = timestamp;
          sync.postRender(_this.scheduleVelocityCheck);
        }
        if (_this.prev !== _this.current) {
          _this.updateSubscribers.notify(_this.current);
        }
        if (_this.velocityUpdateSubscribers.getSize()) {
          _this.velocityUpdateSubscribers.notify(_this.getVelocity());
        }
        if (render) {
          _this.renderSubscribers.notify(_this.current);
        }
      };
      this.scheduleVelocityCheck = function() {
        return sync.postRender(_this.velocityCheck);
      };
      this.velocityCheck = function(_a) {
        var timestamp = _a.timestamp;
        if (timestamp !== _this.lastUpdated) {
          _this.prev = _this.current;
          _this.velocityUpdateSubscribers.notify(_this.getVelocity());
        }
      };
      this.hasAnimated = false;
      this.prev = this.current = init;
      this.canTrackVelocity = isFloat(this.current);
    }
    MotionValue2.prototype.onChange = function(subscription) {
      return this.updateSubscribers.add(subscription);
    };
    MotionValue2.prototype.clearListeners = function() {
      this.updateSubscribers.clear();
    };
    MotionValue2.prototype.onRenderRequest = function(subscription) {
      subscription(this.get());
      return this.renderSubscribers.add(subscription);
    };
    MotionValue2.prototype.attach = function(passiveEffect) {
      this.passiveEffect = passiveEffect;
    };
    MotionValue2.prototype.set = function(v, render) {
      if (render === void 0) {
        render = true;
      }
      if (!render || !this.passiveEffect) {
        this.updateAndNotify(v, render);
      } else {
        this.passiveEffect(v, this.updateAndNotify);
      }
    };
    MotionValue2.prototype.get = function() {
      return this.current;
    };
    MotionValue2.prototype.getPrevious = function() {
      return this.prev;
    };
    MotionValue2.prototype.getVelocity = function() {
      return this.canTrackVelocity ? velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
    };
    MotionValue2.prototype.start = function(animation) {
      var _this = this;
      this.stop();
      return new Promise(function(resolve) {
        _this.hasAnimated = true;
        _this.stopAnimation = animation(resolve);
      }).then(function() {
        return _this.clearAnimation();
      });
    };
    MotionValue2.prototype.stop = function() {
      if (this.stopAnimation)
        this.stopAnimation();
      this.clearAnimation();
    };
    MotionValue2.prototype.isAnimating = function() {
      return !!this.stopAnimation;
    };
    MotionValue2.prototype.clearAnimation = function() {
      this.stopAnimation = null;
    };
    MotionValue2.prototype.destroy = function() {
      this.updateSubscribers.clear();
      this.renderSubscribers.clear();
      this.stop();
    };
    return MotionValue2;
  }();
  function motionValue(init) {
    return new MotionValue(init);
  }
  var testValueType = function(v) {
    return function(type) {
      return type.test(v);
    };
  };
  var auto = {
    test: function(v) {
      return v === "auto";
    },
    parse: function(v) {
      return v;
    }
  };
  var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
  var findDimensionValueType = function(v) {
    return dimensionValueTypes.find(testValueType(v));
  };
  var valueTypes = __spreadArray(__spreadArray([], __read(dimensionValueTypes)), [color, complex]);
  var findValueType = function(v) {
    return valueTypes.find(testValueType(v));
  };
  function setMotionValue(visualElement2, key, value) {
    if (visualElement2.hasValue(key)) {
      visualElement2.getValue(key).set(value);
    } else {
      visualElement2.addValue(key, motionValue(value));
    }
  }
  function setTarget(visualElement2, definition) {
    var resolved = resolveVariant(visualElement2, definition);
    var _a = resolved ? visualElement2.makeTargetAnimatable(resolved, false) : {}, _b = _a.transitionEnd, transitionEnd = _b === void 0 ? {} : _b;
    _a.transition;
    var target = __rest(_a, ["transitionEnd", "transition"]);
    target = __assign(__assign({}, target), transitionEnd);
    for (var key in target) {
      var value = resolveFinalValueInKeyframes(target[key]);
      setMotionValue(visualElement2, key, value);
    }
  }
  function checkTargetForNewValues(visualElement2, target, origin) {
    var _a, _b, _c;
    var _d;
    var newValueKeys = Object.keys(target).filter(function(key2) {
      return !visualElement2.hasValue(key2);
    });
    var numNewValues = newValueKeys.length;
    if (!numNewValues)
      return;
    for (var i = 0; i < numNewValues; i++) {
      var key = newValueKeys[i];
      var targetValue = target[key];
      var value = null;
      if (Array.isArray(targetValue)) {
        value = targetValue[0];
      }
      if (value === null) {
        value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement2.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
      }
      if (value === void 0 || value === null)
        continue;
      if (typeof value === "string" && isNumericalString(value)) {
        value = parseFloat(value);
      } else if (!findValueType(value) && complex.test(targetValue)) {
        value = getAnimatableNone(key, targetValue);
      }
      visualElement2.addValue(key, motionValue(value));
      (_c = (_d = origin)[key]) !== null && _c !== void 0 ? _c : _d[key] = value;
      visualElement2.setBaseTarget(key, value);
    }
  }
  function getOriginFromTransition(key, transition) {
    if (!transition)
      return;
    var valueTransition = transition[key] || transition["default"] || transition;
    return valueTransition.from;
  }
  function getOrigin(target, transition, visualElement2) {
    var _a, _b;
    var origin = {};
    for (var key in target) {
      origin[key] = (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement2.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
    }
    return origin;
  }
  function animateVisualElement(visualElement2, definition, options) {
    if (options === void 0) {
      options = {};
    }
    visualElement2.notifyAnimationStart();
    var animation;
    if (Array.isArray(definition)) {
      var animations2 = definition.map(function(variant) {
        return animateVariant(visualElement2, variant, options);
      });
      animation = Promise.all(animations2);
    } else if (typeof definition === "string") {
      animation = animateVariant(visualElement2, definition, options);
    } else {
      var resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement2, definition, options.custom) : definition;
      animation = animateTarget(visualElement2, resolvedDefinition, options);
    }
    return animation.then(function() {
      return visualElement2.notifyAnimationComplete(definition);
    });
  }
  function animateVariant(visualElement2, variant, options) {
    var _a;
    if (options === void 0) {
      options = {};
    }
    var resolved = resolveVariant(visualElement2, variant, options.custom);
    var _b = (resolved || {}).transition, transition = _b === void 0 ? visualElement2.getDefaultTransition() || {} : _b;
    if (options.transitionOverride) {
      transition = options.transitionOverride;
    }
    var getAnimation2 = resolved ? function() {
      return animateTarget(visualElement2, resolved, options);
    } : function() {
      return Promise.resolve();
    };
    var getChildAnimations = ((_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.size) ? function(forwardDelay) {
      if (forwardDelay === void 0) {
        forwardDelay = 0;
      }
      var _a2 = transition.delayChildren, delayChildren = _a2 === void 0 ? 0 : _a2, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
      return animateChildren(visualElement2, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
    } : function() {
      return Promise.resolve();
    };
    var when = transition.when;
    if (when) {
      var _c = __read(when === "beforeChildren" ? [getAnimation2, getChildAnimations] : [getChildAnimations, getAnimation2], 2), first = _c[0], last = _c[1];
      return first().then(last);
    } else {
      return Promise.all([getAnimation2(), getChildAnimations(options.delay)]);
    }
  }
  function animateTarget(visualElement2, definition, _a) {
    var _b;
    var _c = _a === void 0 ? {} : _a, _d = _c.delay, delay = _d === void 0 ? 0 : _d, transitionOverride = _c.transitionOverride, type = _c.type;
    var _e = visualElement2.makeTargetAnimatable(definition), _f = _e.transition, transition = _f === void 0 ? visualElement2.getDefaultTransition() : _f, transitionEnd = _e.transitionEnd, target = __rest(_e, ["transition", "transitionEnd"]);
    if (transitionOverride)
      transition = transitionOverride;
    var animations2 = [];
    var animationTypeState = type && ((_b = visualElement2.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);
    for (var key in target) {
      var value = visualElement2.getValue(key);
      var valueTarget = target[key];
      if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
        continue;
      }
      var animation = startAnimation(key, value, valueTarget, __assign({ delay }, transition));
      animations2.push(animation);
    }
    return Promise.all(animations2).then(function() {
      transitionEnd && setTarget(visualElement2, transitionEnd);
    });
  }
  function animateChildren(visualElement2, variant, delayChildren, staggerChildren, staggerDirection, options) {
    if (delayChildren === void 0) {
      delayChildren = 0;
    }
    if (staggerChildren === void 0) {
      staggerChildren = 0;
    }
    if (staggerDirection === void 0) {
      staggerDirection = 1;
    }
    var animations2 = [];
    var maxStaggerDuration = (visualElement2.variantChildren.size - 1) * staggerChildren;
    var generateStaggerDuration = staggerDirection === 1 ? function(i) {
      if (i === void 0) {
        i = 0;
      }
      return i * staggerChildren;
    } : function(i) {
      if (i === void 0) {
        i = 0;
      }
      return maxStaggerDuration - i * staggerChildren;
    };
    Array.from(visualElement2.variantChildren).sort(sortByTreeOrder).forEach(function(child, i) {
      animations2.push(animateVariant(child, variant, __assign(__assign({}, options), { delay: delayChildren + generateStaggerDuration(i) })).then(function() {
        return child.notifyAnimationComplete(variant);
      }));
    });
    return Promise.all(animations2);
  }
  function sortByTreeOrder(a2, b2) {
    return a2.sortNodePosition(b2);
  }
  function shouldBlockAnimation(_a, key) {
    var protectedKeys = _a.protectedKeys, needsAnimating = _a.needsAnimating;
    var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
  }
  var variantPriorityOrder = [
    AnimationType.Animate,
    AnimationType.Hover,
    AnimationType.Tap,
    AnimationType.Drag,
    AnimationType.Focus,
    AnimationType.Exit
  ];
  var reversePriorityOrder = __spreadArray([], __read(variantPriorityOrder)).reverse();
  var numAnimationTypes = variantPriorityOrder.length;
  function animateList(visualElement2) {
    return function(animations2) {
      return Promise.all(animations2.map(function(_a) {
        var animation = _a.animation, options = _a.options;
        return animateVisualElement(visualElement2, animation, options);
      }));
    };
  }
  function createAnimationState(visualElement2) {
    var animate2 = animateList(visualElement2);
    var state = createState();
    var allAnimatedKeys = {};
    var isInitialRender = true;
    var buildResolvedTypeValues = function(acc, definition) {
      var resolved = resolveVariant(visualElement2, definition);
      if (resolved) {
        resolved.transition;
        var transitionEnd = resolved.transitionEnd, target = __rest(resolved, ["transition", "transitionEnd"]);
        acc = __assign(__assign(__assign({}, acc), target), transitionEnd);
      }
      return acc;
    };
    function isAnimated(key) {
      return allAnimatedKeys[key] !== void 0;
    }
    function setAnimateFunction(makeAnimator) {
      animate2 = makeAnimator(visualElement2);
    }
    function animateChanges(options, changedActiveType) {
      var _a;
      var props = visualElement2.getProps();
      var context = visualElement2.getVariantContext(true) || {};
      var animations2 = [];
      var removedKeys = new Set();
      var encounteredKeys = {};
      var removedVariantIndex = Infinity;
      var _loop_1 = function(i2) {
        var type = reversePriorityOrder[i2];
        var typeState = state[type];
        var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
        var propIsVariant = isVariantLabel(prop);
        var activeDelta = type === changedActiveType ? typeState.isActive : null;
        if (activeDelta === false)
          removedVariantIndex = i2;
        var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
        if (isInherited && isInitialRender && visualElement2.manuallyAnimateOnMount) {
          isInherited = false;
        }
        typeState.protectedKeys = __assign({}, encounteredKeys);
        if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") {
          return "continue";
        }
        var shouldAnimateType = variantsHaveChanged(typeState.prevProp, prop) || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i2 > removedVariantIndex && propIsVariant;
        var definitionList = Array.isArray(prop) ? prop : [prop];
        var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
        if (activeDelta === false)
          resolvedValues = {};
        var _b = typeState.prevResolvedValues, prevResolvedValues = _b === void 0 ? {} : _b;
        var allKeys = __assign(__assign({}, prevResolvedValues), resolvedValues);
        var markToAnimate = function(key2) {
          shouldAnimateType = true;
          removedKeys.delete(key2);
          typeState.needsAnimating[key2] = true;
        };
        for (var key in allKeys) {
          var next = resolvedValues[key];
          var prev = prevResolvedValues[key];
          if (encounteredKeys.hasOwnProperty(key))
            continue;
          if (next !== prev) {
            if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
              if (!shallowCompare(next, prev)) {
                markToAnimate(key);
              } else {
                typeState.protectedKeys[key] = true;
              }
            } else if (next !== void 0) {
              markToAnimate(key);
            } else {
              removedKeys.add(key);
            }
          } else if (next !== void 0 && removedKeys.has(key)) {
            markToAnimate(key);
          } else {
            typeState.protectedKeys[key] = true;
          }
        }
        typeState.prevProp = prop;
        typeState.prevResolvedValues = resolvedValues;
        if (typeState.isActive) {
          encounteredKeys = __assign(__assign({}, encounteredKeys), resolvedValues);
        }
        if (isInitialRender && visualElement2.blockInitialAnimation) {
          shouldAnimateType = false;
        }
        if (shouldAnimateType && !isInherited) {
          animations2.push.apply(animations2, __spreadArray([], __read(definitionList.map(function(animation) {
            return {
              animation,
              options: __assign({ type }, options)
            };
          }))));
        }
      };
      for (var i = 0; i < numAnimationTypes; i++) {
        _loop_1(i);
      }
      allAnimatedKeys = __assign({}, encounteredKeys);
      if (removedKeys.size) {
        var fallbackAnimation_1 = {};
        removedKeys.forEach(function(key) {
          var fallbackTarget = visualElement2.getBaseTarget(key);
          if (fallbackTarget !== void 0) {
            fallbackAnimation_1[key] = fallbackTarget;
          }
        });
        animations2.push({ animation: fallbackAnimation_1 });
      }
      var shouldAnimate = Boolean(animations2.length);
      if (isInitialRender && props.initial === false && !visualElement2.manuallyAnimateOnMount) {
        shouldAnimate = false;
      }
      isInitialRender = false;
      return shouldAnimate ? animate2(animations2) : Promise.resolve();
    }
    function setActive(type, isActive, options) {
      var _a;
      if (state[type].isActive === isActive)
        return Promise.resolve();
      (_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function(child) {
        var _a2;
        return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
      });
      state[type].isActive = isActive;
      return animateChanges(options, type);
    }
    return {
      isAnimated,
      animateChanges,
      setActive,
      setAnimateFunction,
      getState: function() {
        return state;
      }
    };
  }
  function variantsHaveChanged(prev, next) {
    if (typeof next === "string") {
      return next !== prev;
    } else if (isVariantLabels(next)) {
      return !shallowCompare(next, prev);
    }
    return false;
  }
  function createTypeState(isActive) {
    if (isActive === void 0) {
      isActive = false;
    }
    return {
      isActive,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function createState() {
    var _a;
    return _a = {}, _a[AnimationType.Animate] = createTypeState(true), _a[AnimationType.Hover] = createTypeState(), _a[AnimationType.Tap] = createTypeState(), _a[AnimationType.Drag] = createTypeState(), _a[AnimationType.Focus] = createTypeState(), _a[AnimationType.Exit] = createTypeState(), _a;
  }
  var animations = {
    animation: makeRenderlessComponent(function(_a) {
      var visualElement2 = _a.visualElement, animate2 = _a.animate;
      visualElement2.animationState || (visualElement2.animationState = createAnimationState(visualElement2));
      if (isAnimationControls(animate2)) {
        React.useEffect(function() {
          return animate2.subscribe(visualElement2);
        }, [animate2]);
      }
    }),
    exit: makeRenderlessComponent(function(props) {
      var custom = props.custom, visualElement2 = props.visualElement;
      var _a = __read(usePresence(), 2), isPresent2 = _a[0], onExitComplete = _a[1];
      var presenceContext = React.useContext(PresenceContext);
      React.useEffect(function() {
        var _a2, _b;
        var animation = (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Exit, !isPresent2, { custom: (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== null && _b !== void 0 ? _b : custom });
        !isPresent2 && (animation === null || animation === void 0 ? void 0 : animation.then(onExitComplete));
      }, [isPresent2]);
    })
  };
  var PanSession = function() {
    function PanSession2(event, handlers, _a) {
      var _this = this;
      var _b = _a === void 0 ? {} : _a, transformPagePoint = _b.transformPagePoint;
      this.startEvent = null;
      this.lastMoveEvent = null;
      this.lastMoveEventInfo = null;
      this.handlers = {};
      this.updatePoint = function() {
        if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
          return;
        var info2 = getPanInfo(_this.lastMoveEventInfo, _this.history);
        var isPanStarted = _this.startEvent !== null;
        var isDistancePastThreshold = distance(info2.offset, { x: 0, y: 0 }) >= 3;
        if (!isPanStarted && !isDistancePastThreshold)
          return;
        var point2 = info2.point;
        var timestamp2 = getFrameData().timestamp;
        _this.history.push(__assign(__assign({}, point2), { timestamp: timestamp2 }));
        var _a2 = _this.handlers, onStart = _a2.onStart, onMove = _a2.onMove;
        if (!isPanStarted) {
          onStart && onStart(_this.lastMoveEvent, info2);
          _this.startEvent = _this.lastMoveEvent;
        }
        onMove && onMove(_this.lastMoveEvent, info2);
      };
      this.handlePointerMove = function(event2, info2) {
        _this.lastMoveEvent = event2;
        _this.lastMoveEventInfo = transformPoint(info2, _this.transformPagePoint);
        if (isMouseEvent(event2) && event2.buttons === 0) {
          _this.handlePointerUp(event2, info2);
          return;
        }
        sync.update(_this.updatePoint, true);
      };
      this.handlePointerUp = function(event2, info2) {
        _this.end();
        var _a2 = _this.handlers, onEnd = _a2.onEnd, onSessionEnd = _a2.onSessionEnd;
        var panInfo = getPanInfo(transformPoint(info2, _this.transformPagePoint), _this.history);
        if (_this.startEvent && onEnd) {
          onEnd(event2, panInfo);
        }
        onSessionEnd && onSessionEnd(event2, panInfo);
      };
      if (isTouchEvent(event) && event.touches.length > 1)
        return;
      this.handlers = handlers;
      this.transformPagePoint = transformPagePoint;
      var info = extractEventInfo(event);
      var initialInfo = transformPoint(info, this.transformPagePoint);
      var point = initialInfo.point;
      var timestamp = getFrameData().timestamp;
      this.history = [__assign(__assign({}, point), { timestamp })];
      var onSessionStart = handlers.onSessionStart;
      onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
      this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
    }
    PanSession2.prototype.updateHandlers = function(handlers) {
      this.handlers = handlers;
    };
    PanSession2.prototype.end = function() {
      this.removeListeners && this.removeListeners();
      cancelSync.update(this.updatePoint);
    };
    return PanSession2;
  }();
  function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
  }
  function subtractPoint(a2, b2) {
    return { x: a2.x - b2.x, y: a2.y - b2.y };
  }
  function getPanInfo(_a, history) {
    var point = _a.point;
    return {
      point,
      delta: subtractPoint(point, lastDevicePoint(history)),
      offset: subtractPoint(point, startDevicePoint(history)),
      velocity: getVelocity(history, 0.1)
    };
  }
  function startDevicePoint(history) {
    return history[0];
  }
  function lastDevicePoint(history) {
    return history[history.length - 1];
  }
  function getVelocity(history, timeDelta) {
    if (history.length < 2) {
      return { x: 0, y: 0 };
    }
    var i = history.length - 1;
    var timestampedPoint = null;
    var lastPoint = lastDevicePoint(history);
    while (i >= 0) {
      timestampedPoint = history[i];
      if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
        break;
      }
      i--;
    }
    if (!timestampedPoint) {
      return { x: 0, y: 0 };
    }
    var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
    if (time === 0) {
      return { x: 0, y: 0 };
    }
    var currentVelocity = {
      x: (lastPoint.x - timestampedPoint.x) / time,
      y: (lastPoint.y - timestampedPoint.y) / time
    };
    if (currentVelocity.x === Infinity) {
      currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
      currentVelocity.y = 0;
    }
    return currentVelocity;
  }
  function noop(any) {
    return any;
  }
  function convertBoundingBoxToAxisBox(_a) {
    var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    return {
      x: { min: left, max: right },
      y: { min: top, max: bottom }
    };
  }
  function convertAxisBoxToBoundingBox(_a) {
    var x = _a.x, y = _a.y;
    return {
      top: y.min,
      bottom: y.max,
      left: x.min,
      right: x.max
    };
  }
  function transformBoundingBox(_a, transformPoint2) {
    var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    if (transformPoint2 === void 0) {
      transformPoint2 = noop;
    }
    var topLeft = transformPoint2({ x: left, y: top });
    var bottomRight = transformPoint2({ x: right, y: bottom });
    return {
      top: topLeft.y,
      left: topLeft.x,
      bottom: bottomRight.y,
      right: bottomRight.x
    };
  }
  function axisBox() {
    return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
  }
  function copyAxisBox(box) {
    return {
      x: __assign({}, box.x),
      y: __assign({}, box.y)
    };
  }
  var zeroDelta = {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  };
  function delta() {
    return {
      x: __assign({}, zeroDelta),
      y: __assign({}, zeroDelta)
    };
  }
  function eachAxis(handler) {
    return [handler("x"), handler("y")];
  }
  function applyConstraints(point, _a, elastic) {
    var min = _a.min, max = _a.max;
    if (min !== void 0 && point < min) {
      point = elastic ? mix(min, point, elastic.min) : Math.max(point, min);
    } else if (max !== void 0 && point > max) {
      point = elastic ? mix(max, point, elastic.max) : Math.min(point, max);
    }
    return point;
  }
  function calcConstrainedMinPoint(point, length, progress2, constraints, elastic) {
    var min = point - length * progress2;
    return constraints ? applyConstraints(min, constraints, elastic) : min;
  }
  function calcRelativeAxisConstraints(axis, min, max) {
    return {
      min: min !== void 0 ? axis.min + min : void 0,
      max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
    };
  }
  function calcRelativeConstraints(layoutBox, _a) {
    var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    return {
      x: calcRelativeAxisConstraints(layoutBox.x, left, right),
      y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
    };
  }
  function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    var _a;
    var min = constraintsAxis.min - layoutAxis.min;
    var max = constraintsAxis.max - layoutAxis.max;
    if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
      _a = __read([max, min], 2), min = _a[0], max = _a[1];
    }
    return {
      min: layoutAxis.min + min,
      max: layoutAxis.min + max
    };
  }
  function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
      x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
      y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
    };
  }
  function calcPositionFromProgress(axis, constraints, progress2) {
    var axisLength = axis.max - axis.min;
    var min = mix(constraints.min, constraints.max - axisLength, progress2);
    return { min, max: min + axisLength };
  }
  function rebaseAxisConstraints(layout, constraints) {
    var relativeConstraints = {};
    if (constraints.min !== void 0) {
      relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== void 0) {
      relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
  }
  var defaultElastic = 0.35;
  function resolveDragElastic(dragElastic) {
    if (dragElastic === false) {
      dragElastic = 0;
    } else if (dragElastic === true) {
      dragElastic = defaultElastic;
    }
    return {
      x: resolveAxisElastic(dragElastic, "left", "right"),
      y: resolveAxisElastic(dragElastic, "top", "bottom")
    };
  }
  function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
      min: resolvePointElastic(dragElastic, minLabel),
      max: resolvePointElastic(dragElastic, maxLabel)
    };
  }
  function resolvePointElastic(dragElastic, label) {
    var _a;
    return typeof dragElastic === "number" ? dragElastic : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
  }
  function getBoundingBox(element, transformPagePoint) {
    var box = element.getBoundingClientRect();
    return convertBoundingBoxToAxisBox(transformBoundingBox(box, transformPagePoint));
  }
  var clampProgress = function(v) {
    return clamp(0, 1, v);
  };
  function isNear(value, target, maxDistance) {
    if (target === void 0) {
      target = 0;
    }
    if (maxDistance === void 0) {
      maxDistance = 0.01;
    }
    return distance(value, target) < maxDistance;
  }
  function calcLength(axis) {
    return axis.max - axis.min;
  }
  function calcOrigin(source, target) {
    var origin = 0.5;
    var sourceLength = calcLength(source);
    var targetLength = calcLength(target);
    if (targetLength > sourceLength) {
      origin = progress(target.min, target.max - sourceLength, source.min);
    } else if (sourceLength > targetLength) {
      origin = progress(source.min, source.max - targetLength, target.min);
    }
    return clampProgress(origin);
  }
  function updateAxisDelta(delta2, source, target, origin) {
    if (origin === void 0) {
      origin = 0.5;
    }
    delta2.origin = origin;
    delta2.originPoint = mix(source.min, source.max, delta2.origin);
    delta2.scale = calcLength(target) / calcLength(source);
    if (isNear(delta2.scale, 1, 1e-4))
      delta2.scale = 1;
    delta2.translate = mix(target.min, target.max, delta2.origin) - delta2.originPoint;
    if (isNear(delta2.translate))
      delta2.translate = 0;
  }
  function updateBoxDelta(delta2, source, target, origin) {
    updateAxisDelta(delta2.x, source.x, target.x, defaultOrigin(origin.originX));
    updateAxisDelta(delta2.y, source.y, target.y, defaultOrigin(origin.originY));
  }
  function defaultOrigin(origin) {
    return typeof origin === "number" ? origin : 0.5;
  }
  function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
  }
  function calcRelativeBox(projection, parentProjection) {
    calcRelativeAxis(projection.target.x, projection.relativeTarget.x, parentProjection.target.x);
    calcRelativeAxis(projection.target.y, projection.relativeTarget.y, parentProjection.target.y);
  }
  var compareByDepth = function(a2, b2) {
    return a2.depth - b2.depth;
  };
  function isProjecting(visualElement2) {
    var isEnabled = visualElement2.projection.isEnabled;
    return isEnabled || visualElement2.shouldResetTransform();
  }
  function collectProjectingAncestors(visualElement2, ancestors) {
    if (ancestors === void 0) {
      ancestors = [];
    }
    var parent = visualElement2.parent;
    if (parent)
      collectProjectingAncestors(parent, ancestors);
    if (isProjecting(visualElement2))
      ancestors.push(visualElement2);
    return ancestors;
  }
  function collectProjectingChildren(visualElement2) {
    var children = [];
    var addChild = function(child) {
      if (isProjecting(child))
        children.push(child);
      child.children.forEach(addChild);
    };
    visualElement2.children.forEach(addChild);
    return children.sort(compareByDepth);
  }
  function updateLayoutMeasurement(visualElement2) {
    if (visualElement2.shouldResetTransform())
      return;
    var layoutState = visualElement2.getLayoutState();
    visualElement2.notifyBeforeLayoutMeasure(layoutState.layout);
    layoutState.isHydrated = true;
    layoutState.layout = visualElement2.measureViewportBox();
    layoutState.layoutCorrected = copyAxisBox(layoutState.layout);
    visualElement2.notifyLayoutMeasure(layoutState.layout, visualElement2.prevViewportBox || layoutState.layout);
    sync.update(function() {
      return visualElement2.rebaseProjectionTarget();
    });
  }
  function snapshotViewportBox(visualElement2) {
    if (visualElement2.shouldResetTransform())
      return;
    visualElement2.prevViewportBox = visualElement2.measureViewportBox(false);
    visualElement2.rebaseProjectionTarget(false, visualElement2.prevViewportBox);
  }
  function tweenAxis(target, prev, next, p) {
    target.min = mix(prev.min, next.min, p);
    target.max = mix(prev.max, next.max, p);
  }
  function calcRelativeOffsetAxis(parent, child) {
    return {
      min: child.min - parent.min,
      max: child.max - parent.min
    };
  }
  function calcRelativeOffset(parent, child) {
    return {
      x: calcRelativeOffsetAxis(parent.x, child.x),
      y: calcRelativeOffsetAxis(parent.y, child.y)
    };
  }
  function checkIfParentHasChanged(prev, next) {
    var prevId = prev.getLayoutId();
    var nextId = next.getLayoutId();
    return prevId !== nextId || nextId === void 0 && prev !== next;
  }
  function isDraggable(visualElement2) {
    var _a = visualElement2.getProps(), drag2 = _a.drag, _dragX = _a._dragX;
    return drag2 && !_dragX;
  }
  function resetAxis(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
  }
  function resetBox(box, originBox) {
    resetAxis(box.x, originBox.x);
    resetAxis(box.y, originBox.y);
  }
  function scalePoint(point, scale2, originPoint) {
    var distanceFromOrigin = point - originPoint;
    var scaled = scale2 * distanceFromOrigin;
    return originPoint + scaled;
  }
  function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
    if (boxScale !== void 0) {
      point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale2, originPoint) + translate;
  }
  function applyAxisDelta(axis, translate, scale2, originPoint, boxScale) {
    if (translate === void 0) {
      translate = 0;
    }
    if (scale2 === void 0) {
      scale2 = 1;
    }
    axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
  }
  function applyBoxDelta(box, _a) {
    var x = _a.x, y = _a.y;
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
  }
  function applyAxisTransforms(final, axis, transforms, _a) {
    var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    final.min = axis.min;
    final.max = axis.max;
    var axisOrigin = transforms[originKey] !== void 0 ? transforms[originKey] : 0.5;
    var originPoint = mix(axis.min, axis.max, axisOrigin);
    applyAxisDelta(final, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
  }
  var xKeys = ["x", "scaleX", "originX"];
  var yKeys = ["y", "scaleY", "originY"];
  function applyBoxTransforms(finalBox, box, transforms) {
    applyAxisTransforms(finalBox.x, box.x, transforms, xKeys);
    applyAxisTransforms(finalBox.y, box.y, transforms, yKeys);
  }
  function removePointDelta(point, translate, scale2, originPoint, boxScale) {
    point -= translate;
    point = scalePoint(point, 1 / scale2, originPoint);
    if (boxScale !== void 0) {
      point = scalePoint(point, 1 / boxScale, originPoint);
    }
    return point;
  }
  function removeAxisDelta(axis, translate, scale2, origin, boxScale) {
    if (translate === void 0) {
      translate = 0;
    }
    if (scale2 === void 0) {
      scale2 = 1;
    }
    if (origin === void 0) {
      origin = 0.5;
    }
    var originPoint = mix(axis.min, axis.max, origin) - translate;
    axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
  }
  function removeAxisTransforms(axis, transforms, _a) {
    var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale);
  }
  function removeBoxTransforms(box, transforms) {
    removeAxisTransforms(box.x, transforms, xKeys);
    removeAxisTransforms(box.y, transforms, yKeys);
  }
  function applyTreeDeltas(box, treeScale, treePath) {
    var treeLength = treePath.length;
    if (!treeLength)
      return;
    treeScale.x = treeScale.y = 1;
    var node;
    var delta2;
    for (var i = 0; i < treeLength; i++) {
      node = treePath[i];
      delta2 = node.getLayoutState().delta;
      treeScale.x *= delta2.x.scale;
      treeScale.y *= delta2.y.scale;
      applyBoxDelta(box, delta2);
      if (isDraggable(node)) {
        applyBoxTransforms(box, box, node.getLatestValues());
      }
    }
  }
  function convertToRelativeProjection(visualElement2, isLayoutDrag) {
    if (isLayoutDrag === void 0) {
      isLayoutDrag = true;
    }
    var projectionParent = visualElement2.getProjectionParent();
    if (!projectionParent)
      return false;
    var offset;
    if (isLayoutDrag) {
      offset = calcRelativeOffset(projectionParent.projection.target, visualElement2.projection.target);
      removeBoxTransforms(offset, projectionParent.getLatestValues());
    } else {
      offset = calcRelativeOffset(projectionParent.getLayoutState().layout, visualElement2.getLayoutState().layout);
    }
    eachAxis(function(axis) {
      return visualElement2.setProjectionTargetAxis(axis, offset[axis].min, offset[axis].max, true);
    });
    return true;
  }
  var unresolvedJobs = new Set();
  function pushJob(stack, job, pointer) {
    if (!stack[pointer])
      stack[pointer] = [];
    stack[pointer].push(job);
  }
  function batchLayout(callback) {
    unresolvedJobs.add(callback);
    return function() {
      return unresolvedJobs.delete(callback);
    };
  }
  function flushLayout() {
    if (!unresolvedJobs.size)
      return;
    var pointer = 0;
    var reads = [[]];
    var writes = [];
    var setRead = function(job) {
      return pushJob(reads, job, pointer);
    };
    var setWrite = function(job) {
      pushJob(writes, job, pointer);
      pointer++;
    };
    unresolvedJobs.forEach(function(callback) {
      callback(setRead, setWrite);
      pointer = 0;
    });
    unresolvedJobs.clear();
    var numStacks = writes.length;
    for (var i = 0; i <= numStacks; i++) {
      reads[i] && reads[i].forEach(executeJob);
      writes[i] && writes[i].forEach(executeJob);
    }
  }
  var executeJob = function(job) {
    return job();
  };
  var elementDragControls = new WeakMap();
  var lastPointerEvent;
  var VisualElementDragControls = function() {
    function VisualElementDragControls2(_a) {
      var visualElement2 = _a.visualElement;
      this.isDragging = false;
      this.currentDirection = null;
      this.constraints = false;
      this.elastic = axisBox();
      this.props = {};
      this.hasMutatedConstraints = false;
      this.cursorProgress = {
        x: 0.5,
        y: 0.5
      };
      this.originPoint = {};
      this.openGlobalLock = null;
      this.panSession = null;
      this.visualElement = visualElement2;
      this.visualElement.enableLayoutProjection();
      elementDragControls.set(visualElement2, this);
    }
    VisualElementDragControls2.prototype.start = function(originEvent, _a) {
      var _this = this;
      var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c, cursorProgress = _b.cursorProgress;
      var onSessionStart = function(event) {
        var _a2;
        _this.stopMotion();
        var initialPoint = getViewportPointFromEvent(event).point;
        (_a2 = _this.cancelLayout) === null || _a2 === void 0 ? void 0 : _a2.call(_this);
        _this.cancelLayout = batchLayout(function(read, write) {
          var ancestors = collectProjectingAncestors(_this.visualElement);
          var children = collectProjectingChildren(_this.visualElement);
          var tree = __spreadArray(__spreadArray([], __read(ancestors)), __read(children));
          var hasManuallySetCursorOrigin = false;
          _this.isLayoutDrag() && _this.visualElement.lockProjectionTarget();
          write(function() {
            tree.forEach(function(element) {
              return element.resetTransform();
            });
          });
          read(function() {
            updateLayoutMeasurement(_this.visualElement);
            children.forEach(updateLayoutMeasurement);
          });
          write(function() {
            tree.forEach(function(element) {
              return element.restoreTransform();
            });
            if (snapToCursor) {
              hasManuallySetCursorOrigin = _this.snapToCursor(initialPoint);
            }
          });
          read(function() {
            var isRelativeDrag = Boolean(_this.getAxisMotionValue("x") && !_this.isExternalDrag());
            if (!isRelativeDrag) {
              _this.visualElement.rebaseProjectionTarget(true, _this.visualElement.measureViewportBox(false));
            }
            _this.visualElement.scheduleUpdateLayoutProjection();
            var projection = _this.visualElement.projection;
            eachAxis(function(axis) {
              if (!hasManuallySetCursorOrigin) {
                var _a3 = projection.target[axis], min = _a3.min, max = _a3.max;
                _this.cursorProgress[axis] = cursorProgress ? cursorProgress[axis] : progress(min, max, initialPoint[axis]);
              }
              var axisValue = _this.getAxisMotionValue(axis);
              if (axisValue) {
                _this.originPoint[axis] = axisValue.get();
              }
            });
          });
          write(function() {
            flushSync.update();
            flushSync.preRender();
            flushSync.render();
            flushSync.postRender();
          });
          read(function() {
            return _this.resolveDragConstraints();
          });
        });
      };
      var onStart = function(event, info) {
        var _a2, _b2, _c2;
        var _d = _this.props, drag2 = _d.drag, dragPropagation = _d.dragPropagation;
        if (drag2 && !dragPropagation) {
          if (_this.openGlobalLock)
            _this.openGlobalLock();
          _this.openGlobalLock = getGlobalLock(drag2);
          if (!_this.openGlobalLock)
            return;
        }
        flushLayout();
        _this.isDragging = true;
        _this.currentDirection = null;
        (_b2 = (_a2 = _this.props).onDragStart) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, event, info);
        (_c2 = _this.visualElement.animationState) === null || _c2 === void 0 ? void 0 : _c2.setActive(AnimationType.Drag, true);
      };
      var onMove = function(event, info) {
        var _a2, _b2, _c2, _d;
        var _e = _this.props, dragPropagation = _e.dragPropagation, dragDirectionLock = _e.dragDirectionLock;
        if (!dragPropagation && !_this.openGlobalLock)
          return;
        var offset = info.offset;
        if (dragDirectionLock && _this.currentDirection === null) {
          _this.currentDirection = getCurrentDirection(offset);
          if (_this.currentDirection !== null) {
            (_b2 = (_a2 = _this.props).onDirectionLock) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, _this.currentDirection);
          }
          return;
        }
        _this.updateAxis("x", info.point, offset);
        _this.updateAxis("y", info.point, offset);
        (_d = (_c2 = _this.props).onDrag) === null || _d === void 0 ? void 0 : _d.call(_c2, event, info);
        lastPointerEvent = event;
      };
      var onSessionEnd = function(event, info) {
        return _this.stop(event, info);
      };
      var transformPagePoint = this.props.transformPagePoint;
      this.panSession = new PanSession(originEvent, {
        onSessionStart,
        onStart,
        onMove,
        onSessionEnd
      }, { transformPagePoint });
    };
    VisualElementDragControls2.prototype.resolveDragConstraints = function() {
      var _this = this;
      var _a = this.props, dragConstraints = _a.dragConstraints, dragElastic = _a.dragElastic;
      var layout = this.visualElement.getLayoutState().layoutCorrected;
      if (dragConstraints) {
        this.constraints = isRefObject(dragConstraints) ? this.resolveRefConstraints(layout, dragConstraints) : calcRelativeConstraints(layout, dragConstraints);
      } else {
        this.constraints = false;
      }
      this.elastic = resolveDragElastic(dragElastic);
      if (this.constraints && !this.hasMutatedConstraints) {
        eachAxis(function(axis) {
          if (_this.getAxisMotionValue(axis)) {
            _this.constraints[axis] = rebaseAxisConstraints(layout[axis], _this.constraints[axis]);
          }
        });
      }
    };
    VisualElementDragControls2.prototype.resolveRefConstraints = function(layoutBox, constraints) {
      var _a = this.props, onMeasureDragConstraints = _a.onMeasureDragConstraints, transformPagePoint = _a.transformPagePoint;
      var constraintsElement = constraints.current;
      this.constraintsBox = getBoundingBox(constraintsElement, transformPagePoint);
      var measuredConstraints = calcViewportConstraints(layoutBox, this.constraintsBox);
      if (onMeasureDragConstraints) {
        var userConstraints = onMeasureDragConstraints(convertAxisBoxToBoundingBox(measuredConstraints));
        this.hasMutatedConstraints = !!userConstraints;
        if (userConstraints) {
          measuredConstraints = convertBoundingBoxToAxisBox(userConstraints);
        }
      }
      return measuredConstraints;
    };
    VisualElementDragControls2.prototype.cancelDrag = function() {
      var _a, _b;
      this.visualElement.unlockProjectionTarget();
      (_a = this.cancelLayout) === null || _a === void 0 ? void 0 : _a.call(this);
      this.isDragging = false;
      this.panSession && this.panSession.end();
      this.panSession = null;
      if (!this.props.dragPropagation && this.openGlobalLock) {
        this.openGlobalLock();
        this.openGlobalLock = null;
      }
      (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(AnimationType.Drag, false);
    };
    VisualElementDragControls2.prototype.stop = function(event, info) {
      var _a, _b, _c;
      (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
      this.panSession = null;
      var isDragging = this.isDragging;
      this.cancelDrag();
      if (!isDragging)
        return;
      var velocity = info.velocity;
      this.animateDragEnd(velocity);
      (_c = (_b = this.props).onDragEnd) === null || _c === void 0 ? void 0 : _c.call(_b, event, info);
    };
    VisualElementDragControls2.prototype.snapToCursor = function(point) {
      var _this = this;
      return eachAxis(function(axis) {
        var drag2 = _this.props.drag;
        if (!shouldDrag(axis, drag2, _this.currentDirection))
          return;
        var axisValue = _this.getAxisMotionValue(axis);
        if (axisValue) {
          var box = _this.visualElement.getLayoutState().layout;
          var length_1 = box[axis].max - box[axis].min;
          var center = box[axis].min + length_1 / 2;
          var offset = point[axis] - center;
          _this.originPoint[axis] = point[axis];
          axisValue.set(offset);
        } else {
          _this.cursorProgress[axis] = 0.5;
          return true;
        }
      }).includes(true);
    };
    VisualElementDragControls2.prototype.updateAxis = function(axis, point, offset) {
      var drag2 = this.props.drag;
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      return this.getAxisMotionValue(axis) ? this.updateAxisMotionValue(axis, offset) : this.updateVisualElementAxis(axis, point);
    };
    VisualElementDragControls2.prototype.updateAxisMotionValue = function(axis, offset) {
      var axisValue = this.getAxisMotionValue(axis);
      if (!offset || !axisValue)
        return;
      var nextValue = this.originPoint[axis] + offset[axis];
      var update = this.constraints ? applyConstraints(nextValue, this.constraints[axis], this.elastic[axis]) : nextValue;
      axisValue.set(update);
    };
    VisualElementDragControls2.prototype.updateVisualElementAxis = function(axis, point) {
      var _a;
      var axisLayout = this.visualElement.getLayoutState().layout[axis];
      var axisLength = axisLayout.max - axisLayout.min;
      var axisProgress = this.cursorProgress[axis];
      var min = calcConstrainedMinPoint(point[axis], axisLength, axisProgress, (_a = this.constraints) === null || _a === void 0 ? void 0 : _a[axis], this.elastic[axis]);
      this.visualElement.setProjectionTargetAxis(axis, min, min + axisLength);
    };
    VisualElementDragControls2.prototype.setProps = function(_a) {
      var _b = _a.drag, drag2 = _b === void 0 ? false : _b, _c = _a.dragDirectionLock, dragDirectionLock = _c === void 0 ? false : _c, _d = _a.dragPropagation, dragPropagation = _d === void 0 ? false : _d, _e = _a.dragConstraints, dragConstraints = _e === void 0 ? false : _e, _f = _a.dragElastic, dragElastic = _f === void 0 ? defaultElastic : _f, _g = _a.dragMomentum, dragMomentum = _g === void 0 ? true : _g, remainingProps = __rest(_a, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
      this.props = __assign({
        drag: drag2,
        dragDirectionLock,
        dragPropagation,
        dragConstraints,
        dragElastic,
        dragMomentum
      }, remainingProps);
    };
    VisualElementDragControls2.prototype.getAxisMotionValue = function(axis) {
      var _a = this.props, layout = _a.layout, layoutId = _a.layoutId;
      var dragKey = "_drag" + axis.toUpperCase();
      if (this.props[dragKey]) {
        return this.props[dragKey];
      } else if (!layout && layoutId === void 0) {
        return this.visualElement.getValue(axis, 0);
      }
    };
    VisualElementDragControls2.prototype.isLayoutDrag = function() {
      return !this.getAxisMotionValue("x");
    };
    VisualElementDragControls2.prototype.isExternalDrag = function() {
      var _a = this.props, _dragX = _a._dragX, _dragY = _a._dragY;
      return _dragX || _dragY;
    };
    VisualElementDragControls2.prototype.animateDragEnd = function(velocity) {
      var _this = this;
      var _a = this.props, drag2 = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition;
      var isRelative = convertToRelativeProjection(this.visualElement, this.isLayoutDrag() && !this.isExternalDrag());
      var constraints = this.constraints || {};
      if (isRelative && Object.keys(constraints).length && this.isLayoutDrag()) {
        var projectionParent = this.visualElement.getProjectionParent();
        if (projectionParent) {
          var relativeConstraints_1 = calcRelativeOffset(projectionParent.projection.targetFinal, constraints);
          eachAxis(function(axis) {
            var _a2 = relativeConstraints_1[axis], min = _a2.min, max = _a2.max;
            constraints[axis] = {
              min: isNaN(min) ? void 0 : min,
              max: isNaN(max) ? void 0 : max
            };
          });
        }
      }
      var momentumAnimations = eachAxis(function(axis) {
        var _a2;
        if (!shouldDrag(axis, drag2, _this.currentDirection)) {
          return;
        }
        var transition = (_a2 = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a2 !== void 0 ? _a2 : {};
        var bounceStiffness = dragElastic ? 200 : 1e6;
        var bounceDamping = dragElastic ? 40 : 1e7;
        var inertia2 = __assign(__assign({
          type: "inertia",
          velocity: dragMomentum ? velocity[axis] : 0,
          bounceStiffness,
          bounceDamping,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10
        }, dragTransition), transition);
        return _this.getAxisMotionValue(axis) ? _this.startAxisValueAnimation(axis, inertia2) : _this.visualElement.startLayoutAnimation(axis, inertia2, isRelative);
      });
      return Promise.all(momentumAnimations).then(function() {
        var _a2, _b;
        (_b = (_a2 = _this.props).onDragTransitionEnd) === null || _b === void 0 ? void 0 : _b.call(_a2);
      });
    };
    VisualElementDragControls2.prototype.stopMotion = function() {
      var _this = this;
      eachAxis(function(axis) {
        var axisValue = _this.getAxisMotionValue(axis);
        axisValue ? axisValue.stop() : _this.visualElement.stopLayoutAnimation();
      });
    };
    VisualElementDragControls2.prototype.startAxisValueAnimation = function(axis, transition) {
      var axisValue = this.getAxisMotionValue(axis);
      if (!axisValue)
        return;
      var currentValue = axisValue.get();
      axisValue.set(currentValue);
      axisValue.set(currentValue);
      return startAnimation(axis, axisValue, 0, transition);
    };
    VisualElementDragControls2.prototype.scalePoint = function() {
      var _this = this;
      var _a = this.props, drag2 = _a.drag, dragConstraints = _a.dragConstraints;
      if (!isRefObject(dragConstraints) || !this.constraintsBox)
        return;
      this.stopMotion();
      var boxProgress = { x: 0, y: 0 };
      eachAxis(function(axis) {
        boxProgress[axis] = calcOrigin(_this.visualElement.projection.target[axis], _this.constraintsBox[axis]);
      });
      this.updateConstraints(function() {
        eachAxis(function(axis) {
          if (!shouldDrag(axis, drag2, null))
            return;
          var _a2 = calcPositionFromProgress(_this.visualElement.projection.target[axis], _this.constraintsBox[axis], boxProgress[axis]), min = _a2.min, max = _a2.max;
          _this.visualElement.setProjectionTargetAxis(axis, min, max);
        });
      });
      setTimeout(flushLayout, 1);
    };
    VisualElementDragControls2.prototype.updateConstraints = function(onReady) {
      var _this = this;
      this.cancelLayout = batchLayout(function(read, write) {
        var ancestors = collectProjectingAncestors(_this.visualElement);
        write(function() {
          return ancestors.forEach(function(element) {
            return element.resetTransform();
          });
        });
        read(function() {
          return updateLayoutMeasurement(_this.visualElement);
        });
        write(function() {
          return ancestors.forEach(function(element) {
            return element.restoreTransform();
          });
        });
        read(function() {
          _this.resolveDragConstraints();
        });
        if (onReady)
          write(onReady);
      });
    };
    VisualElementDragControls2.prototype.mount = function(visualElement2) {
      var _this = this;
      var element = visualElement2.getInstance();
      var stopPointerListener = addPointerEvent(element, "pointerdown", function(event) {
        var _a = _this.props, drag2 = _a.drag, _b = _a.dragListener, dragListener = _b === void 0 ? true : _b;
        drag2 && dragListener && _this.start(event);
      });
      var stopResizeListener = addDomEvent(window, "resize", function() {
        _this.scalePoint();
      });
      var stopLayoutUpdateListener = visualElement2.onLayoutUpdate(function() {
        if (_this.isDragging) {
          _this.resolveDragConstraints();
        }
      });
      var prevDragCursor = visualElement2.prevDragCursor;
      if (prevDragCursor) {
        this.start(lastPointerEvent, { cursorProgress: prevDragCursor });
      }
      return function() {
        stopPointerListener === null || stopPointerListener === void 0 ? void 0 : stopPointerListener();
        stopResizeListener === null || stopResizeListener === void 0 ? void 0 : stopResizeListener();
        stopLayoutUpdateListener === null || stopLayoutUpdateListener === void 0 ? void 0 : stopLayoutUpdateListener();
        _this.cancelDrag();
      };
    };
    return VisualElementDragControls2;
  }();
  function shouldDrag(direction, drag2, currentDirection) {
    return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
  }
  function getCurrentDirection(offset, lockThreshold) {
    if (lockThreshold === void 0) {
      lockThreshold = 10;
    }
    var direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
      direction = "y";
    } else if (Math.abs(offset.x) > lockThreshold) {
      direction = "x";
    }
    return direction;
  }
  function useDrag(props) {
    var groupDragControls = props.dragControls, visualElement2 = props.visualElement;
    var transformPagePoint = React.useContext(MotionConfigContext).transformPagePoint;
    var dragControls = useConstant(function() {
      return new VisualElementDragControls({
        visualElement: visualElement2
      });
    });
    dragControls.setProps(__assign(__assign({}, props), { transformPagePoint }));
    React.useEffect(function() {
      return groupDragControls && groupDragControls.subscribe(dragControls);
    }, [dragControls]);
    React.useEffect(function() {
      return dragControls.mount(visualElement2);
    }, []);
  }
  function usePanGesture(_a) {
    var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart, visualElement2 = _a.visualElement;
    var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
    var panSession = React.useRef(null);
    var transformPagePoint = React.useContext(MotionConfigContext).transformPagePoint;
    var handlers = {
      onSessionStart: onPanSessionStart,
      onStart: onPanStart,
      onMove: onPan,
      onEnd: function(event, info) {
        panSession.current = null;
        onPanEnd && onPanEnd(event, info);
      }
    };
    React.useEffect(function() {
      if (panSession.current !== null) {
        panSession.current.updateHandlers(handlers);
      }
    });
    function onPointerDown(event) {
      panSession.current = new PanSession(event, handlers, {
        transformPagePoint
      });
    }
    usePointerEvent(visualElement2, "pointerdown", hasPanEvents && onPointerDown);
    useUnmountEffect(function() {
      return panSession.current && panSession.current.end();
    });
  }
  var drag = {
    pan: makeRenderlessComponent(usePanGesture),
    drag: makeRenderlessComponent(useDrag)
  };
  var Presence;
  (function(Presence2) {
    Presence2[Presence2["Entering"] = 0] = "Entering";
    Presence2[Presence2["Present"] = 1] = "Present";
    Presence2[Presence2["Exiting"] = 2] = "Exiting";
  })(Presence || (Presence = {}));
  var VisibilityAction;
  (function(VisibilityAction2) {
    VisibilityAction2[VisibilityAction2["Hide"] = 0] = "Hide";
    VisibilityAction2[VisibilityAction2["Show"] = 1] = "Show";
  })(VisibilityAction || (VisibilityAction = {}));
  function isCSSVariable(value) {
    return typeof value === "string" && value.startsWith("var(--");
  }
  var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
  function parseCSSVariable(current) {
    var match = cssVariableRegex.exec(current);
    if (!match)
      return [,];
    var _a = __read(match, 3), token = _a[1], fallback = _a[2];
    return [token, fallback];
  }
  function getVariableValue(current, element, depth) {
    var _a = __read(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
    if (!token)
      return;
    var resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
      return resolved.trim();
    } else if (isCSSVariable(fallback)) {
      return getVariableValue(fallback, element);
    } else {
      return fallback;
    }
  }
  function resolveCSSVariables(visualElement2, _a, transitionEnd) {
    var _b;
    var target = __rest(_a, []);
    var element = visualElement2.getInstance();
    if (!(element instanceof HTMLElement))
      return { target, transitionEnd };
    if (transitionEnd) {
      transitionEnd = __assign({}, transitionEnd);
    }
    visualElement2.forEachValue(function(value) {
      var current2 = value.get();
      if (!isCSSVariable(current2))
        return;
      var resolved2 = getVariableValue(current2, element);
      if (resolved2)
        value.set(resolved2);
    });
    for (var key in target) {
      var current = target[key];
      if (!isCSSVariable(current))
        continue;
      var resolved = getVariableValue(current, element);
      if (!resolved)
        continue;
      target[key] = resolved;
      if (transitionEnd)
        (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : transitionEnd[key] = current;
    }
    return { target, transitionEnd };
  }
  function pixelsToPercent(pixels, axis) {
    return pixels / (axis.max - axis.min) * 100;
  }
  function correctBorderRadius(latest, _layoutState, _a) {
    var target = _a.target;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    var x = pixelsToPercent(latest, target.x);
    var y = pixelsToPercent(latest, target.y);
    return x + "% " + y + "%";
  }
  var varToken = "_$css";
  function correctBoxShadow(latest, _a) {
    var delta2 = _a.delta, treeScale = _a.treeScale;
    var original = latest;
    var containsCSSVariables = latest.includes("var(");
    var cssVariables = [];
    if (containsCSSVariables) {
      latest = latest.replace(cssVariableRegex, function(match) {
        cssVariables.push(match);
        return varToken;
      });
    }
    var shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    var template = complex.createTransformer(latest);
    var offset = typeof shadow[0] !== "number" ? 1 : 0;
    var xScale = delta2.x.scale * treeScale.x;
    var yScale = delta2.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    var averageScale = mix(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number")
      shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number")
      shadow[3 + offset] /= averageScale;
    var output = template(shadow);
    if (containsCSSVariables) {
      var i_1 = 0;
      output = output.replace(varToken, function() {
        var cssVariable = cssVariables[i_1];
        i_1++;
        return cssVariable;
      });
    }
    return output;
  }
  var borderCorrectionDefinition = {
    process: correctBorderRadius
  };
  var defaultScaleCorrectors = {
    borderRadius: __assign(__assign({}, borderCorrectionDefinition), { applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ] }),
    borderTopLeftRadius: borderCorrectionDefinition,
    borderTopRightRadius: borderCorrectionDefinition,
    borderBottomLeftRadius: borderCorrectionDefinition,
    borderBottomRightRadius: borderCorrectionDefinition,
    boxShadow: {
      process: correctBoxShadow
    }
  };
  var progressTarget = 1e3;
  var Animate = function(_super) {
    __extends(Animate2, _super);
    function Animate2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.frameTarget = axisBox();
      _this.currentAnimationTarget = axisBox();
      _this.isAnimating = {
        x: false,
        y: false
      };
      _this.stopAxisAnimation = {
        x: void 0,
        y: void 0
      };
      _this.isAnimatingTree = false;
      _this.animate = function(target, origin, _a) {
        if (_a === void 0) {
          _a = {};
        }
        var originBox = _a.originBox, targetBox = _a.targetBox, visibilityAction = _a.visibilityAction, shouldStackAnimate = _a.shouldStackAnimate, onComplete = _a.onComplete, prevParent = _a.prevParent, config = __rest(_a, ["originBox", "targetBox", "visibilityAction", "shouldStackAnimate", "onComplete", "prevParent"]);
        var _b = _this.props, visualElement2 = _b.visualElement, layout = _b.layout;
        if (shouldStackAnimate === false) {
          _this.isAnimatingTree = false;
          return _this.safeToRemove();
        }
        if (_this.isAnimatingTree && shouldStackAnimate !== true) {
          return;
        } else if (shouldStackAnimate) {
          _this.isAnimatingTree = true;
        }
        origin = originBox || origin;
        target = targetBox || target;
        var isRelative = false;
        var projectionParent = visualElement2.getProjectionParent();
        if (projectionParent) {
          var prevParentViewportBox = projectionParent.prevViewportBox;
          var parentLayout = projectionParent.getLayoutState().layout;
          if (prevParent) {
            if (targetBox) {
              parentLayout = prevParent.getLayoutState().layout;
            }
            if (originBox && !checkIfParentHasChanged(prevParent, projectionParent) && prevParent.prevViewportBox) {
              prevParentViewportBox = prevParent.prevViewportBox;
            }
          }
          if (prevParentViewportBox && isProvidedCorrectDataForRelativeSharedLayout(prevParent, originBox, targetBox)) {
            isRelative = true;
            origin = calcRelativeOffset(prevParentViewportBox, origin);
            target = calcRelativeOffset(parentLayout, target);
          }
        }
        var boxHasMoved = hasMoved(origin, target);
        var animations2 = eachAxis(function(axis) {
          var _a2, _b2;
          if (layout === "position") {
            var targetLength = target[axis].max - target[axis].min;
            origin[axis].max = origin[axis].min + targetLength;
          }
          if (visualElement2.projection.isTargetLocked) {
            return;
          } else if (visibilityAction !== void 0) {
            visualElement2.setVisibility(visibilityAction === VisibilityAction.Show);
          } else if (boxHasMoved) {
            return _this.animateAxis(axis, target[axis], origin[axis], __assign(__assign({}, config), { isRelative }));
          } else {
            (_b2 = (_a2 = _this.stopAxisAnimation)[axis]) === null || _b2 === void 0 ? void 0 : _b2.call(_a2);
            return visualElement2.setProjectionTargetAxis(axis, target[axis].min, target[axis].max, isRelative);
          }
        });
        visualElement2.syncRender();
        return Promise.all(animations2).then(function() {
          _this.isAnimatingTree = false;
          onComplete && onComplete();
          visualElement2.notifyLayoutAnimationComplete();
        });
      };
      return _this;
    }
    Animate2.prototype.componentDidMount = function() {
      var _this = this;
      var visualElement2 = this.props.visualElement;
      visualElement2.animateMotionValue = startAnimation;
      visualElement2.enableLayoutProjection();
      this.unsubLayoutReady = visualElement2.onLayoutUpdate(this.animate);
      visualElement2.layoutSafeToRemove = function() {
        return _this.safeToRemove();
      };
      addScaleCorrection(defaultScaleCorrectors);
    };
    Animate2.prototype.componentWillUnmount = function() {
      var _this = this;
      this.unsubLayoutReady();
      eachAxis(function(axis) {
        var _a, _b;
        return (_b = (_a = _this.stopAxisAnimation)[axis]) === null || _b === void 0 ? void 0 : _b.call(_a);
      });
    };
    Animate2.prototype.animateAxis = function(axis, target, origin, _a) {
      var _this = this;
      var _b, _c;
      var _d = _a === void 0 ? {} : _a, transition = _d.transition, isRelative = _d.isRelative;
      if (this.isAnimating[axis] && axisIsEqual(target, this.currentAnimationTarget[axis])) {
        return;
      }
      (_c = (_b = this.stopAxisAnimation)[axis]) === null || _c === void 0 ? void 0 : _c.call(_b);
      this.isAnimating[axis] = true;
      var visualElement2 = this.props.visualElement;
      var frameTarget = this.frameTarget[axis];
      var layoutProgress = visualElement2.getProjectionAnimationProgress()[axis];
      layoutProgress.clearListeners();
      layoutProgress.set(0);
      layoutProgress.set(0);
      var frame2 = function() {
        var p = layoutProgress.get() / progressTarget;
        tweenAxis(frameTarget, origin, target, p);
        visualElement2.setProjectionTargetAxis(axis, frameTarget.min, frameTarget.max, isRelative);
      };
      frame2();
      var unsubscribeProgress = layoutProgress.onChange(frame2);
      this.stopAxisAnimation[axis] = function() {
        _this.isAnimating[axis] = false;
        layoutProgress.stop();
        unsubscribeProgress();
      };
      this.currentAnimationTarget[axis] = target;
      var layoutTransition = transition || visualElement2.getDefaultTransition() || defaultLayoutTransition;
      var animation = startAnimation(axis === "x" ? "layoutX" : "layoutY", layoutProgress, progressTarget, layoutTransition && getValueTransition(layoutTransition, "layout")).then(this.stopAxisAnimation[axis]);
      return animation;
    };
    Animate2.prototype.safeToRemove = function() {
      var _a, _b;
      (_b = (_a = this.props).safeToRemove) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    Animate2.prototype.render = function() {
      return null;
    };
    return Animate2;
  }(React.Component);
  function AnimateLayoutContextProvider(props) {
    var _a = __read(usePresence(), 2), safeToRemove = _a[1];
    return React.createElement(Animate, __assign({}, props, { safeToRemove }));
  }
  function hasMoved(a2, b2) {
    return !isZeroBox(a2) && !isZeroBox(b2) && (!axisIsEqual(a2.x, b2.x) || !axisIsEqual(a2.y, b2.y));
  }
  var zeroAxis = { min: 0, max: 0 };
  function isZeroBox(a2) {
    return axisIsEqual(a2.x, zeroAxis) && axisIsEqual(a2.y, zeroAxis);
  }
  function axisIsEqual(a2, b2) {
    return a2.min === b2.min && a2.max === b2.max;
  }
  var defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1]
  };
  function isProvidedCorrectDataForRelativeSharedLayout(prevParent, originBox, targetBox) {
    return prevParent || !prevParent && !(originBox || targetBox);
  }
  var defaultHandler = {
    layoutReady: function(child) {
      return child.notifyLayoutReady();
    }
  };
  function createBatcher() {
    var queue = new Set();
    return {
      add: function(child) {
        return queue.add(child);
      },
      flush: function(_a) {
        var _b = _a === void 0 ? defaultHandler : _a, layoutReady = _b.layoutReady, parent = _b.parent;
        batchLayout(function(read, write) {
          var order2 = Array.from(queue).sort(compareByDepth);
          var ancestors = parent ? collectProjectingAncestors(parent) : [];
          write(function() {
            var allElements = __spreadArray(__spreadArray([], __read(ancestors)), __read(order2));
            allElements.forEach(function(element) {
              return element.resetTransform();
            });
          });
          read(function() {
            order2.forEach(updateLayoutMeasurement);
          });
          write(function() {
            ancestors.forEach(function(element) {
              return element.restoreTransform();
            });
            order2.forEach(layoutReady);
          });
          read(function() {
            order2.forEach(function(child) {
              if (child.isPresent)
                child.presence = Presence.Present;
            });
          });
          write(function() {
            flushSync.preRender();
            flushSync.render();
          });
          read(function() {
            sync.postRender(function() {
              return order2.forEach(assignProjectionToSnapshot);
            });
            queue.clear();
          });
        });
        flushLayout();
      }
    };
  }
  function assignProjectionToSnapshot(child) {
    child.prevViewportBox = child.projection.target;
  }
  var SharedLayoutContext = React.createContext(createBatcher());
  var FramerTreeLayoutContext = React.createContext(createBatcher());
  function isSharedLayout(context) {
    return !!context.forceUpdate;
  }
  var Measure = function(_super) {
    __extends(Measure2, _super);
    function Measure2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Measure2.prototype.componentDidMount = function() {
      var _a = this.props, syncLayout = _a.syncLayout, framerSyncLayout = _a.framerSyncLayout, visualElement2 = _a.visualElement;
      isSharedLayout(syncLayout) && syncLayout.register(visualElement2);
      isSharedLayout(framerSyncLayout) && framerSyncLayout.register(visualElement2);
      visualElement2.onUnmount(function() {
        if (isSharedLayout(syncLayout)) {
          syncLayout.remove(visualElement2);
        }
        if (isSharedLayout(framerSyncLayout)) {
          framerSyncLayout.remove(visualElement2);
        }
      });
    };
    Measure2.prototype.getSnapshotBeforeUpdate = function() {
      var _a = this.props, syncLayout = _a.syncLayout, visualElement2 = _a.visualElement;
      if (isSharedLayout(syncLayout)) {
        syncLayout.syncUpdate();
      } else {
        snapshotViewportBox(visualElement2);
        syncLayout.add(visualElement2);
      }
      return null;
    };
    Measure2.prototype.componentDidUpdate = function() {
      var syncLayout = this.props.syncLayout;
      if (!isSharedLayout(syncLayout))
        syncLayout.flush();
    };
    Measure2.prototype.render = function() {
      return null;
    };
    return Measure2;
  }(React.Component);
  function MeasureContextProvider(props) {
    var syncLayout = React.useContext(SharedLayoutContext);
    var framerSyncLayout = React.useContext(FramerTreeLayoutContext);
    return React.createElement(Measure, __assign({}, props, { syncLayout, framerSyncLayout }));
  }
  var layoutAnimations = {
    measureLayout: MeasureContextProvider,
    layoutAnimation: AnimateLayoutContextProvider
  };
  var createProjectionState = function() {
    return {
      isEnabled: false,
      isHydrated: false,
      isTargetLocked: false,
      target: axisBox(),
      targetFinal: axisBox()
    };
  };
  function createLayoutState() {
    return {
      isHydrated: false,
      layout: axisBox(),
      layoutCorrected: axisBox(),
      treeScale: { x: 1, y: 1 },
      delta: delta(),
      deltaFinal: delta(),
      deltaTransform: ""
    };
  }
  var zeroLayout = createLayoutState();
  function buildLayoutProjectionTransform(_a, treeScale, latestTransform) {
    var x = _a.x, y = _a.y;
    var xTranslate = x.translate / treeScale.x;
    var yTranslate = y.translate / treeScale.y;
    var transform = "translate3d(" + xTranslate + "px, " + yTranslate + "px, 0) ";
    if (latestTransform) {
      var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
      if (rotate)
        transform += "rotate(" + rotate + ") ";
      if (rotateX)
        transform += "rotateX(" + rotateX + ") ";
      if (rotateY)
        transform += "rotateY(" + rotateY + ") ";
    }
    transform += "scale(" + x.scale + ", " + y.scale + ")";
    return !latestTransform && transform === identityProjection ? "" : transform;
  }
  function buildLayoutProjectionTransformOrigin(_a) {
    var deltaFinal = _a.deltaFinal;
    return deltaFinal.x.origin * 100 + "% " + deltaFinal.y.origin * 100 + "% 0";
  }
  var identityProjection = buildLayoutProjectionTransform(zeroLayout.delta, zeroLayout.treeScale, { x: 1, y: 1 });
  var names = [
    "LayoutMeasure",
    "BeforeLayoutMeasure",
    "LayoutUpdate",
    "ViewportBoxUpdate",
    "Update",
    "Render",
    "AnimationComplete",
    "LayoutAnimationComplete",
    "AnimationStart",
    "SetAxisTarget",
    "Unmount"
  ];
  function createLifecycles() {
    var managers = names.map(function() {
      return new SubscriptionManager();
    });
    var propSubscriptions = {};
    var lifecycles = {
      clearAllListeners: function() {
        return managers.forEach(function(manager) {
          return manager.clear();
        });
      },
      updatePropListeners: function(props) {
        return names.forEach(function(name) {
          var _a;
          (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);
          var on = "on" + name;
          var propListener = props[on];
          if (propListener) {
            propSubscriptions[name] = lifecycles[on](propListener);
          }
        });
      }
    };
    managers.forEach(function(manager, i) {
      lifecycles["on" + names[i]] = function(handler) {
        return manager.add(handler);
      };
      lifecycles["notify" + names[i]] = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return manager.notify.apply(manager, __spreadArray([], __read(args)));
      };
    });
    return lifecycles;
  }
  function updateMotionValuesFromProps(element, next, prev) {
    var _a;
    for (var key in next) {
      var nextValue = next[key];
      var prevValue = prev[key];
      if (isMotionValue(nextValue)) {
        element.addValue(key, nextValue);
      } else if (isMotionValue(prevValue)) {
        element.addValue(key, motionValue(nextValue));
      } else if (prevValue !== nextValue) {
        if (element.hasValue(key)) {
          var existingValue = element.getValue(key);
          !existingValue.hasAnimated && existingValue.set(nextValue);
        } else {
          element.addValue(key, motionValue((_a = element.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
        }
      }
    }
    for (var key in prev) {
      if (next[key] === void 0)
        element.removeValue(key);
    }
    return next;
  }
  function updateLayoutDeltas(_a, _b, treePath, transformOrigin) {
    var delta2 = _a.delta, layout = _a.layout, layoutCorrected = _a.layoutCorrected, treeScale = _a.treeScale;
    var target = _b.target;
    resetBox(layoutCorrected, layout);
    applyTreeDeltas(layoutCorrected, treeScale, treePath);
    updateBoxDelta(delta2, layoutCorrected, target, transformOrigin);
  }
  var FlatTree = function() {
    function FlatTree2() {
      this.children = [];
      this.isDirty = false;
    }
    FlatTree2.prototype.add = function(child) {
      addUniqueItem(this.children, child);
      this.isDirty = true;
    };
    FlatTree2.prototype.remove = function(child) {
      removeItem(this.children, child);
      this.isDirty = true;
    };
    FlatTree2.prototype.forEach = function(callback) {
      this.isDirty && this.children.sort(compareByDepth);
      this.isDirty = false;
      this.children.forEach(callback);
    };
    return FlatTree2;
  }();
  function setCurrentViewportBox(visualElement2) {
    var projectionParent = visualElement2.getProjectionParent();
    if (!projectionParent) {
      visualElement2.rebaseProjectionTarget();
      return;
    }
    var relativeOffset = calcRelativeOffset(projectionParent.getLayoutState().layout, visualElement2.getLayoutState().layout);
    eachAxis(function(axis) {
      visualElement2.setProjectionTargetAxis(axis, relativeOffset[axis].min, relativeOffset[axis].max, true);
    });
  }
  var visualElement = function(_a) {
    var _b = _a.treeType, treeType = _b === void 0 ? "" : _b, build = _a.build, getBaseTarget = _a.getBaseTarget, makeTargetAnimatable = _a.makeTargetAnimatable, measureViewportBox = _a.measureViewportBox, renderInstance = _a.render, readValueFromInstance = _a.readValueFromInstance, resetTransform = _a.resetTransform, restoreTransform = _a.restoreTransform, removeValueFromRenderState = _a.removeValueFromRenderState, sortNodePosition = _a.sortNodePosition, scrapeMotionValuesFromProps2 = _a.scrapeMotionValuesFromProps;
    return function(_a2, options) {
      var parent = _a2.parent, props = _a2.props, presenceId = _a2.presenceId, blockInitialAnimation = _a2.blockInitialAnimation, visualState = _a2.visualState;
      if (options === void 0) {
        options = {};
      }
      var latestValues = visualState.latestValues, renderState = visualState.renderState;
      var instance;
      var lifecycles = createLifecycles();
      var projection = createProjectionState();
      var projectionParent;
      var leadProjection = projection;
      var leadLatestValues = latestValues;
      var unsubscribeFromLeadVisualElement;
      var layoutState = createLayoutState();
      var crossfader;
      var hasViewportBoxUpdated = false;
      var values = new Map();
      var valueSubscriptions = new Map();
      var prevMotionValues = {};
      var projectionTargetProgress;
      var baseTarget = __assign({}, latestValues);
      var removeFromVariantTree;
      function render() {
        if (!instance)
          return;
        if (element.isProjectionReady()) {
          applyBoxTransforms(leadProjection.targetFinal, leadProjection.target, leadLatestValues);
          updateBoxDelta(layoutState.deltaFinal, layoutState.layoutCorrected, leadProjection.targetFinal, latestValues);
        }
        triggerBuild();
        renderInstance(instance, renderState);
      }
      function triggerBuild() {
        var valuesToRender = latestValues;
        if (crossfader && crossfader.isActive()) {
          var crossfadedValues = crossfader.getCrossfadeState(element);
          if (crossfadedValues)
            valuesToRender = crossfadedValues;
        }
        build(element, renderState, valuesToRender, leadProjection, layoutState, options, props);
      }
      function update() {
        lifecycles.notifyUpdate(latestValues);
      }
      function updateLayoutProjection() {
        if (!element.isProjectionReady())
          return;
        var delta2 = layoutState.delta, treeScale = layoutState.treeScale;
        var prevTreeScaleX = treeScale.x;
        var prevTreeScaleY = treeScale.y;
        var prevDeltaTransform = layoutState.deltaTransform;
        updateLayoutDeltas(layoutState, leadProjection, element.path, latestValues);
        hasViewportBoxUpdated && element.notifyViewportBoxUpdate(leadProjection.target, delta2);
        hasViewportBoxUpdated = false;
        var deltaTransform = buildLayoutProjectionTransform(delta2, treeScale);
        if (deltaTransform !== prevDeltaTransform || prevTreeScaleX !== treeScale.x || prevTreeScaleY !== treeScale.y) {
          element.scheduleRender();
        }
        layoutState.deltaTransform = deltaTransform;
      }
      function updateTreeLayoutProjection() {
        element.layoutTree.forEach(fireUpdateLayoutProjection);
      }
      function bindToMotionValue(key2, value2) {
        var removeOnChange = value2.onChange(function(latestValue) {
          latestValues[key2] = latestValue;
          props.onUpdate && sync.update(update, false, true);
        });
        var removeOnRenderRequest = value2.onRenderRequest(element.scheduleRender);
        valueSubscriptions.set(key2, function() {
          removeOnChange();
          removeOnRenderRequest();
        });
      }
      var initialMotionValues = scrapeMotionValuesFromProps2(props);
      for (var key in initialMotionValues) {
        var value = initialMotionValues[key];
        if (latestValues[key] !== void 0 && isMotionValue(value)) {
          value.set(latestValues[key], false);
        }
      }
      var isControllingVariants = checkIfControllingVariants(props);
      var isVariantNode = checkIfVariantNode(props);
      var element = __assign(__assign({
        treeType,
        current: null,
        depth: parent ? parent.depth + 1 : 0,
        parent,
        children: new Set(),
        path: parent ? __spreadArray(__spreadArray([], __read(parent.path)), [parent]) : [],
        layoutTree: parent ? parent.layoutTree : new FlatTree(),
        presenceId,
        projection,
        variantChildren: isVariantNode ? new Set() : void 0,
        isVisible: void 0,
        manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()),
        blockInitialAnimation,
        isMounted: function() {
          return Boolean(instance);
        },
        mount: function(newInstance) {
          instance = element.current = newInstance;
          element.pointTo(element);
          if (isVariantNode && parent && !isControllingVariants) {
            removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
          }
          parent === null || parent === void 0 ? void 0 : parent.children.add(element);
        },
        unmount: function() {
          cancelSync.update(update);
          cancelSync.render(render);
          cancelSync.preRender(element.updateLayoutProjection);
          valueSubscriptions.forEach(function(remove) {
            return remove();
          });
          element.stopLayoutAnimation();
          element.layoutTree.remove(element);
          removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
          parent === null || parent === void 0 ? void 0 : parent.children.delete(element);
          unsubscribeFromLeadVisualElement === null || unsubscribeFromLeadVisualElement === void 0 ? void 0 : unsubscribeFromLeadVisualElement();
          lifecycles.clearAllListeners();
        },
        addVariantChild: function(child) {
          var _a3;
          var closestVariantNode = element.getClosestVariantNode();
          if (closestVariantNode) {
            (_a3 = closestVariantNode.variantChildren) === null || _a3 === void 0 ? void 0 : _a3.add(child);
            return function() {
              return closestVariantNode.variantChildren.delete(child);
            };
          }
        },
        sortNodePosition: function(other) {
          if (!sortNodePosition || treeType !== other.treeType)
            return 0;
          return sortNodePosition(element.getInstance(), other.getInstance());
        },
        getClosestVariantNode: function() {
          return isVariantNode ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
        },
        scheduleUpdateLayoutProjection: parent ? parent.scheduleUpdateLayoutProjection : function() {
          return sync.preRender(element.updateTreeLayoutProjection, false, true);
        },
        getLayoutId: function() {
          return props.layoutId;
        },
        getInstance: function() {
          return instance;
        },
        getStaticValue: function(key2) {
          return latestValues[key2];
        },
        setStaticValue: function(key2, value2) {
          return latestValues[key2] = value2;
        },
        getLatestValues: function() {
          return latestValues;
        },
        setVisibility: function(visibility) {
          if (element.isVisible === visibility)
            return;
          element.isVisible = visibility;
          element.scheduleRender();
        },
        makeTargetAnimatable: function(target, canMutate) {
          if (canMutate === void 0) {
            canMutate = true;
          }
          return makeTargetAnimatable(element, target, props, canMutate);
        },
        addValue: function(key2, value2) {
          if (element.hasValue(key2))
            element.removeValue(key2);
          values.set(key2, value2);
          latestValues[key2] = value2.get();
          bindToMotionValue(key2, value2);
        },
        removeValue: function(key2) {
          var _a3;
          values.delete(key2);
          (_a3 = valueSubscriptions.get(key2)) === null || _a3 === void 0 ? void 0 : _a3();
          valueSubscriptions.delete(key2);
          delete latestValues[key2];
          removeValueFromRenderState(key2, renderState);
        },
        hasValue: function(key2) {
          return values.has(key2);
        },
        getValue: function(key2, defaultValue) {
          var value2 = values.get(key2);
          if (value2 === void 0 && defaultValue !== void 0) {
            value2 = motionValue(defaultValue);
            element.addValue(key2, value2);
          }
          return value2;
        },
        forEachValue: function(callback) {
          return values.forEach(callback);
        },
        readValue: function(key2) {
          var _a3;
          return (_a3 = latestValues[key2]) !== null && _a3 !== void 0 ? _a3 : readValueFromInstance(instance, key2, options);
        },
        setBaseTarget: function(key2, value2) {
          baseTarget[key2] = value2;
        },
        getBaseTarget: function(key2) {
          if (getBaseTarget) {
            var target = getBaseTarget(props, key2);
            if (target !== void 0 && !isMotionValue(target))
              return target;
          }
          return baseTarget[key2];
        }
      }, lifecycles), {
        build: function() {
          triggerBuild();
          return renderState;
        },
        scheduleRender: function() {
          sync.render(render, false, true);
        },
        syncRender: render,
        setProps: function(newProps) {
          props = newProps;
          lifecycles.updatePropListeners(newProps);
          prevMotionValues = updateMotionValuesFromProps(element, scrapeMotionValuesFromProps2(props), prevMotionValues);
        },
        getProps: function() {
          return props;
        },
        getVariant: function(name) {
          var _a3;
          return (_a3 = props.variants) === null || _a3 === void 0 ? void 0 : _a3[name];
        },
        getDefaultTransition: function() {
          return props.transition;
        },
        getVariantContext: function(startAtParent) {
          if (startAtParent === void 0) {
            startAtParent = false;
          }
          if (startAtParent)
            return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
          if (!isControllingVariants) {
            var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
            if (props.initial !== void 0) {
              context_1.initial = props.initial;
            }
            return context_1;
          }
          var context = {};
          for (var i = 0; i < numVariantProps; i++) {
            var name_1 = variantProps[i];
            var prop = props[name_1];
            if (isVariantLabel(prop) || prop === false) {
              context[name_1] = prop;
            }
          }
          return context;
        },
        enableLayoutProjection: function() {
          projection.isEnabled = true;
          element.layoutTree.add(element);
        },
        lockProjectionTarget: function() {
          projection.isTargetLocked = true;
        },
        unlockProjectionTarget: function() {
          element.stopLayoutAnimation();
          projection.isTargetLocked = false;
        },
        getLayoutState: function() {
          return layoutState;
        },
        setCrossfader: function(newCrossfader) {
          crossfader = newCrossfader;
        },
        isProjectionReady: function() {
          return projection.isEnabled && projection.isHydrated && layoutState.isHydrated;
        },
        startLayoutAnimation: function(axis, transition, isRelative) {
          if (isRelative === void 0) {
            isRelative = false;
          }
          var progress2 = element.getProjectionAnimationProgress()[axis];
          var _a3 = isRelative ? projection.relativeTarget[axis] : projection.target[axis], min = _a3.min, max = _a3.max;
          var length = max - min;
          progress2.clearListeners();
          progress2.set(min);
          progress2.set(min);
          progress2.onChange(function(v) {
            element.setProjectionTargetAxis(axis, v, v + length, isRelative);
          });
          return element.animateMotionValue(axis, progress2, 0, transition);
        },
        stopLayoutAnimation: function() {
          eachAxis(function(axis) {
            return element.getProjectionAnimationProgress()[axis].stop();
          });
        },
        measureViewportBox: function(withTransform) {
          if (withTransform === void 0) {
            withTransform = true;
          }
          var viewportBox = measureViewportBox(instance, options);
          if (!withTransform)
            removeBoxTransforms(viewportBox, latestValues);
          return viewportBox;
        },
        getProjectionAnimationProgress: function() {
          projectionTargetProgress || (projectionTargetProgress = {
            x: motionValue(0),
            y: motionValue(0)
          });
          return projectionTargetProgress;
        },
        setProjectionTargetAxis: function(axis, min, max, isRelative) {
          if (isRelative === void 0) {
            isRelative = false;
          }
          var target;
          if (isRelative) {
            if (!projection.relativeTarget) {
              projection.relativeTarget = axisBox();
            }
            target = projection.relativeTarget[axis];
          } else {
            projection.relativeTarget = void 0;
            target = projection.target[axis];
          }
          projection.isHydrated = true;
          target.min = min;
          target.max = max;
          hasViewportBoxUpdated = true;
          lifecycles.notifySetAxisTarget();
        },
        rebaseProjectionTarget: function(force, box) {
          if (box === void 0) {
            box = layoutState.layout;
          }
          var _a3 = element.getProjectionAnimationProgress(), x = _a3.x, y = _a3.y;
          var shouldRebase = !projection.relativeTarget && !projection.isTargetLocked && !x.isAnimating() && !y.isAnimating();
          if (force || shouldRebase) {
            eachAxis(function(axis) {
              var _a4 = box[axis], min = _a4.min, max = _a4.max;
              element.setProjectionTargetAxis(axis, min, max);
            });
          }
        },
        notifyLayoutReady: function(config) {
          setCurrentViewportBox(element);
          element.notifyLayoutUpdate(layoutState.layout, element.prevViewportBox || layoutState.layout, config);
        },
        resetTransform: function() {
          return resetTransform(element, instance, props);
        },
        restoreTransform: function() {
          return restoreTransform(instance, renderState);
        },
        updateLayoutProjection,
        updateTreeLayoutProjection: function() {
          element.layoutTree.forEach(fireResolveRelativeTargetBox);
          sync.preRender(updateTreeLayoutProjection, false, true);
        },
        getProjectionParent: function() {
          if (projectionParent === void 0) {
            var foundParent = false;
            for (var i = element.path.length - 1; i >= 0; i--) {
              var ancestor = element.path[i];
              if (ancestor.projection.isEnabled) {
                foundParent = ancestor;
                break;
              }
            }
            projectionParent = foundParent;
          }
          return projectionParent;
        },
        resolveRelativeTargetBox: function() {
          var relativeParent = element.getProjectionParent();
          if (!projection.relativeTarget || !relativeParent)
            return;
          calcRelativeBox(projection, relativeParent.projection);
          if (isDraggable(relativeParent)) {
            var target = projection.target;
            applyBoxTransforms(target, target, relativeParent.getLatestValues());
          }
        },
        shouldResetTransform: function() {
          return Boolean(props._layoutResetTransform);
        },
        pointTo: function(newLead) {
          leadProjection = newLead.projection;
          leadLatestValues = newLead.getLatestValues();
          unsubscribeFromLeadVisualElement === null || unsubscribeFromLeadVisualElement === void 0 ? void 0 : unsubscribeFromLeadVisualElement();
          unsubscribeFromLeadVisualElement = pipe(newLead.onSetAxisTarget(element.scheduleUpdateLayoutProjection), newLead.onLayoutAnimationComplete(function() {
            var _a3;
            if (element.isPresent) {
              element.presence = Presence.Present;
            } else {
              (_a3 = element.layoutSafeToRemove) === null || _a3 === void 0 ? void 0 : _a3.call(element);
            }
          }));
        },
        isPresent: true,
        presence: Presence.Entering
      });
      return element;
    };
  };
  function fireResolveRelativeTargetBox(child) {
    child.resolveRelativeTargetBox();
  }
  function fireUpdateLayoutProjection(child) {
    child.updateLayoutProjection();
  }
  var variantProps = __spreadArray(["initial"], __read(variantPriorityOrder));
  var numVariantProps = variantProps.length;
  var positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y"
  ]);
  var isPositionalKey = function(key) {
    return positionalKeys.has(key);
  };
  var hasPositionalKey = function(target) {
    return Object.keys(target).some(isPositionalKey);
  };
  var setAndResetVelocity = function(value, to) {
    value.set(to, false);
    value.set(to);
  };
  var isNumOrPxType = function(v) {
    return v === number || v === px;
  };
  var BoundingBoxDimension;
  (function(BoundingBoxDimension2) {
    BoundingBoxDimension2["width"] = "width";
    BoundingBoxDimension2["height"] = "height";
    BoundingBoxDimension2["left"] = "left";
    BoundingBoxDimension2["right"] = "right";
    BoundingBoxDimension2["top"] = "top";
    BoundingBoxDimension2["bottom"] = "bottom";
  })(BoundingBoxDimension || (BoundingBoxDimension = {}));
  var getPosFromMatrix = function(matrix, pos) {
    return parseFloat(matrix.split(", ")[pos]);
  };
  var getTranslateFromMatrix = function(pos2, pos3) {
    return function(_bbox, _a) {
      var transform = _a.transform;
      if (transform === "none" || !transform)
        return 0;
      var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
      if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
      } else {
        var matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
          return getPosFromMatrix(matrix[1], pos2);
        } else {
          return 0;
        }
      }
    };
  };
  var transformKeys = new Set(["x", "y", "z"]);
  var nonTranslationalTransformKeys = transformProps.filter(function(key) {
    return !transformKeys.has(key);
  });
  function removeNonTranslationalTransform(visualElement2) {
    var removedTransforms = [];
    nonTranslationalTransformKeys.forEach(function(key) {
      var value = visualElement2.getValue(key);
      if (value !== void 0) {
        removedTransforms.push([key, value.get()]);
        value.set(key.startsWith("scale") ? 1 : 0);
      }
    });
    if (removedTransforms.length)
      visualElement2.syncRender();
    return removedTransforms;
  }
  var positionalValues = {
    width: function(_a) {
      var x = _a.x;
      return x.max - x.min;
    },
    height: function(_a) {
      var y = _a.y;
      return y.max - y.min;
    },
    top: function(_bbox, _a) {
      var top = _a.top;
      return parseFloat(top);
    },
    left: function(_bbox, _a) {
      var left = _a.left;
      return parseFloat(left);
    },
    bottom: function(_a, _b) {
      var y = _a.y;
      var top = _b.top;
      return parseFloat(top) + (y.max - y.min);
    },
    right: function(_a, _b) {
      var x = _a.x;
      var left = _b.left;
      return parseFloat(left) + (x.max - x.min);
    },
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14)
  };
  var convertChangedValueTypes = function(target, visualElement2, changedKeys) {
    var originBbox = visualElement2.measureViewportBox();
    var element = visualElement2.getInstance();
    var elementComputedStyle = getComputedStyle(element);
    var display = elementComputedStyle.display, top = elementComputedStyle.top, left = elementComputedStyle.left, bottom = elementComputedStyle.bottom, right = elementComputedStyle.right, transform = elementComputedStyle.transform;
    var originComputedStyle = { top, left, bottom, right, transform };
    if (display === "none") {
      visualElement2.setStaticValue("display", target.display || "block");
    }
    visualElement2.syncRender();
    var targetBbox = visualElement2.measureViewportBox();
    changedKeys.forEach(function(key) {
      var value = visualElement2.getValue(key);
      setAndResetVelocity(value, positionalValues[key](originBbox, originComputedStyle));
      target[key] = positionalValues[key](targetBbox, elementComputedStyle);
    });
    return target;
  };
  var checkAndConvertChangedValueTypes = function(visualElement2, target, origin, transitionEnd) {
    if (origin === void 0) {
      origin = {};
    }
    if (transitionEnd === void 0) {
      transitionEnd = {};
    }
    target = __assign({}, target);
    transitionEnd = __assign({}, transitionEnd);
    var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
    var removedTransformValues = [];
    var hasAttemptedToRemoveTransformValues = false;
    var changedValueTypeKeys = [];
    targetPositionalKeys.forEach(function(key) {
      var value = visualElement2.getValue(key);
      if (!visualElement2.hasValue(key))
        return;
      var from = origin[key];
      var to = target[key];
      var fromType = findDimensionValueType(from);
      var toType;
      if (isKeyframesTarget(to)) {
        var numKeyframes = to.length;
        for (var i = to[0] === null ? 1 : 0; i < numKeyframes; i++) {
          if (!toType) {
            toType = findDimensionValueType(to[i]);
          } else {
            invariant(findDimensionValueType(to[i]) === toType);
          }
        }
      } else {
        toType = findDimensionValueType(to);
      }
      if (fromType !== toType) {
        if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
          var current = value.get();
          if (typeof current === "string") {
            value.set(parseFloat(current));
          }
          if (typeof to === "string") {
            target[key] = parseFloat(to);
          } else if (Array.isArray(to) && toType === px) {
            target[key] = to.map(parseFloat);
          }
        } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) {
          if (from === 0) {
            value.set(toType.transform(from));
          } else {
            target[key] = fromType.transform(to);
          }
        } else {
          if (!hasAttemptedToRemoveTransformValues) {
            removedTransformValues = removeNonTranslationalTransform(visualElement2);
            hasAttemptedToRemoveTransformValues = true;
          }
          changedValueTypeKeys.push(key);
          transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
          setAndResetVelocity(value, to);
        }
      }
    });
    if (changedValueTypeKeys.length) {
      var convertedTarget = convertChangedValueTypes(target, visualElement2, changedValueTypeKeys);
      if (removedTransformValues.length) {
        removedTransformValues.forEach(function(_a) {
          var _b = __read(_a, 2), key = _b[0], value = _b[1];
          visualElement2.getValue(key).set(value);
        });
      }
      visualElement2.syncRender();
      return { target: convertedTarget, transitionEnd };
    } else {
      return { target, transitionEnd };
    }
  };
  function unitConversion(visualElement2, target, origin, transitionEnd) {
    return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement2, target, origin, transitionEnd) : { target, transitionEnd };
  }
  var parseDomVariant = function(visualElement2, target, origin, transitionEnd) {
    var resolved = resolveCSSVariables(visualElement2, target, transitionEnd);
    target = resolved.target;
    transitionEnd = resolved.transitionEnd;
    return unitConversion(visualElement2, target, origin, transitionEnd);
  };
  function getComputedStyle$1(element) {
    return window.getComputedStyle(element);
  }
  var htmlConfig = {
    treeType: "dom",
    readValueFromInstance: function(domElement, key) {
      if (isTransformProp(key)) {
        var defaultType = getDefaultValueType(key);
        return defaultType ? defaultType.default || 0 : 0;
      } else {
        var computedStyle = getComputedStyle$1(domElement);
        return (isCSSVariable$1(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      }
    },
    sortNodePosition: function(a2, b2) {
      return a2.compareDocumentPosition(b2) & 2 ? 1 : -1;
    },
    getBaseTarget: function(props, key) {
      var _a;
      return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
    },
    measureViewportBox: function(element, _a) {
      var transformPagePoint = _a.transformPagePoint;
      return getBoundingBox(element, transformPagePoint);
    },
    resetTransform: function(element, domElement, props) {
      var transformTemplate = props.transformTemplate;
      domElement.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
      element.scheduleRender();
    },
    restoreTransform: function(instance, mutableState) {
      instance.style.transform = mutableState.style.transform;
    },
    removeValueFromRenderState: function(key, _a) {
      var vars = _a.vars, style = _a.style;
      delete vars[key];
      delete style[key];
    },
    makeTargetAnimatable: function(element, _a, _b, isMounted) {
      var transformValues = _b.transformValues;
      if (isMounted === void 0) {
        isMounted = true;
      }
      var transition = _a.transition, transitionEnd = _a.transitionEnd, target = __rest(_a, ["transition", "transitionEnd"]);
      var origin = getOrigin(target, transition || {}, element);
      if (transformValues) {
        if (transitionEnd)
          transitionEnd = transformValues(transitionEnd);
        if (target)
          target = transformValues(target);
        if (origin)
          origin = transformValues(origin);
      }
      if (isMounted) {
        checkTargetForNewValues(element, target, origin);
        var parsed = parseDomVariant(element, target, origin, transitionEnd);
        transitionEnd = parsed.transitionEnd;
        target = parsed.target;
      }
      return __assign({
        transition,
        transitionEnd
      }, target);
    },
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
    build: function(element, renderState, latestValues, projection, layoutState, options, props) {
      if (element.isVisible !== void 0) {
        renderState.style.visibility = element.isVisible ? "visible" : "hidden";
      }
      var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
      buildHTMLStyles(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? buildLayoutProjectionTransform : void 0, isProjectionTranform ? buildLayoutProjectionTransformOrigin : void 0);
    },
    render: renderHTML
  };
  var htmlVisualElement = visualElement(htmlConfig);
  var svgVisualElement = visualElement(__assign(__assign({}, htmlConfig), {
    getBaseTarget: function(props, key) {
      return props[key];
    },
    readValueFromInstance: function(domElement, key) {
      var _a;
      if (isTransformProp(key)) {
        return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
      }
      key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
      return domElement.getAttribute(key);
    },
    scrapeMotionValuesFromProps,
    build: function(_element, renderState, latestValues, projection, layoutState, options, props) {
      var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
      buildSVGAttrs(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? buildLayoutProjectionTransform : void 0, isProjectionTranform ? buildLayoutProjectionTransformOrigin : void 0);
    },
    render: renderSVG
  }));
  var createDomVisualElement = function(Component, options) {
    return isSVGComponent(Component) ? svgVisualElement(options, { enableHardwareAcceleration: false }) : htmlVisualElement(options, { enableHardwareAcceleration: true });
  };
  var featureBundle = __assign(__assign(__assign(__assign({}, animations), gestureAnimations), drag), layoutAnimations);
  var motion = /* @__PURE__ */ createMotionProxy(function(Component, config) {
    return createDomMotionConfig(Component, config, featureBundle, createDomVisualElement);
  });
  function animate(from, to, transition) {
    if (transition === void 0) {
      transition = {};
    }
    var value = isMotionValue(from) ? from : motionValue(from);
    startAnimation("", value, to, transition);
    return {
      stop: function() {
        return value.stop();
      }
    };
  }
  function createCrossfader() {
    var progress2 = motionValue(1);
    var options = {
      lead: void 0,
      follow: void 0,
      crossfadeOpacity: false,
      preserveFollowOpacity: false
    };
    var prevOptions = __assign({}, options);
    var leadState = {};
    var followState = {};
    var isActive = false;
    var finalCrossfadeFrame = null;
    var prevUpdate = 0;
    function startCrossfadeAnimation(target, transition) {
      var lead = options.lead, follow = options.follow;
      isActive = true;
      finalCrossfadeFrame = null;
      var hasUpdated = false;
      var onUpdate = function() {
        hasUpdated = true;
        lead && lead.scheduleRender();
        follow && follow.scheduleRender();
      };
      var onComplete = function() {
        isActive = false;
        finalCrossfadeFrame = getFrameData().timestamp;
      };
      transition = transition && getValueTransition(transition, "crossfade");
      return animate(progress2, target, __assign(__assign({}, transition), { onUpdate, onComplete: function() {
        if (!hasUpdated) {
          progress2.set(target);
          sync.read(onComplete);
        } else {
          onComplete();
        }
        onUpdate();
      } }));
    }
    function updateCrossfade() {
      var _a, _b;
      var timestamp = getFrameData().timestamp;
      var lead = options.lead, follow = options.follow;
      if (timestamp === prevUpdate || !lead)
        return;
      prevUpdate = timestamp;
      var latestLeadValues = lead.getLatestValues();
      Object.assign(leadState, latestLeadValues);
      var latestFollowValues = follow ? follow.getLatestValues() : options.prevValues;
      Object.assign(followState, latestFollowValues);
      var p = progress2.get();
      var leadTargetOpacity = (_a = latestLeadValues.opacity) !== null && _a !== void 0 ? _a : 1;
      var followTargetOpacity = (_b = latestFollowValues === null || latestFollowValues === void 0 ? void 0 : latestFollowValues.opacity) !== null && _b !== void 0 ? _b : 1;
      if (options.crossfadeOpacity && follow) {
        leadState.opacity = mix(follow.isVisible !== false ? 0 : followTargetOpacity, leadTargetOpacity, easeCrossfadeIn(p));
        followState.opacity = options.preserveFollowOpacity ? followTargetOpacity : mix(followTargetOpacity, 0, easeCrossfadeOut(p));
      } else if (!follow) {
        leadState.opacity = mix(followTargetOpacity, leadTargetOpacity, p);
      }
      mixValues(leadState, followState, latestLeadValues, latestFollowValues || {}, Boolean(follow), p);
    }
    return {
      isActive: function() {
        return leadState && (isActive || getFrameData().timestamp === finalCrossfadeFrame);
      },
      fromLead: function(transition) {
        return startCrossfadeAnimation(0, transition);
      },
      toLead: function(transition) {
        var initialProgress = 0;
        if (!options.prevValues && !options.follow) {
          initialProgress = 1;
        } else if (prevOptions.lead === options.follow && prevOptions.follow === options.lead) {
          initialProgress = 1 - progress2.get();
        }
        progress2.set(initialProgress);
        return startCrossfadeAnimation(1, transition);
      },
      reset: function() {
        return progress2.set(1);
      },
      stop: function() {
        return progress2.stop();
      },
      getCrossfadeState: function(element) {
        updateCrossfade();
        if (element === options.lead) {
          return leadState;
        } else if (element === options.follow) {
          return followState;
        }
      },
      setOptions: function(newOptions) {
        prevOptions = options;
        options = newOptions;
        leadState = {};
        followState = {};
      },
      getLatestValues: function() {
        return leadState;
      }
    };
  }
  var easeCrossfadeIn = compress(0, 0.5, circOut);
  var easeCrossfadeOut = compress(0.5, 0.95, linear);
  function compress(min, max, easing) {
    return function(p) {
      if (p < min)
        return 0;
      if (p > max)
        return 1;
      return easing(progress(min, max, p));
    };
  }
  var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
  var numBorders = borders.length;
  function mixValues(leadState, followState, latestLeadValues, latestFollowValues, hasFollowElement, p) {
    for (var i = 0; i < numBorders; i++) {
      var borderLabel = "border" + borders[i] + "Radius";
      var followRadius = getRadius(latestFollowValues, borderLabel);
      var leadRadius = getRadius(latestLeadValues, borderLabel);
      if (followRadius === void 0 && leadRadius === void 0)
        continue;
      followRadius || (followRadius = 0);
      leadRadius || (leadRadius = 0);
      if (typeof followRadius === "number" && typeof leadRadius === "number") {
        var radius = Math.max(mix(followRadius, leadRadius, p), 0);
        leadState[borderLabel] = followState[borderLabel] = radius;
      }
    }
    if (latestFollowValues.rotate || latestLeadValues.rotate) {
      var rotate = mix(latestFollowValues.rotate || 0, latestLeadValues.rotate || 0, p);
      leadState.rotate = followState.rotate = rotate;
    }
    if (!hasFollowElement && latestLeadValues.backgroundColor && latestFollowValues.backgroundColor) {
      leadState.backgroundColor = followState.backgroundColor = mixColor(latestFollowValues.backgroundColor, latestLeadValues.backgroundColor)(p);
    }
  }
  function getRadius(values, radiusName) {
    var _a;
    return (_a = values[radiusName]) !== null && _a !== void 0 ? _a : values.borderRadius;
  }
  function layoutStack() {
    var stack = new Set();
    var state = { leadIsExiting: false };
    var prevState = __assign({}, state);
    var prevValues;
    var prevViewportBox;
    var prevDragCursor;
    var crossfader = createCrossfader();
    var needsCrossfadeAnimation = false;
    function getFollowViewportBox() {
      return state.follow ? state.follow.prevViewportBox : prevViewportBox;
    }
    function getFollowLayout() {
      var _a;
      return (_a = state.follow) === null || _a === void 0 ? void 0 : _a.getLayoutState().layout;
    }
    return {
      add: function(element) {
        element.setCrossfader(crossfader);
        stack.add(element);
        if (prevDragCursor)
          element.prevDragCursor = prevDragCursor;
        if (!state.lead)
          state.lead = element;
      },
      remove: function(element) {
        stack.delete(element);
      },
      getLead: function() {
        return state.lead;
      },
      updateSnapshot: function() {
        if (!state.lead)
          return;
        prevValues = crossfader.isActive() ? crossfader.getLatestValues() : state.lead.getLatestValues();
        prevViewportBox = state.lead.prevViewportBox;
        var dragControls = elementDragControls.get(state.lead);
        if (dragControls && dragControls.isDragging) {
          prevDragCursor = dragControls.cursorProgress;
        }
      },
      clearSnapshot: function() {
        prevDragCursor = prevViewportBox = void 0;
      },
      updateLeadAndFollow: function() {
        var _a;
        prevState = __assign({}, state);
        var lead;
        var follow;
        var order2 = Array.from(stack);
        for (var i = order2.length; i--; i >= 0) {
          var element = order2[i];
          if (lead)
            follow !== null && follow !== void 0 ? follow : follow = element;
          lead !== null && lead !== void 0 ? lead : lead = element;
          if (lead && follow)
            break;
        }
        state.lead = lead;
        state.follow = follow;
        state.leadIsExiting = ((_a = state.lead) === null || _a === void 0 ? void 0 : _a.presence) === Presence.Exiting;
        crossfader.setOptions({
          lead,
          follow,
          prevValues,
          crossfadeOpacity: (follow === null || follow === void 0 ? void 0 : follow.isPresenceRoot) || (lead === null || lead === void 0 ? void 0 : lead.isPresenceRoot)
        });
        if (state.lead !== prevState.follow && (prevState.lead !== state.lead || prevState.leadIsExiting !== state.leadIsExiting)) {
          needsCrossfadeAnimation = true;
        }
      },
      animate: function(child, shouldCrossfade) {
        var _a;
        if (shouldCrossfade === void 0) {
          shouldCrossfade = false;
        }
        if (child === state.lead) {
          if (shouldCrossfade) {
            child.pointTo(state.lead);
          } else {
            child.setVisibility(true);
          }
          var config = {};
          var prevParent = (_a = state.follow) === null || _a === void 0 ? void 0 : _a.getProjectionParent();
          if (prevParent) {
            config.prevParent = prevParent;
          }
          if (child.presence === Presence.Entering) {
            config.originBox = getFollowViewportBox();
          } else if (child.presence === Presence.Exiting) {
            config.targetBox = getFollowLayout();
          }
          if (needsCrossfadeAnimation) {
            needsCrossfadeAnimation = false;
            var transition = child.getDefaultTransition();
            child.presence === Presence.Entering ? crossfader.toLead(transition) : crossfader.fromLead(transition);
          }
          child.notifyLayoutReady(config);
        } else {
          if (shouldCrossfade) {
            state.lead && child.pointTo(state.lead);
          } else {
            child.setVisibility(false);
          }
        }
      }
    };
  }
  function resetRotate(child) {
    var hasRotate = false;
    var resetValues = {};
    for (var i = 0; i < transformAxes.length; i++) {
      var axis = transformAxes[i];
      var key = "rotate" + axis;
      if (!child.hasValue(key) || child.getStaticValue(key) === 0)
        continue;
      hasRotate = true;
      resetValues[key] = child.getStaticValue(key);
      child.setStaticValue(key, 0);
    }
    if (!hasRotate)
      return;
    child.syncRender();
    for (var key in resetValues) {
      child.setStaticValue(key, resetValues[key]);
    }
    child.scheduleRender();
  }
  var AnimateSharedLayout = function(_super) {
    __extends(AnimateSharedLayout2, _super);
    function AnimateSharedLayout2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.children = new Set();
      _this.stacks = new Map();
      _this.hasMounted = false;
      _this.updateScheduled = false;
      _this.renderScheduled = false;
      _this.syncContext = __assign(__assign({}, createBatcher()), { syncUpdate: function(force) {
        return _this.scheduleUpdate(force);
      }, forceUpdate: function() {
        _this.syncContext = __assign({}, _this.syncContext);
        _this.scheduleUpdate(true);
      }, register: function(child) {
        return _this.addChild(child);
      }, remove: function(child) {
        return _this.removeChild(child);
      } });
      return _this;
    }
    AnimateSharedLayout2.prototype.componentDidMount = function() {
      this.hasMounted = true;
    };
    AnimateSharedLayout2.prototype.componentDidUpdate = function() {
      this.startLayoutAnimation();
    };
    AnimateSharedLayout2.prototype.shouldComponentUpdate = function() {
      this.renderScheduled = true;
      return true;
    };
    AnimateSharedLayout2.prototype.startLayoutAnimation = function() {
      var _this = this;
      this.renderScheduled = this.updateScheduled = false;
      var type = this.props.type;
      this.children.forEach(function(child) {
        if (!child.isPresent) {
          child.presence = Presence.Exiting;
        } else if (child.presence !== Presence.Entering) {
          child.presence = child.presence === Presence.Exiting ? Presence.Entering : Presence.Present;
        }
      });
      this.updateStacks();
      var handler = {
        layoutReady: function(child) {
          if (child.getLayoutId() !== void 0) {
            var stack = _this.getStack(child);
            stack.animate(child, type === "crossfade");
          } else {
            child.notifyLayoutReady();
          }
        },
        parent: this.context.visualElement
      };
      this.children.forEach(function(child) {
        return _this.syncContext.add(child);
      });
      this.syncContext.flush(handler);
      this.stacks.forEach(function(stack) {
        return stack.clearSnapshot();
      });
    };
    AnimateSharedLayout2.prototype.updateStacks = function() {
      this.stacks.forEach(function(stack) {
        return stack.updateLeadAndFollow();
      });
    };
    AnimateSharedLayout2.prototype.scheduleUpdate = function(force) {
      if (force === void 0) {
        force = false;
      }
      if (!(force || !this.updateScheduled))
        return;
      this.updateScheduled = true;
      this.children.forEach(function(child) {
        resetRotate(child);
        if (child.shouldResetTransform())
          child.resetTransform();
      });
      this.children.forEach(snapshotViewportBox);
      this.stacks.forEach(function(stack) {
        return stack.updateSnapshot();
      });
      if (force || !this.renderScheduled) {
        this.renderScheduled = true;
        this.forceUpdate();
      }
    };
    AnimateSharedLayout2.prototype.addChild = function(child) {
      this.children.add(child);
      this.addToStack(child);
      child.presence = this.hasMounted ? Presence.Entering : Presence.Present;
    };
    AnimateSharedLayout2.prototype.removeChild = function(child) {
      this.scheduleUpdate();
      this.children.delete(child);
      this.removeFromStack(child);
    };
    AnimateSharedLayout2.prototype.addToStack = function(child) {
      var stack = this.getStack(child);
      stack === null || stack === void 0 ? void 0 : stack.add(child);
    };
    AnimateSharedLayout2.prototype.removeFromStack = function(child) {
      var stack = this.getStack(child);
      stack === null || stack === void 0 ? void 0 : stack.remove(child);
    };
    AnimateSharedLayout2.prototype.getStack = function(child) {
      var id = child.getLayoutId();
      if (id === void 0)
        return;
      !this.stacks.has(id) && this.stacks.set(id, layoutStack());
      return this.stacks.get(id);
    };
    AnimateSharedLayout2.prototype.render = function() {
      return React.createElement(SharedLayoutContext.Provider, { value: this.syncContext }, this.props.children);
    };
    AnimateSharedLayout2.contextType = MotionContext;
    return AnimateSharedLayout2;
  }(React.Component);
  function random(len = 32) {
    var seed = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
    var str = "";
    for (var i = 0; i < len; i++) {
      str += seed.charAt(Math.floor(Math.random() * seed.length));
    }
    return str;
  }
  const Controls = "_Controls_59gxn_13";
  const Indicator = "_Indicator_59gxn_20";
  const Icon = "_Icon_59gxn_28";
  const Name = "_Name_59gxn_47";
  const Explain = "_Explain_59gxn_91";
  const List = "_List_59gxn_102";
  const Compare = "_Compare_59gxn_113";
  const Item = "_Item_59gxn_118";
  const Qeustion = "_Qeustion_59gxn_136";
  const Target = "_Target_59gxn_145";
  const Operation = "_Operation_59gxn_154";
  var styles = {
    "Algorithm-Animation": "_Algorithm-Animation_59gxn_13",
    Controls,
    Indicator,
    Icon,
    Name,
    "Play-Box": "_Play-Box_59gxn_61",
    "Merge-Sort": "_Merge-Sort_59gxn_91",
    Explain,
    "Binary-Search": "_Binary-Search_59gxn_92",
    "Quick-Sort": "_Quick-Sort_59gxn_93",
    List,
    Compare,
    Item,
    "Item-Disabled": "_Item-Disabled_59gxn_127",
    Qeustion,
    Target,
    Operation
  };
  const Widget$4 = ({
    prepared,
    start,
    pause,
    next,
    previous,
    running,
    step,
    total
  }) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: styles.Controls
    }, /* @__PURE__ */ React.createElement("div", {
      className: styles.Indicator
    }, step + 1, "/", total), /* @__PURE__ */ React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: styles.Icon,
      viewBox: "0 0 24 24",
      onClick: () => {
        if (step > 0 && !running) {
          previous();
        }
      },
      fill: step > 0 && !running ? "#333" : "#999"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1zm3.66 6.82l5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.57.4-.57 1.24 0 1.64z"
    })), !running ? /* @__PURE__ */ React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: styles.Icon,
      onClick: () => {
        if (!prepared) {
          return;
        }
        start();
      },
      viewBox: "0 0 24 24",
      fill: prepared ? "#333" : "#999"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"
    })) : /* @__PURE__ */ React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: styles.Icon,
      viewBox: "0 0 24 24",
      onClick: () => {
        if (!prepared) {
          return;
        }
        pause();
      },
      fill: prepared ? "#333" : "#999"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"
    })), /* @__PURE__ */ React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: styles.Icon,
      viewBox: "0 0 24 24",
      onClick: () => {
        if (step < total - 1 && !running) {
          next();
        }
      },
      fill: step < total - 1 && !running ? "#333" : "#999"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M7.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L7.58 7.11C6.91 6.65 6 7.12 6 7.93v8.14c0 .81.91 1.28 1.58.82zM16 7v10c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1z"
    })));
  };
  const MEDIUM_INITIAL$1 = {};
  const STEP_INITIAL$2 = 0;
  const STAGE_INITIAL$2 = "Initial";
  const STAGE_SHOW_LIST$2 = "ShowList";
  const STAGE_CHOOSE_MEDIUM$1 = "ChooseMedium";
  const STAGE_COMPARE = "Compare";
  const STAGE_FOUNND = "Found";
  const STAGE_NOT_FOUNND = "NotFound";
  const spring$2 = {
    type: "spring",
    stiffness: 500,
    damping: 100
  };
  const Widget$3 = ({ data, onExecuted }) => {
    const [medium, setMedium] = React.useState(MEDIUM_INITIAL$1);
    const [array, setArray] = React.useState([]);
    const [stage, setStage] = React.useState(STAGE_INITIAL$2);
    const [target, setTarget2] = React.useState();
    const [running, setRunning] = React.useState(false);
    const [step, setStep] = React.useState(STEP_INITIAL$2);
    const [prepared, setPrepared] = React.useState(false);
    const stateList = React.useRef([]);
    const isRunning = React.useRef(false);
    React.useEffect(() => {
      isRunning.current = running;
    }, [running]);
    const pushState = React.useCallback((array2, medium2) => {
      stateList.current.push({
        array: array2,
        stage: STAGE_SHOW_LIST$2,
        time: 3e3
      });
      stateList.current.push({
        array: array2,
        medium: medium2,
        stage: STAGE_CHOOSE_MEDIUM$1,
        time: 3e3
      });
      stateList.current.push({
        array: array2,
        medium: medium2,
        stage: STAGE_COMPARE,
        time: 8e3
      });
    }, []);
    const binarySearch = React.useCallback((array2, target2) => {
      var mid = -1;
      var left = 0;
      var right = array2.length - 1;
      var found = false;
      const newArray = Array.from(array2);
      while (left <= right) {
        mid = Math.floor((left + right) / 2);
        pushState(newArray.slice(left, right + 1), newArray[mid]);
        if (target2 > newArray[mid].value) {
          left = mid + 1;
        } else if (target2 < newArray[mid].value) {
          right = mid - 1;
        } else {
          found = true;
          break;
        }
      }
      if (found) {
        stateList.current.push({
          medium: newArray[mid],
          array: array2,
          stage: STAGE_FOUNND,
          time: 1e4
        });
      } else {
        stateList.current.push({
          array: array2,
          stage: STAGE_NOT_FOUNND,
          time: 1e4
        });
      }
    }, [pushState]);
    const resetState = React.useCallback(() => {
      setStep(STEP_INITIAL$2);
      setRunning(false);
      setStage(STAGE_INITIAL$2);
      setMedium(MEDIUM_INITIAL$1);
      setPrepared(false);
      try {
        if (Array.isArray(data.array) && typeof data.target == "number" && isFinite(data.target)) {
          var arr = data.array.map((item, index) => {
            if (typeof item != "number" || !isFinite(item)) {
              throw new Error();
            }
            return { value: item, layoutId: random(16) };
          });
          stateList.current = [];
          setArray(arr);
          setTarget2(data.target);
          binarySearch(arr, data.target);
          setPrepared(true);
        }
      } catch (e) {
      }
    }, [data, binarySearch]);
    React.useEffect(() => {
      resetState();
    }, [data, resetState]);
    const runLoop = React.useCallback((step2) => {
      if (step2 >= stateList.current.length) {
        resetState();
        return;
      }
      setStage(stateList.current[step2].stage);
      setMedium(stateList.current[step2].medium);
      setArray(stateList.current[step2].array);
      setTimeout(() => {
        if (isRunning.current) {
          setStep(step2 + 1);
          runLoop(step2 + 1);
        }
      }, stateList.current[step2].time);
    }, [resetState]);
    const start = React.useCallback(() => {
      if (onExecuted) {
        onExecuted();
      }
      if (step >= stateList.current.length) {
        return;
      }
      setRunning(true);
      runLoop(step);
    }, [runLoop, onExecuted, step]);
    const pause = React.useCallback(() => {
      setRunning(false);
    }, []);
    const previous = React.useCallback(() => {
      runLoop(step - 1);
      setStep((previous2) => previous2 - 1);
    }, [runLoop]);
    const next = React.useCallback(() => {
      runLoop(step + 1);
      setStep((previous2) => previous2 + 1);
    }, [runLoop]);
    const renderItem = (item) => {
      return /* @__PURE__ */ React.createElement("li", {
        key: item.layoutId
      }, medium && item.layoutId === medium.layoutId && stage === STAGE_CHOOSE_MEDIUM$1 ? /* @__PURE__ */ React.createElement(motion.div, {
        layoutId: item.layoutId,
        animate: { scale: 1.2 },
        transition: {
          repeatType: "reverse",
          repeat: Infinity,
          duration: 0.5
        },
        className: styles.Item
      }, item.value) : medium && item.layoutId === medium.layoutId && stage === STAGE_FOUNND ? /* @__PURE__ */ React.createElement(motion.div, {
        animate: { scale: 1.2 },
        transition: spring$2,
        layoutId: item.layoutId,
        className: styles.Item
      }, item.value) : /* @__PURE__ */ React.createElement(motion.div, {
        transition: spring$2,
        layoutId: item.layoutId,
        className: styles.Item
      }, item.value));
    };
    const renderContent = () => {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ul", {
        className: styles.List
      }, array.map((item, index) => {
        return renderItem(item);
      })), /* @__PURE__ */ React.createElement("div", {
        className: styles.Compare
      }, stage === STAGE_COMPARE ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(motion.div, {
        layoutId: medium.layoutId,
        className: styles.Item
      }, medium.value), /* @__PURE__ */ React.createElement(motion.div, {
        animate: { opacity: [0, 1] },
        transition: { duration: 0.5, delay: 0.5 },
        className: styles.Operation
      }, medium.value > target ? ">" : medium.value < target ? "<" : "=")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
        className: styles.Qeustion
      }, "?"), /* @__PURE__ */ React.createElement("div", {
        className: styles.Operation
      })), /* @__PURE__ */ React.createElement("div", {
        className: styles.Target
      }, target)));
    };
    const renderExplain = React.useCallback(() => {
      switch (stage) {
        case STAGE_SHOW_LIST$2:
          return `\u73B0\u5728\uFF0C\u5F85\u67E5\u627E\u7684\u6570\u7EC4\u662F ${JSON.stringify(array.map((item) => item.value))}`;
        case STAGE_CHOOSE_MEDIUM$1:
          return `\u9009\u53D6\u7684\u4E2D\u95F4\u503C\u662F ${medium ? medium.value : ""}`;
        case STAGE_COMPARE:
          return target > medium.value ? `\u76EE\u6807\u503C ${target} \u5927\u4E8E\u4E2D\u95F4\u503C ${medium.value}\uFF0C \u5728\u53F3\u8FB9\u7684\u5B50\u6570\u7EC4\u7EE7\u7EED\u67E5\u627E` : target < medium.value ? `\u76EE\u6807\u503C ${target} \u5C0F\u4E8E\u4E2D\u95F4\u503C ${medium.value}\uFF0C \u5728\u5DE6\u8FB9\u7684\u5B50\u6570\u7EC4\u7EE7\u7EED\u67E5\u627E` : `\u76EE\u6807\u503C ${target} \u7B49\u4E8E\u4E2D\u95F4\u503C ${medium.value}`;
        case STAGE_FOUNND:
          return "\u5728\u6570\u636E\u4E2D\u67E5\u627E\u5230\u76EE\u6807\u503C";
        case STAGE_NOT_FOUNND:
          return "\u5728\u6570\u636E\u4E2D\u6CA1\u6709\u627E\u5230\u76EE\u6807\u503C";
        default:
          return "\u7B49\u5F85\u5F00\u59CB";
      }
    }, [stage, medium, target, array]);
    return /* @__PURE__ */ React.createElement("div", {
      className: styles["Binary-Search"]
    }, /* @__PURE__ */ React.createElement("div", {
      className: styles.Explain
    }, renderExplain()), running && (stage === STAGE_SHOW_LIST$2 || stage === STAGE_CHOOSE_MEDIUM$1 || stage === STAGE_COMPARE) ? /* @__PURE__ */ React.createElement(AnimateSharedLayout, null, renderContent()) : renderContent(), /* @__PURE__ */ React.createElement(Widget$4, {
      prepared,
      start,
      running,
      pause,
      previous,
      next,
      step,
      total: stateList.current.length
    }));
  };
  const MEDIUM_INITIAL = -1;
  const STEP_INITIAL$1 = 0;
  const STAGE_INITIAL$1 = "Initial";
  const STAGE_SHOW_LIST$1 = "ShowList";
  const STAGE_CHOOSE_MEDIUM = "ChooseMedium";
  const STAGE_DIVIDE = "Divide";
  const STAGE_SORT_LEFT$1 = "SortLeft";
  const STAGE_SORT_RIGHT$1 = "SortRight";
  const STAGE_COMPOSE$1 = "Compose";
  const spring$1 = {
    type: "spring",
    stiffness: 500,
    damping: 100
  };
  const Widget$2 = ({ data, onExecuted }) => {
    const [medium, setMedium] = React.useState(MEDIUM_INITIAL);
    const [running, setRunning] = React.useState(false);
    const [array, setArray] = React.useState([]);
    const [stage, setStage] = React.useState(STAGE_INITIAL$1);
    const [step, setStep] = React.useState(STEP_INITIAL$1);
    const [prepared, setPrepared] = React.useState(false);
    const stateList = React.useRef([]);
    const isRunning = React.useRef(false);
    React.useEffect(() => {
      isRunning.current = running;
    }, [running]);
    const pushState = React.useCallback(({ array: array2, left, right, medium: medium2, time = 3e3, stage: stage2 }) => {
      array2 = JSON.parse(JSON.stringify(array2));
      for (var i = 0; i < array2.length; i++) {
        if (i >= left && i <= right) {
          array2[i] = __spreadProps(__spreadValues({}, array2[i]), { enabled: true });
        } else {
          array2[i] = __spreadProps(__spreadValues({}, array2[i]), { enabled: false });
        }
      }
      stateList.current.push({
        array: array2,
        medium: medium2,
        time,
        stage: stage2
      });
    }, []);
    const quickSort = React.useCallback((array2, left, right) => {
      if (left >= right) {
        return;
      }
      const medium2 = array2[left];
      pushState({
        array: array2,
        left,
        right,
        stage: STAGE_SHOW_LIST$1
      });
      pushState({
        array: array2,
        left,
        right,
        medium: medium2,
        stage: STAGE_CHOOSE_MEDIUM
      });
      var i = left;
      var j = right;
      while (i < j) {
        while (i < j && array2[j].value >= medium2.value) {
          j--;
        }
        array2[i] = array2[j];
        while (i < j && array2[i].value <= medium2.value) {
          i++;
        }
        array2[j] = array2[i];
      }
      array2[i] = medium2;
      pushState({
        array: array2,
        left,
        right,
        medium: medium2,
        time: 5e3,
        stage: STAGE_DIVIDE
      });
      if (left < i - 1) {
        pushState({
          array: array2,
          left,
          right: i - 1,
          stage: STAGE_SORT_LEFT$1
        });
      }
      quickSort(array2, left, i - 1);
      if (i + 1 < right) {
        pushState({
          array: array2,
          left: i + 1,
          right,
          stage: STAGE_SORT_RIGHT$1
        });
        quickSort(array2, i + 1, right);
      }
      pushState({
        array: array2,
        left,
        right,
        time: left === 0 && right === array2.length - 1 ? 1e4 : 5e3,
        stage: STAGE_COMPOSE$1
      });
    }, [pushState]);
    const resetState = React.useCallback(() => {
      setStep(STEP_INITIAL$1);
      setRunning(false);
      setStage(STAGE_INITIAL$1);
      setMedium(MEDIUM_INITIAL);
      setPrepared(false);
      try {
        if (Array.isArray(data)) {
          var arr = data.map((item, index) => {
            if (typeof item != "number" || !isFinite(item)) {
              throw new Error();
            }
            return { value: item, layoutId: random(16), enabled: true };
          });
          setArray(arr);
          stateList.current = [];
          quickSort(Array.from(arr), 0, data.length - 1);
          setPrepared(true);
        }
      } catch (e) {
      }
    }, [data, quickSort]);
    React.useEffect(() => {
      resetState();
    }, [data, resetState]);
    const runLoop = React.useCallback((step2) => {
      if (step2 >= stateList.current.length) {
        resetState();
        return;
      }
      setStage(stateList.current[step2].stage);
      setMedium(stateList.current[step2].medium);
      setArray(stateList.current[step2].array);
      setTimeout(() => {
        if (isRunning.current) {
          setStep(step2 + 1);
          runLoop(step2 + 1);
        }
      }, stateList.current[step2].time);
    }, [resetState]);
    const start = React.useCallback(() => {
      if (onExecuted) {
        onExecuted();
      }
      if (step >= stateList.current.length) {
        return;
      }
      setRunning(true);
      runLoop(step);
    }, [runLoop, onExecuted, step]);
    const pause = React.useCallback(() => {
      setRunning(false);
    }, []);
    const previous = React.useCallback(() => {
      runLoop(step - 1);
      setStep((previous2) => previous2 - 1);
    }, [runLoop]);
    const next = React.useCallback(() => {
      runLoop(step + 1);
      setStep((previous2) => previous2 + 1);
    }, [runLoop]);
    const renderItem = (item) => {
      return /* @__PURE__ */ React.createElement("li", {
        key: item.layoutId
      }, medium && item.layoutId === medium.layoutId && stage === STAGE_CHOOSE_MEDIUM ? /* @__PURE__ */ React.createElement(motion.div, {
        layoutId: item.layoutId,
        animate: { scale: 1.2 },
        transition: {
          repeatType: "reverse",
          repeat: Infinity,
          duration: 0.5
        },
        className: item.enabled ? styles.Item : styles["Item-Disabled"]
      }, item.value) : medium && item.layoutId === medium.layoutId && stage === STAGE_DIVIDE ? /* @__PURE__ */ React.createElement(motion.div, {
        layoutId: item.layoutId,
        animate: { scale: 1.2 },
        className: item.enabled ? styles.Item : styles["Item-Disabled"]
      }, item.value) : /* @__PURE__ */ React.createElement(motion.div, {
        layoutId: item.layoutId,
        transition: spring$1,
        className: item.enabled ? styles.Item : styles["Item-Disabled"]
      }, item.value));
    };
    const renderContent = () => {
      return /* @__PURE__ */ React.createElement("ul", {
        className: styles.List
      }, array.map((item) => {
        return renderItem(item);
      }));
    };
    const renderExplain = React.useCallback(() => {
      switch (stage) {
        case STAGE_SHOW_LIST$1:
          return `\u73B0\u5728\uFF0C\u5F85\u6392\u5E8F\u7684\u6570\u7EC4\u662F ${JSON.stringify(array.filter((item) => item.enabled).map((item) => item.value))}`;
        case STAGE_CHOOSE_MEDIUM:
          return `\u9009\u62E9\u7684\u57FA\u51C6\u5143\u7D20\u662F ${medium && medium.value}`;
        case STAGE_DIVIDE:
          return "\u5C06\u5927\u4E8E\u57FA\u51C6\u7684\u5143\u7D20\u79FB\u81F3\u53F3\u8FB9\uFF0C\u5C0F\u4E8E\u57FA\u51C6\u7684\u5143\u7D20\u79FB\u81F3\u5DE6\u8FB9";
        case STAGE_SORT_LEFT$1:
          return "\u7EE7\u7EED\u5BF9\u57FA\u51C6\u5143\u7D20\u5DE6\u8FB9\u7684\u5B50\u6570\u7EC4\u6392\u5E8F";
        case STAGE_SORT_RIGHT$1:
          return "\u7EE7\u7EED\u5BF9\u57FA\u51C6\u5143\u7D20\u53F3\u8FB9\u7684\u5B50\u6570\u7EC4\u6392\u5E8F";
        case STAGE_COMPOSE$1:
          return `\u5B8C\u6210\u6570\u7EC4 ${JSON.stringify(array.filter((item) => item.enabled).map((item) => item.value))} \u7684\u6392\u5E8F`;
        default:
          return "\u7B49\u5F85\u5F00\u59CB";
      }
    }, [stage, medium, array]);
    return /* @__PURE__ */ React.createElement("div", {
      className: styles["Quick-Sort"]
    }, /* @__PURE__ */ React.createElement("div", {
      className: styles.Explain
    }, renderExplain()), /* @__PURE__ */ React.createElement(AnimateSharedLayout, null, renderContent()), /* @__PURE__ */ React.createElement(Widget$4, {
      prepared,
      start,
      running,
      pause,
      previous,
      next,
      step,
      total: stateList.current.length
    }));
  };
  const STEP_INITIAL = 0;
  const STAGE_INITIAL = "Initial";
  const STAGE_SHOW_LIST = "ShowList";
  const STAGE_SORT_LEFT = "SortLeft";
  const STAGE_SORT_RIGHT = "SortRight";
  const STAGE_COMPOSE = "Compose";
  const STAGE_FINISH = "Finish";
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 100
  };
  const Widget$1 = ({ data, onExecuted }) => {
    const [running, setRunning] = React.useState(false);
    const [array, setArray] = React.useState([]);
    const [stage, setStage] = React.useState(STAGE_INITIAL);
    const [step, setStep] = React.useState(STEP_INITIAL);
    const [prepared, setPrepared] = React.useState(false);
    const stateList = React.useRef([]);
    const isRunning = React.useRef(false);
    React.useEffect(() => {
      isRunning.current = running;
    }, [running]);
    const pushState = React.useCallback(({ array: array2, left, right, time = 3e3, stage: stage2 }) => {
      array2 = JSON.parse(JSON.stringify(array2));
      for (var i = 0; i < array2.length; i++) {
        if (i >= left && i <= right) {
          array2[i] = __spreadProps(__spreadValues({}, array2[i]), { enabled: true });
        } else {
          array2[i] = __spreadProps(__spreadValues({}, array2[i]), { enabled: false });
        }
      }
      stateList.current.push({
        array: array2,
        time,
        stage: stage2
      });
    }, []);
    const merge = React.useCallback((array2, left, mid, right) => {
      const sortedArray = [];
      var i = left;
      var j = mid + 1;
      while (i <= mid && j <= right) {
        if (array2[i].value <= array2[j].value) {
          sortedArray.push(array2[i++]);
        } else {
          sortedArray.push(array2[j++]);
        }
      }
      while (i <= mid) {
        sortedArray.push(array2[i++]);
      }
      while (j <= right) {
        sortedArray.push(array2[j++]);
      }
      for (i = left; i <= right; i++) {
        array2[i] = sortedArray[i - left];
      }
    }, []);
    const mergeSort = React.useCallback((array2, left, right) => {
      if (left === right) {
        return;
      }
      pushState({
        array: array2,
        left,
        right,
        stage: STAGE_SHOW_LIST
      });
      const mid = Math.floor((left + right) / 2);
      pushState({
        array: array2,
        left,
        right: mid,
        stage: STAGE_SORT_LEFT
      });
      mergeSort(array2, left, mid);
      pushState({
        array: array2,
        left: mid + 1,
        right,
        stage: STAGE_SORT_RIGHT
      });
      mergeSort(array2, mid + 1, right);
      pushState({
        array: array2,
        left,
        right,
        stage: STAGE_COMPOSE
      });
      merge(array2, left, mid, right);
      pushState({
        array: array2,
        left,
        right,
        stage: STAGE_FINISH
      });
    }, [pushState, merge]);
    const resetState = React.useCallback(() => {
      setStep(STEP_INITIAL);
      setRunning(false);
      setStage(STAGE_INITIAL);
      setPrepared(false);
      try {
        if (Array.isArray(data)) {
          var arr = data.map((item, index) => {
            if (typeof item != "number" || !isFinite(item)) {
              throw new Error();
            }
            return { value: item, layoutId: random(16), enabled: true };
          });
          setArray(arr);
          stateList.current = [];
          mergeSort(Array.from(arr), 0, data.length - 1);
          setPrepared(true);
        }
      } catch (e) {
      }
    }, [data, mergeSort]);
    React.useEffect(() => {
      resetState();
    }, [data, resetState]);
    const runLoop = React.useCallback((step2) => {
      if (step2 >= stateList.current.length) {
        resetState();
        return;
      }
      setStage(stateList.current[step2].stage);
      setArray(stateList.current[step2].array);
      setTimeout(() => {
        if (isRunning.current) {
          setStep(step2 + 1);
          runLoop(step2 + 1);
        }
      }, stateList.current[step2].time);
    }, [resetState]);
    const start = React.useCallback(() => {
      if (onExecuted) {
        onExecuted();
      }
      if (step >= stateList.current.length) {
        return;
      }
      setRunning(true);
      runLoop(step);
    }, [runLoop, onExecuted, step]);
    const pause = React.useCallback(() => {
      setRunning(false);
    }, []);
    const previous = React.useCallback(() => {
      runLoop(step - 1);
      setStep((previous2) => previous2 - 1);
    }, [runLoop]);
    const next = React.useCallback(() => {
      runLoop(step + 1);
      setStep((previous2) => previous2 + 1);
    }, [runLoop]);
    const renderItem = (item) => {
      return /* @__PURE__ */ React.createElement("li", {
        key: item.layoutId
      }, /* @__PURE__ */ React.createElement(motion.div, {
        layoutId: item.layoutId,
        transition: spring,
        className: item.enabled ? styles.Item : styles["Item-Disabled"]
      }, item.value));
    };
    const renderContent = () => {
      return /* @__PURE__ */ React.createElement("ul", {
        className: styles.List
      }, array.map((item) => {
        return renderItem(item);
      }));
    };
    const renderExplain = React.useCallback(() => {
      switch (stage) {
        case STAGE_SHOW_LIST:
          return `\u73B0\u5728\uFF0C\u5F85\u6392\u5E8F\u7684\u6570\u7EC4\u662F ${JSON.stringify(array.filter((item) => item.enabled).map((item) => item.value))}`;
        case STAGE_SORT_LEFT:
          return "\u5148\u5BF9\u6570\u7EC4\u5DE6\u8FB9\u7684\u5B50\u6570\u7EC4\u8FDB\u884C\u6392\u5E8F";
        case STAGE_SORT_RIGHT:
          return "\u7136\u540E\u5BF9\u6570\u7EC4\u53F3\u8FB9\u5B50\u6570\u7EC4\u8FDB\u884C\u6392\u5E8F";
        case STAGE_COMPOSE:
          return `\u5408\u5E76\u5DE6\u53F3\u5DF2\u6392\u5E8F\u7684\u5B50\u6570\u7EC4 ${JSON.stringify(array.filter((item) => item.enabled).map((item) => item.value))}`;
        case STAGE_FINISH:
          return `\u5B8C\u6210\u5DE6\u53F3\u5B50\u6570\u7EC4\u5408\u5E76 ${JSON.stringify(array.filter((item) => item.enabled).map((item) => item.value))}`;
        default:
          return "\u7B49\u5F85\u5F00\u59CB";
      }
    }, [stage, array]);
    return /* @__PURE__ */ React.createElement("div", {
      className: styles["Merge-Sort"]
    }, /* @__PURE__ */ React.createElement("div", {
      className: styles.Explain
    }, renderExplain()), /* @__PURE__ */ React.createElement(AnimateSharedLayout, null, renderContent()), /* @__PURE__ */ React.createElement(Widget$4, {
      prepared,
      start,
      running,
      pause,
      previous,
      next,
      step,
      total: stateList.current.length
    }));
  };
  const Widget = ({ options }) => {
    const { input, onExecuted } = options;
    const [name, setName] = React.useState();
    const [data, setData] = React.useState();
    React.useEffect(() => {
      try {
        const inputData = JSON.parse(input);
        if (!!inputData.name) {
          setName(inputData.name);
        }
        if (!!inputData.data) {
          setData(inputData.data);
        }
      } catch (e) {
      }
    }, [input]);
    const renderPlayBox = React.useCallback(() => {
      switch (name) {
        case ALGORITHM_BINARY_SEARCH:
          return /* @__PURE__ */ React.createElement(Widget$3, {
            data,
            onExecuted
          });
        case ALGORITHM_QUICK_SORT:
          return /* @__PURE__ */ React.createElement(Widget$2, {
            data,
            onExecuted
          });
        case ALGORITHM_MERGE_SORT:
          return /* @__PURE__ */ React.createElement(Widget$1, {
            data,
            onExecuted
          });
        default: {
          console.log("unsupport");
        }
      }
    }, [name, data, onExecuted]);
    return /* @__PURE__ */ React.createElement("div", {
      className: styles["Algorithm-Animation"]
    }, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("span", {
      className: styles.Name
    }, NAME[name])), /* @__PURE__ */ React.createElement("div", {
      className: styles["Play-Box"]
    }, renderPlayBox()));
  };
  return Widget;
});
