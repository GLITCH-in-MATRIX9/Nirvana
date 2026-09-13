"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { facultyTeam } from "@/data/team/faculty";

const ease = [0.16, 1, 0.3, 1];

export default function Faculty() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[var(--color-black)]
        px-5
        py-32
        text-primary
        md:px-10
        md:py-40
        lg:px-14
        lg:py-48
      "
    >
      {/* Background texture */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.07]
          [background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      {/* Subtle violet atmosphere */}

      <div
        className="
          pointer-events-none
          absolute
          left-[30%]
          top-[15%]
          h-[650px]
          w-[650px]
          rounded-full
          bg-[radial-gradient(circle,rgba(61,45,82,0.14),transparent_68%)]
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* ==================================================
            HEADING
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
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
            mb-18
            max-w-[1000px]
            md:mb-10
          "
        >
          <p
            className="
              text-micro
              mb-7
              text-[var(--color-violet-muted)]
            "
          >
            THE GUIDANCE
          </p>

          <h2
            className="
              text-display-lg
              leading-[0.76]
              text-primary
            "
          >
            FACULTY
            <br />

            <span className="text-muted">
              ADVISORS.
            </span>
          </h2>

          <p
            className="
              text-body-lg
              mt-9
              max-w-[520px]
              leading-7
              text-muted
            "
          >
            The people who guide Nirvana, support its
            vision and help us turn ideas into meaningful
            experiences.
          </p>
        </motion.div>


        {/* ==================================================
            FACULTY CARDS
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            md:gap-6
          "
        >
          {facultyTeam.map((faculty, index) => (
            <FacultyCard
              key={faculty.id}
              faculty={faculty}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


/* ============================================================
   FACULTY CARD
============================================================ */

function FacultyCard({ faculty, index }) {
  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease,
      }}
      whileHover={{
        y: -12,
        transition: {
          duration: 0.45,
          ease,
        },
      }}
      className="
        group
        relative
        overflow-hidden
        bg-[#d9d8da]
        text-black
      "
    >

      {/* ==================================================
          IMAGE
      ================================================== */}

      <div
        className="
          relative
          aspect-[1.05]
          w-full
          overflow-hidden
          bg-[#111]
          md:aspect-[1.15]
        "
      >
        <img
          src={faculty.image}
          alt={faculty.name}
          draggable="false"
          className="
            h-full
            w-full
            object-contain
            p-4
            opacity-100
            transition-all
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/30
            via-transparent
            to-transparent
            opacity-70
          "
        />
      </div>


      {/* ==================================================
          INFORMATION
      ================================================== */}

      <div
        className="
          px-6
          py-6
          md:px-8
          md:py-7
        "
      >

        {/* Name + LinkedIn */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-6
          "
        >

          <div>

            <h3
              className="
                text-2xl
                font-medium
                uppercase
                leading-[0.9]
                tracking-[-0.035em]
                md:text-3xl
              "
            >
              {faculty.name}
            </h3>

            <p
              className="
                mt-3
                text-[10px]
                uppercase
                tracking-[0.16em]
                text-black/45
                md:text-xs
              "
            >
              {faculty.designation}
            </p>

          </div>


          {/* LinkedIn */}

          <a
            href={faculty.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${faculty.name} LinkedIn`}
            className="
              shrink-0
              text-black/55
              transition-colors
              duration-300
              hover:text-black
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V9H3.56v11.45zM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 23.2 24 22.22V1.78C24 .8 23.2 0 22.22 0z" />
            </svg>
          </a>

        </div>


        {/* ==================================================
            DEPARTMENT
        ================================================== */}

        <div
          className="
            mt-10
            flex
            items-end
            justify-between
            border-t
            border-black/10
            pt-5
          "
        >

          <div>

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.15em]
                text-black/40
              "
            >
              DEPARTMENT
            </p>

            <p
              className="
                mt-1
                text-sm
                uppercase
                tracking-[0.06em]
                text-black/75
              "
            >
              {faculty.department}
            </p>

          </div>


          {/* Arrow */}

          <motion.div
            whileHover={{
              x: 5,
              y: -5,
            }}
            className="text-black/40"
          >
            <ArrowUpRight
              size={20}
              strokeWidth={1.4}
            />
          </motion.div>

        </div>

      </div>

    </motion.article>
  );
}