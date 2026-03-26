"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Exhibitions", href: "/exhibitions" },
  { label: "Events", href: "/events" },
  { label: "Craftsmen", href: "/craftsmen" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full"
    >
      <nav className="w-full border-b border-foreground/15 bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo_full.png"
                alt="Crafts on Peel Logo"
                width={160}
                height={48}
                className="h-auto w-24 sm:w-28 lg:w-32"
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.25 + i * 0.06,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={link.href}
                  className="text-xs font-mono tracking-[0.22em] uppercase text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop right side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.4 }}
            className="hidden lg:flex items-center gap-4"
          >
            <Link href="#">
              <button className="text-xs font-mono tracking-[0.22em] text-foreground font-medium hover:cursor-pointer">
                EN
              </button>
            </Link>
            <Link href="#">
              <button className="text-xs font-mono tracking-[0.22em] uppercase text-muted-foreground transition-colors duration-200 hover:text-foreground hover:cursor-pointer">
                中文
              </button>
            </Link>

            <Link href="/support">
              <motion.button
                // whileHover={{ scale: 1.02 }}
                // whileTap={{ scale: 0.98 }}
                className="border border-foreground bg-foreground text-background px-4 py-2 text-xs font-mono tracking-[0.22em] uppercase transition-colors hover:bg-transparent hover:text-foreground hover:cursor-pointer"
              >
                Support
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center border border-foreground/15 text-foreground transition hover:bg-foreground/5"
            >
              <span className="sr-only">Toggle navigation menu</span>
              <div className="relative h-4 w-5">
                <motion.span
                  animate={
                    mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                  }
                  className="absolute left-0 top-0 h-[1.5px] w-5 bg-current"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute left-0 top-1.5 h-[1.5px] w-5 bg-current"
                />
                <motion.span
                  animate={
                    mobileMenuOpen
                      ? { rotate: -45, y: -6 }
                      : { rotate: 0, y: 0 }
                  }
                  className="absolute left-0 top-3 h-[1.5px] w-5 bg-current"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-foreground/10 lg:hidden"
            >
              <div className="px-4 py-4 sm:px-6">
                <div className="flex flex-col">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: i * 0.04,
                        duration: 0.22,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block border-b border-foreground/8 py-3 text-xs font-mono tracking-[0.22em] uppercase text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                  <div className="flex items-center gap-4 pt-4">
                    <button className="text-xs font-mono tracking-[0.22em] uppercase text-muted-foreground transition-colors hover:text-foreground">
                      EN
                    </button>
                    <button className="text-xs font-mono tracking-[0.22em] uppercase text-muted-foreground transition-colors hover:text-foreground">
                      中文
                    </button>
                  </div>

                  <Link
                    href="/support"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-4 inline-block w-full"
                  >
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className="w-full border border-foreground bg-foreground text-background px-4 py-3 text-xs font-mono tracking-[0.22em] uppercase transition-colors hover:bg-transparent hover:text-foreground"
                    >
                      Support
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
