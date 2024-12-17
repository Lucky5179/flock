(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5031],
  {
    75581: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 58593)),
        Promise.resolve().then(s.bind(s, 17390)),
        Promise.resolve().then(s.bind(s, 93953)),
        Promise.resolve().then(s.bind(s, 79175)),
        Promise.resolve().then(s.t.bind(s, 97255, 23)),
        Promise.resolve().then(s.t.bind(s, 37426, 23)),
        Promise.resolve().then(s.t.bind(s, 76135, 23)),
        Promise.resolve().then(s.t.bind(s, 48808, 23)),
        Promise.resolve().then(s.t.bind(s, 18694, 23)),
        Promise.resolve().then(s.t.bind(s, 91854, 23)),
        Promise.resolve().then(s.t.bind(s, 3258, 23)),
        Promise.resolve().then(s.bind(s, 16348)),
        Promise.resolve().then(s.bind(s, 32037)),
        Promise.resolve().then(s.bind(s, 10834));
    },
    79175: function (e, t, s) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let a = s(47477),
        r = s(35089);
      t.default = function (e) {
        let {
          html: t,
          height: s = null,
          width: i = null,
          children: n,
          dataNtpc: l = "",
        } = e;
        return (
          (0, r.useEffect)(() => {
            l &&
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-".concat(l) },
              });
          }, [l]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              n,
              t
                ? (0, a.jsx)("div", {
                    style: {
                      height: null != s ? "".concat(s, "px") : "auto",
                      width: null != i ? "".concat(i, "px") : "auto",
                    },
                    "data-ntpc": l,
                    dangerouslySetInnerHTML: { __html: t },
                  })
                : null,
            ],
          })
        );
      };
    },
    17390: function (e, t, s) {
      "use strict";
      var a;
      let r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGAEvent = t.GoogleAnalytics = void 0);
      let i = s(47477),
        n = s(35089),
        l = (a = s(22466)) && a.__esModule ? a : { default: a };
      (t.GoogleAnalytics = function (e) {
        let { gaId: t, dataLayerName: s = "dataLayer" } = e;
        return (
          void 0 === r && (r = s),
          (0, n.useEffect)(() => {
            performance.mark("mark_feature_usage", {
              detail: { feature: "next-third-parties-ga" },
            });
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(l.default, {
                id: "_next-ga-init",
                dangerouslySetInnerHTML: {
                  __html: "\n          window['"
                    .concat(s, "'] = window['")
                    .concat(s, "'] || [];\n          function gtag(){window['")
                    .concat(
                      s,
                      "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '"
                    )
                    .concat(t, "');"),
                },
              }),
              (0, i.jsx)(l.default, {
                id: "_next-ga",
                src: "https://www.googletagmanager.com/gtag/js?id=".concat(t),
              }),
            ],
          })
        );
      }),
        (t.sendGAEvent = function () {
          for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
            t[s] = arguments[s];
          if (void 0 === r) {
            console.warn("@next/third-parties: GA has not been initialized");
            return;
          }
          window[r]
            ? window[r].push(arguments)
            : console.warn(
                "@next/third-parties: GA dataLayer ".concat(
                  r,
                  " does not exist"
                )
              );
        });
    },
    93953: function (e, t, s) {
      "use strict";
      var a;
      let r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGTMEvent = t.GoogleTagManager = void 0);
      let i = s(47477),
        n = s(35089),
        l = (a = s(22466)) && a.__esModule ? a : { default: a };
      (t.GoogleTagManager = function (e) {
        let {
          gtmId: t,
          dataLayerName: s = "dataLayer",
          auth: a,
          preview: o,
          dataLayer: c,
        } = e;
        void 0 === r && (r = s);
        let d = "dataLayer" !== s ? "&l=".concat(s) : "";
        return (
          (0, n.useEffect)(() => {
            performance.mark("mark_feature_usage", {
              detail: { feature: "next-third-parties-gtm" },
            });
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(l.default, {
                id: "_next-gtm-init",
                dangerouslySetInnerHTML: {
                  __html:
                    "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        "
                      .concat(
                        c ? "w[l].push(".concat(JSON.stringify(c), ")") : "",
                        "\n      })(window,'"
                      )
                      .concat(s, "');"),
                },
              }),
              (0, i.jsx)(l.default, {
                id: "_next-gtm",
                "data-ntpc": "GTM",
                src: "https://www.googletagmanager.com/gtm.js?id="
                  .concat(t)
                  .concat(d)
                  .concat(a ? "&gtm_auth=".concat(a) : "")
                  .concat(
                    o ? "&gtm_preview=".concat(o, "&gtm_cookies_win=x") : ""
                  ),
              }),
            ],
          })
        );
      }),
        (t.sendGTMEvent = (e) => {
          if (void 0 === r) {
            console.warn("@next/third-parties: GTM has not been initialized");
            return;
          }
          window[r]
            ? window[r].push(e)
            : console.warn(
                "@next/third-parties: GTM dataLayer ".concat(
                  r,
                  " does not exist"
                )
              );
        });
    },
    2882: function (e, t, s) {
      "use strict";
      var a = s(10029);
      s.o(a, "useParams") &&
        s.d(t, {
          useParams: function () {
            return a.useParams;
          },
        }),
        s.o(a, "usePathname") &&
          s.d(t, {
            usePathname: function () {
              return a.usePathname;
            },
          }),
        s.o(a, "useRouter") &&
          s.d(t, {
            useRouter: function () {
              return a.useRouter;
            },
          }),
        s.o(a, "useSearchParams") &&
          s.d(t, {
            useSearchParams: function () {
              return a.useSearchParams;
            },
          }),
        s.o(a, "useServerInsertedHTML") &&
          s.d(t, {
            useServerInsertedHTML: function () {
              return a.useServerInsertedHTML;
            },
          });
    },
    22466: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r.a;
          },
        });
      var a = s(76135),
        r = s.n(a),
        i = {};
      for (var n in a)
        "default" !== n &&
          (i[n] = function (e) {
            return a[e];
          }.bind(0, n));
      s.d(t, i);
    },
    16348: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return o;
        },
      });
      var a = s(47477),
        r = s(69498),
        i = s(61412),
        n = s(58896),
        l = s(35089);
      function o(e) {
        let { children: t } = e,
          [s] = (0, l.useState)(
            () => new i.S({ defaultOptions: { queries: { staleTime: 6e4 } } })
          );
        return (0, a.jsx)(n.QueryClientProvider, {
          client: s,
          children: (0, a.jsx)(r.ZP, {
            theme: {
              token: {
                colorPrimary: "#6c94ec",
                screenSM: 320,
                screenMD: 640,
                screenLG: 768,
                screenXL: 960,
                screenXXL: 1024,
              },
              cssVar: !0,
              hashed: !1,
            },
            children: t,
          }),
        });
      }
    },
    32037: function (e, t, s) {
      "use strict";
      var a = s(47477),
        r = s(17789),
        i = s(28793),
        n = s(88052),
        l = s(57215);
      t.default = () =>
        (0, a.jsx)("footer", {
          className: "w-full bg-brand-black-v2 py-8",
          children: (0, a.jsx)("div", {
            className: "container mx-auto px-4",
            children: (0, a.jsxs)("div", {
              className:
                "flex flex-col md:flex-row justify-between py-[98px] gap-10 flex-wrap",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col gap-10 xl:max-w-[380px] w-full md:mr-[168px]",
                  children: [
                    (0, a.jsx)("div", {
                      className: "md:mb-0 max-w-[99px] md:max-w-[158px]",
                      children: (0, a.jsx)(i.default, {
                        src: r.Z,
                        alt: "FLock",
                        width: 158,
                        height: 46,
                        className: "w-full",
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "gap-3 flex flex-col",
                      children: [
                        (0, a.jsx)("p", {
                          className:
                            "text-brand-white-v2 text-sm font-semibold",
                          children: "Follow Us",
                        }),
                        (0, a.jsx)("div", {
                          className: "flex gap-3",
                          children: [
                            {
                              icon: (0, a.jsx)(n.b0, {
                                className:
                                  "fill-brand-white-v2 group-hover:fill-brand-blue-v2 transition-all duration-300",
                              }),
                              link: "https://x.com/",
                            },
            
                            {
                              icon: (0, a.jsx)(n.YG, {
                                className:
                                  "fill-brand-white-v2 group-hover:fill-brand-blue-v2 transition-all duration-300",
                              }),
                              link: "https://t.me/",
                            },

                          ].map((e, t) =>
                            (0, a.jsx)(
                              "a",
                              {
                                href: e.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "text-brand-white-v2 w-10 h-10 flex items-center justify-center border border-brand-white-v2 hover:border-brand-blue-v2 hover:text-brand-blue-v2 group transition-all duration-300",
                                children: e.icon,
                              },
                              t
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),

              ],
            }),
          }),
        });
    },
    10834: function (e, t, s) {
      "use strict";
      var a = s(47477),
        r = s(28793),
        i = s(50609),
        n = s(62866),
        l = s.n(n),
        o = s(17789),
        c = s(88052),
        d = s(35089),
        u = s(131),
        h = s(24359),
        m = s(57215),
        f = s(2882);
      let x = [
          { label: "Home", href: "/" },
          { label: "Platform", href: "/platform" },
          { label: "Docs", href: "https://docs.flock.io/", target: "_blank" },
          { label: "Blog", href: "/blog" },
          {
            label: "Resources",
            href: "/resources",
            items: [
              { key: "1", label: "Research", href: "/resources" },
              {
                key: "2",
                label: "Learn More About FLock",
                href: "/resources#learnmore",
              },
              {
                key: "3",
                label: "Unrivaled Research and Groundwork",
                href: "/resources#publications",
              },
              {
                key: "4",
                label: "Read Our Research",
                href: "/resources#read-our-research",
              },
              { key: "5", label: "Careers", href: "/careers" },
            ],
          },
        ],
        b = (e) => {
          let { isOpen: t, onClose: s } = e,
            [n, f] = (0, d.useState)(!1);
          return (0, a.jsxs)("div", {
            className: l()(
              "fixed top-0 left-0 right-0 bottom-0 bg-brand-black-v2 z-[999] px-4 flex flex-col",
              t ? "block" : "hidden"
            ),
            children: [
              

              (0, a.jsxs)("div", {
                className:
                  "flex flex-col items-center mt-auto gap-2 mb-[34px] w-full",
                children: [
                  (0, a.jsx)(i.default, {
                    className: "block w-full",
                    href: "https://apps-flock.vercel.app",
                    target: "_blank",
                    passHref: !0,
                    children: (0, a.jsx)(m.Z, {
                      fullWidth: !0,
                      variant: "primary",
                      children: "Launch Dapps",
                    }),
                  }),
                  (0, a.jsx)(i.default, {
                    className: "block w-full",
                    href: "https://app.uniswap.org",
                    target: "_blank",
                    passHref: !0,
                    children: (0, a.jsx)(m.Z, {
                      fullWidth: !0,
                      variant: "secondary",
                      children: "$BUY on Flock",
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      t.default = () => {
        let [e, t] = (0, d.useState)(!1),
          [s, n] = (0, d.useState)(!1),
          p = ["/", "/v2"].includes((0, f.usePathname)() || "");
        return (
          (0, d.useEffect)(() => {
            let e = () => {
              n(window.scrollY > 0);
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, a.jsxs)("header", {
            id: "fl-header",
            className: l()("fixed top-0 w-full mx-auto z-[998]", {
              "bg-brand-black-v2": !p || s,
            }),
            children: [
              (0, a.jsx)("div", {
                className: "container mx-auto px-4",
                children: (0, a.jsxs)("div", {
                  className: "flex items-center justify-between py-4 md:py-3",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "flex items-center max-w-[99px] md:max-w-[158px] h-[22px] md:h-[48px]",
                      children: (0, a.jsx)(i.default, {
                        href: "/",
                        children: (0, a.jsx)(r.default, {
                          src: o.Z,
                          alt: "FLock logo",
                          width: 158,
                          height: 48,
                          className: "w-full",
                        }),
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "items-center space-x-8 hidden md:flex",
                      children: [

                        (0, a.jsx)("div", {
                          className: "hidden md:flex lg:hidden",
                          onClick: () => t(!e),
                          children: (0, a.jsx)(c.ZR, {}),
                        }),
                        (0, a.jsxs)("div", {
                          className: "items-center space-x-4 hidden md:flex",
                          children: [
                            (0, a.jsx)(i.default, {
                              href: "https://apps-flock.vercel.app",
                              target: "_blank",
                              passHref: !0,
                              children: (0, a.jsx)(m.Z, {
                                variant: "primary",
                                children: "Launch Dapps",
                              }),
                            }),
                            (0, a.jsx)(i.default, {
                              href: "https://app.uniswap.org",
                              target: "_blank",
                              passHref: !0,
                              children: (0, a.jsx)(m.Z, {
                                variant: "secondary",
                                children: "$BUY on Flock",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "flex md:hidden",
                      onClick: () => t(!e),
                      children: (0, a.jsx)(c.ZR, {}),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(b, { isOpen: e, onClose: () => t(!1) }),
            ],
          })
        );
      };
    },
    37426: function () {},
    91854: function () {},
    18694: function () {},
    3258: function () {},
    17789: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/flock-logo-2.239ba2d6.svg",
        height: 121,
        width: 544,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    48808: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__everett_55fe30', '__everett_Fallback_55fe30'",
        },
        className: "__className_55fe30",
        variable: "__variable_55fe30",
      };
    },
    89719: function (e, t, s) {
      "use strict";
      s.d(t, {
        R: function () {
          return l;
        },
        m: function () {
          return n;
        },
      });
      var a = s(91361),
        r = s(94672),
        i = s(90785),
        n = class extends r.F {
          #e;
          #t;
          #s;
          constructor(e) {
            super(),
              (this.mutationId = e.mutationId),
              (this.#t = e.mutationCache),
              (this.#e = []),
              (this.state = e.state || l()),
              this.setOptions(e.options),
              this.scheduleGc();
          }
          setOptions(e) {
            (this.options = e), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(e) {
            this.#e.includes(e) ||
              (this.#e.push(e),
              this.clearGcTimeout(),
              this.#t.notify({
                type: "observerAdded",
                mutation: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            (this.#e = this.#e.filter((t) => t !== e)),
              this.scheduleGc(),
              this.#t.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e,
              });
          }
          optionalRemove() {
            this.#e.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#t.remove(this));
          }
          continue() {
            return this.#s?.continue() ?? this.execute(this.state.variables);
          }
          async execute(e) {
            this.#s = (0, i.Mz)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(e)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (e, t) => {
                this.#a({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#a({ type: "pause" });
              },
              onContinue: () => {
                this.#a({ type: "continue" });
              },
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#t.canRun(this),
            });
            let t = "pending" === this.state.status,
              s = !this.#s.canStart();
            try {
              if (!t) {
                this.#a({ type: "pending", variables: e, isPaused: s }),
                  await this.#t.config.onMutate?.(e, this);
                let t = await this.options.onMutate?.(e);
                t !== this.state.context &&
                  this.#a({
                    type: "pending",
                    context: t,
                    variables: e,
                    isPaused: s,
                  });
              }
              let a = await this.#s.start();
              return (
                await this.#t.config.onSuccess?.(
                  a,
                  e,
                  this.state.context,
                  this
                ),
                await this.options.onSuccess?.(a, e, this.state.context),
                await this.#t.config.onSettled?.(
                  a,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(a, null, e, this.state.context),
                this.#a({ type: "success", data: a }),
                a
              );
            } catch (t) {
              try {
                throw (
                  (await this.#t.config.onError?.(
                    t,
                    e,
                    this.state.context,
                    this
                  ),
                  await this.options.onError?.(t, e, this.state.context),
                  await this.#t.config.onSettled?.(
                    void 0,
                    t,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    t,
                    e,
                    this.state.context
                  ),
                  t)
                );
              } finally {
                this.#a({ type: "error", error: t });
              }
            } finally {
              this.#t.runNext(this);
            }
          }
          #a(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    failureCount: e.failureCount,
                    failureReason: e.error,
                  };
                case "pause":
                  return { ...t, isPaused: !0 };
                case "continue":
                  return { ...t, isPaused: !1 };
                case "pending":
                  return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              a.V.batch(() => {
                this.#e.forEach((t) => {
                  t.onMutationUpdate(e);
                }),
                  this.#t.notify({
                    mutation: this,
                    type: "updated",
                    action: e,
                  });
              });
          }
        };
      function l() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        7023, 751, 7481, 6054, 42, 9498, 8793, 609, 6135, 7534, 5617, 4573,
        8926, 1744,
      ],
      function () {
        return e((e.s = 75581));
      }
    ),
      (_N_E = e.O());
  },
]);
