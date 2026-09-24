"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

/* =========================================================
   DATA
========================================================= */

const disciplines = [
  {
    id: "01",
    title: "CREATIVE",
    short: "CREATE",
    description:
      "We turn ideas into visual experiences that feel unexpected, expressive and distinctly Nirvana.",
    word: "CREATE",
    accent: "#b794f4",
    tags: ["DIRECTION", "CONCEPT", "ART"],
  },
  {
    id: "02",
    title: "UI / UX",
    short: "INTERACT",
    description:
      "We design digital experiences where interaction, structure and visual language work together.",
    word: "INTERACT",
    accent: "#8ab4f8",
    tags: ["SYSTEMS", "FLOWS", "PROTOTYPE"],
  },
  {
    id: "03",
    title: "BRANDING",
    short: "IDENTITY",
    description:
      "We build identities that give ideas a recognizable visual voice.",
    word: "IDENTIFY",
    accent: "#f6ad8c",
    tags: ["MARKS", "TYPE", "TONE"],
  },
  {
    id: "04",
    title: "MOTION",
    short: "MOVE",
    description:
      "We bring static ideas to life through motion, rhythm and visual storytelling.",
    word: "MOTION",
    accent: "#7ee0c4",
    tags: ["TIMING", "EASE", "RHYTHM"],
  },
  {
    id: "05",
    title: "CONTENT",
    short: "EXPRESS",
    description:
      "We create content that communicates ideas while still feeling unmistakably ours.",
    word: "EXPRESS",
    accent: "#f4a9d1",
    tags: ["STORY", "EDIT", "VOICE"],
  },
];

const ease = [0.16, 1, 0.3, 1];

/* =========================================================
   STATIC TICK MARKS
   — computed once at module load so server and client
     render the identical SVG
========================================================= */

const TICK_COUNT = 60;

const tickMarks = Array.from({ length: TICK_COUNT }).map((_, i) => {
  const angle = (i / TICK_COUNT) * Math.PI * 2;
  const r1 = 96;
  const r2 = i % 5 === 0 ? 104 : 100;

  // round to 3 decimals so float precision doesn't differ
  const round = (n) => Number(n.toFixed(3));

  return {
    i,
    x1: round(100 + r1 * Math.cos(angle)),
    y1: round(100 + r1 * Math.sin(angle)),
    x2: round(100 + r2 * Math.cos(angle)),
    y2: round(100 + r2 * Math.sin(angle)),
  };
});

/* =========================================================
   COMPONENT
========================================================= */

