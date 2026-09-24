"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

/* =========================================================
   DATA — shortened
========================================================= */

const philosophyCards = [
  {
    id: 1,
    title: "CURIOSITY",
    label: "QUESTION",
    kicker: "01 / ORIGIN",
    description: "Every good idea begins with a question.",
    body:
      "Curiosity comes before software, before style, before taste. It is the willingness to sit with a problem long enough that it starts to reveal its own shape.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    align: "left",
    rotate: -1.5,
  },
  {
    id: 2,
    title: "EXPERIMENTATION",
    label: "EXPLORE",
    kicker: "02 / PROCESS",
    description: "Try things that might fail. Then try again.",
    body:
      "Small bets, sketches, wrong turns. We treat failure as raw material — the thing that tells us where the real idea is hiding.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
    align: "right",
    rotate: 1.5,
  },
  {
    id: 3,
    title: "CRAFT",
    label: "REFINE",
    kicker: "03 / DETAIL",
    description: "Details are not decoration. They are the work.",
    body:
      "The weight of a stroke. The timing of an ease. The space between two letters. The last ten percent is everything.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    align: "left",
    rotate: -1,
  },
  {
    id: 4,
    title: "EXPRESSION",
    label: "EXPRESS",
    kicker: "04 / VOICE",
    description: "No single way to create. Each idea has its own voice.",
    body:
      "A brand should feel like a person, not a template. Our job is to listen to the idea — not force it into a house style.",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80",
    align: "right",
    rotate: 2,
  },
  {
    id: 5,
    title: "COMMUNITY",
    label: "TOGETHER",
    kicker: "05 / PEOPLE",
    description: "The best ideas rarely happen alone.",
    body:
      "The best work we've made came from arguments, edits, and someone saying — what if we tried it this way instead?",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    align: "left",
    rotate: -1.5,
  },
];

const ease = [0.16, 1, 0.3, 1];

/* =========================================================
   COMPONENT
========================================================= */

