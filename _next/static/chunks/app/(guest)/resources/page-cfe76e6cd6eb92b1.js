(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7357],
  {
    98423: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 2245));
    },
    2245: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return S;
        },
      });
      var i = a(47477),
        r = a(8166),
        n = a(35089),
        l = a(99651),
        o = a(57176),
        s = a(65594),
        d = a(50609),
        c = a(57215),
        h = a(25320);
      let p = [
        {
          id: 1,
          title: "Whitepaper",
          description:
            "Democratising AI through Decentralisation of Data, Computation and Models",
          link: "https://www.flock.io/whitepaper",
          image: "/images/whitepaper-cover.png",
        },
        {
          id: 2,
          title: "Litepaper",
          description:
            "Facilitating an open and collaborative environment where participants can contribute models, data, and computing resources, in exchange for on-chain rewards based on their traceable contributions.",
          link: "https://ucwlvzgpqvoxldczjggo.supabase.co/storage/v1/object/public/flock-blog/FLock_Litepaper_09122024.pdf",
          image: "/images/whitepaper-cover.png",
        },
      ];
      var u = () => {
          let e = (0, n.useRef)(null),
            [t, a] = (0, n.useState)(0);
          return (0, i.jsxs)("div", {
            id: "learnmore",
            className:
              "w-full mx-auto pb-[128px] pt-[177px] md:pt-[229px] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[200px] after:bg-gradient-to-t after:from-brand-black-v2 after:to-[#00000000]",
            children: [
              (0, i.jsx)("video", {
                src: "https://ucwlvzgpqvoxldczjggo.supabase.co/storage/v1/object/public/flock-blog/videos/learnmore-bg.mp4",
                className: "absolute top-0 left-0 w-full h-full object-cover",
                controls: !1,
                autoPlay: !0,
                muted: !0,
                loop: !0,
              }),
              (0, i.jsxs)("div", {
                className: "container mx-auto gap-4 px-4 flex relative",
                children: [
                  (0, i.jsx)("div", {
                    className: "mb-12",
                    children: (0, i.jsxs)("h2", {
                      className:
                        "text-2xl md:text-4xl font-bold mb-3 text-brand-white-v2 flex gap-1.5",
                      children: [

                        (0, i.jsx)("span", { children: "About FLock" }),
                      ],
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "absolute top-0 right-0 gap-2 hidden md:flex",
                    children: [
                      (0, i.jsx)(h.Z, {
                        onClick: () => {
                          var t;
                          return null === (t = e.current) || void 0 === t
                            ? void 0
                            : t.slickPrev();
                        },
                        children: (0, i.jsx)(o.Z, {
                          className:
                            "fill-brand-blue-v2 group-hover:fill-brand-white-v2",
                        }),
                      }),
                      (0, i.jsx)(h.Z, {
                        onClick: () => {
                          var t;
                          return null === (t = e.current) || void 0 === t
                            ? void 0
                            : t.slickNext();
                        },
                        children: (0, i.jsx)(s.Z, {
                          className:
                            "fill-brand-blue-v2 group-hover:fill-brand-white-v2",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "px-4 flex flex-col relative z-10",
                children: [
                  (0, i.jsx)(l.Z, {
                    ref: e,
                    className: "",
                    slidesToShow: 1.25,
                    slideToScroll: 1,
                    infinite: !1,
                    dots: !1,
                    arrows: !1,
                    responsive: [
                      { breakpoint: 1024, settings: { slidesToShow: 1 } },
                    ],
                    beforeChange: (e, t) => {
                      a(t);
                    },
                    children:
                      null == p
                        ? void 0
                        : p.map((e) =>
                            (0, i.jsx)(
                              "div",
                              {
                                children: (0, i.jsxs)("div", {
                                  className:
                                    "flex flex-col md:flex-row md:gap-4 mr-4 md:mr-[60px] group border border-brand-blue-v2",
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className:
                                        "flex flex-col w-full md:w-1/3 gap-2 justify-center p-4 md:p-10 bg-brand-black-v2 min-h-[237px] md:min-h-auto",
                                      children: [
                                        (0, i.jsx)("h3", {
                                          className:
                                            "text-lg md:text-[28px] font-medium mb-0 text-brand-white-v2",
                                          children: e.title,
                                        }),
                                        (0, i.jsx)("p", {
                                          className:
                                            "text-sm md:text-base text-brand-grey-v2-400 mb-10 md:mb-0",
                                          children: e.description,
                                        }),
                                        (0, i.jsx)("div", {
                                          className: "mt-auto",
                                          children: (0, i.jsx)(d.default, {
                                            href: e.link,
                                            target: "_blank",
                                            passHref: !0,
                                            children: (0, i.jsx)(c.Z, {
                                              variant: "primary",
                                              children: "Read Now",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)("div", {
                                      className: "w-full md:w-2/3 aspect-video",
                                      children: (0, i.jsx)("img", {
                                        src: e.image,
                                        alt: e.title,
                                      }),
                                    }),
                                  ],
                                }),
                              },
                              e.id
                            )
                          ),
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex md:hidden justify-center mt-10 gap-2 z-20",
                    children: [
                      (0, i.jsx)(h.Z, {
                        className: "group",
                        onClick: () => {
                          var t;
                          return null === (t = e.current) || void 0 === t
                            ? void 0
                            : t.slickPrev();
                        },
                        children: (0, i.jsx)(o.Z, {
                          className:
                            "fill-brand-blue-v2 group-hover:fill-brand-white-v2",
                        }),
                      }),
                      (0, i.jsx)(h.Z, {
                        className: "group",
                        onClick: () => {
                          var t;
                          return null === (t = e.current) || void 0 === t
                            ? void 0
                            : t.slickNext();
                        },
                        children: (0, i.jsx)(s.Z, {
                          className:
                            "fill-brand-blue-v2 group-hover:fill-brand-white-v2",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        g = (e) => {
          let {
            title: t,
            author: a,
            description: r,
            paperLink: n,
            tags: l,
          } = e;
          return (0, i.jsxs)("div", {
            className:
              "flex flex-col gap-4 md:gap-6 p-4 md:p-6 border border-brand-blue-v2/20 bg-[#44444420] backdrop-blur-md",
            children: [
              (0, i.jsx)("div", {
                className: "flex gap-2",
                children: l.map((e) =>
                  (0, i.jsx)(
                    "span",
                    {
                      className:
                        "bg-[#2F2F2F] uppercase text-brand-white-v2 px-2 py-1 text-xs",
                      children: e,
                    },
                    e
                  )
                ),
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col gap-2 md:gap-4",
                children: [
                  (0, i.jsx)("h3", {
                    className:
                      "md:text-2xl text-base font-medium mb-0 text-brand-white-v2",
                    children: t,
                  }),
                  (0, i.jsx)("p", {
                    className:
                      "text-brand-grey-v2-400 text-sm md:text-base m-0",
                    children: r,
                  }),
                  (0, i.jsx)("p", {
                    className: "text-brand-blue-v2 text-xs md:text-sm m-0",
                    children: a,
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "mt-auto",
                children: (0, i.jsx)("a", {
                  href: n,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, i.jsx)(c.Z, {
                    size: "sm",
                    variant: "tertiary",
                    children: "Read now",
                  }),
                }),
              }),
            ],
          });
        },
        m = () => {
          let e = [
              {
                title:
                  "FLock: Defending Malicious Behaviors in Federated Learning with Blockchain",
                author: "Author: N. Dong, J. Sun, Z. Wang, S. Zhang, S. Zheng",
                description:
                  "Federated learning (FL) is a promising way to allow multiple data owners (clients) to collaboratively train machine learning models without compromising data privacy.",
                paperLink: "https://arxiv.org/pdf/2211.04344",
                ordinal: 1,
                tags: ["Developers"],
              },
              {
                title:
                  "Defending Against Poisoning Attacks in Federated Learning with Blockchain",
                author:
                  "Author:N. Dong, Z. Wang, J. Sun, M. Kampffmeyer, W. Knottenbelt and E. Xing",
                description:
                  "In the era of deep learning, federated learning (FL) presents a promising approach that allows multi-institutional data owners, or clients, to collaboratively train machine learning models without compromising data privacy.",
                paperLink:
                  "https://ieeexplore.ieee.org/iel7/9078688/9184921/10471193.pdf",
                ordinal: 2,
                tags: ["Developers", "Protocol"],
              },
              {
                title:
                  "zkFL: Zero-Knowledge Proof-based Gradient Aggregation for Federated Learning",
                author:
                  "Author: Z. Wang, N. Dong, J. Sun, W. Knottenbelt and Y. Guo",
                description:
                  "Federated learning (FL) is a machine learning paradigm, which enables multiple and decentralized clients to collaboratively train a model under the orchestration of a central aggregator.",
                paperLink:
                  "https://ieeexplore.ieee.org/iel7/6687317/7153538/10535217.pdf",
                ordinal: 3,
                tags: ["Developers", "Protocol"],
              },
              {
                title:
                  "From Sora What We Can See: A Survey of Text-to-Video Generation",
                author:
                  "R Sun, Y Zhang, T Shah, J Sun, S Zhang, W Li, H Duan, B Wei, R Ranjan",
                description:
                  "With impressive achievements made, artificial intelligence is on the path forward to artificial general intelligence.",
                paperLink: "https://arxiv.org/pdf/2405.10674",
                ordinal: 4,
                tags: ["Developers", "Protocol"],
              },
              {
                title:
                  "GARNN: An Interpretable Graph Attentive Recurrent Neural Network for Predicting Blood Glucose Levels via Multivariate Time Series",
                author:
                  "Chengzhe Piao, Taiyu Zhu, Stephanie E Baldeweg, Paul Taylor, Pantelis Georgiou, Jiahao Sun, Jun Wang, Kezhi Li",
                description:
                  "Accurate prediction of future blood glucose (BG) levels can effectively improve BG management for people living with diabetes, thereby reducing complications and improving quality of life.",
                paperLink: "https://arxiv.org/pdf/2402.16230",
                ordinal: 5,
                tags: ["Developers", "Protocol"],
              },
              {
                title:
                  "Visual Language Model for Preclinical Toxicologic Liver Histopathology Assessment",
                author: "Zehua Cheng, Wei Dai, Jiahao Sun",
                description:
                  "Preclinical drug safety assessment is a critical step in drug development that relies on time-consuming manual histopathological examination, which is prone to high inter-observer variability.",
                paperLink: "https://dl.acm.org/doi/pdf/10.1145/3689096.3689463",
                ordinal: 6,
                tags: ["Developers", "Protocol"],
              },
              {
                title:
                  "Multi-Continental Healthcare Modelling Using Blockchain-Enabled Federated Learning",
                author:
                  "Rui Sun, Zhipeng Wang, Hengrui Zhang, Ming Jiang, Yizhe Wen, Jiqun Zhang, Jiahao Sun, Shuoying Zhang, Erwu Liu, Kezhi Li",
                description:
                  "One of the biggest challenges of building artificial intelligence (AI) model in healthcare area is the data sharing.",
                paperLink: "https://arxiv.org/pdf/2410.17933?",
                ordinal: 7,
                tags: ["Developers", "Protocol"],
              },
              {
                title:
                  "Privacy Preserved Blood Glucose Level Cross-Prediction: An Asynchronous Decentralized Federated Learning Approach",
                author:
                  "Chengzhe Piao, Taiyu Zhu, Yu Wang, Stephanie E Baldeweg, Paul Taylor, Pantelis Georgiou, Jiahao Sun, Jun Wang, Kezhi Li",
                description:
                  'Newly diagnosed Type 1 Diabetes (T1D) patients often struggle to obtain effective Blood Glucose (BG) prediction models due to the lack of sufficient BG data from Continuous Glucose Monitoring (CGM), presenting a significant "cold start" problem in patient care.',
                paperLink: "https://arxiv.org/pdf/2406.15346",
                ordinal: 8,
                tags: ["Developers", "Protocol"],
              },
              {
                title: "Multi-modal Feature Fusion Networks for GeoLifeCLEF",
                author: "Zehua Cheng, Wei Dai, Jiahao Sun",
                description:
                  "The GeoLifeCLEF 2024 challenge focuses on accurately predicting plant species distributions and their changes over space and time, vital for biodiversity conservation and ecological research.",
                paperLink: "https://ceur-ws.org/Vol-3740/paper-190.pdf",
                ordinal: 9,
                tags: ["Developers", "Protocol"],
              },
            ],
            t = (0, n.useRef)(null);
          return (0, i.jsxs)("div", {
            id: "read-our-research",
            className:
              "w-full mx-auto bg-[url('/images/research-bg.png')] bg-cover bg-top pb-[128px] pt-[76px] md:pt-[101px] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[200px] after:bg-gradient-to-t after:from-brand-black-v2 after:to-[#00000000] after:z-0",
            children: [
              (0, i.jsx)("div", {
                className: "container mx-auto gap-4 px-4 flex flex-col",
                children: (0, i.jsx)("div", {
                  className: "mb-12",
                  children: (0, i.jsxs)("h2", {
                    className:
                      "text-2xl md:text-4xl font-bold mb-2.5 md:mb-3 text-brand-white-v2 flex gap-1.5",
                    children: [
                      (0, i.jsx)("span", { children: "Read Our" }),
                      (0, i.jsx)("span", {
                        children: (0, i.jsx)("span", {
                          className:
                            "bg-brand-blue-v2 text-brand-white-v2 px-2",
                          children: "Research",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, i.jsx)("div", {
                className: "block md:hidden overflow-hidden research-slider",
                children: (0, i.jsx)(l.Z, {
                  ref: t,
                  slidesToShow: 1.01,
                  slidesToScroll: 1,
                  centerMode: !0,
                  infinite: !0,
                  arrows: !0,
                  dots: !1,
                  responsive: [
                    { breakpoint: 768, settings: { slidesToShow: 1.1 } },
                  ],
                  children: e
                    .sort((e, t) => e.ordinal - t.ordinal)
                    .map((e) =>
                      (0, i.jsx)(
                        g,
                        {
                          title: e.title,
                          author: e.author,
                          description: e.description,
                          paperLink: e.paperLink,
                          tags: e.tags || [],
                        },
                        "resource-".concat(e.title)
                      )
                    ),
                }),
              }),
              (0, i.jsx)("div", {
                className:
                  "container mx-auto px-4 gap-4 hidden md:flex flex-col relative z-10",
                children: (0, i.jsx)("div", {
                  className:
                    "container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-4",
                  children: e
                    .sort((e, t) => e.ordinal - t.ordinal)
                    .map((e) =>
                      (0, i.jsx)(
                        g,
                        {
                          title: e.title,
                          author: e.author,
                          description: e.description,
                          paperLink: e.paperLink,
                          tags: e.tags || [],
                        },
                        e.title
                      )
                    ),
                }),
              }),
            ],
          });
        },
        x = a(50469),
        v = a(81114),
        b = a(87610),
        f = a(62866),
        w = a.n(f),
        k = (e) => {
          let { title: t, description: a, paperLink: r, tags: n, type: l } = e;
          return (0, i.jsxs)("div", {
            className: w()(
              "flex flex-col p-[14px] border border-brand-blue-v2/20 bg-[#44444420] backdrop-blur-md justify-start",
              "light" === l ? "bg-brand-white-v2" : "bg-brand-black-v2"
            ),
            children: [
              (0, i.jsx)("div", {
                className: "flex gap-2",
                children: n.map((e) =>
                  (0, i.jsx)(
                    "span",
                    {
                      className:
                        "bg-[#2F2F2F] uppercase text-brand-white-v2 px-2 py-1 text-[10px] font-medium",
                      children: e,
                    },
                    e
                  )
                ),
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col gap-4 mt-2.5",
                children: [
                  (0, i.jsx)("h3", {
                    className: w()(
                      "text-sm font-medium",
                      "light" === l
                        ? "text-brand-blue-v2"
                        : "text-brand-white-v2"
                    ),
                    children: t,
                  }),
                  (0, i.jsx)("p", {
                    className: "text-brand-grey-v2-400 text-xs m-0",
                    children: a,
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "mt-auto",
                children: (0, i.jsx)("a", {
                  href: r,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: w()(
                    "inline-block text-brand-blue-v2 pt-2.5 text-xs",
                    "light" === l
                      ? "hover:text-brand-blue-v2"
                      : "hover:text-brand-white-v2"
                  ),
                  children: "Read now",
                }),
              }),
            ],
          });
        },
        j = (e) => {
          let { title: t, paperLink: a, type: r } = e;
          return (0, i.jsxs)("div", {
            className: w()(
              "flex flex-col p-[14px] border backdrop-blur-md justify-start",
              "blue" === r
                ? "bg-brand-blue-v2 border-brand-white-v2/20"
                : "bg-brand-black-v2 border-brand-white-v2/20"
            ),
            children: [
              (0, i.jsx)("div", {
                className: "flex flex-col gap-4 mt-2.5",
                children: (0, i.jsx)("h3", {
                  className: "text-[21px] font-medium text-brand-white-v2",
                  children: t,
                }),
              }),
              (0, i.jsx)("div", {
                className: "mt-auto",
                children: (0, i.jsx)("a", {
                  href: a,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: w()(
                    "inline-block pt-2.5 text-xs",
                    "blue" === r
                      ? "text-brand-white-v2 hover:text-brand-white-v2"
                      : "text-brand-blue-v2 hover:text-brand-blue-v2"
                  ),
                  children: "Read now",
                }),
              }),
            ],
          });
        },
        N = [
          {
            type: "card-md",
            title:
              "Defending Against Poisoning Attacks in Federated Learning with Blockchain",
            content:
              "In NeurIPS 2022 Workshops on Decentralization and Trustworthy Machine Learning in Web3: Methodologies, Platforms, ",
            link: "https://ieeexplore.ieee.org/abstract/document/10471193",
            tags: [],
          },
          {
            type: "card-lg",
            title: "The concentration of power in centralised AI",
            content: null,
            link: "https://www.flock.io/blog/the-concentration-of-power-in-centralised-ai",
            tags: [],
          },
          {
            type: "card-lg",
            title: "Decentralized Minds: The AI + Blockchain Revolution",
            content: null,
            link: "https://www.flock.io/blog/decentralized-minds-the-ai-blockchain-revolution",
            tags: [],
          },
          {
            type: "card-lg",
            title: "How FLock.io is decentralising AI development",
            content: null,
            link: "https://www.flock.io/blog/how-flock-io-is-decentralising-ai-development",
            tags: [],
          },
          {
            type: "card-lg:dark",
            title: "2024 AI Trends to Watch Out for: The Rise of RAG and MoE",
            content: null,
            link: "https://www.flock.io/blog/2024-ai-trends-to-watch-out-for-the-rise-of-rag-and-moe-883cf1985fd1",
            tags: [],
          },
          {
            type: "card-lg",
            title: "Truth Without Trust in Federated Learning",
            content: null,
            link: "https://flock-io.medium.com/truth-without-trust-in-federated-learning-b218e7051f5e",
            tags: [],
          },
          {
            type: "card-lg:dark",
            title: "The vulnerabilities of centralised AI",
            content: null,
            link: "https://flock-io.medium.com/the-vulnerabilities-of-centralised-ai-015d666e88fe",
            tags: [],
          },
          {
            type: "card-lg",
            title:
              "zkFL: Zero-Knowledge Proof-based Gradient Aggregation for Federated Learning",
            content: null,
            link: "https://ieeexplore.ieee.org/abstract/document/10535217",
            tags: [],
          },
          {
            type: "card-md",
            title:
              "Federated Learning for Edge Devices Secured with Blockchain-Based Authentication",
            content:
              "In the Proceedings of the 2023 IEEE International Conference on Decentralized Machine Learning Systems. Honored with the Best Presentation Award.",
            link: "https://www.flock.io/resources?section=whitepaper",
            tags: ["Developers", "Protocol"],
          },
          {
            type: "card-md",
            title:
              "Mitigating Data Leakage in Federated Learning via Blockchain-Enforced Encryption",
            content:
              "In the Workshop on Privacy-Preserving Machine Learning at NeurIPS 2023. Awarded the Best Technical Demonstration.",
            link: "https://www.flock.io/resources?section=whitepaper",
            tags: [],
          },
          {
            type: "card-md:light",
            title:
              "Boosting Trust in Federated Learning Using Blockchain-Based Auditing Systems",
            content:
              "Presented at the Conference on Trustworthy and Reliable AI (TRA) 2023. Runner-up in Best Application Paper.",
            link: "https://www.flock.io/resources?section=whitepaper",
            tags: ["Developers", "Protocol"],
          },
          {
            type: "image",
            title: null,
            content: "/images/resources/move-tuned-llm.png",
            link: null,
            tags: [],
          },
          {
            type: "image",
            title: null,
            content: "/images/resources/meet.png",
            link: null,
            tags: [],
          },
          {
            type: "image",
            title: null,
            content: "/images/resources/litepaper.png",
            link: null,
            tags: [],
          },
          {
            type: "image",
            title: null,
            content: "/images/resources/jiahao-speaking.png",
            link: null,
            tags: [],
          },
          {
            type: "image",
            title: null,
            content: "/images/resources/flock-litepaper-explained.png",
            link: null,
            tags: [],
          },
          {
            type: "image",
            title: null,
            content: "/images/resources/the-creation-of-adam.png",
            link: null,
            tags: [],
          },
          {
            type: "video",
            title: null,
            content: "https://www.youtube.com/watch?v=6XjwRdxIJG4",
            link: null,
            tags: [],
          },
          {
            type: "video",
            title: null,
            content: "https://www.youtube.com/watch?v=KaBPq-E-tEQ",
            link: null,
            tags: [],
          },
          {
            type: "video",
            title: null,
            content: "https://www.youtube.com/watch?v=652TazPn9dc",
            link: null,
            tags: [],
          },
        ];
      let y = (e) => {
        let { type: t, title: a, content: r, link: n, tags: l } = e;
        switch (t) {
          case "card-md":
            return (0, i.jsx)("div", {
              className: "max-w-[320px]",
              children: (0, i.jsx)(k, {
                type: "dark",
                title: a || "",
                description: r || "",
                paperLink: n || "",
                tags: l,
              }),
            });
          case "card-lg":
            return (0, i.jsx)("div", {
              className: "max-w-[320px]",
              children: (0, i.jsx)(j, {
                type: "blue",
                title: a || "",
                paperLink: n || "",
              }),
            });
          case "card-lg:dark":
            return (0, i.jsx)("div", {
              className: "max-w-[320px]",
              children: (0, i.jsx)(j, {
                type: "dark",
                title: a || "",
                paperLink: n || "",
              }),
            });
          case "card-md:light":
            return (0, i.jsx)("div", {
              className: "max-w-[320px]",
              children: (0, i.jsx)(k, {
                type: "light",
                title: a || "",
                description: r || "",
                paperLink: n || "",
                tags: l,
              }),
            });
          case "image":
            return (0, i.jsxs)("div", {
              className:
                "max-w-[200px] overflow-hidden border-2 border-brand-white-v2/20 relative",
              children: [
                (0, i.jsx)("img", {
                  src: r || "",
                  alt: a || "",
                  className: "w-fit grayscale",
                }),
                (0, i.jsx)("div", {
                  className: "absolute inset-0 bg-brand-blue-v2/20",
                }),
              ],
            });
          case "video":
            let o = null == r ? void 0 : r.split("v=")[1];
            return (0, i.jsxs)("div", {
              className:
                "max-w-[200px] overflow-hidden border-2 border-brand-white-v2/20 relative",
              children: [
                (0, i.jsx)("div", {
                  id: o,
                  className: "absolute inset-0",
                  onClick: (e) => {
                    e.currentTarget.hasAttribute("data-dragging") ||
                      window.open(r || "", "_blank");
                  },
                  onMouseDown: () => {
                    let e = document.getElementById(o || "");
                    null == e || e.setAttribute("data-dragging", "true");
                  },
                  onMouseUp: () => {
                    let e = document.getElementById(o || "");
                    null == e || e.removeAttribute("data-dragging");
                  },
                }),
                (0, i.jsx)("iframe", {
                  width: "200",
                  height: "150",
                  src: "https://www.youtube.com/embed/".concat(
                    (null == r ? void 0 : r.split("v=")[1]) || ""
                  ),
                  title: a || "",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowFullScreen: !0,
                  className: "w-full",
                }),
              ],
            });
          default:
            return null;
        }
      };
      var L = () => {
        let e = (0, n.useRef)(null),
          t = (0, n.useRef)([]);
        return (
          (0, x.V)(() => {
            var a, i;
            v.ZP.registerPlugin(b.Z);
            let r =
                (null === (a = e.current) || void 0 === a
                  ? void 0
                  : a.clientWidth) || 0,
              n =
                (null === (i = e.current) || void 0 === i
                  ? void 0
                  : i.clientHeight) || 0;
            t.current.forEach((t, a) => {
              if (t) {
                let i, l;
                let o = Math.floor(r / 240);
                switch (Math.floor(4 * Math.random())) {
                  case 0:
                    (i = Math.random() * r), (l = -200);
                    break;
                  case 1:
                    (i = r + 320), (l = Math.random() * n);
                    break;
                  case 2:
                    (i = Math.random() * r), (l = n + 200);
                    break;
                  default:
                    (i = -320), (l = Math.random() * n);
                }
                v.ZP.set(t, {
                  x: i,
                  y: l,
                  opacity: 0,
                  scale: 0.8,
                  rotate: 12 * Math.random() - 6,
                }),
                  v.ZP.to(t, {
                    x: Math.min(
                      Math.max(0, (a % o) * 240 + 80 * Math.random()),
                      r - 320
                    ),
                    y: Math.min(
                      Math.max(0, 150 * Math.floor(a / o) + 50 * Math.random()),
                      n - 200
                    ),
                    opacity: 1,
                    scale: 1,
                    rotate: 4 * Math.random() - 2,
                    duration: 1.5,
                    delay: 0.1 * a,
                    ease: "power3.out",
                  }),
                  b.Z.create(t, {
                    type: "x,y",
                    bounds: e.current,
                    inertia: !0,
                    onDragStart: function () {
                      v.ZP.to(this.target, { scale: 1.05, zIndex: 1e3 });
                    },
                    onDragEnd: function () {
                      v.ZP.to(this.target, { scale: 1, zIndex: "auto" });
                    },
                  });
              }
            });
          }, []),
          (0, i.jsx)("div", {
            id: "research",
            className: "w-full pt-10 mt-[72px]",
            children: (0, i.jsxs)("div", {
              className: "container mx-auto px-4",
              children: [
                (0, i.jsx)("h2", {
                  className:
                    "text-brand-white-v2 text-[36px] md:text-[64px] font-medium mb-0",
                  children: "Research",
                }),
                (0, i.jsx)("div", {
                  ref: e,
                  className:
                    "relative h-[600px] w-full bg-[url('/images/resource-bg.png')] bg-cover bg-center",
                  children: [...N]
                    .sort(() => Math.random() - 0.5)
                    .map((e, a) =>
                      (0, i.jsx)(
                        "div",
                        {
                          ref: (e) => {
                            t.current[a] = e;
                          },
                          className: "absolute hover:!z-[999] cursor-move",
                          style: { zIndex: a },
                          children: (0, i.jsx)(y, { ...e }),
                        },
                        a
                      )
                    ),
                }),
              ],
            }),
          })
        );
      };
      let P = [
        {
          id: 1,
          title: "FLock.io Pitch @ SXSW 2023",
          videoLink: "https://www.youtube.com/watch?v=KaBPq-E-tEQ",
        },
        {
          id: 2,
          title: "What the FLock?",
          videoLink: "https://www.youtube.com/watch?v=6XjwRdxIJG4",
        },
        {
          id: 3,
          title: "FLock Co-Creation Walkthrough",
          videoLink: "https://www.youtube.com/watch?v=652TazPn9dc",
        },
      ];
      var Z = () => {
          let e = (0, n.useRef)(null),
            [t, a] = (0, n.useState)(0);
          return (0, i.jsxs)("div", {
            id: "publications",
            className:
              "w-full mx-auto pb-[76px] md:pb-[120px] pt-[76px] md:pt-[101px] relative z-30 after:absolute after:z-0 after:bottom-0 after:left-0 after:right-0 after:h-[100px] after:bg-gradient-to-t after:from-brand-black-v2 after:to-[#00000000]",
            children: [
              (0, i.jsx)("div", {
                className: "container mx-auto gap-4 px-4 flex flex-col",
                children: (0, i.jsx)("div", {
                  className: "mb-12",
                  children: (0, i.jsxs)("h2", {
                    className:
                      "text-2xl md:text-4xl font-bold mb-3 text-brand-white-v2 text-center",
                    children: [
                      (0, i.jsx)("span", {
                        className: "mr-1",
                        children: (0, i.jsx)("span", {
                          className:
                            "bg-brand-blue-v2 text-brand-white-v2 px-2",
                          children: "Unrivaled",
                        }),
                      }),
                      (0, i.jsx)("span", {
                        children: "Research and Groundwork",
                      }),
                    ],
                  }),
                }),
              }),
              (0, i.jsxs)("div", {
                className: "gap-4 px-4 flex flex-col relative",
                children: [
                  (0, i.jsx)(l.Z, {
                    ref: e,
                    className: "",
                    slidesToShow: 1,
                    slideToScroll: 1,
                    infinite: !0,
                    centerMode: !0,
                    centerPadding: "20%",
                    dots: !1,
                    arrows: !1,
                    responsive: [
                      {
                        breakpoint: 1024,
                        settings: { slidesToShow: 1, centerPadding: "11%" },
                      },
                    ],
                    beforeChange: (e, t) => {
                      a(t);
                    },
                    children:
                      null == P
                        ? void 0
                        : P.map((e, a) =>
                            (0, i.jsx)(
                              "div",
                              {
                                className: w()("transition-all duration-500", {
                                  "scale-100": a === t,
                                  "scale-75": a !== t,
                                }),
                                children: (0, i.jsxs)("div", {
                                  className:
                                    "video-slide flex flex-col gap-4 md:mx-[60px] group transition-all duration-300",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: "w-full aspect-video",
                                      children: e.videoLink.includes(
                                        "twitter.com"
                                      )
                                        ? (0, i.jsx)("blockquote", {
                                            className: "twitter-tweet",
                                            "data-media-max-width": "560",
                                            children: (0, i.jsx)("a", {
                                              href: e.videoLink,
                                            }),
                                          })
                                        : (0, i.jsx)("iframe", {
                                            className: "w-full h-full",
                                            src: "https://www.youtube.com/embed/".concat(
                                              e.videoLink.split("v=")[1]
                                            ),
                                            title: e.title,
                                            allow:
                                              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                            allowFullScreen: !0,
                                          }),
                                    }),
                                    (0, i.jsx)("div", {
                                      className:
                                        "flex flex-col gap-2 justify-center",
                                      children: (0, i.jsx)("h3", {
                                        className:
                                          "text-center text-base md:text-2xl font-medium mb-0 text-brand-white-v2",
                                        children: e.title,
                                      }),
                                    }),
                                  ],
                                }),
                              },
                              e.id
                            )
                          ),
                  }),
                  (0, i.jsx)(h.Z, {
                    className:
                      "absolute top-1/2 left-6 md:left-[19%] -translate-y-1/2 group",
                    onClick: () => {
                      var t;
                      return null === (t = e.current) || void 0 === t
                        ? void 0
                        : t.slickPrev();
                    },
                    children: (0, i.jsx)(o.Z, {
                      className:
                        "fill-brand-blue-v2 group-hover:fill-brand-white-v2",
                    }),
                  }),
                  (0, i.jsx)(h.Z, {
                    className:
                      "absolute top-1/2 right-6 md:right-[19%] -translate-y-1/2 group",
                    onClick: () => {
                      var t;
                      return null === (t = e.current) || void 0 === t
                        ? void 0
                        : t.slickNext();
                    },
                    children: (0, i.jsx)(s.Z, {
                      className:
                        "fill-brand-blue-v2 group-hover:fill-brand-white-v2",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        M = a(84901),
        S = () =>
          (0, i.jsxs)(M.ZP, {
            root: !0,
            children: [
              (0, i.jsx)(L, {}),
              (0, i.jsx)(u, {}),
              (0, i.jsx)(Z, {}),
              (0, i.jsx)(m, {}),
              (0, i.jsx)(r.Z, {}),
            ],
          });
    },
    25320: function (e, t, a) {
      "use strict";
      var i = a(47477),
        r = a(62866),
        n = a.n(r);
      t.Z = (e) => {
        let { className: t, onClick: a, children: r } = e;
        return (0, i.jsx)("div", {
          className: n()(
            "w-6 md:w-[40px] h-6 md:h-[40px] flex items-center justify-center border border-brand-blue-v2 hover:bg-brand-blue-v2 hover:fill-brand-white-v2 transition-all cursor-pointer group",
            t
          ),
          onClick: a,
          children: r,
        });
      };
    },
    57215: function (e, t, a) {
      "use strict";
      var i = a(47477);
      a(35089);
      var r = a(62866),
        n = a.n(r);
      t.Z = (e) => {
        let {
            children: t,
            variant: a = "primary",
            fullWidth: r = !1,
            size: l = "md",
            className: o,
            ...s
          } = e,
          d = n()(
            "block text-center px-4 font-medium transition-colors hover:text-brand-white-v2 hover:bg-brand-blue-v2 hover:border-brand-blue-v2",
            {
              "border border-brand-white-v2 text-brand-white-v2 bg-brand-black-v2":
                "primary" === a,
              "bg-brand-white-v2 border-brand-white-v2 text-brand-black-v2":
                "secondary" === a,
              "bg-brand-grey-v2 text-brand-white-v2": "tertiary" === a,
              "bg-none border border-brand-white-v2 text-brand-white-v2":
                "ghost" === a,
            },
            { "text-sm py-2": "sm" === l, "py-2.5": "md" === l },
            r && "w-full",
            o
          );
        return (0, i.jsx)("button", { className: d, ...s, children: t });
      };
    },
    8166: function (e, t, a) {
      "use strict";
      var i = a(47477),
        r = a(50609),
        n = a(57215);
      t.Z = () =>
        (0, i.jsx)("div", {
          className:
            "w-full mx-auto bg-[url('/images/death-of-socrates-mobile.png')] md:bg-[url('/images/death-of-socrates.png')] bg-cover bg-center",
          children: (0, i.jsxs)("div", {
            className: "container mx-auto py-[128px] px-4 gap-4 flex flex-col",
            children: [
              (0, i.jsx)("h3", {
                className:
                  "text-[28px] md:text-[36px] leading-[42px] md:leading-[54px] text-brand-white-v2 text-center font-semibold",
                children: "Ready to join the FLock?",
              }),
              (0, i.jsxs)("div", {
                className: "flex items-center gap-4 justify-center",
                children: [
                  (0, i.jsx)(r.default, {
                    href: "https://apps-flock.vercel.app",
                    target: "_blank",
                    passHref: !0,
                    children: (0, i.jsx)(n.Z, {
                      variant: "ghost",
                      children: "Launch Dapps",
                    }),
                  }),
                  (0, i.jsx)(r.default, {
                    href: "https://app.uniswap.org",
                    target: "_blank",
                    passHref: !0,
                    children: (0, i.jsx)(n.Z, {
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
    57176: function (e, t, a) {
      "use strict";
      var i = a(47477);
      t.Z = (e) =>
        (0, i.jsx)("svg", {
          width: "25",
          height: "25",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.0303 5.93744C16.3232 6.23034 16.3232 6.70521 16.0303 6.9981L10.5607 12.4678L16.0303 17.9374C16.3232 18.2303 16.3232 18.7052 16.0303 18.9981C15.7374 19.291 15.2626 19.291 14.9697 18.9981L8.96967 12.9981C8.67678 12.7052 8.67678 12.2303 8.96967 11.9374L14.9697 5.93744C15.2626 5.64455 15.7374 5.64455 16.0303 5.93744Z",
          }),
        });
    },
    65594: function (e, t, a) {
      "use strict";
      var i = a(47477);
      t.Z = (e) =>
        (0, i.jsx)("svg", {
          width: "25",
          height: "25",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.96967 5.93744C8.67678 6.23034 8.67678 6.70521 8.96967 6.9981L14.4393 12.4678L8.96967 17.9374C8.67678 18.2303 8.67678 18.7052 8.96967 18.9981C9.26256 19.291 9.73744 19.291 10.0303 18.9981L16.0303 12.9981C16.3232 12.7052 16.3232 12.2303 16.0303 11.9374L10.0303 5.93744C9.73744 5.64455 9.26256 5.64455 8.96967 5.93744Z",
          }),
        });
    },
  },
  function (e) {
    e.O(
      0,
      [6364, 9599, 609, 8917, 9651, 469, 4473, 4573, 8926, 1744],
      function () {
        return e((e.s = 98423));
      }
    ),
      (_N_E = e.O());
  },
]);