export default function WhatWeDo() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const tiltX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const tiltY = useTransform(smoothY, [-1, 1], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    const section = sectionRef.current;
    section?.addEventListener("mousemove", handleMouseMove);
    return () => {
      section?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const current = disciplines[active];

  /* memoize the radial gradient string */
  const glowBackground = useMemo(
    () =>
      `radial-gradient(circle, ${current.accent}22, transparent 65%)`,
    [current.accent]
  );

  return (
    <section
      ref={sectionRef}
      className="
        section
        relative
        w-full
        overflow-hidden
        bg-[var(--color-black)]
        text-primary

        pt-28 pb-32
        sm:pt-36 sm:pb-40
        lg:pt-44 lg:pb-52
      "
    >
      {/* ATMOSPHERE */}
      <div className="noise absolute inset-0 z-0 opacity-[0.055]" />

      <motion.div
        animate={{ background: glowBackground }}
        transition={{ duration: 1.2, ease }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[30%]
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          blur-3xl
        "
      />

      {/* HEADER */}
      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 45, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease }}
          className="
            grid
            grid-cols-1
            gap-10

            lg:grid-cols-12
            lg:items-end
            lg:gap-12
          "
        >
          <div className="lg:col-span-7">
            <span className="text-micro text-subtle">
              04 — WHAT WE DO
            </span>

            <h2
              className="
                mt-6
                text-[clamp(3rem,9vw,6.5rem)]
                leading-[0.78]
                tracking-[-0.065em]
              "
            >
              WE MAKE
              <br />
              <span className="text-subtle">THINGS MOVE.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-2">
            <span className="text-micro text-subtle">
              / DISCIPLINES
            </span>

            <p
              className="
                mt-5
                max-w-[440px]
                text-body
                leading-6
                text-muted

                sm:text-body-lg
                sm:leading-7
              "
            >
              Five disciplines. One creative language.
              Each one is a different way of making the
              same idea land — through form, interaction,
              identity, rhythm and voice.
            </p>
          </div>
        </motion.div>
      </div>

      {/* MAIN EXPERIENCE */}
      <div className="container relative z-10 mt-20 sm:mt-28">
        <div
          className="
            grid
            grid-cols-1
            gap-16

            lg:grid-cols-12
            lg:gap-14
            lg:items-center
          "
        >
          {/* LIST */}
          <div className="lg:col-span-5">
            <ul className="border-t border-[var(--color-border)]">
              {disciplines.map((item, index) => {
                const isActive = active === index;

                return (
                  <li
                    key={item.id}
                    className="border-b border-[var(--color-border)]"
                  >
                    <button
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={() => setActive(index)}
                      className="
                        group
                        flex
                        w-full
                        items-center
                        gap-6
                        py-6
                        text-left

                        sm:py-7
                      "
                    >
                      <span
                        className={`
                          text-micro
                          transition-colors
                          duration-500

                          ${
                            isActive
                              ? "text-[var(--color-violet-muted)]"
                              : "text-subtle"
                          }
                        `}
                      >
                        {item.id}
                      </span>

                      <span
                        className={`
                          flex-1
                          text-[clamp(1.6rem,3.2vw,2.6rem)]
                          leading-[0.95]
                          tracking-[-0.05em]
                          transition-colors
                          duration-500

                          ${
                            isActive
                              ? "text-primary"
                              : "text-muted"
                          }
                        `}
                      >
                        {item.title}
                      </span>

                      <span
                        className={`
                          hidden
                          text-micro
                          transition-colors
                          duration-500

                          sm:block

                          ${
                            isActive
                              ? "text-primary"
                              : "text-subtle"
                          }
                        `}
                      >
                        {item.short}
                      </span>

                      <motion.span
                        animate={{
                          x: isActive ? 0 : -6,
                          opacity: isActive ? 1 : 0.4,
                        }}
                        transition={{ duration: 0.5, ease }}
                        className="text-primary text-sm"
                      >
                        →
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="desc"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease }}
                          className="overflow-hidden"
                        >
                          <p
                            className="
                              pb-7
                              pl-[calc(theme(spacing.6)+1rem)]
                              pr-8
                              text-body-sm
                              leading-6
                              text-muted

                              sm:pb-8
                            "
                          >
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* TYPOGRAPHIC INSTRUMENT */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto w-full max-w-[560px]">
              <motion.div
                style={{ x: tiltX, y: tiltY }}
                className="
                  relative
                  aspect-square
                  w-full
                "
              >
                {/* ROTATING RINGS */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-dashed
                    border-white/[0.08]
                  "
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 90,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-[8%]
                    rounded-full
                    border
                    border-white/[0.06]
                  "
                />

                {/* PROGRESS ARC + TICKS */}
                <svg
                  viewBox="0 0 200 200"
                  className="
                    pointer-events-none
                    absolute
                    inset-[14%]
                    h-[72%]
                    w-[72%]
                  "
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="0.6"
                  />

                  <motion.circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke={current.accent}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeDasharray="565"
                    initial={false}
                    animate={{
                      strokeDashoffset:
                        565 - (565 * (active + 1)) / disciplines.length,
                    }}
                    transition={{ duration: 0.9, ease }}
                    style={{
                      transform: "rotate(-90deg)",
                      transformOrigin: "50% 50%",
                    }}
                  />

                  {tickMarks.map((t) => (
                    <line
                      key={t.i}
                      x1={t.x1}
                      y1={t.y1}
                      x2={t.x2}
                      y2={t.y2}
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="0.4"
                    />
                  ))}
                </svg>

                {/* ORBITAL DOTS */}
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 24 + dot * 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-full
                    "
                    style={{ rotate: dot * 120 }}
                  >
                    <span
                      className="
                        absolute
                        left-1/2
                        top-0
                        h-2
                        w-2
                        -translate-x-1/2
                        rounded-full
                      "
                      style={{
                        background: current.accent,
                        opacity: 0.7,
                      }}
                    />
                  </motion.div>
                ))}

                {/* CENTER WORD */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                  "
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.word}
                      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
                      transition={{ duration: 0.7, ease }}
                      className="text-center"
                    >
                      <span
                        className="
                          block
                          text-[0.65rem]
                          uppercase
                          tracking-[0.32em]
                          text-subtle
                        "
                      >
                        {current.id} / 0{disciplines.length}
                      </span>

                      <h3
                        className="
                          mt-3
                          text-[clamp(2rem,4.4vw,3.4rem)]
                          uppercase
                          leading-[0.9]
                          tracking-[-0.055em]
                        "
                        style={{ color: current.accent }}
                      >
                        {current.word}
                      </h3>

                      <span
                        className="
                          mx-auto
                          mt-4
                          block
                          h-px
                          w-10
                        "
                        style={{ background: current.accent }}
                      />

                      <span
                        className="
                          mt-4
                          block
                          text-[0.7rem]
                          uppercase
                          tracking-[0.22em]
                          text-muted
                        "
                      >
                        {current.short}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* CORNER TAGS */}
                {current.tags.map((tag, i) => {
                  const positions = [
                    "left-[-6%] top-[16%]",
                    "right-[-8%] top-[42%]",
                    "left-[6%] bottom-[10%]",
                  ];

                  return (
                    <motion.span
                      key={current.word + tag}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * i, ease }}
                      className={`
                        pointer-events-none
                        absolute
                        ${positions[i]}
                        hidden
                        text-[0.6rem]
                        uppercase
                        tracking-[0.22em]
                        text-muted

                        sm:block
                      `}
                    >
                      <span
                        className="
                          mr-2
                          inline-block
                          h-1.5
                          w-1.5
                          rounded-full
                          align-middle
                        "
                        style={{ background: current.accent }}
                      />
                      {tag}
                    </motion.span>
                  );
                })}
              </motion.div>

              {/* BOTTOM READOUT */}
              <div
                className="
                  mt-10
                  flex
                  items-center
                  justify-between
                  gap-4
                  border-t
                  border-[var(--color-border)]
                  pt-4
                "
              >
                <span className="text-micro text-subtle">
                  ACTIVE
                </span>

                <div className="flex items-center gap-2">
                  {disciplines.map((_, i) => (
                    <button
                      key={i}
                      onMouseEnter={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-label={`Go to discipline ${i + 1}`}
                      className="
                        h-[3px]
                        transition-all
                        duration-500
                      "
                      style={{
                        width: i === active ? "36px" : "14px",
                        background:
                          i === active
                            ? current.accent
                            : "rgba(255,255,255,0.15)",
                      }}
                    />
                  ))}
                </div>

                <span className="text-micro text-subtle">
                  {current.short}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}