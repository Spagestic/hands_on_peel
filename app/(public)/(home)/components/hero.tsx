import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as motion from "motion/react-client";
import HeroBackground from "./hero-background";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
      <HeroBackground />

      <div className="relative z-20 flex flex-col items-start text-left text-white space-y-8 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto mt-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight"
        >
          Preserving craft,
          <br /> extending stories.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-slate-200 max-w-3xl font-light leading-relaxed"
        >
          A living archive of Hong Kong craftsmanship through exhibitions,
          artisan stories, workshops, and curated objects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row flex-wrap justify-start gap-4 pt-4 w-full sm:w-auto"
        >
          <Link href="/exhibitions" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-slate-200 rounded-none text-xs font-mono tracking-[0.22em] uppercase h-12 px-8 w-full"
            >
              Explore Exhibitions
            </Button>
          </Link>
          <Link href="/events" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/40 hover:bg-white/10 hover:text-white rounded-none text-xs font-mono tracking-[0.22em] uppercase h-12 px-8 backdrop-blur-sm bg-black/20 w-full"
            >
              View Events
            </Button>
          </Link>
          <Link href="/support" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/40 hover:bg-white/10 hover:text-white rounded-none text-xs font-mono tracking-[0.22em] uppercase h-12 px-8 backdrop-blur-sm bg-black/20 w-full"
            >
              Support
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
