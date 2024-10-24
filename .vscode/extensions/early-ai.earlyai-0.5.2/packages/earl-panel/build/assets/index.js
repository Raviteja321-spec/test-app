var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r$1 = Symbol.for("react.profiler"), t$1 = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$1(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = z$1 && a[z$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b, e) {
  var d, c = {}, k2 = null, h = null;
  if (null != b)
    for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b)
      J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g)
    c.children = e;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++)
      f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a && a.defaultProps)
    for (d in g = a.defaultProps, g)
      void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
}
function N$1(a, b) {
  return { $$typeof: l$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$1;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R$1(a, b, e, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2)
    a = null;
  var h = false;
  if (null === a)
    h = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l$1:
          case n$1:
            h = true;
        }
    }
  if (h)
    return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function(a2) {
      return a2;
    })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I$1(a))
    for (var g = 0; g < a.length; g++) {
      k2 = a[g];
      var f2 = d + Q$1(k2, g);
      h += R$1(k2, b, e, f2, c);
    }
  else if (f2 = A$1(a), "function" === typeof f2)
    for (a = f2.call(a), g = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b, e, f2, c);
  else if ("object" === k2)
    throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S$1(a, b, e) {
  if (null == a)
    return a;
  var d = [], c = 0;
  R$1(a, d, "", "", function(a2) {
    return b.call(e, a2, c++);
  });
  return d;
}
function T$1(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$1, forEach: function(a, b, e) {
  S$1(a, function() {
    b.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b = 0;
  S$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r$1;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.cloneElement = function(a, b, e) {
  if (null === a || void 0 === a)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f2 in b)
      J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d.children = e;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t$1, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b = M$1.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$1, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a, b) {
  return U$1.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U$1.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e) {
  return U$1.current.useImperativeHandle(a, b, e);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U$1.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U$1.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U$1.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e) {
  return U$1.current.useReducer(a, b, e);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e) {
  return U$1.current.useSyncExternalStore(a, b, e);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.2.0";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a)
    m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function h(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length)
      return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a:
        for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
          var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
          if (0 > g(C2, c))
            n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
          else if (n2 < e && 0 > g(x2, c))
            a[d] = x2, a[n2] = c, d = n2;
          else
            break a;
        }
    }
    return b;
  }
  function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b = h(t2); null !== b; ) {
      if (null === b.callback)
        k2(t2);
      else if (b.startTime <= a)
        k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
      else
        break;
      b = h(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (null !== h(r2))
        A2 = true, I2(J2);
      else {
        var b = h(t2);
        null !== b && K2(H2, b.startTime - a);
      }
  }
  function J2(a, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b);
      for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d(v2.expirationTime <= b);
          b = exports.unstable_now();
          "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
          G2(b);
        } else
          k2(r2);
        v2 = h(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h(t2);
        null !== m2 && K2(H2, m2.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b = true;
      try {
        b = O2(true, a);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++)
    da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a))
    return true;
  if (ja.call(la, a))
    return false;
  if (ka.test(a))
    return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b, c, d) {
  if (null !== c && 0 === c.type)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (null !== c)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pa(a, b, c, d))
    return true;
  if (d)
    return false;
  if (null !== c)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return false === b;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function v(a, b, c, d, e, f2, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z[a] = new v(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  z[b] = new v(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z[a] = new v(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z[a] = new v(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z[a] = new v(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z[a] = new v(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    ra,
    sa
  );
  z[b] = new v(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
});
z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b, c, d) {
  var e = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
    qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign, La;
function Ma(a) {
  if (void 0 === La)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      La = b && b[1] || "";
    }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b) {
  if (!a || Na)
    return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l2) {
          var d = l2;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l2) {
          d = l2;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && "string" === typeof l2.stack) {
      for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; )
        h--;
      for (; 1 <= g && 0 <= h; g--, h--)
        if (e[g] !== f2[h]) {
          if (1 !== g || 1 !== h) {
            do
              if (g--, h--, 0 > h || e[g] !== f2[h]) {
                var k2 = "\n" + e[g].replace(" at new ", " at ");
                a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                return k2;
              }
            while (1 <= g && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
      case Ha:
        b = a._payload;
        a = a._init;
        try {
          return Qa(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b)
        return b.displayName || b.name || null;
      if ("string" === typeof b)
        return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function ab(a, b) {
  b = b.checked;
  null != b && ta(a, "checked", b, false);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value), d = b.type;
  if (null != c)
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a)
    null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = true);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML)
    throw Error(p(91));
  return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b)
        throw Error(p(92));
      if (eb(c)) {
        if (1 < c.length)
          throw Error(p(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
    a.innerHTML = b;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = mb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b) {
  if (b) {
    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
      throw Error(p(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children)
        throw Error(p(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
        throw Error(p(61));
    }
    if (null != b.style && "object" !== typeof b.style)
      throw Error(p(62));
  }
}
function vb(a, b) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b.is;
  switch (a) {
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
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb)
      throw Error(p(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {
}
var Ib = false;
function Jb(a, b, c) {
  if (Ib)
    return a(b, c);
  Ib = true;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = false, null !== zb || null !== Ab)
      Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (null === c)
    return null;
  var d = Db(c);
  if (null === d)
    return null;
  c = d[b];
  a:
    switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && "function" !== typeof c)
    throw Error(p(231, b, typeof c));
  return c;
}
var Lb = false;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
function Nb(a, b, c, d, e, f2, g, h, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b, c, d, e, f2, g, h, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f2, g, h, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b)
      return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a)
    throw Error(p(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (null === b)
      throw Error(p(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (null === e)
      break;
    var f2 = e.alternate;
    if (null === f2) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c)
          return Xb(e), a;
        if (f2 === d)
          return Xb(e), b;
        f2 = f2.sibling;
      }
      throw Error(p(188));
    }
    if (c.return !== d.return)
      c = e, d = f2;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f2;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f2;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f2.child; h; ) {
          if (h === c) {
            g = true;
            c = f2;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f2;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(p(189));
      }
    }
    if (c.alternate !== d)
      throw Error(p(190));
  }
  if (3 !== c.tag)
    throw Error(p(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag)
    return a;
  for (a = a.child; null !== a; ) {
    var b = $b(a);
    if (null !== b)
      return b;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot)
    try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c)
    return 0;
  var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
  if (0 !== g) {
    var h = g & ~e;
    0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
  } else
    g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
  if (0 === d)
    return 0;
  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240)))
    return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
    if (-1 === k2) {
      if (0 === (h & c) || 0 !== (h & d))
        e[g] = vc(h, b);
    } else
      k2 <= b && (a.expiredLanes |= h);
    f2 &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e = 31 - oc(c), f2 = 1 << e;
    b[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f2;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e, f2) {
  if (null === a || a.nativeEvent !== f2)
    return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function Uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e)), true;
  }
  return false;
}
function Vc(a) {
  var b = Wc(a.target);
  if (null !== b) {
    var c = Vb(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = Wb(c), null !== b) {
          a.blockedOn = b;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else
      return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b2) {
    return ad(b2, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++)
    d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); )
    Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function gd(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e = Yc(a, b, c, d);
    if (null === e)
      hd(a, b, d, id, c), Sc(a, d);
    else if (Uc(e, a, b, c, d))
      d.stopPropagation();
    else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e; ) {
        var f2 = Cb(e);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b, c, d);
        null === f2 && hd(a, b, d, id, c);
        if (f2 === e)
          break;
        e = f2;
      }
      null !== e && d.stopPropagation();
    } else
      hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a)
    if (b = Vb(a), null === b)
      a = null;
    else if (c = b.tag, 13 === c) {
      a = Wb(b);
      if (null !== a)
        return a;
      a = null;
    } else if (3 === c) {
      if (b.stateNode.current.memoizedState.isDehydrated)
        return 3 === b.tag ? b.stateNode.containerInfo : null;
      a = null;
    } else
      b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f2, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if ("Unidentified" !== b)
      return b;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if ("change" === a)
    return b;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return te(qe);
}
function Ee(a, b) {
  if ("click" === a)
    return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a)
    return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b, e) || !He(a[e], b[e]))
      return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
  var b = Me(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) {
      if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c)
        c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f2 = Math.min(d.start, e);
        d = void 0 === d.end ? f2 : Math.min(d.end, e);
        !a.extend && f2 > d && (e = d, d = f2, f2 = e);
        e = Ke(c, f2);
        var g = Ke(
          c,
          d
        );
        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; )
      1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++)
      a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a])
    return Xe[a];
  if (!We[a])
    return a;
  var b = We[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Ye)
      return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k2 = h.instance, l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          nf(e, h, l2);
          f2 = k2;
        }
      else
        for (g = 0; g < d.length; g++) {
          h = d[g];
          k2 = h.instance;
          l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          nf(e, h, l2);
          f2 = k2;
        }
    }
  }
  if (Qb)
    throw a = Rb, Qb = false, Rb = null, a;
}
function D(a, b) {
  var c = b[of];
  void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, false), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b2) {
      "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
  d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function hd(a, b, c, d, e) {
  var f2 = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d)
    a:
      for (; ; ) {
        if (null === d)
          return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e)
            break;
          if (4 === g)
            for (g = d.return; null !== g; ) {
              var k2 = g.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e)
                  return;
              }
              g = g.return;
            }
          for (; null !== h; ) {
            g = Wc(h);
            if (null === g)
              return;
            k2 = g.tag;
            if (5 === k2 || 6 === k2) {
              d = f2 = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Jb(function() {
    var d2 = f2, e2 = xb(c), g2 = [];
    a: {
      var h2 = df.get(a);
      if (void 0 !== h2) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h2 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k3 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k3) {
            if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h2 : ue(k3);
            u2 = null == n2 ? h2 : ue(n2);
            h2 = new t2(F2, w2 + "leave", k3, c, e2);
            h2.target = J2;
            h2.relatedTarget = u2;
            F2 = null;
            Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g2, h2, k3, t2, false);
            null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k3 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h2.type)
          var na = ve;
        else if (me(h2))
          if (we)
            na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
        else
          (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
        if (na && (na = na(a, d2))) {
          ne(g2, na, c, e2);
          break a;
        }
        xa && xa(a, h2, d2);
        "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
      }
      xa = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable)
            Qe = xa, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var $a;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
    }
    se(g2, b);
  });
}
function tf(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e = a, f2 = e.stateNode;
    5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b, c, d, e) {
  for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
    var h = c, k2 = h.alternate, l2 = h.stateNode;
    if (null !== k2 && k2 === d)
      break;
    5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c)
    throw Error(p(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b) {
  var c = b, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType)
      if (c = e.data, "/$" === c) {
        if (0 === d) {
          a.removeChild(e);
          bd(b);
          return;
        }
        d--;
      } else
        "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b)
      break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b)
        break;
      if ("/$" === b)
        return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b)
          return a;
        b--;
      } else
        "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child)
        for (a = Mf(a); null !== a; ) {
          if (c = a[Of])
            return c;
          a = Mf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag)
    return a.stateNode;
  throw Error(p(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c)
    e[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b, c) {
  if (H.current !== Vf)
    throw Error(p(168));
  G(H, b);
  G(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext)
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in b))
      throw Error(p(108, Ra(a) || "Unknown", e));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return true;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(p(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C = b, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f2 = 32 - oc(b) + e;
  if (30 < f2) {
    var g = e - e % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc(b) + e | c << e | d;
    sg = f2 + a;
  } else
    rg = 1 << f2 | c << e | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a))
          throw Error(p(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
      }
    } else {
      if (Dg(a))
        throw Error(p(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
    a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg)
    return false;
  if (!I)
    return Fg(a), I = true, false;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a))
      throw Hg(), Error(p(418));
    for (; b; )
      Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(p(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else
            "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; )
    a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a)
      void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a) {
  var b = Mg.current;
  E(Mg);
  a._currentValue = b;
}
function Sg(a, b, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c)
      break;
    a = a.return;
  }
}
function Tg(a, b) {
  Ng = a;
  Pg = Og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = true), a.firstContext = null);
}
function Vg(a) {
  var b = a._currentValue;
  if (Pg !== a)
    if (a = { context: a, memoizedValue: b, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p(308));
      Og = a;
      Ng.dependencies = { lanes: 0, firstContext: a };
    } else
      Og = Og.next = a;
  return b;
}
var Wg = null;
function Xg(a) {
  null === Wg ? Wg = [a] : Wg.push(a);
}
function Yg(a, b, c, d) {
  var e = b.interleaved;
  null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
  b.interleaved = c;
  return Zg(a, d);
}
function Zg(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var $g = false;
function ah(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function ch(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function dh(a, b, c) {
  var d = a.updateQueue;
  if (null === d)
    return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e = d.pending;
    null === e ? b.next = b : (b.next = e.next, e.next = b);
    d.pending = b;
    return Zg(a, c);
  }
  e = d.interleaved;
  null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
  d.interleaved = b;
  return Zg(a, c);
}
function eh(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function fh(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e = f2 = b : f2 = f2.next = b;
    } else
      e = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function gh(a, b, c, d) {
  var e = a.updateQueue;
  $g = false;
  var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k2 = h, l2 = k2.next;
    k2.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e.baseState;
    g = 0;
    m2 = l2 = k2 = null;
    h = f2;
    do {
      var r2 = h.lane, y2 = h.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h;
          r2 = b;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
      h = h.next;
      if (null === h)
        if (h = e.shared.pending, null === h)
          break;
        else
          r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = m2;
    b = e.shared.interleaved;
    if (null !== b) {
      e = b;
      do
        g |= e.lane, e = e.next;
      while (e !== b);
    } else
      null === f2 && (e.shared.lanes = 0);
    hh |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function ih(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e)
          throw Error(p(191, e));
        e.call(d);
      }
    }
}
var jh = new aa.Component().refs;
function kh(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var nh = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = L(), e = lh(a), f2 = ch(d, e);
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = dh(a, f2, e);
  null !== b && (mh(b, a, e, d), eh(b, a, e));
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = L(), e = lh(a), f2 = ch(d, e);
  f2.tag = 1;
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = dh(a, f2, e);
  null !== b && (mh(b, a, e, d), eh(b, a, e));
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = L(), d = lh(a), e = ch(c, d);
  e.tag = 2;
  void 0 !== b && null !== b && (e.callback = b);
  b = dh(a, e, d);
  null !== b && (mh(b, a, d, c), eh(b, a, d));
} };
function oh(a, b, c, d, e, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
}
function ph(a, b, c) {
  var d = false, e = Vf;
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
  b = new b(c, f2);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = nh;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function qh(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && nh.enqueueReplaceState(b, b.state, null);
}
function rh(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = jh;
  ah(a);
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? e.context = Vg(f2) : (f2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f2));
  e.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  "function" === typeof f2 && (kh(a, b, f2, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function sh(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag)
          throw Error(p(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(p(147, a));
      var e = d, f2 = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2)
        return b.ref;
      b = function(a2) {
        var b2 = e.refs;
        b2 === jh && (b2 = e.refs = {});
        null === a2 ? delete b2[f2] : b2[f2] = a2;
      };
      b._stringRef = f2;
      return b;
    }
    if ("string" !== typeof a)
      throw Error(p(284));
    if (!c._owner)
      throw Error(p(290, a));
  }
  return a;
}
function th(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function uh(a) {
  var b = a._init;
  return b(a._payload);
}
function vh(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.deletions;
      null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; null !== d2; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
      null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = wh(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return b2.flags |= 1048576, c2;
    d2 = b2.alternate;
    if (null !== d2)
      return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
    b2.flags |= 2;
    return c2;
  }
  function g(b2) {
    a && null === b2.alternate && (b2.flags |= 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (null === b2 || 6 !== b2.tag)
      return b2 = xh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k2(a2, b2, c2, d2) {
    var f3 = c2.type;
    if (f3 === ya)
      return m2(a2, b2, c2.props.children, d2, c2.key);
    if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b2.type))
      return d2 = e(b2, c2.props), d2.ref = sh(a2, b2, c2), d2.return = a2, d2;
    d2 = yh(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = sh(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = zh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function m2(a2, b2, c2, d2, f3) {
    if (null === b2 || 7 !== b2.tag)
      return b2 = Ah(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function q2(a2, b2, c2) {
    if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
      return b2 = xh("" + b2, a2.mode, c2), b2.return = a2, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case va:
          return c2 = yh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = sh(a2, null, b2), c2.return = a2, c2;
        case wa:
          return b2 = zh(b2, a2.mode, c2), b2.return = a2, b2;
        case Ha:
          var d2 = b2._init;
          return q2(a2, d2(b2._payload), c2);
      }
      if (eb(b2) || Ka(b2))
        return b2 = Ah(b2, a2.mode, c2, null), b2.return = a2, b2;
      th(a2, b2);
    }
    return null;
  }
  function r2(a2, b2, c2, d2) {
    var e2 = null !== b2 ? b2.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
      return null !== e2 ? null : h(a2, b2, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
        case wa:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
        case Ha:
          return e2 = c2._init, r2(
            a2,
            b2,
            e2(c2._payload),
            d2
          );
      }
      if (eb(c2) || Ka(c2))
        return null !== e2 ? null : m2(a2, b2, c2, d2, null);
      th(a2, c2);
    }
    return null;
  }
  function y2(a2, b2, c2, d2, e2) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
      return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
        case wa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
        case Ha:
          var f3 = d2._init;
          return y2(a2, b2, c2, f3(d2._payload), e2);
      }
      if (eb(d2) || Ka(d2))
        return a2 = a2.get(c2) || null, m2(b2, a2, d2, e2, null);
      th(b2, d2);
    }
    return null;
  }
  function n2(e2, g2, h2, k3) {
    for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e2, u2, h2[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b(e2, u2);
      g2 = f2(n3, g2, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h2.length)
      return c(e2, u2), I && tg(e2, w2), l3;
    if (null === u2) {
      for (; w2 < h2.length; w2++)
        u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e2, w2);
      return l3;
    }
    for (u2 = d(e2, u2); w2 < h2.length; w2++)
      x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function t2(e2, g2, h2, k3) {
    var l3 = Ka(h2);
    if ("function" !== typeof l3)
      throw Error(p(150));
    h2 = l3.call(h2);
    if (null == h2)
      throw Error(p(151));
    for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e2, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b(e2, m3);
      g2 = f2(t3, g2, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done)
      return c(
        e2,
        m3
      ), I && tg(e2, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h2.next())
        n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e2, w2);
      return l3;
    }
    for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next())
      n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function J2(a2, d2, f3, h2) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d2; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e(l3, f3.props);
                  d2.ref = sh(a2, l3, f3);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else
                b(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d2 = Ah(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = yh(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = sh(a2, d2, f3), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d2; ) {
              if (d2.key === l3)
                if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f3.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = zh(f3, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
      }
      if (eb(f3))
        return n2(a2, d2, f3, h2);
      if (Ka(f3))
        return t2(a2, d2, f3, h2);
      th(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = xh(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a) {
  if (a === Dh)
    throw Error(p(174));
  return a;
}
function Ih(a, b) {
  G(Gh, b);
  G(Fh, a);
  G(Eh, Dh);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E(Eh);
  G(Eh, b);
}
function Jh() {
  E(Eh);
  E(Fh);
  E(Gh);
}
function Kh(a) {
  Hh(Gh.current);
  var b = Hh(Eh.current);
  var c = lb(b, a.type);
  b !== c && (G(Fh, a), G(Eh, c));
}
function Lh(a) {
  Fh.current === a && (E(Eh), E(Fh));
}
var M = Uf(0);
function Mh(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
        return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128))
        return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a = 0; a < Nh.length; a++)
    Nh[a]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = false, Th = false, Uh = 0, Vh = 0;
function Q() {
  throw Error(p(321));
}
function Wh(a, b) {
  if (null === b)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Xh(a, b, c, d, e, f2) {
  Rh = f2;
  N = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
  a = c(d, e);
  if (Th) {
    f2 = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f2)
        throw Error(p(301));
      f2 += 1;
      P = O = null;
      b.updateQueue = null;
      Ph.current = $h;
      a = c(d, e);
    } while (Th);
  }
  Ph.current = ai;
  b = null !== O && null !== O.next;
  Rh = 0;
  P = O = N = null;
  Sh = false;
  if (b)
    throw Error(p(300));
  return a;
}
function bi() {
  var a = 0 !== Uh;
  Uh = 0;
  return a;
}
function ci() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P ? N.memoizedState = P = a : P = P.next = a;
  return P;
}
function di() {
  if (null === O) {
    var a = N.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = O.next;
  var b = null === P ? N.memoizedState : P.next;
  if (null !== b)
    P = b, O = a;
  else {
    if (null === a)
      throw Error(p(310));
    O = a;
    a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
    null === P ? N.memoizedState = P = a : P = P.next = a;
  }
  return P;
}
function ei(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function fi(a) {
  var b = di(), c = b.queue;
  if (null === c)
    throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = O, e = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e) {
      var g = e.next;
      e.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (null !== e) {
    f2 = e.next;
    d = d.baseState;
    var h = g = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Rh & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
        N.lanes |= m2;
        hh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g = d : k2.next = h;
    He(d, b.memoizedState) || (Ug = true);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do
      f2 = e.lane, N.lanes |= f2, hh |= f2, e = e.next;
    while (e !== a);
  } else
    null === e && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function gi(a) {
  var b = di(), c = b.queue;
  if (null === c)
    throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e);
    He(f2, b.memoizedState) || (Ug = true);
    b.memoizedState = f2;
    null === b.baseQueue && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function hi() {
}
function ii(a, b) {
  var c = N, d = di(), e = b(), f2 = !He(d.memoizedState, e);
  f2 && (d.memoizedState = e, Ug = true);
  d = d.queue;
  ji(ki.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f2 || null !== P && P.memoizedState.tag & 1) {
    c.flags |= 2048;
    li(9, mi.bind(null, c, d, e, b), void 0, null);
    if (null === R)
      throw Error(p(349));
    0 !== (Rh & 30) || ni(c, b, e);
  }
  return e;
}
function ni(a, b, c) {
  a.flags |= 16384;
  a = { getSnapshot: b, value: c };
  b = N.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function mi(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  oi(b) && pi(a);
}
function ki(a, b, c) {
  return c(function() {
    oi(b) && pi(a);
  });
}
function oi(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return true;
  }
}
function pi(a) {
  var b = Zg(a, 1);
  null !== b && mh(b, a, 1, -1);
}
function qi(a) {
  var b = ci();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
  b.queue = a;
  a = a.dispatch = ri.bind(null, N, a);
  return [b.memoizedState, a];
}
function li(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = N.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function si() {
  return di().memoizedState;
}
function ti(a, b, c, d) {
  var e = ci();
  N.flags |= a;
  e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
}
function ui(a, b, c, d) {
  var e = di();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== O) {
    var g = O.memoizedState;
    f2 = g.destroy;
    if (null !== d && Wh(d, g.deps)) {
      e.memoizedState = li(b, c, f2, d);
      return;
    }
  }
  N.flags |= a;
  e.memoizedState = li(1 | b, c, f2, d);
}
function vi(a, b) {
  return ti(8390656, 8, a, b);
}
function ji(a, b) {
  return ui(2048, 8, a, b);
}
function wi(a, b) {
  return ui(4, 2, a, b);
}
function xi(a, b) {
  return ui(4, 4, a, b);
}
function yi(a, b) {
  if ("function" === typeof b)
    return a = a(), b(a), function() {
      b(null);
    };
  if (null !== b && void 0 !== b)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function zi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ui(4, 4, yi.bind(null, b, a), c);
}
function Ai() {
}
function Bi(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function Ci(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function Di(a, b, c) {
  if (0 === (Rh & 21))
    return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c;
  He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = true);
  return b;
}
function Ei(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Qh.transition;
  Qh.transition = {};
  try {
    a(false), b();
  } finally {
    C = c, Qh.transition = d;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a, b, c) {
  var d = lh(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b, c);
  else if (c = Yg(a, b, c, d), null !== c) {
    var e = L();
    mh(c, a, d, e);
    Ji(c, b, d);
  }
}
function ri(a, b, c) {
  var d = lh(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b, e);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2))
      try {
        var g = b.lastRenderedState, h = f2(g, c);
        e.hasEagerState = true;
        e.eagerState = h;
        if (He(h, g)) {
          var k2 = b.interleaved;
          null === k2 ? (e.next = e, Xg(b)) : (e.next = k2.next, k2.next = e);
          b.interleaved = e;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c = Yg(a, b, e, d);
    null !== c && (e = L(), mh(c, a, d, e), Ji(c, b, d));
  }
}
function Hi(a) {
  var b = a.alternate;
  return a === N || null !== b && b === N;
}
function Ii(a, b) {
  Th = Sh = true;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Ji(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a, b) {
  ci().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ti(
    4194308,
    4,
    yi.bind(null, b, a),
    c
  );
}, useLayoutEffect: function(a, b) {
  return ti(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  return ti(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = ci();
  b = void 0 === b ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = ci();
  b = void 0 !== c ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  d.queue = a;
  a = a.dispatch = Gi.bind(null, N, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = ci();
  a = { current: a };
  return b.memoizedState = a;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
  return ci().memoizedState = a;
}, useTransition: function() {
  var a = qi(false), b = a[0];
  a = Ei.bind(null, a[1]);
  ci().memoizedState = a;
  return [b, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b, c) {
  var d = N, e = ci();
  if (I) {
    if (void 0 === c)
      throw Error(p(407));
    c = c();
  } else {
    c = b();
    if (null === R)
      throw Error(p(349));
    0 !== (Rh & 30) || ni(d, b, c);
  }
  e.memoizedState = c;
  var f2 = { value: c, getSnapshot: b };
  e.queue = f2;
  vi(ki.bind(
    null,
    d,
    f2,
    a
  ), [a]);
  d.flags |= 2048;
  li(9, mi.bind(null, d, f2, c, b), void 0, null);
  return c;
}, useId: function() {
  var a = ci(), b = R.identifierPrefix;
  if (I) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = Uh++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else
    c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, unstable_isNewReconciler: false }, Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a) {
    var b = di();
    return Di(b, O.memoizedState, a);
  },
  useTransition: function() {
    var a = fi(ei)[0], b = di().memoizedState;
    return [a, b];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a) {
  var b = di();
  return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
}, useTransition: function() {
  var a = gi(ei)[0], b = di().memoizedState;
  return [a, b];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
function Ki(a, b) {
  try {
    var c = "", d = b;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e, digest: null };
}
function Li(a, b, c) {
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
}
function Mi(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Pi || (Pi = true, Qi = d);
    Mi(a, b);
  };
  return c;
}
function Ri(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function() {
      return d(e);
    };
    c.callback = function() {
      Mi(a, b);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    Mi(a, b);
    "function" !== typeof d && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Ti(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Ni();
    var e = /* @__PURE__ */ new Set();
    d.set(b, e);
  } else
    e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
  e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
}
function Vi(a) {
  do {
    var b;
    if (b = 13 === a.tag)
      b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
    if (b)
      return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Wi(a, b, c, d, e) {
  if (0 === (a.mode & 1))
    return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Xi = ua.ReactCurrentOwner, Ug = false;
function Yi(a, b, c, d) {
  b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
}
function Zi(a, b, c, d, e) {
  c = c.render;
  var f2 = b.ref;
  Tg(b, e);
  d = Xh(a, b, c, d, f2, e);
  c = bi();
  if (null !== a && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I && c && vg(b);
  b.flags |= 1;
  Yi(a, b, d, e);
  return b.child;
}
function aj(a, b, c, d, e) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps)
      return b.tag = 15, b.type = f2, cj(a, b, f2, d, e);
    a = yh(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e)) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g, d) && a.ref === b.ref)
      return $i(a, b, e);
  }
  b.flags |= 1;
  a = wh(f2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function cj(a, b, c, d, e) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d) && a.ref === b.ref)
      if (Ug = false, b.pendingProps = d = f2, 0 !== (a.lanes & e))
        0 !== (a.flags & 131072) && (Ug = true);
      else
        return b.lanes = a.lanes, $i(a, b, e);
  }
  return dj(a, b, c, d, e);
}
function ej(a, b, c) {
  var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode)
    if (0 === (b.mode & 1))
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c;
    else {
      if (0 === (c & 1073741824))
        return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(fj, gj), gj |= a, null;
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d = null !== f2 ? f2.baseLanes : c;
      G(fj, gj);
      gj |= d;
    }
  else
    null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
  Yi(a, b, e, c);
  return b.child;
}
function hj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c)
    b.flags |= 512, b.flags |= 2097152;
}
function dj(a, b, c, d, e) {
  var f2 = Zf(c) ? Xf : H.current;
  f2 = Yf(b, f2);
  Tg(b, e);
  c = Xh(a, b, c, d, f2, e);
  d = bi();
  if (null !== a && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I && d && vg(b);
  b.flags |= 1;
  Yi(a, b, c, e);
  return b.child;
}
function ij(a, b, c, d, e) {
  if (Zf(c)) {
    var f2 = true;
    cg(b);
  } else
    f2 = false;
  Tg(b, e);
  if (null === b.stateNode)
    jj(a, b), ph(b, c, d), rh(b, c, d, e), d = true;
  else if (null === a) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k2 = g.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
    var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && qh(b, g, d, l2);
    $g = false;
    var r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e);
    k2 = b.memoizedState;
    h !== d || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b, c, m2, d), k2 = b.memoizedState), (h = $g || oh(b, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
  } else {
    g = b.stateNode;
    bh(a, b);
    h = b.memoizedProps;
    l2 = b.type === b.elementType ? h : Lg(b.type, h);
    g.props = l2;
    q2 = b.pendingProps;
    r2 = g.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
    var y2 = c.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && qh(b, g, d, k2);
    $g = false;
    r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e);
    var n2 = b.memoizedState;
    h !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b, c, y2, d), n2 = b.memoizedState), (l2 = $g || oh(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return kj(a, b, c, d, f2, e);
}
function kj(a, b, c, d, e, f2) {
  hj(a, b);
  var g = 0 !== (b.flags & 128);
  if (!d && !g)
    return e && dg(b, c, false), $i(a, b, f2);
  d = b.stateNode;
  Xi.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Bh(b, a.child, null, f2), b.child = Bh(b, null, h, f2)) : Yi(a, b, h, f2);
  b.memoizedState = d.state;
  e && dg(b, c, true);
  return b.child;
}
function lj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
  Ih(a, b.containerInfo);
}
function mj(a, b, c, d, e) {
  Ig();
  Jg(e);
  b.flags |= 256;
  Yi(a, b, c, d);
  return b.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function pj(a, b, c) {
  var d = b.pendingProps, e = M.current, f2 = false, g = 0 !== (b.flags & 128), h;
  (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  if (h)
    f2 = true, b.flags &= -129;
  else if (null === a || null !== a.memoizedState)
    e |= 1;
  G(M, e & 1);
  if (null === a) {
    Eg(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a))
      return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = qj(g, d, 0, null), a = Ah(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
  }
  e = a.memoizedState;
  if (null !== e && (h = e.dehydrated, null !== h))
    return sj(a, b, g, d, h, e, c);
  if (f2) {
    f2 = d.fallback;
    g = b.mode;
    e = a.child;
    h = e.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = wh(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h ? f2 = wh(h, f2) : (f2 = Ah(f2, g, c, null), f2.flags |= 2);
    f2.return = b;
    d.return = b;
    d.sibling = f2;
    b.child = d;
    d = f2;
    f2 = b.child;
    g = a.child.memoizedState;
    g = null === g ? oj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a.childLanes & ~c;
    b.memoizedState = nj;
    return d;
  }
  f2 = a.child;
  a = f2.sibling;
  d = wh(f2, { mode: "visible", children: d.children });
  0 === (b.mode & 1) && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function rj(a, b) {
  b = qj({ mode: "visible", children: b }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function tj(a, b, c, d) {
  null !== d && Jg(d);
  Bh(b, a.child, null, c);
  a = rj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function sj(a, b, c, d, e, f2, g) {
  if (c) {
    if (b.flags & 256)
      return b.flags &= -257, d = Li(Error(p(422))), tj(a, b, g, d);
    if (null !== b.memoizedState)
      return b.child = a.child, b.flags |= 128, null;
    f2 = d.fallback;
    e = b.mode;
    d = qj({ mode: "visible", children: d.children }, e, 0, null);
    f2 = Ah(f2, e, g, null);
    f2.flags |= 2;
    d.return = b;
    f2.return = b;
    d.sibling = f2;
    b.child = d;
    0 !== (b.mode & 1) && Bh(b, a.child, null, g);
    b.child.memoizedState = oj(g);
    b.memoizedState = nj;
    return f2;
  }
  if (0 === (b.mode & 1))
    return tj(a, b, g, null);
  if ("$!" === e.data) {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d)
      var h = d.dgst;
    d = h;
    f2 = Error(p(419));
    d = Li(f2, d, void 0);
    return tj(a, b, g, d);
  }
  h = 0 !== (g & a.childLanes);
  if (Ug || h) {
    d = R;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
      0 !== e && e !== f2.retryLane && (f2.retryLane = e, Zg(a, e), mh(d, a, e, -1));
    }
    uj();
    d = Li(Error(p(421)));
    return tj(a, b, g, d);
  }
  if ("$?" === e.data)
    return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
  a = f2.treeContext;
  yg = Lf(e.nextSibling);
  xg = b;
  I = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = rj(b, d.children);
  b.flags |= 4096;
  return b;
}
function wj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  Sg(a.return, b, c);
}
function xj(a, b, c, d, e) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
}
function yj(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
  Yi(a, b, d.children, c);
  d = M.current;
  if (0 !== (d & 2))
    d = d & 1 | 2, b.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128))
      a:
        for (a = b.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && wj(a, c, b);
          else if (19 === a.tag)
            wj(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  G(M, d);
  if (0 === (b.mode & 1))
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c; )
          a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        xj(b, false, e, c, f2);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === Mh(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        xj(b, true, c, null, f2);
        break;
      case "together":
        xj(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function jj(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $i(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  hh |= b.lanes;
  if (0 === (c & b.childLanes))
    return null;
  if (null !== a && b.child !== a.child)
    throw Error(p(153));
  if (null !== b.child) {
    a = b.child;
    c = wh(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling; )
      a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function zj(a, b, c) {
  switch (b.tag) {
    case 3:
      lj(b);
      Ig();
      break;
    case 5:
      Kh(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      Ih(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context, e = b.memoizedProps.value;
      G(Mg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated)
          return G(M, M.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes))
          return pj(a, b, c);
        G(M, M.current & 1);
        a = $i(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(M, M.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d)
          return yj(a, b, c);
        b.flags |= 128;
      }
      e = b.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G(M, M.current);
      if (d)
        break;
      else
        return null;
    case 22:
    case 23:
      return b.lanes = 0, ej(a, b, c);
  }
  return $i(a, b, c);
}
var Aj, Bj, Cj, Dj;
Aj = function(a, b) {
  for (var c = b.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag)
      a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Bj = function() {
};
Cj = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    Hh(Eh.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "select":
        e = A({}, e, { value: void 0 });
        d = A({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l2 in e)
      if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2])
        if ("style" === l2) {
          var h = e[l2];
          for (g in h)
            h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h = null != e ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h))
        if ("style" === l2)
          if (h) {
            for (g in h)
              !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k2)
              k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
          } else
            c || (f2 || (f2 = []), f2.push(
              l2,
              c
            )), c = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b.updateQueue = l2)
      b.flags |= 4;
  }
};
Dj = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Ej(a, b) {
  if (!I)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; )
          null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; )
          null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function S(a) {
  var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b)
    for (var e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
  else
    for (e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Fj(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d = b.stateNode;
      Jh();
      E(Wf);
      E(H);
      Oh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child)
        Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a, b);
      S(b);
      return null;
    case 5:
      Lh(b);
      var e = Hh(Gh.current);
      c = b.type;
      if (null !== a && null != b.stateNode)
        Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d) {
          if (null === b.stateNode)
            throw Error(p(166));
          S(b);
          return null;
        }
        a = Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f2;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++)
                D(lf[e], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d
              );
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f2);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f2), D("invalid", d);
          }
          ub(c, f2);
          e = null;
          for (var g in f2)
            if (f2.hasOwnProperty(g)) {
              var h = f2[g];
              "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                d.textContent,
                h,
                a
              ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
            }
          switch (c) {
            case "input":
              Va(d);
              db(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          Aj(a, b, false, false);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++)
                  D(lf[e], a);
                e = d;
                break;
              case "source":
                D("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e = d;
                break;
              case "details":
                D("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e = A({}, d, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f2 in h)
              if (h.hasOwnProperty(f2)) {
                var k2 = h[f2];
                "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
              }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a && null != b.stateNode)
        Dj(a, b, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b.stateNode)
          throw Error(p(166));
        c = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f2 = d.nodeValue !== c) {
            if (a = xg, null !== a)
              switch (a.tag) {
                case 3:
                  Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
              }
          }
          f2 && (b.flags |= 4);
        } else
          d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S(b);
      return null;
    case 13:
      E(M);
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
          Hg(), Ig(), b.flags |= 98560, f2 = false;
        else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f2)
              throw Error(p(318));
            f2 = b.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p(317));
            f2[Of] = b;
          } else
            Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128))
        return b.lanes = c, b;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return Rg(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E(M);
      f2 = b.memoizedState;
      if (null === f2)
        return S(b), null;
      d = 0 !== (b.flags & 128);
      g = f2.rendering;
      if (null === g)
        if (d)
          Ej(f2, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128))
            for (a = b.child; null !== a; ) {
              g = Mh(a);
              if (null !== g) {
                b.flags |= 128;
                Ej(f2, false);
                d = g.updateQueue;
                null !== d && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; null !== c; )
                  f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G(M, M.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          null !== f2.tail && B() > Hj && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
        }
      else {
        if (!d)
          if (a = Mh(g), null !== a) {
            if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I)
              return S(b), null;
          } else
            2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
      }
      if (null !== f2.tail)
        return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b.tag));
}
function Jj(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Lh(b), null;
    case 13:
      E(M);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate)
          throw Error(p(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(M), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Mj(a, b) {
  var c = a.ref;
  if (null !== c)
    if ("function" === typeof c)
      try {
        c(null);
      } catch (d) {
        W(a, b, d);
      }
    else
      c.current = null;
}
function Nj(a, b, c) {
  try {
    c();
  } catch (d) {
    W(a, b, d);
  }
}
var Oj = false;
function Pj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a)
      var c = { start: a.selectionStart, end: a.selectionEnd };
    else
      a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && 0 !== d.rangeCount) {
          c = d.anchorNode;
          var e = d.anchorOffset, f2 = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f2.nodeType;
          } catch (F2) {
            c = null;
            break a;
          }
          var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
                q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
                3 === q2.nodeType && (g += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a)
                  break b;
                r2 === c && ++l2 === e && (h = g);
                r2 === f2 && ++m2 === d && (k2 = g);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
        } else
          c = null;
      }
    c = c || { start: 0, end: 0 };
  } else
    c = null;
  Df = { focusedElem: a, selectionRange: c };
  dd = false;
  for (V = b; null !== V; )
    if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a)
      a.return = b, V = a;
    else
      for (; null !== V; ) {
        b = V;
        try {
          var n2 = b.alternate;
          if (0 !== (b.flags & 1024))
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Lg(b.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
        } catch (F2) {
          W(b, b.return, F2);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          V = a;
          break;
        }
        V = b.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f2 = e.destroy;
        e.destroy = void 0;
        void 0 !== f2 && Nj(b, c, f2);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Rj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Sj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Tj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Tj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Uj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Vj(a) {
  a:
    for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Uj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2)
          continue a;
        if (null === a.child || 4 === a.tag)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function Wj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
  else if (4 !== d && (a = a.child, null !== a))
    for (Wj(a, b, c), a = a.sibling; null !== a; )
      Wj(a, b, c), a = a.sibling;
}
function Xj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a))
    for (Xj(a, b, c), a = a.sibling; null !== a; )
      Xj(a, b, c), a = a.sibling;
}
var X = null, Yj = false;
function Zj(a, b, c) {
  for (c = c.child; null !== c; )
    ak(a, b, c), c = c.sibling;
}
function ak(a, b, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount)
    try {
      lc.onCommitFiberUnmount(kc, c);
    } catch (h) {
    }
  switch (c.tag) {
    case 5:
      U || Mj(c, b);
    case 6:
      var d = X, e = Yj;
      X = null;
      Zj(a, b, c);
      X = d;
      Yj = e;
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e = Yj;
      X = c.stateNode.containerInfo;
      Yj = true;
      Zj(a, b, c);
      X = d;
      Yj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f2 = e, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Nj(c, b, g) : 0 !== (f2 & 4) && Nj(c, b, g));
          e = e.next;
        } while (e !== d);
      }
      Zj(a, b, c);
      break;
    case 1:
      if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount))
        try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          W(c, b, h);
        }
      Zj(a, b, c);
      break;
    case 21:
      Zj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
      break;
    default:
      Zj(a, b, c);
  }
}
function bk(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Lj());
    b.forEach(function(b2) {
      var d = ck.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function dk(a, b) {
  var c = b.deletions;
  if (null !== c)
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f2 = a, g = b, h = g;
        a:
          for (; null !== h; ) {
            switch (h.tag) {
              case 5:
                X = h.stateNode;
                Yj = false;
                break a;
              case 3:
                X = h.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X = h.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h = h.return;
          }
        if (null === X)
          throw Error(p(160));
        ak(f2, g, e);
        X = null;
        Yj = false;
        var k2 = e.alternate;
        null !== k2 && (k2.return = null);
        e.return = null;
      } catch (l2) {
        W(e, b, l2);
      }
    }
  if (b.subtreeFlags & 12854)
    for (b = b.child; null !== b; )
      ek(b, a), b = b.sibling;
}
function ek(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b, a);
      fk(a);
      if (d & 4) {
        try {
          Qj(3, a, a.return), Rj(3, a);
        } catch (t2) {
          W(a, a.return, t2);
        }
        try {
          Qj(5, a, a.return);
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 1:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      break;
    case 5:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
            vb(h, g);
            var l2 = vb(h, f2);
            for (g = 0; g < k2.length; g += 2) {
              var m2 = k2[g], q2 = k2[g + 1];
              "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
            }
            switch (h) {
              case "input":
                bb(e, f2);
                break;
              case "textarea":
                ib(e, f2);
                break;
              case "select":
                var r2 = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e[Pf] = f2;
          } catch (t2) {
            W(a, a.return, t2);
          }
      }
      break;
    case 6:
      dk(b, a);
      fk(a);
      if (d & 4) {
        if (null === a.stateNode)
          throw Error(p(162));
        e = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e.nodeValue = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 3:
      dk(b, a);
      fk(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated)
        try {
          bd(b.containerInfo);
        } catch (t2) {
          W(a, a.return, t2);
        }
      break;
    case 4:
      dk(b, a);
      fk(a);
      break;
    case 13:
      dk(b, a);
      fk(a);
      e = a.child;
      e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
      d & 4 && bk(a);
      break;
    case 22:
      m2 = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l2 = U) || m2, dk(b, a), U = l2) : dk(b, a);
      fk(a);
      if (d & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
          for (V = a, m2 = a.child; null !== m2; ) {
            for (q2 = V = m2; null !== V; ) {
              r2 = V;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d = r2;
                    c = r2.return;
                    try {
                      b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W(d, c, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
                } catch (t2) {
                  W(a, a.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W(a, a.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b, a);
      fk(a);
      d & 4 && bk(a);
      break;
    case 21:
      break;
    default:
      dk(
        b,
        a
      ), fk(a);
  }
}
function fk(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Uj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f2 = Vj(a);
          Xj(a, f2, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h = Vj(a);
          Wj(a, h, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k2) {
      W(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function ik(a, b, c) {
  V = a;
  jk(a);
}
function jk(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== V; ) {
    var e = V, f2 = e.child;
    if (22 === e.tag && d) {
      var g = null !== e.memoizedState || Kj;
      if (!g) {
        var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
        h = Kj;
        var l2 = U;
        Kj = g;
        if ((U = k2) && !l2)
          for (V = e; null !== V; )
            g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k2 ? (k2.return = g, V = k2) : kk(e);
        for (; null !== f2; )
          V = f2, jk(f2), f2 = f2.sibling;
        V = e;
        Kj = h;
        U = l2;
      }
      lk(a);
    } else
      0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : lk(a);
  }
}
function lk(a) {
  for (; null !== V; ) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772))
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              U || Rj(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !U)
                if (null === c)
                  d.componentDidMount();
                else {
                  var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                  d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b.updateQueue;
              null !== f2 && ih(b, f2, d);
              break;
            case 3:
              var g = b.updateQueue;
              if (null !== g) {
                c = null;
                if (null !== b.child)
                  switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                ih(b, g, c);
              }
              break;
            case 5:
              var h = b.stateNode;
              if (null === c && b.flags & 4) {
                c = h;
                var k2 = b.memoizedProps;
                switch (b.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c.focus();
                    break;
                  case "img":
                    k2.src && (c.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b.memoizedState) {
                var l2 = b.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
        U || b.flags & 512 && Sj(b);
      } catch (r2) {
        W(b, b.return, r2);
      }
    }
    if (b === a) {
      V = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function hk(a) {
  for (; null !== V; ) {
    var b = V;
    if (b === a) {
      V = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Rj(4, b);
          } catch (k2) {
            W(b, c, k2);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W(b, e, k2);
            }
          }
          var f2 = b.return;
          try {
            Sj(b);
          } catch (k2) {
            W(b, f2, k2);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Sj(b);
          } catch (k2) {
            W(b, g, k2);
          }
      }
    } catch (k2) {
      W(b, b.return, k2);
    }
    if (b === a) {
      V = null;
      break;
    }
    var h = b.sibling;
    if (null !== h) {
      h.return = b.return;
      V = h;
      break;
    }
    V = b.return;
  }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L() {
  return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
}
function lh(a) {
  if (0 === (a.mode & 1))
    return 1;
  if (0 !== (K & 2) && 0 !== Z)
    return Z & -Z;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc()), Ck;
  a = C;
  if (0 !== a)
    return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function mh(a, b, c, d) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== R)
    a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
}
function Ek(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b = d & -d, a.callbackPriority !== b) {
    null != c && bc(c);
    if (1 === b)
      0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
        0 === (K & 6) && jg();
      }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Gk(c, Hk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Hk(a, b) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K & 6))
    throw Error(p(327));
  var c = a.callbackNode;
  if (Ik() && a.callbackNode !== c)
    return null;
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b)
    b = Jk(a, d);
  else {
    b = d;
    var e = K;
    K |= 2;
    var f2 = Kk();
    if (R !== a || Z !== b)
      vk = null, Hj = B() + 500, Lk(a, b);
    do
      try {
        Mk();
        break;
      } catch (h) {
        Nk(a, h);
      }
    while (1);
    Qg();
    nk.current = f2;
    K = e;
    null !== Y ? b = 0 : (R = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
    if (1 === b)
      throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
    if (6 === b)
      Dk(a, d);
    else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Ok(a, f2))), 1 === b))
        throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Qk(a, uk, vk);
          break;
        case 3:
          Dk(a, d);
          if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
            if (0 !== uc(a, 0))
              break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              L();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 4:
          Dk(a, d);
          if ((d & 4194240) === d)
            break;
          b = a.eventTimes;
          for (e = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f2 = 1 << g;
            g = b[g];
            g > e && (e = g);
            d &= ~f2;
          }
          d = e;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 5:
          Qk(a, uk, vk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Ek(a, B());
  return a.callbackNode === c ? Hk.bind(null, a) : null;
}
function Ok(a, b) {
  var c = tk;
  a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
  a = Jk(a, b);
  2 !== a && (b = uk, uk = c, null !== b && Gj(b));
  return a;
}
function Gj(a) {
  null === uk ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c))
        for (var d = 0; d < c.length; d++) {
          var e = c[d], f2 = e.getSnapshot;
          e = e.value;
          try {
            if (!He(f2(), e))
              return false;
          } catch (g) {
            return false;
          }
        }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c)
      c.return = b, b = c;
    else {
      if (b === a)
        break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a)
          return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Dk(a, b) {
  b &= ~sk;
  b &= ~rk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - oc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Fk(a) {
  if (0 !== (K & 6))
    throw Error(p(327));
  Ik();
  var b = uc(a, 0);
  if (0 === (b & 1))
    return Ek(a, B()), null;
  var c = Jk(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b = d, c = Ok(a, d));
  }
  if (1 === c)
    throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
  if (6 === c)
    throw Error(p(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Qk(a, uk, vk);
  Ek(a, B());
  return null;
}
function Rk(a, b) {
  var c = K;
  K |= 1;
  try {
    return a(b);
  } finally {
    K = c, 0 === K && (Hj = B() + 500, fg && jg());
  }
}
function Sk(a) {
  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
  var b = K;
  K |= 1;
  var c = pk.transition, d = C;
  try {
    if (pk.transition = null, C = 1, a)
      return a();
  } finally {
    C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E(fj);
}
function Lk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y)
    for (c = Y.return; null !== c; ) {
      var d = c;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $f();
          break;
        case 3:
          Jh();
          E(Wf);
          E(H);
          Oh();
          break;
        case 5:
          Lh(d);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E(M);
          break;
        case 19:
          E(M);
          break;
        case 10:
          Rg(d.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c = c.return;
    }
  R = a;
  Y = a = wh(a.current, null);
  Z = gj = b;
  T = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b = 0; b < Wg.length; b++)
      if (c = Wg[b], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e = d.next, f2 = c.pending;
        if (null !== f2) {
          var g = f2.next;
          f2.next = e;
          d.next = g;
        }
        c.pending = d;
      }
    Wg = null;
  }
  return a;
}
function Nk(a, b) {
  do {
    var c = Y;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d = N.memoizedState; null !== d; ) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Sh = false;
      }
      Rh = 0;
      P = O = N = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (null === c || null === c.return) {
        T = 1;
        qk = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g = c.return, h = c, k2 = b;
        b = Z;
        h.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi(g);
          if (null !== y2) {
            y2.flags &= -257;
            Wi(y2, g, h, f2, b);
            y2.mode & 1 && Ti(f2, l2, b);
            b = y2;
            k2 = l2;
            var n2 = b.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b & 1)) {
              Ti(f2, l2, b);
              uj();
              break a;
            }
            k2 = Error(p(426));
          }
        } else if (I && h.mode & 1) {
          var J2 = Vi(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi(J2, g, h, f2, b);
            Jg(Ki(k2, h));
            break a;
          }
        }
        f2 = k2 = Ki(k2, h);
        4 !== T && (T = 2);
        null === tk ? tk = [f2] : tk.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b &= -b;
              f2.lanes |= b;
              var x2 = Oi(f2, k2, b);
              fh(f2, x2);
              break a;
            case 1:
              h = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var F2 = Ri(f2, h, b);
                fh(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c);
    } catch (na) {
      b = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a = nk.current;
  nk.current = ai;
  return null === a ? ai : a;
}
function uj() {
  if (0 === T || 3 === T || 2 === T)
    T = 4;
  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
}
function Jk(a, b) {
  var c = K;
  K |= 2;
  var d = Kk();
  if (R !== a || Z !== b)
    vk = null, Lk(a, b);
  do
    try {
      Uk();
      break;
    } catch (e) {
      Nk(a, e);
    }
  while (1);
  Qg();
  K = c;
  nk.current = d;
  if (null !== Y)
    throw Error(p(261));
  R = null;
  Z = 0;
  return T;
}
function Uk() {
  for (; null !== Y; )
    Vk(Y);
}
function Mk() {
  for (; null !== Y && !cc(); )
    Vk(Y);
}
function Vk(a) {
  var b = Wk(a.alternate, a, gj);
  a.memoizedProps = a.pendingProps;
  null === b ? Tk(a) : Y = b;
  ok.current = null;
}
function Tk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Fj(c, b, gj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Jj(c, b);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a)
        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Qk(a, b, c) {
  var d = C, e = pk.transition;
  try {
    pk.transition = null, C = 1, Xk(a, b, c, d);
  } finally {
    pk.transition = e, C = d;
  }
  return null;
}
function Xk(a, b, c, d) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K & 6))
    throw Error(p(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(p(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Bc(a, f2);
  a === R && (Y = R = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g = C;
    C = 1;
    var h = K;
    K |= 4;
    ok.current = null;
    Pj(a, c);
    ek(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    ik(c);
    dc();
    K = h;
    C = g;
    pk.transition = f2;
  } else
    a.current = c;
  wk && (wk = false, xk = a, yk = e);
  f2 = a.pendingLanes;
  0 === f2 && (Si = null);
  mc(c.stateNode);
  Ek(a, B());
  if (null !== b)
    for (d = a.onRecoverableError, c = 0; c < b.length; c++)
      e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
  if (Pi)
    throw Pi = false, a = Qi, Qi = null, a;
  0 !== (yk & 1) && 0 !== a.tag && Ik();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a = Dc(yk), b = pk.transition, c = C;
    try {
      pk.transition = null;
      C = 16 > a ? 16 : a;
      if (null === xk)
        var d = false;
      else {
        a = xk;
        xk = null;
        yk = 0;
        if (0 !== (K & 6))
          throw Error(p(331));
        var e = K;
        K |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g = f2.child;
          if (0 !== (V.flags & 16)) {
            var h = f2.deletions;
            if (null !== h) {
              for (var k2 = 0; k2 < h.length; k2++) {
                var l2 = h[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V = q2;
                  else
                    for (; null !== V; ) {
                      m2 = V;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l2) {
                        V = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V = r2;
                        break;
                      }
                      V = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g)
            g.return = f2, V = g;
          else
            b:
              for (; null !== V; ) {
                f2 = V;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V = x2;
                  break b;
                }
                V = f2.return;
              }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g = V;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2)
            u2.return = g, V = u2;
          else
            b:
              for (g = w2; null !== V; ) {
                h = V;
                if (0 !== (h.flags & 2048))
                  try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h);
                    }
                  } catch (na) {
                    W(h, h.return, na);
                  }
                if (h === g) {
                  V = null;
                  break b;
                }
                var F2 = h.sibling;
                if (null !== F2) {
                  F2.return = h.return;
                  V = F2;
                  break b;
                }
                V = h.return;
              }
        }
        K = e;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot)
          try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
        d = true;
      }
      return d;
    } finally {
      C = c, pk.transition = b;
    }
  }
  return false;
}
function Yk(a, b, c) {
  b = Ki(c, b);
  b = Oi(a, b, 1);
  a = dh(a, b, 1);
  b = L();
  null !== a && (Ac(a, 1, b), Ek(a, b));
}
function W(a, b, c) {
  if (3 === a.tag)
    Yk(a, a, c);
  else
    for (; null !== b; ) {
      if (3 === b.tag) {
        Yk(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
          a = Ki(c, a);
          a = Ri(b, a, 1);
          b = dh(b, a, 1);
          a = L();
          null !== b && (Ac(b, 1, a), Ek(b, a));
          break;
        }
      }
      b = b.return;
    }
}
function Ui(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = L();
  a.pingedLanes |= a.suspendedLanes & c;
  R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
  Ek(a, b);
}
function Zk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = L();
  a = Zg(a, b);
  null !== a && (Ac(a, b, c), Ek(a, c));
}
function vj(a) {
  var b = a.memoizedState, c = 0;
  null !== b && (c = b.retryLane);
  Zk(a, c);
}
function ck(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d && d.delete(b);
  Zk(a, c);
}
var Wk;
Wk = function(a, b, c) {
  if (null !== a)
    if (a.memoizedProps !== b.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128))
        return Ug = false, zj(a, b, c);
      Ug = 0 !== (a.flags & 131072) ? true : false;
    }
  else
    Ug = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      jj(a, b);
      a = b.pendingProps;
      var e = Yf(b, H.current);
      Tg(b, c);
      e = Xh(null, b, d, a, e, c);
      var f2 = bi();
      b.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Yi(null, b, e, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        jj(a, b);
        a = b.pendingProps;
        e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = $k(d);
        a = Lg(d, a);
        switch (e) {
          case 0:
            b = dj(null, b, d, a, c);
            break a;
          case 1:
            b = ij(null, b, d, a, c);
            break a;
          case 11:
            b = Zi(null, b, d, a, c);
            break a;
          case 14:
            b = aj(null, b, d, Lg(d.type, a), c);
            break a;
        }
        throw Error(p(
          306,
          d,
          ""
        ));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
    case 3:
      a: {
        lj(b);
        if (null === a)
          throw Error(p(387));
        d = b.pendingProps;
        f2 = b.memoizedState;
        e = f2.element;
        bh(a, b);
        gh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f2.isDehydrated)
          if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
            e = Ki(Error(p(423)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ki(Error(p(424)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else
            for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Ch(b, null, d, c), b.child = c; c; )
              c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e) {
            b = $i(a, b, c);
            break a;
          }
          Yi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
    case 6:
      return null === a && Eg(b), null;
    case 13:
      return pj(a, b, c);
    case 4:
      return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
    case 7:
      return Yi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        f2 = b.memoizedProps;
        g = e.value;
        G(Mg, d._currentValue);
        d._currentValue = g;
        if (null !== f2)
          if (He(f2.value, g)) {
            if (f2.children === e.children && !Wf.current) {
              b = $i(a, b, c);
              break a;
            }
          } else
            for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
              var h = f2.dependencies;
              if (null !== h) {
                g = f2.child;
                for (var k2 = h.firstContext; null !== k2; ) {
                  if (k2.context === d) {
                    if (1 === f2.tag) {
                      k2 = ch(-1, c & -c);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c);
                    Sg(
                      f2.return,
                      c,
                      b
                    );
                    h.lanes |= c;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g = f2.type === b.type ? null : f2.child;
              else if (18 === f2.tag) {
                g = f2.return;
                if (null === g)
                  throw Error(p(341));
                g.lanes |= c;
                h = g.alternate;
                null !== h && (h.lanes |= c);
                Sg(g, c, b);
                g = f2.sibling;
              } else
                g = f2.child;
              if (null !== g)
                g.return = f2;
              else
                for (g = f2; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (null !== f2) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
              f2 = g;
            }
        Yi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
    case 15:
      return cj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, true, a, c);
    case 19:
      return yj(a, b, c);
    case 22:
      return ej(a, b, c);
  }
  throw Error(p(156, b.tag));
};
function Gk(a, b) {
  return ac(a, b);
}
function al(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new al(a, b, c, d);
}
function bj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function $k(a) {
  if ("function" === typeof a)
    return bj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da)
      return 11;
    if (a === Ga)
      return 14;
  }
  return 2;
}
function wh(a, b) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function yh(a, b, c, d, e, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a)
    bj(a) && (g = 1);
  else if ("string" === typeof a)
    g = 5;
  else
    a:
      switch (a) {
        case ya:
          return Ah(c.children, e, f2, b);
        case za:
          g = 8;
          e |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f2, a;
        case Ea:
          return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f2, a;
        case Fa:
          return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f2, a;
        case Ia:
          return qj(c, e, f2, b);
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha:
                g = 16;
                d = null;
                break a;
            }
          throw Error(p(130, null == a ? a : typeof a, ""));
      }
  b = Bg(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Ah(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function qj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = { isHidden: false };
  return a;
}
function xh(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function zh(a, b, c) {
  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function bl(a, b, c, d, e) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a, b, c, d, e, f2, g, h, k2) {
  a = new bl(a, b, c, h, k2);
  1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
  f2 = Bg(3, null, null, b);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah(f2);
  return a;
}
function dl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function el(a) {
  if (!a)
    return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag)
      throw Error(p(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c))
      return bg(a, c, b);
  }
  return b;
}
function fl(a, b, c, d, e, f2, g, h, k2) {
  a = cl(c, d, true, a, e, f2, g, h, k2);
  a.context = el(null);
  c = a.current;
  d = L();
  e = lh(c);
  f2 = ch(d, e);
  f2.callback = void 0 !== b && null !== b ? b : null;
  dh(c, f2, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Ek(a, d);
  return a;
}
function gl(a, b, c, d) {
  var e = b.current, f2 = L(), g = lh(e);
  c = el(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = ch(f2, g);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = dh(e, b, g);
  null !== a && (mh(a, e, g, f2), eh(a, e, g));
  return g;
}
function hl(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function il(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function jl(a, b) {
  il(a, b);
  (a = a.alternate) && il(a, b);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ml(a) {
  this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function(a) {
  var b = this._internalRoot;
  if (null === b)
    throw Error(p(409));
  gl(a, b, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Sk(function() {
      gl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function nl(a) {
  this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = Hc();
    a = { blockedOn: null, target: a, priority: b };
    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++)
      ;
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function pl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ql() {
}
function rl(a, b, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a2 = hl(g);
        f2.call(a2);
      };
    }
    var g = fl(b, d, a, 0, null, false, false, "", ql);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk();
    return g;
  }
  for (; e = a.lastChild; )
    a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function() {
      var a2 = hl(k2);
      h.call(a2);
    };
  }
  var k2 = cl(a, 0, false, null, null, false, false, "", ql);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Sk(function() {
    gl(b, k2, c, d);
  });
  return k2;
}
function sl(a, b, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e) {
      var h = e;
      e = function() {
        var a2 = hl(g);
        h.call(a2);
      };
    }
    gl(b, g, a, e);
  } else
    g = rl(c, b, a, e, d);
  return hl(g);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b2 = Zg(a, 1);
        if (null !== b2) {
          var c2 = L();
          mh(b2, a, 1, c2);
        }
      }), jl(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b = Zg(a, 134217728);
    if (null !== b) {
      var c = L();
      mh(b, a, 134217728, c);
    }
    jl(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b = lh(a), c = Zg(a, b);
    if (null !== c) {
      var d = L();
      mh(c, a, b, d);
    }
    jl(a, b);
  }
};
Hc = function() {
  return C;
};
Ic = function(a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(p(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b))
    throw Error(p(200));
  return dl(a, b, null, c);
};
reactDom_production_min.createRoot = function(a, b) {
  if (!ol(a))
    throw Error(p(299));
  var c = false, d = "", e = ll;
  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
  b = cl(a, 1, false, null, null, c, false, d, e);
  a[uf] = b.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ml(b);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render)
      throw Error(p(188));
    a = Object.keys(a).join(",");
    throw Error(p(268, a));
  }
  a = Zb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Sk(a);
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!pl(b))
    throw Error(p(200));
  return sl(null, a, b, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b, c) {
  if (!ol(a))
    throw Error(p(405));
  var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = ll;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b = fl(b, null, a, 1, null != c ? c : null, e, false, f2, g);
  a[uf] = b.current;
  sf(a);
  if (d)
    for (a = 0; a < d.length; a++)
      c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
        c,
        e
      );
  return new nl(b);
};
reactDom_production_min.render = function(a, b, c) {
  if (!pl(b))
    throw Error(p(200));
  return sl(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!pl(a))
    throw Error(p(40));
  return a._reactRootContainer ? (Sk(function() {
    sl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!pl(c))
    throw Error(p(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(p(38));
  return sl(a, b, c, false, d);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}
const isDefined = (v2) => v2 !== void 0 && v2 !== null;
const GENERATE_TEST_STATUS = {
  DONE: "DONE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  IN_QUEUE: "IN_QUEUE"
};
class VSCodeAPIWrapper {
  constructor() {
    __publicField(this, "vsCodeApi");
    if (typeof acquireVsCodeApi === "function") {
      this.vsCodeApi = acquireVsCodeApi();
    }
  }
  /**
   * Post a message (i.e. send arbitrary data) to the owner of the webview.
   *
   * @remarks When running webview code inside a web browser, postMessage will instead
   * log the given message to the console.
   *
   * @param message Abitrary data (must be JSON serializable) to send to the extension context.
   */
  postMessage(message) {
    if (this.vsCodeApi) {
      this.vsCodeApi.postMessage(message);
    } else {
      console.info("Not processed message posted from WebView:", message);
    }
  }
  /**
   * Get the persistent state stored for this webview.
   *
   * @remarks When running webview source code inside a web browser, getState will retrieve state
   * from local storage (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
   *
   * @return The current state or `undefined` if no state has been set.
   */
  getState() {
    if (this.vsCodeApi) {
      return this.vsCodeApi.getState();
    } else {
      const state = localStorage.getItem("vscodeState");
      return isDefined(state) ? JSON.parse(state) : void 0;
    }
  }
  /**
   * Set the persistent state stored for this webview.
   *
   * @remarks When running webview source code inside a web browser, setState will set the given
   * state using local storage (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
   *
   * @param newState New persisted state. This must be a JSON serializable object. Can be retrieved
   * using {@link getState}.
   *
   * @return The new state.
   */
  setState(newState) {
    if (this.vsCodeApi) {
      return this.vsCodeApi.setState(newState);
    } else {
      localStorage.setItem("vscodeState", JSON.stringify(newState));
      return newState;
    }
  }
}
const vscode = new VSCodeAPIWrapper();
const toEarlPanelEventTypes = [
  "setDocumentation",
  "setCodeImprovements",
  "setGenerateTestsStatus",
  "setGenerateTestsState",
  "setEarlyConfig"
];
function useWindowEvents(dispatch) {
  reactExports.useEffect(() => {
    const listener = (event) => {
      const {
        data: { type, payload }
      } = event;
      if (!toEarlPanelEventTypes.includes(type)) {
        return;
      }
      if (isDefined(type) && isDefined(payload)) {
        dispatch({ type, payload });
      }
    };
    window.addEventListener("message", listener);
    return () => {
      window.removeEventListener("message", listener);
    };
  }, []);
}
function parseCodeParts(text) {
  return text.replace(/^```(typescript|javascript)\s*/, "").replace(/\s*```$/, "");
}
const appReducer = (state, action) => {
  switch (action.type) {
    case "setDocumentation": {
      return {
        ...state,
        documentation: {
          // ToDo: this logic should be moved on BE part
          text: parseCodeParts(action.payload.text),
          status: action.payload.status,
          isReopened: action.payload.isReopened
        }
      };
    }
    case "setCodeImprovements": {
      return {
        ...state,
        codeImprovements: {
          text: action.payload.text,
          status: action.payload.status,
          isReopened: action.payload.isReopened
        }
      };
    }
    case "setGenerateTestsStatus": {
      return {
        ...state,
        generateTests: {
          ...state.generateTests,
          status: action.payload.status
        }
      };
    }
    case "setGenerateTestsState": {
      return {
        ...state,
        generateTests: {
          methodName: action.payload.methodName,
          status: action.payload.status
        }
      };
    }
    case "setEarlyConfig": {
      return {
        ...state,
        earlyConfig: {
          earlPanelEnabled: action.payload.earlPanelEnabled
        }
      };
    }
    default: {
      return state;
    }
  }
};
const defaultState = {
  generateTests: {
    methodName: "",
    status: GENERATE_TEST_STATUS.IN_QUEUE
  },
  documentation: void 0,
  codeImprovements: void 0,
  earlyConfig: void 0
};
const AppContext = reactExports.createContext({
  ...defaultState,
  dispatch: () => {
  }
});
const AppProvider = ({ children: children2 }) => {
  const [state, dispatch] = reactExports.useReducer(appReducer, defaultState);
  useWindowEvents(dispatch);
  reactExports.useEffect(() => {
    vscode.postMessage({ type: "getGenerateTestsState" });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppContext.Provider, { value: { ...state, dispatch }, children: children2 });
};
const useAppContext = () => {
  const context = reactExports.useContext(AppContext);
  if (!isDefined(context)) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
const translate = (disctionary) => function Translation(term, parameters) {
  const text = disctionary[term] ?? term;
  const lines = text.split(/{{|}}/);
  return isDefined(parameters) ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: lines.map((line) => {
    return isDefined(parameters == null ? void 0 : parameters[line]) ? parameters[line] : line;
  }) }) : text;
};
const TRANSLATIONS_TEXTS = {
  "PAGE.TITLE": "Earl",
  "PAGE.SUBTITLE": "Early AI's quality engineer",
  "SECTION.GENERATING_TESTS_TITLE": "Generating Tests for {{functionName}}",
  "SECTION.GO_TO_TESTS_BUTTON": "Go to Tests",
  "SECTION.GO_TO_METHOD_BUTTON": "Go to Function",
  "SECTION.IN_PROGRESS_LABEL": "In Progress...",
  "SECTION.FAILED_LABEL": "Generate Tests failed. Please try a different function.",
  "SECTION.FUNCTION_DOCUMENTATION_TITLE": "Function Documentation",
  "SECTION.FUNCTION_DOCUMENTATION_DESCRIPTION": "Documentation for the function, including description, parameters, return type, and exceptions.",
  "SECTION.FUNCTION_CODE_IMPROVEMENTS_TITLE": "Function Code Improvements",
  "SECTION.FUNCTION_CODE_IMPROVEMENTS_DESCRIPTION": "Key suggestions to improve the function's performance, readability, and error handling.",
  "SECTION.EARL_PANEL_ENABLED_LABEL": "Show Earl Suggestions",
  "SECTION.EARL_PANEL_ENABLED_DESCRIPTION": "You can turn suggestions on or off from the extension's Settings screen.",
  "CODE_SNIPPET.INSERT_BUTTON": "Insert",
  "CODE_SNIPPET.INSERTED_BUTTON": "Inserted!",
  "CODE_SNIPPET.COPY_BUTTON": "Copy",
  "CODE_SNIPPET.COPIED_BUTTON": "Copied!",
  "GENERATE_TEST_STATUS.IN_QUEUE": "In Queue",
  "GENERATE_TEST_STATUS.IN_PROGRESS": "In Progress",
  "GENERATE_TEST_STATUS.DONE": "Done",
  "GENERATE_TEST_STATUS.FAILED": "Failed"
};
const t = translate(TRANSLATIONS_TEXTS);
const $global = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  try {
    return new Function("return this")();
  } catch (_a) {
    return {};
  }
}();
if ($global.trustedTypes === void 0) {
  $global.trustedTypes = { createPolicy: (n2, r2) => r2 };
}
const propConfig = {
  configurable: false,
  enumerable: false,
  writable: false
};
if ($global.FAST === void 0) {
  Reflect.defineProperty($global, "FAST", Object.assign({ value: /* @__PURE__ */ Object.create(null) }, propConfig));
}
const FAST = $global.FAST;
if (FAST.getById === void 0) {
  const storage = /* @__PURE__ */ Object.create(null);
  Reflect.defineProperty(FAST, "getById", Object.assign({ value(id2, initialize) {
    let found = storage[id2];
    if (found === void 0) {
      found = initialize ? storage[id2] = initialize() : null;
    }
    return found;
  } }, propConfig));
}
const emptyArray = Object.freeze([]);
function createMetadataLocator() {
  const metadataLookup = /* @__PURE__ */ new WeakMap();
  return function(target) {
    let metadata = metadataLookup.get(target);
    if (metadata === void 0) {
      let currentTarget = Reflect.getPrototypeOf(target);
      while (metadata === void 0 && currentTarget !== null) {
        metadata = metadataLookup.get(currentTarget);
        currentTarget = Reflect.getPrototypeOf(currentTarget);
      }
      metadata = metadata === void 0 ? [] : metadata.slice(0);
      metadataLookup.set(target, metadata);
    }
    return metadata;
  };
}
const updateQueue = $global.FAST.getById(1, () => {
  const tasks = [];
  const pendingErrors = [];
  function throwFirstError() {
    if (pendingErrors.length) {
      throw pendingErrors.shift();
    }
  }
  function tryRunTask(task) {
    try {
      task.call();
    } catch (error) {
      pendingErrors.push(error);
      setTimeout(throwFirstError, 0);
    }
  }
  function process() {
    const capacity = 1024;
    let index = 0;
    while (index < tasks.length) {
      tryRunTask(tasks[index]);
      index++;
      if (index > capacity) {
        for (let scan = 0, newLength = tasks.length - index; scan < newLength; scan++) {
          tasks[scan] = tasks[scan + index];
        }
        tasks.length -= index;
        index = 0;
      }
    }
    tasks.length = 0;
  }
  function enqueue(callable) {
    if (tasks.length < 1) {
      $global.requestAnimationFrame(process);
    }
    tasks.push(callable);
  }
  return Object.freeze({
    enqueue,
    process
  });
});
const fastHTMLPolicy = $global.trustedTypes.createPolicy("fast-html", {
  createHTML: (html2) => html2
});
let htmlPolicy = fastHTMLPolicy;
const marker = `fast-${Math.random().toString(36).substring(2, 8)}`;
const _interpolationStart = `${marker}{`;
const _interpolationEnd = `}${marker}`;
const DOM = Object.freeze({
  /**
   * Indicates whether the DOM supports the adoptedStyleSheets feature.
   */
  supportsAdoptedStyleSheets: Array.isArray(document.adoptedStyleSheets) && "replace" in CSSStyleSheet.prototype,
  /**
   * Sets the HTML trusted types policy used by the templating engine.
   * @param policy - The policy to set for HTML.
   * @remarks
   * This API can only be called once, for security reasons. It should be
   * called by the application developer at the start of their program.
   */
  setHTMLPolicy(policy) {
    if (htmlPolicy !== fastHTMLPolicy) {
      throw new Error("The HTML policy can only be set once.");
    }
    htmlPolicy = policy;
  },
  /**
   * Turns a string into trusted HTML using the configured trusted types policy.
   * @param html - The string to turn into trusted HTML.
   * @remarks
   * Used internally by the template engine when creating templates
   * and setting innerHTML.
   */
  createHTML(html2) {
    return htmlPolicy.createHTML(html2);
  },
  /**
   * Determines if the provided node is a template marker used by the runtime.
   * @param node - The node to test.
   */
  isMarker(node) {
    return node && node.nodeType === 8 && node.data.startsWith(marker);
  },
  /**
   * Given a marker node, extract the {@link HTMLDirective} index from the placeholder.
   * @param node - The marker node to extract the index from.
   */
  extractDirectiveIndexFromMarker(node) {
    return parseInt(node.data.replace(`${marker}:`, ""));
  },
  /**
   * Creates a placeholder string suitable for marking out a location *within*
   * an attribute value or HTML content.
   * @param index - The directive index to create the placeholder for.
   * @remarks
   * Used internally by binding directives.
   */
  createInterpolationPlaceholder(index) {
    return `${_interpolationStart}${index}${_interpolationEnd}`;
  },
  /**
   * Creates a placeholder that manifests itself as an attribute on an
   * element.
   * @param attributeName - The name of the custom attribute.
   * @param index - The directive index to create the placeholder for.
   * @remarks
   * Used internally by attribute directives such as `ref`, `slotted`, and `children`.
   */
  createCustomAttributePlaceholder(attributeName, index) {
    return `${attributeName}="${this.createInterpolationPlaceholder(index)}"`;
  },
  /**
   * Creates a placeholder that manifests itself as a marker within the DOM structure.
   * @param index - The directive index to create the placeholder for.
   * @remarks
   * Used internally by structural directives such as `repeat`.
   */
  createBlockPlaceholder(index) {
    return `<!--${marker}:${index}-->`;
  },
  /**
   * Schedules DOM update work in the next async batch.
   * @param callable - The callable function or object to queue.
   */
  queueUpdate: updateQueue.enqueue,
  /**
   * Immediately processes all work previously scheduled
   * through queueUpdate.
   * @remarks
   * This also forces nextUpdate promises
   * to resolve.
   */
  processUpdates: updateQueue.process,
  /**
   * Resolves with the next DOM update.
   */
  nextUpdate() {
    return new Promise(updateQueue.enqueue);
  },
  /**
   * Sets an attribute value on an element.
   * @param element - The element to set the attribute value on.
   * @param attributeName - The attribute name to set.
   * @param value - The value of the attribute to set.
   * @remarks
   * If the value is `null` or `undefined`, the attribute is removed, otherwise
   * it is set to the provided value using the standard `setAttribute` API.
   */
  setAttribute(element, attributeName, value) {
    if (value === null || value === void 0) {
      element.removeAttribute(attributeName);
    } else {
      element.setAttribute(attributeName, value);
    }
  },
  /**
   * Sets a boolean attribute value.
   * @param element - The element to set the boolean attribute value on.
   * @param attributeName - The attribute name to set.
   * @param value - The value of the attribute to set.
   * @remarks
   * If the value is true, the attribute is added; otherwise it is removed.
   */
  setBooleanAttribute(element, attributeName, value) {
    value ? element.setAttribute(attributeName, "") : element.removeAttribute(attributeName);
  },
  /**
   * Removes all the child nodes of the provided parent node.
   * @param parent - The node to remove the children from.
   */
  removeChildNodes(parent) {
    for (let child = parent.firstChild; child !== null; child = parent.firstChild) {
      parent.removeChild(child);
    }
  },
  /**
   * Creates a TreeWalker configured to walk a template fragment.
   * @param fragment - The fragment to walk.
   */
  createTemplateWalker(fragment) {
    return document.createTreeWalker(
      fragment,
      133,
      // element, text, comment
      null,
      false
    );
  }
});
class SubscriberSet {
  /**
   * Creates an instance of SubscriberSet for the specified source.
   * @param source - The object source that subscribers will receive notifications from.
   * @param initialSubscriber - An initial subscriber to changes.
   */
  constructor(source, initialSubscriber) {
    this.sub1 = void 0;
    this.sub2 = void 0;
    this.spillover = void 0;
    this.source = source;
    this.sub1 = initialSubscriber;
  }
  /**
   * Checks whether the provided subscriber has been added to this set.
   * @param subscriber - The subscriber to test for inclusion in this set.
   */
  has(subscriber) {
    return this.spillover === void 0 ? this.sub1 === subscriber || this.sub2 === subscriber : this.spillover.indexOf(subscriber) !== -1;
  }
  /**
   * Subscribes to notification of changes in an object's state.
   * @param subscriber - The object that is subscribing for change notification.
   */
  subscribe(subscriber) {
    const spillover = this.spillover;
    if (spillover === void 0) {
      if (this.has(subscriber)) {
        return;
      }
      if (this.sub1 === void 0) {
        this.sub1 = subscriber;
        return;
      }
      if (this.sub2 === void 0) {
        this.sub2 = subscriber;
        return;
      }
      this.spillover = [this.sub1, this.sub2, subscriber];
      this.sub1 = void 0;
      this.sub2 = void 0;
    } else {
      const index = spillover.indexOf(subscriber);
      if (index === -1) {
        spillover.push(subscriber);
      }
    }
  }
  /**
   * Unsubscribes from notification of changes in an object's state.
   * @param subscriber - The object that is unsubscribing from change notification.
   */
  unsubscribe(subscriber) {
    const spillover = this.spillover;
    if (spillover === void 0) {
      if (this.sub1 === subscriber) {
        this.sub1 = void 0;
      } else if (this.sub2 === subscriber) {
        this.sub2 = void 0;
      }
    } else {
      const index = spillover.indexOf(subscriber);
      if (index !== -1) {
        spillover.splice(index, 1);
      }
    }
  }
  /**
   * Notifies all subscribers.
   * @param args - Data passed along to subscribers during notification.
   */
  notify(args) {
    const spillover = this.spillover;
    const source = this.source;
    if (spillover === void 0) {
      const sub1 = this.sub1;
      const sub2 = this.sub2;
      if (sub1 !== void 0) {
        sub1.handleChange(source, args);
      }
      if (sub2 !== void 0) {
        sub2.handleChange(source, args);
      }
    } else {
      for (let i = 0, ii2 = spillover.length; i < ii2; ++i) {
        spillover[i].handleChange(source, args);
      }
    }
  }
}
class PropertyChangeNotifier {
  /**
   * Creates an instance of PropertyChangeNotifier for the specified source.
   * @param source - The object source that subscribers will receive notifications from.
   */
  constructor(source) {
    this.subscribers = {};
    this.sourceSubscribers = null;
    this.source = source;
  }
  /**
   * Notifies all subscribers, based on the specified property.
   * @param propertyName - The property name, passed along to subscribers during notification.
   */
  notify(propertyName) {
    var _a;
    const subscribers = this.subscribers[propertyName];
    if (subscribers !== void 0) {
      subscribers.notify(propertyName);
    }
    (_a = this.sourceSubscribers) === null || _a === void 0 ? void 0 : _a.notify(propertyName);
  }
  /**
   * Subscribes to notification of changes in an object's state.
   * @param subscriber - The object that is subscribing for change notification.
   * @param propertyToWatch - The name of the property that the subscriber is interested in watching for changes.
   */
  subscribe(subscriber, propertyToWatch) {
    var _a;
    if (propertyToWatch) {
      let subscribers = this.subscribers[propertyToWatch];
      if (subscribers === void 0) {
        this.subscribers[propertyToWatch] = subscribers = new SubscriberSet(this.source);
      }
      subscribers.subscribe(subscriber);
    } else {
      this.sourceSubscribers = (_a = this.sourceSubscribers) !== null && _a !== void 0 ? _a : new SubscriberSet(this.source);
      this.sourceSubscribers.subscribe(subscriber);
    }
  }
  /**
   * Unsubscribes from notification of changes in an object's state.
   * @param subscriber - The object that is unsubscribing from change notification.
   * @param propertyToUnwatch - The name of the property that the subscriber is no longer interested in watching.
   */
  unsubscribe(subscriber, propertyToUnwatch) {
    var _a;
    if (propertyToUnwatch) {
      const subscribers = this.subscribers[propertyToUnwatch];
      if (subscribers !== void 0) {
        subscribers.unsubscribe(subscriber);
      }
    } else {
      (_a = this.sourceSubscribers) === null || _a === void 0 ? void 0 : _a.unsubscribe(subscriber);
    }
  }
}
const Observable = FAST.getById(2, () => {
  const volatileRegex = /(:|&&|\|\||if)/;
  const notifierLookup = /* @__PURE__ */ new WeakMap();
  const queueUpdate = DOM.queueUpdate;
  let watcher = void 0;
  let createArrayObserver = (array) => {
    throw new Error("Must call enableArrayObservation before observing arrays.");
  };
  function getNotifier(source) {
    let found = source.$fastController || notifierLookup.get(source);
    if (found === void 0) {
      if (Array.isArray(source)) {
        found = createArrayObserver(source);
      } else {
        notifierLookup.set(source, found = new PropertyChangeNotifier(source));
      }
    }
    return found;
  }
  const getAccessors = createMetadataLocator();
  class DefaultObservableAccessor {
    constructor(name) {
      this.name = name;
      this.field = `_${name}`;
      this.callback = `${name}Changed`;
    }
    getValue(source) {
      if (watcher !== void 0) {
        watcher.watch(source, this.name);
      }
      return source[this.field];
    }
    setValue(source, newValue) {
      const field = this.field;
      const oldValue = source[field];
      if (oldValue !== newValue) {
        source[field] = newValue;
        const callback = source[this.callback];
        if (typeof callback === "function") {
          callback.call(source, oldValue, newValue);
        }
        getNotifier(source).notify(this.name);
      }
    }
  }
  class BindingObserverImplementation extends SubscriberSet {
    constructor(binding, initialSubscriber, isVolatileBinding = false) {
      super(binding, initialSubscriber);
      this.binding = binding;
      this.isVolatileBinding = isVolatileBinding;
      this.needsRefresh = true;
      this.needsQueue = true;
      this.first = this;
      this.last = null;
      this.propertySource = void 0;
      this.propertyName = void 0;
      this.notifier = void 0;
      this.next = void 0;
    }
    observe(source, context) {
      if (this.needsRefresh && this.last !== null) {
        this.disconnect();
      }
      const previousWatcher = watcher;
      watcher = this.needsRefresh ? this : void 0;
      this.needsRefresh = this.isVolatileBinding;
      const result = this.binding(source, context);
      watcher = previousWatcher;
      return result;
    }
    disconnect() {
      if (this.last !== null) {
        let current = this.first;
        while (current !== void 0) {
          current.notifier.unsubscribe(this, current.propertyName);
          current = current.next;
        }
        this.last = null;
        this.needsRefresh = this.needsQueue = true;
      }
    }
    watch(propertySource, propertyName) {
      const prev = this.last;
      const notifier = getNotifier(propertySource);
      const current = prev === null ? this.first : {};
      current.propertySource = propertySource;
      current.propertyName = propertyName;
      current.notifier = notifier;
      notifier.subscribe(this, propertyName);
      if (prev !== null) {
        if (!this.needsRefresh) {
          let prevValue;
          watcher = void 0;
          prevValue = prev.propertySource[prev.propertyName];
          watcher = this;
          if (propertySource === prevValue) {
            this.needsRefresh = true;
          }
        }
        prev.next = current;
      }
      this.last = current;
    }
    handleChange() {
      if (this.needsQueue) {
        this.needsQueue = false;
        queueUpdate(this);
      }
    }
    call() {
      if (this.last !== null) {
        this.needsQueue = true;
        this.notify(this);
      }
    }
    records() {
      let next = this.first;
      return {
        next: () => {
          const current = next;
          if (current === void 0) {
            return { value: void 0, done: true };
          } else {
            next = next.next;
            return {
              value: current,
              done: false
            };
          }
        },
        [Symbol.iterator]: function() {
          return this;
        }
      };
    }
  }
  return Object.freeze({
    /**
     * @internal
     * @param factory - The factory used to create array observers.
     */
    setArrayObserverFactory(factory) {
      createArrayObserver = factory;
    },
    /**
     * Gets a notifier for an object or Array.
     * @param source - The object or Array to get the notifier for.
     */
    getNotifier,
    /**
     * Records a property change for a source object.
     * @param source - The object to record the change against.
     * @param propertyName - The property to track as changed.
     */
    track(source, propertyName) {
      if (watcher !== void 0) {
        watcher.watch(source, propertyName);
      }
    },
    /**
     * Notifies watchers that the currently executing property getter or function is volatile
     * with respect to its observable dependencies.
     */
    trackVolatile() {
      if (watcher !== void 0) {
        watcher.needsRefresh = true;
      }
    },
    /**
     * Notifies subscribers of a source object of changes.
     * @param source - the object to notify of changes.
     * @param args - The change args to pass to subscribers.
     */
    notify(source, args) {
      getNotifier(source).notify(args);
    },
    /**
     * Defines an observable property on an object or prototype.
     * @param target - The target object to define the observable on.
     * @param nameOrAccessor - The name of the property to define as observable;
     * or a custom accessor that specifies the property name and accessor implementation.
     */
    defineProperty(target, nameOrAccessor) {
      if (typeof nameOrAccessor === "string") {
        nameOrAccessor = new DefaultObservableAccessor(nameOrAccessor);
      }
      getAccessors(target).push(nameOrAccessor);
      Reflect.defineProperty(target, nameOrAccessor.name, {
        enumerable: true,
        get: function() {
          return nameOrAccessor.getValue(this);
        },
        set: function(newValue) {
          nameOrAccessor.setValue(this, newValue);
        }
      });
    },
    /**
     * Finds all the observable accessors defined on the target,
     * including its prototype chain.
     * @param target - The target object to search for accessor on.
     */
    getAccessors,
    /**
     * Creates a {@link BindingObserver} that can watch the
     * provided {@link Binding} for changes.
     * @param binding - The binding to observe.
     * @param initialSubscriber - An initial subscriber to changes in the binding value.
     * @param isVolatileBinding - Indicates whether the binding's dependency list must be re-evaluated on every value evaluation.
     */
    binding(binding, initialSubscriber, isVolatileBinding = this.isVolatileBinding(binding)) {
      return new BindingObserverImplementation(binding, initialSubscriber, isVolatileBinding);
    },
    /**
     * Determines whether a binding expression is volatile and needs to have its dependency list re-evaluated
     * on every evaluation of the value.
     * @param binding - The binding to inspect.
     */
    isVolatileBinding(binding) {
      return volatileRegex.test(binding.toString());
    }
  });
});
function observable(target, nameOrAccessor) {
  Observable.defineProperty(target, nameOrAccessor);
}
function volatile(target, name, descriptor) {
  return Object.assign({}, descriptor, {
    get: function() {
      Observable.trackVolatile();
      return descriptor.get.apply(this);
    }
  });
}
const contextEvent = FAST.getById(3, () => {
  let current = null;
  return {
    get() {
      return current;
    },
    set(event) {
      current = event;
    }
  };
});
class ExecutionContext {
  constructor() {
    this.index = 0;
    this.length = 0;
    this.parent = null;
    this.parentContext = null;
  }
  /**
   * The current event within an event handler.
   */
  get event() {
    return contextEvent.get();
  }
  /**
   * Indicates whether the current item within a repeat context
   * has an even index.
   */
  get isEven() {
    return this.index % 2 === 0;
  }
  /**
   * Indicates whether the current item within a repeat context
   * has an odd index.
   */
  get isOdd() {
    return this.index % 2 !== 0;
  }
  /**
   * Indicates whether the current item within a repeat context
   * is the first item in the collection.
   */
  get isFirst() {
    return this.index === 0;
  }
  /**
   * Indicates whether the current item within a repeat context
   * is somewhere in the middle of the collection.
   */
  get isInMiddle() {
    return !this.isFirst && !this.isLast;
  }
  /**
   * Indicates whether the current item within a repeat context
   * is the last item in the collection.
   */
  get isLast() {
    return this.index === this.length - 1;
  }
  /**
   * Sets the event for the current execution context.
   * @param event - The event to set.
   * @internal
   */
  static setEvent(event) {
    contextEvent.set(event);
  }
}
Observable.defineProperty(ExecutionContext.prototype, "index");
Observable.defineProperty(ExecutionContext.prototype, "length");
const defaultExecutionContext = Object.seal(new ExecutionContext());
class HTMLDirective {
  constructor() {
    this.targetIndex = 0;
  }
}
class TargetedHTMLDirective extends HTMLDirective {
  constructor() {
    super(...arguments);
    this.createPlaceholder = DOM.createInterpolationPlaceholder;
  }
}
class AttachedBehaviorHTMLDirective extends HTMLDirective {
  /**
   *
   * @param name - The name of the behavior; used as a custom attribute on the element.
   * @param behavior - The behavior to instantiate and attach to the element.
   * @param options - Options to pass to the behavior during creation.
   */
  constructor(name, behavior, options) {
    super();
    this.name = name;
    this.behavior = behavior;
    this.options = options;
  }
  /**
   * Creates a placeholder string based on the directive's index within the template.
   * @param index - The index of the directive within the template.
   * @remarks
   * Creates a custom attribute placeholder.
   */
  createPlaceholder(index) {
    return DOM.createCustomAttributePlaceholder(this.name, index);
  }
  /**
   * Creates a behavior for the provided target node.
   * @param target - The node instance to create the behavior for.
   * @remarks
   * Creates an instance of the `behavior` type this directive was constructed with
   * and passes the target and options to that `behavior`'s constructor.
   */
  createBehavior(target) {
    return new this.behavior(target, this.options);
  }
}
function normalBind(source, context) {
  this.source = source;
  this.context = context;
  if (this.bindingObserver === null) {
    this.bindingObserver = Observable.binding(this.binding, this, this.isBindingVolatile);
  }
  this.updateTarget(this.bindingObserver.observe(source, context));
}
function triggerBind(source, context) {
  this.source = source;
  this.context = context;
  this.target.addEventListener(this.targetName, this);
}
function normalUnbind() {
  this.bindingObserver.disconnect();
  this.source = null;
  this.context = null;
}
function contentUnbind() {
  this.bindingObserver.disconnect();
  this.source = null;
  this.context = null;
  const view = this.target.$fastView;
  if (view !== void 0 && view.isComposed) {
    view.unbind();
    view.needsBindOnly = true;
  }
}
function triggerUnbind() {
  this.target.removeEventListener(this.targetName, this);
  this.source = null;
  this.context = null;
}
function updateAttributeTarget(value) {
  DOM.setAttribute(this.target, this.targetName, value);
}
function updateBooleanAttributeTarget(value) {
  DOM.setBooleanAttribute(this.target, this.targetName, value);
}
function updateContentTarget(value) {
  if (value === null || value === void 0) {
    value = "";
  }
  if (value.create) {
    this.target.textContent = "";
    let view = this.target.$fastView;
    if (view === void 0) {
      view = value.create();
    } else {
      if (this.target.$fastTemplate !== value) {
        if (view.isComposed) {
          view.remove();
          view.unbind();
        }
        view = value.create();
      }
    }
    if (!view.isComposed) {
      view.isComposed = true;
      view.bind(this.source, this.context);
      view.insertBefore(this.target);
      this.target.$fastView = view;
      this.target.$fastTemplate = value;
    } else if (view.needsBindOnly) {
      view.needsBindOnly = false;
      view.bind(this.source, this.context);
    }
  } else {
    const view = this.target.$fastView;
    if (view !== void 0 && view.isComposed) {
      view.isComposed = false;
      view.remove();
      if (view.needsBindOnly) {
        view.needsBindOnly = false;
      } else {
        view.unbind();
      }
    }
    this.target.textContent = value;
  }
}
function updatePropertyTarget(value) {
  this.target[this.targetName] = value;
}
function updateClassTarget(value) {
  const classVersions = this.classVersions || /* @__PURE__ */ Object.create(null);
  const target = this.target;
  let version = this.version || 0;
  if (value !== null && value !== void 0 && value.length) {
    const names = value.split(/\s+/);
    for (let i = 0, ii2 = names.length; i < ii2; ++i) {
      const currentName = names[i];
      if (currentName === "") {
        continue;
      }
      classVersions[currentName] = version;
      target.classList.add(currentName);
    }
  }
  this.classVersions = classVersions;
  this.version = version + 1;
  if (version === 0) {
    return;
  }
  version -= 1;
  for (const name in classVersions) {
    if (classVersions[name] === version) {
      target.classList.remove(name);
    }
  }
}
class HTMLBindingDirective extends TargetedHTMLDirective {
  /**
   * Creates an instance of BindingDirective.
   * @param binding - A binding that returns the data used to update the DOM.
   */
  constructor(binding) {
    super();
    this.binding = binding;
    this.bind = normalBind;
    this.unbind = normalUnbind;
    this.updateTarget = updateAttributeTarget;
    this.isBindingVolatile = Observable.isVolatileBinding(this.binding);
  }
  /**
   * Gets/sets the name of the attribute or property that this
   * binding is targeting.
   */
  get targetName() {
    return this.originalTargetName;
  }
  set targetName(value) {
    this.originalTargetName = value;
    if (value === void 0) {
      return;
    }
    switch (value[0]) {
      case ":":
        this.cleanedTargetName = value.substr(1);
        this.updateTarget = updatePropertyTarget;
        if (this.cleanedTargetName === "innerHTML") {
          const binding = this.binding;
          this.binding = (s, c) => DOM.createHTML(binding(s, c));
        }
        break;
      case "?":
        this.cleanedTargetName = value.substr(1);
        this.updateTarget = updateBooleanAttributeTarget;
        break;
      case "@":
        this.cleanedTargetName = value.substr(1);
        this.bind = triggerBind;
        this.unbind = triggerUnbind;
        break;
      default:
        this.cleanedTargetName = value;
        if (value === "class") {
          this.updateTarget = updateClassTarget;
        }
        break;
    }
  }
  /**
   * Makes this binding target the content of an element rather than
   * a particular attribute or property.
   */
  targetAtContent() {
    this.updateTarget = updateContentTarget;
    this.unbind = contentUnbind;
  }
  /**
   * Creates the runtime BindingBehavior instance based on the configuration
   * information stored in the BindingDirective.
   * @param target - The target node that the binding behavior should attach to.
   */
  createBehavior(target) {
    return new BindingBehavior(target, this.binding, this.isBindingVolatile, this.bind, this.unbind, this.updateTarget, this.cleanedTargetName);
  }
}
class BindingBehavior {
  /**
   * Creates an instance of BindingBehavior.
   * @param target - The target of the data updates.
   * @param binding - The binding that returns the latest value for an update.
   * @param isBindingVolatile - Indicates whether the binding has volatile dependencies.
   * @param bind - The operation to perform during binding.
   * @param unbind - The operation to perform during unbinding.
   * @param updateTarget - The operation to perform when updating.
   * @param targetName - The name of the target attribute or property to update.
   */
  constructor(target, binding, isBindingVolatile, bind, unbind, updateTarget, targetName) {
    this.source = null;
    this.context = null;
    this.bindingObserver = null;
    this.target = target;
    this.binding = binding;
    this.isBindingVolatile = isBindingVolatile;
    this.bind = bind;
    this.unbind = unbind;
    this.updateTarget = updateTarget;
    this.targetName = targetName;
  }
  /** @internal */
  handleChange() {
    this.updateTarget(this.bindingObserver.observe(this.source, this.context));
  }
  /** @internal */
  handleEvent(event) {
    ExecutionContext.setEvent(event);
    const result = this.binding(this.source, this.context);
    ExecutionContext.setEvent(null);
    if (result !== true) {
      event.preventDefault();
    }
  }
}
let sharedContext = null;
class CompilationContext {
  addFactory(factory) {
    factory.targetIndex = this.targetIndex;
    this.behaviorFactories.push(factory);
  }
  captureContentBinding(directive) {
    directive.targetAtContent();
    this.addFactory(directive);
  }
  reset() {
    this.behaviorFactories = [];
    this.targetIndex = -1;
  }
  release() {
    sharedContext = this;
  }
  static borrow(directives) {
    const shareable = sharedContext || new CompilationContext();
    shareable.directives = directives;
    shareable.reset();
    sharedContext = null;
    return shareable;
  }
}
function createAggregateBinding(parts) {
  if (parts.length === 1) {
    return parts[0];
  }
  let targetName;
  const partCount = parts.length;
  const finalParts = parts.map((x2) => {
    if (typeof x2 === "string") {
      return () => x2;
    }
    targetName = x2.targetName || targetName;
    return x2.binding;
  });
  const binding = (scope, context) => {
    let output = "";
    for (let i = 0; i < partCount; ++i) {
      output += finalParts[i](scope, context);
    }
    return output;
  };
  const directive = new HTMLBindingDirective(binding);
  directive.targetName = targetName;
  return directive;
}
const interpolationEndLength = _interpolationEnd.length;
function parseContent(context, value) {
  const valueParts = value.split(_interpolationStart);
  if (valueParts.length === 1) {
    return null;
  }
  const bindingParts = [];
  for (let i = 0, ii2 = valueParts.length; i < ii2; ++i) {
    const current = valueParts[i];
    const index = current.indexOf(_interpolationEnd);
    let literal;
    if (index === -1) {
      literal = current;
    } else {
      const directiveIndex = parseInt(current.substring(0, index));
      bindingParts.push(context.directives[directiveIndex]);
      literal = current.substring(index + interpolationEndLength);
    }
    if (literal !== "") {
      bindingParts.push(literal);
    }
  }
  return bindingParts;
}
function compileAttributes(context, node, includeBasicValues = false) {
  const attributes = node.attributes;
  for (let i = 0, ii2 = attributes.length; i < ii2; ++i) {
    const attr2 = attributes[i];
    const attrValue = attr2.value;
    const parseResult = parseContent(context, attrValue);
    let result = null;
    if (parseResult === null) {
      if (includeBasicValues) {
        result = new HTMLBindingDirective(() => attrValue);
        result.targetName = attr2.name;
      }
    } else {
      result = createAggregateBinding(parseResult);
    }
    if (result !== null) {
      node.removeAttributeNode(attr2);
      i--;
      ii2--;
      context.addFactory(result);
    }
  }
}
function compileContent(context, node, walker) {
  const parseResult = parseContent(context, node.textContent);
  if (parseResult !== null) {
    let lastNode = node;
    for (let i = 0, ii2 = parseResult.length; i < ii2; ++i) {
      const currentPart = parseResult[i];
      const currentNode = i === 0 ? node : lastNode.parentNode.insertBefore(document.createTextNode(""), lastNode.nextSibling);
      if (typeof currentPart === "string") {
        currentNode.textContent = currentPart;
      } else {
        currentNode.textContent = " ";
        context.captureContentBinding(currentPart);
      }
      lastNode = currentNode;
      context.targetIndex++;
      if (currentNode !== node) {
        walker.nextNode();
      }
    }
    context.targetIndex--;
  }
}
function compileTemplate(template, directives) {
  const fragment = template.content;
  document.adoptNode(fragment);
  const context = CompilationContext.borrow(directives);
  compileAttributes(context, template, true);
  const hostBehaviorFactories = context.behaviorFactories;
  context.reset();
  const walker = DOM.createTemplateWalker(fragment);
  let node;
  while (node = walker.nextNode()) {
    context.targetIndex++;
    switch (node.nodeType) {
      case 1:
        compileAttributes(context, node);
        break;
      case 3:
        compileContent(context, node, walker);
        break;
      case 8:
        if (DOM.isMarker(node)) {
          context.addFactory(directives[DOM.extractDirectiveIndexFromMarker(node)]);
        }
    }
  }
  let targetOffset = 0;
  if (
    // If the first node in a fragment is a marker, that means it's an unstable first node,
    // because something like a when, repeat, etc. could add nodes before the marker.
    // To mitigate this, we insert a stable first node. However, if we insert a node,
    // that will alter the result of the TreeWalker. So, we also need to offset the target index.
    DOM.isMarker(fragment.firstChild) || // Or if there is only one node and a directive, it means the template's content
    // is *only* the directive. In that case, HTMLView.dispose() misses any nodes inserted by
    // the directive. Inserting a new node ensures proper disposal of nodes added by the directive.
    fragment.childNodes.length === 1 && directives.length
  ) {
    fragment.insertBefore(document.createComment(""), fragment.firstChild);
    targetOffset = -1;
  }
  const viewBehaviorFactories = context.behaviorFactories;
  context.release();
  return {
    fragment,
    viewBehaviorFactories,
    hostBehaviorFactories,
    targetOffset
  };
}
const range = document.createRange();
class HTMLView {
  /**
   * Constructs an instance of HTMLView.
   * @param fragment - The html fragment that contains the nodes for this view.
   * @param behaviors - The behaviors to be applied to this view.
   */
  constructor(fragment, behaviors) {
    this.fragment = fragment;
    this.behaviors = behaviors;
    this.source = null;
    this.context = null;
    this.firstChild = fragment.firstChild;
    this.lastChild = fragment.lastChild;
  }
  /**
   * Appends the view's DOM nodes to the referenced node.
   * @param node - The parent node to append the view's DOM nodes to.
   */
  appendTo(node) {
    node.appendChild(this.fragment);
  }
  /**
   * Inserts the view's DOM nodes before the referenced node.
   * @param node - The node to insert the view's DOM before.
   */
  insertBefore(node) {
    if (this.fragment.hasChildNodes()) {
      node.parentNode.insertBefore(this.fragment, node);
    } else {
      const end = this.lastChild;
      if (node.previousSibling === end)
        return;
      const parentNode = node.parentNode;
      let current = this.firstChild;
      let next;
      while (current !== end) {
        next = current.nextSibling;
        parentNode.insertBefore(current, node);
        current = next;
      }
      parentNode.insertBefore(end, node);
    }
  }
  /**
   * Removes the view's DOM nodes.
   * The nodes are not disposed and the view can later be re-inserted.
   */
  remove() {
    const fragment = this.fragment;
    const end = this.lastChild;
    let current = this.firstChild;
    let next;
    while (current !== end) {
      next = current.nextSibling;
      fragment.appendChild(current);
      current = next;
    }
    fragment.appendChild(end);
  }
  /**
   * Removes the view and unbinds its behaviors, disposing of DOM nodes afterward.
   * Once a view has been disposed, it cannot be inserted or bound again.
   */
  dispose() {
    const parent = this.firstChild.parentNode;
    const end = this.lastChild;
    let current = this.firstChild;
    let next;
    while (current !== end) {
      next = current.nextSibling;
      parent.removeChild(current);
      current = next;
    }
    parent.removeChild(end);
    const behaviors = this.behaviors;
    const oldSource = this.source;
    for (let i = 0, ii2 = behaviors.length; i < ii2; ++i) {
      behaviors[i].unbind(oldSource);
    }
  }
  /**
   * Binds a view's behaviors to its binding source.
   * @param source - The binding source for the view's binding behaviors.
   * @param context - The execution context to run the behaviors within.
   */
  bind(source, context) {
    const behaviors = this.behaviors;
    if (this.source === source) {
      return;
    } else if (this.source !== null) {
      const oldSource = this.source;
      this.source = source;
      this.context = context;
      for (let i = 0, ii2 = behaviors.length; i < ii2; ++i) {
        const current = behaviors[i];
        current.unbind(oldSource);
        current.bind(source, context);
      }
    } else {
      this.source = source;
      this.context = context;
      for (let i = 0, ii2 = behaviors.length; i < ii2; ++i) {
        behaviors[i].bind(source, context);
      }
    }
  }
  /**
   * Unbinds a view's behaviors from its binding source.
   */
  unbind() {
    if (this.source === null) {
      return;
    }
    const behaviors = this.behaviors;
    const oldSource = this.source;
    for (let i = 0, ii2 = behaviors.length; i < ii2; ++i) {
      behaviors[i].unbind(oldSource);
    }
    this.source = null;
  }
  /**
   * Efficiently disposes of a contiguous range of synthetic view instances.
   * @param views - A contiguous range of views to be disposed.
   */
  static disposeContiguousBatch(views) {
    if (views.length === 0) {
      return;
    }
    range.setStartBefore(views[0].firstChild);
    range.setEndAfter(views[views.length - 1].lastChild);
    range.deleteContents();
    for (let i = 0, ii2 = views.length; i < ii2; ++i) {
      const view = views[i];
      const behaviors = view.behaviors;
      const oldSource = view.source;
      for (let j = 0, jj2 = behaviors.length; j < jj2; ++j) {
        behaviors[j].unbind(oldSource);
      }
    }
  }
}
class ViewTemplate {
  /**
   * Creates an instance of ViewTemplate.
   * @param html - The html representing what this template will instantiate, including placeholders for directives.
   * @param directives - The directives that will be connected to placeholders in the html.
   */
  constructor(html2, directives) {
    this.behaviorCount = 0;
    this.hasHostBehaviors = false;
    this.fragment = null;
    this.targetOffset = 0;
    this.viewBehaviorFactories = null;
    this.hostBehaviorFactories = null;
    this.html = html2;
    this.directives = directives;
  }
  /**
   * Creates an HTMLView instance based on this template definition.
   * @param hostBindingTarget - The element that host behaviors will be bound to.
   */
  create(hostBindingTarget) {
    if (this.fragment === null) {
      let template;
      const html2 = this.html;
      if (typeof html2 === "string") {
        template = document.createElement("template");
        template.innerHTML = DOM.createHTML(html2);
        const fec = template.content.firstElementChild;
        if (fec !== null && fec.tagName === "TEMPLATE") {
          template = fec;
        }
      } else {
        template = html2;
      }
      const result = compileTemplate(template, this.directives);
      this.fragment = result.fragment;
      this.viewBehaviorFactories = result.viewBehaviorFactories;
      this.hostBehaviorFactories = result.hostBehaviorFactories;
      this.targetOffset = result.targetOffset;
      this.behaviorCount = this.viewBehaviorFactories.length + this.hostBehaviorFactories.length;
      this.hasHostBehaviors = this.hostBehaviorFactories.length > 0;
    }
    const fragment = this.fragment.cloneNode(true);
    const viewFactories = this.viewBehaviorFactories;
    const behaviors = new Array(this.behaviorCount);
    const walker = DOM.createTemplateWalker(fragment);
    let behaviorIndex = 0;
    let targetIndex = this.targetOffset;
    let node = walker.nextNode();
    for (let ii2 = viewFactories.length; behaviorIndex < ii2; ++behaviorIndex) {
      const factory = viewFactories[behaviorIndex];
      const factoryIndex = factory.targetIndex;
      while (node !== null) {
        if (targetIndex === factoryIndex) {
          behaviors[behaviorIndex] = factory.createBehavior(node);
          break;
        } else {
          node = walker.nextNode();
          targetIndex++;
        }
      }
    }
    if (this.hasHostBehaviors) {
      const hostFactories = this.hostBehaviorFactories;
      for (let i = 0, ii2 = hostFactories.length; i < ii2; ++i, ++behaviorIndex) {
        behaviors[behaviorIndex] = hostFactories[i].createBehavior(hostBindingTarget);
      }
    }
    return new HTMLView(fragment, behaviors);
  }
  /**
   * Creates an HTMLView from this template, binds it to the source, and then appends it to the host.
   * @param source - The data source to bind the template to.
   * @param host - The Element where the template will be rendered.
   * @param hostBindingTarget - An HTML element to target the host bindings at if different from the
   * host that the template is being attached to.
   */
  render(source, host, hostBindingTarget) {
    if (typeof host === "string") {
      host = document.getElementById(host);
    }
    if (hostBindingTarget === void 0) {
      hostBindingTarget = host;
    }
    const view = this.create(hostBindingTarget);
    view.bind(source, defaultExecutionContext);
    view.appendTo(host);
    return view;
  }
}
const lastAttributeNameRegex = (
  /* eslint-disable-next-line no-control-regex */
  /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/
);
function html(strings, ...values) {
  const directives = [];
  let html2 = "";
  for (let i = 0, ii2 = strings.length - 1; i < ii2; ++i) {
    const currentString = strings[i];
    let value = values[i];
    html2 += currentString;
    if (value instanceof ViewTemplate) {
      const template = value;
      value = () => template;
    }
    if (typeof value === "function") {
      value = new HTMLBindingDirective(value);
    }
    if (value instanceof TargetedHTMLDirective) {
      const match = lastAttributeNameRegex.exec(currentString);
      if (match !== null) {
        value.targetName = match[2];
      }
    }
    if (value instanceof HTMLDirective) {
      html2 += value.createPlaceholder(directives.length);
      directives.push(value);
    } else {
      html2 += value;
    }
  }
  html2 += strings[strings.length - 1];
  return new ViewTemplate(html2, directives);
}
class ElementStyles {
  constructor() {
    this.targets = /* @__PURE__ */ new WeakSet();
  }
  /** @internal */
  addStylesTo(target) {
    this.targets.add(target);
  }
  /** @internal */
  removeStylesFrom(target) {
    this.targets.delete(target);
  }
  /** @internal */
  isAttachedTo(target) {
    return this.targets.has(target);
  }
  /**
   * Associates behaviors with this set of styles.
   * @param behaviors - The behaviors to associate.
   */
  withBehaviors(...behaviors) {
    this.behaviors = this.behaviors === null ? behaviors : this.behaviors.concat(behaviors);
    return this;
  }
}
ElementStyles.create = (() => {
  if (DOM.supportsAdoptedStyleSheets) {
    const styleSheetCache = /* @__PURE__ */ new Map();
    return (styles) => (
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      new AdoptedStyleSheetsStyles(styles, styleSheetCache)
    );
  }
  return (styles) => new StyleElementStyles(styles);
})();
function reduceStyles(styles) {
  return styles.map((x2) => x2 instanceof ElementStyles ? reduceStyles(x2.styles) : [x2]).reduce((prev, curr) => prev.concat(curr), []);
}
function reduceBehaviors(styles) {
  return styles.map((x2) => x2 instanceof ElementStyles ? x2.behaviors : null).reduce((prev, curr) => {
    if (curr === null) {
      return prev;
    }
    if (prev === null) {
      prev = [];
    }
    return prev.concat(curr);
  }, null);
}
let addAdoptedStyleSheets = (target, sheets) => {
  target.adoptedStyleSheets = [...target.adoptedStyleSheets, ...sheets];
};
let removeAdoptedStyleSheets = (target, sheets) => {
  target.adoptedStyleSheets = target.adoptedStyleSheets.filter((x2) => sheets.indexOf(x2) === -1);
};
if (DOM.supportsAdoptedStyleSheets) {
  try {
    document.adoptedStyleSheets.push();
    document.adoptedStyleSheets.splice();
    addAdoptedStyleSheets = (target, sheets) => {
      target.adoptedStyleSheets.push(...sheets);
    };
    removeAdoptedStyleSheets = (target, sheets) => {
      for (const sheet of sheets) {
        const index = target.adoptedStyleSheets.indexOf(sheet);
        if (index !== -1) {
          target.adoptedStyleSheets.splice(index, 1);
        }
      }
    };
  } catch (e) {
  }
}
class AdoptedStyleSheetsStyles extends ElementStyles {
  constructor(styles, styleSheetCache) {
    super();
    this.styles = styles;
    this.styleSheetCache = styleSheetCache;
    this._styleSheets = void 0;
    this.behaviors = reduceBehaviors(styles);
  }
  get styleSheets() {
    if (this._styleSheets === void 0) {
      const styles = this.styles;
      const styleSheetCache = this.styleSheetCache;
      this._styleSheets = reduceStyles(styles).map((x2) => {
        if (x2 instanceof CSSStyleSheet) {
          return x2;
        }
        let sheet = styleSheetCache.get(x2);
        if (sheet === void 0) {
          sheet = new CSSStyleSheet();
          sheet.replaceSync(x2);
          styleSheetCache.set(x2, sheet);
        }
        return sheet;
      });
    }
    return this._styleSheets;
  }
  addStylesTo(target) {
    addAdoptedStyleSheets(target, this.styleSheets);
    super.addStylesTo(target);
  }
  removeStylesFrom(target) {
    removeAdoptedStyleSheets(target, this.styleSheets);
    super.removeStylesFrom(target);
  }
}
let styleClassId = 0;
function getNextStyleClass() {
  return `fast-style-class-${++styleClassId}`;
}
class StyleElementStyles extends ElementStyles {
  constructor(styles) {
    super();
    this.styles = styles;
    this.behaviors = null;
    this.behaviors = reduceBehaviors(styles);
    this.styleSheets = reduceStyles(styles);
    this.styleClass = getNextStyleClass();
  }
  addStylesTo(target) {
    const styleSheets = this.styleSheets;
    const styleClass = this.styleClass;
    target = this.normalizeTarget(target);
    for (let i = 0; i < styleSheets.length; i++) {
      const element = document.createElement("style");
      element.innerHTML = styleSheets[i];
      element.className = styleClass;
      target.append(element);
    }
    super.addStylesTo(target);
  }
  removeStylesFrom(target) {
    target = this.normalizeTarget(target);
    const styles = target.querySelectorAll(`.${this.styleClass}`);
    for (let i = 0, ii2 = styles.length; i < ii2; ++i) {
      target.removeChild(styles[i]);
    }
    super.removeStylesFrom(target);
  }
  isAttachedTo(target) {
    return super.isAttachedTo(this.normalizeTarget(target));
  }
  normalizeTarget(target) {
    return target === document ? document.body : target;
  }
}
const AttributeConfiguration = Object.freeze({
  /**
   * Locates all attribute configurations associated with a type.
   */
  locate: createMetadataLocator()
});
const booleanConverter = {
  toView(value) {
    return value ? "true" : "false";
  },
  fromView(value) {
    if (value === null || value === void 0 || value === "false" || value === false || value === 0) {
      return false;
    }
    return true;
  }
};
const nullableNumberConverter = {
  toView(value) {
    if (value === null || value === void 0) {
      return null;
    }
    const number = value * 1;
    return isNaN(number) ? null : number.toString();
  },
  fromView(value) {
    if (value === null || value === void 0) {
      return null;
    }
    const number = value * 1;
    return isNaN(number) ? null : number;
  }
};
class AttributeDefinition {
  /**
   * Creates an instance of AttributeDefinition.
   * @param Owner - The class constructor that owns this attribute.
   * @param name - The name of the property associated with the attribute.
   * @param attribute - The name of the attribute in HTML.
   * @param mode - The {@link AttributeMode} that describes the behavior of this attribute.
   * @param converter - A {@link ValueConverter} that integrates with the property getter/setter
   * to convert values to and from a DOM string.
   */
  constructor(Owner, name, attribute = name.toLowerCase(), mode = "reflect", converter) {
    this.guards = /* @__PURE__ */ new Set();
    this.Owner = Owner;
    this.name = name;
    this.attribute = attribute;
    this.mode = mode;
    this.converter = converter;
    this.fieldName = `_${name}`;
    this.callbackName = `${name}Changed`;
    this.hasCallback = this.callbackName in Owner.prototype;
    if (mode === "boolean" && converter === void 0) {
      this.converter = booleanConverter;
    }
  }
  /**
   * Sets the value of the attribute/property on the source element.
   * @param source - The source element to access.
   * @param value - The value to set the attribute/property to.
   */
  setValue(source, newValue) {
    const oldValue = source[this.fieldName];
    const converter = this.converter;
    if (converter !== void 0) {
      newValue = converter.fromView(newValue);
    }
    if (oldValue !== newValue) {
      source[this.fieldName] = newValue;
      this.tryReflectToAttribute(source);
      if (this.hasCallback) {
        source[this.callbackName](oldValue, newValue);
      }
      source.$fastController.notify(this.name);
    }
  }
  /**
   * Gets the value of the attribute/property on the source element.
   * @param source - The source element to access.
   */
  getValue(source) {
    Observable.track(source, this.name);
    return source[this.fieldName];
  }
  /** @internal */
  onAttributeChangedCallback(element, value) {
    if (this.guards.has(element)) {
      return;
    }
    this.guards.add(element);
    this.setValue(element, value);
    this.guards.delete(element);
  }
  tryReflectToAttribute(element) {
    const mode = this.mode;
    const guards = this.guards;
    if (guards.has(element) || mode === "fromView") {
      return;
    }
    DOM.queueUpdate(() => {
      guards.add(element);
      const latestValue = element[this.fieldName];
      switch (mode) {
        case "reflect":
          const converter = this.converter;
          DOM.setAttribute(element, this.attribute, converter !== void 0 ? converter.toView(latestValue) : latestValue);
          break;
        case "boolean":
          DOM.setBooleanAttribute(element, this.attribute, latestValue);
          break;
      }
      guards.delete(element);
    });
  }
  /**
   * Collects all attribute definitions associated with the owner.
   * @param Owner - The class constructor to collect attribute for.
   * @param attributeLists - Any existing attributes to collect and merge with those associated with the owner.
   * @internal
   */
  static collect(Owner, ...attributeLists) {
    const attributes = [];
    attributeLists.push(AttributeConfiguration.locate(Owner));
    for (let i = 0, ii2 = attributeLists.length; i < ii2; ++i) {
      const list = attributeLists[i];
      if (list === void 0) {
        continue;
      }
      for (let j = 0, jj2 = list.length; j < jj2; ++j) {
        const config = list[j];
        if (typeof config === "string") {
          attributes.push(new AttributeDefinition(Owner, config));
        } else {
          attributes.push(new AttributeDefinition(Owner, config.property, config.attribute, config.mode, config.converter));
        }
      }
    }
    return attributes;
  }
}
function attr(configOrTarget, prop) {
  let config;
  function decorator($target, $prop) {
    if (arguments.length > 1) {
      config.property = $prop;
    }
    AttributeConfiguration.locate($target.constructor).push(config);
  }
  if (arguments.length > 1) {
    config = {};
    decorator(configOrTarget, prop);
    return;
  }
  config = configOrTarget === void 0 ? {} : configOrTarget;
  return decorator;
}
const defaultShadowOptions = { mode: "open" };
const defaultElementOptions = {};
const fastRegistry = FAST.getById(4, () => {
  const typeToDefinition = /* @__PURE__ */ new Map();
  return Object.freeze({
    register(definition) {
      if (typeToDefinition.has(definition.type)) {
        return false;
      }
      typeToDefinition.set(definition.type, definition);
      return true;
    },
    getByType(key) {
      return typeToDefinition.get(key);
    }
  });
});
class FASTElementDefinition {
  /**
   * Creates an instance of FASTElementDefinition.
   * @param type - The type this definition is being created for.
   * @param nameOrConfig - The name of the element to define or a config object
   * that describes the element to define.
   */
  constructor(type, nameOrConfig = type.definition) {
    if (typeof nameOrConfig === "string") {
      nameOrConfig = { name: nameOrConfig };
    }
    this.type = type;
    this.name = nameOrConfig.name;
    this.template = nameOrConfig.template;
    const attributes = AttributeDefinition.collect(type, nameOrConfig.attributes);
    const observedAttributes = new Array(attributes.length);
    const propertyLookup = {};
    const attributeLookup = {};
    for (let i = 0, ii2 = attributes.length; i < ii2; ++i) {
      const current = attributes[i];
      observedAttributes[i] = current.attribute;
      propertyLookup[current.name] = current;
      attributeLookup[current.attribute] = current;
    }
    this.attributes = attributes;
    this.observedAttributes = observedAttributes;
    this.propertyLookup = propertyLookup;
    this.attributeLookup = attributeLookup;
    this.shadowOptions = nameOrConfig.shadowOptions === void 0 ? defaultShadowOptions : nameOrConfig.shadowOptions === null ? void 0 : Object.assign(Object.assign({}, defaultShadowOptions), nameOrConfig.shadowOptions);
    this.elementOptions = nameOrConfig.elementOptions === void 0 ? defaultElementOptions : Object.assign(Object.assign({}, defaultElementOptions), nameOrConfig.elementOptions);
    this.styles = nameOrConfig.styles === void 0 ? void 0 : Array.isArray(nameOrConfig.styles) ? ElementStyles.create(nameOrConfig.styles) : nameOrConfig.styles instanceof ElementStyles ? nameOrConfig.styles : ElementStyles.create([nameOrConfig.styles]);
  }
  /**
   * Indicates if this element has been defined in at least one registry.
   */
  get isDefined() {
    return !!fastRegistry.getByType(this.type);
  }
  /**
   * Defines a custom element based on this definition.
   * @param registry - The element registry to define the element in.
   */
  define(registry = customElements) {
    const type = this.type;
    if (fastRegistry.register(this)) {
      const attributes = this.attributes;
      const proto = type.prototype;
      for (let i = 0, ii2 = attributes.length; i < ii2; ++i) {
        Observable.defineProperty(proto, attributes[i]);
      }
      Reflect.defineProperty(type, "observedAttributes", {
        value: this.observedAttributes,
        enumerable: true
      });
    }
    if (!registry.get(this.name)) {
      registry.define(this.name, type, this.elementOptions);
    }
    return this;
  }
}
FASTElementDefinition.forType = fastRegistry.getByType;
const shadowRoots = /* @__PURE__ */ new WeakMap();
const defaultEventOptions = {
  bubbles: true,
  composed: true,
  cancelable: true
};
function getShadowRoot(element) {
  return element.shadowRoot || shadowRoots.get(element) || null;
}
class Controller extends PropertyChangeNotifier {
  /**
   * Creates a Controller to control the specified element.
   * @param element - The element to be controlled by this controller.
   * @param definition - The element definition metadata that instructs this
   * controller in how to handle rendering and other platform integrations.
   * @internal
   */
  constructor(element, definition) {
    super(element);
    this.boundObservables = null;
    this.behaviors = null;
    this.needsInitialization = true;
    this._template = null;
    this._styles = null;
    this._isConnected = false;
    this.$fastController = this;
    this.view = null;
    this.element = element;
    this.definition = definition;
    const shadowOptions = definition.shadowOptions;
    if (shadowOptions !== void 0) {
      const shadowRoot = element.attachShadow(shadowOptions);
      if (shadowOptions.mode === "closed") {
        shadowRoots.set(element, shadowRoot);
      }
    }
    const accessors = Observable.getAccessors(element);
    if (accessors.length > 0) {
      const boundObservables = this.boundObservables = /* @__PURE__ */ Object.create(null);
      for (let i = 0, ii2 = accessors.length; i < ii2; ++i) {
        const propertyName = accessors[i].name;
        const value = element[propertyName];
        if (value !== void 0) {
          delete element[propertyName];
          boundObservables[propertyName] = value;
        }
      }
    }
  }
  /**
   * Indicates whether or not the custom element has been
   * connected to the document.
   */
  get isConnected() {
    Observable.track(this, "isConnected");
    return this._isConnected;
  }
  setIsConnected(value) {
    this._isConnected = value;
    Observable.notify(this, "isConnected");
  }
  /**
   * Gets/sets the template used to render the component.
   * @remarks
   * This value can only be accurately read after connect but can be set at any time.
   */
  get template() {
    return this._template;
  }
  set template(value) {
    if (this._template === value) {
      return;
    }
    this._template = value;
    if (!this.needsInitialization) {
      this.renderTemplate(value);
    }
  }
  /**
   * Gets/sets the primary styles used for the component.
   * @remarks
   * This value can only be accurately read after connect but can be set at any time.
   */
  get styles() {
    return this._styles;
  }
  set styles(value) {
    if (this._styles === value) {
      return;
    }
    if (this._styles !== null) {
      this.removeStyles(this._styles);
    }
    this._styles = value;
    if (!this.needsInitialization && value !== null) {
      this.addStyles(value);
    }
  }
  /**
   * Adds styles to this element. Providing an HTMLStyleElement will attach the element instance to the shadowRoot.
   * @param styles - The styles to add.
   */
  addStyles(styles) {
    const target = getShadowRoot(this.element) || this.element.getRootNode();
    if (styles instanceof HTMLStyleElement) {
      target.append(styles);
    } else if (!styles.isAttachedTo(target)) {
      const sourceBehaviors = styles.behaviors;
      styles.addStylesTo(target);
      if (sourceBehaviors !== null) {
        this.addBehaviors(sourceBehaviors);
      }
    }
  }
  /**
   * Removes styles from this element. Providing an HTMLStyleElement will detach the element instance from the shadowRoot.
   * @param styles - the styles to remove.
   */
  removeStyles(styles) {
    const target = getShadowRoot(this.element) || this.element.getRootNode();
    if (styles instanceof HTMLStyleElement) {
      target.removeChild(styles);
    } else if (styles.isAttachedTo(target)) {
      const sourceBehaviors = styles.behaviors;
      styles.removeStylesFrom(target);
      if (sourceBehaviors !== null) {
        this.removeBehaviors(sourceBehaviors);
      }
    }
  }
  /**
   * Adds behaviors to this element.
   * @param behaviors - The behaviors to add.
   */
  addBehaviors(behaviors) {
    const targetBehaviors = this.behaviors || (this.behaviors = /* @__PURE__ */ new Map());
    const length = behaviors.length;
    const behaviorsToBind = [];
    for (let i = 0; i < length; ++i) {
      const behavior = behaviors[i];
      if (targetBehaviors.has(behavior)) {
        targetBehaviors.set(behavior, targetBehaviors.get(behavior) + 1);
      } else {
        targetBehaviors.set(behavior, 1);
        behaviorsToBind.push(behavior);
      }
    }
    if (this._isConnected) {
      const element = this.element;
      for (let i = 0; i < behaviorsToBind.length; ++i) {
        behaviorsToBind[i].bind(element, defaultExecutionContext);
      }
    }
  }
  /**
   * Removes behaviors from this element.
   * @param behaviors - The behaviors to remove.
   * @param force - Forces unbinding of behaviors.
   */
  removeBehaviors(behaviors, force = false) {
    const targetBehaviors = this.behaviors;
    if (targetBehaviors === null) {
      return;
    }
    const length = behaviors.length;
    const behaviorsToUnbind = [];
    for (let i = 0; i < length; ++i) {
      const behavior = behaviors[i];
      if (targetBehaviors.has(behavior)) {
        const count = targetBehaviors.get(behavior) - 1;
        count === 0 || force ? targetBehaviors.delete(behavior) && behaviorsToUnbind.push(behavior) : targetBehaviors.set(behavior, count);
      }
    }
    if (this._isConnected) {
      const element = this.element;
      for (let i = 0; i < behaviorsToUnbind.length; ++i) {
        behaviorsToUnbind[i].unbind(element);
      }
    }
  }
  /**
   * Runs connected lifecycle behavior on the associated element.
   */
  onConnectedCallback() {
    if (this._isConnected) {
      return;
    }
    const element = this.element;
    if (this.needsInitialization) {
      this.finishInitialization();
    } else if (this.view !== null) {
      this.view.bind(element, defaultExecutionContext);
    }
    const behaviors = this.behaviors;
    if (behaviors !== null) {
      for (const [behavior] of behaviors) {
        behavior.bind(element, defaultExecutionContext);
      }
    }
    this.setIsConnected(true);
  }
  /**
   * Runs disconnected lifecycle behavior on the associated element.
   */
  onDisconnectedCallback() {
    if (!this._isConnected) {
      return;
    }
    this.setIsConnected(false);
    const view = this.view;
    if (view !== null) {
      view.unbind();
    }
    const behaviors = this.behaviors;
    if (behaviors !== null) {
      const element = this.element;
      for (const [behavior] of behaviors) {
        behavior.unbind(element);
      }
    }
  }
  /**
   * Runs the attribute changed callback for the associated element.
   * @param name - The name of the attribute that changed.
   * @param oldValue - The previous value of the attribute.
   * @param newValue - The new value of the attribute.
   */
  onAttributeChangedCallback(name, oldValue, newValue) {
    const attrDef = this.definition.attributeLookup[name];
    if (attrDef !== void 0) {
      attrDef.onAttributeChangedCallback(this.element, newValue);
    }
  }
  /**
   * Emits a custom HTML event.
   * @param type - The type name of the event.
   * @param detail - The event detail object to send with the event.
   * @param options - The event options. By default bubbles and composed.
   * @remarks
   * Only emits events if connected.
   */
  emit(type, detail, options) {
    if (this._isConnected) {
      return this.element.dispatchEvent(new CustomEvent(type, Object.assign(Object.assign({ detail }, defaultEventOptions), options)));
    }
    return false;
  }
  finishInitialization() {
    const element = this.element;
    const boundObservables = this.boundObservables;
    if (boundObservables !== null) {
      const propertyNames = Object.keys(boundObservables);
      for (let i = 0, ii2 = propertyNames.length; i < ii2; ++i) {
        const propertyName = propertyNames[i];
        element[propertyName] = boundObservables[propertyName];
      }
      this.boundObservables = null;
    }
    const definition = this.definition;
    if (this._template === null) {
      if (this.element.resolveTemplate) {
        this._template = this.element.resolveTemplate();
      } else if (definition.template) {
        this._template = definition.template || null;
      }
    }
    if (this._template !== null) {
      this.renderTemplate(this._template);
    }
    if (this._styles === null) {
      if (this.element.resolveStyles) {
        this._styles = this.element.resolveStyles();
      } else if (definition.styles) {
        this._styles = definition.styles || null;
      }
    }
    if (this._styles !== null) {
      this.addStyles(this._styles);
    }
    this.needsInitialization = false;
  }
  renderTemplate(template) {
    const element = this.element;
    const host = getShadowRoot(element) || element;
    if (this.view !== null) {
      this.view.dispose();
      this.view = null;
    } else if (!this.needsInitialization) {
      DOM.removeChildNodes(host);
    }
    if (template) {
      this.view = template.render(element, host, element);
    }
  }
  /**
   * Locates or creates a controller for the specified element.
   * @param element - The element to return the controller for.
   * @remarks
   * The specified element must have a {@link FASTElementDefinition}
   * registered either through the use of the {@link customElement}
   * decorator or a call to `FASTElement.define`.
   */
  static forCustomElement(element) {
    const controller = element.$fastController;
    if (controller !== void 0) {
      return controller;
    }
    const definition = FASTElementDefinition.forType(element.constructor);
    if (definition === void 0) {
      throw new Error("Missing FASTElement definition.");
    }
    return element.$fastController = new Controller(element, definition);
  }
}
function createFASTElement(BaseType) {
  return class extends BaseType {
    constructor() {
      super();
      Controller.forCustomElement(this);
    }
    $emit(type, detail, options) {
      return this.$fastController.emit(type, detail, options);
    }
    connectedCallback() {
      this.$fastController.onConnectedCallback();
    }
    disconnectedCallback() {
      this.$fastController.onDisconnectedCallback();
    }
    attributeChangedCallback(name, oldValue, newValue) {
      this.$fastController.onAttributeChangedCallback(name, oldValue, newValue);
    }
  };
}
const FASTElement = Object.assign(createFASTElement(HTMLElement), {
  /**
   * Creates a new FASTElement base class inherited from the
   * provided base type.
   * @param BaseType - The base element type to inherit from.
   */
  from(BaseType) {
    return createFASTElement(BaseType);
  },
  /**
   * Defines a platform custom element based on the provided type and definition.
   * @param type - The custom element type to define.
   * @param nameOrDef - The name of the element to define or a definition object
   * that describes the element to define.
   */
  define(type, nameOrDef) {
    return new FASTElementDefinition(type, nameOrDef).define().type;
  }
});
class CSSDirective {
  /**
   * Creates a CSS fragment to interpolate into the CSS document.
   * @returns - the string to interpolate into CSS
   */
  createCSS() {
    return "";
  }
  /**
   * Creates a behavior to bind to the host element.
   * @returns - the behavior to bind to the host element, or undefined.
   */
  createBehavior() {
    return void 0;
  }
}
function collectStyles(strings, values) {
  const styles = [];
  let cssString = "";
  const behaviors = [];
  for (let i = 0, ii2 = strings.length - 1; i < ii2; ++i) {
    cssString += strings[i];
    let value = values[i];
    if (value instanceof CSSDirective) {
      const behavior = value.createBehavior();
      value = value.createCSS();
      if (behavior) {
        behaviors.push(behavior);
      }
    }
    if (value instanceof ElementStyles || value instanceof CSSStyleSheet) {
      if (cssString.trim() !== "") {
        styles.push(cssString);
        cssString = "";
      }
      styles.push(value);
    } else {
      cssString += value;
    }
  }
  cssString += strings[strings.length - 1];
  if (cssString.trim() !== "") {
    styles.push(cssString);
  }
  return {
    styles,
    behaviors
  };
}
function css(strings, ...values) {
  const { styles, behaviors } = collectStyles(strings, values);
  const elementStyles = ElementStyles.create(styles);
  if (behaviors.length) {
    elementStyles.withBehaviors(...behaviors);
  }
  return elementStyles;
}
function newSplice(index, removed, addedCount) {
  return {
    index,
    removed,
    addedCount
  };
}
const EDIT_LEAVE = 0;
const EDIT_UPDATE = 1;
const EDIT_ADD = 2;
const EDIT_DELETE = 3;
function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
  const rowCount = oldEnd - oldStart + 1;
  const columnCount = currentEnd - currentStart + 1;
  const distances = new Array(rowCount);
  let north;
  let west;
  for (let i = 0; i < rowCount; ++i) {
    distances[i] = new Array(columnCount);
    distances[i][0] = i;
  }
  for (let j = 0; j < columnCount; ++j) {
    distances[0][j] = j;
  }
  for (let i = 1; i < rowCount; ++i) {
    for (let j = 1; j < columnCount; ++j) {
      if (current[currentStart + j - 1] === old[oldStart + i - 1]) {
        distances[i][j] = distances[i - 1][j - 1];
      } else {
        north = distances[i - 1][j] + 1;
        west = distances[i][j - 1] + 1;
        distances[i][j] = north < west ? north : west;
      }
    }
  }
  return distances;
}
function spliceOperationsFromEditDistances(distances) {
  let i = distances.length - 1;
  let j = distances[0].length - 1;
  let current = distances[i][j];
  const edits = [];
  while (i > 0 || j > 0) {
    if (i === 0) {
      edits.push(EDIT_ADD);
      j--;
      continue;
    }
    if (j === 0) {
      edits.push(EDIT_DELETE);
      i--;
      continue;
    }
    const northWest = distances[i - 1][j - 1];
    const west = distances[i - 1][j];
    const north = distances[i][j - 1];
    let min;
    if (west < north) {
      min = west < northWest ? west : northWest;
    } else {
      min = north < northWest ? north : northWest;
    }
    if (min === northWest) {
      if (northWest === current) {
        edits.push(EDIT_LEAVE);
      } else {
        edits.push(EDIT_UPDATE);
        current = northWest;
      }
      i--;
      j--;
    } else if (min === west) {
      edits.push(EDIT_DELETE);
      i--;
      current = west;
    } else {
      edits.push(EDIT_ADD);
      j--;
      current = north;
    }
  }
  edits.reverse();
  return edits;
}
function sharedPrefix(current, old, searchLength) {
  for (let i = 0; i < searchLength; ++i) {
    if (current[i] !== old[i]) {
      return i;
    }
  }
  return searchLength;
}
function sharedSuffix(current, old, searchLength) {
  let index1 = current.length;
  let index2 = old.length;
  let count = 0;
  while (count < searchLength && current[--index1] === old[--index2]) {
    count++;
  }
  return count;
}
function intersect(start1, end1, start2, end2) {
  if (end1 < start2 || end2 < start1) {
    return -1;
  }
  if (end1 === start2 || end2 === start1) {
    return 0;
  }
  if (start1 < start2) {
    if (end1 < end2) {
      return end1 - start2;
    }
    return end2 - start2;
  }
  if (end2 < end1) {
    return end2 - start1;
  }
  return end1 - start1;
}
function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
  let prefixCount = 0;
  let suffixCount = 0;
  const minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
  if (currentStart === 0 && oldStart === 0) {
    prefixCount = sharedPrefix(current, old, minLength);
  }
  if (currentEnd === current.length && oldEnd === old.length) {
    suffixCount = sharedSuffix(current, old, minLength - prefixCount);
  }
  currentStart += prefixCount;
  oldStart += prefixCount;
  currentEnd -= suffixCount;
  oldEnd -= suffixCount;
  if (currentEnd - currentStart === 0 && oldEnd - oldStart === 0) {
    return emptyArray;
  }
  if (currentStart === currentEnd) {
    const splice2 = newSplice(currentStart, [], 0);
    while (oldStart < oldEnd) {
      splice2.removed.push(old[oldStart++]);
    }
    return [splice2];
  } else if (oldStart === oldEnd) {
    return [newSplice(currentStart, [], currentEnd - currentStart)];
  }
  const ops = spliceOperationsFromEditDistances(calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
  const splices = [];
  let splice = void 0;
  let index = currentStart;
  let oldIndex = oldStart;
  for (let i = 0; i < ops.length; ++i) {
    switch (ops[i]) {
      case EDIT_LEAVE:
        if (splice !== void 0) {
          splices.push(splice);
          splice = void 0;
        }
        index++;
        oldIndex++;
        break;
      case EDIT_UPDATE:
        if (splice === void 0) {
          splice = newSplice(index, [], 0);
        }
        splice.addedCount++;
        index++;
        splice.removed.push(old[oldIndex]);
        oldIndex++;
        break;
      case EDIT_ADD:
        if (splice === void 0) {
          splice = newSplice(index, [], 0);
        }
        splice.addedCount++;
        index++;
        break;
      case EDIT_DELETE:
        if (splice === void 0) {
          splice = newSplice(index, [], 0);
        }
        splice.removed.push(old[oldIndex]);
        oldIndex++;
        break;
    }
  }
  if (splice !== void 0) {
    splices.push(splice);
  }
  return splices;
}
const $push = Array.prototype.push;
function mergeSplice(splices, index, removed, addedCount) {
  const splice = newSplice(index, removed, addedCount);
  let inserted = false;
  let insertionOffset = 0;
  for (let i = 0; i < splices.length; i++) {
    const current = splices[i];
    current.index += insertionOffset;
    if (inserted) {
      continue;
    }
    const intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);
    if (intersectCount >= 0) {
      splices.splice(i, 1);
      i--;
      insertionOffset -= current.addedCount - current.removed.length;
      splice.addedCount += current.addedCount - intersectCount;
      const deleteCount = splice.removed.length + current.removed.length - intersectCount;
      if (!splice.addedCount && !deleteCount) {
        inserted = true;
      } else {
        let currentRemoved = current.removed;
        if (splice.index < current.index) {
          const prepend = splice.removed.slice(0, current.index - splice.index);
          $push.apply(prepend, currentRemoved);
          currentRemoved = prepend;
        }
        if (splice.index + splice.removed.length > current.index + current.addedCount) {
          const append = splice.removed.slice(current.index + current.addedCount - splice.index);
          $push.apply(currentRemoved, append);
        }
        splice.removed = currentRemoved;
        if (current.index < splice.index) {
          splice.index = current.index;
        }
      }
    } else if (splice.index < current.index) {
      inserted = true;
      splices.splice(i, 0, splice);
      i++;
      const offset = splice.addedCount - splice.removed.length;
      current.index += offset;
      insertionOffset += offset;
    }
  }
  if (!inserted) {
    splices.push(splice);
  }
}
function createInitialSplices(changeRecords) {
  const splices = [];
  for (let i = 0, ii2 = changeRecords.length; i < ii2; i++) {
    const record = changeRecords[i];
    mergeSplice(splices, record.index, record.removed, record.addedCount);
  }
  return splices;
}
function projectArraySplices(array, changeRecords) {
  let splices = [];
  const initialSplices = createInitialSplices(changeRecords);
  for (let i = 0, ii2 = initialSplices.length; i < ii2; ++i) {
    const splice = initialSplices[i];
    if (splice.addedCount === 1 && splice.removed.length === 1) {
      if (splice.removed[0] !== array[splice.index]) {
        splices.push(splice);
      }
      continue;
    }
    splices = splices.concat(calcSplices(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length));
  }
  return splices;
}
let arrayObservationEnabled = false;
function adjustIndex(changeRecord, array) {
  let index = changeRecord.index;
  const arrayLength = array.length;
  if (index > arrayLength) {
    index = arrayLength - changeRecord.addedCount;
  } else if (index < 0) {
    index = arrayLength + changeRecord.removed.length + index - changeRecord.addedCount;
  }
  if (index < 0) {
    index = 0;
  }
  changeRecord.index = index;
  return changeRecord;
}
class ArrayObserver extends SubscriberSet {
  constructor(source) {
    super(source);
    this.oldCollection = void 0;
    this.splices = void 0;
    this.needsQueue = true;
    this.call = this.flush;
    Reflect.defineProperty(source, "$fastController", {
      value: this,
      enumerable: false
    });
  }
  subscribe(subscriber) {
    this.flush();
    super.subscribe(subscriber);
  }
  addSplice(splice) {
    if (this.splices === void 0) {
      this.splices = [splice];
    } else {
      this.splices.push(splice);
    }
    if (this.needsQueue) {
      this.needsQueue = false;
      DOM.queueUpdate(this);
    }
  }
  reset(oldCollection) {
    this.oldCollection = oldCollection;
    if (this.needsQueue) {
      this.needsQueue = false;
      DOM.queueUpdate(this);
    }
  }
  flush() {
    const splices = this.splices;
    const oldCollection = this.oldCollection;
    if (splices === void 0 && oldCollection === void 0) {
      return;
    }
    this.needsQueue = true;
    this.splices = void 0;
    this.oldCollection = void 0;
    const finalSplices = oldCollection === void 0 ? projectArraySplices(this.source, splices) : calcSplices(this.source, 0, this.source.length, oldCollection, 0, oldCollection.length);
    this.notify(finalSplices);
  }
}
function enableArrayObservation() {
  if (arrayObservationEnabled) {
    return;
  }
  arrayObservationEnabled = true;
  Observable.setArrayObserverFactory((collection) => {
    return new ArrayObserver(collection);
  });
  const proto = Array.prototype;
  if (proto.$fastPatch) {
    return;
  }
  Reflect.defineProperty(proto, "$fastPatch", {
    value: 1,
    enumerable: false
  });
  const pop = proto.pop;
  const push = proto.push;
  const reverse = proto.reverse;
  const shift = proto.shift;
  const sort = proto.sort;
  const splice = proto.splice;
  const unshift = proto.unshift;
  proto.pop = function() {
    const notEmpty = this.length > 0;
    const methodCallResult = pop.apply(this, arguments);
    const o = this.$fastController;
    if (o !== void 0 && notEmpty) {
      o.addSplice(newSplice(this.length, [methodCallResult], 0));
    }
    return methodCallResult;
  };
  proto.push = function() {
    const methodCallResult = push.apply(this, arguments);
    const o = this.$fastController;
    if (o !== void 0) {
      o.addSplice(adjustIndex(newSplice(this.length - arguments.length, [], arguments.length), this));
    }
    return methodCallResult;
  };
  proto.reverse = function() {
    let oldArray;
    const o = this.$fastController;
    if (o !== void 0) {
      o.flush();
      oldArray = this.slice();
    }
    const methodCallResult = reverse.apply(this, arguments);
    if (o !== void 0) {
      o.reset(oldArray);
    }
    return methodCallResult;
  };
  proto.shift = function() {
    const notEmpty = this.length > 0;
    const methodCallResult = shift.apply(this, arguments);
    const o = this.$fastController;
    if (o !== void 0 && notEmpty) {
      o.addSplice(newSplice(0, [methodCallResult], 0));
    }
    return methodCallResult;
  };
  proto.sort = function() {
    let oldArray;
    const o = this.$fastController;
    if (o !== void 0) {
      o.flush();
      oldArray = this.slice();
    }
    const methodCallResult = sort.apply(this, arguments);
    if (o !== void 0) {
      o.reset(oldArray);
    }
    return methodCallResult;
  };
  proto.splice = function() {
    const methodCallResult = splice.apply(this, arguments);
    const o = this.$fastController;
    if (o !== void 0) {
      o.addSplice(adjustIndex(newSplice(+arguments[0], methodCallResult, arguments.length > 2 ? arguments.length - 2 : 0), this));
    }
    return methodCallResult;
  };
  proto.unshift = function() {
    const methodCallResult = unshift.apply(this, arguments);
    const o = this.$fastController;
    if (o !== void 0) {
      o.addSplice(adjustIndex(newSplice(0, [], arguments.length), this));
    }
    return methodCallResult;
  };
}
class RefBehavior {
  /**
   * Creates an instance of RefBehavior.
   * @param target - The element to reference.
   * @param propertyName - The name of the property to assign the reference to.
   */
  constructor(target, propertyName) {
    this.target = target;
    this.propertyName = propertyName;
  }
  /**
   * Bind this behavior to the source.
   * @param source - The source to bind to.
   * @param context - The execution context that the binding is operating within.
   */
  bind(source) {
    source[this.propertyName] = this.target;
  }
  /**
   * Unbinds this behavior from the source.
   * @param source - The source to unbind from.
   */
  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  unbind() {
  }
}
function ref(propertyName) {
  return new AttachedBehaviorHTMLDirective("fast-ref", RefBehavior, propertyName);
}
const isFunction = (object) => typeof object === "function";
const noTemplate = () => null;
function normalizeBinding(value) {
  return value === void 0 ? noTemplate : isFunction(value) ? value : () => value;
}
function when(binding, templateOrTemplateBinding, elseTemplateOrTemplateBinding) {
  const dataBinding = isFunction(binding) ? binding : () => binding;
  const templateBinding = normalizeBinding(templateOrTemplateBinding);
  const elseBinding = normalizeBinding(elseTemplateOrTemplateBinding);
  return (source, context) => dataBinding(source, context) ? templateBinding(source, context) : elseBinding(source, context);
}
function bindWithoutPositioning(view, items, index, context) {
  view.bind(items[index], context);
}
function bindWithPositioning(view, items, index, context) {
  const childContext = Object.create(context);
  childContext.index = index;
  childContext.length = items.length;
  view.bind(items[index], childContext);
}
class RepeatBehavior {
  /**
   * Creates an instance of RepeatBehavior.
   * @param location - The location in the DOM to render the repeat.
   * @param itemsBinding - The array to render.
   * @param isItemsBindingVolatile - Indicates whether the items binding has volatile dependencies.
   * @param templateBinding - The template to render for each item.
   * @param isTemplateBindingVolatile - Indicates whether the template binding has volatile dependencies.
   * @param options - Options used to turn on special repeat features.
   */
  constructor(location, itemsBinding, isItemsBindingVolatile, templateBinding, isTemplateBindingVolatile, options) {
    this.location = location;
    this.itemsBinding = itemsBinding;
    this.templateBinding = templateBinding;
    this.options = options;
    this.source = null;
    this.views = [];
    this.items = null;
    this.itemsObserver = null;
    this.originalContext = void 0;
    this.childContext = void 0;
    this.bindView = bindWithoutPositioning;
    this.itemsBindingObserver = Observable.binding(itemsBinding, this, isItemsBindingVolatile);
    this.templateBindingObserver = Observable.binding(templateBinding, this, isTemplateBindingVolatile);
    if (options.positioning) {
      this.bindView = bindWithPositioning;
    }
  }
  /**
   * Bind this behavior to the source.
   * @param source - The source to bind to.
   * @param context - The execution context that the binding is operating within.
   */
  bind(source, context) {
    this.source = source;
    this.originalContext = context;
    this.childContext = Object.create(context);
    this.childContext.parent = source;
    this.childContext.parentContext = this.originalContext;
    this.items = this.itemsBindingObserver.observe(source, this.originalContext);
    this.template = this.templateBindingObserver.observe(source, this.originalContext);
    this.observeItems(true);
    this.refreshAllViews();
  }
  /**
   * Unbinds this behavior from the source.
   * @param source - The source to unbind from.
   */
  unbind() {
    this.source = null;
    this.items = null;
    if (this.itemsObserver !== null) {
      this.itemsObserver.unsubscribe(this);
    }
    this.unbindAllViews();
    this.itemsBindingObserver.disconnect();
    this.templateBindingObserver.disconnect();
  }
  /** @internal */
  handleChange(source, args) {
    if (source === this.itemsBinding) {
      this.items = this.itemsBindingObserver.observe(this.source, this.originalContext);
      this.observeItems();
      this.refreshAllViews();
    } else if (source === this.templateBinding) {
      this.template = this.templateBindingObserver.observe(this.source, this.originalContext);
      this.refreshAllViews(true);
    } else {
      this.updateViews(args);
    }
  }
  observeItems(force = false) {
    if (!this.items) {
      this.items = emptyArray;
      return;
    }
    const oldObserver = this.itemsObserver;
    const newObserver = this.itemsObserver = Observable.getNotifier(this.items);
    const hasNewObserver = oldObserver !== newObserver;
    if (hasNewObserver && oldObserver !== null) {
      oldObserver.unsubscribe(this);
    }
    if (hasNewObserver || force) {
      newObserver.subscribe(this);
    }
  }
  updateViews(splices) {
    const childContext = this.childContext;
    const views = this.views;
    const bindView = this.bindView;
    const items = this.items;
    const template = this.template;
    const recycle = this.options.recycle;
    const leftoverViews = [];
    let leftoverIndex = 0;
    let availableViews = 0;
    for (let i = 0, ii2 = splices.length; i < ii2; ++i) {
      const splice = splices[i];
      const removed = splice.removed;
      let removeIndex = 0;
      let addIndex = splice.index;
      const end = addIndex + splice.addedCount;
      const removedViews = views.splice(splice.index, removed.length);
      const totalAvailableViews = availableViews = leftoverViews.length + removedViews.length;
      for (; addIndex < end; ++addIndex) {
        const neighbor = views[addIndex];
        const location = neighbor ? neighbor.firstChild : this.location;
        let view;
        if (recycle && availableViews > 0) {
          if (removeIndex <= totalAvailableViews && removedViews.length > 0) {
            view = removedViews[removeIndex];
            removeIndex++;
          } else {
            view = leftoverViews[leftoverIndex];
            leftoverIndex++;
          }
          availableViews--;
        } else {
          view = template.create();
        }
        views.splice(addIndex, 0, view);
        bindView(view, items, addIndex, childContext);
        view.insertBefore(location);
      }
      if (removedViews[removeIndex]) {
        leftoverViews.push(...removedViews.slice(removeIndex));
      }
    }
    for (let i = leftoverIndex, ii2 = leftoverViews.length; i < ii2; ++i) {
      leftoverViews[i].dispose();
    }
    if (this.options.positioning) {
      for (let i = 0, ii2 = views.length; i < ii2; ++i) {
        const currentContext = views[i].context;
        currentContext.length = ii2;
        currentContext.index = i;
      }
    }
  }
  refreshAllViews(templateChanged = false) {
    const items = this.items;
    const childContext = this.childContext;
    const template = this.template;
    const location = this.location;
    const bindView = this.bindView;
    let itemsLength = items.length;
    let views = this.views;
    let viewsLength = views.length;
    if (itemsLength === 0 || templateChanged || !this.options.recycle) {
      HTMLView.disposeContiguousBatch(views);
      viewsLength = 0;
    }
    if (viewsLength === 0) {
      this.views = views = new Array(itemsLength);
      for (let i = 0; i < itemsLength; ++i) {
        const view = template.create();
        bindView(view, items, i, childContext);
        views[i] = view;
        view.insertBefore(location);
      }
    } else {
      let i = 0;
      for (; i < itemsLength; ++i) {
        if (i < viewsLength) {
          const view = views[i];
          bindView(view, items, i, childContext);
        } else {
          const view = template.create();
          bindView(view, items, i, childContext);
          views.push(view);
          view.insertBefore(location);
        }
      }
      const removed = views.splice(i, viewsLength - i);
      for (i = 0, itemsLength = removed.length; i < itemsLength; ++i) {
        removed[i].dispose();
      }
    }
  }
  unbindAllViews() {
    const views = this.views;
    for (let i = 0, ii2 = views.length; i < ii2; ++i) {
      views[i].unbind();
    }
  }
}
class RepeatDirective extends HTMLDirective {
  /**
   * Creates an instance of RepeatDirective.
   * @param itemsBinding - The binding that provides the array to render.
   * @param templateBinding - The template binding used to obtain a template to render for each item in the array.
   * @param options - Options used to turn on special repeat features.
   */
  constructor(itemsBinding, templateBinding, options) {
    super();
    this.itemsBinding = itemsBinding;
    this.templateBinding = templateBinding;
    this.options = options;
    this.createPlaceholder = DOM.createBlockPlaceholder;
    enableArrayObservation();
    this.isItemsBindingVolatile = Observable.isVolatileBinding(itemsBinding);
    this.isTemplateBindingVolatile = Observable.isVolatileBinding(templateBinding);
  }
  /**
   * Creates a behavior for the provided target node.
   * @param target - The node instance to create the behavior for.
   */
  createBehavior(target) {
    return new RepeatBehavior(target, this.itemsBinding, this.isItemsBindingVolatile, this.templateBinding, this.isTemplateBindingVolatile, this.options);
  }
}
function elements(selector) {
  if (selector) {
    return function(value, index, array) {
      return value.nodeType === 1 && value.matches(selector);
    };
  }
  return function(value, index, array) {
    return value.nodeType === 1;
  };
}
class NodeObservationBehavior {
  /**
   * Creates an instance of NodeObservationBehavior.
   * @param target - The target to assign the nodes property on.
   * @param options - The options to use in configuring node observation.
   */
  constructor(target, options) {
    this.target = target;
    this.options = options;
    this.source = null;
  }
  /**
   * Bind this behavior to the source.
   * @param source - The source to bind to.
   * @param context - The execution context that the binding is operating within.
   */
  bind(source) {
    const name = this.options.property;
    this.shouldUpdate = Observable.getAccessors(source).some((x2) => x2.name === name);
    this.source = source;
    this.updateTarget(this.computeNodes());
    if (this.shouldUpdate) {
      this.observe();
    }
  }
  /**
   * Unbinds this behavior from the source.
   * @param source - The source to unbind from.
   */
  unbind() {
    this.updateTarget(emptyArray);
    this.source = null;
    if (this.shouldUpdate) {
      this.disconnect();
    }
  }
  /** @internal */
  handleEvent() {
    this.updateTarget(this.computeNodes());
  }
  computeNodes() {
    let nodes = this.getNodes();
    if (this.options.filter !== void 0) {
      nodes = nodes.filter(this.options.filter);
    }
    return nodes;
  }
  updateTarget(value) {
    this.source[this.options.property] = value;
  }
}
class SlottedBehavior extends NodeObservationBehavior {
  /**
   * Creates an instance of SlottedBehavior.
   * @param target - The slot element target to observe.
   * @param options - The options to use when observing the slot.
   */
  constructor(target, options) {
    super(target, options);
  }
  /**
   * Begins observation of the nodes.
   */
  observe() {
    this.target.addEventListener("slotchange", this);
  }
  /**
   * Disconnects observation of the nodes.
   */
  disconnect() {
    this.target.removeEventListener("slotchange", this);
  }
  /**
   * Retrieves the nodes that should be assigned to the target.
   */
  getNodes() {
    return this.target.assignedNodes(this.options);
  }
}
function slotted(propertyOrOptions) {
  if (typeof propertyOrOptions === "string") {
    propertyOrOptions = { property: propertyOrOptions };
  }
  return new AttachedBehaviorHTMLDirective("fast-slotted", SlottedBehavior, propertyOrOptions);
}
class ChildrenBehavior extends NodeObservationBehavior {
  /**
   * Creates an instance of ChildrenBehavior.
   * @param target - The element target to observe children on.
   * @param options - The options to use when observing the element children.
   */
  constructor(target, options) {
    super(target, options);
    this.observer = null;
    options.childList = true;
  }
  /**
   * Begins observation of the nodes.
   */
  observe() {
    if (this.observer === null) {
      this.observer = new MutationObserver(this.handleEvent.bind(this));
    }
    this.observer.observe(this.target, this.options);
  }
  /**
   * Disconnects observation of the nodes.
   */
  disconnect() {
    this.observer.disconnect();
  }
  /**
   * Retrieves the nodes that should be assigned to the target.
   */
  getNodes() {
    if ("subtree" in this.options) {
      return Array.from(this.target.querySelectorAll(this.options.selector));
    }
    return Array.from(this.target.childNodes);
  }
}
function children(propertyOrOptions) {
  if (typeof propertyOrOptions === "string") {
    propertyOrOptions = {
      property: propertyOrOptions
    };
  }
  return new AttachedBehaviorHTMLDirective("fast-children", ChildrenBehavior, propertyOrOptions);
}
class StartEnd {
  handleStartContentChange() {
    this.startContainer.classList.toggle("start", this.start.assignedNodes().length > 0);
  }
  handleEndContentChange() {
    this.endContainer.classList.toggle("end", this.end.assignedNodes().length > 0);
  }
}
const endSlotTemplate = (context, definition) => html`
    <span
        part="end"
        ${ref("endContainer")}
        class=${(x2) => definition.end ? "end" : void 0}
    >
        <slot name="end" ${ref("end")} @slotchange="${(x2) => x2.handleEndContentChange()}">
            ${definition.end || ""}
        </slot>
    </span>
`;
const startSlotTemplate = (context, definition) => html`
    <span
        part="start"
        ${ref("startContainer")}
        class="${(x2) => definition.start ? "start" : void 0}"
    >
        <slot
            name="start"
            ${ref("start")}
            @slotchange="${(x2) => x2.handleStartContentChange()}"
        >
            ${definition.start || ""}
        </slot>
    </span>
`;
html`
    <span part="end" ${ref("endContainer")}>
        <slot
            name="end"
            ${ref("end")}
            @slotchange="${(x2) => x2.handleEndContentChange()}"
        ></slot>
    </span>
`;
html`
    <span part="start" ${ref("startContainer")}>
        <slot
            name="start"
            ${ref("start")}
            @slotchange="${(x2) => x2.handleStartContentChange()}"
        ></slot>
    </span>
`;
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
function __decorate$1(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
}
const metadataByTarget = /* @__PURE__ */ new Map();
if (!("metadata" in Reflect)) {
  Reflect.metadata = function(key, value) {
    return function(target) {
      Reflect.defineMetadata(key, value, target);
    };
  };
  Reflect.defineMetadata = function(key, value, target) {
    let metadata = metadataByTarget.get(target);
    if (metadata === void 0) {
      metadataByTarget.set(target, metadata = /* @__PURE__ */ new Map());
    }
    metadata.set(key, value);
  };
  Reflect.getOwnMetadata = function(key, target) {
    const metadata = metadataByTarget.get(target);
    if (metadata !== void 0) {
      return metadata.get(key);
    }
    return void 0;
  };
}
class ResolverBuilder {
  /**
   *
   * @param container - The container to create resolvers for.
   * @param key - The key to register resolvers under.
   */
  constructor(container2, key) {
    this.container = container2;
    this.key = key;
  }
  /**
   * Creates a resolver for an existing object instance.
   * @param value - The instance to resolve.
   * @returns The resolver.
   */
  instance(value) {
    return this.registerResolver(0, value);
  }
  /**
   * Creates a resolver that enforces a singleton lifetime.
   * @param value - The type to create and cache the singleton for.
   * @returns The resolver.
   */
  singleton(value) {
    return this.registerResolver(1, value);
  }
  /**
   * Creates a resolver that creates a new instance for every dependency request.
   * @param value - The type to create instances of.
   * @returns - The resolver.
   */
  transient(value) {
    return this.registerResolver(2, value);
  }
  /**
   * Creates a resolver that invokes a callback function for every dependency resolution
   * request, allowing custom logic to return the dependency.
   * @param value - The callback to call during resolution.
   * @returns The resolver.
   */
  callback(value) {
    return this.registerResolver(3, value);
  }
  /**
   * Creates a resolver that invokes a callback function the first time that a dependency
   * resolution is requested. The returned value is then cached and provided for all
   * subsequent requests.
   * @param value - The callback to call during the first resolution.
   * @returns The resolver.
   */
  cachedCallback(value) {
    return this.registerResolver(3, cacheCallbackResult(value));
  }
  /**
   * Aliases the current key to a different key.
   * @param destinationKey - The key to point the alias to.
   * @returns The resolver.
   */
  aliasTo(destinationKey) {
    return this.registerResolver(5, destinationKey);
  }
  registerResolver(strategy, state) {
    const { container: container2, key } = this;
    this.container = this.key = void 0;
    return container2.registerResolver(key, new ResolverImpl(key, strategy, state));
  }
}
function cloneArrayWithPossibleProps(source) {
  const clone = source.slice();
  const keys = Object.keys(source);
  const len = keys.length;
  let key;
  for (let i = 0; i < len; ++i) {
    key = keys[i];
    if (!isArrayIndex(key)) {
      clone[key] = source[key];
    }
  }
  return clone;
}
const DefaultResolver = Object.freeze({
  /**
   * Disables auto-registration and throws for all un-registered dependencies.
   * @param key - The key to create the resolver for.
   */
  none(key) {
    throw Error(`${key.toString()} not registered, did you forget to add @singleton()?`);
  },
  /**
   * Provides default singleton resolution behavior during auto-registration.
   * @param key - The key to create the resolver for.
   * @returns The resolver.
   */
  singleton(key) {
    return new ResolverImpl(key, 1, key);
  },
  /**
   * Provides default transient resolution behavior during auto-registration.
   * @param key - The key to create the resolver for.
   * @returns The resolver.
   */
  transient(key) {
    return new ResolverImpl(key, 2, key);
  }
});
const ContainerConfiguration = Object.freeze({
  /**
   * The default configuration used when creating a DOM-disconnected container.
   * @remarks
   * The default creates a root container, with no parent container. It does not handle
   * owner requests and it uses singleton resolution behavior for auto-registration.
   */
  default: Object.freeze({
    parentLocator: () => null,
    responsibleForOwnerRequests: false,
    defaultResolver: DefaultResolver.singleton
  })
});
const dependencyLookup = /* @__PURE__ */ new Map();
function getParamTypes(key) {
  return (Type) => {
    return Reflect.getOwnMetadata(key, Type);
  };
}
let rootDOMContainer = null;
const DI = Object.freeze({
  /**
   * Creates a new dependency injection container.
   * @param config - The configuration for the container.
   * @returns A newly created dependency injection container.
   */
  createContainer(config) {
    return new ContainerImpl(null, Object.assign({}, ContainerConfiguration.default, config));
  },
  /**
   * Finds the dependency injection container responsible for providing dependencies
   * to the specified node.
   * @param node - The node to find the responsible container for.
   * @returns The container responsible for providing dependencies to the node.
   * @remarks
   * This will be the same as the parent container if the specified node
   * does not itself host a container configured with responsibleForOwnerRequests.
   */
  findResponsibleContainer(node) {
    const owned = node.$$container$$;
    if (owned && owned.responsibleForOwnerRequests) {
      return owned;
    }
    return DI.findParentContainer(node);
  },
  /**
   * Find the dependency injection container up the DOM tree from this node.
   * @param node - The node to find the parent container for.
   * @returns The parent container of this node.
   * @remarks
   * This will be the same as the responsible container if the specified node
   * does not itself host a container configured with responsibleForOwnerRequests.
   */
  findParentContainer(node) {
    const event = new CustomEvent(DILocateParentEventType, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { container: void 0 }
    });
    node.dispatchEvent(event);
    return event.detail.container || DI.getOrCreateDOMContainer();
  },
  /**
   * Returns a dependency injection container if one is explicitly owned by the specified
   * node. If one is not owned, then a new container is created and assigned to the node.
   * @param node - The node to find or create the container for.
   * @param config - The configuration for the container if one needs to be created.
   * @returns The located or created container.
   * @remarks
   * This API does not search for a responsible or parent container. It looks only for a container
   * directly defined on the specified node and creates one at that location if one does not
   * already exist.
   */
  getOrCreateDOMContainer(node, config) {
    if (!node) {
      return rootDOMContainer || (rootDOMContainer = new ContainerImpl(null, Object.assign({}, ContainerConfiguration.default, config, {
        parentLocator: () => null
      })));
    }
    return node.$$container$$ || new ContainerImpl(node, Object.assign({}, ContainerConfiguration.default, config, {
      parentLocator: DI.findParentContainer
    }));
  },
  /**
   * Gets the "design:paramtypes" metadata for the specified type.
   * @param Type - The type to get the metadata for.
   * @returns The metadata array or undefined if no metadata is found.
   */
  getDesignParamtypes: getParamTypes("design:paramtypes"),
  /**
   * Gets the "di:paramtypes" metadata for the specified type.
   * @param Type - The type to get the metadata for.
   * @returns The metadata array or undefined if no metadata is found.
   */
  getAnnotationParamtypes: getParamTypes("di:paramtypes"),
  /**
   *
   * @param Type - Gets the "di:paramtypes" metadata for the specified type. If none is found,
   * an empty metadata array is created and added.
   * @returns The metadata array.
   */
  getOrCreateAnnotationParamTypes(Type) {
    let annotationParamtypes = this.getAnnotationParamtypes(Type);
    if (annotationParamtypes === void 0) {
      Reflect.defineMetadata("di:paramtypes", annotationParamtypes = [], Type);
    }
    return annotationParamtypes;
  },
  /**
   * Gets the dependency keys representing what is needed to instantiate the specified type.
   * @param Type - The type to get the dependencies for.
   * @returns An array of dependency keys.
   */
  getDependencies(Type) {
    let dependencies = dependencyLookup.get(Type);
    if (dependencies === void 0) {
      const inject = Type.inject;
      if (inject === void 0) {
        const designParamtypes = DI.getDesignParamtypes(Type);
        const annotationParamtypes = DI.getAnnotationParamtypes(Type);
        if (designParamtypes === void 0) {
          if (annotationParamtypes === void 0) {
            const Proto = Object.getPrototypeOf(Type);
            if (typeof Proto === "function" && Proto !== Function.prototype) {
              dependencies = cloneArrayWithPossibleProps(DI.getDependencies(Proto));
            } else {
              dependencies = [];
            }
          } else {
            dependencies = cloneArrayWithPossibleProps(annotationParamtypes);
          }
        } else if (annotationParamtypes === void 0) {
          dependencies = cloneArrayWithPossibleProps(designParamtypes);
        } else {
          dependencies = cloneArrayWithPossibleProps(designParamtypes);
          let len = annotationParamtypes.length;
          let auAnnotationParamtype;
          for (let i = 0; i < len; ++i) {
            auAnnotationParamtype = annotationParamtypes[i];
            if (auAnnotationParamtype !== void 0) {
              dependencies[i] = auAnnotationParamtype;
            }
          }
          const keys = Object.keys(annotationParamtypes);
          len = keys.length;
          let key;
          for (let i = 0; i < len; ++i) {
            key = keys[i];
            if (!isArrayIndex(key)) {
              dependencies[key] = annotationParamtypes[key];
            }
          }
        }
      } else {
        dependencies = cloneArrayWithPossibleProps(inject);
      }
      dependencyLookup.set(Type, dependencies);
    }
    return dependencies;
  },
  /**
   * Defines a property on a web component class. The value of this property will
   * be resolved from the dependency injection container responsible for the element
   * instance, based on where it is connected in the DOM.
   * @param target - The target to define the property on.
   * @param propertyName - The name of the property to define.
   * @param key - The dependency injection key.
   * @param respectConnection - Indicates whether or not to update the property value if the
   * hosting component is disconnected and then re-connected at a different location in the DOM.
   * @remarks
   * The respectConnection option is only applicable to elements that descend from FASTElement.
   */
  defineProperty(target, propertyName, key, respectConnection = false) {
    const diPropertyKey = `$di_${propertyName}`;
    Reflect.defineProperty(target, propertyName, {
      get: function() {
        let value = this[diPropertyKey];
        if (value === void 0) {
          const container2 = this instanceof HTMLElement ? DI.findResponsibleContainer(this) : DI.getOrCreateDOMContainer();
          value = container2.get(key);
          this[diPropertyKey] = value;
          if (respectConnection && this instanceof FASTElement) {
            const notifier = this.$fastController;
            const handleChange = () => {
              const newContainer = DI.findResponsibleContainer(this);
              const newValue = newContainer.get(key);
              const oldValue = this[diPropertyKey];
              if (newValue !== oldValue) {
                this[diPropertyKey] = value;
                notifier.notify(propertyName);
              }
            };
            notifier.subscribe({ handleChange }, "isConnected");
          }
        }
        return value;
      }
    });
  },
  /**
   * Creates a dependency injection key.
   * @param nameConfigOrCallback - A friendly name for the key or a lambda that configures a
   * default resolution for the dependency.
   * @param configuror - If a friendly name was provided for the first parameter, then an optional
   * lambda that configures a default resolution for the dependency can be provided second.
   * @returns The created key.
   * @remarks
   * The created key can be used as a property decorator or constructor parameter decorator,
   * in addition to its standard use in an inject array or through direct container APIs.
   */
  createInterface(nameConfigOrCallback, configuror) {
    const configure = typeof nameConfigOrCallback === "function" ? nameConfigOrCallback : configuror;
    const friendlyName = typeof nameConfigOrCallback === "string" ? nameConfigOrCallback : nameConfigOrCallback && "friendlyName" in nameConfigOrCallback ? nameConfigOrCallback.friendlyName || defaultFriendlyName : defaultFriendlyName;
    const respectConnection = typeof nameConfigOrCallback === "string" ? false : nameConfigOrCallback && "respectConnection" in nameConfigOrCallback ? nameConfigOrCallback.respectConnection || false : false;
    const Interface = function(target, property, index) {
      if (target == null || new.target !== void 0) {
        throw new Error(`No registration for interface: '${Interface.friendlyName}'`);
      }
      if (property) {
        DI.defineProperty(target, property, Interface, respectConnection);
      } else {
        const annotationParamtypes = DI.getOrCreateAnnotationParamTypes(target);
        annotationParamtypes[index] = Interface;
      }
    };
    Interface.$isInterface = true;
    Interface.friendlyName = friendlyName == null ? "(anonymous)" : friendlyName;
    if (configure != null) {
      Interface.register = function(container2, key) {
        return configure(new ResolverBuilder(container2, key !== null && key !== void 0 ? key : Interface));
      };
    }
    Interface.toString = function toString() {
      return `InterfaceSymbol<${Interface.friendlyName}>`;
    };
    return Interface;
  },
  /**
   * A decorator that specifies what to inject into its target.
   * @param dependencies - The dependencies to inject.
   * @returns The decorator to be applied to the target class.
   * @remarks
   * The decorator can be used to decorate a class, listing all of the classes dependencies.
   * Or it can be used to decorate a constructor paramter, indicating what to inject for that
   * parameter.
   * Or it can be used for a web component property, indicating what that property should resolve to.
   */
  inject(...dependencies) {
    return function(target, key, descriptor) {
      if (typeof descriptor === "number") {
        const annotationParamtypes = DI.getOrCreateAnnotationParamTypes(target);
        const dep = dependencies[0];
        if (dep !== void 0) {
          annotationParamtypes[descriptor] = dep;
        }
      } else if (key) {
        DI.defineProperty(target, key, dependencies[0]);
      } else {
        const annotationParamtypes = descriptor ? DI.getOrCreateAnnotationParamTypes(descriptor.value) : DI.getOrCreateAnnotationParamTypes(target);
        let dep;
        for (let i = 0; i < dependencies.length; ++i) {
          dep = dependencies[i];
          if (dep !== void 0) {
            annotationParamtypes[i] = dep;
          }
        }
      }
    };
  },
  /**
   * Registers the `target` class as a transient dependency; each time the dependency is resolved
   * a new instance will be created.
   *
   * @param target - The class / constructor function to register as transient.
   * @returns The same class, with a static `register` method that takes a container and returns the appropriate resolver.
   *
   * @example
   * On an existing class
   * ```ts
   * class Foo { }
   * DI.transient(Foo);
   * ```
   *
   * @example
   * Inline declaration
   *
   * ```ts
   * const Foo = DI.transient(class { });
   * // Foo is now strongly typed with register
   * Foo.register(container);
   * ```
   *
   * @public
   */
  transient(target) {
    target.register = function register(container2) {
      const registration = Registration.transient(target, target);
      return registration.register(container2);
    };
    target.registerInRequestor = false;
    return target;
  },
  /**
   * Registers the `target` class as a singleton dependency; the class will only be created once. Each
   * consecutive time the dependency is resolved, the same instance will be returned.
   *
   * @param target - The class / constructor function to register as a singleton.
   * @returns The same class, with a static `register` method that takes a container and returns the appropriate resolver.
   * @example
   * On an existing class
   * ```ts
   * class Foo { }
   * DI.singleton(Foo);
   * ```
   *
   * @example
   * Inline declaration
   * ```ts
   * const Foo = DI.singleton(class { });
   * // Foo is now strongly typed with register
   * Foo.register(container);
   * ```
   *
   * @public
   */
  singleton(target, options = defaultSingletonOptions) {
    target.register = function register(container2) {
      const registration = Registration.singleton(target, target);
      return registration.register(container2);
    };
    target.registerInRequestor = options.scoped;
    return target;
  }
});
const Container = DI.createInterface("Container");
DI.inject;
const defaultSingletonOptions = { scoped: false };
class ResolverImpl {
  constructor(key, strategy, state) {
    this.key = key;
    this.strategy = strategy;
    this.state = state;
    this.resolving = false;
  }
  get $isResolver() {
    return true;
  }
  register(container2) {
    return container2.registerResolver(this.key, this);
  }
  resolve(handler, requestor) {
    switch (this.strategy) {
      case 0:
        return this.state;
      case 1: {
        if (this.resolving) {
          throw new Error(`Cyclic dependency found: ${this.state.name}`);
        }
        this.resolving = true;
        this.state = handler.getFactory(this.state).construct(requestor);
        this.strategy = 0;
        this.resolving = false;
        return this.state;
      }
      case 2: {
        const factory = handler.getFactory(this.state);
        if (factory === null) {
          throw new Error(`Resolver for ${String(this.key)} returned a null factory`);
        }
        return factory.construct(requestor);
      }
      case 3:
        return this.state(handler, requestor, this);
      case 4:
        return this.state[0].resolve(handler, requestor);
      case 5:
        return requestor.get(this.state);
      default:
        throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`);
    }
  }
  getFactory(container2) {
    var _a, _b, _c;
    switch (this.strategy) {
      case 1:
      case 2:
        return container2.getFactory(this.state);
      case 5:
        return (_c = (_b = (_a = container2.getResolver(this.state)) === null || _a === void 0 ? void 0 : _a.getFactory) === null || _b === void 0 ? void 0 : _b.call(_a, container2)) !== null && _c !== void 0 ? _c : null;
      default:
        return null;
    }
  }
}
function containerGetKey(d) {
  return this.get(d);
}
function transformInstance(inst, transform) {
  return transform(inst);
}
class FactoryImpl {
  constructor(Type, dependencies) {
    this.Type = Type;
    this.dependencies = dependencies;
    this.transformers = null;
  }
  construct(container2, dynamicDependencies) {
    let instance;
    if (dynamicDependencies === void 0) {
      instance = new this.Type(...this.dependencies.map(containerGetKey, container2));
    } else {
      instance = new this.Type(...this.dependencies.map(containerGetKey, container2), ...dynamicDependencies);
    }
    if (this.transformers == null) {
      return instance;
    }
    return this.transformers.reduce(transformInstance, instance);
  }
  registerTransformer(transformer) {
    (this.transformers || (this.transformers = [])).push(transformer);
  }
}
const containerResolver = {
  $isResolver: true,
  resolve(handler, requestor) {
    return requestor;
  }
};
function isRegistry(obj) {
  return typeof obj.register === "function";
}
function isSelfRegistry(obj) {
  return isRegistry(obj) && typeof obj.registerInRequestor === "boolean";
}
function isRegisterInRequester(obj) {
  return isSelfRegistry(obj) && obj.registerInRequestor;
}
function isClass(obj) {
  return obj.prototype !== void 0;
}
const InstrinsicTypeNames = /* @__PURE__ */ new Set([
  "Array",
  "ArrayBuffer",
  "Boolean",
  "DataView",
  "Date",
  "Error",
  "EvalError",
  "Float32Array",
  "Float64Array",
  "Function",
  "Int8Array",
  "Int16Array",
  "Int32Array",
  "Map",
  "Number",
  "Object",
  "Promise",
  "RangeError",
  "ReferenceError",
  "RegExp",
  "Set",
  "SharedArrayBuffer",
  "String",
  "SyntaxError",
  "TypeError",
  "Uint8Array",
  "Uint8ClampedArray",
  "Uint16Array",
  "Uint32Array",
  "URIError",
  "WeakMap",
  "WeakSet"
]);
const DILocateParentEventType = "__DI_LOCATE_PARENT__";
const factories = /* @__PURE__ */ new Map();
class ContainerImpl {
  constructor(owner, config) {
    this.owner = owner;
    this.config = config;
    this._parent = void 0;
    this.registerDepth = 0;
    this.context = null;
    if (owner !== null) {
      owner.$$container$$ = this;
    }
    this.resolvers = /* @__PURE__ */ new Map();
    this.resolvers.set(Container, containerResolver);
    if (owner instanceof Node) {
      owner.addEventListener(DILocateParentEventType, (e) => {
        if (e.composedPath()[0] !== this.owner) {
          e.detail.container = this;
          e.stopImmediatePropagation();
        }
      });
    }
  }
  get parent() {
    if (this._parent === void 0) {
      this._parent = this.config.parentLocator(this.owner);
    }
    return this._parent;
  }
  get depth() {
    return this.parent === null ? 0 : this.parent.depth + 1;
  }
  get responsibleForOwnerRequests() {
    return this.config.responsibleForOwnerRequests;
  }
  registerWithContext(context, ...params) {
    this.context = context;
    this.register(...params);
    this.context = null;
    return this;
  }
  register(...params) {
    if (++this.registerDepth === 100) {
      throw new Error("Unable to autoregister dependency");
    }
    let current;
    let keys;
    let value;
    let j;
    let jj2;
    const context = this.context;
    for (let i = 0, ii2 = params.length; i < ii2; ++i) {
      current = params[i];
      if (!isObject(current)) {
        continue;
      }
      if (isRegistry(current)) {
        current.register(this, context);
      } else if (isClass(current)) {
        Registration.singleton(current, current).register(this);
      } else {
        keys = Object.keys(current);
        j = 0;
        jj2 = keys.length;
        for (; j < jj2; ++j) {
          value = current[keys[j]];
          if (!isObject(value)) {
            continue;
          }
          if (isRegistry(value)) {
            value.register(this, context);
          } else {
            this.register(value);
          }
        }
      }
    }
    --this.registerDepth;
    return this;
  }
  registerResolver(key, resolver) {
    validateKey(key);
    const resolvers = this.resolvers;
    const result = resolvers.get(key);
    if (result == null) {
      resolvers.set(key, resolver);
    } else if (result instanceof ResolverImpl && result.strategy === 4) {
      result.state.push(resolver);
    } else {
      resolvers.set(key, new ResolverImpl(key, 4, [result, resolver]));
    }
    return resolver;
  }
  registerTransformer(key, transformer) {
    const resolver = this.getResolver(key);
    if (resolver == null) {
      return false;
    }
    if (resolver.getFactory) {
      const factory = resolver.getFactory(this);
      if (factory == null) {
        return false;
      }
      factory.registerTransformer(transformer);
      return true;
    }
    return false;
  }
  getResolver(key, autoRegister = true) {
    validateKey(key);
    if (key.resolve !== void 0) {
      return key;
    }
    let current = this;
    let resolver;
    while (current != null) {
      resolver = current.resolvers.get(key);
      if (resolver == null) {
        if (current.parent == null) {
          const handler = isRegisterInRequester(key) ? this : current;
          return autoRegister ? this.jitRegister(key, handler) : null;
        }
        current = current.parent;
      } else {
        return resolver;
      }
    }
    return null;
  }
  has(key, searchAncestors = false) {
    return this.resolvers.has(key) ? true : searchAncestors && this.parent != null ? this.parent.has(key, true) : false;
  }
  get(key) {
    validateKey(key);
    if (key.$isResolver) {
      return key.resolve(this, this);
    }
    let current = this;
    let resolver;
    while (current != null) {
      resolver = current.resolvers.get(key);
      if (resolver == null) {
        if (current.parent == null) {
          const handler = isRegisterInRequester(key) ? this : current;
          resolver = this.jitRegister(key, handler);
          return resolver.resolve(current, this);
        }
        current = current.parent;
      } else {
        return resolver.resolve(current, this);
      }
    }
    throw new Error(`Unable to resolve key: ${String(key)}`);
  }
  getAll(key, searchAncestors = false) {
    validateKey(key);
    const requestor = this;
    let current = requestor;
    let resolver;
    if (searchAncestors) {
      let resolutions = emptyArray;
      while (current != null) {
        resolver = current.resolvers.get(key);
        if (resolver != null) {
          resolutions = resolutions.concat(
            /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
            buildAllResponse(resolver, current, requestor)
          );
        }
        current = current.parent;
      }
      return resolutions;
    } else {
      while (current != null) {
        resolver = current.resolvers.get(key);
        if (resolver == null) {
          current = current.parent;
          if (current == null) {
            return emptyArray;
          }
        } else {
          return buildAllResponse(resolver, current, requestor);
        }
      }
    }
    return emptyArray;
  }
  getFactory(Type) {
    let factory = factories.get(Type);
    if (factory === void 0) {
      if (isNativeFunction(Type)) {
        throw new Error(`${Type.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);
      }
      factories.set(Type, factory = new FactoryImpl(Type, DI.getDependencies(Type)));
    }
    return factory;
  }
  registerFactory(key, factory) {
    factories.set(key, factory);
  }
  createChild(config) {
    return new ContainerImpl(null, Object.assign({}, this.config, config, { parentLocator: () => this }));
  }
  jitRegister(keyAsValue, handler) {
    if (typeof keyAsValue !== "function") {
      throw new Error(`Attempted to jitRegister something that is not a constructor: '${keyAsValue}'. Did you forget to register this dependency?`);
    }
    if (InstrinsicTypeNames.has(keyAsValue.name)) {
      throw new Error(`Attempted to jitRegister an intrinsic type: ${keyAsValue.name}. Did you forget to add @inject(Key)`);
    }
    if (isRegistry(keyAsValue)) {
      const registrationResolver = keyAsValue.register(handler);
      if (!(registrationResolver instanceof Object) || registrationResolver.resolve == null) {
        const newResolver = handler.resolvers.get(keyAsValue);
        if (newResolver != void 0) {
          return newResolver;
        }
        throw new Error("A valid resolver was not returned from the static register method");
      }
      return registrationResolver;
    } else if (keyAsValue.$isInterface) {
      throw new Error(`Attempted to jitRegister an interface: ${keyAsValue.friendlyName}`);
    } else {
      const resolver = this.config.defaultResolver(keyAsValue, handler);
      handler.resolvers.set(keyAsValue, resolver);
      return resolver;
    }
  }
}
const cache = /* @__PURE__ */ new WeakMap();
function cacheCallbackResult(fun) {
  return function(handler, requestor, resolver) {
    if (cache.has(resolver)) {
      return cache.get(resolver);
    }
    const t2 = fun(handler, requestor, resolver);
    cache.set(resolver, t2);
    return t2;
  };
}
const Registration = Object.freeze({
  /**
   * Allows you to pass an instance.
   * Every time you request this {@link Key} you will get this instance back.
   *
   * @example
   * ```
   * Registration.instance(Foo, new Foo()));
   * ```
   *
   * @param key - The key to register the instance under.
   * @param value - The instance to return when the key is requested.
   */
  instance(key, value) {
    return new ResolverImpl(key, 0, value);
  },
  /**
   * Creates an instance from the class.
   * Every time you request this {@link Key} you will get the same one back.
   *
   * @example
   * ```
   * Registration.singleton(Foo, Foo);
   * ```
   *
   * @param key - The key to register the singleton under.
   * @param value - The class to instantiate as a singleton when first requested.
   */
  singleton(key, value) {
    return new ResolverImpl(key, 1, value);
  },
  /**
   * Creates an instance from a class.
   * Every time you request this {@link Key} you will get a new instance.
   *
   * @example
   * ```
   * Registration.instance(Foo, Foo);
   * ```
   *
   * @param key - The key to register the instance type under.
   * @param value - The class to instantiate each time the key is requested.
   */
  transient(key, value) {
    return new ResolverImpl(key, 2, value);
  },
  /**
   * Delegates to a callback function to provide the dependency.
   * Every time you request this {@link Key} the callback will be invoked to provide
   * the dependency.
   *
   * @example
   * ```
   * Registration.callback(Foo, () => new Foo());
   * Registration.callback(Bar, (c: Container) => new Bar(c.get(Foo)));
   * ```
   *
   * @param key - The key to register the callback for.
   * @param callback - The function that is expected to return the dependency.
   */
  callback(key, callback) {
    return new ResolverImpl(key, 3, callback);
  },
  /**
   * Delegates to a callback function to provide the dependency and then caches the
   * dependency for future requests.
   *
   * @example
   * ```
   * Registration.cachedCallback(Foo, () => new Foo());
   * Registration.cachedCallback(Bar, (c: Container) => new Bar(c.get(Foo)));
   * ```
   *
   * @param key - The key to register the callback for.
   * @param callback - The function that is expected to return the dependency.
   * @remarks
   * If you pass the same Registration to another container, the same cached value will be used.
   * Should all references to the resolver returned be removed, the cache will expire.
   */
  cachedCallback(key, callback) {
    return new ResolverImpl(key, 3, cacheCallbackResult(callback));
  },
  /**
   * Creates an alternate {@link Key} to retrieve an instance by.
   *
   * @example
   * ```
   * Register.singleton(Foo, Foo)
   * Register.aliasTo(Foo, MyFoos);
   *
   * container.getAll(MyFoos) // contains an instance of Foo
   * ```
   *
   * @param originalKey - The original key that has been registered.
   * @param aliasKey - The alias to the original key.
   */
  aliasTo(originalKey, aliasKey) {
    return new ResolverImpl(aliasKey, 5, originalKey);
  }
});
function validateKey(key) {
  if (key === null || key === void 0) {
    throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?");
  }
}
function buildAllResponse(resolver, handler, requestor) {
  if (resolver instanceof ResolverImpl && resolver.strategy === 4) {
    const state = resolver.state;
    let i = state.length;
    const results = new Array(i);
    while (i--) {
      results[i] = state[i].resolve(handler, requestor);
    }
    return results;
  }
  return [resolver.resolve(handler, requestor)];
}
const defaultFriendlyName = "(anonymous)";
function isObject(value) {
  return typeof value === "object" && value !== null || typeof value === "function";
}
const isNativeFunction = function() {
  const lookup = /* @__PURE__ */ new WeakMap();
  let isNative = false;
  let sourceText = "";
  let i = 0;
  return function(fn) {
    isNative = lookup.get(fn);
    if (isNative === void 0) {
      sourceText = fn.toString();
      i = sourceText.length;
      isNative = // 29 is the length of 'function () { [native code] }' which is the smallest length of a native function string
      i >= 29 && // 100 seems to be a safe upper bound of the max length of a native function. In Chrome and FF it's 56, in Edge it's 61.
      i <= 100 && // This whole heuristic *could* be tricked by a comment. Do we need to care about that?
      sourceText.charCodeAt(i - 1) === 125 && // }
      // TODO: the spec is a little vague about the precise constraints, so we do need to test this across various browsers to make sure just one whitespace is a safe assumption.
      sourceText.charCodeAt(i - 2) <= 32 && // whitespace
      sourceText.charCodeAt(i - 3) === 93 && // ]
      sourceText.charCodeAt(i - 4) === 101 && // e
      sourceText.charCodeAt(i - 5) === 100 && // d
      sourceText.charCodeAt(i - 6) === 111 && // o
      sourceText.charCodeAt(i - 7) === 99 && // c
      sourceText.charCodeAt(i - 8) === 32 && //
      sourceText.charCodeAt(i - 9) === 101 && // e
      sourceText.charCodeAt(i - 10) === 118 && // v
      sourceText.charCodeAt(i - 11) === 105 && // i
      sourceText.charCodeAt(i - 12) === 116 && // t
      sourceText.charCodeAt(i - 13) === 97 && // a
      sourceText.charCodeAt(i - 14) === 110 && // n
      sourceText.charCodeAt(i - 15) === 88;
      lookup.set(fn, isNative);
    }
    return isNative;
  };
}();
const isNumericLookup = {};
function isArrayIndex(value) {
  switch (typeof value) {
    case "number":
      return value >= 0 && (value | 0) === value;
    case "string": {
      const result = isNumericLookup[value];
      if (result !== void 0) {
        return result;
      }
      const length = value.length;
      if (length === 0) {
        return isNumericLookup[value] = false;
      }
      let ch2 = 0;
      for (let i = 0; i < length; ++i) {
        ch2 = value.charCodeAt(i);
        if (i === 0 && ch2 === 48 && length > 1 || ch2 < 48 || ch2 > 57) {
          return isNumericLookup[value] = false;
        }
      }
      return isNumericLookup[value] = true;
    }
    default:
      return false;
  }
}
function presentationKeyFromTag(tagName) {
  return `${tagName.toLowerCase()}:presentation`;
}
const presentationRegistry = /* @__PURE__ */ new Map();
const ComponentPresentation = Object.freeze({
  /**
   * Defines a component presentation for an element.
   * @param tagName - The element name to define the presentation for.
   * @param presentation - The presentation that will be applied to matching elements.
   * @param container - The dependency injection container to register the configuration in.
   * @public
   */
  define(tagName, presentation, container2) {
    const key = presentationKeyFromTag(tagName);
    const existing = presentationRegistry.get(key);
    if (existing === void 0) {
      presentationRegistry.set(key, presentation);
    } else {
      presentationRegistry.set(key, false);
    }
    container2.register(Registration.instance(key, presentation));
  },
  /**
   * Finds a component presentation for the specified element name,
   * searching the DOM hierarchy starting from the provided element.
   * @param tagName - The name of the element to locate the presentation for.
   * @param element - The element to begin the search from.
   * @returns The component presentation or null if none is found.
   * @public
   */
  forTag(tagName, element) {
    const key = presentationKeyFromTag(tagName);
    const existing = presentationRegistry.get(key);
    if (existing === false) {
      const container2 = DI.findResponsibleContainer(element);
      return container2.get(key);
    }
    return existing || null;
  }
});
class DefaultComponentPresentation {
  /**
   * Creates an instance of DefaultComponentPresentation.
   * @param template - The template to apply to the element.
   * @param styles - The styles to apply to the element.
   * @public
   */
  constructor(template, styles) {
    this.template = template || null;
    this.styles = styles === void 0 ? null : Array.isArray(styles) ? ElementStyles.create(styles) : styles instanceof ElementStyles ? styles : ElementStyles.create([styles]);
  }
  /**
   * Applies the presentation details to the specified element.
   * @param element - The element to apply the presentation details to.
   * @public
   */
  applyTo(element) {
    const controller = element.$fastController;
    if (controller.template === null) {
      controller.template = this.template;
    }
    if (controller.styles === null) {
      controller.styles = this.styles;
    }
  }
}
class FoundationElement extends FASTElement {
  constructor() {
    super(...arguments);
    this._presentation = void 0;
  }
  /**
   * A property which resolves the ComponentPresentation instance
   * for the current component.
   * @public
   */
  get $presentation() {
    if (this._presentation === void 0) {
      this._presentation = ComponentPresentation.forTag(this.tagName, this);
    }
    return this._presentation;
  }
  templateChanged() {
    if (this.template !== void 0) {
      this.$fastController.template = this.template;
    }
  }
  stylesChanged() {
    if (this.styles !== void 0) {
      this.$fastController.styles = this.styles;
    }
  }
  /**
   * The connected callback for this FASTElement.
   * @remarks
   * This method is invoked by the platform whenever this FoundationElement
   * becomes connected to the document.
   * @public
   */
  connectedCallback() {
    if (this.$presentation !== null) {
      this.$presentation.applyTo(this);
    }
    super.connectedCallback();
  }
  /**
   * Defines an element registry function with a set of element definition defaults.
   * @param elementDefinition - The definition of the element to create the registry
   * function for.
   * @public
   */
  static compose(elementDefinition) {
    return (overrideDefinition = {}) => new FoundationElementRegistry(this === FoundationElement ? class extends FoundationElement {
    } : this, elementDefinition, overrideDefinition);
  }
}
__decorate$1([
  observable
], FoundationElement.prototype, "template", void 0);
__decorate$1([
  observable
], FoundationElement.prototype, "styles", void 0);
function resolveOption(option, context, definition) {
  if (typeof option === "function") {
    return option(context, definition);
  }
  return option;
}
class FoundationElementRegistry {
  constructor(type, elementDefinition, overrideDefinition) {
    this.type = type;
    this.elementDefinition = elementDefinition;
    this.overrideDefinition = overrideDefinition;
    this.definition = Object.assign(Object.assign({}, this.elementDefinition), this.overrideDefinition);
  }
  register(container2, context) {
    const definition = this.definition;
    const overrideDefinition = this.overrideDefinition;
    const prefix = definition.prefix || context.elementPrefix;
    const name = `${prefix}-${definition.baseName}`;
    context.tryDefineElement({
      name,
      type: this.type,
      baseClass: this.elementDefinition.baseClass,
      callback: (x2) => {
        const presentation = new DefaultComponentPresentation(resolveOption(definition.template, x2, definition), resolveOption(definition.styles, x2, definition));
        x2.definePresentation(presentation);
        let shadowOptions = resolveOption(definition.shadowOptions, x2, definition);
        if (x2.shadowRootMode) {
          if (shadowOptions) {
            if (!overrideDefinition.shadowOptions) {
              shadowOptions.mode = x2.shadowRootMode;
            }
          } else if (shadowOptions !== null) {
            shadowOptions = { mode: x2.shadowRootMode };
          }
        }
        x2.defineElement({
          elementOptions: resolveOption(definition.elementOptions, x2, definition),
          shadowOptions,
          attributes: resolveOption(definition.attributes, x2, definition)
        });
      }
    });
  }
}
function applyMixins(derivedCtor, ...baseCtors) {
  const derivedAttributes = AttributeConfiguration.locate(derivedCtor);
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      if (name !== "constructor") {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
        );
      }
    });
    const baseAttributes = AttributeConfiguration.locate(baseCtor);
    baseAttributes.forEach((x2) => derivedAttributes.push(x2));
  });
}
const Orientation = {
  horizontal: "horizontal",
  vertical: "vertical"
};
function findLastIndex(array, predicate) {
  let k2 = array.length;
  while (k2--) {
    if (predicate(array[k2], k2, array)) {
      return k2;
    }
  }
  return -1;
}
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function isHTMLElement(...args) {
  return args.every((arg) => arg instanceof HTMLElement);
}
function getNonce() {
  const node = document.querySelector('meta[property="csp-nonce"]');
  if (node) {
    return node.getAttribute("content");
  } else {
    return null;
  }
}
let _canUseFocusVisible;
function canUseFocusVisible() {
  if (typeof _canUseFocusVisible === "boolean") {
    return _canUseFocusVisible;
  }
  if (!canUseDOM()) {
    _canUseFocusVisible = false;
    return _canUseFocusVisible;
  }
  const styleElement = document.createElement("style");
  const styleNonce = getNonce();
  if (styleNonce !== null) {
    styleElement.setAttribute("nonce", styleNonce);
  }
  document.head.appendChild(styleElement);
  try {
    styleElement.sheet.insertRule("foo:focus-visible {color:inherit}", 0);
    _canUseFocusVisible = true;
  } catch (e) {
    _canUseFocusVisible = false;
  } finally {
    document.head.removeChild(styleElement);
  }
  return _canUseFocusVisible;
}
const eventFocus = "focus";
const eventFocusIn = "focusin";
const eventFocusOut = "focusout";
const eventKeyDown = "keydown";
var KeyCodes;
(function(KeyCodes2) {
  KeyCodes2[KeyCodes2["alt"] = 18] = "alt";
  KeyCodes2[KeyCodes2["arrowDown"] = 40] = "arrowDown";
  KeyCodes2[KeyCodes2["arrowLeft"] = 37] = "arrowLeft";
  KeyCodes2[KeyCodes2["arrowRight"] = 39] = "arrowRight";
  KeyCodes2[KeyCodes2["arrowUp"] = 38] = "arrowUp";
  KeyCodes2[KeyCodes2["back"] = 8] = "back";
  KeyCodes2[KeyCodes2["backSlash"] = 220] = "backSlash";
  KeyCodes2[KeyCodes2["break"] = 19] = "break";
  KeyCodes2[KeyCodes2["capsLock"] = 20] = "capsLock";
  KeyCodes2[KeyCodes2["closeBracket"] = 221] = "closeBracket";
  KeyCodes2[KeyCodes2["colon"] = 186] = "colon";
  KeyCodes2[KeyCodes2["colon2"] = 59] = "colon2";
  KeyCodes2[KeyCodes2["comma"] = 188] = "comma";
  KeyCodes2[KeyCodes2["ctrl"] = 17] = "ctrl";
  KeyCodes2[KeyCodes2["delete"] = 46] = "delete";
  KeyCodes2[KeyCodes2["end"] = 35] = "end";
  KeyCodes2[KeyCodes2["enter"] = 13] = "enter";
  KeyCodes2[KeyCodes2["equals"] = 187] = "equals";
  KeyCodes2[KeyCodes2["equals2"] = 61] = "equals2";
  KeyCodes2[KeyCodes2["equals3"] = 107] = "equals3";
  KeyCodes2[KeyCodes2["escape"] = 27] = "escape";
  KeyCodes2[KeyCodes2["forwardSlash"] = 191] = "forwardSlash";
  KeyCodes2[KeyCodes2["function1"] = 112] = "function1";
  KeyCodes2[KeyCodes2["function10"] = 121] = "function10";
  KeyCodes2[KeyCodes2["function11"] = 122] = "function11";
  KeyCodes2[KeyCodes2["function12"] = 123] = "function12";
  KeyCodes2[KeyCodes2["function2"] = 113] = "function2";
  KeyCodes2[KeyCodes2["function3"] = 114] = "function3";
  KeyCodes2[KeyCodes2["function4"] = 115] = "function4";
  KeyCodes2[KeyCodes2["function5"] = 116] = "function5";
  KeyCodes2[KeyCodes2["function6"] = 117] = "function6";
  KeyCodes2[KeyCodes2["function7"] = 118] = "function7";
  KeyCodes2[KeyCodes2["function8"] = 119] = "function8";
  KeyCodes2[KeyCodes2["function9"] = 120] = "function9";
  KeyCodes2[KeyCodes2["home"] = 36] = "home";
  KeyCodes2[KeyCodes2["insert"] = 45] = "insert";
  KeyCodes2[KeyCodes2["menu"] = 93] = "menu";
  KeyCodes2[KeyCodes2["minus"] = 189] = "minus";
  KeyCodes2[KeyCodes2["minus2"] = 109] = "minus2";
  KeyCodes2[KeyCodes2["numLock"] = 144] = "numLock";
  KeyCodes2[KeyCodes2["numPad0"] = 96] = "numPad0";
  KeyCodes2[KeyCodes2["numPad1"] = 97] = "numPad1";
  KeyCodes2[KeyCodes2["numPad2"] = 98] = "numPad2";
  KeyCodes2[KeyCodes2["numPad3"] = 99] = "numPad3";
  KeyCodes2[KeyCodes2["numPad4"] = 100] = "numPad4";
  KeyCodes2[KeyCodes2["numPad5"] = 101] = "numPad5";
  KeyCodes2[KeyCodes2["numPad6"] = 102] = "numPad6";
  KeyCodes2[KeyCodes2["numPad7"] = 103] = "numPad7";
  KeyCodes2[KeyCodes2["numPad8"] = 104] = "numPad8";
  KeyCodes2[KeyCodes2["numPad9"] = 105] = "numPad9";
  KeyCodes2[KeyCodes2["numPadDivide"] = 111] = "numPadDivide";
  KeyCodes2[KeyCodes2["numPadDot"] = 110] = "numPadDot";
  KeyCodes2[KeyCodes2["numPadMinus"] = 109] = "numPadMinus";
  KeyCodes2[KeyCodes2["numPadMultiply"] = 106] = "numPadMultiply";
  KeyCodes2[KeyCodes2["numPadPlus"] = 107] = "numPadPlus";
  KeyCodes2[KeyCodes2["openBracket"] = 219] = "openBracket";
  KeyCodes2[KeyCodes2["pageDown"] = 34] = "pageDown";
  KeyCodes2[KeyCodes2["pageUp"] = 33] = "pageUp";
  KeyCodes2[KeyCodes2["period"] = 190] = "period";
  KeyCodes2[KeyCodes2["print"] = 44] = "print";
  KeyCodes2[KeyCodes2["quote"] = 222] = "quote";
  KeyCodes2[KeyCodes2["scrollLock"] = 145] = "scrollLock";
  KeyCodes2[KeyCodes2["shift"] = 16] = "shift";
  KeyCodes2[KeyCodes2["space"] = 32] = "space";
  KeyCodes2[KeyCodes2["tab"] = 9] = "tab";
  KeyCodes2[KeyCodes2["tilde"] = 192] = "tilde";
  KeyCodes2[KeyCodes2["windowsLeft"] = 91] = "windowsLeft";
  KeyCodes2[KeyCodes2["windowsOpera"] = 219] = "windowsOpera";
  KeyCodes2[KeyCodes2["windowsRight"] = 92] = "windowsRight";
})(KeyCodes || (KeyCodes = {}));
const keyArrowDown = "ArrowDown";
const keyArrowLeft = "ArrowLeft";
const keyArrowRight = "ArrowRight";
const keyArrowUp = "ArrowUp";
const keyEnter = "Enter";
const keyEscape = "Escape";
const keyHome = "Home";
const keyEnd = "End";
const keyFunction2 = "F2";
const keyPageDown = "PageDown";
const keyPageUp = "PageUp";
const keySpace = " ";
const keyTab = "Tab";
const ArrowKeys = {
  ArrowDown: keyArrowDown,
  ArrowLeft: keyArrowLeft,
  ArrowRight: keyArrowRight,
  ArrowUp: keyArrowUp
};
var Direction;
(function(Direction2) {
  Direction2["ltr"] = "ltr";
  Direction2["rtl"] = "rtl";
})(Direction || (Direction = {}));
function limit(min, max, value) {
  return Math.min(Math.max(value, min), max);
}
function inRange(value, min, max = 0) {
  [min, max] = [min, max].sort((a, b) => a - b);
  return min <= value && value < max;
}
let uniqueIdCounter = 0;
function uniqueId(prefix = "") {
  return `${prefix}${uniqueIdCounter++}`;
}
const anchorTemplate = (context, definition) => html`
    <a
        class="control"
        part="control"
        download="${(x2) => x2.download}"
        href="${(x2) => x2.href}"
        hreflang="${(x2) => x2.hreflang}"
        ping="${(x2) => x2.ping}"
        referrerpolicy="${(x2) => x2.referrerpolicy}"
        rel="${(x2) => x2.rel}"
        target="${(x2) => x2.target}"
        type="${(x2) => x2.type}"
        aria-atomic="${(x2) => x2.ariaAtomic}"
        aria-busy="${(x2) => x2.ariaBusy}"
        aria-controls="${(x2) => x2.ariaControls}"
        aria-current="${(x2) => x2.ariaCurrent}"
        aria-describedby="${(x2) => x2.ariaDescribedby}"
        aria-details="${(x2) => x2.ariaDetails}"
        aria-disabled="${(x2) => x2.ariaDisabled}"
        aria-errormessage="${(x2) => x2.ariaErrormessage}"
        aria-expanded="${(x2) => x2.ariaExpanded}"
        aria-flowto="${(x2) => x2.ariaFlowto}"
        aria-haspopup="${(x2) => x2.ariaHaspopup}"
        aria-hidden="${(x2) => x2.ariaHidden}"
        aria-invalid="${(x2) => x2.ariaInvalid}"
        aria-keyshortcuts="${(x2) => x2.ariaKeyshortcuts}"
        aria-label="${(x2) => x2.ariaLabel}"
        aria-labelledby="${(x2) => x2.ariaLabelledby}"
        aria-live="${(x2) => x2.ariaLive}"
        aria-owns="${(x2) => x2.ariaOwns}"
        aria-relevant="${(x2) => x2.ariaRelevant}"
        aria-roledescription="${(x2) => x2.ariaRoledescription}"
        ${ref("control")}
    >
        ${startSlotTemplate(context, definition)}
        <span class="content" part="content">
            <slot ${slotted("defaultSlottedContent")}></slot>
        </span>
        ${endSlotTemplate(context, definition)}
    </a>
`;
class ARIAGlobalStatesAndProperties {
}
__decorate$1([
  attr({ attribute: "aria-atomic" })
], ARIAGlobalStatesAndProperties.prototype, "ariaAtomic", void 0);
__decorate$1([
  attr({ attribute: "aria-busy" })
], ARIAGlobalStatesAndProperties.prototype, "ariaBusy", void 0);
__decorate$1([
  attr({ attribute: "aria-controls" })
], ARIAGlobalStatesAndProperties.prototype, "ariaControls", void 0);
__decorate$1([
  attr({ attribute: "aria-current" })
], ARIAGlobalStatesAndProperties.prototype, "ariaCurrent", void 0);
__decorate$1([
  attr({ attribute: "aria-describedby" })
], ARIAGlobalStatesAndProperties.prototype, "ariaDescribedby", void 0);
__decorate$1([
  attr({ attribute: "aria-details" })
], ARIAGlobalStatesAndProperties.prototype, "ariaDetails", void 0);
__decorate$1([
  attr({ attribute: "aria-disabled" })
], ARIAGlobalStatesAndProperties.prototype, "ariaDisabled", void 0);
__decorate$1([
  attr({ attribute: "aria-errormessage" })
], ARIAGlobalStatesAndProperties.prototype, "ariaErrormessage", void 0);
__decorate$1([
  attr({ attribute: "aria-flowto" })
], ARIAGlobalStatesAndProperties.prototype, "ariaFlowto", void 0);
__decorate$1([
  attr({ attribute: "aria-haspopup" })
], ARIAGlobalStatesAndProperties.prototype, "ariaHaspopup", void 0);
__decorate$1([
  attr({ attribute: "aria-hidden" })
], ARIAGlobalStatesAndProperties.prototype, "ariaHidden", void 0);
__decorate$1([
  attr({ attribute: "aria-invalid" })
], ARIAGlobalStatesAndProperties.prototype, "ariaInvalid", void 0);
__decorate$1([
  attr({ attribute: "aria-keyshortcuts" })
], ARIAGlobalStatesAndProperties.prototype, "ariaKeyshortcuts", void 0);
__decorate$1([
  attr({ attribute: "aria-label" })
], ARIAGlobalStatesAndProperties.prototype, "ariaLabel", void 0);
__decorate$1([
  attr({ attribute: "aria-labelledby" })
], ARIAGlobalStatesAndProperties.prototype, "ariaLabelledby", void 0);
__decorate$1([
  attr({ attribute: "aria-live" })
], ARIAGlobalStatesAndProperties.prototype, "ariaLive", void 0);
__decorate$1([
  attr({ attribute: "aria-owns" })
], ARIAGlobalStatesAndProperties.prototype, "ariaOwns", void 0);
__decorate$1([
  attr({ attribute: "aria-relevant" })
], ARIAGlobalStatesAndProperties.prototype, "ariaRelevant", void 0);
__decorate$1([
  attr({ attribute: "aria-roledescription" })
], ARIAGlobalStatesAndProperties.prototype, "ariaRoledescription", void 0);
class Anchor extends FoundationElement {
  constructor() {
    super(...arguments);
    this.handleUnsupportedDelegatesFocus = () => {
      var _a;
      if (window.ShadowRoot && !window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus") && ((_a = this.$fastController.definition.shadowOptions) === null || _a === void 0 ? void 0 : _a.delegatesFocus)) {
        this.focus = () => {
          var _a2;
          (_a2 = this.control) === null || _a2 === void 0 ? void 0 : _a2.focus();
        };
      }
    };
  }
  /**
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    this.handleUnsupportedDelegatesFocus();
  }
}
__decorate$1([
  attr
], Anchor.prototype, "download", void 0);
__decorate$1([
  attr
], Anchor.prototype, "href", void 0);
__decorate$1([
  attr
], Anchor.prototype, "hreflang", void 0);
__decorate$1([
  attr
], Anchor.prototype, "ping", void 0);
__decorate$1([
  attr
], Anchor.prototype, "referrerpolicy", void 0);
__decorate$1([
  attr
], Anchor.prototype, "rel", void 0);
__decorate$1([
  attr
], Anchor.prototype, "target", void 0);
__decorate$1([
  attr
], Anchor.prototype, "type", void 0);
__decorate$1([
  observable
], Anchor.prototype, "defaultSlottedContent", void 0);
class DelegatesARIALink {
}
__decorate$1([
  attr({ attribute: "aria-expanded" })
], DelegatesARIALink.prototype, "ariaExpanded", void 0);
applyMixins(DelegatesARIALink, ARIAGlobalStatesAndProperties);
applyMixins(Anchor, StartEnd, DelegatesARIALink);
const getDirection = (rootNode) => {
  const dirNode = rootNode.closest("[dir]");
  return dirNode !== null && dirNode.dir === "rtl" ? Direction.rtl : Direction.ltr;
};
const badgeTemplate = (context, definition) => html`
    <template class="${(x2) => x2.circular ? "circular" : ""}">
        <div class="control" part="control" style="${(x2) => x2.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;
let Badge$1 = class Badge extends FoundationElement {
  constructor() {
    super(...arguments);
    this.generateBadgeStyle = () => {
      if (!this.fill && !this.color) {
        return;
      }
      const fill = `background-color: var(--badge-fill-${this.fill});`;
      const color = `color: var(--badge-color-${this.color});`;
      if (this.fill && !this.color) {
        return fill;
      } else if (this.color && !this.fill) {
        return color;
      } else {
        return `${color} ${fill}`;
      }
    };
  }
};
__decorate$1([
  attr({ attribute: "fill" })
], Badge$1.prototype, "fill", void 0);
__decorate$1([
  attr({ attribute: "color" })
], Badge$1.prototype, "color", void 0);
__decorate$1([
  attr({ mode: "boolean" })
], Badge$1.prototype, "circular", void 0);
const buttonTemplate = (context, definition) => html`
    <button
        class="control"
        part="control"
        ?autofocus="${(x2) => x2.autofocus}"
        ?disabled="${(x2) => x2.disabled}"
        form="${(x2) => x2.formId}"
        formaction="${(x2) => x2.formaction}"
        formenctype="${(x2) => x2.formenctype}"
        formmethod="${(x2) => x2.formmethod}"
        formnovalidate="${(x2) => x2.formnovalidate}"
        formtarget="${(x2) => x2.formtarget}"
        name="${(x2) => x2.name}"
        type="${(x2) => x2.type}"
        value="${(x2) => x2.value}"
        aria-atomic="${(x2) => x2.ariaAtomic}"
        aria-busy="${(x2) => x2.ariaBusy}"
        aria-controls="${(x2) => x2.ariaControls}"
        aria-current="${(x2) => x2.ariaCurrent}"
        aria-describedby="${(x2) => x2.ariaDescribedby}"
        aria-details="${(x2) => x2.ariaDetails}"
        aria-disabled="${(x2) => x2.ariaDisabled}"
        aria-errormessage="${(x2) => x2.ariaErrormessage}"
        aria-expanded="${(x2) => x2.ariaExpanded}"
        aria-flowto="${(x2) => x2.ariaFlowto}"
        aria-haspopup="${(x2) => x2.ariaHaspopup}"
        aria-hidden="${(x2) => x2.ariaHidden}"
        aria-invalid="${(x2) => x2.ariaInvalid}"
        aria-keyshortcuts="${(x2) => x2.ariaKeyshortcuts}"
        aria-label="${(x2) => x2.ariaLabel}"
        aria-labelledby="${(x2) => x2.ariaLabelledby}"
        aria-live="${(x2) => x2.ariaLive}"
        aria-owns="${(x2) => x2.ariaOwns}"
        aria-pressed="${(x2) => x2.ariaPressed}"
        aria-relevant="${(x2) => x2.ariaRelevant}"
        aria-roledescription="${(x2) => x2.ariaRoledescription}"
        ${ref("control")}
    >
        ${startSlotTemplate(context, definition)}
        <span class="content" part="content">
            <slot ${slotted("defaultSlottedContent")}></slot>
        </span>
        ${endSlotTemplate(context, definition)}
    </button>
`;
const proxySlotName = "form-associated-proxy";
const ElementInternalsKey = "ElementInternals";
const supportsElementInternals = ElementInternalsKey in window && "setFormValue" in window[ElementInternalsKey].prototype;
const InternalsMap = /* @__PURE__ */ new WeakMap();
function FormAssociated(BaseCtor) {
  const C2 = class extends BaseCtor {
    constructor(...args) {
      super(...args);
      this.dirtyValue = false;
      this.disabled = false;
      this.proxyEventsToBlock = ["change", "click"];
      this.proxyInitialized = false;
      this.required = false;
      this.initialValue = this.initialValue || "";
      if (!this.elementInternals) {
        this.formResetCallback = this.formResetCallback.bind(this);
      }
    }
    /**
     * Must evaluate to true to enable elementInternals.
     * Feature detects API support and resolve respectively
     *
     * @internal
     */
    static get formAssociated() {
      return supportsElementInternals;
    }
    /**
     * Returns the validity state of the element
     *
     * @alpha
     */
    get validity() {
      return this.elementInternals ? this.elementInternals.validity : this.proxy.validity;
    }
    /**
     * Retrieve a reference to the associated form.
     * Returns null if not associated to any form.
     *
     * @alpha
     */
    get form() {
      return this.elementInternals ? this.elementInternals.form : this.proxy.form;
    }
    /**
     * Retrieve the localized validation message,
     * or custom validation message if set.
     *
     * @alpha
     */
    get validationMessage() {
      return this.elementInternals ? this.elementInternals.validationMessage : this.proxy.validationMessage;
    }
    /**
     * Whether the element will be validated when the
     * form is submitted
     */
    get willValidate() {
      return this.elementInternals ? this.elementInternals.willValidate : this.proxy.willValidate;
    }
    /**
     * A reference to all associated label elements
     */
    get labels() {
      if (this.elementInternals) {
        return Object.freeze(Array.from(this.elementInternals.labels));
      } else if (this.proxy instanceof HTMLElement && this.proxy.ownerDocument && this.id) {
        const parentLabels = this.proxy.labels;
        const forLabels = Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`));
        const labels = parentLabels ? forLabels.concat(Array.from(parentLabels)) : forLabels;
        return Object.freeze(labels);
      } else {
        return emptyArray;
      }
    }
    /**
     * Invoked when the `value` property changes
     * @param previous - the previous value
     * @param next - the new value
     *
     * @remarks
     * If elements extending `FormAssociated` implement a `valueChanged` method
     * They must be sure to invoke `super.valueChanged(previous, next)` to ensure
     * proper functioning of `FormAssociated`
     */
    valueChanged(previous, next) {
      this.dirtyValue = true;
      if (this.proxy instanceof HTMLElement) {
        this.proxy.value = this.value;
      }
      this.currentValue = this.value;
      this.setFormValue(this.value);
      this.validate();
    }
    currentValueChanged() {
      this.value = this.currentValue;
    }
    /**
     * Invoked when the `initialValue` property changes
     *
     * @param previous - the previous value
     * @param next - the new value
     *
     * @remarks
     * If elements extending `FormAssociated` implement a `initialValueChanged` method
     * They must be sure to invoke `super.initialValueChanged(previous, next)` to ensure
     * proper functioning of `FormAssociated`
     */
    initialValueChanged(previous, next) {
      if (!this.dirtyValue) {
        this.value = this.initialValue;
        this.dirtyValue = false;
      }
    }
    /**
     * Invoked when the `disabled` property changes
     *
     * @param previous - the previous value
     * @param next - the new value
     *
     * @remarks
     * If elements extending `FormAssociated` implement a `disabledChanged` method
     * They must be sure to invoke `super.disabledChanged(previous, next)` to ensure
     * proper functioning of `FormAssociated`
     */
    disabledChanged(previous, next) {
      if (this.proxy instanceof HTMLElement) {
        this.proxy.disabled = this.disabled;
      }
      DOM.queueUpdate(() => this.classList.toggle("disabled", this.disabled));
    }
    /**
     * Invoked when the `name` property changes
     *
     * @param previous - the previous value
     * @param next - the new value
     *
     * @remarks
     * If elements extending `FormAssociated` implement a `nameChanged` method
     * They must be sure to invoke `super.nameChanged(previous, next)` to ensure
     * proper functioning of `FormAssociated`
     */
    nameChanged(previous, next) {
      if (this.proxy instanceof HTMLElement) {
        this.proxy.name = this.name;
      }
    }
    /**
     * Invoked when the `required` property changes
     *
     * @param previous - the previous value
     * @param next - the new value
     *
     * @remarks
     * If elements extending `FormAssociated` implement a `requiredChanged` method
     * They must be sure to invoke `super.requiredChanged(previous, next)` to ensure
     * proper functioning of `FormAssociated`
     */
    requiredChanged(prev, next) {
      if (this.proxy instanceof HTMLElement) {
        this.proxy.required = this.required;
      }
      DOM.queueUpdate(() => this.classList.toggle("required", this.required));
      this.validate();
    }
    /**
     * The element internals object. Will only exist
     * in browsers supporting the attachInternals API
     */
    get elementInternals() {
      if (!supportsElementInternals) {
        return null;
      }
      let internals = InternalsMap.get(this);
      if (!internals) {
        internals = this.attachInternals();
        InternalsMap.set(this, internals);
      }
      return internals;
    }
    /**
     * @internal
     */
    connectedCallback() {
      super.connectedCallback();
      this.addEventListener("keypress", this._keypressHandler);
      if (!this.value) {
        this.value = this.initialValue;
        this.dirtyValue = false;
      }
      if (!this.elementInternals) {
        this.attachProxy();
        if (this.form) {
          this.form.addEventListener("reset", this.formResetCallback);
        }
      }
    }
    /**
     * @internal
     */
    disconnectedCallback() {
      super.disconnectedCallback();
      this.proxyEventsToBlock.forEach((name) => this.proxy.removeEventListener(name, this.stopPropagation));
      if (!this.elementInternals && this.form) {
        this.form.removeEventListener("reset", this.formResetCallback);
      }
    }
    /**
     * Return the current validity of the element.
     */
    checkValidity() {
      return this.elementInternals ? this.elementInternals.checkValidity() : this.proxy.checkValidity();
    }
    /**
     * Return the current validity of the element.
     * If false, fires an invalid event at the element.
     */
    reportValidity() {
      return this.elementInternals ? this.elementInternals.reportValidity() : this.proxy.reportValidity();
    }
    /**
     * Set the validity of the control. In cases when the elementInternals object is not
     * available (and the proxy element is used to report validity), this function will
     * do nothing unless a message is provided, at which point the setCustomValidity method
     * of the proxy element will be invoked with the provided message.
     * @param flags - Validity flags
     * @param message - Optional message to supply
     * @param anchor - Optional element used by UA to display an interactive validation UI
     */
    setValidity(flags, message, anchor) {
      if (this.elementInternals) {
        this.elementInternals.setValidity(flags, message, anchor);
      } else if (typeof message === "string") {
        this.proxy.setCustomValidity(message);
      }
    }
    /**
     * Invoked when a connected component's form or fieldset has its disabled
     * state changed.
     * @param disabled - the disabled value of the form / fieldset
     */
    formDisabledCallback(disabled) {
      this.disabled = disabled;
    }
    formResetCallback() {
      this.value = this.initialValue;
      this.dirtyValue = false;
    }
    /**
     * Attach the proxy element to the DOM
     */
    attachProxy() {
      var _a;
      if (!this.proxyInitialized) {
        this.proxyInitialized = true;
        this.proxy.style.display = "none";
        this.proxyEventsToBlock.forEach((name) => this.proxy.addEventListener(name, this.stopPropagation));
        this.proxy.disabled = this.disabled;
        this.proxy.required = this.required;
        if (typeof this.name === "string") {
          this.proxy.name = this.name;
        }
        if (typeof this.value === "string") {
          this.proxy.value = this.value;
        }
        this.proxy.setAttribute("slot", proxySlotName);
        this.proxySlot = document.createElement("slot");
        this.proxySlot.setAttribute("name", proxySlotName);
      }
      (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(this.proxySlot);
      this.appendChild(this.proxy);
    }
    /**
     * Detach the proxy element from the DOM
     */
    detachProxy() {
      var _a;
      this.removeChild(this.proxy);
      (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.removeChild(this.proxySlot);
    }
    /** {@inheritDoc (FormAssociated:interface).validate} */
    validate(anchor) {
      if (this.proxy instanceof HTMLElement) {
        this.setValidity(this.proxy.validity, this.proxy.validationMessage, anchor);
      }
    }
    /**
     * Associates the provided value (and optional state) with the parent form.
     * @param value - The value to set
     * @param state - The state object provided to during session restores and when autofilling.
     */
    setFormValue(value, state) {
      if (this.elementInternals) {
        this.elementInternals.setFormValue(value, state || value);
      }
    }
    _keypressHandler(e) {
      switch (e.key) {
        case keyEnter:
          if (this.form instanceof HTMLFormElement) {
            const defaultButton = this.form.querySelector("[type=submit]");
            defaultButton === null || defaultButton === void 0 ? void 0 : defaultButton.click();
          }
          break;
      }
    }
    /**
     * Used to stop propagation of proxy element events
     * @param e - Event object
     */
    stopPropagation(e) {
      e.stopPropagation();
    }
  };
  attr({ mode: "boolean" })(C2.prototype, "disabled");
  attr({ mode: "fromView", attribute: "value" })(C2.prototype, "initialValue");
  attr({ attribute: "current-value" })(C2.prototype, "currentValue");
  attr(C2.prototype, "name");
  attr({ mode: "boolean" })(C2.prototype, "required");
  observable(C2.prototype, "value");
  return C2;
}
function CheckableFormAssociated(BaseCtor) {
  class C2 extends FormAssociated(BaseCtor) {
  }
  class D2 extends C2 {
    constructor(...args) {
      super(args);
      this.dirtyChecked = false;
      this.checkedAttribute = false;
      this.checked = false;
      this.dirtyChecked = false;
    }
    checkedAttributeChanged() {
      this.defaultChecked = this.checkedAttribute;
    }
    /**
     * @internal
     */
    defaultCheckedChanged() {
      if (!this.dirtyChecked) {
        this.checked = this.defaultChecked;
        this.dirtyChecked = false;
      }
    }
    checkedChanged(prev, next) {
      if (!this.dirtyChecked) {
        this.dirtyChecked = true;
      }
      this.currentChecked = this.checked;
      this.updateForm();
      if (this.proxy instanceof HTMLInputElement) {
        this.proxy.checked = this.checked;
      }
      if (prev !== void 0) {
        this.$emit("change");
      }
      this.validate();
    }
    currentCheckedChanged(prev, next) {
      this.checked = this.currentChecked;
    }
    updateForm() {
      const value = this.checked ? this.value : null;
      this.setFormValue(value, value);
    }
    connectedCallback() {
      super.connectedCallback();
      this.updateForm();
    }
    formResetCallback() {
      super.formResetCallback();
      this.checked = !!this.checkedAttribute;
      this.dirtyChecked = false;
    }
  }
  attr({ attribute: "checked", mode: "boolean" })(D2.prototype, "checkedAttribute");
  attr({ attribute: "current-checked", converter: booleanConverter })(D2.prototype, "currentChecked");
  observable(D2.prototype, "defaultChecked");
  observable(D2.prototype, "checked");
  return D2;
}
class _Button extends FoundationElement {
}
class FormAssociatedButton extends FormAssociated(_Button) {
  constructor() {
    super(...arguments);
    this.proxy = document.createElement("input");
  }
}
let Button$2 = class Button extends FormAssociatedButton {
  constructor() {
    super(...arguments);
    this.handleClick = (e) => {
      var _a;
      if (this.disabled && ((_a = this.defaultSlottedContent) === null || _a === void 0 ? void 0 : _a.length) <= 1) {
        e.stopPropagation();
      }
    };
    this.handleSubmission = () => {
      if (!this.form) {
        return;
      }
      const attached = this.proxy.isConnected;
      if (!attached) {
        this.attachProxy();
      }
      typeof this.form.requestSubmit === "function" ? this.form.requestSubmit(this.proxy) : this.proxy.click();
      if (!attached) {
        this.detachProxy();
      }
    };
    this.handleFormReset = () => {
      var _a;
      (_a = this.form) === null || _a === void 0 ? void 0 : _a.reset();
    };
    this.handleUnsupportedDelegatesFocus = () => {
      var _a;
      if (window.ShadowRoot && !window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus") && ((_a = this.$fastController.definition.shadowOptions) === null || _a === void 0 ? void 0 : _a.delegatesFocus)) {
        this.focus = () => {
          this.control.focus();
        };
      }
    };
  }
  formactionChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.formAction = this.formaction;
    }
  }
  formenctypeChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.formEnctype = this.formenctype;
    }
  }
  formmethodChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.formMethod = this.formmethod;
    }
  }
  formnovalidateChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.formNoValidate = this.formnovalidate;
    }
  }
  formtargetChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.formTarget = this.formtarget;
    }
  }
  typeChanged(previous, next) {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.type = this.type;
    }
    next === "submit" && this.addEventListener("click", this.handleSubmission);
    previous === "submit" && this.removeEventListener("click", this.handleSubmission);
    next === "reset" && this.addEventListener("click", this.handleFormReset);
    previous === "reset" && this.removeEventListener("click", this.handleFormReset);
  }
  /** {@inheritDoc (FormAssociated:interface).validate} */
  validate() {
    super.validate(this.control);
  }
  /**
   * @internal
   */
  connectedCallback() {
    var _a;
    super.connectedCallback();
    this.proxy.setAttribute("type", this.type);
    this.handleUnsupportedDelegatesFocus();
    const elements2 = Array.from((_a = this.control) === null || _a === void 0 ? void 0 : _a.children);
    if (elements2) {
      elements2.forEach((span) => {
        span.addEventListener("click", this.handleClick);
      });
    }
  }
  /**
   * @internal
   */
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    const elements2 = Array.from((_a = this.control) === null || _a === void 0 ? void 0 : _a.children);
    if (elements2) {
      elements2.forEach((span) => {
        span.removeEventListener("click", this.handleClick);
      });
    }
  }
};
__decorate$1([
  attr({ mode: "boolean" })
], Button$2.prototype, "autofocus", void 0);
__decorate$1([
  attr({ attribute: "form" })
], Button$2.prototype, "formId", void 0);
__decorate$1([
  attr
], Button$2.prototype, "formaction", void 0);
__decorate$1([
  attr
], Button$2.prototype, "formenctype", void 0);
__decorate$1([
  attr
], Button$2.prototype, "formmethod", void 0);
__decorate$1([
  attr({ mode: "boolean" })
], Button$2.prototype, "formnovalidate", void 0);
__decorate$1([
  attr
], Button$2.prototype, "formtarget", void 0);
__decorate$1([
  attr
], Button$2.prototype, "type", void 0);
__decorate$1([
  observable
], Button$2.prototype, "defaultSlottedContent", void 0);
class DelegatesARIAButton {
}
__decorate$1([
  attr({ attribute: "aria-expanded" })
], DelegatesARIAButton.prototype, "ariaExpanded", void 0);
__decorate$1([
  attr({ attribute: "aria-pressed" })
], DelegatesARIAButton.prototype, "ariaPressed", void 0);
applyMixins(DelegatesARIAButton, ARIAGlobalStatesAndProperties);
applyMixins(Button$2, StartEnd, DelegatesARIAButton);
const GenerateHeaderOptions = {
  none: "none",
  default: "default",
  sticky: "sticky"
};
const DataGridCellTypes = {
  default: "default",
  columnHeader: "columnheader",
  rowHeader: "rowheader"
};
const DataGridRowTypes = {
  default: "default",
  header: "header",
  stickyHeader: "sticky-header"
};
let DataGridRow$1 = class DataGridRow extends FoundationElement {
  constructor() {
    super(...arguments);
    this.rowType = DataGridRowTypes.default;
    this.rowData = null;
    this.columnDefinitions = null;
    this.isActiveRow = false;
    this.cellsRepeatBehavior = null;
    this.cellsPlaceholder = null;
    this.focusColumnIndex = 0;
    this.refocusOnLoad = false;
    this.updateRowStyle = () => {
      this.style.gridTemplateColumns = this.gridTemplateColumns;
    };
  }
  gridTemplateColumnsChanged() {
    if (this.$fastController.isConnected) {
      this.updateRowStyle();
    }
  }
  rowTypeChanged() {
    if (this.$fastController.isConnected) {
      this.updateItemTemplate();
    }
  }
  rowDataChanged() {
    if (this.rowData !== null && this.isActiveRow) {
      this.refocusOnLoad = true;
      return;
    }
  }
  cellItemTemplateChanged() {
    this.updateItemTemplate();
  }
  headerCellItemTemplateChanged() {
    this.updateItemTemplate();
  }
  /**
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.cellsRepeatBehavior === null) {
      this.cellsPlaceholder = document.createComment("");
      this.appendChild(this.cellsPlaceholder);
      this.updateItemTemplate();
      this.cellsRepeatBehavior = new RepeatDirective((x2) => x2.columnDefinitions, (x2) => x2.activeCellItemTemplate, { positioning: true }).createBehavior(this.cellsPlaceholder);
      this.$fastController.addBehaviors([this.cellsRepeatBehavior]);
    }
    this.addEventListener("cell-focused", this.handleCellFocus);
    this.addEventListener(eventFocusOut, this.handleFocusout);
    this.addEventListener(eventKeyDown, this.handleKeydown);
    this.updateRowStyle();
    if (this.refocusOnLoad) {
      this.refocusOnLoad = false;
      if (this.cellElements.length > this.focusColumnIndex) {
        this.cellElements[this.focusColumnIndex].focus();
      }
    }
  }
  /**
   * @internal
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("cell-focused", this.handleCellFocus);
    this.removeEventListener(eventFocusOut, this.handleFocusout);
    this.removeEventListener(eventKeyDown, this.handleKeydown);
  }
  handleFocusout(e) {
    if (!this.contains(e.target)) {
      this.isActiveRow = false;
      this.focusColumnIndex = 0;
    }
  }
  handleCellFocus(e) {
    this.isActiveRow = true;
    this.focusColumnIndex = this.cellElements.indexOf(e.target);
    this.$emit("row-focused", this);
  }
  handleKeydown(e) {
    if (e.defaultPrevented) {
      return;
    }
    let newFocusColumnIndex = 0;
    switch (e.key) {
      case keyArrowLeft:
        newFocusColumnIndex = Math.max(0, this.focusColumnIndex - 1);
        this.cellElements[newFocusColumnIndex].focus();
        e.preventDefault();
        break;
      case keyArrowRight:
        newFocusColumnIndex = Math.min(this.cellElements.length - 1, this.focusColumnIndex + 1);
        this.cellElements[newFocusColumnIndex].focus();
        e.preventDefault();
        break;
      case keyHome:
        if (!e.ctrlKey) {
          this.cellElements[0].focus();
          e.preventDefault();
        }
        break;
      case keyEnd:
        if (!e.ctrlKey) {
          this.cellElements[this.cellElements.length - 1].focus();
          e.preventDefault();
        }
        break;
    }
  }
  updateItemTemplate() {
    this.activeCellItemTemplate = this.rowType === DataGridRowTypes.default && this.cellItemTemplate !== void 0 ? this.cellItemTemplate : this.rowType === DataGridRowTypes.default && this.cellItemTemplate === void 0 ? this.defaultCellItemTemplate : this.headerCellItemTemplate !== void 0 ? this.headerCellItemTemplate : this.defaultHeaderCellItemTemplate;
  }
};
__decorate$1([
  attr({ attribute: "grid-template-columns" })
], DataGridRow$1.prototype, "gridTemplateColumns", void 0);
__decorate$1([
  attr({ attribute: "row-type" })
], DataGridRow$1.prototype, "rowType", void 0);
__decorate$1([
  observable
], DataGridRow$1.prototype, "rowData", void 0);
__decorate$1([
  observable
], DataGridRow$1.prototype, "columnDefinitions", void 0);
__decorate$1([
  observable
], DataGridRow$1.prototype, "cellItemTemplate", void 0);
__decorate$1([
  observable
], DataGridRow$1.prototype, "headerCellItemTemplate", void 0);
__decorate$1([
  observable
], DataGridRow$1.prototype, "rowIndex", void 0);
__decorate$1([
  observable
], DataGridRow$1.prototype, "isActiveRow", void 0);
__decorate$1([
  observable
], DataGridRow$1.prototype, "activeCellItemTemplate", void 0);
__decorate$1([
  observable
], DataGridRow$1.prototype, "defaultCellItemTemplate", void 0);
__decorate$1([
  observable
], DataGridRow$1.prototype, "defaultHeaderCellItemTemplate", void 0);
__decorate$1([
  observable
], DataGridRow$1.prototype, "cellElements", void 0);
function createRowItemTemplate(context) {
  const rowTag = context.tagFor(DataGridRow$1);
  return html`
    <${rowTag}
        :rowData="${(x2) => x2}"
        :cellItemTemplate="${(x2, c) => c.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(x2, c) => c.parent.headerCellItemTemplate}"
    ></${rowTag}>
`;
}
const dataGridTemplate = (context, definition) => {
  const rowItemTemplate = createRowItemTemplate(context);
  const rowTag = context.tagFor(DataGridRow$1);
  return html`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${() => rowTag}"
            :defaultRowItemTemplate="${rowItemTemplate}"
            ${children({
    property: "rowElements",
    filter: elements("[role=row]")
  })}
        >
            <slot></slot>
        </template>
    `;
};
let DataGrid$1 = class DataGrid extends FoundationElement {
  constructor() {
    super();
    this.noTabbing = false;
    this.generateHeader = GenerateHeaderOptions.default;
    this.rowsData = [];
    this.columnDefinitions = null;
    this.focusRowIndex = 0;
    this.focusColumnIndex = 0;
    this.rowsPlaceholder = null;
    this.generatedHeader = null;
    this.isUpdatingFocus = false;
    this.pendingFocusUpdate = false;
    this.rowindexUpdateQueued = false;
    this.columnDefinitionsStale = true;
    this.generatedGridTemplateColumns = "";
    this.focusOnCell = (rowIndex, columnIndex, scrollIntoView) => {
      if (this.rowElements.length === 0) {
        this.focusRowIndex = 0;
        this.focusColumnIndex = 0;
        return;
      }
      const focusRowIndex = Math.max(0, Math.min(this.rowElements.length - 1, rowIndex));
      const focusRow = this.rowElements[focusRowIndex];
      const cells = focusRow.querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]');
      const focusColumnIndex = Math.max(0, Math.min(cells.length - 1, columnIndex));
      const focusTarget = cells[focusColumnIndex];
      if (scrollIntoView && this.scrollHeight !== this.clientHeight && (focusRowIndex < this.focusRowIndex && this.scrollTop > 0 || focusRowIndex > this.focusRowIndex && this.scrollTop < this.scrollHeight - this.clientHeight)) {
        focusTarget.scrollIntoView({ block: "center", inline: "center" });
      }
      focusTarget.focus();
    };
    this.onChildListChange = (mutations, observer) => {
      if (mutations && mutations.length) {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((newNode) => {
            if (newNode.nodeType === 1 && newNode.getAttribute("role") === "row") {
              newNode.columnDefinitions = this.columnDefinitions;
            }
          });
        });
        this.queueRowIndexUpdate();
      }
    };
    this.queueRowIndexUpdate = () => {
      if (!this.rowindexUpdateQueued) {
        this.rowindexUpdateQueued = true;
        DOM.queueUpdate(this.updateRowIndexes);
      }
    };
    this.updateRowIndexes = () => {
      let newGridTemplateColumns = this.gridTemplateColumns;
      if (newGridTemplateColumns === void 0) {
        if (this.generatedGridTemplateColumns === "" && this.rowElements.length > 0) {
          const firstRow = this.rowElements[0];
          this.generatedGridTemplateColumns = new Array(firstRow.cellElements.length).fill("1fr").join(" ");
        }
        newGridTemplateColumns = this.generatedGridTemplateColumns;
      }
      this.rowElements.forEach((element, index) => {
        const thisRow = element;
        thisRow.rowIndex = index;
        thisRow.gridTemplateColumns = newGridTemplateColumns;
        if (this.columnDefinitionsStale) {
          thisRow.columnDefinitions = this.columnDefinitions;
        }
      });
      this.rowindexUpdateQueued = false;
      this.columnDefinitionsStale = false;
    };
  }
  /**
   *  generates a gridTemplateColumns based on columndata array
   */
  static generateTemplateColumns(columnDefinitions) {
    let templateColumns = "";
    columnDefinitions.forEach((column) => {
      templateColumns = `${templateColumns}${templateColumns === "" ? "" : " "}${"1fr"}`;
    });
    return templateColumns;
  }
  noTabbingChanged() {
    if (this.$fastController.isConnected) {
      if (this.noTabbing) {
        this.setAttribute("tabIndex", "-1");
      } else {
        this.setAttribute("tabIndex", this.contains(document.activeElement) || this === document.activeElement ? "-1" : "0");
      }
    }
  }
  generateHeaderChanged() {
    if (this.$fastController.isConnected) {
      this.toggleGeneratedHeader();
    }
  }
  gridTemplateColumnsChanged() {
    if (this.$fastController.isConnected) {
      this.updateRowIndexes();
    }
  }
  rowsDataChanged() {
    if (this.columnDefinitions === null && this.rowsData.length > 0) {
      this.columnDefinitions = DataGrid.generateColumns(this.rowsData[0]);
    }
    if (this.$fastController.isConnected) {
      this.toggleGeneratedHeader();
    }
  }
  columnDefinitionsChanged() {
    if (this.columnDefinitions === null) {
      this.generatedGridTemplateColumns = "";
      return;
    }
    this.generatedGridTemplateColumns = DataGrid.generateTemplateColumns(this.columnDefinitions);
    if (this.$fastController.isConnected) {
      this.columnDefinitionsStale = true;
      this.queueRowIndexUpdate();
    }
  }
  headerCellItemTemplateChanged() {
    if (this.$fastController.isConnected) {
      if (this.generatedHeader !== null) {
        this.generatedHeader.headerCellItemTemplate = this.headerCellItemTemplate;
      }
    }
  }
  focusRowIndexChanged() {
    if (this.$fastController.isConnected) {
      this.queueFocusUpdate();
    }
  }
  focusColumnIndexChanged() {
    if (this.$fastController.isConnected) {
      this.queueFocusUpdate();
    }
  }
  /**
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.rowItemTemplate === void 0) {
      this.rowItemTemplate = this.defaultRowItemTemplate;
    }
    this.rowsPlaceholder = document.createComment("");
    this.appendChild(this.rowsPlaceholder);
    this.toggleGeneratedHeader();
    this.rowsRepeatBehavior = new RepeatDirective((x2) => x2.rowsData, (x2) => x2.rowItemTemplate, { positioning: true }).createBehavior(this.rowsPlaceholder);
    this.$fastController.addBehaviors([this.rowsRepeatBehavior]);
    this.addEventListener("row-focused", this.handleRowFocus);
    this.addEventListener(eventFocus, this.handleFocus);
    this.addEventListener(eventKeyDown, this.handleKeydown);
    this.addEventListener(eventFocusOut, this.handleFocusOut);
    this.observer = new MutationObserver(this.onChildListChange);
    this.observer.observe(this, { childList: true });
    if (this.noTabbing) {
      this.setAttribute("tabindex", "-1");
    }
    DOM.queueUpdate(this.queueRowIndexUpdate);
  }
  /**
   * @internal
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("row-focused", this.handleRowFocus);
    this.removeEventListener(eventFocus, this.handleFocus);
    this.removeEventListener(eventKeyDown, this.handleKeydown);
    this.removeEventListener(eventFocusOut, this.handleFocusOut);
    this.observer.disconnect();
    this.rowsPlaceholder = null;
    this.generatedHeader = null;
  }
  /**
   * @internal
   */
  handleRowFocus(e) {
    this.isUpdatingFocus = true;
    const focusRow = e.target;
    this.focusRowIndex = this.rowElements.indexOf(focusRow);
    this.focusColumnIndex = focusRow.focusColumnIndex;
    this.setAttribute("tabIndex", "-1");
    this.isUpdatingFocus = false;
  }
  /**
   * @internal
   */
  handleFocus(e) {
    this.focusOnCell(this.focusRowIndex, this.focusColumnIndex, true);
  }
  /**
   * @internal
   */
  handleFocusOut(e) {
    if (e.relatedTarget === null || !this.contains(e.relatedTarget)) {
      this.setAttribute("tabIndex", this.noTabbing ? "-1" : "0");
    }
  }
  /**
   * @internal
   */
  handleKeydown(e) {
    if (e.defaultPrevented) {
      return;
    }
    let newFocusRowIndex;
    const maxIndex = this.rowElements.length - 1;
    const currentGridBottom = this.offsetHeight + this.scrollTop;
    const lastRow = this.rowElements[maxIndex];
    switch (e.key) {
      case keyArrowUp:
        e.preventDefault();
        this.focusOnCell(this.focusRowIndex - 1, this.focusColumnIndex, true);
        break;
      case keyArrowDown:
        e.preventDefault();
        this.focusOnCell(this.focusRowIndex + 1, this.focusColumnIndex, true);
        break;
      case keyPageUp:
        e.preventDefault();
        if (this.rowElements.length === 0) {
          this.focusOnCell(0, 0, false);
          break;
        }
        if (this.focusRowIndex === 0) {
          this.focusOnCell(0, this.focusColumnIndex, false);
          return;
        }
        newFocusRowIndex = this.focusRowIndex - 1;
        for (newFocusRowIndex; newFocusRowIndex >= 0; newFocusRowIndex--) {
          const thisRow = this.rowElements[newFocusRowIndex];
          if (thisRow.offsetTop < this.scrollTop) {
            this.scrollTop = thisRow.offsetTop + thisRow.clientHeight - this.clientHeight;
            break;
          }
        }
        this.focusOnCell(newFocusRowIndex, this.focusColumnIndex, false);
        break;
      case keyPageDown:
        e.preventDefault();
        if (this.rowElements.length === 0) {
          this.focusOnCell(0, 0, false);
          break;
        }
        if (this.focusRowIndex >= maxIndex || lastRow.offsetTop + lastRow.offsetHeight <= currentGridBottom) {
          this.focusOnCell(maxIndex, this.focusColumnIndex, false);
          return;
        }
        newFocusRowIndex = this.focusRowIndex + 1;
        for (newFocusRowIndex; newFocusRowIndex <= maxIndex; newFocusRowIndex++) {
          const thisRow = this.rowElements[newFocusRowIndex];
          if (thisRow.offsetTop + thisRow.offsetHeight > currentGridBottom) {
            let stickyHeaderOffset = 0;
            if (this.generateHeader === GenerateHeaderOptions.sticky && this.generatedHeader !== null) {
              stickyHeaderOffset = this.generatedHeader.clientHeight;
            }
            this.scrollTop = thisRow.offsetTop - stickyHeaderOffset;
            break;
          }
        }
        this.focusOnCell(newFocusRowIndex, this.focusColumnIndex, false);
        break;
      case keyHome:
        if (e.ctrlKey) {
          e.preventDefault();
          this.focusOnCell(0, 0, true);
        }
        break;
      case keyEnd:
        if (e.ctrlKey && this.columnDefinitions !== null) {
          e.preventDefault();
          this.focusOnCell(this.rowElements.length - 1, this.columnDefinitions.length - 1, true);
        }
        break;
    }
  }
  queueFocusUpdate() {
    if (this.isUpdatingFocus && (this.contains(document.activeElement) || this === document.activeElement)) {
      return;
    }
    if (this.pendingFocusUpdate === false) {
      this.pendingFocusUpdate = true;
      DOM.queueUpdate(() => this.updateFocus());
    }
  }
  updateFocus() {
    this.pendingFocusUpdate = false;
    this.focusOnCell(this.focusRowIndex, this.focusColumnIndex, true);
  }
  toggleGeneratedHeader() {
    if (this.generatedHeader !== null) {
      this.removeChild(this.generatedHeader);
      this.generatedHeader = null;
    }
    if (this.generateHeader !== GenerateHeaderOptions.none && this.rowsData.length > 0) {
      const generatedHeaderElement = document.createElement(this.rowElementTag);
      this.generatedHeader = generatedHeaderElement;
      this.generatedHeader.columnDefinitions = this.columnDefinitions;
      this.generatedHeader.gridTemplateColumns = this.gridTemplateColumns;
      this.generatedHeader.rowType = this.generateHeader === GenerateHeaderOptions.sticky ? DataGridRowTypes.stickyHeader : DataGridRowTypes.header;
      if (this.firstChild !== null || this.rowsPlaceholder !== null) {
        this.insertBefore(generatedHeaderElement, this.firstChild !== null ? this.firstChild : this.rowsPlaceholder);
      }
      return;
    }
  }
};
DataGrid$1.generateColumns = (row) => {
  return Object.getOwnPropertyNames(row).map((property, index) => {
    return {
      columnDataKey: property,
      gridColumn: `${index}`
    };
  });
};
__decorate$1([
  attr({ attribute: "no-tabbing", mode: "boolean" })
], DataGrid$1.prototype, "noTabbing", void 0);
__decorate$1([
  attr({ attribute: "generate-header" })
], DataGrid$1.prototype, "generateHeader", void 0);
__decorate$1([
  attr({ attribute: "grid-template-columns" })
], DataGrid$1.prototype, "gridTemplateColumns", void 0);
__decorate$1([
  observable
], DataGrid$1.prototype, "rowsData", void 0);
__decorate$1([
  observable
], DataGrid$1.prototype, "columnDefinitions", void 0);
__decorate$1([
  observable
], DataGrid$1.prototype, "rowItemTemplate", void 0);
__decorate$1([
  observable
], DataGrid$1.prototype, "cellItemTemplate", void 0);
__decorate$1([
  observable
], DataGrid$1.prototype, "headerCellItemTemplate", void 0);
__decorate$1([
  observable
], DataGrid$1.prototype, "focusRowIndex", void 0);
__decorate$1([
  observable
], DataGrid$1.prototype, "focusColumnIndex", void 0);
__decorate$1([
  observable
], DataGrid$1.prototype, "defaultRowItemTemplate", void 0);
__decorate$1([
  observable
], DataGrid$1.prototype, "rowElementTag", void 0);
__decorate$1([
  observable
], DataGrid$1.prototype, "rowElements", void 0);
const defaultCellContentsTemplate = html`
    <template>
        ${(x2) => x2.rowData === null || x2.columnDefinition === null || x2.columnDefinition.columnDataKey === null ? null : x2.rowData[x2.columnDefinition.columnDataKey]}
    </template>
`;
const defaultHeaderCellContentsTemplate = html`
    <template>
        ${(x2) => x2.columnDefinition === null ? null : x2.columnDefinition.title === void 0 ? x2.columnDefinition.columnDataKey : x2.columnDefinition.title}
    </template>
`;
let DataGridCell$1 = class DataGridCell extends FoundationElement {
  constructor() {
    super(...arguments);
    this.cellType = DataGridCellTypes.default;
    this.rowData = null;
    this.columnDefinition = null;
    this.isActiveCell = false;
    this.customCellView = null;
    this.updateCellStyle = () => {
      this.style.gridColumn = this.gridColumn;
    };
  }
  cellTypeChanged() {
    if (this.$fastController.isConnected) {
      this.updateCellView();
    }
  }
  gridColumnChanged() {
    if (this.$fastController.isConnected) {
      this.updateCellStyle();
    }
  }
  columnDefinitionChanged(oldValue, newValue) {
    if (this.$fastController.isConnected) {
      this.updateCellView();
    }
  }
  /**
   * @internal
   */
  connectedCallback() {
    var _a;
    super.connectedCallback();
    this.addEventListener(eventFocusIn, this.handleFocusin);
    this.addEventListener(eventFocusOut, this.handleFocusout);
    this.addEventListener(eventKeyDown, this.handleKeydown);
    this.style.gridColumn = `${((_a = this.columnDefinition) === null || _a === void 0 ? void 0 : _a.gridColumn) === void 0 ? 0 : this.columnDefinition.gridColumn}`;
    this.updateCellView();
    this.updateCellStyle();
  }
  /**
   * @internal
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener(eventFocusIn, this.handleFocusin);
    this.removeEventListener(eventFocusOut, this.handleFocusout);
    this.removeEventListener(eventKeyDown, this.handleKeydown);
    this.disconnectCellView();
  }
  handleFocusin(e) {
    if (this.isActiveCell) {
      return;
    }
    this.isActiveCell = true;
    switch (this.cellType) {
      case DataGridCellTypes.columnHeader:
        if (this.columnDefinition !== null && this.columnDefinition.headerCellInternalFocusQueue !== true && typeof this.columnDefinition.headerCellFocusTargetCallback === "function") {
          const focusTarget = this.columnDefinition.headerCellFocusTargetCallback(this);
          if (focusTarget !== null) {
            focusTarget.focus();
          }
        }
        break;
      default:
        if (this.columnDefinition !== null && this.columnDefinition.cellInternalFocusQueue !== true && typeof this.columnDefinition.cellFocusTargetCallback === "function") {
          const focusTarget = this.columnDefinition.cellFocusTargetCallback(this);
          if (focusTarget !== null) {
            focusTarget.focus();
          }
        }
        break;
    }
    this.$emit("cell-focused", this);
  }
  handleFocusout(e) {
    if (this !== document.activeElement && !this.contains(document.activeElement)) {
      this.isActiveCell = false;
    }
  }
  handleKeydown(e) {
    if (e.defaultPrevented || this.columnDefinition === null || this.cellType === DataGridCellTypes.default && this.columnDefinition.cellInternalFocusQueue !== true || this.cellType === DataGridCellTypes.columnHeader && this.columnDefinition.headerCellInternalFocusQueue !== true) {
      return;
    }
    switch (e.key) {
      case keyEnter:
      case keyFunction2:
        if (this.contains(document.activeElement) && document.activeElement !== this) {
          return;
        }
        switch (this.cellType) {
          case DataGridCellTypes.columnHeader:
            if (this.columnDefinition.headerCellFocusTargetCallback !== void 0) {
              const focusTarget = this.columnDefinition.headerCellFocusTargetCallback(this);
              if (focusTarget !== null) {
                focusTarget.focus();
              }
              e.preventDefault();
            }
            break;
          default:
            if (this.columnDefinition.cellFocusTargetCallback !== void 0) {
              const focusTarget = this.columnDefinition.cellFocusTargetCallback(this);
              if (focusTarget !== null) {
                focusTarget.focus();
              }
              e.preventDefault();
            }
            break;
        }
        break;
      case keyEscape:
        if (this.contains(document.activeElement) && document.activeElement !== this) {
          this.focus();
          e.preventDefault();
        }
        break;
    }
  }
  updateCellView() {
    this.disconnectCellView();
    if (this.columnDefinition === null) {
      return;
    }
    switch (this.cellType) {
      case DataGridCellTypes.columnHeader:
        if (this.columnDefinition.headerCellTemplate !== void 0) {
          this.customCellView = this.columnDefinition.headerCellTemplate.render(this, this);
        } else {
          this.customCellView = defaultHeaderCellContentsTemplate.render(this, this);
        }
        break;
      case void 0:
      case DataGridCellTypes.rowHeader:
      case DataGridCellTypes.default:
        if (this.columnDefinition.cellTemplate !== void 0) {
          this.customCellView = this.columnDefinition.cellTemplate.render(this, this);
        } else {
          this.customCellView = defaultCellContentsTemplate.render(this, this);
        }
        break;
    }
  }
  disconnectCellView() {
    if (this.customCellView !== null) {
      this.customCellView.dispose();
      this.customCellView = null;
    }
  }
};
__decorate$1([
  attr({ attribute: "cell-type" })
], DataGridCell$1.prototype, "cellType", void 0);
__decorate$1([
  attr({ attribute: "grid-column" })
], DataGridCell$1.prototype, "gridColumn", void 0);
__decorate$1([
  observable
], DataGridCell$1.prototype, "rowData", void 0);
__decorate$1([
  observable
], DataGridCell$1.prototype, "columnDefinition", void 0);
function createCellItemTemplate(context) {
  const cellTag = context.tagFor(DataGridCell$1);
  return html`
    <${cellTag}
        cell-type="${(x2) => x2.isRowHeader ? "rowheader" : void 0}"
        grid-column="${(x2, c) => c.index + 1}"
        :rowData="${(x2, c) => c.parent.rowData}"
        :columnDefinition="${(x2) => x2}"
    ></${cellTag}>
`;
}
function createHeaderCellItemTemplate(context) {
  const cellTag = context.tagFor(DataGridCell$1);
  return html`
    <${cellTag}
        cell-type="columnheader"
        grid-column="${(x2, c) => c.index + 1}"
        :columnDefinition="${(x2) => x2}"
    ></${cellTag}>
`;
}
const dataGridRowTemplate = (context, definition) => {
  const cellItemTemplate = createCellItemTemplate(context);
  const headerCellItemTemplate = createHeaderCellItemTemplate(context);
  return html`
        <template
            role="row"
            class="${(x2) => x2.rowType !== "default" ? x2.rowType : ""}"
            :defaultCellItemTemplate="${cellItemTemplate}"
            :defaultHeaderCellItemTemplate="${headerCellItemTemplate}"
            ${children({
    property: "cellElements",
    filter: elements('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')
  })}
        >
            <slot ${slotted("slottedCellElements")}></slot>
        </template>
    `;
};
const dataGridCellTemplate = (context, definition) => {
  return html`
        <template
            tabindex="-1"
            role="${(x2) => !x2.cellType || x2.cellType === "default" ? "gridcell" : x2.cellType}"
            class="
            ${(x2) => x2.cellType === "columnheader" ? "column-header" : x2.cellType === "rowheader" ? "row-header" : ""}
            "
        >
            <slot></slot>
        </template>
    `;
};
const checkboxTemplate = (context, definition) => html`
    <template
        role="checkbox"
        aria-checked="${(x2) => x2.checked}"
        aria-required="${(x2) => x2.required}"
        aria-disabled="${(x2) => x2.disabled}"
        aria-readonly="${(x2) => x2.readOnly}"
        tabindex="${(x2) => x2.disabled ? null : 0}"
        @keypress="${(x2, c) => x2.keypressHandler(c.event)}"
        @click="${(x2, c) => x2.clickHandler(c.event)}"
        class="${(x2) => x2.readOnly ? "readonly" : ""} ${(x2) => x2.checked ? "checked" : ""} ${(x2) => x2.indeterminate ? "indeterminate" : ""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${definition.checkedIndicator || ""}
            </slot>
            <slot name="indeterminate-indicator">
                ${definition.indeterminateIndicator || ""}
            </slot>
        </div>
        <label
            part="label"
            class="${(x2) => x2.defaultSlottedNodes && x2.defaultSlottedNodes.length ? "label" : "label label__hidden"}"
        >
            <slot ${slotted("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;
class _Checkbox extends FoundationElement {
}
class FormAssociatedCheckbox extends CheckableFormAssociated(_Checkbox) {
  constructor() {
    super(...arguments);
    this.proxy = document.createElement("input");
  }
}
let Checkbox$1 = class Checkbox extends FormAssociatedCheckbox {
  constructor() {
    super();
    this.initialValue = "on";
    this.indeterminate = false;
    this.keypressHandler = (e) => {
      if (this.readOnly) {
        return;
      }
      switch (e.key) {
        case keySpace:
          if (this.indeterminate) {
            this.indeterminate = false;
          }
          this.checked = !this.checked;
          break;
      }
    };
    this.clickHandler = (e) => {
      if (!this.disabled && !this.readOnly) {
        if (this.indeterminate) {
          this.indeterminate = false;
        }
        this.checked = !this.checked;
      }
    };
    this.proxy.setAttribute("type", "checkbox");
  }
  readOnlyChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.readOnly = this.readOnly;
    }
  }
};
__decorate$1([
  attr({ attribute: "readonly", mode: "boolean" })
], Checkbox$1.prototype, "readOnly", void 0);
__decorate$1([
  observable
], Checkbox$1.prototype, "defaultSlottedNodes", void 0);
__decorate$1([
  observable
], Checkbox$1.prototype, "indeterminate", void 0);
function isListboxOption(el2) {
  return isHTMLElement(el2) && (el2.getAttribute("role") === "option" || el2 instanceof HTMLOptionElement);
}
class ListboxOption extends FoundationElement {
  constructor(text, value, defaultSelected, selected) {
    super();
    this.defaultSelected = false;
    this.dirtySelected = false;
    this.selected = this.defaultSelected;
    this.dirtyValue = false;
    if (text) {
      this.textContent = text;
    }
    if (value) {
      this.initialValue = value;
    }
    if (defaultSelected) {
      this.defaultSelected = defaultSelected;
    }
    if (selected) {
      this.selected = selected;
    }
    this.proxy = new Option(`${this.textContent}`, this.initialValue, this.defaultSelected, this.selected);
    this.proxy.disabled = this.disabled;
  }
  /**
   * Updates the ariaChecked property when the checked property changes.
   *
   * @param prev - the previous checked value
   * @param next - the current checked value
   *
   * @public
   */
  checkedChanged(prev, next) {
    if (typeof next === "boolean") {
      this.ariaChecked = next ? "true" : "false";
      return;
    }
    this.ariaChecked = null;
  }
  /**
   * Updates the proxy's text content when the default slot changes.
   * @param prev - the previous content value
   * @param next - the current content value
   *
   * @internal
   */
  contentChanged(prev, next) {
    if (this.proxy instanceof HTMLOptionElement) {
      this.proxy.textContent = this.textContent;
    }
    this.$emit("contentchange", null, { bubbles: true });
  }
  defaultSelectedChanged() {
    if (!this.dirtySelected) {
      this.selected = this.defaultSelected;
      if (this.proxy instanceof HTMLOptionElement) {
        this.proxy.selected = this.defaultSelected;
      }
    }
  }
  disabledChanged(prev, next) {
    this.ariaDisabled = this.disabled ? "true" : "false";
    if (this.proxy instanceof HTMLOptionElement) {
      this.proxy.disabled = this.disabled;
    }
  }
  selectedAttributeChanged() {
    this.defaultSelected = this.selectedAttribute;
    if (this.proxy instanceof HTMLOptionElement) {
      this.proxy.defaultSelected = this.defaultSelected;
    }
  }
  selectedChanged() {
    this.ariaSelected = this.selected ? "true" : "false";
    if (!this.dirtySelected) {
      this.dirtySelected = true;
    }
    if (this.proxy instanceof HTMLOptionElement) {
      this.proxy.selected = this.selected;
    }
  }
  initialValueChanged(previous, next) {
    if (!this.dirtyValue) {
      this.value = this.initialValue;
      this.dirtyValue = false;
    }
  }
  get label() {
    var _a;
    return (_a = this.value) !== null && _a !== void 0 ? _a : this.text;
  }
  get text() {
    var _a, _b;
    return (_b = (_a = this.textContent) === null || _a === void 0 ? void 0 : _a.replace(/\s+/g, " ").trim()) !== null && _b !== void 0 ? _b : "";
  }
  set value(next) {
    const newValue = `${next !== null && next !== void 0 ? next : ""}`;
    this._value = newValue;
    this.dirtyValue = true;
    if (this.proxy instanceof HTMLOptionElement) {
      this.proxy.value = newValue;
    }
    Observable.notify(this, "value");
  }
  get value() {
    var _a;
    Observable.track(this, "value");
    return (_a = this._value) !== null && _a !== void 0 ? _a : this.text;
  }
  get form() {
    return this.proxy ? this.proxy.form : null;
  }
}
__decorate$1([
  observable
], ListboxOption.prototype, "checked", void 0);
__decorate$1([
  observable
], ListboxOption.prototype, "content", void 0);
__decorate$1([
  observable
], ListboxOption.prototype, "defaultSelected", void 0);
__decorate$1([
  attr({ mode: "boolean" })
], ListboxOption.prototype, "disabled", void 0);
__decorate$1([
  attr({ attribute: "selected", mode: "boolean" })
], ListboxOption.prototype, "selectedAttribute", void 0);
__decorate$1([
  observable
], ListboxOption.prototype, "selected", void 0);
__decorate$1([
  attr({ attribute: "value", mode: "fromView" })
], ListboxOption.prototype, "initialValue", void 0);
class DelegatesARIAListboxOption {
}
__decorate$1([
  observable
], DelegatesARIAListboxOption.prototype, "ariaChecked", void 0);
__decorate$1([
  observable
], DelegatesARIAListboxOption.prototype, "ariaPosInSet", void 0);
__decorate$1([
  observable
], DelegatesARIAListboxOption.prototype, "ariaSelected", void 0);
__decorate$1([
  observable
], DelegatesARIAListboxOption.prototype, "ariaSetSize", void 0);
applyMixins(DelegatesARIAListboxOption, ARIAGlobalStatesAndProperties);
applyMixins(ListboxOption, StartEnd, DelegatesARIAListboxOption);
class Listbox extends FoundationElement {
  constructor() {
    super(...arguments);
    this._options = [];
    this.selectedIndex = -1;
    this.selectedOptions = [];
    this.shouldSkipFocus = false;
    this.typeaheadBuffer = "";
    this.typeaheadExpired = true;
    this.typeaheadTimeout = -1;
  }
  /**
   * The first selected option.
   *
   * @internal
   */
  get firstSelectedOption() {
    var _a;
    return (_a = this.selectedOptions[0]) !== null && _a !== void 0 ? _a : null;
  }
  /**
   * Returns true if there is one or more selectable option.
   *
   * @internal
   */
  get hasSelectableOptions() {
    return this.options.length > 0 && !this.options.every((o) => o.disabled);
  }
  /**
   * The number of options.
   *
   * @public
   */
  get length() {
    var _a, _b;
    return (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
  }
  /**
   * The list of options.
   *
   * @public
   */
  get options() {
    Observable.track(this, "options");
    return this._options;
  }
  set options(value) {
    this._options = value;
    Observable.notify(this, "options");
  }
  /**
   * Flag for the typeahead timeout expiration.
   *
   * @deprecated use `Listbox.typeaheadExpired`
   * @internal
   */
  get typeAheadExpired() {
    return this.typeaheadExpired;
  }
  set typeAheadExpired(value) {
    this.typeaheadExpired = value;
  }
  /**
   * Handle click events for listbox options.
   *
   * @internal
   */
  clickHandler(e) {
    const captured = e.target.closest(`option,[role=option]`);
    if (captured && !captured.disabled) {
      this.selectedIndex = this.options.indexOf(captured);
      return true;
    }
  }
  /**
   * Ensures that the provided option is focused and scrolled into view.
   *
   * @param optionToFocus - The option to focus
   * @internal
   */
  focusAndScrollOptionIntoView(optionToFocus = this.firstSelectedOption) {
    if (this.contains(document.activeElement) && optionToFocus !== null) {
      optionToFocus.focus();
      requestAnimationFrame(() => {
        optionToFocus.scrollIntoView({ block: "nearest" });
      });
    }
  }
  /**
   * Handles `focusin` actions for the component. When the component receives focus,
   * the list of selected options is refreshed and the first selected option is scrolled
   * into view.
   *
   * @internal
   */
  focusinHandler(e) {
    if (!this.shouldSkipFocus && e.target === e.currentTarget) {
      this.setSelectedOptions();
      this.focusAndScrollOptionIntoView();
    }
    this.shouldSkipFocus = false;
  }
  /**
   * Returns the options which match the current typeahead buffer.
   *
   * @internal
   */
  getTypeaheadMatches() {
    const pattern = this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    const re2 = new RegExp(`^${pattern}`, "gi");
    return this.options.filter((o) => o.text.trim().match(re2));
  }
  /**
   * Determines the index of the next option which is selectable, if any.
   *
   * @param prev - the previous selected index
   * @param next - the next index to select
   *
   * @internal
   */
  getSelectableIndex(prev = this.selectedIndex, next) {
    const direction = prev > next ? -1 : prev < next ? 1 : 0;
    const potentialDirection = prev + direction;
    let nextSelectableOption = null;
    switch (direction) {
      case -1: {
        nextSelectableOption = this.options.reduceRight((nextSelectableOption2, thisOption, index) => !nextSelectableOption2 && !thisOption.disabled && index < potentialDirection ? thisOption : nextSelectableOption2, nextSelectableOption);
        break;
      }
      case 1: {
        nextSelectableOption = this.options.reduce((nextSelectableOption2, thisOption, index) => !nextSelectableOption2 && !thisOption.disabled && index > potentialDirection ? thisOption : nextSelectableOption2, nextSelectableOption);
        break;
      }
    }
    return this.options.indexOf(nextSelectableOption);
  }
  /**
   * Handles external changes to child options.
   *
   * @param source - the source object
   * @param propertyName - the property
   *
   * @internal
   */
  handleChange(source, propertyName) {
    switch (propertyName) {
      case "selected": {
        if (Listbox.slottedOptionFilter(source)) {
          this.selectedIndex = this.options.indexOf(source);
        }
        this.setSelectedOptions();
        break;
      }
    }
  }
  /**
   * Moves focus to an option whose label matches characters typed by the user.
   * Consecutive keystrokes are batched into a buffer of search text used
   * to match against the set of options.  If `TYPE_AHEAD_TIMEOUT_MS` passes
   * between consecutive keystrokes, the search restarts.
   *
   * @param key - the key to be evaluated
   *
   * @internal
   */
  handleTypeAhead(key) {
    if (this.typeaheadTimeout) {
      window.clearTimeout(this.typeaheadTimeout);
    }
    this.typeaheadTimeout = window.setTimeout(() => this.typeaheadExpired = true, Listbox.TYPE_AHEAD_TIMEOUT_MS);
    if (key.length > 1) {
      return;
    }
    this.typeaheadBuffer = `${this.typeaheadExpired ? "" : this.typeaheadBuffer}${key}`;
  }
  /**
   * Handles `keydown` actions for listbox navigation and typeahead.
   *
   * @internal
   */
  keydownHandler(e) {
    if (this.disabled) {
      return true;
    }
    this.shouldSkipFocus = false;
    const key = e.key;
    switch (key) {
      case keyHome: {
        if (!e.shiftKey) {
          e.preventDefault();
          this.selectFirstOption();
        }
        break;
      }
      case keyArrowDown: {
        if (!e.shiftKey) {
          e.preventDefault();
          this.selectNextOption();
        }
        break;
      }
      case keyArrowUp: {
        if (!e.shiftKey) {
          e.preventDefault();
          this.selectPreviousOption();
        }
        break;
      }
      case keyEnd: {
        e.preventDefault();
        this.selectLastOption();
        break;
      }
      case keyTab: {
        this.focusAndScrollOptionIntoView();
        return true;
      }
      case keyEnter:
      case keyEscape: {
        return true;
      }
      case keySpace: {
        if (this.typeaheadExpired) {
          return true;
        }
      }
      default: {
        if (key.length === 1) {
          this.handleTypeAhead(`${key}`);
        }
        return true;
      }
    }
  }
  /**
   * Prevents `focusin` events from firing before `click` events when the
   * element is unfocused.
   *
   * @internal
   */
  mousedownHandler(e) {
    this.shouldSkipFocus = !this.contains(document.activeElement);
    return true;
  }
  /**
   * Switches between single-selection and multi-selection mode.
   *
   * @param prev - the previous value of the `multiple` attribute
   * @param next - the next value of the `multiple` attribute
   *
   * @internal
   */
  multipleChanged(prev, next) {
    this.ariaMultiSelectable = next ? "true" : null;
  }
  /**
   * Updates the list of selected options when the `selectedIndex` changes.
   *
   * @param prev - the previous selected index value
   * @param next - the current selected index value
   *
   * @internal
   */
  selectedIndexChanged(prev, next) {
    var _a;
    if (!this.hasSelectableOptions) {
      this.selectedIndex = -1;
      return;
    }
    if (((_a = this.options[this.selectedIndex]) === null || _a === void 0 ? void 0 : _a.disabled) && typeof prev === "number") {
      const selectableIndex = this.getSelectableIndex(prev, next);
      const newNext = selectableIndex > -1 ? selectableIndex : prev;
      this.selectedIndex = newNext;
      if (next === newNext) {
        this.selectedIndexChanged(next, newNext);
      }
      return;
    }
    this.setSelectedOptions();
  }
  /**
   * Updates the selectedness of each option when the list of selected options changes.
   *
   * @param prev - the previous list of selected options
   * @param next - the current list of selected options
   *
   * @internal
   */
  selectedOptionsChanged(prev, next) {
    var _a;
    const filteredNext = next.filter(Listbox.slottedOptionFilter);
    (_a = this.options) === null || _a === void 0 ? void 0 : _a.forEach((o) => {
      const notifier = Observable.getNotifier(o);
      notifier.unsubscribe(this, "selected");
      o.selected = filteredNext.includes(o);
      notifier.subscribe(this, "selected");
    });
  }
  /**
   * Moves focus to the first selectable option.
   *
   * @public
   */
  selectFirstOption() {
    var _a, _b;
    if (!this.disabled) {
      this.selectedIndex = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.findIndex((o) => !o.disabled)) !== null && _b !== void 0 ? _b : -1;
    }
  }
  /**
   * Moves focus to the last selectable option.
   *
   * @internal
   */
  selectLastOption() {
    if (!this.disabled) {
      this.selectedIndex = findLastIndex(this.options, (o) => !o.disabled);
    }
  }
  /**
   * Moves focus to the next selectable option.
   *
   * @internal
   */
  selectNextOption() {
    if (!this.disabled && this.selectedIndex < this.options.length - 1) {
      this.selectedIndex += 1;
    }
  }
  /**
   * Moves focus to the previous selectable option.
   *
   * @internal
   */
  selectPreviousOption() {
    if (!this.disabled && this.selectedIndex > 0) {
      this.selectedIndex = this.selectedIndex - 1;
    }
  }
  /**
   * Updates the selected index to match the first selected option.
   *
   * @internal
   */
  setDefaultSelectedOption() {
    var _a, _b;
    this.selectedIndex = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.findIndex((el2) => el2.defaultSelected)) !== null && _b !== void 0 ? _b : -1;
  }
  /**
   * Sets an option as selected and gives it focus.
   *
   * @public
   */
  setSelectedOptions() {
    var _a, _b, _c;
    if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.length) {
      this.selectedOptions = [this.options[this.selectedIndex]];
      this.ariaActiveDescendant = (_c = (_b = this.firstSelectedOption) === null || _b === void 0 ? void 0 : _b.id) !== null && _c !== void 0 ? _c : "";
      this.focusAndScrollOptionIntoView();
    }
  }
  /**
   * Updates the list of options and resets the selected option when the slotted option content changes.
   *
   * @param prev - the previous list of slotted options
   * @param next - the current list of slotted options
   *
   * @internal
   */
  slottedOptionsChanged(prev, next) {
    this.options = next.reduce((options, item) => {
      if (isListboxOption(item)) {
        options.push(item);
      }
      return options;
    }, []);
    const setSize = `${this.options.length}`;
    this.options.forEach((option, index) => {
      if (!option.id) {
        option.id = uniqueId("option-");
      }
      option.ariaPosInSet = `${index + 1}`;
      option.ariaSetSize = setSize;
    });
    if (this.$fastController.isConnected) {
      this.setSelectedOptions();
      this.setDefaultSelectedOption();
    }
  }
  /**
   * Updates the filtered list of options when the typeahead buffer changes.
   *
   * @param prev - the previous typeahead buffer value
   * @param next - the current typeahead buffer value
   *
   * @internal
   */
  typeaheadBufferChanged(prev, next) {
    if (this.$fastController.isConnected) {
      const typeaheadMatches = this.getTypeaheadMatches();
      if (typeaheadMatches.length) {
        const selectedIndex = this.options.indexOf(typeaheadMatches[0]);
        if (selectedIndex > -1) {
          this.selectedIndex = selectedIndex;
        }
      }
      this.typeaheadExpired = false;
    }
  }
}
Listbox.slottedOptionFilter = (n2) => isListboxOption(n2) && !n2.hidden;
Listbox.TYPE_AHEAD_TIMEOUT_MS = 1e3;
__decorate$1([
  attr({ mode: "boolean" })
], Listbox.prototype, "disabled", void 0);
__decorate$1([
  observable
], Listbox.prototype, "selectedIndex", void 0);
__decorate$1([
  observable
], Listbox.prototype, "selectedOptions", void 0);
__decorate$1([
  observable
], Listbox.prototype, "slottedOptions", void 0);
__decorate$1([
  observable
], Listbox.prototype, "typeaheadBuffer", void 0);
class DelegatesARIAListbox {
}
__decorate$1([
  observable
], DelegatesARIAListbox.prototype, "ariaActiveDescendant", void 0);
__decorate$1([
  observable
], DelegatesARIAListbox.prototype, "ariaDisabled", void 0);
__decorate$1([
  observable
], DelegatesARIAListbox.prototype, "ariaExpanded", void 0);
__decorate$1([
  observable
], DelegatesARIAListbox.prototype, "ariaMultiSelectable", void 0);
applyMixins(DelegatesARIAListbox, ARIAGlobalStatesAndProperties);
applyMixins(Listbox, DelegatesARIAListbox);
const SelectPosition = {
  above: "above",
  below: "below"
};
function composedParent(element) {
  const parentNode = element.parentElement;
  if (parentNode) {
    return parentNode;
  } else {
    const rootNode = element.getRootNode();
    if (rootNode.host instanceof HTMLElement) {
      return rootNode.host;
    }
  }
  return null;
}
function composedContains(reference, test) {
  let current = test;
  while (current !== null) {
    if (current === reference) {
      return true;
    }
    current = composedParent(current);
  }
  return false;
}
const defaultElement = document.createElement("div");
function isFastElement(element) {
  return element instanceof FASTElement;
}
class QueuedStyleSheetTarget {
  setProperty(name, value) {
    DOM.queueUpdate(() => this.target.setProperty(name, value));
  }
  removeProperty(name) {
    DOM.queueUpdate(() => this.target.removeProperty(name));
  }
}
class ConstructableStyleSheetTarget extends QueuedStyleSheetTarget {
  constructor(source) {
    super();
    const sheet = new CSSStyleSheet();
    this.target = sheet.cssRules[sheet.insertRule(":host{}")].style;
    source.$fastController.addStyles(ElementStyles.create([sheet]));
  }
}
class DocumentStyleSheetTarget extends QueuedStyleSheetTarget {
  constructor() {
    super();
    const sheet = new CSSStyleSheet();
    this.target = sheet.cssRules[sheet.insertRule(":root{}")].style;
    document.adoptedStyleSheets = [
      ...document.adoptedStyleSheets,
      sheet
    ];
  }
}
class HeadStyleElementStyleSheetTarget extends QueuedStyleSheetTarget {
  constructor() {
    super();
    this.style = document.createElement("style");
    document.head.appendChild(this.style);
    const { sheet } = this.style;
    if (sheet) {
      const index = sheet.insertRule(":root{}", sheet.cssRules.length);
      this.target = sheet.cssRules[index].style;
    }
  }
}
class StyleElementStyleSheetTarget {
  constructor(target) {
    this.store = /* @__PURE__ */ new Map();
    this.target = null;
    const controller = target.$fastController;
    this.style = document.createElement("style");
    controller.addStyles(this.style);
    Observable.getNotifier(controller).subscribe(this, "isConnected");
    this.handleChange(controller, "isConnected");
  }
  targetChanged() {
    if (this.target !== null) {
      for (const [key, value] of this.store.entries()) {
        this.target.setProperty(key, value);
      }
    }
  }
  setProperty(name, value) {
    this.store.set(name, value);
    DOM.queueUpdate(() => {
      if (this.target !== null) {
        this.target.setProperty(name, value);
      }
    });
  }
  removeProperty(name) {
    this.store.delete(name);
    DOM.queueUpdate(() => {
      if (this.target !== null) {
        this.target.removeProperty(name);
      }
    });
  }
  handleChange(source, key) {
    const { sheet } = this.style;
    if (sheet) {
      const index = sheet.insertRule(":host{}", sheet.cssRules.length);
      this.target = sheet.cssRules[index].style;
    } else {
      this.target = null;
    }
  }
}
__decorate$1([
  observable
], StyleElementStyleSheetTarget.prototype, "target", void 0);
class ElementStyleSheetTarget {
  constructor(source) {
    this.target = source.style;
  }
  setProperty(name, value) {
    DOM.queueUpdate(() => this.target.setProperty(name, value));
  }
  removeProperty(name) {
    DOM.queueUpdate(() => this.target.removeProperty(name));
  }
}
class RootStyleSheetTarget {
  setProperty(name, value) {
    RootStyleSheetTarget.properties[name] = value;
    for (const target of RootStyleSheetTarget.roots.values()) {
      PropertyTargetManager.getOrCreate(RootStyleSheetTarget.normalizeRoot(target)).setProperty(name, value);
    }
  }
  removeProperty(name) {
    delete RootStyleSheetTarget.properties[name];
    for (const target of RootStyleSheetTarget.roots.values()) {
      PropertyTargetManager.getOrCreate(RootStyleSheetTarget.normalizeRoot(target)).removeProperty(name);
    }
  }
  static registerRoot(root) {
    const { roots } = RootStyleSheetTarget;
    if (!roots.has(root)) {
      roots.add(root);
      const target = PropertyTargetManager.getOrCreate(this.normalizeRoot(root));
      for (const key in RootStyleSheetTarget.properties) {
        target.setProperty(key, RootStyleSheetTarget.properties[key]);
      }
    }
  }
  static unregisterRoot(root) {
    const { roots } = RootStyleSheetTarget;
    if (roots.has(root)) {
      roots.delete(root);
      const target = PropertyTargetManager.getOrCreate(RootStyleSheetTarget.normalizeRoot(root));
      for (const key in RootStyleSheetTarget.properties) {
        target.removeProperty(key);
      }
    }
  }
  /**
   * Returns the document when provided the default element,
   * otherwise is a no-op
   * @param root - the root to normalize
   */
  static normalizeRoot(root) {
    return root === defaultElement ? document : root;
  }
}
RootStyleSheetTarget.roots = /* @__PURE__ */ new Set();
RootStyleSheetTarget.properties = {};
const propertyTargetCache = /* @__PURE__ */ new WeakMap();
const propertyTargetCtor = DOM.supportsAdoptedStyleSheets ? ConstructableStyleSheetTarget : StyleElementStyleSheetTarget;
const PropertyTargetManager = Object.freeze({
  getOrCreate(source) {
    if (propertyTargetCache.has(source)) {
      return propertyTargetCache.get(source);
    }
    let target;
    if (source === defaultElement) {
      target = new RootStyleSheetTarget();
    } else if (source instanceof Document) {
      target = DOM.supportsAdoptedStyleSheets ? new DocumentStyleSheetTarget() : new HeadStyleElementStyleSheetTarget();
    } else if (isFastElement(source)) {
      target = new propertyTargetCtor(source);
    } else {
      target = new ElementStyleSheetTarget(source);
    }
    propertyTargetCache.set(source, target);
    return target;
  }
});
class DesignTokenImpl extends CSSDirective {
  constructor(configuration) {
    super();
    this.subscribers = /* @__PURE__ */ new WeakMap();
    this._appliedTo = /* @__PURE__ */ new Set();
    this.name = configuration.name;
    if (configuration.cssCustomPropertyName !== null) {
      this.cssCustomProperty = `--${configuration.cssCustomPropertyName}`;
      this.cssVar = `var(${this.cssCustomProperty})`;
    }
    this.id = DesignTokenImpl.uniqueId();
    DesignTokenImpl.tokensById.set(this.id, this);
  }
  get appliedTo() {
    return [...this._appliedTo];
  }
  static from(nameOrConfig) {
    return new DesignTokenImpl({
      name: typeof nameOrConfig === "string" ? nameOrConfig : nameOrConfig.name,
      cssCustomPropertyName: typeof nameOrConfig === "string" ? nameOrConfig : nameOrConfig.cssCustomPropertyName === void 0 ? nameOrConfig.name : nameOrConfig.cssCustomPropertyName
    });
  }
  static isCSSDesignToken(token) {
    return typeof token.cssCustomProperty === "string";
  }
  static isDerivedDesignTokenValue(value) {
    return typeof value === "function";
  }
  /**
   * Gets a token by ID. Returns undefined if the token was not found.
   * @param id - The ID of the token
   * @returns
   */
  static getTokenById(id2) {
    return DesignTokenImpl.tokensById.get(id2);
  }
  getOrCreateSubscriberSet(target = this) {
    return this.subscribers.get(target) || this.subscribers.set(target, /* @__PURE__ */ new Set()) && this.subscribers.get(target);
  }
  createCSS() {
    return this.cssVar || "";
  }
  getValueFor(element) {
    const value = DesignTokenNode.getOrCreate(element).get(this);
    if (value !== void 0) {
      return value;
    }
    throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${element} or an ancestor of ${element}.`);
  }
  setValueFor(element, value) {
    this._appliedTo.add(element);
    if (value instanceof DesignTokenImpl) {
      value = this.alias(value);
    }
    DesignTokenNode.getOrCreate(element).set(this, value);
    return this;
  }
  deleteValueFor(element) {
    this._appliedTo.delete(element);
    if (DesignTokenNode.existsFor(element)) {
      DesignTokenNode.getOrCreate(element).delete(this);
    }
    return this;
  }
  withDefault(value) {
    this.setValueFor(defaultElement, value);
    return this;
  }
  subscribe(subscriber, target) {
    const subscriberSet = this.getOrCreateSubscriberSet(target);
    if (target && !DesignTokenNode.existsFor(target)) {
      DesignTokenNode.getOrCreate(target);
    }
    if (!subscriberSet.has(subscriber)) {
      subscriberSet.add(subscriber);
    }
  }
  unsubscribe(subscriber, target) {
    const list = this.subscribers.get(target || this);
    if (list && list.has(subscriber)) {
      list.delete(subscriber);
    }
  }
  /**
   * Notifies subscribers that the value for an element has changed.
   * @param element - The element to emit a notification for
   */
  notify(element) {
    const record = Object.freeze({ token: this, target: element });
    if (this.subscribers.has(this)) {
      this.subscribers.get(this).forEach((sub) => sub.handleChange(record));
    }
    if (this.subscribers.has(element)) {
      this.subscribers.get(element).forEach((sub) => sub.handleChange(record));
    }
  }
  /**
   * Alias the token to the provided token.
   * @param token - the token to alias to
   */
  alias(token) {
    return (target) => token.getValueFor(target);
  }
}
DesignTokenImpl.uniqueId = (() => {
  let id2 = 0;
  return () => {
    id2++;
    return id2.toString(16);
  };
})();
DesignTokenImpl.tokensById = /* @__PURE__ */ new Map();
class CustomPropertyReflector {
  startReflection(token, target) {
    token.subscribe(this, target);
    this.handleChange({ token, target });
  }
  stopReflection(token, target) {
    token.unsubscribe(this, target);
    this.remove(token, target);
  }
  handleChange(record) {
    const { token, target } = record;
    this.add(token, target);
  }
  add(token, target) {
    PropertyTargetManager.getOrCreate(target).setProperty(token.cssCustomProperty, this.resolveCSSValue(DesignTokenNode.getOrCreate(target).get(token)));
  }
  remove(token, target) {
    PropertyTargetManager.getOrCreate(target).removeProperty(token.cssCustomProperty);
  }
  resolveCSSValue(value) {
    return value && typeof value.createCSS === "function" ? value.createCSS() : value;
  }
}
class DesignTokenBindingObserver {
  constructor(source, token, node) {
    this.source = source;
    this.token = token;
    this.node = node;
    this.dependencies = /* @__PURE__ */ new Set();
    this.observer = Observable.binding(source, this, false);
    this.observer.handleChange = this.observer.call;
    this.handleChange();
  }
  disconnect() {
    this.observer.disconnect();
  }
  /**
   * @internal
   */
  handleChange() {
    this.node.store.set(this.token, this.observer.observe(this.node.target, defaultExecutionContext));
  }
}
class Store {
  constructor() {
    this.values = /* @__PURE__ */ new Map();
  }
  set(token, value) {
    if (this.values.get(token) !== value) {
      this.values.set(token, value);
      Observable.getNotifier(this).notify(token.id);
    }
  }
  get(token) {
    Observable.track(this, token.id);
    return this.values.get(token);
  }
  delete(token) {
    this.values.delete(token);
  }
  all() {
    return this.values.entries();
  }
}
const nodeCache = /* @__PURE__ */ new WeakMap();
const childToParent = /* @__PURE__ */ new WeakMap();
class DesignTokenNode {
  constructor(target) {
    this.target = target;
    this.store = new Store();
    this.children = [];
    this.assignedValues = /* @__PURE__ */ new Map();
    this.reflecting = /* @__PURE__ */ new Set();
    this.bindingObservers = /* @__PURE__ */ new Map();
    this.tokenValueChangeHandler = {
      handleChange: (source, arg) => {
        const token = DesignTokenImpl.getTokenById(arg);
        if (token) {
          token.notify(this.target);
          if (DesignTokenImpl.isCSSDesignToken(token)) {
            const parent = this.parent;
            const reflecting = this.isReflecting(token);
            if (parent) {
              const parentValue = parent.get(token);
              const sourceValue = source.get(token);
              if (parentValue !== sourceValue && !reflecting) {
                this.reflectToCSS(token);
              } else if (parentValue === sourceValue && reflecting) {
                this.stopReflectToCSS(token);
              }
            } else if (!reflecting) {
              this.reflectToCSS(token);
            }
          }
        }
      }
    };
    nodeCache.set(target, this);
    Observable.getNotifier(this.store).subscribe(this.tokenValueChangeHandler);
    if (target instanceof FASTElement) {
      target.$fastController.addBehaviors([this]);
    } else if (target.isConnected) {
      this.bind();
    }
  }
  /**
   * Returns a DesignTokenNode for an element.
   * Creates a new instance if one does not already exist for a node,
   * otherwise returns the cached instance
   *
   * @param target - The HTML element to retrieve a DesignTokenNode for
   */
  static getOrCreate(target) {
    return nodeCache.get(target) || new DesignTokenNode(target);
  }
  /**
   * Determines if a DesignTokenNode has been created for a target
   * @param target - The element to test
   */
  static existsFor(target) {
    return nodeCache.has(target);
  }
  /**
   * Searches for and return the nearest parent DesignTokenNode.
   * Null is returned if no node is found or the node provided is for a default element.
   */
  static findParent(node) {
    if (!(defaultElement === node.target)) {
      let parent = composedParent(node.target);
      while (parent !== null) {
        if (nodeCache.has(parent)) {
          return nodeCache.get(parent);
        }
        parent = composedParent(parent);
      }
      return DesignTokenNode.getOrCreate(defaultElement);
    }
    return null;
  }
  /**
   * Finds the closest node with a value explicitly assigned for a token, otherwise null.
   * @param token - The token to look for
   * @param start - The node to start looking for value assignment
   * @returns
   */
  static findClosestAssignedNode(token, start) {
    let current = start;
    do {
      if (current.has(token)) {
        return current;
      }
      current = current.parent ? current.parent : current.target !== defaultElement ? DesignTokenNode.getOrCreate(defaultElement) : null;
    } while (current !== null);
    return null;
  }
  /**
   * The parent DesignTokenNode, or null.
   */
  get parent() {
    return childToParent.get(this) || null;
  }
  /**
   * Checks if a token has been assigned an explicit value the node.
   * @param token - the token to check.
   */
  has(token) {
    return this.assignedValues.has(token);
  }
  /**
   * Gets the value of a token for a node
   * @param token - The token to retrieve the value for
   * @returns
   */
  get(token) {
    const value = this.store.get(token);
    if (value !== void 0) {
      return value;
    }
    const raw = this.getRaw(token);
    if (raw !== void 0) {
      this.hydrate(token, raw);
      return this.get(token);
    }
  }
  /**
   * Retrieves the raw assigned value of a token from the nearest assigned node.
   * @param token - The token to retrieve a raw value for
   * @returns
   */
  getRaw(token) {
    var _a;
    if (this.assignedValues.has(token)) {
      return this.assignedValues.get(token);
    }
    return (_a = DesignTokenNode.findClosestAssignedNode(token, this)) === null || _a === void 0 ? void 0 : _a.getRaw(token);
  }
  /**
   * Sets a token to a value for a node
   * @param token - The token to set
   * @param value - The value to set the token to
   */
  set(token, value) {
    if (DesignTokenImpl.isDerivedDesignTokenValue(this.assignedValues.get(token))) {
      this.tearDownBindingObserver(token);
    }
    this.assignedValues.set(token, value);
    if (DesignTokenImpl.isDerivedDesignTokenValue(value)) {
      this.setupBindingObserver(token, value);
    } else {
      this.store.set(token, value);
    }
  }
  /**
   * Deletes a token value for the node.
   * @param token - The token to delete the value for
   */
  delete(token) {
    this.assignedValues.delete(token);
    this.tearDownBindingObserver(token);
    const upstream = this.getRaw(token);
    if (upstream) {
      this.hydrate(token, upstream);
    } else {
      this.store.delete(token);
    }
  }
  /**
   * Invoked when the DesignTokenNode.target is attached to the document
   */
  bind() {
    const parent = DesignTokenNode.findParent(this);
    if (parent) {
      parent.appendChild(this);
    }
    for (const key of this.assignedValues.keys()) {
      key.notify(this.target);
    }
  }
  /**
   * Invoked when the DesignTokenNode.target is detached from the document
   */
  unbind() {
    if (this.parent) {
      const parent = childToParent.get(this);
      parent.removeChild(this);
    }
  }
  /**
   * Appends a child to a parent DesignTokenNode.
   * @param child - The child to append to the node
   */
  appendChild(child) {
    if (child.parent) {
      childToParent.get(child).removeChild(child);
    }
    const reParent = this.children.filter((x2) => child.contains(x2));
    childToParent.set(child, this);
    this.children.push(child);
    reParent.forEach((x2) => child.appendChild(x2));
    Observable.getNotifier(this.store).subscribe(child);
    for (const [token, value] of this.store.all()) {
      child.hydrate(token, this.bindingObservers.has(token) ? this.getRaw(token) : value);
    }
  }
  /**
   * Removes a child from a node.
   * @param child - The child to remove.
   */
  removeChild(child) {
    const childIndex = this.children.indexOf(child);
    if (childIndex !== -1) {
      this.children.splice(childIndex, 1);
    }
    Observable.getNotifier(this.store).unsubscribe(child);
    return child.parent === this ? childToParent.delete(child) : false;
  }
  /**
   * Tests whether a provided node is contained by
   * the calling node.
   * @param test - The node to test
   */
  contains(test) {
    return composedContains(this.target, test.target);
  }
  /**
   * Instructs the node to reflect a design token for the provided token.
   * @param token - The design token to reflect
   */
  reflectToCSS(token) {
    if (!this.isReflecting(token)) {
      this.reflecting.add(token);
      DesignTokenNode.cssCustomPropertyReflector.startReflection(token, this.target);
    }
  }
  /**
   * Stops reflecting a DesignToken to CSS
   * @param token - The design token to stop reflecting
   */
  stopReflectToCSS(token) {
    if (this.isReflecting(token)) {
      this.reflecting.delete(token);
      DesignTokenNode.cssCustomPropertyReflector.stopReflection(token, this.target);
    }
  }
  /**
   * Determines if a token is being reflected to CSS for a node.
   * @param token - The token to check for reflection
   * @returns
   */
  isReflecting(token) {
    return this.reflecting.has(token);
  }
  /**
   * Handle changes to upstream tokens
   * @param source - The parent DesignTokenNode
   * @param property - The token ID that changed
   */
  handleChange(source, property) {
    const token = DesignTokenImpl.getTokenById(property);
    if (!token) {
      return;
    }
    this.hydrate(token, this.getRaw(token));
  }
  /**
   * Hydrates a token with a DesignTokenValue, making retrieval available.
   * @param token - The token to hydrate
   * @param value - The value to hydrate
   */
  hydrate(token, value) {
    if (!this.has(token)) {
      const observer = this.bindingObservers.get(token);
      if (DesignTokenImpl.isDerivedDesignTokenValue(value)) {
        if (observer) {
          if (observer.source !== value) {
            this.tearDownBindingObserver(token);
            this.setupBindingObserver(token, value);
          }
        } else {
          this.setupBindingObserver(token, value);
        }
      } else {
        if (observer) {
          this.tearDownBindingObserver(token);
        }
        this.store.set(token, value);
      }
    }
  }
  /**
   * Sets up a binding observer for a derived token value that notifies token
   * subscribers on change.
   *
   * @param token - The token to notify when the binding updates
   * @param source - The binding source
   */
  setupBindingObserver(token, source) {
    const binding = new DesignTokenBindingObserver(source, token, this);
    this.bindingObservers.set(token, binding);
    return binding;
  }
  /**
   * Tear down a binding observer for a token.
   */
  tearDownBindingObserver(token) {
    if (this.bindingObservers.has(token)) {
      this.bindingObservers.get(token).disconnect();
      this.bindingObservers.delete(token);
      return true;
    }
    return false;
  }
}
DesignTokenNode.cssCustomPropertyReflector = new CustomPropertyReflector();
__decorate$1([
  observable
], DesignTokenNode.prototype, "children", void 0);
function create$1(nameOrConfig) {
  return DesignTokenImpl.from(nameOrConfig);
}
const DesignToken = Object.freeze({
  create: create$1,
  /**
   * Informs DesignToken that an HTMLElement for which tokens have
   * been set has been connected to the document.
   *
   * The browser does not provide a reliable mechanism to observe an HTMLElement's connectedness
   * in all scenarios, so invoking this method manually is necessary when:
   *
   * 1. Token values are set for an HTMLElement.
   * 2. The HTMLElement does not inherit from FASTElement.
   * 3. The HTMLElement is not connected to the document when token values are set.
   *
   * @param element - The element to notify
   * @returns - true if notification was successful, otherwise false.
   */
  notifyConnection(element) {
    if (!element.isConnected || !DesignTokenNode.existsFor(element)) {
      return false;
    }
    DesignTokenNode.getOrCreate(element).bind();
    return true;
  },
  /**
   * Informs DesignToken that an HTMLElement for which tokens have
   * been set has been disconnected to the document.
   *
   * The browser does not provide a reliable mechanism to observe an HTMLElement's connectedness
   * in all scenarios, so invoking this method manually is necessary when:
   *
   * 1. Token values are set for an HTMLElement.
   * 2. The HTMLElement does not inherit from FASTElement.
   *
   * @param element - The element to notify
   * @returns - true if notification was successful, otherwise false.
   */
  notifyDisconnection(element) {
    if (element.isConnected || !DesignTokenNode.existsFor(element)) {
      return false;
    }
    DesignTokenNode.getOrCreate(element).unbind();
    return true;
  },
  /**
   * Registers and element or document as a DesignToken root.
   * {@link CSSDesignToken | CSSDesignTokens} with default values assigned via
   * {@link (DesignToken:interface).withDefault} will emit CSS custom properties to all
   * registered roots.
   * @param target - The root to register
   */
  registerRoot(target = defaultElement) {
    RootStyleSheetTarget.registerRoot(target);
  },
  /**
   * Unregister an element or document as a DesignToken root.
   * @param target - The root to deregister
   */
  unregisterRoot(target = defaultElement) {
    RootStyleSheetTarget.unregisterRoot(target);
  }
});
const ElementDisambiguation = Object.freeze({
  /**
   * Skip defining the element but still call the provided callback passed
   * to DesignSystemRegistrationContext.tryDefineElement
   */
  definitionCallbackOnly: null,
  /**
   * Ignore the duplicate element entirely.
   */
  ignoreDuplicate: Symbol()
});
const elementTypesByTag = /* @__PURE__ */ new Map();
const elementTagsByType = /* @__PURE__ */ new Map();
let rootDesignSystem = null;
const designSystemKey = DI.createInterface((x2) => x2.cachedCallback((handler) => {
  if (rootDesignSystem === null) {
    rootDesignSystem = new DefaultDesignSystem(null, handler);
  }
  return rootDesignSystem;
}));
const DesignSystem = Object.freeze({
  /**
   * Returns the HTML element name that the type is defined as.
   * @param type - The type to lookup.
   * @public
   */
  tagFor(type) {
    return elementTagsByType.get(type);
  },
  /**
   * Searches the DOM hierarchy for the design system that is responsible
   * for the provided element.
   * @param element - The element to locate the design system for.
   * @returns The located design system.
   * @public
   */
  responsibleFor(element) {
    const owned = element.$$designSystem$$;
    if (owned) {
      return owned;
    }
    const container2 = DI.findResponsibleContainer(element);
    return container2.get(designSystemKey);
  },
  /**
   * Gets the DesignSystem if one is explicitly defined on the provided element;
   * otherwise creates a design system defined directly on the element.
   * @param element - The element to get or create a design system for.
   * @returns The design system.
   * @public
   */
  getOrCreate(node) {
    if (!node) {
      if (rootDesignSystem === null) {
        rootDesignSystem = DI.getOrCreateDOMContainer().get(designSystemKey);
      }
      return rootDesignSystem;
    }
    const owned = node.$$designSystem$$;
    if (owned) {
      return owned;
    }
    const container2 = DI.getOrCreateDOMContainer(node);
    if (container2.has(designSystemKey, false)) {
      return container2.get(designSystemKey);
    } else {
      const system = new DefaultDesignSystem(node, container2);
      container2.register(Registration.instance(designSystemKey, system));
      return system;
    }
  }
});
function extractTryDefineElementParams(params, elementDefinitionType, elementDefinitionCallback) {
  if (typeof params === "string") {
    return {
      name: params,
      type: elementDefinitionType,
      callback: elementDefinitionCallback
    };
  } else {
    return params;
  }
}
class DefaultDesignSystem {
  constructor(owner, container2) {
    this.owner = owner;
    this.container = container2;
    this.designTokensInitialized = false;
    this.prefix = "fast";
    this.shadowRootMode = void 0;
    this.disambiguate = () => ElementDisambiguation.definitionCallbackOnly;
    if (owner !== null) {
      owner.$$designSystem$$ = this;
    }
  }
  withPrefix(prefix) {
    this.prefix = prefix;
    return this;
  }
  withShadowRootMode(mode) {
    this.shadowRootMode = mode;
    return this;
  }
  withElementDisambiguation(callback) {
    this.disambiguate = callback;
    return this;
  }
  withDesignTokenRoot(root) {
    this.designTokenRoot = root;
    return this;
  }
  register(...registrations) {
    const container2 = this.container;
    const elementDefinitionEntries = [];
    const disambiguate = this.disambiguate;
    const shadowRootMode = this.shadowRootMode;
    const context = {
      elementPrefix: this.prefix,
      tryDefineElement(params, elementDefinitionType, elementDefinitionCallback) {
        const extractedParams = extractTryDefineElementParams(params, elementDefinitionType, elementDefinitionCallback);
        const { name, callback, baseClass } = extractedParams;
        let { type } = extractedParams;
        let elementName = name;
        let typeFoundByName = elementTypesByTag.get(elementName);
        let needsDefine = true;
        while (typeFoundByName) {
          const result = disambiguate(elementName, type, typeFoundByName);
          switch (result) {
            case ElementDisambiguation.ignoreDuplicate:
              return;
            case ElementDisambiguation.definitionCallbackOnly:
              needsDefine = false;
              typeFoundByName = void 0;
              break;
            default:
              elementName = result;
              typeFoundByName = elementTypesByTag.get(elementName);
              break;
          }
        }
        if (needsDefine) {
          if (elementTagsByType.has(type) || type === FoundationElement) {
            type = class extends type {
            };
          }
          elementTypesByTag.set(elementName, type);
          elementTagsByType.set(type, elementName);
          if (baseClass) {
            elementTagsByType.set(baseClass, elementName);
          }
        }
        elementDefinitionEntries.push(new ElementDefinitionEntry(container2, elementName, type, shadowRootMode, callback, needsDefine));
      }
    };
    if (!this.designTokensInitialized) {
      this.designTokensInitialized = true;
      if (this.designTokenRoot !== null) {
        DesignToken.registerRoot(this.designTokenRoot);
      }
    }
    container2.registerWithContext(context, ...registrations);
    for (const entry of elementDefinitionEntries) {
      entry.callback(entry);
      if (entry.willDefine && entry.definition !== null) {
        entry.definition.define();
      }
    }
    return this;
  }
}
class ElementDefinitionEntry {
  constructor(container2, name, type, shadowRootMode, callback, willDefine) {
    this.container = container2;
    this.name = name;
    this.type = type;
    this.shadowRootMode = shadowRootMode;
    this.callback = callback;
    this.willDefine = willDefine;
    this.definition = null;
  }
  definePresentation(presentation) {
    ComponentPresentation.define(this.name, presentation, this.container);
  }
  defineElement(definition) {
    this.definition = new FASTElementDefinition(this.type, Object.assign(Object.assign({}, definition), { name: this.name }));
  }
  tagFor(type) {
    return DesignSystem.tagFor(type);
  }
}
const dividerTemplate = (context, definition) => html`
    <template role="${(x2) => x2.role}" aria-orientation="${(x2) => x2.orientation}"></template>
`;
const DividerRole = {
  /**
   * The divider semantically separates content
   */
  separator: "separator",
  /**
   * The divider has no semantic value and is for visual presentation only.
   */
  presentation: "presentation"
};
let Divider$1 = class Divider extends FoundationElement {
  constructor() {
    super(...arguments);
    this.role = DividerRole.separator;
    this.orientation = Orientation.horizontal;
  }
};
__decorate$1([
  attr
], Divider$1.prototype, "role", void 0);
__decorate$1([
  attr
], Divider$1.prototype, "orientation", void 0);
const listboxOptionTemplate = (context, definition) => html`
    <template
        aria-checked="${(x2) => x2.ariaChecked}"
        aria-disabled="${(x2) => x2.ariaDisabled}"
        aria-posinset="${(x2) => x2.ariaPosInSet}"
        aria-selected="${(x2) => x2.ariaSelected}"
        aria-setsize="${(x2) => x2.ariaSetSize}"
        class="${(x2) => [x2.checked && "checked", x2.selected && "selected", x2.disabled && "disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${startSlotTemplate(context, definition)}
        <span class="content" part="content">
            <slot ${slotted("content")}></slot>
        </span>
        ${endSlotTemplate(context, definition)}
    </template>
`;
class ListboxElement extends Listbox {
  constructor() {
    super(...arguments);
    this.activeIndex = -1;
    this.rangeStartIndex = -1;
  }
  /**
   * Returns the last checked option.
   *
   * @internal
   */
  get activeOption() {
    return this.options[this.activeIndex];
  }
  /**
   * Returns the list of checked options.
   *
   * @internal
   */
  get checkedOptions() {
    var _a;
    return (_a = this.options) === null || _a === void 0 ? void 0 : _a.filter((o) => o.checked);
  }
  /**
   * Returns the index of the first selected option.
   *
   * @internal
   */
  get firstSelectedOptionIndex() {
    return this.options.indexOf(this.firstSelectedOption);
  }
  /**
   * Updates the `ariaActiveDescendant` property when the active index changes.
   *
   * @param prev - the previous active index
   * @param next - the next active index
   *
   * @internal
   */
  activeIndexChanged(prev, next) {
    var _a, _b;
    this.ariaActiveDescendant = (_b = (_a = this.options[next]) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : "";
    this.focusAndScrollOptionIntoView();
  }
  /**
   * Toggles the checked state for the currently active option.
   *
   * @remarks
   * Multiple-selection mode only.
   *
   * @internal
   */
  checkActiveIndex() {
    if (!this.multiple) {
      return;
    }
    const activeItem = this.activeOption;
    if (activeItem) {
      activeItem.checked = true;
    }
  }
  /**
   * Sets the active index to the first option and marks it as checked.
   *
   * @remarks
   * Multi-selection mode only.
   *
   * @param preserveChecked - mark all options unchecked before changing the active index
   *
   * @internal
   */
  checkFirstOption(preserveChecked = false) {
    if (preserveChecked) {
      if (this.rangeStartIndex === -1) {
        this.rangeStartIndex = this.activeIndex + 1;
      }
      this.options.forEach((o, i) => {
        o.checked = inRange(i, this.rangeStartIndex);
      });
    } else {
      this.uncheckAllOptions();
    }
    this.activeIndex = 0;
    this.checkActiveIndex();
  }
  /**
   * Decrements the active index and sets the matching option as checked.
   *
   * @remarks
   * Multi-selection mode only.
   *
   * @param preserveChecked - mark all options unchecked before changing the active index
   *
   * @internal
   */
  checkLastOption(preserveChecked = false) {
    if (preserveChecked) {
      if (this.rangeStartIndex === -1) {
        this.rangeStartIndex = this.activeIndex;
      }
      this.options.forEach((o, i) => {
        o.checked = inRange(i, this.rangeStartIndex, this.options.length);
      });
    } else {
      this.uncheckAllOptions();
    }
    this.activeIndex = this.options.length - 1;
    this.checkActiveIndex();
  }
  /**
   * @override
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("focusout", this.focusoutHandler);
  }
  /**
   * @override
   * @internal
   */
  disconnectedCallback() {
    this.removeEventListener("focusout", this.focusoutHandler);
    super.disconnectedCallback();
  }
  /**
   * Increments the active index and marks the matching option as checked.
   *
   * @remarks
   * Multiple-selection mode only.
   *
   * @param preserveChecked - mark all options unchecked before changing the active index
   *
   * @internal
   */
  checkNextOption(preserveChecked = false) {
    if (preserveChecked) {
      if (this.rangeStartIndex === -1) {
        this.rangeStartIndex = this.activeIndex;
      }
      this.options.forEach((o, i) => {
        o.checked = inRange(i, this.rangeStartIndex, this.activeIndex + 1);
      });
    } else {
      this.uncheckAllOptions();
    }
    this.activeIndex += this.activeIndex < this.options.length - 1 ? 1 : 0;
    this.checkActiveIndex();
  }
  /**
   * Decrements the active index and marks the matching option as checked.
   *
   * @remarks
   * Multiple-selection mode only.
   *
   * @param preserveChecked - mark all options unchecked before changing the active index
   *
   * @internal
   */
  checkPreviousOption(preserveChecked = false) {
    if (preserveChecked) {
      if (this.rangeStartIndex === -1) {
        this.rangeStartIndex = this.activeIndex;
      }
      if (this.checkedOptions.length === 1) {
        this.rangeStartIndex += 1;
      }
      this.options.forEach((o, i) => {
        o.checked = inRange(i, this.activeIndex, this.rangeStartIndex);
      });
    } else {
      this.uncheckAllOptions();
    }
    this.activeIndex -= this.activeIndex > 0 ? 1 : 0;
    this.checkActiveIndex();
  }
  /**
   * Handles click events for listbox options.
   *
   * @param e - the event object
   *
   * @override
   * @internal
   */
  clickHandler(e) {
    var _a;
    if (!this.multiple) {
      return super.clickHandler(e);
    }
    const captured = (_a = e.target) === null || _a === void 0 ? void 0 : _a.closest(`[role=option]`);
    if (!captured || captured.disabled) {
      return;
    }
    this.uncheckAllOptions();
    this.activeIndex = this.options.indexOf(captured);
    this.checkActiveIndex();
    this.toggleSelectedForAllCheckedOptions();
    return true;
  }
  /**
   * @override
   * @internal
   */
  focusAndScrollOptionIntoView() {
    super.focusAndScrollOptionIntoView(this.activeOption);
  }
  /**
   * In multiple-selection mode:
   * If any options are selected, the first selected option is checked when
   * the listbox receives focus. If no options are selected, the first
   * selectable option is checked.
   *
   * @override
   * @internal
   */
  focusinHandler(e) {
    if (!this.multiple) {
      return super.focusinHandler(e);
    }
    if (!this.shouldSkipFocus && e.target === e.currentTarget) {
      this.uncheckAllOptions();
      if (this.activeIndex === -1) {
        this.activeIndex = this.firstSelectedOptionIndex !== -1 ? this.firstSelectedOptionIndex : 0;
      }
      this.checkActiveIndex();
      this.setSelectedOptions();
      this.focusAndScrollOptionIntoView();
    }
    this.shouldSkipFocus = false;
  }
  /**
   * Unchecks all options when the listbox loses focus.
   *
   * @internal
   */
  focusoutHandler(e) {
    if (this.multiple) {
      this.uncheckAllOptions();
    }
  }
  /**
   * Handles keydown actions for listbox navigation and typeahead
   *
   * @override
   * @internal
   */
  keydownHandler(e) {
    if (!this.multiple) {
      return super.keydownHandler(e);
    }
    if (this.disabled) {
      return true;
    }
    const { key, shiftKey } = e;
    this.shouldSkipFocus = false;
    switch (key) {
      case keyHome: {
        this.checkFirstOption(shiftKey);
        return;
      }
      case keyArrowDown: {
        this.checkNextOption(shiftKey);
        return;
      }
      case keyArrowUp: {
        this.checkPreviousOption(shiftKey);
        return;
      }
      case keyEnd: {
        this.checkLastOption(shiftKey);
        return;
      }
      case keyTab: {
        this.focusAndScrollOptionIntoView();
        return true;
      }
      case keyEscape: {
        this.uncheckAllOptions();
        this.checkActiveIndex();
        return true;
      }
      case keySpace: {
        e.preventDefault();
        if (this.typeAheadExpired) {
          this.toggleSelectedForAllCheckedOptions();
          return;
        }
      }
      default: {
        if (key.length === 1) {
          this.handleTypeAhead(`${key}`);
        }
        return true;
      }
    }
  }
  /**
   * Prevents `focusin` events from firing before `click` events when the
   * element is unfocused.
   *
   * @override
   * @internal
   */
  mousedownHandler(e) {
    if (e.offsetX >= 0 && e.offsetX <= this.scrollWidth) {
      return super.mousedownHandler(e);
    }
  }
  /**
   * Switches between single-selection and multi-selection mode.
   *
   * @internal
   */
  multipleChanged(prev, next) {
    var _a;
    this.ariaMultiSelectable = next ? "true" : null;
    (_a = this.options) === null || _a === void 0 ? void 0 : _a.forEach((o) => {
      o.checked = next ? false : void 0;
    });
    this.setSelectedOptions();
  }
  /**
   * Sets an option as selected and gives it focus.
   *
   * @override
   * @public
   */
  setSelectedOptions() {
    if (!this.multiple) {
      super.setSelectedOptions();
      return;
    }
    if (this.$fastController.isConnected && this.options) {
      this.selectedOptions = this.options.filter((o) => o.selected);
      this.focusAndScrollOptionIntoView();
    }
  }
  /**
   * Ensures the size is a positive integer when the property is updated.
   *
   * @param prev - the previous size value
   * @param next - the current size value
   *
   * @internal
   */
  sizeChanged(prev, next) {
    var _a;
    const size = Math.max(0, parseInt((_a = next === null || next === void 0 ? void 0 : next.toFixed()) !== null && _a !== void 0 ? _a : "", 10));
    if (size !== next) {
      DOM.queueUpdate(() => {
        this.size = size;
      });
    }
  }
  /**
   * Toggles the selected state of the provided options. If any provided items
   * are in an unselected state, all items are set to selected. If every
   * provided item is selected, they are all unselected.
   *
   * @internal
   */
  toggleSelectedForAllCheckedOptions() {
    const enabledCheckedOptions = this.checkedOptions.filter((o) => !o.disabled);
    const force = !enabledCheckedOptions.every((o) => o.selected);
    enabledCheckedOptions.forEach((o) => o.selected = force);
    this.selectedIndex = this.options.indexOf(enabledCheckedOptions[enabledCheckedOptions.length - 1]);
    this.setSelectedOptions();
  }
  /**
   * @override
   * @internal
   */
  typeaheadBufferChanged(prev, next) {
    if (!this.multiple) {
      super.typeaheadBufferChanged(prev, next);
      return;
    }
    if (this.$fastController.isConnected) {
      const typeaheadMatches = this.getTypeaheadMatches();
      const activeIndex = this.options.indexOf(typeaheadMatches[0]);
      if (activeIndex > -1) {
        this.activeIndex = activeIndex;
        this.uncheckAllOptions();
        this.checkActiveIndex();
      }
      this.typeAheadExpired = false;
    }
  }
  /**
   * Unchecks all options.
   *
   * @remarks
   * Multiple-selection mode only.
   *
   * @param preserveChecked - reset the rangeStartIndex
   *
   * @internal
   */
  uncheckAllOptions(preserveChecked = false) {
    this.options.forEach((o) => o.checked = this.multiple ? false : void 0);
    if (!preserveChecked) {
      this.rangeStartIndex = -1;
    }
  }
}
__decorate$1([
  observable
], ListboxElement.prototype, "activeIndex", void 0);
__decorate$1([
  attr({ mode: "boolean" })
], ListboxElement.prototype, "multiple", void 0);
__decorate$1([
  attr({ converter: nullableNumberConverter })
], ListboxElement.prototype, "size", void 0);
class _TextField extends FoundationElement {
}
class FormAssociatedTextField extends FormAssociated(_TextField) {
  constructor() {
    super(...arguments);
    this.proxy = document.createElement("input");
  }
}
const TextFieldType = {
  /**
   * An email TextField
   */
  email: "email",
  /**
   * A password TextField
   */
  password: "password",
  /**
   * A telephone TextField
   */
  tel: "tel",
  /**
   * A text TextField
   */
  text: "text",
  /**
   * A URL TextField
   */
  url: "url"
};
let TextField$1 = class TextField extends FormAssociatedTextField {
  constructor() {
    super(...arguments);
    this.type = TextFieldType.text;
  }
  readOnlyChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.readOnly = this.readOnly;
      this.validate();
    }
  }
  autofocusChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.autofocus = this.autofocus;
      this.validate();
    }
  }
  placeholderChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.placeholder = this.placeholder;
    }
  }
  typeChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.type = this.type;
      this.validate();
    }
  }
  listChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.setAttribute("list", this.list);
      this.validate();
    }
  }
  maxlengthChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.maxLength = this.maxlength;
      this.validate();
    }
  }
  minlengthChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.minLength = this.minlength;
      this.validate();
    }
  }
  patternChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.pattern = this.pattern;
      this.validate();
    }
  }
  sizeChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.size = this.size;
    }
  }
  spellcheckChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.spellcheck = this.spellcheck;
    }
  }
  /**
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    this.proxy.setAttribute("type", this.type);
    this.validate();
    if (this.autofocus) {
      DOM.queueUpdate(() => {
        this.focus();
      });
    }
  }
  /**
   * Selects all the text in the text field
   *
   * @public
   */
  select() {
    this.control.select();
    this.$emit("select");
  }
  /**
   * Handles the internal control's `input` event
   * @internal
   */
  handleTextInput() {
    this.value = this.control.value;
  }
  /**
   * Change event handler for inner control.
   * @remarks
   * "Change" events are not `composable` so they will not
   * permeate the shadow DOM boundary. This fn effectively proxies
   * the change event, emitting a `change` event whenever the internal
   * control emits a `change` event
   * @internal
   */
  handleChange() {
    this.$emit("change");
  }
  /** {@inheritDoc (FormAssociated:interface).validate} */
  validate() {
    super.validate(this.control);
  }
};
__decorate$1([
  attr({ attribute: "readonly", mode: "boolean" })
], TextField$1.prototype, "readOnly", void 0);
__decorate$1([
  attr({ mode: "boolean" })
], TextField$1.prototype, "autofocus", void 0);
__decorate$1([
  attr
], TextField$1.prototype, "placeholder", void 0);
__decorate$1([
  attr
], TextField$1.prototype, "type", void 0);
__decorate$1([
  attr
], TextField$1.prototype, "list", void 0);
__decorate$1([
  attr({ converter: nullableNumberConverter })
], TextField$1.prototype, "maxlength", void 0);
__decorate$1([
  attr({ converter: nullableNumberConverter })
], TextField$1.prototype, "minlength", void 0);
__decorate$1([
  attr
], TextField$1.prototype, "pattern", void 0);
__decorate$1([
  attr({ converter: nullableNumberConverter })
], TextField$1.prototype, "size", void 0);
__decorate$1([
  attr({ mode: "boolean" })
], TextField$1.prototype, "spellcheck", void 0);
__decorate$1([
  observable
], TextField$1.prototype, "defaultSlottedNodes", void 0);
class DelegatesARIATextbox {
}
applyMixins(DelegatesARIATextbox, ARIAGlobalStatesAndProperties);
applyMixins(TextField$1, StartEnd, DelegatesARIATextbox);
const progressSegments = 44;
const progressRingTemplate = (context, definition) => html`
    <template
        role="progressbar"
        aria-valuenow="${(x2) => x2.value}"
        aria-valuemin="${(x2) => x2.min}"
        aria-valuemax="${(x2) => x2.max}"
        class="${(x2) => x2.paused ? "paused" : ""}"
    >
        ${when((x2) => typeof x2.value === "number", html`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${(x2) => progressSegments * x2.percentComplete / 100}px ${progressSegments}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `, html`
                <slot name="indeterminate" slot="indeterminate">
                    ${definition.indeterminateIndicator || ""}
                </slot>
            `)}
    </template>
`;
class BaseProgress extends FoundationElement {
  constructor() {
    super(...arguments);
    this.percentComplete = 0;
  }
  valueChanged() {
    if (this.$fastController.isConnected) {
      this.updatePercentComplete();
    }
  }
  minChanged() {
    if (this.$fastController.isConnected) {
      this.updatePercentComplete();
    }
  }
  maxChanged() {
    if (this.$fastController.isConnected) {
      this.updatePercentComplete();
    }
  }
  /**
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    this.updatePercentComplete();
  }
  updatePercentComplete() {
    const min = typeof this.min === "number" ? this.min : 0;
    const max = typeof this.max === "number" ? this.max : 100;
    const value = typeof this.value === "number" ? this.value : 0;
    const range2 = max - min;
    this.percentComplete = range2 === 0 ? 0 : Math.fround((value - min) / range2 * 100);
  }
}
__decorate$1([
  attr({ converter: nullableNumberConverter })
], BaseProgress.prototype, "value", void 0);
__decorate$1([
  attr({ converter: nullableNumberConverter })
], BaseProgress.prototype, "min", void 0);
__decorate$1([
  attr({ converter: nullableNumberConverter })
], BaseProgress.prototype, "max", void 0);
__decorate$1([
  attr({ mode: "boolean" })
], BaseProgress.prototype, "paused", void 0);
__decorate$1([
  observable
], BaseProgress.prototype, "percentComplete", void 0);
const radioGroupTemplate = (context, definition) => html`
    <template
        role="radiogroup"
        aria-disabled="${(x2) => x2.disabled}"
        aria-readonly="${(x2) => x2.readOnly}"
        @click="${(x2, c) => x2.clickHandler(c.event)}"
        @keydown="${(x2, c) => x2.keydownHandler(c.event)}"
        @focusout="${(x2, c) => x2.focusOutHandler(c.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${(x2) => x2.orientation === Orientation.horizontal ? "horizontal" : "vertical"}"
            part="positioning-region"
        >
            <slot
                ${slotted({
  property: "slottedRadioButtons",
  filter: elements("[role=radio]")
})}
            ></slot>
        </div>
    </template>
`;
let RadioGroup$1 = class RadioGroup extends FoundationElement {
  constructor() {
    super(...arguments);
    this.orientation = Orientation.horizontal;
    this.radioChangeHandler = (e) => {
      const changedRadio = e.target;
      if (changedRadio.checked) {
        this.slottedRadioButtons.forEach((radio) => {
          if (radio !== changedRadio) {
            radio.checked = false;
            if (!this.isInsideFoundationToolbar) {
              radio.setAttribute("tabindex", "-1");
            }
          }
        });
        this.selectedRadio = changedRadio;
        this.value = changedRadio.value;
        changedRadio.setAttribute("tabindex", "0");
        this.focusedRadio = changedRadio;
      }
      e.stopPropagation();
    };
    this.moveToRadioByIndex = (group, index) => {
      const radio = group[index];
      if (!this.isInsideToolbar) {
        radio.setAttribute("tabindex", "0");
        if (radio.readOnly) {
          this.slottedRadioButtons.forEach((nextRadio) => {
            if (nextRadio !== radio) {
              nextRadio.setAttribute("tabindex", "-1");
            }
          });
        } else {
          radio.checked = true;
          this.selectedRadio = radio;
        }
      }
      this.focusedRadio = radio;
      radio.focus();
    };
    this.moveRightOffGroup = () => {
      var _a;
      (_a = this.nextElementSibling) === null || _a === void 0 ? void 0 : _a.focus();
    };
    this.moveLeftOffGroup = () => {
      var _a;
      (_a = this.previousElementSibling) === null || _a === void 0 ? void 0 : _a.focus();
    };
    this.focusOutHandler = (e) => {
      const group = this.slottedRadioButtons;
      const radio = e.target;
      const index = radio !== null ? group.indexOf(radio) : 0;
      const focusedIndex = this.focusedRadio ? group.indexOf(this.focusedRadio) : -1;
      if (focusedIndex === 0 && index === focusedIndex || focusedIndex === group.length - 1 && focusedIndex === index) {
        if (!this.selectedRadio) {
          this.focusedRadio = group[0];
          this.focusedRadio.setAttribute("tabindex", "0");
          group.forEach((nextRadio) => {
            if (nextRadio !== this.focusedRadio) {
              nextRadio.setAttribute("tabindex", "-1");
            }
          });
        } else {
          this.focusedRadio = this.selectedRadio;
          if (!this.isInsideFoundationToolbar) {
            this.selectedRadio.setAttribute("tabindex", "0");
            group.forEach((nextRadio) => {
              if (nextRadio !== this.selectedRadio) {
                nextRadio.setAttribute("tabindex", "-1");
              }
            });
          }
        }
      }
      return true;
    };
    this.clickHandler = (e) => {
      const radio = e.target;
      if (radio) {
        const group = this.slottedRadioButtons;
        if (radio.checked || group.indexOf(radio) === 0) {
          radio.setAttribute("tabindex", "0");
          this.selectedRadio = radio;
        } else {
          radio.setAttribute("tabindex", "-1");
          this.selectedRadio = null;
        }
        this.focusedRadio = radio;
      }
      e.preventDefault();
    };
    this.shouldMoveOffGroupToTheRight = (index, group, key) => {
      return index === group.length && this.isInsideToolbar && key === keyArrowRight;
    };
    this.shouldMoveOffGroupToTheLeft = (group, key) => {
      const index = this.focusedRadio ? group.indexOf(this.focusedRadio) - 1 : 0;
      return index < 0 && this.isInsideToolbar && key === keyArrowLeft;
    };
    this.checkFocusedRadio = () => {
      if (this.focusedRadio !== null && !this.focusedRadio.readOnly && !this.focusedRadio.checked) {
        this.focusedRadio.checked = true;
        this.focusedRadio.setAttribute("tabindex", "0");
        this.focusedRadio.focus();
        this.selectedRadio = this.focusedRadio;
      }
    };
    this.moveRight = (e) => {
      const group = this.slottedRadioButtons;
      let index = 0;
      index = this.focusedRadio ? group.indexOf(this.focusedRadio) + 1 : 1;
      if (this.shouldMoveOffGroupToTheRight(index, group, e.key)) {
        this.moveRightOffGroup();
        return;
      } else if (index === group.length) {
        index = 0;
      }
      while (index < group.length && group.length > 1) {
        if (!group[index].disabled) {
          this.moveToRadioByIndex(group, index);
          break;
        } else if (this.focusedRadio && index === group.indexOf(this.focusedRadio)) {
          break;
        } else if (index + 1 >= group.length) {
          if (this.isInsideToolbar) {
            break;
          } else {
            index = 0;
          }
        } else {
          index += 1;
        }
      }
    };
    this.moveLeft = (e) => {
      const group = this.slottedRadioButtons;
      let index = 0;
      index = this.focusedRadio ? group.indexOf(this.focusedRadio) - 1 : 0;
      index = index < 0 ? group.length - 1 : index;
      if (this.shouldMoveOffGroupToTheLeft(group, e.key)) {
        this.moveLeftOffGroup();
        return;
      }
      while (index >= 0 && group.length > 1) {
        if (!group[index].disabled) {
          this.moveToRadioByIndex(group, index);
          break;
        } else if (this.focusedRadio && index === group.indexOf(this.focusedRadio)) {
          break;
        } else if (index - 1 < 0) {
          index = group.length - 1;
        } else {
          index -= 1;
        }
      }
    };
    this.keydownHandler = (e) => {
      const key = e.key;
      if (key in ArrowKeys && this.isInsideFoundationToolbar) {
        return true;
      }
      switch (key) {
        case keyEnter: {
          this.checkFocusedRadio();
          break;
        }
        case keyArrowRight:
        case keyArrowDown: {
          if (this.direction === Direction.ltr) {
            this.moveRight(e);
          } else {
            this.moveLeft(e);
          }
          break;
        }
        case keyArrowLeft:
        case keyArrowUp: {
          if (this.direction === Direction.ltr) {
            this.moveLeft(e);
          } else {
            this.moveRight(e);
          }
          break;
        }
        default: {
          return true;
        }
      }
    };
  }
  readOnlyChanged() {
    if (this.slottedRadioButtons !== void 0) {
      this.slottedRadioButtons.forEach((radio) => {
        if (this.readOnly) {
          radio.readOnly = true;
        } else {
          radio.readOnly = false;
        }
      });
    }
  }
  disabledChanged() {
    if (this.slottedRadioButtons !== void 0) {
      this.slottedRadioButtons.forEach((radio) => {
        if (this.disabled) {
          radio.disabled = true;
        } else {
          radio.disabled = false;
        }
      });
    }
  }
  nameChanged() {
    if (this.slottedRadioButtons) {
      this.slottedRadioButtons.forEach((radio) => {
        radio.setAttribute("name", this.name);
      });
    }
  }
  valueChanged() {
    if (this.slottedRadioButtons) {
      this.slottedRadioButtons.forEach((radio) => {
        if (radio.value === this.value) {
          radio.checked = true;
          this.selectedRadio = radio;
        }
      });
    }
    this.$emit("change");
  }
  slottedRadioButtonsChanged(oldValue, newValue) {
    if (this.slottedRadioButtons && this.slottedRadioButtons.length > 0) {
      this.setupRadioButtons();
    }
  }
  get parentToolbar() {
    return this.closest('[role="toolbar"]');
  }
  get isInsideToolbar() {
    var _a;
    return (_a = this.parentToolbar) !== null && _a !== void 0 ? _a : false;
  }
  get isInsideFoundationToolbar() {
    var _a;
    return !!((_a = this.parentToolbar) === null || _a === void 0 ? void 0 : _a["$fastController"]);
  }
  /**
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    this.direction = getDirection(this);
    this.setupRadioButtons();
  }
  disconnectedCallback() {
    this.slottedRadioButtons.forEach((radio) => {
      radio.removeEventListener("change", this.radioChangeHandler);
    });
  }
  setupRadioButtons() {
    const checkedRadios = this.slottedRadioButtons.filter((radio) => {
      return radio.hasAttribute("checked");
    });
    const numberOfCheckedRadios = checkedRadios ? checkedRadios.length : 0;
    if (numberOfCheckedRadios > 1) {
      const lastCheckedRadio = checkedRadios[numberOfCheckedRadios - 1];
      lastCheckedRadio.checked = true;
    }
    let foundMatchingVal = false;
    this.slottedRadioButtons.forEach((radio) => {
      if (this.name !== void 0) {
        radio.setAttribute("name", this.name);
      }
      if (this.disabled) {
        radio.disabled = true;
      }
      if (this.readOnly) {
        radio.readOnly = true;
      }
      if (this.value && this.value === radio.value) {
        this.selectedRadio = radio;
        this.focusedRadio = radio;
        radio.checked = true;
        radio.setAttribute("tabindex", "0");
        foundMatchingVal = true;
      } else {
        if (!this.isInsideFoundationToolbar) {
          radio.setAttribute("tabindex", "-1");
        }
        radio.checked = false;
      }
      radio.addEventListener("change", this.radioChangeHandler);
    });
    if (this.value === void 0 && this.slottedRadioButtons.length > 0) {
      const checkedRadios2 = this.slottedRadioButtons.filter((radio) => {
        return radio.hasAttribute("checked");
      });
      const numberOfCheckedRadios2 = checkedRadios2 !== null ? checkedRadios2.length : 0;
      if (numberOfCheckedRadios2 > 0 && !foundMatchingVal) {
        const lastCheckedRadio = checkedRadios2[numberOfCheckedRadios2 - 1];
        lastCheckedRadio.checked = true;
        this.focusedRadio = lastCheckedRadio;
        lastCheckedRadio.setAttribute("tabindex", "0");
      } else {
        this.slottedRadioButtons[0].setAttribute("tabindex", "0");
        this.focusedRadio = this.slottedRadioButtons[0];
      }
    }
  }
};
__decorate$1([
  attr({ attribute: "readonly", mode: "boolean" })
], RadioGroup$1.prototype, "readOnly", void 0);
__decorate$1([
  attr({ attribute: "disabled", mode: "boolean" })
], RadioGroup$1.prototype, "disabled", void 0);
__decorate$1([
  attr
], RadioGroup$1.prototype, "name", void 0);
__decorate$1([
  attr
], RadioGroup$1.prototype, "value", void 0);
__decorate$1([
  attr
], RadioGroup$1.prototype, "orientation", void 0);
__decorate$1([
  observable
], RadioGroup$1.prototype, "childItems", void 0);
__decorate$1([
  observable
], RadioGroup$1.prototype, "slottedRadioButtons", void 0);
const radioTemplate = (context, definition) => html`
    <template
        role="radio"
        class="${(x2) => x2.checked ? "checked" : ""} ${(x2) => x2.readOnly ? "readonly" : ""}"
        aria-checked="${(x2) => x2.checked}"
        aria-required="${(x2) => x2.required}"
        aria-disabled="${(x2) => x2.disabled}"
        aria-readonly="${(x2) => x2.readOnly}"
        @keypress="${(x2, c) => x2.keypressHandler(c.event)}"
        @click="${(x2, c) => x2.clickHandler(c.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${definition.checkedIndicator || ""}
            </slot>
        </div>
        <label
            part="label"
            class="${(x2) => x2.defaultSlottedNodes && x2.defaultSlottedNodes.length ? "label" : "label label__hidden"}"
        >
            <slot ${slotted("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;
class _Radio extends FoundationElement {
}
class FormAssociatedRadio extends CheckableFormAssociated(_Radio) {
  constructor() {
    super(...arguments);
    this.proxy = document.createElement("input");
  }
}
let Radio$1 = class Radio extends FormAssociatedRadio {
  constructor() {
    super();
    this.initialValue = "on";
    this.keypressHandler = (e) => {
      switch (e.key) {
        case keySpace:
          if (!this.checked && !this.readOnly) {
            this.checked = true;
          }
          return;
      }
      return true;
    };
    this.proxy.setAttribute("type", "radio");
  }
  readOnlyChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.readOnly = this.readOnly;
    }
  }
  /**
   * @internal
   */
  defaultCheckedChanged() {
    var _a;
    if (this.$fastController.isConnected && !this.dirtyChecked) {
      if (!this.isInsideRadioGroup()) {
        this.checked = (_a = this.defaultChecked) !== null && _a !== void 0 ? _a : false;
        this.dirtyChecked = false;
      }
    }
  }
  /**
   * @internal
   */
  connectedCallback() {
    var _a, _b;
    super.connectedCallback();
    this.validate();
    if (((_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.getAttribute("role")) !== "radiogroup" && this.getAttribute("tabindex") === null) {
      if (!this.disabled) {
        this.setAttribute("tabindex", "0");
      }
    }
    if (this.checkedAttribute) {
      if (!this.dirtyChecked) {
        if (!this.isInsideRadioGroup()) {
          this.checked = (_b = this.defaultChecked) !== null && _b !== void 0 ? _b : false;
          this.dirtyChecked = false;
        }
      }
    }
  }
  isInsideRadioGroup() {
    const parent = this.closest("[role=radiogroup]");
    return parent !== null;
  }
  /**
   * @internal
   */
  clickHandler(e) {
    if (!this.disabled && !this.readOnly && !this.checked) {
      this.checked = true;
    }
  }
};
__decorate$1([
  attr({ attribute: "readonly", mode: "boolean" })
], Radio$1.prototype, "readOnly", void 0);
__decorate$1([
  observable
], Radio$1.prototype, "name", void 0);
__decorate$1([
  observable
], Radio$1.prototype, "defaultSlottedNodes", void 0);
function whitespaceFilter(value, index, array) {
  return value.nodeType !== Node.TEXT_NODE ? true : typeof value.nodeValue === "string" && !!value.nodeValue.trim().length;
}
class _Select extends ListboxElement {
}
class FormAssociatedSelect extends FormAssociated(_Select) {
  constructor() {
    super(...arguments);
    this.proxy = document.createElement("select");
  }
}
class Select extends FormAssociatedSelect {
  constructor() {
    super(...arguments);
    this.open = false;
    this.forcedPosition = false;
    this.listboxId = uniqueId("listbox-");
    this.maxHeight = 0;
  }
  /**
   * Sets focus and synchronizes ARIA attributes when the open property changes.
   *
   * @param prev - the previous open value
   * @param next - the current open value
   *
   * @internal
   */
  openChanged(prev, next) {
    if (!this.collapsible) {
      return;
    }
    if (this.open) {
      this.ariaControls = this.listboxId;
      this.ariaExpanded = "true";
      this.setPositioning();
      this.focusAndScrollOptionIntoView();
      this.indexWhenOpened = this.selectedIndex;
      DOM.queueUpdate(() => this.focus());
      return;
    }
    this.ariaControls = "";
    this.ariaExpanded = "false";
  }
  /**
   * The component is collapsible when in single-selection mode with no size attribute.
   *
   * @internal
   */
  get collapsible() {
    return !(this.multiple || typeof this.size === "number");
  }
  /**
   * The value property.
   *
   * @public
   */
  get value() {
    Observable.track(this, "value");
    return this._value;
  }
  set value(next) {
    var _a, _b, _c, _d, _e, _f, _g;
    const prev = `${this._value}`;
    if ((_a = this._options) === null || _a === void 0 ? void 0 : _a.length) {
      const selectedIndex = this._options.findIndex((el2) => el2.value === next);
      const prevSelectedValue = (_c = (_b = this._options[this.selectedIndex]) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : null;
      const nextSelectedValue = (_e = (_d = this._options[selectedIndex]) === null || _d === void 0 ? void 0 : _d.value) !== null && _e !== void 0 ? _e : null;
      if (selectedIndex === -1 || prevSelectedValue !== nextSelectedValue) {
        next = "";
        this.selectedIndex = selectedIndex;
      }
      next = (_g = (_f = this.firstSelectedOption) === null || _f === void 0 ? void 0 : _f.value) !== null && _g !== void 0 ? _g : next;
    }
    if (prev !== next) {
      this._value = next;
      super.valueChanged(prev, next);
      Observable.notify(this, "value");
      this.updateDisplayValue();
    }
  }
  /**
   * Sets the value and display value to match the first selected option.
   *
   * @param shouldEmit - if true, the input and change events will be emitted
   *
   * @internal
   */
  updateValue(shouldEmit) {
    var _a, _b;
    if (this.$fastController.isConnected) {
      this.value = (_b = (_a = this.firstSelectedOption) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "";
    }
    if (shouldEmit) {
      this.$emit("input");
      this.$emit("change", this, {
        bubbles: true,
        composed: void 0
      });
    }
  }
  /**
   * Updates the proxy value when the selected index changes.
   *
   * @param prev - the previous selected index
   * @param next - the next selected index
   *
   * @internal
   */
  selectedIndexChanged(prev, next) {
    super.selectedIndexChanged(prev, next);
    this.updateValue();
  }
  positionChanged(prev, next) {
    this.positionAttribute = next;
    this.setPositioning();
  }
  /**
   * Calculate and apply listbox positioning based on available viewport space.
   *
   * @public
   */
  setPositioning() {
    const currentBox = this.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const availableBottom = viewportHeight - currentBox.bottom;
    this.position = this.forcedPosition ? this.positionAttribute : currentBox.top > availableBottom ? SelectPosition.above : SelectPosition.below;
    this.positionAttribute = this.forcedPosition ? this.positionAttribute : this.position;
    this.maxHeight = this.position === SelectPosition.above ? ~~currentBox.top : ~~availableBottom;
  }
  /**
   * The value displayed on the button.
   *
   * @public
   */
  get displayValue() {
    var _a, _b;
    Observable.track(this, "displayValue");
    return (_b = (_a = this.firstSelectedOption) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : "";
  }
  /**
   * Synchronize the `aria-disabled` property when the `disabled` property changes.
   *
   * @param prev - The previous disabled value
   * @param next - The next disabled value
   *
   * @internal
   */
  disabledChanged(prev, next) {
    if (super.disabledChanged) {
      super.disabledChanged(prev, next);
    }
    this.ariaDisabled = this.disabled ? "true" : "false";
  }
  /**
   * Reset the element to its first selectable option when its parent form is reset.
   *
   * @internal
   */
  formResetCallback() {
    this.setProxyOptions();
    super.setDefaultSelectedOption();
    if (this.selectedIndex === -1) {
      this.selectedIndex = 0;
    }
  }
  /**
   * Handle opening and closing the listbox when the select is clicked.
   *
   * @param e - the mouse event
   * @internal
   */
  clickHandler(e) {
    if (this.disabled) {
      return;
    }
    if (this.open) {
      const captured = e.target.closest(`option,[role=option]`);
      if (captured && captured.disabled) {
        return;
      }
    }
    super.clickHandler(e);
    this.open = this.collapsible && !this.open;
    if (!this.open && this.indexWhenOpened !== this.selectedIndex) {
      this.updateValue(true);
    }
    return true;
  }
  /**
   * Handles focus state when the element or its children lose focus.
   *
   * @param e - The focus event
   * @internal
   */
  focusoutHandler(e) {
    var _a;
    super.focusoutHandler(e);
    if (!this.open) {
      return true;
    }
    const focusTarget = e.relatedTarget;
    if (this.isSameNode(focusTarget)) {
      this.focus();
      return;
    }
    if (!((_a = this.options) === null || _a === void 0 ? void 0 : _a.includes(focusTarget))) {
      this.open = false;
      if (this.indexWhenOpened !== this.selectedIndex) {
        this.updateValue(true);
      }
    }
  }
  /**
   * Updates the value when an option's value changes.
   *
   * @param source - the source object
   * @param propertyName - the property to evaluate
   *
   * @internal
   * @override
   */
  handleChange(source, propertyName) {
    super.handleChange(source, propertyName);
    if (propertyName === "value") {
      this.updateValue();
    }
  }
  /**
   * Synchronize the form-associated proxy and updates the value property of the element.
   *
   * @param prev - the previous collection of slotted option elements
   * @param next - the next collection of slotted option elements
   *
   * @internal
   */
  slottedOptionsChanged(prev, next) {
    this.options.forEach((o) => {
      const notifier = Observable.getNotifier(o);
      notifier.unsubscribe(this, "value");
    });
    super.slottedOptionsChanged(prev, next);
    this.options.forEach((o) => {
      const notifier = Observable.getNotifier(o);
      notifier.subscribe(this, "value");
    });
    this.setProxyOptions();
    this.updateValue();
  }
  /**
   * Prevents focus when size is set and a scrollbar is clicked.
   *
   * @param e - the mouse event object
   *
   * @override
   * @internal
   */
  mousedownHandler(e) {
    var _a;
    if (e.offsetX >= 0 && e.offsetX <= ((_a = this.listbox) === null || _a === void 0 ? void 0 : _a.scrollWidth)) {
      return super.mousedownHandler(e);
    }
    return this.collapsible;
  }
  /**
   * Sets the multiple property on the proxy element.
   *
   * @param prev - the previous multiple value
   * @param next - the current multiple value
   */
  multipleChanged(prev, next) {
    super.multipleChanged(prev, next);
    if (this.proxy) {
      this.proxy.multiple = next;
    }
  }
  /**
   * Updates the selectedness of each option when the list of selected options changes.
   *
   * @param prev - the previous list of selected options
   * @param next - the current list of selected options
   *
   * @override
   * @internal
   */
  selectedOptionsChanged(prev, next) {
    var _a;
    super.selectedOptionsChanged(prev, next);
    (_a = this.options) === null || _a === void 0 ? void 0 : _a.forEach((o, i) => {
      var _a2;
      const proxyOption = (_a2 = this.proxy) === null || _a2 === void 0 ? void 0 : _a2.options.item(i);
      if (proxyOption) {
        proxyOption.selected = o.selected;
      }
    });
  }
  /**
   * Sets the selected index to match the first option with the selected attribute, or
   * the first selectable option.
   *
   * @override
   * @internal
   */
  setDefaultSelectedOption() {
    var _a;
    const options = (_a = this.options) !== null && _a !== void 0 ? _a : Array.from(this.children).filter(Listbox.slottedOptionFilter);
    const selectedIndex = options === null || options === void 0 ? void 0 : options.findIndex((el2) => el2.hasAttribute("selected") || el2.selected || el2.value === this.value);
    if (selectedIndex !== -1) {
      this.selectedIndex = selectedIndex;
      return;
    }
    this.selectedIndex = 0;
  }
  /**
   * Resets and fills the proxy to match the component's options.
   *
   * @internal
   */
  setProxyOptions() {
    if (this.proxy instanceof HTMLSelectElement && this.options) {
      this.proxy.options.length = 0;
      this.options.forEach((option) => {
        const proxyOption = option.proxy || (option instanceof HTMLOptionElement ? option.cloneNode() : null);
        if (proxyOption) {
          this.proxy.options.add(proxyOption);
        }
      });
    }
  }
  /**
   * Handle keyboard interaction for the select.
   *
   * @param e - the keyboard event
   * @internal
   */
  keydownHandler(e) {
    super.keydownHandler(e);
    const key = e.key || e.key.charCodeAt(0);
    switch (key) {
      case keySpace: {
        e.preventDefault();
        if (this.collapsible && this.typeAheadExpired) {
          this.open = !this.open;
        }
        break;
      }
      case keyHome:
      case keyEnd: {
        e.preventDefault();
        break;
      }
      case keyEnter: {
        e.preventDefault();
        this.open = !this.open;
        break;
      }
      case keyEscape: {
        if (this.collapsible && this.open) {
          e.preventDefault();
          this.open = false;
        }
        break;
      }
      case keyTab: {
        if (this.collapsible && this.open) {
          e.preventDefault();
          this.open = false;
        }
        return true;
      }
    }
    if (!this.open && this.indexWhenOpened !== this.selectedIndex) {
      this.updateValue(true);
      this.indexWhenOpened = this.selectedIndex;
    }
    return !(key === keyArrowDown || key === keyArrowUp);
  }
  connectedCallback() {
    super.connectedCallback();
    this.forcedPosition = !!this.positionAttribute;
    this.addEventListener("contentchange", this.updateDisplayValue);
  }
  disconnectedCallback() {
    this.removeEventListener("contentchange", this.updateDisplayValue);
    super.disconnectedCallback();
  }
  /**
   * Updates the proxy's size property when the size attribute changes.
   *
   * @param prev - the previous size
   * @param next - the current size
   *
   * @override
   * @internal
   */
  sizeChanged(prev, next) {
    super.sizeChanged(prev, next);
    if (this.proxy) {
      this.proxy.size = next;
    }
  }
  /**
   *
   * @internal
   */
  updateDisplayValue() {
    if (this.collapsible) {
      Observable.notify(this, "displayValue");
    }
  }
}
__decorate$1([
  attr({ attribute: "open", mode: "boolean" })
], Select.prototype, "open", void 0);
__decorate$1([
  volatile
], Select.prototype, "collapsible", null);
__decorate$1([
  observable
], Select.prototype, "control", void 0);
__decorate$1([
  attr({ attribute: "position" })
], Select.prototype, "positionAttribute", void 0);
__decorate$1([
  observable
], Select.prototype, "position", void 0);
__decorate$1([
  observable
], Select.prototype, "maxHeight", void 0);
class DelegatesARIASelect {
}
__decorate$1([
  observable
], DelegatesARIASelect.prototype, "ariaControls", void 0);
applyMixins(DelegatesARIASelect, DelegatesARIAListbox);
applyMixins(Select, StartEnd, DelegatesARIASelect);
const selectTemplate = (context, definition) => html`
    <template
        class="${(x2) => [
  x2.collapsible && "collapsible",
  x2.collapsible && x2.open && "open",
  x2.disabled && "disabled",
  x2.collapsible && x2.position
].filter(Boolean).join(" ")}"
        aria-activedescendant="${(x2) => x2.ariaActiveDescendant}"
        aria-controls="${(x2) => x2.ariaControls}"
        aria-disabled="${(x2) => x2.ariaDisabled}"
        aria-expanded="${(x2) => x2.ariaExpanded}"
        aria-haspopup="${(x2) => x2.collapsible ? "listbox" : null}"
        aria-multiselectable="${(x2) => x2.ariaMultiSelectable}"
        ?open="${(x2) => x2.open}"
        role="combobox"
        tabindex="${(x2) => !x2.disabled ? "0" : null}"
        @click="${(x2, c) => x2.clickHandler(c.event)}"
        @focusin="${(x2, c) => x2.focusinHandler(c.event)}"
        @focusout="${(x2, c) => x2.focusoutHandler(c.event)}"
        @keydown="${(x2, c) => x2.keydownHandler(c.event)}"
        @mousedown="${(x2, c) => x2.mousedownHandler(c.event)}"
    >
        ${when((x2) => x2.collapsible, html`
                <div
                    class="control"
                    part="control"
                    ?disabled="${(x2) => x2.disabled}"
                    ${ref("control")}
                >
                    ${startSlotTemplate(context, definition)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${(x2) => x2.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${definition.indicator || ""}
                            </slot>
                        </div>
                    </slot>
                    ${endSlotTemplate(context, definition)}
                </div>
            `)}
        <div
            class="listbox"
            id="${(x2) => x2.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${(x2) => x2.disabled}"
            ?hidden="${(x2) => x2.collapsible ? !x2.open : false}"
            ${ref("listbox")}
        >
            <slot
                ${slotted({
  filter: Listbox.slottedOptionFilter,
  flatten: true,
  property: "slottedOptions"
})}
            ></slot>
        </div>
    </template>
`;
const tabPanelTemplate = (context, definition) => html`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;
class TabPanel extends FoundationElement {
}
const tabTemplate = (context, definition) => html`
    <template slot="tab" role="tab" aria-disabled="${(x2) => x2.disabled}">
        <slot></slot>
    </template>
`;
class Tab extends FoundationElement {
}
__decorate$1([
  attr({ mode: "boolean" })
], Tab.prototype, "disabled", void 0);
const tabsTemplate = (context, definition) => html`
    <template class="${(x2) => x2.orientation}">
        ${startSlotTemplate(context, definition)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${slotted("tabs")}></slot>

            ${when((x2) => x2.showActiveIndicator, html`
                    <div
                        ${ref("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${endSlotTemplate(context, definition)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${slotted("tabpanels")}></slot>
        </div>
    </template>
`;
const TabsOrientation = {
  vertical: "vertical",
  horizontal: "horizontal"
};
class Tabs extends FoundationElement {
  constructor() {
    super(...arguments);
    this.orientation = TabsOrientation.horizontal;
    this.activeindicator = true;
    this.showActiveIndicator = true;
    this.prevActiveTabIndex = 0;
    this.activeTabIndex = 0;
    this.ticking = false;
    this.change = () => {
      this.$emit("change", this.activetab);
    };
    this.isDisabledElement = (el2) => {
      return el2.getAttribute("aria-disabled") === "true";
    };
    this.isHiddenElement = (el2) => {
      return el2.hasAttribute("hidden");
    };
    this.isFocusableElement = (el2) => {
      return !this.isDisabledElement(el2) && !this.isHiddenElement(el2);
    };
    this.setTabs = () => {
      const gridHorizontalProperty = "gridColumn";
      const gridVerticalProperty = "gridRow";
      const gridProperty = this.isHorizontal() ? gridHorizontalProperty : gridVerticalProperty;
      this.activeTabIndex = this.getActiveIndex();
      this.showActiveIndicator = false;
      this.tabs.forEach((tab, index) => {
        if (tab.slot === "tab") {
          const isActiveTab = this.activeTabIndex === index && this.isFocusableElement(tab);
          if (this.activeindicator && this.isFocusableElement(tab)) {
            this.showActiveIndicator = true;
          }
          const tabId = this.tabIds[index];
          const tabpanelId = this.tabpanelIds[index];
          tab.setAttribute("id", tabId);
          tab.setAttribute("aria-selected", isActiveTab ? "true" : "false");
          tab.setAttribute("aria-controls", tabpanelId);
          tab.addEventListener("click", this.handleTabClick);
          tab.addEventListener("keydown", this.handleTabKeyDown);
          tab.setAttribute("tabindex", isActiveTab ? "0" : "-1");
          if (isActiveTab) {
            this.activetab = tab;
            this.activeid = tabId;
          }
        }
        tab.style[gridHorizontalProperty] = "";
        tab.style[gridVerticalProperty] = "";
        tab.style[gridProperty] = `${index + 1}`;
        !this.isHorizontal() ? tab.classList.add("vertical") : tab.classList.remove("vertical");
      });
    };
    this.setTabPanels = () => {
      this.tabpanels.forEach((tabpanel, index) => {
        const tabId = this.tabIds[index];
        const tabpanelId = this.tabpanelIds[index];
        tabpanel.setAttribute("id", tabpanelId);
        tabpanel.setAttribute("aria-labelledby", tabId);
        this.activeTabIndex !== index ? tabpanel.setAttribute("hidden", "") : tabpanel.removeAttribute("hidden");
      });
    };
    this.handleTabClick = (event) => {
      const selectedTab = event.currentTarget;
      if (selectedTab.nodeType === 1 && this.isFocusableElement(selectedTab)) {
        this.prevActiveTabIndex = this.activeTabIndex;
        this.activeTabIndex = this.tabs.indexOf(selectedTab);
        this.setComponent();
      }
    };
    this.handleTabKeyDown = (event) => {
      if (this.isHorizontal()) {
        switch (event.key) {
          case keyArrowLeft:
            event.preventDefault();
            this.adjustBackward(event);
            break;
          case keyArrowRight:
            event.preventDefault();
            this.adjustForward(event);
            break;
        }
      } else {
        switch (event.key) {
          case keyArrowUp:
            event.preventDefault();
            this.adjustBackward(event);
            break;
          case keyArrowDown:
            event.preventDefault();
            this.adjustForward(event);
            break;
        }
      }
      switch (event.key) {
        case keyHome:
          event.preventDefault();
          this.adjust(-this.activeTabIndex);
          break;
        case keyEnd:
          event.preventDefault();
          this.adjust(this.tabs.length - this.activeTabIndex - 1);
          break;
      }
    };
    this.adjustForward = (e) => {
      const group = this.tabs;
      let index = 0;
      index = this.activetab ? group.indexOf(this.activetab) + 1 : 1;
      if (index === group.length) {
        index = 0;
      }
      while (index < group.length && group.length > 1) {
        if (this.isFocusableElement(group[index])) {
          this.moveToTabByIndex(group, index);
          break;
        } else if (this.activetab && index === group.indexOf(this.activetab)) {
          break;
        } else if (index + 1 >= group.length) {
          index = 0;
        } else {
          index += 1;
        }
      }
    };
    this.adjustBackward = (e) => {
      const group = this.tabs;
      let index = 0;
      index = this.activetab ? group.indexOf(this.activetab) - 1 : 0;
      index = index < 0 ? group.length - 1 : index;
      while (index >= 0 && group.length > 1) {
        if (this.isFocusableElement(group[index])) {
          this.moveToTabByIndex(group, index);
          break;
        } else if (index - 1 < 0) {
          index = group.length - 1;
        } else {
          index -= 1;
        }
      }
    };
    this.moveToTabByIndex = (group, index) => {
      const tab = group[index];
      this.activetab = tab;
      this.prevActiveTabIndex = this.activeTabIndex;
      this.activeTabIndex = index;
      tab.focus();
      this.setComponent();
    };
  }
  /**
   * @internal
   */
  orientationChanged() {
    if (this.$fastController.isConnected) {
      this.setTabs();
      this.setTabPanels();
      this.handleActiveIndicatorPosition();
    }
  }
  /**
   * @internal
   */
  activeidChanged(oldValue, newValue) {
    if (this.$fastController.isConnected && this.tabs.length <= this.tabpanels.length) {
      this.prevActiveTabIndex = this.tabs.findIndex((item) => item.id === oldValue);
      this.setTabs();
      this.setTabPanels();
      this.handleActiveIndicatorPosition();
    }
  }
  /**
   * @internal
   */
  tabsChanged() {
    if (this.$fastController.isConnected && this.tabs.length <= this.tabpanels.length) {
      this.tabIds = this.getTabIds();
      this.tabpanelIds = this.getTabPanelIds();
      this.setTabs();
      this.setTabPanels();
      this.handleActiveIndicatorPosition();
    }
  }
  /**
   * @internal
   */
  tabpanelsChanged() {
    if (this.$fastController.isConnected && this.tabpanels.length <= this.tabs.length) {
      this.tabIds = this.getTabIds();
      this.tabpanelIds = this.getTabPanelIds();
      this.setTabs();
      this.setTabPanels();
      this.handleActiveIndicatorPosition();
    }
  }
  getActiveIndex() {
    const id2 = this.activeid;
    if (id2 !== void 0) {
      return this.tabIds.indexOf(this.activeid) === -1 ? 0 : this.tabIds.indexOf(this.activeid);
    } else {
      return 0;
    }
  }
  getTabIds() {
    return this.tabs.map((tab) => {
      var _a;
      return (_a = tab.getAttribute("id")) !== null && _a !== void 0 ? _a : `tab-${uniqueId()}`;
    });
  }
  getTabPanelIds() {
    return this.tabpanels.map((tabPanel) => {
      var _a;
      return (_a = tabPanel.getAttribute("id")) !== null && _a !== void 0 ? _a : `panel-${uniqueId()}`;
    });
  }
  setComponent() {
    if (this.activeTabIndex !== this.prevActiveTabIndex) {
      this.activeid = this.tabIds[this.activeTabIndex];
      this.focusTab();
      this.change();
    }
  }
  isHorizontal() {
    return this.orientation === TabsOrientation.horizontal;
  }
  handleActiveIndicatorPosition() {
    if (this.showActiveIndicator && this.activeindicator && this.activeTabIndex !== this.prevActiveTabIndex) {
      if (this.ticking) {
        this.ticking = false;
      } else {
        this.ticking = true;
        this.animateActiveIndicator();
      }
    }
  }
  animateActiveIndicator() {
    this.ticking = true;
    const gridProperty = this.isHorizontal() ? "gridColumn" : "gridRow";
    const translateProperty = this.isHorizontal() ? "translateX" : "translateY";
    const offsetProperty = this.isHorizontal() ? "offsetLeft" : "offsetTop";
    const prev = this.activeIndicatorRef[offsetProperty];
    this.activeIndicatorRef.style[gridProperty] = `${this.activeTabIndex + 1}`;
    const next = this.activeIndicatorRef[offsetProperty];
    this.activeIndicatorRef.style[gridProperty] = `${this.prevActiveTabIndex + 1}`;
    const dif = next - prev;
    this.activeIndicatorRef.style.transform = `${translateProperty}(${dif}px)`;
    this.activeIndicatorRef.classList.add("activeIndicatorTransition");
    this.activeIndicatorRef.addEventListener("transitionend", () => {
      this.ticking = false;
      this.activeIndicatorRef.style[gridProperty] = `${this.activeTabIndex + 1}`;
      this.activeIndicatorRef.style.transform = `${translateProperty}(0px)`;
      this.activeIndicatorRef.classList.remove("activeIndicatorTransition");
    });
  }
  /**
   * The adjust method for FASTTabs
   * @public
   * @remarks
   * This method allows the active index to be adjusted by numerical increments
   */
  adjust(adjustment) {
    const focusableTabs = this.tabs.filter((t2) => this.isFocusableElement(t2));
    const currentActiveTabIndex = focusableTabs.indexOf(this.activetab);
    const nextTabIndex = limit(0, focusableTabs.length - 1, currentActiveTabIndex + adjustment);
    const nextIndex = this.tabs.indexOf(focusableTabs[nextTabIndex]);
    if (nextIndex > -1) {
      this.moveToTabByIndex(this.tabs, nextIndex);
    }
  }
  focusTab() {
    this.tabs[this.activeTabIndex].focus();
  }
  /**
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    this.tabIds = this.getTabIds();
    this.tabpanelIds = this.getTabPanelIds();
    this.activeTabIndex = this.getActiveIndex();
  }
}
__decorate$1([
  attr
], Tabs.prototype, "orientation", void 0);
__decorate$1([
  attr
], Tabs.prototype, "activeid", void 0);
__decorate$1([
  observable
], Tabs.prototype, "tabs", void 0);
__decorate$1([
  observable
], Tabs.prototype, "tabpanels", void 0);
__decorate$1([
  attr({ mode: "boolean" })
], Tabs.prototype, "activeindicator", void 0);
__decorate$1([
  observable
], Tabs.prototype, "activeIndicatorRef", void 0);
__decorate$1([
  observable
], Tabs.prototype, "showActiveIndicator", void 0);
applyMixins(Tabs, StartEnd);
class _TextArea extends FoundationElement {
}
class FormAssociatedTextArea extends FormAssociated(_TextArea) {
  constructor() {
    super(...arguments);
    this.proxy = document.createElement("textarea");
  }
}
const TextAreaResize = {
  /**
   * No resize.
   */
  none: "none",
  /**
   * Resize vertically and horizontally.
   */
  both: "both",
  /**
   * Resize horizontally.
   */
  horizontal: "horizontal",
  /**
   * Resize vertically.
   */
  vertical: "vertical"
};
let TextArea$1 = class TextArea extends FormAssociatedTextArea {
  constructor() {
    super(...arguments);
    this.resize = TextAreaResize.none;
    this.cols = 20;
    this.handleTextInput = () => {
      this.value = this.control.value;
    };
  }
  readOnlyChanged() {
    if (this.proxy instanceof HTMLTextAreaElement) {
      this.proxy.readOnly = this.readOnly;
    }
  }
  autofocusChanged() {
    if (this.proxy instanceof HTMLTextAreaElement) {
      this.proxy.autofocus = this.autofocus;
    }
  }
  listChanged() {
    if (this.proxy instanceof HTMLTextAreaElement) {
      this.proxy.setAttribute("list", this.list);
    }
  }
  maxlengthChanged() {
    if (this.proxy instanceof HTMLTextAreaElement) {
      this.proxy.maxLength = this.maxlength;
    }
  }
  minlengthChanged() {
    if (this.proxy instanceof HTMLTextAreaElement) {
      this.proxy.minLength = this.minlength;
    }
  }
  spellcheckChanged() {
    if (this.proxy instanceof HTMLTextAreaElement) {
      this.proxy.spellcheck = this.spellcheck;
    }
  }
  /**
   * Selects all the text in the text area
   *
   * @public
   */
  select() {
    this.control.select();
    this.$emit("select");
  }
  /**
   * Change event handler for inner control.
   * @remarks
   * "Change" events are not `composable` so they will not
   * permeate the shadow DOM boundary. This fn effectively proxies
   * the change event, emitting a `change` event whenever the internal
   * control emits a `change` event
   * @internal
   */
  handleChange() {
    this.$emit("change");
  }
  /** {@inheritDoc (FormAssociated:interface).validate} */
  validate() {
    super.validate(this.control);
  }
};
__decorate$1([
  attr({ mode: "boolean" })
], TextArea$1.prototype, "readOnly", void 0);
__decorate$1([
  attr
], TextArea$1.prototype, "resize", void 0);
__decorate$1([
  attr({ mode: "boolean" })
], TextArea$1.prototype, "autofocus", void 0);
__decorate$1([
  attr({ attribute: "form" })
], TextArea$1.prototype, "formId", void 0);
__decorate$1([
  attr
], TextArea$1.prototype, "list", void 0);
__decorate$1([
  attr({ converter: nullableNumberConverter })
], TextArea$1.prototype, "maxlength", void 0);
__decorate$1([
  attr({ converter: nullableNumberConverter })
], TextArea$1.prototype, "minlength", void 0);
__decorate$1([
  attr
], TextArea$1.prototype, "name", void 0);
__decorate$1([
  attr
], TextArea$1.prototype, "placeholder", void 0);
__decorate$1([
  attr({ converter: nullableNumberConverter, mode: "fromView" })
], TextArea$1.prototype, "cols", void 0);
__decorate$1([
  attr({ converter: nullableNumberConverter, mode: "fromView" })
], TextArea$1.prototype, "rows", void 0);
__decorate$1([
  attr({ mode: "boolean" })
], TextArea$1.prototype, "spellcheck", void 0);
__decorate$1([
  observable
], TextArea$1.prototype, "defaultSlottedNodes", void 0);
applyMixins(TextArea$1, DelegatesARIATextbox);
const textAreaTemplate = (context, definition) => html`
    <template
        class="
            ${(x2) => x2.readOnly ? "readonly" : ""}
            ${(x2) => x2.resize !== TextAreaResize.none ? `resize-${x2.resize}` : ""}"
    >
        <label
            part="label"
            for="control"
            class="${(x2) => x2.defaultSlottedNodes && x2.defaultSlottedNodes.length ? "label" : "label label__hidden"}"
        >
            <slot ${slotted("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${(x2) => x2.autofocus}"
            cols="${(x2) => x2.cols}"
            ?disabled="${(x2) => x2.disabled}"
            form="${(x2) => x2.form}"
            list="${(x2) => x2.list}"
            maxlength="${(x2) => x2.maxlength}"
            minlength="${(x2) => x2.minlength}"
            name="${(x2) => x2.name}"
            placeholder="${(x2) => x2.placeholder}"
            ?readonly="${(x2) => x2.readOnly}"
            ?required="${(x2) => x2.required}"
            rows="${(x2) => x2.rows}"
            ?spellcheck="${(x2) => x2.spellcheck}"
            :value="${(x2) => x2.value}"
            aria-atomic="${(x2) => x2.ariaAtomic}"
            aria-busy="${(x2) => x2.ariaBusy}"
            aria-controls="${(x2) => x2.ariaControls}"
            aria-current="${(x2) => x2.ariaCurrent}"
            aria-describedby="${(x2) => x2.ariaDescribedby}"
            aria-details="${(x2) => x2.ariaDetails}"
            aria-disabled="${(x2) => x2.ariaDisabled}"
            aria-errormessage="${(x2) => x2.ariaErrormessage}"
            aria-flowto="${(x2) => x2.ariaFlowto}"
            aria-haspopup="${(x2) => x2.ariaHaspopup}"
            aria-hidden="${(x2) => x2.ariaHidden}"
            aria-invalid="${(x2) => x2.ariaInvalid}"
            aria-keyshortcuts="${(x2) => x2.ariaKeyshortcuts}"
            aria-label="${(x2) => x2.ariaLabel}"
            aria-labelledby="${(x2) => x2.ariaLabelledby}"
            aria-live="${(x2) => x2.ariaLive}"
            aria-owns="${(x2) => x2.ariaOwns}"
            aria-relevant="${(x2) => x2.ariaRelevant}"
            aria-roledescription="${(x2) => x2.ariaRoledescription}"
            @input="${(x2, c) => x2.handleTextInput()}"
            @change="${(x2) => x2.handleChange()}"
            ${ref("control")}
        ></textarea>
    </template>
`;
const textFieldTemplate = (context, definition) => html`
    <template
        class="
            ${(x2) => x2.readOnly ? "readonly" : ""}
        "
    >
        <label
            part="label"
            for="control"
            class="${(x2) => x2.defaultSlottedNodes && x2.defaultSlottedNodes.length ? "label" : "label label__hidden"}"
        >
            <slot
                ${slotted({ property: "defaultSlottedNodes", filter: whitespaceFilter })}
            ></slot>
        </label>
        <div class="root" part="root">
            ${startSlotTemplate(context, definition)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${(x2) => x2.handleTextInput()}"
                @change="${(x2) => x2.handleChange()}"
                ?autofocus="${(x2) => x2.autofocus}"
                ?disabled="${(x2) => x2.disabled}"
                list="${(x2) => x2.list}"
                maxlength="${(x2) => x2.maxlength}"
                minlength="${(x2) => x2.minlength}"
                pattern="${(x2) => x2.pattern}"
                placeholder="${(x2) => x2.placeholder}"
                ?readonly="${(x2) => x2.readOnly}"
                ?required="${(x2) => x2.required}"
                size="${(x2) => x2.size}"
                ?spellcheck="${(x2) => x2.spellcheck}"
                :value="${(x2) => x2.value}"
                type="${(x2) => x2.type}"
                aria-atomic="${(x2) => x2.ariaAtomic}"
                aria-busy="${(x2) => x2.ariaBusy}"
                aria-controls="${(x2) => x2.ariaControls}"
                aria-current="${(x2) => x2.ariaCurrent}"
                aria-describedby="${(x2) => x2.ariaDescribedby}"
                aria-details="${(x2) => x2.ariaDetails}"
                aria-disabled="${(x2) => x2.ariaDisabled}"
                aria-errormessage="${(x2) => x2.ariaErrormessage}"
                aria-flowto="${(x2) => x2.ariaFlowto}"
                aria-haspopup="${(x2) => x2.ariaHaspopup}"
                aria-hidden="${(x2) => x2.ariaHidden}"
                aria-invalid="${(x2) => x2.ariaInvalid}"
                aria-keyshortcuts="${(x2) => x2.ariaKeyshortcuts}"
                aria-label="${(x2) => x2.ariaLabel}"
                aria-labelledby="${(x2) => x2.ariaLabelledby}"
                aria-live="${(x2) => x2.ariaLive}"
                aria-owns="${(x2) => x2.ariaOwns}"
                aria-relevant="${(x2) => x2.ariaRelevant}"
                aria-roledescription="${(x2) => x2.ariaRoledescription}"
                ${ref("control")}
            />
            ${endSlotTemplate(context, definition)}
        </div>
    </template>
`;
const disabledCursor = "not-allowed";
const hidden = `:host([hidden]){display:none}`;
function display(displayValue) {
  return `${hidden}:host{display:${displayValue}}`;
}
const focusVisible = canUseFocusVisible() ? "focus-visible" : "focus";
const reservedReactProperties = /* @__PURE__ */ new Set([
  "children",
  "localName",
  "ref",
  "style",
  "className"
]);
const emptyProps = Object.freeze(/* @__PURE__ */ Object.create(null));
const DEFAULT_CACHE_NAME = "_default";
const wrappersCache = /* @__PURE__ */ new Map();
function setRef(ref2, value) {
  if (typeof ref2 === "function") {
    ref2(value);
  } else {
    ref2.current = value;
  }
}
function getTagName(type, config) {
  if (!config.name) {
    const definition = FASTElementDefinition.forType(type);
    if (definition) {
      config.name = definition.name;
    } else {
      throw new Error("React wrappers must wrap a FASTElement or be configured with a name.");
    }
  }
  return config.name;
}
function getElementEvents(config) {
  return config.events || (config.events = {});
}
function keyIsValid(type, config, name) {
  if (reservedReactProperties.has(name)) {
    console.warn(`${getTagName(type, config)} contains property ${name} which is a React reserved property. It will be used by React and not set on the element.`);
    return false;
  }
  return true;
}
function getElementKeys(type, config) {
  if (!config.keys) {
    if (config.properties) {
      config.keys = new Set(config.properties.concat(Object.keys(getElementEvents(config))));
    } else {
      const keys = new Set(Object.keys(getElementEvents(config)));
      const accessors = Observable.getAccessors(type.prototype);
      if (accessors.length > 0) {
        for (const a of accessors) {
          if (keyIsValid(type, config, a.name)) {
            keys.add(a.name);
          }
        }
      } else {
        for (const p2 in type.prototype) {
          if (!(p2 in HTMLElement.prototype) && keyIsValid(type, config, p2)) {
            keys.add(p2);
          }
        }
      }
      config.keys = keys;
    }
  }
  return config.keys;
}
function provideReactWrapper(React2, designSystem) {
  let registrations = [];
  const registry = {
    register(container2, ...rest) {
      registrations.forEach((x2) => x2.register(container2, ...rest));
      registrations = [];
    }
  };
  function wrap2(type, config = {}) {
    var _a, _b;
    if (type instanceof FoundationElementRegistry) {
      if (designSystem) {
        designSystem.register(type);
      } else {
        registrations.push(type);
      }
      type = type.type;
    }
    const cachedCandidates = wrappersCache.get(type);
    if (cachedCandidates) {
      const cachedWrapper = cachedCandidates.get((_a = config.name) !== null && _a !== void 0 ? _a : DEFAULT_CACHE_NAME);
      if (cachedWrapper) {
        return cachedWrapper;
      }
    }
    class ReactComponent extends React2.Component {
      constructor() {
        super(...arguments);
        this._element = null;
      }
      _updateElement(oldProps) {
        const element = this._element;
        if (element === null) {
          return;
        }
        const currentProps = this.props;
        const previousProps = oldProps || emptyProps;
        const events = getElementEvents(config);
        for (const key in this._elementProps) {
          const newValue = currentProps[key];
          const event = events[key];
          if (event === void 0) {
            element[key] = newValue;
          } else {
            const oldValue = previousProps[key];
            if (newValue === oldValue) {
              continue;
            }
            if (oldValue !== void 0) {
              element.removeEventListener(event, oldValue);
            }
            if (newValue !== void 0) {
              element.addEventListener(event, newValue);
            }
          }
        }
      }
      componentDidMount() {
        this._updateElement();
      }
      componentDidUpdate(old) {
        this._updateElement(old);
      }
      render() {
        const userRef = this.props.__forwardedRef;
        if (this._ref === void 0 || this._userRef !== userRef) {
          this._ref = (value) => {
            if (this._element === null) {
              this._element = value;
            }
            if (userRef !== null) {
              setRef(userRef, value);
            }
            this._userRef = userRef;
          };
        }
        const newReactProps = { ref: this._ref };
        const newElementProps = this._elementProps = {};
        const elementKeys = getElementKeys(type, config);
        const currentProps = this.props;
        for (const k2 in currentProps) {
          const v2 = currentProps[k2];
          if (elementKeys.has(k2)) {
            newElementProps[k2] = v2;
          } else {
            newReactProps[k2 === "className" ? "class" : k2] = v2;
          }
        }
        return React2.createElement(getTagName(type, config), newReactProps);
      }
    }
    const reactComponent = React2.forwardRef((props, ref2) => React2.createElement(ReactComponent, Object.assign(Object.assign({}, props), { __forwardedRef: ref2 }), props === null || props === void 0 ? void 0 : props.children));
    if (!wrappersCache.has(type)) {
      wrappersCache.set(type, /* @__PURE__ */ new Map());
    }
    wrappersCache.get(type).set((_b = config.name) !== null && _b !== void 0 ? _b : DEFAULT_CACHE_NAME, reactComponent);
    return reactComponent;
  }
  return { wrap: wrap2, registry };
}
function provideVSCodeDesignSystem(element) {
  return DesignSystem.getOrCreate(element).withPrefix("vscode");
}
function initThemeChangeListener(tokenMappings2) {
  window.addEventListener("load", () => {
    const observer = new MutationObserver(() => {
      applyCurrentTheme(tokenMappings2);
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"]
    });
    applyCurrentTheme(tokenMappings2);
  });
}
function applyCurrentTheme(tokenMappings2) {
  const styles = getComputedStyle(document.body);
  const body = document.querySelector("body");
  if (body) {
    const themeKind = body.getAttribute("data-vscode-theme-kind");
    for (const [vscodeTokenName, toolkitToken] of tokenMappings2) {
      let value = styles.getPropertyValue(vscodeTokenName).toString();
      if (themeKind === "vscode-high-contrast") {
        if (value.length === 0 && toolkitToken.name.includes("background")) {
          value = "transparent";
        }
        if (toolkitToken.name === "button-icon-hover-background") {
          value = "transparent";
        }
      } else if (themeKind === "vscode-high-contrast-light") {
        if (value.length === 0 && toolkitToken.name.includes("background")) {
          switch (toolkitToken.name) {
            case "button-primary-hover-background":
              value = "#0F4A85";
              break;
            case "button-secondary-hover-background":
              value = "transparent";
              break;
            case "button-icon-hover-background":
              value = "transparent";
              break;
          }
        }
      } else {
        if (toolkitToken.name === "contrast-active-border") {
          value = "transparent";
        }
      }
      toolkitToken.setValueFor(body, value);
    }
  }
}
const tokenMappings = /* @__PURE__ */ new Map();
let isThemeListenerInitialized = false;
function create(name, vscodeThemeVar) {
  const designToken = DesignToken.create(name);
  if (vscodeThemeVar) {
    if (vscodeThemeVar.includes("--fake-vscode-token")) {
      const uniqueId2 = "id" + Math.random().toString(16).slice(2);
      vscodeThemeVar = `${vscodeThemeVar}-${uniqueId2}`;
    }
    tokenMappings.set(vscodeThemeVar, designToken);
  }
  if (!isThemeListenerInitialized) {
    initThemeChangeListener(tokenMappings);
    isThemeListenerInitialized = true;
  }
  return designToken;
}
const background = create("background", "--vscode-editor-background").withDefault("#1e1e1e");
const borderWidth = create("border-width").withDefault(1);
const contrastActiveBorder = create("contrast-active-border", "--vscode-contrastActiveBorder").withDefault("#f38518");
create("contrast-border", "--vscode-contrastBorder").withDefault("#6fc3df");
const cornerRadius = create("corner-radius").withDefault(0);
const cornerRadiusRound = create("corner-radius-round").withDefault(2);
const designUnit = create("design-unit").withDefault(4);
const disabledOpacity = create("disabled-opacity").withDefault(0.4);
const focusBorder = create("focus-border", "--vscode-focusBorder").withDefault("#007fd4");
const fontFamily = create("font-family", "--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol");
create("font-weight", "--vscode-font-weight").withDefault("400");
const foreground = create("foreground", "--vscode-foreground").withDefault("#cccccc");
const inputHeight = create("input-height").withDefault("26");
const inputMinWidth = create("input-min-width").withDefault("100px");
const typeRampBaseFontSize = create("type-ramp-base-font-size", "--vscode-font-size").withDefault("13px");
const typeRampBaseLineHeight = create("type-ramp-base-line-height").withDefault("normal");
const typeRampMinus1FontSize = create("type-ramp-minus1-font-size").withDefault("11px");
const typeRampMinus1LineHeight = create("type-ramp-minus1-line-height").withDefault("16px");
create("type-ramp-minus2-font-size").withDefault("9px");
create("type-ramp-minus2-line-height").withDefault("16px");
create("type-ramp-plus1-font-size").withDefault("16px");
create("type-ramp-plus1-line-height").withDefault("24px");
const scrollbarWidth = create("scrollbarWidth").withDefault("10px");
const scrollbarHeight = create("scrollbarHeight").withDefault("10px");
const scrollbarSliderBackground = create("scrollbar-slider-background", "--vscode-scrollbarSlider-background").withDefault("#79797966");
const scrollbarSliderHoverBackground = create("scrollbar-slider-hover-background", "--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3");
const scrollbarSliderActiveBackground = create("scrollbar-slider-active-background", "--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66");
const badgeBackground = create("badge-background", "--vscode-badge-background").withDefault("#4d4d4d");
const badgeForeground = create("badge-foreground", "--vscode-badge-foreground").withDefault("#ffffff");
const buttonBorder = create("button-border", "--vscode-button-border").withDefault("transparent");
const buttonIconBackground = create("button-icon-background").withDefault("transparent");
const buttonIconCornerRadius = create("button-icon-corner-radius").withDefault("5px");
const buttonIconFocusBorderOffset = create("button-icon-outline-offset").withDefault(0);
const buttonIconHoverBackground = create("button-icon-hover-background", "--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)");
const buttonIconPadding = create("button-icon-padding").withDefault("3px");
const buttonPrimaryBackground = create("button-primary-background", "--vscode-button-background").withDefault("#0e639c");
const buttonPrimaryForeground = create("button-primary-foreground", "--vscode-button-foreground").withDefault("#ffffff");
const buttonPrimaryHoverBackground = create("button-primary-hover-background", "--vscode-button-hoverBackground").withDefault("#1177bb");
const buttonSecondaryBackground = create("button-secondary-background", "--vscode-button-secondaryBackground").withDefault("#3a3d41");
const buttonSecondaryForeground = create("button-secondary-foreground", "--vscode-button-secondaryForeground").withDefault("#ffffff");
const buttonSecondaryHoverBackground = create("button-secondary-hover-background", "--vscode-button-secondaryHoverBackground").withDefault("#45494e");
const buttonPaddingHorizontal = create("button-padding-horizontal").withDefault("11px");
const buttonPaddingVertical = create("button-padding-vertical").withDefault("4px");
const checkboxBackground = create("checkbox-background", "--vscode-checkbox-background").withDefault("#3c3c3c");
const checkboxBorder = create("checkbox-border", "--vscode-checkbox-border").withDefault("#3c3c3c");
const checkboxCornerRadius = create("checkbox-corner-radius").withDefault(3);
create("checkbox-foreground", "--vscode-checkbox-foreground").withDefault("#f0f0f0");
const listActiveSelectionBackground = create("list-active-selection-background", "--vscode-list-activeSelectionBackground").withDefault("#094771");
const listActiveSelectionForeground = create("list-active-selection-foreground", "--vscode-list-activeSelectionForeground").withDefault("#ffffff");
const listHoverBackground = create("list-hover-background", "--vscode-list-hoverBackground").withDefault("#2a2d2e");
const dividerBackground = create("divider-background", "--vscode-settings-dropdownListBorder").withDefault("#454545");
const dropdownBackground = create("dropdown-background", "--vscode-dropdown-background").withDefault("#3c3c3c");
const dropdownBorder = create("dropdown-border", "--vscode-dropdown-border").withDefault("#3c3c3c");
create("dropdown-foreground", "--vscode-dropdown-foreground").withDefault("#f0f0f0");
const dropdownListMaxHeight = create("dropdown-list-max-height").withDefault("200px");
const inputBackground = create("input-background", "--vscode-input-background").withDefault("#3c3c3c");
const inputForeground = create("input-foreground", "--vscode-input-foreground").withDefault("#cccccc");
create("input-placeholder-foreground", "--vscode-input-placeholderForeground").withDefault("#cccccc");
const linkActiveForeground = create("link-active-foreground", "--vscode-textLink-activeForeground").withDefault("#3794ff");
const linkForeground = create("link-foreground", "--vscode-textLink-foreground").withDefault("#3794ff");
const progressBackground = create("progress-background", "--vscode-progressBar-background").withDefault("#0e70c0");
const panelTabActiveBorder = create("panel-tab-active-border", "--vscode-panelTitle-activeBorder").withDefault("#e7e7e7");
const panelTabActiveForeground = create("panel-tab-active-foreground", "--vscode-panelTitle-activeForeground").withDefault("#e7e7e7");
const panelTabForeground = create("panel-tab-foreground", "--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799");
create("panel-view-background", "--vscode-panel-background").withDefault("#1e1e1e");
create("panel-view-border", "--vscode-panel-border").withDefault("#80808059");
const tagCornerRadius = create("tag-corner-radius").withDefault("2px");
const badgeStyles = (context, definition) => css`
	${display("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${fontFamily};
		font-size: ${typeRampMinus1FontSize};
		line-height: ${typeRampMinus1LineHeight};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${badgeBackground};
		border: calc(${borderWidth} * 1px) solid ${buttonBorder};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${badgeForeground};
		display: flex;
		height: calc(${designUnit} * 4px);
		justify-content: center;
		min-width: calc(${designUnit} * 4px + 2px);
		min-height: calc(${designUnit} * 4px + 2px);
		padding: 3px 6px;
	}
`;
class Badge2 extends Badge$1 {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (!this.circular) {
      this.circular = true;
    }
  }
}
const vsCodeBadge = Badge2.compose({
  baseName: "badge",
  template: badgeTemplate,
  styles: badgeStyles
});
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
const BaseButtonStyles = css`
	${display("inline-flex")} :host {
		outline: none;
		font-family: ${fontFamily};
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		color: ${buttonPrimaryForeground};
		background: ${buttonPrimaryBackground};
		border-radius: calc(${cornerRadiusRound} * 1px);
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${buttonPaddingVertical} ${buttonPaddingHorizontal};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${borderWidth} * 1px) solid ${buttonBorder};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${buttonPrimaryHoverBackground};
	}
	:host(:active) {
		background: ${buttonPrimaryBackground};
	}
	.control:${focusVisible} {
		outline: calc(${borderWidth} * 1px) solid ${focusBorder};
		outline-offset: calc(${borderWidth} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${disabledOpacity};
		background: ${buttonPrimaryBackground};
		cursor: ${disabledCursor};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${designUnit} * 4px);
		height: calc(${designUnit} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`;
const PrimaryButtonStyles = css`
	:host([appearance='primary']) {
		background: ${buttonPrimaryBackground};
		color: ${buttonPrimaryForeground};
	}
	:host([appearance='primary']:hover) {
		background: ${buttonPrimaryHoverBackground};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${buttonPrimaryBackground};
	}
	:host([appearance='primary']) .control:${focusVisible} {
		outline: calc(${borderWidth} * 1px) solid ${focusBorder};
		outline-offset: calc(${borderWidth} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${buttonPrimaryBackground};
	}
`;
const SecondaryButtonStyles = css`
	:host([appearance='secondary']) {
		background: ${buttonSecondaryBackground};
		color: ${buttonSecondaryForeground};
	}
	:host([appearance='secondary']:hover) {
		background: ${buttonSecondaryHoverBackground};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${buttonSecondaryBackground};
	}
	:host([appearance='secondary']) .control:${focusVisible} {
		outline: calc(${borderWidth} * 1px) solid ${focusBorder};
		outline-offset: calc(${borderWidth} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${buttonSecondaryBackground};
	}
`;
const IconButtonStyles = css`
	:host([appearance='icon']) {
		background: ${buttonIconBackground};
		border-radius: ${buttonIconCornerRadius};
		color: ${foreground};
	}
	:host([appearance='icon']:hover) {
		background: ${buttonIconHoverBackground};
		outline: 1px dotted ${contrastActiveBorder};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${buttonIconPadding};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${buttonIconHoverBackground};
	}
	:host([appearance='icon']) .control:${focusVisible} {
		outline: calc(${borderWidth} * 1px) solid ${focusBorder};
		outline-offset: ${buttonIconFocusBorderOffset};
	}
	:host([appearance='icon'][disabled]) {
		background: ${buttonIconBackground};
	}
`;
const buttonStyles = (context, definition) => css`
	${BaseButtonStyles}
	${PrimaryButtonStyles}
	${SecondaryButtonStyles}
	${IconButtonStyles}
`;
let Button$1 = class Button2 extends Button$2 {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (!this.appearance) {
      const appearanceValue = this.getAttribute("appearance");
      this.appearance = appearanceValue;
    }
  }
  /**
   * Component lifecycle method that runs when an attribute of the
   * element is changed.
   *
   * @param attrName - The attribute that was changed
   * @param oldVal - The old value of the attribute
   * @param newVal - The new value of the attribute
   *
   * @internal
   */
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === "appearance" && newVal === "icon") {
      const ariaLabelValue = this.getAttribute("aria-label");
      if (!ariaLabelValue) {
        this.ariaLabel = "Icon Button";
      }
    }
    if (attrName === "aria-label") {
      this.ariaLabel = newVal;
    }
    if (attrName === "disabled") {
      this.disabled = newVal !== null;
    }
  }
};
__decorate([
  attr
], Button$1.prototype, "appearance", void 0);
const vsCodeButton = Button$1.compose({
  baseName: "button",
  template: buttonTemplate,
  styles: buttonStyles,
  shadowOptions: {
    delegatesFocus: true
  }
});
const checkboxStyles = (context, defintiion) => css`
	${display("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${designUnit} * 1px) 0;
		user-select: none;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
	}
	.control {
		position: relative;
		width: calc(${designUnit} * 4px + 2px);
		height: calc(${designUnit} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${checkboxCornerRadius} * 1px);
		border: calc(${borderWidth} * 1px) solid ${checkboxBorder};
		background: ${checkboxBackground};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${fontFamily};
		color: ${foreground};
		padding-inline-start: calc(${designUnit} * 2px + 2px);
		margin-inline-end: calc(${designUnit} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${foreground};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${foreground};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${checkboxBackground};
		border-color: ${checkboxBorder};
	}
	:host(:enabled) .control:active {
		background: ${checkboxBackground};
		border-color: ${focusBorder};
	}
	:host(:${focusVisible}) .control {
		border: calc(${borderWidth} * 1px) solid ${focusBorder};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${disabledCursor};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${disabledOpacity};
	}
`;
class Checkbox2 extends Checkbox$1 {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.textContent) {
      this.setAttribute("aria-label", this.textContent);
    } else {
      this.setAttribute("aria-label", "Checkbox");
    }
  }
}
const vsCodeCheckbox = Checkbox2.compose({
  baseName: "checkbox",
  template: checkboxTemplate,
  styles: checkboxStyles,
  checkedIndicator: `
		<svg 
			part="checked-indicator"
			class="checked-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
			/>
		</svg>
	`,
  indeterminateIndicator: `
		<div part="indeterminate-indicator" class="indeterminate-indicator"></div>
	`
});
const dataGridStyles = (context, definition) => css`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`;
const dataGridRowStyles = (context, definition) => css`
	:host {
		display: grid;
		padding: calc((${designUnit} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${background};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${listHoverBackground};
		outline: 1px dotted ${contrastActiveBorder};
		outline-offset: -1px;
	}
`;
const dataGridCellStyles = (context, definition) => css`
	:host {
		padding: calc(${designUnit} * 1px) calc(${designUnit} * 3px);
		color: ${foreground};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${fontFamily};
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		font-weight: 400;
		border: solid calc(${borderWidth} * 1px) transparent;
		border-radius: calc(${cornerRadius} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${focusVisible}),
	:host(:focus),
	:host(:active) {
		background: ${listActiveSelectionBackground};
		border: solid calc(${borderWidth} * 1px) ${focusBorder};
		color: ${listActiveSelectionForeground};
		outline: none;
	}
	:host(:${focusVisible}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${listActiveSelectionForeground} !important;
	}
`;
class DataGrid2 extends DataGrid$1 {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    const ariaLabelValue = this.getAttribute("aria-label");
    if (!ariaLabelValue) {
      this.setAttribute("aria-label", "Data Grid");
    }
  }
}
const vsCodeDataGrid = DataGrid2.compose({
  baseName: "data-grid",
  baseClass: DataGrid$1,
  template: dataGridTemplate,
  styles: dataGridStyles
});
class DataGridRow2 extends DataGridRow$1 {
}
const vsCodeDataGridRow = DataGridRow2.compose({
  baseName: "data-grid-row",
  baseClass: DataGridRow$1,
  template: dataGridRowTemplate,
  styles: dataGridRowStyles
});
class DataGridCell2 extends DataGridCell$1 {
}
const vsCodeDataGridCell = DataGridCell2.compose({
  baseName: "data-grid-cell",
  baseClass: DataGridCell$1,
  template: dataGridCellTemplate,
  styles: dataGridCellStyles
});
const dividerStyles = (context, definition) => css`
	${display("block")} :host {
		border: none;
		border-top: calc(${borderWidth} * 1px) solid ${dividerBackground};
		box-sizing: content-box;
		height: 0;
		margin: calc(${designUnit} * 1px) 0;
		width: 100%;
	}
`;
class Divider2 extends Divider$1 {
}
const vsCodeDivider = Divider2.compose({
  baseName: "divider",
  template: dividerTemplate,
  styles: dividerStyles
});
const dropdownStyles = (context, definition) => css`
	${display("inline-flex")} :host {
		background: ${dropdownBackground};
		border-radius: calc(${cornerRadiusRound} * 1px);
		box-sizing: border-box;
		color: ${foreground};
		contain: contents;
		font-family: ${fontFamily};
		height: calc(${inputHeight} * 1px);
		position: relative;
		user-select: none;
		min-width: ${inputMinWidth};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${borderWidth} * 1px) solid ${dropdownBorder};
		border-radius: calc(${cornerRadiusRound} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${dropdownBackground};
		border: calc(${borderWidth} * 1px) solid ${focusBorder};
		border-radius: calc(${cornerRadiusRound} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${dropdownListMaxHeight};
		padding: 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${focusVisible}) .control {
		border-color: ${focusBorder};
	}
	:host(:not([disabled]):hover) {
		background: ${dropdownBackground};
		border-color: ${dropdownBorder};
	}
	:host(:${focusVisible}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${listActiveSelectionBackground};
		border: calc(${borderWidth} * 1px) solid transparent;
		color: ${listActiveSelectionForeground};
	}
	:host([disabled]) {
		cursor: ${disabledCursor};
		opacity: ${disabledOpacity};
	}
	:host([disabled]) .control {
		cursor: ${disabledCursor};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${dropdownBackground};
		color: ${foreground};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${focusBorder};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${focusBorder};
	}
	:host([open][position='above']) .listbox {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${inputHeight} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${inputHeight} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${designUnit} * 4px);
		min-width: calc(${designUnit} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`;
class Dropdown extends Select {
}
const vsCodeDropdown = Dropdown.compose({
  baseName: "dropdown",
  template: selectTemplate,
  styles: dropdownStyles,
  indicator: `
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`
});
const linkStyles = (context, definition) => css`
	${display("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${linkForeground};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${fontFamily};
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${borderWidth} * 1px) solid transparent;
		border-radius: calc(${cornerRadius} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${linkActiveForeground};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${linkActiveForeground};
	}
	:host(:${focusVisible}) .control,
	:host(:focus) .control {
		border: calc(${borderWidth} * 1px) solid ${focusBorder};
	}
`;
class Link extends Anchor {
}
const vsCodeLink = Link.compose({
  baseName: "link",
  template: anchorTemplate,
  styles: linkStyles,
  shadowOptions: {
    delegatesFocus: true
  }
});
const optionStyles = (context, definition) => css`
	${display("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${cornerRadius};
		border: calc(${borderWidth} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${foreground};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${designUnit} / 2) * 1px)
			calc((${designUnit} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${focusVisible}) {
		border-color: ${focusBorder};
		background: ${listActiveSelectionBackground};
		color: ${foreground};
	}
	:host([aria-selected='true']) {
		background: ${listActiveSelectionBackground};
		border: calc(${borderWidth} * 1px) solid transparent;
		color: ${listActiveSelectionForeground};
	}
	:host(:active) {
		background: ${listActiveSelectionBackground};
		color: ${listActiveSelectionForeground};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${listActiveSelectionBackground};
		border: calc(${borderWidth} * 1px) solid transparent;
		color: ${listActiveSelectionForeground};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${listActiveSelectionBackground};
		color: ${foreground};
	}
	:host([disabled]) {
		cursor: ${disabledCursor};
		opacity: ${disabledOpacity};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;
let Option$1 = class Option2 extends ListboxOption {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.textContent) {
      this.setAttribute("aria-label", this.textContent);
    } else {
      this.setAttribute("aria-label", "Option");
    }
  }
};
const vsCodeOption = Option$1.compose({
  baseName: "option",
  template: listboxOptionTemplate,
  styles: optionStyles
});
const panelsStyles = (context, definition) => css`
	${display("grid")} :host {
		box-sizing: border-box;
		font-family: ${fontFamily};
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		color: ${foreground};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${designUnit} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${designUnit} * 1px) calc(${designUnit} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${designUnit} / 4) * 1px);
		justify-self: center;
		background: ${panelTabActiveForeground};
		margin: 0;
		border-radius: calc(${cornerRadius} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`;
const panelTabStyles = (context, definition) => css`
	${display("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${fontFamily};
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		height: calc(${designUnit} * 7px);
		padding: calc(${designUnit} * 1px) 0;
		color: ${panelTabForeground};
		fill: currentcolor;
		border-radius: calc(${cornerRadius} * 1px);
		border: solid calc(${borderWidth} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${panelTabActiveForeground};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${panelTabActiveForeground};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${panelTabActiveForeground};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${panelTabActiveForeground};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${panelTabActiveForeground};
		fill: currentcolor;
	}
	:host(:${focusVisible}) {
		outline: none;
		border: solid calc(${borderWidth} * 1px) ${panelTabActiveBorder};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${designUnit} * 2px);
	}
`;
const panelViewStyles = (context, definition) => css`
	${display("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${borderWidth} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		padding: 10px calc((${designUnit} + 2) * 1px);
	}
`;
class Panels extends Tabs {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.orientation) {
      this.orientation = TabsOrientation.horizontal;
    }
    const ariaLabelValue = this.getAttribute("aria-label");
    if (!ariaLabelValue) {
      this.setAttribute("aria-label", "Panels");
    }
  }
}
const vsCodePanels = Panels.compose({
  baseName: "panels",
  template: tabsTemplate,
  styles: panelsStyles
});
class PanelTab extends Tab {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.disabled) {
      this.disabled = false;
    }
    if (this.textContent) {
      this.setAttribute("aria-label", this.textContent);
    }
  }
}
const vsCodePanelTab = PanelTab.compose({
  baseName: "panel-tab",
  template: tabTemplate,
  styles: panelTabStyles
});
class PanelView extends TabPanel {
}
const vsCodePanelView = PanelView.compose({
  baseName: "panel-view",
  template: tabPanelTemplate,
  styles: panelViewStyles
});
const progressRingStyles = (context, definition) => css`
	${display("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${designUnit} * 7px);
		width: calc(${designUnit} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${designUnit} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${progressBackground};
		stroke-width: calc(${designUnit} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`;
class ProgressRing extends BaseProgress {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.paused) {
      this.paused = false;
    }
    this.setAttribute("aria-label", "Loading");
    this.setAttribute("aria-live", "assertive");
    this.setAttribute("role", "alert");
  }
  /**
   * Component lifecycle method that runs when an attribute of the
   * element is changed.
   *
   * @param attrName - The attribute that was changed
   * @param oldVal - The old value of the attribute
   * @param newVal - The new value of the attribute
   *
   * @internal
   */
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === "value") {
      this.removeAttribute("value");
    }
  }
}
const vsCodeProgressRing = ProgressRing.compose({
  baseName: "progress-ring",
  template: progressRingTemplate,
  styles: progressRingStyles,
  indeterminateIndicator: `
		<svg class="progress" part="progress" viewBox="0 0 16 16">
			<circle
				class="background"
				part="background"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
			<circle
				class="indeterminate-indicator-1"
				part="indeterminate-indicator-1"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
		</svg>
	`
});
const radioGroupStyles = (context, definition) => css`
	${display("flex")} :host {
		align-items: flex-start;
		margin: calc(${designUnit} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${foreground};
		font-size: ${typeRampBaseFontSize};
		margin: calc(${designUnit} * 1px) 0;
	}
`;
class RadioGroup2 extends RadioGroup$1 {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    const label = this.querySelector("label");
    if (label) {
      const id2 = "radio-group-" + Math.random().toString(16).slice(2);
      label.setAttribute("id", id2);
      this.setAttribute("aria-labelledby", id2);
    }
  }
}
const vsCodeRadioGroup = RadioGroup2.compose({
  baseName: "radio-group",
  template: radioGroupTemplate,
  styles: radioGroupStyles
});
const radioStyles = (context, definition) => css`
	${display("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		margin: calc(${designUnit} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${checkboxBackground};
		border-radius: 999px;
		border: calc(${borderWidth} * 1px) solid ${checkboxBorder};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${designUnit} * 4px);
		position: relative;
		outline: none;
		width: calc(${designUnit} * 4px);
	}
	.label {
		color: ${foreground};
		cursor: pointer;
		font-family: ${fontFamily};
		margin-inline-end: calc(${designUnit} * 2px + 2px);
		padding-inline-start: calc(${designUnit} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${foreground};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${designUnit} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${checkboxBackground};
		border-color: ${checkboxBorder};
	}
	:host(:not([disabled])) .control:active {
		background: ${checkboxBackground};
		border-color: ${focusBorder};
	}
	:host(:${focusVisible}) .control {
		border: calc(${borderWidth} * 1px) solid ${focusBorder};
	}
	:host([aria-checked='true']) .control {
		background: ${checkboxBackground};
		border: calc(${borderWidth} * 1px) solid ${checkboxBorder};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${checkboxBackground};
		border: calc(${borderWidth} * 1px) solid ${checkboxBorder};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${checkboxBackground};
		border: calc(${borderWidth} * 1px) solid ${focusBorder};
	}
	:host([aria-checked="true"]:${focusVisible}:not([disabled])) .control {
		border: calc(${borderWidth} * 1px) solid ${focusBorder};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${disabledCursor};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${disabledOpacity};
	}
`;
class Radio2 extends Radio$1 {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.textContent) {
      this.setAttribute("aria-label", this.textContent);
    } else {
      this.setAttribute("aria-label", "Radio");
    }
  }
}
const vsCodeRadio = Radio2.compose({
  baseName: "radio",
  template: radioTemplate,
  styles: radioStyles,
  checkedIndicator: `
		<div part="checked-indicator" class="checked-indicator"></div>
	`
});
const tagStyles = (context, definition) => css`
	${display("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${fontFamily};
		font-size: ${typeRampMinus1FontSize};
		line-height: ${typeRampMinus1LineHeight};
	}
	.control {
		background-color: ${badgeBackground};
		border: calc(${borderWidth} * 1px) solid ${buttonBorder};
		border-radius: ${tagCornerRadius};
		color: ${badgeForeground};
		padding: calc(${designUnit} * 0.5px) calc(${designUnit} * 1px);
		text-transform: uppercase;
	}
`;
class Tag extends Badge$1 {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.circular) {
      this.circular = false;
    }
  }
}
const vsCodeTag = Tag.compose({
  baseName: "tag",
  template: badgeTemplate,
  styles: tagStyles
});
const textAreaStyles = (context, definition) => css`
	${display("inline-block")} :host {
		font-family: ${fontFamily};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${inputForeground};
		background: ${inputBackground};
		border-radius: calc(${cornerRadiusRound} * 1px);
		border: calc(${borderWidth} * 1px) solid ${dropdownBorder};
		font: inherit;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		padding: calc(${designUnit} * 2px + 1px);
		width: 100%;
		min-width: ${inputMinWidth};
		resize: none;
	}
	.control:hover:enabled {
		background: ${inputBackground};
		border-color: ${dropdownBorder};
	}
	.control:active:enabled {
		background: ${inputBackground};
		border-color: ${focusBorder};
	}
	.control:hover,
	.control:${focusVisible},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${scrollbarWidth};
		height: ${scrollbarHeight};
	}
	.control::-webkit-scrollbar-corner {
		background: ${inputBackground};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${scrollbarSliderBackground};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${scrollbarSliderHoverBackground};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${scrollbarSliderActiveBackground};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${focusBorder};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${foreground};
		cursor: pointer;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${disabledCursor};
	}
	:host([disabled]) {
		opacity: ${disabledOpacity};
	}
	:host([disabled]) .control {
		border-color: ${dropdownBorder};
	}
`;
class TextArea2 extends TextArea$1 {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.textContent) {
      this.setAttribute("aria-label", this.textContent);
    } else {
      this.setAttribute("aria-label", "Text area");
    }
  }
}
const vsCodeTextArea = TextArea2.compose({
  baseName: "text-area",
  template: textAreaTemplate,
  styles: textAreaStyles,
  shadowOptions: {
    delegatesFocus: true
  }
});
const textFieldStyles = (context, definition) => css`
	${display("inline-block")} :host {
		font-family: ${fontFamily};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${inputForeground};
		background: ${inputBackground};
		border-radius: calc(${cornerRadiusRound} * 1px);
		border: calc(${borderWidth} * 1px) solid ${dropdownBorder};
		height: calc(${inputHeight} * 1px);
		min-width: ${inputMinWidth};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${designUnit} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${designUnit} * 2px + 1px);
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
	}
	.control:hover,
	.control:${focusVisible},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${foreground};
		cursor: pointer;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${designUnit} * 4px);
		height: calc(${designUnit} * 4px);
	}
	.start {
		margin-inline-start: calc(${designUnit} * 2px);
	}
	.end {
		margin-inline-end: calc(${designUnit} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${inputBackground};
		border-color: ${dropdownBorder};
	}
	:host(:active:not([disabled])) .root {
		background: ${inputBackground};
		border-color: ${focusBorder};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${focusBorder};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${disabledCursor};
	}
	:host([disabled]) {
		opacity: ${disabledOpacity};
	}
	:host([disabled]) .control {
		border-color: ${dropdownBorder};
	}
`;
class TextField2 extends TextField$1 {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.textContent) {
      this.setAttribute("aria-label", this.textContent);
    } else {
      this.setAttribute("aria-label", "Text field");
    }
  }
}
const vsCodeTextField = TextField2.compose({
  baseName: "text-field",
  template: textFieldTemplate,
  styles: textFieldStyles,
  shadowOptions: {
    delegatesFocus: true
  }
});
const { wrap } = provideReactWrapper(React, provideVSCodeDesignSystem());
wrap(vsCodeBadge(), {
  name: "vscode-badge"
});
wrap(vsCodeButton(), {
  name: "vscode-button"
});
const VSCodeCheckbox = wrap(vsCodeCheckbox(), {
  name: "vscode-checkbox",
  events: {
    onChange: "change"
  }
});
wrap(vsCodeDataGrid(), {
  name: "vscode-data-grid"
});
wrap(vsCodeDataGridCell(), {
  name: "vscode-data-grid-cell"
});
wrap(vsCodeDataGridRow(), {
  name: "vscode-data-grid-row"
});
wrap(vsCodeDivider(), {
  name: "vscode-divider"
});
wrap(vsCodeDropdown(), {
  name: "vscode-dropdown",
  events: {
    onChange: "change"
  }
});
wrap(vsCodeLink(), {
  name: "vscode-link"
});
wrap(vsCodeOption(), {
  name: "vscode-option"
});
wrap(vsCodePanels(), {
  name: "vscode-panels",
  events: {
    onChange: "change"
  }
});
wrap(vsCodePanelTab(), {
  name: "vscode-panel-tab"
});
wrap(vsCodePanelView(), {
  name: "vscode-panel-view"
});
wrap(vsCodeProgressRing(), {
  name: "vscode-progress-ring"
});
wrap(vsCodeRadio(), {
  name: "vscode-radio",
  events: {
    onChange: "change"
  }
});
wrap(vsCodeRadioGroup(), {
  name: "vscode-radio-group",
  events: {
    onChange: "change"
  }
});
wrap(vsCodeTag(), {
  name: "vscode-tag"
});
wrap(vsCodeTextArea(), {
  name: "vscode-text-area",
  events: {
    onChange: "change",
    onInput: "input"
  }
});
wrap(vsCodeTextField(), {
  name: "vscode-text-field",
  events: {
    onChange: "change",
    onInput: "input"
  }
});
function Footer() {
  const { earlyConfig } = useAppContext();
  if (!isDefined(earlyConfig)) {
    return null;
  }
  const onEarlPanelEnabledChange = (event) => {
    const target = event.target;
    if (target.checked === earlyConfig.earlPanelEnabled) {
      return;
    }
    vscode.postMessage({
      type: "setEarlPanelEnabled",
      payload: {
        earlPanelEnabled: target.checked
      }
    });
    vscode.postMessage({
      type: "trackEvent",
      payload: {
        eventName: "EarlPanel_EnableEarl",
        properties: { value: target.checked }
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(VSCodeCheckbox, { onChange: onEarlPanelEnabledChange, checked: earlyConfig.earlPanelEnabled, children: t("SECTION.EARL_PANEL_ENABLED_LABEL") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-300 text-xs", children: t("SECTION.EARL_PANEL_ENABLED_DESCRIPTION") })
  ] });
}
const GoToFileIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  "path",
  {
    clipRule: "evenodd",
    fillRule: "evenodd",
    d: "m6 5.914l2.06-2.06v-.708L5.915 1l-.707.707l.043.043l.25.25l1 1h-3a2.5 2.5 0 0 0 0 5H4V7h-.5a1.5 1.5 0 1 1 0-3h3L5.207 5.293L5.914 6zM11 2H8.328l-1-1H12l.71.29l3 3L16 5v9l-1 1H6l-1-1V6.5l1 .847V14h9V6h-4zm1 0v3h3z"
  }
) });
const GoToTestsIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13 4.808L12.856 4.44L9.576 1.144L9.224 1H1.496L1 1.512V14.504L1.496 15H5V14.008H2.008V2.008H8.008V5.512L8.504 6.008H12.008V7.18896H13V4.808ZM9 2.008L12.008 5H9V2.008Z"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8.42425 9.26707C6.84759 9.26707 5.74656 10.4461 5.74656 12.1337C5.74656 13.8483 6.86998 15 8.54261 15C9.78439 15 10.7739 14.2148 11.0042 13.0461L11.0223 12.9532H9.97507L9.96001 13.0118C9.78913 13.6711 9.23517 14.0645 8.47848 14.0645C7.5083 14.0645 6.86051 13.4035 6.82736 12.3825H11.0029L11.0752 12.3795L11.0813 12.308C11.092 12.1813 11.1028 12.0503 11.1028 11.9282C11.0585 10.2868 10.0323 9.26707 8.42425 9.26707ZM6.89107 11.5001C7.00599 10.7488 7.65507 10.1922 8.43544 10.1922C9.30619 10.1922 9.88253 10.679 9.99143 11.5001H6.89107Z" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M13.9074 7.18893L11.6546 14.9995H12.747L14.9998 7.18893H13.9074Z" })
] });
function useLiveCodeImprovements(isDocumentationTyping) {
  const { codeImprovements } = useAppContext();
  const [liveText, isTyping] = [isDocumentationTyping ? "" : (codeImprovements == null ? void 0 : codeImprovements.text) ?? "", false];
  if (!isDefined(codeImprovements)) {
    return ["", false];
  }
  const isCodeImprovemetsTyping = isTyping || (codeImprovements == null ? void 0 : codeImprovements.status) === GENERATE_TEST_STATUS.IN_PROGRESS;
  return [liveText, isCodeImprovemetsTyping];
}
function useLiveDocumentation() {
  const { documentation } = useAppContext();
  const [liveText, isTyping] = [(documentation == null ? void 0 : documentation.text) ?? "", false];
  if (!isDefined(documentation)) {
    return ["", false];
  }
  const isDocumentationTyping = isTyping || (documentation == null ? void 0 : documentation.status) === GENERATE_TEST_STATUS.IN_PROGRESS;
  return [liveText, isDocumentationTyping];
}
function r(e) {
  var t2, f2, n2 = "";
  if ("string" == typeof e || "number" == typeof e)
    n2 += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t2 = 0; t2 < e.length; t2++)
        e[t2] && (f2 = r(e[t2])) && (n2 && (n2 += " "), n2 += f2);
    else
      for (t2 in e)
        e[t2] && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
function clsx() {
  for (var e, t2, f2 = 0, n2 = ""; f2 < arguments.length; )
    (e = arguments[f2++]) && (t2 = r(e)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
const CLASS_PART_SEPARATOR = "-";
function createClassUtils(config) {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  function getClassGroupId(className) {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  }
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  var _a;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a = classPartObject.validators.find(({
    validator
  }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
}
const arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
}
function createClassMap(config) {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}
function getPart(classPartObject, path) {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map((classDefinition) => {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache2 = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  function update(key, value) {
    cache2.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache2;
      cache2 = /* @__PURE__ */ new Map();
    }
  }
  return {
    get(key) {
      let value = cache2.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache2.has(key)) {
        cache2.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}
const IMPORTANT_MODIFIER = "!";
function createSplitModifiers(config) {
  const separator = config.separator;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  return function splitModifiers(className) {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
}
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach((modifier) => {
    const isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
}
function createConfigUtils(config) {
  return {
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config),
    ...createClassUtils(config)
  };
}
const SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  const {
    splitModifiers,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  const classGroupsInConflict = /* @__PURE__ */ new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map((originalClassName) => {
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = splitModifiers(originalClassName);
    let classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    if (!classGroupId) {
      if (!maybePostfixModifierPosition) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId,
      classGroupId,
      originalClassName,
      hasPostfixModifier
    };
  }).reverse().filter((parsed) => {
    if (!parsed.isTailwindClass) {
      return true;
    }
    const {
      modifierId,
      classGroupId,
      hasPostfixModifier
    } = parsed;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach((group) => classGroupsInConflict.add(modifierId + group));
    return true;
  }).reverse().map((parsed) => parsed.originalClassName).join(" ");
}
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k2 = 0; k2 < mix.length; k2++) {
    if (mix[k2]) {
      if (resolvedValue = toValue(mix[k2])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
function fromTheme(key) {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
}
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, "length", isLengthOnly);
}
function isNumber(value) {
  return Boolean(value) && !Number.isNaN(Number(value));
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, "number", isNumber);
}
function isInteger(value) {
  return Boolean(value) && Number.isInteger(Number(value));
}
function isPercent(value) {
  return value.endsWith("%") && isNumber(value.slice(0, -1));
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
const sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, sizeLabels, isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, "position", isNever);
}
const imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
function isArbitraryImage(value) {
  return getIsArbitraryValue(value, imageLabels, isImage);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, "", isShadow);
}
function isAny() {
  return true;
}
function getIsArbitraryValue(value, label, testValue) {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === "string" ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  return lengthUnitRegex.test(value);
}
function isNever() {
  return false;
}
function isShadow(value) {
  return shadowRegex.test(value);
}
function isImage(value) {
  return imageRegex.test(value);
}
function getDefaultConfig() {
  const colors = fromTheme("colors");
  const spacing = fromTheme("spacing");
  const blur = fromTheme("blur");
  const brightness = fromTheme("brightness");
  const borderColor = fromTheme("borderColor");
  const borderRadius = fromTheme("borderRadius");
  const borderSpacing = fromTheme("borderSpacing");
  const borderWidth2 = fromTheme("borderWidth");
  const contrast = fromTheme("contrast");
  const grayscale = fromTheme("grayscale");
  const hueRotate = fromTheme("hueRotate");
  const invert = fromTheme("invert");
  const gap = fromTheme("gap");
  const gradientColorStops = fromTheme("gradientColorStops");
  const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
  const inset = fromTheme("inset");
  const margin = fromTheme("margin");
  const opacity = fromTheme("opacity");
  const padding = fromTheme("padding");
  const saturate = fromTheme("saturate");
  const scale = fromTheme("scale");
  const sepia = fromTheme("sepia");
  const skew = fromTheme("skew");
  const space = fromTheme("space");
  const translate2 = fromTheme("translate");
  const getOverscroll = () => ["auto", "contain", "none"];
  const getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue];
  const getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  const getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"];
  const getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  const getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"];
  const getZeroAndEmpty = () => ["", "0", isArbitraryValue];
  const getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const getNumber = () => [isNumber, isArbitraryNumber];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ["none", "", isTshirtSize, isArbitraryValue],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumber(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...getAlign(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...getAlign(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", isArbitraryValue, isLength]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [isTshirtSize]
        }, isTshirtSize, isArbitraryValue]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", isLength, isArbitraryValue]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [isArbitraryValue, spacing, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...getLineStyles(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [borderWidth2]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [borderWidth2]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [borderWidth2]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [borderWidth2]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [borderWidth2]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [borderWidth2]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [borderWidth2]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [borderWidth2]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [borderWidth2]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...getLineStyles(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [borderWidth2]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [borderWidth2]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": getBlendModes()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [translate2]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [translate2]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
const cn = (...inputs) => twMerge(clsx(inputs));
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && array.indexOf(className) === index;
}).join(" ");
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children: children2,
    iconNode,
    ...rest
  }, ref2) => {
    return reactExports.createElement(
      "svg",
      {
        ref: ref2,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
        ...Array.isArray(children2) ? children2 : [children2]
      ]
    );
  }
);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref2) => reactExports.createElement(Icon, {
      ref: ref2,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BetweenHorizontalStart = createLucideIcon("BetweenHorizontalStart", [
  ["rect", { width: "13", height: "7", x: "8", y: "3", rx: "1", key: "pkso9a" }],
  ["path", { d: "m2 9 3 3-3 3", key: "1agib5" }],
  ["rect", { width: "13", height: "7", x: "8", y: "14", rx: "1", key: "1q5fc1" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Check = createLucideIcon("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CircleCheckBig = createLucideIcon("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CircleHelp = createLucideIcon("CircleHelp", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CircleX = createLucideIcon("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Files = createLucideIcon("Files", [
  ["path", { d: "M20 7h-3a2 2 0 0 1-2-2V2", key: "x099mo" }],
  ["path", { d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z", key: "18t6ie" }],
  ["path", { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8", key: "1nja0z" }]
]);
const STATE_UPDATE_DELAY = 5e3;
const CodeSnippet = ({
  code,
  description,
  trackEventTarget,
  isTyping,
  isInsertEnabled = false,
  isCode = false
}) => {
  const [isInserted, setIsInserted] = reactExports.useState(false);
  const [isCopied, setIsCopied] = reactExports.useState(false);
  const handleInsert = () => {
    vscode.postMessage({ type: "insertText", payload: { text: code } });
    setIsInserted(true);
    setTimeout(() => setIsInserted(false), STATE_UPDATE_DELAY);
    vscode.postMessage({
      type: "trackEvent",
      payload: {
        eventName: "EarlPanel_InsertText",
        properties: { target: trackEventTarget }
      }
    });
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), STATE_UPDATE_DELAY);
      vscode.postMessage({
        type: "trackEvent",
        payload: {
          eventName: "EarlPanel_CopyText",
          properties: { target: trackEventTarget }
        }
      });
    });
  };
  const onCodeSnippetFocus = () => {
    vscode.postMessage({
      type: "trackEvent",
      payload: {
        eventName: "EarlPanel_CodeSnippetFocus",
        properties: { target: trackEventTarget }
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 border border-gray-300 rounded", tabIndex: 0, onFocus: onCodeSnippetFocus, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "flex justify-between items-center p-2",
          "bg-[var(--vscode-activityBar-background)]",
          "border-b border-gray-300 text-nowrap"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: description, className: "text-[var(--vscode-activityBar-foreground)] cursor-help", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { className: "h-4 w-4" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 text-center mx-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-40 flex justify-end gap-2", children: [
            isInsertEnabled && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                disabled: isTyping,
                onClick: handleInsert,
                className: cn(
                  "flex text-[var(--vscode-activityBar-foreground)]",
                  "border-none cursor-pointer",
                  isInserted ? "opacity-75" : "",
                  isTyping ? "opacity-50 cursor-not-allowed" : ""
                ),
                children: [
                  isInserted ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 mr-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(BetweenHorizontalStart, { className: "h-4 w-4 mr-1" }),
                  isInserted ? t("CODE_SNIPPET.INSERTED_BUTTON") : t("CODE_SNIPPET.INSERT_BUTTON")
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                disabled: isTyping,
                onClick: handleCopy,
                className: cn(
                  "flex w-17 text-[var(--vscode-activityBar-foreground)]",
                  "border-none cursor-pointer",
                  isCopied ? "opacity-75" : "",
                  isTyping ? "opacity-50 cursor-not-allowed" : ""
                ),
                children: [
                  isCopied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 mr-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Files, { className: "h-4 w-4 mr-1" }),
                  isCopied ? t("CODE_SNIPPET.COPIED_BUTTON") : t("CODE_SNIPPET.COPY_BUTTON")
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: cn("p-2 rounded-none text-xs", isCode ? "" : "whitespace-pre-wrap"), children: code }) }) })
  ] });
};
const InProgressIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "16", height: "16", viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "20", fill: "var(--early-primary)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  "animate",
  {
    attributeName: "r",
    values: "20;30;20",
    dur: "1s",
    repeatCount: "indefinite",
    keyTimes: "0;0.5;1",
    keySplines: "0.42 0 0.58 1; 0.42 0 0.58 1"
  }
) }) });
const InQueueIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "12", height: "13", viewBox: "0 0 12 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  "path",
  {
    d: "M7.89518 2.16797C7.69102 2.16797 7.51845 2.09748 7.37747 1.95651C7.2365 1.81554 7.16602 1.64297 7.16602 1.4388C7.16602 1.23464 7.2365 1.06207 7.37747 0.921094C7.51845 0.780122 7.69102 0.709635 7.89518 0.709635C8.09935 0.709635 8.27192 0.780122 8.41289 0.921094C8.55386 1.06207 8.62435 1.23464 8.62435 1.4388C8.62435 1.64297 8.55386 1.81554 8.41289 1.95651C8.27192 2.09748 8.09935 2.16797 7.89518 2.16797ZM7.89518 11.793C7.69102 11.793 7.51845 11.7225 7.37747 11.5815C7.2365 11.4405 7.16602 11.268 7.16602 11.0638C7.16602 10.8596 7.2365 10.6871 7.37747 10.5461C7.51845 10.4051 7.69102 10.3346 7.89518 10.3346C8.09935 10.3346 8.27192 10.4051 8.41289 10.5461C8.55386 10.6871 8.62435 10.8596 8.62435 11.0638C8.62435 11.268 8.55386 11.4405 8.41289 11.5815C8.27192 11.7225 8.09935 11.793 7.89518 11.793ZM10.2285 4.20964C10.0243 4.20964 9.85178 4.13915 9.71081 3.99818C9.56984 3.85721 9.49935 3.68464 9.49935 3.48047C9.49935 3.2763 9.56984 3.10373 9.71081 2.96276C9.85178 2.82179 10.0243 2.7513 10.2285 2.7513C10.4327 2.7513 10.6053 2.82179 10.7462 2.96276C10.8872 3.10373 10.9577 3.2763 10.9577 3.48047C10.9577 3.68464 10.8872 3.85721 10.7462 3.99818C10.6053 4.13915 10.4327 4.20964 10.2285 4.20964ZM10.2285 9.7513C10.0243 9.7513 9.85178 9.68082 9.71081 9.53984C9.56984 9.39887 9.49935 9.2263 9.49935 9.02214C9.49935 8.81797 9.56984 8.6454 9.71081 8.50443C9.85178 8.36346 10.0243 8.29297 10.2285 8.29297C10.4327 8.29297 10.6053 8.36346 10.7462 8.50443C10.8872 8.6454 10.9577 8.81797 10.9577 9.02214C10.9577 9.2263 10.8872 9.39887 10.7462 9.53984C10.6053 9.68082 10.4327 9.7513 10.2285 9.7513ZM11.1035 6.98047C10.8994 6.98047 10.7268 6.90998 10.5858 6.76901C10.4448 6.62804 10.3743 6.45547 10.3743 6.2513C10.3743 6.04714 10.4448 5.87457 10.5858 5.73359C10.7268 5.59262 10.8994 5.52214 11.1035 5.52214C11.3077 5.52214 11.4803 5.59262 11.6212 5.73359C11.7622 5.87457 11.8327 6.04714 11.8327 6.2513C11.8327 6.45547 11.7622 6.62804 11.6212 6.76901C11.4803 6.90998 11.3077 6.98047 11.1035 6.98047ZM5.99935 12.0846C5.1924 12.0846 4.43407 11.9315 3.72435 11.6253C3.01463 11.319 2.39727 10.9034 1.87227 10.3784C1.34727 9.85339 0.931641 9.23602 0.625391 8.5263C0.319141 7.81658 0.166016 7.05825 0.166016 6.2513C0.166016 5.44436 0.319141 4.68602 0.625391 3.9763C0.931641 3.26658 1.34727 2.64922 1.87227 2.12422C2.39727 1.59922 3.01463 1.18359 3.72435 0.877344C4.43407 0.571094 5.1924 0.417969 5.99935 0.417969V1.58464C4.69657 1.58464 3.5931 2.03672 2.68893 2.94089C1.78477 3.84505 1.33268 4.94852 1.33268 6.2513C1.33268 7.55408 1.78477 8.65755 2.68893 9.56172C3.5931 10.4659 4.69657 10.918 5.99935 10.918V12.0846ZM5.99935 7.41797C5.67852 7.41797 5.40386 7.30373 5.17539 7.07526C4.94692 6.84679 4.83268 6.57214 4.83268 6.2513C4.83268 6.20269 4.83511 6.15165 4.83997 6.09818C4.84484 6.04471 4.85699 5.99366 4.87643 5.94505L3.66602 4.73464L4.48268 3.91797L5.6931 5.12839C5.73199 5.11866 5.83407 5.10408 5.99935 5.08464C6.32018 5.08464 6.59484 5.19887 6.82331 5.42734C7.05178 5.65582 7.16602 5.93047 7.16602 6.2513C7.16602 6.57214 7.05178 6.84679 6.82331 7.07526C6.59484 7.30373 6.32018 7.41797 5.99935 7.41797Z",
    fill: "var(--early-primary)"
  }
) });
const icons = {
  [GENERATE_TEST_STATUS.IN_QUEUE]: InQueueIcon,
  [GENERATE_TEST_STATUS.IN_PROGRESS]: InProgressIcon,
  [GENERATE_TEST_STATUS.DONE]: () => /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-3 w-3 text-early-primary" }),
  [GENERATE_TEST_STATUS.FAILED]: () => /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3 w-3 text-[var(--vscode-editorError-foreground)]" })
};
const descriptions = {
  [GENERATE_TEST_STATUS.IN_QUEUE]: "GENERATE_TEST_STATUS.IN_QUEUE",
  [GENERATE_TEST_STATUS.IN_PROGRESS]: "GENERATE_TEST_STATUS.IN_PROGRESS",
  [GENERATE_TEST_STATUS.DONE]: "GENERATE_TEST_STATUS.DONE",
  [GENERATE_TEST_STATUS.FAILED]: "GENERATE_TEST_STATUS.FAILED"
};
function Section({ title, status, className, children: children2 }) {
  const StatusIcon = icons[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: cn("mb-8", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: t(descriptions[status]), className: "cursor-help", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusIcon, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "ml-2 text-base font-medium", children: title })
    ] }),
    isDefined(children2) && children2
  ] });
}
function CodeSections() {
  const { documentation, codeImprovements } = useAppContext();
  const [liveDocumentationText, isDocumentationTyping] = useLiveDocumentation();
  const documentationStatus = isDocumentationTyping ? GENERATE_TEST_STATUS.IN_PROGRESS : (documentation == null ? void 0 : documentation.status) ?? GENERATE_TEST_STATUS.IN_PROGRESS;
  const [liveCodeImprovementsText, isCodeImprovementsTyping] = useLiveCodeImprovements(isDocumentationTyping);
  const codeImprovementsStatus = isCodeImprovementsTyping ? GENERATE_TEST_STATUS.IN_PROGRESS : (codeImprovements == null ? void 0 : codeImprovements.status) ?? GENERATE_TEST_STATUS.IN_PROGRESS;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    isDefined(documentation) && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: t("SECTION.FUNCTION_DOCUMENTATION_TITLE"), status: documentationStatus, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CodeSnippet,
      {
        code: liveDocumentationText,
        description: t("SECTION.FUNCTION_DOCUMENTATION_DESCRIPTION"),
        trackEventTarget: "documentation",
        isTyping: isDocumentationTyping,
        isInsertEnabled: true,
        isCode: true
      }
    ) }),
    !isDocumentationTyping && isDefined(codeImprovements) && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: t("SECTION.FUNCTION_CODE_IMPROVEMENTS_TITLE"), status: codeImprovementsStatus, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CodeSnippet,
      {
        code: liveCodeImprovementsText,
        description: t("SECTION.FUNCTION_CODE_IMPROVEMENTS_DESCRIPTION"),
        trackEventTarget: "code-improvements",
        isTyping: isCodeImprovementsTyping
      }
    ) })
  ] });
}
function Button3({ label, icon: Icon2, className, onClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: cn("flex gap-1 hover:text-early-primary cursor-pointer", className), onClick: () => onClick(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, {}),
    label
  ] });
}
function Page() {
  const { documentation, generateTests } = useAppContext();
  const handleOpenTestFile = () => {
    vscode.postMessage({
      type: "openTestFile"
    });
    vscode.postMessage({
      type: "trackEvent",
      payload: {
        eventName: "EarlPanel_OpenTestFile"
      }
    });
  };
  const handleOpenMethod = () => {
    vscode.postMessage({
      type: "openMethod"
    });
    vscode.postMessage({
      type: "trackEvent",
      payload: {
        eventName: "EarlPanel_OpenMethod"
      }
    });
  };
  const isInProgress = generateTests.status === GENERATE_TEST_STATUS.IN_QUEUE || generateTests.status === GENERATE_TEST_STATUS.IN_PROGRESS;
  const isDone = generateTests.status === GENERATE_TEST_STATUS.DONE;
  const isFailed = generateTests.status === GENERATE_TEST_STATUS.FAILED;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex flex-col p-4 w-full min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-end gap-2 mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-medium font-jetbrains-mono text-early-primary", children: t("PAGE.TITLE") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-normal leading-6 text-early-primary", children: t("PAGE.SUBTITLE") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        className: "mb-2",
        title: t("SECTION.GENERATING_TESTS_TITLE", {
          functionName: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "label",
            {
              className: "border-b border-early-primary border-dashed hover:text-early-primary cursor-pointer",
              onClick: handleOpenMethod,
              children: [
                generateTests.methodName,
                "()"
              ]
            }
          )
        }),
        status: generateTests.status,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 ml-5 mt-2", children: [
          isInProgress && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "animate-pulse", children: t("SECTION.IN_PROGRESS_LABEL") }),
          isDone && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button3, { label: t("SECTION.GO_TO_TESTS_BUTTON"), icon: GoToTestsIcon, onClick: handleOpenTestFile }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button3, { label: t("SECTION.GO_TO_METHOD_BUTTON"), icon: GoToFileIcon, onClick: handleOpenMethod })
          ] }),
          isFailed && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[var(--vscode-editorError-foreground)]", children: t("SECTION.FAILED_LABEL") })
        ] })
      }
    ),
    isDefined(documentation) && /* @__PURE__ */ jsxRuntimeExports.jsx(CodeSections, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const app = "";
function App() {
  reactExports.useEffect(() => {
    vscode.postMessage({
      type: "trackEvent",
      payload: {
        eventName: "EarlPanel_EarlDisplayed"
      }
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Page, {}) });
}
const container = document.querySelector("#root");
if (container) {
  const root = createRoot(container);
  root.render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
  );
} else {
  console.error("Root not found");
}
