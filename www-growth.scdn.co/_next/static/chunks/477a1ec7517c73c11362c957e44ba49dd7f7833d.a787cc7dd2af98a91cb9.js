(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        "/8iO": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createClientIpContext = void 0, t.createClientIpContext = function(e) {
                return function() {
                    return {
                        name: "context_client_ip",
                        data: {
                            value: e
                        }
                    }
                }
            }
        },
        "/ZeQ": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                i = {},
                o = {};

            function s(e, t, n) {
                for (var r = 0, i = 0; i < e.length; ++i) {
                    var o = e[i] * t + r;
                    e[i] = o % n, r = ~~(o / n)
                }
                for (; r;) e.push(r % n), r = ~~(r / n)
            }

            function a(e, t, n, r) {
                var i, o, s = 0;
                for (o = 0; o < t.length; ++o) i = ~~e[o] + t[o] * n + s, e[o] = i % r, s = ~~(i / r);
                for (; s;) i = ~~e[o] + s, e[o] = i % r, s = ~~(i / r), ++o
            }

            function u(e, t, n) {
                for (var r = [0], i = [1], o = 0; o < e.length; ++o) a(r, i, e[o], n), s(i, t, n);
                return r
            }

            function c(e, t) {
                for (var n = [], r = 0; r < e.length; ++r) n.push(t[e[r]]);
                return n.reverse()
            }

            function h(e, t) {
                for (void 0 === t && (t = 0); e.length < t;) e.push(0);
                return e
            }! function() {
                for (var e = 0, t = r.length; e < t; ++e) o[r[e]] = e;
                for (e = 0; e < 16; ++e) i["0123456789abcdef" [e]] = e;
                for (e = 0; e < 16; ++e) i["0123456789ABCDEF" [e]] = e
            }(), t.fromBytes = function(e, t) {
                return c(h(u(e.slice(0).reverse(), 256, 62), t), r).join("")
            }, t.toBytes = function(e, t) {
                return h(u(c(e.split(""), o), 62, 256), t).reverse()
            }, t.toHex = function(e, t) {
                var n = u(c(e.split(""), o), 62, 16);
                return c(h(n, t), r).join("")
            }, t.fromHex = function(e, t) {
                var n = u(c(e.split(""), i), 16, 62);
                return c(h(n, t), r).join("")
            }
        },
        "149u": function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n("lwsE"),
                    i = n("W8MJ"),
                    o = n("J4zp");
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Timer = t.getHighResolutionTime = t.getLowResolutionTime = t.getTime = t.getBrowserTime = t.supportsHighResolutionTime = void 0;
                var s = n("hXCe"),
                    a = n("Z6KD");
                t.supportsHighResolutionTime = function() {
                    return e && "function" === typeof e.hrtime
                };
                t.getBrowserTime = function() {
                    return "undefined" !== typeof performance ? performance.now() : Date.now()
                };
                t.getTime = function() {
                    return t.supportsHighResolutionTime() ? e.hrtime() : t.getBrowserTime()
                };
                t.getLowResolutionTime = function(e) {
                    var n = t.getTime() - e,
                        r = s.Time.fromMillis(n);
                    return {
                        nanoseconds: a.asNanoseconds(r.asNanos()),
                        milliseconds: r.asMillis(),
                        seconds: r.asSeconds()
                    }
                };
                t.getHighResolutionTime = function(t) {
                    var n = e.hrtime(t),
                        r = o(n, 2),
                        i = 1e9 * r[0] + r[1],
                        s = i / 1e6,
                        u = i / 1e9;
                    return {
                        nanoseconds: a.asNanoseconds(i),
                        milliseconds: s,
                        seconds: u
                    }
                };
                var u = function() {
                    function e(t) {
                        r(this, e), this.startTime = t
                    }
                    return i(e, [{
                        key: "end",
                        value: function() {
                            return t.supportsHighResolutionTime() ? t.getHighResolutionTime(this.startTime) : t.getLowResolutionTime(this.startTime)
                        }
                    }], [{
                        key: "start",
                        value: function() {
                            return new e(t.getTime())
                        }
                    }]), e
                }();
                t.Timer = u
            }).call(this, n("8oxB"))
        },
        "1Fjq": function(e, t, n) {
            "use strict";
            (function(e, t) {}).call(this, n("8oxB"), n("3r9c"))
        },
        "49sm": function(e, t) {
            var n = {}.toString;
            e.exports = Array.isArray || function(e) {
                return "[object Array]" == n.call(e)
            }
        },
        "4CIH": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "TransportErrors", (function() {
                return i
            })), n.d(t, "TransportEvent", (function() {
                return o
            })), n.d(t, "Method", (function() {
                return s
            })), n.d(t, "PluginEvent", (function() {
                return a
            })), n.d(t, "DisconnectionReason", (function() {
                return u
            })), n.d(t, "createXResolveProvider", (function() {
                return _e
            })), n.d(t, "DEALER_PLUGIN_NAME", (function() {
                return _
            })), n.d(t, "createBaseTransport", (function() {
                return pe
            })), n.d(t, "createTransport", (function() {
                return Ee
            }));
            var r = {};
            n.r(r), n.d(r, "isSupported", (function() {
                return w
            })), n.d(r, "request", (function() {
                return R
            }));
            var i, o, s, a, u, c = {};
            n.r(c), n.d(c, "request", (function() {
                    return ae
                })),
                function(e) {
                    e.HTTP_REQUEST_FAILED = "HTTP_REQUEST_FAILED", e.LOGGING_REQUEST_FAILED = "LOGGING_REQUEST_FAILED", e.TRANSPORT_ENDPOINTS_PROVIDER_ERROR = "TRANSPORT_ENDPOINTS_PROVIDER_ERROR", e.TRANSPORT_INVALID_STATE = "TRANSPORT_INVALID_STATE", e.TRANSPORT_INVALID_TOKEN = "TRANSPORT_INVALID_TOKEN", e.TRANSPORT_STALE_TOKEN = "TRANSPORT_STALE_TOKEN ", e.TRANSPORT_TOKEN_PROVIDER_ERROR = "TRANSPORT_TOKEN_PROVIDER_ERROR", e.TRANSPORT_LIFECYCLE_DISABLED = "TRANSPORT_LIFECYCLE_DISABLED", e.TRANSPORT_UNSUPPORTED_OPTION = "TRANSPORT_UNSUPPORTED_OPTION", e.XRESOLVE_INCOMPLETE_RESPONSE = "XRESOLVE_INCOMPLETE_RESPONSE", e.XRESOLVE_INVALID_RESPONSE = "XRESOLVE_INVALID_RESPONSE", e.XRESOLVE_REQUEST_FAILED_WITH_STATUS = "XRESOLVE_REQUEST_FAILED_WITH_STATUS"
                }(i || (i = {})),
                function(e) {
                    e.CONNECTION_ONLINE = "online", e.CONNECTION_OFFLINE = "offline", e.PRODUCT_STATE_CHANGED = "product_state_changed", e.ACCESS_TOKEN = "access_token", e.AUTHENTICATED = "authenticated", e.AUTHENTICATION_FAILED = "authentication_failed", e.BEFORE_OFFLINE_DISCONNECT = "before_offline_disconnect", e.BEFORE_ONLINE_DISCONNECT = "before_online_disconnect", e.CONNECTED = "connected", e.CONNECTION_FAILED = "connection_failed", e.CONNECTION_ID = "connection_id", e.DISCONNECTED = "disconnected", e.ENDPOINTS_RESOLVED = "endpoints_resolved", e.LOGGED_OUT = "logged_out", e.SHORT_SESSION_DISCONNECTED = "short_session_disconnected", e.TOKEN_PROVIDER_ERROR = "token_provider_error", e.RECONNECTED = "reconnected", e.RECONNECTING = "reconnecting", e.WINDOW_BEFORE_UNLOAD = "beforeunload"
                }(o || (o = {})),
                function(e) {
                    e.DELETE = "DELETE", e.GET = "GET", e.OPTIONS = "OPTIONS", e.PATCH = "PATCH", e.POST = "POST", e.PUT = "PUT", e.TRACE = "TRACE"
                }(s || (s = {})),
                function(e) {
                    e.TRANSPORT_AUTHENTICATE = "transport_authenticate", e.TRANSPORT_AUTHENTICATE_FAILED = "transport_authenticate_failed", e.TRANSPORT_CONNECT = "transport_connect", e.TRANSPORT_DISCONNECT = "transport_disconnect", e.TRANSPORT_ENDPOINTS_RESOLVED = "transport_endpoints_resolved", e.TRANSPORT_BEFORE_PROCESS_REQUEST = "transport_before_process_request", e.TRANSPORT_BEFORE_SEND_REQUEST = "transport_before_send_request", e.TRANSPORT_BEFORE_RETURN_RESPONSE = "transport_before_return_response", e.TRANSPORT_REQUEST = "transport_request", e.PLUGIN_CONNECTION_INFO = "plugin_connection_info", e.PLUGIN_DISCONNECTED = "plugin_disconnected", e.PLUGIN_MESSAGE = "plugin_message", e.PLUGIN_REQUEST = "plugin_request", e.PLUGIN_ERROR = "plugin_error"
                }(a || (a = {})),
                function(e) {
                    e.RECONNECTION_FAILED = "reconnection_failed", e.EXPLICIT = "explicit", e.LOG_OUT = "log_out", e.WINDOW_BEFORE_UNLOAD = "window_before_unload"
                }(u || (u = {}));
            var h = n("TJ9n"),
                l = n("YY9Q"),
                f = n("gss/"),
                d = n("Eyjs");
            const _ = "dealer";
            class p {
                constructor(e) {
                    this.name = _, this._dealer = new d.a(e), this.api = {
                        hasConnectionInfo: () => this._dealer.hasConnectionId(),
                        getConnectionInfo: () => this._dealer.getConnectionInfo().then(e => Object.assign({
                            plugin: this.name
                        }, e))
                    }, this._onDealerConnectionId = this._onDealerConnectionId.bind(this), this._onDealerDisconnected = this._onDealerDisconnected.bind(this), this._onDealerMessage = this._onDealerMessage.bind(this), this._onDealerRequest = this._onDealerRequest.bind(this), this._onTransportConnect = this._onTransportConnect.bind(this), this._onTransportAuthenticate = this._onTransportAuthenticate.bind(this), this._onTransportDisconnect = this._onTransportDisconnect.bind(this)
                }
                _onDealerConnectionId(e) {
                    this._mediator && this._mediator.emit(a.PLUGIN_CONNECTION_INFO, Object.assign({
                        plugin: this.name
                    }, e.data))
                }
                _onDealerDisconnected(e) {
                    if (!this._mediator) return;
                    const t = e.data;
                    this._mediator.emit(a.PLUGIN_DISCONNECTED, {
                        plugin: this.name,
                        code: t.wsCode,
                        reason: t.reason
                    })
                }
                _onDealerMessage(e) {
                    this._mediator && this._mediator.emit(a.PLUGIN_MESSAGE, Object.assign({
                        plugin: this.name
                    }, e.data))
                }
                _onDealerRequest(e) {
                    this._mediator && this._mediator.emit(a.PLUGIN_REQUEST, Object.assign({
                        plugin: this.name
                    }, e.data))
                }
                _onTransportConnect(e) {
                    const t = e.data.endpoints,
                        n = e.data.awaitPromise;
                    t.dealer ? /^wss:/.test(t.dealer) ? n(this._dealer.connect(t.dealer)) : n(Promise.reject(new l.a(h.a.INVALID_ENDPOINT, "Dealer endpoint needs to be wss://"))) : n(Promise.reject(new l.a(h.a.ENDPOINT_NOT_DEFINED, 'No "dealer" endpoint defined.')))
                }
                _onTransportAuthenticate(e) {
                    const t = e.data;
                    t.awaitPromise(this._dealer.authenticate(t.token))
                }
                _onTransportDisconnect() {
                    this._dealer.disconnect()
                }
                _onDealerError(e) {
                    var t;
                    null === (t = this._mediator) || void 0 === t || t.emit(a.PLUGIN_ERROR, {
                        plugin: this.name,
                        error: e.data.error
                    })
                }
                attach(e, t) {
                    this._mediator = t, t.addListeners({
                        [a.TRANSPORT_CONNECT]: this._onTransportConnect,
                        [a.TRANSPORT_AUTHENTICATE]: this._onTransportAuthenticate,
                        [a.TRANSPORT_DISCONNECT]: this._onTransportDisconnect
                    }), this._dealer.addListeners({
                        [f.a.DISCONNECTED]: this._onDealerDisconnected,
                        [f.a.CONNECTION_ID]: this._onDealerConnectionId,
                        [f.a.MESSAGE]: this._onDealerMessage,
                        [f.a.REQUEST]: this._onDealerRequest,
                        [f.a.ERROR]: this._onDealerError
                    })
                }
                detach(e, t) {
                    this._mediator = void 0, t.removeListeners({
                        [a.TRANSPORT_CONNECT]: this._onTransportConnect,
                        [a.TRANSPORT_AUTHENTICATE]: this._onTransportAuthenticate,
                        [a.TRANSPORT_DISCONNECT]: this._onTransportDisconnect
                    }), this._dealer.removeListeners({
                        [f.a.DISCONNECTED]: this._onDealerDisconnected,
                        [f.a.CONNECTION_ID]: this._onDealerConnectionId,
                        [f.a.MESSAGE]: this._onDealerMessage,
                        [f.a.REQUEST]: this._onDealerRequest,
                        [f.a.ERROR]: this._onDealerError
                    })
                }
            }

            function E(e, t) {
                return new p(t)
            }
            n("1Fjq");
            var g = n("eBef");
            const T = {
                POST: !0,
                PUT: !0,
                DELETE: !0
            };
            var v;
            ! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN", e[e.OK = 200] = "OK", e[e.CREATED = 201] = "CREATED", e[e.ACCEPTED = 202] = "ACCEPTED", e[e.NO_CONTENT = 204] = "NO_CONTENT", e[e.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.UNAUTHORIZED = 401] = "UNAUTHORIZED", e[e.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", e[e.FORBIDDEN = 403] = "FORBIDDEN", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", e[e.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", e[e.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", e[e.TIMED_OUT = 408] = "TIMED_OUT", e[e.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", e[e.CONFLICT = 409] = "CONFLICT", e[e.GONE = 410] = "GONE", e[e.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", e[e.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", e[e.REQUEST_ENTITY_TOO_LARGE = 413] = "REQUEST_ENTITY_TOO_LARGE", e[e.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", e[e.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", e[e.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", e[e.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", e[e.BAD_GATEWAY = 502] = "BAD_GATEWAY", e[e.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", e[e.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", e[e.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED"
            }(v || (v = {}));
            class m {
                constructor(e) {
                    this.get = e.get.bind(e), this.has = e.has.bind(e)
                }
                get(e) {
                    return null
                }
                has(e) {
                    return !1
                }
            }
            class O {
                constructor(e, t = 0) {
                    this.url = "", this.status = 0, this.headers = null, this.body = null, this.offline = !1, this.timing = null, this.metadata = null, this.retries = {
                        count: 0
                    }, this.url = e, this.status = t, this.ok = t >= 200 && t <= 299
                }
                getStatusFamily() {
                    return 0 | this.status / 100
                }
            }
            const y = g.forTag("transport.http.fetch"),
                N = {
                    json: !0,
                    text: !0,
                    arraybuffer: !0,
                    blob: !0
                };

            function w() {
                return "function" === typeof fetch
            }

            function R(e) {
                if (!w()) return Promise.reject(new TypeError("Fetch is not supported"));
                if (!e.url) return Promise.reject(new TypeError("Request URL cannot be blank."));
                const t = e.method || "GET";
                let n = e.url,
                    r = null;
                if (t in T && e.payload ? r = e.payload : e.payload && (n += `?${e.payload}`), e.options.responseType && !(e.options.responseType in N)) return Promise.reject(new TypeError("Cannot set responseType: not supported in browser."));
                const i = {
                    mode: e.options.mode || "cors",
                    credentials: e.options.credentials || "same-origin",
                    redirect: e.options.redirect || "follow",
                    method: t
                };
                e.headers.count() && (i.headers = e.headers.toJSON()), r && (i.body = r);
                const o = Date.now();
                return fetch(n, i).then((function(t) {
                    let n;
                    n = e.options.ignoreResponseBody || t.status === v.NO_CONTENT ? null : "json" === e.options.responseType ? t.json().catch((function(e) {
                        return y.warn("Could not parse response as JSON:", e), null
                    })) : "arraybuffer" === e.options.responseType ? t.arrayBuffer() : "blob" === e.options.responseType ? t.blob() : t.text();
                    const r = e.options.parseResponseHeaders || t.status > 299 ? new m(t.headers) : null;
                    return Promise.all([t.url, t.status, r, n])
                })).then((function([t, n, r, i]) {
                    const s = new O(t, n);
                    if (s.body = i, s.headers = r, e.options.timing) {
                        const e = Date.now() - o;
                        s.timing = {
                            completed: e
                        }
                    }
                    return s
                })).catch((function() {
                    const t = new O(n);
                    if (e.options.timing) {
                        const e = Date.now() - o;
                        t.timing = {
                            completed: e
                        }
                    }
                    return t
                })).then((function(t) {
                    return e.options.connectionObserver && (t.offline = !e.options.connectionObserver.isOnline()), t
                }))
            }
            var b, A, I = n("Pb67"),
                P = n("wT4t"),
                C = n("IuD9"),
                S = n("ziih");
            ! function(e) {
                e[e.CONNECTION_ERROR = 0] = "CONNECTION_ERROR", e[e.INFORMATIONAL = 1] = "INFORMATIONAL", e[e.SUCCESS = 2] = "SUCCESS", e[e.REDIRECTION = 3] = "REDIRECTION", e[e.CLIENT_ERROR = 4] = "CLIENT_ERROR", e[e.SERVER_ERROR = 5] = "SERVER_ERROR"
            }(b || (b = {}));
            class D extends Error {
                constructor(e, t, n = null) {
                    super(t), this.name = "TransportError", this.message = t, this.code = e, this.origin = n
                }
            }
            class L extends C.a {
                constructor(e) {
                    super();
                    const t = "undefined" !== typeof window,
                        n = e && e.notifyBeforeUnload;
                    this._navigator = t && window.navigator || null, t && "function" === typeof window.addEventListener && (window.addEventListener("online", this.emitSync.bind(this, o.CONNECTION_ONLINE, null)), window.addEventListener("offline", this.emitSync.bind(this, o.CONNECTION_OFFLINE, null)), n && window.addEventListener(o.WINDOW_BEFORE_UNLOAD, this.emitSync.bind(this, o.WINDOW_BEFORE_UNLOAD, null)))
                }
                static create(e) {
                    return new L(e)
                }
                isOnline() {
                    const e = this._navigator;
                    return !(e && "onLine" in e) || e.onLine
                }
            }
            class U {
                constructor(e) {
                    this._headers = {}, this._count = 0, this._setAll(e)
                }
                _setAll(e) {
                    let t = 0;
                    for (const n in e) e.hasOwnProperty(n) && e[n] && (this._headers[n.toLowerCase()] = e[n], t++);
                    this._count = t
                }
                get(e) {
                    return this._headers[e.toLowerCase()] || null
                }
                has(e) {
                    return !!this._headers[e.toLowerCase()]
                }
                set(e, t) {
                    this._headers[e.toLowerCase()] = t, this._count++
                }
                delete(e) {
                    const t = e.toLowerCase();
                    this._headers[t] && this._count--, delete this._headers[e.toLowerCase()]
                }
                count() {
                    return this._count
                }
                toJSON() {
                    return Object.assign({}, this._headers)
                }
            }
            class k {
                constructor(e, t) {
                    this.url = e, this.method = (null === t || void 0 === t ? void 0 : t.method) || "GET", this.headers = new U(null === t || void 0 === t ? void 0 : t.headers), this.options = (null === t || void 0 === t ? void 0 : t.options) || {}, this.payload = null === t || void 0 === t ? void 0 : t.payload, this.urlExpanded = (null === t || void 0 === t ? void 0 : t.urlExpanded) || !1, this.retryOptions = (null === t || void 0 === t ? void 0 : t.retryOptions) || {}
                }
                static create(e, t) {
                    return new k(e, t)
                }
            }! function(e) {
                e.EVENT_ACCESS_TOKEN = "access_token", e.EVENT_CONNECTION_ID = "connection_id", e.EVENT_CONNECTION_OFFLINE = "connection_offline", e.EVENT_CONNECTION_ONLINE = "connection_online", e.EVENT_ENDPOINTS_RESOLVED = "endpoints_resolved"
            }(A || (A = {}));
            class x extends C.a {
                constructor(e, t) {
                    super(), this.EVENT_ACCESS_TOKEN = A.EVENT_ACCESS_TOKEN, this.EVENT_CONNECTION_ID = A.EVENT_CONNECTION_ID, this.EVENT_CONNECTION_OFFLINE = A.EVENT_CONNECTION_OFFLINE, this.EVENT_CONNECTION_ONLINE = A.EVENT_CONNECTION_ONLINE, this.EVENT_ENDPOINTS_RESOLVED = A.EVENT_ENDPOINTS_RESOLVED, this.StatusCode = v, this.StatusFamily = b, this.getConnectionId = e.getConnectionId.bind(e), this.getEndpoints = e.getEndpoints.bind(e), this.getInitTime = e.getInitTime.bind(e), this.getLastToken = e.getLastToken.bind(e), this.matchMessages = e.matchMessages.bind(e), this.unmatchMessages = e.unmatchMessages.bind(e), this.handlePushRequests = e.handlePushRequests.bind(e), this.unhandlePushRequests = e.unhandlePushRequests.bind(e), this.hasPlugin = e.hasPlugin.bind(e), this.getPluginAPI = e.getPluginAPI.bind(e);
                    const n = e.request.bind(e);
                    (null === t || void 0 === t ? void 0 : t.requestOptions) ? this.request = (e, r) => n(e, r ? Object.assign(Object.assign(Object.assign({}, null === t || void 0 === t ? void 0 : t.requestOptions), r), {
                        metadata: Object.assign(Object.assign({}, t.requestOptions.metadata), null === r || void 0 === r ? void 0 : r.metadata),
                        retry: Object.assign(Object.assign({}, t.requestOptions.retry), null === r || void 0 === r ? void 0 : r.retry)
                    }) : t.requestOptions): this.request = n, this.proxyEmit(e, o.ACCESS_TOKEN, A.EVENT_ACCESS_TOKEN), this.proxyEmit(e, o.CONNECTION_OFFLINE, A.EVENT_CONNECTION_OFFLINE), this.proxyEmit(e, o.CONNECTION_ONLINE, A.EVENT_CONNECTION_ONLINE), this.proxyEmit(e, o.ENDPOINTS_RESOLVED, A.EVENT_ENDPOINTS_RESOLVED), this.onAddListener(A.EVENT_CONNECTION_ID, this._onAddConnectionIdListener.bind(this, e.on.bind(e))), this.onRemoveListener(A.EVENT_CONNECTION_ID, this._onRemoveConnectionIdListener.bind(this, e.removeListener.bind(e)))
                }
                _onAddConnectionIdListener(e, t) {
                    t.preventDefault();
                    const n = t.data.listener,
                        r = e => {
                            const t = this.createEvent(A.EVENT_CONNECTION_ID, e.data);
                            n.call(this, t)
                        };
                    n.$proxy_wrapper = r, e(o.CONNECTION_ID, r, t.data.options)
                }
                _onRemoveConnectionIdListener(e, t) {
                    t.preventDefault();
                    const n = t.data.listener;
                    n.$proxy_wrapper && e(o.CONNECTION_ID, n.$proxy_wrapper, t.data.options)
                }
                removeAllListeners() {
                    return this
                }
            }
            class M {
                constructor() {
                    this._startTime = null, this._endTime = null
                }
                static create() {
                    return new M
                }
                start() {
                    if (null !== this._startTime) throw new Error("Measurement is already in progress.");
                    this._startTime = Date.now()
                }
                end() {
                    if (null === this._startTime || null !== this._endTime) throw new Error("Measurement is not in progress.");
                    this._endTime = Date.now()
                }
                getMetrics() {
                    if (null === this._startTime || null === this._endTime) throw new Error("Measurement is not done.");
                    return {
                        start_time: this._startTime,
                        end_time: this._endTime
                    }
                }
            }
            const j = g.forTag("transport.transport"),
                B = /^(?:https?:\/\/)?@([^\/]+)\//,
                F = /^(ws|http)s?:\/\/.*[^\/]$/,
                q = /^([a-zA-Z]{3},\ \d{1,2}\ [a-zA-Z]{3}\ (\d{1,2}.){3})/,
                H = 5e3,
                G = 2,
                W = "client:logout",
                V = 3540,
                Y = {
                    xhr: !0,
                    fetch: !0
                },
                z = {
                    CONNECTED: 1,
                    AUTHENTICATED: 4
                };

            function Q(e, t) {
                const n = `access_token=${encodeURIComponent(t)}`,
                    [r, i] = e.split("?");
                if (!i) return `${r}?${n}`;
                const o = i.replace(/access_token=[^&]*(&|$)/, `${n}$1`);
                return o !== i ? `${r}?${o}` : `${r}?${n}&${i}`
            }
            class K extends C.a {
                constructor(e) {
                    if (super(), this._plugins = {}, this._pluginMediator = new C.a, this._connectCalled = !1, this._authenticateCalled = !1, this._endpoints = null, this._lastToken = null, this._lastTokenExpiry = 0, this._refreshTokenPromise = null, this._authenticationPromise = null, this._reconnectTimeout = 0, this._isReconnecting = !1, this._initTime = 0, this._lastDisconnect = 0, this._stateMask = 0, this._quickDisconnectCount = 0, this._counter = new P.a({
                            curve: "exponential",
                            baseTime: 5e3,
                            ceiling: 15e3
                        }), this._stateAwareListeners = {
                            connected: [],
                            authenticated: [],
                            connection_id: [],
                            transport_connect: [],
                            transport_authenticate: []
                        }, this._stateAwareOperationMetrics = {
                            authenticated: null
                        }, this._stateAwareRunners = {
                            connected: null,
                            authenticated: null,
                            connection_id: null,
                            transport_connect: null,
                            transport_authenticate: null
                        }, !e) throw new TypeError("Argument `options` for Transport cannot be null.");
                    if (!e.providers) throw new TypeError("Argument `options.providers` for Transport cannot be null.");
                    this._ownerRef = "ownerRef" in e ? Object(e.ownerRef) : {}, this._tokenProvider = e.providers.token, this._endpointsProvider = e.providers.endpoints, this._XHR = e.XHR, this._Fetch = e.Fetch, this._reconnectionRetries = e.reconnectionRetries >= 0 ? e.reconnectionRetries : 3, this._requestMode = e.requestMode in Y ? e.requestMode : "xhr", this._forcePolyfillTypes = e.forcePolyfillTypes || {}, this._disableAutoLogout = "disableAutoLogout" in e && !!e.disableAutoLogout, this._disconnectBeforeUnload = e.disconnectBeforeUnload || !1, this._connectionObserver = new L({
                        notifyBeforeUnload: this._disconnectBeforeUnload
                    }), this.authenticate = this.authenticate.bind(this), this._authenticateWithToken = this._authenticateWithToken.bind(this), this._connectToEndpoints = this._connectToEndpoints.bind(this), this._parseProvidedToken = this._parseProvidedToken.bind(this), this._onConnected = this._onConnected.bind(this), this._onAuthenticated = this._onAuthenticated.bind(this), this._onAuthenticationFailed = this._onAuthenticationFailed.bind(this), this._init()
                }
                static create(e) {
                    return new K(e)
                }
                _init() {
                    this.onAddListener(o.CONNECTED, this._onAddListener.bind(this, "connected")), this.onAddListener(o.AUTHENTICATED, this._onAddListener.bind(this, "authenticated")), this.onAddListener(o.CONNECTION_ID, this._onAddListener.bind(this, "connection_id")), this.onRemoveListener(o.CONNECTED, this._onRemoveListener.bind(this, "connected")), this.onRemoveListener(o.AUTHENTICATED, this._onRemoveListener.bind(this, "authenticated")), this.onRemoveListener(o.CONNECTION_ID, this._onRemoveListener.bind(this, "connection_id")), this._pluginMediator.onAddListener(a.TRANSPORT_CONNECT, this._onAddListener.bind(this, "transport_connect")), this._pluginMediator.onAddListener(a.TRANSPORT_AUTHENTICATE, this._onAddListener.bind(this, "transport_authenticate")), this._pluginMediator.onRemoveListener(a.TRANSPORT_CONNECT, this._onRemoveListener.bind(this, "transport_connect")), this._pluginMediator.onRemoveListener(a.TRANSPORT_AUTHENTICATE, this._onRemoveListener.bind(this, "transport_authenticate")), "fetch" !== this._requestMode || this._Fetch && this._Fetch.isSupported() || (j.warn('Default "fetch" request mode unavailable; Fallback to "xhr"'), this._requestMode = "xhr");
                    const e = this._pluginMediator;
                    e.addListeners({
                        [a.PLUGIN_DISCONNECTED]: this._onPluginDisconnected.bind(this)
                    }), this.proxyEmit(e, a.PLUGIN_CONNECTION_INFO, o.CONNECTION_ID), this._disableAutoLogout || this.matchMessages(W, () => this._onLogout()), this._connectionObserver.on(o.CONNECTION_ONLINE, () => this._onOnline()), this._connectionObserver.on(o.CONNECTION_OFFLINE, () => this._onOffline()), this._connectionObserver.on(o.WINDOW_BEFORE_UNLOAD, () => this._disconnect(u.WINDOW_BEFORE_UNLOAD))
                }
                _runStateAwareQueues(e, t) {
                    const n = this._stateAwareListeners[e].splice(0);
                    for (const r of n) r.call(this, t);
                    this._stateAwareRunners[e] = null
                }
                _connect() {
                    return this._stateMask & z.CONNECTED ? Promise.resolve(!1) : this._connectionObserver.isOnline() ? this._performConnect() : new Promise((e, t) => {
                        this._connectionObserver.once(o.CONNECTION_ONLINE, () => {
                            this._performConnect().then(e, t)
                        })
                    })
                }
                _performConnect() {
                    return new Promise(e => {
                        e(this._endpointsProvider(this.toPublic()))
                    }).catch(e => !e || e.code ? Promise.reject(e) : Promise.reject(new D(i.TRANSPORT_ENDPOINTS_PROVIDER_ERROR, e.message || "Endpoints provider error", e))).then(this._connectToEndpoints).then(this._onConnected).catch(e => {
                        const t = e && e.error ? e.error : e;
                        return this.emit(o.CONNECTION_FAILED, {
                            error: t
                        }), Promise.reject(t)
                    })
                }
                _connectToEndpoints(e) {
                    const t = {
                        webgate: "",
                        webapi: ""
                    };
                    for (const i in e) {
                        if (!e.hasOwnProperty(i)) continue;
                        let n = e[i];
                        n && (F.test(n) && (n += "/"), t[i] = n)
                    }
                    this._endpoints = t, this.emit(o.ENDPOINTS_RESOLVED, {
                        endpoints: Object.assign({}, t)
                    });
                    const n = [],
                        r = e => {
                            n.push(e)
                        };
                    return new Promise((e, i) => {
                        this._pluginMediator.emitAndWait(a.TRANSPORT_CONNECT, {
                            endpoints: Object.assign({}, t),
                            awaitPromise: r
                        }, () => {
                            Promise.all(n).then(() => e(!0), i)
                        })
                    })
                }
                _refreshToken(e = !1) {
                    if (this._refreshTokenPromise) return this._refreshTokenPromise;
                    if (!e && this._lastToken && this._lastTokenExpiry > Date.now()) return Promise.resolve(this._lastToken);
                    this._refreshTokenPromise = new Promise(e => {
                        e(this._tokenProvider())
                    }).then(this._parseProvidedToken);
                    const t = () => {
                        this._refreshTokenPromise = null
                    };
                    return this._refreshTokenPromise.then(t, t), this._refreshTokenPromise.catch(e => {
                        const t = (null === e || void 0 === e ? void 0 : e.code) ? e : new D(i.TRANSPORT_TOKEN_PROVIDER_ERROR, (null === e || void 0 === e ? void 0 : e.message) || "Token provider error", e);
                        return this.emit(o.TOKEN_PROVIDER_ERROR, {
                            error: t
                        }), Promise.reject(t)
                    })
                }
                _parseProvidedToken(e) {
                    let t, n;
                    if (Array.isArray(e) ? (t = e[0], n = parseInt(e[1], 10), isNaN(n) && (n = V)) : (t = e, n = V), !t) throw this._lastToken = null, this._lastTokenExpiry = 0, j.error("No token was provided"), new D(i.TRANSPORT_INVALID_TOKEN, `Token provider returned an invalid token, "${t}"`);
                    if (this._lastToken === t) {
                        j.error("TokenProvider returned same token twice.");
                        const e = new D(i.TRANSPORT_STALE_TOKEN, "Token provider returned the same token twice.");
                        throw this._lastToken = null, this._lastTokenExpiry = 0, e
                    }
                    return this._lastToken = t, this._lastTokenExpiry = Date.now() + 1e3 * n, this.emit(o.ACCESS_TOKEN, {
                        token: t
                    }), t
                }
                _authenticateWithToken(e) {
                    if (!this._endpoints) return Promise.resolve(!0);
                    const t = [],
                        n = e => {
                            t.push(e)
                        };
                    return new Promise((r, i) => {
                        this._pluginMediator.emitAndWait(a.TRANSPORT_AUTHENTICATE, {
                            token: e,
                            awaitPromise: n
                        }, () => {
                            Promise.all(t).then(() => r(!0), i)
                        })
                    })
                }
                _authenticate(e) {
                    if (!(this._stateMask & z.CONNECTED)) return Promise.reject(new D(i.TRANSPORT_INVALID_STATE, "Cannot authenticate disconnected transport."));
                    if (this._authenticationPromise) return this._authenticationPromise;
                    const t = M.create();
                    return t.start(), this._authenticationPromise = I.a.init(() => this._refreshToken(e).then(this._authenticateWithToken), {
                        curve: "exponential",
                        maxRetries: 2,
                        baseTime: 500
                    }).then(() => this._onAuthenticated(t)).catch(e => this._onAuthenticationFailed(e, t)), this._authenticationPromise
                }
                _performDisconnect(e) {
                    this._stateMask = 0;
                    const t = !e;
                    return e && this.emit(o.DISCONNECTED, {
                        reason: e
                    }), this._pluginMediator.emitSync(a.TRANSPORT_DISCONNECT, {
                        supressed: t
                    }), !0
                }
                _createReconnector() {
                    let e = !1;
                    return () => (this._isReconnecting = !0, this.emit(o.RECONNECTING, null), this._performDisconnect(), this._connect().then(() => !!this._authenticateCalled && this._authenticate(e).then(t => (e = !1, t), t => (e = !0, Promise.reject(t)))).then(() => (this._isReconnecting = !1, this.emit(o.RECONNECTED, null), !0)))
                }
                _tryToReconnect() {
                    this._isReconnecting || (this._stateMask = 0, I.a.init(this._createReconnector(), {
                        baseTime: 1e3,
                        maxTime: 15e3,
                        maxRetries: this._reconnectionRetries
                    }).catch(() => {
                        this._stateMask = 0, this._isReconnecting = !1, this.emit(o.DISCONNECTED, {
                            reason: u.RECONNECTION_FAILED
                        })
                    }))
                }
                _sendRequest(e, t = {}, n = {}) {
                    return this._processRequestArgs(e, t).then(e => e.options.forget ? this._sendFireAndForgetRequest(e) : this._sendRetriedRequest(e, n))
                }
                _processRequestArgs(e, t = {}) {
                    var n;
                    let r = e,
                        i = !1;
                    const o = Object.assign(Object.assign({}, t), {
                        forcePolyfill: !!(t.responseType && t.responseType in this._forcePolyfillTypes),
                        requestMode: null !== (n = null === t || void 0 === t ? void 0 : t.requestMode) && void 0 !== n ? n : this._requestMode,
                        connectionObserver: this._connectionObserver,
                        metadata: (null === t || void 0 === t ? void 0 : t.metadata) || null
                    });
                    if (B.test(r)) {
                        i = !0;
                        try {
                            r = this._tryExpandSpecialURL(r)
                        } catch (a) {
                            return Promise.reject(a)
                        }
                        "authorize" in o || (o.authorize = !0, o.autoAuthorized = !0)
                    }
                    const s = Object.assign({
                        maxRetries: G,
                        curve: "exponential"
                    }, t.retry);
                    return Promise.resolve(k.create(r, {
                        method: t.method,
                        headers: t.headers,
                        payload: t.payload,
                        options: o,
                        urlExpanded: i,
                        retryOptions: s
                    }))
                }
                _tryExpandSpecialURL(e) {
                    const t = this._endpoints;
                    return e.replace(B, (e, n) => {
                        if (!t.hasOwnProperty(n)) throw new TypeError(`Cannot replace endpoint @${n}: endpoint not defined.`);
                        return t[n]
                    })
                }
                _sendFireAndForgetRequest(e) {
                    const {
                        url: t,
                        method: n,
                        options: r
                    } = e;
                    return "GET" !== n && "POST" !== n ? Promise.reject(new D(i.TRANSPORT_UNSUPPORTED_OPTION, `Option 'forget' cannot be used for ${n} request.`)) : !r.autoAuthorized && r.authorize ? Promise.reject(new D(i.TRANSPORT_UNSUPPORTED_OPTION, "Option 'forget' cannot be used for authorized request.")) : (r.requestMode = "xhr", r.authorize = !1, r.ignoreResponseBody = !0, "GET" === n ? "function" === typeof fetch ? fetch(t, {
                        mode: "no-cors"
                    }).catch(() => {}) : "function" === typeof Image ? (new Image).src = t : this._sendRetriedRequest(e, {}).catch(() => {}) : "POST" === n && ("undefined" !== typeof navigator && (null === navigator || void 0 === navigator ? void 0 : navigator.sendBeacon) ? navigator.sendBeacon(e.url, e.payload) : "function" === typeof fetch ? fetch(t, {
                        method: "POST",
                        mode: "no-cors",
                        body: e.payload
                    }).catch(() => {}) : this._sendRetriedRequest(e, {}).catch(() => {})), Promise.resolve(new O(t, 0)))
                }
                _sendRetriedRequest(e, t) {
                    const n = e.retryOptions;
                    let r = !1;
                    const i = () => this._setAuthHeader(e, r),
                        s = this._connectionObserver,
                        u = new I.a(() => {
                            let u;
                            return u = s.isOnline() ? i() : new Promise((t, n) => {
                                e.options.allowOffline ? i().then(t, n) : s.once(o.CONNECTION_ONLINE, () => {
                                    i().then(t, n)
                                })
                            }), u.then(() => {
                                let n;
                                if (this._pluginMediator.emitSync(a.TRANSPORT_BEFORE_SEND_REQUEST, {
                                        request: e,
                                        context: t
                                    }), "fetch" === e.options.requestMode && this._Fetch && this._Fetch.isSupported()) n = this._Fetch.request(e);
                                else {
                                    if (!this._XHR) throw new Error("No available request mechanisms.");
                                    n = this._XHR.request(e)
                                }
                                return n
                            }).then(t => {
                                let i = null;
                                if (t.headers && (i = t.headers.get("Retry-After")), t.status === v.UNAUTHORIZED && !e.options.ignoreUnauthorized) return r = !0, Promise.reject(t);
                                if ("function" === typeof(null === n || void 0 === n ? void 0 : n.condition) && (n.condition(t, b) || i)) {
                                    if (null !== i) {
                                        const e = parseInt(i, 10);
                                        q.test(i) ? t.retryAfter = new Date(i).getTime() - Date.now() : e > 0 && (t.retryAfter = 1e3 * e)
                                    }
                                    return Promise.reject(t)
                                }
                                return Promise.resolve(t)
                            })
                        }, n);
                    return u.start().catch(this._handleRetriedRequestError).then(n => (n.metadata = e.options.metadata, n.retries = n.retries || {}, n.retries.count = u.getRetryCount(), this._pluginMediator.emitSync(a.TRANSPORT_BEFORE_RETURN_RESPONSE, {
                        context: t,
                        response: n
                    }), e.options.rejectNotOk && !n.ok ? Promise.reject(n) : n))
                }
                _setAuthHeader(e, t) {
                    if (!e.options.authorize) return Promise.resolve(e);
                    const n = () => this._refreshToken(t).then(t => (e.headers.set("Authorization", `Bearer ${t}`), e));
                    return this._stateMask & z.AUTHENTICATED ? n() : new Promise((e, t) => {
                        j.info("Auth header setting awaiting authentication."), this.once(o.AUTHENTICATED, () => {
                            j.info("Auth header set after authentication."), n().then(e, t)
                        })
                    })
                }
                _handleRetriedRequestError(e) {
                    return e instanceof O ? Promise.resolve(e) : Promise.reject(e)
                }
                _onAddListener(e, t) {
                    const n = t.data.options;
                    if (n.ignoreCurrentState) return;
                    let r;
                    switch (e) {
                        case "connected":
                            if (!this.isConnected()) return;
                            r = Promise.resolve(this.createEvent(o.CONNECTED, null));
                            break;
                        case "authenticated":
                            {
                                if (!this.isAuthenticated()) return;
                                const e = this._stateAwareOperationMetrics.authenticated;r = Promise.resolve(this.createEvent(o.AUTHENTICATED, {
                                    timing: e
                                }));
                                break
                            }
                        case "connection_id":
                            {
                                const e = this.getPluginAPI("dealer");
                                if (!e || !e.hasConnectionInfo()) return;r = e.getConnectionInfo().then(e => this.createEvent(o.CONNECTION_ID, e));
                                break
                            }
                        case "transport_connect":
                            if (!this.isConnected() || !this._endpoints) return;
                            r = Promise.resolve(this._pluginMediator.createEvent(a.TRANSPORT_CONNECT, {
                                endpoints: Object.assign({}, this._endpoints),
                                awaitPromise: e => {}
                            }));
                            break;
                        case "transport_authenticate":
                            if (!this.isAuthenticated()) return;
                            r = this._refreshToken().then(e => this._pluginMediator.createEvent(a.TRANSPORT_AUTHENTICATE, {
                                token: e,
                                awaitPromise: e => {}
                            }));
                            break;
                        default:
                            return
                    }
                    const i = t.data.listener;
                    this._stateAwareListeners[e].push(i);
                    const s = this._stateAwareRunners;
                    s[e] || (s[e] = r.then(this._runStateAwareQueues.bind(this, e)), n.once && t.preventDefault())
                }
                _onRemoveListener(e, t) {
                    const n = t.data.options;
                    if (n.ignoreCurrentState || n.once) return;
                    const r = t.data.listener,
                        i = this._stateAwareListeners[e].indexOf(r); - 1 !== i && this._stateAwareListeners[e].splice(i, 1)
                }
                _getQuickDisconnectTimeout() {
                    return this._counter.getTime(this._quickDisconnectCount)
                }
                _onPluginDisconnected(e) {
                    const t = Date.now(),
                        n = t - this._lastDisconnect;
                    this._performDisconnect(), e.data.code !== S.a.CLOSE ? this._connectionObserver.isOnline() && (n < H ? (this._reconnectTimeout && clearTimeout(this._reconnectTimeout), this._quickDisconnectCount++, this.emit(o.SHORT_SESSION_DISCONNECTED, {
                        disconnectCount: this._quickDisconnectCount,
                        sessionLength: n
                    }), this._reconnectTimeout = setTimeout(this._tryToReconnect.bind(this), this._getQuickDisconnectTimeout())) : (this._quickDisconnectCount = 0, this._lastDisconnect = t, this._tryToReconnect())) : this._quickDisconnectCount = 0
                }
                _onOnline() {
                    this.emit(o.CONNECTION_ONLINE, null), this._connectCalled && this._tryToReconnect()
                }
                _onOffline() {
                    this.emit(o.CONNECTION_OFFLINE, null), this._performDisconnect()
                }
                _onConnected() {
                    return this._stateMask |= z.CONNECTED, this.emit(o.CONNECTED, null), Promise.resolve(!0)
                }
                _onAuthenticated(e) {
                    e.end(), clearTimeout(this._reconnectTimeout), this._authenticationPromise = null, this._stateMask |= z.AUTHENTICATED, this._initTime = Date.now();
                    const t = e.getMetrics();
                    return this.emit(o.AUTHENTICATED, {
                        timing: t
                    }), this._stateAwareOperationMetrics.authenticated = t, Promise.resolve(!0)
                }
                _onAuthenticationFailed(e, t) {
                    t.end();
                    const n = e && e.error ? e.error : e;
                    this._authenticationPromise = null, this._stateMask &= ~z.AUTHENTICATED;
                    const r = {
                        error: n,
                        timing: t.getMetrics()
                    };
                    return this.emit(o.AUTHENTICATION_FAILED, r), this._pluginMediator.emit(a.TRANSPORT_AUTHENTICATE_FAILED, r), Promise.reject(n)
                }
                _onLogout() {
                    const e = () => {
                        this._lastToken = null, this._lastTokenExpiry = 0, this.emit(o.LOGGED_OUT, null)
                    };
                    this._disconnect(u.LOG_OUT).then(e, e)
                }
                _disconnect(e) {
                    if (!this._connectCalled) return Promise.resolve(!1);
                    this._connectCalled = !1, this._authenticateCalled = !1;
                    const t = this.isConnected() ? o.BEFORE_ONLINE_DISCONNECT : o.BEFORE_OFFLINE_DISCONNECT,
                        n = [];
                    return this.emitSync(t, {
                        awaitPromise: e => {
                            n.push(e.catch(() => {}))
                        }
                    }), Promise.all(n).then(() => this._performDisconnect(e))
                }
                isConnected() {
                    return !!(this._stateMask & z.CONNECTED)
                }
                isAuthenticated() {
                    return !!(this._stateMask & z.AUTHENTICATED)
                }
                isReconnecting() {
                    return this._isReconnecting
                }
                isOnline() {
                    return this._connectionObserver.isOnline()
                }
                connect() {
                    return this._connectCalled = !0, this._connect()
                }
                authenticate() {
                    return this._authenticateCalled = !0, this._authenticate(!0)
                }
                disconnect() {
                    return this._disconnect(u.EXPLICIT)
                }
                forceDisconnect() {
                    return this._connectCalled ? (this._connectCalled = !1, this._authenticateCalled = !1, this._performDisconnect(u.EXPLICIT), Promise.resolve(!0)) : Promise.resolve(!1)
                }
                forceTokenRefresh() {
                    return this._refreshToken(!0).then(() => !0)
                }
                getInitTime() {
                    return this._initTime
                }
                getEndpoints() {
                    return this._endpoints ? Object.assign({}, this._endpoints) : null
                }
                getLastToken() {
                    return this._lastToken
                }
                toPublic(e) {
                    return new x(this, e)
                }
                hasOwnerRef(e) {
                    return this._ownerRef === e
                }
                appendTokenQuery(e) {
                    return this._refreshToken().then(t => Q(e, t))
                }
                appendLastTokenQuery(e) {
                    return this._lastToken ? Q(e, this._lastToken) : e
                }
                matchMessages(e, t, n) {
                    if (!e) throw new TypeError('Message "matcher" cannot be null.');
                    if ("function" !== typeof t) throw new TypeError("Message callback cannot be null.");
                    const r = r => {
                        const i = r.data.message;
                        !i.uri || !i.uri.match(e) || n && n !== r.data.plugin || t(i)
                    };
                    r.__matchMessagesExp = e, r.__matchMessagesPlugin = n, t.__matchMessagesWrapper = r, this._pluginMediator.on(a.PLUGIN_MESSAGE, r)
                }
                unmatchMessages(e, t, n) {
                    if ("function" !== typeof t) throw new TypeError("Message callback cannot be null.");
                    const r = t.__matchMessagesWrapper;
                    return !(!r || r.__matchMessagesExp !== e || r.__matchMessagesPlugin !== n) && (this._pluginMediator.removeListener(a.PLUGIN_MESSAGE, r), !0)
                }
                handlePushRequests(e, t, n) {
                    if (!e) throw new TypeError('Push request "matcher" cannot be null.');
                    if ("function" !== typeof t) throw new TypeError("Push request callback cannot be null.");
                    const r = r => {
                        const i = r.data.request;
                        !i.message_ident || !i.message_ident.match(e) || n && n !== r.data.plugin || Promise.resolve(t(i)).then(r.data.reply)
                    };
                    r.__matchRequestExp = e, r.__matchRequestPlugin = n, t.__matchRequestWrapper = r, this._pluginMediator.on(a.PLUGIN_REQUEST, r)
                }
                unhandlePushRequests(e, t, n) {
                    if ("function" !== typeof t) throw new TypeError("Push request callback cannot be null.");
                    const r = t.__matchRequestWrapper;
                    return !(!r || r.__matchRequestExp !== e || r.__matchRequestPlugin !== n) && (this._pluginMediator.removeListener(a.PLUGIN_REQUEST, r), !0)
                }
                request(e, t) {
                    var n;
                    const r = {
                        uri: e,
                        options: t,
                        context: {}
                    };
                    this._pluginMediator.emitSync(a.TRANSPORT_BEFORE_PROCESS_REQUEST, r);
                    const i = this._sendRequest.bind(this, r.uri, r.options, r.context);
                    return !(null === (n = r.options) || void 0 === n ? void 0 : n.allowOffline) && !this._connectionObserver.isOnline() || B.test(r.uri) && !(this._stateMask & z.CONNECTED) ? new Promise((e, t) => {
                        this.once(o.CONNECTED, () => {
                            i().then(e, t)
                        })
                    }) : i()
                }
                addPlugin(e, t) {
                    const n = e(this, t),
                        r = n.name;
                    if (this._plugins[r]) throw new TypeError("Plugin is already added.");
                    return n.attach(this, this._pluginMediator), this._plugins[r] = n, r
                }
                removePlugin(e) {
                    const t = this._plugins[e];
                    return !!t && (t.detach(this, this._pluginMediator), this._plugins[e] = void 0, !0)
                }
                hasPlugin(e) {
                    return !!this._plugins[e]
                }
                getPluginAPI(e) {
                    const t = this._plugins[e];
                    return t && t.api ? t.api : null
                }
                getConnectionId(e = "dealer") {
                    const t = this._plugins[e];
                    return t ? t.api && function(e) {
                        return "getConnectionInfo" in e.api
                    }(t) ? t.api.getConnectionInfo().then(e => e.id) : Promise.reject(new TypeError(`Plugin ${t} is not a socket plugin.`)) : Promise.reject(new TypeError(`Cannot retrieve connection id for plugin ${t}.`))
                }
                removeAllListeners() {
                    return this
                }
            }
            class X extends Error {
                constructor(e, t, n) {
                    super(e), this.name = "RequestError", this.message = e, this.code = t, this.status = n || 0
                }
            }
            class $ {
                constructor(e) {
                    this._headers = {}, this._init(e)
                }
                _init(e) {
                    if (e) {
                        const t = e.split("\r\n");
                        for (const e of t) {
                            const t = e.indexOf(": ");
                            if (t > 0) {
                                const n = e.substring(0, t).toLowerCase(),
                                    r = e.substring(t + 2);
                                this._headers[n] = r
                            }
                        }
                    }
                }
                get(e) {
                    return this._headers[e.toLowerCase()] || null
                }
                has(e) {
                    return this._headers.hasOwnProperty(e.toLowerCase())
                }
            }
            const Z = g.forTag("transport.http.xhr"),
                J = function() {},
                ee = {
                    json: !0,
                    text: !0,
                    document: !0
                },
                te = {},
                ne = Promise.resolve(te);

            function re() {
                this.onabort = J, this.onerror = J, this.onload = J, this.onloadend = J
            }

            function ie(e, t, n) {
                var r;
                const i = Date.now(),
                    o = this.status,
                    s = new O(this.responseURL || e.url, o);
                s.body = null;
                const a = e.options;
                if (a.timing && (s.timing = {
                        completed: i - t
                    }), (null === (r = a.connectionObserver) || void 0 === r ? void 0 : r.isOnline) && (s.offline = !a.connectionObserver.isOnline()), (a.parseResponseHeaders || o > 299) && (s.headers = new $(this.getAllResponseHeaders())), !a.ignoreResponseBody && o !== v.NO_CONTENT) {
                    const e = a.responseType || "";
                    if (!a.forcePolyfill && "response" in this && e === this.responseType) s.body = this.response;
                    else if ("document" === e) s.body = this.responseXML;
                    else if ("json" === e) try {
                        s.body = JSON.parse(this.responseText)
                    } catch (u) {
                        Z.warn("Could not parse response as JSON:", u), s.body = null
                    } else "text" !== e && "" !== e || (s.body = this.responseText)
                }
                n(s)
            }

            function oe(e, t, n) {
                4 === this.readyState ? t(new O(this.responseURL || e, this.status)) : n(new X(i.HTTP_REQUEST_FAILED, "Request cannot be completed.", this.status))
            }

            function se(e) {
                return new Promise((t, n) => {
                    var r;
                    const i = new XMLHttpRequest;
                    let o = e.url;
                    if (!o) return void n(new TypeError("Request URL cannot be blank."));
                    let s = null;
                    const a = e.method || "GET",
                        u = e.payload || "";
                    a in T && u ? s = u : u && (o += `?${u}`), i.open(a, o, !0), i.onerror = oe.bind(i, o, t, n), i.onabort = re, i.onloadend = re, i.onprogress = J;
                    const c = e.options;
                    "include" === c.credentials && (i.withCredentials = !0);
                    const h = c.responseType;
                    if (h)
                        if (c.forcePolyfill) {
                            if (!(h in ee)) return void n(new TypeError(`Cannot polyfill responseType "${h}"`))
                        } else {
                            if (!("responseType" in i) && !(h in ee)) return void n(new TypeError("Cannot set responseType: not supported in browser."));
                            try {
                                i.responseType = h
                            } catch (f) {
                                return void n(new TypeError(`Unknown responseType "${h}".`))
                            }
                            if (i && h !== i.responseType && !(h in ee)) return void n(new TypeError(`Unknown responseType "${h}".`))
                        }
                    const l = e.headers.count() ? e.headers.toJSON() : null;
                    if (l)
                        for (const e in l)
                            if (l.hasOwnProperty(e) && l[e]) try {
                                i.setRequestHeader(e, l[e])
                            } catch (f) {
                                return void n(f)
                            }
                    i.onload = ie.bind(i, e, Date.now(), t);
                    try {
                        i.send(s)
                    } catch (f) {
                        return void n(f)
                    }
                    null === (r = c.canceller) || void 0 === r || r.then(() => i.abort(), () => i.abort())
                })
            }

            function ae(e) {
                const t = e.options.canceller;
                return (t ? Promise.race([t, ne]) : ne).then(t => t !== te ? new Promise(() => {}) : se(e))
            }
            class ue extends Error {
                constructor(e, t, n = -1) {
                    super(t), this.name = "XResolveError", this.message = t, this.code = e, this.status = n
                }
            }
            const ce = "https://apresolve.spotify.com/",
                he = {
                    DEALER: "dealer",
                    WEBGATE: "spclient"
                },
                le = "dealer.spotify.com",
                fe = "https://api.spotify.com/",
                de = {
                    spclient: "spclient.wg.spotify.com",
                    exp: "exp.wg.spotify.com",
                    partners: "partners.wg.spotify.com"
                };

            function _e(e = {}) {
                const t = e.dealer || he.DEALER,
                    n = e.webgate || he.WEBGATE,
                    r = `${ce}?type=${t}&type=${n}`;
                return function(e) {
                    return e.request(r, {
                        forcePolyfill: !0,
                        responseType: "json",
                        retry: {
                            maxRetries: 3,
                            curve: "exponential",
                            condition: function(e, t) {
                                return e.getStatusFamily() !== t.SUCCESS
                            }
                        },
                        metadata: {
                            noRequestTransform: !0
                        }
                    }).then(e => {
                        var r, o, s, a, u;
                        const c = e.body,
                            h = {
                                dealer: null !== (o = null === (r = null === c || void 0 === c ? void 0 : c[t]) || void 0 === r ? void 0 : r[0]) && void 0 !== o ? o : le,
                                webgate: null !== (u = null !== (a = null === (s = null === c || void 0 === c ? void 0 : c[n]) || void 0 === s ? void 0 : s[0]) && void 0 !== a ? a : de[n]) && void 0 !== u ? u : de.spclient,
                                webapi: fe
                            };
                        if (!h.dealer || !h.webgate) throw new ue(i.XRESOLVE_INCOMPLETE_RESPONSE, "X-Resolve responded with incomplete results.", e.status);
                        return h
                    }).then(e => (e.dealer = `wss://${e.dealer.replace(/:443$/,"")}`, e.webgate = `https://${e.webgate.replace(/:443$/,"")}`, e))
                }
            }

            function pe(e) {
                const t = Object.assign({}, e);
                return t.XHR || (t.XHR = c), t.Fetch = r, K.create(t)
            }

            function Ee(e) {
                const t = pe(e);
                return t.addPlugin(E, {
                    WebSocket: WebSocket
                }), t
            }
        },
        "8hDA": function(e, t, n) {
            "use strict";
            var r;
            n.r(t), n.d(t, "Environment", (function() {
                    return r
                })), n.d(t, "EventSenderEvent", (function() {
                    return i
                })), n.d(t, "createEventSender", (function() {
                    return S
                })),
                function(e) {
                    e.BACKEND = "BACKEND", e.BROWSER = "BROWSER", e.BROWSER_NON_AUTH = "BROWSER_NON_AUTH", e.DESKTOP = "DESKTOP", e.DEVICE = "DEVICE", e.DEVICE_NON_AUTH = "DEVICE_NON_AUTH"
                }(r || (r = {}));
            var i, o = n("mrSG"),
                s = n("4CIH"),
                a = n("lEuQ"),
                u = n("IuD9");
            ! function(e) {
                e.UPLOAD_SUCCEEDED = "upload_succeeded", e.UPLOAD_FAILED = "upload_failed", e.UPLOAD_REQUEST_FAILED = "upload_request_failed"
            }(i || (i = {}));
            const c = a.a.forTag("Uploader"),
                h = 20,
                l = 100,
                f = "@webgate/gabo-receiver-service/v3/events",
                d = "@webgate/gabo-receiver-service/public/v3/events";

            function _(e, t) {
                const {
                    event_name: n,
                    fragments: r
                } = e, {
                    message: i
                } = r;
                return {
                    reason: t,
                    contexts: Object(o.__rest)(r, ["message"]),
                    event_data: {
                        name: n,
                        data: i
                    }
                }
            }
            class p extends u.a {
                constructor(e) {
                    var t;
                    super(), this._suppressPersist = !1, this._backoff = !1, this._authorize = null === (t = e.authorize) || void 0 === t || t, this._transport = e.transport, this._suppressPersist = !!e.suppressPersist, this._endpoint = this._authorize ? f : d
                }
                _uploadBatch(e, t = !1) {
                    const n = this._transport,
                        r = t && this._authorize ? n.appendLastTokenQuery(this._endpoint) : this._endpoint;
                    return this._transport.request(r, {
                        method: s.Method.POST,
                        metadata: {
                            eventSenderEventNames: e.map(e => e.event_name)
                        },
                        headers: {
                            "content-type": "application/json"
                        },
                        responseType: "json",
                        parseResponseHeaders: !0,
                        payload: JSON.stringify({
                            suppress_persist: this._suppressPersist,
                            events: e
                        }),
                        forget: t,
                        authorize: !t && this._authorize
                    }).then(this._parseUploadResponse.bind(this, e, t))
                }
                _parseUploadResponse(e, t, n) {
                    if (t) return Promise.resolve([]);
                    const {
                        body: r,
                        headers: o,
                        status: s
                    } = n, a = this._authorize;
                    if (200 !== s || !r) return c.warn("Upload request failed", n), this.emit(i.UPLOAD_REQUEST_FAILED, {
                        authorize: a,
                        status: s
                    }), this._backoff = !0, Promise.resolve(e);
                    const u = [],
                        h = [],
                        l = [];
                    if (r.error && r.error.length) {
                        c.info("response errors", e, r.error);
                        for (let t = 0, n = r.error.length; t < n; t++) {
                            const {
                                transient: n,
                                index: i,
                                reason: o
                            } = r.error[t], s = _(e[i], o);
                            n ? (u.push(e[i]), h.push(s)) : l.push(s)
                        }
                    }
                    this._backoff = !("true" !== (null === o || void 0 === o ? void 0 : o.get("backoff")));
                    const f = h.length + l.length,
                        d = e.length - f;
                    return f > 0 && this.emit(i.UPLOAD_FAILED, {
                        authorize: a,
                        rejected: l,
                        will_retry: h
                    }), d > 0 && this.emit(i.UPLOAD_SUCCEEDED, {
                        authorize: this._authorize,
                        num_events: d
                    }), Promise.resolve(u)
                }
                upload(e, t = []) {
                    let n = t;
                    if (!e.length) return Promise.resolve({
                        nack: n,
                        backoff: this._backoff
                    });
                    const r = [...e];
                    return this._uploadBatch(r.splice(0, h)).then(e => {
                        if (n = [...n, ...e], this._backoff) n = [...n, ...r];
                        else if (r.length) return this.upload(r, n);
                        return {
                            nack: n,
                            backoff: this._backoff
                        }
                    })
                }
                lastUpload(e) {
                    return e.length ? this._uploadBatch(e.splice(0, l), !0).then(e => 0 === e.length, () => !1) : Promise.resolve(!0)
                }
                shouldBackoff() {
                    return this._backoff
                }
            }

            function E(e) {
                return new p(e)
            }
            var g, T = n("Pb67"),
                v = n("Z+ti");
            ! function(e) {
                e.INVALID_PAYLOAD = "INVALID_PAYLOAD", e.INVALID_NAME = "INVALID_NAME", e.UNKNOWN_OWNER = "UNKNOWN_OWNER", e.PAYLOAD_SIZE_LIMIT_EXCEEDED = "PAYLOAD_SIZE_LIMIT_EXCEEDED"
            }(g || (g = {}));
            var m = {
                    tagged: "2.1.1-4e8d832",
                    version: "2.1.1",
                    revision: "4e8d832"
                },
                O = n("RrCY");
            class y {
                static pushToArrIfMissing(e, t) {
                    -1 === e.indexOf(t) && e.push(t)
                }
                static isMissingFromArray(e, t) {
                    return -1 === e.indexOf(t)
                }
            }
            class N {
                _addEventsToEventSenderStatsData(e, t) {
                    Object.keys(t).map(n => {
                        for (let r = 0; r < t[n].length; r++) {
                            const i = t[n][r];
                            i.sequence_number < e[i.sequence_id][i.event_name].sequence_number_min && (e[i.sequence_id][i.event_name].sequence_number_min = i.sequence_number), e[i.sequence_id][i.event_name].storage_size++
                        }
                    })
                }
                _initializeESSEventData(e, t, n) {
                    Object.keys(e).includes(n) || (e[n] = {});
                    for (const [r, i] of Object.entries(t)) e[n][r] = {
                        sequence_number_min: i + 1,
                        sequence_number_next: i + 1,
                        storage_size: 0
                    }
                }
                _formatESS2UnauthEventData(e) {
                    const t = {
                        sequence_ids: [],
                        event_names: [],
                        loss_stats_num_entries_per_sequence_id: [],
                        loss_stats_event_name_index: [],
                        loss_stats_storage_sizes: [],
                        loss_stats_sequence_number_mins: [],
                        loss_stats_sequence_number_nexts: []
                    };
                    return Object.entries(e).map(([e, n]) => {
                        if (y.isMissingFromArray(t.sequence_ids, e)) t.sequence_ids.push(e), t.loss_stats_num_entries_per_sequence_id.push(Object.keys(n).length);
                        else {
                            const r = t.sequence_ids.indexOf(e);
                            t.loss_stats_num_entries_per_sequence_id[r] += Object.keys(n).length
                        }
                        Object.entries(n).map(([e, n]) => {
                            y.pushToArrIfMissing(t.event_names, e);
                            const r = t.event_names.indexOf(e);
                            t.loss_stats_event_name_index.push(r);
                            const i = Object.keys(n);
                            for (let o = 0; o < i.length; o++) {
                                const e = `loss_stats_${i[o]}s`;
                                t[e].push(n[i[o]])
                            }
                        })
                    }), t
                }
                createESSEvent(e, t, n) {
                    const r = {};
                    return this._initializeESSEventData(r, t, n), this._addEventsToEventSenderStatsData(r, e), Object(O.createEventSenderStats2NonAuth)(this._formatESS2UnauthEventData(r))
                }
            }
            var w = n("UK8g");

            function R(e) {
                let t = "";
                for (let n = 0; n < e; n++) t += String.fromCharCode(256 * Math.random() | 0);
                return t
            }
            const b = {
                generate: R,
                generateBase64: function(e) {
                    return w.Base64.encode(R(e))
                }
            };
            class A {
                constructor() {
                    this._sequenceId = b.generateBase64(16), this._sequenceNumbers = {}
                }
                static create() {
                    return new A
                }
                reset() {
                    this._sequenceId = b.generateBase64(16), this._sequenceNumbers = {}
                }
                getSequenceId() {
                    return this._sequenceId
                }
                nextSequenceNumber(e) {
                    return this._sequenceNumbers[e] || (this._sequenceNumbers[e] = 0), ++this._sequenceNumbers[e]
                }
                nextSequenceNumberNoIncrement(e) {
                    return this._sequenceNumbers[e] || (this._sequenceNumbers[e] = 0), this._sequenceNumbers[e] + 1
                }
                getAllSequenceNumberCounters() {
                    return this._sequenceNumbers
                }
            }
            const I = {
                    baseTime: 200,
                    ceiling: 3e5,
                    maxDuration: 18e5
                },
                P = 18e4;
            class C extends u.a {
                constructor(e) {
                    super(), this._sequenceIdGenerator = A.create(), this._statsSender = new N, this._instanceContexts = {}, this._transport = e.transport, this._ownerProvider = e.ownerProvider, this._events = {
                        authorized: [],
                        unauthorized: []
                    }, this._uploaders = e.uploaders, this._ongoingUploads = {
                        authorized: !1,
                        unauthorized: !1
                    }, this._uploadWaiting = {
                        authorized: !1,
                        unauthorized: !1
                    }, this._backoffTimeSettings = Object.assign(Object.assign({}, I), e.backoffTimeOverrides), this._hasFlushed = !1, this._upload = this._upload.bind(this), this._essLastSent = new Date, "undefined" !== typeof window && "function" === typeof window.addEventListener && !e.disableBeforeUnloadListener && window.addEventListener("beforeunload", this._onBeforeDisconnect.bind(this)), this._initializeContexts(e.context);
                    const t = {
                        [i.UPLOAD_SUCCEEDED]: i.UPLOAD_SUCCEEDED,
                        [i.UPLOAD_FAILED]: i.UPLOAD_FAILED,
                        [i.UPLOAD_REQUEST_FAILED]: i.UPLOAD_REQUEST_FAILED
                    };
                    this.proxyEmitAll(this._uploaders.authorized, t), this.proxyEmitAll(this._uploaders.unauthorized, t)
                }
                _onBeforeDisconnect() {
                    this._uploadFlush()
                }
                _uploadFlush() {
                    return Promise.all([this._uploaders.authorized.lastUpload(this._events.authorized.splice(0)), this._uploaders.unauthorized.lastUpload(this._events.unauthorized.splice(0))]).then(([e, t]) => e && t).catch(() => !1)
                }
                _initializeContexts(e) {
                    if (!(null === e || void 0 === e ? void 0 : e.length)) return;
                    const t = this._instanceContexts;
                    for (const n of e) {
                        const e = n();
                        (null === e || void 0 === e ? void 0 : e.name) && (t[e.name] = e.data)
                    }
                }
                _initFlush(e) {
                    const t = this._uploaders[e].shouldBackoff(),
                        {
                            ceiling: n,
                            maxDuration: r,
                            baseTime: i
                        } = this._backoffTimeSettings;
                    return T.a.init(() => this._upload(e), {
                        curve: "exponential",
                        backoffInitial: t,
                        retryPredicate: () => this._transport.isOnline(),
                        ceiling: n,
                        baseTime: t ? n : i,
                        maxDuration: r
                    })
                }
                _waitForConnection() {
                    return new Promise(e => {
                        this._transport.once(s.TransportEvent.CONNECTION_ONLINE, () => e())
                    })
                }
                _upload(e) {
                    return this._uploaders[e].upload(this._events[e].splice(0)).then(t => {
                        if (t.nack.length) throw this._events[e] = t.nack.concat(this._events[e]), new Error("Backoff requested");
                        return t
                    })
                }
                _flush(e) {
                    const t = e ? "authorized" : "unauthorized";
                    this._transport.isOnline() || this._ongoingUploads[t] || (this._ongoingUploads[t] = this._waitForConnection());
                    const n = this._ongoingUploads[t];
                    if (n) return this._uploadWaiting[t] || (this._uploadWaiting[t] = !0, this._ongoingUploads[t] = n.then(() => (this._ongoingUploads[t] = !1, this._uploadWaiting[t] = !1, this._flush(e)))), this._ongoingUploads[t];
                    if (!this._events[t].length) return Promise.resolve({
                        nack: this._events[t],
                        backoff: this._uploaders[t].shouldBackoff()
                    });
                    if (!this._hasFlushed || Date.now() - this._essLastSent.getTime() > P) {
                        this._hasFlushed = !0;
                        const e = [this._createEvent(this._statsSender.createESSEvent(this._events, this._sequenceIdGenerator.getAllSequenceNumberCounters(), this._sequenceIdGenerator.getSequenceId()))];
                        this._uploaders.unauthorized.upload(e)
                    }
                    const r = this._initFlush(t).then(e => (this._ongoingUploads[t] = !1, e)).catch(() => (this._ongoingUploads[t] = !1, this._transport.isOnline() ? (C.consoleLogger.warn(`The events in the queue could not be uploaded. Throwing away ${this._events[t].length} ${t} events.`), this._events[t] = [], {
                        nack: this._events[t],
                        backoff: this._uploaders[t].shouldBackoff()
                    }) : this._flush(e)));
                    return this._ongoingUploads[t] = r, r
                }
                _doSend(e, t) {
                    const n = this._createEvent(t);
                    this._events[e ? "authorized" : "unauthorized"].push(n)
                }
                _createEvent(e) {
                    const t = this._sequenceIdGenerator;
                    return {
                        sequence_id: t.getSequenceId(),
                        sequence_number: t.nextSequenceNumber(e.name),
                        event_name: e.name,
                        fragments: Object.assign(Object.assign({
                            context_sdk: {
                                version_name: m.version
                            },
                            context_time: {
                                timestamp: Date.now()
                            }
                        }, this._instanceContexts), {
                            message: e.data
                        })
                    }
                }
                _validateEventData(e, t) {
                    let n = null;
                    if (e.name) {
                        if (function(e) {
                                let t = e.length,
                                    n = t;
                                for (; n--;) {
                                    const r = e.charCodeAt(n);
                                    r > 127 && r <= 2047 ? t++ : r > 2047 && r <= 65535 && (t += 2), r >= 56320 && r <= 57343 && n--
                                }
                                return t
                            }(JSON.stringify(e.data)) > 5e3) n = g.PAYLOAD_SIZE_LIMIT_EXCEEDED;
                        else if (!e.name.endsWith("NonAuth") && t && !t()) return g.UNKNOWN_OWNER
                    } else n = g.INVALID_NAME;
                    return n || null
                }
                flush(e = !0) {
                    return this._flush(e).then(() => void 0).catch(() => void 0)
                }
                flushAll() {
                    return Promise.all([this._flush(!0), this._flush(!1)]).then(() => void 0).catch(() => void 0)
                }
                finalFlush() {
                    return this._uploadFlush()
                }
                log(e, t = {}) {
                    this.send(e, t)
                }
                send(e, {
                    authorize: t = !0,
                    flush: n = !0
                } = {}) {
                    let r = this._validateEventData(e, this._ownerProvider);
                    if (r === g.UNKNOWN_OWNER && (C.consoleLogger.warn(`Trying to send an authenticated event without a current owner: ${e.name}`), r = null), r) {
                        const t = Object(v.createRejectedClientEventNonAuth)({
                            event_name: e.name,
                            reject_reason: r
                        });
                        return this._doSend(!1, t), Promise.reject(new TypeError(`The event is invalid and has been rejected for reason: ${r}`))
                    }
                    return (this._doSend(t, e), n ? this.flush(t) : Promise.resolve())
                }
                hasContext(...e) {
                    return e.every(e => !!this._instanceContexts[e])
                }
            }

            function S(e) {
                const t = {
                    suppressPersist: e.suppressPersist,
                    transport: e.transport
                };
                return new C(Object.assign(Object.assign({}, e), {
                    uploaders: {
                        authorized: E(t),
                        unauthorized: E(Object.assign(Object.assign({}, t), {
                            authorize: !1
                        }))
                    }
                }))
            }
            C.consoleLogger = a.a.forTag("EventSender")
        },
        "8oxB": function(e, t) {
            var n, r, i = e.exports = {};

            function o() {
                throw new Error("setTimeout has not been defined")
            }

            function s() {
                throw new Error("clearTimeout has not been defined")
            }

            function a(e) {
                if (n === setTimeout) return setTimeout(e, 0);
                if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
                try {
                    return n(e, 0)
                } catch (t) {
                    try {
                        return n.call(null, e, 0)
                    } catch (t) {
                        return n.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    n = "function" === typeof setTimeout ? setTimeout : o
                } catch (e) {
                    n = o
                }
                try {
                    r = "function" === typeof clearTimeout ? clearTimeout : s
                } catch (e) {
                    r = s
                }
            }();
            var u, c = [],
                h = !1,
                l = -1;

            function f() {
                h && u && (h = !1, u.length ? c = u.concat(c) : l = -1, c.length && d())
            }

            function d() {
                if (!h) {
                    var e = a(f);
                    h = !0;
                    for (var t = c.length; t;) {
                        for (u = c, c = []; ++l < t;) u && u[l].run();
                        l = -1, t = c.length
                    }
                    u = null, h = !1,
                        function(e) {
                            if (r === clearTimeout) return clearTimeout(e);
                            if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                            try {
                                r(e)
                            } catch (t) {
                                try {
                                    return r.call(null, e)
                                } catch (t) {
                                    return r.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function _(e, t) {
                this.fun = e, this.array = t
            }

            function p() {}
            i.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                c.push(new _(e, t)), 1 !== c.length || h || a(d)
            }, _.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function(e) {
                return []
            }, i.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        },
        "95n4": function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", (function() {
                    return r
                })),
                function(e) {
                    e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.DEBUG = 2] = "DEBUG", e[e.INFO = 4] = "INFO", e[e.WARN = 8] = "WARN", e[e.ERROR = 16] = "ERROR"
                }(r || (r = {}))
        },
        AH8h: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        AK6O: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createCacheIdContext = void 0;
            var r = n("pE4c");
            t.createCacheIdContext = function(e) {
                var t = r.hexToBase64(e);
                return function() {
                    return {
                        name: "context_cache_id",
                        data: {
                            value: t
                        }
                    }
                }
            }
        },
        Bdte: function(e, t, n) {
            "use strict";
            n("ma9I"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.silly = t.verbose = t.debug = t.info = t.warn = t.error = t.log = t.logger = void 0, t.logger = {
                log: function() {
                    var e;
                    return (e = console).log.apply(e, arguments)
                },
                error: function() {
                    var e;
                    return (e = console).error.apply(e, arguments)
                },
                warn: function() {
                    var e;
                    return (e = console).warn.apply(e, arguments)
                },
                info: function() {
                    var e;
                    return (e = console).info.apply(e, arguments)
                },
                debug: function() {
                    var e;
                    return (e = console).debug.apply(e, arguments)
                },
                verbose: function() {
                    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return (e = console).log.apply(e, ["verbose:"].concat(n))
                },
                silly: function() {
                    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return (e = console).log.apply(e, ["silly:"].concat(n))
                }
            }, t.default = t.logger, t.log = t.logger.log.bind(t.logger), t.error = t.logger.error.bind(t.logger), t.warn = t.logger.warn.bind(t.logger), t.info = t.logger.info.bind(t.logger), t.debug = t.logger.debug.bind(t.logger), t.verbose = t.logger.verbose.bind(t.logger), t.silly = t.logger.silly.bind(t.logger)
        },
        Bnag: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        Diw3: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createCorrelationIdContext = void 0, t.createCorrelationIdContext = function(e) {
                return function() {
                    return {
                        name: "context_correlation_id",
                        data: {
                            value: e
                        }
                    }
                }
            }
        },
        EbDI: function(e, t) {
            e.exports = function(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        EggZ: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WEBAPI_URL = t.INTERNAL_WEBGATE_URL = void 0, t.INTERNAL_WEBGATE_URL = "https://wgint.spotify.net", t.WEBAPI_URL = "https://api.spotify.com"
        },
        Eyjs: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return _
                }));
                var r = n("IuD9"),
                    i = n("UTto"),
                    o = n("TJ9n"),
                    s = n("ziih"),
                    a = n("YY9Q"),
                    u = n("gss/");
                const c = function() {},
                    h = /hm:\/\/pusher\/(?:[^]+)?\/connections\/([^]+)/,
                    l = 3e4,
                    f = 1e4,
                    d = "undefined" !== typeof window;
                class _ extends r.a {
                    constructor(e) {
                        super(), this._socket = null, this._lastPingDeferred = null, this._waitingForConnectionId = !0, this._connectionId = null, this._connectionURI = null, this._heartbeatToken = 0, this._heartbeatTimeoutToken = 0, this._connected = !1, this._endpoint = null, this._WebSocket = e.WebSocket || WebSocket, this._heartbeatTimeout = e.heartbeatTimeout || f
                    }
                    static create(e) {
                        return new _(e)
                    }
                    _startHeartbeat(e) {
                        const t = () => {
                            this.ping().then(() => this._onHeartbeatSuccess(), () => this._onHeartbeatError()), this._heartbeatTimeoutToken = setTimeout(() => this._onHeartbeatError(), this._heartbeatTimeout)
                        };
                        e ? t() : this._heartbeatToken = setTimeout(() => t(), l)
                    }
                    _onHeartbeatError() {
                        this._stopHeartbeat(), this._socket && this._socket.close(s.a.TIMEOUT, "internal-timeout")
                    }
                    _onHeartbeatSuccess() {
                        this._stopHeartbeat(), this._startHeartbeat()
                    }
                    _stopHeartbeat() {
                        null !== this._heartbeatToken && clearTimeout(this._heartbeatToken), null !== this._heartbeatTimeoutToken && clearTimeout(this._heartbeatTimeoutToken)
                    }
                    _prepareConnectionId(e) {
                        var t;
                        if (!e.uri) return !1;
                        const [, n] = null !== (t = e.uri.match(h)) && void 0 !== t ? t : [];
                        if (!n) return !1;
                        let r;
                        return r = e.headers && e.headers["Spotify-Connection-Id"] ? e.headers["Spotify-Connection-Id"] : decodeURIComponent(n), this._connectionId = r, this._connectionURI = e.uri, this.emit(u.a.CONNECTION_ID, {
                            id: r,
                            uri: e.uri
                        }), !0
                    }
                    _reply(e, t) {
                        if (!e) throw new TypeError("Invalid key.");
                        const n = this._socket;
                        if (!n || 1 !== n.readyState) return;
                        const r = {
                            type: "reply",
                            key: e,
                            payload: t
                        };
                        n.send(JSON.stringify(r))
                    }
                    _parseMessage(e) {
                        let t;
                        try {
                            t = JSON.parse(e)
                        } catch (n) {
                            return
                        }
                        if ("message" === t.type) this._waitingForConnectionId && this._prepareConnectionId(t) ? (this._waitingForConnectionId = !1, this._startHeartbeat(!0)) : this.emit(u.a.MESSAGE, {
                            message: t
                        });
                        else if ("pong" === t.type && this._lastPingDeferred) this._lastPingDeferred.resolve(!0), this._lastPingDeferred = null;
                        else if ("request" === t.type) {
                            const e = t.key;
                            e && this.emit(u.a.REQUEST, {
                                request: t,
                                reply: this._reply.bind(this, e)
                            })
                        }
                    }
                    _handleOpen(e) {
                        e.resolve(!0), this._connected = !0, this.emit(u.a.AUTHENTICATED, null)
                    }
                    _handleMessage(t) {
                        const n = this,
                            r = t.data;
                        if (d && window.Blob && r instanceof window.Blob) {
                            const e = new FileReader;
                            e.onloadend = function() {
                                if (!this.result) return;
                                let e;
                                if (this.result instanceof ArrayBuffer) {
                                    e = "";
                                    const t = new Uint8Array(this.result);
                                    for (let n = 0; n < t.length; n++) e += String.fromCharCode(t[n])
                                } else e = this.result;
                                n._parseMessage(e)
                            }, e.readAsText(r)
                        } else "undefined" !== typeof e && "undefined" !== typeof ArrayBuffer && r instanceof ArrayBuffer ? this._parseMessage(new e(r).toString("ascii")) : this._parseMessage(r)
                    }
                    _handleClose(e) {
                        const t = this._connected;
                        if (this._connected = !1, t) this.emitSync(u.a.DISCONNECTED, {
                            wsCode: e.code,
                            reason: e.reason
                        });
                        else {
                            const t = new a.a(o.a.DEALER_AUTHENTICATION_FAILED, "Dealer connection error", e);
                            this.emit(u.a.AUTHENTICATION_FAILED, {
                                error: t
                            })
                        }
                    }
                    _handleError(e) {
                        const t = new a.a(o.a.DEALER_CONNECTION_ERROR, "Cannot connect to dealer");
                        e.reject(t), this._connected = !1, this.emit(u.a.ERROR, {
                            error: t
                        })
                    }
                    connect(e) {
                        return this._endpoint = e, this._waitingForConnectionId = !0, this.emit(u.a.CONNECTED, null), Promise.resolve(!0)
                    }
                    authenticate(e) {
                        const t = Object(i.a)(),
                            n = `${this._endpoint}?access_token=${e}`,
                            r = this._socket = new this._WebSocket(n);
                        return r.onopen = this._handleOpen.bind(this, t), r.onclose = this._handleClose.bind(this), r.onerror = this._handleError.bind(this, t), r.onmessage = this._handleMessage.bind(this), t.promise
                    }
                    disconnect() {
                        this._socket && (this._stopHeartbeat(), this._waitingForConnectionId = !0, this._connected = !1, this._socket.close(s.a.CLOSE, "internal-close"), this._socket.onopen = c, this._socket.onerror = c, this._socket.onmessage = c, this._socket.onclose = c, this._socket = null, this.emitSync(u.a.DISCONNECTED, {
                            wsCode: s.a.CLOSE,
                            reason: "internal-close"
                        }))
                    }
                    ping() {
                        return this._socket && 1 === this._socket.readyState ? (this._lastPingDeferred = Object(i.a)(), this._socket.send('{"type":"ping"}'), this._lastPingDeferred.promise) : Promise.reject(new a.a(o.a.DEALER_CONNECTION_ERROR, "Dealer connection error"))
                    }
                    getConnectionId() {
                        return this._waitingForConnectionId ? new Promise(e => {
                            this.once(u.a.CONNECTION_ID, t => {
                                e(t.data.id)
                            })
                        }) : Promise.resolve(this._connectionId)
                    }
                    getConnectionInfo() {
                        return this._waitingForConnectionId ? new Promise(e => {
                            this.once(u.a.CONNECTION_ID, t => {
                                e({
                                    id: t.data.id,
                                    uri: t.data.uri
                                })
                            })
                        }) : Promise.resolve({
                            id: this._connectionId,
                            uri: this._connectionURI
                        })
                    }
                    hasConnectionId() {
                        return !this._waitingForConnectionId && !!this._connectionId
                    }
                }
            }).call(this, n("HDXh").Buffer)
        },
        GQD1: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n("mrSG");
            r.__exportStar(n("dgyv"), t), r.__exportStar(n("AK6O"), t), r.__exportStar(n("t9iY"), t), r.__exportStar(n("/8iO"), t), r.__exportStar(n("Diw3"), t), r.__exportStar(n("Vw1G"), t), r.__exportStar(n("mD5K"), t), r.__exportStar(n("IDpU"), t), r.__exportStar(n("vIWZ"), t)
        },
        H7XF: function(e, t, n) {
            "use strict";
            t.byteLength = function(e) {
                var t = c(e),
                    n = t[0],
                    r = t[1];
                return 3 * (n + r) / 4 - r
            }, t.toByteArray = function(e) {
                var t, n, r = c(e),
                    s = r[0],
                    a = r[1],
                    u = new o(function(e, t, n) {
                        return 3 * (t + n) / 4 - n
                    }(0, s, a)),
                    h = 0,
                    l = a > 0 ? s - 4 : s;
                for (n = 0; n < l; n += 4) t = i[e.charCodeAt(n)] << 18 | i[e.charCodeAt(n + 1)] << 12 | i[e.charCodeAt(n + 2)] << 6 | i[e.charCodeAt(n + 3)], u[h++] = t >> 16 & 255, u[h++] = t >> 8 & 255, u[h++] = 255 & t;
                2 === a && (t = i[e.charCodeAt(n)] << 2 | i[e.charCodeAt(n + 1)] >> 4, u[h++] = 255 & t);
                1 === a && (t = i[e.charCodeAt(n)] << 10 | i[e.charCodeAt(n + 1)] << 4 | i[e.charCodeAt(n + 2)] >> 2, u[h++] = t >> 8 & 255, u[h++] = 255 & t);
                return u
            }, t.fromByteArray = function(e) {
                for (var t, n = e.length, i = n % 3, o = [], s = 0, a = n - i; s < a; s += 16383) o.push(h(e, s, s + 16383 > a ? a : s + 16383));
                1 === i ? (t = e[n - 1], o.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
                return o.join("")
            };
            for (var r = [], i = [], o = "undefined" !== typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) r[a] = s[a], i[s.charCodeAt(a)] = a;

            function c(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var n = e.indexOf("=");
                return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
            }

            function h(e, t, n) {
                for (var i, o, s = [], a = t; a < n; a += 3) i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), s.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
                return s.join("")
            }
            i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
        },
        HDXh: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n("H7XF"),
                    i = n("kVK+"),
                    o = n("49sm");

                function s() {
                    return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }

                function a(e, t) {
                    if (s() < t) throw new RangeError("Invalid typed array length");
                    return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)), e.length = t), e
                }

                function u(e, t, n) {
                    if (!u.TYPED_ARRAY_SUPPORT && !(this instanceof u)) return new u(e, t, n);
                    if ("number" === typeof e) {
                        if ("string" === typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                        return l(this, e)
                    }
                    return c(this, e, t, n)
                }

                function c(e, t, n, r) {
                    if ("number" === typeof t) throw new TypeError('"value" argument must not be a number');
                    return "undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
                        if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                        if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                        t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
                        u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = f(e, t);
                        return e
                    }(e, t, n, r) : "string" === typeof t ? function(e, t, n) {
                        "string" === typeof n && "" !== n || (n = "utf8");
                        if (!u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                        var r = 0 | _(t, n),
                            i = (e = a(e, r)).write(t, n);
                        i !== r && (e = e.slice(0, i));
                        return e
                    }(e, t, n) : function(e, t) {
                        if (u.isBuffer(t)) {
                            var n = 0 | d(t.length);
                            return 0 === (e = a(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
                        }
                        if (t) {
                            if ("undefined" !== typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" !== typeof t.length || (r = t.length) !== r ? a(e, 0) : f(e, t);
                            if ("Buffer" === t.type && o(t.data)) return f(e, t.data)
                        }
                        var r;
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(e, t)
                }

                function h(e) {
                    if ("number" !== typeof e) throw new TypeError('"size" argument must be a number');
                    if (e < 0) throw new RangeError('"size" argument must not be negative')
                }

                function l(e, t) {
                    if (h(t), e = a(e, t < 0 ? 0 : 0 | d(t)), !u.TYPED_ARRAY_SUPPORT)
                        for (var n = 0; n < t; ++n) e[n] = 0;
                    return e
                }

                function f(e, t) {
                    var n = t.length < 0 ? 0 : 0 | d(t.length);
                    e = a(e, n);
                    for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
                    return e
                }

                function d(e) {
                    if (e >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                    return 0 | e
                }

                function _(e, t) {
                    if (u.isBuffer(e)) return e.length;
                    if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                    "string" !== typeof e && (e = "" + e);
                    var n = e.length;
                    if (0 === n) return 0;
                    for (var r = !1;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return q(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return H(e).length;
                        default:
                            if (r) return q(e).length;
                            t = ("" + t).toLowerCase(), r = !0
                    }
                }

                function p(e, t, n) {
                    var r = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                    if ((n >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return C(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return b(this, t, n);
                        case "ascii":
                            return I(this, t, n);
                        case "latin1":
                        case "binary":
                            return P(this, t, n);
                        case "base64":
                            return R(this, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return S(this, t, n);
                        default:
                            if (r) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), r = !0
                    }
                }

                function E(e, t, n) {
                    var r = e[t];
                    e[t] = e[n], e[n] = r
                }

                function g(e, t, n, r, i) {
                    if (0 === e.length) return -1;
                    if ("string" === typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                        if (i) return -1;
                        n = e.length - 1
                    } else if (n < 0) {
                        if (!i) return -1;
                        n = 0
                    }
                    if ("string" === typeof t && (t = u.from(t, r)), u.isBuffer(t)) return 0 === t.length ? -1 : T(e, t, n, r, i);
                    if ("number" === typeof t) return t &= 255, u.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : T(e, [t], n, r, i);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function T(e, t, n, r, i) {
                    var o, s = 1,
                        a = e.length,
                        u = t.length;
                    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        s = 2, a /= 2, u /= 2, n /= 2
                    }

                    function c(e, t) {
                        return 1 === s ? e[t] : e.readUInt16BE(t * s)
                    }
                    if (i) {
                        var h = -1;
                        for (o = n; o < a; o++)
                            if (c(e, o) === c(t, -1 === h ? 0 : o - h)) {
                                if (-1 === h && (h = o), o - h + 1 === u) return h * s
                            } else -1 !== h && (o -= o - h), h = -1
                    } else
                        for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
                            for (var l = !0, f = 0; f < u; f++)
                                if (c(e, o + f) !== c(t, f)) {
                                    l = !1;
                                    break
                                }
                            if (l) return o
                        }
                    return -1
                }

                function v(e, t, n, r) {
                    n = Number(n) || 0;
                    var i = e.length - n;
                    r ? (r = Number(r)) > i && (r = i) : r = i;
                    var o = t.length;
                    if (o % 2 !== 0) throw new TypeError("Invalid hex string");
                    r > o / 2 && (r = o / 2);
                    for (var s = 0; s < r; ++s) {
                        var a = parseInt(t.substr(2 * s, 2), 16);
                        if (isNaN(a)) return s;
                        e[n + s] = a
                    }
                    return s
                }

                function m(e, t, n, r) {
                    return G(q(t, e.length - n), e, n, r)
                }

                function O(e, t, n, r) {
                    return G(function(e) {
                        for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                        return t
                    }(t), e, n, r)
                }

                function y(e, t, n, r) {
                    return O(e, t, n, r)
                }

                function N(e, t, n, r) {
                    return G(H(t), e, n, r)
                }

                function w(e, t, n, r) {
                    return G(function(e, t) {
                        for (var n, r, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) n = e.charCodeAt(s), r = n >> 8, i = n % 256, o.push(i), o.push(r);
                        return o
                    }(t, e.length - n), e, n, r)
                }

                function R(e, t, n) {
                    return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
                }

                function b(e, t, n) {
                    n = Math.min(e.length, n);
                    for (var r = [], i = t; i < n;) {
                        var o, s, a, u, c = e[i],
                            h = null,
                            l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                        if (i + l <= n) switch (l) {
                            case 1:
                                c < 128 && (h = c);
                                break;
                            case 2:
                                128 === (192 & (o = e[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (h = u);
                                break;
                            case 3:
                                o = e[i + 1], s = e[i + 2], 128 === (192 & o) && 128 === (192 & s) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (h = u);
                                break;
                            case 4:
                                o = e[i + 1], s = e[i + 2], a = e[i + 3], 128 === (192 & o) && 128 === (192 & s) && 128 === (192 & a) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (h = u)
                        }
                        null === h ? (h = 65533, l = 1) : h > 65535 && (h -= 65536, r.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), r.push(h), i += l
                    }
                    return function(e) {
                        var t = e.length;
                        if (t <= A) return String.fromCharCode.apply(String, e);
                        var n = "",
                            r = 0;
                        for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
                        return n
                    }(r)
                }
                t.Buffer = u, t.SlowBuffer = function(e) {
                    +e != e && (e = 0);
                    return u.alloc(+e)
                }, t.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
                    try {
                        var e = new Uint8Array(1);
                        return e.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                                return 42
                            }
                        }, 42 === e.foo() && "function" === typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                    } catch (t) {
                        return !1
                    }
                }(), t.kMaxLength = s(), u.poolSize = 8192, u._augment = function(e) {
                    return e.__proto__ = u.prototype, e
                }, u.from = function(e, t, n) {
                    return c(null, e, t, n)
                }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" !== typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
                    value: null,
                    configurable: !0
                })), u.alloc = function(e, t, n) {
                    return function(e, t, n, r) {
                        return h(t), t <= 0 ? a(e, t) : void 0 !== n ? "string" === typeof r ? a(e, t).fill(n, r) : a(e, t).fill(n) : a(e, t)
                    }(null, e, t, n)
                }, u.allocUnsafe = function(e) {
                    return l(null, e)
                }, u.allocUnsafeSlow = function(e) {
                    return l(null, e)
                }, u.isBuffer = function(e) {
                    return !(null == e || !e._isBuffer)
                }, u.compare = function(e, t) {
                    if (!u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                    if (e === t) return 0;
                    for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
                        if (e[i] !== t[i]) {
                            n = e[i], r = t[i];
                            break
                        }
                    return n < r ? -1 : r < n ? 1 : 0
                }, u.isEncoding = function(e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, u.concat = function(e, t) {
                    if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return u.alloc(0);
                    var n;
                    if (void 0 === t)
                        for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                    var r = u.allocUnsafe(t),
                        i = 0;
                    for (n = 0; n < e.length; ++n) {
                        var s = e[n];
                        if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                        s.copy(r, i), i += s.length
                    }
                    return r
                }, u.byteLength = _, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
                    var e = this.length;
                    if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var t = 0; t < e; t += 2) E(this, t, t + 1);
                    return this
                }, u.prototype.swap32 = function() {
                    var e = this.length;
                    if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var t = 0; t < e; t += 4) E(this, t, t + 3), E(this, t + 1, t + 2);
                    return this
                }, u.prototype.swap64 = function() {
                    var e = this.length;
                    if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var t = 0; t < e; t += 8) E(this, t, t + 7), E(this, t + 1, t + 6), E(this, t + 2, t + 5), E(this, t + 3, t + 4);
                    return this
                }, u.prototype.toString = function() {
                    var e = 0 | this.length;
                    return 0 === e ? "" : 0 === arguments.length ? b(this, 0, e) : p.apply(this, arguments)
                }, u.prototype.equals = function(e) {
                    if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    return this === e || 0 === u.compare(this, e)
                }, u.prototype.inspect = function() {
                    var e = "",
                        n = t.INSPECT_MAX_BYTES;
                    return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
                }, u.prototype.compare = function(e, t, n, r, i) {
                    if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                    if (r >= i && t >= n) return 0;
                    if (r >= i) return -1;
                    if (t >= n) return 1;
                    if (this === e) return 0;
                    for (var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (t >>>= 0), a = Math.min(o, s), c = this.slice(r, i), h = e.slice(t, n), l = 0; l < a; ++l)
                        if (c[l] !== h[l]) {
                            o = c[l], s = h[l];
                            break
                        }
                    return o < s ? -1 : s < o ? 1 : 0
                }, u.prototype.includes = function(e, t, n) {
                    return -1 !== this.indexOf(e, t, n)
                }, u.prototype.indexOf = function(e, t, n) {
                    return g(this, e, t, n, !0)
                }, u.prototype.lastIndexOf = function(e, t, n) {
                    return g(this, e, t, n, !1)
                }, u.prototype.write = function(e, t, n, r) {
                    if (void 0 === t) r = "utf8", n = this.length, t = 0;
                    else if (void 0 === n && "string" === typeof t) r = t, n = this.length, t = 0;
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                    }
                    var i = this.length - t;
                    if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    r || (r = "utf8");
                    for (var o = !1;;) switch (r) {
                        case "hex":
                            return v(this, e, t, n);
                        case "utf8":
                        case "utf-8":
                            return m(this, e, t, n);
                        case "ascii":
                            return O(this, e, t, n);
                        case "latin1":
                        case "binary":
                            return y(this, e, t, n);
                        case "base64":
                            return N(this, e, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return w(this, e, t, n);
                        default:
                            if (o) throw new TypeError("Unknown encoding: " + r);
                            r = ("" + r).toLowerCase(), o = !0
                    }
                }, u.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                var A = 4096;

                function I(e, t, n) {
                    var r = "";
                    n = Math.min(e.length, n);
                    for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                    return r
                }

                function P(e, t, n) {
                    var r = "";
                    n = Math.min(e.length, n);
                    for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                    return r
                }

                function C(e, t, n) {
                    var r = e.length;
                    (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                    for (var i = "", o = t; o < n; ++o) i += F(e[o]);
                    return i
                }

                function S(e, t, n) {
                    for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                    return i
                }

                function D(e, t, n) {
                    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                    if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
                }

                function L(e, t, n, r, i, o) {
                    if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
                    if (n + r > e.length) throw new RangeError("Index out of range")
                }

                function U(e, t, n, r) {
                    t < 0 && (t = 65535 + t + 1);
                    for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
                }

                function k(e, t, n, r) {
                    t < 0 && (t = 4294967295 + t + 1);
                    for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
                }

                function x(e, t, n, r, i, o) {
                    if (n + r > e.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("Index out of range")
                }

                function M(e, t, n, r, o) {
                    return o || x(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
                }

                function j(e, t, n, r, o) {
                    return o || x(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
                }
                u.prototype.slice = function(e, t) {
                    var n, r = this.length;
                    if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), u.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = u.prototype;
                    else {
                        var i = t - e;
                        n = new u(i, void 0);
                        for (var o = 0; o < i; ++o) n[o] = this[o + e]
                    }
                    return n
                }, u.prototype.readUIntLE = function(e, t, n) {
                    e |= 0, t |= 0, n || D(e, t, this.length);
                    for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
                    return r
                }, u.prototype.readUIntBE = function(e, t, n) {
                    e |= 0, t |= 0, n || D(e, t, this.length);
                    for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
                    return r
                }, u.prototype.readUInt8 = function(e, t) {
                    return t || D(e, 1, this.length), this[e]
                }, u.prototype.readUInt16LE = function(e, t) {
                    return t || D(e, 2, this.length), this[e] | this[e + 1] << 8
                }, u.prototype.readUInt16BE = function(e, t) {
                    return t || D(e, 2, this.length), this[e] << 8 | this[e + 1]
                }, u.prototype.readUInt32LE = function(e, t) {
                    return t || D(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                }, u.prototype.readUInt32BE = function(e, t) {
                    return t || D(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                }, u.prototype.readIntLE = function(e, t, n) {
                    e |= 0, t |= 0, n || D(e, t, this.length);
                    for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
                    return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
                }, u.prototype.readIntBE = function(e, t, n) {
                    e |= 0, t |= 0, n || D(e, t, this.length);
                    for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) o += this[e + --r] * i;
                    return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
                }, u.prototype.readInt8 = function(e, t) {
                    return t || D(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                }, u.prototype.readInt16LE = function(e, t) {
                    t || D(e, 2, this.length);
                    var n = this[e] | this[e + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, u.prototype.readInt16BE = function(e, t) {
                    t || D(e, 2, this.length);
                    var n = this[e + 1] | this[e] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, u.prototype.readInt32LE = function(e, t) {
                    return t || D(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                }, u.prototype.readInt32BE = function(e, t) {
                    return t || D(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                }, u.prototype.readFloatLE = function(e, t) {
                    return t || D(e, 4, this.length), i.read(this, e, !0, 23, 4)
                }, u.prototype.readFloatBE = function(e, t) {
                    return t || D(e, 4, this.length), i.read(this, e, !1, 23, 4)
                }, u.prototype.readDoubleLE = function(e, t) {
                    return t || D(e, 8, this.length), i.read(this, e, !0, 52, 8)
                }, u.prototype.readDoubleBE = function(e, t) {
                    return t || D(e, 8, this.length), i.read(this, e, !1, 52, 8)
                }, u.prototype.writeUIntLE = function(e, t, n, r) {
                    (e = +e, t |= 0, n |= 0, r) || L(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    var i = 1,
                        o = 0;
                    for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = e / i & 255;
                    return t + n
                }, u.prototype.writeUIntBE = function(e, t, n, r) {
                    (e = +e, t |= 0, n |= 0, r) || L(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    var i = n - 1,
                        o = 1;
                    for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
                    return t + n
                }, u.prototype.writeUInt8 = function(e, t, n) {
                    return e = +e, t |= 0, n || L(this, e, t, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
                }, u.prototype.writeUInt16LE = function(e, t, n) {
                    return e = +e, t |= 0, n || L(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : U(this, e, t, !0), t + 2
                }, u.prototype.writeUInt16BE = function(e, t, n) {
                    return e = +e, t |= 0, n || L(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : U(this, e, t, !1), t + 2
                }, u.prototype.writeUInt32LE = function(e, t, n) {
                    return e = +e, t |= 0, n || L(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : k(this, e, t, !0), t + 4
                }, u.prototype.writeUInt32BE = function(e, t, n) {
                    return e = +e, t |= 0, n || L(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : k(this, e, t, !1), t + 4
                }, u.prototype.writeIntLE = function(e, t, n, r) {
                    if (e = +e, t |= 0, !r) {
                        var i = Math.pow(2, 8 * n - 1);
                        L(this, e, t, n, i - 1, -i)
                    }
                    var o = 0,
                        s = 1,
                        a = 0;
                    for (this[t] = 255 & e; ++o < n && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                    return t + n
                }, u.prototype.writeIntBE = function(e, t, n, r) {
                    if (e = +e, t |= 0, !r) {
                        var i = Math.pow(2, 8 * n - 1);
                        L(this, e, t, n, i - 1, -i)
                    }
                    var o = n - 1,
                        s = 1,
                        a = 0;
                    for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                    return t + n
                }, u.prototype.writeInt8 = function(e, t, n) {
                    return e = +e, t |= 0, n || L(this, e, t, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                }, u.prototype.writeInt16LE = function(e, t, n) {
                    return e = +e, t |= 0, n || L(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : U(this, e, t, !0), t + 2
                }, u.prototype.writeInt16BE = function(e, t, n) {
                    return e = +e, t |= 0, n || L(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : U(this, e, t, !1), t + 2
                }, u.prototype.writeInt32LE = function(e, t, n) {
                    return e = +e, t |= 0, n || L(this, e, t, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : k(this, e, t, !0), t + 4
                }, u.prototype.writeInt32BE = function(e, t, n) {
                    return e = +e, t |= 0, n || L(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : k(this, e, t, !1), t + 4
                }, u.prototype.writeFloatLE = function(e, t, n) {
                    return M(this, e, t, !0, n)
                }, u.prototype.writeFloatBE = function(e, t, n) {
                    return M(this, e, t, !1, n)
                }, u.prototype.writeDoubleLE = function(e, t, n) {
                    return j(this, e, t, !0, n)
                }, u.prototype.writeDoubleBE = function(e, t, n) {
                    return j(this, e, t, !1, n)
                }, u.prototype.copy = function(e, t, n, r) {
                    if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (r < 0) throw new RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                    var i, o = r - n;
                    if (this === e && n < t && t < r)
                        for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
                    else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                        for (i = 0; i < o; ++i) e[i + t] = this[i + n];
                    else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
                    return o
                }, u.prototype.fill = function(e, t, n, r) {
                    if ("string" === typeof e) {
                        if ("string" === typeof t ? (r = t, t = 0, n = this.length) : "string" === typeof n && (r = n, n = this.length), 1 === e.length) {
                            var i = e.charCodeAt(0);
                            i < 256 && (e = i)
                        }
                        if (void 0 !== r && "string" !== typeof r) throw new TypeError("encoding must be a string");
                        if ("string" === typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                    } else "number" === typeof e && (e &= 255);
                    if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                    if (n <= t) return this;
                    var o;
                    if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" === typeof e)
                        for (o = t; o < n; ++o) this[o] = e;
                    else {
                        var s = u.isBuffer(e) ? e : q(new u(e, r).toString()),
                            a = s.length;
                        for (o = 0; o < n - t; ++o) this[o + t] = s[o % a]
                    }
                    return this
                };
                var B = /[^+\/0-9A-Za-z-_]/g;

                function F(e) {
                    return e < 16 ? "0" + e.toString(16) : e.toString(16)
                }

                function q(e, t) {
                    var n;
                    t = t || 1 / 0;
                    for (var r = e.length, i = null, o = [], s = 0; s < r; ++s) {
                        if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
                            if (!i) {
                                if (n > 56319) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                if (s + 1 === r) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                i = n;
                                continue
                            }
                            if (n < 56320) {
                                (t -= 3) > -1 && o.push(239, 191, 189), i = n;
                                continue
                            }
                            n = 65536 + (i - 55296 << 10 | n - 56320)
                        } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                        if (i = null, n < 128) {
                            if ((t -= 1) < 0) break;
                            o.push(n)
                        } else if (n < 2048) {
                            if ((t -= 2) < 0) break;
                            o.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((t -= 3) < 0) break;
                            o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((t -= 4) < 0) break;
                            o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return o
                }

                function H(e) {
                    return r.toByteArray(function(e) {
                        if ((e = function(e) {
                                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                            }(e).replace(B, "")).length < 2) return "";
                        for (; e.length % 4 !== 0;) e += "=";
                        return e
                    }(e))
                }

                function G(e, t, n, r) {
                    for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
                    return i
                }
            }).call(this, n("3r9c"))
        },
        IDpU: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createOsContext = void 0, t.createOsContext = function(e) {
                return function() {
                    return {
                        name: "context_os",
                        data: e
                    }
                }
            }
        },
        Ibrv: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return o
                }));
                var r = n("95n4"),
                    i = n("TuIQ");
                const o = "true" === e.env.DEBUG ? class {
                    constructor(e, t = "", n = (() => !1)) {
                        this._tagParts = [], this._tagText = "", this._enabled = !0, this._level = r.a.NONE, this.tag = "", this.description = "", this._predicate = function() {
                            return !1
                        }, this.tag = e, this.description = t, this._predicate = n, this._tagParts = e.split("."), this._tagText = `[${e}]`
                    }
                    _print(e, t, n) {
                        if (!this._enabled && !(this._level & t)) return;
                        const r = {
                            args: n,
                            type: e,
                            tag: this.tag
                        };
                        this._predicate(r) || console[e](this._tagText, ...n)
                    }
                    matchesTag(e) {
                        const t = Array.isArray(e) ? e : e.split("."),
                            n = this._tagParts;
                        if (t.length > n.length) return !1;
                        for (let r = 0, i = t.length; r < i; r++)
                            if (("*" !== t[r] || !n[r]) && t[r] !== n[r]) return !1;
                        return !0
                    }
                    setLevel(e) {
                        let t = 0;
                        switch (e) {
                            case "error":
                                t = r.a.ERROR;
                                break;
                            case "warn":
                                t = r.a.WARN | r.a.ERROR;
                                break;
                            case "info":
                                t = r.a.INFO | r.a.WARN | r.a.ERROR;
                                break;
                            case "debug":
                                t = r.a.DEBUG | r.a.INFO | r.a.WARN | r.a.ERROR;
                                break;
                            case "log":
                            default:
                                t = r.a.LOG | r.a.DEBUG | r.a.INFO | r.a.WARN | r.a.ERROR
                        }
                        this._level = t
                    }
                    enable() {
                        this._enabled = !0
                    }
                    disable() {
                        this._enabled = !1
                    }
                    log(...e) {
                        this._print("log", r.a.LOG, e)
                    }
                    debug(...e) {
                        this._print("debug", r.a.DEBUG, e)
                    }
                    info(...e) {
                        this._print("info", r.a.INFO, e)
                    }
                    warn(...e) {
                        this._print("warn", r.a.WARN, e)
                    }
                    error(...e) {
                        this._print("error", r.a.ERROR, e)
                    }
                } : i.a
            }).call(this, n("8oxB"))
        },
        Ijbi: function(e, t, n) {
            var r = n("WkPL");
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
            }
        },
        IuD9: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return f
            }));
            class r {
                constructor(e, t) {
                    this.defaultPrevented = !1, this.immediateStopped = !1, this.stopped = !1, this.type = e, this.data = t
                }
                preventDefault() {
                    this.defaultPrevented = !0
                }
                stopPropagation() {
                    this.stopped = !0
                }
                stopImmediatePropagation() {
                    this.immediateStopped = !0
                }
            }
            const i = "undefined" !== typeof window,
                o = [];

            function s() {
                var e;
                const t = o.splice(0);
                if (t.length)
                    for (let n = 0, r = t.length; n < r; n++) try {
                        null === (e = t[n]) || void 0 === e || e.call(t)
                    } finally {}
            }
            let a;
            i && "function" === typeof window.postMessage ? function() {
                const e = window.location.origin || `${window.location.protocol}//${window.location.hostname}`;
                if (a = window.postMessage.bind(window, "@execute_deferreds", e), !window.__hasDeferredHandler) {
                    "function" === typeof Object.defineProperty ? Object.defineProperty(window, "__hasDeferredHandler", {
                        value: !0
                    }) : window.__hasDeferredHandler = !0;
                    const t = function(t) {
                        t.origin !== e && "@execute_deferreds" !== t.data || s()
                    };
                    window.addEventListener ? window.addEventListener("message", t) : window.attachEvent && window.attachEvent("onmessage", t)
                }
            }() : a = "function" === typeof queueMicrotask ? queueMicrotask.bind(null, s) : "function" === typeof setImmediate ? setImmediate.bind(null, s) : setTimeout.bind(null, s, 10);
            let u = e => {
                const t = !o.length;
                o.push(e), t && a()
            };

            function c(e, t, n) {
                for (let r = 0, i = e.length; r < i; r++) {
                    const i = e[r];
                    if ((null === i || void 0 === i ? void 0 : i.listener) === t && i.options.once === n.once) return r
                }
                return -1
            }

            function h(e, t, n, r = {}) {
                if (!n) return !1;
                const i = e[t];
                return !i || !i.length || -1 === c(i, n, r)
            }

            function l(e, t, n, r = {}) {
                if (!t || !n) return;
                const i = e[t],
                    o = {
                        listener: n,
                        options: r
                    };
                i ? i.push(o) : e[t] = [o]
            }
            i && ("function" === typeof window.__modDefFn ? u = window.__modDefFn : "function" === typeof Object.defineProperty ? Object.defineProperty(window, "__modDefFn", {
                value: u
            }) : window.__modDefFn = u);
            class f {
                constructor() {
                    this._listeners = {}, this._metaListeners = {
                        add: {},
                        remove: {}
                    }
                }
                _dispatchFromStore(e, t) {
                    const n = t.type;
                    let r = e[n];
                    if (r) {
                        r = r.slice(0);
                        for (const e of r)
                            if (e.listener.call(this, t), e.options.once && this.removeListener(n, e.listener, e.options), t.immediateStopped) break
                    }
                }
                createEvent(e, t) {
                    return new r(e, t)
                }
                on(e, t, n = {}) {
                    if (!e) throw new TypeError("Argument `eventType` is required.");
                    if (!t) return this;
                    const i = this._listeners;
                    if (h(i, e, t, n)) {
                        const o = this._metaListeners.add,
                            s = o[e];
                        if (s && s.length) {
                            const i = new r(e, {
                                listener: t,
                                options: n
                            });
                            if (this._dispatchFromStore(o, i), i.defaultPrevented) return this
                        }
                        l(i, e, t, n)
                    }
                    return this
                }
                addListener(e, t, n = {}) {
                    return this.on(e, t, n)
                }
                addListeners(e) {
                    for (const t in e) e.hasOwnProperty(t) && this.on(t, e[t]);
                    return this
                }
                once(e, t) {
                    return this.on(e, t, {
                        once: !0
                    })
                }
                removeListener(e, t, n = {}) {
                    if (!e) throw new TypeError("Argument `eventType` is required.");
                    if (!t) return this;
                    const i = this._listeners[e];
                    if (!i) return this;
                    const o = c(i, t, n);
                    if (-1 === o) return this;
                    const s = this._metaListeners.remove[e];
                    if (s && s.length) {
                        const i = new r(e, {
                            listener: t,
                            options: n
                        });
                        if (this._dispatchFromStore(this._metaListeners.remove, i), i.defaultPrevented) return this
                    }
                    return i.splice(o, 1), this
                }
                removeListeners(e) {
                    for (const t in e) e.hasOwnProperty(t) && this.removeListener(t, e[t]);
                    return this
                }
                removeAllListeners(e) {
                    return e ? this._listeners[e] = [] : this._listeners = {}, this
                }
                emit(e, t) {
                    if (!e) throw new TypeError("Argument `eventType` is required.");
                    const n = this.createEvent(e, t);
                    return u(() => this._dispatchFromStore(this._listeners, n)), n
                }
                emitSync(e, t) {
                    if (!e) throw new TypeError("Argument `eventType` is required.");
                    const n = this.createEvent(e, t);
                    return this._dispatchFromStore(this._listeners, n), n
                }
                emitEvent(e) {
                    return u(() => this._dispatchFromStore(this._listeners, e)), e
                }
                emitEventSync(e) {
                    return this._dispatchFromStore(this._listeners, e), e
                }
                emitAndWait(e, t, n) {
                    if (!e) throw new TypeError("Argument `eventType` is required.");
                    const r = this.createEvent(e, t);
                    return u(() => {
                        this._dispatchFromStore(this._listeners, r), n.call(this, r)
                    }), r
                }
                emitEventAndWait(e, t) {
                    return u(() => {
                        this._dispatchFromStore(this._listeners, e), t.call(this, e)
                    }), e
                }
                proxyEmit(e, t, n) {
                    if (!e || "function" !== typeof e.on) throw new TypeError("Proxy source must be an EventEmitter");
                    if (e === this) throw new ReferenceError("Cannot create recursive proxy.");
                    if (!t || !n) throw new TypeError("Parameter sourceType and targetType are required.");
                    const r = e => {
                        e.stopped || this.emitAndWait(n, e.data, t => {
                            t.defaultPrevented && e.preventDefault()
                        })
                    };
                    return e.on(t, r), r
                }
                proxyEmitSync(e, t, n) {
                    if (!e || "function" !== typeof e.on) throw new TypeError("Proxy source must be an EventEmitter");
                    if (e === this) throw new ReferenceError("Cannot create recursive proxy.");
                    if (!t || !n) throw new TypeError("Parameter sourceType and targetType are required.");
                    const r = e => {
                        if (e.stopped) return;
                        const t = this.createEvent(n, e.data);
                        this.emitEventSync(t), t.defaultPrevented && e.preventDefault()
                    };
                    return e.on(t, r), r
                }
                proxyEmitAll(e, t) {
                    for (const n in t) t.hasOwnProperty(n) && this.proxyEmit(e, n, t[n])
                }
                proxyEmitAllSync(e, t) {
                    for (const n in t) t.hasOwnProperty(n) && this.proxyEmitSync(e, n, t[n])
                }
                onAddListener(e, t, n = {}) {
                    const r = this._metaListeners.add;
                    return h(r, e, t, n) && l(r, e, t, n), this
                }
                onRemoveListener(e, t, n = {}) {
                    const r = this._metaListeners.remove;
                    return h(r, e, t, n) && l(r, e, t, n), this
                }
            }
        },
        IyHy: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return o
                }));
                var r = n("wVwo"),
                    i = n("RcFf");
                const o = "undefined" !== typeof e && "true" === e.env.DEBUG ? class {
                    constructor(e, t = "", n = (() => !1)) {
                        this._tagParts = [], this._tagText = "", this._enabled = !0, this._level = r.a.NONE, this.tag = "", this.description = "", this._predicate = function() {
                            return !1
                        }, this.tag = e, this.description = t, this._predicate = n, this._tagParts = e.split("."), this._tagText = `[${e}]`
                    }
                    _print(e, t, n) {
                        if (!this._enabled && !(this._level & t)) return;
                        const r = {
                            args: n,
                            type: e,
                            tag: this.tag
                        };
                        this._predicate(r) || console[e](this._tagText, ...n)
                    }
                    matchesTag(e) {
                        const t = Array.isArray(e) ? e : e.split("."),
                            n = this._tagParts;
                        if (t.length > n.length) return !1;
                        for (let r = 0, i = t.length; r < i; r++)
                            if (("*" !== t[r] || !n[r]) && t[r] !== n[r]) return !1;
                        return !0
                    }
                    setLevel(e) {
                        let t = 0;
                        switch (e) {
                            case "error":
                                t = r.a.ERROR;
                                break;
                            case "warn":
                                t = r.a.WARN | r.a.ERROR;
                                break;
                            case "info":
                                t = r.a.INFO | r.a.WARN | r.a.ERROR;
                                break;
                            case "debug":
                                t = r.a.DEBUG | r.a.INFO | r.a.WARN | r.a.ERROR;
                                break;
                            case "log":
                            default:
                                t = r.a.LOG | r.a.DEBUG | r.a.INFO | r.a.WARN | r.a.ERROR
                        }
                        this._level = t
                    }
                    enable() {
                        this._enabled = !0
                    }
                    disable() {
                        this._enabled = !1
                    }
                    log(...e) {
                        this._print("log", r.a.LOG, e)
                    }
                    debug(...e) {
                        this._print("debug", r.a.DEBUG, e)
                    }
                    info(...e) {
                        this._print("info", r.a.INFO, e)
                    }
                    warn(...e) {
                        this._print("warn", r.a.WARN, e)
                    }
                    error(...e) {
                        this._print("error", r.a.ERROR, e)
                    }
                } : i.a
            }).call(this, n("8oxB"))
        },
        J4zp: function(e, t, n) {
            var r = n("wTVA"),
                i = n("m0LI"),
                o = n("ZhPi"),
                s = n("wkBT");
            e.exports = function(e, t) {
                return r(e) || i(e, t) || o(e, t) || s()
            }
        },
        JXbT: function(e, t, n) {
            "use strict";
            n("07d7"), n("5s+n");
            var r = n("o0o1");
            n("ls82");
            var i = n("lwsE"),
                o = n("W8MJ"),
                s = this && this.__awaiter || function(e, t, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function s(e) {
                            try {
                                u(r.next(e))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(e) {
                            try {
                                u(r.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ConsoleReporter = void 0;
            var u = a(n("rqAE")),
                c = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info";
                        i(this, e), this.spacingLevel = t, this.logLevel = n
                    }
                    return o(e, [{
                        key: "send",
                        value: function(e) {
                            return s(this, void 0, void 0, r.mark((function t() {
                                return r.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            u.default.log(this.logLevel, "[semantic-metrics] ".concat(JSON.stringify(e, null, this.spacingLevel)));
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })))
                        }
                    }]), e
                }();
            t.ConsoleReporter = c
        },
        NIHa: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Time = t.Timer = void 0, i(n("Z6KD"), t), i(n("AH8h"), t), i(n("mNvX"), t), i(n("JXbT"), t);
            var o = n("149u");
            Object.defineProperty(t, "Timer", {
                enumerable: !0,
                get: function() {
                    return o.Timer
                }
            });
            var s = n("hXCe");
            Object.defineProperty(t, "Time", {
                enumerable: !0,
                get: function() {
                    return s.Time
                }
            })
        },
        Pb67: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n("wT4t");

            function i() {
                let e = () => {},
                    t = () => {};
                return {
                    promise: new Promise((n, r) => {
                        e = n, t = r
                    }),
                    resolve: e,
                    reject: t
                }
            }

            function o() {
                return Promise.reject(new Error("Backoff already consumed"))
            }
            const s = {
                backoffInitial: !1,
                baseTime: 200,
                ceiling: 0,
                curve: "linear",
                maxDuration: 1 / 0,
                maxRetries: 1 / 0,
                maxTime: 1 / 0,
                retryPredicate: () => !0
            };
            class a {
                constructor(e, t) {
                    this._resolver = i(), this._ts = 0, this._callCount = 0, this._tickInterval = 0, this._isRunning = !1;
                    const n = t || {};
                    this._fn = e, this._maxDuration = n.maxDuration || s.maxDuration, this._maxRetries = "maxRetries" in n ? n.maxRetries : s.maxRetries, this._maxTime = n.maxTime || s.maxTime, this._retryPredicate = n.retryPredicate || s.retryPredicate, this._backoffInitial = !!n.backoffInitial, this._counter = new r.a({
                        curve: n.curve,
                        baseTime: n.baseTime,
                        ceiling: n.ceiling
                    }), this._backoffInitial && (this._maxRetries += 1)
                }
                static init(e, t = {}) {
                    return new a(e, t).start()
                }
                _destroy() {
                    this._fn = o, this._resolver = i()
                }
                _failure(e) {
                    if (e && "retryAfter" in e) this._retryAfter(e);
                    else {
                        const t = this._counter.getTime(this._callCount);
                        this._shouldRetry(t, e) ? (this._callCount++, this._tickInterval = setTimeout(() => this._tick(), t)) : (this._resolver.reject(e), this._destroy())
                    }
                }
                _retryAfter(e) {
                    this._callCount++, this._tickInterval = setTimeout(() => this._tick(), e.retryAfter)
                }
                _success(...e) {
                    this._resolver.resolve(...e), this._destroy()
                }
                _shouldRetry(e, t) {
                    const n = Date.now() - this._ts + e;
                    return this._callCount < this._maxRetries && e < this._maxTime && n < this._maxDuration && this._retryPredicate(t)
                }
                _tick() {
                    this._fn().then((...e) => this._success(...e)).catch(e => this._failure(e))
                }
                getResolver() {
                    return this._resolver.promise
                }
                start(e) {
                    return !this._fn && e && (this._fn = e), this._isRunning || (this._ts = Date.now(), this._isRunning = !0, this._backoffInitial ? (this._callCount = 1, this._tickInterval = setTimeout(() => this._tick(), this._counter.getTime(0))) : this._tick()), this._resolver.promise
                }
                stop() {
                    clearTimeout(this._tickInterval), this._isRunning = !1, this._destroy()
                }
                getRetryCount() {
                    return this._callCount
                }
            }
        },
        RIqP: function(e, t, n) {
            var r = n("Ijbi"),
                i = n("EbDI"),
                o = n("ZhPi"),
                s = n("Bnag");
            e.exports = function(e) {
                return r(e) || i(e) || o(e) || s()
            }
        },
        RcFf: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            class r {
                constructor() {
                    this.tag = "", this.description = ""
                }
                matchesTag() {
                    return !1
                }
                setLevel() {}
                enable() {}
                disable() {}
                log() {}
                debug() {}
                info() {}
                warn() {}
                error() {}
            }
        },
        RrCY: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createEventSenderStats2NonAuth = void 0, t.createEventSenderStats2NonAuth = function(e) {
                return {
                    name: "EventSenderStats2NonAuth",
                    environments: ["devicenonauth", "browsernonauth", "desktopnonauth"],
                    data: e
                }
            }
        },
        TJ9n: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", (function() {
                    return r
                })),
                function(e) {
                    e.DEALER_CONNECTION_ERROR = "DEALER_CONNECTION_ERROR", e.DEALER_AUTHENTICATION_FAILED = "DEALER_AUTHENTICATION_FAILED", e.DEALER_ERROR = "DEALER_ERROR", e.ENDPOINT_NOT_DEFINED = "ENDPOINT_NOT_DEFINED", e.INVALID_ENDPOINT = "INVALID_ENDPOINT"
                }(r || (r = {}))
        },
        TuIQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            class r {
                constructor() {
                    this.tag = "", this.description = ""
                }
                matchesTag() {
                    return !1
                }
                setLevel() {}
                enable() {}
                disable() {}
                log() {}
                debug() {}
                info() {}
                warn() {}
                error() {}
            }
        },
        UK8g: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n("/ZeQ");
            t.Base62 = r;
            var i = n("ylfK");
            t.Base64 = i
        },
        UTto: function(e, t, n) {
            "use strict";

            function r() {
                let e, t;
                return {
                    promise: new Promise((n, r) => {
                        e = n, t = r
                    }),
                    resolve: e,
                    reject: t
                }
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        Vw1G: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createDeviceContext = void 0, t.createDeviceContext = function(e) {
                return function() {
                    return {
                        name: "context_device",
                        data: e
                    }
                }
            }
        },
        W8MJ: function(e, t) {
            function n(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            e.exports = function(e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e
            }
        },
        WkPL: function(e, t) {
            e.exports = function(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
        },
        YY9Q: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("TJ9n");
            class i extends Error {
                constructor(e = r.a.DEALER_ERROR, t, n = {}) {
                    super(t), this.name = "DealerError", this.message = t, this.code = e, this.raw = n, this.wsCode = n.code || null, this.wsReason = n.reason || null
                }
            }
        },
        "Z+ti": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createRejectedClientEventNonAuth = void 0, t.createRejectedClientEventNonAuth = function(e) {
                return {
                    name: "RejectedClientEventNonAuth",
                    environments: ["browsernonauth", "desktopnonauth", "devicenonauth"],
                    data: e
                }
            }
        },
        Z6KD: function(e, t, n) {
            "use strict";
            (function(e) {
                n("4mDm"), n("2B1R"), n("zKZe"), n("07d7"), n("5s+n"), n("PKPk"), n("3bBZ");
                var r = n("lwsE"),
                    i = n("W8MJ"),
                    o = n("o0o1");
                n("ls82");
                var s = this && this.__awaiter || function(e, t, n, r) {
                        return new(n || (n = Promise))((function(i, o) {
                            function s(e) {
                                try {
                                    u(r.next(e))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function a(e) {
                                try {
                                    u(r.throw(e))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function u(e) {
                                var t;
                                e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(s, a)
                            }
                            u((r = r.apply(e, t || [])).next())
                        }))
                    },
                    a = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.sendMetric = t.reportMetrics = t.createSemanticMetrics = t.asNanoseconds = t.MetricTypes = void 0;
                var u = a(n("rqAE"));
                t.MetricTypes = {
                    COUNTER: "counter",
                    GAUGE: "gauge",
                    TIMER: "timer"
                }, t.asNanoseconds = function(e) {
                    return e
                };
                var c = function(e, t) {
                    return s(void 0, void 0, void 0, o.mark((function n() {
                        var r;
                        return o.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (!Array.isArray(t.reporter)) {
                                        n.next = 6;
                                        break
                                    }
                                    return r = t.reporter.map((function(t) {
                                        return t.send(e)
                                    })), n.next = 4, Promise.all(r);
                                case 4:
                                    n.next = 8;
                                    break;
                                case 6:
                                    return n.next = 8, t.reporter.send(e);
                                case 8:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))
                };
                t.reportMetrics = c;
                var h = function(e) {
                    var t = {
                            queue: [],
                            timeout: void 0,
                            flush: function() {
                                c(this.queue, e), this.queue = [], this.timeout = void 0
                            }
                        },
                        n = !1;
                    "undefined" === typeof e.batching && (e.batching = {
                        delay: 4e3
                    }), e.batching && "function" === typeof window.addEventListener && window.addEventListener("beforeunload", (function() {
                        n = !0, t.flush()
                    }));
                    return {
                        sendMetric: function(r) {
                            return s(void 0, void 0, void 0, o.mark((function i() {
                                var s, a, u;
                                return o.wrap((function(i) {
                                    for (;;) switch (i.prev = i.next) {
                                        case 0:
                                            if ("undefined" === typeof e.dev || !e.dev) {
                                                i.next = 2;
                                                break
                                            }
                                            return i.abrupt("return");
                                        case 2:
                                            if (u = Object.assign({}, r), r.tags && (u.tags = Object.assign({}, r.tags)), u.key = u.key || e.key, u.key) {
                                                i.next = 7;
                                                break
                                            }
                                            throw new Error('metric.key is required. Got: "'.concat(u.key, '". Set it in createSemanticMetrics(...) or pass it to sendMetric(...).'));
                                        case 7:
                                            if (u.tags = Object.assign({
                                                    app: null !== (s = e.app) && void 0 !== s ? s : u.key,
                                                    application: null !== (a = e.app) && void 0 !== a ? a : u.key
                                                }, u.tags), e.component_id ? u.component_id = u.component_id || e.component_id : u.component_id = e.key, !e.batching || n) {
                                                i.next = 14;
                                                break
                                            }
                                            t.queue.push(u), t.timeout || (t.timeout = setTimeout((function() {
                                                return t.flush()
                                            }), e.batching.delay)), i.next = 16;
                                            break;
                                        case 14:
                                            return i.next = 16, c([u], e);
                                        case 16:
                                            return i.abrupt("return");
                                        case 17:
                                        case "end":
                                            return i.stop()
                                    }
                                }), i)
                            })))
                        },
                        config: e,
                        isWindowUnloading: n
                    }
                };
                t.createSemanticMetrics = h;
                var l = function() {
                    function e() {
                        r(this, e)
                    }
                    return i(e, null, [{
                        key: "init",
                        value: function(t) {
                            e.config && u.default.error("SemanticMetrics has already been initialized. This may lead to dangerous side effects such as your metrics disappearing from Grafana due to the `key` value being overwritten by something else"), u.default.warn("The singleton usage of SemanticMetrics will be deprecated. Please use createSemanticMetrics()"), e.config = t;
                            var n = h(t),
                                r = n.sendMetric,
                                i = n.isWindowUnloading;
                            e.sendMetric = r, e.isWindowUnloading = i
                        }
                    }]), e
                }();
                t.default = l;
                t.sendMetric = function(e) {
                    return s(void 0, void 0, void 0, o.mark((function t() {
                        return o.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (l.config) {
                                        t.next = 2;
                                        break
                                    }
                                    throw new Error("SemanticMetrics has not been initialized. Call SemanticMetrics.init()");
                                case 2:
                                    return t.abrupt("return", l.sendMetric(e));
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }
            }).call(this, n("8oxB"))
        },
        ZhPi: function(e, t, n) {
            var r = n("WkPL");
            e.exports = function(e, t) {
                if (e) {
                    if ("string" === typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                }
            }
        },
        dgyv: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createApplicationContext = void 0, t.createApplicationContext = function(e) {
                return function() {
                    return {
                        name: "context_application",
                        data: e
                    }
                }
            }
        },
        eBef: function(e, t, n) {
            "use strict";
            n.r(t),
                function(e) {
                    n.d(t, "intercept", (function() {
                        return c
                    })), n.d(t, "unintercept", (function() {
                        return h
                    })), n.d(t, "list", (function() {
                        return l
                    })), n.d(t, "enable", (function() {
                        return f
                    })), n.d(t, "disable", (function() {
                        return d
                    })), n.d(t, "setLevel", (function() {
                        return _
                    })), n.d(t, "enableAll", (function() {
                        return p
                    })), n.d(t, "disableAll", (function() {
                        return E
                    })), n.d(t, "forTag", (function() {
                        return g
                    })), n.d(t, "remove", (function() {
                        return T
                    }));
                    var r = n("IyHy");
                    let i = e.__dbgLoggerRegistry;
                    i || (i = {
                        map: {},
                        list: [],
                        loggingPredicate: function() {}
                    }, Object.defineProperty ? Object.defineProperty(e, "__dbgLoggerRegistry", {
                        value: i
                    }) : e.__dbgLoggerRegistry = i);
                    const o = i.map,
                        s = i.list;

                    function a(e) {
                        return !(!i.loggingPredicate || !i.loggingPredicate(e))
                    }
                    let u = "log";

                    function c(e) {
                        if ("function" !== typeof e) throw new TypeError("Logging.intercept requires a function predicate.");
                        i.loggingPredicate = e
                    }

                    function h() {
                        i.loggingPredicate = () => {}
                    }

                    function l(e) {
                        const t = Object.keys(o).filter(e => o[e]).sort();
                        return e ? t.map(e => ({
                            tag: e,
                            description: o[e].description || "No description."
                        })) : t.reduce((e, t) => (e[t] = o[t].description || "No description", e), {})
                    }

                    function f(e) {
                        var t;
                        const n = Array.isArray(e) ? e : [e];
                        let r = n.length;
                        for (; r--;) {
                            const e = null === (t = n[r]) || void 0 === t ? void 0 : t.toLowerCase();
                            let i = s.length;
                            for (; i--;) {
                                const t = s[i];
                                t.matchesTag(e) && t.enable()
                            }
                        }
                    }

                    function d(e) {
                        var t;
                        const n = Array.isArray(e) ? e : [e];
                        let r = n.length;
                        for (; r--;) {
                            const e = null === (t = n[r]) || void 0 === t ? void 0 : t.toLowerCase();
                            let i = s.length;
                            for (; i--;) {
                                const t = s[i];
                                t.matchesTag(e) && t.disable()
                            }
                        }
                    }

                    function _(e) {
                        u = e;
                        let t = s.length;
                        for (; t--;) {
                            const n = s[t];
                            n && n.setLevel(e)
                        }
                    }

                    function p() {
                        let e = s.length;
                        for (; e--;) s[e] && s[e].enable()
                    }

                    function E() {
                        let e = s.length;
                        for (; e--;) s[e] && s[e].disable()
                    }

                    function g(e, t) {
                        let n, i;
                        if ("string" === typeof e ? (n = e.toLowerCase(), i = t) : (n = e.tag, i = e.description), o.hasOwnProperty(n) && o[n]) return o[n];
                        const c = new r.a(n, i, a);
                        return c.setLevel(u), o[n] = c, s.push(c), c
                    }

                    function T(e) {
                        const t = e.toLowerCase();
                        if (!o.hasOwnProperty(t) || !o[t]) return;
                        const n = o[t];
                        o[t] = null;
                        const r = s.indexOf(n); - 1 !== r && s.splice(r, 1)
                    }
                }.call(this, n("3r9c"))
        },
        eneP: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                },
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, i(n("NIHa"), t), i(n("epjP"), t), i(n("rSSY"), t);
            var s = n("Z6KD");
            Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return o(s).default
                }
            })
        },
        epjP: function(e, t, n) {
            "use strict";
            n("ma9I"), n("zKZe");
            var r = n("RIqP");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createUniversalReporter = void 0;
            var i = n("mNvX"),
                o = n("GQD1");
            t.createUniversalReporter = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.context ? [o.createUserAgentContext()].concat(r(e.context)) : [o.createUserAgentContext()];
                return i.EventSenderReporter.create(Object.assign(Object.assign({
                    environment: "browser"
                }, e), {
                    context: t
                }))
            }
        },
        fbCW: function(e, t, n) {
            "use strict";
            var r = n("I+eb"),
                i = n("tycR").find,
                o = n("RNIs"),
                s = n("rkAj"),
                a = !0,
                u = s("find");
            "find" in [] && Array(1).find((function() {
                a = !1
            })), r({
                target: "Array",
                proto: !0,
                forced: a || !u
            }, {
                find: function(e) {
                    return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), o("find")
        },
        g4ef: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createSemanticMetricClientNonAuth = void 0, t.createSemanticMetricClientNonAuth = function(e) {
                return {
                    name: "SemanticMetricClientNonAuth",
                    environments: ["browsernonauth", "devicenonauth"],
                    data: e
                }
            }
        },
        "gss/": function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", (function() {
                    return r
                })),
                function(e) {
                    e.AUTHENTICATED = "authenticated", e.AUTHENTICATION_FAILED = "authentication_failed", e.CONNECTED = "connected", e.CONNECTION_ID = "connection_id", e.ERROR = "error", e.DISCONNECTED = "disconnected", e.MESSAGE = "message", e.REQUEST = "request"
                }(r || (r = {}))
        },
        hXCe: function(e, t, n) {
            "use strict";
            var r = n("lwsE"),
                i = n("W8MJ");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Time = void 0;
            var o = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    r(this, e), this.nanos = t
                }
                return i(e, [{
                    key: "asSeconds",
                    value: function() {
                        return this.nanos / 1e9
                    }
                }, {
                    key: "asMillis",
                    value: function() {
                        return this.nanos / 1e6
                    }
                }, {
                    key: "asMicros",
                    value: function() {
                        return this.nanos / 1e3
                    }
                }, {
                    key: "asNanos",
                    value: function() {
                        return Math.round(this.nanos)
                    }
                }], [{
                    key: "fromNanos",
                    value: function(t) {
                        return new e(t)
                    }
                }, {
                    key: "fromMicros",
                    value: function(t) {
                        return new e(1e3 * t)
                    }
                }, {
                    key: "fromMillis",
                    value: function(t) {
                        return new e(1e6 * t)
                    }
                }, {
                    key: "fromSeconds",
                    value: function(t) {
                        return new e(1e9 * t)
                    }
                }, {
                    key: "from",
                    value: function(t) {
                        return new e(t.asNanos())
                    }
                }]), e
            }();
            t.Time = o, o.ZERO = new o(0)
        },
        "kVK+": function(e, t) {
            t.read = function(e, t, n, r, i) {
                var o, s, a = 8 * i - r - 1,
                    u = (1 << a) - 1,
                    c = u >> 1,
                    h = -7,
                    l = n ? i - 1 : 0,
                    f = n ? -1 : 1,
                    d = e[t + l];
                for (l += f, o = d & (1 << -h) - 1, d >>= -h, h += a; h > 0; o = 256 * o + e[t + l], l += f, h -= 8);
                for (s = o & (1 << -h) - 1, o >>= -h, h += r; h > 0; s = 256 * s + e[t + l], l += f, h -= 8);
                if (0 === o) o = 1 - c;
                else {
                    if (o === u) return s ? NaN : 1 / 0 * (d ? -1 : 1);
                    s += Math.pow(2, r), o -= c
                }
                return (d ? -1 : 1) * s * Math.pow(2, o - r)
            }, t.write = function(e, t, n, r, i, o) {
                var s, a, u, c = 8 * o - i - 1,
                    h = (1 << c) - 1,
                    l = h >> 1,
                    f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    d = r ? 0 : o - 1,
                    _ = r ? 1 : -1,
                    p = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = h) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + l >= 1 ? f / u : f * Math.pow(2, 1 - l)) * u >= 2 && (s++, u /= 2), s + l >= h ? (a = 0, s = h) : s + l >= 1 ? (a = (t * u - 1) * Math.pow(2, i), s += l) : (a = t * Math.pow(2, l - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + d] = 255 & a, d += _, a /= 256, i -= 8);
                for (s = s << i | a, c += i; c > 0; e[n + d] = 255 & s, d += _, s /= 256, c -= 8);
                e[n + d - _] |= 128 * p
            }
        },
        lEuQ: function(e, t, n) {
            "use strict";
            n("sSlO");
            var r = n("sZL7");
            n.d(t, "a", (function() {
                return r
            }))
        },
        lwsE: function(e, t) {
            e.exports = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
        },
        m0LI: function(e, t) {
            e.exports = function(e, t) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                    } catch (u) {
                        i = !0, o = u
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }
            }
        },
        mD5K: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createInstallationIdContext = void 0;
            var r = n("pE4c");
            t.createInstallationIdContext = function(e) {
                var t = r.hexToBase64(e);
                return function() {
                    return {
                        name: "context_installation_id",
                        data: {
                            value: t
                        }
                    }
                }
            }
        },
        mNvX: function(e, t, n) {
            "use strict";
            n("pNMO"), n("4Brf"), n("0oug"), n("pjDv"), n("4mDm"), n("+2oP"), n("sMBO"), n("zKZe"), n("07d7"), n("5s+n"), n("JfAA"), n("PKPk"), n("3bBZ");
            var r = n("RIqP"),
                i = n("o0o1");
            n("ls82");
            var o = n("lwsE"),
                s = n("W8MJ");

            function a(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return u(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, s = !0,
                    a = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return s = e.done, e
                    },
                    e: function(e) {
                        a = !0, o = e
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                }
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var c = this && this.__awaiter || function(e, t, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function s(e) {
                            try {
                                u(r.next(e))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(e) {
                            try {
                                u(r.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                h = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EventSenderReporter = void 0;
            var l = n("8hDA"),
                f = n("nukI"),
                d = n("g4ef"),
                _ = h(n("rqAE")),
                p = n("4CIH"),
                E = n("EggZ");

            function g(e) {
                return function(t) {
                    return e.isAuthenticated() ? f.createSemanticMetricClient(t) : d.createSemanticMetricClientNonAuth(t)
                }
            }
            var T = function() {
                function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "browser",
                        i = arguments.length > 3 ? arguments[3] : void 0;
                    o(this, e), this.eventSender = t, this.createEvent = n, this.environment = r, this.transport = i
                }
                return s(e, [{
                    key: "send",
                    value: function(e) {
                        return c(this, void 0, void 0, i.mark((function t() {
                            var n, r, o, s, u;
                            return i.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n = a(e);
                                        try {
                                            for (n.s(); !(r = n.n()).done;) o = r.value, (s = Object.assign({}, o)).tags = Object.assign({}, s.tags), s.tags.environment && _.default.error("`tags.environment` must not be set. It is a reserved tag and will be overwritten."), s.tags.environment = this.environment, u = this.createEvent(Object.assign({}, s)), this.eventSender.send(u, Object.assign({
                                                flush: !1
                                            }, !this.transport.isAuthenticated() && {
                                                authorize: !1
                                            }))
                                        } catch (i) {
                                            n.e(i)
                                        } finally {
                                            n.f()
                                        }
                                        return t.abrupt("return", this.eventSender.flush(this.transport.isAuthenticated()));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })))
                    }
                }], [{
                    key: "create",
                    value: function(t) {
                        var n = this,
                            o = "getToken" in t ? t.getToken : null,
                            s = "ownerProvider" in t ? t.ownerProvider : null,
                            a = t.context ? r(t.context) : void 0,
                            u = t.environment,
                            h = p.createBaseTransport({
                                providers: {
                                    endpoints: function() {
                                        var e = p.createXResolveProvider();
                                        return function(r) {
                                            return c(n, void 0, void 0, i.mark((function n() {
                                                var o;
                                                return i.wrap((function(n) {
                                                    for (;;) switch (n.prev = n.next) {
                                                        case 0:
                                                            return n.next = 2, e(r);
                                                        case 2:
                                                            return o = n.sent, n.abrupt("return", Object.assign(Object.assign({}, o), t.internal && {
                                                                webgate: E.INTERNAL_WEBGATE_URL
                                                            }));
                                                        case 4:
                                                        case "end":
                                                            return n.stop()
                                                    }
                                                }), n)
                                            })))
                                        }
                                    }(),
                                    token: function() {
                                        return new Promise((function(e) {
                                            o ? o((function(t, n) {
                                                e("undefined" === typeof n ? t : [t, n])
                                            })) : e("")
                                        }))
                                    }
                                }
                            });
                        return o && (h.on(p.TransportEvent.CONNECTED, (function() {
                            h.authenticate()
                        })), h.on(p.TransportEvent.AUTHENTICATED, (function() {
                            _.default.debug("created authenticated browser transport")
                        })), h.on(p.TransportEvent.TOKEN_PROVIDER_ERROR, (function() {
                            _.default.debug("the token provided is isn't working.")
                        }))), h.connect(), new e(l.createEventSender(Object.assign({
                            transport: h,
                            context: a
                        }, s && {
                            ownerProvider: s
                        })), g(h), u, h)
                    }
                }, {
                    key: "createWithCustomTransport",
                    value: function(t) {
                        var n = "ownerProvider" in t ? t.ownerProvider : null;
                        return new e(l.createEventSender(Object.assign({
                            transport: t.transport
                        }, n && {
                            ownerProvider: n
                        })), g(t.transport), t.environment, t.transport)
                    }
                }]), e
            }();
            t.EventSenderReporter = T
        },
        mrSG: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "__extends", (function() {
                return i
            })), n.d(t, "__assign", (function() {
                return o
            })), n.d(t, "__rest", (function() {
                return s
            })), n.d(t, "__decorate", (function() {
                return a
            })), n.d(t, "__param", (function() {
                return u
            })), n.d(t, "__metadata", (function() {
                return c
            })), n.d(t, "__awaiter", (function() {
                return h
            })), n.d(t, "__generator", (function() {
                return l
            })), n.d(t, "__createBinding", (function() {
                return f
            })), n.d(t, "__exportStar", (function() {
                return d
            })), n.d(t, "__values", (function() {
                return _
            })), n.d(t, "__read", (function() {
                return p
            })), n.d(t, "__spread", (function() {
                return E
            })), n.d(t, "__spreadArrays", (function() {
                return g
            })), n.d(t, "__await", (function() {
                return T
            })), n.d(t, "__asyncGenerator", (function() {
                return v
            })), n.d(t, "__asyncDelegator", (function() {
                return m
            })), n.d(t, "__asyncValues", (function() {
                return O
            })), n.d(t, "__makeTemplateObject", (function() {
                return y
            })), n.d(t, "__importStar", (function() {
                return N
            })), n.d(t, "__importDefault", (function() {
                return w
            })), n.d(t, "__classPrivateFieldGet", (function() {
                return R
            })), n.d(t, "__classPrivateFieldSet", (function() {
                return b
            }));
            var r = function(e, t) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            };

            function i(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var o = function() {
                return (o = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function s(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                }
                return n
            }

            function a(e, t, n, r) {
                var i, o = arguments.length,
                    s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
                return o > 3 && s && Object.defineProperty(t, n, s), s
            }

            function u(e, t) {
                return function(n, r) {
                    t(n, r, e)
                }
            }

            function c(e, t) {
                if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function h(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            }

            function l(e, t) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = t.call(e, s)
                            } catch (a) {
                                o = [6, a], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }

            function f(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }

            function d(e, t) {
                for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
            }

            function _(e) {
                var t = "function" === typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" === typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function p(e, t) {
                var n = "function" === typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, i, o = n.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
                } catch (a) {
                    i = {
                        error: a
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return s
            }

            function E() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(p(arguments[t]));
                return e
            }

            function g() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    i = 0;
                for (t = 0; t < n; t++)
                    for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
                return r
            }

            function T(e) {
                return this instanceof T ? (this.v = e, this) : new T(e)
            }

            function v(e, t, n) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var r, i = n.apply(e, t || []),
                    o = [];
                return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
                    return this
                }, r;

                function s(e) {
                    i[e] && (r[e] = function(t) {
                        return new Promise((function(n, r) {
                            o.push([e, t, n, r]) > 1 || a(e, t)
                        }))
                    })
                }

                function a(e, t) {
                    try {
                        (n = i[e](t)).value instanceof T ? Promise.resolve(n.value.v).then(u, c) : h(o[0][2], n)
                    } catch (r) {
                        h(o[0][3], r)
                    }
                    var n
                }

                function u(e) {
                    a("next", e)
                }

                function c(e) {
                    a("throw", e)
                }

                function h(e, t) {
                    e(t), o.shift(), o.length && a(o[0][0], o[0][1])
                }
            }

            function m(e) {
                var t, n;
                return t = {}, r("next"), r("throw", (function(e) {
                    throw e
                })), r("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function r(r, i) {
                    t[r] = e[r] ? function(t) {
                        return (n = !n) ? {
                            value: T(e[r](t)),
                            done: "return" === r
                        } : i ? i(t) : t
                    } : i
                }
            }

            function O(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, n = e[Symbol.asyncIterator];
                return n ? n.call(e) : (e = _(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function r(n) {
                    t[n] = e[n] && function(t) {
                        return new Promise((function(r, i) {
                            (function(e, t, n, r) {
                                Promise.resolve(r).then((function(t) {
                                    e({
                                        value: t,
                                        done: n
                                    })
                                }), t)
                            })(r, i, (t = e[n](t)).done, t.value)
                        }))
                    }
                }
            }

            function y(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function N(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }

            function w(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function R(e, t) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function b(e, t, n) {
                if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                return t.set(e, n), n
            }
        },
        nukI: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createSemanticMetricClient = void 0, t.createSemanticMetricClient = function(e) {
                return {
                    name: "SemanticMetricClient",
                    environments: ["browser", "device"],
                    data: e
                }
            }
        },
        o0o1: function(e, t, n) {
            e.exports = n("ls82")
        },
        pE4c: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hexToBase64 = void 0;
            var r = n("UK8g");
            t.hexToBase64 = function(e) {
                if (!e || e.length % 2 !== 0) throw new TypeError("Invalid hexString value.");
                var t = e.split("").reduce((function(e, t, n) {
                        return n % 2 === 0 ? (e.push(t), e) : (e[e.length - 1] = "" + e[e.length - 1] + t, e)
                    }), []),
                    n = String.fromCharCode.apply(null, t.map((function(e) {
                        var t = parseInt(e, 16);
                        if (isNaN(t)) throw new TypeError("Invalid hexString value.");
                        return t
                    })));
                return r.Base64.encode(n)
            }
        },
        rSSY: function(e, t, n) {
            "use strict";
            n("fbCW"), n("sMBO"), n("zKZe"), n("07d7"), n("5s+n");
            var r = n("J4zp");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BrowserMetrics = void 0;
            var i = n("Z6KD"),
                o = n("hXCe");

            function s() {
                var e = window.performance.getEntriesByType("navigation");
                return r(e, 1)[0]
            }

            function a(e) {
                return new Promise((function(t, n) {
                    return window.performance && "function" === typeof performance.getEntriesByType ? window.addEventListener("load", (function() {
                        var r = performance.getEntriesByType("paint"),
                            i = r.find((function(t) {
                                return t.name === e
                            }));
                        return void 0 !== r && i ? t(i.startTime) : n("Time to paint api is not supported on this browser")
                    })) : n("window.performance api is not supported in this browser")
                }))
            }

            function u(e, t) {
                var n, r = e.name,
                    i = e.label,
                    s = e.value;
                return n = "cls" === r.toLowerCase() ? {
                    metric_type: "gauge",
                    value: s
                } : {
                    metric_type: "timer",
                    value: o.Time.fromMillis(Math.round(s)).asNanos()
                }, Object.assign(Object.assign({
                    what: "web_vitals_".concat(r.toLowerCase())
                }, n), {
                    tags: Object.assign({
                        name: r,
                        label: i
                    }, t)
                })
            }
            var c = {
                getPageLoadTime: function() {
                    return new Promise((function(e, t) {
                        if (!window.performance || "function" !== typeof performance.getEntriesByType) return t("window.performance api is not supported in this browser");
                        if ("undefined" === typeof s()) return t("navigationTiming api is not supported in this browser");
                        var n = s().loadEventEnd;
                        return n > 0 ? e(n) : window.addEventListener("load", (function() {
                            setTimeout((function() {
                                var t = s().loadEventEnd;
                                return e(t)
                            }), 0)
                        }))
                    }))
                },
                getResourceTiming: function() {
                    return window.performance.getEntriesByType("resource")
                },
                getTimeToFirstPaint: function() {
                    return a("first-paint")
                },
                getTimeToFirstContentfulPaint: function() {
                    return a("first-contentful-paint")
                },
                sendWebVitalsMetric: function(e, t) {
                    return i.sendMetric(u(e, t))
                },
                getWebVitalsMetric: u
            };
            t.BrowserMetrics = c
        },
        rqAE: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.silly = t.verbose = t.debug = t.info = t.warn = t.error = t.log = t.logger = t.default = void 0;
            var i = n("Bdte");
            Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r(i).default
                }
            }), Object.defineProperty(t, "logger", {
                enumerable: !0,
                get: function() {
                    return i.logger
                }
            }), Object.defineProperty(t, "log", {
                enumerable: !0,
                get: function() {
                    return i.log
                }
            }), Object.defineProperty(t, "error", {
                enumerable: !0,
                get: function() {
                    return i.error
                }
            }), Object.defineProperty(t, "warn", {
                enumerable: !0,
                get: function() {
                    return i.warn
                }
            }), Object.defineProperty(t, "info", {
                enumerable: !0,
                get: function() {
                    return i.info
                }
            }), Object.defineProperty(t, "debug", {
                enumerable: !0,
                get: function() {
                    return i.debug
                }
            }), Object.defineProperty(t, "verbose", {
                enumerable: !0,
                get: function() {
                    return i.verbose
                }
            }), Object.defineProperty(t, "silly", {
                enumerable: !0,
                get: function() {
                    return i.silly
                }
            })
        },
        sSlO: function(e, t, n) {
            "use strict";
            (function(e, t) {}).call(this, n("8oxB"), n("3r9c"))
        },
        sZL7: function(e, t, n) {
            "use strict";
            n.r(t),
                function(e) {
                    n.d(t, "intercept", (function() {
                        return c
                    })), n.d(t, "unintercept", (function() {
                        return h
                    })), n.d(t, "list", (function() {
                        return l
                    })), n.d(t, "enable", (function() {
                        return f
                    })), n.d(t, "disable", (function() {
                        return d
                    })), n.d(t, "setLevel", (function() {
                        return _
                    })), n.d(t, "enableAll", (function() {
                        return p
                    })), n.d(t, "disableAll", (function() {
                        return E
                    })), n.d(t, "forTag", (function() {
                        return g
                    })), n.d(t, "remove", (function() {
                        return T
                    }));
                    var r = n("Ibrv");
                    let i = e.__dbgLoggerRegistry;
                    i || (i = {
                        map: {},
                        list: [],
                        loggingPredicate: function() {}
                    }, Object.defineProperty ? Object.defineProperty(e, "__dbgLoggerRegistry", {
                        value: i
                    }) : e.__dbgLoggerRegistry = i);
                    const o = i.map,
                        s = i.list;

                    function a(e) {
                        return !(!i.loggingPredicate || !i.loggingPredicate(e))
                    }
                    let u = "log";

                    function c(e) {
                        if ("function" !== typeof e) throw new TypeError("Logging.intercept requires a function predicate.");
                        i.loggingPredicate = e
                    }

                    function h() {
                        i.loggingPredicate = () => {}
                    }

                    function l(e) {
                        const t = Object.keys(o).filter(e => o[e]).sort();
                        return e ? t.map(e => ({
                            tag: e,
                            description: o[e].description || "No description."
                        })) : t.reduce((e, t) => (e[t] = o[t].description || "No description", e), {})
                    }

                    function f(e) {
                        const t = Array.isArray(e) ? e : [e];
                        let n = t.length;
                        for (; n--;) {
                            const e = t[n].toLowerCase();
                            let r = s.length;
                            for (; r--;) {
                                const t = s[r];
                                t.matchesTag(e) && t.enable()
                            }
                        }
                    }

                    function d(e) {
                        const t = Array.isArray(e) ? e : [e];
                        let n = t.length;
                        for (; n--;) {
                            const e = t[n].toLowerCase();
                            let r = s.length;
                            for (; r--;) {
                                const t = s[r];
                                t.matchesTag(e) && t.disable()
                            }
                        }
                    }

                    function _(e) {
                        u = e;
                        let t = s.length;
                        for (; t--;) {
                            const n = s[t];
                            n && n.setLevel(e)
                        }
                    }

                    function p() {
                        let e = s.length;
                        for (; e--;) s[e] && s[e].enable()
                    }

                    function E() {
                        let e = s.length;
                        for (; e--;) s[e] && s[e].disable()
                    }

                    function g(e, t) {
                        let n, i;
                        if ("string" === typeof e ? (n = e.toLowerCase(), i = t) : (n = e.tag, i = e.description), o.hasOwnProperty(n) && o[n]) return o[n];
                        const c = new r.a(n, i, a);
                        return c.setLevel(u), o[n] = c, s.push(c), c
                    }

                    function T(e) {
                        const t = e.toLowerCase();
                        if (!o.hasOwnProperty(t) || !o[t]) return;
                        const n = o[t];
                        o[t] = null;
                        const r = s.indexOf(n); - 1 !== r && s.splice(r, 1)
                    }
                }.call(this, n("3r9c"))
        },
        t9iY: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createClientIdContext = void 0;
            var r = n("pE4c");
            t.createClientIdContext = function(e) {
                var t = r.hexToBase64(e);
                return function() {
                    return {
                        name: "context_client_id",
                        data: {
                            value: t
                        }
                    }
                }
            }
        },
        vIWZ: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createUserAgentContext = void 0, t.createUserAgentContext = function(e) {
                if (!e && "undefined" === typeof navigator) throw new Error("userAgent is not provided and navigator.UserAgent is not available");
                return function() {
                    return {
                        name: "context_user_agent",
                        data: {
                            value: e || navigator.userAgent
                        }
                    }
                }
            }
        },
        wT4t: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            const r = 4294967296;
            const i = {
                baseTime: 200,
                ceiling: 0,
                curve: "linear",
                jitter: !0
            };
            class o {
                constructor(e = {}) {
                    this._curve = e.curve || i.curve, this._baseTime = e.baseTime || i.baseTime, this._ceiling = e.ceiling || i.ceiling, this._jitter = "jitter" in e ? !!e.jitter : i.jitter
                }
                getTime(e) {
                    let t;
                    switch (this._curve) {
                        case "static":
                            t = 1;
                            break;
                        case "logarithmic":
                            t = Math.log(e);
                            break;
                        case "exponential":
                            t = Math.pow(Math.E, e);
                            break;
                        case "linear":
                        default:
                            t = e + 1
                    }
                    let n = Math.min(r, Math.floor(t * this._baseTime));
                    return this._ceiling && (n = Math.min(n, this._ceiling)), this._jitter ? function(e) {
                        const t = e / 5;
                        return Math.floor(e - t / 2 + Math.random() * t)
                    }(n) : n
                }
            }
        },
        wTVA: function(e, t) {
            e.exports = function(e) {
                if (Array.isArray(e)) return e
            }
        },
        wVwo: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", (function() {
                    return r
                })),
                function(e) {
                    e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.DEBUG = 2] = "DEBUG", e[e.INFO = 4] = "INFO", e[e.WARN = 8] = "WARN", e[e.ERROR = 16] = "ERROR"
                }(r || (r = {}))
        },
        wkBT: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        ylfK: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                i = 4096,
                o = function() {
                    for (var e = [], t = 0; t < 256; ++t) e[t] = 255;
                    for (t = 0; t < r.length; ++t) e[r.charCodeAt(t)] = t;
                    return String.fromCharCode.apply(String, e)
                }();
            var s = function(e) {
                for (var t = String(e), n = [], i = t.length, o = 0; o < i;) {
                    var s = 255 & t.charCodeAt(o++);
                    if (o === i) {
                        n.push(r.charAt(s >> 2), r.charAt((3 & s) << 4), "==");
                        break
                    }
                    var a = t.charCodeAt(o++);
                    if (o === i) {
                        n.push(r.charAt(s >> 2), r.charAt((3 & s) << 4 | (240 & a) >> 4), r.charAt((15 & a) << 2), "=");
                        break
                    }
                    var u = t.charCodeAt(o++);
                    n.push(r.charAt(s >> 2), r.charAt((3 & s) << 4 | (240 & a) >> 4), r.charAt((15 & a) << 2 | (192 & u) >> 6), r.charAt(63 & u))
                }
                return n.join("")
            };
            t.encode = s;
            var a = function(e) {
                for (var t, n, r = String(e), s = [], a = r.length, u = 0;;) {
                    do {
                        t = o.charCodeAt(255 & r.charCodeAt(u++))
                    } while (255 === t && u < a);
                    do {
                        n = o.charCodeAt(255 & r.charCodeAt(u++))
                    } while (255 === n && u < a);
                    if (255 === n) break;
                    s.push(255 & (t << 2 | n >> 4));
                    do {
                        t = o.charCodeAt(255 & r.charCodeAt(u++))
                    } while (255 === t && u < a);
                    if (255 === t) break;
                    s.push(255 & (n << 4 | t >> 2));
                    do {
                        n = o.charCodeAt(255 & r.charCodeAt(u++))
                    } while (255 === n && u < a);
                    if (255 === n) break;
                    s.push(255 & (t << 6 | n))
                }
                return function(e) {
                    if (e.length < i) return String.fromCharCode.apply(String, e);
                    var t = 0,
                        n = [];
                    do {
                        n.push(String.fromCharCode.apply(String, e.slice(t, t + i))), t += i
                    } while (t < e.length);
                    return n.join("")
                }(s)
            };
            t.decode = a, "undefined" !== typeof window && window.btoa && window.atob && (t.encode = s = function(e) {
                return window.btoa(e)
            }, t.decode = a = function(e) {
                return window.atob(e)
            })
        },
        ziih: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", (function() {
                    return r
                })),
                function(e) {
                    e[e.CLOSE = 4e3] = "CLOSE", e[e.TIMEOUT = 4001] = "TIMEOUT"
                }(r || (r = {}))
        }
    }
]);