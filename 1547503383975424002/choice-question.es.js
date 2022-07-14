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
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
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
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
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
var l = objectAssign, n = 60103, p = 60106;
react_production_min.Fragment = 60107;
react_production_min.StrictMode = 60108;
react_production_min.Profiler = 60114;
var q = 60109, r = 60110, t = 60112;
react_production_min.Suspense = 60113;
var u = 60115, v = 60116;
if ("function" === typeof Symbol && Symbol.for) {
  var w = Symbol.for;
  n = w("react.element");
  p = w("react.portal");
  react_production_min.Fragment = w("react.fragment");
  react_production_min.StrictMode = w("react.strict_mode");
  react_production_min.Profiler = w("react.profiler");
  q = w("react.provider");
  r = w("react.context");
  t = w("react.forward_ref");
  react_production_min.Suspense = w("react.suspense");
  u = w("react.memo");
  v = w("react.lazy");
}
var x = "function" === typeof Symbol && Symbol.iterator;
function y(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = x && a[x] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
function z(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var A = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, B = {};
function C(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}
C.prototype.isReactComponent = {};
C.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error(z(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};
C.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function D() {
}
D.prototype = C.prototype;
function E(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}
var F = E.prototype = new D();
F.constructor = E;
l(F, C.prototype);
F.isPureReactComponent = true;
var G = { current: null }, H = Object.prototype.hasOwnProperty, I = { key: true, ref: true, __self: true, __source: true };
function J(a, b, c) {
  var e, d = {}, k = null, h = null;
  if (null != b)
    for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)
      H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
  var g = arguments.length - 2;
  if (1 === g)
    d.children = c;
  else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++)
      f[m] = arguments[m + 2];
    d.children = f;
  }
  if (a && a.defaultProps)
    for (e in g = a.defaultProps, g)
      void 0 === d[e] && (d[e] = g[e]);
  return { $$typeof: n, type: a, key: k, ref: h, props: d, _owner: G.current };
}
function K(a, b) {
  return { $$typeof: n, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function L(a) {
  return "object" === typeof a && null !== a && a.$$typeof === n;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var M = /\/+/g;
function N(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function O(a, b, c, e, d) {
  var k = typeof a;
  if ("undefined" === k || "boolean" === k)
    a = null;
  var h = false;
  if (null === a)
    h = true;
  else
    switch (k) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case n:
          case p:
            h = true;
        }
    }
  if (h)
    return h = a, d = d(h), a = "" === e ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function(a2) {
      return a2;
    })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
  h = 0;
  e = "" === e ? "." : e + ":";
  if (Array.isArray(a))
    for (var g = 0; g < a.length; g++) {
      k = a[g];
      var f = e + N(k, g);
      h += O(k, b, c, f, d);
    }
  else if (f = y(a), "function" === typeof f)
    for (a = f.call(a), g = 0; !(k = a.next()).done; )
      k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);
  else if ("object" === k)
    throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h;
}
function P(a, b, c) {
  if (null == a)
    return a;
  var e = [], d = 0;
  O(a, e, "", "", function(a2) {
    return b.call(c, a2, d++);
  });
  return e;
}
function Q(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    a._status = 0;
    a._result = b;
    b.then(function(b2) {
      0 === a._status && (b2 = b2.default, a._status = 1, a._result = b2);
    }, function(b2) {
      0 === a._status && (a._status = 2, a._result = b2);
    });
  }
  if (1 === a._status)
    return a._result;
  throw a._result;
}
var R = { current: null };
function S() {
  var a = R.current;
  if (null === a)
    throw Error(z(321));
  return a;
}
var T = { ReactCurrentDispatcher: R, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G, IsSomeRendererActing: { current: false }, assign: l };
react_production_min.Children = { map: P, forEach: function(a, b, c) {
  P(a, function() {
    b.apply(this, arguments);
  }, c);
}, count: function(a) {
  var b = 0;
  P(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return P(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!L(a))
    throw Error(z(143));
  return a;
} };
react_production_min.Component = C;
react_production_min.PureComponent = E;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;
react_production_min.cloneElement = function(a, b, c) {
  if (null === a || void 0 === a)
    throw Error(z(267, a));
  var e = l({}, a.props), d = a.key, k = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = G.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f in b)
      H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (1 === f)
    e.children = c;
  else if (1 < f) {
    g = Array(f);
    for (var m = 0; m < f; m++)
      g[m] = arguments[m + 2];
    e.children = g;
  }
  return {
    $$typeof: n,
    type: a.type,
    key: d,
    ref: k,
    props: e,
    _owner: h
  };
};
react_production_min.createContext = function(a, b) {
  void 0 === b && (b = null);
  a = { $$typeof: r, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
  a.Provider = { $$typeof: q, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = J;
react_production_min.createFactory = function(a) {
  var b = J.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: t, render: a };
};
react_production_min.isValidElement = L;
react_production_min.lazy = function(a) {
  return { $$typeof: v, _payload: { _status: -1, _result: a }, _init: Q };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: u, type: a, compare: void 0 === b ? null : b };
};
react_production_min.useCallback = function(a, b) {
  return S().useCallback(a, b);
};
react_production_min.useContext = function(a, b) {
  return S().useContext(a, b);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useEffect = function(a, b) {
  return S().useEffect(a, b);
};
react_production_min.useImperativeHandle = function(a, b, c) {
  return S().useImperativeHandle(a, b, c);
};
react_production_min.useLayoutEffect = function(a, b) {
  return S().useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return S().useMemo(a, b);
};
react_production_min.useReducer = function(a, b, c) {
  return S().useReducer(a, b, c);
};
react_production_min.useRef = function(a) {
  return S().useRef(a);
};
react_production_min.useState = function(a) {
  return S().useState(a);
};
react_production_min.version = "17.0.2";
{
  react.exports = react_production_min;
}
var lib$2 = {};
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
Object.defineProperty(lib$2, "__esModule", { value: true });
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
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
      if (i && _arr.length === i)
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
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
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
var _require = possibleStandardNamesOptimized$1, CAMELCASE = _require.CAMELCASE, SAME = _require.SAME, possibleStandardNamesOptimized = _require.possibleStandardNames;
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
lib$2.BOOLEAN = BOOLEAN;
lib$2.BOOLEANISH_STRING = BOOLEANISH_STRING;
lib$2.NUMERIC = NUMERIC;
lib$2.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
lib$2.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
lib$2.RESERVED = RESERVED;
lib$2.STRING = STRING;
lib$2.getPropertyInfo = getPropertyInfo;
lib$2.isCustomAttribute = isCustomAttribute;
lib$2.possibleStandardNames = possibleStandardNames;
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
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
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
    var m = re.exec(style);
    if (!m)
      return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
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
    var i = 2;
    while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) {
      ++i;
    }
    i += 2;
    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error("End of comment missing");
    }
    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
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
  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
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
var reactProperty = lib$2;
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
  for (var i = 0, len = nodes.length; i < len; i++) {
    node2 = nodes[i];
    if (hasReplace) {
      replaceElement = options.replace(node2);
      if (isValidElement(replaceElement)) {
        if (len > 1) {
          replaceElement = cloneElement(replaceElement, {
            key: replaceElement.key || i
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
      props.key = i;
    }
    result.push(createElement(node2.name, props, children));
  }
  return result.length === 1 ? result[0] : result;
}
function skipAttributesToProps(node2) {
  return utilities$1.PRESERVE_CUSTOM_ATTRIBUTES && node2.type === "tag" && utilities$1.isCustomComponent(node2.name, node2.attribs);
}
var domToReact_1 = domToReact$1;
var HTML = "html";
var HEAD = "head";
var BODY = "body";
var FIRST_TAG_REGEX = /<([a-zA-Z]+[0-9]?)/;
var HEAD_TAG_REGEX = /<head[^]*>/i;
var BODY_TAG_REGEX = /<body[^]*>/i;
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
  var doc = document.implementation.createHTMLDocument();
  parseFromDocument = function(html, tagName2) {
    if (tagName2) {
      var element = doc.documentElement.querySelector(tagName2);
      element.innerHTML = html;
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
        element = doc.querySelector(HEAD);
        if (element) {
          element.parentNode.removeChild(element);
        }
      }
      if (!BODY_TAG_REGEX.test(html)) {
        element = doc.querySelector(BODY);
        if (element) {
          element.parentNode.removeChild(element);
        }
      }
      return doc.querySelectorAll(HTML);
    case HEAD:
    case BODY:
      doc = parseFromDocument(html);
      elements = doc.querySelectorAll(firstTagName);
      if (BODY_TAG_REGEX.test(html) && HEAD_TAG_REGEX.test(html)) {
        return elements[0].parentNode.childNodes;
      }
      return elements;
    default:
      if (parseFromTemplate) {
        return parseFromTemplate(html);
      }
      element = parseFromDocument(html, BODY).querySelector(BODY);
      return element.childNodes;
  }
}
var domparser_1 = domparser$1;
var utilities = {};
var lib$1 = {};
var lib = {};
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
})(lib);
var node = {};
var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
  __assign = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
