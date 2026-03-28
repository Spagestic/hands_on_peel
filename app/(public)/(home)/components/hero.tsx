import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as motion from "motion/react-client";
import HeroBackground from "./hero-background";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100svh-5rem)] flex items-center justify-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-20 flex flex-col items-start text-left text-primary-foreground space-y-8 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto mt-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-2"
        >
          Preserving craft,
          <br /> extending stories.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-accent max-w-3xl font-light leading-relaxed"
        >
          A living archive of Hong Kong craftsmanship through exhibitions,
          artisan stories, workshops, and curated objects.
        </motion.p>

        {/* Current Exhibition Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="border-l-2 border-muted pl-4"
        >
          <p className="uppercase text-xs tracking-[0.125em] font-mono mb-1">
            Now on view
          </p>
          <p className="text-xl md:text-2xl font-light">
            Creative Cross-Pollination
          </p>
          <p className="text-sm mt-1">Hong Kong • January – March 2025</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row flex-wrap justify-start gap-4 pt-4 w-full sm:w-auto"
        >
          <Link
            href="/exhibitions/hearts-and-hands"
            className="w-full sm:w-auto"
          >
            {/* Point to actual exhibition */}
            <Button
              size="lg"
              className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 rounded-none text-xs font-mono tracking-[0.22em] uppercase h-12 px-8 w-full"
            >
              View Current Exhibition
            </Button>
          </Link>

          <Link href="/exhibitions" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="text-primary-foreground border-muted hover:bg-primary/40 hover:text-primary-foreground rounded-none text-xs font-mono tracking-[0.22em] uppercase h-12 px-8 backdrop-blur-sm bg-primary/20 w-full"
            >
              Explore Archive
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
