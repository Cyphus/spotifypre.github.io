(window.webpackJsonp = window.webpackJsonp || []).push([
    [12], {
        "+924": function(t, e, n) {
            "use strict";
            n.d(e, "d", (function() {
                return o
            })), n.d(e, "c", (function() {
                return i
            })), n.d(e, "b", (function() {
                return s
            })), n.d(e, "a", (function() {
                return a
            }));
            var r = n("9AQC");

            function o(t, e) {
                return void 0 === e && (e = 0), "string" !== typeof t || 0 === e ? t : t.length <= e ? t : t.substr(0, e) + "..."
            }

            function i(t, e) {
                var n = t,
                    r = n.length;
                if (r <= 150) return n;
                e > r && (e = r);
                var o = Math.max(e - 60, 0);
                o < 5 && (o = 0);
                var i = Math.min(o + 140, r);
                return i > r - 5 && (i = r), i === r && (o = Math.max(i - 140, 0)), n = n.slice(o, i), o > 0 && (n = "'{snip} " + n), i < r && (n += " {snip}"), n
            }

            function s(t, e) {
                if (!Array.isArray(t)) return "";
                for (var n = [], r = 0; r < t.length; r++) {
                    var o = t[r];
                    try {
                        n.push(String(o))
                    } catch (i) {
                        n.push("[value cannot be serialized]")
                    }
                }
                return n.join(e)
            }

            function a(t, e) {
                return !!Object(r.k)(t) && (Object(r.j)(e) ? e.test(t) : "string" === typeof e && -1 !== t.indexOf(e))
            }
        },
        "+A1k": function(t, e, n) {
            "use strict";
            (function(t, r) {
                n.d(e, "b", (function() {
                    return o
                })), n.d(e, "a", (function() {
                    return i
                }));
                n("9AQC"), n("6PXS");

                function o() {
                    return "[object process]" === Object.prototype.toString.call("undefined" !== typeof t ? t : 0)
                }

                function i(t, e) {
                    return t.require(e)
                }
            }).call(this, n("8oxB"), n("BKcT")(t))
        },
        "1OyB": function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(e, "a", (function() {
                return r
            }))
        },
        2: function(t, e, n) {
            n("NjYM"), t.exports = n("nOHt")
        },
        "6PXS": function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "c", (function() {
                    return u
                })), n.d(e, "f", (function() {
                    return p
                })), n.d(e, "e", (function() {
                    return d
                })), n.d(e, "d", (function() {
                    return v
                })), n.d(e, "b", (function() {
                    return y
                })), n.d(e, "a", (function() {
                    return g
                }));
                var r = n("mrSG"),
                    o = n("vFt6"),
                    i = n("9AQC"),
                    s = n("wCA9"),
                    a = n("pRiV"),
                    c = n("+924");

                function u(t, e, n) {
                    if (e in t) {
                        var r = t[e],
                            o = n(r);
                        if ("function" === typeof o) try {
                            o.prototype = o.prototype || {}, Object.defineProperties(o, {
                                __sentry_original__: {
                                    enumerable: !1,
                                    value: r
                                }
                            })
                        } catch (i) {}
                        t[e] = o
                    }
                }

                function p(t) {
                    return Object.keys(t).map((function(e) {
                        return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                    })).join("&")
                }

                function l(t) {
                    if (Object(i.d)(t)) {
                        var e = t,
                            n = {
                                message: e.message,
                                name: e.name,
                                stack: e.stack
                            };
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }
                    if (Object(i.f)(t)) {
                        var s = t,
                            a = {};
                        a.type = s.type;
                        try {
                            a.target = Object(i.c)(s.target) ? Object(o.a)(s.target) : Object.prototype.toString.call(s.target)
                        } catch (c) {
                            a.target = "<unknown>"
                        }
                        try {
                            a.currentTarget = Object(i.c)(s.currentTarget) ? Object(o.a)(s.currentTarget) : Object.prototype.toString.call(s.currentTarget)
                        } catch (c) {
                            a.currentTarget = "<unknown>"
                        }
                        for (var r in "undefined" !== typeof CustomEvent && Object(i.g)(t, CustomEvent) && (a.detail = s.detail), s) Object.prototype.hasOwnProperty.call(s, r) && (a[r] = s);
                        return a
                    }
                    return t
                }

                function f(t) {
                    return function(t) {
                        return ~-encodeURI(t).split(/%..|./).length
                    }(JSON.stringify(t))
                }

                function d(t, e, n) {
                    void 0 === e && (e = 3), void 0 === n && (n = 102400);
                    var r = v(t, e);
                    return f(r) > n ? d(t, e - 1, n) : r
                }

                function h(e, n) {
                    return "domain" === n && e && "object" === typeof e && e._events ? "[Domain]" : "domainEmitter" === n ? "[DomainEmitter]" : "undefined" !== typeof t && e === t ? "[Global]" : "undefined" !== typeof window && e === window ? "[Window]" : "undefined" !== typeof document && e === document ? "[Document]" : Object(i.l)(e) ? "[SyntheticEvent]" : "number" === typeof e && e !== e ? "[NaN]" : void 0 === e ? "[undefined]" : "function" === typeof e ? "[Function: " + Object(a.a)(e) + "]" : "symbol" === typeof e ? "[" + String(e) + "]" : "bigint" === typeof e ? "[BigInt: " + String(e) + "]" : e
                }

                function _(t, e, n, r) {
                    if (void 0 === n && (n = 1 / 0), void 0 === r && (r = new s.a), 0 === n) return function(t) {
                        var e = Object.prototype.toString.call(t);
                        if ("string" === typeof t) return t;
                        if ("[object Object]" === e) return "[Object]";
                        if ("[object Array]" === e) return "[Array]";
                        var n = h(t);
                        return Object(i.i)(n) ? n : e
                    }(e);
                    if (null !== e && void 0 !== e && "function" === typeof e.toJSON) return e.toJSON();
                    var o = h(e, t);
                    if (Object(i.i)(o)) return o;
                    var a = l(e),
                        c = Array.isArray(e) ? [] : {};
                    if (r.memoize(e)) return "[Circular ~]";
                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (c[u] = _(u, a[u], n - 1, r));
                    return r.unmemoize(e), c
                }

                function v(t, e) {
                    try {
                        return JSON.parse(JSON.stringify(t, (function(t, n) {
                            return _(t, n, e)
                        })))
                    } catch (n) {
                        return "**non-serializable**"
                    }
                }

                function y(t, e) {
                    void 0 === e && (e = 40);
                    var n = Object.keys(l(t));
                    if (n.sort(), !n.length) return "[object has no keys]";
                    if (n[0].length >= e) return Object(c.d)(n[0], e);
                    for (var r = n.length; r > 0; r--) {
                        var o = n.slice(0, r).join(", ");
                        if (!(o.length > e)) return r === n.length ? o : Object(c.d)(o, e)
                    }
                    return ""
                }

                function g(t) {
                    var e, n;
                    if (Object(i.h)(t)) {
                        var o = t,
                            s = {};
                        try {
                            for (var a = Object(r.__values)(Object.keys(o)), c = a.next(); !c.done; c = a.next()) {
                                var u = c.value;
                                "undefined" !== typeof o[u] && (s[u] = g(o[u]))
                            }
                        } catch (p) {
                            e = {
                                error: p
                            }
                        } finally {
                            try {
                                c && !c.done && (n = a.return) && n.call(a)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        return s
                    }
                    return Array.isArray(t) ? t.map(g) : t
                }
            }).call(this, n("3r9c"))
        },
        "709e": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "App", (function() {
                return we
            })), n.d(e, "reportWebVitals", (function() {
                return Se
            }));
            var r = {};
            n.r(r), n.d(r, "FunctionToString", (function() {
                return v
            })), n.d(r, "InboundFilters", (function() {
                return W
            }));
            n("07d7"), n("SuFq"), n("JfAA");
            var o = n("1OyB");

            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function s(t, e, n) {
                return e && i(t.prototype, e), n && i(t, n), t
            }
            var a, c, u = n("Ji7U"),
                p = n("md7G"),
                l = n("foSv"),
                f = n("q1tI"),
                d = n.n(f),
                h = n("8Bbg"),
                _ = n.n(h),
                v = function() {
                    function t() {
                        this.name = t.id
                    }
                    return t.prototype.setupOnce = function() {
                        a = Function.prototype.toString, Function.prototype.toString = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            var n = this.__sentry_original__ || this;
                            return a.apply(n, t)
                        }
                    }, t.id = "FunctionToString", t
                }(),
                y = n("mrSG"),
                g = n("9AQC"),
                b = n("kdvv");
            ! function(t) {
                t.PENDING = "PENDING", t.RESOLVED = "RESOLVED", t.REJECTED = "REJECTED"
            }(c || (c = {}));
            var m = function() {
                    function t(t) {
                        var e = this;
                        this._state = c.PENDING, this._handlers = [], this._resolve = function(t) {
                            e._setResult(c.RESOLVED, t)
                        }, this._reject = function(t) {
                            e._setResult(c.REJECTED, t)
                        }, this._setResult = function(t, n) {
                            e._state === c.PENDING && (Object(g.m)(n) ? n.then(e._resolve, e._reject) : (e._state = t, e._value = n, e._executeHandlers()))
                        }, this._attachHandler = function(t) {
                            e._handlers = e._handlers.concat(t), e._executeHandlers()
                        }, this._executeHandlers = function() {
                            if (e._state !== c.PENDING) {
                                var t = e._handlers.slice();
                                e._handlers = [], t.forEach((function(t) {
                                    t.done || (e._state === c.RESOLVED && t.onfulfilled && t.onfulfilled(e._value), e._state === c.REJECTED && t.onrejected && t.onrejected(e._value), t.done = !0)
                                }))
                            }
                        };
                        try {
                            t(this._resolve, this._reject)
                        } catch (n) {
                            this._reject(n)
                        }
                    }
                    return t.resolve = function(e) {
                        return new t((function(t) {
                            t(e)
                        }))
                    }, t.reject = function(e) {
                        return new t((function(t, n) {
                            n(e)
                        }))
                    }, t.all = function(e) {
                        return new t((function(n, r) {
                            if (Array.isArray(e))
                                if (0 !== e.length) {
                                    var o = e.length,
                                        i = [];
                                    e.forEach((function(e, s) {
                                        t.resolve(e).then((function(t) {
                                            i[s] = t, 0 === (o -= 1) && n(i)
                                        })).then(null, r)
                                    }))
                                } else n([]);
                            else r(new TypeError("Promise.all requires an array as input."))
                        }))
                    }, t.prototype.then = function(e, n) {
                        var r = this;
                        return new t((function(t, o) {
                            r._attachHandler({
                                done: !1,
                                onfulfilled: function(n) {
                                    if (e) try {
                                        return void t(e(n))
                                    } catch (r) {
                                        return void o(r)
                                    } else t(n)
                                },
                                onrejected: function(e) {
                                    if (n) try {
                                        return void t(n(e))
                                    } catch (r) {
                                        return void o(r)
                                    } else o(e)
                                }
                            })
                        }))
                    }, t.prototype.catch = function(t) {
                        return this.then((function(t) {
                            return t
                        }), t)
                    }, t.prototype.finally = function(e) {
                        var n = this;
                        return new t((function(t, r) {
                            var o, i;
                            return n.then((function(t) {
                                i = !1, o = t, e && e()
                            }), (function(t) {
                                i = !0, o = t, e && e()
                            })).then((function() {
                                i ? r(o) : t(o)
                            }))
                        }))
                    }, t.prototype.toString = function() {
                        return "[object SyncPromise]"
                    }, t
                }(),
                O = n("9/Zf"),
                j = function() {
                    function t() {
                        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}
                    }
                    return t.clone = function(e) {
                        var n = new t;
                        return e && (n._breadcrumbs = Object(y.__spread)(e._breadcrumbs), n._tags = Object(y.__assign)({}, e._tags), n._extra = Object(y.__assign)({}, e._extra), n._contexts = Object(y.__assign)({}, e._contexts), n._user = e._user, n._level = e._level, n._span = e._span, n._session = e._session, n._transactionName = e._transactionName, n._fingerprint = e._fingerprint, n._eventProcessors = Object(y.__spread)(e._eventProcessors)), n
                    }, t.prototype.addScopeListener = function(t) {
                        this._scopeListeners.push(t)
                    }, t.prototype.addEventProcessor = function(t) {
                        return this._eventProcessors.push(t), this
                    }, t.prototype.setUser = function(t) {
                        return this._user = t || {}, this._session && this._session.update({
                            user: t
                        }), this._notifyScopeListeners(), this
                    }, t.prototype.getUser = function() {
                        return this._user
                    }, t.prototype.setTags = function(t) {
                        return this._tags = Object(y.__assign)(Object(y.__assign)({}, this._tags), t), this._notifyScopeListeners(), this
                    }, t.prototype.setTag = function(t, e) {
                        var n;
                        return this._tags = Object(y.__assign)(Object(y.__assign)({}, this._tags), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setExtras = function(t) {
                        return this._extra = Object(y.__assign)(Object(y.__assign)({}, this._extra), t), this._notifyScopeListeners(), this
                    }, t.prototype.setExtra = function(t, e) {
                        var n;
                        return this._extra = Object(y.__assign)(Object(y.__assign)({}, this._extra), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setFingerprint = function(t) {
                        return this._fingerprint = t, this._notifyScopeListeners(), this
                    }, t.prototype.setLevel = function(t) {
                        return this._level = t, this._notifyScopeListeners(), this
                    }, t.prototype.setTransactionName = function(t) {
                        return this._transactionName = t, this._notifyScopeListeners(), this
                    }, t.prototype.setTransaction = function(t) {
                        return this.setTransactionName(t)
                    }, t.prototype.setContext = function(t, e) {
                        var n;
                        return null === e ? delete this._contexts[t] : this._contexts = Object(y.__assign)(Object(y.__assign)({}, this._contexts), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setSpan = function(t) {
                        return this._span = t, this._notifyScopeListeners(), this
                    }, t.prototype.getSpan = function() {
                        return this._span
                    }, t.prototype.getTransaction = function() {
                        var t, e, n, r, o = this.getSpan();
                        return (null === (t = o) || void 0 === t ? void 0 : t.transaction) ? null === (e = o) || void 0 === e ? void 0 : e.transaction : (null === (r = null === (n = o) || void 0 === n ? void 0 : n.spanRecorder) || void 0 === r ? void 0 : r.spans[0]) ? o.spanRecorder.spans[0] : void 0
                    }, t.prototype.setSession = function(t) {
                        return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
                    }, t.prototype.getSession = function() {
                        return this._session
                    }, t.prototype.update = function(e) {
                        if (!e) return this;
                        if ("function" === typeof e) {
                            var n = e(this);
                            return n instanceof t ? n : this
                        }
                        return e instanceof t ? (this._tags = Object(y.__assign)(Object(y.__assign)({}, this._tags), e._tags), this._extra = Object(y.__assign)(Object(y.__assign)({}, this._extra), e._extra), this._contexts = Object(y.__assign)(Object(y.__assign)({}, this._contexts), e._contexts), e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint)) : Object(g.h)(e) && (e = e, this._tags = Object(y.__assign)(Object(y.__assign)({}, this._tags), e.tags), this._extra = Object(y.__assign)(Object(y.__assign)({}, this._extra), e.extra), this._contexts = Object(y.__assign)(Object(y.__assign)({}, this._contexts), e.contexts), e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint)), this
                    }, t.prototype.clear = function() {
                        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this
                    }, t.prototype.addBreadcrumb = function(t, e) {
                        var n = Object(y.__assign)({
                            timestamp: Object(b.a)()
                        }, t);
                        return this._breadcrumbs = void 0 !== e && e >= 0 ? Object(y.__spread)(this._breadcrumbs, [n]).slice(-e) : Object(y.__spread)(this._breadcrumbs, [n]), this._notifyScopeListeners(), this
                    }, t.prototype.clearBreadcrumbs = function() {
                        return this._breadcrumbs = [], this._notifyScopeListeners(), this
                    }, t.prototype.applyToEvent = function(t, e) {
                        var n;
                        if (this._extra && Object.keys(this._extra).length && (t.extra = Object(y.__assign)(Object(y.__assign)({}, this._extra), t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = Object(y.__assign)(Object(y.__assign)({}, this._tags), t.tags)), this._user && Object.keys(this._user).length && (t.user = Object(y.__assign)(Object(y.__assign)({}, this._user), t.user)), this._contexts && Object.keys(this._contexts).length && (t.contexts = Object(y.__assign)(Object(y.__assign)({}, this._contexts), t.contexts)), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
                            t.contexts = Object(y.__assign)({
                                trace: this._span.getTraceContext()
                            }, t.contexts);
                            var r = null === (n = this._span.transaction) || void 0 === n ? void 0 : n.name;
                            r && (t.tags = Object(y.__assign)({
                                transaction: r
                            }, t.tags))
                        }
                        return this._applyFingerprint(t), t.breadcrumbs = Object(y.__spread)(t.breadcrumbs || [], this._breadcrumbs), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, this._notifyEventProcessors(Object(y.__spread)(E(), this._eventProcessors), t, e)
                    }, t.prototype._notifyEventProcessors = function(t, e, n, r) {
                        var o = this;
                        return void 0 === r && (r = 0), new m((function(i, s) {
                            var a = t[r];
                            if (null === e || "function" !== typeof a) i(e);
                            else {
                                var c = a(Object(y.__assign)({}, e), n);
                                Object(g.m)(c) ? c.then((function(e) {
                                    return o._notifyEventProcessors(t, e, n, r + 1).then(i)
                                })).then(null, s) : o._notifyEventProcessors(t, c, n, r + 1).then(i).then(null, s)
                            }
                        }))
                    }, t.prototype._notifyScopeListeners = function() {
                        var t = this;
                        this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((function(e) {
                            e(t)
                        })), this._notifyingListeners = !1)
                    }, t.prototype._applyFingerprint = function(t) {
                        t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                    }, t
                }();

            function E() {
                var t = Object(O.e)();
                return t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [], t.__SENTRY__.globalEventProcessors
            }

            function x(t) {
                E().push(t)
            }
            var w = Object(O.e)(),
                S = "Sentry Logger ",
                k = function() {
                    function t() {
                        this._enabled = !1
                    }
                    return t.prototype.disable = function() {
                        this._enabled = !1
                    }, t.prototype.enable = function() {
                        this._enabled = !0
                    }, t.prototype.log = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._enabled && Object(O.c)((function() {
                            w.console.log(S + "[Log]: " + t.join(" "))
                        }))
                    }, t.prototype.warn = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._enabled && Object(O.c)((function() {
                            w.console.warn(S + "[Warn]: " + t.join(" "))
                        }))
                    }, t.prototype.error = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._enabled && Object(O.c)((function() {
                            w.console.error(S + "[Error]: " + t.join(" "))
                        }))
                    }, t
                }();
            w.__SENTRY__ = w.__SENTRY__ || {};
            var R, T = w.__SENTRY__.logger || (w.__SENTRY__.logger = new k),
                I = n("+A1k");
            ! function(t) {
                t.Ok = "ok", t.Exited = "exited", t.Crashed = "crashed", t.Abnormal = "abnormal"
            }(R || (R = {}));
            var N = n("6PXS"),
                C = function() {
                    function t(t) {
                        this.errors = 0, this.sid = Object(O.i)(), this.timestamp = Date.now(), this.started = Date.now(), this.duration = 0, this.status = R.Ok, t && this.update(t)
                    }
                    return t.prototype.update = function(t) {
                        void 0 === t && (t = {}), t.user && (t.user.ip_address && (this.ipAddress = t.user.ip_address), t.did || (this.did = t.user.id || t.user.email || t.user.username)), this.timestamp = t.timestamp || Date.now(), t.sid && (this.sid = 32 === t.sid.length ? t.sid : Object(O.i)()), t.did && (this.did = "" + t.did), "number" === typeof t.started && (this.started = t.started), "number" === typeof t.duration ? this.duration = t.duration : this.duration = this.timestamp - this.started, t.release && (this.release = t.release), t.environment && (this.environment = t.environment), t.ipAddress && (this.ipAddress = t.ipAddress), t.userAgent && (this.userAgent = t.userAgent), "number" === typeof t.errors && (this.errors = t.errors), t.status && (this.status = t.status)
                    }, t.prototype.close = function(t) {
                        t ? this.update({
                            status: t
                        }) : this.status === R.Ok ? this.update({
                            status: R.Exited
                        }) : this.update()
                    }, t.prototype.toJSON = function() {
                        return Object(N.a)({
                            sid: "" + this.sid,
                            init: !0,
                            started: new Date(this.started).toISOString(),
                            timestamp: new Date(this.timestamp).toISOString(),
                            status: this.status,
                            errors: this.errors,
                            did: "number" === typeof this.did || "string" === typeof this.did ? "" + this.did : void 0,
                            duration: this.duration,
                            attrs: Object(N.a)({
                                release: this.release,
                                environment: this.environment,
                                ip_address: this.ipAddress,
                                user_agent: this.userAgent
                            })
                        })
                    }, t
                }(),
                P = 3,
                D = function() {
                    function t(t, e, n) {
                        void 0 === e && (e = new j), void 0 === n && (n = P), this._version = n, this._stack = [{}], this.getStackTop().scope = e, this.bindClient(t)
                    }
                    return t.prototype.isOlderThan = function(t) {
                        return this._version < t
                    }, t.prototype.bindClient = function(t) {
                        this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
                    }, t.prototype.pushScope = function() {
                        var t = j.clone(this.getScope());
                        return this.getStack().push({
                            client: this.getClient(),
                            scope: t
                        }), t
                    }, t.prototype.popScope = function() {
                        return !(this.getStack().length <= 1) && !!this.getStack().pop()
                    }, t.prototype.withScope = function(t) {
                        var e = this.pushScope();
                        try {
                            t(e)
                        } finally {
                            this.popScope()
                        }
                    }, t.prototype.getClient = function() {
                        return this.getStackTop().client
                    }, t.prototype.getScope = function() {
                        return this.getStackTop().scope
                    }, t.prototype.getStack = function() {
                        return this._stack
                    }, t.prototype.getStackTop = function() {
                        return this._stack[this._stack.length - 1]
                    }, t.prototype.captureException = function(t, e) {
                        var n = this._lastEventId = Object(O.i)(),
                            r = e;
                        if (!e) {
                            var o = void 0;
                            try {
                                throw new Error("Sentry syntheticException")
                            } catch (t) {
                                o = t
                            }
                            r = {
                                originalException: t,
                                syntheticException: o
                            }
                        }
                        return this._invokeClient("captureException", t, Object(y.__assign)(Object(y.__assign)({}, r), {
                            event_id: n
                        })), n
                    }, t.prototype.captureMessage = function(t, e, n) {
                        var r = this._lastEventId = Object(O.i)(),
                            o = n;
                        if (!n) {
                            var i = void 0;
                            try {
                                throw new Error(t)
                            } catch (s) {
                                i = s
                            }
                            o = {
                                originalException: t,
                                syntheticException: i
                            }
                        }
                        return this._invokeClient("captureMessage", t, e, Object(y.__assign)(Object(y.__assign)({}, o), {
                            event_id: r
                        })), r
                    }, t.prototype.captureEvent = function(t, e) {
                        var n = this._lastEventId = Object(O.i)();
                        return this._invokeClient("captureEvent", t, Object(y.__assign)(Object(y.__assign)({}, e), {
                            event_id: n
                        })), n
                    }, t.prototype.lastEventId = function() {
                        return this._lastEventId
                    }, t.prototype.addBreadcrumb = function(t, e) {
                        var n = this.getStackTop(),
                            r = n.scope,
                            o = n.client;
                        if (r && o) {
                            var i = o.getOptions && o.getOptions() || {},
                                s = i.beforeBreadcrumb,
                                a = void 0 === s ? null : s,
                                c = i.maxBreadcrumbs,
                                u = void 0 === c ? 100 : c;
                            if (!(u <= 0)) {
                                var p = Object(b.a)(),
                                    l = Object(y.__assign)({
                                        timestamp: p
                                    }, t),
                                    f = a ? Object(O.c)((function() {
                                        return a(l, e)
                                    })) : l;
                                null !== f && r.addBreadcrumb(f, Math.min(u, 100))
                            }
                        }
                    }, t.prototype.setUser = function(t) {
                        var e = this.getScope();
                        e && e.setUser(t)
                    }, t.prototype.setTags = function(t) {
                        var e = this.getScope();
                        e && e.setTags(t)
                    }, t.prototype.setExtras = function(t) {
                        var e = this.getScope();
                        e && e.setExtras(t)
                    }, t.prototype.setTag = function(t, e) {
                        var n = this.getScope();
                        n && n.setTag(t, e)
                    }, t.prototype.setExtra = function(t, e) {
                        var n = this.getScope();
                        n && n.setExtra(t, e)
                    }, t.prototype.setContext = function(t, e) {
                        var n = this.getScope();
                        n && n.setContext(t, e)
                    }, t.prototype.configureScope = function(t) {
                        var e = this.getStackTop(),
                            n = e.scope,
                            r = e.client;
                        n && r && t(n)
                    }, t.prototype.run = function(t) {
                        var e = L(this);
                        try {
                            t(this)
                        } finally {
                            L(e)
                        }
                    }, t.prototype.getIntegration = function(t) {
                        var e = this.getClient();
                        if (!e) return null;
                        try {
                            return e.getIntegration(t)
                        } catch (n) {
                            return T.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
                        }
                    }, t.prototype.startSpan = function(t) {
                        return this._callExtensionMethod("startSpan", t)
                    }, t.prototype.startTransaction = function(t, e) {
                        return this._callExtensionMethod("startTransaction", t, e)
                    }, t.prototype.traceHeaders = function() {
                        return this._callExtensionMethod("traceHeaders")
                    }, t.prototype.startSession = function(t) {
                        this.endSession();
                        var e = this.getStackTop(),
                            n = e.scope,
                            r = e.client,
                            o = r && r.getOptions() || {},
                            i = o.release,
                            s = o.environment,
                            a = new C(Object(y.__assign)(Object(y.__assign)({
                                release: i,
                                environment: s
                            }, n && {
                                user: n.getUser()
                            }), t));
                        return n && n.setSession(a), a
                    }, t.prototype.endSession = function() {
                        var t = this.getStackTop(),
                            e = t.scope,
                            n = t.client;
                        if (e) {
                            var r = e.getSession && e.getSession();
                            r && (r.close(), n && n.captureSession && n.captureSession(r), e.setSession())
                        }
                    }, t.prototype._invokeClient = function(t) {
                        for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        var o = this.getStackTop(),
                            i = o.scope,
                            s = o.client;
                        s && s[t] && (e = s)[t].apply(e, Object(y.__spread)(n, [i]))
                    }, t.prototype._callExtensionMethod = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        var r = A(),
                            o = r.__SENTRY__;
                        if (o && o.extensions && "function" === typeof o.extensions[t]) return o.extensions[t].apply(this, e);
                        T.warn("Extension method " + t + " couldn't be found, doing nothing.")
                    }, t
                }();

            function A() {
                var t = Object(O.e)();
                return t.__SENTRY__ = t.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, t
            }

            function L(t) {
                var e = A(),
                    n = B(e);
                return F(e, t), n
            }

            function U() {
                var t = A();
                return M(t) && !B(t).isOlderThan(P) || F(t, new D), Object(I.b)() ? function(t) {
                    try {
                        var e = function() {
                            var t = A().__SENTRY__;
                            return t && t.extensions && t.extensions.domain && t.extensions.domain.active
                        }();
                        if (!e) return B(t);
                        if (!M(e) || B(e).isOlderThan(P)) {
                            var n = B(t).getStackTop();
                            F(e, new D(n.client, j.clone(n.scope)))
                        }
                        return B(e)
                    } catch (r) {
                        return B(t)
                    }
                }(t) : B(t)
            }

            function M(t) {
                return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
            }

            function B(t) {
                return t && t.__SENTRY__ && t.__SENTRY__.hub ? t.__SENTRY__.hub : (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = new D, t.__SENTRY__.hub)
            }

            function F(t, e) {
                return !!t && (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = e, !0)
            }
            var q = n("+924"),
                H = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
                W = function() {
                    function t(e) {
                        void 0 === e && (e = {}), this._options = e, this.name = t.id
                    }
                    return t.prototype.setupOnce = function() {
                        x((function(e) {
                            var n = U();
                            if (!n) return e;
                            var r = n.getIntegration(t);
                            if (r) {
                                var o = n.getClient(),
                                    i = o ? o.getOptions() : {},
                                    s = r._mergeOptions(i);
                                if (r._shouldDropEvent(e, s)) return null
                            }
                            return e
                        }))
                    }, t.prototype._shouldDropEvent = function(t, e) {
                        return this._isSentryError(t, e) ? (T.warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(O.d)(t)), !0) : this._isIgnoredError(t, e) ? (T.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(O.d)(t)), !0) : this._isDeniedUrl(t, e) ? (T.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + Object(O.d)(t) + ".\nUrl: " + this._getEventFilterUrl(t)), !0) : !this._isAllowedUrl(t, e) && (T.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + Object(O.d)(t) + ".\nUrl: " + this._getEventFilterUrl(t)), !0)
                    }, t.prototype._isSentryError = function(t, e) {
                        if (!e.ignoreInternal) return !1;
                        try {
                            return t && t.exception && t.exception.values && t.exception.values[0] && "SentryError" === t.exception.values[0].type || !1
                        } catch (n) {
                            return !1
                        }
                    }, t.prototype._isIgnoredError = function(t, e) {
                        return !(!e.ignoreErrors || !e.ignoreErrors.length) && this._getPossibleEventMessages(t).some((function(t) {
                            return e.ignoreErrors.some((function(e) {
                                return Object(q.a)(t, e)
                            }))
                        }))
                    }, t.prototype._isDeniedUrl = function(t, e) {
                        if (!e.denyUrls || !e.denyUrls.length) return !1;
                        var n = this._getEventFilterUrl(t);
                        return !!n && e.denyUrls.some((function(t) {
                            return Object(q.a)(n, t)
                        }))
                    }, t.prototype._isAllowedUrl = function(t, e) {
                        if (!e.allowUrls || !e.allowUrls.length) return !0;
                        var n = this._getEventFilterUrl(t);
                        return !n || e.allowUrls.some((function(t) {
                            return Object(q.a)(n, t)
                        }))
                    }, t.prototype._mergeOptions = function(t) {
                        return void 0 === t && (t = {}), {
                            allowUrls: Object(y.__spread)(this._options.whitelistUrls || [], this._options.allowUrls || [], t.whitelistUrls || [], t.allowUrls || []),
                            denyUrls: Object(y.__spread)(this._options.blacklistUrls || [], this._options.denyUrls || [], t.blacklistUrls || [], t.denyUrls || []),
                            ignoreErrors: Object(y.__spread)(this._options.ignoreErrors || [], t.ignoreErrors || [], H),
                            ignoreInternal: "undefined" === typeof this._options.ignoreInternal || this._options.ignoreInternal
                        }
                    }, t.prototype._getPossibleEventMessages = function(t) {
                        if (t.message) return [t.message];
                        if (t.exception) try {
                            var e = t.exception.values && t.exception.values[0] || {},
                                n = e.type,
                                r = void 0 === n ? "" : n,
                                o = e.value,
                                i = void 0 === o ? "" : o;
                            return ["" + i, r + ": " + i]
                        } catch (s) {
                            return T.error("Cannot extract message for event " + Object(O.d)(t)), []
                        }
                        return []
                    }, t.prototype._getEventFilterUrl = function(t) {
                        try {
                            if (t.stacktrace) {
                                var e = t.stacktrace.frames;
                                return e && e[e.length - 1].filename || null
                            }
                            if (t.exception) {
                                var n = t.exception.values && t.exception.values[0].stacktrace && t.exception.values[0].stacktrace.frames;
                                return n && n[n.length - 1].filename || null
                            }
                            return null
                        } catch (r) {
                            return T.error("Cannot extract url for event " + Object(O.d)(t)), null
                        }
                    }, t.id = "InboundFilters", t
                }();
            var Y = Object.setPrototypeOf || ({
                    __proto__: []
                }
                instanceof Array ? function(t, e) {
                    return t.__proto__ = e, t
                } : function(t, e) {
                    for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
                    return t
                });
            var J = function(t) {
                    function e(e) {
                        var n = this.constructor,
                            r = t.call(this, e) || this;
                        return r.message = e, r.name = n.prototype.constructor.name, Y(r, n.prototype), r
                    }
                    return Object(y.__extends)(e, t), e
                }(Error),
                G = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
                X = function() {
                    function t(t) {
                        "string" === typeof t ? this._fromString(t) : this._fromComponents(t), this._validate()
                    }
                    return t.prototype.toString = function(t) {
                        void 0 === t && (t = !1);
                        var e = this,
                            n = e.host,
                            r = e.path,
                            o = e.pass,
                            i = e.port,
                            s = e.projectId;
                        return e.protocol + "://" + e.user + (t && o ? ":" + o : "") + "@" + n + (i ? ":" + i : "") + "/" + (r ? r + "/" : r) + s
                    }, t.prototype._fromString = function(t) {
                        var e = G.exec(t);
                        if (!e) throw new J("Invalid Dsn");
                        var n = Object(y.__read)(e.slice(1), 6),
                            r = n[0],
                            o = n[1],
                            i = n[2],
                            s = void 0 === i ? "" : i,
                            a = n[3],
                            c = n[4],
                            u = void 0 === c ? "" : c,
                            p = "",
                            l = n[5],
                            f = l.split("/");
                        if (f.length > 1 && (p = f.slice(0, -1).join("/"), l = f.pop()), l) {
                            var d = l.match(/^\d+/);
                            d && (l = d[0])
                        }
                        this._fromComponents({
                            host: a,
                            pass: s,
                            path: p,
                            projectId: l,
                            port: u,
                            protocol: r,
                            user: o
                        })
                    }, t.prototype._fromComponents = function(t) {
                        this.protocol = t.protocol, this.user = t.user, this.pass = t.pass || "", this.host = t.host, this.port = t.port || "", this.path = t.path || "", this.projectId = t.projectId
                    }, t.prototype._validate = function() {
                        var t = this;
                        if (["protocol", "user", "host", "projectId"].forEach((function(e) {
                                if (!t[e]) throw new J("Invalid Dsn: " + e + " missing")
                            })), !this.projectId.match(/^\d+$/)) throw new J("Invalid Dsn: Invalid projectId " + this.projectId);
                        if ("http" !== this.protocol && "https" !== this.protocol) throw new J("Invalid Dsn: Invalid protocol " + this.protocol);
                        if (this.port && isNaN(parseInt(this.port, 10))) throw new J("Invalid Dsn: Invalid port " + this.port)
                    }, t
                }(),
                z = [];

            function V(t) {
                var e = {};
                return function(t) {
                    var e = t.defaultIntegrations && Object(y.__spread)(t.defaultIntegrations) || [],
                        n = t.integrations,
                        r = [];
                    if (Array.isArray(n)) {
                        var o = n.map((function(t) {
                                return t.name
                            })),
                            i = [];
                        e.forEach((function(t) {
                            -1 === o.indexOf(t.name) && -1 === i.indexOf(t.name) && (r.push(t), i.push(t.name))
                        })), n.forEach((function(t) {
                            -1 === i.indexOf(t.name) && (r.push(t), i.push(t.name))
                        }))
                    } else "function" === typeof n ? (r = n(e), r = Array.isArray(r) ? r : [r]) : r = Object(y.__spread)(e);
                    var s = r.map((function(t) {
                        return t.name
                    }));
                    return -1 !== s.indexOf("Debug") && r.push.apply(r, Object(y.__spread)(r.splice(s.indexOf("Debug"), 1))), r
                }(t).forEach((function(t) {
                    e[t.name] = t,
                        function(t) {
                            -1 === z.indexOf(t.name) && (t.setupOnce(x, U), z.push(t.name), T.log("Integration installed: " + t.name))
                        }(t)
                })), e
            }
            var $, K = function() {
                function t(t, e) {
                    this._integrations = {}, this._processing = 0, this._backend = new t(e), this._options = e, e.dsn && (this._dsn = new X(e.dsn))
                }
                return t.prototype.captureException = function(t, e, n) {
                    var r = this,
                        o = e && e.event_id;
                    return this._process(this._getBackend().eventFromException(t, e).then((function(t) {
                        return r._captureEvent(t, e, n)
                    })).then((function(t) {
                        o = t
                    }))), o
                }, t.prototype.captureMessage = function(t, e, n, r) {
                    var o = this,
                        i = n && n.event_id,
                        s = Object(g.i)(t) ? this._getBackend().eventFromMessage(String(t), e, n) : this._getBackend().eventFromException(t, n);
                    return this._process(s.then((function(t) {
                        return o._captureEvent(t, n, r)
                    })).then((function(t) {
                        i = t
                    }))), i
                }, t.prototype.captureEvent = function(t, e, n) {
                    var r = e && e.event_id;
                    return this._process(this._captureEvent(t, e, n).then((function(t) {
                        r = t
                    }))), r
                }, t.prototype.captureSession = function(t) {
                    t.release ? this._sendSession(t) : T.warn("Discarded session because of missing release")
                }, t.prototype.getDsn = function() {
                    return this._dsn
                }, t.prototype.getOptions = function() {
                    return this._options
                }, t.prototype.flush = function(t) {
                    var e = this;
                    return this._isClientProcessing(t).then((function(n) {
                        return e._getBackend().getTransport().close(t).then((function(t) {
                            return n && t
                        }))
                    }))
                }, t.prototype.close = function(t) {
                    var e = this;
                    return this.flush(t).then((function(t) {
                        return e.getOptions().enabled = !1, t
                    }))
                }, t.prototype.setupIntegrations = function() {
                    this._isEnabled() && (this._integrations = V(this._options))
                }, t.prototype.getIntegration = function(t) {
                    try {
                        return this._integrations[t.id] || null
                    } catch (e) {
                        return T.warn("Cannot retrieve integration " + t.id + " from the current Client"), null
                    }
                }, t.prototype._updateSessionFromEvent = function(t, e) {
                    var n, r, o, i = !1,
                        s = !1,
                        a = e.exception && e.exception.values;
                    if (a) {
                        s = !0;
                        try {
                            for (var c = Object(y.__values)(a), u = c.next(); !u.done; u = c.next()) {
                                var p = u.value.mechanism;
                                if (p && !1 === p.handled) {
                                    i = !0;
                                    break
                                }
                            }
                        } catch (h) {
                            n = {
                                error: h
                            }
                        } finally {
                            try {
                                u && !u.done && (r = c.return) && r.call(c)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    }
                    var l = e.user;
                    if (!t.userAgent) {
                        var f = e.request ? e.request.headers : {};
                        for (var d in f)
                            if ("user-agent" === d.toLowerCase()) {
                                o = f[d];
                                break
                            }
                    }
                    t.update(Object(y.__assign)(Object(y.__assign)({}, i && {
                        status: R.Crashed
                    }), {
                        user: l,
                        userAgent: o,
                        errors: t.errors + Number(s || i)
                    }))
                }, t.prototype._sendSession = function(t) {
                    this._getBackend().sendSession(t)
                }, t.prototype._isClientProcessing = function(t) {
                    var e = this;
                    return new m((function(n) {
                        var r = 0,
                            o = setInterval((function() {
                                0 == e._processing ? (clearInterval(o), n(!0)) : (r += 1, t && r >= t && (clearInterval(o), n(!1)))
                            }), 1)
                    }))
                }, t.prototype._getBackend = function() {
                    return this._backend
                }, t.prototype._isEnabled = function() {
                    return !1 !== this.getOptions().enabled && void 0 !== this._dsn
                }, t.prototype._prepareEvent = function(t, e, n) {
                    var r = this,
                        o = this.getOptions().normalizeDepth,
                        i = void 0 === o ? 3 : o,
                        s = Object(y.__assign)(Object(y.__assign)({}, t), {
                            event_id: t.event_id || (n && n.event_id ? n.event_id : Object(O.i)()),
                            timestamp: t.timestamp || Object(b.a)()
                        });
                    this._applyClientOptions(s), this._applyIntegrationsMetadata(s);
                    var a = e;
                    n && n.captureContext && (a = j.clone(a).update(n.captureContext));
                    var c = m.resolve(s);
                    return a && (c = a.applyToEvent(s, n)), c.then((function(t) {
                        return "number" === typeof i && i > 0 ? r._normalizeEvent(t, i) : t
                    }))
                }, t.prototype._normalizeEvent = function(t, e) {
                    if (!t) return null;
                    var n = Object(y.__assign)(Object(y.__assign)(Object(y.__assign)(Object(y.__assign)(Object(y.__assign)({}, t), t.breadcrumbs && {
                        breadcrumbs: t.breadcrumbs.map((function(t) {
                            return Object(y.__assign)(Object(y.__assign)({}, t), t.data && {
                                data: Object(N.d)(t.data, e)
                            })
                        }))
                    }), t.user && {
                        user: Object(N.d)(t.user, e)
                    }), t.contexts && {
                        contexts: Object(N.d)(t.contexts, e)
                    }), t.extra && {
                        extra: Object(N.d)(t.extra, e)
                    });
                    return t.contexts && t.contexts.trace && (n.contexts.trace = t.contexts.trace), n
                }, t.prototype._applyClientOptions = function(t) {
                    var e = this.getOptions(),
                        n = e.environment,
                        r = e.release,
                        o = e.dist,
                        i = e.maxValueLength,
                        s = void 0 === i ? 250 : i;
                    "environment" in t || (t.environment = "environment" in e ? n : "production"), void 0 === t.release && void 0 !== r && (t.release = r), void 0 === t.dist && void 0 !== o && (t.dist = o), t.message && (t.message = Object(q.d)(t.message, s));
                    var a = t.exception && t.exception.values && t.exception.values[0];
                    a && a.value && (a.value = Object(q.d)(a.value, s));
                    var c = t.request;
                    c && c.url && (c.url = Object(q.d)(c.url, s))
                }, t.prototype._applyIntegrationsMetadata = function(t) {
                    var e = t.sdk,
                        n = Object.keys(this._integrations);
                    e && n.length > 0 && (e.integrations = n)
                }, t.prototype._sendEvent = function(t) {
                    this._getBackend().sendEvent(t)
                }, t.prototype._captureEvent = function(t, e, n) {
                    return this._processEvent(t, e, n).then((function(t) {
                        return t.event_id
                    }), (function(t) {
                        T.error(t)
                    }))
                }, t.prototype._processEvent = function(t, e, n) {
                    var r = this,
                        o = this.getOptions(),
                        i = o.beforeSend,
                        s = o.sampleRate;
                    if (!this._isEnabled()) return m.reject(new J("SDK not enabled, will not send event."));
                    var a = "transaction" === t.type;
                    return !a && "number" === typeof s && Math.random() > s ? m.reject(new J("Discarding event because it's not included in the random sample (sampling rate = " + s + ")")) : this._prepareEvent(t, n, e).then((function(t) {
                        if (null === t) throw new J("An event processor returned null, will not send event.");
                        if (e && e.data && !0 === e.data.__sentry__ || a || !i) return t;
                        var n = i(t, e);
                        if ("undefined" === typeof n) throw new J("`beforeSend` method has to return `null` or a valid event.");
                        return Object(g.m)(n) ? n.then((function(t) {
                            return t
                        }), (function(t) {
                            throw new J("beforeSend rejected with " + t)
                        })) : n
                    })).then((function(t) {
                        if (null === t) throw new J("`beforeSend` returned `null`, will not send event.");
                        var e = n && n.getSession && n.getSession();
                        return !a && e && r._updateSessionFromEvent(e, t), r._sendEvent(t), t
                    })).then(null, (function(t) {
                        if (t instanceof J) throw t;
                        throw r.captureException(t, {
                            data: {
                                __sentry__: !0
                            },
                            originalException: t
                        }), new J("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + t)
                    }))
                }, t.prototype._process = function(t) {
                    var e = this;
                    this._processing += 1, t.then((function(t) {
                        return e._processing -= 1, t
                    }), (function(t) {
                        return e._processing -= 1, t
                    }))
                }, t
            }();
            ! function(t) {
                t.Unknown = "unknown", t.Skipped = "skipped", t.Success = "success", t.RateLimit = "rate_limit", t.Invalid = "invalid", t.Failed = "failed"
            }($ || ($ = {})),
            function(t) {
                t.fromHttpCode = function(e) {
                    return e >= 200 && e < 300 ? t.Success : 429 === e ? t.RateLimit : e >= 400 && e < 500 ? t.Invalid : e >= 500 ? t.Failed : t.Unknown
                }
            }($ || ($ = {}));
            var Q, Z = function() {
                    function t() {}
                    return t.prototype.sendEvent = function(t) {
                        return m.resolve({
                            reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                            status: $.Skipped
                        })
                    }, t.prototype.close = function(t) {
                        return m.resolve(!0)
                    }, t
                }(),
                tt = function() {
                    function t(t) {
                        this._options = t, this._options.dsn || T.warn("No DSN provided, backend will not do anything."), this._transport = this._setupTransport()
                    }
                    return t.prototype.eventFromException = function(t, e) {
                        throw new J("Backend has to implement `eventFromException` method")
                    }, t.prototype.eventFromMessage = function(t, e, n) {
                        throw new J("Backend has to implement `eventFromMessage` method")
                    }, t.prototype.sendEvent = function(t) {
                        this._transport.sendEvent(t).then(null, (function(t) {
                            T.error("Error while sending event: " + t)
                        }))
                    }, t.prototype.sendSession = function(t) {
                        this._transport.sendSession ? this._transport.sendSession(t).then(null, (function(t) {
                            T.error("Error while sending session: " + t)
                        })) : T.warn("Dropping session because custom transport doesn't implement sendSession")
                    }, t.prototype.getTransport = function() {
                        return this._transport
                    }, t.prototype._setupTransport = function() {
                        return new Z
                    }, t
                }();

            function et() {
                if (!("fetch" in Object(O.e)())) return !1;
                try {
                    return new Headers, new Request(""), new Response, !0
                } catch (t) {
                    return !1
                }
            }

            function nt(t) {
                return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
            }

            function rt() {
                if (!et()) return !1;
                try {
                    return new Request("_", {
                        referrerPolicy: "origin"
                    }), !0
                } catch (t) {
                    return !1
                }
            }! function(t) {
                t.Fatal = "fatal", t.Error = "error", t.Warning = "warning", t.Log = "log", t.Info = "info", t.Debug = "debug", t.Critical = "critical"
            }(Q || (Q = {})),
            function(t) {
                t.fromString = function(e) {
                    switch (e) {
                        case "debug":
                            return t.Debug;
                        case "info":
                            return t.Info;
                        case "warn":
                        case "warning":
                            return t.Warning;
                        case "error":
                            return t.Error;
                        case "fatal":
                            return t.Fatal;
                        case "critical":
                            return t.Critical;
                        case "log":
                        default:
                            return t.Log
                    }
                }
            }(Q || (Q = {}));
            var ot = "?",
                it = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                st = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                at = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                ct = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                ut = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                pt = /Minified React error #\d+;/i;

            function lt(t) {
                var e = null,
                    n = 0;
                t && ("number" === typeof t.framesToPop ? n = t.framesToPop : pt.test(t.message) && (n = 1));
                try {
                    if (e = function(t) {
                            if (!t || !t.stacktrace) return null;
                            for (var e, n = t.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, o = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, i = n.split("\n"), s = [], a = 0; a < i.length; a += 2) {
                                var c = null;
                                (e = r.exec(i[a])) ? c = {
                                    url: e[2],
                                    func: e[3],
                                    args: [],
                                    line: +e[1],
                                    column: null
                                }: (e = o.exec(i[a])) && (c = {
                                    url: e[6],
                                    func: e[3] || e[4],
                                    args: e[5] ? e[5].split(",") : [],
                                    line: +e[1],
                                    column: +e[2]
                                }), c && (!c.func && c.line && (c.func = ot), s.push(c))
                            }
                            if (!s.length) return null;
                            return {
                                message: dt(t),
                                name: t.name,
                                stack: s
                            }
                        }(t)) return ft(e, n)
                } catch (r) {}
                try {
                    if (e = function(t) {
                            if (!t || !t.stack) return null;
                            for (var e, n, r, o = [], i = t.stack.split("\n"), s = 0; s < i.length; ++s) {
                                if (n = it.exec(i[s])) {
                                    var a = n[2] && 0 === n[2].indexOf("native");
                                    n[2] && 0 === n[2].indexOf("eval") && (e = ut.exec(n[2])) && (n[2] = e[1], n[3] = e[2], n[4] = e[3]), r = {
                                        url: n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2],
                                        func: n[1] || ot,
                                        args: a ? [n[2]] : [],
                                        line: n[3] ? +n[3] : null,
                                        column: n[4] ? +n[4] : null
                                    }
                                } else if (n = at.exec(i[s])) r = {
                                    url: n[2],
                                    func: n[1] || ot,
                                    args: [],
                                    line: +n[3],
                                    column: n[4] ? +n[4] : null
                                };
                                else {
                                    if (!(n = st.exec(i[s]))) continue;
                                    n[3] && n[3].indexOf(" > eval") > -1 && (e = ct.exec(n[3])) ? (n[1] = n[1] || "eval", n[3] = e[1], n[4] = e[2], n[5] = "") : 0 !== s || n[5] || void 0 === t.columnNumber || (o[0].column = t.columnNumber + 1), r = {
                                        url: n[3],
                                        func: n[1] || ot,
                                        args: n[2] ? n[2].split(",") : [],
                                        line: n[4] ? +n[4] : null,
                                        column: n[5] ? +n[5] : null
                                    }
                                }!r.func && r.line && (r.func = ot), o.push(r)
                            }
                            if (!o.length) return null;
                            return {
                                message: dt(t),
                                name: t.name,
                                stack: o
                            }
                        }(t)) return ft(e, n)
                } catch (r) {}
                return {
                    message: dt(t),
                    name: t && t.name,
                    stack: [],
                    failed: !0
                }
            }

            function ft(t, e) {
                try {
                    return Object(y.__assign)(Object(y.__assign)({}, t), {
                        stack: t.stack.slice(e)
                    })
                } catch (n) {
                    return t
                }
            }

            function dt(t) {
                var e = t && t.message;
                return e ? e.error && "string" === typeof e.error.message ? e.error.message : e : "No error message"
            }
            var ht = 50;

            function _t(t) {
                var e = yt(t.stack),
                    n = {
                        type: t.name,
                        value: t.message
                    };
                return e && e.length && (n.stacktrace = {
                    frames: e
                }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
            }

            function vt(t) {
                return {
                    exception: {
                        values: [_t(t)]
                    }
                }
            }

            function yt(t) {
                if (!t || !t.length) return [];
                var e = t,
                    n = e[0].func || "",
                    r = e[e.length - 1].func || "";
                return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (e = e.slice(1)), -1 !== r.indexOf("sentryWrapped") && (e = e.slice(0, -1)), e.slice(0, ht).map((function(t) {
                    return {
                        colno: null === t.column ? void 0 : t.column,
                        filename: t.url || e[0].url,
                        function: t.func || "?",
                        in_app: !0,
                        lineno: null === t.line ? void 0 : t.line
                    }
                })).reverse()
            }

            function gt(t, e, n) {
                var r;
                if (void 0 === n && (n = {}), Object(g.e)(t) && t.error) return r = vt(lt(t = t.error));
                if (Object(g.a)(t) || Object(g.b)(t)) {
                    var o = t,
                        i = o.name || (Object(g.a)(o) ? "DOMError" : "DOMException"),
                        s = o.message ? i + ": " + o.message : i;
                    return r = bt(s, e, n), Object(O.b)(r, s), "code" in o && (r.tags = Object(y.__assign)(Object(y.__assign)({}, r.tags), {
                        "DOMException.code": "" + o.code
                    })), r
                }
                return Object(g.d)(t) ? r = vt(lt(t)) : Object(g.h)(t) || Object(g.f)(t) ? (r = function(t, e, n) {
                    var r = {
                        exception: {
                            values: [{
                                type: Object(g.f)(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                                value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Object(N.b)(t)
                            }]
                        },
                        extra: {
                            __serialized__: Object(N.e)(t)
                        }
                    };
                    if (e) {
                        var o = yt(lt(e).stack);
                        r.stacktrace = {
                            frames: o
                        }
                    }
                    return r
                }(t, e, n.rejection), Object(O.a)(r, {
                    synthetic: !0
                }), r) : (r = bt(t, e, n), Object(O.b)(r, "" + t, void 0), Object(O.a)(r, {
                    synthetic: !0
                }), r)
            }

            function bt(t, e, n) {
                void 0 === n && (n = {});
                var r = {
                    message: t
                };
                if (n.attachStacktrace && e) {
                    var o = yt(lt(e).stack);
                    r.stacktrace = {
                        frames: o
                    }
                }
                return r
            }

            function mt(t, e) {
                return {
                    body: JSON.stringify({
                        sent_at: (new Date).toISOString()
                    }) + "\n" + JSON.stringify({
                        type: "session"
                    }) + "\n" + JSON.stringify(t),
                    type: "session",
                    url: e.getEnvelopeEndpointWithUrlEncodedAuth()
                }
            }

            function Ot(t, e) {
                var n = t.tags || {},
                    r = n.__sentry_samplingMethod,
                    o = n.__sentry_sampleRate,
                    i = Object(y.__rest)(n, ["__sentry_samplingMethod", "__sentry_sampleRate"]);
                t.tags = i;
                var s = "transaction" === t.type,
                    a = {
                        body: JSON.stringify(t),
                        type: t.type || "event",
                        url: s ? e.getEnvelopeEndpointWithUrlEncodedAuth() : e.getStoreEndpointWithUrlEncodedAuth()
                    };
                if (s) {
                    var c = JSON.stringify({
                        event_id: t.event_id,
                        sent_at: (new Date).toISOString()
                    }) + "\n" + JSON.stringify({
                        type: t.type,
                        sample_rates: [{
                            id: r,
                            rate: o
                        }]
                    }) + "\n" + a.body;
                    a.body = c
                }
                return a
            }
            var jt = function() {
                    function t(t) {
                        this.dsn = t, this._dsnObject = new X(t)
                    }
                    return t.prototype.getDsn = function() {
                        return this._dsnObject
                    }, t.prototype.getBaseApiEndpoint = function() {
                        var t = this._dsnObject,
                            e = t.protocol ? t.protocol + ":" : "",
                            n = t.port ? ":" + t.port : "";
                        return e + "//" + t.host + n + (t.path ? "/" + t.path : "") + "/api/"
                    }, t.prototype.getStoreEndpoint = function() {
                        return this._getIngestEndpoint("store")
                    }, t.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                        return this.getStoreEndpoint() + "?" + this._encodedAuth()
                    }, t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
                        return this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
                    }, t.prototype.getStoreEndpointPath = function() {
                        var t = this._dsnObject;
                        return (t.path ? "/" + t.path : "") + "/api/" + t.projectId + "/store/"
                    }, t.prototype.getRequestHeaders = function(t, e) {
                        var n = this._dsnObject,
                            r = ["Sentry sentry_version=7"];
                        return r.push("sentry_client=" + t + "/" + e), r.push("sentry_key=" + n.user), n.pass && r.push("sentry_secret=" + n.pass), {
                            "Content-Type": "application/json",
                            "X-Sentry-Auth": r.join(", ")
                        }
                    }, t.prototype.getReportDialogEndpoint = function(t) {
                        void 0 === t && (t = {});
                        var e = this._dsnObject,
                            n = this.getBaseApiEndpoint() + "embed/error-page/",
                            r = [];
                        for (var o in r.push("dsn=" + e.toString()), t)
                            if ("dsn" !== o)
                                if ("user" === o) {
                                    if (!t.user) continue;
                                    t.user.name && r.push("name=" + encodeURIComponent(t.user.name)), t.user.email && r.push("email=" + encodeURIComponent(t.user.email))
                                } else r.push(encodeURIComponent(o) + "=" + encodeURIComponent(t[o]));
                        return r.length ? n + "?" + r.join("&") : n
                    }, t.prototype._getEnvelopeEndpoint = function() {
                        return this._getIngestEndpoint("envelope")
                    }, t.prototype._getIngestEndpoint = function(t) {
                        return "" + this.getBaseApiEndpoint() + this._dsnObject.projectId + "/" + t + "/"
                    }, t.prototype._encodedAuth = function() {
                        var t = {
                            sentry_key: this._dsnObject.user,
                            sentry_version: "7"
                        };
                        return Object(N.f)(t)
                    }, t
                }(),
                Et = function() {
                    function t(t) {
                        this._limit = t, this._buffer = []
                    }
                    return t.prototype.isReady = function() {
                        return void 0 === this._limit || this.length() < this._limit
                    }, t.prototype.add = function(t) {
                        var e = this;
                        return this.isReady() ? (-1 === this._buffer.indexOf(t) && this._buffer.push(t), t.then((function() {
                            return e.remove(t)
                        })).then(null, (function() {
                            return e.remove(t).then(null, (function() {}))
                        })), t) : m.reject(new J("Not adding Promise due to buffer limit reached."))
                    }, t.prototype.remove = function(t) {
                        return this._buffer.splice(this._buffer.indexOf(t), 1)[0]
                    }, t.prototype.length = function() {
                        return this._buffer.length
                    }, t.prototype.drain = function(t) {
                        var e = this;
                        return new m((function(n) {
                            var r = setTimeout((function() {
                                t && t > 0 && n(!1)
                            }), t);
                            m.all(e._buffer).then((function() {
                                clearTimeout(r), n(!0)
                            })).then(null, (function() {
                                n(!0)
                            }))
                        }))
                    }, t
                }(),
                xt = function() {
                    function t(t) {
                        this.options = t, this._buffer = new Et(30), this._rateLimits = {}, this._api = new jt(this.options.dsn), this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
                    }
                    return t.prototype.sendEvent = function(t) {
                        throw new J("Transport Class has to implement `sendEvent` method")
                    }, t.prototype.close = function(t) {
                        return this._buffer.drain(t)
                    }, t.prototype._handleResponse = function(t) {
                        var e = t.requestType,
                            n = t.response,
                            r = t.headers,
                            o = t.resolve,
                            i = t.reject,
                            s = $.fromHttpCode(n.status);
                        this._handleRateLimit(r) && T.warn("Too many requests, backing off until: " + this._disabledUntil(e)), s !== $.Success ? i(n) : o({
                            status: s
                        })
                    }, t.prototype._disabledUntil = function(t) {
                        return this._rateLimits[t] || this._rateLimits.all
                    }, t.prototype._isRateLimited = function(t) {
                        return this._disabledUntil(t) > new Date(Date.now())
                    }, t.prototype._handleRateLimit = function(t) {
                        var e, n, r, o, i = Date.now(),
                            s = t["x-sentry-rate-limits"],
                            a = t["retry-after"];
                        if (s) {
                            try {
                                for (var c = Object(y.__values)(s.trim().split(",")), u = c.next(); !u.done; u = c.next()) {
                                    var p = u.value.split(":", 2),
                                        l = parseInt(p[0], 10),
                                        f = 1e3 * (isNaN(l) ? 60 : l);
                                    try {
                                        for (var d = (r = void 0, Object(y.__values)(p[1].split(";"))), h = d.next(); !h.done; h = d.next()) {
                                            var _ = h.value;
                                            this._rateLimits[_ || "all"] = new Date(i + f)
                                        }
                                    } catch (v) {
                                        r = {
                                            error: v
                                        }
                                    } finally {
                                        try {
                                            h && !h.done && (o = d.return) && o.call(d)
                                        } finally {
                                            if (r) throw r.error
                                        }
                                    }
                                }
                            } catch (g) {
                                e = {
                                    error: g
                                }
                            } finally {
                                try {
                                    u && !u.done && (n = c.return) && n.call(c)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            return !0
                        }
                        return !!a && (this._rateLimits.all = new Date(i + Object(O.g)(i, a)), !0)
                    }, t
                }(),
                wt = Object(O.e)(),
                St = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return Object(y.__extends)(e, t), e.prototype.sendEvent = function(t) {
                        return this._sendRequest(Ot(t, this._api), t)
                    }, e.prototype.sendSession = function(t) {
                        return this._sendRequest(mt(t, this._api), t)
                    }, e.prototype._sendRequest = function(t, e) {
                        var n = this;
                        if (this._isRateLimited(t.type)) return Promise.reject({
                            event: e,
                            type: t.type,
                            reason: "Transport locked till " + this._disabledUntil(t.type) + " due to too many requests.",
                            status: 429
                        });
                        var r = {
                            body: t.body,
                            method: "POST",
                            referrerPolicy: rt() ? "origin" : ""
                        };
                        return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters), void 0 !== this.options.headers && (r.headers = this.options.headers), this._buffer.add(new m((function(e, o) {
                            wt.fetch(t.url, r).then((function(r) {
                                var i = {
                                    "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
                                    "retry-after": r.headers.get("Retry-After")
                                };
                                n._handleResponse({
                                    requestType: t.type,
                                    response: r,
                                    headers: i,
                                    resolve: e,
                                    reject: o
                                })
                            })).catch(o)
                        })))
                    }, e
                }(xt),
                kt = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return Object(y.__extends)(e, t), e.prototype.sendEvent = function(t) {
                        return this._sendRequest(Ot(t, this._api), t)
                    }, e.prototype.sendSession = function(t) {
                        return this._sendRequest(mt(t, this._api), t)
                    }, e.prototype._sendRequest = function(t, e) {
                        var n = this;
                        return this._isRateLimited(t.type) ? Promise.reject({
                            event: e,
                            type: t.type,
                            reason: "Transport locked till " + this._disabledUntil(t.type) + " due to too many requests.",
                            status: 429
                        }) : this._buffer.add(new m((function(e, r) {
                            var o = new XMLHttpRequest;
                            for (var i in o.onreadystatechange = function() {
                                    if (4 === o.readyState) {
                                        var i = {
                                            "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
                                            "retry-after": o.getResponseHeader("Retry-After")
                                        };
                                        n._handleResponse({
                                            requestType: t.type,
                                            response: o,
                                            headers: i,
                                            resolve: e,
                                            reject: r
                                        })
                                    }
                                }, o.open("POST", t.url), n.options.headers) n.options.headers.hasOwnProperty(i) && o.setRequestHeader(i, n.options.headers[i]);
                            o.send(t.body)
                        })))
                    }, e
                }(xt),
                Rt = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return Object(y.__extends)(e, t), e.prototype.eventFromException = function(t, e) {
                        return function(t, e, n) {
                            var r = gt(e, n && n.syntheticException || void 0, {
                                attachStacktrace: t.attachStacktrace
                            });
                            return Object(O.a)(r, {
                                handled: !0,
                                type: "generic"
                            }), r.level = Q.Error, n && n.event_id && (r.event_id = n.event_id), m.resolve(r)
                        }(this._options, t, e)
                    }, e.prototype.eventFromMessage = function(t, e, n) {
                        return void 0 === e && (e = Q.Info),
                            function(t, e, n, r) {
                                void 0 === n && (n = Q.Info);
                                var o = bt(e, r && r.syntheticException || void 0, {
                                    attachStacktrace: t.attachStacktrace
                                });
                                return o.level = n, r && r.event_id && (o.event_id = r.event_id), m.resolve(o)
                            }(this._options, t, e, n)
                    }, e.prototype._setupTransport = function() {
                        if (!this._options.dsn) return t.prototype._setupTransport.call(this);
                        var e = Object(y.__assign)(Object(y.__assign)({}, this._options.transportOptions), {
                            dsn: this._options.dsn
                        });
                        return this._options.transport ? new this._options.transport(e) : et() ? new St(e) : new kt(e)
                    }, e
                }(tt);

            function Tt(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                var r = U();
                if (r && r[t]) return r[t].apply(r, Object(y.__spread)(e));
                throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
            }

            function It(t, e) {
                var n;
                try {
                    throw new Error("Sentry syntheticException")
                } catch (t) {
                    n = t
                }
                return Tt("captureException", t, {
                    captureContext: e,
                    originalException: t,
                    syntheticException: n
                })
            }

            function Nt(t) {
                Tt("withScope", t)
            }
            var Ct = 0;

            function Pt() {
                return Ct > 0
            }

            function Dt() {
                Ct += 1, setTimeout((function() {
                    Ct -= 1
                }))
            }

            function At(t, e, n) {
                if (void 0 === e && (e = {}), "function" !== typeof t) return t;
                try {
                    if (t.__sentry__) return t;
                    if (t.__sentry_wrapped__) return t.__sentry_wrapped__
                } catch (i) {
                    return t
                }
                var r = function() {
                    var r = Array.prototype.slice.call(arguments);
                    try {
                        n && "function" === typeof n && n.apply(this, arguments);
                        var o = r.map((function(t) {
                            return At(t, e)
                        }));
                        return t.handleEvent ? t.handleEvent.apply(this, o) : t.apply(this, o)
                    } catch (i) {
                        throw Dt(), Nt((function(t) {
                            t.addEventProcessor((function(t) {
                                var n = Object(y.__assign)({}, t);
                                return e.mechanism && (Object(O.b)(n, void 0, void 0), Object(O.a)(n, e.mechanism)), n.extra = Object(y.__assign)(Object(y.__assign)({}, n.extra), {
                                    arguments: r
                                }), n
                            })), It(i)
                        })), i
                    }
                };
                try {
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o])
                } catch (s) {}
                t.prototype = t.prototype || {}, r.prototype = t.prototype, Object.defineProperty(t, "__sentry_wrapped__", {
                    enumerable: !1,
                    value: r
                }), Object.defineProperties(r, {
                    __sentry__: {
                        enumerable: !1,
                        value: !0
                    },
                    __sentry_original__: {
                        enumerable: !1,
                        value: t
                    }
                });
                try {
                    Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                        get: function() {
                            return t.name
                        }
                    })
                } catch (s) {}
                return r
            }

            function Lt(t) {
                if (void 0 === t && (t = {}), t.eventId)
                    if (t.dsn) {
                        var e = document.createElement("script");
                        e.async = !0, e.src = new jt(t.dsn).getReportDialogEndpoint(t), t.onLoad && (e.onload = t.onLoad), (document.head || document.body).appendChild(e)
                    } else T.error("Missing dsn option in showReportDialog call");
                else T.error("Missing eventId option in showReportDialog call")
            }
            var Ut, Mt = n("pRiV"),
                Bt = Object(O.e)(),
                Ft = {},
                qt = {};

            function Ht(t) {
                if (!qt[t]) switch (qt[t] = !0, t) {
                    case "console":
                        ! function() {
                            if (!("console" in Bt)) return;
                            ["debug", "info", "warn", "error", "log", "assert"].forEach((function(t) {
                                t in Bt.console && Object(N.c)(Bt.console, t, (function(e) {
                                    return function() {
                                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                        Yt("console", {
                                            args: n,
                                            level: t
                                        }), e && Function.prototype.apply.call(e, Bt.console, n)
                                    }
                                }))
                            }))
                        }();
                        break;
                    case "dom":
                        ! function() {
                            if (!("document" in Bt)) return;
                            Bt.document.addEventListener("click", Kt("click", Yt.bind(null, "dom")), !1), Bt.document.addEventListener("keypress", Qt(Yt.bind(null, "dom")), !1), ["EventTarget", "Node"].forEach((function(t) {
                                var e = Bt[t] && Bt[t].prototype;
                                e && e.hasOwnProperty && e.hasOwnProperty("addEventListener") && (Object(N.c)(e, "addEventListener", (function(t) {
                                    return function(e, n, r) {
                                        return n && n.handleEvent ? ("click" === e && Object(N.c)(n, "handleEvent", (function(t) {
                                            return function(e) {
                                                return Kt("click", Yt.bind(null, "dom"))(e), t.call(this, e)
                                            }
                                        })), "keypress" === e && Object(N.c)(n, "handleEvent", (function(t) {
                                            return function(e) {
                                                return Qt(Yt.bind(null, "dom"))(e), t.call(this, e)
                                            }
                                        }))) : ("click" === e && Kt("click", Yt.bind(null, "dom"), !0)(this), "keypress" === e && Qt(Yt.bind(null, "dom"))(this)), t.call(this, e, n, r)
                                    }
                                })), Object(N.c)(e, "removeEventListener", (function(t) {
                                    return function(e, n, r) {
                                        try {
                                            t.call(this, e, n.__sentry_wrapped__, r)
                                        } catch (o) {}
                                        return t.call(this, e, n, r)
                                    }
                                })))
                            }))
                        }();
                        break;
                    case "xhr":
                        ! function() {
                            if (!("XMLHttpRequest" in Bt)) return;
                            var t = [],
                                e = [],
                                n = XMLHttpRequest.prototype;
                            Object(N.c)(n, "open", (function(n) {
                                return function() {
                                    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                                    var i = this,
                                        s = r[1];
                                    i.__sentry_xhr__ = {
                                        method: Object(g.k)(r[0]) ? r[0].toUpperCase() : r[0],
                                        url: r[1]
                                    }, Object(g.k)(s) && "POST" === i.__sentry_xhr__.method && s.match(/sentry_key/) && (i.__sentry_own_request__ = !0);
                                    var a = function() {
                                        if (4 === i.readyState) {
                                            try {
                                                i.__sentry_xhr__ && (i.__sentry_xhr__.status_code = i.status)
                                            } catch (s) {}
                                            try {
                                                var n = t.indexOf(i);
                                                if (-1 !== n) {
                                                    t.splice(n);
                                                    var o = e.splice(n)[0];
                                                    i.__sentry_xhr__ && void 0 !== o[0] && (i.__sentry_xhr__.body = o[0])
                                                }
                                            } catch (s) {}
                                            Yt("xhr", {
                                                args: r,
                                                endTimestamp: Date.now(),
                                                startTimestamp: Date.now(),
                                                xhr: i
                                            })
                                        }
                                    };
                                    return "onreadystatechange" in i && "function" === typeof i.onreadystatechange ? Object(N.c)(i, "onreadystatechange", (function(t) {
                                        return function() {
                                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                            return a(), t.apply(i, e)
                                        }
                                    })) : i.addEventListener("readystatechange", a), n.apply(i, r)
                                }
                            })), Object(N.c)(n, "send", (function(n) {
                                return function() {
                                    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                                    return t.push(this), e.push(r), Yt("xhr", {
                                        args: r,
                                        startTimestamp: Date.now(),
                                        xhr: this
                                    }), n.apply(this, r)
                                }
                            }))
                        }();
                        break;
                    case "fetch":
                        ! function() {
                            if (! function() {
                                    if (!et()) return !1;
                                    var t = Object(O.e)();
                                    if (nt(t.fetch)) return !0;
                                    var e = !1,
                                        n = t.document;
                                    if (n && "function" === typeof n.createElement) try {
                                        var r = n.createElement("iframe");
                                        r.hidden = !0, n.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (e = nt(r.contentWindow.fetch)), n.head.removeChild(r)
                                    } catch (o) {
                                        T.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", o)
                                    }
                                    return e
                                }()) return;
                            Object(N.c)(Bt, "fetch", (function(t) {
                                return function() {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    var r = {
                                        args: e,
                                        fetchData: {
                                            method: Jt(e),
                                            url: Gt(e)
                                        },
                                        startTimestamp: Date.now()
                                    };
                                    return Yt("fetch", Object(y.__assign)({}, r)), t.apply(Bt, e).then((function(t) {
                                        return Yt("fetch", Object(y.__assign)(Object(y.__assign)({}, r), {
                                            endTimestamp: Date.now(),
                                            response: t
                                        })), t
                                    }), (function(t) {
                                        throw Yt("fetch", Object(y.__assign)(Object(y.__assign)({}, r), {
                                            endTimestamp: Date.now(),
                                            error: t
                                        })), t
                                    }))
                                }
                            }))
                        }();
                        break;
                    case "history":
                        ! function() {
                            if (! function() {
                                    var t = Object(O.e)(),
                                        e = t.chrome,
                                        n = e && e.app && e.app.runtime,
                                        r = "history" in t && !!t.history.pushState && !!t.history.replaceState;
                                    return !n && r
                                }()) return;
                            var t = Bt.onpopstate;

                            function e(t) {
                                return function() {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    var r = e.length > 2 ? e[2] : void 0;
                                    if (r) {
                                        var o = Ut,
                                            i = String(r);
                                        Ut = i, Yt("history", {
                                            from: o,
                                            to: i
                                        })
                                    }
                                    return t.apply(this, e)
                                }
                            }
                            Bt.onpopstate = function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                var r = Bt.location.href,
                                    o = Ut;
                                if (Ut = r, Yt("history", {
                                        from: o,
                                        to: r
                                    }), t) return t.apply(this, e)
                            }, Object(N.c)(Bt.history, "pushState", e), Object(N.c)(Bt.history, "replaceState", e)
                        }();
                        break;
                    case "error":
                        Zt = Bt.onerror, Bt.onerror = function(t, e, n, r, o) {
                            return Yt("error", {
                                column: r,
                                error: o,
                                line: n,
                                msg: t,
                                url: e
                            }), !!Zt && Zt.apply(this, arguments)
                        };
                        break;
                    case "unhandledrejection":
                        te = Bt.onunhandledrejection, Bt.onunhandledrejection = function(t) {
                            return Yt("unhandledrejection", t), !te || te.apply(this, arguments)
                        };
                        break;
                    default:
                        T.warn("unknown instrumentation type:", t)
                }
            }

            function Wt(t) {
                t && "string" === typeof t.type && "function" === typeof t.callback && (Ft[t.type] = Ft[t.type] || [], Ft[t.type].push(t.callback), Ht(t.type))
            }

            function Yt(t, e) {
                var n, r;
                if (t && Ft[t]) try {
                    for (var o = Object(y.__values)(Ft[t] || []), i = o.next(); !i.done; i = o.next()) {
                        var s = i.value;
                        try {
                            s(e)
                        } catch (a) {
                            T.error("Error while triggering instrumentation handler.\nType: " + t + "\nName: " + Object(Mt.a)(s) + "\nError: " + a)
                        }
                    }
                } catch (c) {
                    n = {
                        error: c
                    }
                } finally {
                    try {
                        i && !i.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
            }

            function Jt(t) {
                return void 0 === t && (t = []), "Request" in Bt && Object(g.g)(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
            }

            function Gt(t) {
                return void 0 === t && (t = []), "string" === typeof t[0] ? t[0] : "Request" in Bt && Object(g.g)(t[0], Request) ? t[0].url : String(t[0])
            }
            var Xt, zt, Vt = 1e3,
                $t = 0;

            function Kt(t, e, n) {
                return void 0 === n && (n = !1),
                    function(r) {
                        Xt = void 0, r && zt !== r && (zt = r, $t && clearTimeout($t), n ? $t = setTimeout((function() {
                            e({
                                event: r,
                                name: t
                            })
                        })) : e({
                            event: r,
                            name: t
                        }))
                    }
            }

            function Qt(t) {
                return function(e) {
                    var n;
                    try {
                        n = e.target
                    } catch (o) {
                        return
                    }
                    var r = n && n.tagName;
                    r && ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable) && (Xt || Kt("input", t)(e), clearTimeout(Xt), Xt = setTimeout((function() {
                        Xt = void 0
                    }), Vt))
                }
            }
            var Zt = null;
            var te = null;
            var ee = n("vFt6"),
                ne = function() {
                    function t(e) {
                        this.name = t.id, this._options = Object(y.__assign)({
                            console: !0,
                            dom: !0,
                            fetch: !0,
                            history: !0,
                            sentry: !0,
                            xhr: !0
                        }, e)
                    }
                    return t.prototype.addSentryBreadcrumb = function(t) {
                        this._options.sentry && U().addBreadcrumb({
                            category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                            event_id: t.event_id,
                            level: t.level,
                            message: Object(O.d)(t)
                        }, {
                            event: t
                        })
                    }, t.prototype.setupOnce = function() {
                        var t = this;
                        this._options.console && Wt({
                            callback: function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                t._consoleBreadcrumb.apply(t, Object(y.__spread)(e))
                            },
                            type: "console"
                        }), this._options.dom && Wt({
                            callback: function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                t._domBreadcrumb.apply(t, Object(y.__spread)(e))
                            },
                            type: "dom"
                        }), this._options.xhr && Wt({
                            callback: function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                t._xhrBreadcrumb.apply(t, Object(y.__spread)(e))
                            },
                            type: "xhr"
                        }), this._options.fetch && Wt({
                            callback: function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                t._fetchBreadcrumb.apply(t, Object(y.__spread)(e))
                            },
                            type: "fetch"
                        }), this._options.history && Wt({
                            callback: function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                t._historyBreadcrumb.apply(t, Object(y.__spread)(e))
                            },
                            type: "history"
                        })
                    }, t.prototype._consoleBreadcrumb = function(t) {
                        var e = {
                            category: "console",
                            data: {
                                arguments: t.args,
                                logger: "console"
                            },
                            level: Q.fromString(t.level),
                            message: Object(q.b)(t.args, " ")
                        };
                        if ("assert" === t.level) {
                            if (!1 !== t.args[0]) return;
                            e.message = "Assertion failed: " + (Object(q.b)(t.args.slice(1), " ") || "console.assert"), e.data.arguments = t.args.slice(1)
                        }
                        U().addBreadcrumb(e, {
                            input: t.args,
                            level: t.level
                        })
                    }, t.prototype._domBreadcrumb = function(t) {
                        var e;
                        try {
                            e = t.event.target ? Object(ee.a)(t.event.target) : Object(ee.a)(t.event)
                        } catch (n) {
                            e = "<unknown>"
                        }
                        0 !== e.length && U().addBreadcrumb({
                            category: "ui." + t.name,
                            message: e
                        }, {
                            event: t.event,
                            name: t.name
                        })
                    }, t.prototype._xhrBreadcrumb = function(t) {
                        if (t.endTimestamp) {
                            if (t.xhr.__sentry_own_request__) return;
                            var e = t.xhr.__sentry_xhr__ || {},
                                n = e.method,
                                r = e.url,
                                o = e.status_code,
                                i = e.body;
                            U().addBreadcrumb({
                                category: "xhr",
                                data: {
                                    method: n,
                                    url: r,
                                    status_code: o
                                },
                                type: "http"
                            }, {
                                xhr: t.xhr,
                                input: i
                            })
                        } else;
                    }, t.prototype._fetchBreadcrumb = function(t) {
                        t.endTimestamp && (t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method || (t.error ? U().addBreadcrumb({
                            category: "fetch",
                            data: t.fetchData,
                            level: Q.Error,
                            type: "http"
                        }, {
                            data: t.error,
                            input: t.args
                        }) : U().addBreadcrumb({
                            category: "fetch",
                            data: Object(y.__assign)(Object(y.__assign)({}, t.fetchData), {
                                status_code: t.response.status
                            }),
                            type: "http"
                        }, {
                            input: t.args,
                            response: t.response
                        })))
                    }, t.prototype._historyBreadcrumb = function(t) {
                        var e = Object(O.e)(),
                            n = t.from,
                            r = t.to,
                            o = Object(O.h)(e.location.href),
                            i = Object(O.h)(n),
                            s = Object(O.h)(r);
                        i.path || (i = o), o.protocol === s.protocol && o.host === s.host && (r = s.relative), o.protocol === i.protocol && o.host === i.host && (n = i.relative), U().addBreadcrumb({
                            category: "navigation",
                            data: {
                                from: n,
                                to: r
                            }
                        })
                    }, t.id = "Breadcrumbs", t
                }(),
                re = function(t) {
                    function e(e) {
                        return void 0 === e && (e = {}), t.call(this, Rt, e) || this
                    }
                    return Object(y.__extends)(e, t), e.prototype.showReportDialog = function(t) {
                        void 0 === t && (t = {}), Object(O.e)().document && (this._isEnabled() ? Lt(Object(y.__assign)(Object(y.__assign)({}, t), {
                            dsn: t.dsn || this.getDsn()
                        })) : T.error("Trying to call showReportDialog with Sentry Client disabled"))
                    }, e.prototype._prepareEvent = function(e, n, r) {
                        return e.platform = e.platform || "javascript", e.sdk = Object(y.__assign)(Object(y.__assign)({}, e.sdk), {
                            name: "sentry.javascript.browser",
                            packages: Object(y.__spread)(e.sdk && e.sdk.packages || [], [{
                                name: "npm:@sentry/browser",
                                version: "5.30.0"
                            }]),
                            version: "5.30.0"
                        }), t.prototype._prepareEvent.call(this, e, n, r)
                    }, e.prototype._sendEvent = function(e) {
                        var n = this.getIntegration(ne);
                        n && n.addSentryBreadcrumb(e), t.prototype._sendEvent.call(this, e)
                    }, e
                }(K),
                oe = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
                ie = function() {
                    function t(e) {
                        this.name = t.id, this._options = Object(y.__assign)({
                            XMLHttpRequest: !0,
                            eventTarget: !0,
                            requestAnimationFrame: !0,
                            setInterval: !0,
                            setTimeout: !0
                        }, e)
                    }
                    return t.prototype.setupOnce = function() {
                        var t = Object(O.e)();
                        (this._options.setTimeout && Object(N.c)(t, "setTimeout", this._wrapTimeFunction.bind(this)), this._options.setInterval && Object(N.c)(t, "setInterval", this._wrapTimeFunction.bind(this)), this._options.requestAnimationFrame && Object(N.c)(t, "requestAnimationFrame", this._wrapRAF.bind(this)), this._options.XMLHttpRequest && "XMLHttpRequest" in t && Object(N.c)(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)), this._options.eventTarget) && (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : oe).forEach(this._wrapEventTarget.bind(this))
                    }, t.prototype._wrapTimeFunction = function(t) {
                        return function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            var r = e[0];
                            return e[0] = At(r, {
                                mechanism: {
                                    data: {
                                        function: Object(Mt.a)(t)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }), t.apply(this, e)
                        }
                    }, t.prototype._wrapRAF = function(t) {
                        return function(e) {
                            return t.call(this, At(e, {
                                mechanism: {
                                    data: {
                                        function: "requestAnimationFrame",
                                        handler: Object(Mt.a)(t)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        }
                    }, t.prototype._wrapEventTarget = function(t) {
                        var e = Object(O.e)(),
                            n = e[t] && e[t].prototype;
                        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Object(N.c)(n, "addEventListener", (function(e) {
                            return function(n, r, o) {
                                try {
                                    "function" === typeof r.handleEvent && (r.handleEvent = At(r.handleEvent.bind(r), {
                                        mechanism: {
                                            data: {
                                                function: "handleEvent",
                                                handler: Object(Mt.a)(r),
                                                target: t
                                            },
                                            handled: !0,
                                            type: "instrument"
                                        }
                                    }))
                                } catch (i) {}
                                return e.call(this, n, At(r, {
                                    mechanism: {
                                        data: {
                                            function: "addEventListener",
                                            handler: Object(Mt.a)(r),
                                            target: t
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                }), o)
                            }
                        })), Object(N.c)(n, "removeEventListener", (function(t) {
                            return function(e, n, r) {
                                var o, i = n;
                                try {
                                    var s = null === (o = i) || void 0 === o ? void 0 : o.__sentry_wrapped__;
                                    s && t.call(this, e, s, r)
                                } catch (a) {}
                                return t.call(this, e, i, r)
                            }
                        })))
                    }, t.prototype._wrapXHR = function(t) {
                        return function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            var r = this,
                                o = ["onload", "onerror", "onprogress", "onreadystatechange"];
                            return o.forEach((function(t) {
                                t in r && "function" === typeof r[t] && Object(N.c)(r, t, (function(e) {
                                    var n = {
                                        mechanism: {
                                            data: {
                                                function: t,
                                                handler: Object(Mt.a)(e)
                                            },
                                            handled: !0,
                                            type: "instrument"
                                        }
                                    };
                                    return e.__sentry_original__ && (n.mechanism.data.handler = Object(Mt.a)(e.__sentry_original__)), At(e, n)
                                }))
                            })), t.apply(this, e)
                        }
                    }, t.id = "TryCatch", t
                }(),
                se = function() {
                    function t(e) {
                        this.name = t.id, this._onErrorHandlerInstalled = !1, this._onUnhandledRejectionHandlerInstalled = !1, this._options = Object(y.__assign)({
                            onerror: !0,
                            onunhandledrejection: !0
                        }, e)
                    }
                    return t.prototype.setupOnce = function() {
                        Error.stackTraceLimit = 50, this._options.onerror && (T.log("Global Handler attached: onerror"), this._installGlobalOnErrorHandler()), this._options.onunhandledrejection && (T.log("Global Handler attached: onunhandledrejection"), this._installGlobalOnUnhandledRejectionHandler())
                    }, t.prototype._installGlobalOnErrorHandler = function() {
                        var e = this;
                        this._onErrorHandlerInstalled || (Wt({
                            callback: function(n) {
                                var r = n.error,
                                    o = U(),
                                    i = o.getIntegration(t),
                                    s = r && !0 === r.__sentry_own_request__;
                                if (i && !Pt() && !s) {
                                    var a = o.getClient(),
                                        c = Object(g.i)(r) ? e._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : e._enhanceEventWithInitialFrame(gt(r, void 0, {
                                            attachStacktrace: a && a.getOptions().attachStacktrace,
                                            rejection: !1
                                        }), n.url, n.line, n.column);
                                    Object(O.a)(c, {
                                        handled: !1,
                                        type: "onerror"
                                    }), o.captureEvent(c, {
                                        originalException: r
                                    })
                                }
                            },
                            type: "error"
                        }), this._onErrorHandlerInstalled = !0)
                    }, t.prototype._installGlobalOnUnhandledRejectionHandler = function() {
                        var e = this;
                        this._onUnhandledRejectionHandlerInstalled || (Wt({
                            callback: function(n) {
                                var r = n;
                                try {
                                    "reason" in n ? r = n.reason : "detail" in n && "reason" in n.detail && (r = n.detail.reason)
                                } catch (u) {}
                                var o = U(),
                                    i = o.getIntegration(t),
                                    s = r && !0 === r.__sentry_own_request__;
                                if (!i || Pt() || s) return !0;
                                var a = o.getClient(),
                                    c = Object(g.i)(r) ? e._eventFromRejectionWithPrimitive(r) : gt(r, void 0, {
                                        attachStacktrace: a && a.getOptions().attachStacktrace,
                                        rejection: !0
                                    });
                                c.level = Q.Error, Object(O.a)(c, {
                                    handled: !1,
                                    type: "onunhandledrejection"
                                }), o.captureEvent(c, {
                                    originalException: r
                                })
                            },
                            type: "unhandledrejection"
                        }), this._onUnhandledRejectionHandlerInstalled = !0)
                    }, t.prototype._eventFromIncompleteOnError = function(t, e, n, r) {
                        var o, i = Object(g.e)(t) ? t.message : t;
                        if (Object(g.k)(i)) {
                            var s = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                            s && (o = s[1], i = s[2])
                        }
                        var a = {
                            exception: {
                                values: [{
                                    type: o || "Error",
                                    value: i
                                }]
                            }
                        };
                        return this._enhanceEventWithInitialFrame(a, e, n, r)
                    }, t.prototype._eventFromRejectionWithPrimitive = function(t) {
                        return {
                            exception: {
                                values: [{
                                    type: "UnhandledRejection",
                                    value: "Non-Error promise rejection captured with value: " + String(t)
                                }]
                            }
                        }
                    }, t.prototype._enhanceEventWithInitialFrame = function(t, e, n, r) {
                        t.exception = t.exception || {}, t.exception.values = t.exception.values || [], t.exception.values[0] = t.exception.values[0] || {}, t.exception.values[0].stacktrace = t.exception.values[0].stacktrace || {}, t.exception.values[0].stacktrace.frames = t.exception.values[0].stacktrace.frames || [];
                        var o = isNaN(parseInt(r, 10)) ? void 0 : r,
                            i = isNaN(parseInt(n, 10)) ? void 0 : n,
                            s = Object(g.k)(e) && e.length > 0 ? e : Object(O.f)();
                        return 0 === t.exception.values[0].stacktrace.frames.length && t.exception.values[0].stacktrace.frames.push({
                            colno: o,
                            filename: s,
                            function: "?",
                            in_app: !0,
                            lineno: i
                        }), t
                    }, t.id = "GlobalHandlers", t
                }(),
                ae = "cause",
                ce = 5,
                ue = function() {
                    function t(e) {
                        void 0 === e && (e = {}), this.name = t.id, this._key = e.key || ae, this._limit = e.limit || ce
                    }
                    return t.prototype.setupOnce = function() {
                        x((function(e, n) {
                            var r = U().getIntegration(t);
                            return r ? r._handler(e, n) : e
                        }))
                    }, t.prototype._handler = function(t, e) {
                        if (!t.exception || !t.exception.values || !e || !Object(g.g)(e.originalException, Error)) return t;
                        var n = this._walkErrorTree(e.originalException, this._key);
                        return t.exception.values = Object(y.__spread)(n, t.exception.values), t
                    }, t.prototype._walkErrorTree = function(t, e, n) {
                        if (void 0 === n && (n = []), !Object(g.g)(t[e], Error) || n.length + 1 >= this._limit) return n;
                        var r = _t(lt(t[e]));
                        return this._walkErrorTree(t[e], e, Object(y.__spread)([r], n))
                    }, t.id = "LinkedErrors", t
                }(),
                pe = Object(O.e)(),
                le = function() {
                    function t() {
                        this.name = t.id
                    }
                    return t.prototype.setupOnce = function() {
                        x((function(e) {
                            var n, r, o;
                            if (U().getIntegration(t)) {
                                if (!pe.navigator && !pe.location && !pe.document) return e;
                                var i = (null === (n = e.request) || void 0 === n ? void 0 : n.url) || (null === (r = pe.location) || void 0 === r ? void 0 : r.href),
                                    s = (pe.document || {}).referrer,
                                    a = (pe.navigator || {}).userAgent,
                                    c = Object(y.__assign)(Object(y.__assign)(Object(y.__assign)({}, null === (o = e.request) || void 0 === o ? void 0 : o.headers), s && {
                                        Referer: s
                                    }), a && {
                                        "User-Agent": a
                                    }),
                                    u = Object(y.__assign)(Object(y.__assign)({}, i && {
                                        url: i
                                    }), {
                                        headers: c
                                    });
                                return Object(y.__assign)(Object(y.__assign)({}, e), {
                                    request: u
                                })
                            }
                            return e
                        }))
                    }, t.id = "UserAgent", t
                }(),
                fe = [new r.InboundFilters, new r.FunctionToString, new ie, new ne, new se, new ue, new le];
            n("ma9I"), n("zKZe"), n("5s+n");
            var de = n("o0o1"),
                he = n.n(de),
                _e = (n("ls82"), n("nOHt")),
                ve = n.n(_e),
                ye = n("eneP"),
                ge = n.n(ye),
                be = n("rqAE");

            function me(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(p.a)(this, n)
                }
            }
            var Oe = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function s(t) {
                            try {
                                c(r.next(t))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(t) {
                            try {
                                c(r.throw(t))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(t) {
                            var e;
                            t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))).then(s, a)
                        }
                        c((r = r.apply(t, e || [])).next())
                    }))
                },
                je = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            debug: !1
                        },
                        n = function(n) {
                            Object(u.a)(i, n);
                            var r = me(i);

                            function i() {
                                return Object(o.a)(this, i), r.apply(this, arguments)
                            }
                            return s(i, [{
                                key: "componentDidMount",
                                value: function() {
                                    ve.a.events.on("routeChangeStart", i.startRoute), ve.a.events.on("routeChangeComplete", this.endRoute)
                                }
                            }, {
                                key: "componentWillUnmount",
                                value: function() {
                                    ve.a.events.off("routeChangeStart", i.startRoute), ve.a.events.off("routeChangeComplete", this.endRoute), i.timers = {}
                                }
                            }, {
                                key: "endRoute",
                                value: function(t) {
                                    var n = ve.a.router;
                                    if (n) {
                                        var r = n.route;
                                        try {
                                            var o = i.timers[t];
                                            if (!o) return;
                                            var s = o.end();
                                            delete i.timers[t], e.debug && Object(be.info)("withRouteMetrics: Reporting time metrics for url '".concat(t, "' (route '").concat(r, "'): ").concat(s.milliseconds, "ms")), Object(ye.sendMetric)({
                                                metric_type: "timer",
                                                what: "route-time-nanos",
                                                value: s.nanoseconds,
                                                tags: {
                                                    route: r
                                                }
                                            })
                                        } catch (a) {
                                            e.debug && Object(be.warn)("withRouteMetrics: Failed while reporting time metrics for url '".concat(t, "' (route '").concat(r, "') due to '").concat(a, "'"))
                                        }
                                    } else delete i.timers[t]
                                }
                            }, {
                                key: "render",
                                value: function() {
                                    this.props.router;
                                    return f.createElement(t, Object.assign({}, this.props))
                                }
                            }], [{
                                key: "getInitialProps",
                                value: function(e) {
                                    return Oe(this, void 0, void 0, he.a.mark((function n() {
                                        var r;
                                        return he.a.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    if ("function" !== typeof t.getInitialProps) {
                                                        n.next = 7;
                                                        break
                                                    }
                                                    return n.next = 4, t.getInitialProps(e);
                                                case 4:
                                                    r = n.sent, n.next = 10;
                                                    break;
                                                case 7:
                                                    return n.next = 9, _.a.getInitialProps(e);
                                                case 9:
                                                    r = n.sent;
                                                case 10:
                                                    return n.abrupt("return", r);
                                                case 11:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })))
                                }
                            }, {
                                key: "startRoute",
                                value: function(t) {
                                    i.timers[t] = ye.Timer.start()
                                }
                            }]), i
                        }(f.Component);
                    return n.timers = {}, Object(_e.withRouter)(n)
                };
            var Ee = d.a.createElement;

            function xe(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(p.a)(this, n)
                }
            }(function(t) {
                if (void 0 === t && (t = {}), void 0 === t.defaultIntegrations && (t.defaultIntegrations = fe), void 0 === t.release) {
                    var e = Object(O.e)();
                    e.SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id)
                }
                void 0 === t.autoSessionTracking && (t.autoSessionTracking = !1),
                    function(t, e) {
                        !0 === e.debug && T.enable();
                        var n = U(),
                            r = new t(e);
                        n.bindClient(r)
                    }(re, t), t.autoSessionTracking && function() {
                        var t = Object(O.e)(),
                            e = U(),
                            n = "complete" === document.readyState,
                            r = !1,
                            o = function() {
                                r && n && e.endSession()
                            },
                            i = function() {
                                n = !0, o(), t.removeEventListener("load", i)
                            };
                        e.startSession(), n || t.addEventListener("load", i);
                        try {
                            var s = new PerformanceObserver((function(t, e) {
                                    t.getEntries().forEach((function(t) {
                                        "first-contentful-paint" === t.name && t.startTime < a && (e.disconnect(), r = !0, o())
                                    }))
                                })),
                                a = "hidden" === document.visibilityState ? 0 : 1 / 0;
                            document.addEventListener("visibilitychange", (function(t) {
                                a = Math.min(a, t.timeStamp)
                            }), {
                                once: !0
                            }), s.observe({
                                type: "paint",
                                buffered: !0
                            })
                        } catch (c) {
                            r = !0, o()
                        }
                    }()
            })({
                dsn: "https://dfaa5813a9b44913a035fcb8134e2b13@sentry.io/1536292",
                sampleRate: .2,
                whitelistUrls: ["www.spotify.com", "www-growth.scdn.co"]
            }), ge.a.init({
                key: "www-growth",
                reporter: Object(ye.createUniversalReporter)()
            });
            var we = function(t) {
                Object(u.a)(n, t);
                var e = xe(n);

                function n() {
                    return Object(o.a)(this, n), e.apply(this, arguments)
                }
                return s(n, [{
                    key: "componentDidCatch",
                    value: function(t, e) {
                        Nt((function(n) {
                            n.setExtras({
                                errorInfo: e
                            }), It(t)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.Component,
                            n = t.pageProps;
                        return Ee(e, n)
                    }
                }]), n
            }(_.a);

            function Se(t) {
                var e, n;
                ye.BrowserMetrics.sendWebVitalsMetric(t, {
                    route: null !== (e = null === (n = ve.a.router) || void 0 === n ? void 0 : n.route) && void 0 !== e ? e : "unknown"
                })
            }
            e.default = je(we)
        },
        "8Bbg": function(t, e, n) {
            t.exports = n("B5Ud")
        },
        "9/Zf": function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "e", (function() {
                    return i
                })), n.d(e, "i", (function() {
                    return s
                })), n.d(e, "h", (function() {
                    return a
                })), n.d(e, "d", (function() {
                    return c
                })), n.d(e, "c", (function() {
                    return u
                })), n.d(e, "b", (function() {
                    return p
                })), n.d(e, "a", (function() {
                    return l
                })), n.d(e, "f", (function() {
                    return f
                })), n.d(e, "g", (function() {
                    return h
                }));
                var r = n("+A1k"),
                    o = (n("+924"), {});

                function i() {
                    return Object(r.b)() ? t : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : o
                }

                function s() {
                    var t = i(),
                        e = t.crypto || t.msCrypto;
                    if (void 0 !== e && e.getRandomValues) {
                        var n = new Uint16Array(8);
                        e.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
                        var r = function(t) {
                            for (var e = t.toString(16); e.length < 4;) e = "0" + e;
                            return e
                        };
                        return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
                    }
                    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                        var e = 16 * Math.random() | 0;
                        return ("x" === t ? e : 3 & e | 8).toString(16)
                    }))
                }

                function a(t) {
                    if (!t) return {};
                    var e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                    if (!e) return {};
                    var n = e[6] || "",
                        r = e[8] || "";
                    return {
                        host: e[4],
                        path: e[5],
                        protocol: e[2],
                        relative: e[5] + n + r
                    }
                }

                function c(t) {
                    if (t.message) return t.message;
                    if (t.exception && t.exception.values && t.exception.values[0]) {
                        var e = t.exception.values[0];
                        return e.type && e.value ? e.type + ": " + e.value : e.type || e.value || t.event_id || "<unknown>"
                    }
                    return t.event_id || "<unknown>"
                }

                function u(t) {
                    var e = i();
                    if (!("console" in e)) return t();
                    var n = e.console,
                        r = {};
                    ["debug", "info", "warn", "error", "log", "assert"].forEach((function(t) {
                        t in e.console && n[t].__sentry_original__ && (r[t] = n[t], n[t] = n[t].__sentry_original__)
                    }));
                    var o = t();
                    return Object.keys(r).forEach((function(t) {
                        n[t] = r[t]
                    })), o
                }

                function p(t, e, n) {
                    t.exception = t.exception || {}, t.exception.values = t.exception.values || [], t.exception.values[0] = t.exception.values[0] || {}, t.exception.values[0].value = t.exception.values[0].value || e || "", t.exception.values[0].type = t.exception.values[0].type || n || "Error"
                }

                function l(t, e) {
                    void 0 === e && (e = {});
                    try {
                        t.exception.values[0].mechanism = t.exception.values[0].mechanism || {}, Object.keys(e).forEach((function(n) {
                            t.exception.values[0].mechanism[n] = e[n]
                        }))
                    } catch (n) {}
                }

                function f() {
                    try {
                        return document.location.href
                    } catch (t) {
                        return ""
                    }
                }
                var d = 6e4;

                function h(t, e) {
                    if (!e) return d;
                    var n = parseInt("" + e, 10);
                    if (!isNaN(n)) return 1e3 * n;
                    var r = Date.parse("" + e);
                    return isNaN(r) ? d : r - t
                }
            }).call(this, n("3r9c"))
        },
        "9AQC": function(t, e, n) {
            "use strict";

            function r(t) {
                switch (Object.prototype.toString.call(t)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return _(t, Error)
                }
            }

            function o(t) {
                return "[object ErrorEvent]" === Object.prototype.toString.call(t)
            }

            function i(t) {
                return "[object DOMError]" === Object.prototype.toString.call(t)
            }

            function s(t) {
                return "[object DOMException]" === Object.prototype.toString.call(t)
            }

            function a(t) {
                return "[object String]" === Object.prototype.toString.call(t)
            }

            function c(t) {
                return null === t || "object" !== typeof t && "function" !== typeof t
            }

            function u(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }

            function p(t) {
                return "undefined" !== typeof Event && _(t, Event)
            }

            function l(t) {
                return "undefined" !== typeof Element && _(t, Element)
            }

            function f(t) {
                return "[object RegExp]" === Object.prototype.toString.call(t)
            }

            function d(t) {
                return Boolean(t && t.then && "function" === typeof t.then)
            }

            function h(t) {
                return u(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
            }

            function _(t, e) {
                try {
                    return t instanceof e
                } catch (n) {
                    return !1
                }
            }
            n.d(e, "d", (function() {
                return r
            })), n.d(e, "e", (function() {
                return o
            })), n.d(e, "a", (function() {
                return i
            })), n.d(e, "b", (function() {
                return s
            })), n.d(e, "k", (function() {
                return a
            })), n.d(e, "i", (function() {
                return c
            })), n.d(e, "h", (function() {
                return u
            })), n.d(e, "f", (function() {
                return p
            })), n.d(e, "c", (function() {
                return l
            })), n.d(e, "j", (function() {
                return f
            })), n.d(e, "m", (function() {
                return d
            })), n.d(e, "l", (function() {
                return h
            })), n.d(e, "g", (function() {
                return _
            }))
        },
        B5Ud: function(t, e, n) {
            "use strict";
            n("zKZe"), n("07d7"), n("SuFq"), n("rB9j"), n("JfAA"), n("UxlC");
            var r = n("vJKn");
            n("ls82");
            var o = n("/GRZ"),
                i = n("i2R6"),
                s = n("48fX"),
                a = n("tCBg"),
                c = n("T0f4"),
                u = n("qVT1");

            function p(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = c(t);
                    if (e) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var l = n("AroE");
            e.__esModule = !0, e.Container = function(t) {
                0;
                return t.children
            }, e.createUrl = y, e.default = void 0;
            var f = l(n("q1tI")),
                d = n("g/15");

            function h(t) {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = u(r.mark((function t(e) {
                    var n, o, i;
                    return r.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n = e.Component, o = e.ctx, t.next = 3, (0, d.loadGetInitialProps)(n, o);
                            case 3:
                                return i = t.sent, t.abrupt("return", {
                                    pageProps: i
                                });
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            e.AppInitialProps = d.AppInitialProps;
            var v = function(t) {
                s(n, t);
                var e = p(n);

                function n() {
                    return o(this, n), e.apply(this, arguments)
                }
                return i(n, [{
                    key: "componentDidCatch",
                    value: function(t, e) {
                        throw t
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.router,
                            n = t.Component,
                            r = t.pageProps,
                            o = t.__N_SSG,
                            i = t.__N_SSP;
                        return (f.default.createElement(n, Object.assign({}, r, o || i ? {} : {
                            url: y(e)
                        })))
                    }
                }]), n
            }(f.default.Component);

            function y(t) {
                var e = t.pathname,
                    n = t.asPath,
                    r = t.query;
                return {
                    get query() {
                        return r
                    },
                    get pathname() {
                        return e
                    },
                    get asPath() {
                        return n
                    },
                    back: function() {
                        t.back()
                    },
                    push: function(e, n) {
                        return t.push(e, n)
                    },
                    pushTo: function(e, n) {
                        var r = n ? e : "",
                            o = n || e;
                        return t.push(r, o)
                    },
                    replace: function(e, n) {
                        return t.replace(e, n)
                    },
                    replaceTo: function(e, n) {
                        var r = n ? e : "",
                            o = n || e;
                        return t.replace(r, o)
                    }
                }
            }
            e.default = v, v.origGetInitialProps = h, v.getInitialProps = h
        },
        BKcT: function(t, e) {
            t.exports = function(t) {
                if (!t.webpackPolyfill) {
                    var e = Object.create(t);
                    e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function() {
                            return e.l
                        }
                    }), Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function() {
                            return e.i
                        }
                    }), Object.defineProperty(e, "exports", {
                        enumerable: !0
                    }), e.webpackPolyfill = 1
                }
                return e
            }
        },
        Ji7U: function(t, e, n) {
            "use strict";

            function r(t, e) {
                return (r = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function o(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && r(t, e)
            }
            n.d(e, "a", (function() {
                return o
            }))
        },
        NjYM: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n("709e")
            }])
        },
        foSv: function(t, e, n) {
            "use strict";

            function r(t) {
                return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            n.d(e, "a", (function() {
                return r
            }))
        },
        kdvv: function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "a", (function() {
                    return c
                }));
                var r = n("9/Zf"),
                    o = n("+A1k"),
                    i = {
                        nowSeconds: function() {
                            return Date.now() / 1e3
                        }
                    };
                var s = Object(o.b)() ? function() {
                        try {
                            return Object(o.a)(t, "perf_hooks").performance
                        } catch (e) {
                            return
                        }
                    }() : function() {
                        var t = Object(r.e)().performance;
                        if (t && t.now) return {
                            now: function() {
                                return t.now()
                            },
                            timeOrigin: Date.now() - t.now()
                        }
                    }(),
                    a = void 0 === s ? i : {
                        nowSeconds: function() {
                            return (s.timeOrigin + s.now()) / 1e3
                        }
                    },
                    c = i.nowSeconds.bind(i);
                a.nowSeconds.bind(a),
                    function() {
                        var t = Object(r.e)().performance;
                        if (t) t.timeOrigin ? t.timeOrigin : t.timing && t.timing.navigationStart || Date.now()
                    }()
            }).call(this, n("BKcT")(t))
        },
        md7G: function(t, e, n) {
            "use strict";

            function r(t) {
                return (r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function o(t, e) {
                return !e || "object" !== r(e) && "function" !== typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }
            n.d(e, "a", (function() {
                return o
            }))
        },
        pRiV: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var r = "<anonymous>";

            function o(t) {
                try {
                    return t && "function" === typeof t && t.name || r
                } catch (e) {
                    return r
                }
            }
        },
        vFt6: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var r = n("9AQC");

            function o(t) {
                try {
                    for (var e = t, n = [], r = 0, o = 0, s = " > ".length, a = void 0; e && r++ < 5 && !("html" === (a = i(e)) || r > 1 && o + n.length * s + a.length >= 80);) n.push(a), o += a.length, e = e.parentNode;
                    return n.reverse().join(" > ")
                } catch (c) {
                    return "<unknown>"
                }
            }

            function i(t) {
                var e, n, o, i, s, a = t,
                    c = [];
                if (!a || !a.tagName) return "";
                if (c.push(a.tagName.toLowerCase()), a.id && c.push("#" + a.id), (e = a.className) && Object(r.k)(e))
                    for (n = e.split(/\s+/), s = 0; s < n.length; s++) c.push("." + n[s]);
                var u = ["type", "name", "title", "alt"];
                for (s = 0; s < u.length; s++) o = u[s], (i = a.getAttribute(o)) && c.push("[" + o + '="' + i + '"]');
                return c.join("")
            }
        },
        wCA9: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var r = function() {
                function t() {
                    this._hasWeakSet = "function" === typeof WeakSet, this._inner = this._hasWeakSet ? new WeakSet : []
                }
                return t.prototype.memoize = function(t) {
                    if (this._hasWeakSet) return !!this._inner.has(t) || (this._inner.add(t), !1);
                    for (var e = 0; e < this._inner.length; e++) {
                        if (this._inner[e] === t) return !0
                    }
                    return this._inner.push(t), !1
                }, t.prototype.unmemoize = function(t) {
                    if (this._hasWeakSet) this._inner.delete(t);
                    else
                        for (var e = 0; e < this._inner.length; e++)
                            if (this._inner[e] === t) {
                                this._inner.splice(e, 1);
                                break
                            }
                }, t
            }()
        }
    },
    [
        [2, 0, 2, 1, 3, 4, 5]
    ]
]);