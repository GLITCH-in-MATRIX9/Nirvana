"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const floatingImages = [
  {
    id: 1,
    src: "/images/icons/Footer-2.png",
    side: "left",
    desktopClass:
      "left-[-3vw] bottom-[7%] w-[clamp(170px,19vw,330px)] aspect-[3/4]",
    mobileClass:
      "left-[-18px] bottom-[20%] w-[105px] aspect-[3/4]",
    rotate: 9,
    delay: 0.22,
  },
  {
    id: 2,
    src: "/images/icons/Footer-1.png",
    side: "right",
    desktopClass:
      "right-[-4vw] bottom-[5%] w-[clamp(180px,20vw,350px)] aspect-[3/4]",
    mobileClass:
      "right-[-18px] bottom-[17%] w-[110px] aspect-[3/4]",
    rotate: -8,
    delay: 0.28,
  },
];

export default function Footer() {
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });

  /* ============================================================
     PARALLAX
  ============================================================ */

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [80, 0, -50]
  );

  const leftParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [35, -50]
  );

  const rightParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [-25, 55]
  );

  return (
    <footer
      id="site-footer"
      ref={footerRef}
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
      {/* ======================================================
          BACKGROUND NOISE
      ====================================================== */}

      <div className="noise z-0 opacity-[0.06]" />


      {/* ======================================================
          DARK VIOLET ATMOSPHERE
      ====================================================== */}

      <div
        className="
          violet-glow-soft
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[380px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          opacity-60

          sm:h-[500px]
          sm:w-[550px]

          lg:h-[600px]
          lg:w-[700px]
          lg:opacity-80
        "
      />


      {/* ======================================================
          FLOATING IMAGES
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          overflow-hidden
        "
      >
        {floatingImages.map((image) => (
          <FloatingImage
            key={image.id}
            image={image}
            leftParallax={leftParallax}
            rightParallax={rightParallax}
          />
        ))}
      </div>


      {/* ======================================================
          CENTER CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-20
          flex
          min-h-[calc(100vh-62px)]
          flex-col
          items-center
          justify-center
          px-5
          py-24
          text-center

          sm:px-6
          sm:py-28
        "
      >

        {/* ====================================================
            EYEBROW
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          }}
          className="
            mb-6
            flex
            items-center
            gap-3

            sm:mb-8
            sm:gap-4
          "
        >
          <div
            className="
              h-px
              w-6
              bg-[var(--color-violet-muted)]
              opacity-60

              sm:w-10
            "
          />

          <p className="text-micro text-subtle">
            Until the next idea
          </p>

          <div
            className="
              h-px
              w-6
              bg-[var(--color-violet-muted)]
              opacity-60

              sm:w-10
            "
          />
        </motion.div>


        {/* ====================================================
            HUGE TITLE
        ==================================================== */}

        <motion.div
          style={{
            y: titleY,
          }}
          className="relative"
        >
          <motion.h2
            initial={{
              opacity: 0,
              y: 100,
              filter: "blur(14px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              select-none
              text-[clamp(4rem,20vw,7rem)]
              leading-[0.72]
              tracking-[-0.07em]
              text-primary

              sm:text-[clamp(6rem,15vw,10rem)]
              lg:text-display-xl
            "
          >
            NIRVANA
          </motion.h2>


          {/* Dark violet glow */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-20%]
              left-1/2
              -z-10
              h-[70px]
              w-[75%]
              -translate-x-1/2
              bg-[var(--color-violet-deep)]
              opacity-30
              blur-[70px]

              sm:h-[100px]
              sm:blur-[80px]
            "
          />
        </motion.div>


        {/* ====================================================
            SUBTEXT
        ==================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
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
            delay: 0.3,
          }}
          className="
            text-body
            mt-8
            max-w-[280px]
            leading-6
            text-muted

            sm:mt-12
            sm:max-w-md
          "
        >
          A space for ideas that refuse to stay still.
          <br />
          Made by designers, dreamers and everything in between.
        </motion.p>


        {/* ====================================================
            CTA
        ==================================================== */}

        <motion.a
          href="https://chat.whatsapp.com/ImoVWQe1jslG5O72ubUnq2"
          target="_blank"
          rel="noopener noreferrer"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          whileHover={{
            scale: 1.06,
          }}
          whileTap={{
            scale: 0.96,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="
            group
            mt-8
            flex
            h-12
            items-center
            gap-3
            rounded-full
            border
            border-[var(--color-violet-muted)]
            bg-[var(--color-violet-soft)]
            px-6
            text-primary
            transition-all
            duration-500
            hover:bg-[var(--color-violet-muted)]
            hover:text-primary

            sm:mt-10
            sm:h-14
            sm:gap-4
            sm:px-7
          "
        >
          <span className="text-micro">
            Join Nirvana
          </span>

          <ArrowUpRight
            size={16}
            strokeWidth={1.4}
            className="
              transition-transform
              duration-500
              group-hover:translate-x-1
              group-hover:-translate-y-1

              sm:h-[17px]
              sm:w-[17px]
            "
          />
        </motion.a>

      </div>


      {/* ======================================================
          BOTTOM BAR
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
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
          delay: 0.4,
        }}
        className="
          relative
          z-30
          grid
          grid-cols-1
          border-t
          border-[var(--color-border)]

          md:grid-cols-[1fr_auto_1fr]
        "
      >

        {/* ====================================================
            LEFT
        ==================================================== */}

        <div
          className="
            flex
            items-center
            justify-center
            px-5
            py-4

            md:justify-start
            md:px-10
            md:py-5

            lg:px-14
          "
        >
          <p className="text-micro text-subtle">
            © 2026 Nirvana
          </p>
        </div>


        {/* ====================================================
            SOCIALS
        ==================================================== */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-7
            border-y
            border-[var(--color-border)]
            px-5
            py-4

            sm:gap-8

            md:border-x
            md:border-y-0
            md:px-8
            md:py-5

            lg:px-10
          "
        >

          {/* Instagram */}

          <a
            href="https://www.instagram.com/designclubigdtuw/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              gap-2
              text-micro
              text-subtle
              transition-colors
              duration-300
              hover:text-primary
            "
          >
            <span>
              Instagram
            </span>

            <ArrowUpRight
              size={11}
              strokeWidth={1.4}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-[2px]
                group-hover:-translate-y-[2px]
              "
            />
          </a>


          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/nirvana-design-club-of-igdtuw-6590203a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              gap-2
              text-micro
              text-subtle
              transition-colors
              duration-300
              hover:text-primary
            "
          >
            <span>
              LinkedIn
            </span>

            <ArrowUpRight
              size={11}
              strokeWidth={1.4}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-[2px]
                group-hover:-translate-y-[2px]
              "
            />
          </a>

        </div>


        {/* ====================================================
            RIGHT
        ==================================================== */}

        <div
          className="
            flex
            items-center
            justify-center
            px-5
            py-4

            md:justify-end
            md:px-10
            md:py-5

            lg:px-14
          "
        >
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              text-micro
              text-subtle
              transition-colors
              hover:text-primary
            "
          >
            Back to top ↑
          </button>
        </div>

      </motion.div>

    </footer>
  );
}


/* ============================================================
   FLOATING IMAGE
============================================================ */

function FloatingImage({
  image,
  leftParallax,
  rightParallax,
}) {
  const fromLeft = image.side === "left";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: fromLeft ? -120 : 120,
        rotate: fromLeft
          ? image.rotate - 10
          : image.rotate + 10,
        scale: 0.82,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        rotate: image.rotate,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.05,
      }}
      transition={{
        duration: 1.1,
        delay: image.delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        y: fromLeft
          ? leftParallax
          : rightParallax,
      }}
      className={`
        absolute
        ${image.desktopClass}
        ${image.mobileClass}

        sm:${image.desktopClass}
      `}
    >
      <div
        className="
          relative
          h-full
          w-full
          overflow-hidden
        "
      >
        <motion.img
          src={image.src}
          alt="Nirvana"
          draggable={false}
          whileHover={{
            scale: 1.07,
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />
      </div>
    </motion.div>
  );
}