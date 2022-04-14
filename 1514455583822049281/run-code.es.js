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
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function(key) {
        _defineProperty$2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$1();
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit$1(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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
function _unsupportedIterableToArray$2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$2(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$2(o, minLen);
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function compose$1() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(x2) {
    return fns.reduceRight(function(y2, f) {
      return f(y2);
    }, x2);
  };
}
function curry$1(fn) {
  return function curried() {
    var _this = this;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function() {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
function isObject$1(value) {
  return {}.toString.call(value).includes("Object");
}
function isEmpty(obj) {
  return !Object.keys(obj).length;
}
function isFunction(value) {
  return typeof value === "function";
}
function hasOwnProperty$1(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}
function validateChanges(initial, changes) {
  if (!isObject$1(changes))
    errorHandler$1("changeType");
  if (Object.keys(changes).some(function(field) {
    return !hasOwnProperty$1(initial, field);
  }))
    errorHandler$1("changeField");
  return changes;
}
function validateSelector(selector) {
  if (!isFunction(selector))
    errorHandler$1("selectorType");
}
function validateHandler(handler) {
  if (!(isFunction(handler) || isObject$1(handler)))
    errorHandler$1("handlerType");
  if (isObject$1(handler) && Object.values(handler).some(function(_handler) {
    return !isFunction(_handler);
  }))
    errorHandler$1("handlersType");
}
function validateInitial(initial) {
  if (!initial)
    errorHandler$1("initialIsRequired");
  if (!isObject$1(initial))
    errorHandler$1("initialType");
  if (isEmpty(initial))
    errorHandler$1("initialContent");
}
function throwError$1(errorMessages2, type) {
  throw new Error(errorMessages2[type] || errorMessages2["default"]);
}
var errorMessages$1 = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": "an unknown error accured in `state-local` package"
};
var errorHandler$1 = curry$1(throwError$1)(errorMessages$1);
var validators$1 = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};
function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  validators$1.initial(initial);
  validators$1.handler(handler);
  var state2 = {
    current: initial
  };
  var didUpdate = curry$1(didStateUpdate)(state2, handler);
  var update = curry$1(updateState)(state2);
  var validate = curry$1(validators$1.changes)(initial);
  var getChanges = curry$1(extractChanges)(state2);
  function getState2() {
    var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(state3) {
      return state3;
    };
    validators$1.selector(selector);
    return selector(state2.current);
  }
  function setState2(causedChanges) {
    compose$1(didUpdate, update, validate, getChanges)(causedChanges);
  }
  return [getState2, setState2];
}
function extractChanges(state2, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state2.current) : causedChanges;
}
function updateState(state2, changes) {
  state2.current = _objectSpread2(_objectSpread2({}, state2.current), changes);
  return changes;
}
function didStateUpdate(state2, handler, changes) {
  isFunction(handler) ? handler(state2.current) : Object.keys(changes).forEach(function(field) {
    var _handler$field;
    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state2.current[field]);
  });
  return changes;
}
var index$1 = {
  create
};
var config$1 = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.28.1/min/vs"
  }
};
function curry(fn) {
  return function curried() {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function() {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
function isObject(value) {
  return {}.toString.call(value).includes("Object");
}
function validateConfig(config2) {
  if (!config2)
    errorHandler("configIsRequired");
  if (!isObject(config2))
    errorHandler("configType");
  if (config2.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config2.urls.monacoBase
      }
    };
  }
  return config2;
}
function informAboutDeprecation() {
  console.warn(errorMessages.deprecation);
}
function throwError(errorMessages2, type) {
  throw new Error(errorMessages2[type] || errorMessages2["default"]);
}
var errorMessages = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  "default": "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  config: validateConfig
};
var compose = function compose2() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(x2) {
    return fns.reduceRight(function(y2, f) {
      return f(y2);
    }, x2);
  };
};
function merge(target, source) {
  Object.keys(source).forEach(function(key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return _objectSpread2$1(_objectSpread2$1({}, target), source);
}
var CANCELATION_MESSAGE = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function(resolve, reject) {
    promise.then(function(val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function() {
    return hasCanceled_ = true;
  }, wrappedPromise;
}
var _state$create = index$1.create({
  config: config$1,
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
}), _state$create2 = _slicedToArray$1(_state$create, 2), getState = _state$create2[0], setState = _state$create2[1];
function config(config2) {
  setState(function(state2) {
    return {
      config: merge(state2.config, validators.config(config2))
    };
  });
}
function init() {
  var state2 = getState(function(_ref) {
    var isInitialized = _ref.isInitialized;
    return {
      isInitialized
    };
  });
  if (!state2.isInitialized) {
    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      return makeCancelable(Promise.resolve(window.monaco));
    }
    compose(injectScripts, getMonacoLoaderScript)(configureLoader);
    setState({
      isInitialized: true
    });
  }
  return makeCancelable(wrapperPromise);
}
function injectScripts(script) {
  return document.body.appendChild(script);
}
function createScript(src) {
  var script = document.createElement("script");
  return src && (script.src = src), script;
}
function getMonacoLoaderScript(configureLoader2) {
  var state2 = getState(function(_ref2) {
    var config2 = _ref2.config, reject = _ref2.reject;
    return {
      config: config2,
      reject
    };
  });
  var loaderScript = createScript("".concat(state2.config.paths.vs, "/loader.js"));
  loaderScript.onload = function() {
    return configureLoader2();
  };
  loaderScript.onerror = state2.reject;
  return loaderScript;
}
function configureLoader() {
  var state2 = getState(function(_ref3) {
    var config2 = _ref3.config, resolve = _ref3.resolve, reject = _ref3.reject;
    return {
      config: config2,
      resolve,
      reject
    };
  });
  var require2 = window.require;
  require2.config(state2.config);
  require2(["vs/editor/editor.main"], function(monaco) {
    storeMonacoInstance(monaco);
    state2.resolve(monaco);
  }, function(error) {
    state2.reject(error);
  });
}
function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco
    });
  }
}
function __getMonacoInstance() {
  return getState(function(_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}
var wrapperPromise = new Promise(function(resolve, reject) {
  return setState({
    resolve,
    reject
  });
});
var loader = {
  config,
  init,
  __getMonacoInstance
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
const loadingStyles = {
  display: "flex",
  height: "100%",
  width: "100%",
  justifyContent: "center",
  alignItems: "center"
};
function Loading({
  content
}) {
  return /* @__PURE__ */ React.createElement("div", {
    style: loadingStyles
  }, content);
}
const styles$1 = {
  wrapper: {
    display: "flex",
    position: "relative",
    textAlign: "initial"
  },
  fullWidth: {
    width: "100%"
  },
  hide: {
    display: "none"
  }
};
function MonacoContainer$1({
  width,
  height,
  isEditorReady,
  loading,
  _ref,
  className,
  wrapperProps
}) {
  return /* @__PURE__ */ React.createElement("section", _extends$1({
    style: __spreadProps(__spreadValues({}, styles$1.wrapper), {
      width,
      height
    })
  }, wrapperProps), !isEditorReady && /* @__PURE__ */ React.createElement(Loading, {
    content: loading
  }), /* @__PURE__ */ React.createElement("div", {
    ref: _ref,
    style: __spreadValues(__spreadValues({}, styles$1.fullWidth), !isEditorReady && styles$1.hide),
    className
  }));
}
MonacoContainer$1.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  isEditorReady: PropTypes.bool.isRequired,
  className: PropTypes.string,
  wrapperProps: PropTypes.object
};
var MonacoContainer = /* @__PURE__ */ React.memo(MonacoContainer$1);
function useMount(effect) {
  React.useEffect(effect, []);
}
function useUpdate(effect, deps, applyChanges = true) {
  const isInitialMount = React.useRef(true);
  React.useEffect(isInitialMount.current || !applyChanges ? () => {
    isInitialMount.current = false;
  } : effect, deps);
}
function noop() {
}
function getOrCreateModel(monaco, value, language, path) {
  return getModel(monaco, path) || createModel(monaco, value, language, path);
}
function getModel(monaco, path) {
  return monaco.editor.getModel(createModelUri(monaco, path));
}
function createModel(monaco, value, language, path) {
  return monaco.editor.createModel(value, language, path && createModelUri(monaco, path));
}
function createModelUri(monaco, path) {
  return monaco.Uri.parse(path);
}
function isUndefined(input) {
  return input === void 0;
}
({
  original: PropTypes.string,
  modified: PropTypes.string,
  language: PropTypes.string,
  originalLanguage: PropTypes.string,
  modifiedLanguage: PropTypes.string,
  originalModelPath: PropTypes.string,
  modifiedModelPath: PropTypes.string,
  keepCurrentOriginalModel: PropTypes.bool,
  keepCurrentModifiedModel: PropTypes.bool,
  theme: PropTypes.string,
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  options: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  wrapperProps: PropTypes.object,
  beforeMount: PropTypes.func,
  onMount: PropTypes.func
});
function usePrevious(value) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
const viewStates = /* @__PURE__ */ new Map();
function Editor$1({
  defaultValue,
  defaultLanguage,
  defaultPath,
  value,
  language,
  path,
  theme,
  line,
  loading,
  options,
  overrideServices,
  saveViewState,
  keepCurrentModel,
  width,
  height,
  className,
  wrapperProps,
  beforeMount,
  onMount,
  onChange,
  onValidate
}) {
  const [isEditorReady, setIsEditorReady] = React.useState(false);
  const [isMonacoMounting, setIsMonacoMounting] = React.useState(true);
  const monacoRef = React.useRef(null);
  const editorRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const onMountRef = React.useRef(onMount);
  const beforeMountRef = React.useRef(beforeMount);
  const subscriptionRef = React.useRef(null);
  const valueRef = React.useRef(value);
  const previousPath = usePrevious(path);
  useMount(() => {
    const cancelable = loader.init();
    cancelable.then((monaco) => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch((error) => (error === null || error === void 0 ? void 0 : error.type) !== "cancelation" && console.error("Monaco initialization: error:", error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  useUpdate(() => {
    const model = getOrCreateModel(monacoRef.current, defaultValue || value, defaultLanguage || language, path);
    if (model !== editorRef.current.getModel()) {
      saveViewState && viewStates.set(previousPath, editorRef.current.saveViewState());
      editorRef.current.setModel(model);
      saveViewState && editorRef.current.restoreViewState(viewStates.get(path));
    }
  }, [path], isEditorReady);
  useUpdate(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  useUpdate(() => {
    if (editorRef.current.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      editorRef.current.setValue(value);
    } else {
      if (value !== editorRef.current.getValue()) {
        editorRef.current.executeEdits("", [{
          range: editorRef.current.getModel().getFullModelRange(),
          text: value,
          forceMoveMarkers: true
        }]);
        editorRef.current.pushUndoStop();
      }
    }
  }, [value], isEditorReady);
  useUpdate(() => {
    monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), language);
  }, [language], isEditorReady);
  useUpdate(() => {
    if (!isUndefined(line)) {
      editorRef.current.revealLine(line);
    }
  }, [line], isEditorReady);
  useUpdate(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  const createEditor = React.useCallback(() => {
    beforeMountRef.current(monacoRef.current);
    const autoCreatedModelPath = path || defaultPath;
    const defaultModel = getOrCreateModel(monacoRef.current, value || defaultValue, defaultLanguage || language, autoCreatedModelPath);
    editorRef.current = monacoRef.current.editor.create(containerRef.current, __spreadValues({
      model: defaultModel,
      automaticLayout: true
    }, options), overrideServices);
    saveViewState && editorRef.current.restoreViewState(viewStates.get(autoCreatedModelPath));
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [defaultValue, defaultLanguage, defaultPath, value, language, path, options, overrideServices, saveViewState, theme]);
  React.useEffect(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  React.useEffect(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);
  valueRef.current = value;
  React.useEffect(() => {
    if (isEditorReady && onChange) {
      var _subscriptionRef$curr, _editorRef$current;
      (_subscriptionRef$curr = subscriptionRef.current) === null || _subscriptionRef$curr === void 0 ? void 0 : _subscriptionRef$curr.dispose();
      subscriptionRef.current = (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.onDidChangeModelContent((event) => {
        const editorValue = editorRef.current.getValue();
        if (valueRef.current !== editorValue) {
          onChange(editorValue, event);
        }
      });
    }
  }, [isEditorReady, onChange]);
  React.useEffect(() => {
    if (isEditorReady) {
      const changeMarkersListener = monacoRef.current.editor.onDidChangeMarkers((uris) => {
        var _editorRef$current$ge;
        const editorUri = (_editorRef$current$ge = editorRef.current.getModel()) === null || _editorRef$current$ge === void 0 ? void 0 : _editorRef$current$ge.uri;
        if (editorUri) {
          const currentEditorHasMarkerChanges = uris.find((uri) => uri.path === editorUri.path);
          if (currentEditorHasMarkerChanges) {
            const markers = monacoRef.current.editor.getModelMarkers({
              resource: editorUri
            });
            onValidate === null || onValidate === void 0 ? void 0 : onValidate(markers);
          }
        }
      });
      return () => {
        changeMarkersListener === null || changeMarkersListener === void 0 ? void 0 : changeMarkersListener.dispose();
      };
    }
  }, [isEditorReady, onValidate]);
  function disposeEditor() {
    var _subscriptionRef$curr2;
    (_subscriptionRef$curr2 = subscriptionRef.current) === null || _subscriptionRef$curr2 === void 0 ? void 0 : _subscriptionRef$curr2.dispose();
    if (keepCurrentModel) {
      saveViewState && viewStates.set(path, editorRef.current.saveViewState());
    } else {
      var _editorRef$current$ge2;
      (_editorRef$current$ge2 = editorRef.current.getModel()) === null || _editorRef$current$ge2 === void 0 ? void 0 : _editorRef$current$ge2.dispose();
    }
    editorRef.current.dispose();
  }
  return /* @__PURE__ */ React.createElement(MonacoContainer, {
    width,
    height,
    isEditorReady,
    loading,
    _ref: containerRef,
    className,
    wrapperProps
  });
}
Editor$1.propTypes = {
  defaultValue: PropTypes.string,
  defaultPath: PropTypes.string,
  defaultLanguage: PropTypes.string,
  value: PropTypes.string,
  language: PropTypes.string,
  path: PropTypes.string,
  theme: PropTypes.string,
  line: PropTypes.number,
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  options: PropTypes.object,
  overrideServices: PropTypes.object,
  saveViewState: PropTypes.bool,
  keepCurrentModel: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  wrapperProps: PropTypes.object,
  beforeMount: PropTypes.func,
  onMount: PropTypes.func,
  onChange: PropTypes.func,
  onValidate: PropTypes.func
};
Editor$1.defaultProps = {
  theme: "light",
  loading: "Loading...",
  options: {},
  overrideServices: {},
  saveViewState: true,
  keepCurrentModel: false,
  width: "100%",
  height: "100%",
  wrapperProps: {},
  beforeMount: noop,
  onMount: noop,
  onValidate: noop
};
var index = /* @__PURE__ */ React.memo(Editor$1);
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
if (typeof Symbol === "function" && Symbol.for) {
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
var x = typeof Symbol === "function" && Symbol.iterator;
function y(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = x && a[x] || a["@@iterator"];
  return typeof a === "function" ? a : null;
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
  if (typeof a !== "object" && typeof a !== "function" && a != null)
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
  if (b != null)
    for (e in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b)
      H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
  var g = arguments.length - 2;
  if (g === 1)
    d.children = c;
  else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++)
      f[m] = arguments[m + 2];
    d.children = f;
  }
  if (a && a.defaultProps)
    for (e in g = a.defaultProps, g)
      d[e] === void 0 && (d[e] = g[e]);
  return { $$typeof: n, type: a, key: k, ref: h, props: d, _owner: G.current };
}
function K(a, b) {
  return { $$typeof: n, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function L(a) {
  return typeof a === "object" && a !== null && a.$$typeof === n;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var M = /\/+/g;
function N(a, b) {
  return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
}
function O(a, b, c, e, d) {
  var k = typeof a;
  if (k === "undefined" || k === "boolean")
    a = null;
  var h = false;
  if (a === null)
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
    return h = a, d = d(h), a = e === "" ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", a != null && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function(a2) {
      return a2;
    })) : d != null && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
  h = 0;
  e = e === "" ? "." : e + ":";
  if (Array.isArray(a))
    for (var g = 0; g < a.length; g++) {
      k = a[g];
      var f = e + N(k, g);
      h += O(k, b, c, f, d);
    }
  else if (f = y(a), typeof f === "function")
    for (a = f.call(a), g = 0; !(k = a.next()).done; )
      k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);
  else if (k === "object")
    throw b = "" + a, Error(z(31, b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h;
}
function P(a, b, c) {
  if (a == null)
    return a;
  var e = [], d = 0;
  O(a, e, "", "", function(a2) {
    return b.call(c, a2, d++);
  });
  return e;
}
function Q(a) {
  if (a._status === -1) {
    var b = a._result;
    b = b();
    a._status = 0;
    a._result = b;
    b.then(function(b2) {
      a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
    }, function(b2) {
      a._status === 0 && (a._status = 2, a._result = b2);
    });
  }
  if (a._status === 1)
    return a._result;
  throw a._result;
}
var R = { current: null };
function S() {
  var a = R.current;
  if (a === null)
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
  if (a === null || a === void 0)
    throw Error(z(267, a));
  var e = l({}, a.props), d = a.key, k = a.ref, h = a._owner;
  if (b != null) {
    b.ref !== void 0 && (k = b.ref, h = G.current);
    b.key !== void 0 && (d = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f in b)
      H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (f === 1)
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
  b === void 0 && (b = null);
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
  return { $$typeof: u, type: a, compare: b === void 0 ? null : b };
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
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
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
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
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
  function match2(re) {
    var m = re.exec(style);
    if (!m)
      return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }
  function whitespace() {
    match2(WHITESPACE_REGEX);
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
    var prop = match2(PROPERTY_REGEX);
    if (!prop)
      return;
    comment();
    if (!match2(COLON_REGEX))
      return error("property missing ':'");
    var val = match2(VALUE_REGEX);
    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
    });
    match2(SEMICOLON_REGEX);
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
var skipCamelCase = function(property) {
  return !property || NO_HYPHEN_REGEX.test(property) || CUSTOM_PROPERTY_REGEX.test(property);
};
var capitalize2 = function(match2, character) {
  return character.toUpperCase();
};
var trimHyphen = function(match2, prefix) {
  return prefix + "-";
};
var camelCase = function(property, options) {
  if (options === void 0) {
    options = {};
  }
  if (skipCamelCase(property)) {
    return property;
  }
  property = property.toLowerCase();
  if (!options.reactCompat) {
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
    style_to_object_1["default"](style, function(property, value) {
      if (property && value) {
        output[utilities_1.camelCase(property, options)] = value;
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
var lib$1 = {};
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
})(lib$1);
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
node.cloneNode = node.hasChildren = node.isDocument = node.isDirective = node.isComment = node.isText = node.isCDATA = node.isTag = node.Element = node.Document = node.NodeWithChildren = node.ProcessingInstruction = node.Comment = node.Text = node.DataNode = node.Node = void 0;
var domelementtype_1 = lib$1;
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
var Node = function() {
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
node.Node = Node;
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
}(Node);
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
}(Node);
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
  for (var i = 1; i < children.length; i++) {
    children[i].prev = children[i - 1];
    children[i - 1].next = children[i];
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
function isIE$1() {
  return /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent);
}
var utilities = {
  formatAttributes,
  formatDOM: formatDOM$1,
  isIE: isIE$1
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
  var isIE = utilities.isIE;
  var doc = document.implementation.createHTMLDocument(isIE() ? "html-dom-parser" : void 0);
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
  var match2 = html.match(FIRST_TAG_REGEX);
  if (match2 && match2[1]) {
    firstTagName = match2[1].toLowerCase();
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
  var match2 = html.match(DIRECTIVE_REGEX);
  var directive;
  if (match2 && match2[1]) {
    directive = match2[1];
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
HTMLReactParser.Element = node.Element;
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
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
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
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") {
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format2, text);
        } else {
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
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
Object.defineProperty(Component, "__esModule", {
  value: true
});
Component.CopyToClipboard = void 0;
var _react = _interopRequireDefault(react.exports);
var _copyToClipboard = _interopRequireDefault(copyToClipboard);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
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
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
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
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
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
  return Constructor;
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self2);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
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
  function CopyToClipboard2() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, CopyToClipboard2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CopyToClipboard2)).call.apply(_getPrototypeOf2, [this].concat(args)));
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
    value: function render2() {
      var _this$props2 = this.props;
      _this$props2.text;
      _this$props2.onCopy;
      _this$props2.options;
      var children = _this$props2.children, props = _objectWithoutProperties(_this$props2, ["text", "onCopy", "options", "children"]);
      var elem = _react["default"].Children.only(children);
      return _react["default"].cloneElement(elem, _objectSpread({}, props, {
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
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
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
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
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
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return {
            done: true
          };
        return {
          done: false,
          value: o[i++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  it = o[Symbol.iterator]();
  return it.next.bind(it);
}
function match(value, lookup) {
  if (value in lookup) {
    var returnValue = lookup[value];
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return typeof returnValue === "function" ? returnValue.apply(void 0, args) : returnValue;
  }
  var error = new Error('Tried to handle "' + value + '" but there is no handler defined. Only defined handlers are: ' + Object.keys(lookup).map(function(key) {
    return '"' + key + '"';
  }).join(", ") + ".");
  if (Error.captureStackTrace)
    Error.captureStackTrace(error, match);
  throw error;
}
var Features;
(function(Features2) {
  Features2[Features2["None"] = 0] = "None";
  Features2[Features2["RenderStrategy"] = 1] = "RenderStrategy";
  Features2[Features2["Static"] = 2] = "Static";
})(Features || (Features = {}));
var RenderStrategy;
(function(RenderStrategy2) {
  RenderStrategy2[RenderStrategy2["Unmount"] = 0] = "Unmount";
  RenderStrategy2[RenderStrategy2["Hidden"] = 1] = "Hidden";
})(RenderStrategy || (RenderStrategy = {}));
function render(_ref) {
  var props = _ref.props, slot = _ref.slot, defaultTag = _ref.defaultTag, features = _ref.features, _ref$visible = _ref.visible, visible = _ref$visible === void 0 ? true : _ref$visible, name = _ref.name;
  if (visible)
    return _render(props, slot, defaultTag, name);
  var featureFlags = features != null ? features : Features.None;
  if (featureFlags & Features.Static) {
    var _props$static = props["static"], isStatic = _props$static === void 0 ? false : _props$static, rest = _objectWithoutPropertiesLoose(props, ["static"]);
    if (isStatic)
      return _render(rest, slot, defaultTag, name);
  }
  if (featureFlags & Features.RenderStrategy) {
    var _match;
    var _props$unmount = props.unmount, unmount = _props$unmount === void 0 ? true : _props$unmount, _rest = _objectWithoutPropertiesLoose(props, ["unmount"]);
    var strategy = unmount ? RenderStrategy.Unmount : RenderStrategy.Hidden;
    return match(strategy, (_match = {}, _match[RenderStrategy.Unmount] = function() {
      return null;
    }, _match[RenderStrategy.Hidden] = function() {
      return _render(_extends({}, _rest, {
        hidden: true,
        style: {
          display: "none"
        }
      }), slot, defaultTag, name);
    }, _match));
  }
  return _render(props, slot, defaultTag, name);
}
function _render(props, slot, tag, name) {
  var _ref2;
  if (slot === void 0) {
    slot = {};
  }
  var _omit = omit(props, ["unmount", "static"]), _omit$as = _omit.as, Component2 = _omit$as === void 0 ? tag : _omit$as, children = _omit.children, _omit$refName = _omit.refName, refName = _omit$refName === void 0 ? "ref" : _omit$refName, passThroughProps = _objectWithoutPropertiesLoose(_omit, ["as", "children", "refName"]);
  var refRelatedProps = props.ref !== void 0 ? (_ref2 = {}, _ref2[refName] = props.ref, _ref2) : {};
  var resolvedChildren = typeof children === "function" ? children(slot) : children;
  if (passThroughProps.className && typeof passThroughProps.className === "function") {
    passThroughProps.className = passThroughProps.className(slot);
  }
  if (Component2 === React.Fragment) {
    if (Object.keys(passThroughProps).length > 0) {
      if (!React.isValidElement(resolvedChildren) || Array.isArray(resolvedChildren) && resolvedChildren.length > 1) {
        throw new Error(['Passing props on "Fragment"!', "", "The current component <" + name + ' /> is rendering a "Fragment".', "However we need to passthrough the following props:", Object.keys(passThroughProps).map(function(line) {
          return "  - " + line;
        }).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(function(line) {
          return "  - " + line;
        }).join("\n")].join("\n"));
      }
      return React.cloneElement(resolvedChildren, Object.assign({}, mergeEventFunctions(compact(omit(passThroughProps, ["ref"])), resolvedChildren.props, ["onClick"]), refRelatedProps));
    }
  }
  return React.createElement(Component2, Object.assign({}, omit(passThroughProps, ["ref"]), Component2 !== React.Fragment && refRelatedProps), resolvedChildren);
}
function mergeEventFunctions(passThroughProps, existingProps, functionsToMerge) {
  var clone = Object.assign({}, passThroughProps);
  var _loop = function _loop2() {
    var func = _step.value;
    if (passThroughProps[func] !== void 0 && existingProps[func] !== void 0) {
      var _Object$assign;
      Object.assign(clone, (_Object$assign = {}, _Object$assign[func] = function(event) {
        if (!event.defaultPrevented)
          passThroughProps[func](event);
        if (!event.defaultPrevented)
          existingProps[func](event);
      }, _Object$assign));
    }
  };
  for (var _iterator = _createForOfIteratorHelperLoose(functionsToMerge), _step; !(_step = _iterator()).done; ) {
    _loop();
  }
  return clone;
}
function forwardRefWithAs(component) {
  var _component$displayNam;
  return Object.assign(React.forwardRef(component), {
    displayName: (_component$displayNam = component.displayName) != null ? _component$displayNam : component.name
  });
}
function compact(object) {
  var clone = Object.assign({}, object);
  for (var key in clone) {
    if (clone[key] === void 0)
      delete clone[key];
  }
  return clone;
}
function omit(object, keysToOmit) {
  if (keysToOmit === void 0) {
    keysToOmit = [];
  }
  var clone = Object.assign({}, object);
  for (var _iterator2 = _createForOfIteratorHelperLoose(keysToOmit), _step2; !(_step2 = _iterator2()).done; ) {
    var key = _step2.value;
    if (key in clone)
      delete clone[key];
  }
  return clone;
}
var useIsoMorphicEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
var state = {
  serverHandoffComplete: false
};
function useServerHandoffComplete() {
  var _useState = React.useState(state.serverHandoffComplete), serverHandoffComplete = _useState[0], setServerHandoffComplete = _useState[1];
  React.useEffect(function() {
    if (serverHandoffComplete === true)
      return;
    setServerHandoffComplete(true);
  }, [serverHandoffComplete]);
  React.useEffect(function() {
    if (state.serverHandoffComplete === false)
      state.serverHandoffComplete = true;
  }, []);
  return serverHandoffComplete;
}
function useSyncRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  var cache = React.useRef(refs);
  React.useEffect(function() {
    cache.current = refs;
  }, [refs]);
  return React.useCallback(function(value) {
    for (var _iterator = _createForOfIteratorHelperLoose(cache.current), _step; !(_step = _iterator()).done; ) {
      var ref = _step.value;
      if (ref == null)
        continue;
      if (typeof ref === "function")
        ref(value);
      else
        ref.current = value;
    }
  }, [cache]);
}
var Keys;
(function(Keys2) {
  Keys2["Space"] = " ";
  Keys2["Enter"] = "Enter";
  Keys2["Escape"] = "Escape";
  Keys2["Backspace"] = "Backspace";
  Keys2["ArrowLeft"] = "ArrowLeft";
  Keys2["ArrowUp"] = "ArrowUp";
  Keys2["ArrowRight"] = "ArrowRight";
  Keys2["ArrowDown"] = "ArrowDown";
  Keys2["Home"] = "Home";
  Keys2["End"] = "End";
  Keys2["PageUp"] = "PageUp";
  Keys2["PageDown"] = "PageDown";
  Keys2["Tab"] = "Tab";
})(Keys || (Keys = {}));
function isDisabledReactIssue7711(element) {
  var _ref, _parent;
  var parent = element.parentElement;
  var legend = null;
  while (parent && !(parent instanceof HTMLFieldSetElement)) {
    if (parent instanceof HTMLLegendElement)
      legend = parent;
    parent = parent.parentElement;
  }
  var isParentDisabled = (_ref = ((_parent = parent) == null ? void 0 : _parent.getAttribute("disabled")) === "") != null ? _ref : false;
  if (isParentDisabled && isFirstLegend(legend))
    return false;
  return isParentDisabled;
}
function isFirstLegend(element) {
  if (!element)
    return false;
  var previous = element.previousElementSibling;
  while (previous !== null) {
    if (previous instanceof HTMLLegendElement)
      return false;
    previous = previous.previousElementSibling;
  }
  return true;
}
var id = 0;
function generateId() {
  return ++id;
}
function useId() {
  var ready = useServerHandoffComplete();
  var _useState = React.useState(ready ? generateId : null), id2 = _useState[0], setId = _useState[1];
  useIsoMorphicEffect(function() {
    if (id2 === null)
      setId(generateId());
  }, [id2]);
  return id2 != null ? "" + id2 : void 0;
}
function useWindowEvent(type, listener, options) {
  var listenerRef = React.useRef(listener);
  listenerRef.current = listener;
  React.useEffect(function() {
    function handler(event) {
      listenerRef.current.call(window, event);
    }
    window.addEventListener(type, handler, options);
    return function() {
      return window.removeEventListener(type, handler, options);
    };
  }, [type, options]);
}
var focusableSelector = /* @__PURE__ */ ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(function(selector) {
  return selector + ":not([tabindex='-1'])";
}).join(",");
var Focus$1;
(function(Focus2) {
  Focus2[Focus2["First"] = 1] = "First";
  Focus2[Focus2["Previous"] = 2] = "Previous";
  Focus2[Focus2["Next"] = 4] = "Next";
  Focus2[Focus2["Last"] = 8] = "Last";
  Focus2[Focus2["WrapAround"] = 16] = "WrapAround";
  Focus2[Focus2["NoScroll"] = 32] = "NoScroll";
})(Focus$1 || (Focus$1 = {}));
var FocusResult;
(function(FocusResult2) {
  FocusResult2[FocusResult2["Error"] = 0] = "Error";
  FocusResult2[FocusResult2["Overflow"] = 1] = "Overflow";
  FocusResult2[FocusResult2["Success"] = 2] = "Success";
  FocusResult2[FocusResult2["Underflow"] = 3] = "Underflow";
})(FocusResult || (FocusResult = {}));
var Direction;
(function(Direction2) {
  Direction2[Direction2["Previous"] = -1] = "Previous";
  Direction2[Direction2["Next"] = 1] = "Next";
})(Direction || (Direction = {}));
var FocusableMode;
(function(FocusableMode2) {
  FocusableMode2[FocusableMode2["Strict"] = 0] = "Strict";
  FocusableMode2[FocusableMode2["Loose"] = 1] = "Loose";
})(FocusableMode || (FocusableMode = {}));
function isFocusableElement(element, mode) {
  var _match;
  if (mode === void 0) {
    mode = FocusableMode.Strict;
  }
  if (element === document.body)
    return false;
  return match(mode, (_match = {}, _match[FocusableMode.Strict] = function() {
    return element.matches(focusableSelector);
  }, _match[FocusableMode.Loose] = function() {
    var next = element;
    while (next !== null) {
      if (next.matches(focusableSelector))
        return true;
      next = next.parentElement;
    }
    return false;
  }, _match));
}
var Context = /* @__PURE__ */ React.createContext(null);
Context.displayName = "OpenClosedContext";
var State$1;
(function(State2) {
  State2[State2["Open"] = 0] = "Open";
  State2[State2["Closed"] = 1] = "Closed";
})(State$1 || (State$1 = {}));
function useOpenClosed() {
  return React.useContext(Context);
}
function OpenClosedProvider(_ref) {
  var value = _ref.value, children = _ref.children;
  return React.createElement(Context.Provider, {
    value
  }, children);
}
function resolveType(props) {
  var _props$as;
  if (props.type)
    return props.type;
  var tag = (_props$as = props.as) != null ? _props$as : "button";
  if (typeof tag === "string" && tag.toLowerCase() === "button")
    return "button";
  return void 0;
}
function useResolveButtonType(props, ref) {
  var _useState = React.useState(function() {
    return resolveType(props);
  }), type = _useState[0], setType = _useState[1];
  useIsoMorphicEffect(function() {
    setType(resolveType(props));
  }, [props.type, props.as]);
  useIsoMorphicEffect(function() {
    if (type)
      return;
    if (!ref.current)
      return;
    if (ref.current instanceof HTMLButtonElement && !ref.current.hasAttribute("type")) {
      setType("button");
    }
  }, [type, ref]);
  return type;
}
function disposables() {
  var disposables2 = [];
  var api = {
    requestAnimationFrame: function(_requestAnimationFrame) {
      function requestAnimationFrame2() {
        return _requestAnimationFrame.apply(this, arguments);
      }
      requestAnimationFrame2.toString = function() {
        return _requestAnimationFrame.toString();
      };
      return requestAnimationFrame2;
    }(function() {
      var raf = requestAnimationFrame.apply(void 0, arguments);
      api.add(function() {
        return cancelAnimationFrame(raf);
      });
    }),
    nextFrame: function nextFrame() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      api.requestAnimationFrame(function() {
        api.requestAnimationFrame.apply(api, args);
      });
    },
    setTimeout: function(_setTimeout) {
      function setTimeout2() {
        return _setTimeout.apply(this, arguments);
      }
      setTimeout2.toString = function() {
        return _setTimeout.toString();
      };
      return setTimeout2;
    }(function() {
      var timer = setTimeout.apply(void 0, arguments);
      api.add(function() {
        return clearTimeout(timer);
      });
    }),
    add: function add(cb) {
      disposables2.push(cb);
    },
    dispose: function dispose() {
      for (var _iterator = _createForOfIteratorHelperLoose(disposables2.splice(0)), _step; !(_step = _iterator()).done; ) {
        var dispose2 = _step.value;
        dispose2();
      }
    }
  };
  return api;
}
function useDisposables() {
  var _useState = React.useState(disposables), d = _useState[0];
  React.useEffect(function() {
    return function() {
      return d.dispose();
    };
  }, [d]);
  return d;
}
function useComputed(cb, dependencies) {
  var _useState = React.useState(cb), value = _useState[0], setValue = _useState[1];
  var cbRef = React.useRef(cb);
  useIsoMorphicEffect(function() {
    cbRef.current = cb;
  }, [cb]);
  useIsoMorphicEffect(function() {
    return setValue(cbRef.current);
  }, [cbRef, setValue].concat(dependencies));
  return value;
}
function assertNever(x2) {
  throw new Error("Unexpected object: " + x2);
}
var Focus;
(function(Focus2) {
  Focus2[Focus2["First"] = 0] = "First";
  Focus2[Focus2["Previous"] = 1] = "Previous";
  Focus2[Focus2["Next"] = 2] = "Next";
  Focus2[Focus2["Last"] = 3] = "Last";
  Focus2[Focus2["Specific"] = 4] = "Specific";
  Focus2[Focus2["Nothing"] = 5] = "Nothing";
})(Focus || (Focus = {}));
function calculateActiveIndex(action, resolvers) {
  var items = resolvers.resolveItems();
  if (items.length <= 0)
    return null;
  var currentActiveIndex = resolvers.resolveActiveIndex();
  var activeIndex = currentActiveIndex != null ? currentActiveIndex : -1;
  var nextActiveIndex = function() {
    switch (action.focus) {
      case Focus.First:
        return items.findIndex(function(item) {
          return !resolvers.resolveDisabled(item);
        });
      case Focus.Previous: {
        var idx = items.slice().reverse().findIndex(function(item, idx2, all) {
          if (activeIndex !== -1 && all.length - idx2 - 1 >= activeIndex)
            return false;
          return !resolvers.resolveDisabled(item);
        });
        if (idx === -1)
          return idx;
        return items.length - 1 - idx;
      }
      case Focus.Next:
        return items.findIndex(function(item, idx2) {
          if (idx2 <= activeIndex)
            return false;
          return !resolvers.resolveDisabled(item);
        });
      case Focus.Last: {
        var _idx = items.slice().reverse().findIndex(function(item) {
          return !resolvers.resolveDisabled(item);
        });
        if (_idx === -1)
          return _idx;
        return items.length - 1 - _idx;
      }
      case Focus.Specific:
        return items.findIndex(function(item) {
          return resolvers.resolveId(item) === action.id;
        });
      case Focus.Nothing:
        return null;
      default:
        assertNever(action);
    }
  }();
  return nextActiveIndex === -1 ? currentActiveIndex : nextActiveIndex;
}
var _reducers;
var ListboxStates;
(function(ListboxStates2) {
  ListboxStates2[ListboxStates2["Open"] = 0] = "Open";
  ListboxStates2[ListboxStates2["Closed"] = 1] = "Closed";
})(ListboxStates || (ListboxStates = {}));
var ActionTypes;
(function(ActionTypes2) {
  ActionTypes2[ActionTypes2["OpenListbox"] = 0] = "OpenListbox";
  ActionTypes2[ActionTypes2["CloseListbox"] = 1] = "CloseListbox";
  ActionTypes2[ActionTypes2["SetDisabled"] = 2] = "SetDisabled";
  ActionTypes2[ActionTypes2["SetOrientation"] = 3] = "SetOrientation";
  ActionTypes2[ActionTypes2["GoToOption"] = 4] = "GoToOption";
  ActionTypes2[ActionTypes2["Search"] = 5] = "Search";
  ActionTypes2[ActionTypes2["ClearSearch"] = 6] = "ClearSearch";
  ActionTypes2[ActionTypes2["RegisterOption"] = 7] = "RegisterOption";
  ActionTypes2[ActionTypes2["UnregisterOption"] = 8] = "UnregisterOption";
})(ActionTypes || (ActionTypes = {}));
var reducers = (_reducers = {}, _reducers[ActionTypes.CloseListbox] = function(state2) {
  if (state2.disabled)
    return state2;
  if (state2.listboxState === ListboxStates.Closed)
    return state2;
  return _extends({}, state2, {
    activeOptionIndex: null,
    listboxState: ListboxStates.Closed
  });
}, _reducers[ActionTypes.OpenListbox] = function(state2) {
  if (state2.disabled)
    return state2;
  if (state2.listboxState === ListboxStates.Open)
    return state2;
  return _extends({}, state2, {
    listboxState: ListboxStates.Open
  });
}, _reducers[ActionTypes.SetDisabled] = function(state2, action) {
  if (state2.disabled === action.disabled)
    return state2;
  return _extends({}, state2, {
    disabled: action.disabled
  });
}, _reducers[ActionTypes.SetOrientation] = function(state2, action) {
  if (state2.orientation === action.orientation)
    return state2;
  return _extends({}, state2, {
    orientation: action.orientation
  });
}, _reducers[ActionTypes.GoToOption] = function(state2, action) {
  if (state2.disabled)
    return state2;
  if (state2.listboxState === ListboxStates.Closed)
    return state2;
  var activeOptionIndex = calculateActiveIndex(action, {
    resolveItems: function resolveItems() {
      return state2.options;
    },
    resolveActiveIndex: function resolveActiveIndex() {
      return state2.activeOptionIndex;
    },
    resolveId: function resolveId(item) {
      return item.id;
    },
    resolveDisabled: function resolveDisabled(item) {
      return item.dataRef.current.disabled;
    }
  });
  if (state2.searchQuery === "" && state2.activeOptionIndex === activeOptionIndex)
    return state2;
  return _extends({}, state2, {
    searchQuery: "",
    activeOptionIndex
  });
}, _reducers[ActionTypes.Search] = function(state2, action) {
  if (state2.disabled)
    return state2;
  if (state2.listboxState === ListboxStates.Closed)
    return state2;
  var searchQuery = state2.searchQuery + action.value.toLowerCase();
  var match2 = state2.options.findIndex(function(option) {
    var _option$dataRef$curre;
    return !option.dataRef.current.disabled && ((_option$dataRef$curre = option.dataRef.current.textValue) == null ? void 0 : _option$dataRef$curre.startsWith(searchQuery));
  });
  if (match2 === -1 || match2 === state2.activeOptionIndex)
    return _extends({}, state2, {
      searchQuery
    });
  return _extends({}, state2, {
    searchQuery,
    activeOptionIndex: match2
  });
}, _reducers[ActionTypes.ClearSearch] = function(state2) {
  if (state2.disabled)
    return state2;
  if (state2.listboxState === ListboxStates.Closed)
    return state2;
  if (state2.searchQuery === "")
    return state2;
  return _extends({}, state2, {
    searchQuery: ""
  });
}, _reducers[ActionTypes.RegisterOption] = function(state2, action) {
  return _extends({}, state2, {
    options: [].concat(state2.options, [{
      id: action.id,
      dataRef: action.dataRef
    }])
  });
}, _reducers[ActionTypes.UnregisterOption] = function(state2, action) {
  var nextOptions = state2.options.slice();
  var currentActiveOption = state2.activeOptionIndex !== null ? nextOptions[state2.activeOptionIndex] : null;
  var idx = nextOptions.findIndex(function(a) {
    return a.id === action.id;
  });
  if (idx !== -1)
    nextOptions.splice(idx, 1);
  return _extends({}, state2, {
    options: nextOptions,
    activeOptionIndex: function() {
      if (idx === state2.activeOptionIndex)
        return null;
      if (currentActiveOption === null)
        return null;
      return nextOptions.indexOf(currentActiveOption);
    }()
  });
}, _reducers);
var ListboxContext = /* @__PURE__ */ React.createContext(null);
ListboxContext.displayName = "ListboxContext";
function useListboxContext(component) {
  var context = React.useContext(ListboxContext);
  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Listbox.name + " /> component.");
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useListboxContext);
    throw err;
  }
  return context;
}
function stateReducer(state2, action) {
  return match(action.type, reducers, state2, action);
}
var DEFAULT_LISTBOX_TAG = React.Fragment;
function Listbox(props) {
  var _match;
  var value = props.value, onChange = props.onChange, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$horizontal = props.horizontal, horizontal = _props$horizontal === void 0 ? false : _props$horizontal, passThroughProps = _objectWithoutPropertiesLoose(props, ["value", "onChange", "disabled", "horizontal"]);
  var orientation = horizontal ? "horizontal" : "vertical";
  var reducerBag = React.useReducer(stateReducer, {
    listboxState: ListboxStates.Closed,
    propsRef: {
      current: {
        value,
        onChange
      }
    },
    labelRef: React.createRef(),
    buttonRef: React.createRef(),
    optionsRef: React.createRef(),
    disabled,
    orientation,
    options: [],
    searchQuery: "",
    activeOptionIndex: null
  });
  var _reducerBag$ = reducerBag[0], listboxState = _reducerBag$.listboxState, propsRef = _reducerBag$.propsRef, optionsRef = _reducerBag$.optionsRef, buttonRef = _reducerBag$.buttonRef, dispatch = reducerBag[1];
  useIsoMorphicEffect(function() {
    propsRef.current.value = value;
  }, [value, propsRef]);
  useIsoMorphicEffect(function() {
    propsRef.current.onChange = onChange;
  }, [onChange, propsRef]);
  useIsoMorphicEffect(function() {
    return dispatch({
      type: ActionTypes.SetDisabled,
      disabled
    });
  }, [disabled]);
  useIsoMorphicEffect(function() {
    return dispatch({
      type: ActionTypes.SetOrientation,
      orientation
    });
  }, [orientation]);
  useWindowEvent("mousedown", function(event) {
    var _buttonRef$current, _optionsRef$current;
    var target = event.target;
    if (listboxState !== ListboxStates.Open)
      return;
    if ((_buttonRef$current = buttonRef.current) == null ? void 0 : _buttonRef$current.contains(target))
      return;
    if ((_optionsRef$current = optionsRef.current) == null ? void 0 : _optionsRef$current.contains(target))
      return;
    dispatch({
      type: ActionTypes.CloseListbox
    });
    if (!isFocusableElement(target, FocusableMode.Loose)) {
      var _buttonRef$current2;
      event.preventDefault();
      (_buttonRef$current2 = buttonRef.current) == null ? void 0 : _buttonRef$current2.focus();
    }
  });
  var slot = React.useMemo(function() {
    return {
      open: listboxState === ListboxStates.Open,
      disabled
    };
  }, [listboxState, disabled]);
  return React.createElement(ListboxContext.Provider, {
    value: reducerBag
  }, React.createElement(OpenClosedProvider, {
    value: match(listboxState, (_match = {}, _match[ListboxStates.Open] = State$1.Open, _match[ListboxStates.Closed] = State$1.Closed, _match))
  }, render({
    props: passThroughProps,
    slot,
    defaultTag: DEFAULT_LISTBOX_TAG,
    name: "Listbox"
  })));
}
var DEFAULT_BUTTON_TAG = "button";
var Button$1 = /* @__PURE__ */ forwardRefWithAs(function Button(props, ref) {
  var _state$optionsRef$cur;
  var _useListboxContext = useListboxContext([Listbox.name, Button.name].join(".")), state2 = _useListboxContext[0], dispatch = _useListboxContext[1];
  var buttonRef = useSyncRefs(state2.buttonRef, ref);
  var id2 = "headlessui-listbox-button-" + useId();
  var d = useDisposables();
  var handleKeyDown = React.useCallback(function(event) {
    switch (event.key) {
      case Keys.Space:
      case Keys.Enter:
      case Keys.ArrowDown:
        event.preventDefault();
        dispatch({
          type: ActionTypes.OpenListbox
        });
        d.nextFrame(function() {
          if (!state2.propsRef.current.value)
            dispatch({
              type: ActionTypes.GoToOption,
              focus: Focus.First
            });
        });
        break;
      case Keys.ArrowUp:
        event.preventDefault();
        dispatch({
          type: ActionTypes.OpenListbox
        });
        d.nextFrame(function() {
          if (!state2.propsRef.current.value)
            dispatch({
              type: ActionTypes.GoToOption,
              focus: Focus.Last
            });
        });
        break;
    }
  }, [dispatch, state2, d]);
  var handleKeyUp = React.useCallback(function(event) {
    switch (event.key) {
      case Keys.Space:
        event.preventDefault();
        break;
    }
  }, []);
  var handleClick = React.useCallback(function(event) {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    if (state2.listboxState === ListboxStates.Open) {
      dispatch({
        type: ActionTypes.CloseListbox
      });
      d.nextFrame(function() {
        var _state$buttonRef$curr;
        return (_state$buttonRef$curr = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr.focus({
          preventScroll: true
        });
      });
    } else {
      event.preventDefault();
      dispatch({
        type: ActionTypes.OpenListbox
      });
    }
  }, [dispatch, d, state2]);
  var labelledby = useComputed(function() {
    if (!state2.labelRef.current)
      return void 0;
    return [state2.labelRef.current.id, id2].join(" ");
  }, [state2.labelRef.current, id2]);
  var slot = React.useMemo(function() {
    return {
      open: state2.listboxState === ListboxStates.Open,
      disabled: state2.disabled
    };
  }, [state2]);
  var passthroughProps = props;
  var propsWeControl = {
    ref: buttonRef,
    id: id2,
    type: useResolveButtonType(props, state2.buttonRef),
    "aria-haspopup": true,
    "aria-controls": (_state$optionsRef$cur = state2.optionsRef.current) == null ? void 0 : _state$optionsRef$cur.id,
    "aria-expanded": state2.disabled ? void 0 : state2.listboxState === ListboxStates.Open,
    "aria-labelledby": labelledby,
    disabled: state2.disabled,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return render({
    props: _extends({}, passthroughProps, propsWeControl),
    slot,
    defaultTag: DEFAULT_BUTTON_TAG,
    name: "Listbox.Button"
  });
});
var DEFAULT_LABEL_TAG = "label";
function Label(props) {
  var _useListboxContext2 = useListboxContext([Listbox.name, Label.name].join(".")), state2 = _useListboxContext2[0];
  var id2 = "headlessui-listbox-label-" + useId();
  var handleClick = React.useCallback(function() {
    var _state$buttonRef$curr2;
    return (_state$buttonRef$curr2 = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr2.focus({
      preventScroll: true
    });
  }, [state2.buttonRef]);
  var slot = React.useMemo(function() {
    return {
      open: state2.listboxState === ListboxStates.Open,
      disabled: state2.disabled
    };
  }, [state2]);
  var propsWeControl = {
    ref: state2.labelRef,
    id: id2,
    onClick: handleClick
  };
  return render({
    props: _extends({}, props, propsWeControl),
    slot,
    defaultTag: DEFAULT_LABEL_TAG,
    name: "Listbox.Label"
  });
}
var DEFAULT_OPTIONS_TAG = "ul";
var OptionsRenderFeatures = Features.RenderStrategy | Features.Static;
var Options = /* @__PURE__ */ forwardRefWithAs(function Options2(props, ref) {
  var _state$options$state$;
  var _useListboxContext3 = useListboxContext([Listbox.name, Options2.name].join(".")), state2 = _useListboxContext3[0], dispatch = _useListboxContext3[1];
  var optionsRef = useSyncRefs(state2.optionsRef, ref);
  var id2 = "headlessui-listbox-options-" + useId();
  var d = useDisposables();
  var searchDisposables = useDisposables();
  var usesOpenClosedState = useOpenClosed();
  var visible = function() {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === State$1.Open;
    }
    return state2.listboxState === ListboxStates.Open;
  }();
  useIsoMorphicEffect(function() {
    var container = state2.optionsRef.current;
    if (!container)
      return;
    if (state2.listboxState !== ListboxStates.Open)
      return;
    if (container === document.activeElement)
      return;
    container.focus({
      preventScroll: true
    });
  }, [state2.listboxState, state2.optionsRef]);
  var handleKeyDown = React.useCallback(function(event) {
    searchDisposables.dispose();
    switch (event.key) {
      case Keys.Space:
        if (state2.searchQuery !== "") {
          event.preventDefault();
          event.stopPropagation();
          return dispatch({
            type: ActionTypes.Search,
            value: event.key
          });
        }
      case Keys.Enter:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.CloseListbox
        });
        if (state2.activeOptionIndex !== null) {
          var dataRef = state2.options[state2.activeOptionIndex].dataRef;
          state2.propsRef.current.onChange(dataRef.current.value);
        }
        disposables().nextFrame(function() {
          var _state$buttonRef$curr3;
          return (_state$buttonRef$curr3 = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr3.focus({
            preventScroll: true
          });
        });
        break;
      case match(state2.orientation, {
        vertical: Keys.ArrowDown,
        horizontal: Keys.ArrowRight
      }):
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToOption,
          focus: Focus.Next
        });
      case match(state2.orientation, {
        vertical: Keys.ArrowUp,
        horizontal: Keys.ArrowLeft
      }):
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToOption,
          focus: Focus.Previous
        });
      case Keys.Home:
      case Keys.PageUp:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToOption,
          focus: Focus.First
        });
      case Keys.End:
      case Keys.PageDown:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToOption,
          focus: Focus.Last
        });
      case Keys.Escape:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.CloseListbox
        });
        return d.nextFrame(function() {
          var _state$buttonRef$curr4;
          return (_state$buttonRef$curr4 = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr4.focus({
            preventScroll: true
          });
        });
      case Keys.Tab:
        event.preventDefault();
        event.stopPropagation();
        break;
      default:
        if (event.key.length === 1) {
          dispatch({
            type: ActionTypes.Search,
            value: event.key
          });
          searchDisposables.setTimeout(function() {
            return dispatch({
              type: ActionTypes.ClearSearch
            });
          }, 350);
        }
        break;
    }
  }, [d, dispatch, searchDisposables, state2]);
  var labelledby = useComputed(function() {
    var _state$labelRef$curre, _state$labelRef$curre2, _state$buttonRef$curr5;
    return (_state$labelRef$curre = (_state$labelRef$curre2 = state2.labelRef.current) == null ? void 0 : _state$labelRef$curre2.id) != null ? _state$labelRef$curre : (_state$buttonRef$curr5 = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr5.id;
  }, [state2.labelRef.current, state2.buttonRef.current]);
  var slot = React.useMemo(function() {
    return {
      open: state2.listboxState === ListboxStates.Open
    };
  }, [state2]);
  var propsWeControl = {
    "aria-activedescendant": state2.activeOptionIndex === null ? void 0 : (_state$options$state$ = state2.options[state2.activeOptionIndex]) == null ? void 0 : _state$options$state$.id,
    "aria-labelledby": labelledby,
    "aria-orientation": state2.orientation,
    id: id2,
    onKeyDown: handleKeyDown,
    role: "listbox",
    tabIndex: 0,
    ref: optionsRef
  };
  var passthroughProps = props;
  return render({
    props: _extends({}, passthroughProps, propsWeControl),
    slot,
    defaultTag: DEFAULT_OPTIONS_TAG,
    features: OptionsRenderFeatures,
    visible,
    name: "Listbox.Options"
  });
});
var DEFAULT_OPTION_TAG = "li";
function Option$1(props) {
  var _props$disabled2 = props.disabled, disabled = _props$disabled2 === void 0 ? false : _props$disabled2, value = props.value, passthroughProps = _objectWithoutPropertiesLoose(props, ["disabled", "value"]);
  var _useListboxContext4 = useListboxContext([Listbox.name, Option$1.name].join(".")), state2 = _useListboxContext4[0], dispatch = _useListboxContext4[1];
  var id2 = "headlessui-listbox-option-" + useId();
  var active = state2.activeOptionIndex !== null ? state2.options[state2.activeOptionIndex].id === id2 : false;
  var selected = state2.propsRef.current.value === value;
  var bag = React.useRef({
    disabled,
    value
  });
  useIsoMorphicEffect(function() {
    bag.current.disabled = disabled;
  }, [bag, disabled]);
  useIsoMorphicEffect(function() {
    bag.current.value = value;
  }, [bag, value]);
  useIsoMorphicEffect(function() {
    var _document$getElementB, _document$getElementB2;
    bag.current.textValue = (_document$getElementB = document.getElementById(id2)) == null ? void 0 : (_document$getElementB2 = _document$getElementB.textContent) == null ? void 0 : _document$getElementB2.toLowerCase();
  }, [bag, id2]);
  var select = React.useCallback(function() {
    return state2.propsRef.current.onChange(value);
  }, [state2.propsRef, value]);
  useIsoMorphicEffect(function() {
    dispatch({
      type: ActionTypes.RegisterOption,
      id: id2,
      dataRef: bag
    });
    return function() {
      return dispatch({
        type: ActionTypes.UnregisterOption,
        id: id2
      });
    };
  }, [bag, id2]);
  useIsoMorphicEffect(function() {
    var _document$getElementB3;
    if (state2.listboxState !== ListboxStates.Open)
      return;
    if (!selected)
      return;
    dispatch({
      type: ActionTypes.GoToOption,
      focus: Focus.Specific,
      id: id2
    });
    (_document$getElementB3 = document.getElementById(id2)) == null ? void 0 : _document$getElementB3.focus == null ? void 0 : _document$getElementB3.focus();
  }, [state2.listboxState]);
  useIsoMorphicEffect(function() {
    if (state2.listboxState !== ListboxStates.Open)
      return;
    if (!active)
      return;
    var d = disposables();
    d.nextFrame(function() {
      var _document$getElementB4;
      return (_document$getElementB4 = document.getElementById(id2)) == null ? void 0 : _document$getElementB4.scrollIntoView == null ? void 0 : _document$getElementB4.scrollIntoView({
        block: "nearest"
      });
    });
    return d.dispose;
  }, [id2, active, state2.listboxState]);
  var handleClick = React.useCallback(function(event) {
    if (disabled)
      return event.preventDefault();
    select();
    dispatch({
      type: ActionTypes.CloseListbox
    });
    disposables().nextFrame(function() {
      var _state$buttonRef$curr6;
      return (_state$buttonRef$curr6 = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr6.focus({
        preventScroll: true
      });
    });
  }, [dispatch, state2.buttonRef, disabled, select]);
  var handleFocus = React.useCallback(function() {
    if (disabled)
      return dispatch({
        type: ActionTypes.GoToOption,
        focus: Focus.Nothing
      });
    dispatch({
      type: ActionTypes.GoToOption,
      focus: Focus.Specific,
      id: id2
    });
  }, [disabled, id2, dispatch]);
  var handleMove = React.useCallback(function() {
    if (disabled)
      return;
    if (active)
      return;
    dispatch({
      type: ActionTypes.GoToOption,
      focus: Focus.Specific,
      id: id2
    });
  }, [disabled, active, id2, dispatch]);
  var handleLeave = React.useCallback(function() {
    if (disabled)
      return;
    if (!active)
      return;
    dispatch({
      type: ActionTypes.GoToOption,
      focus: Focus.Nothing
    });
  }, [disabled, active, dispatch]);
  var slot = React.useMemo(function() {
    return {
      active,
      selected,
      disabled
    };
  }, [active, selected, disabled]);
  var propsWeControl = {
    id: id2,
    role: "option",
    tabIndex: disabled === true ? void 0 : -1,
    "aria-disabled": disabled === true ? true : void 0,
    "aria-selected": selected === true ? true : void 0,
    disabled: void 0,
    onClick: handleClick,
    onFocus: handleFocus,
    onPointerMove: handleMove,
    onMouseMove: handleMove,
    onPointerLeave: handleLeave,
    onMouseLeave: handleLeave
  };
  return render({
    props: _extends({}, passthroughProps, propsWeControl),
    slot,
    defaultTag: DEFAULT_OPTION_TAG,
    name: "Listbox.Option"
  });
}
Listbox.Button = Button$1;
Listbox.Label = Label;
Listbox.Options = Options;
Listbox.Option = Option$1;
const Button2 = "_Button_1hlxa_6";
const Menu = "_Menu_1hlxa_58";
const Copy = "_Copy_1hlxa_66";
const Visible = "_Visible_1hlxa_73";
const Invisible = "_Invisible_1hlxa_83";
const State = "_State_1hlxa_88";
const OK = "_OK_1hlxa_92";
const Icon = "_Icon_1hlxa_96";
const Editor = "_Editor_1hlxa_101";
const Text = "_Text_1hlxa_139";
const Option = "_Option_1hlxa_156";
const Output = "_Output_1hlxa_188";
const Form = "_Form_1hlxa_207";
const Build = "_Build_1hlxa_238";
const Item = "_Item_1hlxa_247";
var styles = {
  "Run-Code": "_Run-Code_1hlxa_1",
  Button: Button2,
  Menu,
  Copy,
  Visible,
  Invisible,
  State,
  OK,
  Icon,
  "Editor-Box": "_Editor-Box_1hlxa_101",
  Editor,
  "Help-Text": "_Help-Text_1hlxa_112",
  "List-Box": "_List-Box_1hlxa_117",
  "Button-Box": "_Button-Box_1hlxa_121",
  Text,
  "Option-List": "_Option-List_1hlxa_156",
  Option,
  "Output-Header": "_Output-Header_1hlxa_188",
  Output,
  Form,
  "More-Options": "_More-Options_1hlxa_223",
  Build,
  Item,
  "lds-grid": "_lds-grid_1hlxa_255"
};
const Widget$2 = ({ languageList, language, onChange }) => {
  return /* @__PURE__ */ React.createElement(Listbox, {
    value: language,
    onChange
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles["List-Box"]
  }, /* @__PURE__ */ React.createElement(Listbox.Button, {
    className: styles["Button-Box"]
  }, /* @__PURE__ */ React.createElement("span", {
    className: styles.Text
  }, language), /* @__PURE__ */ React.createElement("span", {
    className: styles.Icon
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "15px",
    viewBox: "0 0 24 24",
    width: "15px",
    fill: "#ccc"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 5.83l2.46 2.46c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 3.7c-.39-.39-1.02-.39-1.41 0L8.12 6.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 5.83zm0 12.34l-2.46-2.46c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L12 18.17z"
  })))), /* @__PURE__ */ React.createElement(Listbox.Options, {
    className: styles["Option-List"]
  }, languageList.map((lang, index2) => /* @__PURE__ */ React.createElement(Listbox.Option, {
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
const themeData = {
  base: "vs-dark",
  inherit: true,
  rules: [
    {
      background: "2d2d2d",
      token: ""
    },
    {
      foreground: "969896",
      token: "comment"
    },
    {
      foreground: "f08d49",
      token: "number"
    },
    {
      foreground: "ced1cf",
      token: "keyword.operator.class"
    },
    {
      foreground: "ced1cf",
      token: "constant.other"
    },
    {
      foreground: "ced1cf",
      token: "source.php.embedded.line"
    },
    {
      foreground: "cc6666",
      token: "variable"
    },
    {
      foreground: "cc6666",
      token: "support.other.variable"
    },
    {
      foreground: "cc6666",
      token: "string.other.link"
    },
    {
      foreground: "cc6666",
      token: "string.regexp"
    },
    {
      foreground: "cc6666",
      token: "entity.name.tag"
    },
    {
      foreground: "cc6666",
      token: "entity.other.attribute-name"
    },
    {
      foreground: "cc6666",
      token: "meta.tag"
    },
    {
      foreground: "cc6666",
      token: "declaration.tag"
    },
    {
      foreground: "cc6666",
      token: "markup.deleted.git_gutter"
    },
    {
      foreground: "de935f",
      token: "constant.numeric"
    },
    {
      foreground: "de935f",
      token: "constant.language"
    },
    {
      foreground: "de935f",
      token: "support.constant"
    },
    {
      foreground: "de935f",
      token: "constant.character"
    },
    {
      foreground: "de935f",
      token: "variable.parameter"
    },
    {
      foreground: "de935f",
      token: "punctuation.section.embedded"
    },
    {
      foreground: "de935f",
      token: "keyword.other.unit"
    },
    {
      foreground: "f0c674",
      token: "entity.name.class"
    },
    {
      foreground: "f0c674",
      token: "entity.name.type.class"
    },
    {
      foreground: "f0c674",
      token: "support.type"
    },
    {
      foreground: "f0c674",
      token: "support.class"
    },
    {
      foreground: "7ec699",
      token: "string"
    },
    {
      foreground: "7ec699",
      token: "constant.other.symbol"
    },
    {
      foreground: "7ec699",
      token: "entity.other.inherited-class"
    },
    {
      foreground: "7ec699",
      token: "markup.heading"
    },
    {
      foreground: "7ec699",
      token: "markup.inserted.git_gutter"
    },
    {
      foreground: "8abeb7",
      token: "keyword.operator"
    },
    {
      foreground: "8abeb7",
      token: "constant.other.color"
    },
    {
      foreground: "81a2be",
      token: "entity.name.function"
    },
    {
      foreground: "81a2be",
      token: "meta.function-call"
    },
    {
      foreground: "81a2be",
      token: "support.function"
    },
    {
      foreground: "81a2be",
      token: "keyword.other.special-method"
    },
    {
      foreground: "81a2be",
      token: "meta.block-level"
    },
    {
      foreground: "81a2be",
      token: "markup.changed.git_gutter"
    },
    {
      foreground: "cc99cd",
      token: "keyword"
    },
    {
      foreground: "cc99cd",
      token: "storage"
    },
    {
      foreground: "cc99cd",
      token: "storage.type"
    },
    {
      foreground: "cc99cd",
      token: "entity.name.tag.css"
    },
    {
      foreground: "ced2cf",
      background: "df5f5f",
      token: "invalid"
    },
    {
      foreground: "ced2cf",
      background: "82a3bf",
      token: "meta.separator"
    },
    {
      foreground: "ced2cf",
      background: "b798bf",
      token: "invalid.deprecated"
    },
    {
      foreground: "ffffff",
      token: "markup.inserted.diff"
    },
    {
      foreground: "ffffff",
      token: "markup.deleted.diff"
    },
    {
      foreground: "ffffff",
      token: "meta.diff.header.to-file"
    },
    {
      foreground: "ffffff",
      token: "meta.diff.header.from-file"
    },
    {
      foreground: "718c00",
      token: "markup.inserted.diff"
    },
    {
      foreground: "718c00",
      token: "meta.diff.header.to-file"
    },
    {
      foreground: "c82829",
      token: "markup.deleted.diff"
    },
    {
      foreground: "c82829",
      token: "meta.diff.header.from-file"
    },
    {
      foreground: "ffffff",
      background: "4271ae",
      token: "meta.diff.header.from-file"
    },
    {
      foreground: "ffffff",
      background: "4271ae",
      token: "meta.diff.header.to-file"
    },
    {
      foreground: "3e999f",
      fontStyle: "italic",
      token: "meta.diff.range"
    },
    {
      foreground: "f8c555",
      token: "type.identifier"
    }
  ],
  colors: {
    "editor.foreground": "#C5C8C6",
    "editor.background": "#2d2d2d",
    "editor.selectionBackground": "#373B41",
    "editor.lineHighlightBackground": "#282A2E",
    "editorCursor.foreground": "#AEAFAD",
    "editorWhitespace.foreground": "#4B4E55"
  }
};
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
    api: { post, get, connectWebSocket, showLoading }
  } = options;
  const [languages, setLanguages] = React.useState([]);
  const [language, setLanguage] = React.useState();
  const [dataMap, setDataMap] = React.useState({});
  const [copied, setCopied] = React.useState();
  const [stage, setStage] = React.useState(STAGE_NO_STARTED);
  const [runtime, setRuntime] = React.useState();
  const [output, setOutput] = React.useState();
  const [buildOutput, setBuildOutput] = React.useState();
  const [moreOption, setMoreOptions] = React.useState(false);
  const editorRef = React.useRef();
  const containerRef = React.useRef();
  const buildRef = React.useRef();
  const outputRef = React.useRef();
  const getLanguages = React.useCallback(async () => {
    try {
      const res = await get("/api/compiler/languages");
      setLanguages(res.data.languages);
    } catch (err) {
      onError(err.msg);
    }
  }, [get, setLanguages, onError]);
  const getCode = React.useCallback(() => {
    if (!dataMap[language] || !dataMap[language].code) {
      return "";
    }
    return dataMap[language].code;
  }, [language, dataMap]);
  const getDependencies = React.useCallback(() => {
    if (!dataMap[language] || !dataMap[language].dependencies) {
      return "";
    }
    return dataMap[language].dependencies;
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
  const handleRunStage = React.useCallback((data) => {
    setStage(STAGE_RUNNING);
    setOutput((prev) => {
      outputRef.current = (prev ? prev : "") + data.output;
      return outputRef.current;
    });
  }, []);
  const handleBuildStage = React.useCallback((data) => {
    setStage(STAGE_BUILDING);
    setBuildOutput((prev) => {
      return (prev ? prev : "") + data.output;
    });
    if (!buildRef.current) {
      return;
    }
    buildRef.current.scrollTo({
      top: buildRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, []);
  const handleCompleteStage = React.useCallback((data, ws) => {
    ws.close();
    setStage(STAGE_NO_STARTED);
    setRuntime(data.runtime);
    onExecuted(outputRef.current);
  }, [onExecuted]);
  const handleErrorStage = React.useCallback((data, ws) => {
    console.log(data);
    ws.close();
    setStage(STAGE_NO_STARTED);
  }, []);
  const connectSocket = React.useCallback(async (runId) => {
    const ws = connectWebSocket(`/ws/compiler/${runId}`);
    ws.onmessage = function(event) {
      const data = JSON.parse(event.data);
      switch (data.stage) {
        case "run":
          {
            handleRunStage(data);
          }
          break;
        case "complete":
          {
            handleCompleteStage(data, ws);
          }
          break;
        case "error":
          {
            handleErrorStage(data, ws);
          }
          break;
        case "build":
          {
            handleBuildStage(data);
          }
          break;
      }
    };
  }, [handleCompleteStage, connectWebSocket]);
  const runCode = React.useCallback(async () => {
    setStage(STAGE_SETUP);
    setOutput(null);
    setBuildOutput(null);
    setRuntime(null);
    try {
      let data = {
        language,
        data: JSON.stringify(dataMap[language])
      };
      const res = await post("/api/compiler/run", data);
      connectSocket(res.data.runId);
    } catch (err) {
      setStage(STAGE_NO_STARTED);
      onError(err.msg);
    }
  }, [language, dataMap, connectSocket, getCode]);
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
    } catch (e) {
      console.log(e);
    } finally {
      if (!language) {
        setLanguage(defaultLanguage);
      }
    }
  }, [input]);
  const onSizeChanged = (editorRef2, containerRef2) => {
    if (containerRef2.current == null) {
      return;
    }
    editorRef2.current.layout({
      width: containerRef2.current.clientWidth,
      height: editorRef2.current.getContentHeight()
    });
  };
  const handleEditorDidMount = (editorRef2, containerRef2) => {
    setTimeout(() => {
      onSizeChanged(editorRef2, containerRef2);
    }, 100);
    editorRef2.current.onDidContentSizeChange(({ contentHeightChanged }) => {
      if (!contentHeightChanged) {
        return;
      }
      onSizeChanged(editorRef2, containerRef2);
    });
  };
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
      }, /* @__PURE__ */ React.createElement("textarea", {
        placeholder: "\u7B2C\u4E09\u65B9\u4F9D\u8D56\u914D\u7F6E",
        value: getDependencies(),
        onChange: (e) => {
          if (!!e.target.value.trim() || !!getCode()) {
            if (dataMap[language]) {
              dataMap[language]["dependencies"] = e.target.value;
            } else {
              dataMap[language] = { dependencies: e.target.value };
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
  }, [language, dataMap, onChange, getDependencies, getCode]);
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
    text: getCode(),
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
  }, renderCopyIcon("#ccc")), /* @__PURE__ */ React.createElement("div", {
    className: `${styles.OK} ${styles.State} ${copied ? styles.Visible : styles.Invisible}`
  }, renderOkIcon("#ccc")))))), /* @__PURE__ */ React.createElement("div", {
    ref: containerRef,
    className: styles.Editor
  }, /* @__PURE__ */ React.createElement(index, {
    className: styles.CodeEditor,
    language: getEditorLanguage(language),
    value: getCode(),
    loading: showLoading(),
    options: {
      fontSize: 15,
      fontFamily: "Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
      scrollBeyondLastLine: false,
      minimap: {
        enabled: false
      },
      wrappingStrategy: "advanced",
      lineNumbersMinChars: 4,
      lineNumbers: "off",
      wordWrap: "on",
      overviewRulerLanes: 0,
      renderLineHighlight: "none",
      scrollbar: {
        alwaysConsumeMouseWheel: false
      }
    },
    onMount: (editor, monaco) => {
      monaco.editor.defineTheme("zx-theme", themeData);
      monaco.editor.setTheme("zx-theme");
      editorRef.current = editor;
      handleEditorDidMount(editorRef, containerRef);
    },
    onChange: (code) => {
      if (!!code.trim() || !!getDependencies()) {
        if (dataMap[language]) {
          dataMap[language]["code"] = code;
        } else {
          dataMap[language] = { code };
        }
      } else {
        delete dataMap[language];
      }
      if (onChange) {
        onChange(JSON.stringify(dataMap));
      }
    }
  }))), moreOption && mode === "edit" ? renderConfig() : null, mode === "edit" && /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setMoreOptions((previous) => !previous);
    },
    className: styles["More-Options"]
  }, moreOption ? "\u6536\u8D77\u9009\u9879" : "\u66F4\u591A\u9009\u9879"), renderHelpText(), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("button", {
    disabled: stage != STAGE_NO_STARTED,
    onClick: () => runCode(),
    className: styles.Button
  }, getStage())), buildOutput ? /* @__PURE__ */ React.createElement("div", {
    className: styles.Build
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles["Output-Header"]
  }, /* @__PURE__ */ React.createElement("div", null, "\u7F16\u8BD1\u65E5\u5FD7")), /* @__PURE__ */ React.createElement("pre", {
    ref: buildRef,
    className: styles.Output
  }, HTMLReactParser$1(buildOutput)), stage === STAGE_BUILDING ? /* @__PURE__ */ React.createElement(Widget$1, null) : null) : null, output ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: styles["Output-Header"]
  }, /* @__PURE__ */ React.createElement("div", null, "\u8F93\u51FA\u7ED3\u679C"), runtime ? /* @__PURE__ */ React.createElement("div", null, runtime) : null), /* @__PURE__ */ React.createElement("pre", {
    className: styles.Output
  }, output, stage === STAGE_RUNNING ? /* @__PURE__ */ React.createElement(Widget$1, null) : null)) : null);
};
export { Widget as default };
