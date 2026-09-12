"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ============================================================
   JOIN COMMUNITY
============================================================ */

export default function JoinCommunity() {
  return (
    <section
      id="join-community"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[var(--color-black)]
        text-primary

      "
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.045]
          [background-image:radial-gradient(rgba(255,255,255,0.8)_0.6px,transparent_0.6px)]
          [background-size:30px_30px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[var(--color-violet-deep)]
          opacity-[0.12]
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          right-[5%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[var(--color-violet-muted)]
          opacity-[0.06]
          blur-[180px]
        "
      />

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          grid
          min-h-screen
          lg:grid-cols-[40%_60%]
        "
      >
        {/* ==================================================
            LEFT — INTRO
        ================================================== */}

        <div
          className="
            flex
            min-h-[650px]
            flex-col
            justify-between
            border-b
            border-white/10
            px-6
            py-12
            md:px-10
            md:py-16
            lg:min-h-screen
            lg:border-b-0
            lg:border-r
            lg:px-14
            lg:py-16
          "
        >
          {/* TOP */}

          <div>
            <motion.div
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
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-8"
            >
              <p
                className="
                  text-micro
                  text-[var(--color-violet-muted)]
                "
              >
                01 / JOIN NIRVANA
              </p>
            </motion.div>

            {/* HEADING */}

            <div className="overflow-hidden">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  text-display-lg
                  max-w-[600px]
                  leading-[0.82]
                  text-primary
                "
              >
                BECOME PART
                <br />

                <span className="text-muted">
                  OF NIRVANA.
                </span>
              </motion.h1>
            </div>

            {/* DESCRIPTION */}

            <motion.p
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
                duration: 0.7,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-body-lg
                mt-9
                max-w-[430px]
                leading-7
                text-muted
              "
            >
              Interact with the website on your right and
              explore what you could create with Nirvana.
              Experiment with layouts, images and ideas.
            </motion.p>
          </div>

          {/* ==================================================
              CTA
          ================================================== */}

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
              duration: 0.7,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-14"
          >
            <p className="text-micro mb-4 text-muted">
              READY WHEN YOU ARE
            </p>

            <a
              href="https://forms.gle/YMBMh331eNRdFCdz5"
              className="
                group
                flex
                w-full
                items-center
                justify-between
                border
                border-[var(--color-violet-border)]
                bg-[var(--color-violet-surface)]
                px-5
                py-4
                text-primary
                transition-all
                duration-500
                hover:border-[var(--color-violet-muted)]
                hover:bg-[var(--color-violet-surface-hover)]
              "
            >
              <span className="text-button">
                FILL THE FORM
              </span>

              <ArrowUpRight
                size={19}
                strokeWidth={1.3}
                className="
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>

            <div
              className="
                mt-5
                flex
                items-center
                justify-between
              "
            >
              <span className="text-micro text-muted">
                DESIGN / CONTENT / EVENTS / PR
              </span>

              <span className="text-micro text-muted">
                IGDTUW
              </span>
            </div>
          </motion.div>
        </div>

        {/* ==================================================
            RIGHT — DESIGN PLAYGROUND
        ================================================== */}

        <WebsitePreview />
      </div>
    </section>
  );
}


/* ============================================================
   WEBSITE PREVIEW
============================================================ */

function WebsitePreview() {
  const [view, setView] = useState("desktop");

  const initialSections = [
    {
      id: "hero-1",
      type: "hero",
      title: "Ideas deserve room to play.",
      description:
        "A student-led collective exploring visual culture, communication and experimental design.",
      image:
        "https://picsum.photos/seed/nirvana-builder-hero/900/1100",
    },

    {
      id: "gallery-1",
      type: "gallery",
      title: "Selected work",
      images: [
        "https://picsum.photos/seed/nirvana-b1/600/800",
        "https://picsum.photos/seed/nirvana-b2/600/800",
        "https://picsum.photos/seed/nirvana-b3/600/800",
      ],
    },

    {
      id: "cta-1",
      type: "cta",
      title: "Made by curious people.",
      button: "Join Nirvana",
    },
  ];

  const [sections, setSections] = useState(initialSections);

  /* ==========================================================
      ADD SECTION
  ========================================================== */

  const addSection = (type) => {
    const id = `${type}-${Date.now()}`;

    const templates = {
      hero: {
        id,
        type: "hero",
        title: "Make something memorable.",
        description:
          "Experiment, explore and turn your ideas into something real.",
        image: `https://picsum.photos/seed/${id}/900/1100`,
      },

      text: {
        id,
        type: "text",
        eyebrow: "Our story",
        title: "Design is how we make sense of things.",
        description:
          "Nirvana is a space for designers, artists and curious people to explore ideas together.",
      },

      image: {
        id,
        type: "image",
        image: `https://picsum.photos/seed/${id}/1200/700`,
        caption: "A little moment from Nirvana.",
      },

      gallery: {
        id,
        type: "gallery",
        title: "Selected work",
        images: [
          `https://picsum.photos/seed/${id}-1/600/800`,
          `https://picsum.photos/seed/${id}-2/600/800`,
          `https://picsum.photos/seed/${id}-3/600/800`,
        ],
      },

      stats: {
        id,
        type: "stats",
        title: "A community built around making.",
      },

      cta: {
        id,
        type: "cta",
        title: "Want to make things with us?",
        button: "Join Nirvana",
      },
    };

    setSections((prev) => [...prev, templates[type]]);
  };

  /* ==========================================================
      DELETE
  ========================================================== */

  const deleteSection = (id) => {
    setSections((prev) =>
      prev.filter((section) => section.id !== id)
    );
  };

  /* ==========================================================
      MOVE
  ========================================================== */

  const moveSection = (fromIndex, toIndex) => {
    if (
      toIndex < 0 ||
      toIndex >= sections.length ||
      fromIndex === toIndex
    ) {
      return;
    }

    setSections((prev) => {
      const copy = [...prev];
      const [moved] = copy.splice(fromIndex, 1);

      copy.splice(toIndex, 0, moved);

      return copy;
    });
  };

  /* ==========================================================
      UPDATE
  ========================================================== */

  const updateSection = (id, key, value) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === id
          ? {
            ...section,
            [key]: value,
          }
          : section
      )
    );
  };

  return (
    <div
      className="
        relative
        flex
        min-h-[700px]
        items-center
        justify-center
        overflow-hidden
        px-5
        py-12
        md:px-8
        lg:min-h-screen
        lg:px-10
      "
    >
      {/* ==================================================
          ATMOSPHERE
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[75%]
          w-[75%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[var(--color-violet-deep)]
          opacity-[0.08]
          blur-[150px]
        "
      />

      {/* ==================================================
          BUILDER
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          flex
          h-[min(720px,82vh)]
          w-full
          max-w-[1100px]
          flex-col
          overflow-hidden
          border
          border-white/[0.10]
          bg-[#0b0a0d]
          shadow-[0_35px_100px_rgba(0,0,0,0.55)]
        "
      >
        {/* ==================================================
            BROWSER HEADER
        ================================================== */}

        <div
          className="
            flex
            h-[44px]
            shrink-0
            items-center
            justify-between
            border-b
            border-white/[0.08]
            bg-[#0e0d10]
            px-4
          "
        >
          <div className="flex items-center gap-[5px]">
            <span className="h-[6px] w-[6px] bg-white/20" />
            <span className="h-[6px] w-[6px] bg-white/15" />
            <span className="h-[6px] w-[6px] bg-white/10" />
          </div>

          <div
            className="
              absolute
              left-1/2
              flex
              h-[25px]
              w-[38%]
              -translate-x-1/2
              items-center
              justify-center
              border
              border-white/[0.06]
              bg-white/[0.025]
            "
          >
            <span className="text-micro text-white/25">
              your-nirvana.design
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setView("desktop")}
              className={`
                px-2
                py-1
                text-[7px]
                uppercase
                tracking-[0.1em]
                transition-colors
                ${view === "desktop"
                  ? "bg-white text-black"
                  : "text-white/30 hover:text-white"
                }
              `}
            >
              Desktop
            </button>

            <button
              onClick={() => setView("mobile")}
              className={`
                px-2
                py-1
                text-[7px]
                uppercase
                tracking-[0.1em]
                transition-colors
                ${view === "mobile"
                  ? "bg-white text-black"
                  : "text-white/30 hover:text-white"
                }
              `}
            >
              Mobile
            </button>
          </div>
        </div>

        {/* ==================================================
            BUILDER BODY
        ================================================== */}

        <div className="flex min-h-0 flex-1">

          {/* ==================================================
              LEFT COMPONENT PANEL
          ================================================== */}

          <div
            className="
              hidden
              w-[155px]
              shrink-0
              flex-col
              border-r
              border-white/[0.08]
              bg-[#0d0c0f]
              md:flex
            "
          >
            <div
              className="
                border-b
                border-white/[0.08]
                px-4
                py-4
              "
            >
              <p className="text-micro text-white/60">
                ADD SECTION
              </p>

              <p className="mt-2 text-[7px] leading-4 text-white/25">
                Build your own
                <br />
                Nirvana page.
              </p>
            </div>

            <div className="flex flex-col gap-1 p-2">
              <BuilderButton
                label="Hero"
                icon="H"
                onClick={() => addSection("hero")}
              />

              <BuilderButton
                label="Text"
                icon="T"
                onClick={() => addSection("text")}
              />

              <BuilderButton
                label="Image"
                icon="I"
                onClick={() => addSection("image")}
              />

              <BuilderButton
                label="Gallery"
                icon="G"
                onClick={() => addSection("gallery")}
              />

              <BuilderButton
                label="Stats"
                icon="S"
                onClick={() => addSection("stats")}
              />

              <BuilderButton
                label="CTA"
                icon="+"
                onClick={() => addSection("cta")}
              />
            </div>

            <div
              className="
                mt-auto
                border-t
                border-white/[0.08]
                p-4
              "
            >
              <p className="text-[7px] leading-[1.6] text-white/25">
                Add blocks, move them around
                and edit the copy.
              </p>
            </div>
          </div>

          {/* ==================================================
              PREVIEW
          ================================================== */}

          <div
            className="
              relative
              flex
              min-w-0
              flex-1
              items-start
              justify-center
              overflow-auto
              bg-[#18171a]
              p-5
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            <motion.div
              layout
              animate={{
                width:
                  view === "mobile"
                    ? 330
                    : "100%",
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                min-h-full
                max-w-[760px]
                overflow-hidden
                bg-[#eeeae4]
                text-[#111]
                shadow-[0_25px_80px_rgba(0,0,0,0.35)]
              "
            >
              {/* ==================================================
                  WEBSITE NAV
              ================================================== */}

              <div
                className="
                  sticky
                  top-0
                  z-40
                  flex
                  h-[46px]
                  items-center
                  justify-between
                  border-b
                  border-black/10
                  bg-[#eeeae4]/90
                  px-5
                  backdrop-blur-xl
                "
              >
                <div className="flex items-center gap-2">
                  <div
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      bg-black
                      text-[7px]
                      text-white
                    "
                  >
                    N
                  </div>

                  <p className="text-micro text-black">
                    Nirvana
                  </p>
                </div>

                <div
                  className={`
                    items-center
                    gap-4
                    ${view === "mobile"
                      ? "hidden"
                      : "flex"
                    }
                  `}
                >
                  {["Work", "About", "Archive"].map(
                    (item) => (
                      <span
                        key={item}
                        className="
                          text-[7px]
                          uppercase
                          tracking-[0.12em]
                          text-black/35
                        "
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>

                <button
                  className="
                    border
                    border-black
                    bg-black
                    px-3
                    py-[6px]
                    text-[7px]
                    uppercase
                    tracking-[0.1em]
                    text-white
                  "
                >
                  Join
                </button>
              </div>

              {/* ==================================================
                  USER SECTIONS
              ================================================== */}

              {sections.map((section, index) => (
                <EditableSection
                  key={section.id}
                  section={section}
                  index={index}
                  total={sections.length}
                  view={view}
                  moveSection={moveSection}
                  deleteSection={deleteSection}
                  updateSection={updateSection}
                />
              ))}

              {/* ==================================================
                  ADD SECTION
              ================================================== */}

              <button
                onClick={() => addSection("text")}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  border-t
                  border-dashed
                  border-black/20
                  py-6
                  text-[7px]
                  uppercase
                  tracking-[0.15em]
                  text-black/30
                  transition-colors
                  hover:bg-[#ded8e5]
                  hover:text-black
                "
              >
                <span className="text-sm">+</span>
                Add another section
              </button>

              {/* FOOTER */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  bg-[#0b0a0d]
                  px-5
                  py-5
                  text-white
                "
              >
                <div>
                  <p className="text-micro">
                    Nirvana
                  </p>

                  <p className="mt-1 text-[6px] text-white/30">
                    Your version.
                  </p>
                </div>

                <span className="text-micro text-white/25">
                  IGDTUW / 2026
                </span>
              </div>
            </motion.div>
          </div>

          {/* ==================================================
              RIGHT PANEL
          ================================================== */}

          <div
            className="
              hidden
              w-[125px]
              shrink-0
              flex-col
              border-l
              border-white/[0.08]
              bg-[#0d0c0f]
              lg:flex
            "
          >
            <div
              className="
                border-b
                border-white/[0.08]
                p-4
              "
            >
              <p className="text-micro text-white/60">
                PAGE
              </p>
            </div>

            <div className="p-3">
              <p className="text-micro text-white/20">
                SECTIONS
              </p>

              <div className="mt-3 flex flex-col gap-1">
                {sections.map((section, index) => (
                  <div
                    key={section.id}
                    className="
                      flex
                      items-center
                      gap-2
                      px-2
                      py-[7px]
                      text-[7px]
                      text-white/35
                      transition-colors
                      hover:bg-white/[0.04]
                    "
                  >
                    <span className="text-white/15">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="capitalize">
                      {section.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSections(initialSections)}
              className="
                mt-auto
                border-t
                border-white/[0.08]
                px-4
                py-4
                text-left
                text-[7px]
                uppercase
                tracking-[0.14em]
                text-white/30
                transition-colors
                hover:bg-white/[0.04]
                hover:text-white
              "
            >
              Reset website
            </button>
          </div>
        </div>

        {/* ==================================================
            STATUS
        ================================================== */}

        <div
          className="
            flex
            h-[27px]
            shrink-0
            items-center
            justify-between
            border-t
            border-white/[0.08]
            bg-[#0d0c0f]
            px-4
          "
        >
          <div className="flex items-center gap-2">
            <div
              className="
                h-[5px]
                w-[5px]
                bg-[var(--color-violet-muted)]
              "
            />

            <p className="text-micro text-white/25">
              Live editing
            </p>
          </div>

          <p className="text-micro text-white/20">
            {sections.length} sections
          </p>
        </div>
      </motion.div>
    </div>
  );
}


/* ============================================================
   BUILDER BUTTON
============================================================ */

function BuilderButton({
  label,
  icon,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
        group
        flex
        items-center
        gap-3
        border
        border-transparent
        px-3
        py-[9px]
        text-left
        transition-colors
        hover:border-white/[0.08]
        hover:bg-white/[0.04]
      "
    >
      <div
        className="
          flex
          h-6
          w-6
          items-center
          justify-center
          border
          border-white/10
          bg-white/[0.02]
          text-[8px]
          text-white/40
          transition-colors
          group-hover:border-[var(--color-violet-border)]
          group-hover:bg-[var(--color-violet-surface)]
          group-hover:text-white
        "
      >
        {icon}
      </div>

      <span
        className="
          text-[7px]
          uppercase
          tracking-[0.12em]
          text-white/35
          group-hover:text-white/70
        "
      >
        {label}
      </span>
    </button>
  );
}


/* ============================================================
   EDITABLE SECTION
============================================================ */

function EditableSection({
  section,
  index,
  total,
  view,
  moveSection,
  deleteSection,
  updateSection,
}) {
  return (
    <motion.div
      layout
      transition={{
        layout: {
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      className="
        group/section
        relative
        border-b
        border-black/10
      "
    >
      {/* ==================================================
          CONTROLS
      ================================================== */}

      <div
        className="
          absolute
          right-2
          top-2
          z-30
          flex
          translate-y-[-5px]
          overflow-hidden
          border
          border-black/10
          bg-white
          opacity-0
          shadow-lg
          transition-all
          duration-200
          group-hover/section:translate-y-0
          group-hover/section:opacity-100
        "
      >
        <button
          disabled={index === 0}
          onClick={() =>
            moveSection(index, index - 1)
          }
          className="
            px-2
            py-[6px]
            text-[8px]
            text-black/40
            hover:bg-black
            hover:text-white
            disabled:opacity-20
          "
        >
          ↑
        </button>

        <button
          disabled={index === total - 1}
          onClick={() =>
            moveSection(index, index + 1)
          }
          className="
            border-l
            border-black/10
            px-2
            py-[6px]
            text-[8px]
            text-black/40
            hover:bg-black
            hover:text-white
            disabled:opacity-20
          "
        >
          ↓
        </button>

        <button
          onClick={() =>
            deleteSection(section.id)
          }
          className="
            border-l
            border-black/10
            px-2
            py-[6px]
            text-[8px]
            text-black/40
            hover:bg-black
            hover:text-white
          "
        >
          ×
        </button>
      </div>

      {/* ==================================================
          HERO
      ================================================== */}

      {section.type === "hero" && (
        <div
          className={`
            grid
            min-h-[300px]
            ${view === "mobile"
              ? "grid-cols-1"
              : "grid-cols-[1.05fr_.95fr]"
            }
          `}
        >
          <div className="flex flex-col justify-between p-7">
            <div>
              <p
                className="
                  text-micro
                  mb-5
                  text-[#5b486c]
                "
              >
                NIRVANA / IGDTUW
              </p>

              <EditableText
                value={section.title}
                onChange={(value) =>
                  updateSection(
                    section.id,
                    "title",
                    value
                  )
                }
                className="
                  text-[clamp(2rem,4vw,3.6rem)]
                  leading-[0.84]
                  tracking-[-0.05em]
                "
              />
            </div>

            <EditableText
              value={section.description}
              onChange={(value) =>
                updateSection(
                  section.id,
                  "description",
                  value
                )
              }
              className="
                mt-8
                max-w-[260px]
                text-[8px]
                leading-[1.6]
                text-black/45
              "
            />
          </div>

          <EditableImage
            src={section.image}
            onChange={(value) =>
              updateSection(
                section.id,
                "image",
                value
              )
            }
          />
        </div>
      )}

      {/* ==================================================
          TEXT
      ================================================== */}

      {section.type === "text" && (
        <div className="grid gap-8 p-8 md:grid-cols-[.5fr_1.5fr]">
          <EditableText
            value={section.eyebrow}
            onChange={(value) =>
              updateSection(
                section.id,
                "eyebrow",
                value
              )
            }
            className="
              text-micro
              text-black/35
            "
          />

          <div>
            <EditableText
              value={section.title}
              onChange={(value) =>
                updateSection(
                  section.id,
                  "title",
                  value
                )
              }
              className="
                max-w-[450px]
                text-[26px]
                leading-[0.95]
                tracking-[-0.035em]
              "
            />

            <EditableText
              value={section.description}
              onChange={(value) =>
                updateSection(
                  section.id,
                  "description",
                  value
                )
              }
              className="
                mt-5
                max-w-[350px]
                text-[8px]
                leading-[1.7]
                text-black/45
              "
            />
          </div>
        </div>
      )}

      {/* ==================================================
          IMAGE
      ================================================== */}

      {section.type === "image" && (
        <div className="p-5">
          <EditableImage
            src={section.image}
            height="h-[300px]"
            onChange={(value) =>
              updateSection(
                section.id,
                "image",
                value
              )
            }
          />

          <EditableText
            value={section.caption}
            onChange={(value) =>
              updateSection(
                section.id,
                "caption",
                value
              )
            }
            className="
              mt-3
              text-micro
              text-black/35
            "
          />
        </div>
      )}

      {/* ==================================================
          GALLERY
      ================================================== */}

      {section.type === "gallery" && (
        <div className="p-6">
          <EditableText
            value={section.title}
            onChange={(value) =>
              updateSection(
                section.id,
                "title",
                value
              )
            }
            className="
              mb-5
              text-[23px]
              tracking-[-0.04em]
            "
          />

          <div
            className={`
              grid
              gap-2
              ${view === "mobile"
                ? "grid-cols-1"
                : "grid-cols-3"
              }
            `}
          >
            {section.images.map(
              (image, imageIndex) => (
                <EditableImage
                  key={`${section.id}-${imageIndex}`}
                  src={image}
                  height="h-[220px]"
                  onChange={(value) => {
                    const newImages = [
                      ...section.images,
                    ];

                    newImages[imageIndex] = value;

                    updateSection(
                      section.id,
                      "images",
                      newImages
                    );
                  }}
                />
              )
            )}
          </div>
        </div>
      )}

      {/* ==================================================
          STATS
      ================================================== */}

      {section.type === "stats" && (
        <div
          className="
            bg-[#e0d9e5]
            p-7
          "
        >
          <EditableText
            value={section.title}
            onChange={(value) =>
              updateSection(
                section.id,
                "title",
                value
              )
            }
            className="
              mb-7
              max-w-[350px]
              text-[27px]
              leading-[0.95]
            "
          />

          <div className="grid grid-cols-3 border-t border-black/15">
            {[
              ["40+", "Designers"],
              ["25+", "Projects"],
              ["∞", "Ideas"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="
                  border-r
                  border-black/15
                  py-5
                  last:border-r-0
                "
              >
                <p className="text-[30px] leading-none">
                  {number}
                </p>

                <p
                  className="
                    mt-2
                    text-micro
                    text-black/45
                  "
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================================================
          CTA
      ================================================== */}

      {section.type === "cta" && (
        <div
          className="
            flex
            items-end
            justify-between
            gap-8
            bg-[#0b0a0d]
            p-8
            text-white
          "
        >
          <EditableText
            value={section.title}
            onChange={(value) =>
              updateSection(
                section.id,
                "title",
                value
              )
            }
            className="
              max-w-[380px]
              text-[30px]
              leading-[0.9]
            "
          />

          <button
            className="
              shrink-0
              border
              border-white/20
              bg-white
              px-5
              py-3
              text-micro
              text-black
              transition-colors
              hover:bg-white/80
            "
          >
            {section.button}
          </button>
        </div>
      )}
    </motion.div>
  );
}


/* ============================================================
   EDITABLE TEXT
============================================================ */

function EditableText({
  value,
  onChange,
  className = "",
}) {
  return (
    <div
      contentEditable
      suppressContentEditableWarning
      onBlur={(event) =>
        onChange(event.currentTarget.innerText)
      }
      className={`
        cursor-text
        outline-none
        transition-colors
        hover:bg-[#ddd6e3]/40
        focus:bg-[#ddd6e3]/60
        focus:ring-1
        focus:ring-[#6a5777]/20
        ${className}
      `}
    >
      {value}
    </div>
  );
}


/* ============================================================
   EDITABLE IMAGE
============================================================ */

function EditableImage({
  src,
  onChange,
  height = "h-full min-h-[260px]",
}) {
  const shuffle = () => {
    onChange(
      `https://picsum.photos/seed/${Date.now()}-${Math.random()}/900/1100`
    );
  };

  return (
    <div
      className={`
        group/image
        relative
        overflow-hidden
        bg-black/10
        ${height}
      `}
    >
      <motion.img
        key={src}
        initial={{
          opacity: 0.6,
          scale: 1.03,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        src={src}
        alt=""
        draggable={false}
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover/image:scale-[1.03]
        "
      />

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-black/0
          opacity-0
          transition-all
          duration-300
          group-hover/image:bg-black/20
          group-hover/image:opacity-100
        "
      >
        <button
          onClick={shuffle}
          className="
            border
            border-white/30
            bg-black/70
            px-4
            py-2
            text-micro
            text-white
            backdrop-blur-sm
            transition-colors
            hover:bg-black
          "
        >
          Shuffle image
        </button>
      </div>
    </div>
  );
}