/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var l, aa = function (b) {
  var g = 0;
  return function () {
    return g < b.length ? {done: ! 1, value: b[g++]} : {done: ! 0}
  }
}, ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function (b, g, m) {
  if (b == Array.prototype || b == Object.prototype) return b;
  b[g] = m.value;
  return b
}, ca = function (b) {
  b = ["object" == typeof globalThis && globalThis, b, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var g = 0; g < b.length; ++g) {
    var m = b[g];
    if (m && m.Math == Math) return m
  }
  throw Error("a");
}, da =
  ca(this), ea = function (b, g) {
  if (g) a:{
    var m = da;
    b = b.split(".");
    for (var k = 0; k < b.length - 1; k++) {
      var c = b[k];
      if ( ! (c in m)) break a;
      m = m[c]
    }
    b = b[b.length - 1];
    k = m[b];
    g = g(k);
    g != k && null != g && ba(m, b, {configurable: ! 0, writable: ! 0, value: g})
  }
};
ea("Symbol", function (b) {
  if (b) return b;
  var g = function (a, n) {
    this.ha = a;
    ba(this, "description", {configurable: ! 0, writable: ! 0, value: n})
  };
  g.prototype.toString = function () {
    return this.ha
  };
  var m = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_", k = 0, c = function (a) {
    if (this instanceof c) throw new TypeError("b");
    return new g(m + (a || "") + "_" + k++, a)
  };
  return c
});
ea("Symbol.iterator", function (b) {
  if (b) return b;
  b = Symbol("Symbol.iterator");
  for (var g = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), m = 0; m < g.length; m++) {
    var k = da[g[m]];
    "function" === typeof k && "function" != typeof k.prototype[b] && ba(k.prototype, b, {
      configurable: ! 0,
      writable: ! 0,
      value: function () {
        return fa(aa(this))
      }
    })
  }
  return b
});
var fa = function (b) {
  b = {next: b};
  b[Symbol.iterator] = function () {
    return this
  };
  return b
}, p = function (b) {
  var g = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
  return g ? g.call(b) : {next: aa(b)}
}, ha = function (b) {
  if ( ! (b instanceof Array)) {
    b = p(b);
    for (var g, m = []; ! (g = b.next()).done;) m.push(g.value);
    b = m
  }
  return b
}, ia = "function" == typeof Object.create ? Object.create : function (b) {
  var g = function () {
  };
  g.prototype = b;
  return new g
}, ja;
if ("function" == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf; else {
  var ka;
  a:{
    var la = {a: ! 0}, ma = {};
    try {
      ma.__proto__ = la;
      ka = ma.a;
      break a
    } catch (b) {
    }
    ka = ! 1
  }
  ja = ka ? function (b, g) {
    b.__proto__ = g;
    if (b.__proto__ !== g) throw new TypeError("c`" + b);
    return b
  } : null
}
var na = ja, q = function (b, g) {
  b.prototype = ia(g.prototype);
  b.prototype.constructor = b;
  if (na) na(b, g); else for (var m in g) if ("prototype" != m) if (Object.defineProperties) {
    var k = Object.getOwnPropertyDescriptor(g, m);
    k && Object.defineProperty(b, m, k)
  } else b[m] = g[m];
  b.lS = g.prototype
}, oa = function () {
  this.Bb = ! 1;
  this.Ca = null;
  this.kb = void 0;
  this.ha = 1;
  this.le = 0;
  this.oc = null
}, pa = function (b) {
  if (b.Bb) throw new TypeError("e");
  b.Bb = ! 0
};
oa.prototype.Sc = function (b) {
  this.kb = b
};
var qa = function (b, g) {
  b.oc = {Eab: g, obb: ! 0};
  b.ha = b.le
};
oa.prototype.return = function (b) {
  this.oc = {return: b};
  this.ha = this.le
};
var ra = function (b, g, m) {
  b.ha = m;
  return {value: g}
}, sa = function (b) {
  this.ha = new oa;
  this.Ca = b
}, va = function (b, g) {
  pa(b.ha);
  var m = b.ha.Ca;
  if (m) return ta(b, "return" in m ? m["return"] : function (k) {
    return {value: k, done: ! 0}
  }, g, b.ha.return);
  b.ha.return(g);
  return ua(b)
}, ta = function (b, g, m, k) {
  try {
    var c = g.call(b.ha.Ca, m);
    if ( ! (c instanceof Object)) throw new TypeError("d`" + c);
    if ( ! c.done) return b.ha.Bb = ! 1, c;
    var a = c.value
  } catch (n) {
    return b.ha.Ca = null, qa(b.ha, n), ua(b)
  }
  b.ha.Ca = null;
  k.call(b.ha, a);
  return ua(b)
}, ua = function (b) {
  for (; b.ha.ha;) try {
    var g =
      b.Ca(b.ha);
    if (g) return b.ha.Bb = ! 1, {value: g.value, done: ! 1}
  } catch (m) {
    b.ha.kb = void 0, qa(b.ha, m)
  }
  b.ha.Bb = ! 1;
  if (b.ha.oc) {
    g = b.ha.oc;
    b.ha.oc = null;
    if (g.obb) throw g.Eab;
    return {value: g.return, done: ! 0}
  }
  return {value: void 0, done: ! 0}
}, wa = function (b) {
  this.next = function (g) {
    pa(b.ha);
    b.ha.Ca ? g = ta(b, b.ha.Ca.next, g, b.ha.Sc) : (b.ha.Sc(g), g = ua(b));
    return g
  };
  this.throw = function (g) {
    pa(b.ha);
    b.ha.Ca ? g = ta(b, b.ha.Ca["throw"], g, b.ha.Sc) : (qa(b.ha, g), g = ua(b));
    return g
  };
  this.return = function (g) {
    return va(b, g)
  };
  this[Symbol.iterator] =
    function () {
      return this
    }
}, xa = function (b) {
  function g(k) {
    return b.next(k)
  }

  function m(k) {
    return b.throw(k)
  }

  return new Promise(function (k, c) {
    function a(n) {
      n.done ? k(n.value) : Promise.resolve(n.value).then(g, m).then(a, c)
    }

    a(b.next())
  })
}, ya = function (b) {
  return xa(new wa(new sa(b)))
};
ea("Promise", function (b) {
  function g() {
    this.ha = null
  }

  function m(n) {
    return n instanceof c ? n : new c(function (h) {
      h(n)
    })
  }

  if (b) return b;
  g.prototype.Ca = function (n) {
    if (null == this.ha) {
      this.ha = [];
      var h = this;
      this.kb(function () {
        h.oc()
      })
    }
    this.ha.push(n)
  };
  var k = da.setTimeout;
  g.prototype.kb = function (n) {
    k(n, 0)
  };
  g.prototype.oc = function () {
    for (; this.ha && this.ha.length;) {
      var n = this.ha;
      this.ha = [];
      for (var h = 0; h < n.length; ++h) {
        var d = n[h];
        n[h] = null;
        try {
          d()
        } catch (e) {
          this.Bb(e)
        }
      }
    }
    this.ha = null
  };
  g.prototype.Bb = function (n) {
    this.kb(function () {
      throw n;
    })
  };
  var c = function (n) {
    this.ha = 0;
    this.kb = void 0;
    this.Ca = [];
    this.le = ! 1;
    var h = this.Bb();
    try {
      n(h.resolve, h.reject)
    } catch (d) {
      h.reject(d)
    }
  };
  c.prototype.Bb = function () {
    function n(e) {
      return function (f) {
        d || (d = ! 0, e.call(h, f))
      }
    }

    var h = this, d = ! 1;
    return {resolve: n(this.Xs), reject: n(this.oc)}
  };
  c.prototype.Xs = function (n) {
    if (n === this) this.oc(new TypeError("f")); else if (n instanceof c) this.Xw(n); else {
      a:switch (typeof n) {
        case "object":
          var h = null != n;
          break a;
        case "function":
          h = ! 0;
          break a;
        default:
          h = ! 1
      }
      h ? this.Jk(n) : this.Sc(n)
    }
  };
  c.prototype.Jk = function (n) {
    var h = void 0;
    try {
      h = n.then
    } catch (d) {
      this.oc(d);
      return
    }
    "function" == typeof h ? this.qB(h, n) : this.Sc(n)
  };
  c.prototype.oc = function (n) {
    this.Xd(2, n)
  };
  c.prototype.Sc = function (n) {
    this.Xd(1, n)
  };
  c.prototype.Xd = function (n, h) {
    if (0 != this.ha) throw Error("g`" + n + "`" + h + "`" + this.ha);
    this.ha = n;
    this.kb = h;
    2 === this.ha && this.Wt();
    this.Af()
  };
  c.prototype.Wt = function () {
    var n = this;
    k(function () {
      if (n.Pk()) {
        var h = da.console;
        "undefined" !== typeof h && h.error(n.kb)
      }
    }, 1)
  };
  c.prototype.Pk = function () {
    if (this.le) return ! 1;
    var n = da.CustomEvent, h = da.Event, d = da.dispatchEvent;
    if ("undefined" === typeof d) return ! 0;
    "function" === typeof n ? n = new n("unhandledrejection", {cancelable: ! 0}) : "function" === typeof h ? n = new h("unhandledrejection", {cancelable: ! 0}) : (n = da.document.createEvent("CustomEvent"), n.initCustomEvent("unhandledrejection", ! 1, ! 0, n));
    n.promise = this;
    n.reason = this.kb;
    return d(n)
  };
  c.prototype.Af = function () {
    if (null != this.Ca) {
      for (var n = 0; n < this.Ca.length; ++n) a.Ca(this.Ca[n]);
      this.Ca = null
    }
  };
  var a = new g;
  c.prototype.Xw = function (n) {
    var h =
      this.Bb();
    n.n_(h.resolve, h.reject)
  };
  c.prototype.qB = function (n, h) {
    var d = this.Bb();
    try {
      n.call(h, d.resolve, d.reject)
    } catch (e) {
      d.reject(e)
    }
  };
  c.prototype.then = function (n, h) {
    function d(u, E) {
      return "function" == typeof u ? function (P) {
        try {
          e(u(P))
        } catch (K) {
          f(K)
        }
      } : E
    }

    var e, f, v = new c(function (u, E) {
      e = u;
      f = E
    });
    this.n_(d(n, e), d(h, f));
    return v
  };
  c.prototype.catch = function (n) {
    return this.then(void 0, n)
  };
  c.prototype.n_ = function (n, h) {
    function d() {
      switch (e.ha) {
        case 1:
          n(e.kb);
          break;
        case 2:
          h(e.kb);
          break;
        default:
          throw Error("h`" +
            e.ha);
      }
    }

    var e = this;
    null == this.Ca ? a.Ca(d) : this.Ca.push(d);
    this.le = ! 0
  };
  c.resolve = m;
  c.reject = function (n) {
    return new c(function (h, d) {
      d(n)
    })
  };
  c.race = function (n) {
    return new c(function (h, d) {
      for (var e = p(n), f = e.next(); ! f.done; f = e.next()) m(f.value).n_(h, d)
    })
  };
  c.all = function (n) {
    var h = p(n), d = h.next();
    return d.done ? m([]) : new c(function (e, f) {
      function v(P) {
        return function (K) {
          u[P] = K;
          E--;
          0 == E && e(u)
        }
      }

      var u = [], E = 0;
      do u.push(void 0), E++, m(d.value).n_(v(u.length - 1), f), d = h.next(); while ( ! d.done)
    })
  };
  return c
});
var za = function (b, g) {
  return Object.prototype.hasOwnProperty.call(b, g)
};
ea("WeakMap", function (b) {
  function g() {
  }

  function m(d) {
    var e = typeof d;
    return "object" === e && null !== d || "function" === e
  }

  function k(d) {
    if ( ! za(d, a)) {
      var e = new g;
      ba(d, a, {value: e})
    }
  }

  function c(d) {
    var e = Object[d];
    e && (Object[d] = function (f) {
      if (f instanceof g) return f;
      Object.isExtensible(f) && k(f);
      return e(f)
    })
  }

  if (function () {
    if ( ! b || ! Object.seal) return ! 1;
    try {
      var d = Object.seal({}), e = Object.seal({}), f = new b([[d, 2], [e, 3]]);
      if (2 != f.get(d) || 3 != f.get(e)) return ! 1;
      f.delete(d);
      f.set(e, 4);
      return ! f.has(d) && 4 == f.get(e)
    } catch (v) {
      return ! 1
    }
  }()) return b;
  var a = "$jscomp_hidden_" + Math.random();
  c("freeze");
  c("preventExtensions");
  c("seal");
  var n = 0, h = function (d) {
    this.ha = (n += Math.random() + 1).toString();
    if (d) {
      d = p(d);
      for (var e; ! (e = d.next()).done;) e = e.value, this.set(e[0], e[1])
    }
  };
  h.prototype.set = function (d, e) {
    if ( ! m(d)) throw Error("i");
    k(d);
    if ( ! za(d, a)) throw Error("j`" + d);
    d[a][this.ha] = e;
    return this
  };
  h.prototype.get = function (d) {
    return m(d) && za(d, a) ? d[a][this.ha] : void 0
  };
  h.prototype.has = function (d) {
    return m(d) && za(d, a) && za(d[a], this.ha)
  };
  h.prototype.delete = function (d) {
    return m(d) &&
    za(d, a) && za(d[a], this.ha) ? delete d[a][this.ha] : ! 1
  };
  return h
});
ea("Map", function (b) {
  if (function () {
    if ( ! b || "function" != typeof b || ! b.prototype.entries || "function" != typeof Object.seal) return ! 1;
    try {
      var h = Object.seal({x: 4}), d = new b(p([[h, "s"]]));
      if ("s" != d.get(h) || 1 != d.size || d.get({x: 4}) || d.set({x: 4}, "t") != d || 2 != d.size) return ! 1;
      var e = d.entries(), f = e.next();
      if (f.done || f.value[0] != h || "s" != f.value[1]) return ! 1;
      f = e.next();
      return f.done || 4 != f.value[0].x || "t" != f.value[1] || ! e.next().done ? ! 1 : ! 0
    } catch (v) {
      return ! 1
    }
  }()) return b;
  var g = new WeakMap, m = function (h) {
    this.Ca = {};
    this.ha =
      a();
    this.size = 0;
    if (h) {
      h = p(h);
      for (var d; ! (d = h.next()).done;) d = d.value, this.set(d[0], d[1])
    }
  };
  m.prototype.set = function (h, d) {
    h = 0 === h ? 0 : h;
    var e = k(this, h);
    e.list || (e.list = this.Ca[e.id] = []);
    e.Qx ? e.Qx.value = d : (e.Qx = {
      next: this.ha,
      yK: this.ha.yK,
      head: this.ha,
      key: h,
      value: d
    }, e.list.push(e.Qx), this.ha.yK.next = e.Qx, this.ha.yK = e.Qx, this.size++);
    return this
  };
  m.prototype.delete = function (h) {
    h = k(this, h);
    return h.Qx && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.Ca[h.id], h.Qx.yK.next = h.Qx.next, h.Qx.next.yK =
      h.Qx.yK, h.Qx.head = null, this.size--, ! 0) : ! 1
  };
  m.prototype.clear = function () {
    this.Ca = {};
    this.ha = this.ha.yK = a();
    this.size = 0
  };
  m.prototype.has = function (h) {
    return !! k(this, h).Qx
  };
  m.prototype.get = function (h) {
    return (h = k(this, h).Qx) && h.value
  };
  m.prototype.entries = function () {
    return c(this, function (h) {
      return [h.key, h.value]
    })
  };
  m.prototype.keys = function () {
    return c(this, function (h) {
      return h.key
    })
  };
  m.prototype.values = function () {
    return c(this, function (h) {
      return h.value
    })
  };
  m.prototype.forEach = function (h, d) {
    for (var e = this.entries(),
           f; ! (f = e.next()).done;) f = f.value, h.call(d, f[1], f[0], this)
  };
  m.prototype[Symbol.iterator] = m.prototype.entries;
  var k = function (h, d) {
    var e = d && typeof d;
    "object" == e || "function" == e ? g.has(d) ? e = g.get(d) : (e = "" + ++n, g.set(d, e)) : e = "p_" + d;
    var f = h.Ca[e];
    if (f && za(h.Ca, e)) for (h = 0; h < f.length; h++) {
      var v = f[h];
      if (d !== d && v.key !== v.key || d === v.key) return {id: e, list: f, index: h, Qx: v}
    }
    return {id: e, list: f, index: -1, Qx: void 0}
  }, c = function (h, d) {
    var e = h.ha;
    return fa(function () {
      if (e) {
        for (; e.head != h.ha;) e = e.yK;
        for (; e.next != e.head;) return e =
          e.next, {done: ! 1, value: d(e)};
        e = null
      }
      return {done: ! 0, value: void 0}
    })
  }, a = function () {
    var h = {};
    return h.yK = h.next = h.head = h
  }, n = 0;
  return m
});
ea("Array.prototype.find", function (b) {
  return b ? b : function (g, m) {
    a:{
      var k = this;
      k instanceof String && (k = String(k));
      for (var c = k.length, a = 0; a < c; a++) {
        var n = k[a];
        if (g.call(m, n, a, k)) {
          g = n;
          break a
        }
      }
      g = void 0
    }
    return g
  }
});
var Aa = function (b, g, m) {
  if (null == b) throw new TypeError("k`" + m);
  if (g instanceof RegExp) throw new TypeError("l`" + m);
  return b + ""
};
ea("String.prototype.startsWith", function (b) {
  return b ? b : function (g, m) {
    var k = Aa(this, g, "startsWith");
    g += "";
    var c = k.length, a = g.length;
    m = Math.max(0, Math.min(m | 0, k.length));
    for (var n = 0; n < a && m < c;) if (k[m++] != g[n++]) return ! 1;
    return n >= a
  }
});
ea("String.prototype.repeat", function (b) {
  return b ? b : function (g) {
    var m = Aa(this, null, "repeat");
    if (0 > g || 1342177279 < g) throw new RangeError("Invalid count value");
    g |= 0;
    for (var k = ""; g;) if (g & 1 && (k += m), g >>>= 1) m += m;
    return k
  }
});
var Ba = function (b, g) {
  b instanceof String && (b += "");
  var m = 0, k = ! 1, c = {
    next: function () {
      if ( ! k && m < b.length) {
        var a = m++;
        return {value: g(a, b[a]), done: ! 1}
      }
      k = ! 0;
      return {done: ! 0, value: void 0}
    }
  };
  c[Symbol.iterator] = function () {
    return c
  };
  return c
};
ea("Array.prototype.keys", function (b) {
  return b ? b : function () {
    return Ba(this, function (g) {
      return g
    })
  }
});
ea("Array.from", function (b) {
  return b ? b : function (g, m, k) {
    m = null != m ? m : function (h) {
      return h
    };
    var c = [], a = "undefined" != typeof Symbol && Symbol.iterator && g[Symbol.iterator];
    if ("function" == typeof a) {
      g = a.call(g);
      for (var n = 0; ! (a = g.next()).done;) c.push(m.call(k, a.value, n++))
    } else for (a = g.length, n = 0; n < a; n++) c.push(m.call(k, g[n], n));
    return c
  }
});
ea("Array.prototype.values", function (b) {
  return b ? b : function () {
    return Ba(this, function (g, m) {
      return m
    })
  }
});
ea("Object.is", function (b) {
  return b ? b : function (g, m) {
    return g === m ? 0 !== g || 1 / g === 1 / m : g !== g && m !== m
  }
});
ea("Array.prototype.includes", function (b) {
  return b ? b : function (g, m) {
    var k = this;
    k instanceof String && (k = String(k));
    var c = k.length;
    m = m || 0;
    for (0 > m && (m = Math.max(m + c, 0)); m < c; m++) {
      var a = k[m];
      if (a === g || Object.is(a, g)) return ! 0
    }
    return ! 1
  }
});
ea("String.prototype.includes", function (b) {
  return b ? b : function (g, m) {
    return -1 !== Aa(this, g, "includes").indexOf(g, m || 0)
  }
});
var Ca = "function" == typeof Object.assign ? Object.assign : function (b, g) {
  for (var m = 1; m < arguments.length; m++) {
    var k = arguments[m];
    if (k) for (var c in k) za(k, c) && (b[c] = k[c])
  }
  return b
};
ea("Object.assign", function (b) {
  return b || Ca
});
ea("Array.prototype.fill", function (b) {
  return b ? b : function (g, m, k) {
    var c = this.length || 0;
    0 > m && (m = Math.max(0, c + m));
    if (null == k || k > c) k = c;
    k = Number(k);
    0 > k && (k = Math.max(0, c + k));
    for (m = Number(m || 0); m < k; m++) this[m] = g;
    return this
  }
});
var Da = function (b) {
  return b ? b : Array.prototype.fill
};
ea("Int8Array.prototype.fill", Da);
ea("Uint8Array.prototype.fill", Da);
ea("Uint8ClampedArray.prototype.fill", Da);
ea("Int16Array.prototype.fill", Da);
ea("Uint16Array.prototype.fill", Da);
ea("Int32Array.prototype.fill", Da);
ea("Uint32Array.prototype.fill", Da);
ea("Float32Array.prototype.fill", Da);
ea("Float64Array.prototype.fill", Da);
ea("Number.MAX_SAFE_INTEGER", function () {
  return 9007199254740991
});
ea("String.prototype.padStart", function (b) {
  return b ? b : function (g, m) {
    var k = Aa(this, null, "padStart");
    g -= k.length;
    m = void 0 !== m ? String(m) : " ";
    return (0 < g && m ? m.repeat(Math.ceil(g / m.length)).substring(0, g) : "") + k
  }
});
ea("String.prototype.matchAll", function (b) {
  return b ? b : function (g) {
    if (g instanceof RegExp && ! g.global) throw new TypeError("m");
    var m = new RegExp(g, g instanceof RegExp ? void 0 : "g"), k = this, c = ! 1, a = {
      next: function () {
        if (c) return {value: void 0, done: ! 0};
        var n = m.exec(k);
        if ( ! n) return c = ! 0, {value: void 0, done: ! 0};
        "" === n[0] && (m.lastIndex += 1);
        return {value: n, done: ! 1}
      }
    };
    a[Symbol.iterator] = function () {
      return a
    };
    return a
  }
});
ea("String.prototype.replaceAll", function (b) {
  return b ? b : function (g, m) {
    if (g instanceof RegExp && ! g.global) throw new TypeError("n");
    return g instanceof RegExp ? this.replace(g, m) : this.replace(new RegExp(String(g).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), m)
  }
});
ea("Number.isFinite", function (b) {
  return b ? b : function (g) {
    return "number" !== typeof g ? ! 1 : ! isNaN(g) && Infinity !== g && -Infinity !== g
  }
});
ea("Number.isInteger", function (b) {
  return b ? b : function (g) {
    return Number.isFinite(g) ? g === Math.floor(g) : ! 1
  }
});
ea("Number.parseInt", function (b) {
  return b || parseInt
});
ea("Math.trunc", function (b) {
  return b ? b : function (g) {
    g = Number(g);
    if (isNaN(g) || Infinity === g || -Infinity === g || 0 === g) return g;
    var m = Math.floor(Math.abs(g));
    return 0 > g ? -m : m
  }
});
ea("Promise.prototype.finally", function (b) {
  return b ? b : function (g) {
    return this.then(function (m) {
      return Promise.resolve(g()).then(function () {
        return m
      })
    }, function (m) {
      return Promise.resolve(g()).then(function () {
        throw m;
      })
    })
  }
});
var Ea = Ea || {}, r = this || self, Fa = function () {
}, Ga = function (b) {
  b.EN = void 0;
  b.AJ = function () {
    return b.EN ? b.EN : b.EN = new b
  }
}, Ha = function (b) {
  var g = typeof b;
  g = "object" != g ? g : b ? Array.isArray(b) ? "array" : g : "null";
  return "array" == g || "object" == g && "number" == typeof b.length
}, Ia = function (b) {
  var g = typeof b;
  return "object" == g && null != b || "function" == g
}, Ja = function (b, g, m) {
  return b.call.apply(b.bind, arguments)
}, Ka = function (b, g, m) {
  if ( ! b) throw Error();
  if (2 < arguments.length) {
    var k = Array.prototype.slice.call(arguments, 2);
    return function () {
      var c =
        Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, k);
      return b.apply(g, c)
    }
  }
  return function () {
    return b.apply(g, arguments)
  }
}, La = function (b, g, m) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? La = Ja : La = Ka;
  return La.apply(null, arguments)
}, Ma = function (b, g) {
  var m = Array.prototype.slice.call(arguments, 1);
  return function () {
    var k = m.slice();
    k.push.apply(k, arguments);
    return b.apply(this, k)
  }
}, Na = function (b, g) {
  b = b.split(".");
  var m = r;
  b[0] in m || "undefined" ==
  typeof m.execScript || m.execScript("var " + b[0]);
  for (var k; b.length && (k = b.shift());) b.length || void 0 === g ? m[k] && m[k] !== Object.prototype[k] ? m = m[k] : m = m[k] = {} : m[k] = g
}, Oa = function (b, g) {
  function m() {
  }

  m.prototype = g.prototype;
  b.lS = g.prototype;
  b.prototype = new m;
  b.prototype.constructor = b;
  b.qK = function (k, c, a) {
    for (var n = Array(arguments.length - 2), h = 2; h < arguments.length; h++) n[h - 2] = arguments[h];
    return g.prototype[c].apply(k, n)
  }
}, Pa = function (b) {
  return b
};
var Qa = function (b) {
  this.oc = b;
  this.Ca = ! 1;
  this.kb = []
}, Ra = function (b) {
  if ( ! b.Ca) {
    b.Ca = ! 0;
    b = p(b.kb);
    for (var g = b.next(); ! g.done; g = b.next()) g = g.value, g()
  }
};
Qa.prototype.Bb = function () {
};

function Sa(b) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, Sa); else {
    var g = Error().stack;
    g && (this.stack = g)
  }
  b && (this.message = String(b))
}

Oa(Sa, Error);
Sa.prototype.name = "CustomError";
var Ta;
var Ua = Array.prototype.indexOf ? function (b, g) {
  return Array.prototype.indexOf.call(b, g, void 0)
} : function (b, g) {
  if ("string" === typeof b) return "string" !== typeof g || 1 != g.length ? -1 : b.indexOf(g, 0);
  for (var m = 0; m < b.length; m++) if (m in b && b[m] === g) return m;
  return -1
}, Va = Array.prototype.some ? function (b, g) {
  return Array.prototype.some.call(b, g, void 0)
} : function (b, g) {
  for (var m = b.length, k = "string" === typeof b ? b.split("") : b, c = 0; c < m; c++) if (c in k && g.call(void 0, k[c], c, b)) return ! 0;
  return ! 1
};

function Wa(b, g) {
  g = Ua(b, g);
  var m;
  (m = 0 <= g) && Array.prototype.splice.call(b, g, 1);
  return m
}

function Xa(b, g, m, k) {
  Array.prototype.splice.apply(b, Ya(arguments, 1))
}

function Ya(b, g, m) {
  return 2 >= arguments.length ? Array.prototype.slice.call(b, g) : Array.prototype.slice.call(b, g, m)
}

function Za(b, g) {
  for (var m = $a || ab, k = 0, c = b.length, a; k < c;) {
    var n = k + (c - k >>> 1);
    var h = m(g, b[n]);
    0 < h ? k = n + 1 : (c = n, a = ! h)
  }
  return a ? k : -k - 1
}

function ab(b, g) {
  return b > g ? 1 : b < g ? -1 : 0
}

function bb(b) {
  for (var g = Math.random, m = b.length - 1; 0 < m; m--) {
    var k = Math.floor(g() * (m + 1)), c = b[m];
    b[m] = b[k];
    b[k] = c
  }
};var cb = String.prototype.trim ? function (b) {
  return b.trim()
} : function (b) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(b)[1]
}, db = /&/g, eb = /</g, fb = />/g, gb = /"/g, hb = /'/g, ib = /\x00/g, jb = /[\x00&<>"']/, kb = function (b, g) {
  return b < g ? -1 : b > g ? 1 : 0
};
var lb;
a:{
  var mb = r.navigator;
  if (mb) {
    var nb = mb.userAgent;
    if (nb) {
      lb = nb;
      break a
    }
  }
  lb = ""
}
var x = function (b) {
  return -1 != lb.indexOf(b)
};

function ob(b, g, m) {
  for (var k in b) g.call(m, b[k], k, b)
}

var pb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function qb(b, g) {
  for (var m, k, c = 1; c < arguments.length; c++) {
    k = arguments[c];
    for (m in k) b[m] = k[m];
    for (var a = 0; a < pb.length; a++) m = pb[a], Object.prototype.hasOwnProperty.call(k, m) && (b[m] = k[m])
  }
};var rb = function () {
  return x("Firefox") || x("FxiOS")
}, sb = function () {
  return (x("Chrome") || x("CriOS")) && ! x("Edge")
};
var tb, ub = function () {
  if (void 0 === tb) {
    var b = null, g = r.trustedTypes;
    if (g && g.createPolicy) {
      try {
        b = g.createPolicy("goog#html", {createHTML: Pa, createScript: Pa, createScriptURL: Pa})
      } catch (m) {
        r.console && r.console.error(m.message)
      }
      tb = b
    } else tb = b
  }
  return tb
};
var xb = function (b, g) {
  this.ha = b === vb && g || "";
  this.Ca = wb
};
xb.prototype.MT = ! 0;
xb.prototype.DT = function () {
  return this.ha
};
var wb = {}, vb = {};
var yb = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
  zb = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/,
  Ab = /^http:\/\/.*/, Bb = /\s+/, Cb = /[\d\u06f0-\u06f9]/;
var Eb = function (b, g) {
  this.ha = g === Db ? b : ""
};
l = Eb.prototype;
l.MT = ! 0;
l.DT = function () {
  return this.ha.toString()
};
l.e7 = ! 0;
l.c7 = function () {
  return 1
};
l.toString = function () {
  return this.ha + ""
};
var Fb = function (b) {
  return b instanceof Eb && b.constructor === Eb ? b.ha : "type_error:TrustedResourceUrl"
}, Db = {}, Hb = function () {
  var b = Gb;
  b = b instanceof xb && b.constructor === xb && b.Ca === wb ? b.ha : "type_error:Const";
  var g = ub();
  b = g ? g.createScriptURL(b) : b;
  return new Eb(b, Db)
};
var Jb = function (b, g) {
  this.ha = g === Ib ? b : ""
};
l = Jb.prototype;
l.MT = ! 0;
l.DT = function () {
  return this.ha.toString()
};
l.e7 = ! 0;
l.c7 = function () {
  return 1
};
l.toString = function () {
  return this.ha.toString()
};
var Kb = function (b) {
  return b instanceof Jb && b.constructor === Jb ? b.ha : "type_error:SafeUrl"
}, Lb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, Ib = {};
var Mb = {}, Nb = function (b, g, m) {
  this.ha = m === Mb ? b : "";
  this.Ca = g;
  this.MT = this.e7 = ! 0
};
Nb.prototype.c7 = function () {
  return this.Ca
};
Nb.prototype.DT = function () {
  return this.ha.toString()
};
Nb.prototype.toString = function () {
  return this.ha.toString()
};
var Ob = function (b) {
  return b instanceof Nb && b.constructor === Nb ? b.ha : "type_error:SafeHtml"
}, Qb = function (b) {
  if (b instanceof Nb) return b;
  var g = "object" == typeof b, m = null;
  g && b.e7 && (m = b.c7());
  b = g && b.MT ? b.DT() : String(b);
  jb.test(b) && (-1 != b.indexOf("&") && (b = b.replace(db, "&amp;")), -1 != b.indexOf("<") && (b = b.replace(eb, "&lt;")), -1 != b.indexOf(">") && (b = b.replace(fb, "&gt;")), -1 != b.indexOf('"') && (b = b.replace(gb, "&quot;")), -1 != b.indexOf("'") && (b = b.replace(hb, "&#39;")), -1 != b.indexOf("\x00") && (b = b.replace(ib, "&#0;")));
  return Pb(b, m)
}, Pb = function (b, g) {
  var m = ub();
  b = m ? m.createHTML(b) : b;
  return new Nb(b, g, Mb)
}, Rb = new Nb(r.trustedTypes && r.trustedTypes.emptyHTML || "", 0, Mb);
var Sb = function (b) {
  var g = ! 1, m;
  return function () {
    g || (m = b(), g = ! 0);
    return m
  }
}(function () {
  var b = document.createElement("div"), g = document.createElement("div");
  g.appendChild(document.createElement("div"));
  b.appendChild(g);
  g = b.firstChild.firstChild;
  b.innerHTML = Ob(Rb);
  return ! g.parentElement
}), Ub = function (b) {
  a:{
    var g = (b.ownerDocument && b.ownerDocument.defaultView || r).document;
    if (g.querySelector && (g = g.querySelector("script[nonce]")) && (g = g.nonce || g.getAttribute("nonce")) && Tb.test(g)) break a;
    g = ""
  }
  g && b.setAttribute("nonce",
    g)
}, Vb = function (b) {
  b instanceof Jb || b instanceof Jb || (b = "object" == typeof b && b.MT ? b.DT() : String(b), Lb.test(b) || (b = "about:invalid#zClosurez"), b = new Jb(b, Ib));
  r.open(Kb(b), "")
}, Tb = /^[\w+/_-]+[=]{0,2}$/;
var Wb = function () {
  return x("iPhone") && ! x("iPod") && ! x("iPad")
}, Xb = function () {
  Wb() || x("iPad") || x("iPod")
};
var Yb = function (b) {
  Yb[" "](b);
  return b
};
Yb[" "] = Fa;
var $b = function (b) {
  var g = Zb;
  return Object.prototype.hasOwnProperty.call(g, 9) ? g[9] : g[9] = b(9)
};
var ac = x("Opera"), bc = x("Trident") || x("MSIE"), cc = x("Edge"),
  dc = x("Gecko") && ! (-1 != lb.toLowerCase().indexOf("webkit") && ! x("Edge")) && ! (x("Trident") || x("MSIE")) && ! x("Edge"),
  ec = -1 != lb.toLowerCase().indexOf("webkit") && ! x("Edge");
ec && x("Mobile");
x("Macintosh");
x("Windows");
x("Linux") || x("CrOS");
var fc = r.navigator || null;
fc && (fc.appVersion || "").indexOf("X11");
x("Android");
Wb();
x("iPad");
x("iPod");
Xb();
lb.toLowerCase().indexOf("kaios");
var gc;
a:{
  var hc = "", ic = function () {
    var b = lb;
    if (dc) return /rv:([^\);]+)(\)|;)/.exec(b);
    if (cc) return /Edge\/([\d\.]+)/.exec(b);
    if (bc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(b);
    if (ec) return /WebKit\/(\S+)/.exec(b);
    if (ac) return /(?:Version)[ \/]?(\S+)/.exec(b)
  }();
  ic && (hc = ic ? ic[1] : "");
  if (bc) {
    var jc, kc = r.document;
    jc = kc ? kc.documentMode : void 0;
    if (null != jc && jc > parseFloat(hc)) {
      gc = String(jc);
      break a
    }
  }
  gc = hc
}
var lc = gc, Zb = {}, mc = function () {
  return $b(function () {
    for (var b = 0, g = cb(String(lc)).split("."), m = cb("9").split("."), k = Math.max(g.length, m.length), c = 0; 0 == b && c < k; c++) {
      var a = g[c] || "", n = m[c] || "";
      do {
        a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""];
        n = /(\d*)(\D*)(.*)/.exec(n) || ["", "", "", ""];
        if (0 == a[0].length && 0 == n[0].length) break;
        b = kb(0 == a[1].length ? 0 : parseInt(a[1], 10), 0 == n[1].length ? 0 : parseInt(n[1], 10)) || kb(0 == a[2].length, 0 == n[2].length) || kb(a[2], n[2]);
        a = a[3];
        n = n[3]
      } while (0 == b)
    }
    return 0 <= b
  })
};
var nc = function () {
  if ( ! r.addEventListener || ! Object.defineProperty) return ! 1;
  var b = ! 1, g = Object.defineProperty({}, "passive", {
    get: function () {
      b = ! 0
    }
  });
  try {
    r.addEventListener("test", Fa, g), r.removeEventListener("test", Fa, g)
  } catch (m) {
  }
  return b
}();

function oc(b) {
  b && "function" == typeof b.Z6 && b.Z6()
};var pc = function () {
  this.Pk = this.Pk;
  this.le = this.le
};
pc.prototype.Pk = ! 1;
pc.prototype.Z6 = function () {
  this.Pk || (this.Pk = ! 0, this.Ca())
};
var qc = function (b, g) {
  b.Pk ? g() : (b.le || (b.le = []), b.le.push(g))
};
pc.prototype.Ca = function () {
  if (this.le) for (; this.le.length;) this.le.shift()()
};
var rc = function (b, g) {
  this.type = b;
  this.currentTarget = this.target = g;
  this.defaultPrevented = this.Ca = ! 1
};
rc.prototype.stopPropagation = function () {
  this.Ca = ! 0
};
rc.prototype.preventDefault = function () {
  this.defaultPrevented = ! 0
};
var tc = function (b, g) {
  rc.call(this, b ? b.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.keyCode = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = ! 1;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.ha = null;
  if (b) {
    var m = this.type = b.type, k = b.changedTouches && b.changedTouches.length ? b.changedTouches[0] : null;
    this.target = b.target || b.srcElement;
    this.currentTarget = g;
    if (g = b.relatedTarget) {
      if (dc) {
        a:{
          try {
            Yb(g.nodeName);
            var c = ! 0;
            break a
          } catch (a) {
          }
          c = ! 1
        }
        c || (g = null)
      }
    } else "mouseover" == m ? g = b.fromElement : "mouseout" == m && (g = b.toElement);
    this.relatedTarget = g;
    k ? (this.clientX = void 0 !== k.clientX ? k.clientX : k.pageX, this.clientY = void 0 !== k.clientY ? k.clientY : k.pageY, this.screenX = k.screenX || 0, this.screenY = k.screenY || 0) : (this.clientX = void 0 !== b.clientX ? b.clientX : b.pageX, this.clientY = void 0 !== b.clientY ? b.clientY : b.pageY, this.screenX = b.screenX || 0, this.screenY = b.screenY || 0);
    this.button = b.button;
    this.keyCode = b.keyCode || 0;
    this.key = b.key ||
      "";
    this.ctrlKey = b.ctrlKey;
    this.altKey = b.altKey;
    this.shiftKey = b.shiftKey;
    this.metaKey = b.metaKey;
    this.pointerId = b.pointerId || 0;
    this.pointerType = "string" === typeof b.pointerType ? b.pointerType : sc[b.pointerType] || "";
    this.state = b.state;
    this.ha = b;
    b.defaultPrevented && tc.lS.preventDefault.call(this)
  }
};
Oa(tc, rc);
var sc = {2: "touch", 3: "pen", 4: "mouse"};
tc.prototype.stopPropagation = function () {
  tc.lS.stopPropagation.call(this);
  this.ha.stopPropagation ? this.ha.stopPropagation() : this.ha.cancelBubble = ! 0
};
tc.prototype.preventDefault = function () {
  tc.lS.preventDefault.call(this);
  var b = this.ha;
  b.preventDefault ? b.preventDefault() : b.returnValue = ! 1
};
var uc = "closure_listenable_" + (1E6 * Math.random() | 0);
var vc = 0;
var wc = function (b, g, m, k, c) {
  this.listener = b;
  this.ha = null;
  this.src = g;
  this.type = m;
  this.capture = !! k;
  this.y_ = c;
  this.key = ++vc;
  this.removed = this.m_ = ! 1
}, xc = function (b) {
  b.removed = ! 0;
  b.listener = null;
  b.ha = null;
  b.src = null;
  b.y_ = null
};
var yc = function (b) {
  this.src = b;
  this.ha = {};
  this.Ca = 0
};
yc.prototype.add = function (b, g, m, k, c) {
  var a = b.toString();
  b = this.ha[a];
  b || (b = this.ha[a] = [], this.Ca++);
  var n = zc(b, g, k, c);
  -1 < n ? (g = b[n], m || (g.m_ = ! 1)) : (g = new wc(g, this.src, a, !! k, c), g.m_ = m, b.push(g));
  return g
};
var Ac = function (b, g) {
  var m = g.type;
  m in b.ha && Wa(b.ha[m], g) && (xc(g), 0 == b.ha[m].length && (delete b.ha[m], b.Ca--))
}, zc = function (b, g, m, k) {
  for (var c = 0; c < b.length; ++c) {
    var a = b[c];
    if ( ! a.removed && a.listener == g && a.capture == !! m && a.y_ == k) return c
  }
  return -1
};
var Bc = "closure_lm_" + (1E6 * Math.random() | 0), Cc = {}, Dc = 0, Fc = function (b, g, m, k, c) {
  if (k && k.once) return Ec(b, g, m, k, c);
  if (Array.isArray(g)) {
    for (var a = 0; a < g.length; a++) Fc(b, g[a], m, k, c);
    return null
  }
  m = Gc(m);
  return b && b[uc] ? Hc(b, g, m, Ia(k) ? !! k.capture : !! k, c) : Ic(b, g, m, ! 1, k, c)
}, Ic = function (b, g, m, k, c, a) {
  if ( ! g) throw Error("o");
  var n = Ia(c) ? !! c.capture : !! c, h = Jc(b);
  h || (b[Bc] = h = new yc(b));
  m = h.add(g, m, k, n, a);
  if (m.ha) return m;
  k = Kc();
  m.ha = k;
  k.src = b;
  k.listener = m;
  if (b.addEventListener) nc || (c = n), void 0 === c && (c = ! 1), b.addEventListener(g.toString(),
    k, c); else if (b.attachEvent) b.attachEvent(Lc(g.toString()), k); else if (b.addListener && b.removeListener) b.addListener(k); else throw Error("p");
  Dc++;
  return m
}, Kc = function () {
  var b = Mc, g = function (m) {
    return b.call(g.src, g.listener, m)
  };
  return g
}, Ec = function (b, g, m, k, c) {
  if (Array.isArray(g)) {
    for (var a = 0; a < g.length; a++) Ec(b, g[a], m, k, c);
    return null
  }
  m = Gc(m);
  return b && b[uc] ? b.kb.add(String(g), m, ! 0, Ia(k) ? !! k.capture : !! k, c) : Ic(b, g, m, ! 0, k, c)
}, Nc = function (b, g, m, k, c) {
  if (Array.isArray(g)) for (var a = 0; a < g.length; a++) Nc(b,
    g[a], m, k, c); else (k = Ia(k) ? !! k.capture : !! k, m = Gc(m), b && b[uc]) ? (b = b.kb, g = String(g).toString(), g in b.ha && (a = b.ha[g], m = zc(a, m, k, c), -1 < m && (xc(a[m]), Array.prototype.splice.call(a, m, 1), 0 == a.length && (delete b.ha[g], b.Ca--)))) : b && (b = Jc(b)) && (g = b.ha[g.toString()], b = -1, g && (b = zc(g, m, k, c)), (m = -1 < b ? g[b] : null) && Oc(m))
}, Oc = function (b) {
  if ("number" !== typeof b && b && ! b.removed) {
    var g = b.src;
    if (g && g[uc]) Ac(g.kb, b); else {
      var m = b.type, k = b.ha;
      g.removeEventListener ? g.removeEventListener(m, k, b.capture) : g.detachEvent ? g.detachEvent(Lc(m),
        k) : g.addListener && g.removeListener && g.removeListener(k);
      Dc--;
      (m = Jc(g)) ? (Ac(m, b), 0 == m.Ca && (m.src = null, g[Bc] = null)) : xc(b)
    }
  }
}, Lc = function (b) {
  return b in Cc ? Cc[b] : Cc[b] = "on" + b
}, Mc = function (b, g) {
  if (b.removed) b = ! 0; else {
    g = new tc(g, this);
    var m = b.listener, k = b.y_ || b.src;
    b.m_ && Oc(b);
    b = m.call(k, g)
  }
  return b
}, Jc = function (b) {
  b = b[Bc];
  return b instanceof yc ? b : null
}, Pc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), Gc = function (b) {
  if ("function" === typeof b) return b;
  b[Pc] || (b[Pc] = function (g) {
    return b.handleEvent(g)
  });
  return b[Pc]
};
var Qc = function () {
  pc.call(this);
  this.kb = new yc(this);
  this.Hqa = this;
  this.qB = null
};
Oa(Qc, pc);
Qc.prototype[uc] = ! 0;
Qc.prototype.addEventListener = function (b, g, m, k) {
  Fc(this, b, g, m, k)
};
Qc.prototype.removeEventListener = function (b, g, m, k) {
  Nc(this, b, g, m, k)
};
Qc.prototype.dispatchEvent = function (b) {
  var g, m = this.qB;
  if (m) for (g = []; m; m = m.qB) g.push(m);
  m = this.Hqa;
  var k = b.type || b;
  if ("string" === typeof b) b = new rc(b, m); else if (b instanceof rc) b.target = b.target || m; else {
    var c = b;
    b = new rc(k, m);
    qb(b, c)
  }
  c = ! 0;
  if (g) for (var a = g.length - 1; ! b.Ca && 0 <= a; a--) {
    var n = b.currentTarget = g[a];
    c = Rc(n, k, ! 0, b) && c
  }
  b.Ca || (n = b.currentTarget = m, c = Rc(n, k, ! 0, b) && c, b.Ca || (c = Rc(n, k, ! 1, b) && c));
  if (g) for (a = 0; ! b.Ca && a < g.length; a++) n = b.currentTarget = g[a], c = Rc(n, k, ! 1, b) && c;
  return c
};
Qc.prototype.Ca = function () {
  Qc.lS.Ca.call(this);
  if (this.kb) {
    var b = this.kb, g = 0, m;
    for (m in b.ha) {
      for (var k = b.ha[m], c = 0; c < k.length; c++) ++g, xc(k[c]);
      delete b.ha[m];
      b.Ca--
    }
  }
  this.qB = null
};
var Hc = function (b, g, m, k, c) {
  return b.kb.add(String(g), m, ! 1, k, c)
}, Rc = function (b, g, m, k) {
  g = b.kb.ha[String(g)];
  if ( ! g) return ! 0;
  g = g.concat();
  for (var c = ! 0, a = 0; a < g.length; ++a) {
    var n = g[a];
    if (n && ! n.removed && n.capture == m) {
      var h = n.listener, d = n.y_ || n.src;
      n.m_ && Ac(b.kb, n);
      c = ! 1 !== h.call(d, k) && c
    }
  }
  return c && ! k.defaultPrevented
};
var Sc = function (b) {
  try {
    return r.JSON.parse(b)
  } catch (g) {
  }
  b = String(b);
  if (/^\s*$/.test(b) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(b.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
    return eval("(" + b + ")")
  } catch (g) {
  }
  throw Error("q`" + b);
};
var Tc = function () {
};
Tc.prototype.ha = null;
Tc.prototype.getOptions = function () {
  var b;
  (b = this.ha) || (b = {}, Uc(this) && (b[0] = ! 0, b[1] = ! 0), b = this.ha = b);
  return b
};
var Vc, Wc = function () {
};
Oa(Wc, Tc);
var Xc = function (b) {
  return (b = Uc(b)) ? new ActiveXObject(b) : new XMLHttpRequest
}, Uc = function (b) {
  if ( ! b.Ca && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var g = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], m = 0; m < g.length; m++) {
      var k = g[m];
      try {
        return new ActiveXObject(k), b.Ca = k
      } catch (c) {
      }
    }
    throw Error("r");
  }
  return b.Ca
};
Vc = new Wc;
var Yc = function (b, g) {
  this.ha = b[r.Symbol.iterator]();
  this.Ca = g;
  this.kb = 0
};
Yc.prototype[Symbol.iterator] = function () {
  return this
};
Yc.prototype.next = function () {
  var b = this.ha.next();
  return {value: b.done ? void 0 : this.Ca.call(void 0, b.value, this.kb++), done: b.done}
};
var Zc = function (b, g) {
  return new Yc(b, g)
};
var $c = function (b, g, m) {
  return b + m * (g - b)
};
var ad = "StopIteration" in r ? r.StopIteration : {message: "StopIteration", stack: ""}, bd = function () {
};
bd.prototype.next = function () {
  return bd.prototype.ha.call(this)
};
bd.prototype.ha = function () {
  throw ad;
};
bd.prototype.nT = function () {
  return this
};
var gd = function (b) {
    if (b instanceof cd || b instanceof dd || b instanceof ed) return b;
    if ("function" == typeof b.next) return new cd(function () {
      return fd(b)
    });
    if ("function" == typeof b[Symbol.iterator]) return new cd(function () {
      return b[Symbol.iterator]()
    });
    if ("function" == typeof b.nT) return new cd(function () {
      return fd(b.nT())
    });
    throw Error("s");
  }, fd = function (b) {
    if ( ! (b instanceof bd)) return b;
    var g = ! 1;
    return {
      next: function () {
        for (var m; ! g;) try {
          m = b.next();
          break
        } catch (k) {
          if (k !== ad) throw k;
          g = ! 0
        }
        return {value: m, done: g}
      }
    }
  },
  cd = function (b) {
    this.ha = b
  };
cd.prototype.nT = function () {
  return new dd(this.ha())
};
cd.prototype[Symbol.iterator] = function () {
  return new ed(this.ha())
};
cd.prototype.kb = function () {
  return new ed(this.ha())
};
var dd = function (b) {
  this.Ca = b
};
q(dd, bd);
dd.prototype.ha = function () {
  var b = this.Ca.next();
  if (b.done) throw ad;
  return b.value
};
dd.prototype.next = function () {
  return dd.prototype.ha.call(this)
};
dd.prototype[Symbol.iterator] = function () {
  return new ed(this.Ca)
};
dd.prototype.kb = function () {
  return new ed(this.Ca)
};
var ed = function (b) {
  cd.call(this, function () {
    return b
  });
  this.Ca = b
};
q(ed, cd);
ed.prototype.next = function () {
  return this.Ca.next()
};
var hd = function (b, g) {
  this.Ca = {};
  this.ha = [];
  this.kb = this.size = 0;
  var m = arguments.length;
  if (1 < m) {
    if (m % 2) throw Error("t");
    for (var k = 0; k < m; k += 2) this.set(arguments[k], arguments[k + 1])
  } else if (b) if (b instanceof hd) for (m = b.uK(), k = 0; k < m.length; k++) this.set(m[k], b.get(m[k])); else for (k in b) this.set(k, b[k])
};
l = hd.prototype;
l.BJ = function () {
  id(this);
  for (var b = [], g = 0; g < this.ha.length; g++) b.push(this.Ca[this.ha[g]]);
  return b
};
l.uK = function () {
  id(this);
  return this.ha.concat()
};
l.has = function (b) {
  return jd(this.Ca, b)
};
l.clear = function () {
  this.Ca = {};
  this.kb = this.size = this.ha.length = 0
};
l.delete = function (b) {
  return jd(this.Ca, b) ? (delete this.Ca[b], --this.size, this.kb++, this.ha.length > 2 * this.size && id(this), ! 0) : ! 1
};
var id = function (b) {
  if (b.size != b.ha.length) {
    for (var g = 0, m = 0; g < b.ha.length;) {
      var k = b.ha[g];
      jd(b.Ca, k) && (b.ha[m++] = k);
      g++
    }
    b.ha.length = m
  }
  if (b.size != b.ha.length) {
    var c = {};
    for (m = g = 0; g < b.ha.length;) k = b.ha[g], jd(c, k) || (b.ha[m++] = k, c[k] = 1), g++;
    b.ha.length = m
  }
};
l = hd.prototype;
l.get = function (b, g) {
  return jd(this.Ca, b) ? this.Ca[b] : g
};
l.set = function (b, g) {
  jd(this.Ca, b) || (this.size += 1, this.ha.push(b), this.kb++);
  this.Ca[b] = g
};
l.forEach = function (b, g) {
  for (var m = this.uK(), k = 0; k < m.length; k++) {
    var c = m[k], a = this.get(c);
    b.call(g, a, c, this)
  }
};
l.clone = function () {
  return new hd(this)
};
l.keys = function () {
  return gd(this.nT( ! 0)).kb()
};
l.values = function () {
  return gd(this.nT( ! 1)).kb()
};
l.entries = function () {
  var b = this;
  return Zc(this.keys(), function (g) {
    return [g, b.get(g)]
  })
};
l.nT = function (b) {
  id(this);
  var g = 0, m = this.kb, k = this, c = new bd;
  c.ha = function () {
    if (m != k.kb) throw Error("u");
    if (g >= k.ha.length) throw ad;
    var a = k.ha[g++];
    return b ? a : k.Ca[a]
  };
  c.next = c.ha.bind(c);
  return c
};
var jd = function (b, g) {
  return Object.prototype.hasOwnProperty.call(b, g)
};
var kd = function (b) {
  if (b.BJ && "function" == typeof b.BJ) return b.BJ();
  if ("undefined" !== typeof Map && b instanceof Map || "undefined" !== typeof Set && b instanceof Set) return Array.from(b.values());
  if ("string" === typeof b) return b.split("");
  if (Ha(b)) {
    for (var g = [], m = b.length, k = 0; k < m; k++) g.push(b[k]);
    return g
  }
  g = [];
  m = 0;
  for (k in b) g[m++] = b[k];
  return g
}, ld = function (b) {
  if (b.uK && "function" == typeof b.uK) return b.uK();
  if ( ! b.BJ || "function" != typeof b.BJ) {
    if ("undefined" !== typeof Map && b instanceof Map) return Array.from(b.keys());
    if ( ! ("undefined" !== typeof Set && b instanceof Set)) {
      if (Ha(b) || "string" === typeof b) {
        var g = [];
        b = b.length;
        for (var m = 0; m < b; m++) g.push(m);
        return g
      }
      g = [];
      m = 0;
      for (var k in b) g[m++] = k;
      return g
    }
  }
}, md = function (b, g, m) {
  if (b.forEach && "function" == typeof b.forEach) b.forEach(g, m); else if (Ha(b) || "string" === typeof b) Array.prototype.forEach.call(b, g, m); else for (var k = ld(b), c = kd(b), a = c.length, n = 0; n < a; n++) g.call(m, c[n], k && k[n], b)
};
var nd = function (b, g) {
  this.kb = b;
  this.Bb = g;
  this.Ca = 0;
  this.ha = null
};
nd.prototype.get = function () {
  if (0 < this.Ca) {
    this.Ca--;
    var b = this.ha;
    this.ha = b.next;
    b.next = null
  } else b = this.kb();
  return b
};
var od = function (b, g) {
  b.Bb(g);
  100 > b.Ca && (b.Ca++, g.next = b.ha, b.ha = g)
};
var qd = function (b, g) {
  ob(g, function (m, k) {
    m && "object" == typeof m && m.MT && (m = m.DT());
    "style" == k ? b.style.cssText = m : "class" == k ? b.className = m : "for" == k ? b.htmlFor = m : pd.hasOwnProperty(k) ? b.setAttribute(pd[k], m) : 0 == k.lastIndexOf("aria-", 0) || 0 == k.lastIndexOf("data-", 0) ? b.setAttribute(k, m) : b[k] = m
  })
}, pd = {
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  colspan: "colSpan",
  frameborder: "frameBorder",
  height: "height",
  maxlength: "maxLength",
  nonce: "nonce",
  role: "role",
  rowspan: "rowSpan",
  type: "type",
  usemap: "useMap",
  valign: "vAlign",
  width: "width"
}, rd = function (b, g) {
  g = String(g);
  "application/xhtml+xml" === b.contentType && (g = g.toLowerCase());
  return b.createElement(g)
}, sd = function (b) {
  this.ha = b || r.document || document
}, td = function (b, g) {
  return rd(b.ha, g)
};
var ud, vd = function () {
  var b = r.MessageChannel;
  "undefined" === typeof b && "undefined" !== typeof window && window.postMessage && window.addEventListener && ! x("Presto") && (b = function () {
    var c = rd(document, "IFRAME");
    c.style.display = "none";
    document.documentElement.appendChild(c);
    var a = c.contentWindow;
    c = a.document;
    c.open();
    c.close();
    var n = "callImmediate" + Math.random(),
      h = "file:" == a.location.protocol ? "*" : a.location.protocol + "//" + a.location.host;
    c = La(function (d) {
        if (("*" == h || d.origin == h) && d.data == n) this.port1.onmessage()
      },
      this);
    a.addEventListener("message", c, ! 1);
    this.port1 = {};
    this.port2 = {
      postMessage: function () {
        a.postMessage(n, h)
      }
    }
  });
  if ("undefined" !== typeof b && ! x("Trident") && ! x("MSIE")) {
    var g = new b, m = {}, k = m;
    g.port1.onmessage = function () {
      if (void 0 !== m.next) {
        m = m.next;
        var c = m.cb;
        m.cb = null;
        c()
      }
    };
    return function (c) {
      k.next = {cb: c};
      k = k.next;
      g.port2.postMessage(0)
    }
  }
  return function (c) {
    r.setTimeout(c, 0)
  }
};

function wd(b) {
  r.setTimeout(function () {
    throw b;
  }, 0)
};var xd = function () {
  this.Ca = this.ha = null
};
xd.prototype.add = function (b, g) {
  var m = yd.get();
  m.set(b, g);
  this.Ca ? this.Ca.next = m : this.ha = m;
  this.Ca = m
};
var Ad = function () {
  var b = zd, g = null;
  b.ha && (g = b.ha, b.ha = b.ha.next, b.ha || (b.Ca = null), g.next = null);
  return g
}, yd = new nd(function () {
  return new Bd
}, function (b) {
  return b.reset()
}), Bd = function () {
  this.next = this.ha = this.Ca = null
};
Bd.prototype.set = function (b, g) {
  this.Ca = b;
  this.ha = g;
  this.next = null
};
Bd.prototype.reset = function () {
  this.next = this.ha = this.Ca = null
};
var Fd = function (b, g) {
  Cd || Dd();
  Ed || (Cd(), Ed = ! 0);
  zd.add(b, g)
}, Cd, Dd = function () {
  if (r.Promise && r.Promise.resolve) {
    var b = r.Promise.resolve(void 0);
    Cd = function () {
      b.then(Gd)
    }
  } else Cd = function () {
    var g = Gd;
    "function" !== typeof r.setImmediate || r.Window && r.Window.prototype && ! x("Edge") && r.Window.prototype.setImmediate == r.setImmediate ? (ud || (ud = vd()), ud(g)) : r.setImmediate(g)
  }
}, Ed = ! 1, zd = new xd, Gd = function () {
  for (var b; b = Ad();) {
    try {
      b.Ca.call(b.ha)
    } catch (g) {
      wd(g)
    }
    od(yd, b)
  }
  Ed = ! 1
};
var Hd = function (b) {
  if ( ! b) return ! 1;
  try {
    return !! b.$goog_Thenable
  } catch (g) {
    return ! 1
  }
};
var Jd = function (b) {
  this.ha = 0;
  this.le = void 0;
  this.Bb = this.Ca = this.kb = null;
  this.oc = this.Sc = ! 1;
  if (b != Fa) try {
    var g = this;
    b.call(void 0, function (m) {
      Id(g, 2, m)
    }, function (m) {
      Id(g, 3, m)
    })
  } catch (m) {
    Id(this, 3, m)
  }
}, Kd = function () {
  this.next = this.kb = this.Ca = this.Bb = this.ha = null;
  this.oc = ! 1
};
Kd.prototype.reset = function () {
  this.kb = this.Ca = this.Bb = this.ha = null;
  this.oc = ! 1
};
var Ld = new nd(function () {
  return new Kd
}, function (b) {
  b.reset()
}), Md = function (b, g, m) {
  var k = Ld.get();
  k.Bb = b;
  k.Ca = g;
  k.kb = m;
  return k
};
Jd.prototype.then = function (b, g, m) {
  return Nd(this, "function" === typeof b ? b : null, "function" === typeof g ? g : null, m)
};
Jd.prototype.$goog_Thenable = ! 0;
Jd.prototype.cancel = function (b) {
  if (0 == this.ha) {
    var g = new Od(b);
    Fd(function () {
      Pd(this, g)
    }, this)
  }
};
var Pd = function (b, g) {
  if (0 == b.ha) if (b.kb) {
    var m = b.kb;
    if (m.Ca) {
      for (var k = 0, c = null, a = null, n = m.Ca; n && (n.oc || (k++, n.ha == b && (c = n), ! (c && 1 < k))); n = n.next) c || (a = n);
      c && (0 == m.ha && 1 == k ? Pd(m, g) : (a ? (k = a, k.next == m.Bb && (m.Bb = k), k.next = k.next.next) : Qd(m), Rd(m, c, 3, g)))
    }
    b.kb = null
  } else Id(b, 3, g)
}, Td = function (b, g) {
  b.Ca || 2 != b.ha && 3 != b.ha || Sd(b);
  b.Bb ? b.Bb.next = g : b.Ca = g;
  b.Bb = g
}, Nd = function (b, g, m, k) {
  var c = Md(null, null, null);
  c.ha = new Jd(function (a, n) {
    c.Bb = g ? function (h) {
      try {
        var d = g.call(k, h);
        a(d)
      } catch (e) {
        n(e)
      }
    } : a;
    c.Ca = m ? function (h) {
      try {
        var d =
          m.call(k, h);
        void 0 === d && h instanceof Od ? n(h) : a(d)
      } catch (e) {
        n(e)
      }
    } : n
  });
  c.ha.kb = b;
  Td(b, c);
  return c.ha
};
Jd.prototype.Af = function (b) {
  this.ha = 0;
  Id(this, 2, b)
};
Jd.prototype.Pk = function (b) {
  this.ha = 0;
  Id(this, 3, b)
};
var Id = function (b, g, m) {
  if (0 == b.ha) {
    b === m && (g = 3, m = new TypeError("v"));
    b.ha = 1;
    a:{
      var k = m, c = b.Af, a = b.Pk;
      if (k instanceof Jd) {
        Td(k, Md(c || Fa, a || null, b));
        var n = ! 0
      } else if (Hd(k)) k.then(c, a, b), n = ! 0; else {
        if (Ia(k)) try {
          var h = k.then;
          if ("function" === typeof h) {
            Ud(k, h, c, a, b);
            n = ! 0;
            break a
          }
        } catch (d) {
          a.call(b, d);
          n = ! 0;
          break a
        }
        n = ! 1
      }
    }
    n || (b.le = m, b.ha = g, b.kb = null, Sd(b), 3 != g || m instanceof Od || Vd(b, m))
  }
}, Ud = function (b, g, m, k, c) {
  var a = ! 1, n = function (d) {
    a || (a = ! 0, m.call(c, d))
  }, h = function (d) {
    a || (a = ! 0, k.call(c, d))
  };
  try {
    g.call(b,
      n, h)
  } catch (d) {
    h(d)
  }
}, Sd = function (b) {
  b.Sc || (b.Sc = ! 0, Fd(b.Xd, b))
}, Qd = function (b) {
  var g = null;
  b.Ca && (g = b.Ca, b.Ca = g.next, g.next = null);
  b.Ca || (b.Bb = null);
  return g
};
Jd.prototype.Xd = function () {
  for (var b; b = Qd(this);) Rd(this, b, this.ha, this.le);
  this.Sc = ! 1
};
var Rd = function (b, g, m, k) {
  if (3 == m && g.Ca && ! g.oc) for (; b && b.oc; b = b.kb) b.oc = ! 1;
  if (g.ha) g.ha.kb = null, Wd(g, m, k); else try {
    g.oc ? g.Bb.call(g.kb) : Wd(g, m, k)
  } catch (c) {
    Xd.call(null, c)
  }
  od(Ld, g)
}, Wd = function (b, g, m) {
  2 == g ? b.Bb.call(b.kb, m) : b.Ca && b.Ca.call(b.kb, m)
}, Vd = function (b, g) {
  b.oc = ! 0;
  Fd(function () {
    b.oc && Xd.call(null, g)
  })
}, Xd = wd, Od = function (b) {
  Sa.call(this, b)
};
Oa(Od, Sa);
Od.prototype.name = "cancel";
var Yd = function (b, g, m) {
  if ("function" === typeof b) m && (b = La(b, m)); else if (b && "function" == typeof b.handleEvent) b = La(b.handleEvent, b); else throw Error("w");
  return 2147483647 < Number(g) ? -1 : r.setTimeout(b, g || 0)
};
var Zd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
  $d = function (b, g) {
    if (b) {
      b = b.split("&");
      for (var m = 0; m < b.length; m++) {
        var k = b[m].indexOf("="), c = null;
        if (0 <= k) {
          var a = b[m].substring(0, k);
          c = b[m].substring(k + 1)
        } else a = b[m];
        g(a, c ? decodeURIComponent(c.replace(/\+/g, " ")) : "")
      }
    }
  };
var ae = function (b) {
  Qc.call(this);
  this.headers = new hd;
  this.Jk = b || null;
  this.Bb = ! 1;
  this.Af = this.ha = null;
  this.Xw = "";
  this.oc = this.Wt = this.Sc = this.Xs = ! 1;
  this.$aa = 0;
  this.Xd = null;
  this.HQ = "";
  this.bba = this.xqa = ! 1
};
Oa(ae, Qc);
var be = /^https?$/i, ce = ["POST", "PUT"], de = [], fe = function (b, g, m, k, c) {
  var a = new ae;
  de.push(a);
  g && Hc(a, "complete", g);
  a.kb.add("ready", a.Dsa, ! 0, void 0, void 0);
  ee(a, b, m, k, c)
};
ae.prototype.Dsa = function () {
  this.Z6();
  Wa(de, this)
};
var ee = function (b, g, m, k, c) {
  if (b.ha) throw Error("x`" + b.Xw + "`" + g);
  m = m ? m.toUpperCase() : "GET";
  b.Xw = g;
  b.Xs = ! 1;
  b.Bb = ! 0;
  b.ha = b.Jk ? Xc(b.Jk) : Xc(Vc);
  b.Af = b.Jk ? b.Jk.getOptions() : Vc.getOptions();
  b.ha.onreadystatechange = La(b.uqa, b);
  try {
    b.Wt = ! 0, b.ha.open(m, String(g), ! 0), b.Wt = ! 1
  } catch (n) {
    ge(b);
    return
  }
  g = k || "";
  var a = b.headers.clone();
  c && md(c, function (n, h) {
    a.set(h, n)
  });
  c = a.uK().find(function (n) {
    return "content-type" == n.toLowerCase()
  });
  k = r.FormData && g instanceof r.FormData;
  ! (0 <= Ua(ce, m)) || c || k || a.set("Content-Type",
    "application/x-www-form-urlencoded;charset=utf-8");
  a.forEach(function (n, h) {
    this.ha.setRequestHeader(h, n)
  }, b);
  b.HQ && (b.ha.responseType = b.HQ);
  "withCredentials" in b.ha && b.ha.withCredentials !== b.xqa && (b.ha.withCredentials = b.xqa);
  try {
    he(b), 0 < b.$aa && (b.bba = ie(b.ha), b.bba ? (b.ha.timeout = b.$aa, b.ha.ontimeout = La(b.OY, b)) : b.Xd = Yd(b.OY, b.$aa, b)), b.Sc = ! 0, b.ha.send(g), b.Sc = ! 1
  } catch (n) {
    ge(b)
  }
}, ie = function (b) {
  return bc && mc() && "number" === typeof b.timeout && void 0 !== b.ontimeout
};
ae.prototype.OY = function () {
  "undefined" != typeof Ea && this.ha && (this.dispatchEvent("timeout"), this.abort(8))
};
var ge = function (b) {
  b.Bb = ! 1;
  b.ha && (b.oc = ! 0, b.ha.abort(), b.oc = ! 1);
  je(b);
  ke(b)
}, je = function (b) {
  b.Xs || (b.Xs = ! 0, b.dispatchEvent("complete"), b.dispatchEvent("error"))
};
ae.prototype.abort = function () {
  this.ha && this.Bb && (this.Bb = ! 1, this.oc = ! 0, this.ha.abort(), this.oc = ! 1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ke(this))
};
ae.prototype.Ca = function () {
  this.ha && (this.Bb && (this.Bb = ! 1, this.oc = ! 0, this.ha.abort(), this.oc = ! 1), ke(this, ! 0));
  ae.lS.Ca.call(this)
};
ae.prototype.uqa = function () {
  this.Pk || (this.Wt || this.Sc || this.oc ? le(this) : this.oza())
};
ae.prototype.oza = function () {
  le(this)
};
var le = function (b) {
  if (b.Bb && "undefined" != typeof Ea && ( ! b.Af[1] || 4 != (b.ha ? b.ha.readyState : 0) || 2 != me(b))) if (b.Sc && 4 == (b.ha ? b.ha.readyState : 0)) Yd(b.uqa, 0, b); else if (b.dispatchEvent("readystatechange"), 4 == (b.ha ? b.ha.readyState : 0)) {
    b.Bb = ! 1;
    try {
      ne(b) ? (b.dispatchEvent("complete"), b.dispatchEvent("success")) : je(b)
    } finally {
      ke(b)
    }
  }
}, ke = function (b, g) {
  if (b.ha) {
    he(b);
    var m = b.ha, k = b.Af[0] ? Fa : null;
    b.ha = null;
    b.Af = null;
    g || b.dispatchEvent("ready");
    try {
      m.onreadystatechange = k
    } catch (c) {
    }
  }
}, he = function (b) {
  b.ha && b.bba &&
  (b.ha.ontimeout = null);
  b.Xd && (r.clearTimeout(b.Xd), b.Xd = null)
}, ne = function (b) {
  var g = me(b);
  a:switch (g) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 206:
    case 304:
    case 1223:
      var m = ! 0;
      break a;
    default:
      m = ! 1
  }
  if ( ! m) {
    if (g = 0 === g) b = String(b.Xw).match(Zd)[1] || null, ! b && r.self && r.self.location && (b = r.self.location.protocol, b = b.substr(0, b.length - 1)), g = ! be.test(b ? b.toLowerCase() : "");
    m = g
  }
  return m
}, me = function (b) {
  try {
    return 2 < (b.ha ? b.ha.readyState : 0) ? b.ha.status : -1
  } catch (g) {
    return -1
  }
};
var oe = function (b, g) {
  this.Sc = b;
  this.oc = g;
  this.ha = null;
  this.Pk = [];
  this.kb = null;
  this.Xd = this.Bb = this.le = ! 1;
  this.Af = [];
  this.Ca = null
}, te = function (b, g) {
  if (pe && ! b.ha) {
    b.ha = new (window.AudioContext || window.webkitAudioContext);
    b.kb = b.ha.createGain();
    b.kb.connect(b.ha.destination);
    for (var m in b.Sc) b.Sc[m].Sc = b.ha;
    for (var k in b.oc) qe(b.oc[k], b.ha, b.kb);
    b.ha.onstatechange = function () {
      re(b)
    };
    re(b);
    se(b);
    Ec(g, ["click", "pointerup", "mouseup", "touchend"], function () {
      b.ha.resume();
      se(b)
    }, ! 0)
  }
}, re = function (b) {
  if ("running" ==
    b.ha.state && ! b.Xd) {
    b.Xd = ! 0;
    for (var g = 0; g < b.Af.length; g++) b.Af[g]()
  }
}, ue = function (b) {
  b.Ca = b.ha.createBufferSource();
  var g = b.ha.createBuffer(1, 1, 22050);
  b.Ca.buffer = g;
  b.Ca.connect(b.ha.destination);
  b.Ca.start(0);
  b = p(b.Pk);
  for (g = b.next(); ! g.done; g = b.next()) g = g.value, g()
}, se = function (b) {
  b.ha && (null == b.Ca ? ue(b) : void 0 === b.Ca.playbackState ? ue(b) : b.Ca.playbackState !== b.Ca.PLAYING_STATE && b.Ca.playbackState !== b.Ca.FINISHED_STATE && ue(b))
};
oe.prototype.destroy = function () {
  this.ha.close();
  this.ha = null
};
oe.prototype.reset = function () {
  for (var b in this.Sc) this.Sc[b].kb = [];
  for (var g in this.oc) this.oc[g].stop()
};
var we = function () {
  var b = ve;
  b.kb && b.kb.gain.setValueAtTime(0, b.ha.currentTime);
  b.le = ! 0
}, xe = function () {
  var b = ve;
  b.kb && b.kb.gain.setValueAtTime(1, b.ha.currentTime);
  b.le = ! 1
}, ye = function (b) {
  Promise.resolve();
  b.Bb && b.ha.resume();
  b.Bb = ! 1
};
oe.prototype.isMuted = function () {
  return this.le && !! this.kb && 0 == this.kb.gain.value
};
var pe = ! ( ! window.AudioContext && ! window.webkitAudioContext) && !! window.GainNode, y = function (b, g, m, k) {
  this.le = b;
  this.Xd = g;
  this.Sc = m;
  this.Af = k;
  this.Ca = {};
  this.Bb = this.oc = this.ha = this.kb = null;
  this.Pk = 0
};
y.prototype.clone = function () {
  var b = new y(this.le, this.Xd, this.Sc, this.Af);
  qe(b, this.ha, this.oc);
  return b
};
var qe = function (b, g, m) {
  b.ha = g;
  b.oc = m
}, ze = function (b) {
  if (b.ha) for (var g in b.Ca) {
    var m = b.Ca[g];
    ! m.cqa && 1E3 * b.ha.currentTime > m.Gaa + b.Sc && delete b.Ca[g]
  }
}, Ae = function (b) {
  ! b.kb && b.ha.createGain && (b.kb = b.ha.createGain())
};
y.prototype.play = function (b, g, m, k, c, a) {
  b = void 0 === b ? 0 : b;
  g = void 0 === g ? ! 1 : g;
  m = void 0 === m ? 0 : m;
  c = void 0 === c ? ! 1 : c;
  if ( ! this.ha || ! this.oc) return -1;
  ze(this);
  a = void 0 === a ? this.ha.currentTime + b / 1E3 : a;
  k || (k = this.ha.createBufferSource(), k.playbackRate.setValueAtTime(1, this.ha.currentTime));
  Ae(this);
  this.Bb && k.connect(this.Bb);
  this.kb ? (this.Bb ? this.Bb.connect(this.kb) : k.connect(this.kb), this.kb.connect(this.oc)) : this.Bb ? this.Bb.connect(this.oc) : k.connect(this.oc);
  this.Bb = null;
  k.loop = g;
  try {
    k.buffer = this.le.le
  } catch (h) {
    return -1
  }
  b =
    this.Xd / 1E3;
  var n = this.Sc / 1E3 / k.playbackRate.value;
  g ? (k.loopStart = b + (c ? m / 1E3 : 0), k.loopEnd = b + n, k.start(a, b + m / 1E3)) : k.start(a, b + m / 1E3, n);
  c = this.Pk++;
  this.Ca[c] = {node: k, Gaa: 1E3 * a - m, cqa: g};
  return c
};
var Be = function (b) {
  for (var g in b.Ca) {
    var m = b.Ca[g];
    if (m && (m.cqa || ! (1E3 * b.ha.currentTime > m.Gaa + b.Sc))) return ! 0
  }
  return ! 1
};
y.prototype.stop = function (b) {
  ze(this);
  if (void 0 !== b) {
    if (this.Ca[b]) {
      try {
        this.Ca[b].node.stop(0)
      } catch (m) {
      }
      var g = (1E3 * this.ha.currentTime - this.Ca[b].Gaa) % this.Sc;
      delete this.Ca[b];
      return [g]
    }
    return []
  }
  b = [];
  for (g in this.Ca) b = b.concat(this.stop(g));
  return b
};
var Ce = document.createElement("audio"),
  De = "function" === typeof Ce.canPlayType && "" != Ce.canPlayType("audio/mpeg") ? ".mp3" : ".ogg",
  Ee = function (b, g) {
    Qa.call(this, b + g + De);
    this.Sc = this.le = null;
    this.ha = 0
  };
q(Ee, Qa);
Ee.prototype.Bb = function () {
  var b = this, g = new Promise(function (k) {
    b.Ca ? k() : b.kb.push(k)
  });
  if (0 != this.ha) return Promise.resolve();
  //if (!this.Sc) return Promise.reject("Must call Audio.init before preloading audio.");
  if (!this.Sc) return Promise.resolve();
  var m = new XMLHttpRequest;
  m.open("GET", this.oc, ! 0);
  m.responseType = "arraybuffer";
  m.onload = function () {
    b.Sc.decodeAudioData(m.response, function (k) {
      k && (b.le = k, b.ha = 3, Ra(b))
    });
    b.ha = 2
  };
  m.send();
  this.ha = 1;
  return g
};
var Fe = function () {
  oe.call(this, z, A)
};
q(Fe, oe);
var z = {};
z.RU = new Ee(window.root, "archery");
z.BS = new Ee(window.root, "climbing");
z.bK = new Ee(window.root, "marathon");
z.nX = new Ee(window.root, "overworld");
z.vJ = new Ee(window.root, "pingpong");
z.cL = new Ee(window.root, "rugby");
z.iN = new Ee(window.root, "skate");
z.c1 = new Ee(window.root, "ballad");
z.K1 = new Ee(window.root, "disco");
z.j5 = new Ee(window.root, "rock");
z.xJ = new Ee(window.root, "shared");
var A = {};
A.yqa = new y(z.RU, 0, 666.6669921875, 0);
A.zqa = new y(z.RU, 1666.6669921875, 187.5, 0);
A.Aqa = new y(z.RU, 2854.1669921875, 187.5, 0);
A.dba = new y(z.RU, 5541.6669921875, 19200.021484375, 0);
A.Bqa = new y(z.RU, 4041.6669921875, 500, 0);
A.c1 = new y(z.c1, 0, 55272.73046875, 0);
A.d1 = new y(z.xJ, 0, 625, 0);
A.Asa = new y(z.xJ, 1625, 1125, 0);
A.kza = new y(z.BS, 0, 500, 0);
A.jda = new y(z.BS, 1500, 500, 0);
A.lza = new y(z.BS, 3E3, 500, 0);
A.mza = new y(z.BS, 4500, 500, 0);
A.nza = new y(z.BS, 6E3, 250, 0);
A.kda = new y(z.BS, 7250, 19692.33203125, 0);
A.bCa = new y(z.xJ, 11E3, 83.33300018310547, 0);
A.K1 = new y(z.K1, 0, 62365.0625, 0);
A.A2 = new y(z.xJ, 12083.3330078125, 83.33300018310547, 0);
A.zfa = new y(z.nX, 4E3, 13500, 0);
A.idb = new y(z.bK, 0, 125, 0);
A.zOa = new y(z.bK, 2250, 125, 0);
A.AOa = new y(z.bK, 3375, 125, 0);
A.BOa = new y(z.bK, 1125, 125, 0);
A.COa = new y(z.bK, 4500, 500, 0);
A.DOa = new y(z.bK, 6E3, 125, 0);
A.jdb = new y(z.bK, 7125, 250, 0);
A.EOa = new y(z.bK, 8375, 187.5, 0);
A.Cia = new y(z.bK, 9562.5, 18285.70703125, 0);
A.Dia = new y(z.xJ, 13166.6669921875, 83.33300018310547, 0);
A.H3 = new y(z.xJ, 3750, 250, 0);
A.FOa = new y(z.xJ, 5E3, 250, 0);
A.GOa = new y(z.xJ, 6250, 250, 0);
A.kdb = new y(z.nX, 0, 1500, 0);
A.uja = new y(z.nX, 2500, 500, 0);
A.vja = new y(z.nX, 18500, 36324.33203125, 0);
A.bWa = new y(z.vJ, 6511.5830078125, 105.29199981689453, 0);
A.cWa = new y(z.vJ, 0, 96.91699981689453, 0);
A.mdb = new y(z.vJ, 1096.9169921875, 96.91699981689453, 0);
A.dWa = new y(z.vJ, 2193.8330078125, 133.375, 0);
A.eWa = new y(z.vJ, 7616.875, 126.39600372314453, 0);
A.fWa = new y(z.vJ, 8743.271484375, 180.22900390625, 0);
A.Sja = new y(z.vJ, 9923.5, 21942.853515625, 0);
A.ndb = new y(z.vJ, 3261.5830078125, 2250, 0);
A.gWa = new y(z.vJ, 32866.35546875, 3518.2919921875, 0);
A.hWa = new y(z.vJ, 37384.64453125, 1544.10400390625, 0);
A.pdb = new y(z.xJ, 7500, 500, 0);
A.$Za = new y(z.xJ, 9E3, 1E3, 0);
A.j5 = new y(z.j5, 0, 57333.33203125, 0);
A.qdb = new y(z.nX, 55824.33203125, 500, 0);
A.a_a = new y(z.cL, 0, 500, 0);
A.b_a = new y(z.cL, 1500, 1500, 0);
A.rdb = new y(z.cL, 4E3, 250, 0);
A.sdb = new y(z.cL, 5250, 2E3, 0);
A.c_a = new y(z.cL, 8250, 500, 0);
A.Rka = new y(z.cL, 12750, 22325.58203125, 0);
A.d_a = new y(z.cL, 9750, 500, 0);
A.e_a = new y(z.cL, 11250, 500, 0);
A.r1a = new y(z.iN, 0, 250, 0);
A.F5 = new y(z.iN, 1250, 500, 0);
A.s1a = new y(z.iN, 2750, 250, 0);
A.Kla = new y(z.iN, 8875.9580078125, 20210.521484375, 0);
A.t1a = new y(z.iN, 4E3, 750, 0);
A.tdb = new y(z.iN, 5750, 500, 0);
A.u1a = new y(z.iN, 7250, 625.9580078125, 0);
Ga(Fe);
var Ge = "en ja af am ar az be bg bn bs ca cs da de el en-GB es es-419 et eu fa fi fil fr fr-ca gl gu hi hr hu hy id is it iw ka kk km kn ko ky lo lt lv mk ml mn mr ms my ne nl no pa pl pt-BR pt-PT ro ru si sk sl sq sr sv sw ta te th tr uk ur uz vi zh-CN zh-HK zh-TW zu".split(" ");
var Je = function (b) {
  var g = new Image;
  g.onerror = g.onload = g.onabort = function () {
    delete He[Ie]
  };
  He[Ie] = g;
  g.src = "/gen_204?atyp=i&ct=doodle&cad=" + b + "&zx=" + Date.now();
  Ie++
}, He = [], Ie = 0;
var Ke = function (b, g) {
  this.kb = this.le = this.Bb = "";
  this.Xd = null;
  this.Sc = this.Ca = "";
  this.oc = ! 1;
  var m;
  b instanceof Ke ? (this.oc = void 0 !== g ? g : b.oc, Le(this, b.Bb), this.le = b.le, this.kb = b.kb, Me(this, b.Xd), this.Ca = b.Ca, Ne(this, b.ha.clone()), this.Sc = b.Sc) : b && (m = String(b).match(Zd)) ? (this.oc = !! g, Le(this, m[1] || "", ! 0), this.le = Oe(m[2] || ""), this.kb = Oe(m[3] || "", ! 0), Me(this, m[4]), this.Ca = Oe(m[5] || "", ! 0), Ne(this, m[6] || "", ! 0), this.Sc = Oe(m[7] || "")) : (this.oc = !! g, this.ha = new Pe(null, this.oc))
};
Ke.prototype.toString = function () {
  var b = [], g = this.Bb;
  g && b.push(Qe(g, Re, ! 0), ":");
  var m = this.kb;
  if (m || "file" == g) b.push("//"), (g = this.le) && b.push(Qe(g, Re, ! 0), "@"), b.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), m = this.Xd, null != m && b.push(":", String(m));
  if (m = this.Ca) this.kb && "/" != m.charAt(0) && b.push("/"), b.push(Qe(m, "/" == m.charAt(0) ? Se : Te, ! 0));
  (m = this.ha.toString()) && b.push("?", m);
  (m = this.Sc) && b.push("#", Qe(m, Ue));
  return b.join("")
};
Ke.prototype.resolve = function (b) {
  var g = this.clone(), m = !! b.Bb;
  m ? Le(g, b.Bb) : m = !! b.le;
  m ? g.le = b.le : m = !! b.kb;
  m ? g.kb = b.kb : m = null != b.Xd;
  var k = b.Ca;
  if (m) Me(g, b.Xd); else if (m = !! b.Ca) {
    if ("/" != k.charAt(0)) if (this.kb && ! this.Ca) k = "/" + k; else {
      var c = g.Ca.lastIndexOf("/");
      -1 != c && (k = g.Ca.substr(0, c + 1) + k)
    }
    c = k;
    if (".." == c || "." == c) k = ""; else if (-1 != c.indexOf("./") || -1 != c.indexOf("/.")) {
      k = 0 == c.lastIndexOf("/", 0);
      c = c.split("/");
      for (var a = [], n = 0; n < c.length;) {
        var h = c[n++];
        "." == h ? k && n == c.length && a.push("") : ".." == h ? ((1 < a.length ||
          1 == a.length && "" != a[0]) && a.pop(), k && n == c.length && a.push("")) : (a.push(h), k = ! 0)
      }
      k = a.join("/")
    } else k = c
  }
  m ? g.Ca = k : m = "" !== b.ha.toString();
  m ? Ne(g, b.ha.clone()) : m = !! b.Sc;
  m && (g.Sc = b.Sc);
  return g
};
Ke.prototype.clone = function () {
  return new Ke(this)
};
var Le = function (b, g, m) {
  b.Bb = m ? Oe(g, ! 0) : g;
  b.Bb && (b.Bb = b.Bb.replace(/:$/, ""))
}, Me = function (b, g) {
  if (g) {
    g = Number(g);
    if (isNaN(g) || 0 > g) throw Error("y`" + g);
    b.Xd = g
  } else b.Xd = null
}, Ne = function (b, g, m) {
  g instanceof Pe ? (b.ha = g, Ve(b.ha, b.oc)) : (m || (g = Qe(g, We)), b.ha = new Pe(g, b.oc))
}, Xe = function (b) {
  var g = window.location;
  return (g instanceof Ke ? g.clone() : new Ke(g, void 0)).ha.get(b)
}, Oe = function (b, g) {
  return b ? g ? decodeURI(b.replace(/%25/g, "%2525")) : decodeURIComponent(b) : ""
}, Qe = function (b, g, m) {
  return "string" === typeof b ?
    (b = encodeURI(b).replace(g, Ye), m && (b = b.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), b) : null
}, Ye = function (b) {
  b = b.charCodeAt(0);
  return "%" + (b >> 4 & 15).toString(16) + (b & 15).toString(16)
}, Re = /[#\/\?@]/g, Te = /[#\?:]/g, Se = /[#\?]/g, We = /[#\?@]/g, Ue = /#/g, Pe = function (b, g) {
  this.Ca = this.ha = null;
  this.kb = b || null;
  this.Bb = !! g
}, Ze = function (b) {
  b.ha || (b.ha = new hd, b.Ca = 0, b.kb && $d(b.kb, function (g, m) {
    b.add(decodeURIComponent(g.replace(/\+/g, " ")), m)
  }))
};
Pe.prototype.add = function (b, g) {
  Ze(this);
  this.kb = null;
  b = $e(this, b);
  var m = this.ha.get(b);
  m || this.ha.set(b, m = []);
  m.push(g);
  this.Ca += 1;
  return this
};
var af = function (b, g) {
  Ze(b);
  g = $e(b, g);
  b.ha.has(g) && (b.kb = null, b.Ca -= b.ha.get(g).length, b.ha.delete(g))
};
Pe.prototype.clear = function () {
  this.ha = this.kb = null;
  this.Ca = 0
};
var bf = function (b, g) {
  Ze(b);
  g = $e(b, g);
  return b.ha.has(g)
};
l = Pe.prototype;
l.forEach = function (b, g) {
  Ze(this);
  this.ha.forEach(function (m, k) {
    m.forEach(function (c) {
      b.call(g, c, k, this)
    }, this)
  }, this)
};
l.uK = function () {
  Ze(this);
  for (var b = this.ha.BJ(), g = this.ha.uK(), m = [], k = 0; k < g.length; k++) for (var c = b[k], a = 0; a < c.length; a++) m.push(g[k]);
  return m
};
l.BJ = function (b) {
  Ze(this);
  var g = [];
  if ("string" === typeof b) bf(this, b) && (g = g.concat(this.ha.get($e(this, b)))); else {
    b = this.ha.BJ();
    for (var m = 0; m < b.length; m++) g = g.concat(b[m])
  }
  return g
};
l.set = function (b, g) {
  Ze(this);
  this.kb = null;
  b = $e(this, b);
  bf(this, b) && (this.Ca -= this.ha.get(b).length);
  this.ha.set(b, [g]);
  this.Ca += 1;
  return this
};
l.get = function (b, g) {
  if ( ! b) return g;
  b = this.BJ(b);
  return 0 < b.length ? String(b[0]) : g
};
l.toString = function () {
  if (this.kb) return this.kb;
  if ( ! this.ha) return "";
  for (var b = [], g = this.ha.uK(), m = 0; m < g.length; m++) {
    var k = g[m], c = encodeURIComponent(String(k));
    k = this.BJ(k);
    for (var a = 0; a < k.length; a++) {
      var n = c;
      "" !== k[a] && (n += "=" + encodeURIComponent(String(k[a])));
      b.push(n)
    }
  }
  return this.kb = b.join("&")
};
l.clone = function () {
  var b = new Pe;
  b.kb = this.kb;
  this.ha && (b.ha = this.ha.clone(), b.Ca = this.Ca);
  return b
};
var $e = function (b, g) {
  g = String(g);
  b.Bb && (g = g.toLowerCase());
  return g
}, Ve = function (b, g) {
  g && ! b.Bb && (Ze(b), b.kb = null, b.ha.forEach(function (m, k) {
    var c = k.toLowerCase();
    if (k != c && (af(this, k), af(this, c), 0 < m.length)) {
      this.kb = null;
      k = this.ha;
      var a = k.set;
      c = $e(this, c);
      var n = m.length;
      if (0 < n) {
        for (var h = Array(n), d = 0; d < n; d++) h[d] = m[d];
        n = h
      } else n = [];
      a.call(k, c, n);
      this.Ca += m.length
    }
  }, b));
  b.Bb = g
};
Pe.prototype.extend = function (b) {
  for (var g = 0; g < arguments.length; g++) md(arguments[g], function (m, k) {
    this.add(k, m)
  }, this)
};
var cf = navigator.userAgent, df = new Ke(location.href), ef = "sdoodles" === document.documentElement.id,
  ff = function () {
    return "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints
  }, gf = function () {
    return cf.includes("iPad") || cf.includes("iPhone") || cf.includes("iPod") || ff()
  }, hf = function () {
    return cf.toLowerCase().includes("gsa") || cf.includes("GoogleApp")
  }, jf = function () {
    return hf() && gf()
  }, kf = function () {
    return gf() || cf.includes("Android") || cf.includes("Mobile") || cf.includes("Silk") || cf.includes("UCBrowser") ||
      cf.includes("UCWEB")
  };
cf.includes("GT-I9300") && cf.includes("Chrome");
/* Gameblabla - Fullscreen hack */
/* Change it to 0 for windowed mode */
var lf = function () {
  return true // df.Ca.includes("/logos/") && df.Ca.includes(".html")
}, nf = function () {
  return !! document.getElementById("fkbx") || mf()
}, mf = function () {
  var b = df.ha.get("ntp");
  return "1" === b || "2" === b
}, of = function () {
  return "1" === df.ha.get("fpdoodle") && !! document.getElementById("fpdoodle")
}, pf = function () {
  return !! document.querySelector("body#iframedoodle")
}, qf = function () {
  return ! kf() && ! ef && ! nf() && ! of() && ! lf()
}, rf = ff() && ! ef && ! nf() && ! of() && ! lf();
var sf = {};
var tf = function () {
}, uf = function (b, g) {
  if (g !== sf) throw Error("A");
  this.ha = b
};
q(uf, tf);
uf.prototype.toString = function () {
  return this.ha
};
var vf = new uf("about:invalid#zTSz", sf);

function wf(b) {
  if (b instanceof tf) if (b instanceof uf) b = b.ha; else throw Error("B"); else b = Kb(b);
  return b
};var xf = function (b) {
  this.qbb = b
};

function yf(b) {
  return new xf(function (g) {
    return g.substr(0, b.length + 1).toLowerCase() === b + ":"
  })
}

var zf = [yf("data"), yf("http"), yf("https"), yf("mailto"), yf("ftp"), new xf(function (b) {
  return /^[^:]*([/?#]|$)/.test(b)
})];
var Af = function (b, g) {
    for (var m = [], k = 1; k < arguments.length; ++k) m[k - 1] = arguments[k];
    if (b) for (k = 0; k < m.length; k += 2) {
      var c = m[k], a = m[k + 1], n = b.style;
      n && c in n ? n[c] = a : c in b && (b[c] = a)
    }
  }, Bf = Date.now, Cf = function () {
    return self.performance.now()
  }, Df = ["Moz", "ms", "O", "webkit"], Ef = function (b, g, m) {
    if (b) {
      for (var k = p(Df), c = k.next(); ! c.done; c = k.next()) b.style[c.value + g] = m;
      b.style[g.charAt(0).toLowerCase() + g.substr(1)] = m
    }
  }, Ff = ["", "moz", "ms", "o", "webkit"], Gf = function (b, g) {
    if ( ! b) return null;
    for (var m = p(Ff), k = m.next(); ! k.done; k =
      m.next()) {
      k = k.value;
      var c = g;
      0 < k.length && (c = g.charAt(0).toUpperCase() + g.substr(1));
      k += c;
      if ("undefined" != typeof b[k]) return k
    }
    return null
  }, Hf = function (b, g) {
    if (g = (g = g && ! jf()) || mf()) Vb(b); else {
      g = window.top.location;
      var m = void 0 === m ? zf : m;
      a:{
        m = void 0 === m ? zf : m;
        for (var k = 0; k < m.length; ++k) {
          var c = m[k];
          if (c instanceof xf && c.qbb(b)) {
            b = new uf(b, sf);
            break a
          }
        }
        b = void 0
      }
      g.assign(wf(b || vf))
    }
  }, If = function () {
    return window.google && void 0 !== window.google.doodle ? window.google.doodle : null
  }, Jf = function (b, g) {
    var m = If();
    return m &&
    void 0 != m[b] ? m[b] : g
  }, Kf = function (b) {
    If() || (window.google.doodle = {});
    window.google.doodle.pvc = b
  }, Lf = function (b, g) {
    b = Jf("doodle_args", {})[b];
    return null != b ? b : g
  }, Mf = function () {
    return !! Lf("is_dogfood", ! 1)
  }, Nf = Jf("alt", ""), Of = Jf("hl", "en"), Pf = Jf("gl", ""),
  Qf = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i.test(Of),
  Sf = function (b, g, m) {
    var k = Math.max(0, m - 230) + (document.querySelector("div.og-pdp") ? 36 : 12);
    Af(b, "width", g + "px", "height", m + "px");
    Rf(k)
  }, Rf = function (b) {
    b += "px";
    var g = document.getElementById("lga");
    g && Af(g, "marginBottom", b);
    nf() || ((g = document.getElementById("searchform")) && Af(g, "transform", "translateY(" + b + ")"), b = new UIEvent("resize", {
      bubbles: ! 1,
      udb: ! 1,
      view: window,
      detail: 0
    }), window.dispatchEvent(b))
  }, Tf = null, Uf = null, Vf = null, Wf = function () {
    Vf || (window.google && window.google.kEI && window.google.kEI.length ? Vf = window.google.kEI : pf() && bf(df.ha, "ei") && (Vf = df.ha.get("ei")));
    return Vf
  }, Xf = function () {
    if ( ! Tf) {
      var b = document.getElementById("hplogoved");
      b ? Tf = b.getAttribute("data-ved") : pf() && bf(df.ha, "ved") && (Tf = df.ha.get("ved"))
    }
    return Tf
  }, Zf = function () {
    var b = Yf, g = new Ke("/");
    g.ha.set("fpdoodle", "1");
    g.ha.set("doodle", String(b));
    Of && g.ha.set("hl", Of);
    Pf && g.ha.set("gl", Pf);
    Hf(g.toString(), ! 1)
  };
var Yf = Jf("id", "144867217"), Gb = new xb(vb, window.root+"kitsune_compiled_deferred_module.js"),
  $f = 1 / 30, ag = 1E3 * $f, bg = new createjs.Rectangle(0, 0, 960, 540), cg = ["PixelMplus10"],
  dg = void 0 != Xe("debug"), eg = [{TeamId: 0, GlobalScore: 32940, RecordCount: 590}, {
    TeamId: 1,
    GlobalScore: 30938,
    RecordCount: 510
  }, {TeamId: 2, GlobalScore: 36028, RecordCount: 650}, {TeamId: 3, GlobalScore: 31865, RecordCount: 550}],
  fg = "archery climbing marathon pingpong rugby skate swim".split(" "),
  gg = new Map([["archery", 0], ["climbing", 1], ["marathon",
    2], ["pingpong", 3], ["rugby", 4], ["skate", 5], ["swim", 6]]),
  hg = new Map([["blue", 0], ["red", 1], ["green", 2], ["yellow", 3]]), ig = ["blue", "red", "green", "yellow"];
var jg = function (b, g) {
  this.x = b;
  this.y = g
};
jg.prototype.add = function (b) {
  return B(this.x + b.x, this.y + b.y)
};
jg.prototype.sub = function (b) {
  return B(this.x - b.x, this.y - b.y)
};
var kg = function (b, g) {
  return B(b.x * g, b.y * g)
}, C = function (b) {
  return Math.sqrt(b.x * b.x + b.y * b.y)
}, lg = function (b, g) {
  return 0 == C(b) || 0 == g ? B(0, 0) : kg(b, g / C(b))
};
jg.prototype.toJSON = function () {
  return {x: this.x, y: this.y}
};
jg.prototype.toString = function () {
  return "vec2(x: " + this.x + ", y: " + this.y + ")"
};
var B = function (b, g) {
  return "number" === typeof b && "number" === typeof g ? new jg(b, g) : new jg(b.x, b.y)
};
var mg = {}, ng = function (b, g, m) {
  return g && b in g ? g[b] : m
}, D = function (b) {
  b = void 0 === b ? {} : b;
  this.IC = ng("findable", b, ! 0)
}, G = function (b, g) {
  if (b in mg) throw Error("C`" + b);
  mg[b] = g
};
var og = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.RL = [];
  this.type = b.type || "normal";
  this.Bx = b.team || "none"
};
q(og, D);
G("arrow", og);
var pg = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.tick = 1799;
  this.jC = this.bB = this.zx = 0
};
q(pg, D);
G("archeryGame", pg);
var qg = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.Pw = this.zN = 0;
  this.u_ = "normal";
  this.ut = 0
};
q(qg, D);
G("archeryPlayer", qg);
var rg = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.ut = this.Caa = this.Pw = this.zN = 0
};
q(rg, D);
G("archeryChampion", rg);
var sg = function () {
  D.apply(this, arguments)
};
q(sg, D);
G("archeryHud", sg);
var tg = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.type = b.type;
  this.left = ! 1
};
q(tg, D);
G("archeryTarget", tg);
var ug = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.altitude = this.v_ = this.PL = NaN;
  this.acb = 16
};
q(ug, D);
G("altitudeMeter", ug);
var vg = function () {
  D.apply(this, arguments)
};
q(vg, D);
G("groundBounds", vg);
var wg = function () {
  D.apply(this, arguments)
};
q(wg, D);
G("goalBounds", wg);
var xg = function () {
  D.apply(this, arguments)
};
q(xg, D);
G("obstacleBounds", xg);
var yg = function () {
  D.apply(this, arguments)
};
q(yg, D);
G("climbingHold", yg);
var zg = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.speed = b.speed || 1;
  this.sab = b.directionNormal || B(1, 0);
  this.distance = b.distance || 100;
  this.jS = null;
  this.hJ = 0
};
q(zg, D);
G("movingClimbingHold", zg);
var Ag = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.speed = b.speed || .5;
  this.gab = b.clockwise || ! 1;
  this.radius = b.radius || 25;
  this.start = b.start || 0;
  this.jS = null;
  this.hJ = 0
};
q(Ag, D);
G("circlingClimbingHold", Ag);
var Bg = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.PL = NaN;
  this.$T = ! 1;
  this.CT = 0;
  this.Kab = 60;
  this.W_ = 0;
  this.mcb = 120
};
q(Bg, D);
G("fallingClimbingHold", Bg);
var Cg = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.Jab = 50;
  this.mY = ! 1;
  this.delay = 0;
  this.Rpa = 1
};
q(Cg, D);
G("checkpoint", Cg);
var Dg = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.mode = "ground";
  this.Y6 = ! 1;
  this.zY = 0;
  this.zaa = ! 1;
  this.d7 = 0;
  this.kC = this.DY = null;
  this.EL = Number.MAX_SAFE_INTEGER;
  this.D_ = null;
  this.b7 = 0
};
q(Dg, D);
G("climber", Dg);
var Eg = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.state = 0
};
q(Eg, D);
G("climbingCamera", Eg);
var Fg = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.KY = b.seconds || 0
};
q(Fg, D);
G("clock", Fg);
var Gg = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.Vpa = b.factor || B(0, 0);
  this.yY = ! 1;
  this.Daa = B(0, 0);
  this.Hpa = B(0, 0)
};
q(Gg, D);
G("parallax", Gg);
var Hg = function () {
  D.apply(this, arguments)
};
q(Hg, D);
G("dialog", Hg);
var Ig = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.next = null
};
q(Ig, D);
G("dialogOption", Ig);
var Jg = function () {
  D.apply(this, arguments)
};
q(Jg, D);
G("dialogNext", Jg);
var Kg = function () {
  D.apply(this, arguments)
};
q(Kg, D);
G("dialogAvatar", Kg);
var Lg = function () {
  D.apply(this, arguments)
};
q(Lg, D);
G("joystick", Lg);
var Mg = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.fcb = b.positionMultiplier || 0
};
q(Mg, D);
G("joystickControl", Mg);
var Ng = function () {
  D.apply(this, arguments)
};
q(Ng, D);
G("actionButton", Ng);
var Og = function () {
  D.apply(this, arguments)
};
q(Og, D);
G("pauseButton", Og);
var Pg = function () {
  D.apply(this, arguments)
};
q(Pg, D);
G("overworldButton", Pg);
var Qg = function () {
  D.apply(this, arguments)
};
q(Qg, D);
G("closeButton", Qg);
var Rg = function (b) {
  switch (b) {
    case "n":
      return "s";
    case "s":
      return "n";
    case "e":
      return "w";
    case "w":
      return "e";
    case "nw":
      return "se";
    case "sw":
      return "ne";
    case "ne":
      return "sw";
    case "se":
      return "ne"
  }
  return null
};
var Sg = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.Q_ = ! 0;
  this.eqa = this.vK = this.KQ = this.U_ = 0
};
q(Sg, D);
G("marathonPlayer", Sg);
var Tg = function () {
  D.apply(this, arguments)
};
q(Tg, D);
G("marathonHud", Tg);
var Ug = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.tick = 0;
  this.LL = 1;
  this.UB = 0;
  this.$_ = 1
};
q(Ug, D);
G("marathonMap", Ug);
var Vg = function () {
  D.apply(this, arguments)
};
q(Vg, D);
G("marathonTile", Vg);
var Wg = function () {
  D.apply(this, arguments)
};
q(Wg, D);
G("marathonSpeedLine", Wg);
var Xg = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.speed = b.speed;
  this.name = b.name;
  this.oab = b.cursorColor;
  this.nC = this.cursor = null
};
q(Xg, D);
G("marathonOpponent", Xg);
var Yg = function () {
  D.apply(this, arguments)
};
q(Yg, D);
G("marathonWaypoint", Yg);
var Zg = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.aba = b.toSpawn || null;
  this.Dcb = b.spawnFrame;
  this.direction = b.direction
};
q(Zg, D);
G("marathonSpawn", Zg);
var $g = function () {
  D.apply(this, arguments)
};
q($g, D);
G("marathonObstacle", $g);
var ah = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.start = b.start;
  this.end = b.end;
  this.width = b.width
};
q(ah, D);
G("marathonPath", ah);
var bh = function (b, g, m) {
  return g >= b && g <= m || g <= b && g >= m
}, ch = function (b, g, m) {
  return Math.max(b, Math.min(m, g))
}, dh = function (b, g) {
  return C(b.sub(g))
}, eh = function (b, g, m) {
  return b + (m - b) * g
}, fh = function (b, g, m) {
  return (g - b) / (m - b)
}, gh = function (b, g, m) {
  return b.add(kg(m.sub(b), g))
}, ih = function (b, g) {
  "number" != typeof b && (b = hh(b) || 0);
  "number" != typeof g && (g = hh(g) || 0);
  b = g - b;
  180 < b ? b -= 360 : -180 > b && (b += 360);
  return b
}, hh = function (b) {
  return b && 0 != C(b) ? (Math.atan2(b.y, b.x) + 2 * Math.PI) % (2 * Math.PI) * 180 / Math.PI : NaN
}, jh = function (b) {
  switch (b) {
    case "e":
      return 0;
    case "se":
      return 45;
    case "s":
      return 90;
    case "sw":
      return 135;
    case "w":
      return 180;
    case "nw":
      return 225;
    case "n":
      return 270;
    case "ne":
      return 315
  }
  return NaN
}, kh = function (b) {
  return "string" == typeof b ? jh(b) : hh(b)
}, lh = function (b, g) {
  b %= 360;
  if (void 0 === g ? 0 : g) {
    if (bh(0, b, 45) || bh(315, b, 360)) return "e";
    if (bh(45, b, 135)) return "s";
    if (bh(135, b, 225)) return "w";
    if (bh(225, b, 315)) return "n"
  } else {
    if (bh(0, b, 22.5) || bh(337.5, b, 360)) return "e";
    if (bh(22.5, b, 67.5)) return "se";
    if (bh(67.5, b, 112.5)) return "s";
    if (bh(112.5, b, 157.5)) return "sw";
    if (bh(157.5, b, 202.5)) return "w";
    if (bh(202.5, b, 247.5)) return "nw";
    if (bh(247.5, b, 292.5)) return "n";
    if (bh(292.5, b, 337.5)) return "ne"
  }
  return null
}, mh = function (b, g) {
  g = void 0 === g ? ! 1 : g;
  return "number" != typeof b ? lh(hh(b), g) : lh(b, g)
}, nh = function (b) {
  b = b * Math.PI / 180;
  return lg(B(Math.cos(b), Math.sin(b)), 1)
}, oh = function (b) {
  return "string" == typeof b ? nh(jh(b)) : nh(b)
}, ph = function (b, g) {
  return b + Math.random() * (g - b)
}, qh = function (b, g) {
  return Math.floor(ph(b, g))
}, rh = function (b) {
  if (0 != b.length) return b[qh(0, b.length)]
};
var sh = !! self.localStorage;
var th = function (b, g) {
  a:if (sh) {
    try {
      var m = window.localStorage.getItem("KITSUNE_" + b)
    } catch (k) {
      b = g;
      break a
    }
    b = null == m ? g : JSON.parse(m)
  } else b = g;
  return b
}, uh = function (b, g) {
  if (sh) try {
    window.localStorage.setItem("KITSUNE_" + b, JSON.stringify(g))
  } catch (m) {
  }
}, vh = function () {
  var b = Object.keys(self.localStorage).filter(function (m) {
    return m.startsWith("KITSUNE_")
  });
  b = p(b);
  for (var g = b.next(); ! g.done; g = b.next()) self.localStorage.removeItem(g.value)
};
var wh = {
  ad: ["ca"],
  ae: ["ar", "en", "fa", "hi", "ur"],
  af: ["ps", "fa"],
  ag: ["en"],
  ai: ["en"],
  al: ["sq", "en"],
  am: ["hy", "ru"],
  ao: ["pt-PT"],
  ar: ["es-419", "es"],
  as: ["en"],
  at: ["de"],
  au: ["en"],
  az: ["az", "ru"],
  ba: ["bs", "hr", "sr"],
  bd: ["bn", "en"],
  be: ["nl", "de", "en", "fr"],
  bf: ["fr"],
  bg: ["bg"],
  bh: ["ar", "en"],
  bi: ["fr"],
  bj: ["fr"],
  bn: ["ms", "en", "zh-CN"],
  bo: ["es-419", "es"],
  br: ["pt-BR", "en"],
  bs: ["en"],
  bt: ["en"],
  bw: ["tn", "en"],
  by: ["be", "ru"],
  bz: ["en", "es", "es-419"],
  ca: ["en", "fr", "fr-CA"],
  cd: ["fr", "sw"],
  cf: ["fr"],
  cg: ["fr"],
  ch: ["de",
    "en", "fr", "it"],
  ci: ["fr"],
  ck: ["en"],
  cl: ["es-419", "es"],
  cm: ["fr", "en"],
  cn: ["zh-CN"],
  co: ["es-419", "es"],
  cr: ["es-419", "en", "es"],
  cu: ["es-419", "es"],
  cv: ["pt-PT"],
  cy: ["en", "el", "tr"],
  cz: ["cs"],
  de: ["de", "en", "fr"],
  dj: ["fr", "ar", "so"],
  dk: ["da"],
  dm: ["en"],
  "do": ["es-419", "es"],
  dz: ["fr", "ar"],
  ec: ["es-419", "es"],
  ee: ["et", "ru"],
  eg: ["ar", "en"],
  es: ["es", "ca", "en", "eu", "gl"],
  et: ["am", "en", "so"],
  fi: ["fi", "sv"],
  fj: ["en"],
  fr: ["fr"],
  ga: ["fr"],
  ge: ["ka", "en"],
  gg: ["en", "fr"],
  gh: ["en"],
  gi: ["en", "es", "it", "pt-PT"],
  gl: ["da",
    "en"],
  gm: ["en", "wo"],
  gr: ["el"],
  gt: ["es-419", "es"],
  gy: ["en"],
  hk: ["zh-TW", "en", "zh-CN", "zh-HK"],
  hn: ["es-419", "es"],
  hr: ["hr"],
  ht: ["fr", "en", "ht"],
  hu: ["hu"],
  id: ["id", "en", "nl"],
  ie: ["en-GB", "ga"],
  il: ["iw", "ar", "en"],
  im: ["en"],
  "in": "en bn gu hi kn ml mr ne or pa ta te".split(" "),
  iq: ["ar", "en"],
  is: ["is", "en"],
  it: ["it", "en"],
  je: ["en", "fr"],
  jm: ["en"],
  jo: ["ar", "en"],
  jp: ["ja"],
  ke: ["sw", "en"],
  kg: ["ky", "ru"],
  kh: ["km", "en"],
  ki: ["en"],
  kr: ["ko"],
  kw: ["ar", "en"],
  kz: ["kk", "ru"],
  la: ["lo", "en"],
  lb: ["ar", "en", "fr", "hy"],
  lk: ["en", "si", "ta"],
  ls: ["st", "en", "zu"],
  lt: ["lt"],
  lu: ["de", "fr"],
  lv: ["lv", "lt", "ru"],
  ly: ["ar", "en", "it"],
  ma: ["fr", "ar"],
  md: ["ro", "ro-MD", "ru"],
  me: ["sr-ME", "bs", "sr"],
  mg: ["mg", "fr"],
  mk: ["mk"],
  ml: ["fr"],
  mm: ["my", "en"],
  mn: ["mn"],
  mt: ["mt", "en"],
  mu: ["en", "fr"],
  mv: ["en"],
  mw: ["ny", "en"],
  mx: ["es-419", "es"],
  my: ["en", "ms"],
  mz: ["pt-PT", "ny", "sn", "sw"],
  na: ["en", "af", "de"],
  ne: ["fr"],
  ng: ["en"],
  ni: ["es-419", "en", "es"],
  nl: ["nl", "en"],
  no: ["no", "nn"],
  np: ["ne", "en"],
  nr: ["en"],
  nu: ["en"],
  nz: ["en-GB"],
  om: ["ar", "en"],
  pa: ["es-419",
    "en", "es"],
  pe: ["es-419", "es"],
  pg: ["en"],
  ph: ["en"],
  pk: ["en", "pa", "ur"],
  pl: ["pl"],
  pn: ["en"],
  pr: ["es-419", "en", "es"],
  ps: ["ar", "en"],
  pt: ["pt-PT"],
  py: ["es-419", "es"],
  qa: ["ar", "en"],
  ro: ["ro", "de", "hu"],
  rs: ["sr", "sr-Latn"],
  ru: ["ru"],
  rw: ["en", "fr", "sw"],
  sa: ["ar", "en"],
  sb: ["en"],
  sc: ["crs", "en", "fr"],
  se: ["sv"],
  sg: ["en", "ms", "ta", "zh-CN"],
  si: ["sl"],
  sk: ["sk", "hu"],
  sl: ["en"],
  sm: ["it"],
  sn: ["fr", "wo"],
  so: ["so", "ar", "en"],
  sr: ["nl", "en"],
  st: ["pt-PT"],
  sv: ["es-419", "es"],
  td: ["fr", "ar"],
  tg: ["fr"],
  th: ["th", "en"],
  tj: ["tg",
    "ru"],
  tl: ["pt-PT", "en", "id"],
  tm: ["tk", "ru", "uz"],
  tn: ["ar", "fr"],
  to: ["en"],
  tr: ["tr"],
  tt: "en es es-419 fr hi zh-TW".split(" "),
  tw: ["zh-TW", "en"],
  tz: ["sw", "en"],
  ua: ["uk", "ru"],
  ug: ["en"],
  uk: ["en-GB"],
  us: ["en", "es", "es-419", "zh-CN"],
  uy: ["es-419", "es"],
  uz: ["uz", "ru"],
  vc: ["en"],
  ve: ["es-419", "es"],
  vi: ["en"],
  vn: ["vi", "en", "fr", "zh-TW"],
  vu: ["en", "fr"],
  ws: ["en"],
  za: ["en", "af", "st", "tn", "zu"],
  zm: ["en", "ny", "sn"],
  zw: ["en", "ny", "sn", "tn", "zu"]
};
var xh = function (b) {
  if (b.EN && b.hasOwnProperty("EN")) return b.EN;
  var g = new b;
  return b.EN = g
};
var yh = function () {
  this.ha = this.Ca = null
};
yh.prototype.load = function (b, g, m, k) {
  var c = this;
  b = zh(this, b, g, m);
  if (null == b) return Promise.resolve();
  var a = k + "messages." + b + ".nocache.json", n = new ae;
  n.HQ = "text";
  return new Promise(function (h, d) {
    Hc(n, "success", function () {
      try {
        var e = n.ha ? n.ha.responseText : ""
      } catch (f) {
        e = ""
      }
      c.Ca = JSON.parse(e.substring(5));
      h()
    });
    Hc(n, "error", d);
    ee(n, a)
  })
};
var zh = function (b, g, m, k) {
  var c = g + "-" + m;
  if (k.includes(c)) return b.ha = g, c;
  if (g && k.includes(g)) return b.ha = g;
  if (m && wh[m]) for (g = p(wh[m]), m = g.next(); ! m.done; m = g.next()) if (m = m.value, k.includes(m)) return b.ha = m, b.ha;
  return k.includes("en") ? (b.ha = "en", b.ha) : b.ha = null
};
var Ah = xh(yh), Bh = {
  en: 1,
  bn: .84,
  "en-GB": 1,
  de: 1,
  hi: .84,
  id: 1,
  mr: 1,
  ar: .84,
  es: .84,
  "es-419": .84,
  it: .84,
  ja: .84,
  ko: .84,
  nl: .84,
  "pt-BR": .84,
  "pt-PT": .84,
  th: .84,
  tr: .84,
  "zh-CN": .84,
  "zh-HK": .84,
  "zh-TW": .84
}, Ch;
Ch = 0 <= Ua(["vi", "tr", "zh-HK", "zh-CN", "zh-TW"], Of);
var Dh = function (b) {
  var g = b.split("");
  b = b.substring(0, Math.min(b.length, 1));
  for (var m = 1; m < g.length; m++) {
    if (g[m].match("[\u3400-\u9fbf]|[\u3000-\u303f]|[\u3040-\u309f]|[\u30a0-\u30ff]|[\uff00-\uffef]|[\u4e00-\u9faf]|[\u2605-\u2606]|[\u2190-\u2195]|[\u0e00-\u0e7f]")) {
      var k = 0 <= '\u3008\u300a\u300c\u300e\u3010\u3014\u3016$(\u00a3\u00a5\u00b7\u2018"\u301d\ufe59\ufe5b\uff04\uff08\uff0e\uff3b\uff5b\uffe1\uffe5'.indexOf(g[m - 1]),
        c = 0 <= '\u3009\u300b\u300d\u3015\u3017!%),.:;?]}\u00a2\u00b0\u00b7\u2019""\u2020\u2021\u203a\u2103\u2236\u3001\u3002\u3003\u3006\u301e\ufe5a\ufe5c\uff01\uff02\uff05\uff07\uff09\uff0c\uff0e\uff1a\uff1b\uff1f\uff01\uff3d\uff5d\uff5e'.indexOf(g[m]),
        a = g[m].match("[\u0e31-\u0e3a]|[\u0e47-\u0e4e]");
      k || c || a || (b += "\u200a")
    }
    b += g[m]
  }
  return b
}, Eh = function (b) {
  for (var g = 0; g < cg.length; g++) {
    var m = document.createElement("div");
    m.textContent = ".";
    m.style.position = "absolute";
    m.style.left = "0px";
    m.style.top = "0px";
    m.style.opacity = "0.01";
    m.style.fontFamily = cg[g];
    b.appendChild(m)
  }
}, L = function (b, g) {
  g = void 0 === g ? "" : g;
  if ( ! Ah.Ca || void 0 === Ah.Ca[b]) return g ? g : b;
  try {
    if (null == Ah.Ca) throw Error("E");
    for (var m = void 0 === Ah.Ca[b] ? "" : Ah.Ca[b], k = g = 0, c = ! 1, a = m.split(Bb), n = 0; n <
    a.length; n++) {
      var h = a[n];
      zb.test(h) ? (g++, k++) : Ab.test(h) ? c = ! 0 : yb.test(h) ? k++ : Cb.test(h) && (c = ! 0)
    }
    b = 0 == k ? c ? 1 : 0 : .4 < g / k ? -1 : 1;
    return 1 == b ? "\u202a" + m + "\u202c" : -1 == b ? "\u202b" + m + "\u202c" : m
  } catch (d) {
    console.error("Incorrect translate id: " + b)
  }
};
var Fh = new createjs.Rectangle(48, 108, 336, 405), Gh = new createjs.Rectangle(624, 108, 288, 405), Kh = function () {
  this.le = new Hh(this);
  this.oc = new Ih(this);
  this.Bb = new Jh(this);
  this.Xd = [];
  this.Af = [this.oc, this.le, this.Bb];
  this.ha = B(0, 0);
  this.Sc = 0;
  this.Pk = null;
  this.kb = {};
  this.Ca = {}
}, Lh = function (b, g) {
  b.Xd.push(g)
}, Mh = function (b) {
  b = p(b.Xd);
  for (var g = b.next(); ! g.done; g = b.next()) g = g.value, g()
};
Kh.prototype.tick = function () {
  for (var b = this, g = p(this.Af), m = g.next(); ! m.done; m = g.next()) m.value.tick();
  this.ha = B(0, 0);
  g = p(this.Af);
  for (m = g.next(); ! m.done; m = g.next()) m = m.value, m.oc && (this.ha = this.ha.add(m.pZ()));
  1 < C(this.ha) && (this.ha = lg(this.ha, 1));
  m = mh(this.ha);
  m != this.Pk && (this.Sc = 0);
  this.Sc++;
  this.Pk = m;
  g = function (h, d) {
    b.Ca[h] = d && ! b.kb[h];
    b.kb[h] = d
  };
  var k = p([4, 5]);
  for (m = k.next(); ! m.done; m = k.next()) {
    var c = m.value, a = ! 1, n = p(this.Af);
    for (m = n.next(); ! m.done; m = n.next()) m = m.value, m.oc && m.ZB(c) && (a = ! 0);
    g(c, a)
  }
  g(0, -.1 > this.ha.x);
  g(1, .1 < this.ha.x);
  g(2, -.1 > this.ha.y);
  g(3, .1 < this.ha.y)
};
var Nh = function () {
  this.oc = ! 0;
  this.ha = null
};
l = Nh.prototype;
l.pZ = function () {
};
l.ZB = function () {
};
l.tick = function () {
};
l.enable = function () {
  this.oc = ! 0
};
l.disable = function () {
  this.oc = ! 1
};
var Ih = function (b) {
  Nh.call(this);
  var g = this;
  this.le = b;
  this.Ca = {};
  this.kb = {};
  Oh(this);
  Ph(this);
  this.Sc = {
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    65: "a",
    87: "w",
    68: "d",
    83: "s",
    32: " ",
    13: "Enter",
    27: "Escape",
    8: "Backspace",
    49: "1",
    46: "Delete"
  };
  this.Bb = {};
  b = document.querySelector("#hplogo2");
  b.addEventListener("keydown", function (m) {
    var k = m.which;
    if (null != g.ha) {
      m.preventDefault();
      g.Sc[k] = m.key;
      if (k in g.kb) {
        m = g.kb[k];
        var c = g.Ca[m].indexOf(k);
        g.Ca[m][c] = g.Ca[g.ha][0]
      }
      g.Ca[g.ha][0] = k;
      Oh(g);
      g.ha = null
    } else k in g.kb && (m.preventDefault(), g.Bb[k] = ! 0)
  });
  b.addEventListener("blur", function () {
    for (var m = p(Object.keys(g.Bb)), k = m.next(); ! k.done; k = m.next()) g.Bb[Number(k.value)] = ! 1
  });
  document.addEventListener("keyup", function (m) {
    var k = g.ZB(4);
    m.which in g.kb && (m.preventDefault(), g.Bb[m.which] = ! 1);
    k && ! g.ZB(4) && Mh(g.le)
  })
};
q(Ih, Nh);
var Ph = function (b) {
  b.Ca[2] = [38, 87];
  b.Ca[3] = [40, 83];
  b.Ca[0] = [37, 65];
  b.Ca[1] = [39, 68];
  b.Ca[4] = [32, 13];
  b.Ca[5] = [8, 49, 46];
  Oh(b)
}, Oh = function (b) {
  b.kb = {};
  for (var g in b.Ca) for (var m = parseInt(g, 10), k = p(b.Ca[m]), c = k.next(); ! c.done; c = k.next()) b.kb[c.value] = m
};
Ih.prototype.pZ = function () {
  var b = B(0, 0);
  this.ZB(0) && b.x--;
  this.ZB(2) && b.y--;
  this.ZB(1) && b.x++;
  this.ZB(3) && b.y++;
  1 < C(b) && (b = lg(b, 1));
  return b
};
Ih.prototype.ZB = function (b) {
  for (var g in this.kb) if (g = parseInt(g, 10), this.kb[g] == b && this.Bb[g]) return ! 0;
  return ! 1
};
var Hh = function (b) {
  Nh.call(this);
  var g = this;
  this.Af = b;
  this.Xd = {};
  this.Jk = Fh;
  this.Pk = Gh;
  this.le = B(120, 445.5);
  this.Sc = this.Bb = null;
  this.Ca = B(0, 0);
  this.kb = document.querySelector("#hpcanvas");
  this.kb.addEventListener("touchstart", function (m) {
    return g.register(m)
  });
  this.kb.addEventListener("touchmove", function (m) {
    return g.register(m)
  });
  this.kb.addEventListener("touchend", function (m) {
    var k = ! 1;
    m = p(m.changedTouches);
    for (var c = m.next(); ! c.done; c = m.next()) c = c.value, delete g.Xd[c.identifier], c.identifier ===
    g.Bb && (g.Bb = null), c.identifier === g.Sc && (g.Sc = null, k = ! 0);
    k && Mh(g.Af)
  })
};
q(Hh, Nh);
Hh.prototype.register = function (b) {
  if (this.oc) for (var g = p(b.changedTouches), m = g.next(); ! m.done; m = g.next()) {
    m = m.value;
    var k = b;
    var c = m;
    k = (k = k || window.event) ? (c = c || k.targetTouches && k.targetTouches[0] || k.changedTouches && k.changedTouches[0]) && void 0 !== c.pageX ? [c.pageX, c.pageY] : void 0 !== k.clientX ? [k.clientX + ("rtl" == document.dir ? -1 : 1) * (document.body.scrollLeft || document.documentElement.scrollLeft || 0), k.clientY + (document.body.scrollTop || document.documentElement.scrollTop || 0)] : void 0 !== k.pageX ? [k.pageX, k.pageY] :
      [0, 0] : [0, 0];
    c = this.kb.getBoundingClientRect();
    k[0] -= c.x;
    k[1] -= c.y;
    if (c.width < c.height) {
      var a = k[0];
      k[0] = k[1];
      k[1] = c.width - a
    }
    c = parseInt(this.kb.style.width, 10) / this.kb.width;
    k = B(k[0] / c, k[1] / c);
    this.Xd[m.identifier] = k;
    "touchstart" === b.type && (this.Jk.contains(k.x, k.y) && null === this.Bb ? (this.Bb = m.identifier, 1 < C(this.le.sub(k)) && (this.le = k)) : this.Pk.contains(k.x, k.y) && null === this.Sc && (this.Sc = m.identifier))
  }
};
Hh.prototype.tick = function () {
  this.Ca = B(0, 0);
  if (null !== this.Bb) {
    var b = this.Xd[this.Bb].sub(this.le);
    15 <= C(b) && (this.Ca = kg(b.sub(lg(b, 10.5)), 1 / 45), 1 < C(this.Ca) && (this.Ca = lg(this.Ca, 1)))
  }
};
Hh.prototype.pZ = function () {
  return this.Ca
};
Hh.prototype.ZB = function (b) {
  if (4 == b) return null !== this.Sc;
  if (5 != b) {
    if (0 == b) return "w" == mh(this.Ca, ! 0);
    if (1 == b) return "e" == mh(this.Ca, ! 0);
    if (2 == b) return "n" == mh(this.Ca, ! 0);
    if (3 == b) return "s" == mh(this.Ca, ! 0)
  }
  return ! 1
};
var Qh = function (b, g) {
  this.type = b;
  this.eJ = g
};
Qh.prototype.key = function () {
  return this.type + "_" + this.eJ
};
var Rh = function (b) {
  return new Qh(0, b)
}, Sh = function (b) {
  return new Qh(1, b)
}, Jh = function (b) {
  Nh.call(this);
  this.Xd = b;
  this.Ca = {};
  Th(this);
  this.le = 0;
  this.kb = B(0, 0);
  this.Bb = {};
  this.Sc = {};
  this.Sc[0] = {};
  this.Sc[1] = {}
};
q(Jh, Nh);
var Th = function (b) {
  b.Ca[2] = [Rh(-2), Rh(-4), Sh(12)];
  b.Ca[3] = [Rh(2), Rh(4), Sh(13)];
  b.Ca[0] = [Rh(-1), Rh(-3), Sh(14)];
  b.Ca[1] = [Rh(1), Rh(3), Sh(15)];
  b.Ca[4] = [Sh(0)];
  b.Ca[5] = [Sh(1), Sh(9)]
};
Jh.prototype.tick = function () {
  for (var b = {}, g = p(navigator.getGamepads()), m = g.next(); ! m.done; m = g.next()) if (m = m.value, null != m) {
    for (var k = 0; k < m.buttons.length; k++) b[Sh(k).key()] = m.buttons[k].pressed ? 1 : 0;
    for (k = 0; k < m.axes.length; k++) {
      var c = m.axes[k], a = k + 1;
      b[Rh(a).key()] = 0;
      b[Rh(-a).key()] = 0;
      .2 < c ? b[Rh(a).key()] = c : -.2 > c && (b[Rh(-a).key()] = Math.abs(c))
    }
  }
  if (null != this.ha) {
    g = this.ha;
    for (var n in b) if (.5 <= b[n] && .5 > this.Sc[n]) {
      for (var h in this.Ca) for (h = parseInt(h, 10), m = 0; m < this.Ca[h].length; m++) n == this.Ca[h][m].key() &&
      (this.Ca[h][m] = this.Ca[g][0]);
      k = p(n.split("_"));
      m = k.next().value;
      k = k.next().value;
      this.Ca[g][0] = new Qh(parseInt(m, 10), parseInt(k, 10));
      this.ha = null
    }
    this.le = 15
  }
  this.Sc = b;
  if (0 < this.le) this.le--; else {
    h = this.ZB(4);
    this.Bb = {};
    this.kb = B(0, 0);
    g = p([4, 5]);
    for (n = g.next(); ! n.done; n = g.next()) for (m = n.value, k = p(this.Ca[m]), n = k.next(); ! n.done; n = k.next()) n = n.value, n.key() in b && (this.Bb[m] = this.Bb[m] || !! b[n.key()]);
    h && ! this.ZB(4) && Mh(this.Xd);
    h = p(this.Ca[2]);
    for (n = h.next(); ! n.done; n = h.next()) n = n.value, n.key() in b &&
    (this.kb.y -= b[n.key()]);
    h = p(this.Ca[3]);
    for (n = h.next(); ! n.done; n = h.next()) n = n.value, n.key() in b && (this.kb.y += b[n.key()]);
    h = p(this.Ca[0]);
    for (n = h.next(); ! n.done; n = h.next()) n = n.value, n.key() in b && (this.kb.x -= b[n.key()]);
    h = p(this.Ca[1]);
    for (n = h.next(); ! n.done; n = h.next()) n = n.value, n.key() in b && (this.kb.x += b[n.key()]);
    this.Bb[0] = -.2 > this.kb.x;
    this.Bb[1] = .2 < this.kb.x;
    this.Bb[2] = -.2 > this.kb.y;
    this.Bb[3] = .2 < this.kb.y
  }
};
Jh.prototype.pZ = function () {
  return this.kb
};
Jh.prototype.ZB = function (b) {
  return !! this.Bb[b]
};
var Uh = function (b) {
  this.ha = this.duration = b;
  this.Ca = ! 0;
  this.loop = ! 1;
  this.O_ = null
};
Uh.prototype.tick = function () {
  this.Ca && (this.ha--, 0 >= this.ha && (this.O_ && this.O_(), this.ha = this.duration, this.loop || (this.Ca = ! 1)))
};
Uh.prototype.reset = function () {
  this.ha = this.duration;
  this.Ca = ! 0
};
var Vh = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.ha = ng("positionalDrawOrder", b, ! 0);
  this.currentFrame = 0
};
q(Vh, D);
G("map", Vh);
var Wh = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.Tpa = b.drawOrder || 0
};
q(Wh, D);
G("drawOrderOverride", Wh);
var Xh = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.Qw = b.pos || B(0, 0);
  this.Aab = b.ease || .6;
  this.speed = b.speed || 60;
  this.Baa = ! 0;
  this.viewport = null
};
q(Xh, D);
G("camera", Xh);
var Yh = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.offset = b.offset || B(0, 0)
};
q(Yh, D);
G("cameraTarget", Yh);
var Zh = function () {
  D.apply(this, arguments)
};
q(Zh, D);
G("deleteOffScreen", Zh);
var $h = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.aba = b.toSpawn || null;
  this.hJ = new Uh(b.duration);
  this.hJ.loop = ! 0
};
q($h, D);
G("spawner", $h);
var ai = function () {
  D.apply(this, arguments)
};
q(ai, D);
G("randomize", ai);
var M = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.velocity = b.velocity || B(0, 0);
  this.pC = b.zVelocity ? b.zVelocity : 0
};
q(M, D);
G("velocity", M);
var bi = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.direction = b.direction || "s"
};
q(bi, D);
G("direction", bi);
var ci = function () {
  D.apply(this, arguments)
};
q(ci, D);
G("spritable", ci);
var di = function () {
  D.apply(this, arguments)
};
q(di, D);
G("sprite", di);
var ei = function () {
  D.apply(this, arguments)
};
q(ei, D);
G("boundable", ei);
var fi = function () {
  D.apply(this, arguments)
};
q(fi, D);
G("bounds", fi);
var gi = function () {
  D.apply(this, arguments)
};
q(gi, D);
G("untraversable", gi);
var hi = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.tick = 0;
  this.uY = ng("frameCount", b, 0);
  this.Wpa = ng("frameDuration", b, 0);
  this.frames = []
};
q(hi, D);
G("tileBackground", hi);
var ii = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.Qpa = b.deathFrame
};
q(ii, D);
G("ephemeral", ii);
var ji = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.CY = b.mc || null
};
q(ji, D);
G("addFx", ji);
var ki = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.CY = b.mc || null
};
q(ki, D);
G("removeFx", ki);
var li = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.speed = ng("speed", b, 3)
};
q(li, D);
G("playerMovement", li);
var mi = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.speed = 0;
  this.n0 = b.targetPos || B(0, 0)
};
q(mi, D);
G("waypoint", mi);
var ni = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.id = b.id || ""
};
q(ni, D);
G("translatable", ni);
var oi = function () {
  D.apply(this, arguments)
};
q(oi, D);
G("cutscene", oi);
var qi = function (b, g) {
  if ( ! g(b) && b.children && ! pi(b, gi)) {
    b = p(b.children);
    for (var m = b.next(); ! m.done; m = b.next()) qi(m.value, g)
  }
}, pi = function (b, g) {
  if ( ! b.ec) return ! 1;
  if ( ! Array.isArray(g)) return b.ec.has(g) && b.ec.get(g).IC;
  g = p(g);
  for (var m = g.next(); ! m.done; m = g.next()) {
    m = m.value;
    if (void 0 === m) throw Error("F");
    if ( ! b.ec.has(m) || ! b.ec.get(m).IC) return ! 1
  }
  return ! 0
}, ri = function (b, g) {
  var m = [];
  qi(b, function (k) {
    pi(k, g) && m.push(k)
  });
  return m
}, si = function (b, g) {
  qi(b, function (m) {
    if (pi(m, Mg)) return g(m)
  })
}, ti = function (b,
                  g) {
  var m = [];
  b = p(b.children);
  for (var k = b.next(); ! k.done; k = b.next()) k = k.value, pi(k, g) && m.push(k);
  return m
}, ui = function (b, g) {
  var m;
  qi(b, function (k) {
    if (pi(k, g)) return m = k, ! 0
  });
  return m
}, vi = function (b, g, m) {
  return b.parent && 0 != m ? pi(b.parent, g) ? b.parent : vi(b.parent, g, m - 1) : null
};
var xi = function (b, g) {
  b = ti(b, wi).filter(function (m) {
    return m.ec.get(wi).eventId == g
  });
  return 0 < b.length ? b[0] : null
}, wi = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.HC = ! 1;
  this.eventId = ng("eventId", b, null);
  this.pK = ""
};
q(wi, D);
G("button", wi);
var yi = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.id = ng("id", b, null);
  this.lC = null;
  this.pK = "";
  this.j_ = ! 0;
  this.C_ = ! 1
};
q(yi, D);
G("menu", yi);
var zi = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.button = 4
};
q(zi, D);
G("controlsMenuButton", zi);
var Ai = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.order = b.order || 0
};
q(Ai, D);
G("keyboardNav", Ai);
var Bi = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.Jaa = 0
};
q(Bi, D);
G("overworldPlayer", Bi);
var Ci = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.name = b.name
};
q(Ci, D);
G("scenePortal", Ci);
var Di = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.name = b.name
};
q(Di, D);
G("menuPortal", Di);
var Ei = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.Eaa = ! 1
};
q(Ei, D);
G("region", Ei);
var Fi = function () {
  D.apply(this, arguments)
};
q(Fi, D);
G("interiorExit", Fi);
var Gi = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.R6 = 0;
  this.name = b.name;
  this.R_ = ! 1;
  this.fqa = b.node;
  this.node = ""
};
q(Gi, D);
G("npc", Gi);
var Hi = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.label = b.label
};
q(Hi, D);
G("ariaBillboard", Hi);
var Ii = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.Tbb = b.npc;
  this.node = b.node
};
q(Ii, D);
G("dialogTrigger", Ii);
var Ji = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.name = b.name
};
q(Ji, D);
G("sceneTrigger", Ji);
var Ki = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.name = b.name
};
q(Ki, D);
G("location", Ki);
var Li = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.Pcb = b.tileWidth;
  this.Ocb = b.tileHeight
};
q(Li, D);
G("repeatableTiles", Li);
var Mi = function (b, g) {
    return B(Math.round(fh(b.Pa.x, g.x, b.Pa.x + b.Pa.width) * b.width), Math.round(fh(b.Pa.y, g.y, b.Pa.y + b.Pa.height) * b.height))
  }, Ni = function (b, g) {
    return B(eh(b.Pa.x, g.x / b.width, b.Pa.x + b.Pa.width), eh(b.Pa.y, g.y / b.height, b.Pa.y + b.Pa.height))
  }, Oi = function (b, g) {
    var m = g.Qw.x - b.Qw.x;
    b = g.Qw.y - b.Qw.y;
    return m * m + b * b
  }, $a = function (b, g) {
    return b.f - g.f
  }, Pi = function (b, g, m) {
    var k = void 0 === k ? 100 : k;
    var c = [g], a = [g], n = g;
    g.h = Oi(g, m);
    for (g = 0; 0 < a.length && g <= k;) {
      g++;
      var h = a.shift();
      if (h == m) {
        n = h;
        break
      }
      h.closed =
        ! 0;
      var d = b, e = [], f = h.Qw.x, v = h.Qw.y;
      d.rm[f - 1] && d.rm[f - 1][v] && e.push(d.rm[f - 1][v]);
      d.rm[f + 1] && d.rm[f + 1][v] && e.push(d.rm[f + 1][v]);
      d.rm[f] && d.rm[f][v - 1] && e.push(d.rm[f][v - 1]);
      d.rm[f] && d.rm[f][v + 1] && e.push(d.rm[f][v + 1]);
      d.rm[f - 1] && d.rm[f - 1][v - 1] && e.push(d.rm[f - 1][v - 1]);
      d.rm[f + 1] && d.rm[f + 1][v - 1] && e.push(d.rm[f + 1][v - 1]);
      d.rm[f - 1] && d.rm[f - 1][v + 1] && e.push(d.rm[f - 1][v + 1]);
      d.rm[f + 1] && d.rm[f + 1][v + 1] && e.push(d.rm[f + 1][v + 1]);
      d = p(e);
      for (e = d.next(); ! e.done; e = d.next()) if (e = e.value, ! e.closed && 0 != e.type && (f = h.BN + dh(e.Qw,
        h.Qw), ! e.ha || f < e.BN)) {
        e.ha ? (v = Za(a, e), 0 <= v && Array.prototype.splice.call(a, v, 1)) : c.push(e);
        e.ha = ! 0;
        e.parent = h;
        e.h = e.h || Oi(e, m);
        e.BN = f;
        e.f = e.BN + e.h;
        if (e.h < n.h || e.h === n.h && e.BN < n.BN) n = e;
        f = Za(a, e);
        0 > f && Xa(a, -(f + 1), 0, e)
      }
    }
    m = n;
    for (b = []; m.parent;) b.unshift(m), m = m.parent;
    c = p(c);
    for (m = c.next(); ! m.done; m = c.next()) m.value.clear();
    return b
  }, Ri = function (b) {
    this.rm = [];
    this.nodes = [];
    for (var g = 0; g < b.length; g++) {
      this.rm[g] = [];
      for (var m = 0, k = b[g]; m < k.length; m++) {
        var c = new Qi(B(g, m), k[m]);
        this.rm[g][m] = c;
        this.nodes.push(c)
      }
    }
  },
  Qi = function (b, g) {
    this.Qw = b;
    this.h = this.BN = this.f = 0;
    this.closed = this.ha = ! 1;
    this.parent = null;
    this.type = g
  };
Qi.prototype.clear = function () {
  this.h = this.BN = this.f = 0;
  this.closed = this.ha = ! 1;
  this.parent = null
};
var Si = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.rm = [];
  this.Pa = this.DN = null;
  this.height = this.width = 0
};
q(Si, D);
G("pathMap", Si);
var Ti = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.end = this.start = this.target = null;
  this.nodes = [];
  this.path = []
};
q(Ti, D);
G("pathfinder", Ti);
var Vi = function (b, g) {
  b = b.ec.get(Ui);
  b.Gp && (b.Gp.collisionFilterMask = g)
}, Xi = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.world = new CANNON.World;
  this.world.broadphase = new CANNON.NaiveBroadphase;
  this.world.gravity.set(0, 0, -400);
  this.world.solver.iterations = 40;
  this.Yaa = 4;
  this.ha = new Map;
  this.contacts = new Map;
  this.Ffa = new Map;
  this.kb = new CANNON.Material("groundMaterial");
  this.Bb = new CANNON.Material("bodyMaterial");
  this.ha.set("groundMaterial", this.kb);
  this.ha.set("bodyMaterial", this.Bb);
  b = {
    friction: 0,
    restitution: 0, contactEquationStiffness: 1E7, contactEquationRelaxation: 3
  };
  this.addContactMaterial("groundMaterial", "bodyMaterial", b);
  this.addContactMaterial("bodyMaterial", "bodyMaterial", b);
  this.Ca = new CANNON.Body({mass: 0, material: this.kb, collisionFilterGroup: 1, collisionFilterMask: 4});
  this.Ca.addShape(new CANNON.Plane);
  this.world.addBody(this.Ca);
  Wi(this, "character", "bodyMaterial", {mass: 10, collisionFilterGroup: 4, collisionFilterMask: 7, linearDamping: .4});
  Wi(this, "prop", "bodyMaterial", {
    mass: 0, collisionFilterGroup: 2,
    collisionFilterMask: 4, linearDamping: .4
  })
};
q(Xi, D);
var Wi = function (b, g, m, k) {
  var c = b.ha.get(m);
  c || (c = new CANNON.Material(m), b.ha.set(m, c));
  k.material = c;
  b.Ffa.set(g, k);
  k.collisionFilterMask && k.collisionFilterGroup && k.collisionFilterMask & 1 && (b.Ca.collisionFilterMask |= k.collisionFilterGroup)
};
Xi.prototype.addContactMaterial = function (b, g, m) {
  b = this.ha.get(b);
  g = this.ha.get(g);
  b && g && this.world.addContactMaterial(new CANNON.ContactMaterial(b, g, m))
};
G("cannonWorld", Xi);
var Yi = function (b) {
  this.U6 = b;
  this.Iaa = []
}, Zi = function () {
  D.apply(this, arguments)
};
q(Zi, D);
G("zSprite", Zi);
var $i = function () {
  D.apply(this, arguments)
};
q($i, D);
G("shadow", $i);
var aj = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.z = b.z || 0;
  this.KT = null
};
q(aj, D);
G("zObject", aj);
var bj = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.height = b.height || 100;
  this.shape = b.shape || "box"
};
q(bj, D);
G("zBoundable", bj);
var Ui = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.Gp = null;
  this.NT = ! 1;
  this.contacts = new Map;
  this.l_ = b.bodyId || ""
};
q(Ui, D);
G("collidable", Ui);
var cj = function () {
  D.call(this);
  this.Taa = 1;
  this.DL = this.state = 0;
  this.sleep = ! 1;
  this.jU = ! 0;
  this.iS = null;
  this.vqa = ! 1
};
q(cj, D);
G("pingpongBall", cj);
var dj = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.state = 0
};
q(dj, D);
G("pingponger", dj);
var ej = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.currentTarget = null
};
q(ej, D);
G("pingpongTarget", ej);
var fj = function () {
  D.apply(this, arguments)
};
q(fj, D);
G("pingpongPaddleBounds", fj);
var gj = function () {
  D.apply(this, arguments)
};
q(gj, D);
G("playerSide", gj);
var hj = function () {
  D.apply(this, arguments)
};
q(hj, D);
G("enemySide", hj);
var ij = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this);
  this.eu = this.Dab = this.wp = this.MY = this.Haa = 0;
  this.dJ = ng("maxPoints", b, 30);
  this.ha = ng("maxBalls", b, 5);
  this.tY = 1E4
};
q(ij, D);
G("pingpongGame", ij);
var jj = function () {
  D.apply(this, arguments)
};
q(jj, D);
G("pingpongCourt", jj);
var kj = function () {
  D.apply(this, arguments)
};
q(kj, D);
G("pingpongTable", kj);
var lj = function () {
  D.apply(this, arguments)
};
q(lj, D);
G("smoke", lj);
var mj = function () {
  D.apply(this, arguments)
};
q(mj, D);
G("flame", mj);
var nj = function () {
  D.apply(this, arguments)
};
q(nj, D);
G("superMoveBackground", nj);
var oj = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.nC = this.sB = null;
  this.V_ = 0;
  this.Aaa = B(0, 1);
  this.FC = [];
  this.iJ = [];
  this.Zpa = this.r0 = this.distance = this.Hf = this.tick = 0;
  this.Ppa = ! 1;
  this.LT = ! 0
};
q(oj, D);
G("rugbyPlayer", oj);
var pj = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b)
};
q(pj, D);
G("rugbyAlly", pj);
var qj = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b)
};
q(qj, D);
G("rugbyObstacle", qj);
var rj = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.nC = null
};
q(rj, D);
G("rugbyBall", rj);
var sj = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.type = b.type;
  this.S6 = this.p_ = 0
};
q(sj, D);
G("rugbyEnemy", sj);
var tj = function () {
  D.apply(this, arguments)
};
q(tj, D);
G("rugbyHud", tj);
var uj = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.name = b.name
};
q(uj, D);
G("rugbyPowerup", uj);
var vj = function () {
  D.apply(this, arguments)
};
q(vj, D);
G("rugbyEnd", vj);
var wj = function (b, g) {
  b.visible != g && (b.visible = g, b.tickEnabled = g)
}, xj = function (b) {
  pi(b, Vh) || qi(b, function (g) {
    g.Bb = null;
    g.kb = null
  })
}, yj = function (b, g) {
  return b.timeline ? void 0 !== b.timeline.resolve(g) : ! 1
}, zj = function (b) {
  return B(b.x, b.y)
}, Aj = function (b, g) {
  b.x = g.x;
  b.y = g.y;
  xj(b)
}, Bj = function (b, g) {
  b = b.localToLocal(0, 0, g);
  if (null == b) throw Error("G");
  return B(b)
}, Cj = function (b) {
  if (b.parent) return Bj(b, b.parent);
  throw Error("H");
}, Dj = function (b, g) {
  var m = b.getMatrix(null);
  null != g.x && (b.x = g.x + b.regX * m.a);
  null !=
  g.y && (b.y = g.y + b.regY * m.d);
  xj(b)
}, Ej = function (b) {
  return b ? b.ec && b.ec.has(Vh) ? b : null != b.parent ? Ej(b.parent) : null : null
}, N = function (b) {
  var g = Ej(b);
  if (b.kb && g) return B(b.kb);
  if (g && (b.kb = Bj(b, g), b.kb)) return B(b.kb);
  throw Error("I");
}, Fj = function (b, g) {
  var m = Ej(b);
  null != m && (g = m.localToLocal(g.x, g.y, b.parent), null != g && Dj(b, B(g)))
}, Ij = function (b, g, m, k, c) {
  m = void 0 === m ? 0 : m;
  k = void 0 === k ? ! 1 : k;
  c = void 0 === c ? ! 1 : c;
  b = b.ec.get(Xh).viewport;
  if (k) return k = Gj(g, c), k || (g = N(g), k = new createjs.Rectangle(g.x, g.y, 0, 0)), Hj(b,
    m).intersects(k);
  g = N(g);
  return Hj(b, m).contains(g.x, g.y)
}, Jj = function (b) {
  return b.labels.map(function (g) {
    return g.label
  })
}, Lj = function (b, g) {
  var m = ! 0;
  m = void 0 === m ? ! 1 : m;
  if ( ! yj(b, g)) if ("ne" == g || "se" == g) if (yj(b, "e")) g = "e"; else return; else if ("nw" == g || "sw" == g) if (yj(b, "w")) g = "w"; else return; else return;
  Kj(b, g, m)
}, Kj = function (b, g, m) {
  if ( ! b.gotoAndStop) return ! 1;
  if (b.currentLabel == g) return b.paused || (b.paused = ! 0), ! 1;
  if (void 0 === m || ! m || 1 != b.children.length) return b.gotoAndStop(g), ! 0;
  m = b.children[0];
  var k = m.totalFrames,
    c = m.currentFrame, a = m.paused;
  b.gotoAndStop(g);
  b = b.children[0];
  b != m && b.totalFrames == k && (a && b.gotoAndStop ? b.gotoAndStop(c) : b.gotoAndPlay && b.gotoAndPlay(c));
  return ! 0
}, Nj = function (b, g, m, k) {
  return Kj(b, g, void 0 === k ? ! 1 : k) ? (Mj(m, b, ! 0, ! 0), ! 0) : ! 1
}, Oj = function (b, g, m) {
  if ( ! g) return null;
  a:if (m = void 0 === m ? ! 1 : m, void 0 === m ? 0 : m) m = b.getBounds(); else {
    if (b.ec && b.ec.has(ei) && (m = ui(b, fi))) {
      m = m.getTransformedBounds();
      break a
    }
    m = null
  }
  if ( ! m) return null;
  var k = b.localToLocal(m.x, m.y, g);
  b = b.localToLocal(m.x + m.width, m.y + m.height,
    g);
  m.width = k.x < b.x ? b.x - k.x : k.x - b.x;
  m.height = k.y < b.y ? b.y - k.y : k.y - b.y;
  m.x = k.x < b.x ? k.x : b.x;
  m.y = k.y < b.y ? k.y : b.y;
  return m
}, Gj = function (b, g) {
  g = void 0 === g ? ! 1 : g;
  if (b.Bb) return b.Bb.clone();
  var m = Ej(b);
  return m ? (b.Bb = Oj(b, m, g), b.Bb) : null
}, Rj = function (b, g, m) {
  b = Pj(g, b);
  var k = Q(g, Vh);
  b && k && (Qj(g, b, k), m && Fj(b, m));
  return b
}, Sj = function (b, g) {
  var m = void 0 === m ? null : m;
  var k = void 0 === k ? null : k;
  var c = Gj(b);
  if ( ! c) {
    c = N(b);
    if ( ! c) return ! 1;
    c = new createjs.Rectangle(c.x, c.y, 0, 0)
  }
  b = Gj(g);
  if ( ! b) {
    g = N(g);
    if ( ! g) return ! 1;
    b = new createjs.Rectangle(g.x,
      g.y, 0, 0)
  }
  m && (c = Hj(c, m));
  k && (b = Hj(b, k));
  return c.intersects(b)
}, Tj = function (b) {
  return B(qh(b.x, b.x + b.width), qh(b.y, b.y + b.height))
}, Hj = function (b, g) {
  if (0 == g) return b;
  g = void 0 != g.left && void 0 != g.right && void 0 != g.top && void 0 != g.bottom ? g : {
    left: g,
    right: g,
    top: g,
    bottom: g
  };
  b = b.clone();
  b.x -= g.left;
  b.y -= g.top;
  b.width += g.left + g.right;
  b.height += g.top + g.bottom;
  return b
}, Uj = function (b, g) {
  var m = b.timeline.duration;
  b.gotoAndStop(ch(0, Math.floor(g * (m - 1)), m - 1))
}, Vj = function (b, g) {
  return b.children.find(function (m) {
    return m.name ===
      g
  })
};
var Wj = {name: "fakie", Hf: 100, multiplier: 1, text: "FAKIE", frame: null, actions: [], duration: 0},
  Xj = {name: "hideAndSeek", Hf: 5E3, multiplier: 1, text: "Hide and Seek", frame: null, actions: [], duration: 0},
  Yj = {
    name: "noseGrab",
    Hf: 100,
    multiplier: 1,
    text: "Nose Grab",
    frame: "nose_grab",
    actions: ["action"],
    duration: 10
  }, Zj = function (b, g) {
    this.ha = b;
    this.actions = g
  }, bk = function (b, g) {
    var m = b.ec.get(ak), k = b.ec.get(M), c = b.ec.get(bi), a = b.ec.get(aj);
    this.type = g;
    this.Qw = N(b) || B(0, 0);
    this.direction = c.direction;
    this.z = a.z;
    this.velocity =
      B(k.velocity);
    this.pC = k.pC;
    this.TB = m.TB
  }, ak = function (b) {
    b = void 0 === b ? {} : b;
    D.call(this, b);
    this.CN = 2700;
    this.bx = this.IY = this.Hf = 0;
    this.TB = ! 0;
    this.Ca = this.Bb = this.sK = 0;
    this.ha = null;
    this.actions = [];
    this.a7 = ! 1;
    this.CK = [];
    this.oc = this.kb = 0
  };
q(ak, D);
G("skatePlayer", ak);
var ck = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.ha = []
};
q(ck, D);
G("skateHud", ck);
var dk = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.points = b.points;
  this.ha = b.respawn
};
q(dk, D);
G("skateCoin", dk);
var ek = function () {
  D.apply(this, arguments)
};
q(ek, D);
G("skateRail", ek);
var fk = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.z = b.z
};
q(fk, D);
G("skateRailMarker", fk);
var gk = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.active = ! 1
};
q(gk, D);
G("skateChamp", gk);
var hk = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.direction = b.direction || 3;
  this.speed = b.speed
};
q(hk, D);
G("speedBoost", hk);
var ik = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.speed = b.speed || 3
};
q(ik, D);
G("bouncePad", ik);
var jk = function (b) {
  return b.split(",").map(function (g) {
    return g.trim()
  }).filter(function (g) {
    return 0 < g.length
  })
}, kk = function (b) {
  return isNaN(b) ? "true" == b.toLowerCase() ? ! 0 : "false" == b.toLowerCase() ? ! 1 : "null" == b.toLowerCase() ? null : b : Number(b)
}, lk = function (b) {
  return parseInt(b / 1800 % 60, 10) + ":" + parseInt(b / 30 % 60, 10).toString().padStart(2, "0") + "." + parseInt(b % 30 / 30 * 100, 10).toString().padStart(2, "0")
}, mk = function (b, g) {
  if (b.length != g.length) return ! 1;
  for (var m = 0; m < b.length; m++) if (b[m] != g[m]) return ! 1;
  return ! 0
};
var nk = /\$[A-z_0-9]+/g, ok = function (b) {
  if ("" == b.trim()) return "true";
  b = b.replace(/!(\$[A-z_0-9]+)/g, "(not $1)");
  b = b.replace(/&&/g, " and ");
  b = b.replace(/\|\|/g, " or ");
  return b = b.replace(/null/g, "false")
}, pk = function (b) {
  var g = Array.from(b.matchAll(nk), function (c) {
    return c[0]
  }), m = {};
  g = p(g);
  for (var k = g.next(); ! k.done; k = g.next()) k = k.value, m[k] = th(k.replace("$", ""), ! 1);
  return !! exprEval.Parser.evaluate(b, m)
}, qk = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.conditions = [];
  this.nodes = [];
  for (var g = 1; 10 >=
  g; g++) {
    var m = b["condition" + g], k = b["node" + g];
    k && (this.conditions.push(ok(m)), this.nodes.push(k))
  }
};
q(qk, D);
G("storageNpc", qk);
var rk = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.conditions = [];
  this.frames = [];
  for (var g = 1; 10 >= g; g++) {
    var m = b["condition" + g], k = b["frame" + g];
    k && (this.conditions.push(ok(m)), this.frames.push(k))
  }
};
q(rk, D);
G("storageSprite", rk);
var sk = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.key = b.key.replace(/^(\$)/, "");
  this.value = kk(b.value)
};
q(sk, D);
G("storageTrigger", sk);
var tk = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.key = b.key.replace(/^(\$)/, "");
  this.value = kk(b.value)
};
q(tk, D);
G("storageOnAction", tk);
var uk = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.Mpa = ok(b.condition)
};
q(uk, D);
G("conditionallyVisible", uk);
var vk = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.rqa = this.Faa = this.T6 = null;
  this.rab = this.RB = this.FL = this.zL = 0;
  this.currentFrame = -1
};
q(vk, D);
G("clockState", vk);
var wk = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.rY = 0
};
q(wk, D);
G("playbackState", wk);
var xk = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.type = null;
  this.time = -1;
  this.state = 0;
  this.Opa = ! 1;
  this.track = this.Ts = null
};
q(xk, D);
G("danceMoveArrow", xk);
var yk = function () {
  D.apply(this, arguments)
};
q(yk, D);
G("redBg", yk);
var zk = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.yY = ! 1;
  this.GQ = this.sqa = this.ut = this.wp = 0;
  this.xL = new Map([[3, NaN], [1, NaN], [0, NaN], [2, NaN]])
};
q(zk, D);
G("swimState", zk);
var Ak = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.V6 = null
};
q(Ak, D);
G("player", Ak);
var Bk = function () {
  D.apply(this, arguments)
};
q(Bk, D);
G("champion", Bk);
var Ck = function () {
  D.apply(this, arguments)
};
q(Ck, D);
G("oldMan", Ck);
var Dk = function () {
  D.apply(this, arguments)
};
q(Dk, D);
G("turtle", Dk);
var Ek = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.Ypa = null
};
q(Ek, D);
G("character", Ek);
var Fk = function () {
  D.apply(this, arguments)
};
q(Fk, D);
G("beatTarget", Fk);
var Gk = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.tqa = jk(b.triggerComponent).map(function (g) {
    return mg[g]
  });
  this.ex = [];
  this.bdb = ng("zMin", b, -1E5) - .1;
  this.adb = ng("zMax", b, 1E5) + .1
};
q(Gk, D);
G("trigger", Gk);
var Hk = function () {
  D.apply(this, arguments)
};
q(Hk, D);
G("triggerArea", Hk);
var Ik = function (b) {
  b = void 0 === b ? {} : b;
  D.call(this, b);
  this.Qcb = b.triggerFrame || null;
  this.Tcb = b.untriggerFrame || null
};
q(Ik, D);
G("jumpToFrameOnTrigger", Ik);
var Jk = {}, Kk = function () {
  throw Error("J");
};
Kk.prototype.Npa = null;
Kk.prototype.toString = function () {
  return this.ha
};
var Lk = function () {
  Kk.call(this)
};
Oa(Lk, Kk);
Lk.prototype.iab = Jk;
var Mk = function (b) {
  function g(m) {
    this.ha = m
  }

  g.prototype = b.prototype;
  return function (m, k) {
    m = new g(String(m));
    void 0 !== k && (m.Npa = k);
    return m
  }
}(Lk);
var Nk = function () {
  var b = Mk("<style>\n.ddl-lightbox_{display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;opacity:0;z-index:1000;background-color:rgba(0,0,0,0.8);visibility:hidden}.ddl-lightboxContainer_{position:relative;height:90%;width:90%}.ddl-lightboxContent_{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;-o-transform-origin:0 0;transform-origin:0 0}.ddl-lightboxEnabled_{opacity:1;visibility:visible}\n</style>");
  var g = td(Ta || (Ta = new sd), "DIV");
  if (Ia(b)) if (b instanceof Kk) {
    if (b.iab !== Jk) throw Error("K");
    b = Pb(b.toString(), b.Npa || null)
  } else b = Qb("zSoyz"); else b = Qb(String(b));
  if (Sb()) for (; g.lastChild;) g.removeChild(g.lastChild);
  g.innerHTML = Ob(b);
  1 == g.childNodes.length && (b = g.firstChild, 1 == b.nodeType && (g = b));
  return g
};
var Ok = [[{U: [], nodeName: "cabinet1", V: "arcade", tags: {W: [""]}, text: "Magic Cat Academy"}], [{
  U: [],
  nodeName: "cabinet2",
  V: "arcade",
  tags: {W: [""]},
  text: "Pangolin Love"
}], [{U: [], nodeName: "cabinet3", V: "arcade", tags: {W: [""]}, text: "Great Ghoul Duel"}], [{
  U: [],
  nodeName: "cabinet4",
  V: "arcade",
  tags: {W: [""]},
  text: "The Pony Express"
}], [{U: [], nodeName: "cabinet5", V: "arcade", tags: {W: [""]}, text: "The Doodle Fruit Games"}], [{
  U: [],
  nodeName: "cabinet6",
  V: "arcade",
  tags: {W: [""]},
  text: "The Pony Express"
}], [{
  U: [], nodeName: "cabinet7",
  V: "arcade", tags: {W: [""]}, text: "Garden Gnomes"
}], [{U: [], nodeName: "cabinet8", V: "arcade", tags: {W: [""]}, text: "The Great Candy Cup"}], [{
  U: [],
  nodeName: "cabinet9",
  V: "arcade",
  tags: {W: [""]},
  text: "Loteria"
}], [{
  U: [],
  nodeName: "dome",
  V: "arcade",
  tags: {W: ["luckyCurious"]},
  text: "I've never seen games like this before..."
}], [{
  U: [],
  nodeName: "ufo",
  V: "arcade",
  tags: {W: ["luckyCurious"]},
  text: "Wow, so many great prizes!"
}], [{U: [{next: "rawr", text: null}], nodeName: "yarn", V: "arcade", tags: {W: [""]}, text: "Yarn Master"}, {
  U: [],
  nodeName: "rawr", V: "arcade", tags: {W: ["luckyHappy"]}, text: "This one looks fun!"
}], [{U: [{next: "dotdotdot2", text: null}], nodeName: "banyanTree", V: "banyanTree", tags: {}, text: "..."}, {
  U: [],
  nodeName: "dotdotdot2",
  V: "banyanTree",
  tags: {},
  text: "...leaf me alone."
}], [{
  U: [],
  nodeName: "backBigCat1",
  V: "bigCat",
  tags: {W: ["bigCatNeutral"]},
  text: "(oh no, I think I'm going to lose!)"
}], [{
  U: [],
  nodeName: "backBigCat2",
  V: "bigCat",
  tags: {W: ["bigCatNeutral"]},
  text: "I prefer this game to the other sports."
}], [{
  U: [], nodeName: "bigCat1",
  V: "bigCat", tags: {W: ["bigCatNeutral"]}, text: "Are you feeling...lucky?"
}], [{
  U: [],
  nodeName: "bigCat2",
  V: "bigCat",
  tags: {W: ["bigCatNeutral"]},
  text: "Please don't sit next to me."
}], [{
  U: [],
  nodeName: "bigCat3",
  V: "bigCat",
  tags: {W: ["bigCatNeutral"]},
  text: "Have you beaten all 7 sports yet?"
}], [{
  U: [],
  nodeName: "bigCat1",
  V: "bigCat1",
  tags: {W: ["bigCatNeutral"]},
  text: "Are you feeling...lucky?"
}], [{U: [], nodeName: "bigCat2", V: "bigCat2", tags: {W: ["bigCatNeutral"]}, text: "Please don't sit next to me."}], [{
  U: [], nodeName: "bigCat3",
  V: "bigCat3", tags: {W: ["bigCatNeutral"]}, text: "Have you beaten all 7 sports yet?"
}], [{
  U: [{next: "read", text: null}],
  nodeName: "bookKarasu",
  V: "bigKarasu",
  tags: {},
  text: "Welcome to the Library"
}, {
  U: [{next: "orelse", text: null}],
  nodeName: "read",
  V: "bigKarasu",
  tags: {},
  text: "Read anything you like, but please don't take anything with you."
}, {U: [], nodeName: "orelse", V: "bigKarasu", tags: {}, text: "(or else...)"}], [{
  U: [],
  nodeName: "blueBook",
  V: "blueBook",
  tags: {},
  text: "THE BLUE TEAM: Stronger Every Day"
}], [{
  U: [{
    next: "read",
    text: null
  }], nodeName: "bookKeepr", V: "bookKeeper", tags: {}, text: "Welcome to the Library"
}, {
  U: [{next: "orelse", text: null}],
  nodeName: "read",
  V: "bookKeeper",
  tags: {},
  text: "Read anything you like, but please don't take anything with you."
}, {U: [], nodeName: "orelse", V: "bookKeeper", tags: {}, text: "(or else...)"}], [{
  U: [],
  nodeName: "bookArcheryCombos",
  V: "bookStore",
  tags: {},
  text: "The Secret to Combos in Archery"
}], [{U: [], nodeName: "bookBlue", V: "bookStore", tags: {}, text: "THE BLUE TEAM: Stronger Every Day"}], [{
  U: [], nodeName: "bookGreen",
  V: "bookStore", tags: {}, text: "THE GREEN TEAM: Kappable of Anything"
}], [{
  U: [{next: "secret", text: null}],
  nodeName: "bookHiddenForest",
  V: "bookStore",
  tags: {},
  text: "The Four Team Leaders"
}, {
  U: [{next: "leaders", text: null}],
  nodeName: "secret",
  V: "bookStore",
  tags: {},
  text: "Each team has a headquarters somewhere on the island..."
}, {
  U: [],
  nodeName: "leaders",
  V: "bookStore",
  tags: {},
  text: "The Great Leaders of the Four Teams can be found there, but only if you are strong enough.."
}], [{
  U: [], nodeName: "bookMagicCat", V: "bookStore",
  tags: {}, text: "Magic Cat Academy III: Momo's Revenge"
}], [{U: [], nodeName: "bookRed", V: "bookStore", tags: {}, text: "THE RED TEAM: Researching Victory"}], [{
  U: [],
  nodeName: "bookTanookiCitySubway",
  V: "bookStore",
  tags: {},
  text: "Subway Guide to Tanooki City"
}], [{U: [], nodeName: "bookTwoKappas", V: "bookStore", tags: {}, text: "A Tale Of Two Kappas"}], [{
  U: [],
  nodeName: "bookUnderwaterCastle",
  V: "bookStore",
  tags: {},
  text: "Underwater Castles: Myth or Marvelous?"
}], [{U: [], nodeName: "bookYellow", V: "bookStore", tags: {}, text: "THE YELLOW TEAM: (content redacted)"}],
  [{
    U: [{next: "cantgo", text: null}],
    nodeName: "catBoat",
    V: "catBoat",
    tags: {W: ["luckyWorried"]},
    text: "..."
  }, {U: [], nodeName: "dotdotdot2", V: "catBoat", tags: {}, text: "Empty Text"}, {
    U: [{next: "still", text: null}],
    nodeName: "cantgo",
    V: "catBoat",
    tags: {W: ["luckyWorried"]},
    text: "I can't leave now..."
  }, {
    U: [],
    nodeName: "still",
    V: "catBoat",
    tags: {W: ["luckyNeutral"]},
    text: "There are still Sports to win!!"
  }], [{
    U: [],
    nodeName: "covenienceClerk1",
    V: "convenienceStore1",
    tags: {},
    text: "Welcome! Please let me know if you need any help."
  }],
  [{
    U: [{next: "money", text: null}],
    nodeName: "freezer1",
    V: "convenienceStore1",
    tags: {W: ["luckyNeutral"]},
    text: "Wow, they have so many great sports drinks!"
  }, {
    U: [],
    nodeName: "money",
    V: "convenienceStore1",
    tags: {W: ["luckyWorried"]},
    text: "...if only I had money."
  }], [{
    U: [],
    nodeName: "hotFood1",
    V: "convenienceStore1",
    tags: {},
    text: "Hot Veggie Buns: Please ask attendant for assistance."
  }], [{
    U: [{next: "healthy", text: null}],
    nodeName: "shelf1",
    V: "convenienceStore1",
    tags: {},
    text: "Green Tea Chips"
  }, {
    U: [], nodeName: "healthy",
    V: "convenienceStore1", tags: {W: ["luckyNeutral"]}, text: "These sound healthy! But I'm not too hungry."
  }], [{
    U: [{next: "spicy", text: null}],
    nodeName: "shelf2",
    V: "convenienceStore1",
    tags: {},
    text: "Instant Ramen - EXTRA spicy!"
  }, {
    U: [],
    nodeName: "spicy",
    V: "convenienceStore1",
    tags: {W: ["luckyWorried"]},
    text: "...am I spicy enough to handle this?"
  }], [{
    U: [{next: "hatebath", text: null}],
    nodeName: "shelf3",
    V: "convenienceStore1",
    tags: {},
    text: "Fur Shampoo - Keep your fur aerodynamic for maximum speed!"
  }, {
    U: [], nodeName: "hatebath",
    V: "convenienceStore1", tags: {W: ["luckyWorried"]}, text: "That sounds useful, but I hate getting my fur wet!"
  }], [{
    U: [{next: "books", text: null}],
    nodeName: "bookFox",
    V: "fox",
    tags: {},
    text: "I used to think I was the Chosen One, but that was a long time ago."
  }, {
    U: [{next: "wonder", text: null}],
    nodeName: "books",
    V: "fox",
    tags: {},
    text: "Now I'm happy just reading books."
  }, {
    U: [],
    nodeName: "wonder",
    V: "fox",
    tags: {},
    text: "But sometimes I can't help but wonder what could have been..."
  }], [{
    U: [], nodeName: "greenBook", V: "greenBook",
    tags: {}, text: "THE GREEN TEAM: Kappable of Anything"
  }], [{
    U: [],
    nodeName: "diffteam",
    V: "inari",
    tags: {W: ["inariNeutral"]},
    text: "Hey you're not on Team Yellow... Stop staring at me!"
  }], [{
    U: [],
    nodeName: "invisible",
    V: "inari",
    tags: {W: ["inariNeutral"]},
    text: "You can't see me because I'm invisible."
  }], [{
    U: [{next: "beach", text: null}],
    nodeName: "running",
    V: "inari",
    tags: {W: ["inariNeutral"]},
    text: "The Kijimuna all love running races together on the beach."
  }, {
    U: [], nodeName: "beach", V: "inari", tags: {W: ["inariNeutral"]},
    text: "But the beach has a lot of obstacles, be careful if you join them!"
  }], [{U: [], nodeName: "sameteam", V: "inari", tags: {W: ["inariNeutral"]}, text: "You're on Team Yellow!"}], [{
    U: [],
    nodeName: "skateAllDay",
    V: "inari",
    tags: {W: ["inariNeutral"]},
    text: "Skate all day!"
  }], [{
    U: [],
    nodeName: "skater1",
    V: "inari",
    tags: {W: ["inariNeutral"]},
    text: "Welcome to the Skateboarding Dojo!"
  }], [{
    U: [{next: "whereisthepark", text: "Where?"}],
    nodeName: "skater2",
    V: "inari",
    tags: {W: ["inariNeutral"]},
    text: "We have a secret skatepark, members only!"
  },
    {
      U: [],
      nodeName: "whereisthepark",
      V: "inari",
      tags: {W: ["inariNeutral"]},
      text: "Across the train tracks North of town. But SHHH don't tell anyone."
    }], [{
    U: [],
    nodeName: "spies",
    V: "inari",
    tags: {W: ["inariNeutral"]},
    text: "The Yellow Team has spies everywhere..."
  }], [{
    U: [{next: "joinYellow", text: "Join Yellow!"}, {next: "noThanks", text: "Nah."}, {
      next: "tellMeMore",
      text: "Who?"
    }],
    nodeName: "teamPickerYellow",
    V: "inari",
    tags: {W: ["inariNeutral"]},
    text: "Pst, wanna join the super secret Team Yellow?"
  }, {
    U: [{
      next: "followPath",
      text: null
    }],
    nodeName: "joinYellow",
    V: "inari",
    tags: {W: ["inariNeutral"], zd: ["PLAYER_TEAM", "yellow"]},
    text: "Welcome to Team Yellow! Your first assignment: find and defeat a Legendary Champion."
  }, {
    U: [{next: "mapShow", text: null}],
    nodeName: "followPath",
    V: "inari",
    tags: {W: ["inariNeutral"]},
    text: "Follow the paths to find the Champions and play the sports."
  }, {
    U: [{next: "soSneaky", text: null}],
    nodeName: "mapShow",
    V: "inari",
    tags: {W: ["map"]},
    text: "Or press ESC to use the map!"
  }, {
    U: [], nodeName: "soSneaky", V: "inari",
    tags: {W: ["inariNeutral"]}, text: "Good luck and stay sneaky out there!"
  }, {
    U: [],
    nodeName: "noThanks",
    V: "inari",
    tags: {W: ["inariNeutral"]},
    text: "Ok, but shhhhhh, you never saw me!"
  }, {
    U: [{next: "joinYellow", text: "I'll Join!"}, {next: "noThanks", text: "No thanks."}],
    nodeName: "tellMeMore",
    V: "inari",
    tags: {W: ["inariNeutral"]},
    text: "I'm an Inari, the trickster fox mascot of Team Yellow. Life's just more fun if you're sneaky."
  }], [{
    U: [{next: "fanoff", text: null}], nodeName: "yoichi", V: "inari", tags: {W: ["inariNeutral"]},
    text: "Captain Yoichi is the greatest archer in the world!"
  }, {
    U: [{next: "challengehim", text: null}],
    nodeName: "fanoff",
    V: "inari",
    tags: {W: ["inariNeutral"]},
    text: "He once shot a fan off the mast of a boat while on horseback, can you believe it??"
  }, {
    U: [],
    nodeName: "challengehim",
    V: "inari",
    tags: {W: ["inariNeutral"]},
    text: "One day I'll challenge him one-on-one but I don't think I'm strong enough yet."
  }], [{
    U: [{next: "hiding", text: null}],
    nodeName: "inari1",
    V: "inari1",
    tags: {W: ["inariNeutral"]},
    text: "Shhhhh!"
  }, {
    U: [{
      next: "sneaky",
      text: null
    }],
    nodeName: "hiding",
    V: "inari1",
    tags: {W: ["inariNeutral"]},
    text: "I'm hiding so the other teams don't see me."
  }, {
    U: [],
    nodeName: "join",
    V: "inari1",
    tags: {W: ["inariNeutral"], zd: ["PLAYER_TEAM", "yellow"]},
    text: "Welcome to the YELLOW TEAM! Shhhh"
  }, {
    U: [],
    nodeName: "nothanks",
    V: "inari1",
    tags: {W: ["inariNeutral"]},
    text: "Ok, but don't tell anyone you saw me..."
  }, {
    U: [{next: "join", text: "I'll join."}, {next: "nothanks", text: "No thanks..."}],
    nodeName: "tellmemore",
    V: "inari1",
    tags: {W: ["inariNeutral"]},
    text: "I'm an Inari, the trickster fox mascot of the Yellow Team. Life's just more fun if you're sneaky!"
  },
    {
      U: [{next: "join", text: "Join!"}, {next: "nothanks", text: "No thanks."}, {next: "tellmemore", text: "Who?"}],
      nodeName: "sneaky",
      V: "inari1",
      tags: {W: ["inariNeutral"]},
      text: "But if you saw me you must be pretty sneaky, do you want to join our secret team?"
    }], [{U: [], nodeName: "diffteam", V: "kappa", tags: {W: ["kappaNeutral"]}, text: "...no kappa..."}], [{
    U: [],
    nodeName: "kappa",
    V: "kappa",
    tags: {W: ["kappaNeutral"]},
    text: "Kappa!"
  }], [{U: [], nodeName: "sameteam", V: "kappa", tags: {W: ["kappaNeutral"]}, text: "Kappa \u2665"}], [{
    U: [{
      next: "how",
      text: null
    }],
    nodeName: "smart",
    V: "kappa",
    tags: {W: ["kappaNeutral"]},
    text: "My brothers sit by content in ignorance, and yet I, the Smart Kappa, must carry the burden of my intellegence alone."
  }, {
    U: [{next: "search", text: null}],
    nodeName: "how",
    V: "kappa",
    tags: {W: ["kappaNeutral"]},
    text: "The simple Kappa knows not the difficulties of intellect, the burden of existential dread."
  }, {
    U: [{next: "find", text: null}],
    nodeName: "search",
    V: "kappa",
    tags: {W: ["kappaNeutral"]},
    text: "I stare out at the vast abyss in front of me and wonder...is this really all there is? Sure it can't be this simple."
  },
    {
      U: [],
      nodeName: "find",
      V: "kappa",
      tags: {W: ["kappaNeutral"]},
      text: "But listen to me, going on about nothing. Please, enjoy your games. You've no idea how lucky you really are."
    }], [{
    U: [{next: "kappaJoin", text: null}],
    nodeName: "teamPickerGreen",
    V: "kappa",
    tags: {W: ["kappaNeutral"]},
    text: "Kappa."
  }, {
    U: [{next: "joinGreen", text: "Join Team Green."}, {next: "noThanks", text: "No."}, {
      next: "tellMeMore",
      text: "Who?"
    }], nodeName: "kappaJoin", V: "kappa", tags: {W: ["kappaNeutral"]}, text: "Join kappa?"
  }, {
    U: [{next: "followPath", text: null}],
    nodeName: "joinGreen", V: "kappa", tags: {W: ["kappaNeutral"], zd: ["PLAYER_TEAM", "green"]}, text: "KAPPA! KAPPA!"
  }, {U: [], nodeName: "noThanks", V: "kappa", tags: {W: ["kappaNeutral"]}, text: "K-kappa?"}, {
    U: [{
      next: "joinGreen",
      text: "Join Green."
    }, {next: "noThanks", text: "No Thanks."}],
    nodeName: "tellMeMore",
    V: "kappa",
    tags: {W: ["kappaNeutral"]},
    text: "Kappa kappa kappa. Kappa? Kappa!! Kappa ka-PPA! kappa kappa. KAPPA!"
  }, {
    U: [{next: "mapShow", text: null}],
    nodeName: "followPath",
    V: "kappa",
    tags: {W: ["kappaNeutral"]},
    text: "(Follow the paths to find the Champions and play the sports.)"
  },
    {
      U: [{next: "byeKappa", text: null}],
      nodeName: "mapShow",
      V: "kappa",
      tags: {W: ["map"]},
      text: "(Or press ESC to use the map!)"
    }, {U: [], nodeName: "byeKappa", V: "kappa", tags: {W: ["kappaNeutral"]}, text: "Kappa!"}], [{
    U: [{
      next: "recruit",
      text: null
    }], nodeName: "kappa1", V: "kappa1", tags: {W: ["kappaNeutral"]}, text: "Kappa."
  }, {
    U: [{next: "join", text: "Join Green!"}, {next: "nothanks", text: "No thanks?"}, {
      next: "tellmemore",
      text: "Kappa??"
    }], nodeName: "recruit", V: "kappa1", tags: {W: ["kappaNeutral"]}, text: "Kappa kappa?"
  }, {
    U: [], nodeName: "join",
    V: "kappa1", tags: {W: ["kappaNeutral"]}, text: "KAPPA! KAPPA!"
  }, {U: [], nodeName: "nothanks", V: "kappa1", tags: {W: ["kappaNeutral"]}, text: "k-kappa?"}, {
    U: [{
      next: "join",
      text: "Join."
    }, {next: "nothanks", text: "NO!"}],
    nodeName: "tellmemore",
    V: "kappa1",
    tags: {W: ["kappaNeutral"]},
    text: "Kappa kappa kappa. Kappa? Kappa!! Kappa ka-PPA! kappa kappa. KAPPA!"
  }], [{
    U: [{next: "Sports", text: "Sports!"}],
    nodeName: "Start",
    V: "kappa1",
    tags: {W: ["kappaNeutral"]},
    text: "Hi there! What? Not a lot of Kappas where you're from? Well you look sort of out of place yourself. What brings you here?"
  },
    {
      U: [{next: "TableTennis", text: "Table Tennis"}, {next: "Skiing", text: "Skiing"}],
      nodeName: "Sports",
      V: "kappa1",
      tags: {W: ["kappaNeutral"]},
      text: "So you like sports eh? Lucky for you there's a sports tournament happening on this island. Got any favorite sports?"
    }, {
      U: [{next: "TableTennis2", text: null}],
      nodeName: "TableTennis",
      V: "kappa1",
      tags: {W: ["kappaNeutral"]},
      text: "Table tennis? I don't think I've ever heard of such a thing. Though if you want a sport that's a lot like tennis, I'd suggest ping pong."
    }, {
      U: [],
      nodeName: "Skiing",
      V: "kappa1",
      tags: {W: ["kappaNeutral"]},
      text: "I have bad news for you. This island doesn't offer any skiing at the moment. Check back on www.google.com in 2 years."
    }, {
      U: [],
      nodeName: "TableTennis2",
      V: "kappa1",
      tags: {W: ["kappaNeutral"]},
      text: "There's a guy EAST of here who's playing ping pong pretty passionately. You should challenge him!"
    }], [{
    U: [{next: "momotaro", text: null}],
    nodeName: "beware",
    V: "karasu",
    tags: {W: ["karasuNeutral"]},
    text: "The ogres of Oni Island love to play Rugby, no one can beat them."
  },
    {
      U: [{next: "maybeJoin", text: null}],
      nodeName: "momotaro",
      V: "karasu",
      tags: {W: ["karasuNeutral"]},
      text: "Today they are playing against Momotaro and his friends."
    }, {
      U: [],
      nodeName: "maybeJoin",
      V: "karasu",
      tags: {W: ["karasuNeutral"]},
      text: "Maybe you can join them!"
    }], [{
    U: [{next: "cannotreach", text: null}],
    nodeName: "climbing",
    V: "karasu",
    tags: {W: ["karasuNeutral"]},
    text: "The great Fukuro, Champion of Climbing, awaits at the top of this mountain."
  }, {
    U: [{next: "imabird", text: null}], nodeName: "cannotreach", V: "karasu",
    tags: {W: ["karasuNeutral"]}, text: "No matter how hard we try, none have been able to reach him."
  }, {
    U: [],
    nodeName: "imabird",
    V: "karasu",
    tags: {W: ["karasuNeutral"]},
    text: "Even birds like me can't get close, who could possibly stand a chance??"
  }], [{
    U: [],
    nodeName: "diffteam",
    V: "karasu",
    tags: {W: ["karasuNeutral"]},
    text: "Good luck with your other team..."
  }], [{
    U: [{next: "yesa", text: "Yes!"}, {next: "noa", text: "Not really.."}],
    nodeName: "goodBooks",
    V: "karasu",
    tags: {W: ["karasuNeutral"]},
    text: "Read any good books recently?"
  },
    {
      U: [],
      nodeName: "yesa",
      V: "karasu",
      tags: {W: ["karasuNeutral"]},
      text: "Good work! Keep that mind sharp and the Red Team on top!"
    }, {
      U: [],
      nodeName: "noa",
      V: "karasu",
      tags: {W: ["karasuNeutral"]},
      text: "Me either...please don't tell anyone."
    }], [{
    U: [{next: "dancetogether", text: null}],
    nodeName: "otohime",
    V: "karasu",
    tags: {W: ["karasuNeutral"]},
    text: "Princess Otohime lives in a beautiful underwater castle, you can see it from the red bridge west of here."
  }, {
    U: [], nodeName: "dancetogether", V: "karasu", tags: {W: ["karasuNeutral"]},
    text: "She welcomes all to join her in her sychronized swimming dances, but I could never keep up."
  }], [{
    U: [{next: "yes", text: "Really?"}, {next: "no", text: "No way."}],
    nodeName: "research",
    V: "karasu",
    tags: {W: ["karasuNeutral"]},
    text: "The Red Team's research is going well. did you know there are hidden sports all over the island?"
  }, {
    U: [],
    nodeName: "yes",
    V: "karasu",
    tags: {W: ["karasuNeutral"]},
    text: "They say the real difficulties lie on the edges of this world. I think I'd rather stay at home!"
  }, {
    U: [], nodeName: "no",
    V: "karasu", tags: {W: ["karasuNeutral"]}, text: "A doubtful mind will bear no fruit."
  }], [{
    U: [],
    nodeName: "sameteam",
    V: "karasu",
    tags: {W: ["karasuNeutral"]},
    text: "Happy to have you with us on Team Red!"
  }], [{
    U: [{next: "wonder", text: null}],
    nodeName: "smartKappa",
    V: "karasu",
    tags: {W: ["karasuNeutral"]},
    text: "I've heard there's a Kappa somewhere who can speak."
  }, {U: [], nodeName: "wonder", V: "karasu", tags: {W: ["karasuNeutral"]}, text: "I wonder what it has to say..."}], [{
    U: [{next: "joinRed", text: "Join Red!"}, {
      next: "noThanks",
      text: "Nah."
    }, {next: "tellMeMore", text: "Who?"}],
    nodeName: "teamPickerRed",
    V: "karasu",
    tags: {W: ["karasuNeutral"]},
    text: "Salutations. A new student for Team Red?"
  }, {U: [], nodeName: "noThanks", V: "karasu", tags: {W: ["karasuNeutral"]}, text: "..."}, {
    U: [{
      next: "joinRed",
      text: "Join Red!"
    }, {next: "noThanks", text: "No thanks."}],
    nodeName: "tellMeMore",
    V: "karasu",
    tags: {W: ["karasuNeutral"]},
    text: "I'm a Karasu, the noble crow mascot of Team Red. Knowledge is the only path to victory!"
  }, {
    U: [{next: "followPath", text: null}],
    nodeName: "joinRed",
    V: "karasu",
    tags: {W: ["karasuNeutral"], zd: ["PLAYER_TEAM", "red"]},
    text: "A wise choice, welcome to Team Red. Your first assignment: find and defeat a Legendary Champion."
  }, {
    U: [{next: "mapShow", text: null}],
    nodeName: "followPath",
    V: "karasu",
    tags: {W: ["karasuNeutral"]},
    text: "Follow the paths to find the Champions and play the sports."
  }, {
    U: [{next: "soSharp", text: null}],
    nodeName: "mapShow",
    V: "karasu",
    tags: {W: ["map"]},
    text: "Or press ESC to use the map."
  }, {
    U: [], nodeName: "soSharp", V: "karasu", tags: {W: ["karasuNeutral"]},
    text: "Stay sharp, I know you'll make Team Red proud."
  }], [{
    U: [{next: "recruit", text: null}],
    nodeName: "karasu1",
    V: "karasu1",
    tags: {W: ["karasuNeutral"]},
    text: "Well well. A new student, I presume?"
  }, {
    U: [{next: "study", text: null}],
    nodeName: "recruit",
    V: "karasu1",
    tags: {W: ["karasuNeutral"]},
    text: "Knowledge is the only path to victory. The RED TEAM is dedicated to the studying the games through participation and domination."
  }, {
    U: [], nodeName: "join", V: "karasu1", tags: {W: ["karasuNeutral"], zd: ["PLAYER_TEAM", "red"]},
    text: "Welcome to the RED TEAM! Let the learning begin!"
  }, {U: [], nodeName: "nothanks", V: "karasu1", tags: {W: ["karasuNeutral"]}, text: "..."}, {
    U: [{
      next: "balance",
      text: null
    }],
    nodeName: "tellmemore",
    V: "karasu1",
    tags: {W: ["karasuNeutral"]},
    text: "I'm a Karasu, the noble crow mascot of the Red Team."
  }, {
    U: [{next: "join", text: "Join Red!"}, {next: "nothanks", text: "No thanks."}, {
      next: "tellmemore",
      text: "Who?"
    }],
    nodeName: "study",
    V: "karasu1",
    tags: {W: ["karasuNeutral"]},
    text: "Do you want to join our altruistic academic pursuit?"
  },
    {
      U: [{next: "join", text: "Join!"}, {next: "nothanks", text: "No thanks."}],
      nodeName: "balance",
      V: "karasu1",
      tags: {W: ["karasuNeutral"]},
      text: "We believe winning them could unlock the key to restoring balance to Champion Island. Are you ready to join us in academic glory?"
    }], [{
    U: [{next: "banyandtree", text: null}],
    nodeName: "marathonDojo",
    V: "kijimuna",
    tags: {W: ["kijimunaNeutral"]},
    text: "All the other sports have dojos, but the kijimuna would rather be outside running than in some stuffy building."
  }, {
    U: [],
    nodeName: "banyandtree",
    V: "kijimuna",
    tags: {W: ["kijimunaNeutral"]},
    text: "Closest thing we have is the big banyan tree we all like to hang out it. You can get to any part of the beach from it!"
  }], [{
    U: [],
    nodeName: "treeFriend",
    V: "kijimuna",
    tags: {W: ["kijimunaNeutral"]},
    text: "They say The Chosen One can hear the banyan tree speak..."
  }], [{
    U: [],
    nodeName: "waterRun",
    V: "kijimuna",
    tags: {W: ["kijimunaNeutral"]},
    text: "Just hearing the ocean waves makes me want to go for a run!"
  }], [{
    U: [], nodeName: "koma1", V: "koma1", tags: {W: ["koma1Neutral"]},
    text: "Head North to play the games!"
  }], [{
    U: [],
    nodeName: "house",
    V: "koma1",
    tags: {W: ["koma1Neutral"]},
    text: "Find the Red Gate if you want to play the games!"
  }], [{
    U: [{next: "explore", text: null}],
    nodeName: "koma1tanooki",
    V: "koma1tanooki",
    tags: {W: ["koma1Neutral"]},
    text: "Welcome to Tanooki City!"
  }, {
    U: [],
    nodeName: "explore",
    V: "koma1tanooki",
    tags: {W: ["koma1Neutral"]},
    text: "There's lots to see here, you should explore!"
  }], [{U: [], nodeName: "koma2", V: "koma2", tags: {W: ["koma2Neutral"]}, text: "Head North to play the games!"}],
  [{
    U: [],
    nodeName: "house",
    V: "koma2",
    tags: {W: ["koma2Neutral"]},
    text: "The sports are outside, go find the Red Gates to play!"
  }], [{
    U: [{next: "meet", text: null}],
    nodeName: "koma2tanooki",
    V: "koma2tanooki",
    tags: {W: ["koma2Neutral"]},
    text: "Tanooki City is the largest city on the island."
  }, {
    U: [],
    nodeName: "meet",
    V: "koma2tanooki",
    tags: {W: ["koma2Neutral"]},
    text: "The Grand Champion Tanooki sits in the Dojo at the center of the city."
  }], [{
    U: [], nodeName: "firstTime", V: "leaderboard", tags: {
      W: ["koma2Neutral"], zd: ["LEADERBOARD_FIRST",
        ! 0]
    }, text: "Join a team to see the Leaderboard!"
  }], [{U: [], nodeName: "leaderboard", V: "leaderboard", tags: {}, text: "Leaderboard coming soon!"}], [{
    U: [],
    nodeName: "archery",
    V: "luckystatue",
    tags: {},
    text: "'Grand Champion of Archery: Lucky the Cat'"
  }], [{
    U: [],
    nodeName: "climb",
    V: "luckystatue",
    tags: {},
    text: "'Grand Champion of Climbing: Lucky the Cat'"
  }], [{
    U: [],
    nodeName: "marathon",
    V: "luckystatue",
    tags: {},
    text: "'Grand Champion of Marathon: Lucky the Cat'"
  }], [{
    U: [],
    nodeName: "pingpong",
    V: "luckystatue",
    tags: {},
    text: "'Grand Champion of Table Tennis: Lucky the Cat'"
  }],
  [{U: [], nodeName: "rugby", V: "luckystatue", tags: {}, text: "'Grand Champion of Rugby: Lucky the Cat'"}], [{
    U: [],
    nodeName: "skate",
    V: "luckystatue",
    tags: {},
    text: "'Grand Champion of Skateboarding: Lucky the Cat'"
  }], [{
    U: [],
    nodeName: "swim",
    V: "luckystatue",
    tags: {},
    text: "'Grand Champion of Synchronized Swimming: Lucky the Cat'"
  }], [{
    U: [],
    nodeName: "hotSpring1",
    V: "monkey",
    tags: {W: ["littleMonkeyNeutral"]},
    text: "My doctor says the natural hot springs of Champion Island are the perfect remedy for my aching bones..."
  }],
  [{
    U: [{next: "cantRemember", text: null}],
    nodeName: "hotSpring2",
    V: "monkey",
    tags: {W: ["littleMonkeyNeutral"]},
    text: "I was passing through and decided to take a quick dip..."
  }, {
    U: [],
    nodeName: "cantRemember",
    V: "monkey",
    tags: {W: ["littleMonkeyNeutral"]},
    text: "I can't remember where I was supposed to be going."
  }], [{
    U: [],
    nodeName: "hotSpring3",
    V: "monkey",
    tags: {W: ["littleMonkeyNeutral"]},
    text: "A new Champion already? Goodness, time flies when you're soaking in a hot bath..."
  }], [{
    U: [{next: "tooComfy", text: null}],
    nodeName: "hotSpring4",
    V: "monkey",
    tags: {W: ["littleMonkeyNeutral"]},
    text: "I thought I heard a big explosion just now..."
  }, {
    U: [],
    nodeName: "tooComfy",
    V: "monkey",
    tags: {W: ["littleMonkeyNeutral"]},
    text: "...I was too comfortable to go check, though."
  }], [{
    U: [],
    nodeName: "blueOniChampion",
    V: "oni",
    tags: {W: ["blueOniNeutral"]},
    text: "You really think you can defeat us? Hahaha."
  }], [{
    U: [{next: "rematch", text: null}],
    nodeName: "blueOniChampionBeaten",
    V: "oni",
    tags: {W: ["blueOniNeutral"]},
    text: "Momotaro won? This can't be!!"
  },
    {U: [], nodeName: "rematch", V: "oni", tags: {W: ["blueOniNeutral"]}, text: "We demand a rematch!!"}], [{
    U: [],
    nodeName: "redOniChampion",
    V: "oni",
    tags: {W: ["redOniNeutral"]},
    text: "Momotaro and his friends are no match for the Oni! Look how big we are!!"
  }], [{
    U: [],
    nodeName: "redOniChampionBeaten",
    V: "oni",
    tags: {W: ["redOniNeutral"]},
    text: "Oni...lost?? How can this be? We are so much bigger than you!"
  }], [{
    U: [{next: "activehurry", text: null}],
    nodeName: "active",
    V: "questArrows",
    tags: {W: ["arrowCollectorNeutral"]},
    text: "Find me 5 Blue Arrows and then bring them back here!"
  },
    {
      U: [],
      nodeName: "activehurry",
      V: "questArrows",
      tags: {W: ["arrowCollectorNeutral"]},
      text: "And be quick about it! The sun is starting to set!"
    }], [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questArrows",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  }, {
    U: [],
    nodeName: "trophyHint",
    V: "questArrows",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Search the North West Docks for five blue arrows! And you better hurry, sunset is approaching, hee hee."
  }],
  [{
    U: [],
    nodeName: "bluearrow1",
    V: "questArrows",
    tags: {W: ["luckyNeutral"], zd: ["ARROWS", "blue1"]},
    text: "A blue arrow! That's one, four to go."
  }], [{
    U: [],
    nodeName: "bluearrow2",
    V: "questArrows",
    tags: {W: ["luckyNeutral"], zd: ["ARROWS", "blue2"]},
    text: "Another blue arrow! Two down, three to go."
  }], [{
    U: [],
    nodeName: "bluearrow3",
    V: "questArrows",
    tags: {W: ["luckyNeutral"], zd: ["ARROWS", "blue3"]},
    text: "Another blue arrow! Three down, two to go."
  }], [{
    U: [], nodeName: "bluearrow4", V: "questArrows", tags: {
      W: ["luckyNeutral"], zd: ["ARROWS",
        "blue4"]
    }, text: "Another blue arrow! That's four, I just need one more!"
  }], [{
    U: [{next: "bettertake", text: null}],
    nodeName: "bluearrow5",
    V: "questArrows",
    tags: {W: ["luckyNeutral"]},
    text: "At last! Five blue arrows!"
  }, {
    U: [],
    nodeName: "bettertake",
    V: "questArrows",
    tags: {W: ["luckyNeutral"], zd: ["ARROWS", "found"]},
    text: "Better take them all back to that arrow collector, he seemed to really want them."
  }], [{
    U: [],
    nodeName: "complete",
    V: "questArrows",
    tags: {W: ["arrowCollectorNeutral"]},
    text: "Thank you for your service, Lucky. Yoichi will be an even stronger champion now!"
  }],
  [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questArrows",
    tags: {W: ["luckyNeutral"]},
    text: '"Royal Arrow Collector Intern"'
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questArrows",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [{next: "yoichiProud", text: null}],
    nodeName: "found",
    V: "questArrows",
    tags: {W: ["arrowCollectorNeutral"]},
    text: "Oh! Five blue arrows, and so fast!"
  }, {
    U: [{next: "dotdotdot", text: null}], nodeName: "yoichiProud", V: "questArrows",
    tags: {W: ["arrowCollectorNeutral"]}, text: "Yoichi will be so proud of me!"
  }, {
    U: [{next: "imeanus", text: null}],
    nodeName: "dotdotdot",
    V: "questArrows",
    tags: {W: ["luckyAnnoyed"]},
    text: "..."
  }, {
    U: [{next: "thankyouservice", text: null}],
    nodeName: "imeanus",
    V: "questArrows",
    tags: {W: ["arrowCollectorNeutral"]},
    text: "Us! I mean us, of course!"
  }, {
    U: [],
    nodeName: "thankyouservice",
    V: "questArrows",
    tags: {W: ["arrowCollectorNeutral"], zd: ["ARROWS", "complete"]},
    text: "Thank you for your service, Lucky. Yoichi will be an even stronger champion now!"
  }],
  [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questArrows",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "lastHint",
    V: "questArrows",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've found all five blue arrows, just take them back to the Royal Arrow Collector to collect your reward, hee hee."
  }], [{
    U: [{next: "whatWrong", text: null}],
    nodeName: "inactive",
    V: "questArrows",
    tags: {W: ["arrowCollectorNeutral"]},
    text: "Arrows... arrows everywhere..."
  }, {
    U: [{
      next: "lookAround",
      text: null
    }], nodeName: "whatWrong", V: "questArrows", tags: {W: ["luckyNeutral"]}, text: "Are you ok?"
  }, {
    U: [{next: "cleanUp", text: null}],
    nodeName: "lookAround",
    V: "questArrows",
    tags: {W: ["arrowCollectorNeutral"]},
    text: "Of course not!!  Look around, there are arrows everywhere! What a mess!"
  }, {
    U: [{next: "noTime", text: null}],
    nodeName: "cleanUp",
    V: "questArrows",
    tags: {W: ["arrowCollectorNeutral"]},
    text: "I am the Royal Arrow Collector. Yoichi trusts me to collect all the arrows and bring them to him for target practice..."
  },
    {
      U: [{next: "help", text: "Help"}, {next: "sorry", text: "Sorry"}],
      nodeName: "noTime",
      V: "questArrows",
      tags: {W: ["arrowCollectorNeutral"]},
      text: "But there are too many! I'll never get them all in time!"
    }, {
      U: [{next: "you", text: null}],
      nodeName: "help",
      V: "questArrows",
      tags: {W: ["luckyNeutral"]},
      text: "I can help you collect them!"
    }, {
      U: [{next: "iHavent", text: null}],
      nodeName: "you",
      V: "questArrows",
      tags: {W: ["arrowCollectorNeutral"]},
      text: "You?  You look like you've never picked up an arrow in your life..."
    }, {
      U: [{
        next: "veryWell",
        text: null
      }],
      nodeName: "iHavent",
      V: "questArrows",
      tags: {W: ["luckyAnnoyed"]},
      text: "Well thats probably because I haven't. But I'm willing to learn."
    }, {
      U: [{next: "hurryUp", text: null}],
      nodeName: "veryWell",
      V: "questArrows",
      tags: {W: ["arrowCollectorNeutral"]},
      text: "Very well, I suppose I've no choice.  Find me 5 Blue Arrows and then bring them back here!"
    }, {
      U: [],
      nodeName: "hurryUp",
      V: "questArrows",
      tags: {W: ["arrowCollectorNeutral"], zd: ["ARROWS", "active"]},
      text: "And be quick about it! The sun is starting to set!"
    },
    {
      U: [{next: "noIdea", text: null}],
      nodeName: "sorry",
      V: "questArrows",
      tags: {W: ["luckyWorried"]},
      text: "Sorry, that sounds like quite the problem"
    }, {
      U: [],
      nodeName: "noIdea",
      V: "questArrows",
      tags: {W: ["arrowCollectorNeutral"]},
      text: "You've no idea...how can I do it all alone..."
    }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questArrows",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questArrows",
    tags: {W: ["trophyMasterNeutral"]},
    text: "The Royal Arrow Collector in the North West Docks is running behind schedule. Maybe a swift little cat can help, hee hee."
  }, {
    U: [],
    nodeName: "IllBeWatching",
    V: "questArrows",
    tags: {W: ["trophyMasterNeutral"]},
    text: "And I'll be watching to see when the task is resolved. Hee hee hee."
  }], [{
    U: [{next: "LetUsDown", text: null}],
    nodeName: "active",
    V: "questBirthdayHero",
    tags: {W: ["birthdayKidSad"]},
    text: "There's still no Super Mountain Girl..."
  }, {
    U: [], nodeName: "LetUsDown", V: "questBirthdayHero",
    tags: {W: ["birthdayMomNeutral"]}, text: "Don't worry dear, the Champion won't let us down..."
  }], [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questBirthdayHero",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  }, {
    U: [],
    nodeName: "trophyHint",
    V: "questBirthdayHero",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Super Mountain Girl was last seen in the mountains, investigating trees...how odd. Hee hee."
  }], [{
    U: [{next: "YouWereRight", text: null}], nodeName: "complete",
    V: "questBirthdayHero", tags: {W: ["birthdayKidHappy"]}, text: "Wow!! Super Mountain Girl! You're the best!!"
  }, {
    U: [],
    nodeName: "YouWereRight",
    V: "questBirthdayHero",
    tags: {W: ["superMountainGirlNeutral"]},
    text: "I couldn't have done it without you Lucky, you really ARE the Champion!"
  }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questBirthdayHero",
    tags: {W: ["luckyNeutral"]},
    text: "'Super Mountain Rescue'"
  }, {
    U: [], nodeName: "StillWatching", V: "questBirthdayHero", tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [{next: "check", text: null}],
    nodeName: "foundTrophy",
    V: "questBirthdayHero",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished! Keep going!"
  }, {
    U: [],
    nodeName: "check",
    V: "questBirthdayHero",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Check to see if Super Mountain Girl made it to the party safely!"
  }], [{
    U: [{next: "mom response", text: null}],
    nodeName: "inactive",
    V: "questBirthdayHero",
    tags: {W: ["birthdayKidSad"]},
    text: "Mom! Where is Super Mountain Girl?!"
  },
    {
      U: [{next: "kid whining", text: null}],
      nodeName: "mom response",
      V: "questBirthdayHero",
      tags: {W: ["birthdayMomNeutral"]},
      text: "She'll be here soon, honey..."
    }, {
      U: [{next: "mom to lucky", text: null}],
      nodeName: "kid whining",
      V: "questBirthdayHero",
      tags: {W: ["birthdayKidSad"]},
      text: "I WANT SUPER MOUNTAIN GIRL NOW!"
    }, {
      U: [{next: "yes", text: "Sure!"}, {next: "no", text: "I'm busy, sorry."}],
      nodeName: "mom to lucky",
      V: "questBirthdayHero",
      tags: {W: ["birthdayMomNeutral"]},
      text: "Excuse me! You're the champion right? Could you go look for Super Mountain Girl? She was supposed to perform at my son's birthday party an hour ago..."
    },
    {
      U: [],
      nodeName: "yes",
      V: "questBirthdayHero",
      tags: {W: ["birthdayMomNeutral"], zd: ["BIRTHDAY", "active"]},
      text: "Oh thank you!! She has a purple and gold uniform."
    }, {
      U: [],
      nodeName: "no",
      V: "questBirthdayHero",
      tags: {W: ["birthdayMomNeutral"]},
      text: "I guess we'll just have to make do without her... don't worry sweetie..."
    }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questBirthdayHero",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questBirthdayHero",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw plans for a big Birthday Party in the northern Mountains, but something is wrong..."
  }, {
    U: [],
    nodeName: "IllBeWatching",
    V: "questBirthdayHero",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I'll be watching to see when the task is resolved. Hee hee hee."
  }], [{
    U: [{next: "SMG response", text: null}],
    nodeName: "superMountainGirl",
    V: "questBirthdayHero",
    tags: {W: ["luckyCurious"]},
    text: "Excuse me, are you Super Mountain Girl?"
  },
    {
      U: [{next: "LuckyResponse", text: null}],
      nodeName: "SMG response",
      V: "questBirthdayHero",
      tags: {W: ["superMountainGirlNeutral"]},
      text: "Um... no."
    }, {
      U: [{next: "SMG confesses", text: null}],
      nodeName: "LuckyResponse",
      V: "questBirthdayHero",
      tags: {W: ["luckyAnnoyed"]},
      text: "Really?"
    }, {
      U: [{next: "SMG continues", text: null}],
      nodeName: "SMG confesses",
      V: "questBirthdayHero",
      tags: {W: ["superMountainGirlNeutral"]},
      text: "Please don't make me go to the party! I'm just a babysitter."
    }, {
      U: [{next: "SMG happy", text: null}],
      nodeName: "lucky reassures",
      V: "questBirthdayHero",
      tags: {W: ["luckyHappy"]},
      text: "Being a hero doesn't mean you're not afraid... It means you'll show up even if you're scared!"
    }, {
      U: [{next: "SMG heads out", text: null}],
      nodeName: "SMG happy",
      V: "questBirthdayHero",
      tags: {W: ["superMountainGirlNeutral"]},
      text: "You know what... you're right. Seems like Super Mountain Girl has a thing or two to learn from you."
    }, {
      U: [{next: "lucky reassures", text: null}],
      nodeName: "SMG continues",
      V: "questBirthdayHero",
      tags: {W: ["superMountainGirlNeutral"]},
      text: "I'm not a real hero. The kids are going to hate me."
    },
    {
      U: [],
      nodeName: "SMG heads out",
      V: "questBirthdayHero",
      tags: {W: ["superMountainGirlNeutral"], zd: ["BIRTHDAY", "complete"]},
      text: "Thank you. I'll head over now!"
    }], [{
    U: [{next: "firstHint", text: null}],
    nodeName: "active",
    V: "questBoatCastle",
    tags: {W: [""]},
    text: "XXX"
  }, {U: [], nodeName: "firstHint", V: "questBoatCastle", tags: {W: [""]}, text: "XXX"}], [{
    U: [{
      next: "trophyHint",
      text: null
    }],
    nodeName: "activeTrophy",
    V: "questBoatCastle",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  },
    {U: [], nodeName: "trophyHint", V: "questBoatCastle", tags: {W: ["trophyMasterNeutral"]}, text: "XXX"}], [{
    U: [],
    nodeName: "complete",
    V: "questBoatCastle",
    tags: {W: [""]},
    text: "XXX"
  }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questBoatCastle",
    tags: {W: ["luckyNeutral"]},
    text: '"TROPHYNAME"'
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questBoatCastle",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [{next: "thanks", text: null}], nodeName: "found", V: "questBoatCastle",
    tags: {W: [""]}, text: "XXX"
  }, {
    U: [],
    nodeName: "thanks",
    V: "questBoatCastle",
    tags: {W: [""], zd: ["NAME", "complete"]},
    text: "XXX"
  }], [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questBoatCastle",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "lastHint",
    V: "questBoatCastle",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Finish up and come back to see your reward, see hee."
  }], [{
    U: [{next: "yes", text: "Sure!"}, {next: "no", text: "No."}], nodeName: "inactive", V: "questBoatCastle",
    tags: {W: [""]}, text: "XXX"
  }, {
    U: [],
    nodeName: "yes",
    V: "questBoatCastle",
    tags: {W: [""], zd: ["NAME", "active"]},
    text: "XXX"
  }, {
    U: [{next: "changeMind", text: null}],
    nodeName: "no",
    V: "questBoatCastle",
    tags: {W: [""]},
    text: "XXX"
  }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questBoatCastle",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questBoatCastle",
    tags: {W: ["trophyMasterNeutral"]},
    text: "There's someone on the island who needs the Champion's help. YOUR help."
  },
    {
      U: [],
      nodeName: "IllBeWatching",
      V: "questBoatCastle",
      tags: {W: ["trophyMasterNeutral"]},
      text: "And I'll be watching to see when the task is resolved. Hee hee hee."
    }], [{
    U: [],
    nodeName: "active",
    V: "questChase",
    tags: {W: ["kijiDadNeutral"]},
    text: "Any luck? Shouldn't have given her that candy this morning..."
  }], [{
    U: [{next: "escapes lucky", text: null}],
    nodeName: "activeKid1",
    V: "questChase",
    tags: {W: ["kijiKidNeutral"]},
    text: "You found me! Okay, ready set go!!"
  }, {
    U: [], nodeName: "escapes lucky", V: "questChase", tags: {
      W: ["luckyNeutral"],
      zd: ["CHASE", "active2"]
    }, text: "Hey! Get back here!"
  }], [{
    U: [{next: "escapes again", text: null}],
    nodeName: "activeKid2",
    V: "questChase",
    tags: {W: ["kijiKidNeutral"]},
    text: "You lost! Okay let's race again!"
  }, {
    U: [],
    nodeName: "escapes again",
    V: "questChase",
    tags: {W: ["luckyNeutral"], zd: ["CHASE", "active3"]},
    text: "So close that time..."
  }], [{
    U: [{next: "kid agrees", text: null}],
    nodeName: "activeKid3",
    V: "questChase",
    tags: {W: ["luckyNeutral"]},
    text: "Okay kid, let's get you back to your dad now..."
  }, {
    U: [], nodeName: "kid agrees",
    V: "questChase", tags: {W: ["kijiKidNeutral"], zd: ["CHASE", "found"]}, text: "Okay! I'll meet you there! Bye!"
  }], [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questChase",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  }, {
    U: [],
    nodeName: "trophyHint",
    V: "questChase",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Find that speed Kijimura child running around on Marathon Beach!"
  }], [{
    U: [], nodeName: "complete", V: "questChase", tags: {W: ["kijiDadNeutral"]},
    text: "Heh... She's a bit of a handful, but she sure is fast..."
  }], [{
    U: [],
    nodeName: "completeKid",
    V: "questChase",
    tags: {W: ["kijiKidNeutral"]},
    text: "I'm going to be the Grand Champion of Marathon when I grow up!"
  }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questChase",
    tags: {W: ["luckyNeutral"]},
    text: '"Marathon Babysitter"'
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questChase",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [],
    nodeName: "found",
    V: "questChase",
    tags: {W: ["kijiDadNeutral"], zd: ["CHASE", "complete"]},
    text: "Thanks for your help, I can't believe you actually caught her!"
  }], [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questChase",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "lastHint",
    V: "questChase",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Make sure father and daughter Kijimura are reunited after your long chase!"
  }], [{
    U: [{next: "kijikid", text: null}],
    nodeName: "inactive",
    V: "questChase",
    tags: {W: ["kijiDadNeutral"]},
    text: "*huff* ... *wheeze* ... All right, how about a new game where we just stay in one place...?"
  }, {
    U: [{next: "ohnonnot", text: null}],
    nodeName: "kijikid",
    V: "questChase",
    tags: {W: ["kijiKidNeutral"]},
    text: "Heeheehee! That's boring! Try and catch me Papa!"
  }, {
    U: [{next: "tolucky", text: null}],
    nodeName: "ohnonnot",
    V: "questChase",
    tags: {W: ["kijiDadNeutral"]},
    text: "*huff* Oh no... not again..."
  }, {
    U: [{next: "tolucky2", text: null}], nodeName: "tolucky", V: "questChase", tags: {W: ["kijiDadNeutral"]},
    text: "Darned kid... can't keep up..."
  }, {
    U: [{next: "yes", text: "Sure!"}, {next: "no", text: "Sorry..."}],
    nodeName: "tolucky2",
    V: "questChase",
    tags: {W: ["kijiDadNeutral"]},
    text: "You there... can you go see where she went?"
  }, {
    U: [],
    nodeName: "yes",
    V: "questChase",
    tags: {W: ["kijiDadNeutral"], zd: ["CHASE", "active"]},
    text: "You're a lifesaver... Let me just sit down a second..."
  }, {
    U: [],
    nodeName: "no",
    V: "questChase",
    tags: {W: ["kijiDadNeutral"]},
    text: "Fair enough... I'll go look when I catch my breath..."
  }], [{
    U: [{
      next: "questDescription",
      text: null
    }],
    nodeName: "inactiveTrophy",
    V: "questChase",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questChase",
    tags: {W: ["trophyMasterNeutral"]},
    text: "One of the Kijimura on Marathon Beach seems to be having a hard time keeping up with his daughter..."
  }, {
    U: [],
    nodeName: "IllBeWatching",
    V: "questChase",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I'll be watching to see when the task is resolved. Hee hee hee."
  }], [{
    U: [],
    nodeName: "active",
    V: "questCoach",
    tags: {W: ["coachNeutral"]},
    text: "Daichi ususally hangs out in the Noodle Bar to the West, always eating and making excuses..."
  }], [{
    U: [{next: "areYouTaro", text: null}],
    nodeName: "activeTrainee",
    V: "questCoach",
    tags: {W: ["traineeNoodle"]},
    text: "Yum yum yum."
  }, {
    U: [{next: "whoWantsTo", text: null}],
    nodeName: "areYouTaro",
    V: "questCoach",
    tags: {W: ["luckyNeutral"]},
    text: "Hey, are you Daichi?"
  }, {
    U: [{next: "SupposedToBe", text: null}], nodeName: "whoWantsTo", V: "questCoach", tags: {W: ["traineeNoodle"]},
    text: "...who wants to know?"
  }, {
    U: [{next: "CoachSent", text: null}],
    nodeName: "SupposedToBe",
    V: "questCoach",
    tags: {W: ["luckyNeutral"]},
    text: "You're supposed to be at your workout!"
  }, {
    U: [{next: "StopEat", text: null}],
    nodeName: "CoachSent",
    V: "questCoach",
    tags: {W: ["traineeNoodle"]},
    text: "Oh no, did Coach send you? She is relentless..."
  }, {
    U: [{next: "NotLikeThat", text: null}],
    nodeName: "StopEat",
    V: "questCoach",
    tags: {W: ["luckyAnnoyed"]},
    text: "She's waiting for you while you sit here and relax!"
  }, {
    U: [{
      next: "ForgotShoes",
      text: null
    }],
    nodeName: "NotLikeThat",
    V: "questCoach",
    tags: {W: ["traineeNoodle"]},
    text: "Hey, it's not like that! I'd LOVE to go work out, but I....uh..."
  }, {
    U: [{next: "WhereShoes", text: null}],
    nodeName: "ForgotShoes",
    V: "questCoach",
    tags: {W: ["traineeNoodle"]},
    text: "I forgot my running shoes!  Can't work out without proper shoes!"
  }, {
    U: [{next: "MarathonBeach", text: null}],
    nodeName: "WhereShoes",
    V: "questCoach",
    tags: {W: ["luckyShocked"]},
    text: "Oh no! Where did you leave them?"
  }, {
    U: [{next: "SeeAbout", text: null}],
    nodeName: "MarathonBeach",
    V: "questCoach",
    tags: {W: ["traineeNoodle"]},
    text: "Unm...all the way over in Marathon Beach! Way too far for anyone to go get them."
  }, {
    U: [{next: "cantTakeHint", text: null}],
    nodeName: "SeeAbout",
    V: "questCoach",
    tags: {W: ["luckyHappy"]},
    text: "We'll see about that!  Wait here, I'll find them!"
  }, {
    U: [{next: "ohGreat", text: null}],
    nodeName: "cantTakeHint",
    V: "questCoach",
    tags: {W: ["traineeNoodle"]},
    text: "Oh, great!"
  }, {
    U: [],
    nodeName: "ohGreat",
    V: "questCoach",
    tags: {W: ["traineeNoodle"], zd: ["COACH", "shoes"]},
    text: "(Oh, great...)"
  }],
  [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questCoach",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  }, {
    U: [],
    nodeName: "trophyHint",
    V: "questCoach",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Tanooki Gym's Coach is missing her trainee Daichi! Help find him in the Noodle Shop before he misses his workout."
  }], [{
    U: [{next: "sniff", text: null}],
    nodeName: "complete",
    V: "questCoach",
    tags: {W: ["coachNeutral"]},
    text: "I don't know what you said, but I've never seen Daichi work so hard!"
  },
    {
      U: [],
      nodeName: "sniff",
      V: "questCoach",
      tags: {W: ["coachNeutral"]},
      text: "It's moments like these that make coaching worth it. *sniff*"
    }], [{
    U: [{next: "goodworkthere", text: null}],
    nodeName: "completeTrainee",
    V: "questCoach",
    tags: {W: ["traineeRun"]},
    text: "*huff huff*  ONE TWO! ONE TWO! *huff huff*"
  }, {
    U: [{next: "tthankscoach", text: null}],
    nodeName: "goodworkthere",
    V: "questCoach",
    tags: {W: ["coachNeutral"]},
    text: "Good work there, Daichi, nice hustle!"
  }, {
    U: [], nodeName: "tthankscoach", V: "questCoach", tags: {W: ["traineeRun"]},
    text: "*huff huff*  T-Thanks Coach! *huff huff*"
  }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questCoach",
    tags: {W: ["luckyNeutral"]},
    text: '"Gym Motivater"'
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questCoach",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questCoach",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "lastHint",
    V: "questCoach",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Daichi seems a little unwilling to return to the gym, see if you can help convince him to work out again!"
  }], [{
    U: [],
    nodeName: "hareComplete",
    V: "questCoach",
    tags: {W: ["hareNeutral"]},
    text: "Finally that cat left, I can enjoy my noodles in peace."
  }], [{
    U: [],
    nodeName: "hareIncomplete",
    V: "questCoach",
    tags: {W: ["hareNeutral"]},
    text: "That cat is always in here eating noodles..."
  }], [{
    U: [{next: "nowWhere", text: null}], nodeName: "inactive", V: "questCoach", tags: {W: ["coachNeutral"]},
    text: "Good Work everyone!  Good effort!"
  }, {
    U: [{next: "WhoLooking", text: null}],
    nodeName: "nowWhere",
    V: "questCoach",
    tags: {W: ["coachNeutral"]},
    text: "Now where did Daichi go..."
  }, {
    U: [{next: "soLazy", text: null}],
    nodeName: "WhoLooking",
    V: "questCoach",
    tags: {W: ["luckyNeutral"]},
    text: "Who are you looking for?"
  }, {
    U: [{next: "soLazy1", text: null}],
    nodeName: "soLazy",
    V: "questCoach",
    tags: {W: ["coachNeutral"]},
    text: "Oh, my new trainee didn't show up for his workout!"
  }, {
    U: [{next: "lookBut", text: null}],
    nodeName: "soLazy1",
    V: "questCoach",
    tags: {W: ["coachNeutral"]},
    text: "He's so lazy, always looking to get out of our workout sessions. How can he expect results??"
  }, {
    U: [{next: "help", text: "Help"}, {next: "sorry", text: "Sorry"}],
    nodeName: "lookBut",
    V: "questCoach",
    tags: {W: ["coachNeutral"]},
    text: "I'd go look for him, but I've got other trainees to help!"
  }, {
    U: [{next: "getUpAndGo", text: null}],
    nodeName: "help",
    V: "questCoach",
    tags: {W: ["luckyNeutral"]},
    text: "Training is important! I can go help find him!"
  }, {
    U: [],
    nodeName: "getUpAndGo",
    V: "questCoach",
    tags: {W: ["coachNeutral"], zd: ["COACH", "active"]},
    text: "Now THAT'S the attitude of a winner!  Daichi ususally hangs out in the Noodle Bar to the East."
  }, {
    U: [{next: "whoCanHelp", text: null}],
    nodeName: "sorry",
    V: "questCoach",
    tags: {W: ["luckyWorried"]},
    text: "Sorry, wish I could help..."
  }, {
    U: [],
    nodeName: "whoCanHelp",
    V: "questCoach",
    tags: {W: ["coachNeutral"]},
    text: "If only someone had the time to go look for him..."
  }], [{
    U: [], nodeName: "inactiveConvini", V: "questCoach", tags: {W: ["conviniNeutral"]},
    text: "Welcome! Let me know if you need anything."
  }], [{
    U: [{next: "stopDistracting", text: null}],
    nodeName: "inactiveTrainee",
    V: "questCoach",
    tags: {W: ["traineeNoodle"]},
    text: "Yum yum yum"
  }, {
    U: [{next: "soSorry", text: null}],
    nodeName: "stopDistracting",
    V: "questCoach",
    tags: {W: ["traineeNoodle"]},
    text: "Noodles are great! So much better than going to the gym."
  }, {
    U: [],
    nodeName: "soSorry",
    V: "questCoach",
    tags: {W: ["traineeNoodle"]},
    text: "...but don't tell Coach I said that."
  }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy", V: "questCoach", tags: {W: ["trophyMasterNeutral"]}, text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questCoach",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Tanooki Gym's Coach seems to be missing one of her trainees..."
  }, {
    U: [],
    nodeName: "IllBeWatching",
    V: "questCoach",
    tags: {W: ["trophyMasterNeutral"]},
    text: "And I'll be watching to see when the task is resolved. Hee hee hee."
  }], [{
    U: [{next: "takeBackShoes", text: null}], nodeName: "shoes",
    V: "questCoach", tags: {W: ["luckyNeutral"]}, text: "These must be Taro's shoes! Wow, they look brand new!"
  }, {
    U: [],
    nodeName: "takeBackShoes",
    V: "questCoach",
    tags: {W: ["luckyNeutral"], zd: ["COACH", "shoesFound"]},
    text: "I better take them back to him in the noodle shop!"
  }], [{
    U: [{next: "greatnewsshoes", text: null}],
    nodeName: "shoesFoundTrainee",
    V: "questCoach",
    tags: {W: ["traineeNoodle"]},
    text: "Yum yum yum."
  }, {
    U: [{next: "ohhowgreat", text: null}],
    nodeName: "greatnewsshoes",
    V: "questCoach",
    tags: {W: ["luckyNeutral"]},
    text: "Great news Daichi! I found your shoes!"
  },
    {
      U: [{next: "nowtrain", text: null}],
      nodeName: "ohhowgreat",
      V: "questCoach",
      tags: {W: ["traineeNoodle"]},
      text: "...oh. That's great news..."
    }, {
      U: [{next: "wishicouldbut", text: null}],
      nodeName: "nowtrain",
      V: "questCoach",
      tags: {W: ["luckyNeutral"]},
      text: "Now you can go train at the gym!"
    }, {
      U: [{next: "butwhat", text: null}],
      nodeName: "wishicouldbut",
      V: "questCoach",
      tags: {W: ["traineeNoodle"]},
      text: "Well, I wish I could but..."
    }, {
      U: [{next: "waterbottle", text: null}], nodeName: "butwhat", V: "questCoach", tags: {W: ["luckyNeutral"]},
      text: "But what?"
    }, {
      U: [{next: "stayHydrated", text: null}],
      nodeName: "waterbottle",
      V: "questCoach",
      tags: {W: ["traineeNoodle"]},
      text: "I don't have a water bottle! I can't work out without one."
    }, {
      U: [{next: "stayHere", text: null}],
      nodeName: "stayHydrated",
      V: "questCoach",
      tags: {W: ["luckyWorried"]},
      text: "That's true...it's very important to stay hydrated...."
    }, {
      U: [{next: "findWater", text: null}],
      nodeName: "stayHere",
      V: "questCoach",
      tags: {W: ["traineeNoodle"]},
      text: "I had better stay here hydrating myself with more noodles!"
    },
    {
      U: [{next: "closeby", text: null}],
      nodeName: "findWater",
      V: "questCoach",
      tags: {W: ["luckyNeutral"]},
      text: "I'm sure I can find a water bottle for you! I'll go check at the convenience store!"
    }, {
      U: [{next: "justcantTakeHint", text: null}],
      nodeName: "closeby",
      V: "questCoach",
      tags: {W: ["traineeNoodle"]},
      text: "...oh good.  There's one just south of here."
    }, {
      U: [],
      nodeName: "justcantTakeHint",
      V: "questCoach",
      tags: {W: ["traineeNoodle"], zd: ["COACH", "water"]},
      text: "(This cat just can't take a hint...)"
    }], [{
    U: [{
      next: "leftshoeswhat",
      text: null
    }], nodeName: "shoesTrainee", V: "questCoach", tags: {W: ["traineeNoodle"]}, text: "Yum yum yum."
  }, {
    U: [{next: "swmb", text: null}],
    nodeName: "leftshoeswhat",
    V: "questCoach",
    tags: {W: ["luckyNeutral"]},
    text: "Hey, where did you say you left your shoes?"
  }, {
    U: [],
    nodeName: "swmb",
    V: "questCoach",
    tags: {W: ["traineeNoodle"]},
    text: "...oh, on Marathon Beach in the South West. Probably too far to try and find..."
  }], [{
    U: [{next: "needWater", text: null}], nodeName: "waterConvini", V: "questCoach", tags: {W: ["conviniNeutral"]},
    text: "Welcome! How can I help you?"
  }, {
    U: [{next: "ohyes", text: null}],
    nodeName: "needWater",
    V: "questCoach",
    tags: {W: ["luckyCurious"]},
    text: "Hello, I'm looking for a water bottle..."
  }, {
    U: [{next: "noMoney", text: null}],
    nodeName: "ohyes",
    V: "questCoach",
    tags: {W: ["conviniNeutral"]},
    text: "Oh PERFECT!"
  }, {
    U: [{next: "ohno", text: null}],
    nodeName: "noMoney",
    V: "questCoach",
    tags: {W: ["luckyCurious"]},
    text: "Perfect?"
  }, {
    U: [{next: "takeasmany", text: null}],
    nodeName: "ohno",
    V: "questCoach",
    tags: {W: ["conviniNeutral"]},
    text: "We had a bunch of extra water bottles delivered and now we have way too many."
  },
    {
      U: [{next: "justone", text: null}],
      nodeName: "takeasmany",
      V: "questCoach",
      tags: {W: ["conviniNeutral"]},
      text: "Take as many as you want!"
    }, {
      U: [{next: "takemore", text: null}],
      nodeName: "justone",
      V: "questCoach",
      tags: {W: ["luckyNeutral"]},
      text: "Thanks but I just need one."
    }, {
      U: [{next: "ahook", text: null}],
      nodeName: "takemore",
      V: "questCoach",
      tags: {W: ["conviniNeutral"]},
      text: "No please take more!  10 at least!"
    }, {
      U: [{next: "comeback", text: null}],
      nodeName: "ahook",
      V: "questCoach",
      tags: {W: ["luckyNeutral"]},
      text: "Ah, um...ok! Happy to help."
    },
    {
      U: [],
      nodeName: "comeback",
      V: "questCoach",
      tags: {W: ["conviniNeutral"], zd: ["COACH", "waterFound"]},
      text: "Oh thank you! And come back if you ever need more!"
    }], [{
    U: [{next: "greatnewswater", text: null}],
    nodeName: "waterFoundTrainee",
    V: "questCoach",
    tags: {W: ["traineeNoodle"]},
    text: "Yum yum yum."
  }, {
    U: [{next: "somuchwater", text: null}],
    nodeName: "greatnewswater",
    V: "questCoach",
    tags: {W: ["luckyNeutral"]},
    text: "Great news Daichi! I got you LOTS of water! You'll be hydrated for weeks!"
  }, {
    U: [{next: "nowtrainWater", text: null}],
    nodeName: "somuchwater", V: "questCoach", tags: {W: ["traineeNoodle"]}, text: "...oh. That's great news..."
  }, {
    U: [{next: "wishicouldbutWater", text: null}],
    nodeName: "nowtrainWater",
    V: "questCoach",
    tags: {W: ["luckyNeutral"]},
    text: "Now you can go train at the gym!"
  }, {
    U: [{next: "butwhatWater", text: null}],
    nodeName: "wishicouldbutWater",
    V: "questCoach",
    tags: {W: ["traineeNoodle"]},
    text: "Well, I wish I could but..."
  }, {
    U: [{next: "luckybandana", text: null}],
    nodeName: "butwhatWater",
    V: "questCoach",
    tags: {W: ["luckyAnnoyed"]},
    text: "But what?"
  },
    {
      U: [{next: "wherebandana", text: null}],
      nodeName: "luckybandana",
      V: "questCoach",
      tags: {W: ["traineeNoodle"]},
      text: "I don't have my lucky bandana! How could I work out without luck on my side??"
    }, {
      U: [{next: "waterfire", text: null}],
      nodeName: "wherebandana",
      V: "questCoach",
      tags: {W: ["luckyWorried"]},
      text: "Oh no...where did you lose it?"
    }, {
      U: [{next: "ohmywhat", text: null}],
      nodeName: "waterfire",
      V: "questCoach",
      tags: {W: ["traineeNoodle"]},
      text: "It fell in the ocean, was eaten by a fish, and then the fish exploded."
    },
    {
      U: [{next: "cantfind", text: null}],
      nodeName: "ohmywhat",
      V: "questCoach",
      tags: {W: ["luckyShocked"]},
      text: "Oh my!"
    }, {
      U: [{next: "hmmmmmm1", text: null}],
      nodeName: "cantfind",
      V: "questCoach",
      tags: {W: ["traineeNoodle"]},
      text: "Yes it's sadly lost forever. DON'T LOOK FOR IT."
    }, {
      U: [{next: "giveup", text: "Give Up"}, {next: "givebandana", text: "Give Bandana"}],
      nodeName: "hmmmmmm1",
      V: "questCoach",
      tags: {W: ["luckyHappy"]},
      text: "Hmmm...."
    }, {
      U: [{next: "nomnomonom", text: null}], nodeName: "giveup", V: "questCoach", tags: {W: ["luckyHappy"]},
      text: "I guess there's nothing to be done..."
    }, {
      U: [],
      nodeName: "nomnomonom",
      V: "questCoach",
      tags: {W: ["traineeNoodle"]},
      text: "That's right! *yum yum yum*"
    }, {
      U: [{next: "xban", text: null}],
      nodeName: "givebandana",
      V: "questCoach",
      tags: {W: ["luckyHappy"]},
      text: "Well I have some good news for you!"
    }, {
      U: [{next: "givetoyou", text: null}],
      nodeName: "xban",
      V: "questCoach",
      tags: {W: ["luckyHappy"]},
      text: "I've got an extra bandana!"
    }, {
      U: [{next: "youddothat", text: null}], nodeName: "givetoyou", V: "questCoach", tags: {W: ["luckyNeutral"]},
      text: "I always keep it for good luck, but I'd be happy to give it to you!"
    }, {
      U: [{next: "ofcourseiwould", text: null}],
      nodeName: "youddothat",
      V: "questCoach",
      tags: {W: ["traineeNoodle"]},
      text: "Oh...you'd really do that? For me?"
    }, {
      U: [{next: "overwhelemed", text: null}],
      nodeName: "ofcourseiwould",
      V: "questCoach",
      tags: {W: ["luckyHappy"]},
      text: "Well of course! Sports aren't just competition, athletes like us have to look out for each other too!"
    }, {
      U: [{next: "greatfuel", text: null}],
      nodeName: "overwhelemed",
      V: "questCoach",
      tags: {W: ["traineeNoodle"]},
      text: "You really see me as an athlete? All I'm doing is avoiding work and eating noodles."
    }, {
      U: [{next: "thankyoulucky", text: null}],
      nodeName: "greatfuel",
      V: "questCoach",
      tags: {W: ["luckyHappy"]},
      text: "Noodles are great fuel for excercise, I see nothing but potential!"
    }, {
      U: [],
      nodeName: "thankyoulucky",
      V: "questCoach",
      tags: {W: ["traineeNoodle"], zd: ["COACH", "complete"]},
      text: "Thank you for beleiving in me Lucky, I'm gonna go to the gym right now!"
    }], [{
    U: [{next: "areYouTarow", text: null}],
    nodeName: "waterTrainee", V: "questCoach", tags: {W: ["traineeNoodle"]}, text: "Yum yum yum."
  }, {
    U: [{next: "probclosed", text: null}],
    nodeName: "areYouTarow",
    V: "questCoach",
    tags: {W: ["luckyNeutral"]},
    text: "Hey, where the nearest convenience store?"
  }, {
    U: [{next: "thankscheck", text: null}],
    nodeName: "probclosed",
    V: "questCoach",
    tags: {W: ["traineeNoodle"]},
    text: "There's one to south, but I think it's um...probably closed..."
  }, {
    U: [{next: "ofcourseyouwill", text: null}], nodeName: "thankscheck", V: "questCoach", tags: {W: ["luckyNeutral"]},
    text: "Thanks! I'll go check"
  }, {
    U: [],
    nodeName: "ofcourseyouwill",
    V: "questCoach",
    tags: {W: ["traineeNoodle"]},
    text: "(Of course you will...)"
  }], [{
    U: [{next: "tightSchedule", text: null}],
    nodeName: "activeFreshWater",
    V: "questConstruction",
    tags: {W: ["luckyNeutral"]},
    text: "Wow, here's some fresh water already in a bottle! How thoughtful!"
  }, {
    U: [],
    nodeName: "tightSchedule",
    V: "questConstruction",
    tags: {W: ["luckyNeutral"], zd: ["CONSTRUCTION", "found"]},
    text: "I better take this back to the construction worker in Tanooki City, he seemed to be on a tight schedule."
  }],
  [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questConstruction",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  }, {
    U: [],
    nodeName: "trophyHint",
    V: "questConstruction",
    tags: {W: ["trophyMasterNeutral"]},
    text: "The construction workers need fresh water from the Mountain Hot Springs in the North."
  }], [{
    U: [],
    nodeName: "activeWorker",
    V: "questConstruction",
    tags: {W: ["ushiNeutral"]},
    text: "The Hot Springs are North in the mountains. It seems so dangerous...be careful!"
  }],
  [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questConstruction",
    tags: {W: ["luckyNeutral"]},
    text: "'Construction Employee of the Year'"
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questConstruction",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [{next: "quiteRelaxing", text: null}],
    nodeName: "completeWorker",
    V: "questConstruction",
    tags: {W: ["ushiNeutral"]},
    text: "I can't believe how brave you were to go to the hot springs."
  }, {
    U: [{
      next: "lurkingDangers",
      text: null
    }],
    nodeName: "quiteRelaxing",
    V: "questConstruction",
    tags: {W: ["luckyNeutral"]},
    text: "Brave? It was really quite relaxing...you should try!"
  }, {
    U: [{next: "eachOwn", text: null}],
    nodeName: "lurkingDangers",
    V: "questConstruction",
    tags: {W: ["ushiNeutral"]},
    text: "L-l-l-leave the city??  Are you crazy?...w-who knows what dangers are l-l-lurking out there!"
  }, {
    U: [],
    nodeName: "eachOwn",
    V: "questConstruction",
    tags: {W: ["luckyNeutral"]},
    text: "Hm...to each their own I guess."
  }], [{
    U: [{next: "returnWater", text: null}],
    nodeName: "foundTrophy",
    V: "questConstruction",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "returnWater",
    V: "questConstruction",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Take the fresh water you found to the construction workers and call it a day, hee hee."
  }], [{
    U: [{next: "difficultFind", text: null}],
    nodeName: "foundWorker",
    V: "questConstruction",
    tags: {W: ["ushiNeutral"]},
    text: "Oh! You brought the fresh water from the spring!"
  }, {
    U: [{next: "clang", text: null}],
    nodeName: "difficultFind",
    V: "questConstruction",
    tags: {W: ["ushiNeutral"]},
    text: "I can't imagine how difficult it was to find, you really might be the Chosen One!"
  }, {
    U: [{next: "openUp", text: null}],
    nodeName: "clang",
    V: "questConstruction",
    tags: {},
    text: "*clang clang clang *"
  }, {
    U: [],
    nodeName: "openUp",
    V: "questConstruction",
    tags: {W: ["ushiNeutral"], zd: ["CONSTRUCTION", "complete"]},
    text: "The construction is finished, right on schedule! Tanooki City can never thank you enough!"
  }], [{
    U: [{next: "questDescription", text: null}], nodeName: "inactiveTrophy",
    V: "questConstruction", tags: {W: ["trophyMasterNeutral"]}, text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questConstruction",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Tanooki City's construction project is falling behind schedule!"
  }, {
    U: [],
    nodeName: "IllBeWatching",
    V: "questConstruction",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Talk to the construction workers to see what's wrong. I'll be watching to see when the task is resolved. Hee hee hee."
  }], [{
    U: [{
      next: "behindSchedule",
      text: null
    }],
    nodeName: "inactiveWorker",
    V: "questConstruction",
    tags: {W: ["ushiNeutral"]},
    text: "Oh dear...so behind schedule..."
  }, {
    U: [{next: "whatConstruction", text: null}],
    nodeName: "behindSchedule",
    V: "questConstruction",
    tags: {W: ["ushiNeutral"]},
    text: "Sorry kid, can't let you in. This part of the city is closed for construction."
  }, {
    U: [{next: "noWater", text: null}],
    nodeName: "whatConstruction",
    V: "questConstruction",
    tags: {W: ["luckyNeutral"]},
    text: "Oh, when will it be open again?"
  }, {
    U: [{next: "freshWater", text: null}],
    nodeName: "noWater",
    V: "questConstruction",
    tags: {W: ["ushiNeutral"]},
    text: "I'm afraid you might be waiting awhile. We've run out of fresh water to mix the cement."
  }, {
    U: [{next: "tooSoft", text: null}],
    nodeName: "freshWater",
    V: "questConstruction",
    tags: {W: ["ushiNeutral"]},
    text: "If only we had fresh water from the hot springs in the mountains..."
  }, {
    U: [{next: "illHelp", text: "I'll Help!"}, {next: "soundsHard", text: "Sorry..."}],
    nodeName: "tooSoft",
    V: "questConstruction",
    tags: {W: ["ushiNeutral"]},
    text: "But urban life has made us too soft! No one from the city would dare climbing the mountains to get it."
  },
    {
      U: [{next: "thankYou", text: null}],
      nodeName: "illHelp",
      V: "questConstruction",
      tags: {W: ["luckyNeutral"]},
      text: "I can find the Hot Springs and bring back the water!"
    }, {
      U: [],
      nodeName: "thankYou",
      V: "questConstruction",
      tags: {W: ["ushiNeutral"], zd: ["CONSTRUCTION", "active"]},
      text: "Oh! Thank you!  We might just finish on schedule after all!"
    }, {
      U: [{next: "neverFinish", text: null}],
      nodeName: "soundsHard",
      V: "questConstruction",
      tags: {W: ["luckyNeutral"]},
      text: "Yikes, that sounds pretty tough."
    }, {
      U: [], nodeName: "neverFinish",
      V: "questConstruction", tags: {W: ["ushiNeutral"]}, text: "We'll never finish at this rate..."
    }], [{
    U: [{next: "hint", text: null}],
    nodeName: "activeArtisan",
    V: "questDriftwood",
    tags: {W: ["kijimunaNeutral"]},
    text: "Let me know when you've found three pieces of wood."
  }, {
    U: [],
    nodeName: "hint",
    V: "questDriftwood",
    tags: {W: ["kijimunaNeutral"]},
    text: "You can find them on the beach when the tide is low."
  }], [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questDriftwood",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  },
    {
      U: [],
      nodeName: "trophyHint",
      V: "questDriftwood",
      tags: {W: ["trophyMasterNeutral"]},
      text: "Find three pieces of driftwood on the Southwest beach for the driftwood artist, hee hee."
    }], [{
    U: [],
    nodeName: "branch1",
    V: "questDriftwood",
    tags: {W: ["luckyNeutral"], zd: ["DRIFTWOOD", "second"]},
    text: "Yay! This is a nice piece of driftwood."
  }], [{
    U: [],
    nodeName: "branch2",
    V: "questDriftwood",
    tags: {W: ["luckyNeutral"], zd: ["DRIFTWOOD", "third"]},
    text: "Two down, one to go!"
  }], [{
    U: [], nodeName: "branch3", V: "questDriftwood", tags: {
      W: ["luckyHappy"],
      zd: ["DRIFTWOOD", "found"]
    }, text: "That's three! I can take these back to the artisan now!"
  }], [{
    U: [],
    nodeName: "completeArtisan",
    V: "questDriftwood",
    tags: {W: ["kijimunaNeutral"]},
    text: "Nothing is more inspiring than our Champion! Thank you Lucky!"
  }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questDriftwood",
    tags: {W: ["luckyNeutral"]},
    text: "'Artist's Apprentice'"
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questDriftwood",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }],
  [{
    U: [{next: "dragon", text: null}],
    nodeName: "foundArtisan",
    V: "questDriftwood",
    tags: {W: ["kijimunaNeutral"]},
    text: "Oh! You found three wonderful pieces!"
  }, {
    U: [{next: "atOnce", text: null}],
    nodeName: "dragon",
    V: "questDriftwood",
    tags: {W: ["kijimunaNeutral"]},
    text: "Hm what's this I'm seeing? A dragon, perhaps... or the curve of a tortoise's shell..."
  }, {
    U: [{next: "clangs", text: null}],
    nodeName: "atOnce",
    V: "questDriftwood",
    tags: {W: ["kijimunaNeutral"]},
    text: "No! I see something even more inspiring! I must work at once!"
  },
    {
      U: [{next: "masterpiece", text: null}],
      nodeName: "clangs",
      V: "questDriftwood",
      tags: {},
      text: "*clang clang clang*"
    }, {
    U: [],
    nodeName: "masterpiece",
    V: "questDriftwood",
    tags: {W: ["kijimunaNeutral"], zd: ["DRIFTWOOD", "complete"]},
    text: "Behold! My greatest masterpiece!!"
  }], [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questDriftwood",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "lastHint",
    V: "questDriftwood",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Take the driftwood back to the artist's studio for your beautiful reward, hee hee."
  }],
  [{
    U: [{next: "continue", text: null}],
    nodeName: "inactiveArtisan",
    V: "questDriftwood",
    tags: {W: ["kijimunaNeutral"]},
    text: "Welcome to my studio. New Champion, I presume? Not many visitors out here... the Kijimuna scare most people off."
  }, {
    U: [{next: "request", text: null}],
    nodeName: "continue",
    V: "questDriftwood",
    tags: {W: ["kijimunaNeutral"]},
    text: "As you can see, my specialty is in sculpture. I use driftwood that washes up on the beach."
  }, {
    U: [{next: "yes", text: "Sure!"}, {next: "no", text: "Sorry"}],
    nodeName: "request",
    V: "questDriftwood",
    tags: {W: ["kijimunaNeutral"]},
    text: "I'd like to start a new sculpture, but my poor knees are killing me. Would you grant me a kindness and bring me some wood?"
  }, {
    U: [],
    nodeName: "yes",
    V: "questDriftwood",
    tags: {W: ["kijimunaNeutral"], zd: ["DRIFTWOOD", "first"]},
    text: "Excellent! Three pieces should be enough."
  }, {
    U: [],
    nodeName: "no",
    V: "questDriftwood",
    tags: {W: ["kijimunaNeutral"]},
    text: "Very well then... Feel free to keep browsing."
  }], [{
    U: [{next: "questDescription", text: null}], nodeName: "inactiveTrophy",
    V: "questDriftwood", tags: {W: ["trophyMasterNeutral"]}, text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questDriftwood",
    tags: {W: ["trophyMasterNeutral"]},
    text: "The driftwood artist in the Southwest Beach seems to have artist's block..."
  }, {
    U: [],
    nodeName: "IllBeWatching",
    V: "questDriftwood",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Maybe you're the inspiration she needs. I'll be watching to see when the task is resolved. Hee hee hee."
  }], [{
    U: [], nodeName: "sculpture1",
    V: "questDriftwood", tags: {W: ["luckyNeutral"]}, text: "Oh my, such interesting shapes."
  }], [{
    U: [],
    nodeName: "sculpture2",
    V: "questDriftwood",
    tags: {W: ["luckyNeutral"]},
    text: "Wow, is this all driftwood?"
  }], [{
    U: [],
    nodeName: "sculpture3",
    V: "questDriftwood",
    tags: {W: ["luckyWorried"]},
    text: "I'm not sure I understand art..."
  }], [{
    U: [],
    nodeName: "sculpture4",
    V: "questDriftwood",
    tags: {W: ["luckyNeutral"]},
    text: "It's beautiful...I think?"
  }], [{
    U: [{next: "soHonored", text: null}], nodeName: "sculptureLucky", V: "questDriftwood",
    tags: {W: ["luckyNeutral"]}, text: "Is that me???"
  }, {
    U: [],
    nodeName: "soHonored",
    V: "questDriftwood",
    tags: {W: ["luckyNeutral"]},
    text: "Oh wow, I'm so honored. I better keep practicing so I can live up to this scupture!"
  }], [{
    U: [],
    nodeName: "active",
    V: "questFan",
    tags: {W: ["inariNeutral"]},
    text: "The Tengu is in the Table Tennis Dojo north of here, switch his fan to stop the wind!"
  }], [{
    U: [{next: "whatdoing", text: null}],
    nodeName: "activeFan",
    V: "questFan",
    tags: {W: ["luckyNeutral"]},
    text: "(There's the fan...I've almost got it...)"
  },
    {
      U: [{next: "nothing", text: "Nothing"}, {next: "trade", text: "Trade"}, {
        next: "beautifulfan",
        text: "Beautiful Fan"
      }], nodeName: "whatdoing", V: "questFan", tags: {W: ["tenguNeutral"]}, text: "WHAT ARE YOU DOING THERE?"
    }, {
      U: [{next: "stayawayfan", text: null}],
      nodeName: "nothing",
      V: "questFan",
      tags: {W: ["luckyShocked"]},
      text: "N-nothing!! I was just looking around."
    }, {
      U: [{next: "nevertrade", text: null}],
      nodeName: "trade",
      V: "questFan",
      tags: {W: ["luckyRawr"]},
      text: "Was jsut admiring your fan...care to trade for it?"
    }, {
      U: [], nodeName: "nevertrade",
      V: "questFan", tags: {W: ["tenguNeutral"]}, text: "Hah! I'd NEVER trade my beautiful fan, it's one of a kind!"
    }, {
      U: [],
      nodeName: "stayawayfan",
      V: "questFan",
      tags: {W: ["tenguNeutral"]},
      text: "Well look around further from my beautiful fan. No one can take it from me!"
    }, {
      U: [{next: "everyonewantsit", text: null}],
      nodeName: "beautifulfan",
      V: "questFan",
      tags: {W: ["luckySmileSweatdrop"]},
      text: "I was just admiring your fan, it's so beautiful!"
    }, {
      U: [{next: "takeit", text: null}], nodeName: "everyonewantsit", V: "questFan", tags: {W: ["tenguNeutral"]},
      text: "Ohohoh, you have very good taste!  Everyone admires my fan, some have even tried to take it!"
    }, {
      U: [{next: "invisiblecloak", text: null}],
      nodeName: "takeit",
      V: "questFan",
      tags: {W: ["luckySmileSweatdrop"]},
      text: "Oh,  but who could ever take the fan from you, you are so fast and observant!"
    }, {
      U: [{next: "remindsme", text: null}],
      nodeName: "invisiblecloak",
      V: "questFan",
      tags: {W: ["tenguNeutral"]},
      text: "Exactly! You'd have to be invisble to get past me!"
    }, {
      U: [{next: "cloak", text: null}], nodeName: "remindsme", V: "questFan",
      tags: {W: ["tenguNeutral"]}, text: "Which reminds me...where is invisibility cloak??"
    }, {
      U: [{next: "missing", text: null}],
      nodeName: "cloak",
      V: "questFan",
      tags: {W: ["luckyShocked"]},
      text: "You have an invisibility cloak too??"
    }, {
      U: [{next: "stolen", text: null}],
      nodeName: "missing",
      V: "questFan",
      tags: {W: ["tenguNeutral"]},
      text: "I did, but it's been missing since that little octopus came to visit me and was admiring it."
    }, {
      U: [{next: "dotdotdot", text: null}],
      nodeName: "stolen",
      V: "questFan",
      tags: {W: ["luckyWorried"]},
      text: "Oh, do you think the octopus stole it??"
    },
    {
      U: [{next: "idonow", text: null}],
      nodeName: "dotdotdot",
      V: "questFan",
      tags: {W: ["tenguNeutral"]},
      text: "..."
    }, {
      U: [{next: "eventhefan", text: null}],
      nodeName: "idonow",
      V: "questFan",
      tags: {W: ["tenguNeutral"]},
      text: "WELL NOW I DO! How dare that octopus take my cloak! I'd give anything to have it back!"
    }, {
      U: [{next: "findmycloak", text: null}],
      nodeName: "eventhefan",
      V: "questFan",
      tags: {W: ["luckyRawr"]},
      text: "...Even your fan?"
    }, {
      U: [{next: "howfind", text: null}], nodeName: "findmycloak", V: "questFan", tags: {W: ["tenguNeutral"]},
      text: "Yes!  It's a deal! Bring me my cloak and I'll give you my precious fan!"
    }, {
      U: [{next: "sparkles", text: null}],
      nodeName: "howfind",
      V: "questFan",
      tags: {W: ["luckySmileSweatdrop"]},
      text: "But how am I supposed to find someone who's invisible??"
    }, {
      U: [{next: "searchforest", text: null}],
      nodeName: "sparkles",
      V: "questFan",
      tags: {W: ["tenguNeutral"]},
      text: "You can tell the cloak is nearby if you see sparkles in the air."
    }, {
      U: [],
      nodeName: "searchforest",
      V: "questFan",
      tags: {W: ["tenguNeutral"], zd: ["FAN", "search"]},
      text: "Search the Bamboo Forest!! Bring my beautiful cloak back to me!"
    }],
  [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questFan",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  }, {
    U: [],
    nodeName: "trophyHint",
    V: "questFan",
    tags: {W: ["trophyMasterNeutral"]},
    text: "The Tengu's Table Tennis games are creating too much wind for the villagers nearby, maybe you can take his fan and solve the problem!"
  }], [{
    U: [],
    nodeName: "complete",
    V: "questFan",
    tags: {W: ["inariNeutral"]},
    text: "The wind has stopped and the villagers are safe to return! You really are incredible, Lucky!"
  }],
  [{
    U: [],
    nodeName: "completeFan",
    V: "questFan",
    tags: {W: ["tenguNeutral"]},
    text: "The fan's wind was just a trick I did for fun! I'll play without it from now on."
  }], [{
    U: [],
    nodeName: "completeOctopus",
    V: "questFan",
    tags: {W: ["invisibleOctopusNeutral"]},
    text: "I'll have to think of some other way to scare the Kijimura...khehehe."
  }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questFan",
    tags: {W: ["luckyNeutral"]},
    text: '"Wind Stopper"'
  }, {
    U: [], nodeName: "StillWatching", V: "questFan", tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [{next: "somethingtosay", text: null}],
    nodeName: "foundFan",
    V: "questFan",
    tags: {W: ["tenguNeutral"]},
    text: "Oh, my beautiful cloak, you found it!"
  }, {
    U: [{next: "sosorry", text: null}],
    nodeName: "somethingtosay",
    V: "questFan",
    tags: {W: ["luckyNeutral"]},
    text: "Yes, and this little octopus has something she wants to say to you..."
  }, {
    U: [{next: "sonoharmdonesorry", text: null}],
    nodeName: "sosorry",
    V: "questFan",
    tags: {W: ["invisibleOctopusNeutral"]},
    text: "S-sorry I took your cloack without asking, Mr. Tengu."
  },
    {
      U: [{next: "absolutelynot", text: null}],
      nodeName: "sonoharmdonesorry",
      V: "questFan",
      tags: {W: ["luckyHappy"]},
      text: "There! Now that it's back, can I have the fan?"
    }, {
      U: [{next: "hadadeal", text: null}],
      nodeName: "absolutelynot",
      V: "questFan",
      tags: {W: ["tenguNeutral"]},
      text: "Oh, absolutely not!"
    }, {
      U: [{next: "cantplay", text: null}],
      nodeName: "hadadeal",
      V: "questFan",
      tags: {W: ["luckyShocked"]},
      text: "What?? But we had a deal!!"
    }, {
      U: [{next: "butthewind", text: null}], nodeName: "cantplay", V: "questFan", tags: {W: ["tenguNeutral"]},
      text: "But I can't play Table Tennis without my fan, you don't want me to be unable to play, do you??"
    }, {
      U: [{next: "thatwhyempty", text: null}],
      nodeName: "butthewind",
      V: "questFan",
      tags: {W: ["luckyHide"]},
      text: "No but...the wind from your fan is so strong the villagers had to leave, the town is empty!"
    }, {
      U: [{next: "notscared", text: null}],
      nodeName: "thatwhyempty",
      V: "questFan",
      tags: {W: ["tenguNeutral"]},
      text: "...That's why everyone left???  I thought they were all scared of me."
    }, {
      U: [{next: "inthatcase", text: null}],
      nodeName: "notscared",
      V: "questFan",
      tags: {W: ["luckySmileSweatdrop"]},
      text: "No, they want to come watch you play!"
    }, {
      U: [{next: "didnttellme", text: null}],
      nodeName: "inthatcase",
      V: "questFan",
      tags: {W: ["tenguNeutral"]},
      text: "Well the wind is just a trick I do for fun! I can play without it if the people prefer."
    }, {
      U: [{next: "straghtforward", text: null}],
      nodeName: "didnttellme",
      V: "questFan",
      tags: {W: ["tenguNeutral"]},
      text: "Why didn't anyone ask me? We could have solved the problem long ago, ohohoho."
    }, {
      U: [],
      nodeName: "straghtforward",
      V: "questFan",
      tags: {W: ["luckyAnnoyed"], zd: ["FAN", "complete"]},
      text: "...You're right, I'll try to be more straightforward next time."
    }], [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questFan",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "lastHint",
    V: "questFan",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Return the stolen Invisibility Cloak to the Tengu in the Table Tennis Dojo in the North East!"
  }], [{
    U: [{next: "whygo", text: null}], nodeName: "inactive",
    V: "questFan", tags: {W: ["inariNeutral"]}, text: "Everyone left this village after the Tengu arrive..."
  }, {
    U: [{next: "strongwind", text: null}],
    nodeName: "whygo",
    V: "questFan",
    tags: {W: ["luckyWorried"]},
    text: "Why? The Tengu seems friendly, and he's very good at Table Tennis!"
  }, {
    U: [{next: "toostrongwind", text: null}],
    nodeName: "strongwind",
    V: "questFan",
    tags: {W: ["inariNeutral"]},
    text: "Well that's the problem. Everyone loves the Tengu, but he plays Table Tennis with his fan."
  }, {
    U: [{next: "howterrible", text: null}],
    nodeName: "toostrongwind",
    V: "questFan",
    tags: {W: ["inariNeutral"]},
    text: "He plays so well it creates tremendous wind and it's too strong for anyone to live near by."
  }, {
    U: [{next: "gethisfan", text: null}],
    nodeName: "howterrible",
    V: "questFan",
    tags: {W: ["luckyWorried"]},
    text: "Oh, how terrible! Has anyone aked him to stop??"
  }, {
    U: [{next: "illtry", text: "I'll Try!"}, {next: "soundshard", text: "Sounds hard."}],
    nodeName: "gethisfan",
    V: "questFan",
    tags: {W: ["inariNeutral"]},
    text: "I tried sneaking into the Dojo and swapping his fan, but he's too fast and caught me!"
  },
    {
      U: [{next: "neverstop", text: null}],
      nodeName: "soundshard",
      V: "questFan",
      tags: {W: ["luckyWorried"]},
      text: "Sounds like it's an impossible situation."
    }, {
      U: [],
      nodeName: "neverstop",
      V: "questFan",
      tags: {W: ["inariNeutral"]},
      text: "I guess the winds will never stop..."
    }, {
      U: [{next: "goodluck", text: null}],
      nodeName: "illtry",
      V: "questFan",
      tags: {W: ["luckyNeutral"]},
      text: "I don't know if I'll have any better luck, but I'm happy to try!"
    }, {
      U: [], nodeName: "goodluck", V: "questFan", tags: {W: ["inariNeutral"], zd: ["FAN", "active"]},
      text: "Wow you are so brave! The Tengu is in the Table Tennis Dojo north of here, good luck!"
    }], [{
    U: [],
    nodeName: "inactiveFan",
    V: "questFan",
    tags: {W: ["luckyNeutral"]},
    text: "That's the fan the Tengu uses as a paddle. It looks so powerful!"
  }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questFan",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questFan",
    tags: {W: ["trophyMasterNeutral"]},
    text: "The Village in the Bamboo Forest in the North East is all but abandoned, I wonder why..."
  },
    {
      U: [],
      nodeName: "IllBeWatching",
      V: "questFan",
      tags: {W: ["trophyMasterNeutral"]},
      text: "And I'll be watching to see when the task is resolved. Hee hee hee."
    }], [{
    U: [{next: "sparkles2", text: null}],
    nodeName: "searchFan",
    V: "questFan",
    tags: {W: ["tenguNeutral"]},
    text: "Find the octopus that stole my invisibility cloak and the fan is yours!"
  }, {
    U: [{next: "searchforest2", text: null}],
    nodeName: "sparkles2",
    V: "questFan",
    tags: {W: ["tenguNeutral"]},
    text: "You can tell if the invisibility cloak is nearby if you see sparkles in the air."
  },
    {
      U: [],
      nodeName: "searchforest2",
      V: "questFan",
      tags: {W: ["tenguNeutral"]},
      text: "Search the Bamboo Forest!! Bring my beautiful cloak back to me!"
    }], [{
    U: [{next: "howididyousee", text: null}],
    nodeName: "searchOctopus",
    V: "questFan",
    tags: {W: ["luckyRawr"]},
    text: "Aha!"
  }, {
    U: [{next: "seesparkles", text: null}],
    nodeName: "howididyousee",
    V: "questFan",
    tags: {W: ["invisibleOctopusNeutral"]},
    text: "W-what?? How can you see me??"
  }, {
    U: [{next: "whatkindof", text: null}], nodeName: "seesparkles", V: "questFan", tags: {W: ["luckyBigGrin"]},
    text: "I just followed the sparkles."
  }, {
    U: [{next: "youstole", text: null}],
    nodeName: "whatkindof",
    V: "questFan",
    tags: {W: ["invisibleOctopusNeutral"]},
    text: "...what good is an invisibility cloak if you can see the sparkles??"
  }, {
    U: [{next: "kijimuna", text: null}],
    nodeName: "youstole",
    V: "questFan",
    tags: {W: ["luckyAnnoyed"]},
    text: "Well it's not your cloak it in the first place! Why did you take it from the Tengu??"
  }, {
    U: [{next: "notnice", text: null}], nodeName: "kijimuna", V: "questFan", tags: {W: ["invisibleOctopusNeutral"]},
    text: "I was gonna use it to scare the Kijimuna on Marathon Beach! We're always playing tricks on each other, khehehe."
  }, {
    U: [{next: "awwman", text: null}],
    nodeName: "notnice",
    V: "questFan",
    tags: {W: ["luckyWorried"]},
    text: "Well that's no reason to steal! Let's take this back to the Tengu right now."
  }, {
    U: [],
    nodeName: "awwman",
    V: "questFan",
    tags: {W: ["invisibleOctopusNeutral"], zd: ["FAN", "found"]},
    text: "Aw darn, you're no fun...khehehe."
  }], [{
    U: [{next: "searchHint", text: null}], nodeName: "searchTrophy", V: "questFan",
    tags: {W: ["trophyMasterNeutral"]}, text: "You're right in the middle of this one."
  }, {
    U: [],
    nodeName: "searchHint",
    V: "questFan",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Find the Octopus that stole the Tengu's Invisiblity cloak in the Bamboo Forest in the North East."
  }], [{
    U: [],
    nodeName: "active",
    V: "questGhost",
    tags: {W: ["TaroMomSad"]},
    text: "Precious child, thank you. I buried the letter between two stone lanterns safekeeping..."
  }], [{
    U: [{next: "directionstothecastle", text: null}], nodeName: "activeLetter", V: "questGhost",
    tags: {W: ["luckyHappy"]}, text: "This must be the letter! Wait, there's something on the scroll..."
  }, {
    U: [{next: "luckyconfused", text: null}],
    nodeName: "directionstothecastle",
    V: "questGhost",
    tags: {W: ["scrollNeutral"]},
    text: "'THE PATH TO THE CASTLE IS AT YOUR FEET'"
  }, {
    U: [],
    nodeName: "luckyconfused",
    V: "questGhost",
    tags: {W: ["luckyWorried"], zd: ["GHOST", "active2"]},
    text: "What could that mean?"
  }], [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questGhost",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  },
    {
      U: [],
      nodeName: "trophyHint",
      V: "questGhost",
      tags: {W: ["trophyMasterNeutral"]},
      text: "Find the letter under the Maple Tree in Bridge Garden to the East and deliver it to Urashima Taro in the underwater castle!"
    }], [{
    U: [{next: "urashimaresponds", text: null}],
    nodeName: "activeUrashima",
    V: "questGhost",
    tags: {W: ["luckyCurious"]},
    text: "Excuse me... are you Urashima Taro?"
  }, {
    U: [{next: "luckydeliver", text: null}],
    nodeName: "urashimaresponds",
    V: "questGhost",
    tags: {W: ["UrashimaNeutral"]},
    text: "Lucky! What a pleasant surprise! Here for another dance battle?"
  },
    {
      U: [{next: "Urashimareads", text: null}],
      nodeName: "luckydeliver",
      V: "questGhost",
      tags: {W: ["luckyCurious"]},
      text: "Actually... I have something for you. A letter."
    }, {
      U: [{next: "urashima emotion", text: null}],
      nodeName: "Urashimareads",
      V: "questGhost",
      tags: {W: ["UrashimaNeutral"]},
      text: "... ... ..."
    }, {
      U: [{next: "stammer", text: null}],
      nodeName: "urashima emotion",
      V: "questGhost",
      tags: {W: ["UrashimaNeutral"]},
      text: "My mother... I'd nearly forgotten. Is she well?"
    }, {
      U: [{next: "Urashimaokay", text: null}],
      nodeName: "stammer",
      V: "questGhost",
      tags: {W: ["luckyWorried"]},
      text: "She... um... she's been waiting for you. But she just wants to know that you're okay."
    }, {
      U: [{next: "willdo", text: null}],
      nodeName: "Urashimaokay",
      V: "questGhost",
      tags: {W: ["UrashimaNeutral"]},
      text: "Tell her I miss her. And that I'm happy, down here in the Castle. Will you do that, Lucky?"
    }, {
      U: [],
      nodeName: "willdo",
      V: "questGhost",
      tags: {W: ["luckyCurious"], zd: ["GHOST", "found"]},
      text: "Yes, I will."
    }], [{
    U: [{next: "StillWatching", text: null}], nodeName: "completeTrophy",
    V: "questGhost", tags: {W: ["luckyNeutral"]}, text: '"Ghostly Delivery"'
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questGhost",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [{next: "ghost happy", text: null}],
    nodeName: "found",
    V: "questGhost",
    tags: {W: ["luckyCurious"]},
    text: "I gave him the letter. He says he misses you, and he's happy."
  }, {
    U: [],
    nodeName: "ghost happy",
    V: "questGhost",
    tags: {W: ["TaroMomSad"], zd: ["GHOST", "complete"]},
    text: "I shall be eternally in your debt, Lucky. At last I can move on..."
  }],
  [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questGhost",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "lastHint",
    V: "questGhost",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I'm sure the ghost of Urashima Taro's mother is eagerly awaiting word from her son, hee hee."
  }], [{
    U: [{next: "yeswilldo", text: null}],
    nodeName: "foundUrashima",
    V: "questGhost",
    tags: {W: ["UrashimaNeutral"]},
    text: "Tell her I miss her. And that I'm happy, down here in the Castle. Will you do that, Lucky?"
  },
    {
      U: [],
      nodeName: "yeswilldo",
      V: "questGhost",
      tags: {W: ["luckyNeutral"]},
      text: "Yes, I will."
    }], [{
    U: [{next: "what", text: null}],
    nodeName: "inactive",
    V: "questGhost",
    tags: {W: ["TaroMomSad"]},
    text: "So close... yet so far away...!"
  }, {
    U: [{next: "momexplains", text: null}],
    nodeName: "what",
    V: "questGhost",
    tags: {W: ["luckyNeutral"]},
    text: "What's close?"
  }, {
    U: [{next: "momcontinue", text: null}],
    nodeName: "momexplains",
    V: "questGhost",
    tags: {W: ["TaroMomSad"]},
    text: "A long time ago... I had a son, Urashima Taro."
  }, {
    U: [{
      next: "momexplains2",
      text: null
    }],
    nodeName: "momcontinue",
    V: "questGhost",
    tags: {W: ["TaroMomSad"]},
    text: "He went down to the Undersea Castle there... on the back of a turtle, so I was told."
  }, {
    U: [{next: "oldman", text: null}],
    nodeName: "momexplains2",
    V: "questGhost",
    tags: {W: ["TaroMomSad"]},
    text: "I waited for his return. A week, a year, a lifetime... and now I wait still."
  }, {
    U: [{next: "momsigh", text: null}],
    nodeName: "oldman",
    V: "questGhost",
    tags: {W: ["TaroMomSad"]},
    text: "He must be all grown up by now..."
  }, {
    U: [{
      next: "luckyresponse",
      text: null
    }],
    nodeName: "momsigh",
    V: "questGhost",
    tags: {W: ["TaroMomSad"]},
    text: "When I was alive, I wrote him a letter. I wanted to get it to him somehow... If I could just do that, then I could rest."
  }, {
    U: [{next: "momrequest", text: null}],
    nodeName: "luckyresponse",
    V: "questGhost",
    tags: {W: ["luckyNeutral"]},
    text: "I could probably bring the letter to the Undersea Castle..."
  }, {
    U: [{next: "yes", text: "Of course!"}, {next: "no", text: "On second thought..."}],
    nodeName: "momrequest",
    V: "questGhost",
    tags: {W: ["TaroMomSad"]},
    text: "Oh, really?? Will you help me?"
  }, {
    U: [],
    nodeName: "yes",
    V: "questGhost",
    tags: {W: ["TaroMomSad"], zd: ["GHOST", "active"]},
    text: "Precious child, thank you. I buried it between two stone lanterns for safekeeping..."
  }, {
    U: [],
    nodeName: "no",
    V: "questGhost",
    tags: {W: ["TaroMomSad"]},
    text: "I thought it might be too much to ask..."
  }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questGhost",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questGhost",
    tags: {W: ["trophyMasterNeutral"]},
    text: "There's been reports of a ghostly figure in the pagodas of the Bridge Garden to the East."
  }, {
    U: [],
    nodeName: "IllBeWatching",
    V: "questGhost",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I wonder if there's actually a ghost there. I'll be watching to see when the task is resolved. Hee hee hee."
  }], [{
    U: [],
    nodeName: "inactiveUrashima",
    V: "questGhost",
    tags: {W: ["UrashimaNeutral"]},
    text: "Lucky! What a pleasant surprise! Here for another dance battle?"
  }],
  [{
    U: [],
    nodeName: "otohime",
    V: "questGhost",
    tags: {W: ["otohimeNeutral"]},
    text: "Hello Lucky, have you come to dance with us?"
  }], [{
    U: [{next: "tightSchedule", text: null}],
    nodeName: "activeLava",
    V: "questHotSpring",
    tags: {W: ["luckyNeutral"]},
    text: "Wow, here's some lava already in a bottle! How thoughtful!"
  }, {
    U: [],
    nodeName: "tightSchedule",
    V: "questHotSpring",
    tags: {W: ["luckyNeutral"], zd: ["HOT_SPRING", "found"]},
    text: "I better take this to the Arrow Shop right away!"
  }], [{
    U: [],
    nodeName: "activeOwner",
    V: "questHotSpring",
    tags: {W: ["hareNeutral"]},
    text: "Fluffy's Arrow Shop is Northwest docks, a big boat with a red roof. I hope Fluffy can help us!"
  }], [{
    U: [{next: "needHelp", text: null}],
    nodeName: "activeShop",
    V: "questHotSpring",
    tags: {W: ["bigCatNeutral"]},
    text: "Welcome to Fluffy's Arrow Shop"
  }, {
    U: [{next: "haveArrow", text: null}],
    nodeName: "needHelp",
    V: "questHotSpring",
    tags: {W: ["luckyWorried"]},
    text: "Do you have a Super Fire Arrow??"
  }, {
    U: [{next: "hotSpringBlocked", text: null}],
    nodeName: "haveArrow",
    V: "questHotSpring",
    tags: {W: ["bigCatNeutral"]},
    text: "Super Fire Arrow?? Oh my...why do you need something so rare and dangerous?"
  }, {
    U: [{next: "vacation", text: null}],
    nodeName: "hotSpringBlocked",
    V: "questHotSpring",
    tags: {W: ["luckyWorried"]},
    text: "A giant snowball has blocked the Mountain Hot Spings! We need it to-"
  }, {
    U: [{next: "illDoAnything", text: null}],
    nodeName: "vacation",
    V: "questHotSpring",
    tags: {W: ["bigCatNeutral"]},
    text: "The Hot Springs are closed?!? But where will I go on vacation??"
  }, {
    U: [{next: "giveArrow", text: null}], nodeName: "illDoAnything",
    V: "questHotSpring", tags: {W: ["bigCatNeutral"]}, text: "I'll do anything to help it reopen! Free of charge!"
  }, {
    U: [{next: "specialComponents", text: null}],
    nodeName: "giveArrow",
    V: "questHotSpring",
    tags: {W: ["luckyNeutral"]},
    text: "Amazing! So you'll give us the Super Fire Arrow?"
  }, {
    U: [{next: "needLava", text: null}],
    nodeName: "specialComponents",
    V: "questHotSpring",
    tags: {W: ["bigCatNeutral"]},
    text: "For an arrow so powerful, I need special components..."
  }, {
    U: [], nodeName: "needLava", V: "questHotSpring", tags: {
      W: ["bigCatNeutral"],
      zd: ["HOT_SPRING", "lava"]
    }, text: "Bring me lava from Oni Island in the East, and the arrow shall be yours!"
  }], [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questHotSpring",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  }, {
    U: [],
    nodeName: "trophyHint",
    V: "questHotSpring",
    tags: {W: ["trophyMasterNeutral"]},
    text: "A Super Fire Arrow is hard to come by, maybe Fluffy in the Arrow Shop in the Northwest Docks can help, hee hee."
  }], [{
    U: [{
      next: "memberForLife",
      text: null
    }],
    nodeName: "completeOwner",
    V: "questHotSpring",
    tags: {W: ["hareNeutral"]},
    text: "I can never repay you for all your help."
  }, {
    U: [{next: "youForReal", text: null}],
    nodeName: "memberForLife",
    V: "questHotSpring",
    tags: {W: ["hareNeutral"]},
    text: "Please enjoy the hot spring free of charge...forever!"
  }, {
    U: [{next: "notGoodBusiness", text: null}],
    nodeName: "youForReal",
    V: "questHotSpring",
    tags: {W: ["luckyShocked"]},
    text: "Really??"
  }, {
    U: [],
    nodeName: "notGoodBusiness",
    V: "questHotSpring",
    tags: {W: ["hareNeutral"]},
    text: "It's not good business, but sometimes you have to do what's right!"
  }],
  [{
    U: [{next: "discount", text: null}],
    nodeName: "completeShop",
    V: "questHotSpring",
    tags: {W: ["bigCatNeutral"]},
    text: "Welcome to Fluffy's Arrow Shop. Oh it's you again..."
  }, {
    U: [],
    nodeName: "discount",
    V: "questHotSpring",
    tags: {W: ["bigCatNeutral"]},
    text: "Is the Hot Spring open yet? Hopefully I'll get a nice discount next time I'm there..."
  }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questHotSpring",
    tags: {W: ["luckyNeutral"]},
    text: "'Hot Spring Savior'"
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questHotSpring",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [{next: "wasntEasy", text: null}],
    nodeName: "foundOwner",
    V: "questHotSpring",
    tags: {W: ["hareNeutral"]},
    text: "The arrow! I can't believe you actaully found it!"
  }, {
    U: [{next: "standBack", text: null}],
    nodeName: "wasntEasy",
    V: "questHotSpring",
    tags: {W: ["luckyNeutral"]},
    text: "It wasn't easy, but I hope it works!"
  }, {
    U: [{next: "boom", text: null}], nodeName: "standBack", V: "questHotSpring", tags: {W: ["hareNeutral"]},
    text: "Stand Back!"
  }, {
    U: [{next: "backInBusiness", text: null}],
    nodeName: "boom",
    V: "questHotSpring",
    tags: {},
    text: "BOOOOOOOOOOOOOOOOOOM!!"
  }, {
    U: [{next: "safe", text: null}],
    nodeName: "backInBusiness",
    V: "questHotSpring",
    tags: {W: ["hareNeutral"], zd: ["HOT_SPRING", "complete"]},
    text: "It worked!! I'm back in business!"
  }, {
    U: [],
    nodeName: "safe",
    V: "questHotSpring",
    tags: {W: ["hareNeutral"]},
    text: "...oh, and hopefully everyone inside is safe too!"
  }], [{
    U: [{next: "gotTheLava", text: null}], nodeName: "foundShop", V: "questHotSpring",
    tags: {W: ["bigCatNeutral"]}, text: "Welcome to Fluffy's Arrow-"
  }, {
    U: [{next: "exactlyRight", text: null}],
    nodeName: "gotTheLava",
    V: "questHotSpring",
    tags: {W: ["luckyNeutral"]},
    text: "I found the lava! Take it, it's hot!!"
  }, {
    U: [{next: "clangs", text: null}],
    nodeName: "exactlyRight",
    V: "questHotSpring",
    tags: {W: ["bigCatNeutral"]},
    text: "Oh my. Yes...this is exactly what I need..."
  }, {
    U: [{next: "carefulWithIt", text: null}],
    nodeName: "clangs",
    V: "questHotSpring",
    tags: {},
    text: "*clang clang clang*"
  }, {
    U: [{
      next: "toTheHotSpring",
      text: null
    }],
    nodeName: "carefulWithIt",
    V: "questHotSpring",
    tags: {W: ["bigCatNeutral"]},
    text: "Here you are! But be careful, it's quite...explosive."
  }, {
    U: [],
    nodeName: "toTheHotSpring",
    V: "questHotSpring",
    tags: {W: ["luckyNeutral"], zd: ["HOT_SPRING", "arrow"]},
    text: "Thank you! I'll take it to the hot springs right away!"
  }], [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questHotSpring",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "lastHint",
    V: "questHotSpring",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Take the Super Fire Arrow back to Wooly at the hot spring in the North mountains, hee hee."
  }], [{
    U: [{next: "unfortunate", text: null}],
    nodeName: "inactiveOwner",
    V: "questHotSpring",
    tags: {W: ["hareNeutral"]},
    text: "Greetings, weary traveler."
  }, {
    U: [{next: "owlSnow", text: null}],
    nodeName: "unfortunate",
    V: "questHotSpring",
    tags: {W: ["hareNeutral"]},
    text: "I wish I could invite you to relax in to my humble hot spring, but alas..."
  }, {
    U: [{next: "poorBusiness", text: null}],
    nodeName: "owlSnow",
    V: "questHotSpring",
    tags: {W: ["hareNeutral"]},
    text: "One of Fukuro's snowballs has BLOCKED THE ENTRANCE!! There's no way in or out!"
  }, {
    U: [{next: "noWayIn", text: null}],
    nodeName: "poorBusiness",
    V: "questHotSpring",
    tags: {W: ["hareNeutral"]},
    text: "My poor humble business venture...I'LL BE RUINED!!"
  }, {
    U: [{next: "fireArrow", text: null}],
    nodeName: "noWayIn",
    V: "questHotSpring",
    tags: {W: ["luckyCurious"]},
    text: "Is there no way in??"
  }, {
    U: [{next: "help", text: "Help"}, {next: "sorry", text: "Sorry..."}],
    nodeName: "fireArrow",
    V: "questHotSpring",
    tags: {W: ["hareNeutral"]},
    text: "No!!  We'd need something like a Super Fire Arrow to melt that much snow. How can I afford that??"
  }, {
    U: [{next: "arrowShop", text: null}],
    nodeName: "help",
    V: "questHotSpring",
    tags: {W: ["luckyNeutral"]},
    text: "Hm..I don't have any money, but maybe I can find one!"
  }, {
    U: [],
    nodeName: "arrowShop",
    V: "questHotSpring",
    tags: {W: ["hareNeutral"], zd: ["HOT_SPRING", "active"]},
    text: "Oh, you sweet child. Check with Fluffy at the Arrow Shop in the Northwest Docks, he might be able to help!"
  },
    {
      U: [{next: "willNoOneTry", text: null}],
      nodeName: "sorry",
      V: "questHotSpring",
      tags: {W: ["luckyNeutral"]},
      text: "Sorry, I can't afford it either!"
    }, {
      U: [],
      nodeName: "willNoOneTry",
      V: "questHotSpring",
      tags: {W: ["hareNeutral"]},
      text: "Oh dear...can no one help? Where is the Chosen One?"
    }], [{
    U: [{next: "manyArrows", text: null}],
    nodeName: "inactiveShop",
    V: "questHotSpring",
    tags: {W: ["bigCatNeutral"]},
    text: "Welcome to Fluffy's Arrow Shop."
  }, {
    U: [{next: "fineCraft", text: null}], nodeName: "manyArrows", V: "questHotSpring", tags: {W: ["luckyNeutral"]},
    text: "Wow I've never seen so many arrows!"
  }, {
    U: [{next: "noMoney", text: null}],
    nodeName: "fineCraft",
    V: "questHotSpring",
    tags: {W: ["bigCatNeutral"]},
    text: "Only the finest craftmanship at competitive prices."
  }, {
    U: [{next: "unfortune", text: null}],
    nodeName: "noMoney",
    V: "questHotSpring",
    tags: {W: ["luckyNeutral"]},
    text: "Oh...but I have no money."
  }, {
    U: [{next: "browse", text: null}],
    nodeName: "unfortune",
    V: "questHotSpring",
    tags: {W: ["bigCatNeutral"]},
    text: "Ah...how unfortunate."
  }, {
    U: [], nodeName: "browse", V: "questHotSpring",
    tags: {W: ["bigCatNeutral"]}, text: "Well you are welcome to browse, but...please don't touch anything."
  }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questHotSpring",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questHotSpring",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Snowfall has blocked the Hot Springs in the North mountains. Poor Wooly is bound to go out of business!"
  }, {
    U: [],
    nodeName: "IllBeWatching",
    V: "questHotSpring",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Maybe your warm personality can help? I'll be watching to see when the task is resolved. Hee hee hee."
  }], [{
    U: [{next: "findLava", text: null}],
    nodeName: "lavaShop",
    V: "questHotSpring",
    tags: {W: ["bigCatNeutral"]},
    text: "Welcome to Fluffy's Arrow Shop. ...oh it's you."
  }, {
    U: [{next: "oldSaying", text: null}],
    nodeName: "findLava",
    V: "questHotSpring",
    tags: {W: ["luckyWorried"]},
    text: "Where can I find lava?"
  }, {
    U: [{next: "checkBetweenEyes", text: null}],
    nodeName: "oldSaying",
    V: "questHotSpring",
    tags: {W: ["bigCatNeutral"]},
    text: "Oni Island is the only place with lava...there's an old saying:"
  }, {
    U: [{next: "wonderWhat", text: null}],
    nodeName: "checkBetweenEyes",
    V: "questHotSpring",
    tags: {W: ["bigCatNeutral"]},
    text: "'Look between The Eyes for your sweet lava prize.'"
  }, {
    U: [],
    nodeName: "wonderWhat",
    V: "questHotSpring",
    tags: {W: ["bigCatNeutral"]},
    text: "I wonder what that could possibly mean..."
  }], [{
    U: [{next: "checkinside", text: null}], nodeName: "active", V: "questIntro", tags: {W: ["gatekeeperNeutral"]},
    text: "You made it! Thanks for bringing the trophy all this way!"
  }, {
    U: [],
    nodeName: "checkinside",
    V: "questIntro",
    tags: {W: ["gatekeeperNeutral"], zd: ["INTRO", "complete"]},
    text: "Check inside with the Trophy Master if you want to help more people!"
  }], [{
    U: [],
    nodeName: "complete",
    V: "questIntro",
    tags: {W: ["gatekeeperNeutral"]},
    text: "Check inside with the Trophy Master if you want to help more people!"
  }], [{
    U: [{next: "moreways", text: null}],
    nodeName: "inactive",
    V: "questIntro",
    tags: {W: ["gatekeeperNeutral"]},
    text: "Oh, you're new here aren't you?"
  },
    {
      U: [{next: "actsofkindness", text: null}],
      nodeName: "moreways",
      V: "questIntro",
      tags: {W: ["gatekeeperNeutral"]},
      text: "All the sports on the island are great, but there are more ways to show you are a true champion."
    }, {
      U: [{next: "heavy", text: null}],
      nodeName: "actsofkindness",
      V: "questIntro",
      tags: {W: ["gatekeeperNeutral"]},
      text: "Acts of kindness go a long way with the people here."
    }, {
      U: [{next: "lookstrong", text: null}],
      nodeName: "heavy",
      V: "questIntro",
      tags: {W: ["gatekeeperNeutral"]},
      text: "Like me! I have this trophy for the Trophy Master, but its too heavy for me to carry!"
    },
    {
      U: [{next: "yes", text: "Of course!"}, {next: "no", text: "No way."}],
      nodeName: "lookstrong",
      V: "questIntro",
      tags: {W: ["gatekeeperNeutral"]},
      text: "Would you take it to the Trophy House for me?"
    }, {
      U: [{next: "justNorth", text: null}],
      nodeName: "yes",
      V: "questIntro",
      tags: {W: ["luckyHappy"]},
      text: "I'd be happy to!"
    }, {
      U: [],
      nodeName: "justNorth",
      V: "questIntro",
      tags: {W: ["gatekeeperNeutral"], zd: ["INTRO", "active"]},
      text: "Oh thank you! I'll meet you at the Trophy House, it's just north of here."
    }, {
      U: [{next: "getit", text: null}],
      nodeName: "no", V: "questIntro", tags: {W: ["luckyWorried"]}, text: "Sorry, not interested."
    }, {
      U: [],
      nodeName: "getit",
      V: "questIntro",
      tags: {W: ["gatekeeperNeutral"]},
      text: "Oh, ok. Well let me know if you change your mind, helping people frequently pays off!"
    }], [{
    U: [],
    nodeName: "active",
    V: "questLanternLight",
    tags: {W: ["inariNeutral"]},
    text: "Light all four lanterns and your true test will begin!"
  }], [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questLanternLight",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  }, {
    U: [],
    nodeName: "trophyHint",
    V: "questLanternLight",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I wonder what will happen when you the lanterns around the ancient Table Tennis Table, hee hee."
  }], [{
    U: [],
    nodeName: "complete",
    V: "questLanternLight",
    tags: {W: ["inariNeutral"]},
    text: "Well done, your new challenger awaits. Touch the gate to play the game."
  }], [{
    U: [{next: "StillWatching", text: null}], nodeName: "completeTrophy", V: "questLanternLight",
    tags: {W: ["luckyNeutral"]}, text: "'Lighter of Lanterns'"
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questLanternLight",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [],
    nodeName: "found",
    V: "questLanternLight",
    tags: {W: ["inariNeutral"], zd: ["LANTERN_LIGHT", "complete"]},
    text: "Well done, your new challenger awaits. Touch the gate to play the game."
  }], [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questLanternLight",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [{next: "lastHint", text: null}],
    nodeName: "lastHint",
    V: "questLanternLight",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Now that the lanterns are lit, speak to the gaurdian for your reward, hee hee."
  }], [{
    U: [{next: "doyoudare", text: null}],
    nodeName: "inactive",
    V: "questLanternLight",
    tags: {W: ["inariNeutral"]},
    text: "Legend says the true masters of Table Tennis would light lanterns around their tables to call forth stronger spirits to compete against."
  }, {
    U: [{
      next: "yes",
      text: "Yes!"
    }, {next: "no", text: "N-no."}],
    nodeName: "doyoudare",
    V: "questLanternLight",
    tags: {W: ["inariNeutral"]},
    text: "Do you dare to try the same?"
  }, {
    U: [],
    nodeName: "yes",
    V: "questLanternLight",
    tags: {W: ["inariNeutral"], zd: ["LANTERN_LIGHT", "active"]},
    text: "You are brave. Take this flame and light the four lanterns around the table."
  }, {
    U: [{next: "changeMind", text: null}],
    nodeName: "no",
    V: "questLanternLight",
    tags: {W: ["inariNeutral"]},
    text: "...I see."
  }, {
    U: [], nodeName: "changeMind", V: "questLanternLight", tags: {W: ["inariNeutral"]},
    text: "Come back to me when you feel you are strong enough!"
  }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questLanternLight",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questLanternLight",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Legend tells of an ancient Table Tennis found only but lantern light."
  }, {
    U: [], nodeName: "IllBeWatching", V: "questLanternLight", tags: {W: ["trophyMasterNeutral"]},
    text: "Find the guardian in the bamboo forest to see if it's all true. I'll be watching to see when the task is resolved. Hee hee hee."
  }], [{
    U: [],
    nodeName: "lantern1lit",
    V: "questLanternLight",
    tags: {W: ["luckyWorried"]},
    text: "The flame is so bright!"
  }], [{
    U: [{next: "return", text: null}],
    nodeName: "lantern1unlit",
    V: "questLanternLight",
    tags: {},
    text: "You light the stone lantern."
  }, {
    U: [],
    nodeName: "return",
    V: "questLanternLight",
    tags: {W: ["luckyWorried"], zd: ["LANTERN_1", ! 0]},
    text: "The flame is so bright!"
  }], [{
    U: [],
    nodeName: "lantern2lit", V: "questLanternLight", tags: {W: ["luckyWorried"]}, text: "It seems so powerful."
  }], [{
    U: [{next: "powerful", text: null}],
    nodeName: "lantern2unlit",
    V: "questLanternLight",
    tags: {},
    text: "You light the stone lantern."
  }, {
    U: [],
    nodeName: "powerful",
    V: "questLanternLight",
    tags: {W: ["luckyWorried"], zd: ["LANTERN_2", ! 0]},
    text: "It seems so powerful."
  }], [{
    U: [],
    nodeName: "lantern3lit",
    V: "questLanternLight",
    tags: {W: ["luckyWorried"]},
    text: "It's not casting any heat..."
  }], [{
    U: [{next: "noheat", text: null}],
    nodeName: "lantern3unlit", V: "questLanternLight", tags: {}, text: "You light the stone lantern."
  }, {
    U: [],
    nodeName: "noheat",
    V: "questLanternLight",
    tags: {W: ["luckyWorried"], zd: ["LANTERN_3", ! 0]},
    text: "It's not casting any heat..."
  }], [{
    U: [],
    nodeName: "lantern4lit",
    V: "questLanternLight",
    tags: {W: ["luckyWorried"]},
    text: "I can't stop looking at it."
  }], [{
    U: [{next: "cantstop", text: null}],
    nodeName: "lantern4unlit",
    V: "questLanternLight",
    tags: {},
    text: "You light the stone lantern."
  }, {
    U: [], nodeName: "cantstop", V: "questLanternLight",
    tags: {W: ["luckyWorried"], zd: ["LANTERN_4", ! 0]}, text: "I can't stop looking at it."
  }], [{
    U: [{next: "hint", text: null}],
    nodeName: "active",
    V: "questLostBook",
    tags: {W: ["otterNeutral"]},
    text: "D-did you find my book yet?"
  }, {
    U: [],
    nodeName: "hint",
    V: "questLostBook",
    tags: {W: ["otterNeutral"]},
    text: "The bookstore Southeast of here is where I last had it..."
  }], [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questLostBook",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  },
    {
      U: [],
      nodeName: "trophyHint",
      V: "questLostBook",
      tags: {W: ["trophyMasterNeutral"]},
      text: "Check the Bookstore in Tanooki City to find Nyan-Chan's lost book, hee hee."
    }], [{
    U: [{next: "return", text: null}],
    nodeName: "book",
    V: "questLostBook",
    tags: {W: ["luckyHappy"]},
    text: "Aha! Looks like the lost book."
  }, {
    U: [{next: "note", text: null}],
    nodeName: "return",
    V: "questLostBook",
    tags: {W: ["luckyNeutral"]},
    text: "Oh, there's a note inside..."
  }, {
    U: [{next: "um", text: null}], nodeName: "note", V: "questLostBook", tags: {W: ["luckyWorried"]},
    text: "'My love, how I miss your face. Meet me at the secret beach tonight, alone.'"
  }, {
    U: [{next: "owner", text: null}],
    nodeName: "um",
    V: "questLostBook",
    tags: {W: ["luckyWorried"]},
    text: "..."
  }, {
    U: [],
    nodeName: "owner",
    V: "questLostBook",
    tags: {W: ["luckyWorried"], zd: ["LOST_BOOK", "found"]},
    text: "I should take this book back to its owner."
  }], [{
    U: [{next: "thankYou", text: null}],
    nodeName: "complete",
    V: "questLostBook",
    tags: {W: ["otterNeutral"]},
    text: "(The secret beach...yes...)"
  }, {
    U: [], nodeName: "thankYou", V: "questLostBook",
    tags: {W: ["otterNeutral"]}, text: "OH HELLO! Um, yes, thank you again for returning...my book..."
  }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questLostBook",
    tags: {W: ["luckyNeutral"]},
    text: "'Book Enthusiast'"
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questLostBook",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [{next: "thanks", text: null}],
    nodeName: "found",
    V: "questLostBook",
    tags: {W: ["otterNeutral"]},
    text: "MY BOOK! GIVE IT TO ME!"
  },
    {
      U: [],
      nodeName: "thanks",
      V: "questLostBook",
      tags: {W: ["otterNeutral"], zd: ["LOST_BOOK", "complete"]},
      text: "Oh I'm so relieved. I can't thank you enough."
    }], [{
    U: [{next: "giveBookBack", text: null}],
    nodeName: "foundTrophy",
    V: "questLostBook",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "giveBookBack",
    V: "questLostBook",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Just return the book you found to Olive the Otter in Tanooki City!"
  }], [{
    U: [{next: "youOK", text: null}], nodeName: "inactive",
    V: "questLostBook", tags: {W: ["otterNeutral"]}, text: "Oh dear where could it be?"
  }, {
    U: [{next: "missingBook", text: null}],
    nodeName: "youOK",
    V: "questLostBook",
    tags: {W: ["luckyCurious"]},
    text: "What's wrong?"
  }, {
    U: [{next: "bookstore", text: null}],
    nodeName: "missingBook",
    V: "questLostBook",
    tags: {W: ["otterNeutral"]},
    text: "I can't find a very important book!"
  }, {
    U: [{next: "help", text: null}],
    nodeName: "bookstore",
    V: "questLostBook",
    tags: {W: ["otterNeutral"]},
    text: "I could have sworn I had it in the bookstore..."
  }, {
    U: [{
      next: "yes",
      text: "Sure!"
    }, {next: "no", text: "Nah"}],
    nodeName: "help",
    V: "questLostBook",
    tags: {W: ["otterNeutral"]},
    text: "Could you help me find my precious book??"
  }, {
    U: [],
    nodeName: "yes",
    V: "questLostBook",
    tags: {W: ["otterNeutral"], zd: ["LOST_BOOK", "active"]},
    text: "Oh thank you! If you find it, don't show anyone and bring it back to me."
  }, {
    U: [{next: "changeMind", text: null}],
    nodeName: "no",
    V: "questLostBook",
    tags: {W: ["otterNeutral"]},
    text: "...oh. Of course, I'm sorry to bother you asking."
  }, {
    U: [], nodeName: "changeMind", V: "questLostBook",
    tags: {W: ["otterNeutral"]}, text: "Oh dear, if only someone would help me..."
  }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questLostBook",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questLostBook",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Olive the Otter in Tanooki City has lost his book. Someone needs to help him find it."
  }, {
    U: [], nodeName: "IllBeWatching", V: "questLostBook", tags: {W: ["trophyMasterNeutral"]},
    text: "Funny tho...I never remember Olive liking to read before. Hee hee."
  }], [{
    U: [{next: "hint", text: null}],
    nodeName: "active",
    V: "questLostPaddle",
    tags: {W: ["inariNeutral"]},
    text: "Any luck finding my table tennis paddle?"
  }, {
    U: [],
    nodeName: "hint",
    V: "questLostPaddle",
    tags: {W: ["inariNeutral"]},
    text: "I could have sworn I had it at the beach West of here..."
  }], [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questLostPaddle",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  },
    {
      U: [],
      nodeName: "trophyHint",
      V: "questLostPaddle",
      tags: {W: ["trophyMasterNeutral"]},
      text: "I think I saw the lost paddle on the West alcove of Marathon Beach, hee hee."
    }], [{
    U: [],
    nodeName: "complete",
    V: "questLostPaddle",
    tags: {W: ["inariNeutral"]},
    text: "I can't wait to get back to training, thanks again!"
  }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questLostPaddle",
    tags: {W: ["luckyNeutral"]},
    text: "'Paddle Fetcher'"
  }, {
    U: [], nodeName: "StillWatching", V: "questLostPaddle", tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [{next: "thanks", text: null}],
    nodeName: "found",
    V: "questLostPaddle",
    tags: {W: ["inariNeutral"]},
    text: "My beautiful paddle! You found it!!"
  }, {
    U: [],
    nodeName: "thanks",
    V: "questLostPaddle",
    tags: {W: ["inariNeutral"], zd: ["LOST_PADDLE", "complete"]},
    text: "I wish this game had an inventory system in place so I could thank you!"
  }], [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questLostPaddle",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  },
    {
      U: [],
      nodeName: "lastHint",
      V: "questLostPaddle",
      tags: {W: ["trophyMasterNeutral"]},
      text: "You've found the lost paddle, now just return it to the wayard Inari on Marathon Beach, hee hee."
    }], [{
    U: [{next: "yes", text: "Sure!"}, {next: "no", text: "Nah"}],
    nodeName: "inactive",
    V: "questLostPaddle",
    tags: {W: ["inariNeutral"]},
    text: "I've lost my table tennis paddle! Can you help me find it?"
  }, {
    U: [],
    nodeName: "yes",
    V: "questLostPaddle",
    tags: {W: ["inariNeutral"], zd: ["LOST_PADDLE", "active"]},
    text: "Oh thank you! I think I last had it on the beach."
  },
    {
      U: [{next: "changeMind", text: null}],
      nodeName: "no",
      V: "questLostPaddle",
      tags: {W: ["inariNeutral"]},
      text: "...I see."
    }, {
      U: [],
      nodeName: "changeMind",
      V: "questLostPaddle",
      tags: {W: ["inariNeutral"]},
      text: "Well let me know if you change your mind!"
    }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questLostPaddle",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questLostPaddle",
    tags: {W: ["trophyMasterNeutral"]},
    text: "It seems a warward Inari has lost her Table Tennis Paddle."
  }, {
    U: [],
    nodeName: "IllBeWatching",
    V: "questLostPaddle",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Find her on the southwest beach to help. I'll be watching to see when the task is resolved. Hee hee hee."
  }], [{
    U: [{next: "return", text: null}],
    nodeName: "paddle",
    V: "questLostPaddle",
    tags: {W: ["luckyNeutral"]},
    text: "Wow, what a nice table tennis paddle..."
  }, {
    U: [], nodeName: "return", V: "questLostPaddle", tags: {W: ["luckyWorried"], zd: ["LOST_PADDLE", "found"]},
    text: "I should take it back to its owner!"
  }], [{
    U: [{next: "notnotyet", text: null}],
    nodeName: "active",
    V: "questLuckyArrow",
    tags: {W: ["youngArcherNeutral"]},
    text: "Did you find my lucky arrow?"
  }, {
    U: [{next: "roofagain", text: null}],
    nodeName: "notnotyet",
    V: "questLuckyArrow",
    tags: {W: ["luckyNeutral"]},
    text: "Not yet, but I'm trying my best!"
  }, {
    U: [],
    nodeName: "roofagain",
    V: "questLuckyArrow",
    tags: {W: ["youngArcherNeutral"]},
    text: "It landed on the roof of Yoichi's Castle...will I ever hit a bullseye again??"
  }], [{
    U: [{
      next: "looksnormal",
      text: null
    }],
    nodeName: "activeArrow",
    V: "questLuckyArrow",
    tags: {W: ["luckyHappy"]},
    text: "The lucky arrow, this must be it!"
  }, {
    U: [],
    nodeName: "looksnormal",
    V: "questLuckyArrow",
    tags: {W: ["luckyAnnoyed"], zd: ["LUCKY_ARROW", "found"]},
    text: "(...It looks like any other arrow to me...)"
  }], [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questLuckyArrow",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  }, {
    U: [],
    nodeName: "trophyHint",
    V: "questLuckyArrow",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Get to the top of Yoichi's Castle in the North West docks to find the young archer's lost lucky arrow!"
  }], [{
    U: [],
    nodeName: "complete",
    V: "questLuckyArrow",
    tags: {W: ["youngArcherNeutral"]},
    text: "I've got a great feeling about this, maybe I can get this arrow all the way to the top of the mountains!"
  }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questLuckyArrow",
    tags: {W: ["luckyNeutral"]},
    text: '"Lucky Arrow Retriever"'
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questLuckyArrow",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [{next: "whatarrow", text: null}],
    nodeName: "found",
    V: "questLuckyArrow",
    tags: {W: ["luckyHappy"]},
    text: "You won't believe it, I found the arrow!"
  }, {
    U: [{next: "yourluckyarrow", text: null}],
    nodeName: "whatarrow",
    V: "questLuckyArrow",
    tags: {W: ["youngArcherNeutral"]},
    text: "What arrow?"
  }, {
    U: [{next: "tooktoolong", text: null}],
    nodeName: "yourluckyarrow",
    V: "questLuckyArrow",
    tags: {W: ["luckyAnnoyed"]},
    text: "Your lucky arrow, the one you lost on the roof!"
  }, {
    U: [{next: "yourekidding", text: null}],
    nodeName: "tooktoolong",
    V: "questLuckyArrow",
    tags: {W: ["youngArcherNeutral"]},
    text: "Oh, but that was SO LONG ago! I found a new lucky arrow in the meantime!"
  }, {
    U: [{next: "isntitbeuatiful", text: null}],
    nodeName: "yourekidding",
    V: "questLuckyArrow",
    tags: {W: ["luckyAnnoyed"]},
    text: "...what?"
  }, {
    U: [{next: "looksjustlikeold", text: null}],
    nodeName: "isntitbeuatiful",
    V: "questLuckyArrow",
    tags: {W: ["youngArcherNeutral"]},
    text: "Yeah, isn't it beautiful??"
  },
    {
      U: [{next: "butitslucky", text: null}],
      nodeName: "looksjustlikeold",
      V: "questLuckyArrow",
      tags: {W: ["luckyAnnoyed"]},
      text: "...It looks just like all the other arrows."
    }, {
      U: [{next: "ohbrother", text: null}],
      nodeName: "butitslucky",
      V: "questLuckyArrow",
      tags: {W: ["youngArcherNeutral"]},
      text: "Yeah, but its lucky!  I've got a great feeling about this, maybe I can get it all the way to the top of the mountains!"
    }, {
      U: [], nodeName: "ohbrother", V: "questLuckyArrow", tags: {W: ["luckyAnnoyed"], zd: ["LUCKY_ARROW", "complete"]},
      text: "Oh great..."
    }], [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questLuckyArrow",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "lastHint",
    V: "questLuckyArrow",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Return the lucky arrow to the young archer outside Yoichi's Castle in the North West docks."
  }], [{
    U: [{next: "whatswrong", text: null}],
    nodeName: "inactive",
    V: "questLuckyArrow",
    tags: {W: ["youngArcherNeutral"]},
    text: "Oh no...what am I gonna do??"
  },
    {
      U: [{next: "arrowonroof", text: null}],
      nodeName: "whatswrong",
      V: "questLuckyArrow",
      tags: {W: ["luckyCurious"]},
      text: "What seems to be the problem?"
    }, {
      U: [{next: "greatnews", text: null}],
      nodeName: "arrowonroof",
      V: "questLuckyArrow",
      tags: {W: ["youngArcherNeutral"]},
      text: "I shot my lucky arrow higher than I ever have!"
    }, {
      U: [{next: "awful", text: null}],
      nodeName: "greatnews",
      V: "questLuckyArrow",
      tags: {W: ["luckyHappy"]},
      text: "Oh, but that's great news!"
    }, {
      U: [{next: "neverseeagain", text: null}], nodeName: "awful", V: "questLuckyArrow",
      tags: {W: ["youngArcherNeutral"]}, text: "No, it's awful! It landed on the roof of the Yochi's Castle!"
    }, {
      U: [{next: "illhelp", text: "I'll Help"}, {next: "sorry", text: "Sorry..."}],
      nodeName: "neverseeagain",
      V: "questLuckyArrow",
      tags: {W: ["youngArcherNeutral"]},
      text: "I can't go that far away from the water. I'll never see my lucky arrow again!"
    }, {
      U: [{next: "poorluckyarrow", text: null}],
      nodeName: "sorry",
      V: "questLuckyArrow",
      tags: {W: ["luckyWorried"]},
      text: "I'm sorry, I wish I could help."
    }, {
      U: [], nodeName: "poorluckyarrow",
      V: "questLuckyArrow", tags: {W: ["youngArcherNeutral"]}, text: "My poor lucky arrow..."
    }, {
      U: [],
      nodeName: "illhelp",
      V: "questLuckyArrow",
      tags: {zd: ["LUCKY_ARROW", "active"]},
      text: "Maybe I can find a way up to the roof! Wait here!"
    }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questLuckyArrow",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questLuckyArrow",
    tags: {W: ["trophyMasterNeutral"]},
    text: "A young archer seems to have lost his lucky arrow at Yoichi's Castle in then Docks in the North West."
  },
    {
      U: [],
      nodeName: "IllBeWatching",
      V: "questLuckyArrow",
      tags: {W: ["trophyMasterNeutral"]},
      text: "And I'll be watching to see when the task is resolved. Hee hee hee."
    }], [{
    U: [],
    nodeName: "active",
    V: "questMomotaro",
    tags: {W: ["momoDogNeutral"]},
    text: "Monkey last saw Momotaro heading north up Climbing Mountain. We hope you find him fast!"
  }], [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questMomotaro",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  },
    {
      U: [],
      nodeName: "trophyHint",
      V: "questMomotaro",
      tags: {W: ["trophyMasterNeutral"]},
      text: "Momotaro was last seen heading into the Bamboo Forest in the North West. See if you can track him down, hee hee."
    }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questMomotaro",
    tags: {W: ["luckyNeutral"]},
    text: '"Peach Hunter"'
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questMomotaro",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [{
      next: "wishedforachild",
      text: null
    }],
    nodeName: "dad",
    V: "questMomotaro",
    tags: {W: ["momoDadNeutral"]},
    text: "My wife and I had wished for a child for years."
  }, {
    U: [{next: "offintheworld", text: null}],
    nodeName: "wishedforachild",
    V: "questMomotaro",
    tags: {W: ["momoDadNeutral"]},
    text: "Then one day we found a peach floating down the river..."
  }, {
    U: [{next: "wheverpeaches", text: null}],
    nodeName: "offintheworld",
    V: "questMomotaro",
    tags: {W: ["momoDadNeutral"]},
    text: "We cut it open and inside was a baby! That's how we found our son, Momotaro."
  }, {
    U: [],
    nodeName: "wheverpeaches",
    V: "questMomotaro",
    tags: {W: ["momoDadNeutral"]},
    text: "Whereever there are peaches, you know Momotaro isn't far behind!"
  }], [{
    U: [{next: "wereSoWorried", text: null}],
    nodeName: "complete",
    V: "questMomotaro",
    tags: {W: ["momoDogNeutral"]},
    text: "Momotaro, you're back!"
  }, {
    U: [{next: "broughtPeaches", text: null}],
    nodeName: "wereSoWorried",
    V: "questMomotaro",
    tags: {W: ["momoMonkeyNeutral"]},
    text: "We were so worried!"
  }, {
    U: [{next: "myFav", text: null}], nodeName: "broughtPeaches", V: "questMomotaro", tags: {W: ["momotaroNeutral"]},
    text: "Sorry everyone, but I brought us all peaches!"
  }, {
    U: [{next: "yummy", text: null}],
    nodeName: "myFav",
    V: "questMomotaro",
    tags: {W: ["momoBirdNeutral"]},
    text: "Peaches, my favorite!"
  }, {
    U: [{next: "anythingTeam", text: null}],
    nodeName: "yummy",
    V: "questMomotaro",
    tags: {W: ["momoDogNeutral"]},
    text: "So yummy!  Thank you for finding him Lucky!"
  }, {
    U: [{next: "canIHave", text: null}],
    nodeName: "anythingTeam",
    V: "questMomotaro",
    tags: {W: ["luckyHappy"]},
    text: "Anything to help the team out!"
  }, {
    U: [{next: "ofCourse", text: null}],
    nodeName: "canIHave", V: "questMomotaro", tags: {W: ["luckyWorried"]}, text: "...can I have a peach too?"
  }, {
    U: [],
    nodeName: "ofCourse",
    V: "questMomotaro",
    tags: {W: ["momotaroNeutral"]},
    text: "Of course!"
  }], [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questMomotaro",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "lastHint",
    V: "questMomotaro",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Go back to Oni Island to see if Momotaro made it back to his team safely, hee hee."
  }],
  [{
    U: [{next: "whatsWrong", text: null}],
    nodeName: "inactive",
    V: "questMomotaro",
    tags: {W: ["momoDogNeutral"]},
    text: "Oh no..."
  }, {
    U: [{next: "momoMissing", text: null}],
    nodeName: "whatsWrong",
    V: "questMomotaro",
    tags: {W: ["luckyCurious"]},
    text: "What's wrong?"
  }, {
    U: [{next: "doomed", text: null}],
    nodeName: "momoMissing",
    V: "questMomotaro",
    tags: {W: ["momoDogNeutral"]},
    text: "Momotaro has gone missing! And he's our team captain, how can we play without him?"
  }, {
    U: [{next: "help", text: "Help"}, {next: "sorry", text: "Sorry"}], nodeName: "doomed",
    V: "questMomotaro", tags: {W: ["momoMonkeyNeutral"]}, text: "And it's the day of the big game! WE'RE DOOMED!!"
  }, {
    U: [{next: "ohThankYou", text: null}],
    nodeName: "help",
    V: "questMomotaro",
    tags: {W: ["luckyNeutral"]},
    text: "Everybody stay calm, maybe I can help find him!"
  }, {
    U: [{next: "teamPlayer", text: null}],
    nodeName: "ohThankYou",
    V: "questMomotaro",
    tags: {W: ["momoBirdNeutral"]},
    text: "You would do that for us?"
  }, {
    U: [],
    nodeName: "teamPlayer",
    V: "questMomotaro",
    tags: {W: ["momoDogNeutral"], zd: ["MOMOTARO", "peach1"]},
    text: "What a team player! Monkey last saw him heading north up Climibng Mountain."
  },
    {
      U: [],
      nodeName: "sorry",
      V: "questMomotaro",
      tags: {W: ["luckyNeutral"]},
      text: "Sorry, I hope you find him..."
    }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questMomotaro",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questMomotaro",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Momotaro, Captain of the Rugby Team, has gone missing on Oni Island in the East. Where could he be..."
  }, {
    U: [],
    nodeName: "IllBeWatching",
    V: "questMomotaro",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I'll be watching to see when the task is resolved. Hee hee hee."
  }], [{
    U: [{next: "backsoon", text: null}],
    nodeName: "mom",
    V: "questMomotaro",
    tags: {W: ["momoMomNeutral"]},
    text: "Our son Momotaro left for Oni Island to play rugby."
  }, {
    U: [],
    nodeName: "backsoon",
    V: "questMomotaro",
    tags: {W: ["momoMomNeutral"]},
    text: "I hope he comes to visit us soon."
  }], [{
    U: [{next: "doingHere", text: null}],
    nodeName: "momotaro",
    V: "questMomotaro",
    tags: {W: ["luckyNeutral"]},
    text: "Momotaro, here you are!"
  },
    {
      U: [{next: "teamWorried", text: null}],
      nodeName: "doingHere",
      V: "questMomotaro",
      tags: {W: ["momotaroNeutral"]},
      text: "Oh, hello Lucky! What are you doing all the way out here?"
    }, {
      U: [{next: "parents", text: null}],
      nodeName: "teamWorried",
      V: "questMomotaro",
      tags: {W: ["luckyNeutral"], zd: ["MOMOTARO", "peach3"]},
      text: "You teammates are worried about you, they are getting ready for the big game!"
    }, {
      U: [{next: "momDad", text: null}],
      nodeName: "parents",
      V: "questMomotaro",
      tags: {W: ["momotaroNeutral"]},
      text: "Oh no, well there's nothing to worry about! I just came to visit my parents."
    },
    {
      U: [{next: "whyHello", text: null}],
      nodeName: "momDad",
      V: "questMomotaro",
      tags: {W: ["momotaroNeutral"]},
      text: "Mom, Dad...this is Lucky, the amazing athlete I was telling you about!"
    }, {
      U: [{next: "heardAlot", text: null}],
      nodeName: "whyHello",
      V: "questMomotaro",
      tags: {W: ["momoDadNeutral"]},
      text: "Why hello Lucky, nice to meet you."
    }, {
      U: [{next: "blush", text: null}],
      nodeName: "heardAlot",
      V: "questMomotaro",
      tags: {W: ["momoMomNeutral"]},
      text: "We've heard a lot about you, our son is very thankful for all your help."
    }, {
      U: [{
        next: "betterGetBack",
        text: null
      }],
      nodeName: "blush",
      V: "questMomotaro",
      tags: {W: ["luckyNeutral"]},
      text: "Oh my...well it's nice to meet you both!"
    }, {
      U: [{next: "dontForget", text: null}],
      nodeName: "betterGetBack",
      V: "questMomotaro",
      tags: {W: ["momotaroNeutral"]},
      text: "Well, we better get back to the rugby game."
    }, {
      U: [{next: "thanksBye", text: null}],
      nodeName: "dontForget",
      V: "questMomotaro",
      tags: {W: ["momoMomNeutral"]},
      text: "Be careful with the Oni, and don't forget these peaches for your friends."
    }, {
      U: [], nodeName: "thanksBye", V: "questMomotaro",
      tags: {W: ["momotaroNeutral"], zd: ["MOMOTARO", "complete"]}, text: "Right! Thanks Mom, see you both soon!"
    }], [{
    U: [{next: "mustBe", text: null}],
    nodeName: "peach1",
    V: "questMomotaro",
    tags: {W: ["luckyNeutral"]},
    text: "What's this, a peach?"
  }, {
    U: [],
    nodeName: "mustBe",
    V: "questMomotaro",
    tags: {W: ["luckyNeutral"], zd: ["MOMOTARO", "peach2"]},
    text: "Momotaro must be this way!"
  }], [{
    U: [],
    nodeName: "peach2",
    V: "questMomotaro",
    tags: {W: ["luckyNeutral"], zd: ["MOMOTARO", "peach3"]},
    text: "Another peach!  I must be on the right track!"
  }],
  [{
    U: [],
    nodeName: "peach3",
    V: "questMomotaro",
    tags: {W: ["luckyNeutral"], zd: ["MOMOTARO", "found"]},
    text: "More peaches! I've got to be getting close now!"
  }], [{U: [{next: "firstHint", text: null}], nodeName: "active", V: "questNAME", tags: {W: [""]}, text: "XXX"}, {
    U: [],
    nodeName: "firstHint",
    V: "questNAME",
    tags: {W: [""]},
    text: "XXX"
  }], [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questNAME",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  }, {
    U: [], nodeName: "trophyHint",
    V: "questNAME", tags: {W: ["trophyMasterNeutral"]}, text: "XXX"
  }], [{U: [], nodeName: "complete", V: "questNAME", tags: {W: [""]}, text: "XXX"}], [{
    U: [{
      next: "StillWatching",
      text: null
    }], nodeName: "completeTrophy", V: "questNAME", tags: {W: ["luckyNeutral"]}, text: '"TROPHYNAME"'
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questNAME",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{U: [{next: "thanks", text: null}], nodeName: "found", V: "questNAME", tags: {W: [""]}, text: "XXX"}, {
    U: [], nodeName: "thanks",
    V: "questNAME", tags: {W: [""], zd: ["NAME", "complete"]}, text: "XXX"
  }], [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questNAME",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "lastHint",
    V: "questNAME",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Finish up and come back to see your reward, see hee."
  }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questNAME",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{
      next: "IllBeWatching",
      text: null
    }],
    nodeName: "questDescription",
    V: "questNAME",
    tags: {W: ["trophyMasterNeutral"]},
    text: "There's someone on the island who needs the Champion's help. YOUR help."
  }, {
    U: [],
    nodeName: "IllBeWatching",
    V: "questNAME",
    tags: {W: ["trophyMasterNeutral"]},
    text: "And I'll be watching to see when the task is resolved. Hee hee hee."
  }], [{
    U: [{next: "activewhatswrongbaker", text: null}],
    nodeName: "activeBaker",
    V: "questOni",
    tags: {W: ["monkeyBaker"]},
    text: "*Sigh*"
  }, {
    U: [{next: "activereadytoretire", text: null}], nodeName: "activewhatswrongbaker",
    V: "questOni", tags: {W: ["luckyNeutral"]}, text: "What's wrong?"
  }, {
    U: [{next: "activewarmallthetime", text: null}],
    nodeName: "activereadytoretire",
    V: "questOni",
    tags: {W: ["monkeyBaker"]},
    text: "I've been a baker for so long, I feel ready to call it quits."
  }, {
    U: [{next: "howwarm", text: null}],
    nodeName: "activewarmallthetime",
    V: "questOni",
    tags: {W: ["monkeyBaker"]},
    text: "I'd love to retire someplace where it's warm all the time and I can just relax."
  }, {
    U: [{next: "whereisthat", text: null}], nodeName: "howwarm", V: "questOni",
    tags: {W: ["luckyNeutral"]}, text: "Hm...how about somewhere very VERY warm?"
  }, {
    U: [{next: "ihaveafriend", text: null}],
    nodeName: "whereisthat",
    V: "questOni",
    tags: {W: ["monkeyBaker"]},
    text: "The warmer the better! Do you have something in mind?"
  }, {
    U: [{next: "wonderfulbring", text: null}],
    nodeName: "ihaveafriend",
    V: "questOni",
    tags: {W: ["luckyNeutral"]},
    text: "I have a friend who wants to become a baker! But he's-"
  }, {
    U: [{next: "butihavent", text: null}],
    nodeName: "wonderfulbring",
    V: "questOni",
    tags: {W: ["monkeyBaker"]},
    text: "Oh how wonderful! My wildest dreams are coming true! Bring your friend here as soon as you can!"
  },
    {
      U: [{next: "whocares", text: "He's Big"}, {next: "whocares", text: "He's Red"}, {
        next: "whocares",
        text: "He's an Oni"
      }],
      nodeName: "butihavent",
      V: "questOni",
      tags: {W: ["luckyNeutral"]},
      text: "But I haven't told you anything about him..."
    }, {
      U: [],
      nodeName: "whocares",
      V: "questOni",
      tags: {W: ["monkeyBaker"], zd: ["ONI", "found"]},
      text: "Who cares?? If he has the baking spirit, that's all that matters. I can't wait to meet him!"
    }], [{
    U: [{next: "stilllooking", text: null}], nodeName: "active", V: "questOni", tags: {W: ["oniDreamer"]},
    text: "Any luck on finding a place for me to work in Tanooki City?"
  }, {
    U: [],
    nodeName: "stilllooking",
    V: "questOni",
    tags: {W: ["luckyHappy"]},
    text: "Still looking!"
  }], [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questOni",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  }, {
    U: [],
    nodeName: "trophyHint",
    V: "questOni",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Help find a place in Tanooki City for an Oni to pursue his dream of becoming a baker!"
  }],
  [{
    U: [{next: "bakingisbetter", text: null}],
    nodeName: "complete",
    V: "questOni",
    tags: {W: ["oniBaker"]},
    text: "Baking is better than I even imagined, everyone is so happy!"
  }, {
    U: [],
    nodeName: "bakingisbetter",
    V: "questOni",
    tags: {W: ["oniBaker"]},
    text: "You were right Lucky, I'm so happy I finally made my dream come true!"
  }], [{
    U: [{next: "oniisbetter", text: null}],
    nodeName: "completeBaker",
    V: "questOni",
    tags: {W: ["monkeyRetired"]},
    text: "Retirement on Oni Island is better than I could have dreamed!"
  }, {
    U: [],
    nodeName: "oniisbetter",
    V: "questOni",
    tags: {W: ["monkeyRetired"]},
    text: "Being surrounded by boiling hot lava all day long...what could be more relaxing??"
  }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questOni",
    tags: {W: ["luckyNeutral"]},
    text: '"Bakery Real Estate Agent"'
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questOni",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [{next: "sosudden", text: null}],
    nodeName: "found",
    V: "questOni",
    tags: {W: ["luckyHappy"]},
    text: "Great news! The baker in Tanooki City wants to retire, he's willing to give you his shop!"
  },
    {
      U: [{next: "waitingforyou", text: null}],
      nodeName: "sosudden",
      V: "questOni",
      tags: {W: ["oniDreamer"]},
      text: "Oh my...I can't believe it!"
    }, {
      U: [{next: "wowsosudden", text: null}],
      nodeName: "waitingforyou",
      V: "questOni",
      tags: {W: ["luckyHappy"]},
      text: "Let's go, he's waiting for you!"
    }, {
      U: [{next: "leavehome", text: null}],
      nodeName: "wowsosudden",
      V: "questOni",
      tags: {W: ["oniDreamer"]},
      text: "It's so sudden...can I really do this?"
    }, {
      U: [{next: "nogood", text: null}],
      nodeName: "leavehome",
      V: "questOni",
      tags: {W: ["oniDreamer"]},
      text: "Leave my home and everything I've ever known?"
    },
    {
      U: [{next: "dreamsarehard2", text: null}],
      nodeName: "nogood",
      V: "questOni",
      tags: {W: ["oniDreamer"]},
      text: "What if I'm no good?? What if I get homesick?"
    }, {
      U: [{next: "ilefteverything", text: null}],
      nodeName: "dreamsarehard2",
      V: "questOni",
      tags: {W: ["luckyNeutral"]},
      text: "No one ever said following your dream is easy..."
    }, {
      U: [{next: "noregrets", text: null}],
      nodeName: "ilefteverything",
      V: "questOni",
      tags: {W: ["luckyNeutral"]},
      text: "I left everything to come here, because I had a dream!"
    }, {
      U: [{next: "ibelieveinyou", text: null}],
      nodeName: "noregrets",
      V: "questOni",
      tags: {W: ["luckyNeutral"]},
      text: "It's challenging, but I've grown so much and I have no regets!"
    }, {
      U: [{next: "yourerightlucky", text: null}],
      nodeName: "ibelieveinyou",
      V: "questOni",
      tags: {W: ["luckyHappy"]},
      text: "I believe in you! You could be the best baker this island ever saw!"
    }, {
      U: [{next: "givemestength", text: null}],
      nodeName: "yourerightlucky",
      V: "questOni",
      tags: {W: ["oniDreamer"]},
      text: "You believe in me..."
    }, {
      U: [{next: "meetyouthere", text: null}], nodeName: "givemestength",
      V: "questOni", tags: {W: ["oniDreamer"]}, text: "Just hearing that give me stength. OK!  Let's go!"
    }, {
      U: [],
      nodeName: "meetyouthere",
      V: "questOni",
      tags: {W: ["oniDreamer"], zd: ["ONI", "complete"]},
      text: "I'll meet you in Tanooki City!"
    }], [{
    U: [],
    nodeName: "foundBaker",
    V: "questOni",
    tags: {W: ["monkeyBaker"]},
    text: "Is your friend here yet? hurry up, I've already started packing!"
  }], [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questOni",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  },
    {
      U: [],
      nodeName: "lastHint",
      V: "questOni",
      tags: {W: ["trophyMasterNeutral"]},
      text: "Tell the Oni on Oni Island you've found a spot in Tanooki City that needs a new baker!"
    }], [{
    U: [{next: "whatswrong", text: null}],
    nodeName: "inactive",
    V: "questOni",
    tags: {W: ["oniDreamer"]},
    text: "*Sigh*"
  }, {
    U: [{next: "everyonescared", text: null}],
    nodeName: "whatswrong",
    V: "questOni",
    tags: {W: ["luckyCurious"]},
    text: "W-what's wrong?"
  }, {
    U: [{next: "neverdream", text: null}],
    nodeName: "everyonescared",
    V: "questOni",
    tags: {W: ["oniDreamer"]},
    text: "Being an Oni is tough. Everyone is always so scared of me."
  },
    {
      U: [{next: "dream", text: "Dream?"}, {next: "sorry", text: "S-sorry"}],
      nodeName: "neverdream",
      V: "questOni",
      tags: {W: ["oniDreamer"]},
      text: "After all these years of playing Rugby, I'll never make my dream come true..."
    }, {
      U: [{next: "ofcoursewont", text: null}],
      nodeName: "sorry",
      V: "questOni",
      tags: {W: ["luckyWorried"]},
      text: "S-s-sorry...please d-don't hurt m-me..."
    }, {
      U: [],
      nodeName: "ofcoursewont",
      V: "questOni",
      tags: {W: ["oniDreamer"]},
      text: "Of course I wouldn't hurt you *sigh*"
    }, {
      U: [{next: "bigcity", text: null}], nodeName: "dream",
      V: "questOni", tags: {W: ["luckyCurious"]}, text: "What's your dream?"
    }, {
      U: [{next: "makepeoplehappy", text: null}],
      nodeName: "bigcity",
      V: "questOni",
      tags: {W: ["oniDreamer"]},
      text: "I've always wanted to move to Tanooki City and become a baker!"
    }, {
      U: [{next: "howwonderful", text: null}],
      nodeName: "makepeoplehappy",
      V: "questOni",
      tags: {W: ["oniDreamer"]},
      text: "I'd rather use my stength to punch dough! What better way to make people happy than giving them delicious food."
    }, {
      U: [{next: "noonewould", text: null}], nodeName: "howwonderful",
      V: "questOni", tags: {W: ["luckyHappy"]}, text: "How wonderful! Why don't you do it?"
    }, {
      U: [{next: "help", text: "Help"}, {next: "sorryno", text: "Sorry"}],
      nodeName: "noonewould",
      V: "questOni",
      tags: {W: ["oniDreamer"]},
      text: "Who would trust an Oni in the city? I could never even find shop to start in."
    }, {
      U: [{next: "sodoi", text: null}],
      nodeName: "sorryno",
      V: "questOni",
      tags: {W: ["luckyWorried"]},
      text: "I'm sorry, I wish I could help."
    }, {
      U: [],
      nodeName: "sodoi",
      V: "questOni",
      tags: {W: ["oniDreamer"]},
      text: "*sigh* It was a silly dream anyway..."
    },
    {
      U: [{next: "doforme", text: null}],
      nodeName: "help",
      V: "questOni",
      tags: {W: ["luckyHappy"]},
      text: "I can try and help! I'll check Tanooki City to see if anyone might need a new baker!"
    }, {
      U: [],
      nodeName: "doforme",
      V: "questOni",
      tags: {W: ["oniDreamer"], zd: ["ONI", "active"]},
      text: "Oh..that would be so wonderful! Thank you for beleiving in my dream!"
    }], [{
    U: [{next: "whatswrongbaker", text: null}],
    nodeName: "inactiveBaker",
    V: "questOni",
    tags: {W: ["monkeyBaker"]},
    text: "*Sigh*"
  }, {
    U: [{next: "readytoretire", text: null}], nodeName: "whatswrongbaker",
    V: "questOni", tags: {W: ["luckyNeutral"]}, text: "What's wrong?"
  }, {
    U: [{next: "warmallthetime", text: null}],
    nodeName: "readytoretire",
    V: "questOni",
    tags: {W: ["monkeyBaker"]},
    text: "I've been a baker for so long, I feel ready to call it quits."
  }, {
    U: [{next: "soundslovely", text: null}],
    nodeName: "warmallthetime",
    V: "questOni",
    tags: {W: ["monkeyBaker"]},
    text: "I'd love to retire someplace where it's warm all the time and I can just relax."
  }, {
    U: [{next: "whowillbread", text: null}], nodeName: "soundslovely", V: "questOni", tags: {W: ["luckyHappy"]},
    text: "That sounds very nice, and like you've earned it!"
  }, {
    U: [{next: "sighdream", text: null}],
    nodeName: "whowillbread",
    V: "questOni",
    tags: {W: ["monkeyBaker"]},
    text: "But who will make the bread if its not me?? THe city would go hungry."
  }, {
    U: [{next: "luckyhmm", text: null}],
    nodeName: "sighdream",
    V: "questOni",
    tags: {W: ["monkeyBaker"]},
    text: "*sigh* Some dreams aren't meant to come true."
  }, {U: [], nodeName: "luckyhmm", V: "questOni", tags: {W: ["luckyWorried"]}, text: "Hmm..."}], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy", V: "questOni", tags: {W: ["trophyMasterNeutral"]}, text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questOni",
    tags: {W: ["trophyMasterNeutral"]},
    text: "One of the strongest Oni on Oni Island in the east is thinking about a career change..."
  }, {
    U: [],
    nodeName: "IllBeWatching",
    V: "questOni",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I'll be watching to see when the task is resolved. Hee hee hee."
  }], [{
    U: [{next: "sssorry", text: null}],
    nodeName: "active",
    V: "questPorcupine",
    tags: {W: ["porcupineNeutral"]},
    text: "What are you talking to me for? Delivery my letter to the locksmith in Oni Island in the East!"
  }, {
    U: [{next: "forgiveyou", text: null}],
    nodeName: "sssorry",
    V: "questPorcupine",
    tags: {W: ["luckyWorried"]},
    text: "S-sorry."
  }, {
    U: [],
    nodeName: "forgiveyou",
    V: "questPorcupine",
    tags: {W: ["porcupineNeutral"]},
    text: "I forgive you. Now get going!"
  }], [{
    U: [{next: "letterforyou", text: null}],
    nodeName: "activeLocksmith",
    V: "questPorcupine",
    tags: {W: ["locksmithNeutral"]},
    text: "Welcome to Hiro's Locks!"
  },
    {
      U: [{next: "inages", text: null}],
      nodeName: "letterforyou",
      V: "questPorcupine",
      tags: {W: ["luckyNeutral"]},
      text: "Hi Hiro! I have a letter for you from the porcupine in the North West Docks."
    }, {
      U: [{next: "ohmymy", text: null}],
      nodeName: "inages",
      V: "questPorcupine",
      tags: {W: ["locksmithNeutral"]},
      text: "From Petunia? I haven't seen her in ages! Thank you!"
    }, {
      U: [{next: "everythingok", text: null}],
      nodeName: "ohmymy",
      V: "questPorcupine",
      tags: {W: ["locksmithNeutral"]},
      text: "....Hm. Oh my my, that's quite a request."
    }, {
      U: [{
        next: "onemoment",
        text: null
      }], nodeName: "everythingok", V: "questPorcupine", tags: {W: ["luckyNeutral"]}, text: "Everything OK?"
    }, {
      U: [{next: "deliverPet", text: null}],
      nodeName: "onemoment",
      V: "questPorcupine",
      tags: {W: ["locksmithNeutral"]},
      text: "Yes, just one moment!"
    }, {
      U: [{next: "soheavy", text: null}],
      nodeName: "deliverPet",
      V: "questPorcupine",
      tags: {W: ["locksmithNeutral"]},
      text: "Here you go! Could you please deliver this package to Petunia?"
    }, {
      U: [{next: "fivehundred", text: null}], nodeName: "soheavy", V: "questPorcupine", tags: {W: ["luckyWorried"]},
      text: "It's so heavy!"
    }, {
      U: [],
      nodeName: "fivehundred",
      V: "questPorcupine",
      tags: {W: ["locksmithNeutral"], zd: ["PORCUPINE", "found"]},
      text: "Yes, five hundred locks seems like an odd request, but who am I to argue with a customer?"
    }], [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questPorcupine",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  }, {
    U: [],
    nodeName: "trophyHint",
    V: "questPorcupine",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Petunia the Porcupine wants you to deliver a letter to the Locksmith in Tanooki City in the South West, hee hee."
  }],
  [{
    U: [],
    nodeName: "click",
    V: "questPorcupine",
    tags: {W: [""], zd: ["PORCUPINE", "complete"]},
    text: "*click*"
  }], [{
    U: [{next: "whatshewants", text: null}],
    nodeName: "complete",
    V: "questPorcupine",
    tags: {W: ["luckyAnnoyed"]},
    text: "...the door's locked."
  }, {
    U: [],
    nodeName: "whatshewants",
    V: "questPorcupine",
    tags: {W: ["luckyHappy"]},
    text: "Oh well, I guess she got what she wanted."
  }], [{
    U: [],
    nodeName: "completeLocksmith",
    V: "questPorcupine",
    tags: {W: ["locksmithNeutral"]},
    text: "I hope Petunia likes those locks, they should last a lifetime!"
  }],
  [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questPorcupine",
    tags: {W: ["luckyNeutral"]},
    text: '"Hermit Enabler"'
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questPorcupine",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [],
    nodeName: "delivered",
    V: "questPorcupine",
    tags: {W: ["porcupineNeutral"]},
    text: "You can leave now. I really wish you would."
  }], [{
    U: [{next: "foundlock", text: null}], nodeName: "found", V: "questPorcupine", tags: {W: ["porcupineNeutral"]},
    text: "You again?"
  }, {
    U: [{next: "fantastic", text: null}],
    nodeName: "foundlock",
    V: "questPorcupine",
    tags: {W: ["luckyNeutral"]},
    text: "I delivered the letter, the locksmith gave me this package for you."
  }, {
    U: [],
    nodeName: "fantastic",
    V: "questPorcupine",
    tags: {W: ["porcupineNeutral"], zd: ["PORCUPINE", "delivered"]},
    text: "Oh how splendid. You can leave now."
  }], [{
    U: [],
    nodeName: "foundLocksmith",
    V: "questPorcupine",
    tags: {W: ["locksmithNeutral"]},
    text: "Five hundred locks seems like an odd request, but who am I to argue with a customer?"
  }],
  [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questPorcupine",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "lastHint",
    V: "questPorcupine",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Deliver the Locksmith's package to Petunia the Porcupine in the North East Docks, hee hee."
  }], [{
    U: [{next: "haventyouheard", text: null}],
    nodeName: "inactive",
    V: "questPorcupine",
    tags: {W: ["porcupineNeutral"]},
    text: "There's so much terrible noise outside, what's going on?"
  },
    {
      U: [{next: "lastyear", text: null}],
      nodeName: "haventyouheard",
      V: "questPorcupine",
      tags: {W: ["luckyNeutral"]},
      text: "Haven't you heard? The Champion Games are happening!"
    }, {
      U: [{next: "wanttojoin", text: null}],
      nodeName: "lastyear",
      V: "questPorcupine",
      tags: {W: ["porcupineNeutral"]},
      text: "Again?? I thought they were supposed to happen last year..."
    }, {
      U: [{next: "ofcoursenot", text: null}],
      nodeName: "wanttojoin",
      V: "questPorcupine",
      tags: {W: ["luckyNeutral"]},
      text: "Don't you want to join everyone?"
    }, {
      U: [{next: "lonely", text: null}],
      nodeName: "ofcoursenot",
      V: "questPorcupine",
      tags: {W: ["porcupineNeutral"]},
      text: "Of course not! I'm quite happy inside."
    }, {
      U: [{next: "wayilike", text: null}],
      nodeName: "lonely",
      V: "questPorcupine",
      tags: {W: ["luckyWorried"]},
      text: "That sounds very lonely..."
    }, {
      U: [{next: "lockthedoor", text: null}],
      nodeName: "wayilike",
      V: "questPorcupine",
      tags: {W: ["porcupineNeutral"]},
      text: "And that's just the way I like it!"
    }, {
      U: [{next: "goodpoint", text: null}],
      nodeName: "lockthedoor",
      V: "questPorcupine",
      tags: {W: ["luckyCurious"]},
      text: "If you like being alone, why do you leave your front door open?"
    },
    {
      U: [{next: "favor", text: null}],
      nodeName: "goodpoint",
      V: "questPorcupine",
      tags: {W: ["porcupineNeutral"]},
      text: "..."
    }, {
      U: [{next: "yes", text: "Yes"}, {next: "no", text: "No"}],
      nodeName: "favor",
      V: "questPorcupine",
      tags: {W: ["porcupineNeutral"]},
      text: "...I wonder if you might do me a favor?"
    }, {
      U: [{next: "wonderful", text: null}],
      nodeName: "yes",
      V: "questPorcupine",
      tags: {W: ["luckyHappy"]},
      text: "A favor, of course! I'm happy to help."
    }, {
      U: [{next: "ssure", text: null}], nodeName: "wonderful", V: "questPorcupine", tags: {W: ["porcupineNeutral"]},
      text: "Wonderful. There's a locksmith in Oni Island in the East, could you take him this letter from me?"
    }, {
      U: [{next: "goodcat", text: null}],
      nodeName: "ssure",
      V: "questPorcupine",
      tags: {W: ["luckyNeutral"]},
      text: "Letter? S-sure."
    }, {
      U: [],
      nodeName: "goodcat",
      V: "questPorcupine",
      tags: {W: ["porcupineNeutral"], zd: ["PORCUPINE", "active"]},
      text: "Splendid. I will enjoy the peace and quiet until you return."
    }, {
      U: [{next: "useless", text: null}],
      nodeName: "no",
      V: "questPorcupine",
      tags: {W: ["luckyNeutral"]},
      text: "Sorry, I don't think I can."
    },
    {
      U: [],
      nodeName: "useless",
      V: "questPorcupine",
      tags: {W: ["porcupineNeutral"]},
      text: "*Sigh* As I expected, never rely on anyone but yourself."
    }], [{
    U: [{next: "sorryno", text: null}],
    nodeName: "inactiveLocksmith",
    V: "questPorcupine",
    tags: {W: ["locksmithNeutral"]},
    text: "Welcome to Hiro's Locks, the key to success! Can I help you?"
  }, {
    U: [{next: "alwayshere", text: null}],
    nodeName: "sorryno",
    V: "questPorcupine",
    tags: {W: ["luckyNeutral"]},
    text: "Sorry, I don't need any locks or keys. Thank you though!"
  }, {
    U: [], nodeName: "alwayshere",
    V: "questPorcupine", tags: {W: ["locksmithNeutral"]}, text: "No problem, come anytime, my door is always open!"
  }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questPorcupine",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questPorcupine",
    tags: {W: ["trophyMasterNeutral"]},
    text: "There's a lonely porcupine living in the North West Docks. Maybe you can help her conquer her fear of the outside."
  },
    {
      U: [],
      nodeName: "IllBeWatching",
      V: "questPorcupine",
      tags: {W: ["trophyMasterNeutral"]},
      text: "And I'll be watching to see when the task is resolved. Hee hee hee."
    }], [{
    U: [],
    nodeName: "locked",
    V: "questPorcupine",
    tags: {W: ["porcupineNeutral"]},
    text: "You can leave now. I really wish you would."
  }], [{
    U: [{next: "meneither", text: null}],
    nodeName: "active",
    V: "questRace",
    tags: {W: ["racerAMad"]},
    text: "I'm not moving until you say I won!"
  }, {
    U: [{next: "geez", text: null}], nodeName: "meneither", V: "questRace", tags: {W: ["racerBMad"]},
    text: "I'm not moving until YOU say I won!"
  }, {
    U: [],
    nodeName: "geez",
    V: "questRace",
    tags: {W: ["luckyHide"]},
    text: "Yikes, maybe I'd better leave..."
  }], [{
    U: [{next: "blockingbeach", text: null}],
    nodeName: "activeCrab",
    V: "questRace",
    tags: {W: ["crabNeutral"]},
    text: "All that bickering... those two must be at it again. I can hear it from out here!"
  }, {
    U: [{next: "toobad", text: null}],
    nodeName: "blockingbeach",
    V: "questRace",
    tags: {W: ["luckyWorried"]},
    text: "Yes! Seems like they're refusing to move aside until one of them gives up."
  },
    {
      U: [{next: "hangry", text: null}],
      nodeName: "toobad",
      V: "questRace",
      tags: {W: ["crabNeutral"]},
      text: "Too bad... the secret beach is lovely this time of year."
    }, {
      U: [{next: "conveniencestore", text: null}],
      nodeName: "hangry",
      V: "questRace",
      tags: {W: ["crabNeutral"]},
      text: "Those two are best friends, but they fight a lot. Running makes them hungry, and hunger makes them angry."
    }, {
      U: [],
      nodeName: "conveniencestore",
      V: "questRace",
      tags: {W: ["crabNeutral"]},
      text: "I bet you could get them to move if you brought them a snack from the bakery in Tanooki City..."
    }],
  [{
    U: [{next: "nomoney", text: null}],
    nodeName: "activeMelonBread",
    V: "questRace",
    tags: {W: ["conviniNeutral"]},
    text: "Welcome to our bakery! Today we're selling a special melon bread. It's delicious!"
  }, {
    U: [{next: "freesample", text: null}],
    nodeName: "nomoney",
    V: "questRace",
    tags: {W: ["luckyWorried"]},
    text: "Oh wow! Too bad I don't have any money..."
  }, {
    U: [{next: "decision", text: null}],
    nodeName: "freesample",
    V: "questRace",
    tags: {W: ["conviniNeutral"]},
    text: "No money? No problem! Here's a free sample!"
  }, {
    U: [{
      next: "shouldi",
      text: null
    }], nodeName: "decision", V: "questRace", tags: {W: ["luckyNeutral"]}, text: "Yum! It smells amazing!"
  }, {
    U: [{next: "eatit", text: "Eat it."}, {next: "saveit", text: "Save it."}, {next: "refuse", text: "Refuse it."}],
    nodeName: "shouldi",
    V: "questRace",
    tags: {W: ["luckyNeutral"]},
    text: "I could eat this now... or I could save it for those two racers to unblock the path to the beach..."
  }, {
    U: [],
    nodeName: "eatit",
    V: "questRace",
    tags: {W: ["luckyHappy"]},
    text: "It smells too good! I gotta try it!"
  }, {
    U: [],
    nodeName: "saveit",
    V: "questRace",
    tags: {W: ["luckyNeutral"], zd: ["RACE", "found"]},
    text: "This will be the perfect thing to patch things up between those two racers."
  }, {
    U: [{next: "suitthyself", text: null}],
    nodeName: "refuse",
    V: "questRace",
    tags: {W: ["luckySmileSweatdrop"]},
    text: "Um..no thank you."
  }, {
    U: [],
    nodeName: "suitthyself",
    V: "questRace",
    tags: {W: ["luckySmileSweatdrop"]},
    text: "Oh...I'm sorry it's not to your liking."
  }], [{
    U: [{next: "trophyHint", text: null}], nodeName: "activeTrophy", V: "questRace", tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  }, {
    U: [],
    nodeName: "trophyHint",
    V: "questRace",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Calm the quarreling friends at Marathon Beach with a tasty treat at the Conveince Store in Tanooki City in the South East."
  }], [{
    U: [{next: "next time", text: null}],
    nodeName: "complete",
    V: "questRace",
    tags: {W: ["racerANeutral"]},
    text: "Heh... another squabble caused by not bringing a snack."
  }, {
    U: [], nodeName: "next time", V: "questRace", tags: {W: ["racerBNeutral"]},
    text: "We'll know better next time."
  }], [{
    U: [],
    nodeName: "completeCrab",
    V: "questRace",
    tags: {W: ["crabNeutral"]},
    text: "Did you save any of the melon bread for me...?"
  }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questRace",
    tags: {W: ["luckyNeutral"]},
    text: '"Race Tie Breaker"'
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questRace",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [{next: "racer2rebuttal", text: null}], nodeName: "found", V: "questRace",
    tags: {W: ["racerAMad"]}, text: "Either I go in first, or neither of us does!"
  }, {
    U: [{next: "ahem", text: null}],
    nodeName: "racer2rebuttal",
    V: "questRace",
    tags: {W: ["racerBMad"]},
    text: "You're so immature! If you would just admit I win then this would all be over."
  }, {
    U: [{next: "tryit", text: null}],
    nodeName: "ahem",
    V: "questRace",
    tags: {W: ["luckyRawr"]},
    text: "Ahem... excuse me... do you two want to try this fresh melon bread?"
  }, {U: [{next: "fine2", text: null}], nodeName: "tryit", V: "questRace", tags: {W: ["racerBMad"]}, text: "Fine."},
    {
      U: [{next: "eating", text: null}],
      nodeName: "fine2",
      V: "questRace",
      tags: {W: ["racerAMad"]},
      text: "Fine."
    }, {
      U: [{next: "soothed", text: null}],
      nodeName: "eating",
      V: "questRace",
      tags: {W: ["racerBNeutral"]},
      text: "..."
    }, {
      U: [{next: "longtime", text: null}],
      nodeName: "soothed",
      V: "questRace",
      tags: {W: ["racerANeutral"]},
      text: "Wow, that's delicious. I didn't realize how hungry I was..."
    }, {
      U: [{next: "goon", text: null}],
      nodeName: "longtime",
      V: "questRace",
      tags: {W: ["racerBNeutral"]},
      text: "Me neither... how long were we standing here fighting?"
    },
    {
      U: [{next: "noyou", text: null}],
      nodeName: "goon",
      V: "questRace",
      tags: {W: ["racerANeutral"]},
      text: "You know, I just realized something. It really doesn't matter who won... you're my best friend. I want you to go first."
    }, {
      U: [{next: "tolucky", text: null}],
      nodeName: "noyou",
      V: "questRace",
      tags: {W: ["racerBNeutral"]},
      text: "No, I want YOU to go first! You're MY best friend!"
    }, {
      U: [{next: "thanks", text: null}],
      nodeName: "tolucky",
      V: "questRace",
      tags: {W: ["racerANeutral"], zd: ["RACE", "complete"]},
      text: "Actually, why don't you go on through? We'll follow you."
    },
    {
      U: [],
      nodeName: "thanks",
      V: "questRace",
      tags: {W: ["luckyHappy"]},
      text: "Oh - me? Thanks! I'll see you on the other side!"
    }], [{
    U: [{next: "taketothem", text: null}],
    nodeName: "foundCrab",
    V: "questRace",
    tags: {W: ["crabNeutral"]},
    text: "Oh wow, you got melon bread? My favorite!"
  }, {
    U: [],
    nodeName: "taketothem",
    V: "questRace",
    tags: {W: ["crabNeutral"]},
    text: "Take it to the tree and see if the racers get out of the way."
  }], [{
    U: [{next: "toolong", text: null}], nodeName: "foundMelonBread", V: "questRace", tags: {W: ["conviniNeutral"]},
    text: "Oh, you're saving the melon bread?"
  }, {
    U: [],
    nodeName: "toolong",
    V: "questRace",
    tags: {W: ["conviniNeutral"]},
    text: "Don't wait too long or it will go stale!"
  }], [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questRace",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "lastHint",
    V: "questRace",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Take the Melon Bread to the bickering friends racing at Marathon Beach in the South East. ."
  }], [{
    U: [{
      next: "nome",
      text: null
    }], nodeName: "inactive", V: "questRace", tags: {W: ["racerAMad"]}, text: "I was first!"
  }, {
    U: [{next: "mynose", text: null}],
    nodeName: "nome",
    V: "questRace",
    tags: {W: ["racerBMad"]},
    text: "No, I was! My toe was over the line!"
  }, {
    U: [{next: "no way", text: null}],
    nodeName: "mynose",
    V: "questRace",
    tags: {W: ["racerAMad"]},
    text: "But my nose was already in front!"
  }, {
    U: [{next: "waiting", text: null}],
    nodeName: "no way",
    V: "questRace",
    tags: {W: ["racerBMad"]},
    text: "Well there's no way I'm letting us go on to the secret beach until you admit I won fair and square."
  },
    {
      U: [],
      nodeName: "waiting",
      V: "questRace",
      tags: {W: ["racerAMad"], zd: ["RACE", "active"]},
      text: "You'll be waiting a long time, buddy!"
    }], [{
    U: [],
    nodeName: "inactiveMelonBread",
    V: "questRace",
    tags: {W: ["conviniNeutral"]},
    text: "Welcome to our bakery! Let me know if I can help you with anything."
  }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questRace",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questRace",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Two friends racing at Marathon Beach in the South West seem to be taking the competition a little too far..."
  }, {
    U: [],
    nodeName: "IllBeWatching",
    V: "questRace",
    tags: {W: ["trophyMasterNeutral"]},
    text: "And I'll be watching to see when the task is resolved. Hee hee hee."
  }], [{
    U: [{next: "sunnyDay2", text: null}],
    nodeName: "active",
    V: "questRain",
    tags: {W: ["froggyNeutral"]},
    text: "If you want to cross the bridge, talk to the strange boy outside the Table Tennis Dojo north of here, deep in the bamboo grove."
  },
    {
      U: [],
      nodeName: "sunnyDay2",
      V: "questRain",
      tags: {W: ["froggyNeutral"]},
      text: "Best of luck, after so much rain I think we all could use a sunny day."
    }], [{
    U: [{next: "excuseMe", text: null}],
    nodeName: "activeRainBoy",
    V: "questRain",
    tags: {W: ["rainBoyNeutral"]},
    text: "Rain...yes...keep raining..."
  }, {
    U: [{next: "helloKitty", text: null}],
    nodeName: "excuseMe",
    V: "questRain",
    tags: {W: ["luckyNeutral"]},
    text: "E-excuse me?"
  }, {
    U: [{next: "lessRain", text: null}],
    nodeName: "helloKitty",
    V: "questRain",
    tags: {W: ["rainBoyNeutral"]},
    text: "Oh hello kitty cat. Isn't today a wonderful day?"
  },
    {
      U: [{next: "loveRain", text: null}],
      nodeName: "lessRain",
      V: "questRain",
      tags: {W: ["luckySmileSweatdrop"]},
      text: "It is, but it might be even better if without the rain."
    }, {
      U: [{next: "itDoes", text: null}],
      nodeName: "loveRain",
      V: "questRain",
      tags: {W: ["rainBoyNeutral"]},
      text: "Oh but that's what makes it so wonderful, I LOVE the rain! I'm Amefuri Kozo and rain follows me everywhere!"
    }, {
      U: [{next: "sharing", text: null}],
      nodeName: "itDoes",
      V: "questRain",
      tags: {W: ["luckyWorried"]},
      text: "Follows you?"
    }, {
      U: [{
        next: "whyHere",
        text: null
      }],
      nodeName: "sharing",
      V: "questRain",
      tags: {W: ["rainBoyNeutral"]},
      text: "Yes, and I love sharing it wherever I go!"
    }, {
      U: [{next: "lostMap", text: null}],
      nodeName: "whyHere",
      V: "questRain",
      tags: {W: ["luckySmileSweatdrop"]},
      text: "Hm, well if you love sharing it why have you stayed here so long?"
    }, {
      U: [{next: "illHelp", text: "I'll Help"}, {next: "tooBad", text: "Too bad"}],
      nodeName: "lostMap",
      V: "questRain",
      tags: {W: ["rainBoyNeutral"]},
      text: "Oh...well my plan was to share the Rain all over the island, but after I arrived here the wind from the Tengu's table tennis swings blew my train ticket away."
    },
    {
      U: [{next: "wow", text: null}],
      nodeName: "illHelp",
      V: "questRain",
      tags: {W: ["luckyHappy"]},
      text: "Hmm, maybe I can help you get a new one! I'll check the train station in Tanooki City!"
    }, {
      U: [],
      nodeName: "wow",
      V: "questRain",
      tags: {W: ["rainBoyNeutral"], zd: ["RAIN", "ticket"]},
      text: "Wow...you must love rain as much as I do."
    }, {
      U: [{next: "stillHaveRain", text: null}],
      nodeName: "tooBad",
      V: "questRain",
      tags: {W: ["rainBoyNeutral"]},
      text: "Oh that's too bad..."
    }, {
      U: [], nodeName: "stillHaveRain", V: "questRain", tags: {W: ["rainBoyNeutral"]},
      text: "Well, at least I'll always have the rain."
    }], [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questRain",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  }, {
    U: [],
    nodeName: "trophyHint",
    V: "questRain",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Find the strange boy behind the Table Tennis Dojo and see if you can get to the bottom of why it keeps raining."
  }], [{
    U: [{next: "happyHelp", text: null}], nodeName: "complete", V: "questRain", tags: {W: ["froggyNeutral"]},
    text: "The rain has stopped, the sun is shining and the bridge is open again! You really are a champion, Lucky!"
  }, {
    U: [],
    nodeName: "happyHelp",
    V: "questRain",
    tags: {W: ["luckyHappy"]},
    text: "Aw, I'm just happy to help."
  }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questRain",
    tags: {W: ["luckyNeutral"]},
    text: '"Rain Stopper"'
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questRain",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [{
      next: "maybeLater",
      text: null
    }],
    nodeName: "foundCook",
    V: "questRain",
    tags: {W: ["noodleCookNeutral"]},
    text: "Hi Lucky! You're looking a little skinny, are you ready for your 50 bowls of noodles?? Ohoho."
  }, {
    U: [{next: "YouGotIt", text: null}],
    nodeName: "maybeLater",
    V: "questRain",
    tags: {W: ["luckySmileSweatdrop"]},
    text: "Oh, um...maybe later?"
  }, {
    U: [],
    nodeName: "YouGotIt",
    V: "questRain",
    tags: {W: ["noodleCookNeutral"]},
    text: "Ohoho, any time! but don't forget, a true champion always eats well!"
  }], [{
    U: [{next: "foundIt", text: null}], nodeName: "foundRainBoy",
    V: "questRain", tags: {W: ["rainBoyNeutral"]}, text: "Rain, rain, beautiful Rain."
  }, {
    U: [{next: "TourIsland", text: null}],
    nodeName: "foundIt",
    V: "questRain",
    tags: {W: ["luckyHappy"]},
    text: "Amefuri Kozo! Good news, I found you a train ticket!"
  }, {
    U: [{next: "letsGoRain", text: null}],
    nodeName: "TourIsland",
    V: "questRain",
    tags: {W: ["rainBoyNeutral"]},
    text: "Oh my, a tour of the whole island, how wonderful!"
  }, {
    U: [],
    nodeName: "letsGoRain",
    V: "questRain",
    tags: {W: ["rainBoyNeutral"], zd: ["RAIN", "complete"]},
    text: "Let's go, rain! Everyone is gonna be so excited to see us!"
  }],
  [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questRain",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "lastHint",
    V: "questRain",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Finish up and come back to see your reward, see hee."
  }], [{
    U: [{next: "stranger", text: null}],
    nodeName: "inactive",
    V: "questRain",
    tags: {W: ["froggyNeutral"]},
    text: "You want to cross? Sorry, with all this rain the water has completely covered the bridge!"
  }, {
    U: [{next: "connection", text: null}],
    nodeName: "stranger",
    V: "questRain",
    tags: {W: ["froggyNeutral"]},
    text: "It's been raining since that strange boy arrived behind the Table Tennis Dojo..."
  }, {
    U: [{next: "neverThought", text: null}],
    nodeName: "connection",
    V: "questRain",
    tags: {W: ["luckyCurious"]},
    text: "Stranger? Do you think there's some connection?"
  }, {
    U: [{next: "askThem", text: null}],
    nodeName: "neverThought",
    V: "questRain",
    tags: {W: ["froggyNeutral"]},
    text: "Hm, connection? I never thought of that...maybe he can make it stop!"
  }, {
    U: [{next: "yes", text: "Sure!"},
      {next: "no", text: "No"}],
    nodeName: "askThem",
    V: "questRain",
    tags: {W: ["froggyNeutral"]},
    text: "Would you ask the boy? The whole village would be in your debt!"
  }, {
    U: [{next: "sunnyDay", text: null}],
    nodeName: "yes",
    V: "questRain",
    tags: {W: ["froggyNeutral"], zd: ["RAIN", "active"]},
    text: "Oh thank you! The Table Tennis Dojo is north of here, deep in the bamboo grove."
  }, {
    U: [],
    nodeName: "sunnyDay",
    V: "questRain",
    tags: {W: ["froggyNeutral"]},
    text: "Best of luck, after so much rain I think we all could use a sunny day."
  }, {
    U: [],
    nodeName: "no",
    V: "questRain",
    tags: {W: ["froggyNeutral"]},
    text: "I see. I guess even the Chosen One can't stop the rain from falling..."
  }], [{
    U: [{next: "notHungryRightNow", text: null}],
    nodeName: "inactiveCook",
    V: "questRain",
    tags: {W: ["noodleCookNeutral"]},
    text: "Ohoho, welcome to the Noodle Shop! What can I get you?"
  }, {
    U: [{next: "whatacrime", text: null}],
    nodeName: "notHungryRightNow",
    V: "questRain",
    tags: {W: ["luckyNeutral"]},
    text: "I'm not hungry right now, thank you!"
  }, {
    U: [], nodeName: "whatacrime", V: "questRain",
    tags: {W: ["noodleCookNeutral"]}, text: "Not hungry? Then why would you come in a Noodle Shop..."
  }], [{
    U: [],
    nodeName: "inactiveRainBoy",
    V: "questRain",
    tags: {W: ["rainBoyNeutral"]},
    text: "Rain...yes....beautiful rain....forever..."
  }], [{
    U: [],
    nodeName: "inactiveTrainStation",
    V: "questRain",
    tags: {W: ["trainWorkerNeutral"]},
    text: "Welcome to Tanooki City Station!"
  }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questRain",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{
      next: "wonderBridge",
      text: null
    }],
    nodeName: "questDescription",
    V: "questRain",
    tags: {W: ["trophyMasterNeutral"]},
    text: "It's been raining non-stop in the Bamboo Forest to the North East....very strange."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "wonderBridge",
    V: "questRain",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Someone should check to see if any of the bridges have flooded..."
  }, {
    U: [],
    nodeName: "IllBeWatching",
    V: "questRain",
    tags: {W: ["trophyMasterNeutral"]},
    text: "And I'll be watching to see when the task is resolved. Hee hee hee."
  }],
  [{
    U: [{next: "mightHaveOne", text: null}],
    nodeName: "noodleCook",
    V: "questRain",
    tags: {W: ["noodleCookNeutral"]},
    text: "Ohoho, welcome! What can I get you?"
  }, {
    U: [{next: "trainTicketPromo", text: null}],
    nodeName: "mightHaveOne",
    V: "questRain",
    tags: {W: ["luckyNeutral"]},
    text: "I'm looking for a train ticket, I heard you might have one?"
  }, {
    U: [{next: "fiftyBowls", text: null}],
    nodeName: "trainTicketPromo",
    V: "questRain",
    tags: {W: ["noodleCookNeutral"]},
    text: "OH yes! We are having a special promotion, one free train ticket for every 50 bowls of ramen you order!"
  },
    {
      U: [{next: "championSpecial", text: null}],
      nodeName: "fiftyBowls",
      V: "questRain",
      tags: {W: ["luckyShocked"]},
      text: "50??  I could never eat that much, I have to be in top shape to compete!"
    }, {
    U: [{next: "thatsMe", text: null}],
    nodeName: "championSpecial",
    V: "questRain",
    tags: {W: ["noodleCookNeutral"]},
    text: "Compete? Oh, are you the new Champion that arrived??"
  }, {
    U: [{next: "luckyDay", text: null}],
    nodeName: "thatsMe",
    V: "questRain",
    tags: {W: ["luckyBigGrin"]},
    text: "That's me, Lucky the Cat!"
  }, {
    U: [{next: "ohMy", text: null}],
    nodeName: "luckyDay",
    V: "questRain",
    tags: {W: ["noodleCookNeutral"]},
    text: "Well then today is your lucky day! We have the Champion Discount, 50 bowls free to help you train!"
  }, {
    U: [{next: "allAtOnce", text: null}],
    nodeName: "ohMy",
    V: "questRain",
    tags: {W: ["luckyHide"]},
    text: "Oh my..."
  }, {
    U: [{next: "haveYourTicket", text: null}],
    nodeName: "allAtOnce",
    V: "questRain",
    tags: {W: ["noodleCookNeutral"]},
    text: "Oh don't worry, you don't have to eat them all at once! But you have them waiting!"
  }, {
    U: [{next: "thankNoodle", text: null}],
    nodeName: "haveYourTicket",
    V: "questRain",
    tags: {W: ["noodleCookNeutral"]},
    text: "And don't forget your free train ticket! A Champion should travel in style, ohoho."
  }, {
    U: [{next: "backNoodles", text: null}],
    nodeName: "thankNoodle",
    V: "questRain",
    tags: {W: ["luckyBigGrin"]},
    text: "Oh! Thank you, this is perfect!"
  }, {
    U: [{next: "anyTime", text: null}],
    nodeName: "backNoodles",
    V: "questRain",
    tags: {W: ["luckySmileSweatdrop"]},
    text: "And, um, I'll be back later for all those noodles!"
  }, {
    U: [],
    nodeName: "anyTime",
    V: "questRain",
    tags: {W: ["noodleCookNeutral"], zd: ["RAIN", "found"]},
    text: "Any time! Tell your friends about us, and good luck in the games!"
  }], [{
    U: [],
    nodeName: "noodleTrainStation",
    V: "questRain",
    tags: {W: ["trainWorkerNeutral"]},
    text: "The Noodle Shop is just east of here, hopefully you find a ticket there!"
  }], [{
    U: [{next: "trophymasterbychance", text: null}],
    nodeName: "searchTrainStation",
    V: "questRain",
    tags: {W: ["trainWorkerNeutral"]},
    text: "Welcome to Tanooki City Station!"
  }, {
    U: [{next: "whatmaster", text: null}], nodeName: "trophymasterbychance",
    V: "questRain", tags: {W: ["luckyCurious"]}, text: "Excuse me for asking, but are you the Trophy Master by chance?"
  }, {
    U: [{next: "othercats", text: null}],
    nodeName: "whatmaster",
    V: "questRain",
    tags: {W: ["trainWorkerNeutral"]},
    text: "The what? Sorry, I just watch the train station..."
  }, {
    U: [{next: "calvin", text: null}],
    nodeName: "othercats",
    V: "questRain",
    tags: {W: ["luckyWorried"]},
    text: "I see. I'm looking for another cat on the island that watches the Trophy House."
  }, {
    U: [], nodeName: "calvin", V: "questRain", tags: {W: ["trainWorkerNeutral"]},
    text: "Only other cat I know is Calvin, he's always asleep over on Oni Island."
  }], [{
    U: [{next: "stillLooking", text: null}],
    nodeName: "ticketRainBoy",
    V: "questRain",
    tags: {W: ["rainBoyNeutral"]},
    text: "Any luck finding my train ticket?"
  }, {
    U: [{next: "noRush", text: null}],
    nodeName: "stillLooking",
    V: "questRain",
    tags: {W: ["luckyWideEyeSweat"]},
    text: "I'm still looking!"
  }, {
    U: [],
    nodeName: "noRush",
    V: "questRain",
    tags: {W: ["rainBoyNeutral"]},
    text: "No rush, I don't mind waiting in the rain."
  }], [{
    U: [{next: "oneTicket", text: null}],
    nodeName: "ticketTrainStation",
    V: "questRain",
    tags: {W: ["trainWorkerNeutral"]},
    text: "Good afternoon, what can I do for you?"
  }, {
    U: [{next: "soldOut", text: null}],
    nodeName: "oneTicket",
    V: "questRain",
    tags: {W: ["luckyNeutral"]},
    text: "Hello, I'd like a train ticket to tour the island please!"
  }, {
    U: [{next: "whatToDo", text: null}],
    nodeName: "soldOut",
    V: "questRain",
    tags: {W: ["trainWorkerNeutral"]},
    text: "Oh I'm so sorry, with all the sport events we're sold out..."
  }, {
    U: [{next: "noodleShopDiscount", text: null}], nodeName: "whatToDo",
    V: "questRain", tags: {W: ["luckyShocked"]}, text: "Oh no! There's no way to get a ticket at all??"
  }, {
    U: [{next: "checkNoodleShop", text: null}],
    nodeName: "noodleShopDiscount",
    V: "questRain",
    tags: {W: ["trainWorkerNeutral"]},
    text: "Hmm...the owner of the Noodle Shop down the street is having a promotion, maybe she can help?"
  }, {
    U: [],
    nodeName: "checkNoodleShop",
    V: "questRain",
    tags: {W: ["luckyNeutral"], zd: ["RAIN", "noodle"]},
    text: "I'll check, thank you so much!"
  }], [{
    U: [{next: "leave2", text: null}], nodeName: "active1", V: "questSleepingCat",
    tags: {W: ["sleepyCatNeutral"]}, text: "...go away coach... I'm too sleepy to compete..."
  }, {
    U: [],
    nodeName: "leave2",
    V: "questSleepingCat",
    tags: {W: ["sleepyCatNeutral"], zd: ["SLEEPING_CAT", "active2"]},
    text: "...zzz..."
  }], [{
    U: [{next: "lucky1", text: null}],
    nodeName: "active2",
    V: "questSleepingCat",
    tags: {W: ["sleepyCatNeutral"]},
    text: "...zzz... ehh?! Ugh, fine, I'm awake now. What do you want? Did Coach send you?"
  }, {
    U: [{next: "champstory", text: null}], nodeName: "lucky1", V: "questSleepingCat", tags: {W: ["luckyNeutral"]},
    text: "Who are you?"
  }, {
    U: [{next: "lucky2", text: null}],
    nodeName: "champstory",
    V: "questSleepingCat",
    tags: {W: ["sleepyCatNeutral"]},
    text: "I'm the chosen one. The one who will bring balance to the island."
  }, {
    U: [{next: "champstory2", text: null}],
    nodeName: "lucky2",
    V: "questSleepingCat",
    tags: {W: ["luckyWorried"]},
    text: "I thought I was the chosen one..."
  }, {
    U: [{next: "warm", text: null}],
    nodeName: "champstory2",
    V: "questSleepingCat",
    tags: {W: ["sleepyCatNeutral"]},
    text: "Oh, I guess they already found a new athlete."
  }, {
    U: [{
      next: "lucky3",
      text: null
    }],
    nodeName: "warm",
    V: "questSleepingCat",
    tags: {W: ["sleepyCatNeutral"]},
    text: "I came here a while back to defeat all the champions and gather all the scrolls, but the lava flows here on Oni Island are just too warm and cozy..."
  }, {
    U: [{next: "champstory3", text: null}],
    nodeName: "lucky3",
    V: "questSleepingCat",
    tags: {W: ["luckyNeutral"]},
    text: "Wanna team up and compete together?"
  }, {
    U: [{next: "sashimi", text: null}],
    nodeName: "champstory3",
    V: "questSleepingCat",
    tags: {W: ["sleepyCatNeutral"]},
    text: "Don't know how much you've explored yet, but this island isn't really big enough for two Chosen Ones, champ."
  },
    {
      U: [],
      nodeName: "sashimi",
      V: "questSleepingCat",
      tags: {W: ["sleepyCatNeutral"], zd: ["SLEEPING_CAT", "complete"]},
      text: "I'll sit this one out. Now leave me alone, I was having a really nice dream about some sashimi..."
    }], [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questSleepingCat",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  }, {
    U: [],
    nodeName: "trophyHint",
    V: "questSleepingCat",
    tags: {W: ["trophyMasterNeutral"]},
    text: "The Former Champion is sleeping?? Well sounds like you better keep bothering him, hee hee.."
  }],
  [{
    U: [],
    nodeName: "complete",
    V: "questSleepingCat",
    tags: {W: ["sleepyCatNeutral"], zd: ["SLEEPING_CAT", "complete"]},
    text: "...zzz..."
  }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questSleepingCat",
    tags: {W: ["luckyNeutral"]},
    text: "'Cat Nap Enabler'"
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questSleepingCat",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [{next: "leave", text: null}], nodeName: "inactive", V: "questSleepingCat", tags: {W: ["sleepyCatNeutral"]},
    text: "zzz... don't mind if I do..."
  }, {
    U: [],
    nodeName: "leave",
    V: "questSleepingCat",
    tags: {W: ["luckyNeutral"], zd: ["SLEEPING_CAT", "active1"]},
    text: "Oops, sorry."
  }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questSleepingCat",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questSleepingCat",
    tags: {W: ["trophyMasterNeutral"]},
    text: "There was another Chosen One before you, poor thing. I wonder what happened to him, he was always sleeping..."
  },
    {
      U: [],
      nodeName: "IllBeWatching",
      V: "questSleepingCat",
      tags: {W: ["trophyMasterNeutral"]},
      text: "And I'll be watching to see when the task is resolved. Hee hee hee."
    }], [{
    U: [{next: "wakeup", text: null}],
    nodeName: "searchSleepingCat",
    V: "questSleepingCat",
    tags: {W: ["sleepyCatNeutral"]},
    text: "zzzz"
  }, {
    U: [{next: "youagain", text: null}],
    nodeName: "wakeup",
    V: "questSleepingCat",
    tags: {W: ["luckyCurious"]},
    text: "Hey, wake up!"
  }, {
    U: [{next: "youtrophy", text: null}], nodeName: "youagain", V: "questSleepingCat", tags: {W: ["sleepyCatNeutral"]},
    text: "Oh, it's you again..."
  }, {
    U: [{next: "agirl", text: null}],
    nodeName: "youtrophy",
    V: "questSleepingCat",
    tags: {W: ["luckyCurious"]},
    text: "Sorry to bother you, but by any chance are you the Trophy Master?"
  }, {
    U: [{next: "seenher", text: null}],
    nodeName: "agirl",
    V: "questSleepingCat",
    tags: {W: ["sleepyCatNeutral"]},
    text: "Me? Of course not, the Trophy Master is a girl."
  }, {
    U: [{next: "boat", text: null}],
    nodeName: "seenher",
    V: "questSleepingCat",
    tags: {W: ["luckyCurious"]},
    text: "Oh! So you've seen her?"
  }, {
    U: [{
      next: "check",
      text: null
    }],
    nodeName: "boat",
    V: "questSleepingCat",
    tags: {W: ["sleepyCatNeutral"]},
    text: "Last I saw her she was heading to one of the boat houses in the Archery Docks in the North West, but that was months ago."
  }, {
    U: [{next: "suresure", text: null}],
    nodeName: "check",
    V: "questSleepingCat",
    tags: {W: ["luckyCurious"]},
    text: "Oh, thank you! I'll go check!"
  }, {
    U: [],
    nodeName: "suresure",
    V: "questSleepingCat",
    tags: {W: ["sleepyCatNeutral"], zd: ["TROPHY_MASTER", "boat"]},
    text: "Sure sure, just don't wake me up again."
  }], [{
    U: [],
    nodeName: "advanced1",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "Have you found the secret skate park yet?"
  }], [{
    U: [],
    nodeName: "advanced2",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "There are 3 different songs in the synchonised swimming area."
  }], [{
    U: [],
    nodeName: "advanced3",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "The secret beach is where the long distance runners like to hang out, have you been yet?"
  }], [{
    U: [],
    nodeName: "advanced4",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "Powerups are the key to winning Rugby."
  }],
  [{
    U: [],
    nodeName: "advanced5",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "The more obstacles you avoid in Marathon, the faster you run!"
  }], [{
    U: [],
    nodeName: "advanced6",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "Be careful of the green handholds on Climbing Mountain, they tend to fall!"
  }], [{
    U: [],
    nodeName: "elite1",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "Our team leader always keeps her eye on who's in first place."
  }], [{
    U: [], nodeName: "elite2", V: "questTeamBlue", tags: {W: ["ushiNeutral"]},
    text: "Wow, you must be the cat everyone's been talking about. It's an honor!"
  }], [{
    U: [],
    nodeName: "elite3",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "Team Yellow is gonna be in first place, I just know it!"
  }], [{
    U: [],
    nodeName: "elite4",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "No one's ever become an Elite Memeber besides the Team Leader, we're only here as guards!"
  }], [{
    U: [],
    nodeName: "elite5",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "The Team Leader has been waiting to meet you."
  }],
  [{
    U: [],
    nodeName: "elite6",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "I have to go to the bathroom but I'm on duty..."
  }], [{
    U: [],
    nodeName: "frontGuardLocked",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "This is Team Blue's private gym, only members allowed!"
  }], [{
    U: [{next: "welcometohq", text: null}],
    nodeName: "frontGuardUnlocked",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "Oho, I see you're a member of Team Blue."
  }, {
    U: [],
    nodeName: "welcometohq",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "Welcome to our private gym, come on in!"
  }],
  [{
    U: [],
    nodeName: "hq1GuardLocked",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "Sorry, this room is for Advanced Members only.  You need 3 Champion Scrolls to gain access."
  }], [{
    U: [],
    nodeName: "hq1GuardUnlocked",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "You've won enough scrolls to join to the Advanced Members! Team Blue thanks you for your hard work!"
  }], [{
    U: [],
    nodeName: "hq2GuardLocked",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "Sorry, this room is for Elite Members only. You need 6 Champion Scrolls to gain access."
  }],
  [{
    U: [],
    nodeName: "hq2GuardUnlocked",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "You've won enough scrolls to join to the Elite Members! Our Team Leader is excited to meet you!"
  }], [{
    U: [{next: "notforme", text: null}],
    nodeName: "lockedFrontDoor",
    V: "questTeamBlue",
    tags: {W: ["luckyCurious"]},
    text: "It's locked..."
  }, {
    U: [],
    nodeName: "notforme",
    V: "questTeamBlue",
    tags: {W: ["luckyWorried"]},
    text: "Maybe I should find my own team's headquarters instead."
  }], [{
    U: [], nodeName: "member1", V: "questTeamBlue", tags: {W: ["ushiNeutral"]},
    text: "This is our private gym, it's the best place to get strong!"
  }], [{
    U: [],
    nodeName: "member2",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "If I keep practicing, I know one day I can beat a Champion and earn a scroll!"
  }], [{
    U: [],
    nodeName: "member3",
    V: "questTeamBlue",
    tags: {W: ["ushiNeutral"]},
    text: "There are rumors that some sports have more difficult versions hidden throughout the island..."
  }], [{
    U: [{next: "theleader", text: null}],
    nodeName: "teamLeaderLosing",
    V: "questTeamBlue",
    tags: {W: ["leaderBlueNeutral"]},
    text: "Oh, Lucky. I've heard a lot about you."
  }, {
    U: [{next: "notdone", text: null}],
    nodeName: "theleader",
    V: "questTeamBlue",
    tags: {W: ["leaderBlueNeutral"]},
    text: "I am the leader of Team Blue, and I'm very proud of what you've done for our team."
  }, {
    U: [],
    nodeName: "notdone",
    V: "questTeamBlue",
    tags: {W: ["leaderBlueNeutral"]},
    text: "But our work is not done! Team Blue is behind on the leaderboard. We cannot rest until we are the strongest!"
  }], [{
    U: [{next: "theleader2", text: null}], nodeName: "teamLeaderWinning", V: "questTeamBlue",
    tags: {W: ["leaderBlueNeutral"]}, text: "Oh, Lucky. I've heard a lot about you."
  }, {
    U: [{next: "winning", text: null}],
    nodeName: "theleader2",
    V: "questTeamBlue",
    tags: {W: ["leaderBlueNeutral"]},
    text: "I am the leader of Team Blue, and I'm very proud of what you've done for our team."
  }, {
    U: [{next: "keepgoodwork", text: null}],
    nodeName: "winning",
    V: "questTeamBlue",
    tags: {W: ["leaderBlueNeutral"]},
    text: "And Team Blue is currently in first place!"
  }, {
    U: [], nodeName: "keepgoodwork", V: "questTeamBlue", tags: {W: ["leaderBlueNeutral"]},
    text: "Keep up your hard work to the very end, and Team Blue will win the Champion Island Games!"
  }], [{
    U: [],
    nodeName: "advanced1",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "Have you found the secret skate park yet?"
  }], [{
    U: [],
    nodeName: "advanced2",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "There are 3 different songs in the synchonised swimming area."
  }], [{
    U: [],
    nodeName: "advanced3",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "The secret beach is where the long distance runners like to hang out, have you been yet?"
  }],
  [{
    U: [],
    nodeName: "advanced4",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "Powerups are the key to winning Rugby."
  }], [{
    U: [],
    nodeName: "advanced5",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "The more obstacles you avoid in Marathon, the faster you run!"
  }], [{
    U: [],
    nodeName: "advanced6",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "Be careful of the green handholds on Climbing Mountain, they tend to fall!"
  }], [{
    U: [],
    nodeName: "elite1",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "Our team leader always keeps her eye on who's in first place."
  }],
  [{
    U: [],
    nodeName: "elite2",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "Wow, you must be the cat everyone's been talking about. It's an honor!"
  }], [{
    U: [],
    nodeName: "elite3",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "Team Green is gonna be in first place, I just know it!"
  }], [{
    U: [],
    nodeName: "elite4",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "No one's ever become an Elite Memeber besides the Team Leader, we're only here as guards!"
  }], [{
    U: [], nodeName: "elite5", V: "questTeamGreen", tags: {W: ["kappaNeutral"]},
    text: "The Team Leader has been waiting to meet you."
  }], [{
    U: [],
    nodeName: "elite6",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "I have to go to the bathroom but I'm on duty..."
  }], [{
    U: [],
    nodeName: "frontGuardLocked",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "Kappa!"
  }], [{
    U: [{next: "welcometohq", text: null}],
    nodeName: "frontGuardUnlocked",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "Kappa!"
  }, {
    U: [{next: "comeonin", text: null}], nodeName: "welcometohq", V: "questTeamGreen", tags: {W: ["kappaNeutral"]},
    text: "Oh wait, you're a member of Team Green aren't you? I can talk normally."
  }, {
    U: [],
    nodeName: "comeonin",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "Come on in to our headquarters and relax!"
  }], [{
    U: [],
    nodeName: "hq1GuardLocked",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "Sorry, this room is for Advanced Members only.  You need 3 Champion Scrolls to gain access."
  }], [{
    U: [],
    nodeName: "hq1GuardUnlocked",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "You've won enough scrolls to join to the Advanced Members! Team Green thanks you for your hard work!"
  }],
  [{
    U: [],
    nodeName: "hq2GuardLocked",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "Sorry, this room is for Elite Members only. You need 6 Champion Scrolls to gain access."
  }], [{
    U: [],
    nodeName: "hq2GuardUnlocked",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "You've won enough scrolls to join to the Elite Members! Our Team Leader is excited to meet you!"
  }], [{
    U: [{next: "notforme", text: null}],
    nodeName: "lockedFrontDoor",
    V: "questTeamGreen",
    tags: {W: ["luckyCurious"]},
    text: "It's locked..."
  }, {
    U: [], nodeName: "notforme",
    V: "questTeamGreen", tags: {W: ["luckyWorried"]}, text: "Maybe I should find my own team's headquarters instead."
  }], [{
    U: [{next: "inwater", text: null}],
    nodeName: "member1",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "Welcome to our headquarters!"
  }, {
    U: [],
    nodeName: "inwater",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "Kappa are most comfortable in water, I hope you don't mind."
  }], [{
    U: [],
    nodeName: "member2",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "If I keep practicing, I know one day I can beat a Champion and earn a scroll!"
  }],
  [{
    U: [],
    nodeName: "member3",
    V: "questTeamGreen",
    tags: {W: ["kappaNeutral"]},
    text: "There are rumors that some sports have more difficult versions hidden throughout the island..."
  }], [{
    U: [{next: "theleader", text: null}],
    nodeName: "teamLeaderLosing",
    V: "questTeamGreen",
    tags: {W: ["leaderGreenNeutral"]},
    text: "Oh, Lucky. I've heard a lot about you."
  }, {
    U: [{next: "notdone", text: null}],
    nodeName: "theleader",
    V: "questTeamGreen",
    tags: {W: ["leaderGreenNeutral"]},
    text: "I am the leader of Team Green, and I'm very proud of what you've done for our team."
  },
    {
      U: [],
      nodeName: "notdone",
      V: "questTeamGreen",
      tags: {W: ["leaderGreenNeutral"]},
      text: "But our work is not done! Team Green is behind on the leaderboard. We cannot rest until we are on top!"
    }], [{
    U: [{next: "theleader2", text: null}],
    nodeName: "teamLeaderWinning",
    V: "questTeamGreen",
    tags: {W: ["leaderGreenNeutral"]},
    text: "Oh, Lucky. I've heard a lot about you."
  }, {
    U: [{next: "winning", text: null}],
    nodeName: "theleader2",
    V: "questTeamGreen",
    tags: {W: ["leaderGreenNeutral"]},
    text: "I am the leader of Team Green, and I'm very proud of what you've done for our team."
  },
    {
      U: [{next: "keepgoodwork", text: null}],
      nodeName: "winning",
      V: "questTeamGreen",
      tags: {W: ["leaderGreenNeutral"]},
      text: "And Team Green is currently in first place!"
    }, {
      U: [],
      nodeName: "keepgoodwork",
      V: "questTeamGreen",
      tags: {W: ["leaderGreenNeutral"]},
      text: "Keep up your hard work to the very end and Team Green is sure to triumph. Kappa!"
    }], [{
    U: [],
    nodeName: "advanced1",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "Have you found the secret skate park yet?"
  }], [{
    U: [], nodeName: "advanced2", V: "questTeamRed", tags: {W: ["karasuNeutral"]},
    text: "There are 3 different songs in the synchonised swimming area."
  }], [{
    U: [],
    nodeName: "advanced3",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "The secret beach is where the long distance runners like to hang out, have you been yet?"
  }], [{
    U: [],
    nodeName: "advanced4",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "Powerups are the key to winning Rugby."
  }], [{
    U: [],
    nodeName: "advanced5",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "The more obstacles you avoid in Marathon, the faster you run!"
  }],
  [{
    U: [],
    nodeName: "advanced6",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "Be careful of the green handholds on Climbing Mountain, they tend to fall!"
  }], [{
    U: [],
    nodeName: "elite1",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "Our team leader always keeps her eye on who's in first place."
  }], [{
    U: [],
    nodeName: "elite2",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "Wow, you must be the cat everyone's been talking about. It's an honor!"
  }], [{
    U: [], nodeName: "elite3", V: "questTeamRed", tags: {W: ["karasuNeutral"]},
    text: "Team Red is gonna be in first place, I just know it!"
  }], [{
    U: [],
    nodeName: "elite4",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "No one's ever become an Elite Memeber besides the Team Leader, we're only here as guards!"
  }], [{
    U: [],
    nodeName: "elite5",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "The Team Leader has been waiting to meet you."
  }], [{
    U: [],
    nodeName: "elite6",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "I have to go to the bathroom but I'm on duty..."
  }], [{
    U: [],
    nodeName: "frontGuardLocked",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "The Research Library is only for members of Team Red. Kindly leave."
  }], [{
    U: [{next: "welcometohq", text: null}],
    nodeName: "frontGuardUnlocked",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "Oho, I see you're a member of Team Red."
  }, {
    U: [],
    nodeName: "welcometohq",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "Welcome to our Research Library, please feel free to come in and relax."
  }], [{
    U: [], nodeName: "hq1GuardLocked", V: "questTeamRed", tags: {W: ["karasuNeutral"]},
    text: "Sorry, this room is for Advanced Members only.  You need 3 Champion Scrolls to gain access."
  }], [{
    U: [],
    nodeName: "hq1GuardUnlocked",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "You've won enough scrolls to join to the Advanced Members! Team Red thanks you for your hard work!"
  }], [{
    U: [],
    nodeName: "hq2GuardLocked",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "Sorry, this room is for Elite Members only. You need 6 Champion Scrolls to gain access."
  }], [{
    U: [],
    nodeName: "hq2GuardUnlocked",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "You've won enough scrolls to join to the Elite Members! Our Team Leader is excited to meet you!"
  }], [{
    U: [{next: "notforme", text: null}],
    nodeName: "lockedFrontDoor",
    V: "questTeamRed",
    tags: {W: ["luckyCurious"]},
    text: "It's locked..."
  }, {
    U: [],
    nodeName: "notforme",
    V: "questTeamRed",
    tags: {W: ["luckyWorried"]},
    text: "Maybe I should find my own team's headquarters instead."
  }], [{
    U: [{next: "knowledge", text: null}],
    nodeName: "member1",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "Team Red loves reading so much we made our headquarters a Library."
  },
    {
      U: [],
      nodeName: "knowledge",
      V: "questTeamRed",
      tags: {W: ["karasuNeutral"]},
      text: "Please take advantage of all the knowledge there is learn here."
    }], [{
    U: [],
    nodeName: "member2",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "If I keep practicing, I know one day I can beat a Champion and earn a scroll!"
  }], [{
    U: [],
    nodeName: "member3",
    V: "questTeamRed",
    tags: {W: ["karasuNeutral"]},
    text: "There are rumors that some sports have more difficult versions hidden throughout the island..."
  }], [{
    U: [{next: "theleader", text: null}],
    nodeName: "teamLeaderLosing",
    V: "questTeamRed",
    tags: {W: ["leaderRedNeutral"]},
    text: "Oh, Lucky. I've heard a lot about you."
  }, {
    U: [{next: "notdone", text: null}],
    nodeName: "theleader",
    V: "questTeamRed",
    tags: {W: ["leaderRedNeutral"]},
    text: "I am the leader of Team Red, and I'm very proud of what you've done for our team."
  }, {
    U: [],
    nodeName: "notdone",
    V: "questTeamRed",
    tags: {W: ["leaderRedNeutral"]},
    text: "But our work is not done! Team Red is behind on the leaderboard. We cannot rest until our numbers improve!"
  }], [{
    U: [{
      next: "theleader2",
      text: null
    }],
    nodeName: "teamLeaderWinning",
    V: "questTeamRed",
    tags: {W: ["leaderRedNeutral"]},
    text: "Oh, Lucky. I've heard a lot about you."
  }, {
    U: [{next: "winning", text: null}],
    nodeName: "theleader2",
    V: "questTeamRed",
    tags: {W: ["leaderRedNeutral"]},
    text: "I am the leader of Team Red, and I'm very proud of what you've done for our team."
  }, {
    U: [{next: "keepgoodwork", text: null}],
    nodeName: "winning",
    V: "questTeamRed",
    tags: {W: ["leaderRedNeutral"]},
    text: "And Team Red is currently in first place!"
  }, {
    U: [],
    nodeName: "keepgoodwork",
    V: "questTeamRed",
    tags: {W: ["leaderRedNeutral"]},
    text: "Keep up your hard work to the very end, and Team Red will triumph!"
  }], [{
    U: [],
    nodeName: "advanced1",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "Have you found the secret skate park yet?"
  }], [{
    U: [],
    nodeName: "advanced2",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "There are 3 different songs in the synchonised swimming area."
  }], [{
    U: [],
    nodeName: "advanced3",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "The secret beach is where the long distance runners like to hang out, have you been yet?"
  }],
  [{
    U: [],
    nodeName: "advanced4",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "Powerups are the key to winning Rugby."
  }], [{
    U: [],
    nodeName: "advanced5",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "The more obstacles you avoid in Marathon, the faster you run!"
  }], [{
    U: [],
    nodeName: "advanced6",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "Be careful of the green handholds on Climbing Mountain, they tend to fall!"
  }], [{
    U: [],
    nodeName: "elite1",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "Our team leader always keeps her eye on who's in first place."
  }],
  [{
    U: [],
    nodeName: "elite2",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "Wow, you must be the cat everyone's been talking about. It's an honor!"
  }], [{
    U: [],
    nodeName: "elite3",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "Team Yellow is gonna be in first place, I just know it!"
  }], [{
    U: [],
    nodeName: "elite4",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "No one's ever become an Elite Memeber besides the Team Leader, we're only here as guards!"
  }], [{
    U: [], nodeName: "elite5", V: "questTeamYellow",
    tags: {W: ["inariNeutral"]}, text: "The Team Leader has been waiting to meet you."
  }], [{
    U: [],
    nodeName: "elite6",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "I have to go to the bathroom but I'm on duty..."
  }], [{
    U: [],
    nodeName: "frontGuardLocked",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "This is a totally normal house and has nothing to do with Team Yellow. Off you go!"
  }], [{
    U: [{next: "welcometohq", text: null}],
    nodeName: "frontGuardUnlocked",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "Oho, I see you're a member of Team Yellow."
  },
    {
      U: [],
      nodeName: "welcometohq",
      V: "questTeamYellow",
      tags: {W: ["inariNeutral"]},
      text: "Welcome to our secret headquarters, come right in."
    }], [{
    U: [],
    nodeName: "hq1GuardLocked",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "Sorry, this room is for Advanced Members only.  You need 3 Champion Scrolls to gain access."
  }], [{
    U: [],
    nodeName: "hq1GuardUnlocked",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "You've won enough scrolls to join to the Advanced Members! Team Yellow thanks you for your hard work!"
  }],
  [{
    U: [],
    nodeName: "hq2GuardLocked",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "Sorry, this room is for Elite Members only. You need 6 Champion Scrolls to gain access."
  }], [{
    U: [],
    nodeName: "hq2GuardUnlocked",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "You've won enough scrolls to join to the Elite Members! Our Team Leader is excited to meet you!"
  }], [{
    U: [{next: "notforme", text: null}],
    nodeName: "lockedFrontDoor",
    V: "questTeamYellow",
    tags: {W: ["luckyCurious"]},
    text: "It's locked..."
  }, {
    U: [], nodeName: "notforme",
    V: "questTeamYellow", tags: {W: ["luckyWorried"]}, text: "Maybe I should find my own team's headquarters instead."
  }], [{
    U: [],
    nodeName: "member1",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "This is our secret headqueaters, don't tell anyone about it!"
  }], [{
    U: [],
    nodeName: "member2",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "If I keep practicing, I know one day I can beat a Champion and earn a scroll!"
  }], [{
    U: [],
    nodeName: "member3",
    V: "questTeamYellow",
    tags: {W: ["inariNeutral"]},
    text: "There are rumors that some sports have more difficult versions hidden throughout the island..."
  }],
  [{
    U: [{next: "theleader", text: null}],
    nodeName: "teamLeaderLosing",
    V: "questTeamYellow",
    tags: {W: ["leaderYellowNeutral"]},
    text: "Oh, Lucky. I've heard a lot about you."
  }, {
    U: [{next: "notdone", text: null}],
    nodeName: "theleader",
    V: "questTeamYellow",
    tags: {W: ["leaderYellowNeutral"]},
    text: "I am the leader of Team Yellow, and I'm very proud of what you've done for our team."
  }, {
    U: [],
    nodeName: "notdone",
    V: "questTeamYellow",
    tags: {W: ["leaderYellowNeutral"]},
    text: "But our work is not done! Team Yellow is behind on the leaderboard. We cannot rest until we are number 1!"
  }],
  [{
    U: [{next: "theleader2", text: null}],
    nodeName: "teamLeaderWinning",
    V: "questTeamYellow",
    tags: {W: ["leaderYellowNeutral"]},
    text: "Oh, Lucky. I've heard a lot about you."
  }, {
    U: [{next: "winning", text: null}],
    nodeName: "theleader2",
    V: "questTeamYellow",
    tags: {W: ["leaderYellowNeutral"]},
    text: "I am the leader of Team Yellow, and I'm very proud of what you've done for our team."
  }, {
    U: [{next: "keepgoodwork", text: null}],
    nodeName: "winning",
    V: "questTeamYellow",
    tags: {W: ["leaderYellowNeutral"]},
    text: "And Team Yellow is currently in first place!"
  },
    {
      U: [],
      nodeName: "keepgoodwork",
      V: "questTeamYellow",
      tags: {W: ["leaderYellowNeutral"]},
      text: "Keep up your hard work to the very end, and Team Yellow will win the Champion Island Games!"
    }], [{
    U: [{next: "hint", text: "No..."}],
    nodeName: "active",
    V: "questTrainTracks",
    tags: {W: ["ushiNeutral"]},
    text: "You learn the password yet?"
  }, {
    U: [{next: "impress", text: null}],
    nodeName: "hint",
    V: "questTrainTracks",
    tags: {W: ["ushiNeutral"]},
    text: "The skaters at the Dojo in the center of town might be willing to let you in..."
  }, {
    U: [],
    nodeName: "impress", V: "questTrainTracks", tags: {W: ["ushiNeutral"]}, text: "If you impress them, that is."
  }], [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questTrainTracks",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  }, {
    U: [],
    nodeName: "trophyHint",
    V: "questTrainTracks",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Need the password for the Secret Skate Park across the train tracks? Check at the Skate Dojo."
  }], [{
    U: [], nodeName: "complete", V: "questTrainTracks",
    tags: {W: ["ushiNeutral"]}, text: "Click on the Red Gate to try the secret skatepark!"
  }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questTrainTracks",
    tags: {W: ["luckyNeutral"]},
    text: "'Secret Skatepark Membership'"
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questTrainTracks",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{
    U: [{next: "teakettle", text: "Tea Kettle!"}],
    nodeName: "found",
    V: "questTrainTracks",
    tags: {W: ["ushiNeutral"]},
    text: "You learn the password yet?"
  },
    {
      U: [],
      nodeName: "teakettle",
      V: "questTrainTracks",
      tags: {W: ["ushiNeutral"], zd: ["TRAIN_TRACKS", "complete"]},
      text: "That's it! Follow the gate and enjoy the new park!"
    }], [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questTrainTracks",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "lastHint",
    V: "questTrainTracks",
    tags: {W: ["trophyMasterNeutral"]},
    text: "TEA KETTLE is the password to the Secret Skate Park across the train tracks in Tanooki City. Go check it out, hee hee."
  }],
  [{
    U: [{next: "password", text: "Yeah!"}, {next: "no", text: "Nah."}],
    nodeName: "inactive",
    V: "questTrainTracks",
    tags: {W: ["ushiNeutral"]},
    text: "Curious about the other side of the train tracks?"
  }, {
    U: [{next: "wronganswer", text: "Tanooki?"}, {next: "wronganswer", text: "Skateboard?"}, {
      next: "dontknow",
      text: "I dunno."
    }],
    nodeName: "password",
    V: "questTrainTracks",
    tags: {W: ["ushiNeutral"]},
    text: "That's the EXCLUSIVE Skatepark. You need the secret password to get in, I assume you know it?"
  }, {
    U: [], nodeName: "no", V: "questTrainTracks",
    tags: {W: ["ushiNeutral"]}, text: "...then you better move along."
  }, {
    U: [{next: "askaround", text: null}],
    nodeName: "wronganswer",
    V: "questTrainTracks",
    tags: {W: ["ushiNeutral"], zd: ["TRAIN_TRACKS", "active"]},
    text: "HA! Nice try. No entry without the password."
  }, {
    U: [{next: "askaround", text: null}],
    nodeName: "dontknow",
    V: "questTrainTracks",
    tags: {W: ["ushiNeutral"], zd: ["TRAIN_TRACKS", "active"]},
    text: "No entry without the password!"
  }, {
    U: [],
    nodeName: "askaround",
    V: "questTrainTracks",
    tags: {W: ["ushiNeutral"]},
    text: "Members hang out at the Dojo in the center of town, maybe ask them."
  }],
  [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questTrainTracks",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questTrainTracks",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Did you ever notice how the train tracks in Tanooki City are always down?"
  }, {
    U: [],
    nodeName: "IllBeWatching",
    V: "questTrainTracks",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I wonder if there's anything on the other side..hee hee hee."
  }],
  [{
    U: [{next: "whatsthepassword", text: null}],
    nodeName: "active",
    V: "questTrainTracksPassword",
    tags: {W: ["inariNeutral"]},
    text: "Hehehe I'm so excited, I just got access to the secret skatepark!"
  }, {
    U: [{next: "dotdotdot", text: null}],
    nodeName: "whatsthepassword",
    V: "questTrainTracksPassword",
    tags: {W: ["inariNeutral"]},
    text: "What's the password? I'll never tell. And who would ever guess...TEA KETTLE, it's brilliant!."
  }, {
    U: [{next: "slipup", text: null}],
    nodeName: "dotdotdot",
    V: "questTrainTracksPassword",
    tags: {W: ["inariNeutral"]},
    text: "..."
  }, {
    U: [],
    nodeName: "slipup",
    V: "questTrainTracksPassword",
    tags: {W: ["inariNeutral"], zd: ["TRAIN_TRACKS", "found"]},
    text: "... you didn't hear that from me. Hehehe."
  }], [{
    U: [{next: "greatmoves", text: null}],
    nodeName: "complete",
    V: "questTrainTracksPassword",
    tags: {W: ["inariNeutral"]},
    text: "I saw you at the secret skatepark..."
  }, {
    U: [],
    nodeName: "greatmoves",
    V: "questTrainTracksPassword",
    tags: {W: ["inariNeutral"]},
    text: "...you've got some great moves!"
  }], [{
    U: [], nodeName: "found", V: "questTrainTracksPassword",
    tags: {W: ["inariNeutral"]}, text: "hehehe...TEA KETTLE...hehehe"
  }], [{
    U: [{next: "firstHint", text: null}],
    nodeName: "active",
    V: "questTrophy",
    tags: {W: [""]},
    text: "XXX"
  }, {U: [], nodeName: "firstHint", V: "questTrophy", tags: {W: [""]}, text: "XXX"}], [{
    U: [{
      next: "trophyHint",
      text: null
    }],
    nodeName: "activeTrophy",
    V: "questTrophy",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  }, {U: [], nodeName: "trophyHint", V: "questTrophy", tags: {W: ["trophyMasterNeutral"]}, text: "XXX"}], [{
    U: [],
    nodeName: "complete", V: "questTrophy", tags: {W: [""]}, text: "XXX"
  }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questTrophy",
    tags: {W: ["luckyNeutral"]},
    text: '"TROPHYNAME"'
  }, {
    U: [],
    nodeName: "StillWatching",
    V: "questTrophy",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I saw the whole thing, you were magnificent. Hee hee."
  }], [{U: [{next: "thanks", text: null}], nodeName: "found", V: "questTrophy", tags: {W: [""]}, text: "XXX"}, {
    U: [], nodeName: "thanks", V: "questTrophy", tags: {W: [""], zd: ["NAME", "complete"]},
    text: "XXX"
  }], [{
    U: [{next: "lastHint", text: null}],
    nodeName: "foundTrophy",
    V: "questTrophy",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "lastHint",
    V: "questTrophy",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Finish up and come back to see your reward, see hee."
  }], [{
    U: [{next: "yes", text: "Sure!"}, {next: "no", text: "No."}],
    nodeName: "inactive",
    V: "questTrophy",
    tags: {W: [""]},
    text: "XXX"
  }, {U: [], nodeName: "yes", V: "questTrophy", tags: {W: [""], zd: ["NAME", "active"]}, text: "XXX"},
    {
      U: [{next: "changeMind", text: null}],
      nodeName: "no",
      V: "questTrophy",
      tags: {W: [""]},
      text: "XXX"
    }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questTrophy",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [],
    nodeName: "questDescription",
    V: "questTrophy",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Hee hee hee hee hee hee."
  }], [{
    U: [{next: "visisting", text: null}],
    nodeName: "active2Lions",
    V: "questTrophyMaster",
    tags: {W: ["koma1Neutral"]},
    text: "Lucky...what are you doing in there?"
  },
    {
      U: [{next: "whattrophy", text: null}],
      nodeName: "visisting",
      V: "questTrophyMaster",
      tags: {W: ["luckyNeutral"]},
      text: "Huh? I was just visiting the Trophy Master."
    }, {
      U: [{next: "missing2", text: "Missing?"}, {next: "thenwho", text: "Not True"}],
      nodeName: "whattrophy",
      V: "questTrophyMaster",
      tags: {W: ["koma2Neutral"]},
      text: "Trophy Master? But...the Trophy Master has been missing for months!"
    }, {
      U: [{next: "dissapeared", text: null}],
      nodeName: "missing2",
      V: "questTrophyMaster",
      tags: {W: ["luckyNeutral"]},
      text: "Missing? What happened?"
    },
    {
      U: [{next: "thenwho", text: null}],
      nodeName: "dissapeared",
      V: "questTrophyMaster",
      tags: {W: ["koma1Neutral"]},
      text: "No one knows, she just disappeared!"
    }, {
      U: [{next: "whatbird", text: null}],
      nodeName: "thenwho",
      V: "questTrophyMaster",
      tags: {W: ["luckyNeutral"]},
      text: "That's not true, the Trophy Master is in there now! A nice old crane who watches my every move."
    }, {
      U: [{next: "imposter", text: null}],
      nodeName: "whatbird",
      V: "questTrophyMaster",
      tags: {W: ["koma2Neutral"]},
      text: "A crane? Lucky...the Trophy Master is a cat, same as you!"
    },
    {
      U: [{next: "howcanthisbe", text: null}],
      nodeName: "imposter",
      V: "questTrophyMaster",
      tags: {W: ["koma1Neutral"]},
      text: "An imposter!"
    }, {
      U: [{next: "betternot2", text: null}],
      nodeName: "howcanthisbe",
      V: "questTrophyMaster",
      tags: {W: ["luckyWorried"]},
      text: "This can't be true...all this time..."
    }, {
      U: [{next: "maybecheck2", text: null}],
      nodeName: "betternot2",
      V: "questTrophyMaster",
      tags: {W: ["koma2Neutral"]},
      text: "It sounds like something fishy is going on...you better not go back in there."
    }, {
      U: [{next: "butwhere2", text: null}],
      nodeName: "maybecheck2",
      V: "questTrophyMaster",
      tags: {W: ["koma1Neutral"]},
      text: "You have to find the true Trophy Master!"
    }, {
      U: [{next: "cat2", text: null}],
      nodeName: "butwhere2",
      V: "questTrophyMaster",
      tags: {W: ["luckyCurious"]},
      text: "But where do I even begin to look?"
    }, {
      U: [{next: "hmmm2", text: null}],
      nodeName: "cat2",
      V: "questTrophyMaster",
      tags: {W: ["koma2Neutral"]},
      text: "Think! Have you seen an other cats anywhere on the island?"
    }, {
      U: [], nodeName: "hmmm2", V: "questTrophyMaster", tags: {
        W: ["luckyWorried"], zd: ["TROPHY_MASTER",
          "search"]
      }, text: "Hmmm, as a matter of fact I have..."
    }], [{
    U: [],
    nodeName: "active2Master",
    V: "questTrophyMaster",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Hee hee hee hee hee hee hee hee."
  }], [{
    U: [{next: "donttrust", text: null}],
    nodeName: "active2Trophy",
    V: "questTrophyMaster",
    tags: {W: ["trophyMasterNeutral"]},
    text: "You'd better stay away from there Lucky, hee hee."
  }, {
    U: [],
    nodeName: "donttrust",
    V: "questTrophyMaster",
    tags: {W: ["luckyWorried"]},
    text: "It says 'Don't trust the bird.'"
  }], [{
    U: [{next: "doMyBest", text: null}],
    nodeName: "activeMaster",
    V: "questTrophyMaster",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Check back here any time you want to see the trophies you've earned. Or if you need a reminder of what to do next!"
  }], [{
    U: [{next: "donttrust2", text: null}],
    nodeName: "activeTrophy",
    V: "questTrophyMaster",
    tags: {W: ["luckyNeutral"]},
    text: "There's something written here..."
  }, {
    U: [{next: "whatdoing2", text: null}],
    nodeName: "donttrust2",
    V: "questTrophyMaster",
    tags: {W: [""]},
    text: "'Don't trust the bird.'"
  }, {
    U: [{next: "nnothing2", text: "Nothing!"},
      {next: "whatisthis2", text: "What's this?"}],
    nodeName: "whatdoing2",
    V: "questTrophyMaster",
    tags: {W: ["trophyMasterNeutral"], zd: ["TROPHY_MASTER", "active"]},
    text: "...what are you doing over there Lucky?"
  }, {
    U: [{next: "heeheehee2", text: null}],
    nodeName: "whatisthis2",
    V: "questTrophyMaster",
    tags: {W: ["luckyWorried"]},
    text: "Why does this spot say 'Don't trust the bird'"
  }, {
    U: [{next: "heeheeheehee2", text: null}],
    nodeName: "heeheehee2",
    V: "questTrophyMaster",
    tags: {W: ["trophyMasterNeutral"]},
    text: "What? Oh....well you can't believe everything you read. Hee hee."
  },
    {
      U: [],
      nodeName: "heeheeheehee2",
      V: "questTrophyMaster",
      tags: {W: ["trophyMasterNeutral"], zd: ["TROPHY_MASTER", "active2"]},
      text: "Hee hee hee hee."
    }, {
      U: [],
      nodeName: "nnothing2",
      V: "questTrophyMaster",
      tags: {W: ["luckyWorried"]},
      text: "N-nothing!"
    }], [{
    U: [{next: "catshate", text: null}],
    nodeName: "boatBoatHouse",
    V: "questTrophyMaster",
    tags: {W: ["luckyCurious"]},
    text: "A whirlpool? I think see something at the bottom..."
  }, {
    U: [{next: "jump", text: "Jump in!"}, {next: "stay", text: "No way."}],
    nodeName: "catshate",
    V: "questTrophyMaster",
    tags: {W: ["luckyHide"]},
    text: "But could the Trophy Master be down there? Cats hate water..."
  }, {
    U: [],
    nodeName: "jump",
    V: "questTrophyMaster",
    tags: {W: ["luckyCurious"], zd: ["TROPHY_MASTER", "underwater"]},
    text: "Only one way to find out!"
  }, {
    U: [],
    nodeName: "stay",
    V: "questTrophyMaster",
    tags: {W: ["luckyHide"]},
    text: "I don't think I'm ready yet..."
  }], [{
    U: [{next: "getgoingboat", text: null}],
    nodeName: "boatLions",
    V: "questTrophyMaster",
    tags: {W: ["luckyCurious"]},
    text: "The Trophy Master was last seen heading to a boat house in the North West Docks!"
  },
    {
      U: [],
      nodeName: "getgoingboat",
      V: "questTrophyMaster",
      tags: {W: ["koma2Neutral"]},
      text: "Well don't tell us that, head to the North West Docks!"
    }], [{
    U: [],
    nodeName: "boatSleepingCat",
    V: "questTrophyMaster",
    tags: {W: ["sleepingCatNeutral"]},
    text: "Zzz...last saw the Trophy Master in the North West Docks...zzz"
  }], [{
    U: [{next: "wherefindher", text: null}],
    nodeName: "completeLions",
    V: "questTrophyMaster",
    tags: {W: ["koma1Neutral"]},
    text: "Lucky, you did it! The Trophy Master just returned."
  }, {
    U: [{next: "longstoryyy", text: null}],
    nodeName: "wherefindher", V: "questTrophyMaster", tags: {W: ["koma2Neutral"]}, text: "Where did you find her??"
  }, {
    U: [],
    nodeName: "longstoryyy",
    V: "questTrophyMaster",
    tags: {W: ["luckySmileSweatdrop"]},
    text: "It's kind of a long story..."
  }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questTrophyMaster",
    tags: {W: ["luckyNeutral"]},
    text: '"Trophy Master Locator"'
  }, {
    U: [{next: "mag", text: null}],
    nodeName: "StillWatching",
    V: "questTrophyMaster",
    tags: {W: ["momoNeutral"]},
    text: "Thank you Lucky!"
  }, {
    U: [],
    nodeName: "mag", V: "questTrophyMaster", tags: {W: ["trophyMasterNeutral"]}, text: "You were...a true Champion!"
  }], [{
    U: [{next: "thankyoufor", text: null}],
    nodeName: "completeTrophyMaster",
    V: "questTrophyMaster",
    tags: {W: ["luckyNeutral"]},
    text: "Momo, you made it back!"
  }, {
    U: [{next: "appo", text: null}],
    nodeName: "thankyoufor",
    V: "questTrophyMaster",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Yes, thank you for finding her Lucky, hee hee."
  }, {
    U: [{next: "embarssed", text: null}], nodeName: "appo", V: "questTrophyMaster", tags: {W: ["trophyMasterNeutral"]},
    text: "Apologies if my warning note was alarming, but I promised Momo I wouldn't say she had left."
  }, {
    U: [{next: "gettingworried", text: null}],
    nodeName: "embarssed",
    V: "questTrophyMaster",
    tags: {W: ["luckyCurious"]},
    text: "So it was you who wrote the warning!"
  }, {
    U: [{next: "stillfinish", text: null}],
    nodeName: "gettingworried",
    V: "questTrophyMaster",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Hee hee, yes. But it turns out I had nothing to worry about, Momo is safe and sound!"
  }, {
    U: [{next: "plentyoftime", text: null}], nodeName: "stillfinish",
    V: "questTrophyMaster", tags: {W: ["momoNeutral"]}, text: "But I still have to finish the game..."
  }, {
    U: [],
    nodeName: "plentyoftime",
    V: "questTrophyMaster",
    tags: {W: ["luckyHappy"]},
    text: "Don't worry, you still have plenty of time!"
  }], [{
    U: [{next: "withme", text: null}],
    nodeName: "computer",
    V: "questTrophyMaster",
    tags: {W: ["luckyCurious"]},
    text: "A computer..."
  }, {
    U: [],
    nodeName: "withme",
    V: "questTrophyMaster",
    tags: {W: ["luckyShocked"]},
    text: "...with me on the screen??"
  }], [{
    U: [{next: "whoAre", text: null}], nodeName: "inactiveMaster",
    V: "questTrophyMaster", tags: {W: ["trophyMasterNeutral"]}, text: "Oh. Hello Lucky."
  }, {
    U: [{next: "whoAm", text: null}],
    nodeName: "whoAre",
    V: "questTrophyMaster",
    tags: {W: ["luckyNeutral"]},
    text: "H-how do you know my name?"
  }, {
    U: [{next: "myJob", text: null}],
    nodeName: "whoAm",
    V: "questTrophyMaster",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh I'm a BIG fan, hee hee."
  }, {
    U: [{next: "beautifulTrophy", text: null}],
    nodeName: "myJob",
    V: "questTrophyMaster",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I've been watching all the amazing things you've been doing since you arrived. That's my job, I'm the Trophy Master."
  },
    {
      U: [{next: "wow", text: null}],
      nodeName: "beautifulTrophy",
      V: "questTrophyMaster",
      tags: {W: ["trophyMasterNeutral"]},
      text: "I keep track of everything that happens on the island. When someone does something amazing, I make sure they are rewarded with a beautiful trophy!"
    }, {
      U: [{next: "notOnlyThat", text: null}],
      nodeName: "wow",
      V: "questTrophyMaster",
      tags: {W: ["luckyNeutral"]},
      text: "Wow, that sounds like a fun job!"
    }, {
      U: [{next: "youHave", text: null}],
      nodeName: "notOnlyThat",
      V: "questTrophyMaster",
      tags: {W: ["trophyMasterNeutral"]},
      text: "It's very rewarding, hee hee. And I've already seen the amazing things that YOU have accomplished."
    }, {
      U: [{next: "goodFeeling", text: null}],
      nodeName: "youHave",
      V: "questTrophyMaster",
      tags: {W: ["luckyNeutral"]},
      text: "M-me?"
    }, {
      U: [{next: "moreWays", text: null}],
      nodeName: "goodFeeling",
      V: "questTrophyMaster",
      tags: {W: ["trophyMasterNeutral"]},
      text: "Oh yes, I've got a good feeling about you."
    }, {
      U: [{next: "checkBack", text: null}],
      nodeName: "moreWays",
      V: "questTrophyMaster",
      tags: {W: ["trophyMasterNeutral"]},
      text: "There are more ways to get trophies than just winning sports. Helping people deserves rewarding too."
    },
    {
      U: [{next: "doMyBest", text: null}],
      nodeName: "checkBack",
      V: "questTrophyMaster",
      tags: {W: ["trophyMasterNeutral"]},
      text: "Check back here any time you want to see the trophies you've earned. Or if you need a reminder of what to do next!"
    }, {
      U: [{next: "ohIKnow", text: null}],
      nodeName: "doMyBest",
      V: "questTrophyMaster",
      tags: {W: ["luckyNeutral"]},
      text: "Thanks, I'll do my best!"
    }, {
      U: [],
      nodeName: "ohIKnow",
      V: "questTrophyMaster",
      tags: {W: ["trophyMasterNeutral"], zd: ["TROPHY_MASTER", "idle"]},
      text: "Oh, I know. Hee hee."
    }],
  [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questTrophyMaster",
    tags: {W: ["luckyNeutral"]},
    text: "Hm, what's this one for?"
  }, {
    U: [],
    nodeName: "questDescription",
    V: "questTrophyMaster",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, don't worry about that one. Hee hee."
  }], [{
    U: [{next: "maybecheck3", text: null}],
    nodeName: "searchLions",
    V: "questTrophyMaster",
    tags: {W: ["koma2Neutral"]},
    text: "It sounds like something fishy is going on...you better not go back in there."
  }, {
    U: [{
      next: "othercats3",
      text: null
    }],
    nodeName: "maybecheck3",
    V: "questTrophyMaster",
    tags: {W: ["koma1Neutral"]},
    text: "The Trophy Master is a cat, same as you."
  }, {
    U: [{next: "matofac3", text: null}],
    nodeName: "othercats3",
    V: "questTrophyMaster",
    tags: {W: ["koma2Neutral"]},
    text: "Have you seen an other cats anywhere on the island?"
  }, {
    U: [{next: "sleepingcat3", text: null}],
    nodeName: "matofac3",
    V: "questTrophyMaster",
    tags: {W: ["luckyWorried"]},
    text: "Hmmm, as a matter of fact I have..."
  }, {
    U: [], nodeName: "sleepingcat3", V: "questTrophyMaster", tags: {W: ["luckyCurious"]},
    text: "There was a sleeping cat on Oni Island! I'll go check!"
  }], [{
    U: [{next: "imlucky", text: null}],
    nodeName: "unterwaterTrophyMaster",
    V: "questTrophyMaster",
    tags: {W: ["momoBlue"]},
    text: "W-who are you?"
  }, {
    U: [{next: "immomo", text: null}],
    nodeName: "imlucky",
    V: "questTrophyMaster",
    tags: {W: ["luckyHide"]},
    text: "I'm Lucky the cat. A-are you the Trophy Master?"
  }, {
    U: [{next: "fromhere", text: null}],
    nodeName: "immomo",
    V: "questTrophyMaster",
    tags: {W: ["momoBlue"]},
    text: "Oh, yes...but that was more of a side job. My name's Momo."
  },
    {
      U: [{next: "halloweendoodle", text: null}],
      nodeName: "fromhere",
      V: "questTrophyMaster",
      tags: {W: ["luckyWorried"]},
      text: "Momo? That sounds familiar..."
    }, {
      U: [{next: "lovedreally", text: null}],
      nodeName: "halloweendoodle",
      V: "questTrophyMaster",
      tags: {W: ["luckyShocked"]},
      text: "Oh! You're the cat from the Halloween Google Doodle! I loved that game!!"
    }, {
      U: [{next: "smallworld", text: null}],
      nodeName: "lovedreally",
      V: "questTrophyMaster",
      tags: {W: ["momoBlue"]},
      text: "Wait...does that mean you're Lucky from the Champion Island Google Doodle? I've been playing it for days!"
    },
    {
      U: [{next: "controllingme", text: null}],
      nodeName: "smallworld",
      V: "questTrophyMaster",
      tags: {W: ["luckyHappy"]},
      text: "Wow, what a small world!"
    }, {
      U: [{next: "controlmomo", text: null}],
      nodeName: "controllingme",
      V: "questTrophyMaster",
      tags: {W: ["luckyCurious"]},
      text: "Wait...does that mean you've been controlling me this whole time?"
    }, {
      U: [{next: "dotdotdotlucky", text: null}],
      nodeName: "controlmomo",
      V: "questTrophyMaster",
      tags: {W: ["momoBlue"]},
      text: "But wouldn't that mean you were controlling me??"
    }, {
      U: [{
        next: "dotdotdotmomo",
        text: null
      }], nodeName: "dotdotdotlucky", V: "questTrophyMaster", tags: {W: ["luckyCurious"]}, text: "..."
    }, {
      U: [{next: "notexistential", text: null}],
      nodeName: "dotdotdotmomo",
      V: "questTrophyMaster",
      tags: {W: ["momoBlue"]},
      text: "..."
    }, {
      U: [{next: "everyoneslooking", text: null}],
      nodeName: "notexistential",
      V: "questTrophyMaster",
      tags: {W: ["luckySmileSweatdrop"]},
      text: "Well, let's not get too existential!"
    }, {
      U: [{next: "hiding", text: null}],
      nodeName: "everyoneslooking",
      V: "questTrophyMaster",
      tags: {W: ["luckyCurious"]},
      text: "Everyone on Champion Island has been looking for you!"
    },
    {
      U: [{next: "askedcrane", text: null}],
      nodeName: "hiding",
      V: "questTrophyMaster",
      tags: {W: ["momoBlue"]},
      text: "Oh, I guess I lost track of time."
    }, {
      U: [{next: "comeback", text: null}],
      nodeName: "askedcrane",
      V: "questTrophyMaster",
      tags: {W: ["momoBlue"]},
      text: "I asked my friend the crane to watch the Trophy House while I tried to finish your game, but it's very long!"
    }, {
      U: [{next: "notsobadcrane", text: null}],
      nodeName: "comeback",
      V: "questTrophyMaster",
      tags: {W: ["luckyWorried"]},
      text: "The crane is your friend? He seemed so creepy..."
    },
    {
      U: [{next: "comebackup", text: null}],
      nodeName: "notsobadcrane",
      V: "questTrophyMaster",
      tags: {W: ["momoBlue"]},
      text: "Oh he's not so bad, just has a funny laugh."
    }, {
      U: [{next: "sure", text: null}],
      nodeName: "comebackup",
      V: "questTrophyMaster",
      tags: {W: ["luckyCurious"]},
      text: "Would you like to come back to the island with me? Everyone will be excited to see you!"
    }, {
      U: [],
      nodeName: "sure",
      V: "questTrophyMaster",
      tags: {W: ["momoBlue"], zd: ["TROPHY_MASTER", "complete"]},
      text: "Of course, they must all be so worried! I'll meet you at the Trophy House!"
    }],
  [{
    U: [{next: "areYouThe", text: null}],
    nodeName: "activeSister1",
    V: "questWaterGate",
    tags: {W: ["sister1Neutral"]},
    text: "Leave me alone...I can't stand all this competition."
  }, {
    U: [{next: "longBehindMe", text: null}],
    nodeName: "areYouThe",
    V: "questWaterGate",
    tags: {W: ["luckyNeutral"]},
    text: "Excuse me, are you one of the sisters who built the red gate in the water?"
  }, {
    U: [{next: "gateSankAfter", text: null}],
    nodeName: "longBehindMe",
    V: "questWaterGate",
    tags: {W: ["sister1Neutral"]},
    text: "Bah, a mistake of my youth, yes."
  },
    {
      U: [{next: "goodRiddance", text: null}],
      nodeName: "gateSankAfter",
      V: "questWaterGate",
      tags: {W: ["luckyNeutral"]},
      text: "You must return to the gate, it sank after you and your sisters left!"
    }, {
    U: [{next: "why", text: null}],
    nodeName: "goodRiddance",
    V: "questWaterGate",
    tags: {W: ["sister1Neutral"]},
    text: "Good riddance! That gate and all sports are nothing but trouble!"
  }, {
    U: [{next: "why2", text: null}],
    nodeName: "why",
    V: "questWaterGate",
    tags: {W: ["luckyNeutral"]},
    text: "Trouble? Why? I love sports!"
  }, {
    U: [{
      next: "discipline",
      text: "Discipline"
    }, {next: "fun", text: "Fun!"}, {next: "accomplishment", text: "Accomplishment"}],
    nodeName: "why2",
    V: "questWaterGate",
    tags: {W: ["sister1Neutral"]},
    text: "They're all nothing but needless competition. What good has sports ever done anyone?"
  }, {
    U: [{next: "zzz", text: null}],
    nodeName: "fun",
    V: "questWaterGate",
    tags: {W: ["sister1Neutral"]},
    text: "Fun?? You know what's more fun than sports? Sleeping all day.  Which reminds me..."
  }, {U: [], nodeName: "zzz", V: "questWaterGate", tags: {W: ["sister1Neutral"]}, text: "Zzzzzzz..."},
    {
      U: [],
      nodeName: "accomplishment",
      V: "questWaterGate",
      tags: {W: ["sister1Neutral"]},
      text: "Accomplishment? For every winner there's a loser, I don't want to be a part of that."
    }, {
    U: [{next: "okIllGo", text: null}],
    nodeName: "discipline",
    V: "questWaterGate",
    tags: {W: ["sister1Neutral"]},
    text: "Discipline? Hmm...maybe you're right. A lot of young people these days could use more discipline"
  }, {
    U: [{next: "climbingMountainNext", text: null}],
    nodeName: "okIllGo",
    V: "questWaterGate",
    tags: {W: ["sister1Neutral"]},
    text: "Alright, I'll go back! But good luck getting my other sisters to come.  One of them is up on top of Climbing Mountain!"
  },
    {
      U: [],
      nodeName: "climbingMountainNext",
      V: "questWaterGate",
      tags: {W: ["luckyWorried"], zd: ["WATER_GATE", "sister2"]},
      text: "Hm, sounds like I should try Climbing Mountain next..."
    }], [{
    U: [{next: "behindMe", text: null}],
    nodeName: "activeSister2",
    V: "questWaterGate",
    tags: {W: ["luckyNeutral"]},
    text: "Excuse me? Are you one of the sisters who built the red gate in the water?"
  }, {
    U: [{next: "whyLeftBehind", text: null}],
    nodeName: "behindMe",
    V: "questWaterGate",
    tags: {W: ["sister2Neutral"]},
    text: "Oh...um, yes. But I'm afraid I left all that behind me."
  },
    {
      U: [{next: "quiteImpossible", text: null}],
      nodeName: "whyLeftBehind",
      V: "questWaterGate",
      tags: {W: ["luckyNeutral"]},
      text: "You should come back! The gate sank after you and your sisters left."
    }, {
      U: [{next: "foundPeace", text: null}],
      nodeName: "quiteImpossible",
      V: "questWaterGate",
      tags: {W: ["sister2Neutral"]},
      text: "Oh how dreadful. But I'm afraid returning would be quite impossible."
    }, {
      U: [{next: "whyReturn", text: null}],
      nodeName: "foundPeace",
      V: "questWaterGate",
      tags: {W: ["sister2Neutral"]},
      text: "I used to love climbing, but once I reached the top I looked out on the land below and I found peace."
    },
    {
      U: [{next: "family", text: "Family"}, {next: "fame", text: "Fame"}, {next: "money", text: "Money"}],
      nodeName: "whyReturn",
      V: "questWaterGate",
      tags: {W: ["sister2Neutral"]},
      text: "Why would I possibly want to return?"
    }, {
      U: [{next: "sorryIllStay", text: null}],
      nodeName: "family",
      V: "questWaterGate",
      tags: {W: ["sister2Neutral"]},
      text: "Family? My sisters you mean? To be honest I've enjoyed the quiet without them."
    }, {
      U: [{next: "sorryIllStay", text: null}],
      nodeName: "fame",
      V: "questWaterGate",
      tags: {W: ["sister2Neutral"]},
      text: "Fame? Tempting, but it sounds very noisy, I like the quiet."
    },
    {
      U: [],
      nodeName: "sorryIllStay",
      V: "questWaterGate",
      tags: {W: ["sister2Neutral"]},
      text: "Sorry, I think I'll stay put."
    }, {
      U: [{next: "theresMoney", text: null}],
      nodeName: "money",
      V: "questWaterGate",
      tags: {W: ["sister2Neutral"]},
      text: "..."
    }, {
      U: [{next: "unexpected", text: null}],
      nodeName: "theresMoney",
      V: "questWaterGate",
      tags: {W: ["sister2Neutral"]},
      text: "....there's money involved? I'll be right there!"
    }, {
      U: [{next: "notForMe", text: null}],
      nodeName: "unexpected",
      V: "questWaterGate",
      tags: {W: ["luckyAnnoyed"]},
      text: "Really? Money is what you want?"
    },
    {
      U: [{next: "whatBirds", text: null}],
      nodeName: "notForMe",
      V: "questWaterGate",
      tags: {W: ["sister2Neutral"]},
      text: "Not for me! I want to build a beautiful bird house for all the little birds up here."
    }, {
      U: [{next: "seeYouThere", text: null}],
      nodeName: "whatBirds",
      V: "questWaterGate",
      tags: {W: ["luckyAnnoyed"]},
      text: "I don't see any birds...."
    }, {
      U: [],
      nodeName: "seeYouThere",
      V: "questWaterGate",
      tags: {W: ["sister2Neutral"], zd: ["WATER_GATE", "sister3"]},
      text: "Well you should be looking for my last sister, she moved to Tanooki City in the South West!"
    }],
  [{
    U: [{next: "sorryToWakeYou", text: null}],
    nodeName: "activeSister3",
    V: "questWaterGate",
    tags: {W: ["sister3Neutral"]},
    text: "Zzz..."
  }, {
    U: [{next: "hmwhat", text: null}],
    nodeName: "sorryToWakeYou",
    V: "questWaterGate",
    tags: {W: ["luckyNeutral"]},
    text: "Um, excuse me ma'am?"
  }, {
    U: [{next: "sorrytodisturb", text: null}],
    nodeName: "hmwhat",
    V: "questWaterGate",
    tags: {W: ["sister3Neutral"]},
    text: "Zzz...hm what?? Who's there??"
  }, {
    U: [{next: "ohThatOldThing", text: null}],
    nodeName: "sorrytodisturb",
    V: "questWaterGate",
    tags: {W: ["luckyNeutral"]},
    text: "Sorry to disturb you, I'm looking for the sisters who built the red gate out in the water."
  }, {
    U: [{next: "soTired", text: null}],
    nodeName: "ohThatOldThing",
    V: "questWaterGate",
    tags: {W: ["sister3Neutral"]},
    text: "You woke me to talk about that old thing?? Please leave me be, I just want to sleep."
  }, {
    U: [{next: "ranTooMuch", text: null}],
    nodeName: "soTired",
    V: "questWaterGate",
    tags: {W: ["luckyNeutral"]},
    text: "Sleep in the middle of a festival? Don't you want to join in the fun?"
  }, {
    U: [{next: "reallyFast", text: null}],
    nodeName: "ranTooMuch",
    V: "questWaterGate",
    tags: {W: ["sister3Neutral"]},
    text: "Oh I had plenty of fun back in my day. I ran so much I used up all my energy. Just the thought of standing is enough to make me drowsy."
  }, {
    U: [{next: "iwasthefast", text: null}],
    nodeName: "reallyFast",
    V: "questWaterGate",
    tags: {W: ["luckyNeutral"]},
    text: "Wow, you must have been really fast to make tired all these years later."
  }, {
    U: [{next: "ibelieve", text: "I believe you!"}, {next: "iheard", text: "I heard..."}],
    nodeName: "iwasthefast",
    V: "questWaterGate",
    tags: {W: ["sister3Neutral"]},
    text: "I was the FASTEST! And don't let my sisters tell you otherwise."
  }, {
    U: [{next: "yougotthatright", text: null}],
    nodeName: "ibelieve",
    V: "questWaterGate",
    tags: {W: ["luckyNeutral"]},
    text: "I believe you, you must have been incredible!"
  }, {
    U: [{next: "bigzs", text: null}],
    nodeName: "yougotthatright",
    V: "questWaterGate",
    tags: {W: ["sister3Neutral"]},
    text: "You got that right. And I've earned...zzz...a little....zzz....nap..."
  }, {
    U: [], nodeName: "bigzs", V: "questWaterGate", tags: {W: ["sister3Neutral"]},
    text: "Zzzzzzzzz..."
  }, {
    U: [{next: "whosaidwhat", text: null}],
    nodeName: "iheard",
    V: "questWaterGate",
    tags: {W: ["luckyNeutral"]},
    text: "Oh, that's not what I heard..."
  }, {
    U: [{next: "lostit", text: "Lost it"}, {next: "cheater", text: "Cheater"}, {
      next: "respect",
      text: "Respect you"
    }],
    nodeName: "whosaidwhat",
    V: "questWaterGate",
    tags: {W: ["sister3Neutral"]},
    text: "What!  What have my sisters been saying about me??"
  }, {
    U: [{next: "somadicould", text: null}],
    nodeName: "lostit",
    V: "questWaterGate",
    tags: {W: ["luckyNeutral"]},
    text: "They said you've lost it, you're all washed up."
  },
    {
      U: [{next: "bigzs", text: null}],
      nodeName: "somadicould",
      V: "questWaterGate",
      tags: {W: ["sister3Neutral"]},
      text: "WHAT? Why those two...they make me so angry I could just....just..."
    }, {
    U: [{next: "illshowthem", text: null}],
    nodeName: "cheater",
    V: "questWaterGate",
    tags: {W: ["luckyNeutral"]},
    text: "They said you were cheating the whole time."
  }, {
    U: [{next: "bigzs", text: null}],
    nodeName: "illshowthem",
    V: "questWaterGate",
    tags: {W: ["sister3Neutral"]},
    text: "CHEATING?? Why I'll show them...what...cheating...zz...is..."
  }, {
    U: [{
      next: "theysaidwha",
      text: null
    }],
    nodeName: "respect",
    V: "questWaterGate",
    tags: {W: ["luckyNeutral"]},
    text: "They both said they love and respect you."
  }, {
    U: [{next: "sonice", text: null}],
    nodeName: "theysaidwha",
    V: "questWaterGate",
    tags: {W: ["sister3Neutral"]},
    text: "THEY SAID WHA-"
  }, {
    U: [{next: "alltheseyears", text: null}],
    nodeName: "sonice",
    V: "questWaterGate",
    tags: {W: ["sister3Neutral"]},
    text: "Wait...really? That's...that's so nice of them."
  }, {
    U: [{next: "umthewatergate", text: null}],
    nodeName: "alltheseyears",
    V: "questWaterGate",
    tags: {W: ["sister3Neutral"]},
    text: "After all these years, they must have changed. I must see them! Where did you say they are?"
  }, {
    U: [{next: "reunion", text: null}],
    nodeName: "umthewatergate",
    V: "questWaterGate",
    tags: {W: ["luckyNeutral"]},
    text: "At the sunken water gate!"
  }, {
    U: [],
    nodeName: "reunion",
    V: "questWaterGate",
    tags: {W: ["sister3Neutral"], zd: ["WATER_GATE", "found"]},
    text: "Oh, the perfect spot for a reunion. Thank you sweet child."
  }], [{
    U: [{next: "trophyHint", text: null}],
    nodeName: "activeTrophy",
    V: "questWaterGate",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Looks like you're in the middle of helping out with this one."
  }, {
    U: [],
    nodeName: "trophyHint",
    V: "questWaterGate",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Find the three sister who built the sunken red gate and convince them to return home!"
  }], [{
    U: [],
    nodeName: "complete",
    V: "questWaterGate",
    tags: {W: ["gatekeeperNeutral"]},
    text: "The gate is so beautiful, I wonder where it leads..."
  }], [{
    U: [],
    nodeName: "completeSister1",
    V: "questWaterGate",
    tags: {W: ["sister1Neutral"]},
    text: "It's good to be home."
  }], [{
    U: [],
    nodeName: "completeSister2", V: "questWaterGate", tags: {W: ["sister2Neutral"]}, text: "Wait...where's the money?"
  }], [{
    U: [{next: "zzzsagain", text: null}],
    nodeName: "completeSister3",
    V: "questWaterGate",
    tags: {W: ["sister3Neutral"]},
    text: "My sisters! How I missed them! I'm so happy I could...could..."
  }, {
    U: [],
    nodeName: "zzzsagain",
    V: "questWaterGate",
    tags: {W: ["sister3Neutral"]},
    text: "Zzzzzzzzz..."
  }], [{
    U: [{next: "StillWatching", text: null}],
    nodeName: "completeTrophy",
    V: "questWaterGate",
    tags: {W: ["luckyNeutral"]},
    text: '"Sister Reunion Organizer"'
  },
    {
      U: [],
      nodeName: "StillWatching",
      V: "questWaterGate",
      tags: {W: ["trophyMasterNeutral"]},
      text: "I saw the whole thing, you were magnificent. Hee hee."
    }], [{
    U: [{next: "lookatthegate", text: null}],
    nodeName: "found",
    V: "questWaterGate",
    tags: {W: ["gatekeeperNeutral"]},
    text: "Incredible, all three sisters have returned!"
  }, {
    U: [],
    nodeName: "lookatthegate",
    V: "questWaterGate",
    tags: {W: ["gatekeeperNeutral"], zd: ["WATER_GATE", "complete"]},
    text: "The Gate! Look, it's moving!"
  }], [{
    U: [{next: "lastHint", text: null}], nodeName: "foundTrophy",
    V: "questWaterGate", tags: {W: ["trophyMasterNeutral"]}, text: "You've almost got this one finished!"
  }, {
    U: [],
    nodeName: "lastHint",
    V: "questWaterGate",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Return to the sunken red gate to see if the three sisters can make it rise!."
  }], [{
    U: [{next: "sameday", text: null}],
    nodeName: "inactive",
    V: "questWaterGate",
    tags: {W: ["gatekeeperNeutral"]},
    text: "Long ago there was once a beautiful red gate out in the water, but one day it sunk into the water..."
  }, {
    U: [{next: "threeSisters", text: null}],
    nodeName: "sameday",
    V: "questWaterGate",
    tags: {W: ["luckyCurious"]},
    text: "Oh my! Does anyone know what happened to it?"
  }, {
    U: [{next: "leftGarden", text: null}],
    nodeName: "threeSisters",
    V: "questWaterGate",
    tags: {W: ["gatekeeperNeutral"]},
    text: "The gate was built by three sisters, each one a great athlete."
  }, {
    U: [{next: "afterThat", text: null}],
    nodeName: "leftGarden",
    V: "questWaterGate",
    tags: {W: ["gatekeeperNeutral"]},
    text: "But as time went on, they won games less and less.  Eventually they all stopped playing sports completely."
  },
    {
      U: [{next: "stillLive", text: null}],
      nodeName: "afterThat",
      V: "questWaterGate",
      tags: {W: ["gatekeeperNeutral"]},
      text: "Not long after that the sisters all moved away and the gate disappeared."
    }, {
      U: [{next: "returnGate", text: null}],
      nodeName: "stillLive",
      V: "questWaterGate",
      tags: {W: ["gatekeeperNeutral"]},
      text: "Each still lives on the island, although they are now quite old. The gate disappeared not long after they left."
    }, {
      U: [{next: "hadntThought", text: null}], nodeName: "returnGate", V: "questWaterGate", tags: {W: ["luckyWorried"]},
      text: "Maybe if the sisters return, the gate would appear again!"
    }, {
      U: [{next: "doYouDare", text: null}],
      nodeName: "hadntThought",
      V: "questWaterGate",
      tags: {W: ["gatekeeperNeutral"]},
      text: "I think you're right. Many have tried, but they always refuse. They've become quite stubborn I'm afraid."
    }, {
      U: [{next: "yes", text: "Yes"}, {next: "no", text: "No"}],
      nodeName: "doYouDare",
      V: "questWaterGate",
      tags: {W: ["gatekeeperNeutral"]},
      text: "Would you be willing to try to convince them?"
    }, {
      U: [{next: "soBrave", text: null}], nodeName: "yes",
      V: "questWaterGate", tags: {W: ["luckyNeutral"]}, text: "Of course, I'll do anything I can!"
    }, {
      U: [{next: "firstSister", text: null}],
      nodeName: "soBrave",
      V: "questWaterGate",
      tags: {W: ["gatekeeperNeutral"]},
      text: "Oh, you are so eager! Maybe your optimistic spirit is just what they need to hear."
    }, {
      U: [],
      nodeName: "firstSister",
      V: "questWaterGate",
      tags: {W: ["gatekeeperNeutral"], zd: ["WATER_GATE", "sister1"]},
      text: "The first sister lives in a small hut out on Marathon Beach in the South East. Start there!"
    }, {
      U: [{
        next: "changeMind",
        text: null
      }], nodeName: "no", V: "questWaterGate", tags: {W: ["luckyWorried"]}, text: "Hmm, I don't know if I can help."
    }, {
      U: [],
      nodeName: "changeMind",
      V: "questWaterGate",
      tags: {W: ["gatekeeperNeutral"]},
      text: "Definitely not with that attitude! Come back when you feel more confident."
    }], [{
    U: [],
    nodeName: "inactiveSister1",
    V: "questWaterGate",
    tags: {W: ["sister1Neutral"]},
    text: "Leave me alone...I can't stand all this competition."
  }], [{
    U: [],
    nodeName: "inactiveSister2",
    V: "questWaterGate",
    tags: {W: ["sister2Neutral"]},
    text: "So nice to be up here away from it all..."
  }],
  [{
    U: [],
    nodeName: "inactiveSister3",
    V: "questWaterGate",
    tags: {W: ["sister3Neutral"]},
    text: "Zzz..."
  }], [{
    U: [{next: "questDescription", text: null}],
    nodeName: "inactiveTrophy",
    V: "questWaterGate",
    tags: {W: ["trophyMasterNeutral"]},
    text: "Oh, I'm saving that spot."
  }, {
    U: [{next: "IllBeWatching", text: null}],
    nodeName: "questDescription",
    V: "questWaterGate",
    tags: {W: ["trophyMasterNeutral"]},
    text: "There's a sunken red gate in the Bridge Garden in the West. I wonder if it could rise again..."
  }, {
    U: [],
    nodeName: "IllBeWatching",
    V: "questWaterGate",
    tags: {W: ["trophyMasterNeutral"]},
    text: "I'll be watching to see when the task is resolved. Hee hee hee."
  }], [{
    U: [{next: "findfirstSister", text: null}],
    nodeName: "sister1Gatekeeper",
    V: "questWaterGate",
    tags: {W: ["gatekeeperNeutral"]},
    text: "Find the three sisters and the gate will rise again!"
  }, {
    U: [],
    nodeName: "findfirstSister",
    V: "questWaterGate",
    tags: {W: ["gatekeeperNeutral"]},
    text: "The first sister lives in a small hut out on Marathon Beach in the South East. Start there!"
  }], [{
    U: [{
      next: "findsecondSister",
      text: null
    }],
    nodeName: "sister2Gatekeeper",
    V: "questWaterGate",
    tags: {W: ["gatekeeperNeutral"]},
    text: "Find the three sisters and the gate will rise again!"
  }, {
    U: [],
    nodeName: "findsecondSister",
    V: "questWaterGate",
    tags: {W: ["gatekeeperNeutral"]},
    text: "The second sister was last seen on top of Climbing Mountain!"
  }], [{
    U: [{next: "findthirdSister", text: null}],
    nodeName: "sister3Gatekeeper",
    V: "questWaterGate",
    tags: {W: ["gatekeeperNeutral"]},
    text: "Find the three sisters and the gate will rise again!"
  }, {
    U: [],
    nodeName: "findthirdSister",
    V: "questWaterGate",
    tags: {W: ["gatekeeperNeutral"]},
    text: "The third sister moved to Tanooki City in the South West!"
  }], [{U: [], nodeName: "redBook", V: "redBook", tags: {}, text: "THE RED TEAM: Researching Victory"}], [{
    U: [],
    nodeName: "archery",
    V: "sign",
    tags: {},
    text: "\u2191 Archery"
  }], [{U: [], nodeName: "climbing", V: "sign", tags: {}, text: "\u2191 Climbing"}], [{
    U: [],
    nodeName: "marathon",
    V: "sign",
    tags: {},
    text: "\u2193 Marathon"
  }], [{U: [], nodeName: "pingpong", V: "sign", tags: {}, text: "\u2192 Table Tennis"}], [{
    U: [], nodeName: "rugby",
    V: "sign", tags: {}, text: "\u2192 Rugby"
  }], [{U: [], nodeName: "skate", V: "sign", tags: {}, text: "\u2190 Skateboarding"}], [{
    U: [],
    nodeName: "swim",
    V: "sign",
    tags: {},
    text: "\u2190 Synchronized Swimming"
  }], [{
    U: [],
    nodeName: "archery",
    V: "statue",
    tags: {W: ["statueArchery"]},
    text: "'Yoichi: Grand Champion of Archery'"
  }], [{
    U: [],
    nodeName: "climbing",
    V: "statue",
    tags: {W: ["statueClimbing"]},
    text: "'Fukuro: Grand Champion of Climbing'"
  }], [{
    U: [],
    nodeName: "marathon",
    V: "statue",
    tags: {W: ["statueMarathon"]},
    text: "'Kijimuna: Grand Champion of Marathon'"
  }],
  [{
    U: [],
    nodeName: "rugby",
    V: "statue",
    tags: {W: ["statueRugby"]},
    text: "'Red & Blue Oni: Grand Champions of Rugby'"
  }], [{
    U: [],
    nodeName: "skate",
    V: "statue",
    tags: {W: ["statueSkate"]},
    text: "'Tanooki: Grand Champion of Skateboarding'"
  }], [{
    U: [],
    nodeName: "swim",
    V: "statue",
    tags: {W: ["statueSwim"]},
    text: "'Otohime: Grand Champion of Synchronized Swimming'"
  }], [{
    U: [],
    nodeName: "tabletennisstatue",
    V: "statue",
    tags: {W: ["statueTableTennis"]},
    text: "'Tengu: Grand Champion of Table Tennis'"
  }], [{
    U: [{next: "playagain", text: null}],
    nodeName: "beaten",
    V: "tanooki",
    tags: {W: ["tanookiNeutral"]},
    text: "Wow, you're even better at skateboarding than me!"
  }, {
    U: [],
    nodeName: "playagain",
    V: "tanooki",
    tags: {W: ["tanookiNeutral"]},
    text: "Meet me at the gate if you want to skate together again!"
  }], [{
    U: [],
    nodeName: "unbeaten",
    V: "tanooki",
    tags: {W: ["tanookiNeutral"]},
    text: "Think you can catch me? Meet me at the red gate and let's skate together!"
  }], [{
    U: [{next: "lonely", text: null}],
    nodeName: "goBoard",
    V: "teahouse",
    tags: {W: ["luckyNeutral"]},
    text: "This game looks fun."
  },
    {
      U: [],
      nodeName: "lonely",
      V: "teahouse",
      tags: {W: ["luckyWorried"]},
      text: "Too bad there's no one to play with..."
    }], [{
    U: [],
    nodeName: "teaSet",
    V: "teahouse",
    tags: {W: ["luckyNeutral"]},
    text: "Mmm! This tea smells delicious!"
  }], [{
    U: [{next: "braveEnough", text: null}],
    nodeName: "tengu",
    V: "tengu",
    tags: {W: ["tenguNeutral"]},
    text: "None can defeat me at Table Tennis!"
  }, {
    U: [],
    nodeName: "braveEnough",
    V: "tengu",
    tags: {W: ["tenguNeutral"]},
    text: "Are YOU brave enough to face me?"
  }], [{
    U: [], nodeName: "tenguAsleep", V: "tengu", tags: {W: ["tenguNeutral"]},
    text: "zzz...it's your serve...zzz..."
  }], [{
    U: [],
    nodeName: "tenguDefeated",
    V: "tengu",
    tags: {W: ["tenguNeutral"]},
    text: "I underestimated you...maybe you really are The Chosen One."
  }], [{
    U: [],
    nodeName: "allergic",
    V: "townspeople",
    tags: {W: ["deerNeutral"]},
    text: "Go away! I'm allergic to cats."
  }], [{
    U: [],
    nodeName: "snowballs",
    V: "townspeople",
    tags: {W: ["grandpaNeutral"]},
    text: "Watch out for snowballs up here!"
  }], [{
    U: [],
    nodeName: "arcade",
    V: "townspeople",
    tags: {W: ["dangoKidNeutral"]},
    text: "Play sports? I'd rather go to the arcade..."
  }],
  [{
    U: [],
    nodeName: "arcadeOwner",
    V: "townspeople",
    tags: {W: ["batNeutral"]},
    text: "Not many people come to the arcade during the Champion Island Games..."
  }], [{
    U: [],
    nodeName: "bat1",
    V: "townspeople",
    tags: {W: ["batNeutral"]},
    text: "Be careful, it's easy to get lost in these caves."
  }], [{
    U: [{next: "oldturtle", text: null}],
    nodeName: "bat2",
    V: "townspeople",
    tags: {W: ["batNeutral"]},
    text: "Wow, I haven't seen anyone from outside come through here in a long time."
  }, {
    U: [], nodeName: "oldturtle", V: "townspeople", tags: {W: ["batNeutral"]},
    text: "Except that old turtle who was trying to get to the top..."
  }], [{
    U: [],
    nodeName: "blueOni1",
    V: "townspeople",
    tags: {W: ["blueOniNeutral"]},
    text: "He better stay on his side of the room..."
  }], [{
    U: [],
    nodeName: "blueOni2",
    V: "townspeople",
    tags: {W: ["blueOniNeutral"]},
    text: "Little Cat wants to play rugby? Hahaha!"
  }], [{
    U: [],
    nodeName: "blueOni3",
    V: "townspeople",
    tags: {W: ["blueOniNeutral"]},
    text: "Blue Oni and Red Oni don't agree on much...except Rugby!!"
  }], [{
    U: [], nodeName: "cold", V: "townspeople", tags: {W: ["deerNeutral"]},
    text: "I love climbing, but the mountain is too cold with all that snow!"
  }], [{
    U: [{next: "betterplay", text: null}],
    nodeName: "dangoKid",
    V: "townspeople",
    tags: {W: ["dangoKidNeutral"]},
    text: "I love the Champion Games because we get dango!"
  }, {
    U: [],
    nodeName: "betterplay",
    V: "townspeople",
    tags: {W: ["dangoKidNeutral"]},
    text: "The better you play, the more dango you get. So delicous!"
  }], [{
    U: [],
    nodeName: "darkWolfieBlueTeam",
    V: "townspeople",
    tags: {W: ["darkWolfieNeutral"]},
    text: "Team Blue's Headquarters is somehwere in town...but only memebers are allowed inside."
  }],
  [{
    U: [],
    nodeName: "deerAnimals",
    V: "townspeople",
    tags: {W: ["deerNeutral"]},
    text: "All animals are welcome at the Champion Island Games!"
  }], [{
    U: [],
    nodeName: "deerSkate1",
    V: "townspeople",
    tags: {W: ["deerNeutral"]},
    text: "Have you found the Tanooki while skateboarding yet? He likes to hide in a tea kettle."
  }], [{
    U: [],
    nodeName: "eggs",
    V: "townspeople",
    tags: {W: [""]},
    text: "Do kijimuna hatch from eggs?"
  }], [{
    U: [{next: "whatsft", text: null}],
    nodeName: "fastTravel",
    V: "townspeople",
    tags: {W: ["wolfieNeutral"]},
    text: "Have you tried warping around the world yet?"
  },
    {
      U: [],
      nodeName: "whatsft",
      V: "townspeople",
      tags: {W: ["wolfieNeutral"]},
      text: "You can do it by clicking the sport icons on the main menu. It's much faster than walking!"
    }], [{
    U: [],
    nodeName: "fish1SyncSwim1",
    V: "townspeople",
    tags: {W: ["fish1Neutral"]},
    text: "I hope they play my favorite song tonight."
  }], [{
    U: [],
    nodeName: "fish1SyncSwim2",
    V: "townspeople",
    tags: {W: ["fish1Neutral"]},
    text: "No one can dance like Otohime."
  }], [{
    U: [],
    nodeName: "fish2SyncSwim1",
    V: "townspeople",
    tags: {W: ["fish2Neutral"]},
    text: "What is that strange human doing down here?"
  }],
  [{
    U: [],
    nodeName: "fish2SyncSwim2",
    V: "townspeople",
    tags: {W: ["fish2Neutral"]},
    text: "Welcome to the Synchronized Swimming Dojo. The show is about to begin!"
  }], [{
    U: [],
    nodeName: "froggy",
    V: "townspeople",
    tags: {W: ["froggyNeutral"]},
    text: "The water is so clear here, you can see all the way to the bottom."
  }], [{
    U: [],
    nodeName: "fukuro",
    V: "townspeople",
    tags: {W: ["darkWolfieNeutral"]},
    text: "Fukuro will only return to the Climbing Dojo once someone else reaches the top of the mountain."
  }], [{
    U: [], nodeName: "hareArchery",
    V: "townspeople", tags: {W: ["hareNeutral"]}, text: "Welcome to the Archery Dojo!"
  }], [{
    U: [],
    nodeName: "looking",
    V: "townspeople",
    tags: {W: ["grandpaNeutral"]},
    text: "What're you looking at?"
  }], [{
    U: [{next: "read", text: null}],
    nodeName: "novaBookeeper",
    V: "townspeople",
    tags: {W: ["novaNeutral"]},
    text: "Welcome to the bookstore!"
  }, {
    U: [{next: "orelse", text: null}],
    nodeName: "read",
    V: "townspeople",
    tags: {W: ["novaNeutral"]},
    text: "Read anything you like, but please don't take anything with you."
  }, {
    U: [], nodeName: "orelse", V: "townspeople",
    tags: {W: ["novaNeutral"]}, text: "(or else...)"
  }], [{
    U: [],
    nodeName: "pango",
    V: "townspeople",
    tags: {W: ["pangoNeutral"]},
    text: "Oh. Don't mind me. I'm just waiting here for someone special."
  }], [{
    U: [],
    nodeName: "redOni1",
    V: "townspeople",
    tags: {W: ["redOniNeutral"]},
    text: "He better stay on his side of the room..."
  }], [{
    U: [{next: "whyplaynotrg", text: null}],
    nodeName: "redOni2",
    V: "townspeople",
    tags: {W: ["redOniNeutral"]},
    text: "I can see the whole island from this spot..."
  }, {
    U: [], nodeName: "whyplaynotrg", V: "townspeople",
    tags: {W: ["redOniNeutral"]}, text: "But I'd rather be playing Rugby!!"
  }], [{
    U: [{next: "whynotrug", text: null}],
    nodeName: "redOni3",
    V: "townspeople",
    tags: {W: ["redOniNeutral"]},
    text: "I've heard there are seven sport on the island..."
  }, {
    U: [],
    nodeName: "whynotrug",
    V: "townspeople",
    tags: {W: ["redOniNeutral"]},
    text: "But why would you want to play anything but Rugby??"
  }], [{
    U: [],
    nodeName: "rent",
    V: "townspeople",
    tags: {W: ["novaNeutral"]},
    text: "My roommates and I rent out our place during the Champion Island Games. It's an easy way to make some cash!"
  }],
  [{
    U: [{next: "moremore", text: null}],
    nodeName: "scroll",
    V: "townspeople",
    tags: {W: ["hareNeutral"]},
    text: "If you defeat a Champion, you'll be rewarded with a sacred scroll."
  }, {
    U: [],
    nodeName: "moremore",
    V: "townspeople",
    tags: {W: ["hareNeutral"]},
    text: "Not only that, but you'll get a statue of yourself in the main plaza. What an honor."
  }], [{
    U: [],
    nodeName: "seahorseSyncSwim1",
    V: "townspeople",
    tags: {W: ["seahorseNeutral"]},
    text: "I think I feel a draft coming from this door..."
  }], [{
    U: [],
    nodeName: "seahorseSyncSwim2",
    V: "townspeople",
    tags: {W: ["seahorseNeutral"]},
    text: "Combos are the secret to getting a high score in Synchronized Swimming."
  }], [{
    U: [],
    nodeName: "shiba",
    V: "townspeople",
    tags: {W: ["shibaNeutral"]},
    text: "I've been training all year, I know this time I'll win a scroll!"
  }], [{
    U: [],
    nodeName: "shibaArchery",
    V: "townspeople",
    tags: {W: ["shibaNeutral"]},
    text: "Yoichi's aim is too good, I can't keep up!"
  }], [{
    U: [],
    nodeName: "shibaSkate1",
    V: "townspeople",
    tags: {W: ["shibaNeutral"]},
    text: "Welcome to the Skateboarding Dojo!"
  }],
  [{
    U: [],
    nodeName: "shibaSkate2",
    V: "townspeople",
    tags: {W: ["shibaNeutral"]},
    text: "Grinding on rails is a good way to earn easy points!"
  }], [{
    U: [],
    nodeName: "snowOwl1",
    V: "townspeople",
    tags: {W: ["snowOwlNeutral"]},
    text: "Welcome to the Climbing Dojo!"
  }], [{
    U: [],
    nodeName: "snowOwl2",
    V: "townspeople",
    tags: {W: ["snowOwlNeutral"]},
    text: "I like being inside, I don't have to worry about falling snowballs."
  }], [{
    U: [],
    nodeName: "snowOwl3",
    V: "townspeople",
    tags: {W: ["snowOwlNeutral"]},
    text: "One day I'll fly as high as Fukuro."
  }],
  [{
    U: [],
    nodeName: "snowOwl4",
    V: "townspeople",
    tags: {W: ["snowOwlNeutral"]},
    text: "I miss Fukuro, will he ever come back to the dojo?"
  }], [{
    U: [],
    nodeName: "snowOwl5",
    V: "townspeople",
    tags: {W: ["snowOwlNeutral"]},
    text: "The lanterns on the mountain serve as check points in case you slip and fall!"
  }], [{
    U: [],
    nodeName: "snowOwl6",
    V: "townspeople",
    tags: {W: ["snowOwlNeutral"]},
    text: "No one will ever climb as high as Fukuro!"
  }], [{
    U: [],
    nodeName: "snowOwl7",
    V: "townspeople",
    tags: {W: ["snowOwlNeutral"]},
    text: "I'm scared of heights..."
  }],
  [{
    U: [{next: "sorrybut", text: null}],
    nodeName: "snowOwlLeader",
    V: "townspeople",
    tags: {W: ["snowOwlNeutral"]},
    text: "Looking for Climbing Champion Fukuro?"
  }, {
    U: [{next: "perchoutside", text: null}],
    nodeName: "sorrybut",
    V: "townspeople",
    tags: {W: ["snowOwlNeutral"]},
    text: "Sorry but he's still on top of the mountain."
  }, {
    U: [],
    nodeName: "perchoutside",
    V: "townspeople",
    tags: {W: ["snowOwlNeutral"]},
    text: "If anyone ever reaches him, there's a perch on top of the dojo waiting for him."
  }], [{
    U: [], nodeName: "strayArrows", V: "townspeople",
    tags: {W: ["grandpaNeutral"]}, text: "I don't go to the docks anymore. I keep stepping on stray arrows."
  }], [{
    U: [],
    nodeName: "travel",
    V: "townspeople",
    tags: {W: ["fish1Neutral"]},
    text: "Animals travel from all over the world to challenge the Champions."
  }], [{
    U: [],
    nodeName: "whiteOniRugby1",
    V: "townspeople",
    tags: {W: ["whiteOniNeutral"]},
    text: "Welcome to the Rugby Dojo! Rawr!"
  }], [{
    U: [],
    nodeName: "whiteOniRugby2",
    V: "townspeople",
    tags: {W: ["whiteOniNeutral"]},
    text: "One day I'll be big enough to play rugby too!"
  }], [{
    U: [],
    nodeName: "whiteOniRugby3",
    V: "townspeople",
    tags: {W: ["whiteOniNeutral"]},
    text: "Powerups can help even tiny players do well in Rugby."
  }], [{
    U: [],
    nodeName: "wolfieArchery",
    V: "townspeople",
    tags: {W: ["wolfieNeutral"]},
    text: "Hitting more than one target with the same arrow gets you more points!"
  }], [{
    U: [],
    nodeName: "wolfieLanterns",
    V: "townspeople",
    tags: {W: ["wolfieNeutral"]},
    text: "During the Champion Island Games, the lanterns in town change color to match the winning team!"
  }], [{
    U: [], nodeName: "treeFriend", V: "treeFriend",
    tags: {W: ["kijimunaNeutral"]}, text: "They say The Chosen One can hear the banyan tree speak..."
  }], [{
    U: [{next: "everyFourYears", text: null}],
    nodeName: "start",
    V: "tutorial",
    tags: {W: ["koma1Neutral"]},
    text: "Welcome to Champion Island!"
  }, {
    U: [{next: "whatItTakes", text: null}],
    nodeName: "everyFourYears",
    V: "tutorial",
    tags: {W: ["koma2Neutral"]},
    text: "Every four years the strongest athletes in the world gather here to compete."
  }, {
    U: [], nodeName: "whatItTakes", V: "tutorial", tags: {
      W: ["koma1Neutral"], zd: ["TUTORIAL_BEGIN",
        ! 0]
    }, text: "Step forward to the Red Gate and we will test your skills!"
  }], [{
    U: [{next: "chosenOne", text: null}],
    nodeName: "tutorialPartTwo",
    V: "tutorial",
    tags: {W: ["koma1Neutral"]},
    text: "You're much stronger than you look..."
  }, {
    U: [{next: "SevenChampions", text: null}],
    nodeName: "chosenOne",
    V: "tutorial",
    tags: {W: ["koma2Neutral"]},
    text: "(Could it be...The Chosen One?)"
  }, {
    U: [{next: "defeat", text: null}],
    nodeName: "SevenChampions",
    V: "tutorial",
    tags: {W: ["koma1Neutral"]},
    text: "Seven Sport Champions await on this island."
  },
    {
      U: [],
      nodeName: "defeat",
      V: "tutorial",
      tags: {W: ["koma2Neutral"]},
      text: "Can you defeat them all and restore balance?"
    }], [{
    U: [],
    nodeName: "wall",
    V: "tutorial",
    tags: {},
    text: "You are blocked from exiting by a wall. You should go back for now."
  }], [{
    U: [{next: "whathappend", text: "Why?"}, {next: "dontcare", text: "OK..."}],
    nodeName: "abandonedTown",
    V: "ushi",
    tags: {W: ["ushiNeutral"]},
    text: "This town is completely abandoned..."
  }, {
    U: [{next: "tengu", text: "Tengu?"}, {next: "whatcity", text: "Tanooki City?"}],
    nodeName: "whathappend",
    V: "ushi",
    tags: {W: ["ushiNeutral"]},
    text: "After the Tengu arrived the winds were too strong, everyone left for the Tanooki City."
  }, {
    U: [],
    nodeName: "dontcare",
    V: "ushi",
    tags: {W: ["ushiNeutral"]},
    text: "I'd be careful if I were you."
  }, {
    U: [],
    nodeName: "whatcity",
    V: "ushi",
    tags: {W: ["ushiNeutral"]},
    text: "Tanooki City is to the Southwest, a modern metropolis! I'm not cool enough for that place."
  }, {
    U: [],
    nodeName: "tengu",
    V: "ushi",
    tags: {W: ["ushiNeutral"]},
    text: "Tengu are part human, part bird! Very powerful and mysterious creatures, they love Table Tennis."
  }],
  [{
    U: [],
    nodeName: "diffteam",
    V: "ushi",
    tags: {W: ["ushiNeutral"]},
    text: "Who is this weakling that's not on Team Blue? I want nothing to do with you!"
  }], [{
    U: [],
    nodeName: "noOneStronger",
    V: "ushi",
    tags: {W: ["ushiNeutral"]},
    text: "No one is stronger than The Blue Team! NO ONE!!"
  }], [{
    U: [],
    nodeName: "notStrong",
    V: "ushi",
    tags: {W: ["ushiNeutral"]},
    text: "Every now and them I worry I'm not actually strong..."
  }], [{
    U: [],
    nodeName: "sameteam",
    V: "ushi",
    tags: {W: ["ushiNeutral"]},
    text: "Team Blue is lucky to have you, get out there and win!"
  }],
  [{
    U: [{next: "changingshape", text: null}],
    nodeName: "tanookiCity",
    V: "ushi",
    tags: {W: ["ushiNeutral"]},
    text: "This way to Tanooki City, metropolis of Champion Island and home to our Skateboarding Champion!"
  }, {
    U: [{next: "tryskateboarding", text: null}],
    nodeName: "changingshape",
    V: "ushi",
    tags: {W: ["ushiNeutral"]},
    text: "But good luck finding him. He's always changing shape and hiding around the city."
  }, {
    U: [],
    nodeName: "tryskateboarding",
    V: "ushi",
    tags: {W: ["ushiNeutral"]},
    text: "If you try skateboarding, you might be good enough to catch him!"
  }],
  [{
    U: [{next: "joinBlue", text: "Join Blue!"}, {next: "noThanks", text: "Nah."}, {next: "tellMeMore", text: "Who?"}],
    nodeName: "teamPickerBlue",
    V: "ushi",
    tags: {W: ["ushiNeutral"]},
    text: "HELLO! Are you strong enough to join Team Blue??"
  }, {
    U: [],
    nodeName: "noThanks",
    V: "ushi",
    tags: {W: ["ushiNeutral"]},
    text: "Wow...you don't know what you're missing..."
  }, {
    U: [{next: "joinBlue", text: "I'll Join!"}, {next: "noThanks", text: "No thanks."}],
    nodeName: "tellMeMore",
    V: "ushi",
    tags: {W: ["ushiNeutral"]},
    text: "I'm an Ushi, strong bull mascot of the Team Blue. Hard work is the only path to victory, can you keep up?"
  },
    {
      U: [{next: "followPath", text: null}],
      nodeName: "joinBlue",
      V: "ushi",
      tags: {W: ["ushiNeutral"], zd: ["PLAYER_TEAM", "blue"]},
      text: "WELL DONE! Welcome to Team Blue. Your first assignment: find and defeat a Legendary Champion!"
    }, {
    U: [{next: "mapShow", text: null}],
    nodeName: "followPath",
    V: "ushi",
    tags: {W: ["ushiNeutral"]},
    text: "Follow the paths to find the Champions and play the sports."
  }, {
    U: [{next: "soMuscles", text: null}],
    nodeName: "mapShow",
    V: "ushi",
    tags: {W: ["map"]},
    text: "Or press ESC to use the map!"
  }, {
    U: [], nodeName: "soMuscles",
    V: "ushi", tags: {W: ["ushiNeutral"]}, text: "May the muscles be with you."
  }], [{
    U: [{next: "recruit", text: null}],
    nodeName: "ushi1",
    V: "ushi1",
    tags: {W: ["ushiNeutral"]},
    text: "WELL WELL! A new recruit!"
  }, {
    U: [{next: "tiny", text: null}],
    nodeName: "recruit",
    V: "ushi1",
    tags: {W: ["ushiNeutral"]},
    text: "The BLUE TEAM is the strongest of them all! Those other teams don't stand a chance against our incredible muscles."
  }, {
    U: [],
    nodeName: "join",
    V: "ushi1",
    tags: {W: ["ushiNeutral"], zd: ["PLAYER_TEAM", "blue"]},
    text: "Welcome to the BLUE TEAM! Now get out there and start winning!"
  },
    {
      U: [],
      nodeName: "nothanks",
      V: "ushi1",
      tags: {W: ["ushiNeutral"]},
      text: "Wow...you don't know what you're missing..."
    }, {
      U: [{next: "join", text: "Join."}, {next: "nothanks", text: "Yikes. No."}],
      nodeName: "tellmemore",
      V: "ushi1",
      tags: {W: ["ushiNeutral"]},
      text: "I'm an Ushi, strong bull mascot of the Blue Team. Hard work is the only path to victory, can you keep up?"
    }, {
      U: [{next: "join", text: "Join Blue!"}, {next: "nothanks", text: "No thanks."}, {
        next: "tellmemore",
        text: "Who?"
      }], nodeName: "tiny", V: "ushi1", tags: {W: ["ushiNeutral"]},
      text: "You might be tiny, but I sense great power in you.  Will you join the BLUE TEAM?"
    }], [{
    U: [],
    nodeName: "yellowBook",
    V: "yellowBook",
    tags: {},
    text: "THE YELLOW TEAM: (content redacted)"
  }], [{
    U: [],
    nodeName: "beaten",
    V: "yoichi",
    tags: {W: ["yoichiNeutral"]},
    text: "Your archery skills impress even me! But if you ever want another game, you know where to find me."
  }], [{
    U: [],
    nodeName: "unbeaten",
    V: "yoichi",
    tags: {W: ["yoichiNeutral"]},
    text: "I'm always up for a game of Archery! Meet me outside at the red gate on the beach if you want to challenge me."
  }]];
createjs.Bitmap.prototype.initialize = function (b) {
  if (b && "sprite" in b) {
    var g = b.sprite;
    this.image = b.sheet.xY[Rk(g)].ha;
    this.sourceRect = new createjs.Rectangle(g[1], g[2], g[3], g[4])
  } else this.image = b, this.sourceRect = new createjs.Rectangle(0, 0, 10, 10)
};
var Sk = {};
var Tk = Sk;
(function (b, g) {
  function m() {
    var d = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
    d.gotoAndStop(this.currentFrame);
    d.paused = this.paused;
    d.framerate = this.framerate;
    return d
  }

  function k(d, e, f) {
    d = b.extend(d, b.MovieClip);
    d.clone = m;
    d.j = e;
    d.frameBounds = f;
    return d
  }

  var c, a = {}, n = {}, h = {};
  a.uB = [];
  (a.EK = function () {
    this.initialize(h.ArrowArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 3, 5);
  (a.fsa = function () {
    this.initialize(h.ArrowCollectorNeutralArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 56, 68);
  (a.Lsa = function () {
    this.initialize(h.Baker_Portrait_001)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 48, 59);
  (a.Msa = function () {
    this.initialize(h.Baker_Retired_Portait_001)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 50, 66);
  (a.m1 = function () {
    this.initialize(h.BigCatNeutralArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 44);
  (a.qua = function () {
    this.initialize(h.Bitmap12311)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 12, 8);
  (a.Uxa = function () {
    this.initialize(h.BlueOniNeutralArt)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 46, 54);
  (a.eBa = function () {
    this.initialize(h.CoachNeutralArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 58, 52);
  (a.CBa = function () {
    this.initialize(h.ConviniNeutralArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 50, 63);
  (a.qab = function () {
    this.initialize(h.deer_portrait)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 62, 56);
  (a.xCa = function () {
    this.initialize(h.DialogueFillArt1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 228, 68);
  (a.$ab = function () {
    this.initialize(h.gatekeeper_portrait)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 48);
  (a.D2 = function () {
    this.initialize(h.InariNeutralArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 49, 52);
  (a.aFa = function () {
    this.initialize(h.InvisibleOctopusNeutral)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 51, 45);
  (a.F2 = function () {
    this.initialize(h.KappaNeutralArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 54, 44);
  (a.G2 = function () {
    this.initialize(h.KarasuNeutralArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 53, 49);
  (a.ybb =
    function () {
      this.initialize(h.kijimunaNeutralArt)
    }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 54, 49);
  (a.I2 = function () {
    this.initialize(h.Koma1NeutralArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 53, 47);
  (a.K2 = function () {
    this.initialize(h.Koma2NeutralArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 51, 49);
  (a.WGa = function () {
    this.initialize(h.LittleMonkeyNeutral)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 56, 50);
  (a.Jbb = function () {
    this.initialize(h.locksmith_portrait)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 49, 48);
  (a.rHa = function () {
    this.initialize(h.LuckyAnnoyedArt11)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 51);
  (a.Mbb = function () {
    this.initialize(h.luckyCuriousArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 50);
  (a.HHa = function () {
    this.initialize(h.LuckyGrinArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 51);
  (a.WHa = function () {
    this.initialize(h.LuckyHappyArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 51);
  (a.ZHa = function () {
    this.initialize(h.LuckyHideArt)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 44);
  (a.IIa = function () {
    this.initialize(h.LuckyNeutralArt11111)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 51);
  (a.MIa = function () {
    this.initialize(h.LuckyRawrArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 51);
  (a.MJa = function () {
    this.initialize(h.LuckyShockedArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 51);
  (a.ALa = function () {
    this.initialize(h.LuckySmileSweatArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 51);
  (a.rOa =
    function () {
      this.initialize(h.LuckyWideEyedSweatArt)
    }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 51);
  (a.G3 = function () {
    this.initialize(h.LuckyWorriedArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 51);
  (a.Rbb = function () {
    this.initialize(h.momoBlueArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 46);
  (a.qPa = function () {
    this.initialize(h.MomoNeutralArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 46);
  (a.kQa = function () {
    this.initialize(h.MonkeyNeutralArt)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 51, 51);
  (a.pUa = function () {
    this.initialize(h.NoodleCookArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 47, 48);
  (a.gVa = function () {
    this.initialize(h.OniBakerArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 50, 51);
  (a.rVa = function () {
    this.initialize(h.OniPortraitArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 49, 51);
  (a.Xbb = function () {
    this.initialize(h.otter_portrait)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 54);
  (a.T4 = function () {
    this.initialize(h.OverworldMenuButtonBrown)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 22, 22);
  (a.aWa = function () {
    this.initialize(h.OwlNeutralArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 61, 46);
  (a.ccb = function () {
    this.initialize(h.porcupine_portrait)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 71, 52);
  (a.JXa = function () {
    this.initialize(h.Portraitbirthdaykidhappy)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 55, 53);
  (a.KXa = function () {
    this.initialize(h.Portraitbirthdaykidsad)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 55,
    53);
  (a.LXa = function () {
    this.initialize(h.Portraitbirthdaymom)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 46, 44);
  (a.rXa = function () {
    this.initialize(h.PortraitBlackWolfie)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 46);
  (a.MXa = function () {
    this.initialize(h.Portraitblueleader)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 56, 50);
  (a.sXa = function () {
    this.initialize(h.PortraitCrab)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 56, 44);
  (a.tXa = function () {
    this.initialize(h.PortraitDustyScroll)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 44);
  (a.uXa = function () {
    this.initialize(h.PortraitFroggy)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 48, 44);
  (a.NXa = function () {
    this.initialize(h.Portraitgreenleader)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 56, 45);
  (a.vXa = function () {
    this.initialize(h.PortraitKijiDad1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 65, 49);
  (a.wXa = function () {
    this.initialize(h.PortraitKijiKid)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 65, 45);
  (a.OXa =
    function () {
      this.initialize(h.Portraitkijimunastatue1)
    }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 65, 46);
  (a.AXa = function () {
    this.initialize(h.PortraitMomobird)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 51);
  (a.BXa = function () {
    this.initialize(h.PortraitMomodadneutral)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 50);
  (a.yXa = function () {
    this.initialize(h.PortraitMomoDog)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 51);
  (a.CXa = function () {
    this.initialize(h.PortraitMomomomneutral)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 44);
  (a.zXa = function () {
    this.initialize(h.PortraitMomoMonkey)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 46, 44);
  (a.DXa = function () {
    this.initialize(h.PortraitMomotaro)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 49, 49);
  (a.EXa = function () {
    this.initialize(h.PortraitOtohimeNeutral)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 52);
  (a.PXa = function () {
    this.initialize(h.Portraitotohimestatue)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44,
    52);
  (a.QXa = function () {
    this.initialize(h.Portraitowlstatue)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 72, 46);
  (a.FXa = function () {
    this.initialize(h.PortraitRacerAmad)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 51, 53);
  (a.GXa = function () {
    this.initialize(h.PortraitRacerAneutral)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 51, 53);
  (a.RXa = function () {
    this.initialize(h.PortraitracerBmad)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 49, 50);
  (a.SXa = function () {
    this.initialize(h.PortraitracerBneutral)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 49, 50);
  (a.TXa = function () {
    this.initialize(h.Portraitredleader)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 47);
  (a.UXa = function () {
    this.initialize(h.Portraitrugbystatue)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 55, 53);
  (a.HXa = function () {
    this.initialize(h.PortraitSupermountaingirl)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 51, 48);
  (a.VXa = function () {
    this.initialize(h.Portraittanukistatue)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0,
    0, 50, 44);
  (a.WXa = function () {
    this.initialize(h.Portraittengustatue)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 57, 47);
  (a.IXa = function () {
    this.initialize(h.PortraitWolfie)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 46, 47);
  (a.XXa = function () {
    this.initialize(h.Portraityoichistatue)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 54, 44);
  (a.t_a = function () {
    this.initialize(h.RainBoyNeutralArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 55);
  (a.W_a = function () {
    this.initialize(h.RedOniNeutralArt)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 49, 53);
  (a.tcb = function () {
    this.initialize(h.sister1_portrait)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 45, 48);
  (a.ucb = function () {
    this.initialize(h.sister2_portrait)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 49);
  (a.xcb = function () {
    this.initialize(h.sister3_portrait)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 50, 47);
  (a.I2a = function () {
    this.initialize(h.SleepyCatNeutral)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 46);
  (a.G3a =
    function () {
      this.initialize(h.SnowOwlAvatarArt)
    }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 44);
  (a.O4a = function () {
    this.initialize(h.TanookiNeutralArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 50, 44);
  (a.x5a = function () {
    this.initialize(h.TenguNeutralArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 57, 47);
  (a.N5a = function () {
    this.initialize(h.Town_people_bat_portrait)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 46, 54);
  (a.Q5a = function () {
    this.initialize(h.Town_people_fish_handicap_portrait)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 48, 46);
  (a.R5a = function () {
    this.initialize(h.Town_people_fish_portrait)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 50, 45);
  (a.U5a = function () {
    this.initialize(h.Town_people_grandpa_portrait)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 48, 57);
  (a.X5a = function () {
    this.initialize(h.Town_people_hare_portrait)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 47, 44);
  (a.Y5a = function () {
    this.initialize(h.Town_people_kid_portrait)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 54, 54);
  (a.Z5a = function () {
    this.initialize(h.Town_people_nova_portrait)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 52, 54);
  (a.$5a = function () {
    this.initialize(h.Town_people_pango_portrait)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 48, 44);
  (a.c6a = function () {
    this.initialize(h.Town_people_seahorse_portrait)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 50, 49);
  (a.f6a = function () {
    this.initialize(h.Town_people_shiba_portrait)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0,
    0, 46, 47);
  (a.y6a = function () {
    this.initialize(h.TraineeNoodlesArt1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 58, 52);
  (a.A6a = function () {
    this.initialize(h.TraineeRunArt1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 62, 52);
  (a.u6a = function () {
    this.initialize(h.TrainWorkerArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 50, 50);
  (a.v7a = function () {
    this.initialize(h.TrophyMasterArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 49, 50);
  (a.T8a = function () {
    this.initialize(h.UrashimaANeutralrt1)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 52);
  (a.Z8a = function () {
    this.initialize(h.UrashimaMomNeutral)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 44, 48);
  (a.d9a = function () {
    this.initialize(h.UshiNeutralArt1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 54, 49);
  (a.P9a = function () {
    this.initialize(h.WhiteOniAvatarArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 52, 59);
  (a.$cb = function () {
    this.initialize(h.yellowleader)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 50, 57);
  (a.g$a = function () {
    this.initialize(h.YouichiNeutralArt)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 54, 44);
  (a.k$a = function () {
    this.initialize(h.YoungArcherNeutralArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 58, 48);
  (a.tBa = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.qua;
    this.instance.parent = this;
    this.instance.setTransform(29.5, -12);
    this.timeline.addTween(b.Tween.get(this.instance).wait(8).to({x: 30.5}, 0).wait(4).to({x: 34.5}, 0).wait(4).to({x: 35.5}, 0).wait(8).to({x: 34.5}, 0).wait(3).to({x: 30.5}, 0).wait(4));
    this.g = new a.T4;
    this.g.parent =
      this;
    this.g.setTransform(3, -16);
    this.timeline.addTween(b.Tween.get(this.g).wait(31))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(3, -16, 44.5, 22);
  (a.Yda = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.xCa;
    this.instance.parent = this;
    this.instance.setTransform(0, 0, 1, .9999);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1))
  }).prototype = k(a.Yda, new b.Rectangle(0, 0, 228, 68), null);
  (a.nV = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("#ffffff").s().p("AlEBfIAAi9IKJAAIAAC9g");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.nV, new b.Rectangle(-32.5, -9.5, 65, 19), null);
  (a.lX = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.EK;
    this.instance.parent = this;
    this.instance.setTransform(-1.5, -2.5);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1))
  }).prototype = k(a.lX, new b.Rectangle(-1.5, -2.5, 3, 5), null);
  (a.ct = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance =
      new a.lX;
    this.instance.parent = this;
    this.instance.setTransform(-1.5, 0);
    this.timeline.addTween(b.Tween.get(this.instance).wait(5).to({alpha: .5898}, 0).wait(5))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-3, -2.5, 3, 5);
  (a.tCa = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {dialogOption: {}, button: {eventId: "option3"}, keyboardNav: {order: 4}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.ct;
    this.instance.parent =
      this;
    this.instance.setTransform(-4, 0, 1, 1, 180, 0, 0, -1.5, 0);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).to({_off: ! 0}, 1).wait(1));
    this.hitArea = new a.nV;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(30, -2);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3));
    this.text = new b.Text("option", "10px 'PixelMplus10'", "#e7dbac");
    this.text.name = "text";
    this.text.lineHeight = 11;
    this.text.lineWidth = 210;
    this.text.parent = this;
    this.text.setTransform(1, -6.45);
    this.timeline.addTween(b.Tween.get(this.text).wait(2).to({color: "#ffffff", lineWidth: 68}, 0).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-5.5, -11.5, 218.5, 19);
  (a.sCa = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {dialogOption: {}, button: {eventId: "option2"}, keyboardNav: {order: 3}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.ct;
    this.instance.parent =
      this;
    this.instance.setTransform(-4, 0, 1, 1, 180, 0, 0, -1.5, 0);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).to({_off: ! 0}, 1).wait(1));
    this.hitArea = new a.nV;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(30, -2);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3));
    this.text = new b.Text("option", "10px 'PixelMplus10'", "#e7dbac");
    this.text.name = "text";
    this.text.lineHeight = 11;
    this.text.lineWidth = 210;
    this.text.parent = this;
    this.text.setTransform(1, -6.45);
    this.timeline.addTween(b.Tween.get(this.text).wait(2).to({color: "#ffffff", lineWidth: 68}, 0).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-5.5, -11.5, 218.3, 19);
  (a.rCa = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {dialogOption: {}, button: {eventId: "option1"}, keyboardNav: {order: 2}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.ct;
    this.instance.parent =
      this;
    this.instance.setTransform(-4, 0, 1, 1, 180, 0, 0, -1.5, 0);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).to({_off: ! 0}, 1).wait(1));
    this.hitArea = new a.nV;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(30, -2);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3));
    this.text = new b.Text("option", "10px 'PixelMplus10'", "#e7dbac");
    this.text.name = "text";
    this.text.lineHeight = 11;
    this.text.lineWidth = 210;
    this.text.parent = this;
    this.text.setTransform(1, -6.45);
    this.timeline.addTween(b.Tween.get(this.text).wait(2).to({color: "#ffffff", lineWidth: 68}, 0).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-5.5, -11.5, 218.5, 19);
  (a.Zda = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {dialogNext: {}, button: {eventId: "next"}, keyboardNav: {order: 1}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.hitArea = new a.nV;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(6.5,
      -3.85, 3.4125, 3.2164, 0, 0, 0, -.1, -.1);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(1))
  }).prototype = k(a.Zda, new b.Rectangle(-104, -34.1, 221.8, 61.1), null);
  (a.b1 = function (d, e, f) {
    this.initialize(d, e, f, {
      koma1Neutral: 0,
      koma2Neutral: 1,
      inariNeutral: 2,
      ushiNeutral: 3,
      karasuNeutral: 4,
      kappaNeutral: 5,
      luckyNeutral: 6,
      luckyWorried: 7,
      luckyHappy: 8,
      luckyBigGrin: 9,
      luckyAnnoyed: 10,
      luckyRawr: 11,
      luckyCurious: 12,
      luckyShocked: 13,
      luckyHide: 14,
      luckyWideEyeSweat: 15,
      luckySmileSweatdrop: 16,
      bigCatNeutral: 17,
      statueMarathon: 18,
      kijimunaNeutral: 19,
      statueSwim: 20,
      otohimeNeutral: 21,
      statueClimbing: 22,
      owlNeutral: 23,
      statueRugby: 24,
      statueSkate: 25,
      tanookiNeutral: 26,
      statueTableTennis: 27,
      tenguNeutral: 28,
      statueArchery: 29,
      yoichiNeutral: 30,
      monkey: 31,
      littleMonkeyNeutral: 32,
      trophyMasterNeutral: 33,
      rainBoyNeutral: 34,
      map: 35,
      trainWorkerNeutral: 36,
      noodleCookNeutral: 37,
      invisibleOctopusNeutral: 38,
      coachNeutral: 39,
      traineeNoodle: 40,
      traineeRun: 41,
      conviniNeutral: 42,
      UrashimaNeutral: 43,
      TaroMomSad: 44,
      arrowCollectorNeutral: 45,
      sleepyCatNeutral: 46,
      kijiDadNeutral: 47,
      kijiKidNeutral: 48,
      oniDreamer: 49,
      oniBaker: 50,
      monkeyBaker: 51,
      monkeyRetired: 52,
      sister1Neutral: 53,
      sister2Neutral: 54,
      sister3Neutral: 55,
      gatekeeperNeutral: 56,
      superMountainGirlNeutral: 57,
      birthdayMomNeutral: 58,
      birthdayKidSad: 59,
      birthdayKidHappy: 60,
      racerANeutral: 61,
      racerAMad: 62,
      racerBNeutral: 63,
      racerBMad: 64,
      crabNeutral: 65,
      momoDadNeutral: 66,
      momoMomNeutral: 67,
      locksmithNeutral: 68,
      porcupineNeutral: 69,
      youngArcherNeutral: 70,
      momoBirdNeutral: 71,
      momotaroNeutral: 72,
      momoDogNeutral: 73,
      momoMonkeyNeutral: 74,
      scrollNeutral: 75,
      wolfieNeutral: 76,
      darkWolfieNeutral: 77,
      momoBlue: 78,
      momoNeutral: 79,
      novaNeutral: 80,
      dangoKidNeutral: 81,
      deerNeutral: 82,
      grandpaNeutral: 83,
      froggyNeutral: 84,
      blueOniNeutral: 85,
      redOniNeutral: 86,
      shibaNeutral: 87,
      hareNeutral: 88,
      fish2Neutral: 89,
      fish1Neutral: 90,
      seahorseNeutral: 91,
      batNeutral: 92,
      pangoNeutral: 93,
      otterNeutral: 94,
      snowOwlNeutral: 95,
      whiteOniNeutral: 96,
      leaderGreenNeutral: 97,
      leaderBlueNeutral: 98,
      leaderYellowNeutral: 99,
      leaderRedNeutral: 100
    });
    this.u = function () {
      this.T = {dialogAvatar: {}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(101));
    this.instance = new a.I2;
    this.instance.parent = this;
    this.instance.setTransform(7, 7);
    this.g = new a.K2;
    this.g.parent = this;
    this.g.setTransform(7, 4);
    this.i = new a.D2;
    this.i.parent = this;
    this.i.setTransform(7, 4);
    this.o = new a.d9a;
    this.o.parent = this;
    this.o.setTransform(4, 6);
    this.H = new a.G2;
    this.H.parent = this;
    this.H.setTransform(5, 4);
    this.O = new a.F2;
    this.O.parent = this;
    this.O.setTransform(4, 11);
    this.$ = new a.IIa;
    this.$.parent = this;
    this.$.setTransform(11,
      3);
    this.ka = new a.G3;
    this.ka.parent = this;
    this.ka.setTransform(11, 3);
    this.ta = new a.WHa;
    this.ta.parent = this;
    this.ta.setTransform(11, 3);
    this.va = new a.HHa;
    this.va.parent = this;
    this.va.setTransform(11, 3);
    this.wa = new a.rHa;
    this.wa.parent = this;
    this.wa.setTransform(11, 3);
    this.ya = new a.MIa;
    this.ya.parent = this;
    this.ya.setTransform(11, 3);
    this.Aa = new a.Mbb;
    this.Aa.parent = this;
    this.Aa.setTransform(11, 4);
    this.Ba = new a.MJa;
    this.Ba.parent = this;
    this.Ba.setTransform(11, 3.05);
    this.Da = new a.ZHa;
    this.Da.parent = this;
    this.Da.setTransform(11,
      10);
    this.Ea = new a.rOa;
    this.Ea.parent = this;
    this.Ea.setTransform(11, 3);
    this.Ga = new a.ALa;
    this.Ga.parent = this;
    this.Ga.setTransform(11, 3);
    this.Ha = new a.m1;
    this.Ha.parent = this;
    this.Ha.setTransform(11, 9.85);
    this.Ia = new a.OXa;
    this.Ia.parent = this;
    this.Ia.setTransform(-2, 7);
    this.Ja = new a.ybb;
    this.Ja.parent = this;
    this.Ja.setTransform(4, 5);
    this.Ka = new a.PXa;
    this.Ka.parent = this;
    this.Ka.setTransform(11, 2);
    this.La = new a.EXa;
    this.La.parent = this;
    this.La.setTransform(11, 2);
    this.Ma = new a.QXa;
    this.Ma.parent = this;
    this.Ma.setTransform(-6,
      8);
    this.Na = new a.aWa;
    this.Na.parent = this;
    this.Na.setTransform(-1.75, 8);
    this.Oa = new a.UXa;
    this.Oa.parent = this;
    this.Oa.setTransform(2, 1);
    this.Qa = new a.VXa;
    this.Qa.parent = this;
    this.Qa.setTransform(9, 10);
    this.Ua = new a.O4a;
    this.Ua.parent = this;
    this.Ua.setTransform(9, 10);
    this.Va = new a.WXa;
    this.Va.parent = this;
    this.Va.setTransform(2, 7);
    this.Wa = new a.x5a;
    this.Wa.parent = this;
    this.Wa.setTransform(2, 7);
    this.Xa = new a.XXa;
    this.Xa.parent = this;
    this.Xa.setTransform(1, 10);
    this.Ya = new a.g$a;
    this.Ya.parent = this;
    this.Ya.setTransform(1,
      10);
    this.Za = new a.kQa;
    this.Za.parent = this;
    this.Za.setTransform(7, 3);
    this.$a = new a.WGa;
    this.$a.parent = this;
    this.$a.setTransform(2, 4);
    this.ab = new a.v7a;
    this.ab.parent = this;
    this.ab.setTransform(8, 6);
    this.hb = new a.t_a;
    this.hb.parent = this;
    this.hb.setTransform(11, 0);
    this.mb = new a.tBa;
    this.mb.parent = this;
    this.mb.setTransform(12, 13, 1, 1, 0, 0, 0, 0, -11);
    this.nb = new a.u6a;
    this.nb.parent = this;
    this.nb.setTransform(5, 5);
    this.rb = new a.pUa;
    this.rb.parent = this;
    this.rb.setTransform(8, 7);
    this.tb = new a.aFa;
    this.tb.parent =
      this;
    this.tb.setTransform(8, 10);
    this.ub = new a.eBa;
    this.ub.parent = this;
    this.ub.setTransform(1, 2);
    this.wb = new a.y6a;
    this.wb.parent = this;
    this.wb.setTransform(0, 2);
    this.yb = new a.A6a;
    this.yb.parent = this;
    this.yb.setTransform(-2, 2);
    this.Ab = new a.CBa;
    this.Ab.parent = this;
    this.Ab.setTransform(7, -9);
    this.Cb = new a.T8a;
    this.Cb.parent = this;
    this.Cb.setTransform(11, 2);
    this.Db = new a.Z8a;
    this.Db.parent = this;
    this.Db.setTransform(11, 6);
    this.Eb = new a.fsa;
    this.Eb.parent = this;
    this.Eb.setTransform(1, -14);
    this.Fb = new a.I2a;
    this.Fb.parent = this;
    this.Fb.setTransform(11, 8);
    this.Gb = new a.vXa;
    this.Gb.parent = this;
    this.Gb.setTransform(-2, 5);
    this.Hb = new a.wXa;
    this.Hb.parent = this;
    this.Hb.setTransform(-2, 9);
    this.Jb = new a.rVa;
    this.Jb.parent = this;
    this.Jb.setTransform(8, 3);
    this.Lb = new a.gVa;
    this.Lb.parent = this;
    this.Lb.setTransform(7, 3);
    this.Mb = new a.Lsa;
    this.Mb.parent = this;
    this.Mb.setTransform(7, 3);
    this.Pb = new a.Msa;
    this.Pb.parent = this;
    this.Pb.setTransform(8, -1);
    this.Nb = new a.tcb;
    this.Nb.parent = this;
    this.Nb.setTransform(11, 6);
    this.Qb =
      new a.ucb;
    this.Qb.parent = this;
    this.Qb.setTransform(11, 5);
    this.Ob = new a.xcb;
    this.Ob.parent = this;
    this.Ob.setTransform(8, 7);
    this.Rb = new a.$ab;
    this.Rb.parent = this;
    this.Rb.setTransform(11, 10);
    this.Sb = new a.HXa;
    this.Sb.parent = this;
    this.Sb.setTransform(6, 6);
    this.Tb = new a.LXa;
    this.Tb.parent = this;
    this.Tb.setTransform(10, 10);
    this.Ub = new a.KXa;
    this.Ub.parent = this;
    this.Ub.setTransform(3, 1);
    this.Zb = new a.JXa;
    this.Zb.parent = this;
    this.Zb.setTransform(3, 1);
    this.Wb = new a.GXa;
    this.Wb.parent = this;
    this.Wb.setTransform(7,
      -1);
    this.Xb = new a.FXa;
    this.Xb.parent = this;
    this.Xb.setTransform(7, -1);
    this.Yb = new a.SXa;
    this.Yb.parent = this;
    this.Yb.setTransform(8, 2);
    this.$b = new a.RXa;
    this.$b.parent = this;
    this.$b.setTransform(8, 2);
    this.ac = new a.sXa;
    this.ac.parent = this;
    this.ac.setTransform(2, 8);
    this.bc = new a.BXa;
    this.bc.parent = this;
    this.bc.setTransform(11, 2);
    this.hc = new a.CXa;
    this.hc.parent = this;
    this.hc.setTransform(11, 8);
    this.jc = new a.Jbb;
    this.jc.parent = this;
    this.jc.setTransform(7.2, 3.65);
    this.kc = new a.ccb;
    this.kc.parent = this;
    this.kc.setTransform(-9,
      2);
    this.lc = new a.k$a;
    this.lc.parent = this;
    this.lc.setTransform(0, 4);
    this.nc = new a.AXa;
    this.nc.parent = this;
    this.nc.setTransform(10, 1);
    this.tc = new a.DXa;
    this.tc.parent = this;
    this.tc.setTransform(8, 3);
    this.uc = new a.yXa;
    this.uc.parent = this;
    this.uc.setTransform(10, 1);
    this.xc = new a.zXa;
    this.xc.parent = this;
    this.xc.setTransform(9, 8);
    this.zc = new a.tXa;
    this.zc.parent = this;
    this.zc.setTransform(10, 8);
    this.Ac = new a.IXa;
    this.Ac.parent = this;
    this.Ac.setTransform(10, 5);
    this.Bc = new a.rXa;
    this.Bc.parent = this;
    this.Bc.setTransform(9,
      6);
    this.yc = new a.Rbb;
    this.yc.parent = this;
    this.yc.setTransform(10, 6);
    this.Dc = new a.qPa;
    this.Dc.parent = this;
    this.Dc.setTransform(10, 6);
    this.Ec = new a.Z5a;
    this.Ec.parent = this;
    this.Ec.setTransform(6, 2);
    this.Fc = new a.Y5a;
    this.Fc.parent = this;
    this.Fc.setTransform(6, 2);
    this.Gc = new a.qab;
    this.Gc.parent = this;
    this.Gc.setTransform(-2.1, -3.75);
    this.Jc = new a.U5a;
    this.Jc.parent = this;
    this.Jc.setTransform(10, -1);
    this.Kc = new a.uXa;
    this.Kc.parent = this;
    this.Kc.setTransform(10, 9);
    this.Lc = new a.Uxa;
    this.Lc.parent = this;
    this.Lc.setTransform(9.25, .5);
    this.Ic = new a.W_a;
    this.Ic.parent = this;
    this.Ic.setTransform(5.5, .5);
    this.Nc = new a.f6a;
    this.Nc.parent = this;
    this.Nc.setTransform(11, 7.25);
    this.Oc = new a.X5a;
    this.Oc.parent = this;
    this.Oc.setTransform(11, 10);
    this.Rc = new a.R5a;
    this.Rc.parent = this;
    this.Rc.setTransform(59, 9, 1, 1, 0, 0, 180);
    this.Uc = new a.Q5a;
    this.Uc.parent = this;
    this.Uc.setTransform(10, 10);
    this.Xc = new a.c6a;
    this.Xc.parent = this;
    this.Xc.setTransform(8, 3);
    this.jd = new a.N5a;
    this.jd.parent = this;
    this.jd.setTransform(9, 1);
    this.$c = new a.$5a;
    this.$c.parent = this;
    this.$c.setTransform(9, 10);
    this.kd = new a.Xbb;
    this.kd.parent = this;
    this.kd.setTransform(10, 0);
    this.hd = new a.G3a;
    this.hd.parent = this;
    this.hd.setTransform(10, 10);
    this.ld = new a.P9a;
    this.ld.parent = this;
    this.ld.setTransform(2, -5);
    this.nd = new a.NXa;
    this.nd.parent = this;
    this.nd.setTransform(2, 8);
    this.od = new a.MXa;
    this.od.parent = this;
    this.od.setTransform(2, 4);
    this.rd = new a.$cb;
    this.rd.parent = this;
    this.rd.setTransform(4.8, -3.9);
    this.vd = new a.TXa;
    this.vd.parent = this;
    this.vd.setTransform(8.8,
      4.1);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]}, 1).to({state: [{t: this.i}]}, 1).to({state: [{t: this.o}]}, 1).to({state: [{t: this.H}]}, 1).to({state: [{t: this.O}]}, 1).to({state: [{t: this.$}]}, 1).to({state: [{t: this.ka}]}, 1).to({state: [{t: this.ta}]}, 1).to({state: [{t: this.va}]}, 1).to({state: [{t: this.wa}]}, 1).to({state: [{t: this.ya}]}, 1).to({state: [{t: this.Aa}]}, 1).to({state: [{t: this.Ba}]}, 1).to({state: [{t: this.Da}]}, 1).to({state: [{t: this.Ea}]}, 1).to({state: [{t: this.Ga}]},
      1).to({state: [{t: this.Ha}]}, 1).to({state: [{t: this.Ia}]}, 1).to({state: [{t: this.Ja}]}, 1).to({state: [{t: this.Ka}]}, 1).to({state: [{t: this.La}]}, 1).to({state: [{t: this.Ma}]}, 1).to({state: [{t: this.Na}]}, 1).to({state: [{t: this.Oa}]}, 1).to({state: [{t: this.Qa}]}, 1).to({state: [{t: this.Ua}]}, 1).to({state: [{t: this.Va}]}, 1).to({state: [{t: this.Wa}]}, 1).to({state: [{t: this.Xa}]}, 1).to({state: [{t: this.Ya}]}, 1).to({state: [{t: this.Za}]}, 1).to({state: [{t: this.$a}]}, 1).to({state: [{t: this.ab}]}, 1).to({state: [{t: this.hb}]},
      1).to({state: [{t: this.mb}]}, 1).to({state: [{t: this.nb}]}, 1).to({state: [{t: this.rb}]}, 1).to({state: [{t: this.tb}]}, 1).to({state: [{t: this.ub}]}, 1).to({state: [{t: this.wb}]}, 1).to({state: [{t: this.yb}]}, 1).to({state: [{t: this.Ab}]}, 1).to({state: [{t: this.Cb}]}, 1).to({state: [{t: this.Db}]}, 1).to({state: [{t: this.Eb}]}, 1).to({state: [{t: this.Fb}]}, 1).to({state: [{t: this.Gb}]}, 1).to({state: [{t: this.Hb}]}, 1).to({state: [{t: this.Jb}]}, 1).to({state: [{t: this.Lb}]}, 1).to({state: [{t: this.Mb}]}, 1).to({state: [{t: this.Pb}]},
      1).to({state: [{t: this.Nb}]}, 1).to({state: [{t: this.Qb}]}, 1).to({state: [{t: this.Ob}]}, 1).to({state: [{t: this.Rb}]}, 1).to({state: [{t: this.Sb}]}, 1).to({state: [{t: this.Tb}]}, 1).to({state: [{t: this.Ub}]}, 1).to({state: [{t: this.Zb}]}, 1).to({state: [{t: this.Wb}]}, 1).to({state: [{t: this.Xb}]}, 1).to({state: [{t: this.Yb}]}, 1).to({state: [{t: this.$b}]}, 1).to({state: [{t: this.ac}]}, 1).to({state: [{t: this.bc}]}, 1).to({state: [{t: this.hc}]}, 1).to({state: [{t: this.jc}]}, 1).to({state: [{t: this.kc}]}, 1).to({state: [{t: this.lc}]},
      1).to({state: [{t: this.nc}]}, 1).to({state: [{t: this.tc}]}, 1).to({state: [{t: this.uc}]}, 1).to({state: [{t: this.xc}]}, 1).to({state: [{t: this.zc}]}, 1).to({state: [{t: this.Ac}]}, 1).to({state: [{t: this.Bc}]}, 1).to({state: [{t: this.yc}]}, 1).to({state: [{t: this.Dc}]}, 1).to({state: [{t: this.Ec}]}, 1).to({state: [{t: this.Fc}]}, 1).to({state: [{t: this.Gc}]}, 1).to({state: [{t: this.Jc}]}, 1).to({state: [{t: this.Kc}]}, 1).to({state: [{t: this.Lc}]}, 1).to({state: [{t: this.Ic}]}, 1).to({state: [{t: this.Nc}]}, 1).to({state: [{t: this.Oc}]},
      1).to({state: [{t: this.Rc}]}, 1).to({state: [{t: this.Uc}]}, 1).to({state: [{t: this.Xc}]}, 1).to({state: [{t: this.jd}]}, 1).to({state: [{t: this.$c}]}, 1).to({state: [{t: this.kd}]}, 1).to({state: [{t: this.hd}]}, 1).to({state: [{t: this.ld}]}, 1).to({state: [{t: this.nd}]}, 1).to({state: [{t: this.od}]}, 1).to({state: [{t: this.rd}]}, 1).to({state: [{t: this.vd}]}, 1).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-9, -14, 75, 79);
  (a.RWa = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.ct;
    this.instance.parent =
      this;
    this.instance.setTransform(0, 0, 1, 1, 180, 0, 0, -1.5, 0);
    this.timeline.addTween(b.Tween.get(this.instance).wait(9).to({alpha: .6484}, 0).wait(5))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-1.5, -2.5, 3, 5);
  (a.Xda = function (d, e, f) {
    this.initialize(d, e, f, {avatar: 0});
    this.u = function () {
      this.T = {menu: {}, dialog: {}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.W = new a.b1;
    this.W.name = "avatar";
    this.W.parent = this;
    this.timeline.addTween(b.Tween.get(this.W).wait(1));
    this.instance = new a.rCa;
    this.instance.parent = this;
    this.instance.setTransform(45.6, 61, 1, 1, 0, 0, 0, 31.6, -2);
    this.g = new a.tCa;
    this.g.parent = this;
    this.g.setTransform(45.6, 93, 1, 1, 0, 0, 0, 31.6, -2);
    this.i = new a.sCa;
    this.i.parent = this;
    this.i.setTransform(45.6, 77, 1, 1, 0, 0, 0, 31.6, -2);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.i}, {t: this.g}, {t: this.instance}]}).wait(1));
    this.text = new b.Text("text", "10px 'PixelMplus10'", "#e7dbac");
    this.text.name = "text";
    this.text.lineHeight = 11;
    this.text.lineWidth = 163;
    this.text.parent = this;
    this.text.setTransform(62, 11);
    this.timeline.addTween(b.Tween.get(this.text).wait(1));
    this.JQ = new a.RWa;
    this.JQ.name = "pointer";
    this.JQ.parent = this;
    this.JQ.setTransform(225, 63);
    this.timeline.addTween(b.Tween.get(this.JQ).wait(1));
    this.next = new a.Zda;
    this.next.name = "next";
    this.next.parent = this;
    this.next.setTransform(111.6, 75.65, 1, 1.982, 0, 0, 0, -1.5, .1);
    this.timeline.addTween(b.Tween.get(this.next).wait(1));
    this.qK = new a.Yda;
    this.qK.name = "base";
    this.qK.parent = this;
    this.qK.setTransform(5.5, 5);
    this.timeline.addTween(b.Tween.get(this.qK).wait(1))
  }).prototype =
    k(a.Xda, new b.Rectangle(5.5, 5, 228, 124), null);
  (a.Spa = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.instance = new a.Xda;
    this.instance.parent = this;
    this.instance.setTransform(1.6, -.8, 4, 4, 0, 0, 0, .4, -.2);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(502, 290, 432, 225.89999999999998);
  a.properties = {
    id: "B6B0DC09A20D455BAB815F8FE24BCF08",
    width: 960,
    height: 540,
    fps: 30,
    color: "#ffffff",
    opacity: 1,
    aB: [{src: "images_dialog/ArrowArt.png", id: "ArrowArt"}, {
      src: "images_dialog/ArrowCollectorNeutralArt.png",
      id: "ArrowCollectorNeutralArt"
    }, {
      src: "images_dialog/Baker_Portrait_001.png",
      id: "Baker_Portrait_001"
    }, {
      src: "images_dialog/Baker_Retired_Portait_001.png",
      id: "Baker_Retired_Portait_001"
    }, {src: "images_dialog/BigCatNeutralArt.png", id: "BigCatNeutralArt"}, {
      src: "images_dialog/Bitmap12311.png",
      id: "Bitmap12311"
    }, {src: "images_dialog/BlueOniNeutralArt.png", id: "BlueOniNeutralArt"}, {
      src: "images_dialog/CoachNeutralArt.png",
      id: "CoachNeutralArt"
    }, {src: "images_dialog/ConviniNeutralArt.png", id: "ConviniNeutralArt"}, {
      src: "images_dialog/deer_portrait.png",
      id: "deer_portrait"
    }, {
      src: "images_dialog/DialogueFillArt1.png",
      id: "DialogueFillArt1"
    }, {
      src: "images_dialog/gatekeeper_portrait.png",
      id: "gatekeeper_portrait"
    }, {
      src: "images_dialog/InariNeutralArt.png",
      id: "InariNeutralArt"
    }, {
      src: "images_dialog/InvisibleOctopusNeutral.png",
      id: "InvisibleOctopusNeutral"
    }, {src: "images_dialog/KappaNeutralArt.png", id: "KappaNeutralArt"}, {
      src: "images_dialog/KarasuNeutralArt.png",
      id: "KarasuNeutralArt"
    }, {
      src: "images_dialog/kijimunaNeutralArt.png",
      id: "kijimunaNeutralArt"
    }, {src: "images_dialog/Koma1NeutralArt.png", id: "Koma1NeutralArt"}, {
      src: "images_dialog/Koma2NeutralArt.png",
      id: "Koma2NeutralArt"
    }, {
      src: "images_dialog/LittleMonkeyNeutral.png",
      id: "LittleMonkeyNeutral"
    }, {
      src: "images_dialog/locksmith_portrait.png",
      id: "locksmith_portrait"
    }, {src: "images_dialog/LuckyAnnoyedArt11.png", id: "LuckyAnnoyedArt11"}, {
      src: "images_dialog/luckyCuriousArt.png",
      id: "luckyCuriousArt"
    }, {
      src: "images_dialog/LuckyGrinArt.png",
      id: "LuckyGrinArt"
    }, {src: "images_dialog/LuckyHappyArt.png", id: "LuckyHappyArt"}, {
      src: "images_dialog/LuckyHideArt.png",
      id: "LuckyHideArt"
    }, {
      src: "images_dialog/LuckyNeutralArt11111.png",
      id: "LuckyNeutralArt11111"
    }, {src: "images_dialog/LuckyRawrArt.png", id: "LuckyRawrArt"}, {
      src: "images_dialog/LuckyShockedArt.png",
      id: "LuckyShockedArt"
    }, {
      src: "images_dialog/LuckySmileSweatArt.png",
      id: "LuckySmileSweatArt"
    }, {src: "images_dialog/LuckyWideEyedSweatArt.png", id: "LuckyWideEyedSweatArt"}, {
      src: "images_dialog/LuckyWorriedArt.png",
      id: "LuckyWorriedArt"
    }, {src: "images_dialog/momoBlueArt.png", id: "momoBlueArt"}, {
      src: "images_dialog/MomoNeutralArt.png",
      id: "MomoNeutralArt"
    }, {src: "images_dialog/MonkeyNeutralArt.png", id: "MonkeyNeutralArt"}, {
      src: "images_dialog/NoodleCookArt.png",
      id: "NoodleCookArt"
    }, {src: "images_dialog/OniBakerArt.png", id: "OniBakerArt"}, {
      src: "images_dialog/OniPortraitArt.png",
      id: "OniPortraitArt"
    }, {
      src: "images_dialog/otter_portrait.png",
      id: "otter_portrait"
    }, {src: "images_dialog/OverworldMenuButtonBrown.png", id: "OverworldMenuButtonBrown"},
      {src: "images_dialog/OwlNeutralArt.png", id: "OwlNeutralArt"}, {
        src: "images_dialog/porcupine_portrait.png",
        id: "porcupine_portrait"
      }, {
        src: "images_dialog/Portraitbirthdaykidhappy.png",
        id: "Portraitbirthdaykidhappy"
      }, {
        src: "images_dialog/Portraitbirthdaykidsad.png",
        id: "Portraitbirthdaykidsad"
      }, {
        src: "images_dialog/Portraitbirthdaymom.png",
        id: "Portraitbirthdaymom"
      }, {
        src: "images_dialog/PortraitBlackWolfie.png",
        id: "PortraitBlackWolfie"
      }, {src: "images_dialog/Portraitblueleader.png", id: "Portraitblueleader"}, {
        src: "images_dialog/PortraitCrab.png",
        id: "PortraitCrab"
      }, {
        src: "images_dialog/PortraitDustyScroll.png",
        id: "PortraitDustyScroll"
      }, {src: "images_dialog/PortraitFroggy.png", id: "PortraitFroggy"}, {
        src: "images_dialog/Portraitgreenleader.png",
        id: "Portraitgreenleader"
      }, {src: "images_dialog/PortraitKijiDad1.png", id: "PortraitKijiDad1"}, {
        src: "images_dialog/PortraitKijiKid.png",
        id: "PortraitKijiKid"
      }, {
        src: "images_dialog/Portraitkijimunastatue1.png",
        id: "Portraitkijimunastatue1"
      }, {src: "images_dialog/PortraitMomobird.png", id: "PortraitMomobird"}, {
        src: "images_dialog/PortraitMomodadneutral.png",
        id: "PortraitMomodadneutral"
      }, {
        src: "images_dialog/PortraitMomoDog.png",
        id: "PortraitMomoDog"
      }, {
        src: "images_dialog/PortraitMomomomneutral.png",
        id: "PortraitMomomomneutral"
      }, {
        src: "images_dialog/PortraitMomoMonkey.png",
        id: "PortraitMomoMonkey"
      }, {
        src: "images_dialog/PortraitMomotaro.png",
        id: "PortraitMomotaro"
      }, {
        src: "images_dialog/PortraitOtohimeNeutral.png",
        id: "PortraitOtohimeNeutral"
      }, {
        src: "images_dialog/Portraitotohimestatue.png",
        id: "Portraitotohimestatue"
      }, {src: "images_dialog/Portraitowlstatue.png", id: "Portraitowlstatue"},
      {
        src: "images_dialog/PortraitRacerAmad.png",
        id: "PortraitRacerAmad"
      }, {
        src: "images_dialog/PortraitRacerAneutral.png",
        id: "PortraitRacerAneutral"
      }, {
        src: "images_dialog/PortraitracerBmad.png",
        id: "PortraitracerBmad"
      }, {
        src: "images_dialog/PortraitracerBneutral.png",
        id: "PortraitracerBneutral"
      }, {
        src: "images_dialog/Portraitredleader.png",
        id: "Portraitredleader"
      }, {
        src: "images_dialog/Portraitrugbystatue.png",
        id: "Portraitrugbystatue"
      }, {src: "images_dialog/PortraitSupermountaingirl.png", id: "PortraitSupermountaingirl"},
      {
        src: "images_dialog/Portraittanukistatue.png",
        id: "Portraittanukistatue"
      }, {
        src: "images_dialog/Portraittengustatue.png",
        id: "Portraittengustatue"
      }, {
        src: "images_dialog/PortraitWolfie.png",
        id: "PortraitWolfie"
      }, {
        src: "images_dialog/Portraityoichistatue.png",
        id: "Portraityoichistatue"
      }, {
        src: "images_dialog/RainBoyNeutralArt.png",
        id: "RainBoyNeutralArt"
      }, {
        src: "images_dialog/RedOniNeutralArt.png",
        id: "RedOniNeutralArt"
      }, {src: "images_dialog/sister1_portrait.png", id: "sister1_portrait"}, {
        src: "images_dialog/sister2_portrait.png",
        id: "sister2_portrait"
      }, {
        src: "images_dialog/sister3_portrait.png",
        id: "sister3_portrait"
      }, {
        src: "images_dialog/SleepyCatNeutral.png",
        id: "SleepyCatNeutral"
      }, {
        src: "images_dialog/SnowOwlAvatarArt.png",
        id: "SnowOwlAvatarArt"
      }, {
        src: "images_dialog/TanookiNeutralArt.png",
        id: "TanookiNeutralArt"
      }, {
        src: "images_dialog/TenguNeutralArt.png",
        id: "TenguNeutralArt"
      }, {
        src: "images_dialog/Town_people_bat_portrait.png",
        id: "Town_people_bat_portrait"
      }, {src: "images_dialog/Town_people_fish_handicap_portrait.png", id: "Town_people_fish_handicap_portrait"},
      {
        src: "images_dialog/Town_people_fish_portrait.png",
        id: "Town_people_fish_portrait"
      }, {
        src: "images_dialog/Town_people_grandpa_portrait.png",
        id: "Town_people_grandpa_portrait"
      }, {
        src: "images_dialog/Town_people_hare_portrait.png",
        id: "Town_people_hare_portrait"
      }, {
        src: "images_dialog/Town_people_kid_portrait.png",
        id: "Town_people_kid_portrait"
      }, {
        src: "images_dialog/Town_people_nova_portrait.png",
        id: "Town_people_nova_portrait"
      }, {src: "images_dialog/Town_people_pango_portrait.png", id: "Town_people_pango_portrait"},
      {
        src: "images_dialog/Town_people_seahorse_portrait.png",
        id: "Town_people_seahorse_portrait"
      }, {
        src: "images_dialog/Town_people_shiba_portrait.png",
        id: "Town_people_shiba_portrait"
      }, {
        src: "images_dialog/TraineeNoodlesArt1.png",
        id: "TraineeNoodlesArt1"
      }, {src: "images_dialog/TraineeRunArt1.png", id: "TraineeRunArt1"}, {
        src: "images_dialog/TrainWorkerArt.png",
        id: "TrainWorkerArt"
      }, {
        src: "images_dialog/TrophyMasterArt.png",
        id: "TrophyMasterArt"
      }, {src: "images_dialog/UrashimaANeutralrt1.png", id: "UrashimaANeutralrt1"},
      {
        src: "images_dialog/UrashimaMomNeutral.png",
        id: "UrashimaMomNeutral"
      }, {src: "images_dialog/UshiNeutralArt1.png", id: "UshiNeutralArt1"}, {
        src: "images_dialog/WhiteOniAvatarArt.png",
        id: "WhiteOniAvatarArt"
      }, {src: "images_dialog/yellowleader.png", id: "yellowleader"}, {
        src: "images_dialog/YouichiNeutralArt.png",
        id: "YouichiNeutralArt"
      }, {src: "images_dialog/YoungArcherNeutralArt.png", id: "YoungArcherNeutralArt"}],
    tB: []
  };
  (a.Stage = function (d) {
    createjs.Stage.call(this, d)
  }).prototype = c = new createjs.Stage;
  c.Ca = function (d) {
    this.tickEnabled =
      d
  };
  c.play = function () {
    this.tickEnabled = ! 0;
    this.getChildAt(0).gotoAndPlay(this.vp())
  };
  c.stop = function (d) {
    d && this.seek(d);
    this.tickEnabled = ! 1
  };
  c.seek = function (d) {
    this.tickEnabled = ! 0;
    this.getChildAt(0).gotoAndStop(a.properties.fps * d / 1E3)
  };
  c.getDuration = function () {
    return this.getChildAt(0).totalFrames / a.properties.fps * 1E3
  };
  c.vp = function () {
    return this.getChildAt(0).currentFrame / a.properties.fps * 1E3
  };
  g.Zd = g.Zd || [];
  g.Ve || (g.Ve = []);
  g.oB = function (d) {
    g.Ve.push(d);
    if (0 < g.Zd.length) for (var e = 0; e < g.Zd.length; ++e) d(g.Zd[e])
  };
  g.Kf = g.Kf || {};
  g.Kf.B6B0DC09A20D455BAB815F8FE24BCF08 = {
    getStage: function () {
      return (void 0).getStage()
    }, getLibrary: function () {
      return a
    }, pB: function () {
      return n
    }, Sx: function () {
      return h
    }
  };
  g.Px = function (d) {
    g.Zd.push(d);
    for (var e = 0; e < g.Ve.length; e++) g.Ve[e](d)
  };
  g.kp = function (d) {
    return g.Kf[d]
  };
  g.rB = function (d, e, f, v, u) {
    function E() {
      var F = a.properties.width, H = a.properties.height, I = window.innerWidth, J = window.innerHeight,
        U = window.devicePixelRatio || 1, O = I / F, R = J / H, w = 1;
      if (d) if ("width" == e && P == I || "height" == e && K == J) w =
        T; else if (f) 1 == v ? w = Math.min(O, R) : 2 == v && (w = Math.max(O, R)); else if (I < F || J < H) w = Math.min(O, R);
      u[0].width = F * U * w;
      u[0].height = H * U * w;
      u.forEach(function (W) {
        W.style.width = F * w + "px";
        W.style.height = H * w + "px"
      });
      P = I;
      K = J;
      T = w;
      (void 0).update()
    }

    var P, K, T = 1;
    window.addEventListener("resize", E);
    E()
  }
})(createjs = createjs || {}, Tk = Tk || {});
var Uk = Sk;
(function (b, g) {
  function m() {
    var d = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
    d.gotoAndStop(this.currentFrame);
    d.paused = this.paused;
    d.framerate = this.framerate;
    return d
  }

  function k(d, e, f) {
    d = b.extend(d, b.MovieClip);
    d.clone = m;
    d.j = e;
    d.frameBounds = f;
    return d
  }

  var c, a = {}, n = {}, h = {};
  a.uB = [];
  (a.Sva = function () {
    this.initialize(h.Bitmap4)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 18);
  (a.$va = function () {
    this.initialize(h.Bitmap5)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0,
    0, 32, 32);
  (a.awa = function () {
    this.initialize(h.Bitmap6)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 26, 26);
  (a.cBa = function () {
    this.initialize(h.CloseButtonBrown)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 22, 22);
  (a.T4 = function () {
    this.initialize(h.OverworldMenuButtonBrown)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 22, 22);
  (a.oWa = function () {
    this.initialize(h.PauseButtonBrown)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 22, 22);
  (a.wka = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.$va;
    this.instance.parent = this;
    this.instance.setTransform(0, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1))
  }).prototype = k(a.wka, new b.Rectangle(0, 0, 96, 96), null);
  (a.jka = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.shape = new b.Shape;
    this.shape.graphics.f("#66ff00").s().p("At0MCIAA4DIbpAAIAAYDg");
    this.shape.setTransform(57.55, 45);
    this.shape._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.shape).wait(3).to({_off: ! 1}, 0).wait(1));
    this.instance = new a.oWa;
    this.instance.parent =
      this;
    this.instance.setTransform(-33, -33, 3, 3);
    this.timeline.addTween(b.Tween.get(this.instance).to({_off: ! 0}, 3).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-33, -33, 179.1, 155);
  (a.Pja = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.T4;
    this.instance.parent = this;
    this.instance.setTransform(-11, -22);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1))
  }).prototype = k(a.Pja, new b.Rectangle(-11, -22, 22, 22), null);
  (a.Hfa = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T =
        {joystickControl: {positionMultiplier: 60}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.instance = new a.Sva;
    this.instance.parent = this;
    this.instance.setTransform(-26.85, -26.85, 3, 3);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1))
  }).prototype = k(a.Hfa, new b.Rectangle(-37, -37, 74, 74), null);
  (a.HK = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.shape = new b.Shape;
    this.shape.graphics.f("#66ff00").s().p("AprH5IAAvxITXAAIAAPxg");
    this.shape.setTransform(1, 1.5);
    this.shape._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.shape).wait(3).to({_off: ! 1}, 0).wait(1));
    this.instance = new a.cBa;
    this.instance.parent = this;
    this.instance.setTransform(-33, -33, 3, 3);
    this.timeline.addTween(b.Tween.get(this.instance).to({_off: ! 0}, 3).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-61, -49, 124, 101);
  (a.gba = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.shape = new b.Shape;
    this.shape.graphics.f("#00ff00").s().p("EgfPAnEMAAAhOHMA+fAAAMAAABOHg");
    this.shape._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.shape).wait(3).to({_off: ! 1},
      0).wait(1));
    this.instance = new a.awa;
    this.instance.parent = this;
    this.instance.setTransform(-39, -39, 3, 3);
    this.timeline.addTween(b.Tween.get(this.instance).to({_off: ! 0}, 3).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-200, -250, 400, 500);
  (a.kka = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {pauseButton: {}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.button = new a.jka;
    this.button.name = "button";
    this.button.parent = this;
    new b.ButtonHelper(this.button,
      0, 1, 2, ! 1, new a.jka, 3);
    this.timeline.addTween(b.Tween.get(this.button).wait(1))
  }).prototype = k(a.kka, new b.Rectangle(-33, -33, 66, 66), null);
  (a.RVa = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.Yab = function () {
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).wait(44).call(this.Yab).wait(1));
    this.instance = new a.Pja;
    this.instance.parent = this;
    this.instance.setTransform(0, -11, 1, 1, 0, 0, 0, 0, -11);
    this.instance.alpha = 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(20).to({alpha: 1}, 24).wait(1))
  }).prototype =
    c = new b.MovieClip;
  c.j = new b.Rectangle(-11, -22, 22, 22);
  (a.Qja = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.RVa;
    this.instance.parent = this;
    this.instance.setTransform(0, 0, 1, 1, 0, 0, 0, 0, -11);
    this.shape = new b.Shape;
    this.shape.graphics.f("#66ff00").s().p("Aj5DSIAAmjIHzAAIAAGjg");
    this.shape.setTransform(14.075, 10);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.shape}]}, 3).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-11, -11, 50.1, 42);
  (a.Gfa =
    function (d, e, f) {
      this.initialize(d, e, f, {});
      this.u = function () {
        this.T = {joystick: {}}
      };
      this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
      this.instance = new a.Hfa;
      this.instance.parent = this;
      this.instance.setTransform(-1, -1.9, 1, 1, 0, 0, 0, -1, -1.9);
      this.timeline.addTween(b.Tween.get(this.instance).wait(1));
      this.g = new a.wka;
      this.g.parent = this;
      this.g.setTransform(0, 0, 1, 1, 0, 0, 0, 48, 48);
      this.g.alpha = .3008;
      this.timeline.addTween(b.Tween.get(this.g).wait(1))
    }).prototype = k(a.Gfa, new b.Rectangle(-78, -78, 156,
    156), null);
  (a.Eda = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {closeButton: {}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.button = new a.HK;
    this.button.name = "button";
    this.button.parent = this;
    new b.ButtonHelper(this.button, 0, 1, 2, ! 1, new a.HK, 3);
    this.timeline.addTween(b.Tween.get(this.button).wait(1))
  }).prototype = k(a.Eda, new b.Rectangle(-33, -33, 66, 66), null);
  (a.hba = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {actionButton: {}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.button = new a.gba;
    this.button.name = "button";
    this.button.parent = this;
    new b.ButtonHelper(this.button, 0, 1, 2, ! 1, new a.gba, 3);
    this.timeline.addTween(b.Tween.get(this.button).wait(1))
  }).prototype = k(a.hba, new b.Rectangle(-39, -39, 78, 78), null);
  (a.Rja = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {overworldButton: {}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.button = new a.Qja;
    this.button.name = "button";
    this.button.parent = this;
    new b.ButtonHelper(this.button,
      0, 1, 2, ! 1, new a.Qja, 3);
    this.timeline.addTween(b.Tween.get(this.button).wait(1))
  }).prototype = k(a.Rja, new b.Rectangle(-11, -11, 22, 22), null);
  (a.Ap = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.instance = new a.Rja;
    this.instance.parent = this;
    this.instance.setTransform(36, 36, 3, 3);
    this.instance.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1));
    this.g = new a.kka;
    this.g.parent = this;
    this.g.setTransform(36,
      36);
    this.g.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.g).wait(1));
    this.i = new a.Eda;
    this.i.parent = this;
    this.i.setTransform(924, 36);
    this.i.visible = ! 1;
    this.o = new a.hba;
    this.o.parent = this;
    this.o.setTransform(855, 453);
    this.o.visible = ! 1;
    this.H = new a.Gfa;
    this.H.parent = this;
    this.H.setTransform(114, 453);
    this.H.visible = ! 1;
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.H}, {t: this.o}, {t: this.i}]}).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(483, 273, 474, 228);
  a.properties = {
    id: "0E30EA04F8F04E9B8B08CAC42EEA149E",
    width: 960,
    height: 540,
    fps: 30,
    color: "#cccccc",
    opacity: 1,
    aB: [{src: "images_hud/Bitmap4.png", id: "Bitmap4"}, {
      src: "images_hud/Bitmap5.png",
      id: "Bitmap5"
    }, {src: "images_hud/Bitmap6.png", id: "Bitmap6"}, {
      src: "images_hud/CloseButtonBrown.png",
      id: "CloseButtonBrown"
    }, {
      src: "images_hud/OverworldMenuButtonBrown.png",
      id: "OverworldMenuButtonBrown"
    }, {src: "images_hud/PauseButtonBrown.png", id: "PauseButtonBrown"}],
    tB: []
  };
  (a.Stage = function (d) {
    createjs.Stage.call(this, d)
  }).prototype = c = new createjs.Stage;
  c.Ca = function (d) {
    this.tickEnabled =
      d
  };
  c.play = function () {
    this.tickEnabled = ! 0;
    this.getChildAt(0).gotoAndPlay(this.vp())
  };
  c.stop = function (d) {
    d && this.seek(d);
    this.tickEnabled = ! 1
  };
  c.seek = function (d) {
    this.tickEnabled = ! 0;
    this.getChildAt(0).gotoAndStop(a.properties.fps * d / 1E3)
  };
  c.getDuration = function () {
    return this.getChildAt(0).totalFrames / a.properties.fps * 1E3
  };
  c.vp = function () {
    return this.getChildAt(0).currentFrame / a.properties.fps * 1E3
  };
  g.Zd = g.Zd || [];
  g.Ve || (g.Ve = []);
  g.oB = function (d) {
    g.Ve.push(d);
    if (0 < g.Zd.length) for (var e = 0; e < g.Zd.length; ++e) d(g.Zd[e])
  };
  g.Kf = g.Kf || {};
  g.Kf["0E30EA04F8F04E9B8B08CAC42EEA149E"] = {
    getStage: function () {
      return (void 0).getStage()
    }, getLibrary: function () {
      return a
    }, pB: function () {
      return n
    }, Sx: function () {
      return h
    }
  };
  g.Px = function (d) {
    g.Zd.push(d);
    for (var e = 0; e < g.Ve.length; e++) g.Ve[e](d)
  };
  g.kp = function (d) {
    return g.Kf[d]
  };
  g.rB = function (d, e, f, v, u) {
    function E() {
      var F = a.properties.width, H = a.properties.height, I = window.innerWidth, J = window.innerHeight,
        U = window.devicePixelRatio || 1, O = I / F, R = J / H, w = 1;
      if (d) if ("width" == e && P == I || "height" == e && K ==
        J) w = T; else if (f) 1 == v ? w = Math.min(O, R) : 2 == v && (w = Math.max(O, R)); else if (I < F || J < H) w = Math.min(O, R);
      u[0].width = F * U * w;
      u[0].height = H * U * w;
      u.forEach(function (W) {
        W.style.width = F * w + "px";
        W.style.height = H * w + "px"
      });
      P = I;
      K = J;
      T = w;
      (void 0).update()
    }

    var P, K, T = 1;
    window.addEventListener("resize", E);
    E()
  }
})(createjs = createjs || {}, Uk = Uk || {});
var Vk = Sk;
(function (b, g) {
  var m, k = {}, c = {}, a = {};
  k.uB = [];
  (k.eL = function () {
    this.initialize(a.ScrollRotateArt0)
  }).prototype = m = new b.Bitmap;
  m.j = new b.Rectangle(0, 0, 14, 14);
  (k.fL = function () {
    this.initialize(a.ScrollRotateArt1)
  }).prototype = m = new b.Bitmap;
  m.j = new b.Rectangle(0, 0, 10, 14);
  (k.gL = function () {
    this.initialize(a.ScrollRotateArt2)
  }).prototype = m = new b.Bitmap;
  m.j = new b.Rectangle(0, 0, 6, 14);
  (k.hL = function () {
    this.initialize(a.ScrollRotateArt3)
  }).prototype = m = new b.Bitmap;
  m.j = new b.Rectangle(0, 0, 10, 14);
  (k.iL = function () {
    this.initialize(a.ScrollRotateArt4)
  }).prototype =
    m = new b.Bitmap;
  m.j = new b.Rectangle(0, 0, 14, 14);
  (k.jL = function () {
    this.initialize(a.ScrollRotateArt5)
  }).prototype = m = new b.Bitmap;
  m.j = new b.Rectangle(0, 0, 10, 14);
  (k.kL = function () {
    this.initialize(a.ScrollRotateArt6)
  }).prototype = m = new b.Bitmap;
  m.j = new b.Rectangle(0, 0, 7, 14);
  (k.lL = function () {
    this.initialize(a.ScrollRotateArt7)
  }).prototype = m = new b.Bitmap;
  m.j = new b.Rectangle(0, 0, 11, 14);
  (k.Dm = function (n, h, d) {
    this.initialize(n, h, d, {});
    this.instance = new k.eL;
    this.instance.parent = this;
    this.instance.setTransform(-7,
      -14);
    this.g = new k.fL;
    this.g.parent = this;
    this.g.setTransform(-5, -14);
    this.i = new k.gL;
    this.i.parent = this;
    this.i.setTransform(-3, -14);
    this.o = new k.hL;
    this.o.parent = this;
    this.o.setTransform(-5, -14);
    this.H = new k.iL;
    this.H.parent = this;
    this.H.setTransform(-7, -14);
    this.O = new k.jL;
    this.O.parent = this;
    this.O.setTransform(-5, -14);
    this.$ = new k.kL;
    this.$.parent = this;
    this.$.setTransform(-3.5, -14);
    this.ka = new k.lL;
    this.ka.parent = this;
    this.ka.setTransform(-5.5, -14);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]},
      3).to({state: [{t: this.i}]}, 3).to({state: [{t: this.o}]}, 3).to({state: [{t: this.H}]}, 3).to({state: [{t: this.O}]}, 3).to({state: [{t: this.$}]}, 3).to({state: [{t: this.ka}]}, 3).wait(3))
  }).prototype = m = new b.MovieClip;
  m.j = new b.Rectangle(-7, -14, 14, 14);
  (k.CJ = function (n, h, d) {
    this.initialize(n, h, d, {});
    this.instance = new k.Dm;
    this.instance.parent = this;
    this.instance.setTransform(480, 280, 3, 2.9999, 0, 0, 0, 0, -7);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("#000000").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
    this.shape.setTransform(480, 270);
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = m = new b.MovieClip;
  m.j = new b.Rectangle(480, 270, 480, 270);
  k.properties = {
    id: "348D233EE4ED48398F13A42B3BD73D9C",
    width: 960,
    height: 540,
    fps: 24,
    color: "#ffffff",
    opacity: 1,
    aB: [{
      src: "images_loading/ScrollRotateArt0.png",
      id: "ScrollRotateArt0"
    }, {
      src: "images_loading/ScrollRotateArt1.png",
      id: "ScrollRotateArt1"
    }, {src: "images_loading/ScrollRotateArt2.png", id: "ScrollRotateArt2"}, {
      src: "images_loading/ScrollRotateArt3.png",
      id: "ScrollRotateArt3"
    }, {
      src: "images_loading/ScrollRotateArt4.png",
      id: "ScrollRotateArt4"
    }, {
      src: "images_loading/ScrollRotateArt5.png",
      id: "ScrollRotateArt5"
    }, {
      src: "images_loading/ScrollRotateArt6.png",
      id: "ScrollRotateArt6"
    }, {src: "images_loading/ScrollRotateArt7.png", id: "ScrollRotateArt7"}],
    tB: []
  };
  (k.Stage = function (n) {
    createjs.Stage.call(this, n)
  }).prototype = m = new createjs.Stage;
  m.Ca = function (n) {
    this.tickEnabled = n
  };
  m.play = function () {
    this.tickEnabled = ! 0;
    this.getChildAt(0).gotoAndPlay(this.vp())
  };
  m.stop =
    function (n) {
      n && this.seek(n);
      this.tickEnabled = ! 1
    };
  m.seek = function (n) {
    this.tickEnabled = ! 0;
    this.getChildAt(0).gotoAndStop(k.properties.fps * n / 1E3)
  };
  m.getDuration = function () {
    return this.getChildAt(0).totalFrames / k.properties.fps * 1E3
  };
  m.vp = function () {
    return this.getChildAt(0).currentFrame / k.properties.fps * 1E3
  };
  g.Zd = g.Zd || [];
  g.Ve || (g.Ve = []);
  g.oB = function (n) {
    g.Ve.push(n);
    if (0 < g.Zd.length) for (var h = 0; h < g.Zd.length; ++h) n(g.Zd[h])
  };
  g.Kf = g.Kf || {};
  g.Kf["348D233EE4ED48398F13A42B3BD73D9C"] = {
    getStage: function () {
      return (void 0).getStage()
    },
    getLibrary: function () {
      return k
    }, pB: function () {
      return c
    }, Sx: function () {
      return a
    }
  };
  g.Px = function (n) {
    g.Zd.push(n);
    for (var h = 0; h < g.Ve.length; h++) g.Ve[h](n)
  };
  g.kp = function (n) {
    return g.Kf[n]
  };
  g.rB = function (n, h, d, e, f) {
    function v() {
      var K = k.properties.width, T = k.properties.height, F = window.innerWidth, H = window.innerHeight,
        I = window.devicePixelRatio || 1, J = F / K, U = H / T, O = 1;
      if (n) if ("width" == h && u == F || "height" == h && E == H) O = P; else if (d) 1 == e ? O = Math.min(J, U) : 2 == e && (O = Math.max(J, U)); else if (F < K || H < T) O = Math.min(J, U);
      f[0].width =
        K * I * O;
      f[0].height = T * I * O;
      f.forEach(function (R) {
        R.style.width = K * O + "px";
        R.style.height = T * O + "px"
      });
      u = F;
      E = H;
      P = O;
      (void 0).update()
    }

    var u, E, P = 1;
    window.addEventListener("resize", v);
    v()
  }
})(createjs = createjs || {}, Vk = Vk || {});
var Wk = Sk;
(function (b, g) {
  function m() {
    var d = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
    d.gotoAndStop(this.currentFrame);
    d.paused = this.paused;
    d.framerate = this.framerate;
    return d
  }

  function k(d, e, f) {
    d = b.extend(d, b.MovieClip);
    d.clone = m;
    d.j = e;
    d.frameBounds = f;
    return d
  }

  var c, a = {}, n = {}, h = {};
  a.uB = [];
  (a.Mra = function () {
    this.initialize(h.ArcheryIcon)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 19, 18);
  (a.EK = function () {
    this.initialize(h.ArrowArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0,
    0, 3, 5);
  (a.back = function () {
    this.initialize(h.back)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 22, 22);
  (a.T$a = function () {
    this.initialize(h.backfocus)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 22, 22);
  (a.rua = function () {
    this.initialize(h.Bitmap129)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 27);
  (a.sua = function () {
    this.initialize(h.Bitmap129_1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 27);
  (a.tua = function () {
    this.initialize(h.Bitmap131)
  }).prototype = c = new b.Bitmap;
  c.j =
    new b.Rectangle(0, 0, 20, 27);
  (a.uua = function () {
    this.initialize(h.Bitmap131_1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 27);
  (a.vua = function () {
    this.initialize(h.Bitmap132)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 27);
  (a.wua = function () {
    this.initialize(h.Bitmap132_1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 27);
  (a.xua = function () {
    this.initialize(h.Bitmap133)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 27);
  (a.yua = function () {
    this.initialize(h.Bitmap133_1)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 27);
  (a.zua = function () {
    this.initialize(h.Bitmap134)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 27);
  (a.Aua = function () {
    this.initialize(h.Bitmap134_1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 27);
  (a.Bua = function () {
    this.initialize(h.Bitmap135)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 27);
  (a.Cua = function () {
    this.initialize(h.Bitmap135_1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 27);
  (a.Dua = function () {
    this.initialize(h.Bitmap136)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 27);
  (a.Eua = function () {
    this.initialize(h.Bitmap136_1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 27);
  (a.Fua = function () {
    this.initialize(h.Bitmap137)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 27);
  (a.Gua = function () {
    this.initialize(h.Bitmap137_1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 27);
  (a.Hua = function () {
    this.initialize(h.Bitmap138)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 27);
  (a.Iua = function () {
    this.initialize(h.Bitmap138_1)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 27);
  (a.Jua = function () {
    this.initialize(h.Bitmap139)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 27);
  (a.Kua = function () {
    this.initialize(h.Bitmap139_1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 27);
  (a.Lua = function () {
    this.initialize(h.Bitmap140)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 27);
  (a.Mua = function () {
    this.initialize(h.Bitmap140_1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 27);
  (a.Nua = function () {
    this.initialize(h.Bitmap141)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 27);
  (a.Oua = function () {
    this.initialize(h.Bitmap141_1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 27);
  (a.Pua = function () {
    this.initialize(h.Bitmap142)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 27);
  (a.Qua = function () {
    this.initialize(h.Bitmap142_1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 27);
  (a.Rua = function () {
    this.initialize(h.Bitmap143)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 27);
  (a.Sua = function () {
    this.initialize(h.Bitmap143_1)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 27);
  (a.mca = function () {
    this.initialize(h.Bitmap147)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 26);
  (a.nca = function () {
    this.initialize(h.Bitmap148)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 30);
  (a.oca = function () {
    this.initialize(h.Bitmap149)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 30);
  (a.qca = function () {
    this.initialize(h.Bitmap150)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 26);
  (a.rca = function () {
    this.initialize(h.Bitmap151)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 26);
  (a.sca = function () {
    this.initialize(h.Bitmap152)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 26);
  (a.tca = function () {
    this.initialize(h.Bitmap153)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 26);
  (a.Tua = function () {
    this.initialize(h.Bitmap178)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 32);
  (a.Vua = function () {
    this.initialize(h.Bitmap180)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 29);
  (a.Wua = function () {
    this.initialize(h.Bitmap181)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 29);
  (a.Xua = function () {
    this.initialize(h.Bitmap182)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 29);
  (a.Yua = function () {
    this.initialize(h.Bitmap183)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 16, 16);
  (a.Zua = function () {
    this.initialize(h.Bitmap186)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 16, 16);
  (a.$ua = function () {
    this.initialize(h.Bitmap187)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 16, 16);
  (a.ava = function () {
    this.initialize(h.Bitmap188)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 16, 16);
  (a.bva = function () {
    this.initialize(h.Bitmap189)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 29);
  (a.dva = function () {
    this.initialize(h.Bitmap191)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 24);
  (a.eva = function () {
    this.initialize(h.Bitmap192)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 23, 25);
  (a.fva = function () {
    this.initialize(h.Bitmap196)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 21, 25);
  (a.gva = function () {
    this.initialize(h.Bitmap197)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 23, 25);
  (a.hva = function () {
    this.initialize(h.Bitmap198)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 21, 25);
  (a.uca = function () {
    this.initialize(h.Bitmap235)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 19, 23);
  (a.vca = function () {
    this.initialize(h.Bitmap236)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 22, 20);
  (a.wca = function () {
    this.initialize(h.Bitmap237)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 21, 29);
  (a.xca = function () {
    this.initialize(h.Bitmap238)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 30);
  (a.mva = function () {
    this.initialize(h.Bitmap239)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 17, 22);
  (a.nva = function () {
    this.initialize(h.Bitmap240)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 17, 21);
  (a.ova = function () {
    this.initialize(h.Bitmap241)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 22);
  (a.pva = function () {
    this.initialize(h.Bitmap242)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 14, 22);
  (a.qva = function () {
    this.initialize(h.Bitmap243)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 17, 22);
  (a.rva = function () {
    this.initialize(h.Bitmap244)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 17, 22);
  (a.sva = function () {
    this.initialize(h.Bitmap245)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 24, 23);
  (a.tva = function () {
    this.initialize(h.Bitmap247)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 23, 23);
  (a.uva = function () {
    this.initialize(h.Bitmap248)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 19, 26);
  (a.vva = function () {
    this.initialize(h.Bitmap249)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 23, 24);
  (a.wva = function () {
    this.initialize(h.Bitmap250)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 23, 25);
  (a.xva = function () {
    this.initialize(h.Bitmap251)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 24, 28);
  (a.yva = function () {
    this.initialize(h.Bitmap252)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 30, 31);
  (a.zva = function () {
    this.initialize(h.Bitmap253)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 29, 29);
  (a.Ava = function () {
    this.initialize(h.Bitmap254)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 27, 23);
  (a.Bva = function () {
    this.initialize(h.Bitmap255)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 28, 23);
  (a.Cva = function () {
    this.initialize(h.Bitmap256)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 26, 25);
  (a.Dva = function () {
    this.initialize(h.Bitmap257)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 22, 29);
  (a.Eva = function () {
    this.initialize(h.Bitmap258)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 37, 40);
  (a.Fva = function () {
    this.initialize(h.Bitmap259)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 25, 30);
  (a.WB = function () {
    this.initialize(h.Bitmap81)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 20);
  (a.YL = function () {
    this.initialize(h.BlackDotArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 14, 14);
  (a.xAa = function () {
    this.initialize(h.ClimbIcon1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 19, 18);
  (a.Vt = function () {
    this.initialize(h.closeButton)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 22, 22);
  (a.Lpa = function () {
    this.initialize(h.closeButtonFocus)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 22, 22);
  (a.AT = function () {
    this.initialize(h.controllerFocus)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 11);
  (a.jab = function () {
    this.initialize(h.controllerIdle)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 11);
  (a.Jda = function () {
    this.initialize(h.ControlsButtonBG)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 119, 21);
  (a.wBa = function () {
    this.initialize(h.ControlsFocus)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 26, 26);
  (a.xBa = function () {
    this.initialize(h.ControlsIdle)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 24, 24);
  (a.mab = function () {
    this.initialize(h.copyFocus)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 26, 26);
  (a.nab = function () {
    this.initialize(h.copyIdle)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 24, 24);
  (a.dCa = function () {
    this.initialize(h.DangoStickArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 133, 8);
  (a.Bab = function () {
    this.initialize(h.emailFocus)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 26, 26);
  (a.Cab = function () {
    this.initialize(h.emailIdle)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 24, 24);
  (a.Fab = function () {
    this.initialize(h.exitFocus)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 26, 26);
  (a.Gab = function () {
    this.initialize(h.exitIdle)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 24, 24);
  (a.Hab = function () {
    this.initialize(h.facebookFocus)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 26, 26);
  (a.Iab = function () {
    this.initialize(h.facebookIdle)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 24, 24);
  (a.u2 = function () {
    this.initialize(h.GreenDangoArt1)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 30, 30);
  (a.v2 = function () {
    this.initialize(h.GreenDangoArt2)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 22, 43);
  (a.w2 = function () {
    this.initialize(h.GreenDangoArt3)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 34, 27);
  (a.OEa = function () {
    this.initialize(h.HighlightDotArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 9, 9);
  (a.OT = function () {
    this.initialize(h.inariArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 16, 20);
  (a.jbb = function () {
    this.initialize(h.inariArt_1)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 16, 20);
  (a.WV = function () {
    this.initialize(h.InariArt2)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 17, 18);
  (a.PT = function () {
    this.initialize(h.indicatorAction)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 11, 11);
  (a.QT = function () {
    this.initialize(h.indicatorActionMobile)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 11, 11);
  (a.RT = function () {
    this.initialize(h.indicatorActionMobilePressed)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 11, 11);
  (a.ST =
    function () {
      this.initialize(h.indicatorActionPressed)
    }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 11, 10);
  (a.TT = function () {
    this.initialize(h.indicatorDown)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 11, 11);
  (a.UT = function () {
    this.initialize(h.indicatorJoystick)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 5, 5);
  (a.VT = function () {
    this.initialize(h.indicatorJoystickBase)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 11, 11);
  (a.kbb = function () {
    this.initialize(h.indicatorLeft)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 11, 11);
  (a.WT = function () {
    this.initialize(h.indicatorLeft_1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 11, 11);
  (a.lbb = function () {
    this.initialize(h.indicatorRight)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 11, 11);
  (a.XT = function () {
    this.initialize(h.indicatorRight_1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 11, 11);
  (a.ZT = function () {
    this.initialize(h.indicatorUp)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 11, 11);
  (a.gM = function () {
    this.initialize(h.KappaArt)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 16, 16);
  (a.bFa = function () {
    this.initialize(h.KappaArt_1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 16, 16);
  (a.hM = function () {
    this.initialize(h.KappaArt2)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 16, 17);
  (a.aW = function () {
    this.initialize(h.KarasuArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 16, 20);
  (a.gFa = function () {
    this.initialize(h.KarasuArt_1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 16, 20);
  (a.bW = function () {
    this.initialize(h.KarasuArt2)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 20);
  (a.gU = function () {
    this.initialize(h.keyboardFocus)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 19, 11);
  (a.ubb = function () {
    this.initialize(h.keyboardIdle)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 19, 11);
  (a.yFa = function () {
    this.initialize(h.Koma1Art)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 99, 49);
  (a.AFa = function () {
    this.initialize(h.Koma2Art)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 91, 51);
  (a.pGa = function () {
    this.initialize(h.LeaderFocus)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 26, 26);
  (a.qGa = function () {
    this.initialize(h.LeaderIdle)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 24, 24);
  (a.lM = function () {
    this.initialize(h.LuckyIdleS)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 22);
  (a.ZJ = function () {
    this.initialize(h.LuckyIdleSArt2)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 22);
  (a.$J = function () {
    this.initialize(h.LuckyIdleSArt3)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 22);
  (a.Ep = function () {
    this.initialize(h.LuckyLocationIconArt)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 14, 13);
  (a.POa = function () {
    this.initialize(h.MarathonIcon)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 19, 18);
  (a.K_ = function () {
    this.initialize(h.menuBG)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 308, 168);
  (a.Nbb = function () {
    this.initialize(h.menuBGMapBG)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 308, 168);
  (a.jUa = function () {
    this.initialize(h.NoStarsArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 18, 4);
  (a.fVa = function () {
    this.initialize(h.OneStarArt)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 19, 6);
  (a.EWa = function () {
    this.initialize(h.PinkDangoArt1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 30, 30);
  (a.FWa = function () {
    this.initialize(h.PinkDangoArt2)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 34, 27);
  (a.GWa = function () {
    this.initialize(h.PinkDangoArt3)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 22, 43);
  (a.TWa = function () {
    this.initialize(h.PongIcon1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 19, 18);
  (a.ncb = function () {
    this.initialize(h.replayFocus)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 26, 26);
  (a.ocb = function () {
    this.initialize(h.replayIdle)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 24, 24);
  (a.Z0a = function () {
    this.initialize(h.RugbyIcon11)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 19, 18);
  (a.eL = function () {
    this.initialize(h.ScrollRotateArt0)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 14, 14);
  (a.fL = function () {
    this.initialize(h.ScrollRotateArt1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 10, 14);
  (a.gL = function () {
    this.initialize(h.ScrollRotateArt2)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 6, 14);
  (a.hL = function () {
    this.initialize(h.ScrollRotateArt3)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 10, 14);
  (a.iL = function () {
    this.initialize(h.ScrollRotateArt4)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 14, 14);
  (a.jL = function () {
    this.initialize(h.ScrollRotateArt5)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 10, 14);
  (a.kL = function () {
    this.initialize(h.ScrollRotateArt6)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 7, 14);
  (a.lL = function () {
    this.initialize(h.ScrollRotateArt7)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 11, 14);
  (a.pcb = function () {
    this.initialize(h.searchFocus)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 26, 26);
  (a.qcb = function () {
    this.initialize(h.searchIdle)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 24, 24);
  (a.jN = function () {
    this.initialize(h.SelectedIconCircleArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 23, 22);
  (a.z1a = function () {
    this.initialize(h.SettingsFocus)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 26, 26);
  (a.A1a = function () {
    this.initialize(h.SettingsIdle)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 24, 24);
  (a.ama = function () {
    this.initialize(h.ShareFocus)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 26, 26);
  (a.bma = function () {
    this.initialize(h.ShareIdle)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 24, 24);
  (a.C1a = function () {
    this.initialize(h.ShareWindow)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 214, 66);
  (a.n2a = function () {
    this.initialize(h.SkateIcon1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 19, 18);
  (a.Ecb = function () {
    this.initialize(h.startBG1)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 92, 21);
  (a.X3a = function () {
    this.initialize(h.StatsMenuBGArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 120, 96);
  (a.w4a = function () {
    this.initialize(h.SwimIcon1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 19, 18);
  (a.K5a = function () {
    this.initialize(h.ThreeStarArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 6);
  (a.vB = function () {
    this.initialize(h.tutBG)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 308, 168);
  (a.Rcb = function () {
    this.initialize(h.twitterFocus)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 26, 26);
  (a.Scb = function () {
    this.initialize(h.twitterIdle)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 24, 24);
  (a.J8a = function () {
    this.initialize(h.TwoStarsArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 19, 6);
  (a.y6 = function () {
    this.initialize(h.UshiArt)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 16, 20);
  (a.b9a = function () {
    this.initialize(h.UshiArt_1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 16, 20);
  (a.fY = function () {
    this.initialize(h.UshiArt2)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 20, 19);
  (a.Cx = function () {
    this.initialize(h.valueBG)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 70, 13);
  (a.rN = function () {
    this.initialize(h.WhiteCircleFrameArt11)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 21, 20);
  (a.vpa = function () {
    this.initialize(h.YellowDangoArt1)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 30, 30);
  (a.wpa = function () {
    this.initialize(h.YellowDangoArt2)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 35, 27);
  (a.xpa = function () {
    this.initialize(h.YellowDangoArt3)
  }).prototype =
    c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 22, 43);
  (a.$t = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.b9a;
    this.instance.parent = this;
    this.instance.setTransform(-8, -20);
    this.g = new a.fY;
    this.g.parent = this;
    this.g.setTransform(-10, -19);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]}, 15).wait(15))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-10, -20, 20, 20);
  (a.Xt = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.gFa;
    this.instance.parent =
      this;
    this.instance.setTransform(-8, -20);
    this.g = new a.bW;
    this.g.parent = this;
    this.g.setTransform(-10, -20);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]}, 15).wait(15))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-10, -20, 20, 20);
  (a.Mw = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.bFa;
    this.instance.parent = this;
    this.instance.setTransform(-8, -16);
    this.g = new a.hM;
    this.g.parent = this;
    this.g.setTransform(-8, -17);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]},
      15).wait(15))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-8, -17, 16, 17);
  (a.Uw = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.OT;
    this.instance.parent = this;
    this.instance.setTransform(-8, -20);
    this.g = new a.WV;
    this.g.parent = this;
    this.g.setTransform(-8, -18);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]}, 15).wait(15))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-8, -20, 17, 20);
  (a.cC = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.label =
      new b.Text("Label", "10px 'PixelMplus10'", "#ffffff");
    this.label.name = "label";
    this.label.textAlign = "center";
    this.label.lineHeight = 11;
    this.label.lineWidth = 118;
    this.label.parent = this;
    this.label.setTransform(0, -5);
    this.timeline.addTween(b.Tween.get(this.label).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("#1d0900").s().p("AprBNIAAiaITXAAIAACag");
    this.shape.setTransform(0, -.25);
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.cC, new b.Rectangle(-62, -8, 124, 16), null);
  (a.oC =
    function (d, e, f) {
      this.initialize(d, e, f, {});
      this.shape = new b.Shape;
      this.shape.graphics.f("rgba(29,9,0,0.247)").s().p("AikClIAAlJIFJAAIAAFJg");
      this.shape.setTransform(-34.5, 19.5);
      this.shape._off = ! 0;
      this.timeline.addTween(b.Tween.get(this.shape).wait(15).to({_off: ! 1}, 0).to({_off: ! 0}, 9).wait(27).to({
        _off: ! 1,
        x: 16.5
      }, 0).to({_off: ! 0}, 9).wait(27).to({_off: ! 1, x: 67.5}, 0).to({_off: ! 0}, 9).wait(27).to({
        _off: ! 1,
        x: 118.5
      }, 0).to({_off: ! 0}, 9).wait(12));
      this.instance = new a.ZT;
      this.instance.parent = this;
      this.instance.setTransform(-51,
        0, 3, 3);
      this.timeline.addTween(b.Tween.get(this.instance).wait(15).to({y: 3}, 0).wait(9).to({y: 0}, 0).wait(120));
      this.g = new a.TT;
      this.g.parent = this;
      this.g.setTransform(0, 0, 3, 3);
      this.timeline.addTween(b.Tween.get(this.g).wait(51).to({y: 3}, 0).wait(9).to({y: 0}, 0).wait(84));
      this.i = new a.WT;
      this.i.parent = this;
      this.i.setTransform(51, 0, 3, 3);
      this.timeline.addTween(b.Tween.get(this.i).wait(87).to({y: 3}, 0).wait(9).to({y: 0}, 0).wait(48));
      this.o = new a.XT;
      this.o.parent = this;
      this.o.setTransform(102, 0, 3, 3);
      this.timeline.addTween(b.Tween.get(this.o).wait(123).to({y: 3},
        0).wait(9).to({y: 0}, 0).wait(12));
      d = new b.Shape;
      d._off = ! 0;
      d.graphics.p("AkrHgIAAu/IJXAAIAAO/g");
      d.setTransform(-9, -66);
      this.H = new a.Yua;
      this.H.parent = this;
      this.H.setTransform(-33, -30, 3, 3);
      this.H._off = ! 0;
      this.O = new a.Zua;
      this.O.parent = this;
      this.O.setTransform(-33, -30, 3, 3);
      this.O._off = ! 0;
      this.$ = new a.$ua;
      this.$.parent = this;
      this.$.setTransform(-33, -30, 3, 3);
      this.$._off = ! 0;
      this.ka = new a.ava;
      this.ka.parent = this;
      this.ka.setTransform(-33, -30, 3, 3);
      this.ka._off = ! 0;
      e = [this.H, this.O, this.$, this.ka];
      for (f = 0; f <
      e.length; f++) e[f].mask = d;
      this.timeline.addTween(b.Tween.get(this.H).wait(3).to({_off: ! 1}, 0).wait(3).to({y: -42}, 0).wait(3).to({y: -54}, 0).wait(3).to({y: -66}, 0).wait(3).to({y: -78}, 0).wait(3).to({y: -90}, 0).wait(3).to({y: -102}, 0).wait(3).to({y: -114}, 0).wait(3).to({y: -126}, 0).wait(3).to({y: -138}, 0).wait(3).to({y: -150}, 0).to({_off: ! 0}, 3).wait(108));
      this.timeline.addTween(b.Tween.get(this.O).wait(39).to({_off: ! 1}, 0).wait(3).to({y: -42}, 0).wait(3).to({y: -54}, 0).wait(3).to({y: -66}, 0).wait(3).to({y: -78}, 0).wait(3).to({y: -90},
        0).wait(3).to({y: -102}, 0).wait(3).to({y: -114}, 0).wait(3).to({y: -126}, 0).wait(3).to({y: -138}, 0).wait(3).to({y: -150}, 0).to({_off: ! 0}, 3).wait(72));
      this.timeline.addTween(b.Tween.get(this.$).wait(75).to({_off: ! 1}, 0).wait(3).to({y: -42}, 0).wait(3).to({y: -54}, 0).wait(3).to({y: -66}, 0).wait(3).to({y: -78}, 0).wait(3).to({y: -90}, 0).wait(3).to({y: -102}, 0).wait(3).to({y: -114}, 0).wait(3).to({y: -126}, 0).wait(3).to({y: -138}, 0).wait(3).to({y: -150}, 0).to({_off: ! 0}, 3).wait(36));
      this.timeline.addTween(b.Tween.get(this.ka).wait(111).to({_off: ! 1},
        0).wait(3).to({y: -42}, 0).wait(3).to({y: -54}, 0).wait(3).to({y: -66}, 0).wait(3).to({y: -78}, 0).wait(3).to({y: -90}, 0).wait(3).to({y: -102}, 0).wait(3).to({y: -114}, 0).wait(3).to({y: -126}, 0).wait(3).to({y: -138}, 0).wait(3).to({y: -150}, 0).wait(3));
      this.ta = new a.Vua;
      this.ta.parent = this;
      this.ta.setTransform(63, -111, 3, 3);
      this.va = new a.Wua;
      this.va.parent = this;
      this.va.setTransform(63, -111, 3, 3);
      this.wa = new a.Xua;
      this.wa.parent = this;
      this.wa.setTransform(66, -111, 3, 3);
      this.ya = new a.bva;
      this.ya.parent = this;
      this.ya.setTransform(63,
        -111, 3, 3);
      this.Aa = new a.dva;
      this.Aa.parent = this;
      this.Aa.setTransform(66, -105, 3, 3);
      this.Ba = new a.eva;
      this.Ba.parent = this;
      this.Ba.setTransform(51, -111, 3, 3);
      this.Da = new a.fva;
      this.Da.parent = this;
      this.Da.setTransform(60, -117, 3, 3);
      this.Ea = new a.gva;
      this.Ea.parent = this;
      this.Ea.setTransform(66, -111, 3, 3);
      this.Ga = new a.hva;
      this.Ga.parent = this;
      this.Ga.setTransform(63, -117, 3, 3);
      this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.ta}]}).to({state: [{t: this.va}]}, 15).to({state: [{t: this.wa}]}, 3).to({state: [{t: this.va}]},
        6).to({state: [{t: this.ta}]}, 3).to({state: [{t: this.ya}]}, 24).to({state: [{t: this.Aa}]}, 3).to({state: [{t: this.ya}]}, 6).to({state: [{t: this.ta}]}, 3).to({state: [{t: this.Ba}]}, 24).to({state: [{t: this.Da}]}, 3).to({state: [{t: this.Ba}]}, 6).to({state: [{t: this.ta}]}, 3).to({state: [{t: this.Ea}]}, 24).to({state: [{t: this.Ga}]}, 3).to({state: [{t: this.Ea}]}, 6).to({state: [{t: this.ta}]}, 3).wait(9));
      this.timeline.addTween(b.Tween.get(this.ta).to({_off: ! 0}, 15).wait(12).to({_off: ! 1}, 0).to({_off: ! 0}, 24).wait(12).to({_off: ! 1},
        0).to({_off: ! 0}, 24).wait(12).to({_off: ! 1}, 0).to({_off: ! 0}, 24).wait(12).to({_off: ! 1}, 0).wait(9));
      this.Ha = new a.Tua;
      this.Ha.parent = this;
      this.Ha.setTransform(-39, -114, 3, 3);
      this.timeline.addTween(b.Tween.get(this.Ha).wait(144))
    }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-51, -117, 186, 153);
  (a.T5 = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.yva;
    this.instance.parent = this;
    this.instance.setTransform(-15, -31);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1))
  }).prototype = k(a.T5,
    new b.Rectangle(-15, -31, 30, 31), null);
  (a.R5 = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.xva;
    this.instance.parent = this;
    this.instance.setTransform(-12, -28);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1))
  }).prototype = k(a.R5, new b.Rectangle(-12, -28, 24, 28), null);
  (a.z5 = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.wva;
    this.instance.parent = this;
    this.instance.setTransform(-43, -35);
    this.g = new a.vva;
    this.g.parent = this;
    this.g.setTransform(14, -34);
    this.i = new a.uva;
    this.i.parent = this;
    this.i.setTransform(-10, -27);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.i}, {t: this.g}, {t: this.instance}]}).wait(1))
  }).prototype = k(a.z5, new b.Rectangle(-43, -35, 80, 34), null);
  (a.vka = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.zva;
    this.instance.parent = this;
    this.instance.setTransform(-3, -29);
    this.g = new a.Ava;
    this.g.parent = this;
    this.g.setTransform(-4, -28);
    this.i = new a.Bva;
    this.i.parent = this;
    this.i.setTransform(-9, -23);
    this.o = new a.Cva;
    this.o.parent = this;
    this.o.setTransform(-8, -32);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]}, 7).to({state: [{t: this.i}]}, 4).to({state: [{t: this.o}]}, 7).wait(5))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-9, -32, 35, 32);
  (a.pka = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.Dva;
    this.instance.parent = this;
    this.instance.setTransform(-11, -29);
    this.g = new a.Eva;
    this.g.parent = this;
    this.g.setTransform(-8, -33);
    this.i = new a.Fva;
    this.i.parent = this;
    this.i.setTransform(-5,
      -20);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance, p: {y: -29}}]}).to({
      state: [{
        t: this.instance,
        p: {y: -31}
      }]
    }, 24).to({state: [{t: this.g}]}, 3).to({state: [{t: this.i}]}, 1).wait(19))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-11, -33, 40, 43);
  (a.Bia = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.mva;
    this.instance.parent = this;
    this.instance.setTransform(-3, -22);
    this.g = new a.nva;
    this.g.parent = this;
    this.g.setTransform(-3, -23);
    this.i = new a.ova;
    this.i.parent = this;
    this.i.setTransform(-3,
      -21);
    this.o = new a.pva;
    this.o.parent = this;
    this.o.setTransform(0, -22);
    this.H = new a.qva;
    this.H.parent = this;
    this.H.setTransform(0, -23);
    this.O = new a.rva;
    this.O.parent = this;
    this.O.setTransform(-1, -21);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]}, 3).to({state: [{t: this.i}]}, 3).to({state: [{t: this.o}]}, 3).to({state: [{t: this.H}]}, 3).to({state: [{t: this.O}]}, 3).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-3, -23, 20, 24);
  (a.AW = function (d, e, f) {
    this.initialize(d,
      e, f, {});
    this.instance = new a.sva;
    this.instance.parent = this;
    this.instance.setTransform(-12, -23);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1))
  }).prototype = k(a.AW, new b.Rectangle(-12, -23, 24, 23), null);
  (a.y3 = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.tva;
    this.instance.parent = this;
    this.instance.setTransform(-11.5, -23);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1))
  }).prototype = k(a.y3, new b.Rectangle(-11.5, -23, 23, 23), null);
  (a.rT = function (d, e, f) {
    this.initialize(d,
      e, f, {});
    this.instance = new a.mca;
    this.instance.parent = this;
    this.instance.setTransform(302, -111, 3, 3);
    this.g = new a.nca;
    this.g.parent = this;
    this.g.setTransform(302, -111, 3, 3);
    this.i = new a.oca;
    this.i.parent = this;
    this.i.setTransform(302, -111, 3, 3);
    this.o = new a.qca;
    this.o.parent = this;
    this.o.setTransform(302, -111, 3, 3);
    this.H = new a.rca;
    this.H.parent = this;
    this.H.setTransform(305, -111, 3, 3);
    this.O = new a.sca;
    this.O.parent = this;
    this.O.setTransform(305, -111, 3, 3);
    this.$ = new a.tca;
    this.$.parent = this;
    this.$.setTransform(305,
      -111, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]}, 6).to({state: [{t: this.i}]}, 3).to({state: [{t: this.o}]}, 3).to({state: [{t: this.H}]}, 3).to({state: [{t: this.O}]}, 3).to({state: [{t: this.$}]}, 3).to({state: [{t: this.instance}]}, 3).to({state: [{t: this.g}]}, 6).to({state: [{t: this.i}]}, 3).to({state: [{t: this.o}]}, 3).to({state: [{t: this.H}]}, 3).to({state: [{t: this.O}]}, 3).to({state: [{t: this.$}]}, 3).wait(3));
    this.ka = new a.uua;
    this.ka.parent = this;
    this.ka.setTransform(-10,
      -111, 3, 3);
    this.ta = new a.wua;
    this.ta.parent = this;
    this.ta.setTransform(-1, -111, 3, 3);
    this.va = new a.yua;
    this.va.parent = this;
    this.va.setTransform(8, -111, 3, 3);
    this.wa = new a.Aua;
    this.wa.parent = this;
    this.wa.setTransform(17, -111, 3, 3);
    this.ya = new a.Cua;
    this.ya.parent = this;
    this.ya.setTransform(26, -111, 3, 3);
    this.Aa = new a.Eua;
    this.Aa.parent = this;
    this.Aa.setTransform(35, -111, 3, 3);
    this.Ba = new a.Gua;
    this.Ba.parent = this;
    this.Ba.setTransform(44, -111, 3, 3);
    this.Da = new a.Iua;
    this.Da.parent = this;
    this.Da.setTransform(47,
      -111, 3, 3);
    this.Ea = new a.Kua;
    this.Ea.parent = this;
    this.Ea.setTransform(38, -111, 3, 3);
    this.Ga = new a.Mua;
    this.Ga.parent = this;
    this.Ga.setTransform(29, -111, 3, 3);
    this.Ha = new a.Oua;
    this.Ha.parent = this;
    this.Ha.setTransform(20, -111, 3, 3);
    this.Ia = new a.Qua;
    this.Ia.parent = this;
    this.Ia.setTransform(11, -111, 3, 3);
    this.Ja = new a.Sua;
    this.Ja.parent = this;
    this.Ja.setTransform(2, -111, 3, 3);
    this.Ka = new a.sua;
    this.Ka.parent = this;
    this.Ka.setTransform(-19, -111, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.ka}]}).to({state: [{t: this.ta}]},
      3).to({state: [{t: this.va}]}, 3).to({state: [{t: this.wa}]}, 3).to({state: [{t: this.ya}]}, 3).to({state: [{t: this.Aa}]}, 3).to({state: [{t: this.Ba}]}, 3).to({state: [{t: this.Da}]}, 6).to({state: [{t: this.Ea}]}, 3).to({state: [{t: this.Ga}]}, 3).to({state: [{t: this.Ha}]}, 3).to({state: [{t: this.Ia}]}, 3).to({state: [{t: this.Ja}]}, 3).to({state: [{t: this.Ka}]}, 3).wait(6));
    this.La = new a.RT;
    this.La.parent = this;
    this.La.setTransform(316, 3, 2.9999, 2.9999);
    this.Ma = new a.QT;
    this.Ma.parent = this;
    this.Ma.setTransform(316, 0, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.La}]}).to({state: [{t: this.Ma}]},
      6).to({state: [{t: this.La}]}, 18).to({state: [{t: this.Ma}]}, 6).wait(18));
    this.Na = new a.UT;
    this.Na.parent = this;
    this.Na.setTransform(37, 9, 3, 3);
    this.timeline.addTween(b.Tween.get(this.Na).wait(3).to({x: 49}, 0).wait(12).to({x: 46}, 0).wait(3).to({x: 34}, 0).wait(5).to({x: 31}, 0).wait(1).to({x: 22}, 0).wait(3).to({x: 19}, 0).wait(12).to({x: 22}, 0).wait(3).to({x: 34}, 0).wait(5).to({x: 37}, 0).wait(1));
    this.Oa = new a.VT;
    this.Oa.parent = this;
    this.Oa.setTransform(25, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.Oa).wait(48))
  }).prototype =
    c = new b.MovieClip;
  c.j = new b.Rectangle(-19, -111, 381, 147);
  (a.qT = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.mca;
    this.instance.parent = this;
    this.instance.setTransform(302, -111, 3, 3);
    this.g = new a.nca;
    this.g.parent = this;
    this.g.setTransform(302, -111, 3, 3);
    this.i = new a.oca;
    this.i.parent = this;
    this.i.setTransform(302, -111, 3, 3);
    this.o = new a.qca;
    this.o.parent = this;
    this.o.setTransform(302, -111, 3, 3);
    this.H = new a.rca;
    this.H.parent = this;
    this.H.setTransform(305, -111, 3, 3);
    this.O = new a.sca;
    this.O.parent =
      this;
    this.O.setTransform(305, -111, 3, 3);
    this.$ = new a.tca;
    this.$.parent = this;
    this.$.setTransform(305, -111, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]}, 6).to({state: [{t: this.i}]}, 3).to({state: [{t: this.o}]}, 3).to({state: [{t: this.H}]}, 3).to({state: [{t: this.O}]}, 3).to({state: [{t: this.$}]}, 3).to({state: [{t: this.instance}]}, 3).to({state: [{t: this.g}]}, 6).to({state: [{t: this.i}]}, 3).to({state: [{t: this.o}]}, 3).to({state: [{t: this.H}]}, 3).to({state: [{t: this.O}]},
      3).to({state: [{t: this.$}]}, 3).wait(3));
    this.ka = new a.tua;
    this.ka.parent = this;
    this.ka.setTransform(-10, -111, 3, 3);
    this.ta = new a.vua;
    this.ta.parent = this;
    this.ta.setTransform(-1, -111, 3, 3);
    this.va = new a.xua;
    this.va.parent = this;
    this.va.setTransform(8, -111, 3, 3);
    this.wa = new a.zua;
    this.wa.parent = this;
    this.wa.setTransform(17, -111, 3, 3);
    this.ya = new a.Bua;
    this.ya.parent = this;
    this.ya.setTransform(26, -111, 3, 3);
    this.Aa = new a.Dua;
    this.Aa.parent = this;
    this.Aa.setTransform(35, -111, 3, 3);
    this.Ba = new a.Fua;
    this.Ba.parent =
      this;
    this.Ba.setTransform(44, -110, 3, 3);
    this.Da = new a.Hua;
    this.Da.parent = this;
    this.Da.setTransform(47, -111, 3, 3);
    this.Ea = new a.Jua;
    this.Ea.parent = this;
    this.Ea.setTransform(38, -111, 3, 3);
    this.Ga = new a.Lua;
    this.Ga.parent = this;
    this.Ga.setTransform(29, -112, 3, 3);
    this.Ha = new a.Nua;
    this.Ha.parent = this;
    this.Ha.setTransform(20, -111, 3, 3);
    this.Ia = new a.Pua;
    this.Ia.parent = this;
    this.Ia.setTransform(11, -111, 3, 3);
    this.Ja = new a.Rua;
    this.Ja.parent = this;
    this.Ja.setTransform(2, -111, 3, 3);
    this.Ka = new a.rua;
    this.Ka.parent =
      this;
    this.Ka.setTransform(-19, -111, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.ka}]}).to({state: [{t: this.ta}]}, 3).to({state: [{t: this.va}]}, 3).to({state: [{t: this.wa}]}, 3).to({state: [{t: this.ya}]}, 3).to({state: [{t: this.Aa}]}, 3).to({state: [{t: this.Ba}]}, 3).to({state: [{t: this.Da}]}, 6).to({state: [{t: this.Ea}]}, 3).to({state: [{t: this.Ga}]}, 3).to({state: [{t: this.Ha}]}, 3).to({state: [{t: this.Ia}]}, 3).to({state: [{t: this.Ja}]}, 3).to({state: [{t: this.Ka}]}, 3).wait(6));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(29,9,0,0.247)").s().p("AikClIAAlJIFJAAIAAFJg");
    this.shape.setTransform(332.5, 16.5);
    this.timeline.addTween(b.Tween.get(this.shape).to({_off: ! 0}, 6).wait(18).to({_off: ! 1}, 0).to({_off: ! 0}, 6).wait(18));
    this.La = new a.ST;
    this.La.parent = this;
    this.La.setTransform(316, 3, 3, 3);
    this.Ma = new a.PT;
    this.Ma.parent = this;
    this.Ma.setTransform(316, 0, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.La}]}).to({state: [{t: this.Ma}]}, 6).to({state: [{t: this.La}]}, 18).to({state: [{t: this.Ma}]},
      6).wait(18));
    this.Ze = new b.Shape;
    this.Ze.graphics.f("rgba(29,9,0,0.247)").s().p("AikClIAAlJIFJAAIAAFJg");
    this.Ze.setTransform(67.5, 19.5);
    this.timeline.addTween(b.Tween.get(this.Ze).to({_off: ! 0}, 18).wait(6).to({
      _off: ! 1,
      x: 16.5
    }, 0).to({_off: ! 0}, 18).wait(6));
    this.Na = new a.kbb;
    this.Na.parent = this;
    this.Na.setTransform(0, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.Na).wait(24).to({y: 3}, 0).wait(18).to({y: 0}, 0).wait(6));
    this.Oa = new a.lbb;
    this.Oa.parent = this;
    this.Oa.setTransform(51, 3, 3, 3);
    this.timeline.addTween(b.Tween.get(this.Oa).wait(18).to({y: 0},
      0).wait(30))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-19, -112, 381, 148);
  (a.$4a = function (d, e, f) {
    this.initialize(d, e, f, {blue: 0, red: 1, green: 2, yellow: 3, none: 4});
    this.u = function () {
      this.T = {
        storageSprite: {
          condition1: "$PLAYER_TEAM == 'blue'",
          frame1: "blue",
          condition2: "$PLAYER_TEAM == 'red'",
          frame2: "red",
          condition3: "$PLAYER_TEAM == 'yellow'",
          frame3: "yellow",
          condition4: "$PLAYER_TEAM == 'green'",
          frame4: "green",
          condition5: "",
          frame5: "none"
        }
      };
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(5));
    this.instance = new a.y6;
    this.instance.parent = this;
    this.instance.setTransform(-8, -20);
    this.g = new a.aW;
    this.g.parent = this;
    this.g.setTransform(-8, -20);
    this.i = new a.gM;
    this.i.parent = this;
    this.i.setTransform(-8, -16);
    this.o = new a.jbb;
    this.o.parent = this;
    this.o.setTransform(-10, -20);
    this.text = new b.Text("?", "10px 'PixelMplus10'", "#ffffff");
    this.text.textAlign = "center";
    this.text.lineHeight = 11;
    this.text.parent = this;
    this.text.setTransform(1.1, -16);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]},
      1).to({state: [{t: this.i}]}, 1).to({state: [{t: this.o}]}, 1).to({state: [{t: this.text}]}, 1).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-10, -20, 18, 20);
  (a.lN = function (d, e, f) {
    this.initialize(d, e, f, {"0star": 0, "1star": 1, "2star": 2, "3star": 3});
    this.u = function () {
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(4));
    this.instance = new a.jUa;
    this.instance.parent = this;
    this.instance.setTransform(-9, -5);
    this.g = new a.fVa;
    this.g.parent = this;
    this.g.setTransform(-10, -6);
    this.i = new a.J8a;
    this.i.parent = this;
    this.i.setTransform(-10, -6);
    this.o = new a.K5a;
    this.o.parent = this;
    this.o.setTransform(-10, -6);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]}, 1).to({state: [{t: this.i}]}, 1).to({state: [{t: this.o}]}, 1).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-10, -6, 20, 6);
  (a.Dm = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.eL;
    this.instance.parent = this;
    this.instance.setTransform(-7, -14);
    this.g = new a.fL;
    this.g.parent = this;
    this.g.setTransform(-5, -14);
    this.i = new a.gL;
    this.i.parent = this;
    this.i.setTransform(-3, -14);
    this.o = new a.hL;
    this.o.parent = this;
    this.o.setTransform(-5, -14);
    this.H = new a.iL;
    this.H.parent = this;
    this.H.setTransform(-7, -14);
    this.O = new a.jL;
    this.O.parent = this;
    this.O.setTransform(-5, -14);
    this.$ = new a.kL;
    this.$.parent = this;
    this.$.setTransform(-3.5, -14);
    this.ka = new a.lL;
    this.ka.parent = this;
    this.ka.setTransform(-5.5, -14);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]},
      5).to({state: [{t: this.i}]}, 5).to({state: [{t: this.o}]}, 5).to({state: [{t: this.H}]}, 5).to({state: [{t: this.O}]}, 5).to({state: [{t: this.$}]}, 5).to({state: [{t: this.ka}]}, 5).wait(5))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-7, -14, 14, 14);
  (a.OM = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.OEa;
    this.instance.parent = this;
    this.timeline.addTween(b.Tween.get(this.instance).to({_off: ! 0}, 15).wait(16))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(0, 0, 9, 9);
  (a.nIa = function (d, e, f) {
    this.initialize(d,
      e, f, {});
    this.instance = new a.Ep;
    this.instance.parent = this;
    this.instance.setTransform(-7, -8);
    this.timeline.addTween(b.Tween.get(this.instance).wait(30))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-7, -8, 14, 13);
  (a.JB = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.lM;
    this.instance.parent = this;
    this.instance.setTransform(-11, -20);
    this.g = new a.ZJ;
    this.g.parent = this;
    this.g.setTransform(-11, -20);
    this.i = new a.$J;
    this.i.parent = this;
    this.i.setTransform(-11, -20);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]},
      27).to({state: [{t: this.i}]}, 1).to({state: [{t: this.instance}]}, 2).to({state: [{t: this.g}]}, 2).to({state: [{t: this.i}]}, 2).to({state: [{t: this.instance}]}, 4).wait(23))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-11, -20, 18, 22);
  (a.Si = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.shape = new b.Shape;
    this.shape.graphics.f("#ff0000").s().p("AwjH+IAAv7MAhHAAAIAAP7g");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.Si, new b.Rectangle(-106, -51, 212, 102), null);
  (a.wV = function (d, e, f) {
    this.initialize(d,
      e, f, {});
    this.instance = new a.dCa;
    this.instance.parent = this;
    this.instance.setTransform(0, -4);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1))
  }).prototype = k(a.wV, new b.Rectangle(0, -4, 133, 8), null);
  (a.mJ = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.Ze = new b.Shape;
    this.Ze.graphics.f("#ff0000").s().p("AwjH+IAAv7MAhHAAAIAAP7g");
    this.timeline.addTween(b.Tween.get(this.Ze).wait(1))
  }).prototype = k(a.mJ, new b.Rectangle(-106, -51, 212, 102), null);
  (a.lX = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance =
      new a.EK;
    this.instance.parent = this;
    this.instance.setTransform(-1.5, -2.5);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1))
  }).prototype = k(a.lX, new b.Rectangle(-1.5, -2.5, 3, 5), null);
  (a.Map = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.Gf = new a.nIa;
    this.Gf.name = "player";
    this.Gf.parent = this;
    this.Gf.setTransform(59, 70);
    this.timeline.addTween(b.Tween.get(this.Gf).wait(1));
    this.instance = new a.X3a;
    this.instance.parent = this;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1))
  }).prototype = k(a.Map,
    new b.Rectangle(0, 0, 120, 96), null);
  (a.mB = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "start"}, keyboardNav: {order: 2}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.label = new b.Text("OKAY", "20px 'PixelMplus10'", "#af824a");
    this.label.name = "label";
    this.label.textAlign = "center";
    this.label.lineHeight = 24;
    this.label.lineWidth = 120;
    this.label.parent = this;
    this.label.setTransform(-2, -22.15, 1.9341, 1.9341);
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({color: "#ffffff"},
      0).wait(2));
    this.instance = new a.Ep;
    this.instance.parent = this;
    this.instance.setTransform(-189, -20, 3, 3);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.Ecb;
    this.g.parent = this;
    this.g.setTransform(-141, -32, 3, 3);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1}, 0).wait(2));
    this.hitArea = new a.mJ;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(-.25, 0, 1.1284, .49, 0, 0, 0, -.2, 0);
    this.hitArea.visible =
      ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-189, -32, 324, 63);
  (a.Doa = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "tutArcheryMobile"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.Bf = new a.mB;
    this.Bf.name = "continueButton";
    this.Bf.parent = this;
    this.Bf.setTransform(3, 194.1, 1, 1, 0, 0, 0, .2, .1);
    this.timeline.addTween(b.Tween.get(this.Bf).wait(1));
    this.Bd = new b.Text("Action Button\nto Shoot",
      "30px 'PixelMplus10'", "#ede4b5");
    this.Bd.name = "control2";
    this.Bd.textAlign = "center";
    this.Bd.lineHeight = 36;
    this.Bd.lineWidth = 242;
    this.Bd.parent = this;
    this.Bd.setTransform(291, 51);
    this.Ad = new b.Text("Joystick\nto Move", "30px 'PixelMplus10'", "#ede4b5");
    this.Ad.name = "control1";
    this.Ad.textAlign = "center";
    this.Ad.lineHeight = 36;
    this.Ad.lineWidth = 244;
    this.Ad.parent = this;
    this.Ad.setTransform(1, 51);
    this.Cd = new b.Text("Hit targets to outscore the champion before time runs out", "30px 'PixelMplus10'", "#af8147");
    this.Cd.name = "rulesContent";
    this.Cd.textAlign = "center";
    this.Cd.lineHeight = 36;
    this.Cd.lineWidth = 241;
    this.Cd.parent = this;
    this.Cd.setTransform(-291.5, -57);
    this.Dd = new b.Text("Rules", "30px 'PixelMplus10'", "#ede4b5");
    this.Dd.name = "rulesLabel";
    this.Dd.textAlign = "center";
    this.Dd.lineHeight = 36;
    this.Dd.lineWidth = 241;
    this.Dd.parent = this;
    this.Dd.setTransform(-291.5, -111);
    this.title = new b.Text("Archery", "60px 'PixelMplus10'", "#ede4b5");
    this.title.name = "title";
    this.title.textAlign = "center";
    this.title.lineHeight =
      68;
    this.title.lineWidth = 853;
    this.title.parent = this;
    this.title.setTransform(-.5, -225);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.title}, {t: this.Dd}, {t: this.Cd}, {t: this.Ad}, {t: this.Bd}]}).wait(1));
    this.rT = new a.rT;
    this.rT.name = "archerySpritesMobile";
    this.rT.parent = this;
    this.rT.setTransform(-25.5, 16.5, 1, 1, 0, 0, 0, 16.5, 16.5);
    this.timeline.addTween(b.Tween.get(this.rT).wait(1));
    this.instance = new a.vB;
    this.instance.parent = this;
    this.instance.setTransform(-462, -252, 3, 3);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.Doa, new b.Rectangle(-480, -270, 960, 540), null);
  (a.Coa = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "tutArcheryDesktop"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.Bf = new a.mB;
    this.Bf.name = "continueButton";
    this.Bf.parent = this;
    this.Bf.setTransform(3, 194.1, 1, 1, 0, 0, 0, .2,
      .1);
    this.timeline.addTween(b.Tween.get(this.Bf).wait(1));
    this.Bd = new b.Text("Spacebar\nto Shoot", "30px 'PixelMplus10'", "#ede4b5");
    this.Bd.name = "control2";
    this.Bd.textAlign = "center";
    this.Bd.lineHeight = 36;
    this.Bd.lineWidth = 242;
    this.Bd.parent = this;
    this.Bd.setTransform(291, 51);
    this.Ad = new b.Text("Left and Right\nto Move", "30px 'PixelMplus10'", "#ede4b5");
    this.Ad.name = "control1";
    this.Ad.textAlign = "center";
    this.Ad.lineHeight = 36;
    this.Ad.lineWidth = 244;
    this.Ad.parent = this;
    this.Ad.setTransform(1, 51);
    this.Cd =
      new b.Text("Hit targets to outscore the champion before time runs out", "30px 'PixelMplus10'", "#af8147");
    this.Cd.name = "rulesContent";
    this.Cd.textAlign = "center";
    this.Cd.lineHeight = 36;
    this.Cd.lineWidth = 241;
    this.Cd.parent = this;
    this.Cd.setTransform(-291.5, -57);
    this.Dd = new b.Text("Rules", "30px 'PixelMplus10'", "#ede4b5");
    this.Dd.name = "rulesLabel";
    this.Dd.textAlign = "center";
    this.Dd.lineHeight = 36;
    this.Dd.lineWidth = 241;
    this.Dd.parent = this;
    this.Dd.setTransform(-291.5, -111);
    this.title = new b.Text("Archery", "60px 'PixelMplus10'",
      "#ede4b5");
    this.title.name = "title";
    this.title.textAlign = "center";
    this.title.lineHeight = 68;
    this.title.lineWidth = 853;
    this.title.parent = this;
    this.title.setTransform(-.5, -225);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.title}, {t: this.Dd}, {t: this.Cd}, {t: this.Ad}, {t: this.Bd}]}).wait(1));
    this.qT = new a.qT;
    this.qT.name = "archerySpritesDesktop";
    this.qT.parent = this;
    this.qT.setTransform(-25.5, 16.5, 1, 1, 0, 0, 0, 16.5, 16.5);
    this.timeline.addTween(b.Tween.get(this.qT).wait(1));
    this.instance = new a.vB;
    this.instance.parent =
      this;
    this.instance.setTransform(-462, -252, 3, 3);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.Coa, new b.Rectangle(-480, -270, 960, 540), null);
  (a.AU = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.T5;
    this.instance.parent = this;
    this.instance.setTransform(325, -68, 3, 3, 0, 0, 0, 0, -15.5);
    this.timeline.addTween(b.Tween.get(this.instance).wait(48));
    this.g = new a.R5;
    this.g.parent = this;
    this.g.setTransform(40, -67, 3, 3, 0, 0, 0, 0, -14);
    this.timeline.addTween(b.Tween.get(this.g).wait(48));
    this.i = new a.RT;
    this.i.parent = this;
    this.i.setTransform(316, 3, 2.9999, 2.9999);
    this.o = new a.QT;
    this.o.parent = this;
    this.o.setTransform(316, 0, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.i}]}).to({state: [{t: this.o}]}, 6).to({state: [{t: this.i}]}, 18).to({state: [{t: this.o}]}, 6).wait(18));
    this.H = new a.UT;
    this.H.parent = this;
    this.H.setTransform(37, 9, 3, 3);
    this.timeline.addTween(b.Tween.get(this.H).wait(3).to({x: 49},
      0).wait(12).to({x: 46}, 0).wait(3).to({x: 34}, 0).wait(5).to({x: 31}, 0).wait(1).to({x: 22}, 0).wait(3).to({x: 19}, 0).wait(12).to({x: 22}, 0).wait(3).to({x: 34}, 0).wait(5).to({x: 37}, 0).wait(1));
    this.O = new a.VT;
    this.O.parent = this;
    this.O.setTransform(25, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.O).wait(48))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-19, -114.5, 389, 150.5);
  (a.zU = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.T5;
    this.instance.parent = this;
    this.instance.setTransform(325, -68,
      3, 3, 0, 0, 0, 0, -15.5);
    this.timeline.addTween(b.Tween.get(this.instance).wait(48));
    this.g = new a.R5;
    this.g.parent = this;
    this.g.setTransform(40, -67, 3, 3, 0, 0, 0, 0, -14);
    this.timeline.addTween(b.Tween.get(this.g).wait(48));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(29,9,0,0.247)").s().p("AikClIAAlJIFJAAIAAFJg");
    this.shape.setTransform(332.5, 16.5);
    this.shape._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.shape).wait(24).to({_off: ! 1}, 0).to({_off: ! 0}, 6).wait(18));
    this.i = new a.PT;
    this.i.parent = this;
    this.i.setTransform(316,
      0, 3, 3);
    this.o = new a.ST;
    this.o.parent = this;
    this.o.setTransform(316, 3, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.i}]}).to({state: [{t: this.o}]}, 24).to({state: [{t: this.i}]}, 6).wait(18));
    this.Ze = new b.Shape;
    this.Ze.graphics.f("rgba(29,9,0,0.247)").s().p("AikClIAAlJIFJAAIAAFJg");
    this.Ze.setTransform(-34.5, 19.5);
    this.timeline.addTween(b.Tween.get(this.Ze).wait(48));
    this.H = new a.ZT;
    this.H.parent = this;
    this.H.setTransform(-51, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.H).wait(48));
    this.O =
      new a.TT;
    this.O.parent = this;
    this.O.setTransform(0, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.O).wait(48));
    this.$ = new a.WT;
    this.$.parent = this;
    this.$.setTransform(51, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.$).wait(48));
    this.ka = new a.XT;
    this.ka.parent = this;
    this.ka.setTransform(102, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.ka).wait(48))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-51, -114.5, 421, 150.5);
  (a.xU = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.z5;
    this.instance.parent =
      this;
    this.instance.setTransform(332.5, -48, 3, 3, 0, 0, 0, 0, -13);
    this.timeline.addTween(b.Tween.get(this.instance).wait(48));
    this.g = new a.y3;
    this.g.parent = this;
    this.g.setTransform(33, -57, 3, 3, 0, 0, 0, 0, -11.5);
    this.timeline.addTween(b.Tween.get(this.g).wait(48));
    this.i = new a.RT;
    this.i.parent = this;
    this.i.setTransform(316, 3, 2.9999, 2.9999);
    this.o = new a.QT;
    this.o.parent = this;
    this.o.setTransform(316, 0, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.i}]}).to({state: [{t: this.o}]}, 6).to({state: [{t: this.i}]},
      18).to({state: [{t: this.o}]}, 6).wait(18));
    this.H = new a.UT;
    this.H.parent = this;
    this.H.setTransform(37, 9, 3, 3);
    this.timeline.addTween(b.Tween.get(this.H).wait(3).to({x: 49}, 0).wait(12).to({x: 46}, 0).wait(3).to({x: 34}, 0).wait(5).to({x: 31}, 0).wait(1).to({x: 22}, 0).wait(3).to({x: 19}, 0).wait(12).to({x: 22}, 0).wait(3).to({x: 34}, 0).wait(5).to({x: 37}, 0).wait(1));
    this.O = new a.VT;
    this.O.parent = this;
    this.O.setTransform(25, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.O).wait(48))
  }).prototype = c = new b.MovieClip;
  c.j =
    new b.Rectangle(-19, -114, 462.5, 150);
  (a.wU = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.z5;
    this.instance.parent = this;
    this.instance.setTransform(332.5, -48, 3, 3, 0, 0, 0, 0, -13);
    this.timeline.addTween(b.Tween.get(this.instance).wait(48));
    this.g = new a.y3;
    this.g.parent = this;
    this.g.setTransform(33, -57, 3, 3, 0, 0, 0, 0, -11.5);
    this.timeline.addTween(b.Tween.get(this.g).wait(48));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(29,9,0,0.247)").s().p("AikClIAAlJIFJAAIAAFJg");
    this.shape.setTransform(332.5,
      16.5);
    this.shape._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.shape).wait(24).to({_off: ! 1}, 0).to({_off: ! 0}, 6).wait(18));
    this.i = new a.PT;
    this.i.parent = this;
    this.i.setTransform(316, 0, 3, 3);
    this.o = new a.ST;
    this.o.parent = this;
    this.o.setTransform(316, 3, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.i}]}).to({state: [{t: this.o}]}, 24).to({state: [{t: this.i}]}, 6).wait(18));
    this.Ze = new b.Shape;
    this.Ze.graphics.f("rgba(29,9,0,0.247)").s().p("AikClIAAlJIFJAAIAAFJg");
    this.Ze.setTransform(-34.5,
      19.5);
    this.timeline.addTween(b.Tween.get(this.Ze).wait(48));
    this.H = new a.ZT;
    this.H.parent = this;
    this.H.setTransform(-51, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.H).wait(48));
    this.O = new a.TT;
    this.O.parent = this;
    this.O.setTransform(0, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.O).wait(48));
    this.$ = new a.WT;
    this.$.parent = this;
    this.$.setTransform(51, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.$).wait(48));
    this.ka = new a.XT;
    this.ka.parent = this;
    this.ka.setTransform(102, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.ka).wait(48))
  }).prototype =
    c = new b.MovieClip;
  c.j = new b.Rectangle(-51, -114, 494.5, 150);
  (a.qU = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.pka;
    this.instance.parent = this;
    this.instance.setTransform(312, -76, 3, 3, 0, 0, 0, 0, -14.5);
    this.timeline.addTween(b.Tween.get(this.instance).wait(48));
    this.g = new a.vka;
    this.g.parent = this;
    this.g.setTransform(17, -65, 3, 3, 0, 0, 0, 0, -14.5);
    this.timeline.addTween(b.Tween.get(this.g).wait(48));
    this.i = new a.RT;
    this.i.parent = this;
    this.i.setTransform(316, 3, 2.9999, 2.9999);
    this.o = new a.QT;
    this.o.parent =
      this;
    this.o.setTransform(316, 0, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.i}]}).to({state: [{t: this.o}]}, 6).to({state: [{t: this.i}]}, 18).to({state: [{t: this.o}]}, 6).wait(18));
    this.H = new a.UT;
    this.H.parent = this;
    this.H.setTransform(37, 9, 3, 3);
    this.timeline.addTween(b.Tween.get(this.H).wait(3).to({x: 49}, 0).wait(12).to({x: 46}, 0).wait(3).to({x: 34}, 0).wait(5).to({x: 31}, 0).wait(1).to({x: 22}, 0).wait(3).to({x: 19}, 0).wait(12).to({x: 22}, 0).wait(3).to({x: 34}, 0).wait(5).to({x: 37}, 0).wait(1));
    this.O =
      new a.VT;
    this.O.parent = this;
    this.O.setTransform(25, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.O).wait(48))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-19, -119.5, 381, 155.5);
  (a.pU = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.pka;
    this.instance.parent = this;
    this.instance.setTransform(312, -76, 3, 3, 0, 0, 0, 0, -14.5);
    this.timeline.addTween(b.Tween.get(this.instance).wait(48));
    this.g = new a.vka;
    this.g.parent = this;
    this.g.setTransform(17, -65, 3, 3, 0, 0, 0, 0, -14.5);
    this.timeline.addTween(b.Tween.get(this.g).wait(48));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(29,9,0,0.247)").s().p("AikClIAAlJIFJAAIAAFJg");
    this.shape.setTransform(332.5, 16.5);
    this.shape._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.shape).wait(24).to({_off: ! 1}, 0).to({_off: ! 0}, 6).wait(18));
    this.i = new a.PT;
    this.i.parent = this;
    this.i.setTransform(316, 0, 3, 3);
    this.o = new a.ST;
    this.o.parent = this;
    this.o.setTransform(316, 3, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.i}]}).to({state: [{t: this.o}]}, 24).to({state: [{t: this.i}]}, 6).wait(18));
    this.Ze = new b.Shape;
    this.Ze.graphics.f("rgba(29,9,0,0.247)").s().p("AikClIAAlJIFJAAIAAFJg");
    this.Ze.setTransform(-34.5, 19.5);
    this.timeline.addTween(b.Tween.get(this.Ze).wait(48));
    this.H = new a.ZT;
    this.H.parent = this;
    this.H.setTransform(-51, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.H).wait(48));
    this.O = new a.TT;
    this.O.parent = this;
    this.O.setTransform(0, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.O).wait(48));
    this.$ = new a.WT;
    this.$.parent = this;
    this.$.setTransform(51, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.$).wait(48));
    this.ka = new a.XT;
    this.ka.parent = this;
    this.ka.setTransform(102, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.ka).wait(48))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-51, -119.5, 413, 155.5);
  (a.mU = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.AW;
    this.instance.parent = this;
    this.instance.setTransform(323, -58, 3, 3, 0, 0, 0, 0, -11.5);
    this.timeline.addTween(b.Tween.get(this.instance).wait(24).to({alpha: .3008}, 0).wait(24));
    this.g = new a.AW;
    this.g.parent = this;
    this.g.setTransform(35, -56, 3, 3,
      0, 0, 0, 0, -11.5);
    this.timeline.addTween(b.Tween.get(this.g).wait(48));
    this.i = new a.RT;
    this.i.parent = this;
    this.i.setTransform(316, 3, 2.9999, 2.9999);
    this.o = new a.QT;
    this.o.parent = this;
    this.o.setTransform(316, 0, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.i}]}).to({state: [{t: this.o}]}, 6).to({state: [{t: this.i}]}, 18).to({state: [{t: this.o}]}, 6).wait(18));
    this.H = new a.UT;
    this.H.parent = this;
    this.H.setTransform(37, 9, 3, 3);
    this.timeline.addTween(b.Tween.get(this.H).wait(3).to({x: 49}, 0).wait(12).to({x: 46},
      0).wait(3).to({x: 34}, 0).wait(5).to({x: 31}, 0).wait(1).to({x: 22}, 0).wait(3).to({x: 19}, 0).wait(12).to({x: 22}, 0).wait(3).to({x: 34}, 0).wait(5).to({x: 37}, 0).wait(1));
    this.O = new a.VT;
    this.O.parent = this;
    this.O.setTransform(25, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.O).wait(48))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-19, -112, 381, 148);
  (a.lU = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.AW;
    this.instance.parent = this;
    this.instance.setTransform(323, -58, 3, 3, 0, 0, 0, 0, -11.5);
    this.timeline.addTween(b.Tween.get(this.instance).wait(24).to({alpha: .3008},
      0).wait(24));
    this.g = new a.AW;
    this.g.parent = this;
    this.g.setTransform(35, -56, 3, 3, 0, 0, 0, 0, -11.5);
    this.timeline.addTween(b.Tween.get(this.g).wait(48));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(29,9,0,0.247)").s().p("AikClIAAlJIFJAAIAAFJg");
    this.shape.setTransform(332.5, 16.5);
    this.shape._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.shape).wait(24).to({_off: ! 1}, 0).to({_off: ! 0}, 6).wait(18));
    this.i = new a.PT;
    this.i.parent = this;
    this.i.setTransform(316, 0, 3, 3);
    this.o = new a.ST;
    this.o.parent = this;
    this.o.setTransform(316,
      3, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.i}]}).to({state: [{t: this.o}]}, 24).to({state: [{t: this.i}]}, 6).wait(18));
    this.Ze = new b.Shape;
    this.Ze.graphics.f("rgba(29,9,0,0.247)").s().p("AikClIAAlJIFJAAIAAFJg");
    this.Ze.setTransform(-34.5, 19.5);
    this.timeline.addTween(b.Tween.get(this.Ze).wait(48));
    this.H = new a.ZT;
    this.H.parent = this;
    this.H.setTransform(-51, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.H).wait(48));
    this.O = new a.TT;
    this.O.parent = this;
    this.O.setTransform(0, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.O).wait(48));
    this.$ = new a.WT;
    this.$.parent = this;
    this.$.setTransform(51, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.$).wait(48));
    this.ka = new a.XT;
    this.ka.parent = this;
    this.ka.setTransform(102, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.ka).wait(48))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-51, -112, 413, 148);
  (a.yT = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.uca;
    this.instance.parent = this;
    this.instance.setTransform(301, -82, 3, 3);
    this.g = new a.vca;
    this.g.parent = this;
    this.g.setTransform(295,
      -73, 3, 3);
    this.i = new a.wca;
    this.i.parent = this;
    this.i.setTransform(301, -118, 3, 3);
    this.o = new a.xca;
    this.o.parent = this;
    this.o.setTransform(307, -125, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]}, 24).to({state: [{t: this.i}]}, 4).to({
      state: [{
        t: this.o,
        p: {y: -125}
      }]
    }, 3).to({state: [{t: this.o, p: {y: -128}}]}, 3).to({
      state: [{
        t: this.o,
        p: {y: -125}
      }]
    }, 3).to({state: [{t: this.i}]}, 3).to({state: [{t: this.g}]}, 4).wait(4));
    this.H = new a.Bia;
    this.H.parent = this;
    this.H.setTransform(20.5,
      -112, 3, 3, 0, 0, 0, 0, -33);
    this.timeline.addTween(b.Tween.get(this.H).wait(48));
    this.O = new a.RT;
    this.O.parent = this;
    this.O.setTransform(316, 3, 2.9999, 2.9999);
    this.$ = new a.QT;
    this.$.parent = this;
    this.$.setTransform(316, 0, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.O}]}).to({state: [{t: this.$}]}, 6).to({state: [{t: this.O}]}, 18).to({state: [{t: this.$}]}, 6).wait(18));
    this.ka = new a.UT;
    this.ka.parent = this;
    this.ka.setTransform(37, 9, 3, 3);
    this.timeline.addTween(b.Tween.get(this.ka).wait(3).to({x: 49},
      0).wait(12).to({x: 46}, 0).wait(3).to({x: 34}, 0).wait(5).to({x: 31}, 0).wait(1).to({x: 22}, 0).wait(3).to({x: 19}, 0).wait(12).to({x: 22}, 0).wait(3).to({x: 34}, 0).wait(5).to({x: 37}, 0).wait(1));
    this.ta = new a.VT;
    this.ta.parent = this;
    this.ta.setTransform(25, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.ta).wait(48))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-19, -128, 383, 164);
  (a.xT = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.uca;
    this.instance.parent = this;
    this.instance.setTransform(301,
      -82, 3, 3);
    this.g = new a.vca;
    this.g.parent = this;
    this.g.setTransform(295, -73, 3, 3);
    this.i = new a.wca;
    this.i.parent = this;
    this.i.setTransform(301, -118, 3, 3);
    this.o = new a.xca;
    this.o.parent = this;
    this.o.setTransform(307, -125, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]}, 24).to({state: [{t: this.i}]}, 4).to({
      state: [{
        t: this.o,
        p: {y: -125}
      }]
    }, 3).to({state: [{t: this.o, p: {y: -128}}]}, 3).to({
      state: [{
        t: this.o,
        p: {y: -125}
      }]
    }, 3).to({state: [{t: this.i}]}, 3).to({state: [{t: this.g}]},
      4).wait(4));
    this.H = new a.Bia;
    this.H.parent = this;
    this.H.setTransform(20.5, -112, 3, 3, 0, 0, 0, 0, -33);
    this.timeline.addTween(b.Tween.get(this.H).wait(48));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(29,9,0,0.247)").s().p("AikClIAAlJIFJAAIAAFJg");
    this.shape.setTransform(332.5, 16.5);
    this.shape._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.shape).wait(24).to({_off: ! 1}, 0).to({_off: ! 0}, 6).wait(18));
    this.O = new a.PT;
    this.O.parent = this;
    this.O.setTransform(316, 0, 3, 3);
    this.$ = new a.ST;
    this.$.parent = this;
    this.$.setTransform(316,
      3, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.O}]}).to({state: [{t: this.$}]}, 24).to({state: [{t: this.O}]}, 6).wait(18));
    this.Ze = new b.Shape;
    this.Ze.graphics.f("rgba(29,9,0,0.247)").s().p("AikClIAAlJIFJAAIAAFJg");
    this.Ze.setTransform(-34.5, 19.5);
    this.timeline.addTween(b.Tween.get(this.Ze).wait(48));
    this.ka = new a.ZT;
    this.ka.parent = this;
    this.ka.setTransform(-51, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.ka).wait(48));
    this.ta = new a.TT;
    this.ta.parent = this;
    this.ta.setTransform(0, 0, 3,
      3);
    this.timeline.addTween(b.Tween.get(this.ta).wait(48));
    this.va = new a.WT;
    this.va.parent = this;
    this.va.setTransform(51, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.va).wait(48));
    this.wa = new a.XT;
    this.wa.parent = this;
    this.wa.setTransform(102, 0, 3, 3);
    this.timeline.addTween(b.Tween.get(this.wa).wait(48))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-51, -128, 415, 164);
  (a.p4a = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "swim"}, keyboardNav: {order: 3}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.label = new a.cC;
    this.label.name = "label";
    this.label.parent = this;
    this.label.setTransform(75, 74);
    this.label.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({visible: ! 0}, 0).wait(2));
    this.instance = new a.OM;
    this.instance.parent = this;
    this.instance.setTransform(34, 10.5, 1, 1, 0, 0, 0, 0, -4.5);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.jN;
    this.g.parent = this;
    this.g.setTransform(-13, -8);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1}, 0).wait(1).to({y: -7}, 0).wait(1));
    this.i = new a.rN;
    this.i.parent = this;
    this.i.setTransform(-12, -7);
    this.timeline.addTween(b.Tween.get(this.i).wait(2).to({y: -6}, 0).wait(1));
    this.o = new a.w4a;
    this.o.parent = this;
    this.o.setTransform(-11, -6);
    this.timeline.addTween(b.Tween.get(this.o).wait(2).to({y: -5}, 0).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent =
      this;
    this.hitArea.setTransform(-1.95, 2.9, .104, .2155, 0, 0, 0, .5, -.5);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-13, -8, 150, 90);
  (a.c2a = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "skate"}, keyboardNav: {order: 4}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.label = new a.cC;
    this.label.name = "label";
    this.label.parent = this;
    this.label.setTransform(75,
      46);
    this.label.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({visible: ! 0}, 0).wait(2));
    this.instance = new a.OM;
    this.instance.parent = this;
    this.instance.setTransform(48, 12.5, 1, 1, 0, 0, 0, 0, -4.5);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.jN;
    this.g.parent = this;
    this.g.setTransform(-13, -10);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1}, 0).wait(1).to({y: -9}, 0).wait(1));
    this.i = new a.rN;
    this.i.parent = this;
    this.i.setTransform(-12, -9);
    this.timeline.addTween(b.Tween.get(this.i).wait(2).to({y: -8}, 0).wait(1));
    this.o = new a.n2a;
    this.o.parent = this;
    this.o.setTransform(-11, -8);
    this.timeline.addTween(b.Tween.get(this.o).wait(2).to({y: -7}, 0).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(-1.95, .9, .104, .2155, 0, 0, 0, .5, -.5);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-13, -10, 150, 64);
  (a.M0a = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "rugby"}, keyboardNav: {order: 7}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.label = new a.cC;
    this.label.name = "label";
    this.label.parent = this;
    this.label.setTransform(-79, 45);
    this.label.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({visible: ! 0}, 0).wait(2));
    this.instance = new a.OM;
    this.instance.parent =
      this;
    this.instance.setTransform(-52.1, -5.1, 1, 1, 0, 0, 0, -.1, -.1);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.jN;
    this.g.parent = this;
    this.g.setTransform(-13, -11);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1}, 0).wait(1).to({y: -10}, 0).wait(1));
    this.i = new a.rN;
    this.i.parent = this;
    this.i.setTransform(-12, -10);
    this.timeline.addTween(b.Tween.get(this.i).wait(2).to({y: -9}, 0).wait(1));
    this.o = new a.Z0a;
    this.o.parent =
      this;
    this.o.setTransform(-11, -9);
    this.timeline.addTween(b.Tween.get(this.o).wait(2).to({y: -8}, 0).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(-1.95, -.1, .104, .2155, 0, 0, 0, .5, -.5);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-141, -11, 151, 64);
  (a.xWa = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {
        button: {eventId: "pingpong"},
        keyboardNav: {order: 6}
      };
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.label = new a.cC;
    this.label.name = "label";
    this.label.parent = this;
    this.label.setTransform(-79, 72);
    this.label.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({visible: ! 0}, 0).wait(2));
    this.instance = new a.OM;
    this.instance.parent = this;
    this.instance.setTransform(-56.5, 4, 1, 1, 0, 0, 0, 4.5, 5);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.jN;
    this.g.parent = this;
    this.g.setTransform(-13, -10);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1}, 0).wait(1).to({y: -9}, 0).wait(1));
    this.i = new a.rN;
    this.i.parent = this;
    this.i.setTransform(-12, -9);
    this.timeline.addTween(b.Tween.get(this.i).wait(2).to({y: -8}, 0).wait(1));
    this.o = new a.TWa;
    this.o.parent = this;
    this.o.setTransform(-11, -8);
    this.timeline.addTween(b.Tween.get(this.o).wait(2).to({y: -7}, 0).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent =
      this;
    this.hitArea.setTransform(-1.95, .9, .104, .2155, 0, 0, 0, .5, -.5);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-141, -10, 151, 90);
  (a.KOa = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "marathon"}, keyboardNav: {order: 8}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.label = new a.cC;
    this.label.name = "label";
    this.label.parent = this;
    this.label.setTransform(-79, 18);
    this.label.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({visible: ! 0}, 0).wait(2));
    this.instance = new a.OM;
    this.instance.parent = this;
    this.instance.setTransform(-61.5, -7.5, 1, 1, 0, 0, 0, 4.5, 4.5);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.jN;
    this.g.parent = this;
    this.g.setTransform(-13, -12);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1}, 0).wait(1).to({y: -11},
      0).wait(1));
    this.i = new a.rN;
    this.i.parent = this;
    this.i.setTransform(-12, -11);
    this.timeline.addTween(b.Tween.get(this.i).wait(2).to({y: -10}, 0).wait(1));
    this.o = new a.POa;
    this.o.parent = this;
    this.o.setTransform(-11, -10);
    this.timeline.addTween(b.Tween.get(this.o).wait(2).to({y: -9}, 0).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(-1.95, -1.1, .104, .2155, 0, 0, 0, .5, -.5);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype =
    c = new b.MovieClip;
  c.j = new b.Rectangle(-141, -12, 151, 38);
  (a.BAa = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "climbing"}, keyboardNav: {order: 5}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.label = new a.cC;
    this.label.name = "label";
    this.label.parent = this;
    this.label.setTransform(-79, 98);
    this.label.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({visible: ! 0}, 0).wait(2));
    this.instance = new a.OM;
    this.instance.parent = this;
    this.instance.setTransform(-84, 13.5, 1, 1, 0, 0, 0, 0, -4.5);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.jN;
    this.g.parent = this;
    this.g.setTransform(-13, -10);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1}, 0).wait(1).to({y: -9}, 0).wait(1));
    this.i = new a.rN;
    this.i.parent = this;
    this.i.setTransform(-12, -9);
    this.timeline.addTween(b.Tween.get(this.i).wait(2).to({y: -8}, 0).wait(1));
    this.o =
      new a.xAa;
    this.o.parent = this;
    this.o.setTransform(-11, -8);
    this.timeline.addTween(b.Tween.get(this.o).wait(2).to({y: -7}, 0).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(-1.95, .9, .104, .2155, 0, 0, 0, .5, -.5);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-141, -10, 151, 116);
  (a.Gra = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T =
        {button: {eventId: "archery"}, keyboardNav: {order: 2}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.label = new a.cC;
    this.label.name = "label";
    this.label.parent = this;
    this.label.setTransform(75, 98);
    this.label.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({visible: ! 0}, 0).wait(2));
    this.instance = new a.OM;
    this.instance.parent = this;
    this.instance.setTransform(30, .5, 1, 1, 0, 0, 0, 0, -4.5);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1},
      0).wait(2));
    this.g = new a.jN;
    this.g.parent = this;
    this.g.setTransform(-13, -10);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1}, 0).wait(1).to({y: -9}, 0).wait(1));
    this.i = new a.rN;
    this.i.parent = this;
    this.i.setTransform(-12, -9);
    this.timeline.addTween(b.Tween.get(this.i).wait(2).to({y: -8}, 0).wait(1));
    this.o = new a.Mra;
    this.o.parent = this;
    this.o.setTransform(-11, -8);
    this.timeline.addTween(b.Tween.get(this.o).wait(2).to({y: -7}, 0).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name =
      "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(-1.95, .9, .104, .2155, 0, 0, 0, .5, -.5);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-13, -10, 150, 116);
  (a.y4a = function (d, e, f) {
    this.initialize(d, e, f, {noScroll: 0, scroll: 1});
    this.u = function () {
      this.T = {
        storageSprite: {
          condition1: "$swim_rating == 3",
          frame1: "scroll",
          condition2: "",
          frame2: "noScroll",
          condition3: "",
          frame3: "",
          condition4: "",
          frame4: "",
          condition5: "",
          frame5: ""
        }
      };
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(2));
    this.instance = new a.YL;
    this.instance.parent = this;
    this.instance.setTransform(-7, -14);
    this.g = new a.Dm;
    this.g.parent = this;
    this.g.setTransform(0, -7, 1, 1, 0, 0, 0, 0, -7);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]}, 1).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-7, -14, 14, 14);
  (a.r2a = function (d, e, f) {
    this.initialize(d, e, f, {noScroll: 0, scroll: 1});
    this.u = function () {
      this.T = {
        storageSprite: {
          condition1: "$skate_rating == 3",
          frame1: "scroll",
          condition2: "",
          frame2: "noScroll",
          condition3: "",
          frame3: "",
          condition4: "",
          frame4: "",
          condition5: "",
          frame5: ""
        }
      };
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(2));
    this.instance = new a.YL;
    this.instance.parent = this;
    this.instance.setTransform(-7, -14);
    this.g = new a.Dm;
    this.g.parent = this;
    this.g.setTransform(0, -7, 1, 1, 0, 0, 0, 0, -7);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]}, 1).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-7,
    -14, 14, 14);
  (a.c1a = function (d, e, f) {
    this.initialize(d, e, f, {noScroll: 0, scroll: 1});
    this.u = function () {
      this.T = {
        storageSprite: {
          condition1: "$rugby_rating == 3",
          frame1: "scroll",
          condition2: "",
          frame2: "noScroll",
          condition3: "",
          frame3: "",
          condition4: "",
          frame4: "",
          condition5: "",
          frame5: ""
        }
      };
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(2));
    this.instance = new a.YL;
    this.instance.parent = this;
    this.instance.setTransform(-7, -14);
    this.g = new a.Dm;
    this.g.parent = this;
    this.g.setTransform(0, -7, 1, 1, 0, 0,
      0, 0, -7);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]}, 1).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-7, -14, 14, 14);
  (a.dXa = function (d, e, f) {
    this.initialize(d, e, f, {noScroll: 0, scroll: 1});
    this.u = function () {
      this.T = {
        storageSprite: {
          condition1: "$pingpong_rating == 3",
          frame1: "scroll",
          condition2: "",
          frame2: "noScroll",
          condition3: "",
          frame3: "",
          condition4: "",
          frame4: "",
          condition5: "",
          frame5: ""
        }
      };
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(2));
    this.instance = new a.YL;
    this.instance.parent = this;
    this.instance.setTransform(-7, -14);
    this.g = new a.Dm;
    this.g.parent = this;
    this.g.setTransform(0, -7, 1, 1, 0, 0, 0, 0, -7);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]}, 1).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-7, -14, 14, 14);
  (a.TOa = function (d, e, f) {
    this.initialize(d, e, f, {noScroll: 0, scroll: 1});
    this.u = function () {
      this.T = {
        storageSprite: {
          condition1: "$marathon_rating == 3", frame1: "scroll", condition2: "",
          frame2: "noScroll", condition3: "", frame3: "", condition4: "", frame4: "", condition5: "", frame5: ""
        }
      };
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(2));
    this.instance = new a.YL;
    this.instance.parent = this;
    this.instance.setTransform(-7, -14);
    this.g = new a.Dm;
    this.g.parent = this;
    this.g.setTransform(0, -7, 1, 1, 0, 0, 0, 0, -7);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]}, 1).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-7, -14, 14, 14);
  (a.zAa =
    function (d, e, f) {
      this.initialize(d, e, f, {noScroll: 0, scroll: 1});
      this.u = function () {
        this.T = {
          storageSprite: {
            condition1: "$climbing_rating == 3",
            frame1: "scroll",
            condition2: "",
            frame2: "noScroll",
            condition3: "",
            frame3: "",
            condition4: "",
            frame4: "",
            condition5: "",
            frame5: ""
          }
        };
        this.stop()
      };
      this.timeline.addTween(b.Tween.get(this).call(this.u).wait(2));
      this.instance = new a.YL;
      this.instance.parent = this;
      this.instance.setTransform(-7, -14);
      this.g = new a.Dm;
      this.g.parent = this;
      this.g.setTransform(0, -7, 1, 1, 0, 0, 0, 0, -7);
      this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]},
        1).wait(1))
    }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-7, -14, 14, 14);
  (a.Sra = function (d, e, f) {
    this.initialize(d, e, f, {noScroll: 0, scroll: 1});
    this.u = function () {
      this.T = {
        storageSprite: {
          condition1: "$archery_rating == 3",
          frame1: "scroll",
          condition2: "",
          frame2: "noScroll",
          condition3: "",
          frame3: "",
          condition4: "",
          frame4: "",
          condition5: "",
          frame5: ""
        }
      };
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(2));
    this.instance = new a.YL;
    this.instance.parent = this;
    this.instance.setTransform(-7, -14);
    this.g = new a.Dm;
    this.g.parent = this;
    this.g.setTransform(0, -7, 1, 1, 0, 0, 0, 0, -7);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]}, 1).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-7, -14, 14, 14);
  (a.v1a = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "srp"}, keyboardNav: {order: 6}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.qcb;
    this.instance.parent =
      this;
    this.instance.setTransform(-10, -10);
    this.g = new a.pcb;
    this.g.parent = this;
    this.g.setTransform(-11, -11);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({
      state: [{
        t: this.g,
        p: {y: -11}
      }]
    }, 1).to({state: [{t: this.g, p: {y: -10}}]}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(2.1, 1.9, .113, .2353, 0, 0, 0, .9, -.4);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-11, -11, 26, 27);
  (a.$la = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "share"}, keyboardNav: {order: 13}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.label = new a.cC;
    this.label.name = "label";
    this.label.parent = this;
    this.label.setTransform(-50, -29);
    this.label.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({visible: ! 0}, 0).wait(2));
    this.instance = new a.bma;
    this.instance.parent =
      this;
    this.instance.setTransform(-12, -11);
    this.g = new a.ama;
    this.g.parent = this;
    this.g.setTransform(-13, -12);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({
      state: [{
        t: this.g,
        p: {y: -12}
      }]
    }, 1).to({state: [{t: this.g, p: {y: -11}}]}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(.05, 1, .1132, .2352, 0, 0, 0, .5, -.2);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-112, -37, 125, 52);
  (a.Xla = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "settings"}, keyboardNav: {order: 10}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.label = new a.cC;
    this.label.name = "label";
    this.label.parent = this;
    this.label.setTransform(50, -29);
    this.label.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({visible: ! 0}, 0).wait(2));
    this.instance = new a.A1a;
    this.instance.parent =
      this;
    this.instance.setTransform(-12, -11);
    this.g = new a.z1a;
    this.g.parent = this;
    this.g.setTransform(-13, -12);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({
      state: [{
        t: this.g,
        p: {y: -12}
      }]
    }, 1).to({state: [{t: this.g, p: {y: -11}}]}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(.05, 1, .1132, .2352, 0, 0, 0, .5, -.2);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-13, -37, 125, 52);
  (a.Sfa = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "leader"}, keyboardNav: {order: 12}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.label = new a.cC;
    this.label.name = "label";
    this.label.parent = this;
    this.label.setTransform(-17, -29);
    this.label.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({visible: ! 0}, 0).wait(2));
    this.instance = new a.qGa;
    this.instance.parent =
      this;
    this.instance.setTransform(-12, -11);
    this.g = new a.pGa;
    this.g.parent = this;
    this.g.setTransform(-13, -12);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({
      state: [{
        t: this.g,
        p: {y: -12}
      }]
    }, 1).to({state: [{t: this.g, p: {y: -11}}]}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(.05, 1, .1132, .2352, 0, 0, 0, .5, -.2);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-79, -37, 124, 52);
  (a.Ida = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "controls"}, keyboardNav: {order: 11}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.label = new a.cC;
    this.label.name = "label";
    this.label.parent = this;
    this.label.setTransform(16, -29);
    this.label.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({visible: ! 0}, 0).wait(2));
    this.instance = new a.xBa;
    this.instance.parent =
      this;
    this.instance.setTransform(-12, -11);
    this.g = new a.wBa;
    this.g.parent = this;
    this.g.setTransform(-13, -12);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({
      state: [{
        t: this.g,
        p: {y: -12}
      }]
    }, 1).to({state: [{t: this.g, p: {y: -11}}]}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(.05, .95, .1132, .2352, 0, 0, 0, .5, -.2);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-46, -37, 124, 52);
  (a.HK = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "close"}, keyboardNav: {order: 1}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.Vt;
    this.instance.parent = this;
    this.instance.setTransform(-11, -12);
    this.g = new a.Lpa;
    this.g.parent = this;
    this.g.setTransform(-11, -12);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g, p: {y: -12}}]},
      1).to({state: [{t: this.g, p: {y: -10}}]}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(.05, -1, .1029, .2161, 0, 0, 0, 1, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-11, -12, 22, 24);
  (a.e1 = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "back"}, keyboardNav: {order: 1}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.back;
    this.instance.parent = this;
    this.instance.setTransform(-11, -12);
    this.g = new a.T$a;
    this.g.parent = this;
    this.g.setTransform(-11, -12);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({
      state: [{
        t: this.g,
        p: {y: -12}
      }]
    }, 1).to({state: [{t: this.g, p: {y: -10}}]}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(.05, -1, .1029, .2161, 0, 0, 0, 1, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype =
    c = new b.MovieClip;
  c.j = new b.Rectangle(-11, -12, 22, 24);
  (a.I8a = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "twitter"}, keyboardNav: {order: 4}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.Scb;
    this.instance.parent = this;
    this.instance.setTransform(-9, -10);
    this.g = new a.Rcb;
    this.g.parent = this;
    this.g.setTransform(-10, -11);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({
      state: [{
        t: this.g,
        p: {y: -11}
      }]
    }, 1).to({state: [{t: this.g, p: {y: -10}}]}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(3.1, 1.95, .113, .2351, 0, 0, 0, .9, -.2);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-10, -11, 26, 27);
  (a.HOa = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "mail"}, keyboardNav: {order: 2}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.Cab;
    this.instance.parent = this;
    this.instance.setTransform(-9, -10);
    this.g = new a.Bab;
    this.g.parent = this;
    this.g.setTransform(-10, -11);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({
      state: [{
        t: this.g,
        p: {y: -11}
      }]
    }, 1).to({state: [{t: this.g, p: {y: -10}}]}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(3.1, 1.95, .113, .2351, 0, 0, 0, .9, -.2);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype =
    c = new b.MovieClip;
  c.j = new b.Rectangle(-10, -11, 26, 27);
  (a.GDa = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "facebook"}, keyboardNav: {order: 3}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.Iab;
    this.instance.parent = this;
    this.instance.setTransform(-9, -10);
    this.g = new a.Hab;
    this.g.parent = this;
    this.g.setTransform(-10, -11);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({
      state: [{
        t: this.g,
        p: {y: -11}
      }]
    }, 1).to({state: [{t: this.g, p: {y: -10}}]}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(3.1, 1.95, .113, .2351, 0, 0, 0, .9, -.2);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-10, -11, 26, 27);
  (a.DBa = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "copy"}, keyboardNav: {order: 5}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.nab;
    this.instance.parent = this;
    this.instance.setTransform(-9, -10);
    this.g = new a.mab;
    this.g.parent = this;
    this.g.setTransform(-10, -11);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({
      state: [{
        t: this.g,
        p: {y: -11}
      }]
    }, 1).to({state: [{t: this.g, p: {y: -10}}]}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(3.1, 1.95, .113, .2351, 0, 0, 0, .9, -.2);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype =
    c = new b.MovieClip;
  c.j = new b.Rectangle(-10, -11, 26, 27);
  (a.dBa = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "closeShare"}, keyboardNav: {order: 1}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.Vt;
    this.instance.parent = this;
    this.instance.setTransform(-11, -12);
    this.g = new a.Lpa;
    this.g.parent = this;
    this.g.setTransform(-11, -12);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({
      state: [{
        t: this.g,
        p: {y: -12}
      }]
    }, 1).to({state: [{t: this.g, p: {y: -10}}]}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(.05, -1, .1029, .2161, 0, 0, 0, 1, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-11, -12, 22, 24);
  (a.B1a = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "share"}, keyboardNav: {order: 2}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.bma;
    this.instance.parent = this;
    this.instance.setTransform(-36, -36, 3, 3);
    this.g = new a.ama;
    this.g.parent = this;
    this.g.setTransform(-39, -39, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({
      state: [{
        t: this.g,
        p: {y: -39}
      }]
    }, 1).to({state: [{t: this.g, p: {y: -36}}]}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(.1, -.05, .3396, .7057, 0, 0, 0, .3, -.1);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype =
    c = new b.MovieClip;
  c.j = new b.Rectangle(-39, -39, 78, 81);
  (a.u0a = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "replay"}, keyboardNav: {order: 1}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.ocb;
    this.instance.parent = this;
    this.instance.setTransform(-36, -36, 3, 3);
    this.g = new a.ncb;
    this.g.parent = this;
    this.g.setTransform(-39, -39, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({
      state: [{
        t: this.g,
        p: {y: -39}
      }]
    }, 1).to({state: [{t: this.g, p: {y: -36}}]}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(.1, -.05, .3396, .7057, 0, 0, 0, .3, -.1);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-39, -39, 78, 81);
  (a.E_a = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.Vab = function () {
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).wait(33).call(this.Vab).wait(1));
    this.instance =
      new a.FWa;
    this.instance.parent = this;
    this.instance.setTransform(108, -16);
    this.instance._off = ! 0;
    this.g = new a.GWa;
    this.g.parent = this;
    this.g.setTransform(-7, -22);
    this.i = new a.EWa;
    this.i.parent = this;
    this.i.setTransform(16, -15);
    this.timeline.addTween(b.Tween.get({}).to({state: []}).to({state: [{t: this.instance}]}, 24).to({state: [{t: this.instance}]}, 1).to({state: [{t: this.instance}]}, 1).to({state: [{t: this.g}]}, 1).to({
      state: [{
        t: this.i,
        p: {x: 16, y: -15}
      }]
    }, 2).to({state: [{t: this.instance}]}, 2).to({
      state: [{
        t: this.i,
        p: {x: 21, y: -16}
      }]
    }, 2).wait(1));
    this.timeline.addTween(b.Tween.get(this.instance).wait(24).to({_off: ! 1}, 0).wait(1).to({
      x: 56,
      y: -15
    }, 0).wait(1).to({x: 17}, 0).to({_off: ! 0}, 1).wait(4).to({
      _off: ! 1,
      x: 19,
      y: -14
    }, 0).to({_off: ! 0}, 2).wait(1));
    this.o = new a.wpa;
    this.o.parent = this;
    this.o.setTransform(136, -15);
    this.o._off = ! 0;
    this.H = new a.xpa;
    this.H.parent = this;
    this.H.setTransform(-31, -22);
    this.O = new a.vpa;
    this.O.parent = this;
    this.O.setTransform(-19, -16);
    this.timeline.addTween(b.Tween.get({}).to({state: []}).to({state: [{t: this.o}]},
      18).to({state: [{t: this.o}]}, 1).to({state: [{t: this.o}]}, 1).to({
      state: [{
        t: this.H,
        p: {x: -31}
      }]
    }, 1).to({state: [{t: this.O, p: {x: -19, y: -16}}]}, 2).to({state: [{t: this.o}]}, 1).to({
      state: [{
        t: this.O,
        p: {x: -15, y: -16}
      }]
    }, 1).to({state: [{t: this.H, p: {x: -29}}]}, 2).to({
      state: [{
        t: this.O,
        p: {x: -17, y: -15}
      }]
    }, 2).to({state: [{t: this.o}]}, 1).to({state: [{t: this.O, p: {x: -15, y: -16}}]}, 2).wait(2));
    this.timeline.addTween(b.Tween.get(this.o).wait(18).to({_off: ! 1}, 0).wait(1).to({x: 56}, 0).wait(1).to({x: -5}, 0).to({_off: ! 0}, 1).wait(3).to({
      _off: ! 1,
      x: -17
    }, 0).to({_off: ! 0}, 1).wait(5).to({_off: ! 1, y: -14}, 0).to({_off: ! 0}, 2).wait(2));
    this.$ = new a.w2;
    this.$.parent = this;
    this.$.setTransform(136, -15);
    this.$._off = ! 0;
    this.ka = new a.v2;
    this.ka.parent = this;
    this.ka.setTransform(-53, -22);
    this.ta = new a.u2;
    this.ta.parent = this;
    this.ta.setTransform(-51, -16);
    this.timeline.addTween(b.Tween.get({}).to({state: []}).to({state: [{t: this.$}]}, 11).to({state: [{t: this.$}]}, 1).to({state: [{t: this.$}]}, 1).to({state: [{t: this.$}]}, 1).to({
      state: [{
        t: this.ka,
        p: {x: -53}
      }]
    }, 1).to({state: [{t: this.$}]},
      2).to({state: [{t: this.ta}]}, 2).to({
      state: [{
        t: this.ka,
        p: {x: -53}
      }]
    }, 2).to({state: [{t: this.$}]}, 2).to({state: [{t: this.ta}]}, 1).to({
      state: [{
        t: this.ka,
        p: {x: -51}
      }]
    }, 3).to({state: [{t: this.$}]}, 2).to({state: [{t: this.ta}]}, 2).wait(3));
    this.timeline.addTween(b.Tween.get(this.$).wait(11).to({_off: ! 1}, 0).wait(1).to({x: 89}, 0).wait(1).to({x: 42}, 0).wait(1).to({x: -14}, 0).to({_off: ! 0}, 1).wait(2).to({
      _off: ! 1,
      x: -51
    }, 0).to({_off: ! 0}, 2).wait(4).to({_off: ! 1, x: -53}, 0).to({_off: ! 0}, 1).wait(5).to({
      _off: ! 1,
      x: -51,
      y: -14
    }, 0).to({_off: ! 0},
      2).wait(3));
    this.va = new a.wV;
    this.va.parent = this;
    this.va.setTransform(-203.5, 0, 1, 1, 0, 0, 0, 66.5, 0);
    this.va._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.va).wait(3).to({_off: ! 1}, 0).to({x: -9.35}, 8, b.Ease.backOut).wait(23));
    this.wa = new a.WB;
    this.wa.parent = this;
    this.wa.setTransform(26, -11);
    this.ya = new a.WB;
    this.ya.parent = this;
    this.ya.setTransform(-10, -11);
    this.Aa = new a.WB;
    this.Aa.parent = this;
    this.Aa.setTransform(-46, -11);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.Aa}, {t: this.ya}, {t: this.wa}]}).wait(34))
  }).prototype =
    c = new b.MovieClip;
  c.j = new b.Rectangle(-270, -22, 441, 43);
  (a.D_a = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.Pab = function () {
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).wait(25).call(this.Pab).wait(1));
    this.instance = new a.wpa;
    this.instance.parent = this;
    this.instance.setTransform(136, -15);
    this.instance._off = ! 0;
    this.g = new a.xpa;
    this.g.parent = this;
    this.g.setTransform(-31, -22);
    this.i = new a.vpa;
    this.i.parent = this;
    this.i.setTransform(-19, -16);
    this.timeline.addTween(b.Tween.get({}).to({state: []}).to({state: [{t: this.instance}]},
      17).to({state: [{t: this.instance}]}, 1).to({state: [{t: this.instance}]}, 1).to({state: [{t: this.g}]}, 1).to({
      state: [{
        t: this.i,
        p: {x: -19}
      }]
    }, 2).to({state: [{t: this.instance}]}, 1).to({state: [{t: this.i, p: {x: -15}}]}, 2).wait(1));
    this.timeline.addTween(b.Tween.get(this.instance).wait(17).to({_off: ! 1}, 0).wait(1).to({x: 56}, 0).wait(1).to({x: -5}, 0).to({_off: ! 0}, 1).wait(3).to({
      _off: ! 1,
      x: -17
    }, 0).to({_off: ! 0}, 2).wait(1));
    this.o = new a.w2;
    this.o.parent = this;
    this.o.setTransform(136, -15);
    this.o._off = ! 0;
    this.H = new a.v2;
    this.H.parent =
      this;
    this.H.setTransform(-53, -22);
    this.O = new a.u2;
    this.O.parent = this;
    this.O.setTransform(-51, -16);
    this.timeline.addTween(b.Tween.get({}).to({state: []}).to({state: [{t: this.o}]}, 10).to({state: [{t: this.o}]}, 1).to({state: [{t: this.o}]}, 1).to({state: [{t: this.o}]}, 1).to({state: [{t: this.H}]}, 1).to({state: [{t: this.o}]}, 2).to({state: [{t: this.O}]}, 2).to({state: [{t: this.H}]}, 2).to({state: [{t: this.o}]}, 2).to({state: [{t: this.O}]}, 2).wait(2));
    this.timeline.addTween(b.Tween.get(this.o).wait(10).to({_off: ! 1}, 0).wait(1).to({x: 89},
      0).wait(1).to({x: 42}, 0).wait(1).to({x: -14}, 0).to({_off: ! 0}, 1).wait(2).to({
      _off: ! 1,
      x: -51
    }, 0).to({_off: ! 0}, 2).wait(4).to({_off: ! 1, x: -53}, 0).to({_off: ! 0}, 2).wait(2));
    this.$ = new a.wV;
    this.$.parent = this;
    this.$.setTransform(-210.5, 0, 1, 1, 0, 0, 0, 66.5, 0);
    this.$._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.$).wait(3).to({_off: ! 1}, 0).to({x: -9.35}, 7, b.Ease.backOut).wait(16));
    this.ka = new a.WB;
    this.ka.parent = this;
    this.ka.setTransform(26, -11);
    this.ta = new a.WB;
    this.ta.parent = this;
    this.ta.setTransform(-10, -11);
    this.va = new a.WB;
    this.va.parent = this;
    this.va.setTransform(-46, -11);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.va}, {t: this.ta}, {t: this.ka}]}).wait(26))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-277, -22, 448, 43);
  (a.C_a = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.Nab = function () {
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).wait(19).call(this.Nab).wait(1));
    this.instance = new a.w2;
    this.instance.parent = this;
    this.instance.setTransform(136, -15);
    this.instance._off = ! 0;
    this.g =
      new a.v2;
    this.g.parent = this;
    this.g.setTransform(-53, -22);
    this.i = new a.u2;
    this.i.parent = this;
    this.i.setTransform(-51, -16);
    this.timeline.addTween(b.Tween.get({}).to({state: []}).to({state: [{t: this.instance}]}, 11).to({state: [{t: this.instance}]}, 1).to({state: [{t: this.instance}]}, 1).to({state: [{t: this.instance}]}, 1).to({state: [{t: this.g}]}, 1).to({state: [{t: this.instance}]}, 2).to({state: [{t: this.i}]}, 2).wait(1));
    this.timeline.addTween(b.Tween.get(this.instance).wait(11).to({_off: ! 1}, 0).wait(1).to({x: 89},
      0).wait(1).to({x: 42}, 0).wait(1).to({x: -14}, 0).to({_off: ! 0}, 1).wait(2).to({
      _off: ! 1,
      x: -51
    }, 0).to({_off: ! 0}, 2).wait(1));
    this.o = new a.wV;
    this.o.parent = this;
    this.o.setTransform(-170.5, 0, 1, 1, 0, 0, 0, 66.5, 0);
    this.o._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.o).wait(3).to({_off: ! 1}, 0).to({x: -9.35}, 8, b.Ease.backOut).wait(9));
    this.H = new a.WB;
    this.H.parent = this;
    this.H.setTransform(26, -11);
    this.O = new a.WB;
    this.O.parent = this;
    this.O.setTransform(-10, -11);
    this.$ = new a.WB;
    this.$.parent = this;
    this.$.setTransform(-46,
      -11);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.$}, {t: this.O}, {t: this.H}]}).wait(20))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-237, -22, 407, 43);
  (a.B_a = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.Lab = function () {
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).wait(11).call(this.Lab).wait(1));
    this.instance = new a.wV;
    this.instance.parent = this;
    this.instance.setTransform(-168.5, 0, 1, 1, 0, 0, 0, 66.5, 0);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(3).to({_off: ! 1},
      0).to({x: -9.35}, 6, b.Ease.backOut).wait(3));
    this.g = new a.WB;
    this.g.parent = this;
    this.g.setTransform(26, -11);
    this.i = new a.WB;
    this.i.parent = this;
    this.i.setTransform(-10, -11);
    this.o = new a.WB;
    this.o.parent = this;
    this.o.setTransform(-46, -11);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.o}, {t: this.i}, {t: this.g}]}).wait(12))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-235, -11, 306.3, 20);
  (a.QVa = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {
        button: {eventId: "overworld"},
        keyboardNav: {order: 3}
      };
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.Gab;
    this.instance.parent = this;
    this.instance.setTransform(-36, -36, 3, 3);
    this.g = new a.Fab;
    this.g.parent = this;
    this.g.setTransform(-39, -39, 3, 3);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({
      state: [{
        t: this.g,
        p: {y: -39}
      }]
    }, 1).to({state: [{t: this.g, p: {y: -36}}]}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(.1,
      -.05, .3396, .7057, 0, 0, 0, .3, -.1);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-39, -39, 78, 81);
  (a.zpa = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "yes"}, keyboardNav: {order: 2}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.Ep;
    this.instance.parent = this;
    this.instance.setTransform(-257, -17, 3, 3);
    this.instance._off =
      ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.label = new b.Text("YES", "20px 'PixelMplus10'", "#af824a");
    this.label.name = "label";
    this.label.textAlign = "center";
    this.label.lineHeight = 24;
    this.label.lineWidth = 218;
    this.label.parent = this;
    this.label.setTransform(-.05, -19.15, 1.9341, 1.9341);
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({color: "#ffffff"}, 0).wait(2));
    this.hitArea = new a.mJ;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(-2.85,
      0, 1.1284, .49, 0, 0, 0, -.2, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-257, -25, 472, 54);
  (a.w0a = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "resume"}, keyboardNav: {order: 1}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.Ep;
    this.instance.parent = this;
    this.instance.setTransform(-257, -19, 3, 3);
    this.instance._off =
      ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.label = new b.Text("CONTINUE", "20px 'PixelMplus10'", "#af824a");
    this.label.name = "label";
    this.label.textAlign = "center";
    this.label.lineHeight = 24;
    this.label.lineWidth = 218;
    this.label.parent = this;
    this.label.setTransform(-.05, -21.15, 1.9341, 1.9341);
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({color: "#ffffff"}, 0).wait(2));
    this.hitArea = new a.mJ;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(-2.85,
      0, 1.1284, .49, 0, 0, 0, -.2, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-257, -25, 472, 52);
  (a.v0a = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "restart"}, keyboardNav: {order: 3}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.Ep;
    this.instance.parent = this;
    this.instance.setTransform(-257, -19, 3, 3);
    this.instance._off =
      ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.label = new b.Text("RESTART", "20px 'PixelMplus10'", "#af824a");
    this.label.name = "label";
    this.label.textAlign = "center";
    this.label.lineHeight = 24;
    this.label.lineWidth = 218;
    this.label.parent = this;
    this.label.setTransform(-.05, -21.15, 1.9341, 1.9341);
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({color: "#ffffff"}, 0).wait(2));
    this.hitArea = new a.mJ;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(-3.35,
      0, 1.1332, .4912, 0, 0, 0, -.2, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-257, -25, 472, 52);
  (a.ZZa = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "quit"}, keyboardNav: {order: 4}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.Ep;
    this.instance.parent = this;
    this.instance.setTransform(-257, -19, 3, 3);
    this.instance._off =
      ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.label = new b.Text("QUIT", "20px 'PixelMplus10'", "#af824a");
    this.label.name = "label";
    this.label.textAlign = "center";
    this.label.lineHeight = 24;
    this.label.lineWidth = 218;
    this.label.parent = this;
    this.label.setTransform(-.05, -21.15, 1.9341, 1.9341);
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({color: "#ffffff"}, 0).wait(2));
    this.hitArea = new a.mJ;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(-3.35,
      0, 1.1329, .4912, 0, 0, 0, -.2, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-257, -25, 472, 52);
  (a.oja = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "no"}, keyboardNav: {order: 1}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.Ep;
    this.instance.parent = this;
    this.instance.setTransform(-257, -17, 3, 3);
    this.instance._off =
      ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.label = new b.Text("NO", "20px 'PixelMplus10'", "#af824a");
    this.label.name = "label";
    this.label.textAlign = "center";
    this.label.lineHeight = 24;
    this.label.lineWidth = 218;
    this.label.parent = this;
    this.label.setTransform(-.05, -19.15, 1.9341, 1.9341);
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({color: "#ffffff"}, 0).wait(2));
    this.hitArea = new a.mJ;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(-2.85,
      0, 1.1284, .49, 0, 0, 0, -.2, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-257, -25, 472, 54);
  (a.nja = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "newgame"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.title = new b.Text(" Start a new game?", "60px 'PixelMplus10'", "#ede4b5");
    this.title.name = "title";
    this.title.textAlign = "center";
    this.title.lineHeight = 68;
    this.title.lineWidth =
      924;
    this.title.parent = this;
    this.title.setTransform(0, -189);
    this.timeline.addTween(b.Tween.get(this.title).wait(1));
    this.prompt = new b.Text("This will erase your progress permanetly and start you over from the beginning.", "40px 'PixelMplus10'", "#af824a");
    this.prompt.name = "prompt";
    this.prompt.textAlign = "center";
    this.prompt.lineHeight = 46;
    this.prompt.lineWidth = 924;
    this.prompt.parent = this;
    this.prompt.setTransform(0, -109);
    this.N_ = new a.oja;
    this.N_.name = "no";
    this.N_.parent = this;
    this.N_.setTransform(.1, 95.4,
      1, 1, 0, 0, 0, .1, .4);
    this.H0 = new a.zpa;
    this.H0.name = "yes";
    this.H0.parent = this;
    this.H0.setTransform(.1, 177.4, 1, 1, 0, 0, 0, .1, .4);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.H0}, {t: this.N_}, {t: this.prompt}]}).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.nja, new b.Rectangle(-480, -270, 960, 540), null);
  (a.TEa = function (d, e, f) {
    this.initialize(d, e, f, {
      idle: 0, focus: 1,
      down: 2
    });
    this.u = function () {
      this.T = {button: {eventId: "how"}, keyboardNav: {order: 2}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.Ep;
    this.instance.parent = this;
    this.instance.setTransform(-257, -17, 3, 3);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.label = new b.Text("HOW TO PLAY", "20px 'PixelMplus10'", "#af824a");
    this.label.name = "label";
    this.label.textAlign = "center";
    this.label.lineHeight = 24;
    this.label.lineWidth =
      218;
    this.label.parent = this;
    this.label.setTransform(-.05, -19.15, 1.9341, 1.9341);
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({color: "#ffffff"}, 0).wait(2));
    this.hitArea = new a.mJ;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(-2.85, 0, 1.1284, .49, 0, 0, 0, -.2, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-257, -25, 472, 54);
  (a.Ufa = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u =
      function () {
        this.T = {menu: {id: "leaderboard"}}
      };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.back = new a.e1;
    this.back.name = "back";
    this.back.parent = this;
    this.back.setTransform(-148, -77.5, 1, 1, 0, 0, 0, 0, -.5);
    this.timeline.addTween(b.Tween.get(this.back).wait(1));
    this.title = new b.Text("Leaderboard", "20px 'PixelMplus10'", "#ede4b5");
    this.title.name = "title";
    this.title.textAlign = "center";
    this.title.lineHeight = 24;
    this.title.lineWidth = 282;
    this.title.parent = this;
    this.title.setTransform(0, -75);
    this.timeline.addTween(b.Tween.get(this.title).wait(1));
    this.qS = new b.Text("***", "16px 'PixelMplus10'", "#ffffff");
    this.qS.name = "teamScore3";
    this.qS.textAlign = "right";
    this.qS.lineHeight = 18;
    this.qS.lineWidth = 126;
    this.qS.parent = this;
    this.qS.setTransform(139.35, 46);
    this.pS = new b.Text("***", "16px 'PixelMplus10'", "#ffffff");
    this.pS.name = "teamScore2";
    this.pS.textAlign = "right";
    this.pS.lineHeight = 18;
    this.pS.lineWidth = 126;
    this.pS.parent = this;
    this.pS.setTransform(139.35, 18);
    this.oS = new b.Text("***", "16px 'PixelMplus10'",
      "#ffffff");
    this.oS.name = "teamScore1";
    this.oS.textAlign = "right";
    this.oS.lineHeight = 18;
    this.oS.lineWidth = 126;
    this.oS.parent = this;
    this.oS.setTransform(139.35, -10);
    this.nS = new b.Text("***", "16px 'PixelMplus10'", "#ffffff");
    this.nS.name = "teamScore0";
    this.nS.textAlign = "right";
    this.nS.lineHeight = 18;
    this.nS.lineWidth = 126;
    this.nS.parent = this;
    this.nS.setTransform(139, -38);
    this.HU = new b.Text("Team Name", "16px 'PixelMplus10'", "#ffffff");
    this.HU.name = "teamName3";
    this.HU.lineHeight = 18;
    this.HU.lineWidth = 126;
    this.HU.parent =
      this;
    this.HU.setTransform(-115.85, 46);
    this.GU = new b.Text("Team Name", "16px 'PixelMplus10'", "#ffffff");
    this.GU.name = "teamName2";
    this.GU.lineHeight = 18;
    this.GU.lineWidth = 126;
    this.GU.parent = this;
    this.GU.setTransform(-115.85, 18);
    this.FU = new b.Text("Team Name", "16px 'PixelMplus10'", "#ffffff");
    this.FU.name = "teamName1";
    this.FU.lineHeight = 18;
    this.FU.lineWidth = 126;
    this.FU.parent = this;
    this.FU.setTransform(-115.85, -10);
    this.EU = new b.Text("Team Name", "16px 'PixelMplus10'", "#ffffff");
    this.EU.name = "teamName0";
    this.EU.lineHeight =
      18;
    this.EU.lineWidth = 126;
    this.EU.parent = this;
    this.EU.setTransform(-116, -38);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.EU}, {t: this.FU}, {t: this.GU}, {t: this.HU}, {t: this.nS}, {t: this.oS}, {t: this.pS}, {t: this.qS}]}).wait(1));
    this.instance = new a.Mw;
    this.instance.parent = this;
    this.instance.setTransform(-130, 26, 1, 1, 0, 0, 0, 0, -8);
    this.g = new a.Xt;
    this.g.parent = this;
    this.g.setTransform(-130, -2, 1, 1, 0, 0, 0, 0, -10);
    this.i = new a.Uw;
    this.i.parent = this;
    this.i.setTransform(-132, 52, 1, 1, 0, 0, 0, 0, -10);
    this.o =
      new a.$t;
    this.o.parent = this;
    this.o.setTransform(-130, -30, 1, 1, 0, 0, 0, 0, -10);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.o}, {t: this.i}, {t: this.g}, {t: this.instance}]}).wait(1));
    this.CJ = new b.Text("Loading...", "12px 'PixelMplus10'", "#af824a");
    this.CJ.name = "loading";
    this.CJ.textAlign = "center";
    this.CJ.lineHeight = 13;
    this.CJ.lineWidth = 291;
    this.CJ.parent = this;
    this.CJ.setTransform(0, -2);
    this.timeline.addTween(b.Tween.get(this.CJ).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("A3lJYIAAyvMAvLAAAIAASvg");
    this.shape.setTransform(0, 12);
    this.timeline.addTween(b.Tween.get(this.shape).wait(1));
    this.H = new a.K_;
    this.H.parent = this;
    this.H.setTransform(-154, -84);
    this.timeline.addTween(b.Tween.get(this.H).wait(1));
    this.Ze = new b.Shape;
    this.Ze.graphics.f("rgba(0,0,0,0.749)").s().p("A4/OEIAA8HMAx/AAAIAAcHg");
    this.timeline.addTween(b.Tween.get(this.Ze).wait(1))
  }).prototype = k(a.Ufa, new b.Rectangle(-160, -90, 320, 180), null);
  (a.ct = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.lX;
    this.instance.parent =
      this;
    this.instance.setTransform(-1.5, 0);
    this.timeline.addTween(b.Tween.get(this.instance).wait(5).to({alpha: .5898}, 0).wait(5))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-3, -2.5, 3, 5);
  (a.xbb = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: ""}, keyboardNav: {order: 0}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.gU;
    this.instance.parent = this;
    this.instance.setTransform(-9, -35);
    this.instance._off =
      ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.ct;
    this.g.parent = this;
    this.g.setTransform(-38.5, -.5, 1, 1, 180, 0, 0, -1.5, 0);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1}, 0).wait(2));
    this.i = new a.Ep;
    this.i.parent = this;
    this.i.setTransform(-166, -7);
    this.i._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.i).wait(1).to({_off: ! 1}, 0).wait(2));
    this.text = new b.Text("Space", "10px 'PixelMplus10'", "#af824a");
    this.text.name = "text";
    this.text.textAlign = "center";
    this.text.lineHeight = 11;
    this.text.lineWidth = 66;
    this.text.parent = this;
    this.text.setTransform(1, -6);
    this.timeline.addTween(b.Tween.get(this.text).wait(1).to({color: "#ffffff"}, 0).wait(1).to({
      text: "Selecting",
      color: "#483218"
    }, 0).wait(1));
    this.o = new a.Cx;
    this.o.parent = this;
    this.o.setTransform(-34, -7);
    this.o._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.o).wait(1).to({_off: ! 1}, 0).wait(2));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(1.45,
      -.5, .3301, .1467, 0, 0, 0, 1.4, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-166, -35, 202, 42);
  (a.wbb = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: ""}, keyboardNav: {order: 0}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.gU;
    this.instance.parent = this;
    this.instance.setTransform(-9, -77);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1},
      0).wait(2));
    this.g = new a.ct;
    this.g.parent = this;
    this.g.setTransform(-38.5, -.5, 1, 1, 180, 0, 0, -1.5, 0);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1}, 0).wait(2));
    this.i = new a.Ep;
    this.i.parent = this;
    this.i.setTransform(-166, -7);
    this.i._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.i).wait(1).to({_off: ! 1}, 0).wait(2));
    this.text = new b.Text("Space", "10px 'PixelMplus10'", "#af824a");
    this.text.name = "text";
    this.text.textAlign = "center";
    this.text.lineHeight = 11;
    this.text.lineWidth = 66;
    this.text.parent = this;
    this.text.setTransform(1, -6);
    this.timeline.addTween(b.Tween.get(this.text).wait(1).to({color: "#ffffff"}, 0).wait(1).to({
      text: "Selecting",
      color: "#483218"
    }, 0).wait(1));
    this.o = new a.Cx;
    this.o.parent = this;
    this.o.setTransform(-34, -7);
    this.o._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.o).wait(1).to({_off: ! 1}, 0).wait(2));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(1.45, -.5, .3301, .1467, 0, 0, 0, 1.4, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype =
    c = new b.MovieClip;
  c.j = new b.Rectangle(-166, -77, 202, 84);
  (a.vbb = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: ""}, keyboardNav: {order: 0}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.gU;
    this.instance.parent = this;
    this.instance.setTransform(-9, -63);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.ct;
    this.g.parent = this;
    this.g.setTransform(-38.5,
      -.5, 1, 1, 180, 0, 0, -1.5, 0);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1}, 0).wait(2));
    this.i = new a.Ep;
    this.i.parent = this;
    this.i.setTransform(-166, -7);
    this.i._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.i).wait(1).to({_off: ! 1}, 0).wait(2));
    this.text = new b.Text("Space", "10px 'PixelMplus10'", "#af824a");
    this.text.name = "text";
    this.text.textAlign = "center";
    this.text.lineHeight = 11;
    this.text.lineWidth = 66;
    this.text.parent = this;
    this.text.setTransform(1, -6);
    this.timeline.addTween(b.Tween.get(this.text).wait(1).to({color: "#ffffff"},
      0).wait(1).to({text: "Selecting", color: "#483218"}, 0).wait(1));
    this.o = new a.Cx;
    this.o.parent = this;
    this.o.setTransform(-34, -7);
    this.o._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.o).wait(1).to({_off: ! 1}, 0).wait(2));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(1.45, -.5, .3301, .1467, 0, 0, 0, 1.4, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-166, -63, 202, 70);
  (a.tbb =
    function (d, e, f) {
      this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
      this.u = function () {
        this.T = {button: {eventId: ""}, keyboardNav: {order: 0}};
        this.stop()
      };
      this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
      this.instance = new a.gU;
      this.instance.parent = this;
      this.instance.setTransform(-9, -49);
      this.instance._off = ! 0;
      this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
      this.g = new a.ct;
      this.g.parent = this;
      this.g.setTransform(-38.5, -.5, 1, 1, 180, 0, 0, -1.5, 0);
      this.g._off = ! 0;
      this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1},
        0).wait(2));
      this.i = new a.Ep;
      this.i.parent = this;
      this.i.setTransform(-166, -7);
      this.i._off = ! 0;
      this.timeline.addTween(b.Tween.get(this.i).wait(1).to({_off: ! 1}, 0).wait(2));
      this.text = new b.Text("Space", "10px 'PixelMplus10'", "#af824a");
      this.text.name = "text";
      this.text.textAlign = "center";
      this.text.lineHeight = 11;
      this.text.lineWidth = 66;
      this.text.parent = this;
      this.text.setTransform(1, -6);
      this.timeline.addTween(b.Tween.get(this.text).wait(1).to({color: "#ffffff"}, 0).wait(1).to({
          text: "Selecting",
          color: "#483218"
        },
        0).wait(1));
      this.o = new a.Cx;
      this.o.parent = this;
      this.o.setTransform(-34, -7);
      this.o._off = ! 0;
      this.timeline.addTween(b.Tween.get(this.o).wait(1).to({_off: ! 1}, 0).wait(2));
      this.hitArea = new a.Si;
      this.hitArea.name = "hitArea";
      this.hitArea.parent = this;
      this.hitArea.setTransform(1.45, -.5, .3301, .1467, 0, 0, 0, 1.4, 0);
      this.hitArea.visible = ! 1;
      this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
    }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-166, -49, 202, 56);
  (a.sbb = function (d, e, f) {
    this.initialize(d, e, f, {
      idle: 0,
      focus: 1, down: 2
    });
    this.u = function () {
      this.T = {button: {eventId: ""}, keyboardNav: {order: 0}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.gU;
    this.instance.parent = this;
    this.instance.setTransform(-9, -105);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.ct;
    this.g.parent = this;
    this.g.setTransform(-38.5, -.5, 1, 1, 180, 0, 0, -1.5, 0);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1},
      0).wait(2));
    this.i = new a.Ep;
    this.i.parent = this;
    this.i.setTransform(-166, -7);
    this.i._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.i).wait(1).to({_off: ! 1}, 0).wait(2));
    this.text = new b.Text("Space", "10px 'PixelMplus10'", "#af824a");
    this.text.name = "text";
    this.text.textAlign = "center";
    this.text.lineHeight = 11;
    this.text.lineWidth = 66;
    this.text.parent = this;
    this.text.setTransform(1, -6);
    this.timeline.addTween(b.Tween.get(this.text).wait(1).to({color: "#ffffff"}, 0).wait(1).to({
        text: "Selecting",
        color: "#483218"
      },
      0).wait(1));
    this.o = new a.Cx;
    this.o.parent = this;
    this.o.setTransform(-34, -7);
    this.o._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.o).wait(1).to({_off: ! 1}, 0).wait(2));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(1.45, -.5, .3301, .1467, 0, 0, 0, 1.4, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-166, -105, 202, 112);
  (a.rbb = function (d, e, f) {
    this.initialize(d, e, f, {
      idle: 0,
      focus: 1, down: 2
    });
    this.u = function () {
      this.T = {button: {eventId: ""}, keyboardNav: {order: 0}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.gU;
    this.instance.parent = this;
    this.instance.setTransform(-9, -91);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.ct;
    this.g.parent = this;
    this.g.setTransform(-38.5, -.5, 1, 1, 180, 0, 0, -1.5, 0);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1},
      0).wait(2));
    this.i = new a.Ep;
    this.i.parent = this;
    this.i.setTransform(-166, -7);
    this.i._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.i).wait(1).to({_off: ! 1}, 0).wait(2));
    this.text = new b.Text("Space", "10px 'PixelMplus10'", "#af824a");
    this.text.name = "text";
    this.text.textAlign = "center";
    this.text.lineHeight = 11;
    this.text.lineWidth = 66;
    this.text.parent = this;
    this.text.setTransform(1, -6);
    this.timeline.addTween(b.Tween.get(this.text).wait(1).to({color: "#ffffff"}, 0).wait(1).to({
        text: "Selecting",
        color: "#483218"
      },
      0).wait(1));
    this.o = new a.Cx;
    this.o.parent = this;
    this.o.setTransform(-34, -7);
    this.o._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.o).wait(1).to({_off: ! 1}, 0).wait(2));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(1.45, -.5, .3301, .1467, 0, 0, 0, 1.4, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-166, -91, 202, 98);
  (a.hbb = function (d, e, f) {
    this.initialize(d, e, f, {
      idle: 0,
      focus: 1, down: 2
    });
    this.u = function () {
      this.T = {button: {eventId: ""}, keyboardNav: {order: 0}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.AT;
    this.instance.parent = this;
    this.instance.setTransform(-9, -35);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.ct;
    this.g.parent = this;
    this.g.setTransform(-38.5, -.5, 1, 1, 180, 0, 0, -1.5, 0);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1},
      0).wait(2));
    this.i = new a.Ep;
    this.i.parent = this;
    this.i.setTransform(-250, -7);
    this.i._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.i).wait(1).to({_off: ! 1}, 0).wait(2));
    this.text = new b.Text("Space", "10px 'PixelMplus10'", "#af824a");
    this.text.name = "text";
    this.text.textAlign = "center";
    this.text.lineHeight = 11;
    this.text.lineWidth = 66;
    this.text.parent = this;
    this.text.setTransform(1, -6);
    this.timeline.addTween(b.Tween.get(this.text).wait(1).to({color: "#ffffff"}, 0).wait(1).to({
        text: "Selecting",
        color: "#483218"
      },
      0).wait(1));
    this.o = new a.Cx;
    this.o.parent = this;
    this.o.setTransform(-34, -7);
    this.o._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.o).wait(1).to({_off: ! 1}, 0).wait(2));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(1.45, -.5, .3301, .1467, 0, 0, 0, 1.4, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-250, -35, 286, 42);
  (a.gbb = function (d, e, f) {
    this.initialize(d, e, f, {
      idle: 0,
      focus: 1, down: 2
    });
    this.u = function () {
      this.T = {button: {eventId: ""}, keyboardNav: {order: 0}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.AT;
    this.instance.parent = this;
    this.instance.setTransform(-9, -77);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.ct;
    this.g.parent = this;
    this.g.setTransform(-38.5, -.5, 1, 1, 180, 0, 0, -1.5, 0);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1},
      0).wait(2));
    this.i = new a.Ep;
    this.i.parent = this;
    this.i.setTransform(-250, -7);
    this.i._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.i).wait(1).to({_off: ! 1}, 0).wait(2));
    this.text = new b.Text("Space", "10px 'PixelMplus10'", "#af824a");
    this.text.name = "text";
    this.text.textAlign = "center";
    this.text.lineHeight = 11;
    this.text.lineWidth = 66;
    this.text.parent = this;
    this.text.setTransform(1, -6);
    this.timeline.addTween(b.Tween.get(this.text).wait(1).to({color: "#ffffff"}, 0).wait(1).to({
        text: "Selecting",
        color: "#483218"
      },
      0).wait(1));
    this.o = new a.Cx;
    this.o.parent = this;
    this.o.setTransform(-34, -7);
    this.o._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.o).wait(1).to({_off: ! 1}, 0).wait(2));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(1.45, -.5, .3301, .1467, 0, 0, 0, 1.4, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-250, -77, 286, 84);
  (a.fbb = function (d, e, f) {
    this.initialize(d, e, f, {
      idle: 0,
      focus: 1, down: 2
    });
    this.u = function () {
      this.T = {button: {eventId: ""}, keyboardNav: {order: 0}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.AT;
    this.instance.parent = this;
    this.instance.setTransform(-9, -63);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.ct;
    this.g.parent = this;
    this.g.setTransform(-38.5, -.5, 1, 1, 180, 0, 0, -1.5, 0);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1},
      0).wait(2));
    this.i = new a.Ep;
    this.i.parent = this;
    this.i.setTransform(-250, -7);
    this.i._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.i).wait(1).to({_off: ! 1}, 0).wait(2));
    this.text = new b.Text("Space", "10px 'PixelMplus10'", "#af824a");
    this.text.name = "text";
    this.text.textAlign = "center";
    this.text.lineHeight = 11;
    this.text.lineWidth = 66;
    this.text.parent = this;
    this.text.setTransform(1, -6);
    this.timeline.addTween(b.Tween.get(this.text).wait(1).to({color: "#ffffff"}, 0).wait(1).to({
        text: "Selecting",
        color: "#483218"
      },
      0).wait(1));
    this.o = new a.Cx;
    this.o.parent = this;
    this.o.setTransform(-34, -7);
    this.o._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.o).wait(1).to({_off: ! 1}, 0).wait(2));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(1.45, -.5, .3301, .1467, 0, 0, 0, 1.4, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-250, -63, 286, 70);
  (a.ebb = function (d, e, f) {
    this.initialize(d, e, f, {
      idle: 0,
      focus: 1, down: 2
    });
    this.u = function () {
      this.T = {button: {eventId: ""}, keyboardNav: {order: 0}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.AT;
    this.instance.parent = this;
    this.instance.setTransform(-9, -49);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.ct;
    this.g.parent = this;
    this.g.setTransform(-38.5, -.5, 1, 1, 180, 0, 0, -1.5, 0);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1},
      0).wait(2));
    this.i = new a.Ep;
    this.i.parent = this;
    this.i.setTransform(-250, -7);
    this.i._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.i).wait(1).to({_off: ! 1}, 0).wait(2));
    this.text = new b.Text("Space", "10px 'PixelMplus10'", "#af824a");
    this.text.name = "text";
    this.text.textAlign = "center";
    this.text.lineHeight = 11;
    this.text.lineWidth = 66;
    this.text.parent = this;
    this.text.setTransform(1, -6);
    this.timeline.addTween(b.Tween.get(this.text).wait(1).to({color: "#ffffff"}, 0).wait(1).to({
        text: "Selecting",
        color: "#483218"
      },
      0).wait(1));
    this.o = new a.Cx;
    this.o.parent = this;
    this.o.setTransform(-34, -7);
    this.o._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.o).wait(1).to({_off: ! 1}, 0).wait(2));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(1.45, -.5, .3301, .1467, 0, 0, 0, 1.4, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-250, -49, 286, 56);
  (a.dbb = function (d, e, f) {
    this.initialize(d, e, f, {
      idle: 0,
      focus: 1, down: 2
    });
    this.u = function () {
      this.T = {button: {eventId: ""}, keyboardNav: {order: 0}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.AT;
    this.instance.parent = this;
    this.instance.setTransform(-9, -105);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.ct;
    this.g.parent = this;
    this.g.setTransform(-38.5, -.5, 1, 1, 180, 0, 0, -1.5, 0);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1},
      0).wait(2));
    this.i = new a.Ep;
    this.i.parent = this;
    this.i.setTransform(-250, -7);
    this.i._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.i).wait(1).to({_off: ! 1}, 0).wait(2));
    this.text = new b.Text("Space", "10px 'PixelMplus10'", "#af824a");
    this.text.name = "text";
    this.text.textAlign = "center";
    this.text.lineHeight = 11;
    this.text.lineWidth = 66;
    this.text.parent = this;
    this.text.setTransform(1, -6);
    this.timeline.addTween(b.Tween.get(this.text).wait(1).to({color: "#ffffff"}, 0).wait(1).to({
        text: "Selecting",
        color: "#483218"
      },
      0).wait(1));
    this.o = new a.Cx;
    this.o.parent = this;
    this.o.setTransform(-34, -7);
    this.o._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.o).wait(1).to({_off: ! 1}, 0).wait(2));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(1.45, -.5, .3301, .1467, 0, 0, 0, 1.4, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-250, -105, 286, 112);
  (a.cbb = function (d, e, f) {
    this.initialize(d, e, f, {
      idle: 0,
      focus: 1, down: 2
    });
    this.u = function () {
      this.T = {button: {eventId: ""}, keyboardNav: {order: 0}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.AT;
    this.instance.parent = this;
    this.instance.setTransform(-9, -91);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.ct;
    this.g.parent = this;
    this.g.setTransform(-38.5, -.5, 1, 1, 180, 0, 0, -1.5, 0);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1},
      0).wait(2));
    this.i = new a.Ep;
    this.i.parent = this;
    this.i.setTransform(-250, -7);
    this.i._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.i).wait(1).to({_off: ! 1}, 0).wait(2));
    this.text = new b.Text("Space", "10px 'PixelMplus10'", "#af824a");
    this.text.name = "text";
    this.text.textAlign = "center";
    this.text.lineHeight = 11;
    this.text.lineWidth = 66;
    this.text.parent = this;
    this.text.setTransform(1, -6);
    this.timeline.addTween(b.Tween.get(this.text).wait(1).to({color: "#ffffff"}, 0).wait(1).to({
        text: "Selecting",
        color: "#483218"
      },
      0).wait(1));
    this.o = new a.Cx;
    this.o.parent = this;
    this.o.setTransform(-34, -7);
    this.o._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.o).wait(1).to({_off: ! 1}, 0).wait(2));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(1.45, -.5, .3301, .1467, 0, 0, 0, 1.4, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-250, -91, 286, 98);
  (a.lab = function (d, e, f) {
    this.initialize(d, e, f, {
      idle: 0,
      focus: 1, down: 2
    });
    this.u = function () {
      this.T = {button: {eventId: "defaults"}, keyboardNav: {order: 7}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.label = new b.Text("DEFAULTS", "20px 'PixelMplus10'", "#af824a");
    this.label.name = "label";
    this.label.textAlign = "center";
    this.label.lineHeight = 24;
    this.label.lineWidth = 180;
    this.label.parent = this;
    this.label.setTransform(-3.1, -22.15, 1.9341, 1.9341);
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({color: "#ffffff"}, 0).wait(1).to({x: -2.989},
      0).wait(1));
    this.instance = new a.Ep;
    this.instance.parent = this;
    this.instance.setTransform(-227, -20, 3, 3);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.Jda;
    this.g.parent = this;
    this.g.setTransform(-180, -33, 3, 3);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1}, 0).wait(2));
    this.hitArea = new a.mJ;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(-.1, 0, 1.6501, .49, 0, 0, 0, -.1, 0);
    this.hitArea.visible =
      ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-227, -33, 404, 63);
  (a.kab = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "okay"}, keyboardNav: {order: 6}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.label = new b.Text("OKAY", "20px 'PixelMplus10'", "#af824a");
    this.label.name = "label";
    this.label.textAlign = "center";
    this.label.lineHeight = 24;
    this.label.lineWidth =
      180;
    this.label.parent = this;
    this.label.setTransform(2.45, -22.15, 1.9341, 1.9341);
    this.timeline.addTween(b.Tween.get(this.label).wait(1).to({
      x: 2.4626,
      color: "#ffffff"
    }, 0).wait(1).to({x: 2.45}, 0).wait(1));
    this.instance = new a.Ep;
    this.instance.parent = this;
    this.instance.setTransform(-221, -20, 3, 3);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).wait(2));
    this.g = new a.Jda;
    this.g.parent = this;
    this.g.setTransform(-175, -32, 3, 3);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1},
      0).wait(2));
    this.hitArea = new a.mJ;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(-.1, 0, 1.5555, .49, 0, 0, 0, -.1, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-221, -32, 403, 63);
  (a.yma = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "skip"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.AK = new a.Xla;
    this.AK.name = "settings";
    this.AK.parent =
      this;
    this.AK.setTransform(-151.45, 192.55, 2.9998, 2.9998);
    this.share = new a.$la;
    this.share.name = "share";
    this.share.parent = this;
    this.share.setTransform(148.85, 192.85, 2.9998, 2.9998, 0, 0, 0, .1, .1);
    this.wK = new a.Sfa;
    this.wK.name = "leader";
    this.wK.parent = this;
    this.wK.setTransform(49.55, 192.55, 2.9998, 2.9998);
    this.controls = new a.Ida;
    this.controls.name = "controls";
    this.controls.parent = this;
    this.controls.setTransform(-49.75, 192.85, 2.9998, 2.9998, 0, 0, 0, -.1, .1);
    this.timeline.addTween(b.Tween.get({}).to({
      state: [{t: this.controls},
        {t: this.wK}, {t: this.share}, {t: this.AK}]
    }).wait(1));
    this.instance = new a.oja;
    this.instance.parent = this;
    this.instance.setTransform(.15, -16, 1, 1, 0, 0, 0, 0, 2);
    this.g = new a.zpa;
    this.g.parent = this;
    this.g.setTransform(0, 50, 1, 1, 0, 0, 0, 0, 2);
    this.label = new b.Text("SKIP TUTORIAL?", "40px 'PixelMplus10'", "#af824a");
    this.label.name = "label";
    this.label.textAlign = "center";
    this.label.lineHeight = 46;
    this.label.lineWidth = 924;
    this.label.parent = this;
    this.label.setTransform(0, -155);
    this.timeline.addTween(b.Tween.get({}).to({
      state: [{t: this.label},
        {t: this.g}, {t: this.instance}]
    }).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.yma, new b.Rectangle(-480, -270, 960, 540), null);
  (a.Toa = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "tutSwimMobile"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.Bf = new a.mB;
    this.Bf.name = "continueButton";
    this.Bf.parent = this;
    this.Bf.setTransform(3,
      194.1, 1, 1, 0, 0, 0, .2, .1);
    this.timeline.addTween(b.Tween.get(this.Bf).wait(1));
    this.Bd = new b.Text("Avoid hitting wrong Beats", "30px 'PixelMplus10'", "#ede4b5");
    this.Bd.name = "control2";
    this.Bd.textAlign = "center";
    this.Bd.lineHeight = 36;
    this.Bd.lineWidth = 241;
    this.Bd.parent = this;
    this.Bd.setTransform(291, -30.5);
    this.Ad = new b.Text("Tap Arrow Buttons", "30px 'PixelMplus10'", "#ede4b5");
    this.Ad.name = "control1";
    this.Ad.textAlign = "center";
    this.Ad.lineHeight = 36;
    this.Ad.lineWidth = 241;
    this.Ad.parent = this;
    this.Ad.setTransform(-.5,
      51);
    this.Cd = new b.Text("Hit the matching beats in time with the music for a high score", "30px 'PixelMplus10'", "#af8147");
    this.Cd.name = "rulesContent";
    this.Cd.textAlign = "center";
    this.Cd.lineHeight = 36;
    this.Cd.lineWidth = 241;
    this.Cd.parent = this;
    this.Cd.setTransform(-291.5, -57);
    this.Dd = new b.Text("Rules", "30px 'PixelMplus10'", "#ede4b5");
    this.Dd.name = "rulesLabel";
    this.Dd.textAlign = "center";
    this.Dd.lineHeight = 36;
    this.Dd.lineWidth = 241;
    this.Dd.parent = this;
    this.Dd.setTransform(-291.5, -111);
    this.title = new b.Text("Synchronized Swimming",
      "60px 'PixelMplus10'", "#ede4b5");
    this.title.name = "title";
    this.title.textAlign = "center";
    this.title.lineHeight = 68;
    this.title.lineWidth = 853;
    this.title.parent = this;
    this.title.setTransform(-.5, -225);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.title}, {t: this.Dd}, {t: this.Cd}, {t: this.Ad}, {t: this.Bd}]}).wait(1));
    this.oC = new a.oC;
    this.oC.name = "swimSpritesDesktop";
    this.oC.parent = this;
    this.oC.setTransform(-25.5, 16.5, 1, 1, 0, 0, 0, 16.5, 16.5);
    this.timeline.addTween(b.Tween.get(this.oC).wait(1));
    this.instance =
      new a.vB;
    this.instance.parent = this;
    this.instance.setTransform(-462, -252, 3, 3);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.Toa, new b.Rectangle(-480, -270, 960, 540), null);
  (a.Soa = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "tutSwimDesktop"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.Bf = new a.mB;
    this.Bf.name = "continueButton";
    this.Bf.parent = this;
    this.Bf.setTransform(3, 194.1, 1, 1, 0, 0, 0, .2, .1);
    this.timeline.addTween(b.Tween.get(this.Bf).wait(1));
    this.Bd = new b.Text("Avoid hitting wrong Beats", "30px 'PixelMplus10'", "#ede4b5");
    this.Bd.name = "control2";
    this.Bd.textAlign = "center";
    this.Bd.lineHeight = 36;
    this.Bd.lineWidth = 241;
    this.Bd.parent = this;
    this.Bd.setTransform(291, -30.5);
    this.Ad = new b.Text("Direction Keys\nfor Arrow Beats", "30px 'PixelMplus10'", "#ede4b5");
    this.Ad.name = "control1";
    this.Ad.textAlign = "center";
    this.Ad.lineHeight = 36;
    this.Ad.lineWidth = 241;
    this.Ad.parent = this;
    this.Ad.setTransform(-.5, 51);
    this.Cd = new b.Text("Hit the matching beats in time with the music for a high score", "30px 'PixelMplus10'", "#af8147");
    this.Cd.name = "rulesContent";
    this.Cd.textAlign = "center";
    this.Cd.lineHeight = 36;
    this.Cd.lineWidth = 241;
    this.Cd.parent = this;
    this.Cd.setTransform(-291.5, -57);
    this.Dd = new b.Text("Rules", "30px 'PixelMplus10'", "#ede4b5");
    this.Dd.name = "rulesLabel";
    this.Dd.textAlign = "center";
    this.Dd.lineHeight = 36;
    this.Dd.lineWidth = 241;
    this.Dd.parent = this;
    this.Dd.setTransform(-291.5, -111);
    this.title = new b.Text("Synchronized Swimming", "60px 'PixelMplus10'", "#ede4b5");
    this.title.name = "title";
    this.title.textAlign = "center";
    this.title.lineHeight = 68;
    this.title.lineWidth = 853;
    this.title.parent = this;
    this.title.setTransform(-.5, -225);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.title}, {t: this.Dd}, {t: this.Cd}, {t: this.Ad}, {t: this.Bd}]}).wait(1));
    this.oC = new a.oC;
    this.oC.name = "swimSpritesDesktop";
    this.oC.parent = this;
    this.oC.setTransform(-25.5, 16.5, 1, 1, 0, 0, 0, 16.5, 16.5);
    this.timeline.addTween(b.Tween.get(this.oC).wait(1));
    this.instance = new a.vB;
    this.instance.parent = this;
    this.instance.setTransform(-462, -252, 3, 3);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.Soa, new b.Rectangle(-480, -270, 960, 540), null);
  (a.Roa =
    function (d, e, f) {
      this.initialize(d, e, f, {});
      this.u = function () {
        this.T = {menu: {id: "tutSkateMobile"}}
      };
      this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
      this.Bf = new a.mB;
      this.Bf.name = "continueButton";
      this.Bf.parent = this;
      this.Bf.setTransform(3, 194.1, 1, 1, 0, 0, 0, .2, .1);
      this.timeline.addTween(b.Tween.get(this.Bf).wait(1));
      this.Bd = new b.Text("Action Button\nto Jump / Tricks", "30px 'PixelMplus10'", "#ede4b5");
      this.Bd.name = "control2";
      this.Bd.textAlign = "center";
      this.Bd.lineHeight = 36;
      this.Bd.lineWidth =
        241;
      this.Bd.parent = this;
      this.Bd.setTransform(290.5, 51);
      this.Ad = new b.Text("Joystick\nto Move / Tricks", "30px 'PixelMplus10'", "#ede4b5");
      this.Ad.name = "control1";
      this.Ad.textAlign = "center";
      this.Ad.lineHeight = 36;
      this.Ad.lineWidth = 241;
      this.Ad.parent = this;
      this.Ad.setTransform(-.5, 51);
      this.Cd = new b.Text("Do tricks for a high score before time runs out", "30px 'PixelMplus10'", "#af8147");
      this.Cd.name = "rulesContent";
      this.Cd.textAlign = "center";
      this.Cd.lineHeight = 36;
      this.Cd.lineWidth = 241;
      this.Cd.parent = this;
      this.Cd.setTransform(-291.5, -57);
      this.Dd = new b.Text("Rules", "30px 'PixelMplus10'", "#ede4b5");
      this.Dd.name = "rulesLabel";
      this.Dd.textAlign = "center";
      this.Dd.lineHeight = 36;
      this.Dd.lineWidth = 241;
      this.Dd.parent = this;
      this.Dd.setTransform(-291.5, -111);
      this.title = new b.Text("Skating", "60px 'PixelMplus10'", "#ede4b5");
      this.title.name = "title";
      this.title.textAlign = "center";
      this.title.lineHeight = 68;
      this.title.lineWidth = 853;
      this.title.parent = this;
      this.title.setTransform(-.5, -225);
      this.timeline.addTween(b.Tween.get({}).to({
        state: [{t: this.title},
          {t: this.Dd}, {t: this.Cd}, {t: this.Ad}, {t: this.Bd}]
      }).wait(1));
      this.AU = new a.AU;
      this.AU.name = "skateSpritesMobile";
      this.AU.parent = this;
      this.AU.setTransform(-25.5, 16.5, 1, 1, 0, 0, 0, 16.5, 16.5);
      this.timeline.addTween(b.Tween.get(this.AU).wait(1));
      this.instance = new a.vB;
      this.instance.parent = this;
      this.instance.setTransform(-462, -252, 3, 3);
      this.timeline.addTween(b.Tween.get(this.instance).wait(1));
      this.shape = new b.Shape;
      this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
      this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }).prototype =
    k(a.Roa, new b.Rectangle(-480, -270, 960, 540), null);
  (a.Qoa = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "tutSkateDesktop"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.j0 = new a.mB;
    this.j0.name = "startButton";
    this.j0.parent = this;
    this.j0.setTransform(3, 194.1, 1, 1, 0, 0, 0, .2, .1);
    this.timeline.addTween(b.Tween.get(this.j0).wait(1));
    this.Bd = new b.Text("Spacebar\nto Jump / Tricks", "30px 'PixelMplus10'", "#ede4b5");
    this.Bd.name = "control2";
    this.Bd.textAlign =
      "center";
    this.Bd.lineHeight = 36;
    this.Bd.lineWidth = 241;
    this.Bd.parent = this;
    this.Bd.setTransform(290.5, 51);
    this.Ad = new b.Text("Direction Keys\nto Move / Tricks", "30px 'PixelMplus10'", "#ede4b5");
    this.Ad.name = "control1";
    this.Ad.textAlign = "center";
    this.Ad.lineHeight = 36;
    this.Ad.lineWidth = 241;
    this.Ad.parent = this;
    this.Ad.setTransform(-.5, 51);
    this.Cd = new b.Text("Do tricks for a high score before time runs out", "30px 'PixelMplus10'", "#af8147");
    this.Cd.name = "rulesContent";
    this.Cd.textAlign = "center";
    this.Cd.lineHeight =
      36;
    this.Cd.lineWidth = 241;
    this.Cd.parent = this;
    this.Cd.setTransform(-291.5, -57);
    this.Dd = new b.Text("Rules", "30px 'PixelMplus10'", "#ede4b5");
    this.Dd.name = "rulesLabel";
    this.Dd.textAlign = "center";
    this.Dd.lineHeight = 36;
    this.Dd.lineWidth = 241;
    this.Dd.parent = this;
    this.Dd.setTransform(-291.5, -111);
    this.title = new b.Text("Skating", "60px 'PixelMplus10'", "#ede4b5");
    this.title.name = "title";
    this.title.textAlign = "center";
    this.title.lineHeight = 68;
    this.title.lineWidth = 853;
    this.title.parent = this;
    this.title.setTransform(-.5,
      -225);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.title}, {t: this.Dd}, {t: this.Cd}, {t: this.Ad}, {t: this.Bd}]}).wait(1));
    this.zU = new a.zU;
    this.zU.name = "skateSpritesDesktop";
    this.zU.parent = this;
    this.zU.setTransform(-25.5, 16.5, 1, 1, 0, 0, 0, 16.5, 16.5);
    this.timeline.addTween(b.Tween.get(this.zU).wait(1));
    this.instance = new a.vB;
    this.instance.parent = this;
    this.instance.setTransform(-462, -252, 3, 3);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.Qoa, new b.Rectangle(-480, -270, 960, 540), null);
  (a.Poa = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "tutRugbyMobile"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.Bf = new a.mB;
    this.Bf.name = "continueButton";
    this.Bf.parent = this;
    this.Bf.setTransform(3, 194.1, 1, 1, 0, 0, 0, .2, .1);
    this.timeline.addTween(b.Tween.get(this.Bf).wait(1));
    this.Bd = new b.Text("Action Button\nto Pass", "30px 'PixelMplus10'",
      "#ede4b5");
    this.Bd.name = "control2";
    this.Bd.textAlign = "center";
    this.Bd.lineHeight = 36;
    this.Bd.lineWidth = 241;
    this.Bd.parent = this;
    this.Bd.setTransform(290.5, 51);
    this.Ad = new b.Text("Joystick\nto Move", "30px 'PixelMplus10'", "#ede4b5");
    this.Ad.name = "control1";
    this.Ad.textAlign = "center";
    this.Ad.lineHeight = 36;
    this.Ad.lineWidth = 241;
    this.Ad.parent = this;
    this.Ad.setTransform(-.5, 51);
    this.Cd = new b.Text("Avoid obstacles and enemies to get the ball across the field", "30px 'PixelMplus10'", "#af8147");
    this.Cd.name =
      "rulesContent";
    this.Cd.textAlign = "center";
    this.Cd.lineHeight = 36;
    this.Cd.lineWidth = 241;
    this.Cd.parent = this;
    this.Cd.setTransform(-291.5, -57);
    this.Dd = new b.Text("Rules", "30px 'PixelMplus10'", "#ede4b5");
    this.Dd.name = "rulesLabel";
    this.Dd.textAlign = "center";
    this.Dd.lineHeight = 36;
    this.Dd.lineWidth = 241;
    this.Dd.parent = this;
    this.Dd.setTransform(-291.5, -111);
    this.title = new b.Text("Rugby", "60px 'PixelMplus10'", "#ede4b5");
    this.title.name = "title";
    this.title.textAlign = "center";
    this.title.lineHeight = 68;
    this.title.lineWidth =
      853;
    this.title.parent = this;
    this.title.setTransform(-.5, -225);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.title}, {t: this.Dd}, {t: this.Cd}, {t: this.Ad}, {t: this.Bd}]}).wait(1));
    this.xU = new a.xU;
    this.xU.name = "rugbySpritesMobile";
    this.xU.parent = this;
    this.xU.setTransform(-25.5, 16.5, 1, 1, 0, 0, 0, 16.5, 16.5);
    this.timeline.addTween(b.Tween.get(this.xU).wait(1));
    this.instance = new a.vB;
    this.instance.parent = this;
    this.instance.setTransform(-462, -252, 3, 3);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.Poa, new b.Rectangle(-480, -270, 960, 540), null);
  (a.Ooa = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "tutRugbyDesktop"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.Bf = new a.mB;
    this.Bf.name = "continueButton";
    this.Bf.parent = this;
    this.Bf.setTransform(3, 194.1, 1, 1, 0, 0, 0, .2, .1);
    this.timeline.addTween(b.Tween.get(this.Bf).wait(1));
    this.Bd = new b.Text("Spacebar\nto Pass", "30px 'PixelMplus10'", "#ede4b5");
    this.Bd.name = "control2";
    this.Bd.textAlign = "center";
    this.Bd.lineHeight = 36;
    this.Bd.lineWidth = 241;
    this.Bd.parent = this;
    this.Bd.setTransform(290.5, 51);
    this.Ad = new b.Text("Direction Keys\nto Move", "30px 'PixelMplus10'", "#ede4b5");
    this.Ad.name = "control1";
    this.Ad.textAlign = "center";
    this.Ad.lineHeight = 36;
    this.Ad.lineWidth = 241;
    this.Ad.parent = this;
    this.Ad.setTransform(-.5, 51);
    this.Cd =
      new b.Text("Avoid obstacles and enemies to get the ball across the field", "30px 'PixelMplus10'", "#af8147");
    this.Cd.name = "rulesContent";
    this.Cd.textAlign = "center";
    this.Cd.lineHeight = 36;
    this.Cd.lineWidth = 241;
    this.Cd.parent = this;
    this.Cd.setTransform(-291.5, -57);
    this.Dd = new b.Text("Rules", "30px 'PixelMplus10'", "#ede4b5");
    this.Dd.name = "rulesLabel";
    this.Dd.textAlign = "center";
    this.Dd.lineHeight = 36;
    this.Dd.lineWidth = 241;
    this.Dd.parent = this;
    this.Dd.setTransform(-291.5, -111);
    this.title = new b.Text("Rugby", "60px 'PixelMplus10'",
      "#ede4b5");
    this.title.name = "title";
    this.title.textAlign = "center";
    this.title.lineHeight = 68;
    this.title.lineWidth = 853;
    this.title.parent = this;
    this.title.setTransform(-.5, -225);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.title}, {t: this.Dd}, {t: this.Cd}, {t: this.Ad}, {t: this.Bd}]}).wait(1));
    this.wU = new a.wU;
    this.wU.name = "rugbySpritesDesktop";
    this.wU.parent = this;
    this.wU.setTransform(-25.5, 16.5, 1, 1, 0, 0, 0, 16.5, 16.5);
    this.timeline.addTween(b.Tween.get(this.wU).wait(1));
    this.instance = new a.vB;
    this.instance.parent =
      this;
    this.instance.setTransform(-462, -252, 3, 3);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.Ooa, new b.Rectangle(-480, -270, 960, 540), null);
  (a.Loa = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "tutPingpongMobile"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.Bf =
      new a.mB;
    this.Bf.name = "continueButton";
    this.Bf.parent = this;
    this.Bf.setTransform(3, 194.1, 1, 1, 0, 0, 0, .2, .1);
    this.timeline.addTween(b.Tween.get(this.Bf).wait(1));
    this.Bd = new b.Text("Action Button\nfor Power Shot", "30px 'PixelMplus10'", "#ede4b5");
    this.Bd.name = "control2";
    this.Bd.textAlign = "center";
    this.Bd.lineHeight = 36;
    this.Bd.lineWidth = 241;
    this.Bd.parent = this;
    this.Bd.setTransform(290.5, 51);
    this.Ad = new b.Text("Joystick\nto Move", "30px 'PixelMplus10'", "#ede4b5");
    this.Ad.name = "control1";
    this.Ad.textAlign =
      "center";
    this.Ad.lineHeight = 36;
    this.Ad.lineWidth = 241;
    this.Ad.parent = this;
    this.Ad.setTransform(-.5, 51);
    this.Cd = new b.Text("Move to the ball to return shots, first to 30 wins the match  ", "30px 'PixelMplus10'", "#af8147");
    this.Cd.name = "rulesContent";
    this.Cd.textAlign = "center";
    this.Cd.lineHeight = 36;
    this.Cd.lineWidth = 241;
    this.Cd.parent = this;
    this.Cd.setTransform(-291.5, -57);
    this.Dd = new b.Text("Rules", "30px 'PixelMplus10'", "#ede4b5");
    this.Dd.name = "rulesLabel";
    this.Dd.textAlign = "center";
    this.Dd.lineHeight =
      36;
    this.Dd.lineWidth = 241;
    this.Dd.parent = this;
    this.Dd.setTransform(-291.5, -111);
    this.title = new b.Text("Table Tennis", "60px 'PixelMplus10'", "#ede4b5");
    this.title.name = "title";
    this.title.textAlign = "center";
    this.title.lineHeight = 68;
    this.title.lineWidth = 853;
    this.title.parent = this;
    this.title.setTransform(-.5, -225);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.title}, {t: this.Dd}, {t: this.Cd}, {t: this.Ad}, {t: this.Bd}]}).wait(1));
    this.qU = new a.qU;
    this.qU.name = "pingpongSpritesMobile";
    this.qU.parent =
      this;
    this.qU.setTransform(-25.5, 16.5, 1, 1, 0, 0, 0, 16.5, 16.5);
    this.timeline.addTween(b.Tween.get(this.qU).wait(1));
    this.instance = new a.vB;
    this.instance.parent = this;
    this.instance.setTransform(-462, -252, 3, 3);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.Loa, new b.Rectangle(-480, -270, 960, 540), null);
  (a.Koa = function (d,
                     e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "tutPingpongDesktop"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.Bf = new a.mB;
    this.Bf.name = "continueButton";
    this.Bf.parent = this;
    this.Bf.setTransform(3, 194.1, 1, 1, 0, 0, 0, .2, .1);
    this.timeline.addTween(b.Tween.get(this.Bf).wait(1));
    this.Bd = new b.Text("Spacebar\nfor Power Shot", "30px 'PixelMplus10'", "#ede4b5");
    this.Bd.name = "control2";
    this.Bd.textAlign = "center";
    this.Bd.lineHeight = 36;
    this.Bd.lineWidth = 241;
    this.Bd.parent =
      this;
    this.Bd.setTransform(290.5, 51);
    this.Ad = new b.Text("Direction Keys\nto Move", "30px 'PixelMplus10'", "#ede4b5");
    this.Ad.name = "control1";
    this.Ad.textAlign = "center";
    this.Ad.lineHeight = 36;
    this.Ad.lineWidth = 241;
    this.Ad.parent = this;
    this.Ad.setTransform(-.5, 51);
    this.Cd = new b.Text("Move to the ball to return shots, first to 30 wins the match  ", "30px 'PixelMplus10'", "#af8147");
    this.Cd.name = "rulesContent";
    this.Cd.textAlign = "center";
    this.Cd.lineHeight = 36;
    this.Cd.lineWidth = 241;
    this.Cd.parent = this;
    this.Cd.setTransform(-291.5,
      -57);
    this.Dd = new b.Text("Rules", "30px 'PixelMplus10'", "#ede4b5");
    this.Dd.name = "rulesLabel";
    this.Dd.textAlign = "center";
    this.Dd.lineHeight = 36;
    this.Dd.lineWidth = 241;
    this.Dd.parent = this;
    this.Dd.setTransform(-291.5, -111);
    this.title = new b.Text("Table Tennis", "60px 'PixelMplus10'", "#ede4b5");
    this.title.name = "title";
    this.title.textAlign = "center";
    this.title.lineHeight = 68;
    this.title.lineWidth = 853;
    this.title.parent = this;
    this.title.setTransform(-.5, -225);
    this.timeline.addTween(b.Tween.get({}).to({
      state: [{t: this.title},
        {t: this.Dd}, {t: this.Cd}, {t: this.Ad}, {t: this.Bd}]
    }).wait(1));
    this.pU = new a.pU;
    this.pU.name = "pingpongSpritesDesktop";
    this.pU.parent = this;
    this.pU.setTransform(-25.5, 16.5, 1, 1, 0, 0, 0, 16.5, 16.5);
    this.timeline.addTween(b.Tween.get(this.pU).wait(1));
    this.instance = new a.vB;
    this.instance.parent = this;
    this.instance.setTransform(-462, -252, 3, 3);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype =
    k(a.Koa, new b.Rectangle(-480, -270, 960, 540), null);
  (a.Ioa = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "tutMarathonMobile"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.Bf = new a.mB;
    this.Bf.name = "continueButton";
    this.Bf.parent = this;
    this.Bf.setTransform(3, 194.1, 1, 1, 0, 0, 0, .2, .1);
    this.timeline.addTween(b.Tween.get(this.Bf).wait(1));
    this.Bd = new b.Text("Action Button\nto Dodge", "30px 'PixelMplus10'", "#ede4b5");
    this.Bd.name = "control2";
    this.Bd.textAlign =
      "center";
    this.Bd.lineHeight = 36;
    this.Bd.lineWidth = 241;
    this.Bd.parent = this;
    this.Bd.setTransform(290.5, 51);
    this.Ad = new b.Text("Joystick\nto Move", "30px 'PixelMplus10'", "#ede4b5");
    this.Ad.name = "control1";
    this.Ad.textAlign = "center";
    this.Ad.lineHeight = 36;
    this.Ad.lineWidth = 241;
    this.Ad.parent = this;
    this.Ad.setTransform(-.5, 51);
    this.Cd = new b.Text("Avoid obstacles to go faster and win the race", "30px 'PixelMplus10'", "#af8147");
    this.Cd.name = "rulesContent";
    this.Cd.textAlign = "center";
    this.Cd.lineHeight = 36;
    this.Cd.lineWidth =
      241;
    this.Cd.parent = this;
    this.Cd.setTransform(-291.5, -57);
    this.Dd = new b.Text("Rules", "30px 'PixelMplus10'", "#ede4b5");
    this.Dd.name = "rulesLabel";
    this.Dd.textAlign = "center";
    this.Dd.lineHeight = 36;
    this.Dd.lineWidth = 241;
    this.Dd.parent = this;
    this.Dd.setTransform(-291.5, -111);
    this.title = new b.Text("Marathon", "60px 'PixelMplus10'", "#ede4b5");
    this.title.name = "title";
    this.title.textAlign = "center";
    this.title.lineHeight = 68;
    this.title.lineWidth = 853;
    this.title.parent = this;
    this.title.setTransform(-.5, -225);
    this.timeline.addTween(b.Tween.get({}).to({
      state: [{t: this.title},
        {t: this.Dd}, {t: this.Cd}, {t: this.Ad}, {t: this.Bd}]
    }).wait(1));
    this.mU = new a.mU;
    this.mU.name = "marathonSpritesMobile";
    this.mU.parent = this;
    this.mU.setTransform(-25.5, 16.5, 1, 1, 0, 0, 0, 16.5, 16.5);
    this.timeline.addTween(b.Tween.get(this.mU).wait(1));
    this.instance = new a.vB;
    this.instance.parent = this;
    this.instance.setTransform(-462, -252, 3, 3);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype =
    k(a.Ioa, new b.Rectangle(-480, -270, 960, 540), null);
  (a.Hoa = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "tutMarathonDesktop"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.Bf = new a.mB;
    this.Bf.name = "continueButton";
    this.Bf.parent = this;
    this.Bf.setTransform(3, 194.1, 1, 1, 0, 0, 0, .2, .1);
    this.timeline.addTween(b.Tween.get(this.Bf).wait(1));
    this.Bd = new b.Text("Spacebar\nto Dodge", "30px 'PixelMplus10'", "#ede4b5");
    this.Bd.name = "control2";
    this.Bd.textAlign =
      "center";
    this.Bd.lineHeight = 36;
    this.Bd.lineWidth = 241;
    this.Bd.parent = this;
    this.Bd.setTransform(290.5, 51);
    this.Ad = new b.Text("Direction Keys\nto Move", "30px 'PixelMplus10'", "#ede4b5");
    this.Ad.name = "control1";
    this.Ad.textAlign = "center";
    this.Ad.lineHeight = 36;
    this.Ad.lineWidth = 241;
    this.Ad.parent = this;
    this.Ad.setTransform(-.5, 51);
    this.Cd = new b.Text("Avoid obstacles to go faster and win the race", "30px 'PixelMplus10'", "#af8147");
    this.Cd.name = "rulesContent";
    this.Cd.textAlign = "center";
    this.Cd.lineHeight = 36;
    this.Cd.lineWidth = 241;
    this.Cd.parent = this;
    this.Cd.setTransform(-291.5, -57);
    this.Dd = new b.Text("Rules", "30px 'PixelMplus10'", "#ede4b5");
    this.Dd.name = "rulesLabel";
    this.Dd.textAlign = "center";
    this.Dd.lineHeight = 36;
    this.Dd.lineWidth = 241;
    this.Dd.parent = this;
    this.Dd.setTransform(-291.5, -111);
    this.title = new b.Text("Marathon", "60px 'PixelMplus10'", "#ede4b5");
    this.title.name = "title";
    this.title.textAlign = "center";
    this.title.lineHeight = 68;
    this.title.lineWidth = 853;
    this.title.parent = this;
    this.title.setTransform(-.5,
      -225);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.title}, {t: this.Dd}, {t: this.Cd}, {t: this.Ad}, {t: this.Bd}]}).wait(1));
    this.lU = new a.lU;
    this.lU.name = "marathonSpritesDesktop";
    this.lU.parent = this;
    this.lU.setTransform(-25.5, 16.5, 1, 1, 0, 0, 0, 16.5, 16.5);
    this.timeline.addTween(b.Tween.get(this.lU).wait(1));
    this.instance = new a.vB;
    this.instance.parent = this;
    this.instance.setTransform(-462, -252, 3, 3);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.Hoa, new b.Rectangle(-480, -270, 960, 540), null);
  (a.Foa = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "tutClimbingMobile"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.Bf = new a.mB;
    this.Bf.name = "continueButton";
    this.Bf.parent = this;
    this.Bf.setTransform(3, 194.1, 1, 1, 0, 0, 0, .2, .1);
    this.timeline.addTween(b.Tween.get(this.Bf).wait(1));
    this.Bd = new b.Text("Action Button\nto Jump", "30px 'PixelMplus10'",
      "#ede4b5");
    this.Bd.name = "control2";
    this.Bd.textAlign = "center";
    this.Bd.lineHeight = 36;
    this.Bd.lineWidth = 241;
    this.Bd.parent = this;
    this.Bd.setTransform(290.5, 51);
    this.Ad = new b.Text("Joystick\nto Move", "30px 'PixelMplus10'", "#ede4b5");
    this.Ad.name = "control1";
    this.Ad.textAlign = "center";
    this.Ad.lineHeight = 36;
    this.Ad.lineWidth = 241;
    this.Ad.parent = this;
    this.Ad.setTransform(-.5, 51);
    this.Cd = new b.Text("Climb to the top as fast as you can and avoid obstacles", "30px 'PixelMplus10'", "#af8147");
    this.Cd.name = "rulesContent";
    this.Cd.textAlign = "center";
    this.Cd.lineHeight = 36;
    this.Cd.lineWidth = 241;
    this.Cd.parent = this;
    this.Cd.setTransform(-291.5, -57);
    this.Dd = new b.Text("Rules", "30px 'PixelMplus10'", "#ede4b5");
    this.Dd.name = "rulesLabel";
    this.Dd.textAlign = "center";
    this.Dd.lineHeight = 36;
    this.Dd.lineWidth = 241;
    this.Dd.parent = this;
    this.Dd.setTransform(-291.5, -111);
    this.title = new b.Text("Climbing", "60px 'PixelMplus10'", "#ede4b5");
    this.title.name = "title";
    this.title.textAlign = "center";
    this.title.lineHeight = 68;
    this.title.lineWidth =
      853;
    this.title.parent = this;
    this.title.setTransform(-.5, -225);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.title}, {t: this.Dd}, {t: this.Cd}, {t: this.Ad}, {t: this.Bd}]}).wait(1));
    this.yT = new a.yT;
    this.yT.name = "climbingSpritesMobile";
    this.yT.parent = this;
    this.yT.setTransform(-25.5, 16.5, 1, 1, 0, 0, 0, 16.5, 16.5);
    this.timeline.addTween(b.Tween.get(this.yT).wait(1));
    this.instance = new a.vB;
    this.instance.parent = this;
    this.instance.setTransform(-462, -252, 3, 3);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.Foa, new b.Rectangle(-480, -270, 960, 540), null);
  (a.Eoa = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "tutClimbingDesktop"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.Bf = new a.mB;
    this.Bf.name = "continueButton";
    this.Bf.parent = this;
    this.Bf.setTransform(3, 194.1, 1, 1, 0, 0, 0, .2,
      .1);
    this.timeline.addTween(b.Tween.get(this.Bf).wait(1));
    this.Bd = new b.Text("Spacebar\nto Jump", "30px 'PixelMplus10'", "#ede4b5");
    this.Bd.name = "control2";
    this.Bd.textAlign = "center";
    this.Bd.lineHeight = 36;
    this.Bd.lineWidth = 241;
    this.Bd.parent = this;
    this.Bd.setTransform(290.5, 51);
    this.Ad = new b.Text("Direction Keys\nto Move", "30px 'PixelMplus10'", "#ede4b5");
    this.Ad.name = "control1";
    this.Ad.textAlign = "center";
    this.Ad.lineHeight = 36;
    this.Ad.lineWidth = 241;
    this.Ad.parent = this;
    this.Ad.setTransform(-.5, 51);
    this.Cd =
      new b.Text("Climb to the top as fast as you can and avoid obstacles", "30px 'PixelMplus10'", "#af8147");
    this.Cd.name = "rulesContent";
    this.Cd.textAlign = "center";
    this.Cd.lineHeight = 36;
    this.Cd.lineWidth = 241;
    this.Cd.parent = this;
    this.Cd.setTransform(-291.5, -57);
    this.Dd = new b.Text("Rules", "30px 'PixelMplus10'", "#ede4b5");
    this.Dd.name = "rulesLabel";
    this.Dd.textAlign = "center";
    this.Dd.lineHeight = 36;
    this.Dd.lineWidth = 241;
    this.Dd.parent = this;
    this.Dd.setTransform(-291.5, -111);
    this.title = new b.Text("Climbing", "60px 'PixelMplus10'",
      "#ede4b5");
    this.title.name = "title";
    this.title.textAlign = "center";
    this.title.lineHeight = 68;
    this.title.lineWidth = 853;
    this.title.parent = this;
    this.title.setTransform(-.5, -225);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.title}, {t: this.Dd}, {t: this.Cd}, {t: this.Ad}, {t: this.Bd}]}).wait(1));
    this.xT = new a.xT;
    this.xT.name = "climbingSpritesDesktop";
    this.xT.parent = this;
    this.xT.setTransform(-25.5, 16.5, 1, 1, 0, 0, 0, 16.5, 16.5);
    this.timeline.addTween(b.Tween.get(this.xT).wait(1));
    this.instance = new a.vB;
    this.instance.parent = this;
    this.instance.setTransform(-462, -252, 3, 3);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.Eoa, new b.Rectangle(-480, -270, 960, 540), null);
  (a.Ina = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "stats"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.AK = new a.Xla;
    this.AK.name = "settings";
    this.AK.parent = this;
    this.AK.setTransform(-50, 62, .9999, .9999);
    this.share = new a.$la;
    this.share.name = "share";
    this.share.parent = this;
    this.share.setTransform(50.1, 62.1, .9999, .9999, 0, 0, 0, .1, .1);
    this.wK = new a.Sfa;
    this.wK.name = "leader";
    this.wK.parent = this;
    this.wK.setTransform(17, 62, .9999, .9999);
    this.controls = new a.Ida;
    this.controls.name = "controls";
    this.controls.parent = this;
    this.controls.setTransform(-16.1, 62.1, .9999, .9999, 0, 0, 0, -.1, .1);
    this.close = new a.HK;
    this.close.name =
      "close";
    this.close.parent = this;
    this.close.setTransform(-148, -77.5, 1, 1, 0, 0, 0, 0, -.5);
    this.c0 = new a.c2a;
    this.c0.name = "skating";
    this.c0.parent = this;
    this.c0.setTransform(-75, -14, 1, 1, 0, 0, 0, 0, -1);
    this.o0 = new a.xWa;
    this.o0.name = "tennis";
    this.o0.parent = this;
    this.o0.setTransform(79, -40, 1, 1, 0, 0, 0, 0, -1);
    this.l0 = new a.p4a;
    this.l0.name = "swimming";
    this.l0.parent = this;
    this.l0.setTransform(-75.05, -41);
    this.vU = new a.M0a;
    this.vU.name = "rugby";
    this.vU.parent = this;
    this.vU.setTransform(79, -12);
    this.pT = new a.Gra;
    this.pT.name =
      "archery";
    this.pT.parent = this;
    this.pT.setTransform(-75, -66, 1, 1, 0, 0, 0, 0, -1);
    this.kU = new a.KOa;
    this.kU.name = "marathon";
    this.kU.parent = this;
    this.kU.setTransform(79, 14, 1, 1, 0, 0, 0, 0, -1);
    this.wT = new a.BAa;
    this.wT.name = "climbing";
    this.wT.parent = this;
    this.wT.setTransform(79, -66, 1, 1, 0, 0, 0, 0, -1);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.wT}, {t: this.kU}, {t: this.pT}, {t: this.vU}, {t: this.l0}, {t: this.o0}, {t: this.c0}, {t: this.close}, {t: this.controls}, {t: this.wK}, {t: this.share}, {t: this.AK}]}).wait(1));
    this.label = new b.Text("Champion Island", "10px 'PixelMplus10'", "#ae8046");
    this.label.name = "label";
    this.label.textAlign = "center";
    this.label.lineHeight = 11;
    this.label.lineWidth = 118;
    this.label.parent = this;
    this.label.setTransform(0, 28);
    this.GL = new b.Text("???", "10px 'PixelMplus10'", "#ffffff");
    this.GL.name = "marathonScore";
    this.GL.textAlign = "center";
    this.GL.lineHeight = 11;
    this.GL.lineWidth = 40;
    this.GL.parent = this;
    this.GL.setTransform(112, 4);
    this.QL = new b.Text("???", "10px 'PixelMplus10'", "#ffffff");
    this.QL.name =
      "syncswimScore";
    this.QL.textAlign = "center";
    this.QL.lineHeight = 11;
    this.QL.lineWidth = 40;
    this.QL.parent = this;
    this.QL.setTransform(-111, -48);
    this.JL = new b.Text("???", "10px 'PixelMplus10'", "#ffffff");
    this.JL.name = "rugbyScore";
    this.JL.textAlign = "center";
    this.JL.lineHeight = 11;
    this.JL.lineWidth = 40;
    this.JL.parent = this;
    this.JL.setTransform(112, -22);
    this.wL = new b.Text("???", "10px 'PixelMplus10'", "#ffffff");
    this.wL.name = "archeryScore";
    this.wL.textAlign = "center";
    this.wL.lineHeight = 11;
    this.wL.lineWidth = 40;
    this.wL.parent =
      this;
    this.wL.setTransform(-111, -74);
    this.HL = new b.Text("???", "10px 'PixelMplus10'", "#ffffff");
    this.HL.name = "pingpongScore";
    this.HL.textAlign = "center";
    this.HL.lineHeight = 11;
    this.HL.lineWidth = 40;
    this.HL.parent = this;
    this.HL.setTransform(112, -48);
    this.NL = new b.Text("???", "10px 'PixelMplus10'", "#ffffff");
    this.NL.name = "skateScore";
    this.NL.textAlign = "center";
    this.NL.lineHeight = 11;
    this.NL.lineWidth = 40;
    this.NL.parent = this;
    this.NL.setTransform(-111, -22);
    this.yL = new b.Text("???", "10px 'PixelMplus10'", "#ffffff");
    this.yL.name = "climbingScore";
    this.yL.textAlign = "center";
    this.yL.lineHeight = 11;
    this.yL.lineWidth = 40;
    this.yL.parent = this;
    this.yL.setTransform(112, -74);
    this.BK = new b.Text("???", "10px 'PixelMplus10'", "#ede4b5");
    this.BK.name = "teamName";
    this.BK.textAlign = "center";
    this.BK.lineHeight = 11;
    this.BK.lineWidth = 64;
    this.BK.parent = this;
    this.BK.setTransform(102, 58);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.BK}, {t: this.yL}, {t: this.NL}, {t: this.HL}, {t: this.wL}, {t: this.JL}, {t: this.QL}, {t: this.GL}, {t: this.label}]}).wait(1));
    this.J_ = new a.TOa;
    this.J_.name = "marathonScroll";
    this.J_.parent = this;
    this.J_.setTransform(-93, 65, 1, 1, 0, 0, 0, 0, -7);
    this.r_ = new a.zAa;
    this.r_.name = "climbingScroll";
    this.r_.parent = this;
    this.r_.setTransform(-103, 21, 1, 1, 0, 0, 0, 0, -7);
    this.i_ = new a.Sra;
    this.i_.name = "archeryScroll";
    this.i_.parent = this;
    this.i_.setTransform(-120, 30, 1, 1, 0, 0, 0, 0, -7);
    this.k0 = new a.y4a;
    this.k0.name = "swimScroll";
    this.k0.parent = this;
    this.k0.setTransform(-124, 50, 1, 1, 0, 0, 0, 0, -7);
    this.b0 = new a.r2a;
    this.b0.name = "skateScroll";
    this.b0.parent =
      this;
    this.b0.setTransform(-114, 65, 1, 1, 0, 0, 0, 0, -7);
    this.Z_ = new a.c1a;
    this.Z_.name = "rubgyScroll";
    this.Z_.parent = this;
    this.Z_.setTransform(-82, 50, 1, 1, 0, 0, 0, 0, -7);
    this.T_ = new a.dXa;
    this.T_.name = "pingpongScroll";
    this.T_.parent = this;
    this.T_.setTransform(-86, 30, 1, 1, 0, 0, 0, 0, -7);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.T_}, {t: this.Z_}, {t: this.b0}, {t: this.k0}, {t: this.i_}, {t: this.r_}, {t: this.J_}]}).wait(1));
    this.instance = new a.$4a;
    this.instance.parent = this;
    this.instance.setTransform(101, 46,
      1, 1, 0, 0, 0, 0, -10);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1));
    this.g = new a.JB;
    this.g.parent = this;
    this.g.setTransform(-105, 42.9, 1, 1, 0, 0, 0, -2, -9);
    this.timeline.addTween(b.Tween.get(this.g).wait(1));
    this.BY = new a.lN;
    this.BY.name = "marathonStars";
    this.BY.parent = this;
    this.BY.setTransform(110.8, 19, 1, 1, 0, 0, 0, 0, -3);
    this.JY = new a.lN;
    this.JY.name = "rugbyStars";
    this.JY.parent = this;
    this.JY.setTransform(110.8, -7, 1, 1, 0, 0, 0, 0, -3);
    this.EY = new a.lN;
    this.EY.name = "pingpongStars";
    this.EY.parent = this;
    this.EY.setTransform(110.8,
      -33, 1, 1, 0, 0, 0, 0, -3);
    this.qY = new a.lN;
    this.qY.name = "climbingStars";
    this.qY.parent = this;
    this.qY.setTransform(110.8, -59, 1, 1, 0, 0, 0, 0, -3);
    this.LY = new a.lN;
    this.LY.name = "skateStars";
    this.LY.parent = this;
    this.LY.setTransform(-112, -7, 1, 1, 0, 0, 0, 0, -3);
    this.NY = new a.lN;
    this.NY.name = "syncswimStars";
    this.NY.parent = this;
    this.NY.setTransform(-112, -33, 1, 1, 0, 0, 0, 0, -3);
    this.nY = new a.lN;
    this.nY.name = "archeryStars";
    this.nY.parent = this;
    this.nY.setTransform(-112, -59, 1, 1, 0, 0, 0, 0, -3);
    this.timeline.addTween(b.Tween.get({}).to({
      state: [{t: this.nY},
        {t: this.NY}, {t: this.LY}, {t: this.qY}, {t: this.EY}, {t: this.JY}, {t: this.BY}]
    }).wait(1));
    this.map = new a.Map;
    this.map.name = "map";
    this.map.parent = this;
    this.map.setTransform(-60, -73);
    this.timeline.addTween(b.Tween.get(this.map).wait(1));
    this.i = new a.Nbb;
    this.i.parent = this;
    this.i.setTransform(-154, -84);
    this.timeline.addTween(b.Tween.get(this.i).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("A4/OEIAA8HMAx/AAAIAAcHg");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype =
    k(a.Ina, new b.Rectangle(-160, -90, 320, 180), null);
  (a.cma = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "share"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.s_ = new a.dBa;
    this.s_.name = "closeShareButton";
    this.s_.parent = this;
    this.s_.setTransform(-98, -46, 1, 1, 0, 0, 0, 0, -1);
    this.instance = new a.v1a;
    this.instance.parent = this;
    this.instance.setTransform(68.5, -9, 1, 1, 0, 0, 0, 3.5, 2);
    this.g = new a.DBa;
    this.g.parent = this;
    this.g.setTransform(35.5, -7.5, 1, 1, 0, 0, 0, 3.5,
      3.5);
    this.i = new a.HOa;
    this.i.parent = this;
    this.i.setTransform(-60.5, -7.5, 1, 1, 0, 0, 0, 3.5, 3.5);
    this.o = new a.I8a;
    this.o.parent = this;
    this.o.setTransform(3.5, -7.5, 1, 1, 0, 0, 0, 3.5, 3.5);
    this.H = new a.GDa;
    this.H.parent = this;
    this.H.setTransform(-28.5, -7.5, 1, 1, 0, 0, 0, 3.5, 3.5);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.H}, {t: this.o}, {t: this.i}, {t: this.g}, {t: this.instance}, {t: this.s_}]}).wait(1));
    this.label = new b.Text("Share", "12px 'PixelMplus10'", "#ede4b5");
    this.label.name = "label";
    this.label.textAlign =
      "center";
    this.label.lineHeight = 13;
    this.label.lineWidth = 201;
    this.label.parent = this;
    this.label.setTransform(2.8, -43);
    this.timeline.addTween(b.Tween.get(this.label).wait(1));
    this.O = new a.C1a;
    this.O.parent = this;
    this.O.setTransform(-104, -52);
    this.timeline.addTween(b.Tween.get(this.O).wait(1))
  }).prototype = k(a.cma, new b.Rectangle(-109, -57, 219, 71), null);
  (a.Ncb = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "textRetro"}, keyboardNav: {order: 5}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.ct;
    this.instance.parent = this;
    this.instance.setTransform(-38.5, -.5, 1, 1, 180, 0, 0, -1.5, 0);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).to({_off: ! 0}, 1).wait(1));
    this.g = new a.Ep;
    this.g.parent = this;
    this.g.setTransform(-149, -7);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1}, 0).to({_off: ! 0}, 1).wait(1));
    this.text = new b.Text("Retro", "10px 'PixelMplus10'",
      "#af824a");
    this.text.name = "text";
    this.text.textAlign = "center";
    this.text.lineHeight = 11;
    this.text.lineWidth = 66;
    this.text.parent = this;
    this.text.setTransform(1, -6);
    this.timeline.addTween(b.Tween.get(this.text).wait(1).to({color: "#ffffff"}, 0).wait(2));
    this.i = new a.Cx;
    this.i.parent = this;
    this.i.setTransform(-34, -7);
    this.i._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.i).wait(1).to({_off: ! 1}, 0).to({_off: ! 0}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(1.45,
      -.5, .3301, .1467, 0, 0, 0, 1.4, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-149, -8, 185, 15);
  (a.Mcb = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "textModern"}, keyboardNav: {order: 6}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.ct;
    this.instance.parent = this;
    this.instance.setTransform(-38.5, -.5, 1, 1, 180, 0, 0, -1.5,
      0);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).to({_off: ! 0}, 1).wait(1));
    this.g = new a.Ep;
    this.g.parent = this;
    this.g.setTransform(-233, -7);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1}, 0).to({_off: ! 0}, 1).wait(1));
    this.text = new b.Text("Modern", "10px 'PixelMplus10'", "#af824a");
    this.text.name = "text";
    this.text.textAlign = "center";
    this.text.lineHeight = 11;
    this.text.lineWidth = 66;
    this.text.parent = this;
    this.text.setTransform(1,
      -6);
    this.timeline.addTween(b.Tween.get(this.text).wait(1).to({color: "#ffffff"}, 0).wait(2));
    this.i = new a.Cx;
    this.i.parent = this;
    this.i.setTransform(-34, -7);
    this.i._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.i).wait(1).to({_off: ! 1}, 0).to({_off: ! 0}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(1.45, -.5, .3301, .1467, 0, 0, 0, 1.4, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-233, -8, 269, 15);
  (a.Acb = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "soundOn"}, keyboardNav: {order: 3}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.ct;
    this.instance.parent = this;
    this.instance.setTransform(-38.5, -.5, 1, 1, 180, 0, 0, -1.5, 0);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).to({_off: ! 0}, 1).wait(1));
    this.g = new a.Ep;
    this.g.parent = this;
    this.g.setTransform(-149, -7);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1}, 0).to({_off: ! 0}, 1).wait(1));
    this.text = new b.Text("On", "10px 'PixelMplus10'", "#af824a");
    this.text.name = "text";
    this.text.textAlign = "center";
    this.text.lineHeight = 11;
    this.text.lineWidth = 66;
    this.text.parent = this;
    this.text.setTransform(1, -6);
    this.timeline.addTween(b.Tween.get(this.text).wait(1).to({color: "#ffffff"}, 0).wait(2));
    this.i = new a.Cx;
    this.i.parent = this;
    this.i.setTransform(-34,
      -7);
    this.i._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.i).wait(1).to({_off: ! 1}, 0).to({_off: ! 0}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(1.45, -.5, .3301, .1467, 0, 0, 0, 1.4, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-149, -8, 185, 15);
  (a.zcb = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {
        button: {eventId: "soundOff"},
        keyboardNav: {order: 4}
      };
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.ct;
    this.instance.parent = this;
    this.instance.setTransform(-38.5, -.5, 1, 1, 180, 0, 0, -1.5, 0);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).to({_off: ! 0}, 1).wait(1));
    this.g = new a.Ep;
    this.g.parent = this;
    this.g.setTransform(-233, -7);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1}, 0).to({_off: ! 0}, 1).wait(1));
    this.text =
      new b.Text("Off", "10px 'PixelMplus10'", "#af824a");
    this.text.name = "text";
    this.text.textAlign = "center";
    this.text.lineHeight = 11;
    this.text.lineWidth = 66;
    this.text.parent = this;
    this.text.setTransform(1, -6);
    this.timeline.addTween(b.Tween.get(this.text).wait(1).to({color: "#ffffff"}, 0).wait(2));
    this.i = new a.Cx;
    this.i.parent = this;
    this.i.setTransform(-34, -7);
    this.i._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.i).wait(1).to({_off: ! 1}, 0).to({_off: ! 0}, 1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(1.45, -.5, .3301, .1467, 0, 0, 0, 1.4, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-233, -8, 269, 15);
  (a.Sbb = function (d, e, f) {
    this.initialize(d, e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "newGame"}, keyboardNav: {order: 2}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(3));
    this.instance = new a.ct;
    this.instance.parent = this;
    this.instance.setTransform(-128.5, -.5, 1, 1, 180, 0, 0, -1.5, 0);
    this.instance._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({_off: ! 1}, 0).to({_off: ! 0}, 1).wait(1));
    this.g = new a.Ep;
    this.g.parent = this;
    this.g.setTransform(-149, -7);
    this.g._off = ! 0;
    this.timeline.addTween(b.Tween.get(this.g).wait(1).to({_off: ! 1}, 0).to({_off: ! 0}, 1).wait(1));
    this.text = new b.Text("Start a new game", "10px 'PixelMplus10'", "#ede4b5");
    this.text.name = "text";
    this.text.lineHeight = 11;
    this.text.lineWidth = 228;
    this.text.parent =
      this;
    this.text.setTransform(-114.45, -6);
    this.timeline.addTween(b.Tween.get(this.text).wait(1).to({color: "#ffffff"}, 0).wait(2));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(-73, -.5, .4009, .1467, 0, 0, 0, 1.2, 0);
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-149, -8, 265, 16.1);
  (a.F_a = function (d, e, f) {
    this.initialize(d, e, f, {zero: 0, rating1: 1, rating2: 2, rating3: 3});
    this.u =
      function () {
        this.stop()
      };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(4));
    this.LQ = new a.B_a;
    this.LQ.name = "rating0";
    this.LQ.parent = this;
    this.LQ.setTransform(-66, -1, 1, 1, 0, 0, 0, -66, -1);
    this.MQ = new a.C_a;
    this.MQ.name = "rating1";
    this.MQ.parent = this;
    this.MQ.setTransform(-66, -1, 1, 1, 0, 0, 0, -66, -1);
    this.NQ = new a.D_a;
    this.NQ.name = "rating2";
    this.NQ.parent = this;
    this.NQ.setTransform(-66, -1, 1, 1, 0, 0, 0, -66, -1);
    this.OQ = new a.E_a;
    this.OQ.name = "rating3";
    this.OQ.parent = this;
    this.OQ.setTransform(-66, -1, 1, 1,
      0, 0, 0, -66, -1);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.LQ}]}).to({state: [{t: this.MQ}]}, 1).to({state: [{t: this.NQ}]}, 1).to({state: [{t: this.OQ}]}, 1).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-46, -11, 92, 20);
  (a.lka = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "pause"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.title = new b.Text("Paused", "60px 'PixelMplus10'", "#ede4b5");
    this.title.name = "title";
    this.title.textAlign =
      "center";
    this.title.lineHeight = 68;
    this.title.lineWidth = 924;
    this.title.parent = this;
    this.title.setTransform(0, -189);
    this.timeline.addTween(b.Tween.get(this.title).wait(1));
    this.B_ = new a.TEa;
    this.B_.name = "how";
    this.B_.parent = this;
    this.B_.setTransform(.1, -5.6, 1, 1, 0, 0, 0, .1, .4);
    this.Y_ = new a.v0a;
    this.Y_.name = "restart";
    this.Y_.parent = this;
    this.Y_.setTransform(-3.1, 68, 1, 1, 0, 0, 0, -3.1, 0);
    this.resume = new a.w0a;
    this.resume.name = "resume";
    this.resume.parent = this;
    this.resume.setTransform(-3.1, -76, 1, 1, 0, 0, 0, -3.1,
      0);
    this.BL = new a.ZZa;
    this.BL.name = "exit";
    this.BL.parent = this;
    this.BL.setTransform(0, 140);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.BL}, {t: this.resume}, {t: this.Y_}, {t: this.B_}]}).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.lka, new b.Rectangle(-480, -270, 960, 540), null);
  (a.Kda = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "controls"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.zT = new a.kab;
    this.zT.name = "confirmButton";
    this.zT.parent = this;
    this.zT.setTransform(-76.4, 65.05, .3332, .3327, 0, 0, 0, -1.2, .1);
    this.BT = new a.lab;
    this.BT.name = "defaultsButton";
    this.BT.parent = this;
    this.BT.setTransform(77.05, 65, .3332, .3327, 0, 0, 0, .1, 0);
    this.back = new a.e1;
    this.back.name = "back";
    this.back.parent = this;
    this.back.setTransform(-148, -77.5, 1, 1, 0, 0, 0, 0, -.5);
    this.timeline.addTween(b.Tween.get({}).to({
      state: [{t: this.back}, {t: this.BT},
        {t: this.zT}]
    }).wait(1));
    this.sT = new b.Text("Cancel", "10px 'PixelMplus10'", "#ede4b5");
    this.sT.name = "cancelLabel";
    this.sT.lineHeight = 11;
    this.sT.lineWidth = 76;
    this.sT.parent = this;
    this.sT.setTransform(-115, 31.05, 1, 1.0225);
    this.oT = new b.Text("Action", "10px 'PixelMplus10'", "#ede4b5");
    this.oT.name = "actionLabel";
    this.oT.lineHeight = 11;
    this.oT.lineWidth = 76;
    this.oT.parent = this;
    this.oT.setTransform(-115, 17.05, 1, 1.0225);
    this.uU = new b.Text("Right", "10px 'PixelMplus10'", "#ede4b5");
    this.uU.name = "rightLabel";
    this.uU.lineHeight =
      11;
    this.uU.lineWidth = 76;
    this.uU.parent = this;
    this.uU.setTransform(-115, 3.05, 1, 1.0225);
    this.iU = new b.Text("Left", "10px 'PixelMplus10'", "#ede4b5");
    this.iU.name = "leftLabel";
    this.iU.lineHeight = 11;
    this.iU.lineWidth = 76;
    this.iU.parent = this;
    this.iU.setTransform(-115, -10.95, 1, 1.0225);
    this.downLabel = new b.Text("Down", "10px 'PixelMplus10'", "#ede4b5");
    this.downLabel.name = "downLabel";
    this.downLabel.lineHeight = 11;
    this.downLabel.lineWidth = 76;
    this.downLabel.parent = this;
    this.downLabel.setTransform(-115, -24.95, 1, 1.0225);
    this.PU = new b.Text("Up", "10px 'PixelMplus10'", "#ede4b5");
    this.PU.name = "upLabel";
    this.PU.lineHeight = 11;
    this.PU.lineWidth = 76;
    this.PU.parent = this;
    this.PU.setTransform(-115, -38.95, 1, 1.0225);
    this.yN = new b.Text("Controls", "20px 'PixelMplus10'", "#ede4b5");
    this.yN.name = "controlsLabel";
    this.yN.lineHeight = 24;
    this.yN.lineWidth = 116;
    this.yN.parent = this;
    this.yN.setTransform(-115, -75);
    this.timeline.addTween(b.Tween.get({}).to({
      state: [{t: this.yN}, {t: this.PU}, {t: this.downLabel}, {t: this.iU}, {t: this.uU}, {t: this.oT},
        {t: this.sT}]
    }).wait(1));
    this.FT = new a.dbb;
    this.FT.name = "gpCancel";
    this.FT.parent = this;
    this.FT.setTransform(112, 36.5, 1, 1, 0, 0, 0, 1, -.5);
    this.ET = new a.cbb;
    this.ET.name = "gpAction";
    this.ET.parent = this;
    this.ET.setTransform(112, 22.5, 1, 1, 0, 0, 0, 1, -.5);
    this.IT = new a.gbb;
    this.IT.name = "gpRight";
    this.IT.parent = this;
    this.IT.setTransform(112, 8.5, 1, 1, 0, 0, 0, 1, -.5);
    this.HT = new a.fbb;
    this.HT.name = "gpLeft";
    this.HT.parent = this;
    this.HT.setTransform(112, -5.5, 1, 1, 0, 0, 0, 1, -.5);
    this.GT = new a.ebb;
    this.GT.name = "gpDown";
    this.GT.parent =
      this;
    this.GT.setTransform(112, -19.5, 1, 1, 0, 0, 0, 1, -.5);
    this.JT = new a.hbb;
    this.JT.name = "gpUp";
    this.JT.parent = this;
    this.JT.setTransform(112, -33.5, 1, 1, 0, 0, 0, 1, -.5);
    this.bU = new a.sbb;
    this.bU.name = "kbCancel";
    this.bU.parent = this;
    this.bU.setTransform(28, 36.5, 1, 1, 0, 0, 0, 1, -.5);
    this.aU = new a.rbb;
    this.aU.name = "kbAction";
    this.aU.parent = this;
    this.aU.setTransform(28, 22.5, 1, 1, 0, 0, 0, 1, -.5);
    this.eU = new a.wbb;
    this.eU.name = "kbRight";
    this.eU.parent = this;
    this.eU.setTransform(28, 8.5, 1, 1, 0, 0, 0, 1, -.5);
    this.dU = new a.vbb;
    this.dU.name =
      "kbLeft";
    this.dU.parent = this;
    this.dU.setTransform(28, -5.5, 1, 1, 0, 0, 0, 1, -.5);
    this.cU = new a.tbb;
    this.cU.name = "kbDown";
    this.cU.parent = this;
    this.cU.setTransform(28, -19.5, 1, 1, 0, 0, 0, 1, -.5);
    this.fU = new a.xbb;
    this.fU.name = "kbUp";
    this.fU.parent = this;
    this.fU.setTransform(30.5, -31.1, 1, 1, 0, 0, 0, 3.5, 1.9);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.fU}, {t: this.cU}, {t: this.dU}, {t: this.eU}, {t: this.aU}, {t: this.bU}, {t: this.JT}, {t: this.GT}, {t: this.HT}, {t: this.IT}, {t: this.ET}, {t: this.FT}]}).wait(1));
    this.instance =
      new a.jab;
    this.instance.parent = this;
    this.instance.setTransform(102, -68);
    this.g = new a.ubb;
    this.g.parent = this;
    this.g.setTransform(18, -68);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.g}, {t: this.instance}]}).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("#582e11").s().dr(-.5, -10.5, 1, 21);
    this.shape.setTransform(-.5, 64.5);
    this.Ze = new b.Shape;
    this.Ze.graphics.f("#1d0900").s().dr(-14.5, -14.5, 29, 29);
    this.Ze.setTransform(.0025, 1.5051, 10.4307, 3.2078);
    this.i = new a.K_;
    this.i.parent = this;
    this.i.setTransform(-154, -84);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.i}, {t: this.Ze}, {t: this.shape}]}).wait(1));
    this.Zs = new b.Shape;
    this.Zs.graphics.f("rgba(0,0,0,0.749)").s().p("A4/OEIAA8HMAx/AAAIAAcHg");
    this.timeline.addTween(b.Tween.get(this.Zs).wait(1))
  }).prototype = k(a.Kda, new b.Rectangle(-160, -90, 320, 180), null);
  (a.dma = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.share = new a.cma;
    this.share.name = "share";
    this.share.parent = this;
    this.share.setTransform(466, 348.5, 3, 3, 0, 0, 0, 0, -23.5);
    this.timeline.addTween(b.Tween.get(this.share).wait(1))
  }).prototype = k(a.dma, new b.Rectangle(139, 248, 657, 213), null);
  (a.Yla = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "settings"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.rS = new b.Text("Text Style", "10px 'PixelMplus10'", "#ede4b5");
    this.rS.name = "textStyleLabel";
    this.rS.lineHeight = 11;
    this.rS.lineWidth = 76;
    this.rS.parent = this;
    this.rS.setTransform(-115, 25.05, 1, 1.0225);
    this.hS = new b.Text("Sound",
      "10px 'PixelMplus10'", "#ede4b5");
    this.hS.name = "soundLabel";
    this.hS.lineHeight = 11;
    this.hS.lineWidth = 76;
    this.hS.parent = this;
    this.hS.setTransform(-115, 4.05, 1, 1.0225);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.hS}, {t: this.rS}]}).wait(1));
    this.p0 = new a.Mcb;
    this.p0.name = "textStyleModern";
    this.p0.parent = this;
    this.p0.setTransform(95, 30.5, 1, 1, 0, 0, 0, 1, -.5);
    this.d0 = new a.zcb;
    this.d0.name = "soundOff";
    this.d0.parent = this;
    this.d0.setTransform(95, 9.5, 1, 1, 0, 0, 0, 1, -.5);
    this.L_ = new a.Sbb;
    this.L_.name =
      "newGame";
    this.L_.parent = this;
    this.L_.setTransform(.45, -26.5, 1, 1, 0, 0, 0, 1, -.5);
    this.q0 = new a.Ncb;
    this.q0.name = "textStyleRetro";
    this.q0.parent = this;
    this.q0.setTransform(11, 30.5, 1, 1, 0, 0, 0, 1, -.5);
    this.e0 = new a.Acb;
    this.e0.name = "soundOn";
    this.e0.parent = this;
    this.e0.setTransform(13.5, 11.9, 1, 1, 0, 0, 0, 3.5, 1.9);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.e0}, {t: this.q0}, {t: this.L_}, {t: this.d0}, {t: this.p0}]}).wait(1));
    this.back = new a.e1;
    this.back.name = "back";
    this.back.parent = this;
    this.back.setTransform(-148,
      -77.5, 1, 1, 0, 0, 0, 0, -.5);
    this.timeline.addTween(b.Tween.get(this.back).wait(1));
    this.ML = new b.Text("Settings", "20px 'PixelMplus10'", "#ede4b5");
    this.ML.name = "settingsLabel";
    this.ML.textAlign = "center";
    this.ML.lineHeight = 24;
    this.ML.lineWidth = 282;
    this.ML.parent = this;
    this.ML.setTransform(0, -75);
    this.timeline.addTween(b.Tween.get(this.ML).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("#582e11").s().p("AiFABIAAgCIELAAIAAACg");
    this.shape.setTransform(.0085, -7.5035, 10.4291, 3.3682);
    this.Ze = new b.Shape;
    this.Ze.graphics.f("#1d0900").s().p("AiQCRIAAkhIEhAAIAAEhg");
    this.Ze.setTransform(.0025, 1.5051, 10.4307, 3.2078);
    this.instance = new a.K_;
    this.instance.parent = this;
    this.instance.setTransform(-154, -84);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}, {t: this.Ze}, {t: this.shape}]}).wait(1));
    this.Zs = new b.Shape;
    this.Zs.graphics.f("rgba(0,0,0,0.749)").s().p("A4/OEIAA8HMAx/AAAIAAcHg");
    this.timeline.addTween(b.Tween.get(this.Zs).wait(1))
  }).prototype = k(a.Yla, new b.Rectangle(-160, -90, 320, 180),
    null);
  (a.nla = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {id: "results"}}
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.share = new a.B1a;
    this.share.name = "share";
    this.share.parent = this;
    this.share.setTransform(144.05, 145.05, .3333, .3333, 0, 0, 0, .1, .1);
    this.oU = new a.QVa;
    this.oU.name = "overworld";
    this.oU.parent = this;
    this.oU.setTransform(175.95, 145.05, .3333, .3333, 0, 0, 0, -.1, .1);
    this.X_ = new a.u0a;
    this.X_.name = "replay";
    this.X_.parent = this;
    this.X_.setTransform(111.95,
      145.05, .3333, .3333, 0, 0, 0, -.1, .1);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.X_}, {t: this.oU}, {t: this.share}]}).wait(1));
    this.title = new b.Text("Results", "20px 'PixelMplus10'", "#ede4b5");
    this.title.name = "title";
    this.title.textAlign = "center";
    this.title.lineHeight = 24;
    this.title.lineWidth = 282;
    this.title.parent = this;
    this.title.setTransform(144.05, 7.05);
    this.timeline.addTween(b.Tween.get(this.title).wait(1));
    this.CL = new b.Text("Your High Score", "10px 'PixelMplus10'", "#af824a");
    this.CL.name =
      "highScoreLabel";
    this.CL.textAlign = "center";
    this.CL.lineHeight = 13;
    this.CL.lineWidth = 156;
    this.CL.parent = this;
    this.CL.setTransform(143.95, 35.95);
    this.mC = new b.Text("???", "12px 'PixelMplus10'", "#af824a");
    this.mC.name = "highScore";
    this.mC.textAlign = "center";
    this.mC.lineHeight = 15;
    this.mC.lineWidth = 156;
    this.mC.parent = this;
    this.mC.setTransform(144, 51);
    this.Hf = new b.Text("???", "20px 'PixelMplus10'", "#f4fff0");
    this.Hf.name = "score";
    this.Hf.textAlign = "center";
    this.Hf.lineHeight = 24;
    this.Hf.lineWidth = 156;
    this.Hf.parent =
      this;
    this.Hf.setTransform(144, 69);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.Hf}, {t: this.mC}, {t: this.CL}]}).wait(1));
    this.zK = new a.F_a;
    this.zK.name = "ratings";
    this.zK.parent = this;
    this.zK.setTransform(144.2, 113.1, 1, 1, 0, 0, 0, .2, .1);
    this.instance = new a.yFa;
    this.instance.parent = this;
    this.instance.setTransform(215, 13);
    this.g = new a.AFa;
    this.g.parent = this;
    this.g.setTransform(-17, 11);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.g}, {t: this.instance}, {t: this.zK}]}).wait(1));
    this.i =
      new a.K_;
    this.i.parent = this;
    this.i.setTransform(-10, -2);
    this.timeline.addTween(b.Tween.get(this.i).wait(1));
    this.shape = new b.Shape;
    this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("A4/OEIAA8HMAx/AAAIAAcHg");
    this.shape.setTransform(144, 82);
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.nla, new b.Rectangle(-17, -8, 331, 180), null);
  (a.Obb = function (d, e, f) {
    this.initialize(d, e, f, {
      stats: 0,
      skip: 1,
      results: 2,
      pause: 3,
      newgame: 4,
      leaderboard: 5,
      controls: 6,
      settings: 7,
      tutArcheryDesktop: 8,
      tutArcheryMobile: 9,
      tutClimbingDesktop: 10,
      tutClimbingMobile: 11,
      tutMarathonDesktop: 12,
      tutMarathonMobile: 13,
      tutRugbyDesktop: 14,
      tutRugbyMobile: 15,
      tutSkateDesktop: 16,
      tutSkateMobile: 17,
      tutSwimDesktop: 18,
      tutSwimMobile: 19,
      tutPingpongDesktop: 20,
      tutPingpongMobile: 21
    });
    this.u = function () {
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(22));
    this.kS = new a.Ina;
    this.kS.name = "statsMenu";
    this.kS.parent = this;
    this.kS.setTransform(480, 270, 3, 3);
    this.instance = new a.yma;
    this.instance.parent = this;
    this.instance.setTransform(479.85,
      270);
    this.Jw = new a.nla;
    this.Jw.name = "resultsMenu";
    this.Jw.parent = this;
    this.Jw.setTransform(480, 270, 3, 3, 0, 0, 0, 144, 82);
    this.S_ = new a.lka;
    this.S_.name = "pauseMenu";
    this.S_.parent = this;
    this.S_.setTransform(480, 270);
    this.M_ = new a.nja;
    this.M_.name = "newGameMenu";
    this.M_.parent = this;
    this.M_.setTransform(480, 270);
    this.AY = new a.Ufa;
    this.AY.name = "leaderboardMenu";
    this.AY.parent = this;
    this.AY.setTransform(480.1, 270.1, 3, 3);
    this.t_ = new a.Kda;
    this.t_.name = "controlsMenu";
    this.t_.parent = this;
    this.t_.setTransform(479.7,
      267.6, 3, 3, 0, 0, 0, -.1, -.8);
    this.a0 = new a.Yla;
    this.a0.name = "settingsMenu";
    this.a0.parent = this;
    this.a0.setTransform(480, 270, 3, 3);
    this.s0 = new a.Coa;
    this.s0.name = "tutArcheryDesktopPause";
    this.s0.parent = this;
    this.s0.setTransform(480, 270);
    this.t0 = new a.Doa;
    this.t0.name = "tutArcheryMobilePause";
    this.t0.parent = this;
    this.t0.setTransform(480, 270);
    this.u0 = new a.Eoa;
    this.u0.name = "tutClimbingDesktopPause";
    this.u0.parent = this;
    this.u0.setTransform(480, 270);
    this.v0 = new a.Foa;
    this.v0.name = "tutClimbingMobilePause";
    this.v0.parent =
      this;
    this.v0.setTransform(480, 270);
    this.w0 = new a.Hoa;
    this.w0.name = "tutMarathonDesktopPause";
    this.w0.parent = this;
    this.w0.setTransform(480, 270);
    this.x0 = new a.Ioa;
    this.x0.name = "tutMarathonMobilePause";
    this.x0.parent = this;
    this.x0.setTransform(480, 270);
    this.A0 = new a.Ooa;
    this.A0.name = "tutRugbyDesktopPause";
    this.A0.parent = this;
    this.A0.setTransform(480, 270);
    this.text = new b.Text("", "20px 'PixelMplus10-Regular'", "#af824a");
    this.text.textAlign = "center";
    this.text.lineHeight = 24;
    this.text.lineWidth = 100;
    this.text.parent =
      this;
    this.text.setTransform(517, 456);
    this.B0 = new a.Poa;
    this.B0.name = "tutRugbyMobilePause";
    this.B0.parent = this;
    this.B0.setTransform(480, 270);
    this.C0 = new a.Qoa;
    this.C0.name = "tutSkateDesktopPause";
    this.C0.parent = this;
    this.C0.setTransform(480, 270);
    this.D0 = new a.Roa;
    this.D0.name = "tutSkateMobilePause";
    this.D0.parent = this;
    this.D0.setTransform(480, 270);
    this.E0 = new a.Soa;
    this.E0.name = "tutSwimDesktopPause";
    this.E0.parent = this;
    this.E0.setTransform(480, 270);
    this.F0 = new a.Toa;
    this.F0.name = "tutSwimMobilePause";
    this.F0.parent = this;
    this.F0.setTransform(480, 270);
    this.y0 = new a.Koa;
    this.y0.name = "tutPingpongDesktopPause";
    this.y0.parent = this;
    this.y0.setTransform(480, 270);
    this.z0 = new a.Loa;
    this.z0.name = "tutPingpongMobilePause";
    this.z0.parent = this;
    this.z0.setTransform(480, 270);
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.kS}]}).to({state: [{t: this.instance}]}, 1).to({state: [{t: this.Jw}]}, 1).to({state: [{t: this.S_}]}, 1).to({state: [{t: this.M_}]}, 1).to({state: [{t: this.AY}]}, 1).to({state: [{t: this.t_}]}, 1).to({state: [{t: this.a0}]},
      1).to({state: [{t: this.s0}]}, 1).to({state: [{t: this.t0}]}, 1).to({state: [{t: this.u0}]}, 1).to({state: [{t: this.v0}]}, 1).to({state: [{t: this.w0}]}, 1).to({state: [{t: this.x0}]}, 1).to({state: [{t: this.A0}]}, 1).to({state: [{t: this.B0}, {t: this.text}]}, 1).to({state: [{t: this.C0}]}, 1).to({state: [{t: this.D0}]}, 1).to({state: [{t: this.E0}]}, 1).to({state: [{t: this.F0}]}, 1).to({state: [{t: this.y0}]}, 1).to({state: [{t: this.z0}]}, 1).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(477, 270, 513, 270.1);
  a.properties = {
    id: "1754741A4A3841C2AB73BD915D793487",
    width: 960,
    height: 540,
    fps: 31,
    color: "#666666",
    opacity: 1,
    aB: [{src: "images_menus/ArcheryIcon.png", id: "ArcheryIcon"}, {
      src: "images_menus/ArrowArt.png",
      id: "ArrowArt"
    }, {src: "images_menus/back.png", id: "back"}, {
      src: "images_menus/backfocus.png",
      id: "backfocus"
    }, {src: "images_menus/Bitmap129.png", id: "Bitmap129"}, {
      src: "images_menus/Bitmap129_1.png",
      id: "Bitmap129_1"
    }, {src: "images_menus/Bitmap131.png", id: "Bitmap131"}, {
      src: "images_menus/Bitmap131_1.png",
      id: "Bitmap131_1"
    }, {src: "images_menus/Bitmap132.png", id: "Bitmap132"},
      {src: "images_menus/Bitmap132_1.png", id: "Bitmap132_1"}, {
        src: "images_menus/Bitmap133.png",
        id: "Bitmap133"
      }, {src: "images_menus/Bitmap133_1.png", id: "Bitmap133_1"}, {
        src: "images_menus/Bitmap134.png",
        id: "Bitmap134"
      }, {src: "images_menus/Bitmap134_1.png", id: "Bitmap134_1"}, {
        src: "images_menus/Bitmap135.png",
        id: "Bitmap135"
      }, {src: "images_menus/Bitmap135_1.png", id: "Bitmap135_1"}, {
        src: "images_menus/Bitmap136.png",
        id: "Bitmap136"
      }, {src: "images_menus/Bitmap136_1.png", id: "Bitmap136_1"}, {
        src: "images_menus/Bitmap137.png",
        id: "Bitmap137"
      }, {src: "images_menus/Bitmap137_1.png", id: "Bitmap137_1"}, {
        src: "images_menus/Bitmap138.png",
        id: "Bitmap138"
      }, {src: "images_menus/Bitmap138_1.png", id: "Bitmap138_1"}, {
        src: "images_menus/Bitmap139.png",
        id: "Bitmap139"
      }, {src: "images_menus/Bitmap139_1.png", id: "Bitmap139_1"}, {
        src: "images_menus/Bitmap140.png",
        id: "Bitmap140"
      }, {src: "images_menus/Bitmap140_1.png", id: "Bitmap140_1"}, {
        src: "images_menus/Bitmap141.png",
        id: "Bitmap141"
      }, {src: "images_menus/Bitmap141_1.png", id: "Bitmap141_1"}, {
        src: "images_menus/Bitmap142.png",
        id: "Bitmap142"
      }, {src: "images_menus/Bitmap142_1.png", id: "Bitmap142_1"}, {
        src: "images_menus/Bitmap143.png",
        id: "Bitmap143"
      }, {src: "images_menus/Bitmap143_1.png", id: "Bitmap143_1"}, {
        src: "images_menus/Bitmap147.png",
        id: "Bitmap147"
      }, {src: "images_menus/Bitmap148.png", id: "Bitmap148"}, {
        src: "images_menus/Bitmap149.png",
        id: "Bitmap149"
      }, {src: "images_menus/Bitmap150.png", id: "Bitmap150"}, {
        src: "images_menus/Bitmap151.png",
        id: "Bitmap151"
      }, {src: "images_menus/Bitmap152.png", id: "Bitmap152"}, {
        src: "images_menus/Bitmap153.png",
        id: "Bitmap153"
      }, {src: "images_menus/Bitmap178.png", id: "Bitmap178"}, {
        src: "images_menus/Bitmap180.png",
        id: "Bitmap180"
      }, {src: "images_menus/Bitmap181.png", id: "Bitmap181"}, {
        src: "images_menus/Bitmap182.png",
        id: "Bitmap182"
      }, {src: "images_menus/Bitmap183.png", id: "Bitmap183"}, {
        src: "images_menus/Bitmap186.png",
        id: "Bitmap186"
      }, {src: "images_menus/Bitmap187.png", id: "Bitmap187"}, {
        src: "images_menus/Bitmap188.png",
        id: "Bitmap188"
      }, {src: "images_menus/Bitmap189.png", id: "Bitmap189"}, {src: "images_menus/Bitmap191.png", id: "Bitmap191"},
      {src: "images_menus/Bitmap192.png", id: "Bitmap192"}, {
        src: "images_menus/Bitmap196.png",
        id: "Bitmap196"
      }, {src: "images_menus/Bitmap197.png", id: "Bitmap197"}, {
        src: "images_menus/Bitmap198.png",
        id: "Bitmap198"
      }, {src: "images_menus/Bitmap235.png", id: "Bitmap235"}, {
        src: "images_menus/Bitmap236.png",
        id: "Bitmap236"
      }, {src: "images_menus/Bitmap237.png", id: "Bitmap237"}, {
        src: "images_menus/Bitmap238.png",
        id: "Bitmap238"
      }, {src: "images_menus/Bitmap239.png", id: "Bitmap239"}, {src: "images_menus/Bitmap240.png", id: "Bitmap240"}, {
        src: "images_menus/Bitmap241.png",
        id: "Bitmap241"
      }, {src: "images_menus/Bitmap242.png", id: "Bitmap242"}, {
        src: "images_menus/Bitmap243.png",
        id: "Bitmap243"
      }, {src: "images_menus/Bitmap244.png", id: "Bitmap244"}, {
        src: "images_menus/Bitmap245.png",
        id: "Bitmap245"
      }, {src: "images_menus/Bitmap247.png", id: "Bitmap247"}, {
        src: "images_menus/Bitmap248.png",
        id: "Bitmap248"
      }, {src: "images_menus/Bitmap249.png", id: "Bitmap249"}, {
        src: "images_menus/Bitmap250.png",
        id: "Bitmap250"
      }, {src: "images_menus/Bitmap251.png", id: "Bitmap251"}, {src: "images_menus/Bitmap252.png", id: "Bitmap252"},
      {src: "images_menus/Bitmap253.png", id: "Bitmap253"}, {
        src: "images_menus/Bitmap254.png",
        id: "Bitmap254"
      }, {src: "images_menus/Bitmap255.png", id: "Bitmap255"}, {
        src: "images_menus/Bitmap256.png",
        id: "Bitmap256"
      }, {src: "images_menus/Bitmap257.png", id: "Bitmap257"}, {
        src: "images_menus/Bitmap258.png",
        id: "Bitmap258"
      }, {src: "images_menus/Bitmap259.png", id: "Bitmap259"}, {
        src: "images_menus/Bitmap81.png",
        id: "Bitmap81"
      }, {src: "images_menus/BlackDotArt.png", id: "BlackDotArt"}, {
        src: "images_menus/ClimbIcon1.png",
        id: "ClimbIcon1"
      },
      {src: "images_menus/closeButton.png", id: "closeButton"}, {
        src: "images_menus/closeButtonFocus.png",
        id: "closeButtonFocus"
      }, {src: "images_menus/controllerFocus.png", id: "controllerFocus"}, {
        src: "images_menus/controllerIdle.png",
        id: "controllerIdle"
      }, {src: "images_menus/ControlsButtonBG.png", id: "ControlsButtonBG"}, {
        src: "images_menus/ControlsFocus.png",
        id: "ControlsFocus"
      }, {src: "images_menus/ControlsIdle.png", id: "ControlsIdle"}, {
        src: "images_menus/copyFocus.png",
        id: "copyFocus"
      }, {
        src: "images_menus/copyIdle.png",
        id: "copyIdle"
      }, {src: "images_menus/DangoStickArt.png", id: "DangoStickArt"}, {
        src: "images_menus/emailFocus.png",
        id: "emailFocus"
      }, {src: "images_menus/emailIdle.png", id: "emailIdle"}, {
        src: "images_menus/exitFocus.png",
        id: "exitFocus"
      }, {src: "images_menus/exitIdle.png", id: "exitIdle"}, {
        src: "images_menus/facebookFocus.png",
        id: "facebookFocus"
      }, {src: "images_menus/facebookIdle.png", id: "facebookIdle"}, {
        src: "images_menus/GreenDangoArt1.png",
        id: "GreenDangoArt1"
      }, {src: "images_menus/GreenDangoArt2.png", id: "GreenDangoArt2"},
      {src: "images_menus/GreenDangoArt3.png", id: "GreenDangoArt3"}, {
        src: "images_menus/HighlightDotArt.png",
        id: "HighlightDotArt"
      }, {src: "images_menus/inariArt.png", id: "inariArt"}, {
        src: "images_menus/inariArt_1.png",
        id: "inariArt_1"
      }, {src: "images_menus/InariArt2.png", id: "InariArt2"}, {
        src: "images_menus/indicatorAction.png",
        id: "indicatorAction"
      }, {
        src: "images_menus/indicatorActionMobile.png",
        id: "indicatorActionMobile"
      }, {src: "images_menus/indicatorActionMobilePressed.png", id: "indicatorActionMobilePressed"}, {
        src: "images_menus/indicatorActionPressed.png",
        id: "indicatorActionPressed"
      }, {src: "images_menus/indicatorDown.png", id: "indicatorDown"}, {
        src: "images_menus/indicatorJoystick.png",
        id: "indicatorJoystick"
      }, {
        src: "images_menus/indicatorJoystickBase.png",
        id: "indicatorJoystickBase"
      }, {src: "images_menus/indicatorLeft.png", id: "indicatorLeft"}, {
        src: "images_menus/indicatorLeft_1.png",
        id: "indicatorLeft_1"
      }, {src: "images_menus/indicatorRight.png", id: "indicatorRight"}, {
        src: "images_menus/indicatorRight_1.png",
        id: "indicatorRight_1"
      }, {
        src: "images_menus/indicatorUp.png",
        id: "indicatorUp"
      }, {src: "images_menus/KappaArt.png", id: "KappaArt"}, {
        src: "images_menus/KappaArt_1.png",
        id: "KappaArt_1"
      }, {src: "images_menus/KappaArt2.png", id: "KappaArt2"}, {
        src: "images_menus/KarasuArt.png",
        id: "KarasuArt"
      }, {src: "images_menus/KarasuArt_1.png", id: "KarasuArt_1"}, {
        src: "images_menus/KarasuArt2.png",
        id: "KarasuArt2"
      }, {src: "images_menus/keyboardFocus.png", id: "keyboardFocus"}, {
        src: "images_menus/keyboardIdle.png",
        id: "keyboardIdle"
      }, {src: "images_menus/Koma1Art.png", id: "Koma1Art"}, {
        src: "images_menus/Koma2Art.png",
        id: "Koma2Art"
      }, {src: "images_menus/LeaderFocus.png", id: "LeaderFocus"}, {
        src: "images_menus/LeaderIdle.png",
        id: "LeaderIdle"
      }, {src: "images_menus/LuckyIdleS.png", id: "LuckyIdleS"}, {
        src: "images_menus/LuckyIdleSArt2.png",
        id: "LuckyIdleSArt2"
      }, {src: "images_menus/LuckyIdleSArt3.png", id: "LuckyIdleSArt3"}, {
        src: "images_menus/LuckyLocationIconArt.png",
        id: "LuckyLocationIconArt"
      }, {src: "images_menus/MarathonIcon.png", id: "MarathonIcon"}, {src: "images_menus/menuBG.png", id: "menuBG"}, {
        src: "images_menus/menuBGMapBG.png",
        id: "menuBGMapBG"
      }, {src: "images_menus/NoStarsArt.png", id: "NoStarsArt"}, {
        src: "images_menus/OneStarArt.png",
        id: "OneStarArt"
      }, {src: "images_menus/PinkDangoArt1.png", id: "PinkDangoArt1"}, {
        src: "images_menus/PinkDangoArt2.png",
        id: "PinkDangoArt2"
      }, {src: "images_menus/PinkDangoArt3.png", id: "PinkDangoArt3"}, {
        src: "images_menus/PongIcon1.png",
        id: "PongIcon1"
      }, {src: "images_menus/replayFocus.png", id: "replayFocus"}, {
        src: "images_menus/replayIdle.png",
        id: "replayIdle"
      }, {src: "images_menus/RugbyIcon11.png", id: "RugbyIcon11"},
      {src: "images_menus/ScrollRotateArt0.png", id: "ScrollRotateArt0"}, {
        src: "images_menus/ScrollRotateArt1.png",
        id: "ScrollRotateArt1"
      }, {src: "images_menus/ScrollRotateArt2.png", id: "ScrollRotateArt2"}, {
        src: "images_menus/ScrollRotateArt3.png",
        id: "ScrollRotateArt3"
      }, {src: "images_menus/ScrollRotateArt4.png", id: "ScrollRotateArt4"}, {
        src: "images_menus/ScrollRotateArt5.png",
        id: "ScrollRotateArt5"
      }, {src: "images_menus/ScrollRotateArt6.png", id: "ScrollRotateArt6"}, {
        src: "images_menus/ScrollRotateArt7.png",
        id: "ScrollRotateArt7"
      },
      {src: "images_menus/searchFocus.png", id: "searchFocus"}, {
        src: "images_menus/searchIdle.png",
        id: "searchIdle"
      }, {
        src: "images_menus/SelectedIconCircleArt.png",
        id: "SelectedIconCircleArt"
      }, {src: "images_menus/SettingsFocus.png", id: "SettingsFocus"}, {
        src: "images_menus/SettingsIdle.png",
        id: "SettingsIdle"
      }, {src: "images_menus/ShareFocus.png", id: "ShareFocus"}, {
        src: "images_menus/ShareIdle.png",
        id: "ShareIdle"
      }, {src: "images_menus/ShareWindow.png", id: "ShareWindow"}, {
        src: "images_menus/SkateIcon1.png",
        id: "SkateIcon1"
      },
      {src: "images_menus/startBG1.png", id: "startBG1"}, {
        src: "images_menus/StatsMenuBGArt.png",
        id: "StatsMenuBGArt"
      }, {src: "images_menus/SwimIcon1.png", id: "SwimIcon1"}, {
        src: "images_menus/ThreeStarArt.png",
        id: "ThreeStarArt"
      }, {src: "images_menus/tutBG.png", id: "tutBG"}, {
        src: "images_menus/twitterFocus.png",
        id: "twitterFocus"
      }, {src: "images_menus/twitterIdle.png", id: "twitterIdle"}, {
        src: "images_menus/TwoStarsArt.png",
        id: "TwoStarsArt"
      }, {src: "images_menus/UshiArt.png", id: "UshiArt"}, {src: "images_menus/UshiArt_1.png", id: "UshiArt_1"},
      {src: "images_menus/UshiArt2.png", id: "UshiArt2"}, {
        src: "images_menus/valueBG.png",
        id: "valueBG"
      }, {
        src: "images_menus/WhiteCircleFrameArt11.png",
        id: "WhiteCircleFrameArt11"
      }, {src: "images_menus/YellowDangoArt1.png", id: "YellowDangoArt1"}, {
        src: "images_menus/YellowDangoArt2.png",
        id: "YellowDangoArt2"
      }, {src: "images_menus/YellowDangoArt3.png", id: "YellowDangoArt3"}],
    tB: []
  };
  (a.Stage = function (d) {
    createjs.Stage.call(this, d)
  }).prototype = c = new createjs.Stage;
  c.Ca = function (d) {
    this.tickEnabled = d
  };
  c.play = function () {
    this.tickEnabled =
      ! 0;
    this.getChildAt(0).gotoAndPlay(this.vp())
  };
  c.stop = function (d) {
    d && this.seek(d);
    this.tickEnabled = ! 1
  };
  c.seek = function (d) {
    this.tickEnabled = ! 0;
    this.getChildAt(0).gotoAndStop(a.properties.fps * d / 1E3)
  };
  c.getDuration = function () {
    return this.getChildAt(0).totalFrames / a.properties.fps * 1E3
  };
  c.vp = function () {
    return this.getChildAt(0).currentFrame / a.properties.fps * 1E3
  };
  g.Zd = g.Zd || [];
  g.Ve || (g.Ve = []);
  g.oB = function (d) {
    g.Ve.push(d);
    if (0 < g.Zd.length) for (var e = 0; e < g.Zd.length; ++e) d(g.Zd[e])
  };
  g.Kf = g.Kf || {};
  g.Kf["1754741A4A3841C2AB73BD915D793487"] =
    {
      getStage: function () {
        return (void 0).getStage()
      }, getLibrary: function () {
        return a
      }, pB: function () {
        return n
      }, Sx: function () {
        return h
      }
    };
  g.Px = function (d) {
    g.Zd.push(d);
    for (var e = 0; e < g.Ve.length; e++) g.Ve[e](d)
  };
  g.kp = function (d) {
    return g.Kf[d]
  };
  g.rB = function (d, e, f, v, u) {
    function E() {
      var F = a.properties.width, H = a.properties.height, I = window.innerWidth, J = window.innerHeight,
        U = window.devicePixelRatio || 1, O = I / F, R = J / H, w = 1;
      if (d) if ("width" == e && P == I || "height" == e && K == J) w = T; else if (f) 1 == v ? w = Math.min(O, R) : 2 == v && (w = Math.max(O,
        R)); else if (I < F || J < H) w = Math.min(O, R);
      u[0].width = F * U * w;
      u[0].height = H * U * w;
      u.forEach(function (W) {
        W.style.width = F * w + "px";
        W.style.height = H * w + "px"
      });
      P = I;
      K = J;
      T = w;
      (void 0).update()
    }

    var P, K, T = 1;
    window.addEventListener("resize", E);
    E()
  }
})(createjs = createjs || {}, Wk = Wk || {});
var Xk = Sk;
(function (b, g) {
  function m() {
    var d = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
    d.gotoAndStop(this.currentFrame);
    d.paused = this.paused;
    d.framerate = this.framerate;
    return d
  }

  function k(d, e, f) {
    d = b.extend(d, b.MovieClip);
    d.clone = m;
    d.j = e;
    d.frameBounds = f;
    return d
  }

  var c, a = {}, n = {}, h = {};
  a.uB = [];
  (a.pV = function () {
    this.initialize(h.CloseIcon)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0, 0, 9, 7);
  (a.cba = function () {
    this.initialize(h.videoframe)
  }).prototype = c = new b.Bitmap;
  c.j = new b.Rectangle(0,
    0, 320, 180);
  (a.qV = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.instance = new a.pV;
    this.instance.parent = this;
    this.timeline.addTween(b.Tween.get(this.instance).wait(1))
  }).prototype = k(a.qV, new b.Rectangle(0, 0, 9, 7), null);
  (a.Si = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.shape = new b.Shape;
    this.shape.graphics.f("#ff0000").s().p("AwjH+IAAv7MAhHAAAIAAP7g");
    this.timeline.addTween(b.Tween.get(this.shape).wait(1))
  }).prototype = k(a.Si, new b.Rectangle(-106, -51, 212, 102), null);
  (a.HK = function (d, e, f) {
    this.initialize(d,
      e, f, {idle: 0, focus: 1, down: 2});
    this.u = function () {
      this.T = {button: {eventId: "close"}, keyboardNav: {order: 1}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(4));
    this.instance = new a.pV;
    this.instance.parent = this;
    this.instance.setTransform(-4, -4);
    this.g = new a.qV;
    this.g.parent = this;
    this.g.setTransform(0, -.5, 1, 1, 0, 0, 0, 4, 3.5);
    this.g.alpha = .5;
    this.timeline.addTween(b.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.g}]}, 1).to({state: [{t: this.instance}]}, 1).to({state: []},
      1).wait(1));
    this.hitArea = new a.Si;
    this.hitArea.name = "hitArea";
    this.hitArea.parent = this;
    this.hitArea.setTransform(0, -.5, .1183, .1866, 0, 0, 0, .4, 0);
    this.hitArea._off = ! 0;
    this.hitArea.visible = ! 1;
    this.timeline.addTween(b.Tween.get(this.hitArea).wait(3).to({_off: ! 1}, 0).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(-12.6, -10, 25.1, 19);
  (a.hY = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
      this.T = {menu: {}};
      this.stop()
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.instance =
      new a.HK;
    this.instance.parent = this;
    this.instance.setTransform(7.25, 7.95, 1, 1, 0, 0, 0, 0, -.5);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1));
    this.g = new a.cba;
    this.g.parent = this;
    this.g.setTransform(-300, -161);
    this.timeline.addTween(b.Tween.get(this.g).wait(1))
  }).prototype = k(a.hY, new b.Rectangle(-300, -161, 320, 180), null);
  (a.video = function (d, e, f) {
    this.initialize(d, e, f, {});
    this.u = function () {
    };
    this.timeline.addTween(b.Tween.get(this).call(this.u).wait(1));
    this.instance = new a.hY;
    this.instance.parent =
      this;
    this.instance.setTransform(901.9, 485.7, 3, 3, 0, 0, 0, .5, .5);
    this.timeline.addTween(b.Tween.get(this.instance).wait(1))
  }).prototype = c = new b.MovieClip;
  c.j = new b.Rectangle(480.4, 271.2, 480, 270.00000000000006);
  a.properties = {
    id: "462CEA9764EE4C8D86AB0BDFEAEB1BF9",
    width: 960,
    height: 540,
    fps: 30,
    color: "#999999",
    opacity: 1,
    aB: [{src: "images_video/CloseIcon.png", id: "CloseIcon"}, {src: "images_video/videoframe.png", id: "videoframe"}],
    tB: []
  };
  (a.Stage = function (d) {
    createjs.Stage.call(this, d)
  }).prototype = c = new createjs.Stage;
  c.Ca = function (d) {
    this.tickEnabled = d
  };
  c.play = function () {
    this.tickEnabled = ! 0;
    this.getChildAt(0).gotoAndPlay(this.vp())
  };
  c.stop = function (d) {
    d && this.seek(d);
    this.tickEnabled = ! 1
  };
  c.seek = function (d) {
    this.tickEnabled = ! 0;
    this.getChildAt(0).gotoAndStop(a.properties.fps * d / 1E3)
  };
  c.getDuration = function () {
    return this.getChildAt(0).totalFrames / a.properties.fps * 1E3
  };
  c.vp = function () {
    return this.getChildAt(0).currentFrame / a.properties.fps * 1E3
  };
  g.Zd = g.Zd || [];
  g.Ve || (g.Ve = []);
  g.oB = function (d) {
    g.Ve.push(d);
    if (0 < g.Zd.length) for (var e =
      0; e < g.Zd.length; ++e) d(g.Zd[e])
  };
  g.Kf = g.Kf || {};
  g.Kf["462CEA9764EE4C8D86AB0BDFEAEB1BF9"] = {
    getStage: function () {
      return (void 0).getStage()
    }, getLibrary: function () {
      return a
    }, pB: function () {
      return n
    }, Sx: function () {
      return h
    }
  };
  g.Px = function (d) {
    g.Zd.push(d);
    for (var e = 0; e < g.Ve.length; e++) g.Ve[e](d)
  };
  g.kp = function (d) {
    return g.Kf[d]
  };
  g.rB = function (d, e, f, v, u) {
    function E() {
      var F = a.properties.width, H = a.properties.height, I = window.innerWidth, J = window.innerHeight,
        U = window.devicePixelRatio || 1, O = I / F, R = J / H, w = 1;
      if (d) if ("width" ==
        e && P == I || "height" == e && K == J) w = T; else if (f) 1 == v ? w = Math.min(O, R) : 2 == v && (w = Math.max(O, R)); else if (I < F || J < H) w = Math.min(O, R);
      u[0].width = F * U * w;
      u[0].height = H * U * w;
      u.forEach(function (W) {
        W.style.width = F * w + "px";
        W.style.height = H * w + "px"
      });
      P = I;
      K = J;
      T = w;
      (void 0).update()
    }

    var P, K, T = 1;
    window.addEventListener("resize", E);
    E()
  }
})(createjs = createjs || {}, Xk = Xk || {});
var Yk = new Map, Zk = new Map, $k = function (b, g, m, k) {
  this.Spa = b;
  this.next = g;
  this.text = m;
  this.ha = L(b.V + b.nodeName + "opt" + k, m || "") || null
}, al = function (b, g, m, k, c) {
  this.V = b;
  this.nodeName = g;
  this.text = m;
  this.ha = L(b + g, m);
  this.U = [];
  for (b = 0; b < k.length; b++) this.U.push(new $k(this, k[b].next, k[b].text, b));
  this.tags = c
}, bl = function (b) {
  return 1 == b.U.length && ! b.U[0].text
}, cl = function () {
  for (var b = p(Ok), g = b.next(); ! g.done; g = b.next()) a:{
    var m = g.value;
    if (m) {
      g = m[0];
      m = p(m);
      for (var k = m.next(); ! k.done; k = m.next()) {
        var c = k.value;
        k = c.V + c.nodeName;
        if (Yk.has(k)) break a;
        c = new al(c.V, c.nodeName, c.text, c.U, c.tags);
        Yk.set(k, c)
      }
      Zk.has(g.V) || Zk.set(g.V, []);
      Zk.get(g.V).push(g.nodeName)
    }
  }
};
var S = function (b) {
  this.ha = b
};
l = S.prototype;
l.enable = function () {
};
l.disable = function () {
};
l.gu = function () {
};
l.fu = function () {
};
l.gqa = function () {
};
l.P_ = function () {
};
var dl = function () {
  if (pf()) throw"";
  return qf() || nf()
}, el = function () {
  if (pf()) throw"";
  return of() || lf() || kf() && ! ff()
}, fl = function () {
  if (pf()) throw"";
  return gf() ? ! 1 : of() && ! (jf() || hf() && ! gf()) || lf() && kf()
}, gl = function () {
  return pf() ? "1" == df.ha.get("ccta") : of() && ! nf() || lf() && kf() && ! qf()
}, hl = function () {
  var b = ! kf() && qf() && 600 >= window.innerHeight;
  return qf() || b
};
var il = function (b) {
  Qa.call(this, b);
  this.ha = new Image
};
q(il, Qa);
il.prototype.Bb = function () {
  var b = this;
  if (this.ha.src) return Promise.resolve(this.ha);
  var g, m = new Promise(function (c) {
    return g = c
  }), k = function () {
    Ra(b);
    g(b.ha)
  };
  this.ha.crossOrigin = "Anonymous";
  this.ha.decode ? (this.ha.src = this.oc, this.ha.decode().then(k, function () {
    b.ha.removeAttribute("crossOrigin");
    b.ha.src = b.oc;
    b.ha.decode().then(k, function (c) {
      console.error(c);
      k()
    })
  })) : (this.ha.onload = k, this.ha.onerror = function () {
    b.ha.removeAttribute("crossOrigin");
    b.ha.removeAttribute("onerror");
    b.ha.src = b.ha.src
  },
    this.ha.src = this.oc);
  (this.ha.complete || "complete" == this.ha.readyState) && k();
  return m
};
var jl = function (b, g, m) {
  m = void 0 === m ? ! 1 : m;
  this.xY = [];
  this.ha = [];
  if (m) {
    var k = document.createElement("canvas");
    k.width = 1;
    k.height = 1;
    k = -1 < k.toDataURL("image/webp").indexOf("image/webp")
  } else k = ! 1;
  g = p(g);
  for (var c = g.next(); ! c.done; c = g.next()) {
    c = c.value;
    var a = b + c.filename;
    m && k && (a = a.replace(/(\.jpg|\.png)/, ".webp"));
    a = new il(a);
    c = c.size;
    this.xY.push(a);
    this.ha.push(c)
  }
}, Rk = function (b) {
  return "number" === typeof b ? b : b[0]
}, kl = function (b, g) {
  var m = b.xY[Rk(g)];
  return (new Promise(function (k) {
    m.Ca ? k() : m.kb.push(k);
    m.Bb()
  })).then(function () {
  })
};
var ml = function () {
  jl.call(this, window.root, ll, ! 1)
};
q(ml, jl);
Ga(ml);
var ll = [{filename: "preload-sprite.png", size: [320, 197]}, {
    filename: "shared-sprite.png",
    size: [728, 844]
  }, {filename: "cutscene-sprite.png", size: [704, 593]}, {
    filename: "overworld-sprite.png",
    size: [3243, 3455]
  }, {filename: "archery-sprite.png", size: [499, 233]}, {
    filename: "climbing-sprite.png",
    size: [892, 1007]
  }, {filename: "marathon-sprite.png", size: [601, 374]}, {
    filename: "pingpong-sprite.png",
    size: [403, 490]
  }, {filename: "rugby-sprite.png", size: [459, 641]}, {filename: "skate-sprite.png", size: [803, 649]}, {
    filename: "swim-sprite.png",
    size: [746, 686]
  }], nl = [1, 724, 0, 3, 5], ol = [3, 3108, 3359, 16, 26], pl = [3, 441, 3360, 16, 26], ql = [3, 941, 3365, 16, 16],
  rl = [3, 3186, 56, 54, 62], sl = [3, 1996, 3097, 18, 19], tl = [3, 3137, 478, 103, 38], ul = [3, 2620, 1406, 103, 38],
  vl = [3, 2620, 1447, 103, 38], wl = [3, 1389, 1707, 103, 38], xl = [3, 2058, 3206, 48, 48],
  yl = [3, 1199, 3213, 48, 48], zl = [3, 1569, 3365, 16, 16], Al = [3, 2139, 3365, 16, 16],
  Bl = [3, 2158, 3365, 16, 16], Cl = [3, 1346, 721, 14, 7], Dl = [3, 3229, 1576, 13, 7], El = [3, 736, 293, 14, 6],
  Fl = [3, 2499, 1787, 14, 9], Gl = [3, 2177, 3366, 16, 16], Hl = [3, 714, 293, 19, 5], Il = [3, 2469, 874, 19,
    7], Jl = [3, 2278, 1315, 17, 7], Kl = [3, 2619, 511, 19, 8], Ll = [3, 988, 3362, 16, 22],
  Ml = [3, 2654, 3362, 16, 22], Nl = [3, 2726, 3356, 18, 20], Ol = [3, 1085, 3340, 20, 21],
  Pl = [3, 1098, 3169, 21, 21], Ql = [3, 2849, 3356, 18, 19], Rl = [3, 171, 3341, 20, 21], Sl = [3, 2726, 3332, 21, 21],
  Tl = [3, 811, 3331, 17, 21], Ul = [3, 1080, 3364, 16, 20], Vl = [3, 1223, 3364, 16, 20], Wl = [3, 3230, 2458, 12, 20],
  Xl = [3, 784, 3379, 14, 21], Yl = [3, 3227, 3341, 15, 20], Zl = [3, 1099, 3377, 15, 20], $l = [3, 1374, 3377, 15, 20],
  am = [3, 2055, 3377, 15, 20], bm = [3, 76, 3378, 15, 19], cm = [3, 386, 3363, 16, 21], dm = [3, 3230, 2481, 12, 20],
  em =
    [3, 2747, 3356, 18, 20], fm = [3, 194, 3341, 20, 21], gm = [3, 1254, 3333, 21, 21], hm = [3, 783, 3357, 18, 19],
  im = [3, 217, 3341, 20, 21], jm = [3, 2328, 3335, 21, 21], km = [3, 3230, 2504, 12, 17], lm = [3, 1599, 2536, 12, 17],
  mm = [3, 1301, 3213, 12, 17], nm = [3, 767, 3379, 14, 22], om = [3, 801, 3379, 14, 21], pm = [3, 804, 3357, 18, 19],
  qm = [3, 1840, 3357, 18, 18], rm = [3, 1902, 3346, 18, 30], sm = [3, 1923, 3346, 18, 30], tm = [3, 344, 3336, 20, 25],
  um = [3, 1446, 3337, 20, 25], vm = [3, 304, 2727, 15, 21], wm = [3, 1421, 3364, 16, 20], xm = [3, 990, 3169, 72, 72],
  ym = [3, 506, 294, 12, 3], zm = [3, 1979, 3363, 16, 20], Am = [3, 2096,
    3358, 17, 18], Bm = [3, 1007, 3365, 16, 16], Cm = [3, 3195, 3364, 16, 17], Dm = [3, 1061, 3364, 16, 20],
  Em = [3, 2969, 3331, 20, 27], Fm = [3, 2619, 424, 22, 26], Gm = [3, 3214, 3364, 16, 17], Hm = [3, 2558, 2741, 18, 19],
  Im = [3, 253, 3293, 43, 42], Jm = [3, 3196, 2646, 45, 41], Km = [3, 1250, 3213, 48, 48], Lm = [3, 2750, 3332, 16, 21],
  Mm = [3, 726, 3352, 18, 22], Nm = [3, 2427, 3353, 18, 22], Om = [3, 1944, 3377, 15, 20], Pm = [3, 2481, 3217, 48, 48],
  Qm = [3, 745, 1301, 17, 9], Rm = [3, 747, 3358, 17, 24], Sm = [3, 1572, 2804, 23, 23], Tm = [3, 2799, 3358, 17, 17],
  Um = [3, 1278, 3333, 17, 21], Vm = [3, 2196, 3366, 16, 16], Wm = [3, 2215, 3365,
    16, 16], Xm = [3, 2346, 3365, 16, 16], Ym = [3, 2630, 3365, 16, 16], Zm = [3, 934, 2835, 20, 19],
  $m = [3, 2177, 3009, 90, 101], an = [3, 1916, 3379, 14, 19], bn = [3, 2096, 3379, 14, 19],
  cn = [3, 2113, 3379, 14, 19], dn = [3, 2394, 3379, 14, 19], en = [3, 547, 294, 3, 3], fn = [3, 541, 294, 3, 5],
  gn = [3, 586, 3379, 14, 28], hn = [3, 725, 3204, 59, 66], jn = [3, 1756, 3330, 25, 26], kn = [3, 1784, 3330, 25, 26],
  ln = [3, 1810, 3296, 21, 30], mn = [3, 2630, 3332, 21, 30], nn = [3, 2258, 3339, 20, 22],
  on = [3, 2281, 3339, 20, 22], pn = [3, 1469, 3337, 20, 24], qn = [3, 245, 3338, 20, 24], rn = [3, 3242, 159, 1, 1],
  sn = [3, 2491, 874, 19, 7], tn = [3,
    2298, 1315, 17, 7], un = [3, 461, 570, 19, 8], vn = [3, 1324, 721, 19, 5], wn = [3, 1688, 731, 67, 20], V = new Map;
V.set("animate_exports/images_loading/ScrollRotateArt0.png", [0, 0, 183, 14, 14]);
V.set("animate_exports/images_loading/ScrollRotateArt1.png", [0, 48, 183, 10, 14]);
V.set("animate_exports/images_loading/ScrollRotateArt2.png", [0, 109, 183, 6, 14]);
V.set("animate_exports/images_loading/ScrollRotateArt3.png", [0, 61, 183, 10, 14]);
V.set("animate_exports/images_loading/ScrollRotateArt4.png", [0, 17, 183, 14, 14]);
V.set("animate_exports/images_loading/ScrollRotateArt5.png", [0, 74, 183, 10, 14]);
V.set("animate_exports/images_loading/ScrollRotateArt6.png", [0, 99, 183, 7, 14]);
V.set("animate_exports/images_loading/ScrollRotateArt7.png", [0, 34, 183, 11, 14]);
V.set("animate_exports/images_video/CloseIcon.png", [0, 87, 183, 9, 7]);
V.set("animate_exports/images_video/videoframe.png", [0, 0, 0, 320, 180]);
V.set("animate_exports/images_dialog/ArrowArt.png", nl);
V.set("animate_exports/images_dialog/ArrowCollectorNeutralArt.png", [1, 447, 359, 56, 68]);
V.set("animate_exports/images_dialog/Baker_Portrait_001.png", [1, 160, 550, 48, 59]);
V.set("animate_exports/images_dialog/Baker_Retired_Portait_001.png", [1, 331, 460, 50, 66]);
V.set("animate_exports/images_dialog/BigCatNeutralArt.png", [1, 554, 701, 44, 44]);
V.set("animate_exports/images_dialog/Bitmap12311.png", [1, 546, 460, 12, 8]);
V.set("animate_exports/images_dialog/BlueOniNeutralArt.png", [1, 422, 580, 46, 54]);
V.set("animate_exports/images_dialog/CoachNeutralArt.png", [1, 667, 330, 58, 52]);
V.set("animate_exports/images_dialog/ConviniNeutralArt.png", [1, 471, 460, 50, 63]);
V.set("animate_exports/images_dialog/DialogueFillArt1.png", [1, 311, 171, 228, 68]);
V.set("animate_exports/images_dialog/InariNeutralArt.png", [1, 266, 506, 49, 52]);
V.set("animate_exports/images_dialog/InvisibleOctopusNeutral.png", [1, 277, 458, 51, 45]);
V.set("animate_exports/images_dialog/KappaNeutralArt.png", [1, 301, 411, 54, 44]);
V.set("animate_exports/images_dialog/KarasuNeutralArt.png", [1, 415, 430, 53, 49]);
V.set("animate_exports/images_dialog/Koma1NeutralArt.png", [1, 563, 432, 53, 47]);
V.set("animate_exports/images_dialog/Koma2NeutralArt.png", [1, 223, 449, 51, 49]);
V.set("animate_exports/images_dialog/LittleMonkeyNeutral.png", [1, 506, 360, 56, 50]);
V.set("animate_exports/images_dialog/LuckyAnnoyedArt11.png", [1, 101, 611, 44, 51]);
V.set("animate_exports/images_dialog/LuckyGrinArt.png", [1, 148, 612, 44, 51]);
V.set("animate_exports/images_dialog/LuckyHappyArt.png", [1, 413, 637, 44, 51]);
V.set("animate_exports/images_dialog/LuckyHideArt.png", [1, 601, 711, 44, 44]);
V.set("animate_exports/images_dialog/LuckyNeutralArt11111.png", [1, 305, 639, 44, 51]);
V.set("animate_exports/images_dialog/LuckyRawrArt.png", [1, 460, 639, 44, 51]);
V.set("animate_exports/images_dialog/LuckyShockedArt.png", [1, 352, 645, 44, 51]);
V.set("animate_exports/images_dialog/LuckySmileSweatArt.png", [1, 47, 646, 44, 51]);
V.set("animate_exports/images_dialog/LuckyWideEyedSweatArt.png", [1, 567, 647, 44, 51]);
V.set("animate_exports/images_dialog/LuckyWorriedArt.png", [1, 614, 657, 44, 51]);
V.set("animate_exports/images_dialog/MomoNeutralArt.png", [1, 289, 693, 44, 46]);
V.set("animate_exports/images_dialog/MonkeyNeutralArt.png", [1, 169, 448, 51, 51]);
V.set("animate_exports/images_dialog/NoodleCookArt.png", [1, 680, 551, 47, 48]);
V.set("animate_exports/images_dialog/OniBakerArt.png", [1, 524, 482, 50, 51]);
V.set("animate_exports/images_dialog/OniPortraitArt.png", [1, 437, 526, 49, 51]);
V.set("animate_exports/images_dialog/OverworldMenuButtonBrown.png", [1, 565, 360, 22, 22]);
V.set("animate_exports/images_dialog/OwlNeutralArt.png", [1, 0, 342, 61, 46]);
V.set("animate_exports/images_dialog/PortraitBlackWolfie.png", [1, 446, 693, 44, 46]);
V.set("animate_exports/images_dialog/PortraitCrab.png", [1, 565, 385, 56, 44]);
V.set("animate_exports/images_dialog/PortraitDustyScroll.png", [1, 648, 711, 44, 44]);
V.set("animate_exports/images_dialog/PortraitFroggy.png", [1, 52, 552, 48, 44]);
V.set("animate_exports/images_dialog/PortraitKijiDad1.png", [1, 311, 311, 65, 49]);
V.set("animate_exports/images_dialog/PortraitKijiKid.png", [1, 447, 311, 65, 45]);
V.set("animate_exports/images_dialog/PortraitMomoDog.png", [1, 661, 657, 44, 51]);
V.set("animate_exports/images_dialog/PortraitMomoMonkey.png", [1, 52, 599, 46, 44]);
V.set("animate_exports/images_dialog/PortraitMomobird.png", [1, 195, 658, 44, 51]);
V.set("animate_exports/images_dialog/PortraitMomodadneutral.png", [1, 0, 659, 44, 50]);
V.set("animate_exports/images_dialog/PortraitMomomomneutral.png", [1, 0, 712, 44, 44]);
V.set("animate_exports/images_dialog/PortraitMomotaro.png", [1, 213, 549, 49, 49]);
V.set("animate_exports/images_dialog/PortraitOtohimeNeutral.png", [1, 641, 602, 44, 52]);
V.set("animate_exports/images_dialog/PortraitRacerAmad.png", [1, 115, 445, 51, 53]);
V.set("animate_exports/images_dialog/PortraitRacerAneutral.png", [1, 0, 447, 51, 53]);
V.set("animate_exports/images_dialog/PortraitSupermountaingirl.png", [1, 54, 449, 51, 48]);
V.set("animate_exports/images_dialog/PortraitWolfie.png", [1, 471, 589, 46, 47]);
V.set("animate_exports/images_dialog/Portraitbirthdaykidhappy.png", [1, 624, 385, 55, 53]);
V.set("animate_exports/images_dialog/Portraitbirthdaykidsad.png", [1, 0, 391, 55, 53]);
V.set("animate_exports/images_dialog/Portraitbirthdaymom.png", [1, 592, 600, 46, 44]);
V.set("animate_exports/images_dialog/Portraitblueleader.png", [1, 379, 360, 56, 50]);
V.set("animate_exports/images_dialog/Portraitgreenleader.png", [1, 306, 363, 56, 45]);
V.set("animate_exports/images_dialog/Portraitkijimunastatue1.png", [1, 379, 311, 65, 46]);
V.set("animate_exports/images_dialog/Portraitotohimestatue.png", [1, 520, 606, 44, 52]);
V.set("animate_exports/images_dialog/Portraitowlstatue.png", [1, 650, 281, 72, 46]);
V.set("animate_exports/images_dialog/PortraitracerBmad.png", [1, 318, 529, 49, 50]);
V.set("animate_exports/images_dialog/PortraitracerBneutral.png", [1, 489, 536, 49, 50]);
V.set("animate_exports/images_dialog/Portraitredleader.png", [1, 399, 691, 44, 47]);
V.set("animate_exports/images_dialog/Portraitrugbystatue.png", [1, 186, 392, 55, 53]);
V.set("animate_exports/images_dialog/Portraittanukistatue.png", [1, 213, 502, 50, 44]);
V.set("animate_exports/images_dialog/Portraittengustatue.png", [1, 186, 342, 57, 47]);
V.set("animate_exports/images_dialog/Portraityoichistatue.png", [1, 358, 413, 54, 44]);
V.set("animate_exports/images_dialog/RainBoyNeutralArt.png", [1, 0, 601, 44, 55]);
V.set("animate_exports/images_dialog/RedOniNeutralArt.png", [1, 577, 503, 49, 53]);
V.set("animate_exports/images_dialog/SleepyCatNeutral.png", [1, 336, 699, 44, 46]);
V.set("animate_exports/images_dialog/SnowOwlAvatarArt.png", [1, 188, 712, 44, 44]);
V.set("animate_exports/images_dialog/TanookiNeutralArt.png", [1, 0, 503, 50, 44]);
V.set("animate_exports/images_dialog/TenguNeutralArt.png", [1, 246, 342, 57, 47]);
V.set("animate_exports/images_dialog/Town_people_bat_portrait.png", [1, 315, 582, 46, 54]);
V.set("animate_exports/images_dialog/Town_people_fish_handicap_portrait.png", [1, 629, 551, 48, 46]);
V.set("animate_exports/images_dialog/Town_people_fish_portrait.png", [1, 160, 502, 50, 45]);
V.set("animate_exports/images_dialog/Town_people_grandpa_portrait.png", [1, 107, 551, 48, 57]);
V.set("animate_exports/images_dialog/Town_people_hare_portrait.png", [1, 265, 561, 47, 44]);
V.set("animate_exports/images_dialog/Town_people_kid_portrait.png", [1, 244, 392, 54, 54]);
V.set("animate_exports/images_dialog/Town_people_nova_portrait.png", [1, 674, 441, 52, 54]);
V.set("animate_exports/images_dialog/Town_people_pango_portrait.png", [1, 541, 559, 48, 44]);
V.set("animate_exports/images_dialog/Town_people_seahorse_portrait.png", [1, 54, 500, 50, 49]);
V.set("animate_exports/images_dialog/Town_people_shiba_portrait.png", [1, 364, 595, 46, 47]);
V.set("animate_exports/images_dialog/TrainWorkerArt.png", [1, 674, 498, 50, 50]);
V.set("animate_exports/images_dialog/TraineeNoodlesArt1.png", [1, 64, 342, 58, 52]);
V.set("animate_exports/images_dialog/TraineeRunArt1.png", [1, 602, 330, 62, 52]);
V.set("animate_exports/images_dialog/TrophyMasterArt.png", [1, 370, 542, 49, 50]);
V.set("animate_exports/images_dialog/UrashimaANeutralrt1.png", [1, 258, 608, 44, 52]);
V.set("animate_exports/images_dialog/UrashimaMomNeutral.png", [1, 94, 665, 44, 48]);
V.set("animate_exports/images_dialog/UshiNeutralArt1.png", [1, 125, 393, 54, 49]);
V.set("animate_exports/images_dialog/WhiteOniAvatarArt.png", [1, 619, 441, 52, 59]);
V.set("animate_exports/images_dialog/YouichiNeutralArt.png", [1, 506, 413, 54, 44]);
V.set("animate_exports/images_dialog/YoungArcherNeutralArt.png", [1, 125, 342, 58, 48]);
V.set("animate_exports/images_dialog/deer_portrait.png", [1, 665, 182, 62, 56]);
V.set("animate_exports/images_dialog/gatekeeper_portrait.png", [1, 141, 666, 44, 48]);
V.set("animate_exports/images_dialog/kijimunaNeutralArt.png", [1, 58, 397, 54, 49]);
V.set("animate_exports/images_dialog/locksmith_portrait.png", [1, 0, 550, 49, 48]);
V.set("animate_exports/images_dialog/luckyCuriousArt.png", [1, 507, 661, 44, 50]);
V.set("animate_exports/images_dialog/momoBlueArt.png", [1, 47, 700, 44, 46]);
V.set("animate_exports/images_dialog/otter_portrait.png", [1, 211, 601, 44, 54]);
V.set("animate_exports/images_dialog/porcupine_portrait.png", [1, 528, 305, 71, 52]);
V.set("animate_exports/images_dialog/sister1_portrait.png", [1, 682, 385, 45, 48]);
V.set("animate_exports/images_dialog/sister2_portrait.png", [1, 242, 663, 44, 49]);
V.set("animate_exports/images_dialog/sister3_portrait.png", [1, 107, 501, 50, 47]);
V.set("animate_exports/images_dialog/yellowleader.png", [1, 384, 482, 50, 57]);
V.set("animate_exports/images_hud/Bitmap4.png", [1, 101, 777, 18, 18]);
V.set("animate_exports/images_hud/Bitmap5.png", [1, 695, 130, 32, 32]);
V.set("animate_exports/images_hud/Bitmap6.png", [1, 156, 717, 26, 26]);
V.set("animate_exports/images_hud/CloseButtonBrown.png", [1, 512, 775, 22, 22]);
V.set("animate_exports/images_hud/OverworldMenuButtonBrown.png", [1, 537, 775, 22, 22]);
V.set("animate_exports/images_hud/PauseButtonBrown.png", [1, 27, 776, 22, 22]);
V.set("animate_exports/images_menus/ArcheryIcon.png", [1, 524, 460, 19, 18]);
V.set("animate_exports/images_menus/ArrowArt.png", nl);
V.set("animate_exports/images_menus/Bitmap129.png", [1, 0, 786, 20, 27]);
V.set("animate_exports/images_menus/Bitmap129_1.png", [1, 0, 786, 20, 27]);
V.set("animate_exports/images_menus/Bitmap131.png", [1, 174, 786, 20, 27]);
V.set("animate_exports/images_menus/Bitmap131_1.png", [1, 174, 786, 20, 27]);
V.set("animate_exports/images_menus/Bitmap132.png", [1, 408, 796, 20, 27]);
V.set("animate_exports/images_menus/Bitmap132_1.png", [1, 408, 796, 20, 27]);
V.set("animate_exports/images_menus/Bitmap133.png", [1, 379, 797, 20, 27]);
V.set("animate_exports/images_menus/Bitmap133_1.png", [1, 379, 797, 20, 27]);
V.set("animate_exports/images_menus/Bitmap134.png", [1, 101, 799, 20, 27]);
V.set("animate_exports/images_menus/Bitmap134_1.png", [1, 101, 799, 20, 27]);
V.set("animate_exports/images_menus/Bitmap135.png", [1, 124, 799, 20, 27]);
V.set("animate_exports/images_menus/Bitmap135_1.png", [1, 124, 799, 20, 27]);
V.set("animate_exports/images_menus/Bitmap136.png", [1, 261, 799, 20, 27]);
V.set("animate_exports/images_menus/Bitmap136_1.png", [1, 261, 799, 20, 27]);
V.set("animate_exports/images_menus/Bitmap137.png", [1, 0, 786, 20, 27]);
V.set("animate_exports/images_menus/Bitmap137_1.png", [1, 0, 786, 20, 27]);
V.set("animate_exports/images_menus/Bitmap138.png", [1, 218, 801, 18, 27]);
V.set("animate_exports/images_menus/Bitmap138_1.png", [1, 218, 801, 18, 27]);
V.set("animate_exports/images_menus/Bitmap139.png", [1, 239, 801, 18, 27]);
V.set("animate_exports/images_menus/Bitmap139_1.png", [1, 239, 801, 18, 27]);
V.set("animate_exports/images_menus/Bitmap140.png", [1, 66, 805, 18, 27]);
V.set("animate_exports/images_menus/Bitmap140_1.png", [1, 66, 805, 18, 27]);
V.set("animate_exports/images_menus/Bitmap141.png", [1, 340, 807, 18, 27]);
V.set("animate_exports/images_menus/Bitmap141_1.png", [1, 340, 807, 18, 27]);
V.set("animate_exports/images_menus/Bitmap142.png", [1, 307, 809, 18, 27]);
V.set("animate_exports/images_menus/Bitmap142_1.png", [1, 307, 809, 18, 27]);
V.set("animate_exports/images_menus/Bitmap143.png", [1, 0, 816, 18, 27]);
V.set("animate_exports/images_menus/Bitmap143_1.png", [1, 0, 816, 18, 27]);
V.set("animate_exports/images_menus/Bitmap147.png", [1, 284, 799, 20, 26]);
V.set("animate_exports/images_menus/Bitmap148.png", [1, 530, 714, 20, 30]);
V.set("animate_exports/images_menus/Bitmap149.png", [1, 585, 785, 20, 30]);
V.set("animate_exports/images_menus/Bitmap150.png", [1, 431, 799, 20, 26]);
V.set("animate_exports/images_menus/Bitmap151.png", [1, 174, 816, 18, 26]);
V.set("animate_exports/images_menus/Bitmap152.png", [1, 608, 817, 18, 26]);
V.set("animate_exports/images_menus/Bitmap153.png", [1, 629, 817, 18, 26]);
V.set("animate_exports/images_menus/Bitmap178.png", [1, 562, 785, 20, 32]);
V.set("animate_exports/images_menus/Bitmap180.png", [1, 608, 785, 20, 29]);
V.set("animate_exports/images_menus/Bitmap181.png", [1, 631, 785, 20, 29]);
V.set("animate_exports/images_menus/Bitmap182.png", [1, 197, 801, 18, 29]);
V.set("animate_exports/images_menus/Bitmap183.png", [1, 21, 822, 16, 16]);
V.set("animate_exports/images_menus/Bitmap186.png", [1, 402, 826, 16, 16]);
V.set("animate_exports/images_menus/Bitmap187.png", [1, 361, 827, 16, 16]);
V.set("animate_exports/images_menus/Bitmap188.png", [1, 380, 827, 16, 16]);
V.set("animate_exports/images_menus/Bitmap189.png", [1, 654, 785, 20, 29]);
V.set("animate_exports/images_menus/Bitmap191.png", [1, 650, 817, 18, 24]);
V.set("animate_exports/images_menus/Bitmap192.png", [1, 435, 771, 23, 25]);
V.set("animate_exports/images_menus/Bitmap196.png", [1, 77, 777, 21, 25]);
V.set("animate_exports/images_menus/Bitmap197.png", [1, 264, 771, 23, 25]);
V.set("animate_exports/images_menus/Bitmap198.png", [1, 316, 781, 21, 25]);
V.set("animate_exports/images_menus/Bitmap235.png", [1, 708, 661, 19, 23]);
V.set("animate_exports/images_menus/Bitmap236.png", [1, 622, 146, 22, 20]);
V.set("animate_exports/images_menus/Bitmap237.png", [1, 567, 606, 21, 29]);
V.set("animate_exports/images_menus/Bitmap238.png", [1, 45, 801, 18, 30]);
V.set("animate_exports/images_menus/Bitmap239.png", [1, 268, 715, 17, 22]);
V.set("animate_exports/images_menus/Bitmap240.png", [1, 688, 632, 17, 21]);
V.set("animate_exports/images_menus/Bitmap241.png", [1, 628, 305, 18, 22]);
V.set("animate_exports/images_menus/Bitmap242.png", [1, 713, 819, 14, 22]);
V.set("animate_exports/images_menus/Bitmap243.png", [1, 556, 820, 17, 22]);
V.set("animate_exports/images_menus/Bitmap244.png", [1, 147, 821, 17, 22]);
V.set("animate_exports/images_menus/Bitmap245.png", [1, 408, 770, 24, 23]);
V.set("animate_exports/images_menus/Bitmap247.png", [1, 461, 773, 23, 23]);
V.set("animate_exports/images_menus/Bitmap248.png", [1, 708, 632, 19, 26]);
V.set("animate_exports/images_menus/Bitmap249.png", [1, 123, 772, 23, 24]);
V.set("animate_exports/images_menus/Bitmap250.png", [1, 290, 771, 23, 25]);
V.set("animate_exports/images_menus/Bitmap251.png", [1, 703, 241, 24, 28]);
V.set("animate_exports/images_menus/Bitmap252.png", [1, 437, 482, 30, 31]);
V.set("animate_exports/images_menus/Bitmap253.png", [1, 94, 716, 29, 29]);
V.set("animate_exports/images_menus/Bitmap254.png", [1, 126, 717, 27, 23]);
V.set("animate_exports/images_menus/Bitmap255.png", [1, 471, 430, 28, 23]);
V.set("animate_exports/images_menus/Bitmap256.png", [1, 235, 748, 26, 25]);
V.set("animate_exports/images_menus/Bitmap257.png", [1, 354, 775, 22, 29]);
V.set("animate_exports/images_menus/Bitmap258.png", [1, 629, 503, 37, 40]);
V.set("animate_exports/images_menus/Bitmap259.png", [1, 326, 748, 25, 30]);
V.set("animate_exports/images_menus/Bitmap81.png", [1, 671, 146, 20, 20]);
V.set("animate_exports/images_menus/BlackDotArt.png", [1, 520, 589, 14, 14]);
V.set("animate_exports/images_menus/ClimbIcon1.png", [1, 577, 482, 19, 18]);
V.set("animate_exports/images_menus/ControlsButtonBG.png", [1, 528, 281, 119, 21]);
V.set("animate_exports/images_menus/ControlsFocus.png", [1, 383, 741, 26, 26]);
V.set("animate_exports/images_menus/ControlsIdle.png", [1, 354, 748, 24, 24]);
V.set("animate_exports/images_menus/DangoStickArt.png", [1, 542, 171, 133, 8]);
V.set("animate_exports/images_menus/GreenDangoArt1.png", [1, 592, 559, 30, 30]);
V.set("animate_exports/images_menus/GreenDangoArt2.png", [1, 487, 773, 22, 43]);
V.set("animate_exports/images_menus/GreenDangoArt3.png", [1, 688, 602, 34, 27]);
V.set("animate_exports/images_menus/HighlightDotArt.png", [1, 515, 311, 9, 9]);
V.set("animate_exports/images_menus/InariArt2.png", [1, 497, 821, 17, 18]);
V.set("animate_exports/images_menus/KappaArt.png", [1, 284, 828, 16, 16]);
V.set("animate_exports/images_menus/KappaArt2.png", [1, 599, 482, 16, 17]);
V.set("animate_exports/images_menus/KappaArt_1.png", [1, 284, 828, 16, 16]);
V.set("animate_exports/images_menus/KarasuArt.png", [1, 74, 749, 16, 20]);
V.set("animate_exports/images_menus/KarasuArt2.png", [1, 541, 536, 20, 20]);
V.set("animate_exports/images_menus/KarasuArt_1.png", [1, 74, 749, 16, 20]);
V.set("animate_exports/images_menus/Koma1Art.png", [1, 622, 0, 99, 49]);
V.set("animate_exports/images_menus/Koma2Art.png", [1, 622, 76, 91, 51]);
V.set("animate_exports/images_menus/LeaderFocus.png", [1, 412, 741, 26, 26]);
V.set("animate_exports/images_menus/LeaderIdle.png", [1, 528, 748, 24, 24]);
V.set("animate_exports/images_menus/LuckyIdleS.png", [1, 585, 818, 18, 22]);
V.set("animate_exports/images_menus/LuckyIdleSArt2.png", [1, 476, 819, 18, 22]);
V.set("animate_exports/images_menus/LuckyIdleSArt3.png", [1, 671, 819, 18, 22]);
V.set("animate_exports/images_menus/LuckyLocationIconArt.png", [1, 421, 828, 14, 13]);
V.set("animate_exports/images_menus/MarathonIcon.png", [1, 708, 687, 19, 18]);
V.set("animate_exports/images_menus/NoStarsArt.png", [1, 678, 174, 18, 4]);
V.set("animate_exports/images_menus/OneStarArt.png", [1, 665, 271, 19, 6]);
V.set("animate_exports/images_menus/PinkDangoArt1.png", [1, 695, 711, 30, 30]);
V.set("animate_exports/images_menus/PinkDangoArt2.png", [1, 493, 714, 34, 27]);
V.set("animate_exports/images_menus/PinkDangoArt3.png", [1, 690, 773, 22, 43]);
V.set("animate_exports/images_menus/PongIcon1.png", [1, 454, 799, 19, 18]);
V.set("animate_exports/images_menus/RugbyIcon11.png", [1, 512, 800, 19, 18]);
V.set("animate_exports/images_menus/ScrollRotateArt0.png", [1, 27, 759, 14, 14]);
V.set("animate_exports/images_menus/ScrollRotateArt1.png", [1, 717, 165, 10, 14]);
V.set("animate_exports/images_menus/ScrollRotateArt2.png", [1, 515, 340, 6, 14]);
V.set("animate_exports/images_menus/ScrollRotateArt3.png", [1, 528, 242, 10, 14]);
V.set("animate_exports/images_menus/ScrollRotateArt4.png", [1, 361, 807, 14, 14]);
V.set("animate_exports/images_menus/ScrollRotateArt5.png", [1, 528, 259, 10, 14]);
V.set("animate_exports/images_menus/ScrollRotateArt6.png", [1, 515, 323, 7, 14]);
V.set("animate_exports/images_menus/ScrollRotateArt7.png", [1, 717, 52, 11, 14]);
V.set("animate_exports/images_menus/SelectedIconCircleArt.png", [1, 602, 305, 23, 22]);
V.set("animate_exports/images_menus/SettingsFocus.png", [1, 441, 742, 26, 26]);
V.set("animate_exports/images_menus/SettingsIdle.png", [1, 555, 748, 24, 24]);
V.set("animate_exports/images_menus/ShareFocus.png", [1, 268, 742, 26, 26]);
V.set("animate_exports/images_menus/ShareIdle.png", [1, 47, 749, 24, 24]);
V.set("animate_exports/images_menus/ShareWindow.png", [1, 311, 242, 214, 66]);
V.set("animate_exports/images_menus/SkateIcon1.png", [1, 534, 800, 19, 18]);
V.set("animate_exports/images_menus/StatsMenuBGArt.png", [1, 542, 182, 120, 96]);
V.set("animate_exports/images_menus/SwimIcon1.png", [1, 23, 801, 19, 18]);
V.set("animate_exports/images_menus/ThreeStarArt.png", [1, 694, 165, 20, 6]);
V.set("animate_exports/images_menus/TwoStarsArt.png", [1, 687, 272, 19, 6]);
V.set("animate_exports/images_menus/UshiArt.png", [1, 517, 821, 16, 20]);
V.set("animate_exports/images_menus/UshiArt2.png", [1, 384, 460, 20, 19]);
V.set("animate_exports/images_menus/UshiArt_1.png", [1, 517, 821, 16, 20]);
V.set("animate_exports/images_menus/WhiteCircleFrameArt11.png", [1, 647, 146, 21, 20]);
V.set("animate_exports/images_menus/YellowDangoArt1.png", [1, 235, 715, 30, 30]);
V.set("animate_exports/images_menus/YellowDangoArt2.png", [1, 665, 241, 35, 27]);
V.set("animate_exports/images_menus/YellowDangoArt3.png", [1, 149, 775, 22, 43]);
V.set("animate_exports/images_menus/back.png", [1, 52, 776, 22, 22]);
V.set("animate_exports/images_menus/backfocus.png", [1, 211, 776, 22, 22]);
V.set("animate_exports/images_menus/closeButton.png", [1, 512, 775, 22, 22]);
V.set("animate_exports/images_menus/closeButtonFocus.png", [1, 236, 776, 22, 22]);
V.set("animate_exports/images_menus/controllerFocus.png", [1, 692, 819, 18, 11]);
V.set("animate_exports/images_menus/controllerIdle.png", [1, 454, 820, 18, 11]);
V.set("animate_exports/images_menus/copyFocus.png", [1, 297, 742, 26, 26]);
V.set("animate_exports/images_menus/copyIdle.png", [1, 582, 758, 24, 24]);
V.set("animate_exports/images_menus/emailFocus.png", [1, 126, 743, 26, 26]);
V.set("animate_exports/images_menus/emailIdle.png", [1, 609, 758, 24, 24]);
V.set("animate_exports/images_menus/exitFocus.png", [1, 470, 744, 26, 26]);
V.set("animate_exports/images_menus/exitIdle.png", [1, 636, 758, 24, 24]);
V.set("animate_exports/images_menus/facebookFocus.png", [1, 499, 744, 26, 26]);
V.set("animate_exports/images_menus/facebookIdle.png", [1, 663, 758, 24, 24]);
V.set("animate_exports/images_menus/inariArt.png", [1, 536, 821, 16, 20]);
V.set("animate_exports/images_menus/inariArt_1.png", [1, 536, 821, 16, 20]);
V.set("animate_exports/images_menus/indicatorAction.png", [1, 717, 69, 11, 11]);
V.set("animate_exports/images_menus/indicatorActionMobile.png", [1, 716, 83, 11, 11]);
V.set("animate_exports/images_menus/indicatorActionMobilePressed.png", [1, 716, 97, 11, 11]);
V.set("animate_exports/images_menus/indicatorActionPressed.png", [1, 195, 640, 11, 10]);
V.set("animate_exports/images_menus/indicatorDown.png", [1, 716, 111, 11, 11]);
V.set("animate_exports/images_menus/indicatorJoystick.png", [1, 699, 174, 5, 5]);
V.set("animate_exports/images_menus/indicatorJoystickBase.png", [1, 422, 542, 11, 11]);
V.set("animate_exports/images_menus/indicatorLeft.png", [1, 422, 556, 11, 11]);
V.set("animate_exports/images_menus/indicatorLeft_1.png", [1, 422, 556, 11, 11]);
V.set("animate_exports/images_menus/indicatorRight.png", [1, 195, 612, 11, 11]);
V.set("animate_exports/images_menus/indicatorRight_1.png", [1, 195, 612, 11, 11]);
V.set("animate_exports/images_menus/indicatorUp.png", [1, 195, 626, 11, 11]);
V.set("animate_exports/images_menus/keyboardFocus.png", [1, 415, 413, 19, 11]);
V.set("animate_exports/images_menus/keyboardIdle.png", [1, 211, 759, 19, 11]);
V.set("animate_exports/images_menus/menuBG.png", [1, 0, 0, 308, 168]);
V.set("animate_exports/images_menus/menuBGMapBG.png", [1, 311, 0, 308, 168]);
V.set("animate_exports/images_menus/replayFocus.png", [1, 695, 744, 26, 26]);
V.set("animate_exports/images_menus/replayIdle.png", [1, 0, 759, 24, 24]);
V.set("animate_exports/images_menus/searchFocus.png", [1, 155, 746, 26, 26]);
V.set("animate_exports/images_menus/searchIdle.png", [1, 184, 759, 24, 24]);
V.set("animate_exports/images_menus/startBG.png", [1, 622, 52, 92, 21]);
V.set("animate_exports/images_menus/startBG1.png", [1, 622, 52, 92, 21]);
V.set("animate_exports/images_menus/tutBG.png", [1, 0, 171, 308, 168]);
V.set("animate_exports/images_menus/twitterFocus.png", [1, 94, 748, 26, 26]);
V.set("animate_exports/images_menus/twitterIdle.png", [1, 381, 770, 24, 24]);
V.set("animate_exports/images_menus/valueBG.png", [1, 622, 130, 70, 13]);
V.set("animate_exports/images_cutscene/ARcheryGravel1Edge1Art.png", [2, 19, 523, 16, 16]);
V.set("animate_exports/images_cutscene/ArcheryArrowBoulder1Art.png", [2, 0, 472, 42, 48]);
V.set("animate_exports/images_cutscene/ArcheryBoulder3Art.png", [2, 153, 376, 28, 31]);
V.set("animate_exports/images_cutscene/ArcheryBoulder4Art.png", [2, 667, 109, 37, 39]);
V.set("animate_exports/images_cutscene/ArcheryDock1Art.png", [2, 388, 523, 16, 16]);
V.set("animate_exports/images_cutscene/ArcheryLargeGravel1Art.png", [2, 655, 301, 48, 48]);
V.set("animate_exports/images_cutscene/ArcherySignArt.png", [2, 298, 213, 19, 18]);
V.set("animate_exports/images_cutscene/ArcheryTree1Art.png", [2, 388, 468, 42, 52]);
V.set("animate_exports/images_cutscene/ArcheryTree2Art.png", [2, 300, 325, 52, 60]);
V.set("animate_exports/images_cutscene/BambooTree1Art.png", [2, 588, 246, 64, 108]);
V.set("animate_exports/images_cutscene/BambooTree2Art.png", [2, 0, 183, 103, 76]);
V.set("animate_exports/images_cutscene/BambooTree3Art.png", [2, 245, 325, 52, 84]);
V.set("animate_exports/images_cutscene/BigCatNeutralArt.png", [2, 551, 459, 44, 44]);
V.set("animate_exports/images_cutscene/BirdgeShadowArt.png", [2, 407, 523, 16, 16]);
V.set("animate_exports/images_cutscene/Bitmap473.png", [2, 323, 36, 227, 29]);
V.set("animate_exports/images_cutscene/Bitmap478.png", [2, 323, 0, 231, 33]);
V.set("animate_exports/images_cutscene/Bitmap479.png", [2, 486, 319, 29, 13]);
V.set("animate_exports/images_cutscene/Bitmap722.png", [2, 287, 524, 16, 16]);
V.set("animate_exports/images_cutscene/Bitmap7241.png", [2, 185, 545, 14, 48]);
V.set("animate_exports/images_cutscene/Bitmap727.png", [2, 245, 319, 48, 3]);
V.set("animate_exports/images_cutscene/BoundBitmap.png", [2, 444, 244, 72, 72]);
V.set("animate_exports/images_cutscene/BoundBitmap_1.png", [2, 444, 244, 72, 72]);
V.set("animate_exports/images_cutscene/Bridgefloor.png", [2, 306, 524, 16, 16]);
V.set("animate_exports/images_cutscene/BuildingShadowArt.png", [2, 519, 246, 66, 53]);
V.set("animate_exports/images_cutscene/Bush.png", [2, 256, 287, 33, 21]);
V.set("animate_exports/images_cutscene/ChampionFacingPlayer_011.png", [2, 150, 473, 40, 50]);
V.set("animate_exports/images_cutscene/ChampionFacingPlayer_1.png", [2, 45, 474, 40, 50]);
V.set("animate_exports/images_cutscene/ChampionStandin.png", [2, 88, 495, 39, 46]);
V.set("animate_exports/images_cutscene/CharacterShadowArt.png", [2, 667, 178, 12, 3]);
V.set("animate_exports/images_cutscene/CloseIcon.png", [2, 192, 270, 9, 7]);
V.set("animate_exports/images_cutscene/DarkBeachWaveArt1.png", [2, 306, 543, 16, 14]);
V.set("animate_exports/images_cutscene/DarkBeachWaveArt2.png", [2, 344, 543, 16, 12]);
V.set("animate_exports/images_cutscene/DarkBeachWaveArt3.png", [2, 688, 99, 16, 5]);
V.set("animate_exports/images_cutscene/DarkBeachWaveArt4.png", [2, 64, 262, 16, 4]);
V.set("animate_exports/images_cutscene/DarkBeachWaveArt5.png", [2, 682, 231, 16, 10]);
V.set("animate_exports/images_cutscene/DarkBeachWaveArt6.png", [2, 325, 543, 16, 13]);
V.set("animate_exports/images_cutscene/DarkBeachWaveArt7.png", [2, 76, 544, 16, 7]);
V.set("animate_exports/images_cutscene/DarkSandWaveArt1.png", [2, 130, 495, 16, 17]);
V.set("animate_exports/images_cutscene/DarkSandWaveArt2.png", [2, 666, 514, 16, 17]);
V.set("animate_exports/images_cutscene/DarkSandWaveArt3.png", [2, 325, 524, 16, 16]);
V.set("animate_exports/images_cutscene/DarkSandWaveArt4.png", [2, 344, 524, 16, 16]);
V.set("animate_exports/images_cutscene/DarkSandWaveArt5.png", [2, 363, 524, 16, 16]);
V.set("animate_exports/images_cutscene/DarkSandWaveArt6.png", [2, 167, 545, 15, 15]);
V.set("animate_exports/images_cutscene/DialogueFillArt.png", [2, 323, 68, 210, 49]);
V.set("animate_exports/images_cutscene/DialogueFrameArt.png", [2, 323, 120, 210, 49]);
V.set("animate_exports/images_cutscene/FanArt1.png", [2, 55, 546, 14, 17]);
V.set("animate_exports/images_cutscene/FanArt2.png", [2, 233, 537, 14, 17]);
V.set("animate_exports/images_cutscene/Field1Art.png", [2, 149, 526, 16, 16]);
V.set("animate_exports/images_cutscene/Field1Art_1.png", [2, 149, 526, 16, 16]);
V.set("animate_exports/images_cutscene/Field1SideEdgeArt.png", [2, 642, 357, 9, 16]);
V.set("animate_exports/images_cutscene/Field2Art.png", [2, 168, 526, 16, 16]);
V.set("animate_exports/images_cutscene/Field2SideEdgeArt.png", [2, 524, 172, 8, 16]);
V.set("animate_exports/images_cutscene/FukuroBodyArt1.png", [2, 323, 172, 118, 84]);
V.set("animate_exports/images_cutscene/FukuroBodyArt2.png", [2, 536, 109, 128, 79]);
V.set("animate_exports/images_cutscene/FukuroHeadArt1.png", [2, 365, 289, 61, 28]);
V.set("animate_exports/images_cutscene/FukuroHeadArt2.png", [2, 128, 270, 61, 30]);
V.set("animate_exports/images_cutscene/FukuroHeadArt3.png", [2, 365, 259, 64, 27]);
V.set("animate_exports/images_cutscene/FukuroHeadArt4.png", [2, 519, 302, 58, 38]);
V.set("animate_exports/images_cutscene/FukuroHeadArt5.png", [2, 0, 314, 55, 53]);
V.set("animate_exports/images_cutscene/FukuroHeadArt6.png", [2, 192, 287, 61, 29]);
V.set("animate_exports/images_cutscene/Grass1DiagonalCornerEdge1Art.png", [2, 287, 543, 16, 15]);
V.set("animate_exports/images_cutscene/Grass1TopEdge1.png", [2, 83, 262, 16, 3]);
V.set("animate_exports/images_cutscene/Grass2SideEdgeArt.png", [2, 580, 302, 4, 16]);
V.set("animate_exports/images_cutscene/Grass2TopEdgeArt.png", [2, 256, 311, 16, 3]);
V.set("animate_exports/images_cutscene/HalfPavement1Art.png", [2, 153, 410, 16, 8]);
V.set("animate_exports/images_cutscene/InariNeutralArt.png", [2, 655, 246, 49, 52]);
V.set("animate_exports/images_cutscene/KappaArt.png", [2, 38, 527, 16, 16]);
V.set("animate_exports/images_cutscene/KappaArt2.png", [2, 685, 514, 16, 17]);
V.set("animate_exports/images_cutscene/KappaNeutralArt.png", [2, 429, 319, 54, 44]);
V.set("animate_exports/images_cutscene/KarasuNeutralArt.png", [2, 365, 320, 53, 49]);
V.set("animate_exports/images_cutscene/KijimunaIdleArt1.png", [2, 298, 183, 20, 27]);
V.set("animate_exports/images_cutscene/KijimunaIdleArt2.png", [2, 682, 178, 22, 26]);
V.set("animate_exports/images_cutscene/Koma1Art11.png", [2, 688, 57, 16, 18]);
V.set("animate_exports/images_cutscene/Koma1Art2.png", [2, 130, 515, 16, 17]);
V.set("animate_exports/images_cutscene/Koma1NeutralArt.png", [2, 58, 322, 53, 47]);
V.set("animate_exports/images_cutscene/Koma2Art1.png", [2, 598, 483, 18, 19]);
V.set("animate_exports/images_cutscene/Koma2Art211.png", [2, 475, 511, 18, 19]);
V.set("animate_exports/images_cutscene/Koma2NeutralArt.png", [2, 486, 343, 51, 49]);
V.set("animate_exports/images_cutscene/LArgeMountainBottomEdgeWaterArt1.png", [2, 341, 440, 48, 8]);
V.set("animate_exports/images_cutscene/LArgeMountainSideEdgeArt1.png", [2, 123, 544, 3, 48]);
V.set("animate_exports/images_cutscene/LArgeWater2Art3.png", [2, 655, 352, 48, 48]);
V.set("animate_exports/images_cutscene/LargeCobblestone1Art.png", [2, 540, 357, 48, 48]);
V.set("animate_exports/images_cutscene/LargeDarkGrass1Art.png", [2, 591, 357, 48, 48]);
V.set("animate_exports/images_cutscene/LargeField1Art.png", [2, 421, 366, 48, 48]);
V.set("animate_exports/images_cutscene/LargeField1Art1.png", [2, 421, 366, 48, 48]);
V.set("animate_exports/images_cutscene/LargeField1SideEdge1Art.png", [2, 693, 403, 9, 48]);
V.set("animate_exports/images_cutscene/LargeField1SideEdge1Art11.png", [2, 114, 322, 10, 48]);
V.set("animate_exports/images_cutscene/LargeField2Art.png", [2, 0, 370, 48, 48]);
V.set("animate_exports/images_cutscene/LargeField2SideEdgeArt.png", [2, 536, 513, 9, 48]);
V.set("animate_exports/images_cutscene/LargeGardenGrassBottomEdgeArt.png", [2, 102, 440, 48, 8]);
V.set("animate_exports/images_cutscene/LargeGrass1Art.png", [2, 188, 371, 48, 48]);
V.set("animate_exports/images_cutscene/LargeGrass1Art_1.png", [2, 188, 371, 48, 48]);
V.set("animate_exports/images_cutscene/LargeGrass1Side1Art.png", [2, 433, 489, 18, 48]);
V.set("animate_exports/images_cutscene/LargeGrass1SideEdge2Art.png", [2, 445, 540, 4, 48]);
V.set("animate_exports/images_cutscene/LargeGrass1TopEdge1Art.png", [2, 102, 427, 48, 10]);
V.set("animate_exports/images_cutscene/LargeGrass1TopEdge1Art_1.png", [2, 102, 427, 48, 10]);
V.set("animate_exports/images_cutscene/LargeGrass2TopEdgeArt.png", [2, 290, 439, 48, 10]);
V.set("animate_exports/images_cutscene/LargeHotSpringArt2.png", [2, 204, 463, 43, 42]);
V.set("animate_exports/images_cutscene/LargeHotSpringArt3.png", [2, 102, 451, 45, 41]);
V.set("animate_exports/images_cutscene/LargeMountain2Art2.png", [2, 51, 372, 48, 48]);
V.set("animate_exports/images_cutscene/LargeMountain2TopEdgeShadowArt.png", [2, 351, 423, 48, 14]);
V.set("animate_exports/images_cutscene/LargeMountainBottomEdgeWaterArt2.png", [2, 457, 446, 48, 8]);
V.set("animate_exports/images_cutscene/LargeWa.png", [2, 355, 372, 48, 48]);
V.set("animate_exports/images_cutscene/LargeWater1Art2.png", [2, 102, 376, 48, 48]);
V.set("animate_exports/images_cutscene/LargeWater1Art3.png", [2, 300, 388, 48, 48]);
V.set("animate_exports/images_cutscene/LargeWater1Art4.png", [2, 102, 376, 48, 48]);
V.set("animate_exports/images_cutscene/LargeWater1Art5.png", [2, 472, 395, 48, 48]);
V.set("animate_exports/images_cutscene/LargeWater2Art1.png", [2, 642, 403, 48, 48]);
V.set("animate_exports/images_cutscene/LargeWater3Art1.png", [2, 355, 372, 48, 48]);
V.set("animate_exports/images_cutscene/LargeWater3Art2.png", [2, 523, 408, 48, 48]);
V.set("animate_exports/images_cutscene/LuckyAnnoyedArt1.png", [2, 625, 454, 44, 51]);
V.set("animate_exports/images_cutscene/LuckyIdleNArt.png", [2, 688, 33, 16, 21]);
V.set("animate_exports/images_cutscene/LuckyIdleS.png", [2, 645, 508, 18, 22]);
V.set("animate_exports/images_cutscene/LuckyNeutralArt.png", [2, 457, 457, 44, 51]);
V.set("animate_exports/images_cutscene/LuckyWalkSArt4.png", [2, 149, 545, 15, 20]);
V.set("animate_exports/images_cutscene/LuckyWinArt.png", [2, 454, 511, 18, 21]);
V.set("animate_exports/images_cutscene/LuckyWorriedArt.png", [2, 504, 459, 44, 51]);
V.set("animate_exports/images_cutscene/MapArt.png", [2, 557, 0, 128, 106]);
V.set("animate_exports/images_cutscene/MapDotsArt.png", [2, 444, 172, 77, 69]);
V.set("animate_exports/images_cutscene/MapleTree.png", [2, 106, 183, 96, 84]);
V.set("animate_exports/images_cutscene/MapleTree2.png", [2, 128, 303, 57, 70]);
V.set("animate_exports/images_cutscene/MossyRockArt.png", [2, 540, 343, 24, 11]);
V.set("animate_exports/images_cutscene/Mountain2Art.png", [2, 57, 527, 16, 16]);
V.set("animate_exports/images_cutscene/Mountain2SideEdge2Art.png", [2, 292, 287, 2, 16]);
V.set("animate_exports/images_cutscene/Mountain2TopEdgeShadow1Art.png", [2, 363, 543, 16, 12]);
V.set("animate_exports/images_cutscene/MountainBottomEdgeWaterArt1.png", [2, 567, 343, 16, 10]);
V.set("animate_exports/images_cutscene/MountainBottomEdgeWaterArt2.png", [2, 204, 448, 16, 10]);
V.set("animate_exports/images_cutscene/NewLArgeWater1Art1.png", [2, 574, 408, 48, 48]);
V.set("animate_exports/images_cutscene/NewLargeWater1Art2.png", [2, 239, 412, 48, 48]);
V.set("animate_exports/images_cutscene/NewLargeWater2Art.png", [2, 406, 417, 48, 48]);
V.set("animate_exports/images_cutscene/NewWater1Art1.png", [2, 475, 533, 16, 16]);
V.set("animate_exports/images_cutscene/NewWater1Art2.png", [2, 516, 533, 16, 16]);
V.set("animate_exports/images_cutscene/OtohimeArt1.png", [2, 341, 451, 44, 70]);
V.set("animate_exports/images_cutscene/OtohimeArt2.png", [2, 290, 452, 44, 69]);
V.set("animate_exports/images_cutscene/PavementArt1.png", [2, 645, 533, 16, 16]);
V.set("animate_exports/images_cutscene/PavementArt1111.png", [2, 645, 533, 16, 16]);
V.set("animate_exports/images_cutscene/PineTree2Art11.png", [2, 688, 0, 16, 30]);
V.set("animate_exports/images_cutscene/PineTree3Art11.png", [2, 593, 506, 28, 51]);
V.set("animate_exports/images_cutscene/PineTreeArt111.png", [2, 672, 454, 30, 57]);
V.set("animate_exports/images_cutscene/PingPongBall.png", [2, 432, 276, 4, 4]);
V.set("animate_exports/images_cutscene/PingPongTable1Art.png", [2, 298, 259, 64, 63]);
V.set("animate_exports/images_cutscene/PlayButtonArt1.png", [2, 682, 207, 22, 21]);
V.set("animate_exports/images_cutscene/PortalCircle.png", [2, 536, 95, 17, 9]);
V.set("animate_exports/images_cutscene/PortalGlowArt.png", [2, 536, 68, 17, 24]);
V.set("animate_exports/images_cutscene/PortalSparklesArt1.png", [2, 204, 422, 23, 23]);
V.set("animate_exports/images_cutscene/PortalSparklesArt2.png", [2, 516, 513, 17, 17]);
V.set("animate_exports/images_cutscene/PortalSparklesArt3.png", [2, 496, 513, 17, 21]);
V.set("animate_exports/images_cutscene/RedBridgeRail1Art.png", [2, 688, 78, 16, 18]);
V.set("animate_exports/images_cutscene/RedCircleArt.png", [2, 598, 459, 22, 21]);
V.set("animate_exports/images_cutscene/RedGate1Art.png", [2, 0, 262, 61, 49]);
V.set("a