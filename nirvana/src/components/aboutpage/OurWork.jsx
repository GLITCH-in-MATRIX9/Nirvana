"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { workItems } from "../../data/about/ourwork";

const ease = [0.16, 1, 0.3, 1];

const columns = [
  workItems.slice(0, 4),
  workItems.slice(4, 8),
  workItems.slice(8, 12),
  workItems.slice(12, 16),
];

/* =========================================================
   MOBILE MASONRY
========================================================= */

const mobileColumns = [
  workItems.filter((_, index) => index % 2 === 0),
  workItems.filter((_, index) => index % 2 !== 0),
];

export default function OurWork() {
  return (
    <section
      className="
        section
        relative
        w-full
        overflow-hidden
        bg-[var(--color-black)]
      "
    >
      {/* =====================================================
          BACKGROUND NOISE
      ===================================================== */}

      <div className="noise z-0 opacity-[0.06]" />

      {/* =====================================================
          DARK VIOLET ATMOSPHERE
      ===================================================== */}

      <div
        className="
          violet-glow-soft
          pointer-events-none
          absolute
          left-1/2
          top-[8%]
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          opacity-60

          sm:h-[500px]
          sm:w-[500px]

          lg:h-[500px]
          lg:w-[700px]
          lg:opacity-80
        "
      />

      {/* =====================================================
          HEADING
      ===================================================== */}

      <div className="container relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
        >
          {/* Label */}
          <span className="text-micro text-subtle">
            03 — Our Work
          </span>

          {/* Heading */}
          <h2
            className="
              mt-6
              text-[clamp(3.2rem,11vw,6rem)]
              leading-[0.78]
              tracking-[-0.055em]
              text-primary

              sm:mt-8
              sm:text-display-lg
            "
          >
            WORK FROM
            <br />
            <span className="text-subtle">
              NIRVANA.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              text-body
              mt-7
              max-w-[460px]
              leading-6
              text-muted

              sm:mt-10
              sm:text-body-lg
              sm:leading-7
            "
          >
            A collection of ideas, experiments and visual
            worlds created by the people of Nirvana.
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          DESKTOP — FOUR COLUMN MASONRY
      ===================================================== */}

      <div
        className="
          container
          relative
          z-10
          mt-16
          hidden

          sm:mt-20

          lg:mt-24
          lg:block
        "
      >
        <div
          className="
            grid
            grid-cols-4
            gap-4

            xl:gap-5
          "
        >
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="
                flex
                flex-col
                gap-4

                xl:gap-5
              "
            >
              {column.map((item, index) => (
                <WorkImage
                  key={item.id}
                  item={item}
                  index={index}
                  columnIndex={columnIndex}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          MOBILE — PINTEREST STYLE MASONRY
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mt-12
          block
          px-4

          sm:mt-16
          sm:px-6

          lg:hidden
        "
      >
        <div
          className="
            grid
            grid-cols-2
            items-start
            gap-2.5

            sm:gap-3
          "
        >
          {mobileColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="
                flex
                flex-col
                gap-2.5

                sm:gap-3
              "
            >
              {column.map((item, index) => (
                <MobileWorkImage
                  key={item.id}
                  item={item}
                  index={index}
                  columnIndex={columnIndex}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   DESKTOP WORK IMAGE
========================================================= */

function WorkImage({
  item,
  index,
  columnIndex,
}) {
  const images = item.images || (item.image ? [item.image] : []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = images.length > 1;

  /*
   * Generous portrait rectangular heights that preserve artwork aspect ratios
   */
  const heights = [
    "h-[340px]",
    "h-[430px]",
    "h-[370px]",
    "h-[470px]",
  ];

  const height =
    heights[(index + columnIndex) % heights.length];

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        duration: 0.8,
        delay: columnIndex * 0.08 + index * 0.05,
        ease,
      }}
      whileHover={{
        y: -6,
        scale: 1.015,
        transition: {
          duration: 0.45,
          ease,
        },
      }}
      className={`
        group
        relative
        ${height}
        w-full
        cursor-pointer
        overflow-hidden
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
      `}
    >
      {/* IMAGE WITH SOFT CROSSFADE */}
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt={item.artist ? `${item.artist} artwork` : ""}
        draggable="false"
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="
          h-full
          w-full
          object-cover
          grayscale-[15%]
          transition-transform
          duration-700
          ease-out
          group-hover:scale-105
          group-hover:grayscale-0
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-black/15
          transition-opacity
          duration-500
          group-hover:opacity-0
        "
      />

      {/* VIOLET ATMOSPHERE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_50%,rgba(56,32,68,0.20),transparent_62%)]
          opacity-0
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      />

      {/* =====================================================
          CAROUSEL CONTROLS (PHASE 1 - ONLY FOR MULTI-IMAGE CARDS)
      ===================================================== */}
      {hasMultiple && (
        <div
          className="
            absolute
            bottom-3
            left-3
            right-3
            z-20
            flex
            items-center
            justify-between
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
            sm:bottom-4
            sm:left-4
            sm:right-4
          "
        >
          {/* Previous Button */}
          <button
            type="button"
            onClick={prevImage}
            aria-label="Previous artwork"
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              bg-black/40
              text-white
              backdrop-blur-sm
              transition
              hover:bg-white
              hover:text-black
            "
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Indicators */}
          {images.length <= 4 ? (
            <div className="flex items-center gap-1.5">
              {images.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(dotIndex);
                  }}
                  aria-label={`Go to artwork ${dotIndex + 1}`}
                  className={`
                    transition-all
                    duration-300
                    ${
                      currentIndex === dotIndex
                        ? "h-1 w-4 rounded-full bg-white"
                        : "h-1 w-1 rounded-full bg-white/40 hover:bg-white/70"
                    }
                  `}
                />
              ))}
            </div>
          ) : (
            <div
              className="
                rounded-full
                border
                border-white/20
                bg-black/50
                px-2.5
                py-0.5
                text-[10px]
                font-medium
                tracking-wider
                text-white/90
                backdrop-blur-sm
              "
            >
              {currentIndex + 1} / {images.length}
            </div>
          )}

          {/* Next Button */}
          <button
            type="button"
            onClick={nextImage}
            aria-label="Next artwork"
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              bg-black/40
              text-white
              backdrop-blur-sm
              transition
              hover:bg-white
              hover:text-black
            "
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}

      {/* BORDER */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          border
          border-transparent
          transition-colors
          duration-500
          group-hover:border-[var(--color-border-strong)]
        "
      />
    </motion.div>
  );
}

/* =========================================================
   MOBILE PINTEREST IMAGE
========================================================= */

function MobileWorkImage({
  item,
  index,
  columnIndex,
}) {
  const images = item.images || (item.image ? [item.image] : []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const heights = [
    "h-[240px]",
    "h-[320px]",
    "h-[275px]",
    "h-[350px]",
    "h-[255px]",
    "h-[330px]",
  ];

  const height =
    heights[
      (index * 2 + columnIndex) %
        heights.length
    ];

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        duration: 0.7,
        delay:
          columnIndex * 0.08 +
          index * 0.06,
        ease,
      }}
      className={`
        group
        relative
        ${height}
        w-full
        overflow-hidden
        bg-[var(--color-surface)]
      `}
    >
      {/* IMAGE */}
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt={item.artist ? `${item.artist} artwork` : ""}
        draggable="false"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="
          h-full
          w-full
          object-cover
          grayscale-[8%]
          transition-all
          duration-500
          ease-out
        "
      />

      {/* SUBTLE DARK TREATMENT */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-black/10
        "
      />

      {/* MOBILE VIOLET TINT */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 0.12,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_35%,rgba(56,32,68,0.35),transparent_65%)]
        "
      />

      {/* CAROUSEL CONTROLS FOR MOBILE (IF MULTIPLE) */}
      {hasMultiple ? (
        <div
          className="
            absolute
            bottom-2.5
            left-2.5
            right-2.5
            z-20
            flex
            items-center
            justify-between
            sm:bottom-3
            sm:left-3
            sm:right-3
          "
        >
          {/* Previous Button */}
          <button
            type="button"
            onClick={prevImage}
            aria-label="Previous artwork"
            className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-black/50
              text-white
              backdrop-blur-sm
              active:bg-white
              active:text-black
            "
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Indicators */}
          {images.length <= 4 ? (
            <div className="flex items-center gap-1">
              {images.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(dotIndex);
                  }}
                  aria-label={`Go to artwork ${dotIndex + 1}`}
                  className={`
                    transition-all
                    duration-300
                    ${
                      currentIndex === dotIndex
                        ? "h-1 w-3 rounded-full bg-white"
                        : "h-1 w-1 rounded-full bg-white/40"
                    }
                  `}
                />
              ))}
            </div>
          ) : (
            <div
              className="
                rounded-full
                border
                border-white/20
                bg-black/60
                px-2
                py-0.5
                text-[9px]
                font-medium
                tracking-wider
                text-white/90
                backdrop-blur-sm
              "
            >
              {currentIndex + 1} / {images.length}
            </div>
          )}

          {/* Next Button */}
          <button
            type="button"
            onClick={nextImage}
            aria-label="Next artwork"
            className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-black/50
              text-white
              backdrop-blur-sm
              active:bg-white
              active:text-black
            "
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      ) : (
        /* SMALL ACCENT FOR SINGLE IMAGE */
        <div
          className="
            absolute
            bottom-3
            left-3
            h-px
            w-5
            bg-white/40
            sm:bottom-4
            sm:left-4
          "
        />
      )}
    </motion.div>
  );
}