var n$1, l$2, u$1, t$2, o$1, r$2, f$2, e$2 = {}, c$2 = [], s$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a$1(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function h$2(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function v$2(l2, u2, i) {
  var t2, o2, r2, f2 = {};
  for (r2 in u2)
    r2 == "key" ? t2 = u2[r2] : r2 == "ref" ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$1.call(arguments, 2) : i), typeof l2 == "function" && l2.defaultProps != null)
    for (r2 in l2.defaultProps)
      f2[r2] === void 0 && (f2[r2] = l2.defaultProps[r2]);
  return y$2(l2, f2, t2, o2, null);
}
function y$2(n2, i, t2, o2, r2) {
  var f2 = { type: n2, props: i, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r2 == null ? ++u$1 : r2 };
  return r2 == null && l$2.vnode != null && l$2.vnode(f2), f2;
}
function p$2() {
  return { current: null };
}
function d$2(n2) {
  return n2.children;
}
function _$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function k$3(n2, l2) {
  if (l2 == null)
    return n2.__ ? k$3(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if ((u2 = n2.__k[l2]) != null && u2.__e != null)
      return u2.__e;
  return typeof n2.type == "function" ? k$3(n2) : null;
}
function b$2(n2) {
  var l2, u2;
  if ((n2 = n2.__) != null && n2.__c != null) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return b$2(n2);
  }
}
function m$2(n2) {
  (!n2.__d && (n2.__d = true) && t$2.push(n2) && !g$3.__r++ || r$2 !== l$2.debounceRendering) && ((r$2 = l$2.debounceRendering) || o$1)(g$3);
}
function g$3() {
  for (var n2; g$3.__r = t$2.length; )
    n2 = t$2.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t$2 = [], n2.some(function(n3) {
      var l2, u2, i, t2, o2, r2;
      n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (i = a$1({}, t2)).__v = t2.__v + 1, j$3(r2, t2, i, l2.__n, r2.ownerSVGElement !== void 0, t2.__h != null ? [o2] : null, u2, o2 == null ? k$3(t2) : o2, t2.__h), z$3(u2, t2), t2.__e != o2 && b$2(t2)));
    });
}
function w$4(n2, l2, u2, i, t2, o2, r2, f2, s2, a2) {
  var h2, v2, p2, _2, b2, m2, g2, w2 = i && i.__k || c$2, A2 = w2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if ((_2 = u2.__k[h2] = (_2 = l2[h2]) == null || typeof _2 == "boolean" ? null : typeof _2 == "string" || typeof _2 == "number" || typeof _2 == "bigint" ? y$2(null, _2, null, null, _2) : Array.isArray(_2) ? y$2(d$2, { children: _2 }, null, null, null) : _2.__b > 0 ? y$2(_2.type, _2.props, _2.key, null, _2.__v) : _2) != null) {
      if (_2.__ = u2, _2.__b = u2.__b + 1, (p2 = w2[h2]) === null || p2 && _2.key == p2.key && _2.type === p2.type)
        w2[h2] = void 0;
      else
        for (v2 = 0; v2 < A2; v2++) {
          if ((p2 = w2[v2]) && _2.key == p2.key && _2.type === p2.type) {
            w2[v2] = void 0;
            break;
          }
          p2 = null;
        }
      j$3(n2, _2, p2 = p2 || e$2, t2, o2, r2, f2, s2, a2), b2 = _2.__e, (v2 = _2.ref) && p2.ref != v2 && (g2 || (g2 = []), p2.ref && g2.push(p2.ref, null, _2), g2.push(v2, _2.__c || b2, _2)), b2 != null ? (m2 == null && (m2 = b2), typeof _2.type == "function" && _2.__k === p2.__k ? _2.__d = s2 = x$3(_2, s2, n2) : s2 = P$1(n2, _2, p2, w2, b2, s2), typeof u2.type == "function" && (u2.__d = s2)) : s2 && p2.__e == s2 && s2.parentNode != n2 && (s2 = k$3(p2));
    }
  for (u2.__e = m2, h2 = A2; h2--; )
    w2[h2] != null && (typeof u2.type == "function" && w2[h2].__e != null && w2[h2].__e == u2.__d && (u2.__d = k$3(i, h2 + 1)), N$1(w2[h2], w2[h2]));
  if (g2)
    for (h2 = 0; h2 < g2.length; h2++)
      M$1(g2[h2], g2[++h2], g2[++h2]);
}
function x$3(n2, l2, u2) {
  for (var i, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
    (i = t2[o2]) && (i.__ = n2, l2 = typeof i.type == "function" ? x$3(i, l2, u2) : P$1(u2, i, i, t2, i.__e, l2));
  return l2;
}
function A$3(n2, l2) {
  return l2 = l2 || [], n2 == null || typeof n2 == "boolean" || (Array.isArray(n2) ? n2.some(function(n3) {
    A$3(n3, l2);
  }) : l2.push(n2)), l2;
}
function P$1(n2, l2, u2, i, t2, o2) {
  var r2, f2, e2;
  if (l2.__d !== void 0)
    r2 = l2.__d, l2.__d = void 0;
  else if (u2 == null || t2 != o2 || t2.parentNode == null)
    n:
      if (o2 == null || o2.parentNode !== n2)
        n2.appendChild(t2), r2 = null;
      else {
        for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i.length; e2 += 2)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, o2), r2 = o2;
      }
  return r2 !== void 0 ? r2 : t2.nextSibling;
}
function C$1(n2, l2, u2, i, t2) {
  var o2;
  for (o2 in u2)
    o2 === "children" || o2 === "key" || o2 in l2 || H$1(n2, o2, null, u2[o2], i);
  for (o2 in l2)
    t2 && typeof l2[o2] != "function" || o2 === "children" || o2 === "key" || o2 === "value" || o2 === "checked" || u2[o2] === l2[o2] || H$1(n2, o2, l2[o2], u2[o2], i);
}
function $$1(n2, l2, u2) {
  l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || s$1.test(l2) ? u2 : u2 + "px";
}
function H$1(n2, l2, u2, i, t2) {
  var o2;
  n:
    if (l2 === "style")
      if (typeof u2 == "string")
        n2.style.cssText = u2;
      else {
        if (typeof i == "string" && (n2.style.cssText = i = ""), i)
          for (l2 in i)
            u2 && l2 in u2 || $$1(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i && u2[l2] === i[l2] || $$1(n2.style, l2, u2[l2]);
      }
    else if (l2[0] === "o" && l2[1] === "n")
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i || n2.addEventListener(l2, o2 ? T$2 : I$1, o2) : n2.removeEventListener(l2, o2 ? T$2 : I$1, o2);
    else if (l2 !== "dangerouslySetInnerHTML") {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (l2 !== "href" && l2 !== "list" && l2 !== "form" && l2 !== "tabIndex" && l2 !== "download" && l2 in n2)
        try {
          n2[l2] = u2 == null ? "" : u2;
          break n;
        } catch (n3) {
        }
      typeof u2 == "function" || (u2 != null && (u2 !== false || l2[0] === "a" && l2[1] === "r") ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
    }
}
function I$1(n2) {
  this.l[n2.type + false](l$2.event ? l$2.event(n2) : n2);
}
function T$2(n2) {
  this.l[n2.type + true](l$2.event ? l$2.event(n2) : n2);
}
function j$3(n2, u2, i, t2, o2, r2, f2, e2, c2) {
  var s2, h2, v2, y2, p2, k2, b2, m2, g2, x2, A2, P2, C2, $2 = u2.type;
  if (u2.constructor !== void 0)
    return null;
  i.__h != null && (c2 = i.__h, e2 = u2.__e = i.__e, u2.__h = null, r2 = [e2]), (s2 = l$2.__b) && s2(u2);
  try {
    n:
      if (typeof $2 == "function") {
        if (m2 = u2.props, g2 = (s2 = $2.contextType) && t2[s2.__c], x2 = s2 ? g2 ? g2.props.value : s2.__ : t2, i.__c ? b2 = (h2 = u2.__c = i.__c).__ = h2.__E : ("prototype" in $2 && $2.prototype.render ? u2.__c = h2 = new $2(m2, x2) : (u2.__c = h2 = new _$1(m2, x2), h2.constructor = $2, h2.render = O$1), g2 && g2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), $2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = a$1({}, h2.__s)), a$1(h2.__s, $2.getDerivedStateFromProps(m2, h2.__s))), y2 = h2.props, p2 = h2.state, v2)
          $2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
        else {
          if ($2.getDerivedStateFromProps == null && m2 !== y2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(m2, x2), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(m2, h2.__s, x2) === false || u2.__v === i.__v) {
            h2.props = m2, h2.state = h2.__s, u2.__v !== i.__v && (h2.__d = false), h2.__v = u2, u2.__e = i.__e, u2.__k = i.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), h2.__h.length && f2.push(h2);
            break n;
          }
          h2.componentWillUpdate != null && h2.componentWillUpdate(m2, h2.__s, x2), h2.componentDidUpdate != null && h2.__h.push(function() {
            h2.componentDidUpdate(y2, p2, k2);
          });
        }
        if (h2.context = x2, h2.props = m2, h2.__v = u2, h2.__P = n2, A2 = l$2.__r, P2 = 0, "prototype" in $2 && $2.prototype.render)
          h2.state = h2.__s, h2.__d = false, A2 && A2(u2), s2 = h2.render(h2.props, h2.state, h2.context);
        else
          do {
            h2.__d = false, A2 && A2(u2), s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++P2 < 25);
        h2.state = h2.__s, h2.getChildContext != null && (t2 = a$1(a$1({}, t2), h2.getChildContext())), v2 || h2.getSnapshotBeforeUpdate == null || (k2 = h2.getSnapshotBeforeUpdate(y2, p2)), C2 = s2 != null && s2.type === d$2 && s2.key == null ? s2.props.children : s2, w$4(n2, Array.isArray(C2) ? C2 : [C2], u2, i, t2, o2, r2, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        r2 == null && u2.__v === i.__v ? (u2.__k = i.__k, u2.__e = i.__e) : u2.__e = L$1(i.__e, u2, i, t2, o2, r2, f2, c2);
    (s2 = l$2.diffed) && s2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || r2 != null) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l$2.__e(n3, u2, i);
  }
}
function z$3(n2, u2) {
  l$2.__c && l$2.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$2.__e(n3, u3.__v);
    }
  });
}
function L$1(l2, u2, i, t2, o2, r2, f2, c2) {
  var s2, a2, v2, y2 = i.props, p2 = u2.props, d2 = u2.type, _2 = 0;
  if (d2 === "svg" && (o2 = true), r2 != null) {
    for (; _2 < r2.length; _2++)
      if ((s2 = r2[_2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : s2.nodeType === 3)) {
        l2 = s2, r2[_2] = null;
        break;
      }
  }
  if (l2 == null) {
    if (d2 === null)
      return document.createTextNode(p2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r2 = null, c2 = false;
  }
  if (d2 === null)
    y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
  else {
    if (r2 = r2 && n$1.call(l2.childNodes), a2 = (y2 = i.props || e$2).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
      if (r2 != null)
        for (y2 = {}, _2 = 0; _2 < l2.attributes.length; _2++)
          y2[l2.attributes[_2].name] = l2.attributes[_2].value;
      (v2 || a2) && (v2 && (a2 && v2.__html == a2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C$1(l2, p2, y2, o2, c2), v2)
      u2.__k = [];
    else if (_2 = u2.props.children, w$4(l2, Array.isArray(_2) ? _2 : [_2], u2, i, t2, o2 && d2 !== "foreignObject", r2, f2, r2 ? r2[0] : i.__k && k$3(i, 0), c2), r2 != null)
      for (_2 = r2.length; _2--; )
        r2[_2] != null && h$2(r2[_2]);
    c2 || ("value" in p2 && (_2 = p2.value) !== void 0 && (_2 !== l2.value || d2 === "progress" && !_2 || d2 === "option" && _2 !== y2.value) && H$1(l2, "value", _2, y2.value, false), "checked" in p2 && (_2 = p2.checked) !== void 0 && _2 !== l2.checked && H$1(l2, "checked", _2, y2.checked, false));
  }
  return l2;
}
function M$1(n2, u2, i) {
  try {
    typeof n2 == "function" ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$2.__e(n3, i);
  }
}
function N$1(n2, u2, i) {
  var t2, o2;
  if (l$2.unmount && l$2.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M$1(t2, null, u2)), (t2 = n2.__c) != null) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$2.__e(n3, u2);
      }
    t2.base = t2.__P = null;
  }
  if (t2 = n2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && N$1(t2[o2], u2, typeof n2.type != "function");
  i || n2.__e == null || h$2(n2.__e), n2.__e = n2.__d = void 0;
}
function O$1(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function S$1(u2, i, t2) {
  var o2, r2, f2;
  l$2.__ && l$2.__(u2, i), r2 = (o2 = typeof t2 == "function") ? null : t2 && t2.__k || i.__k, f2 = [], j$3(i, u2 = (!o2 && t2 || i).__k = v$2(d$2, null, [u2]), r2 || e$2, e$2, i.ownerSVGElement !== void 0, !o2 && t2 ? [t2] : r2 ? null : i.firstChild ? n$1.call(i.childNodes) : null, f2, !o2 && t2 ? t2 : r2 ? r2.__e : i.firstChild, o2), z$3(f2, u2);
}
function q$3(n2, l2) {
  S$1(n2, l2, q$3);
}
function B$1(l2, u2, i) {
  var t2, o2, r2, f2 = a$1({}, l2.props);
  for (r2 in u2)
    r2 == "key" ? t2 = u2[r2] : r2 == "ref" ? o2 = u2[r2] : f2[r2] = u2[r2];
  return arguments.length > 2 && (f2.children = arguments.length > 3 ? n$1.call(arguments, 2) : i), y$2(l2.type, f2, t2 || l2.key, o2 || l2.ref, null);
}
function D$1(n2, l2) {
  var u2 = { __c: l2 = "__cC" + f$2++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3) {
    var u3, i;
    return this.getChildContext || (u3 = [], (i = {})[l2] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u3.some(m$2);
    }, this.sub = function(n4) {
      u3.push(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
      };
    }), n3.children;
  } };
  return u2.Provider.__ = u2.Consumer.contextType = u2;
}
n$1 = c$2.slice, l$2 = { __e: function(n2, l2, u2, i) {
  for (var t2, o2, r2; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && o2.getDerivedStateFromError != null && (t2.setState(o2.getDerivedStateFromError(n2)), r2 = t2.__d), t2.componentDidCatch != null && (t2.componentDidCatch(n2, i || {}), r2 = t2.__d), r2)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$1 = 0, _$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a$1({}, this.state), typeof n2 == "function" && (n2 = n2(a$1({}, u2), this.props)), n2 && a$1(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), m$2(this));
}, _$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), m$2(this));
}, _$1.prototype.render = d$2, t$2 = [], o$1 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g$3.__r = 0, f$2 = 0;
var classnames$2 = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames$2);
var classnames$1 = classnames$2.exports;
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
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
var t$1, u, r$1, o, i$1 = 0, c$1 = [], f$1 = [], e$1 = l$2.__b, a = l$2.__r, v$1 = l$2.diffed, l$1 = l$2.__c, m$1 = l$2.unmount;
function p$1(t2, r2) {
  l$2.__h && l$2.__h(u, t2, i$1 || r2), i$1 = 0;
  var o2 = u.__H || (u.__H = { __: [], __h: [] });
  return t2 >= o2.__.length && o2.__.push({ __V: f$1 }), o2.__[t2];
}
function y$1(n2) {
  return i$1 = 1, d$1(z$2, n2);
}
function d$1(n2, r2, o2) {
  var i = p$1(t$1++, 2);
  return i.t = n2, i.__c || (i.__ = [o2 ? o2(r2) : z$2(void 0, r2), function(n3) {
    var t2 = i.t(i.__[0], n3);
    i.__[0] !== t2 && (i.__ = [t2, i.__[1]], i.__c.setState({}));
  }], i.__c = u), i.__;
}
function _(r2, o2) {
  var i = p$1(t$1++, 3);
  !l$2.__s && w$3(i.__H, o2) && (i.__ = r2, i.u = o2, u.__H.__h.push(i));
}
function h$1(r2, o2) {
  var i = p$1(t$1++, 4);
  !l$2.__s && w$3(i.__H, o2) && (i.__ = r2, i.u = o2, u.__h.push(i));
}
function s(n2) {
  return i$1 = 5, F$1(function() {
    return { current: n2 };
  }, []);
}
function A$2(n2, t2, u2) {
  i$1 = 6, h$1(function() {
    return typeof n2 == "function" ? (n2(t2()), function() {
      return n2(null);
    }) : n2 ? (n2.current = t2(), function() {
      return n2.current = null;
    }) : void 0;
  }, u2 == null ? u2 : u2.concat(n2));
}
function F$1(n2, u2) {
  var r2 = p$1(t$1++, 7);
  return w$3(r2.__H, u2) ? (r2.__V = n2(), r2.u = u2, r2.__h = n2, r2.__V) : r2.__;
}
function T$1(n2, t2) {
  return i$1 = 8, F$1(function() {
    return n2;
  }, t2);
}
function q$2(n2) {
  var r2 = u.context[n2.__c], o2 = p$1(t$1++, 9);
  return o2.c = n2, r2 ? (o2.__ == null && (o2.__ = true, r2.sub(u)), r2.props.value) : n2.__;
}
function x$2(t2, u2) {
  l$2.useDebugValue && l$2.useDebugValue(u2 ? u2(t2) : t2);
}
function V$1(n2) {
  var r2 = p$1(t$1++, 10), o2 = y$1();
  return r2.__ = n2, u.componentDidCatch || (u.componentDidCatch = function(n3) {
    r2.__ && r2.__(n3), o2[1](n3);
  }), [o2[0], function() {
    o2[1](void 0);
  }];
}
function b$1() {
  for (var t2; t2 = c$1.shift(); )
    if (t2.__P)
      try {
        t2.__H.__h.forEach(j$2), t2.__H.__h.forEach(k$2), t2.__H.__h = [];
      } catch (u2) {
        t2.__H.__h = [], l$2.__e(u2, t2.__v);
      }
}
l$2.__b = function(n2) {
  u = null, e$1 && e$1(n2);
}, l$2.__r = function(n2) {
  a && a(n2), t$1 = 0;
  var o2 = (u = n2.__c).__H;
  o2 && (r$1 === u ? (o2.__h = [], u.__h = [], o2.__.forEach(function(n3) {
    n3.__V = f$1, n3.u = void 0;
  })) : (o2.__h.forEach(j$2), o2.__h.forEach(k$2), o2.__h = [])), r$1 = u;
}, l$2.diffed = function(t2) {
  v$1 && v$1(t2);
  var i = t2.__c;
  i && i.__H && (i.__H.__h.length && (c$1.push(i) !== 1 && o === l$2.requestAnimationFrame || ((o = l$2.requestAnimationFrame) || function(n2) {
    var t3, u2 = function() {
      clearTimeout(r2), g$2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, r2 = setTimeout(u2, 100);
    g$2 && (t3 = requestAnimationFrame(u2));
  })(b$1)), i.__H.__.forEach(function(n2) {
    n2.u && (n2.__H = n2.u), n2.__V !== f$1 && (n2.__ = n2.__V), n2.u = void 0, n2.__V = f$1;
  })), r$1 = u = null;
}, l$2.__c = function(t2, u2) {
  u2.some(function(t3) {
    try {
      t3.__h.forEach(j$2), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || k$2(n2);
      });
    } catch (r2) {
      u2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), u2 = [], l$2.__e(r2, t3.__v);
    }
  }), l$1 && l$1(t2, u2);
}, l$2.unmount = function(t2) {
  m$1 && m$1(t2);
  var u2, r2 = t2.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n2) {
    try {
      j$2(n2);
    } catch (n3) {
      u2 = n3;
    }
  }), u2 && l$2.__e(u2, r2.__v));
};
var g$2 = typeof requestAnimationFrame == "function";
function j$2(n2) {
  var t2 = u, r2 = n2.__c;
  typeof r2 == "function" && (n2.__c = void 0, r2()), u = t2;
}
function k$2(n2) {
  var t2 = u;
  n2.__c = n2.__(), u = t2;
}
function w$3(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, u2) {
    return t3 !== n2[u2];
  });
}
function z$2(n2, t2) {
  return typeof t2 == "function" ? t2(n2) : t2;
}
function C(n2, t2) {
  for (var e2 in t2)
    n2[e2] = t2[e2];
  return n2;
}
function S(n2, t2) {
  for (var e2 in n2)
    if (e2 !== "__source" && !(e2 in t2))
      return true;
  for (var r2 in t2)
    if (r2 !== "__source" && n2[r2] !== t2[r2])
      return true;
  return false;
}
function E(n2) {
  this.props = n2;
}
function g$1(n2, t2) {
  function e2(n3) {
    var e3 = this.props.ref, r3 = e3 == n3.ref;
    return !r3 && e3 && (e3.call ? e3(null) : e3.current = null), t2 ? !t2(this.props, n3) || !r3 : S(this.props, n3);
  }
  function r2(t3) {
    return this.shouldComponentUpdate = e2, v$2(n2, t3);
  }
  return r2.displayName = "Memo(" + (n2.displayName || n2.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
}
(E.prototype = new _$1()).isPureReactComponent = true, E.prototype.shouldComponentUpdate = function(n2, t2) {
  return S(this.props, n2) || S(this.state, t2);
};
var w$2 = l$2.__b;
l$2.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), w$2 && w$2(n2);
};
var R = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function x$1(n2) {
  function t2(t3) {
    var e2 = C({}, t3);
    return delete e2.ref, n2(e2, t3.ref || null);
  }
  return t2.$$typeof = R, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t2;
}
var N = function(n2, t2) {
  return n2 == null ? null : A$3(A$3(n2).map(t2));
}, k$1 = { map: N, forEach: N, count: function(n2) {
  return n2 ? A$3(n2).length : 0;
}, only: function(n2) {
  var t2 = A$3(n2);
  if (t2.length !== 1)
    throw "Children.only";
  return t2[0];
}, toArray: A$3 }, A$1 = l$2.__e;
l$2.__e = function(n2, t2, e2, r2) {
  if (n2.then) {
    for (var u2, o2 = t2; o2 = o2.__; )
      if ((u2 = o2.__c) && u2.__c)
        return t2.__e == null && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n2, t2);
  }
  A$1(n2, t2, e2, r2);
};
var O = l$2.unmount;
function L() {
  this.__u = 0, this.t = null, this.__b = null;
}
function U(n2) {
  var t2 = n2.__.__c;
  return t2 && t2.__e && t2.__e(n2);
}
function F(n2) {
  var t2, e2, r2;
  function u2(u3) {
    if (t2 || (t2 = n2()).then(function(n3) {
      e2 = n3.default || n3;
    }, function(n3) {
      r2 = n3;
    }), r2)
      throw r2;
    if (!e2)
      throw t2;
    return v$2(e2, u3);
  }
  return u2.displayName = "Lazy", u2.__f = true, u2;
}
function M() {
  this.u = null, this.o = null;
}
l$2.unmount = function(n2) {
  var t2 = n2.__c;
  t2 && t2.__R && t2.__R(), t2 && n2.__h === true && (n2.type = null), O && O(n2);
}, (L.prototype = new _$1()).__c = function(n2, t2) {
  var e2 = t2.__c, r2 = this;
  r2.t == null && (r2.t = []), r2.t.push(e2);
  var u2 = U(r2.__v), o2 = false, i = function() {
    o2 || (o2 = true, e2.__R = null, u2 ? u2(l2) : l2());
  };
  e2.__R = i;
  var l2 = function() {
    if (!--r2.__u) {
      if (r2.state.__e) {
        var n3 = r2.state.__e;
        r2.__v.__k[0] = function n4(t4, e3, r3) {
          return t4 && (t4.__v = null, t4.__k = t4.__k && t4.__k.map(function(t5) {
            return n4(t5, e3, r3);
          }), t4.__c && t4.__c.__P === e3 && (t4.__e && r3.insertBefore(t4.__e, t4.__d), t4.__c.__e = true, t4.__c.__P = r3)), t4;
        }(n3, n3.__c.__P, n3.__c.__O);
      }
      var t3;
      for (r2.setState({ __e: r2.__b = null }); t3 = r2.t.pop(); )
        t3.forceUpdate();
    }
  }, f2 = t2.__h === true;
  r2.__u++ || f2 || r2.setState({ __e: r2.__b = r2.__v.__k[0] }), n2.then(i, i);
}, L.prototype.componentWillUnmount = function() {
  this.t = [];
}, L.prototype.render = function(n2, t2) {
  if (this.__b) {
    if (this.__v.__k) {
      var e2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
      this.__v.__k[0] = function n3(t3, e3, r3) {
        return t3 && (t3.__c && t3.__c.__H && (t3.__c.__H.__.forEach(function(n4) {
          typeof n4.__c == "function" && n4.__c();
        }), t3.__c.__H = null), (t3 = C({}, t3)).__c != null && (t3.__c.__P === r3 && (t3.__c.__P = e3), t3.__c = null), t3.__k = t3.__k && t3.__k.map(function(t4) {
          return n3(t4, e3, r3);
        })), t3;
      }(this.__b, e2, r2.__O = r2.__P);
    }
    this.__b = null;
  }
  var u2 = t2.__e && v$2(d$2, null, n2.fallback);
  return u2 && (u2.__h = null), [v$2(d$2, null, t2.__e ? null : n2.children), u2];
};
var T = function(n2, t2, e2) {
  if (++e2[1] === e2[0] && n2.o.delete(t2), n2.props.revealOrder && (n2.props.revealOrder[0] !== "t" || !n2.o.size))
    for (e2 = n2.u; e2; ) {
      for (; e2.length > 3; )
        e2.pop()();
      if (e2[1] < e2[0])
        break;
      n2.u = e2 = e2[2];
    }
};
function D(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function I(n2) {
  var t2 = this, e2 = n2.i;
  t2.componentWillUnmount = function() {
    S$1(null, t2.l), t2.l = null, t2.i = null;
  }, t2.i && t2.i !== e2 && t2.componentWillUnmount(), n2.__v ? (t2.l || (t2.i = e2, t2.l = { nodeType: 1, parentNode: e2, childNodes: [], appendChild: function(n3) {
    this.childNodes.push(n3), t2.i.appendChild(n3);
  }, insertBefore: function(n3, e3) {
    this.childNodes.push(n3), t2.i.appendChild(n3);
  }, removeChild: function(n3) {
    this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), t2.i.removeChild(n3);
  } }), S$1(v$2(D, { context: t2.context }, n2.__v), t2.l)) : t2.l && t2.componentWillUnmount();
}
function W(n2, t2) {
  var e2 = v$2(I, { __v: n2, i: t2 });
  return e2.containerInfo = t2, e2;
}
(M.prototype = new _$1()).__e = function(n2) {
  var t2 = this, e2 = U(t2.__v), r2 = t2.o.get(n2);
  return r2[0]++, function(u2) {
    var o2 = function() {
      t2.props.revealOrder ? (r2.push(u2), T(t2, n2, r2)) : u2();
    };
    e2 ? e2(o2) : o2();
  };
}, M.prototype.render = function(n2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = A$3(n2.children);
  n2.revealOrder && n2.revealOrder[0] === "b" && t2.reverse();
  for (var e2 = t2.length; e2--; )
    this.o.set(t2[e2], this.u = [1, 0, this.u]);
  return n2.children;
}, M.prototype.componentDidUpdate = M.prototype.componentDidMount = function() {
  var n2 = this;
  this.o.forEach(function(t2, e2) {
    T(n2, e2, t2);
  });
};
var P = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103, V = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|shape|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, $ = typeof document != "undefined", j$1 = function(n2) {
  return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
};
function z$1(n2, t2, e2) {
  return t2.__k == null && (t2.textContent = ""), S$1(n2, t2), typeof e2 == "function" && e2(), n2 ? n2.__c : null;
}
function B(n2, t2, e2) {
  return q$3(n2, t2), typeof e2 == "function" && e2(), n2 ? n2.__c : null;
}
_$1.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n2) {
  Object.defineProperty(_$1.prototype, n2, { configurable: true, get: function() {
    return this["UNSAFE_" + n2];
  }, set: function(t2) {
    Object.defineProperty(this, n2, { configurable: true, writable: true, value: t2 });
  } });
});
var H = l$2.event;
function Z() {
}
function Y() {
  return this.cancelBubble;
}
function q$1() {
  return this.defaultPrevented;
}
l$2.event = function(n2) {
  return H && (n2 = H(n2)), n2.persist = Z, n2.isPropagationStopped = Y, n2.isDefaultPrevented = q$1, n2.nativeEvent = n2;
};
var G, J = { configurable: true, get: function() {
  return this.class;
} }, K = l$2.vnode;
l$2.vnode = function(n2) {
  var t2 = n2.type, e2 = n2.props, r2 = e2;
  if (typeof t2 == "string") {
    var u2 = t2.indexOf("-") === -1;
    for (var o2 in r2 = {}, e2) {
      var i = e2[o2];
      $ && o2 === "children" && t2 === "noscript" || o2 === "value" && "defaultValue" in e2 && i == null || (o2 === "defaultValue" && "value" in e2 && e2.value == null ? o2 = "value" : o2 === "download" && i === true ? i = "" : /ondoubleclick/i.test(o2) ? o2 = "ondblclick" : /^onchange(textarea|input)/i.test(o2 + t2) && !j$1(e2.type) ? o2 = "oninput" : /^onfocus$/i.test(o2) ? o2 = "onfocusin" : /^onblur$/i.test(o2) ? o2 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o2) ? o2 = o2.toLowerCase() : u2 && V.test(o2) ? o2 = o2.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i === null && (i = void 0), /^oninput$/i.test(o2) && (o2 = o2.toLowerCase(), r2[o2] && (o2 = "oninputCapture")), r2[o2] = i);
    }
    t2 == "select" && r2.multiple && Array.isArray(r2.value) && (r2.value = A$3(e2.children).forEach(function(n3) {
      n3.props.selected = r2.value.indexOf(n3.props.value) != -1;
    })), t2 == "select" && r2.defaultValue != null && (r2.value = A$3(e2.children).forEach(function(n3) {
      n3.props.selected = r2.multiple ? r2.defaultValue.indexOf(n3.props.value) != -1 : r2.defaultValue == n3.props.value;
    })), n2.props = r2, e2.class != e2.className && (J.enumerable = "className" in e2, e2.className != null && (r2.class = e2.className), Object.defineProperty(r2, "className", J));
  }
  n2.$$typeof = P, K && K(n2);
};
var Q = l$2.__r;
l$2.__r = function(n2) {
  Q && Q(n2), G = n2.__c;
};
var X = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
  return G.__n[n2.__c].props.value;
} } } }, nn = "17.0.2";
function tn(n2) {
  return v$2.bind(null, n2);
}
function en(n2) {
  return !!n2 && n2.$$typeof === P;
}
function rn(n2) {
  return en(n2) ? B$1.apply(null, arguments) : n2;
}
function un(n2) {
  return !!n2.__k && (S$1(null, n2), true);
}
function on(n2) {
  return n2 && (n2.base || n2.nodeType === 1 && n2) || null;
}
var ln = function(n2, t2) {
  return n2(t2);
}, fn = function(n2, t2) {
  return n2(t2);
}, cn = d$2;
var compat_module = { useState: y$1, useReducer: d$1, useEffect: _, useLayoutEffect: h$1, useRef: s, useImperativeHandle: A$2, useMemo: F$1, useCallback: T$1, useContext: q$2, useDebugValue: x$2, version: "17.0.2", Children: k$1, render: z$1, hydrate: B, unmountComponentAtNode: un, createPortal: W, createElement: v$2, createContext: D$1, createFactory: tn, cloneElement: rn, createRef: p$2, Fragment: d$2, isValidElement: en, findDOMNode: on, Component: _$1, PureComponent: E, memo: g$1, forwardRef: x$1, flushSync: fn, unstable_batchedUpdates: ln, StrictMode: d$2, Suspense: L, SuspenseList: M, lazy: F, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: X };
var React = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": compat_module,
  version: nn,
  Children: k$1,
  render: z$1,
  hydrate: B,
  unmountComponentAtNode: un,
  createPortal: W,
  createFactory: tn,
  cloneElement: rn,
  isValidElement: en,
  findDOMNode: on,
  PureComponent: E,
  memo: g$1,
  forwardRef: x$1,
  flushSync: fn,
  unstable_batchedUpdates: ln,
  StrictMode: cn,
  Suspense: L,
  SuspenseList: M,
  lazy: F,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: X,
  createElement: v$2,
  createContext: D$1,
  createRef: p$2,
  Fragment: d$2,
  Component: _$1,
  useState: y$1,
  useReducer: d$1,
  useEffect: _,
  useLayoutEffect: h$1,
  useRef: s,
  useImperativeHandle: A$2,
  useMemo: F$1,
  useCallback: T$1,
  useContext: q$2,
  useDebugValue: x$2,
  useErrorBoundary: V$1
}, Symbol.toStringTag, { value: "Module" }));
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options2) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options2.key);
  if (options2.nonce !== void 0) {
    tag.setAttribute("nonce", options2.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options2) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options2.speedy === void 0 ? true : options2.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options2.nonce;
    this.key = options2.key;
    this.container = options2.container;
    this.prepend = options2.prepend;
    this.insertionPoint = options2.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e2) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3);
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && characters2.charCodeAt(length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k2 = 0; i < index; ++i)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j = points[i])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
function prefixer(element, index, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case DECLARATION:
          element.return = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
        case RULESET:
          if (element.length)
            return combine(element.props, function(value) {
              switch (match(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize([copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] })], callback);
                case "::placeholder":
                  return serialize([
                    copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }),
                    copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }),
                    copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] })
                  ], callback);
              }
              return "";
            });
      }
  }
}
function memoize(fn2) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn2(arg);
    return cache[arg];
  };
}
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index] = peek() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k2 = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k2++) {
      element.props[k2] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
      element["return"] = "";
      element.value = "";
    }
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options2) {
  var key = options2.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options2.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options2.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node2) {
      var attrib = node2.getAttribute("data-emotion").split(" ");
      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }
      nodesToHydrate.push(node2);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles) {
      return serialize(compile(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options2.nonce,
      speedy: options2.speedy,
      prepend: options2.prepend,
      insertionPoint: options2.insertionPoint
    }),
    nonce: options2.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
var reactIs$1 = { exports: {} };
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = typeof Symbol === "function" && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w$1 = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
function z(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var u2 = a2.$$typeof;
    switch (u2) {
      case c:
        switch (a2 = a2.type, a2) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a2;
              default:
                return u2;
            }
        }
      case d:
        return u2;
    }
  }
}
function A(a2) {
  return z(a2) === m;
}
reactIs_production_min.AsyncMode = l;
reactIs_production_min.ConcurrentMode = m;
reactIs_production_min.ContextConsumer = k;
reactIs_production_min.ContextProvider = h;
reactIs_production_min.Element = c;
reactIs_production_min.ForwardRef = n;
reactIs_production_min.Fragment = e;
reactIs_production_min.Lazy = t;
reactIs_production_min.Memo = r;
reactIs_production_min.Portal = d;
reactIs_production_min.Profiler = g;
reactIs_production_min.StrictMode = f;
reactIs_production_min.Suspense = p;
reactIs_production_min.isAsyncMode = function(a2) {
  return A(a2) || z(a2) === l;
};
reactIs_production_min.isConcurrentMode = A;
reactIs_production_min.isContextConsumer = function(a2) {
  return z(a2) === k;
};
reactIs_production_min.isContextProvider = function(a2) {
  return z(a2) === h;
};
reactIs_production_min.isElement = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === c;
};
reactIs_production_min.isForwardRef = function(a2) {
  return z(a2) === n;
};
reactIs_production_min.isFragment = function(a2) {
  return z(a2) === e;
};
reactIs_production_min.isLazy = function(a2) {
  return z(a2) === t;
};
reactIs_production_min.isMemo = function(a2) {
  return z(a2) === r;
};
reactIs_production_min.isPortal = function(a2) {
  return z(a2) === d;
};
reactIs_production_min.isProfiler = function(a2) {
  return z(a2) === g;
};
reactIs_production_min.isStrictMode = function(a2) {
  return z(a2) === f;
};
reactIs_production_min.isSuspense = function(a2) {
  return z(a2) === p;
};
reactIs_production_min.isValidElementType = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === e || a2 === m || a2 === g || a2 === f || a2 === p || a2 === q || typeof a2 === "object" && a2 !== null && (a2.$$typeof === t || a2.$$typeof === r || a2.$$typeof === h || a2.$$typeof === k || a2.$$typeof === n || a2.$$typeof === w$1 || a2.$$typeof === x || a2.$$typeof === y || a2.$$typeof === v);
};
reactIs_production_min.typeOf = z;
{
  reactIs$1.exports = reactIs_production_min;
}
var reactIs = reactIs$1.exports;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames2) {
  var rawClassName = "";
  classNames2.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if ((isStringTag === false || isBrowser === false) && cache.registered[className] === void 0) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
function murmur2(str) {
  var h2 = 0;
  var k2, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k2 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= k2 >>> 24;
    h2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i) & 255;
      h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles = interpolation.styles + ";";
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    styles += strings[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      styles += strings[i];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name = murmur2(styles) + identifierName;
  return {
    name,
    styles,
    next: cursor
  };
};
var hasOwnProperty = {}.hasOwnProperty;
var EmotionCacheContext = /* @__PURE__ */ D$1(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
  key: "css"
}) : null);
EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ x$1(function(props, ref) {
    var cache = q$2(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext = /* @__PURE__ */ D$1({});
var useInsertionEffect = React["useInsertionEffect"] ? React["useInsertionEffect"] : function useInsertionEffect2(create) {
  create();
};
function useInsertionEffectMaybe(create) {
  useInsertionEffect(create);
}
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps2(type, props) {
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type;
  return newProps;
};
var Insertion$1 = function Insertion(_ref3) {
  var cache = _ref3.cache, serialized = _ref3.serialized, isStringTag = _ref3.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  useInsertionEffectMaybe(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  return null;
};
var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
  var cssProp = props.css;
  if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
    cssProp = cache.registered[cssProp];
  }
  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = "";
  if (typeof props.className === "string") {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }
  var serialized = serializeStyles(registeredStyles, void 0, q$2(ThemeContext));
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== "css" && key !== typePropName && true) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className;
  return /* @__PURE__ */ v$2(d$2, null, /* @__PURE__ */ v$2(Insertion$1, {
    cache,
    serialized,
    isStringTag: typeof WrappedComponent === "string"
  }), /* @__PURE__ */ v$2(WrappedComponent, newProps));
});
var jsx = function jsx2(type, props) {
  var args = arguments;
  if (props == null || !hasOwnProperty.call(props, "css")) {
    return v$2.apply(void 0, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);
  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }
  return v$2.apply(null, createElementArgArray);
};
React["useInsertionEffect"] ? React["useInsertionEffect"] : h$1;
function css$2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
var keyframes = function keyframes2() {
  var insertable = css$2.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var classnames = function classnames2(args) {
  var len = args.length;
  var i = 0;
  var cls = "";
  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null)
      continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(arg)) {
          toAdd = classnames2(arg);
        } else {
          toAdd = "";
          for (var k2 in arg) {
            if (arg[k2] && k2) {
              toAdd && (toAdd += " ");
              toAdd += k2;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += " ");
      cls += toAdd;
    }
  }
  return cls;
};
function merge(registered, css4, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css4(registeredStyles);
}
var Insertion2 = function Insertion3(_ref3) {
  var cache = _ref3.cache, serializedArr = _ref3.serializedArr;
  useInsertionEffectMaybe(function() {
    for (var i = 0; i < serializedArr.length; i++) {
      insertStyles(cache, serializedArr[i], false);
    }
  });
  return null;
};
var ClassNames = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  var hasRendered = false;
  var serializedArr = [];
  var css4 = function css5() {
    if (hasRendered && false) {
      throw new Error("css can only be used during render");
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = serializeStyles(args, cache.registered);
    serializedArr.push(serialized);
    registerStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };
  var cx = function cx2() {
    if (hasRendered && false) {
      throw new Error("cx can only be used during render");
    }
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return merge(cache.registered, css4, classnames(args));
  };
  var content = {
    css: css4,
    cx,
    theme: q$2(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /* @__PURE__ */ v$2(d$2, null, /* @__PURE__ */ v$2(Insertion2, {
    cache,
    serializedArr
  }), ele);
});
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
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
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
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
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
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
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _setPrototypeOf(o2, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p3) {
    o3.__proto__ = p3;
    return o3;
  };
  return _setPrototypeOf(o2, p2);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
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
function _defineProperty(obj, key, value) {
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
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
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
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
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
var _excluded$3 = ["className", "clearValue", "cx", "getStyles", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
var noop = function noop2() {
};
function applyPrefixToName(prefix2, name) {
  if (!name) {
    return prefix2;
  } else if (name[0] === "-") {
    return prefix2 + name;
  } else {
    return prefix2 + "__" + name;
  }
}
function classNames(prefix2, state, className) {
  var arr = [className];
  if (state && prefix2) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix2, key)));
      }
    }
  }
  return arr.filter(function(i) {
    return i;
  }).map(function(i) {
    return String(i).trim();
  }).join(" ");
}
var cleanValue = function cleanValue2(value) {
  if (isArray(value))
    return value.filter(Boolean);
  if (_typeof(value) === "object" && value !== null)
    return [value];
  return [];
};
var cleanCommonProps = function cleanCommonProps2(props) {
  props.className;
  props.clearValue;
  props.cx;
  props.getStyles;
  props.getValue;
  props.hasValue;
  props.isMulti;
  props.isRtl;
  props.options;
  props.selectOption;
  props.selectProps;
  props.setValue;
  props.theme;
  var innerProps = _objectWithoutProperties(props, _excluded$3);
  return _objectSpread2({}, innerProps);
};
function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
}
function normalizedHeight(el) {
  if (isDocumentElement(el)) {
    return window.innerHeight;
  }
  return el.clientHeight;
}
function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }
  return el.scrollTop;
}
function scrollTo(el, top) {
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }
  el.scrollTop = top;
}
function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === "absolute";
  var overflowRx = /(auto|scroll)/;
  if (style.position === "fixed")
    return document.documentElement;
  for (var parent = element; parent = parent.parentElement; ) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === "static") {
      continue;
    }
    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }
  return document.documentElement;
}
function easeOutCubic(t2, b2, c2, d2) {
  return c2 * ((t2 = t2 / d2 - 1) * t2 * t2 + 1) + b2;
}
function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;
  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }
  animateScroll();
}
function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;
  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}
function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
function isTouchCapable() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e2) {
    return false;
  }
}
function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e2) {
    return false;
  }
}
var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
var w = typeof window !== "undefined" ? window : {};
if (w.addEventListener && w.removeEventListener) {
  w.addEventListener("p", noop, options);
  w.removeEventListener("p", noop, false);
}
var supportsPassiveEvents = passiveOptionAccessed;
function notNullish(item) {
  return item != null;
}
function isArray(arg) {
  return Array.isArray(arg);
}
function valueTernary(isMulti, multiValue, singleValue) {
  return isMulti ? multiValue : singleValue;
}
function singleValueAsValue(singleValue) {
  return singleValue;
}
function multiValueAsValue(multiValue) {
  return multiValue;
}
var removeProps = function removeProps2(propsObj) {
  for (var _len = arguments.length, properties = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    properties[_key - 1] = arguments[_key];
  }
  var propsMap = Object.entries(propsObj).filter(function(_ref3) {
    var _ref22 = _slicedToArray(_ref3, 1), key = _ref22[0];
    return !properties.includes(key);
  });
  return propsMap.reduce(function(newProps, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], val = _ref4[1];
    newProps[key] = val;
    return newProps;
  }, {});
};
function getMenuPlacement(_ref3) {
  var maxHeight = _ref3.maxHeight, menuEl = _ref3.menuEl, minHeight = _ref3.minHeight, placement = _ref3.placement, shouldScroll = _ref3.shouldScroll, isFixedPosition = _ref3.isFixedPosition, theme = _ref3.theme;
  var spacing2 = theme.spacing;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: "bottom",
    maxHeight
  };
  if (!menuEl || !menuEl.offsetParent)
    return defaultState;
  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(), scrollHeight = _scrollParent$getBoun.height;
  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(), menuBottom = _menuEl$getBoundingCl.bottom, menuHeight = _menuEl$getBoundingCl.height, menuTop = _menuEl$getBoundingCl.top;
  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(), containerTop = _menuEl$offsetParent$.top;
  var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;
  switch (placement) {
    case "auto":
    case "bottom":
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: "bottom",
          maxHeight
        };
      }
      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        return {
          placement: "bottom",
          maxHeight
        };
      }
      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: "bottom",
          maxHeight: constrainedHeight
        };
      }
      if (placement === "auto" || isFixedPosition) {
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing2.controlHeight, maxHeight);
        }
        return {
          placement: "top",
          maxHeight: _constrainedHeight
        };
      }
      if (placement === "bottom") {
        if (shouldScroll) {
          scrollTo(scrollParent, scrollDown);
        }
        return {
          placement: "bottom",
          maxHeight
        };
      }
      break;
    case "top":
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: "top",
          maxHeight
        };
      }
      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: "top",
          maxHeight
        };
      }
      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight;
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: "top",
          maxHeight: _constrainedHeight2
        };
      }
      return {
        placement: "bottom",
        maxHeight
      };
    default:
      throw new Error('Invalid placement provided "'.concat(placement, '".'));
  }
  return defaultState;
}
function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: "top",
    top: "bottom"
  };
  return placement ? placementToCSSProp[placement] : "bottom";
}
var coercePlacement = function coercePlacement2(p2) {
  return p2 === "auto" ? "bottom" : p2;
};
var menuCSS = function menuCSS2(_ref22) {
  var _ref3;
  var placement = _ref22.placement, _ref2$theme = _ref22.theme, borderRadius2 = _ref2$theme.borderRadius, spacing2 = _ref2$theme.spacing, colors2 = _ref2$theme.colors;
  return _ref3 = {
    label: "menu"
  }, _defineProperty$1(_ref3, alignToControl(placement), "100%"), _defineProperty$1(_ref3, "backgroundColor", colors2.neutral0), _defineProperty$1(_ref3, "borderRadius", borderRadius2), _defineProperty$1(_ref3, "boxShadow", "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"), _defineProperty$1(_ref3, "marginBottom", spacing2.menuGutter), _defineProperty$1(_ref3, "marginTop", spacing2.menuGutter), _defineProperty$1(_ref3, "position", "absolute"), _defineProperty$1(_ref3, "width", "100%"), _defineProperty$1(_ref3, "zIndex", 1), _ref3;
};
var PortalPlacementContext = /* @__PURE__ */ D$1({
  getPortalPlacement: null
});
var MenuPlacer = /* @__PURE__ */ function(_Component) {
  _inherits(MenuPlacer2, _Component);
  var _super = _createSuper(MenuPlacer2);
  function MenuPlacer2() {
    var _this;
    _classCallCheck(this, MenuPlacer2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    };
    _this.context = void 0;
    _this.getPlacement = function(ref) {
      var _this$props = _this.props, minMenuHeight = _this$props.minMenuHeight, maxMenuHeight = _this$props.maxMenuHeight, menuPlacement = _this$props.menuPlacement, menuPosition = _this$props.menuPosition, menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView, theme = _this$props.theme;
      if (!ref)
        return;
      var isFixedPosition = menuPosition === "fixed";
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll,
        isFixedPosition,
        theme
      });
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (getPortalPlacement)
        getPortalPlacement(state);
      _this.setState(state);
    };
    _this.getUpdatedProps = function() {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return _objectSpread2(_objectSpread2({}, _this.props), {}, {
        placement,
        maxHeight: _this.state.maxHeight
      });
    };
    return _this;
  }
  _createClass(MenuPlacer2, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    }
  }]);
  return MenuPlacer2;
}(_$1);
MenuPlacer.contextType = PortalPlacementContext;
var Menu = function Menu2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerRef = props.innerRef, innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles("menu", props),
    className: cx({
      menu: true
    }, className),
    ref: innerRef
  }, innerProps), children);
};
var menuListCSS = function menuListCSS2(_ref4) {
  var maxHeight = _ref4.maxHeight, baseUnit2 = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight,
    overflowY: "auto",
    paddingBottom: baseUnit2,
    paddingTop: baseUnit2,
    position: "relative",
    WebkitOverflowScrolling: "touch"
  };
};
var MenuList = function MenuList2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps, innerRef = props.innerRef, isMulti = props.isMulti;
  return jsx("div", _extends({
    css: getStyles("menuList", props),
    className: cx({
      "menu-list": true,
      "menu-list--is-multi": isMulti
    }, className),
    ref: innerRef
  }, innerProps), children);
};
var noticeCSS = function noticeCSS2(_ref5) {
  var _ref5$theme = _ref5.theme, baseUnit2 = _ref5$theme.spacing.baseUnit, colors2 = _ref5$theme.colors;
  return {
    color: colors2.neutral40,
    padding: "".concat(baseUnit2 * 2, "px ").concat(baseUnit2 * 3, "px"),
    textAlign: "center"
  };
};
var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles("noOptionsMessage", props),
    className: cx({
      "menu-notice": true,
      "menu-notice--no-options": true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: "No options"
};
var LoadingMessage = function LoadingMessage2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles("loadingMessage", props),
    className: cx({
      "menu-notice": true,
      "menu-notice--loading": true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: "Loading..."
};
var menuPortalCSS = function menuPortalCSS2(_ref6) {
  var rect = _ref6.rect, offset = _ref6.offset, position2 = _ref6.position;
  return {
    left: rect.left,
    position: position2,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal = /* @__PURE__ */ function(_Component2) {
  _inherits(MenuPortal2, _Component2);
  var _super2 = _createSuper(MenuPortal2);
  function MenuPortal2() {
    var _this2;
    _classCallCheck(this, MenuPortal2);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _this2.state = {
      placement: null
    };
    _this2.getPortalPlacement = function(_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement);
      if (placement !== initialPlacement) {
        _this2.setState({
          placement
        });
      }
    };
    return _this2;
  }
  _createClass(MenuPortal2, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props, appendTo = _this$props2.appendTo, children = _this$props2.children, className = _this$props2.className, controlElement = _this$props2.controlElement, cx = _this$props2.cx, innerProps = _this$props2.innerProps, menuPlacement = _this$props2.menuPlacement, position2 = _this$props2.menuPosition, getStyles = _this$props2.getStyles;
      var isFixed = position2 === "fixed";
      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }
      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset,
        position: position2,
        rect
      };
      var menuWrapper = jsx("div", _extends({
        css: getStyles("menuPortal", state),
        className: cx({
          "menu-portal": true
        }, className)
      }, innerProps), children);
      return jsx(PortalPlacementContext.Provider, {
        value: {
          getPortalPlacement: this.getPortalPlacement
        }
      }, appendTo ? /* @__PURE__ */ W(menuWrapper, appendTo) : menuWrapper);
    }
  }]);
  return MenuPortal2;
}(_$1);
var containerCSS = function containerCSS2(_ref3) {
  var isDisabled = _ref3.isDisabled, isRtl = _ref3.isRtl;
  return {
    label: "container",
    direction: isRtl ? "rtl" : void 0,
    pointerEvents: isDisabled ? "none" : void 0,
    position: "relative"
  };
};
var SelectContainer = function SelectContainer2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps, isDisabled = props.isDisabled, isRtl = props.isRtl;
  return jsx("div", _extends({
    css: getStyles("container", props),
    className: cx({
      "--is-disabled": isDisabled,
      "--is-rtl": isRtl
    }, className)
  }, innerProps), children);
};
var valueContainerCSS = function valueContainerCSS2(_ref22) {
  var spacing2 = _ref22.theme.spacing, isMulti = _ref22.isMulti, hasValue = _ref22.hasValue, controlShouldRenderValue = _ref22.selectProps.controlShouldRenderValue;
  return {
    alignItems: "center",
    display: isMulti && hasValue && controlShouldRenderValue ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    padding: "".concat(spacing2.baseUnit / 2, "px ").concat(spacing2.baseUnit * 2, "px"),
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  };
};
var ValueContainer = function ValueContainer2(props) {
  var children = props.children, className = props.className, cx = props.cx, innerProps = props.innerProps, isMulti = props.isMulti, getStyles = props.getStyles, hasValue = props.hasValue;
  return jsx("div", _extends({
    css: getStyles("valueContainer", props),
    className: cx({
      "value-container": true,
      "value-container--is-multi": isMulti,
      "value-container--has-value": hasValue
    }, className)
  }, innerProps), children);
};
var indicatorsContainerCSS = function indicatorsContainerCSS2() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer2(props) {
  var children = props.children, className = props.className, cx = props.cx, innerProps = props.innerProps, getStyles = props.getStyles;
  return jsx("div", _extends({
    css: getStyles("indicatorsContainer", props),
    className: cx({
      indicators: true
    }, className)
  }, innerProps), children);
};
var _templateObject;
var _excluded$2 = ["size"];
var _ref2$1 = {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
};
var Svg = function Svg2(_ref3) {
  var size = _ref3.size, props = _objectWithoutProperties(_ref3, _excluded$2);
  return jsx("svg", _extends({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2$1
  }, props));
};
var CrossIcon = function CrossIcon2(props) {
  return jsx(Svg, _extends({
    size: 20
  }, props), jsx("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron2(props) {
  return jsx(Svg, _extends({
    size: 20
  }, props), jsx("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
};
var baseCSS = function baseCSS2(_ref3) {
  var isFocused = _ref3.isFocused, _ref3$theme = _ref3.theme, baseUnit2 = _ref3$theme.spacing.baseUnit, colors2 = _ref3$theme.colors;
  return {
    label: "indicatorContainer",
    color: isFocused ? colors2.neutral60 : colors2.neutral20,
    display: "flex",
    padding: baseUnit2 * 2,
    transition: "color 150ms",
    ":hover": {
      color: isFocused ? colors2.neutral80 : colors2.neutral40
    }
  };
};
var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles("dropdownIndicator", props),
    className: cx({
      indicator: true,
      "dropdown-indicator": true
    }, className)
  }, innerProps), children || jsx(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles("clearIndicator", props),
    className: cx({
      indicator: true,
      "clear-indicator": true
    }, className)
  }, innerProps), children || jsx(CrossIcon, null));
};
var indicatorSeparatorCSS = function indicatorSeparatorCSS2(_ref4) {
  var isDisabled = _ref4.isDisabled, _ref4$theme = _ref4.theme, baseUnit2 = _ref4$theme.spacing.baseUnit, colors2 = _ref4$theme.colors;
  return {
    label: "indicatorSeparator",
    alignSelf: "stretch",
    backgroundColor: isDisabled ? colors2.neutral10 : colors2.neutral20,
    marginBottom: baseUnit2 * 2,
    marginTop: baseUnit2 * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator2(props) {
  var className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
  return jsx("span", _extends({}, innerProps, {
    css: getStyles("indicatorSeparator", props),
    className: cx({
      "indicator-separator": true
    }, className)
  }));
};
var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
var loadingIndicatorCSS = function loadingIndicatorCSS2(_ref5) {
  var isFocused = _ref5.isFocused, size = _ref5.size, _ref5$theme = _ref5.theme, colors2 = _ref5$theme.colors, baseUnit2 = _ref5$theme.spacing.baseUnit;
  return {
    label: "loadingIndicator",
    color: isFocused ? colors2.neutral60 : colors2.neutral20,
    display: "flex",
    padding: baseUnit2 * 2,
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: "center",
    verticalAlign: "middle"
  };
};
var LoadingDot = function LoadingDot2(_ref6) {
  var delay = _ref6.delay, offset = _ref6.offset;
  return jsx("span", {
    css: /* @__PURE__ */ css$2({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: offset ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, "", "")
  });
};
var LoadingIndicator = function LoadingIndicator2(props) {
  var className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps, isRtl = props.isRtl;
  return jsx("div", _extends({
    css: getStyles("loadingIndicator", props),
    className: cx({
      indicator: true,
      "loading-indicator": true
    }, className)
  }, innerProps), jsx(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), jsx(LoadingDot, {
    delay: 160,
    offset: true
  }), jsx(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};
var css$1 = function css(_ref3) {
  var isDisabled = _ref3.isDisabled, isFocused = _ref3.isFocused, _ref$theme = _ref3.theme, colors2 = _ref$theme.colors, borderRadius2 = _ref$theme.borderRadius, spacing2 = _ref$theme.spacing;
  return {
    label: "control",
    alignItems: "center",
    backgroundColor: isDisabled ? colors2.neutral5 : colors2.neutral0,
    borderColor: isDisabled ? colors2.neutral10 : isFocused ? colors2.primary : colors2.neutral20,
    borderRadius: borderRadius2,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors2.primary) : void 0,
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: spacing2.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms",
    "&:hover": {
      borderColor: isFocused ? colors2.primary : colors2.neutral30
    }
  };
};
var Control = function Control2(props) {
  var children = props.children, cx = props.cx, getStyles = props.getStyles, className = props.className, isDisabled = props.isDisabled, isFocused = props.isFocused, innerRef = props.innerRef, innerProps = props.innerProps, menuIsOpen = props.menuIsOpen;
  return jsx("div", _extends({
    ref: innerRef,
    css: getStyles("control", props),
    className: cx({
      control: true,
      "control--is-disabled": isDisabled,
      "control--is-focused": isFocused,
      "control--menu-is-open": menuIsOpen
    }, className)
  }, innerProps), children);
};
var _excluded$1$1 = ["data"];
var groupCSS = function groupCSS2(_ref3) {
  var spacing2 = _ref3.theme.spacing;
  return {
    paddingBottom: spacing2.baseUnit * 2,
    paddingTop: spacing2.baseUnit * 2
  };
};
var Group = function Group2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, Heading = props.Heading, headingProps = props.headingProps, innerProps = props.innerProps, label = props.label, theme = props.theme, selectProps = props.selectProps;
  return jsx("div", _extends({
    css: getStyles("group", props),
    className: cx({
      group: true
    }, className)
  }, innerProps), jsx(Heading, _extends({}, headingProps, {
    selectProps,
    theme,
    getStyles,
    cx
  }), label), jsx("div", null, children));
};
var groupHeadingCSS = function groupHeadingCSS2(_ref22) {
  var spacing2 = _ref22.theme.spacing;
  return {
    label: "group",
    color: "#999",
    cursor: "default",
    display: "block",
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: spacing2.baseUnit * 3,
    paddingRight: spacing2.baseUnit * 3,
    textTransform: "uppercase"
  };
};
var GroupHeading = function GroupHeading2(props) {
  var getStyles = props.getStyles, cx = props.cx, className = props.className;
  var _cleanCommonProps = cleanCommonProps(props);
  _cleanCommonProps.data;
  var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1$1);
  return jsx("div", _extends({
    css: getStyles("groupHeading", props),
    className: cx({
      "group-heading": true
    }, className)
  }, innerProps));
};
var _excluded$4 = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
var inputCSS = function inputCSS2(_ref3) {
  var isDisabled = _ref3.isDisabled, value = _ref3.value, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2({
    margin: spacing2.baseUnit / 2,
    paddingBottom: spacing2.baseUnit / 2,
    paddingTop: spacing2.baseUnit / 2,
    visibility: isDisabled ? "hidden" : "visible",
    color: colors2.neutral80,
    transform: value ? "translateZ(0)" : ""
  }, containerStyle);
};
var spacingStyle = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
};
var containerStyle = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": _objectSpread2({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, spacingStyle)
};
var inputStyle = function inputStyle2(isHidden) {
  return _objectSpread2({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: isHidden ? 0 : 1,
    width: "100%"
  }, spacingStyle);
};
var Input = function Input2(props) {
  var className = props.className, cx = props.cx, getStyles = props.getStyles, value = props.value;
  var _cleanCommonProps = cleanCommonProps(props), innerRef = _cleanCommonProps.innerRef, isDisabled = _cleanCommonProps.isDisabled, isHidden = _cleanCommonProps.isHidden, inputClassName = _cleanCommonProps.inputClassName, innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$4);
  return jsx("div", {
    className: cx({
      "input-container": true
    }, className),
    css: getStyles("input", props),
    "data-value": value || ""
  }, jsx("input", _extends({
    className: cx({
      input: true
    }, inputClassName),
    ref: innerRef,
    style: inputStyle(isHidden),
    disabled: isDisabled
  }, innerProps)));
};
var multiValueCSS = function multiValueCSS2(_ref3) {
  var _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, borderRadius2 = _ref$theme.borderRadius, colors2 = _ref$theme.colors;
  return {
    label: "multiValue",
    backgroundColor: colors2.neutral10,
    borderRadius: borderRadius2 / 2,
    display: "flex",
    margin: spacing2.baseUnit / 2,
    minWidth: 0
  };
};
var multiValueLabelCSS = function multiValueLabelCSS2(_ref22) {
  var _ref2$theme = _ref22.theme, borderRadius2 = _ref2$theme.borderRadius, colors2 = _ref2$theme.colors, cropWithEllipsis = _ref22.cropWithEllipsis;
  return {
    borderRadius: borderRadius2 / 2,
    color: colors2.neutral80,
    fontSize: "85%",
    overflow: "hidden",
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis || cropWithEllipsis === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS2(_ref3) {
  var _ref3$theme = _ref3.theme, spacing2 = _ref3$theme.spacing, borderRadius2 = _ref3$theme.borderRadius, colors2 = _ref3$theme.colors, isFocused = _ref3.isFocused;
  return {
    alignItems: "center",
    borderRadius: borderRadius2 / 2,
    backgroundColor: isFocused ? colors2.dangerLight : void 0,
    display: "flex",
    paddingLeft: spacing2.baseUnit,
    paddingRight: spacing2.baseUnit,
    ":hover": {
      backgroundColor: colors2.dangerLight,
      color: colors2.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric2(_ref4) {
  var children = _ref4.children, innerProps = _ref4.innerProps;
  return jsx("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children, innerProps = _ref5.innerProps;
  return jsx("div", _extends({
    role: "button"
  }, innerProps), children || jsx(CrossIcon, {
    size: 14
  }));
}
var MultiValue = function MultiValue2(props) {
  var children = props.children, className = props.className, components2 = props.components, cx = props.cx, data = props.data, getStyles = props.getStyles, innerProps = props.innerProps, isDisabled = props.isDisabled, removeProps3 = props.removeProps, selectProps = props.selectProps;
  var Container = components2.Container, Label = components2.Label, Remove = components2.Remove;
  return jsx(ClassNames, null, function(_ref6) {
    var css4 = _ref6.css, emotionCx = _ref6.cx;
    return jsx(Container, {
      data,
      innerProps: _objectSpread2({
        className: emotionCx(css4(getStyles("multiValue", props)), cx({
          "multi-value": true,
          "multi-value--is-disabled": isDisabled
        }, className))
      }, innerProps),
      selectProps
    }, jsx(Label, {
      data,
      innerProps: {
        className: emotionCx(css4(getStyles("multiValueLabel", props)), cx({
          "multi-value__label": true
        }, className))
      },
      selectProps
    }, children), jsx(Remove, {
      data,
      innerProps: _objectSpread2({
        className: emotionCx(css4(getStyles("multiValueRemove", props)), cx({
          "multi-value__remove": true
        }, className)),
        "aria-label": "Remove ".concat(children || "option")
      }, removeProps3),
      selectProps
    }));
  });
};
var optionCSS = function optionCSS2(_ref3) {
  var isDisabled = _ref3.isDisabled, isFocused = _ref3.isFocused, isSelected = _ref3.isSelected, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return {
    label: "option",
    backgroundColor: isSelected ? colors2.primary : isFocused ? colors2.primary25 : "transparent",
    color: isDisabled ? colors2.neutral20 : isSelected ? colors2.neutral0 : "inherit",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    padding: "".concat(spacing2.baseUnit * 2, "px ").concat(spacing2.baseUnit * 3, "px"),
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    ":active": {
      backgroundColor: !isDisabled ? isSelected ? colors2.primary : colors2.primary50 : void 0
    }
  };
};
var Option = function Option2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, isDisabled = props.isDisabled, isFocused = props.isFocused, isSelected = props.isSelected, innerRef = props.innerRef, innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles("option", props),
    className: cx({
      option: true,
      "option--is-disabled": isDisabled,
      "option--is-focused": isFocused,
      "option--is-selected": isSelected
    }, className),
    ref: innerRef,
    "aria-disabled": isDisabled
  }, innerProps), children);
};
var placeholderCSS = function placeholderCSS2(_ref3) {
  var _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return {
    label: "placeholder",
    color: colors2.neutral50,
    gridArea: "1 / 1 / 2 / 3",
    marginLeft: spacing2.baseUnit / 2,
    marginRight: spacing2.baseUnit / 2
  };
};
var Placeholder = function Placeholder2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles("placeholder", props),
    className: cx({
      placeholder: true
    }, className)
  }, innerProps), children);
};
var css2 = function css3(_ref3) {
  var isDisabled = _ref3.isDisabled, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return {
    label: "singleValue",
    color: isDisabled ? colors2.neutral40 : colors2.neutral80,
    gridArea: "1 / 1 / 2 / 3",
    marginLeft: spacing2.baseUnit / 2,
    marginRight: spacing2.baseUnit / 2,
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  };
};
var SingleValue = function SingleValue2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, isDisabled = props.isDisabled, innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles("singleValue", props),
    className: cx({
      "single-value": true,
      "single-value--is-disabled": isDisabled
    }, className)
  }, innerProps), children);
};
var components = {
  ClearIndicator,
  Control,
  DropdownIndicator,
  DownChevron,
  CrossIcon,
  Group,
  GroupHeading,
  IndicatorsContainer,
  IndicatorSeparator,
  Input,
  LoadingIndicator,
  Menu,
  MenuList,
  MenuPortal,
  LoadingMessage,
  NoOptionsMessage,
  MultiValue,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
  Option,
  Placeholder,
  SelectContainer,
  SingleValue,
  ValueContainer
};
var defaultComponents = function defaultComponents2(props) {
  return _objectSpread2(_objectSpread2({}, components), props.components);
};
var _excluded$1 = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function useStateManager(_ref3) {
  var _ref$defaultInputValu = _ref3.defaultInputValue, defaultInputValue = _ref$defaultInputValu === void 0 ? "" : _ref$defaultInputValu, _ref$defaultMenuIsOpe = _ref3.defaultMenuIsOpen, defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe, _ref$defaultValue = _ref3.defaultValue, defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue, propsInputValue = _ref3.inputValue, propsMenuIsOpen = _ref3.menuIsOpen, propsOnChange = _ref3.onChange, propsOnInputChange = _ref3.onInputChange, propsOnMenuClose = _ref3.onMenuClose, propsOnMenuOpen = _ref3.onMenuOpen, propsValue = _ref3.value, restSelectProps = _objectWithoutProperties(_ref3, _excluded$1);
  var _useState = y$1(propsInputValue !== void 0 ? propsInputValue : defaultInputValue), _useState2 = _slicedToArray(_useState, 2), stateInputValue = _useState2[0], setStateInputValue = _useState2[1];
  var _useState3 = y$1(propsMenuIsOpen !== void 0 ? propsMenuIsOpen : defaultMenuIsOpen), _useState4 = _slicedToArray(_useState3, 2), stateMenuIsOpen = _useState4[0], setStateMenuIsOpen = _useState4[1];
  var _useState5 = y$1(propsValue !== void 0 ? propsValue : defaultValue), _useState6 = _slicedToArray(_useState5, 2), stateValue = _useState6[0], setStateValue = _useState6[1];
  var onChange2 = T$1(function(value2, actionMeta) {
    if (typeof propsOnChange === "function") {
      propsOnChange(value2, actionMeta);
    }
    setStateValue(value2);
  }, [propsOnChange]);
  var onInputChange = T$1(function(value2, actionMeta) {
    var newValue;
    if (typeof propsOnInputChange === "function") {
      newValue = propsOnInputChange(value2, actionMeta);
    }
    setStateInputValue(newValue !== void 0 ? newValue : value2);
  }, [propsOnInputChange]);
  var onMenuOpen = T$1(function() {
    if (typeof propsOnMenuOpen === "function") {
      propsOnMenuOpen();
    }
    setStateMenuIsOpen(true);
  }, [propsOnMenuOpen]);
  var onMenuClose = T$1(function() {
    if (typeof propsOnMenuClose === "function") {
      propsOnMenuClose();
    }
    setStateMenuIsOpen(false);
  }, [propsOnMenuClose]);
  var inputValue = propsInputValue !== void 0 ? propsInputValue : stateInputValue;
  var menuIsOpen = propsMenuIsOpen !== void 0 ? propsMenuIsOpen : stateMenuIsOpen;
  var value = propsValue !== void 0 ? propsValue : stateValue;
  return _objectSpread2(_objectSpread2({}, restSelectProps), {}, {
    inputValue,
    menuIsOpen,
    onChange: onChange2,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    value
  });
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual2(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var _ref = {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
};
var A11yText = function A11yText2(props) {
  return jsx("span", _extends({
    css: _ref
  }, props));
};
var defaultAriaLiveMessages = {
  guidance: function guidance(props) {
    var isSearchable = props.isSearchable, isMulti = props.isMulti, isDisabled = props.isDisabled, tabSelectsValue = props.tabSelectsValue, context = props.context;
    switch (context) {
      case "menu":
        return "Use Up and Down to choose options".concat(isDisabled ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(tabSelectsValue ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return "".concat(props["aria-label"] || "Select", " is focused ").concat(isSearchable ? ",type to refine list" : "", ", press Down to open the menu, ").concat(isMulti ? " press left to focus selected values" : "");
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function onChange(props) {
    var action = props.action, _props$label = props.label, label = _props$label === void 0 ? "" : _props$label, labels = props.labels, isDisabled = props.isDisabled;
    switch (action) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(label, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(labels.length > 1 ? "s" : "", " ").concat(labels.join(","), ", selected.");
      case "select-option":
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context, focused = props.focused, options2 = props.options, _props$label2 = props.label, label = _props$label2 === void 0 ? "" : _props$label2, selectValue = props.selectValue, isDisabled = props.isDisabled, isSelected = props.isSelected;
    var getArrayIndex = function getArrayIndex2(arr, item) {
      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : "";
    };
    if (context === "value" && selectValue) {
      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
    }
    if (context === "menu") {
      var disabled = isDisabled ? " disabled" : "";
      var status = "".concat(isSelected ? "selected" : "focused").concat(disabled);
      return "option ".concat(label, " ").concat(status, ", ").concat(getArrayIndex(options2, focused), ".");
    }
    return "";
  },
  onFilter: function onFilter(props) {
    var inputValue = props.inputValue, resultsMessage = props.resultsMessage;
    return "".concat(resultsMessage).concat(inputValue ? " for search term " + inputValue : "", ".");
  }
};
var LiveRegion = function LiveRegion2(props) {
  var ariaSelection = props.ariaSelection, focusedOption = props.focusedOption, focusedValue = props.focusedValue, focusableOptions = props.focusableOptions, isFocused = props.isFocused, selectValue = props.selectValue, selectProps = props.selectProps, id = props.id;
  var ariaLiveMessages = selectProps.ariaLiveMessages, getOptionLabel4 = selectProps.getOptionLabel, inputValue = selectProps.inputValue, isMulti = selectProps.isMulti, isOptionDisabled3 = selectProps.isOptionDisabled, isSearchable = selectProps.isSearchable, menuIsOpen = selectProps.menuIsOpen, options2 = selectProps.options, screenReaderStatus2 = selectProps.screenReaderStatus, tabSelectsValue = selectProps.tabSelectsValue;
  var ariaLabel = selectProps["aria-label"];
  var ariaLive = selectProps["aria-live"];
  var messages = F$1(function() {
    return _objectSpread2(_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]);
  var ariaSelected = F$1(function() {
    var message = "";
    if (ariaSelection && messages.onChange) {
      var option = ariaSelection.option, selectedOptions = ariaSelection.options, removedValue = ariaSelection.removedValue, removedValues = ariaSelection.removedValues, value = ariaSelection.value;
      var asOption = function asOption2(val) {
        return !Array.isArray(val) ? val : null;
      };
      var selected = removedValue || option || asOption(value);
      var label = selected ? getOptionLabel4(selected) : "";
      var multiSelected = selectedOptions || removedValues || void 0;
      var labels = multiSelected ? multiSelected.map(getOptionLabel4) : [];
      var onChangeProps = _objectSpread2({
        isDisabled: selected && isOptionDisabled3(selected, selectValue),
        label,
        labels
      }, ariaSelection);
      message = messages.onChange(onChangeProps);
    }
    return message;
  }, [ariaSelection, messages, isOptionDisabled3, selectValue, getOptionLabel4]);
  var ariaFocused = F$1(function() {
    var focusMsg = "";
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
    if (focused && messages.onFocus) {
      var onFocusProps = {
        focused,
        label: getOptionLabel4(focused),
        isDisabled: isOptionDisabled3(focused, selectValue),
        isSelected,
        options: options2,
        context: focused === focusedOption ? "menu" : "value",
        selectValue
      };
      focusMsg = messages.onFocus(onFocusProps);
    }
    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel4, isOptionDisabled3, messages, options2, selectValue]);
  var ariaResults = F$1(function() {
    var resultsMsg = "";
    if (menuIsOpen && options2.length && messages.onFilter) {
      var resultsMessage = screenReaderStatus2({
        count: focusableOptions.length
      });
      resultsMsg = messages.onFilter({
        inputValue,
        resultsMessage
      });
    }
    return resultsMsg;
  }, [focusableOptions, inputValue, menuIsOpen, messages, options2, screenReaderStatus2]);
  var ariaGuidance = F$1(function() {
    var guidanceMsg = "";
    if (messages.guidance) {
      var context = focusedValue ? "value" : menuIsOpen ? "menu" : "input";
      guidanceMsg = messages.guidance({
        "aria-label": ariaLabel,
        context,
        isDisabled: focusedOption && isOptionDisabled3(focusedOption, selectValue),
        isMulti,
        isSearchable,
        tabSelectsValue
      });
    }
    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled3, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue]);
  var ariaContext = "".concat(ariaFocused, " ").concat(ariaResults, " ").concat(ariaGuidance);
  var ScreenReaderText = jsx(d$2, null, jsx("span", {
    id: "aria-selection"
  }, ariaSelected), jsx("span", {
    id: "aria-context"
  }, ariaContext));
  var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus";
  return jsx(d$2, null, jsx(A11yText, {
    id
  }, isInitialFocus && ScreenReaderText), jsx(A11yText, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, isFocused && !isInitialFocus && ScreenReaderText));
};
var diacritics = [{
  base: "A",
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: "AA",
  letters: "\uA732"
}, {
  base: "AE",
  letters: "\xC6\u01FC\u01E2"
}, {
  base: "AO",
  letters: "\uA734"
}, {
  base: "AU",
  letters: "\uA736"
}, {
  base: "AV",
  letters: "\uA738\uA73A"
}, {
  base: "AY",
  letters: "\uA73C"
}, {
  base: "B",
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: "C",
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: "D",
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: "DZ",
  letters: "\u01F1\u01C4"
}, {
  base: "Dz",
  letters: "\u01F2\u01C5"
}, {
  base: "E",
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: "F",
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: "G",
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: "H",
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: "I",
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: "J",
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: "K",
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: "L",
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: "LJ",
  letters: "\u01C7"
}, {
  base: "Lj",
  letters: "\u01C8"
}, {
  base: "M",
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: "N",
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: "NJ",
  letters: "\u01CA"
}, {
  base: "Nj",
  letters: "\u01CB"
}, {
  base: "O",
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: "OI",
  letters: "\u01A2"
}, {
  base: "OO",
  letters: "\uA74E"
}, {
  base: "OU",
  letters: "\u0222"
}, {
  base: "P",
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: "Q",
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: "R",
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: "S",
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: "T",
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: "TZ",
  letters: "\uA728"
}, {
  base: "U",
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: "V",
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: "VY",
  letters: "\uA760"
}, {
  base: "W",
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: "X",
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: "Y",
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: "Z",
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: "a",
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: "aa",
  letters: "\uA733"
}, {
  base: "ae",
  letters: "\xE6\u01FD\u01E3"
}, {
  base: "ao",
  letters: "\uA735"
}, {
  base: "au",
  letters: "\uA737"
}, {
  base: "av",
  letters: "\uA739\uA73B"
}, {
  base: "ay",
  letters: "\uA73D"
}, {
  base: "b",
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: "c",
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: "d",
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: "dz",
  letters: "\u01F3\u01C6"
}, {
  base: "e",
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: "f",
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: "g",
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: "h",
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: "hv",
  letters: "\u0195"
}, {
  base: "i",
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: "j",
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: "k",
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: "l",
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: "lj",
  letters: "\u01C9"
}, {
  base: "m",
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: "n",
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: "nj",
  letters: "\u01CC"
}, {
  base: "o",
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: "oi",
  letters: "\u01A3"
}, {
  base: "ou",
  letters: "\u0223"
}, {
  base: "oo",
  letters: "\uA74F"
}, {
  base: "p",
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: "q",
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: "r",
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: "s",
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: "t",
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: "tz",
  letters: "\uA729"
}, {
  base: "u",
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: "v",
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: "vy",
  letters: "\uA761"
}, {
  base: "w",
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: "x",
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: "y",
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: "z",
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var anyDiacritic = new RegExp("[" + diacritics.map(function(d2) {
  return d2.letters;
}).join("") + "]", "g");
var diacriticToBase = {};
for (var i = 0; i < diacritics.length; i++) {
  var diacritic = diacritics[i];
  for (var j = 0; j < diacritic.letters.length; j++) {
    diacriticToBase[diacritic.letters[j]] = diacritic.base;
  }
}
var stripDiacritics = function stripDiacritics2(str) {
  return str.replace(anyDiacritic, function(match2) {
    return diacriticToBase[match2];
  });
};
var memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics);
var trimString = function trimString2(str) {
  return str.replace(/^\s+|\s+$/g, "");
};
var defaultStringify = function defaultStringify2(option) {
  return "".concat(option.label, " ").concat(option.value);
};
var createFilter = function createFilter2(config) {
  return function(option, rawInput) {
    if (option.data.__isNew__)
      return true;
    var _ignoreCase$ignoreAcc = _objectSpread2({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: "any"
    }, config), ignoreCase = _ignoreCase$ignoreAcc.ignoreCase, ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents, stringify2 = _ignoreCase$ignoreAcc.stringify, trim2 = _ignoreCase$ignoreAcc.trim, matchFrom = _ignoreCase$ignoreAcc.matchFrom;
    var input = trim2 ? trimString(rawInput) : rawInput;
    var candidate = trim2 ? trimString(stringify2(option)) : stringify2(option);
    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }
    if (ignoreAccents) {
      input = memoizedStripDiacriticsForInput(input);
      candidate = stripDiacritics(candidate);
    }
    return matchFrom === "start" ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};
var _excluded = ["innerRef"];
function DummyInput(_ref3) {
  var innerRef = _ref3.innerRef, props = _objectWithoutProperties(_ref3, _excluded);
  var filteredProps = removeProps(props, "onExited", "in", "enter", "exit", "appear");
  return jsx("input", _extends({
    ref: innerRef
  }, filteredProps, {
    css: /* @__PURE__ */ css$2({
      label: "dummyInput",
      background: 0,
      border: 0,
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      width: 1,
      color: "transparent",
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, "", "")
  }));
}
var cancelScroll = function cancelScroll2(event) {
  event.preventDefault();
  event.stopPropagation();
};
function useScrollCapture(_ref3) {
  var isEnabled = _ref3.isEnabled, onBottomArrive = _ref3.onBottomArrive, onBottomLeave = _ref3.onBottomLeave, onTopArrive = _ref3.onTopArrive, onTopLeave = _ref3.onTopLeave;
  var isBottom = s(false);
  var isTop = s(false);
  var touchStart = s(0);
  var scrollTarget = s(null);
  var handleEventDelta = T$1(function(event, delta) {
    if (scrollTarget.current === null)
      return;
    var _scrollTarget$current = scrollTarget.current, scrollTop = _scrollTarget$current.scrollTop, scrollHeight = _scrollTarget$current.scrollHeight, clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false;
    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave)
        onBottomLeave(event);
      isBottom.current = false;
    }
    if (isDeltaPositive && isTop.current) {
      if (onTopLeave)
        onTopLeave(event);
      isTop.current = false;
    }
    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }
      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true;
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }
      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    }
    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
  var onWheel = T$1(function(event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = T$1(function(event) {
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = T$1(function(event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = T$1(function(el) {
    if (!el)
      return;
    var notPassive = supportsPassiveEvents ? {
      passive: false
    } : false;
    el.addEventListener("wheel", onWheel, notPassive);
    el.addEventListener("touchstart", onTouchStart, notPassive);
    el.addEventListener("touchmove", onTouchMove, notPassive);
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = T$1(function(el) {
    if (!el)
      return;
    el.removeEventListener("wheel", onWheel, false);
    el.removeEventListener("touchstart", onTouchStart, false);
    el.removeEventListener("touchmove", onTouchMove, false);
  }, [onTouchMove, onTouchStart, onWheel]);
  _(function() {
    if (!isEnabled)
      return;
    var element = scrollTarget.current;
    startListening(element);
    return function() {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function(element) {
    scrollTarget.current = element;
  };
}
var STYLE_KEYS = ["boxSizing", "height", "overflow", "paddingRight", "position"];
var LOCK_STYLES = {
  boxSizing: "border-box",
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function preventTouchMove(e2) {
  e2.preventDefault();
}
function allowTouchMove(e2) {
  e2.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;
  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}
function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};
function useScrollLock(_ref3) {
  var isEnabled = _ref3.isEnabled, _ref$accountForScroll = _ref3.accountForScrollbars, accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = s({});
  var scrollTarget = s(null);
  var addScrollLock = T$1(function(touchScrollTarget) {
    if (!canUseDOM)
      return;
    var target = document.body;
    var targetStyle = target && target.style;
    if (accountForScrollbars) {
      STYLE_KEYS.forEach(function(key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    }
    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function(key) {
        var val = LOCK_STYLES[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    }
    if (target && isTouchDevice()) {
      target.addEventListener("touchmove", preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.addEventListener("touchstart", preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener("touchmove", allowTouchMove, listenerOptions);
      }
    }
    activeScrollLocks += 1;
  }, [accountForScrollbars]);
  var removeScrollLock = T$1(function(touchScrollTarget) {
    if (!canUseDOM)
      return;
    var target = document.body;
    var targetStyle = target && target.style;
    activeScrollLocks = Math.max(activeScrollLocks - 1, 0);
    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function(key) {
        var val = originalStyles.current[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    }
    if (target && isTouchDevice()) {
      target.removeEventListener("touchmove", preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener("touchstart", preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener("touchmove", allowTouchMove, listenerOptions);
      }
    }
  }, [accountForScrollbars]);
  _(function() {
    if (!isEnabled)
      return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function() {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function(element) {
    scrollTarget.current = element;
  };
}
var blurSelectInput = function blurSelectInput2() {
  return document.activeElement && document.activeElement.blur();
};
var _ref2 = {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
};
function ScrollManager(_ref3) {
  var children = _ref3.children, lockEnabled = _ref3.lockEnabled, _ref$captureEnabled = _ref3.captureEnabled, captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled, onBottomArrive = _ref3.onBottomArrive, onBottomLeave = _ref3.onBottomLeave, onTopArrive = _ref3.onTopArrive, onTopLeave = _ref3.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive,
    onBottomLeave,
    onTopArrive,
    onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });
  var targetRef = function targetRef2(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };
  return jsx(d$2, null, lockEnabled && jsx("div", {
    onClick: blurSelectInput,
    css: _ref2
  }), children(targetRef));
}
var formatGroupLabel = function formatGroupLabel2(group) {
  return group.label;
};
var getOptionLabel$1 = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue$1 = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled2(option) {
  return !!option.isDisabled;
};
var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css2,
  valueContainer: valueContainerCSS
};
var colors = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
};
var borderRadius = 4;
var baseUnit = 4;
var controlHeight = 38;
var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit,
  controlHeight,
  menuGutter
};
var defaultTheme = {
  borderRadius,
  colors,
  spacing
};
var defaultProps = {
  "aria-live": "polite",
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel,
  getOptionLabel: getOptionLabel$1,
  getOptionValue: getOptionValue$1,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return "No options";
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function screenReaderStatus(_ref3) {
    var count = _ref3.count;
    return "".concat(count, " result").concat(count !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: true
};
function toCategorizedOption(props, option, selectValue, index) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);
  var isSelected = _isOptionSelected(props, option, selectValue);
  var label = getOptionLabel2(props, option);
  var value = getOptionValue2(props, option);
  return {
    type: "option",
    data: option,
    isDisabled,
    isSelected,
    label,
    value,
    index
  };
}
function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function(groupOrOption, groupOrOptionIndex) {
    if ("options" in groupOrOption) {
      var categorizedOptions = groupOrOption.options.map(function(option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function(categorizedOption2) {
        return isFocusable(props, categorizedOption2);
      });
      return categorizedOptions.length > 0 ? {
        type: "group",
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : void 0;
    }
    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : void 0;
  }).filter(notNullish);
}
function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function(optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === "group") {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function(option) {
        return option.data;
      })));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}
function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue, inputValue = _props$inputValue === void 0 ? "" : _props$inputValue;
  var data = categorizedOption.data, isSelected = categorizedOption.isSelected, label = categorizedOption.label, value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label,
    value,
    data
  }, inputValue);
}
function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue, lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
    if (nextFocusedIndex > -1) {
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      return nextSelectValue[lastFocusedIndex];
    }
  }
  return null;
}
function getNextFocusedOption(state, options2) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options2.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options2[0];
}
var getOptionLabel2 = function getOptionLabel3(props, data) {
  return props.getOptionLabel(data);
};
var getOptionValue2 = function getOptionValue3(props, data) {
  return props.getOptionValue(data);
};
function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === "function" ? props.isOptionDisabled(option, selectValue) : false;
}
function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1)
    return true;
  if (typeof props.isOptionSelected === "function") {
    return props.isOptionSelected(option, selectValue);
  }
  var candidate = getOptionValue2(props, option);
  return selectValue.some(function(i) {
    return getOptionValue2(props, i) === candidate;
  });
}
function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}
var shouldHideSelectedOptions = function shouldHideSelectedOptions2(props) {
  var hideSelectedOptions = props.hideSelectedOptions, isMulti = props.isMulti;
  if (hideSelectedOptions === void 0)
    return isMulti;
  return hideSelectedOptions;
};
var instanceId = 1;
var Select$1 = /* @__PURE__ */ function(_Component) {
  _inherits(Select2, _Component);
  var _super = _createSuper(Select2);
  function Select2(_props) {
    var _this;
    _classCallCheck(this, Select2);
    _this = _super.call(this, _props);
    _this.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      prevWasFocused: false,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.instancePrefix = "";
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;
    _this.getControlRef = function(ref) {
      _this.controlRef = ref;
    };
    _this.focusedOptionRef = null;
    _this.getFocusedOptionRef = function(ref) {
      _this.focusedOptionRef = ref;
    };
    _this.menuListRef = null;
    _this.getMenuListRef = function(ref) {
      _this.menuListRef = ref;
    };
    _this.inputRef = null;
    _this.getInputRef = function(ref) {
      _this.inputRef = ref;
    };
    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;
    _this.onChange = function(newValue, actionMeta) {
      var _this$props = _this.props, onChange2 = _this$props.onChange, name = _this$props.name;
      actionMeta.name = name;
      _this.ariaOnChange(newValue, actionMeta);
      onChange2(newValue, actionMeta);
    };
    _this.setValue = function(newValue, action, option) {
      var _this$props2 = _this.props, closeMenuOnSelect = _this$props2.closeMenuOnSelect, isMulti = _this$props2.isMulti, inputValue = _this$props2.inputValue;
      _this.onInputChange("", {
        action: "set-value",
        prevInputValue: inputValue
      });
      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      }
      _this.setState({
        clearFocusValueOnUpdate: true
      });
      _this.onChange(newValue, {
        action,
        option
      });
    };
    _this.selectOption = function(newValue) {
      var _this$props3 = _this.props, blurInputOnSelect = _this$props3.blurInputOnSelect, isMulti = _this$props3.isMulti, name = _this$props3.name;
      var selectValue = _this.state.selectValue;
      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
      var isDisabled = _this.isOptionDisabled(newValue, selectValue);
      if (deselected) {
        var candidate = _this.getOptionValue(newValue);
        _this.setValue(multiValueAsValue(selectValue.filter(function(i) {
          return _this.getOptionValue(i) !== candidate;
        })), "deselect-option", newValue);
      } else if (!isDisabled) {
        if (isMulti) {
          _this.setValue(multiValueAsValue([].concat(_toConsumableArray(selectValue), [newValue])), "select-option", newValue);
        } else {
          _this.setValue(singleValueAsValue(newValue), "select-option");
        }
      } else {
        _this.ariaOnChange(singleValueAsValue(newValue), {
          action: "select-option",
          option: newValue,
          name
        });
        return;
      }
      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };
    _this.removeValue = function(removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var candidate = _this.getOptionValue(removedValue);
      var newValueArray = selectValue.filter(function(i) {
        return _this.getOptionValue(i) !== candidate;
      });
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: "remove-value",
        removedValue
      });
      _this.focusInput();
    };
    _this.clearValue = function() {
      var selectValue = _this.state.selectValue;
      _this.onChange(valueTernary(_this.props.isMulti, [], null), {
        action: "clear",
        removedValues: selectValue
      });
    };
    _this.popValue = function() {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: "pop-value",
        removedValue: lastSelectedValue
      });
    };
    _this.getValue = function() {
      return _this.state.selectValue;
    };
    _this.cx = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
    };
    _this.getOptionLabel = function(data) {
      return getOptionLabel2(_this.props, data);
    };
    _this.getOptionValue = function(data) {
      return getOptionValue2(_this.props, data);
    };
    _this.getStyles = function(key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = "border-box";
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };
    _this.getElementId = function(element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    };
    _this.getComponents = function() {
      return defaultComponents(_this.props);
    };
    _this.buildCategorizedOptions = function() {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };
    _this.getCategorizedOptions = function() {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };
    _this.buildFocusableOptions = function() {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };
    _this.getFocusableOptions = function() {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };
    _this.ariaOnChange = function(value, actionMeta) {
      _this.setState({
        ariaSelection: _objectSpread2({
          value
        }, actionMeta)
      });
    };
    _this.onMenuMouseDown = function(event) {
      if (event.button !== 0) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      _this.focusInput();
    };
    _this.onMenuMouseMove = function(event) {
      _this.blockOptionHover = false;
    };
    _this.onControlMouseDown = function(event) {
      if (event.defaultPrevented) {
        return;
      }
      var openMenuOnClick = _this.props.openMenuOnClick;
      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }
        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu("first");
        }
      } else {
        if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
          _this.onMenuClose();
        }
      }
      if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
        event.preventDefault();
      }
    };
    _this.onDropdownIndicatorMouseDown = function(event) {
      if (event && event.type === "mousedown" && event.button !== 0) {
        return;
      }
      if (_this.props.isDisabled)
        return;
      var _this$props4 = _this.props, isMulti = _this$props4.isMulti, menuIsOpen = _this$props4.menuIsOpen;
      _this.focusInput();
      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      } else {
        _this.openMenu("first");
      }
      event.preventDefault();
    };
    _this.onClearIndicatorMouseDown = function(event) {
      if (event && event.type === "mousedown" && event.button !== 0) {
        return;
      }
      _this.clearValue();
      event.preventDefault();
      _this.openAfterFocus = false;
      if (event.type === "touchend") {
        _this.focusInput();
      } else {
        setTimeout(function() {
          return _this.focusInput();
        });
      }
    };
    _this.onScroll = function(event) {
      if (typeof _this.props.closeMenuOnScroll === "boolean") {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === "function") {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };
    _this.onCompositionStart = function() {
      _this.isComposing = true;
    };
    _this.onCompositionEnd = function() {
      _this.isComposing = false;
    };
    _this.onTouchStart = function(_ref22) {
      var touches = _ref22.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };
    _this.onTouchMove = function(_ref3) {
      var touches = _ref3.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };
    _this.onTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      }
      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };
    _this.onControlTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      _this.onControlMouseDown(event);
    };
    _this.onClearIndicatorTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      _this.onClearIndicatorMouseDown(event);
    };
    _this.onDropdownIndicatorTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      _this.onDropdownIndicatorMouseDown(event);
    };
    _this.handleInputChange = function(event) {
      var prevInputValue = _this.props.inputValue;
      var inputValue = event.currentTarget.value;
      _this.setState({
        inputIsHiddenAfterUpdate: false
      });
      _this.onInputChange(inputValue, {
        action: "input-change",
        prevInputValue
      });
      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };
    _this.onInputFocus = function(event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
      _this.setState({
        inputIsHiddenAfterUpdate: false,
        isFocused: true
      });
      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu("first");
      }
      _this.openAfterFocus = false;
    };
    _this.onInputBlur = function(event) {
      var prevInputValue = _this.props.inputValue;
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();
        return;
      }
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
      _this.onInputChange("", {
        action: "input-blur",
        prevInputValue
      });
      _this.onMenuClose();
      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };
    _this.onOptionHover = function(focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }
      _this.setState({
        focusedOption
      });
    };
    _this.shouldHideSelectedOptions = function() {
      return shouldHideSelectedOptions(_this.props);
    };
    _this.onKeyDown = function(event) {
      var _this$props5 = _this.props, isMulti = _this$props5.isMulti, backspaceRemovesValue = _this$props5.backspaceRemovesValue, escapeClearsValue = _this$props5.escapeClearsValue, inputValue = _this$props5.inputValue, isClearable = _this$props5.isClearable, isDisabled = _this$props5.isDisabled, menuIsOpen = _this$props5.menuIsOpen, onKeyDown = _this$props5.onKeyDown, tabSelectsValue = _this$props5.tabSelectsValue, openMenuOnFocus = _this$props5.openMenuOnFocus;
      var _this$state = _this.state, focusedOption = _this$state.focusedOption, focusedValue = _this$state.focusedValue, selectValue = _this$state.selectValue;
      if (isDisabled)
        return;
      if (typeof onKeyDown === "function") {
        onKeyDown(event);
        if (event.defaultPrevented) {
          return;
        }
      }
      _this.blockOptionHover = true;
      switch (event.key) {
        case "ArrowLeft":
          if (!isMulti || inputValue)
            return;
          _this.focusValue("previous");
          break;
        case "ArrowRight":
          if (!isMulti || inputValue)
            return;
          _this.focusValue("next");
          break;
        case "Delete":
        case "Backspace":
          if (inputValue)
            return;
          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue)
              return;
            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }
          break;
        case "Tab":
          if (_this.isComposing)
            return;
          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }
          _this.selectOption(focusedOption);
          break;
        case "Enter":
          if (event.keyCode === 229) {
            break;
          }
          if (menuIsOpen) {
            if (!focusedOption)
              return;
            if (_this.isComposing)
              return;
            _this.selectOption(focusedOption);
            break;
          }
          return;
        case "Escape":
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });
            _this.onInputChange("", {
              action: "menu-close",
              prevInputValue: inputValue
            });
            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }
          break;
        case " ":
          if (inputValue) {
            return;
          }
          if (!menuIsOpen) {
            _this.openMenu("first");
            break;
          }
          if (!focusedOption)
            return;
          _this.selectOption(focusedOption);
          break;
        case "ArrowUp":
          if (menuIsOpen) {
            _this.focusOption("up");
          } else {
            _this.openMenu("last");
          }
          break;
        case "ArrowDown":
          if (menuIsOpen) {
            _this.focusOption("down");
          } else {
            _this.openMenu("first");
          }
          break;
        case "PageUp":
          if (!menuIsOpen)
            return;
          _this.focusOption("pageup");
          break;
        case "PageDown":
          if (!menuIsOpen)
            return;
          _this.focusOption("pagedown");
          break;
        case "Home":
          if (!menuIsOpen)
            return;
          _this.focusOption("first");
          break;
        case "End":
          if (!menuIsOpen)
            return;
          _this.focusOption("last");
          break;
        default:
          return;
      }
      event.preventDefault();
    };
    _this.instancePrefix = "react-select-" + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = cleanValue(_props.value);
    return _this;
  }
  _createClass(Select2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();
      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        document.addEventListener("scroll", this.onScroll, true);
      }
      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props, isDisabled = _this$props6.isDisabled, menuIsOpen = _this$props6.menuIsOpen;
      var isFocused = this.state.isFocused;
      if (isFocused && !isDisabled && prevProps.isDisabled || isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }
      if (isFocused && isDisabled && !prevProps.isDisabled) {
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      }
      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener("scroll", this.onScroll, true);
    }
  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    }
  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef)
        return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef)
        return;
      this.inputRef.blur();
    }
  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;
      var _this$state2 = this.state, selectValue = _this$state2.selectValue, isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var openAtIndex = focusOption === "first" ? 0 : focusableOptions.length - 1;
      if (!this.props.isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);
        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      }
      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex]
      }, function() {
        return _this2.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$state3 = this.state, selectValue = _this$state3.selectValue, focusedValue = _this$state3.focusedValue;
      if (!this.props.isMulti)
        return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);
      if (!focusedValue) {
        focusedIndex = -1;
      }
      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length)
        return;
      switch (direction) {
        case "previous":
          if (focusedIndex === 0) {
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }
          break;
        case "next":
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }
          break;
      }
      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first";
      var pageSize = this.props.pageSize;
      var focusedOption = this.state.focusedOption;
      var options2 = this.getFocusableOptions();
      if (!options2.length)
        return;
      var nextFocus = 0;
      var focusedIndex = options2.indexOf(focusedOption);
      if (!focusedOption) {
        focusedIndex = -1;
      }
      if (direction === "up") {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options2.length - 1;
      } else if (direction === "down") {
        nextFocus = (focusedIndex + 1) % options2.length;
      } else if (direction === "pageup") {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0)
          nextFocus = 0;
      } else if (direction === "pagedown") {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options2.length - 1)
          nextFocus = options2.length - 1;
      } else if (direction === "last") {
        nextFocus = options2.length - 1;
      }
      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options2[nextFocus],
        focusedValue: null
      });
    }
  }, {
    key: "getTheme",
    value: function getTheme() {
      if (!this.props.theme) {
        return defaultTheme;
      }
      if (typeof this.props.theme === "function") {
        return this.props.theme(defaultTheme);
      }
      return _objectSpread2(_objectSpread2({}, defaultTheme), this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue, cx = this.cx, getStyles = this.getStyles, getValue = this.getValue, selectOption = this.selectOption, setValue = this.setValue, props = this.props;
      var isMulti = props.isMulti, isRtl = props.isRtl, options2 = props.options;
      var hasValue = this.hasValue();
      return {
        clearValue,
        cx,
        getStyles,
        getValue,
        hasValue,
        isMulti,
        isRtl,
        options: options2,
        selectOption,
        selectProps: props,
        setValue,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props7 = this.props, isClearable2 = _this$props7.isClearable, isMulti = _this$props7.isMulti;
      if (isClearable2 === void 0)
        return isMulti;
      return isClearable2;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled3(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === "function") {
        var _inputValue = this.props.inputValue;
        var _selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context,
          inputValue: _inputValue,
          selectValue: _selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel3(data) {
      return this.props.formatGroupLabel(data);
    }
  }, {
    key: "startListeningComposition",
    value: function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener("compositionstart", this.onCompositionStart, false);
        document.addEventListener("compositionend", this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener("compositionstart", this.onCompositionStart);
        document.removeEventListener("compositionend", this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    value: function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener("touchstart", this.onTouchStart, false);
        document.addEventListener("touchmove", this.onTouchMove, false);
        document.addEventListener("touchend", this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener("touchstart", this.onTouchStart);
        document.removeEventListener("touchmove", this.onTouchMove);
        document.removeEventListener("touchend", this.onTouchEnd);
      }
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props8 = this.props, isDisabled = _this$props8.isDisabled, isSearchable = _this$props8.isSearchable, inputId = _this$props8.inputId, inputValue = _this$props8.inputValue, tabIndex = _this$props8.tabIndex, form = _this$props8.form, menuIsOpen = _this$props8.menuIsOpen;
      var _this$getComponents = this.getComponents(), Input3 = _this$getComponents.Input;
      var _this$state4 = this.state, inputIsHidden = _this$state4.inputIsHidden, ariaSelection = _this$state4.ariaSelection;
      var commonProps = this.commonProps;
      var id = inputId || this.getElementId("input");
      var ariaAttributes = _objectSpread2(_objectSpread2(_objectSpread2({
        "aria-autocomplete": "list",
        "aria-expanded": menuIsOpen,
        "aria-haspopup": true,
        "aria-errormessage": this.props["aria-errormessage"],
        "aria-invalid": this.props["aria-invalid"],
        "aria-label": this.props["aria-label"],
        "aria-labelledby": this.props["aria-labelledby"],
        role: "combobox"
      }, menuIsOpen && {
        "aria-controls": this.getElementId("listbox"),
        "aria-owns": this.getElementId("listbox")
      }), !isSearchable && {
        "aria-readonly": true
      }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus" && {
        "aria-describedby": this.getElementId("live-region")
      } : {
        "aria-describedby": this.getElementId("placeholder")
      });
      if (!isSearchable) {
        return /* @__PURE__ */ v$2(DummyInput, _extends({
          id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: noop,
          onFocus: this.onInputFocus,
          disabled: isDisabled,
          tabIndex,
          inputMode: "none",
          form,
          value: ""
        }, ariaAttributes));
      }
      return /* @__PURE__ */ v$2(Input3, _extends({}, commonProps, {
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        id,
        innerRef: this.getInputRef,
        isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        spellCheck: "false",
        tabIndex,
        form,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;
      var _this$getComponents2 = this.getComponents(), MultiValue3 = _this$getComponents2.MultiValue, MultiValueContainer2 = _this$getComponents2.MultiValueContainer, MultiValueLabel2 = _this$getComponents2.MultiValueLabel, MultiValueRemove2 = _this$getComponents2.MultiValueRemove, SingleValue3 = _this$getComponents2.SingleValue, Placeholder3 = _this$getComponents2.Placeholder;
      var commonProps = this.commonProps;
      var _this$props9 = this.props, controlShouldRenderValue = _this$props9.controlShouldRenderValue, isDisabled = _this$props9.isDisabled, isMulti = _this$props9.isMulti, inputValue = _this$props9.inputValue, placeholder = _this$props9.placeholder;
      var _this$state5 = this.state, selectValue = _this$state5.selectValue, focusedValue = _this$state5.focusedValue, isFocused = _this$state5.isFocused;
      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /* @__PURE__ */ v$2(Placeholder3, _extends({}, commonProps, {
          key: "placeholder",
          isDisabled,
          isFocused,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), placeholder);
      }
      if (isMulti) {
        return selectValue.map(function(opt, index) {
          var isOptionFocused = opt === focusedValue;
          var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
          return /* @__PURE__ */ v$2(MultiValue3, _extends({}, commonProps, {
            components: {
              Container: MultiValueContainer2,
              Label: MultiValueLabel2,
              Remove: MultiValueRemove2
            },
            isFocused: isOptionFocused,
            isDisabled,
            key,
            index,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e2) {
                e2.preventDefault();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, "value"));
        });
      }
      if (inputValue) {
        return null;
      }
      var singleValue = selectValue[0];
      return /* @__PURE__ */ v$2(SingleValue3, _extends({}, commonProps, {
        data: singleValue,
        isDisabled
      }), this.formatOptionLabel(singleValue, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(), ClearIndicator3 = _this$getComponents3.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props10 = this.props, isDisabled = _this$props10.isDisabled, isLoading = _this$props10.isLoading;
      var isFocused = this.state.isFocused;
      if (!this.isClearable() || !ClearIndicator3 || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }
      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ v$2(ClearIndicator3, _extends({}, commonProps, {
        innerProps,
        isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(), LoadingIndicator3 = _this$getComponents4.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props11 = this.props, isDisabled = _this$props11.isDisabled, isLoading = _this$props11.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator3 || !isLoading)
        return null;
      var innerProps = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ v$2(LoadingIndicator3, _extends({}, commonProps, {
        innerProps,
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(), DropdownIndicator3 = _this$getComponents5.DropdownIndicator, IndicatorSeparator3 = _this$getComponents5.IndicatorSeparator;
      if (!DropdownIndicator3 || !IndicatorSeparator3)
        return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /* @__PURE__ */ v$2(IndicatorSeparator3, _extends({}, commonProps, {
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(), DropdownIndicator3 = _this$getComponents6.DropdownIndicator;
      if (!DropdownIndicator3)
        return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ v$2(DropdownIndicator3, _extends({}, commonProps, {
        innerProps,
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;
      var _this$getComponents7 = this.getComponents(), Group3 = _this$getComponents7.Group, GroupHeading3 = _this$getComponents7.GroupHeading, Menu3 = _this$getComponents7.Menu, MenuList3 = _this$getComponents7.MenuList, MenuPortal2 = _this$getComponents7.MenuPortal, LoadingMessage3 = _this$getComponents7.LoadingMessage, NoOptionsMessage3 = _this$getComponents7.NoOptionsMessage, Option3 = _this$getComponents7.Option;
      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props12 = this.props, captureMenuScroll = _this$props12.captureMenuScroll, inputValue = _this$props12.inputValue, isLoading = _this$props12.isLoading, loadingMessage2 = _this$props12.loadingMessage, minMenuHeight = _this$props12.minMenuHeight, maxMenuHeight = _this$props12.maxMenuHeight, menuIsOpen = _this$props12.menuIsOpen, menuPlacement = _this$props12.menuPlacement, menuPosition = _this$props12.menuPosition, menuPortalTarget = _this$props12.menuPortalTarget, menuShouldBlockScroll = _this$props12.menuShouldBlockScroll, menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView, noOptionsMessage2 = _this$props12.noOptionsMessage, onMenuScrollToTop = _this$props12.onMenuScrollToTop, onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
      if (!menuIsOpen)
        return null;
      var render = function render2(props, id) {
        var type = props.type, data = props.data, isDisabled = props.isDisabled, isSelected = props.isSelected, label = props.label, value = props.value;
        var isFocused = focusedOption === data;
        var onHover = isDisabled ? void 0 : function() {
          return _this4.onOptionHover(data);
        };
        var onSelect = isDisabled ? void 0 : function() {
          return _this4.selectOption(data);
        };
        var optionId = "".concat(_this4.getElementId("option"), "-").concat(id);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1
        };
        return /* @__PURE__ */ v$2(Option3, _extends({}, commonProps, {
          innerProps,
          data,
          isDisabled,
          isSelected,
          key: optionId,
          label,
          type,
          value,
          isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : void 0
        }), _this4.formatOptionLabel(props.data, "menu"));
      };
      var menuUI;
      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function(item) {
          if (item.type === "group") {
            var _data = item.data, options2 = item.options, groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId("group"), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /* @__PURE__ */ v$2(Group3, _extends({}, commonProps, {
              key: groupId,
              data: _data,
              options: options2,
              Heading: GroupHeading3,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function(option) {
              return render(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === "option") {
            return render(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage2({
          inputValue
        });
        if (message === null)
          return null;
        menuUI = /* @__PURE__ */ v$2(LoadingMessage3, commonProps, message);
      } else {
        var _message = noOptionsMessage2({
          inputValue
        });
        if (_message === null)
          return null;
        menuUI = /* @__PURE__ */ v$2(NoOptionsMessage3, commonProps, _message);
      }
      var menuPlacementProps = {
        minMenuHeight,
        maxMenuHeight,
        menuPlacement,
        menuPosition,
        menuShouldScrollIntoView
      };
      var menuElement = /* @__PURE__ */ v$2(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function(_ref4) {
        var ref = _ref4.ref, _ref4$placerProps = _ref4.placerProps, placement = _ref4$placerProps.placement, maxHeight = _ref4$placerProps.maxHeight;
        return /* @__PURE__ */ v$2(Menu3, _extends({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove,
            id: _this4.getElementId("listbox")
          },
          isLoading,
          placement
        }), /* @__PURE__ */ v$2(ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function(scrollTargetRef) {
          return /* @__PURE__ */ v$2(MenuList3, _extends({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);
              scrollTargetRef(instance);
            },
            isLoading,
            maxHeight,
            focusedOption
          }), menuUI);
        }));
      });
      return menuPortalTarget || menuPosition === "fixed" ? /* @__PURE__ */ v$2(MenuPortal2, _extends({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement,
        menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;
      var _this$props13 = this.props, delimiter2 = _this$props13.delimiter, isDisabled = _this$props13.isDisabled, isMulti = _this$props13.isMulti, name = _this$props13.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled)
        return;
      if (isMulti) {
        if (delimiter2) {
          var value = selectValue.map(function(opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter2);
          return /* @__PURE__ */ v$2("input", {
            name,
            type: "hidden",
            value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function(opt, i) {
            return /* @__PURE__ */ v$2("input", {
              key: "i-".concat(i),
              name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /* @__PURE__ */ v$2("input", {
            name,
            type: "hidden"
          });
          return /* @__PURE__ */ v$2("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : "";
        return /* @__PURE__ */ v$2("input", {
          name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      var commonProps = this.commonProps;
      var _this$state6 = this.state, ariaSelection = _this$state6.ariaSelection, focusedOption = _this$state6.focusedOption, focusedValue = _this$state6.focusedValue, isFocused = _this$state6.isFocused, selectValue = _this$state6.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return /* @__PURE__ */ v$2(LiveRegion, _extends({}, commonProps, {
        id: this.getElementId("live-region"),
        ariaSelection,
        focusedOption,
        focusedValue,
        isFocused,
        selectValue,
        focusableOptions
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getComponents8 = this.getComponents(), Control3 = _this$getComponents8.Control, IndicatorsContainer3 = _this$getComponents8.IndicatorsContainer, SelectContainer3 = _this$getComponents8.SelectContainer, ValueContainer3 = _this$getComponents8.ValueContainer;
      var _this$props14 = this.props, className = _this$props14.className, id = _this$props14.id, isDisabled = _this$props14.isDisabled, menuIsOpen = _this$props14.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ v$2(SelectContainer3, _extends({}, commonProps, {
        className,
        innerProps: {
          id,
          onKeyDown: this.onKeyDown
        },
        isDisabled,
        isFocused
      }), this.renderLiveRegion(), /* @__PURE__ */ v$2(Control3, _extends({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled,
        isFocused,
        menuIsOpen
      }), /* @__PURE__ */ v$2(ValueContainer3, _extends({}, commonProps, {
        isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ v$2(IndicatorsContainer3, _extends({}, commonProps, {
        isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps, clearFocusValueOnUpdate = state.clearFocusValueOnUpdate, inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate, ariaSelection = state.ariaSelection, isFocused = state.isFocused, prevWasFocused = state.prevWasFocused;
      var options2 = props.options, value = props.value, menuIsOpen = props.menuIsOpen, inputValue = props.inputValue, isMulti = props.isMulti;
      var selectValue = cleanValue(value);
      var newMenuOptionsState = {};
      if (prevProps && (value !== prevProps.value || options2 !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        newMenuOptionsState = {
          selectValue,
          focusedOption,
          focusedValue,
          clearFocusValueOnUpdate: false
        };
      }
      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: void 0
      } : {};
      var newAriaSelection = ariaSelection;
      var hasKeptFocus = isFocused && prevWasFocused;
      if (isFocused && !hasKeptFocus) {
        newAriaSelection = {
          value: valueTernary(isMulti, selectValue, selectValue[0] || null),
          options: selectValue,
          action: "initial-input-focus"
        };
        hasKeptFocus = !prevWasFocused;
      }
      if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus") {
        newAriaSelection = null;
      }
      return _objectSpread2(_objectSpread2(_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props,
        ariaSelection: newAriaSelection,
        prevWasFocused: hasKeptFocus
      });
    }
  }]);
  return Select2;
}(_$1);
Select$1.defaultProps = defaultProps;
var StateManagedSelect = /* @__PURE__ */ x$1(function(props, ref) {
  var baseSelectProps = useStateManager(props);
  return /* @__PURE__ */ v$2(Select$1, _extends({
    ref
  }, baseSelectProps));
});
var ReactSelect = StateManagedSelect;
function useMutationObserver(ref, options2 = {
  attributes: true,
  childList: true,
  subtree: true
}, callback) {
  _(() => {
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => callback == null ? void 0 : callback(mutation));
    });
    mutationObserver.observe(ref.current, options2);
    return () => {
      var _a;
      (_a = mutationObserver == null ? void 0 : mutationObserver.disconnect) == null ? void 0 : _a.call(mutationObserver);
    };
  }, [ref, options2, callback]);
}
function Select(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const {
    parent,
    select,
    onChange: onChange2,
    onInputChange,
    onBlur,
    onFocus: onFocus2,
    onKeyDown,
    onMenuClose,
    onMenuOpen,
    onMenuScrollToBottom,
    onMenuScrollToTop,
    ...rest
  } = props;
  const [disabled, setDisabled] = y$1((_b = rest.isDisabled) != null ? _b : (_a = select == null ? void 0 : select.current) == null ? void 0 : _a.disabled);
  const [rtl, setRtl] = y$1((_d = rest.isRtl) != null ? _d : (_c = select == null ? void 0 : select.current) == null ? void 0 : _c.hasAttribute("data-rtl"));
  const [loading, setLoading] = y$1((_f = rest.isLoading) != null ? _f : (_e = select == null ? void 0 : select.current) == null ? void 0 : _e.hasAttribute("data-loading"));
  const [searchable, setSearchable] = y$1((_h = rest.isSearchable) != null ? _h : (_g = select == null ? void 0 : select.current) == null ? void 0 : _g.hasAttribute("data-searchable"));
  const [clearable, setClearable] = y$1((_j = rest.isClearable) != null ? _j : (_i = select == null ? void 0 : select.current) == null ? void 0 : _i.hasAttribute("data-clearable"));
  const [value, setValue] = y$1(null);
  const [options2, setOptions] = y$1([]);
  const handleMutation = T$1((mutation) => {
    if (mutation.target !== select.current)
      return;
    const target = mutation.target;
    if (mutation.type === "attributes" && mutation.attributeName) {
      console.log("mutated", mutation.attributeName, target.getAttribute(mutation.attributeName));
      switch (mutation.attributeName) {
        case "disabled": {
          return setDisabled(target.disabled);
        }
        case "data-loading": {
          return setLoading(target.hasAttribute("data-loading"));
        }
        case "data-searchable": {
          return setSearchable(target.hasAttribute("data-searchable"));
        }
        case "data-clearable": {
          return setClearable(target.hasAttribute("data-clearable"));
        }
        case "data-rtl": {
          return setRtl(target.hasAttribute("data-rtl"));
        }
      }
    }
  }, []);
  const mutationObserverOptions = F$1(() => ({
    attributes: true,
    subtree: true
  }), []);
  useMutationObserver(select, mutationObserverOptions, handleMutation);
  function getSelectOptions() {
    if (!select.current)
      return [];
    const items = [...select.current.querySelectorAll("option")];
    if (!(items == null ? void 0 : items.length))
      return [];
    return items.map((option) => {
      return {
        value: option.getAttribute("value"),
        label: option.innerText
      };
    }).filter(Boolean);
  }
  const emit = T$1((name, ...data) => {
    const current = select.current;
    if (!current)
      return;
    const event = new CustomEvent(`select:${name}`, {
      detail: data,
      select: current
    });
    current.dispatchEvent(event);
  }, []);
  h$1(() => {
    const current = select.current;
    if (!current)
      return;
    emit("before-init", current);
    const initd = current.style.display;
    current.style.display = "none";
    const opts = getSelectOptions();
    setOptions(opts);
    if (opts[0]) {
      setValue([{ ...opts[0] }]);
    }
    emit("init", select);
    return () => {
      current.style.display = initd;
      emit("destroy", select);
    };
  }, [select]);
  _(() => {
    if (select) {
      const opts = select.current.querySelectorAll("option");
      opts.forEach((option) => {
        if (option.getAttribute("value") === (value == null ? void 0 : value.value)) {
          option.setAttribute("selected", true);
        } else {
          option.removeAttribute("selected");
        }
      });
      emit("change", value);
    }
  }, [value]);
  function handleChange(event) {
    setValue(event);
  }
  function handleInputChange(event) {
    emit("inputchange", event);
  }
  function handleBlur(event) {
    emit("blur", event);
  }
  function handleFocus(event) {
    emit("focus", event);
  }
  function handleKeyDown(event) {
    emit("keydown", event);
  }
  function handleMenuClose() {
    emit("menuclose");
  }
  function handleMenuOpen() {
    emit("menuopen");
  }
  function handleMenuScrollToBottom(event) {
    emit("menuscrolltobottom", event);
  }
  function handleMenuScrollToTop(event) {
    emit("menuscrolltotop", event);
  }
  return /* @__PURE__ */ v$2(ReactSelect, {
    options: options2,
    isDisabled: disabled,
    isLoading: loading,
    isSearchable: searchable,
    isClearable: clearable,
    isRtl: rtl,
    onChange: handleChange,
    onInputChange: handleInputChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onMenuClose: handleMenuClose,
    onMenuOpen: handleMenuOpen,
    onMenuScrollToBottom: handleMenuScrollToBottom,
    onMenuScrollToTop: handleMenuScrollToTop,
    value,
    ...rest
  });
}
function createSelect(select, options2 = {}) {
  const { wrapperElement, wrapperClassName, ...props } = options2;
  const parent = select.parentElement;
  const className = classnames$1("fatti__wrapper", wrapperClassName, [
    ...select.classList.values()
  ]);
  const parentRef = p$2();
  parentRef.current = parent;
  const selectRef = p$2();
  selectRef.current = select;
  S$1(/* @__PURE__ */ v$2(Select, {
    select: selectRef,
    parent: parentRef,
    className,
    ...props
  }), parent);
  return { parent, select };
}
export { createSelect };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ei5lcy5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCIuLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLm1vZHVsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L2Rpc3QvY29tcGF0Lm1vZHVsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zaGVldC9kaXN0L2Vtb3Rpb24tc2hlZXQuYnJvd3Nlci5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9FbnVtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvVXRpbGl0eS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1Rva2VuaXplci5qcyIsIi4uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1BhcnNlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1ByZWZpeGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvU2VyaWFsaXplci5qcyIsIi4uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL01pZGRsZXdhcmUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L2Vtb3Rpb24tbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9kaXN0L2Vtb3Rpb24tY2FjaGUuYnJvd3Nlci5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3V0aWxzL2Rpc3QvZW1vdGlvbi11dGlscy5icm93c2VyLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9oYXNoL2Rpc3QvaGFzaC5icm93c2VyLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L3VuaXRsZXNzLmJyb3dzZXIuZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3NlcmlhbGl6ZS9kaXN0L2Vtb3Rpb24tc2VyaWFsaXplLmJyb3dzZXIuZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3JlYWN0L2Rpc3QvZW1vdGlvbi1lbGVtZW50LWNiZWQ0NTFmLmJyb3dzZXIuZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3JlYWN0L2Rpc3QvZW1vdGlvbi1yZWFjdC5icm93c2VyLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90YWdnZWRUZW1wbGF0ZUxpdGVyYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC9pbmRleC1hNzY5MGEzMy5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvdXNlU3RhdGVNYW5hZ2VyLTY4NDI1MjcxLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbWVtb2l6ZS1vbmUvZGlzdC9tZW1vaXplLW9uZS5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvU2VsZWN0LWU2ZjRhZjI0LmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC9yZWFjdC1zZWxlY3QuZXNtLmpzIiwiLi4vc3JjL3VzZU11dGF0aW9uT2JzZXJ2ZXIudHMiLCIuLi9zcmMvc2VsZWN0LnRzeCIsIi4uL3NyYy9tYWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbixsLHUsaSx0LG8scixmLGU9e30sYz1bXSxzPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7ZnVuY3Rpb24gYShuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBoKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHYobCx1LGkpe3ZhciB0LG8scixmPXt9O2ZvcihyIGluIHUpXCJrZXlcIj09cj90PXVbcl06XCJyZWZcIj09cj9vPXVbcl06ZltyXT11W3JdO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKHIgaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltyXSYmKGZbcl09bC5kZWZhdWx0UHJvcHNbcl0pO3JldHVybiB5KGwsZix0LG8sbnVsbCl9ZnVuY3Rpb24geShuLGksdCxvLHIpe3ZhciBmPXt0eXBlOm4scHJvcHM6aSxrZXk6dCxyZWY6byxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1yPysrdTpyfTtyZXR1cm4gbnVsbD09ciYmbnVsbCE9bC52bm9kZSYmbC52bm9kZShmKSxmfWZ1bmN0aW9uIHAoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBkKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIF8obixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gayhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ayhuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9rKG4pOm51bGx9ZnVuY3Rpb24gYihuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIGIobil9fWZ1bmN0aW9uIG0obil7KCFuLl9fZCYmKG4uX19kPSEwKSYmdC5wdXNoKG4pJiYhZy5fX3IrK3x8ciE9PWwuZGVib3VuY2VSZW5kZXJpbmcpJiYoKHI9bC5kZWJvdW5jZVJlbmRlcmluZyl8fG8pKGcpfWZ1bmN0aW9uIGcoKXtmb3IodmFyIG47Zy5fX3I9dC5sZW5ndGg7KW49dC5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx0PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LGksdCxvLHI7bi5fX2QmJihvPSh0PShsPW4pLl9fdikuX19lLChyPWwuX19QKSYmKHU9W10sKGk9YSh7fSx0KSkuX192PXQuX192KzEsaihyLHQsaSxsLl9fbix2b2lkIDAhPT1yLm93bmVyU1ZHRWxlbWVudCxudWxsIT10Ll9faD9bb106bnVsbCx1LG51bGw9PW8/ayh0KTpvLHQuX19oKSx6KHUsdCksdC5fX2UhPW8mJmIodCkpKX0pfWZ1bmN0aW9uIHcobixsLHUsaSx0LG8scixmLHMsYSl7dmFyIGgsdixwLF8sYixtLGcsdz1pJiZpLl9fa3x8YyxBPXcubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KF89dS5fX2tbaF09bnVsbD09KF89bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2YgXz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBffHxcIm51bWJlclwiPT10eXBlb2YgX3x8XCJiaWdpbnRcIj09dHlwZW9mIF8/eShudWxsLF8sbnVsbCxudWxsLF8pOkFycmF5LmlzQXJyYXkoXyk/eShkLHtjaGlsZHJlbjpffSxudWxsLG51bGwsbnVsbCk6Xy5fX2I+MD95KF8udHlwZSxfLnByb3BzLF8ua2V5LG51bGwsXy5fX3YpOl8pKXtpZihfLl9fPXUsXy5fX2I9dS5fX2IrMSxudWxsPT09KHA9d1toXSl8fHAmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXdbaF09dm9pZCAwO2Vsc2UgZm9yKHY9MDt2PEE7disrKXtpZigocD13W3ZdKSYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpe3dbdl09dm9pZCAwO2JyZWFrfXA9bnVsbH1qKG4sXyxwPXB8fGUsdCxvLHIsZixzLGEpLGI9Xy5fX2UsKHY9Xy5yZWYpJiZwLnJlZiE9diYmKGd8fChnPVtdKSxwLnJlZiYmZy5wdXNoKHAucmVmLG51bGwsXyksZy5wdXNoKHYsXy5fX2N8fGIsXykpLG51bGwhPWI/KG51bGw9PW0mJihtPWIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIF8udHlwZSYmXy5fX2s9PT1wLl9faz9fLl9fZD1zPXgoXyxzLG4pOnM9UChuLF8scCx3LGIscyksXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9cykpOnMmJnAuX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWsocCkpfWZvcih1Ll9fZT1tLGg9QTtoLS07KW51bGwhPXdbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPXdbaF0uX19lJiZ3W2hdLl9fZT09dS5fX2QmJih1Ll9fZD1rKGksaCsxKSksTih3W2hdLHdbaF0pKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspTShnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIHgobixsLHUpe2Zvcih2YXIgaSx0PW4uX19rLG89MDt0JiZvPHQubGVuZ3RoO28rKykoaT10W29dKSYmKGkuX189bixsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGkudHlwZT94KGksbCx1KTpQKHUsaSxpLHQsaS5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIEEobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXtBKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gUChuLGwsdSxpLHQsbyl7dmFyIHIsZixlO2lmKHZvaWQgMCE9PWwuX19kKXI9bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9b3x8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09b3x8by5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLHI9bnVsbDtlbHNle2ZvcihmPW8sZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsbykscj1vfXJldHVybiB2b2lkIDAhPT1yP3I6dC5uZXh0U2libGluZ31mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIG87Zm9yKG8gaW4gdSlcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8byBpbiBsfHxIKG4sbyxudWxsLHVbb10saSk7Zm9yKG8gaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW29dfHxcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8XCJ2YWx1ZVwiPT09b3x8XCJjaGVja2VkXCI9PT1vfHx1W29dPT09bFtvXXx8SChuLG8sbFtvXSx1W29dLGkpfWZ1bmN0aW9uICQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHMudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEgobixsLHUsaSx0KXt2YXIgbztuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fCQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8JChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlvPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrb109dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLG8/VDpJLG8pOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLG8/VDpJLG8pO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmsoSHw6aCkvLFwiaFwiKS5yZXBsYWNlKC9zTmFtZSQvLFwic1wiKTtlbHNlIGlmKFwiaHJlZlwiIT09bCYmXCJsaXN0XCIhPT1sJiZcImZvcm1cIiE9PWwmJlwidGFiSW5kZXhcIiE9PWwmJlwiZG93bmxvYWRcIiE9PWwmJmwgaW4gbil0cnl7bltsXT1udWxsPT11P1wiXCI6dTticmVhayBufWNhdGNoKG4pe31cImZ1bmN0aW9uXCI9PXR5cGVvZiB1fHwobnVsbCE9dSYmKCExIT09dXx8XCJhXCI9PT1sWzBdJiZcInJcIj09PWxbMV0pP24uc2V0QXR0cmlidXRlKGwsdSk6bi5yZW1vdmVBdHRyaWJ1dGUobCkpfX1mdW5jdGlvbiBJKG4pe3RoaXMubFtuLnR5cGUrITFdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBUKG4pe3RoaXMubFtuLnR5cGUrITBdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBqKG4sdSxpLHQsbyxyLGYsZSxjKXt2YXIgcyxoLHYseSxwLGssYixtLGcseCxBLFAsQywkPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsO251bGwhPWkuX19oJiYoYz1pLl9faCxlPXUuX19lPWkuX19lLHUuX19oPW51bGwscj1bZV0pLChzPWwuX19iKSYmcyh1KTt0cnl7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiAkKXtpZihtPXUucHJvcHMsZz0ocz0kLmNvbnRleHRUeXBlKSYmdFtzLl9fY10seD1zP2c/Zy5wcm9wcy52YWx1ZTpzLl9fOnQsaS5fX2M/Yj0oaD11Ll9fYz1pLl9fYykuX189aC5fX0U6KFwicHJvdG90eXBlXCJpbiAkJiYkLnByb3RvdHlwZS5yZW5kZXI/dS5fX2M9aD1uZXcgJChtLHgpOih1Ll9fYz1oPW5ldyBfKG0seCksaC5jb25zdHJ1Y3Rvcj0kLGgucmVuZGVyPU8pLGcmJmcuc3ViKGgpLGgucHJvcHM9bSxoLnN0YXRlfHwoaC5zdGF0ZT17fSksaC5jb250ZXh0PXgsaC5fX249dCx2PWguX19kPSEwLGguX19oPVtdKSxudWxsPT1oLl9fcyYmKGguX19zPWguc3RhdGUpLG51bGwhPSQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYoaC5fX3M9PWguc3RhdGUmJihoLl9fcz1hKHt9LGguX19zKSksYShoLl9fcywkLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhtLGguX19zKSkpLHk9aC5wcm9wcyxwPWguc3RhdGUsdiludWxsPT0kLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9aC5jb21wb25lbnRXaWxsTW91bnQmJmguY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9aC5jb21wb25lbnREaWRNb3VudCYmaC5fX2gucHVzaChoLmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG51bGw9PSQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZtIT09eSYmbnVsbCE9aC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZoLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobSx4KSwhaC5fX2UmJm51bGwhPWguc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PWguc2hvdWxkQ29tcG9uZW50VXBkYXRlKG0saC5fX3MseCl8fHUuX192PT09aS5fX3Ype2gucHJvcHM9bSxoLnN0YXRlPWguX19zLHUuX192IT09aS5fX3YmJihoLl9fZD0hMSksaC5fX3Y9dSx1Ll9fZT1pLl9fZSx1Ll9faz1pLl9fayx1Ll9fay5mb3JFYWNoKGZ1bmN0aW9uKG4pe24mJihuLl9fPXUpfSksaC5fX2gubGVuZ3RoJiZmLnB1c2goaCk7YnJlYWsgbn1udWxsIT1oLmNvbXBvbmVudFdpbGxVcGRhdGUmJmguY29tcG9uZW50V2lsbFVwZGF0ZShtLGguX19zLHgpLG51bGwhPWguY29tcG9uZW50RGlkVXBkYXRlJiZoLl9faC5wdXNoKGZ1bmN0aW9uKCl7aC5jb21wb25lbnREaWRVcGRhdGUoeSxwLGspfSl9aWYoaC5jb250ZXh0PXgsaC5wcm9wcz1tLGguX192PXUsaC5fX1A9bixBPWwuX19yLFA9MCxcInByb3RvdHlwZVwiaW4gJCYmJC5wcm90b3R5cGUucmVuZGVyKWguc3RhdGU9aC5fX3MsaC5fX2Q9ITEsQSYmQSh1KSxzPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpO2Vsc2UgZG97aC5fX2Q9ITEsQSYmQSh1KSxzPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLGguc3RhdGU9aC5fX3N9d2hpbGUoaC5fX2QmJisrUDwyNSk7aC5zdGF0ZT1oLl9fcyxudWxsIT1oLmdldENoaWxkQ29udGV4dCYmKHQ9YShhKHt9LHQpLGguZ2V0Q2hpbGRDb250ZXh0KCkpKSx2fHxudWxsPT1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHwoaz1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHkscCkpLEM9bnVsbCE9cyYmcy50eXBlPT09ZCYmbnVsbD09cy5rZXk/cy5wcm9wcy5jaGlsZHJlbjpzLHcobixBcnJheS5pc0FycmF5KEMpP0M6W0NdLHUsaSx0LG8scixmLGUsYyksaC5iYXNlPXUuX19lLHUuX19oPW51bGwsaC5fX2gubGVuZ3RoJiZmLnB1c2goaCksYiYmKGguX19FPWguX189bnVsbCksaC5fX2U9ITF9ZWxzZSBudWxsPT1yJiZ1Ll9fdj09PWkuX192Pyh1Ll9faz1pLl9fayx1Ll9fZT1pLl9fZSk6dS5fX2U9TChpLl9fZSx1LGksdCxvLHIsZixjKTsocz1sLmRpZmZlZCkmJnModSl9Y2F0Y2gobil7dS5fX3Y9bnVsbCwoY3x8bnVsbCE9cikmJih1Ll9fZT1lLHUuX19oPSEhYyxyW3IuaW5kZXhPZihlKV09bnVsbCksbC5fX2Uobix1LGkpfX1mdW5jdGlvbiB6KG4sdSl7bC5fX2MmJmwuX19jKHUsbiksbi5zb21lKGZ1bmN0aW9uKHUpe3RyeXtuPXUuX19oLHUuX19oPVtdLG4uc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChuKXtsLl9fZShuLHUuX192KX19KX1mdW5jdGlvbiBMKGwsdSxpLHQsbyxyLGYsYyl7dmFyIHMsYSx2LHk9aS5wcm9wcyxwPXUucHJvcHMsZD11LnR5cGUsXz0wO2lmKFwic3ZnXCI9PT1kJiYobz0hMCksbnVsbCE9cilmb3IoO188ci5sZW5ndGg7XysrKWlmKChzPXJbX10pJiZcInNldEF0dHJpYnV0ZVwiaW4gcz09ISFkJiYoZD9zLmxvY2FsTmFtZT09PWQ6Mz09PXMubm9kZVR5cGUpKXtsPXMscltfXT1udWxsO2JyZWFrfWlmKG51bGw9PWwpe2lmKG51bGw9PT1kKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwKTtsPW8/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixkKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGQscC5pcyYmcCkscj1udWxsLGM9ITF9aWYobnVsbD09PWQpeT09PXB8fGMmJmwuZGF0YT09PXB8fChsLmRhdGE9cCk7ZWxzZXtpZihyPXImJm4uY2FsbChsLmNoaWxkTm9kZXMpLGE9KHk9aS5wcm9wc3x8ZSkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsdj1wLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihudWxsIT1yKWZvcih5PXt9LF89MDtfPGwuYXR0cmlidXRlcy5sZW5ndGg7XysrKXlbbC5hdHRyaWJ1dGVzW19dLm5hbWVdPWwuYXR0cmlidXRlc1tfXS52YWx1ZTsodnx8YSkmJih2JiYoYSYmdi5fX2h0bWw9PWEuX19odG1sfHx2Ll9faHRtbD09PWwuaW5uZXJIVE1MKXx8KGwuaW5uZXJIVE1MPXYmJnYuX19odG1sfHxcIlwiKSl9aWYoQyhsLHAseSxvLGMpLHYpdS5fX2s9W107ZWxzZSBpZihfPXUucHJvcHMuY2hpbGRyZW4sdyhsLEFycmF5LmlzQXJyYXkoXyk/XzpbX10sdSxpLHQsbyYmXCJmb3JlaWduT2JqZWN0XCIhPT1kLHIsZixyP3JbMF06aS5fX2smJmsoaSwwKSxjKSxudWxsIT1yKWZvcihfPXIubGVuZ3RoO18tLTspbnVsbCE9cltfXSYmaChyW19dKTtjfHwoXCJ2YWx1ZVwiaW4gcCYmdm9pZCAwIT09KF89cC52YWx1ZSkmJihfIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09ZCYmIV98fFwib3B0aW9uXCI9PT1kJiZfIT09eS52YWx1ZSkmJkgobCxcInZhbHVlXCIsXyx5LnZhbHVlLCExKSxcImNoZWNrZWRcImluIHAmJnZvaWQgMCE9PShfPXAuY2hlY2tlZCkmJl8hPT1sLmNoZWNrZWQmJkgobCxcImNoZWNrZWRcIixfLHkuY2hlY2tlZCwhMSkpfXJldHVybiBsfWZ1bmN0aW9uIE0obix1LGkpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odSk6bi5jdXJyZW50PXV9Y2F0Y2gobil7bC5fX2UobixpKX19ZnVuY3Rpb24gTihuLHUsaSl7dmFyIHQsbztpZihsLnVubW91bnQmJmwudW5tb3VudChuKSwodD1uLnJlZikmJih0LmN1cnJlbnQmJnQuY3VycmVudCE9PW4uX19lfHxNKHQsbnVsbCx1KSksbnVsbCE9KHQ9bi5fX2MpKXtpZih0LmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXt0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobil7bC5fX2Uobix1KX10LmJhc2U9dC5fX1A9bnVsbH1pZih0PW4uX19rKWZvcihvPTA7bzx0Lmxlbmd0aDtvKyspdFtvXSYmTih0W29dLHUsXCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTtpfHxudWxsPT1uLl9fZXx8aChuLl9fZSksbi5fX2U9bi5fX2Q9dm9pZCAwfWZ1bmN0aW9uIE8obixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gUyh1LGksdCl7dmFyIG8scixmO2wuX18mJmwuX18odSxpKSxyPShvPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQpP251bGw6dCYmdC5fX2t8fGkuX19rLGY9W10saihpLHU9KCFvJiZ0fHxpKS5fX2s9dihkLG51bGwsW3VdKSxyfHxlLGUsdm9pZCAwIT09aS5vd25lclNWR0VsZW1lbnQsIW8mJnQ/W3RdOnI/bnVsbDppLmZpcnN0Q2hpbGQ/bi5jYWxsKGkuY2hpbGROb2Rlcyk6bnVsbCxmLCFvJiZ0P3Q6cj9yLl9fZTppLmZpcnN0Q2hpbGQsbykseihmLHUpfWZ1bmN0aW9uIHEobixsKXtTKG4sbCxxKX1mdW5jdGlvbiBCKGwsdSxpKXt2YXIgdCxvLHIsZj1hKHt9LGwucHJvcHMpO2ZvcihyIGluIHUpXCJrZXlcIj09cj90PXVbcl06XCJyZWZcIj09cj9vPXVbcl06ZltyXT11W3JdO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLHkobC50eXBlLGYsdHx8bC5rZXksb3x8bC5yZWYsbnVsbCl9ZnVuY3Rpb24gRChuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIitmKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSxpO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9W10sKGk9e30pW2xdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9PW4udmFsdWUmJnUuc29tZShtKX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3Uuc3BsaWNlKHUuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LlByb3ZpZGVyLl9fPXUuQ29uc3VtZXIuY29udGV4dFR5cGU9dX1uPWMuc2xpY2UsbD17X19lOmZ1bmN0aW9uKG4sbCx1LGkpe2Zvcih2YXIgdCxvLHI7bD1sLl9fOylpZigodD1sLl9fYykmJiF0Ll9fKXRyeXtpZigobz10LmNvbnN0cnVjdG9yKSYmbnVsbCE9by5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih0LnNldFN0YXRlKG8uZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSxyPXQuX19kKSxudWxsIT10LmNvbXBvbmVudERpZENhdGNoJiYodC5jb21wb25lbnREaWRDYXRjaChuLGl8fHt9KSxyPXQuX19kKSxyKXJldHVybiB0Ll9fRT10fWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLGk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LF8ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWEoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihhKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZhKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLG0odGhpcykpfSxfLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksbSh0aGlzKSl9LF8ucHJvdG90eXBlLnJlbmRlcj1kLHQ9W10sbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxnLl9fcj0wLGY9MDtleHBvcnR7UyBhcyByZW5kZXIscSBhcyBoeWRyYXRlLHYgYXMgY3JlYXRlRWxlbWVudCx2IGFzIGgsZCBhcyBGcmFnbWVudCxwIGFzIGNyZWF0ZVJlZixpIGFzIGlzVmFsaWRFbGVtZW50LF8gYXMgQ29tcG9uZW50LEIgYXMgY2xvbmVFbGVtZW50LEQgYXMgY3JlYXRlQ29udGV4dCxBIGFzIHRvQ2hpbGRBcnJheSxsIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRpZiAoYXJnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGlmIChhcmcudG9TdHJpbmcgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLG8saT0wLGM9W10sZj1bXSxlPW4uX19iLGE9bi5fX3Isdj1uLmRpZmZlZCxsPW4uX19jLG09bi51bm1vdW50O2Z1bmN0aW9uIHAodCxyKXtuLl9faCYmbi5fX2godSx0LGl8fHIpLGk9MDt2YXIgbz11Ll9fSHx8KHUuX19IPXtfXzpbXSxfX2g6W119KTtyZXR1cm4gdD49by5fXy5sZW5ndGgmJm8uX18ucHVzaCh7X19WOmZ9KSxvLl9fW3RdfWZ1bmN0aW9uIHkobil7cmV0dXJuIGk9MSxkKHosbil9ZnVuY3Rpb24gZChuLHIsbyl7dmFyIGk9cCh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOnoodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiBfKHIsbyl7dmFyIGk9cCh0KyssMyk7IW4uX19zJiZ3KGkuX19ILG8pJiYoaS5fXz1yLGkudT1vLHUuX19ILl9faC5wdXNoKGkpKX1mdW5jdGlvbiBoKHIsbyl7dmFyIGk9cCh0KyssNCk7IW4uX19zJiZ3KGkuX19ILG8pJiYoaS5fXz1yLGkudT1vLHUuX19oLnB1c2goaSkpfWZ1bmN0aW9uIHMobil7cmV0dXJuIGk9NSxGKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBBKG4sdCx1KXtpPTYsaChmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4/KG4odCgpKSxmdW5jdGlvbigpe3JldHVybiBuKG51bGwpfSk6bj8obi5jdXJyZW50PXQoKSxmdW5jdGlvbigpe3JldHVybiBuLmN1cnJlbnQ9bnVsbH0pOnZvaWQgMH0sbnVsbD09dT91OnUuY29uY2F0KG4pKX1mdW5jdGlvbiBGKG4sdSl7dmFyIHI9cCh0KyssNyk7cmV0dXJuIHcoci5fX0gsdSk/KHIuX19WPW4oKSxyLnU9dSxyLl9faD1uLHIuX19WKTpyLl9ffWZ1bmN0aW9uIFQobix0KXtyZXR1cm4gaT04LEYoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gcShuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLG89cCh0KyssOSk7cmV0dXJuIG8uYz1uLHI/KG51bGw9PW8uX18mJihvLl9fPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIHgodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gVihuKXt2YXIgcj1wKHQrKywxMCksbz15KCk7cmV0dXJuIHIuX189bix1LmNvbXBvbmVudERpZENhdGNofHwodS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXtyLl9fJiZyLl9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfWZ1bmN0aW9uIGIoKXtmb3IodmFyIHQ7dD1jLnNoaWZ0KCk7KWlmKHQuX19QKXRyeXt0Ll9fSC5fX2guZm9yRWFjaChqKSx0Ll9fSC5fX2guZm9yRWFjaChrKSx0Ll9fSC5fX2g9W119Y2F0Y2godSl7dC5fX0guX19oPVtdLG4uX19lKHUsdC5fX3YpfX1uLl9fYj1mdW5jdGlvbihuKXt1PW51bGwsZSYmZShuKX0sbi5fX3I9ZnVuY3Rpb24obil7YSYmYShuKSx0PTA7dmFyIG89KHU9bi5fX2MpLl9fSDtvJiYocj09PXU/KG8uX19oPVtdLHUuX19oPVtdLG8uX18uZm9yRWFjaChmdW5jdGlvbihuKXtuLl9fVj1mLG4udT12b2lkIDB9KSk6KG8uX19oLmZvckVhY2goaiksby5fX2guZm9yRWFjaChrKSxvLl9faD1bXSkpLHI9dX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgaT10Ll9fYztpJiZpLl9fSCYmKGkuX19ILl9faC5sZW5ndGgmJigxIT09Yy5wdXNoKGkpJiZvPT09bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCgobz1uLnJlcXVlc3RBbmltYXRpb25GcmFtZSl8fGZ1bmN0aW9uKG4pe3ZhciB0LHU9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQociksZyYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0scj1zZXRUaW1lb3V0KHUsMTAwKTtnJiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodSkpfSkoYikpLGkuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7bi51JiYobi5fX0g9bi51KSxuLl9fViE9PWYmJihuLl9fPW4uX19WKSxuLnU9dm9pZCAwLG4uX19WPWZ9KSkscj11PW51bGx9LG4uX19jPWZ1bmN0aW9uKHQsdSl7dS5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGopLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8ayhuKX0pfWNhdGNoKHIpe3Uuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHU9W10sbi5fX2Uocix0Ll9fdil9fSksbCYmbCh0LHUpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7bSYmbSh0KTt2YXIgdSxyPXQuX19jO3ImJnIuX19IJiYoci5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXt0cnl7aihuKX1jYXRjaChuKXt1PW59fSksdSYmbi5fX2UodSxyLl9fdikpfTt2YXIgZz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gaihuKXt2YXIgdD11LHI9bi5fX2M7XCJmdW5jdGlvblwiPT10eXBlb2YgciYmKG4uX19jPXZvaWQgMCxyKCkpLHU9dH1mdW5jdGlvbiBrKG4pe3ZhciB0PXU7bi5fX2M9bi5fXygpLHU9dH1mdW5jdGlvbiB3KG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHUpe3JldHVybiB0IT09blt1XX0pfWZ1bmN0aW9uIHoobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7eSBhcyB1c2VTdGF0ZSxkIGFzIHVzZVJlZHVjZXIsXyBhcyB1c2VFZmZlY3QsaCBhcyB1c2VMYXlvdXRFZmZlY3QscyBhcyB1c2VSZWYsQSBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLEYgYXMgdXNlTWVtbyxUIGFzIHVzZUNhbGxiYWNrLHEgYXMgdXNlQ29udGV4dCx4IGFzIHVzZURlYnVnVmFsdWUsViBhcyB1c2VFcnJvckJvdW5kYXJ5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHt1c2VTdGF0ZSBhcyBuLHVzZVJlZHVjZXIgYXMgdCx1c2VFZmZlY3QgYXMgZSx1c2VMYXlvdXRFZmZlY3QgYXMgcix1c2VSZWYgYXMgdSx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIG8sdXNlTWVtbyBhcyBpLHVzZUNhbGxiYWNrIGFzIGwsdXNlQ29udGV4dCBhcyBmLHVzZURlYnVnVmFsdWUgYXMgY31mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7aW1wb3J0e0NvbXBvbmVudCBhcyBhLGNyZWF0ZUVsZW1lbnQgYXMgcyxvcHRpb25zIGFzIGgsdG9DaGlsZEFycmF5IGFzIGQsRnJhZ21lbnQgYXMgdixyZW5kZXIgYXMgcCxoeWRyYXRlIGFzIG0sY2xvbmVFbGVtZW50IGFzIHksY3JlYXRlUmVmIGFzIGIsY3JlYXRlQ29udGV4dCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlUmVmLEZyYWdtZW50LENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtmdW5jdGlvbiBDKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufWZ1bmN0aW9uIFMobix0KXtmb3IodmFyIGUgaW4gbilpZihcIl9fc291cmNlXCIhPT1lJiYhKGUgaW4gdCkpcmV0dXJuITA7Zm9yKHZhciByIGluIHQpaWYoXCJfX3NvdXJjZVwiIT09ciYmbltyXSE9PXRbcl0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gRShuKXt0aGlzLnByb3BzPW59ZnVuY3Rpb24gZyhuLHQpe2Z1bmN0aW9uIGUobil7dmFyIGU9dGhpcy5wcm9wcy5yZWYscj1lPT1uLnJlZjtyZXR1cm4hciYmZSYmKGUuY2FsbD9lKG51bGwpOmUuY3VycmVudD1udWxsKSx0PyF0KHRoaXMucHJvcHMsbil8fCFyOlModGhpcy5wcm9wcyxuKX1mdW5jdGlvbiByKHQpe3JldHVybiB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1lLHMobix0KX1yZXR1cm4gci5kaXNwbGF5TmFtZT1cIk1lbW8oXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsci5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCxyLl9fZj0hMCxyfShFLnByb3RvdHlwZT1uZXcgYSkuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITAsRS5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIFModGhpcy5wcm9wcyxuKXx8Uyh0aGlzLnN0YXRlLHQpfTt2YXIgdz1oLl9fYjtoLl9fYj1mdW5jdGlvbihuKXtuLnR5cGUmJm4udHlwZS5fX2YmJm4ucmVmJiYobi5wcm9wcy5yZWY9bi5yZWYsbi5yZWY9bnVsbCksdyYmdyhuKX07dmFyIFI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpfHwzOTExO2Z1bmN0aW9uIHgobil7ZnVuY3Rpb24gdCh0KXt2YXIgZT1DKHt9LHQpO3JldHVybiBkZWxldGUgZS5yZWYsbihlLHQucmVmfHxudWxsKX1yZXR1cm4gdC4kJHR5cGVvZj1SLHQucmVuZGVyPXQsdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD10Ll9fZj0hMCx0LmRpc3BsYXlOYW1lPVwiRm9yd2FyZFJlZihcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix0fXZhciBOPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PW4/bnVsbDpkKGQobikubWFwKHQpKX0saz17bWFwOk4sZm9yRWFjaDpOLGNvdW50OmZ1bmN0aW9uKG4pe3JldHVybiBuP2QobikubGVuZ3RoOjB9LG9ubHk6ZnVuY3Rpb24obil7dmFyIHQ9ZChuKTtpZigxIT09dC5sZW5ndGgpdGhyb3dcIkNoaWxkcmVuLm9ubHlcIjtyZXR1cm4gdFswXX0sdG9BcnJheTpkfSxBPWguX19lO2guX19lPWZ1bmN0aW9uKG4sdCxlLHIpe2lmKG4udGhlbilmb3IodmFyIHUsbz10O289by5fXzspaWYoKHU9by5fX2MpJiZ1Ll9fYylyZXR1cm4gbnVsbD09dC5fX2UmJih0Ll9fZT1lLl9fZSx0Ll9faz1lLl9fayksdS5fX2Mobix0KTtBKG4sdCxlLHIpfTt2YXIgTz1oLnVubW91bnQ7ZnVuY3Rpb24gTCgpe3RoaXMuX191PTAsdGhpcy50PW51bGwsdGhpcy5fX2I9bnVsbH1mdW5jdGlvbiBVKG4pe3ZhciB0PW4uX18uX19jO3JldHVybiB0JiZ0Ll9fZSYmdC5fX2Uobil9ZnVuY3Rpb24gRihuKXt2YXIgdCxlLHI7ZnVuY3Rpb24gdSh1KXtpZih0fHwodD1uKCkpLnRoZW4oZnVuY3Rpb24obil7ZT1uLmRlZmF1bHR8fG59LGZ1bmN0aW9uKG4pe3I9bn0pLHIpdGhyb3cgcjtpZighZSl0aHJvdyB0O3JldHVybiBzKGUsdSl9cmV0dXJuIHUuZGlzcGxheU5hbWU9XCJMYXp5XCIsdS5fX2Y9ITAsdX1mdW5jdGlvbiBNKCl7dGhpcy51PW51bGwsdGhpcy5vPW51bGx9aC51bm1vdW50PWZ1bmN0aW9uKG4pe3ZhciB0PW4uX19jO3QmJnQuX19SJiZ0Ll9fUigpLHQmJiEwPT09bi5fX2gmJihuLnR5cGU9bnVsbCksTyYmTyhuKX0sKEwucHJvdG90eXBlPW5ldyBhKS5fX2M9ZnVuY3Rpb24obix0KXt2YXIgZT10Ll9fYyxyPXRoaXM7bnVsbD09ci50JiYoci50PVtdKSxyLnQucHVzaChlKTt2YXIgdT1VKHIuX192KSxvPSExLGk9ZnVuY3Rpb24oKXtvfHwobz0hMCxlLl9fUj1udWxsLHU/dShsKTpsKCkpfTtlLl9fUj1pO3ZhciBsPWZ1bmN0aW9uKCl7aWYoIS0tci5fX3Upe2lmKHIuc3RhdGUuX19lKXt2YXIgbj1yLnN0YXRlLl9fZTtyLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fdj1udWxsLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSksdC5fX2MmJnQuX19jLl9fUD09PWUmJih0Ll9fZSYmci5pbnNlcnRCZWZvcmUodC5fX2UsdC5fX2QpLHQuX19jLl9fZT0hMCx0Ll9fYy5fX1A9cikpLHR9KG4sbi5fX2MuX19QLG4uX19jLl9fTyl9dmFyIHQ7Zm9yKHIuc2V0U3RhdGUoe19fZTpyLl9fYj1udWxsfSk7dD1yLnQucG9wKCk7KXQuZm9yY2VVcGRhdGUoKX19LGY9ITA9PT10Ll9faDtyLl9fdSsrfHxmfHxyLnNldFN0YXRlKHtfX2U6ci5fX2I9ci5fX3YuX19rWzBdfSksbi50aGVuKGksaSl9LEwucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy50PVtdfSxMLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obix0KXtpZih0aGlzLl9fYil7aWYodGhpcy5fX3YuX19rKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHI9dGhpcy5fX3YuX19rWzBdLl9fYzt0aGlzLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fYyYmdC5fX2MuX19IJiYodC5fX2MuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCl9KSx0Ll9fYy5fX0g9bnVsbCksbnVsbCE9KHQ9Qyh7fSx0KSkuX19jJiYodC5fX2MuX19QPT09ciYmKHQuX19jLl9fUD1lKSx0Ll9fYz1udWxsKSx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pKSx0fSh0aGlzLl9fYixlLHIuX19PPXIuX19QKX10aGlzLl9fYj1udWxsfXZhciB1PXQuX19lJiZzKHYsbnVsbCxuLmZhbGxiYWNrKTtyZXR1cm4gdSYmKHUuX19oPW51bGwpLFtzKHYsbnVsbCx0Ll9fZT9udWxsOm4uY2hpbGRyZW4pLHVdfTt2YXIgVD1mdW5jdGlvbihuLHQsZSl7aWYoKytlWzFdPT09ZVswXSYmbi5vLmRlbGV0ZSh0KSxuLnByb3BzLnJldmVhbE9yZGVyJiYoXCJ0XCIhPT1uLnByb3BzLnJldmVhbE9yZGVyWzBdfHwhbi5vLnNpemUpKWZvcihlPW4udTtlOyl7Zm9yKDtlLmxlbmd0aD4zOyllLnBvcCgpKCk7aWYoZVsxXTxlWzBdKWJyZWFrO24udT1lPWVbMl19fTtmdW5jdGlvbiBEKG4pe3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBuLmNvbnRleHR9LG4uY2hpbGRyZW59ZnVuY3Rpb24gSShuKXt2YXIgdD10aGlzLGU9bi5pO3QuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtwKG51bGwsdC5sKSx0Lmw9bnVsbCx0Lmk9bnVsbH0sdC5pJiZ0LmkhPT1lJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCksbi5fX3Y/KHQubHx8KHQuaT1lLHQubD17bm9kZVR5cGU6MSxwYXJlbnROb2RlOmUsY2hpbGROb2RlczpbXSxhcHBlbmRDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LGluc2VydEJlZm9yZTpmdW5jdGlvbihuLGUpe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnNwbGljZSh0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihuKT4+PjEsMSksdC5pLnJlbW92ZUNoaWxkKG4pfX0pLHAocyhELHtjb250ZXh0OnQuY29udGV4dH0sbi5fX3YpLHQubCkpOnQubCYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWZ1bmN0aW9uIFcobix0KXt2YXIgZT1zKEkse19fdjpuLGk6dH0pO3JldHVybiBlLmNvbnRhaW5lckluZm89dCxlfShNLnByb3RvdHlwZT1uZXcgYSkuX19lPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1VKHQuX192KSxyPXQuby5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbih1KXt2YXIgbz1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaCh1KSxUKHQsbixyKSk6dSgpfTtlP2Uobyk6bygpfX0sTS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMubz1uZXcgTWFwO3ZhciB0PWQobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm8uc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LE0ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1NLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vLmZvckVhY2goZnVuY3Rpb24odCxlKXtUKG4sZSx0KX0pfTt2YXIgUD1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDMsVj0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGRvbWluYW50fGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fG1hcmtlcig/IUh8V3xVKXxvdmVybGluZXxwYWludHxzaGFwZXxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx1bmRlcmxpbmV8dW5pY29kZXx1bml0c3x2fHZlY3Rvcnx2ZXJ0fHdvcmR8d3JpdGluZ3x4KD8hQykpW0EtWl0vLCQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50LGo9ZnVuY3Rpb24obil7cmV0dXJuKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woKT8vZmlsfGNoZXxyYWQvaTovZmlsfGNoZXxyYS9pKS50ZXN0KG4pfTtmdW5jdGlvbiB6KG4sdCxlKXtyZXR1cm4gbnVsbD09dC5fX2smJih0LnRleHRDb250ZW50PVwiXCIpLHAobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWZ1bmN0aW9uIEIobix0LGUpe3JldHVybiBtKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1hLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9LFtcImNvbXBvbmVudFdpbGxNb3VudFwiLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLnByb3RvdHlwZSxuLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrbl19LHNldDpmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxuLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dH0pfX0pfSk7dmFyIEg9aC5ldmVudDtmdW5jdGlvbiBaKCl7fWZ1bmN0aW9uIFkoKXtyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGV9ZnVuY3Rpb24gcSgpe3JldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWR9aC5ldmVudD1mdW5jdGlvbihuKXtyZXR1cm4gSCYmKG49SChuKSksbi5wZXJzaXN0PVosbi5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1ZLG4uaXNEZWZhdWx0UHJldmVudGVkPXEsbi5uYXRpdmVFdmVudD1ufTt2YXIgRyxKPXtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSxLPWgudm5vZGU7aC52bm9kZT1mdW5jdGlvbihuKXt2YXIgdD1uLnR5cGUsZT1uLnByb3BzLHI9ZTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7dmFyIHU9LTE9PT10LmluZGV4T2YoXCItXCIpO2Zvcih2YXIgbyBpbiByPXt9LGUpe3ZhciBpPWVbb107JCYmXCJjaGlsZHJlblwiPT09byYmXCJub3NjcmlwdFwiPT09dHx8XCJ2YWx1ZVwiPT09byYmXCJkZWZhdWx0VmFsdWVcImluIGUmJm51bGw9PWl8fChcImRlZmF1bHRWYWx1ZVwiPT09byYmXCJ2YWx1ZVwiaW4gZSYmbnVsbD09ZS52YWx1ZT9vPVwidmFsdWVcIjpcImRvd25sb2FkXCI9PT1vJiYhMD09PWk/aT1cIlwiOi9vbmRvdWJsZWNsaWNrL2kudGVzdChvKT9vPVwib25kYmxjbGlja1wiOi9eb25jaGFuZ2UodGV4dGFyZWF8aW5wdXQpL2kudGVzdChvK3QpJiYhaihlLnR5cGUpP289XCJvbmlucHV0XCI6L15vbmZvY3VzJC9pLnRlc3Qobyk/bz1cIm9uZm9jdXNpblwiOi9eb25ibHVyJC9pLnRlc3Qobyk/bz1cIm9uZm9jdXNvdXRcIjovXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucHxDb21wbykvLnRlc3Qobyk/bz1vLnRvTG93ZXJDYXNlKCk6dSYmVi50ZXN0KG8pP289by5yZXBsYWNlKC9bQS1aMC05XS8sXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09aSYmKGk9dm9pZCAwKSwvXm9uaW5wdXQkL2kudGVzdChvKSYmKG89by50b0xvd2VyQ2FzZSgpLHJbb10mJihvPVwib25pbnB1dENhcHR1cmVcIikpLHJbb109aSl9XCJzZWxlY3RcIj09dCYmci5tdWx0aXBsZSYmQXJyYXkuaXNBcnJheShyLnZhbHVlKSYmKHIudmFsdWU9ZChlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9LTEhPXIudmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKX0pKSxcInNlbGVjdFwiPT10JiZudWxsIT1yLmRlZmF1bHRWYWx1ZSYmKHIudmFsdWU9ZChlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9ci5tdWx0aXBsZT8tMSE9ci5kZWZhdWx0VmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKTpyLmRlZmF1bHRWYWx1ZT09bi5wcm9wcy52YWx1ZX0pKSxuLnByb3BzPXIsZS5jbGFzcyE9ZS5jbGFzc05hbWUmJihKLmVudW1lcmFibGU9XCJjbGFzc05hbWVcImluIGUsbnVsbCE9ZS5jbGFzc05hbWUmJihyLmNsYXNzPWUuY2xhc3NOYW1lKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImNsYXNzTmFtZVwiLEopKX1uLiQkdHlwZW9mPVAsSyYmSyhuKX07dmFyIFE9aC5fX3I7aC5fX3I9ZnVuY3Rpb24obil7USYmUShuKSxHPW4uX19jfTt2YXIgWD17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjp7Y3VycmVudDp7cmVhZENvbnRleHQ6ZnVuY3Rpb24obil7cmV0dXJuIEcuX19uW24uX19jXS5wcm9wcy52YWx1ZX19fX0sbm49XCIxNy4wLjJcIjtmdW5jdGlvbiB0bihuKXtyZXR1cm4gcy5iaW5kKG51bGwsbil9ZnVuY3Rpb24gZW4obil7cmV0dXJuISFuJiZuLiQkdHlwZW9mPT09UH1mdW5jdGlvbiBybihuKXtyZXR1cm4gZW4obik/eS5hcHBseShudWxsLGFyZ3VtZW50cyk6bn1mdW5jdGlvbiB1bihuKXtyZXR1cm4hIW4uX19rJiYocChudWxsLG4pLCEwKX1mdW5jdGlvbiBvbihuKXtyZXR1cm4gbiYmKG4uYmFzZXx8MT09PW4ubm9kZVR5cGUmJm4pfHxudWxsfXZhciBsbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxmbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxjbj12O2V4cG9ydCBkZWZhdWx0e3VzZVN0YXRlOm4sdXNlUmVkdWNlcjp0LHVzZUVmZmVjdDplLHVzZUxheW91dEVmZmVjdDpyLHVzZVJlZjp1LHVzZUltcGVyYXRpdmVIYW5kbGU6byx1c2VNZW1vOmksdXNlQ2FsbGJhY2s6bCx1c2VDb250ZXh0OmYsdXNlRGVidWdWYWx1ZTpjLHZlcnNpb246XCIxNy4wLjJcIixDaGlsZHJlbjprLHJlbmRlcjp6LGh5ZHJhdGU6Qix1bm1vdW50Q29tcG9uZW50QXROb2RlOnVuLGNyZWF0ZVBvcnRhbDpXLGNyZWF0ZUVsZW1lbnQ6cyxjcmVhdGVDb250ZXh0Ol8sY3JlYXRlRmFjdG9yeTp0bixjbG9uZUVsZW1lbnQ6cm4sY3JlYXRlUmVmOmIsRnJhZ21lbnQ6dixpc1ZhbGlkRWxlbWVudDplbixmaW5kRE9NTm9kZTpvbixDb21wb25lbnQ6YSxQdXJlQ29tcG9uZW50OkUsbWVtbzpnLGZvcndhcmRSZWY6eCxmbHVzaFN5bmM6Zm4sdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6bG4sU3RyaWN0TW9kZTp2LFN1c3BlbnNlOkwsU3VzcGVuc2VMaXN0Ok0sbGF6eTpGLF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOlh9O2V4cG9ydHtubiBhcyB2ZXJzaW9uLGsgYXMgQ2hpbGRyZW4seiBhcyByZW5kZXIsQiBhcyBoeWRyYXRlLHVuIGFzIHVubW91bnRDb21wb25lbnRBdE5vZGUsVyBhcyBjcmVhdGVQb3J0YWwsdG4gYXMgY3JlYXRlRmFjdG9yeSxybiBhcyBjbG9uZUVsZW1lbnQsZW4gYXMgaXNWYWxpZEVsZW1lbnQsb24gYXMgZmluZERPTU5vZGUsRSBhcyBQdXJlQ29tcG9uZW50LGcgYXMgbWVtbyx4IGFzIGZvcndhcmRSZWYsZm4gYXMgZmx1c2hTeW5jLGxuIGFzIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLGNuIGFzIFN0cmljdE1vZGUsTCBhcyBTdXNwZW5zZSxNIGFzIFN1c3BlbnNlTGlzdCxGIGFzIGxhenksWCBhcyBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wYXQubW9kdWxlLmpzLm1hcFxuIiwiLypcblxuQmFzZWQgb2ZmIGdsYW1vcidzIFN0eWxlU2hlZXQsIHRoYW5rcyBTdW5pbCDinaTvuI9cblxuaGlnaCBwZXJmb3JtYW5jZSBTdHlsZVNoZWV0IGZvciBjc3MtaW4tanMgc3lzdGVtc1xuXG4tIHVzZXMgbXVsdGlwbGUgc3R5bGUgdGFncyBiZWhpbmQgdGhlIHNjZW5lcyBmb3IgbWlsbGlvbnMgb2YgcnVsZXNcbi0gdXNlcyBgaW5zZXJ0UnVsZWAgZm9yIGFwcGVuZGluZyBpbiBwcm9kdWN0aW9uIGZvciAqbXVjaCogZmFzdGVyIHBlcmZvcm1hbmNlXG5cbi8vIHVzYWdlXG5cbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCdcblxubGV0IHN0eWxlU2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7IGtleTogJycsIGNvbnRhaW5lcjogZG9jdW1lbnQuaGVhZCB9KVxuXG5zdHlsZVNoZWV0Lmluc2VydCgnI2JveCB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgfScpXG4tIGFwcGVuZHMgYSBjc3MgcnVsZSBpbnRvIHRoZSBzdHlsZXNoZWV0XG5cbnN0eWxlU2hlZXQuZmx1c2goKVxuLSBlbXB0aWVzIHRoZSBzdHlsZXNoZWV0IG9mIGFsbCBpdHMgY29udGVudHNcblxuKi9cbi8vICRGbG93Rml4TWVcbmZ1bmN0aW9uIHNoZWV0Rm9yVGFnKHRhZykge1xuICBpZiAodGFnLnNoZWV0KSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiB0YWcuc2hlZXQ7XG4gIH0gLy8gdGhpcyB3ZWlyZG5lc3MgYnJvdWdodCB0byB5b3UgYnkgZmlyZWZveFxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLm93bmVyTm9kZSA9PT0gdGFnKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICByZXR1cm4gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLWVtb3Rpb24nLCBvcHRpb25zLmtleSk7XG5cbiAgaWYgKG9wdGlvbnMubm9uY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgb3B0aW9ucy5ub25jZSk7XG4gIH1cblxuICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1zJywgJycpO1xuICByZXR1cm4gdGFnO1xufVxuXG52YXIgU3R5bGVTaGVldCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8vIFVzaW5nIE5vZGUgaW5zdGVhZCBvZiBIVE1MRWxlbWVudCBzaW5jZSBjb250YWluZXIgbWF5IGJlIGEgU2hhZG93Um9vdFxuICBmdW5jdGlvbiBTdHlsZVNoZWV0KG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5faW5zZXJ0VGFnID0gZnVuY3Rpb24gKHRhZykge1xuICAgICAgdmFyIGJlZm9yZTtcblxuICAgICAgaWYgKF90aGlzLnRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmIChfdGhpcy5pbnNlcnRpb25Qb2ludCkge1xuICAgICAgICAgIGJlZm9yZSA9IF90aGlzLmluc2VydGlvblBvaW50Lm5leHRTaWJsaW5nO1xuICAgICAgICB9IGVsc2UgaWYgKF90aGlzLnByZXBlbmQpIHtcbiAgICAgICAgICBiZWZvcmUgPSBfdGhpcy5jb250YWluZXIuZmlyc3RDaGlsZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBiZWZvcmUgPSBfdGhpcy5iZWZvcmU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJlZm9yZSA9IF90aGlzLnRhZ3NbX3RoaXMudGFncy5sZW5ndGggLSAxXS5uZXh0U2libGluZztcbiAgICAgIH1cblxuICAgICAgX3RoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZSh0YWcsIGJlZm9yZSk7XG5cbiAgICAgIF90aGlzLnRhZ3MucHVzaCh0YWcpO1xuICAgIH07XG5cbiAgICB0aGlzLmlzU3BlZWR5ID0gb3B0aW9ucy5zcGVlZHkgPT09IHVuZGVmaW5lZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgOiBvcHRpb25zLnNwZWVkeTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG4gICAgdGhpcy5ub25jZSA9IG9wdGlvbnMubm9uY2U7IC8vIGtleSBpcyB0aGUgdmFsdWUgb2YgdGhlIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGUsIGl0J3MgdXNlZCB0byBpZGVudGlmeSBkaWZmZXJlbnQgc2hlZXRzXG5cbiAgICB0aGlzLmtleSA9IG9wdGlvbnMua2V5O1xuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgdGhpcy5wcmVwZW5kID0gb3B0aW9ucy5wcmVwZW5kO1xuICAgIHRoaXMuaW5zZXJ0aW9uUG9pbnQgPSBvcHRpb25zLmluc2VydGlvblBvaW50O1xuICAgIHRoaXMuYmVmb3JlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdHlsZVNoZWV0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uaHlkcmF0ZSA9IGZ1bmN0aW9uIGh5ZHJhdGUobm9kZXMpIHtcbiAgICBub2Rlcy5mb3JFYWNoKHRoaXMuX2luc2VydFRhZyk7XG4gIH07XG5cbiAgX3Byb3RvLmluc2VydCA9IGZ1bmN0aW9uIGluc2VydChydWxlKSB7XG4gICAgLy8gdGhlIG1heCBsZW5ndGggaXMgaG93IG1hbnkgcnVsZXMgd2UgaGF2ZSBwZXIgc3R5bGUgdGFnLCBpdCdzIDY1MDAwIGluIHNwZWVkeSBtb2RlXG4gICAgLy8gaXQncyAxIGluIGRldiBiZWNhdXNlIHdlIGluc2VydCBzb3VyY2UgbWFwcyB0aGF0IG1hcCBhIHNpbmdsZSBydWxlIHRvIGEgbG9jYXRpb25cbiAgICAvLyBhbmQgeW91IGNhbiBvbmx5IGhhdmUgb25lIHNvdXJjZSBtYXAgcGVyIHN0eWxlIHRhZ1xuICAgIGlmICh0aGlzLmN0ciAlICh0aGlzLmlzU3BlZWR5ID8gNjUwMDAgOiAxKSA9PT0gMCkge1xuICAgICAgdGhpcy5faW5zZXJ0VGFnKGNyZWF0ZVN0eWxlRWxlbWVudCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGlzSW1wb3J0UnVsZSA9IHJ1bGUuY2hhckNvZGVBdCgwKSA9PT0gNjQgJiYgcnVsZS5jaGFyQ29kZUF0KDEpID09PSAxMDU7XG5cbiAgICAgIGlmIChpc0ltcG9ydFJ1bGUgJiYgdGhpcy5fYWxyZWFkeUluc2VydGVkT3JkZXJJbnNlbnNpdGl2ZVJ1bGUpIHtcbiAgICAgICAgLy8gdGhpcyB3b3VsZCBvbmx5IGNhdXNlIHByb2JsZW0gaW4gc3BlZWR5IG1vZGVcbiAgICAgICAgLy8gYnV0IHdlIGRvbid0IHdhbnQgZW5hYmxpbmcgc3BlZWR5IHRvIGFmZmVjdCB0aGUgb2JzZXJ2YWJsZSBiZWhhdmlvclxuICAgICAgICAvLyBzbyB3ZSByZXBvcnQgdGhpcyBlcnJvciBhdCBhbGwgdGltZXNcbiAgICAgICAgY29uc29sZS5lcnJvcihcIllvdSdyZSBhdHRlbXB0aW5nIHRvIGluc2VydCB0aGUgZm9sbG93aW5nIHJ1bGU6XFxuXCIgKyBydWxlICsgJ1xcblxcbmBAaW1wb3J0YCBydWxlcyBtdXN0IGJlIGJlZm9yZSBhbGwgb3RoZXIgdHlwZXMgb2YgcnVsZXMgaW4gYSBzdHlsZXNoZWV0IGJ1dCBvdGhlciBydWxlcyBoYXZlIGFscmVhZHkgYmVlbiBpbnNlcnRlZC4gUGxlYXNlIGVuc3VyZSB0aGF0IGBAaW1wb3J0YCBydWxlcyBhcmUgYmVmb3JlIGFsbCBvdGhlciBydWxlcy4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FscmVhZHlJbnNlcnRlZE9yZGVySW5zZW5zaXRpdmVSdWxlID0gdGhpcy5fYWxyZWFkeUluc2VydGVkT3JkZXJJbnNlbnNpdGl2ZVJ1bGUgfHwgIWlzSW1wb3J0UnVsZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1NwZWVkeSkge1xuICAgICAgdmFyIHNoZWV0ID0gc2hlZXRGb3JUYWcodGFnKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgdWx0cmFmYXN0IHZlcnNpb24sIHdvcmtzIGFjcm9zcyBicm93c2Vyc1xuICAgICAgICAvLyB0aGUgYmlnIGRyYXdiYWNrIGlzIHRoYXQgdGhlIGNzcyB3b24ndCBiZSBlZGl0YWJsZSBpbiBkZXZ0b29sc1xuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICEvOigtbW96LXBsYWNlaG9sZGVyfC1tb3otZm9jdXMtaW5uZXJ8LW1vei1mb2N1c3Jpbmd8LW1zLWlucHV0LXBsYWNlaG9sZGVyfC1tb3otcmVhZC13cml0ZXwtbW96LXJlYWQtb25seXwtbXMtY2xlYXIpey8udGVzdChydWxlKSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYSBwcm9ibGVtIGluc2VydGluZyB0aGUgZm9sbG93aW5nIHJ1bGU6IFxcXCJcIiArIHJ1bGUgKyBcIlxcXCJcIiwgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJ1bGUpKTtcbiAgICB9XG5cbiAgICB0aGlzLmN0cisrO1xuICB9O1xuXG4gIF9wcm90by5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICByZXR1cm4gdGFnLnBhcmVudE5vZGUgJiYgdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICB9KTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhpcy5fYWxyZWFkeUluc2VydGVkT3JkZXJJbnNlbnNpdGl2ZVJ1bGUgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFN0eWxlU2hlZXQ7XG59KCk7XG5cbmV4cG9ydCB7IFN0eWxlU2hlZXQgfTtcbiIsImV4cG9ydCB2YXIgTVMgPSAnLW1zLSdcbmV4cG9ydCB2YXIgTU9aID0gJy1tb3otJ1xuZXhwb3J0IHZhciBXRUJLSVQgPSAnLXdlYmtpdC0nXG5cbmV4cG9ydCB2YXIgQ09NTUVOVCA9ICdjb21tJ1xuZXhwb3J0IHZhciBSVUxFU0VUID0gJ3J1bGUnXG5leHBvcnQgdmFyIERFQ0xBUkFUSU9OID0gJ2RlY2wnXG5cbmV4cG9ydCB2YXIgUEFHRSA9ICdAcGFnZSdcbmV4cG9ydCB2YXIgTUVESUEgPSAnQG1lZGlhJ1xuZXhwb3J0IHZhciBJTVBPUlQgPSAnQGltcG9ydCdcbmV4cG9ydCB2YXIgQ0hBUlNFVCA9ICdAY2hhcnNldCdcbmV4cG9ydCB2YXIgVklFV1BPUlQgPSAnQHZpZXdwb3J0J1xuZXhwb3J0IHZhciBTVVBQT1JUUyA9ICdAc3VwcG9ydHMnXG5leHBvcnQgdmFyIERPQ1VNRU5UID0gJ0Bkb2N1bWVudCdcbmV4cG9ydCB2YXIgTkFNRVNQQUNFID0gJ0BuYW1lc3BhY2UnXG5leHBvcnQgdmFyIEtFWUZSQU1FUyA9ICdAa2V5ZnJhbWVzJ1xuZXhwb3J0IHZhciBGT05UX0ZBQ0UgPSAnQGZvbnQtZmFjZSdcbmV4cG9ydCB2YXIgQ09VTlRFUl9TVFlMRSA9ICdAY291bnRlci1zdHlsZSdcbmV4cG9ydCB2YXIgRk9OVF9GRUFUVVJFX1ZBTFVFUyA9ICdAZm9udC1mZWF0dXJlLXZhbHVlcydcbiIsIi8qKlxuICogQHBhcmFtIHtudW1iZXJ9XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCB2YXIgYWJzID0gTWF0aC5hYnNcblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn1cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IHZhciBmcm9tID0gU3RyaW5nLmZyb21DaGFyQ29kZVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgdmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ25cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc2ggKHZhbHVlLCBsZW5ndGgpIHtcblx0cmV0dXJuICgoKCgoKChsZW5ndGggPDwgMikgXiBjaGFyYXQodmFsdWUsIDApKSA8PCAyKSBeIGNoYXJhdCh2YWx1ZSwgMSkpIDw8IDIpIF4gY2hhcmF0KHZhbHVlLCAyKSkgPDwgMikgXiBjaGFyYXQodmFsdWUsIDMpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmltICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUudHJpbSgpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcGF0dGVyblxuICogQHJldHVybiB7c3RyaW5nP31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoICh2YWx1ZSwgcGF0dGVybikge1xuXHRyZXR1cm4gKHZhbHVlID0gcGF0dGVybi5leGVjKHZhbHVlKSkgPyB2YWx1ZVswXSA6IHZhbHVlXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwKX0gcGF0dGVyblxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VtZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlICh2YWx1ZSwgcGF0dGVybiwgcmVwbGFjZW1lbnQpIHtcblx0cmV0dXJuIHZhbHVlLnJlcGxhY2UocGF0dGVybiwgcmVwbGFjZW1lbnQpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VhcmNoXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmRleG9mICh2YWx1ZSwgc2VhcmNoKSB7XG5cdHJldHVybiB2YWx1ZS5pbmRleE9mKHNlYXJjaClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhcmF0ICh2YWx1ZSwgaW5kZXgpIHtcblx0cmV0dXJuIHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpIHwgMFxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGJlZ2luXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdHIgKHZhbHVlLCBiZWdpbiwgZW5kKSB7XG5cdHJldHVybiB2YWx1ZS5zbGljZShiZWdpbiwgZW5kKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RybGVuICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUubGVuZ3RoXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnlbXX0gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpemVvZiAodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlLmxlbmd0aFxufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHthbnlbXX0gYXJyYXlcbiAqIEByZXR1cm4ge2FueX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZCAodmFsdWUsIGFycmF5KSB7XG5cdHJldHVybiBhcnJheS5wdXNoKHZhbHVlKSwgdmFsdWVcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBhcnJheVxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUgKGFycmF5LCBjYWxsYmFjaykge1xuXHRyZXR1cm4gYXJyYXkubWFwKGNhbGxiYWNrKS5qb2luKCcnKVxufVxuIiwiaW1wb3J0IHtmcm9tLCB0cmltLCBjaGFyYXQsIHN0cmxlbiwgc3Vic3RyLCBhcHBlbmQsIGFzc2lnbn0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuXG5leHBvcnQgdmFyIGxpbmUgPSAxXG5leHBvcnQgdmFyIGNvbHVtbiA9IDFcbmV4cG9ydCB2YXIgbGVuZ3RoID0gMFxuZXhwb3J0IHZhciBwb3NpdGlvbiA9IDBcbmV4cG9ydCB2YXIgY2hhcmFjdGVyID0gMFxuZXhwb3J0IHZhciBjaGFyYWN0ZXJzID0gJydcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgbnVsbH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3QgfCBudWxsfSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge3N0cmluZ1tdIHwgc3RyaW5nfSBwcm9wc1xuICogQHBhcmFtIHtvYmplY3RbXSB8IHN0cmluZ30gY2hpbGRyZW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vZGUgKHZhbHVlLCByb290LCBwYXJlbnQsIHR5cGUsIHByb3BzLCBjaGlsZHJlbiwgbGVuZ3RoKSB7XG5cdHJldHVybiB7dmFsdWU6IHZhbHVlLCByb290OiByb290LCBwYXJlbnQ6IHBhcmVudCwgdHlwZTogdHlwZSwgcHJvcHM6IHByb3BzLCBjaGlsZHJlbjogY2hpbGRyZW4sIGxpbmU6IGxpbmUsIGNvbHVtbjogY29sdW1uLCBsZW5ndGg6IGxlbmd0aCwgcmV0dXJuOiAnJ31cbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5IChyb290LCBwcm9wcykge1xuXHRyZXR1cm4gYXNzaWduKG5vZGUoJycsIG51bGwsIG51bGwsICcnLCBudWxsLCBudWxsLCAwKSwgcm9vdCwge2xlbmd0aDogLXJvb3QubGVuZ3RofSwgcHJvcHMpXG59XG5cbi8qKlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhciAoKSB7XG5cdHJldHVybiBjaGFyYWN0ZXJcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmV2ICgpIHtcblx0Y2hhcmFjdGVyID0gcG9zaXRpb24gPiAwID8gY2hhcmF0KGNoYXJhY3RlcnMsIC0tcG9zaXRpb24pIDogMFxuXG5cdGlmIChjb2x1bW4tLSwgY2hhcmFjdGVyID09PSAxMClcblx0XHRjb2x1bW4gPSAxLCBsaW5lLS1cblxuXHRyZXR1cm4gY2hhcmFjdGVyXG59XG5cbi8qKlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dCAoKSB7XG5cdGNoYXJhY3RlciA9IHBvc2l0aW9uIDwgbGVuZ3RoID8gY2hhcmF0KGNoYXJhY3RlcnMsIHBvc2l0aW9uKyspIDogMFxuXG5cdGlmIChjb2x1bW4rKywgY2hhcmFjdGVyID09PSAxMClcblx0XHRjb2x1bW4gPSAxLCBsaW5lKytcblxuXHRyZXR1cm4gY2hhcmFjdGVyXG59XG5cbi8qKlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGVlayAoKSB7XG5cdHJldHVybiBjaGFyYXQoY2hhcmFjdGVycywgcG9zaXRpb24pXG59XG5cbi8qKlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FyZXQgKCkge1xuXHRyZXR1cm4gcG9zaXRpb25cbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gYmVnaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNsaWNlIChiZWdpbiwgZW5kKSB7XG5cdHJldHVybiBzdWJzdHIoY2hhcmFjdGVycywgYmVnaW4sIGVuZClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9rZW4gKHR5cGUpIHtcblx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Ly8gXFwwIFxcdCBcXG4gXFxyIFxccyB3aGl0ZXNwYWNlIHRva2VuXG5cdFx0Y2FzZSAwOiBjYXNlIDk6IGNhc2UgMTA6IGNhc2UgMTM6IGNhc2UgMzI6XG5cdFx0XHRyZXR1cm4gNVxuXHRcdC8vICEgKyAsIC8gPiBAIH4gaXNvbGF0ZSB0b2tlblxuXHRcdGNhc2UgMzM6IGNhc2UgNDM6IGNhc2UgNDQ6IGNhc2UgNDc6IGNhc2UgNjI6IGNhc2UgNjQ6IGNhc2UgMTI2OlxuXHRcdC8vIDsgeyB9IGJyZWFrcG9pbnQgdG9rZW5cblx0XHRjYXNlIDU5OiBjYXNlIDEyMzogY2FzZSAxMjU6XG5cdFx0XHRyZXR1cm4gNFxuXHRcdC8vIDogYWNjb21wYW5pZWQgdG9rZW5cblx0XHRjYXNlIDU4OlxuXHRcdFx0cmV0dXJuIDNcblx0XHQvLyBcIiAnICggWyBvcGVuaW5nIGRlbGltaXQgdG9rZW5cblx0XHRjYXNlIDM0OiBjYXNlIDM5OiBjYXNlIDQwOiBjYXNlIDkxOlxuXHRcdFx0cmV0dXJuIDJcblx0XHQvLyApIF0gY2xvc2luZyBkZWxpbWl0IHRva2VuXG5cdFx0Y2FzZSA0MTogY2FzZSA5Mzpcblx0XHRcdHJldHVybiAxXG5cdH1cblxuXHRyZXR1cm4gMFxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7YW55W119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbGxvYyAodmFsdWUpIHtcblx0cmV0dXJuIGxpbmUgPSBjb2x1bW4gPSAxLCBsZW5ndGggPSBzdHJsZW4oY2hhcmFjdGVycyA9IHZhbHVlKSwgcG9zaXRpb24gPSAwLCBbXVxufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHJldHVybiB7YW55fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVhbGxvYyAodmFsdWUpIHtcblx0cmV0dXJuIGNoYXJhY3RlcnMgPSAnJywgdmFsdWVcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsaW1pdCAodHlwZSkge1xuXHRyZXR1cm4gdHJpbShzbGljZShwb3NpdGlvbiAtIDEsIGRlbGltaXRlcih0eXBlID09PSA5MSA/IHR5cGUgKyAyIDogdHlwZSA9PT0gNDAgPyB0eXBlICsgMSA6IHR5cGUpKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5pemUgKHZhbHVlKSB7XG5cdHJldHVybiBkZWFsbG9jKHRva2VuaXplcihhbGxvYyh2YWx1ZSkpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aGl0ZXNwYWNlICh0eXBlKSB7XG5cdHdoaWxlIChjaGFyYWN0ZXIgPSBwZWVrKCkpXG5cdFx0aWYgKGNoYXJhY3RlciA8IDMzKVxuXHRcdFx0bmV4dCgpXG5cdFx0ZWxzZVxuXHRcdFx0YnJlYWtcblxuXHRyZXR1cm4gdG9rZW4odHlwZSkgPiAyIHx8IHRva2VuKGNoYXJhY3RlcikgPiAzID8gJycgOiAnICdcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBjaGlsZHJlblxuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZXIgKGNoaWxkcmVuKSB7XG5cdHdoaWxlIChuZXh0KCkpXG5cdFx0c3dpdGNoICh0b2tlbihjaGFyYWN0ZXIpKSB7XG5cdFx0XHRjYXNlIDA6IGFwcGVuZChpZGVudGlmaWVyKHBvc2l0aW9uIC0gMSksIGNoaWxkcmVuKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAyOiBhcHBlbmQoZGVsaW1pdChjaGFyYWN0ZXIpLCBjaGlsZHJlbilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGRlZmF1bHQ6IGFwcGVuZChmcm9tKGNoYXJhY3RlciksIGNoaWxkcmVuKVxuXHRcdH1cblxuXHRyZXR1cm4gY2hpbGRyZW5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBpbmcgKGluZGV4LCBjb3VudCkge1xuXHR3aGlsZSAoLS1jb3VudCAmJiBuZXh0KCkpXG5cdFx0Ly8gbm90IDAtOSBBLUYgYS1mXG5cdFx0aWYgKGNoYXJhY3RlciA8IDQ4IHx8IGNoYXJhY3RlciA+IDEwMiB8fCAoY2hhcmFjdGVyID4gNTcgJiYgY2hhcmFjdGVyIDwgNjUpIHx8IChjaGFyYWN0ZXIgPiA3MCAmJiBjaGFyYWN0ZXIgPCA5NykpXG5cdFx0XHRicmVha1xuXG5cdHJldHVybiBzbGljZShpbmRleCwgY2FyZXQoKSArIChjb3VudCA8IDYgJiYgcGVlaygpID09IDMyICYmIG5leHQoKSA9PSAzMikpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGltaXRlciAodHlwZSkge1xuXHR3aGlsZSAobmV4dCgpKVxuXHRcdHN3aXRjaCAoY2hhcmFjdGVyKSB7XG5cdFx0XHQvLyBdICkgXCIgJ1xuXHRcdFx0Y2FzZSB0eXBlOlxuXHRcdFx0XHRyZXR1cm4gcG9zaXRpb25cblx0XHRcdC8vIFwiICdcblx0XHRcdGNhc2UgMzQ6IGNhc2UgMzk6XG5cdFx0XHRcdGlmICh0eXBlICE9PSAzNCAmJiB0eXBlICE9PSAzOSlcblx0XHRcdFx0XHRkZWxpbWl0ZXIoY2hhcmFjdGVyKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gKFxuXHRcdFx0Y2FzZSA0MDpcblx0XHRcdFx0aWYgKHR5cGUgPT09IDQxKVxuXHRcdFx0XHRcdGRlbGltaXRlcih0eXBlKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gXFxcblx0XHRcdGNhc2UgOTI6XG5cdFx0XHRcdG5leHQoKVxuXHRcdFx0XHRicmVha1xuXHRcdH1cblxuXHRyZXR1cm4gcG9zaXRpb25cbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21tZW50ZXIgKHR5cGUsIGluZGV4KSB7XG5cdHdoaWxlIChuZXh0KCkpXG5cdFx0Ly8gLy9cblx0XHRpZiAodHlwZSArIGNoYXJhY3RlciA9PT0gNDcgKyAxMClcblx0XHRcdGJyZWFrXG5cdFx0Ly8gLypcblx0XHRlbHNlIGlmICh0eXBlICsgY2hhcmFjdGVyID09PSA0MiArIDQyICYmIHBlZWsoKSA9PT0gNDcpXG5cdFx0XHRicmVha1xuXG5cdHJldHVybiAnLyonICsgc2xpY2UoaW5kZXgsIHBvc2l0aW9uIC0gMSkgKyAnKicgKyBmcm9tKHR5cGUgPT09IDQ3ID8gdHlwZSA6IG5leHQoKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXIgKGluZGV4KSB7XG5cdHdoaWxlICghdG9rZW4ocGVlaygpKSlcblx0XHRuZXh0KClcblxuXHRyZXR1cm4gc2xpY2UoaW5kZXgsIHBvc2l0aW9uKVxufVxuIiwiaW1wb3J0IHtDT01NRU5ULCBSVUxFU0VULCBERUNMQVJBVElPTn0gZnJvbSAnLi9FbnVtLmpzJ1xuaW1wb3J0IHthYnMsIHRyaW0sIGZyb20sIHNpemVvZiwgc3RybGVuLCBzdWJzdHIsIGFwcGVuZCwgcmVwbGFjZSwgaW5kZXhvZn0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuaW1wb3J0IHtub2RlLCBjaGFyLCBwcmV2LCBuZXh0LCBwZWVrLCBjYXJldCwgYWxsb2MsIGRlYWxsb2MsIGRlbGltaXQsIHdoaXRlc3BhY2UsIGVzY2FwaW5nLCBpZGVudGlmaWVyLCBjb21tZW50ZXJ9IGZyb20gJy4vVG9rZW5pemVyLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7b2JqZWN0W119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlICh2YWx1ZSkge1xuXHRyZXR1cm4gZGVhbGxvYyhwYXJzZSgnJywgbnVsbCwgbnVsbCwgbnVsbCwgWycnXSwgdmFsdWUgPSBhbGxvYyh2YWx1ZSksIDAsIFswXSwgdmFsdWUpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBydWxlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBydWxlc1xuICogQHBhcmFtIHtzdHJpbmdbXX0gcnVsZXNldHNcbiAqIEBwYXJhbSB7bnVtYmVyW119IHBzZXVkb1xuICogQHBhcmFtIHtudW1iZXJbXX0gcG9pbnRzXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBkZWNsYXJhdGlvbnNcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlICh2YWx1ZSwgcm9vdCwgcGFyZW50LCBydWxlLCBydWxlcywgcnVsZXNldHMsIHBzZXVkbywgcG9pbnRzLCBkZWNsYXJhdGlvbnMpIHtcblx0dmFyIGluZGV4ID0gMFxuXHR2YXIgb2Zmc2V0ID0gMFxuXHR2YXIgbGVuZ3RoID0gcHNldWRvXG5cdHZhciBhdHJ1bGUgPSAwXG5cdHZhciBwcm9wZXJ0eSA9IDBcblx0dmFyIHByZXZpb3VzID0gMFxuXHR2YXIgdmFyaWFibGUgPSAxXG5cdHZhciBzY2FubmluZyA9IDFcblx0dmFyIGFtcGVyc2FuZCA9IDFcblx0dmFyIGNoYXJhY3RlciA9IDBcblx0dmFyIHR5cGUgPSAnJ1xuXHR2YXIgcHJvcHMgPSBydWxlc1xuXHR2YXIgY2hpbGRyZW4gPSBydWxlc2V0c1xuXHR2YXIgcmVmZXJlbmNlID0gcnVsZVxuXHR2YXIgY2hhcmFjdGVycyA9IHR5cGVcblxuXHR3aGlsZSAoc2Nhbm5pbmcpXG5cdFx0c3dpdGNoIChwcmV2aW91cyA9IGNoYXJhY3RlciwgY2hhcmFjdGVyID0gbmV4dCgpKSB7XG5cdFx0XHQvLyAoXG5cdFx0XHRjYXNlIDQwOlxuXHRcdFx0XHRpZiAocHJldmlvdXMgIT0gMTA4ICYmIGNoYXJhY3RlcnMuY2hhckNvZGVBdChsZW5ndGggLSAxKSA9PSA1OCkge1xuXHRcdFx0XHRcdGlmIChpbmRleG9mKGNoYXJhY3RlcnMgKz0gcmVwbGFjZShkZWxpbWl0KGNoYXJhY3RlciksICcmJywgJyZcXGYnKSwgJyZcXGYnKSAhPSAtMSlcblx0XHRcdFx0XHRcdGFtcGVyc2FuZCA9IC0xXG5cdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0fVxuXHRcdFx0Ly8gXCIgJyBbXG5cdFx0XHRjYXNlIDM0OiBjYXNlIDM5OiBjYXNlIDkxOlxuXHRcdFx0XHRjaGFyYWN0ZXJzICs9IGRlbGltaXQoY2hhcmFjdGVyKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gXFx0IFxcbiBcXHIgXFxzXG5cdFx0XHRjYXNlIDk6IGNhc2UgMTA6IGNhc2UgMTM6IGNhc2UgMzI6XG5cdFx0XHRcdGNoYXJhY3RlcnMgKz0gd2hpdGVzcGFjZShwcmV2aW91cylcblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIFxcXG5cdFx0XHRjYXNlIDkyOlxuXHRcdFx0XHRjaGFyYWN0ZXJzICs9IGVzY2FwaW5nKGNhcmV0KCkgLSAxLCA3KVxuXHRcdFx0XHRjb250aW51ZVxuXHRcdFx0Ly8gL1xuXHRcdFx0Y2FzZSA0Nzpcblx0XHRcdFx0c3dpdGNoIChwZWVrKCkpIHtcblx0XHRcdFx0XHRjYXNlIDQyOiBjYXNlIDQ3OlxuXHRcdFx0XHRcdFx0YXBwZW5kKGNvbW1lbnQoY29tbWVudGVyKG5leHQoKSwgY2FyZXQoKSksIHJvb3QsIHBhcmVudCksIGRlY2xhcmF0aW9ucylcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGNoYXJhY3RlcnMgKz0gJy8nXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIHtcblx0XHRcdGNhc2UgMTIzICogdmFyaWFibGU6XG5cdFx0XHRcdHBvaW50c1tpbmRleCsrXSA9IHN0cmxlbihjaGFyYWN0ZXJzKSAqIGFtcGVyc2FuZFxuXHRcdFx0Ly8gfSA7IFxcMFxuXHRcdFx0Y2FzZSAxMjUgKiB2YXJpYWJsZTogY2FzZSA1OTogY2FzZSAwOlxuXHRcdFx0XHRzd2l0Y2ggKGNoYXJhY3Rlcikge1xuXHRcdFx0XHRcdC8vIFxcMCB9XG5cdFx0XHRcdFx0Y2FzZSAwOiBjYXNlIDEyNTogc2Nhbm5pbmcgPSAwXG5cdFx0XHRcdFx0Ly8gO1xuXHRcdFx0XHRcdGNhc2UgNTkgKyBvZmZzZXQ6XG5cdFx0XHRcdFx0XHRpZiAocHJvcGVydHkgPiAwICYmIChzdHJsZW4oY2hhcmFjdGVycykgLSBsZW5ndGgpKVxuXHRcdFx0XHRcdFx0XHRhcHBlbmQocHJvcGVydHkgPiAzMiA/IGRlY2xhcmF0aW9uKGNoYXJhY3RlcnMgKyAnOycsIHJ1bGUsIHBhcmVudCwgbGVuZ3RoIC0gMSkgOiBkZWNsYXJhdGlvbihyZXBsYWNlKGNoYXJhY3RlcnMsICcgJywgJycpICsgJzsnLCBydWxlLCBwYXJlbnQsIGxlbmd0aCAtIDIpLCBkZWNsYXJhdGlvbnMpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vIEAgO1xuXHRcdFx0XHRcdGNhc2UgNTk6IGNoYXJhY3RlcnMgKz0gJzsnXG5cdFx0XHRcdFx0Ly8geyBydWxlL2F0LXJ1bGVcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0YXBwZW5kKHJlZmVyZW5jZSA9IHJ1bGVzZXQoY2hhcmFjdGVycywgcm9vdCwgcGFyZW50LCBpbmRleCwgb2Zmc2V0LCBydWxlcywgcG9pbnRzLCB0eXBlLCBwcm9wcyA9IFtdLCBjaGlsZHJlbiA9IFtdLCBsZW5ndGgpLCBydWxlc2V0cylcblxuXHRcdFx0XHRcdFx0aWYgKGNoYXJhY3RlciA9PT0gMTIzKVxuXHRcdFx0XHRcdFx0XHRpZiAob2Zmc2V0ID09PSAwKVxuXHRcdFx0XHRcdFx0XHRcdHBhcnNlKGNoYXJhY3RlcnMsIHJvb3QsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCBwcm9wcywgcnVsZXNldHMsIGxlbmd0aCwgcG9pbnRzLCBjaGlsZHJlbilcblx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAoYXRydWxlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBkIG0gc1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAxMDA6IGNhc2UgMTA5OiBjYXNlIDExNTpcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFyc2UodmFsdWUsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCBydWxlICYmIGFwcGVuZChydWxlc2V0KHZhbHVlLCByZWZlcmVuY2UsIHJlZmVyZW5jZSwgMCwgMCwgcnVsZXMsIHBvaW50cywgdHlwZSwgcnVsZXMsIHByb3BzID0gW10sIGxlbmd0aCksIGNoaWxkcmVuKSwgcnVsZXMsIGNoaWxkcmVuLCBsZW5ndGgsIHBvaW50cywgcnVsZSA/IHByb3BzIDogY2hpbGRyZW4pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXJzZShjaGFyYWN0ZXJzLCByZWZlcmVuY2UsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCBbJyddLCBjaGlsZHJlbiwgMCwgcG9pbnRzLCBjaGlsZHJlbilcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpbmRleCA9IG9mZnNldCA9IHByb3BlcnR5ID0gMCwgdmFyaWFibGUgPSBhbXBlcnNhbmQgPSAxLCB0eXBlID0gY2hhcmFjdGVycyA9ICcnLCBsZW5ndGggPSBwc2V1ZG9cblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIDpcblx0XHRcdGNhc2UgNTg6XG5cdFx0XHRcdGxlbmd0aCA9IDEgKyBzdHJsZW4oY2hhcmFjdGVycyksIHByb3BlcnR5ID0gcHJldmlvdXNcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGlmICh2YXJpYWJsZSA8IDEpXG5cdFx0XHRcdFx0aWYgKGNoYXJhY3RlciA9PSAxMjMpXG5cdFx0XHRcdFx0XHQtLXZhcmlhYmxlXG5cdFx0XHRcdFx0ZWxzZSBpZiAoY2hhcmFjdGVyID09IDEyNSAmJiB2YXJpYWJsZSsrID09IDAgJiYgcHJldigpID09IDEyNSlcblx0XHRcdFx0XHRcdGNvbnRpbnVlXG5cblx0XHRcdFx0c3dpdGNoIChjaGFyYWN0ZXJzICs9IGZyb20oY2hhcmFjdGVyKSwgY2hhcmFjdGVyICogdmFyaWFibGUpIHtcblx0XHRcdFx0XHQvLyAmXG5cdFx0XHRcdFx0Y2FzZSAzODpcblx0XHRcdFx0XHRcdGFtcGVyc2FuZCA9IG9mZnNldCA+IDAgPyAxIDogKGNoYXJhY3RlcnMgKz0gJ1xcZicsIC0xKVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyAsXG5cdFx0XHRcdFx0Y2FzZSA0NDpcblx0XHRcdFx0XHRcdHBvaW50c1tpbmRleCsrXSA9IChzdHJsZW4oY2hhcmFjdGVycykgLSAxKSAqIGFtcGVyc2FuZCwgYW1wZXJzYW5kID0gMVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyBAXG5cdFx0XHRcdFx0Y2FzZSA2NDpcblx0XHRcdFx0XHRcdC8vIC1cblx0XHRcdFx0XHRcdGlmIChwZWVrKCkgPT09IDQ1KVxuXHRcdFx0XHRcdFx0XHRjaGFyYWN0ZXJzICs9IGRlbGltaXQobmV4dCgpKVxuXG5cdFx0XHRcdFx0XHRhdHJ1bGUgPSBwZWVrKCksIG9mZnNldCA9IGxlbmd0aCA9IHN0cmxlbih0eXBlID0gY2hhcmFjdGVycyArPSBpZGVudGlmaWVyKGNhcmV0KCkpKSwgY2hhcmFjdGVyKytcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0Ly8gLVxuXHRcdFx0XHRcdGNhc2UgNDU6XG5cdFx0XHRcdFx0XHRpZiAocHJldmlvdXMgPT09IDQ1ICYmIHN0cmxlbihjaGFyYWN0ZXJzKSA9PSAyKVxuXHRcdFx0XHRcdFx0XHR2YXJpYWJsZSA9IDBcblx0XHRcdFx0fVxuXHRcdH1cblxuXHRyZXR1cm4gcnVsZXNldHNcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdD99IHBhcmVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBydWxlc1xuICogQHBhcmFtIHtudW1iZXJbXX0gcG9pbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtzdHJpbmdbXX0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nW119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydWxlc2V0ICh2YWx1ZSwgcm9vdCwgcGFyZW50LCBpbmRleCwgb2Zmc2V0LCBydWxlcywgcG9pbnRzLCB0eXBlLCBwcm9wcywgY2hpbGRyZW4sIGxlbmd0aCkge1xuXHR2YXIgcG9zdCA9IG9mZnNldCAtIDFcblx0dmFyIHJ1bGUgPSBvZmZzZXQgPT09IDAgPyBydWxlcyA6IFsnJ11cblx0dmFyIHNpemUgPSBzaXplb2YocnVsZSlcblxuXHRmb3IgKHZhciBpID0gMCwgaiA9IDAsIGsgPSAwOyBpIDwgaW5kZXg7ICsraSlcblx0XHRmb3IgKHZhciB4ID0gMCwgeSA9IHN1YnN0cih2YWx1ZSwgcG9zdCArIDEsIHBvc3QgPSBhYnMoaiA9IHBvaW50c1tpXSkpLCB6ID0gdmFsdWU7IHggPCBzaXplOyArK3gpXG5cdFx0XHRpZiAoeiA9IHRyaW0oaiA+IDAgPyBydWxlW3hdICsgJyAnICsgeSA6IHJlcGxhY2UoeSwgLyZcXGYvZywgcnVsZVt4XSkpKVxuXHRcdFx0XHRwcm9wc1trKytdID0gelxuXG5cdHJldHVybiBub2RlKHZhbHVlLCByb290LCBwYXJlbnQsIG9mZnNldCA9PT0gMCA/IFJVTEVTRVQgOiB0eXBlLCBwcm9wcywgY2hpbGRyZW4sIGxlbmd0aClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdD99IHBhcmVudFxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWVudCAodmFsdWUsIHJvb3QsIHBhcmVudCkge1xuXHRyZXR1cm4gbm9kZSh2YWx1ZSwgcm9vdCwgcGFyZW50LCBDT01NRU5ULCBmcm9tKGNoYXIoKSksIHN1YnN0cih2YWx1ZSwgMiwgLTIpLCAwKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNsYXJhdGlvbiAodmFsdWUsIHJvb3QsIHBhcmVudCwgbGVuZ3RoKSB7XG5cdHJldHVybiBub2RlKHZhbHVlLCByb290LCBwYXJlbnQsIERFQ0xBUkFUSU9OLCBzdWJzdHIodmFsdWUsIDAsIGxlbmd0aCksIHN1YnN0cih2YWx1ZSwgbGVuZ3RoICsgMSwgLTEpLCBsZW5ndGgpXG59XG4iLCJpbXBvcnQge01TLCBNT1osIFdFQktJVH0gZnJvbSAnLi9FbnVtLmpzJ1xuaW1wb3J0IHtoYXNoLCBjaGFyYXQsIHN0cmxlbiwgaW5kZXhvZiwgcmVwbGFjZX0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4ICh2YWx1ZSwgbGVuZ3RoKSB7XG5cdHN3aXRjaCAoaGFzaCh2YWx1ZSwgbGVuZ3RoKSkge1xuXHRcdC8vIGNvbG9yLWFkanVzdFxuXHRcdGNhc2UgNTEwMzpcblx0XHRcdHJldHVybiBXRUJLSVQgKyAncHJpbnQtJyArIHZhbHVlICsgdmFsdWVcblx0XHQvLyBhbmltYXRpb24sIGFuaW1hdGlvbi0oZGVsYXl8ZGlyZWN0aW9ufGR1cmF0aW9ufGZpbGwtbW9kZXxpdGVyYXRpb24tY291bnR8bmFtZXxwbGF5LXN0YXRlfHRpbWluZy1mdW5jdGlvbilcblx0XHRjYXNlIDU3Mzc6IGNhc2UgNDIwMTogY2FzZSAzMTc3OiBjYXNlIDM0MzM6IGNhc2UgMTY0MTogY2FzZSA0NDU3OiBjYXNlIDI5MjE6XG5cdFx0Ly8gdGV4dC1kZWNvcmF0aW9uLCBmaWx0ZXIsIGNsaXAtcGF0aCwgYmFja2ZhY2UtdmlzaWJpbGl0eSwgY29sdW1uLCBib3gtZGVjb3JhdGlvbi1icmVha1xuXHRcdGNhc2UgNTU3MjogY2FzZSA2MzU2OiBjYXNlIDU4NDQ6IGNhc2UgMzE5MTogY2FzZSA2NjQ1OiBjYXNlIDMwMDU6XG5cdFx0Ly8gbWFzaywgbWFzay1pbWFnZSwgbWFzay0obW9kZXxjbGlwfHNpemUpLCBtYXNrLShyZXBlYXR8b3JpZ2luKSwgbWFzay1wb3NpdGlvbiwgbWFzay1jb21wb3NpdGUsXG5cdFx0Y2FzZSA2MzkxOiBjYXNlIDU4Nzk6IGNhc2UgNTYyMzogY2FzZSA2MTM1OiBjYXNlIDQ1OTk6IGNhc2UgNDg1NTpcblx0XHQvLyBiYWNrZ3JvdW5kLWNsaXAsIGNvbHVtbnMsIGNvbHVtbi0oY291bnR8ZmlsbHxnYXB8cnVsZXxydWxlLWNvbG9yfHJ1bGUtc3R5bGV8cnVsZS13aWR0aHxzcGFufHdpZHRoKVxuXHRcdGNhc2UgNDIxNTogY2FzZSA2Mzg5OiBjYXNlIDUxMDk6IGNhc2UgNTM2NTogY2FzZSA1NjIxOiBjYXNlIDM4Mjk6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyB2YWx1ZVxuXHRcdC8vIGFwcGVhcmFuY2UsIHVzZXItc2VsZWN0LCB0cmFuc2Zvcm0sIGh5cGhlbnMsIHRleHQtc2l6ZS1hZGp1c3Rcblx0XHRjYXNlIDUzNDk6IGNhc2UgNDI0NjogY2FzZSA0ODEwOiBjYXNlIDY5Njg6IGNhc2UgMjc1Njpcblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1PWiArIHZhbHVlICsgTVMgKyB2YWx1ZSArIHZhbHVlXG5cdFx0Ly8gZmxleCwgZmxleC1kaXJlY3Rpb25cblx0XHRjYXNlIDY4Mjg6IGNhc2UgNDI2ODpcblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgdmFsdWUgKyB2YWx1ZVxuXHRcdC8vIG9yZGVyXG5cdFx0Y2FzZSA2MTY1OlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyAnZmxleC0nICsgdmFsdWUgKyB2YWx1ZVxuXHRcdC8vIGFsaWduLWl0ZW1zXG5cdFx0Y2FzZSA1MTg3OlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgcmVwbGFjZSh2YWx1ZSwgLyhcXHcrKS4rKDpbXl0rKS8sIFdFQktJVCArICdib3gtJDEkMicgKyBNUyArICdmbGV4LSQxJDInKSArIHZhbHVlXG5cdFx0Ly8gYWxpZ24tc2VsZlxuXHRcdGNhc2UgNTQ0Mzpcblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgJ2ZsZXgtaXRlbS0nICsgcmVwbGFjZSh2YWx1ZSwgL2ZsZXgtfC1zZWxmLywgJycpICsgdmFsdWVcblx0XHQvLyBhbGlnbi1jb250ZW50XG5cdFx0Y2FzZSA0Njc1OlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyAnZmxleC1saW5lLXBhY2snICsgcmVwbGFjZSh2YWx1ZSwgL2FsaWduLWNvbnRlbnR8ZmxleC18LXNlbGYvLCAnJykgKyB2YWx1ZVxuXHRcdC8vIGZsZXgtc2hyaW5rXG5cdFx0Y2FzZSA1NTQ4OlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAnc2hyaW5rJywgJ25lZ2F0aXZlJykgKyB2YWx1ZVxuXHRcdC8vIGZsZXgtYmFzaXNcblx0XHRjYXNlIDUyOTI6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsICdiYXNpcycsICdwcmVmZXJyZWQtc2l6ZScpICsgdmFsdWVcblx0XHQvLyBmbGV4LWdyb3dcblx0XHRjYXNlIDYwNjA6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgJ2JveC0nICsgcmVwbGFjZSh2YWx1ZSwgJy1ncm93JywgJycpICsgV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsICdncm93JywgJ3Bvc2l0aXZlJykgKyB2YWx1ZVxuXHRcdC8vIHRyYW5zaXRpb25cblx0XHRjYXNlIDQ1NTQ6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgcmVwbGFjZSh2YWx1ZSwgLyhbXi1dKSh0cmFuc2Zvcm0pL2csICckMScgKyBXRUJLSVQgKyAnJDInKSArIHZhbHVlXG5cdFx0Ly8gY3Vyc29yXG5cdFx0Y2FzZSA2MTg3OlxuXHRcdFx0cmV0dXJuIHJlcGxhY2UocmVwbGFjZShyZXBsYWNlKHZhbHVlLCAvKHpvb20tfGdyYWIpLywgV0VCS0lUICsgJyQxJyksIC8oaW1hZ2Utc2V0KS8sIFdFQktJVCArICckMScpLCB2YWx1ZSwgJycpICsgdmFsdWVcblx0XHQvLyBiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kLWltYWdlXG5cdFx0Y2FzZSA1NDk1OiBjYXNlIDM5NTk6XG5cdFx0XHRyZXR1cm4gcmVwbGFjZSh2YWx1ZSwgLyhpbWFnZS1zZXRcXChbXl0qKS8sIFdFQktJVCArICckMScgKyAnJGAkMScpXG5cdFx0Ly8ganVzdGlmeS1jb250ZW50XG5cdFx0Y2FzZSA0OTY4OlxuXHRcdFx0cmV0dXJuIHJlcGxhY2UocmVwbGFjZSh2YWx1ZSwgLyguKzopKGZsZXgtKT8oLiopLywgV0VCS0lUICsgJ2JveC1wYWNrOiQzJyArIE1TICsgJ2ZsZXgtcGFjazokMycpLCAvcy4rLWJbXjtdKy8sICdqdXN0aWZ5JykgKyBXRUJLSVQgKyB2YWx1ZSArIHZhbHVlXG5cdFx0Ly8gKG1hcmdpbnxwYWRkaW5nKS1pbmxpbmUtKHN0YXJ0fGVuZClcblx0XHRjYXNlIDQwOTU6IGNhc2UgMzU4MzogY2FzZSA0MDY4OiBjYXNlIDI1MzI6XG5cdFx0XHRyZXR1cm4gcmVwbGFjZSh2YWx1ZSwgLyguKyktaW5saW5lKC4rKS8sIFdFQktJVCArICckMSQyJykgKyB2YWx1ZVxuXHRcdC8vIChtaW58bWF4KT8od2lkdGh8aGVpZ2h0fGlubGluZS1zaXplfGJsb2NrLXNpemUpXG5cdFx0Y2FzZSA4MTE2OiBjYXNlIDcwNTk6IGNhc2UgNTc1MzogY2FzZSA1NTM1OlxuXHRcdGNhc2UgNTQ0NTogY2FzZSA1NzAxOiBjYXNlIDQ5MzM6IGNhc2UgNDY3Nzpcblx0XHRjYXNlIDU1MzM6IGNhc2UgNTc4OTogY2FzZSA1MDIxOiBjYXNlIDQ3NjU6XG5cdFx0XHQvLyBzdHJldGNoLCBtYXgtY29udGVudCwgbWluLWNvbnRlbnQsIGZpbGwtYXZhaWxhYmxlXG5cdFx0XHRpZiAoc3RybGVuKHZhbHVlKSAtIDEgLSBsZW5ndGggPiA2KVxuXHRcdFx0XHRzd2l0Y2ggKGNoYXJhdCh2YWx1ZSwgbGVuZ3RoICsgMSkpIHtcblx0XHRcdFx0XHQvLyAobSlheC1jb250ZW50LCAobSlpbi1jb250ZW50XG5cdFx0XHRcdFx0Y2FzZSAxMDk6XG5cdFx0XHRcdFx0XHQvLyAtXG5cdFx0XHRcdFx0XHRpZiAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyA0KSAhPT0gNDUpXG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0Ly8gKGYpaWxsLWF2YWlsYWJsZSwgKGYpaXQtY29udGVudFxuXHRcdFx0XHRcdGNhc2UgMTAyOlxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlcGxhY2UodmFsdWUsIC8oLis6KSguKyktKFteXSspLywgJyQxJyArIFdFQktJVCArICckMi0kMycgKyAnJDEnICsgTU9aICsgKGNoYXJhdCh2YWx1ZSwgbGVuZ3RoICsgMykgPT0gMTA4ID8gJyQzJyA6ICckMi0kMycpKSArIHZhbHVlXG5cdFx0XHRcdFx0Ly8gKHMpdHJldGNoXG5cdFx0XHRcdFx0Y2FzZSAxMTU6XG5cdFx0XHRcdFx0XHRyZXR1cm4gfmluZGV4b2YodmFsdWUsICdzdHJldGNoJykgPyBwcmVmaXgocmVwbGFjZSh2YWx1ZSwgJ3N0cmV0Y2gnLCAnZmlsbC1hdmFpbGFibGUnKSwgbGVuZ3RoKSArIHZhbHVlIDogdmFsdWVcblx0XHRcdFx0fVxuXHRcdFx0YnJlYWtcblx0XHQvLyBwb3NpdGlvbjogc3RpY2t5XG5cdFx0Y2FzZSA0OTQ5OlxuXHRcdFx0Ly8gKHMpdGlja3k/XG5cdFx0XHRpZiAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyAxKSAhPT0gMTE1KVxuXHRcdFx0XHRicmVha1xuXHRcdC8vIGRpc3BsYXk6IChmbGV4fGlubGluZS1mbGV4KVxuXHRcdGNhc2UgNjQ0NDpcblx0XHRcdHN3aXRjaCAoY2hhcmF0KHZhbHVlLCBzdHJsZW4odmFsdWUpIC0gMyAtICh+aW5kZXhvZih2YWx1ZSwgJyFpbXBvcnRhbnQnKSAmJiAxMCkpKSB7XG5cdFx0XHRcdC8vIHN0aWMoayl5XG5cdFx0XHRcdGNhc2UgMTA3OlxuXHRcdFx0XHRcdHJldHVybiByZXBsYWNlKHZhbHVlLCAnOicsICc6JyArIFdFQktJVCkgKyB2YWx1ZVxuXHRcdFx0XHQvLyAoaW5saW5lLSk/ZmwoZSl4XG5cdFx0XHRcdGNhc2UgMTAxOlxuXHRcdFx0XHRcdHJldHVybiByZXBsYWNlKHZhbHVlLCAvKC4rOikoW147IV0rKSg7fCEuKyk/LywgJyQxJyArIFdFQktJVCArIChjaGFyYXQodmFsdWUsIDE0KSA9PT0gNDUgPyAnaW5saW5lLScgOiAnJykgKyAnYm94JDMnICsgJyQxJyArIFdFQktJVCArICckMiQzJyArICckMScgKyBNUyArICckMmJveCQzJykgKyB2YWx1ZVxuXHRcdFx0fVxuXHRcdFx0YnJlYWtcblx0XHQvLyB3cml0aW5nLW1vZGVcblx0XHRjYXNlIDU5MzY6XG5cdFx0XHRzd2l0Y2ggKGNoYXJhdCh2YWx1ZSwgbGVuZ3RoICsgMTEpKSB7XG5cdFx0XHRcdC8vIHZlcnRpY2FsLWwocilcblx0XHRcdFx0Y2FzZSAxMTQ6XG5cdFx0XHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sICd0YicpICsgdmFsdWVcblx0XHRcdFx0Ly8gdmVydGljYWwtcihsKVxuXHRcdFx0XHRjYXNlIDEwODpcblx0XHRcdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsIC9bc3ZoXVxcdystW3RibHJdezJ9LywgJ3RiLXJsJykgKyB2YWx1ZVxuXHRcdFx0XHQvLyBob3Jpem9udGFsKC0pdGJcblx0XHRcdFx0Y2FzZSA0NTpcblx0XHRcdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsIC9bc3ZoXVxcdystW3RibHJdezJ9LywgJ2xyJykgKyB2YWx1ZVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHZhbHVlICsgdmFsdWVcblx0fVxuXG5cdHJldHVybiB2YWx1ZVxufVxuIiwiaW1wb3J0IHtJTVBPUlQsIENPTU1FTlQsIFJVTEVTRVQsIERFQ0xBUkFUSU9OLCBLRVlGUkFNRVN9IGZyb20gJy4vRW51bS5qcydcbmltcG9ydCB7c3RybGVuLCBzaXplb2Z9IGZyb20gJy4vVXRpbGl0eS5qcydcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdFtdfSBjaGlsZHJlblxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZSAoY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdHZhciBvdXRwdXQgPSAnJ1xuXHR2YXIgbGVuZ3RoID0gc2l6ZW9mKGNoaWxkcmVuKVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG5cdFx0b3V0cHV0ICs9IGNhbGxiYWNrKGNoaWxkcmVuW2ldLCBpLCBjaGlsZHJlbiwgY2FsbGJhY2spIHx8ICcnXG5cblx0cmV0dXJuIG91dHB1dFxufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5IChlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG5cdFx0Y2FzZSBJTVBPUlQ6IGNhc2UgREVDTEFSQVRJT046IHJldHVybiBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQucmV0dXJuIHx8IGVsZW1lbnQudmFsdWVcblx0XHRjYXNlIENPTU1FTlQ6IHJldHVybiAnJ1xuXHRcdGNhc2UgS0VZRlJBTUVTOiByZXR1cm4gZWxlbWVudC5yZXR1cm4gPSBlbGVtZW50LnZhbHVlICsgJ3snICsgc2VyaWFsaXplKGVsZW1lbnQuY2hpbGRyZW4sIGNhbGxiYWNrKSArICd9J1xuXHRcdGNhc2UgUlVMRVNFVDogZWxlbWVudC52YWx1ZSA9IGVsZW1lbnQucHJvcHMuam9pbignLCcpXG5cdH1cblxuXHRyZXR1cm4gc3RybGVuKGNoaWxkcmVuID0gc2VyaWFsaXplKGVsZW1lbnQuY2hpbGRyZW4sIGNhbGxiYWNrKSkgPyBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQudmFsdWUgKyAneycgKyBjaGlsZHJlbiArICd9JyA6ICcnXG59XG4iLCJpbXBvcnQge01TLCBNT1osIFdFQktJVCwgUlVMRVNFVCwgS0VZRlJBTUVTLCBERUNMQVJBVElPTn0gZnJvbSAnLi9FbnVtLmpzJ1xuaW1wb3J0IHttYXRjaCwgY2hhcmF0LCBzdWJzdHIsIHN0cmxlbiwgc2l6ZW9mLCByZXBsYWNlLCBjb21iaW5lfSBmcm9tICcuL1V0aWxpdHkuanMnXG5pbXBvcnQge2NvcHksIHRva2VuaXplfSBmcm9tICcuL1Rva2VuaXplci5qcydcbmltcG9ydCB7c2VyaWFsaXplfSBmcm9tICcuL1NlcmlhbGl6ZXIuanMnXG5pbXBvcnQge3ByZWZpeH0gZnJvbSAnLi9QcmVmaXhlci5qcydcblxuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uW119IGNvbGxlY3Rpb25cbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZSAoY29sbGVjdGlvbikge1xuXHR2YXIgbGVuZ3RoID0gc2l6ZW9mKGNvbGxlY3Rpb24pXG5cblx0cmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdFx0dmFyIG91dHB1dCA9ICcnXG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuXHRcdFx0b3V0cHV0ICs9IGNvbGxlY3Rpb25baV0oZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuLCBjYWxsYmFjaykgfHwgJydcblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzaGVldCAoY2FsbGJhY2spIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0aWYgKCFlbGVtZW50LnJvb3QpXG5cdFx0XHRpZiAoZWxlbWVudCA9IGVsZW1lbnQucmV0dXJuKVxuXHRcdFx0XHRjYWxsYmFjayhlbGVtZW50KVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtvYmplY3RbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhlciAoZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuLCBjYWxsYmFjaykge1xuXHRpZiAoZWxlbWVudC5sZW5ndGggPiAtMSlcblx0XHRpZiAoIWVsZW1lbnQucmV0dXJuKVxuXHRcdFx0c3dpdGNoIChlbGVtZW50LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBERUNMQVJBVElPTjogZWxlbWVudC5yZXR1cm4gPSBwcmVmaXgoZWxlbWVudC52YWx1ZSwgZWxlbWVudC5sZW5ndGgpXG5cdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0Y2FzZSBLRVlGUkFNRVM6XG5cdFx0XHRcdFx0cmV0dXJuIHNlcmlhbGl6ZShbY29weShlbGVtZW50LCB7dmFsdWU6IHJlcGxhY2UoZWxlbWVudC52YWx1ZSwgJ0AnLCAnQCcgKyBXRUJLSVQpfSldLCBjYWxsYmFjaylcblx0XHRcdFx0Y2FzZSBSVUxFU0VUOlxuXHRcdFx0XHRcdGlmIChlbGVtZW50Lmxlbmd0aClcblx0XHRcdFx0XHRcdHJldHVybiBjb21iaW5lKGVsZW1lbnQucHJvcHMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKG1hdGNoKHZhbHVlLCAvKDo6cGxhY1xcdyt8OnJlYWQtXFx3KykvKSkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIDpyZWFkLShvbmx5fHdyaXRlKVxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJzpyZWFkLW9ubHknOiBjYXNlICc6cmVhZC13cml0ZSc6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKFtjb3B5KGVsZW1lbnQsIHtwcm9wczogW3JlcGxhY2UodmFsdWUsIC86KHJlYWQtXFx3KykvLCAnOicgKyBNT1ogKyAnJDEnKV19KV0sIGNhbGxiYWNrKVxuXHRcdFx0XHRcdFx0XHRcdC8vIDpwbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJzo6cGxhY2Vob2xkZXInOlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlcmlhbGl6ZShbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvcHkoZWxlbWVudCwge3Byb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocGxhY1xcdyspLywgJzonICsgV0VCS0lUICsgJ2lucHV0LSQxJyldfSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvcHkoZWxlbWVudCwge3Byb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocGxhY1xcdyspLywgJzonICsgTU9aICsgJyQxJyldfSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvcHkoZWxlbWVudCwge3Byb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocGxhY1xcdyspLywgTVMgKyAnaW5wdXQtJDEnKV19KVxuXHRcdFx0XHRcdFx0XHRcdFx0XSwgY2FsbGJhY2spXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJydcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtvYmplY3RbXX0gY2hpbGRyZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5hbWVzcGFjZSAoZWxlbWVudCkge1xuXHRzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuXHRcdGNhc2UgUlVMRVNFVDpcblx0XHRcdGVsZW1lbnQucHJvcHMgPSBlbGVtZW50LnByb3BzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIGNvbWJpbmUodG9rZW5pemUodmFsdWUpLCBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBjaGlsZHJlbikge1xuXHRcdFx0XHRcdHN3aXRjaCAoY2hhcmF0KHZhbHVlLCAwKSkge1xuXHRcdFx0XHRcdFx0Ly8gXFxmXG5cdFx0XHRcdFx0XHRjYXNlIDEyOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc3Vic3RyKHZhbHVlLCAxLCBzdHJsZW4odmFsdWUpKVxuXHRcdFx0XHRcdFx0Ly8gXFwwICggKyA+IH5cblx0XHRcdFx0XHRcdGNhc2UgMDogY2FzZSA0MDogY2FzZSA0MzogY2FzZSA2MjogY2FzZSAxMjY6XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0XHRcdFx0Ly8gOlxuXHRcdFx0XHRcdFx0Y2FzZSA1ODpcblx0XHRcdFx0XHRcdFx0aWYgKGNoaWxkcmVuWysraW5kZXhdID09PSAnZ2xvYmFsJylcblx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbltpbmRleF0gPSAnJywgY2hpbGRyZW5bKytpbmRleF0gPSAnXFxmJyArIHN1YnN0cihjaGlsZHJlbltpbmRleF0sIGluZGV4ID0gMSwgLTEpXG5cdFx0XHRcdFx0XHQvLyBcXHNcblx0XHRcdFx0XHRcdGNhc2UgMzI6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbmRleCA9PT0gMSA/ICcnIDogdmFsdWVcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAoaW5kZXgpIHtcblx0XHRcdFx0XHRcdFx0XHRjYXNlIDA6IGVsZW1lbnQgPSB2YWx1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHNpemVvZihjaGlsZHJlbikgPiAxID8gJycgOiB2YWx1ZVxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgaW5kZXggPSBzaXplb2YoY2hpbGRyZW4pIC0gMTogY2FzZSAyOlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGluZGV4ID09PSAyID8gdmFsdWUgKyBlbGVtZW50ICsgZWxlbWVudCA6IHZhbHVlICsgZWxlbWVudFxuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWVcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH0pXG5cdH1cbn1cbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZTtcbiIsImltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCc7XG5pbXBvcnQgeyBkZWFsbG9jLCBhbGxvYywgbmV4dCwgdG9rZW4sIGZyb20sIHBlZWssIGRlbGltaXQsIHNsaWNlLCBwb3NpdGlvbiwgc3RyaW5naWZ5LCBDT01NRU5ULCBydWxlc2hlZXQsIG1pZGRsZXdhcmUsIHByZWZpeGVyLCBzZXJpYWxpemUsIGNvbXBpbGUgfSBmcm9tICdzdHlsaXMnO1xuaW1wb3J0ICdAZW1vdGlvbi93ZWFrLW1lbW9pemUnO1xuaW1wb3J0ICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIGxhc3QgPSBmdW5jdGlvbiBsYXN0KGFycikge1xuICByZXR1cm4gYXJyLmxlbmd0aCA/IGFyclthcnIubGVuZ3RoIC0gMV0gOiBudWxsO1xufTsgLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3RoeXN1bHRhbi9zdHlsaXMuanMvYmxvYi9lNjg0M2MzNzNlYmNiYmZhZGUyNWViY2MyM2Y1NDBlZDg1MDhkYTBhL3NyYy9Ub2tlbml6ZXIuanMjTDIzOS1MMjQ0XG5cblxudmFyIGlkZW50aWZpZXJXaXRoUG9pbnRUcmFja2luZyA9IGZ1bmN0aW9uIGlkZW50aWZpZXJXaXRoUG9pbnRUcmFja2luZyhiZWdpbiwgcG9pbnRzLCBpbmRleCkge1xuICB2YXIgcHJldmlvdXMgPSAwO1xuICB2YXIgY2hhcmFjdGVyID0gMDtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHByZXZpb3VzID0gY2hhcmFjdGVyO1xuICAgIGNoYXJhY3RlciA9IHBlZWsoKTsgLy8gJlxcZlxuXG4gICAgaWYgKHByZXZpb3VzID09PSAzOCAmJiBjaGFyYWN0ZXIgPT09IDEyKSB7XG4gICAgICBwb2ludHNbaW5kZXhdID0gMTtcbiAgICB9XG5cbiAgICBpZiAodG9rZW4oY2hhcmFjdGVyKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbmV4dCgpO1xuICB9XG5cbiAgcmV0dXJuIHNsaWNlKGJlZ2luLCBwb3NpdGlvbik7XG59O1xuXG52YXIgdG9SdWxlcyA9IGZ1bmN0aW9uIHRvUnVsZXMocGFyc2VkLCBwb2ludHMpIHtcbiAgLy8gcHJldGVuZCB3ZSd2ZSBzdGFydGVkIHdpdGggYSBjb21tYVxuICB2YXIgaW5kZXggPSAtMTtcbiAgdmFyIGNoYXJhY3RlciA9IDQ0O1xuXG4gIGRvIHtcbiAgICBzd2l0Y2ggKHRva2VuKGNoYXJhY3RlcikpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgLy8gJlxcZlxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSAzOCAmJiBwZWVrKCkgPT09IDEyKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBub3QgMTAwJSBjb3JyZWN0LCB3ZSBkb24ndCBhY2NvdW50IGZvciBsaXRlcmFsIHNlcXVlbmNlcyBoZXJlIC0gbGlrZSBmb3IgZXhhbXBsZSBxdW90ZWQgc3RyaW5nc1xuICAgICAgICAgIC8vIHN0eWxpcyBpbnNlcnRzIFxcZiBhZnRlciAmIHRvIGtub3cgd2hlbiAmIHdoZXJlIGl0IHNob3VsZCByZXBsYWNlIHRoaXMgc2VxdWVuY2Ugd2l0aCB0aGUgY29udGV4dCBzZWxlY3RvclxuICAgICAgICAgIC8vIGFuZCB3aGVuIGl0IHNob3VsZCBqdXN0IGNvbmNhdGVuYXRlIHRoZSBvdXRlciBhbmQgaW5uZXIgc2VsZWN0b3JzXG4gICAgICAgICAgLy8gaXQncyB2ZXJ5IHVubGlrZWx5IGZvciB0aGlzIHNlcXVlbmNlIHRvIGFjdHVhbGx5IGFwcGVhciBpbiBhIGRpZmZlcmVudCBjb250ZXh0LCBzbyB3ZSBqdXN0IGxldmVyYWdlIHRoaXMgZmFjdCBoZXJlXG4gICAgICAgICAgcG9pbnRzW2luZGV4XSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJzZWRbaW5kZXhdICs9IGlkZW50aWZpZXJXaXRoUG9pbnRUcmFja2luZyhwb3NpdGlvbiAtIDEsIHBvaW50cywgaW5kZXgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICBwYXJzZWRbaW5kZXhdICs9IGRlbGltaXQoY2hhcmFjdGVyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNDpcbiAgICAgICAgLy8gY29tbWFcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gNDQpIHtcbiAgICAgICAgICAvLyBjb2xvblxuICAgICAgICAgIHBhcnNlZFsrK2luZGV4XSA9IHBlZWsoKSA9PT0gNTggPyAnJlxcZicgOiAnJztcbiAgICAgICAgICBwb2ludHNbaW5kZXhdID0gcGFyc2VkW2luZGV4XS5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgLy8gZmFsbHRocm91Z2hcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcGFyc2VkW2luZGV4XSArPSBmcm9tKGNoYXJhY3Rlcik7XG4gICAgfVxuICB9IHdoaWxlIChjaGFyYWN0ZXIgPSBuZXh0KCkpO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG52YXIgZ2V0UnVsZXMgPSBmdW5jdGlvbiBnZXRSdWxlcyh2YWx1ZSwgcG9pbnRzKSB7XG4gIHJldHVybiBkZWFsbG9jKHRvUnVsZXMoYWxsb2ModmFsdWUpLCBwb2ludHMpKTtcbn07IC8vIFdlYWtTZXQgd291bGQgYmUgbW9yZSBhcHByb3ByaWF0ZSwgYnV0IG9ubHkgV2Vha01hcCBpcyBzdXBwb3J0ZWQgaW4gSUUxMVxuXG5cbnZhciBmaXhlZEVsZW1lbnRzID0gLyogI19fUFVSRV9fICovbmV3IFdlYWtNYXAoKTtcbnZhciBjb21wYXQgPSBmdW5jdGlvbiBjb21wYXQoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC50eXBlICE9PSAncnVsZScgfHwgIWVsZW1lbnQucGFyZW50IHx8IC8vIHBvc2l0aXZlIC5sZW5ndGggaW5kaWNhdGVzIHRoYXQgdGhpcyBydWxlIGNvbnRhaW5zIHBzZXVkb1xuICAvLyBuZWdhdGl2ZSAubGVuZ3RoIGluZGljYXRlcyB0aGF0IHRoaXMgcnVsZSBoYXMgYmVlbiBhbHJlYWR5IHByZWZpeGVkXG4gIGVsZW1lbnQubGVuZ3RoIDwgMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IGVsZW1lbnQudmFsdWUsXG4gICAgICBwYXJlbnQgPSBlbGVtZW50LnBhcmVudDtcbiAgdmFyIGlzSW1wbGljaXRSdWxlID0gZWxlbWVudC5jb2x1bW4gPT09IHBhcmVudC5jb2x1bW4gJiYgZWxlbWVudC5saW5lID09PSBwYXJlbnQubGluZTtcblxuICB3aGlsZSAocGFyZW50LnR5cGUgIT09ICdydWxlJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgaWYgKCFwYXJlbnQpIHJldHVybjtcbiAgfSAvLyBzaG9ydC1jaXJjdWl0IGZvciB0aGUgc2ltcGxlc3QgY2FzZVxuXG5cbiAgaWYgKGVsZW1lbnQucHJvcHMubGVuZ3RoID09PSAxICYmIHZhbHVlLmNoYXJDb2RlQXQoMCkgIT09IDU4XG4gIC8qIGNvbG9uICovXG4gICYmICFmaXhlZEVsZW1lbnRzLmdldChwYXJlbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIGlmIHRoaXMgaXMgYW4gaW1wbGljaXRseSBpbnNlcnRlZCBydWxlICh0aGUgb25lIGVhZ2VybHkgaW5zZXJ0ZWQgYXQgdGhlIGVhY2ggbmV3IG5lc3RlZCBsZXZlbClcbiAgLy8gdGhlbiB0aGUgcHJvcHMgaGFzIGFscmVhZHkgYmVlbiBtYW5pcHVsYXRlZCBiZWZvcmVoYW5kIGFzIHRoZXkgdGhhdCBhcnJheSBpcyBzaGFyZWQgYmV0d2VlbiBpdCBhbmQgaXRzIFwicnVsZSBwYXJlbnRcIlxuXG5cbiAgaWYgKGlzSW1wbGljaXRSdWxlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZml4ZWRFbGVtZW50cy5zZXQoZWxlbWVudCwgdHJ1ZSk7XG4gIHZhciBwb2ludHMgPSBbXTtcbiAgdmFyIHJ1bGVzID0gZ2V0UnVsZXModmFsdWUsIHBvaW50cyk7XG4gIHZhciBwYXJlbnRSdWxlcyA9IHBhcmVudC5wcm9wcztcblxuICBmb3IgKHZhciBpID0gMCwgayA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFyZW50UnVsZXMubGVuZ3RoOyBqKyssIGsrKykge1xuICAgICAgZWxlbWVudC5wcm9wc1trXSA9IHBvaW50c1tpXSA/IHJ1bGVzW2ldLnJlcGxhY2UoLyZcXGYvZywgcGFyZW50UnVsZXNbal0pIDogcGFyZW50UnVsZXNbal0gKyBcIiBcIiArIHJ1bGVzW2ldO1xuICAgIH1cbiAgfVxufTtcbnZhciByZW1vdmVMYWJlbCA9IGZ1bmN0aW9uIHJlbW92ZUxhYmVsKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2RlY2wnKSB7XG4gICAgdmFyIHZhbHVlID0gZWxlbWVudC52YWx1ZTtcblxuICAgIGlmICggLy8gY2hhcmNvZGUgZm9yIGxcbiAgICB2YWx1ZS5jaGFyQ29kZUF0KDApID09PSAxMDggJiYgLy8gY2hhcmNvZGUgZm9yIGJcbiAgICB2YWx1ZS5jaGFyQ29kZUF0KDIpID09PSA5OCkge1xuICAgICAgLy8gdGhpcyBpZ25vcmVzIGxhYmVsXG4gICAgICBlbGVtZW50W1wicmV0dXJuXCJdID0gJyc7XG4gICAgICBlbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG59O1xudmFyIGlnbm9yZUZsYWcgPSAnZW1vdGlvbi1kaXNhYmxlLXNlcnZlci1yZW5kZXJpbmctdW5zYWZlLXNlbGVjdG9yLXdhcm5pbmctcGxlYXNlLWRvLW5vdC11c2UtdGhpcy10aGUtd2FybmluZy1leGlzdHMtZm9yLWEtcmVhc29uJztcblxudmFyIGlzSWdub3JpbmdDb21tZW50ID0gZnVuY3Rpb24gaXNJZ25vcmluZ0NvbW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gISFlbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gJ2NvbW0nICYmIGVsZW1lbnQuY2hpbGRyZW4uaW5kZXhPZihpZ25vcmVGbGFnKSA+IC0xO1xufTtcblxudmFyIGNyZWF0ZVVuc2FmZVNlbGVjdG9yc0FsYXJtID0gZnVuY3Rpb24gY3JlYXRlVW5zYWZlU2VsZWN0b3JzQWxhcm0oY2FjaGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4pIHtcbiAgICBpZiAoZWxlbWVudC50eXBlICE9PSAncnVsZScpIHJldHVybjtcbiAgICB2YXIgdW5zYWZlUHNldWRvQ2xhc3NlcyA9IGVsZW1lbnQudmFsdWUubWF0Y2goLyg6Zmlyc3R8Om50aHw6bnRoLWxhc3QpLWNoaWxkL2cpO1xuXG4gICAgaWYgKHVuc2FmZVBzZXVkb0NsYXNzZXMgJiYgY2FjaGUuY29tcGF0ICE9PSB0cnVlKSB7XG4gICAgICB2YXIgcHJldkVsZW1lbnQgPSBpbmRleCA+IDAgPyBjaGlsZHJlbltpbmRleCAtIDFdIDogbnVsbDtcblxuICAgICAgaWYgKHByZXZFbGVtZW50ICYmIGlzSWdub3JpbmdDb21tZW50KGxhc3QocHJldkVsZW1lbnQuY2hpbGRyZW4pKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVuc2FmZVBzZXVkb0NsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAodW5zYWZlUHNldWRvQ2xhc3MpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZSBwc2V1ZG8gY2xhc3MgXFxcIlwiICsgdW5zYWZlUHNldWRvQ2xhc3MgKyBcIlxcXCIgaXMgcG90ZW50aWFsbHkgdW5zYWZlIHdoZW4gZG9pbmcgc2VydmVyLXNpZGUgcmVuZGVyaW5nLiBUcnkgY2hhbmdpbmcgaXQgdG8gXFxcIlwiICsgdW5zYWZlUHNldWRvQ2xhc3Muc3BsaXQoJy1jaGlsZCcpWzBdICsgXCItb2YtdHlwZVxcXCIuXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcblxudmFyIGlzSW1wb3J0UnVsZSA9IGZ1bmN0aW9uIGlzSW1wb3J0UnVsZShlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LnR5cGUuY2hhckNvZGVBdCgxKSA9PT0gMTA1ICYmIGVsZW1lbnQudHlwZS5jaGFyQ29kZUF0KDApID09PSA2NDtcbn07XG5cbnZhciBpc1ByZXBlbmRlZFdpdGhSZWd1bGFyUnVsZXMgPSBmdW5jdGlvbiBpc1ByZXBlbmRlZFdpdGhSZWd1bGFyUnVsZXMoaW5kZXgsIGNoaWxkcmVuKSB7XG4gIGZvciAodmFyIGkgPSBpbmRleCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKCFpc0ltcG9ydFJ1bGUoY2hpbGRyZW5baV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59OyAvLyB1c2UgdGhpcyB0byByZW1vdmUgaW5jb3JyZWN0IGVsZW1lbnRzIGZyb20gZnVydGhlciBwcm9jZXNzaW5nXG4vLyBzbyB0aGV5IGRvbid0IGdldCBoYW5kZWQgdG8gdGhlIGBzaGVldGAgKG9yIGFueXRoaW5nIGVsc2UpXG4vLyBhcyB0aGF0IGNvdWxkIHBvdGVudGlhbGx5IGxlYWQgdG8gYWRkaXRpb25hbCBsb2dzIHdoaWNoIGluIHR1cm4gY291bGQgYmUgb3ZlcmhlbG1pbmcgdG8gdGhlIHVzZXJcblxuXG52YXIgbnVsbGlmeUVsZW1lbnQgPSBmdW5jdGlvbiBudWxsaWZ5RWxlbWVudChlbGVtZW50KSB7XG4gIGVsZW1lbnQudHlwZSA9ICcnO1xuICBlbGVtZW50LnZhbHVlID0gJyc7XG4gIGVsZW1lbnRbXCJyZXR1cm5cIl0gPSAnJztcbiAgZWxlbWVudC5jaGlsZHJlbiA9ICcnO1xuICBlbGVtZW50LnByb3BzID0gJyc7XG59O1xuXG52YXIgaW5jb3JyZWN0SW1wb3J0QWxhcm0gPSBmdW5jdGlvbiBpbmNvcnJlY3RJbXBvcnRBbGFybShlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4pIHtcbiAgaWYgKCFpc0ltcG9ydFJ1bGUoZWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZWxlbWVudC5wYXJlbnQpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiYEBpbXBvcnRgIHJ1bGVzIGNhbid0IGJlIG5lc3RlZCBpbnNpZGUgb3RoZXIgcnVsZXMuIFBsZWFzZSBtb3ZlIGl0IHRvIHRoZSB0b3AgbGV2ZWwgYW5kIHB1dCBpdCBiZWZvcmUgcmVndWxhciBydWxlcy4gS2VlcCBpbiBtaW5kIHRoYXQgdGhleSBjYW4gb25seSBiZSB1c2VkIHdpdGhpbiBnbG9iYWwgc3R5bGVzLlwiKTtcbiAgICBudWxsaWZ5RWxlbWVudChlbGVtZW50KTtcbiAgfSBlbHNlIGlmIChpc1ByZXBlbmRlZFdpdGhSZWd1bGFyUnVsZXMoaW5kZXgsIGNoaWxkcmVuKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJgQGltcG9ydGAgcnVsZXMgY2FuJ3QgYmUgYWZ0ZXIgb3RoZXIgcnVsZXMuIFBsZWFzZSBwdXQgeW91ciBgQGltcG9ydGAgcnVsZXMgYmVmb3JlIHlvdXIgb3RoZXIgcnVsZXMuXCIpO1xuICAgIG51bGxpZnlFbGVtZW50KGVsZW1lbnQpO1xuICB9XG59O1xuXG52YXIgZGVmYXVsdFN0eWxpc1BsdWdpbnMgPSBbcHJlZml4ZXJdO1xuXG52YXIgY3JlYXRlQ2FjaGUgPSBmdW5jdGlvbiBjcmVhdGVDYWNoZShvcHRpb25zKSB7XG4gIHZhciBrZXkgPSBvcHRpb25zLmtleTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAha2V5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGhhdmUgdG8gY29uZmlndXJlIGBrZXlgIGZvciB5b3VyIGNhY2hlLiBQbGVhc2UgbWFrZSBzdXJlIGl0J3MgdW5pcXVlIChhbmQgbm90IGVxdWFsIHRvICdjc3MnKSBhcyBpdCdzIHVzZWQgZm9yIGxpbmtpbmcgc3R5bGVzIHRvIHlvdXIgY2FjaGUuXFxuXCIgKyBcIklmIG11bHRpcGxlIGNhY2hlcyBzaGFyZSB0aGUgc2FtZSBrZXkgdGhleSBtaWdodCBcXFwiZmlnaHRcXFwiIGZvciBlYWNoIG90aGVyJ3Mgc3R5bGUgZWxlbWVudHMuXCIpO1xuICB9XG5cbiAgaWYgKCBrZXkgPT09ICdjc3MnKSB7XG4gICAgdmFyIHNzclN0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtkYXRhLWVtb3Rpb25dOm5vdChbZGF0YS1zXSlcIik7IC8vIGdldCBTU1JlZCBzdHlsZXMgb3V0IG9mIHRoZSB3YXkgb2YgUmVhY3QncyBoeWRyYXRpb25cbiAgICAvLyBkb2N1bWVudC5oZWFkIGlzIGEgc2FmZSBwbGFjZSB0byBtb3ZlIHRoZW0gdG8odGhvdWdoIG5vdGUgZG9jdW1lbnQuaGVhZCBpcyBub3QgbmVjZXNzYXJpbHkgdGhlIGxhc3QgcGxhY2UgdGhleSB3aWxsIGJlKVxuICAgIC8vIG5vdGUgdGhpcyB2ZXJ5IHZlcnkgaW50ZW50aW9uYWxseSB0YXJnZXRzIGFsbCBzdHlsZSBlbGVtZW50cyByZWdhcmRsZXNzIG9mIHRoZSBrZXkgdG8gZW5zdXJlXG4gICAgLy8gdGhhdCBjcmVhdGluZyBhIGNhY2hlIHdvcmtzIGluc2lkZSBvZiByZW5kZXIgb2YgYSBSZWFjdCBjb21wb25lbnRcblxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc3NyU3R5bGVzLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgLy8gd2Ugd2FudCB0byBvbmx5IG1vdmUgZWxlbWVudHMgd2hpY2ggaGF2ZSBhIHNwYWNlIGluIHRoZSBkYXRhLWVtb3Rpb24gYXR0cmlidXRlIHZhbHVlXG4gICAgICAvLyBiZWNhdXNlIHRoYXQgaW5kaWNhdGVzIHRoYXQgaXQgaXMgYW4gRW1vdGlvbiAxMSBzZXJ2ZXItc2lkZSByZW5kZXJlZCBzdHlsZSBlbGVtZW50c1xuICAgICAgLy8gd2hpbGUgd2Ugd2lsbCBhbHJlYWR5IGlnbm9yZSBFbW90aW9uIDExIGNsaWVudC1zaWRlIGluc2VydGVkIHN0eWxlcyBiZWNhdXNlIG9mIHRoZSA6bm90KFtkYXRhLXNdKSBwYXJ0IGluIHRoZSBzZWxlY3RvclxuICAgICAgLy8gRW1vdGlvbiAxMCBjbGllbnQtc2lkZSBpbnNlcnRlZCBzdHlsZXMgZGlkIG5vdCBoYXZlIGRhdGEtcyAoYnV0IGltcG9ydGFudGx5IGRpZCBub3QgaGF2ZSBhIHNwYWNlIGluIHRoZWlyIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGVzKVxuICAgICAgLy8gc28gY2hlY2tpbmcgZm9yIHRoZSBzcGFjZSBlbnN1cmVzIHRoYXQgbG9hZGluZyBFbW90aW9uIDExIGFmdGVyIEVtb3Rpb24gMTAgaGFzIGluc2VydGVkIHNvbWUgc3R5bGVzXG4gICAgICAvLyB3aWxsIG5vdCByZXN1bHQgaW4gdGhlIEVtb3Rpb24gMTAgc3R5bGVzIGJlaW5nIGRlc3Ryb3llZFxuICAgICAgdmFyIGRhdGFFbW90aW9uQXR0cmlidXRlID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZW1vdGlvbicpO1xuXG4gICAgICBpZiAoZGF0YUVtb3Rpb25BdHRyaWJ1dGUuaW5kZXhPZignICcpID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcycsICcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBzdHlsaXNQbHVnaW5zID0gb3B0aW9ucy5zdHlsaXNQbHVnaW5zIHx8IGRlZmF1bHRTdHlsaXNQbHVnaW5zO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIGlmICgvW15hLXotXS8udGVzdChrZXkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbW90aW9uIGtleSBtdXN0IG9ubHkgY29udGFpbiBsb3dlciBjYXNlIGFscGhhYmV0aWNhbCBjaGFyYWN0ZXJzIGFuZCAtIGJ1dCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIHBhc3NlZFwiKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaW5zZXJ0ZWQgPSB7fTtcbiAgdmFyIGNvbnRhaW5lcjtcbiAgdmFyIG5vZGVzVG9IeWRyYXRlID0gW107XG5cbiAge1xuICAgIGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyIHx8IGRvY3VtZW50LmhlYWQ7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCggLy8gdGhpcyBtZWFucyB3ZSB3aWxsIGlnbm9yZSBlbGVtZW50cyB3aGljaCBkb24ndCBoYXZlIGEgc3BhY2UgaW4gdGhlbSB3aGljaFxuICAgIC8vIG1lYW5zIHRoYXQgdGhlIHN0eWxlIGVsZW1lbnRzIHdlJ3JlIGxvb2tpbmcgYXQgYXJlIG9ubHkgRW1vdGlvbiAxMSBzZXJ2ZXItcmVuZGVyZWQgc3R5bGUgZWxlbWVudHNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVbZGF0YS1lbW90aW9uXj1cXFwiXCIgKyBrZXkgKyBcIiBcXFwiXVwiKSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBhdHRyaWIgPSBub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtZW1vdGlvblwiKS5zcGxpdCgnICcpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXR0cmliLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGluc2VydGVkW2F0dHJpYltpXV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBub2Rlc1RvSHlkcmF0ZS5wdXNoKG5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIF9pbnNlcnQ7XG5cbiAgdmFyIG9tbmlwcmVzZW50UGx1Z2lucyA9IFtjb21wYXQsIHJlbW92ZUxhYmVsXTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIG9tbmlwcmVzZW50UGx1Z2lucy5wdXNoKGNyZWF0ZVVuc2FmZVNlbGVjdG9yc0FsYXJtKHtcbiAgICAgIGdldCBjb21wYXQoKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5jb21wYXQ7XG4gICAgICB9XG5cbiAgICB9KSwgaW5jb3JyZWN0SW1wb3J0QWxhcm0pO1xuICB9XG5cbiAge1xuICAgIHZhciBjdXJyZW50U2hlZXQ7XG4gICAgdmFyIGZpbmFsaXppbmdQbHVnaW5zID0gW3N0cmluZ2lmeSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICBpZiAoIWVsZW1lbnQucm9vdCkge1xuICAgICAgICBpZiAoZWxlbWVudFtcInJldHVyblwiXSkge1xuICAgICAgICAgIGN1cnJlbnRTaGVldC5pbnNlcnQoZWxlbWVudFtcInJldHVyblwiXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC52YWx1ZSAmJiBlbGVtZW50LnR5cGUgIT09IENPTU1FTlQpIHtcbiAgICAgICAgICAvLyBpbnNlcnQgZW1wdHkgcnVsZSBpbiBub24tcHJvZHVjdGlvbiBlbnZpcm9ubWVudHNcbiAgICAgICAgICAvLyBzbyBAZW1vdGlvbi9qZXN0IGNhbiBncmFiIGBrZXlgIGZyb20gdGhlIChKUylET00gZm9yIGNhY2hlcyB3aXRob3V0IGFueSBydWxlcyBpbnNlcnRlZCB5ZXRcbiAgICAgICAgICBjdXJyZW50U2hlZXQuaW5zZXJ0KGVsZW1lbnQudmFsdWUgKyBcInt9XCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSA6IHJ1bGVzaGVldChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgY3VycmVudFNoZWV0Lmluc2VydChydWxlKTtcbiAgICB9KV07XG4gICAgdmFyIHNlcmlhbGl6ZXIgPSBtaWRkbGV3YXJlKG9tbmlwcmVzZW50UGx1Z2lucy5jb25jYXQoc3R5bGlzUGx1Z2lucywgZmluYWxpemluZ1BsdWdpbnMpKTtcblxuICAgIHZhciBzdHlsaXMgPSBmdW5jdGlvbiBzdHlsaXMoc3R5bGVzKSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXplKGNvbXBpbGUoc3R5bGVzKSwgc2VyaWFsaXplcik7XG4gICAgfTtcblxuICAgIF9pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQoc2VsZWN0b3IsIHNlcmlhbGl6ZWQsIHNoZWV0LCBzaG91bGRDYWNoZSkge1xuICAgICAgY3VycmVudFNoZWV0ID0gc2hlZXQ7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHNlcmlhbGl6ZWQubWFwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3VycmVudFNoZWV0ID0ge1xuICAgICAgICAgIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0KHJ1bGUpIHtcbiAgICAgICAgICAgIHNoZWV0Lmluc2VydChydWxlICsgc2VyaWFsaXplZC5tYXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgc3R5bGlzKHNlbGVjdG9yID8gc2VsZWN0b3IgKyBcIntcIiArIHNlcmlhbGl6ZWQuc3R5bGVzICsgXCJ9XCIgOiBzZXJpYWxpemVkLnN0eWxlcyk7XG5cbiAgICAgIGlmIChzaG91bGRDYWNoZSkge1xuICAgICAgICBjYWNoZS5pbnNlcnRlZFtzZXJpYWxpemVkLm5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0ge1xuICAgIGtleToga2V5LFxuICAgIHNoZWV0OiBuZXcgU3R5bGVTaGVldCh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAgICBzcGVlZHk6IG9wdGlvbnMuc3BlZWR5LFxuICAgICAgcHJlcGVuZDogb3B0aW9ucy5wcmVwZW5kLFxuICAgICAgaW5zZXJ0aW9uUG9pbnQ6IG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnRcbiAgICB9KSxcbiAgICBub25jZTogb3B0aW9ucy5ub25jZSxcbiAgICBpbnNlcnRlZDogaW5zZXJ0ZWQsXG4gICAgcmVnaXN0ZXJlZDoge30sXG4gICAgaW5zZXJ0OiBfaW5zZXJ0XG4gIH07XG4gIGNhY2hlLnNoZWV0Lmh5ZHJhdGUobm9kZXNUb0h5ZHJhdGUpO1xuICByZXR1cm4gY2FjaGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYWNoZTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7dmFyIGI9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixjPWI/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMsZD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYsZT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyxmPWI/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LGc9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsaD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSxrPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAsbD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5hc3luY19tb2RlXCIpOjYwMTExLG09Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29uY3VycmVudF9tb2RlXCIpOjYwMTExLG49Yj9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIscD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyxxPWI/XG5TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTo2MDEyMCxyPWI/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6NjAxMTUsdD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOjYwMTE2LHY9Yj9TeW1ib2wuZm9yKFwicmVhY3QuYmxvY2tcIik6NjAxMjEsdz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mdW5kYW1lbnRhbFwiKTo2MDExNyx4PWI/U3ltYm9sLmZvcihcInJlYWN0LnJlc3BvbmRlclwiKTo2MDExOCx5PWI/U3ltYm9sLmZvcihcInJlYWN0LnNjb3BlXCIpOjYwMTE5O1xuZnVuY3Rpb24geihhKXtpZihcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hKXt2YXIgdT1hLiQkdHlwZW9mO3N3aXRjaCh1KXtjYXNlIGM6c3dpdGNoKGE9YS50eXBlLGEpe2Nhc2UgbDpjYXNlIG06Y2FzZSBlOmNhc2UgZzpjYXNlIGY6Y2FzZSBwOnJldHVybiBhO2RlZmF1bHQ6c3dpdGNoKGE9YSYmYS4kJHR5cGVvZixhKXtjYXNlIGs6Y2FzZSBuOmNhc2UgdDpjYXNlIHI6Y2FzZSBoOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuIHV9fWNhc2UgZDpyZXR1cm4gdX19fWZ1bmN0aW9uIEEoYSl7cmV0dXJuIHooYSk9PT1tfWV4cG9ydHMuQXN5bmNNb2RlPWw7ZXhwb3J0cy5Db25jdXJyZW50TW9kZT1tO2V4cG9ydHMuQ29udGV4dENvbnN1bWVyPWs7ZXhwb3J0cy5Db250ZXh0UHJvdmlkZXI9aDtleHBvcnRzLkVsZW1lbnQ9YztleHBvcnRzLkZvcndhcmRSZWY9bjtleHBvcnRzLkZyYWdtZW50PWU7ZXhwb3J0cy5MYXp5PXQ7ZXhwb3J0cy5NZW1vPXI7ZXhwb3J0cy5Qb3J0YWw9ZDtcbmV4cG9ydHMuUHJvZmlsZXI9ZztleHBvcnRzLlN0cmljdE1vZGU9ZjtleHBvcnRzLlN1c3BlbnNlPXA7ZXhwb3J0cy5pc0FzeW5jTW9kZT1mdW5jdGlvbihhKXtyZXR1cm4gQShhKXx8eihhKT09PWx9O2V4cG9ydHMuaXNDb25jdXJyZW50TW9kZT1BO2V4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1rfTtleHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09aH07ZXhwb3J0cy5pc0VsZW1lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PWN9O2V4cG9ydHMuaXNGb3J3YXJkUmVmPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09bn07ZXhwb3J0cy5pc0ZyYWdtZW50PWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09ZX07ZXhwb3J0cy5pc0xhenk9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT10fTtcbmV4cG9ydHMuaXNNZW1vPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09cn07ZXhwb3J0cy5pc1BvcnRhbD1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWR9O2V4cG9ydHMuaXNQcm9maWxlcj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWd9O2V4cG9ydHMuaXNTdHJpY3RNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09Zn07ZXhwb3J0cy5pc1N1c3BlbnNlPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09cH07XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZT1mdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhfHxhPT09ZXx8YT09PW18fGE9PT1nfHxhPT09Znx8YT09PXB8fGE9PT1xfHxcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiYoYS4kJHR5cGVvZj09PXR8fGEuJCR0eXBlb2Y9PT1yfHxhLiQkdHlwZW9mPT09aHx8YS4kJHR5cGVvZj09PWt8fGEuJCR0eXBlb2Y9PT1ufHxhLiQkdHlwZW9mPT09d3x8YS4kJHR5cGVvZj09PXh8fGEuJCR0eXBlb2Y9PT15fHxhLiQkdHlwZW9mPT09dil9O2V4cG9ydHMudHlwZU9mPXo7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwidmFyIGlzQnJvd3NlciA9IFwib2JqZWN0XCIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhyZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBjbGFzc05hbWVzKSB7XG4gIHZhciByYXdDbGFzc05hbWUgPSAnJztcbiAgY2xhc3NOYW1lcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGlmIChyZWdpc3RlcmVkW2NsYXNzTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVnaXN0ZXJlZFN0eWxlcy5wdXNoKHJlZ2lzdGVyZWRbY2xhc3NOYW1lXSArIFwiO1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmF3Q2xhc3NOYW1lICs9IGNsYXNzTmFtZSArIFwiIFwiO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByYXdDbGFzc05hbWU7XG59XG52YXIgcmVnaXN0ZXJTdHlsZXMgPSBmdW5jdGlvbiByZWdpc3RlclN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuXG4gIGlmICggLy8gd2Ugb25seSBuZWVkIHRvIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSByZWdpc3RlcmVkIGNhY2hlIGlmIHRoZVxuICAvLyBjbGFzcyBuYW1lIGNvdWxkIGJlIHVzZWQgZnVydGhlciBkb3duXG4gIC8vIHRoZSB0cmVlIGJ1dCBpZiBpdCdzIGEgc3RyaW5nIHRhZywgd2Uga25vdyBpdCB3b24ndFxuICAvLyBzbyB3ZSBkb24ndCBoYXZlIHRvIGFkZCBpdCB0byByZWdpc3RlcmVkIGNhY2hlLlxuICAvLyB0aGlzIGltcHJvdmVzIG1lbW9yeSB1c2FnZSBzaW5jZSB3ZSBjYW4gYXZvaWQgc3RvcmluZyB0aGUgd2hvbGUgc3R5bGUgc3RyaW5nXG4gIChpc1N0cmluZ1RhZyA9PT0gZmFsc2UgfHwgLy8gd2UgbmVlZCB0byBhbHdheXMgc3RvcmUgaXQgaWYgd2UncmUgaW4gY29tcGF0IG1vZGUgYW5kXG4gIC8vIGluIG5vZGUgc2luY2UgZW1vdGlvbi1zZXJ2ZXIgcmVsaWVzIG9uIHdoZXRoZXIgYSBzdHlsZSBpcyBpblxuICAvLyB0aGUgcmVnaXN0ZXJlZCBjYWNoZSB0byBrbm93IHdoZXRoZXIgYSBzdHlsZSBpcyBnbG9iYWwgb3Igbm90XG4gIC8vIGFsc28sIG5vdGUgdGhhdCB0aGlzIGNoZWNrIHdpbGwgYmUgZGVhZCBjb2RlIGVsaW1pbmF0ZWQgaW4gdGhlIGJyb3dzZXJcbiAgaXNCcm93c2VyID09PSBmYWxzZSApICYmIGNhY2hlLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FjaGUucmVnaXN0ZXJlZFtjbGFzc05hbWVdID0gc2VyaWFsaXplZC5zdHlsZXM7XG4gIH1cbn07XG52YXIgaW5zZXJ0U3R5bGVzID0gZnVuY3Rpb24gaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBpc1N0cmluZ1RhZykge1xuICByZWdpc3RlclN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpO1xuICB2YXIgY2xhc3NOYW1lID0gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG5cbiAgaWYgKGNhY2hlLmluc2VydGVkW3NlcmlhbGl6ZWQubmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjdXJyZW50ID0gc2VyaWFsaXplZDtcblxuICAgIGRvIHtcbiAgICAgIHZhciBtYXliZVN0eWxlcyA9IGNhY2hlLmluc2VydChzZXJpYWxpemVkID09PSBjdXJyZW50ID8gXCIuXCIgKyBjbGFzc05hbWUgOiAnJywgY3VycmVudCwgY2FjaGUuc2hlZXQsIHRydWUpO1xuXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH0gd2hpbGUgKGN1cnJlbnQgIT09IHVuZGVmaW5lZCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIGluc2VydFN0eWxlcywgcmVnaXN0ZXJTdHlsZXMgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZ2FyeWNvdXJ0L211cm11cmhhc2gtanNcbi8vIFBvcnRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hYXBwbGVieS9zbWhhc2hlci9ibG9iLzYxYTA1MzBmMjgyNzdmMmU4NTBiZmMzOTYwMGNlNjFkMDJiNTE4ZGUvc3JjL011cm11ckhhc2gyLmNwcCNMMzctTDg2XG5mdW5jdGlvbiBtdXJtdXIyKHN0cikge1xuICAvLyAnbScgYW5kICdyJyBhcmUgbWl4aW5nIGNvbnN0YW50cyBnZW5lcmF0ZWQgb2ZmbGluZS5cbiAgLy8gVGhleSdyZSBub3QgcmVhbGx5ICdtYWdpYycsIHRoZXkganVzdCBoYXBwZW4gdG8gd29yayB3ZWxsLlxuICAvLyBjb25zdCBtID0gMHg1YmQxZTk5NTtcbiAgLy8gY29uc3QgciA9IDI0O1xuICAvLyBJbml0aWFsaXplIHRoZSBoYXNoXG4gIHZhciBoID0gMDsgLy8gTWl4IDQgYnl0ZXMgYXQgYSB0aW1lIGludG8gdGhlIGhhc2hcblxuICB2YXIgayxcbiAgICAgIGkgPSAwLFxuICAgICAgbGVuID0gc3RyLmxlbmd0aDtcblxuICBmb3IgKDsgbGVuID49IDQ7ICsraSwgbGVuIC09IDQpIHtcbiAgICBrID0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmIHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCA4IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAxNiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMjQ7XG4gICAgayA9XG4gICAgLyogTWF0aC5pbXVsKGssIG0pOiAqL1xuICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGsgPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gICAgayBePVxuICAgIC8qIGsgPj4+IHI6ICovXG4gICAgayA+Pj4gMjQ7XG4gICAgaCA9XG4gICAgLyogTWF0aC5pbXVsKGssIG0pOiAqL1xuICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGsgPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNikgXlxuICAgIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICB9IC8vIEhhbmRsZSB0aGUgbGFzdCBmZXcgYnl0ZXMgb2YgdGhlIGlucHV0IGFycmF5XG5cblxuICBzd2l0Y2ggKGxlbikge1xuICAgIGNhc2UgMzpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAyKSAmIDB4ZmYpIDw8IDE2O1xuXG4gICAgY2FzZSAyOlxuICAgICAgaCBePSAoc3RyLmNoYXJDb2RlQXQoaSArIDEpICYgMHhmZikgPDwgODtcblxuICAgIGNhc2UgMTpcbiAgICAgIGggXj0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmO1xuICAgICAgaCA9XG4gICAgICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gICAgICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICB9IC8vIERvIGEgZmV3IGZpbmFsIG1peGVzIG9mIHRoZSBoYXNoIHRvIGVuc3VyZSB0aGUgbGFzdCBmZXdcbiAgLy8gYnl0ZXMgYXJlIHdlbGwtaW5jb3Jwb3JhdGVkLlxuXG5cbiAgaCBePSBoID4+PiAxMztcbiAgaCA9XG4gIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgcmV0dXJuICgoaCBeIGggPj4+IDE1KSA+Pj4gMCkudG9TdHJpbmcoMzYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtdXJtdXIyO1xuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRsZXNzS2V5cztcbiIsImltcG9ydCBoYXNoU3RyaW5nIGZyb20gJ0BlbW90aW9uL2hhc2gnO1xuaW1wb3J0IHVuaXRsZXNzIGZyb20gJ0BlbW90aW9uL3VuaXRsZXNzJztcbmltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IgPSBcIllvdSBoYXZlIGlsbGVnYWwgZXNjYXBlIHNlcXVlbmNlIGluIHlvdXIgdGVtcGxhdGUgbGl0ZXJhbCwgbW9zdCBsaWtlbHkgaW5zaWRlIGNvbnRlbnQncyBwcm9wZXJ0eSB2YWx1ZS5cXG5CZWNhdXNlIHlvdSB3cml0ZSB5b3VyIENTUyBpbnNpZGUgYSBKYXZhU2NyaXB0IHN0cmluZyB5b3UgYWN0dWFsbHkgaGF2ZSB0byBkbyBkb3VibGUgZXNjYXBpbmcsIHNvIGZvciBleGFtcGxlIFxcXCJjb250ZW50OiAnXFxcXDAwZDcnO1xcXCIgc2hvdWxkIGJlY29tZSBcXFwiY29udGVudDogJ1xcXFxcXFxcMDBkNyc7XFxcIi5cXG5Zb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGlzIGhlcmU6XFxuaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvVGVtcGxhdGVfbGl0ZXJhbHMjRVMyMDE4X3JldmlzaW9uX29mX2lsbGVnYWxfZXNjYXBlX3NlcXVlbmNlc1wiO1xudmFyIFVOREVGSU5FRF9BU19PQkpFQ1RfS0VZX0VSUk9SID0gXCJZb3UgaGF2ZSBwYXNzZWQgaW4gZmFsc3kgdmFsdWUgYXMgc3R5bGUgb2JqZWN0J3Mga2V5IChjYW4gaGFwcGVuIHdoZW4gaW4gZXhhbXBsZSB5b3UgcGFzcyB1bmV4cG9ydGVkIGNvbXBvbmVudCBhcyBjb21wdXRlZCBrZXkpLlwiO1xudmFyIGh5cGhlbmF0ZVJlZ2V4ID0gL1tBLVpdfF5tcy9nO1xudmFyIGFuaW1hdGlvblJlZ2V4ID0gL19FTU9fKFteX10rPylfKFteXSo/KV9FTU9fL2c7XG5cbnZhciBpc0N1c3RvbVByb3BlcnR5ID0gZnVuY3Rpb24gaXNDdXN0b21Qcm9wZXJ0eShwcm9wZXJ0eSkge1xuICByZXR1cm4gcHJvcGVydHkuY2hhckNvZGVBdCgxKSA9PT0gNDU7XG59O1xuXG52YXIgaXNQcm9jZXNzYWJsZVZhbHVlID0gZnVuY3Rpb24gaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nO1xufTtcblxudmFyIHByb2Nlc3NTdHlsZU5hbWUgPSAvKiAjX19QVVJFX18gKi9tZW1vaXplKGZ1bmN0aW9uIChzdHlsZU5hbWUpIHtcbiAgcmV0dXJuIGlzQ3VzdG9tUHJvcGVydHkoc3R5bGVOYW1lKSA/IHN0eWxlTmFtZSA6IHN0eWxlTmFtZS5yZXBsYWNlKGh5cGhlbmF0ZVJlZ2V4LCAnLSQmJykudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG52YXIgcHJvY2Vzc1N0eWxlVmFsdWUgPSBmdW5jdGlvbiBwcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKSB7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAnYW5pbWF0aW9uJzpcbiAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcbiAgICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShhbmltYXRpb25SZWdleCwgZnVuY3Rpb24gKG1hdGNoLCBwMSwgcDIpIHtcbiAgICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgICAgbmFtZTogcDEsXG4gICAgICAgICAgICAgIHN0eWxlczogcDIsXG4gICAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBwMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgaWYgKHVuaXRsZXNzW2tleV0gIT09IDEgJiYgIWlzQ3VzdG9tUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlICE9PSAwKSB7XG4gICAgcmV0dXJuIHZhbHVlICsgJ3B4JztcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBjb250ZW50VmFsdWVQYXR0ZXJuID0gLyh2YXJ8YXR0cnxjb3VudGVycz98dXJsfCgoKHJlcGVhdGluZy0pPyhsaW5lYXJ8cmFkaWFsKSl8Y29uaWMpLWdyYWRpZW50KVxcKHwobm8tKT8ob3BlbnxjbG9zZSktcXVvdGUvO1xuICB2YXIgY29udGVudFZhbHVlcyA9IFsnbm9ybWFsJywgJ25vbmUnLCAnaW5pdGlhbCcsICdpbmhlcml0JywgJ3Vuc2V0J107XG4gIHZhciBvbGRQcm9jZXNzU3R5bGVWYWx1ZSA9IHByb2Nlc3NTdHlsZVZhbHVlO1xuICB2YXIgbXNQYXR0ZXJuID0gL14tbXMtLztcbiAgdmFyIGh5cGhlblBhdHRlcm4gPSAvLSguKS9nO1xuICB2YXIgaHlwaGVuYXRlZENhY2hlID0ge307XG5cbiAgcHJvY2Vzc1N0eWxlVmFsdWUgPSBmdW5jdGlvbiBwcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyB8fCBjb250ZW50VmFsdWVzLmluZGV4T2YodmFsdWUpID09PSAtMSAmJiAhY29udGVudFZhbHVlUGF0dGVybi50ZXN0KHZhbHVlKSAmJiAodmFsdWUuY2hhckF0KDApICE9PSB2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoIC0gMSkgfHwgdmFsdWUuY2hhckF0KDApICE9PSAnXCInICYmIHZhbHVlLmNoYXJBdCgwKSAhPT0gXCInXCIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBzZWVtIHRvIGJlIHVzaW5nIGEgdmFsdWUgZm9yICdjb250ZW50JyB3aXRob3V0IHF1b3RlcywgdHJ5IHJlcGxhY2luZyBpdCB3aXRoIGBjb250ZW50OiAnXFxcIlwiICsgdmFsdWUgKyBcIlxcXCInYFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJvY2Vzc2VkID0gb2xkUHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSk7XG5cbiAgICBpZiAocHJvY2Vzc2VkICE9PSAnJyAmJiAhaXNDdXN0b21Qcm9wZXJ0eShrZXkpICYmIGtleS5pbmRleE9mKCctJykgIT09IC0xICYmIGh5cGhlbmF0ZWRDYWNoZVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGh5cGhlbmF0ZWRDYWNoZVtrZXldID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVc2luZyBrZWJhYi1jYXNlIGZvciBjc3MgcHJvcGVydGllcyBpbiBvYmplY3RzIGlzIG5vdCBzdXBwb3J0ZWQuIERpZCB5b3UgbWVhbiBcIiArIGtleS5yZXBsYWNlKG1zUGF0dGVybiwgJ21zLScpLnJlcGxhY2UoaHlwaGVuUGF0dGVybiwgZnVuY3Rpb24gKHN0ciwgX2NoYXIpIHtcbiAgICAgICAgcmV0dXJuIF9jaGFyLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KSArIFwiP1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2Vzc2VkO1xuICB9O1xufVxuXG52YXIgbm9Db21wb25lbnRTZWxlY3Rvck1lc3NhZ2UgPSAnQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggJyArICdAZW1vdGlvbi9iYWJlbC1wbHVnaW4sIHRoZSBzd2MgRW1vdGlvbiBwbHVnaW4sIG9yIGFub3RoZXIgRW1vdGlvbi1hd2FyZSAnICsgJ2NvbXBpbGVyIHRyYW5zZm9ybS4nO1xuXG5mdW5jdGlvbiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uKSB7XG4gIGlmIChpbnRlcnBvbGF0aW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAoaW50ZXJwb2xhdGlvbi5fX2Vtb3Rpb25fc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpbnRlcnBvbGF0aW9uLnRvU3RyaW5nKCkgPT09ICdOT19DT01QT05FTlRfU0VMRUNUT1InKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3Iobm9Db21wb25lbnRTZWxlY3Rvck1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnBvbGF0aW9uO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlb2YgaW50ZXJwb2xhdGlvbikge1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAge1xuICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbi5hbmltID09PSAxKSB7XG4gICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgbmFtZTogaW50ZXJwb2xhdGlvbi5uYW1lLFxuICAgICAgICAgICAgc3R5bGVzOiBpbnRlcnBvbGF0aW9uLnN0eWxlcyxcbiAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGludGVycG9sYXRpb24ubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBpbnRlcnBvbGF0aW9uLm5leHQ7XG5cbiAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBub3QgdGhlIG1vc3QgZWZmaWNpZW50IHRoaW5nIGV2ZXIgYnV0IHRoaXMgaXMgYSBwcmV0dHkgcmFyZSBjYXNlXG4gICAgICAgICAgICAvLyBhbmQgdGhlcmUgd2lsbCBiZSB2ZXJ5IGZldyBpdGVyYXRpb25zIG9mIHRoaXMgZ2VuZXJhbGx5XG4gICAgICAgICAgICB3aGlsZSAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuZXh0Lm5hbWUsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBuZXh0LnN0eWxlcyxcbiAgICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgbmV4dCA9IG5leHQubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGVzID0gaW50ZXJwb2xhdGlvbi5zdHlsZXMgKyBcIjtcIjtcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGludGVycG9sYXRpb24ubWFwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0eWxlcyArPSBpbnRlcnBvbGF0aW9uLm1hcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGludGVycG9sYXRpb24pO1xuICAgICAgfVxuXG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAge1xuICAgICAgICBpZiAobWVyZ2VkUHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBwcmV2aW91c0N1cnNvciA9IGN1cnNvcjtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gaW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcyk7XG4gICAgICAgICAgY3Vyc29yID0gcHJldmlvdXNDdXJzb3I7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Z1bmN0aW9ucyB0aGF0IGFyZSBpbnRlcnBvbGF0ZWQgaW4gY3NzIGNhbGxzIHdpbGwgYmUgc3RyaW5naWZpZWQuXFxuJyArICdJZiB5b3Ugd2FudCB0byBoYXZlIGEgY3NzIGNhbGwgYmFzZWQgb24gcHJvcHMsIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGNzcyBjYWxsIGxpa2UgdGhpc1xcbicgKyAnbGV0IGR5bmFtaWNTdHlsZSA9IChwcm9wcykgPT4gY3NzYGNvbG9yOiAke3Byb3BzLmNvbG9yfWBcXG4nICsgJ0l0IGNhbiBiZSBjYWxsZWQgZGlyZWN0bHkgd2l0aCBwcm9wcyBvciBpbnRlcnBvbGF0ZWQgaW4gYSBzdHlsZWQgY2FsbCBsaWtlIHRoaXNcXG4nICsgXCJsZXQgU29tZUNvbXBvbmVudCA9IHN0eWxlZCgnZGl2JylgJHtkeW5hbWljU3R5bGV9YFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciBtYXRjaGVkID0gW107XG4gICAgICAgIHZhciByZXBsYWNlZCA9IGludGVycG9sYXRpb24ucmVwbGFjZShhbmltYXRpb25SZWdleCwgZnVuY3Rpb24gKG1hdGNoLCBwMSwgcDIpIHtcbiAgICAgICAgICB2YXIgZmFrZVZhck5hbWUgPSBcImFuaW1hdGlvblwiICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgICAgbWF0Y2hlZC5wdXNoKFwiY29uc3QgXCIgKyBmYWtlVmFyTmFtZSArIFwiID0ga2V5ZnJhbWVzYFwiICsgcDIucmVwbGFjZSgvXkBrZXlmcmFtZXMgYW5pbWF0aW9uLVxcdysvLCAnJykgKyBcImBcIik7XG4gICAgICAgICAgcmV0dXJuIFwiJHtcIiArIGZha2VWYXJOYW1lICsgXCJ9XCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVkLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2BrZXlmcmFtZXNgIG91dHB1dCBnb3QgaW50ZXJwb2xhdGVkIGludG8gcGxhaW4gc3RyaW5nLCBwbGVhc2Ugd3JhcCBpdCB3aXRoIGBjc3NgLlxcblxcbicgKyAnSW5zdGVhZCBvZiBkb2luZyB0aGlzOlxcblxcbicgKyBbXS5jb25jYXQobWF0Y2hlZCwgW1wiYFwiICsgcmVwbGFjZWQgKyBcImBcIl0pLmpvaW4oJ1xcbicpICsgJ1xcblxcbllvdSBzaG91bGQgd3JhcCBpdCB3aXRoIGBjc3NgIGxpa2UgdGhpczpcXG5cXG4nICsgKFwiY3NzYFwiICsgcmVwbGFjZWQgKyBcImBcIikpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICB9IC8vIGZpbmFsaXplIHN0cmluZyB2YWx1ZXMgKHJlZ3VsYXIgc3RyaW5ncyBhbmQgZnVuY3Rpb25zIGludGVycG9sYXRlZCBpbnRvIGNzcyBjYWxscylcblxuXG4gIGlmIChyZWdpc3RlcmVkID09IG51bGwpIHtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGlvbjtcbiAgfVxuXG4gIHZhciBjYWNoZWQgPSByZWdpc3RlcmVkW2ludGVycG9sYXRpb25dO1xuICByZXR1cm4gY2FjaGVkICE9PSB1bmRlZmluZWQgPyBjYWNoZWQgOiBpbnRlcnBvbGF0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHJpbmdGcm9tT2JqZWN0KG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBvYmopIHtcbiAgdmFyIHN0cmluZyA9ICcnO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgc3RyaW5nICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9ialtpXSkgKyBcIjtcIjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgX2tleSBpbiBvYmopIHtcbiAgICAgIHZhciB2YWx1ZSA9IG9ialtfa2V5XTtcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKHJlZ2lzdGVyZWQgIT0gbnVsbCAmJiByZWdpc3RlcmVkW3ZhbHVlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3RyaW5nICs9IF9rZXkgKyBcIntcIiArIHJlZ2lzdGVyZWRbdmFsdWVdICsgXCJ9XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlKSkge1xuICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBwcm9jZXNzU3R5bGVWYWx1ZShfa2V5LCB2YWx1ZSkgKyBcIjtcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF9rZXkgPT09ICdOT19DT01QT05FTlRfU0VMRUNUT1InICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Iobm9Db21wb25lbnRTZWxlY3Rvck1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZVswXSA9PT0gJ3N0cmluZycgJiYgKHJlZ2lzdGVyZWQgPT0gbnVsbCB8fCByZWdpc3RlcmVkW3ZhbHVlWzBdXSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB2YWx1ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGlmIChpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWVbX2ldKSkge1xuICAgICAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoX2tleSwgdmFsdWVbX2ldKSArIFwiO1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaW50ZXJwb2xhdGVkID0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgdmFsdWUpO1xuXG4gICAgICAgICAgc3dpdGNoIChfa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb24nOlxuICAgICAgICAgICAgY2FzZSAnYW5pbWF0aW9uTmFtZSc6XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgaW50ZXJwb2xhdGVkICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF9rZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFVOREVGSU5FRF9BU19PQkpFQ1RfS0VZX0VSUk9SKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gX2tleSArIFwie1wiICsgaW50ZXJwb2xhdGVkICsgXCJ9XCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG52YXIgbGFiZWxQYXR0ZXJuID0gL2xhYmVsOlxccyooW15cXHM7XFxue10rKVxccyooO3wkKS9nO1xudmFyIHNvdXJjZU1hcFBhdHRlcm47XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHNvdXJjZU1hcFBhdHRlcm4gPSAvXFwvXFwqI1xcc3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvblxcL2pzb247XFxTK1xccytcXCpcXC8vZztcbn0gLy8gdGhpcyBpcyB0aGUgY3Vyc29yIGZvciBrZXlmcmFtZXNcbi8vIGtleWZyYW1lcyBhcmUgc3RvcmVkIG9uIHRoZSBTZXJpYWxpemVkU3R5bGVzIG9iamVjdCBhcyBhIGxpbmtlZCBsaXN0XG5cblxudmFyIGN1cnNvcjtcbnZhciBzZXJpYWxpemVTdHlsZXMgPSBmdW5jdGlvbiBzZXJpYWxpemVTdHlsZXMoYXJncywgcmVnaXN0ZXJlZCwgbWVyZ2VkUHJvcHMpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0JyAmJiBhcmdzWzBdICE9PSBudWxsICYmIGFyZ3NbMF0uc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYXJnc1swXTtcbiAgfVxuXG4gIHZhciBzdHJpbmdNb2RlID0gdHJ1ZTtcbiAgdmFyIHN0eWxlcyA9ICcnO1xuICBjdXJzb3IgPSB1bmRlZmluZWQ7XG4gIHZhciBzdHJpbmdzID0gYXJnc1swXTtcblxuICBpZiAoc3RyaW5ncyA9PSBudWxsIHx8IHN0cmluZ3MucmF3ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdHJpbmdNb2RlID0gZmFsc2U7XG4gICAgc3R5bGVzICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHN0cmluZ3MpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHN0cmluZ3NbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5lcnJvcihJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUik7XG4gICAgfVxuXG4gICAgc3R5bGVzICs9IHN0cmluZ3NbMF07XG4gIH0gLy8gd2Ugc3RhcnQgYXQgMSBzaW5jZSB3ZSd2ZSBhbHJlYWR5IGhhbmRsZWQgdGhlIGZpcnN0IGFyZ1xuXG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3R5bGVzICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGFyZ3NbaV0pO1xuXG4gICAgaWYgKHN0cmluZ01vZGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHN0cmluZ3NbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzICs9IHN0cmluZ3NbaV07XG4gICAgfVxuICB9XG5cbiAgdmFyIHNvdXJjZU1hcDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHN0eWxlcyA9IHN0eWxlcy5yZXBsYWNlKHNvdXJjZU1hcFBhdHRlcm4sIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgc291cmNlTWFwID0gbWF0Y2g7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG4gIH0gLy8gdXNpbmcgYSBnbG9iYWwgcmVnZXggd2l0aCAuZXhlYyBpcyBzdGF0ZWZ1bCBzbyBsYXN0SW5kZXggaGFzIHRvIGJlIHJlc2V0IGVhY2ggdGltZVxuXG5cbiAgbGFiZWxQYXR0ZXJuLmxhc3RJbmRleCA9IDA7XG4gIHZhciBpZGVudGlmaWVyTmFtZSA9ICcnO1xuICB2YXIgbWF0Y2g7IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWI4MDljMmNmMjk0OTgwMGEwZjYxZmI1XG5cbiAgd2hpbGUgKChtYXRjaCA9IGxhYmVsUGF0dGVybi5leGVjKHN0eWxlcykpICE9PSBudWxsKSB7XG4gICAgaWRlbnRpZmllck5hbWUgKz0gJy0nICsgLy8gJEZsb3dGaXhNZSB3ZSBrbm93IGl0J3Mgbm90IG51bGxcbiAgICBtYXRjaFsxXTtcbiAgfVxuXG4gIHZhciBuYW1lID0gaGFzaFN0cmluZyhzdHlsZXMpICsgaWRlbnRpZmllck5hbWU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFNlcmlhbGl6ZWRTdHlsZXMgdHlwZSBkb2Vzbid0IGhhdmUgdG9TdHJpbmcgcHJvcGVydHkgKGFuZCB3ZSBkb24ndCB3YW50IHRvIGFkZCBpdClcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgbWFwOiBzb3VyY2VNYXAsXG4gICAgICBuZXh0OiBjdXJzb3IsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIllvdSBoYXZlIHRyaWVkIHRvIHN0cmluZ2lmeSBvYmplY3QgcmV0dXJuZWQgZnJvbSBgY3NzYCBmdW5jdGlvbi4gSXQgaXNuJ3Qgc3VwcG9zZWQgdG8gYmUgdXNlZCBkaXJlY3RseSAoZS5nLiBhcyB2YWx1ZSBvZiB0aGUgYGNsYXNzTmFtZWAgcHJvcCksIGJ1dCByYXRoZXIgaGFuZGVkIHRvIGVtb3Rpb24gc28gaXQgY2FuIGhhbmRsZSBpdCAoZS5nLiBhcyB2YWx1ZSBvZiBgY3NzYCBwcm9wKS5cIjtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHN0eWxlczogc3R5bGVzLFxuICAgIG5leHQ6IGN1cnNvclxuICB9O1xufTtcblxuZXhwb3J0IHsgc2VyaWFsaXplU3R5bGVzIH07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCBmb3J3YXJkUmVmLCBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgd2Vha01lbW9pemUgZnJvbSAnQGVtb3Rpb24vd2Vhay1tZW1vaXplJztcbmltcG9ydCBob2lzdE5vblJlYWN0U3RhdGljcyBmcm9tICcuLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgcmVnaXN0ZXJTdHlsZXMsIGluc2VydFN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3V0aWxzJztcbmltcG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3NlcmlhbGl6ZSc7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuXG52YXIgRW1vdGlvbkNhY2hlQ29udGV4dCA9IC8qICNfX1BVUkVfXyAqL2NyZWF0ZUNvbnRleHQoIC8vIHdlJ3JlIGRvaW5nIHRoaXMgdG8gYXZvaWQgcHJlY29uc3RydWN0J3MgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIGluIHRoaXMgb25lIGNhc2Vcbi8vIGJlY2F1c2UgdGhpcyBtb2R1bGUgaXMgcHJpbWFyaWx5IGludGVuZGVkIGZvciB0aGUgYnJvd3NlciBhbmQgbm9kZVxuLy8gYnV0IGl0J3MgYWxzbyByZXF1aXJlZCBpbiByZWFjdCBuYXRpdmUgYW5kIHNpbWlsYXIgZW52aXJvbm1lbnRzIHNvbWV0aW1lc1xuLy8gYW5kIHdlIGNvdWxkIGhhdmUgYSBzcGVjaWFsIGJ1aWxkIGp1c3QgZm9yIHRoYXRcbi8vIGJ1dCB0aGlzIGlzIG11Y2ggZWFzaWVyIGFuZCB0aGUgbmF0aXZlIHBhY2thZ2VzXG4vLyBtaWdodCB1c2UgYSBkaWZmZXJlbnQgdGhlbWUgY29udGV4dCBpbiB0aGUgZnV0dXJlIGFueXdheVxudHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/IC8qICNfX1BVUkVfXyAqL2NyZWF0ZUNhY2hlKHtcbiAga2V5OiAnY3NzJ1xufSkgOiBudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgRW1vdGlvbkNhY2hlQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdFbW90aW9uQ2FjaGVDb250ZXh0Jztcbn1cblxudmFyIENhY2hlUHJvdmlkZXIgPSBFbW90aW9uQ2FjaGVDb250ZXh0LlByb3ZpZGVyO1xudmFyIF9fdW5zYWZlX3VzZUVtb3Rpb25DYWNoZSA9IGZ1bmN0aW9uIHVzZUVtb3Rpb25DYWNoZSgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoRW1vdGlvbkNhY2hlQ29udGV4dCk7XG59O1xuXG52YXIgd2l0aEVtb3Rpb25DYWNoZSA9IGZ1bmN0aW9uIHdpdGhFbW90aW9uQ2FjaGUoZnVuYykge1xuICAvLyAkRmxvd0ZpeE1lXG4gIHJldHVybiAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgIC8vIHRoZSBjYWNoZSB3aWxsIG5ldmVyIGJlIG51bGwgaW4gdGhlIGJyb3dzZXJcbiAgICB2YXIgY2FjaGUgPSB1c2VDb250ZXh0KEVtb3Rpb25DYWNoZUNvbnRleHQpO1xuICAgIHJldHVybiBmdW5jKHByb3BzLCBjYWNoZSwgcmVmKTtcbiAgfSk7XG59O1xuXG52YXIgVGhlbWVDb250ZXh0ID0gLyogI19fUFVSRV9fICovY3JlYXRlQ29udGV4dCh7fSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFRoZW1lQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdFbW90aW9uVGhlbWVDb250ZXh0Jztcbn1cblxudmFyIHVzZVRoZW1lID0gZnVuY3Rpb24gdXNlVGhlbWUoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG59O1xuXG52YXIgZ2V0VGhlbWUgPSBmdW5jdGlvbiBnZXRUaGVtZShvdXRlclRoZW1lLCB0aGVtZSkge1xuICBpZiAodHlwZW9mIHRoZW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIG1lcmdlZFRoZW1lID0gdGhlbWUob3V0ZXJUaGVtZSk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAobWVyZ2VkVGhlbWUgPT0gbnVsbCB8fCB0eXBlb2YgbWVyZ2VkVGhlbWUgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkobWVyZ2VkVGhlbWUpKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbVGhlbWVQcm92aWRlcl0gUGxlYXNlIHJldHVybiBhbiBvYmplY3QgZnJvbSB5b3VyIHRoZW1lIGZ1bmN0aW9uLCBpLmUuIHRoZW1lPXsoKSA9PiAoe30pfSEnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkVGhlbWU7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAodGhlbWUgPT0gbnVsbCB8fCB0eXBlb2YgdGhlbWUgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkodGhlbWUpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignW1RoZW1lUHJvdmlkZXJdIFBsZWFzZSBtYWtlIHlvdXIgdGhlbWUgcHJvcCBhIHBsYWluIG9iamVjdCcpO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvdXRlclRoZW1lLCB0aGVtZSk7XG59O1xuXG52YXIgY3JlYXRlQ2FjaGVXaXRoVGhlbWUgPSAvKiAjX19QVVJFX18gKi93ZWFrTWVtb2l6ZShmdW5jdGlvbiAob3V0ZXJUaGVtZSkge1xuICByZXR1cm4gd2Vha01lbW9pemUoZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgcmV0dXJuIGdldFRoZW1lKG91dGVyVGhlbWUsIHRoZW1lKTtcbiAgfSk7XG59KTtcbnZhciBUaGVtZVByb3ZpZGVyID0gZnVuY3Rpb24gVGhlbWVQcm92aWRlcihwcm9wcykge1xuICB2YXIgdGhlbWUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG5cbiAgaWYgKHByb3BzLnRoZW1lICE9PSB0aGVtZSkge1xuICAgIHRoZW1lID0gY3JlYXRlQ2FjaGVXaXRoVGhlbWUodGhlbWUpKHByb3BzLnRoZW1lKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChUaGVtZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdGhlbWVcbiAgfSwgcHJvcHMuY2hpbGRyZW4pO1xufTtcbmZ1bmN0aW9uIHdpdGhUaGVtZShDb21wb25lbnQpIHtcbiAgdmFyIGNvbXBvbmVudE5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG5cbiAgdmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihwcm9wcywgcmVmKSB7XG4gICAgdmFyIHRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgIHRoZW1lOiB0aGVtZSxcbiAgICAgIHJlZjogcmVmXG4gICAgfSwgcHJvcHMpKTtcbiAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgdmFyIFdpdGhUaGVtZSA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKHJlbmRlcik7XG4gIFdpdGhUaGVtZS5kaXNwbGF5TmFtZSA9IFwiV2l0aFRoZW1lKFwiICsgY29tcG9uZW50TmFtZSArIFwiKVwiO1xuICByZXR1cm4gaG9pc3ROb25SZWFjdFN0YXRpY3MoV2l0aFRoZW1lLCBDb21wb25lbnQpO1xufVxuXG52YXIgZ2V0TGFzdFBhcnQgPSBmdW5jdGlvbiBnZXRMYXN0UGFydChmdW5jdGlvbk5hbWUpIHtcbiAgLy8gVGhlIG1hdGNoIG1heSBiZSBzb21ldGhpbmcgbGlrZSAnT2JqZWN0LmNyZWF0ZUVtb3Rpb25Qcm9wcycgb3JcbiAgLy8gJ0xvYWRlci5wcm90b3R5cGUucmVuZGVyJ1xuICB2YXIgcGFydHMgPSBmdW5jdGlvbk5hbWUuc3BsaXQoJy4nKTtcbiAgcmV0dXJuIHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xufTtcblxudmFyIGdldEZ1bmN0aW9uTmFtZUZyb21TdGFja1RyYWNlTGluZSA9IGZ1bmN0aW9uIGdldEZ1bmN0aW9uTmFtZUZyb21TdGFja1RyYWNlTGluZShsaW5lKSB7XG4gIC8vIFY4XG4gIHZhciBtYXRjaCA9IC9eXFxzK2F0XFxzKyhbQS1aYS16MC05JC5dKylcXHMvLmV4ZWMobGluZSk7XG4gIGlmIChtYXRjaCkgcmV0dXJuIGdldExhc3RQYXJ0KG1hdGNoWzFdKTsgLy8gU2FmYXJpIC8gRmlyZWZveFxuXG4gIG1hdGNoID0gL14oW0EtWmEtejAtOSQuXSspQC8uZXhlYyhsaW5lKTtcbiAgaWYgKG1hdGNoKSByZXR1cm4gZ2V0TGFzdFBhcnQobWF0Y2hbMV0pO1xuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxudmFyIGludGVybmFsUmVhY3RGdW5jdGlvbk5hbWVzID0gLyogI19fUFVSRV9fICovbmV3IFNldChbJ3JlbmRlcldpdGhIb29rcycsICdwcm9jZXNzQ2hpbGQnLCAnZmluaXNoQ2xhc3NDb21wb25lbnQnLCAncmVuZGVyVG9TdHJpbmcnXSk7IC8vIFRoZXNlIGlkZW50aWZpZXJzIGNvbWUgZnJvbSBlcnJvciBzdGFja3MsIHNvIHRoZXkgaGF2ZSB0byBiZSB2YWxpZCBKU1xuLy8gaWRlbnRpZmllcnMsIHRodXMgd2Ugb25seSBuZWVkIHRvIHJlcGxhY2Ugd2hhdCBpcyBhIHZhbGlkIGNoYXJhY3RlciBmb3IgSlMsXG4vLyBidXQgbm90IGZvciBDU1MuXG5cbnZhciBzYW5pdGl6ZUlkZW50aWZpZXIgPSBmdW5jdGlvbiBzYW5pdGl6ZUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICByZXR1cm4gaWRlbnRpZmllci5yZXBsYWNlKC9cXCQvZywgJy0nKTtcbn07XG5cbnZhciBnZXRMYWJlbEZyb21TdGFja1RyYWNlID0gZnVuY3Rpb24gZ2V0TGFiZWxGcm9tU3RhY2tUcmFjZShzdGFja1RyYWNlKSB7XG4gIGlmICghc3RhY2tUcmFjZSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgdmFyIGxpbmVzID0gc3RhY2tUcmFjZS5zcGxpdCgnXFxuJyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBmdW5jdGlvbk5hbWUgPSBnZXRGdW5jdGlvbk5hbWVGcm9tU3RhY2tUcmFjZUxpbmUobGluZXNbaV0pOyAvLyBUaGUgZmlyc3QgbGluZSBvZiBWOCBzdGFjayB0cmFjZXMgaXMganVzdCBcIkVycm9yXCJcblxuICAgIGlmICghZnVuY3Rpb25OYW1lKSBjb250aW51ZTsgLy8gSWYgd2UgcmVhY2ggb25lIG9mIHRoZXNlLCB3ZSBoYXZlIGdvbmUgdG9vIGZhciBhbmQgc2hvdWxkIHF1aXRcblxuICAgIGlmIChpbnRlcm5hbFJlYWN0RnVuY3Rpb25OYW1lcy5oYXMoZnVuY3Rpb25OYW1lKSkgYnJlYWs7IC8vIFRoZSBjb21wb25lbnQgbmFtZSBpcyB0aGUgZmlyc3QgZnVuY3Rpb24gaW4gdGhlIHN0YWNrIHRoYXQgc3RhcnRzIHdpdGggYW5cbiAgICAvLyB1cHBlcmNhc2UgbGV0dGVyXG5cbiAgICBpZiAoL15bQS1aXS8udGVzdChmdW5jdGlvbk5hbWUpKSByZXR1cm4gc2FuaXRpemVJZGVudGlmaWVyKGZ1bmN0aW9uTmFtZSk7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxudmFyIHVzZUluc2VydGlvbkVmZmVjdCA9IFJlYWN0Wyd1c2VJbnNlcnRpb24nICsgJ0VmZmVjdCddID8gUmVhY3RbJ3VzZUluc2VydGlvbicgKyAnRWZmZWN0J10gOiBmdW5jdGlvbiB1c2VJbnNlcnRpb25FZmZlY3QoY3JlYXRlKSB7XG4gIGNyZWF0ZSgpO1xufTtcbmZ1bmN0aW9uIHVzZUluc2VydGlvbkVmZmVjdE1heWJlKGNyZWF0ZSkge1xuXG4gIHVzZUluc2VydGlvbkVmZmVjdChjcmVhdGUpO1xufVxuXG52YXIgdHlwZVByb3BOYW1lID0gJ19fRU1PVElPTl9UWVBFX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGxhYmVsUHJvcE5hbWUgPSAnX19FTU9USU9OX0xBQkVMX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGNyZWF0ZUVtb3Rpb25Qcm9wcyA9IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgcHJvcHMuY3NzID09PSAnc3RyaW5nJyAmJiAvLyBjaGVjayBpZiB0aGVyZSBpcyBhIGNzcyBkZWNsYXJhdGlvblxuICBwcm9wcy5jc3MuaW5kZXhPZignOicpICE9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlN0cmluZ3MgYXJlIG5vdCBhbGxvd2VkIGFzIGNzcyBwcm9wIHZhbHVlcywgcGxlYXNlIHdyYXAgaXQgaW4gYSBjc3MgdGVtcGxhdGUgbGl0ZXJhbCBmcm9tICdAZW1vdGlvbi9yZWFjdCcgbGlrZSB0aGlzOiBjc3NgXCIgKyBwcm9wcy5jc3MgKyBcImBcIik7XG4gIH1cblxuICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSkge1xuICAgICAgbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICB9XG5cbiAgbmV3UHJvcHNbdHlwZVByb3BOYW1lXSA9IHR5cGU7IC8vIEZvciBwZXJmb3JtYW5jZSwgb25seSBjYWxsIGdldExhYmVsRnJvbVN0YWNrVHJhY2UgaW4gZGV2ZWxvcG1lbnQgYW5kIHdoZW5cbiAgLy8gdGhlIGxhYmVsIGhhc24ndCBhbHJlYWR5IGJlZW4gY29tcHV0ZWRcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhIXByb3BzLmNzcyAmJiAodHlwZW9mIHByb3BzLmNzcyAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHByb3BzLmNzcy5uYW1lICE9PSAnc3RyaW5nJyB8fCBwcm9wcy5jc3MubmFtZS5pbmRleE9mKCctJykgPT09IC0xKSkge1xuICAgIHZhciBsYWJlbCA9IGdldExhYmVsRnJvbVN0YWNrVHJhY2UobmV3IEVycm9yKCkuc3RhY2spO1xuICAgIGlmIChsYWJlbCkgbmV3UHJvcHNbbGFiZWxQcm9wTmFtZV0gPSBsYWJlbDtcbiAgfVxuXG4gIHJldHVybiBuZXdQcm9wcztcbn07XG5cbnZhciBJbnNlcnRpb24gPSBmdW5jdGlvbiBJbnNlcnRpb24oX3JlZikge1xuICB2YXIgY2FjaGUgPSBfcmVmLmNhY2hlLFxuICAgICAgc2VyaWFsaXplZCA9IF9yZWYuc2VyaWFsaXplZCxcbiAgICAgIGlzU3RyaW5nVGFnID0gX3JlZi5pc1N0cmluZ1RhZztcbiAgcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKTtcbiAgdmFyIHJ1bGVzID0gdXNlSW5zZXJ0aW9uRWZmZWN0TWF5YmUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgRW1vdGlvbiA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSwgcmVmKSB7XG4gIHZhciBjc3NQcm9wID0gcHJvcHMuY3NzOyAvLyBzbyB0aGF0IHVzaW5nIGBjc3NgIGZyb20gYGVtb3Rpb25gIGFuZCBwYXNzaW5nIHRoZSByZXN1bHQgdG8gdGhlIGNzcyBwcm9wIHdvcmtzXG4gIC8vIG5vdCBwYXNzaW5nIHRoZSByZWdpc3RlcmVkIGNhY2hlIHRvIHNlcmlhbGl6ZVN0eWxlcyBiZWNhdXNlIGl0IHdvdWxkXG4gIC8vIG1ha2UgY2VydGFpbiBiYWJlbCBvcHRpbWlzYXRpb25zIG5vdCBwb3NzaWJsZVxuXG4gIGlmICh0eXBlb2YgY3NzUHJvcCA9PT0gJ3N0cmluZycgJiYgY2FjaGUucmVnaXN0ZXJlZFtjc3NQcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY3NzUHJvcCA9IGNhY2hlLnJlZ2lzdGVyZWRbY3NzUHJvcF07XG4gIH1cblxuICB2YXIgV3JhcHBlZENvbXBvbmVudCA9IHByb3BzW3R5cGVQcm9wTmFtZV07XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW2Nzc1Byb3BdO1xuICB2YXIgY2xhc3NOYW1lID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhjYWNoZS5yZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBwcm9wcy5jbGFzc05hbWUpO1xuICB9IGVsc2UgaWYgKHByb3BzLmNsYXNzTmFtZSAhPSBudWxsKSB7XG4gICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lICsgXCIgXCI7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhyZWdpc3RlcmVkU3R5bGVzLCB1bmRlZmluZWQsIHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc2VyaWFsaXplZC5uYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICB2YXIgbGFiZWxGcm9tU3RhY2sgPSBwcm9wc1tsYWJlbFByb3BOYW1lXTtcblxuICAgIGlmIChsYWJlbEZyb21TdGFjaykge1xuICAgICAgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhbc2VyaWFsaXplZCwgJ2xhYmVsOicgKyBsYWJlbEZyb21TdGFjayArICc7J10pO1xuICAgIH1cbiAgfVxuXG4gIGNsYXNzTmFtZSArPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkgJiYga2V5ICE9PSAnY3NzJyAmJiBrZXkgIT09IHR5cGVQcm9wTmFtZSAmJiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyB8fCBrZXkgIT09IGxhYmVsUHJvcE5hbWUpKSB7XG4gICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH1cblxuICBuZXdQcm9wcy5yZWYgPSByZWY7XG4gIG5ld1Byb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChJbnNlcnRpb24sIHtcbiAgICBjYWNoZTogY2FjaGUsXG4gICAgc2VyaWFsaXplZDogc2VyaWFsaXplZCxcbiAgICBpc1N0cmluZ1RhZzogdHlwZW9mIFdyYXBwZWRDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gIH0pLCAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBuZXdQcm9wcykpO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEVtb3Rpb24uZGlzcGxheU5hbWUgPSAnRW1vdGlvbkNzc1Byb3BJbnRlcm5hbCc7XG59XG5cbmV4cG9ydCB7IENhY2hlUHJvdmlkZXIgYXMgQywgRW1vdGlvbiBhcyBFLCBUaGVtZUNvbnRleHQgYXMgVCwgX191bnNhZmVfdXNlRW1vdGlvbkNhY2hlIGFzIF8sIHVzZVRoZW1lIGFzIGEsIFRoZW1lUHJvdmlkZXIgYXMgYiwgY3JlYXRlRW1vdGlvblByb3BzIGFzIGMsIHdpdGhUaGVtZSBhcyBkLCBoYXNPd25Qcm9wZXJ0eSBhcyBoLCB1c2VJbnNlcnRpb25FZmZlY3RNYXliZSBhcyB1LCB3aXRoRW1vdGlvbkNhY2hlIGFzIHcgfTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZUxheW91dEVmZmVjdCwgdXNlQ29udGV4dCwgdXNlUmVmLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0IHsgaCBhcyBoYXNPd25Qcm9wZXJ0eSwgRSBhcyBFbW90aW9uLCBjIGFzIGNyZWF0ZUVtb3Rpb25Qcm9wcywgdyBhcyB3aXRoRW1vdGlvbkNhY2hlLCBUIGFzIFRoZW1lQ29udGV4dCwgdSBhcyB1c2VJbnNlcnRpb25FZmZlY3RNYXliZSB9IGZyb20gJy4vZW1vdGlvbi1lbGVtZW50LWNiZWQ0NTFmLmJyb3dzZXIuZXNtLmpzJztcbmV4cG9ydCB7IEMgYXMgQ2FjaGVQcm92aWRlciwgVCBhcyBUaGVtZUNvbnRleHQsIGIgYXMgVGhlbWVQcm92aWRlciwgXyBhcyBfX3Vuc2FmZV91c2VFbW90aW9uQ2FjaGUsIGEgYXMgdXNlVGhlbWUsIHcgYXMgd2l0aEVtb3Rpb25DYWNoZSwgZCBhcyB3aXRoVGhlbWUgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC1jYmVkNDUxZi5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5pbXBvcnQgJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCAnLi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IGluc2VydFN0eWxlcywgcmVnaXN0ZXJTdHlsZXMsIGdldFJlZ2lzdGVyZWRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuXG52YXIgcGtnID0ge1xuXHRuYW1lOiBcIkBlbW90aW9uL3JlYWN0XCIsXG5cdHZlcnNpb246IFwiMTEuOS4zXCIsXG5cdG1haW46IFwiZGlzdC9lbW90aW9uLXJlYWN0LmNqcy5qc1wiLFxuXHRtb2R1bGU6IFwiZGlzdC9lbW90aW9uLXJlYWN0LmVzbS5qc1wiLFxuXHRicm93c2VyOiB7XG5cdFx0XCIuL2Rpc3QvZW1vdGlvbi1yZWFjdC5janMuanNcIjogXCIuL2Rpc3QvZW1vdGlvbi1yZWFjdC5icm93c2VyLmNqcy5qc1wiLFxuXHRcdFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuZXNtLmpzXCI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuYnJvd3Nlci5lc20uanNcIlxuXHR9LFxuXHR0eXBlczogXCJ0eXBlcy9pbmRleC5kLnRzXCIsXG5cdGZpbGVzOiBbXG5cdFx0XCJzcmNcIixcblx0XHRcImRpc3RcIixcblx0XHRcImpzeC1ydW50aW1lXCIsXG5cdFx0XCJqc3gtZGV2LXJ1bnRpbWVcIixcblx0XHRcIl9pc29sYXRlZC1obnJzXCIsXG5cdFx0XCJ0eXBlcy8qLmQudHNcIixcblx0XHRcIm1hY3JvLmpzXCIsXG5cdFx0XCJtYWNyby5kLnRzXCIsXG5cdFx0XCJtYWNyby5qcy5mbG93XCJcblx0XSxcblx0c2lkZUVmZmVjdHM6IGZhbHNlLFxuXHRhdXRob3I6IFwiRW1vdGlvbiBDb250cmlidXRvcnNcIixcblx0bGljZW5zZTogXCJNSVRcIixcblx0c2NyaXB0czoge1xuXHRcdFwidGVzdDp0eXBlc2NyaXB0XCI6IFwiZHRzbGludCB0eXBlc1wiXG5cdH0sXG5cdGRlcGVuZGVuY2llczoge1xuXHRcdFwiQGJhYmVsL3J1bnRpbWVcIjogXCJeNy4xMy4xMFwiLFxuXHRcdFwiQGVtb3Rpb24vYmFiZWwtcGx1Z2luXCI6IFwiXjExLjcuMVwiLFxuXHRcdFwiQGVtb3Rpb24vY2FjaGVcIjogXCJeMTEuOS4zXCIsXG5cdFx0XCJAZW1vdGlvbi9zZXJpYWxpemVcIjogXCJeMS4wLjRcIixcblx0XHRcIkBlbW90aW9uL3V0aWxzXCI6IFwiXjEuMS4wXCIsXG5cdFx0XCJAZW1vdGlvbi93ZWFrLW1lbW9pemVcIjogXCJeMC4yLjVcIixcblx0XHRcImhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzXCI6IFwiXjMuMy4xXCJcblx0fSxcblx0cGVlckRlcGVuZGVuY2llczoge1xuXHRcdFwiQGJhYmVsL2NvcmVcIjogXCJeNy4wLjBcIixcblx0XHRyZWFjdDogXCI+PTE2LjguMFwiXG5cdH0sXG5cdHBlZXJEZXBlbmRlbmNpZXNNZXRhOiB7XG5cdFx0XCJAYmFiZWwvY29yZVwiOiB7XG5cdFx0XHRvcHRpb25hbDogdHJ1ZVxuXHRcdH0sXG5cdFx0XCJAdHlwZXMvcmVhY3RcIjoge1xuXHRcdFx0b3B0aW9uYWw6IHRydWVcblx0XHR9XG5cdH0sXG5cdGRldkRlcGVuZGVuY2llczoge1xuXHRcdFwiQGJhYmVsL2NvcmVcIjogXCJeNy4xMy4xMFwiLFxuXHRcdFwiQGRlZmluaXRlbHl0eXBlZC9kdHNsaW50XCI6IFwiMC4wLjExMlwiLFxuXHRcdFwiQGVtb3Rpb24vY3NzXCI6IFwiMTEuOS4wXCIsXG5cdFx0XCJAZW1vdGlvbi9jc3MtcHJldHRpZmllclwiOiBcIjEuMC4xXCIsXG5cdFx0XCJAZW1vdGlvbi9zZXJ2ZXJcIjogXCIxMS40LjBcIixcblx0XHRcIkBlbW90aW9uL3N0eWxlZFwiOiBcIjExLjkuM1wiLFxuXHRcdFwiaHRtbC10YWctbmFtZXNcIjogXCJeMS4xLjJcIixcblx0XHRyZWFjdDogXCIxNi4xNC4wXCIsXG5cdFx0XCJzdmctdGFnLW5hbWVzXCI6IFwiXjEuMS4xXCIsXG5cdFx0dHlwZXNjcmlwdDogXCJeNC41LjVcIlxuXHR9LFxuXHRyZXBvc2l0b3J5OiBcImh0dHBzOi8vZ2l0aHViLmNvbS9lbW90aW9uLWpzL2Vtb3Rpb24vdHJlZS9tYWluL3BhY2thZ2VzL3JlYWN0XCIsXG5cdHB1Ymxpc2hDb25maWc6IHtcblx0XHRhY2Nlc3M6IFwicHVibGljXCJcblx0fSxcblx0XCJ1bWQ6bWFpblwiOiBcImRpc3QvZW1vdGlvbi1yZWFjdC51bWQubWluLmpzXCIsXG5cdHByZWNvbnN0cnVjdDoge1xuXHRcdGVudHJ5cG9pbnRzOiBbXG5cdFx0XHRcIi4vaW5kZXguanNcIixcblx0XHRcdFwiLi9qc3gtcnVudGltZS5qc1wiLFxuXHRcdFx0XCIuL2pzeC1kZXYtcnVudGltZS5qc1wiLFxuXHRcdFx0XCIuL19pc29sYXRlZC1obnJzLmpzXCJcblx0XHRdLFxuXHRcdHVtZE5hbWU6IFwiZW1vdGlvblJlYWN0XCJcblx0fVxufTtcblxudmFyIGpzeCA9IGZ1bmN0aW9uIGpzeCh0eXBlLCBwcm9wcykge1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICBpZiAocHJvcHMgPT0gbnVsbCB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgJ2NzcycpKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50LmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH1cblxuICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgY3JlYXRlRWxlbWVudEFyZ0FycmF5ID0gbmV3IEFycmF5KGFyZ3NMZW5ndGgpO1xuICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMF0gPSBFbW90aW9uO1xuICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMV0gPSBjcmVhdGVFbW90aW9uUHJvcHModHlwZSwgcHJvcHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSB7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5W2ldID0gYXJnc1tpXTtcbiAgfSAvLyAkRmxvd0ZpeE1lXG5cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBjcmVhdGVFbGVtZW50QXJnQXJyYXkpO1xufTtcblxudmFyIHVzZUluc2VydGlvbkVmZmVjdCA9IFJlYWN0Wyd1c2VJbnNlcnRpb24nICsgJ0VmZmVjdCddID8gUmVhY3RbJ3VzZUluc2VydGlvbicgKyAnRWZmZWN0J10gOiB1c2VMYXlvdXRFZmZlY3Q7XG52YXIgd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsID0gZmFsc2U7IC8vIG1haW50YWluIHBsYWNlIG92ZXIgcmVyZW5kZXJzLlxuLy8gaW5pdGlhbCByZW5kZXIgZnJvbSBicm93c2VyLCBpbnNlcnRCZWZvcmUgY29udGV4dC5zaGVldC50YWdzWzBdIG9yIGlmIGEgc3R5bGUgaGFzbid0IGJlZW4gaW5zZXJ0ZWQgdGhlcmUgeWV0LCBhcHBlbmRDaGlsZFxuLy8gaW5pdGlhbCBjbGllbnQtc2lkZSByZW5kZXIgZnJvbSBTU1IsIHVzZSBwbGFjZSBvZiBoeWRyYXRpbmcgdGFnXG5cbnZhciBHbG9iYWwgPSAvKiAjX19QVVJFX18gKi93aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY2FjaGUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXdhcm5lZEFib3V0Q3NzUHJvcEZvckdsb2JhbCAmJiAoIC8vIGNoZWNrIGZvciBjbGFzc05hbWUgYXMgd2VsbCBzaW5jZSB0aGUgdXNlciBpc1xuICAvLyBwcm9iYWJseSB1c2luZyB0aGUgY3VzdG9tIGNyZWF0ZUVsZW1lbnQgd2hpY2hcbiAgLy8gbWVhbnMgaXQgd2lsbCBiZSB0dXJuZWQgaW50byBhIGNsYXNzTmFtZSBwcm9wXG4gIC8vICRGbG93Rml4TWUgSSBkb24ndCByZWFsbHkgd2FudCB0byBhZGQgaXQgdG8gdGhlIHR5cGUgc2luY2UgaXQgc2hvdWxkbid0IGJlIHVzZWRcbiAgcHJvcHMuY2xhc3NOYW1lIHx8IHByb3BzLmNzcykpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiSXQgbG9va3MgbGlrZSB5b3UncmUgdXNpbmcgdGhlIGNzcyBwcm9wIG9uIEdsb2JhbCwgZGlkIHlvdSBtZWFuIHRvIHVzZSB0aGUgc3R5bGVzIHByb3AgaW5zdGVhZD9cIik7XG4gICAgd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBwcm9wcy5zdHlsZXM7XG4gIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKFtzdHlsZXNdLCB1bmRlZmluZWQsIHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KSk7XG4gIC8vIGJ1dCBpdCBpcyBiYXNlZCBvbiBhIGNvbnN0YW50IHRoYXQgd2lsbCBuZXZlciBjaGFuZ2UgYXQgcnVudGltZVxuICAvLyBpdCdzIGVmZmVjdGl2ZWx5IGxpa2UgaGF2aW5nIHR3byBpbXBsZW1lbnRhdGlvbnMgYW5kIHN3aXRjaGluZyB0aGVtIG91dFxuICAvLyBzbyBpdCdzIG5vdCBhY3R1YWxseSBicmVha2luZyBhbnl0aGluZ1xuXG5cbiAgdmFyIHNoZWV0UmVmID0gdXNlUmVmKCk7XG4gIHVzZUluc2VydGlvbkVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGtleSA9IGNhY2hlLmtleSArIFwiLWdsb2JhbFwiOyAvLyB1c2UgY2FzZSBvZiBodHRwczovL2dpdGh1Yi5jb20vZW1vdGlvbi1qcy9lbW90aW9uL2lzc3Vlcy8yNjc1XG5cbiAgICB2YXIgc2hlZXQgPSBuZXcgY2FjaGUuc2hlZXQuY29uc3RydWN0b3Ioe1xuICAgICAga2V5OiBrZXksXG4gICAgICBub25jZTogY2FjaGUuc2hlZXQubm9uY2UsXG4gICAgICBjb250YWluZXI6IGNhY2hlLnNoZWV0LmNvbnRhaW5lcixcbiAgICAgIHNwZWVkeTogY2FjaGUuc2hlZXQuaXNTcGVlZHlcbiAgICB9KTtcbiAgICB2YXIgcmVoeWRyYXRpbmcgPSBmYWxzZTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVbZGF0YS1lbW90aW9uPVxcXCJcIiArIGtleSArIFwiIFwiICsgc2VyaWFsaXplZC5uYW1lICsgXCJcXFwiXVwiKTtcblxuICAgIGlmIChjYWNoZS5zaGVldC50YWdzLmxlbmd0aCkge1xuICAgICAgc2hlZXQuYmVmb3JlID0gY2FjaGUuc2hlZXQudGFnc1swXTtcbiAgICB9XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmVoeWRyYXRpbmcgPSB0cnVlOyAvLyBjbGVhciB0aGUgaGFzaCBzbyB0aGlzIG5vZGUgd29uJ3QgYmUgcmVjb2duaXphYmxlIGFzIHJlaHlkcmF0YWJsZSBieSBvdGhlciA8R2xvYmFsLz5zXG5cbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWVtb3Rpb24nLCBrZXkpO1xuICAgICAgc2hlZXQuaHlkcmF0ZShbbm9kZV0pO1xuICAgIH1cblxuICAgIHNoZWV0UmVmLmN1cnJlbnQgPSBbc2hlZXQsIHJlaHlkcmF0aW5nXTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgc2hlZXQuZmx1c2goKTtcbiAgICB9O1xuICB9LCBbY2FjaGVdKTtcbiAgdXNlSW5zZXJ0aW9uRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2hlZXRSZWZDdXJyZW50ID0gc2hlZXRSZWYuY3VycmVudDtcbiAgICB2YXIgc2hlZXQgPSBzaGVldFJlZkN1cnJlbnRbMF0sXG4gICAgICAgIHJlaHlkcmF0aW5nID0gc2hlZXRSZWZDdXJyZW50WzFdO1xuXG4gICAgaWYgKHJlaHlkcmF0aW5nKSB7XG4gICAgICBzaGVldFJlZkN1cnJlbnRbMV0gPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VyaWFsaXplZC5uZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGluc2VydCBrZXlmcmFtZXNcbiAgICAgIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZC5uZXh0LCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoc2hlZXQudGFncy5sZW5ndGgpIHtcbiAgICAgIC8vIGlmIHRoaXMgZG9lc24ndCBleGlzdCB0aGVuIGl0IHdpbGwgYmUgbnVsbCBzbyB0aGUgc3R5bGUgZWxlbWVudCB3aWxsIGJlIGFwcGVuZGVkXG4gICAgICB2YXIgZWxlbWVudCA9IHNoZWV0LnRhZ3Nbc2hlZXQudGFncy5sZW5ndGggLSAxXS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBzaGVldC5iZWZvcmUgPSBlbGVtZW50O1xuICAgICAgc2hlZXQuZmx1c2goKTtcbiAgICB9XG5cbiAgICBjYWNoZS5pbnNlcnQoXCJcIiwgc2VyaWFsaXplZCwgc2hlZXQsIGZhbHNlKTtcbiAgfSwgW2NhY2hlLCBzZXJpYWxpemVkLm5hbWVdKTtcbiAgcmV0dXJuIG51bGw7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgR2xvYmFsLmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25HbG9iYWwnO1xufVxuXG5mdW5jdGlvbiBjc3MoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gc2VyaWFsaXplU3R5bGVzKGFyZ3MpO1xufVxuXG52YXIga2V5ZnJhbWVzID0gZnVuY3Rpb24ga2V5ZnJhbWVzKCkge1xuICB2YXIgaW5zZXJ0YWJsZSA9IGNzcy5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gIHZhciBuYW1lID0gXCJhbmltYXRpb24tXCIgKyBpbnNlcnRhYmxlLm5hbWU7IC8vICRGbG93Rml4TWVcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgc3R5bGVzOiBcIkBrZXlmcmFtZXMgXCIgKyBuYW1lICsgXCJ7XCIgKyBpbnNlcnRhYmxlLnN0eWxlcyArIFwifVwiLFxuICAgIGFuaW06IDEsXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIFwiX0VNT19cIiArIHRoaXMubmFtZSArIFwiX1wiICsgdGhpcy5zdHlsZXMgKyBcIl9FTU9fXCI7XG4gICAgfVxuICB9O1xufTtcblxudmFyIGNsYXNzbmFtZXMgPSBmdW5jdGlvbiBjbGFzc25hbWVzKGFyZ3MpIHtcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBjbHMgPSAnJztcblxuICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGFyZyA9IGFyZ3NbaV07XG4gICAgaWYgKGFyZyA9PSBudWxsKSBjb250aW51ZTtcbiAgICB2YXIgdG9BZGQgPSB2b2lkIDA7XG5cbiAgICBzd2l0Y2ggKHR5cGVvZiBhcmcpIHtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgICAgIHRvQWRkID0gY2xhc3NuYW1lcyhhcmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBhcmcuc3R5bGVzICE9PSB1bmRlZmluZWQgJiYgYXJnLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdZb3UgaGF2ZSBwYXNzZWQgc3R5bGVzIGNyZWF0ZWQgd2l0aCBgY3NzYCBmcm9tIGBAZW1vdGlvbi9yZWFjdGAgcGFja2FnZSB0byB0aGUgYGN4YC5cXG4nICsgJ2BjeGAgaXMgbWVhbnQgdG8gY29tcG9zZSBjbGFzcyBuYW1lcyAoc3RyaW5ncykgc28geW91IHNob3VsZCBjb252ZXJ0IHRob3NlIHN0eWxlcyB0byBhIGNsYXNzIG5hbWUgYnkgcGFzc2luZyB0aGVtIHRvIHRoZSBgY3NzYCByZWNlaXZlZCBmcm9tIDxDbGFzc05hbWVzLz4gY29tcG9uZW50LicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b0FkZCA9ICcnO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIGFyZykge1xuICAgICAgICAgICAgICBpZiAoYXJnW2tdICYmIGspIHtcbiAgICAgICAgICAgICAgICB0b0FkZCAmJiAodG9BZGQgKz0gJyAnKTtcbiAgICAgICAgICAgICAgICB0b0FkZCArPSBrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIHRvQWRkID0gYXJnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvQWRkKSB7XG4gICAgICBjbHMgJiYgKGNscyArPSAnICcpO1xuICAgICAgY2xzICs9IHRvQWRkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbHM7XG59O1xuXG5mdW5jdGlvbiBtZXJnZShyZWdpc3RlcmVkLCBjc3MsIGNsYXNzTmFtZSkge1xuICB2YXIgcmVnaXN0ZXJlZFN0eWxlcyA9IFtdO1xuICB2YXIgcmF3Q2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhyZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBjbGFzc05hbWUpO1xuXG4gIGlmIChyZWdpc3RlcmVkU3R5bGVzLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgcmV0dXJuIHJhd0NsYXNzTmFtZSArIGNzcyhyZWdpc3RlcmVkU3R5bGVzKTtcbn1cblxudmFyIEluc2VydGlvbiA9IGZ1bmN0aW9uIEluc2VydGlvbihfcmVmKSB7XG4gIHZhciBjYWNoZSA9IF9yZWYuY2FjaGUsXG4gICAgICBzZXJpYWxpemVkQXJyID0gX3JlZi5zZXJpYWxpemVkQXJyO1xuICB2YXIgcnVsZXMgPSB1c2VJbnNlcnRpb25FZmZlY3RNYXliZShmdW5jdGlvbiAoKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlcmlhbGl6ZWRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciByZXMgPSBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWRBcnJbaV0sIGZhbHNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIENsYXNzTmFtZXMgPSAvKiAjX19QVVJFX18gKi93aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY2FjaGUpIHtcbiAgdmFyIGhhc1JlbmRlcmVkID0gZmFsc2U7XG4gIHZhciBzZXJpYWxpemVkQXJyID0gW107XG5cbiAgdmFyIGNzcyA9IGZ1bmN0aW9uIGNzcygpIHtcbiAgICBpZiAoaGFzUmVuZGVyZWQgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjc3MgY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgcmVuZGVyJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKGFyZ3MsIGNhY2hlLnJlZ2lzdGVyZWQpO1xuICAgIHNlcmlhbGl6ZWRBcnIucHVzaChzZXJpYWxpemVkKTsgLy8gcmVnaXN0cmF0aW9uIGhhcyB0byBoYXBwZW4gaGVyZSBhcyB0aGUgcmVzdWx0IG9mIHRoaXMgbWlnaHQgZ2V0IGNvbnN1bWVkIGJ5IGBjeGBcblxuICAgIHJlZ2lzdGVyU3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBmYWxzZSk7XG4gICAgcmV0dXJuIGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuICB9O1xuXG4gIHZhciBjeCA9IGZ1bmN0aW9uIGN4KCkge1xuICAgIGlmIChoYXNSZW5kZXJlZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2N4IGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIHJlbmRlcicpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZShjYWNoZS5yZWdpc3RlcmVkLCBjc3MsIGNsYXNzbmFtZXMoYXJncykpO1xuICB9O1xuXG4gIHZhciBjb250ZW50ID0ge1xuICAgIGNzczogY3NzLFxuICAgIGN4OiBjeCxcbiAgICB0aGVtZTogdXNlQ29udGV4dChUaGVtZUNvbnRleHQpXG4gIH07XG4gIHZhciBlbGUgPSBwcm9wcy5jaGlsZHJlbihjb250ZW50KTtcbiAgaGFzUmVuZGVyZWQgPSB0cnVlO1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KEluc2VydGlvbiwge1xuICAgIGNhY2hlOiBjYWNoZSxcbiAgICBzZXJpYWxpemVkQXJyOiBzZXJpYWxpemVkQXJyXG4gIH0pLCBlbGUpO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIENsYXNzTmFtZXMuZGlzcGxheU5hbWUgPSAnRW1vdGlvbkNsYXNzTmFtZXMnO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaXNCcm93c2VyID0gXCJvYmplY3RcIiAhPT0gJ3VuZGVmaW5lZCc7IC8vICMxNzI3IGZvciBzb21lIHJlYXNvbiBKZXN0IGV2YWx1YXRlcyBtb2R1bGVzIHR3aWNlIGlmIHNvbWUgY29uc3VtaW5nIG1vZHVsZSBnZXRzIG1vY2tlZCB3aXRoIGplc3QubW9ja1xuXG4gIHZhciBpc0plc3QgPSB0eXBlb2YgamVzdCAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgaWYgKGlzQnJvd3NlciAmJiAhaXNKZXN0KSB7XG4gICAgLy8gZ2xvYmFsVGhpcyBoYXMgd2lkZSBicm93c2VyIHN1cHBvcnQgLSBodHRwczovL2Nhbml1c2UuY29tLz9zZWFyY2g9Z2xvYmFsVGhpcywgTm9kZS5qcyAxMiBhbmQgbGF0ZXJcbiAgICB2YXIgZ2xvYmFsQ29udGV4dCA9IC8vICRGbG93SWdub3JlXG4gICAgdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgOiBpc0Jyb3dzZXIgPyB3aW5kb3cgOiBnbG9iYWw7XG4gICAgdmFyIGdsb2JhbEtleSA9IFwiX19FTU9USU9OX1JFQUNUX1wiICsgcGtnLnZlcnNpb24uc3BsaXQoJy4nKVswXSArIFwiX19cIjtcblxuICAgIGlmIChnbG9iYWxDb250ZXh0W2dsb2JhbEtleV0pIHtcbiAgICAgIGNvbnNvbGUud2FybignWW91IGFyZSBsb2FkaW5nIEBlbW90aW9uL3JlYWN0IHdoZW4gaXQgaXMgYWxyZWFkeSBsb2FkZWQuIFJ1bm5pbmcgJyArICdtdWx0aXBsZSBpbnN0YW5jZXMgbWF5IGNhdXNlIHByb2JsZW1zLiBUaGlzIGNhbiBoYXBwZW4gaWYgbXVsdGlwbGUgJyArICd2ZXJzaW9ucyBhcmUgdXNlZCwgb3IgaWYgbXVsdGlwbGUgYnVpbGRzIG9mIHRoZSBzYW1lIHZlcnNpb24gYXJlICcgKyAndXNlZC4nKTtcbiAgICB9XG5cbiAgICBnbG9iYWxDb250ZXh0W2dsb2JhbEtleV0gPSB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCB7IENsYXNzTmFtZXMsIEdsb2JhbCwganN4IGFzIGNyZWF0ZUVsZW1lbnQsIGNzcywganN4LCBrZXlmcmFtZXMgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7XG4gIGlmICghcmF3KSB7XG4gICAgcmF3ID0gc3RyaW5ncy5zbGljZSgwKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmluZ3MsIHtcbiAgICByYXc6IHtcbiAgICAgIHZhbHVlOiBPYmplY3QuZnJlZXplKHJhdylcbiAgICB9XG4gIH0pKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcywgY3NzIGFzIGNzcyQyLCBDbGFzc05hbWVzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXknO1xuaW1wb3J0IF90eXBlb2YgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkkMSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuXG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSB7XG4gICAgICBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkge1xuICAgIHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSxcbiAgICAgICAgcmVzdWx0O1xuXG4gICAgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHtcbiAgICAgIHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG4gICAgICByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICB9O1xufVxuXG52YXIgX2V4Y2x1ZGVkJDMgPSBbXCJjbGFzc05hbWVcIiwgXCJjbGVhclZhbHVlXCIsIFwiY3hcIiwgXCJnZXRTdHlsZXNcIiwgXCJnZXRWYWx1ZVwiLCBcImhhc1ZhbHVlXCIsIFwiaXNNdWx0aVwiLCBcImlzUnRsXCIsIFwib3B0aW9uc1wiLCBcInNlbGVjdE9wdGlvblwiLCBcInNlbGVjdFByb3BzXCIsIFwic2V0VmFsdWVcIiwgXCJ0aGVtZVwiXTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTk8gT1Bcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG4vLyBDbGFzcyBOYW1lIFByZWZpeGVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGNvbXBvbmVudCBzdGF0ZSBmb3Igc3R5bGluZyB3aXRoIGNsYXNzIG5hbWVzLlxuXG4gRXhwZWN0cyBhbiBhcnJheSBvZiBzdHJpbmdzIE9SIGEgc3RyaW5nL29iamVjdCBwYWlyOlxuIC0gY2xhc3NOYW1lKFsnY29tcCcsICdjb21wLWFyZycsICdjb21wLWFyZy0yJ10pXG4gICBAcmV0dXJucyAncmVhY3Qtc2VsZWN0X19jb21wIHJlYWN0LXNlbGVjdF9fY29tcC1hcmcgcmVhY3Qtc2VsZWN0X19jb21wLWFyZy0yJ1xuIC0gY2xhc3NOYW1lKCdjb21wJywgeyBzb21lOiB0cnVlLCBzdGF0ZTogZmFsc2UgfSlcbiAgIEByZXR1cm5zICdyZWFjdC1zZWxlY3RfX2NvbXAgcmVhY3Qtc2VsZWN0X19jb21wLS1zb21lJ1xuKi9cblxuZnVuY3Rpb24gYXBwbHlQcmVmaXhUb05hbWUocHJlZml4LCBuYW1lKSB7XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiBwcmVmaXg7XG4gIH0gZWxzZSBpZiAobmFtZVswXSA9PT0gJy0nKSB7XG4gICAgcmV0dXJuIHByZWZpeCArIG5hbWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHByZWZpeCArICdfXycgKyBuYW1lO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsYXNzTmFtZXMocHJlZml4LCBzdGF0ZSwgY2xhc3NOYW1lKSB7XG4gIHZhciBhcnIgPSBbY2xhc3NOYW1lXTtcblxuICBpZiAoc3RhdGUgJiYgcHJlZml4KSB7XG4gICAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzdGF0ZVtrZXldKSB7XG4gICAgICAgIGFyci5wdXNoKFwiXCIuY29uY2F0KGFwcGx5UHJlZml4VG9OYW1lKHByZWZpeCwga2V5KSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcnIuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGk7XG4gIH0pLm1hcChmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBTdHJpbmcoaSkudHJpbSgpO1xuICB9KS5qb2luKCcgJyk7XG59IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ2xlYW4gVmFsdWVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgY2xlYW5WYWx1ZSA9IGZ1bmN0aW9uIGNsZWFuVmFsdWUodmFsdWUpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWUuZmlsdGVyKEJvb2xlYW4pO1xuICBpZiAoX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSByZXR1cm4gW3ZhbHVlXTtcbiAgcmV0dXJuIFtdO1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDbGVhbiBDb21tb24gUHJvcHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgY2xlYW5Db21tb25Qcm9wcyA9IGZ1bmN0aW9uIGNsZWFuQ29tbW9uUHJvcHMocHJvcHMpIHtcbiAgLy9jbGFzc05hbWVcbiAgcHJvcHMuY2xhc3NOYW1lO1xuICAgICAgcHJvcHMuY2xlYXJWYWx1ZTtcbiAgICAgIHByb3BzLmN4O1xuICAgICAgcHJvcHMuZ2V0U3R5bGVzO1xuICAgICAgcHJvcHMuZ2V0VmFsdWU7XG4gICAgICBwcm9wcy5oYXNWYWx1ZTtcbiAgICAgIHByb3BzLmlzTXVsdGk7XG4gICAgICBwcm9wcy5pc1J0bDtcbiAgICAgIHByb3BzLm9wdGlvbnM7XG4gICAgICBwcm9wcy5zZWxlY3RPcHRpb247XG4gICAgICBwcm9wcy5zZWxlY3RQcm9wcztcbiAgICAgIHByb3BzLnNldFZhbHVlO1xuICAgICAgcHJvcHMudGhlbWU7XG4gICAgICB2YXIgaW5uZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgX2V4Y2x1ZGVkJDMpO1xuXG4gIHJldHVybiBfb2JqZWN0U3ByZWFkMih7fSwgaW5uZXJQcm9wcyk7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhhbmRsZSBJbnB1dCBDaGFuZ2Vcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShpbnB1dFZhbHVlLCBhY3Rpb25NZXRhLCBvbklucHV0Q2hhbmdlKSB7XG4gIGlmIChvbklucHV0Q2hhbmdlKSB7XG4gICAgdmFyIF9uZXdWYWx1ZSA9IG9uSW5wdXRDaGFuZ2UoaW5wdXRWYWx1ZSwgYWN0aW9uTWV0YSk7XG5cbiAgICBpZiAodHlwZW9mIF9uZXdWYWx1ZSA9PT0gJ3N0cmluZycpIHJldHVybiBfbmV3VmFsdWU7XG4gIH1cblxuICByZXR1cm4gaW5wdXRWYWx1ZTtcbn0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTY3JvbGwgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGlzRG9jdW1lbnRFbGVtZW50KGVsKSB7XG4gIHJldHVybiBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5LCB3aW5kb3ddLmluZGV4T2YoZWwpID4gLTE7XG59IC8vIE5vcm1hbGl6ZWQgU2Nyb2xsIFRvcFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZWRIZWlnaHQoZWwpIHtcbiAgaWYgKGlzRG9jdW1lbnRFbGVtZW50KGVsKSkge1xuICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICByZXR1cm4gZWwuY2xpZW50SGVpZ2h0O1xufSAvLyBOb3JtYWxpemVkIHNjcm9sbFRvICYgc2Nyb2xsVG9wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKGVsKSB7XG4gIGlmIChpc0RvY3VtZW50RWxlbWVudChlbCkpIHtcbiAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICB9XG5cbiAgcmV0dXJuIGVsLnNjcm9sbFRvcDtcbn1cbmZ1bmN0aW9uIHNjcm9sbFRvKGVsLCB0b3ApIHtcbiAgLy8gd2l0aCBhIHNjcm9sbCBkaXN0YW5jZSwgd2UgcGVyZm9ybSBzY3JvbGwgb24gdGhlIGVsZW1lbnRcbiAgaWYgKGlzRG9jdW1lbnRFbGVtZW50KGVsKSkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0b3ApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsLnNjcm9sbFRvcCA9IHRvcDtcbn0gLy8gR2V0IFNjcm9sbCBQYXJlbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICB2YXIgZXhjbHVkZVN0YXRpY1BhcmVudCA9IHN0eWxlLnBvc2l0aW9uID09PSAnYWJzb2x1dGUnO1xuICB2YXIgb3ZlcmZsb3dSeCA9IC8oYXV0b3xzY3JvbGwpLztcbiAgaWYgKHN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnKSByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIGZvciAodmFyIHBhcmVudCA9IGVsZW1lbnQ7IHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50Oykge1xuICAgIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpO1xuXG4gICAgaWYgKGV4Y2x1ZGVTdGF0aWNQYXJlbnQgJiYgc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAob3ZlcmZsb3dSeC50ZXN0KHN0eWxlLm92ZXJmbG93ICsgc3R5bGUub3ZlcmZsb3dZICsgc3R5bGUub3ZlcmZsb3dYKSkge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xufSAvLyBBbmltYXRlZCBTY3JvbGwgVG9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAgQHBhcmFtIHQ6IHRpbWUgKGVsYXBzZWQpXG4gIEBwYXJhbSBiOiBpbml0aWFsIHZhbHVlXG4gIEBwYXJhbSBjOiBhbW91bnQgb2YgY2hhbmdlXG4gIEBwYXJhbSBkOiBkdXJhdGlvblxuKi9cblxuZnVuY3Rpb24gZWFzZU91dEN1YmljKHQsIGIsIGMsIGQpIHtcbiAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKyAxKSArIGI7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVkU2Nyb2xsVG8oZWxlbWVudCwgdG8pIHtcbiAgdmFyIGR1cmF0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAyMDA7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbm9vcDtcbiAgdmFyIHN0YXJ0ID0gZ2V0U2Nyb2xsVG9wKGVsZW1lbnQpO1xuICB2YXIgY2hhbmdlID0gdG8gLSBzdGFydDtcbiAgdmFyIGluY3JlbWVudCA9IDEwO1xuICB2YXIgY3VycmVudFRpbWUgPSAwO1xuXG4gIGZ1bmN0aW9uIGFuaW1hdGVTY3JvbGwoKSB7XG4gICAgY3VycmVudFRpbWUgKz0gaW5jcmVtZW50O1xuICAgIHZhciB2YWwgPSBlYXNlT3V0Q3ViaWMoY3VycmVudFRpbWUsIHN0YXJ0LCBjaGFuZ2UsIGR1cmF0aW9uKTtcbiAgICBzY3JvbGxUbyhlbGVtZW50LCB2YWwpO1xuXG4gICAgaWYgKGN1cnJlbnRUaW1lIDwgZHVyYXRpb24pIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZVNjcm9sbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFuaW1hdGVTY3JvbGwoKTtcbn0gLy8gU2Nyb2xsIEludG8gVmlld1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHNjcm9sbEludG9WaWV3KG1lbnVFbCwgZm9jdXNlZEVsKSB7XG4gIHZhciBtZW51UmVjdCA9IG1lbnVFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIGZvY3VzZWRSZWN0ID0gZm9jdXNlZEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgb3ZlclNjcm9sbCA9IGZvY3VzZWRFbC5vZmZzZXRIZWlnaHQgLyAzO1xuXG4gIGlmIChmb2N1c2VkUmVjdC5ib3R0b20gKyBvdmVyU2Nyb2xsID4gbWVudVJlY3QuYm90dG9tKSB7XG4gICAgc2Nyb2xsVG8obWVudUVsLCBNYXRoLm1pbihmb2N1c2VkRWwub2Zmc2V0VG9wICsgZm9jdXNlZEVsLmNsaWVudEhlaWdodCAtIG1lbnVFbC5vZmZzZXRIZWlnaHQgKyBvdmVyU2Nyb2xsLCBtZW51RWwuc2Nyb2xsSGVpZ2h0KSk7XG4gIH0gZWxzZSBpZiAoZm9jdXNlZFJlY3QudG9wIC0gb3ZlclNjcm9sbCA8IG1lbnVSZWN0LnRvcCkge1xuICAgIHNjcm9sbFRvKG1lbnVFbCwgTWF0aC5tYXgoZm9jdXNlZEVsLm9mZnNldFRvcCAtIG92ZXJTY3JvbGwsIDApKTtcbiAgfVxufSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdldCBib3VuZGluZyBjbGllbnQgb2JqZWN0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGNhbm5vdCBnZXQga2V5cyB1c2luZyBhcnJheSBub3RhdGlvbiB3aXRoIERPTVJlY3RcblxuZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRPYmooZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICByaWdodDogcmVjdC5yaWdodCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHdpZHRoOiByZWN0LndpZHRoXG4gIH07XG59XG4vLyBUb3VjaCBDYXBhYmlsaXR5IERldGVjdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaXNUb3VjaENhcGFibGUoKSB7XG4gIHRyeSB7XG4gICAgZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ1RvdWNoRXZlbnQnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1vYmlsZSBEZXZpY2UgRGV0ZWN0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBpc01vYmlsZURldmljZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUGFzc2l2ZSBFdmVudCBEZXRlY3RvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBodHRwczovL2dpdGh1Yi5jb20vcmFmZ3JhcGgvZGV0ZWN0LWl0L2Jsb2IvbWFpbi9zcmMvaW5kZXgudHMjTDE5LUwzNlxuXG52YXIgcGFzc2l2ZU9wdGlvbkFjY2Vzc2VkID0gZmFsc2U7XG52YXIgb3B0aW9ucyA9IHtcbiAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgcmV0dXJuIHBhc3NpdmVPcHRpb25BY2Nlc3NlZCA9IHRydWU7XG4gIH1cblxufTsgLy8gY2hlY2sgZm9yIFNTUlxuXG52YXIgdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG5cbmlmICh3LmFkZEV2ZW50TGlzdGVuZXIgJiYgdy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gIHcuYWRkRXZlbnRMaXN0ZW5lcigncCcsIG5vb3AsIG9wdGlvbnMpO1xuICB3LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3AnLCBub29wLCBmYWxzZSk7XG59XG5cbnZhciBzdXBwb3J0c1Bhc3NpdmVFdmVudHMgPSBwYXNzaXZlT3B0aW9uQWNjZXNzZWQ7XG5mdW5jdGlvbiBub3ROdWxsaXNoKGl0ZW0pIHtcbiAgcmV0dXJuIGl0ZW0gIT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyZyk7XG59XG5mdW5jdGlvbiB2YWx1ZVRlcm5hcnkoaXNNdWx0aSwgbXVsdGlWYWx1ZSwgc2luZ2xlVmFsdWUpIHtcbiAgcmV0dXJuIGlzTXVsdGkgPyBtdWx0aVZhbHVlIDogc2luZ2xlVmFsdWU7XG59XG5mdW5jdGlvbiBzaW5nbGVWYWx1ZUFzVmFsdWUoc2luZ2xlVmFsdWUpIHtcbiAgcmV0dXJuIHNpbmdsZVZhbHVlO1xufVxuZnVuY3Rpb24gbXVsdGlWYWx1ZUFzVmFsdWUobXVsdGlWYWx1ZSkge1xuICByZXR1cm4gbXVsdGlWYWx1ZTtcbn1cbnZhciByZW1vdmVQcm9wcyA9IGZ1bmN0aW9uIHJlbW92ZVByb3BzKHByb3BzT2JqKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwcm9wZXJ0aWVzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwcm9wZXJ0aWVzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBwcm9wc01hcCA9IE9iamVjdC5lbnRyaWVzKHByb3BzT2JqKS5maWx0ZXIoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAxKSxcbiAgICAgICAga2V5ID0gX3JlZjJbMF07XG5cbiAgICByZXR1cm4gIXByb3BlcnRpZXMuaW5jbHVkZXMoa2V5KTtcbiAgfSk7XG4gIHJldHVybiBwcm9wc01hcC5yZWR1Y2UoZnVuY3Rpb24gKG5ld1Byb3BzLCBfcmVmMykge1xuICAgIHZhciBfcmVmNCA9IF9zbGljZWRUb0FycmF5KF9yZWYzLCAyKSxcbiAgICAgICAga2V5ID0gX3JlZjRbMF0sXG4gICAgICAgIHZhbCA9IF9yZWY0WzFdO1xuXG4gICAgbmV3UHJvcHNba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gbmV3UHJvcHM7XG4gIH0sIHt9KTtcbn07XG5cbmZ1bmN0aW9uIGdldE1lbnVQbGFjZW1lbnQoX3JlZikge1xuICB2YXIgbWF4SGVpZ2h0ID0gX3JlZi5tYXhIZWlnaHQsXG4gICAgICBtZW51RWwgPSBfcmVmLm1lbnVFbCxcbiAgICAgIG1pbkhlaWdodCA9IF9yZWYubWluSGVpZ2h0LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQsXG4gICAgICBzaG91bGRTY3JvbGwgPSBfcmVmLnNob3VsZFNjcm9sbCxcbiAgICAgIGlzRml4ZWRQb3NpdGlvbiA9IF9yZWYuaXNGaXhlZFBvc2l0aW9uLFxuICAgICAgdGhlbWUgPSBfcmVmLnRoZW1lO1xuICB2YXIgc3BhY2luZyA9IHRoZW1lLnNwYWNpbmc7XG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQobWVudUVsKTtcbiAgdmFyIGRlZmF1bHRTdGF0ZSA9IHtcbiAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gIH07IC8vIHNvbWV0aGluZyB3ZW50IHdyb25nLCByZXR1cm4gZGVmYXVsdCBzdGF0ZVxuXG4gIGlmICghbWVudUVsIHx8ICFtZW51RWwub2Zmc2V0UGFyZW50KSByZXR1cm4gZGVmYXVsdFN0YXRlOyAvLyB3ZSBjYW4ndCB0cnVzdCBgc2Nyb2xsUGFyZW50LnNjcm9sbEhlaWdodGAgLS0+IGl0IG1heSBpbmNyZWFzZSB3aGVuXG4gIC8vIHRoZSBtZW51IGlzIHJlbmRlcmVkXG5cbiAgdmFyIF9zY3JvbGxQYXJlbnQkZ2V0Qm91biA9IHNjcm9sbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHNjcm9sbEhlaWdodCA9IF9zY3JvbGxQYXJlbnQkZ2V0Qm91bi5oZWlnaHQ7XG5cbiAgdmFyIF9tZW51RWwkZ2V0Qm91bmRpbmdDbCA9IG1lbnVFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIG1lbnVCb3R0b20gPSBfbWVudUVsJGdldEJvdW5kaW5nQ2wuYm90dG9tLFxuICAgICAgbWVudUhlaWdodCA9IF9tZW51RWwkZ2V0Qm91bmRpbmdDbC5oZWlnaHQsXG4gICAgICBtZW51VG9wID0gX21lbnVFbCRnZXRCb3VuZGluZ0NsLnRvcDtcblxuICB2YXIgX21lbnVFbCRvZmZzZXRQYXJlbnQkID0gbWVudUVsLm9mZnNldFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGNvbnRhaW5lclRvcCA9IF9tZW51RWwkb2Zmc2V0UGFyZW50JC50b3A7XG5cbiAgdmFyIHZpZXdIZWlnaHQgPSBpc0ZpeGVkUG9zaXRpb24gPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBub3JtYWxpemVkSGVpZ2h0KHNjcm9sbFBhcmVudCk7XG4gIHZhciBzY3JvbGxUb3AgPSBnZXRTY3JvbGxUb3Aoc2Nyb2xsUGFyZW50KTtcbiAgdmFyIG1hcmdpbkJvdHRvbSA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobWVudUVsKS5tYXJnaW5Cb3R0b20sIDEwKTtcbiAgdmFyIG1hcmdpblRvcCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobWVudUVsKS5tYXJnaW5Ub3AsIDEwKTtcbiAgdmFyIHZpZXdTcGFjZUFib3ZlID0gY29udGFpbmVyVG9wIC0gbWFyZ2luVG9wO1xuICB2YXIgdmlld1NwYWNlQmVsb3cgPSB2aWV3SGVpZ2h0IC0gbWVudVRvcDtcbiAgdmFyIHNjcm9sbFNwYWNlQWJvdmUgPSB2aWV3U3BhY2VBYm92ZSArIHNjcm9sbFRvcDtcbiAgdmFyIHNjcm9sbFNwYWNlQmVsb3cgPSBzY3JvbGxIZWlnaHQgLSBzY3JvbGxUb3AgLSBtZW51VG9wO1xuICB2YXIgc2Nyb2xsRG93biA9IG1lbnVCb3R0b20gLSB2aWV3SGVpZ2h0ICsgc2Nyb2xsVG9wICsgbWFyZ2luQm90dG9tO1xuICB2YXIgc2Nyb2xsVXAgPSBzY3JvbGxUb3AgKyBtZW51VG9wIC0gbWFyZ2luVG9wO1xuICB2YXIgc2Nyb2xsRHVyYXRpb24gPSAxNjA7XG5cbiAgc3dpdGNoIChwbGFjZW1lbnQpIHtcbiAgICBjYXNlICdhdXRvJzpcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgLy8gMTogdGhlIG1lbnUgd2lsbCBmaXQsIGRvIG5vdGhpbmdcbiAgICAgIGlmICh2aWV3U3BhY2VCZWxvdyA+PSBtZW51SGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfSAvLyAyOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgc2Nyb2xsZWRcblxuXG4gICAgICBpZiAoc2Nyb2xsU3BhY2VCZWxvdyA+PSBtZW51SGVpZ2h0ICYmICFpc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHNob3VsZFNjcm9sbCkge1xuICAgICAgICAgIGFuaW1hdGVkU2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxEb3duLCBzY3JvbGxEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gMzogdGhlIG1lbnUgd2lsbCBmaXQsIGlmIGNvbnN0cmFpbmVkXG5cblxuICAgICAgaWYgKCFpc0ZpeGVkUG9zaXRpb24gJiYgc2Nyb2xsU3BhY2VCZWxvdyA+PSBtaW5IZWlnaHQgfHwgaXNGaXhlZFBvc2l0aW9uICYmIHZpZXdTcGFjZUJlbG93ID49IG1pbkhlaWdodCkge1xuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgYW5pbWF0ZWRTY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbERvd24sIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfSAvLyB3ZSB3YW50IHRvIHByb3ZpZGUgYXMgbXVjaCBvZiB0aGUgbWVudSBhcyBwb3NzaWJsZSB0byB0aGUgdXNlcixcbiAgICAgICAgLy8gc28gZ2l2ZSB0aGVtIHdoYXRldmVyIGlzIGF2YWlsYWJsZSBiZWxvdyByYXRoZXIgdGhhbiB0aGUgbWluSGVpZ2h0LlxuXG5cbiAgICAgICAgdmFyIGNvbnN0cmFpbmVkSGVpZ2h0ID0gaXNGaXhlZFBvc2l0aW9uID8gdmlld1NwYWNlQmVsb3cgLSBtYXJnaW5Cb3R0b20gOiBzY3JvbGxTcGFjZUJlbG93IC0gbWFyZ2luQm90dG9tO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBjb25zdHJhaW5lZEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfSAvLyA0LiBGb3JrZWQgYmV2aW91ciB3aGVuIHRoZXJlIGlzbid0IGVub3VnaCBzcGFjZSBiZWxvd1xuICAgICAgLy8gQVVUTzogZmxpcCB0aGUgbWVudSwgcmVuZGVyIGFib3ZlXG5cblxuICAgICAgaWYgKHBsYWNlbWVudCA9PT0gJ2F1dG8nIHx8IGlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICAvLyBtYXkgbmVlZCB0byBiZSBjb25zdHJhaW5lZCBhZnRlciBmbGlwcGluZ1xuICAgICAgICB2YXIgX2NvbnN0cmFpbmVkSGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgICAgICB2YXIgc3BhY2VBYm92ZSA9IGlzRml4ZWRQb3NpdGlvbiA/IHZpZXdTcGFjZUFib3ZlIDogc2Nyb2xsU3BhY2VBYm92ZTtcblxuICAgICAgICBpZiAoc3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQpIHtcbiAgICAgICAgICBfY29uc3RyYWluZWRIZWlnaHQgPSBNYXRoLm1pbihzcGFjZUFib3ZlIC0gbWFyZ2luQm90dG9tIC0gc3BhY2luZy5jb250cm9sSGVpZ2h0LCBtYXhIZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgIG1heEhlaWdodDogX2NvbnN0cmFpbmVkSGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IC8vIEJPVFRPTTogYWxsb3cgYnJvd3NlciB0byBpbmNyZWFzZSBzY3JvbGxhYmxlIGFyZWEgYW5kIGltbWVkaWF0ZWx5IHNldCBzY3JvbGxcblxuXG4gICAgICBpZiAocGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgc2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxEb3duKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3RvcCc6XG4gICAgICAvLyAxOiB0aGUgbWVudSB3aWxsIGZpdCwgZG8gbm90aGluZ1xuICAgICAgaWYgKHZpZXdTcGFjZUFib3ZlID49IG1lbnVIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IC8vIDI6IHRoZSBtZW51IHdpbGwgZml0LCBpZiBzY3JvbGxlZFxuXG5cbiAgICAgIGlmIChzY3JvbGxTcGFjZUFib3ZlID49IG1lbnVIZWlnaHQgJiYgIWlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgYW5pbWF0ZWRTY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbFVwLCBzY3JvbGxEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gMzogdGhlIG1lbnUgd2lsbCBmaXQsIGlmIGNvbnN0cmFpbmVkXG5cblxuICAgICAgaWYgKCFpc0ZpeGVkUG9zaXRpb24gJiYgc2Nyb2xsU3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQgfHwgaXNGaXhlZFBvc2l0aW9uICYmIHZpZXdTcGFjZUFib3ZlID49IG1pbkhlaWdodCkge1xuICAgICAgICB2YXIgX2NvbnN0cmFpbmVkSGVpZ2h0MiA9IG1heEhlaWdodDsgLy8gd2Ugd2FudCB0byBwcm92aWRlIGFzIG11Y2ggb2YgdGhlIG1lbnUgYXMgcG9zc2libGUgdG8gdGhlIHVzZXIsXG4gICAgICAgIC8vIHNvIGdpdmUgdGhlbSB3aGF0ZXZlciBpcyBhdmFpbGFibGUgYmVsb3cgcmF0aGVyIHRoYW4gdGhlIG1pbkhlaWdodC5cblxuICAgICAgICBpZiAoIWlzRml4ZWRQb3NpdGlvbiAmJiBzY3JvbGxTcGFjZUFib3ZlID49IG1pbkhlaWdodCB8fCBpc0ZpeGVkUG9zaXRpb24gJiYgdmlld1NwYWNlQWJvdmUgPj0gbWluSGVpZ2h0KSB7XG4gICAgICAgICAgX2NvbnN0cmFpbmVkSGVpZ2h0MiA9IGlzRml4ZWRQb3NpdGlvbiA/IHZpZXdTcGFjZUFib3ZlIC0gbWFyZ2luVG9wIDogc2Nyb2xsU3BhY2VBYm92ZSAtIG1hcmdpblRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBhbmltYXRlZFNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsVXAsIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IF9jb25zdHJhaW5lZEhlaWdodDJcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gNC4gbm90IGVub3VnaCBzcGFjZSwgdGhlIGJyb3dzZXIgV0lMTCBOT1QgaW5jcmVhc2Ugc2Nyb2xsYWJsZSBhcmVhIHdoZW5cbiAgICAgIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZCBlbGVtZW50IHJlbmRlcmVkIGFib3ZlIHRoZSB2aWV3cG9ydCAob25seSBiZWxvdykuXG4gICAgICAvLyBGbGlwIHRoZSBtZW51LCByZW5kZXIgYmVsb3dcblxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBsYWNlbWVudCBwcm92aWRlZCBcXFwiXCIuY29uY2F0KHBsYWNlbWVudCwgXCJcXFwiLlwiKSk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFN0YXRlO1xufSAvLyBNZW51IENvbXBvbmVudFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGFsaWduVG9Db250cm9sKHBsYWNlbWVudCkge1xuICB2YXIgcGxhY2VtZW50VG9DU1NQcm9wID0ge1xuICAgIGJvdHRvbTogJ3RvcCcsXG4gICAgdG9wOiAnYm90dG9tJ1xuICB9O1xuICByZXR1cm4gcGxhY2VtZW50ID8gcGxhY2VtZW50VG9DU1NQcm9wW3BsYWNlbWVudF0gOiAnYm90dG9tJztcbn1cblxudmFyIGNvZXJjZVBsYWNlbWVudCA9IGZ1bmN0aW9uIGNvZXJjZVBsYWNlbWVudChwKSB7XG4gIHJldHVybiBwID09PSAnYXV0bycgPyAnYm90dG9tJyA6IHA7XG59O1xuXG52YXIgbWVudUNTUyA9IGZ1bmN0aW9uIG1lbnVDU1MoX3JlZjIpIHtcbiAgdmFyIF9yZWYzO1xuXG4gIHZhciBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICBfcmVmMiR0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX3JlZjIkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgc3BhY2luZyA9IF9yZWYyJHRoZW1lLnNwYWNpbmcsXG4gICAgICBjb2xvcnMgPSBfcmVmMiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfcmVmMyA9IHtcbiAgICBsYWJlbDogJ21lbnUnXG4gIH0sIF9kZWZpbmVQcm9wZXJ0eSQxKF9yZWYzLCBhbGlnblRvQ29udHJvbChwbGFjZW1lbnQpLCAnMTAwJScpLCBfZGVmaW5lUHJvcGVydHkkMShfcmVmMywgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgY29sb3JzLm5ldXRyYWwwKSwgX2RlZmluZVByb3BlcnR5JDEoX3JlZjMsIFwiYm9yZGVyUmFkaXVzXCIsIGJvcmRlclJhZGl1cyksIF9kZWZpbmVQcm9wZXJ0eSQxKF9yZWYzLCBcImJveFNoYWRvd1wiLCAnMCAwIDAgMXB4IGhzbGEoMCwgMCUsIDAlLCAwLjEpLCAwIDRweCAxMXB4IGhzbGEoMCwgMCUsIDAlLCAwLjEpJyksIF9kZWZpbmVQcm9wZXJ0eSQxKF9yZWYzLCBcIm1hcmdpbkJvdHRvbVwiLCBzcGFjaW5nLm1lbnVHdXR0ZXIpLCBfZGVmaW5lUHJvcGVydHkkMShfcmVmMywgXCJtYXJnaW5Ub3BcIiwgc3BhY2luZy5tZW51R3V0dGVyKSwgX2RlZmluZVByb3BlcnR5JDEoX3JlZjMsIFwicG9zaXRpb25cIiwgJ2Fic29sdXRlJyksIF9kZWZpbmVQcm9wZXJ0eSQxKF9yZWYzLCBcIndpZHRoXCIsICcxMDAlJyksIF9kZWZpbmVQcm9wZXJ0eSQxKF9yZWYzLCBcInpJbmRleFwiLCAxKSwgX3JlZjM7XG59O1xudmFyIFBvcnRhbFBsYWNlbWVudENvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dCh7XG4gIGdldFBvcnRhbFBsYWNlbWVudDogbnVsbFxufSk7IC8vIE5PVEU6IGludGVybmFsIG9ubHlcblxudmFyIE1lbnVQbGFjZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1lbnVQbGFjZXIsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWVudVBsYWNlcik7XG5cbiAgZnVuY3Rpb24gTWVudVBsYWNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVudVBsYWNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgbWF4SGVpZ2h0OiBfdGhpcy5wcm9wcy5tYXhNZW51SGVpZ2h0LFxuICAgICAgcGxhY2VtZW50OiBudWxsXG4gICAgfTtcbiAgICBfdGhpcy5jb250ZXh0ID0gdm9pZCAwO1xuXG4gICAgX3RoaXMuZ2V0UGxhY2VtZW50ID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgbWluTWVudUhlaWdodCA9IF90aGlzJHByb3BzLm1pbk1lbnVIZWlnaHQsXG4gICAgICAgICAgbWF4TWVudUhlaWdodCA9IF90aGlzJHByb3BzLm1heE1lbnVIZWlnaHQsXG4gICAgICAgICAgbWVudVBsYWNlbWVudCA9IF90aGlzJHByb3BzLm1lbnVQbGFjZW1lbnQsXG4gICAgICAgICAgbWVudVBvc2l0aW9uID0gX3RoaXMkcHJvcHMubWVudVBvc2l0aW9uLFxuICAgICAgICAgIG1lbnVTaG91bGRTY3JvbGxJbnRvVmlldyA9IF90aGlzJHByb3BzLm1lbnVTaG91bGRTY3JvbGxJbnRvVmlldyxcbiAgICAgICAgICB0aGVtZSA9IF90aGlzJHByb3BzLnRoZW1lO1xuICAgICAgaWYgKCFyZWYpIHJldHVybjsgLy8gRE8gTk9UIHNjcm9sbCBpZiBwb3NpdGlvbiBpcyBmaXhlZFxuXG4gICAgICB2YXIgaXNGaXhlZFBvc2l0aW9uID0gbWVudVBvc2l0aW9uID09PSAnZml4ZWQnO1xuICAgICAgdmFyIHNob3VsZFNjcm9sbCA9IG1lbnVTaG91bGRTY3JvbGxJbnRvVmlldyAmJiAhaXNGaXhlZFBvc2l0aW9uO1xuICAgICAgdmFyIHN0YXRlID0gZ2V0TWVudVBsYWNlbWVudCh7XG4gICAgICAgIG1heEhlaWdodDogbWF4TWVudUhlaWdodCxcbiAgICAgICAgbWVudUVsOiByZWYsXG4gICAgICAgIG1pbkhlaWdodDogbWluTWVudUhlaWdodCxcbiAgICAgICAgcGxhY2VtZW50OiBtZW51UGxhY2VtZW50LFxuICAgICAgICBzaG91bGRTY3JvbGw6IHNob3VsZFNjcm9sbCxcbiAgICAgICAgaXNGaXhlZFBvc2l0aW9uOiBpc0ZpeGVkUG9zaXRpb24sXG4gICAgICAgIHRoZW1lOiB0aGVtZVxuICAgICAgfSk7XG4gICAgICB2YXIgZ2V0UG9ydGFsUGxhY2VtZW50ID0gX3RoaXMuY29udGV4dC5nZXRQb3J0YWxQbGFjZW1lbnQ7XG4gICAgICBpZiAoZ2V0UG9ydGFsUGxhY2VtZW50KSBnZXRQb3J0YWxQbGFjZW1lbnQoc3RhdGUpO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldFVwZGF0ZWRQcm9wcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBtZW51UGxhY2VtZW50ID0gX3RoaXMucHJvcHMubWVudVBsYWNlbWVudDtcbiAgICAgIHZhciBwbGFjZW1lbnQgPSBfdGhpcy5zdGF0ZS5wbGFjZW1lbnQgfHwgY29lcmNlUGxhY2VtZW50KG1lbnVQbGFjZW1lbnQpO1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBfdGhpcy5wcm9wcyksIHt9LCB7XG4gICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICBtYXhIZWlnaHQ6IF90aGlzLnN0YXRlLm1heEhlaWdodFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNZW51UGxhY2VyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICAgIHJldHVybiBjaGlsZHJlbih7XG4gICAgICAgIHJlZjogdGhpcy5nZXRQbGFjZW1lbnQsXG4gICAgICAgIHBsYWNlclByb3BzOiB0aGlzLmdldFVwZGF0ZWRQcm9wcygpXG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWVudVBsYWNlcjtcbn0oQ29tcG9uZW50KTtcbk1lbnVQbGFjZXIuY29udGV4dFR5cGUgPSBQb3J0YWxQbGFjZW1lbnRDb250ZXh0O1xuXG52YXIgTWVudSA9IGZ1bmN0aW9uIE1lbnUocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IGdldFN0eWxlcygnbWVudScsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIG1lbnU6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG4vLyBNZW51IExpc3Rcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgbWVudUxpc3RDU1MgPSBmdW5jdGlvbiBtZW51TGlzdENTUyhfcmVmNCkge1xuICB2YXIgbWF4SGVpZ2h0ID0gX3JlZjQubWF4SGVpZ2h0LFxuICAgICAgYmFzZVVuaXQgPSBfcmVmNC50aGVtZS5zcGFjaW5nLmJhc2VVbml0O1xuICByZXR1cm4ge1xuICAgIG1heEhlaWdodDogbWF4SGVpZ2h0LFxuICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgIHBhZGRpbmdCb3R0b206IGJhc2VVbml0LFxuICAgIHBhZGRpbmdUb3A6IGJhc2VVbml0LFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIC8vIHJlcXVpcmVkIGZvciBvZmZzZXRbSGVpZ2h0LCBUb3BdID4ga2V5Ym9hcmQgc2Nyb2xsXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCdcbiAgfTtcbn07XG52YXIgTWVudUxpc3QgPSBmdW5jdGlvbiBNZW51TGlzdChwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBpc011bHRpID0gcHJvcHMuaXNNdWx0aTtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ21lbnVMaXN0JywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ21lbnUtbGlzdCc6IHRydWUsXG4gICAgICAnbWVudS1saXN0LS1pcy1tdWx0aSc6IGlzTXVsdGlcbiAgICB9LCBjbGFzc05hbWUpLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVudSBOb3RpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG5vdGljZUNTUyA9IGZ1bmN0aW9uIG5vdGljZUNTUyhfcmVmNSkge1xuICB2YXIgX3JlZjUkdGhlbWUgPSBfcmVmNS50aGVtZSxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjUkdGhlbWUuc3BhY2luZy5iYXNlVW5pdCxcbiAgICAgIGNvbG9ycyA9IF9yZWY1JHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw0MCxcbiAgICBwYWRkaW5nOiBcIlwiLmNvbmNhdChiYXNlVW5pdCAqIDIsIFwicHggXCIpLmNvbmNhdChiYXNlVW5pdCAqIDMsIFwicHhcIiksXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICB9O1xufTtcblxudmFyIG5vT3B0aW9uc01lc3NhZ2VDU1MgPSBub3RpY2VDU1M7XG52YXIgbG9hZGluZ01lc3NhZ2VDU1MgPSBub3RpY2VDU1M7XG52YXIgTm9PcHRpb25zTWVzc2FnZSA9IGZ1bmN0aW9uIE5vT3B0aW9uc01lc3NhZ2UocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdub09wdGlvbnNNZXNzYWdlJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ21lbnUtbm90aWNlJzogdHJ1ZSxcbiAgICAgICdtZW51LW5vdGljZS0tbm8tb3B0aW9ucyc6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuTm9PcHRpb25zTWVzc2FnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiAnTm8gb3B0aW9ucydcbn07XG52YXIgTG9hZGluZ01lc3NhZ2UgPSBmdW5jdGlvbiBMb2FkaW5nTWVzc2FnZShwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2xvYWRpbmdNZXNzYWdlJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ21lbnUtbm90aWNlJzogdHJ1ZSxcbiAgICAgICdtZW51LW5vdGljZS0tbG9hZGluZyc6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuTG9hZGluZ01lc3NhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogJ0xvYWRpbmcuLi4nXG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lbnUgUG9ydGFsXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG1lbnVQb3J0YWxDU1MgPSBmdW5jdGlvbiBtZW51UG9ydGFsQ1NTKF9yZWY2KSB7XG4gIHZhciByZWN0ID0gX3JlZjYucmVjdCxcbiAgICAgIG9mZnNldCA9IF9yZWY2Lm9mZnNldCxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjYucG9zaXRpb247XG4gIHJldHVybiB7XG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICB0b3A6IG9mZnNldCxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICB6SW5kZXg6IDFcbiAgfTtcbn07XG52YXIgTWVudVBvcnRhbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKE1lbnVQb3J0YWwsIF9Db21wb25lbnQyKTtcblxuICB2YXIgX3N1cGVyMiA9IF9jcmVhdGVTdXBlcihNZW51UG9ydGFsKTtcblxuICBmdW5jdGlvbiBNZW51UG9ydGFsKCkge1xuICAgIHZhciBfdGhpczI7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVudVBvcnRhbCk7XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBfdGhpczIgPSBfc3VwZXIyLmNhbGwuYXBwbHkoX3N1cGVyMiwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gICAgX3RoaXMyLnN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiBudWxsXG4gICAgfTtcblxuICAgIF90aGlzMi5nZXRQb3J0YWxQbGFjZW1lbnQgPSBmdW5jdGlvbiAoX3JlZjcpIHtcbiAgICAgIHZhciBwbGFjZW1lbnQgPSBfcmVmNy5wbGFjZW1lbnQ7XG4gICAgICB2YXIgaW5pdGlhbFBsYWNlbWVudCA9IGNvZXJjZVBsYWNlbWVudChfdGhpczIucHJvcHMubWVudVBsYWNlbWVudCk7IC8vIGF2b2lkIHJlLXJlbmRlcnMgaWYgdGhlIHBsYWNlbWVudCBoYXMgbm90IGNoYW5nZWRcblxuICAgICAgaWYgKHBsYWNlbWVudCAhPT0gaW5pdGlhbFBsYWNlbWVudCkge1xuICAgICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1lbnVQb3J0YWwsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhcHBlbmRUbyA9IF90aGlzJHByb3BzMi5hcHBlbmRUbyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICAgIGNvbnRyb2xFbGVtZW50ID0gX3RoaXMkcHJvcHMyLmNvbnRyb2xFbGVtZW50LFxuICAgICAgICAgIGN4ID0gX3RoaXMkcHJvcHMyLmN4LFxuICAgICAgICAgIGlubmVyUHJvcHMgPSBfdGhpcyRwcm9wczIuaW5uZXJQcm9wcyxcbiAgICAgICAgICBtZW51UGxhY2VtZW50ID0gX3RoaXMkcHJvcHMyLm1lbnVQbGFjZW1lbnQsXG4gICAgICAgICAgcG9zaXRpb24gPSBfdGhpcyRwcm9wczIubWVudVBvc2l0aW9uLFxuICAgICAgICAgIGdldFN0eWxlcyA9IF90aGlzJHByb3BzMi5nZXRTdHlsZXM7XG4gICAgICB2YXIgaXNGaXhlZCA9IHBvc2l0aW9uID09PSAnZml4ZWQnOyAvLyBiYWlsIGVhcmx5IGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZW4ndCBwcmVzZW50XG5cbiAgICAgIGlmICghYXBwZW5kVG8gJiYgIWlzRml4ZWQgfHwgIWNvbnRyb2xFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGxhY2VtZW50ID0gdGhpcy5zdGF0ZS5wbGFjZW1lbnQgfHwgY29lcmNlUGxhY2VtZW50KG1lbnVQbGFjZW1lbnQpO1xuICAgICAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudE9iaihjb250cm9sRWxlbWVudCk7XG4gICAgICB2YXIgc2Nyb2xsRGlzdGFuY2UgPSBpc0ZpeGVkID8gMCA6IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgIHZhciBvZmZzZXQgPSByZWN0W3BsYWNlbWVudF0gKyBzY3JvbGxEaXN0YW5jZTtcbiAgICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgcmVjdDogcmVjdFxuICAgICAgfTsgLy8gc2FtZSB3cmFwcGVyIGVsZW1lbnQgd2hldGhlciBmaXhlZCBvciBwb3J0YWxsZWRcblxuICAgICAgdmFyIG1lbnVXcmFwcGVyID0ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICAgICAgY3NzOiBnZXRTdHlsZXMoJ21lbnVQb3J0YWwnLCBzdGF0ZSksXG4gICAgICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgICAgICdtZW51LXBvcnRhbCc6IHRydWVcbiAgICAgICAgfSwgY2xhc3NOYW1lKVxuICAgICAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbiAgICAgIHJldHVybiBqc3goUG9ydGFsUGxhY2VtZW50Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGdldFBvcnRhbFBsYWNlbWVudDogdGhpcy5nZXRQb3J0YWxQbGFjZW1lbnRcbiAgICAgICAgfVxuICAgICAgfSwgYXBwZW5kVG8gPyAvKiNfX1BVUkVfXyovY3JlYXRlUG9ydGFsKG1lbnVXcmFwcGVyLCBhcHBlbmRUbykgOiBtZW51V3JhcHBlcik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1lbnVQb3J0YWw7XG59KENvbXBvbmVudCk7XG5cbnZhciBjb250YWluZXJDU1MgPSBmdW5jdGlvbiBjb250YWluZXJDU1MoX3JlZikge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICAgIGlzUnRsID0gX3JlZi5pc1J0bDtcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2NvbnRhaW5lcicsXG4gICAgZGlyZWN0aW9uOiBpc1J0bCA/ICdydGwnIDogdW5kZWZpbmVkLFxuICAgIHBvaW50ZXJFdmVudHM6IGlzRGlzYWJsZWQgPyAnbm9uZScgOiB1bmRlZmluZWQsXG4gICAgLy8gY2FuY2VsIG1vdXNlIGV2ZW50cyB3aGVuIGRpc2FibGVkXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfTtcbn07XG52YXIgU2VsZWN0Q29udGFpbmVyID0gZnVuY3Rpb24gU2VsZWN0Q29udGFpbmVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzLFxuICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICBpc1J0bCA9IHByb3BzLmlzUnRsO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IGdldFN0eWxlcygnY29udGFpbmVyJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJy0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICAgJy0taXMtcnRsJzogaXNSdGxcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZhbHVlIENvbnRhaW5lclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciB2YWx1ZUNvbnRhaW5lckNTUyA9IGZ1bmN0aW9uIHZhbHVlQ29udGFpbmVyQ1NTKF9yZWYyKSB7XG4gIHZhciBzcGFjaW5nID0gX3JlZjIudGhlbWUuc3BhY2luZyxcbiAgICAgIGlzTXVsdGkgPSBfcmVmMi5pc011bHRpLFxuICAgICAgaGFzVmFsdWUgPSBfcmVmMi5oYXNWYWx1ZSxcbiAgICAgIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSA9IF9yZWYyLnNlbGVjdFByb3BzLmNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZTtcbiAgcmV0dXJuIHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiBpc011bHRpICYmIGhhc1ZhbHVlICYmIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSA/ICdmbGV4JyA6ICdncmlkJyxcbiAgICBmbGV4OiAxLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgcGFkZGluZzogXCJcIi5jb25jYXQoc3BhY2luZy5iYXNlVW5pdCAvIDIsIFwicHggXCIpLmNvbmNhdChzcGFjaW5nLmJhc2VVbml0ICogMiwgXCJweFwiKSxcbiAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfTtcbn07XG52YXIgVmFsdWVDb250YWluZXIgPSBmdW5jdGlvbiBWYWx1ZUNvbnRhaW5lcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICAgIGlzTXVsdGkgPSBwcm9wcy5pc011bHRpLFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaGFzVmFsdWUgPSBwcm9wcy5oYXNWYWx1ZTtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ3ZhbHVlQ29udGFpbmVyJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ3ZhbHVlLWNvbnRhaW5lcic6IHRydWUsXG4gICAgICAndmFsdWUtY29udGFpbmVyLS1pcy1tdWx0aSc6IGlzTXVsdGksXG4gICAgICAndmFsdWUtY29udGFpbmVyLS1oYXMtdmFsdWUnOiBoYXNWYWx1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSW5kaWNhdG9yIENvbnRhaW5lclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBpbmRpY2F0b3JzQ29udGFpbmVyQ1NTID0gZnVuY3Rpb24gaW5kaWNhdG9yc0NvbnRhaW5lckNTUygpIHtcbiAgcmV0dXJuIHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFNocmluazogMFxuICB9O1xufTtcbnZhciBJbmRpY2F0b3JzQ29udGFpbmVyID0gZnVuY3Rpb24gSW5kaWNhdG9yc0NvbnRhaW5lcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2luZGljYXRvcnNDb250YWluZXInLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBpbmRpY2F0b3JzOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxudmFyIF90ZW1wbGF0ZU9iamVjdDtcblxudmFyIF9leGNsdWRlZCQyID0gW1wic2l6ZVwiXTtcblxuZnVuY3Rpb24gX0VNT1RJT05fU1RSSU5HSUZJRURfQ1NTX0VSUk9SX18oKSB7IHJldHVybiBcIllvdSBoYXZlIHRyaWVkIHRvIHN0cmluZ2lmeSBvYmplY3QgcmV0dXJuZWQgZnJvbSBgY3NzYCBmdW5jdGlvbi4gSXQgaXNuJ3Qgc3VwcG9zZWQgdG8gYmUgdXNlZCBkaXJlY3RseSAoZS5nLiBhcyB2YWx1ZSBvZiB0aGUgYGNsYXNzTmFtZWAgcHJvcCksIGJ1dCByYXRoZXIgaGFuZGVkIHRvIGVtb3Rpb24gc28gaXQgY2FuIGhhbmRsZSBpdCAoZS5nLiBhcyB2YWx1ZSBvZiBgY3NzYCBwcm9wKS5cIjsgfVxuXG52YXIgX3JlZjIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIG5hbWU6IFwiOG1ta2NnXCIsXG4gIHN0eWxlczogXCJkaXNwbGF5OmlubGluZS1ibG9jaztmaWxsOmN1cnJlbnRDb2xvcjtsaW5lLWhlaWdodDoxO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjBcIlxufSA6IHtcbiAgbmFtZTogXCJ0ajViZGUtU3ZnXCIsXG4gIHN0eWxlczogXCJkaXNwbGF5OmlubGluZS1ibG9jaztmaWxsOmN1cnJlbnRDb2xvcjtsaW5lLWhlaWdodDoxO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjA7bGFiZWw6U3ZnO1wiLFxuICBtYXA6IFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1sdVpHbGpZWFJ2Y25NdWRITjRJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRWGRDU1NJc0ltWnBiR1VpT2lKcGJtUnBZMkYwYjNKekxuUnplQ0lzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtpQkFhbk40SUdwemVDQXFMMXh1YVcxd2IzSjBJSHNnVW1WaFkzUk9iMlJsSUgwZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHNnYW5ONExDQnJaWGxtY21GdFpYTWdmU0JtY205dElDZEFaVzF2ZEdsdmJpOXlaV0ZqZENjN1hHNWNibWx0Y0c5eWRDQjdYRzRnSUVOdmJXMXZibEJ5YjNCelFXNWtRMnhoYzNOT1lXMWxMRnh1SUNCRFUxTlBZbXBsWTNSWGFYUm9UR0ZpWld3c1hHNGdJRWR5YjNWd1FtRnpaU3hjYm4wZ1puSnZiU0FuTGk0dmRIbHdaWE1uTzF4dVhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JpOHZJRVJ5YjNCa2IzZHVJQ1lnUTJ4bFlYSWdTV052Ym5OY2JpOHZJRDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4dVhHNWpiMjV6ZENCVGRtY2dQU0FvZTF4dUlDQnphWHBsTEZ4dUlDQXVMaTV3Y205d2MxeHVmVG9nU2xOWUxrbHVkSEpwYm5OcFkwVnNaVzFsYm5Seld5ZHpkbWNuWFNBbUlIc2djMmw2WlRvZ2JuVnRZbVZ5SUgwcElEMCtJQ2hjYmlBZ1BITjJaMXh1SUNBZ0lHaGxhV2RvZEQxN2MybDZaWDFjYmlBZ0lDQjNhV1IwYUQxN2MybDZaWDFjYmlBZ0lDQjJhV1YzUW05NFBWd2lNQ0F3SURJd0lESXdYQ0pjYmlBZ0lDQmhjbWxoTFdocFpHUmxiajFjSW5SeWRXVmNJbHh1SUNBZ0lHWnZZM1Z6WVdKc1pUMWNJbVpoYkhObFhDSmNiaUFnSUNCamMzTTllM3RjYmlBZ0lDQWdJR1JwYzNCc1lYazZJQ2RwYm14cGJtVXRZbXh2WTJzbkxGeHVJQ0FnSUNBZ1ptbHNiRG9nSjJOMWNuSmxiblJEYjJ4dmNpY3NYRzRnSUNBZ0lDQnNhVzVsU0dWcFoyaDBPaUF4TEZ4dUlDQWdJQ0FnYzNSeWIydGxPaUFuWTNWeWNtVnVkRU52Ykc5eUp5eGNiaUFnSUNBZ0lITjBjbTlyWlZkcFpIUm9PaUF3TEZ4dUlDQWdJSDE5WEc0Z0lDQWdleTR1TG5CeWIzQnpmVnh1SUNBdlBseHVLVHRjYmx4dVpYaHdiM0owSUhSNWNHVWdRM0p2YzNOSlkyOXVVSEp2Y0hNZ1BTQktVMWd1U1c1MGNtbHVjMmxqUld4bGJXVnVkSE5iSjNOMlp5ZGRJQ1lnZXlCemFYcGxQem9nYm5WdFltVnlJSDA3WEc1bGVIQnZjblFnWTI5dWMzUWdRM0p2YzNOSlkyOXVJRDBnS0hCeWIzQnpPaUJEY205emMwbGpiMjVRY205d2N5a2dQVDRnS0Z4dUlDQThVM1puSUhOcGVtVTllekl3ZlNCN0xpNHVjSEp2Y0hOOVBseHVJQ0FnSUR4d1lYUm9JR1E5WENKTk1UUXVNelE0SURFMExqZzBPV010TUM0ME5qa2dNQzQwTmprdE1TNHlNamtnTUM0ME5qa3RNUzQyT1RjZ01Hd3RNaTQyTlRFdE15NHdNekF0TWk0Mk5URWdNeTR3TWpsakxUQXVORFk1SURBdU5EWTVMVEV1TWpJNUlEQXVORFk1TFRFdU5qazNJREF0TUM0ME5qa3RNQzQwTmprdE1DNDBOamt0TVM0eU1qa2dNQzB4TGpZNU4yd3lMamMxT0MwekxqRTFMVEl1TnpVNUxUTXVNVFV5WXkwd0xqUTJPUzB3TGpRMk9TMHdMalEyT1MweExqSXlPQ0F3TFRFdU5qazNjekV1TWpJNExUQXVORFk1SURFdU5qazNJREJzTWk0Mk5USWdNeTR3TXpFZ01pNDJOVEV0TXk0d016RmpNQzQwTmprdE1DNDBOamtnTVM0eU1qZ3RNQzQwTmprZ01TNDJPVGNnTUhNd0xqUTJPU0F4TGpJeU9TQXdJREV1TmprM2JDMHlMamMxT0NBekxqRTFNaUF5TGpjMU9DQXpMakUxWXpBdU5EWTVJREF1TkRZNUlEQXVORFk1SURFdU1qSTVJREFnTVM0Mk9UaDZYQ0lnTHo1Y2JpQWdQQzlUZG1jK1hHNHBPMXh1Wlhod2IzSjBJSFI1Y0dVZ1JHOTNia05vWlhaeWIyNVFjbTl3Y3lBOUlFcFRXQzVKYm5SeWFXNXphV05GYkdWdFpXNTBjMXNuYzNabkoxMGdKaUI3SUhOcGVtVS9PaUJ1ZFcxaVpYSWdmVHRjYm1WNGNHOXlkQ0JqYjI1emRDQkViM2R1UTJobGRuSnZiaUE5SUNod2NtOXdjem9nUkc5M2JrTm9aWFp5YjI1UWNtOXdjeWtnUFQ0Z0tGeHVJQ0E4VTNabklITnBlbVU5ZXpJd2ZTQjdMaTR1Y0hKdmNITjlQbHh1SUNBZ0lEeHdZWFJvSUdROVhDSk5OQzQxTVRZZ055NDFORGhqTUM0ME16WXRNQzQwTkRZZ01TNHdORE10TUM0ME9ERWdNUzQxTnpZZ01Hd3pMamt3T0NBekxqYzBOeUF6TGprd09DMHpMamMwTjJNd0xqVXpNeTB3TGpRNE1TQXhMakUwTVMwd0xqUTBOaUF4TGpVM05DQXdJREF1TkRNMklEQXVORFExSURBdU5EQTRJREV1TVRrM0lEQWdNUzQyTVRVdE1DNDBNRFlnTUM0ME1UZ3ROQzQyT1RVZ05DNDFNREl0TkM0Mk9UVWdOQzQxTURJdE1DNHlNVGNnTUM0eU1qTXRNQzQxTURJZ01DNHpNelV0TUM0M09EY2dNQzR6TXpWekxUQXVOVGN0TUM0eE1USXRNQzQzT0RrdE1DNHpNelZqTUNBd0xUUXVNamczTFRRdU1EZzBMVFF1TmprMUxUUXVOVEF5Y3kwd0xqUXpOaTB4TGpFM0lEQXRNUzQyTVRWNlhDSWdMejVjYmlBZ1BDOVRkbWMrWEc0cE8xeHVYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNiaTh2SUVSeWIzQmtiM2R1SUNZZ1EyeGxZWElnUW5WMGRHOXVjMXh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUkhKdmNHUnZkMjVKYm1ScFkyRjBiM0pRY205d2N6eGNiaUFnVDNCMGFXOXVJRDBnZFc1cmJtOTNiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRnUFNCaWIyOXNaV0Z1TEZ4dUlDQkhjbTkxY0NCbGVIUmxibVJ6SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrSUQwZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNGdaWGgwWlc1a2N5QkRiMjF0YjI1UWNtOXdjMEZ1WkVOc1lYTnpUbUZ0WlR4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQaUI3WEc0Z0lDOHFLaUJVYUdVZ1kyaHBiR1J5Wlc0Z2RHOGdZbVVnY21WdVpHVnlaV1FnYVc1emFXUmxJSFJvWlNCcGJtUnBZMkYwYjNJdUlDb3ZYRzRnSUdOb2FXeGtjbVZ1UHpvZ1VtVmhZM1JPYjJSbE8xeHVJQ0F2S2lvZ1VISnZjSE1nZEdoaGRDQjNhV3hzSUdKbElIQmhjM05sWkNCdmJpQjBieUIwYUdVZ1kyaHBiR1J5Wlc0dUlDb3ZYRzRnSUdsdWJtVnlVSEp2Y0hNNklFcFRXQzVKYm5SeWFXNXphV05GYkdWdFpXNTBjMXNuWkdsMkoxMDdYRzRnSUM4cUtpQlVhR1VnWm05amRYTmxaQ0J6ZEdGMFpTQnZaaUIwYUdVZ2MyVnNaV04wTGlBcUwxeHVJQ0JwYzBadlkzVnpaV1E2SUdKdmIyeGxZVzQ3WEc0Z0lHbHpSR2x6WVdKc1pXUTZJR0p2YjJ4bFlXNDdYRzU5WEc1Y2JtTnZibk4wSUdKaGMyVkRVMU1nUFNBOFhHNGdJRTl3ZEdsdmJpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRvZTF4dUlDQnBjMFp2WTNWelpXUXNYRzRnSUhSb1pXMWxPaUI3WEc0Z0lDQWdjM0JoWTJsdVp6b2dleUJpWVhObFZXNXBkQ0I5TEZ4dUlDQWdJR052Ykc5eWN5eGNiaUFnZlN4Y2JuMDZYRzRnSUh3Z1JISnZjR1J2ZDI1SmJtUnBZMkYwYjNKUWNtOXdjenhQY0hScGIyNHNJRWx6VFhWc2RHa3NJRWR5YjNWd1BseHVJQ0I4SUVOc1pXRnlTVzVrYVdOaGRHOXlVSEp2Y0hNOFQzQjBhVzl1TENCSmMwMTFiSFJwTENCSGNtOTFjRDRwT2lCRFUxTlBZbXBsWTNSWGFYUm9UR0ZpWld3Z1BUNGdLSHRjYmlBZ2JHRmlaV3c2SUNkcGJtUnBZMkYwYjNKRGIyNTBZV2x1WlhJbkxGeHVJQ0JqYjJ4dmNqb2dhWE5HYjJOMWMyVmtJRDhnWTI5c2IzSnpMbTVsZFhSeVlXdzJNQ0E2SUdOdmJHOXljeTV1WlhWMGNtRnNNakFzWEc0Z0lHUnBjM0JzWVhrNklDZG1iR1Y0Snl4Y2JpQWdjR0ZrWkdsdVp6b2dZbUZ6WlZWdWFYUWdLaUF5TEZ4dUlDQjBjbUZ1YzJsMGFXOXVPaUFuWTI5c2IzSWdNVFV3YlhNbkxGeHVYRzRnSUNjNmFHOTJaWEluT2lCN1hHNGdJQ0FnWTI5c2IzSTZJR2x6Um05amRYTmxaQ0EvSUdOdmJHOXljeTV1WlhWMGNtRnNPREFnT2lCamIyeHZjbk11Ym1WMWRISmhiRFF3TEZ4dUlDQjlMRnh1ZlNrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCa2NtOXdaRzkzYmtsdVpHbGpZWFJ2Y2tOVFV5QTlJR0poYzJWRFUxTTdYRzVsZUhCdmNuUWdZMjl1YzNRZ1JISnZjR1J2ZDI1SmJtUnBZMkYwYjNJZ1BTQThYRzRnSUU5d2RHbHZiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0b1hHNGdJSEJ5YjNCek9pQkVjbTl3Wkc5M2JrbHVaR2xqWVhSdmNsQnliM0J6UEU5d2RHbHZiaXdnU1hOTmRXeDBhU3dnUjNKdmRYQStYRzRwSUQwK0lIdGNiaUFnWTI5dWMzUWdleUJqYUdsc1pISmxiaXdnWTJ4aGMzTk9ZVzFsTENCamVDd2daMlYwVTNSNWJHVnpMQ0JwYm01bGNsQnliM0J6SUgwZ1BTQndjbTl3Y3p0Y2JpQWdjbVYwZFhKdUlDaGNiaUFnSUNBOFpHbDJYRzRnSUNBZ0lDQmpjM005ZTJkbGRGTjBlV3hsY3lnblpISnZjR1J2ZDI1SmJtUnBZMkYwYjNJbkxDQndjbTl3Y3lsOVhHNGdJQ0FnSUNCamJHRnpjMDVoYldVOWUyTjRLRnh1SUNBZ0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUNBZ2FXNWthV05oZEc5eU9pQjBjblZsTEZ4dUlDQWdJQ0FnSUNBZ0lDZGtjbTl3Wkc5M2JpMXBibVJwWTJGMGIzSW5PaUIwY25WbExGeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0JqYkdGemMwNWhiV1ZjYmlBZ0lDQWdJQ2w5WEc0Z0lDQWdJQ0I3TGk0dWFXNXVaWEpRY205d2MzMWNiaUFnSUNBK1hHNGdJQ0FnSUNCN1kyaHBiR1J5Wlc0Z2ZId2dQRVJ2ZDI1RGFHVjJjbTl1SUM4K2ZWeHVJQ0FnSUR3dlpHbDJQbHh1SUNBcE8xeHVmVHRjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCRGJHVmhja2x1WkdsallYUnZjbEJ5YjNCelBGeHVJQ0JQY0hScGIyNGdQU0IxYm10dWIzZHVMRnh1SUNCSmMwMTFiSFJwSUdWNGRHVnVaSE1nWW05dmJHVmhiaUE5SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajRnUFNCSGNtOTFjRUpoYzJVOFQzQjBhVzl1UGx4dVBpQmxlSFJsYm1SeklFTnZiVzF2YmxCeWIzQnpRVzVrUTJ4aGMzTk9ZVzFsUEU5d2RHbHZiaXdnU1hOTmRXeDBhU3dnUjNKdmRYQStJSHRjYmlBZ0x5b3FJRlJvWlNCamFHbHNaSEpsYmlCMGJ5QmlaU0J5Wlc1a1pYSmxaQ0JwYm5OcFpHVWdkR2hsSUdsdVpHbGpZWFJ2Y2k0Z0tpOWNiaUFnWTJocGJHUnlaVzQvT2lCU1pXRmpkRTV2WkdVN1hHNGdJQzhxS2lCUWNtOXdjeUIwYUdGMElIZHBiR3dnWW1VZ2NHRnpjMlZrSUc5dUlIUnZJSFJvWlNCamFHbHNaSEpsYmk0Z0tpOWNiaUFnYVc1dVpYSlFjbTl3Y3pvZ1NsTllMa2x1ZEhKcGJuTnBZMFZzWlcxbGJuUnpXeWRrYVhZblhUdGNiaUFnTHlvcUlGUm9aU0JtYjJOMWMyVmtJSE4wWVhSbElHOW1JSFJvWlNCelpXeGxZM1F1SUNvdlhHNGdJR2x6Um05amRYTmxaRG9nWW05dmJHVmhianRjYm4xY2JseHVaWGh3YjNKMElHTnZibk4wSUdOc1pXRnlTVzVrYVdOaGRHOXlRMU5USUQwZ1ltRnpaVU5UVXp0Y2JtVjRjRzl5ZENCamIyNXpkQ0JEYkdWaGNrbHVaR2xqWVhSdmNpQTlJRHhjYmlBZ1QzQjBhVzl1TEZ4dUlDQkpjMDExYkhScElHVjRkR1Z1WkhNZ1ltOXZiR1ZoYml4Y2JpQWdSM0p2ZFhBZ1pYaDBaVzVrY3lCSGNtOTFjRUpoYzJVOFQzQjBhVzl1UGx4dVBpaGNiaUFnY0hKdmNITTZJRU5zWldGeVNXNWthV05oZEc5eVVISnZjSE04VDNCMGFXOXVMQ0JKYzAxMWJIUnBMQ0JIY205MWNENWNiaWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQjdJR05vYVd4a2NtVnVMQ0JqYkdGemMwNWhiV1VzSUdONExDQm5aWFJUZEhsc1pYTXNJR2x1Ym1WeVVISnZjSE1nZlNBOUlIQnliM0J6TzF4dUlDQnlaWFIxY200Z0tGeHVJQ0FnSUR4a2FYWmNiaUFnSUNBZ0lHTnpjejE3WjJWMFUzUjViR1Z6S0NkamJHVmhja2x1WkdsallYUnZjaWNzSUhCeWIzQnpLWDFjYmlBZ0lDQWdJR05zWVhOelRtRnRaVDE3WTNnb1hHNGdJQ0FnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdJQ0JwYm1ScFkyRjBiM0k2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJQ0FnSjJOc1pXRnlMV2x1WkdsallYUnZjaWM2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUdOc1lYTnpUbUZ0WlZ4dUlDQWdJQ0FnS1gxY2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lENWNiaUFnSUNBZ0lIdGphR2xzWkhKbGJpQjhmQ0E4UTNKdmMzTkpZMjl1SUM4K2ZWeHVJQ0FnSUR3dlpHbDJQbHh1SUNBcE8xeHVmVHRjYmx4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc0dkx5QlRaWEJoY21GMGIzSmNiaTh2SUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRWx1WkdsallYUnZjbE5sY0dGeVlYUnZjbEJ5YjNCelBGeHVJQ0JQY0hScGIyNGdQU0IxYm10dWIzZHVMRnh1SUNCSmMwMTFiSFJwSUdWNGRHVnVaSE1nWW05dmJHVmhiaUE5SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajRnUFNCSGNtOTFjRUpoYzJVOFQzQjBhVzl1UGx4dVBpQmxlSFJsYm1SeklFTnZiVzF2YmxCeWIzQnpRVzVrUTJ4aGMzTk9ZVzFsUEU5d2RHbHZiaXdnU1hOTmRXeDBhU3dnUjNKdmRYQStJSHRjYmlBZ2FYTkVhWE5oWW14bFpEb2dZbTl2YkdWaGJqdGNiaUFnYVhOR2IyTjFjMlZrT2lCaWIyOXNaV0Z1TzF4dUlDQnBibTVsY2xCeWIzQnpQem9nU2xOWUxrbHVkSEpwYm5OcFkwVnNaVzFsYm5Seld5ZHpjR0Z1SjEwN1hHNTlYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnBibVJwWTJGMGIzSlRaWEJoY21GMGIzSkRVMU1nUFNBOFhHNGdJRTl3ZEdsdmJpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRvZTF4dUlDQnBjMFJwYzJGaWJHVmtMRnh1SUNCMGFHVnRaVG9nZTF4dUlDQWdJSE53WVdOcGJtYzZJSHNnWW1GelpWVnVhWFFnZlN4Y2JpQWdJQ0JqYjJ4dmNuTXNYRzRnSUgwc1hHNTlPaUJKYm1ScFkyRjBiM0pUWlhCaGNtRjBiM0pRY205d2N6eFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGlrNklFTlRVMDlpYW1WamRGZHBkR2hNWVdKbGJDQTlQaUFvZTF4dUlDQnNZV0psYkRvZ0oybHVaR2xqWVhSdmNsTmxjR0Z5WVhSdmNpY3NYRzRnSUdGc2FXZHVVMlZzWmpvZ0ozTjBjbVYwWTJnbkxGeHVJQ0JpWVdOclozSnZkVzVrUTI5c2IzSTZJR2x6UkdsellXSnNaV1FnUHlCamIyeHZjbk11Ym1WMWRISmhiREV3SURvZ1kyOXNiM0p6TG01bGRYUnlZV3d5TUN4Y2JpQWdiV0Z5WjJsdVFtOTBkRzl0T2lCaVlYTmxWVzVwZENBcUlESXNYRzRnSUcxaGNtZHBibFJ2Y0RvZ1ltRnpaVlZ1YVhRZ0tpQXlMRnh1SUNCM2FXUjBhRG9nTVN4Y2JuMHBPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdTVzVrYVdOaGRHOXlVMlZ3WVhKaGRHOXlJRDBnUEZ4dUlDQlBjSFJwYjI0c1hHNGdJRWx6VFhWc2RHa2daWGgwWlc1a2N5QmliMjlzWldGdUxGeHVJQ0JIY205MWNDQmxlSFJsYm1SeklFZHliM1Z3UW1GelpUeFBjSFJwYjI0K1hHNCtLRnh1SUNCd2NtOXdjem9nU1c1a2FXTmhkRzl5VTJWd1lYSmhkRzl5VUhKdmNITThUM0IwYVc5dUxDQkpjMDExYkhScExDQkhjbTkxY0Q1Y2Jpa2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lHTnNZWE56VG1GdFpTd2dZM2dzSUdkbGRGTjBlV3hsY3l3Z2FXNXVaWEpRY205d2N5QjlJRDBnY0hKdmNITTdYRzRnSUhKbGRIVnliaUFvWEc0Z0lDQWdQSE53WVc1Y2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lDQWdZM056UFh0blpYUlRkSGxzWlhNb0oybHVaR2xqWVhSdmNsTmxjR0Z5WVhSdmNpY3NJSEJ5YjNCektYMWNiaUFnSUNBZ0lHTnNZWE56VG1GdFpUMTdZM2dvZXlBbmFXNWthV05oZEc5eUxYTmxjR0Z5WVhSdmNpYzZJSFJ5ZFdVZ2ZTd2dZMnhoYzNOT1lXMWxLWDFjYmlBZ0lDQXZQbHh1SUNBcE8xeHVmVHRjYmx4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc0dkx5Qk1iMkZrYVc1blhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JseHVZMjl1YzNRZ2JHOWhaR2x1WjBSdmRFRnVhVzFoZEdsdmJuTWdQU0JyWlhsbWNtRnRaWE5nWEc0Z0lEQWxMQ0E0TUNVc0lERXdNQ1VnZXlCdmNHRmphWFI1T2lBd095QjlYRzRnSURRd0pTQjdJRzl3WVdOcGRIazZJREU3SUgxY2JtQTdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnNiMkZrYVc1blNXNWthV05oZEc5eVExTlRJRDBnUEZ4dUlDQlBjSFJwYjI0c1hHNGdJRWx6VFhWc2RHa2daWGgwWlc1a2N5QmliMjlzWldGdUxGeHVJQ0JIY205MWNDQmxlSFJsYm1SeklFZHliM1Z3UW1GelpUeFBjSFJwYjI0K1hHNCtLSHRjYmlBZ2FYTkdiMk4xYzJWa0xGeHVJQ0J6YVhwbExGeHVJQ0IwYUdWdFpUb2dlMXh1SUNBZ0lHTnZiRzl5Y3l4Y2JpQWdJQ0J6Y0dGamFXNW5PaUI3SUdKaGMyVlZibWwwSUgwc1hHNGdJSDBzWEc1OU9pQk1iMkZrYVc1blNXNWthV05oZEc5eVVISnZjSE04VDNCMGFXOXVMQ0JKYzAxMWJIUnBMQ0JIY205MWNENHBPaUJEVTFOUFltcGxZM1JYYVhSb1RHRmlaV3dnUFQ0Z0tIdGNiaUFnYkdGaVpXdzZJQ2RzYjJGa2FXNW5TVzVrYVdOaGRHOXlKeXhjYmlBZ1kyOXNiM0k2SUdselJtOWpkWE5sWkNBL0lHTnZiRzl5Y3k1dVpYVjBjbUZzTmpBZ09pQmpiMnh2Y25NdWJtVjFkSEpoYkRJd0xGeHVJQ0JrYVhOd2JHRjVPaUFuWm14bGVDY3NYRzRnSUhCaFpHUnBibWM2SUdKaGMyVlZibWwwSUNvZ01peGNiaUFnZEhKaGJuTnBkR2x2YmpvZ0oyTnZiRzl5SURFMU1HMXpKeXhjYmlBZ1lXeHBaMjVUWld4bU9pQW5ZMlZ1ZEdWeUp5eGNiaUFnWm05dWRGTnBlbVU2SUhOcGVtVXNYRzRnSUd4cGJtVklaV2xuYUhRNklERXNYRzRnSUcxaGNtZHBibEpwWjJoME9pQnphWHBsTEZ4dUlDQjBaWGgwUVd4cFoyNDZJQ2RqWlc1MFpYSW5MRnh1SUNCMlpYSjBhV05oYkVGc2FXZHVPaUFuYldsa1pHeGxKeXhjYm4wcE8xeHVYRzVwYm5SbGNtWmhZMlVnVEc5aFpHbHVaMFJ2ZEZCeWIzQnpJSHRjYmlBZ1pHVnNZWGs2SUc1MWJXSmxjanRjYmlBZ2IyWm1jMlYwT2lCaWIyOXNaV0Z1TzF4dWZWeHVZMjl1YzNRZ1RHOWhaR2x1WjBSdmRDQTlJQ2g3SUdSbGJHRjVMQ0J2Wm1aelpYUWdmVG9nVEc5aFpHbHVaMFJ2ZEZCeWIzQnpLU0E5UGlBb1hHNGdJRHh6Y0dGdVhHNGdJQ0FnWTNOelBYdDdYRzRnSUNBZ0lDQmhibWx0WVhScGIyNDZJR0FrZTJ4dllXUnBibWRFYjNSQmJtbHRZWFJwYjI1emZTQXhjeUJsWVhObExXbHVMVzkxZENBa2UyUmxiR0Y1ZlcxeklHbHVabWx1YVhSbE8yQXNYRzRnSUNBZ0lDQmlZV05yWjNKdmRXNWtRMjlzYjNJNklDZGpkWEp5Wlc1MFEyOXNiM0luTEZ4dUlDQWdJQ0FnWW05eVpHVnlVbUZrYVhWek9pQW5NV1Z0Snl4Y2JpQWdJQ0FnSUdScGMzQnNZWGs2SUNkcGJteHBibVV0WW14dlkyc25MRnh1SUNBZ0lDQWdiV0Z5WjJsdVRHVm1kRG9nYjJabWMyVjBJRDhnSnpGbGJTY2dPaUIxYm1SbFptbHVaV1FzWEc0Z0lDQWdJQ0JvWldsbmFIUTZJQ2N4WlcwbkxGeHVJQ0FnSUNBZ2RtVnlkR2xqWVd4QmJHbG5iam9nSjNSdmNDY3NYRzRnSUNBZ0lDQjNhV1IwYURvZ0p6RmxiU2NzWEc0Z0lDQWdmWDFjYmlBZ0x6NWNiaWs3WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1RHOWhaR2x1WjBsdVpHbGpZWFJ2Y2xCeWIzQnpQRnh1SUNCUGNIUnBiMjRnUFNCMWJtdHViM2R1TEZ4dUlDQkpjMDExYkhScElHVjRkR1Z1WkhNZ1ltOXZiR1ZoYmlBOUlHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo0Z1BTQkhjbTkxY0VKaGMyVThUM0IwYVc5dVBseHVQaUJsZUhSbGJtUnpJRU52YlcxdmJsQnliM0J6UVc1a1EyeGhjM05PWVcxbFBFOXdkR2x2Yml3Z1NYTk5kV3gwYVN3Z1IzSnZkWEErSUh0Y2JpQWdMeW9xSUZCeWIzQnpJSFJvWVhRZ2QybHNiQ0JpWlNCd1lYTnpaV1FnYjI0Z2RHOGdkR2hsSUdOb2FXeGtjbVZ1TGlBcUwxeHVJQ0JwYm01bGNsQnliM0J6T2lCS1UxZ3VTVzUwY21sdWMybGpSV3hsYldWdWRITmJKMlJwZGlkZE8xeHVJQ0F2S2lvZ1ZHaGxJR1p2WTNWelpXUWdjM1JoZEdVZ2IyWWdkR2hsSUhObGJHVmpkQzRnS2k5Y2JpQWdhWE5HYjJOMWMyVmtPaUJpYjI5c1pXRnVPMXh1SUNCcGMwUnBjMkZpYkdWa09pQmliMjlzWldGdU8xeHVJQ0F2S2lvZ1UyVjBJSE5wZW1VZ2IyWWdkR2hsSUdOdmJuUmhhVzVsY2k0Z0tpOWNiaUFnYzJsNlpUb2diblZ0WW1WeU8xeHVmVnh1Wlhod2IzSjBJR052Ym5OMElFeHZZV1JwYm1kSmJtUnBZMkYwYjNJZ1BTQThYRzRnSUU5d2RHbHZiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0b1hHNGdJSEJ5YjNCek9pQk1iMkZrYVc1blNXNWthV05oZEc5eVVISnZjSE04VDNCMGFXOXVMQ0JKYzAxMWJIUnBMQ0JIY205MWNENWNiaWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQjdJR05zWVhOelRtRnRaU3dnWTNnc0lHZGxkRk4wZVd4bGN5d2dhVzV1WlhKUWNtOXdjeXdnYVhOU2RHd2dmU0E5SUhCeWIzQnpPMXh1WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnUEdScGRseHVJQ0FnSUNBZ1kzTnpQWHRuWlhSVGRIbHNaWE1vSjJ4dllXUnBibWRKYm1ScFkyRjBiM0luTENCd2NtOXdjeWw5WEc0Z0lDQWdJQ0JqYkdGemMwNWhiV1U5ZTJONEtGeHVJQ0FnSUNBZ0lDQjdYRzRnSUNBZ0lDQWdJQ0FnYVc1a2FXTmhkRzl5T2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0FnSUNkc2IyRmthVzVuTFdsdVpHbGpZWFJ2Y2ljNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lHTnNZWE56VG1GdFpWeHVJQ0FnSUNBZ0tYMWNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJRDVjYmlBZ0lDQWdJRHhNYjJGa2FXNW5SRzkwSUdSbGJHRjVQWHN3ZlNCdlptWnpaWFE5ZTJselVuUnNmU0F2UGx4dUlDQWdJQ0FnUEV4dllXUnBibWRFYjNRZ1pHVnNZWGs5ZXpFMk1IMGdiMlptYzJWMElDOCtYRzRnSUNBZ0lDQThURzloWkdsdVowUnZkQ0JrWld4aGVUMTdNekl3ZlNCdlptWnpaWFE5ZXlGcGMxSjBiSDBnTHo1Y2JpQWdJQ0E4TDJScGRqNWNiaUFnS1R0Y2JuMDdYRzVNYjJGa2FXNW5TVzVrYVdOaGRHOXlMbVJsWm1GMWJIUlFjbTl3Y3lBOUlIc2djMmw2WlRvZ05DQjlPMXh1SWwxOSAqL1wiLFxuICB0b1N0cmluZzogX0VNT1RJT05fU1RSSU5HSUZJRURfQ1NTX0VSUk9SX19cbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBJY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgU3ZnID0gZnVuY3Rpb24gU3ZnKF9yZWYpIHtcbiAgdmFyIHNpemUgPSBfcmVmLnNpemUsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQkMik7XG5cbiAgcmV0dXJuIGpzeChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgaGVpZ2h0OiBzaXplLFxuICAgIHdpZHRoOiBzaXplLFxuICAgIHZpZXdCb3g6IFwiMCAwIDIwIDIwXCIsXG4gICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICBmb2N1c2FibGU6IFwiZmFsc2VcIixcbiAgICBjc3M6IF9yZWYyXG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgQ3Jvc3NJY29uID0gZnVuY3Rpb24gQ3Jvc3NJY29uKHByb3BzKSB7XG4gIHJldHVybiBqc3goU3ZnLCBfZXh0ZW5kcyh7XG4gICAgc2l6ZTogMjBcbiAgfSwgcHJvcHMpLCBqc3goXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xNC4zNDggMTQuODQ5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwbC0yLjY1MS0zLjAzMC0yLjY1MSAzLjAyOWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMC0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOSAwLTEuNjk3bDIuNzU4LTMuMTUtMi43NTktMy4xNTJjLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI4IDAtMS42OTdzMS4yMjgtMC40NjkgMS42OTcgMGwyLjY1MiAzLjAzMSAyLjY1MS0zLjAzMWMwLjQ2OS0wLjQ2OSAxLjIyOC0wLjQ2OSAxLjY5NyAwczAuNDY5IDEuMjI5IDAgMS42OTdsLTIuNzU4IDMuMTUyIDIuNzU4IDMuMTVjMC40NjkgMC40NjkgMC40NjkgMS4yMjkgMCAxLjY5OHpcIlxuICB9KSk7XG59O1xudmFyIERvd25DaGV2cm9uID0gZnVuY3Rpb24gRG93bkNoZXZyb24ocHJvcHMpIHtcbiAgcmV0dXJuIGpzeChTdmcsIF9leHRlbmRzKHtcbiAgICBzaXplOiAyMFxuICB9LCBwcm9wcyksIGpzeChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiXG4gIH0pKTtcbn07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGJhc2VDU1MgPSBmdW5jdGlvbiBiYXNlQ1NTKF9yZWYzKSB7XG4gIHZhciBpc0ZvY3VzZWQgPSBfcmVmMy5pc0ZvY3VzZWQsXG4gICAgICBfcmVmMyR0aGVtZSA9IF9yZWYzLnRoZW1lLFxuICAgICAgYmFzZVVuaXQgPSBfcmVmMyR0aGVtZS5zcGFjaW5nLmJhc2VVbml0LFxuICAgICAgY29sb3JzID0gX3JlZjMkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDBcbiAgICB9XG4gIH07XG59O1xuXG52YXIgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xudmFyIERyb3Bkb3duSW5kaWNhdG9yID0gZnVuY3Rpb24gRHJvcGRvd25JbmRpY2F0b3IocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdkcm9wZG93bkluZGljYXRvcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4gfHwganN4KERvd25DaGV2cm9uLCBudWxsKSk7XG59O1xudmFyIGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbnZhciBDbGVhckluZGljYXRvciA9IGZ1bmN0aW9uIENsZWFySW5kaWNhdG9yKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IGdldFN0eWxlcygnY2xlYXJJbmRpY2F0b3InLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAnY2xlYXItaW5kaWNhdG9yJzogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuIHx8IGpzeChDcm9zc0ljb24sIG51bGwpKTtcbn07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGluZGljYXRvclNlcGFyYXRvckNTUyA9IGZ1bmN0aW9uIGluZGljYXRvclNlcGFyYXRvckNTUyhfcmVmNCkge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWY0LmlzRGlzYWJsZWQsXG4gICAgICBfcmVmNCR0aGVtZSA9IF9yZWY0LnRoZW1lLFxuICAgICAgYmFzZVVuaXQgPSBfcmVmNCR0aGVtZS5zcGFjaW5nLmJhc2VVbml0LFxuICAgICAgY29sb3JzID0gX3JlZjQkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICB3aWR0aDogMVxuICB9O1xufTtcbnZhciBJbmRpY2F0b3JTZXBhcmF0b3IgPSBmdW5jdGlvbiBJbmRpY2F0b3JTZXBhcmF0b3IocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcInNwYW5cIiwgX2V4dGVuZHMoe30sIGlubmVyUHJvcHMsIHtcbiAgICBjc3M6IGdldFN0eWxlcygnaW5kaWNhdG9yU2VwYXJhdG9yJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ2luZGljYXRvci1zZXBhcmF0b3InOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9KSk7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXMoX3RlbXBsYXRlT2JqZWN0IHx8IChfdGVtcGxhdGVPYmplY3QgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKFtcIlxcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cXG5cIl0pKSk7XG52YXIgbG9hZGluZ0luZGljYXRvckNTUyA9IGZ1bmN0aW9uIGxvYWRpbmdJbmRpY2F0b3JDU1MoX3JlZjUpIHtcbiAgdmFyIGlzRm9jdXNlZCA9IF9yZWY1LmlzRm9jdXNlZCxcbiAgICAgIHNpemUgPSBfcmVmNS5zaXplLFxuICAgICAgX3JlZjUkdGhlbWUgPSBfcmVmNS50aGVtZSxcbiAgICAgIGNvbG9ycyA9IF9yZWY1JHRoZW1lLmNvbG9ycyxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjUkdGhlbWUuc3BhY2luZy5iYXNlVW5pdDtcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICBmb250U2l6ZTogc2l6ZSxcbiAgICBsaW5lSGVpZ2h0OiAxLFxuICAgIG1hcmdpblJpZ2h0OiBzaXplLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgfTtcbn07XG5cbnZhciBMb2FkaW5nRG90ID0gZnVuY3Rpb24gTG9hZGluZ0RvdChfcmVmNikge1xuICB2YXIgZGVsYXkgPSBfcmVmNi5kZWxheSxcbiAgICAgIG9mZnNldCA9IF9yZWY2Lm9mZnNldDtcbiAgcmV0dXJuIGpzeChcInNwYW5cIiwge1xuICAgIGNzczogLyojX19QVVJFX18qL2NzcyQyKHtcbiAgICAgIGFuaW1hdGlvbjogXCJcIi5jb25jYXQobG9hZGluZ0RvdEFuaW1hdGlvbnMsIFwiIDFzIGVhc2UtaW4tb3V0IFwiKS5jb25jYXQoZGVsYXksIFwibXMgaW5maW5pdGU7XCIpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nXG4gICAgfSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gXCJcIiA6IFwiO2xhYmVsOkxvYWRpbmdEb3Q7XCIsIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltbHVaR2xqWVhSdmNuTXVkSE40SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVhGUVNTSXNJbVpwYkdVaU9pSnBibVJwWTJGMGIzSnpMblJ6ZUNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLaUJBYW5ONElHcHplQ0FxTDF4dWFXMXdiM0owSUhzZ1VtVmhZM1JPYjJSbElIMGdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUhzZ2FuTjRMQ0JyWlhsbWNtRnRaWE1nZlNCbWNtOXRJQ2RBWlcxdmRHbHZiaTl5WldGamRDYzdYRzVjYm1sdGNHOXlkQ0I3WEc0Z0lFTnZiVzF2YmxCeWIzQnpRVzVrUTJ4aGMzTk9ZVzFsTEZ4dUlDQkRVMU5QWW1wbFkzUlhhWFJvVEdGaVpXd3NYRzRnSUVkeWIzVndRbUZ6WlN4Y2JuMGdabkp2YlNBbkxpNHZkSGx3WlhNbk8xeHVYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNiaTh2SUVSeWIzQmtiM2R1SUNZZ1EyeGxZWElnU1dOdmJuTmNiaTh2SUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHVYRzVqYjI1emRDQlRkbWNnUFNBb2UxeHVJQ0J6YVhwbExGeHVJQ0F1TGk1d2NtOXdjMXh1ZlRvZ1NsTllMa2x1ZEhKcGJuTnBZMFZzWlcxbGJuUnpXeWR6ZG1jblhTQW1JSHNnYzJsNlpUb2diblZ0WW1WeUlIMHBJRDArSUNoY2JpQWdQSE4yWjF4dUlDQWdJR2hsYVdkb2REMTdjMmw2WlgxY2JpQWdJQ0IzYVdSMGFEMTdjMmw2WlgxY2JpQWdJQ0IyYVdWM1FtOTRQVndpTUNBd0lESXdJREl3WENKY2JpQWdJQ0JoY21saExXaHBaR1JsYmoxY0luUnlkV1ZjSWx4dUlDQWdJR1p2WTNWellXSnNaVDFjSW1aaGJITmxYQ0pjYmlBZ0lDQmpjM005ZTN0Y2JpQWdJQ0FnSUdScGMzQnNZWGs2SUNkcGJteHBibVV0WW14dlkyc25MRnh1SUNBZ0lDQWdabWxzYkRvZ0oyTjFjbkpsYm5SRGIyeHZjaWNzWEc0Z0lDQWdJQ0JzYVc1bFNHVnBaMmgwT2lBeExGeHVJQ0FnSUNBZ2MzUnliMnRsT2lBblkzVnljbVZ1ZEVOdmJHOXlKeXhjYmlBZ0lDQWdJSE4wY205clpWZHBaSFJvT2lBd0xGeHVJQ0FnSUgxOVhHNGdJQ0FnZXk0dUxuQnliM0J6ZlZ4dUlDQXZQbHh1S1R0Y2JseHVaWGh3YjNKMElIUjVjR1VnUTNKdmMzTkpZMjl1VUhKdmNITWdQU0JLVTFndVNXNTBjbWx1YzJsalJXeGxiV1Z1ZEhOYkozTjJaeWRkSUNZZ2V5QnphWHBsUHpvZ2JuVnRZbVZ5SUgwN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnUTNKdmMzTkpZMjl1SUQwZ0tIQnliM0J6T2lCRGNtOXpjMGxqYjI1UWNtOXdjeWtnUFQ0Z0tGeHVJQ0E4VTNabklITnBlbVU5ZXpJd2ZTQjdMaTR1Y0hKdmNITjlQbHh1SUNBZ0lEeHdZWFJvSUdROVhDSk5NVFF1TXpRNElERTBMamcwT1dNdE1DNDBOamtnTUM0ME5qa3RNUzR5TWprZ01DNDBOamt0TVM0Mk9UY2dNR3d0TWk0Mk5URXRNeTR3TXpBdE1pNDJOVEVnTXk0d01qbGpMVEF1TkRZNUlEQXVORFk1TFRFdU1qSTVJREF1TkRZNUxURXVOamszSURBdE1DNDBOamt0TUM0ME5qa3RNQzQwTmprdE1TNHlNamtnTUMweExqWTVOMnd5TGpjMU9DMHpMakUxTFRJdU56VTVMVE11TVRVeVl5MHdMalEyT1Mwd0xqUTJPUzB3TGpRMk9TMHhMakl5T0NBd0xURXVOamszY3pFdU1qSTRMVEF1TkRZNUlERXVOamszSURCc01pNDJOVElnTXk0d016RWdNaTQyTlRFdE15NHdNekZqTUM0ME5qa3RNQzQwTmprZ01TNHlNamd0TUM0ME5qa2dNUzQyT1RjZ01ITXdMalEyT1NBeExqSXlPU0F3SURFdU5qazNiQzB5TGpjMU9DQXpMakUxTWlBeUxqYzFPQ0F6TGpFMVl6QXVORFk1SURBdU5EWTVJREF1TkRZNUlERXVNakk1SURBZ01TNDJPVGg2WENJZ0x6NWNiaUFnUEM5VGRtYytYRzRwTzF4dVpYaHdiM0owSUhSNWNHVWdSRzkzYmtOb1pYWnliMjVRY205d2N5QTlJRXBUV0M1SmJuUnlhVzV6YVdORmJHVnRaVzUwYzFzbmMzWm5KMTBnSmlCN0lITnBlbVUvT2lCdWRXMWlaWElnZlR0Y2JtVjRjRzl5ZENCamIyNXpkQ0JFYjNkdVEyaGxkbkp2YmlBOUlDaHdjbTl3Y3pvZ1JHOTNia05vWlhaeWIyNVFjbTl3Y3lrZ1BUNGdLRnh1SUNBOFUzWm5JSE5wZW1VOWV6SXdmU0I3TGk0dWNISnZjSE45UGx4dUlDQWdJRHh3WVhSb0lHUTlYQ0pOTkM0MU1UWWdOeTQxTkRoak1DNDBNell0TUM0ME5EWWdNUzR3TkRNdE1DNDBPREVnTVM0MU56WWdNR3d6TGprd09DQXpMamMwTnlBekxqa3dPQzB6TGpjME4yTXdMalV6TXkwd0xqUTRNU0F4TGpFME1TMHdMalEwTmlBeExqVTNOQ0F3SURBdU5ETTJJREF1TkRRMUlEQXVOREE0SURFdU1UazNJREFnTVM0Mk1UVXRNQzQwTURZZ01DNDBNVGd0TkM0Mk9UVWdOQzQxTURJdE5DNDJPVFVnTkM0MU1ESXRNQzR5TVRjZ01DNHlNak10TUM0MU1ESWdNQzR6TXpVdE1DNDNPRGNnTUM0ek16VnpMVEF1TlRjdE1DNHhNVEl0TUM0M09Ea3RNQzR6TXpWak1DQXdMVFF1TWpnM0xUUXVNRGcwTFRRdU5qazFMVFF1TlRBeWN5MHdMalF6TmkweExqRTNJREF0TVM0Mk1UVjZYQ0lnTHo1Y2JpQWdQQzlUZG1jK1hHNHBPMXh1WEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmk4dklFUnliM0JrYjNkdUlDWWdRMnhsWVhJZ1FuVjBkRzl1YzF4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1JISnZjR1J2ZDI1SmJtUnBZMkYwYjNKUWNtOXdjenhjYmlBZ1QzQjBhVzl1SUQwZ2RXNXJibTkzYml4Y2JpQWdTWE5OZFd4MGFTQmxlSFJsYm1SeklHSnZiMnhsWVc0Z1BTQmliMjlzWldGdUxGeHVJQ0JIY205MWNDQmxlSFJsYm1SeklFZHliM1Z3UW1GelpUeFBjSFJwYjI0K0lEMGdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRnWlhoMFpXNWtjeUJEYjIxdGIyNVFjbTl3YzBGdVpFTnNZWE56VG1GdFpUeFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGlCN1hHNGdJQzhxS2lCVWFHVWdZMmhwYkdSeVpXNGdkRzhnWW1VZ2NtVnVaR1Z5WldRZ2FXNXphV1JsSUhSb1pTQnBibVJwWTJGMGIzSXVJQ292WEc0Z0lHTm9hV3hrY21WdVB6b2dVbVZoWTNST2IyUmxPMXh1SUNBdktpb2dVSEp2Y0hNZ2RHaGhkQ0IzYVd4c0lHSmxJSEJoYzNObFpDQnZiaUIwYnlCMGFHVWdZMmhwYkdSeVpXNHVJQ292WEc0Z0lHbHVibVZ5VUhKdmNITTZJRXBUV0M1SmJuUnlhVzV6YVdORmJHVnRaVzUwYzFzblpHbDJKMTA3WEc0Z0lDOHFLaUJVYUdVZ1ptOWpkWE5sWkNCemRHRjBaU0J2WmlCMGFHVWdjMlZzWldOMExpQXFMMXh1SUNCcGMwWnZZM1Z6WldRNklHSnZiMnhsWVc0N1hHNGdJR2x6UkdsellXSnNaV1E2SUdKdmIyeGxZVzQ3WEc1OVhHNWNibU52Ym5OMElHSmhjMlZEVTFNZ1BTQThYRzRnSUU5d2RHbHZiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0b2UxeHVJQ0JwYzBadlkzVnpaV1FzWEc0Z0lIUm9aVzFsT2lCN1hHNGdJQ0FnYzNCaFkybHVaem9nZXlCaVlYTmxWVzVwZENCOUxGeHVJQ0FnSUdOdmJHOXljeXhjYmlBZ2ZTeGNibjA2WEc0Z0lId2dSSEp2Y0dSdmQyNUpibVJwWTJGMGIzSlFjbTl3Y3p4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQbHh1SUNCOElFTnNaV0Z5U1c1a2FXTmhkRzl5VUhKdmNITThUM0IwYVc5dUxDQkpjMDExYkhScExDQkhjbTkxY0Q0cE9pQkRVMU5QWW1wbFkzUlhhWFJvVEdGaVpXd2dQVDRnS0h0Y2JpQWdiR0ZpWld3NklDZHBibVJwWTJGMGIzSkRiMjUwWVdsdVpYSW5MRnh1SUNCamIyeHZjam9nYVhOR2IyTjFjMlZrSUQ4Z1kyOXNiM0p6TG01bGRYUnlZV3cyTUNBNklHTnZiRzl5Y3k1dVpYVjBjbUZzTWpBc1hHNGdJR1JwYzNCc1lYazZJQ2RtYkdWNEp5eGNiaUFnY0dGa1pHbHVaem9nWW1GelpWVnVhWFFnS2lBeUxGeHVJQ0IwY21GdWMybDBhVzl1T2lBblkyOXNiM0lnTVRVd2JYTW5MRnh1WEc0Z0lDYzZhRzkyWlhJbk9pQjdYRzRnSUNBZ1kyOXNiM0k2SUdselJtOWpkWE5sWkNBL0lHTnZiRzl5Y3k1dVpYVjBjbUZzT0RBZ09pQmpiMnh2Y25NdWJtVjFkSEpoYkRRd0xGeHVJQ0I5TEZ4dWZTazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmtjbTl3Wkc5M2JrbHVaR2xqWVhSdmNrTlRVeUE5SUdKaGMyVkRVMU03WEc1bGVIQnZjblFnWTI5dWMzUWdSSEp2Y0dSdmQyNUpibVJwWTJGMGIzSWdQU0E4WEc0Z0lFOXdkR2x2Yml4Y2JpQWdTWE5OZFd4MGFTQmxlSFJsYm1SeklHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNG9YRzRnSUhCeWIzQnpPaUJFY205d1pHOTNia2x1WkdsallYUnZjbEJ5YjNCelBFOXdkR2x2Yml3Z1NYTk5kV3gwYVN3Z1IzSnZkWEErWEc0cElEMCtJSHRjYmlBZ1kyOXVjM1FnZXlCamFHbHNaSEpsYml3Z1kyeGhjM05PWVcxbExDQmplQ3dnWjJWMFUzUjViR1Z6TENCcGJtNWxjbEJ5YjNCeklIMGdQU0J3Y205d2N6dGNiaUFnY21WMGRYSnVJQ2hjYmlBZ0lDQThaR2wyWEc0Z0lDQWdJQ0JqYzNNOWUyZGxkRk4wZVd4bGN5Z25aSEp2Y0dSdmQyNUpibVJwWTJGMGIzSW5MQ0J3Y205d2N5bDlYRzRnSUNBZ0lDQmpiR0Z6YzA1aGJXVTllMk40S0Z4dUlDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdhVzVrYVdOaGRHOXlPaUIwY25WbExGeHVJQ0FnSUNBZ0lDQWdJQ2RrY205d1pHOTNiaTFwYm1ScFkyRjBiM0luT2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCamJHRnpjMDVoYldWY2JpQWdJQ0FnSUNsOVhHNGdJQ0FnSUNCN0xpNHVhVzV1WlhKUWNtOXdjMzFjYmlBZ0lDQStYRzRnSUNBZ0lDQjdZMmhwYkdSeVpXNGdmSHdnUEVSdmQyNURhR1YyY205dUlDOCtmVnh1SUNBZ0lEd3ZaR2wyUGx4dUlDQXBPMXh1ZlR0Y2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkRiR1ZoY2tsdVpHbGpZWFJ2Y2xCeWIzQnpQRnh1SUNCUGNIUnBiMjRnUFNCMWJtdHViM2R1TEZ4dUlDQkpjMDExYkhScElHVjRkR1Z1WkhNZ1ltOXZiR1ZoYmlBOUlHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo0Z1BTQkhjbTkxY0VKaGMyVThUM0IwYVc5dVBseHVQaUJsZUhSbGJtUnpJRU52YlcxdmJsQnliM0J6UVc1a1EyeGhjM05PWVcxbFBFOXdkR2x2Yml3Z1NYTk5kV3gwYVN3Z1IzSnZkWEErSUh0Y2JpQWdMeW9xSUZSb1pTQmphR2xzWkhKbGJpQjBieUJpWlNCeVpXNWtaWEpsWkNCcGJuTnBaR1VnZEdobElHbHVaR2xqWVhSdmNpNGdLaTljYmlBZ1kyaHBiR1J5Wlc0L09pQlNaV0ZqZEU1dlpHVTdYRzRnSUM4cUtpQlFjbTl3Y3lCMGFHRjBJSGRwYkd3Z1ltVWdjR0Z6YzJWa0lHOXVJSFJ2SUhSb1pTQmphR2xzWkhKbGJpNGdLaTljYmlBZ2FXNXVaWEpRY205d2N6b2dTbE5ZTGtsdWRISnBibk5wWTBWc1pXMWxiblJ6V3lka2FYWW5YVHRjYmlBZ0x5b3FJRlJvWlNCbWIyTjFjMlZrSUhOMFlYUmxJRzltSUhSb1pTQnpaV3hsWTNRdUlDb3ZYRzRnSUdselJtOWpkWE5sWkRvZ1ltOXZiR1ZoYmp0Y2JuMWNibHh1Wlhod2IzSjBJR052Ym5OMElHTnNaV0Z5U1c1a2FXTmhkRzl5UTFOVElEMGdZbUZ6WlVOVFV6dGNibVY0Y0c5eWRDQmpiMjV6ZENCRGJHVmhja2x1WkdsallYUnZjaUE5SUR4Y2JpQWdUM0IwYVc5dUxGeHVJQ0JKYzAxMWJIUnBJR1Y0ZEdWdVpITWdZbTl2YkdWaGJpeGNiaUFnUjNKdmRYQWdaWGgwWlc1a2N5QkhjbTkxY0VKaGMyVThUM0IwYVc5dVBseHVQaWhjYmlBZ2NISnZjSE02SUVOc1pXRnlTVzVrYVdOaGRHOXlVSEp2Y0hNOFQzQjBhVzl1TENCSmMwMTFiSFJwTENCSGNtOTFjRDVjYmlrZ1BUNGdlMXh1SUNCamIyNXpkQ0I3SUdOb2FXeGtjbVZ1TENCamJHRnpjMDVoYldVc0lHTjRMQ0JuWlhSVGRIbHNaWE1zSUdsdWJtVnlVSEp2Y0hNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lEeGthWFpjYmlBZ0lDQWdJR056Y3oxN1oyVjBVM1I1YkdWektDZGpiR1ZoY2tsdVpHbGpZWFJ2Y2ljc0lIQnliM0J6S1gxY2JpQWdJQ0FnSUdOc1lYTnpUbUZ0WlQxN1kzZ29YRzRnSUNBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnSUNCcGJtUnBZMkYwYjNJNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUNBZ0oyTnNaV0Z5TFdsdVpHbGpZWFJ2Y2ljNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lHTnNZWE56VG1GdFpWeHVJQ0FnSUNBZ0tYMWNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJRDVjYmlBZ0lDQWdJSHRqYUdsc1pISmxiaUI4ZkNBOFEzSnZjM05KWTI5dUlDOCtmVnh1SUNBZ0lEd3ZaR2wyUGx4dUlDQXBPMXh1ZlR0Y2JseHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNHZMeUJUWlhCaGNtRjBiM0pjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUVsdVpHbGpZWFJ2Y2xObGNHRnlZWFJ2Y2xCeWIzQnpQRnh1SUNCUGNIUnBiMjRnUFNCMWJtdHViM2R1TEZ4dUlDQkpjMDExYkhScElHVjRkR1Z1WkhNZ1ltOXZiR1ZoYmlBOUlHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo0Z1BTQkhjbTkxY0VKaGMyVThUM0IwYVc5dVBseHVQaUJsZUhSbGJtUnpJRU52YlcxdmJsQnliM0J6UVc1a1EyeGhjM05PWVcxbFBFOXdkR2x2Yml3Z1NYTk5kV3gwYVN3Z1IzSnZkWEErSUh0Y2JpQWdhWE5FYVhOaFlteGxaRG9nWW05dmJHVmhianRjYmlBZ2FYTkdiMk4xYzJWa09pQmliMjlzWldGdU8xeHVJQ0JwYm01bGNsQnliM0J6UHpvZ1NsTllMa2x1ZEhKcGJuTnBZMFZzWlcxbGJuUnpXeWR6Y0dGdUoxMDdYRzU5WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYm1ScFkyRjBiM0pUWlhCaGNtRjBiM0pEVTFNZ1BTQThYRzRnSUU5d2RHbHZiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0b2UxeHVJQ0JwYzBScGMyRmliR1ZrTEZ4dUlDQjBhR1Z0WlRvZ2UxeHVJQ0FnSUhOd1lXTnBibWM2SUhzZ1ltRnpaVlZ1YVhRZ2ZTeGNiaUFnSUNCamIyeHZjbk1zWEc0Z0lIMHNYRzU5T2lCSmJtUnBZMkYwYjNKVFpYQmhjbUYwYjNKUWNtOXdjenhQY0hScGIyNHNJRWx6VFhWc2RHa3NJRWR5YjNWd1BpazZJRU5UVTA5aWFtVmpkRmRwZEdoTVlXSmxiQ0E5UGlBb2UxeHVJQ0JzWVdKbGJEb2dKMmx1WkdsallYUnZjbE5sY0dGeVlYUnZjaWNzWEc0Z0lHRnNhV2R1VTJWc1pqb2dKM04wY21WMFkyZ25MRnh1SUNCaVlXTnJaM0p2ZFc1a1EyOXNiM0k2SUdselJHbHpZV0pzWldRZ1B5QmpiMnh2Y25NdWJtVjFkSEpoYkRFd0lEb2dZMjlzYjNKekxtNWxkWFJ5WVd3eU1DeGNiaUFnYldGeVoybHVRbTkwZEc5dE9pQmlZWE5sVlc1cGRDQXFJRElzWEc0Z0lHMWhjbWRwYmxSdmNEb2dZbUZ6WlZWdWFYUWdLaUF5TEZ4dUlDQjNhV1IwYURvZ01TeGNibjBwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnU1c1a2FXTmhkRzl5VTJWd1lYSmhkRzl5SUQwZ1BGeHVJQ0JQY0hScGIyNHNYRzRnSUVselRYVnNkR2tnWlhoMFpXNWtjeUJpYjI5c1pXRnVMRnh1SUNCSGNtOTFjQ0JsZUhSbGJtUnpJRWR5YjNWd1FtRnpaVHhQY0hScGIyNCtYRzQrS0Z4dUlDQndjbTl3Y3pvZ1NXNWthV05oZEc5eVUyVndZWEpoZEc5eVVISnZjSE04VDNCMGFXOXVMQ0JKYzAxMWJIUnBMQ0JIY205MWNENWNiaWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQjdJR05zWVhOelRtRnRaU3dnWTNnc0lHZGxkRk4wZVd4bGN5d2dhVzV1WlhKUWNtOXdjeUI5SUQwZ2NISnZjSE03WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnUEhOd1lXNWNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJQ0FnWTNOelBYdG5aWFJUZEhsc1pYTW9KMmx1WkdsallYUnZjbE5sY0dGeVlYUnZjaWNzSUhCeWIzQnpLWDFjYmlBZ0lDQWdJR05zWVhOelRtRnRaVDE3WTNnb2V5QW5hVzVrYVdOaGRHOXlMWE5sY0dGeVlYUnZjaWM2SUhSeWRXVWdmU3dnWTJ4aGMzTk9ZVzFsS1gxY2JpQWdJQ0F2UGx4dUlDQXBPMXh1ZlR0Y2JseHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNHZMeUJNYjJGa2FXNW5YRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNibHh1WTI5dWMzUWdiRzloWkdsdVowUnZkRUZ1YVcxaGRHbHZibk1nUFNCclpYbG1jbUZ0WlhOZ1hHNGdJREFsTENBNE1DVXNJREV3TUNVZ2V5QnZjR0ZqYVhSNU9pQXdPeUI5WEc0Z0lEUXdKU0I3SUc5d1lXTnBkSGs2SURFN0lIMWNibUE3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JzYjJGa2FXNW5TVzVrYVdOaGRHOXlRMU5USUQwZ1BGeHVJQ0JQY0hScGIyNHNYRzRnSUVselRYVnNkR2tnWlhoMFpXNWtjeUJpYjI5c1pXRnVMRnh1SUNCSGNtOTFjQ0JsZUhSbGJtUnpJRWR5YjNWd1FtRnpaVHhQY0hScGIyNCtYRzQrS0h0Y2JpQWdhWE5HYjJOMWMyVmtMRnh1SUNCemFYcGxMRnh1SUNCMGFHVnRaVG9nZTF4dUlDQWdJR052Ykc5eWN5eGNiaUFnSUNCemNHRmphVzVuT2lCN0lHSmhjMlZWYm1sMElIMHNYRzRnSUgwc1hHNTlPaUJNYjJGa2FXNW5TVzVrYVdOaGRHOXlVSEp2Y0hNOFQzQjBhVzl1TENCSmMwMTFiSFJwTENCSGNtOTFjRDRwT2lCRFUxTlBZbXBsWTNSWGFYUm9UR0ZpWld3Z1BUNGdLSHRjYmlBZ2JHRmlaV3c2SUNkc2IyRmthVzVuU1c1a2FXTmhkRzl5Snl4Y2JpQWdZMjlzYjNJNklHbHpSbTlqZFhObFpDQS9JR052Ykc5eWN5NXVaWFYwY21Gc05qQWdPaUJqYjJ4dmNuTXVibVYxZEhKaGJESXdMRnh1SUNCa2FYTndiR0Y1T2lBblpteGxlQ2NzWEc0Z0lIQmhaR1JwYm1jNklHSmhjMlZWYm1sMElDb2dNaXhjYmlBZ2RISmhibk5wZEdsdmJqb2dKMk52Ykc5eUlERTFNRzF6Snl4Y2JpQWdZV3hwWjI1VFpXeG1PaUFuWTJWdWRHVnlKeXhjYmlBZ1ptOXVkRk5wZW1VNklITnBlbVVzWEc0Z0lHeHBibVZJWldsbmFIUTZJREVzWEc0Z0lHMWhjbWRwYmxKcFoyaDBPaUJ6YVhwbExGeHVJQ0IwWlhoMFFXeHBaMjQ2SUNkalpXNTBaWEluTEZ4dUlDQjJaWEowYVdOaGJFRnNhV2R1T2lBbmJXbGtaR3hsSnl4Y2JuMHBPMXh1WEc1cGJuUmxjbVpoWTJVZ1RHOWhaR2x1WjBSdmRGQnliM0J6SUh0Y2JpQWdaR1ZzWVhrNklHNTFiV0psY2p0Y2JpQWdiMlptYzJWME9pQmliMjlzWldGdU8xeHVmVnh1WTI5dWMzUWdURzloWkdsdVowUnZkQ0E5SUNoN0lHUmxiR0Y1TENCdlptWnpaWFFnZlRvZ1RHOWhaR2x1WjBSdmRGQnliM0J6S1NBOVBpQW9YRzRnSUR4emNHRnVYRzRnSUNBZ1kzTnpQWHQ3WEc0Z0lDQWdJQ0JoYm1sdFlYUnBiMjQ2SUdBa2UyeHZZV1JwYm1kRWIzUkJibWx0WVhScGIyNXpmU0F4Y3lCbFlYTmxMV2x1TFc5MWRDQWtlMlJsYkdGNWZXMXpJR2x1Wm1sdWFYUmxPMkFzWEc0Z0lDQWdJQ0JpWVdOclozSnZkVzVrUTI5c2IzSTZJQ2RqZFhKeVpXNTBRMjlzYjNJbkxGeHVJQ0FnSUNBZ1ltOXlaR1Z5VW1Ga2FYVnpPaUFuTVdWdEp5eGNiaUFnSUNBZ0lHUnBjM0JzWVhrNklDZHBibXhwYm1VdFlteHZZMnNuTEZ4dUlDQWdJQ0FnYldGeVoybHVUR1ZtZERvZ2IyWm1jMlYwSUQ4Z0p6RmxiU2NnT2lCMWJtUmxabWx1WldRc1hHNGdJQ0FnSUNCb1pXbG5hSFE2SUNjeFpXMG5MRnh1SUNBZ0lDQWdkbVZ5ZEdsallXeEJiR2xuYmpvZ0ozUnZjQ2NzWEc0Z0lDQWdJQ0IzYVdSMGFEb2dKekZsYlNjc1hHNGdJQ0FnZlgxY2JpQWdMejVjYmlrN1hHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdURzloWkdsdVowbHVaR2xqWVhSdmNsQnliM0J6UEZ4dUlDQlBjSFJwYjI0Z1BTQjFibXR1YjNkdUxGeHVJQ0JKYzAxMWJIUnBJR1Y0ZEdWdVpITWdZbTl2YkdWaGJpQTlJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNGdQU0JIY205MWNFSmhjMlU4VDNCMGFXOXVQbHh1UGlCbGVIUmxibVJ6SUVOdmJXMXZibEJ5YjNCelFXNWtRMnhoYzNOT1lXMWxQRTl3ZEdsdmJpd2dTWE5OZFd4MGFTd2dSM0p2ZFhBK0lIdGNiaUFnTHlvcUlGQnliM0J6SUhSb1lYUWdkMmxzYkNCaVpTQndZWE56WldRZ2IyNGdkRzhnZEdobElHTm9hV3hrY21WdUxpQXFMMXh1SUNCcGJtNWxjbEJ5YjNCek9pQktVMWd1U1c1MGNtbHVjMmxqUld4bGJXVnVkSE5iSjJScGRpZGRPMXh1SUNBdktpb2dWR2hsSUdadlkzVnpaV1FnYzNSaGRHVWdiMllnZEdobElITmxiR1ZqZEM0Z0tpOWNiaUFnYVhOR2IyTjFjMlZrT2lCaWIyOXNaV0Z1TzF4dUlDQnBjMFJwYzJGaWJHVmtPaUJpYjI5c1pXRnVPMXh1SUNBdktpb2dVMlYwSUhOcGVtVWdiMllnZEdobElHTnZiblJoYVc1bGNpNGdLaTljYmlBZ2MybDZaVG9nYm5WdFltVnlPMXh1ZlZ4dVpYaHdiM0owSUdOdmJuTjBJRXh2WVdScGJtZEpibVJwWTJGMGIzSWdQU0E4WEc0Z0lFOXdkR2x2Yml4Y2JpQWdTWE5OZFd4MGFTQmxlSFJsYm1SeklHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNG9YRzRnSUhCeWIzQnpPaUJNYjJGa2FXNW5TVzVrYVdOaGRHOXlVSEp2Y0hNOFQzQjBhVzl1TENCSmMwMTFiSFJwTENCSGNtOTFjRDVjYmlrZ1BUNGdlMXh1SUNCamIyNXpkQ0I3SUdOc1lYTnpUbUZ0WlN3Z1kzZ3NJR2RsZEZOMGVXeGxjeXdnYVc1dVpYSlFjbTl3Y3l3Z2FYTlNkR3dnZlNBOUlIQnliM0J6TzF4dVhHNGdJSEpsZEhWeWJpQW9YRzRnSUNBZ1BHUnBkbHh1SUNBZ0lDQWdZM056UFh0blpYUlRkSGxzWlhNb0oyeHZZV1JwYm1kSmJtUnBZMkYwYjNJbkxDQndjbTl3Y3lsOVhHNGdJQ0FnSUNCamJHRnpjMDVoYldVOWUyTjRLRnh1SUNBZ0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUNBZ2FXNWthV05oZEc5eU9pQjBjblZsTEZ4dUlDQWdJQ0FnSUNBZ0lDZHNiMkZrYVc1bkxXbHVaR2xqWVhSdmNpYzZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJR05zWVhOelRtRnRaVnh1SUNBZ0lDQWdLWDFjYmlBZ0lDQWdJSHN1TGk1cGJtNWxjbEJ5YjNCemZWeHVJQ0FnSUQ1Y2JpQWdJQ0FnSUR4TWIyRmthVzVuUkc5MElHUmxiR0Y1UFhzd2ZTQnZabVp6WlhROWUybHpVblJzZlNBdlBseHVJQ0FnSUNBZ1BFeHZZV1JwYm1kRWIzUWdaR1ZzWVhrOWV6RTJNSDBnYjJabWMyVjBJQzgrWEc0Z0lDQWdJQ0E4VEc5aFpHbHVaMFJ2ZENCa1pXeGhlVDE3TXpJd2ZTQnZabVp6WlhROWV5RnBjMUowYkgwZ0x6NWNiaUFnSUNBOEwyUnBkajVjYmlBZ0tUdGNibjA3WEc1TWIyRmthVzVuU1c1a2FXTmhkRzl5TG1SbFptRjFiSFJRY205d2N5QTlJSHNnYzJsNlpUb2dOQ0I5TzF4dUlsMTkgKi9cIilcbiAgfSk7XG59O1xuXG52YXIgTG9hZGluZ0luZGljYXRvciA9IGZ1bmN0aW9uIExvYWRpbmdJbmRpY2F0b3IocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICAgIGlzUnRsID0gcHJvcHMuaXNSdGw7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdsb2FkaW5nSW5kaWNhdG9yJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgaW5uZXJQcm9wcyksIGpzeChMb2FkaW5nRG90LCB7XG4gICAgZGVsYXk6IDAsXG4gICAgb2Zmc2V0OiBpc1J0bFxuICB9KSwganN4KExvYWRpbmdEb3QsIHtcbiAgICBkZWxheTogMTYwLFxuICAgIG9mZnNldDogdHJ1ZVxuICB9KSwganN4KExvYWRpbmdEb3QsIHtcbiAgICBkZWxheTogMzIwLFxuICAgIG9mZnNldDogIWlzUnRsXG4gIH0pKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZTogNFxufTtcblxudmFyIGNzcyQxID0gZnVuY3Rpb24gY3NzKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgICBpc0ZvY3VzZWQgPSBfcmVmLmlzRm9jdXNlZCxcbiAgICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnMsXG4gICAgICBib3JkZXJSYWRpdXMgPSBfcmVmJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmc7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdjb250cm9sJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDUgOiBjb2xvcnMubmV1dHJhbDAsXG4gICAgYm9yZGVyQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogaXNGb2N1c2VkID8gY29sb3JzLnByaW1hcnkgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgIGJvcmRlcldpZHRoOiAxLFxuICAgIGJveFNoYWRvdzogaXNGb2N1c2VkID8gXCIwIDAgMCAxcHggXCIuY29uY2F0KGNvbG9ycy5wcmltYXJ5KSA6IHVuZGVmaW5lZCxcbiAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1pbkhlaWdodDogc3BhY2luZy5jb250cm9sSGVpZ2h0LFxuICAgIG91dGxpbmU6ICcwICFpbXBvcnRhbnQnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMTAwbXMnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5wcmltYXJ5IDogY29sb3JzLm5ldXRyYWwzMFxuICAgIH1cbiAgfTtcbn07XG5cbnZhciBDb250cm9sID0gZnVuY3Rpb24gQ29udHJvbChwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZCA9IHByb3BzLmlzRm9jdXNlZCxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICAgIG1lbnVJc09wZW4gPSBwcm9wcy5tZW51SXNPcGVuO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIGNzczogZ2V0U3R5bGVzKCdjb250cm9sJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgY29udHJvbDogdHJ1ZSxcbiAgICAgICdjb250cm9sLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgICAnY29udHJvbC0taXMtZm9jdXNlZCc6IGlzRm9jdXNlZCxcbiAgICAgICdjb250cm9sLS1tZW51LWlzLW9wZW4nOiBtZW51SXNPcGVuXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxudmFyIF9leGNsdWRlZCQxID0gW1wiZGF0YVwiXTtcbnZhciBncm91cENTUyA9IGZ1bmN0aW9uIGdyb3VwQ1NTKF9yZWYpIHtcbiAgdmFyIHNwYWNpbmcgPSBfcmVmLnRoZW1lLnNwYWNpbmc7XG4gIHJldHVybiB7XG4gICAgcGFkZGluZ0JvdHRvbTogc3BhY2luZy5iYXNlVW5pdCAqIDIsXG4gICAgcGFkZGluZ1RvcDogc3BhY2luZy5iYXNlVW5pdCAqIDJcbiAgfTtcbn07XG5cbnZhciBHcm91cCA9IGZ1bmN0aW9uIEdyb3VwKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIEhlYWRpbmcgPSBwcm9wcy5IZWFkaW5nLFxuICAgICAgaGVhZGluZ1Byb3BzID0gcHJvcHMuaGVhZGluZ1Byb3BzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgICAgdGhlbWUgPSBwcm9wcy50aGVtZSxcbiAgICAgIHNlbGVjdFByb3BzID0gcHJvcHMuc2VsZWN0UHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdncm91cCcsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIGdyb3VwOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwganN4KEhlYWRpbmcsIF9leHRlbmRzKHt9LCBoZWFkaW5nUHJvcHMsIHtcbiAgICBzZWxlY3RQcm9wczogc2VsZWN0UHJvcHMsXG4gICAgdGhlbWU6IHRoZW1lLFxuICAgIGdldFN0eWxlczogZ2V0U3R5bGVzLFxuICAgIGN4OiBjeFxuICB9KSwgbGFiZWwpLCBqc3goXCJkaXZcIiwgbnVsbCwgY2hpbGRyZW4pKTtcbn07XG5cbnZhciBncm91cEhlYWRpbmdDU1MgPSBmdW5jdGlvbiBncm91cEhlYWRpbmdDU1MoX3JlZjIpIHtcbiAgdmFyIHNwYWNpbmcgPSBfcmVmMi50aGVtZS5zcGFjaW5nO1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnZ3JvdXAnLFxuICAgIGNvbG9yOiAnIzk5OScsXG4gICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmb250U2l6ZTogJzc1JScsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIG1hcmdpbkJvdHRvbTogJzAuMjVlbScsXG4gICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcuYmFzZVVuaXQgKiAzLFxuICAgIHBhZGRpbmdSaWdodDogc3BhY2luZy5iYXNlVW5pdCAqIDMsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbiAgfTtcbn07XG52YXIgR3JvdXBIZWFkaW5nID0gZnVuY3Rpb24gR3JvdXBIZWFkaW5nKHByb3BzKSB7XG4gIHZhciBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuXG4gIHZhciBfY2xlYW5Db21tb25Qcm9wcyA9IGNsZWFuQ29tbW9uUHJvcHMocHJvcHMpO1xuICAgICAgX2NsZWFuQ29tbW9uUHJvcHMuZGF0YTtcbiAgICAgIHZhciBpbm5lclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9jbGVhbkNvbW1vblByb3BzLCBfZXhjbHVkZWQkMSk7XG5cbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2dyb3VwSGVhZGluZycsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdncm91cC1oZWFkaW5nJzogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgaW5uZXJQcm9wcykpO1xufTtcblxudmFyIF9leGNsdWRlZCA9IFtcImlubmVyUmVmXCIsIFwiaXNEaXNhYmxlZFwiLCBcImlzSGlkZGVuXCIsIFwiaW5wdXRDbGFzc05hbWVcIl07XG52YXIgaW5wdXRDU1MgPSBmdW5jdGlvbiBpbnB1dENTUyhfcmVmKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZi5pc0Rpc2FibGVkLFxuICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkMih7XG4gICAgbWFyZ2luOiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBwYWRkaW5nQm90dG9tOiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBwYWRkaW5nVG9wOiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICB2aXNpYmlsaXR5OiBpc0Rpc2FibGVkID8gJ2hpZGRlbicgOiAndmlzaWJsZScsXG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsODAsXG4gICAgLy8gZm9yY2UgY3NzIHRvIHJlY29tcHV0ZSB3aGVuIHZhbHVlIGNoYW5nZSBkdWUgdG8gQGVtb3Rpb24gYnVnLlxuICAgIC8vIFdlIGNhbiByZW1vdmUgaXQgd2hlbmV2ZXIgdGhlIGJ1ZyBpcyBmaXhlZC5cbiAgICB0cmFuc2Zvcm06IHZhbHVlID8gJ3RyYW5zbGF0ZVooMCknIDogJydcbiAgfSwgY29udGFpbmVyU3R5bGUpO1xufTtcbnZhciBzcGFjaW5nU3R5bGUgPSB7XG4gIGdyaWRBcmVhOiAnMSAvIDInLFxuICBmb250OiAnaW5oZXJpdCcsXG4gIG1pbldpZHRoOiAnMnB4JyxcbiAgYm9yZGVyOiAwLFxuICBtYXJnaW46IDAsXG4gIG91dGxpbmU6IDAsXG4gIHBhZGRpbmc6IDBcbn07XG52YXIgY29udGFpbmVyU3R5bGUgPSB7XG4gIGZsZXg6ICcxIDEgYXV0bycsXG4gIGRpc3BsYXk6ICdpbmxpbmUtZ3JpZCcsXG4gIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcwIG1pbi1jb250ZW50JyxcbiAgJyY6YWZ0ZXInOiBfb2JqZWN0U3ByZWFkMih7XG4gICAgY29udGVudDogJ2F0dHIoZGF0YS12YWx1ZSkgXCIgXCInLFxuICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIHdoaXRlU3BhY2U6ICdwcmUnXG4gIH0sIHNwYWNpbmdTdHlsZSlcbn07XG5cbnZhciBpbnB1dFN0eWxlID0gZnVuY3Rpb24gaW5wdXRTdHlsZShpc0hpZGRlbikge1xuICByZXR1cm4gX29iamVjdFNwcmVhZDIoe1xuICAgIGxhYmVsOiAnaW5wdXQnLFxuICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgYmFja2dyb3VuZDogMCxcbiAgICBvcGFjaXR5OiBpc0hpZGRlbiA/IDAgOiAxLFxuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSwgc3BhY2luZ1N0eWxlKTtcbn07XG5cbnZhciBJbnB1dCA9IGZ1bmN0aW9uIElucHV0KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZTtcblxuICB2YXIgX2NsZWFuQ29tbW9uUHJvcHMgPSBjbGVhbkNvbW1vblByb3BzKHByb3BzKSxcbiAgICAgIGlubmVyUmVmID0gX2NsZWFuQ29tbW9uUHJvcHMuaW5uZXJSZWYsXG4gICAgICBpc0Rpc2FibGVkID0gX2NsZWFuQ29tbW9uUHJvcHMuaXNEaXNhYmxlZCxcbiAgICAgIGlzSGlkZGVuID0gX2NsZWFuQ29tbW9uUHJvcHMuaXNIaWRkZW4sXG4gICAgICBpbnB1dENsYXNzTmFtZSA9IF9jbGVhbkNvbW1vblByb3BzLmlucHV0Q2xhc3NOYW1lLFxuICAgICAgaW5uZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfY2xlYW5Db21tb25Qcm9wcywgX2V4Y2x1ZGVkKTtcblxuICByZXR1cm4ganN4KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdpbnB1dC1jb250YWluZXInOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKSxcbiAgICBjc3M6IGdldFN0eWxlcygnaW5wdXQnLCBwcm9wcyksXG4gICAgXCJkYXRhLXZhbHVlXCI6IHZhbHVlIHx8ICcnXG4gIH0sIGpzeChcImlucHV0XCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIGlucHV0OiB0cnVlXG4gICAgfSwgaW5wdXRDbGFzc05hbWUpLFxuICAgIHJlZjogaW5uZXJSZWYsXG4gICAgc3R5bGU6IGlucHV0U3R5bGUoaXNIaWRkZW4pLFxuICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkXG4gIH0sIGlubmVyUHJvcHMpKSk7XG59O1xuXG52YXIgbXVsdGlWYWx1ZUNTUyA9IGZ1bmN0aW9uIG11bHRpVmFsdWVDU1MoX3JlZikge1xuICB2YXIgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX3JlZiR0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ211bHRpVmFsdWUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLm5ldXRyYWwxMCxcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyAvIDIsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG1hcmdpbjogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgbWluV2lkdGg6IDAgLy8gcmVzb2x2ZXMgZmxleC90ZXh0LW92ZXJmbG93IGJ1Z1xuXG4gIH07XG59O1xudmFyIG11bHRpVmFsdWVMYWJlbENTUyA9IGZ1bmN0aW9uIG11bHRpVmFsdWVMYWJlbENTUyhfcmVmMikge1xuICB2YXIgX3JlZjIkdGhlbWUgPSBfcmVmMi50aGVtZSxcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9yZWYyJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgIGNvbG9ycyA9IF9yZWYyJHRoZW1lLmNvbG9ycyxcbiAgICAgIGNyb3BXaXRoRWxsaXBzaXMgPSBfcmVmMi5jcm9wV2l0aEVsbGlwc2lzO1xuICByZXR1cm4ge1xuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzIC8gMixcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw4MCxcbiAgICBmb250U2l6ZTogJzg1JScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBhZGRpbmc6IDMsXG4gICAgcGFkZGluZ0xlZnQ6IDYsXG4gICAgdGV4dE92ZXJmbG93OiBjcm9wV2l0aEVsbGlwc2lzIHx8IGNyb3BXaXRoRWxsaXBzaXMgPT09IHVuZGVmaW5lZCA/ICdlbGxpcHNpcycgOiB1bmRlZmluZWQsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgfTtcbn07XG52YXIgbXVsdGlWYWx1ZVJlbW92ZUNTUyA9IGZ1bmN0aW9uIG11bHRpVmFsdWVSZW1vdmVDU1MoX3JlZjMpIHtcbiAgdmFyIF9yZWYzJHRoZW1lID0gX3JlZjMudGhlbWUsXG4gICAgICBzcGFjaW5nID0gX3JlZjMkdGhlbWUuc3BhY2luZyxcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9yZWYzJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgIGNvbG9ycyA9IF9yZWYzJHRoZW1lLmNvbG9ycyxcbiAgICAgIGlzRm9jdXNlZCA9IF9yZWYzLmlzRm9jdXNlZDtcbiAgcmV0dXJuIHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyAvIDIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMuZGFuZ2VyTGlnaHQgOiB1bmRlZmluZWQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nLmJhc2VVbml0LFxuICAgIHBhZGRpbmdSaWdodDogc3BhY2luZy5iYXNlVW5pdCxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZGFuZ2VyTGlnaHQsXG4gICAgICBjb2xvcjogY29sb3JzLmRhbmdlclxuICAgIH1cbiAgfTtcbn07XG52YXIgTXVsdGlWYWx1ZUdlbmVyaWMgPSBmdW5jdGlvbiBNdWx0aVZhbHVlR2VuZXJpYyhfcmVmNCkge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmNC5jaGlsZHJlbixcbiAgICAgIGlubmVyUHJvcHMgPSBfcmVmNC5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIGlubmVyUHJvcHMsIGNoaWxkcmVuKTtcbn07XG52YXIgTXVsdGlWYWx1ZUNvbnRhaW5lciA9IE11bHRpVmFsdWVHZW5lcmljO1xudmFyIE11bHRpVmFsdWVMYWJlbCA9IE11bHRpVmFsdWVHZW5lcmljO1xuZnVuY3Rpb24gTXVsdGlWYWx1ZVJlbW92ZShfcmVmNSkge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmNS5jaGlsZHJlbixcbiAgICAgIGlubmVyUHJvcHMgPSBfcmVmNS5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICByb2xlOiBcImJ1dHRvblwiXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbiB8fCBqc3goQ3Jvc3NJY29uLCB7XG4gICAgc2l6ZTogMTRcbiAgfSkpO1xufVxuXG52YXIgTXVsdGlWYWx1ZSA9IGZ1bmN0aW9uIE11bHRpVmFsdWUocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjb21wb25lbnRzID0gcHJvcHMuY29tcG9uZW50cyxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBkYXRhID0gcHJvcHMuZGF0YSxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzLFxuICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICByZW1vdmVQcm9wcyA9IHByb3BzLnJlbW92ZVByb3BzLFxuICAgICAgc2VsZWN0UHJvcHMgPSBwcm9wcy5zZWxlY3RQcm9wcztcbiAgdmFyIENvbnRhaW5lciA9IGNvbXBvbmVudHMuQ29udGFpbmVyLFxuICAgICAgTGFiZWwgPSBjb21wb25lbnRzLkxhYmVsLFxuICAgICAgUmVtb3ZlID0gY29tcG9uZW50cy5SZW1vdmU7XG4gIHJldHVybiBqc3goQ2xhc3NOYW1lcywgbnVsbCwgZnVuY3Rpb24gKF9yZWY2KSB7XG4gICAgdmFyIGNzcyA9IF9yZWY2LmNzcyxcbiAgICAgICAgZW1vdGlvbkN4ID0gX3JlZjYuY3g7XG4gICAgcmV0dXJuIGpzeChDb250YWluZXIsIHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBpbm5lclByb3BzOiBfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgIGNsYXNzTmFtZTogZW1vdGlvbkN4KGNzcyhnZXRTdHlsZXMoJ211bHRpVmFsdWUnLCBwcm9wcykpLCBjeCh7XG4gICAgICAgICAgJ211bHRpLXZhbHVlJzogdHJ1ZSxcbiAgICAgICAgICAnbXVsdGktdmFsdWUtLWlzLWRpc2FibGVkJzogaXNEaXNhYmxlZFxuICAgICAgICB9LCBjbGFzc05hbWUpKVxuICAgICAgfSwgaW5uZXJQcm9wcyksXG4gICAgICBzZWxlY3RQcm9wczogc2VsZWN0UHJvcHNcbiAgICB9LCBqc3goTGFiZWwsIHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgIGNsYXNzTmFtZTogZW1vdGlvbkN4KGNzcyhnZXRTdHlsZXMoJ211bHRpVmFsdWVMYWJlbCcsIHByb3BzKSksIGN4KHtcbiAgICAgICAgICAnbXVsdGktdmFsdWVfX2xhYmVsJzogdHJ1ZVxuICAgICAgICB9LCBjbGFzc05hbWUpKVxuICAgICAgfSxcbiAgICAgIHNlbGVjdFByb3BzOiBzZWxlY3RQcm9wc1xuICAgIH0sIGNoaWxkcmVuKSwganN4KFJlbW92ZSwge1xuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGlubmVyUHJvcHM6IF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgY2xhc3NOYW1lOiBlbW90aW9uQ3goY3NzKGdldFN0eWxlcygnbXVsdGlWYWx1ZVJlbW92ZScsIHByb3BzKSksIGN4KHtcbiAgICAgICAgICAnbXVsdGktdmFsdWVfX3JlbW92ZSc6IHRydWVcbiAgICAgICAgfSwgY2xhc3NOYW1lKSksXG4gICAgICAgICdhcmlhLWxhYmVsJzogXCJSZW1vdmUgXCIuY29uY2F0KGNoaWxkcmVuIHx8ICdvcHRpb24nKVxuICAgICAgfSwgcmVtb3ZlUHJvcHMpLFxuICAgICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzXG4gICAgfSkpO1xuICB9KTtcbn07XG5cbnZhciBvcHRpb25DU1MgPSBmdW5jdGlvbiBvcHRpb25DU1MoX3JlZikge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZCA9IF9yZWYuaXNGb2N1c2VkLFxuICAgICAgaXNTZWxlY3RlZCA9IF9yZWYuaXNTZWxlY3RlZCxcbiAgICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZyxcbiAgICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnb3B0aW9uJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzU2VsZWN0ZWQgPyBjb2xvcnMucHJpbWFyeSA6IGlzRm9jdXNlZCA/IGNvbG9ycy5wcmltYXJ5MjUgOiAndHJhbnNwYXJlbnQnLFxuICAgIGNvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwyMCA6IGlzU2VsZWN0ZWQgPyBjb2xvcnMubmV1dHJhbDAgOiAnaW5oZXJpdCcsXG4gICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIHBhZGRpbmc6IFwiXCIuY29uY2F0KHNwYWNpbmcuYmFzZVVuaXQgKiAyLCBcInB4IFwiKS5jb25jYXQoc3BhY2luZy5iYXNlVW5pdCAqIDMsIFwicHhcIiksXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICAvLyBwcm92aWRlIHNvbWUgYWZmb3JkYW5jZSBvbiB0b3VjaCBkZXZpY2VzXG4gICAgJzphY3RpdmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICFpc0Rpc2FibGVkID8gaXNTZWxlY3RlZCA/IGNvbG9ycy5wcmltYXJ5IDogY29sb3JzLnByaW1hcnk1MCA6IHVuZGVmaW5lZFxuICAgIH1cbiAgfTtcbn07XG5cbnZhciBPcHRpb24gPSBmdW5jdGlvbiBPcHRpb24ocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICBpc0ZvY3VzZWQgPSBwcm9wcy5pc0ZvY3VzZWQsXG4gICAgICBpc1NlbGVjdGVkID0gcHJvcHMuaXNTZWxlY3RlZCxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ29wdGlvbicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIG9wdGlvbjogdHJ1ZSxcbiAgICAgICdvcHRpb24tLWlzLWRpc2FibGVkJzogaXNEaXNhYmxlZCxcbiAgICAgICdvcHRpb24tLWlzLWZvY3VzZWQnOiBpc0ZvY3VzZWQsXG4gICAgICAnb3B0aW9uLS1pcy1zZWxlY3RlZCc6IGlzU2VsZWN0ZWRcbiAgICB9LCBjbGFzc05hbWUpLFxuICAgIHJlZjogaW5uZXJSZWYsXG4gICAgXCJhcmlhLWRpc2FibGVkXCI6IGlzRGlzYWJsZWRcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG5cbnZhciBwbGFjZWhvbGRlckNTUyA9IGZ1bmN0aW9uIHBsYWNlaG9sZGVyQ1NTKF9yZWYpIHtcbiAgdmFyIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZyxcbiAgICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAncGxhY2Vob2xkZXInLFxuICAgIGNvbG9yOiBjb2xvcnMubmV1dHJhbDUwLFxuICAgIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gICAgbWFyZ2luTGVmdDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgbWFyZ2luUmlnaHQ6IHNwYWNpbmcuYmFzZVVuaXQgLyAyXG4gIH07XG59O1xuXG52YXIgUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiBQbGFjZWhvbGRlcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ3BsYWNlaG9sZGVyJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgcGxhY2Vob2xkZXI6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG52YXIgY3NzID0gZnVuY3Rpb24gY3NzKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgICBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ3NpbmdsZVZhbHVlJyxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsNDAgOiBjb2xvcnMubmV1dHJhbDgwLFxuICAgIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gICAgbWFyZ2luTGVmdDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgbWFyZ2luUmlnaHQ6IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICB9O1xufTtcblxudmFyIFNpbmdsZVZhbHVlID0gZnVuY3Rpb24gU2luZ2xlVmFsdWUocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ3NpbmdsZVZhbHVlJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ3NpbmdsZS12YWx1ZSc6IHRydWUsXG4gICAgICAnc2luZ2xlLXZhbHVlLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWRcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG52YXIgY29tcG9uZW50cyA9IHtcbiAgQ2xlYXJJbmRpY2F0b3I6IENsZWFySW5kaWNhdG9yLFxuICBDb250cm9sOiBDb250cm9sLFxuICBEcm9wZG93bkluZGljYXRvcjogRHJvcGRvd25JbmRpY2F0b3IsXG4gIERvd25DaGV2cm9uOiBEb3duQ2hldnJvbixcbiAgQ3Jvc3NJY29uOiBDcm9zc0ljb24sXG4gIEdyb3VwOiBHcm91cCxcbiAgR3JvdXBIZWFkaW5nOiBHcm91cEhlYWRpbmcsXG4gIEluZGljYXRvcnNDb250YWluZXI6IEluZGljYXRvcnNDb250YWluZXIsXG4gIEluZGljYXRvclNlcGFyYXRvcjogSW5kaWNhdG9yU2VwYXJhdG9yLFxuICBJbnB1dDogSW5wdXQsXG4gIExvYWRpbmdJbmRpY2F0b3I6IExvYWRpbmdJbmRpY2F0b3IsXG4gIE1lbnU6IE1lbnUsXG4gIE1lbnVMaXN0OiBNZW51TGlzdCxcbiAgTWVudVBvcnRhbDogTWVudVBvcnRhbCxcbiAgTG9hZGluZ01lc3NhZ2U6IExvYWRpbmdNZXNzYWdlLFxuICBOb09wdGlvbnNNZXNzYWdlOiBOb09wdGlvbnNNZXNzYWdlLFxuICBNdWx0aVZhbHVlOiBNdWx0aVZhbHVlLFxuICBNdWx0aVZhbHVlQ29udGFpbmVyOiBNdWx0aVZhbHVlQ29udGFpbmVyLFxuICBNdWx0aVZhbHVlTGFiZWw6IE11bHRpVmFsdWVMYWJlbCxcbiAgTXVsdGlWYWx1ZVJlbW92ZTogTXVsdGlWYWx1ZVJlbW92ZSxcbiAgT3B0aW9uOiBPcHRpb24sXG4gIFBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlcixcbiAgU2VsZWN0Q29udGFpbmVyOiBTZWxlY3RDb250YWluZXIsXG4gIFNpbmdsZVZhbHVlOiBTaW5nbGVWYWx1ZSxcbiAgVmFsdWVDb250YWluZXI6IFZhbHVlQ29udGFpbmVyXG59O1xudmFyIGRlZmF1bHRDb21wb25lbnRzID0gZnVuY3Rpb24gZGVmYXVsdENvbXBvbmVudHMocHJvcHMpIHtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBjb21wb25lbnRzKSwgcHJvcHMuY29tcG9uZW50cyk7XG59O1xuXG5leHBvcnQgeyBpc1RvdWNoQ2FwYWJsZSBhcyBBLCBpc01vYmlsZURldmljZSBhcyBCLCBtdWx0aVZhbHVlQXNWYWx1ZSBhcyBDLCBzaW5nbGVWYWx1ZUFzVmFsdWUgYXMgRCwgdmFsdWVUZXJuYXJ5IGFzIEUsIGNsYXNzTmFtZXMgYXMgRiwgZGVmYXVsdENvbXBvbmVudHMgYXMgRywgbm90TnVsbGlzaCBhcyBILCBpc0RvY3VtZW50RWxlbWVudCBhcyBJLCBjbGVhblZhbHVlIGFzIEosIHNjcm9sbEludG9WaWV3IGFzIEssIG5vb3AgYXMgTCwgTWVudVBsYWNlciBhcyBNLCBoYW5kbGVJbnB1dENoYW5nZSBhcyBOLCBfY3JlYXRlU3VwZXIgYXMgXywgX29iamVjdFNwcmVhZDIgYXMgYSwgY2xlYXJJbmRpY2F0b3JDU1MgYXMgYiwgY29tcG9uZW50cyBhcyBjLCBjb250YWluZXJDU1MgYXMgZCwgY3NzJDEgYXMgZSwgZHJvcGRvd25JbmRpY2F0b3JDU1MgYXMgZiwgZ3JvdXBDU1MgYXMgZywgZ3JvdXBIZWFkaW5nQ1NTIGFzIGgsIGluZGljYXRvcnNDb250YWluZXJDU1MgYXMgaSwgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTIGFzIGosIGlucHV0Q1NTIGFzIGssIGxvYWRpbmdJbmRpY2F0b3JDU1MgYXMgbCwgbG9hZGluZ01lc3NhZ2VDU1MgYXMgbSwgbWVudUNTUyBhcyBuLCBtZW51TGlzdENTUyBhcyBvLCBtZW51UG9ydGFsQ1NTIGFzIHAsIG11bHRpVmFsdWVDU1MgYXMgcSwgcmVtb3ZlUHJvcHMgYXMgciwgc3VwcG9ydHNQYXNzaXZlRXZlbnRzIGFzIHMsIG11bHRpVmFsdWVMYWJlbENTUyBhcyB0LCBtdWx0aVZhbHVlUmVtb3ZlQ1NTIGFzIHUsIG5vT3B0aW9uc01lc3NhZ2VDU1MgYXMgdiwgb3B0aW9uQ1NTIGFzIHcsIHBsYWNlaG9sZGVyQ1NTIGFzIHgsIGNzcyBhcyB5LCB2YWx1ZUNvbnRhaW5lckNTUyBhcyB6IH07XG4iLCJpbXBvcnQgeyBhIGFzIF9vYmplY3RTcHJlYWQyIH0gZnJvbSAnLi9pbmRleC1hNzY5MGEzMy5lc20uanMnO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXknO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJkZWZhdWx0SW5wdXRWYWx1ZVwiLCBcImRlZmF1bHRNZW51SXNPcGVuXCIsIFwiZGVmYXVsdFZhbHVlXCIsIFwiaW5wdXRWYWx1ZVwiLCBcIm1lbnVJc09wZW5cIiwgXCJvbkNoYW5nZVwiLCBcIm9uSW5wdXRDaGFuZ2VcIiwgXCJvbk1lbnVDbG9zZVwiLCBcIm9uTWVudU9wZW5cIiwgXCJ2YWx1ZVwiXTtcbmZ1bmN0aW9uIHVzZVN0YXRlTWFuYWdlcihfcmVmKSB7XG4gIHZhciBfcmVmJGRlZmF1bHRJbnB1dFZhbHUgPSBfcmVmLmRlZmF1bHRJbnB1dFZhbHVlLFxuICAgICAgZGVmYXVsdElucHV0VmFsdWUgPSBfcmVmJGRlZmF1bHRJbnB1dFZhbHUgPT09IHZvaWQgMCA/ICcnIDogX3JlZiRkZWZhdWx0SW5wdXRWYWx1LFxuICAgICAgX3JlZiRkZWZhdWx0TWVudUlzT3BlID0gX3JlZi5kZWZhdWx0TWVudUlzT3BlbixcbiAgICAgIGRlZmF1bHRNZW51SXNPcGVuID0gX3JlZiRkZWZhdWx0TWVudUlzT3BlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGVmYXVsdE1lbnVJc09wZSxcbiAgICAgIF9yZWYkZGVmYXVsdFZhbHVlID0gX3JlZi5kZWZhdWx0VmFsdWUsXG4gICAgICBkZWZhdWx0VmFsdWUgPSBfcmVmJGRlZmF1bHRWYWx1ZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkZGVmYXVsdFZhbHVlLFxuICAgICAgcHJvcHNJbnB1dFZhbHVlID0gX3JlZi5pbnB1dFZhbHVlLFxuICAgICAgcHJvcHNNZW51SXNPcGVuID0gX3JlZi5tZW51SXNPcGVuLFxuICAgICAgcHJvcHNPbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBwcm9wc09uSW5wdXRDaGFuZ2UgPSBfcmVmLm9uSW5wdXRDaGFuZ2UsXG4gICAgICBwcm9wc09uTWVudUNsb3NlID0gX3JlZi5vbk1lbnVDbG9zZSxcbiAgICAgIHByb3BzT25NZW51T3BlbiA9IF9yZWYub25NZW51T3BlbixcbiAgICAgIHByb3BzVmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgcmVzdFNlbGVjdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIF9leGNsdWRlZCk7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKHByb3BzSW5wdXRWYWx1ZSAhPT0gdW5kZWZpbmVkID8gcHJvcHNJbnB1dFZhbHVlIDogZGVmYXVsdElucHV0VmFsdWUpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBzdGF0ZUlucHV0VmFsdWUgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0U3RhdGVJbnB1dFZhbHVlID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKHByb3BzTWVudUlzT3BlbiAhPT0gdW5kZWZpbmVkID8gcHJvcHNNZW51SXNPcGVuIDogZGVmYXVsdE1lbnVJc09wZW4pLFxuICAgICAgX3VzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTMsIDIpLFxuICAgICAgc3RhdGVNZW51SXNPcGVuID0gX3VzZVN0YXRlNFswXSxcbiAgICAgIHNldFN0YXRlTWVudUlzT3BlbiA9IF91c2VTdGF0ZTRbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTUgPSB1c2VTdGF0ZShwcm9wc1ZhbHVlICE9PSB1bmRlZmluZWQgPyBwcm9wc1ZhbHVlIDogZGVmYXVsdFZhbHVlKSxcbiAgICAgIF91c2VTdGF0ZTYgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGU1LCAyKSxcbiAgICAgIHN0YXRlVmFsdWUgPSBfdXNlU3RhdGU2WzBdLFxuICAgICAgc2V0U3RhdGVWYWx1ZSA9IF91c2VTdGF0ZTZbMV07XG5cbiAgdmFyIG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlLCBhY3Rpb25NZXRhKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wc09uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wc09uQ2hhbmdlKHZhbHVlLCBhY3Rpb25NZXRhKTtcbiAgICB9XG5cbiAgICBzZXRTdGF0ZVZhbHVlKHZhbHVlKTtcbiAgfSwgW3Byb3BzT25DaGFuZ2VdKTtcbiAgdmFyIG9uSW5wdXRDaGFuZ2UgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICB2YXIgbmV3VmFsdWU7XG5cbiAgICBpZiAodHlwZW9mIHByb3BzT25JbnB1dENoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbmV3VmFsdWUgPSBwcm9wc09uSW5wdXRDaGFuZ2UodmFsdWUsIGFjdGlvbk1ldGEpO1xuICAgIH1cblxuICAgIHNldFN0YXRlSW5wdXRWYWx1ZShuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkID8gbmV3VmFsdWUgOiB2YWx1ZSk7XG4gIH0sIFtwcm9wc09uSW5wdXRDaGFuZ2VdKTtcbiAgdmFyIG9uTWVudU9wZW4gPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wc09uTWVudU9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BzT25NZW51T3BlbigpO1xuICAgIH1cblxuICAgIHNldFN0YXRlTWVudUlzT3Blbih0cnVlKTtcbiAgfSwgW3Byb3BzT25NZW51T3Blbl0pO1xuICB2YXIgb25NZW51Q2xvc2UgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wc09uTWVudUNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wc09uTWVudUNsb3NlKCk7XG4gICAgfVxuXG4gICAgc2V0U3RhdGVNZW51SXNPcGVuKGZhbHNlKTtcbiAgfSwgW3Byb3BzT25NZW51Q2xvc2VdKTtcbiAgdmFyIGlucHV0VmFsdWUgPSBwcm9wc0lucHV0VmFsdWUgIT09IHVuZGVmaW5lZCA/IHByb3BzSW5wdXRWYWx1ZSA6IHN0YXRlSW5wdXRWYWx1ZTtcbiAgdmFyIG1lbnVJc09wZW4gPSBwcm9wc01lbnVJc09wZW4gIT09IHVuZGVmaW5lZCA/IHByb3BzTWVudUlzT3BlbiA6IHN0YXRlTWVudUlzT3BlbjtcbiAgdmFyIHZhbHVlID0gcHJvcHNWYWx1ZSAhPT0gdW5kZWZpbmVkID8gcHJvcHNWYWx1ZSA6IHN0YXRlVmFsdWU7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgcmVzdFNlbGVjdFByb3BzKSwge30sIHtcbiAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuICAgIG1lbnVJc09wZW46IG1lbnVJc09wZW4sXG4gICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgIG9uSW5wdXRDaGFuZ2U6IG9uSW5wdXRDaGFuZ2UsXG4gICAgb25NZW51Q2xvc2U6IG9uTWVudUNsb3NlLFxuICAgIG9uTWVudU9wZW46IG9uTWVudU9wZW4sXG4gICAgdmFsdWU6IHZhbHVlXG4gIH0pO1xufVxuXG5leHBvcnQgeyB1c2VTdGF0ZU1hbmFnZXIgYXMgdSB9O1xuIiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJ2YXIgc2FmZUlzTmFOID0gTnVtYmVyLmlzTmFOIHx8XG4gICAgZnVuY3Rpb24gcG9ueWZpbGwodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IHZhbHVlO1xuICAgIH07XG5mdW5jdGlvbiBpc0VxdWFsKGZpcnN0LCBzZWNvbmQpIHtcbiAgICBpZiAoZmlyc3QgPT09IHNlY29uZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHNhZmVJc05hTihmaXJzdCkgJiYgc2FmZUlzTmFOKHNlY29uZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGFyZUlucHV0c0VxdWFsKG5ld0lucHV0cywgbGFzdElucHV0cykge1xuICAgIGlmIChuZXdJbnB1dHMubGVuZ3RoICE9PSBsYXN0SW5wdXRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3SW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghaXNFcXVhbChuZXdJbnB1dHNbaV0sIGxhc3RJbnB1dHNbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG1lbW9pemVPbmUocmVzdWx0Rm4sIGlzRXF1YWwpIHtcbiAgICBpZiAoaXNFcXVhbCA9PT0gdm9pZCAwKSB7IGlzRXF1YWwgPSBhcmVJbnB1dHNFcXVhbDsgfVxuICAgIHZhciBsYXN0VGhpcztcbiAgICB2YXIgbGFzdEFyZ3MgPSBbXTtcbiAgICB2YXIgbGFzdFJlc3VsdDtcbiAgICB2YXIgY2FsbGVkT25jZSA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIG1lbW9pemVkKCkge1xuICAgICAgICB2YXIgbmV3QXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgbmV3QXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxsZWRPbmNlICYmIGxhc3RUaGlzID09PSB0aGlzICYmIGlzRXF1YWwobmV3QXJncywgbGFzdEFyZ3MpKSB7XG4gICAgICAgICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBsYXN0UmVzdWx0ID0gcmVzdWx0Rm4uYXBwbHkodGhpcywgbmV3QXJncyk7XG4gICAgICAgIGNhbGxlZE9uY2UgPSB0cnVlO1xuICAgICAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgICAgIGxhc3RBcmdzID0gbmV3QXJncztcbiAgICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgfVxuICAgIHJldHVybiBtZW1vaXplZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZU9uZTtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCB7IGEgYXMgX29iamVjdFNwcmVhZDIsIHIgYXMgcmVtb3ZlUHJvcHMsIHMgYXMgc3VwcG9ydHNQYXNzaXZlRXZlbnRzLCBiIGFzIGNsZWFySW5kaWNhdG9yQ1NTLCBkIGFzIGNvbnRhaW5lckNTUywgZSBhcyBjc3MkMSwgZiBhcyBkcm9wZG93bkluZGljYXRvckNTUywgZyBhcyBncm91cENTUywgaCBhcyBncm91cEhlYWRpbmdDU1MsIGkgYXMgaW5kaWNhdG9yc0NvbnRhaW5lckNTUywgaiBhcyBpbmRpY2F0b3JTZXBhcmF0b3JDU1MsIGsgYXMgaW5wdXRDU1MsIGwgYXMgbG9hZGluZ0luZGljYXRvckNTUywgbSBhcyBsb2FkaW5nTWVzc2FnZUNTUywgbiBhcyBtZW51Q1NTLCBvIGFzIG1lbnVMaXN0Q1NTLCBwIGFzIG1lbnVQb3J0YWxDU1MsIHEgYXMgbXVsdGlWYWx1ZUNTUywgdCBhcyBtdWx0aVZhbHVlTGFiZWxDU1MsIHUgYXMgbXVsdGlWYWx1ZVJlbW92ZUNTUywgdiBhcyBub09wdGlvbnNNZXNzYWdlQ1NTLCB3IGFzIG9wdGlvbkNTUywgeCBhcyBwbGFjZWhvbGRlckNTUywgeSBhcyBjc3MkMiwgeiBhcyB2YWx1ZUNvbnRhaW5lckNTUywgQSBhcyBpc1RvdWNoQ2FwYWJsZSwgQiBhcyBpc01vYmlsZURldmljZSwgXyBhcyBfY3JlYXRlU3VwZXIsIEMgYXMgbXVsdGlWYWx1ZUFzVmFsdWUsIEQgYXMgc2luZ2xlVmFsdWVBc1ZhbHVlLCBFIGFzIHZhbHVlVGVybmFyeSwgRiBhcyBjbGFzc05hbWVzLCBHIGFzIGRlZmF1bHRDb21wb25lbnRzLCBIIGFzIG5vdE51bGxpc2gsIEkgYXMgaXNEb2N1bWVudEVsZW1lbnQsIEogYXMgY2xlYW5WYWx1ZSwgSyBhcyBzY3JvbGxJbnRvVmlldywgTCBhcyBub29wLCBNIGFzIE1lbnVQbGFjZXIgfSBmcm9tICcuL2luZGV4LWE3NjkwYTMzLmVzbS5qcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cyc7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU1lbW8sIEZyYWdtZW50LCB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSAnbWVtb2l6ZS1vbmUnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5cbmZ1bmN0aW9uIF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fJDEoKSB7IHJldHVybiBcIllvdSBoYXZlIHRyaWVkIHRvIHN0cmluZ2lmeSBvYmplY3QgcmV0dXJuZWQgZnJvbSBgY3NzYCBmdW5jdGlvbi4gSXQgaXNuJ3Qgc3VwcG9zZWQgdG8gYmUgdXNlZCBkaXJlY3RseSAoZS5nLiBhcyB2YWx1ZSBvZiB0aGUgYGNsYXNzTmFtZWAgcHJvcCksIGJ1dCByYXRoZXIgaGFuZGVkIHRvIGVtb3Rpb24gc28gaXQgY2FuIGhhbmRsZSBpdCAoZS5nLiBhcyB2YWx1ZSBvZiBgY3NzYCBwcm9wKS5cIjsgfVxuXG52YXIgX3JlZiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgbmFtZTogXCI3cGcwY2otYTExeVRleHRcIixcbiAgc3R5bGVzOiBcImxhYmVsOmExMXlUZXh0O3otaW5kZXg6OTk5OTtib3JkZXI6MDtjbGlwOnJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtoZWlnaHQ6MXB4O3dpZHRoOjFweDtwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3doaXRlLXNwYWNlOm5vd3JhcFwiXG59IDoge1xuICBuYW1lOiBcIjFmNDNhdnotYTExeVRleHQtQTExeVRleHRcIixcbiAgc3R5bGVzOiBcImxhYmVsOmExMXlUZXh0O3otaW5kZXg6OTk5OTtib3JkZXI6MDtjbGlwOnJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtoZWlnaHQ6MXB4O3dpZHRoOjFweDtwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3doaXRlLXNwYWNlOm5vd3JhcDtsYWJlbDpBMTF5VGV4dDtcIixcbiAgbWFwOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrRXhNWGxVWlhoMExuUnplQ0pkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZOU1NJc0ltWnBiR1VpT2lKQk1URjVWR1Y0ZEM1MGMzZ2lMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lvZ1FHcHplQ0JxYzNnZ0tpOWNibWx0Y0c5eWRDQjdJR3B6ZUNCOUlHWnliMjBnSjBCbGJXOTBhVzl1TDNKbFlXTjBKenRjYmx4dUx5OGdRWE56YVhOMGFYWmxJSFJsZUhRZ2RHOGdaR1Z6WTNKcFltVWdkbWx6ZFdGc0lHVnNaVzFsYm5SekxpQklhV1JrWlc0Z1ptOXlJSE5wWjJoMFpXUWdkWE5sY25NdVhHNWpiMjV6ZENCQk1URjVWR1Y0ZENBOUlDaHdjbTl3Y3pvZ1NsTllMa2x1ZEhKcGJuTnBZMFZzWlcxbGJuUnpXeWR6Y0dGdUoxMHBJRDArSUNoY2JpQWdQSE53WVc1Y2JpQWdJQ0JqYzNNOWUzdGNiaUFnSUNBZ0lHeGhZbVZzT2lBbllURXhlVlJsZUhRbkxGeHVJQ0FnSUNBZ2VrbHVaR1Y0T2lBNU9UazVMRnh1SUNBZ0lDQWdZbTl5WkdWeU9pQXdMRnh1SUNBZ0lDQWdZMnhwY0RvZ0ozSmxZM1FvTVhCNExDQXhjSGdzSURGd2VDd2dNWEI0S1Njc1hHNGdJQ0FnSUNCb1pXbG5hSFE2SURFc1hHNGdJQ0FnSUNCM2FXUjBhRG9nTVN4Y2JpQWdJQ0FnSUhCdmMybDBhVzl1T2lBbllXSnpiMngxZEdVbkxGeHVJQ0FnSUNBZ2IzWmxjbVpzYjNjNklDZG9hV1JrWlc0bkxGeHVJQ0FnSUNBZ2NHRmtaR2x1WnpvZ01DeGNiaUFnSUNBZ0lIZG9hWFJsVTNCaFkyVTZJQ2R1YjNkeVlYQW5MRnh1SUNBZ0lIMTlYRzRnSUNBZ2V5NHVMbkJ5YjNCemZWeHVJQ0F2UGx4dUtUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdRVEV4ZVZSbGVIUTdYRzRpWFgwPSAqL1wiLFxuICB0b1N0cmluZzogX0VNT1RJT05fU1RSSU5HSUZJRURfQ1NTX0VSUk9SX18kMVxufTtcblxudmFyIEExMXlUZXh0ID0gZnVuY3Rpb24gQTExeVRleHQocHJvcHMpIHtcbiAgcmV0dXJuIGpzeChcInNwYW5cIiwgX2V4dGVuZHMoe1xuICAgIGNzczogX3JlZlxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIGRlZmF1bHRBcmlhTGl2ZU1lc3NhZ2VzID0ge1xuICBndWlkYW5jZTogZnVuY3Rpb24gZ3VpZGFuY2UocHJvcHMpIHtcbiAgICB2YXIgaXNTZWFyY2hhYmxlID0gcHJvcHMuaXNTZWFyY2hhYmxlLFxuICAgICAgICBpc011bHRpID0gcHJvcHMuaXNNdWx0aSxcbiAgICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICAgIHRhYlNlbGVjdHNWYWx1ZSA9IHByb3BzLnRhYlNlbGVjdHNWYWx1ZSxcbiAgICAgICAgY29udGV4dCA9IHByb3BzLmNvbnRleHQ7XG5cbiAgICBzd2l0Y2ggKGNvbnRleHQpIHtcbiAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICByZXR1cm4gXCJVc2UgVXAgYW5kIERvd24gdG8gY2hvb3NlIG9wdGlvbnNcIi5jb25jYXQoaXNEaXNhYmxlZCA/ICcnIDogJywgcHJlc3MgRW50ZXIgdG8gc2VsZWN0IHRoZSBjdXJyZW50bHkgZm9jdXNlZCBvcHRpb24nLCBcIiwgcHJlc3MgRXNjYXBlIHRvIGV4aXQgdGhlIG1lbnVcIikuY29uY2F0KHRhYlNlbGVjdHNWYWx1ZSA/ICcsIHByZXNzIFRhYiB0byBzZWxlY3QgdGhlIG9wdGlvbiBhbmQgZXhpdCB0aGUgbWVudScgOiAnJywgXCIuXCIpO1xuXG4gICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChwcm9wc1snYXJpYS1sYWJlbCddIHx8ICdTZWxlY3QnLCBcIiBpcyBmb2N1c2VkIFwiKS5jb25jYXQoaXNTZWFyY2hhYmxlID8gJyx0eXBlIHRvIHJlZmluZSBsaXN0JyA6ICcnLCBcIiwgcHJlc3MgRG93biB0byBvcGVuIHRoZSBtZW51LCBcIikuY29uY2F0KGlzTXVsdGkgPyAnIHByZXNzIGxlZnQgdG8gZm9jdXMgc2VsZWN0ZWQgdmFsdWVzJyA6ICcnKTtcblxuICAgICAgY2FzZSAndmFsdWUnOlxuICAgICAgICByZXR1cm4gJ1VzZSBsZWZ0IGFuZCByaWdodCB0byB0b2dnbGUgYmV0d2VlbiBmb2N1c2VkIHZhbHVlcywgcHJlc3MgQmFja3NwYWNlIHRvIHJlbW92ZSB0aGUgY3VycmVudGx5IGZvY3VzZWQgdmFsdWUnO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9LFxuICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UocHJvcHMpIHtcbiAgICB2YXIgYWN0aW9uID0gcHJvcHMuYWN0aW9uLFxuICAgICAgICBfcHJvcHMkbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICAgICAgbGFiZWwgPSBfcHJvcHMkbGFiZWwgPT09IHZvaWQgMCA/ICcnIDogX3Byb3BzJGxhYmVsLFxuICAgICAgICBsYWJlbHMgPSBwcm9wcy5sYWJlbHMsXG4gICAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkO1xuXG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2Rlc2VsZWN0LW9wdGlvbic6XG4gICAgICBjYXNlICdwb3AtdmFsdWUnOlxuICAgICAgY2FzZSAncmVtb3ZlLXZhbHVlJzpcbiAgICAgICAgcmV0dXJuIFwib3B0aW9uIFwiLmNvbmNhdChsYWJlbCwgXCIsIGRlc2VsZWN0ZWQuXCIpO1xuXG4gICAgICBjYXNlICdjbGVhcic6XG4gICAgICAgIHJldHVybiAnQWxsIHNlbGVjdGVkIG9wdGlvbnMgaGF2ZSBiZWVuIGNsZWFyZWQuJztcblxuICAgICAgY2FzZSAnaW5pdGlhbC1pbnB1dC1mb2N1cyc6XG4gICAgICAgIHJldHVybiBcIm9wdGlvblwiLmNvbmNhdChsYWJlbHMubGVuZ3RoID4gMSA/ICdzJyA6ICcnLCBcIiBcIikuY29uY2F0KGxhYmVscy5qb2luKCcsJyksIFwiLCBzZWxlY3RlZC5cIik7XG5cbiAgICAgIGNhc2UgJ3NlbGVjdC1vcHRpb24nOlxuICAgICAgICByZXR1cm4gaXNEaXNhYmxlZCA/IFwib3B0aW9uIFwiLmNvbmNhdChsYWJlbCwgXCIgaXMgZGlzYWJsZWQuIFNlbGVjdCBhbm90aGVyIG9wdGlvbi5cIikgOiBcIm9wdGlvbiBcIi5jb25jYXQobGFiZWwsIFwiLCBzZWxlY3RlZC5cIik7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH0sXG4gIG9uRm9jdXM6IGZ1bmN0aW9uIG9uRm9jdXMocHJvcHMpIHtcbiAgICB2YXIgY29udGV4dCA9IHByb3BzLmNvbnRleHQsXG4gICAgICAgIGZvY3VzZWQgPSBwcm9wcy5mb2N1c2VkLFxuICAgICAgICBvcHRpb25zID0gcHJvcHMub3B0aW9ucyxcbiAgICAgICAgX3Byb3BzJGxhYmVsMiA9IHByb3BzLmxhYmVsLFxuICAgICAgICBsYWJlbCA9IF9wcm9wcyRsYWJlbDIgPT09IHZvaWQgMCA/ICcnIDogX3Byb3BzJGxhYmVsMixcbiAgICAgICAgc2VsZWN0VmFsdWUgPSBwcm9wcy5zZWxlY3RWYWx1ZSxcbiAgICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICAgIGlzU2VsZWN0ZWQgPSBwcm9wcy5pc1NlbGVjdGVkO1xuXG4gICAgdmFyIGdldEFycmF5SW5kZXggPSBmdW5jdGlvbiBnZXRBcnJheUluZGV4KGFyciwgaXRlbSkge1xuICAgICAgcmV0dXJuIGFyciAmJiBhcnIubGVuZ3RoID8gXCJcIi5jb25jYXQoYXJyLmluZGV4T2YoaXRlbSkgKyAxLCBcIiBvZiBcIikuY29uY2F0KGFyci5sZW5ndGgpIDogJyc7XG4gICAgfTtcblxuICAgIGlmIChjb250ZXh0ID09PSAndmFsdWUnICYmIHNlbGVjdFZhbHVlKSB7XG4gICAgICByZXR1cm4gXCJ2YWx1ZSBcIi5jb25jYXQobGFiZWwsIFwiIGZvY3VzZWQsIFwiKS5jb25jYXQoZ2V0QXJyYXlJbmRleChzZWxlY3RWYWx1ZSwgZm9jdXNlZCksIFwiLlwiKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ21lbnUnKSB7XG4gICAgICB2YXIgZGlzYWJsZWQgPSBpc0Rpc2FibGVkID8gJyBkaXNhYmxlZCcgOiAnJztcbiAgICAgIHZhciBzdGF0dXMgPSBcIlwiLmNvbmNhdChpc1NlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICdmb2N1c2VkJykuY29uY2F0KGRpc2FibGVkKTtcbiAgICAgIHJldHVybiBcIm9wdGlvbiBcIi5jb25jYXQobGFiZWwsIFwiIFwiKS5jb25jYXQoc3RhdHVzLCBcIiwgXCIpLmNvbmNhdChnZXRBcnJheUluZGV4KG9wdGlvbnMsIGZvY3VzZWQpLCBcIi5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9LFxuICBvbkZpbHRlcjogZnVuY3Rpb24gb25GaWx0ZXIocHJvcHMpIHtcbiAgICB2YXIgaW5wdXRWYWx1ZSA9IHByb3BzLmlucHV0VmFsdWUsXG4gICAgICAgIHJlc3VsdHNNZXNzYWdlID0gcHJvcHMucmVzdWx0c01lc3NhZ2U7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHJlc3VsdHNNZXNzYWdlKS5jb25jYXQoaW5wdXRWYWx1ZSA/ICcgZm9yIHNlYXJjaCB0ZXJtICcgKyBpbnB1dFZhbHVlIDogJycsIFwiLlwiKTtcbiAgfVxufTtcblxudmFyIExpdmVSZWdpb24gPSBmdW5jdGlvbiBMaXZlUmVnaW9uKHByb3BzKSB7XG4gIHZhciBhcmlhU2VsZWN0aW9uID0gcHJvcHMuYXJpYVNlbGVjdGlvbixcbiAgICAgIGZvY3VzZWRPcHRpb24gPSBwcm9wcy5mb2N1c2VkT3B0aW9uLFxuICAgICAgZm9jdXNlZFZhbHVlID0gcHJvcHMuZm9jdXNlZFZhbHVlLFxuICAgICAgZm9jdXNhYmxlT3B0aW9ucyA9IHByb3BzLmZvY3VzYWJsZU9wdGlvbnMsXG4gICAgICBpc0ZvY3VzZWQgPSBwcm9wcy5pc0ZvY3VzZWQsXG4gICAgICBzZWxlY3RWYWx1ZSA9IHByb3BzLnNlbGVjdFZhbHVlLFxuICAgICAgc2VsZWN0UHJvcHMgPSBwcm9wcy5zZWxlY3RQcm9wcyxcbiAgICAgIGlkID0gcHJvcHMuaWQ7XG4gIHZhciBhcmlhTGl2ZU1lc3NhZ2VzID0gc2VsZWN0UHJvcHMuYXJpYUxpdmVNZXNzYWdlcyxcbiAgICAgIGdldE9wdGlvbkxhYmVsID0gc2VsZWN0UHJvcHMuZ2V0T3B0aW9uTGFiZWwsXG4gICAgICBpbnB1dFZhbHVlID0gc2VsZWN0UHJvcHMuaW5wdXRWYWx1ZSxcbiAgICAgIGlzTXVsdGkgPSBzZWxlY3RQcm9wcy5pc011bHRpLFxuICAgICAgaXNPcHRpb25EaXNhYmxlZCA9IHNlbGVjdFByb3BzLmlzT3B0aW9uRGlzYWJsZWQsXG4gICAgICBpc1NlYXJjaGFibGUgPSBzZWxlY3RQcm9wcy5pc1NlYXJjaGFibGUsXG4gICAgICBtZW51SXNPcGVuID0gc2VsZWN0UHJvcHMubWVudUlzT3BlbixcbiAgICAgIG9wdGlvbnMgPSBzZWxlY3RQcm9wcy5vcHRpb25zLFxuICAgICAgc2NyZWVuUmVhZGVyU3RhdHVzID0gc2VsZWN0UHJvcHMuc2NyZWVuUmVhZGVyU3RhdHVzLFxuICAgICAgdGFiU2VsZWN0c1ZhbHVlID0gc2VsZWN0UHJvcHMudGFiU2VsZWN0c1ZhbHVlO1xuICB2YXIgYXJpYUxhYmVsID0gc2VsZWN0UHJvcHNbJ2FyaWEtbGFiZWwnXTtcbiAgdmFyIGFyaWFMaXZlID0gc2VsZWN0UHJvcHNbJ2FyaWEtbGl2ZSddOyAvLyBVcGRhdGUgYXJpYSBsaXZlIG1lc3NhZ2UgY29uZmlndXJhdGlvbiB3aGVuIHByb3AgY2hhbmdlc1xuXG4gIHZhciBtZXNzYWdlcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgZGVmYXVsdEFyaWFMaXZlTWVzc2FnZXMpLCBhcmlhTGl2ZU1lc3NhZ2VzIHx8IHt9KTtcbiAgfSwgW2FyaWFMaXZlTWVzc2FnZXNdKTsgLy8gVXBkYXRlIGFyaWEgbGl2ZSBzZWxlY3RlZCBvcHRpb24gd2hlbiBwcm9wIGNoYW5nZXNcblxuICB2YXIgYXJpYVNlbGVjdGVkID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnJztcblxuICAgIGlmIChhcmlhU2VsZWN0aW9uICYmIG1lc3NhZ2VzLm9uQ2hhbmdlKSB7XG4gICAgICB2YXIgb3B0aW9uID0gYXJpYVNlbGVjdGlvbi5vcHRpb24sXG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb25zID0gYXJpYVNlbGVjdGlvbi5vcHRpb25zLFxuICAgICAgICAgIHJlbW92ZWRWYWx1ZSA9IGFyaWFTZWxlY3Rpb24ucmVtb3ZlZFZhbHVlLFxuICAgICAgICAgIHJlbW92ZWRWYWx1ZXMgPSBhcmlhU2VsZWN0aW9uLnJlbW92ZWRWYWx1ZXMsXG4gICAgICAgICAgdmFsdWUgPSBhcmlhU2VsZWN0aW9uLnZhbHVlOyAvLyBzZWxlY3Qtb3B0aW9uIHdoZW4gIWlzTXVsdGkgZG9lcyBub3QgcmV0dXJuIG9wdGlvbiBzbyB3ZSBhc3N1bWUgc2VsZWN0ZWQgb3B0aW9uIGlzIHZhbHVlXG5cbiAgICAgIHZhciBhc09wdGlvbiA9IGZ1bmN0aW9uIGFzT3B0aW9uKHZhbCkge1xuICAgICAgICByZXR1cm4gIUFycmF5LmlzQXJyYXkodmFsKSA/IHZhbCA6IG51bGw7XG4gICAgICB9OyAvLyBJZiB0aGVyZSBpcyBqdXN0IG9uZSBpdGVtIGZyb20gdGhlIGFjdGlvbiB0aGVuIGdldCBpdHMgbGFiZWxcblxuXG4gICAgICB2YXIgc2VsZWN0ZWQgPSByZW1vdmVkVmFsdWUgfHwgb3B0aW9uIHx8IGFzT3B0aW9uKHZhbHVlKTtcbiAgICAgIHZhciBsYWJlbCA9IHNlbGVjdGVkID8gZ2V0T3B0aW9uTGFiZWwoc2VsZWN0ZWQpIDogJyc7IC8vIElmIHRoZXJlIGFyZSBtdWx0aXBsZSBpdGVtcyBmcm9tIHRoZSBhY3Rpb24gdGhlbiByZXR1cm4gYW4gYXJyYXkgb2YgbGFiZWxzXG5cbiAgICAgIHZhciBtdWx0aVNlbGVjdGVkID0gc2VsZWN0ZWRPcHRpb25zIHx8IHJlbW92ZWRWYWx1ZXMgfHwgdW5kZWZpbmVkO1xuICAgICAgdmFyIGxhYmVscyA9IG11bHRpU2VsZWN0ZWQgPyBtdWx0aVNlbGVjdGVkLm1hcChnZXRPcHRpb25MYWJlbCkgOiBbXTtcblxuICAgICAgdmFyIG9uQ2hhbmdlUHJvcHMgPSBfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgIC8vIG11bHRpU2VsZWN0ZWQgaXRlbXMgYXJlIHVzdWFsbHkgaXRlbXMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBzZWxlY3RlZFxuICAgICAgICAvLyBvciBzZXQgYnkgdGhlIHVzZXIgYXMgYSBkZWZhdWx0IHZhbHVlIHNvIHdlIGFzc3VtZSB0aGV5IGFyZSBub3QgZGlzYWJsZWRcbiAgICAgICAgaXNEaXNhYmxlZDogc2VsZWN0ZWQgJiYgaXNPcHRpb25EaXNhYmxlZChzZWxlY3RlZCwgc2VsZWN0VmFsdWUpLFxuICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgIGxhYmVsczogbGFiZWxzXG4gICAgICB9LCBhcmlhU2VsZWN0aW9uKTtcblxuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2VzLm9uQ2hhbmdlKG9uQ2hhbmdlUHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LCBbYXJpYVNlbGVjdGlvbiwgbWVzc2FnZXMsIGlzT3B0aW9uRGlzYWJsZWQsIHNlbGVjdFZhbHVlLCBnZXRPcHRpb25MYWJlbF0pO1xuICB2YXIgYXJpYUZvY3VzZWQgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZm9jdXNNc2cgPSAnJztcbiAgICB2YXIgZm9jdXNlZCA9IGZvY3VzZWRPcHRpb24gfHwgZm9jdXNlZFZhbHVlO1xuICAgIHZhciBpc1NlbGVjdGVkID0gISEoZm9jdXNlZE9wdGlvbiAmJiBzZWxlY3RWYWx1ZSAmJiBzZWxlY3RWYWx1ZS5pbmNsdWRlcyhmb2N1c2VkT3B0aW9uKSk7XG5cbiAgICBpZiAoZm9jdXNlZCAmJiBtZXNzYWdlcy5vbkZvY3VzKSB7XG4gICAgICB2YXIgb25Gb2N1c1Byb3BzID0ge1xuICAgICAgICBmb2N1c2VkOiBmb2N1c2VkLFxuICAgICAgICBsYWJlbDogZ2V0T3B0aW9uTGFiZWwoZm9jdXNlZCksXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzT3B0aW9uRGlzYWJsZWQoZm9jdXNlZCwgc2VsZWN0VmFsdWUpLFxuICAgICAgICBpc1NlbGVjdGVkOiBpc1NlbGVjdGVkLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICBjb250ZXh0OiBmb2N1c2VkID09PSBmb2N1c2VkT3B0aW9uID8gJ21lbnUnIDogJ3ZhbHVlJyxcbiAgICAgICAgc2VsZWN0VmFsdWU6IHNlbGVjdFZhbHVlXG4gICAgICB9O1xuICAgICAgZm9jdXNNc2cgPSBtZXNzYWdlcy5vbkZvY3VzKG9uRm9jdXNQcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvY3VzTXNnO1xuICB9LCBbZm9jdXNlZE9wdGlvbiwgZm9jdXNlZFZhbHVlLCBnZXRPcHRpb25MYWJlbCwgaXNPcHRpb25EaXNhYmxlZCwgbWVzc2FnZXMsIG9wdGlvbnMsIHNlbGVjdFZhbHVlXSk7XG4gIHZhciBhcmlhUmVzdWx0cyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHRzTXNnID0gJyc7XG5cbiAgICBpZiAobWVudUlzT3BlbiAmJiBvcHRpb25zLmxlbmd0aCAmJiBtZXNzYWdlcy5vbkZpbHRlcikge1xuICAgICAgdmFyIHJlc3VsdHNNZXNzYWdlID0gc2NyZWVuUmVhZGVyU3RhdHVzKHtcbiAgICAgICAgY291bnQ6IGZvY3VzYWJsZU9wdGlvbnMubGVuZ3RoXG4gICAgICB9KTtcbiAgICAgIHJlc3VsdHNNc2cgPSBtZXNzYWdlcy5vbkZpbHRlcih7XG4gICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICAgIHJlc3VsdHNNZXNzYWdlOiByZXN1bHRzTWVzc2FnZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHNNc2c7XG4gIH0sIFtmb2N1c2FibGVPcHRpb25zLCBpbnB1dFZhbHVlLCBtZW51SXNPcGVuLCBtZXNzYWdlcywgb3B0aW9ucywgc2NyZWVuUmVhZGVyU3RhdHVzXSk7XG4gIHZhciBhcmlhR3VpZGFuY2UgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ3VpZGFuY2VNc2cgPSAnJztcblxuICAgIGlmIChtZXNzYWdlcy5ndWlkYW5jZSkge1xuICAgICAgdmFyIGNvbnRleHQgPSBmb2N1c2VkVmFsdWUgPyAndmFsdWUnIDogbWVudUlzT3BlbiA/ICdtZW51JyA6ICdpbnB1dCc7XG4gICAgICBndWlkYW5jZU1zZyA9IG1lc3NhZ2VzLmd1aWRhbmNlKHtcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBhcmlhTGFiZWwsXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGZvY3VzZWRPcHRpb24gJiYgaXNPcHRpb25EaXNhYmxlZChmb2N1c2VkT3B0aW9uLCBzZWxlY3RWYWx1ZSksXG4gICAgICAgIGlzTXVsdGk6IGlzTXVsdGksXG4gICAgICAgIGlzU2VhcmNoYWJsZTogaXNTZWFyY2hhYmxlLFxuICAgICAgICB0YWJTZWxlY3RzVmFsdWU6IHRhYlNlbGVjdHNWYWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGd1aWRhbmNlTXNnO1xuICB9LCBbYXJpYUxhYmVsLCBmb2N1c2VkT3B0aW9uLCBmb2N1c2VkVmFsdWUsIGlzTXVsdGksIGlzT3B0aW9uRGlzYWJsZWQsIGlzU2VhcmNoYWJsZSwgbWVudUlzT3BlbiwgbWVzc2FnZXMsIHNlbGVjdFZhbHVlLCB0YWJTZWxlY3RzVmFsdWVdKTtcbiAgdmFyIGFyaWFDb250ZXh0ID0gXCJcIi5jb25jYXQoYXJpYUZvY3VzZWQsIFwiIFwiKS5jb25jYXQoYXJpYVJlc3VsdHMsIFwiIFwiKS5jb25jYXQoYXJpYUd1aWRhbmNlKTtcbiAgdmFyIFNjcmVlblJlYWRlclRleHQgPSBqc3goRnJhZ21lbnQsIG51bGwsIGpzeChcInNwYW5cIiwge1xuICAgIGlkOiBcImFyaWEtc2VsZWN0aW9uXCJcbiAgfSwgYXJpYVNlbGVjdGVkKSwganN4KFwic3BhblwiLCB7XG4gICAgaWQ6IFwiYXJpYS1jb250ZXh0XCJcbiAgfSwgYXJpYUNvbnRleHQpKTtcbiAgdmFyIGlzSW5pdGlhbEZvY3VzID0gKGFyaWFTZWxlY3Rpb24gPT09IG51bGwgfHwgYXJpYVNlbGVjdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJpYVNlbGVjdGlvbi5hY3Rpb24pID09PSAnaW5pdGlhbC1pbnB1dC1mb2N1cyc7XG4gIHJldHVybiBqc3goRnJhZ21lbnQsIG51bGwsIGpzeChBMTF5VGV4dCwge1xuICAgIGlkOiBpZFxuICB9LCBpc0luaXRpYWxGb2N1cyAmJiBTY3JlZW5SZWFkZXJUZXh0KSwganN4KEExMXlUZXh0LCB7XG4gICAgXCJhcmlhLWxpdmVcIjogYXJpYUxpdmUsXG4gICAgXCJhcmlhLWF0b21pY1wiOiBcImZhbHNlXCIsXG4gICAgXCJhcmlhLXJlbGV2YW50XCI6IFwiYWRkaXRpb25zIHRleHRcIlxuICB9LCBpc0ZvY3VzZWQgJiYgIWlzSW5pdGlhbEZvY3VzICYmIFNjcmVlblJlYWRlclRleHQpKTtcbn07XG5cbnZhciBkaWFjcml0aWNzID0gW3tcbiAgYmFzZTogJ0EnLFxuICBsZXR0ZXJzOiBcIkFcXHUyNEI2XFx1RkYyMVxceEMwXFx4QzFcXHhDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHhDM1xcdTAxMDBcXHUwMTAyXFx1MUVCMFxcdTFFQUVcXHUxRUI0XFx1MUVCMlxcdTAyMjZcXHUwMUUwXFx4QzRcXHUwMURFXFx1MUVBMlxceEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZcIlxufSwge1xuICBiYXNlOiAnQUEnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzJcIlxufSwge1xuICBiYXNlOiAnQUUnLFxuICBsZXR0ZXJzOiBcIlxceEM2XFx1MDFGQ1xcdTAxRTJcIlxufSwge1xuICBiYXNlOiAnQU8nLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzRcIlxufSwge1xuICBiYXNlOiAnQVUnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzZcIlxufSwge1xuICBiYXNlOiAnQVYnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzhcXHVBNzNBXCJcbn0sIHtcbiAgYmFzZTogJ0FZJyxcbiAgbGV0dGVyczogXCJcXHVBNzNDXCJcbn0sIHtcbiAgYmFzZTogJ0InLFxuICBsZXR0ZXJzOiBcIkJcXHUyNEI3XFx1RkYyMlxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTAyNDNcXHUwMTgyXFx1MDE4MVwiXG59LCB7XG4gIGJhc2U6ICdDJyxcbiAgbGV0dGVyczogXCJDXFx1MjRCOFxcdUZGMjNcXHUwMTA2XFx1MDEwOFxcdTAxMEFcXHUwMTBDXFx4QzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXCJcbn0sIHtcbiAgYmFzZTogJ0QnLFxuICBsZXR0ZXJzOiBcIkRcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThCXFx1MDE4QVxcdTAxODlcXHVBNzc5XCJcbn0sIHtcbiAgYmFzZTogJ0RaJyxcbiAgbGV0dGVyczogXCJcXHUwMUYxXFx1MDFDNFwiXG59LCB7XG4gIGJhc2U6ICdEeicsXG4gIGxldHRlcnM6IFwiXFx1MDFGMlxcdTAxQzVcIlxufSwge1xuICBiYXNlOiAnRScsXG4gIGxldHRlcnM6IFwiRVxcdTI0QkFcXHVGRjI1XFx4QzhcXHhDOVxceENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxceENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RVwiXG59LCB7XG4gIGJhc2U6ICdGJyxcbiAgbGV0dGVyczogXCJGXFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JcIlxufSwge1xuICBiYXNlOiAnRycsXG4gIGxldHRlcnM6IFwiR1xcdTI0QkNcXHVGRjI3XFx1MDFGNFxcdTAxMUNcXHUxRTIwXFx1MDExRVxcdTAxMjBcXHUwMUU2XFx1MDEyMlxcdTAxRTRcXHUwMTkzXFx1QTdBMFxcdUE3N0RcXHVBNzdFXCJcbn0sIHtcbiAgYmFzZTogJ0gnLFxuICBsZXR0ZXJzOiBcIkhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXCJcbn0sIHtcbiAgYmFzZTogJ0knLFxuICBsZXR0ZXJzOiBcIklcXHUyNEJFXFx1RkYyOVxceENDXFx4Q0RcXHhDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHhDRlxcdTFFMkVcXHUxRUM4XFx1MDFDRlxcdTAyMDhcXHUwMjBBXFx1MUVDQVxcdTAxMkVcXHUxRTJDXFx1MDE5N1wiXG59LCB7XG4gIGJhc2U6ICdKJyxcbiAgbGV0dGVyczogXCJKXFx1MjRCRlxcdUZGMkFcXHUwMTM0XFx1MDI0OFwiXG59LCB7XG4gIGJhc2U6ICdLJyxcbiAgbGV0dGVyczogXCJLXFx1MjRDMFxcdUZGMkJcXHUxRTMwXFx1MDFFOFxcdTFFMzJcXHUwMTM2XFx1MUUzNFxcdTAxOThcXHUyQzY5XFx1QTc0MFxcdUE3NDJcXHVBNzQ0XFx1QTdBMlwiXG59LCB7XG4gIGJhc2U6ICdMJyxcbiAgbGV0dGVyczogXCJMXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBcIlxufSwge1xuICBiYXNlOiAnTEonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQzdcIlxufSwge1xuICBiYXNlOiAnTGonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQzhcIlxufSwge1xuICBiYXNlOiAnTScsXG4gIGxldHRlcnM6IFwiTVxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUNcIlxufSwge1xuICBiYXNlOiAnTicsXG4gIGxldHRlcnM6IFwiTlxcdTI0QzNcXHVGRjJFXFx1MDFGOFxcdTAxNDNcXHhEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRcIlxufSwge1xuICBiYXNlOiAnTkonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQ0FcIlxufSwge1xuICBiYXNlOiAnTmonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQ0JcIlxufSwge1xuICBiYXNlOiAnTycsXG4gIGxldHRlcnM6IFwiT1xcdTI0QzRcXHVGRjJGXFx4RDJcXHhEM1xceEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxceEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx4RDZcXHUwMjJBXFx1MUVDRVxcdTAxNTBcXHUwMUQxXFx1MDIwQ1xcdTAyMEVcXHUwMUEwXFx1MUVEQ1xcdTFFREFcXHUxRUUwXFx1MUVERVxcdTFFRTJcXHUxRUNDXFx1MUVEOFxcdTAxRUFcXHUwMUVDXFx4RDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q1wiXG59LCB7XG4gIGJhc2U6ICdPSScsXG4gIGxldHRlcnM6IFwiXFx1MDFBMlwiXG59LCB7XG4gIGJhc2U6ICdPTycsXG4gIGxldHRlcnM6IFwiXFx1QTc0RVwiXG59LCB7XG4gIGJhc2U6ICdPVScsXG4gIGxldHRlcnM6IFwiXFx1MDIyMlwiXG59LCB7XG4gIGJhc2U6ICdQJyxcbiAgbGV0dGVyczogXCJQXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XCJcbn0sIHtcbiAgYmFzZTogJ1EnLFxuICBsZXR0ZXJzOiBcIlFcXHUyNEM2XFx1RkYzMVxcdUE3NTZcXHVBNzU4XFx1MDI0QVwiXG59LCB7XG4gIGJhc2U6ICdSJyxcbiAgbGV0dGVyczogXCJSXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4MlwiXG59LCB7XG4gIGJhc2U6ICdTJyxcbiAgbGV0dGVyczogXCJTXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NFwiXG59LCB7XG4gIGJhc2U6ICdUJyxcbiAgbGV0dGVyczogXCJUXFx1MjRDOVxcdUZGMzRcXHUxRTZBXFx1MDE2NFxcdTFFNkNcXHUwMjFBXFx1MDE2MlxcdTFFNzBcXHUxRTZFXFx1MDE2NlxcdTAxQUNcXHUwMUFFXFx1MDIzRVxcdUE3ODZcIlxufSwge1xuICBiYXNlOiAnVFonLFxuICBsZXR0ZXJzOiBcIlxcdUE3MjhcIlxufSwge1xuICBiYXNlOiAnVScsXG4gIGxldHRlcnM6IFwiVVxcdTI0Q0FcXHVGRjM1XFx4RDlcXHhEQVxceERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHhEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRcIlxufSwge1xuICBiYXNlOiAnVicsXG4gIGxldHRlcnM6IFwiVlxcdTI0Q0JcXHVGRjM2XFx1MUU3Q1xcdTFFN0VcXHUwMUIyXFx1QTc1RVxcdTAyNDVcIlxufSwge1xuICBiYXNlOiAnVlknLFxuICBsZXR0ZXJzOiBcIlxcdUE3NjBcIlxufSwge1xuICBiYXNlOiAnVycsXG4gIGxldHRlcnM6IFwiV1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3MlwiXG59LCB7XG4gIGJhc2U6ICdYJyxcbiAgbGV0dGVyczogXCJYXFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q1wiXG59LCB7XG4gIGJhc2U6ICdZJyxcbiAgbGV0dGVyczogXCJZXFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx4RERcXHUwMTc2XFx1MUVGOFxcdTAyMzJcXHUxRThFXFx1MDE3OFxcdTFFRjZcXHUxRUY0XFx1MDFCM1xcdTAyNEVcXHUxRUZFXCJcbn0sIHtcbiAgYmFzZTogJ1onLFxuICBsZXR0ZXJzOiBcIlpcXHUyNENGXFx1RkYzQVxcdTAxNzlcXHUxRTkwXFx1MDE3QlxcdTAxN0RcXHUxRTkyXFx1MUU5NFxcdTAxQjVcXHUwMjI0XFx1MkM3RlxcdTJDNkJcXHVBNzYyXCJcbn0sIHtcbiAgYmFzZTogJ2EnLFxuICBsZXR0ZXJzOiBcImFcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHhFMFxceEUxXFx4RTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx4RTNcXHUwMTAxXFx1MDEwM1xcdTFFQjFcXHUxRUFGXFx1MUVCNVxcdTFFQjNcXHUwMjI3XFx1MDFFMVxceEU0XFx1MDFERlxcdTFFQTNcXHhFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXCJcbn0sIHtcbiAgYmFzZTogJ2FhJyxcbiAgbGV0dGVyczogXCJcXHVBNzMzXCJcbn0sIHtcbiAgYmFzZTogJ2FlJyxcbiAgbGV0dGVyczogXCJcXHhFNlxcdTAxRkRcXHUwMUUzXCJcbn0sIHtcbiAgYmFzZTogJ2FvJyxcbiAgbGV0dGVyczogXCJcXHVBNzM1XCJcbn0sIHtcbiAgYmFzZTogJ2F1JyxcbiAgbGV0dGVyczogXCJcXHVBNzM3XCJcbn0sIHtcbiAgYmFzZTogJ2F2JyxcbiAgbGV0dGVyczogXCJcXHVBNzM5XFx1QTczQlwiXG59LCB7XG4gIGJhc2U6ICdheScsXG4gIGxldHRlcnM6IFwiXFx1QTczRFwiXG59LCB7XG4gIGJhc2U6ICdiJyxcbiAgbGV0dGVyczogXCJiXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNcIlxufSwge1xuICBiYXNlOiAnYycsXG4gIGxldHRlcnM6IFwiY1xcdTI0RDJcXHVGRjQzXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxceEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRcIlxufSwge1xuICBiYXNlOiAnZCcsXG4gIGxldHRlcnM6IFwiZFxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdUE3N0FcIlxufSwge1xuICBiYXNlOiAnZHonLFxuICBsZXR0ZXJzOiBcIlxcdTAxRjNcXHUwMUM2XCJcbn0sIHtcbiAgYmFzZTogJ2UnLFxuICBsZXR0ZXJzOiBcImVcXHUyNEQ0XFx1RkY0NVxceEU4XFx4RTlcXHhFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHhFQlxcdTFFQkJcXHUwMTFCXFx1MDIwNVxcdTAyMDdcXHUxRUI5XFx1MUVDN1xcdTAyMjlcXHUxRTFEXFx1MDExOVxcdTFFMTlcXHUxRTFCXFx1MDI0N1xcdTAyNUJcXHUwMUREXCJcbn0sIHtcbiAgYmFzZTogJ2YnLFxuICBsZXR0ZXJzOiBcImZcXHUyNEQ1XFx1RkY0NlxcdTFFMUZcXHUwMTkyXFx1QTc3Q1wiXG59LCB7XG4gIGJhc2U6ICdnJyxcbiAgbGV0dGVyczogXCJnXFx1MjRENlxcdUZGNDdcXHUwMUY1XFx1MDExRFxcdTFFMjFcXHUwMTFGXFx1MDEyMVxcdTAxRTdcXHUwMTIzXFx1MDFFNVxcdTAyNjBcXHVBN0ExXFx1MUQ3OVxcdUE3N0ZcIlxufSwge1xuICBiYXNlOiAnaCcsXG4gIGxldHRlcnM6IFwiaFxcdTI0RDdcXHVGRjQ4XFx1MDEyNVxcdTFFMjNcXHUxRTI3XFx1MDIxRlxcdTFFMjVcXHUxRTI5XFx1MUUyQlxcdTFFOTZcXHUwMTI3XFx1MkM2OFxcdTJDNzZcXHUwMjY1XCJcbn0sIHtcbiAgYmFzZTogJ2h2JyxcbiAgbGV0dGVyczogXCJcXHUwMTk1XCJcbn0sIHtcbiAgYmFzZTogJ2knLFxuICBsZXR0ZXJzOiBcImlcXHUyNEQ4XFx1RkY0OVxceEVDXFx4RURcXHhFRVxcdTAxMjlcXHUwMTJCXFx1MDEyRFxceEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMVwiXG59LCB7XG4gIGJhc2U6ICdqJyxcbiAgbGV0dGVyczogXCJqXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDlcIlxufSwge1xuICBiYXNlOiAnaycsXG4gIGxldHRlcnM6IFwia1xcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNcIlxufSwge1xuICBiYXNlOiAnbCcsXG4gIGxldHRlcnM6IFwibFxcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N1wiXG59LCB7XG4gIGJhc2U6ICdsaicsXG4gIGxldHRlcnM6IFwiXFx1MDFDOVwiXG59LCB7XG4gIGJhc2U6ICdtJyxcbiAgbGV0dGVyczogXCJtXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2RlwiXG59LCB7XG4gIGJhc2U6ICduJyxcbiAgbGV0dGVyczogXCJuXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxceEYxXFx1MUU0NVxcdTAxNDhcXHUxRTQ3XFx1MDE0NlxcdTFFNEJcXHUxRTQ5XFx1MDE5RVxcdTAyNzJcXHUwMTQ5XFx1QTc5MVxcdUE3QTVcIlxufSwge1xuICBiYXNlOiAnbmonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQ0NcIlxufSwge1xuICBiYXNlOiAnbycsXG4gIGxldHRlcnM6IFwib1xcdTI0REVcXHVGRjRGXFx4RjJcXHhGM1xceEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxceEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx4RjZcXHUwMjJCXFx1MUVDRlxcdTAxNTFcXHUwMUQyXFx1MDIwRFxcdTAyMEZcXHUwMUExXFx1MUVERFxcdTFFREJcXHUxRUUxXFx1MUVERlxcdTFFRTNcXHUxRUNEXFx1MUVEOVxcdTAxRUJcXHUwMUVEXFx4RjhcXHUwMUZGXFx1MDI1NFxcdUE3NEJcXHVBNzREXFx1MDI3NVwiXG59LCB7XG4gIGJhc2U6ICdvaScsXG4gIGxldHRlcnM6IFwiXFx1MDFBM1wiXG59LCB7XG4gIGJhc2U6ICdvdScsXG4gIGxldHRlcnM6IFwiXFx1MDIyM1wiXG59LCB7XG4gIGJhc2U6ICdvbycsXG4gIGxldHRlcnM6IFwiXFx1QTc0RlwiXG59LCB7XG4gIGJhc2U6ICdwJyxcbiAgbGV0dGVyczogXCJwXFx1MjRERlxcdUZGNTBcXHUxRTU1XFx1MUU1N1xcdTAxQTVcXHUxRDdEXFx1QTc1MVxcdUE3NTNcXHVBNzU1XCJcbn0sIHtcbiAgYmFzZTogJ3EnLFxuICBsZXR0ZXJzOiBcInFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OVwiXG59LCB7XG4gIGJhc2U6ICdyJyxcbiAgbGV0dGVyczogXCJyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M1wiXG59LCB7XG4gIGJhc2U6ICdzJyxcbiAgbGV0dGVyczogXCJzXFx1MjRFMlxcdUZGNTNcXHhERlxcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCXCJcbn0sIHtcbiAgYmFzZTogJ3QnLFxuICBsZXR0ZXJzOiBcInRcXHUyNEUzXFx1RkY1NFxcdTFFNkJcXHUxRTk3XFx1MDE2NVxcdTFFNkRcXHUwMjFCXFx1MDE2M1xcdTFFNzFcXHUxRTZGXFx1MDE2N1xcdTAxQURcXHUwMjg4XFx1MkM2NlxcdUE3ODdcIlxufSwge1xuICBiYXNlOiAndHonLFxuICBsZXR0ZXJzOiBcIlxcdUE3MjlcIlxufSwge1xuICBiYXNlOiAndScsXG4gIGxldHRlcnM6IFwidVxcdTI0RTRcXHVGRjU1XFx4RjlcXHhGQVxceEZCXFx1MDE2OVxcdTFFNzlcXHUwMTZCXFx1MUU3QlxcdTAxNkRcXHhGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODlcIlxufSwge1xuICBiYXNlOiAndicsXG4gIGxldHRlcnM6IFwidlxcdTI0RTVcXHVGRjU2XFx1MUU3RFxcdTFFN0ZcXHUwMjhCXFx1QTc1RlxcdTAyOENcIlxufSwge1xuICBiYXNlOiAndnknLFxuICBsZXR0ZXJzOiBcIlxcdUE3NjFcIlxufSwge1xuICBiYXNlOiAndycsXG4gIGxldHRlcnM6IFwid1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNcIlxufSwge1xuICBiYXNlOiAneCcsXG4gIGxldHRlcnM6IFwieFxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERcIlxufSwge1xuICBiYXNlOiAneScsXG4gIGxldHRlcnM6IFwieVxcdTI0RThcXHVGRjU5XFx1MUVGM1xceEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxceEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXCJcbn0sIHtcbiAgYmFzZTogJ3onLFxuICBsZXR0ZXJzOiBcInpcXHUyNEU5XFx1RkY1QVxcdTAxN0FcXHUxRTkxXFx1MDE3Q1xcdTAxN0VcXHUxRTkzXFx1MUU5NVxcdTAxQjZcXHUwMjI1XFx1MDI0MFxcdTJDNkNcXHVBNzYzXCJcbn1dO1xudmFyIGFueURpYWNyaXRpYyA9IG5ldyBSZWdFeHAoJ1snICsgZGlhY3JpdGljcy5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgcmV0dXJuIGQubGV0dGVycztcbn0pLmpvaW4oJycpICsgJ10nLCAnZycpO1xudmFyIGRpYWNyaXRpY1RvQmFzZSA9IHt9O1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IGRpYWNyaXRpY3MubGVuZ3RoOyBpKyspIHtcbiAgdmFyIGRpYWNyaXRpYyA9IGRpYWNyaXRpY3NbaV07XG5cbiAgZm9yICh2YXIgaiA9IDA7IGogPCBkaWFjcml0aWMubGV0dGVycy5sZW5ndGg7IGorKykge1xuICAgIGRpYWNyaXRpY1RvQmFzZVtkaWFjcml0aWMubGV0dGVyc1tqXV0gPSBkaWFjcml0aWMuYmFzZTtcbiAgfVxufVxuXG52YXIgc3RyaXBEaWFjcml0aWNzID0gZnVuY3Rpb24gc3RyaXBEaWFjcml0aWNzKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoYW55RGlhY3JpdGljLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZGlhY3JpdGljVG9CYXNlW21hdGNoXTtcbiAgfSk7XG59O1xuXG52YXIgbWVtb2l6ZWRTdHJpcERpYWNyaXRpY3NGb3JJbnB1dCA9IG1lbW9pemVPbmUoc3RyaXBEaWFjcml0aWNzKTtcblxudmFyIHRyaW1TdHJpbmcgPSBmdW5jdGlvbiB0cmltU3RyaW5nKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn07XG5cbnZhciBkZWZhdWx0U3RyaW5naWZ5ID0gZnVuY3Rpb24gZGVmYXVsdFN0cmluZ2lmeShvcHRpb24pIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KG9wdGlvbi5sYWJlbCwgXCIgXCIpLmNvbmNhdChvcHRpb24udmFsdWUpO1xufTtcblxudmFyIGNyZWF0ZUZpbHRlciA9IGZ1bmN0aW9uIGNyZWF0ZUZpbHRlcihjb25maWcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvcHRpb24sIHJhd0lucHV0KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgaWYgKG9wdGlvbi5kYXRhLl9faXNOZXdfXykgcmV0dXJuIHRydWU7XG5cbiAgICB2YXIgX2lnbm9yZUNhc2UkaWdub3JlQWNjID0gX29iamVjdFNwcmVhZDIoe1xuICAgICAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICAgIGlnbm9yZUFjY2VudHM6IHRydWUsXG4gICAgICBzdHJpbmdpZnk6IGRlZmF1bHRTdHJpbmdpZnksXG4gICAgICB0cmltOiB0cnVlLFxuICAgICAgbWF0Y2hGcm9tOiAnYW55J1xuICAgIH0sIGNvbmZpZyksXG4gICAgICAgIGlnbm9yZUNhc2UgPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2MuaWdub3JlQ2FzZSxcbiAgICAgICAgaWdub3JlQWNjZW50cyA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5pZ25vcmVBY2NlbnRzLFxuICAgICAgICBzdHJpbmdpZnkgPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2Muc3RyaW5naWZ5LFxuICAgICAgICB0cmltID0gX2lnbm9yZUNhc2UkaWdub3JlQWNjLnRyaW0sXG4gICAgICAgIG1hdGNoRnJvbSA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5tYXRjaEZyb207XG5cbiAgICB2YXIgaW5wdXQgPSB0cmltID8gdHJpbVN0cmluZyhyYXdJbnB1dCkgOiByYXdJbnB1dDtcbiAgICB2YXIgY2FuZGlkYXRlID0gdHJpbSA/IHRyaW1TdHJpbmcoc3RyaW5naWZ5KG9wdGlvbikpIDogc3RyaW5naWZ5KG9wdGlvbik7XG5cbiAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgaW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FuZGlkYXRlID0gY2FuZGlkYXRlLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKGlnbm9yZUFjY2VudHMpIHtcbiAgICAgIGlucHV0ID0gbWVtb2l6ZWRTdHJpcERpYWNyaXRpY3NGb3JJbnB1dChpbnB1dCk7XG4gICAgICBjYW5kaWRhdGUgPSBzdHJpcERpYWNyaXRpY3MoY2FuZGlkYXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hGcm9tID09PSAnc3RhcnQnID8gY2FuZGlkYXRlLnN1YnN0cigwLCBpbnB1dC5sZW5ndGgpID09PSBpbnB1dCA6IGNhbmRpZGF0ZS5pbmRleE9mKGlucHV0KSA+IC0xO1xuICB9O1xufTtcblxudmFyIF9leGNsdWRlZCA9IFtcImlubmVyUmVmXCJdO1xuZnVuY3Rpb24gRHVtbXlJbnB1dChfcmVmKSB7XG4gIHZhciBpbm5lclJlZiA9IF9yZWYuaW5uZXJSZWYsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQpO1xuXG4gIC8vIFJlbW92ZSBhbmltYXRpb24gcHJvcHMgbm90IG1lYW50IGZvciBIVE1MIGVsZW1lbnRzXG4gIHZhciBmaWx0ZXJlZFByb3BzID0gcmVtb3ZlUHJvcHMocHJvcHMsICdvbkV4aXRlZCcsICdpbicsICdlbnRlcicsICdleGl0JywgJ2FwcGVhcicpO1xuICByZXR1cm4ganN4KFwiaW5wdXRcIiwgX2V4dGVuZHMoe1xuICAgIHJlZjogaW5uZXJSZWZcbiAgfSwgZmlsdGVyZWRQcm9wcywge1xuICAgIGNzczogLyojX19QVVJFX18qL2Nzcyh7XG4gICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgIGJhY2tncm91bmQ6IDAsXG4gICAgICBib3JkZXI6IDAsXG4gICAgICAvLyBpbXBvcnRhbnQhIHRoaXMgaGlkZXMgdGhlIGZsYXNoaW5nIGN1cnNvclxuICAgICAgY2FyZXRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgICAgb3V0bGluZTogMCxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgd2lkdGg6IDEsXG4gICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIGRlc2t0b3BcbiAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBtb2JpbGUgd2hpbHN0IG1haW50YWluaW5nIFwic2Nyb2xsIGludG8gdmlld1wiIGJlaGF2aW91clxuICAgICAgbGVmdDogLTEwMCxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKC4wMSknXG4gICAgfSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gXCJcIiA6IFwiO2xhYmVsOkR1bW15SW5wdXQ7XCIsIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUjFiVzE1U1c1d2RYUXVkSE40SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVhsQ1RTSXNJbVpwYkdVaU9pSkVkVzF0ZVVsdWNIVjBMblJ6ZUNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLaUJBYW5ONElHcHplQ0FxTDF4dWFXMXdiM0owSUhzZ1VtVm1JSDBnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIc2dhbk40SUgwZ1puSnZiU0FuUUdWdGIzUnBiMjR2Y21WaFkzUW5PMXh1YVcxd2IzSjBJSHNnY21WdGIzWmxVSEp2Y0hNZ2ZTQm1jbTl0SUNjdUxpOTFkR2xzY3ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlFUjFiVzE1U1c1d2RYUW9lMXh1SUNCcGJtNWxjbEpsWml4Y2JpQWdMaTR1Y0hKdmNITmNibjA2SUVwVFdDNUpiblJ5YVc1emFXTkZiR1Z0Wlc1MGMxc25hVzV3ZFhRblhTQW1JSHRjYmlBZ2NtVmhaRzl1YkhrZ2FXNXVaWEpTWldZNklGSmxaanhJVkUxTVNXNXdkWFJGYkdWdFpXNTBQanRjYm4wcElIdGNiaUFnTHk4Z1VtVnRiM1psSUdGdWFXMWhkR2x2YmlCd2NtOXdjeUJ1YjNRZ2JXVmhiblFnWm05eUlFaFVUVXdnWld4bGJXVnVkSE5jYmlBZ1kyOXVjM1FnWm1sc2RHVnlaV1JRY205d2N5QTlJSEpsYlc5MlpWQnliM0J6S0Z4dUlDQWdJSEJ5YjNCekxGeHVJQ0FnSUNkdmJrVjRhWFJsWkNjc1hHNGdJQ0FnSjJsdUp5eGNiaUFnSUNBblpXNTBaWEluTEZ4dUlDQWdJQ2RsZUdsMEp5eGNiaUFnSUNBbllYQndaV0Z5SjF4dUlDQXBPMXh1WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnUEdsdWNIVjBYRzRnSUNBZ0lDQnlaV1k5ZTJsdWJtVnlVbVZtZlZ4dUlDQWdJQ0FnZXk0dUxtWnBiSFJsY21Wa1VISnZjSE45WEc0Z0lDQWdJQ0JqYzNNOWUzdGNiaUFnSUNBZ0lDQWdiR0ZpWld3NklDZGtkVzF0ZVVsdWNIVjBKeXhjYmlBZ0lDQWdJQ0FnTHk4Z1oyVjBJSEpwWkNCdlppQmhibmtnWkdWbVlYVnNkQ0J6ZEhsc1pYTmNiaUFnSUNBZ0lDQWdZbUZqYTJkeWIzVnVaRG9nTUN4Y2JpQWdJQ0FnSUNBZ1ltOXlaR1Z5T2lBd0xGeHVJQ0FnSUNBZ0lDQXZMeUJwYlhCdmNuUmhiblFoSUhSb2FYTWdhR2xrWlhNZ2RHaGxJR1pzWVhOb2FXNW5JR04xY25OdmNseHVJQ0FnSUNBZ0lDQmpZWEpsZEVOdmJHOXlPaUFuZEhKaGJuTndZWEpsYm5RbkxGeHVJQ0FnSUNBZ0lDQm1iMjUwVTJsNlpUb2dKMmx1YUdWeWFYUW5MRnh1SUNBZ0lDQWdJQ0JuY21sa1FYSmxZVG9nSnpFZ0x5QXhJQzhnTWlBdklETW5MRnh1SUNBZ0lDQWdJQ0J2ZFhSc2FXNWxPaUF3TEZ4dUlDQWdJQ0FnSUNCd1lXUmthVzVuT2lBd0xGeHVJQ0FnSUNBZ0lDQXZMeUJwYlhCdmNuUmhiblFoSUhkcGRHaHZkWFFnWUhkcFpIUm9ZQ0JpY205M2MyVnljeUIzYjI0bmRDQmhiR3h2ZHlCbWIyTjFjMXh1SUNBZ0lDQWdJQ0IzYVdSMGFEb2dNU3hjYmx4dUlDQWdJQ0FnSUNBdkx5QnlaVzF2ZG1VZ1kzVnljMjl5SUc5dUlHUmxjMnQwYjNCY2JpQWdJQ0FnSUNBZ1kyOXNiM0k2SUNkMGNtRnVjM0JoY21WdWRDY3NYRzVjYmlBZ0lDQWdJQ0FnTHk4Z2NtVnRiM1psSUdOMWNuTnZjaUJ2YmlCdGIySnBiR1VnZDJocGJITjBJRzFoYVc1MFlXbHVhVzVuSUZ3aWMyTnliMnhzSUdsdWRHOGdkbWxsZDF3aUlHSmxhR0YyYVc5MWNseHVJQ0FnSUNBZ0lDQnNaV1owT2lBdE1UQXdMRnh1SUNBZ0lDQWdJQ0J2Y0dGamFYUjVPaUF3TEZ4dUlDQWdJQ0FnSUNCd2IzTnBkR2x2YmpvZ0ozSmxiR0YwYVhabEp5eGNiaUFnSUNBZ0lDQWdkSEpoYm5ObWIzSnRPaUFuYzJOaGJHVW9MakF4S1Njc1hHNGdJQ0FnSUNCOWZWeHVJQ0FnSUM4K1hHNGdJQ2s3WEc1OVhHNGlYWDA9ICovXCIpXG4gIH0pKTtcbn1cblxudmFyIGNhbmNlbFNjcm9sbCA9IGZ1bmN0aW9uIGNhbmNlbFNjcm9sbChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn07XG5cbmZ1bmN0aW9uIHVzZVNjcm9sbENhcHR1cmUoX3JlZikge1xuICB2YXIgaXNFbmFibGVkID0gX3JlZi5pc0VuYWJsZWQsXG4gICAgICBvbkJvdHRvbUFycml2ZSA9IF9yZWYub25Cb3R0b21BcnJpdmUsXG4gICAgICBvbkJvdHRvbUxlYXZlID0gX3JlZi5vbkJvdHRvbUxlYXZlLFxuICAgICAgb25Ub3BBcnJpdmUgPSBfcmVmLm9uVG9wQXJyaXZlLFxuICAgICAgb25Ub3BMZWF2ZSA9IF9yZWYub25Ub3BMZWF2ZTtcbiAgdmFyIGlzQm90dG9tID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIGlzVG9wID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIHRvdWNoU3RhcnQgPSB1c2VSZWYoMCk7XG4gIHZhciBzY3JvbGxUYXJnZXQgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBoYW5kbGVFdmVudERlbHRhID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50LCBkZWx0YSkge1xuICAgIGlmIChzY3JvbGxUYXJnZXQuY3VycmVudCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIHZhciBfc2Nyb2xsVGFyZ2V0JGN1cnJlbnQgPSBzY3JvbGxUYXJnZXQuY3VycmVudCxcbiAgICAgICAgc2Nyb2xsVG9wID0gX3Njcm9sbFRhcmdldCRjdXJyZW50LnNjcm9sbFRvcCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gX3Njcm9sbFRhcmdldCRjdXJyZW50LnNjcm9sbEhlaWdodCxcbiAgICAgICAgY2xpZW50SGVpZ2h0ID0gX3Njcm9sbFRhcmdldCRjdXJyZW50LmNsaWVudEhlaWdodDtcbiAgICB2YXIgdGFyZ2V0ID0gc2Nyb2xsVGFyZ2V0LmN1cnJlbnQ7XG4gICAgdmFyIGlzRGVsdGFQb3NpdGl2ZSA9IGRlbHRhID4gMDtcbiAgICB2YXIgYXZhaWxhYmxlU2Nyb2xsID0gc2Nyb2xsSGVpZ2h0IC0gY2xpZW50SGVpZ2h0IC0gc2Nyb2xsVG9wO1xuICAgIHZhciBzaG91bGRDYW5jZWxTY3JvbGwgPSBmYWxzZTsgLy8gcmVzZXQgYm90dG9tL3RvcCBmbGFnc1xuXG4gICAgaWYgKGF2YWlsYWJsZVNjcm9sbCA+IGRlbHRhICYmIGlzQm90dG9tLmN1cnJlbnQpIHtcbiAgICAgIGlmIChvbkJvdHRvbUxlYXZlKSBvbkJvdHRvbUxlYXZlKGV2ZW50KTtcbiAgICAgIGlzQm90dG9tLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNEZWx0YVBvc2l0aXZlICYmIGlzVG9wLmN1cnJlbnQpIHtcbiAgICAgIGlmIChvblRvcExlYXZlKSBvblRvcExlYXZlKGV2ZW50KTtcbiAgICAgIGlzVG9wLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9IC8vIGJvdHRvbSBsaW1pdFxuXG5cbiAgICBpZiAoaXNEZWx0YVBvc2l0aXZlICYmIGRlbHRhID4gYXZhaWxhYmxlU2Nyb2xsKSB7XG4gICAgICBpZiAob25Cb3R0b21BcnJpdmUgJiYgIWlzQm90dG9tLmN1cnJlbnQpIHtcbiAgICAgICAgb25Cb3R0b21BcnJpdmUoZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICB0YXJnZXQuc2Nyb2xsVG9wID0gc2Nyb2xsSGVpZ2h0O1xuICAgICAgc2hvdWxkQ2FuY2VsU2Nyb2xsID0gdHJ1ZTtcbiAgICAgIGlzQm90dG9tLmN1cnJlbnQgPSB0cnVlOyAvLyB0b3AgbGltaXRcbiAgICB9IGVsc2UgaWYgKCFpc0RlbHRhUG9zaXRpdmUgJiYgLWRlbHRhID4gc2Nyb2xsVG9wKSB7XG4gICAgICBpZiAob25Ub3BBcnJpdmUgJiYgIWlzVG9wLmN1cnJlbnQpIHtcbiAgICAgICAgb25Ub3BBcnJpdmUoZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICB0YXJnZXQuc2Nyb2xsVG9wID0gMDtcbiAgICAgIHNob3VsZENhbmNlbFNjcm9sbCA9IHRydWU7XG4gICAgICBpc1RvcC5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9IC8vIGNhbmNlbCBzY3JvbGxcblxuXG4gICAgaWYgKHNob3VsZENhbmNlbFNjcm9sbCkge1xuICAgICAgY2FuY2VsU2Nyb2xsKGV2ZW50KTtcbiAgICB9XG4gIH0sIFtvbkJvdHRvbUFycml2ZSwgb25Cb3R0b21MZWF2ZSwgb25Ub3BBcnJpdmUsIG9uVG9wTGVhdmVdKTtcbiAgdmFyIG9uV2hlZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBoYW5kbGVFdmVudERlbHRhKGV2ZW50LCBldmVudC5kZWx0YVkpO1xuICB9LCBbaGFuZGxlRXZlbnREZWx0YV0pO1xuICB2YXIgb25Ub3VjaFN0YXJ0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gc2V0IHRvdWNoIHN0YXJ0IHNvIHdlIGNhbiBjYWxjdWxhdGUgdG91Y2htb3ZlIGRlbHRhXG4gICAgdG91Y2hTdGFydC5jdXJyZW50ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgfSwgW10pO1xuICB2YXIgb25Ub3VjaE1vdmUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgZGVsdGFZID0gdG91Y2hTdGFydC5jdXJyZW50IC0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICBoYW5kbGVFdmVudERlbHRhKGV2ZW50LCBkZWx0YVkpO1xuICB9LCBbaGFuZGxlRXZlbnREZWx0YV0pO1xuICB2YXIgc3RhcnRMaXN0ZW5pbmcgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZWwpIHtcbiAgICAvLyBiYWlsIGVhcmx5IGlmIG5vIGVsZW1lbnQgaXMgYXZhaWxhYmxlIHRvIGF0dGFjaCB0b1xuICAgIGlmICghZWwpIHJldHVybjtcbiAgICB2YXIgbm90UGFzc2l2ZSA9IHN1cHBvcnRzUGFzc2l2ZUV2ZW50cyA/IHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSA6IGZhbHNlO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgb25XaGVlbCwgbm90UGFzc2l2ZSk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgbm90UGFzc2l2ZSk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIG5vdFBhc3NpdmUpO1xuICB9LCBbb25Ub3VjaE1vdmUsIG9uVG91Y2hTdGFydCwgb25XaGVlbF0pO1xuICB2YXIgc3RvcExpc3RlbmluZyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlbCkge1xuICAgIC8vIGJhaWwgZWFybHkgaWYgbm8gZWxlbWVudCBpcyBhdmFpbGFibGUgdG8gZGV0YWNoIGZyb21cbiAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBvbldoZWVsLCBmYWxzZSk7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSk7XG4gIH0sIFtvblRvdWNoTW92ZSwgb25Ub3VjaFN0YXJ0LCBvbldoZWVsXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpc0VuYWJsZWQpIHJldHVybjtcbiAgICB2YXIgZWxlbWVudCA9IHNjcm9sbFRhcmdldC5jdXJyZW50O1xuICAgIHN0YXJ0TGlzdGVuaW5nKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBzdG9wTGlzdGVuaW5nKGVsZW1lbnQpO1xuICAgIH07XG4gIH0sIFtpc0VuYWJsZWQsIHN0YXJ0TGlzdGVuaW5nLCBzdG9wTGlzdGVuaW5nXSk7XG4gIHJldHVybiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHNjcm9sbFRhcmdldC5jdXJyZW50ID0gZWxlbWVudDtcbiAgfTtcbn1cblxudmFyIFNUWUxFX0tFWVMgPSBbJ2JveFNpemluZycsICdoZWlnaHQnLCAnb3ZlcmZsb3cnLCAncGFkZGluZ1JpZ2h0JywgJ3Bvc2l0aW9uJ107XG52YXIgTE9DS19TVFlMRVMgPSB7XG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAvLyBhY2NvdW50IGZvciBwb3NzaWJsZSBkZWNsYXJhdGlvbiBgd2lkdGg6IDEwMCU7YCBvbiBib2R5XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIGhlaWdodDogJzEwMCUnXG59O1xuXG5mdW5jdGlvbiBwcmV2ZW50VG91Y2hNb3ZlKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBhbGxvd1RvdWNoTW92ZShlKSB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIHByZXZlbnRJbmVydGlhU2Nyb2xsKCkge1xuICB2YXIgdG9wID0gdGhpcy5zY3JvbGxUb3A7XG4gIHZhciB0b3RhbFNjcm9sbCA9IHRoaXMuc2Nyb2xsSGVpZ2h0O1xuICB2YXIgY3VycmVudFNjcm9sbCA9IHRvcCArIHRoaXMub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmICh0b3AgPT09IDApIHtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IDE7XG4gIH0gZWxzZSBpZiAoY3VycmVudFNjcm9sbCA9PT0gdG90YWxTY3JvbGwpIHtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IHRvcCAtIDE7XG4gIH1cbn0gLy8gYG9udG91Y2hzdGFydGAgY2hlY2sgd29ya3Mgb24gbW9zdCBicm93c2Vyc1xuLy8gYG1heFRvdWNoUG9pbnRzYCB3b3JrcyBvbiBJRTEwLzExIGFuZCBTdXJmYWNlXG5cblxuZnVuY3Rpb24gaXNUb3VjaERldmljZSgpIHtcbiAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHM7XG59XG5cbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xudmFyIGFjdGl2ZVNjcm9sbExvY2tzID0gMDtcbnZhciBsaXN0ZW5lck9wdGlvbnMgPSB7XG4gIGNhcHR1cmU6IGZhbHNlLFxuICBwYXNzaXZlOiBmYWxzZVxufTtcbmZ1bmN0aW9uIHVzZVNjcm9sbExvY2soX3JlZikge1xuICB2YXIgaXNFbmFibGVkID0gX3JlZi5pc0VuYWJsZWQsXG4gICAgICBfcmVmJGFjY291bnRGb3JTY3JvbGwgPSBfcmVmLmFjY291bnRGb3JTY3JvbGxiYXJzLFxuICAgICAgYWNjb3VudEZvclNjcm9sbGJhcnMgPSBfcmVmJGFjY291bnRGb3JTY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGFjY291bnRGb3JTY3JvbGw7XG4gIHZhciBvcmlnaW5hbFN0eWxlcyA9IHVzZVJlZih7fSk7XG4gIHZhciBzY3JvbGxUYXJnZXQgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBhZGRTY3JvbGxMb2NrID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHRvdWNoU2Nyb2xsVGFyZ2V0KSB7XG4gICAgaWYgKCFjYW5Vc2VET00pIHJldHVybjtcbiAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgdGFyZ2V0U3R5bGUgPSB0YXJnZXQgJiYgdGFyZ2V0LnN0eWxlO1xuXG4gICAgaWYgKGFjY291bnRGb3JTY3JvbGxiYXJzKSB7XG4gICAgICAvLyBzdG9yZSBhbnkgc3R5bGVzIGFscmVhZHkgYXBwbGllZCB0byB0aGUgYm9keVxuICAgICAgU1RZTEVfS0VZUy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbCA9IHRhcmdldFN0eWxlICYmIHRhcmdldFN0eWxlW2tleV07XG4gICAgICAgIG9yaWdpbmFsU3R5bGVzLmN1cnJlbnRba2V5XSA9IHZhbDtcbiAgICAgIH0pO1xuICAgIH0gLy8gYXBwbHkgdGhlIGxvY2sgc3R5bGVzIGFuZCBwYWRkaW5nIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHNjcm9sbCBsb2NrXG5cblxuICAgIGlmIChhY2NvdW50Rm9yU2Nyb2xsYmFycyAmJiBhY3RpdmVTY3JvbGxMb2NrcyA8IDEpIHtcbiAgICAgIHZhciBjdXJyZW50UGFkZGluZyA9IHBhcnNlSW50KG9yaWdpbmFsU3R5bGVzLmN1cnJlbnQucGFkZGluZ1JpZ2h0LCAxMCkgfHwgMDtcbiAgICAgIHZhciBjbGllbnRXaWR0aCA9IGRvY3VtZW50LmJvZHkgPyBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDogMDtcbiAgICAgIHZhciBhZGp1c3RlZFBhZGRpbmcgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGNsaWVudFdpZHRoICsgY3VycmVudFBhZGRpbmcgfHwgMDtcbiAgICAgIE9iamVjdC5rZXlzKExPQ0tfU1RZTEVTKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbCA9IExPQ0tfU1RZTEVTW2tleV07XG5cbiAgICAgICAgaWYgKHRhcmdldFN0eWxlKSB7XG4gICAgICAgICAgdGFyZ2V0U3R5bGVba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0YXJnZXRTdHlsZSkge1xuICAgICAgICB0YXJnZXRTdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiLmNvbmNhdChhZGp1c3RlZFBhZGRpbmcsIFwicHhcIik7XG4gICAgICB9XG4gICAgfSAvLyBhY2NvdW50IGZvciB0b3VjaCBkZXZpY2VzXG5cblxuICAgIGlmICh0YXJnZXQgJiYgaXNUb3VjaERldmljZSgpKSB7XG4gICAgICAvLyBNb2JpbGUgU2FmYXJpIGlnbm9yZXMgeyBvdmVyZmxvdzogaGlkZGVuIH0gZGVjbGFyYXRpb24gb24gdGhlIGJvZHkuXG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudFRvdWNoTW92ZSwgbGlzdGVuZXJPcHRpb25zKTsgLy8gQWxsb3cgc2Nyb2xsIG9uIHByb3ZpZGVkIHRhcmdldFxuXG4gICAgICBpZiAodG91Y2hTY3JvbGxUYXJnZXQpIHtcbiAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHByZXZlbnRJbmVydGlhU2Nyb2xsLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBhbGxvd1RvdWNoTW92ZSwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IC8vIGluY3JlbWVudCBhY3RpdmUgc2Nyb2xsIGxvY2tzXG5cblxuICAgIGFjdGl2ZVNjcm9sbExvY2tzICs9IDE7XG4gIH0sIFthY2NvdW50Rm9yU2Nyb2xsYmFyc10pO1xuICB2YXIgcmVtb3ZlU2Nyb2xsTG9jayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh0b3VjaFNjcm9sbFRhcmdldCkge1xuICAgIGlmICghY2FuVXNlRE9NKSByZXR1cm47XG4gICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIHRhcmdldFN0eWxlID0gdGFyZ2V0ICYmIHRhcmdldC5zdHlsZTsgLy8gc2FmZWx5IGRlY3JlbWVudCBhY3RpdmUgc2Nyb2xsIGxvY2tzXG5cbiAgICBhY3RpdmVTY3JvbGxMb2NrcyA9IE1hdGgubWF4KGFjdGl2ZVNjcm9sbExvY2tzIC0gMSwgMCk7IC8vIHJlYXBwbHkgb3JpZ2luYWwgYm9keSBzdHlsZXMsIGlmIGFueVxuXG4gICAgaWYgKGFjY291bnRGb3JTY3JvbGxiYXJzICYmIGFjdGl2ZVNjcm9sbExvY2tzIDwgMSkge1xuICAgICAgU1RZTEVfS0VZUy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbCA9IG9yaWdpbmFsU3R5bGVzLmN1cnJlbnRba2V5XTtcblxuICAgICAgICBpZiAodGFyZ2V0U3R5bGUpIHtcbiAgICAgICAgICB0YXJnZXRTdHlsZVtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IC8vIHJlbW92ZSB0b3VjaCBsaXN0ZW5lcnNcblxuXG4gICAgaWYgKHRhcmdldCAmJiBpc1RvdWNoRGV2aWNlKCkpIHtcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50VG91Y2hNb3ZlLCBsaXN0ZW5lck9wdGlvbnMpO1xuXG4gICAgICBpZiAodG91Y2hTY3JvbGxUYXJnZXQpIHtcbiAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHByZXZlbnRJbmVydGlhU2Nyb2xsLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBhbGxvd1RvdWNoTW92ZSwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFthY2NvdW50Rm9yU2Nyb2xsYmFyc10pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghaXNFbmFibGVkKSByZXR1cm47XG4gICAgdmFyIGVsZW1lbnQgPSBzY3JvbGxUYXJnZXQuY3VycmVudDtcbiAgICBhZGRTY3JvbGxMb2NrKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZW1vdmVTY3JvbGxMb2NrKGVsZW1lbnQpO1xuICAgIH07XG4gIH0sIFtpc0VuYWJsZWQsIGFkZFNjcm9sbExvY2ssIHJlbW92ZVNjcm9sbExvY2tdKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgc2Nyb2xsVGFyZ2V0LmN1cnJlbnQgPSBlbGVtZW50O1xuICB9O1xufVxuXG5mdW5jdGlvbiBfRU1PVElPTl9TVFJJTkdJRklFRF9DU1NfRVJST1JfXygpIHsgcmV0dXJuIFwiWW91IGhhdmUgdHJpZWQgdG8gc3RyaW5naWZ5IG9iamVjdCByZXR1cm5lZCBmcm9tIGBjc3NgIGZ1bmN0aW9uLiBJdCBpc24ndCBzdXBwb3NlZCB0byBiZSB1c2VkIGRpcmVjdGx5IChlLmcuIGFzIHZhbHVlIG9mIHRoZSBgY2xhc3NOYW1lYCBwcm9wKSwgYnV0IHJhdGhlciBoYW5kZWQgdG8gZW1vdGlvbiBzbyBpdCBjYW4gaGFuZGxlIGl0IChlLmcuIGFzIHZhbHVlIG9mIGBjc3NgIHByb3ApLlwiOyB9XG5cbnZhciBibHVyU2VsZWN0SW5wdXQgPSBmdW5jdGlvbiBibHVyU2VsZWN0SW5wdXQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xufTtcblxudmFyIF9yZWYyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8ge1xuICBuYW1lOiBcIjFrZmRiMGVcIixcbiAgc3R5bGVzOiBcInBvc2l0aW9uOmZpeGVkO2xlZnQ6MDtib3R0b206MDtyaWdodDowO3RvcDowXCJcbn0gOiB7XG4gIG5hbWU6IFwiYnA4Y3VhLVNjcm9sbE1hbmFnZXJcIixcbiAgc3R5bGVzOiBcInBvc2l0aW9uOmZpeGVkO2xlZnQ6MDtib3R0b206MDtyaWdodDowO3RvcDowO2xhYmVsOlNjcm9sbE1hbmFnZXI7XCIsXG4gIG1hcDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbE5qY205c2JFMWhibUZuWlhJdWRITjRJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRU3REVlNJc0ltWnBiR1VpT2lKVFkzSnZiR3hOWVc1aFoyVnlMblJ6ZUNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLaUJBYW5ONElHcHplQ0FxTDF4dWFXMXdiM0owSUhzZ2FuTjRJSDBnWm5KdmJTQW5RR1Z0YjNScGIyNHZjbVZoWTNRbk8xeHVhVzF3YjNKMElIc2dSbkpoWjIxbGJuUXNJRkpsWVdOMFJXeGxiV1Z1ZEN3Z1VtVm1RMkZzYkdKaFkyc2dmU0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2RYTmxVMk55YjJ4c1EyRndkSFZ5WlNCbWNtOXRJQ2N1TDNWelpWTmpjbTlzYkVOaGNIUjFjbVVuTzF4dWFXMXdiM0owSUhWelpWTmpjbTlzYkV4dlkyc2dabkp2YlNBbkxpOTFjMlZUWTNKdmJHeE1iMk5ySnp0Y2JseHVhVzUwWlhKbVlXTmxJRkJ5YjNCeklIdGNiaUFnY21WaFpHOXViSGtnWTJocGJHUnlaVzQ2SUNoeVpXWTZJRkpsWmtOaGJHeGlZV05yUEVoVVRVeEZiR1Z0Wlc1MFBpa2dQVDRnVW1WaFkzUkZiR1Z0Wlc1ME8xeHVJQ0J5WldGa2IyNXNlU0JzYjJOclJXNWhZbXhsWkRvZ1ltOXZiR1ZoYmp0Y2JpQWdjbVZoWkc5dWJIa2dZMkZ3ZEhWeVpVVnVZV0pzWldRNklHSnZiMnhsWVc0N1hHNGdJSEpsWVdSdmJteDVJRzl1UW05MGRHOXRRWEp5YVhabFB6b2dLR1YyWlc1ME9pQlhhR1ZsYkVWMlpXNTBJSHdnVkc5MVkyaEZkbVZ1ZENrZ1BUNGdkbTlwWkR0Y2JpQWdjbVZoWkc5dWJIa2diMjVDYjNSMGIyMU1aV0YyWlQ4NklDaGxkbVZ1ZERvZ1YyaGxaV3hGZG1WdWRDQjhJRlJ2ZFdOb1JYWmxiblFwSUQwK0lIWnZhV1E3WEc0Z0lISmxZV1J2Ym14NUlHOXVWRzl3UVhKeWFYWmxQem9nS0dWMlpXNTBPaUJYYUdWbGJFVjJaVzUwSUh3Z1ZHOTFZMmhGZG1WdWRDa2dQVDRnZG05cFpEdGNiaUFnY21WaFpHOXViSGtnYjI1VWIzQk1aV0YyWlQ4NklDaGxkbVZ1ZERvZ1YyaGxaV3hGZG1WdWRDQjhJRlJ2ZFdOb1JYWmxiblFwSUQwK0lIWnZhV1E3WEc1OVhHNWNibU52Ym5OMElHSnNkWEpUWld4bFkzUkpibkIxZENBOUlDZ3BJRDArWEc0Z0lHUnZZM1Z0Wlc1MExtRmpkR2wyWlVWc1pXMWxiblFnSmlZZ0tHUnZZM1Z0Wlc1MExtRmpkR2wyWlVWc1pXMWxiblFnWVhNZ1NGUk5URVZzWlcxbGJuUXBMbUpzZFhJb0tUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdVMk55YjJ4c1RXRnVZV2RsY2loN1hHNGdJR05vYVd4a2NtVnVMRnh1SUNCc2IyTnJSVzVoWW14bFpDeGNiaUFnWTJGd2RIVnlaVVZ1WVdKc1pXUWdQU0IwY25WbExGeHVJQ0J2YmtKdmRIUnZiVUZ5Y21sMlpTeGNiaUFnYjI1Q2IzUjBiMjFNWldGMlpTeGNiaUFnYjI1VWIzQkJjbkpwZG1Vc1hHNGdJRzl1Vkc5d1RHVmhkbVVzWEc1OU9pQlFjbTl3Y3lrZ2UxeHVJQ0JqYjI1emRDQnpaWFJUWTNKdmJHeERZWEIwZFhKbFZHRnlaMlYwSUQwZ2RYTmxVMk55YjJ4c1EyRndkSFZ5WlNoN1hHNGdJQ0FnYVhORmJtRmliR1ZrT2lCallYQjBkWEpsUlc1aFlteGxaQ3hjYmlBZ0lDQnZia0p2ZEhSdmJVRnljbWwyWlN4Y2JpQWdJQ0J2YmtKdmRIUnZiVXhsWVhabExGeHVJQ0FnSUc5dVZHOXdRWEp5YVhabExGeHVJQ0FnSUc5dVZHOXdUR1ZoZG1Vc1hHNGdJSDBwTzF4dUlDQmpiMjV6ZENCelpYUlRZM0p2Ykd4TWIyTnJWR0Z5WjJWMElEMGdkWE5sVTJOeWIyeHNURzlqYXloN0lHbHpSVzVoWW14bFpEb2diRzlqYTBWdVlXSnNaV1FnZlNrN1hHNWNiaUFnWTI5dWMzUWdkR0Z5WjJWMFVtVm1PaUJTWldaRFlXeHNZbUZqYXp4SVZFMU1SV3hsYldWdWRENGdQU0FvWld4bGJXVnVkQ2tnUFQ0Z2UxeHVJQ0FnSUhObGRGTmpjbTlzYkVOaGNIUjFjbVZVWVhKblpYUW9aV3hsYldWdWRDazdYRzRnSUNBZ2MyVjBVMk55YjJ4c1RHOWphMVJoY21kbGRDaGxiR1Z0Wlc1MEtUdGNiaUFnZlR0Y2JseHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lEeEdjbUZuYldWdWRENWNiaUFnSUNBZ0lIdHNiMk5yUlc1aFlteGxaQ0FtSmlBb1hHNGdJQ0FnSUNBZ0lEeGthWFpjYmlBZ0lDQWdJQ0FnSUNCdmJrTnNhV05yUFh0aWJIVnlVMlZzWldOMFNXNXdkWFI5WEc0Z0lDQWdJQ0FnSUNBZ1kzTnpQWHQ3SUhCdmMybDBhVzl1T2lBblptbDRaV1FuTENCc1pXWjBPaUF3TENCaWIzUjBiMjA2SURBc0lISnBaMmgwT2lBd0xDQjBiM0E2SURBZ2ZYMWNiaUFnSUNBZ0lDQWdMejVjYmlBZ0lDQWdJQ2w5WEc0Z0lDQWdJQ0I3WTJocGJHUnlaVzRvZEdGeVoyVjBVbVZtS1gxY2JpQWdJQ0E4TDBaeVlXZHRaVzUwUGx4dUlDQXBPMXh1ZlZ4dUlsMTkgKi9cIixcbiAgdG9TdHJpbmc6IF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fXG59O1xuXG5mdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGxvY2tFbmFibGVkID0gX3JlZi5sb2NrRW5hYmxlZCxcbiAgICAgIF9yZWYkY2FwdHVyZUVuYWJsZWQgPSBfcmVmLmNhcHR1cmVFbmFibGVkLFxuICAgICAgY2FwdHVyZUVuYWJsZWQgPSBfcmVmJGNhcHR1cmVFbmFibGVkID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRjYXB0dXJlRW5hYmxlZCxcbiAgICAgIG9uQm90dG9tQXJyaXZlID0gX3JlZi5vbkJvdHRvbUFycml2ZSxcbiAgICAgIG9uQm90dG9tTGVhdmUgPSBfcmVmLm9uQm90dG9tTGVhdmUsXG4gICAgICBvblRvcEFycml2ZSA9IF9yZWYub25Ub3BBcnJpdmUsXG4gICAgICBvblRvcExlYXZlID0gX3JlZi5vblRvcExlYXZlO1xuICB2YXIgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldCA9IHVzZVNjcm9sbENhcHR1cmUoe1xuICAgIGlzRW5hYmxlZDogY2FwdHVyZUVuYWJsZWQsXG4gICAgb25Cb3R0b21BcnJpdmU6IG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmU6IG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmU6IG9uVG9wQXJyaXZlLFxuICAgIG9uVG9wTGVhdmU6IG9uVG9wTGVhdmVcbiAgfSk7XG4gIHZhciBzZXRTY3JvbGxMb2NrVGFyZ2V0ID0gdXNlU2Nyb2xsTG9jayh7XG4gICAgaXNFbmFibGVkOiBsb2NrRW5hYmxlZFxuICB9KTtcblxuICB2YXIgdGFyZ2V0UmVmID0gZnVuY3Rpb24gdGFyZ2V0UmVmKGVsZW1lbnQpIHtcbiAgICBzZXRTY3JvbGxDYXB0dXJlVGFyZ2V0KGVsZW1lbnQpO1xuICAgIHNldFNjcm9sbExvY2tUYXJnZXQoZWxlbWVudCk7XG4gIH07XG5cbiAgcmV0dXJuIGpzeChGcmFnbWVudCwgbnVsbCwgbG9ja0VuYWJsZWQgJiYganN4KFwiZGl2XCIsIHtcbiAgICBvbkNsaWNrOiBibHVyU2VsZWN0SW5wdXQsXG4gICAgY3NzOiBfcmVmMlxuICB9KSwgY2hpbGRyZW4odGFyZ2V0UmVmKSk7XG59XG5cbnZhciBmb3JtYXRHcm91cExhYmVsID0gZnVuY3Rpb24gZm9ybWF0R3JvdXBMYWJlbChncm91cCkge1xuICByZXR1cm4gZ3JvdXAubGFiZWw7XG59O1xudmFyIGdldE9wdGlvbkxhYmVsJDEgPSBmdW5jdGlvbiBnZXRPcHRpb25MYWJlbChvcHRpb24pIHtcbiAgcmV0dXJuIG9wdGlvbi5sYWJlbDtcbn07XG52YXIgZ2V0T3B0aW9uVmFsdWUkMSA9IGZ1bmN0aW9uIGdldE9wdGlvblZhbHVlKG9wdGlvbikge1xuICByZXR1cm4gb3B0aW9uLnZhbHVlO1xufTtcbnZhciBpc09wdGlvbkRpc2FibGVkID0gZnVuY3Rpb24gaXNPcHRpb25EaXNhYmxlZChvcHRpb24pIHtcbiAgcmV0dXJuICEhb3B0aW9uLmlzRGlzYWJsZWQ7XG59O1xuXG52YXIgZGVmYXVsdFN0eWxlcyA9IHtcbiAgY2xlYXJJbmRpY2F0b3I6IGNsZWFySW5kaWNhdG9yQ1NTLFxuICBjb250YWluZXI6IGNvbnRhaW5lckNTUyxcbiAgY29udHJvbDogY3NzJDEsXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiBkcm9wZG93bkluZGljYXRvckNTUyxcbiAgZ3JvdXA6IGdyb3VwQ1NTLFxuICBncm91cEhlYWRpbmc6IGdyb3VwSGVhZGluZ0NTUyxcbiAgaW5kaWNhdG9yc0NvbnRhaW5lcjogaW5kaWNhdG9yc0NvbnRhaW5lckNTUyxcbiAgaW5kaWNhdG9yU2VwYXJhdG9yOiBpbmRpY2F0b3JTZXBhcmF0b3JDU1MsXG4gIGlucHV0OiBpbnB1dENTUyxcbiAgbG9hZGluZ0luZGljYXRvcjogbG9hZGluZ0luZGljYXRvckNTUyxcbiAgbG9hZGluZ01lc3NhZ2U6IGxvYWRpbmdNZXNzYWdlQ1NTLFxuICBtZW51OiBtZW51Q1NTLFxuICBtZW51TGlzdDogbWVudUxpc3RDU1MsXG4gIG1lbnVQb3J0YWw6IG1lbnVQb3J0YWxDU1MsXG4gIG11bHRpVmFsdWU6IG11bHRpVmFsdWVDU1MsXG4gIG11bHRpVmFsdWVMYWJlbDogbXVsdGlWYWx1ZUxhYmVsQ1NTLFxuICBtdWx0aVZhbHVlUmVtb3ZlOiBtdWx0aVZhbHVlUmVtb3ZlQ1NTLFxuICBub09wdGlvbnNNZXNzYWdlOiBub09wdGlvbnNNZXNzYWdlQ1NTLFxuICBvcHRpb246IG9wdGlvbkNTUyxcbiAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyQ1NTLFxuICBzaW5nbGVWYWx1ZTogY3NzJDIsXG4gIHZhbHVlQ29udGFpbmVyOiB2YWx1ZUNvbnRhaW5lckNTU1xufTsgLy8gTWVyZ2UgVXRpbGl0eVxuLy8gQWxsb3dzIGNvbnN1bWVycyB0byBleHRlbmQgYSBiYXNlIFNlbGVjdCB3aXRoIGFkZGl0aW9uYWwgc3R5bGVzXG5cbmZ1bmN0aW9uIG1lcmdlU3R5bGVzKHNvdXJjZSkge1xuICB2YXIgdGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAvLyBpbml0aWFsaXplIHdpdGggc291cmNlIHN0eWxlc1xuICB2YXIgc3R5bGVzID0gX29iamVjdFNwcmVhZDIoe30sIHNvdXJjZSk7IC8vIG1hc3NhZ2UgaW4gdGFyZ2V0IHN0eWxlc1xuXG5cbiAgT2JqZWN0LmtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXlBc1N0cmluZykge1xuICAgIHZhciBrZXkgPSBrZXlBc1N0cmluZztcblxuICAgIGlmIChzb3VyY2Vba2V5XSkge1xuICAgICAgc3R5bGVzW2tleV0gPSBmdW5jdGlvbiAocnNDc3MsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XShzb3VyY2Vba2V5XShyc0NzcywgcHJvcHMpLCBwcm9wcyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNba2V5XSA9IHRhcmdldFtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzdHlsZXM7XG59XG5cbnZhciBjb2xvcnMgPSB7XG4gIHByaW1hcnk6ICcjMjY4NEZGJyxcbiAgcHJpbWFyeTc1OiAnIzRDOUFGRicsXG4gIHByaW1hcnk1MDogJyNCMkQ0RkYnLFxuICBwcmltYXJ5MjU6ICcjREVFQkZGJyxcbiAgZGFuZ2VyOiAnI0RFMzUwQicsXG4gIGRhbmdlckxpZ2h0OiAnI0ZGQkRBRCcsXG4gIG5ldXRyYWwwOiAnaHNsKDAsIDAlLCAxMDAlKScsXG4gIG5ldXRyYWw1OiAnaHNsKDAsIDAlLCA5NSUpJyxcbiAgbmV1dHJhbDEwOiAnaHNsKDAsIDAlLCA5MCUpJyxcbiAgbmV1dHJhbDIwOiAnaHNsKDAsIDAlLCA4MCUpJyxcbiAgbmV1dHJhbDMwOiAnaHNsKDAsIDAlLCA3MCUpJyxcbiAgbmV1dHJhbDQwOiAnaHNsKDAsIDAlLCA2MCUpJyxcbiAgbmV1dHJhbDUwOiAnaHNsKDAsIDAlLCA1MCUpJyxcbiAgbmV1dHJhbDYwOiAnaHNsKDAsIDAlLCA0MCUpJyxcbiAgbmV1dHJhbDcwOiAnaHNsKDAsIDAlLCAzMCUpJyxcbiAgbmV1dHJhbDgwOiAnaHNsKDAsIDAlLCAyMCUpJyxcbiAgbmV1dHJhbDkwOiAnaHNsKDAsIDAlLCAxMCUpJ1xufTtcbnZhciBib3JkZXJSYWRpdXMgPSA0OyAvLyBVc2VkIHRvIGNhbGN1bGF0ZSBjb25zaXN0ZW50IG1hcmdpbi9wYWRkaW5nIG9uIGVsZW1lbnRzXG5cbnZhciBiYXNlVW5pdCA9IDQ7IC8vIFRoZSBtaW5pbXVtIGhlaWdodCBvZiB0aGUgY29udHJvbFxuXG52YXIgY29udHJvbEhlaWdodCA9IDM4OyAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIGNvbnRyb2wgYW5kIG1lbnUgKi9cblxudmFyIG1lbnVHdXR0ZXIgPSBiYXNlVW5pdCAqIDI7XG52YXIgc3BhY2luZyA9IHtcbiAgYmFzZVVuaXQ6IGJhc2VVbml0LFxuICBjb250cm9sSGVpZ2h0OiBjb250cm9sSGVpZ2h0LFxuICBtZW51R3V0dGVyOiBtZW51R3V0dGVyXG59O1xudmFyIGRlZmF1bHRUaGVtZSA9IHtcbiAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gIGNvbG9yczogY29sb3JzLFxuICBzcGFjaW5nOiBzcGFjaW5nXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICAnYXJpYS1saXZlJzogJ3BvbGl0ZScsXG4gIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZTogdHJ1ZSxcbiAgYmx1cklucHV0T25TZWxlY3Q6IGlzVG91Y2hDYXBhYmxlKCksXG4gIGNhcHR1cmVNZW51U2Nyb2xsOiAhaXNUb3VjaENhcGFibGUoKSxcbiAgY2xvc2VNZW51T25TZWxlY3Q6IHRydWUsXG4gIGNsb3NlTWVudU9uU2Nyb2xsOiBmYWxzZSxcbiAgY29tcG9uZW50czoge30sXG4gIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZTogdHJ1ZSxcbiAgZXNjYXBlQ2xlYXJzVmFsdWU6IGZhbHNlLFxuICBmaWx0ZXJPcHRpb246IGNyZWF0ZUZpbHRlcigpLFxuICBmb3JtYXRHcm91cExhYmVsOiBmb3JtYXRHcm91cExhYmVsLFxuICBnZXRPcHRpb25MYWJlbDogZ2V0T3B0aW9uTGFiZWwkMSxcbiAgZ2V0T3B0aW9uVmFsdWU6IGdldE9wdGlvblZhbHVlJDEsXG4gIGlzRGlzYWJsZWQ6IGZhbHNlLFxuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBpc011bHRpOiBmYWxzZSxcbiAgaXNSdGw6IGZhbHNlLFxuICBpc1NlYXJjaGFibGU6IHRydWUsXG4gIGlzT3B0aW9uRGlzYWJsZWQ6IGlzT3B0aW9uRGlzYWJsZWQsXG4gIGxvYWRpbmdNZXNzYWdlOiBmdW5jdGlvbiBsb2FkaW5nTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gJ0xvYWRpbmcuLi4nO1xuICB9LFxuICBtYXhNZW51SGVpZ2h0OiAzMDAsXG4gIG1pbk1lbnVIZWlnaHQ6IDE0MCxcbiAgbWVudUlzT3BlbjogZmFsc2UsXG4gIG1lbnVQbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtZW51UG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIG1lbnVTaG91bGRCbG9ja1Njcm9sbDogZmFsc2UsXG4gIG1lbnVTaG91bGRTY3JvbGxJbnRvVmlldzogIWlzTW9iaWxlRGV2aWNlKCksXG4gIG5vT3B0aW9uc01lc3NhZ2U6IGZ1bmN0aW9uIG5vT3B0aW9uc01lc3NhZ2UoKSB7XG4gICAgcmV0dXJuICdObyBvcHRpb25zJztcbiAgfSxcbiAgb3Blbk1lbnVPbkZvY3VzOiBmYWxzZSxcbiAgb3Blbk1lbnVPbkNsaWNrOiB0cnVlLFxuICBvcHRpb25zOiBbXSxcbiAgcGFnZVNpemU6IDUsXG4gIHBsYWNlaG9sZGVyOiAnU2VsZWN0Li4uJyxcbiAgc2NyZWVuUmVhZGVyU3RhdHVzOiBmdW5jdGlvbiBzY3JlZW5SZWFkZXJTdGF0dXMoX3JlZikge1xuICAgIHZhciBjb3VudCA9IF9yZWYuY291bnQ7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KGNvdW50LCBcIiByZXN1bHRcIikuY29uY2F0KGNvdW50ICE9PSAxID8gJ3MnIDogJycsIFwiIGF2YWlsYWJsZVwiKTtcbiAgfSxcbiAgc3R5bGVzOiB7fSxcbiAgdGFiSW5kZXg6IDAsXG4gIHRhYlNlbGVjdHNWYWx1ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gdG9DYXRlZ29yaXplZE9wdGlvbihwcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSwgaW5kZXgpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfaXNPcHRpb25EaXNhYmxlZChwcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSk7XG5cbiAgdmFyIGlzU2VsZWN0ZWQgPSBfaXNPcHRpb25TZWxlY3RlZChwcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSk7XG5cbiAgdmFyIGxhYmVsID0gZ2V0T3B0aW9uTGFiZWwocHJvcHMsIG9wdGlvbik7XG4gIHZhciB2YWx1ZSA9IGdldE9wdGlvblZhbHVlKHByb3BzLCBvcHRpb24pO1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdvcHRpb24nLFxuICAgIGRhdGE6IG9wdGlvbixcbiAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQsXG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBpbmRleDogaW5kZXhcbiAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRDYXRlZ29yaXplZE9wdGlvbnMocHJvcHMsIHNlbGVjdFZhbHVlKSB7XG4gIHJldHVybiBwcm9wcy5vcHRpb25zLm1hcChmdW5jdGlvbiAoZ3JvdXBPck9wdGlvbiwgZ3JvdXBPck9wdGlvbkluZGV4KSB7XG4gICAgaWYgKCdvcHRpb25zJyBpbiBncm91cE9yT3B0aW9uKSB7XG4gICAgICB2YXIgY2F0ZWdvcml6ZWRPcHRpb25zID0gZ3JvdXBPck9wdGlvbi5vcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uLCBvcHRpb25JbmRleCkge1xuICAgICAgICByZXR1cm4gdG9DYXRlZ29yaXplZE9wdGlvbihwcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSwgb3B0aW9uSW5kZXgpO1xuICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChjYXRlZ29yaXplZE9wdGlvbikge1xuICAgICAgICByZXR1cm4gaXNGb2N1c2FibGUocHJvcHMsIGNhdGVnb3JpemVkT3B0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNhdGVnb3JpemVkT3B0aW9ucy5sZW5ndGggPiAwID8ge1xuICAgICAgICB0eXBlOiAnZ3JvdXAnLFxuICAgICAgICBkYXRhOiBncm91cE9yT3B0aW9uLFxuICAgICAgICBvcHRpb25zOiBjYXRlZ29yaXplZE9wdGlvbnMsXG4gICAgICAgIGluZGV4OiBncm91cE9yT3B0aW9uSW5kZXhcbiAgICAgIH0gOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIGNhdGVnb3JpemVkT3B0aW9uID0gdG9DYXRlZ29yaXplZE9wdGlvbihwcm9wcywgZ3JvdXBPck9wdGlvbiwgc2VsZWN0VmFsdWUsIGdyb3VwT3JPcHRpb25JbmRleCk7XG4gICAgcmV0dXJuIGlzRm9jdXNhYmxlKHByb3BzLCBjYXRlZ29yaXplZE9wdGlvbikgPyBjYXRlZ29yaXplZE9wdGlvbiA6IHVuZGVmaW5lZDtcbiAgfSkuZmlsdGVyKG5vdE51bGxpc2gpO1xufVxuXG5mdW5jdGlvbiBidWlsZEZvY3VzYWJsZU9wdGlvbnNGcm9tQ2F0ZWdvcml6ZWRPcHRpb25zKGNhdGVnb3JpemVkT3B0aW9ucykge1xuICByZXR1cm4gY2F0ZWdvcml6ZWRPcHRpb25zLnJlZHVjZShmdW5jdGlvbiAob3B0aW9uc0FjY3VtdWxhdG9yLCBjYXRlZ29yaXplZE9wdGlvbikge1xuICAgIGlmIChjYXRlZ29yaXplZE9wdGlvbi50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICBvcHRpb25zQWNjdW11bGF0b3IucHVzaC5hcHBseShvcHRpb25zQWNjdW11bGF0b3IsIF90b0NvbnN1bWFibGVBcnJheShjYXRlZ29yaXplZE9wdGlvbi5vcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiBvcHRpb24uZGF0YTtcbiAgICAgIH0pKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnNBY2N1bXVsYXRvci5wdXNoKGNhdGVnb3JpemVkT3B0aW9uLmRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zQWNjdW11bGF0b3I7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRGb2N1c2FibGVPcHRpb25zKHByb3BzLCBzZWxlY3RWYWx1ZSkge1xuICByZXR1cm4gYnVpbGRGb2N1c2FibGVPcHRpb25zRnJvbUNhdGVnb3JpemVkT3B0aW9ucyhidWlsZENhdGVnb3JpemVkT3B0aW9ucyhwcm9wcywgc2VsZWN0VmFsdWUpKTtcbn1cblxuZnVuY3Rpb24gaXNGb2N1c2FibGUocHJvcHMsIGNhdGVnb3JpemVkT3B0aW9uKSB7XG4gIHZhciBfcHJvcHMkaW5wdXRWYWx1ZSA9IHByb3BzLmlucHV0VmFsdWUsXG4gICAgICBpbnB1dFZhbHVlID0gX3Byb3BzJGlucHV0VmFsdWUgPT09IHZvaWQgMCA/ICcnIDogX3Byb3BzJGlucHV0VmFsdWU7XG4gIHZhciBkYXRhID0gY2F0ZWdvcml6ZWRPcHRpb24uZGF0YSxcbiAgICAgIGlzU2VsZWN0ZWQgPSBjYXRlZ29yaXplZE9wdGlvbi5pc1NlbGVjdGVkLFxuICAgICAgbGFiZWwgPSBjYXRlZ29yaXplZE9wdGlvbi5sYWJlbCxcbiAgICAgIHZhbHVlID0gY2F0ZWdvcml6ZWRPcHRpb24udmFsdWU7XG4gIHJldHVybiAoIXNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMocHJvcHMpIHx8ICFpc1NlbGVjdGVkKSAmJiBfZmlsdGVyT3B0aW9uKHByb3BzLCB7XG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBkYXRhOiBkYXRhXG4gIH0sIGlucHV0VmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0Rm9jdXNlZFZhbHVlKHN0YXRlLCBuZXh0U2VsZWN0VmFsdWUpIHtcbiAgdmFyIGZvY3VzZWRWYWx1ZSA9IHN0YXRlLmZvY3VzZWRWYWx1ZSxcbiAgICAgIGxhc3RTZWxlY3RWYWx1ZSA9IHN0YXRlLnNlbGVjdFZhbHVlO1xuICB2YXIgbGFzdEZvY3VzZWRJbmRleCA9IGxhc3RTZWxlY3RWYWx1ZS5pbmRleE9mKGZvY3VzZWRWYWx1ZSk7XG5cbiAgaWYgKGxhc3RGb2N1c2VkSW5kZXggPiAtMSkge1xuICAgIHZhciBuZXh0Rm9jdXNlZEluZGV4ID0gbmV4dFNlbGVjdFZhbHVlLmluZGV4T2YoZm9jdXNlZFZhbHVlKTtcblxuICAgIGlmIChuZXh0Rm9jdXNlZEluZGV4ID4gLTEpIHtcbiAgICAgIC8vIHRoZSBmb2N1c2VkIHZhbHVlIGlzIHN0aWxsIGluIHRoZSBzZWxlY3RWYWx1ZSwgcmV0dXJuIGl0XG4gICAgICByZXR1cm4gZm9jdXNlZFZhbHVlO1xuICAgIH0gZWxzZSBpZiAobGFzdEZvY3VzZWRJbmRleCA8IG5leHRTZWxlY3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgIC8vIHRoZSBmb2N1c2VkVmFsdWUgaXMgbm90IHByZXNlbnQgaW4gdGhlIG5leHQgc2VsZWN0VmFsdWUgYXJyYXkgYnlcbiAgICAgIC8vIHJlZmVyZW5jZSwgc28gcmV0dXJuIHRoZSBuZXcgdmFsdWUgYXQgdGhlIHNhbWUgaW5kZXhcbiAgICAgIHJldHVybiBuZXh0U2VsZWN0VmFsdWVbbGFzdEZvY3VzZWRJbmRleF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRGb2N1c2VkT3B0aW9uKHN0YXRlLCBvcHRpb25zKSB7XG4gIHZhciBsYXN0Rm9jdXNlZE9wdGlvbiA9IHN0YXRlLmZvY3VzZWRPcHRpb247XG4gIHJldHVybiBsYXN0Rm9jdXNlZE9wdGlvbiAmJiBvcHRpb25zLmluZGV4T2YobGFzdEZvY3VzZWRPcHRpb24pID4gLTEgPyBsYXN0Rm9jdXNlZE9wdGlvbiA6IG9wdGlvbnNbMF07XG59XG5cbnZhciBnZXRPcHRpb25MYWJlbCA9IGZ1bmN0aW9uIGdldE9wdGlvbkxhYmVsKHByb3BzLCBkYXRhKSB7XG4gIHJldHVybiBwcm9wcy5nZXRPcHRpb25MYWJlbChkYXRhKTtcbn07XG5cbnZhciBnZXRPcHRpb25WYWx1ZSA9IGZ1bmN0aW9uIGdldE9wdGlvblZhbHVlKHByb3BzLCBkYXRhKSB7XG4gIHJldHVybiBwcm9wcy5nZXRPcHRpb25WYWx1ZShkYXRhKTtcbn07XG5cbmZ1bmN0aW9uIF9pc09wdGlvbkRpc2FibGVkKHByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgcHJvcHMuaXNPcHRpb25EaXNhYmxlZCA9PT0gJ2Z1bmN0aW9uJyA/IHByb3BzLmlzT3B0aW9uRGlzYWJsZWQob3B0aW9uLCBzZWxlY3RWYWx1ZSkgOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX2lzT3B0aW9uU2VsZWN0ZWQocHJvcHMsIG9wdGlvbiwgc2VsZWN0VmFsdWUpIHtcbiAgaWYgKHNlbGVjdFZhbHVlLmluZGV4T2Yob3B0aW9uKSA+IC0xKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZW9mIHByb3BzLmlzT3B0aW9uU2VsZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcHJvcHMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24sIHNlbGVjdFZhbHVlKTtcbiAgfVxuXG4gIHZhciBjYW5kaWRhdGUgPSBnZXRPcHRpb25WYWx1ZShwcm9wcywgb3B0aW9uKTtcbiAgcmV0dXJuIHNlbGVjdFZhbHVlLnNvbWUoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gZ2V0T3B0aW9uVmFsdWUocHJvcHMsIGkpID09PSBjYW5kaWRhdGU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBfZmlsdGVyT3B0aW9uKHByb3BzLCBvcHRpb24sIGlucHV0VmFsdWUpIHtcbiAgcmV0dXJuIHByb3BzLmZpbHRlck9wdGlvbiA/IHByb3BzLmZpbHRlck9wdGlvbihvcHRpb24sIGlucHV0VmFsdWUpIDogdHJ1ZTtcbn1cblxudmFyIHNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMgPSBmdW5jdGlvbiBzaG91bGRIaWRlU2VsZWN0ZWRPcHRpb25zKHByb3BzKSB7XG4gIHZhciBoaWRlU2VsZWN0ZWRPcHRpb25zID0gcHJvcHMuaGlkZVNlbGVjdGVkT3B0aW9ucyxcbiAgICAgIGlzTXVsdGkgPSBwcm9wcy5pc011bHRpO1xuICBpZiAoaGlkZVNlbGVjdGVkT3B0aW9ucyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaXNNdWx0aTtcbiAgcmV0dXJuIGhpZGVTZWxlY3RlZE9wdGlvbnM7XG59O1xuXG52YXIgaW5zdGFuY2VJZCA9IDE7XG5cbnZhciBTZWxlY3QgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNlbGVjdCwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTZWxlY3QpO1xuXG4gIC8vIE1pc2MuIEluc3RhbmNlIFByb3BlcnRpZXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFRPRE9cbiAgLy8gUmVmc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTGlmZWN5Y2xlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmdW5jdGlvbiBTZWxlY3QoX3Byb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlbGVjdCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9wcm9wcyk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBhcmlhU2VsZWN0aW9uOiBudWxsLFxuICAgICAgZm9jdXNlZE9wdGlvbjogbnVsbCxcbiAgICAgIGZvY3VzZWRWYWx1ZTogbnVsbCxcbiAgICAgIGlucHV0SXNIaWRkZW46IGZhbHNlLFxuICAgICAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgICAgIHNlbGVjdFZhbHVlOiBbXSxcbiAgICAgIGNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlOiBmYWxzZSxcbiAgICAgIHByZXZXYXNGb2N1c2VkOiBmYWxzZSxcbiAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTogdW5kZWZpbmVkLFxuICAgICAgcHJldlByb3BzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIF90aGlzLmJsb2NrT3B0aW9uSG92ZXIgPSBmYWxzZTtcbiAgICBfdGhpcy5pc0NvbXBvc2luZyA9IGZhbHNlO1xuICAgIF90aGlzLmNvbW1vblByb3BzID0gdm9pZCAwO1xuICAgIF90aGlzLmluaXRpYWxUb3VjaFggPSAwO1xuICAgIF90aGlzLmluaXRpYWxUb3VjaFkgPSAwO1xuICAgIF90aGlzLmluc3RhbmNlUHJlZml4ID0gJyc7XG4gICAgX3RoaXMub3BlbkFmdGVyRm9jdXMgPSBmYWxzZTtcbiAgICBfdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IGZhbHNlO1xuICAgIF90aGlzLnVzZXJJc0RyYWdnaW5nID0gdm9pZCAwO1xuICAgIF90aGlzLmNvbnRyb2xSZWYgPSBudWxsO1xuXG4gICAgX3RoaXMuZ2V0Q29udHJvbFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLmNvbnRyb2xSZWYgPSByZWY7XG4gICAgfTtcblxuICAgIF90aGlzLmZvY3VzZWRPcHRpb25SZWYgPSBudWxsO1xuXG4gICAgX3RoaXMuZ2V0Rm9jdXNlZE9wdGlvblJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLmZvY3VzZWRPcHRpb25SZWYgPSByZWY7XG4gICAgfTtcblxuICAgIF90aGlzLm1lbnVMaXN0UmVmID0gbnVsbDtcblxuICAgIF90aGlzLmdldE1lbnVMaXN0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMubWVudUxpc3RSZWYgPSByZWY7XG4gICAgfTtcblxuICAgIF90aGlzLmlucHV0UmVmID0gbnVsbDtcblxuICAgIF90aGlzLmdldElucHV0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMuaW5wdXRSZWYgPSByZWY7XG4gICAgfTtcblxuICAgIF90aGlzLmZvY3VzID0gX3RoaXMuZm9jdXNJbnB1dDtcbiAgICBfdGhpcy5ibHVyID0gX3RoaXMuYmx1cklucHV0O1xuXG4gICAgX3RoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAobmV3VmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHMub25DaGFuZ2UsXG4gICAgICAgICAgbmFtZSA9IF90aGlzJHByb3BzLm5hbWU7XG4gICAgICBhY3Rpb25NZXRhLm5hbWUgPSBuYW1lO1xuXG4gICAgICBfdGhpcy5hcmlhT25DaGFuZ2UobmV3VmFsdWUsIGFjdGlvbk1ldGEpO1xuXG4gICAgICBvbkNoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgfTtcblxuICAgIF90aGlzLnNldFZhbHVlID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBhY3Rpb24sIG9wdGlvbikge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGNsb3NlTWVudU9uU2VsZWN0ID0gX3RoaXMkcHJvcHMyLmNsb3NlTWVudU9uU2VsZWN0LFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczIuaXNNdWx0aSxcbiAgICAgICAgICBpbnB1dFZhbHVlID0gX3RoaXMkcHJvcHMyLmlucHV0VmFsdWU7XG5cbiAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UoJycsIHtcbiAgICAgICAgYWN0aW9uOiAnc2V0LXZhbHVlJyxcbiAgICAgICAgcHJldklucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY2xvc2VNZW51T25TZWxlY3QpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTogIWlzTXVsdGlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMub25NZW51Q2xvc2UoKTtcbiAgICAgIH0gLy8gd2hlbiB0aGUgc2VsZWN0IHZhbHVlIHNob3VsZCBjaGFuZ2UsIHdlIHNob3VsZCByZXNldCBmb2N1c2VkVmFsdWVcblxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMub25DaGFuZ2UobmV3VmFsdWUsIHtcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIG9wdGlvbjogb3B0aW9uXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2VsZWN0T3B0aW9uID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgYmx1cklucHV0T25TZWxlY3QgPSBfdGhpcyRwcm9wczMuYmx1cklucHV0T25TZWxlY3QsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzMy5pc011bHRpLFxuICAgICAgICAgIG5hbWUgPSBfdGhpcyRwcm9wczMubmFtZTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuXG4gICAgICB2YXIgZGVzZWxlY3RlZCA9IGlzTXVsdGkgJiYgX3RoaXMuaXNPcHRpb25TZWxlY3RlZChuZXdWYWx1ZSwgc2VsZWN0VmFsdWUpO1xuXG4gICAgICB2YXIgaXNEaXNhYmxlZCA9IF90aGlzLmlzT3B0aW9uRGlzYWJsZWQobmV3VmFsdWUsIHNlbGVjdFZhbHVlKTtcblxuICAgICAgaWYgKGRlc2VsZWN0ZWQpIHtcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IF90aGlzLmdldE9wdGlvblZhbHVlKG5ld1ZhbHVlKTtcblxuICAgICAgICBfdGhpcy5zZXRWYWx1ZShtdWx0aVZhbHVlQXNWYWx1ZShzZWxlY3RWYWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0T3B0aW9uVmFsdWUoaSkgIT09IGNhbmRpZGF0ZTtcbiAgICAgICAgfSkpLCAnZGVzZWxlY3Qtb3B0aW9uJywgbmV3VmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICghaXNEaXNhYmxlZCkge1xuICAgICAgICAvLyBTZWxlY3Qgb3B0aW9uIGlmIG9wdGlvbiBpcyBub3QgZGlzYWJsZWRcbiAgICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgICBfdGhpcy5zZXRWYWx1ZShtdWx0aVZhbHVlQXNWYWx1ZShbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHNlbGVjdFZhbHVlKSwgW25ld1ZhbHVlXSkpLCAnc2VsZWN0LW9wdGlvbicsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5zZXRWYWx1ZShzaW5nbGVWYWx1ZUFzVmFsdWUobmV3VmFsdWUpLCAnc2VsZWN0LW9wdGlvbicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5hcmlhT25DaGFuZ2Uoc2luZ2xlVmFsdWVBc1ZhbHVlKG5ld1ZhbHVlKSwge1xuICAgICAgICAgIGFjdGlvbjogJ3NlbGVjdC1vcHRpb24nLFxuICAgICAgICAgIG9wdGlvbjogbmV3VmFsdWUsXG4gICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChibHVySW5wdXRPblNlbGVjdCkge1xuICAgICAgICBfdGhpcy5ibHVySW5wdXQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMucmVtb3ZlVmFsdWUgPSBmdW5jdGlvbiAocmVtb3ZlZFZhbHVlKSB7XG4gICAgICB2YXIgaXNNdWx0aSA9IF90aGlzLnByb3BzLmlzTXVsdGk7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcblxuICAgICAgdmFyIGNhbmRpZGF0ZSA9IF90aGlzLmdldE9wdGlvblZhbHVlKHJlbW92ZWRWYWx1ZSk7XG5cbiAgICAgIHZhciBuZXdWYWx1ZUFycmF5ID0gc2VsZWN0VmFsdWUuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5nZXRPcHRpb25WYWx1ZShpKSAhPT0gY2FuZGlkYXRlO1xuICAgICAgfSk7XG4gICAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZVRlcm5hcnkoaXNNdWx0aSwgbmV3VmFsdWVBcnJheSwgbmV3VmFsdWVBcnJheVswXSB8fCBudWxsKTtcblxuICAgICAgX3RoaXMub25DaGFuZ2UobmV3VmFsdWUsIHtcbiAgICAgICAgYWN0aW9uOiAncmVtb3ZlLXZhbHVlJyxcbiAgICAgICAgcmVtb3ZlZFZhbHVlOiByZW1vdmVkVmFsdWVcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgfTtcblxuICAgIF90aGlzLmNsZWFyVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcblxuICAgICAgX3RoaXMub25DaGFuZ2UodmFsdWVUZXJuYXJ5KF90aGlzLnByb3BzLmlzTXVsdGksIFtdLCBudWxsKSwge1xuICAgICAgICBhY3Rpb246ICdjbGVhcicsXG4gICAgICAgIHJlbW92ZWRWYWx1ZXM6IHNlbGVjdFZhbHVlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucG9wVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaXNNdWx0aSA9IF90aGlzLnByb3BzLmlzTXVsdGk7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICAgIHZhciBsYXN0U2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdFZhbHVlW3NlbGVjdFZhbHVlLmxlbmd0aCAtIDFdO1xuICAgICAgdmFyIG5ld1ZhbHVlQXJyYXkgPSBzZWxlY3RWYWx1ZS5zbGljZSgwLCBzZWxlY3RWYWx1ZS5sZW5ndGggLSAxKTtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlVGVybmFyeShpc011bHRpLCBuZXdWYWx1ZUFycmF5LCBuZXdWYWx1ZUFycmF5WzBdIHx8IG51bGwpO1xuXG4gICAgICBfdGhpcy5vbkNoYW5nZShuZXdWYWx1ZSwge1xuICAgICAgICBhY3Rpb246ICdwb3AtdmFsdWUnLFxuICAgICAgICByZW1vdmVkVmFsdWU6IGxhc3RTZWxlY3RlZFZhbHVlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgfTtcblxuICAgIF90aGlzLmN4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbGFzc05hbWVzLmFwcGx5KHZvaWQgMCwgW190aGlzLnByb3BzLmNsYXNzTmFtZVByZWZpeF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0T3B0aW9uTGFiZWwgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgcmV0dXJuIGdldE9wdGlvbkxhYmVsKF90aGlzLnByb3BzLCBkYXRhKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0T3B0aW9uVmFsdWUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgcmV0dXJuIGdldE9wdGlvblZhbHVlKF90aGlzLnByb3BzLCBkYXRhKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0U3R5bGVzID0gZnVuY3Rpb24gKGtleSwgcHJvcHMpIHtcbiAgICAgIHZhciBiYXNlID0gZGVmYXVsdFN0eWxlc1trZXldKHByb3BzKTtcbiAgICAgIGJhc2UuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuICAgICAgdmFyIGN1c3RvbSA9IF90aGlzLnByb3BzLnN0eWxlc1trZXldO1xuICAgICAgcmV0dXJuIGN1c3RvbSA/IGN1c3RvbShiYXNlLCBwcm9wcykgOiBiYXNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRFbGVtZW50SWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KF90aGlzLmluc3RhbmNlUHJlZml4LCBcIi1cIikuY29uY2F0KGVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRDb21wb25lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb21wb25lbnRzKF90aGlzLnByb3BzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYnVpbGRDYXRlZ29yaXplZE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYnVpbGRDYXRlZ29yaXplZE9wdGlvbnMoX3RoaXMucHJvcHMsIF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0Q2F0ZWdvcml6ZWRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm1lbnVJc09wZW4gPyBfdGhpcy5idWlsZENhdGVnb3JpemVkT3B0aW9ucygpIDogW107XG4gICAgfTtcblxuICAgIF90aGlzLmJ1aWxkRm9jdXNhYmxlT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBidWlsZEZvY3VzYWJsZU9wdGlvbnNGcm9tQ2F0ZWdvcml6ZWRPcHRpb25zKF90aGlzLmJ1aWxkQ2F0ZWdvcml6ZWRPcHRpb25zKCkpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRGb2N1c2FibGVPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm1lbnVJc09wZW4gPyBfdGhpcy5idWlsZEZvY3VzYWJsZU9wdGlvbnMoKSA6IFtdO1xuICAgIH07XG5cbiAgICBfdGhpcy5hcmlhT25DaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXJpYVNlbGVjdGlvbjogX29iamVjdFNwcmVhZDIoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9LCBhY3Rpb25NZXRhKVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uTWVudU1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgX3RoaXMuZm9jdXNJbnB1dCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbk1lbnVNb3VzZU1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLmJsb2NrT3B0aW9uSG92ZXIgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Db250cm9sTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBFdmVudCBjYXB0dXJlZCBieSBkcm9wZG93biBpbmRpY2F0b3JcbiAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG9wZW5NZW51T25DbGljayA9IF90aGlzLnByb3BzLm9wZW5NZW51T25DbGljaztcblxuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5pc0ZvY3VzZWQpIHtcbiAgICAgICAgaWYgKG9wZW5NZW51T25DbGljaykge1xuICAgICAgICAgIF90aGlzLm9wZW5BZnRlckZvY3VzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIH0gZWxzZSBpZiAoIV90aGlzLnByb3BzLm1lbnVJc09wZW4pIHtcbiAgICAgICAgaWYgKG9wZW5NZW51T25DbGljaykge1xuICAgICAgICAgIF90aGlzLm9wZW5NZW51KCdmaXJzdCcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgIT09ICdJTlBVVCcgJiYgZXZlbnQudGFyZ2V0LnRhZ05hbWUgIT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgICBfdGhpcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ0lOUFVUJyAmJiBldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBpZ25vcmUgbW91c2UgZXZlbnRzIHRoYXQgd2VyZW4ndCB0cmlnZ2VyZWQgYnkgdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLmlzRGlzYWJsZWQpIHJldHVybjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHM0LmlzTXVsdGksXG4gICAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzNC5tZW51SXNPcGVuO1xuXG4gICAgICBfdGhpcy5mb2N1c0lucHV0KCk7XG5cbiAgICAgIGlmIChtZW51SXNPcGVuKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6ICFpc011bHRpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25DbGVhckluZGljYXRvck1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gaWdub3JlIG1vdXNlIGV2ZW50cyB0aGF0IHdlcmVuJ3QgdHJpZ2dlcmVkIGJ5IHRoZSBwcmltYXJ5IGJ1dHRvblxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmNsZWFyVmFsdWUoKTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIF90aGlzLm9wZW5BZnRlckZvY3VzID0gZmFsc2U7XG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hlbmQnKSB7XG4gICAgICAgIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vblNjcm9sbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5jbG9zZU1lbnVPblNjcm9sbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBpc0RvY3VtZW50RWxlbWVudChldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25NZW51Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgX3RoaXMucHJvcHMuY2xvc2VNZW51T25TY3JvbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLmNsb3NlTWVudU9uU2Nyb2xsKGV2ZW50KSkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uTWVudUNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25Db21wb3NpdGlvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuaXNDb21wb3NpbmcgPSB0cnVlO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNvbXBvc2l0aW9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuaXNDb21wb3NpbmcgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgdG91Y2hlcyA9IF9yZWYyLnRvdWNoZXM7XG4gICAgICB2YXIgdG91Y2ggPSB0b3VjaGVzICYmIHRvdWNoZXMuaXRlbSgwKTtcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmluaXRpYWxUb3VjaFggPSB0b3VjaC5jbGllbnRYO1xuICAgICAgX3RoaXMuaW5pdGlhbFRvdWNoWSA9IHRvdWNoLmNsaWVudFk7XG4gICAgICBfdGhpcy51c2VySXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblRvdWNoTW92ZSA9IGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgdmFyIHRvdWNoZXMgPSBfcmVmMy50b3VjaGVzO1xuICAgICAgdmFyIHRvdWNoID0gdG91Y2hlcyAmJiB0b3VjaGVzLml0ZW0oMCk7XG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGVsdGFYID0gTWF0aC5hYnModG91Y2guY2xpZW50WCAtIF90aGlzLmluaXRpYWxUb3VjaFgpO1xuICAgICAgdmFyIGRlbHRhWSA9IE1hdGguYWJzKHRvdWNoLmNsaWVudFkgLSBfdGhpcy5pbml0aWFsVG91Y2hZKTtcbiAgICAgIHZhciBtb3ZlVGhyZXNob2xkID0gNTtcbiAgICAgIF90aGlzLnVzZXJJc0RyYWdnaW5nID0gZGVsdGFYID4gbW92ZVRocmVzaG9sZCB8fCBkZWx0YVkgPiBtb3ZlVGhyZXNob2xkO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMudXNlcklzRHJhZ2dpbmcpIHJldHVybjsgLy8gY2xvc2UgdGhlIG1lbnUgaWYgdGhlIHVzZXIgdGFwcyBvdXRzaWRlXG4gICAgICAvLyB3ZSdyZSBjaGVja2luZyBvbiBldmVudC50YXJnZXQgaGVyZSBpbnN0ZWFkIG9mIGV2ZW50LmN1cnJlbnRUYXJnZXQsIGJlY2F1c2Ugd2Ugd2FudCB0byBhc3NlcnQgaW5mb3JtYXRpb25cbiAgICAgIC8vIG9uIGV2ZW50cyBvbiBjaGlsZCBlbGVtZW50cywgbm90IHRoZSBkb2N1bWVudCAod2hpY2ggd2UndmUgYXR0YWNoZWQgdGhpcyBoYW5kbGVyIHRvKS5cblxuICAgICAgaWYgKF90aGlzLmNvbnRyb2xSZWYgJiYgIV90aGlzLmNvbnRyb2xSZWYuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiBfdGhpcy5tZW51TGlzdFJlZiAmJiAhX3RoaXMubWVudUxpc3RSZWYuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBfdGhpcy5ibHVySW5wdXQoKTtcbiAgICAgIH0gLy8gcmVzZXQgbW92ZSB2YXJzXG5cblxuICAgICAgX3RoaXMuaW5pdGlhbFRvdWNoWCA9IDA7XG4gICAgICBfdGhpcy5pbml0aWFsVG91Y2hZID0gMDtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Db250cm9sVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5vbkNvbnRyb2xNb3VzZURvd24oZXZlbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNsZWFySW5kaWNhdG9yVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5vbkNsZWFySW5kaWNhdG9yTW91c2VEb3duKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Ecm9wZG93bkluZGljYXRvclRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMudXNlcklzRHJhZ2dpbmcpIHJldHVybjtcblxuICAgICAgX3RoaXMub25Ecm9wZG93bkluZGljYXRvck1vdXNlRG93bihldmVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgcHJldklucHV0VmFsdWUgPSBfdGhpcy5wcm9wcy5pbnB1dFZhbHVlO1xuICAgICAgdmFyIGlucHV0VmFsdWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5vbklucHV0Q2hhbmdlKGlucHV0VmFsdWUsIHtcbiAgICAgICAgYWN0aW9uOiAnaW5wdXQtY2hhbmdlJyxcbiAgICAgICAgcHJldklucHV0VmFsdWU6IHByZXZJbnB1dFZhbHVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5tZW51SXNPcGVuKSB7XG4gICAgICAgIF90aGlzLm9uTWVudU9wZW4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25JbnB1dEZvY3VzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6IGZhbHNlLFxuICAgICAgICBpc0ZvY3VzZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMub3BlbkFmdGVyRm9jdXMgfHwgX3RoaXMucHJvcHMub3Blbk1lbnVPbkZvY3VzKSB7XG4gICAgICAgIF90aGlzLm9wZW5NZW51KCdmaXJzdCcpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5vcGVuQWZ0ZXJGb2N1cyA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbklucHV0Qmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIHByZXZJbnB1dFZhbHVlID0gX3RoaXMucHJvcHMuaW5wdXRWYWx1ZTtcblxuICAgICAgaWYgKF90aGlzLm1lbnVMaXN0UmVmICYmIF90aGlzLm1lbnVMaXN0UmVmLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIF90aGlzLmlucHV0UmVmLmZvY3VzKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UoJycsIHtcbiAgICAgICAgYWN0aW9uOiAnaW5wdXQtYmx1cicsXG4gICAgICAgIHByZXZJbnB1dFZhbHVlOiBwcmV2SW5wdXRWYWx1ZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZFZhbHVlOiBudWxsLFxuICAgICAgICBpc0ZvY3VzZWQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25PcHRpb25Ib3ZlciA9IGZ1bmN0aW9uIChmb2N1c2VkT3B0aW9uKSB7XG4gICAgICBpZiAoX3RoaXMuYmxvY2tPcHRpb25Ib3ZlciB8fCBfdGhpcy5zdGF0ZS5mb2N1c2VkT3B0aW9uID09PSBmb2N1c2VkT3B0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkT3B0aW9uOiBmb2N1c2VkT3B0aW9uXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2hvdWxkSGlkZVNlbGVjdGVkT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzaG91bGRIaWRlU2VsZWN0ZWRPcHRpb25zKF90aGlzLnByb3BzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzNS5pc011bHRpLFxuICAgICAgICAgIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZSA9IF90aGlzJHByb3BzNS5iYWNrc3BhY2VSZW1vdmVzVmFsdWUsXG4gICAgICAgICAgZXNjYXBlQ2xlYXJzVmFsdWUgPSBfdGhpcyRwcm9wczUuZXNjYXBlQ2xlYXJzVmFsdWUsXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzNS5pbnB1dFZhbHVlLFxuICAgICAgICAgIGlzQ2xlYXJhYmxlID0gX3RoaXMkcHJvcHM1LmlzQ2xlYXJhYmxlLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczUuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHM1Lm1lbnVJc09wZW4sXG4gICAgICAgICAgb25LZXlEb3duID0gX3RoaXMkcHJvcHM1Lm9uS2V5RG93bixcbiAgICAgICAgICB0YWJTZWxlY3RzVmFsdWUgPSBfdGhpcyRwcm9wczUudGFiU2VsZWN0c1ZhbHVlLFxuICAgICAgICAgIG9wZW5NZW51T25Gb2N1cyA9IF90aGlzJHByb3BzNS5vcGVuTWVudU9uRm9jdXM7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBmb2N1c2VkT3B0aW9uID0gX3RoaXMkc3RhdGUuZm9jdXNlZE9wdGlvbixcbiAgICAgICAgICBmb2N1c2VkVmFsdWUgPSBfdGhpcyRzdGF0ZS5mb2N1c2VkVmFsdWUsXG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBfdGhpcyRzdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICAgIGlmIChpc0Rpc2FibGVkKSByZXR1cm47XG5cbiAgICAgIGlmICh0eXBlb2Ygb25LZXlEb3duID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9uS2V5RG93bihldmVudCk7XG5cbiAgICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gLy8gQmxvY2sgb3B0aW9uIGhvdmVyIGV2ZW50cyB3aGVuIHRoZSB1c2VyIGhhcyBqdXN0IHByZXNzZWQgYSBrZXlcblxuXG4gICAgICBfdGhpcy5ibG9ja09wdGlvbkhvdmVyID0gdHJ1ZTtcblxuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICBpZiAoIWlzTXVsdGkgfHwgaW5wdXRWYWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgX3RoaXMuZm9jdXNWYWx1ZSgncHJldmlvdXMnKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgIGlmICghaXNNdWx0aSB8fCBpbnB1dFZhbHVlKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c1ZhbHVlKCduZXh0Jyk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdEZWxldGUnOlxuICAgICAgICBjYXNlICdCYWNrc3BhY2UnOlxuICAgICAgICAgIGlmIChpbnB1dFZhbHVlKSByZXR1cm47XG5cbiAgICAgICAgICBpZiAoZm9jdXNlZFZhbHVlKSB7XG4gICAgICAgICAgICBfdGhpcy5yZW1vdmVWYWx1ZShmb2N1c2VkVmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWJhY2tzcGFjZVJlbW92ZXNWYWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAoaXNNdWx0aSkge1xuICAgICAgICAgICAgICBfdGhpcy5wb3BWYWx1ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0NsZWFyYWJsZSkge1xuICAgICAgICAgICAgICBfdGhpcy5jbGVhclZhbHVlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnVGFiJzpcbiAgICAgICAgICBpZiAoX3RoaXMuaXNDb21wb3NpbmcpIHJldHVybjtcblxuICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSB8fCAhbWVudUlzT3BlbiB8fCAhdGFiU2VsZWN0c1ZhbHVlIHx8ICFmb2N1c2VkT3B0aW9uIHx8IC8vIGRvbid0IGNhcHR1cmUgdGhlIGV2ZW50IGlmIHRoZSBtZW51IG9wZW5zIG9uIGZvY3VzIGFuZCB0aGUgZm9jdXNlZFxuICAgICAgICAgIC8vIG9wdGlvbiBpcyBhbHJlYWR5IHNlbGVjdGVkOyBpdCBicmVha3MgdGhlIGZsb3cgb2YgbmF2aWdhdGlvblxuICAgICAgICAgIG9wZW5NZW51T25Gb2N1cyAmJiBfdGhpcy5pc09wdGlvblNlbGVjdGVkKGZvY3VzZWRPcHRpb24sIHNlbGVjdFZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLnNlbGVjdE9wdGlvbihmb2N1c2VkT3B0aW9uKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjI5KSB7XG4gICAgICAgICAgICAvLyBpZ25vcmUgdGhlIGtleWRvd24gZXZlbnQgZnJvbSBhbiBJbnB1dCBNZXRob2QgRWRpdG9yKElNRSlcbiAgICAgICAgICAgIC8vIHJlZi4gaHR0cHM6Ly93d3cudzMub3JnL1RSL3VpZXZlbnRzLyNkZXRlcm1pbmUta2V5ZG93bi1rZXl1cC1rZXlDb2RlXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgaWYgKCFmb2N1c2VkT3B0aW9uKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNDb21wb3NpbmcpIHJldHVybjtcblxuICAgICAgICAgICAgX3RoaXMuc2VsZWN0T3B0aW9uKGZvY3VzZWRPcHRpb24pO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgX3RoaXMub25JbnB1dENoYW5nZSgnJywge1xuICAgICAgICAgICAgICBhY3Rpb246ICdtZW51LWNsb3NlJyxcbiAgICAgICAgICAgICAgcHJldklucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfdGhpcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDbGVhcmFibGUgJiYgZXNjYXBlQ2xlYXJzVmFsdWUpIHtcbiAgICAgICAgICAgIF90aGlzLmNsZWFyVmFsdWUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAvLyBzcGFjZVxuICAgICAgICAgIGlmIChpbnB1dFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSB7XG4gICAgICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFmb2N1c2VkT3B0aW9uKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5zZWxlY3RPcHRpb24oZm9jdXNlZE9wdGlvbik7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ3VwJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLm9wZW5NZW51KCdsYXN0Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ2Rvd24nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMub3Blbk1lbnUoJ2ZpcnN0Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnUGFnZVVwJzpcbiAgICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybjtcblxuICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCdwYWdldXAnKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1BhZ2VEb3duJzpcbiAgICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybjtcblxuICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCdwYWdlZG93bicpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbignZmlyc3QnKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbignbGFzdCcpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIF90aGlzLmluc3RhbmNlUHJlZml4ID0gJ3JlYWN0LXNlbGVjdC0nICsgKF90aGlzLnByb3BzLmluc3RhbmNlSWQgfHwgKytpbnN0YW5jZUlkKTtcbiAgICBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZSA9IGNsZWFuVmFsdWUoX3Byb3BzLnZhbHVlKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2VsZWN0LCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmdDb21wb3NpdGlvbigpO1xuICAgICAgdGhpcy5zdGFydExpc3RlbmluZ1RvVG91Y2goKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuY2xvc2VNZW51T25TY3JvbGwgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAvLyBMaXN0ZW4gdG8gYWxsIHNjcm9sbCBldmVudHMsIGFuZCBmaWx0ZXIgdGhlbSBvdXQgaW5zaWRlIG9mICdvblNjcm9sbCdcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczYuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHM2Lm1lbnVJc09wZW47XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG5cbiAgICAgIGlmICggLy8gZW5zdXJlIGZvY3VzIGlzIHJlc3RvcmVkIGNvcnJlY3RseSB3aGVuIHRoZSBjb250cm9sIGJlY29tZXMgZW5hYmxlZFxuICAgICAgaXNGb2N1c2VkICYmICFpc0Rpc2FibGVkICYmIHByZXZQcm9wcy5pc0Rpc2FibGVkIHx8IC8vIGVuc3VyZSBmb2N1cyBpcyBvbiB0aGUgSW5wdXQgd2hlbiB0aGUgbWVudSBvcGVuc1xuICAgICAgaXNGb2N1c2VkICYmIG1lbnVJc09wZW4gJiYgIXByZXZQcm9wcy5tZW51SXNPcGVuKSB7XG4gICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGb2N1c2VkICYmIGlzRGlzYWJsZWQgJiYgIXByZXZQcm9wcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzZWxlY3Qgc3RhdGUgZ2V0cyBibHVycmVkIGluIGNhc2UgU2VsZWN0IGlzIHByb2dyYW1hdGljYWxseSBkaXNhYmxlZCB3aGlsZSBmb2N1c2VkXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc0ZvY3VzZWQ6IGZhbHNlXG4gICAgICAgIH0sIHRoaXMub25NZW51Q2xvc2UpO1xuICAgICAgfSAvLyBzY3JvbGwgdGhlIGZvY3VzZWQgb3B0aW9uIGludG8gdmlldyBpZiBuZWNlc3NhcnlcblxuXG4gICAgICBpZiAodGhpcy5tZW51TGlzdFJlZiAmJiB0aGlzLmZvY3VzZWRPcHRpb25SZWYgJiYgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSkge1xuICAgICAgICBzY3JvbGxJbnRvVmlldyh0aGlzLm1lbnVMaXN0UmVmLCB0aGlzLmZvY3VzZWRPcHRpb25SZWYpO1xuICAgICAgICB0aGlzLnNjcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nQ29tcG9zaXRpb24oKTtcbiAgICAgIHRoaXMuc3RvcExpc3RlbmluZ1RvVG91Y2goKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xuICAgIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gQ29uc3VtZXIgSGFuZGxlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB9LCB7XG4gICAga2V5OiBcIm9uTWVudU9wZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25NZW51T3BlbigpIHtcbiAgICAgIHRoaXMucHJvcHMub25NZW51T3BlbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbk1lbnVDbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1lbnVDbG9zZSgpIHtcbiAgICAgIHRoaXMub25JbnB1dENoYW5nZSgnJywge1xuICAgICAgICBhY3Rpb246ICdtZW51LWNsb3NlJyxcbiAgICAgICAgcHJldklucHV0VmFsdWU6IHRoaXMucHJvcHMuaW5wdXRWYWx1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BzLm9uTWVudUNsb3NlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uSW5wdXRDaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25JbnB1dENoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKG5ld1ZhbHVlLCBhY3Rpb25NZXRhKTtcbiAgICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIE1ldGhvZHNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB9LCB7XG4gICAga2V5OiBcImZvY3VzSW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXNJbnB1dCgpIHtcbiAgICAgIGlmICghdGhpcy5pbnB1dFJlZikgcmV0dXJuO1xuICAgICAgdGhpcy5pbnB1dFJlZi5mb2N1cygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJibHVySW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cklucHV0KCkge1xuICAgICAgaWYgKCF0aGlzLmlucHV0UmVmKSByZXR1cm47XG4gICAgICB0aGlzLmlucHV0UmVmLmJsdXIoKTtcbiAgICB9IC8vIGFsaWFzZWQgZm9yIGNvbnN1bWVyc1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib3Blbk1lbnVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3Blbk1lbnUoZm9jdXNPcHRpb24pIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkc3RhdGUyID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlMi5zZWxlY3RWYWx1ZSxcbiAgICAgICAgICBpc0ZvY3VzZWQgPSBfdGhpcyRzdGF0ZTIuaXNGb2N1c2VkO1xuICAgICAgdmFyIGZvY3VzYWJsZU9wdGlvbnMgPSB0aGlzLmJ1aWxkRm9jdXNhYmxlT3B0aW9ucygpO1xuICAgICAgdmFyIG9wZW5BdEluZGV4ID0gZm9jdXNPcHRpb24gPT09ICdmaXJzdCcgPyAwIDogZm9jdXNhYmxlT3B0aW9ucy5sZW5ndGggLSAxO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuaXNNdWx0aSkge1xuICAgICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IGZvY3VzYWJsZU9wdGlvbnMuaW5kZXhPZihzZWxlY3RWYWx1ZVswXSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPiAtMSkge1xuICAgICAgICAgIG9wZW5BdEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSAvLyBvbmx5IHNjcm9sbCBpZiB0aGUgbWVudSBpc24ndCBhbHJlYWR5IG9wZW5cblxuXG4gICAgICB0aGlzLnNjcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlID0gIShpc0ZvY3VzZWQgJiYgdGhpcy5tZW51TGlzdFJlZik7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlOiBmYWxzZSxcbiAgICAgICAgZm9jdXNlZFZhbHVlOiBudWxsLFxuICAgICAgICBmb2N1c2VkT3B0aW9uOiBmb2N1c2FibGVPcHRpb25zW29wZW5BdEluZGV4XVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLm9uTWVudU9wZW4oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb2N1c1ZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzVmFsdWUoZGlyZWN0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUzID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlMy5zZWxlY3RWYWx1ZSxcbiAgICAgICAgICBmb2N1c2VkVmFsdWUgPSBfdGhpcyRzdGF0ZTMuZm9jdXNlZFZhbHVlOyAvLyBPbmx5IG11bHRpc2VsZWN0cyBzdXBwb3J0IHZhbHVlIGZvY3VzaW5nXG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5pc011bHRpKSByZXR1cm47XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZE9wdGlvbjogbnVsbFxuICAgICAgfSk7XG4gICAgICB2YXIgZm9jdXNlZEluZGV4ID0gc2VsZWN0VmFsdWUuaW5kZXhPZihmb2N1c2VkVmFsdWUpO1xuXG4gICAgICBpZiAoIWZvY3VzZWRWYWx1ZSkge1xuICAgICAgICBmb2N1c2VkSW5kZXggPSAtMTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxhc3RJbmRleCA9IHNlbGVjdFZhbHVlLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgbmV4dEZvY3VzID0gLTE7XG4gICAgICBpZiAoIXNlbGVjdFZhbHVlLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlICdwcmV2aW91cyc6XG4gICAgICAgICAgaWYgKGZvY3VzZWRJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gZG9uJ3QgY3ljbGUgZnJvbSB0aGUgc3RhcnQgdG8gdGhlIGVuZFxuICAgICAgICAgICAgbmV4dEZvY3VzID0gMDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGZvY3VzZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIGlmIG5vdGhpbmcgaXMgZm9jdXNlZCwgZm9jdXMgdGhlIGxhc3QgdmFsdWUgZmlyc3RcbiAgICAgICAgICAgIG5leHRGb2N1cyA9IGxhc3RJbmRleDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4IC0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgICBpZiAoZm9jdXNlZEluZGV4ID4gLTEgJiYgZm9jdXNlZEluZGV4IDwgbGFzdEluZGV4KSB7XG4gICAgICAgICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggKyAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaW5wdXRJc0hpZGRlbjogbmV4dEZvY3VzICE9PSAtMSxcbiAgICAgICAgZm9jdXNlZFZhbHVlOiBzZWxlY3RWYWx1ZVtuZXh0Rm9jdXNdXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9jdXNPcHRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXNPcHRpb24oKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnZmlyc3QnO1xuICAgICAgdmFyIHBhZ2VTaXplID0gdGhpcy5wcm9wcy5wYWdlU2l6ZTtcbiAgICAgIHZhciBmb2N1c2VkT3B0aW9uID0gdGhpcy5zdGF0ZS5mb2N1c2VkT3B0aW9uO1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmdldEZvY3VzYWJsZU9wdGlvbnMoKTtcbiAgICAgIGlmICghb3B0aW9ucy5sZW5ndGgpIHJldHVybjtcbiAgICAgIHZhciBuZXh0Rm9jdXMgPSAwOyAvLyBoYW5kbGVzICdmaXJzdCdcblxuICAgICAgdmFyIGZvY3VzZWRJbmRleCA9IG9wdGlvbnMuaW5kZXhPZihmb2N1c2VkT3B0aW9uKTtcblxuICAgICAgaWYgKCFmb2N1c2VkT3B0aW9uKSB7XG4gICAgICAgIGZvY3VzZWRJbmRleCA9IC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCA+IDAgPyBmb2N1c2VkSW5kZXggLSAxIDogb3B0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgICBuZXh0Rm9jdXMgPSAoZm9jdXNlZEluZGV4ICsgMSkgJSBvcHRpb25zLmxlbmd0aDtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncGFnZXVwJykge1xuICAgICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggLSBwYWdlU2l6ZTtcbiAgICAgICAgaWYgKG5leHRGb2N1cyA8IDApIG5leHRGb2N1cyA9IDA7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3BhZ2Vkb3duJykge1xuICAgICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggKyBwYWdlU2l6ZTtcbiAgICAgICAgaWYgKG5leHRGb2N1cyA+IG9wdGlvbnMubGVuZ3RoIC0gMSkgbmV4dEZvY3VzID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsYXN0Jykge1xuICAgICAgICBuZXh0Rm9jdXMgPSBvcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSB0cnVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRPcHRpb246IG9wdGlvbnNbbmV4dEZvY3VzXSxcbiAgICAgICAgZm9jdXNlZFZhbHVlOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VGhlbWVcIixcbiAgICB2YWx1ZTogLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gR2V0dGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGZ1bmN0aW9uIGdldFRoZW1lKCkge1xuICAgICAgLy8gVXNlIHRoZSBkZWZhdWx0IHRoZW1lIGlmIHRoZXJlIGFyZSBubyBjdXN0b21pemF0aW9ucy5cbiAgICAgIGlmICghdGhpcy5wcm9wcy50aGVtZSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFRoZW1lO1xuICAgICAgfSAvLyBJZiB0aGUgdGhlbWUgcHJvcCBpcyBhIGZ1bmN0aW9uLCBhc3N1bWUgdGhlIGZ1bmN0aW9uXG4gICAgICAvLyBrbm93cyBob3cgdG8gbWVyZ2UgdGhlIHBhc3NlZC1pbiBkZWZhdWx0IHRoZW1lIHdpdGhcbiAgICAgIC8vIGl0cyBvd24gbW9kaWZpY2F0aW9ucy5cblxuXG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudGhlbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudGhlbWUoZGVmYXVsdFRoZW1lKTtcbiAgICAgIH0gLy8gT3RoZXJ3aXNlLCBpZiBhIHBsYWluIHRoZW1lIG9iamVjdCB3YXMgcGFzc2VkIGluLFxuICAgICAgLy8gb3ZlcmxheSBpdCB3aXRoIHRoZSBkZWZhdWx0IHRoZW1lLlxuXG5cbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgZGVmYXVsdFRoZW1lKSwgdGhpcy5wcm9wcy50aGVtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldENvbW1vblByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbW1vblByb3BzKCkge1xuICAgICAgdmFyIGNsZWFyVmFsdWUgPSB0aGlzLmNsZWFyVmFsdWUsXG4gICAgICAgICAgY3ggPSB0aGlzLmN4LFxuICAgICAgICAgIGdldFN0eWxlcyA9IHRoaXMuZ2V0U3R5bGVzLFxuICAgICAgICAgIGdldFZhbHVlID0gdGhpcy5nZXRWYWx1ZSxcbiAgICAgICAgICBzZWxlY3RPcHRpb24gPSB0aGlzLnNlbGVjdE9wdGlvbixcbiAgICAgICAgICBzZXRWYWx1ZSA9IHRoaXMuc2V0VmFsdWUsXG4gICAgICAgICAgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGlzTXVsdGkgPSBwcm9wcy5pc011bHRpLFxuICAgICAgICAgIGlzUnRsID0gcHJvcHMuaXNSdGwsXG4gICAgICAgICAgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnM7XG4gICAgICB2YXIgaGFzVmFsdWUgPSB0aGlzLmhhc1ZhbHVlKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbGVhclZhbHVlOiBjbGVhclZhbHVlLFxuICAgICAgICBjeDogY3gsXG4gICAgICAgIGdldFN0eWxlczogZ2V0U3R5bGVzLFxuICAgICAgICBnZXRWYWx1ZTogZ2V0VmFsdWUsXG4gICAgICAgIGhhc1ZhbHVlOiBoYXNWYWx1ZSxcbiAgICAgICAgaXNNdWx0aTogaXNNdWx0aSxcbiAgICAgICAgaXNSdGw6IGlzUnRsLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICBzZWxlY3RPcHRpb246IHNlbGVjdE9wdGlvbixcbiAgICAgICAgc2VsZWN0UHJvcHM6IHByb3BzLFxuICAgICAgICBzZXRWYWx1ZTogc2V0VmFsdWUsXG4gICAgICAgIHRoZW1lOiB0aGlzLmdldFRoZW1lKClcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhc1ZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc1ZhbHVlKCkge1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICAgIHJldHVybiBzZWxlY3RWYWx1ZS5sZW5ndGggPiAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYXNPcHRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc09wdGlvbnMoKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmdldEZvY3VzYWJsZU9wdGlvbnMoKS5sZW5ndGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ2xlYXJhYmxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQ2xlYXJhYmxlKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaXNDbGVhcmFibGUgPSBfdGhpcyRwcm9wczcuaXNDbGVhcmFibGUsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzNy5pc011bHRpOyAvLyBzaW5nbGUgc2VsZWN0LCBieSBkZWZhdWx0LCBJUyBOT1QgY2xlYXJhYmxlXG4gICAgICAvLyBtdWx0aSBzZWxlY3QsIGJ5IGRlZmF1bHQsIElTIGNsZWFyYWJsZVxuXG4gICAgICBpZiAoaXNDbGVhcmFibGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGlzTXVsdGk7XG4gICAgICByZXR1cm4gaXNDbGVhcmFibGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzT3B0aW9uRGlzYWJsZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNPcHRpb25EaXNhYmxlZChvcHRpb24sIHNlbGVjdFZhbHVlKSB7XG4gICAgICByZXR1cm4gX2lzT3B0aW9uRGlzYWJsZWQodGhpcy5wcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzT3B0aW9uU2VsZWN0ZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNPcHRpb25TZWxlY3RlZChvcHRpb24sIHNlbGVjdFZhbHVlKSB7XG4gICAgICByZXR1cm4gX2lzT3B0aW9uU2VsZWN0ZWQodGhpcy5wcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpbHRlck9wdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaWx0ZXJPcHRpb24ob3B0aW9uLCBpbnB1dFZhbHVlKSB7XG4gICAgICByZXR1cm4gX2ZpbHRlck9wdGlvbih0aGlzLnByb3BzLCBvcHRpb24sIGlucHV0VmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JtYXRPcHRpb25MYWJlbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXRPcHRpb25MYWJlbChkYXRhLCBjb250ZXh0KSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuZm9ybWF0T3B0aW9uTGFiZWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIF9pbnB1dFZhbHVlID0gdGhpcy5wcm9wcy5pbnB1dFZhbHVlO1xuICAgICAgICB2YXIgX3NlbGVjdFZhbHVlID0gdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZm9ybWF0T3B0aW9uTGFiZWwoZGF0YSwge1xuICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgaW5wdXRWYWx1ZTogX2lucHV0VmFsdWUsXG4gICAgICAgICAgc2VsZWN0VmFsdWU6IF9zZWxlY3RWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9wdGlvbkxhYmVsKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JtYXRHcm91cExhYmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdEdyb3VwTGFiZWwoZGF0YSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZm9ybWF0R3JvdXBMYWJlbChkYXRhKTtcbiAgICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIE1vdXNlIEhhbmRsZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgfSwge1xuICAgIGtleTogXCJzdGFydExpc3RlbmluZ0NvbXBvc2l0aW9uXCIsXG4gICAgdmFsdWU6IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIENvbXBvc2l0aW9uIEhhbmRsZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmdDb21wb3NpdGlvbigpIHtcbiAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uc3RhcnQnLCB0aGlzLm9uQ29tcG9zaXRpb25TdGFydCwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbmVuZCcsIHRoaXMub25Db21wb3NpdGlvbkVuZCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdG9wTGlzdGVuaW5nQ29tcG9zaXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZ0NvbXBvc2l0aW9uKCkge1xuICAgICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25zdGFydCcsIHRoaXMub25Db21wb3NpdGlvblN0YXJ0KTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCB0aGlzLm9uQ29tcG9zaXRpb25FbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGFydExpc3RlbmluZ1RvVG91Y2hcIixcbiAgICB2YWx1ZTogLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gVG91Y2ggSGFuZGxlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBmdW5jdGlvbiBzdGFydExpc3RlbmluZ1RvVG91Y2goKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdG9wTGlzdGVuaW5nVG9Ub3VjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nVG9Ub3VjaCgpIHtcbiAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlcklucHV0XCIsXG4gICAgdmFsdWU6IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIFJlbmRlcmVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGZ1bmN0aW9uIHJlbmRlcklucHV0KCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzOCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzOC5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlzU2VhcmNoYWJsZSA9IF90aGlzJHByb3BzOC5pc1NlYXJjaGFibGUsXG4gICAgICAgICAgaW5wdXRJZCA9IF90aGlzJHByb3BzOC5pbnB1dElkLFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wczguaW5wdXRWYWx1ZSxcbiAgICAgICAgICB0YWJJbmRleCA9IF90aGlzJHByb3BzOC50YWJJbmRleCxcbiAgICAgICAgICBmb3JtID0gX3RoaXMkcHJvcHM4LmZvcm0sXG4gICAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzOC5tZW51SXNPcGVuO1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50cyA9IHRoaXMuZ2V0Q29tcG9uZW50cygpLFxuICAgICAgICAgIElucHV0ID0gX3RoaXMkZ2V0Q29tcG9uZW50cy5JbnB1dDtcblxuICAgICAgdmFyIF90aGlzJHN0YXRlNCA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgaW5wdXRJc0hpZGRlbiA9IF90aGlzJHN0YXRlNC5pbnB1dElzSGlkZGVuLFxuICAgICAgICAgIGFyaWFTZWxlY3Rpb24gPSBfdGhpcyRzdGF0ZTQuYXJpYVNlbGVjdGlvbjtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgaWQgPSBpbnB1dElkIHx8IHRoaXMuZ2V0RWxlbWVudElkKCdpbnB1dCcpOyAvLyBhcmlhIGF0dHJpYnV0ZXMgbWFrZXMgdGhlIEpTWCBcIm5vaXN5XCIsIHNlcGFyYXRlZCBmb3IgY2xhcml0eVxuXG4gICAgICB2YXIgYXJpYUF0dHJpYnV0ZXMgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgICdhcmlhLWF1dG9jb21wbGV0ZSc6ICdsaXN0JyxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBtZW51SXNPcGVuLFxuICAgICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWUsXG4gICAgICAgICdhcmlhLWVycm9ybWVzc2FnZSc6IHRoaXMucHJvcHNbJ2FyaWEtZXJyb3JtZXNzYWdlJ10sXG4gICAgICAgICdhcmlhLWludmFsaWQnOiB0aGlzLnByb3BzWydhcmlhLWludmFsaWQnXSxcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsJ10sXG4gICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsbGVkYnknXSxcbiAgICAgICAgcm9sZTogJ2NvbWJvYm94J1xuICAgICAgfSwgbWVudUlzT3BlbiAmJiB7XG4gICAgICAgICdhcmlhLWNvbnRyb2xzJzogdGhpcy5nZXRFbGVtZW50SWQoJ2xpc3Rib3gnKSxcbiAgICAgICAgJ2FyaWEtb3ducyc6IHRoaXMuZ2V0RWxlbWVudElkKCdsaXN0Ym94JylcbiAgICAgIH0pLCAhaXNTZWFyY2hhYmxlICYmIHtcbiAgICAgICAgJ2FyaWEtcmVhZG9ubHknOiB0cnVlXG4gICAgICB9KSwgdGhpcy5oYXNWYWx1ZSgpID8gKGFyaWFTZWxlY3Rpb24gPT09IG51bGwgfHwgYXJpYVNlbGVjdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJpYVNlbGVjdGlvbi5hY3Rpb24pID09PSAnaW5pdGlhbC1pbnB1dC1mb2N1cycgJiYge1xuICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6IHRoaXMuZ2V0RWxlbWVudElkKCdsaXZlLXJlZ2lvbicpXG4gICAgICB9IDoge1xuICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6IHRoaXMuZ2V0RWxlbWVudElkKCdwbGFjZWhvbGRlcicpXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFpc1NlYXJjaGFibGUpIHtcbiAgICAgICAgLy8gdXNlIGEgZHVtbXkgaW5wdXQgdG8gbWFpbnRhaW4gZm9jdXMvYmx1ciBmdW5jdGlvbmFsaXR5XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEdW1teUlucHV0LCBfZXh0ZW5kcyh7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGlubmVyUmVmOiB0aGlzLmdldElucHV0UmVmLFxuICAgICAgICAgIG9uQmx1cjogdGhpcy5vbklucHV0Qmx1cixcbiAgICAgICAgICBvbkNoYW5nZTogbm9vcCxcbiAgICAgICAgICBvbkZvY3VzOiB0aGlzLm9uSW5wdXRGb2N1cyxcbiAgICAgICAgICBkaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgICAgICAgaW5wdXRNb2RlOiBcIm5vbmVcIixcbiAgICAgICAgICBmb3JtOiBmb3JtLFxuICAgICAgICAgIHZhbHVlOiBcIlwiXG4gICAgICAgIH0sIGFyaWFBdHRyaWJ1dGVzKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGF1dG9DYXBpdGFsaXplOiBcIm5vbmVcIixcbiAgICAgICAgYXV0b0NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICBhdXRvQ29ycmVjdDogXCJvZmZcIixcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBpbm5lclJlZjogdGhpcy5nZXRJbnB1dFJlZixcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgaXNIaWRkZW46IGlucHV0SXNIaWRkZW4sXG4gICAgICAgIG9uQmx1cjogdGhpcy5vbklucHV0Qmx1cixcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UsXG4gICAgICAgIG9uRm9jdXM6IHRoaXMub25JbnB1dEZvY3VzLFxuICAgICAgICBzcGVsbENoZWNrOiBcImZhbHNlXCIsXG4gICAgICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICAgICAgZm9ybTogZm9ybSxcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHZhbHVlOiBpbnB1dFZhbHVlXG4gICAgICB9LCBhcmlhQXR0cmlidXRlcykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJQbGFjZWhvbGRlck9yVmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUGxhY2Vob2xkZXJPclZhbHVlKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRnZXRDb21wb25lbnRzMiA9IHRoaXMuZ2V0Q29tcG9uZW50cygpLFxuICAgICAgICAgIE11bHRpVmFsdWUgPSBfdGhpcyRnZXRDb21wb25lbnRzMi5NdWx0aVZhbHVlLFxuICAgICAgICAgIE11bHRpVmFsdWVDb250YWluZXIgPSBfdGhpcyRnZXRDb21wb25lbnRzMi5NdWx0aVZhbHVlQ29udGFpbmVyLFxuICAgICAgICAgIE11bHRpVmFsdWVMYWJlbCA9IF90aGlzJGdldENvbXBvbmVudHMyLk11bHRpVmFsdWVMYWJlbCxcbiAgICAgICAgICBNdWx0aVZhbHVlUmVtb3ZlID0gX3RoaXMkZ2V0Q29tcG9uZW50czIuTXVsdGlWYWx1ZVJlbW92ZSxcbiAgICAgICAgICBTaW5nbGVWYWx1ZSA9IF90aGlzJGdldENvbXBvbmVudHMyLlNpbmdsZVZhbHVlLFxuICAgICAgICAgIFBsYWNlaG9sZGVyID0gX3RoaXMkZ2V0Q29tcG9uZW50czIuUGxhY2Vob2xkZXI7XG5cbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM5ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUgPSBfdGhpcyRwcm9wczkuY29udHJvbFNob3VsZFJlbmRlclZhbHVlLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczkuaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHM5LmlzTXVsdGksXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzOS5pbnB1dFZhbHVlLFxuICAgICAgICAgIHBsYWNlaG9sZGVyID0gX3RoaXMkcHJvcHM5LnBsYWNlaG9sZGVyO1xuICAgICAgdmFyIF90aGlzJHN0YXRlNSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBfdGhpcyRzdGF0ZTUuc2VsZWN0VmFsdWUsXG4gICAgICAgICAgZm9jdXNlZFZhbHVlID0gX3RoaXMkc3RhdGU1LmZvY3VzZWRWYWx1ZSxcbiAgICAgICAgICBpc0ZvY3VzZWQgPSBfdGhpcyRzdGF0ZTUuaXNGb2N1c2VkO1xuXG4gICAgICBpZiAoIXRoaXMuaGFzVmFsdWUoKSB8fCAhY29udHJvbFNob3VsZFJlbmRlclZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlID8gbnVsbCA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBsYWNlaG9sZGVyLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgICBrZXk6IFwicGxhY2Vob2xkZXJcIixcbiAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkLFxuICAgICAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmdldEVsZW1lbnRJZCgncGxhY2Vob2xkZXInKVxuICAgICAgICAgIH1cbiAgICAgICAgfSksIHBsYWNlaG9sZGVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdFZhbHVlLm1hcChmdW5jdGlvbiAob3B0LCBpbmRleCkge1xuICAgICAgICAgIHZhciBpc09wdGlvbkZvY3VzZWQgPSBvcHQgPT09IGZvY3VzZWRWYWx1ZTtcbiAgICAgICAgICB2YXIga2V5ID0gXCJcIi5jb25jYXQoX3RoaXMzLmdldE9wdGlvbkxhYmVsKG9wdCksIFwiLVwiKS5jb25jYXQoX3RoaXMzLmdldE9wdGlvblZhbHVlKG9wdCkpO1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNdWx0aVZhbHVlLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgQ29udGFpbmVyOiBNdWx0aVZhbHVlQ29udGFpbmVyLFxuICAgICAgICAgICAgICBMYWJlbDogTXVsdGlWYWx1ZUxhYmVsLFxuICAgICAgICAgICAgICBSZW1vdmU6IE11bHRpVmFsdWVSZW1vdmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0ZvY3VzZWQ6IGlzT3B0aW9uRm9jdXNlZCxcbiAgICAgICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIHJlbW92ZVByb3BzOiB7XG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5yZW1vdmVWYWx1ZShvcHQpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvblRvdWNoRW5kOiBmdW5jdGlvbiBvblRvdWNoRW5kKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMucmVtb3ZlVmFsdWUob3B0KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiBvcHRcbiAgICAgICAgICB9KSwgX3RoaXMzLmZvcm1hdE9wdGlvbkxhYmVsKG9wdCwgJ3ZhbHVlJykpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlucHV0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaW5nbGVWYWx1ZSA9IHNlbGVjdFZhbHVlWzBdO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNpbmdsZVZhbHVlLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgZGF0YTogc2luZ2xlVmFsdWUsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgICAgIH0pLCB0aGlzLmZvcm1hdE9wdGlvbkxhYmVsKHNpbmdsZVZhbHVlLCAndmFsdWUnKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckNsZWFySW5kaWNhdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNsZWFySW5kaWNhdG9yKCkge1xuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHMzID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgICAgQ2xlYXJJbmRpY2F0b3IgPSBfdGhpcyRnZXRDb21wb25lbnRzMy5DbGVhckluZGljYXRvcjtcblxuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBfdGhpcyRwcm9wczEwID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHMxMC5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlzTG9hZGluZyA9IF90aGlzJHByb3BzMTAuaXNMb2FkaW5nO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuXG4gICAgICBpZiAoIXRoaXMuaXNDbGVhcmFibGUoKSB8fCAhQ2xlYXJJbmRpY2F0b3IgfHwgaXNEaXNhYmxlZCB8fCAhdGhpcy5oYXNWYWx1ZSgpIHx8IGlzTG9hZGluZykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGlubmVyUHJvcHMgPSB7XG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uQ2xlYXJJbmRpY2F0b3JNb3VzZURvd24sXG4gICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMub25DbGVhckluZGljYXRvclRvdWNoRW5kLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgIH07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2xlYXJJbmRpY2F0b3IsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpbm5lclByb3BzOiBpbm5lclByb3BzLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJMb2FkaW5nSW5kaWNhdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxvYWRpbmdJbmRpY2F0b3IoKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czQgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBMb2FkaW5nSW5kaWNhdG9yID0gX3RoaXMkZ2V0Q29tcG9uZW50czQuTG9hZGluZ0luZGljYXRvcjtcblxuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBfdGhpcyRwcm9wczExID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHMxMS5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlzTG9hZGluZyA9IF90aGlzJHByb3BzMTEuaXNMb2FkaW5nO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuICAgICAgaWYgKCFMb2FkaW5nSW5kaWNhdG9yIHx8ICFpc0xvYWRpbmcpIHJldHVybiBudWxsO1xuICAgICAgdmFyIGlubmVyUHJvcHMgPSB7XG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgfTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nSW5kaWNhdG9yLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaW5uZXJQcm9wczogaW5uZXJQcm9wcyxcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVySW5kaWNhdG9yU2VwYXJhdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckluZGljYXRvclNlcGFyYXRvcigpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDb21wb25lbnRzNSA9IHRoaXMuZ2V0Q29tcG9uZW50cygpLFxuICAgICAgICAgIERyb3Bkb3duSW5kaWNhdG9yID0gX3RoaXMkZ2V0Q29tcG9uZW50czUuRHJvcGRvd25JbmRpY2F0b3IsXG4gICAgICAgICAgSW5kaWNhdG9yU2VwYXJhdG9yID0gX3RoaXMkZ2V0Q29tcG9uZW50czUuSW5kaWNhdG9yU2VwYXJhdG9yOyAvLyBzZXBhcmF0b3IgZG9lc24ndCBtYWtlIHNlbnNlIHdpdGhvdXQgdGhlIGRyb3Bkb3duIGluZGljYXRvclxuXG5cbiAgICAgIGlmICghRHJvcGRvd25JbmRpY2F0b3IgfHwgIUluZGljYXRvclNlcGFyYXRvcikgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIGlzRGlzYWJsZWQgPSB0aGlzLnByb3BzLmlzRGlzYWJsZWQ7XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5kaWNhdG9yU2VwYXJhdG9yLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyRHJvcGRvd25JbmRpY2F0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRHJvcGRvd25JbmRpY2F0b3IoKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czYgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBEcm9wZG93bkluZGljYXRvciA9IF90aGlzJGdldENvbXBvbmVudHM2LkRyb3Bkb3duSW5kaWNhdG9yO1xuXG4gICAgICBpZiAoIURyb3Bkb3duSW5kaWNhdG9yKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgaXNEaXNhYmxlZCA9IHRoaXMucHJvcHMuaXNEaXNhYmxlZDtcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICAgIHZhciBpbm5lclByb3BzID0ge1xuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yTW91c2VEb3duLFxuICAgICAgICBvblRvdWNoRW5kOiB0aGlzLm9uRHJvcGRvd25JbmRpY2F0b3JUb3VjaEVuZCxcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICB9O1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bkb3duSW5kaWNhdG9yLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaW5uZXJQcm9wczogaW5uZXJQcm9wcyxcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyTWVudVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJNZW51KCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRnZXRDb21wb25lbnRzNyA9IHRoaXMuZ2V0Q29tcG9uZW50cygpLFxuICAgICAgICAgIEdyb3VwID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuR3JvdXAsXG4gICAgICAgICAgR3JvdXBIZWFkaW5nID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuR3JvdXBIZWFkaW5nLFxuICAgICAgICAgIE1lbnUgPSBfdGhpcyRnZXRDb21wb25lbnRzNy5NZW51LFxuICAgICAgICAgIE1lbnVMaXN0ID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuTWVudUxpc3QsXG4gICAgICAgICAgTWVudVBvcnRhbCA9IF90aGlzJGdldENvbXBvbmVudHM3Lk1lbnVQb3J0YWwsXG4gICAgICAgICAgTG9hZGluZ01lc3NhZ2UgPSBfdGhpcyRnZXRDb21wb25lbnRzNy5Mb2FkaW5nTWVzc2FnZSxcbiAgICAgICAgICBOb09wdGlvbnNNZXNzYWdlID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuTm9PcHRpb25zTWVzc2FnZSxcbiAgICAgICAgICBPcHRpb24gPSBfdGhpcyRnZXRDb21wb25lbnRzNy5PcHRpb247XG5cbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgZm9jdXNlZE9wdGlvbiA9IHRoaXMuc3RhdGUuZm9jdXNlZE9wdGlvbjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczEyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjYXB0dXJlTWVudVNjcm9sbCA9IF90aGlzJHByb3BzMTIuY2FwdHVyZU1lbnVTY3JvbGwsXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzMTIuaW5wdXRWYWx1ZSxcbiAgICAgICAgICBpc0xvYWRpbmcgPSBfdGhpcyRwcm9wczEyLmlzTG9hZGluZyxcbiAgICAgICAgICBsb2FkaW5nTWVzc2FnZSA9IF90aGlzJHByb3BzMTIubG9hZGluZ01lc3NhZ2UsXG4gICAgICAgICAgbWluTWVudUhlaWdodCA9IF90aGlzJHByb3BzMTIubWluTWVudUhlaWdodCxcbiAgICAgICAgICBtYXhNZW51SGVpZ2h0ID0gX3RoaXMkcHJvcHMxMi5tYXhNZW51SGVpZ2h0LFxuICAgICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczEyLm1lbnVJc09wZW4sXG4gICAgICAgICAgbWVudVBsYWNlbWVudCA9IF90aGlzJHByb3BzMTIubWVudVBsYWNlbWVudCxcbiAgICAgICAgICBtZW51UG9zaXRpb24gPSBfdGhpcyRwcm9wczEyLm1lbnVQb3NpdGlvbixcbiAgICAgICAgICBtZW51UG9ydGFsVGFyZ2V0ID0gX3RoaXMkcHJvcHMxMi5tZW51UG9ydGFsVGFyZ2V0LFxuICAgICAgICAgIG1lbnVTaG91bGRCbG9ja1Njcm9sbCA9IF90aGlzJHByb3BzMTIubWVudVNob3VsZEJsb2NrU2Nyb2xsLFxuICAgICAgICAgIG1lbnVTaG91bGRTY3JvbGxJbnRvVmlldyA9IF90aGlzJHByb3BzMTIubWVudVNob3VsZFNjcm9sbEludG9WaWV3LFxuICAgICAgICAgIG5vT3B0aW9uc01lc3NhZ2UgPSBfdGhpcyRwcm9wczEyLm5vT3B0aW9uc01lc3NhZ2UsXG4gICAgICAgICAgb25NZW51U2Nyb2xsVG9Ub3AgPSBfdGhpcyRwcm9wczEyLm9uTWVudVNjcm9sbFRvVG9wLFxuICAgICAgICAgIG9uTWVudVNjcm9sbFRvQm90dG9tID0gX3RoaXMkcHJvcHMxMi5vbk1lbnVTY3JvbGxUb0JvdHRvbTtcbiAgICAgIGlmICghbWVudUlzT3BlbikgcmV0dXJuIG51bGw7IC8vIFRPRE86IEludGVybmFsIE9wdGlvbiBUeXBlIGhlcmVcblxuICAgICAgdmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihwcm9wcywgaWQpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgICAgICAgZGF0YSA9IHByb3BzLmRhdGEsXG4gICAgICAgICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQgPSBwcm9wcy5pc1NlbGVjdGVkLFxuICAgICAgICAgICAgbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICAgICAgICAgIHZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgICAgIHZhciBpc0ZvY3VzZWQgPSBmb2N1c2VkT3B0aW9uID09PSBkYXRhO1xuICAgICAgICB2YXIgb25Ib3ZlciA9IGlzRGlzYWJsZWQgPyB1bmRlZmluZWQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5vbk9wdGlvbkhvdmVyKGRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25TZWxlY3QgPSBpc0Rpc2FibGVkID8gdW5kZWZpbmVkIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczQuc2VsZWN0T3B0aW9uKGRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3B0aW9uSWQgPSBcIlwiLmNvbmNhdChfdGhpczQuZ2V0RWxlbWVudElkKCdvcHRpb24nKSwgXCItXCIpLmNvbmNhdChpZCk7XG4gICAgICAgIHZhciBpbm5lclByb3BzID0ge1xuICAgICAgICAgIGlkOiBvcHRpb25JZCxcbiAgICAgICAgICBvbkNsaWNrOiBvblNlbGVjdCxcbiAgICAgICAgICBvbk1vdXNlTW92ZTogb25Ib3ZlcixcbiAgICAgICAgICBvbk1vdXNlT3Zlcjogb25Ib3ZlcixcbiAgICAgICAgICB0YWJJbmRleDogLTFcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbiwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgaW5uZXJQcm9wczogaW5uZXJQcm9wcyxcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNTZWxlY3RlZDogaXNTZWxlY3RlZCxcbiAgICAgICAgICBrZXk6IG9wdGlvbklkLFxuICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZCxcbiAgICAgICAgICBpbm5lclJlZjogaXNGb2N1c2VkID8gX3RoaXM0LmdldEZvY3VzZWRPcHRpb25SZWYgOiB1bmRlZmluZWRcbiAgICAgICAgfSksIF90aGlzNC5mb3JtYXRPcHRpb25MYWJlbChwcm9wcy5kYXRhLCAnbWVudScpKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBtZW51VUk7XG5cbiAgICAgIGlmICh0aGlzLmhhc09wdGlvbnMoKSkge1xuICAgICAgICBtZW51VUkgPSB0aGlzLmdldENhdGVnb3JpemVkT3B0aW9ucygpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgICAgIHZhciBfZGF0YSA9IGl0ZW0uZGF0YSxcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gaXRlbS5vcHRpb25zLFxuICAgICAgICAgICAgICAgIGdyb3VwSW5kZXggPSBpdGVtLmluZGV4O1xuICAgICAgICAgICAgdmFyIGdyb3VwSWQgPSBcIlwiLmNvbmNhdChfdGhpczQuZ2V0RWxlbWVudElkKCdncm91cCcpLCBcIi1cIikuY29uY2F0KGdyb3VwSW5kZXgpO1xuICAgICAgICAgICAgdmFyIGhlYWRpbmdJZCA9IFwiXCIuY29uY2F0KGdyb3VwSWQsIFwiLWhlYWRpbmdcIik7XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoR3JvdXAsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICAgICAgICBrZXk6IGdyb3VwSWQsXG4gICAgICAgICAgICAgIGRhdGE6IF9kYXRhLFxuICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgICBIZWFkaW5nOiBHcm91cEhlYWRpbmcsXG4gICAgICAgICAgICAgIGhlYWRpbmdQcm9wczoge1xuICAgICAgICAgICAgICAgIGlkOiBoZWFkaW5nSWQsXG4gICAgICAgICAgICAgICAgZGF0YTogaXRlbS5kYXRhXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsOiBfdGhpczQuZm9ybWF0R3JvdXBMYWJlbChpdGVtLmRhdGEpXG4gICAgICAgICAgICB9KSwgaXRlbS5vcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZW5kZXIob3B0aW9uLCBcIlwiLmNvbmNhdChncm91cEluZGV4LCBcIi1cIikuY29uY2F0KG9wdGlvbi5pbmRleCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnb3B0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlcihpdGVtLCBcIlwiLmNvbmNhdChpdGVtLmluZGV4KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gbG9hZGluZ01lc3NhZ2Uoe1xuICAgICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChtZXNzYWdlID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgICAgbWVudVVJID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZ01lc3NhZ2UsIGNvbW1vblByb3BzLCBtZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfbWVzc2FnZSA9IG5vT3B0aW9uc01lc3NhZ2Uoe1xuICAgICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF9tZXNzYWdlID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgICAgbWVudVVJID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTm9PcHRpb25zTWVzc2FnZSwgY29tbW9uUHJvcHMsIF9tZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG1lbnVQbGFjZW1lbnRQcm9wcyA9IHtcbiAgICAgICAgbWluTWVudUhlaWdodDogbWluTWVudUhlaWdodCxcbiAgICAgICAgbWF4TWVudUhlaWdodDogbWF4TWVudUhlaWdodCxcbiAgICAgICAgbWVudVBsYWNlbWVudDogbWVudVBsYWNlbWVudCxcbiAgICAgICAgbWVudVBvc2l0aW9uOiBtZW51UG9zaXRpb24sXG4gICAgICAgIG1lbnVTaG91bGRTY3JvbGxJbnRvVmlldzogbWVudVNob3VsZFNjcm9sbEludG9WaWV3XG4gICAgICB9O1xuICAgICAgdmFyIG1lbnVFbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudVBsYWNlciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCBtZW51UGxhY2VtZW50UHJvcHMpLCBmdW5jdGlvbiAoX3JlZjQpIHtcbiAgICAgICAgdmFyIHJlZiA9IF9yZWY0LnJlZixcbiAgICAgICAgICAgIF9yZWY0JHBsYWNlclByb3BzID0gX3JlZjQucGxhY2VyUHJvcHMsXG4gICAgICAgICAgICBwbGFjZW1lbnQgPSBfcmVmNCRwbGFjZXJQcm9wcy5wbGFjZW1lbnQsXG4gICAgICAgICAgICBtYXhIZWlnaHQgPSBfcmVmNCRwbGFjZXJQcm9wcy5tYXhIZWlnaHQ7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIG1lbnVQbGFjZW1lbnRQcm9wcywge1xuICAgICAgICAgIGlubmVyUmVmOiByZWYsXG4gICAgICAgICAgaW5uZXJQcm9wczoge1xuICAgICAgICAgICAgb25Nb3VzZURvd246IF90aGlzNC5vbk1lbnVNb3VzZURvd24sXG4gICAgICAgICAgICBvbk1vdXNlTW92ZTogX3RoaXM0Lm9uTWVudU1vdXNlTW92ZSxcbiAgICAgICAgICAgIGlkOiBfdGhpczQuZ2V0RWxlbWVudElkKCdsaXN0Ym94JylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzTG9hZGluZzogaXNMb2FkaW5nLFxuICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTY3JvbGxNYW5hZ2VyLCB7XG4gICAgICAgICAgY2FwdHVyZUVuYWJsZWQ6IGNhcHR1cmVNZW51U2Nyb2xsLFxuICAgICAgICAgIG9uVG9wQXJyaXZlOiBvbk1lbnVTY3JvbGxUb1RvcCxcbiAgICAgICAgICBvbkJvdHRvbUFycml2ZTogb25NZW51U2Nyb2xsVG9Cb3R0b20sXG4gICAgICAgICAgbG9ja0VuYWJsZWQ6IG1lbnVTaG91bGRCbG9ja1Njcm9sbFxuICAgICAgICB9LCBmdW5jdGlvbiAoc2Nyb2xsVGFyZ2V0UmVmKSB7XG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVMaXN0LCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgICAgIGlubmVyUmVmOiBmdW5jdGlvbiBpbm5lclJlZihpbnN0YW5jZSkge1xuICAgICAgICAgICAgICBfdGhpczQuZ2V0TWVudUxpc3RSZWYoaW5zdGFuY2UpO1xuXG4gICAgICAgICAgICAgIHNjcm9sbFRhcmdldFJlZihpbnN0YW5jZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBpc0xvYWRpbmcsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCxcbiAgICAgICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb25cbiAgICAgICAgICB9KSwgbWVudVVJKTtcbiAgICAgICAgfSkpO1xuICAgICAgfSk7IC8vIHBvc2l0aW9uaW5nIGJlaGF2aW91ciBpcyBhbG1vc3QgaWRlbnRpY2FsIGZvciBwb3J0YWxsZWQgYW5kIGZpeGVkLFxuICAgICAgLy8gc28gd2UgdXNlIHRoZSBzYW1lIGNvbXBvbmVudC4gdGhlIGFjdHVhbCBwb3J0YWxsaW5nIGxvZ2ljIGlzIGZvcmtlZFxuICAgICAgLy8gd2l0aGluIHRoZSBjb21wb25lbnQgYmFzZWQgb24gYG1lbnVQb3NpdGlvbmBcblxuICAgICAgcmV0dXJuIG1lbnVQb3J0YWxUYXJnZXQgfHwgbWVudVBvc2l0aW9uID09PSAnZml4ZWQnID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudVBvcnRhbCwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGFwcGVuZFRvOiBtZW51UG9ydGFsVGFyZ2V0LFxuICAgICAgICBjb250cm9sRWxlbWVudDogdGhpcy5jb250cm9sUmVmLFxuICAgICAgICBtZW51UGxhY2VtZW50OiBtZW51UGxhY2VtZW50LFxuICAgICAgICBtZW51UG9zaXRpb246IG1lbnVQb3NpdGlvblxuICAgICAgfSksIG1lbnVFbGVtZW50KSA6IG1lbnVFbGVtZW50O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJGb3JtRmllbGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRm9ybUZpZWxkKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczEzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBkZWxpbWl0ZXIgPSBfdGhpcyRwcm9wczEzLmRlbGltaXRlcixcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHMxMy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczEzLmlzTXVsdGksXG4gICAgICAgICAgbmFtZSA9IF90aGlzJHByb3BzMTMubmFtZTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICBpZiAoIW5hbWUgfHwgaXNEaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgICBpZiAoaXNNdWx0aSkge1xuICAgICAgICBpZiAoZGVsaW1pdGVyKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gc2VsZWN0VmFsdWUubWFwKGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczUuZ2V0T3B0aW9uVmFsdWUob3B0KTtcbiAgICAgICAgICB9KS5qb2luKGRlbGltaXRlcik7XG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHR5cGU6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaW5wdXQgPSBzZWxlY3RWYWx1ZS5sZW5ndGggPiAwID8gc2VsZWN0VmFsdWUubWFwKGZ1bmN0aW9uIChvcHQsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcImktXCIuY29uY2F0KGkpLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICB0eXBlOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3RoaXM1LmdldE9wdGlvblZhbHVlKG9wdClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdHlwZTogXCJoaWRkZW5cIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfdmFsdWUgPSBzZWxlY3RWYWx1ZVswXSA/IHRoaXMuZ2V0T3B0aW9uVmFsdWUoc2VsZWN0VmFsdWVbMF0pIDogJyc7XG5cbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogXCJoaWRkZW5cIixcbiAgICAgICAgICB2YWx1ZTogX3ZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJMaXZlUmVnaW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxpdmVSZWdpb24oKSB7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIF90aGlzJHN0YXRlNiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgYXJpYVNlbGVjdGlvbiA9IF90aGlzJHN0YXRlNi5hcmlhU2VsZWN0aW9uLFxuICAgICAgICAgIGZvY3VzZWRPcHRpb24gPSBfdGhpcyRzdGF0ZTYuZm9jdXNlZE9wdGlvbixcbiAgICAgICAgICBmb2N1c2VkVmFsdWUgPSBfdGhpcyRzdGF0ZTYuZm9jdXNlZFZhbHVlLFxuICAgICAgICAgIGlzRm9jdXNlZCA9IF90aGlzJHN0YXRlNi5pc0ZvY3VzZWQsXG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBfdGhpcyRzdGF0ZTYuc2VsZWN0VmFsdWU7XG4gICAgICB2YXIgZm9jdXNhYmxlT3B0aW9ucyA9IHRoaXMuZ2V0Rm9jdXNhYmxlT3B0aW9ucygpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExpdmVSZWdpb24sIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpZDogdGhpcy5nZXRFbGVtZW50SWQoJ2xpdmUtcmVnaW9uJyksXG4gICAgICAgIGFyaWFTZWxlY3Rpb246IGFyaWFTZWxlY3Rpb24sXG4gICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24sXG4gICAgICAgIGZvY3VzZWRWYWx1ZTogZm9jdXNlZFZhbHVlLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZCxcbiAgICAgICAgc2VsZWN0VmFsdWU6IHNlbGVjdFZhbHVlLFxuICAgICAgICBmb2N1c2FibGVPcHRpb25zOiBmb2N1c2FibGVPcHRpb25zXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czggPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBDb250cm9sID0gX3RoaXMkZ2V0Q29tcG9uZW50czguQ29udHJvbCxcbiAgICAgICAgICBJbmRpY2F0b3JzQ29udGFpbmVyID0gX3RoaXMkZ2V0Q29tcG9uZW50czguSW5kaWNhdG9yc0NvbnRhaW5lcixcbiAgICAgICAgICBTZWxlY3RDb250YWluZXIgPSBfdGhpcyRnZXRDb21wb25lbnRzOC5TZWxlY3RDb250YWluZXIsXG4gICAgICAgICAgVmFsdWVDb250YWluZXIgPSBfdGhpcyRnZXRDb21wb25lbnRzOC5WYWx1ZUNvbnRhaW5lcjtcblxuICAgICAgdmFyIF90aGlzJHByb3BzMTQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMTQuY2xhc3NOYW1lLFxuICAgICAgICAgIGlkID0gX3RoaXMkcHJvcHMxNC5pZCxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHMxNC5pc0Rpc2FibGVkLFxuICAgICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczE0Lm1lbnVJc09wZW47XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzID0gdGhpcy5nZXRDb21tb25Qcm9wcygpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRhaW5lciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5vbktleURvd25cbiAgICAgICAgfSxcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWRcbiAgICAgIH0pLCB0aGlzLnJlbmRlckxpdmVSZWdpb24oKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udHJvbCwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlubmVyUmVmOiB0aGlzLmdldENvbnRyb2xSZWYsXG4gICAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5vbkNvbnRyb2xNb3VzZURvd24sXG4gICAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5vbkNvbnRyb2xUb3VjaEVuZFxuICAgICAgICB9LFxuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZCxcbiAgICAgICAgbWVudUlzT3BlbjogbWVudUlzT3BlblxuICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFZhbHVlQ29udGFpbmVyLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZFxuICAgICAgfSksIHRoaXMucmVuZGVyUGxhY2Vob2xkZXJPclZhbHVlKCksIHRoaXMucmVuZGVySW5wdXQoKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEluZGljYXRvcnNDb250YWluZXIsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkXG4gICAgICB9KSwgdGhpcy5yZW5kZXJDbGVhckluZGljYXRvcigpLCB0aGlzLnJlbmRlckxvYWRpbmdJbmRpY2F0b3IoKSwgdGhpcy5yZW5kZXJJbmRpY2F0b3JTZXBhcmF0b3IoKSwgdGhpcy5yZW5kZXJEcm9wZG93bkluZGljYXRvcigpKSksIHRoaXMucmVuZGVyTWVudSgpLCB0aGlzLnJlbmRlckZvcm1GaWVsZCgpKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgICAgdmFyIHByZXZQcm9wcyA9IHN0YXRlLnByZXZQcm9wcyxcbiAgICAgICAgICBjbGVhckZvY3VzVmFsdWVPblVwZGF0ZSA9IHN0YXRlLmNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlLFxuICAgICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSA9IHN0YXRlLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSxcbiAgICAgICAgICBhcmlhU2VsZWN0aW9uID0gc3RhdGUuYXJpYVNlbGVjdGlvbixcbiAgICAgICAgICBpc0ZvY3VzZWQgPSBzdGF0ZS5pc0ZvY3VzZWQsXG4gICAgICAgICAgcHJldldhc0ZvY3VzZWQgPSBzdGF0ZS5wcmV2V2FzRm9jdXNlZDtcbiAgICAgIHZhciBvcHRpb25zID0gcHJvcHMub3B0aW9ucyxcbiAgICAgICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgICAgIG1lbnVJc09wZW4gPSBwcm9wcy5tZW51SXNPcGVuLFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBwcm9wcy5pbnB1dFZhbHVlLFxuICAgICAgICAgIGlzTXVsdGkgPSBwcm9wcy5pc011bHRpO1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gY2xlYW5WYWx1ZSh2YWx1ZSk7XG4gICAgICB2YXIgbmV3TWVudU9wdGlvbnNTdGF0ZSA9IHt9O1xuXG4gICAgICBpZiAocHJldlByb3BzICYmICh2YWx1ZSAhPT0gcHJldlByb3BzLnZhbHVlIHx8IG9wdGlvbnMgIT09IHByZXZQcm9wcy5vcHRpb25zIHx8IG1lbnVJc09wZW4gIT09IHByZXZQcm9wcy5tZW51SXNPcGVuIHx8IGlucHV0VmFsdWUgIT09IHByZXZQcm9wcy5pbnB1dFZhbHVlKSkge1xuICAgICAgICB2YXIgZm9jdXNhYmxlT3B0aW9ucyA9IG1lbnVJc09wZW4gPyBidWlsZEZvY3VzYWJsZU9wdGlvbnMocHJvcHMsIHNlbGVjdFZhbHVlKSA6IFtdO1xuICAgICAgICB2YXIgZm9jdXNlZFZhbHVlID0gY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGUgPyBnZXROZXh0Rm9jdXNlZFZhbHVlKHN0YXRlLCBzZWxlY3RWYWx1ZSkgOiBudWxsO1xuICAgICAgICB2YXIgZm9jdXNlZE9wdGlvbiA9IGdldE5leHRGb2N1c2VkT3B0aW9uKHN0YXRlLCBmb2N1c2FibGVPcHRpb25zKTtcbiAgICAgICAgbmV3TWVudU9wdGlvbnNTdGF0ZSA9IHtcbiAgICAgICAgICBzZWxlY3RWYWx1ZTogc2VsZWN0VmFsdWUsXG4gICAgICAgICAgZm9jdXNlZE9wdGlvbjogZm9jdXNlZE9wdGlvbixcbiAgICAgICAgICBmb2N1c2VkVmFsdWU6IGZvY3VzZWRWYWx1ZSxcbiAgICAgICAgICBjbGVhckZvY3VzVmFsdWVPblVwZGF0ZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gc29tZSB1cGRhdGVzIHNob3VsZCB0b2dnbGUgdGhlIHN0YXRlIG9mIHRoZSBpbnB1dCB2aXNpYmlsaXR5XG5cblxuICAgICAgdmFyIG5ld0lucHV0SXNIaWRkZW5TdGF0ZSA9IGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSAhPSBudWxsICYmIHByb3BzICE9PSBwcmV2UHJvcHMgPyB7XG4gICAgICAgIGlucHV0SXNIaWRkZW46IGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSxcbiAgICAgICAgaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlOiB1bmRlZmluZWRcbiAgICAgIH0gOiB7fTtcbiAgICAgIHZhciBuZXdBcmlhU2VsZWN0aW9uID0gYXJpYVNlbGVjdGlvbjtcbiAgICAgIHZhciBoYXNLZXB0Rm9jdXMgPSBpc0ZvY3VzZWQgJiYgcHJldldhc0ZvY3VzZWQ7XG5cbiAgICAgIGlmIChpc0ZvY3VzZWQgJiYgIWhhc0tlcHRGb2N1cykge1xuICAgICAgICAvLyBJZiBgdmFsdWVgIG9yIGBkZWZhdWx0VmFsdWVgIHByb3BzIGFyZSBub3QgZW1wdHkgdGhlbiBhbm5vdW5jZSB0aGVtXG4gICAgICAgIC8vIHdoZW4gdGhlIFNlbGVjdCBpcyBpbml0aWFsbHkgZm9jdXNlZFxuICAgICAgICBuZXdBcmlhU2VsZWN0aW9uID0ge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVRlcm5hcnkoaXNNdWx0aSwgc2VsZWN0VmFsdWUsIHNlbGVjdFZhbHVlWzBdIHx8IG51bGwpLFxuICAgICAgICAgIG9wdGlvbnM6IHNlbGVjdFZhbHVlLFxuICAgICAgICAgIGFjdGlvbjogJ2luaXRpYWwtaW5wdXQtZm9jdXMnXG4gICAgICAgIH07XG4gICAgICAgIGhhc0tlcHRGb2N1cyA9ICFwcmV2V2FzRm9jdXNlZDtcbiAgICAgIH0gLy8gSWYgdGhlICdpbml0aWFsLWlucHV0LWZvY3VzJyBhY3Rpb24gaGFzIGJlZW4gc2V0IGFscmVhZHlcbiAgICAgIC8vIHRoZW4gcmVzZXQgdGhlIGFyaWFTZWxlY3Rpb24gdG8gbnVsbFxuXG5cbiAgICAgIGlmICgoYXJpYVNlbGVjdGlvbiA9PT0gbnVsbCB8fCBhcmlhU2VsZWN0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcmlhU2VsZWN0aW9uLmFjdGlvbikgPT09ICdpbml0aWFsLWlucHV0LWZvY3VzJykge1xuICAgICAgICBuZXdBcmlhU2VsZWN0aW9uID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBuZXdNZW51T3B0aW9uc1N0YXRlKSwgbmV3SW5wdXRJc0hpZGRlblN0YXRlKSwge30sIHtcbiAgICAgICAgcHJldlByb3BzOiBwcm9wcyxcbiAgICAgICAgYXJpYVNlbGVjdGlvbjogbmV3QXJpYVNlbGVjdGlvbixcbiAgICAgICAgcHJldldhc0ZvY3VzZWQ6IGhhc0tlcHRGb2N1c1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNlbGVjdDtcbn0oQ29tcG9uZW50KTtcblxuU2VsZWN0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IHsgU2VsZWN0IGFzIFMsIGdldE9wdGlvbkxhYmVsJDEgYXMgYSwgZGVmYXVsdFByb3BzIGFzIGIsIGNyZWF0ZUZpbHRlciBhcyBjLCBkZWZhdWx0VGhlbWUgYXMgZCwgZ2V0T3B0aW9uVmFsdWUkMSBhcyBnLCBtZXJnZVN0eWxlcyBhcyBtIH07XG4iLCJpbXBvcnQgeyB1IGFzIHVzZVN0YXRlTWFuYWdlciB9IGZyb20gJy4vdXNlU3RhdGVNYW5hZ2VyLTY4NDI1MjcxLmVzbS5qcyc7XG5leHBvcnQgeyB1IGFzIHVzZVN0YXRlTWFuYWdlciB9IGZyb20gJy4vdXNlU3RhdGVNYW5hZ2VyLTY4NDI1MjcxLmVzbS5qcyc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTIGFzIFNlbGVjdCB9IGZyb20gJy4vU2VsZWN0LWU2ZjRhZjI0LmVzbS5qcyc7XG5leHBvcnQgeyBjIGFzIGNyZWF0ZUZpbHRlciwgZCBhcyBkZWZhdWx0VGhlbWUsIG0gYXMgbWVyZ2VTdHlsZXMgfSBmcm9tICcuL1NlbGVjdC1lNmY0YWYyNC5lc20uanMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0IHsgXyBhcyBfY3JlYXRlU3VwZXIgfSBmcm9tICcuL2luZGV4LWE3NjkwYTMzLmVzbS5qcyc7XG5leHBvcnQgeyBjIGFzIGNvbXBvbmVudHMgfSBmcm9tICcuL2luZGV4LWE3NjkwYTMzLmVzbS5qcyc7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCBtZW1vaXplT25lIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5JztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXknO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgJ3JlYWN0LWRvbSc7XG5cbnZhciBTdGF0ZU1hbmFnZWRTZWxlY3QgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgYmFzZVNlbGVjdFByb3BzID0gdXNlU3RhdGVNYW5hZ2VyKHByb3BzKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmXG4gIH0sIGJhc2VTZWxlY3RQcm9wcykpO1xufSk7XG5cbnZhciBOb25jZVByb3ZpZGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhOb25jZVByb3ZpZGVyLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE5vbmNlUHJvdmlkZXIpO1xuXG4gIGZ1bmN0aW9uIE5vbmNlUHJvdmlkZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9uY2VQcm92aWRlcik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgIF90aGlzLmNyZWF0ZUVtb3Rpb25DYWNoZSA9IGZ1bmN0aW9uIChub25jZSwga2V5KSB7XG4gICAgICByZXR1cm4gY3JlYXRlQ2FjaGUoe1xuICAgICAgICBub25jZTogbm9uY2UsXG4gICAgICAgIGtleToga2V5XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY3JlYXRlRW1vdGlvbkNhY2hlID0gbWVtb2l6ZU9uZShfdGhpcy5jcmVhdGVFbW90aW9uQ2FjaGUpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhOb25jZVByb3ZpZGVyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGVtb3Rpb25DYWNoZSA9IHRoaXMuY3JlYXRlRW1vdGlvbkNhY2hlKHRoaXMucHJvcHMubm9uY2UsIHRoaXMucHJvcHMuY2FjaGVLZXkpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENhY2hlUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IGVtb3Rpb25DYWNoZVxuICAgICAgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vbmNlUHJvdmlkZXI7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlTWFuYWdlZFNlbGVjdDtcbmV4cG9ydCB7IE5vbmNlUHJvdmlkZXIgfTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU11dGF0aW9uT2JzZXJ2ZXIoXG4gIHJlZjogYW55LFxuICBvcHRpb25zOiBNdXRhdGlvbk9ic2VydmVySW5pdCA9IHtcbiAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICBzdWJ0cmVlOiB0cnVlLFxuICB9LFxuICBjYWxsYmFjaz86IEZ1bmN0aW9uLFxuKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiB7XG4gICAgICBtdXRhdGlvbnMuZm9yRWFjaChtdXRhdGlvbiA9PiBjYWxsYmFjaz8uKG11dGF0aW9uKSk7XG4gICAgfSk7XG5cbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUocmVmLmN1cnJlbnQsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBtdXRhdGlvbk9ic2VydmVyPy5kaXNjb25uZWN0Py4oKTtcbiAgICB9O1xuICB9LCBbcmVmLCBvcHRpb25zLCBjYWxsYmFja10pO1xufVxuIiwiaW1wb3J0IFJlYWN0U2VsZWN0LCB7IFByb3BzIGFzIFJlYWN0U2VsZWN0UHJvcHMgfSBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQge1xuICB1c2VDYWxsYmFjayxcbiAgdXNlRWZmZWN0LFxuICB1c2VMYXlvdXRFZmZlY3QsXG4gIHVzZU1lbW8sXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb25PYnNlcnZlciB9IGZyb20gXCIuL3VzZU11dGF0aW9uT2JzZXJ2ZXJcIjtcblxuZXhwb3J0IHR5cGUgU2VsZWN0UHJvcHMgPSBQYXJ0aWFsPE9taXQ8UmVhY3RTZWxlY3RQcm9wcywgXCJvcHRpb25zXCI+PiAmIHtcbiAgcGFyZW50OiBhbnk7XG4gIHNlbGVjdDogYW55O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VsZWN0KHByb3BzOiBTZWxlY3RQcm9wcykge1xuICBjb25zdCB7XG4gICAgcGFyZW50LFxuICAgIHNlbGVjdCxcbiAgICBvbkNoYW5nZSxcbiAgICBvbklucHV0Q2hhbmdlLFxuICAgIG9uQmx1cixcbiAgICBvbkZvY3VzLFxuICAgIG9uS2V5RG93bixcbiAgICBvbk1lbnVDbG9zZSxcbiAgICBvbk1lbnVPcGVuLFxuICAgIG9uTWVudVNjcm9sbFRvQm90dG9tLFxuICAgIG9uTWVudVNjcm9sbFRvVG9wLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oXG4gICAgcmVzdC5pc0Rpc2FibGVkID8/IHNlbGVjdD8uY3VycmVudD8uZGlzYWJsZWQsXG4gICk7XG4gIGNvbnN0IFtydGwsIHNldFJ0bF0gPSB1c2VTdGF0ZTxib29sZWFuPihcbiAgICByZXN0LmlzUnRsID8/IHNlbGVjdD8uY3VycmVudD8uaGFzQXR0cmlidXRlKFwiZGF0YS1ydGxcIiksXG4gICk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KFxuICAgIHJlc3QuaXNMb2FkaW5nID8/IHNlbGVjdD8uY3VycmVudD8uaGFzQXR0cmlidXRlKFwiZGF0YS1sb2FkaW5nXCIpLFxuICApO1xuICBjb25zdCBbc2VhcmNoYWJsZSwgc2V0U2VhcmNoYWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuPihcbiAgICByZXN0LmlzU2VhcmNoYWJsZSA/PyBzZWxlY3Q/LmN1cnJlbnQ/Lmhhc0F0dHJpYnV0ZShcImRhdGEtc2VhcmNoYWJsZVwiKSxcbiAgKTtcbiAgY29uc3QgW2NsZWFyYWJsZSwgc2V0Q2xlYXJhYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KFxuICAgIHJlc3QuaXNDbGVhcmFibGUgPz8gc2VsZWN0Py5jdXJyZW50Py5oYXNBdHRyaWJ1dGUoXCJkYXRhLWNsZWFyYWJsZVwiKSxcbiAgKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuXG4gIGNvbnN0IGhhbmRsZU11dGF0aW9uID0gdXNlQ2FsbGJhY2soKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4ge1xuICAgIC8vIG11dGF0aW9ucyBvZiBzZWxlY3QgaXRzZWxmXG4gICAgaWYgKG11dGF0aW9uLnRhcmdldCAhPT0gc2VsZWN0LmN1cnJlbnQpIHJldHVybjtcbiAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbi50YXJnZXQgYXMgYW55IGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgLy8gbXV0YXRpb25zIG9mIHNlbGVjdCBhdHRyaWJ1dGVzXG4gICAgaWYgKG11dGF0aW9uLnR5cGUgPT09IFwiYXR0cmlidXRlc1wiICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcIm11dGF0ZWRcIixcbiAgICAgICAgbXV0YXRpb24uYXR0cmlidXRlTmFtZSxcbiAgICAgICAgdGFyZ2V0LmdldEF0dHJpYnV0ZShtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSxcbiAgICAgICk7XG5cbiAgICAgIHN3aXRjaCAobXV0YXRpb24uYXR0cmlidXRlTmFtZSkge1xuICAgICAgICBjYXNlIFwiZGlzYWJsZWRcIjoge1xuICAgICAgICAgIHJldHVybiBzZXREaXNhYmxlZCh0YXJnZXQuZGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJkYXRhLWxvYWRpbmdcIjoge1xuICAgICAgICAgIHJldHVybiBzZXRMb2FkaW5nKHRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWxvYWRpbmdcIikpO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJkYXRhLXNlYXJjaGFibGVcIjoge1xuICAgICAgICAgIHJldHVybiBzZXRTZWFyY2hhYmxlKHRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXNlYXJjaGFibGVcIikpO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJkYXRhLWNsZWFyYWJsZVwiOiB7XG4gICAgICAgICAgcmV0dXJuIHNldENsZWFyYWJsZSh0YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS1jbGVhcmFibGVcIikpO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJkYXRhLXJ0bFwiOiB7XG4gICAgICAgICAgcmV0dXJuIHNldFJ0bCh0YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS1ydGxcIikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgbXV0YXRpb25PYnNlcnZlck9wdGlvbnMgPSB1c2VNZW1vPE11dGF0aW9uT2JzZXJ2ZXJJbml0PihcbiAgICAoKSA9PiAoe1xuICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgfSksXG4gICAgW10sXG4gICk7XG5cbiAgdXNlTXV0YXRpb25PYnNlcnZlcihzZWxlY3QsIG11dGF0aW9uT2JzZXJ2ZXJPcHRpb25zLCBoYW5kbGVNdXRhdGlvbik7XG5cbiAgZnVuY3Rpb24gZ2V0U2VsZWN0T3B0aW9ucygpIHtcbiAgICBpZiAoIXNlbGVjdC5jdXJyZW50KSByZXR1cm4gW107XG5cbiAgICBjb25zdCBpdGVtcyA9IFsuLi5zZWxlY3QuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpXTtcbiAgICBpZiAoIWl0ZW1zPy5sZW5ndGgpIHJldHVybiBbXTtcblxuICAgIHJldHVybiBpdGVtc1xuICAgICAgLm1hcChvcHRpb24gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBvcHRpb24uZ2V0QXR0cmlidXRlKFwidmFsdWVcIiksXG4gICAgICAgICAgbGFiZWw6IG9wdGlvbi5pbm5lclRleHQsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihCb29sZWFuKTtcbiAgfVxuXG4gIGNvbnN0IGVtaXQgPSB1c2VDYWxsYmFjaygobmFtZTogc3RyaW5nLCAuLi5kYXRhOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBzZWxlY3QuY3VycmVudDtcbiAgICBpZiAoIWN1cnJlbnQpIHJldHVybjtcbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChgc2VsZWN0OiR7bmFtZX1gLCB7XG4gICAgICBkZXRhaWw6IGRhdGEsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBzZWxlY3Q6IGN1cnJlbnQsXG4gICAgfSk7XG4gICAgY3VycmVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSwgW10pO1xuXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudCA9IHNlbGVjdC5jdXJyZW50O1xuICAgIGlmICghY3VycmVudCkgcmV0dXJuO1xuXG4gICAgZW1pdChcImJlZm9yZS1pbml0XCIsIGN1cnJlbnQpO1xuXG4gICAgY29uc3QgaW5pdGQgPSBjdXJyZW50LnN0eWxlLmRpc3BsYXk7XG4gICAgY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICBjb25zdCBvcHRzID0gZ2V0U2VsZWN0T3B0aW9ucygpO1xuICAgIHNldE9wdGlvbnMob3B0cyk7XG5cbiAgICBpZiAob3B0c1swXSkge1xuICAgICAgc2V0VmFsdWUoW3sgLi4ub3B0c1swXSB9XSk7XG4gICAgfVxuXG4gICAgZW1pdChcImluaXRcIiwgc2VsZWN0KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gaW5pdGQ7XG4gICAgICBlbWl0KFwiZGVzdHJveVwiLCBzZWxlY3QpO1xuICAgIH07XG4gIH0sIFtzZWxlY3RdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWxlY3QpIHtcbiAgICAgIGNvbnN0IG9wdHMgPSBzZWxlY3QuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpO1xuXG4gICAgICBvcHRzLmZvckVhY2goKG9wdGlvbjogSFRNTE9wdGlvbkVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbi5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSA9PT0gKHZhbHVlPy52YWx1ZSBhcyBzdHJpbmcpKSB7XG4gICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUgYXMgYW55KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRpb24ucmVtb3ZlQXR0cmlidXRlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBlbWl0KFwiY2hhbmdlXCIsIHZhbHVlKTtcbiAgICB9XG4gIH0sIFt2YWx1ZV0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudDogYW55KSB7XG4gICAgc2V0VmFsdWUoZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIGVtaXQoXCJpbnB1dGNoYW5nZVwiLCBldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVCbHVyKGV2ZW50OiBhbnkpIHtcbiAgICBlbWl0KFwiYmx1clwiLCBldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVGb2N1cyhldmVudDogYW55KSB7XG4gICAgZW1pdChcImZvY3VzXCIsIGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQ6IGFueSkge1xuICAgIGVtaXQoXCJrZXlkb3duXCIsIGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1lbnVDbG9zZSgpIHtcbiAgICBlbWl0KFwibWVudWNsb3NlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTWVudU9wZW4oKSB7XG4gICAgZW1pdChcIm1lbnVvcGVuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTWVudVNjcm9sbFRvQm90dG9tKGV2ZW50OiBhbnkpIHtcbiAgICBlbWl0KFwibWVudXNjcm9sbHRvYm90dG9tXCIsIGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1lbnVTY3JvbGxUb1RvcChldmVudDogYW55KSB7XG4gICAgZW1pdChcIm1lbnVzY3JvbGx0b3RvcFwiLCBldmVudCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdFNlbGVjdFxuICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgIGlzRGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgaXNTZWFyY2hhYmxlPXtzZWFyY2hhYmxlfVxuICAgICAgaXNDbGVhcmFibGU9e2NsZWFyYWJsZX1cbiAgICAgIGlzUnRsPXtydGx9XG4gICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgb25JbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICBvbkZvY3VzPXtoYW5kbGVGb2N1c31cbiAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgIG9uTWVudUNsb3NlPXtoYW5kbGVNZW51Q2xvc2V9XG4gICAgICBvbk1lbnVPcGVuPXtoYW5kbGVNZW51T3Blbn1cbiAgICAgIG9uTWVudVNjcm9sbFRvQm90dG9tPXtoYW5kbGVNZW51U2Nyb2xsVG9Cb3R0b219XG4gICAgICBvbk1lbnVTY3JvbGxUb1RvcD17aGFuZGxlTWVudVNjcm9sbFRvVG9wfVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgey4uLnJlc3R9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZVJlZiwgcmVuZGVyIGFzIHByZWFjdFJlbmRlciB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgU2VsZWN0LCB7IFNlbGVjdFByb3BzIH0gZnJvbSBcIi4vc2VsZWN0XCI7XG5cbmV4cG9ydCB0eXBlIFNlbGVjdE9wdGlvbnMgPSBQYXJ0aWFsPHtcbiAgd3JhcHBlckVsZW1lbnQ/OiBcImRpdlwiIHwgc3RyaW5nO1xuICB3cmFwcGVyQ2xhc3NOYW1lPzogc3RyaW5nO1xufT4gJlxuICBPbWl0PFNlbGVjdFByb3BzLCBcInBhcmVudFwiIHwgXCJzZWxlY3RcIiB8IFwiaXNNdWx0aVwiPjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdChcbiAgc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudCxcbiAgb3B0aW9uczogU2VsZWN0T3B0aW9ucyA9IHt9LFxuKSB7XG4gIGNvbnN0IHsgd3JhcHBlckVsZW1lbnQsIHdyYXBwZXJDbGFzc05hbWUsIC4uLnByb3BzIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHBhcmVudCA9IHNlbGVjdC5wYXJlbnRFbGVtZW50ITtcbiAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyhcImZhdHRpX193cmFwcGVyXCIsIHdyYXBwZXJDbGFzc05hbWUsIFtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgLi4uc2VsZWN0LmNsYXNzTGlzdC52YWx1ZXMoKSxcbiAgXSk7XG5cbiAgY29uc3QgcGFyZW50UmVmID0gY3JlYXRlUmVmPEVsZW1lbnQgfCBIVE1MRGl2RWxlbWVudD4oKTtcbiAgcGFyZW50UmVmLmN1cnJlbnQgPSBwYXJlbnQ7XG5cbiAgY29uc3Qgc2VsZWN0UmVmID0gY3JlYXRlUmVmPEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudD4oKTtcbiAgc2VsZWN0UmVmLmN1cnJlbnQgPSBzZWxlY3Q7XG5cbiAgcHJlYWN0UmVuZGVyKFxuICAgIDxTZWxlY3RcbiAgICAgIHNlbGVjdD17c2VsZWN0UmVmfVxuICAgICAgcGFyZW50PXtwYXJlbnRSZWZ9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPixcbiAgICBwYXJlbnQsXG4gICk7XG5cbiAgcmV0dXJuIHsgcGFyZW50LCBzZWxlY3QgfTtcbn1cbiJdLCJuYW1lcyI6WyJuIiwibCIsInUiLCJ0IiwibyIsInIiLCJmIiwiZSIsImMiLCJzIiwieSIsImsiLCJiIiwiZyIsImEiLCJqIiwieiIsImQiLCJ4IiwiUCIsIk4iLCJNIiwiQSIsIkgiLCIkIiwiVCIsIkkiLCJfIiwiTyIsInciLCJMIiwiQyIsImgiLCJ2IiwiUyIsInEiLCJtIiwiaSIsInAiLCJGIiwicmVhY3RJc01vZHVsZSIsInJlcXVpcmUkJDAiLCJ1bml0bGVzcyIsImhhc2hTdHJpbmciLCJjcmVhdGVDb250ZXh0IiwiZm9yd2FyZFJlZiIsInVzZUNvbnRleHQiLCJJbnNlcnRpb24iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJ1c2VMYXlvdXRFZmZlY3QiLCJjc3MiLCJvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwiYXJyYXlMaWtlVG9BcnJheSIsImFycmF5V2l0aEhvbGVzIiwiaXRlcmFibGVUb0FycmF5TGltaXQiLCJ1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm5vbkl0ZXJhYmxlUmVzdCIsInNldFByb3RvdHlwZU9mIiwiQ29tcG9uZW50IiwiY3JlYXRlUG9ydGFsIiwiX3JlZjIiLCJfZXhjbHVkZWQkMSIsIl9leGNsdWRlZCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJhcnJheVdpdGhvdXRIb2xlcyIsIml0ZXJhYmxlVG9BcnJheSIsIm5vbkl0ZXJhYmxlU3ByZWFkIiwidXNlTWVtbyIsInVzZVJlZiIsInVzZUVmZmVjdCIsImNzcyQyIiwiU2VsZWN0IiwiUmVhY3QuY3JlYXRlRWxlbWVudCIsImNsYXNzbmFtZXMiLCJjcmVhdGVSZWYiLCJwcmVhY3RSZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFHLElBQUNBLEtBQUVDLEtBQUVDLEtBQUlDLEtBQUVDLEtBQUVDLEtBQUVDLEtBQUVDLE1BQUUsQ0FBQSxHQUFHQyxNQUFFLENBQUEsR0FBR0MsTUFBRTtBQUFvRSxhQUFXLElBQUUsSUFBRTtBQUFDLFdBQVEsTUFBSztBQUFFLE9BQUUsTUFBRyxHQUFFO0FBQUcsU0FBTztBQUFDO0FBQUMsYUFBVyxJQUFFO0FBQUMsTUFBSSxLQUFFLEdBQUU7QUFBVyxRQUFHLEdBQUUsWUFBWSxFQUFD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QSxVQUFDLENBQUMsR0FBRSxHQUFFLE9BQUssR0FBRSxJQUFJLFFBQU0sTUFBSSxJQUFFLE9BQUssR0FBRSxhQUFhLEdBQUUsS0FBSSxHQUFFLEdBQUcsR0FBRSxHQUFFLElBQUksTUFBSSxNQUFHLEdBQUUsSUFBSSxNQUFJLE1BQUk7QUFBQSxRQUFDLEVBQUUsSUFBRSxHQUFFLElBQUksS0FBSSxHQUFFLElBQUksR0FBRztBQUFBLE1BQUM7QUFBQyxVQUFJO0FBQUUsV0FBSSxHQUFFLFNBQVMsRUFBQyxLQUFJLEdBQUUsTUFBSSxLQUFJLENBQUMsR0FBRSxLQUFFLEdBQUUsRUFBRTtBQUFPLFdBQUUsWUFBVztBQUFBLElBQUU7QUFBQSxFQUFDLEdBQUUsS0FBRSxBQUFLLEdBQUUsUUFBUDtBQUFXLEtBQUUsU0FBTyxNQUFHLEdBQUUsU0FBUyxFQUFDLEtBQUksR0FBRSxNQUFJLEdBQUUsSUFBSSxJQUFJLEdBQUUsQ0FBQyxHQUFFLEdBQUUsS0FBSyxHQUFFLENBQUM7QUFBQyxHQUFFLEVBQUUsVUFBVSx1QkFBcUIsV0FBVTtBQUFDLE9BQUssSUFBRSxDQUFBO0FBQUUsR0FBRSxFQUFFLFVBQVUsU0FBTyxTQUFTLElBQUUsSUFBRTtBQUFDLE1BQUcsS0FBSyxLQUFJO0FBQUMsUUFBRyxLQUFLLElBQUksS0FBSTtBQUFDLFVBQUksS0FBRSxTQUFTLGNBQWMsS0FBSyxHQUFFLEtBQUUsS0FBSyxJQUFJLElBQUksR0FBRztBQUFJLFdBQUssSUFBSSxJQUFJLEtBQUcsWUFBVyxJQUFFLElBQUUsSUFBRTtBQUFDLGVBQU8sTUFBSSxJQUFFLE9BQUssR0FBRSxJQUFJLE9BQU0sSUFBRSxJQUFJLElBQUksR0FBRyxRQUFRLFNBQVMsSUFBRTtBQUFDLFVBQVksT0FBTyxHQUFFLE9BQXJCLGNBQTBCLEdBQUU7UUFBSyxDQUFDLEdBQUUsR0FBRSxJQUFJLE1BQUksT0FBTSxBQUFPLE1BQUUsRUFBRSxDQUFBLEdBQUcsRUFBQyxHQUFHLE9BQWxCLFFBQXdCLElBQUUsSUFBSSxRQUFNLE1BQUksSUFBRSxJQUFJLE1B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UztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsQ0FBQztBQUNELElBQUksZUFBZSxJQUFJLE9BQU8sTUFBTSxXQUFXLElBQUksU0FBVSxJQUFHO0FBQzlELFNBQU8sR0FBRTtBQUNYLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLEdBQUc7QUFDdEIsSUFBSSxrQkFBa0IsQ0FBQTtBQUV0QixTQUFTLElBQUksR0FBRyxJQUFJLFdBQVcsUUFBUSxLQUFLO0FBQzFDLE1BQUksWUFBWSxXQUFXO0FBRTNCLFdBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLFFBQVEsS0FBSztBQUNqRCxvQkFBZ0IsVUFBVSxRQUFRLE1BQU0sVUFBVTtBQUFBLEVBQ25EO0FBQ0g7QUFFQSxJQUFJLGtCQUFrQiwwQkFBeUIsS0FBSztBQUNsRCxTQUFPLElBQUksUUFBUSxjQUFjLFNBQVUsUUFBTztBQUNoRCxXQUFPLGdCQUFnQjtBQUFBLEVBQzNCLENBQUc7QUFDSDtBQUVBLElBQUksa0NBQWtDLFdBQVcsZUFBZTtBQUVoRSxJQUFJLGFBQWEscUJBQW9CLEtBQUs7QUFDeEMsU0FBTyxJQUFJLFFBQVEsY0FBYyxFQUFFO0FBQ3JDO0FBRUEsSUFBSSxtQkFBbUIsMkJBQTBCLFFBQVE7QUFDdkQsU0FBTyxHQUFHLE9BQU8sT0FBTyxPQUFPLEdBQUcsRUFBRSxPQUFPLE9BQU8sS0FBSztBQUN6RDtBQUVBLElBQUksZUFBZSx1QkFBc0IsUUFBUTtBQUMvQyxTQUFPLFNBQVUsUUFBUSxVQUFVO0FBRWpDLFFBQUksT0FBTyxLQUFLO0FBQVcsYUFBTztBQUVsQyxRQUFJLHdCQUF3QixlQUFlO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osZUFBZTtBQUFBLE1BQ2YsV0FBVztBQUFBLE1BQ1gsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLElBQ1osR0FBRSxNQUFNLEdBQ0wsYUFBYSxzQkFBc0IsWUFDbkMsZ0JBQWdCLHNCQUFzQixlQUN0QyxhQUFZLHNCQUFzQixXQUNsQyxRQUFPLHNCQUFzQixNQUM3QixZQUFZLHNCQUFzQjtBQUV0QyxRQUFJLFFBQVEsUUFBTyxXQUFXLFFBQVEsSUFBSTtBQUMxQyxRQUFJLFlBQVksUUFBTyxXQUFXLFdBQVUsTUFBTSxDQUFDLElBQUksV0FBVSxNQUFNO0FBRXZFLFFBQUksWUFBWTtBQUNkLGNBQVEsTUFBTTtBQUNkLGtCQUFZLFVBQVU7SUFDdkI7QUFFRCxRQUFJLGVBQWU7QUFDakIsY0FBUSxnQ0FBZ0MsS0FBSztBQUM3QyxrQkFBWSxnQkFBZ0IsU0FBUztBQUFBLElBQ3RDO0FBRUQsV0FBTyxjQUFjLFVBQVUsVUFBVSxPQUFPLEdBQUcsTUFBTSxNQUFNLE1BQU0sUUFBUSxVQUFVLFFBQVEsS0FBSyxJQUFJO0FBQUEsRUFDNUc7QUFDQTtBQUVBLElBQUksWUFBWSxDQUFDLFVBQVU7QUFDM0Isb0JBQW9CLE9BQU07QUFDeEIsTUFBSSxXQUFXLE1BQUssVUFDaEIsUUFBUSx5QkFBeUIsT0FBTSxTQUFTO0FBR3BELE1BQUksZ0JBQWdCLFlBQVksT0FBTyxZQUFZLE1BQU0sU0FBUyxRQUFRLFFBQVE7QUFDbEYsU0FBTyxJQUFJLFNBQVMsU0FBUztBQUFBLElBQzNCLEtBQUs7QUFBQSxFQUNOLEdBQUUsZUFBZTtBQUFBLElBQ2hCLEtBQWtCRSxzQkFBSTtBQUFBLE1BQ3BCLE9BQU87QUFBQSxNQUVQLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUVSLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUVULE9BQU87QUFBQSxNQUVQLE9BQU87QUFBQSxNQUVQLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxJQUNqQixHQUErQyxJQUFtRSxFQUFrMkQ7QUFBQSxFQUNqOUQsQ0FBQSxDQUFDO0FBQ0o7QUFFQSxJQUFJLGVBQWUsdUJBQXNCLE9BQU87QUFDOUMsUUFBTSxlQUFjO0FBQ3BCLFFBQU0sZ0JBQWU7QUFDdkI7QUFFQSwwQkFBMEIsT0FBTTtBQUM5QixNQUFJLFlBQVksTUFBSyxXQUNqQixpQkFBaUIsTUFBSyxnQkFDdEIsZ0JBQWdCLE1BQUssZUFDckIsY0FBYyxNQUFLLGFBQ25CLGFBQWEsTUFBSztBQUN0QixNQUFJLFdBQVdtQixFQUFPLEtBQUs7QUFDM0IsTUFBSSxRQUFRQSxFQUFPLEtBQUs7QUFDeEIsTUFBSSxhQUFhQSxFQUFPLENBQUM7QUFDekIsTUFBSSxlQUFlQSxFQUFPLElBQUk7QUFDOUIsTUFBSSxtQkFBbUJMLElBQVksU0FBVSxPQUFPLE9BQU87QUFDekQsUUFBSSxhQUFhLFlBQVk7QUFBTTtBQUNuQyxRQUFJLHdCQUF3QixhQUFhLFNBQ3JDLFlBQVksc0JBQXNCLFdBQ2xDLGVBQWUsc0JBQXNCLGNBQ3JDLGVBQWUsc0JBQXNCO0FBQ3pDLFFBQUksU0FBUyxhQUFhO0FBQzFCLFFBQUksa0JBQWtCLFFBQVE7QUFDOUIsUUFBSSxrQkFBa0IsZUFBZSxlQUFlO0FBQ3BELFFBQUkscUJBQXFCO0FBRXpCLFFBQUksa0JBQWtCLFNBQVMsU0FBUyxTQUFTO0FBQy9DLFVBQUk7QUFBZSxzQkFBYyxLQUFLO0FBQ3RDLGVBQVMsVUFBVTtBQUFBLElBQ3BCO0FBRUQsUUFBSSxtQkFBbUIsTUFBTSxTQUFTO0FBQ3BDLFVBQUk7QUFBWSxtQkFBVyxLQUFLO0FBQ2hDLFlBQU0sVUFBVTtBQUFBLElBQ2pCO0FBR0QsUUFBSSxtQkFBbUIsUUFBUSxpQkFBaUI7QUFDOUMsVUFBSSxrQkFBa0IsQ0FBQyxTQUFTLFNBQVM7QUFDdkMsdUJBQWUsS0FBSztBQUFBLE1BQ3JCO0FBRUQsYUFBTyxZQUFZO0FBQ25CLDJCQUFxQjtBQUNyQixlQUFTLFVBQVU7QUFBQSxJQUNwQixXQUFVLENBQUMsbUJBQW1CLENBQUMsUUFBUSxXQUFXO0FBQ2pELFVBQUksZUFBZSxDQUFDLE1BQU0sU0FBUztBQUNqQyxvQkFBWSxLQUFLO0FBQUEsTUFDbEI7QUFFRCxhQUFPLFlBQVk7QUFDbkIsMkJBQXFCO0FBQ3JCLFlBQU0sVUFBVTtBQUFBLElBQ2pCO0FBR0QsUUFBSSxvQkFBb0I7QUFDdEIsbUJBQWEsS0FBSztBQUFBLElBQ25CO0FBQUEsRUFDRixHQUFFLENBQUMsZ0JBQWdCLGVBQWUsYUFBYSxVQUFVLENBQUM7QUFDM0QsTUFBSSxVQUFVQSxJQUFZLFNBQVUsT0FBTztBQUN6QyxxQkFBaUIsT0FBTyxNQUFNLE1BQU07QUFBQSxFQUN4QyxHQUFLLENBQUMsZ0JBQWdCLENBQUM7QUFDckIsTUFBSSxlQUFlQSxJQUFZLFNBQVUsT0FBTztBQUU5QyxlQUFXLFVBQVUsTUFBTSxlQUFlLEdBQUc7QUFBQSxFQUM5QyxHQUFFLENBQUUsQ0FBQTtBQUNMLE1BQUksY0FBY0EsSUFBWSxTQUFVLE9BQU87QUFDN0MsUUFBSSxTQUFTLFdBQVcsVUFBVSxNQUFNLGVBQWUsR0FBRztBQUMxRCxxQkFBaUIsT0FBTyxNQUFNO0FBQUEsRUFDbEMsR0FBSyxDQUFDLGdCQUFnQixDQUFDO0FBQ3JCLE1BQUksaUJBQWlCQSxJQUFZLFNBQVUsSUFBSTtBQUU3QyxRQUFJLENBQUM7QUFBSTtBQUNULFFBQUksYUFBYSx3QkFBd0I7QUFBQSxNQUN2QyxTQUFTO0FBQUEsSUFDVixJQUFHO0FBQ0osT0FBRyxpQkFBaUIsU0FBUyxTQUFTLFVBQVU7QUFDaEQsT0FBRyxpQkFBaUIsY0FBYyxjQUFjLFVBQVU7QUFDMUQsT0FBRyxpQkFBaUIsYUFBYSxhQUFhLFVBQVU7QUFBQSxFQUN6RCxHQUFFLENBQUMsYUFBYSxjQUFjLE9BQU8sQ0FBQztBQUN2QyxNQUFJLGdCQUFnQkEsSUFBWSxTQUFVLElBQUk7QUFFNUMsUUFBSSxDQUFDO0FBQUk7QUFDVCxPQUFHLG9CQUFvQixTQUFTLFNBQVMsS0FBSztBQUM5QyxPQUFHLG9CQUFvQixjQUFjLGNBQWMsS0FBSztBQUN4RCxPQUFHLG9CQUFvQixhQUFhLGFBQWEsS0FBSztBQUFBLEVBQ3ZELEdBQUUsQ0FBQyxhQUFhLGNBQWMsT0FBTyxDQUFDO0FBQ3ZDTSxJQUFVLFdBQVk7QUFDcEIsUUFBSSxDQUFDO0FBQVc7QUFDaEIsUUFBSSxVQUFVLGFBQWE7QUFDM0IsbUJBQWUsT0FBTztBQUN0QixXQUFPLFdBQVk7QUFDakIsb0JBQWMsT0FBTztBQUFBLElBQzNCO0FBQUEsRUFDRyxHQUFFLENBQUMsV0FBVyxnQkFBZ0IsYUFBYSxDQUFDO0FBQzdDLFNBQU8sU0FBVSxTQUFTO0FBQ3hCLGlCQUFhLFVBQVU7QUFBQSxFQUMzQjtBQUNBO0FBRUEsSUFBSSxhQUFhLENBQUMsYUFBYSxVQUFVLFlBQVksZ0JBQWdCLFVBQVU7QUFDL0UsSUFBSSxjQUFjO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBRVgsVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUNWO0FBRUEsMEJBQTBCLElBQUc7QUFDM0IsS0FBRSxlQUFjO0FBQ2xCO0FBRUEsd0JBQXdCLElBQUc7QUFDekIsS0FBRSxnQkFBZTtBQUNuQjtBQUVBLGdDQUFnQztBQUM5QixNQUFJLE1BQU0sS0FBSztBQUNmLE1BQUksY0FBYyxLQUFLO0FBQ3ZCLE1BQUksZ0JBQWdCLE1BQU0sS0FBSztBQUUvQixNQUFJLFFBQVEsR0FBRztBQUNiLFNBQUssWUFBWTtBQUFBLEVBQ3JCLFdBQWEsa0JBQWtCLGFBQWE7QUFDeEMsU0FBSyxZQUFZLE1BQU07QUFBQSxFQUN4QjtBQUNIO0FBSUEseUJBQXlCO0FBQ3ZCLFNBQU8sa0JBQWtCLFVBQVUsVUFBVTtBQUMvQztBQUVBLElBQUksWUFBWSxDQUFDLENBQUUsUUFBTyxXQUFXLGVBQWUsT0FBTyxZQUFZLE9BQU8sU0FBUztBQUN2RixJQUFJLG9CQUFvQjtBQUN4QixJQUFJLGtCQUFrQjtBQUFBLEVBQ3BCLFNBQVM7QUFBQSxFQUNULFNBQVM7QUFDWDtBQUNBLHVCQUF1QixPQUFNO0FBQzNCLE1BQUksWUFBWSxNQUFLLFdBQ2pCLHdCQUF3QixNQUFLLHNCQUM3Qix1QkFBdUIsMEJBQTBCLFNBQVMsT0FBTztBQUNyRSxNQUFJLGlCQUFpQkQsRUFBTyxDQUFBLENBQUU7QUFDOUIsTUFBSSxlQUFlQSxFQUFPLElBQUk7QUFDOUIsTUFBSSxnQkFBZ0JMLElBQVksU0FBVSxtQkFBbUI7QUFDM0QsUUFBSSxDQUFDO0FBQVc7QUFDaEIsUUFBSSxTQUFTLFNBQVM7QUFDdEIsUUFBSSxjQUFjLFVBQVUsT0FBTztBQUVuQyxRQUFJLHNCQUFzQjtBQUV4QixpQkFBVyxRQUFRLFNBQVUsS0FBSztBQUNoQyxZQUFJLE1BQU0sZUFBZSxZQUFZO0FBQ3JDLHVCQUFlLFFBQVEsT0FBTztBQUFBLE1BQ3RDLENBQU87QUFBQSxJQUNGO0FBR0QsUUFBSSx3QkFBd0Isb0JBQW9CLEdBQUc7QUFDakQsVUFBSSxpQkFBaUIsU0FBUyxlQUFlLFFBQVEsY0FBYyxFQUFFLEtBQUs7QUFDMUUsVUFBSSxjQUFjLFNBQVMsT0FBTyxTQUFTLEtBQUssY0FBYztBQUM5RCxVQUFJLGtCQUFrQixPQUFPLGFBQWEsY0FBYyxrQkFBa0I7QUFDMUUsYUFBTyxLQUFLLFdBQVcsRUFBRSxRQUFRLFNBQVUsS0FBSztBQUM5QyxZQUFJLE1BQU0sWUFBWTtBQUV0QixZQUFJLGFBQWE7QUFDZixzQkFBWSxPQUFPO0FBQUEsUUFDcEI7QUFBQSxNQUNULENBQU87QUFFRCxVQUFJLGFBQWE7QUFDZixvQkFBWSxlQUFlLEdBQUcsT0FBTyxpQkFBaUIsSUFBSTtBQUFBLE1BQzNEO0FBQUEsSUFDRjtBQUdELFFBQUksVUFBVSxpQkFBaUI7QUFFN0IsYUFBTyxpQkFBaUIsYUFBYSxrQkFBa0IsZUFBZTtBQUV0RSxVQUFJLG1CQUFtQjtBQUNyQiwwQkFBa0IsaUJBQWlCLGNBQWMsc0JBQXNCLGVBQWU7QUFDdEYsMEJBQWtCLGlCQUFpQixhQUFhLGdCQUFnQixlQUFlO0FBQUEsTUFDaEY7QUFBQSxJQUNGO0FBR0QseUJBQXFCO0FBQUEsRUFDekIsR0FBSyxDQUFDLG9CQUFvQixDQUFDO0FBQ3pCLE1BQUksbUJBQW1CQSxJQUFZLFNBQVUsbUJBQW1CO0FBQzlELFFBQUksQ0FBQztBQUFXO0FBQ2hCLFFBQUksU0FBUyxTQUFTO0FBQ3RCLFFBQUksY0FBYyxVQUFVLE9BQU87QUFFbkMsd0JBQW9CLEtBQUssSUFBSSxvQkFBb0IsR0FBRyxDQUFDO0FBRXJELFFBQUksd0JBQXdCLG9CQUFvQixHQUFHO0FBQ2pELGlCQUFXLFFBQVEsU0FBVSxLQUFLO0FBQ2hDLFlBQUksTUFBTSxlQUFlLFFBQVE7QUFFakMsWUFBSSxhQUFhO0FBQ2Ysc0JBQVksT0FBTztBQUFBLFFBQ3BCO0FBQUEsTUFDVCxDQUFPO0FBQUEsSUFDRjtBQUdELFFBQUksVUFBVSxpQkFBaUI7QUFDN0IsYUFBTyxvQkFBb0IsYUFBYSxrQkFBa0IsZUFBZTtBQUV6RSxVQUFJLG1CQUFtQjtBQUNyQiwwQkFBa0Isb0JBQW9CLGNBQWMsc0JBQXNCLGVBQWU7QUFDekYsMEJBQWtCLG9CQUFvQixhQUFhLGdCQUFnQixlQUFlO0FBQUEsTUFDbkY7QUFBQSxJQUNGO0FBQUEsRUFDTCxHQUFLLENBQUMsb0JBQW9CLENBQUM7QUFDekJNLElBQVUsV0FBWTtBQUNwQixRQUFJLENBQUM7QUFBVztBQUNoQixRQUFJLFVBQVUsYUFBYTtBQUMzQixrQkFBYyxPQUFPO0FBQ3JCLFdBQU8sV0FBWTtBQUNqQix1QkFBaUIsT0FBTztBQUFBLElBQzlCO0FBQUEsRUFDRyxHQUFFLENBQUMsV0FBVyxlQUFlLGdCQUFnQixDQUFDO0FBQy9DLFNBQU8sU0FBVSxTQUFTO0FBQ3hCLGlCQUFhLFVBQVU7QUFBQSxFQUMzQjtBQUNBO0FBSUEsSUFBSSxrQkFBa0IsNEJBQTJCO0FBQy9DLFNBQU8sU0FBUyxpQkFBaUIsU0FBUyxjQUFjLEtBQUk7QUFDOUQ7QUFFQSxJQUFJLFFBQWdEO0FBQUEsRUFDbEQsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUNWO0FBT0EsdUJBQXVCLE9BQU07QUFDM0IsTUFBSSxXQUFXLE1BQUssVUFDaEIsY0FBYyxNQUFLLGFBQ25CLHNCQUFzQixNQUFLLGdCQUMzQixpQkFBaUIsd0JBQXdCLFNBQVMsT0FBTyxxQkFDekQsaUJBQWlCLE1BQUssZ0JBQ3RCLGdCQUFnQixNQUFLLGVBQ3JCLGNBQWMsTUFBSyxhQUNuQixhQUFhLE1BQUs7QUFDdEIsTUFBSSx5QkFBeUIsaUJBQWlCO0FBQUEsSUFDNUMsV0FBVztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKLENBQUc7QUFDRCxNQUFJLHNCQUFzQixjQUFjO0FBQUEsSUFDdEMsV0FBVztBQUFBLEVBQ2YsQ0FBRztBQUVELE1BQUksWUFBWSxvQkFBbUIsU0FBUztBQUMxQywyQkFBdUIsT0FBTztBQUM5Qix3QkFBb0IsT0FBTztBQUFBLEVBQy9CO0FBRUUsU0FBTyxJQUFJdEIsS0FBVSxNQUFNLGVBQWUsSUFBSSxPQUFPO0FBQUEsSUFDbkQsU0FBUztBQUFBLElBQ1QsS0FBSztBQUFBLEVBQ1QsQ0FBRyxHQUFHLFNBQVMsU0FBUyxDQUFDO0FBQ3pCO0FBRUEsSUFBSSxtQkFBbUIsMkJBQTBCLE9BQU87QUFDdEQsU0FBTyxNQUFNO0FBQ2Y7QUFDQSxJQUFJLG1CQUFtQix3QkFBd0IsUUFBUTtBQUNyRCxTQUFPLE9BQU87QUFDaEI7QUFDQSxJQUFJLG1CQUFtQix3QkFBd0IsUUFBUTtBQUNyRCxTQUFPLE9BQU87QUFDaEI7QUFDQSxJQUFJLG1CQUFtQiwyQkFBMEIsUUFBUTtBQUN2RCxTQUFPLENBQUMsQ0FBQyxPQUFPO0FBQ2xCO0FBRUEsSUFBSSxnQkFBZ0I7QUFBQSxFQUNsQixnQkFBZ0I7QUFBQSxFQUNoQixXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQUEsRUFDVCxtQkFBbUI7QUFBQSxFQUNuQixPQUFPO0FBQUEsRUFDUCxjQUFjO0FBQUEsRUFDZCxxQkFBcUI7QUFBQSxFQUNyQixvQkFBb0I7QUFBQSxFQUNwQixPQUFPO0FBQUEsRUFDUCxrQkFBa0I7QUFBQSxFQUNsQixnQkFBZ0I7QUFBQSxFQUNoQixNQUFNO0FBQUEsRUFDTixVQUFVO0FBQUEsRUFDVixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixpQkFBaUI7QUFBQSxFQUNqQixrQkFBa0I7QUFBQSxFQUNsQixrQkFBa0I7QUFBQSxFQUNsQixRQUFRO0FBQUEsRUFDUixhQUFhO0FBQUEsRUFDYixhQUFhdUI7QUFBQUEsRUFDYixnQkFBZ0I7QUFDbEI7QUF3QkEsSUFBSSxTQUFTO0FBQUEsRUFDWCxTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixhQUFhO0FBQUEsRUFDYixVQUFVO0FBQUEsRUFDVixVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQ2I7QUFDQSxJQUFJLGVBQWU7QUFFbkIsSUFBSSxXQUFXO0FBRWYsSUFBSSxnQkFBZ0I7QUFFcEIsSUFBSSxhQUFhLFdBQVc7QUFDNUIsSUFBSSxVQUFVO0FBQUEsRUFDWjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Y7QUFDQSxJQUFJLGVBQWU7QUFBQSxFQUNqQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Y7QUFFQSxJQUFJLGVBQWU7QUFBQSxFQUNqQixhQUFhO0FBQUEsRUFDYix1QkFBdUI7QUFBQSxFQUN2QixtQkFBbUIsZUFBZ0I7QUFBQSxFQUNuQyxtQkFBbUIsQ0FBQyxlQUFnQjtBQUFBLEVBQ3BDLG1CQUFtQjtBQUFBLEVBQ25CLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVksQ0FBRTtBQUFBLEVBQ2QsMEJBQTBCO0FBQUEsRUFDMUIsbUJBQW1CO0FBQUEsRUFDbkIsY0FBYyxhQUFjO0FBQUEsRUFDNUI7QUFBQSxFQUNBLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULE9BQU87QUFBQSxFQUNQLGNBQWM7QUFBQSxFQUNkO0FBQUEsRUFDQSxnQkFBZ0IsMEJBQTBCO0FBQ3hDLFdBQU87QUFBQSxFQUNSO0FBQUEsRUFDRCxlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixZQUFZO0FBQUEsRUFDWixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCx1QkFBdUI7QUFBQSxFQUN2QiwwQkFBMEIsQ0FBQyxlQUFnQjtBQUFBLEVBQzNDLGtCQUFrQiw0QkFBNEI7QUFDNUMsV0FBTztBQUFBLEVBQ1I7QUFBQSxFQUNELGlCQUFpQjtBQUFBLEVBQ2pCLGlCQUFpQjtBQUFBLEVBQ2pCLFNBQVMsQ0FBRTtBQUFBLEVBQ1gsVUFBVTtBQUFBLEVBQ1YsYUFBYTtBQUFBLEVBQ2Isb0JBQW9CLDRCQUE0QixPQUFNO0FBQ3BELFFBQUksUUFBUSxNQUFLO0FBQ2pCLFdBQU8sR0FBRyxPQUFPLE9BQU8sU0FBUyxFQUFFLE9BQU8sVUFBVSxJQUFJLE1BQU0sSUFBSSxZQUFZO0FBQUEsRUFDL0U7QUFBQSxFQUNELFFBQVEsQ0FBRTtBQUFBLEVBQ1YsVUFBVTtBQUFBLEVBQ1YsaUJBQWlCO0FBQ25CO0FBRUEsNkJBQTZCLE9BQU8sUUFBUSxhQUFhLE9BQU87QUFDOUQsTUFBSSxhQUFhLGtCQUFrQixPQUFPLFFBQVEsV0FBVztBQUU3RCxNQUFJLGFBQWEsa0JBQWtCLE9BQU8sUUFBUSxXQUFXO0FBRTdELE1BQUksUUFBUSxnQkFBZSxPQUFPLE1BQU07QUFDeEMsTUFBSSxRQUFRLGdCQUFlLE9BQU8sTUFBTTtBQUN4QyxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQ0E7QUFFQSxpQ0FBaUMsT0FBTyxhQUFhO0FBQ25ELFNBQU8sTUFBTSxRQUFRLElBQUksU0FBVSxlQUFlLG9CQUFvQjtBQUNwRSxRQUFJLGFBQWEsZUFBZTtBQUM5QixVQUFJLHFCQUFxQixjQUFjLFFBQVEsSUFBSSxTQUFVLFFBQVEsYUFBYTtBQUNoRixlQUFPLG9CQUFvQixPQUFPLFFBQVEsYUFBYSxXQUFXO0FBQUEsTUFDMUUsQ0FBTyxFQUFFLE9BQU8sU0FBVSxvQkFBbUI7QUFDckMsZUFBTyxZQUFZLE9BQU8sa0JBQWlCO0FBQUEsTUFDbkQsQ0FBTztBQUNELGFBQU8sbUJBQW1CLFNBQVMsSUFBSTtBQUFBLFFBQ3JDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULE9BQU87QUFBQSxNQUNSLElBQUc7QUFBQSxJQUNMO0FBRUQsUUFBSSxvQkFBb0Isb0JBQW9CLE9BQU8sZUFBZSxhQUFhLGtCQUFrQjtBQUNqRyxXQUFPLFlBQVksT0FBTyxpQkFBaUIsSUFBSSxvQkFBb0I7QUFBQSxFQUN2RSxDQUFHLEVBQUUsT0FBTyxVQUFVO0FBQ3RCO0FBRUEscURBQXFELG9CQUFvQjtBQUN2RSxTQUFPLG1CQUFtQixPQUFPLFNBQVUsb0JBQW9CLG1CQUFtQjtBQUNoRixRQUFJLGtCQUFrQixTQUFTLFNBQVM7QUFDdEMseUJBQW1CLEtBQUssTUFBTSxvQkFBb0IsbUJBQW1CLGtCQUFrQixRQUFRLElBQUksU0FBVSxRQUFRO0FBQ25ILGVBQU8sT0FBTztBQUFBLE1BQ2YsQ0FBQSxDQUFDLENBQUM7QUFBQSxJQUNULE9BQVc7QUFDTCx5QkFBbUIsS0FBSyxrQkFBa0IsSUFBSTtBQUFBLElBQy9DO0FBRUQsV0FBTztBQUFBLEVBQ1IsR0FBRSxDQUFFLENBQUE7QUFDUDtBQUVBLCtCQUErQixPQUFPLGFBQWE7QUFDakQsU0FBTyw0Q0FBNEMsd0JBQXdCLE9BQU8sV0FBVyxDQUFDO0FBQ2hHO0FBRUEscUJBQXFCLE9BQU8sbUJBQW1CO0FBQzdDLE1BQUksb0JBQW9CLE1BQU0sWUFDMUIsYUFBYSxzQkFBc0IsU0FBUyxLQUFLO0FBQ3JELE1BQUksT0FBTyxrQkFBa0IsTUFDekIsYUFBYSxrQkFBa0IsWUFDL0IsUUFBUSxrQkFBa0IsT0FDMUIsUUFBUSxrQkFBa0I7QUFDOUIsU0FBUSxFQUFDLDBCQUEwQixLQUFLLEtBQUssQ0FBQyxlQUFlLGNBQWMsT0FBTztBQUFBLElBQ2hGO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNELEdBQUUsVUFBVTtBQUNmO0FBRUEsNkJBQTZCLE9BQU8saUJBQWlCO0FBQ25ELE1BQUksZUFBZSxNQUFNLGNBQ3JCLGtCQUFrQixNQUFNO0FBQzVCLE1BQUksbUJBQW1CLGdCQUFnQixRQUFRLFlBQVk7QUFFM0QsTUFBSSxtQkFBbUIsSUFBSTtBQUN6QixRQUFJLG1CQUFtQixnQkFBZ0IsUUFBUSxZQUFZO0FBRTNELFFBQUksbUJBQW1CLElBQUk7QUFFekIsYUFBTztBQUFBLElBQ2IsV0FBZSxtQkFBbUIsZ0JBQWdCLFFBQVE7QUFHcEQsYUFBTyxnQkFBZ0I7QUFBQSxJQUN4QjtBQUFBLEVBQ0Y7QUFFRCxTQUFPO0FBQ1Q7QUFFQSw4QkFBOEIsT0FBTyxVQUFTO0FBQzVDLE1BQUksb0JBQW9CLE1BQU07QUFDOUIsU0FBTyxxQkFBcUIsU0FBUSxRQUFRLGlCQUFpQixJQUFJLEtBQUssb0JBQW9CLFNBQVE7QUFDcEc7QUFFQSxJQUFJLGtCQUFpQix5QkFBd0IsT0FBTyxNQUFNO0FBQ3hELFNBQU8sTUFBTSxlQUFlLElBQUk7QUFDbEM7QUFFQSxJQUFJLGtCQUFpQix5QkFBd0IsT0FBTyxNQUFNO0FBQ3hELFNBQU8sTUFBTSxlQUFlLElBQUk7QUFDbEM7QUFFQSwyQkFBMkIsT0FBTyxRQUFRLGFBQWE7QUFDckQsU0FBTyxPQUFPLE1BQU0scUJBQXFCLGFBQWEsTUFBTSxpQkFBaUIsUUFBUSxXQUFXLElBQUk7QUFDdEc7QUFFQSwyQkFBMkIsT0FBTyxRQUFRLGFBQWE7QUFDckQsTUFBSSxZQUFZLFFBQVEsTUFBTSxJQUFJO0FBQUksV0FBTztBQUU3QyxNQUFJLE9BQU8sTUFBTSxxQkFBcUIsWUFBWTtBQUNoRCxXQUFPLE1BQU0saUJBQWlCLFFBQVEsV0FBVztBQUFBLEVBQ2xEO0FBRUQsTUFBSSxZQUFZLGdCQUFlLE9BQU8sTUFBTTtBQUM1QyxTQUFPLFlBQVksS0FBSyxTQUFVLEdBQUc7QUFDbkMsV0FBTyxnQkFBZSxPQUFPLENBQUMsTUFBTTtBQUFBLEVBQ3hDLENBQUc7QUFDSDtBQUVBLHVCQUF1QixPQUFPLFFBQVEsWUFBWTtBQUNoRCxTQUFPLE1BQU0sZUFBZSxNQUFNLGFBQWEsUUFBUSxVQUFVLElBQUk7QUFDdkU7QUFFQSxJQUFJLDRCQUE0QixvQ0FBbUMsT0FBTztBQUN4RSxNQUFJLHNCQUFzQixNQUFNLHFCQUM1QixVQUFVLE1BQU07QUFDcEIsTUFBSSx3QkFBd0I7QUFBVyxXQUFPO0FBQzlDLFNBQU87QUFDVDtBQUVBLElBQUksYUFBYTtBQUVqQixJQUFJQyxXQUFzQix5QkFBVSxZQUFZO0FBQzlDLFlBQVUsU0FBUSxVQUFVO0FBRTVCLE1BQUksU0FBUyxhQUFhLE9BQU07QUFTaEMsbUJBQWdCLFFBQVE7QUFDdEIsUUFBSTtBQUVKLG9CQUFnQixNQUFNLE9BQU07QUFFNUIsWUFBUSxPQUFPLEtBQUssTUFBTSxNQUFNO0FBQ2hDLFVBQU0sUUFBUTtBQUFBLE1BQ1osZUFBZTtBQUFBLE1BQ2YsZUFBZTtBQUFBLE1BQ2YsY0FBYztBQUFBLE1BQ2QsZUFBZTtBQUFBLE1BQ2YsV0FBVztBQUFBLE1BQ1gsYUFBYSxDQUFFO0FBQUEsTUFDZix5QkFBeUI7QUFBQSxNQUN6QixnQkFBZ0I7QUFBQSxNQUNoQiwwQkFBMEI7QUFBQSxNQUMxQixXQUFXO0FBQUEsSUFDakI7QUFDSSxVQUFNLG1CQUFtQjtBQUN6QixVQUFNLGNBQWM7QUFDcEIsVUFBTSxjQUFjO0FBQ3BCLFVBQU0sZ0JBQWdCO0FBQ3RCLFVBQU0sZ0JBQWdCO0FBQ3RCLFVBQU0saUJBQWlCO0FBQ3ZCLFVBQU0saUJBQWlCO0FBQ3ZCLFVBQU0sZ0NBQWdDO0FBQ3RDLFVBQU0saUJBQWlCO0FBQ3ZCLFVBQU0sYUFBYTtBQUVuQixVQUFNLGdCQUFnQixTQUFVLEtBQUs7QUFDbkMsWUFBTSxhQUFhO0FBQUEsSUFDekI7QUFFSSxVQUFNLG1CQUFtQjtBQUV6QixVQUFNLHNCQUFzQixTQUFVLEtBQUs7QUFDekMsWUFBTSxtQkFBbUI7QUFBQSxJQUMvQjtBQUVJLFVBQU0sY0FBYztBQUVwQixVQUFNLGlCQUFpQixTQUFVLEtBQUs7QUFDcEMsWUFBTSxjQUFjO0FBQUEsSUFDMUI7QUFFSSxVQUFNLFdBQVc7QUFFakIsVUFBTSxjQUFjLFNBQVUsS0FBSztBQUNqQyxZQUFNLFdBQVc7QUFBQSxJQUN2QjtBQUVJLFVBQU0sUUFBUSxNQUFNO0FBQ3BCLFVBQU0sT0FBTyxNQUFNO0FBRW5CLFVBQU0sV0FBVyxTQUFVLFVBQVUsWUFBWTtBQUMvQyxVQUFJLGNBQWMsTUFBTSxPQUNwQixZQUFXLFlBQVksVUFDdkIsT0FBTyxZQUFZO0FBQ3ZCLGlCQUFXLE9BQU87QUFFbEIsWUFBTSxhQUFhLFVBQVUsVUFBVTtBQUV2QyxnQkFBUyxVQUFVLFVBQVU7QUFBQSxJQUNuQztBQUVJLFVBQU0sV0FBVyxTQUFVLFVBQVUsUUFBUSxRQUFRO0FBQ25ELFVBQUksZUFBZSxNQUFNLE9BQ3JCLG9CQUFvQixhQUFhLG1CQUNqQyxVQUFVLGFBQWEsU0FDdkIsYUFBYSxhQUFhO0FBRTlCLFlBQU0sY0FBYyxJQUFJO0FBQUEsUUFDdEIsUUFBUTtBQUFBLFFBQ1IsZ0JBQWdCO0FBQUEsTUFDeEIsQ0FBTztBQUVELFVBQUksbUJBQW1CO0FBQ3JCLGNBQU0sU0FBUztBQUFBLFVBQ2IsMEJBQTBCLENBQUM7QUFBQSxRQUNyQyxDQUFTO0FBRUQsY0FBTSxZQUFXO0FBQUEsTUFDbEI7QUFHRCxZQUFNLFNBQVM7QUFBQSxRQUNiLHlCQUF5QjtBQUFBLE1BQ2pDLENBQU87QUFFRCxZQUFNLFNBQVMsVUFBVTtBQUFBLFFBQ3ZCO0FBQUEsUUFDQTtBQUFBLE1BQ1IsQ0FBTztBQUFBLElBQ1A7QUFFSSxVQUFNLGVBQWUsU0FBVSxVQUFVO0FBQ3ZDLFVBQUksZUFBZSxNQUFNLE9BQ3JCLG9CQUFvQixhQUFhLG1CQUNqQyxVQUFVLGFBQWEsU0FDdkIsT0FBTyxhQUFhO0FBQ3hCLFVBQUksY0FBYyxNQUFNLE1BQU07QUFFOUIsVUFBSSxhQUFhLFdBQVcsTUFBTSxpQkFBaUIsVUFBVSxXQUFXO0FBRXhFLFVBQUksYUFBYSxNQUFNLGlCQUFpQixVQUFVLFdBQVc7QUFFN0QsVUFBSSxZQUFZO0FBQ2QsWUFBSSxZQUFZLE1BQU0sZUFBZSxRQUFRO0FBRTdDLGNBQU0sU0FBUyxrQkFBa0IsWUFBWSxPQUFPLFNBQVUsR0FBRztBQUMvRCxpQkFBTyxNQUFNLGVBQWUsQ0FBQyxNQUFNO0FBQUEsUUFDN0MsQ0FBUyxDQUFDLEdBQUcsbUJBQW1CLFFBQVE7QUFBQSxNQUN4QyxXQUFpQixDQUFDLFlBQVk7QUFFdEIsWUFBSSxTQUFTO0FBQ1gsZ0JBQU0sU0FBUyxrQkFBa0IsQ0FBRSxFQUFDLE9BQU8sbUJBQW1CLFdBQVcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsaUJBQWlCLFFBQVE7QUFBQSxRQUM3SCxPQUFlO0FBQ0wsZ0JBQU0sU0FBUyxtQkFBbUIsUUFBUSxHQUFHLGVBQWU7QUFBQSxRQUM3RDtBQUFBLE1BQ1QsT0FBYTtBQUNMLGNBQU0sYUFBYSxtQkFBbUIsUUFBUSxHQUFHO0FBQUEsVUFDL0MsUUFBUTtBQUFBLFVBQ1IsUUFBUTtBQUFBLFVBQ1I7QUFBQSxRQUNWLENBQVM7QUFFRDtBQUFBLE1BQ0Q7QUFFRCxVQUFJLG1CQUFtQjtBQUNyQixjQUFNLFVBQVM7QUFBQSxNQUNoQjtBQUFBLElBQ1A7QUFFSSxVQUFNLGNBQWMsU0FBVSxjQUFjO0FBQzFDLFVBQUksVUFBVSxNQUFNLE1BQU07QUFDMUIsVUFBSSxjQUFjLE1BQU0sTUFBTTtBQUU5QixVQUFJLFlBQVksTUFBTSxlQUFlLFlBQVk7QUFFakQsVUFBSSxnQkFBZ0IsWUFBWSxPQUFPLFNBQVUsR0FBRztBQUNsRCxlQUFPLE1BQU0sZUFBZSxDQUFDLE1BQU07QUFBQSxNQUMzQyxDQUFPO0FBQ0QsVUFBSSxXQUFXLGFBQWEsU0FBUyxlQUFlLGNBQWMsTUFBTSxJQUFJO0FBRTVFLFlBQU0sU0FBUyxVQUFVO0FBQUEsUUFDdkIsUUFBUTtBQUFBLFFBQ1I7QUFBQSxNQUNSLENBQU87QUFFRCxZQUFNLFdBQVU7QUFBQSxJQUN0QjtBQUVJLFVBQU0sYUFBYSxXQUFZO0FBQzdCLFVBQUksY0FBYyxNQUFNLE1BQU07QUFFOUIsWUFBTSxTQUFTLGFBQWEsTUFBTSxNQUFNLFNBQVMsQ0FBQSxHQUFJLElBQUksR0FBRztBQUFBLFFBQzFELFFBQVE7QUFBQSxRQUNSLGVBQWU7QUFBQSxNQUN2QixDQUFPO0FBQUEsSUFDUDtBQUVJLFVBQU0sV0FBVyxXQUFZO0FBQzNCLFVBQUksVUFBVSxNQUFNLE1BQU07QUFDMUIsVUFBSSxjQUFjLE1BQU0sTUFBTTtBQUM5QixVQUFJLG9CQUFvQixZQUFZLFlBQVksU0FBUztBQUN6RCxVQUFJLGdCQUFnQixZQUFZLE1BQU0sR0FBRyxZQUFZLFNBQVMsQ0FBQztBQUMvRCxVQUFJLFdBQVcsYUFBYSxTQUFTLGVBQWUsY0FBYyxNQUFNLElBQUk7QUFFNUUsWUFBTSxTQUFTLFVBQVU7QUFBQSxRQUN2QixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsTUFDdEIsQ0FBTztBQUFBLElBQ1A7QUFFSSxVQUFNLFdBQVcsV0FBWTtBQUMzQixhQUFPLE1BQU0sTUFBTTtBQUFBLElBQ3pCO0FBRUksVUFBTSxLQUFLLFdBQVk7QUFDckIsZUFBUyxPQUFPLFVBQVUsUUFBUSxPQUFPLElBQUksTUFBTSxJQUFJLEdBQUcsT0FBTyxHQUFHLE9BQU8sTUFBTSxRQUFRO0FBQ3ZGLGFBQUssUUFBUSxVQUFVO0FBQUEsTUFDeEI7QUFFRCxhQUFPLFdBQVcsTUFBTSxRQUFRLENBQUMsTUFBTSxNQUFNLGVBQWUsRUFBRSxPQUFPLElBQUksQ0FBQztBQUFBLElBQ2hGO0FBRUksVUFBTSxpQkFBaUIsU0FBVSxNQUFNO0FBQ3JDLGFBQU8sZ0JBQWUsTUFBTSxPQUFPLElBQUk7QUFBQSxJQUM3QztBQUVJLFVBQU0saUJBQWlCLFNBQVUsTUFBTTtBQUNyQyxhQUFPLGdCQUFlLE1BQU0sT0FBTyxJQUFJO0FBQUEsSUFDN0M7QUFFSSxVQUFNLFlBQVksU0FBVSxLQUFLLE9BQU87QUFDdEMsVUFBSSxPQUFPLGNBQWMsS0FBSyxLQUFLO0FBQ25DLFdBQUssWUFBWTtBQUNqQixVQUFJLFNBQVMsTUFBTSxNQUFNLE9BQU87QUFDaEMsYUFBTyxTQUFTLE9BQU8sTUFBTSxLQUFLLElBQUk7QUFBQSxJQUM1QztBQUVJLFVBQU0sZUFBZSxTQUFVLFNBQVM7QUFDdEMsYUFBTyxHQUFHLE9BQU8sTUFBTSxnQkFBZ0IsR0FBRyxFQUFFLE9BQU8sT0FBTztBQUFBLElBQ2hFO0FBRUksVUFBTSxnQkFBZ0IsV0FBWTtBQUNoQyxhQUFPLGtCQUFrQixNQUFNLEtBQUs7QUFBQSxJQUMxQztBQUVJLFVBQU0sMEJBQTBCLFdBQVk7QUFDMUMsYUFBTyx3QkFBd0IsTUFBTSxPQUFPLE1BQU0sTUFBTSxXQUFXO0FBQUEsSUFDekU7QUFFSSxVQUFNLHdCQUF3QixXQUFZO0FBQ3hDLGFBQU8sTUFBTSxNQUFNLGFBQWEsTUFBTSx3QkFBeUIsSUFBRztJQUN4RTtBQUVJLFVBQU0sd0JBQXdCLFdBQVk7QUFDeEMsYUFBTyw0Q0FBNEMsTUFBTSx3QkFBdUIsQ0FBRTtBQUFBLElBQ3hGO0FBRUksVUFBTSxzQkFBc0IsV0FBWTtBQUN0QyxhQUFPLE1BQU0sTUFBTSxhQUFhLE1BQU0sc0JBQXVCLElBQUc7SUFDdEU7QUFFSSxVQUFNLGVBQWUsU0FBVSxPQUFPLFlBQVk7QUFDaEQsWUFBTSxTQUFTO0FBQUEsUUFDYixlQUFlLGVBQWU7QUFBQSxVQUM1QjtBQUFBLFFBQ0QsR0FBRSxVQUFVO0FBQUEsTUFDckIsQ0FBTztBQUFBLElBQ1A7QUFFSSxVQUFNLGtCQUFrQixTQUFVLE9BQU87QUFDdkMsVUFBSSxNQUFNLFdBQVcsR0FBRztBQUN0QjtBQUFBLE1BQ0Q7QUFFRCxZQUFNLGdCQUFlO0FBQ3JCLFlBQU0sZUFBYztBQUVwQixZQUFNLFdBQVU7QUFBQSxJQUN0QjtBQUVJLFVBQU0sa0JBQWtCLFNBQVUsT0FBTztBQUN2QyxZQUFNLG1CQUFtQjtBQUFBLElBQy9CO0FBRUksVUFBTSxxQkFBcUIsU0FBVSxPQUFPO0FBRTFDLFVBQUksTUFBTSxrQkFBa0I7QUFDMUI7QUFBQSxNQUNEO0FBRUQsVUFBSSxrQkFBa0IsTUFBTSxNQUFNO0FBRWxDLFVBQUksQ0FBQyxNQUFNLE1BQU0sV0FBVztBQUMxQixZQUFJLGlCQUFpQjtBQUNuQixnQkFBTSxpQkFBaUI7QUFBQSxRQUN4QjtBQUVELGNBQU0sV0FBVTtBQUFBLE1BQ2pCLFdBQVUsQ0FBQyxNQUFNLE1BQU0sWUFBWTtBQUNsQyxZQUFJLGlCQUFpQjtBQUNuQixnQkFBTSxTQUFTLE9BQU87QUFBQSxRQUN2QjtBQUFBLE1BQ1QsT0FBYTtBQUNMLFlBQUksTUFBTSxPQUFPLFlBQVksV0FBVyxNQUFNLE9BQU8sWUFBWSxZQUFZO0FBQzNFLGdCQUFNLFlBQVc7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFFRCxVQUFJLE1BQU0sT0FBTyxZQUFZLFdBQVcsTUFBTSxPQUFPLFlBQVksWUFBWTtBQUMzRSxjQUFNLGVBQWM7QUFBQSxNQUNyQjtBQUFBLElBQ1A7QUFFSSxVQUFNLCtCQUErQixTQUFVLE9BQU87QUFFcEQsVUFBSSxTQUFTLE1BQU0sU0FBUyxlQUFlLE1BQU0sV0FBVyxHQUFHO0FBQzdEO0FBQUEsTUFDRDtBQUVELFVBQUksTUFBTSxNQUFNO0FBQVk7QUFDNUIsVUFBSSxlQUFlLE1BQU0sT0FDckIsVUFBVSxhQUFhLFNBQ3ZCLGFBQWEsYUFBYTtBQUU5QixZQUFNLFdBQVU7QUFFaEIsVUFBSSxZQUFZO0FBQ2QsY0FBTSxTQUFTO0FBQUEsVUFDYiwwQkFBMEIsQ0FBQztBQUFBLFFBQ3JDLENBQVM7QUFFRCxjQUFNLFlBQVc7QUFBQSxNQUN6QixPQUFhO0FBQ0wsY0FBTSxTQUFTLE9BQU87QUFBQSxNQUN2QjtBQUVELFlBQU0sZUFBYztBQUFBLElBQzFCO0FBRUksVUFBTSw0QkFBNEIsU0FBVSxPQUFPO0FBRWpELFVBQUksU0FBUyxNQUFNLFNBQVMsZUFBZSxNQUFNLFdBQVcsR0FBRztBQUM3RDtBQUFBLE1BQ0Q7QUFFRCxZQUFNLFdBQVU7QUFFaEIsWUFBTSxlQUFjO0FBQ3BCLFlBQU0saUJBQWlCO0FBRXZCLFVBQUksTUFBTSxTQUFTLFlBQVk7QUFDN0IsY0FBTSxXQUFVO0FBQUEsTUFDeEIsT0FBYTtBQUNMLG1CQUFXLFdBQVk7QUFDckIsaUJBQU8sTUFBTTtRQUN2QixDQUFTO0FBQUEsTUFDRjtBQUFBLElBQ1A7QUFFSSxVQUFNLFdBQVcsU0FBVSxPQUFPO0FBQ2hDLFVBQUksT0FBTyxNQUFNLE1BQU0sc0JBQXNCLFdBQVc7QUFDdEQsWUFBSSxNQUFNLGtCQUFrQixlQUFlLGtCQUFrQixNQUFNLE1BQU0sR0FBRztBQUMxRSxnQkFBTSxNQUFNO1FBQ2I7QUFBQSxNQUNGLFdBQVUsT0FBTyxNQUFNLE1BQU0sc0JBQXNCLFlBQVk7QUFDOUQsWUFBSSxNQUFNLE1BQU0sa0JBQWtCLEtBQUssR0FBRztBQUN4QyxnQkFBTSxNQUFNO1FBQ2I7QUFBQSxNQUNGO0FBQUEsSUFDUDtBQUVJLFVBQU0scUJBQXFCLFdBQVk7QUFDckMsWUFBTSxjQUFjO0FBQUEsSUFDMUI7QUFFSSxVQUFNLG1CQUFtQixXQUFZO0FBQ25DLFlBQU0sY0FBYztBQUFBLElBQzFCO0FBRUksVUFBTSxlQUFlLFNBQVUsUUFBTztBQUNwQyxVQUFJLFVBQVUsT0FBTTtBQUNwQixVQUFJLFFBQVEsV0FBVyxRQUFRLEtBQUssQ0FBQztBQUVyQyxVQUFJLENBQUMsT0FBTztBQUNWO0FBQUEsTUFDRDtBQUVELFlBQU0sZ0JBQWdCLE1BQU07QUFDNUIsWUFBTSxnQkFBZ0IsTUFBTTtBQUM1QixZQUFNLGlCQUFpQjtBQUFBLElBQzdCO0FBRUksVUFBTSxjQUFjLFNBQVUsT0FBTztBQUNuQyxVQUFJLFVBQVUsTUFBTTtBQUNwQixVQUFJLFFBQVEsV0FBVyxRQUFRLEtBQUssQ0FBQztBQUVyQyxVQUFJLENBQUMsT0FBTztBQUNWO0FBQUEsTUFDRDtBQUVELFVBQUksU0FBUyxLQUFLLElBQUksTUFBTSxVQUFVLE1BQU0sYUFBYTtBQUN6RCxVQUFJLFNBQVMsS0FBSyxJQUFJLE1BQU0sVUFBVSxNQUFNLGFBQWE7QUFDekQsVUFBSSxnQkFBZ0I7QUFDcEIsWUFBTSxpQkFBaUIsU0FBUyxpQkFBaUIsU0FBUztBQUFBLElBQ2hFO0FBRUksVUFBTSxhQUFhLFNBQVUsT0FBTztBQUNsQyxVQUFJLE1BQU07QUFBZ0I7QUFJMUIsVUFBSSxNQUFNLGNBQWMsQ0FBQyxNQUFNLFdBQVcsU0FBUyxNQUFNLE1BQU0sS0FBSyxNQUFNLGVBQWUsQ0FBQyxNQUFNLFlBQVksU0FBUyxNQUFNLE1BQU0sR0FBRztBQUNsSSxjQUFNLFVBQVM7QUFBQSxNQUNoQjtBQUdELFlBQU0sZ0JBQWdCO0FBQ3RCLFlBQU0sZ0JBQWdCO0FBQUEsSUFDNUI7QUFFSSxVQUFNLG9CQUFvQixTQUFVLE9BQU87QUFDekMsVUFBSSxNQUFNO0FBQWdCO0FBRTFCLFlBQU0sbUJBQW1CLEtBQUs7QUFBQSxJQUNwQztBQUVJLFVBQU0sMkJBQTJCLFNBQVUsT0FBTztBQUNoRCxVQUFJLE1BQU07QUFBZ0I7QUFFMUIsWUFBTSwwQkFBMEIsS0FBSztBQUFBLElBQzNDO0FBRUksVUFBTSw4QkFBOEIsU0FBVSxPQUFPO0FBQ25ELFVBQUksTUFBTTtBQUFnQjtBQUUxQixZQUFNLDZCQUE2QixLQUFLO0FBQUEsSUFDOUM7QUFFSSxVQUFNLG9CQUFvQixTQUFVLE9BQU87QUFDekMsVUFBSSxpQkFBaUIsTUFBTSxNQUFNO0FBQ2pDLFVBQUksYUFBYSxNQUFNLGNBQWM7QUFFckMsWUFBTSxTQUFTO0FBQUEsUUFDYiwwQkFBMEI7QUFBQSxNQUNsQyxDQUFPO0FBRUQsWUFBTSxjQUFjLFlBQVk7QUFBQSxRQUM5QixRQUFRO0FBQUEsUUFDUjtBQUFBLE1BQ1IsQ0FBTztBQUVELFVBQUksQ0FBQyxNQUFNLE1BQU0sWUFBWTtBQUMzQixjQUFNLFdBQVU7QUFBQSxNQUNqQjtBQUFBLElBQ1A7QUFFSSxVQUFNLGVBQWUsU0FBVSxPQUFPO0FBQ3BDLFVBQUksTUFBTSxNQUFNLFNBQVM7QUFDdkIsY0FBTSxNQUFNLFFBQVEsS0FBSztBQUFBLE1BQzFCO0FBRUQsWUFBTSxTQUFTO0FBQUEsUUFDYiwwQkFBMEI7QUFBQSxRQUMxQixXQUFXO0FBQUEsTUFDbkIsQ0FBTztBQUVELFVBQUksTUFBTSxrQkFBa0IsTUFBTSxNQUFNLGlCQUFpQjtBQUN2RCxjQUFNLFNBQVMsT0FBTztBQUFBLE1BQ3ZCO0FBRUQsWUFBTSxpQkFBaUI7QUFBQSxJQUM3QjtBQUVJLFVBQU0sY0FBYyxTQUFVLE9BQU87QUFDbkMsVUFBSSxpQkFBaUIsTUFBTSxNQUFNO0FBRWpDLFVBQUksTUFBTSxlQUFlLE1BQU0sWUFBWSxTQUFTLFNBQVMsYUFBYSxHQUFHO0FBQzNFLGNBQU0sU0FBUztBQUVmO0FBQUEsTUFDRDtBQUVELFVBQUksTUFBTSxNQUFNLFFBQVE7QUFDdEIsY0FBTSxNQUFNLE9BQU8sS0FBSztBQUFBLE1BQ3pCO0FBRUQsWUFBTSxjQUFjLElBQUk7QUFBQSxRQUN0QixRQUFRO0FBQUEsUUFDUjtBQUFBLE1BQ1IsQ0FBTztBQUVELFlBQU0sWUFBVztBQUVqQixZQUFNLFNBQVM7QUFBQSxRQUNiLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNuQixDQUFPO0FBQUEsSUFDUDtBQUVJLFVBQU0sZ0JBQWdCLFNBQVUsZUFBZTtBQUM3QyxVQUFJLE1BQU0sb0JBQW9CLE1BQU0sTUFBTSxrQkFBa0IsZUFBZTtBQUN6RTtBQUFBLE1BQ0Q7QUFFRCxZQUFNLFNBQVM7QUFBQSxRQUNiO0FBQUEsTUFDUixDQUFPO0FBQUEsSUFDUDtBQUVJLFVBQU0sNEJBQTRCLFdBQVk7QUFDNUMsYUFBTywwQkFBMEIsTUFBTSxLQUFLO0FBQUEsSUFDbEQ7QUFFSSxVQUFNLFlBQVksU0FBVSxPQUFPO0FBQ2pDLFVBQUksZUFBZSxNQUFNLE9BQ3JCLFVBQVUsYUFBYSxTQUN2Qix3QkFBd0IsYUFBYSx1QkFDckMsb0JBQW9CLGFBQWEsbUJBQ2pDLGFBQWEsYUFBYSxZQUMxQixjQUFjLGFBQWEsYUFDM0IsYUFBYSxhQUFhLFlBQzFCLGFBQWEsYUFBYSxZQUMxQixZQUFZLGFBQWEsV0FDekIsa0JBQWtCLGFBQWEsaUJBQy9CLGtCQUFrQixhQUFhO0FBQ25DLFVBQUksY0FBYyxNQUFNLE9BQ3BCLGdCQUFnQixZQUFZLGVBQzVCLGVBQWUsWUFBWSxjQUMzQixjQUFjLFlBQVk7QUFDOUIsVUFBSTtBQUFZO0FBRWhCLFVBQUksT0FBTyxjQUFjLFlBQVk7QUFDbkMsa0JBQVUsS0FBSztBQUVmLFlBQUksTUFBTSxrQkFBa0I7QUFDMUI7QUFBQSxRQUNEO0FBQUEsTUFDRjtBQUdELFlBQU0sbUJBQW1CO0FBRXpCLGNBQVEsTUFBTTtBQUFBLGFBQ1A7QUFDSCxjQUFJLENBQUMsV0FBVztBQUFZO0FBRTVCLGdCQUFNLFdBQVcsVUFBVTtBQUUzQjtBQUFBLGFBRUc7QUFDSCxjQUFJLENBQUMsV0FBVztBQUFZO0FBRTVCLGdCQUFNLFdBQVcsTUFBTTtBQUV2QjtBQUFBLGFBRUc7QUFBQSxhQUNBO0FBQ0gsY0FBSTtBQUFZO0FBRWhCLGNBQUksY0FBYztBQUNoQixrQkFBTSxZQUFZLFlBQVk7QUFBQSxVQUMxQyxPQUFpQjtBQUNMLGdCQUFJLENBQUM7QUFBdUI7QUFFNUIsZ0JBQUksU0FBUztBQUNYLG9CQUFNLFNBQVE7QUFBQSxZQUNmLFdBQVUsYUFBYTtBQUN0QixvQkFBTSxXQUFVO0FBQUEsWUFDakI7QUFBQSxVQUNGO0FBRUQ7QUFBQSxhQUVHO0FBQ0gsY0FBSSxNQUFNO0FBQWE7QUFFdkIsY0FBSSxNQUFNLFlBQVksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsaUJBRTFELG1CQUFtQixNQUFNLGlCQUFpQixlQUFlLFdBQVcsR0FBRztBQUNyRTtBQUFBLFVBQ0Q7QUFFRCxnQkFBTSxhQUFhLGFBQWE7QUFFaEM7QUFBQSxhQUVHO0FBQ0gsY0FBSSxNQUFNLFlBQVksS0FBSztBQUd6QjtBQUFBLFVBQ0Q7QUFFRCxjQUFJLFlBQVk7QUFDZCxnQkFBSSxDQUFDO0FBQWU7QUFDcEIsZ0JBQUksTUFBTTtBQUFhO0FBRXZCLGtCQUFNLGFBQWEsYUFBYTtBQUVoQztBQUFBLFVBQ0Q7QUFFRDtBQUFBLGFBRUc7QUFDSCxjQUFJLFlBQVk7QUFDZCxrQkFBTSxTQUFTO0FBQUEsY0FDYiwwQkFBMEI7QUFBQSxZQUN4QyxDQUFhO0FBRUQsa0JBQU0sY0FBYyxJQUFJO0FBQUEsY0FDdEIsUUFBUTtBQUFBLGNBQ1IsZ0JBQWdCO0FBQUEsWUFDOUIsQ0FBYTtBQUVELGtCQUFNLFlBQVc7QUFBQSxVQUM3QixXQUFxQixlQUFlLG1CQUFtQjtBQUMzQyxrQkFBTSxXQUFVO0FBQUEsVUFDakI7QUFFRDtBQUFBLGFBRUc7QUFFSCxjQUFJLFlBQVk7QUFDZDtBQUFBLFVBQ0Q7QUFFRCxjQUFJLENBQUMsWUFBWTtBQUNmLGtCQUFNLFNBQVMsT0FBTztBQUV0QjtBQUFBLFVBQ0Q7QUFFRCxjQUFJLENBQUM7QUFBZTtBQUVwQixnQkFBTSxhQUFhLGFBQWE7QUFFaEM7QUFBQSxhQUVHO0FBQ0gsY0FBSSxZQUFZO0FBQ2Qsa0JBQU0sWUFBWSxJQUFJO0FBQUEsVUFDbEMsT0FBaUI7QUFDTCxrQkFBTSxTQUFTLE1BQU07QUFBQSxVQUN0QjtBQUVEO0FBQUEsYUFFRztBQUNILGNBQUksWUFBWTtBQUNkLGtCQUFNLFlBQVksTUFBTTtBQUFBLFVBQ3BDLE9BQWlCO0FBQ0wsa0JBQU0sU0FBUyxPQUFPO0FBQUEsVUFDdkI7QUFFRDtBQUFBLGFBRUc7QUFDSCxjQUFJLENBQUM7QUFBWTtBQUVqQixnQkFBTSxZQUFZLFFBQVE7QUFFMUI7QUFBQSxhQUVHO0FBQ0gsY0FBSSxDQUFDO0FBQVk7QUFFakIsZ0JBQU0sWUFBWSxVQUFVO0FBRTVCO0FBQUEsYUFFRztBQUNILGNBQUksQ0FBQztBQUFZO0FBRWpCLGdCQUFNLFlBQVksT0FBTztBQUV6QjtBQUFBLGFBRUc7QUFDSCxjQUFJLENBQUM7QUFBWTtBQUVqQixnQkFBTSxZQUFZLE1BQU07QUFFeEI7QUFBQTtBQUdBO0FBQUE7QUFHSixZQUFNLGVBQWM7QUFBQSxJQUMxQjtBQUVJLFVBQU0saUJBQWlCLGtCQUFtQixPQUFNLE1BQU0sY0FBYyxFQUFFO0FBQ3RFLFVBQU0sTUFBTSxjQUFjLFdBQVcsT0FBTyxLQUFLO0FBQ2pELFdBQU87QUFBQSxFQUNSO0FBRUQsZUFBYSxTQUFRLENBQUM7QUFBQSxJQUNwQixLQUFLO0FBQUEsSUFDTCxPQUFPLDZCQUE2QjtBQUNsQyxXQUFLLDBCQUF5QjtBQUM5QixXQUFLLHNCQUFxQjtBQUUxQixVQUFJLEtBQUssTUFBTSxxQkFBcUIsWUFBWSxTQUFTLGtCQUFrQjtBQUV6RSxpQkFBUyxpQkFBaUIsVUFBVSxLQUFLLFVBQVUsSUFBSTtBQUFBLE1BQ3hEO0FBRUQsVUFBSSxLQUFLLE1BQU0sV0FBVztBQUN4QixhQUFLLFdBQVU7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFBQSxFQUNMLEdBQUs7QUFBQSxJQUNELEtBQUs7QUFBQSxJQUNMLE9BQU8sNEJBQTRCLFdBQVc7QUFDNUMsVUFBSSxlQUFlLEtBQUssT0FDcEIsYUFBYSxhQUFhLFlBQzFCLGFBQWEsYUFBYTtBQUM5QixVQUFJLFlBQVksS0FBSyxNQUFNO0FBRTNCLFVBQ0EsYUFBYSxDQUFDLGNBQWMsVUFBVSxjQUN0QyxhQUFhLGNBQWMsQ0FBQyxVQUFVLFlBQVk7QUFDaEQsYUFBSyxXQUFVO0FBQUEsTUFDaEI7QUFFRCxVQUFJLGFBQWEsY0FBYyxDQUFDLFVBQVUsWUFBWTtBQUdwRCxhQUFLLFNBQVM7QUFBQSxVQUNaLFdBQVc7QUFBQSxRQUNyQixHQUFXLEtBQUssV0FBVztBQUFBLE1BQ3BCO0FBR0QsVUFBSSxLQUFLLGVBQWUsS0FBSyxvQkFBb0IsS0FBSywrQkFBK0I7QUFDbkYsdUJBQWUsS0FBSyxhQUFhLEtBQUssZ0JBQWdCO0FBQ3RELGFBQUssZ0NBQWdDO0FBQUEsTUFDdEM7QUFBQSxJQUNGO0FBQUEsRUFDTCxHQUFLO0FBQUEsSUFDRCxLQUFLO0FBQUEsSUFDTCxPQUFPLGdDQUFnQztBQUNyQyxXQUFLLHlCQUF3QjtBQUM3QixXQUFLLHFCQUFvQjtBQUN6QixlQUFTLG9CQUFvQixVQUFVLEtBQUssVUFBVSxJQUFJO0FBQUEsSUFDM0Q7QUFBQSxFQUlMLEdBQUs7QUFBQSxJQUNELEtBQUs7QUFBQSxJQUNMLE9BQU8sc0JBQXNCO0FBQzNCLFdBQUssTUFBTTtJQUNaO0FBQUEsRUFDTCxHQUFLO0FBQUEsSUFDRCxLQUFLO0FBQUEsSUFDTCxPQUFPLHVCQUF1QjtBQUM1QixXQUFLLGNBQWMsSUFBSTtBQUFBLFFBQ3JCLFFBQVE7QUFBQSxRQUNSLGdCQUFnQixLQUFLLE1BQU07QUFBQSxNQUNuQyxDQUFPO0FBQ0QsV0FBSyxNQUFNO0lBQ1o7QUFBQSxFQUNMLEdBQUs7QUFBQSxJQUNELEtBQUs7QUFBQSxJQUNMLE9BQU8sdUJBQXVCLFVBQVUsWUFBWTtBQUNsRCxXQUFLLE1BQU0sY0FBYyxVQUFVLFVBQVU7QUFBQSxJQUM5QztBQUFBLEVBSUwsR0FBSztBQUFBLElBQ0QsS0FBSztBQUFBLElBQ0wsT0FBTyxzQkFBc0I7QUFDM0IsVUFBSSxDQUFDLEtBQUs7QUFBVTtBQUNwQixXQUFLLFNBQVM7SUFDZjtBQUFBLEVBQ0wsR0FBSztBQUFBLElBQ0QsS0FBSztBQUFBLElBQ0wsT0FBTyxxQkFBcUI7QUFDMUIsVUFBSSxDQUFDLEtBQUs7QUFBVTtBQUNwQixXQUFLLFNBQVM7SUFDZjtBQUFBLEVBRUwsR0FBSztBQUFBLElBQ0QsS0FBSztBQUFBLElBQ0wsT0FBTyxrQkFBa0IsYUFBYTtBQUNwQyxVQUFJLFNBQVM7QUFFYixVQUFJLGVBQWUsS0FBSyxPQUNwQixjQUFjLGFBQWEsYUFDM0IsWUFBWSxhQUFhO0FBQzdCLFVBQUksbUJBQW1CLEtBQUs7QUFDNUIsVUFBSSxjQUFjLGdCQUFnQixVQUFVLElBQUksaUJBQWlCLFNBQVM7QUFFMUUsVUFBSSxDQUFDLEtBQUssTUFBTSxTQUFTO0FBQ3ZCLFlBQUksZ0JBQWdCLGlCQUFpQixRQUFRLFlBQVksRUFBRTtBQUUzRCxZQUFJLGdCQUFnQixJQUFJO0FBQ3RCLHdCQUFjO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFHRCxXQUFLLGdDQUFnQyxDQUFFLGNBQWEsS0FBSztBQUN6RCxXQUFLLFNBQVM7QUFBQSxRQUNaLDBCQUEwQjtBQUFBLFFBQzFCLGNBQWM7QUFBQSxRQUNkLGVBQWUsaUJBQWlCO0FBQUEsTUFDeEMsR0FBUyxXQUFZO0FBQ2IsZUFBTyxPQUFPO01BQ3RCLENBQU87QUFBQSxJQUNGO0FBQUEsRUFDTCxHQUFLO0FBQUEsSUFDRCxLQUFLO0FBQUEsSUFDTCxPQUFPLG9CQUFvQixXQUFXO0FBQ3BDLFVBQUksZUFBZSxLQUFLLE9BQ3BCLGNBQWMsYUFBYSxhQUMzQixlQUFlLGFBQWE7QUFFaEMsVUFBSSxDQUFDLEtBQUssTUFBTTtBQUFTO0FBQ3pCLFdBQUssU0FBUztBQUFBLFFBQ1osZUFBZTtBQUFBLE1BQ3ZCLENBQU87QUFDRCxVQUFJLGVBQWUsWUFBWSxRQUFRLFlBQVk7QUFFbkQsVUFBSSxDQUFDLGNBQWM7QUFDakIsdUJBQWU7QUFBQSxNQUNoQjtBQUVELFVBQUksWUFBWSxZQUFZLFNBQVM7QUFDckMsVUFBSSxZQUFZO0FBQ2hCLFVBQUksQ0FBQyxZQUFZO0FBQVE7QUFFekIsY0FBUTtBQUFBLGFBQ0Q7QUFDSCxjQUFJLGlCQUFpQixHQUFHO0FBRXRCLHdCQUFZO0FBQUEsVUFDeEIsV0FBcUIsaUJBQWlCLElBQUk7QUFFOUIsd0JBQVk7QUFBQSxVQUN4QixPQUFpQjtBQUNMLHdCQUFZLGVBQWU7QUFBQSxVQUM1QjtBQUVEO0FBQUEsYUFFRztBQUNILGNBQUksZUFBZSxNQUFNLGVBQWUsV0FBVztBQUNqRCx3QkFBWSxlQUFlO0FBQUEsVUFDNUI7QUFFRDtBQUFBO0FBR0osV0FBSyxTQUFTO0FBQUEsUUFDWixlQUFlLGNBQWM7QUFBQSxRQUM3QixjQUFjLFlBQVk7QUFBQSxNQUNsQyxDQUFPO0FBQUEsSUFDRjtBQUFBLEVBQ0wsR0FBSztBQUFBLElBQ0QsS0FBSztBQUFBLElBQ0wsT0FBTyx1QkFBdUI7QUFDNUIsVUFBSSxZQUFZLFVBQVUsU0FBUyxLQUFLLFVBQVUsT0FBTyxTQUFZLFVBQVUsS0FBSztBQUNwRixVQUFJLFdBQVcsS0FBSyxNQUFNO0FBQzFCLFVBQUksZ0JBQWdCLEtBQUssTUFBTTtBQUMvQixVQUFJLFdBQVUsS0FBSztBQUNuQixVQUFJLENBQUMsU0FBUTtBQUFRO0FBQ3JCLFVBQUksWUFBWTtBQUVoQixVQUFJLGVBQWUsU0FBUSxRQUFRLGFBQWE7QUFFaEQsVUFBSSxDQUFDLGVBQWU7QUFDbEIsdUJBQWU7QUFBQSxNQUNoQjtBQUVELFVBQUksY0FBYyxNQUFNO0FBQ3RCLG9CQUFZLGVBQWUsSUFBSSxlQUFlLElBQUksU0FBUSxTQUFTO0FBQUEsTUFDM0UsV0FBaUIsY0FBYyxRQUFRO0FBQy9CLG9CQUFhLGdCQUFlLEtBQUssU0FBUTtBQUFBLE1BQ2pELFdBQWlCLGNBQWMsVUFBVTtBQUNqQyxvQkFBWSxlQUFlO0FBQzNCLFlBQUksWUFBWTtBQUFHLHNCQUFZO0FBQUEsTUFDdkMsV0FBaUIsY0FBYyxZQUFZO0FBQ25DLG9CQUFZLGVBQWU7QUFDM0IsWUFBSSxZQUFZLFNBQVEsU0FBUztBQUFHLHNCQUFZLFNBQVEsU0FBUztBQUFBLE1BQ3pFLFdBQWlCLGNBQWMsUUFBUTtBQUMvQixvQkFBWSxTQUFRLFNBQVM7QUFBQSxNQUM5QjtBQUVELFdBQUssZ0NBQWdDO0FBQ3JDLFdBQUssU0FBUztBQUFBLFFBQ1osZUFBZSxTQUFRO0FBQUEsUUFDdkIsY0FBYztBQUFBLE1BQ3RCLENBQU87QUFBQSxJQUNGO0FBQUEsRUFDTCxHQUFLO0FBQUEsSUFDRCxLQUFLO0FBQUEsSUFDTCxPQUdBLG9CQUFvQjtBQUVsQixVQUFJLENBQUMsS0FBSyxNQUFNLE9BQU87QUFDckIsZUFBTztBQUFBLE1BQ1I7QUFLRCxVQUFJLE9BQU8sS0FBSyxNQUFNLFVBQVUsWUFBWTtBQUMxQyxlQUFPLEtBQUssTUFBTSxNQUFNLFlBQVk7QUFBQSxNQUNyQztBQUlELGFBQU8sZUFBZSxlQUFlLElBQUksWUFBWSxHQUFHLEtBQUssTUFBTSxLQUFLO0FBQUEsSUFDekU7QUFBQSxFQUNMLEdBQUs7QUFBQSxJQUNELEtBQUs7QUFBQSxJQUNMLE9BQU8sMEJBQTBCO0FBQy9CLFVBQUksYUFBYSxLQUFLLFlBQ2xCLEtBQUssS0FBSyxJQUNWLFlBQVksS0FBSyxXQUNqQixXQUFXLEtBQUssVUFDaEIsZUFBZSxLQUFLLGNBQ3BCLFdBQVcsS0FBSyxVQUNoQixRQUFRLEtBQUs7QUFDakIsVUFBSSxVQUFVLE1BQU0sU0FDaEIsUUFBUSxNQUFNLE9BQ2QsV0FBVSxNQUFNO0FBQ3BCLFVBQUksV0FBVyxLQUFLO0FBQ3BCLGFBQU87QUFBQSxRQUNMO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQSxTQUFTO0FBQUEsUUFDVDtBQUFBLFFBQ0EsYUFBYTtBQUFBLFFBQ2I7QUFBQSxRQUNBLE9BQU8sS0FBSyxTQUFVO0FBQUEsTUFDOUI7QUFBQSxJQUNLO0FBQUEsRUFDTCxHQUFLO0FBQUEsSUFDRCxLQUFLO0FBQUEsSUFDTCxPQUFPLG9CQUFvQjtBQUN6QixVQUFJLGNBQWMsS0FBSyxNQUFNO0FBQzdCLGFBQU8sWUFBWSxTQUFTO0FBQUEsSUFDN0I7QUFBQSxFQUNMLEdBQUs7QUFBQSxJQUNELEtBQUs7QUFBQSxJQUNMLE9BQU8sc0JBQXNCO0FBQzNCLGFBQU8sQ0FBQyxDQUFDLEtBQUssb0JBQW1CLEVBQUc7QUFBQSxJQUNyQztBQUFBLEVBQ0wsR0FBSztBQUFBLElBQ0QsS0FBSztBQUFBLElBQ0wsT0FBTyx1QkFBdUI7QUFDNUIsVUFBSSxlQUFlLEtBQUssT0FDcEIsZUFBYyxhQUFhLGFBQzNCLFVBQVUsYUFBYTtBQUczQixVQUFJLGlCQUFnQjtBQUFXLGVBQU87QUFDdEMsYUFBTztBQUFBLElBQ1I7QUFBQSxFQUNMLEdBQUs7QUFBQSxJQUNELEtBQUs7QUFBQSxJQUNMLE9BQU8sMkJBQTBCLFFBQVEsYUFBYTtBQUNwRCxhQUFPLGtCQUFrQixLQUFLLE9BQU8sUUFBUSxXQUFXO0FBQUEsSUFDekQ7QUFBQSxFQUNMLEdBQUs7QUFBQSxJQUNELEtBQUs7QUFBQSxJQUNMLE9BQU8sMEJBQTBCLFFBQVEsYUFBYTtBQUNwRCxhQUFPLGtCQUFrQixLQUFLLE9BQU8sUUFBUSxXQUFXO0FBQUEsSUFDekQ7QUFBQSxFQUNMLEdBQUs7QUFBQSxJQUNELEtBQUs7QUFBQSxJQUNMLE9BQU8sc0JBQXNCLFFBQVEsWUFBWTtBQUMvQyxhQUFPLGNBQWMsS0FBSyxPQUFPLFFBQVEsVUFBVTtBQUFBLElBQ3BEO0FBQUEsRUFDTCxHQUFLO0FBQUEsSUFDRCxLQUFLO0FBQUEsSUFDTCxPQUFPLDJCQUEyQixNQUFNLFNBQVM7QUFDL0MsVUFBSSxPQUFPLEtBQUssTUFBTSxzQkFBc0IsWUFBWTtBQUN0RCxZQUFJLGNBQWMsS0FBSyxNQUFNO0FBQzdCLFlBQUksZUFBZSxLQUFLLE1BQU07QUFDOUIsZUFBTyxLQUFLLE1BQU0sa0JBQWtCLE1BQU07QUFBQSxVQUN4QztBQUFBLFVBQ0EsWUFBWTtBQUFBLFVBQ1osYUFBYTtBQUFBLFFBQ3ZCLENBQVM7QUFBQSxNQUNULE9BQWE7QUFDTCxlQUFPLEtBQUssZUFBZSxJQUFJO0FBQUEsTUFDaEM7QUFBQSxJQUNGO0FBQUEsRUFDTCxHQUFLO0FBQUEsSUFDRCxLQUFLO0FBQUEsSUFDTCxPQUFPLDJCQUEwQixNQUFNO0FBQ3JDLGFBQU8sS0FBSyxNQUFNLGlCQUFpQixJQUFJO0FBQUEsSUFDeEM7QUFBQSxFQUlMLEdBQUs7QUFBQSxJQUNELEtBQUs7QUFBQSxJQUNMLE9BR0EscUNBQXFDO0FBQ25DLFVBQUksWUFBWSxTQUFTLGtCQUFrQjtBQUN6QyxpQkFBUyxpQkFBaUIsb0JBQW9CLEtBQUssb0JBQW9CLEtBQUs7QUFDNUUsaUJBQVMsaUJBQWlCLGtCQUFrQixLQUFLLGtCQUFrQixLQUFLO0FBQUEsTUFDekU7QUFBQSxJQUNGO0FBQUEsRUFDTCxHQUFLO0FBQUEsSUFDRCxLQUFLO0FBQUEsSUFDTCxPQUFPLG9DQUFvQztBQUN6QyxVQUFJLFlBQVksU0FBUyxxQkFBcUI7QUFDNUMsaUJBQVMsb0JBQW9CLG9CQUFvQixLQUFLLGtCQUFrQjtBQUN4RSxpQkFBUyxvQkFBb0Isa0JBQWtCLEtBQUssZ0JBQWdCO0FBQUEsTUFDckU7QUFBQSxJQUNGO0FBQUEsRUFDTCxHQUFLO0FBQUEsSUFDRCxLQUFLO0FBQUEsSUFDTCxPQUdBLGlDQUFpQztBQUMvQixVQUFJLFlBQVksU0FBUyxrQkFBa0I7QUFDekMsaUJBQVMsaUJBQWlCLGNBQWMsS0FBSyxjQUFjLEtBQUs7QUFDaEUsaUJBQVMsaUJBQWlCLGFBQWEsS0FBSyxhQUFhLEtBQUs7QUFDOUQsaUJBQVMsaUJBQWlCLFlBQVksS0FBSyxZQUFZLEtBQUs7QUFBQSxNQUM3RDtBQUFBLElBQ0Y7QUFBQSxFQUNMLEdBQUs7QUFBQSxJQUNELEtBQUs7QUFBQSxJQUNMLE9BQU8sZ0NBQWdDO0FBQ3JDLFVBQUksWUFBWSxTQUFTLHFCQUFxQjtBQUM1QyxpQkFBUyxvQkFBb0IsY0FBYyxLQUFLLFlBQVk7QUFDNUQsaUJBQVMsb0JBQW9CLGFBQWEsS0FBSyxXQUFXO0FBQzFELGlCQUFTLG9CQUFvQixZQUFZLEtBQUssVUFBVTtBQUFBLE1BQ3pEO0FBQUEsSUFDRjtBQUFBLEVBQ0wsR0FBSztBQUFBLElBQ0QsS0FBSztBQUFBLElBQ0wsT0FHQSx1QkFBdUI7QUFDckIsVUFBSSxlQUFlLEtBQUssT0FDcEIsYUFBYSxhQUFhLFlBQzFCLGVBQWUsYUFBYSxjQUM1QixVQUFVLGFBQWEsU0FDdkIsYUFBYSxhQUFhLFlBQzFCLFdBQVcsYUFBYSxVQUN4QixPQUFPLGFBQWEsTUFDcEIsYUFBYSxhQUFhO0FBRTlCLFVBQUksc0JBQXNCLEtBQUssY0FBZSxHQUMxQyxTQUFRLG9CQUFvQjtBQUVoQyxVQUFJLGVBQWUsS0FBSyxPQUNwQixnQkFBZ0IsYUFBYSxlQUM3QixnQkFBZ0IsYUFBYTtBQUNqQyxVQUFJLGNBQWMsS0FBSztBQUN2QixVQUFJLEtBQUssV0FBVyxLQUFLLGFBQWEsT0FBTztBQUU3QyxVQUFJLGlCQUFpQixlQUFlLGVBQWUsZUFBZTtBQUFBLFFBQ2hFLHFCQUFxQjtBQUFBLFFBQ3JCLGlCQUFpQjtBQUFBLFFBQ2pCLGlCQUFpQjtBQUFBLFFBQ2pCLHFCQUFxQixLQUFLLE1BQU07QUFBQSxRQUNoQyxnQkFBZ0IsS0FBSyxNQUFNO0FBQUEsUUFDM0IsY0FBYyxLQUFLLE1BQU07QUFBQSxRQUN6QixtQkFBbUIsS0FBSyxNQUFNO0FBQUEsUUFDOUIsTUFBTTtBQUFBLE1BQ1AsR0FBRSxjQUFjO0FBQUEsUUFDZixpQkFBaUIsS0FBSyxhQUFhLFNBQVM7QUFBQSxRQUM1QyxhQUFhLEtBQUssYUFBYSxTQUFTO0FBQUEsTUFDaEQsQ0FBTyxHQUFHLENBQUMsZ0JBQWdCO0FBQUEsUUFDbkIsaUJBQWlCO0FBQUEsTUFDbEIsQ0FBQSxHQUFHLEtBQUssYUFBYyxtQkFBa0IsUUFBUSxrQkFBa0IsU0FBUyxTQUFTLGNBQWMsWUFBWSx5QkFBeUI7QUFBQSxRQUN0SSxvQkFBb0IsS0FBSyxhQUFhLGFBQWE7QUFBQSxNQUMzRCxJQUFVO0FBQUEsUUFDRixvQkFBb0IsS0FBSyxhQUFhLGFBQWE7QUFBQSxNQUMzRCxDQUFPO0FBRUQsVUFBSSxDQUFDLGNBQWM7QUFFakIsZUFBb0JDLG9CQUFvQixZQUFZLFNBQVM7QUFBQSxVQUMzRDtBQUFBLFVBQ0EsVUFBVSxLQUFLO0FBQUEsVUFDZixRQUFRLEtBQUs7QUFBQSxVQUNiLFVBQVU7QUFBQSxVQUNWLFNBQVMsS0FBSztBQUFBLFVBQ2QsVUFBVTtBQUFBLFVBQ1Y7QUFBQSxVQUNBLFdBQVc7QUFBQSxVQUNYO0FBQUEsVUFDQSxPQUFPO0FBQUEsUUFDakIsR0FBVyxjQUFjLENBQUM7QUFBQSxNQUNuQjtBQUVELGFBQW9CQSxvQkFBb0IsUUFBTyxTQUFTLENBQUEsR0FBSSxhQUFhO0FBQUEsUUFDdkUsZ0JBQWdCO0FBQUEsUUFDaEIsY0FBYztBQUFBLFFBQ2QsYUFBYTtBQUFBLFFBQ2I7QUFBQSxRQUNBLFVBQVUsS0FBSztBQUFBLFFBQ2Y7QUFBQSxRQUNBLFVBQVU7QUFBQSxRQUNWLFFBQVEsS0FBSztBQUFBLFFBQ2IsVUFBVSxLQUFLO0FBQUEsUUFDZixTQUFTLEtBQUs7QUFBQSxRQUNkLFlBQVk7QUFBQSxRQUNaO0FBQUEsUUFDQTtBQUFBLFFBQ0EsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLE1BQ2YsR0FBUyxjQUFjLENBQUM7QUFBQSxJQUNuQjtBQUFBLEVBQ0wsR0FBSztBQUFBLElBQ0QsS0FBSztBQUFBLElBQ0wsT0FBTyxvQ0FBb0M7QUFDekMsVUFBSSxTQUFTO0FBRWIsVUFBSSx1QkFBdUIsS0FBSyxjQUFlLEdBQzNDLGNBQWEscUJBQXFCLFlBQ2xDLHVCQUFzQixxQkFBcUIscUJBQzNDLG1CQUFrQixxQkFBcUIsaUJBQ3ZDLG9CQUFtQixxQkFBcUIsa0JBQ3hDLGVBQWMscUJBQXFCLGFBQ25DLGVBQWMscUJBQXFCO0FBRXZDLFVBQUksY0FBYyxLQUFLO0FBQ3ZCLFVBQUksZUFBZSxLQUFLLE9BQ3BCLDJCQUEyQixhQUFhLDBCQUN4QyxhQUFhLGFBQWEsWUFDMUIsVUFBVSxhQUFhLFNBQ3ZCLGFBQWEsYUFBYSxZQUMxQixjQUFjLGFBQWE7QUFDL0IsVUFBSSxlQUFlLEtBQUssT0FDcEIsY0FBYyxhQUFhLGFBQzNCLGVBQWUsYUFBYSxjQUM1QixZQUFZLGFBQWE7QUFFN0IsVUFBSSxDQUFDLEtBQUssU0FBVSxLQUFJLENBQUMsMEJBQTBCO0FBQ2pELGVBQU8sYUFBYSxPQUFvQkEsb0JBQW9CLGNBQWEsU0FBUyxDQUFFLEdBQUUsYUFBYTtBQUFBLFVBQ2pHLEtBQUs7QUFBQSxVQUNMO0FBQUEsVUFDQTtBQUFBLFVBQ0EsWUFBWTtBQUFBLFlBQ1YsSUFBSSxLQUFLLGFBQWEsYUFBYTtBQUFBLFVBQ3BDO0FBQUEsUUFDWCxDQUFTLEdBQUcsV0FBVztBQUFBLE1BQ2hCO0FBRUQsVUFBSSxTQUFTO0FBQ1gsZUFBTyxZQUFZLElBQUksU0FBVSxLQUFLLE9BQU87QUFDM0MsY0FBSSxrQkFBa0IsUUFBUTtBQUM5QixjQUFJLE1BQU0sR0FBRyxPQUFPLE9BQU8sZUFBZSxHQUFHLEdBQUcsR0FBRyxFQUFFLE9BQU8sT0FBTyxlQUFlLEdBQUcsQ0FBQztBQUN0RixpQkFBb0JBLG9CQUFvQixhQUFZLFNBQVMsQ0FBQSxHQUFJLGFBQWE7QUFBQSxZQUM1RSxZQUFZO0FBQUEsY0FDVixXQUFXO0FBQUEsY0FDWCxPQUFPO0FBQUEsY0FDUCxRQUFRO0FBQUEsWUFDVDtBQUFBLFlBQ0QsV0FBVztBQUFBLFlBQ1g7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0EsYUFBYTtBQUFBLGNBQ1gsU0FBUyxtQkFBbUI7QUFDMUIsdUJBQU8sT0FBTyxZQUFZLEdBQUc7QUFBQSxjQUM5QjtBQUFBLGNBQ0QsWUFBWSxzQkFBc0I7QUFDaEMsdUJBQU8sT0FBTyxZQUFZLEdBQUc7QUFBQSxjQUM5QjtBQUFBLGNBQ0QsYUFBYSxxQkFBcUIsSUFBRztBQUNuQyxtQkFBRSxlQUFjO0FBQUEsY0FDakI7QUFBQSxZQUNGO0FBQUEsWUFDRCxNQUFNO0FBQUEsVUFDUCxDQUFBLEdBQUcsT0FBTyxrQkFBa0IsS0FBSyxPQUFPLENBQUM7QUFBQSxRQUNwRCxDQUFTO0FBQUEsTUFDRjtBQUVELFVBQUksWUFBWTtBQUNkLGVBQU87QUFBQSxNQUNSO0FBRUQsVUFBSSxjQUFjLFlBQVk7QUFDOUIsYUFBb0JBLG9CQUFvQixjQUFhLFNBQVMsQ0FBQSxHQUFJLGFBQWE7QUFBQSxRQUM3RSxNQUFNO0FBQUEsUUFDTjtBQUFBLE1BQ0QsQ0FBQSxHQUFHLEtBQUssa0JBQWtCLGFBQWEsT0FBTyxDQUFDO0FBQUEsSUFDakQ7QUFBQSxFQUNMLEdBQUs7QUFBQSxJQUNELEtBQUs7QUFBQSxJQUNMLE9BQU8sZ0NBQWdDO0FBQ3JDLFVBQUksdUJBQXVCLEtBQUssY0FBZSxHQUMzQyxrQkFBaUIscUJBQXFCO0FBRTFDLFVBQUksY0FBYyxLQUFLO0FBQ3ZCLFVBQUksZ0JBQWdCLEtBQUssT0FDckIsYUFBYSxjQUFjLFlBQzNCLFlBQVksY0FBYztBQUM5QixVQUFJLFlBQVksS0FBSyxNQUFNO0FBRTNCLFVBQUksQ0FBQyxLQUFLLFlBQVcsS0FBTSxDQUFDLG1CQUFrQixjQUFjLENBQUMsS0FBSyxTQUFVLEtBQUksV0FBVztBQUN6RixlQUFPO0FBQUEsTUFDUjtBQUVELFVBQUksYUFBYTtBQUFBLFFBQ2YsYUFBYSxLQUFLO0FBQUEsUUFDbEIsWUFBWSxLQUFLO0FBQUEsUUFDakIsZUFBZTtBQUFBLE1BQ3ZCO0FBQ00sYUFBb0JBLG9CQUFvQixpQkFBZ0IsU0FBUyxDQUFBLEdBQUksYUFBYTtBQUFBLFFBQ2hGO0FBQUEsUUFDQTtBQUFBLE1BQ0QsQ0FBQSxDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0wsR0FBSztBQUFBLElBQ0QsS0FBSztBQUFBLElBQ0wsT0FBTyxrQ0FBa0M7QUFDdkMsVUFBSSx1QkFBdUIsS0FBSyxjQUFlLEdBQzNDLG9CQUFtQixxQkFBcUI7QUFFNUMsVUFBSSxjQUFjLEtBQUs7QUFDdkIsVUFBSSxnQkFBZ0IsS0FBSyxPQUNyQixhQUFhLGNBQWMsWUFDM0IsWUFBWSxjQUFjO0FBQzlCLFVBQUksWUFBWSxLQUFLLE1BQU07QUFDM0IsVUFBSSxDQUFDLHFCQUFvQixDQUFDO0FBQVcsZUFBTztBQUM1QyxVQUFJLGFBQWE7QUFBQSxRQUNmLGVBQWU7QUFBQSxNQUN2QjtBQUNNLGFBQW9CQSxvQkFBb0IsbUJBQWtCLFNBQVMsQ0FBQSxHQUFJLGFBQWE7QUFBQSxRQUNsRjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRCxDQUFBLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDTCxHQUFLO0FBQUEsSUFDRCxLQUFLO0FBQUEsSUFDTCxPQUFPLG9DQUFvQztBQUN6QyxVQUFJLHVCQUF1QixLQUFLLGNBQWUsR0FDM0MscUJBQW9CLHFCQUFxQixtQkFDekMsc0JBQXFCLHFCQUFxQjtBQUc5QyxVQUFJLENBQUMsc0JBQXFCLENBQUM7QUFBb0IsZUFBTztBQUN0RCxVQUFJLGNBQWMsS0FBSztBQUN2QixVQUFJLGFBQWEsS0FBSyxNQUFNO0FBQzVCLFVBQUksWUFBWSxLQUFLLE1BQU07QUFDM0IsYUFBb0JBLG9CQUFvQixxQkFBb0IsU0FBUyxDQUFBLEdBQUksYUFBYTtBQUFBLFFBQ3BGO0FBQUEsUUFDQTtBQUFBLE1BQ0QsQ0FBQSxDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0wsR0FBSztBQUFBLElBQ0QsS0FBSztBQUFBLElBQ0wsT0FBTyxtQ0FBbUM7QUFDeEMsVUFBSSx1QkFBdUIsS0FBSyxjQUFlLEdBQzNDLHFCQUFvQixxQkFBcUI7QUFFN0MsVUFBSSxDQUFDO0FBQW1CLGVBQU87QUFDL0IsVUFBSSxjQUFjLEtBQUs7QUFDdkIsVUFBSSxhQUFhLEtBQUssTUFBTTtBQUM1QixVQUFJLFlBQVksS0FBSyxNQUFNO0FBQzNCLFVBQUksYUFBYTtBQUFBLFFBQ2YsYUFBYSxLQUFLO0FBQUEsUUFDbEIsWUFBWSxLQUFLO0FBQUEsUUFDakIsZUFBZTtBQUFBLE1BQ3ZCO0FBQ00sYUFBb0JBLG9CQUFvQixvQkFBbUIsU0FBUyxDQUFBLEdBQUksYUFBYTtBQUFBLFFBQ25GO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNELENBQUEsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNMLEdBQUs7QUFBQSxJQUNELEtBQUs7QUFBQSxJQUNMLE9BQU8sc0JBQXNCO0FBQzNCLFVBQUksU0FBUztBQUViLFVBQUksdUJBQXVCLEtBQUssY0FBZSxHQUMzQyxTQUFRLHFCQUFxQixPQUM3QixnQkFBZSxxQkFBcUIsY0FDcEMsUUFBTyxxQkFBcUIsTUFDNUIsWUFBVyxxQkFBcUIsVUFDaEMsY0FBYSxxQkFBcUIsWUFDbEMsa0JBQWlCLHFCQUFxQixnQkFDdEMsb0JBQW1CLHFCQUFxQixrQkFDeEMsVUFBUyxxQkFBcUI7QUFFbEMsVUFBSSxjQUFjLEtBQUs7QUFDdkIsVUFBSSxnQkFBZ0IsS0FBSyxNQUFNO0FBQy9CLFVBQUksZ0JBQWdCLEtBQUssT0FDckIsb0JBQW9CLGNBQWMsbUJBQ2xDLGFBQWEsY0FBYyxZQUMzQixZQUFZLGNBQWMsV0FDMUIsa0JBQWlCLGNBQWMsZ0JBQy9CLGdCQUFnQixjQUFjLGVBQzlCLGdCQUFnQixjQUFjLGVBQzlCLGFBQWEsY0FBYyxZQUMzQixnQkFBZ0IsY0FBYyxlQUM5QixlQUFlLGNBQWMsY0FDN0IsbUJBQW1CLGNBQWMsa0JBQ2pDLHdCQUF3QixjQUFjLHVCQUN0QywyQkFBMkIsY0FBYywwQkFDekMsb0JBQW1CLGNBQWMsa0JBQ2pDLG9CQUFvQixjQUFjLG1CQUNsQyx1QkFBdUIsY0FBYztBQUN6QyxVQUFJLENBQUM7QUFBWSxlQUFPO0FBRXhCLFVBQUksU0FBUyxpQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLFlBQUksT0FBTyxNQUFNLE1BQ2IsT0FBTyxNQUFNLE1BQ2IsYUFBYSxNQUFNLFlBQ25CLGFBQWEsTUFBTSxZQUNuQixRQUFRLE1BQU0sT0FDZCxRQUFRLE1BQU07QUFDbEIsWUFBSSxZQUFZLGtCQUFrQjtBQUNsQyxZQUFJLFVBQVUsYUFBYSxTQUFZLFdBQVk7QUFDakQsaUJBQU8sT0FBTyxjQUFjLElBQUk7QUFBQSxRQUMxQztBQUNRLFlBQUksV0FBVyxhQUFhLFNBQVksV0FBWTtBQUNsRCxpQkFBTyxPQUFPLGFBQWEsSUFBSTtBQUFBLFFBQ3pDO0FBQ1EsWUFBSSxXQUFXLEdBQUcsT0FBTyxPQUFPLGFBQWEsUUFBUSxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUU7QUFDdEUsWUFBSSxhQUFhO0FBQUEsVUFDZixJQUFJO0FBQUEsVUFDSixTQUFTO0FBQUEsVUFDVCxhQUFhO0FBQUEsVUFDYixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsUUFDcEI7QUFDUSxlQUFvQkEsb0JBQW9CLFNBQVEsU0FBUyxDQUFBLEdBQUksYUFBYTtBQUFBLFVBQ3hFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0EsVUFBVSxZQUFZLE9BQU8sc0JBQXNCO0FBQUEsUUFDN0QsQ0FBUyxHQUFHLE9BQU8sa0JBQWtCLE1BQU0sTUFBTSxNQUFNLENBQUM7QUFBQSxNQUN4RDtBQUVNLFVBQUk7QUFFSixVQUFJLEtBQUssY0FBYztBQUNyQixpQkFBUyxLQUFLLHNCQUF1QixFQUFDLElBQUksU0FBVSxNQUFNO0FBQ3hELGNBQUksS0FBSyxTQUFTLFNBQVM7QUFDekIsZ0JBQUksUUFBUSxLQUFLLE1BQ2IsV0FBVSxLQUFLLFNBQ2YsYUFBYSxLQUFLO0FBQ3RCLGdCQUFJLFVBQVUsR0FBRyxPQUFPLE9BQU8sYUFBYSxPQUFPLEdBQUcsR0FBRyxFQUFFLE9BQU8sVUFBVTtBQUM1RSxnQkFBSSxZQUFZLEdBQUcsT0FBTyxTQUFTLFVBQVU7QUFDN0MsbUJBQW9CQSxvQkFBb0IsUUFBTyxTQUFTLENBQUEsR0FBSSxhQUFhO0FBQUEsY0FDdkUsS0FBSztBQUFBLGNBQ0wsTUFBTTtBQUFBLGNBQ04sU0FBUztBQUFBLGNBQ1QsU0FBUztBQUFBLGNBQ1QsY0FBYztBQUFBLGdCQUNaLElBQUk7QUFBQSxnQkFDSixNQUFNLEtBQUs7QUFBQSxjQUNaO0FBQUEsY0FDRCxPQUFPLE9BQU8saUJBQWlCLEtBQUssSUFBSTtBQUFBLFlBQ3pDLENBQUEsR0FBRyxLQUFLLFFBQVEsSUFBSSxTQUFVLFFBQVE7QUFDckMscUJBQU8sT0FBTyxRQUFRLEdBQUcsT0FBTyxZQUFZLEdBQUcsRUFBRSxPQUFPLE9BQU8sS0FBSyxDQUFDO0FBQUEsWUFDdEUsQ0FBQSxDQUFDO0FBQUEsVUFDZCxXQUFxQixLQUFLLFNBQVMsVUFBVTtBQUNqQyxtQkFBTyxPQUFPLE1BQU0sR0FBRyxPQUFPLEtBQUssS0FBSyxDQUFDO0FBQUEsVUFDMUM7QUFBQSxRQUNYLENBQVM7QUFBQSxNQUNGLFdBQVUsV0FBVztBQUNwQixZQUFJLFVBQVUsZ0JBQWU7QUFBQSxVQUMzQjtBQUFBLFFBQ1YsQ0FBUztBQUNELFlBQUksWUFBWTtBQUFNLGlCQUFPO0FBQzdCLGlCQUFzQkEsb0JBQW9CLGlCQUFnQixhQUFhLE9BQU87QUFBQSxNQUN0RixPQUFhO0FBQ0wsWUFBSSxXQUFXLGtCQUFpQjtBQUFBLFVBQzlCO0FBQUEsUUFDVixDQUFTO0FBRUQsWUFBSSxhQUFhO0FBQU0saUJBQU87QUFDOUIsaUJBQXNCQSxvQkFBb0IsbUJBQWtCLGFBQWEsUUFBUTtBQUFBLE1BQ2xGO0FBRUQsVUFBSSxxQkFBcUI7QUFBQSxRQUN2QjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNSO0FBQ00sVUFBSSxjQUEyQkEsb0JBQW9CLFlBQVksU0FBUyxDQUFFLEdBQUUsYUFBYSxrQkFBa0IsR0FBRyxTQUFVLE9BQU87QUFDN0gsWUFBSSxNQUFNLE1BQU0sS0FDWixvQkFBb0IsTUFBTSxhQUMxQixZQUFZLGtCQUFrQixXQUM5QixZQUFZLGtCQUFrQjtBQUNsQyxlQUFvQkEsb0JBQW9CLE9BQU0sU0FBUyxDQUFBLEdBQUksYUFBYSxvQkFBb0I7QUFBQSxVQUMxRixVQUFVO0FBQUEsVUFDVixZQUFZO0FBQUEsWUFDVixhQUFhLE9BQU87QUFBQSxZQUNwQixhQUFhLE9BQU87QUFBQSxZQUNwQixJQUFJLE9BQU8sYUFBYSxTQUFTO0FBQUEsVUFDbEM7QUFBQSxVQUNEO0FBQUEsVUFDQTtBQUFBLFFBQ1YsQ0FBUyxHQUFnQkEsb0JBQW9CLGVBQWU7QUFBQSxVQUNsRCxnQkFBZ0I7QUFBQSxVQUNoQixhQUFhO0FBQUEsVUFDYixnQkFBZ0I7QUFBQSxVQUNoQixhQUFhO0FBQUEsUUFDZCxHQUFFLFNBQVUsaUJBQWlCO0FBQzVCLGlCQUFvQkEsb0JBQW9CLFdBQVUsU0FBUyxDQUFBLEdBQUksYUFBYTtBQUFBLFlBQzFFLFVBQVUsa0JBQWtCLFVBQVU7QUFDcEMscUJBQU8sZUFBZSxRQUFRO0FBRTlCLDhCQUFnQixRQUFRO0FBQUEsWUFDekI7QUFBQSxZQUNEO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNaLENBQVcsR0FBRyxNQUFNO0FBQUEsUUFDWCxDQUFBLENBQUM7QUFBQSxNQUNWLENBQU87QUFJRCxhQUFPLG9CQUFvQixpQkFBaUIsVUFBdUJBLG9CQUFvQixhQUFZLFNBQVMsQ0FBRSxHQUFFLGFBQWE7QUFBQSxRQUMzSCxVQUFVO0FBQUEsUUFDVixnQkFBZ0IsS0FBSztBQUFBLFFBQ3JCO0FBQUEsUUFDQTtBQUFBLE1BQ1IsQ0FBTyxHQUFHLFdBQVcsSUFBSTtBQUFBLElBQ3BCO0FBQUEsRUFDTCxHQUFLO0FBQUEsSUFDRCxLQUFLO0FBQUEsSUFDTCxPQUFPLDJCQUEyQjtBQUNoQyxVQUFJLFNBQVM7QUFFYixVQUFJLGdCQUFnQixLQUFLLE9BQ3JCLGFBQVksY0FBYyxXQUMxQixhQUFhLGNBQWMsWUFDM0IsVUFBVSxjQUFjLFNBQ3hCLE9BQU8sY0FBYztBQUN6QixVQUFJLGNBQWMsS0FBSyxNQUFNO0FBQzdCLFVBQUksQ0FBQyxRQUFRO0FBQVk7QUFFekIsVUFBSSxTQUFTO0FBQ1gsWUFBSSxZQUFXO0FBQ2IsY0FBSSxRQUFRLFlBQVksSUFBSSxTQUFVLEtBQUs7QUFDekMsbUJBQU8sT0FBTyxlQUFlLEdBQUc7QUFBQSxVQUM1QyxDQUFXLEVBQUUsS0FBSyxVQUFTO0FBQ2pCLGlCQUFvQkEsb0JBQW9CLFNBQVM7QUFBQSxZQUMvQztBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ047QUFBQSxVQUNaLENBQVc7QUFBQSxRQUNYLE9BQWU7QUFDTCxjQUFJLFFBQVEsWUFBWSxTQUFTLElBQUksWUFBWSxJQUFJLFNBQVUsS0FBSyxHQUFHO0FBQ3JFLG1CQUFvQkEsb0JBQW9CLFNBQVM7QUFBQSxjQUMvQyxLQUFLLEtBQUssT0FBTyxDQUFDO0FBQUEsY0FDbEI7QUFBQSxjQUNBLE1BQU07QUFBQSxjQUNOLE9BQU8sT0FBTyxlQUFlLEdBQUc7QUFBQSxZQUM5QyxDQUFhO0FBQUEsVUFDYixDQUFXLElBQWlCQSxvQkFBb0IsU0FBUztBQUFBLFlBQzdDO0FBQUEsWUFDQSxNQUFNO0FBQUEsVUFDbEIsQ0FBVztBQUNELGlCQUFvQkEsb0JBQW9CLE9BQU8sTUFBTSxLQUFLO0FBQUEsUUFDM0Q7QUFBQSxNQUNULE9BQWE7QUFDTCxZQUFJLFNBQVMsWUFBWSxLQUFLLEtBQUssZUFBZSxZQUFZLEVBQUUsSUFBSTtBQUVwRSxlQUFvQkEsb0JBQW9CLFNBQVM7QUFBQSxVQUMvQztBQUFBLFVBQ0EsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFFBQ2pCLENBQVM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0wsR0FBSztBQUFBLElBQ0QsS0FBSztBQUFBLElBQ0wsT0FBTyw0QkFBNEI7QUFDakMsVUFBSSxjQUFjLEtBQUs7QUFDdkIsVUFBSSxlQUFlLEtBQUssT0FDcEIsZ0JBQWdCLGFBQWEsZUFDN0IsZ0JBQWdCLGFBQWEsZUFDN0IsZUFBZSxhQUFhLGNBQzVCLFlBQVksYUFBYSxXQUN6QixjQUFjLGFBQWE7QUFDL0IsVUFBSSxtQkFBbUIsS0FBSztBQUM1QixhQUFvQkEsb0JBQW9CLFlBQVksU0FBUyxDQUFBLEdBQUksYUFBYTtBQUFBLFFBQzVFLElBQUksS0FBSyxhQUFhLGFBQWE7QUFBQSxRQUNuQztBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRCxDQUFBLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDTCxHQUFLO0FBQUEsSUFDRCxLQUFLO0FBQUEsSUFDTCxPQUFPLGtCQUFrQjtBQUN2QixVQUFJLHVCQUF1QixLQUFLLGNBQWUsR0FDM0MsV0FBVSxxQkFBcUIsU0FDL0IsdUJBQXNCLHFCQUFxQixxQkFDM0MsbUJBQWtCLHFCQUFxQixpQkFDdkMsa0JBQWlCLHFCQUFxQjtBQUUxQyxVQUFJLGdCQUFnQixLQUFLLE9BQ3JCLFlBQVksY0FBYyxXQUMxQixLQUFLLGNBQWMsSUFDbkIsYUFBYSxjQUFjLFlBQzNCLGFBQWEsY0FBYztBQUMvQixVQUFJLFlBQVksS0FBSyxNQUFNO0FBQzNCLFVBQUksY0FBYyxLQUFLLGNBQWMsS0FBSyxlQUFjO0FBQ3hELGFBQW9CQSxvQkFBb0Isa0JBQWlCLFNBQVMsQ0FBQSxHQUFJLGFBQWE7QUFBQSxRQUNqRjtBQUFBLFFBQ0EsWUFBWTtBQUFBLFVBQ1Y7QUFBQSxVQUNBLFdBQVcsS0FBSztBQUFBLFFBQ2pCO0FBQUEsUUFDRDtBQUFBLFFBQ0E7QUFBQSxNQUNSLENBQU8sR0FBRyxLQUFLLG9CQUFpQ0Esb0JBQW9CLFVBQVMsU0FBUyxDQUFFLEdBQUUsYUFBYTtBQUFBLFFBQy9GLFVBQVUsS0FBSztBQUFBLFFBQ2YsWUFBWTtBQUFBLFVBQ1YsYUFBYSxLQUFLO0FBQUEsVUFDbEIsWUFBWSxLQUFLO0FBQUEsUUFDbEI7QUFBQSxRQUNEO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNELENBQUEsR0FBZ0JBLG9CQUFvQixpQkFBZ0IsU0FBUyxDQUFBLEdBQUksYUFBYTtBQUFBLFFBQzdFO0FBQUEsTUFDRCxDQUFBLEdBQUcsS0FBSyx5QkFBMEIsR0FBRSxLQUFLLFlBQVcsQ0FBRSxHQUFnQkEsb0JBQW9CLHNCQUFxQixTQUFTLENBQUEsR0FBSSxhQUFhO0FBQUEsUUFDeEk7QUFBQSxNQUNSLENBQU8sR0FBRyxLQUFLLHFCQUFzQixHQUFFLEtBQUssdUJBQXdCLEdBQUUsS0FBSyx5QkFBMEIsR0FBRSxLQUFLLHdCQUF1QixDQUFFLENBQUMsR0FBRyxLQUFLLFdBQVUsR0FBSSxLQUFLLGdCQUFlLENBQUU7QUFBQSxJQUM3SztBQUFBLEVBQ0YsQ0FBQSxHQUFHLENBQUM7QUFBQSxJQUNILEtBQUs7QUFBQSxJQUNMLE9BQU8sa0NBQWtDLE9BQU8sT0FBTztBQUNyRCxVQUFJLFlBQVksTUFBTSxXQUNsQiwwQkFBMEIsTUFBTSx5QkFDaEMsMkJBQTJCLE1BQU0sMEJBQ2pDLGdCQUFnQixNQUFNLGVBQ3RCLFlBQVksTUFBTSxXQUNsQixpQkFBaUIsTUFBTTtBQUMzQixVQUFJLFdBQVUsTUFBTSxTQUNoQixRQUFRLE1BQU0sT0FDZCxhQUFhLE1BQU0sWUFDbkIsYUFBYSxNQUFNLFlBQ25CLFVBQVUsTUFBTTtBQUNwQixVQUFJLGNBQWMsV0FBVyxLQUFLO0FBQ2xDLFVBQUksc0JBQXNCLENBQUE7QUFFMUIsVUFBSSxhQUFjLFdBQVUsVUFBVSxTQUFTLGFBQVksVUFBVSxXQUFXLGVBQWUsVUFBVSxjQUFjLGVBQWUsVUFBVSxhQUFhO0FBQzNKLFlBQUksbUJBQW1CLGFBQWEsc0JBQXNCLE9BQU8sV0FBVyxJQUFJO0FBQ2hGLFlBQUksZUFBZSwwQkFBMEIsb0JBQW9CLE9BQU8sV0FBVyxJQUFJO0FBQ3ZGLFlBQUksZ0JBQWdCLHFCQUFxQixPQUFPLGdCQUFnQjtBQUNoRSw4QkFBc0I7QUFBQSxVQUNwQjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQSx5QkFBeUI7QUFBQSxRQUNuQztBQUFBLE1BQ087QUFHRCxVQUFJLHdCQUF3Qiw0QkFBNEIsUUFBUSxVQUFVLFlBQVk7QUFBQSxRQUNwRixlQUFlO0FBQUEsUUFDZiwwQkFBMEI7QUFBQSxNQUMzQixJQUFHO0FBQ0osVUFBSSxtQkFBbUI7QUFDdkIsVUFBSSxlQUFlLGFBQWE7QUFFaEMsVUFBSSxhQUFhLENBQUMsY0FBYztBQUc5QiwyQkFBbUI7QUFBQSxVQUNqQixPQUFPLGFBQWEsU0FBUyxhQUFhLFlBQVksTUFBTSxJQUFJO0FBQUEsVUFDaEUsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFFBQ2xCO0FBQ1EsdUJBQWUsQ0FBQztBQUFBLE1BQ2pCO0FBSUQsVUFBSyxtQkFBa0IsUUFBUSxrQkFBa0IsU0FBUyxTQUFTLGNBQWMsWUFBWSx1QkFBdUI7QUFDbEgsMkJBQW1CO0FBQUEsTUFDcEI7QUFFRCxhQUFPLGVBQWUsZUFBZSxlQUFlLENBQUEsR0FBSSxtQkFBbUIsR0FBRyxxQkFBcUIsR0FBRyxJQUFJO0FBQUEsUUFDeEcsV0FBVztBQUFBLFFBQ1gsZUFBZTtBQUFBLFFBQ2YsZ0JBQWdCO0FBQUEsTUFDeEIsQ0FBTztBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUEsQ0FBQztBQUVGLFNBQU87QUFDVCxFQUFFZixHQUFTO0FBRVhjLFNBQU8sZUFBZTtBQ3hxRnRCLElBQUkscUJBQWtDNUIsb0JBQVcsU0FBVSxPQUFPLEtBQUs7QUFDckUsTUFBSSxrQkFBa0IsZ0JBQWdCLEtBQUs7QUFDM0MsU0FBb0I2QixvQkFBb0JELFVBQVEsU0FBUztBQUFBLElBQ3ZEO0FBQUEsRUFDSixHQUFLLGVBQWUsQ0FBQztBQUNyQixDQUFDO0FBc0NELElBQUEsY0FBZTtBQ2hFUiw2QkFDTCxLQUNBLFdBQWdDO0FBQUEsRUFDOUIsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUNYLEdBQ0EsVUFDQTtBQUNBRixJQUFVLE1BQU07QUFDUixVQUFBLG1CQUFtQixJQUFJLGlCQUFpQixDQUFhLGNBQUE7QUFDekQsZ0JBQVUsUUFBUSxDQUFBLGFBQVkscUNBQVcsU0FBUztBQUFBLElBQUEsQ0FDbkQ7QUFFZ0IscUJBQUEsUUFBUSxJQUFJLFNBQVMsUUFBTztBQUM3QyxXQUFPLE1BQU07QWhEakJkO0FnRGtCRyxpRUFBa0IsZUFBbEI7QUFBQSxJQUErQjtBQUFBLEVBRWhDLEdBQUEsQ0FBQyxLQUFLLFVBQVMsUUFBUSxDQUFDO0FBQzdCO0FDTkEsZ0JBQStCLE9BQW9CO0FqRGZoRDtBaURnQkssUUFBQTtBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsT0FDRztBQUFBLE1BQ0Q7QUFFRSxRQUFBLENBQUMsVUFBVSxlQUFlUCxJQUM5QixXQUFLLGVBQUwsWUFBbUIsdUNBQVEsWUFBUixtQkFBaUIsUUFDdEM7QUFDTSxRQUFBLENBQUMsS0FBSyxVQUFVQSxJQUNwQixXQUFLLFVBQUwsWUFBYyx1Q0FBUSxZQUFSLG1CQUFpQixhQUFhLFdBQzlDO0FBQ00sUUFBQSxDQUFDLFNBQVMsY0FBY0EsSUFDNUIsV0FBSyxjQUFMLFlBQWtCLHVDQUFRLFlBQVIsbUJBQWlCLGFBQWEsZUFDbEQ7QUFDTSxRQUFBLENBQUMsWUFBWSxpQkFBaUJBLElBQ2xDLFdBQUssaUJBQUwsWUFBcUIsdUNBQVEsWUFBUixtQkFBaUIsYUFBYSxrQkFDckQ7QUFDTSxRQUFBLENBQUMsV0FBVyxnQkFBZ0JBLElBQ2hDLFdBQUssZ0JBQUwsWUFBb0IsdUNBQVEsWUFBUixtQkFBaUIsYUFBYSxpQkFDcEQ7QUFDQSxRQUFNLENBQUMsT0FBTyxZQUFZQSxJQUFjLElBQUk7QUFDNUMsUUFBTSxDQUFDLFVBQVMsY0FBY0EsSUFBZ0IsQ0FBRSxDQUFBO0FBRTFDLFFBQUEsaUJBQWlCQyxJQUFZLENBQUMsYUFBNkI7QUFFM0QsUUFBQSxTQUFTLFdBQVcsT0FBTztBQUFTO0FBQ3hDLFVBQU0sU0FBUyxTQUFTO0FBR3hCLFFBQUksU0FBUyxTQUFTLGdCQUFnQixTQUFTLGVBQWU7QUFDcEQsY0FBQSxJQUNOLFdBQ0EsU0FBUyxlQUNULE9BQU8sYUFBYSxTQUFTLGFBQWEsQ0FDNUM7QUFFQSxjQUFRLFNBQVM7QUFBQSxhQUNWLFlBQVk7QUFDUixpQkFBQSxZQUFZLE9BQU8sUUFBUTtBQUFBLFFBQ3BDO0FBQUEsYUFDSyxnQkFBZ0I7QUFDbkIsaUJBQU8sV0FBVyxPQUFPLGFBQWEsY0FBYyxDQUFDO0FBQUEsUUFDdkQ7QUFBQSxhQUNLLG1CQUFtQjtBQUN0QixpQkFBTyxjQUFjLE9BQU8sYUFBYSxpQkFBaUIsQ0FBQztBQUFBLFFBQzdEO0FBQUEsYUFDSyxrQkFBa0I7QUFDckIsaUJBQU8sYUFBYSxPQUFPLGFBQWEsZ0JBQWdCLENBQUM7QUFBQSxRQUMzRDtBQUFBLGFBQ0ssWUFBWTtBQUNmLGlCQUFPLE9BQU8sT0FBTyxhQUFhLFVBQVUsQ0FBQztBQUFBLFFBQy9DO0FBQUE7QUFBQSxJQUVKO0FBQUEsRUFDRixHQUFHLENBQUUsQ0FBQTtBQUVDLFFBQUEsMEJBQTBCSSxJQUM5QixNQUFPO0FBQUEsSUFDTCxZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsRUFBQSxJQUVYLENBQ0YsQ0FBQTtBQUVvQixzQkFBQSxRQUFRLHlCQUF5QixjQUFjO0FBRXZDLDhCQUFBO0FBQzFCLFFBQUksQ0FBQyxPQUFPO0FBQVMsYUFBTztBQUU1QixVQUFNLFFBQVEsQ0FBQyxHQUFHLE9BQU8sUUFBUSxpQkFBaUIsUUFBUSxDQUFDO0FBQzNELFFBQUksQ0FBQyxnQ0FBTztBQUFRLGFBQU87QUFFcEIsV0FBQSxNQUNKLElBQUksQ0FBVSxXQUFBO0FBQ04sYUFBQTtBQUFBLFFBQ0wsT0FBTyxPQUFPLGFBQWEsT0FBTztBQUFBLFFBQ2xDLE9BQU8sT0FBTztBQUFBLE1BQUE7QUFBQSxJQUNoQixDQUNELEVBQ0EsT0FBTyxPQUFPO0FBQUEsRUFDbkI7QUFFQSxRQUFNLE9BQU9KLElBQVksQ0FBQyxTQUFpQixTQUFnQjtBQUN6RCxVQUFNLFVBQVUsT0FBTztBQUN2QixRQUFJLENBQUM7QUFBUztBQUNkLFVBQU0sUUFBUSxJQUFJLFlBQVksVUFBVSxRQUFRO0FBQUEsTUFDOUMsUUFBUTtBQUFBLE1BRVIsUUFBUTtBQUFBLElBQUEsQ0FDVDtBQUNELFlBQVEsY0FBYyxLQUFLO0FBQUEsRUFDN0IsR0FBRyxDQUFFLENBQUE7QUFFTGYsTUFBZ0IsTUFBTTtBQUNwQixVQUFNLFVBQVUsT0FBTztBQUN2QixRQUFJLENBQUM7QUFBUztBQUVkLFNBQUssZUFBZSxPQUFPO0FBRXJCLFVBQUEsUUFBUSxRQUFRLE1BQU07QUFDNUIsWUFBUSxNQUFNLFVBQVU7QUFFeEIsVUFBTSxPQUFPO0FBQ2IsZUFBVyxJQUFJO0FBRWYsUUFBSSxLQUFLLElBQUk7QUFDWCxlQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssR0FBQSxDQUFJLENBQUM7QUFBQSxJQUMzQjtBQUVBLFNBQUssUUFBUSxNQUFNO0FBQ25CLFdBQU8sTUFBTTtBQUNYLGNBQVEsTUFBTSxVQUFVO0FBQ3hCLFdBQUssV0FBVyxNQUFNO0FBQUEsSUFBQTtBQUFBLEVBQ3hCLEdBQ0MsQ0FBQyxNQUFNLENBQUM7QUFFWHFCLElBQVUsTUFBTTtBQUNkLFFBQUksUUFBUTtBQUNWLFlBQU0sT0FBTyxPQUFPLFFBQVEsaUJBQWlCLFFBQVE7QUFFaEQsV0FBQSxRQUFRLENBQUMsV0FBOEI7QUFDMUMsWUFBSSxPQUFPLGFBQWEsT0FBTyxNQUFPLGdDQUFPLFFBQWtCO0FBQ3RELGlCQUFBLGFBQWEsWUFBWSxJQUFXO0FBQUEsUUFBQSxPQUN0QztBQUNMLGlCQUFPLGdCQUFnQixVQUFVO0FBQUEsUUFDbkM7QUFBQSxNQUFBLENBQ0Q7QUFFRCxXQUFLLFVBQVUsS0FBSztBQUFBLElBQ3RCO0FBQUEsRUFBQSxHQUNDLENBQUMsS0FBSyxDQUFDO0FBRVYsd0JBQXNCLE9BQVk7QUFDaEMsYUFBUyxLQUFLO0FBQUEsRUFDaEI7QUFFQSw2QkFBMkIsT0FBWTtBQUNyQyxTQUFLLGVBQWUsS0FBSztBQUFBLEVBQzNCO0FBRUEsc0JBQW9CLE9BQVk7QUFDOUIsU0FBSyxRQUFRLEtBQUs7QUFBQSxFQUNwQjtBQUVBLHVCQUFxQixPQUFZO0FBQy9CLFNBQUssU0FBUyxLQUFLO0FBQUEsRUFDckI7QUFFQSx5QkFBdUIsT0FBWTtBQUNqQyxTQUFLLFdBQVcsS0FBSztBQUFBLEVBQ3ZCO0FBRTJCLDZCQUFBO0FBQ3pCLFNBQUssV0FBVztBQUFBLEVBQ2xCO0FBRTBCLDRCQUFBO0FBQ3hCLFNBQUssVUFBVTtBQUFBLEVBQ2pCO0FBRUEsb0NBQWtDLE9BQVk7QUFDNUMsU0FBSyxzQkFBc0IsS0FBSztBQUFBLEVBQ2xDO0FBRUEsaUNBQStCLE9BQVk7QUFDekMsU0FBSyxtQkFBbUIsS0FBSztBQUFBLEVBQy9CO0FBRUEsU0FDR3ZDLG9CQUFBLGFBQUE7QUFBQSxJQUNDO0FBQUEsSUFDQSxZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUEsSUFDWCxjQUFjO0FBQUEsSUFDZCxhQUFhO0FBQUEsSUFDYixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUEsSUFDVCxXQUFXO0FBQUEsSUFDWCxhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsSUFDWixzQkFBc0I7QUFBQSxJQUN0QixtQkFBbUI7QUFBQSxJQUNuQjtBQUFBLElBQ0MsR0FBRztBQUFBLEVBQUEsQ0FDTjtBQUVKO0FDNU1FLHNCQUFBLFFBQ0EsV0FBeUIsSUFDekI7QUFDTSxRQUFBLEVBQUUsZ0JBQWdCLHFCQUFxQixVQUFVO0FBRXZELFFBQU0sU0FBUyxPQUFPO0FBQ2hCLFFBQUEsWUFBWTJDLGFBQVcsa0JBQWtCLGtCQUFrQjtBQUFBLElBRS9ELEdBQUcsT0FBTyxVQUFVLE9BQU87QUFBQSxFQUFBLENBQzVCO0FBRUQsUUFBTSxZQUFZQztBQUNsQixZQUFVLFVBQVU7QUFFcEIsUUFBTSxZQUFZQTtBQUNsQixZQUFVLFVBQVU7QUFFcEJDLE1BQ0c3QyxvQkFBQSxRQUFBO0FBQUEsSUFDQyxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUjtBQUFBLElBQ0MsR0FBRztBQUFBLEVBQUEsQ0FDTixHQUNBLE1BQ0Y7QUFFTyxTQUFBLEVBQUUsUUFBUTtBQUNuQjs7In0=
