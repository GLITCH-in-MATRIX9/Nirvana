"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const people = [
  {
    image: "/images/team-hero/creative.png",
    label: "CREATIVE",
    number: "01",
    title: "Creative",
    description:
      "Ideas, visuals and experiences that bring Nirvana's vision to life.",
  },
  {
    image: "/images/team-hero/pr.png",
    label: "PR / SPONSORSHIP",
    number: "02",
    title: "PR / Sponsorship",
    description:
      "Building relationships and creating opportunities beyond campus.",
  },
  {
    image: "/images/team-hero/technical.png",
    label: "TECHNICAL",
    number: "03",
    title: "Technical",
    description:
      "Building the technical backbone of Nirvana through innovation and execution.",
  },
  {
    image: "/images/team-hero/events.png",
    label: "EVENTS",
    number: "04",
    title: "Events",
    description:
      "Creating experiences that people remember long after the event ends.",
  },
  {
    image: "/images/team-hero/content.png",
    label: "CONTENT",
    number: "05",
    title: "Content",
    description:
      "Stories, ideas and moments that capture the world of Nirvana.",
  },
];

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[var(--color-black)]
        px-5
        py-16
        text-primary
        md:px-8
        md:py-20
        lg:px-10
        lg:py-24
      "
    >
      {/* ==================================================
          BACKGROUND TEXTURE
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.045]
          [background-image:radial-gradient(rgba(255,255,255,0.8)_0.6px,transparent_0.6px)]
          [background-size:32px_32px]
        "
      />

      {/* ==================================================
          VIOLET ATMOSPHERE
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[45%]
          h-[650px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(ellipse,rgba(61,45,82,0.3),transparent_68%)]
          blur-[130px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-100px)]
          max-w-[1500px]
          flex-col
          items-center
        "
      >

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="flex w-full flex-col items-center text-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="
              text-micro
              mb-6
              text-[var(--color-violet-muted)]
            "
          >
            THE PEOPLE BEHIND NIRVANA
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 45,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease,
            }}
            className="
              text-display-lg
              max-w-[1100px]
              leading-[0.78]
              text-primary
            "
          >
            DIFFERENT ROLES
            <br />

            <span className="text-muted">
              SAME VISION.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease,
            }}
            className="
              text-body-lg
              mt-7
              max-w-[570px]
              leading-7
              text-muted
            "
          >
            Designers, thinkers, storytellers and makers
            shaping the world of Nirvana together.
          </motion.p>

          {/* CTA */}

          <motion.a
            href="#join-community"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease,
            }}
            whileHover={{ y: -3 }}
            className="
              mt-7
              flex
              items-center
              justify-center
              gap-5
              border
              border-white/15
              bg-white/[0.02]
              px-7
              py-3.5
              text-button
              text-white/70
              transition-all
              duration-500
              hover:border-white/30
              hover:bg-white/[0.05]
              hover:text-white
            "
          >
            BECOME PART OF THE TEAM
            <span className="text-base">↗</span>
          </motion.a>

        </div>


        {/* ==================================================
            OVERLAPPING CARD ROW
        ================================================== */}

        <div
          className="
            mt-16
            flex
            h-[450px]
            w-full
            max-w-[1250px]
            items-center
            justify-center
            md:mt-20
            md:h-[520px]
            lg:mt-24
            lg:h-[560px]
          "
        >
          <div
            className="
              group/cards
              flex
              w-full
              items-center
              justify-center
              px-4
              md:px-8
            "
          >
            {people.map((person, index) => (
              <TeamCard
                key={person.number}
                person={person}
                index={index}
              />
            ))}
          </div>
        </div>


        {/* ==================================================
            BOTTOM LABEL
        ================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
            ease,
          }}
          className="
            -mt-2
            flex
            items-center
            gap-4
            text-micro
            text-white/30
          "
        >
          <span className="h-px w-12 bg-white/20" />

          MORE THAN A TEAM

          <span className="h-px w-12 bg-white/20" />
        </motion.div>

      </div>
    </section>
  );
}


/* ============================================================
   TEAM CARD
============================================================ */

function TeamCard({ person, index }) {

  const rotations = [
    "-rotate-[4deg]",
    "-rotate-[2deg]",
    "rotate-0",
    "rotate-[2deg]",
    "rotate-[4deg]",
  ];

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 70,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.9,
        delay: 0.45 + index * 0.08,
        ease,
      }}
      className={`
        group/card
        relative
        h-[350px]
        w-[180px]
        shrink-0
        overflow-hidden
        rounded-[10px]
        border
        border-white/15
        bg-[#09090b]
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        transition-all
        duration-700
        ease-[cubic-bezier(0.16,1,0.3,1)]
        ${rotations[index]}

        sm:h-[390px]
        sm:w-[200px]

        md:h-[440px]
        md:w-[220px]

        lg:h-[490px]
        lg:w-[250px]

        /* OVERLAP */
        -ml-5
        first:ml-0
        md:-ml-7
        lg:-ml-9

        /* BRING HOVERED CARD FORWARD */
        hover:z-50

        /* EXPAND */
        hover:w-[260px]
        sm:hover:w-[285px]
        md:hover:w-[330px]
        lg:hover:w-[370px]

        /* LIFT */
        hover:-translate-y-8

        /* VIOLET EDGE */
        hover:border-[rgba(151,113,180,0.8)]

        hover:shadow-[0_0_25px_rgba(151,113,180,0.4),0_0_70px_rgba(120,80,160,0.2),0_25px_80px_rgba(0,0,0,0.6)]
      `}
    >

      {/* ==================================================
          IMAGE
      ================================================== */}

      <img
        src={person.image}
        alt=""
        draggable="false"
        className="
          absolute
          inset-0
          h-full
          w-full
          select-none
          object-cover
          opacity-75
          transition-transform
          duration-700
          ease-out
          group-hover/card:scale-105
        "
      />


      {/* ==================================================
          DARK GRADIENT
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/25
          to-transparent
        "
      />


      {/* ==================================================
          VIOLET HOVER ATMOSPHERE
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_45%,rgba(105,76,132,0.3),transparent_65%)]
          opacity-0
          transition-opacity
          duration-700
          group-hover/card:opacity-100
        "
      />


      {/* ==================================================
          LEFT GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-8
          left-0
          top-8
          w-[2px]
          bg-[var(--color-violet-muted)]
          opacity-0
          blur-[2px]
          transition-all
          duration-500
          group-hover/card:opacity-100
          group-hover/card:shadow-[0_0_20px_6px_rgba(151,113,180,0.95)]
        "
      />


      {/* ==================================================
          RIGHT GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-8
          right-0
          top-8
          w-[2px]
          bg-[var(--color-violet-muted)]
          opacity-0
          blur-[2px]
          transition-all
          duration-500
          group-hover/card:opacity-100
          group-hover/card:shadow-[0_0_20px_6px_rgba(151,113,180,0.95)]
        "
      />


      {/* ==================================================
          TOP LABEL
      ================================================== */}

      <div
        className="
          absolute
          left-4
          right-4
          top-4
          flex
          items-center
          justify-between
          md:left-5
          md:right-5
          md:top-5
        "
      >
        <span
          className="
            whitespace-nowrap
            text-micro
            text-white/65
          "
        >
          {person.label}
        </span>

        <span className="text-micro text-white/35">
          {person.number}
        </span>
      </div>


      {/* ==================================================
          HOVER CONTENT
      ================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-5
          md:p-6
          lg:p-7
        "
      >

        <h2
          className="
            translate-y-4
            whitespace-nowrap
            text-xl
            font-medium
            text-white
            opacity-0
            transition-all
            duration-500
            group-hover/card:translate-y-0
            group-hover/card:opacity-100
            md:text-2xl
            lg:text-3xl
          "
        >
          {person.title}
        </h2>

        <p
          className="
            mt-3
            max-w-[300px]
            translate-y-4
            text-sm
            leading-6
            text-white/65
            opacity-0
            transition-all
            delay-75
            duration-500
            group-hover/card:translate-y-0
            group-hover/card:opacity-100
          "
        >
          {person.description}
        </p>

        <div
          className="
            mt-5
            h-px
            w-7
            bg-white/60
            transition-all
            duration-500
            group-hover/card:w-14
            group-hover/card:bg-[var(--color-violet-muted)]
          "
        />

      </div>

    </motion.article>
  );
}