Object.defineProperty(node, "__esModule", { value: true });
node.cloneNode = node.hasChildren = node.isDocument = node.isDirective = node.isComment = node.isText = node.isCDATA = node.isTag = node.Element = node.Document = node.CDATA = node.NodeWithChildren = node.ProcessingInstruction = node.Comment = node.Text = node.DataNode = node.Node = void 0;
var domelementtype_1 = lib;
var Node = function() {
  function Node2() {
    this.parent = null;
    this.prev = null;
    this.next = null;
    this.startIndex = null;
    this.endIndex = null;
  }
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
node.Node = Node;
var DataNode = function(_super) {
  __extends(DataNode2, _super);
  function DataNode2(data) {
    var _this = _super.call(this) || this;
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
}(Node);
node.DataNode = DataNode;
var Text$1 = function(_super) {
  __extends(Text2, _super);
  function Text2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = domelementtype_1.ElementType.Text;
    return _this;
  }
  Object.defineProperty(Text2.prototype, "nodeType", {
    get: function() {
      return 3;
    },
    enumerable: false,
    configurable: true
  });
  return Text2;
}(DataNode);
node.Text = Text$1;
var Comment$1 = function(_super) {
  __extends(Comment2, _super);
  function Comment2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = domelementtype_1.ElementType.Comment;
    return _this;
  }
  Object.defineProperty(Comment2.prototype, "nodeType", {
    get: function() {
      return 8;
    },
    enumerable: false,
    configurable: true
  });
  return Comment2;
}(DataNode);
node.Comment = Comment$1;
var ProcessingInstruction$1 = function(_super) {
  __extends(ProcessingInstruction2, _super);
  function ProcessingInstruction2(name, data) {
    var _this = _super.call(this, data) || this;
    _this.name = name;
    _this.type = domelementtype_1.ElementType.Directive;
    return _this;
  }
  Object.defineProperty(ProcessingInstruction2.prototype, "nodeType", {
    get: function() {
      return 1;
    },
    enumerable: false,
    configurable: true
  });
  return ProcessingInstruction2;
}(DataNode);
node.ProcessingInstruction = ProcessingInstruction$1;
var NodeWithChildren = function(_super) {
  __extends(NodeWithChildren2, _super);
  function NodeWithChildren2(children) {
    var _this = _super.call(this) || this;
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
}(Node);
node.NodeWithChildren = NodeWithChildren;
var CDATA = function(_super) {
  __extends(CDATA2, _super);
  function CDATA2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = domelementtype_1.ElementType.CDATA;
    return _this;
  }
  Object.defineProperty(CDATA2.prototype, "nodeType", {
    get: function() {
      return 4;
    },
    enumerable: false,
    configurable: true
  });
  return CDATA2;
}(NodeWithChildren);
node.CDATA = CDATA;
var Document = function(_super) {
  __extends(Document2, _super);
  function Document2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = domelementtype_1.ElementType.Root;
    return _this;
  }
  Object.defineProperty(Document2.prototype, "nodeType", {
    get: function() {
      return 9;
    },
    enumerable: false,
    configurable: true
  });
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
    var _this = _super.call(this, children) || this;
    _this.name = name;
    _this.attribs = attribs;
    _this.type = type;
    return _this;
  }
  Object.defineProperty(Element2.prototype, "nodeType", {
    get: function() {
      return 1;
    },
    enumerable: false,
    configurable: true
  });
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
    result = new Text$1(node2.data);
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
    var clone_2 = new CDATA(children);
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
  for (var i = 1; i < children.length; i++) {
    children[i].prev = children[i - 1];
    children[i - 1].next = children[i];
  }
  return children;
}
(function(exports) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports2) {
    for (var p2 in m)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DomHandler = void 0;
  var domelementtype_12 = lib;
  var node_js_1 = node;
  __exportStar(node, exports);
  var defaultOpts = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false
  };
  var DomHandler = function() {
    function DomHandler2(callback, options, elementCB) {
      this.dom = [];
      this.root = new node_js_1.Document(this.dom);
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
      this.root = new node_js_1.Document(this.dom);
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
      var element = new node_js_1.Element(name, attribs, void 0, type);
      this.addNode(element);
      this.tagStack.push(element);
    };
    DomHandler2.prototype.ontext = function(data) {
      var lastNode = this.lastNode;
      if (lastNode && lastNode.type === domelementtype_12.ElementType.Text) {
        lastNode.data += data;
        if (this.options.withEndIndices) {
          lastNode.endIndex = this.parser.endIndex;
        }
      } else {
        var node2 = new node_js_1.Text(data);
        this.addNode(node2);
        this.lastNode = node2;
      }
    };
    DomHandler2.prototype.oncomment = function(data) {
      if (this.lastNode && this.lastNode.type === domelementtype_12.ElementType.Comment) {
        this.lastNode.data += data;
        return;
      }
      var node2 = new node_js_1.Comment(data);
      this.addNode(node2);
      this.lastNode = node2;
    };
    DomHandler2.prototype.oncommentend = function() {
      this.lastNode = null;
    };
    DomHandler2.prototype.oncdatastart = function() {
      var text = new node_js_1.Text("");
      var node2 = new node_js_1.CDATA([text]);
      this.addNode(node2);
      text.parent = node2;
      this.lastNode = text;
    };
    DomHandler2.prototype.oncdataend = function() {
      this.lastNode = null;
    };
    DomHandler2.prototype.onprocessinginstruction = function(name, data) {
      var node2 = new node_js_1.ProcessingInstruction(name, data);
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
var constants$1 = {};
constants$1.CASE_SENSITIVE_TAG_NAMES = [
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
var domhandler = lib$1;
var constants = constants$1;
var CASE_SENSITIVE_TAG_NAMES = constants.CASE_SENSITIVE_TAG_NAMES;
var Comment = domhandler.Comment;
var Element = domhandler.Element;
var ProcessingInstruction = domhandler.ProcessingInstruction;
var Text = domhandler.Text;
var caseSensitiveTagNamesMap = {};
var tagName;
for (var i = 0, len = CASE_SENSITIVE_TAG_NAMES.length; i < len; i++) {
  tagName = CASE_SENSITIVE_TAG_NAMES[i];
  caseSensitiveTagNamesMap[tagName.toLowerCase()] = tagName;
}
function getCaseSensitiveTagName(tagName2) {
  return caseSensitiveTagNamesMap[tagName2];
}
function formatAttributes(attributes) {
  var result = {};
  var attribute;
  for (var i = 0, len = attributes.length; i < len; i++) {
    attribute = attributes[i];
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
  for (var index = 0, len = nodes.length; index < len; index++) {
    var node2 = nodes[index];
    var current;
    switch (node2.nodeType) {
      case 1:
        current = new Element(formatTagName(node2.nodeName), formatAttributes(node2.attributes));
        current.children = formatDOM$1(node2.childNodes, current);
        break;
      case 3:
        current = new Text(node2.nodeValue);
        break;
      case 8:
        current = new Comment(node2.nodeValue);
        break;
      default:
        continue;
    }
    var prev = result[index - 1] || null;
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
utilities.formatAttributes = formatAttributes;
utilities.formatDOM = formatDOM$1;
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
const Question = "_Question_19xez_1";
const Icon = "_Icon_19xez_16";
const Input = "_Input_19xez_11";
const OptionList = "_OptionList_19xez_32";
const Item = "_Item_19xez_32";
const Selected = "_Selected_19xez_42";
const Action = "_Action_19xez_48";
const Button = "_Button_19xez_57";
var styles = {
  "Question-Box": "_Question-Box_19xez_1",
  Question,
  "Input-Box": "_Input-Box_19xez_11",
  Icon,
  Input,
  OptionList,
  Item,
  Selected,
  Action,
  Button
};
const Widget = ({ options }) => {
  const { input, onExecuted, onChange, mode = "display" } = options;
  const [question, setQuestion] = React.useState();
  const [multiple, setMultiple] = React.useState(false);
  const [optionList, setOptionList] = React.useState([]);
  const [answered, setAnswered] = React.useState();
  const [editMode, setEditMode] = React.useState(mode === "edit");
  const inited = React.useRef();
  React.useEffect(() => {
    if (inited.current) {
      return;
    }
    try {
      const inputData = JSON.parse(input);
      if (!!inputData.question) {
        setQuestion(inputData.question);
      }
      if (!!inputData.multiple) {
        setMultiple(inputData.multiple);
      }
      if (!!inputData.optionList) {
        setOptionList(inputData.optionList.map((item) => {
          return { text: item, selected: false };
        }));
      }
      inited.current = true;
    } catch (e) {
      console.log(e);
    }
  }, [input]);
  const processText = React.useCallback((text) => {
    if (!text) {
      return null;
    }
    return HTMLReactParser$1(text.replaceAll(" ", "&nbsp;").replace(/\n/g, "<br/>"));
  }, []);
  React.useEffect(() => {
    if (!onChange) {
      return;
    }
    const output = {
      question,
      multiple,
      optionList: optionList.map((item) => {
        return item.text;
      })
    };
    onChange(JSON.stringify(output));
  }, [question, multiple, optionList]);
  const answer = React.useMemo(() => {
    const answers = optionList.map((item, index) => {
      return { ...item, index };
    }).filter((item, index) => {
      return item.selected;
    }).map((item) => {
      return item.index;
    }).sort();
    if (answers.length === 0) {
      return void 0;
    }
    return multiple ? answers.join() : `${answers[0]}`;
  }, [multiple, optionList]);
  const submit = React.useCallback(() => {
    setAnswered(answer);
    onExecuted(answer);
  }, [answer]);
  const addOption = React.useCallback(() => {
    setOptionList((prev) => {
      return prev.concat([{}]);
    });
  }, []);
  const delOption = React.useCallback((index) => {
    setOptionList((prev) => {
      prev.splice(index, 1);
      return Array.from(prev);
    });
  }, []);
  const select = React.useCallback((item, index) => {
    if (multiple) {
      setOptionList((answers) => {
        answers.forEach((it, idx) => {
          if (idx === index) {
            it.selected = !it.selected;
          }
        });
        return Array.from(answers);
      });
    } else {
      setOptionList((answers) => {
        answers.forEach((it, idx) => {
          if (idx === index) {
            it.selected = !it.selected;
          } else {
            it.selected = false;
          }
        });
        return Array.from(answers);
      });
    }
  }, [multiple]);
  return /* @__PURE__ */ React.createElement("div", {
    className: styles["Question-Box"]
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.Question
  }, !editMode ? processText(question) : /* @__PURE__ */ React.createElement("textarea", {
    placeholder: "\u95EE\u9898",
    className: styles.Input,
    value: question,
    onChange: (e) => {
      setQuestion(e.target.value);
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: styles.OptionList
  }, optionList.map((item, index) => {
    return !editMode ? /* @__PURE__ */ React.createElement("div", {
      key: index,
      className: `${styles.Item} ${item.selected ? styles.Selected : ""}`,
      onClick: () => {
        select(item, index);
      }
    }, processText(item.text)) : /* @__PURE__ */ React.createElement("div", {
      key: index,
      className: styles["Input-Box"]
    }, /* @__PURE__ */ React.createElement("textarea", {
      placeholder: "\u9009\u9879",
      className: `${styles.Input} ${styles.Item}`,
      value: item.text,
      onChange: (e) => {
        setOptionList((prev) => {
          const array = Array.from(prev);
          array[index] = {
            ...array[index],
            text: e.target.value
          };
          return array;
        });
      }
    }), /* @__PURE__ */ React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "24px",
      viewBox: "0 0 24 24",
      width: "24px",
      onClick: () => {
        delOption(index);
      },
      className: styles.Icon,
      fill: "#ef4444"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"
    })));
  })), /* @__PURE__ */ React.createElement("div", {
    className: styles.Action
  }, /* @__PURE__ */ React.createElement("button", {
    disabled: !answer || answer === answered,
    type: "button",
    onClick: submit,
    className: styles.Button
  }, "\u63D0\u4EA4"), editMode && /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: addOption,
    className: styles.Button
  }, "\u65B0\u589E"), editMode && /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => {
      setMultiple((prev) => {
        return !prev;
      });
    },
    className: styles.Button
  }, multiple ? "\u591A\u9009" : "\u5355\u9009"), mode === "edit" && /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => {
      setEditMode((prev) => {
        return !prev;
      });
    },
    className: styles.Button
  }, editMode ? "\u666E\u901A\u6A21\u5F0F" : "\u7F16\u8F91\u6A21\u5F0F")));
};
export { Widget as default };
