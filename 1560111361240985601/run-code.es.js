var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var htmlReactParser = { exports: {} };
var react = { exports: {} };
var react_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i2 = 0; i2 < 10; i2++) {
      test2["_" + String.fromCharCode(i2)] = i2;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s2 = 1; s2 < arguments.length; s2++) {
    from = Object(arguments[s2]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i2 = 0; i2 < symbols.length; i2++) {
        if (propIsEnumerable.call(from, symbols[i2])) {
          to[symbols[i2]] = from[symbols[i2]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = objectAssign, n = 60103, p$3 = 60106;
react_production_min.Fragment = 60107;
react_production_min.StrictMode = 60108;
react_production_min.Profiler = 60114;
var q = 60109, r$3 = 60110, t$2 = 60112;
react_production_min.Suspense = 60113;
var u$3 = 60115, v$1 = 60116;
if ("function" === typeof Symbol && Symbol.for) {
  var w$1 = Symbol.for;
  n = w$1("react.element");
  p$3 = w$1("react.portal");
  react_production_min.Fragment = w$1("react.fragment");
  react_production_min.StrictMode = w$1("react.strict_mode");
  react_production_min.Profiler = w$1("react.profiler");
  q = w$1("react.provider");
  r$3 = w$1("react.context");
  t$2 = w$1("react.forward_ref");
  react_production_min.Suspense = w$1("react.suspense");
  u$3 = w$1("react.memo");
  v$1 = w$1("react.lazy");
}
var x$2 = "function" === typeof Symbol && Symbol.iterator;
function y$2(a2) {
  if (null === a2 || "object" !== typeof a2)
    return null;
  a2 = x$2 && a2[x$2] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
function z(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c = 1; c < arguments.length; c++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var A = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, B = {};
function C$1(a2, b2, c) {
  this.props = a2;
  this.context = b2;
  this.refs = B;
  this.updater = c || A;
}
C$1.prototype.isReactComponent = {};
C$1.prototype.setState = function(a2, b2) {
  if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2)
    throw Error(z(85));
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
C$1.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function D() {
}
D.prototype = C$1.prototype;
function E(a2, b2, c) {
  this.props = a2;
  this.context = b2;
  this.refs = B;
  this.updater = c || A;
}
var F = E.prototype = new D();
F.constructor = E;
l$1(F, C$1.prototype);
F.isPureReactComponent = true;
var G = { current: null }, H$2 = Object.prototype.hasOwnProperty, I$1 = { key: true, ref: true, __self: true, __source: true };
function J(a2, b2, c) {
  var e2, d = {}, k = null, h2 = null;
  if (null != b2)
    for (e2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k = "" + b2.key), b2)
      H$2.call(b2, e2) && !I$1.hasOwnProperty(e2) && (d[e2] = b2[e2]);
  var g2 = arguments.length - 2;
  if (1 === g2)
    d.children = c;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    d.children = f2;
  }
  if (a2 && a2.defaultProps)
    for (e2 in g2 = a2.defaultProps, g2)
      void 0 === d[e2] && (d[e2] = g2[e2]);
  return { $$typeof: n, type: a2, key: k, ref: h2, props: d, _owner: G.current };
}
function K(a2, b2) {
  return { $$typeof: n, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function L$2(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === n;
}
function escape(a2) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var M = /\/+/g;
function N$1(a2, b2) {
  return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b2.toString(36);
}
function O(a2, b2, c, e2, d) {
  var k = typeof a2;
  if ("undefined" === k || "boolean" === k)
    a2 = null;
  var h2 = false;
  if (null === a2)
    h2 = true;
  else
    switch (k) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case n:
          case p$3:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a2, d = d(h2), a2 = "" === e2 ? "." + N$1(h2, 0) : e2, Array.isArray(d) ? (c = "", null != a2 && (c = a2.replace(M, "$&/") + "/"), O(d, b2, c, "", function(a3) {
      return a3;
    })) : null != d && (L$2(d) && (d = K(d, c + (!d.key || h2 && h2.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a2)), b2.push(d)), 1;
  h2 = 0;
  e2 = "" === e2 ? "." : e2 + ":";
  if (Array.isArray(a2))
    for (var g2 = 0; g2 < a2.length; g2++) {
      k = a2[g2];
      var f2 = e2 + N$1(k, g2);
      h2 += O(k, b2, c, f2, d);
    }
  else if (f2 = y$2(a2), "function" === typeof f2)
    for (a2 = f2.call(a2), g2 = 0; !(k = a2.next()).done; )
      k = k.value, f2 = e2 + N$1(k, g2++), h2 += O(k, b2, c, f2, d);
  else if ("object" === k)
    throw b2 = "" + a2, Error(z(31, "[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2));
  return h2;
}
function P(a2, b2, c) {
  if (null == a2)
    return a2;
  var e2 = [], d = 0;
  O(a2, e2, "", "", function(a3) {
    return b2.call(c, a3, d++);
  });
  return e2;
}
function Q(a2) {
  if (-1 === a2._status) {
    var b2 = a2._result;
    b2 = b2();
    a2._status = 0;
    a2._result = b2;
    b2.then(function(b3) {
      0 === a2._status && (b3 = b3.default, a2._status = 1, a2._result = b3);
    }, function(b3) {
      0 === a2._status && (a2._status = 2, a2._result = b3);
    });
  }
  if (1 === a2._status)
    return a2._result;
  throw a2._result;
}
var R$1 = { current: null };
function S$1() {
  var a2 = R$1.current;
  if (null === a2)
    throw Error(z(321));
  return a2;
}
var T = { ReactCurrentDispatcher: R$1, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G, IsSomeRendererActing: { current: false }, assign: l$1 };
react_production_min.Children = { map: P, forEach: function(a2, b2, c) {
  P(a2, function() {
    b2.apply(this, arguments);
  }, c);
}, count: function(a2) {
  var b2 = 0;
  P(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return P(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!L$2(a2))
    throw Error(z(143));
  return a2;
} };
react_production_min.Component = C$1;
react_production_min.PureComponent = E;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;
react_production_min.cloneElement = function(a2, b2, c) {
  if (null === a2 || void 0 === a2)
    throw Error(z(267, a2));
  var e2 = l$1({}, a2.props), d = a2.key, k = a2.ref, h2 = a2._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k = b2.ref, h2 = G.current);
    void 0 !== b2.key && (d = "" + b2.key);
    if (a2.type && a2.type.defaultProps)
      var g2 = a2.type.defaultProps;
    for (f2 in b2)
      H$2.call(b2, f2) && !I$1.hasOwnProperty(f2) && (e2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    e2.children = c;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    e2.children = g2;
  }
  return {
    $$typeof: n,
    type: a2.type,
    key: d,
    ref: k,
    props: e2,
    _owner: h2
  };
};
react_production_min.createContext = function(a2, b2) {
  void 0 === b2 && (b2 = null);
  a2 = { $$typeof: r$3, _calculateChangedBits: b2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null };
  a2.Provider = { $$typeof: q, _context: a2 };
  return a2.Consumer = a2;
};
react_production_min.createElement = J;
react_production_min.createFactory = function(a2) {
  var b2 = J.bind(null, a2);
  b2.type = a2;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a2) {
  return { $$typeof: t$2, render: a2 };
};
react_production_min.isValidElement = L$2;
react_production_min.lazy = function(a2) {
  return { $$typeof: v$1, _payload: { _status: -1, _result: a2 }, _init: Q };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: u$3, type: a2, compare: void 0 === b2 ? null : b2 };
};
react_production_min.useCallback = function(a2, b2) {
  return S$1().useCallback(a2, b2);
};
react_production_min.useContext = function(a2, b2) {
  return S$1().useContext(a2, b2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useEffect = function(a2, b2) {
  return S$1().useEffect(a2, b2);
};
react_production_min.useImperativeHandle = function(a2, b2, c) {
  return S$1().useImperativeHandle(a2, b2, c);
};
react_production_min.useLayoutEffect = function(a2, b2) {
  return S$1().useLayoutEffect(a2, b2);
};
react_production_min.useMemo = function(a2, b2) {
  return S$1().useMemo(a2, b2);
};
react_production_min.useReducer = function(a2, b2, c) {
  return S$1().useReducer(a2, b2, c);
};
react_production_min.useRef = function(a2) {
  return S$1().useRef(a2);
};
react_production_min.useState = function(a2) {
  return S$1().useState(a2);
};
react_production_min.version = "17.0.2";
{
  react.exports = react_production_min;
}
var lib$3 = {};
var possibleStandardNamesOptimized$1 = {};
var SAME$1 = 0;
possibleStandardNamesOptimized$1.SAME = SAME$1;
var CAMELCASE$1 = 1;
possibleStandardNamesOptimized$1.CAMELCASE = CAMELCASE$1;
possibleStandardNamesOptimized$1.possibleStandardNames = {
  accept: 0,
  acceptCharset: 1,
  "accept-charset": "acceptCharset",
  accessKey: 1,
  action: 0,
  allowFullScreen: 1,
  alt: 0,
  as: 0,
  async: 0,
  autoCapitalize: 1,
  autoComplete: 1,
  autoCorrect: 1,
  autoFocus: 1,
  autoPlay: 1,
  autoSave: 1,
  capture: 0,
  cellPadding: 1,
  cellSpacing: 1,
  challenge: 0,
  charSet: 1,
  checked: 0,
  children: 0,
  cite: 0,
  class: "className",
  classID: 1,
  className: 1,
  cols: 0,
  colSpan: 1,
  content: 0,
  contentEditable: 1,
  contextMenu: 1,
  controls: 0,
  controlsList: 1,
  coords: 0,
  crossOrigin: 1,
  dangerouslySetInnerHTML: 1,
  data: 0,
  dateTime: 1,
  default: 0,
  defaultChecked: 1,
  defaultValue: 1,
  defer: 0,
  dir: 0,
  disabled: 0,
  disablePictureInPicture: 1,
  disableRemotePlayback: 1,
  download: 0,
  draggable: 0,
  encType: 1,
  enterKeyHint: 1,
  for: "htmlFor",
  form: 0,
  formMethod: 1,
  formAction: 1,
  formEncType: 1,
  formNoValidate: 1,
  formTarget: 1,
  frameBorder: 1,
  headers: 0,
  height: 0,
  hidden: 0,
  high: 0,
  href: 0,
  hrefLang: 1,
  htmlFor: 1,
  httpEquiv: 1,
  "http-equiv": "httpEquiv",
  icon: 0,
  id: 0,
  innerHTML: 1,
  inputMode: 1,
  integrity: 0,
  is: 0,
  itemID: 1,
  itemProp: 1,
  itemRef: 1,
  itemScope: 1,
  itemType: 1,
  keyParams: 1,
  keyType: 1,
  kind: 0,
  label: 0,
  lang: 0,
  list: 0,
  loop: 0,
  low: 0,
  manifest: 0,
  marginWidth: 1,
  marginHeight: 1,
  max: 0,
  maxLength: 1,
  media: 0,
  mediaGroup: 1,
  method: 0,
  min: 0,
  minLength: 1,
  multiple: 0,
  muted: 0,
  name: 0,
  noModule: 1,
  nonce: 0,
  noValidate: 1,
  open: 0,
  optimum: 0,
  pattern: 0,
  placeholder: 0,
  playsInline: 1,
  poster: 0,
  preload: 0,
  profile: 0,
  radioGroup: 1,
  readOnly: 1,
  referrerPolicy: 1,
  rel: 0,
  required: 0,
  reversed: 0,
  role: 0,
  rows: 0,
  rowSpan: 1,
  sandbox: 0,
  scope: 0,
  scoped: 0,
  scrolling: 0,
  seamless: 0,
  selected: 0,
  shape: 0,
  size: 0,
  sizes: 0,
  span: 0,
  spellCheck: 1,
  src: 0,
  srcDoc: 1,
  srcLang: 1,
  srcSet: 1,
  start: 0,
  step: 0,
  style: 0,
  summary: 0,
  tabIndex: 1,
  target: 0,
  title: 0,
  type: 0,
  useMap: 1,
  value: 0,
  width: 0,
  wmode: 0,
  wrap: 0,
  about: 0,
  accentHeight: 1,
  "accent-height": "accentHeight",
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 1,
  "alignment-baseline": "alignmentBaseline",
  allowReorder: 1,
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 1,
  "arabic-form": "arabicForm",
  ascent: 0,
  attributeName: 1,
  attributeType: 1,
  autoReverse: 1,
  azimuth: 0,
  baseFrequency: 1,
  baselineShift: 1,
  "baseline-shift": "baselineShift",
  baseProfile: 1,
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 1,
  capHeight: 1,
  "cap-height": "capHeight",
  clip: 0,
  clipPath: 1,
  "clip-path": "clipPath",
  clipPathUnits: 1,
  clipRule: 1,
  "clip-rule": "clipRule",
  color: 0,
  colorInterpolation: 1,
  "color-interpolation": "colorInterpolation",
  colorInterpolationFilters: 1,
  "color-interpolation-filters": "colorInterpolationFilters",
  colorProfile: 1,
  "color-profile": "colorProfile",
  colorRendering: 1,
  "color-rendering": "colorRendering",
  contentScriptType: 1,
  contentStyleType: 1,
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  datatype: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 1,
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 1,
  "dominant-baseline": "dominantBaseline",
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 1,
  elevation: 0,
  enableBackground: 1,
  "enable-background": "enableBackground",
  end: 0,
  exponent: 0,
  externalResourcesRequired: 1,
  fill: 0,
  fillOpacity: 1,
  "fill-opacity": "fillOpacity",
  fillRule: 1,
  "fill-rule": "fillRule",
  filter: 0,
  filterRes: 1,
  filterUnits: 1,
  floodOpacity: 1,
  "flood-opacity": "floodOpacity",
  floodColor: 1,
  "flood-color": "floodColor",
  focusable: 0,
  fontFamily: 1,
  "font-family": "fontFamily",
  fontSize: 1,
  "font-size": "fontSize",
  fontSizeAdjust: 1,
  "font-size-adjust": "fontSizeAdjust",
  fontStretch: 1,
  "font-stretch": "fontStretch",
  fontStyle: 1,
  "font-style": "fontStyle",
  fontVariant: 1,
  "font-variant": "fontVariant",
  fontWeight: 1,
  "font-weight": "fontWeight",
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 1,
  "glyph-name": "glyphName",
  glyphOrientationHorizontal: 1,
  "glyph-orientation-horizontal": "glyphOrientationHorizontal",
  glyphOrientationVertical: 1,
  "glyph-orientation-vertical": "glyphOrientationVertical",
  glyphRef: 1,
  gradientTransform: 1,
  gradientUnits: 1,
  hanging: 0,
  horizAdvX: 1,
  "horiz-adv-x": "horizAdvX",
  horizOriginX: 1,
  "horiz-origin-x": "horizOriginX",
  ideographic: 0,
  imageRendering: 1,
  "image-rendering": "imageRendering",
  in2: 0,
  in: 0,
  inlist: 0,
  intercept: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  k: 0,
  kernelMatrix: 1,
  kernelUnitLength: 1,
  kerning: 0,
  keyPoints: 1,
  keySplines: 1,
  keyTimes: 1,
  lengthAdjust: 1,
  letterSpacing: 1,
  "letter-spacing": "letterSpacing",
  lightingColor: 1,
  "lighting-color": "lightingColor",
  limitingConeAngle: 1,
  local: 0,
  markerEnd: 1,
  "marker-end": "markerEnd",
  markerHeight: 1,
  markerMid: 1,
  "marker-mid": "markerMid",
  markerStart: 1,
  "marker-start": "markerStart",
  markerUnits: 1,
  markerWidth: 1,
  mask: 0,
  maskContentUnits: 1,
  maskUnits: 1,
  mathematical: 0,
  mode: 0,
  numOctaves: 1,
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 1,
  "overline-position": "overlinePosition",
  overlineThickness: 1,
  "overline-thickness": "overlineThickness",
  paintOrder: 1,
  "paint-order": "paintOrder",
  panose1: 0,
  "panose-1": "panose1",
  pathLength: 1,
  patternContentUnits: 1,
  patternTransform: 1,
  patternUnits: 1,
  pointerEvents: 1,
  "pointer-events": "pointerEvents",
  points: 0,
  pointsAtX: 1,
  pointsAtY: 1,
  pointsAtZ: 1,
  prefix: 0,
  preserveAlpha: 1,
  preserveAspectRatio: 1,
  primitiveUnits: 1,
  property: 0,
  r: 0,
  radius: 0,
  refX: 1,
  refY: 1,
  renderingIntent: 1,
  "rendering-intent": "renderingIntent",
  repeatCount: 1,
  repeatDur: 1,
  requiredExtensions: 1,
  requiredFeatures: 1,
  resource: 0,
  restart: 0,
  result: 0,
  results: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  security: 0,
  seed: 0,
  shapeRendering: 1,
  "shape-rendering": "shapeRendering",
  slope: 0,
  spacing: 0,
  specularConstant: 1,
  specularExponent: 1,
  speed: 0,
  spreadMethod: 1,
  startOffset: 1,
  stdDeviation: 1,
  stemh: 0,
  stemv: 0,
  stitchTiles: 1,
  stopColor: 1,
  "stop-color": "stopColor",
  stopOpacity: 1,
  "stop-opacity": "stopOpacity",
  strikethroughPosition: 1,
  "strikethrough-position": "strikethroughPosition",
  strikethroughThickness: 1,
  "strikethrough-thickness": "strikethroughThickness",
  string: 0,
  stroke: 0,
  strokeDasharray: 1,
  "stroke-dasharray": "strokeDasharray",
  strokeDashoffset: 1,
  "stroke-dashoffset": "strokeDashoffset",
  strokeLinecap: 1,
  "stroke-linecap": "strokeLinecap",
  strokeLinejoin: 1,
  "stroke-linejoin": "strokeLinejoin",
  strokeMiterlimit: 1,
  "stroke-miterlimit": "strokeMiterlimit",
  strokeWidth: 1,
  "stroke-width": "strokeWidth",
  strokeOpacity: 1,
  "stroke-opacity": "strokeOpacity",
  suppressContentEditableWarning: 1,
  suppressHydrationWarning: 1,
  surfaceScale: 1,
  systemLanguage: 1,
  tableValues: 1,
  targetX: 1,
  targetY: 1,
  textAnchor: 1,
  "text-anchor": "textAnchor",
  textDecoration: 1,
  "text-decoration": "textDecoration",
  textLength: 1,
  textRendering: 1,
  "text-rendering": "textRendering",
  to: 0,
  transform: 0,
  typeof: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 1,
  "underline-position": "underlinePosition",
  underlineThickness: 1,
  "underline-thickness": "underlineThickness",
  unicode: 0,
  unicodeBidi: 1,
  "unicode-bidi": "unicodeBidi",
  unicodeRange: 1,
  "unicode-range": "unicodeRange",
  unitsPerEm: 1,
  "units-per-em": "unitsPerEm",
  unselectable: 0,
  vAlphabetic: 1,
  "v-alphabetic": "vAlphabetic",
  values: 0,
  vectorEffect: 1,
  "vector-effect": "vectorEffect",
  version: 0,
  vertAdvY: 1,
  "vert-adv-y": "vertAdvY",
  vertOriginX: 1,
  "vert-origin-x": "vertOriginX",
  vertOriginY: 1,
  "vert-origin-y": "vertOriginY",
  vHanging: 1,
  "v-hanging": "vHanging",
  vIdeographic: 1,
  "v-ideographic": "vIdeographic",
  viewBox: 1,
  viewTarget: 1,
  visibility: 0,
  vMathematical: 1,
  "v-mathematical": "vMathematical",
  vocab: 0,
  widths: 0,
  wordSpacing: 1,
  "word-spacing": "wordSpacing",
  writingMode: 1,
  "writing-mode": "writingMode",
  x1: 0,
  x2: 0,
  x: 0,
  xChannelSelector: 1,
  xHeight: 1,
  "x-height": "xHeight",
  xlinkActuate: 1,
  "xlink:actuate": "xlinkActuate",
  xlinkArcrole: 1,
  "xlink:arcrole": "xlinkArcrole",
  xlinkHref: 1,
  "xlink:href": "xlinkHref",
  xlinkRole: 1,
  "xlink:role": "xlinkRole",
  xlinkShow: 1,
  "xlink:show": "xlinkShow",
  xlinkTitle: 1,
  "xlink:title": "xlinkTitle",
  xlinkType: 1,
  "xlink:type": "xlinkType",
  xmlBase: 1,
  "xml:base": "xmlBase",
  xmlLang: 1,
  "xml:lang": "xmlLang",
  xmlns: 0,
  "xml:space": "xmlSpace",
  xmlnsXlink: 1,
  "xmlns:xlink": "xmlnsXlink",
  xmlSpace: 1,
  y1: 0,
  y2: 0,
  y: 0,
  yChannelSelector: 1,
  z: 0,
  zoomAndPan: 1
};
Object.defineProperty(lib$3, "__esModule", { value: true });
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o2, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
    arr2[i2] = arr[i2];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var RESERVED = 0;
var STRING = 1;
var BOOLEANISH_STRING = 2;
var BOOLEAN = 3;
var OVERLOADED_BOOLEAN = 4;
var NUMERIC = 5;
var POSITIVE_NUMERIC = 6;
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}
function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
}
var properties = {};
var reservedProps = [
  "children",
  "dangerouslySetInnerHTML",
  "defaultValue",
  "defaultChecked",
  "innerHTML",
  "suppressContentEditableWarning",
  "suppressHydrationWarning",
  "style"
];
reservedProps.forEach(function(name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
  var _ref2 = _slicedToArray(_ref, 2), name = _ref2[0], attributeName = _ref2[1];
  properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null, false, false);
});
[
  "allowFullScreen",
  "async",
  "autoFocus",
  "autoPlay",
  "controls",
  "default",
  "defer",
  "disabled",
  "disablePictureInPicture",
  "disableRemotePlayback",
  "formNoValidate",
  "hidden",
  "loop",
  "noModule",
  "noValidate",
  "open",
  "playsInline",
  "readOnly",
  "required",
  "reversed",
  "scoped",
  "seamless",
  "itemScope"
].forEach(function(name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, name.toLowerCase(), null, false, false);
});
[
  "checked",
  "multiple",
  "muted",
  "selected"
].forEach(function(name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name, null, false, false);
});
[
  "capture",
  "download"
].forEach(function(name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, name, null, false, false);
});
[
  "cols",
  "rows",
  "size",
  "span"
].forEach(function(name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name, null, false, false);
});
["rowSpan", "start"].forEach(function(name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, name.toLowerCase(), null, false, false);
});
var CAMELIZE = /[\-\:]([a-z])/g;
var capitalize$1 = function capitalize(token) {
  return token[1].toUpperCase();
};
[
  "accent-height",
  "alignment-baseline",
  "arabic-form",
  "baseline-shift",
  "cap-height",
  "clip-path",
  "clip-rule",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "dominant-baseline",
  "enable-background",
  "fill-opacity",
  "fill-rule",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "glyph-name",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "horiz-adv-x",
  "horiz-origin-x",
  "image-rendering",
  "letter-spacing",
  "lighting-color",
  "marker-end",
  "marker-mid",
  "marker-start",
  "overline-position",
  "overline-thickness",
  "paint-order",
  "panose-1",
  "pointer-events",
  "rendering-intent",
  "shape-rendering",
  "stop-color",
  "stop-opacity",
  "strikethrough-position",
  "strikethrough-thickness",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "underline-position",
  "underline-thickness",
  "unicode-bidi",
  "unicode-range",
  "units-per-em",
  "v-alphabetic",
  "v-hanging",
  "v-ideographic",
  "v-mathematical",
  "vector-effect",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "word-spacing",
  "writing-mode",
  "xmlns:xlink",
  "x-height"
].forEach(function(attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize$1);
  properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
});
[
  "xlink:actuate",
  "xlink:arcrole",
  "xlink:role",
  "xlink:show",
  "xlink:title",
  "xlink:type"
].forEach(function(attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize$1);
  properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/1999/xlink", false, false);
});
[
  "xml:base",
  "xml:lang",
  "xml:space"
].forEach(function(attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize$1);
  properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, false, false);
});
var xlinkHref = "xlinkHref";
properties[xlinkHref] = new PropertyInfoRecord("xlinkHref", STRING, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, true, true);
});
var _require$1 = possibleStandardNamesOptimized$1, CAMELCASE = _require$1.CAMELCASE, SAME = _require$1.SAME, possibleStandardNamesOptimized = _require$1.possibleStandardNames;
var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var isCustomAttribute = RegExp.prototype.test.bind(new RegExp("^(data|aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$"));
var possibleStandardNames = Object.keys(possibleStandardNamesOptimized).reduce(function(accumulator, standardName) {
  var propName = possibleStandardNamesOptimized[standardName];
  if (propName === SAME) {
    accumulator[standardName] = standardName;
  } else if (propName === CAMELCASE) {
    accumulator[standardName.toLowerCase()] = standardName;
  } else {
    accumulator[standardName] = propName;
  }
  return accumulator;
}, {});
lib$3.BOOLEAN = BOOLEAN;
lib$3.BOOLEANISH_STRING = BOOLEANISH_STRING;
lib$3.NUMERIC = NUMERIC;
lib$3.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
lib$3.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
lib$3.RESERVED = RESERVED;
lib$3.STRING = STRING;
lib$3.getPropertyInfo = getPropertyInfo;
lib$3.isCustomAttribute = isCustomAttribute;
lib$3.possibleStandardNames = possibleStandardNames;
var cjs = {};
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;
var TRIM_REGEX = /^\s+|\s+$/g;
var NEWLINE = "\n";
var FORWARD_SLASH = "/";
var ASTERISK = "*";
var EMPTY_STRING = "";
var TYPE_COMMENT = "comment";
var TYPE_DECLARATION = "declaration";
var inlineStyleParser = function(style, options) {
  if (typeof style !== "string") {
    throw new TypeError("First argument must be a string");
  }
  if (!style)
    return [];
  options = options || {};
  var lineno = 1;
  var column = 1;
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines)
      lineno += lines.length;
    var i2 = str.lastIndexOf(NEWLINE);
    column = ~i2 ? str.length - i2 : column + str.length;
  }
  function position() {
    var start = { line: lineno, column };
    return function(node2) {
      node2.position = new Position(start);
      whitespace();
      return node2;
    };
  }
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column };
    this.source = options.source;
  }
  Position.prototype.content = style;
  function error(msg) {
    var err = new Error(options.source + ":" + lineno + ":" + column + ": " + msg);
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;
    if (options.silent)
      ;
    else {
      throw err;
    }
  }
  function match(re) {
    var m2 = re.exec(style);
    if (!m2)
      return;
    var str = m2[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m2;
  }
  function whitespace() {
    match(WHITESPACE_REGEX);
  }
  function comments(rules) {
    var c;
    rules = rules || [];
    while (c = comment()) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }
  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1))
      return;
    var i2 = 2;
    while (EMPTY_STRING != style.charAt(i2) && (ASTERISK != style.charAt(i2) || FORWARD_SLASH != style.charAt(i2 + 1))) {
      ++i2;
    }
    i2 += 2;
    if (EMPTY_STRING === style.charAt(i2 - 1)) {
      return error("End of comment missing");
    }
    var str = style.slice(2, i2 - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i2);
    column += 2;
    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }
  function declaration() {
    var pos = position();
    var prop = match(PROPERTY_REGEX);
    if (!prop)
      return;
    comment();
    if (!match(COLON_REGEX))
      return error("property missing ':'");
    var val = match(VALUE_REGEX);
    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
    });
    match(SEMICOLON_REGEX);
    return ret;
  }
  function declarations() {
    var decls = [];
    comments(decls);
    var decl;
    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }
    return decls;
  }
  whitespace();
  return declarations();
};
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
var parse = inlineStyleParser;
function StyleToObject(style, iterator) {
  var output = null;
  if (!style || typeof style !== "string") {
    return output;
  }
  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === "function";
  var property;
  var value;
  for (var i2 = 0, len = declarations.length; i2 < len; i2++) {
    declaration = declarations[i2];
    property = declaration.property;
    value = declaration.value;
    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }
  return output;
}
var styleToObject = StyleToObject;
var utilities$4 = {};
utilities$4.__esModule = true;
utilities$4.camelCase = void 0;
var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9-]+$/;
var HYPHEN_REGEX = /-([a-z])/g;
var NO_HYPHEN_REGEX = /^[^-]+$/;
var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
var skipCamelCase = function(property) {
  return !property || NO_HYPHEN_REGEX.test(property) || CUSTOM_PROPERTY_REGEX.test(property);
};
var capitalize2 = function(match, character) {
  return character.toUpperCase();
};
var trimHyphen = function(match, prefix) {
  return "".concat(prefix, "-");
};
var camelCase = function(property, options) {
  if (options === void 0) {
    options = {};
  }
  if (skipCamelCase(property)) {
    return property;
  }
  property = property.toLowerCase();
  if (options.reactCompat) {
    property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
  } else {
    property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
  }
  return property.replace(HYPHEN_REGEX, capitalize2);
};
utilities$4.camelCase = camelCase;
(function(exports) {
  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  exports.__esModule = true;
  var style_to_object_1 = __importDefault(styleToObject);
  var utilities_1 = utilities$4;
  function StyleToJS(style, options) {
    var output = {};
    if (!style || typeof style !== "string") {
      return output;
    }
    (0, style_to_object_1["default"])(style, function(property, value) {
      if (property && value) {
        output[(0, utilities_1.camelCase)(property, options)] = value;
      }
    });
    return output;
  }
  exports["default"] = StyleToJS;
})(cjs);
var React$2 = react.exports;
var styleToJS = cjs.default;
function invertObject(obj, override) {
  if (!obj || typeof obj !== "object") {
    throw new TypeError("First argument must be an object");
  }
  var key;
  var value;
  var isOverridePresent = typeof override === "function";
  var overrides = {};
  var result = {};
  for (key in obj) {
    value = obj[key];
    if (isOverridePresent) {
      overrides = override(key, value);
      if (overrides && overrides.length === 2) {
        result[overrides[0]] = overrides[1];
        continue;
      }
    }
    if (typeof value === "string") {
      result[value] = key;
    }
  }
  return result;
}
function isCustomComponent(tagName2, props) {
  if (tagName2.indexOf("-") === -1) {
    return props && typeof props.is === "string";
  }
  switch (tagName2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var styleToJSOptions = { reactCompat: true };
function setStyleProp$1(style, props) {
  if (style === null || style === void 0) {
    return;
  }
  try {
    props.style = styleToJS(style, styleToJSOptions);
  } catch (err) {
    props.style = {};
  }
}
var PRESERVE_CUSTOM_ATTRIBUTES = React$2.version.split(".")[0] >= 16;
var elementsWithNoTextChildren = /* @__PURE__ */ new Set([
  "tr",
  "tbody",
  "thead",
  "tfoot",
  "colgroup",
  "table",
  "head",
  "html",
  "frameset"
]);
function canTextBeChildOfNode$1(node2) {
  return !elementsWithNoTextChildren.has(node2.name);
}
var utilities$3 = {
  PRESERVE_CUSTOM_ATTRIBUTES,
  invertObject,
  isCustomComponent,
  setStyleProp: setStyleProp$1,
  canTextBeChildOfNode: canTextBeChildOfNode$1,
  elementsWithNoTextChildren
};
var reactProperty = lib$3;
var utilities$2 = utilities$3;
var attributesToProps$2 = function attributesToProps(attributes) {
  attributes = attributes || {};
  var valueOnlyInputs = {
    reset: true,
    submit: true
  };
  var attributeName;
  var attributeNameLowerCased;
  var attributeValue;
  var propName;
  var propertyInfo;
  var props = {};
  var inputIsValueOnly = attributes.type && valueOnlyInputs[attributes.type];
  for (attributeName in attributes) {
    attributeValue = attributes[attributeName];
    if (reactProperty.isCustomAttribute(attributeName)) {
      props[attributeName] = attributeValue;
      continue;
    }
    attributeNameLowerCased = attributeName.toLowerCase();
    propName = getPropName(attributeNameLowerCased);
    if (propName) {
      propertyInfo = reactProperty.getPropertyInfo(propName);
      if ((propName === "checked" || propName === "value") && !inputIsValueOnly) {
        propName = getPropName("default" + attributeNameLowerCased);
      }
      props[propName] = attributeValue;
      switch (propertyInfo && propertyInfo.type) {
        case reactProperty.BOOLEAN:
          props[propName] = true;
          break;
        case reactProperty.OVERLOADED_BOOLEAN:
          if (attributeValue === "") {
            props[propName] = true;
          }
          break;
      }
      continue;
    }
    if (utilities$2.PRESERVE_CUSTOM_ATTRIBUTES) {
      props[attributeName] = attributeValue;
    }
  }
  utilities$2.setStyleProp(attributes.style, props);
  return props;
};
function getPropName(attributeName) {
  return reactProperty.possibleStandardNames[attributeName];
}
var React$1 = react.exports;
var attributesToProps$1 = attributesToProps$2;
var utilities$1 = utilities$3;
var setStyleProp = utilities$1.setStyleProp;
var canTextBeChildOfNode = utilities$1.canTextBeChildOfNode;
function domToReact$1(nodes, options) {
  options = options || {};
  var library = options.library || React$1;
  var cloneElement = library.cloneElement;
  var createElement = library.createElement;
  var isValidElement = library.isValidElement;
  var result = [];
  var node2;
  var isWhitespace;
  var hasReplace = typeof options.replace === "function";
  var replaceElement;
  var props;
  var children;
  var trim2 = options.trim;
  for (var i2 = 0, len = nodes.length; i2 < len; i2++) {
    node2 = nodes[i2];
    if (hasReplace) {
      replaceElement = options.replace(node2);
      if (isValidElement(replaceElement)) {
        if (len > 1) {
          replaceElement = cloneElement(replaceElement, {
            key: replaceElement.key || i2
          });
        }
        result.push(replaceElement);
        continue;
      }
    }
    if (node2.type === "text") {
      isWhitespace = !node2.data.trim().length;
      if (isWhitespace && node2.parent && !canTextBeChildOfNode(node2.parent)) {
        continue;
      }
      if (trim2 && isWhitespace) {
        continue;
      }
      result.push(node2.data);
      continue;
    }
    props = node2.attribs;
    if (skipAttributesToProps(node2)) {
      setStyleProp(props.style, props);
    } else if (props) {
      props = attributesToProps$1(props);
    }
    children = null;
    switch (node2.type) {
      case "script":
      case "style":
        if (node2.children[0]) {
          props.dangerouslySetInnerHTML = {
            __html: node2.children[0].data
          };
        }
        break;
      case "tag":
        if (node2.name === "textarea" && node2.children[0]) {
          props.defaultValue = node2.children[0].data;
        } else if (node2.children && node2.children.length) {
          children = domToReact$1(node2.children, options);
        }
        break;
      default:
        continue;
    }
    if (len > 1) {
      props.key = i2;
    }
    result.push(createElement(node2.name, props, children));
  }
  return result.length === 1 ? result[0] : result;
}
function skipAttributesToProps(node2) {
  return utilities$1.PRESERVE_CUSTOM_ATTRIBUTES && node2.type === "tag" && utilities$1.isCustomComponent(node2.name, node2.attribs);
}
var domToReact_1 = domToReact$1;
var CASE_SENSITIVE_TAG_NAMES$1 = [
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussainBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "linearGradient",
  "radialGradient",
  "textPath"
];
var constants$1 = {
  CASE_SENSITIVE_TAG_NAMES: CASE_SENSITIVE_TAG_NAMES$1
};
var node = {};
var lib$2 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
  var ElementType;
  (function(ElementType2) {
    ElementType2["Root"] = "root";
    ElementType2["Text"] = "text";
    ElementType2["Directive"] = "directive";
    ElementType2["Comment"] = "comment";
    ElementType2["Script"] = "script";
    ElementType2["Style"] = "style";
    ElementType2["Tag"] = "tag";
    ElementType2["CDATA"] = "cdata";
    ElementType2["Doctype"] = "doctype";
  })(ElementType = exports.ElementType || (exports.ElementType = {}));
  function isTag2(elem) {
    return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
  }
  exports.isTag = isTag2;
  exports.Root = ElementType.Root;
  exports.Text = ElementType.Text;
  exports.Directive = ElementType.Directive;
  exports.Comment = ElementType.Comment;
  exports.Script = ElementType.Script;
  exports.Style = ElementType.Style;
  exports.Tag = ElementType.Tag;
  exports.CDATA = ElementType.CDATA;
  exports.Doctype = ElementType.Doctype;
})(lib$2);
var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b3) {
      d2.__proto__ = b3;
    } || function(d2, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d2[p2] = b3[p2];
    };
    return extendStatics(d, b2);
  };
  return function(d, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d, b2);
    function __() {
      this.constructor = d;
    }
    d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
  __assign = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