export default function OurPhilosophy() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.5,
  });

  const glowY = useTransform(smoothProgress, [0, 1], [120, -120]);

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
      <div className="noise absolute inset-0 z-0 opacity-[0.055]" />

      <motion.div
        style={{ y: glowY }}
        className="
          violet-glow-soft
          pointer-events-none
          absolute
          left-[-12%]
          top-[10%]
          z-0
          h-[500px]
          w-[500px]
          rounded-full
          opacity-40

          lg:h-[700px]
          lg:w-[700px]
        "
      />

      {/* INTRO */}
      <div className="container relative z-10">
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
              02 — OUR PHILOSOPHY
            </span>

            <h2
              className="
                mt-6
                text-[clamp(3rem,9vw,6.5rem)]
                leading-[0.78]
                tracking-[-0.065em]
              "
            >
              WE BELIEVE
              <br />
              <span className="text-subtle">IN MAKING.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-2">
            <span className="text-micro text-subtle">
              / APPROACH
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
              Design is more than making things look good.
              It is about curiosity, experimentation and the
              courage to make something new.
            </p>
          </div>
        </motion.div>
      </div>

      {/* PHILOSOPHY SPREADS */}
      <div className="container relative z-10 mt-24 sm:mt-32">
        <div className="flex flex-col gap-32 sm:gap-40 lg:gap-48">
          {philosophyCards.map((card, index) => (
            <PhilosophySpread
              key={card.id}
              card={card}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PHILOSOPHY SPREAD
========================================================= */

function PhilosophySpread({ card, index }) {
  const isLeft = card.align === "left";
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    mass: 0.5,
  });

  const imageY = useTransform(smooth, [0, 1], ["-3%", "3%"]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease }}
      className="relative w-full"
    >
      {/* top connector node */}
      <div
        className={`
          pointer-events-none
          absolute
          top-[-56px]
          z-10
          hidden
          flex-col
          items-center
          gap-4

          lg:flex

          ${isLeft ? "left-[20%]" : "right-[20%]"}
        `}
      >
        <span
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-white/25
            text-[10px]
            text-white/60
          "
        >
          ↓
        </span>
      </div>

      <div
        className="
          grid
          grid-cols-1
          gap-14

          lg:grid-cols-12
          lg:items-center
          lg:gap-14
        "
      >
        {/* IMAGE + OUTLINED FRAME */}
        <div
          className={`
            relative
            lg:col-span-6

            ${
              isLeft
                ? "lg:col-start-1 lg:order-1"
                : "lg:col-start-7 lg:order-2"
            }
          `}
        >
          <div className="relative ml-6 mb-6 sm:ml-10 sm:mb-10">
            <span
              aria-hidden
              className="
                pointer-events-none
                absolute
                bottom-[-28px]
                left-[-28px]
                z-0
                h-[70%]
                w-[70%]
                border-[3px]
                border-[var(--color-violet-muted)]

                sm:bottom-[-40px]
                sm:left-[-40px]
              "
            />

            <div
              className="
                relative
                z-10
                aspect-[4/3]
                w-full
                overflow-hidden
                bg-[var(--color-surface)]
              "
            >
              <motion.img
                src={card.image}
                alt={card.title}
                style={{ y: imageY }}
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease }}
                className="
                  absolute
                  inset-0
                  h-[110%]
                  w-full
                  object-cover
                  grayscale-[35%]
                  opacity-90
                  transition-all
                  duration-[900ms]

                  hover:scale-[1.04]
                  hover:grayscale-0
                  hover:opacity-100
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/45
                  via-transparent
                  to-transparent
                "
              />

              <span
                className="
                  absolute
                  left-5
                  top-5
                  z-20
                  select-none
                  text-[clamp(1.6rem,3vw,2.4rem)]
                  font-light
                  leading-none
                  tracking-[-0.06em]
                  text-white
                  opacity-90
                  mix-blend-difference
                "
              >
                0{card.id}
              </span>

              <span
                className="
                  absolute
                  bottom-4
                  right-5
                  z-20
                  text-micro
                  text-white/70
                "
              >
                N / 0{card.id}
              </span>
            </div>
          </div>
        </div>

        {/* TEXT BLOCK */}
        <div
          className={`
            relative
            lg:col-span-6

            ${
              isLeft
                ? "lg:col-start-7 lg:order-2"
                : "lg:col-start-1 lg:order-1"
            }
          `}
        >
          {/* TITLE STICKY NOTE — cream */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            whileHover={{ rotate: 0, scale: 1.015 }}
            animate={{ rotate: card.rotate * -1.2 }}
            className="
              relative
              z-20
              w-full
              bg-[#f4efe3]
              text-[#1a1a1a]
              p-6
              shadow-[0_24px_55px_-22px_rgba(0,0,0,0.75)]

              sm:p-7
            "
          >
            <span
              aria-hidden
              className="
                absolute
                left-1/2
                top-[-10px]
                h-[18px]
                w-[78px]
                -translate-x-1/2
                rotate-[-3deg]
                bg-[var(--color-violet-muted)]
                opacity-70
              "
            />

            <div className="flex items-center gap-3">
              <span
                className="
                  inline-flex
                  items-center
                  bg-[var(--color-violet-muted)]
                  px-2.5
                  py-1
                  text-[0.6rem]
                  uppercase
                  tracking-[0.22em]
                  text-[#0b0b0b]
                "
              >
                {card.label}
              </span>
              <span className="text-micro text-black/55">
                {card.kicker}
              </span>
            </div>

            <div className="mt-5">
              <span
                className="
                  block
                  text-[0.7rem]
                  uppercase
                  tracking-[0.2em]
                  text-black/55
                "
              >
                {card.kicker.split(" / ")[1]}
              </span>

              <h3
                className="
                  mt-2
                  text-[clamp(2rem,4.5vw,3.6rem)]
                  uppercase
                  leading-[0.85]
                  tracking-[-0.055em]
                  text-[#1a1a1a]
                "
              >
                {card.title}
              </h3>
            </div>

            <span
              aria-hidden
              className="
                mt-5
                block
                h-[3px]
                w-14
                bg-[var(--color-violet-muted)]
              "
            />

            <p
              className="
                mt-5
                max-w-[440px]
                text-body-sm
                leading-5
                text-black/75

                sm:leading-6
              "
            >
              {card.description}
            </p>
          </motion.div>

          {/* BODY STICKY NOTE — violet */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            whileHover={{ rotate: 0, scale: 1.015 }}
            animate={{ rotate: card.rotate * 0.9 }}
            className={`
              relative
              z-10
              mt-8
              w-full
              max-w-[480px]

              ${isLeft ? "lg:ml-12" : "lg:mr-12 lg:ml-auto"}
            `}
          >
            <span
              aria-hidden
              className={`
                pointer-events-none
                absolute
                top-[-14px]
                z-0
                h-full
                w-full
                border
                border-[var(--color-violet-muted)]
                opacity-60

                ${isLeft ? "left-[-14px]" : "right-[-14px]"}
              `}
            />

            <div
              className="
                relative
                z-10
                bg-[var(--color-violet-muted)]
                text-[#0b0b0b]
                p-6
                shadow-[0_24px_55px_-22px_rgba(0,0,0,0.75)]

                sm:p-7
              "
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#0b0b0b]
                  "
                />
                <span className="text-micro text-black/65">
                  NOTES
                </span>
                <span className="h-px w-8 bg-black/40" />
                <span className="text-micro text-black/55">
                  0{card.id}
                </span>
              </div>

              <p
                className="
                  mt-4
                  text-body-sm
                  leading-5
                  text-black/85

                  sm:leading-6
                "
              >
                {card.body}
              </p>

              <div className="mt-6">
                <a
                  href="#"
                  className="
                    group/btn
                    inline-flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    border
                    border-black/25
                    px-4
                    py-3
                    transition-colors
                    duration-500

                    hover:border-black/60
                  "
                >
                  <span
                    className="
                      text-[0.65rem]
                      uppercase
                      tracking-[0.22em]
                      text-black/70
                      transition-colors
                      duration-500

                      group-hover/btn:text-black
                    "
                  >
                    READ MORE
                  </span>
                  <span
                    className="
                      text-black
                      text-xs
                      transition-transform
                      duration-500

                      group-hover/btn:translate-x-1
                    "
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* bottom connector node */}
      <div
        className={`
          pointer-events-none
          absolute
          bottom-[-56px]
          z-10
          hidden
          flex-col
          items-center
          gap-4

          lg:flex

          ${isLeft ? "left-[20%]" : "right-[20%]"}
        `}
      >
        <span
          className="
            h-10
            border-l
            border-dashed
            border-white/20
          "
        />
        <span
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-white/25
            text-[10px]
            text-white/60
          "
        >
          ↓
        </span>
      </div>
    </motion.article>
  );
}