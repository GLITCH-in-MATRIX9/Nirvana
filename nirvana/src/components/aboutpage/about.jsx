"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";


const SMOOTH = [0.16, 1, 0.3, 1];

/* ============================================================
   REVEAL LINE
============================================================ */

function RevealLine({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    obs.observe(el);

    const timeout = setTimeout(() => setShown(true), 2000);

    return () => {
      obs.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <span ref={ref} className={`reveal-line ${className}`}>
      <span
        className="block [will-change:clip-path,transform,opacity]"
        style={{
          display: "block",
          clipPath: shown
            ? "inset(0 0 0% 0)"
            : "inset(0 0 100% 0)",
          transform: shown ? "translateY(0)" : "translateY(8px)",
          opacity: shown ? 1 : 0,
          transition: `
            clip-path 1s cubic-bezier(0.16,1,0.3,1) ${delay}s,
            transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}s,
            opacity 0.8s ease ${delay}s
          `,
        }}
      >
        {children}
      </span>
    </span>
  );
}

/* ============================================================
   CHARACTER REVEAL
============================================================ */

function CharReveal({ text, delay = 0 }) {
  const chars = useMemo(() => text.split(""), [text]);

  return (
    <span className="inline-block overflow-hidden align-top pb-[0.05em]" aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block [will-change:transform,opacity]"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.025,
            ease: SMOOTH,
          }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ============================================================
   MAGNETIC
============================================================ */

function Magnetic({
  children,
  strength = 0.35,
  className = "",
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, {
    stiffness: 200,
    damping: 18,
  });

  const sy = useSpring(y, {
    stiffness: 200,
    damping: 18,
  });

  const onMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    x.set(
      (e.clientX - (rect.left + rect.width / 2)) * strength
    );

    y.set(
      (e.clientY - (rect.top + rect.height / 2)) * strength
    );
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        x: sx,
        y: sy,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   CUSTOM CURSOR
============================================================ */

function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  const [label, setLabel] = useState("");
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    let raf;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.transform =
        `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const loop = () => {
      cursorX += (mouseX - cursorX) * 0.16;
      cursorY += (mouseY - cursorY) * 0.16;

      cursor.style.transform =
        `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;

      raf = requestAnimationFrame(loop);
    };

    const over = (e) => {
      const element = e.target.closest("[data-cursor]");

      if (element) {
        setLabel(element.dataset.cursor || "");
        setHovering(true);
      }
    };

    const out = (e) => {
      const element = e.target.closest("[data-cursor]");

      if (element) {
        setLabel("");
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);

    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);

      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 z-[9999] flex h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f5f5f7] pointer-events-none mix-blend-difference transition-[width,height,background] duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] max-lg:hidden ${hovering ? "h-[84px] w-[84px]" : ""}`}
      >
        <span className="whitespace-nowrap font-[DM_Mono,monospace] text-[0.6rem] uppercase tracking-[0.15em] text-[#070709] opacity-0 transition-opacity duration-200 ease-out">{label}</span>
      </div>

      <div ref={dotRef} className="fixed top-0 left-0 z-[10000] h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6] pointer-events-none max-lg:hidden" />
    </>
  );
}

/* ============================================================
   HERO
============================================================ */

function Hero() {
  const ref = useRef(null);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 140]
  );

  const yImage = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 240]
  );

  const yDecor = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -80]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.85],
    [1, 0]
  );

  const scaleImg = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const move = (e) => {
      setMouse({
        x:
          (e.clientX / window.innerWidth - 0.5) * 22,
        y:
          (e.clientY / window.innerHeight - 0.5) * 22,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [isMobile]);

  return (
    <section
      className="relative grid min-h-screen min-h-[100dvh] grid-cols-[auto_1.05fr_1fr] items-center overflow-hidden bg-[#070709] px-[clamp(1.25rem,4vw,4rem)] pt-[clamp(6rem,12vh,10rem)] pb-[clamp(3rem,6vh,5rem)] max-lg:grid-cols-1 max-lg:row-gap-8 max-lg:pt-[clamp(6.5rem,14vh,9rem)] max-lg:pb-16 max-lg:text-center max-sm:px-5 max-sm:pt-[5.5rem] max-sm:pb-16"
      id="home"
      ref={ref}
    >
      <motion.div
        className="pointer-events-none absolute left-[35%] top-[-15%] z-0 h-[130%] w-[22%] rotate-[14deg] bg-[linear-gradient(180deg,rgba(139,92,246,0.10)_0%,rgba(79,140,255,0.05)_50%,transparent_100%)] blur-[2px] [will-change:transform] max-lg:left-1/2 max-lg:w-[40%] max-lg:-translate-x-1/2"
        style={{ y: yDecor }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 grid grid-cols-4"
        aria-hidden
      >
        <div className="border-r border-[rgba(255,255,255,0.07)] last:border-r-0" />
        <div className="border-r border-[rgba(255,255,255,0.07)] last:border-r-0" />
        <div className="border-r border-[rgba(255,255,255,0.07)] last:border-r-0" />
        <div className="border-r border-[rgba(255,255,255,0.07)] last:border-r-0" />
      </div>

      <aside className="relative z-[3] flex flex-col gap-[0.85rem] pr-8 max-lg:flex-row max-lg:flex-wrap max-lg:justify-center max-lg:gap-4 max-lg:pr-0 max-sm:hidden">
        {[
          "/01 ABOUT",
          "/02 PHILOSOPHY",
          "/03 WORK",
          "/04 CONTACT",
        ].map((text, i) => (
          <motion.span
            key={text}
            className={`font-[DM_Mono,monospace] text-[0.6rem] uppercase tracking-[0.2em] text-[#4a4a52] transition-colors duration-400 hover:text-[#8b5cf6] ${i === 0 ? "text-[#f5f5f7]" : ""}`}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.6 + i * 0.08,
            }}
          >
            {text}
          </motion.span>
        ))}
      </aside>

      <motion.div
        className="relative z-[2] flex flex-col gap-[clamp(1rem,2vh,1.5rem)] pr-8 [will-change:transform,opacity] max-lg:items-center max-lg:pr-0"
        style={{
          y: yContent,
          opacity,
        }}
      >
        <motion.div
          className="flex items-center gap-3 font-[DM_Mono,monospace] text-[0.6rem] uppercase tracking-[0.2em] text-[#96969f] max-sm:gap-2 max-sm:text-[0.55rem]"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <span>IGDTUW</span>
          <span className="text-[#4a4a52]">
            /
          </span>
          <span>DESIGN SOCIETY</span>
          <span className="text-[#4a4a52]">
            /
          </span>
          <span>2026</span>
        </motion.div>

        <motion.p
          className="font-[DM_Mono,monospace] text-[0.65rem] uppercase tracking-[0.25em] text-[#96969f]"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          A CREATIVE COLLECTIVE
        </motion.p>

        <div className="mt-2 flex flex-col gap-[0.1rem]">
          <h1 className="pb-[0.05em] font-[sans-serif] text-[clamp(3.25rem,9vw,8rem)] font-medium uppercase leading-[0.92] tracking-[-0.045em] text-[#f5f5f7] max-lg:text-[clamp(3rem,15vw,6.5rem)] max-sm:text-[clamp(2.5rem,17vw,4.5rem)] max-[400px]:text-[2.25rem]">
            <CharReveal
              text="NIRVANA"
              delay={0.5}
            />
          </h1>

          <h2 className="mt-1 font-['Space_Grotesk',sans-serif] text-[clamp(1.5rem,4vw,3.25rem)] font-normal uppercase leading-none tracking-[-0.02em] pb-[0.05em] text-transparent [-webkit-text-stroke:1px_rgba(245,245,247,0.62)] max-lg:text-[clamp(1.25rem,7vw,2.5rem)] max-sm:text-[clamp(1rem,8vw,2rem)] max-sm:[-webkit-text-stroke:1px_rgba(245,245,247,0.5)]">
            <CharReveal
              text="DESIGN SOCIETY"
              delay={0.85}
            />
          </h2>
        </div>

        <motion.p
          className="max-w-[36ch] font-[Inter,sans-serif] text-[clamp(0.9rem,1.1vw,1.05rem)] leading-[1.6] text-[#96969f] max-lg:max-w-[44ch] max-lg:text-center"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.2,
          }}
        >
          A space where ideas find form, curiosity
          becomes craft, and creativity becomes a way
          of thinking.
        </motion.p>

        <motion.div
          className="mt-4 flex flex-wrap items-center gap-2 max-lg:justify-center"
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 1.35,
              },
            },
          }}
        >
          {[
            "DESIGN",
            "CREATE",
            "EXPERIMENT",
            "COLLABORATE",
          ].map((tag) => (
            <motion.span
              key={tag}
              className="border border-[rgba(255,255,255,0.14)] px-[0.85rem] py-[0.35rem] font-[DM_Mono,monospace] text-[0.55rem] uppercase tracking-[0.2em] text-[#f5f5f7] transition-[border-color] duration-400 max-sm:px-[0.65rem] max-sm:py-[0.3rem] max-sm:text-[0.5rem]"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.6,
                ease: SMOOTH,
              }}
              whileHover={{
                y: -3,
                borderColor: "var(--purple)",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-[1] flex h-full min-h-[55vh] flex-col items-center justify-center [will-change:transform] max-lg:min-h-0 max-lg:mt-2"
        initial={{
          opacity: 0,
          scale: 0.92,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 0.6,
          ease: SMOOTH,
        }}
        style={{
          y: yImage,
          scale: scaleImg,
        }}
      >
        <motion.div
          className="relative flex items-center justify-center transition-transform duration-300 ease-out"
          style={{
            transform: isMobile
              ? "none"
              : `translate(${mouse.x * 0.5}px, ${
                  mouse.y * 0.5
                }px)`,
          }}
        >
          <motion.div
            className="pointer-events-none absolute z-0 h-[80%] w-[80%] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.35)_0%,rgba(79,140,255,0.15)_40%,transparent_70%)] blur-[70px] max-sm:blur-[40px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <img
            src="/images/nirvana-girl.png"
            alt="Nirvana visual"
            className="relative z-[2] h-auto w-full max-w-[520px] max-h-[72vh] object-contain mix-blend-screen [mask-image:radial-gradient(ellipse_75%_85%_at_center,#000_55%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_75%_85%_at_center,#000_55%,transparent_100%)] max-lg:max-w-[380px] max-lg:max-h-[46vh] max-sm:max-w-[300px] max-sm:max-h-[42vh] max-[400px]:max-w-[250px] max-[400px]:max-h-[38vh]"
          />

          <div className="absolute bottom-[4%] left-1/2 z-[3] flex -translate-x-1/2 flex-col gap-1 text-center max-lg:relative max-lg:bottom-auto max-lg:left-auto max-lg:translate-x-0 max-lg:mt-4">
            <span className="font-['Space_Grotesk',sans-serif] text-[clamp(1rem,1.5vw,1.5rem)] tracking-[-0.02em] text-[#f5f5f7]">
              Ideas into form.
            </span>

            <span className="font-[DM_Mono,monospace] text-[0.55rem] uppercase tracking-[0.2em] text-[#96969f]">
              A VISUAL CULTURE OF MAKING
            </span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-[clamp(1.25rem,4vw,4rem)] z-[5] flex items-center gap-4 max-sm:hidden"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.6,
          duration: 1,
        }}
      >
        <span className="h-px w-10 bg-[rgba(255,255,255,0.14)]" />

        <span className="font-[DM_Mono,monospace] text-[0.55rem] uppercase tracking-[0.2em] text-[#4a4a52]">
          SCROLL TO EXPLORE
        </span>

        <motion.span
          className="text-[0.85rem] text-[#96969f]"
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}

