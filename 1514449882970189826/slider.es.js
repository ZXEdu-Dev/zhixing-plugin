var __defProp = Object.defineProperty;
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
function isObject$2(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend$2(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  Object.keys(src).forEach(function(key) {
    if (typeof target[key] === "undefined")
      target[key] = src[key];
    else if (isObject$2(src[key]) && isObject$2(target[key]) && Object.keys(src[key]).length > 0) {
      extend$2(target[key], src[key]);
    }
  });
}
var ssrDocument = {
  body: {},
  addEventListener: function() {
  },
  removeEventListener: function() {
  },
  activeElement: {
    blur: function() {
    },
    nodeName: ""
  },
  querySelector: function() {
    return null;
  },
  querySelectorAll: function() {
    return [];
  },
  getElementById: function() {
    return null;
  },
  createEvent: function() {
    return {
      initEvent: function() {
      }
    };
  },
  createElement: function() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function() {
      },
      getElementsByTagName: function() {
        return [];
      }
    };
  },
  createElementNS: function() {
    return {};
  },
  importNode: function() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  var doc = typeof document !== "undefined" ? document : {};
  extend$2(doc, ssrDocument);
  return doc;
}
var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState: function() {
    },
    pushState: function() {
    },
    go: function() {
    },
    back: function() {
    }
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: function() {
  },
  removeEventListener: function() {
  },
  getComputedStyle: function() {
    return {
      getPropertyValue: function() {
        return "";
      }
    };
  },
  Image: function() {
  },
  Date: function() {
  },
  screen: {},
  setTimeout: function() {
  },
  clearTimeout: function() {
  },
  matchMedia: function() {
    return {};
  },
  requestAnimationFrame: function(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame: function(id) {
    if (typeof setTimeout === "undefined") {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  var win = typeof window !== "undefined" ? window : {};
  extend$2(win, ssrWindow);
  return win;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function makeReactive(obj) {
  var proto = obj.__proto__;
  Object.defineProperty(obj, "__proto__", {
    get: function get() {
      return proto;
    },
    set: function set(value) {
      proto.__proto__ = value;
    }
  });
}
var Dom7 = /* @__PURE__ */ function(_Array) {
  _inheritsLoose(Dom72, _Array);
  function Dom72(items) {
    var _this;
    _this = _Array.call.apply(_Array, [this].concat(items)) || this;
    makeReactive(_assertThisInitialized(_this));
    return _this;
  }
  return Dom72;
}(/* @__PURE__ */ _wrapNativeSuper(Array));
function arrayFlat(arr) {
  if (arr === void 0) {
    arr = [];
  }
  var res = [];
  arr.forEach(function(el) {
    if (Array.isArray(el)) {
      res.push.apply(res, arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  var uniqueArray = [];
  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1)
      uniqueArray.push(arr[i]);
  }
  return uniqueArray;
}
function qsa(selector, context) {
  if (typeof selector !== "string") {
    return [selector];
  }
  var a = [];
  var res = context.querySelectorAll(selector);
  for (var i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }
  return a;
}
function $(selector, context) {
  var window2 = getWindow();
  var document2 = getDocument();
  var arr = [];
  if (!context && selector instanceof Dom7) {
    return selector;
  }
  if (!selector) {
    return new Dom7(arr);
  }
  if (typeof selector === "string") {
    var html2 = selector.trim();
    if (html2.indexOf("<") >= 0 && html2.indexOf(">") >= 0) {
      var toCreate = "div";
      if (html2.indexOf("<li") === 0)
        toCreate = "ul";
      if (html2.indexOf("<tr") === 0)
        toCreate = "tbody";
      if (html2.indexOf("<td") === 0 || html2.indexOf("<th") === 0)
        toCreate = "tr";
      if (html2.indexOf("<tbody") === 0)
        toCreate = "table";
      if (html2.indexOf("<option") === 0)
        toCreate = "select";
      var tempParent = document2.createElement(toCreate);
      tempParent.innerHTML = html2;
      for (var i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document2);
    }
  } else if (selector.nodeType || selector === window2 || selector === document2) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7)
      return selector;
    arr = selector;
  }
  return new Dom7(arrayUnique(arr));
}
$.fn = Dom7.prototype;
function addClass() {
  for (var _len = arguments.length, classes2 = new Array(_len), _key = 0; _key < _len; _key++) {
    classes2[_key] = arguments[_key];
  }
  var classNames = arrayFlat(classes2.map(function(c) {
    return c.split(" ");
  }));
  this.forEach(function(el) {
    var _el$classList;
    (_el$classList = el.classList).add.apply(_el$classList, classNames);
  });
  return this;
}
function removeClass() {
  for (var _len2 = arguments.length, classes2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    classes2[_key2] = arguments[_key2];
  }
  var classNames = arrayFlat(classes2.map(function(c) {
    return c.split(" ");
  }));
  this.forEach(function(el) {
    var _el$classList2;
    (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
  });
  return this;
}
function toggleClass() {
  for (var _len3 = arguments.length, classes2 = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    classes2[_key3] = arguments[_key3];
  }
  var classNames = arrayFlat(classes2.map(function(c) {
    return c.split(" ");
  }));
  this.forEach(function(el) {
    classNames.forEach(function(className) {
      el.classList.toggle(className);
    });
  });
}
function hasClass() {
  for (var _len4 = arguments.length, classes2 = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    classes2[_key4] = arguments[_key4];
  }
  var classNames = arrayFlat(classes2.map(function(c) {
    return c.split(" ");
  }));
  return arrayFilter(this, function(el) {
    return classNames.filter(function(className) {
      return el.classList.contains(className);
    }).length > 0;
  }).length > 0;
}
function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === "string") {
    if (this[0])
      return this[0].getAttribute(attrs);
    return void 0;
  }
  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      this[i].setAttribute(attrs, value);
    } else {
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }
  return this;
}
function removeAttr(attr2) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr2);
  }
  return this;
}
function transform(transform2) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform2;
  }
  return this;
}
function transition$1(duration) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== "string" ? duration + "ms" : duration;
  }
  return this;
}
function on() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }
  var eventType = args[0], targetSelector = args[1], listener = args[2], capture = args[3];
  if (typeof args[1] === "function") {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = void 0;
  }
  if (!capture)
    capture = false;
  function handleLiveEvent(e) {
    var target = e.target;
    if (!target)
      return;
    var eventData = e.target.dom7EventData || [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    if ($(target).is(targetSelector))
      listener.apply(target, eventData);
    else {
      var _parents = $(target).parents();
      for (var k = 0; k < _parents.length; k += 1) {
        if ($(_parents[k]).is(targetSelector))
          listener.apply(_parents[k], eventData);
      }
    }
  }
  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    listener.apply(this, eventData);
  }
  var events2 = eventType.split(" ");
  var j;
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (!targetSelector) {
      for (j = 0; j < events2.length; j += 1) {
        var event = events2[j];
        if (!el.dom7Listeners)
          el.dom7Listeners = {};
        if (!el.dom7Listeners[event])
          el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      for (j = 0; j < events2.length; j += 1) {
        var _event = events2[j];
        if (!el.dom7LiveListeners)
          el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[_event])
          el.dom7LiveListeners[_event] = [];
        el.dom7LiveListeners[_event].push({
          listener,
          proxyListener: handleLiveEvent
        });
        el.addEventListener(_event, handleLiveEvent, capture);
      }
    }
  }
  return this;
}
function off() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }
  var eventType = args[0], targetSelector = args[1], listener = args[2], capture = args[3];
  if (typeof args[1] === "function") {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = void 0;
  }
  if (!capture)
    capture = false;
  var events2 = eventType.split(" ");
  for (var i = 0; i < events2.length; i += 1) {
    var event = events2[i];
    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var handlers = void 0;
      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }
      if (handlers && handlers.length) {
        for (var k = handlers.length - 1; k >= 0; k -= 1) {
          var handler = handlers[k];
          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }
  return this;
}
function trigger() {
  var window2 = getWindow();
  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }
  var events2 = args[0].split(" ");
  var eventData = args[1];
  for (var i = 0; i < events2.length; i += 1) {
    var event = events2[i];
    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      if (window2.CustomEvent) {
        var evt = new window2.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter(function(data, dataIndex) {
          return dataIndex > 0;
        });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }
  return this;
}
function transitionEnd$1(callback) {
  var dom = this;
  function fireCallBack(e) {
    if (e.target !== this)
      return;
    callback.call(this, e);
    dom.off("transitionend", fireCallBack);
  }
  if (callback) {
    dom.on("transitionend", fireCallBack);
  }
  return this;
}
function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles = this.styles();
      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue("margin-right")) + parseFloat(_styles.getPropertyValue("margin-left"));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles2 = this.styles();
      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue("margin-top")) + parseFloat(_styles2.getPropertyValue("margin-bottom"));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function offset() {
  if (this.length > 0) {
    var window2 = getWindow();
    var document2 = getDocument();
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = document2.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;
    var scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
    var scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }
  return null;
}
function styles$1() {
  var window2 = getWindow();
  if (this[0])
    return window2.getComputedStyle(this[0], null);
  return {};
}
function css(props, value) {
  var window2 = getWindow();
  var i;
  if (arguments.length === 1) {
    if (typeof props === "string") {
      if (this[0])
        return window2.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      for (i = 0; i < this.length; i += 1) {
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }
      return this;
    }
  }
  if (arguments.length === 2 && typeof props === "string") {
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }
    return this;
  }
  return this;
}
function each(callback) {
  if (!callback)
    return this;
  this.forEach(function(el, index2) {
    callback.apply(el, [el, index2]);
  });
  return this;
}
function filter(callback) {
  var result = arrayFilter(this, callback);
  return $(result);
}
function html(html2) {
  if (typeof html2 === "undefined") {
    return this[0] ? this[0].innerHTML : null;
  }
  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html2;
  }
  return this;
}
function text(text2) {
  if (typeof text2 === "undefined") {
    return this[0] ? this[0].textContent.trim() : null;
  }
  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text2;
  }
  return this;
}
function is(selector) {
  var window2 = getWindow();
  var document2 = getDocument();
  var el = this[0];
  var compareWith;
  var i;
  if (!el || typeof selector === "undefined")
    return false;
  if (typeof selector === "string") {
    if (el.matches)
      return el.matches(selector);
    if (el.webkitMatchesSelector)
      return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector)
      return el.msMatchesSelector(selector);
    compareWith = $(selector);
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el)
        return true;
    }
    return false;
  }
  if (selector === document2) {
    return el === document2;
  }
  if (selector === window2) {
    return el === window2;
  }
  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el)
        return true;
    }
    return false;
  }
  return false;
}
function index() {
  var child = this[0];
  var i;
  if (child) {
    i = 0;
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1)
        i += 1;
    }
    return i;
  }
  return void 0;
}
function eq(index2) {
  if (typeof index2 === "undefined")
    return this;
  var length = this.length;
  if (index2 > length - 1) {
    return $([]);
  }
  if (index2 < 0) {
    var returnIndex = length + index2;
    if (returnIndex < 0)
      return $([]);
    return $([this[returnIndex]]);
  }
  return $([this[index2]]);
}
function append() {
  var newChild;
  var document2 = getDocument();
  for (var k = 0; k < arguments.length; k += 1) {
    newChild = k < 0 || arguments.length <= k ? void 0 : arguments[k];
    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === "string") {
        var tempDiv = document2.createElement("div");
        tempDiv.innerHTML = newChild;
        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }
  return this;
}
function prepend(newChild) {
  var document2 = getDocument();
  var i;
  var j;
  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === "string") {
      var tempDiv = document2.createElement("div");
      tempDiv.innerHTML = newChild;
      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }
  return this;
}
function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }
      return $([]);
    }
    if (this[0].nextElementSibling)
      return $([this[0].nextElementSibling]);
    return $([]);
  }
  return $([]);
}
function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el)
    return $([]);
  while (el.nextElementSibling) {
    var _next = el.nextElementSibling;
    if (selector) {
      if ($(_next).is(selector))
        nextEls.push(_next);
    } else
      nextEls.push(_next);
    el = _next;
  }
  return $(nextEls);
}
function prev(selector) {
  if (this.length > 0) {
    var el = this[0];
    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }
      return $([]);
    }
    if (el.previousElementSibling)
      return $([el.previousElementSibling]);
    return $([]);
  }
  return $([]);
}
function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el)
    return $([]);
  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling;
    if (selector) {
      if ($(_prev).is(selector))
        prevEls.push(_prev);
    } else
      prevEls.push(_prev);
    el = _prev;
  }
  return $(prevEls);
}
function parent(selector) {
  var parents2 = [];
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector))
          parents2.push(this[i].parentNode);
      } else {
        parents2.push(this[i].parentNode);
      }
    }
  }
  return $(parents2);
}
function parents(selector) {
  var parents2 = [];
  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode;
    while (_parent) {
      if (selector) {
        if ($(_parent).is(selector))
          parents2.push(_parent);
      } else {
        parents2.push(_parent);
      }
      _parent = _parent.parentNode;
    }
  }
  return $(parents2);
}
function closest(selector) {
  var closest2 = this;
  if (typeof selector === "undefined") {
    return $([]);
  }
  if (!closest2.is(selector)) {
    closest2 = closest2.parents(selector).eq(0);
  }
  return closest2;
}
function find(selector) {
  var foundElements = [];
  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);
    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }
  return $(foundElements);
}
function children(selector) {
  var children2 = [];
  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].children;
    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children2.push(childNodes[j]);
      }
    }
  }
  return $(children2);
}
function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode)
      this[i].parentNode.removeChild(this[i]);
  }
  return this;
}
var Methods = {
  addClass,
  removeClass,
  hasClass,
  toggleClass,
  attr,
  removeAttr,
  transform,
  transition: transition$1,
  on,
  off,
  trigger,
  transitionEnd: transitionEnd$1,
  outerWidth,
  outerHeight,
  styles: styles$1,
  offset,
  css,
  each,
  html,
  text,
  is,
  index,
  eq,
  append,
  prepend,
  next,
  nextAll,
  prev,
  prevAll,
  parent,
  parents,
  closest,
  find,
  children,
  filter,
  remove
};
Object.keys(Methods).forEach(function(methodName) {
  Object.defineProperty($.fn, methodName, {
    value: Methods[methodName],
    writable: true
  });
});
function deleteProps(obj) {
  var object = obj;
  Object.keys(object).forEach(function(key) {
    try {
      object[key] = null;
    } catch (e) {
    }
    try {
      delete object[key];
    } catch (e) {
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle$1(el) {
  var window2 = getWindow();
  var style;
  if (window2.getComputedStyle) {
    style = window2.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = "x";
  }
  var window2 = getWindow();
  var matrix;
  var curTransform;
  var transformMatrix;
  var curStyle = getComputedStyle$1(el);
  if (window2.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(",").length > 6) {
      curTransform = curTransform.split(", ").map(function(a) {
        return a.replace(",", ".");
      }).join(", ");
    }
    transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
    matrix = transformMatrix.toString().split(",");
  }
  if (axis === "x") {
    if (window2.WebKitCSSMatrix)
      curTransform = transformMatrix.m41;
    else if (matrix.length === 16)
      curTransform = parseFloat(matrix[12]);
    else
      curTransform = parseFloat(matrix[4]);
  }
  if (axis === "y") {
    if (window2.WebKitCSSMatrix)
      curTransform = transformMatrix.m42;
    else if (matrix.length === 16)
      curTransform = parseFloat(matrix[13]);
    else
      curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject$1(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
  if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend$1() {
  var to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
  var noExtend = ["__proto__", "constructor", "prototype"];
  for (var i = 1; i < arguments.length; i += 1) {
    var nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
      var keysArray = Object.keys(Object(nextSource)).filter(function(key) {
        return noExtend.indexOf(key) < 0;
      });
      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== void 0 && desc.enumerable) {
          if (isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend$1(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend$1(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function bindModuleMethods(instance, obj) {
  Object.keys(obj).forEach(function(key) {
    if (isObject$1(obj[key])) {
      Object.keys(obj[key]).forEach(function(subKey) {
        if (typeof obj[key][subKey] === "function") {
          obj[key][subKey] = obj[key][subKey].bind(instance);
        }
      });
    }
    instance[key] = obj[key];
  });
}
var support;
function calcSupport() {
  var window2 = getWindow();
  var document2 = getDocument();
  return {
    touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch),
    pointerEvents: !!window2.PointerEvent && "maxTouchPoints" in window2.navigator && window2.navigator.maxTouchPoints >= 0,
    observer: function checkObserver() {
      return "MutationObserver" in window2 || "WebkitMutationObserver" in window2;
    }(),
    passiveListener: function checkPassiveListener() {
      var supportsPassive = false;
      try {
        var opts = Object.defineProperty({}, "passive", {
          get: function get() {
            supportsPassive = true;
          }
        });
        window2.addEventListener("testPassiveListener", null, opts);
      } catch (e) {
      }
      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return "ongesturestart" in window2;
    }()
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}
var device;
function calcDevice(_temp) {
  var _ref = _temp === void 0 ? {} : _temp, userAgent = _ref.userAgent;
  var support2 = getSupport();
  var window2 = getWindow();
  var platform = window2.navigator.platform;
  var ua = userAgent || window2.navigator.userAgent;
  var device2 = {
    ios: false,
    android: false
  };
  var screenWidth = window2.screen.width;
  var screenHeight = window2.screen.height;
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  var windows = platform === "Win32";
  var macos = platform === "MacIntel";
  var iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  if (!ipad && macos && support2.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad)
      ipad = [0, 1, "13_0_0"];
    macos = false;
  }
  if (android && !windows) {
    device2.os = "android";
    device2.android = true;
  }
  if (ipad || iphone || ipod) {
    device2.os = "ios";
    device2.ios = true;
  }
  return device2;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!device) {
    device = calcDevice(overrides);
  }
  return device;
}
var browser;
function calcBrowser() {
  var window2 = getWindow();
  function isSafari() {
    var ua = window2.navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
  }
  return {
    isEdge: !!window2.navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}
var supportsResizeObserver = function supportsResizeObserver2() {
  var window2 = getWindow();
  return typeof window2.ResizeObserver !== "undefined";
};
var Resize = {
  name: "resize",
  create: function create() {
    var swiper = this;
    extend$1(swiper, {
      resize: {
        observer: null,
        createObserver: function createObserver() {
          if (!swiper || swiper.destroyed || !swiper.initialized)
            return;
          swiper.resize.observer = new ResizeObserver(function(entries) {
            var width = swiper.width, height = swiper.height;
            var newWidth = width;
            var newHeight = height;
            entries.forEach(function(_ref) {
              var contentBoxSize = _ref.contentBoxSize, contentRect = _ref.contentRect, target = _ref.target;
              if (target && target !== swiper.el)
                return;
              newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
              newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
            });
            if (newWidth !== width || newHeight !== height) {
              swiper.resize.resizeHandler();
            }
          });
          swiper.resize.observer.observe(swiper.el);
        },
        removeObserver: function removeObserver() {
          if (swiper.resize.observer && swiper.resize.observer.unobserve && swiper.el) {
            swiper.resize.observer.unobserve(swiper.el);
            swiper.resize.observer = null;
          }
        },
        resizeHandler: function resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized)
            return;
          swiper.emit("beforeResize");
          swiper.emit("resize");
        },
        orientationChangeHandler: function orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized)
            return;
          swiper.emit("orientationchange");
        }
      }
    });
  },
  on: {
    init: function init(swiper) {
      var window2 = getWindow();
      if (swiper.params.resizeObserver && supportsResizeObserver()) {
        swiper.resize.createObserver();
        return;
      }
      window2.addEventListener("resize", swiper.resize.resizeHandler);
      window2.addEventListener("orientationchange", swiper.resize.orientationChangeHandler);
    },
    destroy: function destroy(swiper) {
      var window2 = getWindow();
      swiper.resize.removeObserver();
      window2.removeEventListener("resize", swiper.resize.resizeHandler);
      window2.removeEventListener("orientationchange", swiper.resize.orientationChangeHandler);
    }
  }
};
function _extends$7() {
  _extends$7 = Object.assign || function(target) {
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
  return _extends$7.apply(this, arguments);
}
var Observer = {
  attach: function attach(target, options) {
    if (options === void 0) {
      options = {};
    }
    var window2 = getWindow();
    var swiper = this;
    var ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
    var observer = new ObserverFunc(function(mutations) {
      if (mutations.length === 1) {
        swiper.emit("observerUpdate", mutations[0]);
        return;
      }
      var observerUpdate2 = function observerUpdate3() {
        swiper.emit("observerUpdate", mutations[0]);
      };
      if (window2.requestAnimationFrame) {
        window2.requestAnimationFrame(observerUpdate2);
      } else {
        window2.setTimeout(observerUpdate2, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === "undefined" ? true : options.attributes,
      childList: typeof options.childList === "undefined" ? true : options.childList,
      characterData: typeof options.characterData === "undefined" ? true : options.characterData
    });
    swiper.observer.observers.push(observer);
  },
  init: function init2() {
    var swiper = this;
    if (!swiper.support.observer || !swiper.params.observer)
      return;
    if (swiper.params.observeParents) {
      var containerParents = swiper.$el.parents();
      for (var i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    }
    swiper.observer.attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    });
    swiper.observer.attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  },
  destroy: function destroy2() {
    var swiper = this;
    swiper.observer.observers.forEach(function(observer) {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  }
};
var Observer$1 = {
  name: "observer",
  params: {
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  },
  create: function create2() {
    var swiper = this;
    bindModuleMethods(swiper, {
      observer: _extends$7({}, Observer, {
        observers: []
      })
    });
  },
  on: {
    init: function init3(swiper) {
      swiper.observer.init();
    },
    destroy: function destroy3(swiper) {
      swiper.observer.destroy();
    }
  }
};
var modular = {
  useParams: function useParams(instanceParams) {
    var instance = this;
    if (!instance.modules)
      return;
    Object.keys(instance.modules).forEach(function(moduleName) {
      var module = instance.modules[moduleName];
      if (module.params) {
        extend$1(instanceParams, module.params);
      }
    });
  },
  useModules: function useModules(modulesParams) {
    if (modulesParams === void 0) {
      modulesParams = {};
    }
    var instance = this;
    if (!instance.modules)
      return;
    Object.keys(instance.modules).forEach(function(moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {};
      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function(moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      }
      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  }
};
var eventsEmitter = {
  on: function on2(events2, handler, priority) {
    var self = this;
    if (typeof handler !== "function")
      return self;
    var method = priority ? "unshift" : "push";
    events2.split(" ").forEach(function(event) {
      if (!self.eventsListeners[event])
        self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once: function once(events2, handler, priority) {
    var self = this;
    if (typeof handler !== "function")
      return self;
    function onceHandler() {
      self.off(events2, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events2, onceHandler, priority);
  },
  onAny: function onAny(handler, priority) {
    var self = this;
    if (typeof handler !== "function")
      return self;
    var method = priority ? "unshift" : "push";
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny: function offAny(handler) {
    var self = this;
    if (!self.eventsAnyListeners)
      return self;
    var index2 = self.eventsAnyListeners.indexOf(handler);
    if (index2 >= 0) {
      self.eventsAnyListeners.splice(index2, 1);
    }
    return self;
  },
  off: function off2(events2, handler) {
    var self = this;
    if (!self.eventsListeners)
      return self;
    events2.split(" ").forEach(function(event) {
      if (typeof handler === "undefined") {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function(eventHandler, index2) {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index2, 1);
          }
        });
      }
    });
    return self;
  },
  emit: function emit() {
    var self = this;
    if (!self.eventsListeners)
      return self;
    var events2;
    var data;
    var context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      events2 = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events2 = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    var eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
    eventsArray.forEach(function(event) {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(function(eventHandler) {
          eventHandler.apply(context, [event].concat(data));
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function(eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};
function updateSize() {
  var swiper = this;
  var width;
  var height;
  var $el = swiper.$el;
  if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }
  if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }
  width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
  height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
  if (Number.isNaN(width))
    width = 0;
  if (Number.isNaN(height))
    height = 0;
  extend$1(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}
function updateSlides() {
  var swiper = this;
  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    }
    return {
      "width": "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      "marginRight": "marginBottom"
    }[property];
  }
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }
  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl, swiperSize = swiper.size, rtl = swiper.rtlTranslate, wrongRTL = swiper.wrongRTL;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  var slides = $wrapperEl.children("." + swiper.params.slideClass);
  var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  var snapGrid = [];
  var slidesGrid = [];
  var slidesSizesGrid = [];
  var offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === "function") {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  var offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === "function") {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  var previousSnapGridLength = swiper.snapGrid.length;
  var previousSlidesGridLength = swiper.slidesGrid.length;
  var spaceBetween = params.spaceBetween;
  var slidePosition = -offsetBefore;
  var prevSlideSize = 0;
  var index2 = 0;
  if (typeof swiperSize === "undefined") {
    return;
  }
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
  }
  swiper.virtualSize = -spaceBetween;
  if (rtl)
    slides.css({
      marginLeft: "",
      marginBottom: "",
      marginTop: ""
    });
  else
    slides.css({
      marginRight: "",
      marginBottom: "",
      marginTop: ""
    });
  var slidesNumberEvenToRows;
  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }
    if (params.slidesPerView !== "auto" && params.slidesPerColumnFill === "row") {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  }
  var slideSize;
  var slidesPerColumn = params.slidesPerColumn;
  var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
  for (var i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    var slide2 = slides.eq(i);
    if (params.slidesPerColumn > 1) {
      var newSlideOrderIndex = void 0;
      var column = void 0;
      var row = void 0;
      if (params.slidesPerColumnFill === "row" && params.slidesPerGroup > 1) {
        var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
        var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
        var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
        slide2.css({
          "-webkit-box-ordinal-group": newSlideOrderIndex,
          "-moz-box-ordinal-group": newSlideOrderIndex,
          "-ms-flex-order": newSlideOrderIndex,
          "-webkit-order": newSlideOrderIndex,
          order: newSlideOrderIndex
        });
      } else if (params.slidesPerColumnFill === "column") {
        column = Math.floor(i / slidesPerColumn);
        row = i - column * slidesPerColumn;
        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
          row += 1;
          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }
      slide2.css(getDirectionLabel("margin-top"), row !== 0 ? params.spaceBetween && params.spaceBetween + "px" : "");
    }
    if (slide2.css("display") === "none")
      continue;
    if (params.slidesPerView === "auto") {
      var slideStyles = getComputedStyle(slide2[0]);
      var currentTransform = slide2[0].style.transform;
      var currentWebKitTransform = slide2[0].style.webkitTransform;
      if (currentTransform) {
        slide2[0].style.transform = "none";
      }
      if (currentWebKitTransform) {
        slide2[0].style.webkitTransform = "none";
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide2.outerWidth(true) : slide2.outerHeight(true);
      } else {
        var width = getDirectionPropertyValue(slideStyles, "width");
        var paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
        var paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
        var marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
        var marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
        var boxSizing = slideStyles.getPropertyValue("box-sizing");
        if (boxSizing && boxSizing === "border-box") {
          slideSize = width + marginLeft + marginRight;
        } else {
          var _slide$ = slide2[0], clientWidth = _slide$.clientWidth, offsetWidth = _slide$.offsetWidth;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide2[0].style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide2[0].style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths)
        slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths)
        slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[getDirectionLabel("width")] = slideSize + "px";
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0)
        slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0)
        slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1e3)
        slidePosition = 0;
      if (params.roundLengths)
        slidePosition = Math.floor(slidePosition);
      if (index2 % params.slidesPerGroup === 0)
        snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths)
        slidePosition = Math.floor(slidePosition);
      if ((index2 - Math.min(swiper.params.slidesPerGroupSkip, index2)) % swiper.params.slidesPerGroup === 0)
        snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index2 += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  var newSlidesGrid;
  if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
    $wrapperEl.css({
      width: swiper.virtualSize + params.spaceBetween + "px"
    });
  }
  if (params.setWrapperSize) {
    var _$wrapperEl$css;
    $wrapperEl.css((_$wrapperEl$css = {}, _$wrapperEl$css[getDirectionLabel("width")] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css));
  }
  if (params.slidesPerColumn > 1) {
    var _$wrapperEl$css2;
    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    $wrapperEl.css((_$wrapperEl$css2 = {}, _$wrapperEl$css2[getDirectionLabel("width")] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css2));
    if (params.centeredSlides) {
      newSlidesGrid = [];
      for (var _i = 0; _i < snapGrid.length; _i += 1) {
        var slidesGridItem = snapGrid[_i];
        if (params.roundLengths)
          slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[_i] < swiper.virtualSize + snapGrid[0])
          newSlidesGrid.push(slidesGridItem);
      }
      snapGrid = newSlidesGrid;
    }
  }
  if (!params.centeredSlides) {
    newSlidesGrid = [];
    for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
      var _slidesGridItem = snapGrid[_i2];
      if (params.roundLengths)
        _slidesGridItem = Math.floor(_slidesGridItem);
      if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(_slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (snapGrid.length === 0)
    snapGrid = [0];
  if (params.spaceBetween !== 0) {
    var _slides$filter$css;
    var key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
    slides.filter(function(_, slideIndex) {
      if (!params.cssMode)
        return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).css((_slides$filter$css = {}, _slides$filter$css[key] = spaceBetween + "px", _slides$filter$css));
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    var allSlidesSize = 0;
    slidesSizesGrid.forEach(function(slideSizeValue) {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    var maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(function(snap) {
      if (snap < 0)
        return -offsetBefore;
      if (snap > maxSnap)
        return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    var _allSlidesSize = 0;
    slidesSizesGrid.forEach(function(slideSizeValue) {
      _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    _allSlidesSize -= params.spaceBetween;
    if (_allSlidesSize < swiperSize) {
      var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
      snapGrid.forEach(function(snap, snapIndex) {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach(function(snap, snapIndex) {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  extend$1(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (slidesLength !== previousSlidesLength) {
    swiper.emit("slidesLengthChange");
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow)
      swiper.checkOverflow();
    swiper.emit("snapGridLengthChange");
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit("slidesGridLengthChange");
  }
  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}
function updateAutoHeight(speed) {
  var swiper = this;
  var activeSlides = [];
  var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  var newHeight = 0;
  var i;
  if (typeof speed === "number") {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  var getSlideByIndex = function getSlideByIndex2(index3) {
    if (isVirtual) {
      return swiper.slides.filter(function(el) {
        return parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index3;
      })[0];
    }
    return swiper.slides.eq(index3)[0];
  };
  if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      swiper.visibleSlides.each(function(slide2) {
        activeSlides.push(slide2);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index2 = swiper.activeIndex + i;
        if (index2 > swiper.slides.length && !isVirtual)
          break;
        activeSlides.push(getSlideByIndex(index2));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== "undefined") {
      var height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }
  if (newHeight)
    swiper.$wrapperEl.css("height", newHeight + "px");
}
function updateSlidesOffset() {
  var swiper = this;
  var slides = swiper.slides;
  for (var i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}
function updateSlidesProgress(translate2) {
  if (translate2 === void 0) {
    translate2 = this && this.translate || 0;
  }
  var swiper = this;
  var params = swiper.params;
  var slides = swiper.slides, rtl = swiper.rtlTranslate;
  if (slides.length === 0)
    return;
  if (typeof slides[0].swiperSlideOffset === "undefined")
    swiper.updateSlidesOffset();
  var offsetCenter = -translate2;
  if (rtl)
    offsetCenter = translate2;
  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  for (var i = 0; i < slides.length; i += 1) {
    var slide2 = slides[i];
    var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide2.swiperSlideOffset) / (slide2.swiperSlideSize + params.spaceBetween);
    if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
      var slideBefore = -(offsetCenter - slide2.swiperSlideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(slide2);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }
    slide2.progress = rtl ? -slideProgress : slideProgress;
  }
  swiper.visibleSlides = $(swiper.visibleSlides);
}
function updateProgress(translate2) {
  var swiper = this;
  if (typeof translate2 === "undefined") {
    var multiplier = swiper.rtlTranslate ? -1 : 1;
    translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  var params = swiper.params;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  var progress = swiper.progress, isBeginning = swiper.isBeginning, isEnd = swiper.isEnd;
  var wasBeginning = isBeginning;
  var wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate2 - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }
  extend$1(swiper, {
    progress,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight)
    swiper.updateSlidesProgress(translate2);
  if (isBeginning && !wasBeginning) {
    swiper.emit("reachBeginning toEdge");
  }
  if (isEnd && !wasEnd) {
    swiper.emit("reachEnd toEdge");
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit("fromEdge");
  }
  swiper.emit("progress", progress);
}
function updateSlidesClasses() {
  var swiper = this;
  var slides = swiper.slides, params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex, realIndex = swiper.realIndex;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
  var activeSlide;
  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find("." + params.slideClass + '[data-swiper-slide-index="' + activeIndex + '"]');
  } else {
    activeSlide = slides.eq(activeIndex);
  }
  activeSlide.addClass(params.slideActiveClass);
  if (params.loop) {
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ')[data-swiper-slide-index="' + realIndex + '"]').addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + '[data-swiper-slide-index="' + realIndex + '"]').addClass(params.slideDuplicateActiveClass);
    }
  }
  var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);
  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  }
  var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);
  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }
  if (params.loop) {
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ')[data-swiper-slide-index="' + nextSlide.attr("data-swiper-slide-index") + '"]').addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + '[data-swiper-slide-index="' + nextSlide.attr("data-swiper-slide-index") + '"]').addClass(params.slideDuplicateNextClass);
    }
    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ')[data-swiper-slide-index="' + prevSlide.attr("data-swiper-slide-index") + '"]').addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + '[data-swiper-slide-index="' + prevSlide.attr("data-swiper-slide-index") + '"]').addClass(params.slideDuplicatePrevClass);
    }
  }
  swiper.emitSlidesClasses();
}
function updateActiveIndex(newActiveIndex) {
  var swiper = this;
  var translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  var slidesGrid = swiper.slidesGrid, snapGrid = swiper.snapGrid, params = swiper.params, previousIndex = swiper.activeIndex, previousRealIndex = swiper.realIndex, previousSnapIndex = swiper.snapIndex;
  var activeIndex = newActiveIndex;
  var snapIndex;
  if (typeof activeIndex === "undefined") {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate2 >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === "undefined")
        activeIndex = 0;
    }
  }
  if (snapGrid.indexOf(translate2) >= 0) {
    snapIndex = snapGrid.indexOf(translate2);
  } else {
    var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length)
    snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit("snapIndexChange");
    }
    return;
  }
  var realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
  extend$1(swiper, {
    snapIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  swiper.emit("activeIndexChange");
  swiper.emit("snapIndexChange");
  if (previousRealIndex !== realIndex) {
    swiper.emit("realIndexChange");
  }
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit("slideChange");
  }
}
function updateClickedSlide(e) {
  var swiper = this;
  var params = swiper.params;
  var slide2 = $(e.target).closest("." + params.slideClass)[0];
  var slideFound = false;
  var slideIndex;
  if (slide2) {
    for (var i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide2) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide2 && slideFound) {
    swiper.clickedSlide = slide2;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt($(slide2).attr("data-swiper-slide-index"), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = void 0;
    swiper.clickedIndex = void 0;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};
function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? "x" : "y";
  }
  var swiper = this;
  var params = swiper.params, rtl = swiper.rtlTranslate, translate2 = swiper.translate, $wrapperEl = swiper.$wrapperEl;
  if (params.virtualTranslate) {
    return rtl ? -translate2 : translate2;
  }
  if (params.cssMode) {
    return translate2;
  }
  var currentTranslate = getTranslate($wrapperEl[0], axis);
  if (rtl)
    currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
function setTranslate(translate2, byController) {
  var swiper = this;
  var rtl = swiper.rtlTranslate, params = swiper.params, $wrapperEl = swiper.$wrapperEl, wrapperEl = swiper.wrapperEl, progress = swiper.progress;
  var x2 = 0;
  var y2 = 0;
  var z2 = 0;
  if (swiper.isHorizontal()) {
    x2 = rtl ? -translate2 : translate2;
  } else {
    y2 = translate2;
  }
  if (params.roundLengths) {
    x2 = Math.floor(x2);
    y2 = Math.floor(y2);
  }
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x2 : -y2;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform("translate3d(" + x2 + "px, " + y2 + "px, " + z2 + "px)");
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x2 : y2;
  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate2);
  }
  swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
  return -this.snapGrid[0];
}
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
  if (translate2 === void 0) {
    translate2 = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  var swiper = this;
  var params = swiper.params, wrapperEl = swiper.wrapperEl;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  var minTranslate2 = swiper.minTranslate();
  var maxTranslate2 = swiper.maxTranslate();
  var newTranslate;
  if (translateBounds && translate2 > minTranslate2)
    newTranslate = minTranslate2;
  else if (translateBounds && translate2 < maxTranslate2)
    newTranslate = maxTranslate2;
  else
    newTranslate = translate2;
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    var isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
    } else {
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;
        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? "left" : "top"] = -newTranslate, _wrapperEl$scrollTo.behavior = "smooth", _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      }
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionEnd");
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionStart");
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed)
            return;
          if (e.target !== this)
            return;
          swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          if (runCallbacks) {
            swiper.emit("transitionEnd");
          }
        };
      }
      swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}
var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};
function setTransition(duration, byController) {
  var swiper = this;
  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }
  swiper.emit("setTransition", duration, byController);
}
function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  var swiper = this;
  var activeIndex = swiper.activeIndex, params = swiper.params, previousIndex = swiper.previousIndex;
  if (params.cssMode)
    return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  var dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex)
      dir = "next";
    else if (activeIndex < previousIndex)
      dir = "prev";
    else
      dir = "reset";
  }
  swiper.emit("transitionStart");
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === "reset") {
      swiper.emit("slideResetTransitionStart");
      return;
    }
    swiper.emit("slideChangeTransitionStart");
    if (dir === "next") {
      swiper.emit("slideNextTransitionStart");
    } else {
      swiper.emit("slidePrevTransitionStart");
    }
  }
}
function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  var swiper = this;
  var activeIndex = swiper.activeIndex, previousIndex = swiper.previousIndex, params = swiper.params;
  swiper.animating = false;
  if (params.cssMode)
    return;
  swiper.setTransition(0);
  var dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex)
      dir = "next";
    else if (activeIndex < previousIndex)
      dir = "prev";
    else
      dir = "reset";
  }
  swiper.emit("transitionEnd");
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === "reset") {
      swiper.emit("slideResetTransitionEnd");
      return;
    }
    swiper.emit("slideChangeTransitionEnd");
    if (dir === "next") {
      swiper.emit("slideNextTransitionEnd");
    } else {
      swiper.emit("slidePrevTransitionEnd");
    }
  }
}
var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};
function slideTo(index2, speed, runCallbacks, internal, initial) {
  if (index2 === void 0) {
    index2 = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index2 !== "number" && typeof index2 !== "string") {
    throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index2 + "] given.");
  }
  if (typeof index2 === "string") {
    var indexAsNumber = parseInt(index2, 10);
    var isValidNumber = isFinite(indexAsNumber);
    if (!isValidNumber) {
      throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index2 + "] given.");
    }
    index2 = indexAsNumber;
  }
  var swiper = this;
  var slideIndex = index2;
  if (slideIndex < 0)
    slideIndex = 0;
  var params = swiper.params, snapGrid = swiper.snapGrid, slidesGrid = swiper.slidesGrid, previousIndex = swiper.previousIndex, activeIndex = swiper.activeIndex, rtl = swiper.rtlTranslate, wrapperEl = swiper.wrapperEl, enabled = swiper.enabled;
  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }
  var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length)
    snapIndex = snapGrid.length - 1;
  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit("beforeSlideChangeStart");
  }
  var translate2 = -snapGrid[snapIndex];
  swiper.updateProgress(translate2);
  if (params.normalizeSlideIndex) {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      var normalizedTranslate = -Math.floor(translate2 * 100);
      var normalizedGird = Math.floor(slidesGrid[i] * 100);
      var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGird) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGird) {
        slideIndex = i;
      }
    }
  }
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate2 < swiper.translate && translate2 < swiper.minTranslate()) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex)
        return false;
    }
  }
  var direction;
  if (slideIndex > activeIndex)
    direction = "next";
  else if (slideIndex < activeIndex)
    direction = "prev";
  else
    direction = "reset";
  if (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== "slide") {
      swiper.setTranslate(translate2);
    }
    if (direction !== "reset") {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    var isH = swiper.isHorizontal();
    var t2 = -translate2;
    if (rtl) {
      t2 = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t2;
    }
    if (speed === 0) {
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t2;
    } else {
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;
        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? "left" : "top"] = t2, _wrapperEl$scrollTo.behavior = "smooth", _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t2;
      }
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(translate2);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate2);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed)
            return;
          if (e.target !== this)
            return;
          swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
    }
  }
  return true;
}
function slideToLoop(index2, speed, runCallbacks, internal) {
  if (index2 === void 0) {
    index2 = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  var swiper = this;
  var newIndex = index2;
  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }
  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  var swiper = this;
  var params = swiper.params, animating = swiper.animating, enabled = swiper.enabled;
  if (!enabled)
    return swiper;
  var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;
  if (params.loop) {
    if (animating && params.loopPreventsSlide)
      return false;
    swiper.loopFix();
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  var swiper = this;
  var params = swiper.params, animating = swiper.animating, snapGrid = swiper.snapGrid, slidesGrid = swiper.slidesGrid, rtlTranslate = swiper.rtlTranslate, enabled = swiper.enabled;
  if (!enabled)
    return swiper;
  if (params.loop) {
    if (animating && params.loopPreventsSlide)
      return false;
    swiper.loopFix();
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }
  var translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0)
      return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  var normalizedTranslate = normalize(translate2);
  var normalizedSnapGrid = snapGrid.map(function(val) {
    return normalize(val);
  });
  var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === "undefined" && params.cssMode) {
    snapGrid.forEach(function(snap) {
      if (!prevSnap && normalizedTranslate >= snap)
        prevSnap = snap;
    });
  }
  var prevIndex;
  if (typeof prevSnap !== "undefined") {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0)
      prevIndex = swiper.activeIndex - 1;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  var swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  var swiper = this;
  var index2 = swiper.activeIndex;
  var skip = Math.min(swiper.params.slidesPerGroupSkip, index2);
  var snapIndex = skip + Math.floor((index2 - skip) / swiper.params.slidesPerGroup);
  var translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate2 >= swiper.snapGrid[snapIndex]) {
    var currentSnap = swiper.snapGrid[snapIndex];
    var nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
      index2 += swiper.params.slidesPerGroup;
    }
  } else {
    var prevSnap = swiper.snapGrid[snapIndex - 1];
    var _currentSnap = swiper.snapGrid[snapIndex];
    if (translate2 - prevSnap <= (_currentSnap - prevSnap) * threshold) {
      index2 -= swiper.params.slidesPerGroup;
    }
  }
  index2 = Math.max(index2, 0);
  index2 = Math.min(index2, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index2, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
  var swiper = this;
  var params = swiper.params, $wrapperEl = swiper.$wrapperEl;
  var slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  var slideToIndex = swiper.clickedIndex;
  var realIndex;
  if (params.loop) {
    if (swiper.animating)
      return;
    realIndex = parseInt($(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children("." + params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + params.slideDuplicateClass + ")").eq(0).index();
        nextTick(function() {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children("." + params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + params.slideDuplicateClass + ")").eq(0).index();
      nextTick(function() {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};
function loopCreate() {
  var swiper = this;
  var document2 = getDocument();
  var params = swiper.params, $wrapperEl = swiper.$wrapperEl;
  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
  var slides = $wrapperEl.children("." + params.slideClass);
  if (params.loopFillGroupWithBlank) {
    var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
    if (blankSlidesNum !== params.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankNode = $(document2.createElement("div")).addClass(params.slideClass + " " + params.slideBlankClass);
        $wrapperEl.append(blankNode);
      }
      slides = $wrapperEl.children("." + params.slideClass);
    }
  }
  if (params.slidesPerView === "auto" && !params.loopedSlides)
    params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;
  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }
  var prependSlides = [];
  var appendSlides = [];
  slides.each(function(el, index2) {
    var slide2 = $(el);
    if (index2 < swiper.loopedSlides) {
      appendSlides.push(el);
    }
    if (index2 < slides.length && index2 >= slides.length - swiper.loopedSlides) {
      prependSlides.push(el);
    }
    slide2.attr("data-swiper-slide-index", index2);
  });
  for (var _i = 0; _i < appendSlides.length; _i += 1) {
    $wrapperEl.append($(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
  for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
    $wrapperEl.prepend($(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}
function loopFix() {
  var swiper = this;
  swiper.emit("beforeLoopFix");
  var activeIndex = swiper.activeIndex, slides = swiper.slides, loopedSlides = swiper.loopedSlides, allowSlidePrev = swiper.allowSlidePrev, allowSlideNext = swiper.allowSlideNext, snapGrid = swiper.snapGrid, rtl = swiper.rtlTranslate;
  var newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  var snapTranslate = -snapGrid[activeIndex];
  var diff = snapTranslate - swiper.getTranslate();
  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    var slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;
    var _slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (_slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit("loopFix");
}
function loopDestroy() {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl, params = swiper.params, slides = swiper.slides;
  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
  slides.removeAttr("data-swiper-slide-index");
}
var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};
function setGrabCursor(moving) {
  var swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)
    return;
  var el = swiper.el;
  el.style.cursor = "move";
  el.style.cursor = moving ? "-webkit-grabbing" : "-webkit-grab";
  el.style.cursor = moving ? "-moz-grabbin" : "-moz-grab";
  el.style.cursor = moving ? "grabbing" : "grab";
}
function unsetGrabCursor() {
  var swiper = this;
  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  swiper.el.style.cursor = "";
}
var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};
function appendSlide(slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl, params = swiper.params;
  if (params.loop) {
    swiper.loopDestroy();
  }
  if (typeof slides === "object" && "length" in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i])
        $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }
}
function prependSlide(slides) {
  var swiper = this;
  var params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex;
  if (params.loop) {
    swiper.loopDestroy();
  }
  var newActiveIndex = activeIndex + 1;
  if (typeof slides === "object" && "length" in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i])
        $wrapperEl.prepend(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}
function addSlide(index2, slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl, params = swiper.params, activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }
  var baseLength = swiper.slides.length;
  if (index2 <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index2 >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  var newActiveIndex = activeIndexBuffer > index2 ? activeIndexBuffer + 1 : activeIndexBuffer;
  var slidesBuffer = [];
  for (var i = baseLength - 1; i >= index2; i -= 1) {
    var currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides === "object" && "length" in slides) {
    for (var _i = 0; _i < slides.length; _i += 1) {
      if (slides[_i])
        $wrapperEl.append(slides[_i]);
    }
    newActiveIndex = activeIndexBuffer > index2 ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }
  for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
    $wrapperEl.append(slidesBuffer[_i2]);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}
function removeSlide(slidesIndexes) {
  var swiper = this;
  var params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }
  var newActiveIndex = activeIndexBuffer;
  var indexToRemove;
  if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
    for (var i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove])
        swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex)
        newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove])
      swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex)
      newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}