Object.defineProperty(node, "__esModule", { value: true });
node.cloneNode = node.hasChildren = node.isDocument = node.isDirective = node.isComment = node.isText = node.isCDATA = node.isTag = node.Element = node.Document = node.NodeWithChildren = node.ProcessingInstruction = node.Comment = node.Text = node.DataNode = node.Node = void 0;
var domelementtype_1 = lib$2;
var nodeTypes = /* @__PURE__ */ new Map([
  [domelementtype_1.ElementType.Tag, 1],
  [domelementtype_1.ElementType.Script, 1],
  [domelementtype_1.ElementType.Style, 1],
  [domelementtype_1.ElementType.Directive, 1],
  [domelementtype_1.ElementType.Text, 3],
  [domelementtype_1.ElementType.CDATA, 4],
  [domelementtype_1.ElementType.Comment, 8],
  [domelementtype_1.ElementType.Root, 9]
]);
var Node$1 = function() {
  function Node2(type) {
    this.type = type;
    this.parent = null;
    this.prev = null;
    this.next = null;
    this.startIndex = null;
    this.endIndex = null;
  }
  Object.defineProperty(Node2.prototype, "nodeType", {
    get: function() {
      var _a;
      return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Node2.prototype, "parentNode", {
    get: function() {
      return this.parent;
    },
    set: function(parent) {
      this.parent = parent;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Node2.prototype, "previousSibling", {
    get: function() {
      return this.prev;
    },
    set: function(prev) {
      this.prev = prev;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Node2.prototype, "nextSibling", {
    get: function() {
      return this.next;
    },
    set: function(next) {
      this.next = next;
    },
    enumerable: false,
    configurable: true
  });
  Node2.prototype.cloneNode = function(recursive) {
    if (recursive === void 0) {
      recursive = false;
    }
    return cloneNode(this, recursive);
  };
  return Node2;
}();
node.Node = Node$1;
var DataNode = function(_super) {
  __extends(DataNode2, _super);
  function DataNode2(type, data) {
    var _this = _super.call(this, type) || this;
    _this.data = data;
    return _this;
  }
  Object.defineProperty(DataNode2.prototype, "nodeValue", {
    get: function() {
      return this.data;
    },
    set: function(data) {
      this.data = data;
    },
    enumerable: false,
    configurable: true
  });
  return DataNode2;
}(Node$1);
node.DataNode = DataNode;
var Text$2 = function(_super) {
  __extends(Text2, _super);
  function Text2(data) {
    return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
  }
  return Text2;
}(DataNode);
node.Text = Text$2;
var Comment$1 = function(_super) {
  __extends(Comment2, _super);
  function Comment2(data) {
    return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
  }
  return Comment2;
}(DataNode);
node.Comment = Comment$1;
var ProcessingInstruction$1 = function(_super) {
  __extends(ProcessingInstruction2, _super);
  function ProcessingInstruction2(name, data) {
    var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;
    _this.name = name;
    return _this;
  }
  return ProcessingInstruction2;
}(DataNode);
node.ProcessingInstruction = ProcessingInstruction$1;
var NodeWithChildren = function(_super) {
  __extends(NodeWithChildren2, _super);
  function NodeWithChildren2(type, children) {
    var _this = _super.call(this, type) || this;
    _this.children = children;
    return _this;
  }
  Object.defineProperty(NodeWithChildren2.prototype, "firstChild", {
    get: function() {
      var _a;
      return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(NodeWithChildren2.prototype, "lastChild", {
    get: function() {
      return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(NodeWithChildren2.prototype, "childNodes", {
    get: function() {
      return this.children;
    },
    set: function(children) {
      this.children = children;
    },
    enumerable: false,
    configurable: true
  });
  return NodeWithChildren2;
}(Node$1);
node.NodeWithChildren = NodeWithChildren;
var Document = function(_super) {
  __extends(Document2, _super);
  function Document2(children) {
    return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
  }
  return Document2;
}(NodeWithChildren);
node.Document = Document;
var Element$1 = function(_super) {
  __extends(Element2, _super);
  function Element2(name, attribs, children, type) {
    if (children === void 0) {
      children = [];
    }
    if (type === void 0) {
      type = name === "script" ? domelementtype_1.ElementType.Script : name === "style" ? domelementtype_1.ElementType.Style : domelementtype_1.ElementType.Tag;
    }
    var _this = _super.call(this, type, children) || this;
    _this.name = name;
    _this.attribs = attribs;
    return _this;
  }
  Object.defineProperty(Element2.prototype, "tagName", {
    get: function() {
      return this.name;
    },
    set: function(name) {
      this.name = name;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Element2.prototype, "attributes", {
    get: function() {
      var _this = this;
      return Object.keys(this.attribs).map(function(name) {
        var _a, _b;
        return {
          name,
          value: _this.attribs[name],
          namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
          prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
        };
      });
    },
    enumerable: false,
    configurable: true
  });
  return Element2;
}(NodeWithChildren);
node.Element = Element$1;
function isTag(node2) {
  return (0, domelementtype_1.isTag)(node2);
}
node.isTag = isTag;
function isCDATA(node2) {
  return node2.type === domelementtype_1.ElementType.CDATA;
}
node.isCDATA = isCDATA;
function isText(node2) {
  return node2.type === domelementtype_1.ElementType.Text;
}
node.isText = isText;
function isComment(node2) {
  return node2.type === domelementtype_1.ElementType.Comment;
}
node.isComment = isComment;
function isDirective(node2) {
  return node2.type === domelementtype_1.ElementType.Directive;
}
node.isDirective = isDirective;
function isDocument(node2) {
  return node2.type === domelementtype_1.ElementType.Root;
}
node.isDocument = isDocument;
function hasChildren(node2) {
  return Object.prototype.hasOwnProperty.call(node2, "children");
}
node.hasChildren = hasChildren;
function cloneNode(node2, recursive) {
  if (recursive === void 0) {
    recursive = false;
  }
  var result;
  if (isText(node2)) {
    result = new Text$2(node2.data);
  } else if (isComment(node2)) {
    result = new Comment$1(node2.data);
  } else if (isTag(node2)) {
    var children = recursive ? cloneChildren(node2.children) : [];
    var clone_1 = new Element$1(node2.name, __assign({}, node2.attribs), children);
    children.forEach(function(child) {
      return child.parent = clone_1;
    });
    if (node2.namespace != null) {
      clone_1.namespace = node2.namespace;
    }
    if (node2["x-attribsNamespace"]) {
      clone_1["x-attribsNamespace"] = __assign({}, node2["x-attribsNamespace"]);
    }
    if (node2["x-attribsPrefix"]) {
      clone_1["x-attribsPrefix"] = __assign({}, node2["x-attribsPrefix"]);
    }
    result = clone_1;
  } else if (isCDATA(node2)) {
    var children = recursive ? cloneChildren(node2.children) : [];
    var clone_2 = new NodeWithChildren(domelementtype_1.ElementType.CDATA, children);
    children.forEach(function(child) {
      return child.parent = clone_2;
    });
    result = clone_2;
  } else if (isDocument(node2)) {
    var children = recursive ? cloneChildren(node2.children) : [];
    var clone_3 = new Document(children);
    children.forEach(function(child) {
      return child.parent = clone_3;
    });
    if (node2["x-mode"]) {
      clone_3["x-mode"] = node2["x-mode"];
    }
    result = clone_3;
  } else if (isDirective(node2)) {
    var instruction = new ProcessingInstruction$1(node2.name, node2.data);
    if (node2["x-name"] != null) {
      instruction["x-name"] = node2["x-name"];
      instruction["x-publicId"] = node2["x-publicId"];
      instruction["x-systemId"] = node2["x-systemId"];
    }
    result = instruction;
  } else {
    throw new Error("Not implemented yet: ".concat(node2.type));
  }
  result.startIndex = node2.startIndex;
  result.endIndex = node2.endIndex;
  if (node2.sourceCodeLocation != null) {
    result.sourceCodeLocation = node2.sourceCodeLocation;
  }
  return result;
}
node.cloneNode = cloneNode;
function cloneChildren(childs) {
  var children = childs.map(function(child) {
    return cloneNode(child, true);
  });
  for (var i2 = 1; i2 < children.length; i2++) {
    children[i2].prev = children[i2 - 1];
    children[i2 - 1].next = children[i2];
  }
  return children;
}
var constants = constants$1;
var domhandler = node;
var CASE_SENSITIVE_TAG_NAMES = constants.CASE_SENSITIVE_TAG_NAMES;
var Comment = domhandler.Comment;
var Element = domhandler.Element;
var ProcessingInstruction = domhandler.ProcessingInstruction;
var Text$1 = domhandler.Text;
var caseSensitiveTagNamesMap = {};
var tagName;
for (var i$3 = 0, len = CASE_SENSITIVE_TAG_NAMES.length; i$3 < len; i$3++) {
  tagName = CASE_SENSITIVE_TAG_NAMES[i$3];
  caseSensitiveTagNamesMap[tagName.toLowerCase()] = tagName;
}
function getCaseSensitiveTagName(tagName2) {
  return caseSensitiveTagNamesMap[tagName2];
}
function formatAttributes(attributes) {
  var result = {};
  var attribute;
  for (var i2 = 0, len = attributes.length; i2 < len; i2++) {
    attribute = attributes[i2];
    result[attribute.name] = attribute.value;
  }
  return result;
}
function formatTagName(tagName2) {
  tagName2 = tagName2.toLowerCase();
  var caseSensitiveTagName = getCaseSensitiveTagName(tagName2);
  if (caseSensitiveTagName) {
    return caseSensitiveTagName;
  }
  return tagName2;
}
function formatDOM$1(nodes, parent, directive) {
  parent = parent || null;
  var result = [];
  for (var index2 = 0, len = nodes.length; index2 < len; index2++) {
    var node2 = nodes[index2];
    var current;
    switch (node2.nodeType) {
      case 1:
        current = new Element(formatTagName(node2.nodeName), formatAttributes(node2.attributes));
        current.children = formatDOM$1(node2.childNodes, current);
        break;
      case 3:
        current = new Text$1(node2.nodeValue);
        break;
      case 8:
        current = new Comment(node2.nodeValue);
        break;
      default:
        continue;
    }
    var prev = result[index2 - 1] || null;
    if (prev) {
      prev.next = current;
    }
    current.parent = parent;
    current.prev = prev;
    current.next = null;
    result.push(current);
  }
  if (directive) {
    current = new ProcessingInstruction(directive.substring(0, directive.indexOf(" ")).toLowerCase(), directive);
    current.next = result[0] || null;
    current.parent = parent;
    result.unshift(current);
    if (result[1]) {
      result[1].prev = result[0];
    }
  }
  return result;
}
function isIE$2() {
  return /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent);
}
var utilities = {
  formatAttributes,
  formatDOM: formatDOM$1,
  isIE: isIE$2
};
var HTML = "html";
var HEAD = "head";
var BODY = "body";
var FIRST_TAG_REGEX = /<([a-zA-Z]+[0-9]?)/;
var HEAD_TAG_REGEX = /<head.*>/i;
var BODY_TAG_REGEX = /<body.*>/i;
var parseFromDocument = function() {
  throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
};
var parseFromString = function() {
  throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
};
if (typeof window.DOMParser === "function") {
  var domParser = new window.DOMParser();
  var mimeType = "text/html";
  parseFromString = function(html, tagName2) {
    if (tagName2) {
      html = "<" + tagName2 + ">" + html + "</" + tagName2 + ">";
    }
    return domParser.parseFromString(html, mimeType);
  };
  parseFromDocument = parseFromString;
}
if (document.implementation) {
  var isIE$1 = utilities.isIE;
  var doc = document.implementation.createHTMLDocument(isIE$1() ? "html-dom-parser" : void 0);
  parseFromDocument = function(html, tagName2) {
    if (tagName2) {
      doc.documentElement.getElementsByTagName(tagName2)[0].innerHTML = html;
      return doc;
    }
    doc.documentElement.innerHTML = html;
    return doc;
  };
}
var template = document.createElement("template");
var parseFromTemplate;
if (template.content) {
  parseFromTemplate = function(html) {
    template.innerHTML = html;
    return template.content.childNodes;
  };
}
function domparser$1(html) {
  var firstTagName;
  var match = html.match(FIRST_TAG_REGEX);
  if (match && match[1]) {
    firstTagName = match[1].toLowerCase();
  }
  var doc;
  var element;
  var elements;
  switch (firstTagName) {
    case HTML:
      doc = parseFromString(html);
      if (!HEAD_TAG_REGEX.test(html)) {
        element = doc.getElementsByTagName(HEAD)[0];
        if (element) {
          element.parentNode.removeChild(element);
        }
      }
      if (!BODY_TAG_REGEX.test(html)) {
        element = doc.getElementsByTagName(BODY)[0];
        if (element) {
          element.parentNode.removeChild(element);
        }
      }
      return doc.getElementsByTagName(HTML);
    case HEAD:
    case BODY:
      elements = parseFromDocument(html).getElementsByTagName(firstTagName);
      if (BODY_TAG_REGEX.test(html) && HEAD_TAG_REGEX.test(html)) {
        return elements[0].parentNode.childNodes;
      }
      return elements;
    default:
      if (parseFromTemplate) {
        return parseFromTemplate(html);
      }
      return parseFromDocument(html, BODY).getElementsByTagName(BODY)[0].childNodes;
  }
}
var domparser_1 = domparser$1;
var domparser = domparser_1;
var formatDOM = utilities.formatDOM;
var DIRECTIVE_REGEX = /<(![a-zA-Z\s]+)>/;
function HTMLDOMParser(html) {
  if (typeof html !== "string") {
    throw new TypeError("First argument must be a string");
  }
  if (html === "") {
    return [];
  }
  var match = html.match(DIRECTIVE_REGEX);
  var directive;
  if (match && match[1]) {
    directive = match[1];
  }
  return formatDOM(domparser(html), null, directive);
}
var htmlToDom = HTMLDOMParser;
var lib$1 = {};
(function(exports) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m2, k);
    if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m2[k];
      } };
    }
    Object.defineProperty(o2, k2, desc);
  } : function(o2, m2, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DomHandler = void 0;
  var domelementtype_12 = lib$2;
  var node_1 = node;
  __exportStar(node, exports);
  var reWhitespace = /\s+/g;
  var defaultOpts = {
    normalizeWhitespace: false,
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false
  };
  var DomHandler = function() {
    function DomHandler2(callback, options, elementCB) {
      this.dom = [];
      this.root = new node_1.Document(this.dom);
      this.done = false;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
      if (typeof options === "function") {
        elementCB = options;
        options = defaultOpts;
      }
      if (typeof callback === "object") {
        options = callback;
        callback = void 0;
      }
      this.callback = callback !== null && callback !== void 0 ? callback : null;
      this.options = options !== null && options !== void 0 ? options : defaultOpts;
      this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler2.prototype.onparserinit = function(parser) {
      this.parser = parser;
    };
    DomHandler2.prototype.onreset = function() {
      this.dom = [];
      this.root = new node_1.Document(this.dom);
      this.done = false;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
    };
    DomHandler2.prototype.onend = function() {
      if (this.done)
        return;
      this.done = true;
      this.parser = null;
      this.handleCallback(null);
    };
    DomHandler2.prototype.onerror = function(error) {
      this.handleCallback(error);
    };
    DomHandler2.prototype.onclosetag = function() {
      this.lastNode = null;
      var elem = this.tagStack.pop();
      if (this.options.withEndIndices) {
        elem.endIndex = this.parser.endIndex;
      }
      if (this.elementCB)
        this.elementCB(elem);
    };
    DomHandler2.prototype.onopentag = function(name, attribs) {
      var type = this.options.xmlMode ? domelementtype_12.ElementType.Tag : void 0;
      var element = new node_1.Element(name, attribs, void 0, type);
      this.addNode(element);
      this.tagStack.push(element);
    };
    DomHandler2.prototype.ontext = function(data) {
      var normalizeWhitespace = this.options.normalizeWhitespace;
      var lastNode = this.lastNode;
      if (lastNode && lastNode.type === domelementtype_12.ElementType.Text) {
        if (normalizeWhitespace) {
          lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
        } else {
          lastNode.data += data;
        }
        if (this.options.withEndIndices) {
          lastNode.endIndex = this.parser.endIndex;
        }
      } else {
        if (normalizeWhitespace) {
          data = data.replace(reWhitespace, " ");
        }
        var node2 = new node_1.Text(data);
        this.addNode(node2);
        this.lastNode = node2;
      }
    };
    DomHandler2.prototype.oncomment = function(data) {
      if (this.lastNode && this.lastNode.type === domelementtype_12.ElementType.Comment) {
        this.lastNode.data += data;
        return;
      }
      var node2 = new node_1.Comment(data);
      this.addNode(node2);
      this.lastNode = node2;
    };
    DomHandler2.prototype.oncommentend = function() {
      this.lastNode = null;
    };
    DomHandler2.prototype.oncdatastart = function() {
      var text = new node_1.Text("");
      var node2 = new node_1.NodeWithChildren(domelementtype_12.ElementType.CDATA, [text]);
      this.addNode(node2);
      text.parent = node2;
      this.lastNode = text;
    };
    DomHandler2.prototype.oncdataend = function() {
      this.lastNode = null;
    };
    DomHandler2.prototype.onprocessinginstruction = function(name, data) {
      var node2 = new node_1.ProcessingInstruction(name, data);
      this.addNode(node2);
    };
    DomHandler2.prototype.handleCallback = function(error) {
      if (typeof this.callback === "function") {
        this.callback(error, this.dom);
      } else if (error) {
        throw error;
      }
    };
    DomHandler2.prototype.addNode = function(node2) {
      var parent = this.tagStack[this.tagStack.length - 1];
      var previousSibling = parent.children[parent.children.length - 1];
      if (this.options.withStartIndices) {
        node2.startIndex = this.parser.startIndex;
      }
      if (this.options.withEndIndices) {
        node2.endIndex = this.parser.endIndex;
      }
      parent.children.push(node2);
      if (previousSibling) {
        node2.prev = previousSibling;
        previousSibling.next = node2;
      }
      node2.parent = parent;
      this.lastNode = null;
    };
    return DomHandler2;
  }();
  exports.DomHandler = DomHandler;
  exports.default = DomHandler;
})(lib$1);
var domToReact = domToReact_1;
var attributesToProps2 = attributesToProps$2;
var htmlToDOM = htmlToDom;
htmlToDOM = typeof htmlToDOM.default === "function" ? htmlToDOM.default : htmlToDOM;
var domParserOptions = { lowerCaseAttributeNames: false };
function HTMLReactParser(html, options) {
  if (typeof html !== "string") {
    throw new TypeError("First argument must be a string");
  }
  if (html === "") {
    return [];
  }
  options = options || {};
  return domToReact(htmlToDOM(html, options.htmlparser2 || domParserOptions), options);
}
HTMLReactParser.domToReact = domToReact;
HTMLReactParser.htmlToDOM = htmlToDOM;
HTMLReactParser.attributesToProps = attributesToProps2;
HTMLReactParser.Element = lib$1.Element;
htmlReactParser.exports = HTMLReactParser;
htmlReactParser.exports.default = HTMLReactParser;
var HTMLReactParser$1 = htmlReactParser.exports;
HTMLReactParser$1.domToReact;
HTMLReactParser$1.htmlToDOM;
HTMLReactParser$1.attributesToProps;
HTMLReactParser$1.Element;
var Component = {};
var toggleSelection = function() {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function() {
    };
  }
  var active = document.activeElement;
  var ranges = [];
  for (var i2 = 0; i2 < selection.rangeCount; i2++) {
    ranges.push(selection.getRangeAt(i2));
  }
  switch (active.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      active.blur();
      break;
    default:
      active = null;
      break;
  }
  selection.removeAllRanges();
  return function() {
    selection.type === "Caret" && selection.removeAllRanges();
    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }
    active && active.focus();
  };
};
var deselectCurrent = toggleSelection;
var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};
var defaultMessage = "Copy to clipboard: #{key}, Enter";
function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}
function copy(text, options) {
  var debug, message, reselectPrevious, range, selection, mark, success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();
    range = document.createRange();
    selection = document.getSelection();
    mark = document.createElement("span");
    mark.textContent = text;
    mark.style.all = "unset";
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    mark.style.whiteSpace = "pre";
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e2) {
      e2.stopPropagation();
      if (options.format) {
        e2.preventDefault();
        if (typeof e2.clipboardData === "undefined") {
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format2, text);
        } else {
          e2.clipboardData.clearData();
          e2.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e2.preventDefault();
        options.onCopy(e2.clipboardData);
      }
    });
    document.body.appendChild(mark);
    range.selectNodeContents(mark);
    selection.addRange(range);
    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err2) {
      debug && console.error("unable to copy using clipboardData: ", err2);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }
    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }
  return success;
}
var copyToClipboard = copy;
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
Object.defineProperty(Component, "__esModule", {
  value: true
});
Component.CopyToClipboard = void 0;
var _react = _interopRequireDefault(react.exports);
var _copyToClipboard = _interopRequireDefault(copyToClipboard);
var _excluded = ["text", "onCopy", "options", "children"];
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o2, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
    o3.__proto__ = p3;
    return o3;
  };
  return _setPrototypeOf(o2, p2);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var CopyToClipboard$1 = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits(CopyToClipboard2, _React$PureComponent);
  var _super = _createSuper(CopyToClipboard2);
  function CopyToClipboard2() {
    var _this;
    _classCallCheck(this, CopyToClipboard2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "onClick", function(event) {
      var _this$props = _this.props, text = _this$props.text, onCopy = _this$props.onCopy, children = _this$props.children, options = _this$props.options;
      var elem = _react["default"].Children.only(children);
      var result = (0, _copyToClipboard["default"])(text, options);
      if (onCopy) {
        onCopy(text, result);
      }
      if (elem && elem.props && typeof elem.props.onClick === "function") {
        elem.props.onClick(event);
      }
    });
    return _this;
  }
  _createClass(CopyToClipboard2, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props;
      _this$props2.text;
      _this$props2.onCopy;
      _this$props2.options;
      var children = _this$props2.children, props = _objectWithoutProperties(_this$props2, _excluded);
      var elem = _react["default"].Children.only(children);
      return /* @__PURE__ */ _react["default"].cloneElement(elem, _objectSpread(_objectSpread({}, props), {}, {
        onClick: this.onClick
      }));
    }
  }]);
  return CopyToClipboard2;
}(_react["default"].PureComponent);
Component.CopyToClipboard = CopyToClipboard$1;
_defineProperty(CopyToClipboard$1, "defaultProps", {
  onCopy: void 0,
  options: void 0
});
var _require = Component, CopyToClipboard = _require.CopyToClipboard;
CopyToClipboard.CopyToClipboard = CopyToClipboard;
var lib = CopyToClipboard;
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var index$1 = React.useLayoutEffect;
var useLatest = function useLatest2(value) {
  var ref = React.useRef(value);
  index$1(function() {
    ref.current = value;
  });
  return ref;
};
var updateRef = function updateRef2(ref, value) {
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  ref.current = value;
};
var useComposedRef = function useComposedRef2(libRef, userRef) {
  var prevUserRef = React.useRef();
  return React.useCallback(function(instance) {
    libRef.current = instance;
    if (prevUserRef.current) {
      updateRef(prevUserRef.current, null);
    }
    prevUserRef.current = userRef;
    if (!userRef) {
      return;
    }
    updateRef(userRef, instance);
  }, [userRef]);
};
var HIDDEN_TEXTAREA_STYLE = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
};
var forceHiddenStyles = function forceHiddenStyles2(node2) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function(key) {
    node2.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], "important");
  });
};
var hiddenTextarea = null;
var getHeight = function getHeight2(node2, sizingData) {
  var height = node2.scrollHeight;
  if (sizingData.sizingStyle.boxSizing === "border-box") {
    return height + sizingData.borderSize;
  }
  return height - sizingData.paddingSize;
};
function calculateNodeHeight(sizingData, value, minRows, maxRows) {
  if (minRows === void 0) {
    minRows = 1;
  }
  if (maxRows === void 0) {
    maxRows = Infinity;
  }
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    hiddenTextarea.setAttribute("tabindex", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    forceHiddenStyles(hiddenTextarea);
  }
  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  }
  var paddingSize = sizingData.paddingSize, borderSize = sizingData.borderSize, sizingStyle = sizingData.sizingStyle;
  var boxSizing = sizingStyle.boxSizing;
  Object.keys(sizingStyle).forEach(function(_key) {
    var key = _key;
    hiddenTextarea.style[key] = sizingStyle[key];
  });
  forceHiddenStyles(hiddenTextarea);
  hiddenTextarea.value = value;
  var height = getHeight(hiddenTextarea, sizingData);
  hiddenTextarea.value = "x";
  var rowHeight = hiddenTextarea.scrollHeight - paddingSize;
  var minHeight = rowHeight * minRows;
  if (boxSizing === "border-box") {
    minHeight = minHeight + paddingSize + borderSize;
  }
  height = Math.max(minHeight, height);
  var maxHeight = rowHeight * maxRows;
  if (boxSizing === "border-box") {
    maxHeight = maxHeight + paddingSize + borderSize;
  }
  height = Math.min(maxHeight, height);
  return [height, rowHeight];
}
var noop = function noop2() {
};
var pick = function pick2(props, obj) {
  return props.reduce(function(acc, prop) {
    acc[prop] = obj[prop];
    return acc;
  }, {});
};
var SIZING_STYLE = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "tabSize",
  "textIndent",
  "textRendering",
  "textTransform",
  "width",
  "wordBreak"
];
var isIE = !!document.documentElement.currentStyle;
var getSizingData = function getSizingData2(node2) {
  var style = window.getComputedStyle(node2);
  if (style === null) {
    return null;
  }
  var sizingStyle = pick(SIZING_STYLE, style);
  var boxSizing = sizingStyle.boxSizing;
  if (boxSizing === "") {
    return null;
  }
  if (isIE && boxSizing === "border-box") {
    sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + "px";
  }
  var paddingSize = parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop);
  var borderSize = parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth);
  return {
    sizingStyle,
    paddingSize,
    borderSize
  };
};
var useWindowResizeListener = function useWindowResizeListener2(listener) {
  var latestListener = useLatest(listener);
  React.useLayoutEffect(function() {
    var handler = function handler2(event) {
      latestListener.current(event);
    };
    window.addEventListener("resize", handler);
    return function() {
      window.removeEventListener("resize", handler);
    };
  }, []);
};
var TextareaAutosize = function TextareaAutosize2(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements, maxRows = _ref.maxRows, minRows = _ref.minRows, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? noop : _ref$onChange, _ref$onHeightChange = _ref.onHeightChange, onHeightChange = _ref$onHeightChange === void 0 ? noop : _ref$onHeightChange, props = _objectWithoutPropertiesLoose(_ref, ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"]);
  var isControlled = props.value !== void 0;
  var libRef = React.useRef(null);
  var ref = useComposedRef(libRef, userRef);
  var heightRef = React.useRef(0);
  var measurementsCacheRef = React.useRef();
  var resizeTextarea = function resizeTextarea2() {
    var node2 = libRef.current;
    var nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData(node2);
    if (!nodeSizingData) {
      return;
    }
    measurementsCacheRef.current = nodeSizingData;
    var _calculateNodeHeight = calculateNodeHeight(nodeSizingData, node2.value || node2.placeholder || "x", minRows, maxRows), height = _calculateNodeHeight[0], rowHeight = _calculateNodeHeight[1];
    if (heightRef.current !== height) {
      heightRef.current = height;
      node2.style.setProperty("height", height + "px", "important");
      onHeightChange(height, {
        rowHeight
      });
    }
  };
  var handleChange = function handleChange2(event) {
    if (!isControlled) {
      resizeTextarea();
    }
    onChange(event);
  };
  {
    React.useLayoutEffect(resizeTextarea);
    useWindowResizeListener(resizeTextarea);
  }
  return /* @__PURE__ */ React.createElement("textarea", _extends({}, props, {
    onChange: handleChange,
    ref
  }));
};
var index = /* @__PURE__ */ React.forwardRef(TextareaAutosize);
var TextareaAutosize$1 = index;
let t$1 = typeof window != "undefined" ? React.useLayoutEffect : React.useEffect;
function s$5(e2) {
  let r2 = React.useRef(e2);
  return t$1(() => {
    r2.current = e2;
  }, [e2]), r2;
}
function i$2(e2, o2) {
  let [u2, t2] = React.useState(e2), r2 = s$5(e2);
  return t$1(() => t2(r2.current), [r2, t2, ...o2]), u2;
}
function o$3() {
  let a2 = [], i2 = [], n2 = { enqueue(e2) {
    i2.push(e2);
  }, addEventListener(e2, t2, r2, s2) {
    return e2.addEventListener(t2, r2, s2), n2.add(() => e2.removeEventListener(t2, r2, s2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    return n2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    return n2.requestAnimationFrame(() => n2.requestAnimationFrame(...e2));
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    return n2.add(() => clearTimeout(t2));
  }, add(e2) {
    return a2.push(e2), () => {
      let t2 = a2.indexOf(e2);
      if (t2 >= 0) {
        let [r2] = a2.splice(t2, 1);
        r2();
      }
    };
  }, dispose() {
    for (let e2 of a2.splice(0))
      e2();
  }, async workQueue() {
    for (let e2 of i2.splice(0))
      await e2();
  } };
  return n2;
}
function p$2() {
  let [e2] = React.useState(o$3);
  return React.useEffect(() => () => e2.dispose(), [e2]), e2;
}
let o$2 = function(t2) {
  let e2 = s$5(t2);
  return React.useCallback((...r2) => e2.current(...r2), [e2]);
};
let r$2 = { serverHandoffComplete: false };
function a$2() {
  let [e2, f2] = React.useState(r$2.serverHandoffComplete);
  return React.useEffect(() => {
    e2 !== true && f2(true);
  }, [e2]), React.useEffect(() => {
    r$2.serverHandoffComplete === false && (r$2.serverHandoffComplete = true);
  }, []), e2;
}
var u$2;
let l = 0;
function r$1() {
  return ++l;
}
let I = (u$2 = React.useId) != null ? u$2 : function() {
  let n2 = a$2(), [e2, o2] = React.useState(n2 ? r$1 : null);
  return t$1(() => {
    e2 === null && o2(r$1());
  }, [e2]), e2 != null ? "" + e2 : void 0;
};
function u$1(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$1), t2;
}
function t(n2) {
  return typeof window == "undefined" ? null : n2 instanceof Node ? n2.ownerDocument : n2 != null && n2.hasOwnProperty("current") && n2.current instanceof Node ? n2.current.ownerDocument : document;
}
let f$3 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var p$1 = ((o2) => (o2[o2.First = 1] = "First", o2[o2.Previous = 2] = "Previous", o2[o2.Next = 4] = "Next", o2[o2.Last = 8] = "Last", o2[o2.WrapAround = 16] = "WrapAround", o2[o2.NoScroll = 32] = "NoScroll", o2))(p$1 || {}), L$1 = ((n2) => (n2[n2.Error = 0] = "Error", n2[n2.Overflow = 1] = "Overflow", n2[n2.Success = 2] = "Success", n2[n2.Underflow = 3] = "Underflow", n2))(L$1 || {}), N = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(N || {});
var b = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(b || {});
function S(e2, r2 = 0) {
  var t$12;
  return e2 === ((t$12 = t(e2)) == null ? void 0 : t$12.body) ? false : u$1(r2, { [0]() {
    return e2.matches(f$3);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(f$3))
        return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
function v(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let n2 = r2(t2), i2 = r2(l2);
    if (n2 === null || i2 === null)
      return 0;
    let o2 = n2.compareDocumentPosition(i2);
    return o2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function s$4(e2, r2, n2) {
  let o2 = s$5(r2);
  React.useEffect(() => {
    function t2(i2) {
      o2.current(i2);
    }
    return window.addEventListener(e2, t2, n2), () => window.removeEventListener(e2, t2, n2);
  }, [e2, n2]);
}
function L(f2, c, u2 = true) {
  let l2 = React.useRef(false);
  React.useEffect(() => {
    requestAnimationFrame(() => {
      l2.current = u2;
    });
  }, [u2]);
  function i2(t2, o2) {
    if (!l2.current || t2.defaultPrevented)
      return;
    let E2 = function r2(e2) {
      return typeof e2 == "function" ? r2(e2()) : Array.isArray(e2) || e2 instanceof Set ? e2 : [e2];
    }(f2), n2 = o2(t2);
    if (n2 !== null && !!n2.ownerDocument.documentElement.contains(n2)) {
      for (let r2 of E2) {
        if (r2 === null)
          continue;
        let e2 = r2 instanceof HTMLElement ? r2 : r2.current;
        if (e2 != null && e2.contains(n2))
          return;
      }
      return !S(n2, b.Loose) && n2.tabIndex !== -1 && t2.preventDefault(), c(t2, n2);
    }
  }
  s$4("click", (t2) => i2(t2, (o2) => o2.target), true), s$4("blur", (t2) => i2(t2, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}
function i$1(t2) {
  var n2;
  if (t2.type)
    return t2.type;
  let e2 = (n2 = t2.as) != null ? n2 : "button";
  if (typeof e2 == "string" && e2.toLowerCase() === "button")
    return "button";
}
function s$3(t2, e2) {
  let [n2, u2] = React.useState(() => i$1(t2));
  return t$1(() => {
    u2(i$1(t2));
  }, [t2.type, t2.as]), t$1(() => {
    n2 || !e2.current || e2.current instanceof HTMLButtonElement && !e2.current.hasAttribute("type") && u2("button");
  }, [n2, e2]), n2;
}
let u = Symbol();
function y$1(...t2) {
  let n2 = React.useRef(t2);
  React.useEffect(() => {
    n2.current = t2;
  }, [t2]);
  let c = o$2((e2) => {
    for (let o2 of n2.current)
      o2 != null && (typeof o2 == "function" ? o2(e2) : o2.current = e2);
  });
  return t2.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u])) ? void 0 : c;
}
function f$2(r2) {
  throw new Error("Unexpected object: " + r2);
}
var a$1 = ((e2) => (e2[e2.First = 0] = "First", e2[e2.Previous = 1] = "Previous", e2[e2.Next = 2] = "Next", e2[e2.Last = 3] = "Last", e2[e2.Specific = 4] = "Specific", e2[e2.Nothing = 5] = "Nothing", e2))(a$1 || {});
function x$1(r2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0)
    return null;
  let l2 = n2.resolveActiveIndex(), s2 = l2 != null ? l2 : -1, d = (() => {
    switch (r2.focus) {
      case 0:
        return t2.findIndex((e2) => !n2.resolveDisabled(e2));
      case 1: {
        let e2 = t2.slice().reverse().findIndex((i2, c, u2) => s2 !== -1 && u2.length - c - 1 >= s2 ? false : !n2.resolveDisabled(i2));
        return e2 === -1 ? e2 : t2.length - 1 - e2;
      }
      case 2:
        return t2.findIndex((e2, i2) => i2 <= s2 ? false : !n2.resolveDisabled(e2));
      case 3: {
        let e2 = t2.slice().reverse().findIndex((i2) => !n2.resolveDisabled(i2));
        return e2 === -1 ? e2 : t2.length - 1 - e2;
      }
      case 4:
        return t2.findIndex((e2) => n2.resolveId(e2) === r2.id);
      case 5:
        return null;
      default:
        f$2(r2);
    }
  })();
  return d === -1 ? l2 : d;
}
var x = ((n2) => (n2[n2.None = 0] = "None", n2[n2.RenderStrategy = 1] = "RenderStrategy", n2[n2.Static = 2] = "Static", n2))(x || {}), R = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(R || {});
function _({ ourProps: r2, theirProps: t2, slot: e2, defaultTag: n2, features: a2, visible: s2 = true, name: l2 }) {
  let o2 = y(t2, r2);
  if (s2)
    return f$1(o2, e2, n2, l2);
  let d = a2 != null ? a2 : 0;
  if (d & 2) {
    let { static: i2 = false, ...u2 } = o2;
    if (i2)
      return f$1(u2, e2, n2, l2);
  }
  if (d & 1) {
    let { unmount: i2 = true, ...u2 } = o2;
    return u$1(i2 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return f$1({ ...u2, hidden: true, style: { display: "none" } }, e2, n2, l2);
    } });
  }
  return f$1(o2, e2, n2, l2);
}
function f$1(r2, t2 = {}, e2, n2) {
  let { as: a2 = e2, children: s2, refName: l2 = "ref", ...o2 } = m(r2, ["unmount", "static"]), d = r2.ref !== void 0 ? { [l2]: r2.ref } : {}, i2 = typeof s2 == "function" ? s2(t2) : s2;
  o2.className && typeof o2.className == "function" && (o2.className = o2.className(t2));
  let u2 = {};
  if (a2 === React.Fragment && Object.keys(g(o2)).length > 0) {
    if (!React.isValidElement(i2) || Array.isArray(i2) && i2.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n2} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o2).map((p2) => `  - ${p2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p2) => `  - ${p2}`).join(`
`)].join(`
`));
    return React.cloneElement(i2, Object.assign({}, y(i2.props, g(m(o2, ["ref"]))), u2, d));
  }
  return React.createElement(a2, Object.assign({}, m(o2, ["ref"]), a2 !== React.Fragment && d, a2 !== React.Fragment && u2), i2);
}
function y(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t2 = {}, e2 = {};
  for (let a2 of r2)
    for (let s2 in a2)
      s2.startsWith("on") && typeof a2[s2] == "function" ? (e2[s2] != null || (e2[s2] = []), e2[s2].push(a2[s2])) : t2[s2] = a2[s2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((a2) => [a2, void 0])));
  for (let a2 in e2)
    Object.assign(t2, { [a2](s2, ...l2) {
      let o2 = e2[a2];
      for (let d of o2) {
        if (s2.defaultPrevented)
          return;
        d(s2, ...l2);
      }
    } });
  return t2;
}
function H$1(r2) {
  var t2;
  return Object.assign(React.forwardRef(r2), { displayName: (t2 = r2.displayName) != null ? t2 : r2.name });
}
function g(r2) {
  let t2 = Object.assign({}, r2);
  for (let e2 in t2)
    t2[e2] === void 0 && delete t2[e2];
  return t2;
}
function m(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let n2 of t2)
    n2 in e2 && delete e2[n2];
  return e2;
}
function r(n2) {
  let e2 = n2.parentElement, l2 = null;
  for (; e2 && !(e2 instanceof HTMLFieldSetElement); )
    e2 instanceof HTMLLegendElement && (l2 = e2), e2 = e2.parentElement;
  let t2 = (e2 == null ? void 0 : e2.getAttribute("disabled")) === "";
  return t2 && i(l2) ? false : t2;
}
function i(n2) {
  if (!n2)
    return false;
  let e2 = n2.previousElementSibling;
  for (; e2 !== null; ) {
    if (e2 instanceof HTMLLegendElement)
      return false;
    e2 = e2.previousElementSibling;
  }
  return true;
}
function e(n2 = {}, r2 = null, t2 = []) {
  for (let [i2, o2] of Object.entries(n2))
    f(t2, s$2(r2, i2), o2);
  return t2;
}
function s$2(n2, r2) {
  return n2 ? n2 + "[" + r2 + "]" : r2;
}
function f(n2, r2, t2) {
  if (Array.isArray(t2))
    for (let [i2, o2] of t2.entries())
      f(n2, s$2(r2, i2.toString()), o2);
  else
    t2 instanceof Date ? n2.push([r2, t2.toISOString()]) : typeof t2 == "boolean" ? n2.push([r2, t2 ? "1" : "0"]) : typeof t2 == "string" ? n2.push([r2, t2]) : typeof t2 == "number" ? n2.push([r2, `${t2}`]) : t2 == null ? n2.push([r2, ""]) : e(t2, r2, n2);
}
let a = "div";
var s$1 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(s$1 || {});
let h = H$1(function(t2, o2) {
  let { features: e2 = 1, ...r2 } = t2, d = { ref: o2, "aria-hidden": (e2 & 2) === 2 ? true : void 0, style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
  return _({ ourProps: d, theirProps: r2, slot: {}, defaultTag: a, name: "Hidden" });
});
let o$1 = React.createContext(null);
o$1.displayName = "OpenClosedContext";
var p = ((e2) => (e2[e2.Open = 0] = "Open", e2[e2.Closed = 1] = "Closed", e2))(p || {});
function s() {
  return React.useContext(o$1);
}
function C({ value: t2, children: n2 }) {
  return React.createElement(o$1.Provider, { value: t2 }, n2);
}
var o = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o || {});
var ce = ((n2) => (n2[n2.Open = 0] = "Open", n2[n2.Closed = 1] = "Closed", n2))(ce || {}), fe = ((n2) => (n2[n2.Single = 0] = "Single", n2[n2.Multi = 1] = "Multi", n2))(fe || {}), be = ((n2) => (n2[n2.Pointer = 0] = "Pointer", n2[n2.Other = 1] = "Other", n2))(be || {}), Te = ((r2) => (r2[r2.OpenListbox = 0] = "OpenListbox", r2[r2.CloseListbox = 1] = "CloseListbox", r2[r2.SetDisabled = 2] = "SetDisabled", r2[r2.SetOrientation = 3] = "SetOrientation", r2[r2.GoToOption = 4] = "GoToOption", r2[r2.Search = 5] = "Search", r2[r2.ClearSearch = 6] = "ClearSearch", r2[r2.RegisterOption = 7] = "RegisterOption", r2[r2.UnregisterOption = 8] = "UnregisterOption", r2))(Te || {});
function H(t2, i2 = (n2) => n2) {
  let n2 = t2.activeOptionIndex !== null ? t2.options[t2.activeOptionIndex] : null, e2 = v(i2(t2.options.slice()), (p2) => p2.dataRef.current.domRef.current), o2 = n2 ? e2.indexOf(n2) : null;
  return o2 === -1 && (o2 = null), { options: e2, activeOptionIndex: o2 };
}
let xe = { [1](t2) {
  return t2.disabled || t2.listboxState === 1 ? t2 : { ...t2, activeOptionIndex: null, listboxState: 1 };
}, [0](t2) {
  if (t2.disabled || t2.listboxState === 0)
    return t2;
  let i2 = t2.activeOptionIndex, { value: n2, mode: e2, compare: o2 } = t2.propsRef.current, p2 = t2.options.findIndex((l2) => {
    let s2 = l2.dataRef.current.value;
    return u$1(e2, { [1]: () => n2.some((r2) => o2(r2, s2)), [0]: () => o2(n2, s2) });
  });
  return p2 !== -1 && (i2 = p2), { ...t2, listboxState: 0, activeOptionIndex: i2 };
}, [2](t2, i2) {
  return t2.disabled === i2.disabled ? t2 : { ...t2, disabled: i2.disabled };
}, [3](t2, i2) {
  return t2.orientation === i2.orientation ? t2 : { ...t2, orientation: i2.orientation };
}, [4](t2, i2) {
  var o2;
  if (t2.disabled || t2.listboxState === 1)
    return t2;
  let n2 = H(t2), e2 = x$1(i2, { resolveItems: () => n2.options, resolveActiveIndex: () => n2.activeOptionIndex, resolveId: (p2) => p2.id, resolveDisabled: (p2) => p2.dataRef.current.disabled });
  return { ...t2, ...n2, searchQuery: "", activeOptionIndex: e2, activationTrigger: (o2 = i2.trigger) != null ? o2 : 1 };
}, [5]: (t2, i2) => {
  if (t2.disabled || t2.listboxState === 1)
    return t2;
  let e2 = t2.searchQuery !== "" ? 0 : 1, o2 = t2.searchQuery + i2.value.toLowerCase(), l2 = (t2.activeOptionIndex !== null ? t2.options.slice(t2.activeOptionIndex + e2).concat(t2.options.slice(0, t2.activeOptionIndex + e2)) : t2.options).find((u2) => {
    var r2;
    return !u2.dataRef.current.disabled && ((r2 = u2.dataRef.current.textValue) == null ? void 0 : r2.startsWith(o2));
  }), s2 = l2 ? t2.options.indexOf(l2) : -1;
  return s2 === -1 || s2 === t2.activeOptionIndex ? { ...t2, searchQuery: o2 } : { ...t2, searchQuery: o2, activeOptionIndex: s2, activationTrigger: 1 };
}, [6](t2) {
  return t2.disabled || t2.listboxState === 1 || t2.searchQuery === "" ? t2 : { ...t2, searchQuery: "" };
}, [7]: (t2, i2) => {
  let n2 = { id: i2.id, dataRef: i2.dataRef }, e2 = H(t2, (o2) => [...o2, n2]);
  if (t2.activeOptionIndex === null) {
    let { value: o2, mode: p2, compare: l2 } = t2.propsRef.current, s2 = i2.dataRef.current.value;
    u$1(p2, { [1]: () => o2.some((r2) => l2(r2, s2)), [0]: () => l2(o2, s2) }) && (e2.activeOptionIndex = e2.options.indexOf(n2));
  }
  return { ...t2, ...e2 };
}, [8]: (t2, i2) => {
  let n2 = H(t2, (e2) => {
    let o2 = e2.findIndex((p2) => p2.id === i2.id);
    return o2 !== -1 && e2.splice(o2, 1), e2;
  });
  return { ...t2, ...n2, activationTrigger: 1 };
} }, j = React.createContext(null);
j.displayName = "ListboxContext";
function w(t2) {
  let i2 = React.useContext(j);
  if (i2 === null) {
    let n2 = new Error(`<${t2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n2, w), n2;
  }
  return i2;
}
function ye(t2, i2) {
  return u$1(i2.type, xe, t2, i2);
}
let Oe = React.Fragment, me = H$1(function(i2, n2) {
  let { value: e$1, name: o2, onChange: p$12, disabled: l2 = false, horizontal: s2 = false, multiple: u2 = false, ...r2 } = i2;
  const x2 = s2 ? "horizontal" : "vertical";
  let A2 = y$1(n2), R2 = React.useReducer(ye, { listboxState: 1, propsRef: { current: { value: e$1, onChange: p$12, mode: u2 ? 1 : 0, compare: o$2((y2, m2) => y2 === m2) } }, labelRef: React.createRef(), buttonRef: React.createRef(), optionsRef: React.createRef(), disabled: l2, orientation: x2, options: [], searchQuery: "", activeOptionIndex: null, activationTrigger: 1 }), [{ listboxState: b$1, propsRef: O2, optionsRef: T2, buttonRef: d }, a2] = R2;
  O2.current.value = e$1, O2.current.mode = u2 ? 1 : 0, t$1(() => {
    O2.current.onChange = (y2) => u$1(O2.current.mode, { [0]() {
      return p$12(y2);
    }, [1]() {
      let m2 = O2.current.value.slice(), C2 = m2.indexOf(y2);
      return C2 === -1 ? m2.push(y2) : m2.splice(C2, 1), p$12(m2);
    } });
  }, [p$12, O2]), t$1(() => a2({ type: 2, disabled: l2 }), [l2]), t$1(() => a2({ type: 3, orientation: x2 }), [x2]), L([d, T2], (y2, m2) => {
    var C2;
    a2({ type: 1 }), S(m2, b.Loose) || (y2.preventDefault(), (C2 = d.current) == null || C2.focus());
  }, b$1 === 0);
  let c = React.useMemo(() => ({ open: b$1 === 0, disabled: l2 }), [b$1, l2]), D2 = { ref: A2 };
  return React.createElement(j.Provider, { value: R2 }, React.createElement(C, { value: u$1(b$1, { [0]: p.Open, [1]: p.Closed }) }, o2 != null && e$1 != null && e({ [o2]: e$1 }).map(([y2, m2]) => React.createElement(h, { features: s$1.Hidden, ...g({ key: y2, as: "input", type: "hidden", hidden: true, readOnly: true, name: y2, value: m2 }) })), _({ ourProps: D2, theirProps: r2, slot: c, defaultTag: Oe, name: "Listbox" })));
}), ge = "button", Re = H$1(function(i2, n2) {
  var T2;
  let [e2, o$12] = w("Listbox.Button"), p2 = y$1(e2.buttonRef, n2), l2 = `headlessui-listbox-button-${I()}`, s2 = p$2(), u2 = o$2((d) => {
    switch (d.key) {
      case o.Space:
      case o.Enter:
      case o.ArrowDown:
        d.preventDefault(), o$12({ type: 0 }), s2.nextFrame(() => {
          e2.propsRef.current.value || o$12({ type: 4, focus: a$1.First });
        });
        break;
      case o.ArrowUp:
        d.preventDefault(), o$12({ type: 0 }), s2.nextFrame(() => {
          e2.propsRef.current.value || o$12({ type: 4, focus: a$1.Last });
        });
        break;
    }
  }), r$12 = o$2((d) => {
    switch (d.key) {
      case o.Space:
        d.preventDefault();
        break;
    }
  }), x2 = o$2((d) => {
    if (r(d.currentTarget))
      return d.preventDefault();
    e2.listboxState === 0 ? (o$12({ type: 1 }), s2.nextFrame(() => {
      var a2;
      return (a2 = e2.buttonRef.current) == null ? void 0 : a2.focus({ preventScroll: true });
    })) : (d.preventDefault(), o$12({ type: 0 }));
  }), A2 = i$2(() => {
    if (!!e2.labelRef.current)
      return [e2.labelRef.current.id, l2].join(" ");
  }, [e2.labelRef.current, l2]), R2 = React.useMemo(() => ({ open: e2.listboxState === 0, disabled: e2.disabled }), [e2]), b2 = i2, O2 = { ref: p2, id: l2, type: s$3(i2, e2.buttonRef), "aria-haspopup": true, "aria-controls": (T2 = e2.optionsRef.current) == null ? void 0 : T2.id, "aria-expanded": e2.disabled ? void 0 : e2.listboxState === 0, "aria-labelledby": A2, disabled: e2.disabled, onKeyDown: u2, onKeyUp: r$12, onClick: x2 };
  return _({ ourProps: O2, theirProps: b2, slot: R2, defaultTag: ge, name: "Listbox.Button" });
}), Le = "label", ve = H$1(function(i2, n2) {
  let [e2] = w("Listbox.Label"), o2 = `headlessui-listbox-label-${I()}`, p2 = y$1(e2.labelRef, n2), l2 = o$2(() => {
    var x2;
    return (x2 = e2.buttonRef.current) == null ? void 0 : x2.focus({ preventScroll: true });
  }), s2 = React.useMemo(() => ({ open: e2.listboxState === 0, disabled: e2.disabled }), [e2]);
  return _({ ourProps: { ref: p2, id: o2, onClick: l2 }, theirProps: i2, slot: s2, defaultTag: Le, name: "Listbox.Label" });
}), Se = "ul", Ae = x.RenderStrategy | x.Static, he = H$1(function(i2, n2) {
  var d;
  let [e2, o$12] = w("Listbox.Options"), p$12 = y$1(e2.optionsRef, n2), l2 = `headlessui-listbox-options-${I()}`, s$12 = p$2(), u2 = p$2(), r2 = s(), x2 = (() => r2 !== null ? r2 === p.Open : e2.listboxState === 0)();
  React.useEffect(() => {
    var c;
    let a2 = e2.optionsRef.current;
    !a2 || e2.listboxState === 0 && a2 !== ((c = t(a2)) == null ? void 0 : c.activeElement) && a2.focus({ preventScroll: true });
  }, [e2.listboxState, e2.optionsRef]);
  let A2 = o$2((a2) => {
    switch (u2.dispose(), a2.key) {
      case o.Space:
        if (e2.searchQuery !== "")
          return a2.preventDefault(), a2.stopPropagation(), o$12({ type: 5, value: a2.key });
      case o.Enter:
        if (a2.preventDefault(), a2.stopPropagation(), e2.activeOptionIndex !== null) {
          let { dataRef: c } = e2.options[e2.activeOptionIndex];
          e2.propsRef.current.onChange(c.current.value);
        }
        e2.propsRef.current.mode === 0 && (o$12({ type: 1 }), o$3().nextFrame(() => {
          var c;
          return (c = e2.buttonRef.current) == null ? void 0 : c.focus({ preventScroll: true });
        }));
        break;
      case u$1(e2.orientation, { vertical: o.ArrowDown, horizontal: o.ArrowRight }):
        return a2.preventDefault(), a2.stopPropagation(), o$12({ type: 4, focus: a$1.Next });
      case u$1(e2.orientation, { vertical: o.ArrowUp, horizontal: o.ArrowLeft }):
        return a2.preventDefault(), a2.stopPropagation(), o$12({ type: 4, focus: a$1.Previous });
      case o.Home:
      case o.PageUp:
        return a2.preventDefault(), a2.stopPropagation(), o$12({ type: 4, focus: a$1.First });
      case o.End:
      case o.PageDown:
        return a2.preventDefault(), a2.stopPropagation(), o$12({ type: 4, focus: a$1.Last });
      case o.Escape:
        return a2.preventDefault(), a2.stopPropagation(), o$12({ type: 1 }), s$12.nextFrame(() => {
          var c;
          return (c = e2.buttonRef.current) == null ? void 0 : c.focus({ preventScroll: true });
        });
      case o.Tab:
        a2.preventDefault(), a2.stopPropagation();
        break;
      default:
        a2.key.length === 1 && (o$12({ type: 5, value: a2.key }), u2.setTimeout(() => o$12({ type: 6 }), 350));
        break;
    }
  }), R2 = i$2(() => {
    var a2, c, D2;
    return (D2 = (a2 = e2.labelRef.current) == null ? void 0 : a2.id) != null ? D2 : (c = e2.buttonRef.current) == null ? void 0 : c.id;
  }, [e2.labelRef.current, e2.buttonRef.current]), b2 = React.useMemo(() => ({ open: e2.listboxState === 0 }), [e2]), O2 = i2, T2 = { "aria-activedescendant": e2.activeOptionIndex === null || (d = e2.options[e2.activeOptionIndex]) == null ? void 0 : d.id, "aria-multiselectable": e2.propsRef.current.mode === 1 ? true : void 0, "aria-labelledby": R2, "aria-orientation": e2.orientation, id: l2, onKeyDown: A2, role: "listbox", tabIndex: 0, ref: p$12 };
  return _({ ourProps: T2, theirProps: O2, slot: b2, defaultTag: Se, features: Ae, visible: x2, name: "Listbox.Options" });
}), Pe = "li", De = H$1(function(i2, n2) {
  let { disabled: e2 = false, value: o2, ...p2 } = i2, [l2, s2] = w("Listbox.Option"), u2 = `headlessui-listbox-option-${I()}`, r2 = l2.activeOptionIndex !== null ? l2.options[l2.activeOptionIndex].id === u2 : false, { value: x2, compare: A2 } = l2.propsRef.current, R2 = u$1(l2.propsRef.current.mode, { [1]: () => x2.some((S2) => A2(S2, o2)), [0]: () => A2(x2, o2) }), b2 = React.useRef(null), O2 = y$1(n2, b2);
  t$1(() => {
    if (l2.listboxState !== 0 || !r2 || l2.activationTrigger === 0)
      return;
    let S2 = o$3();
    return S2.requestAnimationFrame(() => {
      var L2, K2;
      (K2 = (L2 = b2.current) == null ? void 0 : L2.scrollIntoView) == null || K2.call(L2, { block: "nearest" });
    }), S2.dispose;
  }, [b2, r2, l2.listboxState, l2.activationTrigger, l2.activeOptionIndex]);
  let T2 = React.useRef({ disabled: e2, value: o2, domRef: b2 });
  t$1(() => {
    T2.current.disabled = e2;
  }, [T2, e2]), t$1(() => {
    T2.current.value = o2;
  }, [T2, o2]), t$1(() => {
    var S2, L2;
    T2.current.textValue = (L2 = (S2 = b2.current) == null ? void 0 : S2.textContent) == null ? void 0 : L2.toLowerCase();
  }, [T2, b2]);
  let d = o$2(() => l2.propsRef.current.onChange(o2));
  t$1(() => (s2({ type: 7, id: u2, dataRef: T2 }), () => s2({ type: 8, id: u2 })), [T2, u2]);
  let a2 = o$2((S2) => {
    if (e2)
      return S2.preventDefault();
    d(), l2.propsRef.current.mode === 0 && (s2({ type: 1 }), o$3().nextFrame(() => {
      var L2;
      return (L2 = l2.buttonRef.current) == null ? void 0 : L2.focus({ preventScroll: true });
    }));
  }), c = o$2(() => {
    if (e2)
      return s2({ type: 4, focus: a$1.Nothing });
    s2({ type: 4, focus: a$1.Specific, id: u2 });
  }), D2 = o$2(() => {
    e2 || r2 || s2({ type: 4, focus: a$1.Specific, id: u2, trigger: 0 });
  }), y2 = o$2(() => {
    e2 || !r2 || s2({ type: 4, focus: a$1.Nothing });
  }), m2 = React.useMemo(() => ({ active: r2, selected: R2, disabled: e2 }), [r2, R2, e2]);
  return _({ ourProps: { id: u2, ref: O2, role: "option", tabIndex: e2 === true ? void 0 : -1, "aria-disabled": e2 === true ? true : void 0, "aria-selected": R2 === true ? true : void 0, disabled: void 0, onClick: a2, onFocus: c, onPointerMove: D2, onMouseMove: D2, onPointerLeave: y2, onMouseLeave: y2 }, theirProps: p2, slot: m2, defaultTag: Pe, name: "Listbox.Option" });
}), rt = Object.assign(me, { Button: Re, Label: ve, Options: he, Option: De });
const Button = "_Button_17sow_1";
const Menu = "_Menu_17sow_52";
const Copy = "_Copy_17sow_60";
const Visible = "_Visible_17sow_67";
const Invisible = "_Invisible_17sow_77";
const State = "_State_17sow_82";
const OK = "_OK_17sow_86";
const Icon = "_Icon_17sow_90";
const Editor = "_Editor_17sow_95";
const Loading = "_Loading_17sow_115";
const Code = "_Code_17sow_133";
const Text = "_Text_17sow_163";
const Option = "_Option_17sow_179";
const DevOptions = "_DevOptions_17sow_227";
const Output = "_Output_17sow_231";
const Form = "_Form_17sow_250";
const Build = "_Build_17sow_281";
const Item = "_Item_17sow_290";
var styles = {
  "Run-Code": "_Run-Code_17sow_1",
  Button,
  Menu,
  Copy,
  Visible,
  Invisible,
  State,
  OK,
  Icon,
  "Editor-Box": "_Editor-Box_17sow_95",
  Editor,
  Loading,
  Code,
  "Help-Text": "_Help-Text_17sow_137",
  "List-Box": "_List-Box_17sow_142",
  "Button-Box": "_Button-Box_17sow_146",
  Text,
  "Option-List": "_Option-List_17sow_179",
  Option,
  "Menu-List": "_Menu-List_17sow_214",
  "Edit-Icon": "_Edit-Icon_17sow_219",
  DevOptions,
  "Output-Header": "_Output-Header_17sow_231",
  Output,
  Form,
  "More-Options": "_More-Options_17sow_266",
  Build,
  Item,
  "lds-grid": "_lds-grid_17sow_298"
};
const Widget$2 = ({ languageList, language, onChange }) => {
  return /* @__PURE__ */ React.createElement(rt, {
    value: language,
    onChange
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles["List-Box"]
  }, /* @__PURE__ */ React.createElement(rt.Button, {
    className: styles["Button-Box"]
  }, /* @__PURE__ */ React.createElement("span", {
    className: styles.Text
  }, language), /* @__PURE__ */ React.createElement("span", {
    className: styles.Icon
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "20px",
    viewBox: "0 0 24 24",
    width: "20px",
    fill: "#fff"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"
  })))), /* @__PURE__ */ React.createElement(rt.Options, {
    className: styles["Option-List"]
  }, languageList.map((lang, index2) => /* @__PURE__ */ React.createElement(rt.Option, {
    key: index2,
    className: styles.Option,
    value: lang
  }, ({ selected, active }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
    style: { minWidth: "60px" },
    className: `${selected ? "font-medium" : "font-normal"} truncate Text-Small`
  }, lang), selected ? /* @__PURE__ */ React.createElement("span", {
    className: "flex items-center pl-4"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "20px",
    viewBox: "0 0 24 24",
    width: "20px",
    fill: "#3b82f6"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"
  }))) : null))))));
};
const STAGE_NO_STARTED = 0;
const STAGE_RUNNING = 1;
const STAGE_BUILDING = 2;
const STAGE_SETUP = 3;
function getEditorLanguage(language) {
  if (language === "Python 3" || language === "Python 2") {
    return "python";
  } else if (language === "C++") {
    return "cpp";
  } else if (language) {
    return language.toLowerCase();
  }
  return language;
}
function renderCopyIcon(color = "#333333") {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    className: styles.Icon,
    viewBox: "0 0 24 24",
    width: "24px",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
  }));
}
function renderOkIcon(color = "#333333") {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: styles.Icon,
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"
  }));
}
const Widget$1 = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: styles["lds-grid"]
  }, /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("div", null));
};
const Widget = ({ options }) => {
  const {
    input,
    onChange,
    onExecuted,
    onError,
    mode = "display",
    api: { post, get, connectWebSocket, showLoading, showCode }
  } = options;
  const [languages, setLanguages] = React.useState([]);
  const [language, setLanguage] = React.useState();
  const [dataMap, setDataMap] = React.useState({});
  const [copied, setCopied] = React.useState();
  const [stage, setStage] = React.useState(STAGE_NO_STARTED);
  const [runtime, setRuntime] = React.useState();
  const [output, setOutput] = React.useState();
  const [buildOutput, setBuildOutput] = React.useState();
  const [errorOutput, setErrorOutput] = React.useState();
  const [moreOption, setMoreOptions] = React.useState(false);
  const [visible, setVisible] = React.useState();
  const [devMode, setDevMode] = React.useState();
  const [editMode, setEditMode] = React.useState();
  const [data, setData] = React.useState();
  const buildRef = React.useRef();
  const outputRef = React.useRef();
  const errorRef = React.useRef();
  const Code2 = React.useCallback((props) => {
    return showCode(props);
  }, []);
  const getLanguages = React.useCallback(async () => {
    try {
      const res = await get("/api/compiler/languages");
      setLanguages(res.data.languages);
    } catch (err) {
      onError(err.msg);
    }
  }, [get, setLanguages, onError]);
  const code = React.useMemo(() => {
    var _a;
    return ((_a = dataMap[language]) == null ? void 0 : _a.code) || "";
  }, [language, dataMap, data]);
  React.useEffect(() => {
    var _a;
    setData(((_a = dataMap[language]) == null ? void 0 : _a.code) || "");
  }, [language, dataMap]);
  const getDependencies = React.useCallback(() => {
    var _a;
    return ((_a = dataMap[language]) == null ? void 0 : _a.dependencies) || "";
  }, [language, dataMap]);
  const getStage = React.useCallback(() => {
    switch (stage) {
      case STAGE_NO_STARTED:
        return "\u8FD0\u884C\u4EE3\u7801";
      case STAGE_SETUP:
        return "\u51C6\u5907\u73AF\u5883";
      case STAGE_BUILDING:
        return "\u6B63\u5728\u7F16\u8BD1";
      case STAGE_RUNNING:
        return "\u6B63\u5728\u8FD0\u884C";
    }
  }, [stage]);
  React.useEffect(() => {
    if (mode !== "edit") {
      return;
    }
    getLanguages();
  }, [mode]);
  const handleRunStage = React.useCallback((data2) => {
    setStage(STAGE_RUNNING);
    setOutput((prev) => {
      outputRef.current = (prev ? prev : "") + data2.output;
      return outputRef.current;
    });
  }, []);
  const handleBuildStage = React.useCallback((data2) => {
    setStage(STAGE_BUILDING);
    setBuildOutput((prev) => {
      return (prev ? prev : "") + data2.output;
    });
    if (!buildRef.current) {
      return;
    }
    buildRef.current.scrollTo({
      top: buildRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, []);
  const handleCompleteStage = React.useCallback((data2, ws) => {
    ws.close();
    setStage(STAGE_NO_STARTED);
    setRuntime(data2.runtime);
    onExecuted(outputRef.current);
  }, [onExecuted]);
  const handleErrorStage = React.useCallback((data2, ws) => {
    console.log(data2);
    ws.close();
    setStage(STAGE_NO_STARTED);
  }, []);
  const handleErrorOutput = React.useCallback((data2) => {
    if (!data2.error) {
      return;
    }
    setErrorOutput((prev) => {
      return (prev ? prev : "") + data2.error;
    });
    if (!errorRef.current) {
      return;
    }
    errorRef.current.scrollTo({
      top: errorRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, []);
  const handleMessage = React.useCallback((ws, e2) => {
    const data2 = JSON.parse(e2.data);
    switch (data2.stage) {
      case "run":
        handleRunStage(data2);
        break;
      case "complete":
        handleCompleteStage(data2, ws);
        break;
      case "error":
        handleErrorStage(data2, ws);
        break;
      case "build":
        handleBuildStage(data2);
        break;
    }
    handleErrorOutput(data2);
  }, [handleCompleteStage]);
  const connectSocket = React.useCallback(async (runId) => {
    const ws = connectWebSocket(`/ws/compiler/${runId}`);
    ws.onmessage = (e2) => {
      handleMessage(ws, e2);
    };
  }, [handleMessage, connectWebSocket]);
  const runCode = React.useCallback(async () => {
    onExecuted(null);
    setStage(STAGE_SETUP);
    setOutput(null);
    setBuildOutput(null);
    setErrorOutput(null);
    setRuntime(null);
    try {
      let data2 = {
        language,
        data: JSON.stringify(dataMap[language])
      };
      const res = await post("/api/compiler/run", data2);
      connectSocket(res.data.runId);
    } catch (err) {
      setStage(STAGE_NO_STARTED);
      onError(err.msg);
    }
  }, [language, dataMap, connectSocket, onExecuted]);
  React.useEffect(() => {
    let defaultLanguage = "Java";
    try {
      const map = JSON.parse(input);
      if (map) {
        setDataMap(map);
        const keys = Object.keys(map).sort();
        if (keys.length != 0) {
          defaultLanguage = keys[0];
        }
        if (mode === "display") {
          setLanguages(keys);
        }
      }
    } catch (e2) {
      console.log(e2);
    } finally {
      if (!language) {
        setLanguage(defaultLanguage);
      }
    }
  }, [input]);
  const renderHelpText = React.useCallback(() => {
    if (language === "Java") {
      return /* @__PURE__ */ React.createElement("div", {
        className: styles["Help-Text"]
      }, "\u6CE8\u610F: \u8FD9\u4E2AJava\u8FD0\u884C\u73AF\u5883\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u5305\u540D\uFF0C\u5E76\u4E14public class name\u5FC5\u987B\u662FMain");
    }
  }, [language]);
  const renderConfig = React.useCallback(() => {
    if (language === "Java" || language === "Kotlin") {
      return /* @__PURE__ */ React.createElement("div", {
        className: styles.Form
      }, /* @__PURE__ */ React.createElement(TextareaAutosize$1, {
        placeholder: "\u7B2C\u4E09\u65B9\u4F9D\u8D56\u914D\u7F6E",
        value: getDependencies(),
        onChange: (e2) => {
          if (!!e2.target.value.trim() || !!code) {
            if (dataMap[language]) {
              dataMap[language]["dependencies"] = e2.target.value;
            } else {
              dataMap[language] = { dependencies: e2.target.value };
            }
          } else {
            delete dataMap[language];
          }
          const value = JSON.stringify(dataMap);
          setDataMap(JSON.parse(value));
          if (onChange) {
            onChange(value);
          }
        }
      }));
    }
  }, [language, dataMap, onChange, getDependencies, code]);
  return /* @__PURE__ */ React.createElement("div", {
    className: styles["Run-Code"]
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles["Editor-Box"]
  }, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement(Widget$2, {
    languageList: languages,
    language,
    onChange: setLanguage
  }), /* @__PURE__ */ React.createElement("div", {
    className: styles.Menu
  }, /* @__PURE__ */ React.createElement(lib.CopyToClipboard, {
    text: code,
    onCopy: () => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3e3);
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.Copy
  }, /* @__PURE__ */ React.createElement("div", {
    className: `${styles.State} ${!copied ? styles.Visible : styles.Invisible}`
  }, renderCopyIcon("#fff")), /* @__PURE__ */ React.createElement("div", {
    className: `${styles.OK} ${styles.State} ${copied ? styles.Visible : styles.Invisible}`
  }, renderOkIcon("#fff")))))), /* @__PURE__ */ React.createElement("div", {
    className: styles.Editor
  }, !visible && /* @__PURE__ */ React.createElement("div", {
    className: styles.Loading
  }, showLoading()), /* @__PURE__ */ React.createElement(TextareaAutosize$1, {
    value: data,
    className: editMode ? styles.Visible : styles.Invisible,
    onChange: (e2) => {
      const value = e2.target.value;
      setData(value);
      if (!!value.trim() || !!getDependencies()) {
        if (dataMap[language]) {
          dataMap[language]["code"] = value;
        } else {
          dataMap[language] = { code: value };
        }
      } else {
        delete dataMap[language];
      }
      if (onChange) {
        onChange(JSON.stringify(dataMap));
      }
    }
  }), /* @__PURE__ */ React.createElement("div", {
    className: `${styles.Code} ${editMode ? styles.Invisible : styles.Visible}`
  }, /* @__PURE__ */ React.createElement(Code2, {
    language: getEditorLanguage(language),
    code,
    onLoaded: () => {
      setVisible(true);
    }
  })))), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("div", {
    className: styles["Menu-List"]
  }, /* @__PURE__ */ React.createElement("button", {
    disabled: stage != STAGE_NO_STARTED,
    onClick: () => runCode(),
    className: styles.Button
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
    fill: "#fff"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"
  })), getStage()), /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setEditMode((prev) => !prev);
    },
    className: styles.Button
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "17px",
    viewBox: "0 0 24 24",
    width: "17px",
    fill: "#fff",
    className: styles["Edit-Icon"]
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
  })), editMode ? "\u5B8C\u6210" : "\u7F16\u8F91")), /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
    onClick: () => {
      setDevMode((prev) => !prev);
    },
    className: styles.DevOptions,
    fill: `${devMode ? "#fff" : "#999"}`
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M7.68,14.98H6V9h1.71 c1.28,0,1.71,1.03,1.71,1.71l0,2.56C9.42,13.95,9,14.98,7.68,14.98z M12.38,11.46v1.07h-1.18v1.39h1.93v1.07h-2.25 c-0.4,0.01-0.74-0.31-0.75-0.71V9.75c-0.01-0.4,0.31-0.74,0.71-0.75h2.28l0,1.07h-1.92v1.39H12.38z M16.88,14.23 c-0.48,1.11-1.33,0.89-1.71,0L13.77,9h1.18l1.07,4.11L17.09,9h1.18L16.88,14.23z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7.77,10.12H7.14v3.77h0.63c0.14,0,0.28-0.05,0.42-0.16c0.14-0.1,0.21-0.26,0.21-0.47v-2.52c0-0.21-0.07-0.37-0.21-0.47 C8.05,10.17,7.91,10.12,7.77,10.12z"
  }))), moreOption && mode === "edit" ? renderConfig() : null, mode === "edit" && /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setMoreOptions((previous) => !previous);
    },
    className: styles["More-Options"]
  }, moreOption ? "\u6536\u8D77\u9009\u9879" : "\u66F4\u591A\u9009\u9879"), renderHelpText(), devMode && buildOutput ? /* @__PURE__ */ React.createElement("div", {
    className: styles.Build
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles["Output-Header"]
  }, /* @__PURE__ */ React.createElement("div", null, "\u7F16\u8BD1\u65E5\u5FD7")), /* @__PURE__ */ React.createElement("pre", {
    ref: buildRef,
    className: styles.Output
  }, HTMLReactParser$1(buildOutput)), stage === STAGE_BUILDING ? /* @__PURE__ */ React.createElement(Widget$1, null) : null) : null, errorOutput ? /* @__PURE__ */ React.createElement("div", {
    className: styles.Build
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles["Output-Header"]
  }, /* @__PURE__ */ React.createElement("div", null, "\u9519\u8BEF\u65E5\u5FD7")), /* @__PURE__ */ React.createElement("pre", {
    ref: errorRef,
    className: styles.Output
  }, HTMLReactParser$1(errorOutput)), stage !== STAGE_NO_STARTED ? /* @__PURE__ */ React.createElement(Widget$1, null) : null) : null, output ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: styles["Output-Header"]
  }, /* @__PURE__ */ React.createElement("div", null, "\u8F93\u51FA\u7ED3\u679C"), runtime ? /* @__PURE__ */ React.createElement("div", null, runtime) : null), /* @__PURE__ */ React.createElement("pre", {
    className: styles.Output
  }, output, stage === STAGE_RUNNING ? /* @__PURE__ */ React.createElement(Widget$1, null) : null)) : null);
};
export { Widget as default };