/* ============================================================
   MARQUEE
============================================================ */

function Marquee() {
  const items = [
    "CURIOSITY",
    "EXPERIMENTATION",
    "CRAFT",
    "EXPRESSION",
    "COMMUNITY",
    "DESIGN",
    "CREATE",
    "COLLABORATE",
  ];

  const loop = [...items, ...items];

  return (
    <section className="relative overflow-hidden border-y border-[rgba(255,255,255,0.07)] bg-[#070709] py-8">
      <motion.div
        className="flex w-max gap-12 [will-change:transform]"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loop.map((text, index) => (
          <span
            key={index}
            className="inline-flex shrink-0 items-center gap-12 whitespace-nowrap font-['Space_Grotesk',sans-serif] text-[clamp(1.75rem,3.5vw,3rem)] font-normal uppercase tracking-[-0.02em] text-[#f5f5f7] opacity-[0.55]"
          >
            <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-[#8b5cf6]" />
            {text}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

/* ============================================================
   PHILOSOPHY
============================================================ */

function Philosophy() {
  const items = [
    {
      n: "01",
      t: "CURIOSITY",
      d: "Question the obvious. Explore the unfamiliar. Every good idea begins with curiosity.",
    },
    {
      n: "02",
      t: "EXPERIMENTATION",
      d: "Try things that might fail. The most interesting work starts with experimenting.",
    },
    {
      n: "03",
      t: "CRAFT",
      d: "Details matter. From a single pixel to an entire system, we care about how things are made.",
    },
    {
      n: "04",
      t: "EXPRESSION",
      d: "There is no single way to create. Ideas take their own visual language.",
    },
    {
      n: "05",
      t: "COMMUNITY",
      d: "The best ideas rarely happen alone. We learn, create and grow together.",
    },
  ];

  return (
    <section
      className="relative border-t border-[rgba(255,255,255,0.07)] bg-[#070709] py-[clamp(4rem,10vh,7rem)]"
      id="about"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(1.25rem,4vw,4rem)]">
        <div className="grid grid-cols-2 items-start gap-[clamp(2rem,5vw,5rem)] max-[900px]:grid-cols-1">
          <div className="sticky top-24 max-[900px]:static">
            <motion.span
              className="mb-4 inline-block font-[DM_Mono,monospace] text-[0.6rem] uppercase tracking-[0.22em] text-[#96969f]"
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              02 — OUR PHILOSOPHY
            </motion.span>

            <h2 className="mb-6 font-['Space_Grotesk',sans-serif] text-[clamp(2.5rem,7vw,6rem)] font-medium uppercase leading-none tracking-[-0.04em]">
              <RevealLine>
                WE BELIEVE
              </RevealLine>

              <RevealLine delay={0.1}>
                <span className="text-transparent [-webkit-text-stroke:1px_rgba(245,245,247,0.62)] max-sm:[-webkit-text-stroke:1px_rgba(245,245,247,0.5)]">
                  IN MAKING.
                </span>
              </RevealLine>
            </h2>

            <motion.p
              className="mb-6 max-w-[44ch] text-[clamp(0.9rem,1.05vw,1rem)] leading-[1.65] text-[#96969f]"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
            >
              Design is more than making things look good.
              It is about curiosity, experimentation,
              expression and the courage to make something
              new.
            </motion.p>

            <Magnetic strength={0.3}>
              <motion.span
                className="inline-block border border-[#8b5cf6] px-[0.85rem] py-[0.35rem] font-[DM_Mono,monospace] text-[0.55rem] uppercase tracking-[0.2em] text-[#f5f5f7] transition-[border-color,color] duration-400 ease-out"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: SMOOTH,
                }}
              >
                THE NIRVANA WAY
              </motion.span>
            </Magnetic>
          </div>

          <div className="flex flex-col border-t border-[rgba(255,255,255,0.07)]">
            {items.map((item, index) => (
              <motion.div
                key={item.n}
                className="grid grid-cols-[50px_1fr_30px] items-start gap-5 border-b border-[rgba(255,255,255,0.07)] py-6 transition-[background] duration-400 hover:bg-[rgba(255,255,255,0.015)] max-sm:grid-cols-[36px_1fr_20px] max-sm:gap-3"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-40px",
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease: SMOOTH,
                }}
                whileHover={{
                  x: 8,
                }}
              >
                <span className="pt-[0.35rem] font-[DM_Mono,monospace] text-[0.65rem] tracking-[0.15em] text-[#8b5cf6]">
                  {item.n}
                </span>

                <div className="min-w-0">
                  <h3 className="mb-[0.35rem] font-['Space_Grotesk',sans-serif] text-[clamp(1.1rem,1.6vw,1.5rem)] font-normal uppercase tracking-[-0.02em] text-[#f5f5f7]">
                    {item.t}
                  </h3>

                  <p className="max-w-[52ch] text-[0.85rem] leading-[1.55] text-[#96969f]">
                    {item.d}
                  </p>
                </div>

                <motion.span
                  className="pt-[0.35rem] text-[0.9rem] text-[#4a4a52]"
                  whileHover={{
                    x: 4,
                    y: -4,
                    color: "var(--purple)",
                  }}
                >
                  ↗
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FEATURE GRID
============================================================ */

const FEATURES = [
  {
    id: "01",
    title: "UI / UX",
    subtitle: "INTERFACES",
    copy: "Interfaces that feel intuitive and considered.",
    size: "large",
    tone: "purple",
    tag: "DIGITAL",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "02",
    title: "BRANDING",
    subtitle: "IDENTITIES",
    copy: "Identities that are remembered.",
    size: "small",
    tone: "blue",
    tag: "IDENTITY",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "03",
    title: "GRAPHIC DESIGN",
    subtitle: "VISUAL LANGUAGE",
    copy: "Visuals that communicate with intent.",
    size: "small",
    tone: "pink",
    tag: "PRINT",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "04",
    title: "MOTION",
    subtitle: "MOVING TYPE",
    copy: "Design that moves and breathes.",
    size: "small",
    tone: "purple",
    tag: "FILM",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "05",
    title: "CREATIVE TECH",
    subtitle: "DESIGN × CODE",
    copy: "Where design meets code.",
    size: "medium",
    tone: "blue",
    tag: "CODE",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "06",
    title: "COMMUNITY",
    subtitle: "COLLECTIVE",
    copy: "Growing together as one creative voice.",
    size: "small",
    tone: "pink",
    tag: "PEOPLE",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
  },
];

function FeatureCard({ f, i }) {
  const cardRef = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rX = useSpring(
    useTransform(my, [-0.5, 0.5], [6, -6]),
    {
      stiffness: 150,
      damping: 20,
    }
  );

  const rY = useSpring(
    useTransform(mx, [-0.5, 0.5], [-6, 6]),
    {
      stiffness: 150,
      damping: 20,
    }
  );

  const glowX = useSpring(mx, {
    stiffness: 100,
    damping: 20,
  });

  const glowY = useSpring(my, {
    stiffness: 100,
    damping: 20,
  });

  const glowBg = useMotionTemplate`
    radial-gradient(
      400px circle at
      calc(50% + ${glowX} * 80px)
      calc(50% + ${glowY} * 80px),
      rgba(139,92,246,0.18),
      transparent 60%
    )
  `;

  const onMove = (e) => {
    if (!cardRef.current) return;

    const rect =
      cardRef.current.getBoundingClientRect();

    mx.set(
      (e.clientX - rect.left) / rect.width - 0.5
    );

    my.set(
      (e.clientY - rect.top) / rect.height - 0.5
    );
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.a
      ref={cardRef}
      href="#work"
      className={`group relative flex flex-col overflow-hidden bg-[#070709] text-[#f5f5f7] no-underline transition-colors duration-400 hover:bg-[#111116] [transform-style:preserve-3d] [will-change:transform] max-lg:col-span-6 max-sm:col-span-1 ${f.size === "large" ? "col-span-8 max-lg:col-span-12" : f.size === "medium" ? "col-span-6" : "col-span-4"} ${f.tone === "purple" ? "" : ""}`}
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.9,
        delay: (i % 3) * 0.08,
        ease: SMOOTH,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: rX,
        rotateY: rY,
        transformPerspective: 1000,
      }}
      data-cursor="VIEW"
    >
      <div className={`relative overflow-hidden isolate bg-[#111116] ${f.size === "large" ? "aspect-[16/9]" : f.size === "small" ? "aspect-[4/3] max-sm:aspect-[16/10]" : "aspect-[16/10]"}`}>
        <div
          className={`pointer-events-none absolute inset-[-15%] z-[1] opacity-75 mix-blend-screen ${
            f.tone === "purple"
              ? "bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.45),transparent_55%)]"
              : f.tone === "blue"
              ? "bg-[radial-gradient(circle_at_70%_50%,rgba(79,140,255,0.45),transparent_60%)]"
              : "bg-[radial-gradient(circle_at_40%_55%,rgba(236,72,153,0.4),transparent_60%)]"
          }`}
        />

        <motion.img
          src={f.image}
          alt={f.title}
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-70 saturate-[0.85] brightness-[0.8] transition-[opacity,filter] duration-600 group-hover:opacity-[0.95] group-hover:saturate-[1.05] group-hover:brightness-100"
          loading="lazy"
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 1.2,
            ease: SMOOTH,
          }}
        />

        <motion.span
          className="absolute left-5 top-4 z-[2] font-['Space_Grotesk',sans-serif] text-[clamp(2rem,4vw,3.5rem)] font-medium tracking-[-0.04em] text-[#f5f5f7] [text-shadow:0_0_30px_rgba(139,92,246,0.35)]"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2 + (i % 3) * 0.1,
          }}
        >
          {f.id}
        </motion.span>

        <span className="absolute right-5 top-5 z-[2] border border-[rgba(255,255,255,0.25)] px-[0.65rem] py-[0.3rem] font-[DM_Mono,monospace] text-[0.55rem] uppercase tracking-[0.2em] text-[#f5f5f7] backdrop-blur-[6px]">
          {f.tag}
        </span>

        <motion.div
          className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: glowBg,
          }}
        />
      </div>

      <div className="relative flex flex-col gap-[0.35rem] p-5 pb-6">
        <span className="font-[DM_Mono,monospace] text-[0.55rem] uppercase tracking-[0.22em] text-[#96969f]">
          {f.subtitle}
        </span>

        <h3 className="font-['Space_Grotesk',sans-serif] text-[clamp(1.25rem,2vw,1.75rem)] font-medium uppercase tracking-[-0.02em] text-[#f5f5f7] transition-colors duration-400 group-hover:text-[#8b5cf6]">
          {f.title}
        </h3>

        <p className="max-w-[46ch] text-[0.85rem] leading-[1.55] text-[#96969f]">
          {f.copy}
        </p>

        <motion.span
          className="absolute bottom-6 right-6 text-base text-[#4a4a52]"
          whileHover={{
            x: 4,
            y: -4,
          }}
          transition={{
            duration: 0.4,
            ease: SMOOTH,
          }}
        >
          ↗
        </motion.span>
      </div>
    </motion.a>
  );
}

