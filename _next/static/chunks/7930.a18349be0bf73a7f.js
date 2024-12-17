(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7930],
  {
    25256: function (e, t) {
      "use strict";
      t.E = function (e, t) {
        return e
          .split(",")
          .map(function (e) {
            var t = (e = e.trim()).match(r),
              i = t[1],
              o = t[2],
              s = t[3] || "",
              c = {};
            return (
              (c.inverse = !!i && "not" === i.toLowerCase()),
              (c.type = o ? o.toLowerCase() : "all"),
              (s = s.match(/\([^\)]+\)/g) || []),
              (c.expressions = s.map(function (e) {
                var t = e.match(n),
                  r = t[1].toLowerCase().match(a);
                return { modifier: r[1], feature: r[2], value: t[2] };
              })),
              c
            );
          })
          .some(function (e) {
            var r = e.inverse,
              n = "all" === e.type || t.type === e.type;
            if ((n && r) || !(n || r)) return !1;
            var a = e.expressions.every(function (e) {
              var r = e.feature,
                n = e.modifier,
                a = e.value,
                i = t[r];
              if (!i) return !1;
              switch (r) {
                case "orientation":
                case "scan":
                  return i.toLowerCase() === a.toLowerCase();
                case "width":
                case "height":
                case "device-width":
                case "device-height":
                  (a = l(a)), (i = l(i));
                  break;
                case "resolution":
                  (a = c(a)), (i = c(i));
                  break;
                case "aspect-ratio":
                case "device-aspect-ratio":
                case "device-pixel-ratio":
                  (a = s(a)), (i = s(i));
                  break;
                case "grid":
                case "color":
                case "color-index":
                case "monochrome":
                  (a = parseInt(a, 10) || 1), (i = parseInt(i, 10) || 0);
              }
              switch (n) {
                case "min":
                  return i >= a;
                case "max":
                  return i <= a;
                default:
                  return i === a;
              }
            });
            return (a && !r) || (!a && r);
          });
      };
      var r = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
        n = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
        a = /^(?:(min|max)-)?(.+)/,
        i = /(em|rem|px|cm|mm|in|pt|pc)?$/,
        o = /(dpi|dpcm|dppx)?$/;
      function s(e) {
        var t,
          r = Number(e);
        return r || (r = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]), r;
      }
      function c(e) {
        var t = parseFloat(e);
        switch (String(e).match(o)[1]) {
          case "dpcm":
            return t / 2.54;
          case "dppx":
            return 96 * t;
          default:
            return t;
        }
      }
      function l(e) {
        var t = parseFloat(e);
        switch (String(e).match(i)[1]) {
          case "em":
          case "rem":
            return 16 * t;
          case "cm":
            return (96 * t) / 2.54;
          case "mm":
            return (96 * t) / 2.54 / 10;
          case "in":
            return 96 * t;
          case "pt":
            return 72 * t;
          case "pc":
            return (72 * t) / 12;
          default:
            return t;
        }
      }
    },
    7304: function (e, t, r) {
      "use strict";
      var n = r(25256).E,
        a = "undefined" != typeof window ? window.matchMedia : null;
      function i(e, t, r) {
        var i,
          o = this;
        function s(e) {
          (o.matches = e.matches), (o.media = e.media);
        }
        a && !r && (i = a.call(window, e)),
          i
            ? ((this.matches = i.matches),
              (this.media = i.media),
              i.addListener(s))
            : ((this.matches = n(e, t)), (this.media = e)),
          (this.addListener = function (e) {
            i && i.addListener(e);
          }),
          (this.removeListener = function (e) {
            i && i.removeListener(e);
          }),
          (this.dispose = function () {
            i && i.removeListener(s);
          });
      }
      e.exports = function (e, t, r) {
        return new i(e, t, r);
      };
    },
    45706: function (e, t, r) {
      "use strict";
      var n = r(4426);
      function a() {}
      function i() {}
      (i.resetWarningCache = a),
        (e.exports = function () {
          function e(e, t, r, a, i, o) {
            if (o !== n) {
              var s = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((s.name = "Invariant Violation"), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var r = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: a,
          };
          return (r.PropTypes = r), r;
        });
    },
    85532: function (e, t, r) {
      e.exports = r(45706)();
    },
    4426: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    37930: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return W;
          },
        });
      var n = r(47477),
        a = r(62866),
        i = r.n(a),
        o = r(35089),
        s = r(7304),
        c = r.n(s),
        l = /[A-Z]/g,
        u = /^ms-/,
        m = {};
      function d(e) {
        return "-" + e.toLowerCase();
      }
      var p = function (e) {
          if (m.hasOwnProperty(e)) return m[e];
          var t = e.replace(l, d);
          return (m[e] = u.test(t) ? "-" + t : t);
        },
        f = r(85532),
        h = r.n(f);
      let b = h().oneOfType([h().string, h().number]),
        v = {
          all: h().bool,
          grid: h().bool,
          aural: h().bool,
          braille: h().bool,
          handheld: h().bool,
          print: h().bool,
          projection: h().bool,
          screen: h().bool,
          tty: h().bool,
          tv: h().bool,
          embossed: h().bool,
        },
        { type: x, ...y } = {
          orientation: h().oneOf(["portrait", "landscape"]),
          scan: h().oneOf(["progressive", "interlace"]),
          aspectRatio: h().string,
          deviceAspectRatio: h().string,
          height: b,
          deviceHeight: b,
          width: b,
          deviceWidth: b,
          color: h().bool,
          colorIndex: h().bool,
          monochrome: h().bool,
          resolution: b,
          type: Object.keys(v),
        },
        g = {
          minAspectRatio: h().string,
          maxAspectRatio: h().string,
          minDeviceAspectRatio: h().string,
          maxDeviceAspectRatio: h().string,
          minHeight: b,
          maxHeight: b,
          minDeviceHeight: b,
          maxDeviceHeight: b,
          minWidth: b,
          maxWidth: b,
          minDeviceWidth: b,
          maxDeviceWidth: b,
          minColor: h().number,
          maxColor: h().number,
          minColorIndex: h().number,
          maxColorIndex: h().number,
          minMonochrome: h().number,
          maxMonochrome: h().number,
          minResolution: b,
          maxResolution: b,
          ...y,
        };
      var w = { ...v, ...g };
      let k = (e) => `not ${e}`,
        j = (e, t) => {
          let r = p(e);
          return ("number" == typeof t && (t = `${t}px`), !0 === t)
            ? r
            : !1 === t
            ? k(r)
            : `(${r}: ${t})`;
        },
        C = (e) => e.join(" and "),
        O = (e) => {
          let t = [];
          return (
            Object.keys(w).forEach((r) => {
              let n = e[r];
              null != n && t.push(j(r, n));
            }),
            C(t)
          );
        },
        E = (0, o.createContext)(void 0),
        L = (e) => e.query || O(e),
        R = (e) => {
          if (e)
            return Object.keys(e).reduce((t, r) => ((t[p(r)] = e[r]), t), {});
        },
        N = () => {
          let e = (0, o.useRef)(!1);
          return (
            (0, o.useEffect)(() => {
              e.current = !0;
            }, []),
            e.current
          );
        },
        _ = (e) => {
          let t = (0, o.useContext)(E),
            r = () => R(e) || R(t),
            [n, a] = (0, o.useState)(r);
          return (
            (0, o.useEffect)(() => {
              let e = r();
              !(function (e, t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                let r = Object.keys(e),
                  n = Object.keys(t),
                  a = r.length;
                if (n.length !== a) return !1;
                for (let n = 0; n < a; n++) {
                  let a = r[n];
                  if (
                    e[a] !== t[a] ||
                    !Object.prototype.hasOwnProperty.call(t, a)
                  )
                    return !1;
                }
                return !0;
              })(n, e) && a(e);
            }, [e, t]),
            n
          );
        },
        T = (e) => {
          let t = () => L(e),
            [r, n] = (0, o.useState)(t);
          return (
            (0, o.useEffect)(() => {
              let e = t();
              r !== e && n(e);
            }, [e]),
            r
          );
        },
        I = (e, t) => {
          let r = () => c()(e, t || {}, !!t),
            [n, a] = (0, o.useState)(r),
            i = N();
          return (
            (0, o.useEffect)(() => {
              if (i) {
                let e = r();
                return (
                  a(e),
                  () => {
                    e && e.dispose();
                  }
                );
              }
            }, [e, t]),
            n
          );
        },
        S = (e) => {
          let [t, r] = (0, o.useState)(e.matches);
          return (
            (0, o.useEffect)(() => {
              let t = (e) => {
                r(e.matches);
              };
              return (
                e.addListener(t),
                r(e.matches),
                () => {
                  e.removeListener(t);
                }
              );
            }, [e]),
            t
          );
        },
        D = (e, t, r) => {
          let n = _(t),
            a = T(e);
          if (!a) throw Error("Invalid or missing MediaQuery!");
          let i = I(a, n),
            s = S(i),
            c = N();
          return (
            (0, o.useEffect)(() => {
              c && r && r(s);
            }, [s]),
            (0, o.useEffect)(
              () => () => {
                i && i.dispose();
              },
              []
            ),
            s
          );
        };
      var P = r(57215),
        W = (e) => {
          let {
            type: t,
            title: r,
            description: a,
            onClick: o,
            className: s,
            isOpen: c,
            onClose: l,
          } = e;
          return D({ query: "(min-width: 992px)" })
            ? (0, n.jsxs)("div", {
                className: i()(
                  "opacity-0 transition-opacity duration-300 absolute w-full h-fit bg-brand-black-v2/5 backdrop-blur-md p-6 flex flex-col border border-brand-blue-v2/35 h-fit",
                  {
                    "ai-arena":
                      "group-hover/ai-arena:opacity-100 top-[20%] -left-[30%]",
                    "fl-alliance":
                      "group-hover/fl-alliance:opacity-100 top-[40%] -left-[20%]",
                    "ai-marketplace":
                      "group-hover/ai-marketplace:opacity-100 top-[50%]",
                  }[t],
                  s
                ),
                children: [
                  (0, n.jsx)("h3", {
                    className: "text-brand-white-v2 font-medium text-lg",
                    children: r,
                  }),
                  (0, n.jsx)("p", {
                    className: "text-brand-grey-v2-400 text-sm mb-6",
                    children: a,
                  }),
                ],
              })
            : (0, n.jsx)("div", {
                className: i()(
                  "fixed inset-0 z-[9998] bg-brand-black-v2/20 backdrop-blur-md flex-col justify-center items-center",
                  c ? "flex" : "hidden",
                  s
                ),
                onClick: l,
                children: (0, n.jsxs)("div", {
                  className:
                    "w-full max-w-[90vw] bg-brand-black-v2 p-4 group-hover:flex flex-col border border-brand-blue-v2/35",
                  children: [
                    (0, n.jsx)("h3", {
                      className: "text-brand-white-v2 font-medium text-lg",
                      children: r,
                    }),
                    (0, n.jsx)("p", {
                      className: "text-brand-grey-v2-400 text-sm mb-6",
                      children: a,
                    }),
                    (0, n.jsx)("div", {
                      className: "w-full mt-auto",
                      children: (0, n.jsx)(P.Z, {
                        variant: "primary",
                        onClick: o,
                        children: "Learn More",
                      }),
                    }),
                  ],
                }),
              });
        };
    },
  },
]);
