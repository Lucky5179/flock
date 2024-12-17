(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2145],
  {
    82145: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 65432));
    },
    65432: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return W;
        },
      });
      var r = a(47477),
        i = a(6934),
        s = a(68860),
        n = a(28793),
        l = a(50609),
        o = a(82074),
        c = a.n(o);
      let d = (e) => {
        let { title: t, href: a, cover: i, description: s, date: o } = e,
          d = c()(s);
        return (0, r.jsxs)("div", {
          className: "flex flex-col border border-brand-white-v2",
          children: [
            (0, r.jsx)("div", {
              className: "w-full overflow-hidden aspect-video",
              children: (0, r.jsx)(l.default, {
                passHref: !0,
                href: a,
                children: (0, r.jsx)(n.default, {
                  src: i,
                  alt: "blog",
                  width: 500,
                  height: 500,
                  className: "object-cover",
                }),
              }),
            }),
            (0, r.jsx)(l.default, {
              passHref: !0,
              href: a,
              children: (0, r.jsx)("h3", {
                className:
                  "p-3 border-b border-brand-white-v2 text-brand-white-v2 text-[18px] md:text-[20px] font-semibold m-0",
                children: (0, r.jsx)("span", {
                  className: "line-clamp-2",
                  children: t,
                }),
              }),
            }),
            (0, r.jsxs)("div", {
              className: "p-3 flex flex-col",
              children: [
                (0, r.jsx)("div", {
                  className: "text-sm !text-brand-white line-clamp-2 mb-2.5",
                  dangerouslySetInnerHTML: { __html: s },
                }),
                (0, r.jsxs)("div", {
                  className:
                    "flex gap-3 items-center text-brand-grey-v2 mt-auto",
                  children: [
                    (0, r.jsx)("p", {
                      className: "text-xs text-brand-white-v2/50 m-0",
                      children: d.text,
                    }),
                    (0, r.jsx)("div", {
                      className: "w-[6px] h-[6px] bg-brand-white-v2/50",
                    }),
                    (0, r.jsx)("p", {
                      className: "text-xs text-brand-white-v2/50 m-0",
                      children: o,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var m = () => {
          let { data: e } = (0, s.kx)({ tags: [], page: "1", pageSize: "3" });
          return (0, r.jsx)("div", {
            className: "w-full mx-auto",
            children: (0, r.jsxs)("div", {
              className: "container md:mx-auto py-[128px] px-4",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex justify-between",
                  children: [
                    (0, r.jsxs)("h3", {
                      className:
                        "flex gap-4 flex-wrap text-[24px] md:text-[36px] font-semibold text-brand-white-v2",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "bg-brand-blue-v2 px-2 block text-brand-white-v2 text-[24px] md:text-[36px] font-semibold",
                          children: "Stay in touch",
                        }),
                        "Explore the latest in AI",
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "gap-2 items-center hidden md:flex group cursor-pointer",
                      children: [

                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-12 mt-[56px]",
                  children:
                    null == e
                      ? void 0
                      : e.pages[0].data.map((e) => {
                          var t;
                          return (0, r.jsx)(
                            d,
                            {
                              title: e.title,
                              href: "/blog/".concat(e.slug),
                              cover: e.cover || "/placeholder.jpeg",
                              date: new Date(e.createdAt).toLocaleDateString(),
                              description:
                                (null === (t = e.excerpt) || void 0 === t
                                  ? void 0
                                  : t.replace(/<[^>]*>/g, "")) || "",
                            },
                            e.id
                          );
                        }),
                }),
                (0, r.jsxs)("div", {
                  className:
                    "gap-2 items-center flex md:hidden mt-[56px] justify-center group cursor-pointer",
                  children: [
                    (0, r.jsx)(l.default, {
                      href: "/blog",
                      className:
                        "text-base font-semibold text-brand-white-v2 group-hover:text-brand-blue-v2",
                      children: "Read all",
                    }),
                    (0, r.jsx)(i.Z, {
                      className:
                        "fill-brand-white-v2 group-hover:fill-brand-blue-v2",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        p = a(8166),
        u = a(99651),
        x = a(62866),
        h = a.n(x),
        g = a(35089),
        f = a(65594),
        b = a(57176),
        v = a(28589),
        w = [
          { name: "Digital Currency Group", image: "/images/backer/dcg.svg" },
          {
            name: "Lightspeed Fraction",
            image: "/images/backer/lightspeed.png",
          },
          {
            name: "Ethereum Foundation",
            image: "/images/backer/eth-foundation.png",
          },
          { name: "Tagus Capital", image: "/images/backer/tagus.png" },
          { name: "Volt Capital", image: "/images/backer/volt.png" },
          { name: "OKX Ventures", image: "/images/backer/okx.png" },
        ],
        y = a(25320),
        j = a(91632);
      let N = [
        {
          text: "At Hyperbolic we know the future of AI is collaborative. By providing compute to the FLock.io network of world-class AI developers, we’re making this future a reality",
          author: "Jasper Zhang",
          title: "CEO & Co-Founder of Hyperbolic",
          avatar: "/images/hyperbolic.png",
        },
        {
          text: "Our partnership with FLock.io on Proof of AI, is crucial to executing on our vision to] enable decentralized networks to become more a trusted and scalable solution for AI applications.",
          author: "Milan Amin",
          title: "CMO of IO.net",
          avatar: "/images/ionet.png",
        },
        {
          text: "In just a few clicks, developers can deploy FLock.io Training Nodes and Validators on Akash. We’re thrilled that it’s so easy for developers to participate in decentralized AI development on Akash’s supercloud",
          author: "Greg Osuri",
          title: "Founder of Akash",
          avatar: "/images/akash.png",
        },
        {
          text: "FLock.io is empowering a Smart Agentic future through their contributions to the Morpheus RAG Agent for onchain transactions",
          author: "",
          title: "Maintainer at Morpheus",
          avatar: "/images/morpheus.png",
        },
        {
          text: "FLock.io and its innovative federated learning platform stand out in the AI market by advancing blockchain technologies while prioritizing user privacy and data sovereignty in AI model training. We’re excited to be one of their task creators, training our company’s AI models to enhance inter-company efficiency and ultimately benefit the entire GameFi ecosystem.",
          author: "Yiting Shan",
          title: "Investment Team of Animoca Brands",
          avatar: "/images/animoca.png",
        },
      ];
      var k = () => {
        let e = (0, g.useRef)(null),
          [t, a] = (0, g.useState)(0),
          i = ["Digital Currency Group", "Lightspeed Fraction"];
        return (0, r.jsxs)("div", {
          className:
            "w-full mx-auto bg-[url('/images/testimonial.png')] bg-cover bg-top pt-[128px] pb-[64px] md:pb-[128px]",
          children: [

            (0, r.jsxs)("div", {
              className: "mx-auto gap-4 flex flex-col mt-[120px] relative",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "absolute left-0 top-0 w-[20%] h-full bg-gradient-to-r from-brand-black-v2 to-transparent z-20",
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute right-0 top-0 w-[20%] h-full bg-gradient-to-l from-brand-black-v2 to-transparent z-20",
                }),
                (0, r.jsx)("div", {
                  className: "mb-12",
                  children: (0, r.jsxs)("h2", {
                    className:
                      "text-2xl text-center md:text-4xl font-bold mb-3 text-brand-white-v2",
                    children: [
                      "The FLock",
                      " ",
                      (0, r.jsx)("span", {
                        className:
                          "bg-brand-blue-v2 text-brand-white-v2 px-2 py-1",
                        children: "Ecosystem",
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "relative",
                  children: (0, r.jsx)(j.Z, {
                    speed: 50,
                    children: v.Z.map((e) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className:
                            "flex justify-center items-center h-[78px] md:mx-5",
                          children: (0, r.jsx)("div", {
                            className:
                              "w-[85px] md:w-[150px] h-full mx-5 flex items-center justify-center",
                            children: (0, r.jsx)("img", {
                              src: e.image,
                              alt: e.id,
                              className: "object-contain h-full",
                            }),
                          }),
                        },
                        e.id
                      )
                    ),
                  }),
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className:
                "max-w-screen-lg mx-auto px-4 gap-4 flex flex-col mt-[120px]",
              children: [
              ],
            }),
          ],
        });
      };
      let F = [
        {
          text: "Local training and hosting while data stay local. For crowdsourced data, contributors are fairly rewarded",
          title: "Data Ownership",
          icon: "/videos/data.mp4",
        },
        {
          text: "Finetune LLMs, Stable Diffusion and more on your own or with other FLock nodes to lower data requirements",
          title: "Finetuning Foundation Models ",
          icon: "/videos/finetuning.mp4",
        },
        {
          text: "Fast and compute-saving finetuning enabled by LoRA",
          title: "Scalable Infrastructure",
          icon: "/videos/scalable.mp4",
        },
        {
          text: "Finetuning and RAG co-ordinated on-chain, contributors of data, feedback, compute share rewards",
          title: "Community-Owned",
          icon: "/videos/community.mp4",
        },
      ];
      var L = () =>
          (0, r.jsxs)("div", {
            className:
              "w-full mx-auto bg-[url('/images/fs-cocreation.png')] bg-cover bg-top py-[128px]",
            children: [
              (0, r.jsx)("div", {
                className: "container mx-auto px-4 gap-4 flex flex-col",
                children: (0, r.jsxs)("div", {
                  className: "mb-12",
                  children: [
                    (0, r.jsxs)("h2", {
                      className:
                        "text-center text-2xl md:text-4xl font-bold mb-3 text-brand-white-v2 flex flex-col gap-1.5",
                      children: [
                        (0, r.jsx)("span", { children: "Full-Stack" }),
                        (0, r.jsx)("span", {
                          children: (0, r.jsx)("span", {
                            className:
                              "bg-brand-blue-v2 text-brand-white-v2 px-2",
                            children: "Co-Creation",
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsx)("p", {
                      className:
                        "mx-auto text-center text-brand-grey-v2-400 text-sm md:text-base max-w-[530px]",
                      children:
                        "FLock.io's comprehensive platform streamlines your AI journey, from data preparation to model deployment.",
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("div", {
                className: "container mx-auto gap-4 flex flex-col",
                children: (0, r.jsx)("div", {
                  className: "grid grid-cols-2 gap-3 md:gap-6 px-4",
                  children: F.map((e, t) =>
                    (0, r.jsxs)(
                      "div",
                      {
                        className:
                          "flex flex-col md:flex-row gap-4 p-4 md:p-6 bg-[#00000080] border border-[#3773FF54] backdrop-blur-md justify-between md:items-center",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "flex flex-col gap-2 md:gap-6 max-w-[222px]",
                            children: [
                              (0, r.jsx)("h3", {
                                className:
                                  "text-brand-white-v2 text-base md:text-2xl font-semibold",
                                children: e.title,
                              }),
                              (0, r.jsx)("p", {
                                className:
                                  "text-brand-grey-v2-400 text-sm md:text-base",
                                children: e.text,
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: h()(
                              "flex justify-center md:justify-end w-full md:w-[343px] md:h-[274px]",
                              { "pl-10 pr-10 md:pl-0 py-6": 1 === t }
                            ),
                            children: (0, r.jsx)("video", {
                              src: e.icon,
                              autoPlay: !0,
                              muted: !0,
                              playsInline: !0,
                              loop: !0,
                            }),
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              }),
            ],
          }),
        A = a(24359),
        C = a(5039);
      let z = (e) => {
        let t = "string" == typeof e ? parseFloat(e) : e;
        return isNaN(t)
          ? "0"
          : t >= 1e9
          ? (t / 1e9).toFixed(1) + "B"
          : t >= 1e6
          ? (t / 1e6).toFixed(1) + "M"
          : t >= 1e4
          ? (t / 1e3).toFixed(1) + "K"
          : t.toString();
      };
      var P = () => {
          let { data: e } = (0, C.V)(),
            t = null == e ? void 0 : e.data,
            a = [
              {
                number: z((null == t ? void 0 : t.ai_devs) || "0"),
                label: "Number of AI Developers",
              },
              {
                number: z((null == t ? void 0 : t.ai_validators) || "0"),
                label: "Number of AI Validators",
              },
              {
                number: z((null == t ? void 0 : t.delegators) || "0"),
                label: "Delegators",
              },
              {
                number: z((null == t ? void 0 : t.model_users) || "0"),
                label: "Model Users",
              },
              {
                number: z((null == t ? void 0 : t.ai_submissions) || "0"),
                label: "AI Models Created",
              },
              {
                number: z((null == t ? void 0 : t.ai_validations) || "0"),
                label: "AI Models Validation",
              },
              {
                number: (null == t ? void 0 : t.fml_staked) || "0",
                label: "% of FML Staked",
              },
            ];
          return (0, r.jsx)("section", {
            className: "w-full bg-brand-black-v2",
            children: (0, r.jsx)("div", {
              className: "mx-auto border-t border-b border-brand-white-v2",
              children: (0, r.jsx)(j.Z, {
                speed: 50,
                children: a.map((e, t) =>
                  (0, r.jsx)(
                    "div",
                    {
                      className: "border-r border-brand-white-v2",
                      children: (0, r.jsxs)("div", {
                        className:
                          "flex flex-col p-4 md:p-6 items-start gap-8 md:gap-[90px] h-full justify-between",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "text-base md:text-[20px] font-semibold mt-4 font-everett text-brand-white-v2 flex items-center gap-3",
                            children: [
                              (0, r.jsx)("div", {
                                className: "w-6 h-6",
                                children: (0, r.jsx)(A.Z, {
                                  className:
                                    "fill-brand-blue-v2 stroke-brand-blue-v2 md:fill-brand-black-v2 md:stroke-brand-white-v2",
                                }),
                              }),
                              (0, r.jsx)("span", { children: e.label }),
                            ],
                          }),
                          (0, r.jsx)("span", {
                            className:
                              "text-4xl md:text-[100px] font-semibold leading-none font-everett text-brand-white-v2",
                            children: e.number,
                          }),
                        ],
                      }),
                    },
                    t
                  )
                ),
              }),
            }),
          });
        },
        Z = (e) =>
          (0, r.jsx)("svg", {
            width: "55",
            height: "55",
            viewBox: "0 0 49 49",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, r.jsx)("path", {
              d: "M38.2384 28.5386V10.4616V0.761719L28.5385 0.761719L10.4616 0.761719L0.761719 10.4616H10.4616L28.5385 10.4616V28.5386L28.5385 38.2384L38.2384 28.5386Z",
              fill: "#3773FF",
            }),
          }),
        E = a(79366),
        T = a(81114),
        M = a(50469),
        I = a(57215);
      let _ =
          "https://ucwlvzgpqvoxldczjggo.supabase.co/storage/v1/object/public/flock-blog/videos/hero.mp4",
        S = (e) => {
          let { children: t, className: a } = e;
          return (0, r.jsx)("h3", {
            className: h()(
              "text-brand-white-v2 px-1 m-0 sm:h-[52px] flex items-center bg-brand-blue-v2 absolute z-20 font-medium md:text-[32px]",
              a
            ),
            children: t,
          });
        };
      T.ZP.registerPlugin(E.i);
      var q = () => {
          let [e, t] = (0, g.useState)(_),
            a = (0, g.useRef)(null),
            i = (0, g.useRef)(null),
            s = (0, g.useRef)(null),
            n = (0, g.useRef)(null),
            o = (0, g.useRef)(null);
          return (
            (0, g.useEffect)(() => {
              window
                .matchMedia("(orientation: portrait)")
                .addEventListener("change", (e) => {
                  e.matches
                    ? t(
                        "https://ucwlvzgpqvoxldczjggo.supabase.co/storage/v1/object/public/flock-blog/videos/hero-portrait.mp4"
                      )
                    : t(_);
                });
            }, []),
            (0, M.V)(() => {
              var e, t, r, l;
              let c = a.current,
                d = s.current,
                m = i.current,
                p = n.current,
                u = o.current;
              if (!c) return;
              (e = document.documentElement),
                (t = "touchstart"),
                (r = function () {
                  c.play(), c.pause();
                }),
                (l = function (a) {
                  e.removeEventListener(t, l), r.apply(this, arguments);
                }),
                e.addEventListener(t, l);
              let x = T.ZP.timeline({ defaults: { duration: 1 } });
              return (
                c.pause(),
                E.i.create({
                  animation: x,
                  trigger: d,
                  start: "top top",
                  end: "800%",
                  scrub: !1,
                  pin: !0,
                  toggleActions: "play pause reverse pause",
                  onUpdate: (e) => {
                    let t = e.progress;
                    c.duration > 0 && (c.currentTime = t * c.duration),
                      t >= 0.325
                        ? T.ZP.to(p, { visibility: "visible", opacity: 1 })
                        : T.ZP.to(p, { visibility: "hidden", opacity: 0 }),
                      t >= 0.95
                        ? (T.ZP.to(c, { opacity: 0 }),
                          T.ZP.to(".hero-text-bg", {
                            background: "#0E0E0E",
                            delay: 0,
                            ease: "power2.out",
                          }),
                          T.ZP.to(m, { opacity: 1 }),
                          T.ZP.to("#fl-header", {
                            background: "#0E0E0E",
                            delay: 0,
                            ease: "power2.out",
                          }))
                        : (T.ZP.to(c, { opacity: 1 }),
                          T.ZP.to(".hero-text-bg", {
                            background: "rgba(0, 0, 0, 0)",
                            delay: 0,
                            ease: "power2.out",
                          }),
                          T.ZP.to(m, { opacity: 0 }),
                          T.ZP.to("#fl-header", {
                            background: "rgba(0, 0, 0, 0)",
                          })),
                      t >= 0.7
                        ? T.ZP.to(u, { opacity: 1 })
                        : T.ZP.to(u, { opacity: 0 });
                  },
                }),
                () => {
                  E.i.getAll().forEach((e) => e.kill());
                }
              );
            }),
            (0, g.useEffect)(() => {
              let e,
                t = !1,
                a = !1,
                r = function (e) {
                  let a =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 5e3,
                    r = window.scrollY,
                    i = e - r,
                    s = performance.now(),
                    n = (e) => {
                      if (!t) return;
                      let l = Math.min((e - s) / a, 1);
                      "/" === window.location.pathname
                        ? window.scrollTo(0, r + i * l)
                        : (t = !1),
                        l < 1 && requestAnimationFrame(n);
                    };
                  requestAnimationFrame(n);
                },
                i = () => {
                  0 !== window.scrollY ||
                    a ||
                    ((a = !0),
                    (e = setTimeout(() => {
                      (t = !0), r(6600);
                    }, 0)));
                },
                s = () => {
                  t &&
                    ((t = !1),
                    window.scrollTo(0, window.scrollY),
                    clearTimeout(e));
                };
              return (
                window.innerWidth <= 768
                  ? i()
                  : setTimeout(() => {
                      0 === window.scrollY && i();
                    }, 3e3),
                (() => {
                  let e = new MutationObserver(() => {
                    let e = document.querySelector(".stop-scroll-class");
                    e &&
                      1 === parseFloat(getComputedStyle(e).opacity) &&
                      t &&
                      ((t = !1), window.scrollTo(0, window.scrollY));
                  });
                  return (
                    e.observe(document.body, {
                      childList: !0,
                      subtree: !0,
                      attributes: !0,
                      attributeFilter: ["style"],
                    }),
                    () => e.disconnect()
                  );
                })(),
                () => {
                  clearTimeout(e), window.removeEventListener("scroll", s);
                }
              );
            }, []),
            (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)("div", {
                ref: s,
                children: (0, r.jsxs)("div", {
                  className: "w-full px-4 md:px-0 mx-auto relative",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "absolute top-0 left-0 right-0 bottom-0 w-full z-10 h-[100vh]",
                      children: (0, r.jsx)("video", {
                        ref: a,
                        className: "h-full w-full object-cover",
                        muted: !0,
                        playsInline: !0,
                        autoPlay: !0,
                        controls: !1,
                        disablePictureInPicture: !0,
                        children: (0, r.jsx)("source", {
                          src: e || _,
                          type: "video/mp4",
                        }),
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "md:container mx-auto md:px-4 gap-4 flex flex-col relative overflow-hidden z-20 h-[100vh] pt-[72px]",
                      children: [
                        (0, r.jsx)("div", {
                          ref: i,
                          className:
                            "stop-scroll-class flex flex-col z-10 absolute inset-0 pt-4 gap-2 overflow-hidden opacity-0 mb-16 md:mb-20",
                          children: Array.from({ length: 20 }, (e, t) =>
                            (0, r.jsx)(
                              "div",
                              {
                                className: "flex",
                                children: Array.from({ length: 29 }, (e, t) =>
                                  (0, r.jsx)(
                                    "div",
                                    {
                                      className:
                                        "w-[63px] h-[63px] flex-[0_0_63px] flex items-center justify-center transition-transform duration-300 hover:transform hover:rotate-90",
                                      children: (0, r.jsx)(Z, {}),
                                    },
                                    t
                                  )
                                ),
                              },
                              t
                            )
                          ),
                        }),
                        (0, r.jsxs)("div", {
                          ref: n,
                          className:
                            "flex flex-col absolute z-20 left-0 w-full max-w-[580px] pt-10 md:pt-[160px] opacity-0",
                          children: [
                            (0, r.jsxs)("h1", {
                              className: h()({
                                "text-brand-white-v2 text-[46px] leading-[49px] font-bold flex flex-col":
                                  !0,
                                "md:leading-[75px] md:text-[72px]": !0,
                                "lg:leading-[101px] lg:text-[100px]": !0,
                              }),
                              children: [
                                (0, r.jsx)("span", {
                                  children: (0, r.jsx)("span", {
                                    className:
                                      "hero-text-bg md:px-4 inline-block",
                                    children: "Not your",
                                  }),
                                }),
                                (0, r.jsx)("span", {
                                  children: (0, r.jsx)("span", {
                                    className:
                                      "hero-text-bg md:px-4 inline-block",
                                    children: "models,",
                                  }),
                                }),
                                (0, r.jsx)("span", {
                                  children: (0, r.jsx)("span", {
                                    className:
                                      "hero-text-bg md:px-4 inline-block",
                                    children: "Not your AI.",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "flex flex-col",
                              children: [
                                (0, r.jsx)("h3", {
                                  className:
                                    "text-brand-white-v2 text-sm md:text-base w-fit md:px-4 m-0 py-3 hero-text-bg",
                                  children: "The private AI training platform.",
                                }),
                                (0, r.jsx)("div", {
                                  className: "w-full",
                                  children: (0, r.jsxs)("div", {
                                    className:
                                      "flex items-center justify-center md:justify-start gap-4 px-0 md:px-4 pb-2 hero-text-bg w-full md:w-fit",
                                    children: [
                                      (0, r.jsx)(l.default, {
                                        target: "_blank",
                                        className: "w-full md:w-fit",
                                        href: "https://apps-flock.vercel.app",
                                        passHref: !0,
                                        children: (0, r.jsx)(I.Z, {
                                          fullWidth: !0,
                                          variant: "primary",
                                          children: "Launch Dapps",
                                        }),
                                      }),
                                      (0, r.jsx)(l.default, {
                                        target: "_blank",
                                        className: "w-full md:w-fit",
                                        href: "https://app.uniswap.org",
                                        passHref: !0,
                                        children: (0, r.jsx)(I.Z, {
                                          fullWidth: !0,
                                          variant: "primary",
                                          children: "$BUY on Flock",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          ref: o,
                          className: "opacity-0",
                          children: [
                            (0, r.jsx)(S, {
                              className: h()("absolute", {
                                "left-[43.5%] bottom-[35%] py-2.5 px-4": !0,
                                "md:left-[59.5%] md:top-[300px] md:px-3": !0,
                                "lg:bottom-[unset]": !0,
                                "xl:left-[54.5%]": !0,
                              }),
                              children: "Local Data",
                            }),
                            (0, r.jsx)(S, {
                              className: h()("absolute", {
                                "left-0 bottom-[23.5%] py-2.5 px-2": !0,
                                "md:left-[64.5%] md:top-[440px]": !0,
                                "lg:bottom-[unset] lg:px-5": !0,
                              }),
                              children: "Collaborative",
                            }),
                            (0, r.jsx)(S, {
                              className: h()("absolute", {
                                "right-0 bottom-[17.5%] py-2.5 px-3": !0,
                                "md:right-[unset] md:left-[52%] md:px-5": !0,
                                "xl:bottom-[17%] xl:left-[49.6%] xl:px-5": !0,
                              }),
                              children: "Decentralized",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        O = a(88052),
        R = a(68457),
        H = a.n(R);
      let B = {
          "ai-arena": {
            title: "AI Arena",
            icon: "/images/ai-arena-icon.svg",
            video:
              "https://ucwlvzgpqvoxldczjggo.supabase.co/storage/v1/object/public/flock-blog/videos/ai-arena.mp4",
          },
          "fl-alliance": {
            title: "FL Alliance",
            icon: "/images/fl-alliance-icon.svg",
            video:
              "https://ucwlvzgpqvoxldczjggo.supabase.co/storage/v1/object/public/flock-blog/videos/fl-alliance.mp4",
          },
          "ai-marketplace": {
            title: "AI Marketplace",
            icon: "/images/ai-marketplace-icon.svg",
            video:
              "https://ucwlvzgpqvoxldczjggo.supabase.co/storage/v1/object/public/flock-blog/videos/ai-marketplace.mp4",
          },
        },
        V = H()(() => a.e(7930).then(a.bind(a, 37930)), { ssr: !1 });
      var U = () => {
          let [e, t] = (0, g.useState)(null),
            [a, i] = (0, g.useState)(null);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("div", {
                className:
                  "w-full mx-auto bg-[url('/images/testimonial.png')] bg-cover bg-top pt-[128px]",
                children: (0, r.jsx)("div", {
                  className: "container mx-auto px-4 gap-4 flex flex-col",
                  children: (0, r.jsxs)("div", {
                    className: "mb-12",
                    children: [
                      (0, r.jsxs)("h2", {
                        className:
                          "text-center text-2xl md:text-4xl font-medium mb-3 text-brand-white-v2",
                        children: [
                          (0, r.jsx)("span", {
                            className:
                              "bg-brand-blue-v2 text-brand-white-v2 px-2 py-1",
                            children: "Award Winning",
                          }),
                          " ",
                          "AI Technology",
                        ],
                      }),
                      (0, r.jsx)("p", {
                        className:
                          "text-center mx-auto text-brand-grey-v2-400 text-sm md:text-base max-w-[500px]",
                        children:
                          "AI Technology at FLock powers smarter collaboration with streamline communication, automate tasks, and enhance productivity.",
                      }),
                    ],
                  }),
                }),
              }),
              (0, r.jsxs)("div", {
                className: "w-full relative",
                children: [
                  (0, r.jsx)("img", {
                    className: "w-full z-0",
                    src: "/images/tech-diagram.png",
                    alt: "tech-diagram",
                  }),
                  (0, r.jsx)("div", {
                    id: "ai-arena",
                    className:
                      "w-[23vw] h-[20vw] absolute top-[55%] left-[35%] z-20 group/ai-arena cursor-pointer",
                    onMouseOver: () => t("ai-arena"),
                    onMouseLeave: () => t(null),
                    children: (0, r.jsx)(V, {
                      type: "ai-arena",
                      title: "Trained and Validated",
                      description:
                        "Upon a task creation, the model is first trained and validated in AI Arena, a blockchain-based decentralised training platform.",
                      onClick: () => i("ai-arena"),
                      isOpen: "ai-arena" === e,
                      onClose: () => t(null),
                    }),
                  }),
                  (0, r.jsx)("div", {
                    id: "fl-alliance",
                    className:
                      "w-[23vw] h-[20vw] absolute top-[55%] left-[71%] z-20 group/fl-alliance cursor-pointer",
                    onMouseOver: () => t("fl-alliance"),
                    onMouseLeave: () => t(null),
                    children: (0, r.jsx)(V, {
                      type: "fl-alliance",
                      title: "Further Finetuning",
                      description:
                        "Upon a task creation, the model is optionally further fine-tuned in FL Alliance using participants' local data.  ",
                      onClick: () => i("fl-alliance"),
                      isOpen: "fl-alliance" === e,
                      onClose: () => t(null),
                    }),
                  }),
                  (0, r.jsx)("div", {
                    id: "ai-marketplace",
                    className:
                      "w-[19vw] h-[15vw] absolute top-[15%] left-[55%] z-20 group/ai-marketplace cursor-pointer",
                    onMouseOver: () => t("ai-marketplace"),
                    onMouseLeave: () => t(null),
                    children: (0, r.jsx)(V, {
                      type: "ai-marketplace",
                      title: "Use and Feedback",
                      description:
                        "Finally, the model is deployed by applications in the AI Marketplace, where feedback will be used to further improve the model.",
                      onClick: () => i("ai-marketplace"),
                      isOpen: "ai-marketplace" === e,
                      onClose: () => t(null),
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: h()(
                      "fixed top-0 left-0 w-full h-full bg-brand-black-v2/5 backdrop-blur-md z-[9999] items-center justify-center",
                      a ? "flex" : "hidden"
                    ),
                    onClick: () => i(null),
                    children: (0, r.jsxs)("div", {
                      className:
                        "w-full max-w-[90vw] md:max-w-[75vw] mx-auto p-4 md:p-10 bg-[#000000] relative",
                      children: [
                        a
                          ? (0, r.jsxs)("h3", {
                              className:
                                "text-brand-white-v2 text-base md:text-2xl font-medium mb-4 flex items-center gap-4",
                              children: [
                                (0, r.jsx)("img", {
                                  src: B[a].icon,
                                  alt: B[a].title,
                                  className: "w-6 h-6 md:w-10 md:h-10",
                                }),
                                B[a].title,
                              ],
                            })
                          : null,
                        (0, r.jsx)("button", {
                          onClick: () => i(null),
                          className:
                            "absolute top-4 right-4 md:top-10 md:right-10",
                          children: (0, r.jsx)(O.Tw, {
                            className: "w-6 h-6 md:w-8 md:h-8",
                          }),
                        }),
                        a
                          ? (0, r.jsx)("div", {
                              className: "w-full aspect-video",
                              children: (0, r.jsx)("video", {
                                src: B[a].video,
                                autoPlay: !0,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                                controls: !1,
                              }),
                            })
                          : null,
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        D = (e) => {
          let {
              direction: t = "right",
              speed: a = 50,
              pauseOnHover: i = !0,
              className: s = "",
            } = e,
            l = [
              { type: "text", content: "Open" },
              { type: "separator" },
              { type: "text", content: "Collaboration" },
              { type: "separator" },
              { type: "text", content: "Governance" },
              { type: "separator" },
              { type: "text", content: "Community" },
              { type: "separator" },
              { type: "text", content: "Transparent" },
              { type: "separator" },
            ];
          return (0, r.jsx)("div", {
            className: "w-full border-t border-b border-brand-white-v2",
            children: (0, r.jsx)(j.Z, {
              direction: t,
              speed: a,
              pauseOnHover: i,
              children: (0, r.jsx)("div", {
                className: h()("flex items-center gap-3 py-4", s),
                children: [...l, ...l, ...l].map((e, t) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: "flex items-center",
                      children: [
                        "text" === e.type &&
                          (0, r.jsx)("span", {
                            className:
                              "text-brand-white-v2 text-sm md:text-[28px] uppercase",
                            children: e.content,
                          }),
                        "separator" === e.type &&
                          (0, r.jsx)(n.default, {
                            src: "/images/arrow-right-mq.svg",
                            alt: "separator",
                            width: 32,
                            height: 32,
                          }),
                      ],
                    },
                    t
                  )
                ),
              }),
            }),
          });
        },
        G = a(84901),
        W = () =>
          (0, r.jsxs)(G.ZP, {
            root: !0,
            children: [
              (0, r.jsx)(q, {}),
              (0, r.jsx)(D, {}),
              (0, r.jsx)(L, {}),
              (0, r.jsx)(P, {}),
              (0, r.jsx)(U, {}),
              (0, r.jsx)(k, {}),
              (0, r.jsx)(m, {}),
              (0, r.jsx)(p.Z, {}),
            ],
          });
    },
    25320: function (e, t, a) {
      "use strict";
      var r = a(47477),
        i = a(62866),
        s = a.n(i);
      t.Z = (e) => {
        let { className: t, onClick: a, children: i } = e;
        return (0, r.jsx)("div", {
          className: s()(
            "w-6 md:w-[40px] h-6 md:h-[40px] flex items-center justify-center border border-brand-blue-v2 hover:bg-brand-blue-v2 hover:fill-brand-white-v2 transition-all cursor-pointer group",
            t
          ),
          onClick: a,
          children: i,
        });
      };
    },
    28589: function (e, t) {
      "use strict";
      t.Z = [
        {
          id: "chainbase",
          category: "decentralized_ml",
          className: "z-30 top-[30%] left-[5%] md:top-[50%] md:left-0",
          image: "/images/ecosystem/chainbase.png",
          description:
            "Training a model that lets people query onchain data using natural language commands",
        },
        {
          id: "ritual",
          category: "decentralized_ml",
          className: "z-10 top-[7%] left-[22%] md:top-[10%] md:left-[10%]",
          image: "/images/ecosystem/ritual.png",
          description: "Training transaction agents to be hosted on Ritual",
        },
        {
          id: "akash",
          category: "decentralized_ml",
          className: "z-20 top-[18%] left-[40%] md:top-[28%] md:left-[20%]",
          image: "/images/ecosystem/akash.png",
          description:
            "Provided one-click deployment template to train and validate models on Akash. Akash community members mining FLock using Akash compute, also contributing to the FLock templates",
        },
        {
          id: "animoca",
          category: "decentralized_ml",
          className: "top-[85%] left-[25%] md:top-[60%] md:left-[18%]",
          image: "/images/ecosystem/animoca.png",
          description:
            "FLock.io and its innovative federated learning platform stand out in the AI market by advancing blockchain technologies while prioritizing user privacy and data sovereignty in AI model training. We’re excited to be one of their task creators, training our company’s AI models to enhance inter-company efficiency and ultimately benefit the entire GameFi ecosystem.",
        },
        {
          id: "morpheus",
          category: "decentralized_ml",
          className: "top-[75%] left-[5%] md:top-[55%] md:left-[70%]",
          image: "/images/ecosystem/morpheus.png",
          description:
            "Trained a local transaction agent, so that users don’t have to share transaction requests with OpenAI\xa0 Receiving monthly weights from Morpheus, equivalent to staking effect of $700k stETH",
        },
        {
          id: "aptos",
          category: "decentralized_ml",
          className: "top-[65%] left-[56%] md:top-[30%] md:left-[80%]",
          image: "/images/ecosystem/aptos.png",
          description: "Trained a coding copilot for Aptos Move",
        },
        {
          id: "berachain",
          category: "decentralized_ml",
          className: "top-0 right-[15%] md:top-0 md:left-[75%]",
          image: "/images/ecosystem/berachain.png",
          description:
            "Training a a chatbot to drive education and knowledge dissemination within the Berachain ecosystem",
        },
        {
          id: "ionet",
          category: "decentralized_ml",
          className:
            "top-[37%] left-[52%] md:top-[33%] md:left-[20%] md:left-[50%]",
          image: "/images/ecosystem/ionet.png",
          description:
            "Provided decentralised consensus on nodes integrity using PoAl, a POW that is effective for AI training Trained a specialised anime image generation model, hosted on BC8 using lO compute",
        },
        {
          id: "scroll",
          category: "decentralized_ml",
          className: "top-[44%] left-[32%] md:top-[55%] md:left-[45%]",
          image: "/images/ecosystem/scroll.png",
          description:
            "Scroll is a security-focused scaling solution for Ethereum, using innovations in scaling design and zero knowledge proofs to build a new layer on Ethereum. The Scroll GPT built on FLock is a community owned and managed co-creation, providing community members with knowledge and insight into the Scroll ecosystem.",
        },
        {
          id: "ethereum",
          category: "research",
          className: "left-[25%] md:top-[40%] md:left-[45%]",
          image: "/images/ecosystem/ethereum.png",
          description:
            "FLock is the only AI infrastructure project, awarded 2024 Ethereum Foundation Academic Grants Round grant Ethereum research on incentive mechanisms for dAI training",
        },
        {
          id: "nhs",
          category: "decentralized_fl",
          className: "top-[12%] left-[29%] md:top-[10%] md:left-[30%]",
          image: "/images/ecosystem/nhs.png",
          description:
            "Used FL to train a glucose prediction algorithms while patient data stay local",
        },
        {
          id: "request",
          category: "decentralized_fl",
          className: "top-[25%] left-[42%] md:top-[18%] md:left-[55%]",
          image: "/images/ecosystem/request.png",
          description: "Using FL to train an onchain credit score",
        },
        {
          id: "mpeh",
          category: "decentralized_fl",
          className: "top-[38%] left-[32%] md:top-[40%] md:left-[45%]",
          image: "/images/ecosystem/mpeh.png",
          description:
            "Used FL to train a detection algorithm while patient data stay local",
        },
      ];
    },
    8166: function (e, t, a) {
      "use strict";
      var r = a(47477),
        i = a(50609),
        s = a(57215);
      t.Z = () =>
        (0, r.jsx)("div", {
          className:
            "w-full mx-auto bg-[url('/images/death-of-socrates-mobile.png')] md:bg-[url('/images/death-of-socrates.png')] bg-cover bg-center",
          children: (0, r.jsxs)("div", {
            className: "container mx-auto py-[128px] px-4 gap-4 flex flex-col",
            children: [
              (0, r.jsx)("h3", {
                className:
                  "text-[28px] md:text-[36px] leading-[42px] md:leading-[54px] text-brand-white-v2 text-center font-semibold",
                children: "Ready to join the FLock?",
              }),
              (0, r.jsxs)("div", {
                className: "flex items-center gap-4 justify-center",
                children: [
                  (0, r.jsx)(i.default, {
                    href: "https://apps-flock.vercel.app",
                    target: "_blank",
                    passHref: !0,
                    children: (0, r.jsx)(s.Z, {
                      variant: "ghost",
                      children: "Launch Dapps",
                    }),
                  }),
                  (0, r.jsx)(i.default, {
                    href: "https://app.uniswap.org",
                    target: "_blank",
                    passHref: !0,
                    children: (0, r.jsx)(s.Z, {
                      variant: "ghost",
                      children: "$BUY on Flock",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
    },
    6934: function (e, t, a) {
      "use strict";
      var r = a(47477);
      t.Z = (e) =>
        (0, r.jsx)("svg", {
          width: "21",
          height: "20",
          viewBox: "0 0 21 20",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, r.jsx)("path", {
            d: "M16.1253 5V13.125C16.1253 13.2908 16.0595 13.4497 15.9423 13.5669C15.8251 13.6842 15.6661 13.75 15.5003 13.75C15.3346 13.75 15.1756 13.6842 15.0584 13.5669C14.9412 13.4497 14.8753 13.2908 14.8753 13.125V6.50859L5.94254 15.4422C5.82526 15.5595 5.6662 15.6253 5.50035 15.6253C5.3345 15.6253 5.17544 15.5595 5.05816 15.4422C4.94088 15.3249 4.875 15.1659 4.875 15C4.875 14.8341 4.94088 14.6751 5.05816 14.5578L13.9918 5.625H7.37535C7.20959 5.625 7.05062 5.55915 6.93341 5.44194C6.8162 5.32473 6.75035 5.16576 6.75035 5C6.75035 4.83424 6.8162 4.67527 6.93341 4.55806C7.05062 4.44085 7.20959 4.375 7.37535 4.375H15.5003C15.6661 4.375 15.8251 4.44085 15.9423 4.55806C16.0595 4.67527 16.1253 4.83424 16.1253 5Z",
          }),
        });
    },
    57176: function (e, t, a) {
      "use strict";
      var r = a(47477);
      t.Z = (e) =>
        (0, r.jsx)("svg", {
          width: "25",
          height: "25",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, r.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.0303 5.93744C16.3232 6.23034 16.3232 6.70521 16.0303 6.9981L10.5607 12.4678L16.0303 17.9374C16.3232 18.2303 16.3232 18.7052 16.0303 18.9981C15.7374 19.291 15.2626 19.291 14.9697 18.9981L8.96967 12.9981C8.67678 12.7052 8.67678 12.2303 8.96967 11.9374L14.9697 5.93744C15.2626 5.64455 15.7374 5.64455 16.0303 5.93744Z",
          }),
        });
    },
    65594: function (e, t, a) {
      "use strict";
      var r = a(47477);
      t.Z = (e) =>
        (0, r.jsx)("svg", {
          width: "25",
          height: "25",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, r.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.96967 5.93744C8.67678 6.23034 8.67678 6.70521 8.96967 6.9981L14.4393 12.4678L8.96967 17.9374C8.67678 18.2303 8.67678 18.7052 8.96967 18.9981C9.26256 19.291 9.73744 19.291 10.0303 18.9981L16.0303 12.9981C16.3232 12.7052 16.3232 12.2303 16.0303 11.9374L10.0303 5.93744C9.73744 5.64455 9.26256 5.64455 8.96967 5.93744Z",
          }),
        });
    },
    71287: function (e, t, a) {
      "use strict";
      a.d(t, {
        Bd: function () {
          return c;
        },
        CP: function () {
          return p;
        },
        EE: function () {
          return o;
        },
        Jq: function () {
          return n;
        },
        NJ: function () {
          return l;
        },
        fR: function () {
          return u;
        },
        qb: function () {
          return m;
        },
        si: function () {
          return d;
        },
        zQ: function () {
          return s;
        },
      });
      var r = a(71363),
        i = a(4651);
      let s = async (e) => {
          try {
            let t = await fetch("".concat(r.ho, "/api/posts/").concat(e));
            return (0, i._)(t);
          } catch (e) {
            return console.error("Error fetching post by slug:", e), null;
          }
        },
        n = async function () {
          let {
            tags: e,
            page: t,
            pageSize: a,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          try {
            let s = (0, i.B)({
                tags: null == e ? void 0 : e.join(","),
                page: t,
                pageSize: a,
              }),
              n = await fetch("".concat(r.ho, "/api/posts?").concat(s));
            return (0, i._)(n);
          } catch (e) {
            throw (console.error("Error fetching posts:", e), e);
          }
        },
        l = async () => {
          try {
            let e = await fetch("".concat(r.ho, "/api/tags"));
            return (0, i._)(e);
          } catch (e) {
            throw (console.error("Error fetching tags:", e), e);
          }
        },
        o = async (e) => {
          if (!e) return { data: [] };
          let t = new URLSearchParams();
          t.set("pageSize", "6"), t && t.append("slug", e);
          let a = await fetch(
            "".concat(r.ho, "/api/posts/related?").concat(t.toString())
          );
          return await a.json();
        },
        c = async function () {
          let {
            keyword: e,
            page: t,
            pageSize: a,
            sortOrder: s,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          try {
            let n = (0, i.B)({
                keyword: e,
                page: t,
                pageSize: a,
                sortOrder: s,
              }),
              l = await fetch("".concat(r.ho, "/api/admin/posts?").concat(n));
            return (0, i._)(l);
          } catch (e) {
            throw (console.error("Error fetching all posts:", e), e);
          }
        },
        d = async (e) => {
          try {
            let t = await fetch("".concat(r.ho, "/api/admin/posts/").concat(e));
            return (0, i._)(t);
          } catch (e) {
            throw (console.error("Error fetching post detail:", e), e);
          }
        },
        m = async (e) => {
          try {
            let t = await fetch("".concat(r.ho, "/api/admin/posts/create"), {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(e),
            });
            return (0, i._)(t);
          } catch (e) {
            throw (console.error("Error creating post:", e), e);
          }
        },
        p = async (e, t) => {
          try {
            let a = await fetch(
              "".concat(r.ho, "/api/admin/posts/").concat(e, "/update"),
              {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(t),
              }
            );
            return (0, i._)(a);
          } catch (e) {
            throw (console.error("Error updating post:", e), e);
          }
        },
        u = async (e) => {
          try {
            let t = await fetch(
              "".concat(r.ho, "/api/admin/posts/").concat(e, "/delete"),
              { method: "DELETE" }
            );
            await (0, i._)(t);
          } catch (e) {
            throw (console.error("Error deleting post:", e), e);
          }
        };
    },
    68860: function (e, t, a) {
      "use strict";
      a.d(t, {
        e0: function () {
          return o;
        },
        kx: function () {
          return l;
        },
        r2: function () {
          return c;
        },
        uV: function () {
          return n;
        },
      });
      var r = a(71287),
        i = a(78795),
        s = a(55484);
      let n = (e) =>
          (0, i.useQuery)({
            queryKey: ["post", e],
            queryFn: () => (0, r.zQ)(e),
          }),
        l = (e) => {
          let { tags: t, page: a, pageSize: i = "12" } = e;
          return (0, s.useInfiniteQuery)({
            queryKey: ["posts", t.filter(Boolean).join(","), a, i],
            queryFn: (e) =>
              (0, r.Jq)({
                tags: e.pageParam.tags || [],
                page: e.pageParam.page || "1",
                pageSize: e.pageParam.pageSize || "12",
              }),
            initialPageParam: { tags: t, page: a, pageSize: i },
            getNextPageParam: (e, a) => {
              if (e.meta.currentPage < e.meta.totalPages)
                return {
                  tags: t,
                  page: "".concat(e.meta.currentPage + 1),
                  pageSize: i,
                };
            },
          });
        },
        o = () =>
          (0, i.useQuery)({ queryKey: ["tags"], queryFn: () => (0, r.NJ)() }),
        c = (e) =>
          (0, i.useQuery)({
            queryKey: ["related", e],
            queryFn: () => (0, r.EE)(e),
          });
    },
    5039: function (e, t, a) {
      "use strict";
      a.d(t, {
        V: function () {
          return l;
        },
      });
      var r = a(71363);
      let i = async (e) => {
          if (!e.ok) throw Error("HTTP error! status: ".concat(e.status));
          return e.json();
        },
        s = async () => {
          try {
            let e = await fetch("".concat(r.ho, "/api/stats"));
            return i(e);
          } catch (e) {
            throw (console.error("Error fetching stats:", e), e);
          }
        };
      var n = a(78795);
      let l = () =>
        (0, n.useQuery)({ queryKey: ["stats"], queryFn: () => s() });
    },
    4651: function (e, t, a) {
      "use strict";
      a.d(t, {
        B: function () {
          return i;
        },
        _: function () {
          return r;
        },
      });
      let r = async (e) => {
          if (!e.ok) throw Error("HTTP error! status: ".concat(e.status));
          return e.json();
        },
        i = (e) => {
          let t = new URLSearchParams();
          return (
            Object.entries(e).forEach((e) => {
              let [a, r] = e;
              r && t.append(a, r);
            }),
            t.toString()
          );
        };
    },
    71363: function (e, t, a) {
      "use strict";
      a.d(t, {
        ho: function () {
          return s;
        },
        p6: function () {
          return i;
        },
      });
      var r = a(4735);
      function i(e, t) {
        let a = (null == t ? void 0 : t.withTime)
          ? "MMM dd, yyyy HH:mm"
          : "MMM dd, yyyy";
        return (0, r.WU)(e, a);
      }
      let s = "https://".concat("www.flock.io");
    },
  },
]);