function removeAllSlides() {
  var swiper = this;
  var slidesIndexes = [];
  for (var i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}
var manipulation = {
  appendSlide,
  prependSlide,
  addSlide,
  removeSlide,
  removeAllSlides
};
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow())
      return null;
    if (el.assignedSlot)
      el = el.assignedSlot;
    var found = el.closest(selector);
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function onTouchStart(event) {
  var swiper = this;
  var document2 = getDocument();
  var window2 = getWindow();
  var data = swiper.touchEventsData;
  var params = swiper.params, touches = swiper.touches, enabled = swiper.enabled;
  if (!enabled)
    return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  var e = event;
  if (e.originalEvent)
    e = e.originalEvent;
  var $targetEl = $(e.target);
  if (params.touchEventsTarget === "wrapper") {
    if (!$targetEl.closest(swiper.wrapperEl).length)
      return;
  }
  data.isTouchEvent = e.type === "touchstart";
  if (!data.isTouchEvent && "which" in e && e.which === 3)
    return;
  if (!data.isTouchEvent && "button" in e && e.button > 0)
    return;
  if (data.isTouched && data.isMoved)
    return;
  var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
  if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
    $targetEl = $(event.path[0]);
  }
  var noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass;
  var isTargetShadow = !!(e.target && e.target.shadowRoot);
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0])
      return;
  }
  touches.currentX = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
  var startX = touches.currentX;
  var startY = touches.currentY;
  var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === "prevent") {
      event.preventDefault();
    } else {
      return;
    }
  }
  extend$1(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: void 0,
    startMoving: void 0
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = void 0;
  if (params.threshold > 0)
    data.allowThresholdMove = false;
  if (e.type !== "touchstart") {
    var preventDefault = true;
    if ($targetEl.is(data.focusableElements))
      preventDefault = false;
    if (document2.activeElement && $(document2.activeElement).is(data.focusableElements) && document2.activeElement !== $targetEl[0]) {
      document2.activeElement.blur();
    }
    var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }
  swiper.emit("touchStart", e);
}
function onTouchMove(event) {
  var document2 = getDocument();
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params, touches = swiper.touches, rtl = swiper.rtlTranslate, enabled = swiper.enabled;
  if (!enabled)
    return;
  var e = event;
  if (e.originalEvent)
    e = e.originalEvent;
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    return;
  }
  if (data.isTouchEvent && e.type !== "touchmove")
    return;
  var targetTouch = e.type === "touchmove" && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  var pageX = e.type === "touchmove" ? targetTouch.pageX : e.pageX;
  var pageY = e.type === "touchmove" ? targetTouch.pageY : e.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    swiper.allowClick = false;
    if (data.isTouched) {
      extend$1(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (data.isTouchEvent && document2.activeElement) {
    if (e.target === document2.activeElement && $(e.target).is(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit("touchMove", e);
  }
  if (e.targetTouches && e.targetTouches.length > 1)
    return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  var diffX = touches.currentX - touches.startX;
  var diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold)
    return;
  if (typeof data.isScrolling === "undefined") {
    var touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit("touchMoveOpposite", e);
  }
  if (typeof data.startMoving === "undefined") {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  if (!data.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
    }
    data.allowMomentumBounce = false;
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit("sliderFirstMove", e);
  }
  swiper.emit("sliderMove", e);
  data.isMoved = true;
  var diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl)
    diff = -diff;
  swiper.swipeDirection = diff > 0 ? "prev" : "next";
  data.currentTranslate = diff + data.startTranslate;
  var disableParentSwiper = true;
  var resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance)
      data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance)
      data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }
  if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode)
    return;
  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode) {
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? "startX" : "startY"],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
      time: now()
    });
  }
  swiper.updateProgress(data.currentTranslate);
  swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event) {
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params, touches = swiper.touches, rtl = swiper.rtlTranslate, $wrapperEl = swiper.$wrapperEl, slidesGrid = swiper.slidesGrid, snapGrid = swiper.snapGrid, enabled = swiper.enabled;
  if (!enabled)
    return;
  var e = event;
  if (e.originalEvent)
    e = e.originalEvent;
  if (data.allowTouchCallbacks) {
    swiper.emit("touchEnd", e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }
  var touchEndTime = now();
  var timeDiff = touchEndTime - data.touchStartTime;
  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit("tap click", e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit("doubleTap doubleClick", e);
    }
  }
  data.lastClickTime = now();
  nextTick(function() {
    if (!swiper.destroyed)
      swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  var currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeModeMomentum) {
      if (data.velocities.length > 1) {
        var lastMoveEvent = data.velocities.pop();
        var velocityEvent = data.velocities.pop();
        var distance = lastMoveEvent.position - velocityEvent.position;
        var time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        }
        if (time > 150 || now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeModeMomentumVelocityRatio;
      data.velocities.length = 0;
      var momentumDuration = 1e3 * params.freeModeMomentumRatio;
      var momentumDistance = swiper.velocity * momentumDuration;
      var newPosition = swiper.translate + momentumDistance;
      if (rtl)
        newPosition = -newPosition;
      var doBounce = false;
      var afterBouncePosition;
      var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      var needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides)
          needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides)
          needsLoopFix = true;
      } else if (params.freeModeSticky) {
        var nextSlide;
        for (var j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        swiper.once("transitionEnd", function() {
          swiper.loopFix();
        });
      }
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeModeSticky) {
          var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(function() {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce)
            return;
          swiper.emit("momentumBounce");
          swiper.setTransition(params.speed);
          setTimeout(function() {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function() {
              if (!swiper || swiper.destroyed)
                return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(function() {
            if (!swiper || swiper.destroyed)
              return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.emit("_freeModeNoMomentumRelease");
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      swiper.emit("_freeModeNoMomentumRelease");
    }
    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    return;
  }
  var stopIndex = 0;
  var groupSize = swiper.slidesSizesGrid[0];
  for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + _increment] !== "undefined") {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + _increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === "next") {
      if (ratio >= params.longSwipesRatio)
        swiper.slideTo(stopIndex + increment);
      else
        swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === "prev") {
      if (ratio > 1 - params.longSwipesRatio)
        swiper.slideTo(stopIndex + increment);
      else
        swiper.slideTo(stopIndex);
    }
  } else {
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === "next") {
        swiper.slideTo(stopIndex + increment);
      }
      if (swiper.swipeDirection === "prev") {
        swiper.slideTo(stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
function onResize() {
  var swiper = this;
  var params = swiper.params, el = swiper.el;
  if (el && el.offsetWidth === 0)
    return;
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }
  var allowSlideNext = swiper.allowSlideNext, allowSlidePrev = swiper.allowSlidePrev, snapGrid = swiper.snapGrid;
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
function onClick(e) {
  var swiper = this;
  if (!swiper.enabled)
    return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks)
      e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
function onScroll() {
  var swiper = this;
  var wrapperEl = swiper.wrapperEl, rtlTranslate = swiper.rtlTranslate, enabled = swiper.enabled;
  if (!enabled)
    return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    if (rtlTranslate) {
      swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollLeft;
    }
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  if (swiper.translate === -0)
    swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit("setTranslate", swiper.translate, false);
}
var dummyEventAttached = false;
function dummyEventListener() {
}
function attachEvents() {
  var swiper = this;
  var document2 = getDocument();
  var params = swiper.params, touchEvents = swiper.touchEvents, el = swiper.el, wrapperEl = swiper.wrapperEl, device2 = swiper.device, support2 = swiper.support;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  var capture = !!params.nested;
  if (!support2.touch && support2.pointerEvents) {
    el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
    document2.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document2.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support2.touch) {
      var passiveListener = touchEvents.start === "touchstart" && support2.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.addEventListener(touchEvents.move, swiper.onTouchMove, support2.passiveListener ? {
        passive: false,
        capture
      } : capture);
      el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      if (touchEvents.cancel) {
        el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
      if (!dummyEventAttached) {
        document2.addEventListener("touchstart", dummyEventListener);
        dummyEventAttached = true;
      }
    }
    if (params.simulateTouch && !device2.ios && !device2.android || params.simulateTouch && !support2.touch && device2.ios) {
      el.addEventListener("mousedown", swiper.onTouchStart, false);
      document2.addEventListener("mousemove", swiper.onTouchMove, capture);
      document2.addEventListener("mouseup", swiper.onTouchEnd, false);
    }
  }
  if (params.preventClicks || params.preventClicksPropagation) {
    el.addEventListener("click", swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl.addEventListener("scroll", swiper.onScroll);
  }
  if (params.updateOnWindowResize) {
    swiper.on(device2.ios || device2.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
  } else {
    swiper.on("observerUpdate", onResize, true);
  }
}
function detachEvents() {
  var swiper = this;
  var document2 = getDocument();
  var params = swiper.params, touchEvents = swiper.touchEvents, el = swiper.el, wrapperEl = swiper.wrapperEl, device2 = swiper.device, support2 = swiper.support;
  var capture = !!params.nested;
  if (!support2.touch && support2.pointerEvents) {
    el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
    document2.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document2.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support2.touch) {
      var passiveListener = touchEvents.start === "onTouchStart" && support2.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      if (touchEvents.cancel) {
        el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
    }
    if (params.simulateTouch && !device2.ios && !device2.android || params.simulateTouch && !support2.touch && device2.ios) {
      el.removeEventListener("mousedown", swiper.onTouchStart, false);
      document2.removeEventListener("mousemove", swiper.onTouchMove, capture);
      document2.removeEventListener("mouseup", swiper.onTouchEnd, false);
    }
  }
  if (params.preventClicks || params.preventClicksPropagation) {
    el.removeEventListener("click", swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl.removeEventListener("scroll", swiper.onScroll);
  }
  swiper.off(device2.ios || device2.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize);
}
var events = {
  attachEvents,
  detachEvents
};
function setBreakpoint() {
  var swiper = this;
  var activeIndex = swiper.activeIndex, initialized = swiper.initialized, _swiper$loopedSlides = swiper.loopedSlides, loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides, params = swiper.params, $el = swiper.$el;
  var breakpoints2 = params.breakpoints;
  if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0)
    return;
  var breakpoint = swiper.getBreakpoint(breakpoints2, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint)
    return;
  var breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
  if (breakpointOnlyParams) {
    ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function(param) {
      var paramValue = breakpointOnlyParams[param];
      if (typeof paramValue === "undefined")
        return;
      if (param === "slidesPerView" && (paramValue === "AUTO" || paramValue === "auto")) {
        breakpointOnlyParams[param] = "auto";
      } else if (param === "slidesPerView") {
        breakpointOnlyParams[param] = parseFloat(paramValue);
      } else {
        breakpointOnlyParams[param] = parseInt(paramValue, 10);
      }
    });
  }
  var breakpointParams = breakpointOnlyParams || swiper.originalParams;
  var wasMultiRow = params.slidesPerColumn > 1;
  var isMultiRow = breakpointParams.slidesPerColumn > 1;
  var wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    $el.addClass(params.containerModifierClass + "multirow");
    if (breakpointParams.slidesPerColumnFill && breakpointParams.slidesPerColumnFill === "column" || !breakpointParams.slidesPerColumnFill && params.slidesPerColumnFill === "column") {
      $el.addClass(params.containerModifierClass + "multirow-column");
    }
    swiper.emitContainerClasses();
  }
  var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  extend$1(swiper.params, breakpointParams);
  var isEnabled = swiper.params.enabled;
  extend$1(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit("_beforeBreakpoint", breakpointParams);
  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate();
    swiper.updateSlides();
    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
  }
  swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints2, base, containerEl) {
  if (base === void 0) {
    base = "window";
  }
  if (!breakpoints2 || base === "container" && !containerEl)
    return void 0;
  var breakpoint = false;
  var window2 = getWindow();
  var currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
  var points = Object.keys(breakpoints2).map(function(point2) {
    if (typeof point2 === "string" && point2.indexOf("@") === 0) {
      var minRatio = parseFloat(point2.substr(1));
      var value2 = currentHeight * minRatio;
      return {
        value: value2,
        point: point2
      };
    }
    return {
      value: point2,
      point: point2
    };
  });
  points.sort(function(a, b) {
    return parseInt(a.value, 10) - parseInt(b.value, 10);
  });
  for (var i = 0; i < points.length; i += 1) {
    var _points$i = points[i], point = _points$i.point, value = _points$i.value;
    if (base === "window") {
      if (window2.matchMedia("(min-width: " + value + "px)").matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || "max";
}
var breakpoints = {
  setBreakpoint,
  getBreakpoint
};
function prepareClasses(entries, prefix) {
  var resultClasses = [];
  entries.forEach(function(item) {
    if (typeof item === "object") {
      Object.keys(item).forEach(function(classNames) {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === "string") {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  var swiper = this;
  var classNames = swiper.classNames, params = swiper.params, rtl = swiper.rtl, $el = swiper.$el, device2 = swiper.device, support2 = swiper.support;
  var suffixes = prepareClasses(["initialized", params.direction, {
    "pointer-events": support2.pointerEvents && !support2.touch
  }, {
    "free-mode": params.freeMode
  }, {
    "autoheight": params.autoHeight
  }, {
    "rtl": rtl
  }, {
    "multirow": params.slidesPerColumn > 1
  }, {
    "multirow-column": params.slidesPerColumn > 1 && params.slidesPerColumnFill === "column"
  }, {
    "android": device2.android
  }, {
    "ios": device2.ios
  }, {
    "css-mode": params.cssMode
  }], params.containerModifierClass);
  classNames.push.apply(classNames, suffixes);
  $el.addClass([].concat(classNames).join(" "));
  swiper.emitContainerClasses();
}
function removeClasses() {
  var swiper = this;
  var $el = swiper.$el, classNames = swiper.classNames;
  $el.removeClass(classNames.join(" "));
  swiper.emitContainerClasses();
}
var classes = {
  addClasses,
  removeClasses
};
function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  var window2 = getWindow();
  var image;
  function onReady() {
    if (callback)
      callback();
  }
  var isPicture = $(imageEl).parent("picture")[0];
  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window2.Image();
      image.onload = onReady;
      image.onerror = onReady;
      if (sizes) {
        image.sizes = sizes;
      }
      if (srcset) {
        image.srcset = srcset;
      }
      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    onReady();
  }
}
function preloadImages() {
  var swiper = this;
  swiper.imagesToLoad = swiper.$el.find("img");
  function onReady() {
    if (typeof swiper === "undefined" || swiper === null || !swiper || swiper.destroyed)
      return;
    if (swiper.imagesLoaded !== void 0)
      swiper.imagesLoaded += 1;
    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady)
        swiper.update();
      swiper.emit("imagesReady");
    }
  }
  for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
    var imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
  }
}
var images = {
  loadImage,
  preloadImages
};
function checkOverflow() {
  var swiper = this;
  var params = swiper.params;
  var wasLocked = swiper.isLocked;
  var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;
  if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
    swiper.isLocked = lastSlidePosition <= swiper.size;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked;
  if (wasLocked !== swiper.isLocked)
    swiper.emit(swiper.isLocked ? "lock" : "unlock");
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    if (swiper.navigation)
      swiper.navigation.update();
  }
}
var checkOverflow$1 = {
  checkOverflow
};
var defaults = {
  init: true,
  direction: "horizontal",
  touchEventsTarget: "container",
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: false,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: "input, select, option, textarea, button, video, label",
  width: null,
  height: null,
  preventInteractionOnTransition: false,
  userAgent: null,
  url: null,
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,
  autoHeight: false,
  setWrapperSize: false,
  virtualTranslate: false,
  effect: "slide",
  breakpoints: void 0,
  breakpointsBase: "window",
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: "column",
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  watchOverflow: false,
  roundLengths: false,
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  uniqueNavElements: true,
  resistance: true,
  resistanceRatio: 0.85,
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  grabCursor: false,
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  preloadImages: true,
  updateOnImagesReady: true,
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  noSwiping: true,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  passiveListeners: true,
  containerModifierClass: "swiper-container-",
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-invisible-blank",
  slideActiveClass: "swiper-slide-active",
  slideDuplicateActiveClass: "swiper-slide-duplicate-active",
  slideVisibleClass: "swiper-slide-visible",
  slideDuplicateClass: "swiper-slide-duplicate",
  slideNextClass: "swiper-slide-next",
  slideDuplicateNextClass: "swiper-slide-duplicate-next",
  slidePrevClass: "swiper-slide-prev",
  slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
  wrapperClass: "swiper-wrapper",
  runCallbacksOnInit: true,
  _emitClasses: false
};
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
var prototypes = {
  modular,
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  manipulation,
  events,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes,
  images
};
var extendedDefaults = {};
var Swiper$2 = /* @__PURE__ */ function() {
  function Swiper2() {
    var el;
    var params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
      params = args[0];
    } else {
      el = args[0];
      params = args[1];
    }
    if (!params)
      params = {};
    params = extend$1({}, params);
    if (el && !params.el)
      params.el = el;
    if (params.el && $(params.el).length > 1) {
      var swipers = [];
      $(params.el).each(function(containerEl) {
        var newParams = extend$1({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper2(newParams));
      });
      return swipers;
    }
    var swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    if (typeof swiper.modules === "undefined") {
      swiper.modules = {};
    }
    Object.keys(swiper.modules).forEach(function(moduleName) {
      var module = swiper.modules[moduleName];
      if (module.params) {
        var moduleParamName = Object.keys(module.params)[0];
        var moduleParams = module.params[moduleParamName];
        if (typeof moduleParams !== "object" || moduleParams === null)
          return;
        if (["navigation", "pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
          params[moduleParamName] = {
            auto: true
          };
        }
        if (!(moduleParamName in params && "enabled" in moduleParams))
          return;
        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }
        if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }
        if (!params[moduleParamName])
          params[moduleParamName] = {
            enabled: false
          };
      }
    });
    var swiperParams = extend$1({}, defaults);
    swiper.useParams(swiperParams);
    swiper.params = extend$1({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = extend$1({}, swiper.params);
    swiper.passedParams = extend$1({}, params);
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(function(eventName) {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }
    swiper.$ = $;
    extend$1(swiper, {
      enabled: swiper.params.enabled,
      el,
      classNames: [],
      slides: $(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      isHorizontal: function isHorizontal() {
        return swiper.params.direction === "horizontal";
      },
      isVertical: function isVertical() {
        return swiper.params.direction === "vertical";
      },
      activeIndex: 0,
      realIndex: 0,
      isBeginning: true,
      isEnd: false,
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      touchEvents: function touchEvents() {
        var touch = ["touchstart", "touchmove", "touchend", "touchcancel"];
        var desktop = ["mousedown", "mousemove", "mouseup"];
        if (swiper.support.pointerEvents) {
          desktop = ["pointerdown", "pointermove", "pointerup"];
        }
        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        focusableElements: swiper.params.focusableElements,
        lastClickTime: now(),
        clickTimeout: void 0,
        velocities: [],
        allowMomentumBounce: void 0,
        isTouchEvent: void 0,
        startMoving: void 0
      },
      allowClick: true,
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.useModules();
    swiper.emit("_swiper");
    if (swiper.params.init) {
      swiper.init();
    }
    return swiper;
  }
  var _proto = Swiper2.prototype;
  _proto.enable = function enable() {
    var swiper = this;
    if (swiper.enabled)
      return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit("enable");
  };
  _proto.disable = function disable() {
    var swiper = this;
    if (!swiper.enabled)
      return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit("disable");
  };
  _proto.setProgress = function setProgress(progress, speed) {
    var swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    var min = swiper.minTranslate();
    var max = swiper.maxTranslate();
    var current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  };
  _proto.emitContainerClasses = function emitContainerClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el)
      return;
    var classes2 = swiper.el.className.split(" ").filter(function(className) {
      return className.indexOf("swiper-container") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit("_containerClasses", classes2.join(" "));
  };
  _proto.getSlideClasses = function getSlideClasses(slideEl) {
    var swiper = this;
    return slideEl.className.split(" ").filter(function(className) {
      return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(" ");
  };
  _proto.emitSlidesClasses = function emitSlidesClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el)
      return;
    var updates = [];
    swiper.slides.each(function(slideEl) {
      var classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit("_slideClass", slideEl, classNames);
    });
    swiper.emit("_slideClasses", updates);
  };
  _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
    var swiper = this;
    var params = swiper.params, slides = swiper.slides, slidesGrid = swiper.slidesGrid, swiperSize = swiper.size, activeIndex = swiper.activeIndex;
    var spv = 1;
    if (params.centeredSlides) {
      var slideSize = slides[activeIndex].swiperSlideSize;
      var breakLoop;
      for (var i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize)
            breakLoop = true;
        }
      }
      for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
        if (slides[_i] && !breakLoop) {
          slideSize += slides[_i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize)
            breakLoop = true;
        }
      }
    } else {
      for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
        if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
          spv += 1;
        }
      }
    }
    return spv;
  };
  _proto.update = function update3() {
    var swiper = this;
    if (!swiper || swiper.destroyed)
      return;
    var snapGrid = swiper.snapGrid, params = swiper.params;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate6() {
      var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    var translated;
    if (swiper.params.freeMode) {
      setTranslate6();
      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate6();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit("update");
  };
  _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    var swiper = this;
    var currentDirection = swiper.params.direction;
    if (!newDirection) {
      newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
    }
    if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
      return swiper;
    }
    swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each(function(slideEl) {
      if (newDirection === "vertical") {
        slideEl.style.width = "";
      } else {
        slideEl.style.height = "";
      }
    });
    swiper.emit("changeDirection");
    if (needUpdate)
      swiper.update();
    return swiper;
  };
  _proto.mount = function mount(el) {
    var swiper = this;
    if (swiper.mounted)
      return true;
    var $el = $(el || swiper.params.el);
    el = $el[0];
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    var getWrapperSelector = function getWrapperSelector2() {
      return "." + (swiper.params.wrapperClass || "").trim().split(" ").join(".");
    };
    var getWrapper = function getWrapper2() {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        var res = $(el.shadowRoot.querySelector(getWrapperSelector()));
        res.children = function(options) {
          return $el.children(options);
        };
        return res;
      }
      return $el.children(getWrapperSelector());
    };
    var $wrapperEl = getWrapper();
    if ($wrapperEl.length === 0 && swiper.params.createElements) {
      var document2 = getDocument();
      var wrapper = document2.createElement("div");
      $wrapperEl = $(wrapper);
      wrapper.className = swiper.params.wrapperClass;
      $el.append(wrapper);
      $el.children("." + swiper.params.slideClass).each(function(slideEl) {
        $wrapperEl.append(slideEl);
      });
    }
    extend$1(swiper, {
      $el,
      el,
      $wrapperEl,
      wrapperEl: $wrapperEl[0],
      mounted: true,
      rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
      rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
      wrongRTL: $wrapperEl.css("display") === "-webkit-box"
    });
    return true;
  };
  _proto.init = function init5(el) {
    var swiper = this;
    if (swiper.initialized)
      return swiper;
    var mounted = swiper.mount(el);
    if (mounted === false)
      return swiper;
    swiper.emit("beforeInit");
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.addClasses();
    if (swiper.params.loop) {
      swiper.loopCreate();
    }
    swiper.updateSize();
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }
    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    }
    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }
    swiper.attachEvents();
    swiper.initialized = true;
    swiper.emit("init");
    swiper.emit("afterInit");
    return swiper;
  };
  _proto.destroy = function destroy5(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    var swiper = this;
    var params = swiper.params, $el = swiper.$el, $wrapperEl = swiper.$wrapperEl, slides = swiper.slides;
    if (typeof swiper.params === "undefined" || swiper.destroyed) {
      return null;
    }
    swiper.emit("beforeDestroy");
    swiper.initialized = false;
    swiper.detachEvents();
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr("style");
      $wrapperEl.removeAttr("style");
      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
      }
    }
    swiper.emit("destroy");
    Object.keys(swiper.eventsListeners).forEach(function(eventName) {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  };
  Swiper2.extendDefaults = function extendDefaults(newDefaults) {
    extend$1(extendedDefaults, newDefaults);
  };
  Swiper2.installModule = function installModule(module) {
    if (!Swiper2.prototype.modules)
      Swiper2.prototype.modules = {};
    var name = module.name || Object.keys(Swiper2.prototype.modules).length + "_" + now();
    Swiper2.prototype.modules[name] = module;
  };
  Swiper2.use = function use(module) {
    if (Array.isArray(module)) {
      module.forEach(function(m) {
        return Swiper2.installModule(m);
      });
      return Swiper2;
    }
    Swiper2.installModule(module);
    return Swiper2;
  };
  _createClass(Swiper2, null, [{
    key: "extendedDefaults",
    get: function get() {
      return extendedDefaults;
    }
  }, {
    key: "defaults",
    get: function get() {
      return defaults;
    }
  }]);
  return Swiper2;
}();
Object.keys(prototypes).forEach(function(prototypeGroup) {
  Object.keys(prototypes[prototypeGroup]).forEach(function(protoMethod) {
    Swiper$2.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper$2.use([Resize, Observer$1]);
var SwiperCore = Swiper$2;
function _extends$6() {
  _extends$6 = Object.assign || function(target) {
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
  return _extends$6.apply(this, arguments);
}
var Controller = {
  LinearSpline: function LinearSpline(x2, y2) {
    var binarySearch = function search() {
      var maxIndex;
      var minIndex;
      var guess;
      return function(array, val) {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x2;
    this.y = y2;
    this.lastIndex = x2.length - 1;
    var i1;
    var i3;
    this.interpolate = function interpolate(x22) {
      if (!x22)
        return 0;
      i3 = binarySearch(this.x, x22);
      i1 = i3 - 1;
      return (x22 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  },
  getInterpolateFunction: function getInterpolateFunction(c) {
    var swiper = this;
    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  },
  setTranslate: function setTranslate2(_setTranslate, byController) {
    var swiper = this;
    var controlled = swiper.controller.control;
    var multiplier;
    var controlledTranslate;
    var Swiper2 = swiper.constructor;
    function setControlledTranslate(c) {
      var translate2 = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === "slide") {
        swiper.controller.getInterpolateFunction(c);
        controlledTranslate = -swiper.controller.spline.interpolate(-translate2);
      }
      if (!controlledTranslate || swiper.params.controller.by === "container") {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = (translate2 - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (var i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper2) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper2 && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  },
  setTransition: function setTransition2(duration, byController) {
    var swiper = this;
    var Swiper2 = swiper.constructor;
    var controlled = swiper.controller.control;
    var i;
    function setControlledTransition(c) {
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          nextTick(function() {
            c.updateAutoHeight();
          });
        }
        c.$wrapperEl.transitionEnd(function() {
          if (!controlled)
            return;
          if (c.params.loop && swiper.params.controller.by === "slide") {
            c.loopFix();
          }
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper2) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper2 && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
};
var Controller$1 = {
  name: "controller",
  params: {
    controller: {
      control: void 0,
      inverse: false,
      by: "slide"
    }
  },
  create: function create3() {
    var swiper = this;
    bindModuleMethods(swiper, {
      controller: _extends$6({
        control: swiper.params.controller.control
      }, Controller)
    });
  },
  on: {
    update: function update2(swiper) {
      if (!swiper.controller.control)
        return;
      if (swiper.controller.spline) {
        swiper.controller.spline = void 0;
        delete swiper.controller.spline;
      }
    },
    resize: function resize(swiper) {
      if (!swiper.controller.control)
        return;
      if (swiper.controller.spline) {
        swiper.controller.spline = void 0;
        delete swiper.controller.spline;
      }
    },
    observerUpdate: function observerUpdate(swiper) {
      if (!swiper.controller.control)
        return;
      if (swiper.controller.spline) {
        swiper.controller.spline = void 0;
        delete swiper.controller.spline;
      }
    },
    setTranslate: function setTranslate3(swiper, translate2, byController) {
      if (!swiper.controller.control)
        return;
      swiper.controller.setTranslate(translate2, byController);
    },
    setTransition: function setTransition3(swiper, duration, byController) {
      if (!swiper.controller.control)
        return;
      swiper.controller.setTransition(duration, byController);
    }
  }
};
function _extends$5() {
  _extends$5 = Object.assign || function(target) {
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
  return _extends$5.apply(this, arguments);
}
var Autoplay = {
  run: function run() {
    var swiper = this;
    var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    var delay = swiper.params.autoplay.delay;
    if ($activeSlideEl.attr("data-swiper-autoplay")) {
      delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
    }
    clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.timeout = nextTick(function() {
      var autoplayResult;
      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit("autoplay");
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          swiper.emit("autoplay");
        } else {
          swiper.autoplay.stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit("autoplay");
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit("autoplay");
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        swiper.emit("autoplay");
      } else {
        swiper.autoplay.stop();
      }
      if (swiper.params.cssMode && swiper.autoplay.running)
        swiper.autoplay.run();
      else if (autoplayResult === false) {
        swiper.autoplay.run();
      }
    }, delay);
  },
  start: function start() {
    var swiper = this;
    if (typeof swiper.autoplay.timeout !== "undefined")
      return false;
    if (swiper.autoplay.running)
      return false;
    swiper.autoplay.running = true;
    swiper.emit("autoplayStart");
    swiper.autoplay.run();
    return true;
  },
  stop: function stop() {
    var swiper = this;
    if (!swiper.autoplay.running)
      return false;
    if (typeof swiper.autoplay.timeout === "undefined")
      return false;
    if (swiper.autoplay.timeout) {
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = void 0;
    }
    swiper.autoplay.running = false;
    swiper.emit("autoplayStop");
    return true;
  },
  pause: function pause(speed) {
    var swiper = this;
    if (!swiper.autoplay.running)
      return;
    if (swiper.autoplay.paused)
      return;
    if (swiper.autoplay.timeout)
      clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.paused = true;
    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    } else {
      ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
        swiper.$wrapperEl[0].addEventListener(event, swiper.autoplay.onTransitionEnd);
      });
    }
  },
  onVisibilityChange: function onVisibilityChange() {
    var swiper = this;
    var document2 = getDocument();
    if (document2.visibilityState === "hidden" && swiper.autoplay.running) {
      swiper.autoplay.pause();
    }
    if (document2.visibilityState === "visible" && swiper.autoplay.paused) {
      swiper.autoplay.run();
      swiper.autoplay.paused = false;
    }
  },
  onTransitionEnd: function onTransitionEnd(e) {
    var swiper = this;
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl)
      return;
    if (e.target !== swiper.$wrapperEl[0])
      return;
    ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
      swiper.$wrapperEl[0].removeEventListener(event, swiper.autoplay.onTransitionEnd);
    });
    swiper.autoplay.paused = false;
    if (!swiper.autoplay.running) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.run();
    }
  },
  onMouseEnter: function onMouseEnter() {
    var swiper = this;
    if (swiper.params.autoplay.disableOnInteraction) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.pause();
    }
    ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
      swiper.$wrapperEl[0].removeEventListener(event, swiper.autoplay.onTransitionEnd);
    });
  },
  onMouseLeave: function onMouseLeave() {
    var swiper = this;
    if (swiper.params.autoplay.disableOnInteraction) {
      return;
    }
    swiper.autoplay.paused = false;
    swiper.autoplay.run();
  },
  attachMouseEvents: function attachMouseEvents() {
    var swiper = this;
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.$el.on("mouseenter", swiper.autoplay.onMouseEnter);
      swiper.$el.on("mouseleave", swiper.autoplay.onMouseLeave);
    }
  },
  detachMouseEvents: function detachMouseEvents() {
    var swiper = this;
    swiper.$el.off("mouseenter", swiper.autoplay.onMouseEnter);
    swiper.$el.off("mouseleave", swiper.autoplay.onMouseLeave);
  }
};
var Autoplay$1 = {
  name: "autoplay",
  params: {
    autoplay: {
      enabled: false,
      delay: 3e3,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  },
  create: function create4() {
    var swiper = this;
    bindModuleMethods(swiper, {
      autoplay: _extends$5({}, Autoplay, {
        running: false,
        paused: false
      })
    });
  },
  on: {
    init: function init4(swiper) {
      if (swiper.params.autoplay.enabled) {
        swiper.autoplay.start();
        var document2 = getDocument();
        document2.addEventListener("visibilitychange", swiper.autoplay.onVisibilityChange);
        swiper.autoplay.attachMouseEvents();
      }
    },
    beforeTransitionStart: function beforeTransitionStart(swiper, speed, internal) {
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          swiper.autoplay.stop();
        }
      }
    },
    sliderFirstMove: function sliderFirstMove(swiper) {
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }
      }
    },
    touchEnd: function touchEnd(swiper) {
      if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.run();
      }
    },
    destroy: function destroy4(swiper) {
      swiper.autoplay.detachMouseEvents();
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }
      var document2 = getDocument();
      document2.removeEventListener("visibilitychange", swiper.autoplay.onVisibilityChange);
    }
  }
};
function _extends$4() {
  _extends$4 = Object.assign || function(target) {
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
  return _extends$4.apply(this, arguments);
}
var Fade = {
  setTranslate: function setTranslate4() {
    var swiper = this;
    var slides = swiper.slides;
    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = swiper.slides.eq(i);
      var offset2 = $slideEl[0].swiperSlideOffset;
      var tx = -offset2;
      if (!swiper.params.virtualTranslate)
        tx -= swiper.translate;
      var ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl.css({
        opacity: slideOpacity
      }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
    }
  },
  setTransition: function setTransition4(duration) {
    var swiper = this;
    var slides = swiper.slides, $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration);
    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      slides.transitionEnd(function() {
        if (eventTriggered)
          return;
        if (!swiper || swiper.destroyed)
          return;
        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ["webkitTransitionEnd", "transitionend"];
        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
var EffectFade = {
  name: "effect-fade",
  params: {
    fadeEffect: {
      crossFade: false
    }
  },
  create: function create5() {
    var swiper = this;
    bindModuleMethods(swiper, {
      fadeEffect: _extends$4({}, Fade)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== "fade")
        return;
      swiper.classNames.push(swiper.params.containerModifierClass + "fade");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      extend$1(swiper.params, overwriteParams);
      extend$1(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate5(swiper) {
      if (swiper.params.effect !== "fade")
        return;
      swiper.fadeEffect.setTranslate();
    },
    setTransition: function setTransition5(swiper, duration) {
      if (swiper.params.effect !== "fade")
        return;
      swiper.fadeEffect.setTransition(duration);
    }
  }
};
function isObject(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function extend(target, src) {
  var noExtend = ["__proto__", "constructor", "prototype"];
  Object.keys(src).filter(function(key) {
    return noExtend.indexOf(key) < 0;
  }).forEach(function(key) {
    if (typeof target[key] === "undefined")
      target[key] = src[key];
    else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      if (src[key].__swiper__)
        target[key] = src[key];
      else
        extend(target[key], src[key]);
    } else {
      target[key] = src[key];
    }
  });
}
function needsNavigation(params) {
  if (params === void 0) {
    params = {};
  }
  return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
}
function needsPagination(params) {
  if (params === void 0) {
    params = {};
  }
  return params.pagination && typeof params.pagination.el === "undefined";
}
function needsScrollbar(params) {
  if (params === void 0) {
    params = {};
  }
  return params.scrollbar && typeof params.scrollbar.el === "undefined";
}
function uniqueClasses(classNames) {
  if (classNames === void 0) {
    classNames = "";
  }
  var classes2 = classNames.split(" ").map(function(c) {
    return c.trim();
  }).filter(function(c) {
    return !!c;
  });
  var unique = [];
  classes2.forEach(function(c) {
    if (unique.indexOf(c) < 0)
      unique.push(c);
  });
  return unique.join(" ");
}
var paramsList = [
  "init",
  "_direction",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_freeModeMomentum",
  "_freeModeMomentumRatio",
  "_freeModeMomentumBounce",
  "_freeModeMomentumBounceRatio",
  "_freeModeMomentumVelocityRatio",
  "_freeModeSticky",
  "_freeModeMinimumVelocity",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "_slidesPerColumn",
  "_slidesPerColumnFill",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_watchSlidesVisibility",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_preloadImages",
  "updateOnImagesReady",
  "_loop",
  "_loopAdditionalSlides",
  "_loopedSlides",
  "_loopFillGroupWithBlank",
  "loopPreventsSlide",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideBlankClass",
  "slideActiveClass",
  "slideDuplicateActiveClass",
  "slideVisibleClass",
  "slideDuplicateClass",
  "slideNextClass",
  "slideDuplicateNextClass",
  "slidePrevClass",
  "slideDuplicatePrevClass",
  "wrapperClass",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "lazy",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom"
];
function getParams(obj) {
  if (obj === void 0) {
    obj = {};
  }
  var params = {
    on: {}
  };
  var events2 = {};
  var passedParams = {};
  extend(params, SwiperCore.defaults);
  extend(params, SwiperCore.extendedDefaults);
  params._emitClasses = true;
  params.init = false;
  var rest = {};
  var allowedParams = paramsList.map(function(key) {
    return key.replace(/_/, "");
  });
  Object.keys(obj).forEach(function(key) {
    if (allowedParams.indexOf(key) >= 0) {
      if (isObject(obj[key])) {
        params[key] = {};
        passedParams[key] = {};
        extend(params[key], obj[key]);
        extend(passedParams[key], obj[key]);
      } else {
        params[key] = obj[key];
        passedParams[key] = obj[key];
      }
    } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === "function") {
      events2["" + key[2].toLowerCase() + key.substr(3)] = obj[key];
    } else {
      rest[key] = obj[key];
    }
  });
  ["navigation", "pagination", "scrollbar"].forEach(function(key) {
    if (params[key] === true)
      params[key] = {};
    if (params[key] === false)
      delete params[key];
  });
  return {
    params,
    passedParams,
    rest,
    events: events2
  };
}
function initSwiper(swiperParams) {
  return new SwiperCore(swiperParams);
}
function mountSwiper(_ref, swiperParams) {
  var el = _ref.el, nextEl = _ref.nextEl, prevEl = _ref.prevEl, paginationEl = _ref.paginationEl, scrollbarEl = _ref.scrollbarEl, swiper = _ref.swiper;
  if (needsNavigation(swiperParams) && nextEl && prevEl) {
    swiper.params.navigation.nextEl = nextEl;
    swiper.originalParams.navigation.nextEl = nextEl;
    swiper.params.navigation.prevEl = prevEl;
    swiper.originalParams.navigation.prevEl = prevEl;
  }
  if (needsPagination(swiperParams) && paginationEl) {
    swiper.params.pagination.el = paginationEl;
    swiper.originalParams.pagination.el = paginationEl;
  }
  if (needsScrollbar(swiperParams) && scrollbarEl) {
    swiper.params.scrollbar.el = scrollbarEl;
    swiper.originalParams.scrollbar.el = scrollbarEl;
  }
  swiper.init(el);
}
function calcLoopedSlides(slides, swiperParams) {
  var slidesPerViewParams = swiperParams.slidesPerView;
  if (swiperParams.breakpoints) {
    var breakpoint = SwiperCore.prototype.getBreakpoint(swiperParams.breakpoints);
    var breakpointOnlyParams = breakpoint in swiperParams.breakpoints ? swiperParams.breakpoints[breakpoint] : void 0;
    if (breakpointOnlyParams && breakpointOnlyParams.slidesPerView) {
      slidesPerViewParams = breakpointOnlyParams.slidesPerView;
    }
  }
  var loopedSlides = Math.ceil(parseFloat(swiperParams.loopedSlides || slidesPerViewParams, 10));
  loopedSlides += swiperParams.loopAdditionalSlides;
  if (loopedSlides > slides.length) {
    loopedSlides = slides.length;
  }
  return loopedSlides;
}
function renderLoop(swiper, slides, swiperParams) {
  var modifiedSlides = slides.map(function(child, index2) {
    return /* @__PURE__ */ React.cloneElement(child, {
      swiper,
      "data-swiper-slide-index": index2
    });
  });
  function duplicateSlide(child, index2, position) {
    return /* @__PURE__ */ React.cloneElement(child, {
      key: child.key + "-duplicate-" + index2 + "-" + position,
      className: (child.props.className || "") + " " + swiperParams.slideDuplicateClass
    });
  }
  if (swiperParams.loopFillGroupWithBlank) {
    var blankSlidesNum = swiperParams.slidesPerGroup - modifiedSlides.length % swiperParams.slidesPerGroup;
    if (blankSlidesNum !== swiperParams.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankSlide = /* @__PURE__ */ React.createElement("div", {
          className: swiperParams.slideClass + " " + swiperParams.slideBlankClass
        });
        modifiedSlides.push(blankSlide);
      }
    }
  }
  if (swiperParams.slidesPerView === "auto" && !swiperParams.loopedSlides) {
    swiperParams.loopedSlides = modifiedSlides.length;
  }
  var loopedSlides = calcLoopedSlides(modifiedSlides, swiperParams);
  var prependSlides = [];
  var appendSlides = [];
  modifiedSlides.forEach(function(child, index2) {
    if (index2 < loopedSlides) {
      appendSlides.push(duplicateSlide(child, index2, "prepend"));
    }
    if (index2 < modifiedSlides.length && index2 >= modifiedSlides.length - loopedSlides) {
      prependSlides.push(duplicateSlide(child, index2, "append"));
    }
  });
  if (swiper) {
    swiper.loopedSlides = loopedSlides;
  }
  return [].concat(prependSlides, modifiedSlides, appendSlides);
}
function getChangedParams(swiperParams, oldParams, children2, oldChildren) {
  var keys = [];
  if (!oldParams)
    return keys;
  var addKey = function addKey2(key) {
    if (keys.indexOf(key) < 0)
      keys.push(key);
  };
  var oldChildrenKeys = oldChildren.map(function(child) {
    return child.key;
  });
  var childrenKeys = children2.map(function(child) {
    return child.key;
  });
  if (oldChildrenKeys.join("") !== childrenKeys.join(""))
    addKey("children");
  if (oldChildren.length !== children2.length)
    addKey("children");
  var watchParams = paramsList.filter(function(key) {
    return key[0] === "_";
  }).map(function(key) {
    return key.replace(/_/, "");
  });
  watchParams.forEach(function(key) {
    if (key in swiperParams && key in oldParams) {
      if (isObject(swiperParams[key]) && isObject(oldParams[key])) {
        var newKeys = Object.keys(swiperParams[key]);
        var oldKeys = Object.keys(oldParams[key]);
        if (newKeys.length !== oldKeys.length) {
          addKey(key);
        } else {
          newKeys.forEach(function(newKey) {
            if (swiperParams[key][newKey] !== oldParams[key][newKey]) {
              addKey(key);
            }
          });
          oldKeys.forEach(function(oldKey) {
            if (swiperParams[key][oldKey] !== oldParams[key][oldKey])
              addKey(key);
          });
        }
      } else if (swiperParams[key] !== oldParams[key]) {
        addKey(key);
      }
    }
  });
  return keys;
}
function processChildren(c) {
  var slides = [];
  React.Children.toArray(c).forEach(function(child) {
    if (child.type && child.type.displayName === "SwiperSlide") {
      slides.push(child);
    } else if (child.props && child.props.children) {
      processChildren(child.props.children).forEach(function(slide2) {
        return slides.push(slide2);
      });
    }
  });
  return slides;
}
function getChildren(c) {
  var slides = [];
  var slots = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  React.Children.toArray(c).forEach(function(child) {
    if (child.type && child.type.displayName === "SwiperSlide") {
      slides.push(child);
    } else if (child.props && child.props.slot && slots[child.props.slot]) {
      slots[child.props.slot].push(child);
    } else if (child.props && child.props.children) {
      var foundSlides = processChildren(child.props.children);
      if (foundSlides.length > 0) {
        foundSlides.forEach(function(slide2) {
          return slides.push(slide2);
        });
      } else {
        slots["container-end"].push(child);
      }
    } else {
      slots["container-end"].push(child);
    }
  });
  return {
    slides,
    slots
  };
}
function updateSwiper(_ref) {
  var swiper = _ref.swiper, slides = _ref.slides, passedParams = _ref.passedParams, changedParams = _ref.changedParams, nextEl = _ref.nextEl, prevEl = _ref.prevEl, scrollbarEl = _ref.scrollbarEl, paginationEl = _ref.paginationEl;
  var updateParams = changedParams.filter(function(key) {
    return key !== "children" && key !== "direction";
  });
  var currentParams = swiper.params, pagination = swiper.pagination, navigation = swiper.navigation, scrollbar = swiper.scrollbar, virtual = swiper.virtual, thumbs = swiper.thumbs;
  var needThumbsInit;
  var needControllerInit;
  var needPaginationInit;
  var needScrollbarInit;
  var needNavigationInit;
  if (changedParams.includes("thumbs") && passedParams.thumbs && passedParams.thumbs.swiper && currentParams.thumbs && !currentParams.thumbs.swiper) {
    needThumbsInit = true;
  }
  if (changedParams.includes("controller") && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
    needControllerInit = true;
  }
  if (changedParams.includes("pagination") && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
    needPaginationInit = true;
  }
  if (changedParams.includes("scrollbar") && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
    needScrollbarInit = true;
  }
  if (changedParams.includes("navigation") && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
    needNavigationInit = true;
  }
  var destroyModule = function destroyModule2(mod) {
    if (!swiper[mod])
      return;
    swiper[mod].destroy();
    if (mod === "navigation") {
      currentParams[mod].prevEl = void 0;
      currentParams[mod].nextEl = void 0;
      swiper[mod].prevEl = void 0;
      swiper[mod].nextEl = void 0;
    } else {
      currentParams[mod].el = void 0;
      swiper[mod].el = void 0;
    }
  };
  updateParams.forEach(function(key) {
    if (isObject(currentParams[key]) && isObject(passedParams[key])) {
      extend(currentParams[key], passedParams[key]);
    } else {
      var newValue = passedParams[key];
      if ((newValue === true || newValue === false) && (key === "navigation" || key === "pagination" || key === "scrollbar")) {
        if (newValue === false) {
          destroyModule(key);
        }
      } else {
        currentParams[key] = passedParams[key];
      }
    }
  });
  if (changedParams.includes("children") && virtual && currentParams.virtual.enabled) {
    virtual.slides = slides;
    virtual.update(true);
  } else if (changedParams.includes("children") && swiper.lazy && swiper.params.lazy.enabled) {
    swiper.lazy.load();
  }
  if (needThumbsInit) {
    var initialized = thumbs.init();
    if (initialized)
      thumbs.update(true);
  }
  if (needControllerInit) {
    swiper.controller.control = currentParams.controller.control;
  }
  if (needPaginationInit) {
    if (paginationEl)
      currentParams.pagination.el = paginationEl;
    pagination.init();
    pagination.render();
    pagination.update();
  }
  if (needScrollbarInit) {
    if (scrollbarEl)
      currentParams.scrollbar.el = scrollbarEl;
    scrollbar.init();
    scrollbar.updateSize();
    scrollbar.setTranslate();
  }
  if (needNavigationInit) {
    if (nextEl)
      currentParams.navigation.nextEl = nextEl;
    if (prevEl)
      currentParams.navigation.prevEl = prevEl;
    navigation.init();
    navigation.update();
  }
  if (changedParams.includes("allowSlideNext")) {
    swiper.allowSlideNext = passedParams.allowSlideNext;
  }
  if (changedParams.includes("allowSlidePrev")) {
    swiper.allowSlidePrev = passedParams.allowSlidePrev;
  }
  if (changedParams.includes("direction")) {
    swiper.changeDirection(passedParams.direction, false);
  }
  swiper.update();
}
function updateOnVirtualData(swiper) {
  if (!swiper || swiper.destroyed || !swiper.params.virtual || swiper.params.virtual && !swiper.params.virtual.enabled)
    return;
  swiper.updateSlides();
  swiper.updateProgress();
  swiper.updateSlidesClasses();
  if (swiper.lazy && swiper.params.lazy.enabled) {
    swiper.lazy.load();
  }
  if (swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled) {
    swiper.parallax.setTranslate();
  }
}
function renderVirtual(swiper, slides, virtualData) {
  var _ref;
  if (!virtualData)
    return null;
  var style = swiper.isHorizontal() ? (_ref = {}, _ref[swiper.rtlTranslate ? "right" : "left"] = virtualData.offset + "px", _ref) : {
    top: virtualData.offset + "px"
  };
  return slides.filter(function(child, index2) {
    return index2 >= virtualData.from && index2 <= virtualData.to;
  }).map(function(child) {
    return /* @__PURE__ */ React.cloneElement(child, {
      swiper,
      style
    });
  });
}
function useIsomorphicLayoutEffect(callback, deps) {
  if (typeof window === "undefined")
    return React.useEffect(callback, deps);
  return React.useLayoutEffect(callback, deps);
}
var _excluded$1 = ["className", "tag", "wrapperTag", "children", "onSwiper"];
function _extends$3() {
  _extends$3 = Object.assign || function(target) {
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
  return _extends$3.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$3(source, excluded) {
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
var Swiper$1 = /* @__PURE__ */ React.forwardRef(function(_temp, externalElRef) {
  var _ref = _temp === void 0 ? {} : _temp, className = _ref.className, _ref$tag = _ref.tag, Tag = _ref$tag === void 0 ? "div" : _ref$tag, _ref$wrapperTag = _ref.wrapperTag, WrapperTag = _ref$wrapperTag === void 0 ? "div" : _ref$wrapperTag, children2 = _ref.children, onSwiper = _ref.onSwiper, rest = _objectWithoutPropertiesLoose$3(_ref, _excluded$1);
  var eventsAssigned = false;
  var _useState = React.useState("swiper-container"), containerClasses = _useState[0], setContainerClasses = _useState[1];
  var _useState2 = React.useState(null), virtualData = _useState2[0], setVirtualData = _useState2[1];
  var _useState3 = React.useState(false), breakpointChanged = _useState3[0], setBreakpointChanged = _useState3[1];
  var initializedRef = React.useRef(false);
  var swiperElRef = React.useRef(null);
  var swiperRef = React.useRef(null);
  var oldPassedParamsRef = React.useRef(null);
  var oldSlides = React.useRef(null);
  var nextElRef = React.useRef(null);
  var prevElRef = React.useRef(null);
  var paginationElRef = React.useRef(null);
  var scrollbarElRef = React.useRef(null);
  var _getParams = getParams(rest), swiperParams = _getParams.params, passedParams = _getParams.passedParams, restProps = _getParams.rest, events2 = _getParams.events;
  var _getChildren = getChildren(children2), slides = _getChildren.slides, slots = _getChildren.slots;
  var onBeforeBreakpoint = function onBeforeBreakpoint2() {
    setBreakpointChanged(!breakpointChanged);
  };
  Object.assign(swiperParams.on, {
    _containerClasses: function _containerClasses(swiper, classes2) {
      setContainerClasses(classes2);
    }
  });
  if (!swiperElRef.current) {
    Object.assign(swiperParams.on, events2);
    eventsAssigned = true;
    swiperRef.current = initSwiper(swiperParams);
    swiperRef.current.loopCreate = function() {
    };
    swiperRef.current.loopDestroy = function() {
    };
    if (swiperParams.loop) {
      swiperRef.current.loopedSlides = calcLoopedSlides(slides, swiperParams);
    }
    if (swiperRef.current.virtual && swiperRef.current.params.virtual.enabled) {
      swiperRef.current.virtual.slides = slides;
      var extendWith = {
        cache: false,
        renderExternal: setVirtualData,
        renderExternalUpdate: false
      };
      extend(swiperRef.current.params.virtual, extendWith);
      extend(swiperRef.current.originalParams.virtual, extendWith);
    }
  }
  if (swiperRef.current) {
    swiperRef.current.on("_beforeBreakpoint", onBeforeBreakpoint);
  }
  var attachEvents2 = function attachEvents3() {
    if (eventsAssigned || !events2 || !swiperRef.current)
      return;
    Object.keys(events2).forEach(function(eventName) {
      swiperRef.current.on(eventName, events2[eventName]);
    });
  };
  var detachEvents2 = function detachEvents3() {
    if (!events2 || !swiperRef.current)
      return;
    Object.keys(events2).forEach(function(eventName) {
      swiperRef.current.off(eventName, events2[eventName]);
    });
  };
  React.useEffect(function() {
    return function() {
      if (swiperRef.current)
        swiperRef.current.off("_beforeBreakpoint", onBeforeBreakpoint);
    };
  });
  React.useEffect(function() {
    if (!initializedRef.current && swiperRef.current) {
      swiperRef.current.emitSlidesClasses();
      initializedRef.current = true;
    }
  });
  useIsomorphicLayoutEffect(function() {
    if (externalElRef) {
      externalElRef.current = swiperElRef.current;
    }
    if (!swiperElRef.current)
      return;
    mountSwiper({
      el: swiperElRef.current,
      nextEl: nextElRef.current,
      prevEl: prevElRef.current,
      paginationEl: paginationElRef.current,
      scrollbarEl: scrollbarElRef.current,
      swiper: swiperRef.current
    }, swiperParams);
    if (onSwiper)
      onSwiper(swiperRef.current);
    return function() {
      if (swiperRef.current && !swiperRef.current.destroyed) {
        swiperRef.current.destroy(true, false);
      }
    };
  }, []);
  useIsomorphicLayoutEffect(function() {
    attachEvents2();
    var changedParams = getChangedParams(passedParams, oldPassedParamsRef.current, slides, oldSlides.current);
    oldPassedParamsRef.current = passedParams;
    oldSlides.current = slides;
    if (changedParams.length && swiperRef.current && !swiperRef.current.destroyed) {
      updateSwiper({
        swiper: swiperRef.current,
        slides,
        passedParams,
        changedParams,
        nextEl: nextElRef.current,
        prevEl: prevElRef.current,
        scrollbarEl: scrollbarElRef.current,
        paginationEl: paginationElRef.current
      });
    }
    return function() {
      detachEvents2();
    };
  });
  useIsomorphicLayoutEffect(function() {
    updateOnVirtualData(swiperRef.current);
  }, [virtualData]);
  function renderSlides() {
    if (swiperParams.virtual) {
      return renderVirtual(swiperRef.current, slides, virtualData);
    }
    if (!swiperParams.loop || swiperRef.current && swiperRef.current.destroyed) {
      return slides.map(function(child) {
        return /* @__PURE__ */ React.cloneElement(child, {
          swiper: swiperRef.current
        });
      });
    }
    return renderLoop(swiperRef.current, slides, swiperParams);
  }
  return /* @__PURE__ */ React.createElement(Tag, _extends$3({
    ref: swiperElRef,
    className: uniqueClasses("" + containerClasses + (className ? " " + className : ""))
  }, restProps), slots["container-start"], needsNavigation(swiperParams) && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    ref: prevElRef,
    className: "swiper-button-prev"
  }), /* @__PURE__ */ React.createElement("div", {
    ref: nextElRef,
    className: "swiper-button-next"
  })), needsScrollbar(swiperParams) && /* @__PURE__ */ React.createElement("div", {
    ref: scrollbarElRef,
    className: "swiper-scrollbar"
  }), needsPagination(swiperParams) && /* @__PURE__ */ React.createElement("div", {
    ref: paginationElRef,
    className: "swiper-pagination"
  }), /* @__PURE__ */ React.createElement(WrapperTag, {
    className: "swiper-wrapper"
  }, slots["wrapper-start"], renderSlides(), slots["wrapper-end"]), slots["container-end"]);
});
Swiper$1.displayName = "Swiper";
var _excluded = ["tag", "children", "className", "swiper", "zoom", "virtualIndex"];
function _extends$2() {
  _extends$2 = Object.assign || function(target) {
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
  return _extends$2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$2(source, excluded) {
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
var SwiperSlide = /* @__PURE__ */ React.forwardRef(function(_temp, externalRef) {
  var _ref = _temp === void 0 ? {} : _temp, _ref$tag = _ref.tag, Tag = _ref$tag === void 0 ? "div" : _ref$tag, children2 = _ref.children, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, swiper = _ref.swiper, zoom = _ref.zoom, virtualIndex = _ref.virtualIndex, rest = _objectWithoutPropertiesLoose$2(_ref, _excluded);
  var slideElRef = React.useRef(null);
  var _useState = React.useState("swiper-slide"), slideClasses = _useState[0], setSlideClasses = _useState[1];
  function updateClasses(swiper2, el, classNames) {
    if (el === slideElRef.current) {
      setSlideClasses(classNames);
    }
  }
  useIsomorphicLayoutEffect(function() {
    if (externalRef) {
      externalRef.current = slideElRef.current;
    }
    if (!slideElRef.current || !swiper) {
      return;
    }
    if (swiper.destroyed) {
      if (slideClasses !== "swiper-slide") {
        setSlideClasses("swiper-slide");
      }
      return;
    }
    swiper.on("_slideClass", updateClasses);
    return function() {
      if (!swiper)
        return;
      swiper.off("_slideClass", updateClasses);
    };
  });
  useIsomorphicLayoutEffect(function() {
    if (swiper && slideElRef.current) {
      setSlideClasses(swiper.getSlideClasses(slideElRef.current));
    }
  }, [swiper]);
  var slideData;
  if (typeof children2 === "function") {
    slideData = {
      isActive: slideClasses.indexOf("swiper-slide-active") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-active") >= 0,
      isVisible: slideClasses.indexOf("swiper-slide-visible") >= 0,
      isDuplicate: slideClasses.indexOf("swiper-slide-duplicate") >= 0,
      isPrev: slideClasses.indexOf("swiper-slide-prev") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-prev") >= 0,
      isNext: slideClasses.indexOf("swiper-slide-next") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-next") >= 0
    };
  }
  var renderChildren = function renderChildren2() {
    return typeof children2 === "function" ? children2(slideData) : children2;
  };
  return /* @__PURE__ */ React.createElement(Tag, _extends$2({
    ref: slideElRef,
    className: uniqueClasses("" + slideClasses + (className ? " " + className : "")),
    "data-swiper-slide-index": virtualIndex
  }, rest), zoom ? /* @__PURE__ */ React.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof zoom === "number" ? zoom : void 0
  }, renderChildren()) : renderChildren());
});
SwiperSlide.displayName = "SwiperSlide";
var swiper_min = "";
var effectFade_min = "";
const Upload = "_Upload_ld2lt_6";
const Content = "_Content_ld2lt_22";
const Swiper = "_Swiper_ld2lt_1";
const Slide = "_Slide_ld2lt_35";
const Radius = "_Radius_ld2lt_47";
const Loading = "_Loading_ld2lt_51";
const Name = "_Name_ld2lt_66";
const Controls = "_Controls_ld2lt_80";
const Indicator = "_Indicator_ld2lt_87";
const Icon = "_Icon_ld2lt_95";
var styles = {
  "Swiper-Box": "_Swiper-Box_ld2lt_1",
  Upload,
  Content,
  Swiper,
  Slide,
  Radius,
  Loading,
  Name,
  Controls,
  Indicator,
  Icon
};
const Widget$2 = ({ start: start2, pause: pause2, next: next2, previous, running, step, total }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: styles.Controls
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.Indicator
  }, step + 1, "/", total), /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: styles.Icon,
    viewBox: "0 0 24 24",
    onClick: () => {
      if (total > 1) {
        previous();
      }
    },
    fill: total > 1 ? "#333" : "#999"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1zm3.66 6.82l5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.57.4-.57 1.24 0 1.64z"
  })), !running ? /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: styles.Icon,
    onClick: () => {
      if (total > 1) {
        start2();
      }
    },
    viewBox: "0 0 24 24",
    fill: total > 1 ? "#333" : "#999"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"
  })) : /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: styles.Icon,
    viewBox: "0 0 24 24",
    onClick: () => {
      if (total > 1) {
        pause2();
      }
    },
    fill: total > 1 ? "#333" : "#999"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"
  })), /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: styles.Icon,
    viewBox: "0 0 24 24",
    onClick: () => {
      if (total > 1) {
        next2();
      }
    },
    fill: total > 1 ? "#333" : "#999"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M7.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L7.58 7.11C6.91 6.65 6 7.12 6 7.93v8.14c0 .81.91 1.28 1.58.82zM16 7v10c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1z"
  })));
};
const Widget$1 = (props) => {
  const { src, showLoading } = props;
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    const image = new Image();
    image.src = props.src;
    image.onload = () => {
      setLoading(false);
      setError(false);
    };
    image.onerror = (err) => {
      setLoading(false);
      setError(true);
    };
  }, [src]);
  if (loading || error) {
    return /* @__PURE__ */ React.createElement("div", {
      className: styles.Loading
    }, showLoading({ color: "#3b82f6" }));
  }
  return /* @__PURE__ */ React.createElement("img", __spreadValues({}, props));
};
var react15_6 = {};
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
react15_6.__esModule = true;
react15_6.default = void 0;
var _react$2 = _interopRequireWildcard(react.exports);
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = /* @__PURE__ */ new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache2() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
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
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var CUSTOM_PROPERTY_NAME$1 = "--aspect-ratio";
var DEFAULT_CLASS_NAME$1 = "react-aspect-ratio-placeholder";
class AspectRatio$2 extends _react$2.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "node", null);
    _defineProperty(this, "setNode", (node) => {
      this.node = node;
    });
  }
  componentDidUpdate() {
    if (this.node) {
      var {
        node
      } = this;
      var customPropertyValue = node.style.getPropertyValue(CUSTOM_PROPERTY_NAME$1);
      if (!customPropertyValue) {
        node.style.setProperty(CUSTOM_PROPERTY_NAME$1, "(" + this.props.ratio + ")");
      }
    }
  }
  render() {
    var _this$props = this.props, {
      children: children2,
      ratio,
      style
    } = _this$props, restProps = _objectWithoutPropertiesLoose$1(_this$props, ["children", "ratio", "style"]);
    var newStyle = _extends$1({}, style, {
      [CUSTOM_PROPERTY_NAME$1]: "(" + ratio + ")"
    });
    return /* @__PURE__ */ _react$2.default.createElement("div", _extends$1({}, restProps, {
      ref: this.setNode,
      style: newStyle
    }), children2);
  }
}
_defineProperty(AspectRatio$2, "defaultProps", {
  className: DEFAULT_CLASS_NAME$1,
  ratio: 1
});
var _default$1 = AspectRatio$2;
react15_6.default = _default$1;
var reactLatest = {};
reactLatest.__esModule = true;
reactLatest.default = void 0;
var _react$1 = _interopRequireDefault$1(react.exports);
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
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
var CUSTOM_PROPERTY_NAME = "--aspect-ratio";
var DEFAULT_CLASS_NAME = "react-aspect-ratio-placeholder";
var AspectRatio$1 = (props) => {
  var {
    children: children2,
    ratio,
    style
  } = props, restProps = _objectWithoutPropertiesLoose(props, ["children", "ratio", "style"]);
  var newStyle = _extends({}, style, {
    [CUSTOM_PROPERTY_NAME]: "(" + ratio + ")"
  });
  return /* @__PURE__ */ _react$1.default.createElement("div", _extends({}, restProps, {
    style: newStyle
  }), children2);
};
AspectRatio$1.defaultProps = {
  className: DEFAULT_CLASS_NAME,
  ratio: 1
};
var _default = AspectRatio$1;
reactLatest.default = _default;
var AspectRatio_1 = void 0;
var _react = _interopRequireDefault(react15_6);
var _reactLatest = _interopRequireDefault(reactLatest);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
_react.default;
var AspectRatio = _reactLatest.default;
AspectRatio_1 = AspectRatio;
SwiperCore.use([Autoplay$1, EffectFade, Controller$1]);
const Widget = ({ options }) => {
  const {
    input,
    onChange,
    mode = "display",
    api: { upload, showLoading }
  } = options;
  const [title, setTitle] = React.useState();
  const [aspectRatio, setAspectRatio] = React.useState("16/9");
  const [delay, setDelay] = React.useState(2e3);
  const [imageList, setImagList] = React.useState([]);
  const [running, setRunning] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const [swiper, setSwiper] = React.useState();
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    try {
      const inputData = JSON.parse(input);
      if (inputData.title) {
        setTitle(inputData.title);
      }
      if (!!inputData.delay) {
        setDelay(inputData.delay);
      }
      if (!!inputData.aspectRatio) {
        setAspectRatio(inputData.aspectRatio);
      }
      if (!!inputData.imageList) {
        setImagList(inputData.imageList);
      }
    } catch (e) {
    }
  }, [input]);
  React.useEffect(() => {
    if (!swiper) {
      return;
    }
    if (running) {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }
  }, [swiper, running]);
  const start2 = React.useCallback(() => {
    setRunning(true);
  }, []);
  const pause2 = React.useCallback(() => {
    setRunning(false);
  }, []);
  const previous = React.useCallback(() => {
    if (!swiper) {
      return;
    }
    if (swiper.isBeginning) {
      swiper.slideTo(imageList.length - 1);
    } else {
      swiper.slidePrev();
    }
  }, [swiper, imageList]);
  const next2 = React.useCallback(() => {
    if (!swiper) {
      return;
    }
    if (swiper.isEnd) {
      swiper.slideTo(0);
    } else {
      swiper.slideNext();
    }
  }, [swiper, imageList]);
  const reachEnd = React.useCallback(() => {
    if (!running) {
      return;
    }
    setTimeout(next2, delay);
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: styles["Swiper-Box"]
  }, mode == "edit" ? /* @__PURE__ */ React.createElement("label", {
    className: styles.Upload
  }, /* @__PURE__ */ React.createElement("input", {
    type: "file",
    accept: ".jpg, .jpeg, .png",
    onChange: async (e) => {
      if (e.target.files.length === 0) {
        return;
      }
      setUploading(true);
      try {
        const { url } = await upload(e.target.files[0]);
        const newList = Array.from(imageList);
        newList.push(url);
        setImagList(newList);
        onChange(JSON.stringify({
          imageList: newList,
          aspectRatio,
          title,
          delay
        }));
      } finally {
        setUploading(false);
      }
    }
  }), uploading ? "\u6B63\u5728\u4E0A\u4F20..." : "\u4E0A\u4F20\u56FE\u7247") : null, /* @__PURE__ */ React.createElement("div", {
    className: styles.Content
  }, title ? /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("span", {
    className: styles["Name"]
  }, title)) : null, /* @__PURE__ */ React.createElement(AspectRatio_1, {
    ratio: aspectRatio,
    style: { width: "100%" }
  }, /* @__PURE__ */ React.createElement(Swiper$1, {
    onSwiper: (swiper2) => {
      setSwiper(swiper2);
      setRunning(false);
    },
    onReachEnd: reachEnd,
    controller: { control: swiper },
    className: styles.Swiper,
    effect: "fade",
    autoplay: {
      delay
    },
    onActiveIndexChange: (s) => {
      setStep(s.realIndex);
    }
  }, imageList.map((url, index2) => {
    return /* @__PURE__ */ React.createElement(SwiperSlide, {
      className: styles.Slide,
      style: { aspectRatio },
      key: index2
    }, /* @__PURE__ */ React.createElement(Widget$1, {
      showLoading,
      className: !!title ? "" : styles.Radius,
      alt: title,
      src: url
    }));
  })))), /* @__PURE__ */ React.createElement(Widget$2, {
    start: start2,
    running,
    pause: pause2,
    previous,
    next: next2,
    step,
    total: imageList.length
  }));
};
export { Widget as default };
