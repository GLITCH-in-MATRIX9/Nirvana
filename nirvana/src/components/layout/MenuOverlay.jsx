"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ============================================================
   MENU LINKS
============================================================ */

const menu = [
  {
    name: "HOME",
    href: "/",
    number: "00",
  },
  {
    name: "ABOUT",
    href: "/about",
    number: "01",
  },
  // {
  //   name: "EVENTS",
  //   href: "/events",
  //   number: "02",
  // },

  {
    name: "GALLERY",
    href: "/gallery",
    number: "02",
  },

  {
    name: "TEAM",
    href: "/team",
    number: "03",
  },

  {
    name: "CONTACT",
    href: "/contact",
    number: "04",
  },
];

/* Stepped margins for desktop staggered editorial effect */
const desktopMargins = [
  "md:ml-0",
  "md:ml-8",
  "md:ml-16",
  "md:ml-24",
  "md:ml-32",
];

/* ============================================================
   SOCIAL LINKS
============================================================ */

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/designclubigdtuw/",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nirvana-design-club-of-igdtuw-6590203a8/",
  },
];

const WHATSAPP_LINK =
  "https://chat.whatsapp.com/ImoVWQe1jslG5O72ubUnq2";

/* ============================================================
   ANIMATION
============================================================ */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: {
    x: 35,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

/* ============================================================
   MENU OVERLAY
============================================================ */

export default function MenuOverlay({ onClose }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        inset-0
        z-40
        overflow-y-auto
        bg-[var(--color-black)]
        text-primary
        md:overflow-hidden
      "
    >
      {/* ====================================================
          BACKGROUND NOISE & VIOLET ATMOSPHERE
      ==================================================== */}
      <div className="noise z-0 opacity-[0.06]" />

      <div
        className="
          violet-glow-soft
          pointer-events-none
          absolute
          right-[5%]
          top-[10%]
          h-[320px]
          w-[320px]
          rounded-full
          opacity-50
          md:h-[500px]
          md:w-[500px]
          md:opacity-80
        "
      />

      {/* ====================================================
          MOBILE TOP BAR (LOGO + CLEARANCE FOR CLOSE BUTTON)
      ==================================================== */}
      <div className="flex items-center justify-between px-5 pt-5 sm:px-6 sm:pt-6 md:hidden">
        <Link href="/" onClick={onClose} className="font-display text-xl tracking-[0.16em] text-white">
          NIRVANA
        </Link>
      </div>

      {/* ====================================================
          MAIN LAYOUT CONTAINER
      ==================================================== */}
      <div
        className="
          relative
          z-10
          flex
          min-h-[calc(100%-60px)]
          w-full
          flex-col
          justify-between
          md:min-h-full
          md:h-full
          md:flex-row
        "
      >
        {/* ==================================================
            LEFT SIDE — NAVIGATION LINKS
        ================================================== */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="
            flex
            w-full
            flex-col
            px-6
            py-4
            sm:px-8
            md:h-full
            md:w-[62%]
            md:border-r
            md:border-[var(--color-border)]
            md:p-0
            lg:w-[65%]
          "
        >
          {menu.map((menuItem, index) => (
            <motion.div
              key={menuItem.name}
              variants={itemVariants}
              className={`
                relative
                border-b
                border-[var(--color-border)]
                last:border-b-0
                md:flex-1
                md:last:border-b
                ${desktopMargins[index] || ""}
              `}
            >
              <Link
                href={menuItem.href}
                onClick={onClose}
                className="
                  relative
                  flex
                  w-full
                  items-center
                  overflow-hidden
                  py-4
                  sm:py-5
                  md:h-full
                  md:py-0
                  md:px-10
                  lg:px-14
                  xl:px-20
                "
              >


                {/* Number */}
                <span
                  className="
                    relative
                    z-10
                    mr-4
                    text-micro
                    text-subtle
                    sm:mr-6
                    md:mr-8
                  "
                >
                  {menuItem.number}
                </span>

                {/* Link Title */}
                <h2
                  className="
                    relative
                    z-10
                    font-display
                    text-[1.75rem]
                    font-medium
                    leading-none
                    tracking-[-0.03em]
                    text-primary
                    sm:text-3xl
                    md:text-4xl
                    lg:text-5xl
                    xl:text-6xl
                  "
                >
                  {menuItem.name}
                </h2>


              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ==================================================
            RIGHT SIDE / BOTTOM CONTENT
        ================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            flex-col
            justify-between
            border-t
            border-[var(--color-border)]
            p-6
            sm:p-8
            md:h-full
            md:w-[38%]
            md:border-t-0
            md:overflow-y-auto
            md:p-8
            lg:w-[35%]
            lg:p-12
          "
        >
          {/* Top section with artwork & CTA */}
          <div className="flex flex-col">
            {/* Desktop Brand Title */}
            <Link href="/" onClick={onClose} className="hidden md:block">
              <h1
                className="
                  mb-6
                  font-display
                  text-2xl
                  tracking-[0.18em]
                  text-primary
                  transition-colors
                  duration-300
                  hover:text-[var(--color-violet-muted)]
                  lg:mb-8
                  lg:text-4xl
                "
              >
                NIRVANA
              </h1>
            </Link>

            {/* Showcase Artwork (both mobile & desktop) */}
            <Link href="/" onClick={onClose}>
              <div
                className="
                  group
                  relative
                  mb-4
                  h-[140px]
                  w-full
                  overflow-hidden
                  border
                  border-[var(--color-border)]
                  bg-[var(--color-surface)]
                  sm:h-[160px]
                  md:mb-6
                  md:h-auto
                  md:aspect-[4/3]
                  md:max-h-[220px]
                  lg:max-h-[250px]
                "
              >
                <Image
                  src="/images/hero/navbar.png"
                  alt="Nirvana Design Society"
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.04]
                  "
                />
                <div
                  className="
                    absolute
                    inset-0
                    bg-[var(--color-violet-deep)]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-[0.14]
                  "
                />
              </div>
            </Link>

            {/* Join Community CTA Button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="
                group
                flex
                w-full
                items-center
                justify-between
                border
                border-[var(--color-border-strong)]
                bg-[var(--color-surface)]
                px-5
                py-3.5
                text-micro
                text-primary
                transition-all
                duration-400
                hover:border-[var(--color-violet-muted)]
                hover:bg-[var(--color-violet-soft)]
              "
            >
              <span>Join Community</span>
              <span
                className="
                  text-base
                  text-[var(--color-violet-muted)]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              >
                ↗
              </span>
            </a>
          </div>

          {/* Bottom section (Socials & Tagline) */}
          <div className="mt-6 border-t border-[var(--color-border)] pt-4 md:pt-6">
            <p className="text-micro mb-3 text-subtle">
              Connect
            </p>

            <div className="flex flex-col">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[var(--color-border)]
                    py-2.5
                    text-body-sm
                    text-muted
                    transition-colors
                    duration-300
                    first:border-t
                    hover:text-primary
                  "
                >
                  <span>{social.name}</span>
                  <span
                    className="
                      translate-x-2
                      text-sm
                      text-[var(--color-violet-muted)]
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <p className="text-micro mt-4 text-subtle md:mt-6">
              Create / Explore / Evolve
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}