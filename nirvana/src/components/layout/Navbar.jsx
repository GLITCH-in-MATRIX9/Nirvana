"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ====================================================
          HAMBURGER / CLOSE BUTTON
      ==================================================== */}

      <header
        className="
          fixed
          right-0
          top-0
          z-[100]
          p-5
          sm:p-6
          md:p-8
        "
      >
        <motion.button
          /* Desktop hover opens the menu */
          onMouseEnter={() => {
            if (
              typeof window !== "undefined" &&
              window.innerWidth >= 768 &&
              !open
            ) {
              setOpen(true);
            }
          }}

          /* Mobile + desktop click toggles */
          onClick={() => {
            setOpen((prev) => !prev);
          }}

          whileHover={{
            scale: 1.08,
          }}

          whileTap={{
            scale: 0.92,
          }}

          className="
            flex
            h-10
            w-10
            cursor-pointer
            items-center
            justify-center
            rounded-[6px]
            border
            border-white/15
            bg-black/50
            backdrop-blur-md
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:border-white/30
            hover:bg-black/70

            sm:h-11
            sm:w-11

            md:h-12
            md:w-12
          "

          aria-label={
            open
              ? "Close menu"
              : "Open menu"
          }
        >
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            {open ? (

              /* CLOSE */

              <motion.div
                key="close"
                initial={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.6,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.6,
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <X
                  size={24}
                  strokeWidth={1.5}
                  className="
                    sm:h-[26px]
                    sm:w-[26px]

                    md:h-[30px]
                    md:w-[30px]
                  "
                />
              </motion.div>

            ) : (

              /* MENU */

              <motion.div
                key="menu"
                initial={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.6,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.6,
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Menu
                  size={24}
                  strokeWidth={1.5}
                  className="
                    sm:h-[26px]
                    sm:w-[26px]

                    md:h-[30px]
                    md:w-[30px]
                  "
                />
              </motion.div>

            )}
          </AnimatePresence>
        </motion.button>
      </header>


      {/* ====================================================
          MENU OVERLAY
      ==================================================== */}

      <AnimatePresence>
        {open && (
          <MenuOverlay
            key="menu-overlay"
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}