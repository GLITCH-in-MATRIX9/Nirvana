"use client";

import { motion } from "framer-motion";
export default function RightHeroCard() {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="
        group
        relative
        h-full
        w-full
        overflow-hidden
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        text-primary
      "
    >

      {/* ==================================================
          DARK ATMOSPHERE
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_20%_15%,rgba(55,39,75,0.24),transparent_32%),radial-gradient(circle_at_85%_65%,rgba(30,32,65,0.22),transparent_38%),linear-gradient(145deg,#07070a_0%,#0b0910_50%,#050508_100%)]
        "
      />

      {/* ==================================================
          SUBTLE TEXTURE
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.16]
          [background-image:radial-gradient(rgba(180,170,210,0.55)_0.5px,transparent_0.5px)]
          [background-position:8px_11px]
          [background-size:31px_31px]
        "
      />

      {/* ==================================================
          TOP BAR
      ================================================== */}

      <div
        className="
          absolute
          left-4
          right-4
          top-4
          z-30
          flex
          items-center
          justify-between

          sm:left-5
          sm:right-5
          sm:top-5
        "
      >

        <div className="flex items-center gap-3">

          {/* LIVE INDICATOR */}

          <motion.span
            animate={{
              opacity: [1, 0.35, 1],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-[5px]
              w-[5px]
              bg-[var(--color-violet-muted)]
            "
          />

          <span className="text-micro text-subtle">
            Upcoming Event
          </span>

        </div>

      </div>

      {/* ==================================================
          EVENT ATMOSPHERE
      ================================================== */}

      <div
        className="
          absolute
          left-[12%]
          right-[12%]
          top-[20%]
          z-10
          h-[30%]

          sm:left-[18%]
          sm:right-[18%]
          sm:top-[24%]
        "
      >

        <div
          className="
            absolute
            inset-0
            bg-[var(--color-violet-deep)]
            opacity-20
            blur-[60px]
            transition-opacity
            duration-700
            group-hover:opacity-30

            sm:blur-[70px]
          "
        />

      </div>

      {/* ==================================================
          BOTTOM EVENT INFORMATION
      ================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-20
          p-4

          sm:p-5
        "
      >

        {/* DIVIDER */}

        <div
          className="
            divider-subtle
            mb-3

            sm:mb-4
          "
        />

        {/* EVENT META */}

        <div
          className="
            mb-2
            flex
            items-center
            justify-between

            sm:mb-3
          "
        >
          <span className="text-micro text-subtle">
            Upcoming Event / 01
          </span>

          <span className="text-micro text-subtle">
            16 SEP
          </span>

        </div>

        {/* EVENT TITLE */}

        <h2
          className="
            text-[clamp(2rem,9vw,3.5rem)]
            leading-[0.82]
            tracking-[-0.045em]
            text-primary

            sm:text-h2
          "
        >
          NIRVANA
          <br />

          <span className="text-muted">
            Orientation
          </span>
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
            mt-2
            max-w-[300px]
            text-[10px]
            leading-[1.45]
            text-muted

            sm:mt-4
            sm:max-w-[320px]
            sm:text-body-sm
            sm:leading-[1.55]
          "
        >
          Meet the team, discover Nirvana, and step into a new creative journey with us.
        </p>


        <div className="mt-4 space-y-1 text-[10px] text-muted sm:text-body-sm">
          <p>25 September 2026</p>
          <p>12 onwards</p>
          <p>Seminar Hall</p>
        </div>

      </div>

    </motion.div>
  );
}