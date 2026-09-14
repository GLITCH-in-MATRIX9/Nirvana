"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black pt-16 sm:pt-20 lg:pt-24 text-white">
      {/* ============================================================
          HERO CONTENT
      ============================================================ */}

      <div className="relative flex w-full flex-col items-center">
        {/* ==========================================================
            EYEBROW
        ========================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            relative
            z-20
            mt-3
            text-[11px]
            tracking-[-0.01em]
            text-[#c96c32]
            sm:mt-5
            sm:text-xs
          "
        >
          find your vibe
        </motion.p>

        {/* ==========================================================
            NIRVANA TITLE
        ========================================================== */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            z-20
            mt-2
            text-center
            text-[clamp(3.4rem,14vw,7rem)]
            font-black
            uppercase
            leading-[0.8]
            tracking-[-0.07em]
            sm:text-[5rem]
            md:text-[6rem]
            lg:text-[7rem]
          "
        >
          NIRVANA
        </motion.h1>

        {/* ==========================================================
            IMAGE + EVENT GUIDE
        ========================================================== */}

        <div
          className="
            relative
            mt-8
            w-full
            sm:mt-10
            lg:mt-14
          "
        >
          {/* ========================================================
              BACKGROUND IMAGE
          ======================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 1.04,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              h-[38vh]
              min-h-[280px]
              w-full
              overflow-hidden
              sm:h-[45vh]
              sm:min-h-[350px]
              lg:h-[52vh]
              lg:min-h-[450px]
            "
          >
            <img
              src="https://picsum.photos/seed/nirvana-event-guide/2000/1200"
              alt="Nirvana Event Guide"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            {/* Dark overlay */}

            <div
              className="
                absolute
                inset-0
                bg-black/25
              "
            />

            {/* Bottom fade */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-black/10
                via-transparent
                to-black/70
              "
            />
          </motion.div>

          {/* ========================================================
              EVENT GUIDE TYPOGRAPHY
          ======================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-10
              flex
              flex-col
              items-center
              justify-center
              overflow-hidden
            "
          >
            <motion.h2
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                whitespace-nowrap
                text-[18vw]
                font-black
                uppercase
                leading-[0.75]
                tracking-[-0.09em]
                text-white
                mix-blend-screen
                sm:text-[17vw]
                lg:text-[15vw]
              "
            >
              EVENT
            </motion.h2>

            <motion.h2
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                whitespace-nowrap
                text-[18vw]
                font-black
                uppercase
                leading-[0.75]
                tracking-[-0.09em]
                text-white
                mix-blend-screen
                sm:text-[17vw]
                lg:text-[15vw]
              "
            >
              GUIDE
            </motion.h2>
          </div>

          {/* ========================================================
              TOP IMAGE LABEL
          ======================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
            className="
              absolute
              left-5
              top-5
              z-20
              flex
              items-center
              gap-2
              sm:left-8
              sm:top-7
              lg:left-12
              lg:top-8
            "
          >
            <span
              className="
                h-px
                w-5
                bg-white/70
                sm:w-8
              "
            />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-white/70
                sm:text-[9px]
              "
            >
              Nirvana / Events
            </span>
          </motion.div>

          {/* ========================================================
              BOTTOM IMAGE LABEL
          ======================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.9,
            }}
            className="
              absolute
              bottom-5
              left-5
              z-20
              sm:bottom-7
              sm:left-8
              lg:bottom-8
              lg:left-12
            "
          >
            <p
              className="
                max-w-[200px]
                text-[9px]
                leading-4
                text-white/70
                sm:max-w-xs
                sm:text-[10px]
              "
            >
              A collection of challenges,
              experiences and moments created
              by Nirvana.
            </p>
          </motion.div>

          {/* ========================================================
              EVENT COUNT
          ======================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.9,
            }}
            className="
              absolute
              bottom-5
              right-5
              z-20
              flex
              items-center
              gap-2
              sm:bottom-7
              sm:right-8
              lg:bottom-8
              lg:right-12
            "
          >
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.15em]
                text-white/50
              "
            >
              08 Events
            </span>
          </motion.div>
        </div>

        {/* ==========================================================
            BOTTOM INTRO
        ========================================================== */}

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
            duration: 0.8,
            delay: 1,
          }}
          className="
            flex
            w-full
            items-center
            justify-between
            px-5
            py-5
            sm:px-8
            sm:py-7
            lg:px-12
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-white/35
            "
          >
            Design • Create • Explore
          </span>

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-white/35
            "
          >
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}