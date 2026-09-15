"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { featureofthemonthData } from "@/data/Homepage/featureofthemonth";

const ease = [0.16, 1, 0.3, 1];

export default function ThirdSection() {
  return (
    <section
      className="
        section
        relative
        w-full
        overflow-hidden
        bg-[var(--color-black)]
        py-0
        text-primary
      "
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div className="noise z-0 opacity-[0.06]" />

      <div
        className="
          violet-glow-soft
          pointer-events-none
          absolute
          left-1/2
          top-[20%]
          z-0
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          opacity-60
        "
      />

      {/* ==================================================
          MAIN FRAME
          NO OUTER BOX / FULL WIDTH
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.99,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 1.1,
          ease,
        }}
        className="
          relative
          z-10
          flex
          min-h-screen
          w-full
          flex-col
          overflow-hidden
          bg-[var(--color-surface)]
        "
      >

        {/* ==================================================
            LARGE HEADING
        ================================================== */}

        <div
          className="
            flex
            min-h-[105px]
            shrink-0
            items-center
            justify-center
            border-b
            border-[var(--color-border)]
            px-4
            py-5
            sm:min-h-[125px]
            md:h-[19vh]
            md:px-8
          "
        >
          <motion.h2
            initial={{
              opacity: 0,
              y: 70,
              filter: "blur(15px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease,
            }}
            className="
              text-[clamp(1.8rem,7vw,3.2rem)]
              whitespace-nowrap
              text-center
              leading-[0.85]
              tracking-[-0.055em]
              text-primary
              md:text-display-lg
            "
          >
            {featureofthemonthData.heading}
          </motion.h2>
        </div>

        {/* ==================================================
            MOBILE
        ================================================== */}

        <div className="flex flex-col md:hidden">

          {/* ISSUE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
              delay: 0.15,
              ease,
            }}
            className="
              flex
              items-end
              justify-between
              border-b
              border-[var(--color-border)]
              px-4
              py-4
            "
          >
            <div>

              <p className="text-micro mb-2 text-subtle">
                {featureofthemonthData.issue.number}
              </p>

              <p
                className="
                  text-[1.35rem]
                  leading-[0.9]
                  tracking-[-0.03em]
                  text-primary
                "
              >
                {featureofthemonthData.issue.organization}
              </p>

              <p
                className="
                  text-[1.35rem]
                  leading-[0.9]
                  tracking-[-0.03em]
                  text-primary
                "
              >
                {featureofthemonthData.issue.college}
              </p>

            </div>

            <span className="text-micro text-[var(--color-violet-muted)]">
              FEATURE
            </span>
          </motion.div>

          {/* IMAGE */}

          <div
            className="
              relative
              h-[40svh]
              min-h-[220px]
              max-h-[340px]
              overflow-hidden
              border-b
              border-[var(--color-border)]
              p-3
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
                ease,
              }}
              className="
                relative
                h-full
                w-full
                overflow-hidden
                bg-[var(--color-surface-soft)]
              "
            >
              <motion.img
                src={featureofthemonthData.featuredImage.src}
                alt={featureofthemonthData.featuredImage.alt}
                initial={{
                  scale: 1.15,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.2,
                  ease,
                }}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-contain
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-black/5
                "
              />

              <div
                className="
                  absolute
                  left-3
                  top-3
                  z-10
                  text-micro
                  text-primary
                "
              >
                {featureofthemonthData.featuredImage.label}
              </div>

            </motion.div>
          </div>

          {/* CREATOR + DESCRIPTION */}

          <div
            className="
              grid
              grid-cols-2
              border-b
              border-[var(--color-border)]
            "
          >

            <motion.div
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
                duration: 0.7,
                ease,
              }}
              className="
                border-r
                border-[var(--color-border)]
                p-4
              "
            >

              <p className="text-micro mb-2 text-subtle">
                {featureofthemonthData.designer.label}
              </p>

              <h3
                className="
                  text-[1.65rem]
                  leading-[0.85]
                  tracking-[-0.04em]
                  text-primary
                "
              >
                {featureofthemonthData.designer.name.split(" ")[0]}
                <br />
                {featureofthemonthData.designer.name
                  .split(" ")
                  .slice(1)
                  .join(" ")}
              </h3>

              <p className="mt-2 text-[10px] leading-4 text-muted">
                {featureofthemonthData.designer.department}
              </p>

            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease,
              }}
              className="flex items-end p-4"
            >
              <p
                className="
                  text-[10px]
                  leading-[1.5]
                  text-muted
                "
              >
                {featureofthemonthData.description}
              </p>
            </motion.div>

          </div>

          {/* MOBILE BUTTONS */}

          <FeatureButtons />

        </div>

        {/* ==================================================
            DESKTOP
            ORIGINAL 3-COLUMN STRUCTURE
        ================================================== */}

        <div
          className="
            hidden
            min-h-0
            flex-1
            grid-cols-[0.7fr_2.2fr_0.95fr]
            md:grid
          "
        >

          {/* ==================================================
              LEFT
          ================================================== */}

          <div
            className="
              relative
              border-r
              border-[var(--color-border)]
            "
          >

            <motion.div
              initial={{
                opacity: 0,
                x: -60,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease,
              }}
              className="
                absolute
                bottom-5
                left-5
                right-5
              "
            >

              <p className="text-micro mb-5 text-subtle">
                {featureofthemonthData.issue.number}
              </p>

              <p
                className="
                  text-h2
                  leading-[0.88]
                  text-primary
                "
              >
                {featureofthemonthData.issue.organization}
                <br />
                {featureofthemonthData.issue.college}
              </p>

            </motion.div>

          </div>

          {/* ==================================================
              CENTER IMAGE
          ================================================== */}

          <div
            className="
              relative
              min-h-0
              overflow-hidden
              border-r
              border-[var(--color-border)]
              p-5
            "
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.35,
                rotate: -5,
                filter: "blur(25px)",
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                type: "spring",
                stiffness: 65,
                damping: 12,
                mass: 1,
                delay: 0.15,
              }}
              whileHover={{
                scale: 0.985,
              }}
              className="
                relative
                h-full
                w-full
                overflow-hidden
                bg-[var(--color-surface-soft)]
              "
            >

              <motion.img
                src={featureofthemonthData.featuredImage.src}
                alt={featureofthemonthData.featuredImage.alt}
                initial={{
                  scale: 1.3,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 1.5,
                  ease,
                }}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-contain
                  object-center
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-black/5
                "
              />

              <div
                className="
                  absolute
                  left-4
                  top-4
                  z-10
                  text-micro
                  text-primary
                "
              >
                {featureofthemonthData.featuredImage.label}
              </div>

            </motion.div>

          </div>

          {/* ==================================================
              RIGHT
          ================================================== */}

          <div
            className="
              flex
              h-full
              min-h-0
              flex-col
              overflow-hidden
            "
          >

            {/* CREATOR */}

            <motion.div
              initial={{
                opacity: 0,
                x: 60,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease,
              }}
              className="
                shrink-0
                border-b
                border-[var(--color-border)]
                p-5
              "
            >

              <p className="text-micro mb-3 text-subtle">
                {featureofthemonthData.designer.label}
              </p>

              <h3
                className="
                  text-h3
                  leading-[0.9]
                  text-primary
                "
              >
                {featureofthemonthData.designer.name.split(" ")[0]}
                <br />
                {featureofthemonthData.designer.name
                  .split(" ")
                  .slice(1)
                  .join(" ")}
              </h3>

              <p className="text-caption mt-3 text-muted">
                {featureofthemonthData.designer.department}
              </p>

            </motion.div>

            {/* DESCRIPTION */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease,
              }}
              className="
                flex
                min-h-0
                flex-1
                items-end
                p-5
              "
            >

              <p
                className="
                  text-body-sm
                  max-w-[260px]
                  leading-relaxed
                  text-muted
                "
              >
                {featureofthemonthData.description}
              </p>

            </motion.div>

            {/* BUTTONS */}

            <FeatureButtons />

          </div>

        </div>

      </motion.div>

    </section>
  );
}


/* ============================================================
   BUTTONS
   ============================================================ */

function FeatureButtons() {
  return (
    <div className="relative z-20 shrink-0">
    </div>
  );
}