function FeatureGrid() {
  return (
    <section className="relative border-t border-[rgba(255,255,255,0.07)] bg-[#0c0c10] py-[clamp(4rem,10vh,7rem)]">
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(1.25rem,4vw,4rem)]">
        <div className="mb-[clamp(2rem,4vh,3rem)] max-w-[900px]">
          <motion.span
            className="mb-4 inline-block font-[DM_Mono,monospace] text-[0.6rem] uppercase tracking-[0.22em] text-[#96969f]"
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            03 — WHAT WE DO
          </motion.span>

          <h2 className="mb-5 font-['Space_Grotesk',sans-serif] text-[clamp(2.25rem,6vw,5rem)] font-medium uppercase leading-none tracking-[-0.04em]">
            <RevealLine>
              WHAT WE
            </RevealLine>

            <RevealLine delay={0.1}>
              <span className="text-transparent [-webkit-text-stroke:1px_rgba(245,245,247,0.62)] max-sm:[-webkit-text-stroke:1px_rgba(245,245,247,0.5)]">
                CAN CREATE
              </span>
            </RevealLine>
          </h2>

          <motion.p
            className="max-w-[52ch] text-[clamp(0.9rem,1.05vw,1rem)] leading-[1.6] text-[#96969f]"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          >
            From visual identities to digital experiences
            — different ways to turn ideas into something
            people can see, feel and remember.
          </motion.p>
        </div>

        <div className="grid grid-cols-12 gap-px border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.07)] max-sm:grid-cols-1">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              f={feature}
              i={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SELECTED WORK
============================================================ */

const PROJECTS = [
  {
    id: "01",
    title: "VISUAL LANGUAGE",
    category: "BRANDING",
    year: "2026",
    size: "wide",
    tone: "blue",
    image: "/images/work-1.png",
  },
  {
    id: "02",
    title: "SIGNAL SYSTEM",
    category: "UI / UX",
    year: "2026",
    size: "tall",
    tone: "purple",
    image: "/images/work-2.png",
  },
  {
    id: "03",
    title: "DRIFT",
    category: "MOTION",
    year: "2025",
    size: "square",
    tone: "pink",
    image: "/images/work-3.png",
  },
  {
    id: "04",
    title: "ORBIT",
    category: "CREATIVE TECH",
    year: "2025",
    size: "wide",
    tone: "blue",
    image: "/images/work-4.png",
  },
  {
    id: "05",
    title: "MOSS",
    category: "GRAPHIC",
    year: "2025",
    size: "tall",
    tone: "purple",
    image: "/images/work-5.png",
  },
  {
    id: "06",
    title: "WAVE",
    category: "IDENTITY",
    year: "2024",
    size: "square",
    tone: "pink",
    image: "/images/work-6.png",
  },
  {
    id: "07",
    title: "CHROMA",
    category: "UI / UX",
    year: "2024",
    size: "wide",
    tone: "blue",
    image: "/images/work-7.png",
  },
  {
    id: "08",
    title: "ECHO",
    category: "CREATIVE TECH",
    year: "2024",
    size: "tall",
    tone: "purple",
    image: "/images/work-8.png",
  },
];

function WorkTile({ project, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [40, -40]
  );

  return (
    <motion.a
      ref={ref}
      href="#"
      className={`group relative block overflow-hidden isolate border border-[rgba(255,255,255,0.07)] bg-[#111116] text-[#f5f5f7] no-underline transition-[border-color,transform] duration-500 hover:border-[rgba(255,255,255,0.14)] ${project.size === "wide" ? "col-span-7 row-span-2 max-lg:col-span-6 max-lg:row-span-2 max-sm:col-span-1 max-sm:row-auto max-sm:aspect-[4/3]" : project.size === "tall" ? "col-span-5 row-span-3 max-lg:col-span-3 max-lg:row-span-3 max-sm:col-span-1 max-sm:row-auto max-sm:aspect-[4/3]" : "col-span-5 row-span-2 max-lg:col-span-3 max-lg:row-span-2 max-sm:col-span-1 max-sm:row-auto max-sm:aspect-[4/3]"}`}
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.9,
        delay: (index % 3) * 0.08,
        ease: SMOOTH,
      }}
      data-cursor="VIEW"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`pointer-events-none absolute inset-[-15%] z-[1] opacity-75 mix-blend-screen transition-opacity duration-600 group-hover:opacity-100 ${
            project.tone === "blue"
              ? "bg-[radial-gradient(circle_at_30%_40%,rgba(79,140,255,0.4),transparent_60%)]"
              : project.tone === "purple"
              ? "bg-[radial-gradient(circle_at_65%_50%,rgba(139,92,246,0.45),transparent_60%)]"
              : "bg-[radial-gradient(circle_at_40%_55%,rgba(236,72,153,0.4),transparent_60%)]"
          }`}
        />

        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-[-8%] z-0 h-[116%] w-[116%] object-cover saturate-[0.85] brightness-[0.85] transition-[filter] duration-600 [will-change:transform] group-hover:saturate-[1.05] group-hover:brightness-100"
          loading="lazy"
          style={{ y }}
        />

        <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(to_top,rgba(7,7,9,0.85)_0%,rgba(7,7,9,0.35)_30%,transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="pointer-events-none absolute bottom-5 left-5 right-5 z-[3] flex translate-y-3 flex-col gap-1 opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="font-[DM_Mono,monospace] text-[0.6rem] tracking-[0.2em] text-[#8b5cf6]">
            {project.id}
          </span>

          <span className="font-['Space_Grotesk',sans-serif] text-[clamp(1.1rem,1.6vw,1.5rem)] font-medium uppercase tracking-[-0.02em] text-[#f5f5f7]">
            {project.title}
          </span>

          <span className="font-[DM_Mono,monospace] text-[0.55rem] uppercase tracking-[0.2em] text-[#96969f]">
            {project.category} — {project.year}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function SelectedWork() {
  return (
    <section
      className="relative border-t border-[rgba(255,255,255,0.07)] bg-[#070709] py-[clamp(4rem,10vh,7rem)]"
      id="work"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(1.25rem,4vw,4rem)]">
        <div className="mb-[clamp(2.5rem,5vh,4rem)] max-w-[900px]">
          <motion.span
            className="mb-4 inline-block font-[DM_Mono,monospace] text-[0.6rem] uppercase tracking-[0.22em] text-[#96969f]"
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            04 — SELECTED WORK
          </motion.span>

          <h2 className="mb-5 font-['Space_Grotesk',sans-serif] text-[clamp(2.25rem,6.5vw,6rem)] font-medium uppercase leading-none tracking-[-0.04em]">
            <RevealLine>
              WORK FROM
            </RevealLine>

            <RevealLine delay={0.1}>
              <span className="text-transparent [-webkit-text-stroke:1px_rgba(245,245,247,0.62)] max-sm:[-webkit-text-stroke:1px_rgba(245,245,247,0.5)]">
                NIRVANA.
              </span>
            </RevealLine>
          </h2>

          <motion.p
            className="max-w-[52ch] text-[clamp(0.9rem,1.05vw,1rem)] leading-[1.6] text-[#96969f]"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          >
            A collection of ideas, experiments and visual
            worlds created by the people of Nirvana.
          </motion.p>
        </div>

        <div className="grid grid-cols-12 auto-rows-[minmax(220px,18vw)] gap-[clamp(0.5rem,1vw,1rem)] max-lg:grid-cols-6 max-lg:auto-rows-[minmax(200px,26vw)] max-sm:grid-cols-1 max-sm:auto-rows-auto max-sm:gap-3">
          {PROJECTS.map((project, index) => (
            <WorkTile
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



function CTA() {
  return (
    <section
      className="relative overflow-hidden border-t border-[rgba(255,255,255,0.07)] bg-[#070709] pb-0 pt-[clamp(4rem,10vh,8rem)]"
      id="contact"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(1.25rem,4vw,4rem)]">
        <motion.span
          className="mb-4 inline-block font-[DM_Mono,monospace] text-[0.6rem] uppercase tracking-[0.22em] text-[#96969f]"
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          05 — CONTACT
        </motion.span>

        <h2 className="mb-[clamp(2rem,5vh,3.5rem)] font-['Space_Grotesk',sans-serif] text-[clamp(2.25rem,7vw,7rem)] font-medium uppercase leading-none tracking-[-0.045em]">
          <RevealLine>
            HAVE AN IDEA?
          </RevealLine>

          <RevealLine delay={0.1}>
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(245,245,247,0.62)] max-sm:[-webkit-text-stroke:1px_rgba(245,245,247,0.5)]">
              LET&apos;S MAKE IT.
            </span>
          </RevealLine>
        </h2>

        <Magnetic
          strength={0.4}
          className="inline-block"
        >
          <motion.a
            href="#site-footer"
            className="group relative inline-flex items-center gap-5 overflow-hidden border border-[rgba(255,255,255,0.14)] px-9 py-[1.4rem] no-underline text-[#f5f5f7] transition-[border-color] duration-500 hover:border-transparent"
            data-cursor="OPEN"
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.4,
              ease: SMOOTH,
            }}
          >
            <span className="pointer-events-none absolute inset-0 z-0 translate-y-[101%] bg-[linear-gradient(100deg,#8b5cf6,#4f8cff,#ec4899)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            <span className="relative z-[1] font-['Space_Grotesk',sans-serif] text-[clamp(1rem,1.6vw,1.25rem)] uppercase tracking-[0.02em]">
              LET&apos;S CREATE
            </span>

            <motion.span
              className="relative z-[1] text-xl"
              whileHover={{
                x: 8,
              }}
              transition={{
                duration: 0.4,
                ease: SMOOTH,
              }}
            >
              →
            </motion.span>
          </motion.a>
        </Magnetic>
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT PAGE
============================================================ */

export default function About() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.documentElement.style.webkitFontSmoothing = "antialiased";
    document.body.style.margin = "0";
    document.body.style.background = "#070709";
    document.body.style.color = "#f5f5f7";
    document.body.style.fontFamily = "Inter, sans-serif";
    document.body.style.fontWeight = "300";
    document.body.style.overflowX = "hidden";
    document.body.style.cursor = window.innerWidth >= 1024 ? "none" : "auto";

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500&family=DM+Mono:wght@300;400;500&display=swap";
    document.head.appendChild(link);

    return () => {
      if (link.parentNode) link.parentNode.removeChild(link);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden bg-[#070709] text-[#f5f5f7] [font-family:Inter,sans-serif] font-light">
      <CustomCursor />

      <main>
        <Hero />
        <Marquee />
        <Philosophy />
        <FeatureGrid />
        <SelectedWork />
        <CTA />
      </main>
    </div>
  );
}

