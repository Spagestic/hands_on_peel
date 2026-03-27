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
  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="relative w-full border-b border-foreground/15 bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
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
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs font-mono tracking-[0.22em] uppercase text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-4">
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
              <button className="border border-foreground bg-foreground text-background px-4 py-2 text-xs font-mono tracking-[0.22em] uppercase transition-colors hover:bg-transparent hover:text-foreground hover:cursor-pointer">
                Support
              </button>
            </Link>
          </div>

          {/* Mobile menu button + dropdown */}
          <details className="group lg:hidden">
            <summary
              aria-label="Toggle navigation menu"
              aria-controls="mobile-menu"
              className="inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center border border-foreground/15 text-foreground transition hover:bg-foreground/5 [&::-webkit-details-marker]:hidden"
            >
              <span className="sr-only">Toggle navigation menu</span>
              <div className="relative h-4 w-5">
                <span className="absolute left-0 top-0 h-[1.5px] w-5 bg-current transition-transform duration-200 group-open:translate-y-1.5 group-open:rotate-45" />
                <span className="absolute left-0 top-1.5 h-[1.5px] w-5 bg-current transition-opacity duration-200 group-open:opacity-0" />
                <span className="absolute left-0 top-3 h-[1.5px] w-5 bg-current transition-transform duration-200 group-open:-translate-y-1.5 group-open:-rotate-45" />
              </div>
            </summary>
            <div
              id="mobile-menu"
              className="absolute left-0 right-0 top-full max-h-0 overflow-hidden border-t border-foreground/10 bg-background transition-all duration-200 group-open:max-h-175"
            >
              <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex flex-col">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block border-b border-foreground/8 py-3 text-xs font-mono tracking-[0.22em] uppercase text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="flex items-center gap-4 pt-4">
                    <button className="text-xs font-mono tracking-[0.22em] uppercase text-muted-foreground transition-colors hover:text-foreground">
                      EN
                    </button>
                    <button className="text-xs font-mono tracking-[0.22em] uppercase text-muted-foreground transition-colors hover:text-foreground">
                      中文
                    </button>
                  </div>

                  <Link href="/support" className="mt-4 inline-block w-full">
                    <button className="w-full border border-foreground bg-foreground px-4 py-3 text-xs font-mono tracking-[0.22em] uppercase text-background transition-colors hover:bg-transparent hover:text-foreground">
                      Support
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
