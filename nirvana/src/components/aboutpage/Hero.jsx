"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ease = [0.16, 1, 0.3, 1];

export default function AboutHero() {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 20,
    mass: 0.6,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 20,
    mass: 0.6,
  });

  const imageX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const imageY = useTransform(smoothY, [-1, 1], [-18, 18]);

  const glowX = useTransform(smoothX, [-1, 1], ["35%", "65%"]);
  const glowY = useTransform(smoothY, [-1, 1], ["35%", "65%"]);

  const gridX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const gridY = useTransform(smoothY, [-1, 1], [-8, 8]);

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMove = (event) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) / rect.width) * 2 - 1;

      const y =
        ((event.clientY - rect.top) / rect.height) * 2 - 1;

      mouseX.set(x);
      mouseY.set(y);
    };

    const element = containerRef.current;

    element?.addEventListener("mousemove", handleMove);

    return () => {
      element?.removeEventListener("mousemove", handleMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="
        section
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[var(--color-black)]
        text-primary
      "
    >
      <div className="noise absolute inset-0 z-0 opacity-[0.055]" />

      {/* =========================================================
          MAIN FRAME
      ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.985,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.1,
          ease,
        }}
        className="
          relative
          min-h-[100svh]
          w-full
          overflow-hidden
          bg-[var(--color-surface)]
        "
      >

        {/* =======================================================
            LEFT SIDE
        ======================================================= */}

        <div
          className="
            relative
            z-20
            flex
            min-h-[58svh]
            flex-col
            justify-between
            border-b
            border-[var(--color-border)]
            p-5

            sm:p-8

            md:absolute
            md:inset-y-0
            md:left-0
            md:w-[50%]
            md:border-b-0
            md:border-r
            md:p-12

            lg:p-16
          "
        >

          {/* TOP */}

          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.8,
              ease,
            }}
            className="flex items-center justify-between"
          >
            <span
              className="
                rounded-full
                border
                border-[var(--color-border-strong)]
                px-3
                py-1.5
                text-micro
                text-subtle
              "
            >
              ABOUT US
            </span>

            <span className="text-micro text-subtle">
              01 / 04
            </span>
          </motion.div>


          {/* CENTER */}

          <div className="relative mt-16 md:mt-0">

            <motion.p
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.8,
                ease,
              }}
              className="
                mb-4
                text-micro
                text-[var(--color-violet-muted)]
              "
            >
              THE DESIGN SOCIETY OF IGDTUW
            </motion.p>


            <div className="overflow-hidden">

              <motion.h1
                initial={{
                  y: "110%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 1.15,
                  ease,
                }}
                className="
                  text-[clamp(4rem,15vw,8rem)]
                  leading-[0.75]
                  tracking-[-0.075em]
                  text-primary

                  md:text-display-xl
                "
              >
                NIRVANA
              </motion.h1>

            </div>


            {/* animated line */}

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 64,
              }}
              transition={{
                delay: 1,
                duration: 0.8,
                ease,
              }}
              className="
                mt-7
                h-px
                bg-[var(--color-violet-muted)]
              "
            />


            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.05,
                duration: 0.8,
                ease,
              }}
              className="
                mt-6
                max-w-[520px]
                text-body
                leading-6
                text-muted

                sm:text-body-lg
                sm:leading-7
              "
            >
              A space where ideas find form,
              curiosity becomes craft, and creativity
              becomes a way of thinking.
            </motion.p>

          </div>


          {/* BOTTOM */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.25,
              duration: 0.8,
            }}
            className="
              mt-14
              flex
              items-center
              gap-4
              text-micro
              text-subtle

              md:mt-0
            "
          >
            <span>DESIGN</span>

            <span className="text-[var(--color-violet-muted)]">
              /
            </span>

            <span>CREATE</span>

            <span className="text-[var(--color-violet-muted)]">
              /
            </span>

            <span>EXPERIMENT</span>
          </motion.div>

        </div>


        {/* =======================================================
            RIGHT VISUAL FIELD
        ======================================================= */}

        <div
          className="
            relative
            min-h-[42svh]
            overflow-hidden
            bg-[var(--color-surface-violet)]

            md:absolute
            md:inset-y-0
            md:right-0
            md:w-[50%]
            md:min-h-0
          "
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >

          {/* IMAGE */}

          <motion.div
            style={{
              x: imageX,
              y: imageY,
              scale: 1.08,
            }}
            className="
              absolute
              -inset-[30px]
              overflow-hidden
            "
          >
            <motion.img
              src="/logos/logo_transparent.png"
              alt="Nirvana creative visual"
              initial={{
                scale: 1.1,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1.6,
                delay: 0.2,
                ease,
              }}
              className="
                h-full
                w-full
                object-cover
                object-center
              "
            />
          </motion.div>


          {/* DARK TREATMENT */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-black/40
            "
          />


          {/* MOUSE FOLLOWING LIGHT */}

          <motion.div
            style={{
              left: glowX,
              top: glowY,
            }}
            animate={{
              opacity: hovering ? 0.65 : 0.3,
              scale: hovering ? 1.1 : 1,
            }}
            transition={{
              duration: 0.6,
              ease,
            }}
            className="
              pointer-events-none
              absolute
              h-[260px]
              w-[260px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[radial-gradient(circle,rgba(100,65,120,0.24),transparent_68%)]
              blur-xl
            "
          />


          {/* GRID */}

          <motion.div
            style={{
              x: gridX,
              y: gridY,
            }}
            className="
              pointer-events-none
              absolute
              -inset-10
              opacity-60
              [background-image:linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)]
              [background-size:80px_80px]
            "
          />


          {/* VERTICAL SCAN */}

          <motion.div
            initial={{
              y: "-100%",
            }}
            animate={{
              y: "200%",
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1.5,
            }}
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-white/20
              shadow-[0_0_20px_rgba(255,255,255,0.08)]
            "
          />


          {/* FRAME */}

          <div
            className="
              pointer-events-none
              absolute
              inset-5
              border
              border-white/[0.12]

              sm:inset-7

              md:inset-10
            "
          />


          {/* FLOATING META */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.15,
              duration: 0.8,
              ease,
            }}
            className="
              absolute
              bottom-8
              left-8
              z-20
            "
          >
            <p
              className="
                text-[clamp(1.7rem,4vw,3rem)]
                leading-[0.85]
                tracking-[-0.05em]
              "
            >
              IDEAS
              <br />
              INTO FORM.
            </p>

            <p className="mt-3 text-micro text-subtle">
              A VISUAL CULTURE OF MAKING
            </p>
          </motion.div>


          {/* CORNER INDEX */}

          <span
            className="
              absolute
              right-8
              top-8
              z-20
              text-micro
              text-white/50
            "
          >
            N / 01
          </span>


          <div className="noise absolute inset-0 opacity-[0.09]" />

        </div>

      </motion.div>
    </section>
  );
}