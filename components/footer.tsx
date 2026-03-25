"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Exhibitions", href: "/exhibitions" },
  { label: "Events", href: "/events" },
  { label: "Craftsmen", href: "/craftsmen" },
  { label: "Shop", href: "/shop" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/craftsonpeel",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/crafts_on_peel_hk/",
    icon: Instagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/message/2XP2P3UDUT55H1",
    icon: MessageCircle,
  },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease }}
      className="border-t border-foreground/10 bg-background px-6 pb-10 pt-16 md:px-12 md:pt-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {/* About Crafts on Peel */}
          <div>
            <h3 className="mb-6 text-sm font-mono uppercase tracking-[0.14em] text-foreground/70 whitespace-nowrap">
              About Crafts on Peel
            </h3>

            <div className="space-y-3 text-base leading-8 text-foreground/90">
              <p>
                Visit by appointment only:
                <br />
                <a
                  href="https://forms.gle/qKVqyvTVs14agCiA7"
                  target="_blank"
                  rel="noreferrer"
                  className="break-all underline underline-offset-4 transition-colors hover:text-muted-foreground"
                >
                  https://forms.gle/qKVqyvTVs14agCiA7
                </a>
              </p>

              <p>
                Opening Hours:
                <br />
                Tue–Sat, 11am–6pm
                <br />
                Closed on Sun, Mon & Public Holidays
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-sm font-mono uppercase tracking-[0.14em] text-foreground/70">
              Navigation
            </h3>

            <ul className="space-y-4 text-base text-foreground/90">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-muted-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-mono uppercase tracking-[0.14em] text-foreground/70">
              Contact
            </h3>

            <div className="space-y-6 text-base leading-8 text-foreground/90">
              <p>
                11 Peel Street, Central
                <br />
                Hong Kong
              </p>

              <div className="space-y-2">
                <a
                  href="tel:+85225100637"
                  className="block transition-colors hover:text-muted-foreground"
                >
                  +852 2510 0637
                </a>

                <a
                  href="mailto:hello@craftsonpeel.com"
                  className="block underline underline-offset-4 transition-colors hover:text-muted-foreground"
                >
                  hello@craftsonpeel.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter & Social Media */}
          <div className="space-y-12">
            <div>
              <h3 className="mb-6 text-sm font-mono uppercase tracking-[0.14em] text-foreground/70">
                Newsletter
              </h3>
              <form
                className="space-y-4"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <input
                    id="footer-newsletter-email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 w-full min-w-0 sm:flex-1 lg:flex-none xl:flex-1 border border-foreground/15 bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground/30"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center border border-foreground/15 px-5 text-xs font-mono uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-foreground hover:text-background"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-mono uppercase tracking-[0.14em] text-foreground/70">
                Social Media
              </h3>

              <div className="flex items-center gap-4">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground/70 transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/10 hover:text-foreground"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 flex flex-col gap-6 border-t border-foreground/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Legal */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
            <Link
              href="/legal/privacy-policy"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms"
              className="transition-colors hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="/legal/refund-returns"
              className="transition-colors hover:text-foreground"
            >
              Refund / Returns
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
            © 2026 Crafts on Peel. All rights reserved.
          </p>

          {/* Language switch */}
          <div className="flex items-center gap-4 text-sm text-foreground/80">
            <button className="transition-colors hover:text-muted-foreground">
              EN
            </button>
            <span className="text-muted-foreground/50">|</span>
            <button className="transition-colors hover:text-muted-foreground">
              中文
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
